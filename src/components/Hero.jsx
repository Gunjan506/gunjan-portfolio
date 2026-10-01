import { site, socials } from '../data/content.js'
import Icon from './Icon.jsx'
import CourseSearchDemo from './CourseSearchDemo.jsx'
import '../styles/hero.css'

const heroLinks = [
  { label: 'GitHub', icon: 'github', href: socials.github },
  { label: 'LinkedIn', icon: 'linkedin', href: socials.linkedin },
  { label: 'LeetCode', icon: 'code', href: socials.leetcode },
]

export default function Hero() {
  const step = (i) => ({ '--i': i })

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <img
            src="/images/profile-square.jpg"
            alt="Gunjan Gupta"
            className="hero-avatar"
            style={step(0)}
            width={80}
            height={80}
          />
          <p className="hero-status" style={step(1)}>
            <span className="hero-pulse" aria-hidden="true" />
            Open to software engineering opportunities
          </p>

          <h1 id="hero-title" className="hero-name" style={step(2)}>
            <span className="hero-hi">Hi, I'm</span>
            <span className="hero-nm">Gunjan Gupta</span>
          </h1>
          <p className="hero-title" style={step(3)}>
            {site.title}
          </p>
          <p className="hero-tagline" style={step(4)}>
            {site.tagline}
          </p>

          <div className="btn-row hero-cta" style={step(5)}>
            <a href="#projects" className="btn btn-primary">
              View My Work <Icon name="arrow-right" size={16} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let's Connect
            </a>
            {site.resumeUrl ? (
              <a href={site.resumeUrl} className="btn btn-ghost" download>
                <Icon name="download" size={16} /> Download Resume
              </a>
            ) : (
              <button type="button" className="btn btn-ghost" disabled title="Resume link coming soon">
                <Icon name="download" size={16} /> Download Resume
              </button>
            )}
          </div>

          <ul className="hero-socials" style={step(6)}>
            {heroLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer">
                  <Icon name={l.icon} size={17} />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <CourseSearchDemo />
        </div>
      </div>
    </section>
  )
}
