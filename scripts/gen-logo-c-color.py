#!/usr/bin/env python3
"""ロゴC（スクイージーで窓を拭く作業者）の色付け案（2026-10-16 MediaXAI「Cをベースに色付けしておしゃれに」）"""
import base64, json, sys, urllib.request
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
import importlib.util
spec = importlib.util.spec_from_file_location("g", Path(__file__).parent / "gen-design-proposals.py")
g = importlib.util.module_from_spec(spec); spec.loader.exec_module(g)
ROOT = Path(__file__).resolve().parent.parent; OUT = ROOT / "design-proposals"
ref = base64.b64encode((OUT / "logo-c-person-squeegee.png").read_bytes()).decode()
BASE = ("Using the attached logo as the exact base (keep the same composition: a cleaning professional inside a circle "
        "wiping with a squeegee, same line style and proportions), make a refined, stylish colored version for the brand "
        "'クリーンナビ'. Flat vector, crisp, premium, white background, centered, no text, no gradient noise. ")
V = {
 "logo-c-color-1": BASE + "Palette: dark slate navy #16323a lines, the squeegee wipe arc filled with deep teal #0e7490, "
                   "a soft pale mist #e3ecec circle fill behind the figure, one tiny teal sparkle where the squeegee passes.",
 "logo-c-color-2": BASE + "Palette: solid deep teal #0e7490 circle badge, the figure and squeegee in white negative space, "
                   "the clean wiped arc slightly lighter teal #22a3b8, thin navy #16323a outer ring.",
 "logo-c-color-3": BASE + "Palette: two-tone: navy #16323a figure, teal #0e7490 squeegee and the wiped arc rendered as a "
                   "smooth gradient-free sweep, with a light sky tint #e0f2fe inside the wiped area showing the 'clean' half "
                   "of the window glass.",
}
for n, p in V.items():
    out = OUT / f"{n}.png"
    if out.exists(): print("skip", n); continue
    body = json.dumps({"contents": [{"parts": [{"inlineData": {"mimeType": "image/png", "data": ref}}, {"text": p}]}],
                       "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "1:1", "imageSize": "2K"}}}).encode()
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{g.MODEL}:generateContent?key={g.key()}"
    with urllib.request.urlopen(urllib.request.Request(url, data=body, headers={"Content-Type": "application/json"}), timeout=240) as r:
        d = json.loads(r.read())
    for part in d["candidates"][0]["content"]["parts"]:
        if "inlineData" in part:
            out.write_bytes(base64.b64decode(part["inlineData"]["data"])); print("ok", n); break
