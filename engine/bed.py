"""Gentle kalimba/pad music bed for light explainers. Usage: bed.py seconds out.wav [seed]"""
import sys, subprocess, numpy as np
SR = 48000; T = float(sys.argv[1]); out = sys.argv[2]; rng = np.random.default_rng(int(sys.argv[3]) if len(sys.argv) > 3 else 3)
bpm = 92; beat = 60 / bpm; bar = beat * 4
prog = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]]  # Am F C G
scale = [57, 60, 62, 64, 67, 69, 72, 74, 76]
loop_bars = 8; L = int(bar * loop_bars * SR); buf = np.zeros(L)
hz = lambda m: 440 * 2 ** ((m - 69) / 12)
def pluck(f, d=1.4, g=0.3):
    t = np.arange(int(d * SR)) / SR; return g * (np.sin(2 * np.pi * f * t) + 0.35 * np.sin(2 * np.pi * 2 * f * t) * np.exp(-t * 6) + 0.12 * np.sin(2 * np.pi * 3.01 * f * t) * np.exp(-t * 9)) * np.exp(-t * 3.2) * np.minimum(1, t / 0.004)
def add(sig, t0):
    i = int(t0 * SR) % L; n = min(len(sig), L - i); buf[i:i + n] += sig[:n]; buf[:len(sig) - n] += sig[n:]
for b in range(loop_bars):
    ch = prog[b % 4]; t0 = b * bar
    t = np.arange(int(bar * SR)) / SR; pad = sum(np.sin(2 * np.pi * hz(m - 12) * t) + 0.3 * np.sin(2 * np.pi * hz(m) * 1.003 * t) for m in ch) * 0.05 * np.minimum(1, t / 0.4) * np.minimum(1, (bar - t) / 0.4); add(pad, t0)
    add(pluck(hz(ch[0] - 24), 2.0, 0.35), t0); add(pluck(hz(ch[0] - 24), 1.0, 0.2), t0 + 2 * beat)
    for k in range(8):
        if rng.random() < 0.7: add(pluck(hz(rng.choice([m for m in scale if (m - ch[0]) % 12 in [(c - ch[0]) % 12 for c in ch] + [2, 7]])), 1.2, 0.18 + 0.06 * (k % 2 == 0)), t0 + k * beat / 2)
reps = int(np.ceil(T * SR / L)); full = np.tile(buf, reps)[: int(T * SR)]
fade = int(1.5 * SR); full[:fade] *= np.linspace(0, 1, fade); full[-fade:] *= np.linspace(1, 0, fade)
full /= np.abs(full).max(); st = np.stack([full, np.roll(full, 300)], 1)
pcm = (st * 0.9 * 32767).astype(np.int16)
subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "s16le", "-ar", str(SR), "-ac", "2", "-i", "-", "-af", "aecho=0.8:0.6:120:0.25,lowpass=f=6000", out], input=pcm.tobytes(), check=True)
