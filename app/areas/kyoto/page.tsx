import Link from "next/link";

export const metadata = {
  title: "京都府のハウスクリーニング業者おすすめ比較 | クリーンナビ",
  description: "京都府でおすすめのハウスクリーニング業者を徹底比較。京都市など全域対応。",
};

export default function KyotoArea() {
  const companies = [
    { name: "おそうじ革命", kitchen: "17,930円〜", bathroom: "17,930円〜", toilet: "8,250円〜" },
    { name: "おそうじ本舗", kitchen: "19,800円〜", bathroom: "19,800円〜", toilet: "9,900円〜" },
    { name: "カジタク", kitchen: "19,580円〜", bathroom: "19,580円〜", toilet: "19,580円" },
    { name: "ベアーズ", kitchen: "18,920円〜", bathroom: "19,910円〜", toilet: "10,340円〜" },
  ];
  const areas = ['京都市', '宇治市', '亀岡市', '城陽市', '向日市', '長岡京市', '八幡市', '京田辺市', '木津川市', '南丹市'];
  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50">
        <Link href="/" className="btn btn-ghost text-xl">クリーンナビ</Link>
      </header>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">京都府のハウスクリーニング業者比較</h1>
          <p className="text-xl">京都市など京都府全域対応</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">京都府でハウスクリーニングを依頼するなら？</h2>
            <p className="text-lg">古都京都は歴史的建造物が多く、伝統的な町家や寺社仏閣も多いエリアです。湿気が多い盆地気候のため、カビ対策が重要です。</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">おすすめ業者比較</h2>
          <table className="table table-zebra w-full max-w-5xl mx-auto bg-white">
            <thead><tr><th>業者名</th><th>キッチン</th><th>浴室</th><th>トイレ</th></tr></thead>
            <tbody>
              {companies.map((c, i) => (
                <tr key={i}><td className="font-bold">{c.name}</td><td>{c.kitchen}</td><td>{c.bathroom}</td><td>{c.toilet}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">対応エリア</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {areas.map(a => <div key={a} className="badge badge-lg p-3">{a}</div>)}
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
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">京都府で業者を探す</h2>
          <Link href="/services/aircon" className="btn btn-lg bg-white text-primary">サービスを見る</Link>
        </div>
      </section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
