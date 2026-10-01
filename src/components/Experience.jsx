import { experience } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import '../styles/experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead eyebrow="Experience" title="Where I've worked" />

        <ol className="timeline exp-timeline">
          {experience.map((job) => (
            <li key={job.company} className="timeline-item">
              <span className="timeline-dot" aria-hidden="true" />
              <Reveal className="card exp-card" data-spot>
                <div className="exp-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="exp-company">{job.company}</p>
                  </div>
                  <span className="chip">{job.period}</span>
                </div>
                <ul className="check-list exp-points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
