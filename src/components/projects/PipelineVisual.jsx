const steps = ['Dataset', 'Preprocessing', 'Decision Tree training', 'Prediction']

export default function PipelineVisual() {
  return (
    <ol className="pipeline" aria-label="Project pipeline">
      {steps.map((s, i) => (
        <li key={s} className="pipeline-step" style={{ '--i': i }}>
          <span className="pipeline-num">{i + 1}</span>
          {s}
        </li>
      ))}
    </ol>
  )
}
