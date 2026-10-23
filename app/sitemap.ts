import type { MetadataRoute } from "next";
import { site } from "@/lib/site.config";
import { isLive } from "@/lib/publishing";

export const dynamic = "force-static"; // required for static export (SSG)

// The sitemap mirrors your page tree exactly.
// DELIBERATELY EXCLUDED: /thank-you (must never be indexed - it would
// wreck your conversion count) and the legal pages (no search value).
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "", "/services", "/blog", "/about", "/contact", "/quote", "/reviews", "/pricing",
    "/services/roofing", "/services/commercial-roofing", "/services/storm-damage-roofing",
    "/services/emergency-roof-repair", "/services/roof-inspection", "/services/fascia-and-soffit-repair",
    "/services/seamless-gutters", "/services/siding-installation", "/services/deck-builder",
    "/services/aluminum-patio-covers", "/services/interior-remodeling",
    "/blog/how-much-does-a-new-roof-cost", "/blog/hail-damage-roof-insurance-claim",
    "/blog/flat-roof-replacement-cost", "/blog/deck-cost-per-square-foot",
    "/blog/how-long-does-a-roof-last", "/blog/roof-leak-repair-cost", "/blog/architectural-shingles-vs-3-tab", "/blog/trex-vs-timbertech", "/blog/water-damage-on-ceiling",
  ];
  // Held routes (lib/publishing.ts) join the sitemap on their publish date.
  return pages.filter((path) => isLive(path || "/")).map((path) => ({
    url: `${site.url}${path}/`,
    lastModified: new Date(),
    priority: path === "" ? 1 : 0.8,
  }));
}
