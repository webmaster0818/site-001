import areaMap from "../data/areaMap.json";

// 「エリアから探す」（2026-10-16 MediaXAI・参考 kagi-trouble-navi.com の折りたたみ形式）。
// ・東京都は最上部の別枠にして23区を並べる。関東の中には東京都を入れない
// ・東京都を含め、最初はすべて折りたたむ（<details> なので JS 無しでも開閉でき、リンクは HTML に全部出る）
// ・スマホでも押しやすいよう、リンクはすべて高さ44px以上のボタン型にそろえる
// データは app/data/areaMap.json（scripts/gen-area-map.py が作る）。ページの無い地域は出ない。
type Area = {
  slug: string;
  kind: string;
  label: string;
  pref: string;
  prefSlug: string;
  children?: { slug: string; name: string }[];
  count?: number;
};
const MAP = areaMap as Record<string, Area>;

const REGIONS: { name: string; prefs: string[] }[] = [
  { name: "北海道・東北", prefs: ["hokkaido", "aomori", "iwate", "miyagi", "akita", "yamagata", "fukushima"] },
  { name: "関東", prefs: ["ibaraki", "tochigi", "gunma", "saitama", "chiba", "kanagawa"] },
  { name: "北陸・甲信越", prefs: ["niigata", "toyama-ken", "ishikawa", "fukui-ken", "yamanashi", "nagano-ken"] },
  { name: "東海", prefs: ["gifu-ken", "shizuoka", "aichi", "mie"] },
  { name: "近畿", prefs: ["shiga", "kyoto", "osaka", "hyogo", "nara", "wakayama-ken"] },
  { name: "中国", prefs: ["tottori", "shimane", "okayama-ken", "hiroshima-ken", "yamaguchi"] },
  { name: "四国", prefs: ["tokushima", "kagawa", "ehime", "kochi-ken"] },
  { name: "九州・沖縄", prefs: ["fukuoka", "saga", "nagasaki", "kumamoto-ken", "oita-ken", "miyazaki-ken", "kagoshima-ken", "okinawa"] },
];

/** 子の表示名から都道府県名・親の市名を落とす（「札幌市中央区」→ 札幌市の中では「中央区」） */
function short(name: string, pref: string) {
  return name.startsWith(pref) ? name.slice(pref.length) : name;
}

function Links({ items }: { items: { slug: string; label: string }[] }) {
  return (
    <ul className="cn-area-links">
      {items.map((c) => (
        <li key={c.slug}>
          <a className="cn-area-link" href={`/areas/${c.slug}/`}>{c.label}</a>
        </li>
      ))}
    </ul>
  );
}

function PrefBlock({ slug }: { slug: string }) {
  const p = MAP[slug];
  if (!p) return null;
  const kids = (p.children ?? []).filter((c) => MAP[c.slug]);
  return (
    <div className="cn-area-pref">
      <a className="cn-area-pref-link" href={`/areas/${slug}/`}>
        {p.label}
        <span>{(p.count ?? 0).toLocaleString()}店舗</span>
      </a>
      {kids.length > 0 && <Links items={kids.map((c) => ({ slug: c.slug, label: short(c.name, p.label) }))} />}
    </div>
  );
}

export default function AreaAccordion() {
  const tokyo = MAP["tokyo"];
  const tokyoKids = (tokyo?.children ?? []).filter((c) => MAP[c.slug]);
  const wards = tokyoKids.filter((c) => MAP[c.slug].kind === "ward");
  const tama = tokyoKids.filter((c) => MAP[c.slug].kind !== "ward");
  const areasIn = (prefs: string[]) =>
    prefs.reduce((n, s) => n + (MAP[s] ? 1 + (MAP[s].children ?? []).filter((c) => MAP[c.slug]).length : 0), 0);

  return (
    <section id="area" className="cn-section" aria-labelledby="area-title">
      <div className="cn-container cn-container-narrow">
        <div className="cn-head" data-reveal>
          <img className="cn-head-icon" src="/images/top/icon-area.webp" alt="" width={384} height={384} loading="lazy" />
          <p className="cn-eyebrow">AREA SEARCH</p>
          <h2 id="area-title" className="cn-h2">エリアから探す</h2>
          <p className="cn-lead">
            47都道府県・{Object.keys(MAP).length}エリアの店舗まとめから、お住まいの地域を選べます
          </p>
        </div>

        <div className="cn-accordion">
          {tokyo && (
            <details className="cn-acc cn-acc-tokyo" data-reveal>
              <summary>
                <span className="cn-acc-name">東京都<small>23区・多摩地域</small></span>
                <span className="cn-acc-count">{1 + tokyoKids.length}エリア</span>
              </summary>
              <div className="cn-acc-body">
                <a className="cn-area-pref-link" href="/areas/tokyo/">
                  東京都の店舗一覧<span>{(tokyo.count ?? 0).toLocaleString()}店舗</span>
                </a>
                <p className="cn-acc-sub">23区</p>
                <Links items={wards.map((c) => ({ slug: c.slug, label: short(c.name, "東京都") }))} />
                {tama.length > 0 && (
                  <>
                    <p className="cn-acc-sub">多摩地域</p>
                    <Links items={tama.map((c) => ({ slug: c.slug, label: short(c.name, "東京都") }))} />
                  </>
                )}
              </div>
            </details>
          )}

          {REGIONS.map((r) => (
            <details key={r.name} className="cn-acc" data-reveal>
              <summary>
                <span className="cn-acc-name">{r.name}</span>
                <span className="cn-acc-count">{areasIn(r.prefs)}エリア</span>
              </summary>
              <div className="cn-acc-body cn-acc-prefs">
                {r.prefs.map((s) => (
                  <PrefBlock key={s} slug={s} />
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
