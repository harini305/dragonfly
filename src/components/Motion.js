'use client';

import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PIN_OFFSET = 32;

// Site-wide, restrained motion:
//  [data-reveal]   fades and lifts once as it enters the viewport (below the fold only)
//  [data-parallax] drifts slowly while its container scrolls (wide screens only)
//  [data-pin]      stays pinned while its parent section scrolls past (wide screens only).
//                  Pinning is positional, not animated, so it also runs with reduced motion.
// Content is never hidden by CSS, so it stays visible if scripts fail. Everything runs
// inside one gsap.matchMedia context that is reverted on route change and unmount.
export default function Motion() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        { motionOK: '(prefers-reduced-motion: no-preference)', wide: '(min-width: 900px)' },
        ({ conditions }) => {
          if (conditions.wide) {
            gsap.utils.toArray('main [data-pin]').forEach((el) => {
              const section = el.parentElement;
              // Pin only text that fits on screen and is shorter than the section, so
              // nothing (such as the booking button) is ever held out of view.
              const fits = el.offsetHeight < window.innerHeight - PIN_OFFSET * 2;
              const sideBySide = el.getBoundingClientRect().width < section.clientWidth * 0.75;
              if (!fits || !sideBySide || section.offsetHeight - el.offsetHeight < 120) return;
              ScrollTrigger.create({
                trigger: el,
                start: `top top+=${PIN_OFFSET}`,
                endTrigger: section,
                // Release when the text's bottom meets the bottom of the section's content box.
                end: () => `bottom top+=${el.offsetHeight + PIN_OFFSET + parseFloat(getComputedStyle(section).paddingBottom)}`,
                pin: el,
                pinSpacing: false,
                invalidateOnRefresh: true,
              });
            });
          }

          // Opening an FAQ answer (or any <details>) changes section heights: re-measure pins.
          const onToggle = () => ScrollTrigger.refresh();
          document.addEventListener('toggle', onToggle, true);

          if (!conditions.motionOK) return () => document.removeEventListener('toggle', onToggle, true);

          const fold = window.innerHeight * 0.92;
          gsap.utils.toArray('main [data-reveal]').forEach((el) => {
            if (el.getBoundingClientRect().top < fold) return;
            gsap.from(el, {
              autoAlpha: 0,
              y: 24,
              duration: 0.9,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            });
          });

          if (!conditions.wide) return;
          gsap.utils.toArray('main [data-parallax]').forEach((el) => {
            gsap.fromTo(
              el,
              { yPercent: -6 },
              {
                yPercent: 6,
                ease: 'none',
                scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
              },
            );
          });
          return () => document.removeEventListener('toggle', onToggle, true);
        },
      );
      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
