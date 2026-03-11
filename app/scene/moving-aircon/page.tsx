import Link from "next/link";

export const metadata = {
  title: "引越し前エアコンクリーニング | クリーンナビ",
  description: "引越し前のエアコン清掃で新居を快適に。料金相場、おすすめ業者を比較。",
};

export default function MovingairconScene() {
  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50">
        <Link href="/" className="btn btn-ghost text-xl">クリーンナビ</Link>
      </header>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">引越し前エアコンクリーニング</h1>
          <p className="text-xl mb-12">引越し前のエアコン清掃で新居を快適に</p>
          <Link href="/services/aircon" className="btn btn-primary btn-lg">業者を探す</Link>
        </div>
      </section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
