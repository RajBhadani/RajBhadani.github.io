import { nowFacts } from '../data';

export default function CurrentWork() {
  return (
    <section id="now">
      <div className="eyebrow mono">01 — CURRENT WORK</div>
      <h2 className="section-title">Deepfake detection under compression, NIT Kurukshetra</h2>
      <div className="now-grid">
        <div>
          <p>
            Summer Research Intern under <b>Dr. Nidhi Gupta</b>, working on real-time deepfake
            detection that holds up after social-media compression (JPEG, H.264) degrades the
            source video — the gap between lab accuracy and what actually survives a re-upload.
          </p>
          <p>
            Also architecting <b>SATYA-ASTRA</b>, a four-stage pipeline (ingest → detect → trace
            → respond) for attributing manipulated defence-related media, with a multilingual
            layer across 22 scheduled Indian languages via the Bhashini API.
          </p>
          <span className="flag mono">Status: submitted, not yet reviewed/funded</span>
          <p>
            SATYA-ASTRA has been <b>submitted</b> to the iDEX Open Challenge (Ministry of Defence,
            ₹1.5 Cr track). It has not been shortlisted, funded, or evaluated yet — that
            distinction matters if this comes up in an interview.
          </p>
        </div>
        <div className="facts">
          {nowFacts.map((f) => (
            <div className="fact-row" key={f.k}>
              <div className="k mono">{f.k}</div>
              <div className="v">{f.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
