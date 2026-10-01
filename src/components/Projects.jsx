import { useState } from 'react'
import { otherProjects } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import FeaturedProject from './projects/FeaturedProject.jsx'
import ProjectCard from './projects/ProjectCard.jsx'
import CaseStudyModal from './projects/CaseStudyModal.jsx'
import '../styles/projects.css'

export default function Projects() {
  const [caseOpen, setCaseOpen] = useState(false)

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHead
          eyebrow="Selected work"
          title="Projects I've built"
          text="A full-stack website built for a real institute, plus smaller projects in machine learning and web development."
        />

        <Reveal>
          <FeaturedProject onOpenCaseStudy={() => setCaseOpen(true)} />
        </Reveal>

        <div className="project-grid">
          {otherProjects.map((project, i) => (
            <Reveal key={project.name} delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>

      <CaseStudyModal open={caseOpen} onClose={() => setCaseOpen(false)} />
    </section>
  )
}
