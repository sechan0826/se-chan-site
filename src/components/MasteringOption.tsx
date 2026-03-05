export default function MasteringOption() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-10">
          <span className="text-3xl mb-2 block">✨</span>
          <h2 className="text-2xl md:text-3xl font-black text-purple mb-2">
            【特別オプション】プロのマスタリング
          </h2>
          <p className="text-sm opacity-60">
            プロのクオリティを、あなたの楽曲に。
          </p>
        </div>

        {/* マスタリングカード */}
        <div className="bg-gradient-to-br from-purple/10 to-pink/10 border border-purple/20 rounded-2xl p-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-black mb-2">プロのエンジニアによるマスタリング</h3>
            <p className="text-3xl font-black text-purple">+¥4,000</p>
            <div className="inline-block bg-pink text-white text-sm font-bold px-4 py-1 rounded-full mt-2">
              初回限定お試し価格: +¥3,000
            </div>
          </div>

          <p className="text-sm opacity-70 text-center mb-6">
            提携するプロのエンジニアに、あなたの楽曲の最終仕上げを依頼できます。
            <br />
            MIXだけでは到達できない、商業レベルのクオリティを手に入れませんか？
          </p>

          {/* メリット */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <span className="text-2xl block mb-2">🔊</span>
              <p className="font-bold text-sm mb-1">プロ仕様の音圧と迫力</p>
              <p className="text-xs opacity-60">
                他のプロの楽曲と並んでも音量感で見劣りしない仕上がり
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <span className="text-2xl block mb-2">📱</span>
              <p className="font-bold text-sm mb-1">どんな環境でも良い音に</p>
              <p className="text-xs opacity-60">
                スマホ・ヘッドホン・カーステレオ、どこで聴いても崩れない
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <span className="text-2xl block mb-2">👂</span>
              <p className="font-bold text-sm mb-1">第三者視点の最終チェック</p>
              <p className="text-xs opacity-60">
                客観的な耳と最高級の再生環境で最終調整
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
