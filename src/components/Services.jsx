import { services } from '../data/content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import '../styles/services.css'

export default function Services({ onPickService }) {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <SectionHead
          eyebrow="Capabilities"
          title="What I can build"
          text="I can help turn a website idea or business requirement into a responsive and functional web experience."
        />

        <ul className="svc-grid">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={(i % 3) * 70} className="svc-reveal">
                <a
                  href="#contact"
                  className="svc-card card card-lift"
                  data-spot
                  onClick={() => onPickService(s.type)}
                >
                  <span className="svc-icon">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="svc-link">
                    Discuss this <Icon name="arrow-right" size={14} />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="svc-cta">
          <div>
            <h3>Have a project in mind?</h3>
            <p>Let's discuss what you need and see how I can help.</p>
          </div>
          <a href="#contact" className="btn btn-ghost">
            Discuss a Project <Icon name="arrow-right" size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
