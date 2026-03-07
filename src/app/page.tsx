'use client'

import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="gradient-bg min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sage-700/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-900/30 border border-sage-700/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-sage-500 rounded-full animate-pulse" />
              <span className="text-sage-400 text-sm font-medium tracking-wide">AI-Native Lifestyle Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tight" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
              <span className="text-warm block">Your lifestyle,</span>
              <span className="text-warm/90 block">guided by intelligence</span>
              <span className="text-sage-400 block">and community</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Health works better with memory, conversation, and community. ZYM combines AI coaching with social accountability—starting with fitness, expanding into lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://github.com/Juggernaut0825/skill_zym" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-sage-600 hover:bg-sage-500 text-white font-semibold rounded-full transition-all hover:scale-105 flex items-center gap-2">
                Request Access
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link href="/features" className="px-8 py-4 bg-transparent border border-zinc-700 hover:border-sage-600 text-warm font-semibold rounded-full transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
              One conversation. One coach. One community.
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-4">
              ZYM is a conversational AI coach that remembers you, tracks your nutrition and training, and connects you with friends—all in one place.
            </p>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
              No more juggling separate apps or manual logging. Everything works together seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'AI Nutrition Coach', desc: 'Snap food photos. Get instant calorie and macro estimates. Track your daily balance effortlessly.' },
              { title: 'AI Training Coach', desc: 'Log workouts conversationally. Get calorie burn estimates. Future: video form analysis.' },
              { title: 'Memory-Based Coaching', desc: 'ZYM remembers your goals, preferences, and history. Every conversation builds on the last.' },
              { title: 'Social Community', desc: 'Add friends. Share activities. Stay accountable together. Health is better with others.' }
            ].map((item, i) => (
              <div key={i} className="group bg-gradient-to-br from-charcoal-800/60 to-charcoal-900/40 border border-charcoal-700 hover:border-sage-600 rounded-2xl p-8 transition-all">
                <h3 className="text-xl font-bold text-warm mb-3" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section with Images */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
              Built for real people
            </h2>
            <p className="text-xl text-zinc-400">Students, young adults, and anyone wanting healthier routines.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop" alt="Community workout" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="font-semibold">Train together</div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop" alt="Using fitness app" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="font-semibold">Track progress</div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=600&h=600&fit=crop" alt="Healthy lifestyle" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="font-semibold">Live better</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Capabilities */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
              Current capabilities
            </h2>
            <p className="text-xl text-zinc-400">Built on Discord. Powered by AI vision and memory.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Food Photo Analysis', desc: 'AI estimates calories and macros from meal photos' },
              { title: 'Workout Logging', desc: 'Track sets, reps, and estimate calorie burn' },
              { title: 'TDEE Tracking', desc: 'Calculate daily energy needs and calorie balance' },
              { title: 'Profile Memory', desc: 'Remembers your height, weight, goals, preferences' },
              { title: 'Progress Summaries', desc: 'Daily and weekly nutrition and training reports' },
              { title: 'Personalized Plans', desc: 'Custom workout and meal suggestions based on goals' }
            ].map((item, i) => (
              <div key={i} className="bg-charcoal-800/40 border border-charcoal-700 rounded-xl p-6 hover:border-sage-600 transition-all">
                <h3 className="text-lg font-semibold text-warm mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Vision */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sage-950/20 to-transparent" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
              Not just a coach. A community.
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Add friends. Share daily activities. Stay accountable. Build healthier lifestyles together. Health is better when you're not alone.
            </p>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
              ZYM starts with fitness and nutrition, then expands into a broader lifestyle platform. Intelligent agents that remember you, support your routines, and help you live better—every day.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-warm leading-tight" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
            Join the journey
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            We're building the future of lifestyle support. Request early access.
          </p>
          <a href="https://github.com/Juggernaut0825/skill_zym" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-sage-600 hover:bg-sage-500 text-white font-semibold text-lg rounded-full transition-all hover:scale-105">
            Request Access
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
