import NavIcons from '@/components/NavIcons';

export default function Home() {
  return (
    <div className="min-h-screen font-custom">
      {/* Fixed Header Section */}
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm shadow-md z-40">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <h1 className="text-4xl text-cyan-400 text-center mb-2">欢迎来到欧米伽的网站！</h1>
          
          {/* Navigation Icons */}
          <NavIcons />
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[340px]"></div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8">
        {/* Home/Intro Section */}
        <section id="home" className="min-h-screen py-12 flex items-center">
          <div className="w-full">
            <h2 className="text-3xl text-cyan-400 mb-8 flex items-center gap-2">
              我在做什么 🐾
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Image/Content Area */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-gray-800">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-9xl">🐱</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 leading-relaxed">
                    每天我都在探索这个充满奇妙的世界。无论是在阳光下打盹，追逐飞舞的蝴蝶，还是在纸箱里冒险，我的生活总是充满乐趣和惊喜。
                  </p>
                </div>
              </div>

              {/* Description Area */}
              <div className="space-y-4">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-800">
                  <h3 className="text-xl text-cyan-400 mb-3">🌞 日常生活</h3>
                  <p className="text-gray-300">
                    晒太阳、打盹、玩耍是我最喜欢的事情。每一天都是新的冒险，每个角落都值得探索。
                  </p>
                </div>
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-800">
                  <h3 className="text-xl text-cyan-400 mb-3">🎮 游戏时间</h3>
                  <p className="text-gray-300">
                    我喜欢各种玩具，从毛线球到逗猫棒。玩耍让我保持活力和快乐！
                  </p>
                </div>
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-800">
                  <h3 className="text-xl text-cyan-400 mb-3">💤 美梦时光</h3>
                  <p className="text-gray-300">
                    充足的睡眠是我保持可爱的秘诀。我可以在任何温暖舒适的地方睡着。
                  </p>
                </div>
              </div>
            </div>

            {/* Game Link */}
            <div className="mt-12 text-center">
              <a
                href="/find-omega"
                className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all text-xl"
              >
                🐾 开始游戏：找到欧米伽！
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-cyan-400 mb-8">关于我 🐱</h2>
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-8 space-y-4 border border-gray-800">
              <p className="text-lg text-gray-300">你好！我是欧米伽（Omega），一只充满好奇心的猫咪。</p>
              <p className="text-lg text-gray-300">我喜欢探索新事物，享受阳光下的慵懒时光。</p>
              <p className="text-lg text-gray-300">这个网站记录了我的日常生活和冒险故事。</p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="text-5xl mb-2">🎂</div>
                  <p className="text-cyan-400">年龄：2岁</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-5xl mb-2">🎨</div>
                  <p className="text-cyan-400">颜色：橘白相间</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-5xl mb-2">❤️</div>
                  <p className="text-cyan-400">性格：活泼好动</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Adventures Section */}
        <section id="adventures" className="min-h-screen py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-cyan-400 mb-8">我的冒险 🗺️</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-800">
                <h3 className="text-2xl text-cyan-400 mb-2">探索后院</h3>
                <p className="text-gray-300">每天我都会在后院进行一次大探险，寻找新的气味和昆虫朋友。</p>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-800">
                <h3 className="text-2xl text-cyan-400 mb-2">纸箱城堡</h3>
                <p className="text-gray-300">我最喜欢的新玩具是一个巨大的纸箱，我把它变成了我的秘密城堡。</p>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-800">
                <h3 className="text-2xl text-cyan-400 mb-2">窗台观鸟</h3>
                <p className="text-gray-300">每天早上，我都会坐在窗台上，观察窗外的小鸟，它们是我的电视节目。</p>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-800">
                <h3 className="text-2xl text-cyan-400 mb-2">午夜巡逻</h3>
                <p className="text-gray-300">当大家都睡着的时候，我会在家里进行一次安静的巡逻，确保一切安全。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Toys Section */}
        <section id="toys" className="min-h-screen py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-cyan-400 mb-8">我的玩具 🧶</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform border border-gray-800">
                <div className="text-5xl mb-2">🐭</div>
                <h3 className="text-xl text-cyan-400">小老鼠</h3>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform border border-gray-800">
                <div className="text-5xl mb-2">🧶</div>
                <h3 className="text-xl text-cyan-400">毛线球</h3>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform border border-gray-800">
                <div className="text-5xl mb-2">🎣</div>
                <h3 className="text-xl text-cyan-400">逗猫棒</h3>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform border border-gray-800">
                <div className="text-5xl mb-2">📦</div>
                <h3 className="text-xl text-cyan-400">纸箱</h3>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform border border-gray-800">
                <div className="text-5xl mb-2">🎾</div>
                <h3 className="text-xl text-cyan-400">小球</h3>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform border border-gray-800">
                <div className="text-5xl mb-2">🪶</div>
                <h3 className="text-xl text-cyan-400">羽毛</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section id="manifesto" className="min-h-screen py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-cyan-400 mb-8">我的宣言 📜</h2>
            <div className="space-y-6">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-800">
                <h3 className="text-2xl text-cyan-400 mb-2">关于生活</h3>
                <p className="text-gray-300">生活就是一场永无止境的探索，每一个角落都可能藏着惊喜。</p>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-800">
                <h3 className="text-2xl text-cyan-400 mb-2">关于玩耍</h3>
                <p className="text-gray-300">玩耍是我的天性，无论是追逐光点还是与毛线球搏斗，我都全力以赴。</p>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-800">
                <h3 className="text-2xl text-cyan-400 mb-2">关于睡眠</h3>
                <p className="text-gray-300">充足的睡眠是保持活力的秘诀，我可以在任何舒适的地方小憩。</p>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-800">
                <h3 className="text-2xl text-cyan-400 mb-2">关于爱</h3>
                <p className="text-gray-300">爱是无声的陪伴，是温暖的抚摸，是我与你之间最珍贵的连接。</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/90 backdrop-blur-sm py-8 text-center border-t border-gray-800">
        <p className="text-gray-400">© 2025 欧米伽的个人网站 🐾</p>
      </footer>
    </div>
  );
}
