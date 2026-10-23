import { Montserrat, Source_Sans_3 } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';
import FooterFit from '@/components/FooterFit';
import { site, indexable } from '@/data/site';
import './globals.css';

// Exactly two families across the site (09-phase-2-recommendations §6).
const montserrat = Montserrat({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-montserrat', display: 'swap' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['400', '600'], style: ['normal', 'italic'], variable: '--font-source-sans', display: 'swap' });

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Dragonfly Village – Eco retreat in the rice fields of Ubud, Bali', template: '%s – Dragonfly Village' },
  description:
    'An eco retreat village of century-old antique Javanese teak bungalows in the rice fields of Ubud, Bali, with a herbal steam sauna, saltwater pool, vegetarian café and retreat spaces.',
  openGraph: { siteName: 'Dragonfly Village', type: 'website', locale: 'en_US', images: ['/images/place/bali-2019-sdragonfly-drone-118-pano-1200.webp'] },
  robots: indexable ? undefined : { index: false, follow: false },
};

export const viewport = { themeColor: '#330026' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${sourceSans.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
        <FooterFit />
        <Motion />
      </body>
    </html>
  );
}
