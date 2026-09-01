import { leadership, education, certs } from '../data';

export default function MoreSection() {
  return (
    <section id="more">
      <div className="eyebrow mono">06 — LEADERSHIP / EDUCATION</div>
      <h2 className="section-title">Outside the notebook</h2>
      <div className="two-col">
        <div>
          {leadership.map((l) => (
            <div className="lead-item" key={l.role}>
              <div className="role">{l.role}</div>
              <div className="org">{l.org}</div>
              <p>{l.desc}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="edu-block">
            <div className="deg">{education.deg}</div>
            <div className="school">{education.school}</div>
            <div className="when mono">{education.when}</div>
          </div>
          <ul className="cert-list">
            {certs.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
