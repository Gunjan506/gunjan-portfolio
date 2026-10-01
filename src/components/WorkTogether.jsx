import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import '../styles/work-together.css'

export default function WorkTogether() {
  return (
    <section className="section work-together" aria-labelledby="wt-title">
      <div className="container">
        <Reveal className="wt-card" data-spot>
          <h2 id="wt-title">Let's Work Together</h2>
          <p>
            Whether it's a software development opportunity or a website you need built or improved,
            I'd be glad to hear about it.
          </p>
          <a href="#contact" className="btn btn-primary">
            Discuss a Project <Icon name="arrow-right" size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
