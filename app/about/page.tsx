// About, redesign 22 October 2026. Facts from context/business.md and the Google profile.
import { Site, PageHero, Band, Section, Cards, FeatureQuote, Photos, Areas, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {
  title: { absolute: "About Trinity Exteriors | Greenville, SC Home Contractor" },
  description: "Trinity Exteriors is owned by Billy and Erica Stewart and works across seven Upstate counties: roofs and storm claims, siding, gutters, decks, patio covers and work inside the house.",
  alternates: { canonical: "/about/" },
};

const HOURS = [
  ["Monday", "8:00am – 6:00pm"], ["Tuesday", "8:00am – 6:00pm"], ["Wednesday", "8:00am – 6:00pm"],
  ["Thursday", "8:00am – 6:00pm"], ["Friday", "8:00am – 6:00pm"], ["Saturday", "Closed"], ["Sunday", "Closed"],
];

export default function Page() {
  return (
    <Site>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", url: "https://trinityext.com/about/", about: business }} />

      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
        eyebrow="About us"
        title="Who turns up when you call"
        lead={<p>Trinity is owned by Billy and Erica Stewart and runs out of 1801 Rutherford Rd in Greenville. We're one contractor for the whole house: roofs and storm damage claims, siding and gutters, decks and patio covers, and work inside the house too. Tim Graveline runs roofing sales, and you will see his name in 32 of our Google reviews.</p>}
        cta="Book a visit"
        main={{ src: "/images/underlayment-going-on-snow-on-ground-aerial.webp", alt: "Trinity crew laying underlayment on a roof with snow on the ground" }}
        second={{ src: "/images/deck-low-gray-composite-navy-house-concrete-pad.webp", alt: "Low gray composite deck behind a navy house" }}
        note={{ quote: "No high pressure sales. No hidden costs. Just a quality job at a fair price.", cite: "Gene S., Google review" }}
      />

      <Band items={[
        { big: "5.0", text: "From 106 Google reviews, 104 of them five stars. Every one is on our Google profile." },
        { big: "7 counties", text: "Greenville, Spartanburg, Anderson, Pickens, Oconee, Laurens and Greenwood." },
        { big: "347", text: "Job photos on our Google profile, roofs to decks." },
      ]} />

      <Section eyebrow="How we work" title="Quoted first, there for the claim, gone without a trace.">
        <Cards items={[
          { title: "Quoted before we start", text: "A free inspection first, then a written estimate before any work starts." },
          { title: "We stay with your claim", text: "Customers write about Tim pushing their insurance claim through, even after a first denial." },
          { title: "We clean up", text: "Reviews mention crews sweeping the yard for nails and leaving the place the way they found it." },
          { title: "Owens Corning shingles", text: "Most recent roofs use Owens Corning Duration, with ice and water barrier as standard." },
        ]} />
      </Section>

      <Section tone="sand">
        <FeatureQuote
          eyebrow="In a customer's words"
          quote="I just want to say thank you to Billy and his team for creating a wonderful deck for me and my family to enjoy for years to come. They replaced an old wooden deck with Trex composite and I couldn't be happier with the results and price."
          cite="Michael L., Google review"
          img={{ src: "/images/deck-brown-composite-brick-house-black-balusters.webp", alt: "Brown composite deck with black balusters behind a brick house" }}
          chips={["Billy and his team", "Trex composite", "Fair price"]}
        />
      </Section>

      <Section eyebrow="Who turns up" title="The crew, at work">
        <Photos items={[
          { src: "/images/roof-replacement-brown-shingles-top-down-aerial.webp", alt: "Top-down aerial of a new brown shingle roof, winter install by the roofing crew" },
          { src: "/images/deck-stairs-composite-treads-paver-patio.webp", alt: "Composite deck stairs leading to a paver patio, built by the deck crew" },
          { src: "/images/inspection-hand-lifting-shingle-tab-nails.webp", alt: "Hand lifting a shingle tab to check the nailing during an inspection" },
          { src: "/images/deck-elevated-pressure-treated-aluminum-cover.webp", alt: "Elevated deck with an aluminum patio cover, built by the deck crew" },
          { src: "/images/roof-replacement-charcoal-shingles-cape-cod-dormers.webp", alt: "Charcoal shingle roof on a cape cod home with dormers" },
        ]} />
      </Section>

      <Section eyebrow="Where we work" title="Areas we cover">
        <div className="t-split">
          <Areas text="Seven Upstate counties. These are the towns we get called to most." places={["Greenville", "Spartanburg", "Anderson", "Greenwood", "Simpsonville", "Greer", "Easley", "Travelers Rest"]} />
          <div className="t-prose">
            <h3 style={{ marginTop: 0 }}>Opening hours</h3>
            <div className="t-table-wrap">
              <table><tbody>{HOURS.map(([d, h]) => <tr key={d}><th scope="row">{d}</th><td>{h}</td></tr>)}</tbody></table>
            </div>
          </div>
        </div>
      </Section>

      <CtaForm />
    </Site>
  );
}
