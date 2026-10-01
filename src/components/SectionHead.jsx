import Reveal from './Reveal.jsx'

export default function SectionHead({ eyebrow, title, text }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </Reveal>
  )
}
