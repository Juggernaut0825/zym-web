'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  return (
    <nav className="site-navbar fixed left-0 right-0 top-0 z-50 backdrop-blur-xl">
      <div className="site-nav-shell mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-mark.svg" alt="ZYM Logo" width={40} height={40} />
          <span className="text-2xl font-bold tracking-tight text-[#1f1f1f]" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>ZYM</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="site-nav-link text-[#5f5a52] transition-colors hover:text-[#f28a3a]">
            Home
          </Link>
          <Link href="/features" className="site-nav-link text-[#5f5a52] transition-colors hover:text-[#6c7cf6]">
            Features
          </Link>
          <Link href="/community" className="site-nav-link text-[#5f5a52] transition-colors hover:text-[#f28a3a]">
            Community
          </Link>
          {/* <Link href="/open-source" className="text-[#5f5a52] transition-colors hover:text-[#6c7cf6]">
            Open Source
          </Link> */}
          {/* <Link href="/careers" className="text-[#5f5a52] transition-colors hover:text-[#f28a3a]">
            Careers
          </Link> */}
        </div>
        <a
          href="https://app.zym8.com/login"
          className="site-nav-cta rounded-full border border-[#f28a3a]/30 bg-[linear-gradient(180deg,rgba(242,138,58,0.18),rgba(242,138,58,0.10))] px-5 py-2.5 text-sm font-semibold text-[#7b4517] shadow-[0_10px_24px_rgba(94,71,46,0.10)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#f28a3a]/45"
        >
          Get Started
        </a>
      </div>
    </nav>
  )
}
