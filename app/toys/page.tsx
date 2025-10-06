export default function Toys() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-primary font-handwriting mb-8">我的玩具</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 rounded-lg shadow-lg p-6 text-center">
            <div className="text-6xl mb-4">🐭</div>
            <h3 className="text-xl text-primary font-handwriting mb-2">小老鼠</h3>
            <p>我最喜欢的玩具朋友</p>
          </div>
          <div className="bg-white/80 rounded-lg shadow-lg p-6 text-center">
            <div className="text-6xl mb-4">🧶</div>
            <h3 className="text-xl text-primary font-handwriting mb-2">毛线球</h3>
            <p>永远玩不腻的经典</p>
          </div>
          <div className="bg-white/80 rounded-lg shadow-lg p-6 text-center">
            <div className="text-6xl mb-4">🎣</div>
            <h3 className="text-xl text-primary font-handwriting mb-2">逗猫棒</h3>
            <p>运动时间必备</p>
          </div>
          <div className="bg-white/80 rounded-lg shadow-lg p-6 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl text-primary font-handwriting mb-2">纸箱</h3>
            <p>最好的藏身之处</p>
          </div>
          <div className="bg-white/80 rounded-lg shadow-lg p-6 text-center">
            <div className="text-6xl mb-4">🎾</div>
            <h3 className="text-xl text-primary font-handwriting mb-2">小球</h3>
            <p>追逐游戏的主角</p>
          </div>
          <div className="bg-white/80 rounded-lg shadow-lg p-6 text-center">
            <div className="text-6xl mb-4">🪶</div>
            <h3 className="text-xl text-primary font-handwriting mb-2">羽毛</h3>
            <p>轻盈飘逸的乐趣</p>
          </div>
        </div>
      </div>
    </div>
  )
}
