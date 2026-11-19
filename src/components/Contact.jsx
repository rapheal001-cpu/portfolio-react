import data from '../data'
import Section from './Section'

export default function Contact() {
  const { contact, email } = data

  return (
    <Section id="contact" number="05" title="Contact">
      <div className="py-10 text-center">
        <p className="font-mono text-sm text-mint">{contact.eyebrow}</p>
        <h3 className="mx-auto mt-5 max-w-2xl text-4xl font-bold leading-tight text-slate-light sm:text-5xl">
          {contact.heading}
        </h3>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-slate">
          {contact.description}
        </p>
        <a
          href={`mailto:${email}`}
          className="mt-9 inline-block rounded border border-mint px-7 py-3 font-mono text-sm text-mint transition hover:bg-mint/10"
        >
          {contact.button}
        </a>
      </div>
    </Section>
  )
}
