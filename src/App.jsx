import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import carImage from './assets/McLaren 720S 2022 top view.png'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const welcomeLetters = Array.from('WELCOME ITZFIZZ')

function App() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const roadRef = useRef(null)
  const carRef = useRef(null)
  const trailRef = useRef(null)
  const letterRefs = useRef([])

  useGSAP(
    () => {
      const updateRevealState = () => {
        const road = roadRef.current
        const car = carRef.current
        const trail = trailRef.current

        if (!road || !car || !trail) {
          return
        }

        const carX = gsap.getProperty(car, 'x')
        const carCenter = Number(carX) + car.offsetLeft + car.offsetWidth / 2

        gsap.set(trail, {
          width: carCenter,
        })

        letterRefs.current.forEach((letter) => {
          if (!letter) {
            return
          }

          const letterOffset = letter.offsetLeft + letter.offsetWidth / 2
          letter.style.opacity = carCenter >= letterOffset ? '1' : '0'
        })
      }

      const road = roadRef.current
      const car = carRef.current

      if (!road || !car) {
        return
      }

      gsap.set(car, { x: 0 })
      gsap.set(trailRef.current, { width: car.offsetWidth / 2 })
      updateRevealState()

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: trackRef.current,
        pinSpacing: false,
      })

      gsap.to(car, {
        x: () => road.offsetWidth - car.offsetWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: updateRevealState,
        },
      })

      ;[
        { selector: '#box1', start: 'top+=400 top', y: -24 },
        { selector: '#box2', start: 'top+=650 top', y: 24 },
        { selector: '#box3', start: 'top+=900 top', y: -24 },
        { selector: '#box4', start: 'top+=1150 top', y: 24 },
      ].forEach(({ selector, start, y }) => {
        gsap.fromTo(
          selector,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start,
              end: start,
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    },
    { scope: sectionRef },
  )

  return (
    <main className="bg-neutral-950">
      <section ref={sectionRef} className="h-[200vh]">
        <div ref={trackRef} className="flex h-screen items-center overflow-hidden">
          <div className="relative h-[360px] w-screen overflow-hidden">
            <div
              id="box1"
              className="absolute right-4 top-0 z-40 flex w-36 flex-col gap-2 rounded-3xl bg-cyan-300/90 px-4 py-4 text-left opacity-0 shadow-[0_24px_80px_rgba(34,211,238,0.24)] backdrop-blur sm:right-[6%] sm:w-40 sm:px-5 md:right-[8%] md:w-44"
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
              className="absolute bottom-3 right-6 z-40 flex w-40 flex-col gap-2 rounded-3xl bg-violet-300/85 px-4 py-4 text-left opacity-0 shadow-[0_24px_80px_rgba(167,139,250,0.22)] backdrop-blur sm:right-[10%] sm:w-44 sm:px-5 md:right-[14%] md:w-48"
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
              className="absolute left-4 top-3 z-40 flex w-36 flex-col gap-2 rounded-3xl bg-emerald-300/90 px-4 py-4 text-left opacity-0 shadow-[0_24px_80px_rgba(74,222,128,0.22)] backdrop-blur sm:left-[6%] sm:w-40 sm:px-5 md:left-[8%] md:w-44"
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
              className="absolute bottom-0 left-8 z-40 flex w-40 flex-col gap-2 rounded-3xl bg-amber-200/90 px-4 py-4 text-left opacity-0 shadow-[0_24px_80px_rgba(251,191,36,0.18)] backdrop-blur sm:left-[12%] sm:w-44 sm:px-5 md:left-[16%] md:w-48"
            >
              <span className="text-3xl font-semibold leading-none text-slate-950">
                4.9/5
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-slate-800">
                User Delight
              </span>
            </div>

            <div
              ref={roadRef}
              className="absolute inset-x-0 top-1/2 h-[200px] -translate-y-1/2 overflow-hidden bg-neutral-800"
            >
              <div className="absolute inset-0 z-10 flex items-center justify-center gap-3 px-10 sm:gap-4 md:gap-5">
                {welcomeLetters.map((letter, index) => (
                  <span
                    key={`${letter}-${index}`}
                    ref={(element) => {
                      letterRefs.current[index] = element
                    }}
                    className="value-letter opacity-0 text-xl font-semibold uppercase tracking-[0.45em] text-white sm:text-3xl lg:text-5xl"
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </div>

              <div
                ref={trailRef}
                className="absolute left-0 top-1/2 z-20 h-16 -translate-y-1/2 rounded-full bg-emerald-400/45 blur-2xl sm:h-20"
              />

              <img
                ref={carRef}
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
