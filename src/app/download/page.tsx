import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#1f1f1f]">
      <Navbar />

      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,138,58,0.10),_transparent_22%),radial-gradient(circle_at_85%_20%,_rgba(108,124,246,0.10),_transparent_24%),linear-gradient(145deg,_#f7f5f0_0%,_#f3efe7_45%,_#f8f6f2_100%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-24">
          <div className="rounded-[2rem] border border-black/6 bg-white/86 p-10 text-center shadow-[0_24px_50px_rgba(102,88,69,0.10)] backdrop-blur">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f28a3a]/20 bg-[#f28a3a]/8 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#9a5a22]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f28a3a]" />
              Web app
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              Open ZYM in the app.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#66646e]">
              Sign in on the live web app to access coaching, tracking, group chat, and community features right now.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://app.zym8.com/login"
                className="inline-flex items-center justify-center rounded-[1.35rem] border border-[#6c7cf6]/20 bg-[#6c7cf6]/8 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#4f5abc] transition-colors hover:bg-[#6c7cf6]/12"
              >
                Continue to Login
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-[1.35rem] border border-black/10 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#4f4a42] transition-colors hover:bg-[#f8f4ec]"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
