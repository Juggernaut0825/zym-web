'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { AIFoodAnalyzerDemo } from '@/components/AIFoodAnalyzerDemo'

const overviewCards = [
  {
    id: 'food',
    tag: 'Nutrition',
    title: 'AI Food Analysis',
    desc: 'Snap a meal. ZYM reads the plate and returns calories, macros, and a coach’s read in seconds.',
    anchor: '#food-analysis',
  },
  {
    id: 'workout',
    tag: 'Training',
    title: 'Workout Tracking',
    desc: 'Log sessions inside a calendar that turns daily reps into trends you can read at a glance.',
    anchor: '#workout',
  },
  {
    id: 'memory',
    tag: 'Intelligence',
    title: 'Memory-Based Coaching',
    desc: 'Goals, body metrics, and the last few weeks of behavior stay in context across every check-in.',
    anchor: '#memory',
  },
  {
    id: 'community',
    tag: 'Community',
    title: 'Social Accountability',
    desc: 'Share progress with friends in a calmer, more supportive feed — not a noisy social one.',
    anchor: '#community',
  },
] as const

const detailBlocks = [
  {
    id: 'workout',
    tag: 'Training',
    title: 'Workout Tracking',
    desc: 'Log sets, reps, and effort without breaking the rhythm of your session. ZYM turns daily entries into a calendar of training load and trend lines you can read in seconds.',
    capabilities: [
      'Conversational logging mid-session',
      'Calorie burn estimation',
      'Volume and intensity trends',
      'Rest and recovery awareness',
    ],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1400&h=1600&fit=crop&q=80',
    crop: 'object-[50%_15%]',
  },
  {
    id: 'memory',
    tag: 'Intelligence',
    title: 'Memory-Based Coaching',
    desc: 'Height, weight, goals, and the last few weeks of behavior stay in the coach’s context. Check-ins build on each other instead of restarting from zero.',
    capabilities: [
      'Profile and goal memory',
      'TDEE and calorie balance',
      'Personalized plan adjustments',
      'Continuity across sessions',
    ],
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1400&h=1600&fit=crop&q=80',
    crop: 'object-[50%_8%]',
  },
  {
    id: 'community',
    tag: 'Community',
    title: 'Social Accountability',
    desc: 'Friends, shared milestones, and weekly rhythms make consistency visible without turning the experience into a noisy social feed.',
    capabilities: [
      'Friend connections',
      'Shared activity streaks',
      'Weekly check-in rhythm',
      'Quiet, supportive feed',
    ],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&h=1600&fit=crop&q=80',
    crop: 'object-[50%_18%]',
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

function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-25% 0px -55% 0px' },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}

const sectionAnchors = [
  { id: 'food-analysis', label: 'Nutrition' },
  { id: 'workout', label: 'Training' },
  { id: 'memory', label: 'Memory' },
  { id: 'community', label: 'Community' },
] as const

function SectionAnchorNav({ activeId }: { activeId: string }) {
  return (
    <div className="anchor-nav-enter sticky top-[4.75rem] z-30 mx-auto -mt-4 mb-12 hidden w-full max-w-3xl px-6 md:block">
      <nav className="mx-auto flex items-center justify-center gap-1 rounded-full border border-[#e6dfd8] bg-[#faf9f5]/85 px-2 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] shadow-[0_10px_30px_rgba(102,88,69,0.08)] backdrop-blur">
        {sectionAnchors.map((s, i) => (
          <span key={s.id} className="flex items-center">
            <a
              href={`#${s.id}`}
              className={`rounded-full px-3.5 py-1.5 transition-colors ${
                activeId === s.id
                  ? 'bg-[#141413] text-[#faf9f5]'
                  : 'text-[#6c6a64] hover:bg-[#efe9de] hover:text-[#141413]'
              }`}
            >
              {s.label}
            </a>
            {i < sectionAnchors.length - 1 && <span aria-hidden="true" className="mx-1 h-3 w-px bg-[#e6dfd8]" />}
          </span>
        ))}
      </nav>
    </div>
  )
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

export default function FeaturesPage() {
  const activeSection = useActiveSection(sectionAnchors.map((s) => s.id))

  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#141413]">
      <Navbar />

      {/* HERO — cream canvas, serif display */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <RevealBlock>
            <Eyebrow>Capabilities</Eyebrow>
            <h1 className="font-display-serif mt-8 text-5xl leading-[1.05] tracking-[-0.025em] text-[#141413] sm:text-6xl md:text-[5.5rem] lg:text-[6rem]">
              Everything you need for smarter health.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.6] text-[#3d3d3a] md:text-xl">
              Four capability areas. One coherent product system — same intelligence everywhere, with LC or ZJ shaping the tone.
            </p>
          </RevealBlock>
        </div>
      </section>

      <SectionAnchorNav activeId={activeSection} />

      {/* TIER 1 — cream-card surface band, 2x2 editorial grid */}
      <section className="bg-[#efe9de] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <RevealBlock>
            <div className="mb-16 max-w-2xl">
              <Eyebrow>Overview</Eyebrow>
              <h2 className="font-display-serif mt-6 text-4xl leading-[1.1] tracking-[-0.025em] text-[#141413] md:text-5xl">
                Four capabilities, one continuous coach.
              </h2>
            </div>
          </RevealBlock>
          <div className="grid gap-y-16 md:grid-cols-2 md:gap-x-16">
            {overviewCards.map((card, i) => (
              <RevealBlock key={card.id} delay={i * 80}>
                <a href={card.anchor} className="group block">
                  <Eyebrow>{card.tag}</Eyebrow>
                  <h3 className="font-display-serif mt-4 text-3xl leading-[1.15] tracking-[-0.025em] text-[#141413] md:text-4xl">
                    {card.title}
                  </h3>
                  <p className="mt-5 text-base leading-[1.6] text-[#3d3d3a]">
                    {card.desc}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#f28a3a] transition-colors group-hover:text-[#b16322]">
                    Read more
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </a>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* TIER 2 — DARK product mockup band hosting the demo */}
      <section id="food-analysis" className="scroll-mt-36 bg-[#181715] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <RevealBlock>
            <div className="max-w-3xl">
              <Eyebrow tone="dark">Spotlight · Nutrition</Eyebrow>
              <h2 className="font-display-serif mt-6 text-4xl leading-[1.1] tracking-[-0.025em] text-[#faf9f5] md:text-[3.5rem]">
                Photo to coaching, one step at a time.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-[1.6] text-[#a09d96] md:text-lg">
                Capture a meal, read the nutrition picture, and see how LC and ZJ interpret the same numbers in different coaching voices.
              </p>
            </div>
          </RevealBlock>

          <RevealBlock delay={80} className="mt-14 md:mt-16">
            <AIFoodAnalyzerDemo immersive />
          </RevealBlock>
        </div>
      </section>

      {/* TIER 3 — alternating cream / cream-card editorial bands */}
      {detailBlocks.map((block, i) => {
        const isReversed = i % 2 === 1
        const isCardSurface = i % 2 === 1
        const bgClass = isCardSurface ? 'bg-[#efe9de]' : 'bg-[#faf9f5]'
        return (
          <section
            key={block.id}
            id={block.id}
            className={`scroll-mt-36 py-24 md:py-32 ${bgClass}`}
          >
            <div className="mx-auto max-w-6xl px-6">
              <RevealBlock>
                <div
                  className={`grid items-center gap-12 lg:gap-20 ${
                    isReversed ? 'lg:grid-cols-[1fr_1.4fr]' : 'lg:grid-cols-[1.4fr_1fr]'
                  }`}
                >
                  <div
                    className={`relative aspect-[0.95] overflow-hidden rounded-xl bg-[#efe9de] lg:aspect-auto lg:min-h-[34rem] ${
                      isReversed ? 'lg:order-2' : ''
                    }`}
                  >
                    <Image
                      src={block.image}
                      alt={block.title}
                      fill
                      sizes="(min-width: 1024px) 36rem, 100vw"
                      className={`object-cover ${block.crop}`}
                    />
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <Eyebrow>{block.tag}</Eyebrow>
                    <h2 className="font-display-serif mt-5 text-4xl leading-[1.08] tracking-[-0.025em] text-[#141413] md:text-5xl">
                      {block.title}
                    </h2>
                    <p className="mt-6 text-lg leading-[1.6] text-[#3d3d3a]">
                      {block.desc}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {block.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3 text-base leading-[1.6] text-[#3d3d3a]">
                          <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f28a3a]" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#6c6a64]">
                      <span className="h-2 w-2 rounded-full bg-[#f28a3a]" />
                      <span className="h-2 w-2 -ml-1 rounded-full bg-[#6c7cf6]" />
                      <span className="ml-1">Same intelligence · LC or ZJ tone</span>
                    </div>
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
                Start training smarter, today.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-[1.6] text-white/90 md:text-lg">
                Add LC and ZJ to your daily routine. Same intelligence, your choice of voice.
              </p>
              <a
                href="https://app.zym8.com/login"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-[#faf9f5] px-7 py-3.5 text-sm font-medium text-[#141413] shadow-[0_8px_24px_rgba(20,20,19,0.18)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.96]"
              >
                Get Started
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
