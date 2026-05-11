'use client'

import Image from 'next/image'
import { useState } from 'react'

const meal = {
  name: 'Chicken rice bowl',
  calories: 540,
  protein: 42,
  carbs: 58,
  fat: 16,
  items: ['Chicken', 'Rice', 'Greens', 'Sauce'],
}

const coaches = {
  zj: {
    name: 'ZJ',
    role: 'Gentler · steady · encouraging',
    image: '/images/homepage/coach-zj.jpg',
    response:
      "This is a workable meal. Adding a bit more protein next time will steady your energy and support recovery — you're close, just keep leaning into the structure that's already working.",
  },
  lc: {
    name: 'LC',
    role: 'Direct · structured · accountable',
    image: '/images/homepage/coach-lc.jpg',
    response:
      "The protein on this plate is too light to repeat. Lock in 35g+ at lunch tomorrow — that's the move that protects recovery this week.",
  },
} as const

const pages = [
  { label: '01 Capture', title: 'Capture the meal' },
  { label: '02 Analyze', title: 'Read the nutrition picture' },
  { label: '03 Coach', title: 'Choose the coaching tone' },
] as const

const macroSummary: ReadonlyArray<readonly [string, string, string]> = [
  ['Calories', meal.calories.toString(), ''],
  ['Protein', meal.protein.toString(), 'g'],
  ['Carbs', meal.carbs.toString(), 'g'],
  ['Fat', meal.fat.toString(), 'g'],
]

type CoachId = keyof typeof coaches

export function AIFoodAnalyzerDemo({ immersive: _ = false }: { immersive?: boolean }) {
  const [activePage, setActivePage] = useState(0)
  const [activeCoach, setActiveCoach] = useState<CoachId>('zj')
  const coach = coaches[activeCoach]
  const previousPage = () => setActivePage((current) => Math.max(current - 1, 0))
  const nextPage = () => setActivePage((current) => Math.min(current + 1, pages.length - 1))

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="absolute -left-4 top-12 h-20 w-20 rounded-full bg-[#f28a3a]/10 blur-3xl" />
      <div className="absolute -right-4 bottom-8 h-24 w-24 rounded-full bg-[#6c7cf6]/10 blur-3xl" />

      <div className="relative rounded-[2rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,245,239,0.94)_100%)] p-4 shadow-[0_24px_60px_rgba(102,88,69,0.10)] sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.3rem] border border-black/6 bg-white p-1.5">
          <div className="flex flex-1 flex-wrap gap-1.5">
            {pages.map((page, index) => (
              <button
                key={page.label}
                type="button"
                onClick={() => setActivePage(index)}
                className={`rounded-full px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] transition-colors ${
                  activePage === index
                    ? 'bg-[#1f1f1f] text-white'
                    : 'text-[#746f68] hover:bg-[#f7f5f0]'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previousPage}
              disabled={activePage === 0}
              className="rounded-full border border-black/6 bg-[#f7f5f0] px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#625d55] transition-colors hover:bg-white disabled:opacity-40 disabled:hover:bg-[#f7f5f0]"
            >
              Prev
            </button>
            <span className="min-w-12 text-center text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#8b857c]">
              {activePage + 1}/3
            </span>
            <button
              type="button"
              onClick={nextPage}
              disabled={activePage === pages.length - 1}
              className="rounded-full border border-black/6 bg-[#f7f5f0] px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#625d55] transition-colors hover:bg-white disabled:opacity-40 disabled:hover:bg-[#f7f5f0]"
            >
              Next
            </button>
          </div>
        </div>

        <div className="mt-4 min-h-[24rem] rounded-[1.55rem] border border-black/6 bg-white p-4 shadow-[0_16px_34px_rgba(102,88,69,0.06)] sm:p-5">
          <div key={activePage} className="animate-fadeIn">
          {activePage === 0 && (
            <div className="grid h-full gap-5 md:grid-cols-[1.05fr_0.95fr] md:items-center">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#8b857c]">Capture the meal</p>
                <h4 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-[#1f1f1f]">Start with what&apos;s in front of you.</h4>
                <p className="mt-3 text-sm leading-6 text-[#625d55]">
                  Upload a meal photo or add a quick note. ZYM reads the plate before turning it into a usable nutrition snapshot.
                </p>

                <div className="mt-5">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#b16322]">Photo uploaded</p>
                  <p className="mt-1 text-lg font-extrabold tracking-[-0.01em] text-[#1f1f1f]">{meal.name}</p>
                  <p className="mt-3 text-sm leading-6 text-[#625d55]">Lunch after training, sauce on the side.</p>
                </div>

                <button
                  type="button"
                  onClick={() => setActivePage(1)}
                  className="mt-4 inline-flex rounded-[1rem] border border-[#f28a3a]/26 bg-[linear-gradient(180deg,rgba(242,138,58,0.18),rgba(242,138,58,0.10))] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#7b4517] shadow-[0_10px_22px_rgba(102,88,69,0.09)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Analyze meal
                </button>
              </div>

              <div className="relative min-h-[16rem] overflow-hidden rounded-[1.35rem] border border-black/6">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop&q=80"
                  alt="Captured meal photo"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          )}

          {activePage === 1 && (
            <div className="h-full">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#8b857c]">Read the nutrition picture</p>
              <h4 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-[#1f1f1f]">{meal.name}</h4>
              <div className="mt-5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ['Calories', meal.calories, '', 'bg-[#fff7ef] text-[#b16322] border-[#f28a3a]/14'],
                    ['Protein', meal.protein, 'g', 'bg-[#f5f6ff] text-[#4251cb] border-[#6c7cf6]/14'],
                    ['Carbs', meal.carbs, 'g', 'bg-[#fbfaf7] text-[#817b72] border-black/6'],
                    ['Fat', meal.fat, 'g', 'bg-[#fbfaf7] text-[#817b72] border-black/6'],
                  ].map(([label, value, unit, classes]) => (
                    <div key={label as string} className={`rounded-[1.2rem] border p-4 ${classes as string}`}>
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em]">{label as string}</p>
                      <p className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-[#1f1f1f]">
                        {value as number}
                        {unit as string}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-[1.2rem] border border-black/6 bg-[#fbfaf7] p-4">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#8b857c]">Quick interpretation</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-[#3a3833]">A solid start with room to improve protein quality.</p>
                </div>
              </div>
            </div>
          )}

          {activePage === 2 && (
            <div className="grid h-full gap-4 sm:gap-5">
              {/* Recap strip — proves the analysis carries over */}
              <div className="rounded-[1.2rem] border border-black/6 bg-[#fbfaf7] px-3 py-3 sm:px-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <p className="shrink-0 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#8b857c]">
                    Same analysis
                  </p>
                  <span className="hidden h-3.5 w-px bg-black/10 sm:block" />
                  <div className="flex flex-wrap gap-1.5">
                    {macroSummary.map(([label, value, unit]) => (
                      <div
                        key={label}
                        className="inline-flex items-baseline gap-1 rounded-full border border-black/6 bg-white px-2.5 py-1 text-xs"
                      >
                        <span className="font-extrabold tracking-[-0.01em] text-[#1f1f1f]">
                          {value}
                          {unit}
                        </span>
                        <span className="text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#8b857c]">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prominent LC/ZJ toggle */}
              <div>
                <p className="text-center text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#8b857c]">
                  Choose your coaching tone
                </p>
                <div role="tablist" aria-label="Coach tone" className="mx-auto mt-3 grid max-w-xl grid-cols-2 gap-3">
                  {(['zj', 'lc'] as const).map((id) => {
                    const c = coaches[id]
                    const isActive = activeCoach === id
                    return (
                      <button
                        key={id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveCoach(id)}
                        className={`flex items-center gap-3 rounded-[1.3rem] border-2 px-3 py-2.5 text-left transition-all sm:px-4 sm:py-3 ${
                          isActive
                            ? id === 'lc'
                              ? 'border-[#f28a3a] bg-[#fff8f1] shadow-[0_12px_28px_rgba(242,138,58,0.20)]'
                              : 'border-[#6c7cf6] bg-[#f6f7ff] shadow-[0_12px_28px_rgba(108,124,246,0.20)]'
                            : 'border-black/8 bg-white hover:border-black/16'
                        }`}
                      >
                        <div
                          className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 ${
                            isActive
                              ? id === 'lc'
                                ? 'border-[#f28a3a]/40'
                                : 'border-[#6c7cf6]/40'
                              : 'border-white shadow-[0_2px_6px_rgba(102,88,69,0.10)]'
                          }`}
                        >
                          <Image
                            src={c.image}
                            alt={`${c.name} portrait`}
                            fill
                            sizes="3rem"
                            className="object-cover object-[50%_15%]"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <p
                              className={`text-base font-extrabold tracking-[-0.02em] ${
                                isActive
                                  ? id === 'lc'
                                    ? 'text-[#b16322]'
                                    : 'text-[#4251cb]'
                                  : 'text-[#1f1f1f]'
                              }`}
                            >
                              {c.name}
                            </p>
                            {isActive && (
                              <span
                                className={`rounded-full px-1.5 py-0.5 text-[0.5rem] font-bold uppercase tracking-[0.18em] ${
                                  id === 'lc'
                                    ? 'bg-[#f28a3a]/14 text-[#b16322]'
                                    : 'bg-[#6c7cf6]/14 text-[#4251cb]'
                                }`}
                              >
                                Active
                              </span>
                            )}
                          </div>
                          <p className="mt-0.5 truncate text-[0.7rem] font-medium text-[#65616a]">
                            {c.role}
                          </p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Coach response */}
              <div
                className={`rounded-[1.4rem] border p-4 transition-colors sm:p-5 ${
                  activeCoach === 'lc'
                    ? 'border-[#f28a3a]/22 bg-[#fff8f1]'
                    : 'border-[#6c7cf6]/22 bg-[#f6f7ff]'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 sm:h-12 sm:w-12 ${
                      activeCoach === 'lc' ? 'border-[#f28a3a]/30' : 'border-[#6c7cf6]/30'
                    }`}
                  >
                    <Image
                      src={coach.image}
                      alt={`${coach.name} portrait`}
                      fill
                      sizes="3rem"
                      className="object-cover object-[50%_15%]"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <p className="text-base font-extrabold tracking-[-0.02em] text-[#1f1f1f]">
                        {coach.name}
                      </p>
                      <p
                        className={`text-[0.62rem] font-bold uppercase tracking-[0.14em] ${
                          activeCoach === 'lc' ? 'text-[#b16322]' : 'text-[#4251cb]'
                        }`}
                      >
                        {coach.role}
                      </p>
                    </div>
                    <p className="mt-2.5 text-base font-medium leading-7 text-[#3f3b36] sm:text-[1.02rem] sm:leading-8">
                      &ldquo;{coach.response}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}
