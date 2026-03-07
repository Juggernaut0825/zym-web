import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-charcoal-800 py-16 bg-charcoal-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt="ZYM Logo" width={32} height={32} />
              <span className="text-xl font-bold text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>ZYM</span>
            </Link>
            <p className="text-zinc-500 text-sm">AI-native lifestyle platform. Starting with health.</p>
          </div>

          <div>
            <h3 className="text-warm font-semibold mb-4">Product</h3>
            <div className="space-y-2">
              <Link href="/features" className="block text-zinc-500 hover:text-warm transition-colors text-sm">Features</Link>
              <Link href="/community" className="block text-zinc-500 hover:text-warm transition-colors text-sm">Community</Link>
            </div>
          </div>

          <div>
            <h3 className="text-warm font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="/careers" className="block text-zinc-500 hover:text-warm transition-colors text-sm">Careers</Link>
              <Link href="/open-source" className="block text-zinc-500 hover:text-warm transition-colors text-sm">Open Source</Link>
            </div>
          </div>

          <div>
            <h3 className="text-warm font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a href="https://github.com/Juggernaut0825/skill_zym" target="_blank" rel="noopener noreferrer" className="block text-zinc-500 hover:text-warm transition-colors text-sm">GitHub</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">© 2026 ZYM. Building the future of lifestyle support.</p>
          <div className="flex items-center gap-6 text-zinc-600 text-sm">
            <a href="#" className="hover:text-warm transition-colors">Privacy</a>
            <a href="#" className="hover:text-warm transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
