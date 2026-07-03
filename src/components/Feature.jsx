import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Stagger, Item, fadeUp } from './Reveal'
import Tilt from './Tilt'
import MagneticLink from './MagneticLink'
import { FEATURE, LINKS, rich } from '../data/resume'

export default function Feature() {
  const termRef = useRef(null)
  const typing = useInView(termRef, { once: true, amount: 0.3 })

  return (
    <Stagger className="sec" as="section" id="feature" data-sc="SC.05">
      <Item className="sec-head">
        <span className="kicker">Feature Presentation</span>
        <h2>
          Built, shipped, <em>live.</em>
        </h2>
      </Item>

      <Tilt className="feature-card" max={3} variants={fadeUp}>
        <div className="poster">
          <div className={typing ? 'term in' : 'term'} ref={termRef} aria-hidden="true">
            <div className="term-bar">
              <i />
              <i />
              <i />
              <span>reeldownx — worker</span>
            </div>
            <div className="term-body">
              <div className="tl">
                <i>$</i> <b>POST /api/v1/download</b>
              </div>
              <div className="tl">
                <i>→</i> queued&nbsp;&nbsp;job#4821&nbsp;&nbsp;<b>redis: LPUSH jobs</b>
              </div>
              <div className="tl">
                <i>→</i> worker&nbsp;&nbsp;<b>yt-dlp --format mp4</b>
              </div>
              <div className="tl ok">
                <i>✓</i> done&nbsp;&nbsp;2.4s&nbsp;&nbsp;<b>served via CloudFront</b>
              </div>
              <div className="tl">
                <i>$</i> autoscaling&nbsp;&nbsp;<b>ALB → ASG healthy</b>
              </div>
              <span className="caret" />
            </div>
          </div>
        </div>

        <div className="feat-body">
          <span className="kicker">Personal build · Real users</span>
          <h3>
            Reel<em>DownX</em>
          </h3>
          <p>A full-stack, production-deployed Instagram reel downloader — engineered end to end and running live on AWS.</p>
          <ul>
            {FEATURE.bullets.map((b, i) => (
              <li key={i}>{rich(b)}</li>
            ))}
          </ul>
          <div className="tech-line">
            {FEATURE.tech.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="feat-links">
            <MagneticLink href={LINKS.reeldownx} target="_blank" rel="noopener">
              Visit reeldownx.com ↗
            </MagneticLink>
            <MagneticLink href={LINKS.demo} className="btn ghost" target="_blank" rel="noopener">
              Watch demo
            </MagneticLink>
          </div>
        </div>
      </Tilt>
    </Stagger>
  )
}
