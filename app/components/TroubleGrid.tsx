// 「お悩みから探す」（2026-10-16 MediaXAI：アイコンは大きく、色はできるだけ使わない・参考 kagi-trouble-navi.com）。
// アイコンは Nano Banana Pro で作った紺の線画（scripts/gen-top-assets.py → public/images/top/icon-*.webp）。
// ボタン（下の帯）は全部同じ色・同じ形にする（「各選択するボタンは色は変えずデザインを統一」）。
const ITEMS = [
  { href: "/services/aircon/", icon: "icon-aircon", label: "エアコン", note: "カビ・ニオイ・効きが悪い" },
  { href: "/services/bathroom/", icon: "icon-bathroom", label: "浴室", note: "黒カビ・水アカ・排水口" },
  { href: "/services/kitchen/", icon: "icon-kitchen", label: "キッチン", note: "油汚れ・レンジフード" },
  { href: "/services-detail/toilet/", icon: "icon-toilet", label: "トイレ", note: "尿石・黄ばみ・ニオイ" },
  { href: "/services-detail/washroom/", icon: "icon-washroom", label: "洗面所", note: "水アカ・鏡のくもり" },
  { href: "/services-detail/window/", icon: "icon-window", label: "窓・サッシ", note: "網戸・レールの砂ぼこり" },
  { href: "/services-detail/ventilation/", icon: "icon-ventilation", label: "換気扇", note: "回りが悪い・ほこり" },
  { href: "/services-detail/floor-wax/", icon: "icon-floor", label: "床・ワックス", note: "くすみ・はがれ" },
  { href: "/services-detail/whole-house/", icon: "icon-wholehouse", label: "家まるごと", note: "引っ越し・大掃除" },
];

export default function TroubleGrid() {
  return (
    <section id="trouble" className="cn-section cn-section-mist" aria-labelledby="trouble-title">
      <div className="cn-container">
        <div className="cn-head" data-reveal>
          <p className="cn-eyebrow">TROUBLE</p>
          <h2 id="trouble-title" className="cn-h2">お悩みから探す</h2>
          <p className="cn-lead">掃除したい場所をお選びください。料金の目安と、依頼できる業者をご案内します。</p>
        </div>
        <ul className="cn-trouble-grid">
          {ITEMS.map((it, i) => (
            <li key={it.href} data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <a className="cn-trouble-card" href={it.href}>
                <span className="cn-trouble-body">
                  <img src={`/images/top/${it.icon}.webp`} alt="" width={384} height={384} loading="lazy" />
                  <span className="cn-trouble-note">{it.note}</span>
                </span>
                <span className="cn-trouble-label">{it.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
