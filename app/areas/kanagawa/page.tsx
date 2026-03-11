import Link from "next/link";
import { Star, CheckCircle, MapPin, Building2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "神奈川県のハウスクリーニング業者比較 | クリーンナビ",
  description: "神奈川県でおすすめのハウスクリーニング業者を徹底比較。横浜市、川崎市、相模原市など全域対応。料金相場、口コミ評価、即日対応可能な業者を掲載。",
  viewport: "width=device-width, initial-scale=1",
};

export default function KanagawaArea() {
  const areas = [
    "横浜市", "川崎市", "相模原市", "横須賀市", "平塚市", "鎌倉市",
    "藤沢市", "小田原市", "茅ヶ崎市", "逗子市", "三浦市", "秦野市",
    "厚木市", "大和市", "伊勢原市", "海老名市", "座間市", "南足柄市",
    "綾瀬市", "葉山町", "寒川町", "大磯町"
  ];

  const companies = [
    {
      id: 1,
      name: "横浜クリーンサービス",
      rating: 4.8,
      reviews: 1245,
      price: "12,500円〜",
      features: ["即日対応", "24時間対応", "見積無料"],
      area: "神奈川県全域",
    },
    {
      id: 2,
      name: "湘南ハウスクリーニング",
      rating: 4.7,
      reviews: 892,
      price: "12,000円〜",
      features: ["土日祝対応", "作業保証", "見積無料"],
      area: "横浜・川崎中心",
    },
    {
      id: 3,
      name: "みなとみらいクリーンプロ",
      rating: 4.6,
      reviews: 734,
      price: "13,000円〜",
      features: ["女性スタッフ", "エコ洗剤", "見積無料"],
      area: "横浜市内中心",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl font-bold">
              クリーンナビ
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/services/aircon">サービス一覧</Link></li>
              <li><Link href="/price">料金相場</Link></li>
            </ul>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/areas/kanagawa">神奈川県</Link></li>
          </ul>
        </div>
      </div>

      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold">
                神奈川県のハウスクリーニング業者
              </h1>
            </div>
            <p className="text-xl mb-8">
              横浜・川崎・相模原など神奈川県全域対応！信頼できる業者をご紹介
            </p>
            <div className="stats stats-horizontal shadow bg-white text-primary">
              <div className="stat">
                <div className="stat-title">登録業者数</div>
                <div className="stat-value text-2xl">312社</div>
              </div>
              <div className="stat">
                <div className="stat-title">平均評価</div>
                <div className="stat-value text-2xl flex items-center gap-1">
                  4.7 <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">総口コミ数</div>
                <div className="stat-value text-2xl">7,234件</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            対応エリア（神奈川県全域）
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="badge badge-lg badge-outline hover:badge-primary cursor-pointer transition-all p-4"
                >
                  {area}
                </div>
              ))}
            </div>
            <div className="alert alert-info mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>横浜市18区、川崎市7区、相模原市3区をはじめ、県内全域に対応可能な業者を多数掲載しています</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            神奈川県のおすすめハウスクリーニング業者
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {companies.map((company) => (
              <div key={company.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                <div className="card-body">
                  <div className="flex items-start justify-between">
                    <h3 className="card-title text-lg">{company.name}</h3>
                    <div className="badge badge-primary">おすすめ</div>
                  </div>
                  
                  <div className="flex items-center gap-2 my-2">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold ml-1">{company.rating}</span>
                    </div>
                    <span className="text-sm text-base-content/70">
                      ({company.reviews}件)
                    </span>
                  </div>

                  <div className="divider my-1"></div>

                  <div className="space-y-2">
                    <p className="text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      対応エリア: {company.area}
                    </p>
                    <p className="font-bold text-lg text-primary">
                      {company.price}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {company.features.map((feature) => (
                      <div key={feature} className="badge badge-outline badge-sm">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="card-actions justify-end mt-4">
                    <Link
                      href={`/company/${company.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      詳細を見る
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services/aircon" className="btn btn-primary btn-lg">
              全てのサービスを見る
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            神奈川県でハウスクリーニングを選ぶポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  <CheckCircle className="w-6 h-6" />
                  業者数が豊富で選択肢が多い
                </h3>
                <p>神奈川県は業者が多く、ニーズに合った業者を見つけやすい環境です。複数社を比較検討しましょう。</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  <CheckCircle className="w-6 h-6" />
                  料金相場は全国平均よりやや高め
                </h3>
                <p>都市部では料金がやや高めですが、品質も高い傾向。エアコンクリーニング1台で11,000〜16,000円程度です。</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  <CheckCircle className="w-6 h-6" />
                  駐車場代の確認を忘れずに
                </h3>
                <p>横浜駅周辺など都市部では駐車場代が別途かかる場合があります。事前に確認しましょう。</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  <CheckCircle className="w-6 h-6" />
                  即日対応可能な業者が豊富
                </h3>
                <p>業者数が多いため、即日・当日対応可能な業者も多数あります。急な依頼にも対応しやすい環境です。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            神奈川県で最適なハウスクリーニング業者を見つけよう
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            312社の中からあなたにピッタリの業者を比較・検討できます
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/aircon" className="btn btn-lg bg-white text-primary hover:bg-base-200">
              サービスから探す
            </Link>
            <Link href="/price" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary">
              料金相場を見る
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <p className="font-bold text-lg">クリーンナビ</p>
          <p>ハウスクリーニング業者の比較・検索サイト</p>
          <p className="text-sm mt-2">© 2024 クリーンナビ All rights reserved.</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link href="/price" className="link link-hover">料金相場</Link>
            <Link href="/areas/tokyo" className="link link-hover">東京</Link>
            <Link href="/areas/osaka" className="link link-hover">大阪</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
