// Publish dates for held routes, ISO in UTC. Added 23 October 2026 for the blog drip.
// A route listed here stays out of the blog index, the sitemap and the deployed
// site (scripts/finish-html.mjs deletes it from out/) until its date. The daily
// scheduled run of .github/workflows/deploy.yml is what releases it. Link to a held
// route with <ScheduledLink>, never a raw <a> (code/check_scheduled_links.py).
export const SCHEDULE: Record<string, string> = {
  "/blog/roof-leak-repair-cost": "2026-10-26T11:00:00Z",
};

export const isLive = (route: string) => {
  const at = SCHEDULE[route.replace(/\/$/, "")];
  return !at || Date.now() >= Date.parse(at);
};
