import Link from "next/link";
import {
  AirVent,
  Bath,
  CookingPot,
  Wind,
  WashingMachine,
  Droplets,
  Sofa,
  Layers,
  Sun,
  Home,
  Sparkles,
  Toilet,
  ArrowRight,
} from "lucide-react";

const TITLE = "ハウスクリーニングのサービス一覧 | クリーンナビ";
const DESCRIPTION =
  "エアコン・浴室・キッチンをはじめ、換気扇・トイレ・洗濯機・窓・床ワックスなど全13種類のハウスクリーニングサービスを一覧掲載。各サービスの料金相場・作業内容・業者比較ページへご案内します。";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://cleaning-choices.com/services/",
    siteName: "クリーンナビ",
    images: [
      {
        url: "https://cleaning-choices.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ハウスクリーニングのサービス一覧 - クリーンナビ",
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
    canonical: "https://cleaning-choices.com/services/",
  },
};

// services/[category] の実在カテゴリ（generateStaticParamsと一致）
const mainServices = [
  {
    href: "/services/aircon/",
    name: "エアコンクリーニング",
    description:
      "分解洗浄でエアコン内部のカビ・ホコリを除去。冷暖房効率の改善と空気環境の向上に。最も依頼が多い定番サービスです。",
    icon: <AirVent className="w-10 h-10" />,
  },
  {
    href: "/services/bathroom/",
    name: "浴室クリーニング",
    description:
      "浴槽・天井・床・排水口までプロの技術で徹底洗浄。カビや水垢、石鹸カスをまとめてリセットします。",
    icon: <Bath className="w-10 h-10" />,
  },
  {
    href: "/services/kitchen/",
    name: "キッチンクリーニング",
    description:
      "シンク・コンロ・壁面の油汚れを専用洗剤で除去。毎日使う場所だからこそプロの徹底洗浄がおすすめです。",
    icon: <CookingPot className="w-10 h-10" />,
  },
];

// services-detail 配下の実在10ページ（serviceDetailDataと一致）
const detailServices = [
  {
    href: "/services-detail/ventilation/",
    name: "換気扇・レンジフードクリーニング",
    icon: <Wind className="w-8 h-8" />,
  },
  {
    href: "/services-detail/toilet/",
    name: "トイレクリーニング",
    icon: <Toilet className="w-8 h-8" />,
  },
  {
    href: "/services-detail/washroom/",
    name: "洗面所クリーニング",
    icon: <Droplets className="w-8 h-8" />,
  },
  {
    href: "/services-detail/washing-machine/",
    name: "洗濯機クリーニング（分解洗浄）",
    icon: <WashingMachine className="w-8 h-8" />,
  },
  {
    href: "/services-detail/window/",
    name: "窓・サッシクリーニング",
    icon: <Sun className="w-8 h-8" />,
  },
  {
    href: "/services-detail/balcony/",
    name: "ベランダ・バルコニークリーニング",
    icon: <Home className="w-8 h-8" />,
  },
  {
    href: "/services-detail/floor-wax/",
    name: "床ワックスがけ（フローリング）",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    href: "/services-detail/carpet/",
    name: "カーペット・絨毯クリーニング",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    href: "/services-detail/sofa/",
    name: "ソファクリーニング",
    icon: <Sofa className="w-8 h-8" />,
  },
  {
    href: "/services-detail/whole-house/",
    name: "家全体・空室まるごとクリーニング",
    icon: <Sparkles className="w-8 h-8" />,
  },
];

// scene 配下の実在ページ
const scenes = [
  { href: "/scene/year-end-package/", name: "年末大掃除パッケージ" },
  { href: "/scene/moving-aircon/", name: "引越し前エアコンクリーニング" },
  { href: "/scene/new-house/", name: "新築・リフォーム後クリーニング" },
  { href: "/scene/airbnb/", name: "民泊・Airbnb向けクリーニング" },
  { href: "/scene/office/", name: "事務所・オフィスクリーニング" },
];

export default function ServicesIndex() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* パンくずリスト */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/services/">サービス一覧</Link></li>
          </ul>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ハウスクリーニングのサービス一覧
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            エアコン・浴室・キッチンの定番3サービスから、換気扇・トイレ・窓・床ワックスまで全13種類。
            依頼したい場所のページで、作業内容・料金相場・業者比較を確認できます。
          </p>
        </div>
      </section>

      {/* 主要サービス */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">人気の主要サービス</h2>
          <p className="text-center text-base-content/70 mb-10 max-w-2xl mx-auto">
            依頼件数の多い定番3サービス。対応業者の料金・口コミを比較できます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mainServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="card bg-base-100 shadow-xl border-t-4 border-primary hover:shadow-2xl transition-shadow"
              >
                <div className="card-body">
                  <div className="text-primary mb-3">{service.icon}</div>
                  <h3 className="card-title text-xl">{service.name}</h3>
                  <p className="text-sm text-base-content/80">{service.description}</p>
                  <div className="card-actions justify-end mt-2">
                    <span className="btn btn-primary btn-sm">
                      業者を比較する
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 場所別サービス */}
      <section className="py-14 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">場所別のサービス詳細</h2>
          <p className="text-center text-base-content/70 mb-10 max-w-2xl mx-auto">
            各サービスの作業内容・料金相場の目安・依頼前のポイントを解説しています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {detailServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="card bg-base-100 shadow hover:shadow-lg transition-shadow"
              >
                <div className="card-body flex-row items-center gap-4 py-5">
                  <div className="text-secondary flex-shrink-0">{service.icon}</div>
                  <h3 className="font-bold">{service.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* シーン別 */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">シーン別で探す</h2>
          <p className="text-center text-base-content/70 mb-10 max-w-2xl mx-auto">
            引越し・年末大掃除など、利用シーンに合わせたクリーニングの選び方もご案内しています。
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {scenes.map((scene) => (
              <Link key={scene.href} href={scene.href} className="btn btn-outline">
                {scene.name}
              </Link>
            ))}
            <Link href="/scene/" className="btn btn-primary">
              シーン別一覧を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 関連導線 */}
      <section className="py-14 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">料金や地域からも比較できます</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/price/" className="btn btn-lg bg-white text-primary hover:bg-base-200">
              料金相場を見る
            </Link>
            <Link href="/areas/" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary">
              地域から探す
            </Link>
            <Link href="/ranking/" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary">
              ランキングを見る
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
