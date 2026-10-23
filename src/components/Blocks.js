import Link from 'next/link';
import Img from './Img';
import { MapEmbed } from './Embeds';
import { site } from '@/data/site';
import { faqs } from '@/data/voices';
import { earlyBirdActive } from '@/data/events';
import styles from './Blocks.module.css';

// Native <details> disclosures: work with mouse, touch and keyboard without scripts.
export function Faq({ items = faqs }) {
  return (
    <div className={styles.faq}>
      {items.map((item) => (
        <details key={item.q} className={styles.faqItem}>
          <summary>
            <span>{item.q}</span>
            <span className={styles.faqIcon} aria-hidden="true" />
          </summary>
          <div className={styles.faqBody}>
            {item.a.map((p) => <p key={p}>{p}</p>)}
            {item.link && <p><Link className="text-link" href={item.link.href}>{item.link.label}</Link></p>}
          </div>
        </details>
      ))}
    </div>
  );
}

export function ContactDetails({ compact = false }) {
  return (
    <dl className={`${styles.contact} ${compact ? styles.contactCompact : ''}`}>
      <div>
        <dt>Phone and WhatsApp</dt>
        <dd>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <br />
          <span className="muted small">{site.whatsappNote}</span>
        </dd>
      </div>
      <div>
        <dt>Email</dt>
        <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
      </div>
      <div>
        <dt>Address</dt>
        <dd><address>{site.address.map((line) => <span key={line}>{line}<br /></span>)}</address></dd>
      </div>
    </dl>
  );
}

export function ArrivalNotice() {
  return (
    <div className={styles.arrival}>
      <h3>Arriving with luggage</h3>
      <p>{site.accessNotice}</p>
    </div>
  );
}

// Location section shared by Home and About: address, arrival notice, map.
export function Visit({ headingLevel = 2 }) {
  const H = `h${headingLevel}`;
  return (
    <section className="section section-paper" aria-labelledby="visit-heading">
      <div className={`wrap split split-wide-right ${styles.visitGrid}`}>
        <div data-reveal>
          <H id="visit-heading">We are waiting for you</H>
          <p className="prose">
            Only footsteps away from center Ubud, but tucked away from its hassles and bustles. Check-in time is {site.checkIn} and check-out time is {site.checkOut}.
          </p>
          <ContactDetails />
          <ArrivalNotice />
        </div>
        <div data-reveal>
          <MapEmbed fill />
        </div>
      </div>
    </section>
  );
}

const formatDay = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' });

export function EventDate({ event }) {
  if (event.recurring) {
    return (
      <span className={styles.date}>
        <span className={styles.dateMain}>Wed</span>
        <span className={styles.dateSub}>weekly</span>
      </span>
    );
  }
  const [y] = event.start.split('-');
  return (
    <span className={styles.date}>
      <span className={styles.dateMain}>{formatDay(event.start)}</span>
      <span className={styles.dateSub}>{y}</span>
    </span>
  );
}

export function EventList({ items, today, withImages = true, headingLevel = 3 }) {
  const H = `h${headingLevel}`;
  return (
    <ol className={styles.events}>
      {items.map((event) => (
        <li key={event.slug} className={styles.event} data-reveal>
          <EventDate event={event} />
          <div className={styles.eventText}>
            <H className={styles.eventTitle}>
              <Link href={`/activity/${event.slug}/`}>{event.title}</Link>
            </H>
            <p className={styles.eventWhen}>{event.when}</p>
            <p className={styles.eventSummary}>{event.summary}</p>
            {earlyBirdActive(event, today) && event.earlyBird.price && (
              <p className={styles.eventOffer}>Early bird {event.earlyBird.price} until {event.earlyBird.untilLabel}</p>
            )}
          </div>
          {withImages && (
            <Link href={`/activity/${event.slug}/`} className={styles.eventPoster} tabIndex={-1} aria-hidden="true">
              <Img src={event.image} alt="" sizes="(min-width: 900px) 180px, 30vw" />
            </Link>
          )}
        </li>
      ))}
    </ol>
  );
}
