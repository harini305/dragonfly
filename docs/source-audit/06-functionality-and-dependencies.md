# 06 — Functionality & Technical Dependencies

Verification levels: **Observed** · **Interaction tested** · **Functionality verified** · **Partially verified** · **Unverified**.
No form was submitted and no booking or payment was attempted. This was deliberate, to avoid sending real enquiries to the business.

## 1. Feature inventory

| # | Feature | Where | Level | Destination / dependency | Phase 2 implications |
|---|---|---|---|---|---|
| 1 | Primary navigation (8 links) | All pages | **Functionality verified** (all links 200) | Internal routes | Rebuild. The Café link points to a legacy URL; plan a redirect. |
| 2 | Mobile menu (hamburger → full-height plum panel; includes the contact info blocks) | <992px | **Interaction tested** (opened at 768 and 390; 8 links visible) | Theme `navigation.js` | Rebuild with accessible toggle (aria-expanded, focus trap, Esc). |
| 3 | Header search (icon toggle) + footer search | All pages | **Observed** | WordPress `/?s=` | Probably drop (small static site). Otherwise needs a search index. |
| 4 | Home hero slider (8 slides, vertical dot pager) | Home | **Observed** (renders; autoplay and timing not measured) | slick.js, theme | Replace with a single strong hero or a lightweight, accessible slider. |
| 5 | Image carousels (Swiper / Elementor) | Home, About, Accommodation (8×), Retreats & Events | **Observed** | Elementor Swiper 8.4.5 | Replace with curated galleries; per-room gallery with lightbox. |
| 6 | Lightbox galleries (FooGallery + FooBox) | Sauna, Café (incl. 32 menu pages), Organic garden | **Observed** (thumbnails via ShortPixel CDN; click not tested) | FooGallery, FooBox free, ShortPixel CDN | Rebuild a local lightbox. Serve resized local images, not ShortPixel. |
| 7 | Image hotspot (location map "+") | Home, About | **Observed** | MotoPress Image Hotspot add-on | Replace with a static map illustration + caption or a link to Google Maps. |
| 8 | FAQ accordion (9 items) | About | **Observed** | Elementor accordion | Rebuild as accessible `<details>` or a disclosure component. |
| 9 | Testimonial carousel (8) | About | **Observed** | Elementor testimonial | Rebuild as a static grid or simple slider of the real testimonials. |
| 10 | Timeline (6 entries) | About | **Observed** | Campterra timeline widget | Rebuild as a simple list or timeline. |
| 11 | Detox "SHOW DETAILS" hover reveal | /detox/ | **Observed** (CSS `.hover-details`; hidden until hover) | Custom CSS | Make the link always visible (touch devices cannot hover). |
| 12 | Google Maps embed | Home, Contact | **Functionality verified** (iframe URL loads) | `maps.google.com/maps?...&output=embed` (no API key) | Keep the embed, lazy-load it (click-to-load is optional). |
| 13 | YouTube video | About ("Short video about us"), footer | **Functionality verified** (oEmbed: "Dragonfly Village, Ubud, Bali", Manu Film) | Outbound link to youtube.com | Could become a lite YouTube embed (facade). |
| 14 | Room "Book Now" → booking request form | Accommodation (8 rooms) | **Partially verified**: link works and pre-fills the field via `?your-accomodation=<Room>`; submission not tested | Contact Form 7 (form id 9280, page 9283) | Needs a form backend in Next.js (API route + email service, or a form service). The field names are listed in 03 §10. |
| 15 | Contact form | /contacts/ | **Partially verified** (renders; reCAPTCHA v2 fallback iframe present; Akismet honeypot) | CF7 form 6, reCAPTCHA site key `6Lehe5MUAAAAAOv_On-vbCM7XRK2vv19Rj5lqlGC`, Akismet, Post SMTP | Needs a backend and spam protection. Recipient address unknown. |
| 16 | Detox enquiry form | /detox/full-body-detox/ | **Partially verified** | CF7 form 9847 | Merge into one enquiry form with a "program" field. |
| 17 | Detox "BOOK YOUR SPOT" | 4 detox pages | **Functionality verified** (`mailto:home@…`) | Email client | Keep as mailto/WhatsApp, or route to the enquiry form. |
| 18 | Detox "BOOK YOUR PROGRAM NOW" | 4 detox pages | **Verified broken** (`href="#"`) | — | Point to a real action. |
| 19 | SabeeApp booking engine widget | Accommodation (script `ibe.sabeeapp.com/bewidget.php?id=7533cea6d62f06fbe963ee4693d47af2`); also loaded globally in `<head>` | **Unverified**. The script loads; the widget UI and availability flow were not exercised. | SabeeApp (hotel PMS/IBE) | **Ask the client** whether SabeeApp is still in active use. If yes, embed or link the IBE (deep link or button). If not, remove it. |
| 20 | Newsletter signup | Home | **Unverified** (renders; not submitted) | "Another Mailchimp Widget" (Mailchimp list unknown) | Needs a Mailchimp API key or embed form URL from the client; otherwise drop. |
| 21 | Event "TICKETS" | Dance of the Dragonfly | **Functionality verified** (link 200) | Megatix (megatix.co.id) | Keep the outbound link. |
| 22 | Shaolin Arts retreat info | Event page | **Functionality verified** (link 200) | crockungfu.com | Keep the outbound link. |
| 23 | Event booking by email | 5 event pages | **Functionality verified** (`mailto:`) | Email | Keep. |
| 24 | WordPress comments on events | All 7 event pages | **Observed** (comment form present; 4 existing comments on Dance) | WP comments + Akismet | Do not rebuild (no CMS). Fold the useful Q&A into the copy. |
| 25 | Event feed on Home and Retreats & Events | Shortcode listing of the `cptp-activity` CPT | **Functionality verified** (7 events rendered, ordered newest-modified first) | WordPress CPT | Phase 2 needs a data source: a static JSON/MD file, or a headless CMS if the client must self-edit. Add date-based hiding of past events. |
| 26 | Social links | Footer | **Functionality verified** (URLs well-formed) | Facebook, Instagram, YouTube | Keep. |
| 27 | Analytics | All pages | **Observed** (`gtag` with UA-28615831-6) | Google Analytics (UA, deprecated) | Ask the client for a GA4 ID or another analytics tool; UA is defunct. |
| 28 | Emoji script, jQuery 3.7.1 + migrate, jQuery UI core | All pages | **Observed** | WordPress core | Not needed. |
| 29 | WooCommerce pages / MotoPress Hotel Booking pages | Legacy routes | **Verified non-functional** (raw shortcodes rendered as text) | Plugins inactive | Do not rebuild. Redirect. |
| 30 | Translation | — | None | — | — |
| 31 | Downloadable documents (PDFs/brochures) | — | **None found** on public pages; the only non-image media item is a 2019 `.txt` log file | — | Ask whether a menu PDF or brochure exists. |
| 32 | 404 page | Any unknown URL | **Functionality verified** (HTTP 404, "Oops! That page can't be found.") | Theme | Rebuild a simple branded 404. |

## 2. Third-party domains contacted by the live site

`fonts.googleapis.com` / `fonts.gstatic.com` · `use.fontawesome.com` · `www.googletagmanager.com` · `ibe.sabeeapp.com` · `maps.google.com` · `www.recaptcha.net` / `www.google.com/recaptcha` · `cdn.shortpixel.ai` · `secure.gravatar.com` (comment avatars) · `megatix.co.id`, `crockungfu.com`, `youtube.com`, `facebook.com`, `instagram.com` (outbound links).

## 3. Backend items to resolve before or during Phase 2

1. **Form delivery.** Which inbox receives the contact and booking requests? (CF7 + Post SMTP today.) Choose an implementation, e.g. a Next.js route handler + transactional email, or a hosted form endpoint. Preserve the booking-request fields and the room pre-fill.
2. **Spam protection** to replace reCAPTCHA + Akismet (e.g. honeypot + rate limit, Turnstile, or reCAPTCHA with a new key owned by the client).
3. **SabeeApp:** keep, link or remove (client decision).
4. **Mailchimp:** keep (needs credentials or an embed form) or remove.
5. **Events content ownership:** a static data file edited by developers, or a headless CMS for the client. Events change monthly (most were edited in Oct 2026).
6. **Analytics:** GA4 or an alternative.
7. **Redirect map** for the legacy URLs ([02-page-inventory.md](02-page-inventory.md) §1). Implement via `redirects()` in `next.config` during Phase 2.
8. **Domain/hosting:** the live site is WordPress on Apache. The cut-over plan (DNS, `www` → apex redirect, preserving `/wp-content/uploads/` URLs that may be linked externally) is out of scope here but must be planned.
