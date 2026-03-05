export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <span className="text-3xl mb-2 block">🎤</span>
          <h2 className="text-3xl md:text-4xl font-black text-purple mb-2">
            プロフィール
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* アバター */}
          <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-pink to-purple flex items-center justify-center text-7xl shadow-lg shrink-0">
            🎤
          </div>

          {/* プロフィール文 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">歌い手せーちゃん</h3>
            <p className="leading-relaxed mb-4 opacity-80">
              少年のような元気な歌声で、ボカロ楽曲を中心に原曲キーの歌ってみた（歌みた / cover）を毎月オリジナルMVつきで投稿しています。
              <br />
              2024年に歌ってみた初投稿。ボーカルMIXも自身で行っています。
              <br />
              状況に応じてMIX依頼の相談承っています。
            </p>

            {/* タグ */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "歌ってみた",
                "ボカロ曲カバー",
                "原曲キー",
                "ボーカルMIX",
                "ピッチ補正",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-pink/10 text-pink text-sm font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* SNSリンク */}
            <div className="flex gap-4">
              <a
                href="https://x.com/sechanutau"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold hover:bg-pink transition-colors"
                aria-label="X (Twitter)"
              >
                X
              </a>
              <a
                href="https://www.youtube.com/@sechanutau"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold hover:bg-pink transition-colors"
                aria-label="YouTube"
              >
                YT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
