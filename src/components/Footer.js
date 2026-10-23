import Link from 'next/link';
import Img from './Img';
import TornEdge from './TornEdge';
import { nav, site } from '@/data/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <TornEdge color="var(--plum)" className={styles.edge} />
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.brand}>
          <Img src="brand/dragonfly-village-logo-white" alt="Dragonfly Village" sizes="180px" className={styles.logo} />
          <p>An enchanted retreat paradise, set in the midst of one of the most beautiful rice field walks in the center of Ubud, Bali.</p>
        </div>

        <div>
          <h2 className={styles.title}>Contact</h2>
          <ul className={styles.list}>
            <li>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <span className={styles.note}>{site.whatsappNote}</span>
            </li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>
              <address>{site.address.join(', ')}</address>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.title}>Explore</h2>
          <ul className={`${styles.list} ${styles.links}`}>
            {nav.slice(1).map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
            <li><Link href="/booking-request/">Booking request</Link></li>
            <li><Link href="/terms-conditions/">Terms &amp; conditions</Link></li>
          </ul>
        </div>

        <div>
          <h2 className={styles.title}>Follow</h2>
          <ul className={`${styles.list} ${styles.inline}`}>
            <li><a href={site.social.instagram} rel="noopener">Instagram</a></li>
            <li><a href={site.social.facebook} rel="noopener">Facebook</a></li>
            <li><a href={site.social.youtube} rel="noopener">Video on YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className={`wrap ${styles.base}`}>
        <p>© {new Date().getFullYear()} Dragonfly Village. All rights reserved.</p>
      </div>
    </footer>
  );
}
