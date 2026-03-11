import Link from "next/link";
import { CheckCircle, AlertTriangle, Star, Shield, Clock, DollarSign, Users, FileCheck } from "lucide-react";

export const metadata = {
  title: "ハウスクリーニング業者の選び方完全ガイド | クリーンナビ",
  description: "失敗しないハウスクリーニング業者の選び方を徹底解説。料金相場、チェックポイント、よくあるトラブルと対策まで完全網羅。",
  viewport: "width=device-width, initial-scale=1",
};

export default function Guide() {
  const checkpoints = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "損害保険への加入",
      description: "作業中の事故や破損に備えて、損害保険に加入している業者を選びましょう。",
      importance: "必須",
      color: "primary",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "口コミ・評価の確認",
      description: "実際の利用者の口コミや評価を確認。極端に評価が低い業者は避けましょう。",
      importance: "重要",
      color: "secondary",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "料金の透明性",
      description: "見積もりが明確で、追加料金の有無をしっかり説明してくれる業者を選びましょう。",
      importance: "重要",
      color: "accent",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "スタッフの対応",
      description: "電話やメールでの対応が丁寧で、質問にしっかり答えてくれる業者が安心です。",
      importance: "推奨",
      color: "info",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "実績と経験",
      description: "創業年数や施工実績が豊富な業者は、ノウハウがあり安心できます。",
      importance: "推奨",
      color: "success",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "見積もりの詳細さ",
      description: "作業内容、使用する洗剤、所要時間などが明記された見積もりを提示してくれる業者を選びましょう。",
      importance: "推奨",
      color: "warning",
    },
  ];

  const troubles = [
    {
      title: "追加料金を請求された",
      cause: "見積もり時に詳細な説明がなかった",
      solution: "事前に追加料金の可能性について確認し、書面で見積もりをもらう",
    },
    {
      title: "仕上がりに不満",
      cause: "作業範囲や仕上がりの基準が不明確だった",
      solution: "作業前に仕上がりイメージを確認し、保証内容を確認する",
    },
    {
      title: "物を壊された",
      cause: "損害保険に未加入、または保証がなかった",
      solution: "損害保険加入の有無を確認し、事前に貴重品は移動させる",
    },
    {
      title: "予約時間に来ない",
      cause: "スケジュール管理が甘い業者だった",
      solution: "口コミで時間厳守かを確認し、前日に確認連絡をもらう",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "サービス内容を決める",
      description: "エアコン、浴室、キッチンなど、どこを清掃したいか明確にしましょう。",
    },
    {
      step: 2,
      title: "複数社から見積もり",
      description: "最低3社から見積もりを取り、料金とサービス内容を比較しましょう。",
    },
    {
      step: 3,
      title: "口コミ・評価を確認",
      description: "実際の利用者の口コミや評価をチェックし、信頼できる業者か確認しましょう。",
    },
    {
      step: 4,
      title: "保険・保証を確認",
      description: "損害保険の加入状況と、作業後の保証内容を確認しましょう。",
    },
    {
      step: 5,
      title: "契約内容を確認",
      description: "作業範囲、料金、所要時間、キャンセルポリシーなどを書面で確認しましょう。",
    },
    {
      step: 6,
      title: "予約・作業実施",
      description: "希望日時を予約し、当日は立ち会って作業内容を確認しましょう。",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* ヘッダー */}
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl font-bold">
              クリーンナビ
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/services/aircon">サービス一覧</Link></li>
              <li><Link href="/price">料金相場</Link></li>
            </ul>
          </div>
        </div>
      </header>

      {/* パンくずリスト */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/guide">業者選びガイド</Link></li>
          </ul>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            失敗しないハウスクリーニング業者の選び方
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            初めての方でも安心！ハウスクリーニング業者を選ぶ際のポイントを徹底解説します
          </p>
        </div>
      </section>

      {/* チェックポイント */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            業者選びの6つのチェックポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {checkpoints.map((point, index) => (
              <div key={index} className={`card bg-base-100 shadow-xl border-t-4 border-${point.color}`}>
                <div className="card-body">
                  <div className={`text-${point.color} mb-4`}>
                    {point.icon}
                  </div>
                  <h3 className="card-title text-lg mb-2">{point.title}</h3>
                  <div className={`badge badge-${point.color} badge-sm mb-4`}>
                    {point.importance}
                  </div>
                  <p className="text-sm text-base-content/80">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 選び方の手順 */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            業者選びの6ステップ
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="steps steps-vertical lg:steps-horizontal w-full mb-12">
              {steps.map((step) => (
                <li key={step.step} className="step step-primary">
                  STEP {step.step}
                </li>
              ))}
            </ul>
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.step} className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex items-center gap-4">
                      <div className="badge badge-primary badge-lg">
                        STEP {step.step}
                      </div>
                      <h3 className="card-title">{step.title}</h3>
                    </div>
                    <p className="text-base-content/80 mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* よくあるトラブルと対策 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            よくあるトラブルと対策
          </h2>
          <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
            事前に知っておけばトラブルを回避できます
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {troubles.map((trouble, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{trouble.title}</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-error mb-1">原因：</p>
                          <p className="text-sm text-base-content/80">{trouble.cause}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-success mb-1">対策：</p>
                          <p className="text-sm text-base-content/80">{trouble.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 見積もりのポイント */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            見積もり時の確認ポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-success">
                  <CheckCircle className="w-6 h-6" />
                  必ず確認すべきこと
                </h3>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>作業範囲と所要時間</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>追加料金の有無と条件</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>使用する洗剤や機材</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>損害保険の内容</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>キャンセルポリシー</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-warning">
                  <AlertTriangle className="w-6 h-6" />
                  注意すべきポイント
                </h3>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                    <span>極端に安い料金設定</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                    <span>見積もりが曖昧</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                    <span>電話対応が不親切</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                    <span>口コミが極端に少ない</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                    <span>契約を急がせる</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="alert alert-info shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div>
                  <h3 className="font-bold">ポイントのまとめ</h3>
                  <div className="text-sm mt-2">
                    <p>✓ 複数社から見積もりを取る（最低3社）</p>
                    <p>✓ 損害保険加入と保証内容を確認</p>
                    <p>✓ 口コミや評価をしっかりチェック</p>
                    <p>✓ 契約内容を書面で確認</p>
                    <p>✓ 追加料金の可能性を事前確認</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            信頼できる業者を見つけよう
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            クリーンナビで、あなたにピッタリのハウスクリーニング業者を比較・検討
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/aircon" className="btn btn-lg bg-white text-primary hover:bg-base-200">
              業者を探す
            </Link>
            <Link href="/price" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary">
              料金相場を見る
            </Link>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <p className="font-bold text-lg">クリーンナビ</p>
          <p>ハウスクリーニング業者の比較・検索サイト</p>
          <p className="text-sm mt-2">© 2024 クリーンナビ All rights reserved.</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link href="/price" className="link link-hover">料金相場</Link>
            <Link href="/guide" className="link link-hover">業者選びガイド</Link>
            <Link href="/faq" className="link link-hover">よくある質問</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
