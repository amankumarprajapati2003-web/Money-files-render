"""Natural Hindi/Indian neural voices via edge-tts (free). Usage: tts_edge.py cast.json outdir
cast.json: {"lines": [{"who": "...", "voice": "hi-IN-SwaraNeural", "rate": "+0%", "pitch": "+0Hz", "text": "..."}]}"""
import asyncio, json, os, sys, subprocess
import edge_tts
cfg = json.load(open(sys.argv[1])); out = sys.argv[2]; os.makedirs(out, exist_ok=True)
async def main():
    meta = []
    for i, ln in enumerate(cfg["lines"]):
        f = f"{out}/line_{i:02d}.mp3"
        c = edge_tts.Communicate(ln["text"], ln["voice"], rate=ln.get("rate", "+0%"), pitch=ln.get("pitch", "+0Hz"))
        await c.save(f)
        d = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f], capture_output=True, text=True).stdout)
        meta.append({"i": i, "who": ln["who"], "dur": round(d, 3), "text": ln["text"]}); print(i, ln["who"], d)
    json.dump(meta, open(f"{out}/lines.json", "w"), ensure_ascii=False, indent=1)
asyncio.run(main())
