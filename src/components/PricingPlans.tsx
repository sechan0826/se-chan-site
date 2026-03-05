export default function PricingPlans() {
  return (
    <section id="plans" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-4">
          <span className="text-3xl mb-2 block">🎛️</span>
          <h2 className="text-3xl md:text-4xl font-black text-purple mb-2">
            ボーカルミックス依頼
          </h2>
          <p className="text-sm opacity-60 mb-2">
            あなたのニーズで選べる、2つの基本プラン
          </p>
        </div>

        {/* 注意書き */}
        <div className="bg-pink/5 border border-pink/20 rounded-2xl p-4 mb-10 text-center text-sm">
          <p className="opacity-70">
            歌い手による、歌い手のためのMIXサービスです。
            <br />
            まずは過去のMIX作品を聴いて、クオリティに納得いただけたらご依頼ください。
          </p>
        </div>

        {/* プランカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* おまかせプラン */}
          <div className="relative border-2 border-pink rounded-2xl p-6 bg-white shadow-md">
            <span className="absolute -top-3 left-6 bg-pink text-white text-xs font-bold px-3 py-1 rounded-full">
              おすすめ
            </span>
            <h3 className="text-xl font-black mb-1">おまかせプラン</h3>
            <p className="text-xs text-purple font-medium mb-4">Full-Service Plan</p>
            <p className="text-4xl font-black text-pink mb-4">
              ¥8,000
            </p>
            <p className="text-sm opacity-70 mb-4">
              ボーカルのピッチ・タイミング補正からMIXまで、すべてお任せいただくプランです。
            </p>
            <div className="bg-purple/5 rounded-xl p-3">
              <p className="text-xs font-bold text-purple mb-1">Best for</p>
              <p className="text-sm opacity-70">
                MIXに関する作業をすべて任せたい方
              </p>
            </div>
          </div>

          {/* エディットなしプラン */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-md">
            <h3 className="text-xl font-black mb-1">エディットなしプラン</h3>
            <p className="text-xs text-purple font-medium mb-4">MIX-Only Plan</p>
            <p className="text-4xl font-black text-purple mb-4">
              ¥4,000
            </p>
            <p className="text-sm opacity-70 mb-4">
              ご自身でピッチ・タイミング補正が完了している方向けの、MIX作業のみのプランです。
            </p>
            <div className="bg-purple/5 rounded-xl p-3">
              <p className="text-xs font-bold text-purple mb-1">Best for</p>
              <p className="text-sm opacity-70">
                エディット作業は自分でできる、または不要な方
              </p>
            </div>
          </div>
        </div>

        {/* 補足情報 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-sky/10 rounded-xl p-4 text-center">
            <p className="font-bold text-sky mb-1">修正対応</p>
            <p className="opacity-70">納品後1時間以内は無料</p>
            <p className="opacity-50 text-xs">超過分: ¥2,000/h</p>
          </div>
          <div className="bg-mint/10 rounded-xl p-4 text-center">
            <p className="font-bold text-foreground mb-1">納期</p>
            <p className="opacity-70">データ受領後 約2週間</p>
            <p className="opacity-50 text-xs">お急ぎ: +¥2,000</p>
          </div>
          <div className="bg-purple/10 rounded-xl p-4 text-center">
            <p className="font-bold text-purple mb-1">特殊なご依頼</p>
            <p className="opacity-70">コラボ・多トラック等</p>
            <p className="opacity-50 text-xs">別途お見積り</p>
          </div>
        </div>
      </div>
    </section>
  );
}
