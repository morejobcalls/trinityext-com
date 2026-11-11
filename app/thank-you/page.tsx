import type { Metadata } from "next";
import Script from "next/script";
import { site } from "@/lib/site.config";
import { Site, Section, Steps } from "@/components/site";
import BookingFrame from "@/components/thank-you/BookingFrame";

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

// Roof leads (?roof=1) land here straight from the estimate form, and booking is the
// one next step. These steps must never suggest waiting for a call instead.
const roofSteps = [
  { title: "Your details are in", text: "Landed with the team the second you hit send." },
  { title: "Pick your time above", text: "Choose the slot that suits you and it is locked in. No phone tag." },
  { title: "We come take a look", text: "Our team inspects the roof and walks you through what we find, in plain words." },
];

// Both variants ship in the static HTML. This runs during parse, before either one
// paints, and marks the wrapper so the CSS below shows only the matching variant.
// No flash of the wrong page, and no client-side wait for hydration.
const variantScript = `(function(){try{if(new URLSearchParams(location.search).get("roof")==="1")document.getElementById("ty").setAttribute("data-roof","1")}catch(e){}})();`;
const variantCss = `#ty:not([data-roof]) [data-variant="roof"],#ty[data-roof] [data-variant="default"]{display:none}`;

export default function Page() {
  return (
    <Site>
      <div id="ty" suppressHydrationWarning>
      <style dangerouslySetInnerHTML={{ __html: variantCss }} />
      <script dangerouslySetInnerHTML={{ __html: variantScript }} />

      {/* ROOF VARIANT (?roof=1): the calendar is the page. */}
      <div data-variant="roof">
        <section className="t-section t-navy t-on-navy" style={{ textAlign: "center", padding: "44px 0 36px" }}>
          <div className="t-wrap" style={{ display: "grid", justifyItems: "center", gap: 14 }}>
            <span className="t-eyebrow">One more step</span>
            <h1 style={{ color: "#fff", fontSize: "clamp(32px, 5vw, 56px)" }}>Pick your free roof inspection time</h1>
            <p className="t-lead" style={{ maxWidth: 660, fontSize: 18 }}>Grab a slot below and our team comes out to take a look. Takes 30 seconds.</p>
          </div>
        </section>
        {site.bookingUrl ? (
          <section className="t-section" style={{ padding: "20px 0 56px" }}>
            <div className="t-wrap" style={{ display: "grid", justifyItems: "center", gap: 18 }}>
              <BookingFrame variant="roof" src={site.bookingUrl} id={`${bookingId}_embed`} title="Book your free roof inspection" />
              <p style={{ textAlign: "center", fontSize: 17 }}>Not ready to pick a time? No problem, we&apos;ll text you shortly.</p>
              <a href={`tel:${tel}`} style={{ fontSize: 16, color: "var(--t-navy)", textDecoration: "underline" }}>Rather not wait? Call {site.phone}</a>
            </div>
          </section>
        ) : null}
        <Section tone="sand" eyebrow="What happens next" title="Three quick steps, and the last one is ours">
          <Steps items={roofSteps} />
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 40 }}>
            <a className="t-btn t-btn-ghost" href="/blog/">Read the blog</a>
            <a className="t-btn t-btn-ghost" href="/services/">See every service</a>
          </div>
        </Section>
      </div>

      {/* DEFAULT VARIANT: every other service. Unchanged. */}
      <div data-variant="default">
      <section className="t-section t-navy t-on-navy" style={{ textAlign: "center" }}>
        <div className="t-wrap" style={{ display: "grid", justifyItems: "center", gap: 20 }}>
          <span className="t-eyebrow">Inquiry received</span>
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
          <BookingFrame variant="default" src={site.bookingUrl} id={`${bookingId}_embed`} title="Book a call" />
        </Section>
      ) : null}

      <Section tone="sand" eyebrow="What happens next" title="Three steps, and two of them are ours">
        <Steps items={steps} />
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 40 }}>
          <a className="t-btn t-btn-ghost" href="/blog/">Read the blog while you wait</a>
          <a className="t-btn t-btn-ghost" href="/services/">See every service</a>
        </div>
      </Section>
      </div>
      </div>

      {/* One copy of GHL's resize script for whichever calendar mounted. */}
      {site.bookingUrl ? <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" /> : null}
    </Site>
  );
}
