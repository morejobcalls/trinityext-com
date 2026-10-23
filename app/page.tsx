// Homepage, redesign 22 October 2026: Trinity as the one-stop home contractor.
// Every quote is word for word from Trinity's Google reviews (context/proof/reviews).
import { Site, HeroArt, Rating, Band, Section, ZoneCards, FeatureQuote, Steps, Reviews, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {
  title: { absolute: "Home Contractor in Greenville, SC: Roofs, Decks, Remodels" },
  description: "Greenville home contractor for the whole house: roofs, siding, gutters, decks, floors and remodels. 5.0 from 106 Google reviews. Free written estimates.",
  alternates: { canonical: "/" },
};

const reviews = [
  { quote: "Billy and Rivers have provided honest and professional service.", name: "William C.", job: "Deck" },
  { quote: "Excellent work, excellent price. Helpful throughout the whole process.", name: "Kev", job: "Google review" },
  { quote: "Price was great and the roofing crew were respectful and quick.", name: "Kathy R.", job: "Roof" },
  { quote: "They replaced an old wooden deck with Trex composite and I couldn't be happier with the results.", name: "Michael L.", job: "Deck" },
  { quote: "Honest and great priced! They came out quick and finished as promised!", name: "Kenneth B.", job: "Roof" },
  { quote: "Called Trinity after seeing their work in several homes in our neighborhood.", name: "Tom P.", job: "Roof" },
];

export default function Page() {
  return (
    <Site>
      <JsonLd data={{ "@context": "https://schema.org", ...business, description: "One local contractor for the whole house: roofing, storm damage, siding, gutters, decks, patio covers, flooring and remodels across Greenville and the Upstate." }} />

      <section className="t-hero">
        <div className="t-wrap t-hero-grid">
          <div>
            <span className="t-eyebrow">Greenville &amp; the Upstate</span>
            <h1>One contractor you can trust with the <em>whole house.</em></h1>
            <p className="t-lead">Roofs, decks, siding, gutters, floors and remodels, all from one local crew. Great work at a fair price, with the cost explained before anything starts.</p>
            <div className="t-hero-ctas">
              <a className="t-btn t-btn-primary" href="#estimate">Get a free estimate</a>
              <a className="t-btn t-btn-ghost" href="tel:+18648447777">Call (864) 844-7777</a>
            </div>
            <Rating />
          </div>
          <HeroArt
            main={{ src: "/images/deck-two-story-screened-porch-stairs.webp", alt: "Two-storey screened porch and stairs built by Trinity" }}
            second={{ src: "/images/roof-replacement-charcoal-shingles-tan-craftsman-home.webp", alt: "New charcoal roof on a craftsman home" }}
            note={{ quote: "No high pressure sales. No hidden costs. Just a quality job at a fair price.", cite: "Gene S., Google review" }}
          />
        </div>
      </section>

      <Band items={[
        { big: "48 of 57", text: "Google reviewers who rated our price called it \"great\" or \"reasonable\"." },
        { big: "One call", text: "Roof, siding, gutters, deck and the inside of the house, handled by the same team." },
        { big: "Free", text: "Estimates and inspections, with the price in writing before any work begins." },
      ]} />

      <Section eyebrow="What we do" title="From the roof down to the floors." intro="Most homeowners juggle three or four contractors. Our customers call us once.">
        <ZoneCards />
      </Section>

      <Section tone="sand">
        <FeatureQuote
          eyebrow="The whole-house job"
          quote="TRC put in a new roof on our house and new gutters. Replaced some of our siding. Then they repainted our entire house outside. They make you feel like family."
          cite="Deborah H., Google review"
          img={{ src: "/images/roof-replacement-brown-shingles-brick-colonial-teal-shutters.webp", alt: "Brick colonial home with a new brown roof" }}
          chips={["Roof", "Gutters", "Siding", "Exterior paint", "One crew"]}
        />
      </Section>

      <Section eyebrow="How it works" title="Straight answers, a fair price, and a clean yard.">
        <Steps items={[
          { title: "We come look", text: "A free visit to see the job, measure up and tell you plainly what it needs, and what it doesn't.", proof: "Straight forward and honest as they come.", who: "Derek B." },
          { title: "You get the price first", text: "The cost in writing before work starts, so there are no surprises on the last day.", proof: "Quoted price right away with no pressure.", who: "Tom P." },
          { title: "We build it and tidy up", text: "One crew, start to finish, and the site left the way we found it, only better.", proof: "Did great work in a timely manner, and everything came out great.", who: "Andrew V." },
        ]} />
      </Section>

      <Section eyebrow="106 Google reviews · 5.0" title="Neighbours say it better.">
        <Reviews items={reviews} />
        <p style={{ marginTop: 8 }}><a className="t-btn t-btn-ghost" href="/reviews/">Read more reviews</a></p>
      </Section>

      <CtaForm />
    </Site>
  );
}
