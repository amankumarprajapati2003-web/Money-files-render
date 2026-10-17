"""Fetch free-licence video b-roll (and stills) from Wikimedia Commons (+ Pixabay if a key exists).
Usage: fetch_vids.py jobs/<job>/vids.json outdir
vids.json: {"items": [{"key": "sun", "q": "solar flare SDO", "n": 3, "kind": "video"|"image", "secs": 8}]}
Writes outdir/<key>_<k>.mp4|.jpg, outdir/manifest.json and outdir/credits.txt."""
import json, os, re, subprocess, sys, time, urllib.parse, urllib.request

UA = "MoneyFilesRender/1.0 (github.com/amankumarprajapati2003-web/Money-files-render)"
KEY = os.environ.get("PIXABAY_API_KEY", "").strip()
FREE = re.compile(r"^(cc0|cc[- ]by(-sa)?([- ][0-9.]+)?|public domain|pd\b|pd-|no restrictions)", re.I)
cfg = json.load(open(sys.argv[1])); out = sys.argv[2]; os.makedirs(out, exist_ok=True)
used, manifest, credits = set(), [], []


def jget(url):
    for k in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=60) as r:
                time.sleep(0.5); return json.loads(r.read())
        except Exception as e:
            print("  ! ", e, url[:100]); time.sleep(3 * (k + 1))
    return None


def strip(s):
    return re.sub(r"<[^>]+>", "", s or "").strip()


def commons(q, kind, n):
    ft = "filetype:video" if kind == "video" else "filetype:bitmap"
    prop = "videoinfo" if kind == "video" else "imageinfo"
    pre = "vi" if kind == "video" else "ii"
    params = {"action": "query", "generator": "search", "gsrsearch": f"{q} {ft}", "gsrnamespace": 6, "gsrlimit": 30,
              "prop": prop, f"{pre}prop": "url|size|mime|extmetadata" + ("|derivatives" if kind == "video" else ""), "format": "json"}
    if kind != "video": params["iiurlwidth"] = 2000
    d = jget("https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)) or {}
    pages = sorted(((d.get("query") or {}).get("pages") or {}).values(), key=lambda p: p.get("index", 99))
    res = []
    for pg in pages:
        info = (pg.get(prop) or [None])[0]
        if not info: continue
        md = info.get("extmetadata") or {}
        lic = strip((md.get("LicenseShortName") or {}).get("value", ""))
        if not FREE.search(lic): continue
        artist = strip((md.get("Artist") or {}).get("value", "")) or "Unknown"
        if kind == "video":
            if info.get("duration", 99) < 3 or info.get("height", 0) < 480: continue
            ders = [x for x in info.get("derivatives", []) if x.get("height", 0) and x["height"] <= 1080 and "webm" in x.get("type", "") + x.get("src", "")]
            ders.sort(key=lambda x: -x["height"])
            url = ders[0]["src"] if ders else info["url"]
        else:
            if info.get("width", 0) < 900: continue
            url = info.get("thumburl") or info["url"]
        if url in used: continue
        res.append({"url": url, "page": info.get("descriptionurl", ""), "dur": info.get("duration", 0),
                    "credit": f"{pg['title'].replace('File:', '')} by {artist[:80]}, {lic} via Wikimedia Commons"})
        if len(res) >= n: break
    return res


def pixabay(q, n):
    if not KEY: return []
    d = jget("https://pixabay.com/api/videos/?" + urllib.parse.urlencode({"key": KEY, "q": q[:100], "per_page": 20, "safesearch": "true"})) or {}
    res = []
    for h in d.get("hits", []):
        v = h["videos"].get("large") or h["videos"].get("medium") or {}
        if v.get("url") and v["url"] not in used:
            res.append({"url": v["url"], "page": h.get("pageURL", ""), "dur": h.get("duration", 0),
                        "credit": f"Pixabay video {h['id']} by {h.get('user')} (Pixabay Content License)"})
        if len(res) >= n: break
    return res


for it in cfg["items"]:
    kind, n = it.get("kind", "video"), it.get("n", 2)
    print("==", it["key"], it["q"], flush=True)
    cands = (pixabay(it["q"], n) if kind == "video" else []) + commons(it.get("cq", it["q"]), kind, n + 8)
    got = 0
    for c in cands:
        if got >= n: break
        fn = f"{out}/{it['key']}_{got}." + ("mp4" if kind == "video" else "jpg")
        if kind == "video":
            secs = it.get("secs", 8); ss = 1.0 if c["dur"] > secs + 2 else 0
            cmd = ["ffmpeg", "-y", "-v", "error", "-ss", str(ss), "-i", c["url"], "-t", str(secs), "-an",
                   "-vf", "scale=-2:720,fps=30", "-c:v", "libx264", "-preset", "veryfast", "-crf", "22", "-pix_fmt", "yuv420p", fn]
        else:
            cmd = ["curl", "-sSL", "--fail", "-A", UA, "-o", fn, c["url"]]
        try:
            ok = subprocess.run(cmd, timeout=300).returncode == 0 and os.path.getsize(fn) > 20000
        except Exception as e:
            ok = False; print("  ! ", e)
        if not ok:
            if os.path.exists(fn): os.remove(fn)
            continue
        used.add(c["url"]); got += 1
        manifest.append({"file": os.path.basename(fn), "key": it["key"], **c}); credits.append("- " + c["credit"])
        print("  +", os.path.basename(fn), c["credit"][:90], flush=True)
json.dump(manifest, open(f"{out}/manifest.json", "w"), indent=1, ensure_ascii=False)
open(f"{out}/credits.txt", "w").write("B-roll credits:\n" + "\n".join(credits) + "\n")
print(len(manifest), "assets; pixabay", "on" if KEY else "off")
