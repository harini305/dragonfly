# 05 — Brand Reference

Values are **Verified** when they were read from CSS source or browser computed styles ([data/computed-style-probe.json](data/computed-style-probe.json)). Values are **Estimated** when they were judged by eye from screenshots.

## 1. Logo & marks

| Asset | File | Size | Notes |
|---|---|---|---|
| Primary wordmark, black | `wp-content/uploads/2019/02/Dragonfly_Village_Logo-Black.png` | 1657×721 PNG | Hand-drawn script "Dragonfly / Village" with a dragonfly whose body forms the final stroke. Monochrome, transparent. Used large in the "Why choose" section. |
| Wordmark, white | `…/2019/02/Dragonfly_Village_Logo-White.png` | 1657×721 PNG | Footer. |
| Header logo, black | `…/2019/02/dragonfly-logo-160x54-black.png` | **160×54 PNG** | Too small for retina. Phase 2 should use the 1657px version, or an SVG trace if the client provides one. |
| Favicon | `…/2020/04/cropped-Dragonfly_Village_Favicon-1-{32,180,192}.png` | 32/180/192 | Black mark. |
| "Round" image | `…/2024/11/DRAGONFLY-BALI-ROUND-01.png` | 427×427 | A circular-cropped **photo** (not a logo). It is the home og:image. |
| Small logo inside detox banners | baked into the PNG banners | — | Dark-green badge version. Shows a later sub-brand treatment. |

**No vector (SVG) logo was found.** Ask the client for source artwork.

**Logo placement:** top-left in the white header on desktop; centred on mobile; white version at the top-left of the footer.

## 2. Typography (original site)

| Role | Family | Weight / style | Size / line-height | Other | Status |
|---|---|---|---|---|---|
| Global "primary/secondary/accent" (Elementor kit) | **Montserrat** | 700 | — | — | Verified (kit 8854) |
| Global "text" (Elementor kit) | **Source Sans Pro** | 400 | — | — | Verified |
| Body | Source Sans Pro | 400 | 16px / 28px (1.75) | colour `#66676D` | Verified (computed) |
| H1 (theme) | Montserrat | 700 | 39px / 1.4 | `#333` | Verified (theme CSS) |
| H1 in page banner | Montserrat | 700 | ≈42–45px | white | Estimated |
| H2 (theme) | Montserrat | 700 | 31px | `#333`; often uppercase via Elementor | Verified |
| Home hero H2 | Montserrat | 700 | 39px / 54.6px | white, centred | Verified |
| H3 / H4 / H5 / H6 (theme) | Montserrat | 700 | 25 / 20 / 16 / 13px | `#333` | Verified |
| About H4 ("THIS IS OUR MOTTO…") | Montserrat | 700 | 18px / 19.8px, letter-spacing 0.54px, uppercase | `#363636` | Verified |
| Nav links | Montserrat | 700, uppercase | 12px / 21px | `#E7E7E7`; active `#E57E6B` | Verified |
| Buttons | Montserrat | 700, uppercase | 14–15px, padding ≈17px 40px (theme) | dark text `#333` (theme buttons) or white (Elementor buttons) on `#E57E6B`; radius 0 | Verified |
| Footer widget title | Montserrat | 700 | 16px / 22.4px | white, with a short coral underline | Verified |
| Footer text | Source Sans Pro | 400 | 14px / 24.5px | `#9B9CA4` | Verified |
| Breadcrumbs | Source Sans Pro | 400, lowercase | 14px | `#E9E9E9`; link coral | Verified |
| Pull quote (Accommodation) | Source Sans Pro | italic | ≈20px | grey | Estimated |
| Home hero feature labels | **Arimo** | bold | 19px / 1.2, letter-spacing 1.5px | white | Verified (post-16 CSS); stray |
| About testimonial text | **Alegreya Sans** | 400 | 15px / 1.3 | — | Verified (post-181 CSS); stray |
| Misc. widgets | **Open Sans** (Elementor default), Arial | — | — | — | Verified (computed font census); stray |
| Icons | Font Awesome 5 (two copies loaded: `use.fontawesome.com` 5.2.0 and Elementor's 5.15.3) | — | — | — | Verified |

**Google Fonts requests:** Montserrat (100–900 + italics, loaded **twice**), Source Sans Pro (100–900), Arimo (100–900). **No local font files** exist in the workspace.

Note: *Source Sans Pro* has been renamed **Source Sans 3** on Google Fonts. Phase 2 should use the current family name if it chooses this font.

**Original typography: 5 text families in use** (Montserrat, Source Sans Pro, Arimo, Alegreya Sans, Open Sans). The dominant system is clearly **Montserrat headings + Source Sans body**. The others are stray, per-widget choices.

### Phase 2 rule (recorded, not decided here)
The redesigned site must use **exactly two font families**: one for headings and one for body/UI (navigation, buttons, forms, cards, footer). No third family for any section. The final choice is deferred to Phase 2. Options to evaluate:

| Option | Headings | Body/UI | Rationale |
|---|---|---|---|
| A. Continuity | Montserrat | Source Sans 3 | Exactly the original dominant pairing. Instantly recognisable, but generic. |
| B. Warmer heading | A restrained serif (e.g. Fraunces at low optical size, Cormorant Garamond, or Lora) | Source Sans 3 | Keeps the body continuity and adds a natural, crafted tone that matches the hand-drawn wordmark. |
| C. Humanist sans pair | e.g. Manrope / Figtree | Source Sans 3 or Inter | Modern and clean. Lower brand continuity. |

The hand-drawn logo supplies the "special" character, so neither font should be decorative or script.

## 3. Colour

### 3.1 Verified brand colours (live overrides via Customizer + Elementor page CSS)

| Token (suggested) | HEX | Where used (verified) |
|---|---|---|
| Plum (primary dark) | **#330026** | Header nav bar, footer widgets background, hero band, accommodation H2s (`rgb(51,0,38)`) |
| Terracotta (accent, links) | **#E2725B** | Links (`a`), link hover, icon circles, button hover/active, widget title underline, footer menu links, hotspot hover |
| Coral (buttons, active nav) | **#E57E6B** | Button background, active/hover nav link, Elementor buttons |
| Charcoal | **#333333** | Headings, bottom footer bar, theme button text |
| Body grey | **#66676D** | Body text |
| Muted grey | **#9B9CA4** | Footer text, secondary |
| Light grey | **#E9E9E9** / **#E7E7E7** | Borders, breadcrumbs, nav text |
| Off-white | **#F3F3F3** | Blockquote and "Why choose" section background |
| White | **#FFFFFF** | Page background, header top |
| Black | **#000000** | Some Elementor headings (room-card H5s) and the logo |
| Red accent (single use) | **#D6371B** | Retreats & Events page (post-809 CSS), probably the "non-refundable" emphasis |

### 3.2 Template defaults that are **not** the live brand
`#FFD900` (theme yellow buttons), `#F6AF1F` (Elementor kit "accent" orange), `#ED8A0A` (theme link orange). These exist in the theme and kit CSS but are **overridden** by the Customizer colours above. Do not treat them as brand colours.

### 3.3 Third-party / incidental
Social icon brand colours: Facebook blue ≈`#3B5998`, YouTube red ≈`#E52D27`, Instagram black (estimated). Google Maps and reCAPTCHA widget colours.

### 3.4 Photography palette (estimated)
Lush tropical greens, warm golden-hour oranges, teak browns, and terracotta roof tiles. The terracotta accent harmonises with the roof tiles and teak; the plum gives dusk contrast.

## 4. Other visual identity

| Element | Observation |
|---|---|
| Section dividers | Signature **torn-paper / dry-brush edges** (white or plum) between hero/banners and content, and at the footer top. A strong recognisable motif; could be kept as a subtle SVG mask. |
| Thin rules | Dotted or 1px dark horizontal rules above and below section headings (Home, Accommodation). |
| Shape language | Square corners (border-radius 0) on buttons, cards and images. Circular icon badges in coral. One circular photo crop with a thin white ring. |
| Shadows | Soft, light shadow on event cards; none elsewhere. |
| Icons | Font Awesome solid glyphs (leaf, person, fire, warehouse, coffee, wifi, flag, tree) in white inside coral circles. Generic. |
| Image treatment | Full-bleed photo banners with a dark overlay on inner pages; a blurred background photo behind the rates block; parallax backgrounds (Elementor motion effects); 2:1 landscape crops (1500×750) for most photos; square posters for events. |
| Decorative | Hand-drawn location map illustration with a "+" hotspot; vertical square dots on the hero slider. |
| Tone | Earthy, spiritual, nature-first, informal ("probably more!", "yummy natural scrub"). Lots of ellipses and ALL-CAPS emphasis in the copy. |

## 5. What to keep vs. leave behind

- **Keep:** the script wordmark; the plum + terracotta + warm-neutral palette; real photography; the torn-edge motif (used sparingly); the square, unfussy shapes; the earthy tone.
- **Leave behind:** the stray fonts; ALL-CAPS paragraphs; coral icon-circle grids around the logo; 27- and 45-image carousels; template yellow/orange; images with baked-in text; double Font Awesome loads.
