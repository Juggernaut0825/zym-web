'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
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

function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible) return
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  return { ref, visible }
}

function RevealBlock({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`features-reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function Eyebrow({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) {
  const color = tone === 'dark' ? 'text-[#a09d96]' : 'text-[#6c6a64]'
  return (
    <p className={`text-[0.72rem] font-medium uppercase tracking-[0.18em] ${color}`}>{children}</p>
  )
}

export default function OpenSourcePage() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#141413]">
      <Navbar />

      {/* HERO — cream canvas, serif display */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <RevealBlock>
            <Eyebrow>Open source · MIT licensed</Eyebrow>
            <h1 className="font-display-serif mt-8 text-5xl leading-[1.05] tracking-[-0.025em] text-[#141413] sm:text-6xl md:text-[5.5rem] lg:text-[6rem]">
              Built by the community.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.6] text-[#3d3d3a] md:text-xl">
              ZYM&apos;s core is open source under the MIT license. Contribute, customize, or build on the same foundation in a more transparent way.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* DARK PRODUCT MOCKUP — Claude signature, the repo as product chrome on dark */}
      <section className="bg-[#181715] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <RevealBlock>
            <div className="max-w-3xl">
              <Eyebrow tone="dark">Spotlight · Repository</Eyebrow>
              <h2 className="font-display-serif mt-6 text-4xl leading-[1.1] tracking-[-0.025em] text-[#faf9f5] md:text-[3.5rem]">
                skill_zym, in the open.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-[1.6] text-[#a09d96] md:text-lg">
                The AI-powered fitness and lifestyle assistant infrastructure that powers ZYM — vision support, local-first flexibility, and a transparent architecture you can read end to end.
              </p>
            </div>

            <a
              href="https://github.com/Juggernaut0825/skill_zym"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-14 block rounded-xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:bg-white/[0.06] md:p-12"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#faf9f5]">
                  <svg className="h-9 w-9 text-[#141413]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="font-display-serif text-3xl leading-[1.15] tracking-[-0.025em] text-[#faf9f5] md:text-4xl">skill_zym</h3>
                    <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#a09d96]">Python · MIT</span>
                  </div>

                  <p className="mt-5 max-w-3xl text-base leading-[1.6] text-[#a09d96] md:text-lg">
                    AI-powered fitness and lifestyle assistant infrastructure for building more capable coaching experiences with vision support and local-first flexibility.
                  </p>

                  <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {repoFeatures.map((feature, index) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-base leading-[1.6] text-[#a09d96]"
                      >
                        <span
                          className={`mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full ${
                            index % 2 === 0 ? 'bg-[#f28a3a]' : 'bg-[#6c7cf6]'
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[#faf9f5] transition-colors group-hover:text-[#f28a3a]">
                    View on GitHub
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </a>
          </RevealBlock>
        </div>
      </section>

      {/* WHY OPEN SOURCE — canvas editorial blocks */}
      <section className="bg-[#faf9f5] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <RevealBlock>
            <div className="mb-16 max-w-2xl">
              <Eyebrow>Why open source</Eyebrow>
              <h2 className="font-display-serif mt-6 text-4xl leading-[1.1] tracking-[-0.025em] text-[#141413] md:text-5xl">
                Why open source?
              </h2>
            </div>
          </RevealBlock>

          <div className="grid gap-y-16 md:grid-cols-3 md:gap-x-12">
            {reasons.map((reason, i) => (
              <RevealBlock key={reason.title} delay={i * 80}>
                <Eyebrow>{reason.accent === 'lc' ? 'LC' : 'ZJ'} principle</Eyebrow>
                <h3 className="font-display-serif mt-4 text-3xl leading-[1.15] tracking-[-0.025em] text-[#141413] md:text-[2rem]">
                  {reason.title}
                </h3>
                <p className="mt-5 text-base leading-[1.6] text-[#3d3d3a]">
                  {reason.desc}
                </p>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* CORAL CTA — full-bleed LC orange callout */}
      <section className="bg-[#efe9de] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <RevealBlock>
            <div className="rounded-xl bg-[#f28a3a] px-8 py-16 md:px-16 md:py-20">
              <h2 className="font-display-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white md:text-[3.4rem]">
                Contribute to ZYM.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-[1.6] text-white/90 md:text-lg">
                We welcome contributions, whether that means improving docs, fixing bugs, or extending the product&apos;s core capabilities.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://github.com/Juggernaut0825/skill_zym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#faf9f5] px-7 py-3.5 text-sm font-medium text-[#141413] shadow-[0_8px_24px_rgba(20,20,19,0.18)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.96]"
                >
                  View Repository
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="https://github.com/Juggernaut0825/skill_zym/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
                >
                  Report an Issue
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      <Footer />
    </main>
  )
}
