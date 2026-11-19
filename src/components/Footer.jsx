import data from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center">
      <p className="font-mono text-xs text-slate">{data.footer.note}</p>
      <p className="mt-2 font-mono text-xs text-slate/70">
        © {new Date().getFullYear()} {data.name}. All rights reserved.
      </p>
    </footer>
  )
}
