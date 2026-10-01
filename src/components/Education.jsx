import { education } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import '../styles/about.css'

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <SectionHead eyebrow="Education" title="Academic background" />

        <Reveal>
          <ol className="timeline edu-timeline">
            {education.map((e) => (
              <li key={e.title} className="timeline-item">
                <span className="timeline-dot" aria-hidden="true" />
                <p className="timeline-period">{e.period}</p>
                <h4 className="timeline-title">{e.title}</h4>
                <p className="timeline-place">{e.place}</p>
                {e.note && <p className="timeline-note">{e.note}</p>}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
