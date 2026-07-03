import { MARQUEE } from '../data/resume'

function Run() {
  return (
    <span>
      {MARQUEE.map((t) => (
        <em key={t} style={{ fontStyle: 'normal' }}>
          {t}
          <b>◆</b>
        </em>
      ))}
    </span>
  )
}

export default function Strip() {
  return (
    <div className="strip" aria-hidden="true">
      <div className="track">
        <Run />
        <Run />
      </div>
    </div>
  )
}
