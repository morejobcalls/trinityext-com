// Real Google reviews, copied word for word from context/proof/reviews/reviews-raw.md.
// Excerpts only, never edited. Add more from that file; never write one.
import { Site, Section, Rating, HeroArt, Reviews, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {
  title: { absolute: "Trinity Exteriors Reviews | 5.0 From 106 Google Reviews" },
  description: "Read what Upstate homeowners say about Trinity Exteriors: insurance claims approved, roofs replaced in a day, decks they love, fair prices. 5.0 from 106 Google reviews.",
  alternates: { canonical: "/reviews/" },
};

const REVIEWS: ReadonlyArray<{ q: string; n: string; d: string }> = [{"q": "Was working with another contractor and they were unable to get the insurance company to approve. Tim was able to get the insurance company to approve with almost no involvement of us.", "n": "Samantha S.", "d": "August 2025"}, {"q": "They worked with our insurance carrier (SF) that tried to deny the claim.", "n": "Theodore D.", "d": "March 2026"}, {"q": "He literally battled with BOTH of our insurance companies. Over 10 different reps/Supervisors.", "n": "Sarina B.", "d": "May 2025"}, {"q": "Got it approved when no one else could.", "n": "Brandon H.", "d": "October 2025"}, {"q": "they stuck with us through the time it took to settle with our insurance by providing tarps to cover the leaks and replacing them as needed", "n": "James W.", "d": "December 2025"}, {"q": "A large, 2 story roof they were able to finish in a single day. Two months later, after snow and rain with no issues, no leaks", "n": "Theodore D.", "d": "March 2026"}, {"q": "the entire roof was replaced in just 1 day!", "n": "Tammy D.", "d": "September 2025"}, {"q": "Crew finished their work in one day despite the weather being over ninety degrees!", "n": "Marvin S.", "d": "May 2025"}, {"q": "No high pressure sales. No hidden costs. Just a quality job at a fair price.", "n": "Gene S.", "d": "March 2026"}, {"q": "They were up front about the process and costs and held true to that throughout the new roof project.", "n": "Andy A.", "d": "May 2025"}, {"q": "He even came back multiple times to look for nails.", "n": "Amberly S.", "d": "April 2026"}, {"q": "They left the area so that you would never know that anything was done except for the look of the roof.", "n": "Scott D.", "d": "April 2026"}, {"q": "My sister and I have spent nearly every morning sipping coffee and reading books since it's been finished. A little slice of heaven.", "n": "Palma H.", "d": "October 2026"}, {"q": "Spending time on my deck now is enjoyable instead of being afraid of falling through a rotten board.", "n": "Kendra W.", "d": "September 2026"}, {"q": "They replaced an old wooden deck with Trex composite and I couldn't be happier with the results and price.", "n": "Michael L.", "d": "September 2026"}, {"q": "When they tell you not to worry because they have your back, trust them because they mean it - they LITERALLY HAVE YOUR BACK.", "n": "Rochelle J.", "d": "April 2026"}, {"q": "We went with Tim's company for our new roof after he did such a great job on our neighbors house.", "n": "Amberly S.", "d": "April 2026"}];

export default function Page() {
  return (
    <Site>
      <JsonLd data={{ "@context": "https://schema.org", ...business }} />

      <section className="t-pagehero">
        <div className="t-wrap t-hero-grid">
          <div>
            <nav className="t-crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Reviews</nav>
            <span className="t-eyebrow">What customers say</span>
            <h1 style={{ fontSize: "clamp(38px, 4.8vw, 62px)", margin: "16px 0 22px" }}>Trinity Exteriors reviews</h1>
            <p className="t-lead">5.0 stars from 106 Google reviews, 104 of them five stars. Roofs, storm claims, decks and porches, in our customers' own words. These are excerpts, word for word. Read every one on our Google profile.</p>
            <div style={{ marginTop: 24 }}><Rating /></div>
          </div>
          <HeroArt
            main={{ src: "/images/screened-porch-interior-ceiling-fan.webp", alt: "Inside a screened porch built by Trinity, with a ceiling fan" }}
            second={{ src: "/images/roof-replacement-gray-shingles-brick-front-close-aerial.webp", alt: "New gray shingle roof on a brick home" }}
            note={{ quote: "When they tell you not to worry because they have your back, trust them because they mean it.", cite: "Rochelle J., Google review" }}
          />
        </div>
      </section>

      <Section tight>
        <Reviews items={REVIEWS.map((r) => ({ quote: r.q, name: r.n, job: `Google review · ${r.d}` }))} />
        <p style={{ marginTop: 12 }}><a className="t-btn t-btn-primary" href="/contact/">Book your free estimate</a></p>
      </Section>

      <CtaForm />
    </Site>
  );
}
