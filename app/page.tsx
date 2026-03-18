"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Wind, Bath, ChefHat, Menu, X } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/images/logo-character.png" 
              alt="クリーンナビ キャラクター" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">クリーンナビ</h1>
              <p className="text-xs md:text-sm text-gray-500">ハウスクリーニング業者比較サイト</p>
            </div>
          </Link>
          
          {/* デスクトップナビ */}
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
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              初めての方へ
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* モバイルメニュー */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/services/aircon"
                className="block text-gray-700 hover:text-blue-600 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                エアコン
              </Link>
              <Link
                href="/services/bathroom"
                className="block text-gray-700 hover:text-blue-600 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                浴室
              </Link>
              <Link
                href="/services/kitchen"
                className="block text-gray-700 hover:text-blue-600 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                キッチン
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-blue-600 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                初めての方へ
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* ヒーローセクション */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        {/* 背景画像オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/85 to-blue-400/85"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            プロのハウスクリーニングを<br />
            簡単比較・予約
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow">
            30〜50代の忙しい主婦・共働き世帯に選ばれています。<br />
            信頼できる業者を<span className="text-yellow-300 font-bold">口コミ・料金・サービス内容</span>で徹底比較。
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Link
              href="/services/aircon"
              className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 transition shadow-xl"
            >
              ✨ 業者を探す
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition shadow-xl"
            >
              初めての方はこちら →
            </Link>
          </div>
          
          {/* 統計数字 */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">3,000<span className="text-xl">件+</span></div>
              <div className="text-white text-xs md:text-sm">掲載業者数</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">47<span className="text-xl">都道府県</span></div>
              <div className="text-white text-xs md:text-sm">対応エリア</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">98<span className="text-xl">%</span></div>
              <div className="text-white text-xs md:text-sm">満足度</div>
            </div>
          </div>
        </div>
      </section>

      {/* こんなお悩みありませんか？ */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              こんなお悩みありませんか？
            </h3>
            <p className="text-lg text-gray-600">
              多くのお客様が同じ悩みを抱えてクリーンナビを利用されています
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* ペルソナ1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-3xl flex-shrink-0">
                  👩
                </div>
                <div>
                  <div className="font-bold text-gray-900">30代 共働き主婦</div>
                  <div className="text-sm text-gray-500">東京都在住</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                「仕事と育児で掃除する時間がない…。エアコンのカビ臭が気になるけど、自分では分解できなくて困っています。」
              </p>
            </div>

            {/* ペルソナ2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-3xl flex-shrink-0">
                  👨
                </div>
                <div>
                  <div className="font-bold text-gray-900">40代 会社員</div>
                  <div className="text-sm text-gray-500">神奈川県在住</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                「業者がたくさんあってどこに頼めばいいかわからない。料金もバラバラで、比較するのが大変で…。」
              </p>
            </div>

            {/* ペルソナ3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-3xl flex-shrink-0">
                  👩
                </div>
                <div>
                  <div className="font-bold text-gray-900">50代 専業主婦</div>
                  <div className="text-sm text-gray-500">大阪府在住</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                「浴室のカビが何度掃除しても取れない…。市販の洗剤では限界を感じています。プロに任せたい。」
              </p>
            </div>

            {/* ペルソナ4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-3xl flex-shrink-0">
                  👨
                </div>
                <div>
                  <div className="font-bold text-gray-900">30代 一人暮らし</div>
                  <div className="text-sm text-gray-500">愛知県在住</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                「引越し前に部屋をピカピカにしたいけど、退去費用を抑えるためにどの業者がコスパ良いか知りたい。」
              </p>
            </div>

            {/* ペルソナ5 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-3xl flex-shrink-0">
                  👩
                </div>
                <div>
                  <div className="font-bold text-gray-900">40代 子育て中</div>
                  <div className="text-sm text-gray-500">埼玉県在住</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                「小さい子どもがいるから安全な洗剤を使ってくれる業者がいい。口コミで安心できるところを探したい。」
              </p>
            </div>

            {/* ペルソナ6 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-3xl flex-shrink-0">
                  👨
                </div>
                <div>
                  <div className="font-bold text-gray-900">50代 持ち家</div>
                  <div className="text-sm text-gray-500">福岡県在住</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                「換気扇の油汚れがひどくて換気が弱い。年に一度はプロにお願いしたいが、信頼できる業者を見つけたい。」
              </p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/services/aircon"
              className="inline-block bg-yellow-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 transition shadow-lg"
            >
              ✨ あなたに合った業者を探す
            </Link>
          </div>
        </div>
      </section>

      {/* サービスカテゴリ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            人気のクリーニングサービス
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* エアコンクリーニング */}
            <Link
              href="/services/aircon"
              className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition"
            >
              <Wind className="w-16 h-16 text-blue-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                エアコンクリーニング
              </h4>
              <p className="text-gray-600 mb-4">
                カビ・ホコリを徹底除去。快適な空気で健康的な暮らしを。
              </p>
              <div className="text-blue-600 font-semibold group-hover:underline">
                業者を探す →
              </div>
            </Link>

            {/* 浴室クリーニング */}
            <Link
              href="/services/bathroom"
              className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition"
            >
              <Bath className="w-16 h-16 text-blue-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                浴室クリーニング
              </h4>
              <p className="text-gray-600 mb-4">
                頑固な水垢・カビもピカピカに。リラックスできるバスタイムを。
              </p>
              <div className="text-blue-600 font-semibold group-hover:underline">
                業者を探す →
              </div>
            </Link>

            {/* キッチンクリーニング */}
            <Link
              href="/services/kitchen"
              className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition"
            >
              <ChefHat className="w-16 h-16 text-blue-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                キッチンクリーニング
              </h4>
              <p className="text-gray-600 mb-4">
                油汚れ・焦げ付きもスッキリ。清潔なキッチンで料理を楽しく。
              </p>
              <div className="text-blue-600 font-semibold group-hover:underline">
                業者を探す →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* エリアから探す */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            エリアから業者を探す
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            <Link href="/areas/tokyo" className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-600 hover:shadow-lg transition">
              <div className="font-bold text-gray-900">東京都</div>
            </Link>
            <Link href="/areas/kanagawa" className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-600 hover:shadow-lg transition">
              <div className="font-bold text-gray-900">神奈川県</div>
            </Link>
            <Link href="/areas/osaka" className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-600 hover:shadow-lg transition">
              <div className="font-bold text-gray-900">大阪府</div>
            </Link>
            <Link href="/areas/aichi" className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-600 hover:shadow-lg transition">
              <div className="font-bold text-gray-900">愛知県</div>
            </Link>
            <Link href="/areas/fukuoka" className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-600 hover:shadow-lg transition">
              <div className="font-bold text-gray-900">福岡県</div>
            </Link>
            <Link href="/areas/saitama" className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-600 hover:shadow-lg transition">
              <div className="font-bold text-gray-900">埼玉県</div>
            </Link>
            <Link href="/areas/chiba" className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-600 hover:shadow-lg transition">
              <div className="font-bold text-gray-900">千葉県</div>
            </Link>
            <Link href="/areas/hyogo" className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-600 hover:shadow-lg transition">
              <div className="font-bold text-gray-900">兵庫県</div>
            </Link>
            <Link href="/areas/sapporo" className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-600 hover:shadow-lg transition">
              <div className="font-bold text-gray-900">札幌市</div>
            </Link>
            <Link href="/areas/kyoto" className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-600 hover:shadow-lg transition">
              <div className="font-bold text-gray-900">京都府</div>
            </Link>
            <Link href="/areas/sendai" className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-600 hover:shadow-lg transition">
              <div className="font-bold text-gray-900">仙台市</div>
            </Link>
            <Link href="/areas/hiroshima" className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-600 hover:shadow-lg transition">
              <div className="font-bold text-gray-900">広島市</div>
            </Link>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">その他のエリアもお探しください</p>
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            クリーンナビが選ばれる理由
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">🔍</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">簡単比較</h4>
              <p className="text-gray-600 leading-relaxed">
                料金・口コミ・サービス内容を一目で比較。最適な業者がすぐ見つかります。
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">⭐</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">実績豊富</h4>
              <p className="text-gray-600 leading-relaxed">
                厳選された優良業者のみを掲載。安心してご利用いただけます。
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">💰</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">お得な価格</h4>
              <p className="text-gray-600 leading-relaxed">
                複数業者を比較することで、適正価格でサービスを受けられます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター前CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            まずは無料で業者を比較してみませんか？
          </h3>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            料金・口コミ・サービス内容を一括比較。<br />最適な業者がすぐに見つかります。
          </p>
          <Link
            href="/services/aircon"
            className="inline-block bg-yellow-500 text-gray-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-600 transition shadow-2xl"
          >
            ✨ 今すぐ業者を探す
          </Link>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/images/logo-character.png" 
                  alt="クリーンナビ キャラクター" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h5 className="text-xl font-bold">クリーンナビ</h5>
                  <p className="text-xs text-gray-500">ハウスクリーニング業者比較サイト</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                ハウスクリーニング業者を簡単比較・予約できるサービスです。
              </p>
            </div>
            <div>
              <h6 className="font-bold mb-4">サービス</h6>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/services/aircon" className="hover:text-white transition">
                    エアコンクリーニング
                  </Link>
                </li>
                <li>
                  <Link href="/services/bathroom" className="hover:text-white transition">
                    浴室クリーニング
                  </Link>
                </li>
                <li>
                  <Link href="/services/kitchen" className="hover:text-white transition">
                    キッチンクリーニング
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-4">ご利用ガイド</h6>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    初めての方へ
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition">
                    よくある質問
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-4">会社情報</h6>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/company" className="hover:text-white transition">
                    運営会社
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    利用規約
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 クリーンナビ All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
