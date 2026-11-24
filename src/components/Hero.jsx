import data from '../data'

export default function Hero() {
  const { hero, profileImage, name, email, availability } = data

  return (
    <section className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-bright">
          {availability}
        </p>
        <p className="mt-6 font-mono text-sm text-muted">{hero.greeting}</p>
        <h1 className="mt-2 text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {hero.headline}
        </h1>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink-soft sm:text-3xl">
          {hero.subheadline}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          {hero.description}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 font-medium text-white transition hover:bg-accent-dark"
          >
            {hero.cta}
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-6 py-3 font-medium text-ink transition hover:border-accent hover:text-accent-bright"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-3 rounded-[2rem] bg-accent-soft" />
        <img
          src={profileImage}
          alt={name}
          className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-xl ring-1 ring-border"
        />
      </div>
    </section>
  )
}

