import { motion } from 'framer-motion'

export const EASE = [0.19, 1, 0.22, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/* Container that staggers its fadeUp children into view once */
export function Stagger({ children, className, as = 'div', ...rest }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -3% 0px' }}
      {...rest}
    >
      {children}
    </M>
  )
}

export function Item({ children, className, as = 'div', ...rest }) {
  const M = motion[as] || motion.div
  return (
    <M className={className} variants={fadeUp} {...rest}>
      {children}
    </M>
  )
}
