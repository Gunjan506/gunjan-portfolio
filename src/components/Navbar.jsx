import { useEffect, useState } from 'react'
import { navLinks, site } from '../data/content.js'
import Icon from './Icon.jsx'
import '../styles/navbar.css'

export default function Navbar({ active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="nav-brand" onClick={close} aria-label={`${site.name} — home`}>
          <span className="nav-mark" aria-hidden="true">GG</span>
          <span className="nav-name">{site.name}</span>
        </a>

        <nav id="site-nav" className={`nav-links${open ? ' is-open' : ''}`} aria-label="Primary">
          <ul>
            {navLinks.map((link) => {
              const id = link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link"
                    aria-current={active === id ? 'true' : undefined}
                    onClick={close}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <a href="#contact" className="btn btn-ghost btn-sm nav-hire-mobile" onClick={close}>
            Let's Connect
          </a>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <a href="#contact" className="btn btn-ghost btn-sm nav-hire">
            Let's Connect
          </a>
          <button
            type="button"
            className="icon-btn nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
