import Link from "next/link";
import { Sparkles, Award, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "足立区のハウスクリーニング業者おすすめ比較 | クリーンナビ",
  description: "足立区でおすすめのハウスクリーニング業者を徹底比較。全域対応。料金相場、口コミ評価を掲載。",
};

export default function TokyoAdachiArea() {
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
    { 
      name: "エディオンハウスクリーン", 
      kitchen: "18,500円〜", 
      bathroom: "19,250円〜", 
      toilet: "9,900円〜",
      description: "家電量販店エディオンが提供する安心のハウスクリーニング。家電に詳しいスタッフが対応。",
      hours: "10:00-19:00（年末年始除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、家電周辺クリーニング",
      website: "https://www.edion.co.jp/"
    },
    { 
      name: "クリーンプロフェッショナルズ", 
      kitchen: "17,050円〜", 
      bathroom: "18,150円〜", 
      toilet: "8,250円〜",
      description: "プロの技術力と低価格を両立。全国対応で地域密着型のサービスを展開。",
      hours: "8:00-20:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、窓クリーニング",
      website: "https://cleanpro.co.jp/"
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
    { 
      name: "ハウスクリーニングのミライ", 
      kitchen: "18,370円〜", 
      bathroom: "19,030円〜", 
      toilet: "9,130円〜",
      description: "最新の清掃技術と環境に優しい洗剤を使用。若手スタッフの丁寧な対応が評判。",
      hours: "9:30-18:30（年末年始除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、床クリーニング",
      website: "https://mirai-clean.jp/"
    },
    { 
      name: "ホームクリーンサービス", 
      kitchen: "17,380円〜", 
      bathroom: "18,480円〜", 
      toilet: "8,580円〜",
      description: "創業25年の実績。地域密着型で細かい要望にも柔軟に対応する中堅業者。",
      hours: "9:00-18:00（日祝除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、ベランダクリーニング",
      website: "https://homeclean-service.com/"
    },
  ];

  const areas = ['北千住', '綾瀬', '竹ノ塚', '西新井', '梅島', '六町'];

  return (
    <div className="min-h-screen bg-base-100">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">足立区のハウスクリーニング業者比較</h1>
          <p className="text-xl">足立区全域対応！信頼できる業者をご紹介</p>
        </div>
      </section>

      {/* 導入文 */}
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">足立区でハウスクリーニングを依頼するなら？</h2>
            <p className="text-lg">足立区は東京23区の最北端に位置し、荒川沿いに広がる庶民的な住宅地です。ファミリー世帯が多く、下町の雰囲気が残る親しみやすいエリアです。</p>
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
            <h2 className="text-3xl font-bold mb-8">足立区でハウスクリーニングを依頼する際のポイント</h2>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">東京23区最北端・荒川沿いの庶民的な住宅地</h3>
            <p className="text-lg mb-4">
              足立区は東京23区の最北端に位置し、荒川や隅田川に沿って広がる庶民的な住宅地です。
              北千住、綾瀬、竹ノ塚などの駅周辺には商店街が多く、下町の雰囲気が残る親しみやすいエリアです。
              ファミリー世帯が多く、戸建て住宅やマンションが混在しています。
              比較的リーズナブルな料金で質の高いサービスを提供する業者が多いのが特徴です。
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">荒川・隅田川沿いで湿気が多く水回りのカビ対策が重要</h3>
            <p className="text-lg mb-4">
              足立区は荒川と隅田川に挟まれた低地に位置しており、湿気が多い環境です。
              特に梅雨時期（6-7月）や夏場（7-9月）は湿度が高く、浴室、キッチン、洗面所などの水回りにカビが発生しやすくなります。
              定期的な浴室クリーニングやキッチンの換気扇清掃で、カビの発生を抑えることが重要です。
              プロによる年1-2回の徹底清掃で、清潔で快適な住環境を保てます。
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">埼玉県に隣接し業者の選択肢が豊富</h3>
            <p className="text-lg mb-4">
              足立区は埼玉県（草加市、八潮市など）に隣接しており、東京都内・埼玉県の両方から多くのハウスクリーニング業者が営業しています。
              大手チェーンから地域密着型まで選択肢が豊富で、比較的リーズナブルな価格で依頼できる業者も多いです。
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
                  <p>足立区は業者が多いため、最低3社から見積もりを取ることをおすすめします。埼玉県の業者も含めて比較すると、より良い条件が見つかることも。</p>
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
                  <p>エアコン+浴室など複数箇所をまとめて依頼すると、セット割引が適用される業者が多いです。湿気が多い環境なので、浴室+キッチンのセット依頼がお得です。</p>
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
                <h3 className="text-xl font-bold mb-2">✓ 湿気・カビ対策の知識と経験</h3>
                <p className="text-lg">足立区は荒川・隅田川沿いで湿気が多いため、カビ対策の知識が豊富な業者を選びましょう。浴室やキッチンのカビ除去経験が豊富で、防カビ処理も提供している業者が安心です。</p>
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
                  Q. 足立区でハウスクリーニングの料金相場はいくらですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコンクリーニングは8,000円〜15,000円、浴室クリーニングは12,000円〜20,000円、キッチンクリーニングは10,000円〜18,000円が相場です。足立区は業者が多く競争が激しいため、東京23区の中でも比較的リーズナブルな価格帯です。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 荒川・隅田川沿いの湿気対策はどうすればいいですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">足立区は荒川と隅田川に挟まれた低地で、湿気が多い環境です。特に梅雨時期（6-7月）や夏場（7-9月）は湿度が高く、浴室・キッチン・洗面所にカビが発生しやすくなります。プロによる年1-2回の浴室・キッチンクリーニングと防カビ処理で、カビの発生を抑えることができます。普段から換気を心がけることも重要です。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 埼玉県の業者も依頼できますか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">はい、足立区は埼玉県（草加市、八潮市など）に隣接しているため、埼玉県の業者も多数対応しています。特に竹ノ塚駅、六町駅周辺など埼玉県寄りのエリアでは、埼玉県の業者も選択肢に入れると、より良い条件が見つかることがあります。見積もりを比較する際は、東京都内・埼玉県の両方から検討することをおすすめします。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 作業時間はどれくらいかかりますか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコン1台で1.5〜2時間、浴室で2〜3時間、キッチンで2.5〜3.5時間が目安です。汚れの程度により前後します。湿気が多い環境でカビがひどい場合、追加時間がかかることもあります。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 即日対応は可能ですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">足立区は業者数が多いため、即日対応可能な業者もあります。ただし、繁忙期（3-4月、9-10月）は予約が取りづらいため、1週間前の予約がおすすめです。特に週末は予約が集中するため、平日の方が予約しやすい傾向があります。</p>
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
                  <p className="text-lg">エアコンは年1回（使用前の5-6月）、浴室・キッチンは半年〜1年に1回が目安です。足立区は湿気が多くカビが発生しやすいため、浴室とキッチンは年2回（梅雨前の5月と秋の10月）の清掃をおすすめします。</p>
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
            <h2 className="text-3xl font-bold mb-8">まとめ：足立区で最適なハウスクリーニング業者を見つけよう</h2>
            
            <p className="text-lg mb-6">
              足立区は東京23区の最北端に位置し、荒川・隅田川沿いに広がる庶民的な住宅地です。
              本記事で紹介した<strong>おそうじ革命、おそうじ本舗、カジタク、ベアーズ</strong>は、いずれも足立区全域で実績豊富な信頼できる業者です。
            </p>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-6">
              <h3 className="text-xl font-bold mb-3">業者選びのポイント まとめ</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>複数業者から見積もりを取る（東京都内・埼玉県の両方から3社以上）</li>
                <li>口コミ・実績を確認する</li>
                <li>料金体系が明確か確認する</li>
                <li>損害保険加入を確認する</li>
                <li>閑散期（1-2月、6月）を狙う</li>
                <li>湿気・カビ対策の知識と経験がある業者を選ぶ</li>
              </ul>
            </div>
            
            <p className="text-lg mb-6">
              足立区は荒川・隅田川沿いで湿気が多く、カビが発生しやすい環境です。
              浴室やキッチンは年2回（梅雨前の5月と秋の10月）の清掃で、清潔で快適な住環境を保てます。
              埼玉県に隣接しているため、埼玉県の業者も含めて比較することで、より良い条件が見つかります。
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
          <h2 className="text-3xl font-bold text-center mb-12">足立区の料金相場</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">足立区内の対応エリア</h2>
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
            <Link href="/areas/tokyo-nerima" className="btn btn-outline">練馬区</Link>
            <Link href="/areas/saitama" className="btn btn-outline">埼玉県</Link>
            <Link href="/areas/tokyo-katsushika" className="btn btn-outline">葛飾区</Link>
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
