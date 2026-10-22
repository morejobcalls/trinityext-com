// THE ONE FILE TO EDIT FIRST.
// Every page reads from here - fill it in (or let /proof-file fill it for you).

export const site = {
  name: "Trinity Exteriors",
  tagline: "Roofing, gutters, siding and decks across Greenville and the Upstate of South Carolina.",
  // GHL inbound webhook - /build-website step 6 collects this and writes it here.
  leadWebhook: "https://services.leadconnectorhq.com/hooks/17XoWAmVPB3YLikXeCdA/webhook-trigger/rIwQHgn0c6hm95vtM5gR" as string | null, // GHL wf "Website Lead | trinityext.com" (e2ca91f8), set 2026-10-20
  // GHL calendar booking link - collected on the first /service-page run.
  // Set it and /thank-you renders the booking widget after a form submit (the
  // money pages stay form-only, one primary CTA each). Leave it null and that
  // section simply doesn't render.
  // GHL > Calendars > the calendar > copy the booking link.
  bookingUrl: "https://api.leadconnectorhq.com/widget/booking/ZGA2VTGhThD0BCC7KOa6" as string | null, // GHL "Roof Inspection & Free Estimate", set 2026-10-22
  phone: "(864) 844-7777",
  email: null as string | null, // OPEN: no public email confirmed (proof-inventory question 1)
  address: "1801 Rutherford Rd Suite 109A, Greenville, SC 29609",
  city: "Greenville, SC",
  url: "https://trinityext.com", // your live domain - used by sitemap + metadata

  // Your services - each becomes a card on the homepage.
  // The SEO Blueprint's /build-website turns these into full service pages.
  services: [
    { name: "Roofing", slug: "roofing", blurb: "Roof replacement, new roofs and roof repair for Upstate homes." },
    { name: "Commercial Roofing", slug: "commercial-roofing", blurb: "TPO and flat roof repair, replacement and inspections for businesses." },
    { name: "Storm Damage Roofing", slug: "storm-damage-roofing", blurb: "Hail and wind damage inspected, documented and worked through your insurance claim." },
    { name: "Deck Builder", slug: "deck-builder", blurb: "Custom wood and composite decks, designed and built start to finish." },
  ],

  // Google Ads sitelinks. Written here at build time, while the value of each
  // page is fresh - /write-ads reads them rather than inventing them months later.
  // Titles max 25 characters, each description line max 35.
  sitelinks: [
    { title: "Free Roof Inspection", url: "/services/roof-inspection", lines: ["Free inspection and estimate", "Plain-words report"] },
    { title: "Roof Replacement",     url: "/services/roofing",         lines: ["Replacement, new roofs, repair", "Greenville and the Upstate"] },
    { title: "Storm Damage",         url: "/services/storm-damage-roofing", lines: ["Hail and wind damage", "Insurance claim help"] },
    { title: "Commercial Roofing",   url: "/services/commercial-roofing", lines: ["TPO and flat roofs", "Repair and replacement"] },
    { title: "Reviews",              url: "/reviews",  lines: ["5.0 on Google", "106 reviews"] },
    { title: "Contact",              url: "/contact",  lines: ["Call or send a message", "Free estimates"] },
  ],
};
