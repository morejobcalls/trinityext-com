// Deck builders, redesign 22 October 2026. Words and quotes carried over verbatim
// from the /service-page build; every review is word for word from Google.
import { Site, PageHero, Band, Section, FeatureQuote, Photos, Ticks, Areas, Faq, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {
  title: { absolute: "Deck Builders in Greenville, SC | Trinity Exteriors" },
  description: "Custom decks in Trex composite or wood, deck replacement and screened porches across Greenville and the Upstate. Free estimate. 5.0 from 106 Google reviews.",
  alternates: { canonical: "/services/deck-builder/" },
};

const faqs = [
  { q: "Is the estimate really free?", a: "Yes. Billy comes out, looks at the yard or the old deck, and gives you a detailed price at no cost. “Billy and the Trinity team was prompt on their estimate and it was very detailed and fair.” (Ken S.)" },
  { q: "How much does a new deck cost?", open: true, a: "It depends on the size, the height off the ground, composite or wood, and the rails and stairs. You get the number at the free estimate. Three of our deck reviewers ticked a price range on Google: one at $10,000 to $15,000 and two at $15,000 to $20,000. “The price was so reasonable - I thought he was missing something.” (Michael K.)" },
  { q: "How long does it take to build a deck?", a: "It depends on the size and the design, and you'll get a timeline with the estimate. One reviewer's deck took two days from tear-out to finish. “Demo'd fast and the frame build was so solid.” (Michael K.)" },
  { q: "Should I build in composite or wood?", a: "Composite costs more up front and skips the yearly sealing and staining. Wood costs less to build and needs that care to last. Billy walks you through both at the estimate. “They replaced an old wooden deck with Trex composite and I couldn't be happier with the results and price.” (Michael L.)" },
  { q: "Can you replace my old deck and keep its design?", a: "Yes. We tear out the old deck and build the new one, and we can keep a layout you love. Kendra W.'s 25-year-old deck, designed by her dad, was rebuilt in composite to the same design." },
  { q: "Do you clean up after the build?", a: "Our customers say so. “Left the workspace all tidied up when they were finished.” (Palma H.)" },
  { q: "Do you build screened porches and patio covers too?", a: <p>Yes. We build screened porches on decks and <a href="/services/aluminum-patio-covers/">aluminum patio covers</a> for shade and rain cover. The photos above show both.</p> },
  { q: "What areas do you serve?", a: "Greenville and the Upstate, from our office at 1801 Rutherford Rd in Greenville. That includes Simpsonville, Greer, Easley, Travelers Rest, Spartanburg and Anderson." },
];

const faqText = (a: unknown) => (typeof a === "string" ? a : "Yes. We build screened porches on decks and aluminum patio covers for shade and rain cover. The photos above show both.");

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    business,
    {
      "@type": "Service", name: "Deck building", serviceType: "Custom deck building and deck replacement",
      url: "https://trinityext.com/services/deck-builder/", provider: { "@id": business["@id"] },
      areaServed: ["Greenville", "Spartanburg", "Anderson", "Greenwood", "Simpsonville", "Greer", "Easley", "Travelers Rest"].map((name) => ({ "@type": "City", name: `${name}, SC` })),
    },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: faqText(f.a) } })) },
  ],
};

export default function Page() {
  return (
    <Site>
      <JsonLd data={schema} />
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Decks" }]}
        eyebrow="Decks · Greenville, SC"
        title="Deck Builders in Greenville, SC"
        lead={<p>Trinity Exteriors builds new decks and replaces tired ones across Greenville and the Upstate, in Trex composite or wood, with stairs and screened porches too. Billy comes out first, asks how you use the yard, and gives you a detailed price before anything is torn out. Then the crew tears out the old deck, builds the new one and leaves the yard tidy.</p>}
        ticks={["Free deck estimate", "Trex composite or wood", "Old deck torn out and hauled off"]}
        main={{ src: "/images/deck-brown-composite-brick-house-black-balusters.webp", alt: "Brown composite deck with black metal balusters on a brick home" }}
        second={{ src: "/images/deck-stairs-composite-treads-paver-patio.webp", alt: "Wide deck stairs with brown composite treads down to a paver patio" }}
        note={{ quote: "The price was so reasonable - I thought he was missing something.", cite: "Michael K., Google review" }}
        cta="Get my deck estimate"
      />

      <Band items={[
        { big: "5.0", text: "Google rating, from 106 Google reviews" },
        { big: "8", text: "Google reviews are about our decks" },
        { big: "$10K–20K", text: "what 3 deck reviewers ticked on Google" },
      ]} />

      <Section tone="sand" eyebrow="The result" title="What you get back" intro="A deck you use every day instead of one you step around. Here's one customer, word for word.">
        <FeatureQuote
          eyebrow="Composite deck replacement · September 2026"
          quote="I am so incredibly pleased with the final product! Spending time on my deck now is enjoyable instead of being afraid of falling through a rotten board."
          cite="via Google"
          img={{ src: "/images/deck-elevated-pressure-treated-aluminum-cover.webp", alt: "Second-storey deck with black balusters and an aluminum roof cover over part of it" }}
        />
      </Section>

      <Section eyebrow="Our work" title="Recent Trinity decks in the Upstate">
        <Photos items={[
          { src: "/images/deck-two-story-screened-porch-stairs.webp", alt: "Two-story stained deck with a screened porch on top and a long staircase" },
          { src: "/images/deck-crew-member-laying-composite-boards.webp", alt: "Trinity crew member laying composite deck boards" },
          { src: "/images/screened-porch-interior-ceiling-fan.webp", alt: "Inside a finished screened porch with black rails and a ceiling fan" },
          { src: "/images/screened-aluminum-patio-enclosure-brick-ranch.webp", alt: "Dark aluminum screened patio enclosure on a brick ranch home" },
          { src: "/images/deck-low-gray-composite-navy-house-concrete-pad.webp", alt: "Low gray composite deck with a wide step down to a concrete pad" },
        ]} />
      </Section>

      <Section eyebrow="What's included" title="What comes with every deck">
        <div className="t-split">
          <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "4 / 3" }}><img src="/images/composite-boards-over-pressure-treated-joists.webp" alt="Composite deck boards fastened over pressure-treated joists" loading="lazy" /></figure>
          <div style={{ display: "grid", gap: 22 }}>
            <p>Every yard is different, so the price comes after Billy has seen yours and asked how you'll use it. You'll know what it covers before work starts.</p>
            <Ticks items={["A free, detailed estimate before any work", "Your choice of Trex composite or wood", "The old deck torn out and hauled away", "Stairs, rails and screened porches built to match"]} />
          </div>
        </div>
      </Section>

      <Section tone="sand" eyebrow="Where we work" title="Areas we serve">
        <Areas
          text={<>We build decks across Greenville and the Upstate from our Rutherford Road office, and <a href="/services/aluminum-patio-covers/">patio covers</a> and <a href="/blog/deck-cost-per-square-foot/">deck prices</a> have their own pages.</>}
          places={["Greenville", "Simpsonville", "Greer", "Easley", "Travelers Rest"]}
        />
        <p style={{ marginTop: 20 }}>Roof due as well? See <a href="/services/roofing/">roofing in Greenville, SC</a>.</p>
      </Section>

      <Section eyebrow="Questions" title="Deck questions, answered" intro="What Greenville homeowners ask before they build, answered.">
        <div className="t-split">
          <Faq items={faqs.slice(0, 4)} />
          <div style={{ display: "grid", gap: 20 }}>
            <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "16 / 10" }}><img src="/images/deck-stairs-composite-treads-black-balusters-detail.webp" alt="Composite deck stairs with black balusters" loading="lazy" /></figure>
            <Faq items={faqs.slice(4)} />
          </div>
        </div>
      </Section>

      <CtaForm title="Ready when you are" text="Book a free estimate, or call and we'll set a time. The coffee tastes better on a deck that doesn't wobble." project="Deck, porch or patio cover" />
    </Site>
  );
}
