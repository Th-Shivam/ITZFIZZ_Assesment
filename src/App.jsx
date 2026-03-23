function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-neutral-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_36%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.18),_transparent_30%)]" />
      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-24 sm:px-10">
        <span className="mb-6 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-neutral-300">
          Vite + React + Tailwind + GSAP
        </span>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Scroll-driven storytelling starts with a clean canvas.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
          This starter is ready for a cinematic hero section with Tailwind for
          layout and GSAP for motion.
        </p>
      </section>
    </main>
  )
}

export default App
