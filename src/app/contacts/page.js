import PageIntro from '@/components/PageIntro';
import { ContactForm } from '@/components/EnquiryForms';
import { ContactDetails, ArrivalNotice } from '@/components/Blocks';
import { MapEmbed } from '@/components/Embeds';
import { site } from '@/data/site';
import { photo } from '@/data/photos';
import styles from '../forms.module.css';

export const metadata = {
  title: 'Contact us',
  description:
    'Contact Dragonfly Village, Ubud: WhatsApp +62 859 3388 1999 (text, 7am–9pm) or home@dragonfly-village.com. Address, map and arrival information.',
  alternates: { canonical: '/contacts/' },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro variant="split" title="Contact us" lead="WhatsApp text only during working hours from 7am to 9pm." image={photo.contact.key} imageAlt={photo.contact.alt}>
        <ContactDetails />
      </PageIntro>

      <section className="section section-paper" aria-labelledby="message-heading">
        <div className={`wrap ${styles.layout}`}>
          <div>
            <h2 id="message-heading">Send us a message</h2>
            <p className={styles.howto}>
              This form opens your own email app with the message addressed to <strong>{site.email}</strong>. Nothing is sent until you send it from there.
            </p>
            <ContactForm />
          </div>
          <div data-pin>
            <h2>Getting here</h2>
            <ArrivalNotice />
            <p className="small muted" style={{ marginTop: '1rem' }}>Check-in time is {site.checkIn}; check-out time is {site.checkOut}. You can leave luggage at our reception if you arrive earlier or leave later.</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="map-heading">
        <div className="wrap">
          <h2 id="map-heading">Map</h2>
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
