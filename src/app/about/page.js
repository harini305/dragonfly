import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import Img from '@/components/Img';
import Gallery from '@/components/Gallery';
import { VideoFacade } from '@/components/Embeds';
import { Faq, Visit } from '@/components/Blocks';
import { motto, story, history, pets, features } from '@/data/site';
import { testimonials } from '@/data/voices';
import { photo } from '@/data/photos';
import styles from './about.module.css';

export const metadata = {
  title: 'About',
  description:
    'The story of Dragonfly Village, antique teak houses in the Ubud rice fields, from a 2010 dream sketch to the 2013 opening. Guest reflections and FAQ.',
  alternates: { canonical: '/about/' },
};

const place = [photo.aboutWide, photo.entranceWheels, photo.shrine, photo.herons, photo.gardenPond, photo.offering, photo.roofs, photo.aboutPanorama];

export default function AboutPage() {
  return (
    <>
      <PageIntro variant="split" title="About Dragonfly Village" lead={story.intro} image={photo.aboutSquare.key} imageAlt={photo.aboutSquare.alt}>
        <blockquote className={styles.motto}>
          <p>“{motto.text}”</p>
          <footer>— {motto.by}. This is our motto for well-being.</footer>
        </blockquote>
      </PageIntro>

      <section className="section-tight" aria-labelledby="story-heading">
        <div className="wrap split">
          <div className="prose" data-reveal>
            <h2 id="story-heading">A magical village for your retreat</h2>
            <p>{story.concept}</p>
            <p>{story.structures}</p>
            <p>{story.workshops}</p>
          </div>
          <div data-pin>
            <h3 className={styles.small}>Special features</h3>
            <ul className={`list-ruled ${styles.features}`}>
              {features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-tight" aria-label="Photographs of the village">
        <div className="wrap">
          <Gallery images={place} label="Photographs of the village" />
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="history-heading">
        <div className="wrap split split-wide-right">
          <div data-pin>
            <h2 id="history-heading">Short history of Dragonfly Village</h2>
            <p className="muted">From a dream sketch to a Balinese opening ceremony.</p>
          </div>
          <ol className={styles.timeline}>
            {history.map((h) => (
              <li key={h.date} data-reveal>
                <time dateTime={h.date}>{h.label}</time>
                <h3>{h.title}</h3>
                {h.text && <p>{h.text}</p>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="tenants-heading">
        <div className="wrap">
          <h2 id="tenants-heading">Dragonfly tenants</h2>
          <ul className={styles.pets}>
            {pets.map((p) => (
              <li key={p.name}>
                <Img src={p.image} alt={p.alt} sizes="160px" />
                <span>{p.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="video-heading">
        <div className="wrap">
          <h2 id="video-heading">Short video about us</h2>
          <VideoFacade poster={photo.aerialSunset.key} posterAlt="" />
          <p className="small muted">“Dragonfly Village, Ubud, Bali” by Manu Film, played from YouTube.</p>
        </div>
      </section>

      <section id="reflections" className="section section-plum" aria-labelledby="reflections-heading">
        <div className={`wrap ${styles.reflections}`}>
          <div data-pin>
            <h2 id="reflections-heading">Reflections</h2>
            <p className={styles.reflectionsNote}>{testimonials.length} guests on their time at Dragonfly Village.</p>
          </div>
          <ul className={styles.voices}>
            {testimonials.map((t) => (
              <li key={t.name} data-reveal>
                <figure>
                  <blockquote>
                    {t.title && <p className={styles.voiceTitle}>{t.title}</p>}
                    <p>{t.text}</p>
                  </blockquote>
                  <figcaption>
                    {t.name}
                    {t.from && <span>{t.from}</span>}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="wrap split split-wide-right">
          <div data-pin>
            <h2 id="faq-heading">Frequently asked questions</h2>
            <p className="muted">Anything else? <Link href="/contacts/">Contact us</Link>.</p>
          </div>
          <Faq />
        </div>
      </section>

      <Visit />
    </>
  );
}
