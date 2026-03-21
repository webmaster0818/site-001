import Link from "next/link";
import { Sparkles, Award, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "愛知県のハウスクリーニング業者おすすめ比較 | クリーンナビ",
  description: "愛知県でおすすめのハウスクリーニング業者を徹底比較。名古屋市など全域対応。",
};

export default function AichiArea() {
  const companyIcons = [Sparkles, Award, Shield, Zap];
  const companyColors = [
    "from-blue-500 to-blue-600",
    "from-green-500 to-green-600",
    "from-purple-500 to-purple-600",
    "from-orange-500 to-orange-600",
  ];


  const companies = [
    { name: "おそうじ革命", kitchen: "17,930円〜", bathroom: "17,930円〜", toilet: "8,250円〜" },
    { name: "おそうじ本舗", kitchen: "19,800円〜", bathroom: "19,800円〜", toilet: "9,900円〜" },
    { name: "カジタク", kitchen: "19,580円〜", bathroom: "19,580円〜", toilet: "19,580円" },
    { name: "ベアーズ", kitchen: "18,920円〜", bathroom: "19,910円〜", toilet: "10,340円〜" },
  ];
  const areas = ['名古屋市', '豊橋市', '岡崎市', '一宮市', '瀬戸市', '半田市', '春日井市', '豊川市', '津島市', '刈谷市', '豊田市', '安城市'];
  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50">
        <Link href="/" className="btn btn-ghost text-xl">クリーンナビ</Link>
      </header>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">愛知県のハウスクリーニング業者比較</h1>
          <p className="text-xl">名古屋市など愛知県全域対応</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">愛知県でハウスクリーニングを依頼するなら？</h2>
            <p className="text-lg">愛知県は中京圏の中心で、製造業が盛んな地域です。名古屋市を中心に、共働き世帯が多く、ハウスクリーニングの需要が高いエリアです。</p>
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
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="card-title text-2xl">{company.name}</h3>
                        
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
          <h2 className="text-3xl font-bold mb-4">愛知県で業者を探す</h2>
          <Link href="/services/aircon" className="btn btn-lg bg-white text-primary">サービスを見る</Link>
        </div>
      </section>

      {/* エリア特有のポイント */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">愛知県でハウスクリーニングを依頼する際のポイント</h2>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">製造業が盛んで工業粉塵・油汚れが多い</h3>
            <p className="text-lg mb-4">
              愛知県は自動車産業をはじめとした製造業が盛んで、工場や事業所が多数存在します。
              そのため工業粉塵や油汚れが住宅にも付着しやすい環境です。
              特にキッチンの換気扇や窓、エアコンフィルターには油分を含んだ汚れが蓄積しやすく、通常よりも頻繁なクリーニングが推奨されます。
              プロによる年1-2回の徹底清掃で、快適な住環境を維持できます。
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">名古屋の高温多湿な気候</h3>
            <p className="text-lg mb-4">
              名古屋市を中心とした愛知県は、夏場に非常に高温多湿になります。
              「名古屋の夏は蒸し暑い」と言われるように、湿気がこもりやすく、浴室やキッチン、エアコン内部にカビが発生しやすい環境です。
              梅雨時期から夏場にかけて、特に注意が必要です。定期的なプロのクリーニングでカビの発生を抑え、健康的な室内環境を保ちましょう。
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">中部地方最大の都市圏で業者が豊富</h3>
            <p className="text-lg mb-4">
              愛知県は中部地方の経済中心地であり、多くのハウスクリーニング業者が営業しています。
              特に名古屋市内は大手チェーンから地域密着型まで選択肢が豊富で、競争も激しいため価格も比較的良心的です。
              複数社を比較することで、最適な業者を見つけやすい環境といえます。
            </p>
          </div>
        </div>
      </section>

      {/* 賢く安く依頼するコツ */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">賢く安く依頼するコツ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-xl">💰 複数業者から見積もり</h3>
                  <p>愛知県は業者が多いため、最低3社から見積もりを取ることをおすすめします。特に名古屋市内は業者数が豊富で比較しやすい環境です。</p>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-xl">📅 閑散期を狙う</h3>
                  <p>1月、2月、6月などの閑散期は料金が安くなる傾向があります。繁忙期（3-4月、9-10月）を避けるだけで10-20%お得になることも。</p>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-xl">🎁 セット割引を活用</h3>
                  <p>エアコン+換気扇、浴室+キッチンなど複数箇所をまとめて依頼すると、セット割引が適用される業者が多いです。年に一度のまとめ清掃がお得です。</p>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-xl">⏰ 平日・午前中を選ぶ</h3>
                  <p>土日や夜間は割増料金の業者が多いです。平日の午前中など、通常料金で対応してもらえる時間帯を選びましょう。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 業者の選び方 */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">失敗しない業者の選び方</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-bold mb-2">✓ 料金が明確</h3>
                <p className="text-lg">事前見積もりで追加料金の有無を確認。「追加料金なし」を明記している業者が安心です。</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-bold mb-2">✓ 実績と口コミ</h3>
                <p className="text-lg">Googleレビューや口コミサイトで実際の利用者の声を確認。評価3.5以上が目安です。</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-bold mb-2">✓ 損害保険に加入</h3>
                <p className="text-lg">万が一の破損・傷に備えて、損害保険加入業者を選びましょう。大手は必ず加入しています。</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-bold mb-2">✓ スタッフの研修体制</h3>
                <p className="text-lg">研修制度がしっかりした業者は技術力が高く、仕上がりに差が出ます。研修期間50日以上が一つの基準です。</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-bold mb-2">✓ 工業地域の汚れに対応</h3>
                <p className="text-lg">愛知県特有の工業粉塵・油汚れに対応できる業者を選びましょう。換気扇やエアコンの頑固な汚れを落とす技術力が重要です。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">よくある質問</h2>
            
            <div className="space-y-4">
              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 愛知でハウスクリーニングの料金相場はいくらですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコンクリーニングは8,000円〜15,000円、浴室クリーニングは12,000円〜20,000円、キッチンクリーニングは10,000円〜18,000円が相場です。名古屋市内は業者が多く競争が激しいため、全国平均並みかやや安めの傾向があります。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 工業地域の油汚れ・粉塵は落とせますか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">はい、プロの業者は工業地域特有の油汚れ・粉塵にも対応できます。特に換気扇やエアコンの頑固な油汚れには、専用の洗剤と技術が必要です。実績のある業者を選ぶことで、通常では落とせない汚れもしっかり除去できます。愛知県は製造業が盛んなため、こうした汚れに慣れた業者が多いです。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 名古屋市内と郊外で料金に差はありますか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">基本料金はほぼ同じですが、三河地域など一部エリアでは出張費が追加される場合があります。見積もり時に確認しましょう。名古屋市内は業者数が多いため、より競争が激しく価格交渉もしやすい傾向があります。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 作業時間はどれくらいかかりますか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコン1台で1.5〜2時間、浴室で2〜3時間、キッチンで2.5〜3.5時間が目安です。汚れの程度により前後します。工業粉塵や油汚れがひどい場合は、追加時間がかかる場合があります。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 即日対応は可能ですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">名古屋市内であれば即日対応可能な業者も多数あります。郊外エリアは業者数がやや少ないため、2-3日前の予約がおすすめです。繁忙期（3-4月、9-10月）は早めの予約が必要です。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 立ち会いは必要ですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">作業開始時と終了時の立ち会いが基本です。作業中は外出可能な業者もありますが、貴重品の管理などのため在宅が推奨されます。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. どれくらいの頻度で依頼すべきですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコンは年1回（使用前の5-6月）、浴室・キッチンは半年〜1年に1回が目安です。愛知県は高温多湿な夏場にカビが発生しやすいため、梅雨明け後の清掃も効果的です。工業地域にお住まいの方は、換気扇やエアコンフィルターの清掃頻度を上げることをおすすめします。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">まとめ：愛知で最適なハウスクリーニング業者を見つけよう</h2>
            
            <p className="text-lg mb-6">
              愛知県は製造業が盛んで工業粉塵・油汚れが多い一方、名古屋の高温多湿な気候によりカビも発生しやすい環境です。
              本記事で紹介した<strong>おそうじ革命、おそうじ本舗、カジタク、ベアーズ</strong>は、いずれも愛知県全域で実績豊富な信頼できる業者です。
            </p>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-6">
              <h3 className="text-xl font-bold mb-3">業者選びのポイント まとめ</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>複数業者から見積もりを取る（3社以上）</li>
                <li>口コミ・実績を確認する</li>
                <li>料金体系が明確か確認する</li>
                <li>損害保険加入を確認する</li>
                <li>閑散期（1-2月、6月）を狙う</li>
                <li>工業地域の汚れに対応できる業者を選ぶ</li>
              </ul>
            </div>
            
            <p className="text-lg mb-6">
              愛知県特有の工業粉塵や油汚れには、プロの技術と専用洗剤が効果的です。
              また、高温多湿な夏場のカビ対策として、梅雨明け後のエアコン・浴室クリーニングもおすすめします。
              名古屋市内は業者の選択肢が豊富なため、しっかり比較して最適な業者を選びましょう。
            </p>
            
            <p className="text-lg font-bold">
              まずは気になる業者3社に見積もり依頼をして、料金とサービス内容を比較することから始めてみてください。
            </p>
          </div>
        </div>
      </section>

      {/* 近隣エリア */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">近隣エリアから探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/areas/osaka" className="btn btn-outline">大阪府</Link>
            <Link href="/areas/shizuoka" className="btn btn-outline">静岡県</Link>
            <Link href="/areas/fukuoka" className="btn btn-outline">福岡県</Link>
            <Link href="/areas/kyoto" className="btn btn-outline">京都府</Link>
          </div>
        </div>
      </section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
