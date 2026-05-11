'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { AIFoodAnalyzerDemo } from '@/components/AIFoodAnalyzerDemo'

type OverviewCard = {
  id: string
  tag: string
  title: string
  desc: string
  anchor: string
} & (
  | { kind: 'plate' }
  | { kind: 'image'; image: string; crop: string }
)

const overviewCards: readonly OverviewCard[] = [
  {
    id: 'food',
    tag: 'Nutrition',
    title: 'AI Food Analysis',
    desc: 'Snap a meal. See calories, macros, and a clear coaching read in seconds.',
    anchor: '#food-analysis',
    kind: 'plate',
  },
  {
    id: 'workout',
    tag: 'Training',
    title: 'Workout Tracking',
    desc: 'Log sessions in a calendar that turns daily reps into trends you can read at a glance.',
    anchor: '#workout',
    kind: 'image',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1400&h=1600&fit=crop&q=80',
    crop: 'object-[50%_18%]',
  },
  {
    id: 'memory',
    tag: 'Intelligence',
    title: 'Memory-Based Coaching',
    desc: 'Goals, body metrics, and recent history stay in context across every check-in.',
    anchor: '#memory',
    kind: 'image',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1400&h=1600&fit=crop&q=80',
    crop: 'object-[50%_10%]',
  },
  {
    id: 'community',
    tag: 'Community',
    title: 'Social Accountability',
    desc: 'Share progress with friends in a calmer, more supportive feed — not a noisy social one.',
    anchor: '#community',
    kind: 'image',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&h=1600&fit=crop&q=80',
    crop: 'object-[50%_18%]',
  },
] as const

const detailBlocks = [
  {
    id: 'workout',
    tag: 'Training',
    title: 'Workout Tracking',
    desc: "Log sets, reps, and effort without breaking the rhythm of your session. ZYM turns daily entries into a calendar of training load and trend lines you can read in seconds.",
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
    desc: "Height, weight, goals, and the last few weeks of behavior stay in the coach's context. Check-ins keep building on each other instead of restarting from zero.",
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

function NeutralPill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#5d5d5d] shadow-[0_10px_24px_rgba(102,88,69,0.06)]">
      <span className="h-2.5 w-2.5 rounded-full bg-[#7e786f]" />
      {label}
    </div>
  )
}

function PlateThumb() {
  return (
    <img
      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop&q=80"
      alt="Healthy meal bowl"
      className="h-full w-full object-cover"
    />
  )
}

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
    <div className="anchor-nav-enter sticky top-[4.75rem] z-30 mx-auto -mt-4 mb-8 hidden w-full max-w-3xl px-6 md:block">
      <nav className="mx-auto flex items-center justify-center gap-1 rounded-full border border-black/8 bg-white/90 px-2 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] shadow-[0_10px_30px_rgba(102,88,69,0.10)] backdrop-blur">
        {sectionAnchors.map((s, i) => (
          <span key={s.id} className="flex items-center">
            <a
              href={`#${s.id}`}
              className={`rounded-full px-3.5 py-1.5 transition-colors ${
                activeId === s.id
                  ? 'bg-[#1f1f1f] text-white'
                  : 'text-[#5f5a52] hover:bg-[#f7f5f0] hover:text-[#1f1f1f]'
              }`}
            >
              {s.label}
            </a>
            {i < sectionAnchors.length - 1 && <span aria-hidden="true" className="mx-1 h-3 w-px bg-black/15" />}
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

export default function FeaturesPage() {
  const activeSection = useActiveSection(sectionAnchors.map((s) => s.id))

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#1f1f1f]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,138,58,0.10),_transparent_22%),radial-gradient(circle_at_88%_16%,_rgba(108,124,246,0.11),_transparent_22%),linear-gradient(180deg,_#f7f5f0_0%,_#f4f1ea_100%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <NeutralPill label="Product capabilities" />
            <h1 className="mt-6 font-body text-4xl font-extrabold leading-[0.98] tracking-[-0.035em] text-[#1f1f1f] sm:text-5xl md:text-[4.1rem]">
              Everything you need for smarter health
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#62606a] md:text-xl">
              Four capability areas. One coherent product system — the same intelligence everywhere, with LC or ZJ shaping the tone.
            </p>
          </div>
        </div>
      </section>

      <SectionAnchorNav activeId={activeSection} />

      {/* Tier 1: Capabilities overview */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <RevealBlock>
            <div className="grid gap-5 sm:grid-cols-2">
              {overviewCards.map((card) => (
                <a
                  key={card.id}
                  href={card.anchor}
                  className="group flex flex-col transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-5">
                    <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-[1.3rem] bg-[#f4f0ea] md:h-36 md:w-32">
                      {card.kind === 'plate' ? (
                        <PlateThumb />
                      ) : (
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="5rem"
                          className={`object-cover ${card.crop} brightness-[1.01] contrast-[1.02] saturate-[1.03]`}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#8a847b]">{card.tag}</p>
                      <h3 className="mt-1.5 text-lg font-extrabold tracking-[-0.02em] text-[#1f1f1f] md:text-xl">{card.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#65616a]">{card.desc}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-end">
                    <span className="inline-flex items-center gap-2 rounded-full border border-black/6 bg-[#f7f5f0] px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#5e5961] transition-colors group-hover:bg-white">
                      Jump to details
                      <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Tier 2: Food Analysis spotlight */}
      <section id="food-analysis" className="scroll-mt-36 bg-[#fbfaf7] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <RevealBlock className="mx-auto max-w-3xl text-center">
            <NeutralPill label="Capability spotlight · Nutrition" />
            <h2 className="mt-6 font-body text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#1f1f1f] md:text-[2.8rem]">
              Photo to coaching, one step at a time.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#62606a] md:text-lg md:leading-8">
              Capture a meal, read the analysis, and see how LC and ZJ interpret the same numbers in two coaching tones.
            </p>
          </RevealBlock>

          <RevealBlock delay={80} className="mt-10 md:mt-12">
            <AIFoodAnalyzerDemo immersive />
          </RevealBlock>
        </div>
      </section>

      {/* Tier 3: Compact horizontal detail blocks */}
      <section className="pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-6xl space-y-20 px-6 md:space-y-28">
          {detailBlocks.map((block, i) => {
            const isReversed = i % 2 === 1
            return (
              <RevealBlock key={block.id} delay={i * 60}>
                <article
                  id={block.id}
                  className="group scroll-mt-36 lg:flex lg:min-h-[85vh] lg:items-center lg:w-full"
                >
                  <div className={`grid gap-6 md:gap-10 lg:items-stretch ${isReversed ? 'lg:grid-cols-[1fr_1.6fr]' : 'lg:grid-cols-[1.6fr_1fr]'}`}>
                    <div
                      className={`${isReversed ? 'tier3-image-r' : 'tier3-image-l'} relative aspect-[0.95] overflow-hidden rounded-[1.8rem] bg-[#f4f0ea] lg:aspect-auto lg:min-h-[40rem] ${isReversed ? 'lg:order-2' : ''}`}
                    >
                      <Image
                        src={block.image}
                        alt={block.title}
                        fill
                        sizes="(min-width: 1024px) 32rem, 100vw"
                        className={`object-cover ${block.crop} brightness-[1.01] contrast-[1.02] saturate-[1.03] transition-transform duration-700 group-hover:scale-[1.02]`}
                      />
                      <div className="absolute left-4 top-4">
                        <div className="rounded-full border border-black/6 bg-white/92 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#5e5961] backdrop-blur">
                          {block.tag}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${isReversed ? 'tier3-text-l' : 'tier3-text-r'} flex flex-col justify-center px-1 md:px-2 ${isReversed ? 'lg:order-1' : ''}`}
                    >
                      <h3 className="font-body text-2xl font-extrabold tracking-[-0.03em] text-[#1f1f1f] md:text-[2rem]">
                        {block.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-[#64616c] md:text-lg md:leading-8">
                        {block.desc}
                      </p>
                      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                        {block.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-center gap-3 rounded-[1.1rem] border border-black/6 bg-[#fbfaf7] px-3.5 py-2.5 text-sm font-medium text-[#45424c]"
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f4f0ea]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#7e786f]" />
                            </span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-black/8 bg-[#f7f5f0] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#7e786f]">
                        <span className="h-2 w-2 rounded-full bg-[#f28a3a]" />
                        <span className="h-2 w-2 -ml-1 rounded-full bg-[#6c7cf6]" />
                        <span className="ml-1">Same intelligence · LC or ZJ tone</span>
                      </div>
                    </div>
                  </div>
                </article>
              </RevealBlock>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}
