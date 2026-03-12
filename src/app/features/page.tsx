'use client'

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
  },
  {
    tag: 'Training',
    title: 'Workout Tracking',
    desc: 'Log workouts conversationally, track sets and reps, and keep your day moving with clear progress history and calorie burn estimates.',
    features: ['Conversational logging', 'Calorie burn estimation', 'Volume tracking', 'Progress over time'],
    accent: 'zj',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=1200&fit=crop',
  },
  {
    tag: 'Intelligence',
    title: 'Memory-Based Coaching',
    desc: 'ZYM remembers your height, weight, goals, and preferences so every check-in feels connected instead of starting over.',
    features: ['Profile memory', 'Goal tracking', 'TDEE calculation', 'Personalized plans'],
    accent: 'zj',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1200&h=1200&fit=crop',
  },
  {
    tag: 'Community',
    title: 'Social Accountability',
    desc: 'Add friends, share milestones, and stay consistent together. The product stays supportive, but your progress becomes more visible.',
    features: ['Friend connections', 'Activity sharing', 'Group motivation', 'Community support'],
    accent: 'lc',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=1200&fit=crop',
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
              Nutrition, training, memory, and accountability in one shared coaching system with a lighter, calmer product feel.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-20 md:space-y-24">
            {features.map((feature, i) => {
              const isReversed = i % 2 === 1
              const accentClasses =
                feature.accent === 'lc'
                  ? {
                      panel: 'border-[#f28a3a]/12 bg-[#fffaf5]',
                      chip: 'border-[#f28a3a]/18 bg-white text-[#9b6436]',
                      icon: 'bg-[#f28a3a]/12 text-[#b16322]',
                      line: 'bg-[#f28a3a]',
                    }
                  : {
                      panel: 'border-[#6c7cf6]/12 bg-[#f8f9ff]',
                      chip: 'border-[#6c7cf6]/18 bg-white text-[#6069ad]',
                      icon: 'bg-[#6c7cf6]/12 text-[#4251cb]',
                      line: 'bg-[#6c7cf6]',
                    }

              return (
                <div key={feature.title} className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.54fr)_minmax(0,0.46fr)] lg:gap-16">
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="rounded-[2rem] border border-black/6 bg-white/88 p-7 shadow-[0_24px_50px_rgba(102,88,69,0.08)] md:p-9">
                      <div className="flex flex-wrap items-center gap-3">
                        <AccentPill label={feature.tag} accent={feature.accent} />
                        <div className="rounded-full border border-black/6 bg-[#f7f5f0] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#7f7a72]">
                          Shared capability
                        </div>
                      </div>

                      <h2 className="mt-6 max-w-xl font-body text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#1f1f1f] md:text-[2.8rem]">
                        {feature.title}
                      </h2>
                      <p className="mt-5 max-w-2xl text-lg leading-8 text-[#64616c]">
                        {feature.desc}
                      </p>

                      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
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
                    </div>
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    {'demo' in feature && feature.demo === 'food' ? (
                      <div className="rounded-[2.25rem] border border-black/6 bg-white/72 p-4 shadow-[0_26px_60px_rgba(102,88,69,0.10)] backdrop-blur sm:p-5">
                        <AIFoodAnalyzerDemo />
                      </div>
                    ) : (
                      <div className="rounded-[2.25rem] border border-black/6 bg-white/72 p-4 shadow-[0_26px_60px_rgba(102,88,69,0.10)] backdrop-blur sm:p-5">
                        <div className="relative overflow-hidden rounded-[1.8rem] border border-black/6 aspect-[0.95] bg-[#f4f0ea]">
                          <img src={feature.image} alt={feature.title} className="h-full w-full object-cover" />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,18,0.04)_0%,rgba(18,18,18,0.18)_48%,rgba(18,18,18,0.48)_100%)]" />
                          <div className="absolute left-5 top-5">
                            <div className={`rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white ${feature.accent === 'lc' ? 'bg-[#f28a3a]' : 'bg-[#6c7cf6]'}`}>
                              {feature.tag}
                            </div>
                          </div>
                          <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/30 bg-white/86 p-4 backdrop-blur">
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a867e]">Inside ZYM</p>
                            <p className="mt-2 text-base font-bold text-[#1f1f1f]">Clearer feedback, calmer tracking, and one product language across the day.</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
