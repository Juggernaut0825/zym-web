'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-900/80 backdrop-blur-xl border-b border-charcoal-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="ZYM Logo" width={40} height={40} />
          <span className="text-2xl font-bold tracking-tight text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>ZYM</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-zinc-400 hover:text-warm transition-colors">
            Home
          </Link>
          <Link href="/features" className="text-zinc-400 hover:text-warm transition-colors">
            Features
          </Link>
          <Link href="/community" className="text-zinc-400 hover:text-warm transition-colors">
            Community
          </Link>
          <Link href="/open-source" className="text-zinc-400 hover:text-warm transition-colors">
            Open Source
          </Link>
          <Link href="/careers" className="text-zinc-400 hover:text-warm transition-colors">
            Careers
          </Link>
        </div>
        <a
          href="https://github.com/Juggernaut0825/skill_zym"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-sage-600 hover:bg-sage-500 text-white font-semibold rounded-full transition-all hover:scale-105"
        >
          Get Started
        </a>
      </div>
    </nav>
  )
}
