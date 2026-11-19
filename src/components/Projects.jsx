import data from '../data'
import Section from './Section'

const accents = [
  'from-mint/25 to-navy-700',
  'from-sky-400/25 to-navy-700',
  'from-fuchsia-400/20 to-navy-700',
  'from-amber-300/20 to-navy-700',
]

export default function Projects() {
  return (
    <Section id="projects" number="03" title="Things I've Built">
      <div className="grid gap-6 md:grid-cols-2">
        {data.projects.map((project, i) => (
          <article
            key={i}
            className="group flex flex-col overflow-hidden rounded-lg border border-line bg-navy-700/50 transition hover:-translate-y-1 hover:border-mint/50 hover:bg-navy-700"
          >
            <div
              className={`flex h-40 items-center justify-center border-b border-line bg-gradient-to-br ${accents[i % accents.length]}`}
            >
              <span className="font-mono text-4xl font-semibold text-slate-light/50">
                0{i + 1}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-slate-light">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
                {project.tags.map((tag) => (
                  <li key={tag} className="font-mono text-xs text-mint">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-6 pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-slate transition hover:text-mint"
                >
                  Live demo <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-slate transition hover:text-mint"
                >
                  Source <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
