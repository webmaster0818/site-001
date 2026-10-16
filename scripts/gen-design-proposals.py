#!/usr/bin/env python3
"""クリーンナビ（cleaning-choices.com）のデザイン案を Nano Banana Pro で作る（2026-10-16 MediaXAI 依頼）。

  python3 scripts/gen-design-proposals.py [logo|fv|all]

出力は design-proposals/（リポには入れない。決まった案だけ public/ に置く）。
⚠️ FV のコピーは掲載データで確かめた事実だけ:
   ・掲載 3,525店舗（3社の公式店舗一覧・app/data/providers.json）・47都道府県
   ・エアコンクリーニング 8,800円〜（おそうじLabo 初回限定・税込・app/data/partners.ts）
   ・24時間365日受付の業者も掲載（ハウスクリーニング110番）
   「〇分以内に到着」「業界最多」は根拠が無いので使わない。
"""
import base64
import json
import os
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "design-proposals"
MODEL = "gemini-3-pro-image-preview"


def key() -> str:
    if os.environ.get("GEMINI_API_KEY"):
        return os.environ["GEMINI_API_KEY"]
    env = Path.home() / ".openclaw/workspace/secrets/shiroari-expert-keys.env"
    for line in env.read_text().splitlines():
        if line.startswith("GEMINI_API_KEY="):
            return line.split("=", 1)[1].strip().strip('"')
    raise SystemExit("GEMINI_API_KEY が無い")


PALETTE = ("Color palette strictly: deep teal #0e7490, dark slate navy #16323a, pale mist #e3ecec, "
           "white. No other saturated colors.")

LOGO_BASE = ("Minimal premium brand mark for a Japanese house-cleaning comparison website named 'クリーンナビ'. "
             "Monochrome line-art icon in dark slate navy #16323a on pure white (same style as a refined comparison-site logo), single consistent stroke weight, "
             "geometric and elegant, generous negative space, centered, vector-like crisp edges, "
             "no gradients, no shadows, no text, no letters. ")
LOGOS = {
    "logo-a-house-sparkle": LOGO_BASE + "Concept: a simple house outline whose roof line continues into a "
                            "single sweeping wipe stroke, with one small four-point sparkle.",
    "logo-b-spray-leaf": LOGO_BASE + "Concept: a cleaning spray bottle silhouette whose mist forms a "
                         "small house shape made of dots.",
    "logo-c-person-squeegee": LOGO_BASE + "Concept: an abstract cleaning professional figure (head circle and "
                              "body as one continuous line) holding a squeegee, the squeegee path drawing a "
                              "clean arc like a window being wiped.",
    "logo-d-window-wipe": LOGO_BASE + "Concept: a square window frame, half of it crossed by a curved wipe "
                          "stroke revealing clarity, with a tiny check mark integrated into the stroke end.",
    "logo-e-droplet-home": LOGO_BASE + "Concept: a water droplet whose inner negative space forms a house, "
                           "with a thin circular orbit line suggesting navigation / search.",
}

FV_BASE = ("Website first-view hero design mockup, 16:9, desktop, for a Japanese house-cleaning comparison site "
           "'クリーンナビ'. Refined, calm, editorial Japanese web design in the style of a premium comparison site: "
           "white header bar with a small line-art house logo and nav items 「お悩み別」「エリアから探す」「料金相場」「業者比較」, "
           "lots of white space, thin 1px borders, no emoji, no clip art. " + PALETTE + " "
           "Photorealistic smiling trustworthy Japanese woman in her 30s, house-cleaning professional, clean light-gray "
           "work jacket with no company logo, natural daylight, bright modern Japanese home interior. "
           "All Japanese text must be rendered cleanly, legibly and exactly as given, no other text: "
           "small label 「公式情報で中立に比較する、ハウスクリーニングの比較サイト」, "
           "large bold two-line headline 「エアコン・浴室・キッチン。」「プロのお掃除を、正しく選ぶ。」, "
           "two large prominent buttons side by side: 「お悩みから探す」 (filled dark navy #16323a) and 「エリアから探す」 (filled deep teal #0e7490), "
           "a row of small outlined pill chips 「エアコン」「浴室」「キッチン」「トイレ」「料金相場」, "
           "and a full-width dark navy stat bar along the bottom with four columns: 「掲載店舗 3,525店舗」「対応エリア 47都道府県」"
           "「エアコンクリーニング 8,800円〜」「エリア別まとめ 274エリア」. ")
FVS = {
    "fv-1-standard": FV_BASE + "Layout: text and buttons on the left over a soft white fade, the woman on the right "
                     "holding a spray bottle and a microfiber cloth, looking at the viewer.",
    "fv-2-kitchen": FV_BASE + "Layout: the woman on the right standing in a bright kitchen, gently wiping the "
                    "range hood with a cloth while smiling at the viewer; text block on the left on pale mist #e3ecec.",
    "fv-3-framed": FV_BASE + "Layout: the photo of the woman (holding a cleaning bucket with tools, standing at an "
                   "entrance) placed in a large rounded rectangle on the right with a thin border; text on the left on "
                   "white; the two buttons are large and placed inside a white card with a thin teal border.",
}


def gen(name: str, prompt: str, aspect: str) -> None:
    out = OUT / f"{name}.png"
    if out.exists():
        print("skip", out.name)
        return
    body = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseModalities": ["IMAGE"],
                             "imageConfig": {"aspectRatio": aspect, "imageSize": "2K"}},
    }).encode()
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={key()}"
    req = urllib.request.Request(url, data=body, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=240) as r:
            data = json.loads(r.read())
    except urllib.error.HTTPError as e:
        print(name, "HTTPError", e.code, e.read().decode()[:200])
        return
    for p in data.get("candidates", [{}])[0].get("content", {}).get("parts", []):
        if "inlineData" in p:
            out.write_bytes(base64.b64decode(p["inlineData"]["data"]))
            print("ok", out.name, out.stat().st_size)
            return
    print(name, "画像なし", json.dumps(data)[:200])


def main() -> int:
    what = sys.argv[1] if len(sys.argv) > 1 else "all"
    OUT.mkdir(exist_ok=True)
    if what in ("logo", "all"):
        for n, p in LOGOS.items():
            gen(n, p, "1:1")
    if what in ("fv", "all"):
        for n, p in FVS.items():
            gen(n, p, "16:9")
    return 0


if __name__ == "__main__":
    sys.exit(main())
