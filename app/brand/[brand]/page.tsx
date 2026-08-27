import type { Metadata } from "next";
import providers from "../../data/providers.json";

type Provider = {
  slug: string;
  brand: string;
  brand_name: string;
  name: string;
  pref: string;
  pref_ja: string;
  address?: string | null;
  rating_official?: number;
  review_count_official?: number;
  verified_at?: string;
};

const list = providers as Provider[];

// ブランド概要は company/1-6 で使用済みの実在情報のみ(新規の数値創作なし)
const BRANDS: Record<
  string,
  { name: string; description: string; features: string[] }
> = {
  osoujihonpo: {
    name: "おそうじ本舗",
    description:
      "全国約1,900店舗を展開する業界最大手のハウスクリーニングチェーン。特許取得の「ファインバブルエアコンクリーニング」で、微細な泡が奥のカビ・汚れまで徹底除去します。",
    features: ["全国約1,900店舗展開", "特許取得のファインバブル洗浄", "損害保険加入済み", "Webで簡単予約"],
  },
  duskin: {
    name: "ダスキン サービスマスター",
    description:
      "1963年創業の老舗クリーニングブランド。全国約1,600拠点で展開し、浴室クリーニングをはじめとする各種ハウスクリーニングを提供しています。",
    features: ["創業60年以上の実績", "全国約1,600拠点", "損害保険加入済み", "定期サービスも対応"],
  },
  osoujikakumei: {
    name: "おそうじ革命",
    description:
      "全国約420店舗を展開するハウスクリーニングチェーン。50日間の研修を受けたスタッフが対応し、追加料金なしの明朗会計が特徴です。",
    features: ["業界最安クラス", "50日間の研修", "追加料金なし", "全国約420店舗展開"],
  },
};

const BRAND_KEY: Record<string, string> = {
  osoujihonpo: "honpo",
  duskin: "duskin",
  osoujikakumei: "kakumei",
};

const PREF_ORDER = [
  "hokkaido","aomori","iwate","miyagi","akita","yamagata","fukushima","ibaraki","tochigi","gunma",
  "saitama","chiba","tokyo","kanagawa","niigata","toyama","ishikawa","fukui","yamanashi","nagano",
  "gifu","shizuoka","aichi","mie","shiga","kyoto","osaka","hyogo","nara","wakayama",
  "tottori","shimane","okayama","hiroshima","yamaguchi","tokushima","kagawa","ehime","kochi","fukuoka",
  "saga","nagasaki","kumamoto","oita","miyazaki","kagoshima","okinawa",
];

export async function generateStaticParams() {
  return Object.keys(BRANDS).map((brand) => ({ brand }));
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand } = await params;
  const b = BRANDS[brand];
  if (!b) return {};
  const stores = list.filter((p) => p.brand === BRAND_KEY[brand]);
  return {
    title: `${b.name}の店舗一覧（全国${stores.length}店舗）・特徴｜クリーンナビ`,
    description: `${b.name}の全国${stores.length}店舗を都道府県別に一覧掲載。公式サイトで確認した実在店舗のみ、所在地・対応エリア・公式評価を確認日つきでまとめています。`,
    alternates: { canonical: `https://cleaning-choices.com/brand/${brand}/` },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  const b = BRANDS[brand];
  if (!b) return null;
  const stores = list.filter((p) => p.brand === BRAND_KEY[brand]);
  const byPref = new Map<string, Provider[]>();
  for (const s of stores) {
    if (!byPref.has(s.pref)) byPref.set(s.pref, []);
    byPref.get(s.pref)!.push(s);
  }
  const rated = stores
    .filter((s) => typeof s.rating_official === "number" && (s.review_count_official ?? 0) >= 50)
    .sort((x, y) => y.rating_official! - x.rating_official! || (y.review_count_official ?? 0) - (x.review_count_official ?? 0))
    .slice(0, 6);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://cleaning-choices.com/" },
      { "@type": "ListItem", position: 2, name: `${b.name}の店舗一覧`, item: `https://cleaning-choices.com/brand/${brand}/` },
    ],
  };
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: b.name,
    description: b.description,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-content py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{b.name}の店舗一覧・特徴</h1>
          <p className="text-sm opacity-90">
            公式サイトで確認した全国{stores.length}店舗を都道府県別に掲載しています
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pt-6">
        <nav className="breadcrumbs" aria-label="パンくず">
          <ol>
            <li><a href="/">ホーム</a></li>
            <li>{b.name}</li>
          </ol>
        </nav>
      </div>

      <section className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="card p-6">
          <h2 className="text-xl font-bold text-ink mb-3">{b.name}とは</h2>
          <p className="text-sm text-ink-soft leading-relaxed mb-4">{b.description}</p>
          <div className="flex flex-wrap gap-2">
            {b.features.map((f) => (
              <span key={f} className="badge badge-outline">{f}</span>
            ))}
          </div>
          <p className="text-xs text-muted mt-4">
            掲載店舗は{b.name}公式サイトで確認した実在店舗のみです（各店舗ページに出典・確認日を記載）。最新の営業状況・料金は必ず公式サイト・店舗にご確認ください。
          </p>
        </div>
      </section>

      {rated.length > 0 && (
        <section className="container mx-auto px-4 pb-8 max-w-4xl">
          <h2 className="text-xl font-bold text-ink mb-2">公式サイト評価の高い{b.name}の店舗</h2>
          <p className="text-xs text-muted mb-4">公式サイト掲載のレビュー集計（50件以上）を評価順に表示。当サイトの独自集計ではありません。</p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {rated.map((s) => (
              <a key={s.slug} href={`/provider/${s.slug}/`} className="card p-4 block">
                <p className="text-sm font-bold text-ink">{s.name}</p>
                <p className="text-xs text-muted mt-1">{s.pref_ja}</p>
                <p className="text-xs text-primary mt-1">
                  公式評価 {s.rating_official!.toFixed(2)}（{s.review_count_official}件）
                </p>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 pb-14 max-w-5xl">
        <h2 className="text-xl font-bold text-ink mb-4">都道府県別の{b.name}店舗一覧</h2>
        <div className="space-y-6">
          {PREF_ORDER.filter((pref) => byPref.has(pref)).map((pref) => {
            const ps = byPref.get(pref)!;
            return (
              <div key={pref}>
                <h3 className="font-bold text-ink-soft mb-2">
                  <a href={`/areas/${pref}/`} className="hover:text-primary">{ps[0].pref_ja}</a>
                  <span className="text-xs text-muted font-normal">（{ps.length}店舗）</span>
                </h3>
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                  {ps.map((s) => (
                    <li key={s.slug}>
                      <a href={`/provider/${s.slug}/`} className="text-sm text-primary underline decoration-primary/30 underline-offset-2">
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="alert alert-info mt-8">
          <p className="text-sm">
            依頼前には2〜3社の相見積もりがおすすめです。他ブランドとの比較は
            <a href="/ranking/" className="underline text-primary">比較ランキング</a>・お住まいの地域の全店舗は
            <a href="/areas/" className="underline text-primary">地域から探す</a>をご覧ください。
          </p>
        </div>
      </section>
    </main>
  );
}
