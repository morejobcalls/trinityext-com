// Interior remodeling & flooring, new 22 October 2026. Spencer confirmed Trinity
// takes interior work, remodeling and flooring; proof for it is thin, so the page
// promises only what context/ backs up (no scopes, prices, brands or timelines).
import { Site, PageHero, Band, Section, FeatureQuote, Ticks, Faq, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {
  title: { absolute: "Interior Remodeling & Flooring in Greenville, SC | Trinity" },
  description: "Flooring, remodels, painting and water damage repairs from the same Greenville crew that does your roof and deck. Free estimate, price in writing before work.",
  alternates: { canonical: "/services/interior-remodeling/" },
};

const faqs = [
  { q: "Do you really do interior work?", open: true, a: "Yes. Along with roofs and decks, we take on work inside the house: new flooring, remodels, painting and repairs after water damage. Tell us what you've got in mind and we'll tell you straight whether it's a job for us." },
  { q: "How much does new flooring or a remodel cost?", a: "It depends on the room, the size and the materials you pick. You get the price in writing at a free estimate, before any work starts. Across our jobs, 48 of the 57 Google reviewers who rated our price called it great or reasonable." },
  { q: "Can you fix the inside after a roof leak?", a: <p>Yes, once the water's stopped. If it's coming in right now, start with <a href="/services/emergency-roof-repair/">emergency roof repair</a>, then we can put the room right. “They worked quickly to fix a leak in my kitchen ceiling that stemmed from storm damage to my roof.” (Brittany M.)</p> },
  { q: "Can one company handle the outside and the inside?", a: "That's the whole idea. Deborah H. had a new roof and gutters, some siding replaced and the whole outside of the house repainted by the same team. The inside works the same way: one call, one crew you already know." },
  { q: "Is the estimate free?", a: "Yes. We come out, look at the job and give you a price in writing, with no pressure to sign. “No high pressure sales. No hidden costs.” (Gene S.)" },
  { q: "What areas do you serve?", a: "Greenville and the Upstate, from our office at 1801 Rutherford Rd in Greenville. That includes Simpsonville, Greer, Easley, Travelers Rest, Spartanburg and Anderson." },
];

const faqText = (q: string, a: unknown) =>
  typeof a === "string" ? a : q.startsWith("Can you fix")
    ? "Yes, once the water's stopped. If it's coming in right now, start with emergency roof repair, then we can put the room right."
    : "";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    business,
    {
      "@type": "Service", name: "Interior remodeling and flooring", serviceType: "Interior remodeling, flooring, painting and water damage repair",
      url: "https://trinityext.com/services/interior-remodeling/", provider: { "@id": business["@id"] },
      areaServed: ["Greenville", "Spartanburg", "Anderson", "Simpsonville", "Greer", "Easley", "Travelers Rest"].map((name) => ({ "@type": "City", name: `${name}, SC` })),
    },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: faqText(f.q, f.a) } })) },
  ],
};

export default function Page() {
  return (
    <Site>
      <JsonLd data={schema} />
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Interior & remodeling" }]}
        eyebrow="Inside · Greenville, SC"
        title="Interior Remodeling & Flooring in Greenville, SC"
        lead={<p>The crew you trusted with the roof or the deck can do the inside too. New flooring, remodels, painting and repairs after water damage, priced in writing before anything starts. One call, one team you already know.</p>}
        ticks={["Free estimate, price in writing", "Flooring, remodels and painting", "Repairs after a leak or water damage"]}
        main={{ src: "/images/interior-water-damage-drying-fans-kitchen.webp", alt: "Air movers and a dehumidifier drying a kitchen floor after a leak" }}
        note={{ quote: "No high pressure sales. No hidden costs. Just a quality job at a fair price.", cite: "Gene S., Google review" }}
        cta="Get my free estimate"
      />

      <Band items={[
        { big: "5.0", text: "Google rating, from 106 Google reviews" },
        { big: "48 of 57", text: "Google reviewers who rated our price called it \"great\" or \"reasonable\"" },
        { big: "One call", text: "Outside, out back and inside, handled by the same team" },
      ]} />

      <Section eyebrow="What we can help with" title="The inside of the house, too">
        <div className="t-split">
          <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "4 / 3" }}><img src="/images/inspection-moisture-meter-ceiling-reads-hi.webp" alt="Moisture meter on a cracked ceiling reading HI after a leak" loading="lazy" /></figure>
          <div style={{ display: "grid", gap: 22 }}>
            <p>Every room is different, so the price comes after we've seen yours. You'll know what it covers before work starts.</p>
            <Ticks items={["New flooring", "Remodels", "Interior painting", "Repairs after a leak or water damage"]} />
            <p>Roof leaking into the room? Start with <a href="/services/emergency-roof-repair/">emergency roof repair</a>, or see <a href="/services/roofing/">roofing in Greenville</a> if the roof's due.</p>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <FeatureQuote
          eyebrow="One team, the whole house"
          quote="TRC put in a new roof on our house and new gutters. Replaced some of our siding. Then they repainted our entire house outside. They did a wonderful job."
          cite="Deborah H., Google review"
          img={{ src: "/images/roof-replacement-brown-shingles-brick-colonial-teal-shutters.webp", alt: "Brick colonial home with a new brown roof" }}
          chips={["Roof", "Gutters", "Siding", "Paint", "One crew"]}
        />
      </Section>

      <Section eyebrow="Questions" title="Interior questions, answered" intro="What Upstate homeowners ask before they call us about the inside.">
        <div className="t-split">
          <Faq items={faqs.slice(0, 3)} />
          <div style={{ display: "grid", gap: 20 }}>
            <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "16 / 10" }}><img src="/images/replaced-osb-sheet-with-water-staining.webp" alt="Water-stained roof decking found above a leak" loading="lazy" /></figure>
            <Faq items={faqs.slice(3)} />
          </div>
        </div>
      </Section>

      <CtaForm title="Tell us about the room." text="Flooring, a remodel or a ceiling that took a hit. We'll call you back on a weekday, come take a look and give you a fair price in writing." project="Flooring or remodel" />
    </Site>
  );
}
