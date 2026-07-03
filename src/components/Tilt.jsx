import { motion as Motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

/* 3D tilt-on-hover card. Accepts framer-motion props (e.g. variants) so it
   can sit directly inside a <Stagger> container. */
export default function Tilt({ children, className, max = 7, ...rest }) {
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 160, damping: 18 })
  const sry = useSpring(ry, { stiffness: 160, damping: 18 })
  const reduced = useReducedMotion()

  function onMove(e) {
    if (reduced || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * max)
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * max)
  }
  function onLeave() {
    rx.set(0)
    ry.set(0)
  }

  return (
    <Motion.div
      className={className}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...rest}
    >
      {children}
    </Motion.div>
  )
}
