"""Synthesize each line with Piper, join with gaps, write narration.wav + timing.json.
Usage: tts_lines.py lines.json voice.onnx outdir"""
import json, os, subprocess, sys, wave
cfg = json.load(open(sys.argv[1])); model, out = sys.argv[2], sys.argv[3]; os.makedirs(out, exist_ok=True)
parts, timing, t = [], [], 0.0
for i, line in enumerate(cfg["lines"]):
    f = os.path.join(out, f"l{i:02d}.wav")
    ok = subprocess.run(["piper", "-m", model, "-f", f, "--", line]).returncode == 0 and os.path.exists(f)
    if not ok:  # older CLI reads text from stdin
        subprocess.run(["piper", "--model", model, "--output_file", f], input=line.encode(), check=True)
    with wave.open(f) as w:
        d = w.getnframes() / w.getframerate()
    timing.append({"i": i, "start": round(t, 3), "end": round(t + d, 3), "text": line}); parts.append(f); t += d + cfg.get("gap", 0.4)
lst = os.path.join(out, "list.txt")
with open(lst, "w") as fh:
    for i, p in enumerate(parts):
        fh.write(f"file '{os.path.abspath(p)}'\n")
        if i < len(parts) - 1:
            g = os.path.join(out, f"gap{i:02d}.wav")
            subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i", "anullsrc=r=22050:cl=mono", "-t", str(cfg.get("gap", 0.4)), "-ar", "22050", "-ac", "1", g], check=True)
            fh.write(f"file '{os.path.abspath(g)}'\n")
subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", lst, "-ar", "48000", "-ac", "1", os.path.join(out, "narration.wav")], check=True)
json.dump({"duration": round(t - cfg.get("gap", 0.4), 3), "lines": timing}, open(os.path.join(out, "timing.json"), "w"), indent=1)
print(json.dumps(timing, indent=1))
