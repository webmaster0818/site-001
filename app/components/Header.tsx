export default function Header() {
  const nav = [
    { href: "/services/aircon/", label: "エアコン" },
    { href: "/services/bathroom/", label: "浴室" },
    { href: "/services/kitchen/", label: "キッチン" },
    { href: "/price/", label: "料金相場" },
    { href: "/areas/", label: "地域から探す" },
    { href: "/guide/", label: "初めての方へ" },
  ];
  return (
    <>
      <div className="top-bar" aria-hidden="true"></div>
      <header className="site-header sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a className="flex items-center gap-3 shrink-0" href="/">
            <img
              src="/images/logo-character.png"
              alt=""
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="brand-wordmark text-xl md:text-[1.45rem] text-ink">
                クリーンナビ
              </span>
              <span className="mt-1 text-[10px] tracking-[0.18em] text-muted">
                ハウスクリーニング業者比較
              </span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="グローバルナビゲーション">
            {nav.map((n) => (
              <a key={n.href} className="nav-link px-3.5 py-2 text-[0.92rem] font-medium text-ink-soft" href={n.href}>
                {n.label}
              </a>
            ))}
            <a className="btn-cta ml-3" href="/ranking/">
              業者を比較する
            </a>
          </nav>
          <a className="btn-cta only-mobile text-xs px-4 py-2" href="/ranking/">
            業者を比較
          </a>
        </div>
        <div className="only-mobile overflow-x-auto mobile-subnav">
          <div className="flex whitespace-nowrap px-3 py-2 gap-1.5">
            <a className="chip chip-active" href="/">トップ</a>
            {nav.map((n) => (
              <a key={n.href} className="chip" href={n.href}>
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
