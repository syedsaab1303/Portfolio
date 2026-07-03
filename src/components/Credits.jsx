import { Stagger, Item } from './Reveal'
import { CREDS } from '../data/resume'

export default function Credits() {
  return (
    <Stagger className="sec" as="section" id="credits" data-sc="SC.06">
      <Item className="sec-head">
        <span className="kicker">The Credits</span>
        <h2>
          Training &amp; <em>honours.</em>
        </h2>
      </Item>
      <Stagger className="cred-grid">
        {CREDS.map((c) => (
          <Item className="cred" key={c.title}>
            <span className="role">{c.role}</span>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
            <span className="yr">{c.yr}</span>
          </Item>
        ))}
      </Stagger>
    </Stagger>
  )
}
