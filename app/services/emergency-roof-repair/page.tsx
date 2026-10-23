// Emergency roof repair, redesign 22 October 2026. Words and quotes carried over
// verbatim from the v1 page (proof-checked); layout from components/site.
import type { ReactNode } from "react";
import { Site, PageHero, Band, Section, Photos, Cards, FeatureQuote, Faq, Areas, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {
  title: { absolute: "Emergency Roof Repair in Greenville, SC | Trinity Exteriors" },
  description: "Roof leaking in Greenville or the Upstate? Call (864) 844-7777. We find where the water gets in and fix it, with tarps and insurance claim help after a storm.",
  alternates: { canonical: "/services/emergency-roof-repair/" },
};

const URL = "https://trinityext.com/services/emergency-roof-repair/";
const PLACES = ["Greenville", "Spartanburg", "Anderson", "Greenwood", "Simpsonville", "Greer", "Easley", "Travelers Rest"];

// FAQ answers as parts: plain text, or [label, href] for an inline link.
type Part = string | [string, string];
const faqs: { q: string; a: Part[] }[] = [
  { q: "How fast can you get here?", a: ["Call (864) 844-7777, Monday to Friday, 8am to 6pm, and we'll set a time. Customers say we move quickly: “They worked quickly to fix a leak in my kitchen ceiling.” (Brittany M.)"] },
  { q: "Can you tarp my roof?", a: ["Yes, on storm-damaged roofs. One customer's roof stayed under our tarps while the insurance claim settled: “providing tarps to cover the leaks and replacing them as needed.” (James W.)"] },
  { q: "Will insurance pay for my roof leak?", a: ["If wind or hail caused it, often yes, and we ", ["help with the claim", "/services/storm-damage-roofing/"], ", including when the insurer pushes back. 30 of our Google reviews mention insurance help. Wear and age usually aren't covered, and the inspection tells you which you've got."] },
  { q: "How much does a roof leak repair cost?", a: ["It depends on what's letting the water in and how much decking or flashing needs replacing. You get the number after the free inspection, before any work starts."] },
  { q: "What should I do until you get there?", a: ["Move what you can out from under the drip, put a bucket down and stay off the roof. Take photos of the ceiling and any storm damage, because the insurance claim will want them."] },
  { q: "Is the roof inspection really free?", a: ["Yes. The inspection costs nothing, and you get what we found and the price explained before any work starts."] },
  { q: "Will you fix the leak or tell me I need a new roof?", a: ["Whichever the roof needs. We fix leaks and storm damage, and we ", ["replace roofs", "/services/roofing/"], " that are past saving. The inspection tells you which one you've got."] },
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
    { "@type": "Service", name: "Emergency roof repair", serviceType: "Emergency roof repair and roof leak repair", url: URL, provider: { "@id": business["@id"] }, areaServed: PLACES.map((p) => ({ "@type": "City", name: `${p}, SC` })) },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: text(f.a) } })) },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://trinityext.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://trinityext.com/services/" },
      { "@type": "ListItem", position: 3, name: "Emergency roof repair", item: URL },
    ] },
  ],
};

export default function Page() {
  return (
    <Site>
      <JsonLd data={schema} />
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Emergency roof repair" }]}
        eyebrow="Emergency roof repair · Greenville, SC"
        title="Emergency Roof Repair in Greenville, SC"
        lead="Roof leaking into the house? Call (864) 844-7777, Monday to Friday, 8am to 6pm, and we'll set a time to find where the water is getting in. We fix the leak, or tarp it and help with the insurance claim when storm damage means the roof needs replacing. The inspection is free."
        cta="Send the details"
        ticks={["Free roof inspection", "Help with the insurance claim", "Tarps while a storm claim settles"]}
        main={{ src: "/images/interior-water-damage-drying-fans-kitchen.webp", alt: "Drying fans set up in a kitchen after a roof leak" }}
        second={{ src: "/images/inspection-moisture-meter-ceiling-reads-hi.webp", alt: "Moisture meter reading high on a ceiling under a roof leak" }}
        note={{ quote: "They worked quickly to fix a leak in my kitchen ceiling.", cite: "Brittany M., Google review" }}
      />

      <Band items={[
        { big: "24", text: "Google reviews mention how fast we moved." },
        { big: "30", text: "Google reviews mention insurance help." },
        { big: "Mon–Fri", text: "8am–6pm. One leak, start to finish." },
      ]} />

      <Section eyebrow="The result" title="A dry kitchen ceiling again" intro="Storm damage, a drip in the kitchen and a crew that moved quickly. Here's the customer, word for word.">
        <FeatureQuote
          eyebrow="Roof repair · March 2026 · via Google"
          quote="They worked quickly to fix a leak in my kitchen ceiling that stemmed from storm damage to my roof."
          cite="Brittany M."
          img={{ src: "/images/roof-replacement-brown-shingles-top-down-aerial.webp", alt: "Brown shingle roof from directly above after a Trinity replacement" }}
        />
      </Section>

      <Section tone="sand" eyebrow="What happens when you call" title="From the drip to the fix" intro="The stain on the ceiling is rarely under the hole. We find where the water gets in, then you get the price before any work starts.">
        <div className="t-split">
          <Cards items={[
            { title: "Free roof inspection", text: "A free roof inspection to find where the water gets in." },
            { title: "The price first", text: "The repair price before any work starts." },
            { title: "Tarps", text: "Tarps over the leak while a storm claim settles." },
            { title: "Storm claim help", text: "Help with the insurance claim after storm damage." },
          ]} />
          <Pic src="/images/replaced-osb-sheet-with-water-staining.webp" alt="Water-stained roof decking found under the old shingles" />
        </div>
      </Section>

      <Section eyebrow="What we look for" title="Where leaks start on Upstate roofs">
        <Photos items={[
          { src: "/images/inspection-chalk-circle-on-shingle.webp", alt: "Hail or wind damage circled in chalk on a shingle" },
          { src: "/images/inspection-hand-lifting-shingle-tab-nails.webp", alt: "Lifting a shingle tab to check the nails underneath" },
          { src: "/images/eave-detail-membrane-underlayment-gutter.webp", alt: "Ice and water barrier membrane at the eave above the gutter" },
        ]} />
      </Section>

      <Section tight eyebrow="Where we work" title="Areas we serve">
        <div className="t-split">
          <Areas text="We cover Greenville and the Upstate from our Rutherford Road office, including Spartanburg, Anderson and Greenwood." places={PLACES} />
          <Wide src="/images/roof-replacement-gray-shingles-brick-front-close-aerial.webp" alt="Gray shingle roof on a brick home in the Upstate" />
        </div>
      </Section>

      <Section tone="sand" eyebrow="Questions" title="Roof leak questions, answered" intro="What Greenville homeowners ask us when water is coming in.">
        <Faq items={faqs.slice(0, 4).map((f, i) => ({ q: f.q, a: <p>{render(f.a)}</p>, open: i === 0 }))} />
        <Wide src="/images/inspection-moisture-meter-ceiling-reads-hi.webp" alt="Moisture meter reading high on a ceiling under a roof leak" />
        <Faq items={faqs.slice(4).map((f) => ({ q: f.q, a: <p>{render(f.a)}</p> }))} />
      </Section>

      <div style={{ paddingTop: 104 }} />
      <CtaForm title="Water coming in?" text="Call (864) 844-7777 and we'll set a time to find the leak. Your ceiling makes a poor fountain." project="Roof or storm damage" />
    </Site>
  );
}
