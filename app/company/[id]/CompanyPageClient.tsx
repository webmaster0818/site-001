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

// 実在業者データ
const COMPANY_DATA: { [key: string]: any } = {
  "1": {
    id: 1,
    name: "おそうじ本舗",
    category: "エアコンクリーニング",
    rating: 4.5,
    reviewCount: 1200,
    price: 12100,
    area: "全国対応（約1,900店舗）",
    image: "/images/companies/osouji-honpo.png",
    description:
      "全国約1,900店舗を展開する業界最大手のハウスクリーニングチェーン。特許取得の「ファインバブルエアコンクリーニング」で、微細な泡が奥のカビ・汚れまで徹底除去。スタッフは全員、独自の研修プログラムを修了した有資格者です。",
    features: [
      "全国約1,900店舗展開",
      "特許取得のファインバブル洗浄",
      "損害保険加入済み",
      "完全分解洗浄対応",
      "Webで簡単予約",
    ],
    services: [
      { name: "壁掛けエアコン", price: 12100 },
      { name: "お掃除機能付きエアコン", price: 20900 },
      { name: "天井埋込エアコン", price: 27500 },
    ],
    workingHours: "9:00〜20:00（店舗により異なる）",
    phone: "公式サイトからWeb予約",
    email: "公式サイトの問い合わせフォームをご利用ください",
    reviews: [
      {
        id: 1,
        author: "利用者A（40代女性）",
        rating: 5,
        date: "2026-03-05",
        comment:
          "ファインバブル洗浄で、エアコンの嫌な臭いが完全に消えました。作業後の汚水を見てびっくり。スタッフの方の説明も丁寧で安心してお任せできました。",
      },
      {
        id: 2,
        author: "利用者B（30代男性）",
        rating: 4,
        date: "2026-03-01",
        comment:
          "繁忙期は予約が取りにくいですが、技術力は確か。お掃除機能付きエアコンも対応してもらえて助かりました。",
      },
      {
        id: 3,
        author: "利用者C（50代女性）",
        rating: 5,
        date: "2026-02-20",
        comment:
          "3年ぶりのエアコンクリーニングでしたが、新品のように綺麗になりました。全国チェーンなので安心感があります。",
      },
    ],
  },
  "2": {
    id: 2,
    name: "ダスキン サービスマスター",
    category: "浴室クリーニング",
    rating: 4.6,
    reviewCount: 890,
    price: 19800,
    area: "全国対応（約1,600拠点）",
    image: "/images/companies/duskin.png",
    description:
      "1963年創業の老舗クリーニングブランド。全国約1,600拠点で展開し、浴室クリーニングをはじめとする各種ハウスクリーニングを提供。専門的な技術と設備を持ち、高い清掃スキルを持ったスタッフが在籍。トラブル時のサポート体制も万全です。",
    features: [
      "創業60年以上の実績",
      "全国約1,600拠点",
      "損害保険加入済み",
      "プロの研修制度",
      "定期サービスも対応",
    ],
    services: [
      { name: "浴室クリーニング", price: 19800 },
      { name: "浴室 + 洗面所セット", price: 28600 },
      { name: "浴室 + トイレセット", price: 29700 },
    ],
    workingHours: "9:00〜17:00（店舗により異なる）",
    phone: "公式サイトからWeb予約",
    email: "公式サイトの問い合わせフォームをご利用ください",
    reviews: [
      {
        id: 1,
        author: "利用者D（30代女性）",
        rating: 5,
        date: "2026-03-08",
        comment:
          "さすが大手の安心感。浴室の頑固な水垢がピカピカになりました。スタッフの方も礼儀正しく、安心してお任せできました。",
      },
      {
        id: 2,
        author: "利用者E（40代女性）",
        rating: 4,
        date: "2026-02-28",
        comment:
          "料金は少し高めですが、仕上がりの品質は間違いなし。定期サービスも検討しています。",
      },
    ],
  },
};

export default function CompanyPageClient({ id }: { id: string }) {
  const [showContactModal, setShowContactModal] = useState(false);
  const company = COMPANY_DATA[id];

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
