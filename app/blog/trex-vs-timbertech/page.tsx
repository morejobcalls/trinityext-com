// Blog post, /blog-post build 23 October 2026 (keyword-map row 29), scheduled 30 October 2026.
// Duplicated from how-long-does-a-roof-last; only words, images, metadata and schema changed.
// Sources: research/blog-trex-vs-timbertech/dossier.md
import { Site, ArticleShell, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {"title": {"absolute": "Trex vs TimberTech: Price, Warranty and Heat Compared"}, "description": "Trex vs TimberTech: Trex is cheaper at entry level and has the longer composite warranty, TimberTech caps more boards on four sides. 2026 prices inside.", "alternates": {"canonical": "/blog/trex-vs-timbertech/"}, "openGraph": {"title": "Trex vs TimberTech: Which Composite Deck Board Wins?", "description": "2026 board prices tier by tier, the warranty fine print, heat in a Southern summer, and where AZEK and Fiberon fit.", "url": "/blog/trex-vs-timbertech", "type": "article", "images": ["/images/deck-low-gray-composite-navy-house-concrete-pad.webp"]}};

const graph = [{"@type": "Article", "headline": "Trex vs TimberTech: Price, Warranty and Heat Compared", "description": "Trex vs TimberTech: Trex is cheaper at entry level and has the longer composite warranty, TimberTech caps more boards on four sides. 2026 prices inside.", "datePublished": "2026-10-30", "dateModified": "2026-10-30", "mainEntityOfPage": "https://trinityext.com/blog/trex-vs-timbertech/", "image": "https://trinityext.com/images/deck-low-gray-composite-navy-house-concrete-pad.webp", "author": {"@id": "https://trinityext.com/#business"}, "publisher": {"@id": "https://trinityext.com/#business"}}];

const toc = [
  {"id": "side-by-side", "label": "Trex vs TimberTech, side by side"},
  {"id": "difference", "label": "The real difference: the cap"},
  {"id": "cost", "label": "Which one costs more"},
  {"id": "warranty", "label": "Which warranty is better"},
  {"id": "heat", "label": "Which one gets hotter"},
  {"id": "azek-fiberon", "label": "Where AZEK and Fiberon fit"},
  {"id": "pros-cons", "label": "Pros and cons"},
  {"id": "field", "label": "What we see on Upstate decks"},
  {"id": "faq", "label": "Questions people ask"},
];

const X = { target: "_blank", rel: "noopener" };
const PRICES = "https://blog.advantagelumber.com/2026/07/30/how-much-does-composite-decking-cost-in-2026/";
const TREX_FAQ = "https://www.trex.com/why-trex/faq/";
const TREX_LINES = "https://www.trex.com/products/decking/";
const TREX_WARRANTY = "https://images.trex.com/is/content/trexcompany/TXA1952_Warranty_Updates_2023_R2.2_withoutSIGpdf";
const TREX_LINEAGE = "https://www.trex.com/products/decking/lineage/";
const TT_COMPARE = "https://www.timbertech.com/ideas/timbertech-vs-trex-comparison/";
const TT_WARRANTY = "https://assets.timbertech.com/content/dam/wp-content/TimberTech-composite-limited-warranty-English-10.01.23.pdf";
const TT_PVC_WARRANTY = "https://assets.timbertech.com/content/dam/wp-content/TimberTech-Advanced-PVC-Decking-Fade-and-Stain-Limited-Warranty-Vintage-Landmark-Harvest-plus-Harvest-Solstice-Collections.pdf";
const TT_GUIDE = "https://assets.timbertech.com/content/dam/wp-content/TimberTech-Composite-Installation-Guide-ENG.pdf";
const TT_HEAT = "https://www.timbertech.com/ideas/heat-resistant-composite-decking";
const tick = <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#1D7FD0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display: "inline-block", verticalAlign: "-2px", marginRight: 8}}><path d="M5 12l5 5L20 7" /></svg>;

export default function Page() {
  return (
    <Site>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [...graph, business] }} />
      <ArticleShell
        crumbs={[{ name: "Home", href: "/" }, { name: "Advice", href: "/blog/" }, { name: "Trex vs TimberTech" }]}
        eyebrow="Decking brands compared"
        title="Trex vs TimberTech"
        updated="30 October 2026"
        readMins={9}
        hero={{ src: "/images/deck-low-gray-composite-navy-house-concrete-pad.webp", alt: "Low gray composite deck sitting close to the lawn with a wide step down to a new concrete pad behind a navy-sided home" }}
        toc={toc}
      >
        <div className="t-quick"><strong>Quick answer</strong><p>Trex and TimberTech both make capped composite decking with 25- to 50-year warranties. Trex is cheaper at the entry level, about <a href={PRICES} {...X}>$2.30 a linear foot against $3.43</a>, and its top composite boards carry 50 years to TimberTech's 30. TimberTech caps most of its composite boards on all four sides. Neither warranty pays for labor.</p></div>

        <p>Trinity Exteriors builds Trex decks across Greenville and the Upstate, and we hold 5.0 stars from 106 Google reviews. Michael L. wrote that we "replaced an old wooden deck with Trex composite and I couldn't be happier with the results and price."</p>

        <p>By now you've looked at the same gray board in eleven browser tabs. One's called Pebble Grey, one's called Sea Salt Gray, and you've started to suspect they're the same board in a different hat. They're not, quite, and the differences are mostly in the fine print.</p>

        <h2 id="side-by-side">Trex vs TimberTech, side by side</h2>
        <p>Both sell capped composite boards and a PVC line. They differ on entry price, capping and the top composite warranty.</p>
        <div className="t-table-wrap"><table style={{overflowWrap: "normal"}}><thead><tr><th></th><th>Trex</th><th>TimberTech</th></tr></thead><tbody>
          <tr><td>Cap</td><td><a href={TREX_FAQ} {...X}>3 sides</a></td><td><a href={TT_COMPARE} {...X}>4 sides on most</a>, 3 on Prime</td></tr>
          <tr><td>Entry price</td><td><a href={PRICES} {...X}>$2.30 a foot</a></td><td><a href={PRICES} {...X}>$3.43 a foot</a></td></tr>
          <tr><td>Warranty</td><td><a href={TREX_LINES} {...X}>50 years</a> on top composite</td><td><a href={TT_WARRANTY} {...X}>30 years</a> on top composite</td></tr>
          <tr><td>PVC line</td><td>Refuge, <a href={TREX_LINES} {...X}>50 years</a></td><td>Advanced PVC, <a href={TT_PVC_WARRANTY} {...X}>lifetime, 50 on fade</a></td></tr>
          <tr><td>Recycled</td><td><a href={TREX_FAQ} {...X}>95%</a></td><td><a href="https://www.timbertech.com/product/pro-legacy-collection/" {...X}>About 85%</a></td></tr>
          <tr><td>Labor covered</td><td>No</td><td>No</td></tr>
          <tr><td>Owner</td><td>Trex Company, Winchester, VA</td><td><a href="https://www.sec.gov/Archives/edgar/data/1159152/000119312525154175/d68606dex991.htm" {...X}>James Hardie, since July 2025</a></td></tr>
        </tbody></table></div>
        <p>Most rows are close to a tie. The ones that aren't happen to be the rows that cost money, which feels personal, like a menu where the only dishes without a price are the specials the waiter keeps recommending.</p>

        <h2 id="difference">What's the difference between Trex and TimberTech?</h2>
        <p>The cap is the biggest difference. Trex wraps its plastic shell around three sides of every composite board and leaves the bottom bare, per <a href={TREX_FAQ} {...X}>Trex</a>. TimberTech caps <a href={TT_COMPARE} {...X}>most of its composite boards</a> on all four sides, including Legacy, Reserve and Terrain, and its cheaper Prime boards on three.</p>
        <p>Paying to protect the side that faces the dirt sounds like buying fancy lining for your socks. TimberTech says the four-sided cap shields boards from mold <a href="https://www.timbertech.com/product/pro-legacy-collection/" {...X}>"even on the bottom of the board."</a> On a low deck in a shady yard, that's where the damp lives.</p>
        <p>Mildew needs food, and TimberTech's <a href={TT_GUIDE} {...X}>install guide</a> lists it: "grass, pollens, dirt, debris." That's an Upstate April in four words. The pine pollen comes down so thick that the car turns yellow, the dog turns yellow, and for one confusing week you start to wonder whether you've always been slightly yellow.</p>
        <figure><img src="/images/deck-crew-member-laying-composite-boards.webp" alt="A Trinity crew member in a tool belt laying brown composite deck boards over a new pressure-treated wood frame" loading="lazy" /></figure>
        <p>Both brands sell PVC too: Trex Refuge and TimberTech Advanced PVC, the old AZEK line, made with <a href="https://www.timbertech.com/product/azek-vintage-collection/" {...X}>"absolutely no wood fibers."</a> TimberTech's old PRO and EDGE lines are now plain TimberTech Composite, so a quote saying "EDGE Prime+" is the same board in an old name tag.</p>

        <h2 id="cost">Is Trex cheaper than TimberTech?</h2>
        <p>At the entry level, yes. Trex Enhance Basics starts at about $2.30 a linear foot and TimberTech Prime+ at about $3.43, per <a href={PRICES} {...X}>Advantage Lumber's 2026 price list</a>. Higher up, Trex Select and TimberTech Terrain sit within 9 cents of each other, and Transcend and Legacy within 21 cents.</p>
        <div className="t-table-wrap"><table style={{overflowWrap: "normal"}}><thead><tr><th>Tier, per linear foot</th><th>Trex</th><th>TimberTech</th></tr></thead><tbody>
          <tr><td>Entry</td><td>Enhance Basics $2.30, Enhance Naturals $3.26</td><td>Prime+ $3.43</td></tr>
          <tr><td>Middle</td><td>Select $4.45</td><td>Terrain $4.36</td></tr>
          <tr><td>Top composite</td><td>Transcend $7.15</td><td>Reserve $6.12, Legacy $7.36</td></tr>
          <tr><td>Luxury</td><td>Signature $9.96</td><td>None</td></tr>
          <tr><td>PVC</td><td>Refuge, no price listed</td><td>Harvest $5.28 to Vintage $7.68</td></tr>
        </tbody></table></div>
        <p>A 16x16 deck takes about 546 linear feet of 5.5-inch boards before waste, by our math. That makes the entry gap about $617 in Trex's favor, the middle gap about $49 the other way, and Legacy about $115 more than Transcend.</p>
        <p>Deck boards are priced per linear foot, a unit that seems designed so nobody can do the math in the aisle. You'll try anyway. You'll open the phone calculator, get a number that can't possibly be right, run it again, get a bigger one, then slide the sample board back onto the shelf very gently, like it might tell somebody.</p>
        <p><strong>The boards are the cheap part.</strong> TimberTech puts materials at <a href="https://www.timbertech.com/ideas/composite-decking-material-cost/" {...X}>about 20% of a deck's total cost</a>, and Trex says labor and management are <a href="https://www.trex.com/build-your-deck/planyourdeck/deck-cost-landing/" {...X}>"nearly two-thirds."</a> A $617 board gap is real money, but it isn't where the money is.</p>
        <p>For the whole deck, frame and railings included, plus the 10-year wood vs composite math, see our <a href="/blog/deck-cost-per-square-foot/">deck cost per square foot guide</a>. If you'd rather see the boards priced on your own deck, <a href="/quote/">get a free deck estimate</a>.</p>

        <h2 id="warranty">Which has the better warranty, Trex or TimberTech?</h2>
        <p>On composite, Trex. Trex Transcend, Lineage and Signature carry <a href={TREX_LINES} {...X}>50-year residential warranties</a>, while TimberTech's best composite boards carry 30, per its <a href={TT_WARRANTY} {...X}>warranty for boards bought since October 2023</a>. TimberTech's Advanced PVC closes the gap with a <a href={TT_PVC_WARRANTY} {...X}>lifetime product warranty and 50 years on fade and stain</a>.</p>
        <div className="t-table-wrap"><table style={{overflowWrap: "normal"}}><thead><tr><th>Fine print</th><th>Trex</th><th>TimberTech composite</th></tr></thead><tbody>
          <tr><td>After year 10</td><td><a href={TREX_WARRANTY} {...X}>Prorated</a>: 90% in years 11 to 16, 10% from year 43</td><td><a href={TT_WARRANTY} {...X}>Prorated</a>: 80% in years 11 to 13, 10% from year 23</td></tr>
          <tr><td>Labor and freight</td><td><a href={TREX_WARRANTY} {...X}>Not covered</a></td><td><a href={TT_WARRANTY} {...X}>Not covered</a></td></tr>
          <tr><td>Labor warranty</td><td><a href="https://images.trex.com/is/content/trexcompany/trexpro-labor-warranty-finalpdfpdf" {...X}>Only with a registered TrexPro install</a></td><td><a href="https://assets.timbertech.com/content/dam/wp-content/timbertech-limited-replacement-labor-warranty-FINAL-English.pdf" {...X}>Only with a registered TimberTech pro</a>, 3 to 12 years</td></tr>
          <tr><td>Mold</td><td>Stains covered if cleaned off within a week</td><td>Excluded as an "environmental condition"</td></tr>
        </tbody></table></div>
        <p>So picture year 14. A board splits, you file the claim, and the warranty works exactly as written. A stack of replacement boards worth 60% to 90% of what you paid turns up in your driveway with nobody attached to it. You now own an old deck, some new boards and a Saturday, which is how most free things end up costing you a Saturday.</p>

        <h2 id="heat">Which gets hotter in the sun, Trex or TimberTech?</h2>
        <p>Both get hot, both companies say so, and darker colors run hotter. TimberTech says its Cool Touch PVC colors stay <a href={TT_HEAT} {...X}>"up to 30° cooler than many traditional composites,"</a> and Trex says its SunComfortable boards run up to <a href={TREX_LINEAGE} {...X}>35 degrees cooler than its own original boards</a>.</p>
        <p>Read the footnotes. Trex tested its dark Lava Rock board against its light Salt Flat board. That's like proving a white T-shirt is cooler than a black one, which your mom told you for free every summer of your childhood. TimberTech's doesn't name what it beat.</p>
        <figure><img src="/images/deck-elevated-pressure-treated-aluminum-cover.webp" alt="Second-story deck on braced posts with black balusters and a dark aluminum roof cover shading part of the deck" loading="lazy" /></figure>
        <p>Greenville-Spartanburg airport averages about <a href="https://www.weather.gov/media/gsp/Climate/GSP/gsp90s.pdf" {...X}>48 days a year at 90°F or hotter</a>, per the National Weather Service, and in a Florida dealer's full-sun test composite boards read <a href="https://blog.advantagelumber.com/2026/07/16/composite-vs-pvc-vs-hardwood-which-decking-is-best-for-full-sun/" {...X}>"140°F or higher"</a> on an infrared thermometer.</p>
        <p>You know the walk. The back door opens, the first bare foot lands, a noise comes out of you that you didn't know you could make, and you finish the trip to the chair on your heels like a flamingo late for a meeting, telling the kids it's "really not that bad."</p>
        <p>A poster on a <a href="https://www.tigerdroppings.com/rant/home-and-garden/trex-or-timbertech/109658282/" {...X}>Louisiana home forum</a> put it fairly: "The PVC stays cooler but still can get hot." TimberTech's advice works for either brand: leave 2-foot samples in full sun for <a href={TT_HEAT} {...X}>"at least two hours"</a> before you choose, and lean toward lighter colors.</p>
        <p>Shade beats any board. One of our Google posts shows a deck "with Trex decking and an insulated aluminum roof with a fan." If your deck faces the afternoon sun, <a href="/services/aluminum-patio-covers">see the aluminum patio covers we build</a>.</p>

        <h2 id="azek-fiberon">Trex vs AZEK vs TimberTech: where do AZEK and Fiberon fit?</h2>
        <p>AZEK isn't a separate deck brand anymore. AZEK is the company behind TimberTech, and its PVC boards are now sold as TimberTech Advanced PVC. James Hardie, the siding maker, bought AZEK on July 1, 2025, at an <a href="https://www.sec.gov/Archives/edgar/data/1159152/000119312525154175/d68606dex991.htm" {...X}>implied value of $8.4 billion</a>.</p>
        <p>So your siding and your deck boards can now share a parent company, like finding out the two kids who fight at every birthday party are cousins, and the same grandma has been buying both their presents.</p>
        <p>Fiberon is the usual third name, and it's changing hands too.</p>
        <div className="t-table-wrap"><table style={{overflowWrap: "normal"}}><thead><tr><th>Brand</th><th>Owner</th><th>Longest warranty</th></tr></thead><tbody>
          <tr><td>Trex</td><td>Trex Company, independent</td><td><a href={TREX_LINES} {...X}>50 years</a></td></tr>
          <tr><td>TimberTech, including AZEK</td><td><a href="https://www.sec.gov/Archives/edgar/data/1159152/000119312525154175/d68606dex991.htm" {...X}>James Hardie, since July 2025</a></td><td><a href={TT_PVC_WARRANTY} {...X}>Lifetime, on PVC</a></td></tr>
          <tr><td>Fiberon</td><td>Fortune Brands, <a href="https://www.sec.gov/Archives/edgar/data/0001519751/000119312526422895/fbin-20261015.htm" {...X}>$160 million sale to Inteplast Group agreed October 15, 2026</a></td><td><a href="https://www.fiberondecking.com/pages/warranty-1" {...X}>Lifetime, on Concordia and Paramount</a></td></tr>
        </tbody></table></div>
        <p>Buying from a brand that's mid-sale is fine, much like buying a house from someone who's moving. Keep the paperwork, though, because the warranty is the part that has to survive the move.</p>

        <h2 id="pros-cons">Trex vs TimberTech pros and cons</h2>
        <p>Trex wins on entry price and its top composite warranty. TimberTech wins on capping and has the deeper PVC range.</p>
        <p><strong>Trex</strong></p>
        <ul style={{listStyle: "none", paddingLeft: 0}}>
          <li>{tick}Pros: cheaper entry boards, 50 years on its top composite, 95% recycled, mold stains covered</li>
          <li>{tick}Cons: three-sided shell only, and its "cooler" claim compares its own boards</li>
        </ul>
        <p><strong>TimberTech</strong></p>
        <ul style={{listStyle: "none", paddingLeft: 0}}>
          <li>{tick}Pros: four-sided cap on most composite lines, and a full PVC range with a lifetime warranty</li>
          <li>{tick}Cons: pricier entry boards, 30 years on its top composite, mold excluded, and one <a href="https://customdeckcreations.com/ultimate-scratch-test-composite-decking-brands-put-to-the-test/" {...X}>Michigan builder's scratch test</a> found it "slightly more prone to scratching" than Trex</li>
        </ul>
        <figure><img src="/images/deck-brown-composite-brick-house-black-balusters.webp" alt="Brown composite deck with pressure-treated rail posts and black metal balusters against a brick house" loading="lazy" /></figure>
        <p>Brand loyalty is allowed here. People pick trucks, ketchup and college football teams the same way, and they defend all three at Thanksgiving with the confidence of a man who has read zero spec sheets.</p>

        <h2 id="field">What we see on Upstate decks</h2>
        <p>We build with Trex, and the board is rarely the first decision. How people use the deck comes first.</p>
        <blockquote>"We knew we needed a new deck - wood or poly - fancy or plain - bigger or smaller - so many things to think about." - Michael K., Google review</blockquote>
        <p>Michael K. wrote that Billy "asked a lot of questions about our deck - how much time we spent on it - our pros and cons" first. Most of us answer that one the way we answer the dentist about flossing: quickly, confidently, and with numbers that have never actually happened.</p>
        <p>Kendra W. knew her answer: "as close to maintenance free as I could get." We rebuilt her dad's 25-year-old design in composite.</p>
        <figure><img src="/images/deck-stairs-composite-treads-paver-patio.webp" alt="Deck stairs with dark composite treads on a new pressure-treated frame with black metal balusters, leading down to a brick paver patio" loading="lazy" /></figure>
        <p>Under either brand sits a pressure-treated frame, and that's where a deck lives or dies. Trex says joists go <a href="https://www.trex.com/academy/how-to-guides/all-guides/how-to-install-deck-joists" {...X}>"no more than 16 inches OC,"</a> and 12 inches for diagonal boards. Michael K. called his frame "so solid" and "built for life," which is about the highest praise a frame can get without its own trophy.</p>

        <h2 id="faq">Questions people ask about Trex vs TimberTech</h2>
        <p><strong>Is TimberTech better than Trex?</strong></p>
        <p>Neither wins everywhere. TimberTech caps more boards on all four sides and has a bigger PVC range. Trex is cheaper at entry level and has the longer warranty on its top composite boards.</p>
        <p><strong>Is Trex capped on all four sides?</strong></p>
        <p>No. Trex's shell wraps three sides of its composite boards, per <a href={TREX_FAQ} {...X}>Trex</a>. TimberTech caps its Legacy, Reserve and Terrain boards on four sides.</p>
        <p><strong>Does Trex make PVC decking?</strong></p>
        <p>Yes. Trex Refuge is a solid PVC deck board with a <a href={TREX_LINES} {...X}>50-year limited residential warranty</a>.</p>
        <p><strong>Is AZEK the same as TimberTech?</strong></p>
        <p>Yes, now. AZEK's PVC decking is sold as TimberTech Advanced PVC, and James Hardie has owned the company since July 2025.</p>

        <h2 id="next">Pick the board, then pick the builder</h2>
        <p>The board brand matters less than the frame under it and the crew that builds it.</p>
        <p><a href="/quote/">Get a free deck estimate</a> for your yard, or <a href="/services/deck-builder">see the decks we build in Greenville</a> first.</p>
        <p><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#003768" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display: "inline-block", verticalAlign: "-3px", marginRight: 8}}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg><strong>Read this next:</strong> <a href="/blog/deck-cost-per-square-foot/">Deck cost per square foot</a>. A 16x16 deck priced out, and what three Upstate homeowners paid.</p>
        <div className="t-midcta"><h3>Trex deck on your mind?</h3><p>Free deck estimate. You'll see the price before any work starts.</p><a className="t-btn t-btn-light" href="/quote/">Get my free estimate</a> <a href="tel:+18648447777" style={{color: "#fff", marginLeft: 14}}>(864) 844-7777</a></div>
      </ArticleShell>
      <CtaForm />
    </Site>
  );
}
