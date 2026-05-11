'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const perks = [
  { title: 'Remote First', description: 'Work from anywhere in the world.', accent: 'lc' },
  { title: 'Competitive Pay', description: 'Top-tier compensation packages.', accent: 'zj' },
  { title: 'Equity', description: 'Own a piece of what you build.', accent: 'lc' },
  { title: 'Fitness Perks', description: 'Gym memberships and wellness benefits.', accent: 'zj' },
] as const

const jobs = [
  {
    title: 'Frontend Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build beautiful, performant web interfaces that help users achieve their fitness goals.',
    requirements: [
      'Strong React/Next.js experience',
      'Eye for design and UX',
      'TypeScript proficiency',
      'Passion for fitness (bonus)',
    ],
    accent: 'lc',
  },
  {
    title: 'AI/ML Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Improve our AI models for food recognition, form analysis, and personalized recommendations.',
    requirements: [
      'Experience with computer vision',
      'LLM integration experience',
      'Python proficiency',
      'Knowledge of fitness/nutrition',
    ],
    accent: 'zj',
  },
  {
    title: 'Mobile Developer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build the ZYM mobile app that will bring AI fitness coaching to millions of users.',
    requirements: [
      'React Native or Flutter experience',
      'iOS/Android native development',
      'Camera/video integration',
      'Performance optimization',
    ],
    accent: 'lc',
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

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#1f1f1f]">
      <Navbar />

      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,138,58,0.10),_transparent_22%),radial-gradient(circle_at_86%_15%,_rgba(108,124,246,0.10),_transparent_24%),linear-gradient(180deg,_#f7f5f0_0%,_#f4f1ea_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <AccentPill label="We are hiring" accent="lc" />
            <h1 className="mt-6 font-body text-4xl font-extrabold leading-[0.98] tracking-[-0.035em] text-[#1f1f1f] sm:text-5xl md:text-[4rem]">
              Join our team
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#62606a] md:text-xl">
              We are building the future of lifestyle support. Come shape a product that feels more human, capable, and useful every day.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="px-2 py-4 text-center md:px-3 md:py-5"
              >
                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${perk.accent === 'lc' ? 'bg-[#fff7f0]' : 'bg-[#f7f8ff]'}`}>
                  <span className={`h-3 w-3 rounded-full ${perk.accent === 'lc' ? 'bg-[#f28a3a]' : 'bg-[#6c7cf6]'}`} />
                </div>
                <h2 className="mt-5 font-body text-[1.35rem] font-extrabold tracking-[-0.03em] text-[#1f1f1f]">
                  {perk.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#66646e]">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <AccentPill label="Open positions" accent="zj" />
            <h2 className="mt-6 font-body text-3xl font-extrabold tracking-[-0.03em] text-[#1f1f1f] md:text-[3rem]">
              Open positions
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-6">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="group border-t border-black/8 py-8 transition-transform duration-200 hover:-translate-y-1 md:py-10"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-body text-[1.7rem] font-extrabold tracking-[-0.03em] text-[#1f1f1f]">
                        {job.title}
                      </h3>
                      <div className={`rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${job.accent === 'lc' ? 'border border-[#f28a3a]/16 bg-[#fff7f0] text-[#a06b46]' : 'border border-[#6c7cf6]/16 bg-[#f7f8ff] text-[#6670b8]'}`}>
                        Team role
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[#7a7780]">
                      <span className="inline-flex items-center gap-2 rounded-full border border-black/6 bg-[#f7f5f0] px-3 py-1.5">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-black/6 bg-[#f7f5f0] px-3 py-1.5">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${job.accent === 'lc' ? 'border-[#f28a3a]/18 bg-[#fff7f0] text-[#a06b46]' : 'border-[#6c7cf6]/18 bg-[#f7f8ff] text-[#6670b8]'}`}>
                    <span>View details</span>
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <p className="mt-5 text-base leading-7 text-[#66646e]">
                  {job.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {job.requirements.map((req, index) => (
                    <span
                      key={req}
                      className={`rounded-full border px-3.5 py-2 text-sm font-medium ${index % 2 === 0 ? 'border-[#f28a3a]/12 bg-[#fffaf5] text-[#6b533f]' : 'border-[#6c7cf6]/12 bg-[#f8f9ff] text-[#4d558f]'}`}
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="px-2 py-12 text-center md:px-6 md:py-16">
            <div className="mx-auto max-w-2xl">
              <AccentPill label="Reach out" accent="zj" />
              <h2 className="mt-6 font-body text-3xl font-extrabold tracking-[-0.03em] text-[#1f1f1f] md:text-[3rem]">
                Do not see a fit?
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#66646e]">
                We are always looking for thoughtful builders. Reach out and start the conversation.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="mailto:careers@zym.fit"
                className="inline-flex items-center justify-center gap-3 rounded-[1.45rem] border border-[#f28a3a]/30 bg-[linear-gradient(180deg,rgba(242,138,58,0.18),rgba(242,138,58,0.10))] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#7b4517] shadow-[0_14px_30px_rgba(94,71,46,0.12)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#f28a3a]/45"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                careers@zym.fit
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
