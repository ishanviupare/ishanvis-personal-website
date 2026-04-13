'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isHome = pathname === '/'
  const bgColor = isHome ? 'bg-[#313628] text-[#A5AE9E]' : 'bg-[#5a4a46] text-[#c6b0ad]'
  return (
    <div className={`fixed top-0 right-0 h-screen w-1/4 flex flex-col p-20 gap-15 text-5xl font-serif ${bgColor}`}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}