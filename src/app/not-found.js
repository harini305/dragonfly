import Link from 'next/link';
import { nav } from '@/data/site';

export const metadata = { title: 'Page not found', description: 'This page could not be found on the Dragonfly Village website.' };

export default function NotFound() {
  return (
    <section className="wrap section">
      <h1>That page can’t be found</h1>
      <p className="lead prose">The page may have moved when our website was updated. These are the main parts of the site:</p>
      <ul className="list-ruled prose">
        {nav.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
      </ul>
    </section>
  );
}
