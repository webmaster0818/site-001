#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""OG画像（public/og-image.png・1200x630）を作る。全ページ共通で指定している。

2026-10-16 TOP 刷新に合わせて作り直し：左に霧色の面＋ロゴ C-1＋見出し、右に TOP と同じ作業者の写真。
⚠️ 画像に店舗数・件数などの数字を入れない（データ更新のたびに画像だけ古くなるため）。

  python3 scripts/make-og.py
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
W, H = 1200, 630
MIST = (227, 236, 236)
INK, DIM, LINE = (22, 50, 58), (75, 98, 104), (201, 214, 216)

JP_BOLD = "/System/Library/Fonts/ヒラギノ角ゴシック W7.ttc"
JP = "/System/Library/Fonts/ヒラギノ角ゴシック W3.ttc"


def main() -> None:
    S = 2
    im = Image.new("RGB", (W * S, H * S), MIST)
    # 右：TOP と同じ写真（作業者が入るように右寄せで切る）
    photo = Image.open(ROOT / "public/images/top/hero-kitchen.webp").convert("RGB")
    pw = int(photo.height * (560 / H))
    crop = photo.crop((photo.width - pw - int(photo.width * 0.06), 0, photo.width - int(photo.width * 0.06), photo.height))
    im.paste(crop.resize((560 * S, H * S), Image.LANCZOS), ((W - 560) * S, 0))
    d = ImageDraw.Draw(im)
    d.rectangle([(W - 560) * S - 1, 0, (W - 560) * S, H * S], fill=LINE)

    logo = Image.open(ROOT / "public/images/logo-mark.png").convert("RGBA").resize((92 * S, 92 * S), Image.LANCZOS)
    im.paste(logo, (72 * S, 70 * S), logo)

    def put(xy, s, font, size, fill):
        d.text((xy[0] * S, xy[1] * S), s, font=ImageFont.truetype(font, size * S), fill=fill)

    put((182, 82), "クリーンナビ", JP_BOLD, 46, INK)
    put((184, 136), "ハウスクリーニング業者比較", JP, 20, DIM)
    put((72, 250), "エアコン・浴室・キッチン。", JP_BOLD, 40, INK)
    put((72, 306), "プロのお掃除を、", JP_BOLD, 40, INK)
    put((72, 362), "正しく選ぶ。", JP_BOLD, 40, INK)
    d.rectangle([72 * S, 440 * S, 132 * S, 443 * S], fill=INK)
    put((72, 466), "公式情報で中立に比較する、", JP, 22, DIM)
    put((72, 498), "ハウスクリーニングの比較サイト", JP, 22, DIM)
    put((72, 566), "cleaning-choices.com", JP, 20, DIM)

    out = ROOT / "public" / "og-image.png"
    im.resize((W, H), Image.LANCZOS).save(out, optimize=True)
    print(f"書き出し → {out}")


if __name__ == "__main__":
    main()
