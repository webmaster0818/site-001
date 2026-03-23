import Link from "next/link";
import { Sparkles, Award, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "大阪市東淀川区のハウスクリーニング業者おすすめ比較 | クリーンナビ",
  description: "大阪市東淀川区でおすすめのハウスクリーニング業者を徹底比較。全域対応。料金相場、口コミ評価を掲載。",
};

export default function OsakaHigashiyodogawaArea() {
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

  const areas = ['淡路', '上新庄', '東淀川', '菅原', '豊里', '井高野'];

  return (
    <div className="min-h-screen bg-base-100">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">大阪市東淀川区のハウスクリーニング業者比較</h1>
          <p className="text-xl">東淀川区全域対応！信頼できる業者をご紹介</p>
        </div>
      </section>

      {/* 導入文 */}
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">大阪市東淀川区でハウスクリーニングを依頼するなら？</h2>
            <p className="text-lg">東淀川区は大阪市の北東部に位置し、淀川の東側に広がる住宅地中心のエリアです。阪急や地下鉄など交通の便が良好な地域です。</p>
          </div>
        </div>
      </section>

      {/* 業者比較テーブル */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">おすすめ業者比較</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full max-w-6xl mx-auto bg-white">
              <thead>
                <tr>
                  <th className="text-lg">業者名</th>
                  <th className="text-lg">キッチン</th>
                  <th className="text-lg">浴室</th>
                  <th className="text-lg">トイレ</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, index) => {
                  const Icon = companyIcons[index];
                  const gradient = companyColors[index];
                  return (
                    <tr key={company.name} className="hover">
                      <td>
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="font-bold text-lg">{company.name}</span>
                        </div>
                      </td>
                      <td className="text-lg">{company.kitchen}</td>
                      <td className="text-lg">{company.bathroom}</td>
                      <td className="text-lg">{company.toilet}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 各業者詳細 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">各業者の詳細</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {companies.map((company, index) => {
              const Icon = companyIcons[index];
              const gradient = companyColors[index];
              return (
                <div key={company.name} className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="card-title text-2xl">{company.name}</h3>
                    </div>
                    <div className="space-y-2">
                      <p><strong>キッチン:</strong> {company.kitchen}</p>
                      <p><strong>浴室:</strong> {company.bathroom}</p>
                      <p><strong>トイレ:</strong> {company.toilet}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* エリア特有のポイント */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">東淀川区でハウスクリーニングを依頼する際のポイント</h2>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">淀川沿いの住宅地が多い、湿気対策が重要</h3>
            <p className="text-lg mb-4">
              東淀川区は大阪市の北東部に位置し、淀川の東側に広がる住宅地中心のエリアです。
              淀川沿いに住宅地が多く、川の影響で湿気が高い傾向があります。
              特に浴室、キッチン、洗面所などの水回りは湿気がこもりやすく、カビが発生しやすくなります。
              定期的な浴室・キッチンクリーニング（年1-2回）と防カビ処理で、清潔で快適な住環境を保てます。
              業者選びでは、淀川沿いエリアでのクリーニング経験が豊富で、湿気対策やカビ対策の知識がある業者を選ぶことが重要です。
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">住宅密集地が多い、カビ・換気対策が必要</h3>
            <p className="text-lg mb-4">
              東淀川区は住宅密集地が多く、戸建て住宅やマンションが多数建設されています。
              住宅密集地では、建物間の距離が近く、日当たりや風通しが悪くなりやすい環境です。
              日当たりが悪い部屋では、湿気がこもりやすく、カビが発生しやすくなります。
              また、換気が十分にできない環境では、室内の空気が淀み、カビやダニが繁殖しやすくなります。
              定期的な浴室・キッチンクリーニングと換気扇クリーニング（年1-2回）で、カビ・ダニ対策ができます。
              業者選びでは、住宅密集地での清掃経験が豊富で、換気対策の知識がある業者を選びましょう。
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">阪急・地下鉄など交通の便が良好、業者の選択肢が豊富</h3>
            <p className="text-lg mb-4">
              東淀川区は阪急京都線、阪急千里線、地下鉄今里筋線などが通っており、交通の便が非常に良好です。
              淡路駅、上新庄駅など主要駅があり、大阪市内外からアクセスしやすいエリアです。
              多くのハウスクリーニング業者が営業しており、大手チェーンから地域密着型まで選択肢が豊富です。
              即日対応可能な業者も多数あり、複数社を比較することで、最適な業者を見つけやすい環境といえます。
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
                  <p>東淀川区は業者が多いため、最低3社から見積もりを取ることをおすすめします。湿気対策・カビ対策の料金も比較しましょう。</p>
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
                  <p>エアコン+浴室など複数箇所をまとめて依頼すると、セット割引が適用される業者が多いです。淀川沿いエリアでは浴室+キッチンのセット依頼がお得です。</p>
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
                <h3 className="text-xl font-bold mb-2">✓ 淀川沿い・住宅密集地での清掃経験、湿気・カビ対策の知識</h3>
                <p className="text-lg">東淀川区は淀川沿いの住宅地が多く、湿気対策が重要です。また、住宅密集地が多く、カビ・換気対策も必要です。淀川沿い・住宅密集地での清掃経験が豊富で、湿気・カビ対策の知識がある業者を選びましょう。見積もり時に立地（淀川沿いか、住宅密集地かなど）を伝えると、適切な提案がもらえます。</p>
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
                  Q. 大阪市東淀川区でハウスクリーニングの料金相場はいくらですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコンクリーニングは8,000円〜15,000円、浴室クリーニングは12,000円〜20,000円、キッチンクリーニングは10,000円〜18,000円が相場です。東淀川区は業者が多く競争が激しいため、大阪府内でも比較的リーズナブルな価格帯です。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 淀川沿いの湿気対策はどうすればいいですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">東淀川区は淀川沿いに住宅地が多く、川の影響で湿気が高い傾向があります。特に浴室、キッチン、洗面所などの水回りは湿気がこもりやすく、カビが発生しやすくなります。定期的な浴室・キッチンクリーニング（年1-2回）と防カビ処理で、清潔で快適な住環境を保てます。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 住宅密集地でのカビ対策はどうすればいいですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">東淀川区は住宅密集地が多く、日当たりや風通しが悪くなりやすい環境です。日当たりが悪い部屋では、湿気がこもりやすく、カビが発生しやすくなります。定期的な浴室・キッチンクリーニングと換気扇クリーニング（年1-2回）で、カビ・ダニ対策ができます。換気を十分に行うことも重要です。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 作業時間はどれくらいかかりますか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコン1台で1.5〜2時間、浴室で2〜3時間、キッチンで2.5〜3.5時間が目安です。汚れの程度により前後します。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 即日対応は可能ですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">東淀川区は業者数が多く、交通の便も非常に良いため、即日対応可能な業者も多数あります。ただし、繁忙期（3-4月、9-10月）は予約が取りづらいため、1週間前の予約がおすすめです。特に週末は予約が集中するため、平日の方が予約しやすい傾向があります。</p>
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
                  <p className="text-lg">エアコンは年1回（使用前の5-6月）、浴室・キッチンは半年〜1年に1回が目安です。東淀川区は淀川沿いで湿気が多いため、浴室とキッチンは年2回（梅雨前の5月と秋の10月）の清掃をおすすめします。</p>
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
            <h2 className="text-3xl font-bold mb-8">まとめ：東淀川区で最適なハウスクリーニング業者を見つけよう</h2>
            
            <p className="text-lg mb-6">
              東淀川区は大阪市の北東部に位置し、淀川の東側に広がる住宅地中心のエリアです。
              本記事で紹介した<strong>おそうじ革命、おそうじ本舗、カジタク、ベアーズ</strong>は、いずれも東淀川区全域で実績豊富な信頼できる業者です。
            </p>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-6">
              <h3 className="text-xl font-bold mb-3">業者選びのポイント まとめ</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>複数業者から見積もりを取る（湿気対策・カビ対策の料金も比較）</li>
                <li>口コミ・実績を確認する</li>
                <li>料金体系が明確か確認する</li>
                <li>損害保険加入を確認する</li>
                <li>閑散期（1-2月、6月）を狙う</li>
                <li>淀川沿い・住宅密集地での清掃経験、湿気・カビ対策の知識を確認する</li>
              </ul>
            </div>
            
            <p className="text-lg mb-6">
              東淀川区は淀川沿いの住宅地が多く、湿気対策が重要です。
              また、住宅密集地が多く、カビ・換気対策も必要です。
              浴室・キッチンは年2回（梅雨前の5月と秋の10月）の清掃で、清潔で快適な住環境を保てます。
              阪急・地下鉄など交通の便が良好で、業者の選択肢が豊富です。
            </p>
            
            <p className="text-lg font-bold">
              まずは気になる業者3社に見積もり依頼をして、料金とサービス内容を比較することから始めてみてください。
            </p>
          </div>
        </div>
      </section>

      {/* 料金相場 */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">東淀川区の料金相場</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <h3 className="text-xl font-bold mb-2">エアコン</h3>
                <p className="text-3xl font-bold text-primary">8,000円〜</p>
                <p className="text-sm text-gray-600">1台あたり</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <h3 className="text-xl font-bold mb-2">浴室</h3>
                <p className="text-3xl font-bold text-primary">12,000円〜</p>
                <p className="text-sm text-gray-600">一式</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <h3 className="text-xl font-bold mb-2">キッチン</h3>
                <p className="text-3xl font-bold text-primary">10,000円〜</p>
                <p className="text-sm text-gray-600">一式</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 対応エリア */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">東淀川区内の対応エリア</h2>
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {areas.map((area) => (
              <div key={area} className="badge badge-lg badge-outline">{area}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 近隣エリア */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">近隣エリアから探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/areas/osaka" className="btn btn-outline">大阪府</Link>
            <Link href="/areas/osaka-miyakojima" className="btn btn-outline">大阪市都島区</Link>
            <Link href="/areas/osaka-nishiyodogawa" className="btn btn-outline">大阪市西淀川区</Link>
            <Link href="/areas/osaka-yodogawa" className="btn btn-outline">大阪市淀川区</Link>
          </div>
        </div>
      </section>

      <footer className="footer footer-center p-10 bg-base-200">
        <div>
          <p className="font-bold text-lg">クリーンナビ</p>
          <p className="text-sm mt-2">© 2024 クリーンナビ All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
