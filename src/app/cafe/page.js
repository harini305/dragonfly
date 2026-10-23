import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import Gallery from '@/components/Gallery';
import Img from '@/components/Img';
import { photo, menuPhotos } from '@/data/photos';
import styles from './cafe.module.css';

export const metadata = {
  title: 'Dragonfly Café',
  description:
    'Dragonfly Café in Ubud: breakfast, lunch and dinner daily from a vegetarian and vegan kitchen, with GF options and greens from our organic garden.',
  alternates: { canonical: '/cafe/' },
};

// Hours: the café page says 7.30am–8.30pm, its meta description and the About FAQ say
// 7.30am–9pm (F3). Only the shared opening time is shown until the closing time is confirmed.
// Diet: "vegetarian and vegan only" sits beside "Fish option added in 2026" (F4); the
// newer statement is kept and "only" is not claimed.

const cafePhotos = [photo.cafeChairs, photo.cafeEvening, photo.cafeLounge, photo.cafeSun, photo.cafeTable, photo.cafeSign, photo.cafeBench, photo.cafeRoof];
const gardenPhotos = [photo.garden1, photo.garden2, photo.garden3];

export default function CafePage() {
  return (
    <>
      <PageIntro
        title="Dragonfly Café"
        lead="Open daily for breakfast, lunch and dinner, from 7.30am."
        image={photo.cafeHero.key}
        imageAlt={photo.cafeHero.alt}
      />

      <section className="section" aria-labelledby="kitchen-heading">
        <div className={`wrap ${styles.kitchen}`}>
          <div className="prose" data-reveal>
            <h2 id="kitchen-heading">The kitchen</h2>
            <p className="lead">Our kitchen is vegetarian and vegan, with a fish option added in 2026.</p>
            <p>GF and vegan options are readily available. We make our own coconut oil for cooking.</p>
            <p>We prepare all meals to support our retreat groups.</p>
          </div>
          <dl className={styles.hours} data-reveal>
            <div>
              <dt>Open</dt>
              <dd>Daily, from 7.30am</dd>
            </div>
            <div>
              <dt>Serving</dt>
              <dd>Breakfast, lunch &amp; dinner</dd>
            </div>
            <div>
              <dt>Closing time</dt>
              <dd>Ask at reception or <Link href="/contacts/">message us</Link></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="menu-heading">
        <div className="wrap">
          <div className={styles.menuHead}>
            <h2 id="menu-heading">From the menu</h2>
            <p className="muted prose">
              Dishes from the Dragonfly Café menu. Select a photo to see it larger.
            </p>
          </div>
          <Gallery images={menuPhotos} label="Dishes from the café menu" sizes="(min-width: 1000px) 25vw, (min-width: 700px) 33vw, 50vw" />
        </div>
      </section>

      <section className="section" aria-labelledby="space-heading">
        <div className="wrap">
          <h2 id="space-heading">The café</h2>
          <Gallery images={cafePhotos} label="Café photos" />
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="garden-heading">
        <div className="wrap split split-wide-right split-center">
          <div className="prose" data-reveal>
            <h2 id="garden-heading">Organic garden</h2>
            <p className="lead">Our organic garden close by in the rice fields is growing happy greens for our kitchen.</p>
          </div>
          <div className={styles.garden} data-reveal>
            {gardenPhotos.map((g, i) => (
              <div key={g.key} className={`photo ${i === 0 ? styles.gardenMain : 'ratio-3-2'}`}>
                <Img src={g.key} alt={g.alt} sizes={i === 0 ? '(min-width: 900px) 50vw, 100vw' : '(min-width: 900px) 25vw, 50vw'} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
