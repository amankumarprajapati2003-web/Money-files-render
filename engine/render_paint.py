"""Render the paint-style engine. Usage: render_paint.py <timing.json rel to repo> <out.mp4> [--frames t1,t2,...] [--w 1920] [--fps 24]"""
import base64, os, subprocess, sys, time, argparse
from playwright.sync_api import sync_playwright
ap = argparse.ArgumentParser(); ap.add_argument("timing"); ap.add_argument("out"); ap.add_argument("--frames"); ap.add_argument("--w", type=int, default=1920); ap.add_argument("--fps", type=int, default=24); a = ap.parse_args()
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))); H = a.w * 9 // 16
srv = subprocess.Popen([sys.executable, "-m", "http.server", "8771"], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
try:
    with sync_playwright() as p:
        b = p.chromium.launch(); pg = b.new_page(viewport={"width": a.w, "height": H}); pg.on("pageerror", lambda e: print("PAGEERR", e, flush=True))
        pg.goto(f"http://localhost:8771/engine/paint.html?w={a.w}&timing=../{a.timing}"); pg.wait_for_function("window.ready===true", timeout=60000)
        if a.frames:
            os.makedirs(a.out, exist_ok=True)
            for t in a.frames.split(","):
                open(f"{a.out}/f_{float(t):06.2f}.jpg", "wb").write(base64.b64decode(pg.evaluate(f"frame({t})").split(",", 1)[1]))
        else:
            dur = pg.evaluate("window.DUR"); N = int(dur * a.fps)
            ff = subprocess.Popen(["ffmpeg", "-y", "-v", "error", "-f", "image2pipe", "-c:v", "mjpeg", "-r", str(a.fps), "-i", "-", "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p", a.out], stdin=subprocess.PIPE)
            st = time.time()
            for f in range(N):
                ff.stdin.write(base64.b64decode(pg.evaluate(f"frame({f / a.fps})").split(",", 1)[1]))
            ff.stdin.close(); ff.wait(); print(f"{N} frames in {(time.time()-st)/60:.1f} min")
        b.close()
finally:
    srv.terminate()
