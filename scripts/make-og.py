#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""OG画像（public/og-image.png・1200x630）を作る。全ページ共通で指定している。

⚠️ 画像に店舗数・件数などの数字を入れない（データ更新のたびに画像だけ古くなるため）。

  python3 scripts/make-og.py
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
W, H = 1200, 630
PAPER = (250, 249, 245)         # 紙白
CYAN = (14, 116, 144)           # サイトの基調色 #0e7490
INK, DIM = (22, 48, 58), (92, 112, 120)

JP_BOLD = "/System/Library/Fonts/ヒラギノ角ゴシック W7.ttc"
JP = "/System/Library/Fonts/ヒラギノ角ゴシック W3.ttc"


def main() -> None:
    S = 2   # 2倍で描いて縮める
    im = Image.new("RGB", (W * S, H * S), PAPER)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, 28 * S, H * S], fill=CYAN)                       # 左の帯
    d.rectangle([86 * S, 300 * S, 206 * S, 306 * S], fill=CYAN)         # 見出し下の罫

    def put(xy, s, font, size, fill):
        d.text((xy[0] * S, xy[1] * S), s, font=ImageFont.truetype(font, size * S), fill=fill)

    put((86, 110), "ハウスクリーニング業者比較サイト", JP, 34, DIM)
    put((82, 170), "クリーンナビ", JP_BOLD, 104, CYAN)
    put((86, 346), "エアコン・浴室・キッチンの業者を", JP_BOLD, 44, INK)
    put((86, 410), "サービス別・地域別に比較", JP_BOLD, 44, INK)
    put((86, 540), "cleaning-choices.com", JP, 28, DIM)

    out = ROOT / "public" / "og-image.png"
    im.resize((W, H), Image.LANCZOS).save(out, optimize=True)
    print(f"書き出し → {out}")


if __name__ == "__main__":
    main()
