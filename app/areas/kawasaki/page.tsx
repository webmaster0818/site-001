import Link from "next/link";
import AreaProvidersLead from "../../components/AreaProvidersLead";
import SeasonalCleaningNote from "../../components/SeasonalCleaningNote";
import { Sparkles, Award, Shield, Zap, MapPin } from "lucide-react";
import CompanyShot from "../../components/CompanyShot";

export const metadata = {
  title: "川崎市のハウスクリーニング業者おすすめ比較 | クリーンナビ",
  description: "川崎市のハウスクリーニング業者を比較しています。店舗情報・料金相場・業者選びのポイントを掲載しています。",
  openGraph: {
    title: "川崎市のハウスクリーニング業者おすすめ比較 | クリーンナビ",
    description: "川崎市のハウスクリーニング業者を比較しています。店舗情報・料金相場・業者選びのポイントを掲載しています。",
    url: "https://cleaning-choices.com/areas/kawasaki/",
    siteName: "クリーンナビ",
    images: [
      {
        url: "https://cleaning-choices.com/og-image.png?v=20261016",
        width: 1200,
        height: 630,
        alt: "川崎市のハウスクリーニング業者比較 - クリーンナビ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "川崎市のハウスクリーニング業者おすすめ比較 | クリーンナビ",
    description: "川崎市のハウスクリーニング業者を比較しています。店舗情報・料金相場・業者選びのポイントを掲載しています。",
    images: ["https://cleaning-choices.com/og-image.png?v=20261016"],
  },
  alternates: {
    canonical: "https://cleaning-choices.com/areas/kawasaki/",
  },
};

export default function KawasakiArea() {
  const companyIcons = [Sparkles, Award, Shield, Zap];
    const companyColors = [
    "from-blue-500 to-blue-600",
    "from-green-500 to-green-600",
    "from-purple-500 to-purple-600",
    "from-orange-500 to-orange-600",
    "from-cyan-500 to-cyan-600",
    "from-pink-500 to-pink-600",
    "from-indigo-500 to-indigo-600",
    "from-red-500 to-red-600",
    "from-yellow-500 to-yellow-600",
    "from-teal-500 to-teal-600",
    "from-lime-500 to-lime-600",
    "from-rose-500 to-rose-600",
    "from-sky-500 to-sky-600",
    "from-violet-500 to-violet-600",
    "from-amber-500 to-amber-600",
  ];


    const companies = [
    { 
      name: "おそうじ革命", 
      kitchen: "17,930円〜", 
      bathroom: "17,930円〜", 
      toilet: "8,250円〜",
      description: "技術力と価格のバランスを特徴とし、約420店舗を全国展開しています。50日間の研修を受けたスタッフが対応します。",
      hours: "店舗により異なる（年末年始を除き土日祝も営業）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇クリーニング",
      website: "https://www.osoujikakumei.jp/"
    },
    { 
      name: "おそうじ本舗", 
      kitchen: "18,700円〜", 
      bathroom: "18,700円〜", 
      toilet: "9,900円〜",
      description: "全国47都道府県に対応する全国チェーンです。混雑期でも予約が取りやすく、早朝・夜間の要望にも対応しています（公式）。",
      hours: "店舗により異なる（定休日も店舗ごと）",
      services: "エアコン、浴室、キッチン、トイレ、洗濯機、外壁クリーニング",
      website: "https://www.osoujihonpo.com/"
    },
    { 
      name: "カジタク", 
      kitchen: "19,580円〜", 
      bathroom: "19,580円〜", 
      toilet: "19,580円",
      description: "イオングループが運営しています。お客さま満足度95%（2025年 カジタク調べ）。",
      hours: "10:00-17:00（年末年始除く）",
      services: "エアコン、浴室、キッチン、換気扇、窓・サッシクリーニング",
      website: "https://www.kajitaku.com/"
    },
    { 
      name: "ベアーズ", 
      kitchen: "18,920円〜", 
      bathroom: "19,910円〜", 
      toilet: "10,340円〜",
      description: "家事代行大手によるサービスです。スタッフ教育に力を入れ、丁寧な作業を特徴としています。",
      hours: "受付9:00〜18:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://www.happy-bears.com/"
    },
    { 
      name: "ダスキン", 
      kitchen: "20,680円〜", 
      bathroom: "22,000円〜", 
      toilet: "10,340円〜",
      description: "清掃業界の老舗大手です。47都道府県に拠点があり、専門の資器材と洗剤で清掃します。",
      hours: "9:00-18:00（店舗により異なる）",
      services: "エアコン、浴室、キッチン、トイレ、レンジフード、フロアクリーニング",
      website: "https://www.duskin.jp/servicemaster/"
    },
    { 
      name: "東京ガスのハウスクリーニング", 
      kitchen: "19,800円〜", 
      bathroom: "17,600円〜", 
      toilet: "13,200円〜",
      description: "東京ガスが提供しています。対応エリアは東京・神奈川・埼玉・千葉と群馬・茨城の一部（公式の対応エリア一覧）。支払いはクレジットカードのみ。",
      hours: "訪問開始8:30〜18:00の時間帯から選択（土日祝も可・12/29〜1/4除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://kaji.tokyo-gas.co.jp/"
    },
    { 
      name: "サニクリーン", 
      kitchen: "17,600円〜", 
      bathroom: "18,700円〜", 
      toilet: "8,800円〜",
      description: "全国対応の大手清掃会社です。無料見積もりで、事前に汚れの状況を確認します。",
      hours: "9:00-18:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、窓クリーニング",
      website: "https://www.sanikleen.co.jp/housecleaning/"
    },
    { 
      name: "お掃除マスター", 
      kitchen: "8,000円〜", 
      bathroom: "12,600円〜", 
      toilet: "8,000円〜",
      description: "全国の加盟店からスタッフを手配する紹介型サービスです（運営：株式会社アシスト）。出張料はかかりません（公式）。",
      hours: "24時間365日受付",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://osoji-master.info/"
    },
    { 
      name: "アズマのホームクリーニング", 
      kitchen: "19,800円〜", 
      bathroom: "19,800円〜", 
      toilet: "13,200円〜",
      description: "掃除用品メーカーのアズマ工業（1896年創業）が運営しています。年間実績は全国20,000件です（公式）。",
      hours: "電話受付 平日9:00〜17:00",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、窓クリーニング",
      website: "https://www.azuma-cleaning.com/"
    },
    { 
      name: "くらしのセゾン", 
      kitchen: "19,690円〜", 
      bathroom: "20,900円〜", 
      toilet: "10,010円〜",
      description: "クレディセゾングループのサービスです。セゾン/UCカード会員はハウスクリーニング全メニュー5%OFF（オプション除く）、一部メニューで永久不滅ポイントを利用できます（公式）。",
      hours: "9:00〜17:00（土日祝除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://www.kurashi-saison.co.jp/cleaning/"
    },
    { 
      name: "エディオンハウスクリーン", 
      kitchen: "19,800円〜", 
      bathroom: "19,800円〜", 
      toilet: "9,240円〜",
      description: "家電量販店エディオンの「家電のプロのクリーニングサービス」です。提供は同社の指定エリア内に限られます（公式）。",
      hours: "店舗により異なる（公式の店舗検索で確認）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、家電周辺クリーニング",
      website: "https://www.edion.co.jp/service/satisfied/cleaning"
    },
  ];
  // 川崎市7区（リンク付き）
  const wards = [
    { name: "川崎区", slug: "kawasaki-kawasaki" },
    { name: "幸区", slug: "kawasaki-saiwai" },
    { name: "中原区", slug: "kawasaki-nakahara" },
    { name: "高津区", slug: "kawasaki-takatsu" },
    { name: "多摩区", slug: "kawasaki-tama" },
    { name: "宮前区", slug: "kawasaki-miyamae" },
    { name: "麻生区", slug: "kawasaki-asao" },
  ];
  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/areas/kawasaki/">川崎市</Link></li>
          </ul>
        </div>
      </div>

      <section className="hero-section py-16 md:py-20 relative">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80" alt="川崎市の街並み" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-10 h-10 text-yellow-300" />
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.2)' }}>
              川崎市のハウスクリーニング業者おすすめ比較
            </h1>
          </div>
          <p className="text-base md:text-xl text-white leading-relaxed max-w-3xl mx-auto" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}>
            川崎市の業者を料金・サービス内容で比較しています
          </p>
        </div>
        <svg className="hero-wave" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#f9fafb"></path>
        </svg>
      </section>
 <AreaProvidersLead slug="kawasaki" />
 <SeasonalCleaningNote />
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">川崎市でハウスクリーニングを依頼する際の基本情報</h2>
            <p className="text-lg">川崎市は神奈川県第2の都市で、7区からなる政令指定都市です。東京と横浜の間に位置し、工業地帯と住宅地が混在しています。</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">おすすめ業者比較</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full max-w-6xl mx-auto bg-white">
              <thead>
                <tr>
                  <th>業者名</th>
                  <th>キッチン</th>
                  <th>浴室</th>
                  <th>トイレ</th>
                  
                </tr>
              </thead>
              <tbody>
                {companies.map((c, i) => (
                  <tr key={i}>
                    <td className="font-bold">{c.name}</td>
                    <td>{c.kitchen}</td>
                    <td>{c.bathroom}</td>
                    <td>{c.toilet}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">対応エリア（川崎市全7区）</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {wards.map((ward) => (
              <Link 
                key={ward.slug} 
                href={`/areas/${ward.slug}/`}
                className="badge badge-lg badge-outline p-4 hover:bg-primary hover:text-primary-content transition-colors cursor-pointer"
              >
                {ward.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 各業者詳細 */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">おすすめ業者詳細</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {companies.map((company, index) => {
              const Icon = companyIcons[index % companyIcons.length];
              const gradient = companyColors[index % companyColors.length];
              return (
                <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                  <div className="card-body">
                    <div className="flex items-start gap-4">
                      <CompanyShot name={company.name} />
                      <div className="flex-1">
                        <h3 className="card-title text-2xl">{company.name}</h3>
 {company.name === "おそうじ革命" && <a href="/review/osoujikakumei/" className="link link-primary text-sm">おそうじ革命の口コミ・評判を公式情報で検証</a>}
                        
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold mb-2">料金</h4>
                        <ul className="space-y-1">
                          <li>• キッチン: {company.kitchen}</li>
                          <li>• 浴室: {company.bathroom}</li>
                          <li>• トイレ: {company.toilet}</li>
                        </ul>
                      </div>
                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">料金相場</h2>
            <ul className="space-y-2">
              <li>• エアコンクリーニング：10,000円〜15,000円</li>
              <li>• キッチンクリーニング：18,000円〜20,000円</li>
              <li>• 浴室クリーニング：19,000円〜22,000円</li>
              <li>• トイレクリーニング：9,000円〜10,000円</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">川崎市のハウスクリーニング業者を探す</h2>
          <div className="flex gap-4 justify-center mt-8">
            <Link href="/services/aircon/" className="btn btn-lg bg-white text-primary">サービスから探す</Link>
            <Link href="/price/" className="btn btn-lg btn-outline text-white border-white">料金相場を見る</Link>
          </div>
        </div>
      </section>

      {/* 近隣エリア */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">近隣エリアから探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/areas/yokohama/" className="btn btn-outline">横浜市</Link>
            <Link href="/areas/tokyo/" className="btn btn-outline">東京都</Link>
            <Link href="/areas/kanagawa/" className="btn btn-outline">神奈川県</Link>
            <Link href="/areas/chiba/" className="btn btn-outline">千葉県</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
