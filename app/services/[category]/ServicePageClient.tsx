"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Star, MapPin, DollarSign, ChevronDown } from "lucide-react";

// 実在業者データ
const COMPANIES = [
  {
    id: 1,
    name: "おそうじ本舗",
    category: "aircon",
    rating: 4.5,
    reviewCount: 1200,
    price: 12100,
    area: "全国対応（約1,900店舗）",
    image: "/images/service-aircon.png",
    features: ["全国約1,900店舗", "特許取得ファインバブル洗浄", "損害保険加入"],
  },
  {
    id: 2,
    name: "ダスキン サービスマスター",
    category: "bathroom",
    rating: 4.6,
    reviewCount: 890,
    price: 19800,
    area: "全国対応（約1,600拠点）",
    image: "/images/service-bathroom.png",
    features: ["創業60年以上", "全国約1,600拠点", "定期サービス対応"],
  },
  {
    id: 3,
    name: "おそうじ革命",
    category: "aircon",
    rating: 4.7,
    reviewCount: 680,
    price: 9980,
    area: "全国対応（約420店舗）",
    image: "/images/service-aircon.png",
    features: ["業界最安クラス", "50日間の研修", "追加料金なし"],
  },
  {
    id: 4,
    name: "東京ガス ハウスクリーニング",
    category: "kitchen",
    rating: 4.8,
    reviewCount: 950,
    price: 19800,
    area: "東京・神奈川・千葉・埼玉",
    image: "/images/service-kitchen.png",
    features: ["大手ガス会社運営", "高品質サービス", "Webで簡単予約"],
  },
  {
    id: 5,
    name: "カジタク（イオングループ）",
    category: "bathroom",
    rating: 4.4,
    reviewCount: 720,
    price: 16500,
    area: "全国対応",
    image: "/images/service-bathroom.png",
    features: ["イオングループ", "仕上がり満足保証", "防カビコーティング"],
  },
  {
    id: 6,
    name: "ベアーズ",
    category: "kitchen",
    rating: 4.5,
    reviewCount: 580,
    price: 17600,
    area: "東京・神奈川・千葉・埼玉・大阪・兵庫",
    image: "/images/service-kitchen.png",
    features: ["家事代行大手", "セット割引", "定期利用対応"],
  },
];

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

  // フィルター処理
  let filteredCompanies = COMPANIES.filter((c) => c.category === category);

  if (priceFilter !== "all") {
    if (priceFilter === "low") {
      filteredCompanies = filteredCompanies.filter((c) => c.price < 13000);
    } else if (priceFilter === "high") {
      filteredCompanies = filteredCompanies.filter((c) => c.price >= 13000);
    }
  }

  if (areaFilter !== "all") {
    filteredCompanies = filteredCompanies.filter((c) =>
      c.area.includes(areaFilter)
    );
  }

  // ソート処理
  if (sortBy === "popular") {
    filteredCompanies.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "price-low") {
    filteredCompanies.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredCompanies.sort((a, b) => b.price - a.price);
  } else if (sortBy === "reviews") {
    filteredCompanies.sort((a, b) => b.reviewCount - a.reviewCount);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">クリーンナビ</h1>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/services/aircon"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              エアコン
            </Link>
            <Link
              href="/services/bathroom"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              浴室
            </Link>
            <Link
              href="/services/kitchen"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              キッチン
            </Link>
          </nav>
        </div>
      </header>

      {/* ページタイトル */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {categoryInfo?.title || "サービス一覧"}
          </h2>
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
                  <option value="東京">東京</option>
                  <option value="神奈川">神奈川</option>
                  <option value="埼玉">埼玉</option>
                  <option value="千葉">千葉</option>
                </select>
              </div>

              {/* 評価 */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  評価
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>4.5以上</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>4.0以上</span>
                  </label>
                </div>
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
                  <option value="popular">人気順</option>
                  <option value="price-low">価格が安い順</option>
                  <option value="price-high">価格が高い順</option>
                  <option value="reviews">口コミ数順</option>
                </select>
              </div>
            </div>

            {/* 業者リスト */}
            <div className="space-y-6">
              {filteredCompanies.map((company) => (
                <Link
                  key={company.id}
                  href={`/company/${company.id}`}
                  className="block bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-64 h-48 md:h-auto">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {company.name}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold">
                                {company.rating}
                              </span>
                              <span>({company.reviewCount}件)</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{company.area}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            ¥{company.price.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500">〜</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {company.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                          詳細を見る
                        </button>
                        <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                          お気に入り
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
