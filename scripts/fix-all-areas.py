#!/usr/bin/env python3
"""
残り7エリアページのヒーローセクションを一括修正
"""
import re

areas = [
    {"dir": "hyogo", "name": "兵庫県", "desc": "神戸市など兵庫県全域対応", "img": "https://images.unsplash.com/photo-1590559991860-13682db5f32b?auto=format&fit=crop&w=1920&q=80"},
    {"dir": "sapporo", "name": "札幌市", "desc": "札幌市全域対応", "img": "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=1920&q=80"},
    {"dir": "kyoto-city", "name": "京都府", "desc": "京都市など京都府全域対応", "img": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80"},
    {"dir": "saitama", "name": "埼玉県", "desc": "さいたま市など埼玉県全域対応", "img": "https://images.unsplash.com/photo-1590559900489-2f6c3f1a4d3a?auto=format&fit=crop&w=1920&q=80"},
    {"dir": "chiba", "name": "千葉県", "desc": "千葉市など千葉県全域対応", "img": "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1920&q=80"},
    {"dir": "yokohama", "name": "横浜市", "desc": "横浜市全域対応", "img": "https://images.unsplash.com/photo-1629737237286-7bb8eaa3e4a7?auto=format&fit=crop&w=1920&q=80"},
    {"dir": "kawasaki", "name": "川崎市", "desc": "川崎市全域対応", "img": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80"},
]

for area in areas:
    file_path = f"../app/areas/{area['dir']}/page.tsx"
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 旧パターンを検索（柔軟な正規表現）
        old_pattern = re.compile(
            r'return \(\s*<div className="min-h-screen[^>]*>.*?'
            r'<header className="navbar[^>]*>.*?</header>.*?'
            r'<section className="bg-gradient-to-r[^>]*>.*?</section>',
            re.DOTALL
        )
        
        # 新しいヒーローセクション
        new_hero = f'''return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/areas/{area['dir']}">{area['name']}</Link></li>
          </ul>
        </div>
      </div>

      <section className="hero-section py-16 md:py-20 relative">
        <div className="hero-bg">
          <img src="{area['img']}" alt="{area['name']}の街並み" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-10 h-10 text-yellow-300" />
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight" style={{{{ textShadow: '0 2px 16px rgba(0,0,0,0.2)' }}}}>
              {area['name']}のハウスクリーニング業者おすすめ比較
            </h1>
          </div>
          <p className="text-base md:text-xl text-white leading-relaxed max-w-3xl mx-auto" style={{{{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}}}>
            {area['desc']}！料金・口コミで徹底比較
          </p>
        </div>
        <svg className="hero-wave" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#f9fafb"></path>
        </svg>
      </section>'''
        
        # 置換実行
        new_content = old_pattern.sub(new_hero, content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"✅ {area['name']} ({area['dir']}): 修正完了")
        else:
            print(f"⚠️ {area['name']} ({area['dir']}): パターンが見つかりませんでした")
    
    except FileNotFoundError:
        print(f"❌ {area['name']} ({area['dir']}): ファイルが見つかりません")
    except Exception as e:
        print(f"❌ {area['name']} ({area['dir']}): エラー - {e}")

print("\n✅ 全エリアページの修正完了")
