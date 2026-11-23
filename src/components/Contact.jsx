import data from '../data'
import Section from './Section'
import {
  UserIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  MessageIcon,
  SendIcon,
  GitHubIcon,
  LinkedInIcon,
} from './Icons'

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-bright">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {label}
        </span>
        <span className="mt-1 block break-words text-sm font-medium text-ink">
          {value}
        </span>
      </span>
    </>
  )

  const classes = 'flex items-center gap-4 py-4'

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className={`${classes} group`}
      >
        {content}
      </a>
    )
  }

  return <div className={classes}>{content}</div>
}

export default function Contact() {
  const { contact, email, socials } = data
  const socialIcons = { GitHub: GitHubIcon, LinkedIn: LinkedInIcon }
  const digits = (value) => value.replace(/\D/g, '')

  return (
    <Section id="contact" number="05" title="Contact">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-bright">
            {contact.eyebrow}
          </p>
          <h3 className="mt-4 max-w-lg text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {contact.heading}
          </h3>
          <p className="mt-4 max-w-lg leading-relaxed text-muted">
            {contact.description}
          </p>

          <a
            href={`mailto:${email}`}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-7 py-3 font-medium text-white transition hover:bg-accent-dark"
          >
            {contact.button}
          </a>

          <div className="mt-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Elsewhere
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = socialIcons[social.label] || MailIcon
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-muted transition hover:border-accent hover:text-accent-bright"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="divide-y divide-border border-y border-border">
          <ContactRow icon={UserIcon} label="Name" value={contact.name} />
          <ContactRow icon={MapPinIcon} label="Address" value={contact.address} />
          <ContactRow
            icon={PhoneIcon}
            label="Call"
            value={contact.phone}
            href={`tel:+${digits(contact.phone)}`}
          />
          <ContactRow
            icon={MailIcon}
            label="Email"
            value={email}
            href={`mailto:${email}`}
          />
          <ContactRow
            icon={MessageIcon}
            label="WhatsApp"
            value={contact.whatsapp}
            href={`https://wa.me/${digits(contact.whatsapp)}`}
          />
          <ContactRow
            icon={SendIcon}
            label="Telegram"
            value={contact.telegram}
            href={`https://t.me/+${digits(contact.telegram)}`}
          />
        </div>
      </div>
    </Section>
  )
}
