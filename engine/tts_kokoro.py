"""Free narration with Kokoro-82M (Apache-2.0).  Usage:
  tts_kokoro.py text.txt voice out.wav [speed]          -> one narration file (paragraph pauses kept)
  tts_kokoro.py --samples text.txt v1,v2,... outdir     -> one sample per voice"""
import sys, numpy as np, soundfile as sf
from kokoro import KPipeline
pipe = KPipeline(lang_code="a")
def speak(text, voice, speed=1.0):
    out = []
    for para in [p.strip() for p in text.split("\n\n") if p.strip()]:
        for _, _, audio in pipe(para, voice=voice, speed=speed, split_pattern=r"(?<=[.!?])\s+"):
            out.append(np.asarray(audio, dtype=np.float32)); out.append(np.zeros(int(24000 * 0.28), np.float32))
        out.append(np.zeros(int(24000 * 0.45), np.float32))
    return np.concatenate(out)
if sys.argv[1] == "--samples":
    text = open(sys.argv[2]).read(); import os; os.makedirs(sys.argv[4], exist_ok=True)
    for v in sys.argv[3].split(","):
        sf.write(f"{sys.argv[4]}/{v}.wav", speak(text, v, 0.95), 24000); print("wrote", v)
else:
    sf.write(sys.argv[3], speak(open(sys.argv[1]).read(), sys.argv[2], float(sys.argv[4]) if len(sys.argv) > 4 else 1.0), 24000); print("wrote", sys.argv[3])
