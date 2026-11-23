import data from '../data'
import Section from './Section'

export default function Experience() {
  const { experience, resumeUrl } = data

  return (
    <Section id="experience" number="02" title="Work Experience">
      {experience.length > 0 ? (
        <ul className="space-y-5">
          {experience.map((job, i) => (
            <li
              key={i}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-ink">
                  {job.role}{' '}
                  <span className="font-normal text-muted">@ {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-accent-bright">
                  {job.period}
                </span>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                {job.description}
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
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted">Work experience details coming soon.</p>
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
