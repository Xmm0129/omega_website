import NavIcons from '@/components/NavIcons';
import CircularGallery from '@/components/CircularGallery';

export default function Home() {
  return (
    <div className="min-h-screen font-custom relative">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/cat-background.jpg)',
        }}
      >
        {/* Light gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/30"></div>
        {/* Additional overlay for content areas */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      </div>
      {/* Fixed Header Section */}
      <header className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-40">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <h1 className="text-4xl text-cyan-400 text-center mb-2 font-title">小小的猫咪，大大的世界！</h1>
          
          {/* Navigation Icons */}
          <NavIcons />
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[150px]"></div>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Home/Intro Section */}
        <section id="home" className="min-h-screen py-20 flex flex-col justify-center">
          <div className="w-full space-y-12">
            {/* 欢迎标题区域 */}
            <div className="text-center mb-16">
              <h2 className="text-5xl text-cyan-400 mb-6 font-bold">
                欢迎来到欧米伽的个猫网站 🐾
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                我是欧米伽，一只充满好奇心和活力的猫咪。这里记录着我的日常生活、冒险故事和所有有趣的事情！
              </p>
            </div>

            {/* 主要内容网格 */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* 左侧：大猫咪展示 */}
              <div className="lg:col-span-1">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10"></div>
                    <span className="text-9xl relative z-10 drop-shadow-lg">🐱</span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl text-cyan-300 mb-4 font-bold">这就是我！</h3>
                    <p className="text-white/90 leading-relaxed text-lg">
                      每天我都在探索这个充满奇妙的世界。无论是在阳光下打盹，追逐飞舞的蝴蝶，还是在纸箱里冒险，我的生活总是充满乐趣和惊喜。
                    </p>
                  </div>
                </div>
              </div>

              {/* 右侧：特色介绍 */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-2xl text-cyan-300 mb-4 font-semibold">🌞 日常生活</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      晒太阳、打盹、玩耍是我最喜欢的事情。每一天都是新的冒险，每个角落都值得探索。
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-2xl text-cyan-300 mb-4 font-semibold">🎮 游戏时间</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      我喜欢各种玩具，从毛线球到逗猫棒。玩耍让我保持活力和快乐！
                    </p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-2xl text-cyan-300 mb-4 font-semibold">💤 美梦时光</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    充足的睡眠是我保持可爱的秘诀。我可以在任何温暖舒适的地方睡着，从阳光明媚的窗台到柔软的沙发。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-16 pt-40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-cyan-300 mb-8 text-center font-bold drop-shadow-lg">关于我 🐱</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 space-y-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <p className="text-lg text-white/90">你好！我是欧米伽（Omega），一只充满好奇心的猫咪。</p>
              <p className="text-lg text-white/90">我喜欢探索新事物，享受阳光下的慵懒时光。</p>
              <p className="text-lg text-white/90">这个网站记录了我的日常生活和冒险故事。</p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="text-5xl mb-2">🎂</div>
                  <p className="text-cyan-300 font-semibold">年龄：2岁</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-5xl mb-2">🎨</div>
                  <p className="text-cyan-300 font-semibold">颜色：橘白相间</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-5xl mb-2">❤️</div>
                  <p className="text-cyan-300 font-semibold">性格：活泼好动</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Adventures Section */}
        <section id="adventures" className="min-h-screen py-16 pt-40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-cyan-300 mb-8 text-center font-bold drop-shadow-lg">我的冒险 🗺️</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl text-cyan-300 mb-2 font-semibold">探索后院</h3>
                <p className="text-white/90">每天我都会在后院进行一次大探险，寻找新的气味和昆虫朋友。</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl text-cyan-300 mb-2 font-semibold">纸箱城堡</h3>
                <p className="text-white/90">我最喜欢的新玩具是一个巨大的纸箱，我把它变成了我的秘密城堡。</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl text-cyan-300 mb-2 font-semibold">窗台观鸟</h3>
                <p className="text-white/90">每天早上，我都会坐在窗台上，观察窗外的小鸟，它们是我的电视节目。</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl text-cyan-300 mb-2 font-semibold">午夜巡逻</h3>
                <p className="text-white/90">当大家都睡着的时候，我会在家里进行一次安静的巡逻，确保一切安全。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Toys Section */}
        <section id="toys" className="min-h-screen py-16 pt-40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-cyan-300 mb-8 text-center font-bold drop-shadow-lg">我的玩具 🧶</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 text-center hover:scale-105 hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-5xl mb-2">🐭</div>
                <h3 className="text-xl text-cyan-300 font-semibold">小老鼠</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 text-center hover:scale-105 hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-5xl mb-2">🧶</div>
                <h3 className="text-xl text-cyan-300 font-semibold">毛线球</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 text-center hover:scale-105 hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-5xl mb-2">🎣</div>
                <h3 className="text-xl text-cyan-300 font-semibold">逗猫棒</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 text-center hover:scale-105 hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-5xl mb-2">📦</div>
                <h3 className="text-xl text-cyan-300 font-semibold">纸箱</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 text-center hover:scale-105 hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-5xl mb-2">🎾</div>
                <h3 className="text-xl text-cyan-300 font-semibold">小球</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 text-center hover:scale-105 hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-5xl mb-2">🪶</div>
                <h3 className="text-xl text-cyan-300 font-semibold">羽毛</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section id="manifesto" className="min-h-screen py-16 pt-40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-cyan-300 mb-8 text-center font-bold drop-shadow-lg">我的宣言 📜</h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl text-cyan-300 mb-2 font-semibold">关于生活</h3>
                <p className="text-white/90">生活就是一场永无止境的探索，每一个角落都可能藏着惊喜。</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl text-cyan-300 mb-2 font-semibold">关于玩耍</h3>
                <p className="text-white/90">玩耍是我的天性，无论是追逐光点还是与毛线球搏斗，我都全力以赴。</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl text-cyan-300 mb-2 font-semibold">关于睡眠</h3>
                <p className="text-white/90">充足的睡眠是保持活力的秘诀，我可以在任何舒适的地方小憩。</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl text-cyan-300 mb-2 font-semibold">关于爱</h3>
                <p className="text-white/90">爱是无声的陪伴，是温暖的抚摸，是我与你之间最珍贵的连接。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="min-h-screen py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl text-cyan-300 mb-8 text-center font-bold drop-shadow-lg">我的相册 📸</h2>
            <div className="h-[600px] rounded-xl overflow-hidden">
              <CircularGallery
                items={[
                  { image: '/cat-photo-1.jpg', text: '欧米伽的日常' },
                  { image: '/cat-photo-2.jpg', text: '阳光下的慵懒' },
                  { image: '/cat-photo-3.jpg', text: '玩具时间' },
                  { image: '/cat-photo-4.jpg', text: '窗台观鸟' },
                  { image: '/cat-photo-5.jpg', text: '纸箱冒险' },
                  { image: '/cat-photo-6.jpg', text: '美梦时光' }
                ]}
                bend={2}
                textColor="#06b6d4"
                borderRadius={0.1}
                font="bold 24px SanJiPoMoTi"
                scrollSpeed={1.5}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur-md py-8 text-center border-t border-white/20">
        <p className="text-white/80 font-medium">© 2025 欧米伽的个猫网站 🐾</p>
      </footer>
    </div>
  );
}
