// Blog post, /blog-post build 23 October 2026 (keyword-map row 27), held until
// 26 October 2026 by lib/publishing.ts. Duplicated from how-long-does-a-roof-last;
// only words, images, metadata and schema changed.
// Sources: research/blog-roof-leak-repair-cost/dossier.md
import { Site, ArticleShell, CtaForm, JsonLd, business } from "@/components/site";

export const metadata = {"title": {"absolute": "Roof Leak Repair Cost: Prices by Problem, Plus Upstate SC"}, "description": "Most roof leak repairs cost $350 to $1,500, with an $800 average. See prices by problem, how to find a roof leak, and what Upstate homeowners paid us.", "alternates": {"canonical": "/blog/roof-leak-repair-cost/"}, "openGraph": {"title": "Roof Leak Repair Cost: What a Fix Really Costs", "description": "Roof leak repair prices by problem, how to find the leak yourself, and what Upstate SC homeowners paid for theirs.", "url": "/blog/roof-leak-repair-cost", "type": "article", "images": ["/images/new-shingles-pipe-boot-close-up.webp"]}};

const graph = [{"@type": "Article", "headline": "How Much Does Roof Leak Repair Cost?", "description": "Most roof leak repairs cost $350 to $1,500, with an $800 average. See prices by problem, how to find a roof leak, and what Upstate homeowners paid us.", "datePublished": "2026-10-26", "dateModified": "2026-10-26", "mainEntityOfPage": "https://trinityext.com/blog/roof-leak-repair-cost/", "image": "https://trinityext.com/images/new-shingles-pipe-boot-close-up.webp", "author": {"@id": "https://trinityext.com/#business"}, "publisher": {"@id": "https://trinityext.com/#business"}}];

const toc = [
  {"id": "by-problem", "label": "Roof leak repair cost by problem"},
  {"id": "greenville", "label": "What it costs in Greenville"},
  {"id": "small", "label": "Small roof leak repair cost"},
  {"id": "find", "label": "How to find a roof leak"},
  {"id": "not-the-roof", "label": "When it isn't the roof"},
  {"id": "boots", "label": "Why pipe boots leak so often"},
  {"id": "flashing", "label": "Flashing, valley and chimney leaks"},
  {"id": "meanwhile", "label": "What to do while it leaks"},
  {"id": "insurance", "label": "Does insurance pay for it?"},
  {"id": "replace", "label": "When a leak means a new roof"},
  {"id": "field", "label": "What we see on Upstate roofs"},
  {"id": "faq", "label": "Questions people ask"},
];

const X = { target: "_blank", rel: "noopener" };

export default function Page() {
  return (
    <Site>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [...graph, business] }} />
      <ArticleShell
        crumbs={[{ name: "Home", href: "/" }, { name: "Advice", href: "/blog/" }, { name: "Roof Leak Repair Cost" }]}
        eyebrow="Roof leak cost guide"
        title="How Much Does Roof Leak Repair Cost?"
        updated="26 October 2026"
        readMins={10}
        hero={{ src: "/images/new-shingles-pipe-boot-close-up.webp", alt: "Close-up of a black rubber pipe boot sealed around a vent pipe on new gray architectural shingles" }}
        toc={toc}
      >
        <div className="t-quick"><strong>Quick answer</strong><p>Most roof leak repairs cost $350 to $1,500, and <a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>Fixr puts the national average at $800</a>. <a href="https://www.angi.com/articles/cost-to-fix-leaky-roof.htm" {...X}>Angi's range runs higher</a>, at $700 to $3,000 with $900 typical. A cracked pipe boot or a few lost shingles sits at the low end. Rotten decking, chimney flashing or a leak that's been left for months can pass $8,000.</p></div>

        <p>Trinity Exteriors fixes roof leaks and replaces roofs across Greenville and the Upstate, and we hold 5.0 stars from 106 Google reviews. Below, you'll see what two of our own repair customers paid, next to the national guides.</p>

        <p>A roof leak always starts small. A faint brown ring shows up on the ceiling, about the size of a coffee mug, and you decide it's probably been there since you moved in. By Thursday it's roughly the shape of Ohio. By the weekend you're pointing it out to guests the way other people show off a new puppy, except nobody says "aww."</p>

        <h2 id="by-problem">How much does a roof leak repair cost?</h2>
        <p>A roof leak repair costs $350 to $1,500 on most homes, per <a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>Fixr's 2026 data</a>. The price depends on which part failed, not on how big the stain is. Here's what Fixr gives for each of the usual suspects.</p>
        <div className="t-table-wrap"><table><thead><tr><th>What's letting water in</th><th>Repair cost</th></tr></thead><tbody>
          <tr><td>Clogged gutters</td><td><a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>$100 to $250</a></td></tr>
          <tr><td>Cracked pipe boot (vent boot)</td><td><a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>$100 to $600</a></td></tr>
          <tr><td>Missing or damaged shingles</td><td><a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>$150 to $450</a></td></tr>
          <tr><td>Nail pops</td><td><a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>$200 to $500</a></td></tr>
          <tr><td>Damaged flashing</td><td><a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>$200 to $600</a></td></tr>
          <tr><td>Skylight leak</td><td><a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>$300 to $800</a></td></tr>
          <tr><td>Valley leak</td><td><a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>$300 to $1,500</a></td></tr>
          <tr><td>Chimney leak</td><td><a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>$200 to $3,500</a></td></tr>
        </tbody></table></div>
        <p>Angi runs a little higher, with a <a href="https://www.angi.com/articles/cost-to-fix-leaky-roof.htm" {...X}>$900 average and most homeowners paying $700 to $3,000</a>. Labor is about 60% of the bill per Fixr and roughly 70% per Angi, which quotes roofers at $45 to $80 an hour.</p>
        <p>The parts themselves are cheap. A new rubber pipe boot costs <a href="https://www.thisoldhouse.com/roofing/how-to-fix-a-leaking-rooftop-vent-pipe" {...X}>about $10 to $20, per This Old House</a>, which is less than the pizza you'll order while you wait for the roofer.</p>
        <p>The labor is someone hauling a ladder up the side of your house in July, then crawling across shingles hot enough to sear a steak. Then they have to find one cracked inch of rubber on 2,000 square feet of roof that all looks the same. It's Where's Waldo, except Waldo costs $15 and the page could fry an egg.</p>

        <h2 id="greenville">What does roof leak repair cost in Greenville, SC?</h2>
        <p>Storm damage pushes an Upstate repair bill up fast. Two Trinity customers who hired us for a roof repair alone ticked a price band on their Google review. Google gives reviewers set bands, so these are the customers' own answers.</p>
        <div className="t-table-wrap"><table><thead><tr><th>The job, per the reviewer</th><th>Price band ticked</th><th>Called it</th></tr></thead><tbody>
          <tr><td>Roof repair</td><td>$1 to $2,000</td><td>Reasonable price</td></tr>
          <tr><td>Roof repair after hurricane damage</td><td>$4,000 to $6,000</td><td>Reasonable price</td></tr>
        </tbody></table></div>
        <p>The second one was a hurricane job, and hurricanes don't do small. "Trinity did a great job repairing my roof after hurricane damage," wrote Matthew T.</p>
        <p>Local rain is the other part of the story. Greenville-Spartanburg airport averages 49.67 inches a year, per the <a href="https://www.weather.gov/media/gsp/Climate/GSP/GSPDECNORM.pdf" {...X}>National Weather Service's 1991 to 2020 normals</a>. Using the <a href="https://www.usgs.gov/special-topics/water-science-school/science/rain-and-precipitation" {...X}>USGS figure</a> of 27,154 gallons per inch of rain on an acre, that's about 62,000 gallons a year landing on a 2,000 square foot roof (our maths).</p>
        <p>Your roof sends nearly all of that politely into the gutters. Once it lets a few gallons through, though, you'll start reading the weather app like a day trader watching a stock. A 40% chance of rain is fine. At 70% you move the good lamp, and at the first thunderstorm warning you're in the guest room at midnight, shining a flashlight on the ceiling like it's a suspect who won't talk.</p>

        <h2 id="small">What does a small roof leak repair cost?</h2>
        <p>A small leak from a cracked pipe boot, a few blown-off shingles or a popped nail usually costs $100 to $600 to fix, per <a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>Fixr</a>. <a href="https://www.homeserve.com/en-us/blog/cost-guide/leaky-roof-repair/" {...X}>HomeServe</a> prices a pro vent boot repair at $75 to $150. Here's how Fixr sizes leaks overall.</p>
        <div className="t-table-wrap"><table><thead><tr><th>Leak size</th><th>What's usually involved</th><th>Cost</th></tr></thead><tbody>
          <tr><td>Minor</td><td>One boot, a few shingles or a nail pop</td><td><a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>$150 to $800</a></td></tr>
          <tr><td>Moderate</td><td>Flashing, a valley or some wet decking</td><td><a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>$800 to $3,000</a></td></tr>
          <tr><td>Major</td><td>Rotten decking, framing or a chimney</td><td><a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>Up to $8,000</a></td></tr>
        </tbody></table></div>
        <p>Small jobs still carry a trip. The truck, the ladder and the insurance cost the same whether the fix takes 20 minutes or two hours, so a "small" leak rarely gets a tiny bill.</p>
        <p>Small leaks are also the ones people leave alone longest, which is how they stop being small. A drip that only shows up in sideways rain gets filed under "weird house stuff," next to the pipe that bangs every January and the closet door that opens by itself. Three summers later, the roofer peels back the shingles and finds decking with the texture of a wet graham cracker.</p>

        <h2 id="find">How do you find a roof leak?</h2>
        <p>Start in the attic with a flashlight during or just after a rain, and look for wet wood, dark stains or damp insulation. Follow the water uphill to where it first appears. The hole is rarely right above your ceiling stain, because water runs along the decking and rafters before it drops. <a href="https://www.bobvila.com/articles/how-to-find-a-roof-leak/" {...X}>Bob Vila</a> says it can be "several feet to either side."</p>
        <ol>
          <li><strong>Go into the attic first.</strong> Wet wood shines under a flashlight. Bob Vila's advice is to "step carefully from joist to joist," because one wrong step puts your foot through the ceiling below, and now you're pricing two repairs.</li>
          <li><strong>Check the holes in the roof.</strong> Pipe boots, vents, chimneys, skylights and valleys. <a href="https://buildingenclosureonline.com/articles/print/83878-technical-details--roofing-details-that-just-don-t-work" {...X}>Building Enclosure</a> reports that "more than 75 percent of all reported roof leaks occur at flashing locations."</li>
          <li><strong>Run a hose test on a dry day.</strong> One person soaks a small section of roof, starting low and working uphill, while a second person watches the attic.</li>
        </ol>
        <figure><img src="/images/inspection-moisture-meter-ceiling-reads-hi.webp" alt="A hand holding a moisture meter against a cracked ceiling joint, the screen reading HI" loading="lazy" /></figure>
        <p>The hose test goes the same way in every house. The person on the roof with the garden hose feels like a firefighter. The person in the attic lies on a joist in the heat, yells "NOTHING YET" through the drywall every ninety seconds, and slowly realizes they drew the short straw. Twenty minutes later they've found the leak, two old wasp nests and a box marked "XMAS 2009" that nobody remembers putting up there.</p>

        <h2 id="not-the-roof">What if it isn't a roof leak at all?</h2>
        <p>Not every ceiling drip comes from the roof. Attic condensation, a sweating air conditioning line or a leaking bathroom pipe can leave the same brown stain. If it drips on a dry day, the roof is probably innocent.</p>
        <p>Condensation leaves clues. <a href="https://inspectapedia.com/ventilation/Attic_Moisture_Mold.php" {...X}>InspectaPedia</a> says it stains the wood around roofing nails, often "more on the cooler or north slope of the roof," while leak stains "will usually be much larger and will appear on the sides of rafters."</p>
        <p>The roof gets blamed for a lot, mostly because it can't defend itself. It's been up there for twenty years taking hail, heat and the occasional squirrel convention. Then an Ohio-shaped spot shows up in the hallway, and everyone looks up at the roof like it stole from the collection plate.</p>
        <figure><img src="/images/tear-off-bare-osb-with-one-new-sheet.webp" alt="A single-story roof stripped to bare OSB decking around a metal vent pipe, with one new sheet set in near the edge" loading="lazy" /></figure>

        <h2 id="boots">Why do pipe boots cause so many roof leaks?</h2>
        <p>Rubber pipe boots often crack years before the shingles around them wear out. A roofer on a <a href="https://www.finehomebuilding.com/forum/boot-around-roof-vent-pipe" {...X}>Fine Homebuilding forum</a> put neoprene boots at "about 5-7 years," while asphalt shingles last 20 to 30. Sun dries out the rubber collar until it splits, and water runs down the pipe into the house.</p>
        <p>Builder Mike Guertin wrote in <a href="https://www.finehomebuilding.com/project-guides/roofing/vent-flashing-done-right" {...X}>Fine Homebuilding</a> that his roof leak calls had "one main culprit: plumbing vent flashing boots." Another roofer on that forum thread put it in one line: "Lets put a 5 year boot on a 30-year roof and complain when it leaks."</p>
        <p>So a lot of roofs are a 25-year roof wearing a 6-year raincoat. The boot sits in full sun every day and cracks around year six, which is exactly when everyone in the house has stopped thinking about the roof. Nobody throws a party for a roof's sixth birthday. Maybe they should, with a cake, a few balloons and a guy on a ladder checking the boots while everyone's busy with the cake.</p>
        <figure><img src="/images/inspection-hand-lifting-shingle-tab-nails.webp" alt="A roofer lifting a gray shingle tab during an inspection to check the seal and the nails underneath" loading="lazy" /></figure>
        <p>Can you just caulk it? Even <a href="https://www.thisoldhouse.com/roofing/how-to-fix-a-leaking-rooftop-vent-pipe" {...X}>This Old House</a>, which shows a boot fix in 20 to 30 minutes, says to reapply the caulk "every few years." Caulk is a fix with a reminder built in.</p>

        <h2 id="flashing">What do flashing, valley and chimney leaks cost?</h2>
        <p>Flashing repairs run $200 to $600 and valley leaks $300 to $1,500, per <a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>Fixr</a>. Chimney leaks cost the most, from $200 to $3,500. <a href="https://www.homeserve.com/en-us/blog/cost-guide/leaky-roof-repair/" {...X}>HomeServe</a> puts chimney flashing alone at $200 to $500.</p>
        <p>Flashing is the metal or membrane that seals the joints where a roof meets a wall, a chimney or another slope. Valleys are where two slopes pour all their water into one channel. That makes a valley the Woodruff Road of your roof: everything merges at once, nobody's patient, and any weak spot gets tested every single time it rains. If water could honk, your valley would sound like 5:15 on a Friday.</p>
        <p>That's why we install ice and water barrier at the eaves, valleys and penetrations as our standard. It's a sticky waterproof layer under the shingles, right at the spots where leaks like to start.</p>
        <figure><img src="/images/eave-detail-membrane-underlayment-gutter.webp" alt="A dark ice and water membrane along a roof edge and up against a brick wall, with white underlayment above it and a gutter below" loading="lazy" /></figure>

        <h2 id="meanwhile">What should you do while the roof is leaking?</h2>
        <p>Catch the water, move what you can, and take photos of the ceiling and anything on the roof you can see from the ground. Keep people out from under any sagging spot in the ceiling. Then dry the wet areas fast, because the <a href="https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home" {...X}>EPA</a> says to "dry water-damaged areas and items within 24-48 hours to prevent mold growth."</p>
        <p>Stay off the roof in the rain. A tarp put on by a roofer is the right stopgap, and the <a href="https://content.naic.org/article/navigating-claims-process-recover-and-rebuild" {...X}>NAIC</a> says insurers will "typically reimburse the cost of these repairs as part of your claim" when the loss is covered. Its other advice is short: "Keep a record of all receipts."</p>
        <p>About that sag. You'll want to poke it with a broom handle to see what happens, the same way you press an elevator button that's already lit, just in case it didn't hear you the first time. A sagging ceiling is a water balloon made of drywall, and the broom handle doesn't get a vote.</p>
        <figure><img src="/images/replaced-osb-sheet-with-water-staining.webp" alt="A removed sheet of roof decking with dark water staining along the bottom edge" loading="lazy" /></figure>

        <h2 id="insurance">Does homeowners insurance cover roof leak repair?</h2>
        <p>Insurance usually covers a roof leak when a sudden event like wind, hail or a falling tree caused it. Farmers says leaks <a href="https://www.farmers.com/learn/insurance-questions/insurance-cover-roof-leaks/" {...X}>"resulting from wear and tear, poor maintenance or gradual damage typically aren't covered."</a> It also says coverage can differ between the roof itself and the damage inside.</p>
        <p>Insurers are very specific about this. A branch through the roof during a thunderstorm is an event. A boot that cracked slowly over six years is, as far as the policy's concerned, a lifestyle.</p>
        <p>Our free inspection shows you which one you've got, with photos. If you file, we can be there when the adjuster comes. The whole process is in our guide to <a href="/blog/hail-damage-roof-insurance-claim/">filing a hail damage roof insurance claim</a>.</p>

        <h2 id="replace">When does a leak mean you need a new roof?</h2>
        <p>Replace instead of repairing when the roof is near the end of its life, the leaks keep coming back, or the decking underneath has rotted. <a href="https://www.angi.com/articles/cost-to-fix-leaky-roof.htm" {...X}>Angi's rule</a> is simple: "If the repair costs more than 50% of a new roof, go for the new roof." <a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>Fixr</a> puts the average replacement at $10,000 and the average repair at $900.</p>
        <p>One homeowner in Brooklyn paid about $1,600 for a repair that didn't stop the leak, then posted online: "I'm trying to make sure we address the underlying problem rather than pay for another repair that doesn't last," per <a href="https://www.thecooldown.com/green-home/brooklyn-roof-leak-repair-costs-issues/" {...X}>The Cool Down</a>. That sentence is the whole decision.</p>
        <p>The first repair on an old roof is a fix. The second is bad luck. By the third, you and the roofer are on a first-name basis, he knows where you keep the good coffee, and your dog has stopped barking at his truck.</p>
        <p>Not sure how much life yours has left? See <a href="/blog/how-long-does-a-roof-last/">how long each type of roof lasts</a>, or what <a href="/blog/how-much-does-a-new-roof-cost/">a new roof costs in Greenville</a>.</p>
        <figure><img src="/images/crew-shingling-brick-two-story-ladders.webp" alt="Drone view of a crew shingling a brick two-story home, with underlayment on the main roof and ladders up the front" loading="lazy" /></figure>

        <h2 id="field">What we see on Upstate roofs</h2>
        <p>The water usually shows up inside long before anyone spots the damage outside. Brittany M. had storm damage on her roof, and the first sign was a leak in her kitchen ceiling.</p>
        <blockquote>"They worked quickly to fix a leak in my kitchen ceiling that stemmed from storm damage to my roof." - Brittany M., Google review</blockquote>
        <ul style={{listStyle: "none", paddingLeft: 0}}>
          <li><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#1D7FD0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display: "inline-block", verticalAlign: "-2px", marginRight: 8}}><path d="M5 12l5 5L20 7" /></svg>A free roof inspection to find where the water actually gets in</li>
          <li><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#1D7FD0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display: "inline-block", verticalAlign: "-2px", marginRight: 8}}><path d="M5 12l5 5L20 7" /></svg>The repair price before any work starts</li>
          <li><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#1D7FD0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display: "inline-block", verticalAlign: "-2px", marginRight: 8}}><path d="M5 12l5 5L20 7" /></svg>Tarps over storm damage while an insurance claim settles</li>
        </ul>
        <p>James W.'s roof stayed under our tarps while his claim settled. He wrote that we were "providing tarps to cover the leaks and replacing them as needed."</p>
        <p>A tarp isn't glamorous. It's a giant blue rain jacket held down with boards, and it makes your house look like it's waiting in the parking lot for a ride home after surgery. It does keep the next storm out of the kitchen, though, which is the whole job.</p>
        <figure><img src="/images/underlayment-crew-tarps-catching-debris-aerial.webp" alt="Drone view of a crew on a large white home covered in synthetic underlayment, with shingle bundles on the roof and tarps catching debris on the ground" loading="lazy" /></figure>

        <h2 id="faq">Questions people ask about roof leak repair cost</h2>
        <p><strong>How much does it cost to fix a roof leak?</strong></p>
        <p>Most repairs cost $350 to $1,500, with a national average of $800, per <a href="https://www.fixr.com/costs/repair-roof-leaks" {...X}>Fixr</a>. A pipe boot or a few shingles costs less. Rotten decking or a chimney can push it to $8,000 or more.</p>
        <p><strong>Is a roof leak an emergency?</strong></p>
        <p>It's urgent. Keep the water off your things, take photos and get it looked at quickly. The EPA says wet areas should be dried within 24 to 48 hours to prevent mold.</p>
        <p><strong>Can I fix a roof leak myself?</strong></p>
        <p>Swapping a pipe boot is rated "Easy" by This Old House, which notes "the only difficult part is climbing onto the roof." Angi warns that DIY fixes "could also void coverage" under a roof warranty. Anything beyond a boot or a shingle is a job for a roofer.</p>
        <p><strong>Does insurance pay for a leaking roof?</strong></p>
        <p>Usually when wind, hail or a falling tree caused it, and usually not when it's wear and tear or a slow leak. Check your policy, and keep receipts for any tarp or temporary repair.</p>

        <h2 id="next">Find the leak before it finds the couch</h2>
        <p>A cost guide gives you a range. Meanwhile, the stain on your ceiling is working on Kentucky.</p>
        <p>We'll find where the water gets in, free, across Greenville and the Upstate. <a href="/services/roof-inspection">Book a free roof inspection</a> and you'll see the repair price before any work starts. Water coming in right now? <a href="/services/emergency-roof-repair">See how our emergency roof repair works</a>.</p>
        <p><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#003768" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display: "inline-block", verticalAlign: "-3px", marginRight: 8}}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg><strong>Read this next:</strong> <a href="/blog/hail-damage-roof-insurance-claim/">Hail damage roof insurance claim</a>. How the inspection, the adjuster visit and the payout work.</p>
        <div className="t-midcta"><h3>Roof leaking?</h3><p>Free roof inspection. We find where the water gets in and give you the price before any work starts.</p><a className="t-btn t-btn-light" href="/quote/">Book my free inspection</a> <a href="tel:+18648447777" style={{color: "#fff", marginLeft: 14}}>(864) 844-7777</a></div>
      </ArticleShell>
      <CtaForm />
    </Site>
  );
}
