import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { site } from "@/lib/site.config";
import LeadFormHandler from "@/lib/LeadFormHandler";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Read at build time and inlined in <head>. Routed through the Tailwind
// pipeline the custom properties resolved to empty at runtime.
const ds = readFileSync(join(process.cwd(), "app", "ds.css"), "utf8");
// Archivo @font-face rules, snapshotted from Google Fonts and inlined so the
// stylesheet request stops render-blocking. Font files still load from gstatic.
const fontCss = readFileSync(join(process.cwd(), "app", "fonts.css"), "utf8");

// Deliberately a bare shell. The template pages carry their own header, nav and
// footer, so anything added here renders ON TOP of theirs and shows up as a
// stray bar above the promo strip.

// Redesign type (22 October 2026): Fraunces headlines, Instrument Sans body.
// next/font self-hosts them at build time, so nothing loads from Google at runtime.
const fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-fraunces", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable}`}>
      <head>
        {/* Archivo is what --font-core asks for. Without it every heading falls
            back to Helvetica and the display sizes stop reading as display. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <style dangerouslySetInnerHTML={{ __html: ds }} />
        <style dangerouslySetInnerHTML={{ __html: fontCss }} />
      </head>
      <body>
        {children}
        <LeadFormHandler />
      </body>
    </html>
  );
}
