import { contact } from '../data';

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="eyebrow mono">07 — CONTACT</div>
        <div className="contact-big">
          Open to ML/AI internships
          <br />
          and research collaborations.
        </div>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone}`}>+91 95727 68016</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 Raj Bhadani</span>
        <span>New Delhi, India</span>
      </footer>
    </>
  );
}
