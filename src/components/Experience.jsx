import data from '../data'
import Section from './Section'


/** Render the experience component. */
export default function Experience() {
  const { experience, resumeUrl } = data

  return (
    <Section id="experience" number="02" title="Professional Experience">
      {experience.length > 0 ? (
        <ul className="space-y-6">
          {experience.map((job, i) => (
            <li
              key={i}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                  {job.role}
                </h3>
                {job.period && (
                  <span className="rounded-full border border-border bg-canvas px-3 py-1 font-mono text-xs text-accent-bright">
                    {job.period}
                  </span>
                )}
              </div>

              {job.engagement && (
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-muted">
                  {job.engagement}
                </p>
              )}

              {job.project && (
                <p className="mt-6 text-base font-medium text-ink-soft">
                  {job.project}
                </p>
              )}
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                {job.description}
              </p>

              {job.highlights?.length > 0 && (
                <div className="mt-7">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent-bright">
                    Key contributions
                  </p>
                  <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {job.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.tech?.length > 0 && (
                <div className="mt-7 border-t border-border pt-6">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent-bright">
                    Technologies
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent-bright"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted">
          Professional experience details coming soon.
        </p>
      )}

      {resumeUrl && (
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-xl border border-border bg-surface px-5 py-3 font-medium text-ink transition hover:border-accent hover:text-accent-bright"
        >
          View full résumé <span aria-hidden="true">↗</span>
        </a>
      )}
    </Section>
  )
}
