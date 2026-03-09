"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-light/30">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-pink">
          ♪ 歌い手せーちゃん
        </a>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#works" className="hover:text-pink transition-colors">
            作品集
          </a>
          <a href="#plans" className="hover:text-pink transition-colors">
            MIX依頼
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

          {/* SNS猫アイコン */}
          <div className="flex gap-2 ml-2">
            <a
              href="https://x.com/sechanutau"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="X (Twitter)"
            >
              <Image src="/images/cat-x.png" alt="X" width={28} height={28} />
            </a>
            <a
              href="https://www.youtube.com/@sechanutau"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="YouTube"
            >
              <Image src="/images/cat-youtube.png" alt="YouTube" width={28} height={28} />
            </a>
          </div>
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
            { href: "#plans", label: "MIX依頼" },
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
          <div className="flex gap-3 justify-center pt-2">
            <a
              href="https://x.com/sechanutau"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Image src="/images/cat-x.png" alt="X" width={32} height={32} />
            </a>
            <a
              href="https://www.youtube.com/@sechanutau"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Image src="/images/cat-youtube.png" alt="YouTube" width={32} height={32} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
