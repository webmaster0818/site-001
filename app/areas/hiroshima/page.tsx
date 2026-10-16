import Link from "next/link";
import AreaProvidersLead from "../../components/AreaProvidersLead";
import SeasonalCleaningNote from "../../components/SeasonalCleaningNote";
import { Sparkles, Award, Shield, Zap } from "lucide-react";
import CompanyShot from "../../components/CompanyShot";

export const metadata = {
  alternates: { canonical: "https://cleaning-choices.com/areas/hiroshima/" },
  title: "広島市のハウスクリーニング業者おすすめ比較 | クリーンナビ",
  description: "広島市でおすすめのハウスクリーニング業者を徹底比較。広島市など全域対応。",
};

export default function HiroshimaArea() {
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
      description: "技術力と価格のバランスが良く、約420店舗を全国展開。50日間の研修を受けたスタッフが対応。",
      hours: "店舗により異なる（年末年始を除き土日祝も営業）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇クリーニング",
      website: "https://www.osoujikakumei.jp/"
    },
    { 
      name: "おそうじ本舗", 
      kitchen: "18,700円〜", 
      bathroom: "18,700円〜", 
      toilet: "9,900円〜",
      description: "全国47都道府県に対応する全国チェーン。混雑期でも予約が取りやすく、早朝・夜間の要望にも対応（公式）。",
      hours: "店舗により異なる（定休日も店舗ごと）",
      services: "エアコン、浴室、キッチン、トイレ、洗濯機、外壁クリーニング",
      website: "https://www.osoujihonpo.com/"
    },
    { 
      name: "カジタク", 
      kitchen: "19,580円〜", 
      bathroom: "19,580円〜", 
      toilet: "19,580円",
      description: "イオングループ運営。お客さま満足度95%（2025年 カジタク調べ）。",
      hours: "10:00-17:00（年末年始除く）",
      services: "エアコン、浴室、キッチン、換気扇、窓・サッシクリーニング",
      website: "https://www.kajitaku.com/"
    },
    { 
      name: "ベアーズ", 
      kitchen: "18,920円〜", 
      bathroom: "19,910円〜", 
      toilet: "10,340円〜",
      description: "家事代行大手による質の高いサービス。スタッフ教育に力を入れ、丁寧な作業が特徴。",
      hours: "受付9:00〜18:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://www.happy-bears.com/"
    },
    { 
      name: "ダスキン", 
      kitchen: "20,680円〜", 
      bathroom: "22,000円〜", 
      toilet: "10,340円〜",
      description: "清掃業界の老舗大手。47都道府県に拠点があり、専門資器材と洗剤で徹底清掃。",
      hours: "9:00-18:00（店舗により異なる）",
      services: "エアコン、浴室、キッチン、トイレ、レンジフード、フロアクリーニング",
      website: "https://www.duskin.jp/servicemaster/"
    },
    { 
      name: "東京ガスのハウスクリーニング", 
      kitchen: "19,800円〜", 
      bathroom: "17,600円〜", 
      toilet: "13,200円〜",
      description: "東京ガスが提供。対応エリアは東京・神奈川・埼玉・千葉と群馬・茨城の一部（公式の対応エリア一覧）。支払いはクレジットカードのみ。",
      hours: "訪問開始8:30〜18:00の時間帯から選択（土日祝も可・12/29〜1/4除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://kaji.tokyo-gas.co.jp/"
    },
    { 
      name: "サニクリーン", 
      kitchen: "17,600円〜", 
      bathroom: "18,700円〜", 
      toilet: "8,800円〜",
      description: "全国対応の大手清掃会社。無料見積もりサービスで事前に汚れ状況を確認。",
      hours: "9:00-18:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、窓クリーニング",
      website: "https://www.sanikleen.co.jp/housecleaning/"
    },
    { 
      name: "お掃除マスター", 
      kitchen: "8,000円〜", 
      bathroom: "12,600円〜", 
      toilet: "8,000円〜",
      description: "全国の加盟店からスタッフを手配する紹介型サービス（運営：株式会社アシスト）。出張料なし（公式）。",
      hours: "24時間365日受付",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://osoji-master.info/"
    },
    { 
      name: "アズマのホームクリーニング", 
      kitchen: "19,800円〜", 
      bathroom: "19,800円〜", 
      toilet: "13,200円〜",
      description: "掃除用品メーカーのアズマ工業（1896年創業）が運営。年間実績は全国20,000件（公式）。",
      hours: "電話受付 平日9:00〜17:00",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、窓クリーニング",
      website: "https://www.azuma-cleaning.com/"
    },
    { 
      name: "くらしのセゾン", 
      kitchen: "19,690円〜", 
      bathroom: "20,900円〜", 
      toilet: "10,010円〜",
      description: "クレディセゾングループ。セゾン/UCカード会員はハウスクリーニング全メニュー5%OFF（オプション除く）、一部メニューで永久不滅ポイント利用可（公式）。",
      hours: "9:00〜17:00（土日祝除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://www.kurashi-saison.co.jp/cleaning/"
    },
    { 
      name: "エディオンハウスクリーン", 
      kitchen: "19,800円〜", 
      bathroom: "19,800円〜", 
      toilet: "9,240円〜",
      description: "家電量販店エディオンの「家電のプロのクリーニングサービス」。提供は同社指定エリア内に限る（公式）。",
      hours: "店舗により異なる（公式の店舗検索で確認）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、家電周辺クリーニング",
      website: "https://www.edion.co.jp/service/satisfied/cleaning"
    },
    { 
      name: "おそうじ革命", 
      kitchen: "17,930円〜", 
      bathroom: "17,930円〜", 
      toilet: "8,250円〜",
      description: "プロの技術力と低価格を両立。全国対応で地域密着型のサービスを展開。",
      hours: "店舗により異なる（年末年始を除き土日祝も営業）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、窓クリーニング",
      website: "https://www.osoujikakumei.jp/"
    },
    { 
      name: "おそうじ大使", 
      kitchen: "16,800円〜", 
      bathroom: "17,930円〜", 
      toilet: "7,920円〜",
      description: "低価格が魅力の全国チェーン。即日対応可能で急ぎの依頼にも柔軟に対応。",
      hours: "9:00-19:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://osoujitaishi.com/"
    },
  ];
  const areas = ['中区', '東区', '南区', '西区', '安佐南区', '安佐北区', '安芸区', '佐伯区'];
  return (
    <div className="min-h-screen bg-base-100">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">広島市のハウスクリーニング業者比較</h1>
          <p className="text-xl">広島市など広島市全域対応</p>
        </div>
      </section>
 <AreaProvidersLead slug="hiroshima" />
 {/* パンくずリスト */}
 <div className="bg-base-100 py-4 border-b border-base-300">
 <div className="container mx-auto px-4">
 <div className="breadcrumbs text-sm">
 <ul>
 <li><Link href="/">HOME</Link></li>
 <li><Link href="/areas/hiroshima-ken/">広島県</Link></li>
 <li>広島市</li>
 </ul>
 </div>
 </div>
 </div>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">広島市でハウスクリーニングを依頼するなら？</h2>
            <p className="text-lg">広島市は中国地方最大の都市で、瀬戸内海に面しています。温暖な気候ですが、海風による塩害対策が必要です。</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">おすすめ業者比較</h2>
          <table className="table table-zebra w-full max-w-5xl mx-auto bg-white">
            <thead><tr><th>業者名</th><th>キッチン</th><th>浴室</th><th>トイレ</th></tr></thead>
            <tbody>
              {companies.map((c, i) => (
                <tr key={i}><td className="font-bold">{c.name}</td><td>{c.kitchen}</td><td>{c.bathroom}</td><td>{c.toilet}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 各業者詳細 */}
      <section className="py-16">
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">対応エリア</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {areas.map(a => <div key={a} className="badge badge-lg p-3">{a}</div>)}
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
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">広島市で業者を探す</h2>
          <Link href="/services/aircon/" className="btn btn-lg bg-white text-primary">サービスを見る</Link>
        </div>
      </section>

      {/* 近隣エリア */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">近隣エリアから探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/areas/fukuoka/" className="btn btn-outline">福岡県</Link>
            <Link href="/areas/osaka/" className="btn btn-outline">大阪府</Link>
            <Link href="/areas/hyogo/" className="btn btn-outline">兵庫県</Link>
            <Link href="/areas/kyoto/" className="btn btn-outline">京都府</Link>
          </div>
        </div>
      </section>
 <SeasonalCleaningNote />
    </div>
  );
}
