'use client'

import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const coreFeatures = [
  {
    title: 'LC - Tough accountability',
    desc: 'Stricter, sharper, and more demanding. LC pushes you harder when you need structure, discipline, and direct feedback.',
    accent: 'lc',
  },
  {
    title: 'ZJ - Gentle encouragement',
    desc: 'Warm, supportive, and reassuring. ZJ helps you stay on track with a softer, more encouraging tone.',
    accent: 'zj',
  },
] as const

const proofCards = [
  {
    title: 'Train together',
    desc: 'Share consistent routines and keep momentum visible with friends.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop',
    accent: 'lc',
  },
  {
    title: 'Track progress',
    desc: 'See meals, workouts, and recovery in one calmer product view.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop',
    accent: 'zj',
  },
  {
    title: 'Live better',
    desc: 'Build healthier habits with a coach that remembers how you work.',
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
  { label: 'LC discipline', tone: 'lc' },
  { label: 'ZJ encouragement', tone: 'zj' },
  { label: 'Shared intelligence', tone: 'neutral' },
] as const

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#1f1f1f]">
      <Navbar />

      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,138,58,0.12),_transparent_22%),radial-gradient(circle_at_82%_18%,_rgba(108,124,246,0.12),_transparent_22%),linear-gradient(145deg,_#f7f5f0_0%,_#f3efe7_45%,_#f8f6f2_100%)]" />
        <div className="absolute left-[10%] top-[18%] h-24 w-24 rounded-full bg-[#f28a3a]/10 blur-3xl" />
        <div className="absolute right-[12%] top-[20%] h-28 w-28 rounded-full bg-[#6c7cf6]/10 blur-3xl" />
        <div className="absolute right-[14%] bottom-[24%] h-10 w-10 rotate-[18deg] rounded-[1.1rem] border border-[#f28a3a]/18 bg-[#f28a3a]/8" />

        <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] lg:gap-24 xl:gap-28">
          <div className="max-w-[40rem] lg:max-w-[42rem] lg:pr-8 xl:max-w-[44rem]">
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
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-[1.45rem] border border-[#f28a3a]/30 bg-[linear-gradient(180deg,rgba(242,138,58,0.18),rgba(242,138,58,0.10))] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#7b4517] shadow-[0_14px_30px_rgba(94,71,46,0.12)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#f28a3a]/45"
              >
                Get Started
              </Link>
              {/* <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-[1.45rem] border border-[#6c7cf6]/28 bg-[linear-gradient(180deg,rgba(108,124,246,0.14),rgba(108,124,246,0.07))] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#3642a8] shadow-[0_14px_30px_rgba(67,81,176,0.10)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#6c7cf6]/42"
              >
                See Demo
              </Link> */}
            </div>
          </div>

          <div className="relative mx-auto flex w-full justify-end lg:justify-end">
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
                      <p className="mt-2 text-sm font-semibold text-[#4f3927]">Breakfast is logged. Workout plan is ready. Stay on schedule.</p>
                    </div>
                    <div className="rounded-[1.55rem] border border-[#6c7cf6]/12 bg-[#6c7cf6]/6 px-4 py-3">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#5d68be]">ZJ coaching style</p>
                      <p className="mt-2 text-sm font-semibold text-[#303a86]">Protein pacing is on track. Keep going, you are building something steady.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f28a3a]/16 bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7a6a59] shadow-[0_10px_24px_rgba(102,88,69,0.06)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f28a3a]" />
              Two coaching personalities
            </div>
            <h2 className="mt-6 font-body text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#1f1f1f] md:text-[3.1rem]">
              Same intelligence. Different coaching styles.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#62606a] md:text-xl">
              LC and ZJ are built on the same AI coaching system. They help with the same goals - eating better, training smarter, and staying consistent - but they guide you differently.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {coreFeatures.map((item) => (
              <div
                key={item.title}
                className={`rounded-[2rem] border bg-white/88 p-7 shadow-[0_20px_45px_rgba(102,88,69,0.08)] transition-transform duration-200 hover:-translate-y-1 ${
                  item.accent === 'lc' ? 'border-[#f28a3a]/14' : 'border-[#6c7cf6]/14'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-[1.1rem] text-sm font-bold ${
                      item.accent === 'lc'
                        ? 'bg-[#f28a3a]/12 text-[#b16322]'
                        : 'bg-[#6c7cf6]/12 text-[#4251cb]'
                    }`}
                  >
                    {item.accent === 'lc' ? 'LC' : 'ZJ'}
                  </div>
                  <div>
                    <h3 className="text-[1.35rem] font-bold tracking-[-0.02em] text-[#1f1f1f]">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[#66646e]">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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
            <p className="max-w-md text-base leading-7 text-[#84818d]">
              These previews stay lighter and cleaner than the hero while showing the same product through two coaching personalities: LC more disciplined and ZJ warmer.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {proofCards.map((card) => (
              <div
                key={card.title}
                className="group overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_24px_50px_rgba(102,88,69,0.08)]"
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
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#6c7cf6]/16 bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#6d73a9] shadow-[0_10px_24px_rgba(102,88,69,0.05)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#6c7cf6]" />
              Product capabilities
            </div>
            <h2 className="mt-6 font-body text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#1f1f1f] md:text-[3.1rem]">
              Current capabilities.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#62606a] md:text-xl">
              Built on Discord and shaped around AI vision, memory, and lightweight daily support.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className={`rounded-[2rem] border bg-white/92 p-6 shadow-[0_20px_45px_rgba(102,88,69,0.07)] ${
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
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-[2.2rem] border border-black/6 bg-[linear-gradient(145deg,rgba(255,255,255,0.9)_0%,rgba(244,238,228,0.94)_100%)] px-8 py-14 text-center shadow-[0_24px_50px_rgba(102,88,69,0.07)] md:px-14">
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
              <p className="mt-4 text-base leading-7 text-[#86838d] md:text-lg">
                ZYM starts with fitness and nutrition, then expands into a broader lifestyle platform with intelligent agents that remember you and help you live better every day.
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
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-[2.2rem] border border-black/6 bg-white/92 px-8 py-14 shadow-[0_24px_50px_rgba(102,88,69,0.07)] md:px-14">
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
                className="inline-flex items-center gap-3 rounded-[1.5rem] border border-[#f28a3a]/28 bg-[linear-gradient(180deg,rgba(242,138,58,0.18),rgba(242,138,58,0.10))] px-9 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#7b4517] shadow-[0_14px_30px_rgba(94,71,46,0.10)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#f28a3a]/45"
              >
                Request Access
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
