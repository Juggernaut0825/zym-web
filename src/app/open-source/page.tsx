'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function OpenSourcePage() {
  return (
    <main className="gradient-bg min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-900/30 border border-sage-700/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-sage-400 text-sm font-medium">Open Source</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
              Built by the community
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              ZYM&apos;s core is open source under MIT license. Contribute, customize, or build your own.
            </p>
          </div>

          {/* Main Repository Card */}
          <div className="max-w-4xl mx-auto mb-20">
            <a
              href="https://github.com/Juggernaut0825/skill_zym"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-charcoal-800/40 rounded-3xl p-10 border border-charcoal-700 hover:border-sage-600 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-charcoal-700 flex items-center justify-center group-hover:bg-sage-900/40 transition-colors">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
                      skill_zym
                    </h2>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Python</span>
                    <span className="px-2 py-1 bg-sage-500/20 text-sage-400 text-xs rounded-full">MIT</span>
                  </div>
                  <p className="text-zinc-400 text-lg mb-6">
                    AI-Powered Fitness & Lifestyle Assistant Skill - A script-based protocol for building
                    intelligent fitness coaches with AI vision capabilities.
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Food Photo Analysis',
                      'Workout Form Check',
                      'BMR/TDEE Calculator',
                      'Progress Tracking',
                      'Personalized Plans',
                      'Local Data Storage'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-zinc-300 text-sm">
                        <svg className="w-4 h-4 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sage-400 font-medium group-hover:text-sage-300">
                    <span>View on GitHub</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Why Open Source */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
              Why open source?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-sage-900/40 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-warm mb-2" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
                  Transparency
                </h3>
                <p className="text-zinc-400">
                  See exactly how your data is processed. No black boxes, no hidden algorithms.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent-warm/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
                  Customizable
                </h3>
                <p className="text-zinc-400">
                  Fork it, modify it, make it yours. Build your own fitness AI on our foundation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent-gold/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
                  Community Driven
                </h3>
                <p className="text-zinc-400">
                  Contributed by fitness enthusiasts and developers who care about quality.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-charcoal-800/40 rounded-3xl p-10 border border-charcoal-700">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
              Contributing to ZYM
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-8">
              We welcome contributions! Whether it&apos;s fixing bugs, adding features, or improving docs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://github.com/Juggernaut0825/skill_zym" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-sage-600 hover:bg-sage-500 text-white font-semibold rounded-full transition-all hover:scale-105">
                View Repository
              </a>
              <a href="https://github.com/Juggernaut0825/skill_zym/issues" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-charcoal-700 hover:bg-charcoal-600 text-white font-semibold rounded-full transition-all hover:scale-105">
                Report an Issue
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
