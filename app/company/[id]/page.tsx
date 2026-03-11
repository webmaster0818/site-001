"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Star,
  MapPin,
  Clock,
  Shield,
  Phone,
  Mail,
  X,
} from "lucide-react";

// 仮データ
const COMPANY_DATA: { [key: string]: any } = {
  "1": {
    id: 1,
    name: "クリーンプロ東京",
    category: "エアコンクリーニング",
    rating: 4.8,
    reviewCount: 245,
    price: 12000,
    area: "東京23区",
    image: "https://placehold.co/800x600/3b82f6/ffffff?text=CleanPro",
    description:
      "創業15年の実績を持つ、エアコンクリーニング専門業者です。完全分解洗浄により、内部のカビやホコリを徹底的に除去します。作業スタッフは全員、自社研修を受けた正社員のため、高品質なサービスをお約束します。",
    features: [
      "即日対応可能",
      "土日祝日も営業",
      "損害保険加入済み",
      "完全分解洗浄",
      "防カビコート無料",
    ],
    services: [
      { name: "壁掛けエアコン", price: 12000 },
      { name: "お掃除機能付きエアコン", price: 18000 },
      { name: "業務用エアコン", price: 25000 },
    ],
    workingHours: "9:00〜19:00（年中無休）",
    phone: "03-1234-5678",
    email: "info@cleanpro-tokyo.jp",
    reviews: [
      {
        id: 1,
        author: "田中さん（40代女性）",
        rating: 5,
        date: "2026-03-05",
        comment:
          "エアコンから嫌な臭いがしていたのですが、クリーニング後は新品のように快適になりました！作業も丁寧で、スタッフの方の対応も素晴らしかったです。",
      },
      {
        id: 2,
        author: "佐藤さん（30代男性）",
        rating: 4,
        date: "2026-03-01",
        comment:
          "価格も良心的で、作業時間も予定通りでした。ただ、予約が取りにくい時期があるので、早めの予約がおすすめです。",
      },
      {
        id: 3,
        author: "山田さん（50代女性）",
        rating: 5,
        date: "2026-02-20",
        comment:
          "お掃除機能付きエアコンは高くなるかと思いましたが、他社より安くて驚きました。仕上がりもピカピカで大満足です！",
      },
    ],
  },
  "2": {
    id: 2,
    name: "ピカピカハウス",
    category: "浴室クリーニング",
    rating: 4.6,
    reviewCount: 189,
    price: 18000,
    area: "東京・神奈川",
    image: "https://placehold.co/800x600/3b82f6/ffffff?text=PikaPika",
    description:
      "浴室クリーニングのスペシャリスト。頑固な水垢やカビを専用の洗剤と技術で徹底除去します。女性スタッフも在籍しており、一人暮らしの女性でも安心してご利用いただけます。",
    features: [
      "女性スタッフ在籍",
      "見積もり無料",
      "リピート割引あり",
      "エコ洗剤使用",
      "防カビコーティング",
    ],
    services: [
      { name: "浴室クリーニング", price: 18000 },
      { name: "浴室 + 洗面所", price: 25000 },
      { name: "浴室 + トイレ", price: 26000 },
    ],
    workingHours: "10:00〜18:00（月曜定休）",
    phone: "045-234-5678",
    email: "contact@pikapika.jp",
    reviews: [
      {
        id: 1,
        author: "鈴木さん（30代女性）",
        rating: 5,
        date: "2026-03-08",
        comment:
          "女性スタッフが来てくれて安心でした。カビだらけだった浴室が見違えるほどキレイになりました！",
      },
      {
        id: 2,
        author: "高橋さん（40代女性）",
        rating: 4,
        date: "2026-02-28",
        comment:
          "丁寧な作業で満足しています。もう少し早く予約が取れるといいなと思いました。",
      },
    ],
  },
};

export default function CompanyPage({ params }: { params: { id: string } }) {
  const [showContactModal, setShowContactModal] = useState(false);
  const company = COMPANY_DATA[params.id];

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            業者が見つかりません
          </h2>
          <Link href="/" className="text-blue-600 hover:underline">
            トップページに戻る
          </Link>
        </div>
      </div>
    );
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
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* パンくずリスト */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/services/${company.category}`} className="hover:text-blue-600">
            {company.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{company.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* メインコンテンツ */}
          <div className="lg:col-span-2 space-y-6">
            {/* メイン画像 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={company.image}
                alt={company.name}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* 業者情報 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {company.name}
                  </h2>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-lg">
                        {company.rating}
                      </span>
                      <span>({company.reviewCount}件の口コミ)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-5 h-5" />
                      <span>{company.area}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {company.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {company.features.map((feature: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* サービス・料金 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                サービス・料金
              </h3>
              <div className="space-y-4">
                {company.services.map((service: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-4 border-b last:border-b-0"
                  >
                    <div className="font-medium text-gray-900">
                      {service.name}
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      ¥{service.price.toLocaleString()}〜
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 口コミ */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                お客様の声
              </h3>
              <div className="space-y-6">
                {company.reviews.map((review: any) => (
                  <div key={review.id} className="border-b last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">
                        {review.author}
                      </span>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* サイドバー */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-600 mb-1">基本料金</div>
                <div className="text-4xl font-bold text-blue-600 mb-1">
                  ¥{company.price.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">〜</div>
              </div>

              <button
                onClick={() => setShowContactModal(true)}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition mb-4"
              >
                お問い合わせ
              </button>

              <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-lg font-bold hover:bg-blue-50 transition mb-6">
                お気に入りに追加
              </button>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      営業時間
                    </div>
                    <div className="text-gray-600">{company.workingHours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">電話</div>
                    <div className="text-blue-600">{company.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      メール
                    </div>
                    <div className="text-blue-600 break-all">
                      {company.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      保証・保険
                    </div>
                    <div className="text-gray-600">損害保険加入済み</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* お問い合わせモーダル */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              お問い合わせ
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="090-1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  希望日時
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="例: 3月15日 14:00〜"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  お問い合わせ内容
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="ご質問やご要望をご記入ください"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
