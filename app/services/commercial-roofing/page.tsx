// Commercial roofing hub, redesign 22 October 2026. Words carried over from the
// proof-checked v1 page. Photos are labelled stock (no commercial job photos yet).
import { Site, PageHero, Band, Section, FeatureQuote, Ticks, Areas, Faq, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {
  title: { absolute: "Commercial Roofing in Greenville, SC | Trinity Exteriors" },
  description: "Commercial roof repair and replacement in Greenville and the Upstate, including flat and TPO roofs. Free roof inspection, and the cost explained before work starts. 5.0 from 106 Google reviews.",
  alternates: { canonical: "/services/commercial-roofing/" },
};

const places = ["Greenville", "Spartanburg", "Anderson", "Greenwood", "Simpsonville", "Greer", "Easley", "Travelers Rest"];

const faqs = [
  { q: "Is the roof inspection really free?", t: "Yes. The inspection costs nothing, and you get what we found and the price explained before any work starts." },
  { q: "Should I repair my flat roof or replace it?", open: true, t: "It depends on how much of the roof is worn or holding water, and how far the damage has spread underneath. The inspection tells you which one you need, and why. “They were up front about the process and costs and held true to that throughout the new roof project.” (Andy A.)" },
  { q: "How much does a commercial roof cost per square foot?", t: "It depends on the membrane, the insulation, how many layers come off, and the roof's size and access. You get a number for your building after the free inspection, not a guess before it." },
  { q: "TPO or EPDM: which membrane is better?", t: "TPO is a single-ply membrane, usually white, with heat-welded seams. EPDM is a black rubber membrane. Which one suits your building depends on the roof, and we'll explain the choice at the inspection." },
  { q: "Will you help with an insurance claim after storm damage?", t: "Yes. If hail or wind damaged the roof, we help with the claim, including when the insurer pushes back. 30 of our Google reviews mention insurance help." },
  { q: "Do you clean up after the job?", t: "Our customers say so. Eight Google reviews mention the cleanup or the nail sweep. “They left the area so that you would never know that anything was done except for the look of the roof.” (Scott D.)" },
  {
    q: "Do you roof homes too?",
    t: "Yes. Most of our work is home roofing, from repairs to full replacements, and the same free inspection comes first.",
    a: <p>Yes. Most of our work is <a href="/services/roofing/">home roofing</a>, from repairs to full replacements, and the same free inspection comes first.</p>,
  },
  { q: "What areas do you serve?", t: "Greenville and the Upstate, from our office at 1801 Rutherford Rd in Greenville. That includes Spartanburg, Anderson, Greenwood, Simpsonville, Greer, Easley and Travelers Rest." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { ...business, "@type": ["HomeAndConstructionBusiness", "RoofingContractor"], alternateName: "Trinity Restoration And Contracting Inc" },
    {
      "@type": "Service", name: "Commercial roofing", serviceType: "Commercial roof repair and replacement", url: "https://trinityext.com/services/commercial-roofing/",
      provider: { "@id": business["@id"] }, areaServed: places.map((p) => ({ "@type": "City", name: `${p}, SC` })),
    },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.t } })) },
  ],
};

const faqItems = faqs.map((f) => ({ q: f.q, a: f.a ?? f.t, open: f.open }));

export default function Page() {
  return (
    <Site>
      <JsonLd data={schema} />
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Commercial roofing" }]}
        eyebrow="Commercial roofing · Greenville, SC"
        title="Commercial Roofing in Greenville, SC"
        lead={<p>Trinity Exteriors repairs and replaces commercial roofs across Greenville and the Upstate, including flat and TPO roofs. It starts with a free roof inspection, and you'll know what we found and what it costs before any work begins. If a storm did the damage, we'll help with the insurance claim. Our office is on Rutherford Road in Greenville.</p>}
        ticks={["Free roof inspection", "Help with the insurance claim", "Flat and TPO roofs"]}
        main={{ src: "/images/stock/commercial-flat-roof-membrane-parapet-ladder.webp", alt: "A flat commercial roof with a membrane finish and a parapet wall" }}
        second={{ src: "/images/stock/commercial-low-slope-roofs-hvac-units.webp", alt: "Low-slope commercial roofs with rooftop HVAC units" }}
        note={{ quote: "No hidden costs. Just a quality job at a fair price.", cite: "Gene S., Google review" }}
        cta="Book my free inspection"
      />

      <Band items={[
        { big: "5.0", text: "Google rating, from 106 Google reviews." },
        { big: "347", text: "Job photos on our Google profile." },
        { big: "Free", text: "Roof inspection before any quote." },
      ]} />

      <Section eyebrow="The result" title="Straight answers, fair price" intro="You get what's wrong with the roof, what it takes to fix it and what that costs, before anyone starts. Here's one customer, word for word.">
        <FeatureQuote
          eyebrow="Roof installation · March 2026"
          quote="No hidden costs. Just a quality job at a fair price."
          cite="Gene S., via Google"
          img={{ src: "/images/stock/commercial-rooftop-ducting-low-slope-roofs.webp", alt: "Low-slope metal roofs on a commercial block, with rooftop ducting" }}
        />
      </Section>

      <Section tone="sand" eyebrow="What's included" title="What comes with every commercial roof job">
        <div className="t-split">
          <div className="t-prose-col">
            <figure className="t-feature-img" style={{ margin: "0 0 24px", aspectRatio: "4 / 3" }}><img src="/images/stock/commercial-flat-roof-gravel-ballast-vent-stacks.webp" alt="A gravel-ballasted flat roof with vent stacks" loading="lazy" /></figure>
            <p>Every building is different, so the price comes after we've been up on the roof. You'll know what it covers before work starts. Our <a href="/blog/flat-roof-replacement-cost/">flat roof replacement cost guide</a> breaks down the line items.</p>
          </div>
          <Ticks items={[
            "A free roof inspection before any quote",
            "Repair or replacement, whichever the roof actually needs",
            "Flat, low-slope and TPO roofs",
            "Help with the insurance claim after storm damage",
          ]} />
        </div>
      </Section>

      <Section eyebrow="Where we work" title="Areas we serve">
        <div className="t-split">
          <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "4 / 3" }}><img src="/images/eave-detail-membrane-underlayment-gutter.webp" alt="Membrane underlayment detail at a roof edge" loading="lazy" /></figure>
          <Areas text="We cover Greenville and the Upstate from our Rutherford Road office, including Spartanburg." places={places} />
        </div>
      </Section>

      <Section tone="sand" eyebrow="Questions" title="Commercial roofing questions, answered" intro="What building owners and managers ask before they call.">
        <div className="t-split">
          <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "4 / 3" }}><img src="/images/stock/commercial-low-slope-roofs-hvac-units.webp" alt="Low-slope commercial roofs with rooftop HVAC units" loading="lazy" /></figure>
          <Faq items={faqItems.slice(0, 4)} />
        </div>
        <div className="t-split" style={{ marginTop: 40 }}>
          <figure className="t-feature-img" style={{ margin: 0, order: 2, aspectRatio: "4 / 3" }}><img src="/images/tear-off-exposed-osb-decking-crew-aerial.webp" alt="Old roof torn off down to the decking, crew at work" loading="lazy" /></figure>
          <Faq items={faqItems.slice(4)} />
        </div>
      </Section>

      <CtaForm title="Ready when you are" text="Book a free inspection, or call and we'll set a time. Flat roofs hide their leaks well, so it pays to look before the ceiling tiles tell you." project="Roof or storm damage" />
    </Site>
  );
}
