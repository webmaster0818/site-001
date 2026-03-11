import Link from "next/link";
import { Star, MapPin } from "lucide-react";

export const metadata = {
  title: "横浜市のハウスクリーニング業者比較 | クリーンナビ",
  description: "横浜市でおすすめのハウスクリーニング業者を比較。18区全域対応。",
};

export default function YokohamaArea() {
  const areas = ["青葉区", "旭区", "泉区", "磯子区", "神奈川区", "金沢区", "港南区", "港北区", "栄区", "瀬谷区", "都筑区", "鶴見区", "戸塚区", "中区", "西区", "保土ケ谷区", "緑区", "南区"];
  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto"><Link href="/" className="btn btn-ghost text-xl font-bold">クリーンナビ</Link></div>
      </header>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">横浜市のハウスクリーニング業者</h1>
          <p className="text-xl mb-8">横浜市18区全域対応！</p>
        </div>
      </section>
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">対応エリア（横浜市18区）</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {areas.map(a => <div key={a} className="badge badge-lg p-3">{a}</div>)}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Link href="/services/aircon" className="btn btn-primary btn-lg">サービスを見る</Link>
        </div>
      </section>
      <footer className="footer footer-center p-10 bg-base-200"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
