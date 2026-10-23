# 01 — Audit Report: dragonfly-village.com

**Audit date:** 2026-10-21
**Source:** https://dragonfly-village.com (the brief listed "httpsdragonfly-village.com"; this was read as `https://dragonfly-village.com`)
**Phase:** 1 of 2 (research only; no implementation)
**Workspace state at start:** `D:\dragonfly-village23` was **empty**. There was no existing project, no local assets, and no prior audit evidence.

---

## 1. Website overview

| Item | Finding | Status |
|---|---|---|
| Business | Dragonfly Village is an eco retreat village and bungalow accommodation in the rice fields of Ubud, Bali. It also runs a herbal steam sauna, a saltwater pool, a vegetarian/vegan café, TCM detox programs, and hosted retreats/events. | Verified (site content) |
| CMS | WordPress (PHP 8.3.33, Apache) | Verified (HTTP headers, REST API) |
| Theme | **Campterra** v1.8.0 (MotoPress camping/retreat theme) | Verified (stylesheet paths) |
| Page builder | **Elementor** 4.3.4 (kit post 8854). Some pages use the classic theme template without Elementor. | Verified |
| Key plugins observed | Elementor, Contact Form 7 (+ reCAPTCHA, Akismet), Yoast SEO, FooGallery / FooBox lightbox, MotoPress Image Hotspot, Meks Smart Social Widget, Another Mailchimp Widget, ShortPixel CDN, Post SMTP, All-in-One WP Migration, an Elementor MCP plugin, and leftover MotoPress Hotel Booking and WooCommerce shortcodes | Verified (REST namespaces, asset URLs, shortcodes rendered as text) |
| Booking engine | SabeeApp IBE widget script on Accommodations (`ibe.sabeeapp.com/bewidget.php?id=7533cea6…`); the main CTA is a Contact Form 7 "Booking request" form | Verified (markup) |
| Analytics | Google gtag with **Universal Analytics `UA-28615831-6`** (UA was sunset by Google in 2023, so it is most likely collecting nothing) | Verified (markup); data collection not verifiable |
| Language | English only (`en-US`); no translation tool | Verified |
| Blog | **0 posts** (`/wp-json/wp/v2/posts` total = 0). `/news/` renders "Nothing Found". | Verified |

## 2. Methods used

1. **Workspace inspection.** The directory was empty, so all evidence comes from the live site.
2. **robots.txt and Yoast sitemap index** (`/sitemap_index.xml`). This covers 5 sub-sitemaps: pages, team, testimonials, activities, and activity categories.
3. **WordPress REST API** (`/wp-json/wp/v2/*`): pages (38), posts (0), media (432 reported, 272 publicly listed), types, and plugin namespaces.
4. **Raw HTML download** of all 64 sitemap URLs, plus `/news/`, the probe route `/rooms/`, and a 404 probe. A parser then extracted metadata, headings, document-order content, images, links, forms, iframes and scripts.
5. **Stylesheet analysis**: theme `style.css`, the Customizer inline CSS, the Elementor kit (global colours and fonts), and the per-page Elementor CSS.
6. **Headless Chrome 155 (puppeteer-core)**:
   - Full-page and above-the-fold screenshots of 15 key routes at 1440×900, 768×1024 (touch) and 390×844 (touch/iPhone UA).
   - Computed-style probes.
   - Horizontal-overflow detection.
   - Mobile-menu toggle test.
   - Sticky-header test.
7. **Link checks** on every content link; HEAD checks on all 280 unique referenced assets; partial image downloads to read original dimensions.

All raw HTML, CSS and tooling stayed in a temporary scratchpad. Only the curated evidence was saved into this folder.

## 3. Coverage record

### 3.1 Pages successfully inspected (HTML + content extraction)

All **64 sitemap URLs plus `/news/`** returned HTTP 200 and were fully extracted (see [02-page-inventory.md](02-page-inventory.md) and [content/pages/](content/pages/)). Of these, 15 key routes were also inspected visually at 3 viewports (see [screenshots/](screenshots/)).

### 3.2 Pages inspected only partially

| Route | Limitation |
|---|---|
| Secondary routes (team, individual testimonials, booking-confirmation children, WooCommerce pages, legacy `/dragonfly-village-2/*` children) | HTML/content only, with no screenshots. They are low-value or placeholder pages. |
| `/accommodations/` | The SabeeApp booking widget is an external script; its rendered UI and behaviour were not exercised. |
| `/about/` | The image-hotspot map, accordion (FAQ) and testimonial carousel were captured as content, but individual click states were not exercised. |

### 3.3 Pages discovered but inaccessible

None. No discovered URL returned 401/403/5xx.

### 3.4 Routes that are broken or unavailable

| Route / link | Finding |
|---|---|
| `http://about` (homepage "MORE ABOUT US" button) | **Broken.** The link is malformed and resolves nowhere. It should be `/about/`. |
| `/gut-parasite-cleanse`, `/program/liver-cleanse/`, `/program/lymphatic-kidney-cleanse/` (Detox "SHOW DETAILS" buttons) | These only work because WordPress 301-guesses the redirect to `/detox/...`. The links are fragile. |
| "BOOK YOUR PROGRAM NOW" on all 4 detox detail pages | `href="#"`, so the button does nothing. |
| `/news/` | 200 but empty ("Nothing Found"). |
| `/program-2/` | 200 but an empty draft-like page ("Program 2"). |
| `/rooms/` (probe) | 404. Used to confirm 404 template behaviour. |

### 3.5 Interactive states that could not be verified

- Form submissions: Contact, Booking request, Detox enquiry, Mailchimp newsletter, comments. **Nothing was submitted**, to avoid sending real enquiries to the business.
- SabeeApp booking widget flow, availability and payment.
- Megatix ticket purchase flow (external).
- Lightbox (FooBox) open/close, carousel autoplay timing, image-hotspot tooltips, accordion open/close animation, hover states (beyond what CSS reveals).
- reCAPTCHA behaviour.

### 3.6 Technical / access limitations

- **Full-page headless screenshots show some empty white blocks**: home room cards, event card images, the "Symbolism" parallax section, and the newsletter heading. The underlying `<img>` tags and URLs are present in the HTML and all return 200, so these are almost certainly lazy-load or motion-effect artefacts of full-page capture, **not live-site defects**. The above-the-fold shots render correctly. Confirm visually in a real browser during Phase 2.
- The media library reports 432 items, but only **272** are publicly listed by the REST API. The other ~160 are probably attached to non-public content and could not be enumerated. The manifest therefore maps **assets actually referenced on public pages** (280 unique), which is what the rebuild needs.
- Elementor animations and hover transitions were assessed from CSS and markup only, not from video capture.
- No admin, CMS or hosting access, so drafts, form-recipient settings, SabeeApp configuration and Mailchimp list settings are unknown.

## 4. Headline findings

1. **Content is real and fact-dense in a few places**: room rates, sauna hours and prices, café hours, detox programs and prices, event dates and prices, FAQs, terms. A large share of the site is **legacy theme/demo content**: team "lorem ipsum" staff, the Typography demo page, WooCommerce and MotoPress booking stubs, and "Program 2".
2. **Primary IA (verified nav):** Home · Accommodation · Retreats & Events · Sauna · Dragonfly Café · Detox Program · About · Contact.
3. **Conversion paths**:
   - Room "Book Now" → `/booking-request/?your-accomodation=<Room>` (CF7 form).
   - Email/WhatsApp contact.
   - Event bookings by email, plus Megatix tickets for Dance of the Dragonfly and an external site for the Shaolin Arts retreat.
   - Detox bookings by `mailto:`.
4. **Several factual inconsistencies** need the client's confirmation before Phase 2: phone number variants, two emails, café hours, detox day counts, a peak-season end date, and room count wording. See [08-issues-gaps-questions.md](08-issues-gaps-questions.md).
5. **Brand:**
   - Hand-drawn script "Dragonfly Village" wordmark with a dragonfly.
   - Deep plum `#330026`, terracotta/coral `#E2725B` (`#E57E6B` on buttons), charcoal `#333333`, warm greys.
   - Torn-paper/brush edges between sections.
   - Montserrat (headings) + Source Sans Pro (body), with stray Arimo, Alegreya Sans and Open Sans uses.
6. **Responsive:** no horizontal overflow at any tested width. The header is **not sticky**. Below 992px the menu collapses to a hamburger that opens a full-height plum panel. Pages become very long on mobile (home ≈16,280px at 390px wide).
7. **Performance concerns:**
   - Detox PNG banners (5–7 MB originals, 3780×1890).
   - Café menu images served as full-size JPEG/PNGs.
   - One 4833×3222 room photo (≈4 MB).
   - A WhatsApp screenshot and a "Screen-Shot" PNG used as content images.
   - 132 `<img>` references without alt text.

See the remaining documents for detail.
