import carImage from './assets/McLaren 720S 2022 top view.png'

const welcomeLetters = Array.from('WELCOME ITZFIZZ')

function App() {
  return (
    <main className="bg-neutral-950">
      <section className="h-[200vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="relative h-[200px] w-screen overflow-hidden bg-neutral-800">
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
      </section>
    </main>
  )
}

export default App
