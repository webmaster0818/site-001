#!/usr/bin/env python3
"""TOP 刷新用の画像（2026-10-16 MediaXAI がファーストビュー案2を選択）。
  python3 scripts/gen-top-assets.py   → design-proposals/assets/*.png（決まったものを public/images/top/ に webp で置く）
アイコンは kagi-trouble-navi.com と同じ「白地に紺の線画・大きめ」。色は使わない（MediaXAI 指示）。"""
import base64, json, urllib.request, importlib.util
from pathlib import Path
spec = importlib.util.spec_from_file_location("g", Path(__file__).parent / "gen-design-proposals.py")
g = importlib.util.module_from_spec(spec); spec.loader.exec_module(g)
OUT = Path(__file__).resolve().parent.parent / "design-proposals" / "assets"; OUT.mkdir(parents=True, exist_ok=True)
HERO = ("Photorealistic wide photograph, 16:9. A smiling, trustworthy Japanese woman in her 30s, a house-cleaning "
        "professional in a clean light-gray work jacket with no logo, gently wiping a stainless range hood with a white "
        "microfiber cloth in a bright modern Japanese kitchen with a wooden window, natural daylight, looking at the camera "
        "with a warm smile. She stands in the right 45% of the frame; the left 55% is calm, softly lit, uncluttered pale wall "
        "and counter space (for text overlay). No text, no logos, no watermark, high resolution, sharp focus on her face.")
ICON = ("Single large icon, monochrome line art in dark slate navy #16323a on pure white, consistent medium stroke weight, "
        "rounded line caps, simple geometric, centered with generous margin, crisp vector-like edges, no fill colors, "
        "no shadows, no text. Same visual family as a refined comparison-site icon set. Subject: ")
ICONS = {
    "icon-aircon": "a wall-mounted air conditioner with three soft airflow lines and a small sparkle",
    "icon-bathroom": "a bathtub with a shower head and a few water droplets",
    "icon-kitchen": "a kitchen range hood above a stove with a frying pan",
    "icon-toilet": "a western-style toilet seen from the side",
    "icon-washroom": "a washbasin with a mirror above and a faucet",
    "icon-window": "a sliding window with a squeegee wiping a clean arc across the glass",
    "icon-ventilation": "a round ventilation fan with blades inside a square frame",
    "icon-floor": "a wooden floor with a floor polisher machine",
    "icon-wholehouse": "a house outline with a spray bottle and a sparkle inside it",
    "icon-area": "a folded map with a location pin",
    "icon-official": "a document page with a check mark seal stamp, representing information verified on official websites",
    "icon-stores": "a map of Japan outline with three small location pins",
    "icon-price": "a price tag next to a short bar chart with three bars, representing comparing prices",
    "icon-quick": "a stopwatch with a small motion line, representing same-day quick service",
    "icon-moving": "two stacked cardboard moving boxes next to a small air conditioner",
    "icon-newhouse": "a new house outline with a key and a small sparkle",
    "icon-yearend": "a calendar page showing a December grid with a small broom",
    "icon-minpaku": "a hotel-style key with a round tag next to a small suitcase",
    "icon-office": "a small office building with windows and a desk chair in front",
    "icon-insurance": "a shield with a house inside it, representing damage insurance coverage",
    "icon-staff": "a friendly service staff person bust with a headset and a speech bubble",
    "icon-experience": "a ribbon medal with the number of years shown as simple lines, representing years of experience",
    "icon-estimate": "a quotation document with line items and a small yen sign",
}
def gen(name, prompt, aspect):
    out = OUT / f"{name}.png"
    if out.exists(): print("skip", name); return
    body = json.dumps({"contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": aspect, "imageSize": "2K"}}}).encode()
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{g.MODEL}:generateContent?key={g.key()}"
    with urllib.request.urlopen(urllib.request.Request(url, data=body, headers={"Content-Type": "application/json"}), timeout=240) as r:
        d = json.loads(r.read())
    for p in d["candidates"][0]["content"]["parts"]:
        if "inlineData" in p:
            out.write_bytes(base64.b64decode(p["inlineData"]["data"])); print("ok", name); return
    print("no image", name)
gen("hero-kitchen", HERO, "16:9")
for n, s in ICONS.items():
    gen(n, ICON + s, "1:1")
