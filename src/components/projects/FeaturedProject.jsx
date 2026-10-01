import { featuredProject as p } from '../../data/content.js'
import Icon from '../Icon.jsx'
import RamaPreview from './RamaPreview.jsx'

export default function FeaturedProject({ onOpenCaseStudy }) {
  return (
    <article className="featured" data-spot>
      <div className="featured-body">
        <div className="featured-tags">
          <span className="featured-flag">Featured project</span>
          <span className="chip chip-plain">{p.type}</span>
        </div>

        <h3 className="featured-title">{p.name}</h3>
        <p className="featured-desc">{p.description}</p>
        <p className="featured-role">
          <span>My role</span> {p.role}
        </p>

        <ul className="featured-stack" aria-label="Technology stack">
          {p.stack.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>

        <ul className="check-list featured-features">
          {p.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="btn-row featured-actions">
          <a className="btn btn-primary" href={p.links.live} target="_blank" rel="noreferrer">
            Live Demo <Icon name="external" size={15} />
          </a>
          <a className="btn btn-ghost" href={p.links.github} target="_blank" rel="noreferrer">
            <Icon name="github" size={16} /> GitHub
          </a>
          <button type="button" className="btn btn-ghost" onClick={onOpenCaseStudy}>
            Case Study <Icon name="arrow-right" size={15} />
          </button>
        </div>

        <a className="featured-backend" href={p.links.backend} target="_blank" rel="noreferrer">
          Backend API <Icon name="external" size={13} />
        </a>
      </div>

      <div className="featured-visual">
        <RamaPreview />
      </div>
    </article>
  )
}
