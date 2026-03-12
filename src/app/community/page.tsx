'use client'

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

function AccentPill({ label, accent }: { label: string; accent: 'lc' | 'zj' }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] shadow-[0_10px_24px_rgba(102,88,69,0.06)] ${
        accent === 'lc'
          ? 'border-[#f28a3a]/18 bg-white text-[#9b6436]'
          : 'border-[#6c7cf6]/18 bg-white text-[#6069ad]'
      }`}
    >
      <span className={`h-2.5 w-2.5 rounded-full ${accent === 'lc' ? 'bg-[#f28a3a]' : 'bg-[#6c7cf6]'}`} />
      {label}
    </div>
  )
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#1f1f1f]">
      <Navbar />

      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,138,58,0.10),_transparent_22%),radial-gradient(circle_at_85%_15%,_rgba(108,124,246,0.10),_transparent_24%),linear-gradient(180deg,_#f7f5f0_0%,_#f4f1ea_100%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <AccentPill label="Coming soon" accent="lc" />
            <h1 className="mt-6 font-body text-4xl font-extrabold leading-[0.98] tracking-[-0.035em] text-[#1f1f1f] sm:text-5xl md:text-[4rem]">
              Health is better together
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#62606a] md:text-xl">
              Connect with friends, share progress, and stay accountable in a community layer that feels supportive, believable, and calm.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {communityCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-black/6 bg-white/88 p-7 shadow-[0_24px_50px_rgba(102,88,69,0.08)] md:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div
                    className={`rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${
                      item.accent === 'lc'
                        ? 'border border-[#f28a3a]/16 bg-[#fff7f0] text-[#a06b46]'
                        : 'border border-[#6c7cf6]/16 bg-[#f7f8ff] text-[#6670b8]'
                    }`}
                  >
                    {item.badge}
                  </div>
                  <div className="rounded-full border border-black/6 bg-[#f7f5f0] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#7f7a72]">
                    Shared system
                  </div>
                </div>

                <h2 className="mt-6 font-body text-[1.8rem] font-extrabold tracking-[-0.03em] text-[#1f1f1f]">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[#66646e]">
                  {item.desc}
                </p>

                <div className="mt-6 rounded-[1.6rem] border border-black/6 bg-[#fbfaf7] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#87827b]">Community preview</p>
                    <div className="flex -space-x-2">
                      {item.people.map((person, index) => (
                        <div
                          key={person}
                          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white ${
                            index % 2 === 0 ? 'bg-[#f28a3a]' : 'bg-[#6c7cf6]'
                          }`}
                        >
                          {person.slice(0, 1)}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-[1.2rem] border border-black/6 bg-white px-4 py-3">
                      <p className="text-sm font-semibold text-[#1f1f1f]">Logged today&apos;s workout</p>
                      <p className="mt-1 text-sm leading-6 text-[#66646e]">A small update that keeps friends in the loop without turning the page into a noisy feed.</p>
                    </div>
                    <div className="rounded-[1.2rem] border border-black/6 bg-white px-4 py-3">
                      <p className="text-sm font-semibold text-[#1f1f1f]">Check-in streak is active</p>
                      <p className="mt-1 text-sm leading-6 text-[#66646e]">Simple rhythm and accountability cues that support consistency rather than overwhelm it.</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2.4rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,244,236,0.96)_100%)] p-8 text-center shadow-[0_26px_55px_rgba(102,88,69,0.08)] md:p-12">
            <div className="mx-auto max-w-2xl">
              <AccentPill label="Early access" accent="zj" />
              <h2 className="mt-6 font-body text-3xl font-extrabold tracking-[-0.03em] text-[#1f1f1f] md:text-[3rem]">
                Join the journey
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#66646e]">
                Request early access to be among the first people to try the community layer when it launches.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com/Juggernaut0825/skill_zym"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[1.45rem] border border-[#f28a3a]/30 bg-[linear-gradient(180deg,rgba(242,138,58,0.18),rgba(242,138,58,0.10))] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#7b4517] shadow-[0_14px_30px_rgba(94,71,46,0.12)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#f28a3a]/45"
              >
                Request Access
              </a>
              <div className="rounded-full border border-[#6c7cf6]/18 bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#6069ad] shadow-[0_10px_24px_rgba(102,88,69,0.05)]">
                Supportive social layer
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
