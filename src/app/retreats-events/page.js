import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import Gallery from '@/components/Gallery';
import Img from '@/components/Img';
import { EventList } from '@/components/Blocks';
import { site, retreatVenue, story } from '@/data/site';
import { upcomingEvents, baliToday } from '@/data/events';
import { photo } from '@/data/photos';
import styles from './retreats.module.css';

export const revalidate = 3600;

export const metadata = {
  title: 'Retreats & events',
  description:
    'Host your retreat in Ubud: two 90–100m² workshop spaces over the rice fields. Plus upcoming retreats, courses and the weekly Dance of the Dragonfly.',
  alternates: { canonical: '/retreats-events/' },
};

const shalaPhotos = [photo.shalaCircle, photo.shalaYoga, photo.shalaBuilding, photo.shalaMats, photo.shalaEdge, photo.shalaLower, photo.shalaStairs];

export default function RetreatsPage() {
  const today = baliToday();
  const events = upcomingEvents(today);

  return (
    <>
      <PageIntro
        title="Retreats & events"
        lead={story.workshops}
        image={photo.shalaUp.key}
        imageAlt={photo.shalaUp.alt}
      />

      <section className="section" aria-labelledby="host-heading">
        <div className="wrap">
          <div className={styles.host}>
            <div className="prose" data-reveal>
              <h2 id="host-heading">Host your retreat</h2>
              <p className="lead">{retreatVenue.licence}</p>
              <p>{retreatVenue.spaces}</p>
              <dl className={styles.spaces}>
                <div>
                  <dt>Upstairs shala</dt>
                  <dd>{retreatVenue.upstairs}</dd>
                </div>
                <div>
                  <dt>Downstairs shala</dt>
                  <dd>{retreatVenue.downstairs}</dd>
                </div>
              </dl>
            </div>
            <aside className={styles.enquire} data-reveal>
              <h3>Retreat rates</h3>
              <p>{retreatVenue.rates}</p>
              <a className="btn" href={`mailto:${site.retreatEmail}?subject=Retreat%20enquiry`}>Email {site.retreatEmail}</a>
              <p className={styles.deposits}>{retreatVenue.deposits}</p>
              <p className="small">
                Groups stay in our <Link href="/accommodations/">antique teak bungalows</Link>, and the <Link href="/cafe/">café</Link> prepares all meals to support our retreat groups. <Link href="/terms-conditions/">Retreat booking terms</Link>.
              </p>
            </aside>
          </div>
          <div className={styles.gallery} data-reveal>
            <Gallery images={shalaPhotos} label="Workshop spaces" />
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="events-heading">
        <div className="wrap">
          <div className={styles.eventsHead}>
            <h2 id="events-heading">Upcoming events</h2>
            <p className="muted">Listed by date. Past events are removed automatically.</p>
          </div>
          {events.length ? (
            <EventList items={events} today={today} />
          ) : (
            <p>There are no events scheduled at the moment. Please <Link href="/contacts/">contact us</Link> for news of upcoming retreats.</p>
          )}
        </div>
      </section>

      <section className={`section-tight ${styles.photoBand}`} aria-hidden="true">
        <Img src={photo.ricefieldMountains.key} alt="" sizes="100vw" />
      </section>
    </>
  );
}
