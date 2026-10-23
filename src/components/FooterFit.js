'use client';

import { useEffect } from 'react';

// Publishes the footer's real height (including its top margin) as --footer-h, which
// globals.css uses to size the last section so it and the footer fill the screen.
export default function FooterFit() {
  useEffect(() => {
    const footer = document.querySelector('body > footer');
    if (!footer) return;
    const update = () => {
      const h = footer.getBoundingClientRect().height + parseFloat(getComputedStyle(footer).marginTop || '0');
      document.documentElement.style.setProperty('--footer-h', `${Math.ceil(h)}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(footer);
    return () => ro.disconnect();
  }, []);
  return null;
}
