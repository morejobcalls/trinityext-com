// Fascia and soffit repair, redesign 22 October 2026. Words and quotes carried
// over verbatim from the v1 page (proof-checked); layout from components/site.
import type { ReactNode } from "react";
import { Site, PageHero, Band, Section, Photos, Cards, FeatureQuote, Faq, Areas, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {
  title: { absolute: "Fascia Board Repair in Greenville, SC | Trinity Exteriors" },
  description: "Rotted fascia boards and soffit repaired or replaced across Greenville and the Upstate. Free inspection, the cost before any work starts, and the roof edge checked too. 5.0 from 106 Google reviews.",
  alternates: { canonical: "/services/fascia-and-soffit-repair/" },
};

const URL = "https://trinityext.com/services/fascia-and-soffit-repair/";
const PLACES = ["Greenville", "Spartanburg", "Anderson", "Greenwood", "Simpsonville", "Greer", "Easley", "Travelers Rest"];

// FAQ answers as parts: plain text, or [label, href] for an inline link.
type Part = string | [string, string];
const faqs: { q: string; a: Part[] }[] = [
  { q: "What's the difference between fascia and soffit?", a: ["Fascia is the board along the edge of the roof that your gutter is fastened to. Soffit is the panel underneath the overhang, between the fascia and the wall. Rot in one usually means water has reached the other."] },
  { q: "How much does fascia board repair cost?", a: ["It depends on how many feet of board are rotted, whether the decking behind it is damaged, and whether the gutter has to come down. You get the number after the free inspection, before any work starts. “They were up front about the process and costs and held true to that throughout the new roof project.” (Andy A.)"] },
  { q: "How do I know my fascia is rotting?", a: ["Look for paint peeling along the roof edge, wood that's soft or crumbling when you press it, and gutters pulling away from the house. Stains or gaps in the soffit are another sign. Gaps are also how birds and squirrels get into the attic."] },
  { q: "Why does fascia rot in the first place?", a: ["Water. Usually it's a gutter that overflows or has pulled loose, so water soaks the board behind it. A leak at the roof edge does the same thing from above. Fixing the board without fixing the water just books the same repair again."] },
  { q: "Do you fix fascia on its own, or only with a new roof?", a: ["Most of the fascia and soffit we fix turns up during a roof job, when the old shingles come off and the edge is easy to see. On one recent Piedmont roof, our crew “replaced damaged decking, rebuilt soffit and fascia” in the same job. If the roof edge is your only worry, call and tell us what you're seeing."] },
  { q: "Will my gutters have to come off?", a: ["If the board behind them is rotted, yes. The gutter is fastened to the fascia, so it comes down while the board is replaced. If the old gutters aren't worth putting back, we install ", ["seamless gutters", "/services/seamless-gutters/"], " on the same visit."] },
  { q: "Do you clean up after the job?", a: ["Our customers say so. Eight Google reviews mention the cleanup or the nail sweep. “They left the area so that you would never know that anything was done except for the look of the roof.” (Scott D.) The ", ["roofing page", "/services/roofing/"], " has more on how our roof jobs run."] },
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
    { "@type": "Service", name: "Fascia and soffit repair", serviceType: "Fascia board and soffit repair and replacement", url: URL, provider: { "@id": business["@id"] }, areaServed: PLACES.map((p) => ({ "@type": "City", name: `${p}, SC` })) },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: text(f.a) } })) },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://trinityext.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://trinityext.com/services/" },
      { "@type": "ListItem", position: 3, name: "Fascia and soffit repair", item: URL },
    ] },
  ],
};

export default function Page() {
  return (
    <Site>
      <JsonLd data={schema} />
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Fascia and soffit repair" }]}
        eyebrow="Fascia & soffit · Greenville, SC"
        title="Fascia Board Repair in Greenville, SC"
        lead="Trinity Exteriors repairs and replaces rotted fascia boards and soffit across Greenville and the Upstate. Most of that rot turns up while we're on a roof, so we check the roof edge, the decking behind it and the gutters in one visit. The inspection is free, and you'll see the cost before any work begins."
        cta="Book my inspection"
        ticks={["Free inspection", "Decking behind it checked too", "Seamless gutters on the same visit"]}
        main={{ src: "/images/eave-detail-membrane-underlayment-gutter.webp", alt: "Roof edge on a brick home, with the gutter and fascia board below the new underlayment" }}
        second={{ src: "/images/replaced-osb-sheet-with-water-staining.webp", alt: "Removed sheet of roof decking with dark water staining along its bottom edge" }}
        note={{ quote: "They were up front about the process and costs and held true to that throughout the new roof project.", cite: "Andy A., Google review" }}
      />

      <Band items={[
        { big: "5.0", text: "Google rating, from 106 Google reviews." },
        { big: "8", text: "Google reviews mention the cleanup or the nail sweep." },
        { big: "Free", text: "Inspection before any quote. Mon–Fri, 8am–6pm." },
      ]} />

      <Section eyebrow="The result" title="What you're left with" intro="A straight roof edge, gutters that stay put and no soft wood hiding under the paint. Here's one customer, word for word.">
        <FeatureQuote
          eyebrow="Roof and gutter work · August 2026 · via Google"
          quote="I highly recommend Trinity Restoration and Contracting for all your roofing and gutter needs. These guys and gals are true professionals."
          cite="Victoria"
          img={{ src: "/images/roof-replacement-charcoal-shingles-cape-cod-dormers.webp", alt: "Finished charcoal shingle roof on a Cape Cod home with dormers" }}
        />
      </Section>

      <Section tone="sand" eyebrow="What's included" title="What comes with every fascia and soffit job" intro="Nobody knows how far rot runs until the board comes off, so the price comes after we've looked. You'll know what it covers before work starts.">
        <div className="t-split">
          <Cards items={[
            { title: "Free inspection", text: "A free inspection of the fascia, soffit and roof edge." },
            { title: "Decking at the edge", text: "Rotten roof decking at the edge replaced when we find it." },
            { title: "Seamless gutters", text: "Seamless gutters if the old ones have to come down." },
            { title: "The price first", text: "The cost explained before any work starts." },
          ]} />
          <Pic src="/images/tear-off-bare-osb-with-one-new-sheet.webp" alt="Roof stripped to the decking, with one new sheet set in near the edge above the gutter" />
        </div>
      </Section>

      <Section eyebrow="Our work" title="Where the rot hides: recent Trinity roof jobs">
        <Photos items={[
          { src: "/images/tear-off-exposed-osb-decking-crew-aerial.webp", alt: "Old roof torn off down to the decking, crew at work" },
          { src: "/images/crew-five-roofers-shingling-ladder-hoist.webp", alt: "Five Trinity roofers shingling, with a ladder hoist at the roof edge" },
          { src: "/images/underlayment-crew-tarps-catching-debris-aerial.webp", alt: "Underlayment going on with tarps catching the tear-off debris" },
        ]} />
      </Section>

      <Section tight tone="sand" eyebrow="Where we work" title="Areas we serve">
        <div className="t-split">
          <Areas text="We cover Greenville and the Upstate from our Rutherford Road office. Most fascia work happens alongside a roof job." places={PLACES} />
          <Wide src="/images/roof-replacement-gray-shingles-brick-front-close-aerial.webp" alt="Gray shingle roof on a brick home in the Upstate" />
        </div>
      </Section>

      <Section eyebrow="Questions" title="Fascia and soffit questions, answered" intro="What Greenville homeowners ask before they call about a rotten roof edge.">
        <Faq items={faqs.slice(0, 4).map((f, i) => ({ q: f.q, a: <p>{render(f.a)}</p>, open: i === 0 }))} />
        <Wide src="/images/eave-detail-membrane-underlayment-gutter.webp" alt="Roof edge with the gutter and fascia board below the new underlayment" />
        <Faq items={faqs.slice(4).map((f) => ({ q: f.q, a: <p>{render(f.a)}</p> }))} />
      </Section>

      <CtaForm title="Ready when you are" text="Book a free inspection, or call and we'll set a time. Rotten wood doesn't get better on its own." project="Siding, gutters or trim" />
    </Site>
  );
}
