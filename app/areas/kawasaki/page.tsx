import Link from "next/link";
import { Sparkles, Award, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "川崎市のハウスクリーニング業者おすすめ比較 | クリーンナビ",
  description: "川崎市でおすすめのハウスクリーニング業者を徹底比較。全域対応。",
};

export default function KawasakiArea() {
  const companyIcons = [Sparkles, Award, Shield, Zap];
  const companyColors = [
    "from-blue-500 to-blue-600",
    "from-green-500 to-green-600",
    "from-purple-500 to-purple-600",
    "from-orange-500 to-orange-600",
  ];


  const companies = [
    { name: "おそうじ革命", kitchen: "17,930円〜", bathroom: "17,930円〜", toilet: "8,250円〜", recommend: "コスパ重視" },
    { name: "おそうじ本舗", kitchen: "19,800円〜", bathroom: "19,800円〜", toilet: "9,900円〜", recommend: "技術力重視" },
    { name: "カジタク", kitchen: "19,580円〜", bathroom: "19,580円〜", toilet: "19,580円", recommend: "安心感重視" },
    { name: "ベアーズ", kitchen: "18,920円〜", bathroom: "19,910円〜", toilet: "10,340円〜", recommend: "家事代行も" },
  ];
  const areas = ['川崎区', '幸区', '中原区', '高津区', '多摩区', '宮前区', '麻生区'];
  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50">
        <Link href="/" className="btn btn-ghost text-xl">クリーンナビ</Link>
      </header>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">川崎市のハウスクリーニング業者比較</h1>
          <p className="text-xl">川崎市全域対応！信頼できる業者をご紹介</p>
        </div>
      </section>
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">川崎市でハウスクリーニングを依頼するなら？</h2>
            <p className="text-lg">川崎市は神奈川県第2の都市で、7区からなる政令指定都市です。東京と横浜の間に位置し、工業地帯と住宅地が混在しています。</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">おすすめ業者比較</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full max-w-6xl mx-auto bg-white">
              <thead>
                <tr>
                  <th>業者名</th>
                  <th>キッチン</th>
                  <th>浴室</th>
                  <th>トイレ</th>
                  
                </tr>
              </thead>
              <tbody>
                {companies.map((c, i) => (
                  <tr key={i}>
                    <td className="font-bold">{c.name}</td>
                    <td>{c.kitchen}</td>
                    <td>{c.bathroom}</td>
                    <td>{c.toilet}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">対応エリア</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {areas.map(a => <div key={a} className="badge badge-lg badge-outline p-4">{a}</div>)}
          </div>
        </div>
      </section>

      {/* 各業者詳細 */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">おすすめ業者詳細</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {companies.map((company, index) => {
              const Icon = companyIcons[index % companyIcons.length];
              const gradient = companyColors[index % companyColors.length];
              return (
                <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                  <div className="card-body">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="card-title text-2xl">{company.name}</h3>
                        
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold mb-2">料金</h4>
                        <ul className="space-y-1">
                          <li>• キッチン: {company.kitchen}</li>
                          <li>• 浴室: {company.bathroom}</li>
                          <li>• トイレ: {company.toilet}</li>
                        </ul>
                      </div>
                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">料金相場</h2>
            <ul className="space-y-2">
              <li>• エアコンクリーニング：10,000円〜15,000円</li>
              <li>• キッチンクリーニング：18,000円〜20,000円</li>
              <li>• 浴室クリーニング：19,000円〜22,000円</li>
              <li>• トイレクリーニング：9,000円〜10,000円</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">川崎市で最適な業者を見つけよう</h2>
          <div className="flex gap-4 justify-center mt-8">
            <Link href="/services/aircon" className="btn btn-lg bg-white text-primary">サービスから探す</Link>
            <Link href="/price" className="btn btn-lg btn-outline text-white border-white">料金相場を見る</Link>
          </div>
        </div>
      </section>

      {/* 近隣エリア */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">近隣エリアから探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/areas/yokohama" className="btn btn-outline">横浜市</Link>
            <Link href="/areas/tokyo" className="btn btn-outline">東京都</Link>
            <Link href="/areas/kanagawa" className="btn btn-outline">神奈川県</Link>
            <Link href="/areas/chiba" className="btn btn-outline">千葉県</Link>
          </div>
        </div>
      </section>
      <footer className="footer footer-center p-10 bg-base-200"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
