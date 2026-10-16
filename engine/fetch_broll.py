"""Fetch copyright-free b-roll for a job and write broll/manifest.json, credits.txt and contact sheets.

Usage: fetch_broll.py jobs/<job>/clip.json

Per beat, clip.json may carry:
  "bg":     {"wiki": "Wikipedia_Article", "q": "stock query", "cq": "commons query", "still": true}
  "photos": [{"wiki": "Article"} | {"q": "stock query"} ...]   (polaroids / evidence-board photos)

Sources, in order: Wikipedia lead image (Commons, free licences only) -> Pixabay video (needs
PIXABAY_API_KEY) -> Pixabay photo -> Wikimedia Commons photo search. Everything accepted is
either Pixabay Content License or CC0 / CC BY / CC BY-SA / public domain, and credited.
Pin a choice by adding "pick": {"type": "...", "url": "...", "credit": "..."} to the spec.
"""
import json, os, re, subprocess, sys, time, urllib.parse, urllib.request

UA = "MoneyFilesRender/1.0 (github.com/amankumarprajapati2003-web/Money-files-render)"
KEY = os.environ.get("PIXABAY_API_KEY", "").strip()
FREE = re.compile(r"^(cc0|cc[- ]by(-sa)?([- ][0-9.]+)?|public domain|pd\b|pd-|no restrictions)", re.I)

clip_path = sys.argv[1]
job_dir = os.path.dirname(clip_path)
out_dir = os.path.join(job_dir, "broll"); os.makedirs(out_dir, exist_ok=True)
clip = json.load(open(clip_path))
used = set()


def get(url, tries=3):
    for k in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except Exception as e:
            if k == tries - 1:
                print("  ! fetch failed", url[:120], e, flush=True)
                return None
            time.sleep(2 + 3 * k)


def jget(url):
    b = get(url)
    try:
        return json.loads(b) if b else None
    except Exception:
        return None


def strip_html(s):
    return re.sub(r"<[^>]+>", "", s or "").strip()


def commons_info(titles, width=2400):
    q = urllib.parse.urlencode({"action": "query", "titles": "|".join(titles), "prop": "imageinfo",
                                "iiprop": "url|size|mime|extmetadata", "iiurlwidth": width, "format": "json"})
    d = jget("https://commons.wikimedia.org/w/api.php?" + q) or {}
    return list(((d.get("query") or {}).get("pages") or {}).values())


def commons_ok(page, min_w=1000):
    ii = (page.get("imageinfo") or [None])[0]
    if not ii or page.get("missing") is not None:
        return None
    md = ii.get("extmetadata") or {}
    lic = strip_html((md.get("LicenseShortName") or {}).get("value", ""))
    if not FREE.search(lic) or ii.get("mime") not in ("image/jpeg", "image/png", "image/webp"):
        return None
    if ii.get("width", 0) < min_w:
        return None
    artist = strip_html((md.get("Artist") or {}).get("value", "")) or "Unknown"
    return {"type": "image", "url": ii.get("thumburl") or ii["url"], "page": ii.get("descriptionurl", ""),
            "credit": f"{page['title'].replace('File:', '')} by {artist[:80]}, {lic} via Wikimedia Commons",
            "w": ii.get("width"), "h": ii.get("height")}


def from_wiki(article):
    q = urllib.parse.urlencode({"action": "query", "titles": article, "prop": "pageimages", "piprop": "name",
                                "redirects": 1, "format": "json"})
    d = jget("https://en.wikipedia.org/w/api.php?" + q) or {}
    for p in ((d.get("query") or {}).get("pages") or {}).values():
        name = p.get("pageimage")
        if name:
            for pg in commons_info(["File:" + name]):
                r = commons_ok(pg, min_w=400)
                if r:
                    return r
    return None


def from_commons_search(query, landscape=True):
    q = urllib.parse.urlencode({"action": "query", "generator": "search", "gsrsearch": query + " filetype:bitmap",
                                "gsrnamespace": 6, "gsrlimit": 25, "prop": "imageinfo",
                                "iiprop": "url|size|mime|extmetadata", "iiurlwidth": 2400, "format": "json"})
    d = jget("https://commons.wikimedia.org/w/api.php?" + q) or {}
    pages = sorted(((d.get("query") or {}).get("pages") or {}).values(), key=lambda p: p.get("index", 99))
    for pg in pages:
        r = commons_ok(pg, min_w=1600)
        if r and r["url"] not in used and (not landscape or r["w"] >= r["h"] * 1.2):
            return r
    return None


def from_pixabay_video(query, need):
    if not KEY:
        return None
    d = jget("https://pixabay.com/api/videos/?" + urllib.parse.urlencode({"key": KEY, "q": query[:100], "per_page": 30, "safesearch": "true"}))
    hits = (d or {}).get("hits", [])
    best = None
    for h in hits:
        v = h.get("videos", {}).get("large") or {}
        if not v.get("url") or v.get("width", 0) < 1920 or v["url"] in used:
            v = h.get("videos", {}).get("medium") or {}
            if not v.get("url") or v.get("width", 0) < 1280 or v["url"] in used:
                continue
        cand = {"type": "video", "url": v["url"], "dur": h.get("duration", 0), "page": h.get("pageURL", ""),
                "credit": f"Pixabay video {h.get('id')} by {h.get('user')} (Pixabay Content License)"}
        if h.get("duration", 0) >= need:
            return cand
        best = best or cand
    return best


def from_pixabay_photo(query):
    if not KEY:
        return None
    d = jget("https://pixabay.com/api/?" + urllib.parse.urlencode({"key": KEY, "q": query[:100], "image_type": "photo",
                                                                   "orientation": "horizontal", "min_width": 1920, "per_page": 30, "safesearch": "true"}))
    for h in (d or {}).get("hits", []):
        u = h.get("largeImageURL")
        if u and u not in used:
            return {"type": "image", "url": u, "page": h.get("pageURL", ""),
                    "credit": f"Pixabay photo {h.get('id')} by {h.get('user')} (Pixabay Content License)"}
    return None


def resolve(spec, need, prefer_video=True):
    if spec.get("pick"):
        return spec["pick"]
    tries = []
    if spec.get("wiki"):
        tries.append(lambda: from_wiki(spec["wiki"]))
    if spec.get("q"):
        if prefer_video and not spec.get("still"):
            tries.append(lambda: from_pixabay_video(spec["q"], need))
        tries.append(lambda: from_pixabay_photo(spec["q"]))
    for cq in [spec.get("cq"), spec.get("q")]:
        if cq:
            tries.append(lambda cq=cq: from_commons_search(cq))
    for t in tries:
        r = t()
        if r:
            return r
    return None


def save(key, r, need):
    fn = key.replace("/", "_")
    if r["type"] == "video":
        path = os.path.join(out_dir, fn + ".mp4")
        slow = need * 0.8 + 1.0
        cmd = ["ffmpeg", "-y", "-v", "error", "-stream_loop", "-1", "-i", r["url"], "-t", f"{slow:.2f}", "-an",
               "-vf", "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=30",
               "-c:v", "libx264", "-preset", "veryfast", "-crf", "21", "-pix_fmt", "yuv420p", path]
        ok = subprocess.run(cmd, timeout=600).returncode == 0
    else:
        path = os.path.join(out_dir, fn + ".jpg")
        b = get(r["url"])
        ok = bool(b)
        if ok:
            raw = path + ".src"; open(raw, "wb").write(b)
            ok = subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", raw, "-vf", "scale='min(2400,iw)':-2", "-q:v", "3", path]).returncode == 0
            os.remove(raw)
    if not ok:
        return None
    used.add(r["url"])
    return {"type": r["type"], "file": os.path.basename(path), "credit": r["credit"], "page": r.get("page", ""), "src": r["url"]}


manifest = {}
for i, b in enumerate(clip["beats"]):
    need = b["end"] - b["start"] + 0.6
    jobs = []
    if b.get("bg"):
        jobs.append((f"bg/{i}", b["bg"], True))
    for k, ph in enumerate(b.get("photos") or []):
        if ph:
            jobs.append((f"ph/{i}/{k}", ph, False))
    for key, spec, vid in jobs:
        r = resolve(spec, need, prefer_video=vid)
        m = save(key, r, need) if r else None
        print(f"{key:10s} {b['lay']:9s} {json.dumps(spec)[:70]:70s} -> {(m or {}).get('credit', 'NONE')[:90]}", flush=True)
        if m:
            manifest[key] = m
        time.sleep(0.3)

json.dump(manifest, open(os.path.join(out_dir, "manifest.json"), "w"), indent=1)
seen = []
for m in manifest.values():
    if m["credit"] not in seen:
        seen.append(m["credit"])
open(os.path.join(out_dir, "credits.txt"), "w").write("B-roll and photo credits:\n" + "\n".join(f"- {c}" for c in seen) + "\n")

# contact sheets: 1 thumbnail per asset, labelled with its key
from PIL import Image, ImageDraw, ImageFont
thumbs = []
for key, m in manifest.items():
    p = os.path.join(out_dir, m["file"]); t = p + ".thumb.jpg"
    src = ["-ss", "1", "-i", p] if m["type"] == "video" else ["-i", p]
    if subprocess.run(["ffmpeg", "-y", "-v", "error", *src, "-frames:v", "1", "-vf", "scale=384:216:force_original_aspect_ratio=increase,crop=384:216", t]).returncode == 0:
        thumbs.append((key, m, t))
cols, per = 5, 30
for s in range(0, len(thumbs), per):
    part = thumbs[s:s + per]; rows = (len(part) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * 392, rows * 250), (20, 20, 20)); dr = ImageDraw.Draw(sheet)
    for n, (key, m, t) in enumerate(part):
        x, y = (n % cols) * 392 + 4, (n // cols) * 250 + 4
        sheet.paste(Image.open(t), (x, y))
        beat = clip["beats"][int(key.split("/")[1])]
        label = f"{key} [{m['type'][0]}] {beat['lay']}: {(beat.get('text') or beat.get('label') or beat.get('name') or beat.get('head') or '')[:30]}"
        dr.text((x, y + 220), label, fill=(255, 255, 255))
    sheet.save(os.path.join(out_dir, f"contact_{s // per + 1}.jpg"), quality=85)
for _, _, t in thumbs:
    os.remove(t)
print(f"{len(manifest)} assets, pixabay={'on' if KEY else 'off'}")
