import Link from "next/link";

export const metadata = {
  title: "川崎市のハウスクリーニング業者比較 | クリーンナビ",
  description: "川崎市でおすすめのハウスクリーニング業者を比較。7区全域対応。",
};

export default function KawasakiArea() {
  const areas = ["川崎区", "幸区", "中原区", "高津区", "多摩区", "宮前区", "麻生区"];
  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content"><Link href="/" className="btn btn-ghost text-xl">クリーンナビ</Link></header>
      <section className="py-16"><div className="container mx-auto px-4"><h1 className="text-4xl font-bold text-center mb-8">川崎市のハウスクリーニング業者</h1><div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto">{areas.map(a => <div key={a} className="badge badge-lg p-3">{a}</div>)}</div><div className="text-center mt-8"><Link href="/services/aircon" className="btn btn-primary">サービスを見る</Link></div></div></section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
