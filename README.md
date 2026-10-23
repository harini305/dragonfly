# Dragonfly Village website

Next.js (App Router, JavaScript) rebuild of [dragonfly-village.com](https://dragonfly-village.com), an eco retreat of antique teak bungalows in the rice fields of Ubud, Bali.

```bash
npm install
npm run dev      # local development
npm run build    # production build
npm run lint
```

- Content and business facts live in `src/data/`. Items still awaiting confirmation from the owner are listed in `docs/phase-2/OPEN-QUESTIONS.md`.
- Images are pre-sized WebP files in `public/images/`, so `next.config.mjs` sets `images: { unoptimized: true }`. To regenerate them, run `npm run assets:download`, then `npm run assets:optimize`, then `node scripts/prune-unused-images.mjs`.
- Search-engine indexing is off by default. Set the environment variable `SITE_INDEXING=true` only when the site moves to the real domain.
- Phase 1 audit: `docs/source-audit/`. Phase 2 notes: `docs/phase-2/`.
