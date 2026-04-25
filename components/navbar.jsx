'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const bgColor = isHome ? 'bg-[#313628] text-[#A5AE9E]' : 'bg-[#5a4a46] text-[#c6b0ad]'

  return (
    
    <div className={`fixed top-0 right-0 h-screen w-1/4 flex flex-col p-20 gap-15 text-5xl font-serif ${bgColor}`}>
      <Link href="/" className="group flex items-center gap-2 transform-gpu transition-all duration-300 hover:scale-105 hover:text-[#ddd6cd]">
        Home
        <span className="w-6 text-center opacity-0 group-hover:opacity-100 transition duration-300">
          𓆝
        </span>
      </Link>
      <Link href="/about" className="group flex items-center gap-2 transform-gpu transition-all duration-300 hover:scale-105 hover:text-[#ddd6cd]">
        About
        <span className="w-6 text-center opacity-0 group-hover:opacity-100 transition duration-300">
          𓆝
        </span>
      </Link>
      <Link href="/Projects" className="group flex items-center gap-2 transform-gpu transition-all duration-300 hover:scale-105 hover:text-[#ddd6cd]">
        Projects
        <span className="w-6 text-center opacity-0 group-hover:opacity-100 transition duration-300">
          𓆝
        </span>
      </Link>
      <Link href="/contact" className="group flex items-center gap-2 transform-gpu transition-all duration-300 hover:scale-105 hover:text-[#ddd6cd]">
        Contact
        <span className="w-6 text-center opacity-0 group-hover:opacity-100 transition duration-300">
          𓆝
        </span>
      </Link>
    </div>
  )
}