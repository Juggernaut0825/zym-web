import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ZYM - Your AI Fitness Companion',
  description: 'Transform your fitness journey with AI-powered coaching. Track nutrition, analyze workouts, and achieve your goals with personalized guidance.',
  keywords: 'fitness, AI coach, nutrition tracking, workout analysis, health, wellness',
  openGraph: {
    title: 'ZYM - Your AI Fitness Companion',
    description: 'Transform your fitness journey with AI-powered coaching.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
