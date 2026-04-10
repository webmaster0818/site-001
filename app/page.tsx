export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section py-16 md:py-24 relative">
        {/* Background Photo */}
        <div className="hero-bg">
          <img
            src="/images/hero-banner.png"
            alt="ハウスクリーニングスタッフが掃除している様子"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.25)',
            }}
          >
            <span className="text-yellow-300 text-sm">⭐</span>
            <span className="text-white text-sm font-medium">
              2026年3月 最新版 — 厳選業者を徹底比較
            </span>
          </div>

          <h2
            className="text-3xl md:text-5xl font-black text-white leading-tight mb-4"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.2)' }}
          >
            プロのハウスクリーニングを
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              簡単比較
            </span>
            ・
            <span
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              予約
            </span>
          </h2>

          <p
            className="text-base md:text-lg text-white leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
          >
            30〜50代の忙しい主婦・共働き世帯に選ばれています。
            <br className="hidden md:block" />
            信頼できる業者を
            <span className="font-bold text-yellow-300">口コミ・料金・サービス内容</span>
            で徹底比較。
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <a className="btn-cta" href="#services">
              ✨ あなたに合った業者を探す
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="stat-box">
              <div
                className="text-3xl font-black text-white mb-1"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
              >
                全国<span className="text-lg text-yellow-300 font-bold">対応</span>
              </div>
              <p className="text-xs text-blue-200 font-medium">主要エリア網羅</p>
            </div>
            <div className="stat-box">
              <div
                className="text-3xl font-black text-white mb-1"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
              >
                47<span className="text-lg text-yellow-300 font-bold">都道府県</span>
              </div>
              <p className="text-xs text-blue-200 font-medium">対応エリア</p>
            </div>
            <div className="stat-box">
              <div
                className="text-3xl font-black text-white mb-1"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
              >
                厳選<span className="text-lg text-yellow-300 font-bold">比較</span>
              </div>
              <p className="text-xs text-blue-200 font-medium">優良業者のみ掲載</p>
            </div>
          </div>
        </div>

        {/* Wave SVG */}
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
      </section>

      {/* PARALLAX: USER VOICES */}
      <section className="parallax-container py-16 md:py-20">
        <div className="parallax-bg"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 section-heading">
              こんなお悩みありませんか？
            </h3>
            <p className="text-sm md:text-base text-gray-500 mt-6">
              多くのお客様が同じ悩みを抱えてクリーンナビを利用されています
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {/* Voice 1 */}
            <div className="voice-card">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="voice-avatar"
                  style={{ background: 'linear-gradient(135deg, #f472b6, #ec4899)' }}
                >
                  👩
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">30代 共働き主婦</p>
                  <p className="text-xs text-gray-400">東京都在住</p>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                「仕事と育児で
                <span className="font-bold text-sky-600">掃除する時間がない</span>
                …。エアコンのカビ臭が気になるけど、自分では分解できなくて困っています。」
              </p>
            </div>

            {/* Voice 2 */}
            <div className="voice-card">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="voice-avatar"
                  style={{ background: 'linear-gradient(135deg, #60a5fa, #3b82f6)' }}
                >
                  👨
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">40代 会社員</p>
                  <p className="text-xs text-gray-400">神奈川県在住</p>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                「業者がたくさんあって
                <span className="font-bold text-sky-600">どこに頼めばいいかわからない</span>
                。料金もバラバラで、比較するのが大変で…。」
              </p>
            </div>

            {/* Voice 3 */}
            <div className="voice-card">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="voice-avatar"
                  style={{ background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)' }}
                >
                  👩
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">50代 専業主婦</p>
                  <p className="text-xs text-gray-400">大阪府在住</p>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                「浴室のカビが
                <span className="font-bold text-sky-600">何度掃除しても取れない</span>
                …。市販の洗剤では限界を感じています。プロに任せたい。」
              </p>
            </div>

            {/* Voice 4 */}
            <div className="voice-card">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="voice-avatar"
                  style={{ background: 'linear-gradient(135deg, #34d399, #10b981)' }}
                >
                  👨
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">30代 一人暮らし</p>
                  <p className="text-xs text-gray-400">愛知県在住</p>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                「引越し前に
                <span className="font-bold text-sky-600">部屋をピカピカにしたい</span>
                けど、退去費用を抑えるためにどの業者がコスパ良いか知りたい。」
              </p>
            </div>

            {/* Voice 5 */}
            <div className="voice-card">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="voice-avatar"
                  style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)' }}
                >
                  👩
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">40代 子育て中</p>
                  <p className="text-xs text-gray-400">埼玉県在住</p>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                「小さい子どもがいるから
                <span className="font-bold text-sky-600">安全な洗剤を使ってくれる業者</span>
                がいい。口コミで安心できるところを探したい。」
              </p>
            </div>

            {/* Voice 6 */}
            <div className="voice-card">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="voice-avatar"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #f97316)' }}
                >
                  👨
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">50代 持ち家</p>
                  <p className="text-xs text-gray-400">福岡県在住</p>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                「換気扇の
                <span className="font-bold text-sky-600">油汚れがひどくて換気が弱い</span>
                。年に一度はプロにお願いしたいが、信頼できる業者を見つけたい。」
              </p>
            </div>
          </div>

          {/* CTA after voices */}
          <div className="text-center mt-10">
            <p className="text-lg font-bold text-gray-800 mb-4">
              そのお悩み、<span className="text-sky-500">クリーンナビ</span>が解決します！
            </p>
            <a className="btn-cta" href="#services">
              ✨ あなたに合った業者を探す
            </a>
          </div>
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section className="py-16 md:py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 section-heading">
              人気のクリーニングサービス
            </h3>
            <p className="text-sm md:text-base text-gray-500 mt-6">
              お悩みに合わせて最適なサービスをお選びください
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* エアコン */}
            <a className="service-card group" href="/services/aircon/">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="service-card-icon bg-sky-50 text-sky-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path>
                      <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path>
                      <path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="badge-popular">人気No.1</span>
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-sky-500 transition">
                  エアコンクリーニング
                </h4>
                <p className="text-base text-gray-600 mb-4 leading-relaxed">
                  カビ・ホコリを徹底除去。快適な空気で健康的な暮らしを。プロの技で分解洗浄いたします。
                </p>
                <div className="flex items-center gap-1 text-sky-500 font-bold group-hover:gap-3 transition-all">
                  <span>業者を比較する</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* 浴室 */}
            <a className="service-card group" href="/services/bathroom/">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="service-card-icon bg-cyan-50 text-cyan-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 4 8 6"></path>
                      <path d="M17 19v2"></path>
                      <path d="M2 12h20"></path>
                      <path d="M7 19v2"></path>
                      <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="badge-recommend">おすすめ</span>
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-sky-500 transition">
                  浴室クリーニング
                </h4>
                <p className="text-base text-gray-600 mb-4 leading-relaxed">
                  頑固な水垢・カビもピカピカに。リラックスできるバスタイムを取り戻しましょう。
                </p>
                <div className="flex items-center gap-1 text-sky-500 font-bold group-hover:gap-3 transition-all">
                  <span>業者を比較する</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* キッチン */}
            <a className="service-card group" href="/services/kitchen/">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="service-card-icon bg-orange-50 text-orange-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
                      <path d="M6 17h12"></path>
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-sky-500 transition">
                  キッチンクリーニング
                </h4>
                <p className="text-base text-gray-600 mb-4 leading-relaxed">
                  油汚れ・焦げ付きもスッキリ。清潔なキッチンで毎日の料理がもっと楽しく。
                </p>
                <div className="flex items-center gap-1 text-sky-500 font-bold group-hover:gap-3 transition-all">
                  <span>業者を比較する</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 section-heading">
              エリアから業者を探す
            </h3>
            <p className="text-sm md:text-base text-gray-500 mt-6">
              お住まいの地域の優良業者をすぐに見つけられます
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 max-w-5xl mx-auto">
            <a className="area-card text-center group" href="/areas/tokyo/">
              <div className="font-bold text-gray-900 group-hover:text-sky-500 transition">
                🗼 東京都
              </div>
            </a>
            <a className="area-card text-center group" href="/areas/kanagawa/">
              <div className="font-bold text-gray-900 group-hover:text-sky-500 transition">
                🌊 神奈川県
              </div>
            </a>
            <a className="area-card text-center group" href="/areas/osaka/">
              <div className="font-bold text-gray-900 group-hover:text-sky-500 transition">
                🏯 大阪府
              </div>
            </a>
            <a className="area-card text-center group" href="/areas/aichi/">
              <div className="font-bold text-gray-900 group-hover:text-sky-500 transition">
                🏙 愛知県
              </div>
            </a>
            <a className="area-card text-center group" href="/areas/fukuoka/">
              <div className="font-bold text-gray-900 group-hover:text-sky-500 transition">
                🍜 福岡県
              </div>
            </a>
            <a className="area-card text-center group" href="/areas/saitama/">
              <div className="font-bold text-gray-900 group-hover:text-sky-500 transition">
                🌸 埼玉県
              </div>
            </a>
            <a className="area-card text-center group" href="/areas/chiba/">
              <div className="font-bold text-gray-900 group-hover:text-sky-500 transition">
                🎡 千葉県
              </div>
            </a>
            <a className="area-card text-center group" href="/areas/hyogo/">
              <div className="font-bold text-gray-900 group-hover:text-sky-500 transition">
                ⚓ 兵庫県
              </div>
            </a>
            <a className="area-card text-center group" href="/areas/sapporo/">
              <div className="font-bold text-gray-900 group-hover:text-sky-500 transition">
                ⛄ 札幌市
              </div>
            </a>
            <a className="area-card text-center group" href="/areas/kyoto/">
              <div className="font-bold text-gray-900 group-hover:text-sky-500 transition">
                ⛩ 京都府
              </div>
            </a>
            <a className="area-card text-center group" href="/areas/sendai/">
              <div className="font-bold text-gray-900 group-hover:text-sky-500 transition">
                🌿 仙台市
              </div>
            </a>
            <a className="area-card text-center group" href="/areas/hiroshima/">
              <div className="font-bold text-gray-900 group-hover:text-sky-500 transition">
                🕊 広島市
              </div>
            </a>
          </div>
          <div className="text-center mt-8">
            <a href="/areas/" className="text-sky-500 font-bold hover:underline text-base">
              その他のエリアも見る →
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 section-heading">
              クリーンナビが選ばれる理由
            </h3>
            <p className="text-sm md:text-base text-gray-500 mt-6">
              安心・信頼・お得の3つをお約束します
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="reason-card bg-white border border-gray-100 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{
                  background: 'linear-gradient(90deg, #0ea5e9, #38bdf8, #67e8f9)',
                }}
              ></div>
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-5 relative"
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                  boxShadow: '0 8px 32px rgba(14,165,233,0.3)',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-11 h-11"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                  <path d="M11 8v6"></path>
                  <path d="M8 11h6"></path>
                </svg>
                <div
                  className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                  style={{
                    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                    color: '#0c4a6e',
                    boxShadow: '0 2px 8px rgba(251,191,36,0.4)',
                  }}
                >
                  ✓
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">簡単比較</h4>
              <p className="text-base text-gray-600 leading-relaxed">
                料金・口コミ・サービス内容を一目で比較。最適な業者がすぐに見つかります。
              </p>
            </div>
            <div className="reason-card bg-white border border-gray-100 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{
                  background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #d97706)',
                }}
              ></div>
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-5 relative"
                style={{
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  boxShadow: '0 8px 32px rgba(245,158,11,0.3)',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-11 h-11"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <div
                  className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                  style={{
                    background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                    color: '#fff',
                    boxShadow: '0 2px 8px rgba(14,165,233,0.4)',
                  }}
                >
                  ★
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">実績豊富</h4>
              <p className="text-base text-gray-600 leading-relaxed">
                厳選された優良業者のみを掲載。安心してご利用いただけます。
              </p>
            </div>
            <div className="reason-card bg-white border border-gray-100 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{
                  background: 'linear-gradient(90deg, #22c55e, #16a34a, #4ade80)',
                }}
              ></div>
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-5 relative"
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  boxShadow: '0 8px 32px rgba(34,197,94,0.3)',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-11 h-11"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <div
                  className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                  style={{
                    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                    color: '#0c4a6e',
                    boxShadow: '0 2px 8px rgba(251,191,36,0.4)',
                  }}
                >
                  ¥
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">お得な価格</h4>
              <p className="text-base text-gray-600 leading-relaxed">
                複数業者を比較することで、適正価格でサービスを受けられます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-20 bg-white" id="faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 section-heading">
              よくある質問
            </h3>
            <p className="text-sm md:text-base text-gray-500 mt-6">
              ハウスクリーニングに関するよくあるご質問にお答えします
            </p>
          </div>

          <div className="space-y-4">
            {/* Q1 */}
            <details
              className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
              open
            >
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-gray-100 transition">
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                    }}
                  >
                    Q
                  </span>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">
                    ハウスクリーニングの料金相場はいくらですか？
                  </h4>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6">
                <div className="flex gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    }}
                  >
                    A
                  </span>
                  <p className="text-base text-gray-700 leading-relaxed">
                    エアコンクリーニングは1台あたり
                    <strong>8,000円〜15,000円</strong>
                    、浴室クリーニングは
                    <strong>12,000円〜20,000円</strong>
                    、キッチンクリーニングは
                    <strong>10,000円〜18,000円</strong>
                    が相場です。業者や地域によって異なりますので、複数社の見積もりを比較することをおすすめします。
                  </p>
                </div>
              </div>
            </details>

            {/* Q2 */}
            <details className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-gray-100 transition">
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                    }}
                  >
                    Q
                  </span>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">
                    ハウスクリーニング業者の選び方のポイントは？
                  </h4>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6">
                <div className="flex gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    }}
                  >
                    A
                  </span>
                  <p className="text-base text-gray-700 leading-relaxed">
                    ①<strong>料金の透明性</strong>（追加料金の有無）、②
                    <strong>口コミ・評判</strong>、③<strong>損害保険への加入</strong>、④
                    <strong>スタッフの研修体制</strong>、⑤
                    <strong>アフターフォローの有無</strong>
                    を確認しましょう。クリーンナビでは、これらの基準を満たした優良業者のみを掲載しています。
                  </p>
                </div>
              </div>
            </details>

            {/* Q3 */}
            <details className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-gray-100 transition">
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                    }}
                  >
                    Q
                  </span>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">
                    エアコンクリーニングはどのくらいの頻度で行うべきですか？
                  </h4>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6">
                <div className="flex gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    }}
                  >
                    A
                  </span>
                  <p className="text-base text-gray-700 leading-relaxed">
                    一般的には<strong>年に1〜2回</strong>
                    が推奨されています。特に夏のエアコン使用シーズン前（4〜5月）にクリーニングすると、カビやホコリを除去して清潔な空気で過ごせます。ペットを飼っている方や喫煙者がいるご家庭では、より頻繁なクリーニングをおすすめします。
                  </p>
                </div>
              </div>
            </details>

            {/* Q4 */}
            <details className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-gray-100 transition">
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                    }}
                  >
                    Q
                  </span>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">
                    クリーニング当日の準備は何が必要ですか？
                  </h4>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6">
                <div className="flex gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    }}
                  >
                    A
                  </span>
                  <p className="text-base text-gray-700 leading-relaxed">
                    基本的には<strong>作業スペースの確保</strong>
                    （周囲の物を少し移動）と<strong>水道・電気の使用許可</strong>
                    があればOKです。貴重品の保管や、ペットがいる場合は別室への移動をお願いする業者もあります。詳しくは各業者の注意事項をご確認ください。
                  </p>
                </div>
              </div>
            </details>

            {/* Q5 */}
            <details className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-gray-100 transition">
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                    }}
                  >
                    Q
                  </span>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">
                    賃貸マンションでもハウスクリーニングを依頼できますか？
                  </h4>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6">
                <div className="flex gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    }}
                  >
                    A
                  </span>
                  <p className="text-base text-gray-700 leading-relaxed">
                    はい、<strong>賃貸マンションでも問題なく依頼できます</strong>
                    。退去時の原状回復費用を抑えるために依頼される方も多いです。ただし、大規模な作業（外壁洗浄など）は管理会社への確認が必要な場合があります。
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0c4a6e 100%)',
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            まずは無料で業者を比較してみませんか？
          </h3>
          <p className="text-base md:text-lg text-blue-200 mb-8 max-w-xl mx-auto">
            料金・口コミ・サービス内容を一括比較。
            <br />
            最適な業者がすぐに見つかります。
          </p>
          <a className="btn-cta" href="/services/aircon/">
            ✨ 今すぐ業者を探す
          </a>
        </div>
      </section>

      {/* SEO: RELATED KEYWORDS SECTION */}
      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-lg font-bold text-gray-700 mb-4">関連キーワードから探す</h3>
          <div className="flex flex-wrap gap-2">
            <a
              href="/services/aircon/"
              className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
            >
              エアコンクリーニング 料金
            </a>
            <a
              href="/services/bathroom/"
              className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
            >
              浴室クリーニング おすすめ
            </a>
            <a
              href="/services/kitchen/"
              className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
            >
              キッチン 油汚れ 業者
            </a>
            <a
              href="/areas/tokyo/"
              className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
            >
              ハウスクリーニング 東京
            </a>
            <a
              href="/areas/osaka/"
              className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
            >
              ハウスクリーニング 大阪
            </a>
            <a
              href="/comparison/"
              className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
            >
              ハウスクリーニング 比較
            </a>
            <a
              href="/faq/"
              className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
            >
              ハウスクリーニング 相場
            </a>
            <a
              href="/services/aircon/"
              className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
            >
              エアコン カビ 除去
            </a>
            <a
              href="/about/"
              className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
            >
              クリーニング業者 口コミ
            </a>
            <a
              href="/services/bathroom/"
              className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
            >
              お風呂掃除 プロ
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="text-white relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #0c4a6e 0%, #0e7490 30%, #0c4a6e 70%, #164e63 100%)',
        }}
      >
        {/* 装飾 */}
        <div
          className="absolute top-0 left-0 w-full h-1"
          style={{
            background: 'linear-gradient(90deg, #38bdf8, #22d3ee, #0ea5e9, #67e8f9, #38bdf8)',
          }}
        ></div>
        <div
          className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #67e8f9, transparent 70%)' }}
        ></div>
        <div
          className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #fbbf24, transparent 70%)' }}
        ></div>

        {/* Upper footer: CTA */}
        <div className="border-b border-white/10 py-8 relative z-10">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/images/logo-character.png"
                alt="クリーンナビ キャラクター"
                className="w-16 h-16 object-contain drop-shadow-lg"
              />
              <div>
                <h5 className="text-xl md:text-2xl font-black">クリーンナビ</h5>
                <p className="text-sky-300 text-sm">ハウスクリーニング業者比較サイト</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block text-right">
                <p className="text-sm text-sky-200">お気軽にお問い合わせください</p>
                <p className="text-2xl font-black text-white tracking-wider">📩 Webでお問い合わせ</p>
              </div>
              <a
                className="px-6 py-3 rounded-full text-sm font-bold"
                style={{
                  background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                  color: '#0c4a6e',
                  boxShadow: '0 4px 16px rgba(251,191,36,0.3)',
                }}
                href="/contact/"
              >
                ✨ 無料お見積り
              </a>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="py-10 md:py-14 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {/* サービス */}
              <div>
                <h6 className="font-bold mb-4 text-base flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-md flex items-center justify-center text-xs"
                    style={{ background: 'rgba(56,189,248,0.2)' }}
                  >
                    ✨
                  </span>
                  サービス
                </h6>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/services/aircon/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                      エアコンクリーニング
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/services/bathroom/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                      浴室クリーニング
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/services/kitchen/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                      キッチンクリーニング
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/services/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                      サービス一覧
                    </a>
                  </li>
                </ul>
              </div>

              {/* エリア */}
              <div>
                <h6 className="font-bold mb-4 text-base flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-md flex items-center justify-center text-xs"
                    style={{ background: 'rgba(56,189,248,0.2)' }}
                  >
                    📍
                  </span>
                  人気エリア
                </h6>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/areas/tokyo/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                      東京都
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/areas/kanagawa/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                      神奈川県
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/areas/osaka/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                      大阪府
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/areas/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                      全エリア一覧
                    </a>
                  </li>
                </ul>
              </div>

              {/* ご利用ガイド */}
              <div>
                <h6 className="font-bold mb-4 text-base flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-md flex items-center justify-center text-xs"
                    style={{ background: 'rgba(56,189,248,0.2)' }}
                  >
                    📖
                  </span>
                  ご利用ガイド
                </h6>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/about/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                      初めての方へ
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/faq/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                      よくある質問
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/guide/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                      お掃除コラム
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/contact/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                      お問い合わせ
                    </a>
                  </li>
                </ul>
              </div>

              {/* 会社情報 */}
              <div>
                <h6 className="font-bold mb-4 text-base flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-md flex items-center justify-center text-xs"
                    style={{ background: 'rgba(56,189,248,0.2)' }}
                  >
                    🏢
                  </span>
                  会社情報
                </h6>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/company/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      運営会社
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/privacy/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      プライバシーポリシー
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/terms/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      利用規約
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sky-200 hover:text-white transition flex items-center gap-2"
                      href="/sitemap/"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      サイトマップ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 py-6" style={{ background: 'rgba(0,0,0,0.15)' }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo-character.png"
                  alt=""
                  className="w-8 h-8 object-contain opacity-60"
                />
                <p className="text-sky-300 text-xs">
                  © 2026 クリーンナビ All rights reserved.
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-sky-400">
                <a href="/privacy/" className="hover:text-white transition">
                  プライバシー
                </a>
                <span className="text-sky-700">|</span>
                <a href="/terms/" className="hover:text-white transition">
                  利用規約
                </a>
                <span className="text-sky-700">|</span>
                <a href="/sitemap/" className="hover:text-white transition">
                  サイトマップ
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
