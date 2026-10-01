import { profiles } from '../data/content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import '../styles/profiles.css'

export default function CodingProfiles() {
  return (
    <section id="profiles" className="section section-alt">
      <div className="container">
        <SectionHead eyebrow="Profiles" title="Find me online" />

        <ul className="prof-grid">
          {profiles.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={i * 60} className="prof-reveal">
                <div className="prof-card card card-lift" data-spot>
                  <span className="prof-icon">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <h3>{p.name}</h3>
                  <p className="prof-user">@{p.username}</p>
                  <a
                    className="btn btn-ghost btn-sm"
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${p.name} profile`}
                  >
                    Visit Profile <Icon name="external" size={14} />
                  </a>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
