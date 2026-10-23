import Img from './Img';
import styles from './PageIntro.module.css';

// Inner-page opening. "banner": title over a photo; "split": title beside a photo;
// "plain": title only. Each page picks what suits its content.
export default function PageIntro({ title, lead, image, imageAlt, variant = 'banner', children }) {
  if (variant === 'banner') {
    return (
      <section className={styles.banner}>
        <div className={styles.bannerMedia}>
          <Img src={image} alt={imageAlt} sizes="100vw" priority data-parallax />
        </div>
        <div className={`wrap ${styles.bannerText}`}>
          <h1>{title}</h1>
          {lead && <p className={styles.bannerLead}>{lead}</p>}
          {children}
        </div>
      </section>
    );
  }

  if (variant === 'split') {
    return (
      <section className={`wrap ${styles.split}`}>
        <div className={styles.splitText}>
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
        <div className={`photo ${styles.splitMedia}`}>
          <Img src={image} alt={imageAlt} sizes="(min-width: 900px) 50vw, 100vw" priority />
        </div>
      </section>
    );
  }

  return (
    <section className={`wrap ${styles.plain}`}>
      <h1>{title}</h1>
      {lead && <p className="lead prose">{lead}</p>}
      {children}
    </section>
  );
}
