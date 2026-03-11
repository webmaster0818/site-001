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
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">クリーンナビ</h1>
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
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            プロのハウスクリーニングを<br />
            簡単比較・予約
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            30〜50代の忙しい主婦・共働き世帯に選ばれています。<br />
            信頼できる業者を口コミ・料金・サービス内容で徹底比較。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/services/aircon"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              業者を探す
            </Link>
            <Link
              href="/about"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition border-2 border-blue-600"
            >
              サービスについて
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

      {/* 選ばれる理由 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            クリーンナビが選ばれる理由
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">簡単比較</h4>
              <p className="text-gray-600">
                料金・口コミ・サービス内容を一目で比較。最適な業者がすぐ見つかります。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">実績豊富</h4>
              <p className="text-gray-600">
                厳選された優良業者のみを掲載。安心してご利用いただけます。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">お得な価格</h4>
              <p className="text-gray-600">
                複数業者を比較することで、適正価格でサービスを受けられます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <h5 className="text-xl font-bold">クリーンナビ</h5>
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
