import Link from 'next/link';
import { notFound } from 'next/navigation';
import Img from '@/components/Img';
import { ContactForm } from '@/components/EnquiryForms';
import { detoxShared, programs, getProgram, programMailto } from '@/data/detox';
import { site } from '@/data/site';
import styles from './program.module.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProgram(slug);
  if (!p) return {};
  return {
    title: `${p.name} – TCM detox program`,
    description: `${p.name}, a TCM detox program at Dragonfly Village, Ubud: ${p.duration}, ${p.price}, with consultations, meals, massage and accommodation.`,
    alternates: { canonical: `/detox/${p.slug}/` },
  };
}

export default async function ProgramPage({ params }) {
  const { slug } = await params;
  const p = getProgram(slug);
  if (!p) notFound();
  const others = programs.filter((o) => o.slug !== p.slug);

  return (
    <article>
      <header className={`wrap ${styles.head}`}>
        <p className={styles.crumb}><Link href="/detox/">TCM &amp; detox programs</Link></p>
        <h1>{p.name}</h1>
        <dl className={styles.key}>
          <div><dt>Length</dt><dd>{p.duration}</dd></div>
          <div><dt>Price</dt><dd>{p.price}</dd></div>
          {p.shortOption && <div><dt>Shorter option</dt><dd>{p.shortOption.label} – {p.shortOption.price}</dd></div>}
        </dl>
        <p className={styles.durationNote}>
          The published program description also calls this a {p.bodyDays} cleanse. Please confirm the exact schedule when you enquire.
        </p>
        <div className={`photo ratio-3-1 ${styles.banner}`}>
          <Img src={p.image} alt={p.imageAlt} sizes="(min-width: 1240px) 1240px, 100vw" priority />
        </div>
      </header>

      <div className={`wrap ${styles.body}`}>
        <div className={styles.main}>
          <p className="lead">{p.intro}</p>
          <div className="actions">
            <a className="btn" href={programMailto(p)}>Book your spot by email</a>
          </div>

          <h2 className={styles.h2}>Overview</h2>
          {p.overview.map((para) => <p key={para.slice(0, 30)}>{para}</p>)}
          {p.shortOption && (
            <p className="note"><strong>{p.shortOption.label} – {p.shortOption.price}.</strong> {p.shortOption.text}</p>
          )}

          <h2 className={styles.h2}>Accommodation &amp; healing environment</h2>
          {detoxShared.environment.map((para) => <p key={para.slice(0, 30)}>{para}</p>)}

          <h2 className={styles.h2}>Daily activities</h2>
          <p>{detoxShared.activitiesIntro}</p>
          <ul>
            {detoxShared.activities.map((a) => (
              <li key={a}>
                {a}
                {a.startsWith('Morning') && <>: {detoxShared.movement.join(', ')}</>}
              </li>
            ))}
          </ul>

          <h2 className={styles.h2}>Optional add-ons</h2>
          <p>{detoxShared.addOnsIntro}</p>
          <ul>{detoxShared.addOns.map((a) => <li key={a}>{a}</li>)}</ul>
        </div>

        <aside className={styles.aside} aria-labelledby="inclusions-heading">
          <h2 id="inclusions-heading" className={styles.asideTitle}>Price &amp; inclusions</h2>
          <p className={styles.price}>{p.price}<span>{p.duration}</span></p>
          <ul className={styles.inclusions}>{detoxShared.inclusions.map((i) => <li key={i}>{i}</li>)}</ul>
          <a className="btn btn-coral" href={programMailto(p)}>Book your program by email</a>
          <p className="small">Or WhatsApp <a href={site.whatsappHref}>{site.phoneDisplay}</a></p>
        </aside>
      </div>

      <section className="section section-paper" aria-labelledby="question-heading">
        <div className="wrap split">
          <div className="prose">
            <h2 id="question-heading">Any questions?</h2>
            <p>Message us here. Your message opens in your own email app, addressed to {site.email}, and is sent only when you send it from there.</p>
          </div>
          <ContactForm subjectPrefix={`Question: ${p.name}`} messageLabel="Your message or question" />
        </div>
      </section>

      <nav className={`wrap ${styles.others}`} aria-labelledby="others-heading">
        <h2 id="others-heading" className={styles.asideTitle}>Other programs</h2>
        <ul>
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/detox/${o.slug}/`}>{o.name}</Link>
              <span>{o.duration} · {o.price}</span>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}
