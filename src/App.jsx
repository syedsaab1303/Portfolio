import { MotionConfig } from 'framer-motion'
import Intro from './components/Intro'
import CursorFX from './components/CursorFX'
import TimecodeHUD from './components/TimecodeHUD'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Strip from './components/Strip'
import Logline from './components/Logline'
import Departments from './components/Departments'
import Acts from './components/Acts'
import Feature from './components/Feature'
import Credits from './components/Credits'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain" aria-hidden="true" />
      <Intro />
      <CursorFX />
      <TimecodeHUD />
      <Navbar />
      <main id="top">
        <Hero />
        <Strip />
        <Logline />
        <Departments />
        <Acts />
        <Feature />
        <Credits />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
