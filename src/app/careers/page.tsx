'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const perks = [
  { title: 'Remote First', description: 'Work from anywhere in the world.', accent: 'lc' },
  { title: 'Competitive Pay', description: 'Top-tier compensation packages.', accent: 'zj' },
  { title: 'Equity', description: 'Own a piece of what you build.', accent: 'lc' },
  { title: 'Fitness Perks', description: 'Gym memberships and wellness benefits.', accent: 'zj' },
] as const

const jobs = [
  {
    title: 'Frontend Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build beautiful, performant web interfaces that help users achieve their fitness goals.',
    requirements: [
      'Strong React/Next.js experience',
      'Eye for design and UX',
      'TypeScript proficiency',
      'Passion for fitness (bonus)',
    ],
    accent: 'lc',
  },
  {
    title: 'AI/ML Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Improve our AI models for food recognition, form analysis, and personalized recommendations.',
    requirements: [
      'Experience with computer vision',
      'LLM integration experience',
      'Python proficiency',
      'Knowledge of fitness/nutrition',
    ],
    accent: 'zj',
  },
  {
    title: 'Mobile Developer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build the ZYM mobile app that will bring AI fitness coaching to millions of users.',
    requirements: [
      'React Native or Flutter experience',
      'iOS/Android native development',
      'Camera/video integration',
      'Performance optimization',
    ],
    accent: 'lc',
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

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#141413]">
      <Navbar />

      {/* HERO — cream canvas, serif display */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <RevealBlock>
            <Eyebrow>We are hiring</Eyebrow>
            <h1 className="font-display-serif mt-8 text-5xl leading-[1.05] tracking-[-0.025em] text-[#141413] sm:text-6xl md:text-[5.5rem] lg:text-[6rem]">
              Join our team.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.6] text-[#3d3d3a] md:text-xl">
              We are building the future of lifestyle support. Come shape a product that feels more human, capable, and useful every day.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* PERKS — surface-card band, 4-up editorial blocks */}
      <section className="bg-[#efe9de] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <RevealBlock>
            <div className="mb-16 max-w-2xl">
              <Eyebrow>Working at ZYM</Eyebrow>
              <h2 className="font-display-serif mt-6 text-4xl leading-[1.1] tracking-[-0.025em] text-[#141413] md:text-5xl">
                What we offer.
              </h2>
            </div>
          </RevealBlock>

          <div className="grid gap-y-14 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-4">
            {perks.map((perk, i) => (
              <RevealBlock key={perk.title} delay={i * 70}>
                <Eyebrow>{perk.accent === 'lc' ? 'LC' : 'ZJ'} benefit</Eyebrow>
                <h3 className="font-display-serif mt-4 text-2xl leading-[1.15] tracking-[-0.025em] text-[#141413] md:text-[1.7rem]">
                  {perk.title}
                </h3>
                <p className="mt-4 text-base leading-[1.6] text-[#3d3d3a]">
                  {perk.description}
                </p>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* JOBS — canvas band, hairline rows preserved */}
      <section className="bg-[#faf9f5] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <RevealBlock>
            <div className="mb-12 max-w-2xl">
              <Eyebrow>Open positions</Eyebrow>
              <h2 className="font-display-serif mt-6 text-4xl leading-[1.1] tracking-[-0.025em] text-[#141413] md:text-5xl">
                Open positions.
              </h2>
            </div>
          </RevealBlock>

          <div className="border-t border-[#e6dfd8]">
            {jobs.map((job, i) => (
              <RevealBlock key={job.title} delay={i * 60}>
                <div className="group border-b border-[#e6dfd8] py-10 transition-colors duration-300 hover:bg-[#efe9de]/40 md:py-12">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <Eyebrow>{job.accent === 'lc' ? 'LC' : 'ZJ'} team</Eyebrow>
                      <h3 className="font-display-serif mt-3 text-3xl leading-[1.15] tracking-[-0.025em] text-[#141413] md:text-4xl">
                        {job.title}
                      </h3>
                      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#6c6a64]">
                        <span>{job.location}</span>
                        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#e6dfd8]" />
                        <span>{job.type}</span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#f28a3a] transition-colors group-hover:text-[#b16322]">
                      View details
                      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </div>

                  <p className="mt-6 max-w-3xl text-lg leading-[1.6] text-[#3d3d3a]">
                    {job.description}
                  </p>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {job.requirements.map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-3 text-base leading-[1.6] text-[#3d3d3a]"
                      >
                        <span
                          className={`mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full ${
                            job.accent === 'lc' ? 'bg-[#f28a3a]' : 'bg-[#6c7cf6]'
                          }`}
                        />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                Do not see a fit?
              </h2>
              <p className="mt-6 max-w-xl text-base leading-[1.6] text-white/90 md:text-lg">
                We are always looking for thoughtful builders. Reach out and start the conversation.
              </p>
              <a
                href="mailto:careers@zym.fit"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-[#faf9f5] px-7 py-3.5 text-sm font-medium text-[#141413] shadow-[0_8px_24px_rgba(20,20,19,0.18)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.96]"
              >
                careers@zym.fit
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </RevealBlock>
        </div>
      </section>

      <Footer />
    </main>
  )
}
