import data from '../data'
import Section from './Section'

export default function Writing() {
  return (
    <Section id="writing" number="04" title="Writing">
      <ul className="divide-y divide-line">
        {data.writing.map((post, i) => (
          <li key={i}>
            <a
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <h3 className="font-medium text-slate-light transition group-hover:text-mint">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-slate">{post.description}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-mint">
                {post.date}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
