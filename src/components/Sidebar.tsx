import { navLinks } from '../data';
import { contact } from '../data';

interface Props {
  active: string;
}

export default function Sidebar({ active }: Props) {
  return (
    <nav className="index" aria-label="Section navigation">
      <div className="index-top">
        <div className="id mono">RB / 2026</div>
        <h1>
          Raj
          <br />
          Bhadani
        </h1>
        <ul className="index-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? 'is-active' : undefined}
                aria-current={active === link.href.slice(1) ? 'true' : undefined}
              >
                <span className="n">{link.num}</span> {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="index-bottom">
        <a href={contact.github} target="_blank" rel="noreferrer">
          github.com/RajBhadani ↗
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          linkedin.com/in/raj-bhadani ↗
        </a>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <div className="status-dot">Open to internships</div>
      </div>
    </nav>
  );
}
