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

export default function OosoujiPriceAnswer({ areaLabel }: { areaLabel: string }) {
  return (
    <section id="oosouji-price" className="py-8 bg-amber-50 border-b border-amber-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          {areaLabel}で大掃除を業者に頼むといくら？ 大手3社の公式料金（{CHECKED}確認）
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
        <h3 className="text-base font-bold text-gray-900 mt-4 mb-1">まとめて頼むセット料金（公式）</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>
            ・ダスキン「ハウスワイドサービス」（公式に「夏季、年末の大掃除、引越し、新築、改装時などにおすすめ」と記載）: 東京・神奈川（Sエリア）のマンション Aセット＝水まわり5か所（キッチン・レンジフード・浴室・トイレ・洗面所）＋窓ガラス・サッシ・網戸で、1R／1K 52,800円、1LDK／2DK 78,100円、2LDK／3DK 103,400円、3LDK／4DK 110,000円（
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
