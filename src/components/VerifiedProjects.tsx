import { verifiedProjects } from '../data';
import ProjectViz from './ProjectViz';

export default function VerifiedProjects() {
  return (
    <section id="verified">
      <div className="eyebrow mono">02 — VERIFIED RESULTS</div>
      <h2 className="section-title">Projects with a real benchmark behind them</h2>

      {verifiedProjects.map((p) => (
        <div className="proj" key={p.title}>
          <div className="proj-body">
            <div className="tag mono">{p.tag}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="stack">{p.stack}</div>
          </div>
          <div className="proj-viz">
            <ProjectViz kind={p.viz} />
            <div className="viz-caption">
              <span>{p.captionLeft}</span>
              <span>{p.captionRight}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
