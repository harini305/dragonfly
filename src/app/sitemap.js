import { site } from '@/data/site';
import { events } from '@/data/events';
import { programs } from '@/data/detox';

export default function sitemap() {
  const paths = [
    '/', '/accommodations/', '/retreats-events/', '/herbal-steam-sauna/', '/cafe/', '/detox/', '/about/',
    '/contacts/', '/booking-request/', '/terms-conditions/',
    ...programs.map((p) => `/detox/${p.slug}/`),
    ...events.map((e) => `/activity/${e.slug}/`),
  ];
  return paths.map((p) => ({ url: `${site.url}${p}` }));
}
