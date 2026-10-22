import { site } from "@/lib/site.config";
import { Site, Section } from "@/components/site";

// A dead end loses a customer who was already looking for you.
export default function NotFound() {
  return (
    <Site>
      <Section>
        <div style={{ maxWidth: 680 }}>
          <span className="t-eyebrow">Page not found</span>
          <h1 style={{ fontSize: "clamp(38px, 4.8vw, 60px)", margin: "16px 0 20px" }}>That page has moved or never existed</h1>
          <p className="t-lead">Here's where most people were heading:</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <a className="t-btn t-btn-primary" href="/services/">Services</a>
            <a className="t-btn t-btn-ghost" href="/quote/">Get a free estimate</a>
            <a className="t-btn t-btn-ghost" href="/reviews/">Reviews</a>
            <a className="t-btn t-btn-ghost" href="/contact/">Contact</a>
          </div>
          <p style={{ marginTop: 28 }}><a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>Or just call {site.phone}</a></p>
        </div>
      </Section>
    </Site>
  );
}
