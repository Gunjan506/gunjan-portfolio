import { about } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import '../styles/about.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead eyebrow="About" title="A little about me" />

        <div className="about-grid">
          <Reveal className="about-photo-wrap">
            <img
              src="/images/profile-portrait.jpg"
              alt="Gunjan Gupta"
              className="about-photo"
              width={720}
              height={900}
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={100} className="about-main">
            <p className="about-text">{about.text}</p>

            <dl className="about-facts">
              {about.facts.map((f) => (
                <div key={f.label} className="about-fact" data-spot>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
