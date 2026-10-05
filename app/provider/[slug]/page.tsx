import type { Metadata } from "next";
import providers from "../../data/providers.json";
// CTR実験(2026-09-11開始): GSC表示上位50店のみtitle/descに比較フックを追加。2週間で判定→全展開or撤収
import KakumeiAffiliateCTA from "../../components/KakumeiAffiliateCTA";

type Provider = {
  slug: string;
  brand: string;
  brand_name: string;
  name: string;
  pref_ja: string;
  pref: string;
  address?: string | null;
  zip?: string | null;
  tel?: string | null;
  hours?: string | null;
  holiday?: string | null;
  charge_region?: string[];
  services?: string[];
  invoice_number?: string | null;
  rating_official?: number;
  review_count_official?: number;
  source_url: string;
  verified_at: string;
};

const list = providers as Provider[];

// D2で47都道府県ページが全て揃ったため、常に県ページへ直リンク
function areaHref(pref: string): string {
  return `/areas/${pref}/`;
}

export async function generateStaticParams() {
  return list.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = list.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    // P2 CTR実験(9/11〜9/24)は表示▲64%・CTR低下で撤収→全店舗を標準型に統一
    title: `${p.name}（${titleQualifier(p)}）の店舗情報・対応エリア`,
    description: `${p.name}の店舗情報。${p.address ?? p.pref_ja}を拠点とする${p.brand_name}の加盟店です。対応エリア・営業時間など、公式サイトで確認した情報のみを確認日つきで掲載しています。`,
    alternates: { canonical: `https://cleaning-choices.com/provider/${p.slug}/` },
  };
}

// 「同じ都道府県の他の店舗」は住所順で前後3店ずつ(=同じ市区町村・隣接する市区町村の店舗)を出す。
// 以前は県内の先頭6店を全店舗ページで固定表示していたため、同じ6店にしかリンクが集まらず、
// 県ページ(または市ページ)に載らない店舗がブランド一覧からしか辿れなかった。
const byPrefSorted: Record<string, Provider[]> = {};
for (const x of list) (byPrefSorted[x.pref] ||= []).push(x);
for (const k of Object.keys(byPrefSorted)) {
  byPrefSorted[k].sort((a, b) => {
    const aa = a.address ?? "";
    const bb = b.address ?? "";
    return aa < bb ? -1 : aa > bb ? 1 : a.slug < b.slug ? -1 : 1;
  });
}

function nearbyProviders(p: Provider): Provider[] {
  const arr = byPrefSorted[p.pref] ?? [];
  const i = arr.findIndex((x) => x.slug === p.slug);
  if (i < 0) return [];
  const n = arr.length;
  const picked: Provider[] = [];
  for (const d of [-3, -2, -1, 1, 2, 3]) {
    const x = arr[(((i + d) % n) + n) % n];
    if (x.slug !== p.slug && !picked.includes(x)) picked.push(x);
  }
  return picked;
}

// 同じ都道府県に同名の店舗が複数ある場合(公式サイトに別ページとして掲載)は、
// 出典である公式店舗ページの番号でtitleを区別する。
const nameCount: Record<string, number> = {};
for (const x of list) nameCount[`${x.pref}|${x.name}`] = (nameCount[`${x.pref}|${x.name}`] || 0) + 1;
function titleQualifier(p: Provider): string {
  if (nameCount[`${p.pref}|${p.name}`] < 2) return p.pref_ja;
  const m = p.source_url.match(/(\d+)\/?$/);
  return m ? `${p.pref_ja}・公式店舗ページ番号${m[1]}` : p.pref_ja;
}

export default async function ProviderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = list.find((x) => x.slug === slug);
  if (!p) return null;
  const nearby = nearbyProviders(p);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: p.name,
    address: { "@type": "PostalAddress", addressRegion: p.pref_ja, streetAddress: p.address ?? undefined, postalCode: p.zip ?? undefined },
    telephone: p.tel ?? undefined,
    url: `https://cleaning-choices.com/provider/${p.slug}/`,
    sameAs: p.source_url,
    parentOrganization: { "@type": "Organization", name: p.brand_name },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://cleaning-choices.com/" },
      { "@type": "ListItem", position: 2, name: `${p.pref_ja}のハウスクリーニング`, item: `https://cleaning-choices.com${areaHref(p.pref)}` },
      { "@type": "ListItem", position: 3, name: p.name, item: `https://cleaning-choices.com/provider/${p.slug}/` },
    ],
  };

  const rows: [string, string | null | undefined][] = [
    ["ブランド", p.brand_name],
    ["拠点・所在地", p.address],
    ["郵便番号", p.zip],
    ["電話番号", p.tel],
    ["営業時間", p.hours],
    ["定休日", p.holiday],
    ["適格請求書発行事業者番号", p.invoice_number],
  ];

  return (
    <main className="container mx-auto px-4 py-10 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav className="breadcrumbs mb-6" aria-label="パンくず">
        <ol>
          <li><a href="/">ホーム</a></li>
          <li><a href={areaHref(p.pref)}>{p.pref_ja}</a></li>
          <li>{p.name}</li>
        </ol>
      </nav>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <a href={`/brand/${{"honpo":"osoujihonpo","duskin":"duskin","kakumei":"osoujikakumei"}[p.brand] ?? ""}/`} className="badge badge-primary">{p.brand_name}の店舗一覧</a>
        <span className="badge badge-outline">{p.pref_ja}</span>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-ink mb-3">{p.name}</h1>
      <p className="text-sm text-muted mb-8">
        掲載情報は{p.brand_name}公式サイトで確認した内容のみです（{p.verified_at}確認・
        <a href={p.source_url} target="_blank" rel="noopener noreferrer" className="underline text-primary">出典: 公式店舗ページ</a>）。
      </p>

      {typeof p.rating_official === "number" && (
        <div className="alert alert-info mb-6">
          <p>
            公式サイト掲載のレビュー評価: <strong>{p.rating_official.toFixed(2)}</strong>
            {typeof p.review_count_official === "number" && <>（{p.review_count_official}件）</>}
            <span className="text-xs">（{p.brand_name}公式サイト集計・{p.verified_at}時点）</span>
          </p>
        </div>
      )}

      <section className="card mb-8">
        <div className="card-body">
          <h2 className="card-title">店舗情報</h2>
          <table className="table">
            <tbody>
              {rows.filter(([, v]) => v).map(([k, v]) => (
                <tr key={k}>
                  <th className="w-48">{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted mt-3">
            最新の営業状況・料金は必ず公式サイト・店舗にご確認ください。掲載内容の訂正は
            <a href="/contact/" className="underline text-primary">お問い合わせ</a>から受け付けています。
          </p>
        </div>
      </section>

      {p.charge_region && p.charge_region.length > 0 && (
        <section className="card mb-8">
          <div className="card-body">
            <h2 className="card-title">対応エリア（公式サイト記載）</h2>
            <div className="flex flex-wrap gap-2">
              {p.charge_region.map((c) => (
                <span key={c} className="badge badge-outline">{c}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.services && p.services.length > 0 && (
        <section className="card mb-8">
          <div className="card-body">
            <h2 className="card-title">対応・特徴（公式サイト記載）</h2>
            <div className="flex flex-wrap gap-2">
              {p.services.map((s) => (
                <span key={s} className="badge">{s}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.brand === "kakumei" && <KakumeiAffiliateCTA variant="text2" />}

      <section className="card mb-8">
        <div className="card-body">
          <h2 className="card-title">依頼前のチェックポイント</h2>
          <ul className="space-y-2 text-sm text-ink-soft">
            <li>・料金は作業範囲・汚れの状態で変わるため、見積りで総額と追加料金の条件を確認しましょう</li>
            <li>・1社即決を避け、2〜3社の相見積もりが基本です（<a href="/ranking/" className="underline text-primary">比較ランキング</a>・<a href={areaHref(p.pref)} className="underline text-primary">{p.pref_ja}の業者一覧</a>）</li>
            <li>・損害保険の加入有無・作業後の保証条件は事前に確認を</li>
          </ul>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-ink mb-4">{p.pref_ja}の他の店舗</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {nearby.map((n) => (
              <a key={n.slug} href={`/provider/${n.slug}/`} className="card p-4 block">
                <p className="text-sm font-bold text-ink">{n.name}</p>
                <p className="text-xs text-muted mt-1">{n.address ?? n.pref_ja}</p>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
