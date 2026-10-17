"""Align narration text to its audio: sentence boundaries are matched to detected pauses with a global
dynamic-programming fit (sentence length vs. expected length from character count, longer pauses preferred,
paragraph breaks prefer the longest pauses).  Usage: align.py text.txt audio out.json [offset_seconds]"""
import json, re, subprocess, sys
txt, aud, out = sys.argv[1], sys.argv[2], sys.argv[3]; off = float(sys.argv[4]) if len(sys.argv) > 4 else 0.0
paras = [p.strip() for p in open(txt).read().strip().split("\n\n") if p.strip()]
sents = []
for pi, p in enumerate(paras):
    for s in re.split(r'(?:(?<=[.?!])|(?<=[.?!]["”]))\s+(?=[A-Z"“])', p):
        if s.strip(): sents.append({"p": pi, "text": s.strip()})
r = subprocess.run(["ffmpeg", "-i", aud, "-af", "silencedetect=noise=-40dB:d=0.15", "-f", "null", "-"], capture_output=True, text=True).stderr
st = [float(x) for x in re.findall(r"silence_start: ([0-9.]+)", r)]; en = [float(x) for x in re.findall(r"silence_end: ([0-9.]+)", r)]
dur = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", aud], capture_output=True, text=True).stdout)
P = list(zip(st, en + [dur] * (len(st) - len(en))))
lead = P[0][1] if P and P[0][0] < 0.05 else 0.0
if P and P[0][0] < 0.05: P = P[1:]
tail_s = P[-1][0] if P and P[-1][1] >= dur - 0.05 else dur
if P and P[-1][1] >= dur - 0.05: P = P[:-1]
N = len(sents); C = [len(s["text"]) for s in sents]
# expected wall-clock length per character, assuming boundary pauses take ~0.55 s on average
cps = sum(C) / max(1.0, (tail_s - lead) - 0.55 * (N - 1))
INF = float("inf"); M = len(P)
# state: boundary k (after sentence k) placed at pause j. start of sentence k+1 = P[j][1]
def seg_cost(k, t0, t1):
    e = C[k] / cps; d = t1 - t0
    if d < 0.25 + C[k] / 34: return 1e6
    return ((d - e) / (0.35 + 0.22 * e)) ** 2
def pause_bonus(k, j):
    L = min(P[j][1] - P[j][0], 1.5)
    para = k + 1 < N and sents[k + 1]["p"] != sents[k]["p"]
    return -(2.5 if para else 1.4) * L
best = [[INF] * M for _ in range(N)]; back = [[-1] * M for _ in range(N)]
for j in range(M):
    best[0][j] = seg_cost(0, lead, P[j][0]) + pause_bonus(0, j)
for k in range(1, N - 1):
    for j in range(M):
        tj = P[j][0]; bj = INF; bi = -1
        for i in range(max(0, j - 60), j):
            if best[k - 1][i] == INF: continue
            c = best[k - 1][i] + seg_cost(k, P[i][1], tj)
            if c < bj: bj, bi = c, i
        if bi >= 0: best[k][j] = bj + pause_bonus(k, j); back[k][j] = bi
# last sentence ends at tail
fj, fc = -1, INF
for j in range(M):
    if best[N - 2][j] == INF: continue
    c = best[N - 2][j] + seg_cost(N - 1, P[j][1], tail_s)
    if c < fc: fc, fj = c, j
idx = [0] * (N - 1); j = fj
for k in range(N - 2, -1, -1): idx[k] = j; j = back[k][j]
t = lead
for k, s in enumerate(sents):
    s["start"] = t
    if k < N - 1: s["end"] = P[idx[k]][0]; t = P[idx[k]][1]
    else: s["end"] = tail_s
for s in sents: s["start"] = round(s["start"] + off, 3); s["end"] = round(s["end"] + off, 3)
json.dump({"duration": round(dur, 3), "lines": [dict(i=i, **s) for i, s in enumerate(sents)]}, open(out, "w"), indent=0, ensure_ascii=False)
for i, s in enumerate(sents): print(i, s["p"], s["start"], s["end"], round(len(s["text"]) / max(0.1, s["end"] - s["start"]), 1), s["text"][:55])
