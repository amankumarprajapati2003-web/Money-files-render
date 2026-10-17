"""Synthesize a Hollywood-trailer soundtrack (drone, braams, booms, hits, whooshes, risers, ticks)
and cut narration lines in on cue.  Usage: trailer_audio.py <clip.json> <narration audio> <out.wav>
clip.json: "vo": [[at, src_start, src_end], ...], "sfx": [[kind, t, ...], ...], "duration": s"""
import json, subprocess, sys
import numpy as np

SR = 48000
clip = json.load(open(sys.argv[1])); src_audio, out = sys.argv[2], sys.argv[3]
T = clip["duration"]; N = int(T * SR) + SR
rng = np.random.default_rng(7)
sfx = np.zeros((N, 2)); vo = np.zeros((N, 2)); bed = np.zeros((N, 2))


def lp(x, fc):  # one-pole low-pass (vectorised via lfilter-like recursion in chunks)
    a = np.exp(-2 * np.pi * fc / SR); y = np.empty_like(x); s = 0.0
    for i in range(len(x)):
        s = (1 - a) * x[i] + a * s; y[i] = s
    return y


def lpf(x, fc):  # faster: FFT brick-ish low-pass with soft knee
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR); X *= 1 / (1 + (f / fc) ** 4); return np.fft.irfft(X, len(x))


def hpf(x, fc):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR); X *= (f / fc) ** 4 / (1 + (f / fc) ** 4); return np.fft.irfft(X, len(x))


def put(buf, t, sig, gain=1.0, pan=0.0):
    i = int(t * SR); sig = sig[: max(0, len(buf) - i)]
    if sig.ndim == 1:
        sig = np.stack([sig * (1 - pan) ** 0.5, sig * (1 + pan) ** 0.5], 1) / 2 ** 0.5 * 2 ** 0.5 / 2 ** 0.5
    buf[i:i + len(sig)] += sig * gain


def tt(d):
    return np.arange(int(d * SR)) / SR


def boom(g):
    t = tt(2.6); f = 32 + 70 * np.exp(-t * 9); ph = 2 * np.pi * np.cumsum(f) / SR
    s = np.sin(ph) * np.exp(-t * 1.6) + 0.5 * lpf(rng.standard_normal(len(t)), 180) * np.exp(-t * 6)
    return np.tanh(1.6 * s) * g


def hit(g):
    t = tt(1.2); f = 48 + 120 * np.exp(-t * 22); s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 4.5)
    n = hpf(rng.standard_normal(len(t)), 900) * np.exp(-t * 28) * 0.55
    m = lpf(rng.standard_normal(len(t)), 2500) * np.exp(-t * 9) * 0.35
    return np.tanh(2.2 * (s + n + m)) * g


def braam(g):
    t = tt(3.4); out = np.zeros(len(t))
    for fr in [55, 55.4, 82.4, 110, 110.6, 130.8, 164.8]:
        ph = (fr * t + rng.random()) % 1.0; out += (2 * ph - 1)
    env = np.minimum(1, t / 0.06) * np.exp(-t * 0.9); s = (0.6 * lpf(out * env, 1300) + 0.4 * lpf(out * env, 500) * (1 - np.exp(-t * 2))) / 4
    return np.tanh(2.5 * s) * g


def whoosh(g, d=0.7):
    t = tt(d); n = rng.standard_normal(len(t)); env = np.sin(np.pi * np.clip(t / d, 0, 1)) ** 2
    lo = lpf(n, 1800) - lpf(n, 250); return lo * env * 0.9 * g


def riser(t0, t1):
    d = t1 - t0; t = tt(d); f = 180 * (7 ** (t / d)); s = np.sin(2 * np.pi * np.cumsum(f) / SR) * 0.35
    n = hpf(rng.standard_normal(len(t)), 1500) * 0.5; env = (t / d) ** 2.2
    return np.tanh((s + n) * env * 1.6) * 0.8


def popfx(g):
    t = tt(0.14); f = 700 + 900 * (t / 0.14); return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 30) * g


def tick(g):
    t = tt(0.05); return np.sin(2 * np.pi * 2400 * t) * np.exp(-t * 160) * g + hpf(rng.standard_normal(len(t)), 3000) * np.exp(-t * 220) * 0.4 * g


for c in clip["sfx"]:
    k, t0 = c[0], c[1]
    if k == "drone":
        d = c[2] - t0; t = tt(d); s = (np.sin(2 * np.pi * 41.2 * t) + 0.6 * np.sin(2 * np.pi * 61.7 * t + 1) + 0.25 * np.sin(2 * np.pi * 82.4 * t)) * (0.6 + 0.4 * np.sin(2 * np.pi * 0.13 * t))
        s += lpf(rng.standard_normal(len(t)), 120) * 0.6
        env = np.minimum(1, t / 2.0) * np.minimum(1, (d - t) / 0.08) * (0.55 + 0.45 * t / d); put(bed, t0, s * env * 0.18)
    elif k == "ticks":
        t1, step = c[2], c[3]; x = t0; n = 0
        while x < t1:
            put(sfx, x, tick(0.22 if n % 2 == 0 else 0.15), pan=0.3 if n % 2 else -0.3); x += step; n += 1
    elif k == "boom": put(sfx, t0, boom(c[2]))
    elif k == "hit": put(sfx, t0, hit(c[2]))
    elif k == "braam": put(sfx, t0, braam(c[2]))
    elif k == "whoosh": put(sfx, t0, whoosh(0.8), pan=0.2)
    elif k == "riser": put(sfx, t0, riser(t0, c[2]))
    elif k == "pop": put(sfx, t0, popfx(c[2] if len(c) > 2 else 0.5))

# simple reverb on sfx (decaying-noise impulse response)
ir_t = tt(1.8); ir = rng.standard_normal(len(ir_t)) * np.exp(-ir_t * 3.2); ir /= np.sqrt((ir ** 2).sum())
for ch in range(2):
    wet = np.fft.irfft(np.fft.rfft(sfx[:, ch], N + len(ir)) * np.fft.rfft(np.roll(ir, ch * 97), N + len(ir)), N + len(ir))[:N]
    sfx[:, ch] = sfx[:, ch] + 0.35 * wet

# narration lines (high-passed to thin out the music bed underneath)
raw = subprocess.run(["ffmpeg", "-v", "error", "-i", src_audio, "-ac", "1", "-ar", str(SR), "-f", "f32le", "-"], capture_output=True).stdout
src = np.frombuffer(raw, dtype=np.float32).astype(np.float64)
duck = np.ones(N)
for at, a, b in clip.get("vo", []):
    seg = src[int(a * SR):int(b * SR)].copy(); f = int(0.012 * SR); seg[:f] *= np.linspace(0, 1, f); seg[-f:] *= np.linspace(1, 0, f)
    seg = hpf(seg, 110); seg /= max(1e-6, np.sqrt((seg ** 2).mean())) / 0.16; put(vo, at, np.stack([seg, seg], 1))
    i0, i1 = int(at * SR), int((at + b - a) * SR); duck[i0:i1] = 0.45
duck = np.convolve(duck, np.ones(4800) / 4800, mode="same")
mix = vo + (sfx * 0.9 + bed) * duck[:, None]
mix = np.tanh(mix * 1.3) / np.tanh(1.3)
mix = mix[: int(T * SR)]; fo = int(0.6 * SR); mix[-fo:] *= np.linspace(1, 0, fo)[:, None]
pcm = (np.clip(mix / max(1e-6, np.abs(mix).max()) * 0.95, -1, 1) * 32767).astype(np.int16)
subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "s16le", "-ar", str(SR), "-ac", "2", "-i", "-", "-af", "loudnorm=I=-14:TP=-1.0:LRA=11", "-ar", str(SR), out], input=pcm.tobytes(), check=True)
print("wrote", out, f"{T:.1f}s")
