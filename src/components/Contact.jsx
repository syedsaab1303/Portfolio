import { Stagger, Item } from './Reveal'
import MagneticLink from './MagneticLink'
import { LINKS } from '../data/resume'

export default function Contact() {
  return (
    <Stagger className="wrap-sec" as="section" id="contact" data-sc="SC.07">
      <Item as="span" className="kicker">
        End Credits
      </Item>
      <Item as="h2">
        That's a <em>wrap.</em>
      </Item>
      <Item as="p">Have a system worth building, or a backend worth owning? The next production starts with one message.</Item>
      <Item className="wrap-cta">
        <MagneticLink href={`mailto:${LINKS.email}`}>{LINKS.email}</MagneticLink>
        <MagneticLink href={LINKS.phoneHref} className="btn ghost">
          {LINKS.phone}
        </MagneticLink>
      </Item>
      <Item className="contact-row">
        <a className="pill" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className="pill" href={LINKS.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="pill" href={LINKS.leetcode} target="_blank" rel="noopener noreferrer">
          LeetCode
        </a>
      </Item>
    </Stagger>
  )
}
