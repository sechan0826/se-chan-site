export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-animate text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-4">
          MIX依頼・お問い合わせ
        </h2>
        <p className="opacity-90 mb-8 text-sm md:text-base">
          ボーカルMIXのご依頼やご質問はお気軽にどうぞ！
          <br />
          X(Twitter)のDMにてお待ちしています。
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="https://x.com/sechanutau"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-pink font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            X(Twitter)でDMする
          </a>
        </div>

        <div className="border-t border-white/20 pt-6">
          <p className="text-sm opacity-70">
            &copy; 2026 歌い手せーちゃん All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
