import { useState } from 'react'
import { navLinks } from './data/content.js'
import { useTheme } from './hooks/useTheme.js'
import { useActiveSection } from './hooks/useActiveSection.js'
import { useSpotlight } from './hooks/useSpotlight.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Services from './components/Services.jsx'
import CodingProfiles from './components/CodingProfiles.jsx'
import WorkTogether from './components/WorkTogether.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const sectionIds = navLinks.map((l) => l.href.slice(1))

export default function App() {
  const { theme, toggle } = useTheme()
  const active = useActiveSection(sectionIds)
  const [projectType, setProjectType] = useState('')
  useSpotlight()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar active={active} theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Services onPickService={setProjectType} />
        <CodingProfiles />
        <WorkTogether />
        <Contact projectType={projectType} onProjectTypeChange={setProjectType} />
      </main>
      <Footer />
    </>
  )
}
