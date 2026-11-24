import data from '../data'
import Section from './Section'


/** Render the projects component. */
export default function Projects() {
  return (
    <Section id="projects" number="03" title="Things I've Built">
      <div className="grid gap-6 md:grid-cols-2">
        {data.projects.map((project, i) => (
          <article
            key={i}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-64 w-full object-cover object-top sm:h-80"
              />
            ) : (
              <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-accent-soft to-canvas sm:h-80">
                <span className="font-mono text-5xl font-bold text-accent-bright/60">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-accent-bright">
                  0{i + 1}
                </span>
                {project.repoVisibility && (
                  <span className="rounded-full border border-border bg-canvas px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted">
                    {project.repoVisibility} repo
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-xl font-bold text-ink">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent-bright"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex gap-6 pt-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-muted transition hover:text-accent-bright"
                  >
                    Live demo <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-muted transition hover:text-accent-bright"
                  >
                    Source <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
