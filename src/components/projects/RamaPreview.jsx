import '../../styles/demo.css'
import { useState } from 'react'
import { courses, featuredProject } from '../../data/content.js'

const tabs = [
  { id: 'courses', label: 'Courses' },
  { id: 'admission', label: 'Admission' },
  { id: 'admin', label: 'Admin' },
]

// Illustrated preview of the interface. If featuredProject.image is set, a real screenshot is shown instead.
export default function RamaPreview() {
  const [tab, setTab] = useState('courses')

  if (featuredProject.image) {
    return (
      <figure className="preview">
        <img src={featuredProject.image} alt="Screenshot of the Rama Technical Institute website" loading="lazy" />
      </figure>
    )
  }

  return (
    <figure className="preview">
      <div className="preview-frame">
        <div className="demo-bar" aria-hidden="true">
          <span className="demo-dot" />
          <span className="demo-dot" />
          <span className="demo-dot" />
          <span className="demo-url">rama-technical-institute.vercel.app</span>
        </div>

        <div className="preview-tabs" role="tablist" aria-label="Preview screens">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className="preview-tab"
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="preview-screen" role="tabpanel" key={tab}>
          {tab === 'courses' && (
            <div className="pv-courses">
              {courses.slice(0, 6).map((c) => (
                <div key={c.name} className="pv-course">
                  <strong>{c.name}</strong>
                  <span>{c.duration}</span>
                </div>
              ))}
            </div>
          )}

          {tab === 'admission' && (
            <div className="pv-form">
              <p className="pv-heading">Admission form</p>
              <div className="pv-field"><span>Full name</span><i /></div>
              <div className="pv-field"><span>Phone</span><i /></div>
              <div className="pv-field"><span>Course</span><i /></div>
              <div className="pv-submit">Submit application</div>
            </div>
          )}

          {tab === 'admin' && (
            <div className="pv-admin">
              <div className="pv-admin-top">
                <p className="pv-heading">Admissions</p>
                <span className="pv-search" />
              </div>
              {[0, 1, 2, 3].map((r) => (
                <div key={r} className="pv-row">
                  <i /><i /><i />
                  <span className="pv-actions"><b>Edit</b><b>Delete</b></span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <figcaption>Simplified illustration of the site's interface.</figcaption>
    </figure>
  )
}
