const LINKS = [
  ['#logline', 'Logline'],
  ['#departments', 'Departments'],
  ['#acts', 'The Acts'],
  ['#feature', 'Feature'],
  ['#contact', 'Credits'],
]

export default function Navbar() {
  return (
    <header className="nav">
      <a className="logo" href="#top">
        <b>S</b>·T·A
      </a>
      <nav aria-label="Sections">
        <ul>
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
