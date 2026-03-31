#!/bin/bash

# 残りのエリアページを修正するスクリプト

cd /Users/taro.hasegawa/projects/clean-navi

# 愛知県
sed -i '' '/^  return ($/,/^      <section className="bg-gradient-to-r/c\
  return (\
    <div className="min-h-screen bg-base-100">\
      {/* Breadcrumbs */}\
      <div className="container mx-auto px-4 py-4">\
        <div className="text-sm breadcrumbs">\
          <ul>\
            <li><Link href="/">ホーム</Link></li>\
            <li><Link href="/areas/aichi">愛知県</Link></li>\
          </ul>\
        </div>\
      </div>\
\
      {/* HERO SECTION */}\
      <section className="hero-section py-16 md:py-20 relative">\
        {/* Background Photo */}\
        <div className="hero-bg">\
          <img\
            src="https://images.unsplash.com/photo-1612363148597-89f91e89e79d?auto=format&fit=crop&w=1920&q=80"\
            alt="愛知県の街並み"\
          />\
        </div>\
        <div className="hero-overlay"></div>\
        <div className="container mx-auto px-4 text-center relative z-10">\
          <div className="flex items-center justify-center gap-3 mb-4">\
            <MapPin className="w-10 h-10 text-yellow-300" />\
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.2)" }}>\
              愛知県のハウスクリーニング業者おすすめ比較\
            </h1>\
          </div>\
          <p className="text-base md:text-xl text-white leading-relaxed max-w-3xl mx-auto" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.15)" }}>\
            名古屋市・豊田市など愛知県全域対応！料金・口コミで徹底比較\
          </p>\
        </div>\
        {/* Wave SVG */}\
        <svg\
          className="hero-wave"\
          viewBox="0 0 1440 80"\
          fill="none"\
          xmlns="http://www.w3.org/2000/svg"\
        >\
          <path\
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"\
            fill="#f9fafb"\
          ></path>\
        </svg>\
      </section>' app/areas/aichi/page.tsx

echo "✅ 愛知県ページ修正完了"
echo "✅ 全エリアページの修正完了"
