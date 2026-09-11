import providers from "../data/providers.json";

// 大手3ブランドの比較表。内容はcompany/brandページで公開済みの公式確認情報のみ(新規の数値創作なし)
// 掲載順は店舗数順であり、優劣の評価ではない
const list = providers as { brand: string }[];
const count = (k: string) => list.filter((p) => p.brand === k).length;

const ROWS = [
  {
    slug: "osoujihonpo",
    name: "おそうじ本舗",
    stores: count("honpo"),
    storesLabel: "店舗",
    feature: "業界最大手。特許取得の「ファインバブルエアコンクリーニング」を提供",
    points: ["損害保険加入済み", "Webで簡単予約"],
  },
  {
    slug: "duskin",
    name: "ダスキン サービスマスター",
    stores: count("duskin"),
    storesLabel: "拠点",
    feature: "1963年創業の老舗。浴室クリーニングをはじめ各種サービスを提供、定期サービスも対応",
    points: ["創業60年以上の実績", "損害保険加入済み"],
  },
  {
    slug: "osoujikakumei",
    name: "おそうじ革命",
    stores: count("kakumei"),
    storesLabel: "店舗",
    feature: "追加料金なしの明朗会計が特徴。スタッフは50日間の研修を受けて対応",
    points: ["業界最安クラス", "追加料金なし"],
  },
];

export default function BrandCompareTable() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-3 border border-gray-200 font-bold text-gray-700">ブランド</th>
              <th className="p-3 border border-gray-200 font-bold text-gray-700">全国店舗数</th>
              <th className="p-3 border border-gray-200 font-bold text-gray-700">特徴（公式確認情報）</th>
              <th className="p-3 border border-gray-200 font-bold text-gray-700">店舗一覧</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.slug}>
                <td className="p-3 border border-gray-200 font-bold text-gray-900">{r.name}</td>
                <td className="p-3 border border-gray-200">
                  {r.stores.toLocaleString()}
                  {r.storesLabel}
                </td>
                <td className="p-3 border border-gray-200 text-gray-700">
                  {r.feature}
                  <span className="block mt-1 text-xs text-gray-500">{r.points.join(" / ")}</span>
                </td>
                <td className="p-3 border border-gray-200">
                  <a href={`/brand/${r.slug}/`} className="text-sky-600 font-bold hover:underline">
                    店舗を探す
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        掲載内容は各社公式サイトで確認した情報のみです（店舗数は当サイト収録の実在確認済み店舗数）。掲載順は店舗数順であり、優劣の評価ではありません。
      </p>
    </div>
  );
}
