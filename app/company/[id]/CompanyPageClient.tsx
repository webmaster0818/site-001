"use client";

import Link from "next/link";
import { PARTNERS } from "../../data/partners";
import {
  Sparkles,
  MapPin,
  Clock,
  Shield,
  Phone,
  Mail,
} from "lucide-react";

// 実在業者データ
const COMPANY_DATA: { [key: string]: any } = {
  "1": {
    id: 1,
    name: "おそうじ本舗",
    category: "エアコンクリーニング",
    categorySlug: "aircon",
    price: 12100,
    area: "全国対応（約1,900店舗）",
    image: "/images/partners/osoujihonpo.webp",
    description:
      "全国約1,900店舗を展開する業界最大手のハウスクリーニングチェーン。特許取得の「ファインバブルエアコンクリーニング」で、微細な泡で奥のカビ・汚れまで除去。スタッフは全員、独自の研修プログラムを修了した有資格者です。",
    features: [
      "全国約1,900店舗展開",
      "特許取得のファインバブル洗浄",
      "損害保険加入済み",
      "完全分解洗浄対応",
      "Web予約に対応",
    ],
    services: [
      { name: "壁掛けエアコン", price: 12100 },
      { name: "お掃除機能付きエアコン", price: 20900 },
      { name: "天井埋込エアコン", price: 27500 },
    ],
    workingHours: "9:00〜20:00（店舗により異なる）",
    phone: "公式サイトからWeb予約",
    email: "公式サイトの問い合わせフォームをご利用ください",
    guarantee: "損害保険加入済み",
  },
  "2": {
    id: 2,
    name: "ダスキン サービスマスター",
    category: "浴室クリーニング",
    categorySlug: "bathroom",
    price: 22000,
    area: "全国対応（1,222拠点・2026年3月末現在）",
    image: "/images/partners/duskin.webp",
    description:
      "株式会社ダスキン（1963年設立）が1971年から展開するサービスマスター事業。全国1,222拠点（2026年3月末現在）で展開し、浴室クリーニングをはじめとする各種ハウスクリーニングを提供しています。専門的な技術と設備を備え、トラブル時のサポート体制を整えています。",
    features: [
      "1971年からサービスマスター事業を展開",
      "全国1,222拠点（2026年3月末現在）",
      "損害保険加入済み",
      "プロの研修制度",
      "定期サービスも対応",
    ],
    services: [
      { name: "浴室クリーニング", price: 22000 },
      { name: "キッチンクリーニング", price: 20680 },
      { name: "トイレクリーニング", price: 10340 },
    ],
    workingHours: "電話受付 8:00〜20:00（年中無休）",
    phone: "公式サイトからWeb予約",
    email: "公式サイトの問い合わせフォームをご利用ください",
    guarantee: "損害保険加入済み",
  },
  "3": {
    id: 3,
    name: "おそうじ革命",
    category: "エアコンクリーニング",
    categorySlug: "aircon",
    price: 9980,
    area: "全国対応（約420店舗）",
    image: "/images/partners/osoujikakumei.webp",
    description:
      "全国約420店舗を展開するハウスクリーニングチェーン。技術力と価格のバランスに優れ、50日間の研修を受けたスタッフが対応します。エアコンクリーニングは追加料金なしの料金体系が特徴です。",
    features: ["業界最安クラス", "50日間の研修", "追加料金なし", "全国約420店舗展開"],
    services: [
      { name: "エアコンクリーニング", price: 9980 },
      { name: "キッチンクリーニング", price: 17930 },
      { name: "浴室クリーニング", price: 17930 },
    ],
    workingHours: "店舗により異なる（年末年始を除き土日祝も営業）",
    phone: "公式サイトからWeb予約",
    email: "公式サイトの問い合わせフォームをご利用ください",
  },
  "4": {
    id: 4,
    name: "東京ガス ハウスクリーニング",
    category: "キッチンクリーニング",
    categorySlug: "kitchen",
    price: 19800,
    area: "東京・神奈川・埼玉・千葉と群馬・茨城の一部",
    image: "/images/partners/tokyogas.webp",
    description:
      "東京ガスが提供するハウスクリーニング。対応エリアは東京・神奈川・埼玉・千葉と群馬・茨城の一部（公式の対応エリア一覧で市区町村を指定）。東京ガスとガス・電気の契約がなくても、対応エリア内なら利用できます。支払いはクレジットカードのみ。",
    features: ["東京ガスが提供", "土日祝も対応（12/29〜1/4除く）", "支払いはクレジットカードのみ"],
    services: [
      { name: "キッチン（I型・L型・U型）", price: 19800 },
      { name: "浴室（鏡のウロコ取りなし）", price: 17600 },
      { name: "トイレ", price: 13200 },
    ],
    workingHours: "訪問開始8:30〜18:00の時間帯から選択（土日祝も可・12/29〜1/4除く）",
    phone: "公式サイトからWeb予約",
    email: "公式サイトの問い合わせフォームをご利用ください",
  },
  "5": {
    id: 5,
    name: "カジタク（イオングループ）",
    category: "浴室クリーニング",
    categorySlug: "bathroom",
    price: 19580,
    area: "43都道府県の対象市区町村（公式の対応エリア一覧）",
    image: "/images/partners/kajitaku.webp",
    description:
      "イオングループが運営するハウスクリーニングサービス。仕上がり満足保証付きの高品質なサービスが特徴で、浴室クリーニングでは防カビコーティングにも対応しています。",
    features: ["イオングループ", "仕上がり満足保証", "防カビコーティング"],
    services: [
      { name: "浴室クリーニング", price: 19580 },
      { name: "キッチンクリーニング", price: 19580 },
    ],
    workingHours: "10:00〜17:00（年末年始除く）",
    phone: "公式サイトからWeb予約",
    email: "公式サイトの問い合わせフォームをご利用ください",
    guarantee: "仕上がり満足保証あり",
    partnerSlug: "kajitaku",
  },
  "6": {
    id: 6,
    name: "ベアーズ",
    category: "キッチンクリーニング",
    categorySlug: "kitchen",
    price: 18920,
    area: "東京・神奈川・千葉・埼玉・大阪・兵庫",
    image: "/images/partners/bears.webp",
    description:
      "家事代行サービス大手が手がけるハウスクリーニング。スタッフ教育に力を入れており、丁寧な作業が特徴です。複数箇所のセット割引や定期利用にも対応しています。",
    features: ["家事代行大手", "セット割引", "定期利用対応"],
    services: [
      { name: "キッチンクリーニング", price: 18920 },
      { name: "浴室クリーニング", price: 19910 },
    ],
    workingHours: "受付 9:00〜18:00（年中無休）",
    phone: "公式サイトからWeb予約",
    email: "公式サイトの問い合わせフォームをご利用ください",
  },
};

export default function CompanyPageClient({ id }: { id: string }) {
  const company = COMPANY_DATA[id];

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            該当する業者のページはありません
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

      <div className="container mx-auto px-4 py-8">
        {/* パンくずリスト */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/services/${company.categorySlug}/`} className="hover:text-blue-600">
            {company.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{company.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* メインコンテンツ */}
          <div className="lg:col-span-2 space-y-6">
            {/* メイン画像 */}
            <figure className="bg-white rounded-lg overflow-hidden border border-[#c9d6d8] p-3 m-0">
              <img
                src={company.image}
                alt={`${company.name} 公式サイトのトップページ`}
                className="w-full h-auto aspect-[16/10] object-cover object-top border border-[#e3ecec]"
              />
              <figcaption className="mt-2 text-xs text-gray-500">出典：{company.name} 公式サイト（2026年10月16日時点）</figcaption>
            </figure>

            {/* 業者情報 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {company.name}
                  </h1>
                  <div className="flex items-center gap-4 text-gray-600">
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

                {company.guarantee && (
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      保証・保険
                    </div>
                    <div className="text-gray-600">{company.guarantee}</div>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 提携先（felmat）の検証ページと公式サイトへの導線 */}
        {(() => {
          const partner = company.partnerSlug && PARTNERS.find((p) => p.slug === company.partnerSlug);
          if (!partner || partner.slug !== "kajitaku") return null; // 会社ページの提携導線は現状カジタクのみ（felmat 提供コード）
          return (
            <section className="bg-white rounded-lg shadow-sm p-6 mt-8 text-center">
              <p className="text-sm text-gray-700 mb-3">
                料金・キャンセル規定・保証を公式情報で確認した{" "}
                <Link href={`/review/${partner.slug}/`} className="text-blue-600 hover:underline">
                  {partner.name}の検証ページ
                </Link>
              </p>
              <a
                href="https://t.felmat.net/fmcl?ak=D7184U.1.N114090G.C1396789"
                rel="sponsored nofollow noopener"
                target="_blank"
                className="inline-block rounded-lg bg-amber-600 px-6 py-3 text-sm md:text-base font-bold text-white hover:bg-amber-700 transition"
              >
                安心のイオングループ【カジタク】
              </a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img width={1} height={1} src="https://t.felmat.net/fmimp/D7184U.N114090G.C1396789" alt="" style={{ border: "none" }} />
              <p className="mt-2 text-[11px] text-gray-500">PR・{partner.name}の公式サイトへ移動します。</p>
            </section>
          );
        })()}

        {/* 同じカテゴリの掲載業者 */}
        {Object.keys(COMPANY_DATA).some((k) => k !== id && COMPANY_DATA[k].categorySlug === company.categorySlug) && (
          <section className="bg-white rounded-lg shadow-sm p-6 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {company.category}の他の掲載業者
            </h2>
            <ul className="space-y-2">
              {Object.keys(COMPANY_DATA)
                .filter((k) => k !== id && COMPANY_DATA[k].categorySlug === company.categorySlug)
                .map((k) => (
                  <li key={k}>
                    <Link href={`/company/${k}/`} className="text-blue-600 hover:underline">
                      {COMPANY_DATA[k].name}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href={`/services/${company.categorySlug}/`} className="text-blue-600 hover:underline">
                  {company.category}の業者一覧へ
                </Link>
              </li>
            </ul>
          </section>
        )}
      </div>

      {/* お問い合わせモーダル */}
    </div>
  );
}
