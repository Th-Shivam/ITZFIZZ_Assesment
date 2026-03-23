import carImage from './assets/McLaren 720S 2022 top view.png'

const welcomeLetters = Array.from('WELCOME ITZFIZZ')

function App() {
  return (
    <main className="bg-neutral-950">
      <section className="h-[200vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="relative h-[360px] w-screen overflow-hidden">
            <div
              id="box1"
              className="absolute right-[8%] top-0 z-40 flex w-44 flex-col gap-2 rounded-3xl bg-cyan-300/90 px-5 py-4 text-left opacity-0 shadow-[0_24px_80px_rgba(34,211,238,0.24)] backdrop-blur"
            >
              <span className="text-3xl font-semibold leading-none text-slate-950">
                99%
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-slate-800">
                Performance Score
              </span>
            </div>

            <div
              id="box2"
              className="absolute bottom-2 right-[14%] z-40 flex w-48 flex-col gap-2 rounded-3xl bg-violet-300/85 px-5 py-4 text-left opacity-0 shadow-[0_24px_80px_rgba(167,139,250,0.22)] backdrop-blur"
            >
              <span className="text-3xl font-semibold leading-none text-slate-950">
                240+
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-slate-800">
                Frames Tuned
              </span>
            </div>

            <div
              id="box3"
              className="absolute left-[8%] top-3 z-40 flex w-44 flex-col gap-2 rounded-3xl bg-emerald-300/90 px-5 py-4 text-left opacity-0 shadow-[0_24px_80px_rgba(74,222,128,0.22)] backdrop-blur"
            >
              <span className="text-3xl font-semibold leading-none text-slate-950">
                12ms
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-slate-800">
                Smooth Response
              </span>
            </div>

            <div
              id="box4"
              className="absolute bottom-0 left-[16%] z-40 flex w-48 flex-col gap-2 rounded-3xl bg-amber-200/90 px-5 py-4 text-left opacity-0 shadow-[0_24px_80px_rgba(251,191,36,0.18)] backdrop-blur"
            >
              <span className="text-3xl font-semibold leading-none text-slate-950">
                4.9/5
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-slate-800">
                User Delight
              </span>
            </div>

            <div className="absolute inset-x-0 top-1/2 h-[200px] -translate-y-1/2 overflow-hidden bg-neutral-800">
            <div className="absolute inset-0 z-10 flex items-center justify-center gap-3 px-10 sm:gap-4 md:gap-5">
              {welcomeLetters.map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className="value-letter opacity-0 text-xl font-semibold uppercase tracking-[0.45em] text-white sm:text-3xl lg:text-5xl"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>

            <div className="absolute left-12 top-1/2 z-20 h-16 w-44 -translate-y-1/2 rounded-full bg-emerald-400/45 blur-2xl sm:h-20 sm:w-56" />

            <img
              src={carImage}
              alt="McLaren 720S top view"
              className="absolute left-0 top-1/2 z-30 w-48 -translate-y-1/2 object-contain sm:w-64 lg:w-72"
            />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
