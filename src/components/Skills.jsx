import { useRef, useState } from 'react'
import { skillGroups } from '../data/content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import '../styles/skills.css'

export default function Skills() {
  const [index, setIndex] = useState(0)
  const tabRefs = useRef([])
  const group = skillGroups[index]

  const onKeyDown = (e) => {
    const n = skillGroups.length
    let next = null
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (index + 1) % n
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (index - 1 + n) % n
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = n - 1
    if (next !== null) {
      e.preventDefault()
      setIndex(next)
      tabRefs.current[next]?.focus()
    }
  }

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHead
          eyebrow="Tech stack"
          title="Skills and tools"
          text="Pick a category to see what I work with. No percentages — just the technologies I actually use."
        />

        <Reveal className="skills-shell">
          <div className="skills-tabs" role="tablist" aria-label="Skill categories" onKeyDown={onKeyDown}>
            {skillGroups.map((g, i) => (
              <button
                key={g.id}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                id={`tab-${g.id}`}
                aria-selected={i === index}
                aria-controls={`panel-${g.id}`}
                tabIndex={i === index ? 0 : -1}
                className="skills-tab"
                onClick={() => setIndex(i)}
              >
                <Icon name={g.icon} size={18} />
                <span>{g.label}</span>
                <span className="skills-count">{g.items.length}</span>
              </button>
            ))}
          </div>

          <div
            key={group.id}
            role="tabpanel"
            id={`panel-${group.id}`}
            aria-labelledby={`tab-${group.id}`}
            className="skills-panel"
          >
            <h3>{group.label}</h3>
            <p>{group.blurb}</p>
            <ul className="skills-items">
              {group.items.map((item, i) => (
                <li key={item} className="skill-badge" style={{ '--i': i }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
