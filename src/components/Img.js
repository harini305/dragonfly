/* eslint-disable @next/next/no-img-element -- images are pre-sized locally (images.unoptimized) */
import manifest from '@/data/image-manifest.json';

// Responsive <img> built from the locally generated WebP widths, so no image
// optimisation service is involved. width/height reserve space and prevent layout shift.
export default function Img({ src, alt, sizes = '100vw', priority = false, className, style, ...rest }) {
  const entry = manifest[src];
  if (!entry) throw new Error(`Unknown image key: ${src}`);
  return (
    <img
      src={entry.src}
      srcSet={entry.srcset.map(([url, w]) => `${url} ${w}w`).join(', ')}
      sizes={sizes}
      width={entry.width}
      height={entry.height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding={priority ? 'sync' : 'async'}
      className={className}
      style={style}
      {...rest}
    />
  );
}

export const imageSrc = (key, minWidth = 1200) => {
  const entry = manifest[key];
  const pick = entry.srcset.find(([, w]) => w >= minWidth) ?? entry.srcset.at(-1);
  return pick[0];
};
