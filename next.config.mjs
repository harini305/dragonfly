// Redirect map follows docs/source-audit/02-page-inventory.md §1 and 09-phase-2-recommendations.md §2.
// Original slugs are kept wherever a page is retained, so most live URLs need no redirect.
const legacyToHome = [
  '/dragonfly-village', '/dragonfly-village-2', '/dragonfly-village-2/a-magical-village-for-your-retreat',
  '/dragonfly-village-2/beautiful-location-in-ubud', '/dragonfly-village-2/spend-holidays-with-us',
  '/dragonfly-village-2/explore-enjoy-dragonfly-village', '/news', '/team', '/team/:slug', '/typography',
  '/shop', '/cart', '/checkout', '/my-account', '/my-account/:path*', '/search-availability', '/search-results',
  '/booking-confirmation', '/booking-confirmation/:slug',
];

const redirectMap = [
  ...legacyToHome.map((source) => [source, '/']),
  ['/dragonfly-village-2/dragonfly-cafe-open-daily', '/cafe/'],
  ['/dragonfly-village-2/herbal-steam-sauna-slider', '/herbal-steam-sauna/'],
  ['/dragonfly-village-2/saltwater-pool', '/herbal-steam-sauna/'],
  ['/dragonfly-village-2/workshops-retreats', '/retreats-events/'],
  ['/activity', '/retreats-events/'],
  ['/activity-category/events', '/retreats-events/'],
  ['/retreats-workshops', '/retreats-events/'],
  ['/testimonials', '/about/'],
  ['/testimonial', '/about/'],
  ['/testimonial/:slug', '/about/'],
  ['/program-2', '/detox/'],
  // Old detox "Show details" targets that only worked through WordPress slug guessing.
  ['/gut-parasite-cleanse', '/detox/gut-parasite-cleanse/'],
  ['/program/:slug', '/detox/:slug/'],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  async redirects() {
    return redirectMap.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
