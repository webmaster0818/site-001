import Link from "next/link";
import { Sparkles, DollarSign, TrendingUp, Info } from "lucide-react";

// 料金相場データ
const PRICE_DATA = [
  {
    service: "エアコンクリーニング",
    category: "aircon",
    prices: [
      { type: "壁掛けエアコン（通常タイプ）", price: "8,000〜15,000円" },
      { type: "お掃除機能付きエアコン", price: "15,000〜25,000円" },
      { type: "業務用エアコン（天井埋込型）", price: "20,000〜40,000円" },
    ],
    notes: "※2台目以降は割引あり。繁忙期（5〜8月）は料金が上がる場合があります。",
  },
  {
    service: "浴室クリーニング",
    category: "bathroom",
    prices: [
      { type: "浴室のみ", price: "15,000〜20,000円" },
      { type: "浴室+洗面所", price: "20,000〜28,000円" },
      { type: "浴室+トイレ", price: "22,000〜30,000円" },
      { type: "浴室+洗面所+トイレ", price: "28,000〜38,000円" },
    ],
    notes: "※カビ除去、防カビコーティングは追加料金が発生する場合があります。",
  },
  {
    service: "キッチンクリーニング",
    category: "kitchen",
    prices: [
      { type: "キッチン全体", price: "12,000〜18,000円" },
      { type: "換気扇・レンジフード", price: "10,000〜16,000円" },
      { type: "ガスコンロ", price: "6,000〜10,000円" },
      { type: "キッチン+換気扇セット", price: "18,000〜28,000円" },
    ],
    notes: "※頑固な油汚れがある場合は追加料金が発生することがあります。",
  },
];

// 料金に影響する要因
const PRICE_FACTORS = [
  {
    title: "作業範囲",
    description: "清掃する箇所が多いほど料金は高くなります。セットプランで割引になることも。",
    icon: "📏",
  },
  {
    title: "汚れの程度",
    description: "長年放置された頑固な汚れは、追加料金が発生する場合があります。",
    icon: "🧹",
  },
  {
    title: "設備の種類",
    description: "お掃除機能付きエアコンや特殊な設備は、通常より料金が高くなります。",
    icon: "⚙️",
  },
  {
    title: "地域",
    description: "都心部は地方よりやや高めの傾向。交通費が別途かかることもあります。",
    icon: "🗾",
  },
  {
    title: "時期",
    description: "エアコンは夏前、大掃除シーズンは繁忙期で料金が上がることがあります。",
    icon: "📅",
  },
  {
    title: "オプション",
    description: "防カビコート、抗菌処理などのオプションは別途料金がかかります。",
    icon: "✨",
  },
];

export default function PricePage() {
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
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-12 h-12" />
            <h2 className="text-4xl md:text-5xl font-bold">
              ハウスクリーニング料金相場
            </h2>
          </div>
          <p className="text-xl opacity-90 max-w-3xl">
            各サービスの料金相場を詳しく解説。適正価格を知って、賢く業者を選びましょう。
          </p>
        </div>
      </section>

      {/* 料金相場一覧 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              サービス別料金相場
            </h3>

            <div className="space-y-8">
              {PRICE_DATA.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-green-600 hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-2xl font-bold text-gray-900">
                      {service.service}
                    </h4>
                    <Link
                      href={`/services/${service.category}`}
                      className="text-green-600 hover:text-green-700 font-semibold text-sm"
                    >
                      業者を探す →
                    </Link>
                  </div>

                  <div className="space-y-4 mb-6">
                    {service.prices.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-3 border-b last:border-b-0"
                      >
                        <div className="font-medium text-gray-900">{item.type}</div>
                        <div className="text-xl font-bold text-green-600">{item.price}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <div className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{service.notes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 料金に影響する要因 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <h3 className="text-3xl font-bold text-gray-900">
                料金に影響する要因
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRICE_FACTORS.map((factor, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="text-4xl mb-3">{factor.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {factor.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* お得に利用するコツ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
              お得に利用するコツ
            </h3>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-600 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  💰 複数箇所をまとめて依頼
                </h4>
                <p className="text-gray-700">
                  エアコン+浴室など、複数箇所をセットで依頼すると割引が適用されることが多いです。
                  トータルで10〜20%程度お得になることも。
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  📅 閑散期を狙う
                </h4>
                <p className="text-gray-700">
                  エアコンクリーニングなら春・秋、大掃除なら1〜2月など、
                  閑散期は料金が安く、予約も取りやすい傾向にあります。
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  🔍 複数社から見積もり
                </h4>
                <p className="text-gray-700">
                  必ず複数の業者から見積もりを取りましょう。料金だけでなく、
                  サービス内容や保証、口コミも比較することが重要です。
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-600 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  ⭐ 定期契約を検討
                </h4>
                <p className="text-gray-700">
                  年2回などの定期契約をすると、1回あたりの料金が割引になる業者が多数。
                  長期的にはお得になります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            適正価格で安心のハウスクリーニング
          </h3>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            クリーンナビなら、料金・口コミを比較して最適な業者が見つかります。
            複数社の見積もりを比較して、納得の価格で依頼しましょう。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/services/aircon"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              業者を探す
            </Link>
            <Link
              href="/"
              className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition shadow-lg"
            >
              トップページへ
            </Link>
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
