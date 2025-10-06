'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PawIcon() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  
  // 首页：跳转到游戏页面
  // 其他页面：返回首页
  const href = isHomePage ? '/find-omega' : '/'
  const ariaLabel = isHomePage ? '找到欧米伽游戏' : '返回首页'
  
  return (
    <Link 
      href={href}
      className="fixed top-4 right-4 z-50 bg-primary hover:bg-secondary p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 group"
      aria-label={ariaLabel}
    >
      <span className="text-3xl group-hover:rotate-12 transition-transform duration-300 inline-block">
        {isHomePage ? '🐾' : '🏠'}
      </span>
    </Link>
  )
}

