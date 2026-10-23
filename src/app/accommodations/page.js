import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import Gallery from '@/components/Gallery';
import { site, story, terms } from '@/data/site';
import { rooms, seasons, roomAmenities, accommodationCopy, formatRate } from '@/data/rooms';
import { photo } from '@/data/photos';
import styles from './accommodations.module.css';

export const metadata = {
  title: 'Ways to stay: antique teak bungalows',
  description:
    'Eight century-old Javanese teak bungalows facing the rice fields in Ubud: double, twin, triple, family and quadruple rooms with normal and peak-season rates.',
  alternates: { canonical: '/accommodations/' },
};

const bookingHref = (room) => `/booking-request/?your-accomodation=${encodeURIComponent(room.booking)}`;

export default function AccommodationsPage() {
  return (
    <>
      <PageIntro
        title="Ways to stay"
        lead="Century-old antique bungalows, original wooden houses brought over from remote villages in Java, in a garden among the rice fields."
        image={photo.bungalowsGarden.key}
        imageAlt={photo.bungalowsGarden.alt}
      />

      <section className="section-tight">
        <div className="wrap split split-wide-left">
          <div className="prose">
            <h2>Single, double, triple and quadruple bungalows</h2>
            {accommodationCopy.bungalows.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            <blockquote className={styles.nature}>
              <p>{story.nature}</p>
            </blockquote>
          </div>
          <aside className={styles.ratesBox} aria-labelledby="rates-heading">
            <h2 id="rates-heading" className={styles.asideTitle}>Retreat and casual rates</h2>
            <p>{accommodationCopy.rates}</p>
            <p>
              <a className="text-link" href={`mailto:${site.retreatEmail}?subject=Retreat%20rates`}>Email us for retreat rates</a>
            </p>
            <h3 className={styles.asideSub}>Booking directly</h3>
            <p>
              Message us on <a href={site.whatsappHref}>{site.phoneDisplay}</a> for our most current discounted rates for direct booking. Free organic scrub or ice-cream when you book directly with us at{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
            <h3 className={styles.asideSub}>In every room</h3>
            <p className="small">{roomAmenities.join(' · ')} · High speed fiber optic WiFi</p>
          </aside>
        </div>
      </section>

      <section className="section-tight section-paper" aria-labelledby="rate-table-heading">
        <div className="wrap">
          <h2 id="rate-table-heading">Published rates for casual stay</h2>
          <p className="muted">Per bungalow per night, in Indonesian rupiah (Rp1,180k = Rp 1,180,000).</p>
          <div className={styles.tableWrap} role="region" aria-labelledby="rate-table-heading" tabIndex={0}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Bungalow</th>
                  <th scope="col">Room type</th>
                  <th scope="col">Normal season</th>
                  <th scope="col">Peak season</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room.slug}>
                    <th scope="row"><a href={`#${room.slug}`}>{room.name}</a></th>
                    <td>{room.type}</td>
                    <td>{formatRate(room.normal)}</td>
                    <td>
                      {formatRate(room.peak)}
                      {room.peakNote && <sup><a href="#papaya-note" aria-label="Note about Papaya peak season dates">*</a></sup>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <dl className={`facts ${styles.seasons}`}>
            <dt>Normal season</dt>
            <dd>{seasons.normal}</dd>
            <dt>Peak season</dt>
            <dd>{seasons.peak}</dd>
          </dl>
          <p id="papaya-note" className="note">* {rooms.find((r) => r.peakNote).peakNote}</p>
          <p className="small muted">
            Casual stay bookings are confirmed with a deposit; {terms.casual[1].toLowerCase()} See our <Link href="/terms-conditions/">terms &amp; conditions</Link>.
          </p>
        </div>
      </section>

      <nav className={`wrap ${styles.roomNav}`} aria-label="Bungalows">
        <ul>
          {rooms.map((room) => <li key={room.slug}><a href={`#${room.slug}`}>{room.name}</a></li>)}
        </ul>
      </nav>

      <div className="wrap">
        {rooms.map((room, i) => (
          <article key={room.slug} id={room.slug} className={`${styles.room} ${i % 2 ? styles.roomFlip : ''}`} aria-labelledby={`${room.slug}-title`}>
            <div className={styles.roomMedia} data-reveal>
              <Gallery images={room.images} label={`${room.name} photos`} layout="room" visible={5} />
            </div>
            <div className={styles.roomBody} data-pin>
              <p className={styles.roomType}>{room.type}</p>
              <h2 id={`${room.slug}-title`}>{room.name}</h2>
              <p>{room.description}</p>
              <dl className={styles.roomRates}>
                <div>
                  <dt>Normal season</dt>
                  <dd>{formatRate(room.normal)}</dd>
                </div>
                <div>
                  <dt>Peak season</dt>
                  <dd>{formatRate(room.peak)}</dd>
                </div>
              </dl>
              {room.peakNote && <p className="note">{room.peakNote}</p>}
              {room.extras && <p className="small"><strong>Also in this room:</strong> {room.extras.join(', ')}</p>}
              {room.extraBeds && <p className="small">{room.extraBeds}</p>}
              <div className={styles.roomActions}>
                <Link className="btn" href={bookingHref(room)}>Request {room.name}</Link>
                <a className="text-link" href={`mailto:${site.retreatEmail}?subject=${encodeURIComponent(`Retreat rate: ${room.name}`)}`}>For retreat rate, email us</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
