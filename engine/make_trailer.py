"""Cut a Hollywood-style cold-open trailer out of a finished video, using sentence timings.
Usage: make_trailer.py timing.json main.mp4 spec.json out.mp4
spec.json: {"segments": [["sentence substring", occurrence(1-based), pad_before, pad_after], ...],
            "title": ["LINE 1", "LINE 2"], "kicker": "A MONEY FILES INVESTIGATION", "end": "STARTING NOW"}"""
import json, os, subprocess, sys, tempfile
import numpy as np
timing, main, spec_p, out = sys.argv[1:5]
L = json.load(open(timing))["lines"]; spec = json.load(open(spec_p))
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))); FONTS = os.path.join(ROOT, "engine", "fonts")
tmp = tempfile.mkdtemp(); parts = []; t_out = 0.0; cues = []
def find(sub, occ):
    hits = [l for l in L if sub in l["text"]]
    return hits[occ - 1]
vf_box = "drawbox=x=0:y=0:w=iw:h=130:color=black@1:t=fill,drawbox=x=0:y=ih-130:w=iw:h=130:color=black@1:t=fill"
for k, (sub, occ, a, b) in enumerate(spec["segments"]):
    l = find(sub, occ); s0 = max(0, l["start"] - a); s1 = l["end"] + b; f = os.path.join(tmp, f"s{k:02d}.mp4")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{s0:.3f}", "-t", f"{s1 - s0:.3f}", "-i", main, "-vf", vf_box + ",fade=t=in:st=0:d=0.06:c=white",
                    "-af", "afade=t=in:d=0.04,afade=t=out:st=%.3f:d=0.08" % max(0, s1 - s0 - 0.08), "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-r", "24", "-c:a", "aac", "-ar", "48000", "-ac", "2", f], check=True)
    cues.append(("hit" if k % 2 == 0 else "whoosh", t_out)); parts.append(f); t_out += s1 - s0
    gap = os.path.join(tmp, f"g{k:02d}.mp4")  # 0.3 s black beat between cuts
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i", "color=black:s=1920x1080:r=24:d=0.3", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=stereo", "-t", "0.3",
                    "-c:v", "libx264", "-preset", "veryfast", "-c:a", "aac", "-ar", "48000", "-ac", "2", gap], check=True)
    parts.append(gap); t_out += 0.3
# title card
tdur = 4.5; tf = os.path.join(tmp, "title.mp4"); l1, l2 = spec["title"]
tx = {}
for key, val in [("k", spec["kicker"]), ("a", l1), ("b", l2), ("e", spec["end"])]:
    tx[key] = os.path.join(tmp, f"t_{key}.txt"); open(tx[key], "w").write(val)
draw = (f"drawtext=fontfile={FONTS}/SpecialElite-Regular.ttf:textfile={tx['k']}:fontcolor=0xff5050:fontsize=40:x=(w-tw)/2:y=300:alpha='min(1,t/0.5)',"
        f"drawtext=fontfile={FONTS}/BebasNeue-Regular.ttf:textfile={tx['a']}:fontcolor=white:fontsize=150:x=(w-tw)/2:y=380:alpha='min(1,max(0,(t-0.2)/0.4))',"
        f"drawtext=fontfile={FONTS}/PermanentMarker-Regular.ttf:textfile={tx['b']}:fontcolor=0xffd400:fontsize=210:x=(w-tw)/2:y=560:alpha='min(1,max(0,(t-0.5)/0.3))',"
        f"drawtext=fontfile={FONTS}/BebasNeue-Regular.ttf:textfile={tx['e']}:fontcolor=0xff3b3b:fontsize=70:x=(w-tw)/2:y=860:alpha='min(1,max(0,(t-2.2)/0.4))',fade=t=out:st={tdur - 0.5}:d=0.5")
subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i", f"color=0x0b0d12:s=1920x1080:r=24:d={tdur}", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=stereo", "-t", str(tdur),
                "-vf", draw + "," + vf_box, "-c:v", "libx264", "-preset", "veryfast", "-c:a", "aac", "-ar", "48000", "-ac", "2", tf], check=True)
cues.append(("title", t_out)); parts.append(tf); total = t_out + tdur
lst = os.path.join(tmp, "list.txt"); open(lst, "w").write("".join(f"file '{p}'\n" for p in parts))
joined = os.path.join(tmp, "joined.mp4"); subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", lst, "-c", "copy", joined], check=True)
# trailer score: drone + hits on every cut + riser into the title + braam/boom on the title
sfx = [["drone", 0, total], ["ticks", 0.2, cues[-1][1] - 2.5, 0.5]]
for kind, t in cues[:-1]: sfx.append(["hit", t, 0.55] if kind == "hit" else ["whoosh", t - 0.25])
tt = cues[-1][1]; sfx += [["riser", tt - 3.0, tt], ["braam", tt, 1.2], ["boom", tt, 1.2], ["hit", tt + 2.2, 0.8]]
aj = os.path.join(tmp, "a.json"); json.dump({"duration": total, "vo": [], "sfx": sfx}, open(aj, "w"))
score = os.path.join(tmp, "score.wav"); subprocess.run([sys.executable, os.path.join(ROOT, "engine", "trailer_audio.py"), aj, joined, score], check=True)
subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", joined, "-i", score, "-filter_complex", "[0:a]volume=1.0[v];[1:a]volume=0.55[s];[v][s]amix=inputs=2:normalize=0,alimiter=limit=0.95[a]",
                "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", out], check=True)
print("trailer", round(total, 2), "s ->", out)
