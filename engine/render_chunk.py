"""Render one chunk of a Glass Dossier video in headless Chromium (software WebGL).
Usage: render_chunk.py <clip.json path relative to repo root> <chunk> <chunks> <width> <fps> <out.mp4>"""
import base64, json, os, subprocess, sys, time
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
clip, k, n, W, fps, out = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5]), sys.argv[6]
dur = json.load(open(os.path.join(ROOT, clip)))["duration"]
N = round(dur * fps); f0, f1 = k * N // n, (k + 1) * N // n
print(f"chunk {k}/{n}: frames {f0}..{f1} of {N}", flush=True)
srv = subprocess.Popen([sys.executable, "-m", "http.server", "8765"], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1)
try:
    with sync_playwright() as p:
        b = p.chromium.launch(args=["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"])
        pg = b.new_page(viewport={"width": W, "height": W * 9 // 16})
        pg.on("pageerror", lambda e: print("PAGEERR", e, flush=True))
        pg.goto(f"http://localhost:8765/engine/scene.html?w={W}&clip=../{clip}")
        pg.wait_for_function("window.ready===true", timeout=180000)
        ff = subprocess.Popen(["ffmpeg", "-y", "-v", "error", "-f", "image2pipe", "-c:v", "mjpeg", "-r", str(fps), "-i", "-",
                               "-c:v", "libx264", "-preset", "veryfast", "-crf", "16", "-pix_fmt", "yuv420p", "-r", str(fps), out], stdin=subprocess.PIPE)
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
