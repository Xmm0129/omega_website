export default function Adventures() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-primary font-handwriting mb-8">我的冒险</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/80 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-primary font-handwriting mb-4">探索后院</h2>
            <p className="text-lg">今天我发现了后院的秘密花园...</p>
          </div>
          <div className="bg-white/80 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-primary font-handwriting mb-4">纸箱城堡</h2>
            <p className="text-lg">建造了一座完美的纸箱城堡...</p>
          </div>
          <div className="bg-white/80 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-primary font-handwriting mb-4">窗台观鸟</h2>
            <p className="text-lg">每天最喜欢的活动就是观察窗外的小鸟...</p>
          </div>
          <div className="bg-white/80 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-primary font-handwriting mb-4">午夜巡逻</h2>
            <p className="text-lg">夜晚是我巡逻领地的最佳时间...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
