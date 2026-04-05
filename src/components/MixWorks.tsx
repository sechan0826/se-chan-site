const categories = [
  {
    title: "せーちゃんの歌ってみた",
    icon: "🎤",
    videos: [
      { id: "lkZZ2qT7dG0" },
      { id: "7Pg8u0HUWaM" },
      { id: "WYgJmKfisTs" },
      { id: "CBd6qkz_bAg" },
    ],
  },
  {
    title: "MIXさせていただいた作品",
    icon: "🎛️",
    videos: [
      { id: "bQses5Dhz_Y" },
      { id: "QQHjK2xbwyY" },
    ],
  },
  {
    title: "コラボ作品（せーちゃんMIX）",
    icon: "🤝",
    videos: [
      { id: "dbKOD4NATVA" },
      { id: "lCW2mycC-0g" },
    ],
  },
];

function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}

export default function MixWorks() {
  return (
    <section id="works" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-10">
          <span className="text-3xl mb-2 block">🎧</span>
          <h2 className="text-3xl md:text-4xl font-black text-pink mb-2">
            作品集
          </h2>
        </div>

        {/* カテゴリごとに表示 */}
        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                <span>{cat.icon}</span>
                {cat.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {cat.videos.map((video) => (
                  <YouTubeEmbed key={video.id} videoId={video.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
