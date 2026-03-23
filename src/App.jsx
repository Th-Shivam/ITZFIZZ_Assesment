import carImage from './assets/McLaren 720S 2022 top view.png'

const welcomeLetters = Array.from('WELCOME ITZFIZZ')

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060709] text-white">
      <section className="relative flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(41,225,168,0.08),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(87,163,255,0.08),_transparent_28%)]" />

        <div className="relative flex h-[360px] w-full max-w-[1440px] items-center justify-center sm:h-[420px] lg:h-[460px]">
          <div
            id="box1"
            className="absolute left-3 top-[52px] z-30 w-[132px] rounded-[24px] bg-[#95f5cf] px-4 py-3 text-left opacity-0 shadow-[0_24px_80px_rgba(149,245,207,0.18)] sm:left-[4.5%] sm:top-[38px] sm:w-[156px] sm:px-5 sm:py-4 lg:left-[7%] lg:top-[30px]"
          >
            <div className="text-[1.7rem] font-semibold leading-none tracking-[-0.05em] text-[#07110d] sm:text-[2.1rem]">
              12ms
            </div>
            <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#163328] sm:text-[11px]">
              Smooth Response
            </div>
          </div>

          <div
            id="box2"
            className="absolute right-3 top-[44px] z-30 w-[140px] rounded-[24px] bg-[#c8e8ff] px-4 py-3 text-left opacity-0 shadow-[0_24px_80px_rgba(132,195,255,0.18)] sm:right-[4.5%] sm:top-[28px] sm:w-[164px] sm:px-5 sm:py-4 lg:right-[7%] lg:top-[22px]"
          >
            <div className="text-[1.7rem] font-semibold leading-none tracking-[-0.05em] text-[#06111d] sm:text-[2.1rem]">
              99%
            </div>
            <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#18344e] sm:text-[11px]">
              Performance Score
            </div>
          </div>

          <div
            id="box3"
            className="absolute bottom-[44px] right-6 z-30 w-[146px] rounded-[24px] bg-[#cbbdff] px-4 py-3 text-left opacity-0 shadow-[0_24px_80px_rgba(163,137,255,0.18)] sm:bottom-[34px] sm:right-[9.5%] sm:w-[170px] sm:px-5 sm:py-4 lg:bottom-[28px] lg:right-[13%]"
          >
            <div className="text-[1.7rem] font-semibold leading-none tracking-[-0.05em] text-[#130c28] sm:text-[2.1rem]">
              240+
            </div>
            <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#3b2f64] sm:text-[11px]">
              Frames Tuned
            </div>
          </div>

          <div className="absolute inset-x-0 top-1/2 h-[168px] -translate-y-1/2 overflow-hidden border-y border-white/6 bg-[#16181d] sm:h-[186px] lg:h-[198px]">
            <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-black/35" />

            <div className="absolute inset-0 z-10 flex items-center justify-center gap-[0.28rem] px-8 sm:gap-[0.52rem] sm:px-16 lg:gap-[0.68rem]">
              {welcomeLetters.map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className="text-[0.92rem] font-semibold uppercase tracking-[0.34em] text-white opacity-0 sm:text-[1.5rem] sm:tracking-[0.42em] lg:text-[2.15rem] lg:tracking-[0.5em]"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>

            <div className="absolute left-[68px] top-1/2 z-20 h-[92px] w-0 -translate-y-1/2 rounded-r-[8px] border border-[#87ffb7]/60 bg-[#5dff94]/90 shadow-[0_0_18px_rgba(93,255,148,0.85)]" />

            <img
              src={carImage}
              alt="McLaren 720S top view"
              className="absolute left-[-14px] top-1/2 z-30 w-[188px] -translate-y-1/2 object-contain sm:left-[-18px] sm:w-[238px] lg:left-[-22px] lg:w-[284px]"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
