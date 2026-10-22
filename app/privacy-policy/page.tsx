import type { Metadata } from "next";
import { Site, Section } from "@/components/site";

// Plain-English policy written 22 October 2026 to match what the site actually does:
// forms post to Trinity's CRM, the CRM may text the lead, no ad pixels on this site.
// OPEN: Billy (or counsel) reviews before Google Ads. Update if a pixel or analytics is added.
export const metadata: Metadata = {
  title: "Privacy policy",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy-policy/" },
};

export default function Page() {
  return (
    <Site>
      <Section tight>
        <div className="t-prose" style={{ maxWidth: 760 }}>
          <h1 style={{ fontSize: "clamp(36px, 4.4vw, 54px)" }}>Privacy policy</h1>
          <p>Last updated 22 October 2026. This policy covers trinityext.com, run by Trinity Restoration and Contracting Inc, doing business as Trinity Exteriors, 1801 Rutherford Rd Suite 109A, Greenville, SC 29609.</p>

          <h2 id="what">What we collect</h2>
          <p>When you send us a form, we collect what you type into it: your name, phone number, email if you give it, the kind of project and any details you add. We also note which page you sent it from.</p>
          <p>We don't ask for payment details on this site, and we don't run advertising or tracking pixels on it.</p>

          <h2 id="use">How we use it</h2>
          <p>We use your details to contact you about your project, set up an estimate or inspection, and keep a record of the job. Your form goes straight into our customer system, which our team uses to call, text or email you back.</p>

          <h2 id="texts">Text messages</h2>
          <p>If you give us your mobile number, we may text you about your request and your project. Message and data rates may apply, and how often we text depends on your project. Reply STOP to stop texts at any time, or HELP for help.</p>
          <p>We don't sell, rent or share your mobile number or text opt-in with anyone for their own marketing.</p>

          <h2 id="share">Who we share it with</h2>
          <p>We don't sell your information. We share it only with the service providers who help us run the business, such as our customer system and phone provider, and only so they can do that work for us. We may also share it if the law requires us to.</p>

          <h2 id="cookies">Cookies</h2>
          <p>This site doesn't set advertising cookies. Our hosting provider and the booking calendar on our thank-you page may use basic cookies so those features work.</p>

          <h2 id="choices">Your choices</h2>
          <p>You can ask us to see, correct or delete the information we hold about you. Call us at <a href="tel:+18648447777">(864) 844-7777</a> or write to the address above, and we'll take care of it.</p>

          <h2 id="changes">Changes</h2>
          <p>If we change this policy, we'll update the date at the top of this page.</p>
        </div>
      </Section>
    </Site>
  );
}
