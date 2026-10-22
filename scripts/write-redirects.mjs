// GitHub Pages can't send 301s, so each old contractortrinity.com path from
// vercel.json becomes a tiny page in out/ that points search engines (canonical)
// and visitors (meta refresh + location.replace) at its new home. Runs after `next build`.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const site = "https://trinityext.com";
const { redirects } = JSON.parse(readFileSync("vercel.json", "utf8"));
let written = 0;
for (const { source, destination } of redirects) {
  const dir = join("out", source);
  const file = join(dir, "index.html");
  if (existsSync(file)) continue; // a real page lives here - never overwrite it
  const to = destination.endsWith("/") ? destination : `${destination}/`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(file, `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved</title>` +
    `<link rel="canonical" href="${site}${to}"><meta name="robots" content="noindex">` +
    `<meta http-equiv="refresh" content="0; url=${to}"><script>location.replace(${JSON.stringify(to)})</script>` +
    `</head><body><a href="${to}">This page has moved.</a></body></html>\n`);
  written++;
}
console.log(`redirect pages written: ${written} of ${redirects.length}`);
