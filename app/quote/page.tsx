// Quote, redesign 22 October 2026: one job, the form, above the fold.
import { Site, Rating, Ticks, LeadForm } from "@/components/site";

export const metadata = {
  title: { absolute: "Get a Free Estimate in Greenville, SC | Trinity Exteriors" },
  description: "Book a free visit and written estimate from Trinity Exteriors: roofing, storm claims, gutters, siding, decks, patio covers and remodels across the Upstate.",
  alternates: { canonical: "/quote/" },
};

export default function Page() {
  return (
    <Site>
      <section className="t-pagehero">
        <div className="t-wrap t-hero-grid" style={{ alignItems: "start" }}>
          <div>
            <span className="t-eyebrow">Start here</span>
            <h1 style={{ fontSize: "clamp(38px, 4.8vw, 62px)", margin: "16px 0 22px" }}>Get a free estimate</h1>
            <p className="t-lead">Tell us what is going on, inside or out. We call you back to set a time, take a look for free, and give you a written estimate. Rather talk now? Call <a href="tel:+18648447777">(864) 844-7777</a>, Monday to Friday, 8am to 6pm.</p>
            <div style={{ margin: "28px 0" }}>
              <Ticks items={["A free visit and a written estimate", "The price in writing before any work starts", "No pressure, no obligation"]} />
              <div className="t-feature-img" style={{ aspectRatio: "4 / 3", marginTop: 28 }}><img src="/images/deck-low-gray-composite-navy-house-concrete-pad.webp" alt="Low gray composite deck on a navy house" loading="lazy" /></div>
            </div>
            <Rating />
            <p style={{ marginTop: 28 }}><a href="/">&larr; Back to the site</a></p>
          </div>
          <div style={{ borderRadius: 24, overflow: "hidden", border: "1px solid var(--t-line)", boxShadow: "0 30px 60px -30px rgba(11, 35, 64, .35)" }}>
            <LeadForm email />
          </div>
        </div>
      </section>
    </Site>
  );
}
