/** Render the section component. */
export default function Section({ id, number, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-border py-16 sm:py-20">
      <div className="mb-8 flex items-baseline gap-4">
        <span className="font-mono text-sm font-semibold text-accent-bright">
          {number}.
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
