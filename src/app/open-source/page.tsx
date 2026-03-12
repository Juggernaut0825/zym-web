'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const repoFeatures = [
  'Food Photo Analysis',
  'Workout Form Check',
  'BMR/TDEE Calculator',
  'Progress Tracking',
  'Personalized Plans',
  'Local Data Storage',
] as const

const reasons = [
  {
    title: 'Transparency',
    desc: 'See how the system is structured and how its core logic is assembled. No black-box product layer between you and the code.',
    accent: 'zj',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    ),
  },
  {
    title: 'Customizable',
    desc: 'Fork it, adapt it, and build on the foundation without having to reverse-engineer the product direction first.',
    accent: 'lc',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
  },
  {
    title: 'Community Driven',
    desc: 'The project stays stronger when developers and fitness-minded contributors can improve it together in the open.',
    accent: 'zj',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
] as const

function AccentPill({ label, accent }: { label: string; accent: 'lc' | 'zj' }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] shadow-[0_10px_24px_rgba(102,88,69,0.06)] ${
        accent === 'lc'
          ? 'border-[#f28a3a]/18 bg-white text-[#9b6436]'
          : 'border-[#6c7cf6]/18 bg-white text-[#6069ad]'
      }`}
    >
      <span className={`h-2.5 w-2.5 rounded-full ${accent === 'lc' ? 'bg-[#f28a3a]' : 'bg-[#6c7cf6]'}`} />
      {label}
    </div>
  )
}

export default function OpenSourcePage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#1f1f1f]">
      <Navbar />

      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,138,58,0.10),_transparent_22%),radial-gradient(circle_at_86%_15%,_rgba(108,124,246,0.10),_transparent_24%),linear-gradient(180deg,_#f7f5f0_0%,_#f4f1ea_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <AccentPill label="Open source" accent="zj" />
            <h1 className="mt-6 font-body text-4xl font-extrabold leading-[0.98] tracking-[-0.035em] text-[#1f1f1f] sm:text-5xl md:text-[4rem]">
              Built by the community
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#62606a] md:text-xl">
              ZYM&apos;s core is open source under the MIT license. Contribute, customize, or build on the same foundation in a more transparent way.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <a
              href="https://github.com/Juggernaut0825/skill_zym"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[2.4rem] border border-black/6 bg-white/88 p-8 shadow-[0_26px_55px_rgba(102,88,69,0.08)] transition-transform duration-200 hover:-translate-y-1 md:p-10"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.7rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(247,244,237,0.95)_100%)] shadow-[0_14px_30px_rgba(102,88,69,0.08)]">
                  <svg className="h-10 w-10 text-[#1f1f1f]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-body text-[2rem] font-extrabold tracking-[-0.03em] text-[#1f1f1f]">skill_zym</h2>
                    <div className="rounded-full border border-[#6c7cf6]/16 bg-[#f7f8ff] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#6670b8]">
                      Python
                    </div>
                    <div className="rounded-full border border-[#f28a3a]/16 bg-[#fff7f0] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#a06b46]">
                      MIT
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl text-lg leading-8 text-[#66646e]">
                    AI-powered fitness and lifestyle assistant infrastructure for building more capable coaching experiences with vision support and local-first flexibility.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {repoFeatures.map((feature, index) => (
                      <div
                        key={feature}
                        className={`flex items-center gap-3 rounded-[1.3rem] border px-4 py-3 text-sm font-medium text-[#45424c] ${
                          index % 2 === 0
                            ? 'border-[#f28a3a]/12 bg-[#fffaf5]'
                            : 'border-[#6c7cf6]/12 bg-[#f8f9ff]'
                        }`}
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                            index % 2 === 0 ? 'bg-[#f28a3a]/12' : 'bg-[#6c7cf6]/12'
                          }`}
                        >
                          <span className={`h-2.5 w-2.5 rounded-full ${index % 2 === 0 ? 'bg-[#f28a3a]' : 'bg-[#6c7cf6]'}`} />
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-black/6 bg-[#f7f5f0] px-4 py-2 text-sm font-semibold text-[#4b4a54] transition-colors group-hover:bg-white">
                    <span>View on GitHub</span>
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <AccentPill label="Why open source" accent="lc" />
            <h2 className="mt-6 font-body text-3xl font-extrabold tracking-[-0.03em] text-[#1f1f1f] md:text-[3rem]">
              Why open source?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-[2rem] border border-black/6 bg-white/88 p-7 text-center shadow-[0_24px_50px_rgba(102,88,69,0.08)] md:p-8"
              >
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-[1.4rem] ${
                    reason.accent === 'lc' ? 'bg-[#fff7f0] text-[#b16322]' : 'bg-[#f7f8ff] text-[#4251cb]'
                  }`}
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {reason.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-body text-[1.55rem] font-extrabold tracking-[-0.03em] text-[#1f1f1f]">
                  {reason.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#66646e]">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2.4rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,244,236,0.96)_100%)] p-8 text-center shadow-[0_26px_55px_rgba(102,88,69,0.08)] md:p-12">
            <div className="mx-auto max-w-2xl">
              <AccentPill label="Contributing" accent="zj" />
              <h2 className="mt-6 font-body text-3xl font-extrabold tracking-[-0.03em] text-[#1f1f1f] md:text-[3rem]">
                Contributing to ZYM
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#66646e]">
                We welcome contributions, whether that means improving docs, fixing bugs, or extending the product&apos;s core capabilities.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com/Juggernaut0825/skill_zym"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[1.45rem] border border-[#f28a3a]/30 bg-[linear-gradient(180deg,rgba(242,138,58,0.18),rgba(242,138,58,0.10))] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#7b4517] shadow-[0_14px_30px_rgba(94,71,46,0.12)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#f28a3a]/45"
              >
                View Repository
              </a>
              <a
                href="https://github.com/Juggernaut0825/skill_zym/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[1.45rem] border border-[#6c7cf6]/28 bg-[linear-gradient(180deg,rgba(108,124,246,0.14),rgba(108,124,246,0.07))] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#3642a8] shadow-[0_14px_30px_rgba(67,81,176,0.10)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#6c7cf6]/42"
              >
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
