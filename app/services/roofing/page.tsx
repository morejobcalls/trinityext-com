// Roofing hub, redesign 22 October 2026. Words carried over from the proof-checked
// v1 page; every quote is verbatim from Trinity's Google reviews.
import { Site, PageHero, Band, Section, FeatureQuote, Photos, Ticks, Areas, Faq, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {
  title: { absolute: "Roofing Contractor in Greenville, SC | Trinity Exteriors" },
  description: "Roof replacement and roof repair across Greenville and the Upstate. Free roof inspection, Owens Corning shingles and help with storm insurance claims. 5.0 from 106 Google reviews.",
  alternates: { canonical: "/services/roofing/" },
};

const places = ["Greenville", "Spartanburg", "Anderson", "Greenwood", "Simpsonville", "Greer", "Easley", "Travelers Rest"];

const faqs = [
  { q: "Is the roof inspection really free?", t: "Yes. The inspection costs nothing, and you get what we found and the price explained before any work starts." },
  {
    q: "Will you help with my insurance claim?", open: true,
    t: "Yes. If hail or wind damaged the roof, we help with the claim, including when the insurer pushes back. 30 of our Google reviews mention insurance help. “Got it approved when no one else could.” (Brandon H.) Our hail damage claim guide walks through each step.",
    a: <p>Yes. If hail or wind damaged the roof, we help with the claim, including when the insurer pushes back. 30 of our Google reviews mention insurance help. “Got it approved when no one else could.” (Brandon H.) Our <a href="/blog/hail-damage-roof-insurance-claim/">hail damage claim guide</a> walks through each step.</p>,
  },
  { q: "How long does a roof replacement take?", t: "It depends on the size and pitch of the roof, and you'll get a timeline at the inspection. Six of our Google reviewers say the whole roof went on in one day. “The entire roof was replaced in just 1 day!” (Tammy D.)" },
  { q: "How much does a new roof cost in Greenville?", t: "It depends on the roof's size and pitch, how many layers come off, and how much decking needs replacing. You get the number after the free inspection. “They were up front about the process and costs and held true to that throughout the new roof project.” (Andy A.)" },
  { q: "What shingles do you install?", t: "Our recent roofs use Owens Corning shingles, mostly the Duration line in colours like Driftwood, Williamsburg Gray, Onyx Black and Brownwood. Ice and water barrier goes on at the eaves, valleys and penetrations as standard." },
  { q: "Do you clean up after the job?", t: "Our customers say so. Eight Google reviews mention the cleanup or the nail sweep. “They left the area so that you would never know that anything was done except for the look of the roof.” (Scott D.)" },
  {
    q: "Do you repair roofs, or only replace them?",
    t: "Both. We fix leaks and storm damage, and we replace roofs that are past saving. The inspection tells you which one you need.",
    a: <p>Both. We fix <a href="/services/emergency-roof-repair/">leaks</a> and <a href="/services/storm-damage-roofing/">storm damage</a>, and we replace roofs that are past saving. The inspection tells you which one you need.</p>,
  },
  { q: "What areas do you serve?", t: "Greenville and the Upstate, from our office at 1801 Rutherford Rd in Greenville. That includes Spartanburg, Anderson, Greenwood, Simpsonville, Greer, Easley and Travelers Rest." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { ...business, "@type": ["HomeAndConstructionBusiness", "RoofingContractor"], alternateName: "Trinity Restoration And Contracting Inc" },
    {
      "@type": "Service", name: "Roofing", serviceType: "Roof replacement and roof repair", url: "https://trinityext.com/services/roofing/",
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
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Roofing" }]}
        eyebrow="Roofing · Greenville, SC"
        title="Roofing Contractor in Greenville, SC"
        lead={<p>Trinity Exteriors replaces and repairs roofs across Greenville and the Upstate. Every job starts with a free roof inspection, and you'll see the cost before any work begins. Our recent roofs use Owens Corning shingles, with ice and water barrier at the eaves, valleys and penetrations as standard. If a storm did the damage, we'll help with the insurance claim.</p>}
        ticks={["Free roof inspection", "Help with the insurance claim", "Ice & water barrier as standard"]}
        main={{ src: "/images/roof-replacement-blue-gray-shingles-brick-two-story-aerial.webp", alt: "New blue-gray shingle roof on a two-story brick home in the Upstate, seen from above" }}
        second={{ src: "/images/crew-shingling-brick-two-story-ladders.webp", alt: "Trinity crew shingling a two-story brick home" }}
        note={{ quote: "A large, 2 story roof they were able to finish in a single day.", cite: "Theodore D., Google review" }}
        cta="Book my free inspection"
      />

      <Band items={[
        { big: "5.0", text: "Google rating, from 106 Google reviews." },
        { big: "30", text: "Google reviews mention help with the insurance claim." },
        { big: "1 day", text: "How long 6 reviewers say their whole roof took." },
      ]} />

      <Section eyebrow="The result" title="What you're left with" intro="A new roof, a tidy yard and a driveway your tires can trust again. Here's one customer, word for word.">
        <FeatureQuote
          eyebrow="Roof replacement · March 2026"
          quote="They worked with our insurance carrier (SF) that tried to deny the claim. … A large, 2 story roof they were able to finish in a single day."
          cite="Theodore D., via Google"
          img={{ src: "/images/roof-replacement-charcoal-shingles-paver-patio-aerial.webp", alt: "New charcoal shingle roof above a paver patio, aerial view" }}
        />
      </Section>

      <Section tone="sand" eyebrow="Our work" title="Recent Trinity roofs in the Upstate">
        <Photos items={[
          { src: "/images/roof-replacement-gray-shingles-brick-front-close-aerial.webp", alt: "Finished gray shingle roof on a brick-front home" },
          { src: "/images/tear-off-exposed-osb-decking-crew-aerial.webp", alt: "Old roof torn off down to the decking, crew at work" },
          { src: "/images/roof-replacement-brown-shingles-brick-colonial-teal-shutters.webp", alt: "New brown shingle roof on a brick colonial with teal shutters" },
          { src: "/images/eave-detail-membrane-underlayment-gutter.webp", alt: "Ice and water barrier membrane at the eave above the gutter" },
          { src: "/images/underlayment-crew-tarps-catching-debris-aerial.webp", alt: "Underlayment going on with tarps catching the tear-off debris" },
        ]} />
      </Section>

      <Section eyebrow="What's included" title="What comes with every roof">
        <div className="t-split">
          <div className="t-prose-col">
            <figure className="t-feature-img" style={{ margin: "0 0 24px", aspectRatio: "4 / 3" }}><img src="/images/new-shingles-pipe-boot-close-up.webp" alt="New shingles sealed around a pipe boot, close up" loading="lazy" /></figure>
            <p>Every roof is different, so the price comes after we've been up on yours. You'll know what it covers before work starts. Our <a href="/blog/how-much-does-a-new-roof-cost/">new roof cost guide</a> shows what Upstate homeowners paid.</p>
          </div>
          <Ticks items={[
            "A free roof inspection before any quote",
            "Ice & water barrier at the eaves, valleys and penetrations",
            "Owens Corning shingles on our recent roofs",
            "Help with the insurance claim after storm damage",
          ]} />
        </div>
      </Section>

      <Section tone="sand" eyebrow="Where we work" title="Areas we serve">
        <div className="t-split">
          <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "4 / 3" }}><img src="/images/crew-five-roofers-shingling-ladder-hoist.webp" alt="Trinity roofing crew shingling a home with a ladder hoist" loading="lazy" /></figure>
          <Areas text="We cover Greenville and the Upstate from our Rutherford Road office, including Spartanburg, Anderson and Greenwood." places={places} />
        </div>
      </Section>

      <Section eyebrow="Questions" title="Roofing questions, answered" intro="The things Greenville homeowners ask us most, answered.">
        <div className="t-split">
          <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "4 / 3" }}><img src="/images/roof-replacement-charcoal-shingles-cape-cod-dormers.webp" alt="New charcoal shingle roof on a white cape cod home with dormers" loading="lazy" /></figure>
          <Faq items={faqItems.slice(0, 4)} />
        </div>
        <div className="t-split" style={{ marginTop: 40 }}>
          <figure className="t-feature-img" style={{ margin: 0, order: 2, aspectRatio: "4 / 3" }}><img src="/images/roof-replacement-brown-shingles-top-down-aerial.webp" alt="New brown shingle roof seen from directly above" loading="lazy" /></figure>
          <Faq items={faqItems.slice(4)} />
        </div>
      </Section>

      <CtaForm title="Ready when you are" text="Book a free inspection, or call and we'll set a time. The roof isn't going to inspect itself." project="Roof or storm damage" />
    </Site>
  );
}
