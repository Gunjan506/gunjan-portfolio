import Icon from '../Icon.jsx'
import PipelineVisual from './PipelineVisual.jsx'
import WeatherVisual from './WeatherVisual.jsx'

const visuals = { pipeline: PipelineVisual, weather: WeatherVisual }

export default function ProjectCard({ project }) {
  const Visual = visuals[project.visual]

  return (
    <article className="project-card card-lift" data-spot>
      <div className="project-visual">{Visual && <Visual />}</div>

      <div className="project-body">
        <span className="chip chip-plain">{project.category}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.learned && <p className="project-learned">{project.learned}</p>}

        <ul className="project-stack" aria-label="Technologies">
          {project.stack.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>

        {(project.github || project.live) && (
          <div className="btn-row">
            {project.live && (
              <a className="btn btn-primary btn-sm" href={project.live} target="_blank" rel="noreferrer">
                Live Demo <Icon name="external" size={14} />
              </a>
            )}
            {project.github && (
              <a className="btn btn-ghost btn-sm" href={project.github} target="_blank" rel="noreferrer">
                <Icon name="github" size={15} /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
