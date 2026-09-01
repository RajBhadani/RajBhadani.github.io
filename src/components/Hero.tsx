import { metrics, contact } from '../data';

export default function Hero() {
  return (
    <section id="top">
      <div className="hero-line1 mono">ML / AI Research — New Delhi, India</div>
      <h1 className="hero-name">Models that show their work.</h1>
      <p className="hero-desc">
        B.Sc. Computer Science student <b>(Deshbandhu College, DU, 2022–2026)</b> researching
        deepfake detection under social-media compression at <b>NIT Kurukshetra</b>. Background
        across computer vision, time-series forecasting, and network analysis — built with
        PyTorch, scikit-learn, and NetworkX.
      </p>
      <div className="hero-actions">
        <a className="btn primary" href={`mailto:${contact.email}`}>
          Email me
        </a>
        <a className="btn" href={contact.github} target="_blank" rel="noreferrer">
          View GitHub
        </a>
        <a className="btn" href={contact.linkedin} target="_blank" rel="noreferrer">
          View LinkedIn
        </a>
      </div>
      <div className="metric-row">
        {metrics.map((m) => (
          <div className="metric" key={m.lbl}>
            <div className="val mono">{m.val}</div>
            <div className="lbl">{m.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
