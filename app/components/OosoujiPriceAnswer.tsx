// 2026-11-12 16:00 遅れ挽回: 「大掃除業者 ＋地域」の検索（東京都・目黒区・北区）に、ページ冒頭で
// 「大掃除を業者に頼むと主要メニューはいくらか」を大手3ブランドの公式標準料金で答える早見表。
// 使うのは呼び出したエリアページだけ（共通テンプレートには入れない）。値はすべて 2026-11-12 に各公式ページで確認。
import { BRAND_PRICES, KAKUMEI_HUB_PRICES } from "../data/brandPrices";

const CHECKED = "2026年11月12日";

const H = BRAND_PRICES.honpo.rows;
const D = BRAND_PRICES.duskin.rows;
const K = KAKUMEI_HUB_PRICES.rows;

// [箇所, 本舗, ダスキン, 革命]
const ROWS: [string, (typeof H)[number], (typeof D)[number], (typeof K)[number]][] = [
  ["エアコン（壁掛け・お掃除機能なし）", H[0], D[0], K[0]],
  ["エアコン（お掃除機能付き）", H[1], D[1], K[1]],
  ["キッチン", H[3], D[3], K[3]],
  ["レンジフード・換気扇", H[2], D[2], K[2]],
  ["浴室", H[4], D[4], K[4]],
  ["トイレ", H[5], D[5], K[5]],
];

const DUSKIN_HOUSEWIDE = "https://www.duskin.jp/servicemaster/house/sm000180/";
const HONPO_KITCHEN_SET = "https://www.osoujihonpo.com/house-cleaning/kitchen/fan/";
const KAKUMEI_PRICE = "https://www.osoujikakumei.jp/price/";
const KAKUMEI_BLOG = "https://www.osoujikakumei.jp/shonan_fujisawakameino/blog/archives/25561";

function Cell({ row }: { row: [string, string, string] }) {
  return (
    <td>
      {row[1].replace(/（2台以上の注文は[^）]*）/, "")}（
      <a href={row[2]} target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>）
    </td>
  );
}

// 「エアコンクリーニング ＋地域」（文京区）向け。エアコンだけの3社比較（2026-11-12 公式確認）
export function AirconPriceAnswer({ areaLabel }: { areaLabel: string }) {
  const rows: [string, string, string, string][] = [
    ["おそうじ本舗", "14,300円／台（2台以上の注文は12,100円／台）", "24,200円／台（同 22,000円／台）", H[0][2]],
    ["ダスキン", "15,400円／1台（2台セット 25,300円）", "26,400円／1台（2台セット 47,300円）", D[0][2]],
    ["おそうじ革命", "9,980円／台（全国一律）", "18,700円／台（全国一律）", K[0][2]],
  ];
  return (
    <section id="aircon-price" className="py-8 bg-sky-50 border-b border-sky-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          {areaLabel}のエアコンクリーニング料金 大手3社の公式標準料金（{CHECKED}確認）
        </h2>
        <div className="overflow-x-auto">
          <table className="table table-sm text-sm bg-white">
            <thead>
              <tr>
                <th>ブランド</th>
                <th>壁掛け（お掃除機能なし）</th>
                <th>お掃除機能付き</th>
                <th>出典</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([b, a, f, u]) => (
                <tr key={b}>
                  <th>{b}</th>
                  <td>{a}</td>
                  <td>{f}</td>
                  <td>
                    <a href={u} target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          税込の通常価格（期間限定のキャンペーン価格は含みません）。家庭用の壁掛けタイプの料金で、天井埋め込み型などは別料金・見積もりです。おそうじ革命は製造から20年以上のエアコンは作業不可、ダスキンは製造後長期間たった機種は断る場合ありと公式に記載。{areaLabel}の店舗は下の一覧、詳しい比較は
          <a href="/services/aircon/" className="underline text-primary">エアコンクリーニングの比較</a>をご覧ください。
        </p>
      </div>
    </section>
  );
}

// 2026-11-13 16:00 遅れ挽回: 横浜市南区・神奈川区・千葉市花見川区にも同じ型で設置。値は 2026-11-13 に全行を公式で再確認（11/12 と全一致）。
// checked: 表示する確認日（既存4頁は 11/12 のまま）／duskinArea: ダスキン ハウスワイドの地域区分（千葉は A エリア。A セットの金額は S と同額）
// stores: その区に所在する掲載店（答えの直後に店名と店舗ページへの導線）／washer: 洗濯槽（洗濯機）クリーニングの3社の公式料金を足す
type StoreLink = { name: string; href: string };

// 洗濯機クリーニング（2026-11-13 各公式で確認・税込）
const WASHER_ROWS: [string, string, string][] = [
  [
    "おそうじ本舗",
    "縦型 12,100円／台・ドラム式 18,700円／台（いずれも分解を伴わない洗浄。完全分解洗浄はオプションで縦型 +11,000円・ドラム式 +19,800円）",
    "https://www.osoujihonpo.com/house-cleaning/washer/top/",
  ],
  [
    "ダスキン",
    "縦型全自動洗濯機 除菌クリーニング 15,400円・縦型洗濯乾燥機 18,700円・ドラム式洗濯乾燥機 22,000円（洗濯槽は取り外さず、洗浄水に12時間以上浸け置き。最後のすすぎは利用者が行う）",
    "https://www.duskin.jp/servicemaster/water/sm000170/",
  ],
  [
    "おそうじ革命",
    "分解クリーニング 縦型 8kg未満 17,600円・8kg以上 20,900円、乾燥機能付き 8kg未満 23,100円・8kg以上 26,400円、ドラム式 30,800円〜（要見積り）",
    KAKUMEI_PRICE,
  ],
];

// 2026-11-14 16:00 遅れ挽回: 任意 props を追加（既存7頁は渡していないので表示不変）。
// storesLabel: 掲載店の行の地域名を areaLabel と別にする（埼玉県ページで「さいたま市桜区」の掲載店を出す）／storesMore: 掲載店の行の後ろに足す地域ページへの導線
// storeCount: 掲載店が多い区（世田谷区40店など）は店名を並べず、ブランド別の店数と下の一覧（#stores）への導線を出す
type StoreCount = { honpo: number; duskin: number; kakumei: number };

export default function OosoujiPriceAnswer({
  areaLabel,
  checked = CHECKED,
  duskinArea = "S",
  stores,
  washer = false,
  storesLabel,
  storesMore,
  storeCount,
  duskinAreaLabel,
}: {
  areaLabel: string;
  checked?: string;
  duskinArea?: "S" | "A";
  stores?: StoreLink[];
  washer?: boolean;
  storesLabel?: string;
  storesMore?: StoreLink;
  storeCount?: StoreCount;
  duskinAreaLabel?: string; // A エリアの表記を地域に合わせる（埼玉県ページ＝「埼玉県など」）。未指定は従来の「千葉県など」
}) {
  return (
    <section id="oosouji-price" className="py-8 bg-amber-50 border-b border-amber-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          {areaLabel}で大掃除を業者に頼むといくら？ 大手3社の公式料金（{checked}確認）
        </h2>
        <p className="text-sm text-gray-700 mb-3">
          大掃除でよく頼まれる箇所の1か所あたりの標準料金（税込・通常価格）です。おそうじ革命は公式に「全国一律価格」、おそうじ本舗・ダスキンはブランド共通の標準料金で、店舗ごとの金額は見積もりで確認してください。
        </p>
        <div className="overflow-x-auto">
          <table className="table table-sm text-sm bg-white">
            <thead>
              <tr>
                <th>箇所</th>
                <th>おそうじ本舗</th>
                <th>ダスキン</th>
                <th>おそうじ革命</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([label, h, d, k]) => (
                <tr key={label}>
                  <th>{label}</th>
                  <Cell row={h} />
                  <Cell row={d} />
                  <Cell row={k} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {stores && stores.length > 0 && (
          <p className="text-sm text-gray-700 mt-3">
            {storesLabel ?? areaLabel}内に所在する掲載店（{stores.length}店・各ブランド公式の店舗ページで{checked}に掲載を確認）:{" "}
            {stores.map((st, i) => (
              <span key={st.href}>
                {i > 0 && "・"}
                <a href={st.href} className="underline text-primary">{st.name}</a>
              </span>
            ))}
            。電話・営業時間・対応エリアは各店舗ページ
            {storesMore ? (
              <>
                、{storesLabel ?? areaLabel}の店舗一覧は
                <a href={storesMore.href} className="underline text-primary">{storesMore.name}</a>
                をご覧ください。
              </>
            ) : (
              "、区外から対応する店舗は下の一覧をご覧ください。"
            )}
          </p>
        )}
        {storeCount && (
          <p className="text-sm text-gray-700 mt-3">
            {areaLabel}内に所在する掲載店は計{storeCount.honpo + storeCount.duskin + storeCount.kakumei}店（おそうじ本舗 {storeCount.honpo}店・ダスキン {storeCount.duskin}店・おそうじ革命 {storeCount.kakumei}店）。店名・電話・営業時間と各店の公式ページは
            <a href="#stores" className="underline text-primary">下の店舗一覧</a>
            をご覧ください。
          </p>
        )}
        {washer && (
          <>
            <h3 className="text-base font-bold text-gray-900 mt-4 mb-1">洗濯槽（洗濯機）クリーニングの料金（公式・税込）</h3>
            <div className="overflow-x-auto">
              <table className="table table-sm text-sm bg-white">
                <thead>
                  <tr>
                    <th>ブランド</th>
                    <th>料金</th>
                    <th>出典</th>
                  </tr>
                </thead>
                <tbody>
                  {WASHER_ROWS.map(([b, v, u]) => (
                    <tr key={b}>
                      <th>{b}</th>
                      <td>{v}</td>
                      <td>
                        <a href={u} target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              作業内容がブランドごとに違います（本舗の基本料金とダスキンは分解しない洗浄、革命は分解洗浄）。メーカー・機種・設置状況により対応できない場合があります（各公式に記載）。
            </p>
          </>
        )}
        <h3 className="text-base font-bold text-gray-900 mt-4 mb-1">まとめて頼むセット料金（公式）</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>
            ・ダスキン「ハウスワイドサービス」（公式に「夏季、年末の大掃除、引越し、新築、改装時などにおすすめ」と記載）: {duskinArea === "A" ? `${duskinAreaLabel ?? "千葉県"}など（Aエリア。マンション Aセットの金額は東京・神奈川のSエリアと同額）` : "東京・神奈川（Sエリア）"}のマンション Aセット＝水まわり5か所（キッチン・レンジフード・浴室・トイレ・洗面所）＋窓ガラス・サッシ・網戸で、1R／1K 52,800円、1LDK／2DK 78,100円、2LDK／3DK 103,400円、3LDK／4DK 110,000円（
            <a href={DUSKIN_HOUSEWIDE} target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>）
          </li>
          <li>
            ・おそうじ革命「水回りセット」（浴室・キッチン・レンジフード・洗面所・トイレから選ぶ）: 2点 32,890円／3点 45,980円／4点 57,970円（
            <a href={KAKUMEI_PRICE} target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>）
          </li>
          <li>
            ・おそうじ本舗「換気扇・キッチンクリーニングセット」: 36,300円（単品合計より3,300円安いと公式に記載。期間限定の割引価格は含みません・
            <a href={HONPO_KITCHEN_SET} target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>）
          </li>
        </ul>
        <h3 className="text-base font-bold text-gray-900 mt-4 mb-1">年末は予約が集中します</h3>
        <p className="text-sm text-gray-700">
          おそうじ革命の加盟店（湘南藤沢亀井野店）の公式ブログ（2025年11月20日公開）は「年末の大掃除の依頼が最も殺到するのは、12月の中旬〜下旬」「可能であれば10月～11月中に予約するか、逆に年末を避けて1月以降の閑散期に依頼するのがおすすめ」と書いています（
          <a href={KAKUMEI_BLOG} target="_blank" rel="noopener noreferrer" className="underline text-primary">出典</a>）。ダスキンは公式に「土日・祝日・その他の休業日及び夜間の作業は、お受けできない場合や標準料金に加えて追加の費用が発生する場合があります」と記載しています。
        </p>
        <p className="text-xs text-gray-500 mt-2">
          期間限定のキャンペーン価格は含みません。強い汚れ・追加範囲・オプションは別料金です。{areaLabel}の店舗は下の一覧、自分でやる範囲との分け方は
          <a href="/scene/year-end-package/" className="underline text-primary">年末大掃除ガイド</a>をご覧ください。
        </p>
      </div>
    </section>
  );
}

// 2026-11-14 16:00 遅れ挽回: 「和歌山 洗濯機クリーニング」（/areas/wakayama/）向け。洗濯槽クリーニングの3社公式料金（11/13 花見川区と同じ値を 2026-11-14 に各公式で再確認）と、市内の掲載店
export function WasherPriceAnswer({
  areaLabel,
  checked,
  stores,
  storesNote,
  more,
}: {
  areaLabel: string;
  checked: string;
  stores: StoreLink[];
  storesNote?: string;
  more?: StoreLink;
}) {
  return (
    <section id="washer-price" className="py-8 bg-sky-50 border-b border-sky-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          {areaLabel}の洗濯機（洗濯槽）クリーニング料金 大手3社の公式料金（{checked}確認）
        </h2>
        <div className="overflow-x-auto">
          <table className="table table-sm text-sm bg-white">
            <thead>
              <tr>
                <th>ブランド</th>
                <th>料金（税込）</th>
                <th>出典</th>
              </tr>
            </thead>
            <tbody>
              {WASHER_ROWS.map(([b, v, u]) => (
                <tr key={b}>
                  <th>{b}</th>
                  <td>{v}</td>
                  <td>
                    <a href={u} target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="text-xs text-gray-600 mt-2 space-y-1">
          <li>・作業内容がブランドごとに違います（本舗の基本料金とダスキンは分解しない洗浄、革命は分解洗浄）。</li>
          <li>・おそうじ本舗: 日立製は追加費用（オプション 5,500円／台）、日立「ビートウォッシュ」は完全分解洗浄と日立製オプションが必要、SHARP「穴なし槽」は完全分解洗浄で対応。製造から6年以上の洗濯機は断る・保証できない場合あり（公式）。</li>
          <li>・ダスキン: 2槽式は不可、外国製など機種によっては受けられない場合あり（公式）。</li>
          <li>・おそうじ革命: 二槽式・海外製（斜めドラム）は分解クリーニングの対象外。ドラム式はメーカー・容量・ヒートポンプの有無で対応可否・料金が異なる（公式）。</li>
        </ul>
        <p className="text-sm text-gray-700 mt-3">
          {areaLabel}内に所在する掲載店（{stores.length}店・各ブランド公式の店舗ページで{checked}に掲載を確認）:{" "}
          {stores.map((st, i) => (
            <span key={st.href}>
              {i > 0 && "・"}
              <a href={st.href} className="underline text-primary">{st.name}</a>
            </span>
          ))}
          。{storesNote}
          {more && (
            <>
              県内のほかの市町村の店舗は
              <a href={more.href} className="underline text-primary">{more.name}</a>
              をご覧ください。
            </>
          )}
        </p>
      </div>
    </section>
  );
}
