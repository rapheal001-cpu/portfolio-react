import data from '../data'
import Section from './Section'

export default function Experience() {
  const { experience, resumeUrl } = data

  return (
    <Section id="experience" number="02" title="Where I've Worked">
      <ul className="space-y-10">
        {experience.map((job, i) => (
          <li key={i} className="border-l border-line pl-6">
            <p className="font-mono text-xs text-mint">{job.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-light">
              {job.role} <span className="font-normal text-slate">@ {job.company}</span>
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
              {job.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {job.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-navy-700 px-3 py-1 font-mono text-xs text-slate-light"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <a
        href={resumeUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-block rounded border border-mint px-5 py-3 font-mono text-sm text-mint transition hover:bg-mint/10"
      >
        View full résumé <span aria-hidden="true">↗</span>
      </a>
    </Section>
  )
}
