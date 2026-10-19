import { StoreBrandShot } from "../../components/CompanyShot";
import type { Metadata } from "next";
import providers from "../../data/providers.json";
// CTR実験(2026-09-11開始): GSC表示上位50店のみtitle/descに比較フックを追加。2週間で判定→全展開or撤収
import KakumeiAffiliateCTA from "../../components/KakumeiAffiliateCTA";
import { prefPageHref } from "../../components/areaIndexData";

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
  rating_official?: number | null;
  review_count_official?: number;
  source_url: string;
  verified_at: string;
  rating_checked_at?: string;
};

const list = providers as Provider[];

// D2で47都道府県ページが全て揃ったため、常に県ページへ直リンク。
// slugは providers.pref ではなく PREF_PAGES から引く(岐阜など12県は市ページが県名slugを使っていて県ページは gifu-ken)
function areaHref(prefJa: string): string {
  return prefPageHref(prefJa);
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
    title: `${p.name}（${titleQualifier(p)}）の店舗情報・${BRAND_PRICES[p.brand] ? "料金・" : ""}対応エリア`,
    description: `${p.name}の店舗情報です。${p.address ?? p.pref_ja}を拠点とする${p.brand_name}の加盟店で、対応エリア・営業時間など、公式サイトで確認した情報のみを確認日を明記して掲載しています。`,
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

// 2026-10-19: 公式店舗ページのtitleは「店舗名（県＋市区町村）」（例 おそうじ本舗 名護大北店（沖縄県名護市））。
// うちは県名止まりだったため、住所から市区町村（政令市は区まで・郡部は郡＋町村）を取り出して title と本文に出す。
// 「四日市市」「十日町市」「蒲郡市」等、名前の途中に市・町・村・郡を含む自治体は先に照合する。
const CITY_SPECIAL = ["四日市市", "廿日市市", "野々市市", "十日町市", "大町市", "東村山市", "武蔵村山市", "大村市", "田村市", "羽村市", "蒲郡市", "上市町", "市川三郷町", "市貝町", "佐波郡玉村町"];
const DESIGNATED = ["札幌市", "仙台市", "さいたま市", "千葉市", "横浜市", "川崎市", "相模原市", "新潟市", "静岡市", "浜松市", "名古屋市", "京都市", "大阪市", "堺市", "神戸市", "岡山市", "広島市", "北九州市", "福岡市", "熊本市"];
function cityOf(p: Provider): string | null {
  const a = p.address ?? "";
  if (!a.startsWith(p.pref_ja)) return null;
  const r = a.slice(p.pref_ja.length);
  let base = CITY_SPECIAL.find((c) => r.startsWith(c)) ?? null;
  if (!base) {
    const m = r.match(/^([^市区町村郡]+?郡)?(.+?[市区町村])/);
    if (!m) return null;
    base = (m[1] ?? "") + m[2];
  }
  if (DESIGNATED.includes(base)) {
    const w = r.slice(base.length).match(/^(.{1,3}?区)/);
    if (w) base += w[1];
  }
  return base;
}
function placeLabel(p: Provider): string {
  const c = cityOf(p);
  return c ? `${p.pref_ja}${c}` : p.pref_ja;
}

// 2026-10-19: ブランド公式の標準料金（各ブランド公式のサービスページを当日開いて確認した税込の通常価格。キャンペーン価格は載せない）。
// 店舗ごとの料金は公式店舗ページに記載がないため、ブランド共通の標準料金として出典・確認日とともに出す。
const BRAND_PRICE_CHECKED = "2026-10-19";
const BRAND_PRICES: Record<string, { rows: [string, string, string][]; notes: string[] }> = {
  honpo: {
    rows: [
      ["エアコン（壁掛け・お掃除機能なし）", "13,200円／台", "https://www.osoujihonpo.com/house-cleaning/aircon/wall/"],
      ["エアコン（壁掛け・お掃除機能付き）", "23,100円／台", "https://www.osoujihonpo.com/house-cleaning/aircon/wall/"],
      ["レンジフード・換気扇", "18,700円／式", "https://www.osoujihonpo.com/house-cleaning/kitchen/fan/"],
      ["キッチン", "18,700円／式", "https://www.osoujihonpo.com/house-cleaning/kitchen/kitchen/"],
      ["風呂・浴室", "18,700円／式", "https://www.osoujihonpo.com/house-cleaning/water/bathroom/"],
      ["トイレ", "9,900円／式", "https://www.osoujihonpo.com/house-cleaning/water/toilet/"],
    ],
    notes: [
      "公式サイトの通常価格（税込）です。期間限定のキャンペーン価格は掲載していません。",
      "公式サイトには「サービス内容と価格は予告無く変更する場合がございます」と記載されています。強い汚れ・追加範囲・オプションは別料金です。",
    ],
  },
  duskin: {
    rows: [
      ["エアコン（家庭用壁掛け・幅120cm未満）", "15,400円／1台", "https://www.duskin.jp/servicemaster/spot/sm000010/"],
      ["エアコン（フィルター自動お掃除機能付き）", "26,400円／1台", "https://www.duskin.jp/servicemaster/spot/sm000010/"],
      ["レンジフード（幅95cm未満）", "22,000円", "https://www.duskin.jp/servicemaster/water/sm000070/"],
      ["浴室（床面積3m²・高さ2.4m未満）", "22,000円", "https://www.duskin.jp/servicemaster/water/sm000090/"],
      ["トイレ（床面積2m²未満）", "10,340円", "https://www.duskin.jp/servicemaster/water/sm000100/"],
      ["縦型全自動洗濯機 除菌クリーニング", "15,400円", "https://www.duskin.jp/servicemaster/water/sm000170/"],
    ],
    notes: [
      "ダスキン公式の標準料金（税込）です。店舗ページにも同じ標準料金が掲載されています。",
      "公式サイトには「土日・祝日・その他の休業日及び夜間の作業は、お受けできない場合や標準料金に加えて追加の費用が発生する場合があります」「サービスは1回あたり11,000円（税込）以上で承ります。この料金は加盟店によって異なる場合があります」と記載されています。",
    ],
  },
};

// 同じ都道府県に同名の店舗が複数ある場合(公式サイトに別ページとして掲載)は、
// 出典である公式店舗ページの番号でtitleを区別する。
const nameCount: Record<string, number> = {};
for (const x of list) nameCount[`${x.pref}|${x.name}`] = (nameCount[`${x.pref}|${x.name}`] || 0) + 1;
function titleQualifier(p: Provider): string {
  if (nameCount[`${p.pref}|${p.name}`] < 2) return placeLabel(p);
  const m = p.source_url.match(/(\d+)\/?$/);
  return m ? `${placeLabel(p)}・公式店舗ページ番号${m[1]}` : placeLabel(p);
}

export default async function ProviderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = list.find((x) => x.slug === slug);
  if (!p) return null;
  const nearby = nearbyProviders(p);
  const city = cityOf(p);
  const prices = BRAND_PRICES[p.brand];
  const mapHref = p.address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.address)}` : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: p.name,
    address: { "@type": "PostalAddress", addressRegion: p.pref_ja, streetAddress: p.address ?? undefined, postalCode: p.zip ?? undefined },
    telephone: p.tel ?? undefined,
    url: `https://cleaning-choices.com/provider/${p.slug}/`,
    sameAs: p.source_url,
    // 2026-10-09: parentOrganization(Organization)→brand(Brand)。layoutのサイトOrganizationと重複して1頁にOrganizationが2個出ていたため
    brand: { "@type": "Brand", name: p.brand_name },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://cleaning-choices.com/" },
      { "@type": "ListItem", position: 2, name: `${p.pref_ja}のハウスクリーニング`, item: `https://cleaning-choices.com${areaHref(p.pref_ja)}` },
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
          <li><a href={areaHref(p.pref_ja)}>{p.pref_ja}</a></li>
          <li>{p.name}</li>
        </ol>
      </nav>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <a href={`/brand/${{"honpo":"osoujihonpo","duskin":"duskin","kakumei":"osoujikakumei"}[p.brand] ?? ""}/`} className="badge badge-primary">{p.brand_name}の店舗一覧</a>
        <span className="badge badge-outline">{p.pref_ja}</span>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-ink mb-3">{p.name}</h1>
      <p className="text-ink-soft mb-2">
        {p.name}は、{placeLabel(p)}{city ? "を拠点とする" : "の"}{p.brand_name}の店舗です。
        {mapHref && (
          <>
            {" "}
            <a href={mapHref} target="_blank" rel="noopener noreferrer" className="underline text-primary text-sm">地図で見る（Googleマップ）</a>
          </>
        )}
      </p>
      <p className="text-sm text-muted mb-8">
        掲載情報は{p.brand_name}公式サイトで確認した内容のみです（{p.verified_at}確認・
        <a href={p.source_url} target="_blank" rel="noopener noreferrer" className="underline text-primary">出典: 公式店舗ページ</a>）。
      </p>

      <StoreBrandShot brand={p.brand} name={p.brand_name} />
      {typeof p.rating_official !== "number" && p.brand === "honpo" && typeof p.review_count_official === "number" && p.review_count_official > 0 && (
        <div className="alert alert-info mb-6">
          <p>
            公式サイト掲載のクチコミ: <strong>{p.review_count_official}件</strong>（評価点の表示なし）
            <span className="text-xs">（{p.brand_name}公式店舗ページ・{p.rating_checked_at ?? p.verified_at}時点。<a href={`${p.source_url}#shop-review`} target="_blank" rel="noopener noreferrer" className="underline">クチコミを公式で読む</a>）</span>
          </p>
        </div>
      )}
      {p.brand === "duskin" && (
        <p className="text-xs text-muted mb-6">
          ダスキン公式サイトの店舗ページには、店舗ごとのクチコミ・レビューは掲載されていません（{BRAND_PRICE_CHECKED}確認）。
        </p>
      )}
      {typeof p.rating_official === "number" && (
        <div className="alert alert-info mb-6">
          <p>
            公式サイト掲載のレビュー評価: <strong>{p.rating_official.toFixed(2)}</strong>
            {typeof p.review_count_official === "number" && <>（{p.review_count_official}件）</>}
            <span className="text-xs">（{p.brand_name}公式サイト集計・{p.rating_checked_at ?? p.verified_at}時点）</span>
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
            最新の営業状況・料金は、ご利用前に公式サイトまたは店舗にてご確認ください。掲載内容の訂正は、
            <a href="/contact/" className="underline text-primary">お問い合わせ</a>にて受け付けています。
          </p>
        </div>
      </section>

      {prices && (
        <section className="card mb-8">
          <div className="card-body">
            <h2 className="card-title">{p.brand_name}の標準料金（公式サイト記載・税込）</h2>
            <table className="table">
              <tbody>
                {prices.rows.map(([k, v, u]) => (
                  <tr key={k}>
                    <th className="w-64">{k}</th>
                    <td>
                      {v}（<a href={u} target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>）
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className="text-xs text-muted mt-3 space-y-1">
              <li>・{BRAND_PRICE_CHECKED}に{p.brand_name}公式サイトで確認したブランド共通の料金です。{p.name}の料金は、見積もりで店舗にご確認ください。</li>
              {prices.notes.map((n) => (
                <li key={n}>・{n}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

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
            <li>・料金は作業範囲・汚れの状態で変わるため、見積もりで総額と追加料金の条件をご確認ください</li>
            <li>・1社だけで決めず、2〜3社から相見積もりを取ることをおすすめします（<a href="/ranking/" className="underline text-primary">比較ランキング</a>・<a href={areaHref(p.pref_ja)} className="underline text-primary">{p.pref_ja}の業者一覧</a>）</li>
            <li>・損害保険の加入の有無と作業後の保証条件は、事前にご確認ください</li>
          </ul>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-ink mb-4">{p.pref_ja}の他の店舗</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {nearby.map((n) => (
              <a key={n.slug} href={`/provider/${n.slug}/`} className="card p-4 block">
               <div className="cn-store-row">
                <StoreBrandShot brand={n.brand} name={n.brand_name} compact />
                <div>
                <p className="text-sm font-bold text-ink">{n.name}</p>
                <p className="text-xs text-muted mt-1">{n.address ?? n.pref_ja}</p>
                </div>
               </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
