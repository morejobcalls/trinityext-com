// Seamless gutters, redesign 22 October 2026. Words and quotes carried over
// verbatim from the v1 page (proof-checked); layout from components/site.
import type { ReactNode } from "react";
import { Site, PageHero, Band, Section, Cards, FeatureQuote, Faq, Areas, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {
  title: { absolute: "Seamless Gutters in Greenville, SC | Trinity Exteriors" },
  description: "Seamless gutter installation and gutter repair across Greenville and the Upstate, on their own or with a roof job. Help with the insurance claim after a storm. 5.0 from 106 Google reviews.",
  alternates: { canonical: "/services/seamless-gutters/" },
};

const URL = "https://trinityext.com/services/seamless-gutters/";
const PLACES = ["Greenville", "Spartanburg", "Anderson", "Greenwood", "Simpsonville", "Greer", "Easley", "Travelers Rest"];

// FAQ answers as parts: plain text, or [label, href] for an inline link.
type Part = string | [string, string];
const faqs: { q: string; a: Part[] }[] = [
  { q: "How much do new gutters cost in Greenville?", a: ["It depends on how many feet of gutter the house needs, how many downspouts, and whether the fascia behind them needs repair. You get the price after a free look, before any work starts."] },
  { q: "Will insurance pay for storm-damaged gutters?", a: ["It depends on your policy and the damage. If hail or wind hit the house, we inspect the roof and gutters, show you the damage and help with the claim. 30 of our Google reviews mention insurance help. More on that on our ", ["storm damage roofing", "/services/storm-damage-roofing/"], " page."] },
  { q: "What are seamless gutters?", a: ["Seamless gutters run in one continuous piece along each stretch of roof edge, instead of short sections joined together. Fewer joints means fewer places for water to leak out."] },
  { q: "Do you repair gutters, or only replace them?", a: ["Both. We repair gutters and install new seamless gutters. After we've looked, we'll tell you which one your house needs."] },
  { q: "Can you do the gutters with a new roof?", a: ["Yes. Customers have had the roof and gutters done together. “TRC put in a new roof on our house and new gutters.” (Deborah H.) See our ", ["roofing", "/services/roofing/"], " page for the roof side."] },
  { q: "What if water still gets behind the gutter?", a: ["Call us. When one customer had water slipping behind a new gutter into the soffit, we kept coming back until it stopped. “They kept their promise and took care of the problem to our satisfaction.” (Marvin S.) Rotted wood behind a gutter is a ", ["fascia and soffit repair", "/services/fascia-and-soffit-repair/"], "."] },
  { q: "What areas do you serve?", a: ["Greenville and the Upstate, from our office at 1801 Rutherford Rd in Greenville. That includes Spartanburg, Anderson, Greenwood, Simpsonville, Greer, Easley and Travelers Rest."] },
];
const Pic = ({ src, alt }: { src: string; alt: string }) => <div className="t-feature-img"><img src={src} alt={alt} loading="lazy" /></div>;
const Wide = ({ src, alt }: { src: string; alt: string }) => <div className="t-article-hero" style={{ margin: "28px 0" }}><img src={src} alt={alt} loading="lazy" /></div>;
const render = (parts: Part[]): ReactNode => parts.map((p, i) => (typeof p === "string" ? p : <a key={i} href={p[1]}>{p[0]}</a>));
const text = (parts: Part[]) => parts.map((p) => (typeof p === "string" ? p : p[0])).join("");

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { ...business, alternateName: "Trinity Restoration And Contracting Inc" },
    { "@type": "Service", name: "Seamless gutters", serviceType: "Seamless gutter installation and gutter repair", url: URL, provider: { "@id": business["@id"] }, areaServed: PLACES.map((p) => ({ "@type": "City", name: `${p}, SC` })) },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: text(f.a) } })) },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://trinityext.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://trinityext.com/services/" },
      { "@type": "ListItem", position: 3, name: "Seamless gutters", item: URL },
    ] },
  ],
};

export default function Page() {
  return (
    <Site>
      <JsonLd data={schema} />
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Seamless gutters" }]}
        eyebrow="Gutters · Greenville, SC"
        title="Seamless Gutters in Greenville, SC"
        lead="Trinity Exteriors installs seamless gutters and repairs gutters across Greenville and the Upstate. We do them on their own or alongside a roof job, so the roof edge, fascia and gutters are finished together. You'll see the cost before any work begins. If a storm damaged the gutters, we'll help with the insurance claim."
        cta="Book my estimate"
        ticks={["Free inspection and estimate", "Help with the insurance claim", "Done with your roof or on their own"]}
        main={{ src: "/images/roof-replacement-charcoal-shingles-cape-cod-dormers.webp", alt: "White gutters along the eaves of a Cape Cod home under a new charcoal roof" }}
        second={{ src: "/images/eave-detail-membrane-underlayment-gutter.webp", alt: "White gutter and fascia under the roof edge of a brick home during a Trinity roof job" }}
        note={{ quote: "TRC put in a new roof on our house and new gutters.", cite: "Deborah H., Google review" }}
      />

      <Band items={[
        { big: "5.0", text: "Google rating, from 106 Google reviews." },
        { big: "30", text: "Google reviews mention insurance help." },
        { big: "Mon–Fri", text: "8am–6pm, from our Rutherford Road office." },
      ]} />

      <Section eyebrow="The result" title="What you're left with" intro={<>Gutters that carry the rain off the roof and away from the house, instead of down the <a href="/services/siding-installation/">siding</a>. Here's one customer, word for word.</>}>
        <FeatureQuote
          eyebrow="Gutter and roof repair after storm damage · August 2026 · via Google"
          quote="I highly recommend Trinity Restoration and Contracting for all your roofing and gutter needs. These guys and gals are true professionals."
          cite="Victoria"
          img={{ src: "/images/roof-replacement-brown-shingles-brick-colonial-teal-shutters.webp", alt: "White gutters and a downspout on a brick colonial with teal shutters under a new brown roof" }}
        />
      </Section>

      <Section tone="sand" eyebrow="What's included" title="What comes with your gutters" intro="Every house drains differently, so the price comes after we've looked at yours. You'll know what it covers before work starts.">
        <div className="t-split">
          <Cards items={[
            { title: "Free look", text: "A free look at your gutters, fascia and roof edge." },
            { title: "Install or repair", text: "Seamless gutter installation or repair." },
            { title: "Fascia and soffit", text: "Fascia and soffit repair if the wood behind the gutter has rotted." },
            { title: "Storm claim help", text: "Help with the insurance claim after storm damage." },
          ]} />
          <Pic src="/images/tear-off-bare-osb-with-one-new-sheet.webp" alt="White gutter and downspout on the corner of a home mid roof job" />
        </div>
      </Section>

      <Section tight eyebrow="Where we work" title="Areas we serve">
        <div className="t-split">
          <Areas text="We fit and fix gutters across Greenville and the Upstate from our Rutherford Road office." places={PLACES} />
          <Wide src="/images/roof-replacement-charcoal-shingles-paver-patio-aerial.webp" alt="Charcoal shingle roof over a paver patio in the Upstate" />
        </div>
      </Section>

      <Section tone="sand" eyebrow="Questions" title="Gutter questions, answered" intro="The things Greenville homeowners ask us most, answered.">
        <Faq items={faqs.slice(0, 4).map((f, i) => ({ q: f.q, a: <p>{render(f.a)}</p>, open: i === 0 }))} />
        <Wide src="/images/eave-detail-membrane-underlayment-gutter.webp" alt="Ice and water barrier membrane at the eave above the gutter" />
        <Faq items={faqs.slice(4).map((f) => ({ q: f.q, a: <p>{render(f.a)}</p> }))} />
      </Section>

      <div style={{ paddingTop: 104 }} />
      <CtaForm title="Ready when you are" text="Book a free estimate, or call and we'll set a time. The next downpour is already on its way." project="Siding, gutters or trim" />
    </Site>
  );
}
