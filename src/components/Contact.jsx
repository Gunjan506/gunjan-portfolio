import { useState } from 'react'
import { site, socials, projectTypes } from '../data/content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import '../styles/contact.css'

const emptyForm = { name: '', email: '', message: '' }

export default function Contact({ projectType, onProjectTypeChange }) {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | mailto | error | unconfigured

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Honeypot: real visitors never fill this hidden field.
    if (e.target.elements.company?.value) return

    const payload = { ...form, projectType: projectType || 'Not specified' }

    // Preferred: a Formspree endpoint you've explicitly connected.
    if (site.formEndpoint) {
      setStatus('sending')
      try {
        const res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (res.ok) {
          setStatus('sent')
          setForm(emptyForm)
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
      return
    }

    // Fallback: FormSubmit (https://formsubmit.co) — needs no account, just your email.
    // The very first submission triggers a one-time "activate your form" email from
    // FormSubmit to contactEmail; click that link once and every submission after
    // works normally. This avoids depending on the visitor (or you) having a desktop
    // email app configured, which mailto: links require.
    if (site.contactEmail) {
      setStatus('sending')
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.contactEmail)}`, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: payload.name,
            email: payload.email,
            projectType: payload.projectType,
            message: payload.message,
            _subject: `Portfolio enquiry: ${payload.projectType}`,
          }),
        })
        if (res.ok) {
          setStatus('sent')
          setForm(emptyForm)
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
      return
    }

    setStatus('unconfigured')
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <Reveal className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h2>Get in touch</h2>
          <p className="section-text">
            Recruiter, hiring manager, or someone with a website or web application in mind — send a
            message and I'll get back to you.
          </p>

          <ul className="contact-links">
            <li>
              <a href={socials.github} target="_blank" rel="noreferrer">
                <Icon name="github" size={18} /> GitHub
              </a>
            </li>
            <li>
              <a href={socials.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" size={18} /> LinkedIn
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form className="contact-form card" onSubmit={handleSubmit} data-spot>
            <div className="field-row">
              <label className="field">
                <span>Name</span>
                <input name="name" type="text" required autoComplete="name" value={form.name} onChange={update} />
              </label>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" required autoComplete="email" value={form.email} onChange={update} />
              </label>
            </div>

            <label className="field">
              <span>Project type</span>
              <select value={projectType} onChange={(e) => onProjectTypeChange(e.target.value)}>
                <option value="">Select one</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={update}
                placeholder="Tell me a little about the role or project…"
              />
            </label>

            {/* Honeypot field for spam bots — hidden from people */}
            <input name="company" type="text" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true" />

            <button type="submit" className="btn btn-primary contact-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'} <Icon name="send" size={16} />
            </button>

            <p className={`contact-status ${status}`} role="status" aria-live="polite">
              {status === 'sent' && "Thanks — your message was sent. I'll get back to you soon."}
              {status === 'error' && 'Something went wrong. Please try again in a moment.'}
              {status === 'unconfigured' && 'The contact form is not connected yet. Please reach out on LinkedIn or GitHub.'}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
