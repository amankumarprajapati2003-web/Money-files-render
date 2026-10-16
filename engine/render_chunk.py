"""Render one chunk of a Money Files true-crime video in headless Chromium.
Usage: render_chunk.py <clip.json path relative to repo root> <chunk> <chunks> <width> <fps> <out.mp4>
Expects jobs/<job>/broll/ (from fetch_broll.py) next to clip.json; works without it (evidence-board backgrounds)."""
import base64, json, os, shutil, subprocess, sys, time
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
clip, k, n, W, fps, out = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5]), sys.argv[6]
H = W * 9 // 16
job = os.path.join(ROOT, os.path.dirname(clip))
C = json.load(open(os.path.join(ROOT, clip)))
dur, beats = C["duration"], C["beats"]
N = round(dur * fps); f0, f1 = k * N // n, (k + 1) * N // n
t0, t1 = f0 / fps, f1 / fps
print(f"chunk {k}/{n}: frames {f0}..{f1} of {N}", flush=True)

# ---- extract b-roll frames for the beats this chunk touches (played at 0.8x for a moody feel)
man_p = os.path.join(job, "broll", "manifest.json")
man = json.load(open(man_p)) if os.path.exists(man_p) else {}
fdir = os.path.join(job, "frames"); shutil.rmtree(fdir, ignore_errors=True); os.makedirs(fdir)
index = {}
for i, b in enumerate(beats):
    m = man.get(f"bg/{i}")
    if not m or m["type"] != "video" or b["end"] < t0 - 0.1 or b["start"] > t1 + 0.1:
        continue
    need = b["end"] - b["start"] + 0.3
    d = os.path.join(fdir, str(i)); os.makedirs(d)
    subprocess.run(["ffmpeg", "-v", "error", "-stream_loop", "-1", "-i", os.path.join(job, "broll", m["file"]), "-t", f"{need / 1.25:.2f}",
                    "-vf", f"setpts=1.25*PTS,fps={fps},scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H}", "-q:v", "3",
                    os.path.join(d, "%05d.jpg")], check=False)
    index[i] = len(os.listdir(d))
json.dump(index, open(os.path.join(fdir, "index.json"), "w"))
print("b-roll frames:", index, flush=True)

srv = subprocess.Popen([sys.executable, "-m", "http.server", "8765"], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1)
try:
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": W, "height": H})
        pg.on("pageerror", lambda e: print("PAGEERR", e, flush=True))
        pg.goto(f"http://localhost:8765/engine/scene.html?w={W}&fps={fps}&clip=../{clip}")
        pg.wait_for_function("window.ready===true", timeout=180000)
        ff = subprocess.Popen(["ffmpeg", "-y", "-v", "error", "-f", "image2pipe", "-c:v", "mjpeg", "-r", str(fps), "-i", "-",
                               "-c:v", "libx264", "-preset", "veryfast", "-crf", "17", "-pix_fmt", "yuv420p", "-r", str(fps), out], stdin=subprocess.PIPE)
        st = time.time()
        for f in range(f0, f1):
            d = pg.evaluate(f"frame({f / fps})")
            ff.stdin.write(base64.b64decode(d.split(",", 1)[1]))
            if (f - f0) % 120 == 0:
                el = time.time() - st; done = f - f0 + 1
                print(f"frame {f}/{f1} {el/done:.2f}s/f eta {el/done*(f1-f)/60:.1f}min", flush=True)
        ff.stdin.close(); ff.wait(); b.close()
        print(f"done in {(time.time()-st)/60:.1f} min", flush=True)
finally:
    srv.terminate()
