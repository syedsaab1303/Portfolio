import { useEffect, useRef, useState } from 'react'
import { motion as Motion, useMotionValue, useSpring, useTransform, useVelocity } from 'framer-motion'

export default function CursorFX() {
  const [enabled, setEnabled] = useState(false)
  const [hover, setHover] = useState(false)
  const [down, setDown] = useState(false)
  const [hidden, setHidden] = useState(false)
  const angleRef = useRef(0)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  // stiff spring keeps the ring glued to fast mouse movement
  const rx = useSpring(x, { stiffness: 650, damping: 34, mass: 0.35 })
  const ry = useSpring(y, { stiffness: 650, damping: 34, mass: 0.35 })

  // stretch the ring along its direction of travel, like a drop of light
  const vx = useVelocity(rx)
  const vy = useVelocity(ry)
  const rotate = useTransform([vx, vy], ([a, b]) => {
    // hold the last angle at low speed so the ring doesn't jitter at rest
    if (Math.hypot(a, b) > 150) angleRef.current = (Math.atan2(b, a) * 180) / Math.PI
    return angleRef.current
  })
  const stretchRaw = useTransform([vx, vy], ([a, b]) => 1 + Math.min(Math.hypot(a, b) / 5200, 0.38))
  const stretch = useSpring(stretchRaw, { stiffness: 420, damping: 42 })
  const squash = useTransform(stretch, (s) => 1 / s)

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
    const press = () => setDown(true)
    const release = () => setDown(false)
    const leave = () => setHidden(true)
    const enter = () => setHidden(false)

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerdown', press)
    window.addEventListener('pointerup', release)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    document.documentElement.addEventListener('mouseleave', leave)
    document.documentElement.addEventListener('mouseenter', enter)
    return () => {
      document.documentElement.classList.remove('has-cursor')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', press)
      window.removeEventListener('pointerup', release)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      document.documentElement.removeEventListener('mouseleave', leave)
      document.documentElement.removeEventListener('mouseenter', enter)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <Motion.div className="cur" style={{ x, y }} animate={{ opacity: hidden ? 0 : 1 }} aria-hidden="true">
        <div className={hover ? 'cur-dot sm' : 'cur-dot'} />
      </Motion.div>
      <Motion.div className="cur" style={{ x: rx, y: ry }} animate={{ opacity: hidden ? 0 : 1 }} aria-hidden="true">
        <Motion.div style={{ rotate }}>
          <Motion.div style={{ scaleX: stretch, scaleY: squash }}>
            <Motion.div animate={{ scale: down ? 0.8 : 1 }} transition={{ duration: 0.15 }}>
              <div className={hover ? 'cur-ring on' : 'cur-ring'} />
            </Motion.div>
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </>
  )
}
