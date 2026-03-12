import Link from "next/link";
import { Building2, CheckCircle, Star, MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "大阪府のハウスクリーニング業者おすすめ比較16選 | 料金・口コミ | クリーンナビ",
  description: "大阪府でおすすめのハウスクリーニング業者を徹底比較。大阪市、堺市、東大阪市など全域対応。料金相場、口コミ評価、即日対応可能な業者を掲載。",
  viewport: "width=device-width, initial-scale=1",
};

export default function OsakaArea() {
  const companies = [
    {
      name: "おそうじ革命",
      kitchen: "17,930円〜",
      bathroom: "17,930円〜",
      toilet: "8,250円〜",
      washroom: "8,250円〜",
      recommend: "コスパ重視の人",
      features: ["50日間研修", "全国展開", "低価格"],
    },
    {
      name: "おそうじ本舗",
      kitchen: "19,800円〜",
      bathroom: "19,800円〜",
      toilet: "9,900円〜",
      washroom: "9,350円〜",
      recommend: "エアコン・浴室重視の人",
      features: ["300以上の独自技術", "オプション豊富", "3日以内対応"],
    },
    {
      name: "カジタク",
      kitchen: "19,580円〜",
      bathroom: "19,580円〜",
      toilet: "19,580円（トイレ＆洗面所）",
      washroom: "—",
      recommend: "イオングループの安心感を求める人",
      features: ["イオングループ", "一律料金", "品質保証"],
    },
    {
      name: "ベアーズ",
      kitchen: "18,920円〜",
      bathroom: "19,910円〜",
      toilet: "10,340円〜",
      washroom: "10,340円〜",
      recommend: "家事代行も依頼したい人",
      features: ["25年以上の実績", "女性スタッフ指名可", "前日17時までキャンセル無料"],
    },
    {
      name: "ダスキン",
      kitchen: "20,680円〜",
      bathroom: "22,000円〜",
      toilet: "10,340円〜",
      washroom: "10,340円〜",
      recommend: "高品質な仕上がりを求める人",
      features: ["プロ向け洗浄剤", "オゾン除菌", "高品質"],
    },
  ];

  const areas = [
    "大阪市", "堺市", "岸和田市", "豊中市", "池田市", "吹田市", "泉大津市", "高槻市",
    "貝塚市", "守口市", "枚方市", "茨木市", "八尾市", "泉佐野市", "富田林市", "寝屋川市",
    "河内長野市", "松原市", "大東市", "和泉市", "箕面市", "柏原市", "羽曳野市", "門真市",
    "摂津市", "高石市", "藤井寺市", "東大阪市", "泉南市", "四條畷市", "交野市", "大阪狭山市",
    "阪南市"
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl font-bold">クリーンナビ</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/services/aircon">サービス一覧</Link></li>
              <li><Link href="/price">料金相場</Link></li>
            </ul>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/areas/osaka">大阪府</Link></li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold">大阪府のハウスクリーニング業者おすすめ比較</h1>
            </div>
            <p className="text-xl mb-8">大阪市・堺市・東大阪市など大阪府全域対応！料金・口コミで徹底比較</p>
          </div>
        </div>
      </section>

      {/* 導入文 */}
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">大阪府でハウスクリーニングを依頼するなら？</h2>
            <p className="text-lg mb-4">
              大阪府は人口が東京・神奈川に次いで全国3位と多く、世帯数も非常に多いため、ハウスクリーニング業者の選択肢が豊富です。
              大手チェーンから地域密着型の個人業者まで、様々な業者が存在します。
            </p>
            <p className="text-lg mb-4">
              大阪は単身赴任や転勤で人の入れ替わりが激しく、賃貸マンションの数も多い都市です。
              引越しの時期（2〜4月）は空室クリーニングの依頼が集中するため、予約が取りづらくなる傾向があります。
            </p>
            <p className="text-lg">
              この記事では、大阪府でおすすめのハウスクリーニング業者を料金・サービス内容・口コミで徹底比較してご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* 業者比較表 */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">大阪府おすすめハウスクリーニング業者 比較一覧</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full max-w-6xl mx-auto bg-white">
              <thead>
                <tr>
                  <th>業者名</th>
                  <th>キッチン</th>
                  <th>浴室</th>
                  <th>トイレ</th>
                  <th>洗面所</th>
                  <th>おすすめの人</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, index) => (
                  <tr key={index}>
                    <td className="font-bold">{company.name}</td>
                    <td>{company.kitchen}</td>
                    <td>{company.bathroom}</td>
                    <td>{company.toilet}</td>
                    <td>{company.washroom}</td>
                    <td>{company.recommend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 各業者詳細 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">各業者の詳細</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl">{company.name}</h3>
                  <div className="divider"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold mb-2">料金</h4>
                      <ul className="space-y-1">
                        <li>• キッチン: {company.kitchen}</li>
                        <li>• 浴室: {company.bathroom}</li>
                        <li>• トイレ: {company.toilet}</li>
                        <li>• 洗面所: {company.washroom}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">特徴</h4>
                      <div className="flex flex-wrap gap-2">
                        {company.features.map((feature, idx) => (
                          <div key={idx} className="badge badge-primary">{feature}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 大阪特有のポイント */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">大阪府特有のハウスクリーニングのポイント</h2>
            
            <h3 className="text-2xl font-bold mb-4">気候に関するポイント</h3>
            <p className="mb-4">
              大阪府は瀬戸内型気候に属し、年間を通じて比較的温暖ですが、夏は蒸し暑く、梅雨時期は高湿度になります。
              このため、浴室やエアコン内部、窓のサッシ周りなど、湿気がこもりやすい場所はカビが発生しやすく、定期的なプロのクリーニングが重要です。
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">大都市ならではのポイント</h3>
            <p className="mb-4">
              大阪府の都市部では、狭小住宅やマンションが多く見られます。また、大阪湾からの塩分を含んだ風により、
              金属の腐食や外壁の劣化が促進されやすい環境です。都市部の大気汚染により外壁や窓が汚れやすいため、
              定期的な清掃が必要です。
            </p>
          </div>
        </div>
      </section>

      {/* 対応エリア */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />対応エリア（大阪府全域）
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {areas.map((area) => (
                <div key={area} className="badge badge-lg badge-outline hover:badge-primary cursor-pointer transition-all p-4">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 料金相場 */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">大阪府のハウスクリーニング料金相場</h2>
            
            <h3 className="text-2xl font-bold mb-4">間取り別料金相場</h3>
            <ul className="space-y-2">
              <li>• 1LDK以下：39,000円〜74,000円</li>
              <li>• 1LDK／2DK：50,000円〜92,000円</li>
              <li>• 2LDK／3DK：63,000円〜123,000円</li>
              <li>• 3LDK／4DK：79,000円〜220,000円</li>
              <li>• 4LDK/5DK：94,000円〜211,000円</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">場所別料金相場</h3>
            <ul className="space-y-2">
              <li>• エアコンクリーニング：10,000円〜15,000円</li>
              <li>• キッチンクリーニング：18,000円〜20,000円</li>
              <li>• 浴室クリーニング：19,000円〜22,000円</li>
              <li>• トイレクリーニング：9,000円〜10,000円</li>
              <li>• 洗面所クリーニング：9,000円〜10,000円</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 賢く安く依頼するコツ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">大阪でハウスクリーニングを賢く安く依頼する5つのコツ</h2>
            
            <div className="space-y-6">
              <div className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title">1. 複数の業者から見積もりを取る</h3>
                  <p>相見積もりで料金とサービス内容を比較し、バランスの良い業者を選びましょう。</p>
                </div>
              </div>

              <div className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title">2. 閑散期を狙って予約する</h3>
                  <p>1〜2月や6〜7月など引越しシーズンを外した時期は、料金が下がる傾向にあります。</p>
                </div>
              </div>

              <div className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title">3. セット割引をうまく活用する</h3>
                  <p>「キッチン＋浴室＋トイレ」など、水回りをまとめて依頼すると割安になります。</p>
                </div>
              </div>

              <div className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title">4. 必要な場所だけに絞って依頼する</h3>
                  <p>本当に掃除してほしい場所だけをピンポイントで依頼し、費用を抑えましょう。</p>
                </div>
              </div>

              <div className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title">5. 問合せは電話で行う</h3>
                  <p>大阪ではコミュニケーションを大切にする傾向があり、電話交渉で柔軟に対応してくれるケースもあります。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">よくある質問（FAQ）</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="collapse collapse-plus bg-base-100 shadow">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Q. どこまで掃除してもらえる？
              </div>
              <div className="collapse-content">
                <p>業者によって異なりますが、一般的には換気扇の奥や浴室のカビ取りなど、家庭では手が届きにくい部分まで対応してもらえます。</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 shadow">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                Q. 作業当日は何をすればいいですか？立ち会いは必要？
              </div>
              <div className="collapse-content">
                <p>基本的には立ち会いをお願いする業者がほとんどです。ただし掃除の様子をずっと見守る必要はなく、掃除の間に家事や在宅仕事をしていても大丈夫です。</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 shadow">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                Q. 駐車スペースがない場合はどうなりますか？
              </div>
              <div className="collapse-content">
                <p>近隣のコインパーキングを利用することになります。その際の駐車料金は、実費で請求されることがほとんどです。</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 shadow">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                Q. 支払い方法は？クレジットカードは使えますか？
              </div>
              <div className="collapse-content">
                <p>クレジットカード対応の業者も増えていますが、大阪では現金のみの業者も一定数います。依頼前に支払い方法を確認しておきましょう。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 近隣エリア */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">近隣エリアから探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/areas/hyogo" className="btn btn-outline">兵庫県</Link>
            <Link href="/areas/kyoto" className="btn btn-outline">京都府</Link>
            <Link href="/areas/aichi" className="btn btn-outline">愛知県</Link>
            <Link href="/areas/hiroshima" className="btn btn-outline">広島市</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">大阪府で最適なハウスクリーニング業者を見つけよう</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/services/aircon" className="btn btn-lg bg-white text-primary hover:bg-base-200">サービスから探す</Link>
            <Link href="/price" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary">料金相場を見る</Link>
          </div>
        </div>
      </section>

      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <p className="font-bold text-lg">クリーンナビ</p>
          <p className="text-sm mt-2">© 2024 クリーンナビ All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
