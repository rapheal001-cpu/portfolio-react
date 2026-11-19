import data from '../data'

export default function Sidebar() {
  return (
    <aside className="border-b border-line py-8 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[34%] lg:shrink-0 lg:flex-col lg:justify-between lg:border-b-0 lg:py-14 lg:pr-6">
      <div>
        <a href="#top" aria-label="Back to top" className="inline-block">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-mint font-mono text-base font-semibold text-mint transition hover:bg-mint/10 lg:h-14 lg:w-14 lg:text-lg">
            {data.initials}
          </span>
        </a>

        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-slate">
          {data.role}
        </p>
        <p className="mt-1 font-mono text-xs text-slate/70">{data.location}</p>

        <nav aria-label="Main navigation" className="mt-7">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:block lg:space-y-4">
            {data.nav.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-baseline gap-2 font-mono text-sm text-slate transition hover:text-mint"
                >
                  <span className="text-mint">0{i + 1}.</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8 lg:mt-0">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-slate/70">
          Elsewhere
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {data.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-slate transition hover:text-mint"
              >
                {social.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-5 hidden font-mono text-[10px] text-slate/50 lg:block">
          {data.availability}
        </p>
      </div>
    </aside>
  )
}
