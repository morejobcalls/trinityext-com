// The /blog branch index (pyramid rule 7): kicker + H1 naming the branch, intro,
// one entry per post. Never an <article>, never a post wearing the index URL.
//
// /blog-post appends one entry per published post: title as a descriptive
// link, one-sentence hook, date. Posts live FLAT at /blog/[slug].
// Redesign port 22 October 2026: cards use components/site + app/brand.css.
import { Site, Section, CtaBand } from "@/components/site";
import { isLive } from "@/lib/publishing";

export const metadata = {
  title: { absolute: "Roof and Deck Advice for Upstate SC Homeowners | Trinity" },
  description: "Roof costs, storm damage insurance claims, flat roofs and deck prices, explained in plain words by the Trinity Exteriors team in Greenville, SC.",
  alternates: { canonical: "/blog/" },
};

// /blog-post adds entries here, newest first: { slug, title, hook, date }
const ALL_POSTS: ReadonlyArray<{ slug: string; title: string; hook: string; date: string }> = [
  { slug: "trex-vs-timbertech", title: "Trex vs TimberTech", hook: "2026 board prices tier by tier, the warranty fine print, heat in a Southern summer, and where AZEK and Fiberon fit.", date: "30 October 2026" },
  { slug: "architectural-shingles-vs-3-tab", title: "Architectural shingles vs 3-tab", hook: "Cost per year of roof, wind warranties, why 3-tab is getting hard to match, and Owens Corning Duration against Oakridge.", date: "28 October 2026" },
  { slug: "roof-leak-repair-cost", title: "How much does roof leak repair cost?", hook: "Prices for every common leak, how to find one yourself, and what two Upstate homeowners paid for theirs.", date: "26 October 2026" },
  { slug: "how-long-does-a-roof-last", title: "How long does a roof last?", hook: "Lifespans for every roofing material, why Upstate heat and hail shorten them, and how to tell how old yours is.", date: "23 October 2026" },
  { slug: "how-much-does-a-new-roof-cost", title: "How much does a new roof cost?", hook: "What 19 Upstate homeowners actually paid, and what a roofing quote should list line by line.", date: "22 October 2026" },
  { slug: "hail-damage-roof-insurance-claim", title: "Hail damage roof insurance claim: how it works", hook: "The inspection, the adjuster visit, what gets paid, and the South Carolina rules worth knowing.", date: "22 October 2026" },
  { slug: "flat-roof-replacement-cost", title: "Flat roof replacement cost", hook: "What TPO, EPDM and modified bitumen cost per square foot, and the line items that move a quote.", date: "22 October 2026" },
  { slug: "deck-cost-per-square-foot", title: "Deck cost per square foot", hook: "A 16x16 deck priced out, wood against composite over ten years, and what three Upstate homeowners paid.", date: "22 October 2026" },
];

// Held posts (lib/publishing.ts) stay off the index until their date.
const POSTS = ALL_POSTS.filter((p) => isLive(`/blog/${p.slug}`));

// Card photo per post: the post's own hero image.
const IMAGES: Record<string, { src: string; alt: string }> = {
  "trex-vs-timbertech": { src: "/images/deck-low-gray-composite-navy-house-concrete-pad.webp", alt: "Low gray composite deck sitting close to the lawn with a wide step down to a new concrete pad behind a navy-sided home" },
  "architectural-shingles-vs-3-tab": { src: "/images/roof-replacement-brown-shingles-brick-colonial-teal-shutters.webp", alt: "Drone view of a two-story brick and siding home with a new brown architectural shingle roof, teal shutters and a crepe myrtle in bloom" },
  "roof-leak-repair-cost": { src: "/images/new-shingles-pipe-boot-close-up.webp", alt: "Close-up of a black rubber pipe boot sealed around a vent pipe on new gray architectural shingles" },
  "how-long-does-a-roof-last": { src: "/images/tear-off-exposed-osb-decking-crew-aerial.webp", alt: "Drone view of a crew tearing old shingles off an Upstate home, with bare wood decking showing on half the roof" },
  "how-much-does-a-new-roof-cost": { src: "/images/roof-replacement-blue-gray-shingles-brick-two-story-aerial.webp", alt: "New blue-gray architectural shingle roof on a brick two-story home in the Upstate, seen from a drone" },
  "hail-damage-roof-insurance-claim": { src: "/images/inspection-chalk-circle-on-shingle.webp", alt: "A damage point circled in chalk on a shingle during a roof inspection" },
  "flat-roof-replacement-cost": { src: "/images/stock/flat-roof-modified-bitumen-rolls-weathered-seams.webp", alt: "Weathered modified bitumen flat roof with overlapping seams running across it" },
  "deck-cost-per-square-foot": { src: "/images/deck-cost-hero-raised-wood-deck-aluminum-cover.webp", alt: "Raised pressure-treated wood deck with black balusters and a dark aluminum roof cover on the back of a two-story home" },
};

export default function BlogIndex() {
  return (
    <Site>
      <section className="t-pagehero" style={{ paddingBottom: 0 }}>
        <div className="t-wrap">
          <nav className="t-crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Advice</nav>
          <span className="t-eyebrow">Advice</span>
          <h1 style={{ fontSize: "clamp(38px, 4.8vw, 62px)", margin: "16px 0 22px", maxWidth: 820 }}>Roofing and deck advice for Upstate homeowners</h1>
          <p className="t-lead">Straight answers on roof costs, storm damage claims and decks, from the crew that does the work across Greenville and the Upstate.</p>
        </div>
      </section>
      <Section tight>
        {POSTS.length === 0 ? (
          <p>New articles are on the way.</p>
        ) : (
          <div className="t-posts">
            {POSTS.map((post) => (
              <a className="t-post" key={post.slug} href={`/blog/${post.slug}/`}>
                {IMAGES[post.slug] && <div className="t-post-img"><img src={IMAGES[post.slug].src} alt={IMAGES[post.slug].alt} loading="lazy" /></div>}
                <div className="t-post-body">
                  <span className="t-eyebrow">Advice · {post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.hook}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </Section>
      <CtaBand />
    </Site>
  );
}
