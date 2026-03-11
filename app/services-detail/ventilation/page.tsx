import Link from "next/link";

export const metadata = {
  title: "換気扇・レンジフードクリーニング | クリーンナビ",
  description: "油汚れでお困りの換気扇・レンジフードを徹底洗浄。料金相場、口コミ、おすすめ業者を比較。",
};

export default function VentilationService() {
  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50">
        <Link href="/" className="btn btn-ghost text-xl">クリーンナビ</Link>
      </header>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">換気扇・レンジフードクリーニング</h1>
          <p className="text-xl mb-8">油汚れでお困りの換気扇・レンジフードを徹底洗浄</p>
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
