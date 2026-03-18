"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
  );
}
