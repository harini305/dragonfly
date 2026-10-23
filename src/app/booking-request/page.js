import { Suspense } from 'react';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import { BookingRequestForm } from '@/components/EnquiryForms';
import { site, terms } from '@/data/site';
import styles from '../forms.module.css';

export const metadata = {
  title: 'Booking request',
  description: 'Request a bungalow at Dragonfly Village, Ubud. Send your dates, number of guests and bed arrangement to our team by email or WhatsApp.',
  alternates: { canonical: '/booking-request/' },
};

export default function BookingRequestPage() {
  return (
    <>
      <PageIntro variant="plain" title="Booking request" lead="Tell us which bungalow you would like, your dates and how many guests." />
      <div className={`wrap ${styles.layout}`}>
        <section aria-label="Booking request form">
          <p className={styles.howto}>
            This form prepares a message to <strong>{site.email}</strong>. Choose “Write email” or “Send via WhatsApp”; your own app opens with the details filled in, and nothing is sent until you send it there.
          </p>
          <Suspense fallback={null}>
            <BookingRequestForm />
          </Suspense>
        </section>
        <aside className={styles.aside}>
          <h2>Before you book</h2>
          <h3>Casual stay</h3>
          <ul>{terms.casual.map((t) => <li key={t}>{t}</li>)}</ul>
          <h3>Retreats</h3>
          <ul>{terms.retreats.map((t) => <li key={t}>{t}</li>)}</ul>
          <p><Link href="/terms-conditions/">Terms &amp; conditions</Link></p>
          <h3>Prefer to message directly?</h3>
          <p>
            <a href={site.whatsappHref}>{site.phoneDisplay}</a> ({site.whatsappNote.toLowerCase()})
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </aside>
      </div>
    </>
  );
}
