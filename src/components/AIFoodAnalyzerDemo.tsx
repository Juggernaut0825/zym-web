'use client'

import { useEffect, useState } from 'react'

const foods = [
  { name: 'Grilled Chicken Salad', calories: 450, protein: 42, carbs: 18, fat: 22, accent: 'lc' },
  { name: 'Protein Smoothie', calories: 320, protein: 35, carbs: 28, fat: 8, accent: 'zj' },
  { name: 'Salmon with Rice', calories: 580, protein: 38, carbs: 45, fat: 24, accent: 'lc' },
] as const

export function AIFoodAnalyzerDemo() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [currentFood, setCurrentFood] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFood((prev) => (prev + 1) % foods.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setShowResult(false)

    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResult(true)
    }, 1600)
  }

  const food = foods[currentFood]
  const accent = food.accent === 'lc'
    ? {
        tint: 'bg-[#f28a3a]/10',
        border: 'border-[#f28a3a]/18',
        text: 'text-[#b16322]',
        button: 'border-[#f28a3a]/28 bg-[linear-gradient(180deg,rgba(242,138,58,0.18),rgba(242,138,58,0.10))] text-[#7b4517]',
        highlight: 'bg-[#f28a3a]',
      }
    : {
        tint: 'bg-[#6c7cf6]/10',
        border: 'border-[#6c7cf6]/18',
        text: 'text-[#4251cb]',
        button: 'border-[#6c7cf6]/28 bg-[linear-gradient(180deg,rgba(108,124,246,0.16),rgba(108,124,246,0.08))] text-[#3642a8]',
        highlight: 'bg-[#6c7cf6]',
      }

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -left-4 top-10 h-14 w-14 rounded-full bg-[#f28a3a]/8 blur-2xl" />
      <div className="absolute -right-3 bottom-14 h-16 w-16 rounded-full bg-[#6c7cf6]/8 blur-2xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(247,244,237,0.96)_100%)] p-5 shadow-[0_24px_50px_rgba(102,88,69,0.10)] sm:p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,138,58,0.08),_transparent_24%),radial-gradient(circle_at_82%_18%,_rgba(108,124,246,0.08),_transparent_24%)]" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/6 bg-white/84 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#7a756d]">
              <span className="h-2 w-2 rounded-full bg-[#6c7cf6]" />
              Live demo
            </div>
            <h3 className="mt-4 font-body text-[1.55rem] font-extrabold tracking-[-0.03em] text-[#1f1f1f]">
              AI Food Analyzer
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#66646e]">One shared system, fast nutrition feedback, and coaching tone that adapts without changing the capability.</p>
          </div>
          <div className={`rounded-full border px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${accent.border} ${accent.tint} ${accent.text}`}>
            {food.accent === 'lc' ? 'LC tone' : 'ZJ tone'}
          </div>
        </div>

        <div className="relative mt-6 overflow-hidden rounded-[1.6rem] border border-black/6 bg-white/84 p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#87827b]">Selected meal</p>
              <p className="mt-1 text-lg font-bold text-[#1f1f1f]">{food.name}</p>
            </div>
            <div className="rounded-full border border-black/6 bg-[#f7f5f0] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#7e796f]">
              Camera ready
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-[1.35rem] border border-[#f28a3a]/12 bg-[#fff7f0] p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#a06b46]">Calories</p>
              <p className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-[#1f1f1f]">{food.calories}</p>
            </div>
            <div className="rounded-[1.35rem] border border-[#6c7cf6]/12 bg-[#f7f8ff] p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#6670b8]">Protein</p>
              <p className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-[#1f1f1f]">{food.protein}g</p>
            </div>
            <div className="rounded-[1.35rem] border border-black/6 bg-[#faf8f3] p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8b857a]">Carbs</p>
              <p className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-[#1f1f1f]">{food.carbs}g</p>
            </div>
            <div className="rounded-[1.35rem] border border-black/6 bg-[#faf8f3] p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8b857a]">Fat</p>
              <p className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-[#1f1f1f]">{food.fat}g</p>
            </div>
          </div>

          {isAnalyzing && (
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.6rem] bg-white/56">
              <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(108,124,246,0.18)_45%,rgba(242,138,58,0.16)_100%)] animate-scan" />
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className={`mt-5 inline-flex w-full items-center justify-center rounded-[1.35rem] border px-5 py-3.5 text-sm font-bold uppercase tracking-[0.14em] shadow-[0_12px_28px_rgba(102,88,69,0.10)] transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 ${accent.button}`}
        >
          {isAnalyzing ? 'Analyzing meal' : 'Analyze food'}
        </button>

        {showResult && (
          <div className="mt-5 rounded-[1.5rem] border border-black/6 bg-white/90 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#88837b]">Coaching feedback</p>
                <p className="mt-1 text-sm leading-6 text-[#57545d]">
                  {food.accent === 'lc'
                    ? 'Strong protein base and balanced calories. Keep building a steady routine meal by meal.'
                    : 'Protein is covered. Keep the rest of the day consistent and do not let the plan drift.'}
                </p>
              </div>
              <div className="rounded-full border border-black/6 bg-[#f7f5f0] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#7e796f]">
                Shared capability
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
