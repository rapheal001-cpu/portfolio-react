export default function Section({ id, number, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-24">
      <div className="mb-10 flex items-center gap-5">
        <h2 className="whitespace-nowrap font-mono text-xl font-semibold text-slate-light sm:text-2xl">
          <span className="mr-2 text-mint">{number}.</span>
          {title}
        </h2>
        <span className="h-px w-full max-w-[140px] bg-line sm:max-w-[240px]" />
      </div>
      {children}
    </section>
  )
}
