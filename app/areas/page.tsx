import Link from "next/link";
import { MapPin } from "lucide-react";
import { AREA_INDEX, AREA_TOTAL } from "@/app/components/areaIndexData";

const TITLE = "地域からハウスクリーニング業者を探す | クリーンナビ";
const DESCRIPTION =
  "全国238エリアのハウスクリーニング業者比較ページを都道府県・市区別に一覧掲載。東京・大阪・名古屋・横浜・札幌・福岡など、お住まいの地域からおすすめ業者と料金相場を確認できます。";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://cleaning-choices.com/areas/",
    siteName: "クリーンナビ",
    images: [
      {
        url: "https://cleaning-choices.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "地域からハウスクリーニング業者を探す - クリーンナビ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://cleaning-choices.com/og-image.png"],
  },
  alternates: {
    canonical: "https://cleaning-choices.com/areas/",
  },
};

export default function AreasIndex() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* パンくずリスト */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/areas/">地域から探す</Link></li>
          </ul>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            地域からハウスクリーニング業者を探す
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            クリーンナビでは全国{AREA_TOTAL}エリアのハウスクリーニング業者比較ページをご用意しています。
            都道府県・市区ごとに、対応業者の料金相場や口コミ評価、地域特有の汚れ対策までまとめています。
            お住まいのエリアを選んで、最適な業者選びにお役立てください。
          </p>
        </div>
      </section>

      {/* 都道府県別索引 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {AREA_INDEX.map((pref) => (
              <div key={pref.pref} className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body">
                  <h2 className="card-title text-2xl">
                    <MapPin className="w-6 h-6 text-primary" />
                    {pref.pref}
                  </h2>
                  <div className="space-y-4 mt-2">
                    {pref.cities.map((group, gi) => (
                      <div key={`${pref.pref}-${group.city || gi}`}>
                        {group.city && (
                          <h3 className="font-bold text-base-content/70 mb-2">
                            {group.city}
                          </h3>
                        )}
                        <ul className="flex flex-wrap gap-2">
                          {group.areas.map((area) => (
                            <li key={area.slug}>
                              <Link
                                href={`/areas/${area.slug}/`}
                                className="btn btn-outline btn-sm font-normal"
                              >
                                {area.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 関連導線 */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">サービスや料金からも探せます</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/" className="btn btn-primary">
              サービス一覧を見る
            </Link>
            <Link href="/price/" className="btn btn-outline">
              料金相場を見る
            </Link>
            <Link href="/guide/" className="btn btn-outline">
              業者選びガイド
            </Link>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <p className="font-bold text-lg">クリーンナビ</p>
          <p>ハウスクリーニング業者の比較・検索サイト</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link href="/price/" className="link link-hover">料金相場</Link>
            <Link href="/guide/" className="link link-hover">業者選びガイド</Link>
            <Link href="/faq/" className="link link-hover">よくある質問</Link>
            <Link href="/sitemap/" className="link link-hover">サイトマップ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
