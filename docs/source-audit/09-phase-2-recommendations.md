# 09 — Phase 2 Recommendations & Mandatory Requirements

This document records the requirements and considerations for the implementation phase. **Nothing here has been implemented.** Phase 2 starts only after explicit approval.

## 1. Target stack (as briefed)

Next.js (App Router) · JavaScript · React · GSAP + ScrollTrigger · responsive frontend.

## 2. Proposed information architecture

| Route (proposed) | Source route(s) | Notes |
|---|---|---|
| `/` | `/` | Hero, concept, key features, rooms teaser, upcoming events teaser, facilities (sauna, pool, café), location & arrival, contact CTA |
| `/accommodation` (or keep `/accommodations/`) | `/accommodations/` | 8 rooms with curated galleries, rates table, seasons, Book Now |
| `/retreats-events` | `/retreats-events/`, `/activity/`, `/activity-category/events/`, `/retreats-workshops/` | Host-a-retreat venue info + upcoming events list |
| `/events/[slug]` (or keep `/activity/[slug]/`) | 7 activity pages | Data-driven; auto-hide past dates. **Keeping the `/activity/…` slugs avoids redirects.** |
| `/sauna` (or keep `/herbal-steam-sauna/`) | `/herbal-steam-sauna/`, slide page | |
| `/cafe` | `/dragonfly-village-2/dragonfly-cafe-open-daily/` | Menu viewer + garden |
| `/detox` + `/detox/[slug]` | `/detox/*` | One template, 4 data entries |
| `/about` | `/about/`, `/testimonials/`, `/testimonial/*` | Story, history, video, testimonials, FAQ |
| `/contact` (or keep `/contacts/`) | `/contacts/` | Contact details, form, map, arrival notice |
| `/booking-request` | `/booking-request/` | Keep the query-param pre-fill |
| `/terms` (or keep `/terms-conditions/`) | `/terms-conditions/` | Plus a privacy policy if the client supplies one |
| `not-found` | 404 | |

**Redirects:** every legacy route in [02 §1](02-page-inventory.md) → its nearest new page. Demo/stub routes (team, typography, shop, cart, checkout, my-account, booking-confirmation/*, search-*) → `/` or 410. Keep the slugs unchanged wherever possible to protect SEO.

**Blog:** the original has **no posts**. Do not build a blog or invent articles. If the client later wants one, keep it simple: a listing page that initially shows **no more than 10 images**, unless they request otherwise.

## 3. Content guidance

- Use [content/core-facts.json](content/core-facts.json) and [content/pages/](content/pages/) as the single source. Resolve the [08](08-issues-gaps-questions.md) conflicts before publishing.
- Write each repeated block once (concept, structures, features, sauna, detox shared sections, Shifu Li bio).
- Convert ALL-CAPS paragraphs to sentence case while keeping the meaning.
- Do not invent testimonials, FAQs, prices, claims, staff or blog posts. The demo "team" must not appear.
- Events: store dates as ISO, show upcoming ones first, and hide or archive past ones automatically.
- Replace text-in-image (detox banners, café menu) with real HTML text where the client confirms the wording. Keep the original images as visuals or downloads.

## 4. Assets plan

- Source images from the URLs in [04-assets-manifest.csv](04-assets-manifest.csv) (280 unique, ~95 MB of originals; all HTTP 200). **Download only the curated subset** each page needs. Do not mirror the whole library.
- Store originals once (e.g. `/assets-source/`, kept out of `public/` or git-ignored as agreed). Generate resized WebP/AVIF + JPEG fallbacks at sensible widths (e.g. 640/1024/1600/2000) with a local script (sharp). Target ≤250 KB for hero images and ≤120 KB for gallery images.
- Curate per page:
  - Home: ~8–12 images.
  - Each room: 4–6.
  - About: ~8.
  - Café: 6 + menu.
  - Sauna: 6.
  - Retreats: 6.
- Use the hi-res 1657px wordmark (or an SVG from the client) instead of the 160px header PNG.
- Do not use stock, AI-generated or unrelated imagery while suitable originals exist.
- Write meaningful alt text for every content image.

## 5. Technical considerations

- **Forms:** a route handler (or server action) plus a transactional email provider. Use honeypot/rate-limit or Turnstile. Keep the booking-request fields and the `your-accomodation` pre-fill parameter.
- **Booking engine (SabeeApp):** keep, link or remove per the client's answer. If kept, load it only on the accommodation page, after interaction.
- **Maps:** Google Maps embed, lazy-loaded (or click-to-load).
- **Video:** lite YouTube facade for `BfLM_niQW2Y`.
- **Analytics:** GA4 or the client's preferred tool. Remove UA.
- **SEO:** a unique title and meta description per page; one H1 per page; Open Graph images; JSON-LD `LodgingBusiness` / `Event` for events (facts from the site only); `sitemap.xml`; `robots.txt`; canonical URLs; the redirects above.
- **Accessibility:** AA contrast, focus states, keyboard menus, no hover-only actions, `prefers-reduced-motion` respected by GSAP.
- **GSAP/ScrollTrigger:** use it for purposeful reveals, parallax on one or two hero images, and the torn-edge transitions. Avoid scroll-jacking, and clean up triggers on route change.

## 6. MANDATORY DESIGN RULES FOR PHASE 2

### Typography
- **Exactly two font families across the entire redesigned website.**
- Both must be readable, professional, and not overly fancy.
- One family for headings; one for body text, navigation, buttons, forms, cards, footer and all other UI.
- Use them consistently on every route and in every shared component.
- Create hierarchy with weight, size, line-height and letter-spacing, **not** extra families.
- **No third font** for decorative headings, special sections, the footer, or individual components. The original's stray Arimo, Alegreya Sans and Open Sans must not carry over.
- Use consistent heading and body sizes across equivalent components, with a controlled, responsive (fluid) type scale.
- The final pair is chosen in Phase 2. Options are in [05 §2](05-brand-reference.md).

### Visual design
- A professional, human-designed appearance.
- Intentional image and text alignment; consistent content widths, margins and spacing.
- No unnecessary decorative numbering, eyebrow text, random symbols, floating badges, or ornamental elements.
- Avoid repetitive AI-looking layouts and generic template patterns.
- Use visual effects only when they serve a clear purpose.
- Preserve the recognisable brand: script wordmark, plum `#330026`, terracotta `#E2725B`/`#E57E6B`, warm neutrals, real photography, and (sparingly) the torn-edge motif.

### Content
- Keep pages concise and focused on important information.
- Avoid repeated paragraphs, unnecessary sections and excessive page length (the original home page is 16k px on mobile).
- Preserve meaningful facts and essential information.
- Do not invent claims, testimonials, FAQs, prices or blog posts.

### Footer
- Compact and content-driven: only necessary, verified information (logo, short tagline, phone/WhatsApp, email, address, socials, key links, legal).
- Avoid excessive padding, unnecessary columns (for example, drop the footer search widget), duplicated content and oversized layouts.
- The final content section must be fully visible above the footer, with a natural transition into it.
- Prevent overlap, clipping, excessive blank space, and fixed-footer interference.

### Images & performance
- Prefer the original assets already available.
- Resize and compress images locally; use modern formats (WebP/AVIF) where practical; lazy-load below-the-fold images; use appropriate responsive `sizes`.
- Avoid unnecessary large downloads and duplicate copies.
- **Avoid Vercel Image Optimization quota:** in the Next.js config, merge in the equivalent of

  ```js
  images: { unoptimized: true }
  ```

  **merged into the existing configuration, not replacing unrelated settings.** Responsive presentation must still be achieved with pre-generated sizes, `srcset`/`sizes`, sensible dimensions, compression and lazy loading.
- Do not change project configuration until Phase 2 is approved. (No project config exists yet; the workspace was empty.)

## 7. Suggested Phase 2 order

1. Client answers to the [08 §6](08-issues-gaps-questions.md) questions.
2. Scaffold Next.js and set up the image pipeline (curated downloads → resized local files).
3. Design tokens: the 2 fonts, colours, spacing and type scale.
4. Shared layout: header, mobile menu, footer.
5. Pages, in this order: Home → Accommodation → Booking request → Detox → Retreats & Events / event detail → Sauna → Café → About → Contact → Terms → 404.
6. Forms backend, redirects, SEO, analytics.
7. Responsive QA at 1440 / 768 / 390, accessibility pass, performance pass.
