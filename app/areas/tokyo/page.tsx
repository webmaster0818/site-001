"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, MapPin, Star, Building2, Train } from "lucide-react";

// 仮データ - 東京エリア対応業者
const TOKYO_COMPANIES = [
  {
    id: 1,
    name: "クリーンプロ東京",
    service: "エアコンクリーニング",
    rating: 4.8,
    reviewCount: 245,
    price: 12000,
    area: "東京23区全域",
    image: "https://placehold.co/400x300/3b82f6/ffffff?text=CleanPro",
    features: ["即日対応可", "土日祝OK", "保険加入"],
  },
  {
    id: 3,
    name: "エアコンマスター",
    service: "エアコンクリーニング",
    rating: 4.9,
    reviewCount: 312,
    price: 10000,
    area: "東京・埼玉",
    image: "https://placehold.co/400x300/3b82f6/ffffff?text=AirconMaster",
    features: ["業界最安値", "完全分解洗浄", "防カビコート無料"],
  },
  {
    id: 6,
    name: "総合クリーンサービス",
    service: "総合クリーニング",
    rating: 4.8,
    reviewCount: 278,
    price: 14000,
    area: "東京全域",
    image: "https://placehold.co/400x300/3b82f6/ffffff?text=Total",
    features: ["セット割引", "定期契約割引", "24時間受付"],
  },
];

// 東京23区
const TOKYO_23_WARDS = [
  "千代田区", "中央区", "港区", "新宿区", "文京区", "台東区",
  "墨田区", "江東区", "品川区", "目黒区", "大田区", "世田谷区",
  "渋谷区", "中野区", "杉並区", "豊島区", "北区", "荒川区",
  "板橋区", "練馬区", "足立区", "葛飾区", "江戸川区"
];

// 主要市
const MAJOR_CITIES = [
  "八王子市", "立川市", "武蔵野市", "三鷹市", "府中市",
  "調布市", "町田市", "小金井市", "国分寺市", "国立市"
];

export default function TokyoAreaPage() {
  const [selectedWard, setSelectedWard] = useState<string>("all");

  // エリアフィルター
  let filteredCompanies = TOKYO_COMPANIES;
  if (selectedWard !== "all") {
    filteredCompanies = TOKYO_COMPANIES.filter((c) =>
      c.area.includes(selectedWard) || c.area.includes("東京全域") || c.area.includes("東京23区")
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">クリーンナビ</h1>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/services/aircon" className="text-gray-700 hover:text-blue-600 transition">
              エアコン
            </Link>
            <Link href="/services/bathroom" className="text-gray-700 hover:text-blue-600 transition">
              浴室
            </Link>
            <Link href="/services/kitchen" className="text-gray-700 hover:text-blue-600 transition">
              キッチン
            </Link>
          </nav>
        </div>
      </header>

      {/* ページヘッダー */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-12 h-12" />
            <h2 className="text-4xl md:text-5xl font-bold">
              東京エリア ハウスクリーニング業者
            </h2>
          </div>
          <p className="text-xl opacity-90 max-w-3xl">
            東京23区および多摩地域に対応する信頼できるハウスクリーニング業者をご紹介。
            即日対応可能な業者も多数掲載しています。
          </p>
        </div>
      </section>

      {/* エリア説明 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              東京エリアのハウスクリーニングサービス
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                東京都は日本最大の都市圏であり、多くのハウスクリーニング業者が営業しています。
                クリーンナビでは、東京23区および多摩地域全域に対応する優良業者を厳選して掲載しています。
              </p>
              <p>
                エアコンクリーニング、浴室クリーニング、キッチンクリーニングなど、
                様々なサービスに対応した業者をご紹介。料金や口コミを比較して、
                あなたに最適な業者を見つけることができます。
              </p>
              <p>
                東京エリアでは、即日対応可能な業者や、土日祝日も営業している業者が多数あります。
                お急ぎの方でも安心してご利用いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 対応エリア */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">対応エリア</h3>
            </div>

            {/* 23区 */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">東京23区</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {TOKYO_23_WARDS.map((ward) => (
                  <div
                    key={ward}
                    className="text-sm text-gray-700 bg-blue-50 px-3 py-2 rounded text-center hover:bg-blue-100 transition"
                  >
                    {ward}
                  </div>
                ))}
              </div>
            </div>

            {/* 主要市 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">多摩地域（主要市）</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {MAJOR_CITIES.map((city) => (
                  <div
                    key={city}
                    className="text-sm text-gray-700 bg-green-50 px-3 py-2 rounded text-center hover:bg-green-100 transition"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ業者 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            東京エリアのおすすめ業者
          </h3>

          <div className="max-w-5xl mx-auto space-y-6">
            {filteredCompanies.map((company) => (
              <Link
                key={company.id}
                href={`/company/${company.id}`}
                className="block bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden border border-gray-200"
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
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {company.name}
                        </h4>
                        <div className="text-sm text-gray-600 mb-2">
                          {company.service}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{company.rating}</span>
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
                        お見積もり依頼
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            お見積もりは無料！お気軽にご相談ください
          </h3>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            東京エリアの優良ハウスクリーニング業者があなたのご要望にお応えします。
            複数社の見積もりを比較して、最適な業者を見つけましょう。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/services/aircon"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              サービスを探す
            </Link>
            <button className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition shadow-lg">
              一括見積もり依頼
            </button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <h5 className="text-xl font-bold">クリーンナビ</h5>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              ハウスクリーニング業者を簡単比較・予約できるサービスです。
            </p>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2026 クリーンナビ All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
