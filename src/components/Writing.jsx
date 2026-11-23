import data from '../data'
import Section from './Section'

export default function Writing() {
  return (
    <Section id="writing" number="04" title="Writing">
      <ul className="divide-y divide-border">
        {data.writing.map((post, i) => (
          <li key={i}>
            <a
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-2 py-5 transition sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <h3 className="font-semibold text-ink transition group-hover:text-accent-bright">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{post.description}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-accent-bright">
                {post.date}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
