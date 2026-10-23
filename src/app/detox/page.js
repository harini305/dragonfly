import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import Img from '@/components/Img';
import { detoxIntro, detoxShared, programs } from '@/data/detox';
import { photo } from '@/data/photos';
import styles from './detox.module.css';

export const metadata = {
  title: 'TCM & detox programs',
  description:
    'Four TCM detox programs in Ubud: Gut & Parasite, Liver, Lymphatic & Kidney, and Full Body. Lengths, prices and what is included.',
  alternates: { canonical: '/detox/' },
};

export default function DetoxPage() {
  return (
    <>
      <PageIntro variant="split" title="TCM & detox programs" lead={detoxIntro[0]} image={photo.detoxHerbs.key} imageAlt={photo.detoxHerbs.alt}>
        <p>{detoxIntro[1]}</p>
      </PageIntro>

      <section className="section-tight" aria-labelledby="programs-heading">
        <div className="wrap">
          <h2 id="programs-heading">The programs</h2>
          <div className={styles.compareWrap} role="region" aria-labelledby="programs-heading" tabIndex={0}>
            <table className={styles.compare}>
              <thead>
                <tr>
                  <th scope="col">Program</th>
                  <th scope="col">Length</th>
                  <th scope="col">Price</th>
                  <th scope="col">Shorter option</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.slug}>
                    <th scope="row"><Link href={`/detox/${p.slug}/`}>{p.name}</Link></th>
                    <td>{p.duration}</td>
                    <td>{p.price}</td>
                    <td>{p.shortOption ? `${p.shortOption.label} – ${p.shortOption.price}, on request` : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className={styles.programs}>
            {programs.map((p) => (
              <li key={p.slug} data-reveal>
                <article className={styles.program}>
                  <div className={`photo ratio-3-1 ${styles.programPhoto}`}>
                    <Img src={p.image} alt="" sizes="(min-width: 900px) 45vw, 100vw" />
                  </div>
                  <h3><Link href={`/detox/${p.slug}/`}>{p.name}</Link></h3>
                  <p className={styles.meta}>{p.duration} · {p.price}</p>
                  <p>{p.summary}</p>
                  <Link className="text-link" href={`/detox/${p.slug}/`} aria-label={`Program details: ${p.name}`}>Program details</Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="every-heading">
        <div className="wrap">
          <h2 id="every-heading">Included in every program</h2>
          <div className={styles.shared}>
            <ul className="list-ruled">
              {detoxShared.inclusions.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <div>
              <h3>Daily activities</h3>
              <p className="small">{detoxShared.activities.join(' · ')}</p>
              <p className="small muted">Movement practices: {detoxShared.movement.join(', ')}.</p>
              <h3>Optional add-ons</h3>
              <p className="small">{detoxShared.addOns.join(' · ')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
