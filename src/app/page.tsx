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

function Eyebrow({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) {
  const color = tone === 'dark' ? 'text-[#a09d96]' : 'text-[#6c6a64]'
  return (
    <p className={`text-[0.72rem] font-medium uppercase tracking-[0.18em] ${color}`}>{children}</p>
  )
}

export default function Home() {
  const [activeCoachId, setActiveCoachId] = useState<(typeof coachProfiles)[number]['id']>('zj')
  const [brokenCoachImages, setBrokenCoachImages] = useState<string[]>([])
  const activeCoach = coachProfiles.find((coach) => coach.id === activeCoachId) ?? coachProfiles[0]

  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#141413]">
      <Navbar />

      {/* HERO — cream canvas, serif display, three colored lines */}
      <section className="home-chapter hero-chapter relative overflow-hidden pt-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="hero-wordmark" aria-hidden="true">zym</span>
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-20 pb-28 text-center md:pt-28 md:pb-36">
          <RevealBlock className="w-full">
            <Eyebrow>AI fitness space</Eyebrow>

            <h1 className="font-display-serif mt-8 text-[3.2rem] leading-[1.05] tracking-[-0.03em] text-[#141413] sm:text-[4.4rem] md:text-[5.2rem] lg:text-[5.8rem] xl:text-[6.2rem]">
              <span className="block">Train smarter.</span>
              <span className="block text-[#f28a3a]">Eat better.</span>
              <span className="block text-[#6c7cf6]">Stay consistent.</span>
            </h1>

            <p className="mx-auto mt-10 max-w-2xl text-lg leading-[1.6] text-[#3d3d3a] md:text-xl">
              ZYM is the calmer way to train, eat, and stay consistent. One product, two coaching voices — LC for structure, ZJ for steady support.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
              <a
                href="https://app.zym8.com/login"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#141413] px-7 py-3.5 text-sm font-medium text-[#faf9f5] shadow-[0_8px_24px_rgba(20,20,19,0.18)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.96]"
              >
                Get Started
                <span aria-hidden="true">→</span>
              </a>
              <Link
                href="/features"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#141413] transition-colors hover:text-[#3d3d3a]"
              >
                Explore features
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* COACH SELECTOR — surface-card band, interactive LC/ZJ toggle preserved */}
      <section className="home-chapter chapter-split bg-[#efe9de] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <RevealBlock className="mx-auto max-w-3xl">
            <Eyebrow>Meet your coaches</Eyebrow>
            <h2 className="font-display-serif mt-6 text-4xl leading-[1.1] tracking-[-0.025em] text-[#141413] md:text-[3.1rem]">
              One product. Two coaching energies.
            </h2>
            <p className="mt-6 text-lg leading-[1.6] text-[#3d3d3a] md:text-xl">
              Switch between ZJ and LC to see how the same system can guide you with a different tone, pace, and level of pressure.
            </p>
          </RevealBlock>

          <RevealBlock delay={90} className="mt-14">
            <div className="coach-stage relative overflow-hidden p-0">
              <div className="relative grid gap-8 xl:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] xl:items-stretch">
                <div className="coach-portrait-showcase relative overflow-hidden p-0">
                  <div className="relative grid gap-4 lg:grid-cols-[minmax(0,1fr)_10rem] lg:items-end">
                    <div className="coach-image-frame relative aspect-[0.86] overflow-hidden rounded-xl bg-[#faf9f5]">
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
                              <div className="coach-image-fallback flex h-full w-full items-center justify-center bg-[#faf9f5]">
                                <div className="text-center">
                                  <div
                                    className={`mx-auto flex h-24 w-24 items-center justify-center rounded-xl text-3xl ${
                                      coach.accent === 'lc'
                                        ? 'bg-[#f28a3a]/10 text-[#f28a3a]'
                                        : 'bg-[#6c7cf6]/10 text-[#6c7cf6]'
                                    }`}
                                  >
                                    <YMark className="h-10 w-10" />
                                  </div>
                                  <p className="mt-5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6c6a64]">
                                    Add image to
                                  </p>
                                  <p className="mt-2 text-sm text-[#3d3d3a]">
                                    {coach.image}
                                  </p>
                                </div>
                              </div>
                            )}

                            <div className="absolute left-5 top-5">
                              <span className="rounded-full bg-[#141413] px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#faf9f5]">
                                {coach.name} coach
                              </span>
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
                              className="coach-preview-card group relative flex-1 overflow-hidden rounded-lg bg-[#faf9f5] p-3 text-left lg:flex-none"
                            >
                              <div className="relative aspect-[0.82] overflow-hidden rounded-lg bg-[#efe9de]">
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
                                      className={`flex h-14 w-14 items-center justify-center rounded-lg ${
                                        coach.accent === 'lc'
                                          ? 'bg-[#f28a3a]/10 text-[#f28a3a]'
                                          : 'bg-[#6c7cf6]/10 text-[#6c7cf6]'
                                      }`}
                                    >
                                      <YMark className="h-6 w-6" />
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="mt-3">
                                <p className="text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#6c6a64]">Preview</p>
                                <p className="font-display-serif mt-1 text-xl leading-[1.15] tracking-[-0.025em] text-[#141413]">{coach.name}</p>
                                <p className="mt-1 text-sm text-[#3d3d3a]">Switch coach</p>
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
                    <Eyebrow>
                      {activeCoach.name} · Coaching style
                    </Eyebrow>

                    <h3 className="font-display-serif mt-5 text-3xl leading-[1.1] tracking-[-0.025em] text-[#141413] md:text-4xl">
                      {activeCoach.title}
                    </h3>
                    <p className="mt-5 text-base leading-[1.6] text-[#3d3d3a]">{activeCoach.desc}</p>

                    <div className="coach-quote-bubble mt-7 rounded-xl bg-[#faf9f5] px-6 py-6">
                      <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6c6a64]">Sample tone</p>
                      <p className="mt-3 font-display-serif text-xl leading-[1.35] tracking-[-0.015em] text-[#141413]">
                        &ldquo;{activeCoach.quote}&rdquo;
                      </p>
                    </div>

                    <ul className="mt-7 space-y-3">
                      {activeCoach.tags.map((tag) => (
                        <li key={tag} className="flex items-start gap-3 text-base leading-[1.6] text-[#3d3d3a]">
                          <span
                            className={`mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full ${
                              activeCoach.accent === 'lc' ? 'bg-[#f28a3a]' : 'bg-[#6c7cf6]'
                            }`}
                          />
                          <span>{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* PROOF CARDS — canvas band, 3 image cards */}
      <section className="home-chapter chapter-gallery bg-[#faf9f5] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <RevealBlock className="max-w-2xl">
            <Eyebrow>Everyday proof</Eyebrow>
            <h2 className="font-display-serif mt-6 text-4xl leading-[1.1] tracking-[-0.025em] text-[#141413] md:text-[3.1rem]">
              Built for real people.
            </h2>
            <p className="mt-6 text-lg leading-[1.6] text-[#3d3d3a] md:text-xl">
              Students, young adults, and anyone building healthier routines with less friction.
            </p>
          </RevealBlock>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {proofCards.map((card, index) => (
              <RevealBlock key={card.title} delay={index * 90}>
                <div className="group flex flex-col">
                  <div className="relative aspect-[0.88] overflow-hidden rounded-xl bg-[#efe9de] md:aspect-[0.95]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`h-full w-full object-cover ${card.crop} transition-transform duration-700 group-hover:scale-[1.03]`}
                    />
                  </div>
                  <div className="mt-6">
                    <Eyebrow>{card.accent === 'lc' ? 'LC style' : 'ZJ style'}</Eyebrow>
                    <h3 className="font-display-serif mt-3 text-2xl leading-[1.15] tracking-[-0.025em] text-[#141413] md:text-[1.7rem]">{card.title}</h3>
                    <p className="mt-3 text-base leading-[1.6] text-[#3d3d3a]">{card.desc}</p>
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES — DARK surface, Claude signature spec table */}
      <section className="home-chapter chapter-capabilities bg-[#181715] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <RevealBlock className="max-w-3xl">
            <Eyebrow tone="dark">Product capabilities</Eyebrow>
            <h2 className="font-display-serif mt-6 text-4xl leading-[1.1] tracking-[-0.025em] text-[#faf9f5] md:text-[3.1rem]">
              Current capabilities.
            </h2>
            <p className="mt-6 text-lg leading-[1.6] text-[#a09d96] md:text-xl">
              Six core systems already shipping. Same intelligence everywhere — LC or ZJ shapes the tone.
            </p>
          </RevealBlock>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {capabilities.map((item, index) => (
              <RevealBlock key={item.title} delay={index * 50}>
                <div className="group/spec grid gap-2 px-2 py-7 transition-colors duration-300 hover:bg-white/[0.03] md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.6fr)] md:items-baseline md:gap-8 md:px-4 md:py-8">
                  <div
                    className={`text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#a09d96] transition-colors duration-300 ${
                      item.accent === 'lc'
                        ? 'group-hover/spec:text-[#f28a3a]'
                        : 'group-hover/spec:text-[#6c7cf6]'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display-serif text-2xl leading-[1.15] tracking-[-0.025em] text-[#faf9f5] transition-transform duration-300 group-hover/spec:translate-x-1 md:text-[1.6rem]">{item.title}</h3>
                  <p className="text-base leading-[1.6] text-[#a09d96]">{item.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY — surface-card band */}
      <section className="home-chapter chapter-community bg-[#efe9de] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <RevealBlock className="max-w-3xl">
            <Eyebrow>Community vision</Eyebrow>
            <h2 className="font-display-serif mt-6 text-4xl leading-[1.1] tracking-[-0.025em] text-[#141413] md:text-[3.1rem]">
              Not just a coach. A community.
            </h2>
            <p className="mt-6 text-lg leading-[1.6] text-[#3d3d3a] md:text-xl">
              Add friends, share daily activities, stay accountable, and build healthier routines with support that feels personal.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {communityPills.map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-2 rounded-full bg-[#faf9f5] px-4 py-2 text-sm text-[#3d3d3a]"
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      pill.tone === 'lc' ? 'bg-[#f28a3a]' : pill.tone === 'zj' ? 'bg-[#6c7cf6]' : 'bg-[#6c6a64]'
                    }`}
                  />
                  {pill.label}
                </span>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* CORAL CTA — full-bleed LC orange callout */}
      <section className="home-chapter chapter-cta bg-[#faf9f5] py-20 md:py-28">
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
