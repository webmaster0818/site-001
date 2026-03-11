import Link from "next/link";

export const metadata = {
  title: "口コミ評価が高い業者ランキング | クリーンナビ",
  description: "実際の利用者評価で選ぶおすすめ業者。実績、料金、口コミで徹底比較。",
};

export default function ReviewrankingPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50">
        <Link href="/" className="btn btn-ghost text-xl">クリーンナビ</Link>
      </header>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">口コミ評価が高い業者ランキング</h1>
          <p className="text-xl text-center mb-12">実際の利用者評価で選ぶおすすめ業者</p>
          <div className="text-center">
            <Link href="/services/aircon" className="btn btn-primary btn-lg">業者を探す</Link>
          </div>
        </div>
      </section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
