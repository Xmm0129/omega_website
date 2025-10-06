'use client'

import { useState } from 'react'

export default function FindOmega() {
  const [found, setFound] = useState(false)
  const [clicks, setClicks] = useState(0)

  const items = Array(9).fill(null).map((_, i) => ({
    id: i,
    isOmega: i === 4 // 中间位置是欧米伽
  }))

  const handleClick = (item: { id: number; isOmega: boolean }) => {
    setClicks(clicks + 1)
    if (item.isOmega) {
      setFound(true)
    }
  }

  const resetGame = () => {
    setFound(false)
    setClicks(0)
  }

  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl text-primary font-handwriting mb-4">找到欧米伽！</h1>
        <p className="text-lg mb-8">点击方块找到躲藏的欧米伽</p>
        
        {!found ? (
          <>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item)}
                  className="aspect-square bg-white/80 hover:bg-primary/20 rounded-lg shadow-lg transition-all hover:scale-105 flex items-center justify-center text-6xl"
                >
                  ❓
                </button>
              ))}
            </div>
            <p className="text-gray-600">已尝试 {clicks} 次</p>
          </>
        ) : (
          <div className="bg-white/90 rounded-lg shadow-xl p-8 animate-bounce">
            <div className="text-8xl mb-4">🐱</div>
            <h2 className="text-3xl text-primary font-handwriting mb-4">找到我了！</h2>
            <p className="text-xl mb-6">你用了 {clicks} 次就找到了欧米伽！</p>
            <button
              onClick={resetGame}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors font-handwriting text-lg"
            >
              再玩一次
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
