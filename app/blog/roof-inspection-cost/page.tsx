// Blog post, /blog-post build 23 October 2026 (keyword-map row 31). Duplicated from
// how-long-does-a-roof-last; only words, images, metadata and schema changed.
// Sources: research/blog-roof-inspection-cost/dossier.md
import { Site, ArticleShell, CtaForm, JsonLd, ScheduledLink, business } from "@/components/site";

export const metadata = {"title": {"absolute": "Roof Inspection Cost: 2026 Prices by Type and When It's Free"}, "description": "Roof inspection cost: most paid inspections run $125 to $400. See drone, infrared and certification prices, what's included, and why many roofers inspect free.", "alternates": {"canonical": "/blog/roof-inspection-cost/"}, "openGraph": {"title": "How Much Does a Roof Inspection Cost? 2026 Prices by Type", "description": "Walk-on, drone and infrared inspection prices, what a home inspector skips, and when a roof inspection costs nothing at all.", "url": "/blog/roof-inspection-cost", "type": "article", "images": ["/images/roof-replacement-charcoal-shingles-tan-craftsman-home.webp"]}};

const graph = [{"@type": "Article", "headline": "How Much Does a Roof Inspection Cost?", "description": "Roof inspection cost: most paid inspections run $125 to $400. See drone, infrared and certification prices, what's included, and why many roofers inspect free.", "datePublished": "2026-11-04", "dateModified": "2026-11-04", "mainEntityOfPage": "https://trinityext.com/blog/roof-inspection-cost/", "image": "https://trinityext.com/images/roof-replacement-charcoal-shingles-tan-craftsman-home.webp", "author": {"@id": "https://trinityext.com/#business"}, "publisher": {"@id": "https://trinityext.com/#business"}}];

const toc = [
  {"id": "by-type", "label": "Roof inspection cost by type"},
  {"id": "factors", "label": "What makes it cost more"},
  {"id": "free", "label": "Why some inspections are free"},
  {"id": "include", "label": "What an inspection includes"},
  {"id": "drone", "label": "Drone roof inspections"},
  {"id": "home", "label": "Home inspections and the roof"},
  {"id": "insurance", "label": "Insurance and who pays"},
  {"id": "when", "label": "When to get one"},
  {"id": "field", "label": "What we see on Upstate inspections"},
  {"id": "faq", "label": "Questions people ask"},
];

const X = { target: "_blank", rel: "noopener" };

const tick = <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#1D7FD0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display: "inline-block", verticalAlign: "-2px", marginRight: 8}}><path d="M5 12l5 5L20 7" /></svg>;

export default function Page() {
  return (
    <Site>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [...graph, business] }} />
      <ArticleShell
        crumbs={[{ name: "Home", href: "/" }, { name: "Advice", href: "/blog/" }, { name: "How Much Does a Roof Inspection Cost?" }]}
        eyebrow="Roof inspection cost guide"
        title="How Much Does a Roof Inspection Cost?"
        updated="4 November 2026"
        readMins={9}
        hero={{ src: "/images/roof-replacement-charcoal-shingles-tan-craftsman-home.webp", alt: "Drone view of a tan craftsman-style home with a charcoal shingle roof, stone porch columns and a two-car garage in an Upstate subdivision" }}
        toc={toc}
      >
        <div className="t-quick"><strong>Quick answer</strong><p>A paid roof inspection usually costs $125 to $400. <a href="https://www.angi.com/articles/how-much-does-roof-inspection-cost.htm" {...X}>Angi</a> puts the national average at $248. A walk-on inspection runs $75 to $200, a drone inspection $150 to $400 and an infrared scan $400 to $600. Many roofers inspect for free when they quote a repair, and Trinity Exteriors' inspection in Greenville is free.</p></div>

        <p>Trinity Exteriors inspects roofs across Greenville and the Upstate, free, and we hold 5.0 stars from 106 Google reviews. Seventeen of those reviewers list a roof inspection as part of their job, and every one of them left five stars.</p>

        <p>Something made you look up. Maybe it was a shingle in the flower bed, a brown ring on the bedroom ceiling or a hailstorm that sounded like someone emptying a gravel truck onto the house. Now you want a person to climb up there and tell you the truth, ideally without the truth sending its own invoice.</p>

        <h2 id="by-type">How much does a roof inspection cost, by type?</h2>
        <p>Most paid roof inspections cost $125 to $400, and the type of inspection sets most of the price. A roofer walking the roof is the cheapest. Thermal cameras are the priciest.</p>
        <div className="t-table-wrap"><table><thead><tr><th>Inspection type</th><th>Typical cost</th></tr></thead><tbody>
          <tr><td>Physical walk-on inspection</td><td><a href="https://www.angi.com/articles/how-much-does-roof-inspection-cost.htm" {...X}>$75 to $200</a></td></tr>
          <tr><td>Drone inspection</td><td><a href="https://www.angi.com/articles/how-much-does-roof-inspection-cost.htm" {...X}>$150 to $400</a></td></tr>
          <tr><td>Infrared (thermal) inspection</td><td><a href="https://www.angi.com/articles/how-much-does-roof-inspection-cost.htm" {...X}>$400 to $600</a></td></tr>
          <tr><td>Roof certification, added on</td><td><a href="https://www.homeadvisor.com/cost/inspectors-and-appraisers/hire-a-roof-inspector/" {...X}>$75 to $200</a></td></tr>
          <tr><td>Attic inspection, added on</td><td><a href="https://www.angi.com/articles/how-much-does-roof-inspection-cost.htm" {...X}>$200 to $500</a></td></tr>
          <tr><td>Storm or insurance claim inspection</td><td><a href="https://www.nrcia.org/roof-inspection-cost-square-foot/" {...X}>$200 to $600</a></td></tr>
          <tr><td>Full home inspection, roof included</td><td><a href="https://www.bankrate.com/mortgages/how-much-does-home-inspection-cost/" {...X}>$343 average</a></td></tr>
          <tr><td>Roofer's inspection before a quote</td><td><a href="https://www.angi.com/articles/how-much-does-roof-inspection-cost.htm" {...X}>Often free</a></td></tr>
        </tbody></table></div>
        <p>The national averages don't agree with each other, either. Angi says <a href="https://www.angi.com/articles/how-much-does-roof-inspection-cost.htm" {...X}>$248</a>, HomeAdvisor <a href="https://www.homeadvisor.com/cost/inspectors-and-appraisers/hire-a-roof-inspector/" {...X}>$252</a>, HomeGuide <a href="https://homeguide.com/costs/roof-inspection-cost" {...X}>$280</a>, This Old House <a href="https://www.thisoldhouse.com/roofing/what-is-a-roof-inspection" {...X}>$331</a> and Fixr <a href="https://www.fixr.com/costs/roof-inspection" {...X}>$426</a>. Angi's Southeast row is the friendliest, at $190 to $200.</p>
        <p>That's five guides, five averages and a $178 gap. It's the same experience as asking five neighbors how long to smoke a brisket. Everyone answers instantly and nobody agrees. One of them starts drawing on a napkin, and an hour later you know nothing about brisket and everything about his new smoker, which has a name.</p>

        <h2 id="factors">What makes a roof inspection cost more?</h2>
        <p>Size, height, pitch and material push the price up. A bigger roof takes longer, and Angi's figures climb from $75 to $210 on a 1,000 square foot roof to $265 to $735 at 3,500 square feet.</p>
        <div className="t-table-wrap"><table><thead><tr><th>Roof size</th><th>Typical inspection cost</th></tr></thead><tbody>
          <tr><td>1,000 sq ft</td><td><a href="https://www.angi.com/articles/how-much-does-roof-inspection-cost.htm" {...X}>$75 to $210</a></td></tr>
          <tr><td>1,700 sq ft</td><td><a href="https://www.angi.com/articles/how-much-does-roof-inspection-cost.htm" {...X}>$125 to $357</a></td></tr>
          <tr><td>2,000 sq ft</td><td><a href="https://www.angi.com/articles/how-much-does-roof-inspection-cost.htm" {...X}>$150 to $420</a></td></tr>
          <tr><td>3,000 sq ft</td><td><a href="https://www.angi.com/articles/how-much-does-roof-inspection-cost.htm" {...X}>$225 to $630</a></td></tr>
          <tr><td>3,500 sq ft</td><td><a href="https://www.angi.com/articles/how-much-does-roof-inspection-cost.htm" {...X}>$265 to $735</a></td></tr>
        </tbody></table></div>
        <p>Height matters too. One Florida inspector on <a href="https://www.thumbtack.com/p/roof-inspection-cost" {...X}>Thumbtack</a> charges a flat $150 for a one-story home and $200 for two stories. Steep roofs cost more because the inspector does the whole job while quietly negotiating with gravity. You know the feeling if you've ever climbed to the top step of a ladder to change a bulb, wobbled once, and decided the room looked cozier dark.</p>
        <p>Material counts as well. <a href="https://web.archive.org/web/20250909/https://www.bobvila.com/articles/roof-inspection-cost/" {...X}>Bob Vila's guide</a> says metal, slate, clay and green roofs "can all cost a bit more to inspect." Commercial roofs are their own animal: <a href="https://homeguide.com/costs/roof-inspection-cost" {...X}>HomeGuide</a> gives $200 to $600, or 5 to 10 cents a square foot.</p>
        <figure><img src="/images/roof-replacement-gray-shingles-brick-front-close-aerial.webp" alt="Drone view of a two-story brick home with steep front gables and light gray architectural shingles" loading="lazy" /></figure>

        <h2 id="free">Why do some roofers inspect roofs for free?</h2>
        <p>A roofer inspects for free because the inspection is how they find and price the work. <a href="https://www.angi.com/articles/how-much-does-roof-inspection-cost.htm" {...X}>Angi</a> says "most contractors perform a free (or very low-cost) roof inspection before making repairs so they can diagnose the issue and give you a proper quote." The cost is covered by the jobs they win.</p>
        <p>So a free roofer inspection is a lot like the free sample at Costco. The sample is real, it really is free, and everybody standing in that aisle knows exactly why the lady with the toothpicks is parked next to the frozen dumplings.</p>
        <p>A paid inspector sells you nothing else, and that's what you're paying for. Frank Lesh of the American Society of Home Inspectors told <a href="https://www.bankrate.com/mortgages/how-much-does-home-inspection-cost/" {...X}>Bankrate</a> that it's against ASHI's ethics code "to do repairs on anything we inspect." Angi adds that a free inspection may not "meet the requirements of your lending or insurance company," so ask before you count on one for a sale or a policy.</p>
        <p>Ours is free, with no obligation to buy anything. We get on the roof, check the shingles, the nails and any storm damage, then show you what we found. If it only needs a repair, we tell you that. If it needs nothing, we tell you that too, then climb down a little less rich and a lot more honest.</p>
        <p>A knock on the door isn't a red flag on its own. Rochelle J. started her review with "From the moment the salesman rang my doorbell (which I am not always patient with salesmen- lol)." The <a href="https://consumer.ftc.gov/articles/how-avoid-home-improvement-scam" {...X}>FTC</a> lists the warning signs: "Scammers pressure you for an immediate decision," and they "ask you to pay for everything up front or only accept cash." <a href="/services/roof-inspection">Book a free roof inspection</a> on your schedule instead.</p>

        <h2 id="include">What does a roof inspection include?</h2>
        <p>A full roof inspection checks the roof covering, the flashing, the gutters and every pipe, vent and chimney that goes through the roof, then the attic underneath. <a href="https://www.owenscorning.com/en-us/roofing/blog/roof-inspection" {...X}>Owens Corning's inspection guide</a> lists what inspectors look for:</p>
        <ul style={{listStyle: "none", paddingLeft: 0}}>
          <li>{tick}Shingles: "curled edges, cracks, loss of granules, excess moss, missing or loose shingles"</li>
          <li>{tick}Flashing: "dents, torn or missing pieces, corrosion, loss of sealant"</li>
          <li>{tick}Gutters that are loose or clogged, and vents that aren't sealed</li>
          <li>{tick}Chimneys with cracked caulk, mortar or brick</li>
          <li>{tick}Attic insulation that's wet, shifted or too thin, plus dark spots on the wood above</li>
          <li>{tick}Workmanship, like "improper nailing techniques"</li>
        </ul>
        <p>Then comes the attic. Most homeowners last went up there to put away the Christmas tree, and it's since become a small museum of one broken lamp, four boxes labeled "misc" and, possibly, the stain that explains everything. Owens Corning says the inspector should check the underside of the roof deck for dark stains and decide "if they're active or from a previously addressed problem."</p>
        <p>Afterwards you should get a rundown of the roof's condition. Owens Corning says the report "may also include supporting pictures," so ask what you'll get before anyone climbs up.</p>
        <figure><img src="/images/inspection-moisture-meter-ceiling-reads-hi.webp" alt="A moisture meter held against a ceiling joint below a roof leak, its screen reading HI" loading="lazy" /></figure>

        <h2 id="drone">How much does a drone roof inspection cost?</h2>
        <p>A drone roof inspection usually costs $150 to $400, per <a href="https://www.angi.com/articles/how-much-does-roof-inspection-cost.htm" {...X}>Angi</a> and <a href="https://www.thumbtack.com/p/roof-inspection-cost" {...X}>Thumbtack</a>. Anyone flying a drone for paid work needs an FAA remote pilot certificate under <a href="https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-107/subpart-A/section-107.12" {...X}>Part 107</a>, so ask whether the pilot has one.</p>
        <p>Drones earn their keep on steep or fragile roofs. Owens Corning says they "make it easy to look underneath overhangs and above steep dormers." The aerial roof photos on this page were taken from one.</p>
        <p>A drone is great at seeing a roof and useless at touching one. It can't lift a shingle tab, feel a soft spot underfoot or crawl into the attic. It will, however, hover over your yard long enough for the neighbor's dog to lodge a formal complaint. One inspector on the <a href="https://forum.nachi.org/t/drones-v-s-walkover/118565" {...X}>InterNACHI forum</a> wrote that a drone "only allows you to see a small section" up close.</p>
        <p>Insurers fly over roofs too. <a href="https://www.npr.org/2025/05/30/nx-s1-5400372-e1/insurance-companies-using-aerial-imagery-to-determine-if-theyll-renew-home-coverage" {...X}>NPR reported</a> that "a homeowner lost coverage after an insurance company looked at the wrong image." That's the roofing version of getting a speeding ticket for your neighbor's car, mailed to you, with a photo of his car.</p>
        <figure><img src="/images/roof-replacement-brown-shingles-top-down-aerial.webp" alt="Straight-down drone view of a brown shingle roof with a skylight and chimney, trees and a flowering crepe myrtle around it" loading="lazy" /></figure>

        <h2 id="home">Does a home inspection include the roof?</h2>
        <p>Yes, but only partly. Under the <a href="https://www.nachi.org/sop.htm" {...X}>InterNACHI Standards of Practice</a>, a home inspector looks at the roof "from ground level or the eaves" and isn't required to "walk on any roof surface," "predict the service life expectancy" or "warrant or certify the roof." A home inspection averages <a href="https://www.bankrate.com/mortgages/how-much-does-home-inspection-cost/" {...X}>$343</a>, per Bankrate.</p>
        <p>That's not laziness. It's the rulebook. But a roof checked from the ground with binoculars is checked the way you inspect a used car you can't really afford. You walk around it twice, nod at a tire, and say "seems solid" to nobody.</p>
        <p>One buyer on <a href="https://www.biggerpockets.com/forums/51/topics/772515-inspector-didn-t-do-his-job-house-needs-new-roof" {...X}>BiggerPockets</a> found out the hard way that the house needed a new roof, and wrote that it "makes me believe the inspector never got on the roof." Owens Corning's advice is to book "a separate roof inspection" from a roofer on top of the home inspection. Buying in the Upstate? Ask for both before closing.</p>
        <figure><img src="/images/inspection-hand-lifting-shingle-tab-nails.webp" alt="A roofer's finger lifting a gray shingle tab during an inspection to check the seal and the nails underneath" loading="lazy" /></figure>

        <h2 id="insurance">Does insurance pay for a roof inspection?</h2>
        <p>Your insurer doesn't usually pay a roofer to inspect, but its own adjuster's visit costs you nothing. <a href="https://homeguide.com/costs/roof-inspection-cost" {...X}>HomeGuide</a> calls it "a no-cost inspection to investigate a claim." The <a href="https://doi.sc.gov/DocumentCenter/View/14784/SCDOI-publication-post-disaster-claims-guide" {...X}>SC Department of Insurance claims guide</a> also says "you may want to have a contractor inspect your home" after a storm.</p>
        <p>South Carolina law lets you use a contractor's "evaluation of the condition of his roof system" in your claim, per <a href="https://www.scstatehouse.gov/code/t40c059.php" {...X}>SC Code 40-59-25</a>. The same law bans a roofer from promising "to pay or rebate" your deductible, and it counts a discount for putting their sign in your yard as one of those rebates. So in South Carolina, every roofing sign you see is up there purely for the love of the game.</p>
        <p>The full claim process, from the first photo to the adjuster's visit, is in our <a href="/blog/hail-damage-roof-insurance-claim/">hail damage roof insurance claim guide</a>. Scott D. wrote that the same person who did his inspection "was present for the adjuster" and came back after the job.</p>
        <figure><img src="/images/inspection-chalk-circle-on-shingle.webp" alt="A pink chalk circle drawn around a damage point on a dark shingle during a roof inspection" loading="lazy" /></figure>

        <h2 id="when">When should you get your roof inspected?</h2>
        <p>Twice a year, plus after any big storm. The <a href="https://professionalroofing.net/articles/article/4787" {...X}>NRCA</a> recommends inspections "at least twice per year, preferably in the spring and fall," and more "after any severe weather event such as a hailstorm or hurricane." Get one before you buy or sell, too.</p>
        <p>Most of us manage about once a decade, usually the week the house goes on the market. It's the same way everyone flosses like a champion for the five days before a dental cleaning, bleeds a little, and tells the hygienist "every day" with a perfectly straight face.</p>
        <p>The <a href="https://ibhs.org/ibhs-news-releases/ahead-of-hurricane-season-ibhs-urges-homeowners-to-prepare-now-to-reduce-storm-damage/" {...X}>Insurance Institute for Business and Home Safety</a> warns that "aging asphalt shingles can fail at wind speeds far below hurricane force," so older roofs earn an extra look. Not sure how old yours is? Our guide to <a href="/blog/how-long-does-a-roof-last/">how long a roof lasts</a> shows how to date it. If there's already a <ScheduledLink href="/blog/water-damage-on-ceiling/">stain on the ceiling</ScheduledLink>, don't wait for spring.</p>

        <h2 id="field">What we see on Upstate roof inspections</h2>
        <p>Seventeen of our Google reviewers name a roof inspection as part of their job. Here's what three of them wrote.</p>
        <blockquote>"He took the time to thoroughly inspect my roof, clearly explain the issues, and walk me through the best options without any pressure." - Leslie, Google review</blockquote>
        <p>Rochelle J. wrote that "the team came out to inspect the roof and found I needed the roof replaced." Scott D. wrote that we came back "the day after the work was done to document the job and perform a final sweep for nails." Somewhere in Greenville there's a lawnmower that never met one of those nails, and it has no idea how close it came.</p>
        <ul style={{listStyle: "none", paddingLeft: 0}}>
          <li>{tick}Storm damage marked on the shingles and shown to you, not just described</li>
          <li>{tick}Leaks traced from the stain inside to the spot on the roof, often a <ScheduledLink href="/blog/roof-leak-repair-cost/">pipe boot or flashing</ScheduledLink></li>
          <li>{tick}Rotten decking that only shows once the old shingles come off</li>
        </ul>
        <figure><img src="/images/replaced-osb-sheet-with-water-staining.webp" alt="A removed sheet of roof decking lying on the grass, with dark water staining along one edge" loading="lazy" /></figure>

        <h2 id="faq">Questions people ask about roof inspection cost</h2>
        <p><strong>How much does a roof inspection cost?</strong></p>
        <p>Most paid roof inspections cost $125 to $400, and Angi's national average is $248. Drone inspections run $150 to $400 and infrared scans $400 to $600. Many roofers inspect free before they quote a repair.</p>
        <p><strong>How long does a roof inspection take?</strong></p>
        <p>Anywhere from 45 minutes to four hours, per <a href="https://www.homeadvisor.com/cost/inspectors-and-appraisers/hire-a-roof-inspector/" {...X}>HomeAdvisor</a>. A simple one-story roof sits at the short end. A big, steep roof with an attic check takes longer.</p>
        <p><strong>Is a roof certification the same as an inspection?</strong></p>
        <p>No. A certification comes after an inspection and estimates how many years the roof has left. It costs $75 to $200 extra and is usually asked for when a home is sold, refinanced or insured.</p>
        <p><strong>Is a free roof inspection worth it?</strong></p>
        <p>Yes, as long as you know what it's for. A roofer's free inspection tells you what's wrong and what it costs to fix. For a home sale or an insurer, ask first whether they'll accept it.</p>

        <h2 id="next">Find out what your roof is hiding</h2>
        <p>Price charts tell you what other people paid. Your roof needs someone standing on it.</p>
        <p>We do that for free across Greenville and the Upstate. <a href="/services/roof-inspection">Book a free roof inspection</a> and we'll show you what we found and tell you straight whether it needs a repair, a replacement or nothing at all. If it's time for a new one, see <a href="/blog/how-much-does-a-new-roof-cost/">what a new roof costs in the Upstate</a>. And the shingle in the flower bed can finally stop being evidence.</p>
        <div className="t-midcta"><h3>Skip the inspection fee</h3><p>Free roof inspection across Greenville and the Upstate. No obligation to buy anything.</p><a className="t-btn t-btn-light" href="/quote/">Book my free inspection</a> <a href="tel:+18648447777" style={{color: "#fff", marginLeft: 14}}>(864) 844-7777</a></div>
      </ArticleShell>
      <CtaForm />
    </Site>
  );
}
