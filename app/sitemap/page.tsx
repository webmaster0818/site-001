import Link from "next/link";
import { AREA_INDEX, areaLabel, PREF_PAGES } from "@/app/components/areaIndexData";

const TITLE = "サイトマップ | クリーンナビ";
const DESCRIPTION =
  "クリーンナビの全ページ一覧です。ハウスクリーニングのサービス別・地域別比較ページ、料金相場、ランキング、業者選びガイドなど、すべてのコンテンツをカテゴリ別にご案内します。";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://cleaning-choices.com/sitemap/",
    siteName: "クリーンナビ",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: {
    canonical: "https://cleaning-choices.com/sitemap/",
  },
};

type PageLink = { href: string; name: string };

const basicPages: PageLink[] = [
  { href: "/", name: "トップページ" },
  { href: "/price/", name: "料金相場" },
  { href: "/guide/", name: "業者選びガイド" },
  { href: "/faq/", name: "よくある質問（FAQ）" },
  { href: "/about/", name: "運営者情報" },
  { href: "/contact/", name: "お問い合わせ" },
  { href: "/privacy/", name: "プライバシーポリシー" },
  { href: "/terms/", name: "利用規約" },
  { href: "/sitemap/", name: "サイトマップ" },
  { href: "/for-business/", name: "掲載をご希望の事業者さまへ" },
];

const prefDbPages: PageLink[] = PREF_PAGES.map((p) => ({
  href: `/areas/${p.slug}/`,
  name: p.name,
}));

const servicePages: PageLink[] = [
  { href: "/services/", name: "サービス一覧" },
  { href: "/services/aircon/", name: "エアコンクリーニング" },
  { href: "/services/bathroom/", name: "浴室クリーニング" },
  { href: "/services/kitchen/", name: "キッチンクリーニング" },
  { href: "/services-detail/ventilation/", name: "換気扇・レンジフードクリーニング" },
  { href: "/services-detail/toilet/", name: "トイレクリーニング" },
  { href: "/services-detail/washroom/", name: "洗面所クリーニング" },
  { href: "/services-detail/washing-machine/", name: "洗濯機クリーニング（分解洗浄）" },
  { href: "/services-detail/window/", name: "窓・サッシクリーニング" },
  { href: "/services-detail/balcony/", name: "ベランダ・バルコニークリーニング" },
  { href: "/services-detail/floor-wax/", name: "床ワックスがけ（フローリング）" },
  { href: "/services-detail/carpet/", name: "カーペット・絨毯クリーニング" },
  { href: "/services-detail/sofa/", name: "ソファクリーニング" },
  { href: "/services-detail/whole-house/", name: "家全体・空室まるごとクリーニング" },
];

const rankingPages: PageLink[] = [
  { href: "/ranking/", name: "業者ランキング一覧" },
  { href: "/ranking/aircon-ranking/", name: "エアコンクリーニング業者ランキング" },
  { href: "/ranking/bathroom-ranking/", name: "浴室クリーニング業者ランキング" },
  { href: "/ranking/cheap-ranking/", name: "料金が安い業者ランキング" },
  { href: "/ranking/review-ranking/", name: "口コミ評価が高い業者ランキング" },
  { href: "/ranking/quick-service/", name: "即日対応可能な業者まとめ" },
];

const comparisonPages: PageLink[] = [
  { href: "/comparison/major-3-comparison/", name: "大手3社徹底比較" },
  { href: "/comparison/area-price-comparison/", name: "エリア別料金相場比較" },
  { href: "/comparison/time-comparison/", name: "作業時間・所要時間比較" },
  { href: "/comparison/warranty-comparison/", name: "保証・補償制度比較" },
  { href: "/comparison/coupon-info/", name: "クーポン・割引情報まとめ" },
];

const guideDetailPages: PageLink[] = [
  { href: "/guide-detail/aircon-frequency/", name: "エアコンクリーニングの頻度" },
  { href: "/guide-detail/bathroom-mold/", name: "浴室のカビ対策" },
  { href: "/guide-detail/kitchen-oil/", name: "キッチンの油汚れ対策" },
  { href: "/guide-detail/cleaning-timing/", name: "ハウスクリーニングのタイミング" },
  { href: "/guide-detail/before-checklist/", name: "依頼前のチェックリスト" },
  { href: "/guide-detail/diy-vs-pro/", name: "自分でできる掃除vs業者" },
  { href: "/guide-detail/trouble-cases/", name: "トラブル事例と対処法" },
];

const scenePages: PageLink[] = [
  { href: "/scene/", name: "シーン別一覧" },
  { href: "/scene/year-end-package/", name: "年末大掃除パッケージ" },
  { href: "/scene/moving-aircon/", name: "引越し前エアコンクリーニング" },
  { href: "/scene/new-house/", name: "新築・リフォーム後クリーニング" },
  { href: "/scene/airbnb/", name: "民泊・Airbnb向けクリーニング" },
  { href: "/scene/office/", name: "事務所・オフィスクリーニング" },
];

const companyPages: PageLink[] = [
  { href: "/company/1/", name: "おそうじ本舗" },
  { href: "/company/2/", name: "ダスキン サービスマスター" },
];

function LinkSection({ title, pages }: { title: string; pages: PageLink[] }) {
  return (
    <div className="card bg-base-100 shadow border border-base-200">
      <div className="card-body">
        <h2 className="card-title text-xl border-b border-base-200 pb-2">{title}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 mt-2">
          {pages.map((page) => (
            <li key={page.href}>
              <Link href={page.href} className="link link-hover text-sm">
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* パンくずリスト */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/sitemap/">サイトマップ</Link></li>
          </ul>
        </div>
      </div>

      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">サイトマップ</h1>
          <p className="text-lg max-w-3xl mx-auto">
            クリーンナビの全ページをカテゴリ別にご案内します。
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            <LinkSection title="基本ページ" pages={basicPages} />
            <LinkSection title="サービス別ページ" pages={servicePages} />
            <LinkSection title="ランキング" pages={rankingPages} />
            <LinkSection title="業者比較・お得情報" pages={comparisonPages} />
            <LinkSection title="お役立ちガイド" pages={guideDetailPages} />
            <LinkSection title="シーン別ページ" pages={scenePages} />
            <LinkSection title="掲載業者" pages={companyPages} />
            <LinkSection title="都道府県別 店舗データベース" pages={prefDbPages} />

            {/* 地域別ページ */}
            <div className="card bg-base-100 shadow border border-base-200">
              <div className="card-body">
                <h2 className="card-title text-xl border-b border-base-200 pb-2">
                  地域別ページ
                </h2>
                <p className="text-sm mt-2">
                  <Link href="/areas/" className="link link-hover font-bold">
                    地域から探す（一覧）
                  </Link>
                </p>
                <div className="space-y-4 mt-2">
                  {AREA_INDEX.map((pref) => (
                    <div key={pref.pref}>
                      <h3 className="font-bold text-base-content/70 mb-1">{pref.pref}</h3>
                      <ul className="flex flex-wrap gap-x-4 gap-y-1">
                        {pref.cities.map((group) =>
                          group.areas.map((area) => (
                            <li key={area.slug}>
                              <Link
                                href={`/areas/${area.slug}/`}
                                className="link link-hover text-sm"
                              >
                                {areaLabel(group, area)}
                              </Link>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
