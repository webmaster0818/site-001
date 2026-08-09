export default function Footer() {
  const cols = [
    {
      title: "サービスから探す",
      links: [
        { href: "/services/aircon/", label: "エアコンクリーニング" },
        { href: "/services/bathroom/", label: "浴室クリーニング" },
        { href: "/services/kitchen/", label: "キッチンクリーニング" },
        { href: "/services/", label: "サービス一覧" },
        { href: "/price/", label: "料金相場" },
      ],
    },
    {
      title: "比較・ガイド",
      links: [
        { href: "/ranking/", label: "ランキング一覧" },
        { href: "/areas/", label: "地域から探す" },
        { href: "/guide/", label: "初めての方へ" },
        { href: "/faq/", label: "よくある質問" },
      ],
    },
    {
      title: "サイト情報",
      links: [
        { href: "/about/", label: "運営者情報" },
        { href: "/contact/", label: "お問い合わせ" },
        { href: "/privacy/", label: "プライバシーポリシー" },
        { href: "/terms/", label: "利用規約" },
        { href: "/sitemap/", label: "サイトマップ" },
      ],
    },
  ];
  return (
    <footer className="site-footer mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="brand-wordmark text-xl text-white">クリーンナビ</p>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-white/60">
              ハウスクリーニング業者の比較情報メディアです。掲載情報は各社公式サイトの公開情報に基づき、確認日を明記して掲載しています。
            </p>
            <p className="mt-4 text-[0.75rem] leading-relaxed text-white/45">
              運営: 株式会社MediaX（情報メディアであり、清掃サービスの提供事業者ではありません）
            </p>
          </div>
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <p className="text-[0.72rem] font-bold tracking-[0.16em] text-white/50 mb-3.5">
                {c.title}
              </p>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a className="footer-link" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.72rem] text-white/40">
          <p>本サイトはプロモーション（PR）を含みます。広告の有無は評価・掲載順位に影響しません。</p>
          <p>&copy; {new Date().getFullYear()} クリーンナビ</p>
        </div>
      </div>
    </footer>
  );
}
