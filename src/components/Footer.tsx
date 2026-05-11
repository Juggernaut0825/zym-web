import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="site-footer py-16 md:py-20">
      <div className="site-footer-shell mx-auto max-w-7xl px-6">
        <div className="site-footer-panel mb-12 rounded-[2.2rem] px-6 py-8 md:px-8 md:py-10">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <Link href="/" className="mb-4 flex items-center" aria-label="ZYM home">
                <Image
                  src="/logo-app.jpg"
                  alt="ZYM"
                  width={36}
                  height={36}
                  className="h-9 w-9 shadow-[0_6px_14px_rgba(20,16,40,0.16)]"
                />
              </Link>
              <p className="text-sm text-[#5f5a52]">AI-native lifestyle platform. Starting with health.</p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-[#1f1f1f]">Product</h3>
              <div className="space-y-2">
                <Link href="/features" className="site-footer-link block text-sm text-[#5f5a52] transition-colors hover:text-[#f28a3a]">Features</Link>
                <Link href="/community" className="site-footer-link block text-sm text-[#5f5a52] transition-colors hover:text-[#6c7cf6]">Community</Link>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-[#1f1f1f]">Company</h3>
              <div className="space-y-2"></div>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-[#1f1f1f]">Connect</h3>
              <div className="space-y-2">
                <a href="https://github.com/Juggernaut0825/skill_zym" target="_blank" rel="noopener noreferrer" className="site-footer-link block text-sm text-[#5f5a52] transition-colors hover:text-[#6c7cf6]">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#ddd4c7] pt-8 md:flex-row">
          <p className="text-sm text-[#7b766e]">2026 ZYM. Building the future of lifestyle support.</p>
          <div className="flex items-center gap-6 text-sm text-[#7b766e]">
            <Link href="/privacy.html" className="site-footer-link transition-colors hover:text-[#f28a3a]">Privacy</Link>
            <Link href="/terms.html" className="site-footer-link transition-colors hover:text-[#6c7cf6]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
