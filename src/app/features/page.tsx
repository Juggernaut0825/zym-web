'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function FeaturesPage() {
  return (
    <main className="gradient-bg min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-900/30 border border-sage-700/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-sage-400 text-sm font-medium">Product Capabilities</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
              Everything you need for smarter health
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              AI-powered nutrition, training, and memory—all in one conversational experience.
            </p>
          </div>

          <div className="space-y-32">
            {[
              {
                tag: 'Nutrition',
                title: 'AI Food Analysis',
                desc: 'Snap a photo of any meal. AI identifies foods and estimates calories, protein, carbs, and fat instantly. No manual logging required.',
                features: ['Instant food recognition', 'Automatic macro calculation', 'Support for complex meals', 'Daily nutrition summaries'],
                image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop'
              },
              {
                tag: 'Training',
                title: 'Workout Tracking',
                desc: 'Log workouts conversationally. Track sets, reps, and get calorie burn estimates. Future: video form analysis for technique feedback.',
                features: ['Conversational logging', 'Calorie burn estimation', 'Volume tracking', 'Progress over time'],
                image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=800&fit=crop'
              },
              {
                tag: 'Intelligence',
                title: 'Memory-Based Coaching',
                desc: 'ZYM remembers your height, weight, goals, and preferences. Every conversation builds on the last for truly personalized support.',
                features: ['Profile memory', 'Goal tracking', 'TDEE calculation', 'Personalized plans'],
                image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=800&fit=crop'
              },
              {
                tag: 'Community',
                title: 'Social Accountability',
                desc: 'Add friends. Share activities. Stay motivated together. Health is better when you&apos;re not alone.',
                features: ['Friend connections', 'Activity sharing', 'Group motivation', 'Community support'],
                image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop'
              }
            ].map((feature, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-sage-900/30 rounded-full mb-4">
                    <span className="text-sage-400 text-sm font-medium">{feature.tag}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-warm" style={{ fontFamily: 'Syne, system-ui, sans-serif' }}>
                    {feature.title}
                  </h2>
                  <p className="text-zinc-400 text-lg mb-6 leading-relaxed">{feature.desc}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-zinc-300">
                        <svg className="w-5 h-5 text-sage-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
