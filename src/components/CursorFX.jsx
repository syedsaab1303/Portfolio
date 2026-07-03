import { useEffect, useState } from 'react'
import { motion as Motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorFX() {
  const [enabled, setEnabled] = useState(false)
  const [hover, setHover] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 260, damping: 24, mass: 0.6 })
  const ry = useSpring(y, { stiffness: 260, damping: 24, mass: 0.6 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    setEnabled(true)
    document.documentElement.classList.add('has-cursor')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => e.target.closest('a,button') && setHover(true)
    const out = (e) => e.target.closest('a,button') && setHover(false)

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      document.documentElement.classList.remove('has-cursor')
      window.removeEventListener('pointermove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <Motion.div className="cur" style={{ x, y }} aria-hidden="true">
        <div className="cur-dot" />
      </Motion.div>
      <Motion.div className="cur" style={{ x: rx, y: ry }} aria-hidden="true">
        <div className={hover ? 'cur-ring on' : 'cur-ring'} />
      </Motion.div>
    </>
  )
}
