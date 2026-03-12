import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-[#e3dccf] bg-[#efeae0] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-3">
              <Image src="/logo.svg" alt="ZYM Logo" width={32} height={32} />
              <span className="text-xl font-bold text-[#1f1f1f]" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>ZYM</span>
            </Link>
            <p className="text-sm text-[#5f5a52]">AI-native lifestyle platform. Starting with health.</p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#1f1f1f]">Product</h3>
            <div className="space-y-2">
              <Link href="/features" className="block text-sm text-[#5f5a52] transition-colors hover:text-[#f28a3a]">Features</Link>
              <Link href="/community" className="block text-sm text-[#5f5a52] transition-colors hover:text-[#6c7cf6]">Community</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#1f1f1f]">Company</h3>
            <div className="space-y-2">
              <Link href="/careers" className="block text-sm text-[#5f5a52] transition-colors hover:text-[#f28a3a]">Careers</Link>
              <Link href="/open-source" className="block text-sm text-[#5f5a52] transition-colors hover:text-[#6c7cf6]">Open Source</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#1f1f1f]">Connect</h3>
            <div className="space-y-2">
              <a href="https://github.com/Juggernaut0825/skill_zym" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#5f5a52] transition-colors hover:text-[#6c7cf6]">GitHub</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#ddd4c7] pt-8 md:flex-row">
          <p className="text-sm text-[#7b766e]">2026 ZYM. Building the future of lifestyle support.</p>
          <div className="flex items-center gap-6 text-sm text-[#7b766e]">
            <a href="#" className="transition-colors hover:text-[#f28a3a]">Privacy</a>
            <a href="#" className="transition-colors hover:text-[#6c7cf6]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
