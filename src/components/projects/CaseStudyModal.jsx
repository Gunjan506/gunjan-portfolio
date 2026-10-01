import { useEffect, useRef } from 'react'
import { featuredProject as p } from '../../data/content.js'
import Icon from '../Icon.jsx'

// Uses the native <dialog> element: focus trapping and Escape-to-close come built in.
export default function CaseStudyModal({ open, onClose }) {
  const ref = useRef(null)
  const cs = p.caseStudy

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      document.body.style.overflow = 'hidden'
    } else if (!open && dialog.open) {
      dialog.close()
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="cs-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      <div className="modal-inner">
        <div className="modal-head">
          <div>
            <p className="eyebrow">Case study</p>
            <h3 id="cs-title">{p.name}</h3>
          </div>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close case study">
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="cs-grid">
          <section>
            <h4>Problem</h4>
            <p>{cs.problem}</p>
          </section>
          <section>
            <h4>Solution</h4>
            <p>{cs.solution}</p>
          </section>

          <section className="cs-wide">
            <h4>My role</h4>
            <p>{p.role}</p>
          </section>

          <section>
            <h4>Features</h4>
            <ul className="check-list cs-features">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
          <section>
            <h4>Technology</h4>
            <dl className="cs-tech">
              {cs.technology.map((t) => (
                <div key={t.label}>
                  <dt>{t.label}</dt>
                  <dd>{t.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="cs-wide">
            <h4>Development process</h4>
            <ol className="cs-steps">
              {cs.process.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </section>

          <section className="cs-wide cs-result">
            <h4>Result</h4>
            <p>{cs.result}</p>
          </section>
        </div>

        <div className="btn-row modal-actions">
          <a className="btn btn-primary" href={p.links.live} target="_blank" rel="noreferrer">
            Live Demo <Icon name="external" size={15} />
          </a>
          <a className="btn btn-ghost" href={p.links.github} target="_blank" rel="noreferrer">
            <Icon name="github" size={16} /> GitHub
          </a>
        </div>
      </div>
    </dialog>
  )
}
