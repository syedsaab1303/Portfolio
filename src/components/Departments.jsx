import { Stagger, Item } from './Reveal'
import Tilt from './Tilt'
import { fadeUp } from './Reveal'
import { DEPARTMENTS } from '../data/resume'

export default function Departments() {
  return (
    <Stagger className="sec" as="section" id="departments" data-sc="SC.03">
      <Item className="sec-head">
        <span className="kicker">The Departments</span>
        <h2>
          Every unit, <em>staffed.</em>
        </h2>
      </Item>
      <Stagger className="dept-grid">
        {DEPARTMENTS.map((d, i) => (
          <Tilt className="dept" key={d.name} variants={fadeUp}>
            <span className="no">DEPT {String(i + 1).padStart(2, '0')}</span>
            <h3>{d.name}</h3>
            <div className="chips">
              {d.chips.map(([label, hot]) => (
                <span key={label} className={hot ? 'chip hot' : 'chip'}>
                  {label}
                </span>
              ))}
            </div>
          </Tilt>
        ))}
      </Stagger>
    </Stagger>
  )
}
