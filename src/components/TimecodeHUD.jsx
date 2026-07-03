import { useEffect, useRef } from 'react'
import { motion as Motion, useScroll } from 'framer-motion'

const pad = (n) => (n < 10 ? '0' + n : '' + n)

export default function TimecodeHUD() {
  const timeRef = useRef(null)
  const sceneRef = useRef(null)
  const { scrollYProgress } = useScroll()

  useEffect(
    () =>
      scrollYProgress.on('change', (v) => {
        const total = Math.round(v * 24 * 145) // a ~2min25s reel at 24fps
        const fr = total % 24
        const s = Math.floor(total / 24) % 60
        const m = Math.floor(total / 1440)
        if (timeRef.current) timeRef.current.textContent = `00:${pad(m)}:${pad(s)}:${pad(fr)}`
      }),
    [scrollYProgress],
  )

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting && sceneRef.current) sceneRef.current.textContent = e.target.dataset.sc
        }),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    document.querySelectorAll('[data-sc]').forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Motion.div className="tc-bar" style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }} />
      <div className="tc" aria-hidden="true">
        <span className="rec" />
        <span>REC</span>
        <b ref={sceneRef}>SC.01</b>
        <b ref={timeRef}>00:00:00:00</b>
      </div>
    </>
  )
}
