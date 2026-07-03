import { Stagger, Item } from './Reveal'
import { ACTS, rich } from '../data/resume'

export default function Acts() {
  return (
    <section className="sec" id="acts" data-sc="SC.04">
      <Stagger className="sec-head">
        <Item as="span" className="kicker">
          The Acts
        </Item>
        <Item as="h2">
          Experience, in <em>two acts.</em>
        </Item>
      </Stagger>

      {ACTS.map((act) => (
        <Stagger className="act" as="article" key={act.no}>
          <Item className="act-side">
            <div className="sticky">
              <div className="act-no">{act.no}</div>
              <h3>{act.company}</h3>
              <div className="co">{act.role}</div>
              <div className="when">{act.when}</div>
              <div className="where">{act.where}</div>
            </div>
          </Item>
          <Item className="act-main">
            <div className="proj">
              {act.project}
              <small>{act.sub}</small>
            </div>
            <ul>
              {act.bullets.map((b, i) => (
                <li key={i}>{rich(b)}</li>
              ))}
            </ul>
            {act.award && (
              <div className="award">
                <i>★</i> {act.award}
              </div>
            )}
            <div className="tech-line">
              {act.tech.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </Item>
        </Stagger>
      ))}
    </section>
  )
}
