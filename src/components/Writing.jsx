import { useState } from 'react'
import data from '../data'
import Section from './Section'

export default function Writing() {
  const { writing } = data
  const [activeCategory, setActiveCategory] = useState('All')

  const articles =
    activeCategory === 'All'
      ? writing.articles
      : writing.articles.filter((article) => article.category === activeCategory)

  return (
    <Section id="writing" number="04" title={writing.heading}>
      <p className="max-w-3xl text-base leading-relaxed text-muted">
        {writing.description}
      </p>

      <div
        role="group"
        aria-label="Filter articles by category"
        className="mt-7 flex flex-wrap gap-2"
      >
        {['All', ...writing.categories].map((category) => {
          const isActive = category === activeCategory
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-3 py-1.5 font-mono text-xs transition ${
                isActive
                  ? 'border-accent bg-accent-soft text-accent-bright'
                  : 'border-border bg-surface text-muted hover:border-accent hover:text-accent-bright'
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      <p className="mt-5 font-mono text-xs text-muted">
        Showing {articles.length} of {writing.articles.length} topics
      </p>

      {articles.length > 0 ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs text-accent-bright">
                  {article.category}
                </span>
                {article.status && (
                  <span className="rounded-full border border-border bg-canvas px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted">
                    {article.status}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">
                {article.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {article.description}
              </p>

              {(article.readingTime || article.url) && (
                <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                  {article.readingTime && (
                    <span className="font-mono text-xs text-muted">
                      {article.readingTime} min read
                    </span>
                  )}
                  {article.url && (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-accent-bright transition hover:text-ink"
                    >
                      Read Article <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="mt-6 text-sm text-muted">
          No topics in this category yet.
        </p>
      )}
    </Section>
  )
}
