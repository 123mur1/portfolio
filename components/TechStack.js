import skills from '../data/skills.json'

function StackGroup({ title, items }) {
  if (!Array.isArray(items) || items.length === 0) return null
  return (
    <div className="stack-group">
      <h3>{title}</h3>
      <div className="stack-grid">
        {items.map((s) => (
          <span className="stack-item" key={s.name}>
            <span className="stack-badge" aria-hidden="true">{s.short}</span>
            <span className="stack-name">{s.name}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="stack" className="stack">
      <h2>Tech stack</h2>
      <p className="muted">Frontend and backend tools I build with.</p>
      <div className="stack-groups">
        <StackGroup title="Frontend" items={skills.frontend} />
        <StackGroup title="Backend" items={skills.backend} />
        <StackGroup title="Database" items={skills.database} />
      </div>
    </section>
  )
}
