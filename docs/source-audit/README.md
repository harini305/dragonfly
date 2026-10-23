# Source Audit — dragonfly-village.com (Phase 1)

**Audit date:** 2026-10-21 · **Source:** https://dragonfly-village.com · **Status:** Phase 1 complete. **Awaiting approval before Phase 2.**

This folder documents the original WordPress site so the Next.js rebuild can proceed without repeating the research. No code, redesign, configuration change, git push or deployment has been performed.

## Index

| File | Contents |
|---|---|
| [01-audit-report.md](01-audit-report.md) | Overview, methods, coverage record, limitations, headline findings |
| [02-page-inventory.md](02-page-inventory.md) | All routes with classification and recommendations; shared components; page-by-page section order |
| [03-content-inventory.md](03-content-inventory.md) | Content preservation reference: contact, story, rooms and rates, facilities, detox, events, testimonials, FAQ, forms, drop list |
| [04-assets-manifest.csv](04-assets-manifest.csv) | 407 rows / 280 unique assets mapped page → section → original URL, dimensions, size, status, concerns |
| [05-brand-reference.md](05-brand-reference.md) | Logo, typography (verified values), colour palette (verified vs template defaults), visual motifs |
| [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | Feature inventory with verification levels, third-party services, backend items |
| [07-responsive-observations.md](07-responsive-observations.md) | Results at 1440/768/390, breakpoints, component behaviour |
| [08-issues-gaps-questions.md](08-issues-gaps-questions.md) | Factual conflicts, typos, broken links, SEO/a11y gaps, asset issues, client questions |
| [09-phase-2-recommendations.md](09-phase-2-recommendations.md) | Proposed IA, redirects, asset plan, technical notes, **mandatory design rules** (two-font rule, footer, images, `images: { unoptimized: true }`) |
| [content/pages/](content/pages/) | 66 verbatim per-route content captures (Markdown) |
| [content/core-facts.json](content/core-facts.json) | Structured business facts (rooms, rates, programs, events, terms) |
| [data/seo-metadata.csv](data/seo-metadata.csv) | Title, description, canonical, og:image and H1 per route |
| [data/route-status.csv](data/route-status.csv) | HTTP status of every audited URL |
| [data/shared-header-footer.json](data/shared-header-footer.json) | Header, nav and footer content and links |
| [data/computed-style-probe.json](data/computed-style-probe.json) | Browser-computed fonts, sizes and colours per page/viewport |
| [screenshots/](screenshots/) | 93 screenshots (15 routes × 3 viewports, full page and fold, plus menu-open and scrolled) — see its README |

## Summary in one paragraph

Dragonfly Village is an eco retreat village of antique Javanese teak bungalows in the Ubud rice fields. The site runs on WordPress with the Campterra theme and Elementor. It has 8 main sections (Home, Accommodation, Retreats & Events, Sauna, Café, Detox, About, Contact), 4 detox program pages, 7 event pages and a booking-request form. There are no blog posts. About a third of the 64 sitemap URLs are legacy, demo or plugin-stub pages that should become redirects. The brand is a hand-drawn script wordmark, plum `#330026` + terracotta `#E2725B`, and Montserrat + Source Sans Pro, plus three stray fonts. The key risks are conflicting contact, hours and duration facts that need client confirmation; the defunct UA analytics; heavy PNG and menu images; and backend dependencies (form email, SabeeApp, Mailchimp) that a static Next.js frontend must replace or link.
