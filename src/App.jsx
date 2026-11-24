import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Writing from './components/Writing'


/** Render the app component. */
export default function App() {
  return (
    <div id="top" className="min-h-screen bg-canvas text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="mx-auto w-full max-w-6xl px-5 pb-6 sm:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Writing />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
