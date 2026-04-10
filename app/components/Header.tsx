export default function Header() {
  return (
    <>
      {/* TOP ACCENT BAR */}
      <div className="top-bar"></div>

      {/* PHONE / INFO BAR */}
      <div
        className="text-white py-1.5"
        style={{ background: 'linear-gradient(90deg, #0c4a6e, #075985)' }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between text-xs md:text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              📞 <span className="font-bold">お問い合わせはWebから</span>
            </span>
            <span className="hidden md:inline text-brand-300">
              受付 9:00〜18:00（年中無休）
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-brand-300">最終更新: 2026.03.18</span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="site-header sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <a className="flex items-center gap-3" href="/">
            <img
              src="/images/logo-character.png"
              alt="クリーンナビ キャラクター"
              className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-md"
            />
            <div>
              <div className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                クリーンナビ
              </div>
              <p className="text-[10px] md:text-xs text-gray-400 -mt-0.5 tracking-wider">
                ハウスクリーニング業者比較サイト
              </p>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            <a
              className="nav-link px-4 py-2 text-base font-medium text-gray-700"
              href="/"
            >
              トップ
            </a>
            <a
              className="nav-link px-4 py-2 text-base font-medium text-gray-700"
              href="/services/aircon/"
            >
              エアコン
            </a>
            <a
              className="nav-link px-4 py-2 text-base font-medium text-gray-700"
              href="/services/bathroom/"
            >
              浴室
            </a>
            <a
              className="nav-link px-4 py-2 text-base font-medium text-gray-700"
              href="/services/kitchen/"
            >
              キッチン
            </a>
            <a
              className="nav-link px-4 py-2 text-base font-medium text-gray-700"
              href="/about/"
            >
              初めての方へ
            </a>
            <a
              className="ml-3 px-5 py-2.5 rounded-full text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}
              href="/contact/"
            >
              無料お見積り
            </a>
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <a
              className="px-3 py-2 rounded-full text-xs font-bold text-white shadow-md"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                boxShadow: '0 2px 8px rgba(14,165,233,0.3)',
              }}
              href="/contact/"
            >
              無料見積り
            </a>
            <button className="text-gray-700 hover:text-sky-500 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile sub-nav */}
        <div
          className="lg:hidden overflow-x-auto"
          style={{
            background: 'linear-gradient(90deg, #f0f9ff, #e0f2fe, #f0f9ff)',
            borderTop: '1px solid rgba(14,165,233,0.1)',
          }}
        >
          <div className="flex whitespace-nowrap px-3 py-2 gap-1.5">
            <a
              className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-sm"
              style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}
              href="/"
            >
              🏠 トップ
            </a>
            <a
              className="px-3 py-1.5 rounded-full text-xs font-medium text-sky-700 bg-white border border-sky-200 shadow-sm"
              href="/services/aircon/"
            >
              ❄️ エアコン
            </a>
            <a
              className="px-3 py-1.5 rounded-full text-xs font-medium text-sky-700 bg-white border border-sky-200 shadow-sm"
              href="/services/bathroom/"
            >
              🛁 浴室
            </a>
            <a
              className="px-3 py-1.5 rounded-full text-xs font-medium text-sky-700 bg-white border border-sky-200 shadow-sm"
              href="/services/kitchen/"
            >
              🍳 キッチン
            </a>
            <a
              className="px-3 py-1.5 rounded-full text-xs font-medium text-sky-700 bg-white border border-sky-200 shadow-sm"
              href="/about/"
            >
              📖 初めての方
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
