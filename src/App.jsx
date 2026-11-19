import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Writing from './components/Writing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-navy text-slate">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-mint focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-navy"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-[1400px] flex-col px-6 sm:px-10 lg:flex-row lg:gap-10 lg:px-14 xl:px-20">
        <Sidebar />

        <main id="main" className="min-w-0 flex-1">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Writing />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )
}
