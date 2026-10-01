import { achievements } from '../data/content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import '../styles/achievements.css'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHead eyebrow="Recognition" title="Achievements and certifications" />

        <ul className="ach-grid">
          {achievements.map((a, i) => (
            <li key={a.title + a.detail}>
              <Reveal delay={(i % 4) * 70} className="ach-reveal">
                <div className="ach-card card card-lift" data-spot>
                  <span className="ach-icon">
                    <Icon name={a.icon} size={20} />
                  </span>
                  <p className="ach-category">{a.category}</p>
                  <h3>{a.title}</h3>
                  <p className="ach-detail">{a.detail}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
