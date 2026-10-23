# Phase 2 — Frontend rebuild notes

Local build only. Nothing has been pushed or deployed.

## Run

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
npm run lint
```

Images: `npm run assets:download` fetches the curated originals listed in `scripts/asset-selection.mjs` (resolved from the audit manifest) into `assets-source/`; `npm run assets:optimize` regenerates `public/images/` and `src/data/image-manifest.json`.

## Stack

Next.js 16 (App Router, JavaScript), React 19, GSAP 3 + ScrollTrigger via `@gsap/react`, CSS Modules plus one global stylesheet. Fonts: Montserrat (headings) and Source Sans 3 (everything else) via `next/font`, self-hosted at build time. `next.config.mjs` sets `images: { unoptimized: true }`; responsive images come from pre-generated WebP widths (`src/components/Img.js`).

## Routes

| Route | Source |
|---|---|
| `/` | Home |
| `/accommodations/` | Accommodation (slug kept) |
| `/booking-request/` | Booking request; `?your-accomodation=` prefill kept |
| `/retreats-events/` | Retreats & Events + venue information |
| `/activity/[slug]/` | 7 event pages (slugs kept) |
| `/herbal-steam-sauna/` | Sauna + saltwater pool (slug kept) |
| `/cafe/` | Café (new clean slug; old URL redirects) |
| `/detox/`, `/detox/[slug]/` | Detox overview + 4 programs (slugs kept) |
| `/about/` | About, history, tenants, video, reflections (testimonials), FAQ |
| `/contacts/` | Contact (slug kept) |
| `/terms-conditions/` | Terms (slug kept) |
| 404, `sitemap.xml`, `robots.txt` | |

Redirects (308, single hop) are defined in `next.config.mjs`, following 02-page-inventory §1 and 09 §2: café slider URL → `/cafe/`; `/activity/`, `/activity-category/events/`, `/retreats-workshops/` → `/retreats-events/`; testimonials → `/about/`; sauna/pool slides → `/herbal-steam-sauna/`; `/program-2/` → `/detox/`; old detox "Show details" targets → the program pages; team, typography, shop, cart, checkout, my-account, search-*, booking-confirmation/*, `/news/`, the other hidden slides and `/dragonfly-village/` → `/`.

## Content sources

All copy comes from `docs/source-audit/content/` and lives in `src/data/`. Conflicts and their treatment are listed in [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md).

## Images

155 of the 280 audited originals were downloaded (63 MB; mapping in `assets-source/SOURCES.csv`). They produced 460 WebP derivatives (36 MB in total; each page loads only one width per image). The detox banners (text baked in) are shown only as text-free crops. Café "menu" pages are dish photos with no text; see OPEN-QUESTIONS.

## Integrations

- Google Maps: the source embed URL, loaded only on click; "Open in Google Maps" link always available.
- YouTube `BfLM_niQW2Y`: click-to-play facade (youtube-nocookie).
- Megatix and crockungfu.com: outbound links as published (not transaction-tested).
- SabeeApp, Mailchimp, reCAPTCHA, Universal Analytics: not included (see OPEN-QUESTIONS).
