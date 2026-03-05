"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-light/30">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-pink">
          ♪ 歌い手せーちゃん
        </a>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#works" className="hover:text-pink transition-colors">
            作品集
          </a>
          <a href="#plans" className="hover:text-pink transition-colors">
            料金プラン
          </a>
          <a href="#workflow" className="hover:text-pink transition-colors">
            ご依頼の流れ
          </a>
          <a href="#about" className="hover:text-pink transition-colors">
            プロフィール
          </a>
          <a href="#contact" className="hover:text-pink transition-colors">
            お問い合わせ
          </a>
        </nav>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-b border-pink-light/30 px-4 py-4 flex flex-col gap-4 text-center font-medium">
          {[
            { href: "#works", label: "作品集" },
            { href: "#plans", label: "料金プラン" },
            { href: "#workflow", label: "ご依頼の流れ" },
            { href: "#about", label: "プロフィール" },
            { href: "#contact", label: "お問い合わせ" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
