// Roof inspection, redesign 22 October 2026. Words carried over from the
// proof-checked v1 page; every quote is verbatim from Trinity's Google reviews.
import { Site, PageHero, Band, Section, FeatureQuote, Photos, Ticks, Areas, Faq, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {
  title: { absolute: "Free Roof Inspection in Greenville, SC | Trinity Exteriors" },
  description: "Free roof inspection in Greenville and the Upstate. We check the shingles, nails and storm damage, show you what we found and can be there for the adjuster. 5.0 from 106 Google reviews.",
  alternates: { canonical: "/services/roof-inspection/" },
};

const places = ["Greenville", "Spartanburg", "Anderson", "Greenwood", "Simpsonville", "Greer", "Easley", "Travelers Rest"];

const faqs = [
  { q: "Is the roof inspection really free?", t: "Yes. It costs nothing and you're not signing up for anything. If the roof needs work, you get the price before anything starts, and the decision is yours." },
  {
    q: "Can you inspect my roof for an insurance claim?", open: true,
    t: "Yes. If hail or wind hit the roof, we inspect it, show you the damage and can be there when the insurance adjuster comes out. 30 of our Google reviews mention insurance help. “Worked with the adjusters to get the project done.” (Corwaski W.) Our hail damage claim guide covers the rest.",
    a: <p>Yes. If hail or wind hit the roof, we inspect it, show you the damage and can be there when the insurance adjuster comes out. 30 of our Google reviews mention insurance help. “Worked with the adjusters to get the project done.” (Corwaski W.) Our <a href="/blog/hail-damage-roof-insurance-claim/">hail damage claim guide</a> covers the rest.</p>,
  },
  { q: "What do you check during a roof inspection?", t: "The shingles, the nails holding them down and any hail or wind damage on the roof, plus ceiling stains and leaks from inside. Then we explain what we found. “The team came out to inspect the roof and found I needed the roof replaced.” (Rochelle J.)" },
  { q: "Will you push me into a new roof?", t: "No. You get what we found and your options, and the choice is yours. “No high pressure sales.” (Gene S.)" },
  {
    q: "What if my roof only needs a repair?",
    t: "Then that's what we tell you. We fix leaks and storm damage as well as replacing roofs, and the inspection is how you find out which one you need.",
    a: <p>Then that's what we tell you. We fix <a href="/services/emergency-roof-repair/">leaks</a> and <a href="/services/storm-damage-roofing/">storm damage</a> as well as <a href="/services/roofing/">replacing roofs</a>, and the inspection is how you find out which one you need.</p>,
  },
  { q: "When should I get my roof inspected?", t: "After a hail or wind storm, when a stain shows up on a ceiling, or when shingles turn up in the yard. That's when a small problem is easiest to catch." },
  { q: "What happens after the inspection?", t: "We walk you through what we found. If the roof needs work, you get the price before anything starts. If it's a replacement, six of our Google reviewers say the whole roof went on in one day." },
  { q: "What areas do you serve?", t: "Greenville and the Upstate, from our office at 1801 Rutherford Rd in Greenville. That includes Spartanburg, Anderson, Greenwood, Simpsonville, Greer, Easley and Travelers Rest." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { ...business, "@type": ["HomeAndConstructionBusiness", "RoofingContractor"], alternateName: "Trinity Restoration And Contracting Inc" },
    {
      "@type": "Service", name: "Roof inspection", serviceType: "Free roof inspection", url: "https://trinityext.com/services/roof-inspection/",
      provider: { "@id": business["@id"] }, areaServed: places.map((p) => ({ "@type": "City", name: `${p}, SC` })),
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free roof inspection" },
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
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Roof inspection" }]}
        eyebrow="Roof inspection · Greenville, SC"
        title="Roof Inspection in Greenville, SC"
        lead={<p>Trinity Exteriors inspects roofs across Greenville and the Upstate, free. We get up on the roof, check the shingles, the nails and any storm damage, then show you what we found in plain words. If it needs work, you see the price before anything starts. If hail or wind did it, we can be there when the insurance adjuster comes out.</p>}
        ticks={["Free, with no obligation to buy", "Damage shown to you, not just described", "There for the adjuster visit"]}
        main={{ src: "/images/inspection-hand-lifting-shingle-tab-nails.webp", alt: "Inspector lifting a shingle tab to check the nails underneath" }}
        second={{ src: "/images/inspection-chalk-circle-on-shingle.webp", alt: "Chalk circle marking a damage point on a shingle" }}
        note={{ quote: "No high pressure sales.", cite: "Gene S., Google review" }}
        cta="Book my free inspection"
      />

      <Band items={[
        { big: "Free", text: "What the inspection costs you. No obligation." },
        { big: "5.0", text: "Google rating, from 106 Google reviews." },
        { big: "30", text: "Google reviews mention help with the insurance claim." },
      ]} />

      <Section eyebrow="The result" title="What you walk away with" intro="A straight answer on your roof: what's wrong, what isn't, and whether it needs a repair or a new roof. Here's one customer, word for word.">
        <FeatureQuote
          eyebrow="Roof inspection · March 2026"
          quote="He took the time to thoroughly inspect my roof, clearly explain the issues, and walk me through the best options without any pressure."
          cite="Leslie, via Google"
          img={{ src: "/images/roof-replacement-charcoal-shingles-tan-craftsman-home.webp", alt: "Finished charcoal shingle roof on a tan craftsman home, aerial view" }}
        />
      </Section>

      <Section tone="sand" eyebrow="Our work" title="What an inspection turns up, and what comes next">
        <Photos items={[
          { src: "/images/inspection-moisture-meter-ceiling-reads-hi.webp", alt: "Moisture meter reading high on a ceiling joint below a roof leak" },
          { src: "/images/replaced-osb-sheet-with-water-staining.webp", alt: "Water-stained roof decking found under an old roof" },
          { src: "/images/tear-off-bare-osb-with-one-new-sheet.webp", alt: "Bare decking after tear-off with one rotten sheet replaced" },
          { src: "/images/new-shingles-pipe-boot-close-up.webp", alt: "New shingles sealed around a pipe boot, close up" },
          { src: "/images/roof-replacement-charcoal-shingles-cape-cod-dormers.webp", alt: "Finished charcoal shingle roof on a white cape cod with dormers" },
        ]} />
      </Section>

      <Section eyebrow="What's included" title="What the free inspection covers">
        <div className="t-split">
          <div className="t-prose-col">
            <figure className="t-feature-img" style={{ margin: "0 0 24px", aspectRatio: "4 / 3" }}><img src="/images/roof-replacement-blue-gray-shingles-brick-two-story-aerial.webp" alt="New blue-gray shingle roof on a two-story brick home, seen from above" loading="lazy" /></figure>
            <p>We get up on the roof, look it over properly and tell you what we found. If it needs work, the price comes before anything starts, and the decision stays yours.</p>
          </div>
          <Ticks items={[
            "Shingles and nails checked up close",
            "Storm damage marked and shown to you",
            "Ceiling stains and leaks checked from inside",
            "A price before any work, if work is needed",
          ]} />
        </div>
      </Section>

      <Section tone="sand" eyebrow="Where we work" title="Areas we serve">
        <div className="t-split">
          <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "4 / 3" }}><img src="/images/crew-five-roofers-shingling-ladder-hoist.webp" alt="Trinity roofing crew shingling a home with a ladder hoist" loading="lazy" /></figure>
          <Areas text="We inspect roofs across Greenville and the Upstate from our Rutherford Road office, including Spartanburg, Anderson and Greenwood." places={places} />
        </div>
      </Section>

      <Section eyebrow="Questions" title="Roof inspection questions, answered" intro="What Greenville homeowners ask before we get on the roof.">
        <div className="t-split">
          <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "4 / 3" }}><img src="/images/roof-replacement-brown-shingles-brick-colonial-teal-shutters.webp" alt="New brown shingle roof on a brick colonial with teal shutters" loading="lazy" /></figure>
          <Faq items={faqItems.slice(0, 4)} />
        </div>
        <div className="t-split" style={{ marginTop: 40 }}>
          <figure className="t-feature-img" style={{ margin: 0, order: 2, aspectRatio: "4 / 3" }}><img src="/images/underlayment-going-on-snow-on-ground-aerial.webp" alt="Underlayment going on a two-story brick home with snow on the ground" loading="lazy" /></figure>
          <Faq items={faqItems.slice(4)} />
        </div>
      </Section>

      <CtaForm title="Ready when you are" text="Book a free inspection and find out what's really going on up there. Easier than climbing the ladder yourself." project="Roof or storm damage" />
    </Site>
  );
}
