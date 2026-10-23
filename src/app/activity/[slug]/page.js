import Link from 'next/link';
import { notFound } from 'next/navigation';
import Img from '@/components/Img';
import { events, getEvent, isPast, earlyBirdActive, baliToday } from '@/data/events';
import { site } from '@/data/site';
import styles from './event.module.css';

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return {};
  return {
    title: { absolute: `${event.metaTitle} – Dragonfly Village` },
    description: event.metaDescription,
    alternates: { canonical: `/activity/${event.slug}/` },
    openGraph: { images: [`/images/${event.image}-800.webp`] },
  };
}

function Booking({ event, past }) {
  if (past) return null;
  const b = event.booking;
  if (b.kind === 'tickets' || b.kind === 'external') {
    return (
      <>
        <a className="btn btn-coral" href={b.href} target="_blank" rel="noopener">
          {b.label}<span className="visually-hidden"> (opens in a new tab)</span>
        </a>
        {b.note && <p className={styles.bookNote}>{b.note}</p>}
      </>
    );
  }
  if (b.kind === 'email') {
    return (
      <>
        <a className="btn btn-coral" href={`mailto:${b.email}?subject=${encodeURIComponent(`Booking: ${event.shortTitle ?? event.title}`)}`}>Book by email</a>
        <p className={styles.bookNote}>Booking: <a href={`mailto:${b.email}`}>{b.email}</a></p>
      </>
    );
  }
  return (
    <>
      <Link className="btn btn-coral" href="/contacts/">{b.label}</Link>
      <p className={styles.bookNote}>
        Email <a href={`mailto:${site.email}`}>{site.email}</a> or WhatsApp <a href={site.whatsappHref}>{site.phoneDisplay}</a>.
      </p>
    </>
  );
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  const today = baliToday();
  const past = isPast(event, today);
  const offer = earlyBirdActive(event, today);
  const index = events.indexOf(event);
  const prev = events[index - 1];
  const next = events[index + 1];

  const jsonLd = event.recurring
    ? null
    : {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: event.title,
        startDate: event.start,
        endDate: event.end,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        image: `${site.url}/images/${event.image}-800.webp`,
        description: event.metaDescription,
        location: {
          '@type': 'Place',
          name: site.name,
          address: { '@type': 'PostalAddress', streetAddress: 'Jalan Raya Ubud, Subak Sok Wayah, Abangan', addressLocality: 'Ubud', addressRegion: 'Bali', postalCode: '80571', addressCountry: 'ID' },
        },
      };

  return (
    <article className={styles.event}>
      {jsonLd && !past && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}

      <div className={`wrap ${styles.top}`}>
        <p className={styles.crumb}><Link href="/retreats-events/">Retreats &amp; events</Link></p>
        <div className={styles.head}>
          <div className={styles.headText}>
            <h1>{event.title}</h1>
            <p className={styles.when}>{event.when}</p>
            {past && (
              <p className="note" role="status">This event took place on {event.when}. It is kept here for reference; see <Link href="/retreats-events/">upcoming events</Link>.</p>
            )}
            <p className="lead">{event.summary}</p>
          </div>
          <div className={`photo ratio-1-1 ${styles.poster}`}>
            <Img src={event.image} alt={event.imageAlt} sizes="(min-width: 900px) 420px, 100vw" priority />
          </div>
        </div>
      </div>

      <div className={`wrap ${styles.body}`}>
        <div className={`prose ${styles.main}`}>
          {event.body.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
          {event.bodyList && <ul>{event.bodyList.map((li) => <li key={li}>{li}</li>)}</ul>}
          {event.bodyAfter?.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}

          {event.forYou && (
            <>
              <h2 className={styles.h2}>{event.forYouTitle}</h2>
              <ul>{event.forYou.map((li) => <li key={li}>{li}</li>)}</ul>
            </>
          )}

          {event.after && (
            <>
              <h2 className={styles.h2}>{event.afterTitle}</h2>
              <ul>{event.after.map((li) => <li key={li}>{li}</li>)}</ul>
            </>
          )}

          {event.closing?.map((p) => <p key={p} className={styles.closing}>{p}</p>)}

          {event.teacher && (
            <section className={styles.teacher} aria-labelledby="teacher-heading">
              <h2 id="teacher-heading" className={styles.h2}>About {event.teacher.name}</h2>
              {event.teacher.bio.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
            </section>
          )}

          {event.schedule && (
            <section aria-labelledby="schedule-heading">
              <h2 id="schedule-heading" className={styles.h2}>Daily schedule</h2>
              {event.schedule.map((d) => (
                <div key={d.day} className={styles.day}>
                  <h3>{d.day}</h3>
                  <ul className="list-clean">{d.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </div>
              ))}
              <p className="small muted">{event.scheduleNote}</p>
            </section>
          )}
        </div>

        <aside className={styles.aside} aria-label="Dates, price and booking">
          <dl className={styles.facts}>
            <div><dt>When</dt><dd>{event.when}</dd></div>
            {event.details?.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            {!past && offer && event.earlyBird.price && (
              <div><dt>Early bird</dt><dd>{event.earlyBird.price} (until {event.earlyBird.untilLabel})</dd></div>
            )}
            {!past && offer && event.earlyBird.text && (
              <div><dt>Early bird</dt><dd>{event.earlyBird.text}</dd></div>
            )}
            {event.price && <div><dt>{event.earlyBird?.price ? 'Normal price' : 'Price'}</dt><dd>{event.price}</dd></div>}
            {event.priceNote && <div><dt>Price</dt><dd>{event.priceNote}</dd></div>}
          </dl>
          {event.includes && (
            <>
              <h2 className={styles.asideTitle}>{event.includesTitle ?? 'Includes'}</h2>
              <ul className={styles.includes}>{event.includes.map((li) => <li key={li}>{li}</li>)}</ul>
            </>
          )}
          <div className={styles.book}>
            <Booking event={event} past={past} />
          </div>
        </aside>
      </div>

      <nav className={`wrap ${styles.pager}`} aria-label="More events">
        {prev ? <Link href={`/activity/${prev.slug}/`}><span>Previous</span>{prev.title}</Link> : <span />}
        {next ? <Link href={`/activity/${next.slug}/`} className={styles.next}><span>Next</span>{next.title}</Link> : <span />}
      </nav>
    </article>
  );
}
