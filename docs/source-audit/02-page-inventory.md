# 02 — Page & Route Inventory

Status codes were checked on 2026-10-21; the full list is in [data/route-status.csv](data/route-status.csv). SEO fields for every route are in [data/seo-metadata.csv](data/seo-metadata.csv). The verbatim content of every route is in [content/pages/](content/pages/).

**Recommendation key:** **Implement** = build in Phase 2 · **Merge** = fold content into another page · **Legacy** = do not rebuild; add a 301 redirect · **Review** = ask the client.

## 1. Route classification summary

| # | Route | Title (H1) | Type | Source | Last modified | Recommendation |
|---|---|---|---|---|---|---|
| 1 | `/` | Home (hero slider "A Magical Village For Your Retreat…") | Main nav | Elementor + front-page template | 2024-11-12 | **Implement** |
| 2 | `/accommodations/` | Ways to Stay | Main nav ("Accommodation") | Elementor | 2024-05-09 | **Implement** |
| 3 | `/retreats-events/` | Retreats & Events | Main nav | Elementor | 2024-11-12 | **Implement** |
| 4 | `/herbal-steam-sauna/` | Herbal Steam Sauna | Main nav ("Sauna") | Wide template + FooGallery | 2026-02-27 | **Implement** |
| 5 | `/dragonfly-village-2/dragonfly-cafe-open-daily/` | Dragonfly Café | Main nav | Wide template + FooGallery | 2026-03-03 | **Implement** at a cleaner route (e.g. `/cafe/`) + 301 |
| 6 | `/detox/` | (banner "Detox Program"; no H1) | Main nav, listing | Elementor | 2026-05-27 | **Implement** |
| 7 | `/detox/gut-parasite-cleanse/` | (no H1) | Detail | Elementor | 2026-05-22 | **Implement** |
| 8 | `/detox/liver-cleanse/` | (no H1) | Detail | Elementor | 2026-05-22 | **Implement** |
| 9 | `/detox/lymphatic-kidney-cleanse/` | (no H1) | Detail | Elementor | 2026-05-22 | **Implement** |
| 10 | `/detox/full-body-detox/` | (no H1) | Detail | Elementor | 2026-05-27 | **Implement** |
| 11 | `/about/` | About | Main nav | Elementor | 2023-03-03 | **Implement** |
| 12 | `/contacts/` | Contact Us | Main nav ("Contact") | Elementor | 2023-07-05 | **Implement** (consider `/contact/` + 301) |
| 13 | `/booking-request/` | Booking request | Enquiry / transaction | CF7 | 2023-10-09 | **Implement** |
| 14 | `/activity/dance-of-the-dragonfly/` | Dance of the Dragonfly | Event detail | Theme (cptp-activity) | 2026-10-09 | **Implement** |
| 15 | `/activity/shaolin-basics-foundations-of-shaolin-kung-fu-with-shifu-li-shi-feng/` | Shaolin Basics… | Event detail | Theme | 2026-10-07 | **Implement** |
| 16 | `/activity/yang-tai-chi-the-complete-24-form-with-shifu-li-shi-feng/` | Yang Tai Chi… | Event detail | Theme | 2026-10-07 | **Implement** |
| 17 | `/activity/chen-tai-chi-fan-form-4-day-intensive-with-shifu-li-shi-feng/` | Chen Tai Chi Fan Form… | Event detail | Theme | 2026-10-07 | **Implement** |
| 18 | `/activity/nurturing-qi-gong-a-peaceful-3-day-experience-with-tcm-dr-jon-win/` | Nurturing Qi Gong… | Event detail | Theme | 2026-10-07 | **Implement** |
| 19 | `/activity/shaolin-arts-retreat-traditional-kung-fu-chi-kung/` | Shaolin Arts Retreat… | Event detail | Theme | 2026-10-07 | **Implement** |
| 20 | `/activity/bali-retreat-power-without-armor-march-2-9-2027/` | Bali Retreat ~ Power Without Armor… | Event detail | Theme | 2026-05-23 | **Implement** |
| 21 | `/activity/` | Activities (archive) | Listing | Theme archive | — | **Merge** into `/retreats-events/` (keep the route as a redirect or alias) |
| 22 | `/activity-category/events/` | Category: Events | Listing | Theme archive | — | **Legacy** → 301 to `/retreats-events/` |
| 23 | `/terms-conditions/` | Terms & Conditions | Utility / legal | Classic | 2019-02-15 | **Implement** (short page or section) |
| 24 | `/testimonials/` | Testimonials | Secondary | Classic + cptp-testimonial | 2018-08-28 | **Merge** into About / Home (no nav link exists) |
| 25 | `/testimonial/` + 9 × `/testimonial/<name>/` | Testimonial archive / singles | Detail | CPT | 2019-02-15 | **Legacy** → 301 to the testimonials section |
| 26 | `/retreats-workshops/` | Retreats & Workshops | Old duplicate of #3 (same text/images, 2019) | Wide template | 2019-02-13 | **Legacy** → 301 to `/retreats-events/` |
| 27 | `/dragonfly-village-2/a-magical-village-for-your-retreat/` | Home slider slide | Hidden (slide source) | Child of Home | 2024-11-12 | **Legacy** (content lives in the home hero) |
| 28 | `/dragonfly-village-2/beautiful-location-in-ubud/` | Slide | Hidden | — | 2024-11-12 | **Legacy** |
| 29 | `/dragonfly-village-2/herbal-steam-sauna-slider/` | Slide (duplicate of Sauna page text) | Hidden | — | 2026-03-03 | **Legacy** |
| 30 | `/dragonfly-village-2/saltwater-pool/` | Slide | Hidden | — | 2024-11-12 | **Legacy** |
| 31 | `/dragonfly-village-2/spend-holidays-with-us/` | Slide | Hidden | — | 2024-11-12 | **Legacy** |
| 32 | `/dragonfly-village-2/workshops-retreats/` | Slide | Hidden | — | 2024-11-12 | **Legacy** |
| 33 | `/dragonfly-village-2/explore-enjoy-dragonfly-village/` | Slide | Hidden | — | 2024-11-12 | **Legacy** |
| 34 | `/dragonfly-village/` | Dragonfly-Village (image only) | Hidden / orphan | — | 2024-11-12 | **Legacy** |
| 35 | `/news/` | "Nothing Found" | Blog index (empty) | Theme | 2018-08-28 | **Review** (no posts; do not invent a blog) |
| 36 | `/program-2/` | Program 2 (empty) | Draft-like | — | 2026-03-26 | **Legacy / Review** |
| 37 | `/team/` + 6 × `/team/<name>/` | Theme demo staff (lorem ipsum) | Demo | CPT | 2018-08-28 | **Do not rebuild**; 301 or 410 |
| 38 | `/typography/` | Theme demo typography page | Demo | — | 2019-02-12 | **Do not rebuild** |
| 39 | `/shop/`, `/cart/`, `/checkout/`, `/my-account/` | WooCommerce stubs (raw shortcodes shown) | Transaction (dead) | — | 2019-02-12 | **Do not rebuild** |
| 40 | `/search-availability/`, `/search-results/`, `/booking-confirmation/` (+ `booking-canceled`, `booking-confirmed`, `payment-success`, `transaction-failed`) | MotoPress Hotel Booking stubs (raw `[mphb_*]` shortcodes visible) | Transaction (dead) | — | 2018–2019 | **Do not rebuild.** `booking-confirmed` text could serve as a form thank-you message. |
| 41 | `/?s=` (search) | WP search | Utility | Theme | — | **Review** (site is small; search is probably unnecessary) |
| 42 | 404 | "Oops! That page can't be found." | Utility | Theme | — | **Implement** (a simple 404) |

**Totals:** 64 sitemap URLs + `/news/` + the search and 404 utilities. The recommended Phase 2 scope is **≈ 20 routes**: 8 main pages, 4 detox details, 7 event details, plus booking request, terms and 404. Legacy URLs are handled by redirects.

---

## 2. Shared components (all pages)

| Component | Description (verified) |
|---|---|
| **Header (top bar)** | White. Logo on the left (`dragonfly-logo-160x54-black.png`). On the right: 3 info blocks with coral icons: "Contact phone: +62 859 3388 1999", "Working hours: 7:00 am - 9:00 pm", "Contact e-mail: home@dragonfly-village.com". On mobile the logo is centred and the info blocks move into the menu panel. |
| **Header (nav bar)** | Plum `#330026` bar, 61px tall. 8 uppercase Montserrat 12px/700 links in `#E7E7E7`; active/hover link `#E57E6B`. Search icon on the right toggles a search field. **Not sticky.** |
| **Page title banner** (inner pages) | Full-width photo banner with dark overlay, white centred H1 (Montserrat 700), lowercase breadcrumbs ("home / ways to stay"), torn-paper bottom edge. |
| **Footer widgets** | Plum `#330026`, torn top edge. Four columns: white logo · "Find us on" (Facebook, Instagram, YouTube round icons) · "Info" (tagline + phone/WhatsApp) · "Search This Site". |
| **Footer bottom** | `#333333`. "dragonfly-village © 2026 All Rights Reserved." + repeated 8-link menu in coral. |
| **Event card** | Square poster image, H2 title, date line, excerpt, "READ MORE →" link. White card with soft shadow, 3-column grid. |
| **Room block** | Left: image carousel with dots. Right: H4 room name, description, rates, "BOOK NOW" button, retreat-rate email line, amenities line, icon features (WiFi / Bathtub / Fridge / Additional Beds). |
| **Detox detail template** | Banner image (baked-in text), "N Days / N Nights — IDR price" line, intro, "BOOK YOUR SPOT" (mailto), OVERVIEW, then 4 sections (Price & inclusions, Accommodation & healing environment, Daily activities, Optional add-ons), a repeat banner, "BOOK YOUR PROGRAM NOW" (`#`), and an optional CF7 enquiry form. |
| **Event detail template** | Poster image, H1, date, body copy, price/includes list, booking email or ticket link, prev/next post navigation, **WordPress comments form** (open on all events). |
| **Location block** (Home + About) | "IMPORTANT" motorbike luggage notice, hand-drawn map image (`dragonfly-village-map-new.png`) with a hotspot, address list, Google Maps iframe. |
| **Newsletter** (Home) | "Subscribe to Newsletter" with a Mailchimp email field and SUBSCRIBE button. |

---

## 3. Page-by-page detail (primary routes)

### 3.1 Home — `/`
- **Purpose:** brand introduction and hub for all offerings. **Type:** landing.
- **Sections (original order):**
  1. **Hero slider**, 8 slides. Each is a child page with a featured image, H2 and excerpt: A Magical Village For Your Retreat…; Beautiful Location in Ubud; Herbal Steam Sauna (with hours and prices); Saltwater Pool; Dragonfly Café ("More info"); Spend Holidays with us…; Workshops & Retreats; Explore & Enjoy Dragonfly Village. Vertical square dot pager on the right; torn-paper bottom with a plum band.
  2. **OUR CONCEPT**: Gandhi quote, intro paragraph, "MORE ABOUT US" button (**broken link** `http://about`).
  3. **RETREAT AND CASUAL RATES**: blurred photo background, circular photo, uppercase paragraph with an EMAIL link (`info@`), "MORE INFO" → `/retreats-events/`.
  4. **WHY CHOOSE DRAGONFLY VILLAGE**: 8 coral icon features around a large black logo (Herbal Steam Sauna, Close to Ubud center, Salt Water Pool, Workshop Spaces, Dragonfly Café, Free Fiberoptic WiFi, Daily House Keeping, Permaculture Garden).
  5. **ACCOMMODATION** intro paragraph.
  6. **SINGLE / DOUBLE / TRIPLE / QUADRUPLE BUNGALOWS**: description plus 3 cards (Standard Double Bungalow, Superior Triple Room Bungalow, Quadruple Room Bungalow).
  7. **FOR MORE INFO VISIT**: "ACCOMMODATIONS" button.
  8. **Image carousel**: 27 landscape photos, dot pager.
  9. **SYMBOLISM**: paragraph over a parallax background (`DRAGONFLY-01.jpg` / yoga house).
  10. **RETREATS & EVENTS**: 7 event cards (shortcode feed of the activity CPT).
  11. **Location**: IMPORTANT luggage notice, map image, "WE ARE WAITING FOR YOU" address/phone/email/WhatsApp, Google Map.
  12. **Subscribe to Newsletter** (Mailchimp).
- **Assets:** 46 unique (see manifest `page=home`).
- **Typography:** H1 is the visually hidden word "Home". Hero H2 is Montserrat 39px/700 in white. Section H2s are Montserrat ~31px uppercase. Body is Source Sans Pro 16/28. The hero feature labels use **Arimo** 19px bold.
- **Interactive:** hero slider (slick), image carousel (Swiper), image hotspot on the map, newsletter form, Google Map iframe.
- **SEO:** title "Home - dragonfly-village" (weak). Description is present. og:image is the round photo. JSON-LD: Organization / WebSite / WebPage / BreadcrumbList.
- **Risks:** broken "More about us" link; two emails (`info@` vs `home@`); no meaningful H1; very long page (9.8k px desktop, 16.3k px mobile); a sauna paragraph is duplicated from the Sauna page.
- **Redesign notes:** keep the hero message, concept, key features, a room teaser, an events teaser and location. Drop the 27-image carousel in favour of a curated gallery. Fix the H1.

### 3.2 Accommodation — `/accommodations/` ("Ways to Stay")
- **Purpose:** room types, rates, booking enquiry. **Type:** listing / sales.
- **Sections:**
  1. Title banner.
  2. Italic pull quote ("— Dragonfly village").
  3. **RETREAT AND CASUAL RATES**: H5 paragraph stating "typically starting from Rp1,000k-Rp1,950k", plus a direct-booking discount note (phone written **+62-857** 3388 1999; probably a typo).
  4. **SINGLE / DOUBLE / TRIPLE / QUADRUPLE BUNGALOWS**: 3 paragraphs, plus "Message us… FREE organic scrub/ice-cream when you book DIRECTLY".
  5. SabeeApp booking-engine script (renders externally).
  6. **8 room blocks**, each with an image carousel: MANGOSTEEN, COCONUT, MANGO, LYCHEE, PAPAYA, BANANA, LOTUS (Family Suite), BLUE MOON (Quadruple).
- **Assets:** 117 unique room photos (a carousel of 10–22 images per room).
- **Interactive:** 8 carousels; Book Now → `/booking-request/?your-accomodation=<Room>`, which pre-fills the form field; email links; SabeeApp widget (unverified).
- **SEO:** good meta description; og:image `DRAGONFLY-BALI-D.VILLAGE-16.jpg`.
- **Risks:** the peak-season end date differs for Papaya (Jan 10 vs Jan 14); "it's own" typo; the rates should be confirmed as current; heavy page (9.4k px).
- **Redesign notes:** a room card grid or list with a curated 4–6 images per room, a clean rate table, and the Book Now flow preserved.

### 3.3 Retreats & Events — `/retreats-events/`
- **Sections:**
  1. Title banner.
  2. **WHY CHOOSE DRAGONFLY VILLAGE**: licensed for retreats; 2 shalas (upstairs open 360° view, downstairs semi-enclosed), 90–100 m² each; "ALL DEPOSITS ARE NON-REFUNDABLE"; email for retreat rates.
  3. 8-image yoga-house carousel.
  4. **EVENTS**: 7 activity cards.
- **Interactive:** carousel; cards link to event detail pages.
- **Redesign notes:** split into "Host your retreat" (venue facts) and an "Upcoming events" list ordered by date. Hide or archive past events automatically.

### 3.4 Herbal Steam Sauna — `/herbal-steam-sauna/`
- **Sections:**
  1. Title banner.
  2. Featured image.
  3. Description.
  4. Rules ("rinse before pool").
  5. **OPEN** hours and prices (Mon (Silent)/Wed/Sat 6–9pm Rp150k; Wed morning 9–11am Rp100k; monthly membership on request).
  6. 16-image FooGallery (thumbnails via ShortPixel CDN, lightbox).
- **Notes:** the same text appears in the home slider and the hidden slide page. The About FAQ gives different sauna info (6–9pm Mon/Wed/Sat; no Wed morning). Includes 4 WhatsApp-sourced images (2026-02).

### 3.5 Dragonfly Café — `/dragonfly-village-2/dragonfly-cafe-open-daily/`
- **Sections:**
  1. Title banner.
  2. Featured image.
  3. Hours (7.30am–8.30pm), vegetarian/vegan, GF options, own coconut oil, "Fish option added in 2026".
  4. "WE PREPARE ALL MEALS TO SUPPORT OUR RETREAT GROUPS".
  5. **DRAGONFLY CAFÈ** gallery (9 images).
  6. **MENU**: 32 menu-page images (`2026/02/1-1.jpg … 32.jpg`), 230×230 thumbnails opening in a lightbox.
  7. **ORGANIC GARDEN** gallery (3 drone photos).
- **Risks:** the menu exists only as images (not accessible or searchable; ~0.4–0.7 MB each). Hours conflict with the meta description and FAQ ("7.30am – 9pm"). The heading spells "CAFÈ" with a grave accent while elsewhere it is "Café". The URL sits under the legacy slider parent.
- **Redesign notes:** a dedicated `/cafe/` route; keep the menu images but consider a lightweight viewer or PDF (ask the client for a text menu).

### 3.6 Detox Program — `/detox/` (+ 4 details)
- **Listing sections:**
  1. Title banner.
  2. **TCM & Detox Programs**: intro image and 2 paragraphs.
  3. 4 program banner images (text baked into the image), each with a "SHOW DETAILS" button that appears on hover (custom `.hover-details` CSS).
- **Detail sections** (identical template; the Full Body page adds an enquiry form):
  1. Banner.
  2. "N Days / N Nights — IDR price".
  3. Intro.
  4. BOOK YOUR SPOT.
  5. OVERVIEW (plus a short-version price).
  6. VIEW PRICE & INCLUSIONS (5 bullets).
  7. ACCOMMODATION & HEALING ENVIRONMENT.
  8. DAILY ACTIVITIES.
  9. OPTIONAL ADD-ONS.
  10. Repeat banner.
  11. BOOK YOUR PROGRAM NOW (`#`).
  12. (Full Body only) "Any Questions? Message us here" form.
- **Programs (verified):**

| Program | Headline duration / price | Body text says | Short version |
|---|---|---|---|
| Gut & Parasite Cleanse | 7 Days / 6 Nights — IDR 28,500,000 | "5-Day" | 3D/2N — IDR 14,800,000 |
| Liver Cleanse | 9 Days / 8 Nights — IDR 33,500,000 | "7-Day" | 3D/2N — IDR 14,800,000 |
| Lymphatic & Kidney Cleanse | 7 Days / 6 Nights — IDR 28,500,000 | "5-Day" | — |
| Full Body Detox | 19 Days / 18 Nights — IDR 69,000,000 | "17-Day" | 8D/7N — IDR 39,500,000 |

- **Risks:** no H1 and no meta descriptions; hover-only buttons are inaccessible on touch; the detail-link URLs are wrong (they rely on redirects); a dead CTA; banner names differ from page names ("Liver Detox" vs "Liver Cleanse"; "Kidney Detox" vs "Lymphatic & Kidney Cleanse"); "18 Night" (singular) on the Full Body banner; "Agni Horta" (probably *Agnihotra*); "a a structured" typo; health claims should be reviewed by the client.

### 3.7 About — `/about/`
- **Sections:**
  1. Title banner.
  2. **A MAGICAL VILLAGE FOR YOUR RETREAT…**: square drone photo, "WE WARMLY WELCOME YOU TO JOIN US", Gandhi motto, "THIS IS OUR MOTTO FOR WELL-BEING", 4 paragraphs.
  3. **WHY CHOOSE DRAGONFLY VILLAGE**: "Tranquility and stunning greenery all around…" plus a 45-image carousel.
  4. **SHORT HISTORY OF DRAGONFLY VILLAGE**: timeline of 6 dated events, 2010–2013.
  5. **DRAGONFLY TENANTS**: 4 pet portraits (Tin Tin, In memory of Lemon, Shakti, Fluffy).
  6. **SPECIAL FEATURES**: the same 8 icon features as Home.
  7. **SHORT VIDEO ABOUT US**: play icon linking to YouTube `BfLM_niQW2Y` ("Dragonfly Village, Ubud, Bali" by Manu Film), over a background image.
  8. **REFLECTIONS**: 8-testimonial carousel (Alegreya Sans text, generic avatar icons).
  9. **FREQUENTLY ASKED QUESTIONS**: 9-item accordion.
  10. Map image + hotspot.
  11. **IMPORTANT** luggage notice.
- **Risks:** no meta description; the testimonial "Maria Issa" exists only here (no CPT entry); locations differ between About and the CPT; the FAQ's food hours (to 9pm) conflict with the café page; "diner" typo.

### 3.8 Contact — `/contacts/`
- **Sections:**
  1. Title banner (flora photo).
  2. 3 icon boxes: Phone (+62 859 33 88 1999, WhatsApp text only 7am–9pm), E-mail (home@), Location (Jalan Raya Ubud, Subak Sok Wayah, Abangan, Ubud, Gianyar, Bali, Indonesia, 80571).
  3. **SEND US A MESSAGE**: CF7 form with Name*, Email*, Subject, Message, reCAPTCHA and a "Send" button.
  4. **MAP**: Google Maps iframe.
- **Risks:** the address spelling varies ("Subak Sok Wayah" here vs "Subak Sukawayah" on Home; the Google query uses "Subak Sok Wayah"). No meta description.

### 3.9 Booking request — `/booking-request/`
- CF7 form fields: Accomodation* (prefilled from the query string), Name of guest*, Email or WhatsApp*, Number of pax*, Booking Dates, Bed arrangement (optional), Other requests (optional). Submit button: "Submit". Akismet notice.
- **Risks:** "Accomodation" is misspelled (the field name `your-accomodation` must be preserved if the backend is reused); dates are free text.

### 3.10 Event detail pages (7)
Every page has a poster image, title, date and body, and has comments enabled. The facts are in [03-content-inventory.md](03-content-inventory.md) §6. Dance of the Dragonfly has 4 public comments (2024–2026), including a staff reply confirming tickets can be bought at reception.

### 3.11 Terms & Conditions — `/terms-conditions/`
Casual stay: confirmed with a Rp 1 mil deposit; all deposits non-refundable. Retreats: confirmed with a deposit; the balance is due one month before; last-minute changes are settled on check-in.

### 3.12 Testimonials — `/testimonials/`
Lists the 9 CPT testimonials. Not linked from the nav. **Merge** into About/Home.
