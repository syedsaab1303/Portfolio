import { useEffect, useState } from 'react'
import { motion as Motion, AnimatePresence, useReducedMotion } from 'framer-motion'

export default function Intro() {
  const reduced = useReducedMotion()
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2300)
    return () => clearTimeout(t)
  }, [])

  if (reduced) return null

  return (
    <AnimatePresence>
      {show && (
        <Motion.div className="intro" aria-hidden="true" exit={{ opacity: 0, transition: { duration: 0.7 } }}>
          <Motion.div
            className="i-eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.8 } }}
          >
            A backend engineering portfolio
          </Motion.div>
          <Motion.div
            className="i-title"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.9 } }}
          >
            Syed Tamzeed Ali <em>presents</em>
          </Motion.div>
          <Motion.div
            className="i-rule"
            initial={{ width: 0 }}
            animate={{ width: 180, transition: { delay: 0.9, duration: 1 } }}
          />
        </Motion.div>
      )}
    </AnimatePresence>
  )
}
