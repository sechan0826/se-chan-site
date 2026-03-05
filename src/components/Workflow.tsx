const steps = [
  {
    icon: "💬",
    title: "ご相談・お見積り",
    description: "DM等でご依頼内容をご相談ください。コラボ等の場合はお見積りします。",
  },
  {
    icon: "📁",
    title: "データのご送付",
    description: "準備いただいたデータをギガファイル便でお送りいただきます。",
  },
  {
    icon: "🎛️",
    title: "MIX・マスタリング作業",
    description: "いただいたデータをもとに作業を進めます。（納期：約2週間）",
  },
  {
    icon: "✅",
    title: "確認・修正",
    description: "MIX完了音源をご確認いただき、修正点があればお伝えください。（1hまで無料）",
  },
  {
    icon: "🎉",
    title: "最終納品",
    description: "最終版の音源データをお渡しして完了です。",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <span className="text-3xl mb-2 block">📋</span>
          <h2 className="text-3xl md:text-4xl font-black text-pink mb-2">
            ご依頼から納品までの流れ
          </h2>
        </div>

        {/* ステップ */}
        <div className="relative">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 mb-8 last:mb-0">
              {/* 左のライン */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink to-purple flex items-center justify-center text-xl shrink-0 shadow-md">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-pink/20 mt-2" />
                )}
              </div>

              {/* 右のコンテンツ */}
              <div className="pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-purple bg-purple/10 px-2 py-0.5 rounded-full">
                    STEP {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-sm opacity-60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
