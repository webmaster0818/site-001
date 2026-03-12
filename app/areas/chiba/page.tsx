import Link from "next/link";

export const metadata = {
  title: "千葉県のハウスクリーニング業者おすすめ比較 | クリーンナビ",
  description: "千葉県でおすすめのハウスクリーニング業者を徹底比較。千葉市、船橋市、松戸市など全域対応。",
};

export default function ChibaArea() {
  const companyIcons = [Sparkles, Award, Shield, Zap];
  const companyColors = [
    "from-blue-500 to-blue-600",
    "from-green-500 to-green-600",
    "from-purple-500 to-purple-600",
    "from-orange-500 to-orange-600",
  ];


  const companies = [
    { name: "おそうじ革命", kitchen: "17,930円〜", bathroom: "17,930円〜", toilet: "8,250円〜" },
    { name: "おそうじ本舗", kitchen: "19,800円〜", bathroom: "19,800円〜", toilet: "9,900円〜" },
    { name: "カジタク", kitchen: "19,580円〜", bathroom: "19,580円〜", toilet: "19,580円" },
  ];
  const areas = ["千葉市", "船橋市", "松戸市", "市川市", "柏市", "市原市", "八千代市", "我孫子市", "鎌ケ谷市", "浦安市", "習志野市", "流山市", "野田市"];
  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content">
        <Link href="/" className="btn btn-ghost text-xl">クリーンナビ</Link>
      </header>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">千葉県のハウスクリーニング業者比較</h1>
          <p className="text-xl mt-4">千葉市・船橋市など千葉県全域対応</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="text-lg max-w-4xl mx-auto">千葉県は東京湾に面しており、海風による塩害対策も重要です。ディズニーリゾート周辺の浦安市などは観光客も多く、清潔さを保つためのハウスクリーニング需要が高いエリアです。</p>
        </div>
      </section>
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">おすすめ業者</h2>
          <table className="table w-full max-w-5xl mx-auto bg-white">
            <thead><tr><th>業者名</th><th>キッチン</th><th>浴室</th><th>トイレ</th></tr></thead>
            <tbody>{companies.map((c,i) => <tr key={i}><td>{c.name}</td><td>{c.kitchen}</td><td>{c.bathroom}</td><td>{c.toilet}</td></tr>)}</tbody>
          </table>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-3 max-w-4xl mx-auto">
            {areas.map(a => <div key={a} className="badge p-3">{a}</div>)}
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary text-white text-center">
        <Link href="/services/aircon" className="btn btn-lg">サービスを見る</Link>
      </section>

      {/* 近隣エリア */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">近隣エリアから探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/areas/tokyo" className="btn btn-outline">東京都</Link>
            <Link href="/areas/saitama" className="btn btn-outline">埼玉県</Link>
            <Link href="/areas/kanagawa" className="btn btn-outline">神奈川県</Link>
            <Link href="/areas/shizuoka" className="btn btn-outline">静岡県</Link>
          </div>
        </div>
      </section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
