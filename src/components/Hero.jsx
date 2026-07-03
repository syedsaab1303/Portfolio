import { useEffect, useRef, useState } from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import GalaxyCanvas from './GalaxyCanvas'
import MagneticLink from './MagneticLink'
import { EASE } from './Reveal'

const META = ['Node.js', 'JavaScript', 'AWS', 'MongoDB', 'Microservices']

export default function Hero() {
  const ref = useRef(null)
  const [active, setActive] = useState(true)
  const reduced = useReducedMotion()
  // entrance overlaps the intro title card's fade-out
  const D = reduced ? 0 : 1.25

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold: 0 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  const rise = (delay) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE, delay },
  })

  return (
    <section className="hero" id="hero" ref={ref}>
      <GalaxyCanvas active={active} />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-in">
        <Motion.span className="slate-tag" {...rise(D)}>
          <i />
          Senior Software Engineer — Backend · Delhi, India
        </Motion.span>

        <h1>
          <span className="ln">
            <Motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.75, ease: EASE, delay: D + 0.05 }}>
              Syed Tamzeed
            </Motion.span>
          </span>
          <span className="ln">
            <Motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.75, ease: EASE, delay: D + 0.15 }}>
              Ali
            </Motion.span>
          </span>
        </h1>

        <Motion.p className="hero-sub" {...rise(D + 0.3)}>
          I build the machinery behind the screen — <b>scalable microservices</b>, <b>high-throughput REST APIs</b>, and{' '}
          <b>fault-tolerant distributed systems</b> for enterprise SaaS. Currently the sole backend owner of three core
          services powering a film &amp; TV production platform.
        </Motion.p>

        <Motion.div className="hero-cta" {...rise(D + 0.45)}>
          <MagneticLink href="#acts">View the work ↓</MagneticLink>
          <MagneticLink href="#contact" className="btn ghost">
            Roll credits
          </MagneticLink>
        </Motion.div>

        <Motion.div className="hero-meta" {...rise(D + 0.55)}>
          {META.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </Motion.div>
      </div>

      <Motion.span className="scroll-cue" {...rise(D + 0.7)}>
        Scroll to begin
      </Motion.span>
    </section>
  )
}
