// Storm damage roofing, redesign 22 October 2026. Words carried over from the
// proof-checked v1 page. Insurance wording stays within SC H.4817 caution:
// we inspect, show the damage and can be there for the adjuster.
import { Site, PageHero, Band, Section, FeatureQuote, Photos, Ticks, Areas, Faq, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {
  title: { absolute: "Storm Damage Roofing & Insurance Claims in Greenville, SC | Trinity Exteriors" },
  description: "Hail or wind damaged your roof? Free storm damage inspection in Greenville and the Upstate, and someone there when your adjuster comes. 30 of our 106 Google reviews mention insurance help.",
  alternates: { canonical: "/services/storm-damage-roofing/" },
};

const places = ["Greenville", "Spartanburg", "Anderson", "Greenwood", "Simpsonville", "Greer", "Easley", "Travelers Rest"];

const faqs = [
  { q: "How do I know if my roof has storm damage?", t: "Often you can't tell from the ground. Missing shingles are easy to spot, but hail marks and lifted tabs usually aren't. That's what the free inspection is for: we go up, find the damage and explain it before any work starts." },
  {
    q: "Do you work with insurance claims?", open: true,
    t: "Yes. We inspect the roof, show you the damage and can be there when your adjuster comes out, while you file the claim and make every decision, and we check the siding too. 30 of our Google reviews mention insurance help. “Got it approved when no one else could.” (Brandon H.)",
    a: <p>Yes. We inspect the roof, show you the damage and can be there when your adjuster comes out, while you file the claim and make every decision, and we check the <a href="/services/siding-installation/">siding</a> too. 30 of our Google reviews mention insurance help. “Got it approved when no one else could.” (Brandon H.)</p>,
  },
  { q: "What if my insurer only wants to patch it, or says no?", t: "Get the inspection anyway, so you know what's really up there. Several of our customers came to us after a repair-only answer or a denial. “Was working with another contractor and they were unable to get the insurance company to approve.” (Samantha S.)" },
  { q: "What will a storm damaged roof cost me?", t: "It depends on what your policy covers, your deductible and what the inspection finds. You'll see the number before any work starts. “They were up front about the process and costs and held true to that throughout the new roof project.” (Andy A.)" },
  { q: "Can I upgrade the shingles on an insurance roof?", t: "Yes. Customers have. “After they got the insurance to finally approve, they then worked with us on some roofing material upgrades we wanted.” (Theodore D.) Our recent roofs use Owens Corning Duration shingles, with ice and water barrier at the eaves, valleys and penetrations as standard." },
  {
    q: "What if the roof is leaking while the claim is open?",
    t: "Call us, and if water is coming in, start with emergency roof repair. One customer waited out a long claim with leaks, and said: “they stuck with us through the time it took to settle with our insurance by providing tarps to cover the leaks and replacing them as needed” (James W.)",
    a: <p>Call us, and if water is coming in, start with <a href="/services/emergency-roof-repair/">emergency roof repair</a>. One customer waited out a long claim with leaks, and said: “they stuck with us through the time it took to settle with our insurance by providing tarps to cover the leaks and replacing them as needed” (James W.)</p>,
  },
  { q: "How long does the new roof take once it's approved?", t: "It depends on the size and pitch of the roof, and you'll get a timeline at the inspection. Six of our Google reviewers say the whole roof went on in one day. “Crew finished their work in one day despite the weather being over ninety degrees!” (Marvin S.)" },
  { q: "What areas do you serve?", t: "Greenville and the Upstate, from our office at 1801 Rutherford Rd in Greenville. That includes Spartanburg, Anderson, Greenwood, Simpsonville, Greer, Easley and Travelers Rest." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { ...business, "@type": ["HomeAndConstructionBusiness", "RoofingContractor"], alternateName: "Trinity Restoration And Contracting Inc" },
    {
      "@type": "Service", name: "Storm damage roofing", serviceType: "Storm damage roof inspection and replacement", url: "https://trinityext.com/services/storm-damage-roofing/",
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
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Storm damage" }]}
        eyebrow="Storm damage · Greenville, SC"
        title="Storm Damage Roofing and Insurance Claims in Greenville, SC"
        lead={<p>Hail or wind got your roof? Trinity Exteriors inspects it for free, shows you the damage, and can be on the roof when your insurance adjuster comes out. 30 of our 106 Google reviews mention help with an insurance claim, including claims that were turned down first. Once it's approved, the new roof goes on with ice and water barrier at the eaves, valleys and penetrations as standard.</p>}
        ticks={["Free storm damage inspection", "Help with the insurance claim", "There when the adjuster comes"]}
        main={{ src: "/images/inspection-chalk-circle-on-shingle.webp", alt: "Damage point circled in chalk on a shingle during a roof inspection" }}
        second={{ src: "/images/roof-replacement-charcoal-shingles-cape-cod-dormers.webp", alt: "New charcoal shingle roof on a white cape cod home with dormers" }}
        note={{ quote: "Got it approved when no one else could.", cite: "Brandon H., Google review" }}
        cta="Book my free inspection"
      />

      <Band items={[
        { big: "30", text: "Of our 106 Google reviews mention help with an insurance claim." },
        { big: "5.0", text: "Google rating, from 106 Google reviews." },
        { big: "1 day", text: "How long 6 reviewers say their whole roof took." },
      ]} />

      <Section eyebrow="One storm customer" title="From a storm to a new roof" intro="A hurricane, a claim and a full replacement. Here's how one customer put it, word for word.">
        <FeatureQuote
          eyebrow="Roof replacement · September 2025"
          quote="Trinity worked directly with my State Farm claims agent and presented my case that I needed an entire roof replaced after the hurricane. They took so much stress and worry off my shoulders by handling this with professionalism and grace."
          cite="Tammy D., via Google"
          img={{ src: "/images/roof-replacement-brown-shingles-top-down-aerial.webp", alt: "New brown shingle roof seen from directly above" }}
        />
      </Section>

      <Section tone="sand" eyebrow="Storm work" title="What an inspection finds, and what we replace">
        <Photos items={[
          { src: "/images/inspection-hand-lifting-shingle-tab-nails.webp", alt: "Hand lifting a shingle tab to check the nails underneath" },
          { src: "/images/inspection-moisture-meter-ceiling-reads-hi.webp", alt: "Moisture meter reading high on a ceiling below a roof leak" },
          { src: "/images/replaced-osb-sheet-with-water-staining.webp", alt: "Water-stained sheet of roof decking pulled off during a replacement" },
          { src: "/images/tear-off-bare-osb-with-one-new-sheet.webp", alt: "Roof stripped to the decking with one new sheet set in" },
          { src: "/images/underlayment-going-on-snow-on-ground-aerial.webp", alt: "Underlayment going on a two-story brick home with snow on the ground" },
        ]} />
      </Section>

      <Section eyebrow="How it works" title="What happens after a storm">
        <div className="t-split">
          <div className="t-prose-col">
            <figure className="t-feature-img" style={{ margin: "0 0 24px", aspectRatio: "4 / 3" }}><img src="/images/new-shingles-pipe-boot-close-up.webp" alt="New shingles sealed around a pipe boot, close up" loading="lazy" /></figure>
            <p>Every storm hits a roof differently, so the price comes after we've been up on yours. You'll know what it covers before work starts.</p>
          </div>
          <Ticks items={[
            "A free inspection for hail and wind damage",
            "Ice & water barrier at the eaves, valleys and penetrations",
            "Owens Corning shingles on our recent roofs",
            "Someone on the roof when your adjuster comes out",
          ]} />
        </div>
      </Section>

      <Section tone="sand" eyebrow="Where we work" title="Areas we serve">
        <div className="t-split">
          <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "4 / 3" }}><img src="/images/crew-shingling-brick-two-story-ladders.webp" alt="Trinity crew shingling a two-story brick home" loading="lazy" /></figure>
          <Areas text="We inspect storm damage across Greenville and the Upstate from our Rutherford Road office, including Spartanburg, Anderson and Greenwood." places={places} />
        </div>
      </Section>

      <Section eyebrow="Questions" title="Storm damage and insurance questions, answered" intro="What Upstate homeowners ask us after hail or wind.">
        <div className="t-split">
          <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "4 / 3" }}><img src="/images/roof-replacement-charcoal-shingles-paver-patio-aerial.webp" alt="New charcoal shingle roof above a paver patio, aerial view" loading="lazy" /></figure>
          <Faq items={faqItems.slice(0, 4)} />
        </div>
        <div className="t-split" style={{ marginTop: 40 }}>
          <figure className="t-feature-img" style={{ margin: 0, order: 2, aspectRatio: "4 / 3" }}><img src="/images/roof-replacement-gray-shingles-brick-front-close-aerial.webp" alt="Finished gray shingle roof on a brick-front home" loading="lazy" /></figure>
          <Faq items={faqItems.slice(4)} />
        </div>
      </Section>

      <CtaForm title="Storm came through?" text="Book a free storm damage inspection, or call and we'll set a time. The hail didn't make an appointment. We will." project="Roof or storm damage" />
    </Site>
  );
}
