import data from '../data'
import Section from './Section'

export default function About() {
  const { about } = data

  return (
    <Section id="about" number="01" title={about.heading}>
      <div className="max-w-2xl space-y-5 leading-relaxed text-slate">
        {about.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12">
        <p className="mb-5 font-mono text-sm text-slate-light">
          {about.skillsTitle}
        </p>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
          {about.skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-2 font-mono text-sm text-slate"
            >
              <span className="text-mint" aria-hidden="true">▹</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
