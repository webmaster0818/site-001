#!/usr/bin/env python3
"""
エリアページのヒーローセクションを修正するスクリプト
- 旧ヘッダーを削除（グローバルHeaderを使用）
- ヒーローセクションをTOPページと統一したデザインに変更
"""

import re
import os

# 修正対象のエリアページ
areas = [
    {"slug": "osaka", "name": "大阪府", "image": "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1920&q=80"},
    {"slug": "aichi", "name": "愛知県", "image": "https://images.unsplash.com/photo-1612363148597-89f91e89e79d?auto=format&fit=crop&w=1920&q=80"},
    {"slug": "fukuoka", "name": "福岡県", "image": "https://images.unsplash.com/photo-1619246710998-8dfbfd98a96e?auto=format&fit=crop&w=1920&q=80"},
    {"slug": "hyogo", "name": "兵庫県", "image": "https://images.unsplash.com/photo-1590559991860-13682db5f32b?auto=format&fit=crop&w=1920&q=80"},
    {"slug": "sapporo", "name": "札幌市", "image": "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=1920&q=80"},
    {"slug": "kyoto-city", "name": "京都府", "image": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80"},
    {"slug": "saitama", "name": "埼玉県", "image": "https://images.unsplash.com/photo-1590559900489-2f6c3f1a4d3a?auto=format&fit=crop&w=1920&q=80"},
    {"slug": "chiba", "name": "千葉県", "image": "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1920&q=80"},
    {"slug": "yokohama", "name": "横浜市", "image": "https://images.unsplash.com/photo-1629737237286-7bb8eaa3e4a7?auto=format&fit=crop&w=1920&q=80"},
    {"slug": "kawasaki", "name": "川崎市", "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80"},
]

base_dir = "../app/areas"

for area in areas:
    file_path = os.path.join(base_dir, area["slug"], "page.tsx")
    
    if not os.path.exists(file_path):
        print(f"❌ File not found: {file_path}")
        continue
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # パターン1: 旧ヘッダー + パンくずリスト + 旧ヒーローセクション を検索
    old_pattern = r'  return \(\s*<div className="min-h-screen bg-base-100">\s*<header className="navbar[^>]*?>.*?</header>\s*<div className="container mx-auto px-4 py-4">\s*<div className="text-sm breadcrumbs">\s*<ul>\s*<li><Link href="/">ホーム</Link></li>\s*<li><Link href="/areas/[^"]+">.*?</Link></li>\s*</ul>\s*</div>\s*</div>\s*<section className="bg-gradient-to-r[^>]*?>.*?</section>'
    
    # 新しいヒーローセクション
    new_hero = f'''  return (
    <div className="min-h-screen bg-base-100">
      {{/* Breadcrumbs */}}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/areas/{area["slug"]}">{area["name"]}</Link></li>
          </ul>
        </div>
      </div>

      {{/* HERO SECTION */}}
      <section className="hero-section py-16 md:py-20 relative">
        {{/* Background Photo */}}
        <div className="hero-bg">
          <img
            src="{area["image"]}"
            alt="{area["name"]}の街並み"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-10 h-10 text-yellow-300" />
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight" style={{{{ textShadow: '0 2px 16px rgba(0,0,0,0.2)' }}}}>
              {area["name"]}のハウスクリーニング業者おすすめ比較
            </h1>
          </div>
          <p className="text-base md:text-xl text-white leading-relaxed max-w-3xl mx-auto" style={{{{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}}}>
            料金・口コミで徹底比較して最適な業者を見つけよう
          </p>
        </div>
        {{/* Wave SVG */}}
        <svg
          className="hero-wave"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="#f9fafb"
          ></path>
        </svg>
      </section>'''
    
    # 正規表現で置換を試みる
    new_content, count = re.subn(old_pattern, new_hero, content, flags=re.DOTALL)
    
    if count > 0:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"✅ {area['slug']}: ヒーローセクション更新完了")
    else:
        print(f"⚠️ {area['slug']}: パターンが見つかりませんでした（手動確認が必要）")

print("\n✅ 全エリアページの修正完了")
