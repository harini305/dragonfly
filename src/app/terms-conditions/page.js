import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import { terms } from '@/data/site';

export const metadata = {
  title: 'Terms & conditions',
  description: 'Booking terms: casual stays are confirmed with a Rp 1 million deposit, retreats with a deposit and balance one month before. Deposits are non-refundable.',
  alternates: { canonical: '/terms-conditions/' },
};

export default function TermsPage() {
  return (
    <>
      <PageIntro variant="plain" title="Terms & conditions" />
      <div className="wrap" style={{ paddingBottom: 'var(--space-l)' }}>
        <div className="prose">
        <section aria-labelledby="casual">
          <h2 id="casual">For casual stay</h2>
          <ul className="list-ruled">{terms.casual.map((t) => <li key={t}>{t}</li>)}</ul>
        </section>
        <section aria-labelledby="retreats" style={{ marginTop: 'var(--space-m)' }}>
          <h2 id="retreats">For retreats</h2>
          <ul className="list-ruled">{terms.retreats.map((t) => <li key={t}>{t}</li>)}</ul>
        </section>
        <p style={{ marginTop: 'var(--space-m)' }}>
          <Link className="btn" href="/booking-request/">Booking request</Link>
        </p>
        </div>
      </div>
    </>
  );
}
