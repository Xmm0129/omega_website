'use client'

import GooeyNav from './GooeyNav';

export default function NavIcons() {
  const items = [
    { label: '🐱 关于我', href: '#about' },
    { label: '🗺️ 我的冒险', href: '#adventures' },
    { label: '🧶 我的玩具', href: '#toys' },
    { label: '📜 我的宣言', href: '#manifesto' },
  ];

  return (
    <div style={{ position: 'relative', minHeight: '80px' }}>
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
}
