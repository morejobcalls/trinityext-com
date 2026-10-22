import type { Metadata } from "next";
import { Site, Section } from "@/components/site";

// Plain-English website terms written 22 October 2026. Covers the site only; every
// job has its own written estimate/contract. OPEN: Billy (or counsel) reviews.
export const metadata: Metadata = {
  title: "Terms",
  robots: { index: false, follow: true },
  alternates: { canonical: "/terms/" },
};

export default function Page() {
  return (
    <Site>
      <Section tight>
        <div className="t-prose" style={{ maxWidth: 760 }}>
          <h1 style={{ fontSize: "clamp(36px, 4.4vw, 54px)" }}>Terms of use</h1>
          <p>Last updated 22 October 2026. These terms cover your use of trinityext.com, run by Trinity Restoration and Contracting Inc, doing business as Trinity Exteriors, Greenville, SC.</p>

          <h2 id="info">The information on this site</h2>
          <p>Our pages and articles are general information to help you understand your home and your options. They aren't a quote, an inspection or professional advice for your house. Prices and costs mentioned on the site are general ranges, not an offer.</p>

          <h2 id="estimates">Estimates and work</h2>
          <p>Sending a form or booking a visit doesn't create a contract. Every job is priced in a written estimate after we've seen it, and the work is covered by the agreement you sign for that job.</p>

          <h2 id="insurance">Insurance claims</h2>
          <p>We can inspect your home, show you the damage and be there when your adjuster visits. Your claim is between you and your insurance company, and every decision on it is yours.</p>

          <h2 id="reviews">Reviews and photos</h2>
          <p>Reviews on this site are quoted from our Google profile. Most photos are of our own work. A few pages use public-domain stock photos where we don't have our own yet, and those are never presented as our jobs.</p>

          <h2 id="links">Links to other sites</h2>
          <p>Our articles link to outside sources so you can check the facts yourself. We're not responsible for what those sites say or do.</p>

          <h2 id="contact">Questions</h2>
          <p>Call us at <a href="tel:+18648447777">(864) 844-7777</a>, Monday to Friday, 8am to 6pm. See our <a href="/privacy-policy/">privacy policy</a> for how we handle your information.</p>
        </div>
      </Section>
    </Site>
  );
}
