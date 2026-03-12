import Link from "next/link";
import { Building2, MapPin, Sparkles, Award, Shield, Zap , Sparkles, Award, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "神奈川県のハウスクリーニング業者おすすめ比較 | 料金・口コミ | クリーンナビ",
  description: "神奈川県でおすすめのハウスクリーニング業者を徹底比較。横浜市、川崎市、相模原市など全域対応。",
  viewport: "width=device-width, initial-scale=1",
};

export default function KanagawaArea() {
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

  const areas = ["横浜市", "川崎市", "相模原市", "横須賀市", "平塚市", "鎌倉市", "藤沢市", "小田原市", "茅ヶ崎市", "逗子市", "三浦市", "秦野市", "厚木市", "大和市", "伊勢原市", "海老名市", "座間市", "南足柄市", "綾瀬市"];

  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50">
        <Link href="/" className="btn btn-ghost text-xl font-bold">クリーンナビ</Link>
      </header>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">神奈川県のハウスクリーニング業者比較</h1>
          <p className="text-xl">横浜市・川崎市・相模原市など神奈川県全域対応</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">神奈川県でハウスクリーニングを依頼するなら？</h2>
            <p className="text-lg">神奈川県は東京に次いで人口が多く、横浜市・川崎市を中心にハウスクリーニングの需要が高いエリアです。海沿いの地域では塩害による汚れ対策も重要です。</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">おすすめ業者比較</h2>
          <table className="table table-zebra w-full max-w-6xl mx-auto bg-white">
            <thead><tr><th>業者名</th><th>キッチン</th><th>浴室</th><th>トイレ</th><th>おすすめ</th></tr></thead>
            <tbody>
              {companies.map((c, i) => (
                <tr key={i}><td className="font-bold">{c.name}</td><td>{c.kitchen}</td><td>{c.bathroom}</td><td>{c.toilet}</td><td>{c.recommend}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">対応エリア</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {areas.map(a => <div key={a} className="badge badge-lg p-3">{a}</div>)}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">神奈川県で最適な業者を見つけよう</h2>
          <Link href="/services/aircon" className="btn btn-lg bg-white text-primary">サービスを見る</Link>
        </div>
      </section>

      {/* 近隣エリア */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">近隣エリアから探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/areas/tokyo" className="btn btn-outline">東京都</Link>
            <Link href="/areas/yokohama" className="btn btn-outline">横浜市</Link>
            <Link href="/areas/kawasaki" className="btn btn-outline">川崎市</Link>
            <Link href="/areas/shizuoka" className="btn btn-outline">静岡県</Link>
          </div>
        </div>
      </section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
