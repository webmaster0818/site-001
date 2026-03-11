import Link from "next/link";
import { Star, CheckCircle, MapPin, Building2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "埼玉県のハウスクリーニング業者比較 | クリーンナビ",
  description: "埼玉県でおすすめのハウスクリーニング業者を徹底比較。さいたま市、川口市、所沢市など全域対応。料金相場、口コミ評価、即日対応可能な業者を掲載。",
  viewport: "width=device-width, initial-scale=1",
};

export default function SaitamaArea() {
  const areas = [
    "さいたま市", "川口市", "所沢市", "越谷市", "川越市", "熊谷市",
    "草加市", "春日部市", "上尾市", "狭山市", "入間市", "朝霞市",
    "志木市", "和光市", "新座市", "桶川市", "久喜市", "北本市",
    "八潮市", "富士見市", "三郷市", "蓮田市"
  ];

  const companies = [
    {
      id: 1,
      name: "埼玉クリーンサービス",
      rating: 4.7,
      reviews: 1089,
      price: "11,500円〜",
      features: ["即日対応", "24時間対応", "見積無料"],
      area: "埼玉県全域",
    },
    {
      id: 2,
      name: "さいたまハウスクリーニング",
      rating: 4.6,
      reviews: 823,
      price: "11,000円〜",
      features: ["土日祝対応", "作業保証", "見積無料"],
      area: "さいたま市・川口市中心",
    },
    {
      id: 3,
      name: "大宮クリーンプロ",
      rating: 4.5,
      reviews: 678,
      price: "12,000円〜",
      features: ["女性スタッフ", "エコ洗剤", "見積無料"],
      area: "さいたま市内中心",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl font-bold">クリーンナビ</Link>
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
            <li><Link href="/areas/saitama">埼玉県</Link></li>
          </ul>
        </div>
      </div>

      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold">埼玉県のハウスクリーニング業者</h1>
            </div>
            <p className="text-xl mb-8">さいたま市・川口市など埼玉県全域対応！信頼できる業者をご紹介</p>
            <div className="stats stats-horizontal shadow bg-white text-primary">
              <div className="stat">
                <div className="stat-title">登録業者数</div>
                <div className="stat-value text-2xl">268社</div>
              </div>
              <div className="stat">
                <div className="stat-title">平均評価</div>
                <div className="stat-value text-2xl flex items-center gap-1">
                  4.6 <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">総口コミ数</div>
                <div className="stat-value text-2xl">6,123件</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />対応エリア（埼玉県全域）
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {areas.map((area) => (
                <div key={area} className="badge badge-lg badge-outline hover:badge-primary cursor-pointer transition-all p-4">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">埼玉県のおすすめハウスクリーニング業者</h2>
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
                    <span className="text-sm text-base-content/70">({company.reviews}件)</span>
                  </div>
                  <div className="divider my-1"></div>
                  <div className="space-y-2">
                    <p className="text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />対応エリア: {company.area}
                    </p>
                    <p className="font-bold text-lg text-primary">{company.price}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {company.features.map((feature) => (
                      <div key={feature} className="badge badge-outline badge-sm">
                        <CheckCircle className="w-3 h-3 mr-1" />{feature}
                      </div>
                    ))}
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <Link href={`/company/${company.id}`} className="btn btn-primary btn-sm">
                      詳細を見る<ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">埼玉県で最適なハウスクリーニング業者を見つけよう</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/aircon" className="btn btn-lg bg-white text-primary hover:bg-base-200">サービスから探す</Link>
            <Link href="/price" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary">料金相場を見る</Link>
          </div>
        </div>
      </section>

      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <p className="font-bold text-lg">クリーンナビ</p>
          <p className="text-sm mt-2">© 2024 クリーンナビ All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
