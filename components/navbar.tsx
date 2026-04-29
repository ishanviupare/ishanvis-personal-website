'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [spinning, setSpinning] = useState(false)

  const pathname = usePathname()
  const isHome = pathname === '/'
  const bgColor = isHome
    ? 'bg-[#313628] text-[#A5AE9E]'
    : 'bg-[#5a4a46] text-[#c6b0ad]'

  return (
    <>
      {/* small screen menu button */}
      <button
        onClick={() => {setOpen(prev => !prev); setSpinning(true); setTimeout(() => setSpinning(false), 360)}}
        className={`fixed top-4 right-4 z-50 text-5xl lg:hidden text-[#5a4a46]`}
      >
        <span className = {spinning ? "animate-spin inline-block" : "inline-block"}>
          {open ? '❁' : '❀'}
        </span>
      </button>

      {/* menu card */}
      <div className={`fixed inset-0 z-40 lg:hidden ${open ? '' : 'pointer-events-none'}`}>
        
        {/* overlay */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />

        {/* menu */}
        <div
          className={`absolute top-0 right-0 h-full w-64 max-w-full flex flex-col p-10 gap-8 text-3xl font-serif transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-[100%]'
          } ${bgColor}`}
        >
          <NavLinks closeMenu={() => setOpen(false)} />
        </div>
      </div>

      {/* larger screen sidebar */}
      <div
        className={`hidden lg:flex fixed top-0 right-0 h-screen w-1/4 flex-col p-20 gap-12 text-3xl lg:4xl xl:text-5xl font-serif ${bgColor}`}
      >
        <NavLinks />
      </div>
    </>
  )
}

{/* links */}
function NavLinks({ closeMenu }: { closeMenu?: () => void }) {
  const linkClass =
    'group flex items-center gap-2 transform-gpu transition-all duration-300 hover:scale-105 hover:text-[#ddd6cd]'

  return (
    <>
      <Link href="/" onClick={closeMenu} className={linkClass}>
        Home
        <span className="w-6 text-center opacity-0 group-hover:opacity-100 transition duration-300">
          𓆝
        </span>
      </Link>

      <Link href="/about" onClick={closeMenu} className={linkClass}>
        About
        <span className="w-6 text-center opacity-0 group-hover:opacity-100 transition duration-300">
          𓆝
        </span>
      </Link>

      <Link href="/Projects" onClick={closeMenu} className={linkClass}>
        Projects
        <span className="w-6 text-center opacity-0 group-hover:opacity-100 transition duration-300">
          𓆝
        </span>
      </Link>

      <Link href="/contact" onClick={closeMenu} className={linkClass}>
        Contact
        <span className="w-6 text-center opacity-0 group-hover:opacity-100 transition duration-300">
          𓆝
        </span>
      </Link>
    </>
  )
}