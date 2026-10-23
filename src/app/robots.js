import { site, indexable } from '@/data/site';

// Search engines are kept out until SITE_INDEXING=true is set for the real domain,
// so a staging copy never competes with the live dragonfly-village.com.
export default function robots() {
  return {
    rules: indexable ? { userAgent: '*', allow: '/' } : { userAgent: '*', disallow: '/' },
    sitemap: indexable ? `${site.url}/sitemap.xml` : undefined,
  };
}
