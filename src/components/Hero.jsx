import data from '../data'

export default function Hero() {
  const { hero } = data

  return (
    <section className="flex min-h-[68vh] flex-col justify-center py-20 sm:py-24">
      <p className="mb-5 font-mono text-sm text-mint">{hero.greeting}</p>
      <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-light sm:text-6xl lg:text-7xl">
        {hero.headline}
      </h1>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate sm:text-4xl lg:text-5xl">
        {hero.subheadline}
      </h2>
      <p className="mt-7 max-w-xl text-base leading-relaxed text-slate">
        {hero.description}
      </p>
      <a
        href="#projects"
        className="mt-10 w-fit rounded border border-mint px-6 py-3 font-mono text-sm text-mint transition hover:bg-mint/10"
      >
        {hero.cta}
      </a>
    </section>
  )
}
