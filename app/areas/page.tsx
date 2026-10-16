import Link from "next/link";
import AreaAccordion from "@/app/components/AreaAccordion";
import areaMap from "@/app/data/areaMap.json";
const AREA_TOTAL = Object.keys(areaMap).length;
import Reveal from "@/app/components/Reveal";

const TITLE = "地域からハウスクリーニング業者を探す | クリーンナビ";
const DESCRIPTION =
  "全国のハウスクリーニング業者の比較ページを、都道府県・市区別に掲載しています。東京・大阪・名古屋・横浜・札幌・福岡など、お住まいの地域の業者と料金相場をご確認いただけます。";

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
        url: "https://cleaning-choices.com/og-image.png?v=20261016",
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
    images: ["https://cleaning-choices.com/og-image.png?v=20261016"],
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
            都道府県・市区ごとに、対応する業者・店舗の情報や料金相場、地域の特性に応じた清掃のポイントを掲載しています。
            お住まいのエリアを選び、業者選びにお役立てください。
          </p>
        </div>
      </section>

      {/* エリアの一覧（TOP と同じ折りたたみ形式・2026-10-16 旧テンプレの全数チェックで置き換え） */}
      <AreaAccordion />
      <Reveal />

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

    </div>
  );
}
