"""Multi-character Kokoro TTS (free, Apache-2.0).
Usage: tts_cast.py cast.json outdir
cast.json: {"lang": "h", "lines": [{"who": "...", "voice": "hf_alpha", "speed": 1.0, "text": "..."}]}
Writes outdir/line_XX.wav (24 kHz) and outdir/lines.json with durations."""
import json, os, sys
import numpy as np, soundfile as sf
from kokoro import KPipeline
cfg = json.load(open(sys.argv[1])); out = sys.argv[2]; os.makedirs(out, exist_ok=True)
pipe = KPipeline(lang_code=cfg.get("lang", "h"))
meta = []
for i, ln in enumerate(cfg["lines"]):
    chunks = [np.asarray(a, dtype=np.float32) for _, _, a in pipe(ln["text"], voice=ln["voice"], speed=ln.get("speed", 1.0), split_pattern=r"(?<=[.!?।])\s+")]
    audio = np.concatenate(chunks) if chunks else np.zeros(2400, np.float32)
    f = f"{out}/line_{i:02d}.wav"; sf.write(f, audio, 24000)
    meta.append({"i": i, "who": ln["who"], "voice": ln["voice"], "dur": round(len(audio) / 24000, 3), "text": ln["text"]})
    print(i, ln["who"], meta[-1]["dur"])
json.dump(meta, open(f"{out}/lines.json", "w"), ensure_ascii=False, indent=1)
