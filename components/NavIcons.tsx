'use client'

import { useState } from 'react';

export default function NavIcons() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const items = [
    { label: '🏠 主页', href: '#home' },
    { label: '🐱 关于我', href: '#about' },
    { label: '🗺️ 我的冒险', href: '#adventures' },
    { label: '🧶 我的玩具', href: '#toys' },
    { label: '📜 我的宣言', href: '#manifesto' },
  ];

  const handleClick = (index: number, href: string) => {
    setActiveIndex(index);
    // 平滑滚动到对应部分
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center items-center py-4">
      <nav className="flex gap-6">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index, item.href)}
            className={`px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 ${
              activeIndex === index
                ? 'bg-cyan-500 shadow-lg'
                : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
