import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import Gallery from '@/components/Gallery';
import Img from '@/components/Img';
import { site } from '@/data/site';
import { photo } from '@/data/photos';
import styles from './sauna.module.css';

export const metadata = {
  title: 'Herbal steam sauna & saltwater pool',
  description:
    'Herbal steam sauna in Ubud with natural herbs and scrub, plus a 12m saltwater pool. Monday (silent), Wednesday and Saturday evenings. No reservation needed.',
  alternates: { canonical: '/herbal-steam-sauna/' },
};

// Sessions as published on the Sauna page (updated Feb 2026). The About FAQ lists the
// same three evenings but not the Wednesday morning session (F5); see the note below.
const sessions = [
  { when: 'Monday (silent), Wednesday and Saturday', time: '6–9pm', price: 'Rp150k' },
  { when: 'Wednesday morning', time: '9am–11am', price: 'Rp100k' },
];

const gallery = [photo.saunaFire, photo.saunaGuests, photo.saunaNight1, photo.saunaNight2, photo.pool, photo.poolGarden, photo.poolStones, photo.poolSunset];

export default function SaunaPage() {
  return (
    <>
      <PageIntro
        title="Herbal steam sauna"
        lead="Dragonfly Herbal Steam Sauna uses natural herbs, with a portion of yummy natural scrub."
        image={photo.saunaHut.key}
        imageAlt={photo.saunaHut.alt}
      />

      <section className="section" aria-labelledby="open-heading">
        <div className="wrap split split-wide-right">
          <div className="prose" data-reveal>
            <h2>Just show up</h2>
            <p className="lead">No reservation is needed: just show up, pay the ticket, and enjoy the sauna.</p>
            <p>Dragonfly Herbal Steam Sauna use is <strong>free for our in-house guests</strong>. Herbal tea is served.</p>
            <p>Please bring your swimming suits and towels. We provide sarong for you to borrow.</p>
            <p className="note">Please remember to rinse your sweat and scrub off in the shower first before jumping into our salt pool in between sauna sessions.</p>
          </div>

          <div className={styles.timetable} data-reveal>
            <h2 id="open-heading">Open</h2>
            <table className={styles.table}>
              <caption className="visually-hidden">Sauna sessions and prices</caption>
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Time</th>
                  <th scope="col">Ticket</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((s) => (
                  <tr key={s.when}>
                    <th scope="row">{s.when}</th>
                    <td>{s.time}</td>
                    <td>{s.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>Monthly membership card available upon request.</p>
            <p className={styles.check}>
              Sessions can change. Before travelling especially for a session, message us on WhatsApp at <a href={site.whatsappHref}>{site.phoneDisplay}</a>.
            </p>
            <p className="small">
              On Wednesdays, sauna and salt pool are also part of the evening after the <Link href="/activity/dance-of-the-dragonfly/">Dance of the Dragonfly</Link>.
            </p>
          </div>
        </div>
      </section>

      <section id="pool" className={`section section-paper ${styles.pool}`} aria-labelledby="pool-heading">
        <div className="wrap split split-wide-left split-center">
          <div className="photo ratio-3-2" data-reveal>
            <Img src={photo.poolDay.key} alt={photo.poolDay.alt} sizes="(min-width: 900px) 55vw, 100vw" />
          </div>
          <div className="prose" data-reveal>
            <h2 id="pool-heading">Saltwater pool</h2>
            <p className="lead">Our 12m length pool uses a salt water system.</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="sauna-photos">
        <div className="wrap">
          <h2 id="sauna-photos">Sauna evenings</h2>
          <Gallery images={gallery} label="Sauna and pool photos" />
        </div>
      </section>
    </>
  );
}
