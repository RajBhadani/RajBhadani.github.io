import { experience } from '../data';

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="eyebrow mono">04 — EXPERIENCE</div>
      <h2 className="section-title">Work history</h2>
      <div className="tl">
        {experience.map((e) => (
          <div className="tl-item" key={e.role + e.when}>
            <div className="when mono">{e.when}</div>
            <h3>{e.role}</h3>
            <div className="org">{e.org}</div>
            <ul>
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
