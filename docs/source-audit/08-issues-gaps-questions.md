# 08 — Issues, Gaps, Inconsistencies & Open Questions

None of these have been "fixed" in the captured content. Items marked **❓ Client** need a business decision before Phase 2 publishes them.

## 1. Factual conflicts (❓ Client)

| # | Topic | Conflict | Where |
|---|---|---|---|
| F1 | Phone number | "+62 859 3388 1999" (most places) vs "**+62-857** 3388 1999" (Accommodation direct-booking line) | Accommodation H5 |
| F2 | Email | `home@dragonfly-village.com` (header, contact, detox, events) vs `info@dragonfly-village.com` (all "email us for retreat rates" links) | Home, Accommodation, Retreats & Events |
| F3 | Café hours | "7.30am-8.30pm" (café page body, home slide) vs "7.30am – 9pm" (café meta description, About FAQ) | Café, About |
| F4 | Café diet | "vegetarian and vegan only… Fish option added in 2026" vs FAQ "Our kitchen is vegetarian only" | Café, About FAQ |
| F5 | Sauna schedule | Sauna page: Mon (Silent)/Wed/Sat 6–9pm Rp150k + Wed 9–11am Rp100k. About FAQ: no Wed morning, no prices. Dance page: "Herbal Steam Sauna + Salt Water Pool · 6:00–9:00 PM (additional IDR 80k only)" on Wednesdays for dancers. | Sauna, About, Dance |
| F6 | Detox durations | Headline "7 Days / 6 Nights" vs body "5-Day" (Gut, Lymphatic); "9D/8N" vs "7-Day" (Liver); "19D/18N" vs "17-Day" (Full Body). Possibly arrival/departure days are included; needs confirmation of the intended wording. | Detox pages |
| F7 | Detox names | Banner images say "Liver **Detox**", "**Kidney** Detox", "Gut **and** Parasite Cleanse"; pages say "Liver Cleanse", "Lymphatic & Kidney Cleanse", "Gut & Parasite Cleanse". The Full Body banner says "18 **Night**". | /detox/ |
| F8 | Papaya peak season | Ends "Jan 10th" vs "Jan 14th" for every other room | Accommodation |
| F9 | Casual rate range | "typically starting from Rp1,000k-Rp1,950k", but the lowest published room rate is Rp1,180k | Accommodation |
| F10 | Address | "Subak Sok Wayah" + "Gianyar" (Contact) vs "Subak Sukawayah" (Home) | Contact, Home |
| F11 | Testimonial attribution | About carousel locations ("Planet Earth", "Indonesia", "Luxemburg") differ from the CPT (blank, "ID", "LU"). "Maria Issa" exists only on About. The texts differ slightly between versions. | About, Testimonials |
| F12 | Event booking channel | "Power Without Armor": "DM for details" (which channel?). Nurturing Qi Gong: no price. Shaolin Arts: no price on site. | Events |
| F13 | Time-sensitive pricing | Shaolin Basics and Yang Tai Chi early-bird ends **26 Oct 2026** (5 days after this audit). Chen Fan early-bird ends 10 Nov 2026. The Nov 2026 events will be in the past shortly after Phase 2 launches. | Events |
| F14 | "Fully licensed and complies with Indonesian legality…" | Business claim. Keep only as stated; do not expand it. | Retreats & Events |
| F15 | Health claims in the detox copy | Claims such as "prevent and treat illnesses" and "Studies have shown that sleeping in a wooden cabin… lower blood pressure". Preserve the meaning without strengthening it; the client should review it for regulatory comfort. | Detox |

## 2. Spelling / typo log (preserve or correct only with approval)

| Text found | Probable intent | Where |
|---|---|---|
| "Accomodation" (form label and URL param `your-accomodation`) | Accommodation (the **param name must be kept** if the backend is reused) | Booking request |
| "diner" | dinner | About FAQ |
| "it's own" | its own | Accommodation (all rooms) |
| "a a structured" | a structured | Full Body Detox |
| "Agni Horta fire ceremony" | Agnihotra | Detox pages |
| "Extraordinay", "relaxe", "sourrindings", "you can here the rain" | (testimonial quotes; leave verbatim) | Testimonials |
| "nor it is a branding exercise" | nor is it | Power Without Armor |
| "CAFÈ" | CAFÉ | Café H2 |
| "Dragonfly Village , an enchanted…" (space before the comma) | — | Footer |
| "Rp1,480k (peak … Jan 10th" (unclosed parenthesis) | — | Papaya |
| "Ubud is slightly cooler at night Each bungalow…" (missing full stop) | — | Home / Accommodation |
| Site name rendered "dragonfly-village" (lowercase, hyphenated) in titles and copyright | "Dragonfly Village" | Global |

## 3. Broken / weak functionality

| # | Issue |
|---|---|
| B1 | Home "MORE ABOUT US" → `http://about` (**broken**) |
| B2 | Detox "SHOW DETAILS" links use wrong paths (`/gut-parasite-cleanse`, `/program/...`) and work only through WP redirect guessing |
| B3 | Detox "BOOK YOUR PROGRAM NOW" → `#` (dead) |
| B4 | Universal Analytics `UA-28615831-6` is defunct (no data since 2023) |
| B5 | WooCommerce and MotoPress booking pages are public and indexed in the sitemap, showing raw shortcodes |
| B6 | Theme demo content is public and indexed: 6 "team" members with lorem ipsum, the Typography page, `/program-2/` |
| B7 | `/news/` is an empty blog index |
| B8 | Comments are open on event pages (spam exposure) |
| B9 | Hover-only detox buttons (inaccessible on touch and keyboard) |
| B10 | No privacy policy despite forms, Mailchimp, reCAPTCHA, analytics and Gravatar |

## 4. SEO / accessibility gaps

- Weak titles ("Home - dragonfly-village"). **No meta description** on About, Contact, Detox (all 5), Booking request, Terms and others.
- **No H1** on the 5 detox pages. The home H1 is the visually hidden word "Home".
- **132** `<img>` references with empty alt (room carousels on Home, galleries, event cards, the logo in the footer).
- Text baked into images (4 detox banners; the café menu as 32 images). Not readable by screen readers or search.
- ALL-CAPS paragraphs (home rates block, sauna notices) reduce readability.
- Contrast (computed WCAG ratios):
  - `#333` on coral `#E57E6B` = 4.53:1 (just passes AA).
  - **White on `#E57E6B` = 2.79:1** (fails AA; used on the Elementor "BOOK NOW" buttons).
  - **Terracotta `#E2725B` links on white = 3.09:1** (fails AA for body-size text).
  - `#9B9CA4` on plum = 6.58:1 (pass).
  - Body `#66676D` on white = 5.64:1 (pass).
  - Phase 2 needs a darker terracotta for text/links, or a dark button label.

## 5. Assets — missing / quality

| # | Issue |
|---|---|
| A1 | No vector logo; header logo only 160×54 |
| A2 | Detox banners: PNG 3780×1890, 5.1–6.8 MB originals, with text in the image |
| A3 | `DRAGONFLY-BALI-BANANA-42-2.jpg` 4833×3222, ~4 MB |
| A4 | Café menu JPGs 0.4–0.7 MB each × 32; Café `2026/02/1.png…7.png` PNGs of 5.6–10 MB exist in the media library (unreferenced on public pages) |
| A5 | Content images sourced from screenshots/WhatsApp (`Screen-Shot-2026-05-23…png` 1.8 MB used as the Power Without Armor poster; `WhatsApp-Image-2026-02-27…` in the sauna gallery, uploaded into a `2019/06` folder) |
| A6 | Generic stock avatar icons for testimonials (`usser-woman.png`, `user-guy.png`) |
| A7 | 160 of 432 media items are not publicly enumerable, so they could not be inventoried |
| A8 | No team or owner photos (the owner is mentioned in a testimonial, never named) |
| A9 | Event posters for 3 events lack alt text |

## 6. Open questions for the client

1. Which phone and email are canonical (F1, F2)? Is `info@` still monitored?
2. Confirm café hours, the fish option and the sauna schedule/prices (F3–F5).
3. Confirm the detox durations and program names (F6, F7). Is Dr Daniela Donoso still the practitioner?
4. Are the 2024 room rates and season dates still current (F8, F9)?
5. Is **SabeeApp** still the booking engine? Should the site show live availability, or keep the enquiry form?
6. Should the newsletter (Mailchimp) remain? Who owns the list?
7. Who receives form submissions? Is there a preferred spam-protection/email provider?
8. Who will update events after launch: developers (static data) or staff (needs a CMS)?
9. Is a blog/journal wanted? (There are currently no posts.)
10. Is there a text or PDF version of the café menu?
11. Is there an SVG or high-resolution logo and brand guideline?
12. Should testimonials be refreshed (e.g. with permission from Google/TripAdvisor reviews), or keep the 10 existing ones?
13. Is a privacy policy available to publish?
14. Which domain form is canonical (`dragonfly-village.com` vs `www.`)? Internal links use both.
15. Which "Power Without Armor" contact channel should "DM" point to (Instagram? WhatsApp?)
