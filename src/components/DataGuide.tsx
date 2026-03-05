export default function DataGuide() {
  return (
    <section id="guide" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-10">
          <span className="text-3xl mb-2 block">📝</span>
          <h2 className="text-3xl md:text-4xl font-black text-purple mb-2">
            データ準備のお願い
          </h2>
          <p className="text-sm opacity-60">
            最高のサウンドのために、以下を確認してください
          </p>
        </div>

        {/* チェックリスト */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 shadow-md border border-pink/10">
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0">🎵</span>
              <div>
                <h4 className="font-bold mb-1">頭出し (Track Alignment)</h4>
                <p className="text-sm opacity-60">
                  ボーカル音源とインスト音源の開始位置を揃えてください。曲の冒頭に無音部分がある場合も、一番頭から書き出してください。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-md border border-pink/10">
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0">📄</span>
              <div>
                <h4 className="font-bold mb-1">ファイル形式 (File Format)</h4>
                <p className="text-sm opacity-60">
                  インストとボーカルのサンプルレートとビット深度を統一してください。
                  <br />
                  <span className="font-medium text-purple">推奨: 48kHz / 24bit</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-md border border-pink/10">
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0">🎤</span>
              <div>
                <h4 className="font-bold mb-1">ボーカルデータ (Vocal Data)</h4>
                <p className="text-sm opacity-60">
                  ボーカルデータは<span className="font-medium text-purple">モノラル (Monaural)</span>で書き出してください。
                  <br />
                  <span className="text-xs">※ モノラルで書き出せない場合はステレオでもOK</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-md border border-pink/10">
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0">☁️</span>
              <div>
                <h4 className="font-bold mb-1">データ送付 (Data Submission)</h4>
                <p className="text-sm opacity-60">
                  データは<span className="font-medium text-purple">ギガファイル便</span>で送付してください。
                  <br />
                  全てのファイルを一つのフォルダにまとめてアップロードしてください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
