# 07 — Responsive Observations

**Tested viewports:**
- Desktop 1440×900 (DPR 1)
- Tablet 768×1024 (touch, mobile emulation)
- Mobile 390×844 (touch, iPhone iOS 17 UA)

**Tool:** headless Chrome 155 via puppeteer-core. Each page was auto-scrolled to trigger lazy loading before capture.
**Routes captured (15):** home, accommodations, retreats-events, herbal-steam-sauna, cafe, detox, detox-full-body, about, contacts, booking-request, activity-dance, activity-shaolin-basics, testimonials, terms, 404. Screenshot files and naming are listed in [screenshots/README.md](screenshots/README.md).

## 1. Measured results

| Route | Desktop height | Tablet height | Mobile height | Horizontal overflow |
|---|---|---|---|---|
| Home | 9,811px | 12,154px | **16,280px** | none |
| Accommodation | 9,365 | 12,415 | 15,465 | none |
| Retreats & Events | 5,908 | 7,393 | 9,527 | none |
| Sauna | 4,057 | 3,738 | 3,846 | none |
| Café | 4,695 | 7,172 | 11,283 | none |
| Detox | 3,668 | 4,315 | 3,333 | none |
| Full Body Detox | 4,908 | 6,014 | 7,164 | none |
| About | 8,313 | 9,068 | 12,222 | none |
| Contact | 3,038 | 3,736 | 4,039 | none |
| Booking request | 2,459 | 3,291 | 3,308 | none |
| Dance of the Dragonfly | 5,613 | 6,222 | 7,238 | none |
| Shaolin Basics | 5,647 | 6,431 | 7,451 | none |
| Testimonials | 4,250 | 5,427 | 6,691 | none |
| Terms | 1,721 | 2,581 | 2,654 | none |
| 404 | 1,512 | 2,345 | 2,362 | none |

`scrollWidth` equalled the viewport width at every width tested, so there is **no horizontal scroll** anywhere (verified).

## 2. Breakpoints (verified from CSS)

- Theme: `max-width: 991px` (nav collapse), `min-width: 768px`, `min-width: 992px`, `min-width: 1470px`, `min-width: 601px`.
- Elementor kit: boxed container max-width **1280px** (desktop), 1024px (≤1024), 767px (≤767). The content column is effectively ~1240px wide at 1440 (100px side margins).
- Elementor page-level breakpoints are the defaults: 1024 / 767.

## 3. Behaviour by component

| Component | Desktop (1440) | Tablet (768) | Mobile (390) |
|---|---|---|---|
| Header top | Logo left; 3 contact info blocks right; height 104px | Logo centred; info blocks hidden from the bar | Same as tablet |
| Nav bar | Plum bar, 8 inline links + search icon | Hamburger (left) + search (right) | Same |
| Mobile menu | — | Full-height plum panel, ✕ close, uppercase links, contact blocks below (**interaction tested**) | Same |
| Sticky header | **Not sticky**: after scrolling 1500px the header is off-screen (verified) | not sticky | not sticky |
| Home hero | ~630px tall, centred H2 39px + paragraph; vertical dot pager | H2 wraps to 2 lines | H2 39px wraps to **3 lines**; image crop shifts to sky. The hero fills more than the viewport. |
| Page banners | ~520px photo + overlay + H1 + breadcrumbs | shorter | shorter; breadcrumbs wrap |
| Grids (features, event cards, room cards) | 3 columns (events, room teasers); 2 columns of 4 icon features flanking the logo | 2 columns or stacked | Single column, which is why pages get very long |
| Accommodation room blocks | Carousel left 50% / text right 50% | stacked | stacked; each room ≈1,800px tall |
| Café menu thumbnails (32) | grid of 230px tiles | fewer per row | 1–2 per row; a big contributor to the café's 11k px |
| Footer | 4 columns, 458px plum + 138px charcoal | Single column, plum ≈1,207px + charcoal 221px | ≈1,114px + 249px (very tall) |
| Typography | Body 16/28; H2 31px; hero 39px | **No size change** on tablet/mobile (the hero H2 stays 39px on mobile; verified) | Same: no fluid type scaling |
| Images | `srcset` provided for most WP images; carousels use 768/1024 sizes | — | — |

## 4. Responsive issues to avoid in Phase 2

1. **Excessive mobile page length** (home 16k px, Accommodation 15k px, Café 11k px). Caused by stacking every carousel, gallery and duplicated block.
2. **No fluid type scale.** Headings stay at desktop size on phones. The home hero H2 at 39px takes 3 lines on a 390px screen.
3. **Hover-only controls** (Detox "SHOW DETAILS") are unusable on touch.
4. **Footer stacks into a very tall block** on mobile. The search widget and duplicate nav add height without value.
5. **Header consumes 165px** before content on every viewport (white bar + nav bar), with no sticky or compact state.
6. **Screenshot artefact (not a site defect):** in the full-page captures, the lazy-loaded card images, the "Symbolism" parallax background and the newsletter heading appear as blank areas. Confirm in a real browser; the assets themselves are valid (HTTP 200).

## 5. Not verified

Landscape orientations; widths between 991 and 1024px; very large screens (>1470px rule exists); real iOS Safari or Android rendering; hover and focus states; reduced-motion handling.
