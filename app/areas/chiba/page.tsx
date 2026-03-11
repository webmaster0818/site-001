import Link from "next/link";
import { Star, CheckCircle, MapPin, Building2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "千葉県のハウスクリーニング業者比較 | クリーンナビ",
  description: "千葉県でおすすめのハウスクリーニング業者を徹底比較。千葉市、船橋市、松戸市など全域対応。",
  viewport: "width=device-width, initial-scale=1",
};

export default function ChibaArea() {
  const areas = ["千葉市", "船橋市", "松戸市", "市川市", "柏市", "市原市", "八千代市", "我孫子市", "鎌ケ谷市", "浦安市", "習志野市", "流山市", "野田市", "成田市", "佐倉市", "東金市", "旭市", "勝浦市"];
  const companies = [
    { id: 1, name: "千葉クリーンサービス", rating: 4.7, reviews: 956, price: "11,500円〜", features: ["即日対応", "24時間対応", "見積無料"], area: "千葉県全域" },
    { id: 2, name: "ベイエリアハウスクリーニング", rating: 4.6, reviews: 789, price: "11,000円〜", features: ["土日祝対応", "作業保証", "見積無料"], area: "千葉市・船橋市中心" },
    { id: 3, name: "幕張クリーンプロ", rating: 4.5, reviews: 612, price: "12,000円〜", features: ["女性スタッフ", "エコ洗剤", "見積無料"], area: "千葉市内中心" },
  ];
  return (<div className="min-h-screen bg-base-100"><header className="navbar bg-primary text-primary-content sticky top-0 z-50 shadow-lg"><div className="container mx-auto"><div className="flex-1"><Link href="/" className="btn btn-ghost text-xl font-bold">クリーンナビ</Link></div></div></header><div className="container mx-auto px-4 py-4"><div className="text-sm breadcrumbs"><ul><li><Link href="/">ホーム</Link></li><li><Link href="/areas/chiba">千葉県</Link></li></ul></div></div><section className="bg-gradient-to-r from-primary to-secondary text-white py-16"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto text-center"><div className="flex items-center justify-center gap-2 mb-4"><MapPin className="w-8 h-8" /><h1 className="text-4xl md:text-5xl font-bold">千葉県のハウスクリーニング業者</h1></div><div className="stats stats-horizontal shadow bg-white text-primary"><div className="stat"><div className="stat-value text-2xl">245社</div></div></div></div></div></section><section className="py-16 bg-base-200"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-center mb-8">対応エリア</h2><div className="max-w-5xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 gap-3">{areas.map(a => <div key={a} className="badge badge-lg badge-outline p-4">{a}</div>)}</div></div></div></section><section className="py-16"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-center mb-12">おすすめ業者</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">{companies.map(c => <div key={c.id} className="card bg-base-100 shadow-xl"><div className="card-body"><h3 className="card-title">{c.name}</h3><div className="flex items-center gap-2"><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><span>{c.rating}</span></div><p className="font-bold text-primary">{c.price}</p><Link href={`/company/${c.id}`} className="btn btn-primary btn-sm">詳細</Link></div></div>)}</div></div></section><footer className="footer footer-center p-10 bg-base-200"><p>© 2024 クリーンナビ</p></footer></div>);
}
