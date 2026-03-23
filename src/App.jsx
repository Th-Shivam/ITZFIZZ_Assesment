import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import carImage from './assets/McLaren 720S 2022 top view.png'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const welcomeLetters = Array.from('WELCOME ITZFIZZ')

const statCards = [
  {
    id: 'box1',
    value: '3.2x ROI',
    label: 'Average Campaign Return',
    className: 'w-[170px] sm:w-[198px]',
    shell:
      'bg-[linear-gradient(135deg,rgba(151,242,207,0.94),rgba(124,230,196,0.72))] text-[#0a1913]',
    labelClass: 'text-[#19352b]',
  },
  {
    id: 'box2',
    value: '68% ↑',
    label: 'Lead Conversion Growth',
    className: 'w-[180px] sm:w-[208px]',
    shell:
      'bg-[linear-gradient(135deg,rgba(204,232,255,0.94),rgba(154,208,255,0.72))] text-[#091521]',
    labelClass: 'text-[#213f5a]',
  },
  {
    id: 'box3',
    value: '45% ↓',
    label: 'Customer Acquisition Cost',
    className: 'w-[188px] sm:w-[216px]',
    shell:
      'bg-[linear-gradient(135deg,rgba(205,191,255,0.94),rgba(177,154,255,0.72))] text-[#150f29]',
    labelClass: 'text-[#463a70]',
  },
  {
    id: 'box4',
    value: '120K+',
    label: 'Leads Generated Monthly',
    className: 'w-[240px] sm:w-[275px] lg:w-[310px]',
    shell:
      'bg-[linear-gradient(135deg,rgba(255,199,155,0.96),rgba(255,171,114,0.74))] text-[#231209]',
    labelClass: 'text-[#68422b]',
  },
]

function StatCard({ id, value, label, className, shell, labelClass, innerRef }) {
  return (
    <div
      id={id}
      ref={innerRef}
      className={`stat-card absolute z-40 rounded-[24px] border border-white/18 px-5 py-4 opacity-100 shadow-[0_28px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl will-change-transform sm:px-6 sm:py-5 ${className} ${shell}`}
    >
      <div className="stat-float">
        <div className="text-[2.15rem] font-semibold leading-none tracking-[-0.05em] sm:text-[2.55rem]">
          {value}
        </div>
        <div
          className={`mt-2 text-[11px] font-medium uppercase tracking-[0.22em] sm:text-xs ${labelClass}`}
        >
          {label}
        </div>
      </div>
    </div>
  )
}

function App() {
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const carRef = useRef(null)
  const carGlowRef = useRef(null)
  const trailRef = useRef(null)
  const letterRefs = useRef([])
  const cardRefs = useRef([])

  useGSAP(
    () => {
      const stage = stageRef.current
      const car = carRef.current
      const carGlow = carGlowRef.current
      const trail = trailRef.current

      if (!stage || !car || !carGlow || !trail) {
        return
      }

      let letterCenters = []
      const trailOrigin = parseFloat(trail.dataset.start || '0')
      const setTrailWidth = gsap.quickSetter(trail, 'width', 'px')
      const travelFractions = [0.25, 0.5, 0.75, 1]

      const measureLetters = () => {
        letterCenters = letterRefs.current.map((letter) =>
          letter ? letter.offsetLeft + letter.offsetWidth / 2 : 0,
        )
      }

      const positionCards = () => {
        const stageWidth = stage.offsetWidth
        const stageHeight = stage.offsetHeight
        const roadHeight = Math.max(stageHeight * 0.22, 160)
        const roadTop = (stageHeight - roadHeight) / 2
        const topY = roadTop - 40
        const bottomY = roadTop + roadHeight + 40
        const travel = stageWidth - car.offsetWidth + 36
        const startCenter = car.offsetLeft + car.offsetWidth / 2

        cardRefs.current.forEach((cardElement, index) => {
          if (!cardElement) {
            return
          }

          const milestone = startCenter + travel * travelFractions[index]
          const cardLeft = gsap.utils.clamp(
            24,
            stageWidth - cardElement.offsetWidth - 24,
            milestone - cardElement.offsetWidth / 2,
          )
          const cardTop = index % 2 === 0 ? topY - cardElement.offsetHeight : bottomY

          gsap.set(cardElement, {
            left: cardLeft,
            top: cardTop,
          })
        })
      }

      const updateReveal = () => {
        const carX = Number(gsap.getProperty(car, 'x') || 0)
        const carCenter = car.offsetLeft + carX + car.offsetWidth / 2

        setTrailWidth(Math.max(carCenter - trailOrigin, 12))

        letterRefs.current.forEach((letter, index) => {
          if (!letter) {
            return
          }

          const progress = gsap.utils.clamp(
            0.08,
            1,
            (carCenter - letterCenters[index] + 48) / 120,
          )

          letter.style.opacity = String(progress)
        })
      }

      measureLetters()
      positionCards()

      gsap.set([car, carGlow], {
        x: 0,
        yPercent: -50,
        rotate: 0,
      })
      gsap.set('.stat-card', { autoAlpha: 1, scale: 1, y: 0 })
      gsap.set('.hero-letter', {
        opacity: 0.08,
        y: 10,
        willChange: 'transform, opacity',
      })
      updateReveal()

      gsap
        .timeline({
          defaults: { ease: 'power3.out' },
        })
        .fromTo(
          '.hero-letter',
          { y: 12, opacity: 0.05, letterSpacing: '0.72em' },
          {
            y: 0,
            opacity: 0.08,
            letterSpacing: '0.56em',
            duration: 0.8,
            stagger: 0.02,
          },
        )

      gsap.to('.trail-pulse', {
        opacity: 0.82,
        scaleY: 1.16,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.bg-slow', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.4,
        },
      })

      gsap.to('.bg-fast', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.4,
        },
      })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: stage,
        pinSpacing: false,
        invalidateOnRefresh: true,
        onRefresh: () => {
          measureLetters()
          positionCards()
          updateReveal()
        },
      })

      gsap.to(car, {
        x: () => window.innerWidth - car.offsetWidth + 36,
        y: -8,
        rotate: 1.6,
        scale: 1.015,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.48,
          invalidateOnRefresh: true,
          onRefresh: () => {
            measureLetters()
            positionCards()
            updateReveal()
          },
          onUpdate: updateReveal,
        },
      })

      gsap.to(carGlow, {
        x: () => window.innerWidth - car.offsetWidth + 12,
        scaleX: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.48,
        },
      })

      statCards.forEach((card, index) => {
        gsap.fromTo(
          `#${card.id}`,
          {
            autoAlpha: 0,
            scale: 0.92,
            y: index < 2 ? -24 : 24,
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top+=${220 + index * 220} top`,
              end: `top+=${220 + index * 220} top`,
              toggleActions: 'play none none reverse',
            },
          },
        )

        gsap.to(`#${card.id} .stat-float`, {
          y: index % 2 === 0 ? -8 : 8,
          duration: 2.8 + index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })
    },
    { scope: sectionRef },
  )

  return (
    <main className="min-h-screen overflow-hidden bg-[#040507] text-white">
      <section ref={sectionRef} className="relative h-[220vh]">
        <div
          ref={stageRef}
          className="relative h-screen w-screen overflow-hidden bg-[#040507]"
        >
          <div className="bg-slow absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(56,255,170,0.08),transparent_22%),radial-gradient(circle_at_82%_24%,rgba(101,157,255,0.12),transparent_20%),linear-gradient(180deg,#030406_0%,#040507_42%,#020304_100%)]" />
          <div className="bg-fast absolute inset-x-[-12%] bottom-[-16%] h-[42vh] rounded-full bg-[radial-gradient(circle,rgba(79,255,178,0.08),transparent_68%)] blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_52%,rgba(0,0,0,0.56)_100%)]" />

          <div className="pointer-events-none absolute inset-0 z-30">
            {statCards.map((card) => (
              <StatCard
                key={card.id}
                {...card}
                innerRef={(element) => {
                  cardRefs.current[statCards.findIndex((item) => item.id === card.id)] =
                    element
                }}
              />
            ))}
          </div>

          <div className="absolute inset-x-0 top-1/2 z-10 h-[22vh] min-h-[160px] -translate-y-1/2 border-y border-white/8 bg-[linear-gradient(180deg,rgba(23,26,31,0.98),rgba(20,23,28,0.98))] shadow-[0_28px_90px_rgba(0,0,0,0.36)]" />

          <div className="absolute inset-0 z-30 flex items-center justify-center px-6 text-center sm:px-12 lg:px-24">
            <p className="flex max-w-[92vw] flex-wrap items-center justify-center gap-x-[0.16rem] gap-y-0 sm:gap-x-[0.24rem] lg:gap-x-[0.34rem]">
              {welcomeLetters.map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  ref={(element) => {
                    letterRefs.current[index] = element
                  }}
                  className="hero-letter text-[0.92rem] font-semibold uppercase tracking-[0.34em] text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.08)] sm:text-[1.7rem] sm:tracking-[0.44em] lg:text-[3.1rem] lg:tracking-[0.56em]"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </p>
          </div>

          <div
            ref={trailRef}
            data-start="92"
            className="pointer-events-none absolute left-[92px] top-1/2 z-20 h-[74px] w-[12px] -translate-y-1/2 overflow-visible mix-blend-screen"
          >
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#74ffac]/0 via-[#74ffac]/42 to-[#74ffac]/0 blur-[26px]" />
            <div className="trail-pulse absolute inset-y-[24px] left-0 w-full rounded-full bg-gradient-to-r from-[#9cffc6]/0 via-[#78ffb0]/72 to-[#78ffb0]/0 blur-[10px]" />
            <div className="absolute inset-y-[31px] left-0 w-full rounded-full bg-gradient-to-r from-[#d6ffe7]/0 via-[#a3ffcb]/88 to-[#a3ffcb]/0" />
          </div>

          <div
            ref={carGlowRef}
            className="pointer-events-none absolute left-[24px] top-1/2 z-25 h-[40px] w-[140px] rounded-full bg-[linear-gradient(90deg,rgba(255,149,0,0.05),rgba(255,149,0,0.24),rgba(255,149,0,0.04))] blur-xl"
          />

          <img
            ref={carRef}
            src={carImage}
            alt="McLaren 720S top view"
            className="absolute left-[-8px] top-1/2 z-40 w-[190px] object-contain will-change-transform [filter:drop-shadow(0_16px_30px_rgba(0,0,0,0.4))] sm:w-[250px] lg:w-[320px]"
          />
        </div>
      </section>
    </main>
  )
}

export default App
