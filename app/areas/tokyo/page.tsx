import Link from "next/link";
import { Building2, MapPin } from "lucide-react";

export const metadata = {
  title: "東京都のハウスクリーニング業者おすすめ比較 | 料金・口コミ | クリーンナビ",
  description: "東京都でおすすめのハウスクリーニング業者を徹底比較。23区、多摩地域など全域対応。料金相場、口コミ評価を掲載。",
  viewport: "width=device-width, initial-scale=1",
};

export default function TokyoArea() {
  const companies = [
    {
      name: "おそうじ革命",
      kitchen: "17,930円〜",
      bathroom: "17,930円〜",
      toilet: "8,250円〜",
      recommend: "コスパ重視",
      features: ["50日間研修", "低価格", "全国展開"],
    },
    {
      name: "おそうじ本舗",
      kitchen: "19,800円〜",
      bathroom: "19,800円〜",
      toilet: "9,900円〜",
      recommend: "技術力重視",
      features: ["300以上の独自技術", "3日以内対応"],
    },
    {
      name: "カジタク",
      kitchen: "19,580円〜",
      bathroom: "19,580円〜",
      toilet: "19,580円（セット）",
      recommend: "安心感重視",
      features: ["イオングループ", "一律料金", "品質保証"],
    },
    {
      name: "ベアーズ",
      kitchen: "18,920円〜",
      bathroom: "19,910円〜",
      toilet: "10,340円〜",
      recommend: "家事代行も",
      features: ["25年以上の実績", "女性スタッフ指名可"],
    },
  ];

  const areas = [
    "千代田区", "中央区", "港区", "新宿区", "文京区", "台東区", "墨田区", "江東区",
    "品川区", "目黒区", "大田区", "世田谷区", "渋谷区", "中野区", "杉並区", "豊島区",
    "北区", "荒川区", "板橋区", "練馬区", "足立区", "葛飾区", "江戸川区",
    "八王子市", "立川市", "武蔵野市", "三鷹市", "府中市", "調布市", "町田市", "小金井市"
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto">
          <Link href="/" className="btn btn-ghost text-xl font-bold">クリーンナビ</Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/areas/tokyo">東京都</Link></li>
          </ul>
        </div>
      </div>

      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold">東京都のハウスクリーニング業者おすすめ比較</h1>
            </div>
            <p className="text-xl mb-8">23区・多摩地域など東京都全域対応！料金・口コミで徹底比較</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">東京都でハウスクリーニングを依頼するなら？</h2>
            <p className="text-lg mb-4">
              東京都は日本最大の都市であり、ハウスクリーニング業者の数も全国で最も多いエリアです。
              大手チェーンから地域密着型の個人業者まで、選択肢が非常に豊富です。
            </p>
            <p className="text-lg mb-4">
              特に23区内では単身者や共働き世帯が多く、ハウスクリーニングの需要が高い傾向にあります。
              引越しシーズン（3〜4月、9〜10月）は予約が取りづらくなるため、早めの予約がおすすめです。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">東京都おすすめハウスクリーニング業者 比較一覧</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full max-w-6xl mx-auto bg-white">
              <thead>
                <tr>
                  <th>業者名</th>
                  <th>キッチン</th>
                  <th>浴室</th>
                  <th>トイレ</th>
                  <th>おすすめの人</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, index) => (
                  <tr key={index}>
                    <td className="font-bold">{company.name}</td>
                    <td>{company.kitchen}</td>
                    <td>{company.bathroom}</td>
                    <td>{company.toilet}</td>
                    <td>{company.recommend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />対応エリア（東京都全域）
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {areas.map((area) => (
                <div key={area} className="badge badge-lg badge-outline p-4">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">東京都のハウスクリーニング料金相場</h2>
            <h3 className="text-2xl font-bold mb-4">場所別料金相場</h3>
            <ul className="space-y-2">
              <li>• エアコンクリーニング：10,000円〜15,000円</li>
              <li>• キッチンクリーニング：18,000円〜20,000円</li>
              <li>• 浴室クリーニング：19,000円〜22,000円</li>
              <li>• トイレクリーニング：9,000円〜10,000円</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">東京都で最適なハウスクリーニング業者を見つけよう</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/services/aircon" className="btn btn-lg bg-white text-primary">サービスから探す</Link>
            <Link href="/price" className="btn btn-lg btn-outline text-white border-white">料金相場を見る</Link>
          </div>
        </div>
      </section>

      <footer className="footer footer-center p-10 bg-base-200">
        <p>© 2024 クリーンナビ</p>
      </footer>
    </div>
  );
}
