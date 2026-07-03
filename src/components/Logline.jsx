import { Stagger, Item } from './Reveal'
import Counter from './Counter'
import { STATS, rich } from '../data/resume'

export default function Logline() {
  return (
    <Stagger className="sec logline" as="section" id="logline" data-sc="SC.02">
      <Item className="sec-head">
        <span className="kicker">The Logline</span>
      </Item>
      <Item as="p" className="lead">
        Three and a half years turning production chaos into <em>clean, scalable backend systems</em> that studios and
        enterprises run on.
      </Item>
      <Item as="p" className="body">
        Backend-focused engineer specialising in <b>event-driven architecture</b>, hierarchical <b>RBAC systems</b>,
        MongoDB aggregations and serverless applications on AWS — with Docker, Kubernetes and CI/CD pipelines carrying
        every release to production.
      </Item>
      <Item className="stats">
        {STATS.map((s) => (
          <div className="stat" key={s.kicker}>
            <span className="k">{s.kicker}</span>
            <div className="n">
              {s.text ? (
                s.text.map((t, i) => (i % 2 ? <i key={i}>{t}</i> : <span key={i}>{t}</span>))
              ) : (
                <>
                  <Counter value={s.value} decimals={s.decimals} />
                  <i>{s.suffix}</i>
                </>
              )}
            </div>
            <p className="sub">{rich(s.sub)}</p>
          </div>
        ))}
      </Item>
    </Stagger>
  )
}
