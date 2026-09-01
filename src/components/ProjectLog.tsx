import { projectLog } from '../data';

export default function ProjectLog() {
  return (
    <section id="projects">
      <div className="eyebrow mono">03 — PROJECT LOG</div>
      <h2 className="section-title">Everything else, logged honestly</h2>
      <p className="log-note">
        These went through the same pipeline — cleaning, modeling, evaluation — but the writeups
        don't carry a benchmark number yet. Listed here rather than dressed up, until each has a
        metric worth standing behind.
      </p>
      <div className="table-scroll">
        <table className="log">
          <thead>
            <tr>
              <th>Project</th>
              <th>What it does</th>
              <th>Stack</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {projectLog.map((row) => (
              <tr key={row.project}>
                <td>{row.project}</td>
                <td>{row.what}</td>
                <td className="mono">{row.stack}</td>
                <td className="pending">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
