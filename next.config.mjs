import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hosted on GitHub Pages: plain static files, no server. Forms post straight to
  // GHL from the browser (lib/LeadFormHandler.tsx); old-site redirects are static
  // pages written by scripts/write-redirects.mjs from vercel.json.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true }, // no image CDN bill; compress to WebP at build instead

  // A stray package-lock.json in the home directory makes Next guess the wrong
  // workspace root, which breaks file tracing. Pin it to this folder.
  // fileURLToPath, NOT .pathname - .pathname leaves a folder with a space in it
  // percent-encoded ("Claude%20Code"), which points at a directory that does not exist.
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),

  // Redirects: vercel.json "redirects" is still the source list (the SEO Blueprint
  // writes it); scripts/write-redirects.mjs turns it into static pages for Pages.
};

export default nextConfig;
