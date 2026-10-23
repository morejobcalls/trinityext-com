// Aluminum patio covers, redesign 22 October 2026. Words and quotes carried over
// verbatim from the /service-page build; every review is word for word from Google.
import { Site, PageHero, Band, Section, FeatureQuote, Photos, Ticks, Areas, Faq, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {
  title: { absolute: "Aluminum Patio Covers in Greenville, SC | Trinity Exteriors" },
  description: "Aluminum patio covers and screened enclosures over patios and decks in Greenville and the Upstate. Free estimate, price in writing. 5.0 from 106 Google reviews.",
  alternates: { canonical: "/services/aluminum-patio-covers/" },
};

const faqs = [
  { q: "Is the estimate really free?", a: "Yes. Billy comes out, looks at the patio or deck, and gives you a detailed price at no cost. “Billy and the Trinity team was prompt on their estimate and it was very detailed and fair.” (Ken S.)" },
  { q: "How much does an aluminum patio cover cost?", open: true, a: <><p>It depends on the size, whether it's open or screened, and whether it sits on a patio or a deck. You get the number at the free estimate, before any work starts. We'd rather price your space than print a guess.</p><p>On decks, reviewers say the same thing: “The price was so reasonable - I thought he was missing something.” (Michael K.)</p></> },
  { q: "Can you build a deck and a patio cover together?", a: "Yes. One of our recent jobs paired Trex decking with an insulated aluminum roof and a fan. The photos on this page show a cover over a raised deck, a screened porch up top and a screened enclosure on a patio." },
  { q: "Should I get an open cover or a screened enclosure?", a: "An open cover gives you shade and keeps the rain off. A screened enclosure does both and keeps the bugs out too, which matters on a Carolina summer evening. Billy walks you through both at the estimate." },
  { q: "Do you clean up after the build?", a: "Our customers say so. “Left the workspace all tidied up when they were finished.” (Palma H.)" },
  { q: "Do you build decks too?", a: <p>Yes. New decks and deck replacements in Trex composite or wood have their own page: <a href="/services/deck-builder/">Deck builders in Greenville</a>.</p> },
  { q: "What areas do you serve?", a: "Greenville and the Upstate, from our office at 1801 Rutherford Rd in Greenville. That includes Simpsonville, Greer, Easley, Travelers Rest, Spartanburg and Anderson." },
];

const plain: Record<string, string> = {
  "How much does an aluminum patio cover cost?": "It depends on the size, whether it's open or screened, and whether it sits on a patio or a deck. You get the number at the free estimate, before any work starts.",
  "Do you build decks too?": "Yes. New decks and deck replacements in Trex composite or wood have their own page: Deck builders in Greenville.",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    business,
    {
      "@type": "Service", name: "Aluminum patio covers", serviceType: "Aluminum patio cover and screened enclosure installation",
      url: "https://trinityext.com/services/aluminum-patio-covers/", provider: { "@id": business["@id"] },
      areaServed: ["Greenville", "Spartanburg", "Anderson", "Greenwood", "Simpsonville", "Greer", "Easley", "Travelers Rest"].map((name) => ({ "@type": "City", name: `${name}, SC` })),
    },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: typeof f.a === "string" ? f.a : plain[f.q] } })) },
  ],
};

export default function Page() {
  return (
    <Site>
      <JsonLd data={schema} />
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Patio covers" }]}
        eyebrow="Patio covers · Greenville, SC"
        title="Aluminum Patio Covers in Greenville, SC"
        lead={<p>Trinity Exteriors builds aluminum patio covers and screened enclosures across Greenville and the Upstate, over a patio or on top of a new deck. Billy comes out first, asks how you use the space, and gives you a detailed price before any work starts. Then the crew builds it and leaves the yard tidy.</p>}
        ticks={["Free estimate at your house", "Open cover or fully screened", "On your patio or a new deck"]}
        main={{ src: "/images/screened-aluminum-patio-enclosure-brick-ranch.webp", alt: "Dark aluminum screened patio enclosure with a ceiling fan on the back of a brick ranch home" }}
        second={{ src: "/images/screened-porch-interior-ceiling-fan.webp", alt: "Inside a finished screened porch with black rails, a ceiling fan and a view of the yard" }}
        note={{ quote: "Billy and the Trinity team was prompt on their estimate and it was very detailed and fair.", cite: "Ken S., Google review" }}
        cta="Get my patio cover estimate"
      />

      <Band items={[
        { big: "5.0", text: "Google rating, from 106 Google reviews" },
        { big: "8", text: "Google reviews are about our deck builds" },
        { big: "Mon–Fri", text: "8am–6pm, with a free estimate at your house" },
      ]} />

      <Section tone="sand" eyebrow="The result" title="What you get back" intro="Shade where you actually sit. Here's one deck customer, word for word.">
        <FeatureQuote
          eyebrow="Deck build · September 2026"
          quote="The crew done a great job. Now I can enjoy evenings without the heat of the sun sitting on my deck."
          cite="via Google"
          img={{ src: "/images/deck-elevated-pressure-treated-aluminum-cover.webp", alt: "Raised wood deck with black balusters and a dark aluminum patio cover over part of it" }}
        />
      </Section>

      <Section eyebrow="Our work" title="Covers and screened porches we've built">
        <Photos items={[
          { src: "/images/screened-porch-second-storey-gable.webp", alt: "Second-storey screened porch with a gable roof and a ceiling fan above a long deck staircase" },
          { src: "/images/deck-cost-hero-raised-wood-deck-aluminum-cover.webp", alt: "Raised wood deck under an aluminum patio cover" },
          { src: "/images/deck-two-story-screened-porch-stairs.webp", alt: "Two-story stained deck with a screened porch on top and a long staircase" },
        ]} />
      </Section>

      <Section eyebrow="What's included" title="What comes with every patio cover">
        <div className="t-split">
          <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "4 / 3" }}><img src="/images/deck-stairs-composite-treads-paver-patio.webp" alt="Deck stairs stepping down to a paver patio" loading="lazy" /></figure>
          <div style={{ display: "grid", gap: 22 }}>
            <p>Every patio and deck is different, so the price comes after Billy has seen yours and asked how you'll use it. You'll know what it covers before work starts.</p>
            <Ticks items={["A free, detailed estimate before any work", "An open cover or a fully screened enclosure", "Built on your patio or on a new Trinity deck", "The work area left tidy when we finish"]} />
          </div>
        </div>
      </Section>

      <Section tone="sand" eyebrow="Where we work" title="Areas we serve">
        <Areas
          text={<>We build patio covers across Greenville and the Upstate from our Rutherford Road office, and <a href="/services/deck-builder/">decks</a> and <a href="/blog/deck-cost-per-square-foot/">deck prices</a> have their own pages.</>}
          places={["Greenville", "Simpsonville", "Greer", "Easley", "Travelers Rest"]}
        />
        <p style={{ marginTop: 20 }}>Roof due as well? See <a href="/services/roofing/">roofing in Greenville, SC</a>.</p>
      </Section>

      <Section eyebrow="Questions" title="Patio cover questions, answered" intro="What Greenville homeowners ask before they cover a patio or deck, answered.">
        <div className="t-split">
          <Faq items={faqs.slice(0, 4)} />
          <div style={{ display: "grid", gap: 20 }}>
            <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "16 / 10" }}><img src="/images/deck-low-gray-composite-navy-house-concrete-pad.webp" alt="Low gray composite deck stepping down to a concrete pad" loading="lazy" /></figure>
            <Faq items={faqs.slice(4)} />
          </div>
        </div>
      </Section>

      <CtaForm title="Ready when you are" text="Book a free estimate, or call and we'll set a time. Your evening iced tea deserves some shade." project="Deck, porch or patio cover" />
    </Site>
  );
}
