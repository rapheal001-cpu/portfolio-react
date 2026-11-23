import data from '../data'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-canvas/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={data.profileImage}
            alt={data.name}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-accent/30"
          />
          <span className="text-sm font-bold tracking-tight text-ink">
            {data.name}
          </span>
        </a>

        <nav aria-label="Main navigation" className="order-3 w-full sm:order-none sm:w-auto">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {data.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="font-mono text-xs text-muted transition hover:text-accent-bright"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-4">
          {data.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-muted transition hover:text-accent-bright"
              >
                {social.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
