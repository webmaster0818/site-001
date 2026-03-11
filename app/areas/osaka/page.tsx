import Link from "next/link";
import { Star, CheckCircle, MapPin, Building2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "大阪府のハウスクリーニング業者比較 | クリーンナビ",
  description: "大阪府でおすすめのハウスクリーニング業者を徹底比較。北区、中央区など24区対応。料金相場、口コミ評価、即日対応可能な業者を掲載。",
  viewport: "width=device-width, initial-scale=1",
};

export default function OsakaArea() {
  const areas = [
    "北区", "都島区", "福島区", "此花区", "中央区", "西区", "港区", "大正区",
    "天王寺区", "浪速区", "西淀川区", "淀川区", "東淀川区", "東成区", "生野区",
    "旭区", "城東区", "鶴見区", "阿倍野区", "住之江区", "住吉区", "東住吉区",
    "平野区", "西成区"
  ];

  const companies = [
    {
      id: 1,
      name: "大阪クリーンサービス",
      rating: 4.8,
      reviews: 856,
      price: "12,000円〜",
      features: ["即日対応", "24時間対応", "見積無料"],
      area: "大阪府全域",
    },
    {
      id: 2,
      name: "関西ハウスクリーニング",
      rating: 4.6,
      reviews: 723,
      price: "11,500円〜",
      features: ["土日祝対応", "作業保証", "見積無料"],
      area: "大阪市内中心",
    },
    {
      id: 3,
      name: "梅田クリーンプロ",
      rating: 4.7,
      reviews: 612,
      price: "13,000円〜",
      features: ["女性スタッフ", "エコ洗剤", "見積無料"],
      area: "北区・中央区中心",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* ヘッダー */}
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

      {/* パンくずリスト */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/areas/osaka">大阪府</Link></li>
          </ul>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold">
                大阪府のハウスクリーニング業者
              </h1>
            </div>
            <p className="text-xl mb-8">
              大阪府全24区対応！信頼できるハウスクリーニング業者をご紹介
            </p>
            <div className="stats stats-horizontal shadow bg-white text-primary">
              <div className="stat">
                <div className="stat-title">登録業者数</div>
                <div className="stat-value text-2xl">234社</div>
              </div>
              <div className="stat">
                <div className="stat-title">平均評価</div>
                <div className="stat-value text-2xl flex items-center gap-1">
                  4.7 <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">総口コミ数</div>
                <div className="stat-value text-2xl">5,890件</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 対応エリア一覧 */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            対応エリア（大阪市24区）
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
              <span>大阪市以外の府内各市も対応可能な業者を多数掲載しています</span>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ業者一覧 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            大阪府のおすすめハウスクリーニング業者
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

      {/* エリア別のポイント */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            大阪府でハウスクリーニングを選ぶポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  <CheckCircle className="w-6 h-6" />
                  即日対応可能な業者が多い
                </h3>
                <p>大阪府内は業者が豊富で、即日・当日対応が可能な業者が多数あります。急な来客前にも安心です。</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  <CheckCircle className="w-6 h-6" />
                  料金相場は全国平均並み
                </h3>
                <p>大阪府の料金相場は全国平均とほぼ同水準。エアコンクリーニング1台で10,000〜15,000円程度です。</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  <CheckCircle className="w-6 h-6" />
                  繁華街は駐車場代に注意
                </h3>
                <p>梅田・なんば周辺など繁華街では駐車場代が別途かかる場合があります。事前に確認しましょう。</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  <CheckCircle className="w-6 h-6" />
                  女性スタッフ対応も充実
                </h3>
                <p>大阪府内の業者は女性スタッフの在籍も多く、一人暮らしの女性でも安心して依頼できます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            大阪府で最適なハウスクリーニング業者を見つけよう
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            234社の中からあなたにピッタリの業者を比較・検討できます
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

      {/* フッター */}
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
