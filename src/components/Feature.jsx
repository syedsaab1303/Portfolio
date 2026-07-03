import { Stagger, Item, fadeUp } from './Reveal'
import Tilt from './Tilt'
import MagneticLink from './MagneticLink'
import { FEATURE, LINKS, rich } from '../data/resume'

export default function Feature() {
  return (
    <Stagger className="sec" as="section" id="feature" data-sc="SC.05">
      <Item className="sec-head">
        <span className="kicker">Feature Presentation</span>
        <h2>
          Engineered end to <em>end.</em>
        </h2>
      </Item>

      <Tilt className="feature-card" max={3} variants={fadeUp}>
        <div className="poster">
          <div className="poster-mark" aria-hidden="true">
            <span className="pm-kicker">Case Study · 01</span>
            <div className="pm-word">
              Reel
              <br />
              DownX
            </div>
            <span className="pm-caption">Node.js · Redis Queue · AWS</span>
          </div>
        </div>

        <div className="feat-body">
          <span className="kicker">Personal Build · Full Stack</span>
          <h3>
            Reel<em>DownX</em>
          </h3>
          <p>
            A full-stack Instagram reel downloader — engineered end to end, from a Redis-backed job queue to an
            auto-scaling AWS deployment.
          </p>
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
            <MagneticLink href={LINKS.demo} target="_blank" rel="noopener">
              Watch demo
            </MagneticLink>
          </div>
        </div>
      </Tilt>
    </Stagger>
  )
}
