import Link from "next/link";

export const metadata = {
  title: "ハウスクリーニング一式 | クリーンナビ",
  description: "家全体をまるごとクリーニング。料金相場、口コミ、おすすめ業者を比較。",
};

export default function WholehouseService() {
  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50">
        <Link href="/" className="btn btn-ghost text-xl">クリーンナビ</Link>
      </header>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">ハウスクリーニング一式</h1>
          <p className="text-xl mb-8">家全体をまるごとクリーニング</p>
          <div className="flex gap-4 justify-center">
            <Link href="/services/aircon" className="btn btn-primary">業者を探す</Link>
            <Link href="/price" className="btn btn-outline">料金相場を見る</Link>
          </div>
        </div>
      </section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
