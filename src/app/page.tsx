'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const coachProfiles = [
  {
    id: 'zj',
    name: 'ZJ',
    title: 'Supportive, calmer, steady',
    desc: 'Gentle, lower-pressure support that helps you build momentum without turning every day into a grind.',
    quote: "I'll help you build steady habits without making fitness feel overwhelming.",
    tags: ['Gentle guidance', 'Habit building', 'Lower pressure'],
    image: '/images/homepage/coach-zj.jpg',
    accent: 'zj',
  },
  {
    id: 'lc',
    name: 'LC',
    title: 'Sharper, structured, accountable',
    desc: 'A more direct coaching style built for consistency, structure, and catching drift before it compounds.',
    quote: "I'll keep the plan sharp and call out drift before it becomes a pattern.",
    tags: ['Strong accountability', 'Structure', 'Performance focus'],
    image: '/images/homepage/coach-lc.jpg',
    accent: 'lc',
  },
] as const

const proofCards = [
  {
    title: 'Community check-ins',
    desc: 'Real posts, comments, and shared accountability.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&h=1600&fit=crop&q=80',
    accent: 'zj',
    crop: 'object-[50%_20%]',
  },
  {
    title: 'Routine tracking',
    desc: 'Calendar views for meals, training, weight, and trends.',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1400&h=1600&fit=crop&q=80',
    accent: 'zj',
    crop: 'object-[50%_22%]',
  },
  {
    title: 'Coach accountability',
    desc: 'Direct AI coach messages that keep progress visible.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1400&h=1600&fit=crop&q=80',
    accent: 'lc',
    crop: 'object-[50%_12%]',
  },
] as const

const capabilities = [
  { title: 'Food Photo Analysis', desc: 'AI estimates calories and macros from meal photos.', accent: 'lc' },
  { title: 'Workout Logging', desc: 'Track sets, reps, and estimate calorie burn.', accent: 'zj' },
  { title: 'TDEE Tracking', desc: 'Calculate daily energy needs and calorie balance.', accent: 'lc' },
  { title: 'Profile Memory', desc: 'Remembers your height, weight, goals, and preferences.', accent: 'zj' },
  { title: 'Progress Summaries', desc: 'Daily and weekly nutrition and training reports.', accent: 'zj' },
  { title: 'Personalized Plans', desc: 'Custom workout and meal suggestions based on goals.', accent: 'lc' },
] as const

const communityPills = [
  { label: 'ZJ encouragement', tone: 'zj' },
  { label: 'LC discipline', tone: 'lc' },
  { label: 'Shared intelligence', tone: 'neutral' },
] as const

function YMark({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 115"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <circle cx="50" cy="15" r="11" />
      <path d="M 40 32 L 60 32 L 88 108 L 60 108 L 50 50 L 40 108 L 12 108 Z" />
    </svg>
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
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
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
      className={`home-reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const [activeCoachId, setActiveCoachId] = useState<(typeof coachProfiles)[number]['id']>('zj')
  const [brokenCoachImages, setBrokenCoachImages] = useState<string[]>([])
  const activeCoach = coachProfiles.find((coach) => coach.id === activeCoachId) ?? coachProfiles[0]

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#1f1f1f]">
      <Navbar />

      <section className="home-chapter hero-chapter relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,138,58,0.12),_transparent_22%),radial-gradient(circle_at_82%_18%,_rgba(108,124,246,0.12),_transparent_22%),linear-gradient(145deg,_#f7f5f0_0%,_#f3efe7_45%,_#f8f6f2_100%)]" />
        <div className="absolute left-[10%] top-[18%] h-24 w-24 rounded-full bg-[#f28a3a]/10 blur-3xl" />
        <div className="absolute right-[12%] top-[20%] h-28 w-28 rounded-full bg-[#6c7cf6]/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="hero-wordmark" aria-hidden="true">zym</span>
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pt-16 pb-24 text-center md:pt-24 md:pb-32">
          <RevealBlock className="w-full">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/72 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#5d5d5d] backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-[#6c7cf6]" />
              AI fitness space
            </div>

            <h1 className="mt-8 font-body text-[3.2rem] font-extrabold leading-[0.96] tracking-[-0.035em] text-[#1f1f1f] sm:text-[4.4rem] md:text-[5.2rem] lg:text-[5.8rem] xl:text-[6.2rem]">
              <span className="block">Train smarter.</span>
              <span className="block text-[#f28a3a]">Eat better.</span>
              <span className="block text-[#6c7cf6]">Stay consistent.</span>
            </h1>

            <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
              <a
                href="https://app.zym8.com/login"
                className="home-button-primary inline-flex items-center justify-center rounded-[1.45rem] border border-[#f28a3a]/30 bg-[linear-gradient(180deg,rgba(242,138,58,0.18),rgba(242,138,58,0.10))] px-9 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#7b4517] shadow-[0_14px_30px_rgba(94,71,46,0.12)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#f28a3a]/45"
              >
                Get Started
              </a>
              <Link
                href="/features"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#3642a8] transition-colors hover:text-[#6c7cf6]"
              >
                Explore Features
                <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </RevealBlock>
        </div>
      </section>

      <section className="home-chapter chapter-split bg-[#fbfaf7] py-32 md:py-40">
        <div className="mx-auto max-w-6xl px-6">
          <RevealBlock className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f28a3a]/16 bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7a6a59] shadow-[0_10px_24px_rgba(102,88,69,0.06)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f28a3a]" />
              Meet your coaches
            </div>
            <h2 className="mt-6 font-body text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#1f1f1f] md:text-[3.1rem]">
              One product. Two coaching energies.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#62606a] md:text-xl">
              Switch between ZJ and LC to see how the same system can guide you with a different tone, pace, and level of pressure.
            </p>
          </RevealBlock>

          <RevealBlock delay={90}>
            <div className="coach-stage relative overflow-hidden p-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,138,58,0.10),_transparent_24%),radial-gradient(circle_at_82%_16%,_rgba(108,124,246,0.10),_transparent_24%)]" />

              <div className="relative grid gap-6 xl:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] xl:items-stretch">
                <div className="coach-portrait-showcase relative overflow-hidden p-0">
                  <div className="coach-image-glow absolute left-6 top-6 h-20 w-20 rounded-full bg-[#f28a3a]/12 blur-3xl" />
                  <div className="coach-image-glow absolute bottom-6 right-6 h-24 w-24 rounded-full bg-[#6c7cf6]/12 blur-3xl" />

                  <div className="relative grid gap-4 lg:grid-cols-[minmax(0,1fr)_10rem] lg:items-end">
                    <div className="coach-image-frame relative aspect-[0.86] overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                      {coachProfiles.map((coach) => {
                        const isVisible = coach.id === activeCoachId
                        const hasBrokenImage = brokenCoachImages.includes(coach.id)

                        return (
                          <div
                            key={coach.id}
                            className={`coach-image-panel ${isVisible ? 'is-visible' : ''}`}
                          >
                            {!hasBrokenImage ? (
                              <Image
                                src={coach.image}
                                alt={`${coach.name} coach portrait`}
                                fill
                                sizes="(min-width: 1280px) 38rem, (min-width: 1024px) 32rem, 100vw"
                                className="object-cover"
                                onError={() =>
                                  setBrokenCoachImages((current) =>
                                    current.includes(coach.id) ? current : [...current, coach.id],
                                  )
                                }
                              />
                            ) : (
                              <div className="coach-image-fallback flex h-full w-full items-center justify-center bg-[linear-gradient(160deg,rgba(255,255,255,0.94)_0%,rgba(244,239,231,0.92)_100%)]">
                                <div className="text-center">
                                  <div
                                    className={`mx-auto flex h-24 w-24 items-center justify-center rounded-[1.8rem] text-3xl font-black ${
                                      coach.accent === 'lc'
                                        ? 'bg-[#f28a3a]/12 text-[#b16322]'
                                        : 'bg-[#6c7cf6]/12 text-[#4251cb]'
                                    }`}
                                  >
                                    {coach.name}
                                  </div>
                                  <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8d887e]">
                                    Add image to
                                  </p>
                                  <p className="mt-2 text-sm font-medium text-[#5e5961]">
                                    {coach.image}
                                  </p>
                                </div>
                              </div>
                            )}

                            <div className="absolute left-4 top-4">
                              <div
                                className={`rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white ${
                                  coach.accent === 'lc' ? 'bg-[#f28a3a]' : 'bg-[#6c7cf6]'
                                }`}
                              >
                                {coach.name} coach
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <div className="coach-preview-stack flex gap-4 lg:flex-col">
                      {coachProfiles
                        .filter((coach) => coach.id !== activeCoachId)
                        .map((coach) => {
                          const hasBrokenImage = brokenCoachImages.includes(coach.id)

                          return (
                            <button
                              key={coach.id}
                              type="button"
                              onClick={() => setActiveCoachId(coach.id)}
                              className="coach-preview-card group relative flex-1 overflow-hidden rounded-[1.6rem] border border-black/6 bg-white/86 p-3 text-left shadow-[0_16px_30px_rgba(102,88,69,0.07)] lg:flex-none"
                            >
                              <div className="relative aspect-[0.82] overflow-hidden rounded-[1.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(244,239,231,0.94)_100%)]">
                                {!hasBrokenImage ? (
                                  <Image
                                    src={coach.image}
                                    alt={`${coach.name} preview portrait`}
                                    fill
                                    sizes="(min-width: 1024px) 10rem, 40vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    onError={() =>
                                      setBrokenCoachImages((current) =>
                                        current.includes(coach.id) ? current : [...current, coach.id],
                                      )
                                    }
                                  />
                                ) : (
                                  <div className="flex h-full w-full items-center justify-center">
                                    <div
                                      className={`flex h-16 w-16 items-center justify-center rounded-[1.2rem] text-xl font-black ${
                                        coach.accent === 'lc'
                                          ? 'bg-[#f28a3a]/12 text-[#b16322]'
                                          : 'bg-[#6c7cf6]/12 text-[#4251cb]'
                                      }`}
                                    >
                                      {coach.name}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="mt-3">
                                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#8a847b]">Preview</p>
                                <p className="mt-1 text-base font-bold text-[#1f1f1f]">{coach.name}</p>
                                <p className="mt-1 text-sm text-[#65616a]">Switch coach</p>
                              </div>
                            </button>
                          )
                        })}
                    </div>
                  </div>
                </div>

                <div className="coach-copy-stack">
                  <div
                    key={activeCoach.id}
                    className="coach-copy-panel p-2 xl:min-h-full"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] ${
                          activeCoach.accent === 'lc'
                            ? 'bg-[#f28a3a]/10 text-[#b16322]'
                            : 'bg-[#6c7cf6]/10 text-[#4251cb]'
                        }`}
                      >
                        {activeCoach.name}
                      </span>
                      <span className="rounded-full border border-black/6 bg-[#f7f5f0] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#7e786f]">
                        Coaching style
                      </span>
                    </div>

                    <h3 className="mt-5 text-[2rem] font-bold leading-tight tracking-[-0.03em] text-[#1f1f1f]">
                      {activeCoach.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[#66646e]">{activeCoach.desc}</p>

                    <div
                      className={`mt-6 inline-flex rounded-full px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${
                        activeCoach.accent === 'lc'
                          ? 'bg-[#f28a3a]/10 text-[#b16322]'
                          : 'bg-[#6c7cf6]/10 text-[#4251cb]'
                      }`}
                    >
                      {activeCoach.accent === 'lc' ? 'Structured accountability mode' : 'Steady support mode'}
                    </div>

                    <div
                      className={`coach-quote-bubble mt-6 rounded-[1.8rem] border px-5 py-5 ${
                        activeCoach.accent === 'lc'
                          ? 'border-[#f28a3a]/12 bg-[linear-gradient(180deg,rgba(255,250,245,0.96)_0%,rgba(249,241,232,0.96)_100%)]'
                          : 'border-[#6c7cf6]/12 bg-[linear-gradient(180deg,rgba(247,248,255,0.96)_0%,rgba(239,242,255,0.96)_100%)]'
                      }`}
                    >
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8d887e]">Sample tone</p>
                      <p className="mt-3 text-lg font-semibold leading-8 tracking-[-0.02em] text-[#38353d]">
                        "{activeCoach.quote}"
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {activeCoach.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full px-4 py-2 text-sm font-semibold ${
                            activeCoach.accent === 'lc'
                              ? 'bg-[#f28a3a]/10 text-[#b16322]'
                              : 'bg-[#6c7cf6]/10 text-[#4251cb]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      <section className="home-chapter chapter-gallery bg-[#f7f5f0] py-32 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <RevealBlock className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#6c7cf6]/16 bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#6d73a9] shadow-[0_10px_24px_rgba(102,88,69,0.05)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#6c7cf6]" />
                Everyday proof
              </div>
              <h2 className="mt-6 font-body text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#1f1f1f] md:text-[3.1rem]">
                Built for real people.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#62606a] md:text-xl">
                Students, young adults, and anyone building healthier routines with less friction.
              </p>
            </div>
          </RevealBlock>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {proofCards.map((card, index) => (
              <RevealBlock key={card.title} delay={index * 90}>
              <div className="group flex flex-col">
                <div className="relative aspect-[0.88] overflow-hidden rounded-[1.6rem] md:aspect-[0.95]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`h-full w-full object-cover ${card.crop} brightness-[1.01] contrast-[1.02] saturate-[1.03] transition-transform duration-700 group-hover:scale-[1.03]`}
                  />
                </div>
                <div className="mt-5">
                  <p
                    className={`text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${
                      card.accent === 'lc' ? 'text-[#b16322]' : 'text-[#4251cb]'
                    }`}
                  >
                    {card.accent === 'lc' ? 'LC style' : 'ZJ style'}
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.02em] text-[#1f1f1f] md:text-[1.7rem]">{card.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#62606a]">{card.desc}</p>
                </div>
              </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <section className="home-chapter chapter-capabilities bg-[#fbfaf7] py-32 md:py-40">
        <div className="mx-auto max-w-6xl px-6">
          <RevealBlock className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#6c7cf6]/16 bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#6d73a9] shadow-[0_10px_24px_rgba(102,88,69,0.05)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#6c7cf6]" />
              Product capabilities
            </div>
            <h2 className="mt-6 font-body text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#1f1f1f] md:text-[3.1rem]">
              Current capabilities.
            </h2>
          </RevealBlock>

          <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
            {capabilities.map((item, index) => (
              <RevealBlock key={item.title} delay={index * 50}>
                <div className="group/spec grid gap-2 px-2 py-6 transition-colors duration-300 hover:bg-[#fbf9f3] md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.6fr)] md:items-baseline md:gap-8 md:px-4 md:py-7">
                  <div
                    className={`text-[0.66rem] font-bold uppercase tracking-[0.24em] text-[#8d887e] transition-colors duration-300 ${
                      item.accent === 'lc'
                        ? 'group-hover/spec:text-[#b16322]'
                        : 'group-hover/spec:text-[#4a57c9]'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-extrabold tracking-[-0.02em] text-[#1f1f1f] transition-transform duration-300 group-hover/spec:translate-x-1 md:text-[1.5rem]">{item.title}</h3>
                  <p className="text-base leading-7 text-[#66646e]">{item.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <section className="home-chapter chapter-community bg-[#f7f5f0] py-32 md:py-40">
        <div className="mx-auto max-w-5xl px-6">
          <RevealBlock className="px-2 py-14 text-center md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f28a3a]/16 bg-white/80 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7a6a59]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f28a3a]" />
                Community vision
              </div>
              <h2 className="mt-6 font-body text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#1f1f1f] md:text-[3.1rem]">
                Not just a coach. A community.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#62606a] md:text-xl">
                Add friends, share daily activities, stay accountable, and build healthier routines with support that feels personal.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {communityPills.map((pill) => (
                <span
                  key={pill.label}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    pill.tone === 'lc'
                      ? 'bg-[#f28a3a]/10 text-[#b16322]'
                      : pill.tone === 'zj'
                        ? 'bg-[#6c7cf6]/10 text-[#4a57c9]'
                        : 'bg-black/[0.04] text-[#66646e]'
                  }`}
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      <section className="home-chapter chapter-cta bg-[#fbfaf7] py-32 md:py-40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <RevealBlock className="px-2 py-14 md:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#6c7cf6]/16 bg-[#6c7cf6]/6 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#636db9]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#6c7cf6]" />
              Early access
            </div>
            <h2 className="mt-6 font-body text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#1f1f1f] md:text-[3.1rem]">
              Join the journey.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#62606a] md:text-xl">
              We&apos;re building the future of lifestyle support. Request early access and choose the coaching style that fits how you want to be pushed.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="https://github.com/Juggernaut0825/skill_zym"
                target="_blank"
                rel="noopener noreferrer"
                className="home-button-primary inline-flex items-center gap-3 rounded-[1.5rem] border border-[#f28a3a]/28 bg-[linear-gradient(180deg,rgba(242,138,58,0.18),rgba(242,138,58,0.10))] px-9 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#7b4517] shadow-[0_14px_30px_rgba(94,71,46,0.10)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#f28a3a]/45"
              >
                Request Access
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </RevealBlock>
        </div>
      </section>

      <Footer />
    </main>
   )
}
