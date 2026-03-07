'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function CommunityPage() {
  return (
    <main className="gradient-bg min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-900/30 border border-sage-700/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-sage-400 text-sm font-medium">Coming Soon</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
              Health is better together
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Connect with friends. Share activities. Stay accountable. Build healthier lifestyles as a community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { title: 'Add Friends', desc: 'Build your fitness squad. See their progress and stay motivated together.' },
              { title: 'Share Activities', desc: 'Post workouts, meals, and achievements. Celebrate wins with your community.' },
              { title: 'Stay Accountable', desc: 'Weekly challenges and streaks keep you consistent and engaged.' }
            ].map((item, i) => (
              <div key={i} className="bg-charcoal-800/40 border border-charcoal-700 rounded-2xl p-8 hover:border-sage-600 transition-all">
                <h3 className="text-xl font-bold text-warm mb-3" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-sage-950/20 to-charcoal-900/40 rounded-3xl p-12 text-center border border-sage-800/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
              Join the journey
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
              Request early access to be among the first when community features launch.
            </p>
            <a href="https://github.com/Juggernaut0825/skill_zym" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-sage-600 hover:bg-sage-500 text-white font-semibold rounded-full transition-all hover:scale-105">
              Request Access
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
