import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-16 overflow-hidden">
      {/* ヘッダーバナー画像 */}
      <div className="relative w-full bg-[#c8e6f0]">
        <Image
          src="/images/header-banner.png"
          alt="歌い手せーちゃん ヘッダーバナー"
          width={1920}
          height={480}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* アーティスト紹介エリア */}
      <div className="bg-gradient-animate py-10 px-4 text-center text-white relative">
        {/* 装飾の音符 */}
        <span className="absolute left-[10%] top-4 text-3xl opacity-60 animate-float">
          ♪
        </span>
        <span
          className="absolute right-[15%] top-6 text-2xl opacity-50 animate-float"
          style={{ animationDelay: "1s" }}
        >
          ♫
        </span>

        <p className="text-base md:text-xl font-black max-w-2xl mx-auto mb-2 drop-shadow-md">
          少年のような元気な歌声で、ボカロ楽曲を中心に原曲キーの歌ってみたを毎月オリジナルMVつきで投稿中！
        </p>
        <p className="text-base md:text-lg font-bold max-w-lg mx-auto mb-5">
          🩵チャンネル登録1000人を目標に歌ってます！チャンネル登録よろしくね🐱
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#works"
            className="inline-block bg-white text-pink font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            作品を聴く ♪
          </a>
          <a
            href="#plans"
            className="inline-block bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-colors"
          >
            MIXご依頼はこちら
          </a>
        </div>
      </div>
    </section>
  );
}
