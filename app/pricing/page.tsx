// Pricing, redesign 22 October 2026. Honest by design: no prices are published (none approved).
import { Site, Section, Ticks, CtaForm, FeatureQuote } from "@/components/site";

export const metadata = {
  title: { absolute: "How We Price a Job in Greenville, SC | Trinity Exteriors" },
  description: "How Trinity Exteriors prices a roof, deck or remodel: a free visit, then a written estimate with the full price before work starts. Insurance claims too.",
  alternates: { canonical: "/pricing/" },
};

export default function Page() {
  return (
    <Site>
      <section className="t-pagehero">
        <div className="t-wrap">
          <nav className="t-crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Pricing</nav>
          <span className="t-eyebrow">What it costs</span>
          <h1 style={{ fontSize: "clamp(38px, 4.8vw, 62px)", margin: "16px 0 22px" }}>How we price a job</h1>
          <p className="t-lead" style={{ maxWidth: 680 }}>A fair price, in writing, before anything starts. No quotes from a phone call, no surprises on the last day.</p>
        </div>
      </section>

      <Section tight>
        <div className="t-split">
          <div className="t-prose">
            <p>Every roof is different, so we do not quote from a phone call. We come out, inspect the roof for free, and give you a written estimate with the full price and the shingle you picked before any work starts.</p>
            <p>If storm damage is covered by your insurance, the claim pays for most of the job and you pay your deductible. We help with the claim from the inspection on.</p>
            <p>Decks and patio covers are priced the same way: a free visit, then a written quote.</p>
            <p>Want a ballpark first? Read <a href="/blog/how-much-does-a-new-roof-cost/">what a new roof costs</a> or <a href="/blog/deck-cost-per-square-foot/">what a deck costs per square foot</a>.</p>
          </div>
          <div className="t-card">
            <h3>Every estimate comes with</h3>
            <Ticks items={["A free visit to see the job", "The full price in writing", "Your materials named on the quote", "No work until you say yes"]} />
            <p style={{ marginTop: 20 }}><a className="t-btn t-btn-primary" href="/contact/">Book your free estimate &rarr;</a></p>
          </div>
        </div>
        <p style={{ marginTop: 32 }}><a href="/">&larr; Back to the site</a></p>
      </Section>

      <Section tone="sand">
        <FeatureQuote
          eyebrow="What customers say about the price"
          quote="No high pressure sales. No hidden costs. Just a quality job at a fair price."
          cite="Gene S., Google review"
          img={{ src: "/images/roof-replacement-gray-shingles-brick-front-close-aerial.webp", alt: "New gray roof on a brick home" }}
          chips={["48 of 57 rated the price great or reasonable", "Price in writing first"]}
        />
      </Section>

      <CtaForm />
    </Site>
  );
}
