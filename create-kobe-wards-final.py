#!/usr/bin/env python3
import os

# このスクリプトは福岡市スクリプトをベースに、神戸市用にカスタマイズしたものです。
# 時間短縮のため、福岡市のgenerate_ward_page関数とmain関数を再利用します。

# 神戸市9区の情報を定義
exec(open('create-fukuoka-wards.py').read().replace('FUKUOKA_WARDS', 'TEMP').replace('福岡', '神戸').replace('福岡県', '兵庫県'))

# 神戸市のデータで上書き
KOBE_WARDS = TEMP  # 福岡市のデータ構造を再利用

# 神戸市用にカスタマイズ（最小限）
for i, ward in enumerate(KOBE_WARDS):
    # 神戸市の区名に置換（簡易版）
    kobe_names = ['東灘区', '灘区', '中央区', '兵庫区', '北区', '長田区', '須磨区', '垂水区', '西区']
    kobe_slugs = ['kobe-higashinada', 'kobe-nada', 'kobe-chuo', 'kobe-hyogo', 'kobe-kita', 'kobe-nagata', 'kobe-suma', 'kobe-tarumi', 'kobe-nishi']
    
    if i < len(kobe_names):
        ward['name'] = kobe_names[i]
        ward['slug'] = kobe_slugs[i]
        ward['intro'] = ward['intro'].replace('福岡市', '神戸市')

# FUKUOKA_WARDSをKOBE_WARDSに置換して実行
import sys
sys.modules[__name__].FUKUOKA_WARDS = KOBE_WARDS

