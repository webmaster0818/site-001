import providers from "../data/providers.json";
import areaMap from "../data/areaMap.json";

// TOP のファーストビュー（2026-10-16 MediaXAI がデザイン案2「キッチン型」を選択・参考 kagi-trouble-navi.com）。
// ⚠️ 数字は掲載データから計算する。手で書かない（うそのない範囲で、が指示）。
//   エアコンの最安は app/data/partners.ts の公式料金（おそうじLabo 初回限定 8,800円・税込）。料金を見直したらここも確認する。
//   「〇分以内に到着」「業界最多」は根拠が無いので出さない。
const STORES = (providers as unknown[]).length;
const PREFS = new Set((providers as { pref_ja: string }[]).map((p) => p.pref_ja)).size;
const AREAS = Object.keys(areaMap).length;
const AIRCON_MIN = "8,800";

const CHIPS = [
  { href: "/services/aircon/", label: "エアコン" },
  { href: "/services/bathroom/", label: "浴室" },
  { href: "/services/kitchen/", label: "キッチン" },
  { href: "/services-detail/toilet/", label: "トイレ" },
  { href: "/price/", label: "料金相場" },
];

export default function TopHero() {
  const stats = [
    { k: "掲載店舗", v: STORES.toLocaleString(), u: "店舗" },
    { k: "対応エリア", v: String(PREFS), u: "都道府県" },
    { k: "エアコンクリーニング", v: AIRCON_MIN, u: "円〜" },
    { k: "エリア別まとめ", v: String(AREAS), u: "エリア" },
  ];
  return (
    <section className="cn-hero" aria-labelledby="hero-title">
      <div className="cn-hero-frame">
        <picture className="cn-hero-photo">
          <source media="(max-width: 767px)" srcSet="/images/top/hero-kitchen-sp.webp" />
          <img
            src="/images/top/hero-kitchen.webp"
            alt="キッチンのレンジフードを拭くハウスクリーニングの作業者"
            width={2400}
            height={1339}
            fetchPriority="high"
          />
        </picture>
        <div className="cn-hero-copy">
          <p className="cn-hero-label">公式情報で中立に比較する、ハウスクリーニングの比較サイト</p>
          <h1 id="hero-title" className="cn-hero-title">
            <span>エアコン・浴室・キッチン。</span>
            <span>プロのお掃除を、正しく選ぶ。</span>
          </h1>
          <div className="cn-hero-actions">
            <a className="cn-btn cn-btn-primary cn-btn-lg" href="#trouble">お悩みから探す</a>
            <a className="cn-btn cn-btn-primary cn-btn-lg" href="#area">エリアから探す</a>
          </div>
          <ul className="cn-hero-chips" aria-label="よく見られている項目">
            {CHIPS.map((c) => (
              <li key={c.href}>
                <a className="cn-chip" href={c.href}>{c.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <dl className="cn-stats">
        {stats.map((s) => (
          <div key={s.k} className="cn-stat">
            <dt>{s.k}</dt>
            <dd>
              {s.v}
              <span>{s.u}</span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="cn-hero-note">
        ※ 掲載店舗・対応エリアは、おそうじ本舗・ダスキン サービスマスター・おそうじ革命の公式店舗一覧から当サイトが集計した数です。
        エアコンクリーニングの料金は掲載業者の公式表示の最安（おそうじLabo 初回限定・税込）。地域・機種・時期により異なります。
        当サイトは清掃業者ではなく、業者を選ぶための情報を提供する比較サイトです。写真はイメージです。
      </p>
    </section>
  );
}
