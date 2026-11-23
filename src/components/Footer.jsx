import data from '../data'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center">
      <p className="font-mono text-xs text-muted">{data.footer.note}</p>
      <p className="mt-2 font-mono text-xs text-muted/80">
        © {currentYear} {data.name}. All rights reserved.
      </p>
    </footer>
  )
}
