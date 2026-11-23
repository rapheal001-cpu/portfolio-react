import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiTanstack,
  SiAxios,
  SiDart,
  SiFlutter,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiCelery,
  SiStripe,
  SiGit,
  SiGithub,
  SiDocker,
  SiSwagger,
  SiSocketdotio,
  SiJsonwebtokens,
  SiVite,
  SiRender,
} from 'react-icons/si'
import { FaCreditCard, FaShieldHalved, FaLock } from 'react-icons/fa6'

const icons = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  React: SiReact,
  'Tailwind CSS': SiTailwindcss,
  'Redux Toolkit': SiRedux,
  'TanStack Query': SiTanstack,
  Axios: SiAxios,
  Dart: SiDart,
  'Dart (Learning)': SiDart,
  Flutter: SiFlutter,
  'Flutter (Learning)': SiFlutter,
  Python: SiPython,
  Django: SiDjango,
  'Django REST Framework': SiDjango,
  'Django Channels': SiDjango,
  'REST APIs': SiSwagger,
  'JWT Authentication': SiJsonwebtokens,
  'Role-Based Access': FaShieldHalved,
  'Application Security': FaLock,
  Vite: SiVite,
  Render: SiRender,
  WebSockets: SiSocketdotio,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  Redis: SiRedis,
  Celery: SiCelery,
  Stripe: SiStripe,
  Paystack: FaCreditCard,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
}

export default function TechIcon({ name, className }) {
  const Icon = icons[name]
  if (!Icon) {
    return <span className={className} aria-hidden="true">▹</span>
  }
  return <Icon className={className} aria-hidden="true" />
}
