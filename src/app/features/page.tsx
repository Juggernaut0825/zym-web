'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { AIFoodAnalyzerDemo } from '@/components/AIFoodAnalyzerDemo'

const features = [
  {
    tag: 'Nutrition',
    title: 'AI Food Analysis',
    desc: 'Snap a photo of any meal. ZYM identifies foods and estimates calories, protein, carbs, and fat instantly so logging feels fast and calm.',
    features: ['Instant food recognition', 'Automatic macro calculation', 'Support for mixed meals', 'Daily nutrition summaries'],
    accent: 'lc',
    demo: 'food',
    image: '',
    story: [
      {
        label: 'Capture',
        title: 'Start with the meal in front of you',
        desc: 'Logging begins with one photo, not a long search flow.',
      },
      {
        label: 'Interpret',
        title: 'Translate the plate into usable numbers',
        desc: 'Calories and macros appear in a cleaner, calmer format you can act on quickly.',
      },
      {
        label: 'Respond',
        title: 'Keep the coaching tone aligned to the moment',
        desc: 'The capability stays the same while LC and ZJ shape the guidance differently.',
      },
    ],
    outcome: 'A fast nutrition checkpoint that feels visual first and data second.',
  },
  {
    tag: 'Training',
    title: 'Workout Tracking',
    desc: 'Log workouts conversationally, track sets and reps, and keep your day moving with clear progress history and calorie burn estimates.',
    features: ['Conversational logging', 'Calorie burn estimation', 'Volume tracking', 'Progress over time'],
    accent: 'zj',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=1200&fit=crop',
    story: [
      {
        label: 'Log',
        title: 'Capture the session without slowing down',
        desc: 'Sets, reps, and effort stay lightweight enough to record mid-workout.',
      },
      {
        label: 'Measure',
        title: 'See load, burn, and momentum together',
        desc: 'The page turns daily training into a readable progression instead of isolated entries.',
      },
      {
        label: 'Progress',
        title: 'Keep the plan moving forward',
        desc: 'The system shows whether today is building on yesterday or drifting from the target.',
      },
    ],
    outcome: 'A training flow that feels active, current, and easy to revisit.',
  },
  {
    tag: 'Intelligence',
    title: 'Memory-Based Coaching',
    desc: 'ZYM remembers your height, weight, goals, and preferences so every check-in feels connected instead of starting over.',
    features: ['Profile memory', 'Goal tracking', 'TDEE calculation', 'Personalized plans'],
    accent: 'zj',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1200&h=1200&fit=crop',
    story: [
      {
        label: 'Remember',
        title: 'Hold onto the context that matters',
        desc: 'Goals, body metrics, and preferences stay available across the whole product.',
      },
      {
        label: 'Connect',
        title: 'Link today’s actions to the bigger picture',
        desc: 'Check-ins stop feeling reset-based and start feeling cumulative.',
      },
      {
        label: 'Guide',
        title: 'Make plans feel personal instead of generic',
        desc: 'Recommendations reflect your profile and direction, not a one-size-fits-all template.',
      },
    ],
    outcome: 'A more continuous coaching relationship, with less repetition and more relevance.',
  },
  {
    tag: 'Community',
    title: 'Social Accountability',
    desc: 'Add friends, share milestones, and stay consistent together. The product stays supportive, but your progress becomes more visible.',
    features: ['Friend connections', 'Activity sharing', 'Group motivation', 'Community support'],
    accent: 'lc',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=1200&fit=crop',
    story: [
      {
        label: 'Connect',
        title: 'Bring other people into the routine',
        desc: 'Friends and shared milestones turn private effort into something more visible.',
      },
      {
        label: 'Share',
        title: 'Let progress create momentum',
        desc: 'Activities, wins, and consistency become lighter signals that keep everyone engaged.',
      },
      {
        label: 'Support',
        title: 'Build accountability without heaviness',
        desc: 'The community layer adds encouragement and pressure in a more human way.',
      },
    ],
    outcome: 'A social layer that reinforces discipline while still feeling supportive.',
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
      <span
        className={`h-2.5 w-2.5 rounded-full ${accent === 'lc' ? 'bg-[#f28a3a]' : 'bg-[#6c7cf6]'}`}
      />
      {label}
    </div>
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
      className={`features-reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#1f1f1f]">
      <Navbar />

      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,138,58,0.10),_transparent_22%),radial-gradient(circle_at_88%_16%,_rgba(108,124,246,0.11),_transparent_22%),linear-gradient(180deg,_#f7f5f0_0%,_#f4f1ea_100%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <AccentPill label="Product capabilities" accent="zj" />
            <h1 className="mt-6 font-body text-4xl font-extrabold leading-[0.98] tracking-[-0.035em] text-[#1f1f1f] sm:text-5xl md:text-[4.1rem]">
              Everything you need for smarter health
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#62606a] md:text-xl">
              Four clear capability areas. One bright, cohesive product system for nutrition, training, memory, and accountability.
            </p>
          </div>
        </div>
      </section>

      <div className="features-sections pb-24 md:pb-32">
        {features.map((feature, i) => {
          const isReversed = i % 2 === 1
          const accentClasses =
            feature.accent === 'lc'
              ? {
                  section: 'bg-[#fffaf4]',
                  frame: 'border-[#f28a3a]/12',
                  panel: 'border-[#f28a3a]/12 bg-[#fff6ec]',
                  icon: 'bg-[#f28a3a]/12 text-[#b16322]',
                  line: 'bg-[#f28a3a]',
                }
              : {
                  section: 'bg-[#f8f9ff]',
                  frame: 'border-[#6c7cf6]/12',
                  panel: 'border-[#6c7cf6]/12 bg-[#f3f5ff]',
                  icon: 'bg-[#6c7cf6]/12 text-[#4251cb]',
                  line: 'bg-[#6c7cf6]',
                }

          return (
            <section
              key={feature.title}
              className={`features-major-section ${accentClasses.section} ${i === 0 ? 'mt-0' : ''}`}
            >
              <div className="mx-auto max-w-6xl px-6">
                <div
                  className={`features-section-frame rounded-[2.6rem] border bg-white/82 px-6 py-8 shadow-[0_28px_70px_rgba(102,88,69,0.08)] backdrop-blur md:px-8 md:py-10 ${accentClasses.frame}`}
                >
                  <div className={`features-layer-shell ${isReversed ? 'features-layer-shell-reversed' : ''}`}>
                    <div className="features-sticky-stage">
                      <RevealBlock className="features-stage-card">
                        {'demo' in feature && feature.demo === 'food' ? (
                          <div className="rounded-[2.25rem] border border-black/6 bg-white/80 p-4 shadow-[0_26px_60px_rgba(102,88,69,0.10)] backdrop-blur sm:p-5">
                            <AIFoodAnalyzerDemo immersive />
                          </div>
                        ) : (
                          <div className="rounded-[2.25rem] border border-black/6 bg-white/80 p-4 shadow-[0_26px_60px_rgba(102,88,69,0.10)] backdrop-blur sm:p-5">
                            <div className="relative aspect-[0.95] overflow-hidden rounded-[1.8rem] border border-black/6 bg-[#f4f0ea]">
                              <img src={feature.image} alt={feature.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
                              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,18,0.03)_0%,rgba(18,18,18,0.14)_48%,rgba(18,18,18,0.38)_100%)]" />
                              <div className="absolute left-5 top-5">
                                <div className={`rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white ${feature.accent === 'lc' ? 'bg-[#f28a3a]' : 'bg-[#6c7cf6]'}`}>
                                  {feature.tag}
                                </div>
                              </div>
                              <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/30 bg-white/88 p-4 backdrop-blur">
                                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a867e]">Inside ZYM</p>
                                <p className="mt-2 text-base font-bold text-[#1f1f1f]">A dedicated section for {feature.tag.toLowerCase()} with one clear story and one clear role.</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </RevealBlock>
                    </div>

                    <div className="features-layer-rail">
                      <RevealBlock className="rounded-[2rem] border border-black/6 bg-white/92 p-7 shadow-[0_20px_40px_rgba(102,88,69,0.06)] md:p-9">
                        <div className="flex flex-wrap items-center gap-3">
                          <AccentPill label={feature.tag} accent={feature.accent} />
                          <div className="rounded-full border border-black/6 bg-[#f7f5f0] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#7f7a72]">
                            Capability area {i + 1}
                          </div>
                        </div>

                        <h2 className="mt-6 max-w-xl font-body text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#1f1f1f] md:text-[2.8rem]">
                          {feature.title}
                        </h2>
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#64616c]">
                          {feature.desc}
                        </p>
                      </RevealBlock>

                      {feature.story.map((moment, storyIndex) => (
                        <RevealBlock
                          key={moment.title}
                          delay={storyIndex * 80}
                          className="features-story-layer rounded-[1.8rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(250,248,243,0.92)_100%)] p-6 shadow-[0_18px_36px_rgba(102,88,69,0.06)] md:p-7"
                        >
                          <div className="flex items-start gap-4">
                            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] text-sm font-bold ${accentClasses.icon}`}>
                              {storyIndex + 1}
                            </div>
                            <div>
                              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a847b]">{moment.label}</p>
                              <h3 className="mt-2 text-[1.45rem] font-bold tracking-[-0.025em] text-[#1f1f1f]">{moment.title}</h3>
                              <p className="mt-3 text-base leading-7 text-[#64616c]">{moment.desc}</p>
                            </div>
                          </div>
                        </RevealBlock>
                      ))}

                      <RevealBlock className="rounded-[1.9rem] border border-black/6 bg-white/92 p-6 shadow-[0_18px_36px_rgba(102,88,69,0.06)] md:p-7">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a847b]">Core capabilities</p>
                        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                          {feature.features.map((item) => (
                            <li
                              key={item}
                              className={`flex items-center gap-3 rounded-[1.3rem] border px-4 py-3 text-sm font-medium text-[#45424c] ${accentClasses.panel}`}
                            >
                              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${accentClasses.icon}`}>
                                <span className={`h-2.5 w-2.5 rounded-full ${accentClasses.line}`} />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </RevealBlock>

                      <RevealBlock className="rounded-[1.9rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(245,241,234,0.92)_100%)] p-6 shadow-[0_18px_36px_rgba(102,88,69,0.06)] md:p-7">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a847b]">Section outcome</p>
                        <p className="mt-3 text-lg leading-8 text-[#4f4c56]">{feature.outcome}</p>
                      </RevealBlock>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <Footer />
    </main>
  )
}
