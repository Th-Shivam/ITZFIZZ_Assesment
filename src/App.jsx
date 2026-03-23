function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_34%),radial-gradient(circle_at_bottom,_rgba(249,115,22,0.12),_transparent_28%)]" />
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 px-6 py-16 text-center sm:px-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.6em] text-neutral-500">
              Scroll-Driven Hero Concept
            </p>
            <h1 className="text-3xl font-semibold uppercase tracking-[0.55em] text-white sm:text-5xl lg:text-7xl">
              W E L C O M E I T Z F I Z Z
            </h1>
          </div>

          <div className="flex w-full max-w-4xl flex-wrap items-center justify-center gap-4 text-sm uppercase tracking-[0.28em] text-neutral-300 sm:text-base">
            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur">
              99% Performance
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur">
              Smooth UI
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur">
              Pixel Precision
            </div>
          </div>

          <div className="flex w-full justify-center pt-4">
            <div className="flex h-64 w-full max-w-4xl items-center justify-center rounded-[2rem] border border-dashed border-white/15 bg-white/[0.04] text-sm uppercase tracking-[0.4em] text-neutral-500 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:h-80 lg:h-96">
              Main Visual Placeholder
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
