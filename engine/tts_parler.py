"""Natural Hindi voices with AI4Bharat Indic Parler-TTS (Apache-2.0). Usage: tts_parler.py parler.json outdir
parler.json: {"voices": {"NARR": "description...", ...}, "lines": [{"who": "NARR", "text": "..."}], "takes": 2}"""
import json, os, sys, time, subprocess
import torch, soundfile as sf
from parler_tts import ParlerTTSForConditionalGeneration
from transformers import AutoTokenizer
cfg = json.load(open(sys.argv[1])); out = sys.argv[2]; os.makedirs(out, exist_ok=True)
torch.set_num_threads(os.cpu_count())
name = "ai4bharat/indic-parler-tts"
model = ParlerTTSForConditionalGeneration.from_pretrained(name).eval()
tok = AutoTokenizer.from_pretrained(name)
dtok = AutoTokenizer.from_pretrained(model.config.text_encoder._name_or_path)
sr = model.config.sampling_rate
only = set(int(x) for x in os.environ.get("ONLY", "").split(",") if x.strip())
meta = []
for i, ln in enumerate(cfg["lines"]):
    if only and i not in only: continue
    desc = cfg["voices"][ln["who"]]
    d = dtok(desc, return_tensors="pt"); p = tok(ln["text"], return_tensors="pt")
    for k in range(cfg.get("takes", 1)):
        torch.manual_seed(1000 + i * 10 + k); t0 = time.time()
        with torch.no_grad():
            a = model.generate(input_ids=d.input_ids, attention_mask=d.attention_mask, prompt_input_ids=p.input_ids, prompt_attention_mask=p.attention_mask)
        a = a.cpu().numpy().squeeze()
        f = f"{out}/line_{i:02d}_t{k}.wav"; sf.write(f, a, sr)
        meta.append({"i": i, "take": k, "who": ln["who"], "dur": round(len(a) / sr, 3), "text": ln["text"]})
        print(i, k, ln["who"], round(len(a) / sr, 2), "s in", round(time.time() - t0, 1), "s", flush=True)
json.dump(meta, open(f"{out}/lines.json", "w"), ensure_ascii=False, indent=1)
