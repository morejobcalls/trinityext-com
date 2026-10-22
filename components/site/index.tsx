// Trinity Exteriors page building blocks (redesign, 22 October 2026).
// Pages compose these; all styling lives in app/brand.css (t-* classes).
import type { ReactNode } from "react";
import { site } from "@/lib/site.config";
import { mainNav, zones } from "@/lib/nav";

const TEL = "tel:+18648447777";

export function Site({ children }: { children: ReactNode }) {
  return (
    <div className="t-site">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="t-header">
      <div className="t-wrap t-nav">
        <a className="t-logo" href="/" aria-label="Trinity Exteriors home">
          <img src="/logo.webp" alt="Trinity Exteriors" width={161} height={52} />
        </a>
        <nav className="t-links" aria-label="Main">
          {mainNav.map((l) => <a key={l.href} href={l.href}>{l.name}</a>)}
        </nav>
        <div className="t-nav-cta">
          <a className="t-phone" href={TEL}>{site.phone}</a>
          <a className="t-btn t-btn-primary" href="/quote/">Get a free estimate</a>
          <details className="t-menu">
            <summary>Menu</summary>
            <div className="t-menu-panel">
              {mainNav.map((l) => <a key={l.href} href={l.href}>{l.name}</a>)}
              <a href="/contact/">Contact</a>
              <a href={TEL}>Call {site.phone}</a>
              <a className="t-btn t-btn-primary" href="/quote/">Get a free estimate</a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="t-footer">
      <div className="t-wrap">
        <div className="t-foot-grid">
          <div className="t-foot-brand">
            <img src="/logo-white.png" alt="Trinity Exteriors" width={143} height={46} />
            <p>The contractor Upstate homeowners trust with the whole house. Great work at a fair price.</p>
            <p style={{ marginTop: 14 }}><a href={TEL}>{site.phone}</a><br />{site.address}<br />Mon–Fri 8am–6pm · Sat–Sun closed</p>
          </div>
          {zones.map((z) => (
            <div key={z.id}>
              <h4>{z.tag}</h4>
              <ul>{z.services.map((s) => <li key={s.href}><a href={s.href}>{s.name}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="t-foot-bottom">
          <span>© 2026 Trinity Exteriors · Greenville, SC</span>
          <span><a href="/about/">About</a> · <a href="/reviews/">Reviews</a> · <a href="/blog/">Advice</a> · <a href="/contact/">Contact</a> · <a href="/privacy-policy/">Privacy</a> · <a href="/terms/">Terms</a></span>
        </div>
      </div>
    </footer>
  );
}

export function Rating() {
  return <div className="t-rating"><span className="t-stars" aria-hidden="true">★★★★★</span><span><b>5.0 on Google</b> · 106 reviews</span></div>;
}

type Img = { src: string; alt: string };

export function HeroArt({ main, second, note }: { main: Img; second?: Img; note?: { quote: string; cite: string } }) {
  return (
    <div className="t-hero-art">
      <div className={`t-ph ${second ? "t-ph-a" : "t-ph-solo"}`}><img src={main.src} alt={main.alt} fetchPriority="high" /></div>
      {second && <div className="t-ph t-ph-b"><img src={second.src} alt={second.alt} /></div>}
      {note && <div className="t-note"><q>{note.quote}</q><span>{note.cite}</span></div>}
    </div>
  );
}

export function PageHero({ crumbs, eyebrow, title, lead, ticks, main, second, note, cta = "Get a free estimate", ctaHref = "#estimate" }: {
  crumbs?: { name: string; href?: string }[]; eyebrow: string; title: ReactNode; lead: ReactNode; ticks?: string[];
  main: Img; second?: Img; note?: { quote: string; cite: string }; cta?: string; ctaHref?: string;
}) {
  return (
    <section className="t-pagehero">
      <div className="t-wrap t-hero-grid">
        <div>
          {crumbs && (
            <nav className="t-crumbs" aria-label="Breadcrumb">
              {crumbs.map((c, i) => <span key={c.name}>{i > 0 && " / "}{c.href ? <a href={c.href}>{c.name}</a> : c.name}</span>)}
            </nav>
          )}
          <span className="t-eyebrow">{eyebrow}</span>
          <h1 style={{ fontSize: "clamp(38px, 4.8vw, 62px)", margin: "16px 0 22px" }}>{title}</h1>
          <div className="t-lead">{lead}</div>
          <div className="t-hero-ctas">
            <a className="t-btn t-btn-primary" href={ctaHref}>{cta}</a>
            <a className="t-btn t-btn-ghost" href={TEL}>Call {site.phone}</a>
          </div>
          <Rating />
          {ticks && <ul className="t-ticks" style={{ marginTop: 22 }}>{ticks.map((t) => <li key={t}>{t}</li>)}</ul>}
        </div>
        <HeroArt main={main} second={second} note={note} />
      </div>
    </section>
  );
}

export function Band({ items }: { items: { big: string; text: string }[] }) {
  return (
    <div className="t-band">
      <div className="t-wrap t-band-grid">
        {items.map((i) => <div className="t-band-item" key={i.big}><div className="t-band-num">{i.big}</div><p>{i.text}</p></div>)}
      </div>
    </div>
  );
}

export function Section({ id, eyebrow, title, intro, tone, tight, children }: {
  id?: string; eyebrow?: string; title?: ReactNode; intro?: ReactNode; tone?: "sand" | "navy"; tight?: boolean; children?: ReactNode;
}) {
  return (
    <section id={id} className={`t-section${tone ? ` t-${tone}` : ""}${tight ? " t-tight" : ""}${tone === "navy" ? " t-on-navy" : ""}`}>
      <div className="t-wrap">
        {(eyebrow || title) && (
          <div className="t-head">
            {eyebrow && <span className="t-eyebrow">{eyebrow}</span>}
            {title && <h2>{title}</h2>}
            {intro && <p>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

const HouseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#003768" strokeWidth="1.2" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 11 12 4l9 7" /><path d="M5.5 9.5V20h13V9.5" /><path d="M5.5 15h13" /><path d="M12 9.5V15" />
  </svg>
);

export function ZoneCards() {
  return (
    <div className="t-zones">
      {zones.map((z) => (
        <article className="t-zone" key={z.id} id={z.id}>
          <div className="t-zone-img">{z.img ? <img src={z.img} alt={z.alt} loading="lazy" /> : <HouseIcon />}</div>
          <div className="t-zone-body">
            <span className="t-zone-tag">{z.tag}</span>
            <h3>{z.title}</h3>
            <p>{z.blurb}</p>
            <ul className="t-pills">{z.services.map((s) => <li key={s.href}><a href={s.href}>{s.name}</a></li>)}</ul>
          </div>
        </article>
      ))}
    </div>
  );
}

export function FeatureQuote({ eyebrow, quote, cite, img, chips }: { eyebrow: string; quote: string; cite: string; img: Img; chips?: string[] }) {
  return (
    <div className="t-feature">
      <div className="t-feature-img"><img src={img.src} alt={img.alt} loading="lazy" /></div>
      <div>
        <span className="t-eyebrow">{eyebrow}</span>
        <blockquote>“{quote}”</blockquote>
        <cite>{cite}</cite>
        {chips && <ul className="t-pills">{chips.map((c) => <li key={c}><span>{c}</span></li>)}</ul>}
      </div>
    </div>
  );
}

export function Steps({ items }: { items: { title: string; text: string; proof?: string; who?: string }[] }) {
  return (
    <div className="t-steps">
      {items.map((s) => (
        <div className="t-step" key={s.title}>
          <h3>{s.title}</h3><p>{s.text}</p>
          {s.proof && <div className="t-proof">{s.proof}<span>{s.who}</span></div>}
        </div>
      ))}
    </div>
  );
}

export type Review = { quote: string; name: string; job?: string };
export function Reviews({ items }: { items: Review[] }) {
  return (
    <div className="t-reviews">
      {items.map((r) => (
        <figure className="t-review" key={r.name + r.quote.slice(0, 12)} style={{ margin: "0 0 22px" }}>
          <p>“{r.quote}”</p>
          <figcaption className="t-who"><span className="t-av">{r.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2)}</span>{r.name}{r.job ? ` · ${r.job}` : ""}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Photos({ items }: { items: Img[] }) {
  return <div className="t-photos">{items.map((p) => <figure key={p.src}><img src={p.src} alt={p.alt} loading="lazy" /></figure>)}</div>;
}

export function Cards({ items }: { items: { title: string; text: ReactNode }[] }) {
  return <div className="t-cards">{items.map((c) => <div className="t-card" key={c.title}><h3>{c.title}</h3><p>{c.text}</p></div>)}</div>;
}

export function Ticks({ items }: { items: ReactNode[] }) {
  return <ul className="t-ticks">{items.map((t, i) => <li key={i}>{t}</li>)}</ul>;
}

export function Faq({ items }: { items: { q: string; a: ReactNode; open?: boolean }[] }) {
  return (
    <div className="t-faq">
      {items.map((f) => (
        <details key={f.q} open={f.open}>
          <summary>{f.q}</summary>
          <div>{typeof f.a === "string" ? <p>{f.a}</p> : f.a}</div>
        </details>
      ))}
    </div>
  );
}

export function Areas({ text, places }: { text: ReactNode; places: string[] }) {
  return (
    <div className="t-prose-col">
      <p>{text}</p>
      <ul className="t-pills t-areas">{places.map((p) => <li key={p}><span>{p}</span></li>)}</ul>
    </div>
  );
}

const PROJECTS = ["Roof or storm damage", "Deck, porch or patio cover", "Siding, gutters or trim", "Flooring or remodel", "Something else"];

export function LeadForm({ project, email }: { project?: string; email?: boolean }) {
  return (
    <form className="t-form" action="/api/lead" method="post">
      <label>Your name<input name="name" autoComplete="name" required placeholder="First and last" /></label>
      <label>Phone<input name="phone" type="tel" autoComplete="tel" required placeholder="Best number to reach you" /></label>
      {email && <label>Email (optional)<input name="email" type="email" autoComplete="email" /></label>}
      <label>What's the project?
        <select name="service" defaultValue={project ?? PROJECTS[0]}>{PROJECTS.map((p) => <option key={p}>{p}</option>)}</select>
      </label>
      <label>A few details<textarea name="message" rows={3} placeholder="What's going on, and roughly when" /></label>
      <button className="t-btn t-btn-primary" type="submit">Get my free estimate</button>
      <small>No pressure. No obligation. We call back on weekdays.</small>
    </form>
  );
}

export function CtaForm({ title = "Tell us about the project. Big or small.", text = "We'll call you back on a weekday, come take a look, and give you a fair price in writing.", project, email }: {
  title?: ReactNode; text?: ReactNode; project?: string; email?: boolean;
}) {
  return (
    <section className="t-cta" id="estimate">
      <div className="t-wrap">
        <div className="t-cta-card">
          <div className="t-cta-copy t-on-navy">
            <span className="t-eyebrow">Free estimate</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <a className="t-phone-big" href={TEL}>{site.phone}</a>
            <p style={{ fontSize: 15, marginTop: 10 }}>Mon–Fri, 8am–6pm · 1801 Rutherford Rd, Greenville</p>
          </div>
          <LeadForm project={project} email={email} />
        </div>
      </div>
    </section>
  );
}

// Index pages (/services, /blog) are routers, not sales pages: they send people
// to /quote/ instead of carrying their own form.
export function CtaBand({ title = "Tell us about the project. Big or small.", text = "Free estimate, a fair price in writing, and no pressure." }: { title?: ReactNode; text?: ReactNode }) {
  return (
    <section className="t-cta">
      <div className="t-wrap">
        <div className="t-cta-card" style={{ gridTemplateColumns: "1fr" }}>
          <div className="t-cta-copy t-on-navy">
            <span className="t-eyebrow">Free estimate</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="t-hero-ctas" style={{ marginBottom: 0 }}>
              <a className="t-btn t-btn-light" href="/quote/">Get a free estimate</a>
              <a className="t-btn t-btn-ghost" style={{ borderColor: "#fff", color: "#fff" }} href={TEL}>Call {site.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const business = {
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}/#business`,
  name: "Trinity Exteriors",
  url: `${site.url}/`,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/images/roof-replacement-charcoal-shingles-tan-craftsman-home.webp`,
  telephone: "+1-864-844-7777",
  priceRange: "$$",
  address: { "@type": "PostalAddress", streetAddress: "1801 Rutherford Rd Suite 109A", addressLocality: "Greenville", addressRegion: "SC", postalCode: "29609", addressCountry: "US" },
  areaServed: ["Greenville SC", "Spartanburg SC", "Anderson SC", "Greenwood SC", "Simpsonville SC", "Taylors SC", "Travelers Rest SC", "Piedmont SC", "Fountain Inn SC"],
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "106" },
};

// Article (blog) layout
export function ArticleShell({ crumbs, eyebrow, title, updated, readMins, hero, toc, children }: {
  crumbs: { name: string; href?: string }[]; eyebrow: string; title: string; updated: string; readMins: number;
  hero: Img; toc: { id: string; label: string }[]; children: ReactNode;
}) {
  return (
    <div className="t-wrap">
      <div className="t-article-head">
        <nav className="t-crumbs" aria-label="Breadcrumb">{crumbs.map((c, i) => <span key={c.name}>{i > 0 && " / "}{c.href ? <a href={c.href}>{c.name}</a> : c.name}</span>)}</nav>
        <span className="t-eyebrow">{eyebrow} · {readMins} min read</span>
        <h1>{title}</h1>
        <p className="t-byline">By Trinity Exteriors · Greenville, SC · Updated {updated}</p>
      </div>
      <div className="t-article-hero"><img src={hero.src} alt={hero.alt} fetchPriority="high" /></div>
      <div className="t-article">
        <article className="t-prose">{children}
          <div className="t-author"><img src="/icon-512.png" alt="" /><div><b style={{ color: "var(--t-ink)" }}>Trinity Exteriors</b><br />Roofing, decks, exteriors and remodels across Greenville and the Upstate. 5.0 from 106 Google reviews.</div></div>
        </article>
        <aside className="t-aside">
          <nav className="t-toc" aria-label="On this page"><b>On this page</b><ol>{toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>)}</ol></nav>
          <div className="t-aside-cta"><b>Want a straight answer on your house?</b>Free estimate, fair price in writing, no pressure.<a className="t-btn t-btn-light" href="/quote/">Get a free estimate</a></div>
        </aside>
      </div>
    </div>
  );
}
