import Link from "next/link";
import { Sparkles, Award, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "中央区のハウスクリーニング業者おすすめ比較 | クリーンナビ",
  description: "中央区でおすすめのハウスクリーニング業者を徹底比較。全域対応。料金相場、口コミ評価を掲載。",
};

export default function TokyoChuoArea() {
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
  ];

      const companies = [
    { 
      name: "おそうじ革命", 
      kitchen: "17,930円〜", 
      bathroom: "17,930円〜", 
      toilet: "8,250円〜",
      description: "技術力と価格のバランスが良く、約420店舗を全国展開。50日間の研修を受けたスタッフが対応。",
      hours: "9:00-20:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇クリーニング",
      website: "https://www.osoujikakumei.jp/"
    },
    { 
      name: "おそうじ本舗", 
      kitchen: "19,800円〜", 
      bathroom: "19,800円〜", 
      toilet: "9,900円〜",
      description: "全国47都道府県に店舗展開する最大手。早朝・夜間対応も可能で予約が取りやすい。",
      hours: "8:00-21:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、洗濯機、外壁クリーニング",
      website: "https://www.osoujihonpo.com/"
    },
    { 
      name: "カジタク", 
      kitchen: "19,580円〜", 
      bathroom: "19,580円〜", 
      toilet: "19,580円",
      description: "イオングループ運営で安心。仕上がり満足度97%を誇る高品質サービス。",
      hours: "10:00-19:00（年末年始除く）",
      services: "エアコン、浴室、キッチン、換気扇、窓・サッシクリーニング",
      website: "https://www.kajitaku.com/"
    },
    { 
      name: "ベアーズ", 
      kitchen: "18,920円〜", 
      bathroom: "19,910円〜", 
      toilet: "10,340円〜",
      description: "家事代行大手による質の高いサービス。スタッフ教育に力を入れ、丁寧な作業が特徴。",
      hours: "9:00-20:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://www.happy-bears.com/"
    },
    { 
      name: "ダスキン", 
      kitchen: "18,700円〜", 
      bathroom: "19,800円〜", 
      toilet: "9,460円〜",
      description: "清掃業界の老舗大手。47都道府県に拠点があり、専門資器材と洗剤で徹底清掃。",
      hours: "9:00-18:00（店舗により異なる）",
      services: "エアコン、浴室、キッチン、トイレ、レンジフード、フロアクリーニング",
      website: "https://www.duskin.jp/servicemaster/"
    },
    { 
      name: "東京ガスのハウスクリーニング", 
      kitchen: "20,900円〜", 
      bathroom: "19,800円〜", 
      toilet: "11,000円〜",
      description: "大手ガス会社による安心サービス。独自の清掃技術をマスターしたスタッフが対応。",
      hours: "8:30-17:00（平日・土日祝）",
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
      name: "おそうじマスター", 
      kitchen: "16,500円〜", 
      bathroom: "17,600円〜", 
      toilet: "7,700円〜",
      description: "全国1000以上の拠点で24時間対応。近くのスタッフがすぐに正確な見積もりを提示。",
      hours: "24時間対応（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://osoji-master.info/"
    },
    { 
      name: "アズマのホームクリーニング", 
      kitchen: "18,150円〜", 
      bathroom: "18,700円〜", 
      toilet: "9,350円〜",
      description: "創業130年の老舗。年間実績20,000件、独自の研修制度で業界水準を超えるサービス。",
      hours: "9:00-18:00（年末年始除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、窓クリーニング",
      website: "https://www.azuma-cleaning.com/"
    },
    { 
      name: "くらしのセゾン", 
      kitchen: "19,250円〜", 
      bathroom: "20,350円〜", 
      toilet: "10,450円〜",
      description: "クレディセゾングループ。セゾン/UCカード会員は全メニュー5%OFF、永久不滅ポイント利用可能。",
      hours: "10:00-18:00（年末年始除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://www.kurashi-saison.co.jp/cleaning/"
    },
  ];

  const areas = ['銀座', '日本橋', '築地', '八重洲', '人形町', '月島'];

  return (
    <div className="min-h-screen bg-base-100">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">中央区のハウスクリーニング業者比較</h1>
          <p className="text-xl">中央区全域対応！信頼できる業者をご紹介</p>
        </div>
      </section>

      {/* 導入文 */}
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">中央区でハウスクリーニングを依頼するなら？</h2>
            <p className="text-lg">中央区は東京23区の中央部に位置し、銀座、日本橋、築地などのビジネス街と高級住宅街が混在するエリアです。都心の利便性と高品質な生活環境が魅力です。</p>
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
                  const Icon = companyIcons[index % companyIcons.length];
                  const gradient = companyColors[index % companyColors.length];
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
              const Icon = companyIcons[index % companyIcons.length];
              const gradient = companyColors[index % companyColors.length];
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
            <h2 className="text-3xl font-bold mb-8">中央区でハウスクリーニングを依頼する際のポイント</h2>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">東京23区中央部・ビジネス街と高級住宅街が混在</h3>
            <p className="text-lg mb-4">
              中央区は東京23区の中央部に位置し、銀座、日本橋、築地などのビジネス街と高級住宅街が混在するエリアです。
              昼間人口と夜間人口の差が大きく、平日は多くのビジネスマンが行き交い、夜間や休日は静かな住宅地となります。
              高級タワーマンションや築地市場跡地の再開発など、新しい住宅が増えており、高品質なハウスクリーニングサービスの需要が高いエリアです。
              特に銀座周辺の高級住宅では、細やかな配慮とプロフェッショナルな技術が求められます。
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">高層マンションが多く窓清掃や高所作業が重要</h3>
            <p className="text-lg mb-4">
              中央区は高層タワーマンションが非常に多く、特に勝どき、晴海、月島などの湾岸エリアには30階以上の超高層マンションが林立しています。
              高層階特有の清掃ニーズ（窓の外側清掃、高所作業、搬入の難しさ）に対応できる業者を選ぶことが重要です。
              また、高層階は風が強いため、窓やベランダに汚れが付着しやすく、定期的な清掃が必要です。
              高所作業の資格を持つスタッフや、タワーマンション専門の業者を選びましょう。
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">都心の利便性と高品質なサービスを提供する業者が豊富</h3>
            <p className="text-lg mb-4">
              中央区は東京の中心部であり、多くの高品質なハウスクリーニング業者が営業しています。
              大手チェーンから高級住宅専門の業者まで選択肢が豊富で、競争も激しいため、サービスの質も高い傾向があります。
              ただし、都心部のため料金はやや高めの設定となっている業者もあります。
              複数社を比較することで、自分のニーズに合った最適な業者を見つけやすい環境といえます。
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
                  <p>中央区は業者が非常に多いため、最低3社から見積もりを取ることをおすすめします。タワーマンション専門業者と大手チェーンを比較すると良い条件が見つかります。</p>
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
                  <p>エアコン+浴室など複数箇所をまとめて依頼すると、セット割引が適用される業者が多いです。タワーマンションの場合、窓+エアコンのセット依頼がお得です。</p>
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
                <h3 className="text-xl font-bold mb-2">✓ 高級住宅・タワーマンションの経験</h3>
                <p className="text-lg">中央区は高級住宅街とタワーマンションが多いため、高級住宅やタワーマンションの清掃経験が豊富な業者を選びましょう。細やかな配慮、高所作業の安全対策、高級設備への対応力がある業者が安心です。</p>
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
                  Q. 中央区でハウスクリーニングの料金相場はいくらですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコンクリーニングは8,000円〜15,000円、浴室クリーニングは12,000円〜20,000円、キッチンクリーニングは10,000円〜18,000円が相場です。中央区は都心部のため、他の区よりやや高めの設定となっている業者もあります。タワーマンションの高層階（20階以上）では、窓清掃に追加料金がかかることがあります。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 高級住宅街でのクリーニングの注意点はありますか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">中央区は銀座周辺など高級住宅街が多く、高級設備（輸入エアコン、大理石床、高級家具など）がある住宅も少なくありません。このような場合、通常のクリーニングとは異なる専門知識と技術が必要です。高級住宅の清掃経験が豊富で、細やかな配慮ができる業者を選びましょう。見積もり時に設備の詳細を伝えることをおすすめします。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. タワーマンションの高層階でも窓清掃は可能ですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">はい、中央区はタワーマンションが多いため、高層階の窓清掃に対応できる業者も多数あります。ただし、高層階（10階以上）の場合、安全対策の関係で追加料金がかかることが多いです。また、マンション管理組合の許可が必要な場合もあるため、事前に確認することをおすすめします。ゴンドラや高所作業の資格を持つ業者を選びましょう。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 作業時間はどれくらいかかりますか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコン1台で1.5〜2時間、浴室で2〜3時間、キッチンで2.5〜3.5時間が目安です。汚れの程度により前後します。高層階の場合、搬入や準備に時間がかかることもあります。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 即日対応は可能ですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">中央区は業者数が非常に多いため、即日対応可能な業者もあります。ただし、繁忙期（3-4月、9-10月）は予約が取りづらいため、1週間前の予約がおすすめです。特に週末は予約が集中するため、平日の方が予約しやすい傾向があります。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 立ち会いは必要ですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">作業開始時と終了時の立ち会いが基本です。作業中は外出可能な業者もありますが、貴重品の管理などのため在宅が推奨されます。高級住宅の場合、在宅での立ち会いが望ましいです。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. どれくらいの頻度で依頼すべきですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコンは年1回（使用前の5-6月）、浴室・キッチンは半年〜1年に1回が目安です。タワーマンションの高層階は窓やベランダに汚れが付着しやすいため、年2回（春・秋）の窓清掃をおすすめします。</p>
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
            <h2 className="text-3xl font-bold mb-8">まとめ：中央区で最適なハウスクリーニング業者を見つけよう</h2>
            
            <p className="text-lg mb-6">
              中央区は東京23区の中央部に位置し、ビジネス街と高級住宅街が混在するエリアです。
              本記事で紹介した<strong>おそうじ革命、おそうじ本舗、カジタク、ベアーズ</strong>は、いずれも中央区全域で実績豊富な信頼できる業者です。
            </p>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-6">
              <h3 className="text-xl font-bold mb-3">業者選びのポイント まとめ</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>複数業者から見積もりを取る（タワーマンション専門業者も含めて3社以上）</li>
                <li>口コミ・実績を確認する</li>
                <li>料金体系が明確か確認する</li>
                <li>損害保険加入を確認する</li>
                <li>閑散期（1-2月、6月）を狙う</li>
                <li>高級住宅・タワーマンションの経験を確認する</li>
              </ul>
            </div>
            
            <p className="text-lg mb-6">
              中央区は銀座、日本橋、築地など高級住宅街が多く、タワーマンションも非常に多い環境です。
              高級設備や高層階特有の清掃ニーズに対応できる業者を選ぶことが重要です。
              細やかな配慮とプロフェッショナルな技術を持つ業者を選びましょう。
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
          <h2 className="text-3xl font-bold text-center mb-12">中央区の料金相場</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">中央区内の対応エリア</h2>
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
            <Link href="/areas/tokyo" className="btn btn-outline">東京都</Link>
            <Link href="/areas/tokyo-minato" className="btn btn-outline">港区</Link>
            <Link href="/areas/tokyo-chiyoda" className="btn btn-outline">千代田区</Link>
            <Link href="/areas/tokyo-koto" className="btn btn-outline">江東区</Link>
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
