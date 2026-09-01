import { navLinks } from '../data';

interface Props {
  active: string;
}

export default function MobileNav({ active }: Props) {
  return (
    <nav className="mobile-nav" aria-label="Section navigation (mobile)">
      <div className="mobile-nav-scroll">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href.slice(1) ? 'is-active' : undefined}
            aria-current={active === link.href.slice(1) ? 'true' : undefined}
          >
            <span className="n">{link.num}</span> {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
