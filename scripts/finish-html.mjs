// Runs after `next build` (npm postbuild). Two mechanical fixes on every page in out/:
// 1. Social preview tags. Pages that set no openGraph/twitter metadata get og:* and
//    twitter:* copied from their own <title>, description and canonical, with the
//    1200x630 /og-image.jpg. Pages that set their own (the blog posts) are left alone.
// 2. Image sizes. Every <img> without width/height gets the file's real pixel size,
//    so the browser reserves the space and nothing shifts on load (CLS).
// Added 23 October 2026 by /seo-optimization.
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = join(process.cwd(), "out");
const PUB = join(process.cwd(), "public");
const SITE = "https://trinityext.com";
const OG = { url: `${SITE}/og-image.jpg`, w: 1200, h: 630, alt: "Trinity Exteriors, roofs, decks, siding and remodels in Greenville, SC" };

function size(file) {
  const b = readFileSync(file);
  if (b.toString("ascii", 1, 4) === "PNG") return [b.readUInt32BE(16), b.readUInt32BE(20)];
  if (b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const kind = b.toString("ascii", 12, 16);
    if (kind === "VP8X") return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
    if (kind === "VP8L") { const v = b.readUInt32LE(21); return [1 + (v & 0x3fff), 1 + ((v >> 14) & 0x3fff)]; }
    if (kind === "VP8 ") return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
  }
  if (b[0] === 0xff && b[1] === 0xd8) {
    for (let i = 2; i < b.length;) {
      const m = b[i + 1], len = b.readUInt16BE(i + 2);
      if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
      i += 2 + len;
    }
  }
  return null;
}

const attr = (tag, name) => (tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i")) || [])[1];
const esc = (s) => s.replace(/"/g, "&quot;");

function pages(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? pages(p) : f.endsWith(".html") ? [p] : [];
  });
}

let tagged = 0, sized = 0, srcsets = 0, missing = new Set();
for (const file of pages(OUT)) {
  let html = readFileSync(file, "utf8");
  if (/http-equiv="refresh"/i.test(html)) continue; // static redirect stubs

  if (!/property="og:title"/.test(html)) {
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
    const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
    const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
    if (title) {
      const m = [
        ["property", "og:title", title], desc && ["property", "og:description", desc],
        canon && ["property", "og:url", canon], ["property", "og:site_name", "Trinity Exteriors"],
        ["property", "og:locale", "en_US"], ["property", "og:type", "website"],
        ["property", "og:image", OG.url], ["property", "og:image:width", OG.w], ["property", "og:image:height", OG.h],
        ["property", "og:image:alt", OG.alt],
      ];
      if (!/name="twitter:card"/.test(html)) m.push(
        ["name", "twitter:card", "summary_large_image"], ["name", "twitter:title", title],
        desc && ["name", "twitter:description", desc], ["name", "twitter:image", OG.url]);
      html = html.replace("</head>", m.filter(Boolean).map(([k, n, v]) => `<meta ${k}="${n}" content="${esc(String(v))}"/>`).join("") + "</head>");
      tagged++;
    }
  }

  const preloads = [];
  html = html.replace(/<img\b[^>]*>/g, (tag) => {
    const src = attr(tag, "src");
    if (!src || !src.startsWith("/")) return tag;
    const f = join(PUB, decodeURIComponent(src.split("?")[0]));
    // 3. Phone-sized copies. A photo with a -800w.webp sibling gets a srcset, so a
    //    phone downloads the smaller file instead of the full one.
    const small = src.replace(/\.webp$/, "-800w.webp");
    if (src !== small && !attr(tag, "srcset") && existsSync(join(PUB, decodeURIComponent(small)))) {
      const wh = size(f), sw = size(join(PUB, decodeURIComponent(small)));
      if (wh && sw) {
        const set = `${small} ${sw[0]}w, ${src} ${wh[0]}w`, sizes = "(max-width: 760px) 100vw, 50vw";
        tag = tag.replace(/^<img/, `<img srcset="${set}" sizes="${sizes}"`);
        // React preloads above-the-fold images in <head> by plain href. Give the
        // preload the same srcset or a phone fetches both copies.
        preloads.push([`<link rel="preload" as="image" href="${src}"`, `<link rel="preload" as="image" href="${src}" imageSrcSet="${set}" imageSizes="${sizes}"`]);
        srcsets++;
      }
    }
    if (attr(tag, "width") && attr(tag, "height")) return tag;
    const wh = existsSync(f) && size(f);
    if (!wh) { missing.add(src); return tag; }
    sized++;
    return tag.replace(/^<img/, `<img width="${wh[0]}" height="${wh[1]}"`);
  });

  for (const [from, to] of preloads) html = html.replace(from, to);
  writeFileSync(file, html);
}
console.log(`finish-html: social tags on ${tagged} pages, sizes on ${sized} images, phone copies on ${srcsets}`);
if (missing.size) console.log(`finish-html: no size for ${[...missing].join(", ")}`);
