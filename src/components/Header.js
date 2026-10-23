'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Img from './Img';
import { nav, site } from '@/data/site';
import styles from './Header.module.css';

const isActive = (pathname, href) => (href === '/' ? pathname === '/' : pathname.startsWith(href) || (href === '/retreats-events/' && pathname.startsWith('/activity/')));

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  // Close the menu on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusables = () => [toggleRef.current, ...panel.querySelectorAll('a')];
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      } else if (e.key === 'Tab') {
        const items = focusables();
        const first = items[0];
        const last = items.at(-1);
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    const mq = window.matchMedia('(min-width: 1024px)');
    const onWide = () => mq.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onWide);
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onWide);
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        <Link href="/" className={styles.logo} aria-label="Dragonfly Village, home">
          <Img src="brand/dragonfly-village-logo-black" alt="" sizes="160px" priority />
        </Link>

        <nav className={styles.desktopNav} aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(pathname, item.href) ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.toggleIcon} aria-hidden="true" data-open={open} />
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      <div id="mobile-menu" ref={panelRef} className={styles.panel} data-open={open} hidden={!open}>
        <nav aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(pathname, item.href) ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.panelInfo}>
          <p>
            <a href={site.whatsappHref}>{site.phoneDisplay}</a>
            <br />
            <span>{site.whatsappNote}</span>
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
    </header>
  );
}
