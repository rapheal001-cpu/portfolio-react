import data from '../data'
import Section from './Section'
import TechIcon from './TechIcon'

export default function About() {
  const { about } = data

  return (
    <Section id="about" number="01" title={about.heading}>
      <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted">
        {about.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12">
        <p className="font-mono text-sm font-medium text-ink-soft">
          {about.skillsTitle}
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {about.skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
            >
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent-bright">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-ink-soft"
                  >
                    <TechIcon
                      name={skill}
                      className="h-4 w-4 shrink-0 text-accent-bright"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
