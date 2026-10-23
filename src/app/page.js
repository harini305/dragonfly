import Link from 'next/link';
import Img from '@/components/Img';
import TornEdge from '@/components/TornEdge';
import { EventList, Visit } from '@/components/Blocks';
import { site, motto, story, features } from '@/data/site';
import { rooms, formatRate } from '@/data/rooms';
import { upcomingEvents, baliToday } from '@/data/events';
import { photo } from '@/data/photos';
import { testimonials } from '@/data/voices';
import styles from './home.module.css';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Dragonfly Village – Eco retreat village in the rice fields of Ubud, Bali' },
  description:
    'Antique Javanese teak bungalows in the rice fields of Ubud, Bali, with a herbal steam sauna, saltwater pool, vegetarian café, detox programs and retreat spaces.',
  alternates: { canonical: '/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: site.name,
  url: site.url,
  telephone: site.phoneDisplay,
  email: site.email,
  image: `${site.url}/images/place/bali-2019-sdragonfly-drone-118-pano-1200.webp`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jalan Raya Ubud, Subak Sok Wayah, Abangan',
    addressLocality: 'Ubud',
    addressRegion: 'Bali',
    postalCode: '80571',
    addressCountry: 'ID',
  },
  checkinTime: '14:00',
  checkoutTime: '11:00',
  sameAs: [site.social.facebook, site.social.instagram],
};

const facilities = [
  {
    title: 'Herbal steam sauna',
    href: '/herbal-steam-sauna/',
    link: 'Sauna sessions and prices',
    image: photo.saunaHut,
    text: 'Dragonfly Herbal Steam Sauna uses natural herbs, with a portion of yummy natural scrub. Open to the public on Monday (silent), Wednesday and Saturday evenings, and free for our in-house guests.',
  },
  {
    title: 'Dragonfly Café',
    href: '/cafe/',
    link: 'About the café',
    image: photo.cafeHero,
    text: 'Open daily for breakfast, lunch and dinner. A vegetarian and vegan kitchen, with GF and vegan options readily available and our own coconut oil for cooking.',
  },
];

const smaller = [
  { title: 'Saltwater pool', image: photo.poolDay, text: 'Our 12m length pool uses a salt water system.', href: '/herbal-steam-sauna/#pool', link: 'Sauna and pool' },
  { title: 'Retreat spaces', image: photo.shalaUp, text: 'Two workshop spaces of 90–100m² each, upstairs and downstairs in the sacred Hexagon.', href: '/retreats-events/', link: 'Host a retreat' },
  { title: 'TCM & detox programs', image: photo.detoxHerbs, text: 'Detox and healing programs based on Traditional Chinese Medicine, with a treatment plan tailored to you.', href: '/detox/', link: 'Detox programs' },
];

export default function HomePage() {
  const today = baliToday();
  const events = upcomingEvents(today).slice(0, 4);
  const quote = testimonials.find((t) => t.name === 'Rae De Rusett');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Img src={photo.heroPano.key} alt={photo.heroPano.alt} sizes="100vw" priority data-parallax />
        </div>
        <div className={`wrap ${styles.heroText}`}>
          <h1>A magical village for your retreat</h1>
          <p>{story.intro}</p>
          <div className="actions">
            <Link className="btn btn-coral" href="/accommodations/">See the bungalows</Link>
            <Link className="btn btn-light" href="/retreats-events/">Retreats &amp; events</Link>
          </div>
        </div>
        <TornEdge className={styles.heroEdge} />
      </section>

      <section className="section" aria-labelledby="concept-heading">
        <div className={`wrap ${styles.concept}`}>
          <div className={styles.conceptText} data-reveal>
            <h2 id="concept-heading" className="visually-hidden">Our concept</h2>
            <blockquote className={styles.motto}>
              <p>“{motto.text}”</p>
              <footer>— {motto.by}</footer>
            </blockquote>
            <p>{story.concept}</p>
            <p>{story.structures}</p>
            <Link className="text-link" href="/about/">More about us</Link>
          </div>
          <div className={styles.conceptMedia} data-reveal>
            <div className={`photo ${styles.conceptMain}`}>
              <Img src={photo.aerial.key} alt={photo.aerial.alt} sizes="(min-width: 900px) 40vw, 100vw" />
            </div>
            <div className={`photo ${styles.conceptInset}`}>
              <Img src={photo.bungalowsFlowers.key} alt={photo.bungalowsFlowers.alt} sizes="(min-width: 900px) 22vw, 60vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="stay-heading">
        <div className="wrap">
          <div className={styles.stayHead} data-reveal>
            <div>
              <h2 id="stay-heading">Single, double, triple and quadruple bungalows</h2>
              <p className="prose">
                Century-old antique bungalows, original wooden houses brought over from remote villages in Java, with balconies facing the rice fields and a private garden. Ceiling fans, no AC, and a semi-open mud-wall bathroom with hot shower.
              </p>
            </div>
            <div className={styles.rates}>
              <h3>Retreat and casual rates</h3>
              <p>
                Dragonfly Village has been specially created for hosting retreats. Please <a href={`mailto:${site.retreatEmail}?subject=Retreat%20rates`}>email us</a> for retreat rates and details. Whenever we have availability not used by retreat groups, our bungalows are open for casual stay at last minute discounted rate.
              </p>
            </div>
          </div>

          <ul className={styles.rooms}>
            {rooms.map((room) => (
              <li key={room.slug} data-reveal>
                <Link href={`/accommodations/#${room.slug}`} className={styles.room}>
                  <span className={`photo ${styles.roomPhoto}`}>
                    <Img src={room.images[0].key} alt="" sizes="(min-width: 1000px) 140px, 30vw" />
                  </span>
                  <span className={styles.roomText}>
                    <span className={styles.roomName}>{room.name}</span>
                    <span className={styles.roomType}>{room.type}</span>
                    <span className={styles.roomRate}>{formatRate(room.normal)} normal season</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className={styles.stayMore}>
            <Link className="btn" href="/accommodations/">Rooms, rates and seasons</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="village-heading">
        <div className="wrap">
          <div className={styles.villageHead} data-reveal>
            <h2 id="village-heading">Around the village</h2>
            <ul className={styles.features} aria-label="Why choose Dragonfly Village">
              {features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>

          {facilities.map((f, i) => (
            <article key={f.title} className={`${styles.facility} ${i % 2 ? styles.facilityFlip : ''}`} data-reveal>
              <div className={`photo ${styles.facilityPhoto}`}>
                <Img src={f.image.key} alt={f.image.alt} sizes="(min-width: 900px) 58vw, 100vw" />
              </div>
              <div className={styles.facilityText}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <Link className="text-link" href={f.href}>{f.link}</Link>
              </div>
            </article>
          ))}

          <div className={styles.smaller}>
            {smaller.map((f) => (
              <article key={f.title} data-reveal>
                <div className="photo ratio-3-2">
                  <Img src={f.image.key} alt={f.image.alt} sizes="(min-width: 900px) 30vw, 100vw" />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <Link className="text-link" href={f.href}>{f.link}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.symbolism} aria-labelledby="symbolism-heading">
        <div className={styles.symbolismMedia}>
          <Img src={photo.dusk.key} alt="" sizes="100vw" data-parallax />
        </div>
        <div className={`wrap ${styles.symbolismText}`} data-reveal>
          <h2 id="symbolism-heading">Why the dragonfly</h2>
          <p>{story.symbolism}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="events-heading">
        <div className="wrap">
          <div className={styles.eventsHead}>
            <h2 id="events-heading">Retreats &amp; events</h2>
            <Link className="text-link" href="/retreats-events/">All events and hosting a retreat</Link>
          </div>
          <EventList items={events} today={today} />
        </div>
      </section>

      <section className="section-tight" aria-label="Guest reflection">
        <figure className={`wrap wrap-narrow ${styles.quote}`} data-reveal>
          <blockquote><p>“{quote.text}”</p></blockquote>
          <figcaption>
            {quote.name} · <Link href="/about/#reflections">More reflections from guests</Link>
          </figcaption>
        </figure>
      </section>

      <Visit />
    </>
  );
}
