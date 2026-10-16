import providers from "../data/providers.json";
import { PARTNERS } from "../data/partners";

// 「クリーンナビの特長」（2026-10-16 刷新）。旧「選ばれる理由」の
// 「厳選された優良業者のみ」「口コミを比較」は根拠が無い・サイトの方針（架空の口コミを作らない）と合わないので外した。
export default function Reasons() {
  const items = [
    { icon: "icon-official", title: "公式情報だけで比べる",
      body: `料金・対応エリア・保証は、提携${PARTNERS.length}社の公式サイトで確かめ、確認した日付と一緒に載せています。` },
    { icon: "icon-stores", title: `全国${(providers as unknown[]).length.toLocaleString()}店舗を地域別に`,
      body: "大手3ブランドの公式店舗一覧から、47都道府県の店舗を市区町村ごとにまとめています。" },
    { icon: "icon-price", title: "同じメニューの料金を並べる",
      body: "エアコン・浴室・キッチンなど同じメニューの公式料金を業者ごとに並べ、相場を確かめられます。" },
  ];
  return (
    <section className="cn-section cn-section-mist" aria-labelledby="reasons-title">
      <div className="cn-container">
        <div className="cn-head" data-reveal>
          <p className="cn-eyebrow">FEATURES</p>
          <h2 id="reasons-title" className="cn-h2">クリーンナビの特長</h2>
        </div>
        <ul className="cn-reasons">
          {items.map((it, i) => (
            <li key={it.icon} className="cn-reason" data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <img src={`/images/top/${it.icon}.webp`} alt="" width={384} height={384} loading="lazy" />
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
