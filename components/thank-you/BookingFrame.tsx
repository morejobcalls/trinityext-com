"use client";

import { useEffect, useState } from "react";

// Key LeadFormHandler writes the roof lead's details under (sessionStorage, never the URL).
export const LEAD_PREFILL_KEY = "trinity_lead_prefill";

// The GHL calendar iframe for /thank-you/. Both page variants are in the static
// HTML, but only ONE iframe may exist (GHL's form_embed.js resizes by id), so this
// mounts only in the variant that matches the URL: `roof` when ?roof=1, else `default`.
// The roof variant also prefills the widget from the details the lead just typed.
export default function BookingFrame({ variant, src, id, title }: { variant: "roof" | "default"; src: string; id: string; title: string }) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const isRoof = new URLSearchParams(window.location.search).get("roof") === "1";
    if ((variant === "roof") !== isRoof) return;
    if (variant === "default") { setUrl(src); return; }

    const params: string[] = [];
    try {
      const saved = JSON.parse(sessionStorage.getItem(LEAD_PREFILL_KEY) ?? "{}") as Record<string, unknown>;
      for (const k of ["first_name", "last_name", "email", "phone"]) {
        const v = String(saved[k] ?? "").trim();
        if (v) params.push(`${k}=${encodeURIComponent(v)}`);
      }
    } catch { /* no saved details: an empty calendar still books */ }
    setUrl(params.length ? `${src}${src.includes("?") ? "&" : "?"}${params.join("&")}` : src);
  }, [variant, src]);

  if (!url) return <div aria-hidden="true" style={{ width: "100%", maxWidth: 860, minHeight: 700, borderRadius: 22, background: "#fff" }} />;
  return <iframe src={url} id={id} title={title} allow="payment" scrolling="no" style={{ width: "100%", maxWidth: 860, minHeight: 700, border: "none", overflow: "hidden", borderRadius: 22, background: "#fff", display: "block" }} />;
}
