import { motion as Motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

/* Anchor that leans toward the cursor. */
export default function MagneticLink({ children, className = 'btn', ...rest }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16 })
  const sy = useSpring(y, { stiffness: 220, damping: 16 })
  const reduced = useReducedMotion()

  function onMove(e) {
    if (reduced || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.16)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.22)
  }
  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <Motion.a className={className} style={{ x: sx, y: sy }} onPointerMove={onMove} onPointerLeave={onLeave} {...rest}>
      {children}
    </Motion.a>
  )
}
