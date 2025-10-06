export default function Manifesto() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-primary font-handwriting mb-8">欧米伽的宣言</h1>
        <div className="bg-white/80 rounded-lg shadow-lg p-8 space-y-6">
          <div className="border-l-4 border-primary pl-6">
            <h2 className="text-2xl text-primary font-handwriting mb-3">关于生活</h2>
            <p className="text-lg leading-relaxed">
              每一天都是新的冒险。无论是追逐阳光还是探索纸箱，
              我都会全情投入，享受当下的每一刻。
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-6">
            <h2 className="text-2xl text-primary font-handwriting mb-3">关于玩耍</h2>
            <p className="text-lg leading-relaxed">
              玩具不在于多贵，而在于是否有趣。
              一个纸箱可以是城堡，一根羽毛可以是猎物。
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-6">
            <h2 className="text-2xl text-primary font-handwriting mb-3">关于睡眠</h2>
            <p className="text-lg leading-relaxed">
              睡眠是猫生中最重要的事情之一。
              每天18小时的睡眠时间绝不是浪费，而是在为下一次冒险充电。
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-6">
            <h2 className="text-2xl text-primary font-handwriting mb-3">关于爱</h2>
            <p className="text-lg leading-relaxed">
              虽然我看起来高冷，但我的心里充满了爱。
              只是我表达爱的方式比较含蓄罢了。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
