// Services index, redesign 22 October 2026: every service grouped by where it
// sits on the house (lib/nav zones). Section ids outside / out-back / inside are
// the targets of the header nav. Blurbs carried over from the build, kept factual.
import type { ReactNode } from "react";
import { Site, PageHero, Section, Cards, CtaBand, JsonLd, business } from "@/components/site";
import { zones } from "@/lib/nav";

export const metadata = {
  title: { absolute: "Home Services in Greenville, SC: Roofs, Decks & Remodels" },
  description: "Every Trinity Exteriors service in one place: roofing, storm damage, siding, gutters, fascia, decks, patio covers, flooring and remodels across the Upstate.",
  alternates: { canonical: "/services/" },
};

const blurbs: Record<string, string> = {
  "/services/roofing/": "Roof replacement, new roofs and roof repair for homes across Greenville and the Upstate. Most of our recent roofs use Owens Corning Duration shingles, with ice and water barrier at the eaves, valleys and penetrations as standard.",
  "/services/storm-damage-roofing/": "Hail and wind damage found, photographed and worked through your insurance claim. 30 of our Google reviews talk about claims we helped with.",
  "/services/roof-inspection/": "A free roof inspection: we check the shingles, the nailing and any storm damage, then explain what we found in plain words.",
  "/services/emergency-roof-repair/": "A leak coming through the ceiling right now. Call us and we'll set up a visit to find where the water's getting in.",
  "/services/siding-installation/": "New siding for Upstate homes, including storm-damaged siding replaced alongside a roof claim.",
  "/services/seamless-gutters/": "Seamless gutter installation and gutter repair, sized to your roof so water stays off the house.",
  "/services/fascia-and-soffit-repair/": "Rotted fascia boards, soffit and trim repaired or replaced. We often find this rot during a roof job and fix it while we're there.",
  "/services/commercial-roofing/": "TPO and flat roof repair, replacement and inspections for Upstate businesses.",
  "/services/deck-builder/": "Wood and Trex composite decks, stairs and screened porches, built start to finish.",
  "/services/aluminum-patio-covers/": "Aluminum patio covers and screened enclosures for shade and rain cover, low on upkeep.",
  "/services/interior-remodeling/": "New flooring, remodels, interior painting and repairs after a leak or water damage, from the crew you already know outside.",
};

const zoneImg: Record<string, { src: string; alt: string }> = {
  outside: { src: "/images/roof-replacement-blue-gray-shingles-brick-two-story-aerial.webp", alt: "New blue-gray roof on a brick two-storey home" },
  "out-back": { src: "/images/deck-brown-composite-brick-house-black-balusters.webp", alt: "Brown composite deck with black balusters" },
  inside: { src: "/images/interior-water-damage-drying-fans-kitchen.webp", alt: "Drying fans set up on a kitchen floor after a leak" },
};

const card = (name: string, href: string): { title: string; text: ReactNode } => ({
  title: name,
  text: <>{blurbs[href]} <a href={href}>See {name.toLowerCase()} →</a></>,
});

export default function Page() {
  return (
    <Site>
      <JsonLd data={{ "@context": "https://schema.org", ...business }} />
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
        ctaHref="/quote/"
        eyebrow="What we do"
        title="Home services for the whole house, from one contractor"
        lead={<p>Roofs and storm damage, siding and gutters, decks and patio covers, and the inside of the house too. One local crew, a fair price in writing before anything starts, and a free estimate on every job.</p>}
        main={{ src: "/images/deck-two-story-screened-porch-stairs.webp", alt: "Two-storey screened porch and stairs built by Trinity" }}
        second={{ src: "/images/roof-replacement-charcoal-shingles-tan-craftsman-home.webp", alt: "New charcoal roof on a craftsman home" }}
        note={{ quote: "They replaced an old wooden deck with Trex composite and I couldn't be happier with the results.", cite: "Michael L., Google review" }}
      />

      {zones.map((z, i) => (
        <Section key={z.id} id={z.id} tone={i === 1 ? "sand" : undefined} eyebrow={z.tag} title={z.title} intro={z.blurb}>
          <div className="t-split">
            <figure className="t-feature-img" style={{ margin: 0, aspectRatio: "4 / 3" }}><img src={zoneImg[z.id].src} alt={zoneImg[z.id].alt} loading="lazy" /></figure>
            <Cards items={z.services.map((s) => card(s.name, s.href))} />
          </div>
        </Section>
      ))}

      <CtaBand />
    </Site>
  );
}
