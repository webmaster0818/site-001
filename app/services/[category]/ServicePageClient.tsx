"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { partnersByTag, type ServiceTag } from "../../data/partners";
import captures from "../../data/partner-captures.json";

// 実在業者データ
const COMPANIES = [
  {
    id: 1,
    name: "おそうじ本舗",
    category: "aircon",
    price: 12100,
    area: "全国対応（約1,900店舗）",
    image: "/images/partners/osoujihonpo.webp",
    features: ["全国約1,900店舗", "特許取得ファインバブル洗浄", "損害保険加入"],
  },
  {
    id: 2,
    name: "ダスキン サービスマスター",
    category: "bathroom",
    price: 19800,
    area: "全国対応（約1,600拠点）",
    image: "/images/partners/duskin.webp",
    features: ["創業60年以上", "全国約1,600拠点", "定期サービス対応"],
  },
  {
    id: 4,
    name: "東京ガス ハウスクリーニング",
    category: "kitchen",
    price: 19800,
    area: "東京・神奈川・埼玉・千葉と群馬・茨城の一部",
    image: "/images/partners/tokyogas.webp",
    features: ["東京ガスが提供", "土日祝も対応（12/29〜1/4除く）", "支払いはクレジットカードのみ"],
  },
  {
    id: 6,
    name: "ベアーズ",
    category: "kitchen",
    price: 18920,
    area: "東京・神奈川・千葉・埼玉・大阪・兵庫",
    image: "/images/partners/bears.webp",
    features: ["家事代行大手", "セット割引", "定期利用対応"],
  },
];

// 対応エリアの絞り込み（2026-10-16 MediaXAI「対応エリアって何でこんな少ないの？」＝東京・神奈川・埼玉・千葉の4つしか無かった）。
// 47都道府県から選べるようにし、業者の対応エリア文（公式の記載の要約）に県名・地方名・「全国」があれば該当とする。
const PREFS = ["北海道","青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","徳島","香川","愛媛","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"];
const REGION: Record<string, string[]> = {
  関東: ["茨城","栃木","群馬","埼玉","千葉","東京","神奈川"], 首都圏: ["埼玉","千葉","東京","神奈川"], "1都3県": ["埼玉","千葉","東京","神奈川"],
  関西: ["滋賀","京都","大阪","兵庫","奈良","和歌山"], 近畿: ["滋賀","京都","大阪","兵庫","奈良","和歌山"], 東海: ["岐阜","静岡","愛知","三重"],
  九州: ["福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島"], 東北: ["青森","岩手","宮城","秋田","山形","福島"],
};
function servesPref(area: string, pref: string): boolean {
  if (/全国|47都道府県/.test(area)) return true;
  if (area.includes(pref)) return true;
  return Object.entries(REGION).some(([r, ps]) => area.includes(r) && ps.includes(pref));
}

const CATEGORY_INFO = {
  aircon: {
    title: "エアコンクリーニング",
    description: "プロの技術でカビ・ホコリを徹底除去。快適な空気環境を取り戻します。",
  },
  bathroom: {
    title: "浴室クリーニング",
    description: "頑固な水垢・カビもピカピカに。毎日のバスタイムを快適に。",
  },
  kitchen: {
    title: "キッチンクリーニング",
    description: "油汚れ・焦げ付きもスッキリ。清潔なキッチンで料理を楽しく。",
  },
};

export default function ServicePageClient({ category }: { category: string }) {
  const [sortBy, setSortBy] = useState("popular");
  const [priceFilter, setPriceFilter] = useState("all");
  const [areaFilter, setAreaFilter] = useState("all");

  const categoryInfo = CATEGORY_INFO[category as keyof typeof CATEGORY_INFO];

  // 一覧＝大手ブランド（COMPANIES）＋このサービスを公式に扱う提携業者（partners.ts）。
  // 2026-10-16 MediaXAI「『2件の業者が見つかりました』がなぜ少ないの？下の提携業者には多くあるのに」
  // → 以前は COMPANIES（1社1サービス）だけを読んでいて、提携11社とつながっていなかった。
  //   おそうじ革命・カジタクは提携側に公式確認済みのデータがあるので提携側だけを出す（二重に出さない）。
  const tag = (["aircon", "bathroom", "kitchen"].includes(category) ? category : "whole") as ServiceTag;
  const KW: Record<string, RegExp> = { aircon: /エアコン|壁掛け/, bathroom: /浴室|風呂/, kitchen: /キッチン|レンジ/ };
  const capAt = (slug: string) => (captures as { slug: string; captured_at: string }[]).find((c) => c.slug === slug)?.captured_at ?? "2026-10-16";
  const jp = (d: string) => { const [y, m, dd] = d.split("-").map(Number); return `${y}年${m}月${dd}日`; };
  const yen = (t: string) => { const m = t.replace(/,/g, "").match(/(\d{4,6})円/); return m ? Number(m[1]) : NaN; };
  type Row = { key: string; name: string; href: string; image: string; caption: string; area: string; priceText: string; price: number;
    features: string[]; pr?: { url: string; label: string; pixel?: string }; company?: string };
  // 提携側に移した2社にも、会社ページ（/company/3/・/company/5/）への導線を残す
  const COMPANY_PAGE: Record<string, string> = { osoujikakumei: "/company/3/", kajitaku: "/company/5/" };
  const rows: Row[] = [
    ...COMPANIES.filter((c) => c.category === category).map((c) => ({
      key: `c${c.id}`, name: c.name, href: `/company/${c.id}/`, image: c.image, caption: `出典：${c.name} 公式サイト（2026年10月16日時点）`,
      area: c.area, priceText: `${c.price.toLocaleString()}円〜`, price: c.price, features: c.features,
    })),
    ...partnersByTag(tag).map((p) => {
      // このサービスの料金が partners.ts に無い業者は、別メニューの料金を出さない（浴室ページにエアコン料金が出ていた）
      const pr = KW[category] ? p.prices.find((x) => KW[category].test(x.menu)) : p.prices[0];
      return {
        key: p.slug, name: p.name, href: `/review/${p.slug}/`, image: `/images/partners/${p.slug}.webp`,
        caption: `出典：${p.name} 公式サイト（${jp(capAt(p.slug))}時点）`, area: p.area,
        priceText: pr ? `${pr.menu} ${pr.price}` : `${categoryInfo?.title ?? "このサービス"}の料金は検証ページで確認`, price: pr ? yen(pr.price) : NaN, features: [p.company],
        pr: p.affiliateUrl ? { url: p.affiliateUrl, label: p.affiliateLabel ?? `${p.name}の公式サイトへ`, pixel: p.affiliatePixel } : undefined,
        company: COMPANY_PAGE[p.slug],
      };
    }),
  ];
  let filteredCompanies = rows;

  if (priceFilter !== "all") {
    if (priceFilter === "low") {
      filteredCompanies = filteredCompanies.filter((c) => c.price < 13000);
    } else if (priceFilter === "high") {
      filteredCompanies = filteredCompanies.filter((c) => c.price >= 13000);
    }
  }

  if (areaFilter !== "all") {
    filteredCompanies = filteredCompanies.filter((c) => servesPref(c.area, areaFilter));
  }

  // ソート処理
  if (sortBy === "price-low") {
    filteredCompanies.sort((a, b) => (isNaN(a.price) ? 1e9 : a.price) - (isNaN(b.price) ? 1e9 : b.price));
  } else if (sortBy === "price-high") {
    filteredCompanies.sort((a, b) => (isNaN(b.price) ? -1 : b.price) - (isNaN(a.price) ? -1 : a.price));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}

      {/* ページタイトル */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {categoryInfo?.title || "サービス一覧"}
          </h1>
          <p className="text-lg opacity-90">
            {categoryInfo?.description || ""}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* フィルターサイドバー */}
          <aside className="lg:w-64 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">絞り込み</h3>

              {/* 価格帯 */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  価格帯
                </label>
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">すべて</option>
                  <option value="low">〜13,000円</option>
                  <option value="high">13,000円〜</option>
                </select>
              </div>

              {/* エリア */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  対応エリア
                </label>
                <select
                  value={areaFilter}
                  onChange={(e) => setAreaFilter(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">すべて</option>
                  {PREFS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

            </div>
          </aside>

          {/* メインコンテンツ */}
          <main className="flex-1">
            {/* ソート */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                {filteredCompanies.length}件の業者が見つかりました
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-700">並び替え:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="popular">おすすめ順</option>
                  <option value="price-low">価格が安い順</option>
                  <option value="price-high">価格が高い順</option>
                </select>
              </div>
            </div>

            {/* 業者リスト */}
            <div className="space-y-6">
              {filteredCompanies.map((company) => (
                <div key={company.key} className="block bg-white rounded-lg overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <figure className="md:w-72 p-3 m-0 flex-none">
                      <a href={company.href}>
                        <img
                          src={company.image}
                          alt={`${company.name} 公式サイトのトップページ`}
                          className="w-full h-auto aspect-[16/10] object-cover object-top border border-[#e3ecec]"
                        />
                      </a>
                      <figcaption className="mt-1 text-[11px] text-gray-500">{company.caption}</figcaption>
                    </figure>
                    <div className="flex-1 p-5">
                      <h3 className="text-lg font-bold mb-1"><a href={company.href}>{company.name}</a></h3>
                      <p className="text-xs text-gray-500 mb-2">{company.features.join("・")}{company.company && <> ・<a className="underline" href={company.company}>会社情報</a></>}</p>
                      <p className="text-sm font-bold mb-1"><span className="text-xs font-normal text-gray-500 mr-2">公式料金</span>{company.priceText}</p>
                      <p className="text-xs text-gray-500 mb-4 flex gap-1"><MapPin className="w-4 h-4 flex-none" /><span>{company.area}</span></p>
                      <div className="grid gap-2 md:grid-cols-2">
                        <a className="cn-btn cn-btn-outline" href={company.href}>{company.href.startsWith("/review/") ? "口コミ・評判と料金の検証を見る" : "詳細を見る"}</a>
                        {company.pr && (
                          <>
                            <a href={company.pr.url} rel="sponsored nofollow noopener" target="_blank" className="cn-btn cn-btn-primary cn-btn-pr">
                              <span className="cn-pr">PR</span>{company.pr.label}
                            </a>
                            {company.pr.pixel && <img width={1} height={1} src={company.pr.pixel} alt="" style={{ border: "none" }} />}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <p className="container mx-auto px-4 pb-10 text-xs text-gray-500">「PR」のボタンは提携先の公式サイトへ移動します（広告の有無は掲載内容・評価に影響しません）。料金は各社公式サイトの表記のままで、地域・機種により異なります。画像は各社公式サイトのトップページを当サイトが撮影したものです。</p>
    </div>
  );
}
