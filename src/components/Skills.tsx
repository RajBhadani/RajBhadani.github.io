import { skillGroups } from '../data';

export default function Skills() {
  return (
    <section id="skills">
      <div className="eyebrow mono">05 — STACK</div>
      <h2 className="section-title">Tools actually used across the projects above</h2>
      <div className="skill-grid">
        {skillGroups.map((g) => (
          <div className="skill-group" key={g.k}>
            <div className="k mono">{g.k}</div>
            <div className="items">
              {g.items.map((i) => (
                <span key={i}>{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
