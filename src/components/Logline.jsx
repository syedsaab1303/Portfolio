import { Stagger, Item } from './Reveal'

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
        every release to production. Currently the sole owner of <b>three core microservices and 200+ REST APIs</b> on
        ReelTrack, including a <b>V1 → V2 migration shipped with zero broken consumers</b>.
      </Item>
    </Stagger>
  )
}
