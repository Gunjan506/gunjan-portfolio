import { useMemo, useState } from 'react'
import { courses } from '../data/content.js'
import Icon from './Icon.jsx'
import '../styles/demo.css'

// A small working demo based on the course listing in the Rama Technical Institute project.
export default function CourseSearchDemo() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return courses
    return courses.filter((c) => `${c.name} ${c.duration}`.toLowerCase().includes(q))
  }, [query])

  return (
    <figure className="demo" data-spot>
      <div className="demo-bar" aria-hidden="true">
        <span className="demo-dot" />
        <span className="demo-dot" />
        <span className="demo-dot" />
        <span className="demo-url">rama-technical-institute.vercel.app</span>
      </div>

      <div className="demo-body">
        <p className="demo-title">Explore courses</p>

        <label className="demo-search">
          <span className="sr-only">Search courses</span>
          <Icon name="search" size={16} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try “excel” or “6 months”"
            autoComplete="off"
          />
        </label>

        <p className="demo-count" aria-live="polite">
          {results.length} of {courses.length} courses
        </p>

        <ul className="demo-list">
          {results.map((c) => (
            <li key={c.name} className="demo-row">
              <span>{c.name}</span>
              <span className="demo-duration">{c.duration}</span>
            </li>
          ))}
          {results.length === 0 && <li className="demo-empty">No course matches “{query}”.</li>}
        </ul>

        <p className="demo-foot">Eligibility: 10th Pass</p>
      </div>

      <figcaption className="demo-caption">
        Interactive demo based on the course listing in my Rama Technical Institute project.
      </figcaption>
    </figure>
  )
}
