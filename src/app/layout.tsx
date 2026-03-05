import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "歌い手せーちゃん | 歌ってみた・ボーカルMIX",
  description: "歌い手せーちゃんの公式サイト。少年のような歌声でボカロ楽曲を中心に歌ってみたを投稿中。ボーカルMIXのご依頼も承っています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={zenMaru.className}>{children}</body>
    </html>
  );
}
