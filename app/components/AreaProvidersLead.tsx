import { StoreBrandShot, StoreShotNote } from "./CompanyShot";
import providers from "../data/providers.json";
import areaMap from "../data/areaMap.json";
import { AREA_PRICE_COMPARE, BRAND_PRICE_CHECKED } from "../data/brandPrices";

type Provider = {
  slug: string;
  brand: string;
  brand_name: string;
  name: string;
  pref: string;
  pref_ja: string;
  address: string;
  tel?: string | null;
  hours?: string | null;
  holiday?: string | null;
  charge_region?: string[];
  rating_official?: number;
  review_count_official?: number;
  verified_at: string;
};

type AreaEntry = {
  slug: string;
  kind: "pref" | "city" | "ward";
  label: string;
  pref: string;
  prefSlug: string | null;
  match: string[];
  areaTerms: string[];
  parent: { slug: string; name: string } | null;
  children: { slug: string; name: string }[];
  count: number;
};

const list = providers as Provider[];
const AREA_MAP = areaMap as Record<string, AreaEntry>;

const BRAND_HUB: Record<string, string> = {
  honpo: "/brand/osoujihonpo/",
  duskin: "/brand/duskin/",
  kakumei: "/brand/osoujikakumei/",
};

function sortStores(a: Provider, b: Provider) {
  const ra = a.review_count_official ?? -1;
  const rb = b.review_count_official ?? -1;
  if (rb !== ra) return rb - ra;
  return a.name.localeCompare(b.name, "ja");
}

/**
 * 地域一覧ページのヒーロー直下に置く「実在店舗データベース」ブロック。
 * areaMap.json(scripts/gen-area-map.py生成)の住所マッチ条件で providers.json から決定的に抽出する。
 * - 所在店舗: 住所が市区名を含む店舗(pref種別は都道府県内全店舗)
 * - 対応エリア店舗: 公式の対応エリア(charge_region)に市区名を含む近隣店舗(所在店舗と重複しないもの)
 * - 0件の市区は所在店舗の代わりに対応エリア店舗と上位ページへの導線を出す
 */
// 2026-11-14: /areas/toyama-ken/ の要点だけで使う（公式 /shop/hokuriku/toyama/ の掲載順・店名）
const TOYAMA_HONPO: [string, string][] = [
  ["honpo-21147", "小矢部氷見店"],
  ["honpo-18340", "富山本郷店"],
  ["honpo-20965", "射水西店"],
  ["honpo-20753", "富山婦中店"],
  ["honpo-17203", "となみ店"],
  ["honpo-15121", "富山駅前店"],
  ["honpo-12039", "黒部店"],
  ["honpo-20622", "富山山室店"],
  ["honpo-21079", "富山呉羽店"],
  ["honpo-15504", "魚津滑川店"],
  ["honpo-15120", "射水店"],
  ["honpo-18921", "新高岡店"],
];

export default function AreaProvidersLead({ slug, breadcrumbLd = true }: { slug: string; breadcrumbLd?: boolean }) {
  const area = AREA_MAP[slug];
  if (!area) return null;

  // パンくず(構造化データ)。このブロック下部に実際に表示している上位ページ(都道府県・市)だけを階層に入れる。
  // prefSlug が市ページと同名(例: kumamoto=熊本市)の県は都道府県ページが無いので階層に入れない。
  const ORIGIN = "https://cleaning-choices.com";
  const crumbs: { name: string; item: string }[] = [{ name: "ホーム", item: `${ORIGIN}/` }];
  if (area.kind !== "pref" && area.prefSlug && AREA_MAP[area.prefSlug]?.kind === "pref") {
    crumbs.push({ name: area.pref, item: `${ORIGIN}/areas/${area.prefSlug}/` });
  }
  if (area.parent) crumbs.push({ name: area.parent.name, item: `${ORIGIN}/areas/${area.parent.slug}/` });
  crumbs.push({ name: area.label, item: `${ORIGIN}/areas/${area.slug}/` });
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.item })),
  };

  const located = (
    area.kind === "pref"
      ? list.filter((p) => p.pref_ja === area.pref)
      : list.filter((p) => p.pref_ja === area.pref && area.match.some((m) => p.address.includes(m)))
  ).sort(sortStores);
  const locatedSlugs = new Set(located.map((p) => p.slug));
  const covering =
    area.kind === "pref"
      ? []
      : list
          .filter(
            (p) =>
              !locatedSlugs.has(p.slug) &&
              Array.isArray(p.charge_region) &&
              p.charge_region.some((c) => area.areaTerms.includes(c)),
          )
          .sort((a, b) => {
            // 同一都道府県の店舗を先に、次に名前順
            const sa = a.pref_ja === area.pref ? 0 : 1;
            const sb = b.pref_ja === area.pref ? 0 : 1;
            return sa !== sb ? sa - sb : a.name.localeCompare(b.name, "ja");
          });
  const COVERING_LIMIT = 12;
  const coveringShown = covering.slice(0, COVERING_LIMIT);

  const byBrand: Record<string, number> = {};
  for (const p of located) byBrand[p.brand_name] = (byBrand[p.brand_name] || 0) + 1;
  const verifiedDates = Array.from(new Set(located.concat(covering).map((p) => p.verified_at))).sort();
  const verifiedLabel =
    verifiedDates.length === 0
      ? ""
      : verifiedDates.length === 1
        ? verifiedDates[0]
        : `${verifiedDates[0]}〜${verifiedDates[verifiedDates.length - 1]}`;
  const withHours = located.filter((p) => p.hours).length;
  const withTel = located.filter((p) => p.tel).length;

  // 域内0店舗でも近隣の対応店舗を掲載している場合、見出しの「（0店舗）」が中身（近隣N店舗）と食い違うため見出しを変える
  const heading =
    located.length === 0 && covering.length > 0
      ? `${area.label}に対応するハウスクリーニング店舗（近隣${covering.length}店舗）`
      : `${area.label}のハウスクリーニング店舗一覧（${located.length}店舗）`;

  return (
    <section id="stores" className="py-10 bg-white border-b border-gray-100">
      {breadcrumbLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      )}
      <div className="container mx-auto px-4">
        {/* 2026-10-26: 地域名＋ハウスクリーニング（キッチン等）の検索で、店舗数と料金の目安をページ冒頭で答える要点ボックス */}
        <div className="card p-5 mb-8 border border-gray-200" aria-label="要点">
          <h2 className="text-lg font-bold text-ink mb-2">{area.label}のハウスクリーニング 要点</h2>
          <ul className="text-sm text-ink-soft space-y-1 mb-3">
            <li>
              ・{area.label}内に所在する店舗: <strong>{located.length}店</strong>
              {located.length > 0 && (
                <>（{Object.entries(byBrand).map(([b, n]) => `${b} ${n}店`).join("・")}）</>
              )}
              {covering.length > 0 && <>／{area.label}を対応エリアに含む近隣店舗: <strong>{covering.length}店</strong></>}
            </li>
            {/* 2026-11-07: 「アズマのホームクリーニング 店舗」11@6.0c3 が新潟県に着地。答えの節（#azuma）が52店の一覧の後ろにあるので要点で先に答える。この1頁だけ */}
            {area.slug === "niigata" && (
              <li>
                ・「アズマのホームクリーニング」の店舗を探している方へ: 公式のフランチャイズ一覧（12店）に新潟県内の店舗はありません。新潟県は佐渡市・粟島浦村を除き対応エリアで、申し込みは公式の注文フォームか電話 0120-120-083（平日 9:00〜17:00）です（
                <a href="#azuma" className="underline text-primary">詳細と出典</a>・2026-11-07 公式確認）。
              </li>
            )}
            {/* 2026-11-04: 「おそうじ本舗」単語が富山県ページに着地（表示11・9.3位）。この1頁だけハブへの導線 */}
            {area.slug === "toyama-ken" && (
              <li>
                ・「おそうじ本舗」で探している方へ: 富山県内は{byBrand["おそうじ本舗"] ?? 0}店（下の一覧）。全国の店舗・本部の電話・よくある質問は
                <a href="/brand/osoujihonpo/" className="underline text-primary">おそうじ本舗の店舗一覧</a>にまとめています。
              </li>
            )}
            {/* 2026-11-14: 同上。県内の本舗の店舗ページへの導線が一覧の中だけだった → 公式の富山県一覧（2026-11-14 確認）にある12店を要点で直接リンク */}
            {area.slug === "toyama-ken" && (
              <li>
                ・富山県のおそうじ本舗（公式の富山県の店舗一覧にある12店・2026-11-14確認）:{" "}
                {TOYAMA_HONPO.map(([slug, label], i) => (
                  <span key={slug}>
                    {i > 0 && "・"}
                    <a href={`/provider/${slug}/`} className="underline text-primary">{label}</a>
                  </span>
                ))}
                。当サイト掲載の富山新庄店は、公式の店舗ページが表示されず（404）公式の富山県一覧にも載っていません（
                <a href="https://www.osoujihonpo.com/shop/hokuriku/toyama/" target="_blank" rel="noopener noreferrer" className="underline text-primary">公式 富山県の店舗一覧</a>）。
              </li>
            )}
            {/* 2026-11-05: 「おそうじ本舗」単語が広島県ページに着地（表示7・10.0位）。この1頁だけハブへの導線 */}
            {area.slug === "hiroshima-ken" && (
              <li>
                ・「おそうじ本舗」で探している方へ: 広島県内は{byBrand["おそうじ本舗"] ?? 0}店（下の一覧）。全国の店舗・本部の電話・よくある質問は
                <a href="/brand/osoujihonpo/" className="underline text-primary">おそうじ本舗の店舗一覧</a>にまとめています。
              </li>
            )}
            {/* 2026-11-11 16:00: /areas/yokohama/ は区別ページへの導線が103店の一覧の後ろだけだった。要点で区ごとの店舗数と区別ページへ先に案内する。この1頁だけ */}
            {area.slug === "yokohama" && area.children.length > 0 && (
              <li>
                ・区ごとの掲載店数（所在地ベース・クリックで区別の店舗一覧へ）:{" "}
                {area.children.map((c, i) => (
                  <span key={c.slug}>
                    {i > 0 && "・"}
                    <a href={`/areas/${c.slug}/`} className="underline text-primary">{c.name.replace(area.label, "")}</a>
                    {" "}{AREA_MAP[c.slug]?.count ?? 0}店
                  </span>
                ))}
              </li>
            )}
            <li>・大手2ブランドの標準料金（公式サイト記載・税込・{BRAND_PRICE_CHECKED}確認）は下の表のとおりです。地域による違いは見積もりでご確認ください。</li>
          </ul>
          <div className="overflow-x-auto">
            <table className="table text-sm">
              <thead>
                <tr>
                  <th>箇所</th>
                  <th>おそうじ本舗</th>
                  <th>ダスキン サービスマスター</th>
                </tr>
              </thead>
              <tbody>
                {AREA_PRICE_COMPARE.map((r) => (
                  <tr key={r.label}>
                    <th>{r.service ? <a href={r.service} className="underline text-primary">{r.label}</a> : r.label}</th>
                    <td>
                      {r.honpo[1]}（<a href={r.honpo[2]} target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>）
                    </td>
                    <td>
                      {r.duskin[1]}（<a href={r.duskin[2]} target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>）
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-2">期間限定のキャンペーン価格は含みません。強い汚れ・追加範囲・オプション・土日祝や夜間の作業は追加料金になる場合があります。他社も含めた料金の比較は<a href="/price/" className="underline text-primary">料金相場</a>をご覧ください。</p>
        </div>
        {/* 2026-11-07: 「おそうじ本舗 北区」8@9.9。区内の本舗3店の連絡先を要点の直後で答える。この1頁だけ */}
        {area.slug === "nagoya-kita" && (
          <div className="card p-5 mb-8 border border-gray-200" aria-label="名古屋市北区のおそうじ本舗">
            <h2 className="text-lg font-bold text-ink mb-2">名古屋市北区のおそうじ本舗（3店・公式 2026-11-07 確認）</h2>
            <div className="overflow-x-auto">
              <table className="table text-sm">
                <thead>
                  <tr>
                    <th>店舗</th>
                    <th>活動拠点</th>
                    <th>電話</th>
                    <th>営業時間・定休日</th>
                    <th>公式のクチコミ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th><a href="/provider/honpo-21099/" className="underline text-primary">大曽根店</a></th>
                    <td>北区大曽根</td>
                    <td>0120-800-445</td>
                    <td>8:00〜19:00・不定休</td>
                    <td>評価 4.77・32件</td>
                  </tr>
                  <tr>
                    <th><a href="/provider/honpo-19386/" className="underline text-primary">中味鋺店</a></th>
                    <td>北区中味鋺</td>
                    <td>0120-63-4028</td>
                    <td>9:00〜19:00・不定休</td>
                    <td>評価 4.89・18件</td>
                  </tr>
                  <tr>
                    <th><a href="/provider/honpo-13808/" className="underline text-primary">黒川店</a></th>
                    <td>北区黒川本通</td>
                    <td>052-508-4732</td>
                    <td>9:00〜20:00・不定休</td>
                    <td>1件（評価点の表示なし）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">
              料金は上の表のブランド共通の標準料金です。クチコミは公式店舗ページの表示で、当サイト独自の評価ではありません。出典:{" "}
              <a href="https://www.osoujihonpo.com/shop/tokai/aichi/23103/" target="_blank" rel="noopener noreferrer" className="underline text-primary">おそうじ本舗 公式の名古屋市北区の店舗一覧</a>
              ・全国の店舗は<a href="/brand/osoujihonpo/" className="underline text-primary">おそうじ本舗の店舗一覧</a>
            </p>
          </div>
        )}
        {/* 2026-11-11 16:00: 「おそうじ本舗 北区」8@9.1 が神戸市北区にも着地。11/7 nagoya-kita と同じ型で区内の本舗の連絡先を要点の直後で答える。この1頁だけ */}
        {area.slug === "kobe-kita" && (
          <div className="card p-5 mb-8 border border-gray-200" aria-label="神戸市北区のおそうじ本舗">
            <h2 className="text-lg font-bold text-ink mb-2">神戸市北区のおそうじ本舗（1店・公式 2026-11-11 確認）</h2>
            <div className="overflow-x-auto">
              <table className="table text-sm">
                <thead>
                  <tr>
                    <th>店舗</th>
                    <th>活動拠点</th>
                    <th>電話</th>
                    <th>営業時間・定休日</th>
                    <th>公式のクチコミ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th><a href="/provider/honpo-20327/" className="underline text-primary">神戸岡場駅前店</a></th>
                    <td>北区唐櫃六甲台</td>
                    <td>0120-79-4033（無料通話）</td>
                    <td>8:00〜17:00・不定休</td>
                    <td>評価 4.5・15件</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">
              公式の神戸市北区の店舗一覧はこの1店です。料金は上の表のブランド共通の標準料金（エアコン壁掛け 14,300円／台・キッチン・浴室 各19,800円・トイレ 9,900円、公式サービスページで 2026-11-11 に再確認）で、店舗ごとの料金は公式店舗ページに記載がありません。電話がつながらない場合は本部フリーダイヤル 0120-24-1000 と公式に記載。クチコミは公式店舗ページの表示で、当サイト独自の評価ではありません。出典:{" "}
              <a href="https://www.osoujihonpo.com/shop/kinki/hyogo/28109/" target="_blank" rel="noopener noreferrer" className="underline text-primary">おそうじ本舗 公式の神戸市北区の店舗一覧</a>
              ・<a href="https://www.osoujihonpo.com/shop/detail/20327/" target="_blank" rel="noopener noreferrer" className="underline text-primary">神戸岡場駅前店 公式店舗ページ</a>
              ・全国の店舗は<a href="/brand/osoujihonpo/" className="underline text-primary">おそうじ本舗の店舗一覧</a>
            </p>
          </div>
        )}
        {/* 2026-11-05: 「ソファクリーニング 豊島区」表示4・5.2位にソファの料金の答えが無かった。この1頁だけ。区内に店舗がある3ブランドの公式値 */}
        {area.slug === "tokyo-toshima" && (
          <div className="card p-5 mb-8 border border-gray-200" aria-label="ソファクリーニングの料金">
            <h2 className="text-lg font-bold text-ink mb-2">豊島区のソファクリーニング料金（公式サイト記載・税込・2026-11-05確認）</h2>
            <div className="overflow-x-auto">
              <table className="table text-sm">
                <thead>
                  <tr>
                    <th>ブランド（区内の店舗）</th>
                    <th>料金</th>
                    <th>公式の条件</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>おそうじ本舗（{byBrand["おそうじ本舗"] ?? 0}店）</th>
                    <td>5,500円／式（通常2人掛け）（<a href="https://www.osoujihonpo.com/house-cleaning/room/sofa/" target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>）</td>
                    <td>座面・背もたれ部・肘掛部が対象。サイズが異なる場合は別途見積もり。天然皮革（スウェード・バックスキン含む）は対象外</td>
                  </tr>
                  <tr>
                    <th>ダスキン サービスマスター（{byBrand["ダスキン サービスマスター"] ?? 0}店）</th>
                    <td>布 1人掛け 5,142円〜・3人掛け 11,874円〜／ビニールレザー 1人掛け 3,740円〜・3人掛け 7,480円〜（<a href="https://www.duskin.jp/servicemaster/spot/sm000050/" target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>）</td>
                    <td>東京都が含まれる Sエリアの標準料金。土日祝・夜間は受けられない場合や追加費用の場合あり</td>
                  </tr>
                  <tr>
                    <th>おそうじ革命（{byBrand["おそうじ革命"] ?? 0}店）</th>
                    <td>訪問見積り（金額の記載なし）（<a href="https://www.osoujikakumei.jp/price/" target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>）</td>
                    <td>布地以外のソファは不可。背面は洗浄箇所に含まれない</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">店舗ごとの対応と正確な金額は、依頼前に各店舗で確認してください。</p>
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2">{heading}</h2>
        <p className="text-sm text-muted mb-1">
          {located.length > 0 ? (
            <>
              各ブランド公式サイトの店舗情報をもとに、所在を確認した店舗のみを掲載しています（
              {Object.entries(byBrand).map(([b, n], i) => (
                <span key={b}>
                  {i > 0 && "・"}
                  {b} {n}店
                </span>
              ))}
              {verifiedLabel && `・${verifiedLabel}確認`}）。
            </>
          ) : (
            <>
              {area.label}内に所在する店舗は、各ブランド公式サイトでは確認できませんでした（{verifiedLabel || "2026-08-15"}時点）。
            </>
          )}
        </p>
        {located.length > 0 && (
          <p className="text-xs text-muted mb-6">
            公式サイトに電話番号の記載がある店舗は{withTel}店、営業時間の記載がある店舗は{withHours}店です。対応エリアは、公式サイトに記載のある店舗のみ表示しています。詳細と出典URLは各店舗ページに掲載しています。
          </p>
        )}

        {located.length > 0 && (
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {located.map((p) => (
              <a key={p.slug} href={`/provider/${p.slug}/`} className="card p-4 block border border-gray-200">
               <div className="cn-store-row">
                <StoreBrandShot brand={p.brand} name={p.brand_name} compact />
                <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="badge text-[11px]">{p.brand_name}</span>
                  {typeof p.rating_official === "number" && (
                    <span className="text-xs text-primary">
                      公式評価 {p.rating_official.toFixed(2)}
                      {typeof p.review_count_official === "number" && `（${p.review_count_official}件）`}
                    </span>
                  )}
                </div>
                <p className="text-sm font-bold text-ink">{p.name}</p>
                <p className="text-xs text-muted mt-1">{p.address}</p>
                {p.tel && <p className="text-xs text-muted mt-1">TEL {p.tel}</p>}
                {p.hours && (
                  <p className="text-xs text-muted mt-1">
                    営業時間 {p.hours}
                    {p.holiday && `／定休日 ${p.holiday}`}
                  </p>
                )}
                {Array.isArray(p.charge_region) && p.charge_region.length > 0 && (
                  <p className="text-xs text-muted mt-1">
                    対応エリア {p.charge_region.slice(0, 6).join("・")}
                    {p.charge_region.length > 6 && ` ほか${p.charge_region.length - 6}地域`}
                  </p>
                )}
                </div>
               </div>
              </a>
            ))}
          </div>
        )}
        {located.length > 0 && <StoreShotNote />}

        {covering.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-bold text-ink mb-2">
              {area.label}を対応エリアに含む近隣店舗（{covering.length}店舗）
            </h3>
            <p className="text-xs text-muted mb-3">
              店舗の所在地は{area.label}外ですが、公式サイトの対応エリアに{area.label}が明記されている店舗です。
            </p>
            <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {coveringShown.map((p) => (
                <li key={p.slug}>
                  <a href={`/provider/${p.slug}/`} className="block text-sm text-primary hover:underline">
                    {p.name}
                    <span className="block text-xs text-muted">{p.address}</span>
                  </a>
                </li>
              ))}
            </ul>
            {covering.length > COVERING_LIMIT && (
              <p className="text-xs text-muted mt-3">
                このほかに{covering.length - COVERING_LIMIT}店舗が、公式サイトの対応エリアに{area.label}を記載しています。各店舗の対応エリアは、店舗ページの「対応エリア」欄でご確認いただけます。
              </p>
            )}
          </div>
        )}

        {(area.children.length > 0 || area.parent || area.prefSlug) && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            {area.children.length > 0 && (
              <>
                <h3 className="text-base font-bold text-ink mb-2">
                  {area.kind === "pref" ? "市区から探す" : "区から探す"}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {area.children.map((c) => (
                    <a
                      key={c.slug}
                      href={`/areas/${c.slug}/`}
                      className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-ink hover:border-primary hover:text-primary"
                    >
                      {c.name}
                    </a>
                  ))}
                </div>
              </>
            )}
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {area.parent && (
                <a href={`/areas/${area.parent.slug}/`} className="text-primary hover:underline">
                  {area.parent.name}全体の店舗一覧を見る
                </a>
              )}
              {area.kind !== "pref" && area.prefSlug && (
                <a href={`/areas/${area.prefSlug}/`} className="text-primary hover:underline">
                  {area.pref}の店舗一覧を見る
                </a>
              )}
              {Object.keys(byBrand).length > 0 &&
                Array.from(new Set(located.map((p) => p.brand))).map((b) =>
                  BRAND_HUB[b] ? (
                    <a key={b} href={BRAND_HUB[b]} className="text-primary hover:underline">
                      {located.find((p) => p.brand === b)!.brand_name}の全店舗一覧
                    </a>
                  ) : null,
                )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
