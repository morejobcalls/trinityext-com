// Every service, grouped by where it sits on the house. The header, footer,
// /services and the homepage all read from here, so a new page is one entry.

export type ServiceLink = { name: string; href: string };
export type Zone = { id: "outside" | "out-back" | "inside"; tag: string; title: string; blurb: string; img: string | null; alt: string; services: ServiceLink[] };

export const zones: Zone[] = [
  {
    id: "outside",
    tag: "Outside",
    title: "Roof & exterior",
    blurb: "New roofs and repairs, storm damage and insurance help, siding, gutters and the trim that holds it all together.",
    img: "/images/roof-replacement-blue-gray-shingles-brick-two-story-aerial.webp",
    alt: "New blue-gray roof on a brick two-storey home",
    services: [
      { name: "Roofing", href: "/services/roofing/" },
      { name: "Storm damage", href: "/services/storm-damage-roofing/" },
      { name: "Roof inspection", href: "/services/roof-inspection/" },
      { name: "Emergency roof repair", href: "/services/emergency-roof-repair/" },
      { name: "Siding", href: "/services/siding-installation/" },
      { name: "Gutters", href: "/services/seamless-gutters/" },
      { name: "Fascia & soffit", href: "/services/fascia-and-soffit-repair/" },
      { name: "Commercial roofing", href: "/services/commercial-roofing/" },
    ],
  },
  {
    id: "out-back",
    tag: "Out back",
    title: "Decks & porches",
    blurb: "Wood and Trex decks, screened porches and aluminum patio covers, built to be lived on.",
    img: "/images/deck-brown-composite-brick-house-black-balusters.webp",
    alt: "Brown composite deck with black balusters",
    services: [
      { name: "Decks", href: "/services/deck-builder/" },
      { name: "Patio covers", href: "/services/aluminum-patio-covers/" },
    ],
  },
  {
    id: "inside",
    tag: "Inside",
    title: "Floors & remodels",
    blurb: "New flooring, remodels, painting and repairs after water damage, done by the crew you already trust outside.",
    img: null,
    alt: "",
    services: [{ name: "Interior & remodeling", href: "/services/interior-remodeling/" }],
  },
];

export const mainNav: ServiceLink[] = [
  { name: "Outside", href: "/services/#outside" },
  { name: "Out back", href: "/services/#out-back" },
  { name: "Inside", href: "/services/#inside" },
  { name: "Reviews", href: "/reviews/" },
  { name: "About", href: "/about/" },
  { name: "Advice", href: "/blog/" },
];
