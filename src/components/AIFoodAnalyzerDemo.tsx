'use client'

import { useState, useEffect } from 'react'

export function AIFoodAnalyzerDemo() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [currentFood, setCurrentFood] = useState(0)

  const foods = [
    { name: 'Grilled Chicken Salad', calories: 450, protein: 42, carbs: 18, fat: 22, emoji: '🥗' },
    { name: 'Protein Smoothie', calories: 320, protein: 35, carbs: 28, fat: 8, emoji: '🥤' },
    { name: 'Salmon with Rice', calories: 580, protein: 38, carbs: 45, fat: 24, emoji: '🍣' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFood((prev) => (prev + 1) % foods.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [foods.length])

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setShowResult(false)
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResult(true)
    }, 2000)
  }

  const food = foods[currentFood]

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main demo container */}
      <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-6 border border-zinc-800 shadow-2xl overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-zym-500/30 rounded-full blur-3xl" />

        {/* Header */}
        <div className="relative flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-zym-500/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-zym-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-semibold">AI Food Analyzer</h3>
            <p className="text-zinc-500 text-sm">Powered by vision AI</p>
          </div>
        </div>

        {/* Food display area */}
        <div className="relative bg-zinc-800/50 rounded-2xl p-6 mb-4 min-h-[140px] flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-3 transition-all duration-500" key={currentFood}>
              {food.emoji}
            </div>
            <p className="text-white font-medium">{food.name}</p>
            <p className="text-zinc-500 text-sm mt-1">Tap to analyze</p>
          </div>

          {/* Scanning animation overlay */}
          {isAnalyzing && (
            <div className="absolute inset-0 bg-zym-500/10 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zym-400/30 to-transparent animate-scan" />
            </div>
          )}
        </div>

        {/* Analyze button */}
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="w-full py-3 bg-zym-500 hover:bg-zym-400 disabled:bg-zym-600 text-black font-semibold rounded-xl transition-all active:scale-95 disabled:cursor-not-allowed"
        >
          {isAnalyzing ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Analyzing...
            </span>
          ) : (
            'Analyze Food'
          )}
        </button>

        {/* Results panel */}
        {showResult && (
          <div className="mt-4 p-4 bg-zinc-800/30 rounded-xl border border-zinc-700/50 animate-fadeIn">
            <div className="flex items-center justify-between mb-3">
              <span className="text-zym-400 text-sm font-medium">Nutrition Facts</span>
              <span className="text-zinc-500 text-xs">per serving</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-white">{food.calories}</p>
                <p className="text-zinc-500 text-xs">Calories</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-accent-warm">{food.protein}g</p>
                <p className="text-zinc-500 text-xs">Protein</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-accent-gold">{food.carbs}g</p>
                <p className="text-zinc-500 text-xs">Carbs</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-accent-coral">{food.fat}g</p>
                <p className="text-zinc-500 text-xs">Fat</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating elements */}
      <div className="absolute -top-6 -right-6 w-16 h-16 bg-zym-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-warm/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Feature badges */}
      <div className="absolute -left-12 top-1/4 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 shadow-xl animate-float hidden lg:block">
        <div className="flex items-center gap-2">
          <span className="text-lg">📸</span>
          <span className="text-white text-sm font-medium">Snap & Track</span>
        </div>
      </div>

      <div className="absolute -right-12 bottom-1/4 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 shadow-xl animate-float hidden lg:block" style={{ animationDelay: '1.5s' }}>
        <div className="flex items-center gap-2">
          <span className="text-lg">⚡</span>
          <span className="text-white text-sm font-medium">Instant Results</span>
        </div>
      </div>
    </div>
  )
}
