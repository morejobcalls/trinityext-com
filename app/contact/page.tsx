// Contact, redesign 22 October 2026. NAP = the Google profile (confirmed by Spencer 22 Oct).
import { Site, Section, Rating, Ticks, Cards, LeadForm, JsonLd, business, Photos } from "@/components/site";

export const metadata = {
  title: { absolute: "Contact Trinity Exteriors | Free Estimates in Greenville, SC" },
  description: "Call (864) 844-7777 or send the form for a free estimate on your roof, deck, siding, gutters or remodel in Greenville and the Upstate. Open Monday to Friday, 8am to 6pm.",
  alternates: { canonical: "/contact/" },
};

const HOURS = [
  ["Monday", "8:00am – 6:00pm"], ["Tuesday", "8:00am – 6:00pm"], ["Wednesday", "8:00am – 6:00pm"],
  ["Thursday", "8:00am – 6:00pm"], ["Friday", "8:00am – 6:00pm"], ["Saturday", "Closed"], ["Sunday", "Closed"],
];
const MAP = "https://www.google.com/maps/search/?api=1&query=1801+Rutherford+Rd+Suite+109A,+Greenville,+SC+29609";

export default function Page() {
  return (
    <Site>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", url: "https://trinityext.com/contact/", about: business }} />

      <section className="t-pagehero">
        <div className="t-wrap t-hero-grid">
          <div>
            <nav className="t-crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Contact</nav>
            <span className="t-eyebrow">Contact</span>
            <h1 style={{ fontSize: "clamp(38px, 4.8vw, 62px)", margin: "16px 0 22px" }}>Tell us what needs doing</h1>
            <p className="t-lead">Inspections and estimates are free. Call during business hours, or send the form any time and we will call you back.</p>
            <div className="t-hero-ctas">
              <a className="t-btn t-btn-primary" href="tel:+18648447777">Call (864) 844-7777</a>
              <a className="t-btn t-btn-ghost" href="#enquiry">Send the form instead</a>
            </div>
            <Rating />
            <div style={{ marginTop: 22 }}><Ticks items={["Free inspections", "Free estimates", "Insurance claim help"]} /></div>
          </div>
          <div id="enquiry" style={{ borderRadius: 24, overflow: "hidden", border: "1px solid var(--t-line)", boxShadow: "0 30px 60px -30px rgba(11, 35, 64, .35)" }}>
            <div style={{ background: "var(--t-navy)", color: "#fff", padding: "22px 44px" }}>
              <span className="t-eyebrow" style={{ color: "var(--t-sky)" }}>Send an enquiry</span>
              <h2 style={{ color: "#fff", fontSize: 26, marginTop: 8 }}>Five fields and we will call you back</h2>
            </div>
            <LeadForm email />
          </div>
        </div>
      </section>

      <Section tone="sand" tight>
        <Cards items={[
          { title: "24-48 hrs", text: "to get on site, often" },
          { title: "8am–6pm", text: "Monday to Friday" },
          { title: "7 counties", text: "across the Upstate" },
          { title: "5.0", text: "from 106 Google reviews" },
        ]} />
      </Section>

      <Section tight>
        <Photos items={[
          { src: "/images/roof-replacement-charcoal-shingles-cape-cod-dormers.webp", alt: "New charcoal roof on a Cape Cod home with dormers" },
          { src: "/images/deck-stairs-composite-treads-paver-patio.webp", alt: "Composite deck stairs down to a paver patio" },
          { src: "/images/screened-aluminum-patio-enclosure-brick-ranch.webp", alt: "Screened aluminum patio enclosure on a brick ranch" },
        ]} />
      </Section>

      <Section eyebrow="Reach us" title="Call, write or come by">
        <div className="t-split">
          <div className="t-prose">
            <p><strong>Phone:</strong> <a href="tel:+18648447777">(864) 844-7777</a></p>
            <p><strong>Office:</strong> 1801 Rutherford Rd Suite 109A, Greenville, SC 29609. <a href={MAP} target="_blank" rel="noopener">Open in Google Maps</a></p>
            <p>Serving Greenville, Spartanburg, Anderson and the Upstate.</p>
            <p>We only call about this job.</p>
          </div>
          <div className="t-prose">
            <h3 style={{ marginTop: 0 }}>Opening hours</h3>
            <div className="t-table-wrap">
              <table><tbody>{HOURS.map(([d, h]) => <tr key={d}><th scope="row">{d}</th><td>{h}</td></tr>)}</tbody></table>
            </div>
          </div>
        </div>
      </Section>
    </Site>
  );
}
