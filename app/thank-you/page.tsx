import type { Metadata } from "next";
import Script from "next/script";
import { site } from "@/lib/site.config";
import { Site, Section, Steps } from "@/components/site";

// Thank-you page (redesign 22 October 2026).
//
// NEVER let this page be indexed. If it shows up in search results, people land
// here without converting and your conversion count becomes fiction. It is also
// excluded from app/sitemap.ts and skipped by code/check_site_complete.py.
export const metadata: Metadata = {
  title: "Thank you",
  description: "We've got your request.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you/" },
};

const tel = site.phone.replace(/[^+\d]/g, "");

// GHL's embed script resizes the iframe by id, so it needs one that matches the
// calendar. Derived from the booking URL's last segment - never hardcode it, or
// swapping the calendar in site.config silently breaks the auto-resize.
const bookingId = site.bookingUrl?.split("?")[0].split("/").filter(Boolean).pop() ?? "";

// What happens next. Specific beats vague - "within minutes" outperforms "soon".
const steps = [
  { title: "Your details are in", text: "Landed with the team the second you hit send. Nothing else needed from you." },
  { title: "We set up your visit", text: "Someone from Trinity reads what you sent and calls to set a time to come take a look." },
  { title: "You hear back within a day", text: "By phone or email, whichever you gave us. If it is urgent, call the number above." },
];

export default function Page() {
  return (
    <Site>
      <section className="t-section t-navy t-on-navy" style={{ textAlign: "center" }}>
        <div className="t-wrap" style={{ display: "grid", justifyItems: "center", gap: 20 }}>
          <span className="t-eyebrow">Enquiry received</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(40px, 5vw, 64px)" }}>Got it - thanks.</h1>
          <p className="t-lead" style={{ maxWidth: 560 }}>A real person replies <strong style={{ color: "#fff" }}>within one business day</strong>. Nothing else is needed from you right now.</p>
          <a className="t-btn t-btn-light" href={`tel:${tel}`}>Rather not wait? Call {site.phone}</a>
        </div>
      </section>

      {/*
        CONVERSION TRACKING FIRES HERE. This is the reason this page exists.
        /tracking wires the real snippets in - Google Ads conversion tag, GA4
        event, any Meta / LinkedIn pixel. Keep it on page load, not on a click.
      */}

      {site.bookingUrl ? (
        <Section eyebrow="Skip the queue" title="Or grab a time right now" intro="Pick a slot that suits you and we will have the whole conversation then - no phone tag.">
          <iframe src={site.bookingUrl} id={`${bookingId}_embed`} title="Book a call" allow="payment" scrolling="no" style={{ width: "100%", maxWidth: 860, minHeight: 700, border: "none", overflow: "hidden", borderRadius: 22, background: "#fff", display: "block" }} />
          <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
        </Section>
      ) : null}

      <Section tone="sand" eyebrow="What happens next" title="Three steps, and two of them are ours">
        <Steps items={steps} />
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 40 }}>
          <a className="t-btn t-btn-ghost" href="/blog/">Read the blog while you wait</a>
          <a className="t-btn t-btn-ghost" href="/services/">See every service</a>
        </div>
      </Section>
    </Site>
  );
}
