'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

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
      'Passion for fitness (bonus)'
    ]
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
      'Knowledge of fitness/nutrition'
    ]
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
      'Performance optimization'
    ]
  }
]

export default function CareersPage() {
  return (
    <main className="gradient-bg min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-900/30 border border-sage-700/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-sage-500 rounded-full animate-pulse" />
              <span className="text-sage-400 text-sm font-medium">We&apos;re Hiring!</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
              Join our team
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              We&apos;re building the future of lifestyle support. Come shape it with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { title: 'Remote First', description: 'Work from anywhere in the world' },
              { title: 'Competitive Pay', description: 'Top-tier compensation packages' },
              { title: 'Equity', description: 'Own a piece of what you build' },
              { title: 'Fitness Perks', description: 'Gym memberships & wellness benefits' },
            ].map((perk, i) => (
              <div key={i} className="bg-charcoal-800/40 rounded-2xl p-6 border border-charcoal-700 text-center">
                <h3 className="text-lg font-bold text-warm mb-2" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
                  {perk.title}
                </h3>
                <p className="text-zinc-400 text-sm">{perk.description}</p>
              </div>
            ))}
          </div>

          {/* Open Positions */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
              Open positions
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              {jobs.map((job, i) => (
                <div key={i} className="group bg-charcoal-800/40 rounded-2xl p-8 border border-charcoal-700 hover:border-sage-600 transition-all cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-warm mb-2" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-zinc-400">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <span className="text-sage-400 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>

                  <p className="text-zinc-400 mb-4">{job.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, j) => (
                      <span key={j} className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-950/20 to-charcoal-900/40 rounded-3xl p-12 text-center border border-sage-800/30">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
              Don&apos;t see a fit?
            </h2>
            <p className="text-zinc-400 text-lg mb-6 max-w-xl mx-auto">
              We&apos;re always looking for talented individuals. Reach out and let&apos;s chat!
            </p>
            <a href="mailto:careers@zym.fit" className="inline-flex items-center gap-2 px-8 py-4 bg-sage-600 hover:bg-sage-500 text-white font-semibold rounded-full transition-all hover:scale-105">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              careers@zym.fit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
