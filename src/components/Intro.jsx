import { useEffect, useState } from 'react'
import { motion as Motion, AnimatePresence, useReducedMotion } from 'framer-motion'

export default function Intro() {
  const reduced = useReducedMotion()
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1500)
    return () => clearTimeout(t)
  }, [])

  if (reduced) return null

  return (
    <AnimatePresence>
      {show && (
        <Motion.div className="intro" aria-hidden="true" exit={{ opacity: 0, transition: { duration: 0.45 } }}>
          <Motion.div
            className="i-eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.05, duration: 0.6 } }}
          >
            A backend engineering portfolio
          </Motion.div>
          <Motion.div
            className="i-title"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7 } }}
          >
            Syed Tamzeed Ali <em>presents</em>
          </Motion.div>
          <Motion.div
            className="i-rule"
            initial={{ width: 0 }}
            animate={{ width: 180, transition: { delay: 0.55, duration: 0.7 } }}
          />
        </Motion.div>
      )}
    </AnimatePresence>
  )
}
