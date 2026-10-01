import { site, socials } from '../data/content.js'
import '../styles/footer.css'

const links = [
  { label: 'GitHub', href: socials.github },
  { label: 'LinkedIn', href: socials.linkedin },
  { label: 'LeetCode', href: socials.leetcode },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{site.name}</p>
          <p className="footer-role">{site.shortRole}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="footer-links">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer-copy">© {new Date().getFullYear()} Gunjan Gupta. All rights reserved.</p>
      </div>
    </footer>
  )
}
