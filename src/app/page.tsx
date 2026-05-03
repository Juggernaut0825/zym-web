'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
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
    quote: 'I’ll help you build steady habits without making fitness feel overwhelming.',
    tags: ['Gentle guidance', 'Habit building', 'Lower pressure'],
    image: '/images/coaches/zj.png',
    accent: 'lc',
  },
  {
    id: 'lc',
    name: 'LC',
    title: 'Sharper, structured, accountable',
    desc: 'A more direct coaching style built for consistency, structure, and catching drift before it compounds.',
    quote: 'I’ll keep the plan sharp and call out drift before it becomes a pattern.',
    tags: ['Strong accountability', 'Structure', 'Performance focus'],
    image: '/images/coaches/lc.png',
    accent: 'zj',
  },
] as const

const proofCards = [
  {
    title: 'Train together',
    desc: 'Shared routines, visible momentum.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop',
    accent: 'lc',
  },
  {
    title: 'Track progress',
    desc: 'Meals, workouts, recovery in one view.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop',
    accent: 'zj',
  },
  {
    title: 'Live better',
    desc: 'Habit-building with memory that stays personal.',
    image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800&h=800&fit=crop',
    accent: 'lc',
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
  { label: 'LC encouragement', tone: 'lc' },
  { label: 'ZJ discipline', tone: 'zj' },
  { label: 'Shared intelligence', tone: 'neutral' },
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
  const { ref, visible } = useRevealOnScroll<HTMLElement>()

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
        <div className="absolute right-[14%] bottom-[24%] h-10 w-10 rotate-[18deg] rounded-[1.1rem] border border-[#f28a3a]/18 bg-[#f28a3a]/8" />

        <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] lg:gap-24 xl:gap-28">
          <RevealBlock className="max-w-[40rem] lg:max-w-[42rem] lg:pr-8 xl:max-w-[44rem]">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/72 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#5d5d5d] backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-[#6c7cf6]" />
              AI fitness space
            </div>

            <h1 className="mt-7 max-w-[11.3ch] font-body text-[3.2rem] font-extrabold leading-[0.96] tracking-[-0.035em] text-[#1f1f1f] sm:text-[4.1rem] lg:text-[4.8rem] xl:text-[5.1rem]">
              <span>Train smarter.</span>
              <span className="block text-[#f28a3a]">Eat better.</span>
              <span className="block text-[#6c7cf6]">Stay consistent.</span>
            </h1>

            <p className="mt-6 max-w-[34rem] text-lg leading-8 text-[#575757] sm:text-xl">
              Your AI-powered fitness space for meals, workouts, and daily progress.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://app.zym8.com/login"
                className="home-button-primary inline-flex items-center justify-center rounded-[1.45rem] border border-[#f28a3a]/30 bg-[linear-gradient(180deg,rgba(242,138,58,0.18),rgba(242,138,58,0.10))] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#7b4517] shadow-[0_14px_30px_rgba(94,71,46,0.12)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#f28a3a]/45"
              >
                Get Started
              </a>
              <Link
                href="/features"
                className="home-button-secondary inline-flex items-center justify-center rounded-[1.45rem] border border-[#6c7cf6]/28 bg-[linear-gradient(180deg,rgba(108,124,246,0.14),rgba(108,124,246,0.07))] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#3642a8] shadow-[0_14px_30px_rgba(67,81,176,0.10)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#6c7cf6]/42"
              >
                Explore Features
              </Link>
            </div>
            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Coach tone', value: 'LC + ZJ' },
                { label: 'Shared space', value: 'Meals • Training' },
                { label: 'Designed for', value: 'Daily consistency' },
              ].map((item) => (
                <div key={item.label} className="home-metric-card rounded-[1.45rem] border border-black/6 bg-white/70 px-4 py-4 backdrop-blur">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#8d887e]">{item.label}</p>
                  <p className="mt-2 text-[0.98rem] font-bold tracking-[-0.02em] text-[#1f1f1f]">{item.value}</p>
                </div>
              ))}
            </div>
          </RevealBlock>

          <RevealBlock className="relative mx-auto flex w-full justify-end lg:justify-end" delay={100}>
            <div className="relative w-full max-w-[23rem] pt-8 lg:max-w-[22.5rem] lg:translate-x-4 xl:max-w-[23.5rem] xl:translate-x-6">
              <div className="absolute inset-0 rotate-[3deg] rounded-[2.35rem] border border-black/6 bg-white/34" />

              <div className="relative overflow-hidden rounded-[2.35rem] border border-black/8 bg-[rgba(255,255,255,0.82)] p-4 shadow-[0_30px_80px_rgba(102,88,69,0.12)] backdrop-blur">
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(transparent_0%,rgba(31,31,31,0.12)_50%,transparent_100%)] bg-[length:100%_8px]" />
                <div className="relative rounded-[1.8rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(246,241,234,0.96)_100%)] p-5 sm:p-6">
                  <div className="flex items-center justify-between rounded-[1.35rem] border border-black/6 bg-white/70 px-4 py-3">
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#7b7b7b]">ZYM dashboard</p>
                      <p className="mt-1 text-lg font-bold text-[#1f1f1f]">Today&apos;s overview</p>
                    </div>
                    <div className="rounded-full border border-[#6c7cf6]/18 bg-[#6c7cf6]/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#4a57c9]">
                      Synced
                    </div>
                  </div>

                  <div className="mt-5 rounded-[1.65rem] border border-black/6 bg-white/78 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-[#7a7a7a]">Progress ring</p>
                      <div className="rounded-full bg-[#f28a3a]/12 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#b16322]">
                        Focus
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-[10px] border-[#6c7cf6]/24 text-2xl font-black text-[#1f1f1f] shadow-[0_0_0_8px_rgba(108,124,246,0.05)]">
                        82%
                      </div>
                      <div className="space-y-2 text-sm text-[#666666]">
                        <p>Meals analyzed</p>
                        <p>Workout queued</p>
                        <p>Recovery stable</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.55rem] border border-[#f28a3a]/12 bg-[#f28a3a]/6 px-4 py-3">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#a16a45]">LC coaching style</p>
                      <p className="mt-2 text-sm font-semibold text-[#4f3927]">Protein pacing is on track. Keep going, you are building something steady.</p>
                    </div>
                    <div className="rounded-[1.55rem] border border-[#6c7cf6]/12 bg-[#6c7cf6]/6 px-4 py-3">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#5d68be]">ZJ coaching style</p>
                      <p className="mt-2 text-sm font-semibold text-[#303a86]">Breakfast is logged. Workout plan is ready. Stay on schedule.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      <section className="home-chapter chapter-split bg-[#fbfaf7] py-24 md:py-28">
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
            <div className="coach-stage relative overflow-hidden rounded-[2.5rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(244,239,231,0.88)_100%)] p-5 shadow-[0_28px_56px_rgba(102,88,69,0.08)] sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,138,58,0.10),_transparent_24%),radial-gradient(circle_at_82%_16%,_rgba(108,124,246,0.10),_transparent_24%)]" />

              <div className="relative grid gap-6 xl:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] xl:items-stretch">
                <div className="coach-portrait-showcase relative overflow-hidden rounded-[2.1rem] border border-black/6 bg-[linear-gradient(180deg,rgba(251,250,247,0.94)_0%,rgba(241,236,228,0.94)_100%)] p-4 sm:p-5">
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
                    className={`coach-copy-panel rounded-[2rem] border bg-white/88 p-6 shadow-[0_18px_36px_rgba(102,88,69,0.06)] xl:min-h-full ${
                      activeCoach.accent === 'lc' ? 'border-[#f28a3a]/16' : 'border-[#6c7cf6]/16'
                    }`}
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
                      {activeCoach.accent === 'lc' ? 'Steady support mode' : 'Structured accountability mode'}
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
                        “{activeCoach.quote}”
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

      <section className="home-chapter chapter-gallery bg-[#f7f5f0] py-24 md:py-28">
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
              <div
                className="group home-story-card overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_24px_50px_rgba(102,88,69,0.08)]"
              >
                <div className="relative aspect-[0.94] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,25,0.04)_0%,rgba(17,19,25,0.16)_50%,rgba(17,19,25,0.55)_100%)]" />
                  <div className="absolute left-5 top-5">
                    <div
                      className={`rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] backdrop-blur ${
                        card.accent === 'lc'
                          ? 'bg-[#f28a3a]/84 text-white'
                          : 'bg-[#6c7cf6]/84 text-white'
                      }`}
                    >
                      {card.accent === 'lc' ? 'LC style' : 'ZJ style'}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold tracking-[-0.02em]">{card.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/85">{card.desc}</p>
                  </div>
                </div>
              </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <section className="home-chapter chapter-capabilities bg-[#fbfaf7] py-24 md:py-28">
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

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item, index) => (
              <RevealBlock key={item.title} delay={index * 60}>
              <div
                className={`home-capability-card rounded-[2rem] border bg-white/92 p-6 shadow-[0_20px_45px_rgba(102,88,69,0.07)] ${
                  item.accent === 'lc' ? 'border-[#f28a3a]/12' : 'border-[#6c7cf6]/12'
                }`}
              >
                <div
                  className={`inline-flex rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${
                    item.accent === 'lc'
                      ? 'bg-[#f28a3a]/10 text-[#b16322]'
                      : 'bg-[#6c7cf6]/10 text-[#4a57c9]'
                  }`}
                >
                  Shared capability
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-[-0.02em] text-[#1f1f1f]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#66646e]">{item.desc}</p>
              </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <section className="home-chapter chapter-community bg-[#f7f5f0] py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <RevealBlock className="overflow-hidden rounded-[2.2rem] border border-black/6 bg-[linear-gradient(145deg,rgba(255,255,255,0.9)_0%,rgba(244,238,228,0.94)_100%)] px-8 py-14 text-center shadow-[0_24px_50px_rgba(102,88,69,0.07)] md:px-14">
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

      <section className="home-chapter chapter-cta bg-[#fbfaf7] py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <RevealBlock className="rounded-[2.2rem] border border-black/6 bg-white/92 px-8 py-14 shadow-[0_24px_50px_rgba(102,88,69,0.07)] md:px-14">
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
