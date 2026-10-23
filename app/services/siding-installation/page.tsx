// Siding installation, redesign 22 October 2026. Words and quotes carried over
// verbatim from the v1 page (proof-checked); layout from components/site.
// Hero photos are public-domain Wikimedia stock (stock-manifest.md): the alt text
// describes the siding and never calls them Trinity jobs.
import type { ReactNode } from "react";
import { Site, PageHero, Band, Section, Cards, FeatureQuote, Faq, Areas, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {
  title: { absolute: "Siding Contractor in Greenville, SC | Trinity Exteriors" },
  description: "Siding installation and replacement across Greenville and the Upstate. Free estimates, storm-damaged siding inspected, roof, gutters and siding from one crew.",
  alternates: { canonical: "/services/siding-installation/" },
};

const URL = "https://trinityext.com/services/siding-installation/";
const PLACES = ["Greenville", "Spartanburg", "Anderson", "Greenwood", "Simpsonville", "Greer", "Easley", "Travelers Rest"];

// FAQ answers as parts: plain text, or [label, href] for an inline link.
type Part = string | [string, string];
const faqs: { q: string; a: Part[] }[] = [
  { q: "Is the siding estimate free?", a: ["Yes. The estimate costs nothing, and you get the price explained before any work starts."] },
  { q: "What if a storm damaged my siding?", a: ["We'll inspect the siding, show you the damage and can be there when the insurance adjuster visits. 30 of our Google reviews mention help with insurance. If the same storm hit the roof, see ", ["storm damage roofing", "/services/storm-damage-roofing/"], "."] },
  { q: "Can you do the siding at the same time as a new roof?", a: ["Yes. One customer had us put on a new roof and new gutters, then replace some of the siding, all on the same house. See ", ["roofing", "/services/roofing/"], " and ", ["seamless gutters", "/services/seamless-gutters/"], "."] },
  { q: "How much does new siding cost in Greenville?", a: ["It depends on how much of the house is being covered, the siding you choose, and how much damaged wall or trim has to be fixed first. You get the number after the free estimate."] },
  { q: "Do you replace one damaged section, or the whole house?", a: ["Either. The estimate shows how much of the siding is damaged, and you decide from there."] },
  { q: "What about rotted fascia and soffit?", a: ["That's its own job, with its own page: ", ["fascia and soffit repair", "/services/fascia-and-soffit-repair/"], "."] },
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
    { "@type": "Service", name: "Siding installation", serviceType: "Siding installation and replacement", url: URL, provider: { "@id": business["@id"] }, areaServed: PLACES.map((p) => ({ "@type": "City", name: `${p}, SC` })) },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: text(f.a) } })) },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://trinityext.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://trinityext.com/services/" },
      { "@type": "ListItem", position: 3, name: "Siding installation", item: URL },
    ] },
  ],
};

export default function Page() {
  return (
    <Site>
      <JsonLd data={schema} />
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Siding installation" }]}
        eyebrow="Siding · Greenville, SC"
        title="Siding Contractor in Greenville, SC"
        lead="Trinity Exteriors installs and replaces siding on homes across Greenville and the Upstate. Every job starts with a free estimate, and you'll see the cost before any work begins. If hail or wind damaged the siding, we'll inspect it, show you the damage and can be there when the adjuster visits. We also do roofs and gutters, so one company can handle the whole outside of the house."
        cta="Get my free estimate"
        ticks={["Free siding estimate", "Storm damage inspected and shown to you", "Roof, gutters and siding from one company"]}
        main={{ src: "/images/stock/siding-blue-fiber-cement-ranch-home-aerial.webp", alt: "Blue lap siding on a ranch home, seen from above" }}
        second={{ src: "/images/stock/siding-beige-vinyl-lap-two-story-close-up.webp", alt: "Beige vinyl lap siding on a two-story home, close up" }}
        note={{ quote: "Replaced some of our siding. … I thunk our house looks brand new.", cite: "Deborah H., Google review" }}
      />

      <Band items={[
        { big: "5.0", text: "Google rating, from 106 Google reviews." },
        { big: "30", text: "Google reviews mention insurance help." },
        { big: "Mon–Fri", text: "8am–6pm, from our Rutherford Road office." },
      ]} />

      <Section eyebrow="The result" title="What you're left with" intro="A house that looks new from the curb, and one company that handled the roof, the gutters and the siding. Here's one customer, word for word.">
        <FeatureQuote
          eyebrow="Roof, gutters and siding · May 2026 · via Google"
          quote="Replaced some of our siding. … I thunk our house looks brand new."
          cite="Deborah H."
          img={{ src: "/images/roof-replacement-charcoal-shingles-tan-craftsman-home.webp", alt: "A Trinity roof on a tan craftsman home in the Upstate" }}
        />
      </Section>

      <Section tone="sand" eyebrow="What's included" title="What comes with every siding job" intro="Every house is different, so the price comes after we've seen yours. You'll know what it covers before work starts.">
        <div className="t-split">
          <Cards items={[
            { title: "Free estimate", text: "A free estimate before any work." },
            { title: "Storm damage shown", text: "Storm damage shown to you, with someone there for the adjuster visit." },
            { title: "One company", text: "Roof, gutters and siding handled by one company." },
            { title: "A local office", text: "An office on Rutherford Road in Greenville." },
          ]} />
          <Pic src="/images/stock/siding-vinyl-row-houses-tan-and-white.webp" alt="Tan and white vinyl siding on two neighbouring houses" />
        </div>
      </Section>

      <Section tight eyebrow="Where we work" title="Areas we serve">
        <div className="t-split">
          <Areas text="We install and replace siding across Greenville and the Upstate from our Rutherford Road office." places={PLACES} />
          <Wide src="/images/roof-replacement-brown-shingles-brick-colonial-teal-shutters.webp" alt="A Trinity roof on a brick colonial with teal shutters in the Upstate" />
        </div>
      </Section>

      <Section tone="sand" eyebrow="Questions" title="Siding questions, answered" intro="The things Greenville homeowners ask us about siding.">
        <Faq items={faqs.slice(0, 4).map((f, i) => ({ q: f.q, a: <p>{render(f.a)}</p>, open: i === 0 }))} />
        <Wide src="/images/stock/siding-blue-fiber-cement-ranch-home-aerial.webp" alt="Blue lap siding on a ranch home, seen from above" />
        <Faq items={faqs.slice(4).map((f) => ({ q: f.q, a: <p>{render(f.a)}</p> }))} />
      </Section>

      <div style={{ paddingTop: 104 }} />
      <CtaForm title="Ready when you are" text="Book a free siding estimate, or call and we'll set a time. The neighbours will notice before you do." project="Siding, gutters or trim" />
    </Site>
  );
}
