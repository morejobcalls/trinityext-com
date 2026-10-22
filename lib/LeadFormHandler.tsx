"use client";

import { useEffect } from "react";
import { site } from "@/lib/site.config";

// GitHub Pages serves static files only, so there is no /api/lead route.
// Every form still says action="/api/lead"; this catches those submits and posts
// straight to the GHL inbound webhook (it allows cross-origin POSTs), then sends
// the visitor to /thank-you/. Same payload the old server route sent.
export default function LeadFormHandler() {
  useEffect(() => {
    const webhook = (site as Record<string, unknown>).leadWebhook as string | null | undefined;

    async function onSubmit(event: SubmitEvent) {
      const form = event.target as HTMLFormElement | null;
      if (!form || !form.getAttribute("action")?.endsWith("/api/lead")) return;
      event.preventDefault();

      const button = form.querySelector<HTMLButtonElement>("button[type=submit], button:not([type])");
      const note = form.querySelector<HTMLElement>("[data-lead-error]") ?? document.createElement("p");
      note.setAttribute("data-lead-error", "");
      note.setAttribute("role", "alert");
      note.textContent = "";

      if (!webhook) {
        note.textContent = `Sorry, the form isn't working right now. Please call ${site.phone}.`;
        form.appendChild(note);
        return;
      }

      const payload = Object.fromEntries(new FormData(form).entries());
      const name = String(payload.name ?? "").trim();
      if (button) button.disabled = true;
      try {
        const res = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // GHL's contact step maps first_name / last_name, so split the single name field here.
          body: JSON.stringify({
            ...payload,
            first_name: name.split(/\s+/)[0] ?? "",
            last_name: name.split(/\s+/).slice(1).join(" "),
            source: "website",
            page: window.location.href,
          }),
        });
        if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
        window.location.href = "/thank-you/";
      } catch {
        if (button) button.disabled = false;
        note.textContent = `Sorry, that didn't send. Please try again or call ${site.phone}.`;
        form.appendChild(note);
      }
    }

    document.addEventListener("submit", onSubmit);
    return () => document.removeEventListener("submit", onSubmit);
  }, []);

  return null;
}
