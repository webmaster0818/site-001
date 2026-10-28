import { PartnerShot, StoreBrandShot } from "../../components/CompanyShot";
import type { Metadata } from "next";
import providers from "../../data/providers.json";
import KakumeiAffiliateCTA from "../../components/KakumeiAffiliateCTA";
import { prefPageHref } from "../../components/areaIndexData";
import { withPageSocial } from "../../siteOpenGraph";
import { BRAND_PRICES, BRAND_PRICE_CHECKED } from "../../data/brandPrices";

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
  rating_checked_at?: string;
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
      "全国1,765店舗（2023年9月現在）を展開し、公式に「店舗数業界No.1」（2026年4月期・日本マーケティングリサーチ機構の調査）と記載するハウスクリーニングチェーン。特許取得の「ファインバブルエアコンクリーニング」で、微細な泡で奥のカビ・汚れまで除去します。",
    features: ["全国1,765店舗（2023年9月現在）", "特許取得のファインバブル洗浄", "責任保険に加入（補償期間は作業後30日間）", "Web予約に対応"],
  },
  duskin: {
    name: "ダスキン サービスマスター",
    description:
      "株式会社ダスキン（1963年設立）が1971年から展開するサービスマスター事業。全国1,222拠点（2026年3月末現在）で展開し、浴室クリーニングをはじめとする各種ハウスクリーニングを提供しています。",
    features: ["1971年からサービスマスター事業を展開", "全国1,222拠点（2026年3月末現在）", "損害賠償責任保険に加入", "定期サービスも対応"],
  },
  osoujikakumei: {
    name: "おそうじ革命",
    description:
      "株式会社KIREI produceが本部を務めるフランチャイズ型のハウスクリーニングブランド。2ヶ月間の初期研修（イールシステム）を受けたスタッフが対応し、表示価格は消費税・出張費込みで当日の追加料金なしを公式に明記しています。",
    features: ["2ヶ月間の初期研修", "当日の追加料金なし", "無料再作業の品質保証", "全加盟店が賠償責任保険に加入"],
  },
};

// 2026-10-26: 「おそうじ本舗」「おそうじ本舗 店舗一覧」の検索で店舗ページからこのハブに表示が移ったが、順位が下がった（店舗ページ5〜9位→ハブ23.6位）。
// 検索した人が最初に知りたい「店舗の探し方・料金・追加料金・保険」をページ冒頭に置く（本舗・ダスキンのみ。おそうじ革命は対象外）。
// 値はすべて当日または直近に公式で確認したもの（確認日を併記）。
const BRAND_GUIDE: Record<
  string,
  {
    officialName: string;
    officialStoreUrl: string;
    officialStoreLabel: string;
    faq: { q: string; a: string; src: string; checked: string }[];
  }
> = {
  osoujihonpo: {
    officialName: "おそうじ本舗（正式表記はひらがなの「おそうじ」。「お掃除本舗」と検索されることもあります）",
    officialStoreUrl: "https://www.osoujihonpo.com/shop/",
    officialStoreLabel: "おそうじ本舗公式の店舗一覧（店名・地域名から検索）",
    faq: [
      {
        q: "おそうじ本舗の料金はいくらですか？",
        a: "公式サイトの通常価格（税込）は、エアコン（壁掛け・お掃除機能なし）13,200円／台、キッチン・浴室・レンジフードが各18,700円／式、トイレ9,900円／式です。期間限定のキャンペーン価格が別に表示されることがあります。",
        src: "https://www.osoujihonpo.com/house-cleaning/kitchen/kitchen/",
        checked: "2026-10-26",
      },
      {
        q: "追加料金がかかるのはどんな場合ですか？",
        a: "公式サイトの各サービスページには、特殊な汚れ・強い汚れ・追加範囲は0.5㎡ごとに3,300円（税込）の追加費用がかかると記載されています。オプション（コーティング等）も別料金です。見積もりの際に総額をご確認ください。",
        src: "https://www.osoujihonpo.com/house-cleaning/water/bathroom/",
        checked: "2026-10-26",
      },
      {
        q: "近くの店舗はどう探せばよいですか？",
        a: "このページの「都道府県から探す」で都道府県を選ぶと、当サイトが公式サイトで所在を確認した店舗の一覧に移動します。各店舗ページに所在地・営業時間・対応エリアと公式店舗ページへのリンクがあります。公式サイトの店舗一覧でも店名・地域名から検索できます（公式は「全国47都道府県に対応」と記載）。",
        src: "https://www.osoujihonpo.com/shop/",
        checked: "2026-10-26",
      },
      {
        q: "作業中の事故に備えた保険はありますか？",
        a: "公式のよくある質問に「万一に備えて責任保険に加入しております」「補償期間は作業後30日間です」と記載されています。",
        src: "https://www.osoujihonpo.com/house-cleaning/faq/service/",
        checked: "2026-10-26",
      },
      // 2026-10-28: 「おそうじ本舗」の検索で知りたいことのうち、問い合わせ先がページに無かったため追加（公式店舗ページの記載）
      {
        q: "おそうじ本舗の電話番号（問い合わせ先）は？",
        a: "依頼・見積もりは各店舗のフリーダイヤルが窓口です（番号は公式の各店舗ページに記載）。公式の店舗ページには「上記の電話番号へ通話できない場合は、店舗の携帯電話か本部フリーダイヤル（0120-24-1000 ※年末年始を除き平日・土日祝問わず9:00～18:00）へ」と記載されています。",
        src: "https://www.osoujihonpo.com/shop/detail/20047/",
        checked: "2026-10-28",
      },
    ],
  },
  duskin: {
    officialName: "ダスキン サービスマスター（株式会社ダスキンのハウスクリーニング事業）",
    officialStoreUrl: "https://www.duskin.jp/servicemaster/",
    officialStoreLabel: "ダスキン サービスマスター公式サイト",
    faq: [
      {
        q: "ダスキンのハウスクリーニングの料金はいくらですか？",
        a: "公式の標準料金（税込）は、エアコン（家庭用壁掛け・幅120cm未満）15,400円／1台、キッチン（間口3m未満）20,680円、浴室（床面積3m²・高さ2.4m未満）22,000円、トイレ（床面積2m²未満）10,340円です。",
        src: "https://www.duskin.jp/servicemaster/water/sm000080/",
        checked: "2026-10-26",
      },
      {
        q: "最低料金や追加費用はありますか？",
        a: "公式サイトには「サービスは1回あたり11,000円（税込）以上で承ります（加盟店によって異なる場合があります）」「土日・祝日・その他の休業日及び夜間の作業は、お受けできない場合や標準料金に加えて追加の費用が発生する場合があります」と記載されています。",
        src: "https://www.duskin.jp/servicemaster/water/sm000100/",
        checked: "2026-10-26",
      },
      {
        q: "仕上がりに満足できなかった場合はどうなりますか？",
        a: "公式の「満足の保証」では、品質が充分でなかった場合はやり直しに対応すると記載されています（サービス実施日を含む3日以内・土日祝を除く）。",
        src: "https://www.duskin.jp/manzoku/servicemaster/",
        checked: "2026-10-25",
      },
      {
        q: "作業中の事故に備えた保険はありますか？",
        a: "公式のよくある質問に「万一の場合に備えて損害賠償責任保険に加入」と記載されています。",
        src: "https://www.duskin.jp/faq/detail.aspx?id=634",
        checked: "2026-10-25",
      },
    ],
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
  const hasGuide = Boolean(BRAND_GUIDE[brand]);
  return withPageSocial({
    title: hasGuide
      ? `${b.name}の店舗一覧（全国${stores.length.toLocaleString("ja-JP")}店舗）・料金・対応エリア｜クリーンナビ`
      : `${b.name}の店舗一覧・対応エリア検索（全国${stores.length}店舗）｜クリーンナビ`,
    description: `${b.name}の全国${stores.length}店舗を都道府県別に検索できます。公式サイトで所在を確認した店舗のみを対象に、所在地・対応エリア・公式評価を確認日を明記して掲載しています。`,
    alternates: { canonical: `https://cleaning-choices.com/brand/${brand}/` },
  });
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
  // 2026-10-09: Organization→Brand。サイト運営者のOrganization(layout)と同じ頁に2個目のOrganizationが出ていたため
  const org = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: b.name,
    description: b.description,
    url: `https://cleaning-choices.com/brand/${brand}/`,
  };
  const guide = BRAND_GUIDE[brand];
  const prices = BRAND_PRICES[BRAND_KEY[brand]];
  const prefsShown = PREF_ORDER.filter((pref) => byPref.has(pref));
  // 2026-10-28: 「おそうじ本舗 口コミ／評判」向けに、公式店舗ページのクチコミ評価の集計（当サイトが公式で確認した値の件数のみ。独自評価ではない）をFAQに足す
  const faqs = guide ? [...guide.faq] : [];
  if (brand === "osoujihonpo") {
    const withRating = stores.filter((s) => typeof s.rating_official === "number");
    const high = withRating.filter((s) => s.rating_official! >= 4.5).length;
    const reviews = withRating.reduce((n, s) => n + (s.review_count_official ?? 0), 0);
    const checked = Array.from(new Set(stores.map((s) => s.rating_checked_at).filter(Boolean) as string[])).sort();
    const checkedLabel = checked.length > 1 ? `${checked[0]}〜${checked[checked.length - 1]}` : (checked[0] ?? "");
    faqs.push({
      q: "おそうじ本舗の口コミ・評判はどこで確認できますか？",
      a: `公式サイトの各店舗ページに、利用者のクチコミ（5段階評価と件数）が店舗ごとに掲載されています。当サイトが公式で確認した時点（${checkedLabel}）では、全${stores.length.toLocaleString("ja-JP")}店のうち評価が表示されている店舗は${withRating.length.toLocaleString("ja-JP")}店（クチコミ合計${reviews.toLocaleString("ja-JP")}件）、そのうち評価4.5以上は${high.toLocaleString("ja-JP")}店でした。評価は店舗ごとに違うため、依頼する店舗のページでご確認ください（このページの「公式サイト評価の高い店舗」は公式の値を並べたもので、当サイト独自の評価ではありません）。`,
      src: "https://www.osoujihonpo.com/shop/",
      checked: checkedLabel,
    });
  }
  const faqLd = guide
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-content py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{b.name}の店舗一覧{guide ? "・料金・特徴" : "・特徴"}</h1>
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

      {guide && prices && (
        <section className="container mx-auto px-4 pt-8 max-w-4xl" aria-label="要点">
          <div className="card p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-ink mb-3">{b.name}の要点（店舗数・料金・探し方）</h2>
            <ul className="text-sm text-ink-soft leading-relaxed space-y-2 mb-4">
              <li>・名称: {guide.officialName}</li>
              <li>
                ・当サイト掲載の店舗: <strong>全国{stores.length.toLocaleString("ja-JP")}店舗・{prefsShown.length}都道府県</strong>（公式サイトで所在を確認した店舗のみ）。
                <a href="#pref-index" className="underline text-primary">都道府県から探す</a>
              </li>
              <li>
                ・公式の店舗検索:{" "}
                <a href={guide.officialStoreUrl} target="_blank" rel="noopener noreferrer" className="underline text-primary">{guide.officialStoreLabel}</a>
              </li>
            </ul>
            <h3 className="font-bold text-ink mb-2">{b.name}の標準料金（公式サイト記載・税込）</h3>
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
              <li>・{BRAND_PRICE_CHECKED}に{b.name}公式サイトで確認したブランド共通の料金です。店舗ごとの料金は見積もりでご確認ください。</li>
              {prices.notes.map((n) => (
                <li key={n}>・{n}</li>
              ))}
            </ul>
          </div>
          <nav id="pref-index" className="mt-6" aria-label="都道府県から探す">
            <h2 className="text-lg font-bold text-ink mb-2">都道府県から{b.name}の店舗を探す</h2>
            <ul className="flex flex-wrap gap-2">
              {prefsShown.map((pref) => {
                const ps = byPref.get(pref)!;
                return (
                  <li key={pref}>
                    <a href={`#pref-${pref}`} className="badge badge-outline">
                      {ps[0].pref_ja}（{ps.length}）
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>
      )}

      <section className="container mx-auto px-4 py-8 max-w-4xl">
        <PartnerShot slug={brand} name={b.name} />
        <div className="card p-6">
          <h2 className="text-xl font-bold text-ink mb-3">{b.name}とは</h2>
          <p className="text-sm text-ink-soft leading-relaxed mb-4">{b.description}</p>
          <div className="flex flex-wrap gap-2">
            {b.features.map((f) => (
              <span key={f} className="badge badge-outline">{f}</span>
            ))}
          </div>
          <p className="text-xs text-muted mt-4">
            掲載店舗は{b.name}公式サイトで所在を確認した店舗のみです（各店舗ページに出典・確認日を記載しています）。最新の営業状況・料金は、ご利用前に公式サイトまたは店舗にてご確認ください。
          </p>
        </div>
        {brand === "osoujikakumei" && (
          <p className="text-sm mt-4">
            料金・保証・キャンセル規定は
            <a href="/review/osoujikakumei/" className="text-primary underline decoration-primary/30 underline-offset-2 font-bold">おそうじ革命の口コミ・評判を公式情報で検証したページ</a>
            にまとめています。
          </p>
        )}
        {brand === "osoujikakumei" && <KakumeiAffiliateCTA variant="text1" banner />}
      </section>

      {rated.length > 0 && (
        <section className="container mx-auto px-4 pb-8 max-w-4xl">
          <h2 className="text-xl font-bold text-ink mb-2">公式サイト評価の高い{b.name}の店舗</h2>
          <p className="text-xs text-muted mb-4">公式サイト掲載のレビュー集計（50件以上）を評価順に表示しています。当サイトが独自に集計した評価ではありません。</p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {rated.map((s) => (
              <a key={s.slug} href={`/provider/${s.slug}/`} className="card p-4 block">
               <div className="cn-store-row">
                <StoreBrandShot brand={s.brand} name={b.name} compact />
                <div>
                <p className="text-sm font-bold text-ink">{s.name}</p>
                <p className="text-xs text-muted mt-1">{s.pref_ja}</p>
                <p className="text-xs text-primary mt-1">
                  公式評価 {s.rating_official!.toFixed(2)}（{s.review_count_official}件）
                </p>
                </div>
               </div>
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
              <div key={pref} id={`pref-${pref}`}>
                <h3 className="font-bold text-ink-soft mb-2">
                  <a href={prefPageHref(ps[0].pref_ja)} className="hover:text-primary">{ps[0].pref_ja}</a>
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
        {guide && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-ink mb-4">{b.name}についてよくある質問</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="card p-5">
                  <h3 className="font-bold text-ink mb-2">{f.q}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{f.a}</p>
                  <p className="text-xs text-muted mt-2">
                    出典: <a href={f.src} target="_blank" rel="noopener noreferrer" className="underline text-primary">{b.name}公式サイト</a>（{f.checked}確認）
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="alert alert-info mt-8">
          <p className="text-sm">
            ご依頼の前には、2〜3社から相見積もりを取ることをおすすめします。他ブランドとの比較は
            <a href="/ranking/" className="underline text-primary">比較ランキング</a>・お住まいの地域の全店舗は
            <a href="/areas/" className="underline text-primary">地域から探す</a>をご覧ください。
          </p>
        </div>
      </section>
    </main>
  );
}
