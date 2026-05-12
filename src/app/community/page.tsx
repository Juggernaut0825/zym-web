'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const communityCards = [
  {
    title: 'Add Friends',
    desc: 'Build your fitness squad, follow each other&apos;s momentum, and keep healthy routines visible in a calmer social space.',
    accent: 'lc',
    badge: 'Warm support',
    people: ['Maya', 'Jordan', 'Rin'],
  },
  {
    title: 'Share Activities',
    desc: 'Post meals, workouts, and wins in a way that feels believable, lightweight, and tied directly to your daily progress.',
    accent: 'zj',
    badge: 'Shared updates',
    people: ['Kai', 'Tess', 'Noah'],
  },
  {
    title: 'Stay Accountable',
    desc: 'Keep streaks, weekly check-ins, and small milestones visible so consistency feels social without becoming noisy.',
    accent: 'lc',
    badge: 'Weekly rhythm',
    people: ['Ari', 'Lena', 'Sam'],
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

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#141413]">
      <Navbar />

      {/* HERO — cream canvas, serif display */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <RevealBlock>
            <Eyebrow>Community · Coming soon</Eyebrow>
            <h1 className="font-display-serif mt-8 text-5xl leading-[1.05] tracking-[-0.025em] text-[#141413] sm:text-6xl md:text-[5.5rem] lg:text-[6rem]">
              Health is better together.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.6] text-[#3d3d3a] md:text-xl">
              Connect with friends, share progress, and stay accountable in a community layer that feels supportive, believable, and calm.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* COMMUNITY BLOCKS — alternating canvas / surface-card editorial */}
      {communityCards.map((item, index) => {
        const isCardSurface = index % 2 === 0
        const bgClass = isCardSurface ? 'bg-[#efe9de]' : 'bg-[#faf9f5]'
        return (
          <section key={item.title} className={`${bgClass} py-24 md:py-32`}>
            <div className="mx-auto max-w-5xl px-6">
              <RevealBlock>
                <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
                  <div>
                    <Eyebrow>{item.badge}</Eyebrow>
                    <h2 className="font-display-serif mt-5 text-4xl leading-[1.08] tracking-[-0.025em] text-[#141413] md:text-5xl">
                      {item.title}
                    </h2>
                    <p className="mt-6 text-lg leading-[1.6] text-[#3d3d3a]">
                      {item.desc}
                    </p>
                    <div className="mt-8 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#6c6a64]">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          item.accent === 'lc' ? 'bg-[#f28a3a]' : 'bg-[#6c7cf6]'
                        }`}
                      />
                      <span>{item.accent === 'lc' ? 'LC tone' : 'ZJ tone'} · Same intelligence</span>
                    </div>
                  </div>

                  <div className="lg:pl-8">
                    <Eyebrow>Built with</Eyebrow>
                    <ul className="mt-5 space-y-4">
                      {item.people.map((person) => (
                        <li
                          key={person}
                          className="flex items-center gap-4 text-base leading-[1.6] text-[#3d3d3a]"
                        >
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium text-[#faf9f5] ${
                              item.accent === 'lc' ? 'bg-[#f28a3a]' : 'bg-[#6c7cf6]'
                            }`}
                          >
                            {person.slice(0, 1)}
                          </span>
                          <span>{person}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </section>
        )
      })}

      {/* CORAL CTA — full-bleed LC orange callout */}
      <section className="bg-[#faf9f5] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <RevealBlock>
            <div className="rounded-xl bg-[#f28a3a] px-8 py-16 md:px-16 md:py-20">
              <h2 className="font-display-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white md:text-[3.4rem]">
                Join the journey.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-[1.6] text-white/90 md:text-lg">
                Request early access to be among the first people to try the community layer when it launches.
              </p>
              <a
                href="https://github.com/Juggernaut0825/skill_zym"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-[#faf9f5] px-7 py-3.5 text-sm font-medium text-[#141413] shadow-[0_8px_24px_rgba(20,20,19,0.18)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.96]"
              >
                Request Access
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
