'use client';

import { useId, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { site } from '@/data/site';
import { rooms } from '@/data/rooms';
import styles from './EnquiryForms.module.css';

// There is no verified form backend (06-functionality §3: recipient, SMTP and spam
// protection are unconfirmed). These forms therefore do not submit anywhere: they
// validate and then hand the message to the visitor's own email app or WhatsApp,
// addressed to the published contact details. Nothing is sent by this website.

function Field({ label, name, required, hint, error, as = 'input', ...props }) {
  const id = useId();
  const Tag = as;
  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        {label}
        {required ? <span className={styles.req}> (required)</span> : <span className={styles.opt}> (optional)</span>}
      </label>
      {hint && <p id={`${id}-hint`} className={styles.hint}>{hint}</p>}
      <Tag
        id={id}
        name={name}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={[hint && `${id}-hint`, error && `${id}-err`].filter(Boolean).join(' ') || undefined}
        {...props}
      />
      {error && <p id={`${id}-err`} className={styles.error}>{error}</p>}
    </div>
  );
}

function useComposer(formRef, summaryRef, fields, required) {
  const [errors, setErrors] = useState({});
  const [handedOff, setHandedOff] = useState(null);

  const read = () => Object.fromEntries(fields.map((f) => [f, (new FormData(formRef.current).get(f) ?? '').toString().trim()]));

  const validate = (values) => {
    const next = {};
    for (const [name, message] of Object.entries(required)) if (!values[name]) next[name] = message;
    setErrors(next);
    if (Object.keys(next).length) {
      setHandedOff(null);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return false;
    }
    return true;
  };

  return { errors, handedOff, setHandedOff, read, validate };
}

function ErrorSummary({ errors, summaryRef }) {
  const list = Object.values(errors);
  if (!list.length) return null;
  return (
    <div ref={summaryRef} tabIndex={-1} className={styles.summary} role="alert">
      <p>Please complete the required fields:</p>
      <ul>{list.map((m) => <li key={m}>{m}</li>)}</ul>
    </div>
  );
}

function Handoff({ channel }) {
  if (!channel) return null;
  return (
    <p className={styles.handoff} role="status">
      {channel === 'email'
        ? `Your email app should now open with this message addressed to ${site.email}. It is only sent when you press send there. If nothing opened, email us directly at ${site.email}.`
        : `WhatsApp should now open with this message to ${site.phoneDisplay}. It is only sent when you press send there.`}
    </p>
  );
}

const BOOKING_FIELDS = ['your-accomodation', 'your-name', 'email-or-whatsapp', 'number-pax', 'dates', 'bed-arrangement', 'your-requests'];

export function BookingRequestForm() {
  const params = useSearchParams();
  const preset = params.get('your-accomodation') ?? '';
  const formRef = useRef(null);
  const summaryRef = useRef(null);
  const c = useComposer(formRef, summaryRef, BOOKING_FIELDS, {
    'your-accomodation': 'Accommodation',
    'your-name': 'Name of guest',
    'email-or-whatsapp': 'Email or WhatsApp',
    'number-pax': 'Number of guests',
  });

  const compose = (v) =>
    [
      `Accommodation: ${v['your-accomodation']}`,
      `Name of guest: ${v['your-name']}`,
      `Email or WhatsApp: ${v['email-or-whatsapp']}`,
      `Number of pax: ${v['number-pax']}`,
      `Booking dates: ${v.dates || '-'}`,
      `Bed arrangement: ${v['bed-arrangement'] || '-'}`,
      `Other requests: ${v['your-requests'] || '-'}`,
    ].join('\n');

  const send = (channel) => (e) => {
    e.preventDefault();
    const v = c.read();
    if (!c.validate(v)) return;
    const body = compose(v);
    const subject = `Booking request: ${v['your-accomodation']}`;
    if (channel === 'email') {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      window.open(`${site.whatsappHref}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`, '_blank', 'noopener');
    }
    c.setHandedOff(channel);
  };

  return (
    <form ref={formRef} className={styles.form} noValidate onSubmit={send('email')}>
      <ErrorSummary errors={c.errors} summaryRef={summaryRef} />
      <Field label="Accommodation" name="your-accomodation" required defaultValue={preset} list="room-names" autoComplete="off" error={c.errors['your-accomodation'] && 'Please tell us which room you would like.'} />
      <datalist id="room-names">
        {rooms.map((r) => <option key={r.slug} value={r.booking} />)}
      </datalist>
      <Field label="Name of guest" name="your-name" required autoComplete="name" error={c.errors['your-name'] && 'Please enter the guest name.'} />
      <Field label="Email or WhatsApp" name="email-or-whatsapp" required autoComplete="email" error={c.errors['email-or-whatsapp'] && 'Please enter an email address or WhatsApp number.'} />
      <Field label="Number of pax" name="number-pax" required inputMode="numeric" error={c.errors['number-pax'] && 'Please enter the number of guests.'} />
      <Field label="Booking dates" name="dates" hint="Arrival and departure, e.g. 12–16 March" />
      <Field label="Bed arrangement" name="bed-arrangement" hint="For example: king bed, or twin beds" />
      <Field label="Other requests" name="your-requests" as="textarea" rows={4} />
      <div className="actions">
        <button type="submit" className="btn">Write email</button>
        <button type="button" className="btn btn-ghost" onClick={send('whatsapp')}>Send via WhatsApp</button>
      </div>
      <Handoff channel={c.handedOff} />
    </form>
  );
}

const CONTACT_FIELDS = ['your-name', 'your-email', 'your-subject', 'your-message'];

export function ContactForm({ subjectPrefix = '', messageLabel = 'Your message' }) {
  const formRef = useRef(null);
  const summaryRef = useRef(null);
  const c = useComposer(formRef, summaryRef, CONTACT_FIELDS, { 'your-name': 'Your name', 'your-email': 'Your email', 'your-message': messageLabel });

  const onSubmit = (e) => {
    e.preventDefault();
    const v = c.read();
    if (!c.validate(v)) return;
    const subject = [subjectPrefix, v['your-subject']].filter(Boolean).join(' – ') || `Message from ${v['your-name']}`;
    const body = `${v['your-message']}\n\n${v['your-name']}\n${v['your-email']}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    c.setHandedOff('email');
  };

  return (
    <form ref={formRef} className={styles.form} noValidate onSubmit={onSubmit}>
      <ErrorSummary errors={c.errors} summaryRef={summaryRef} />
      <div className={styles.row}>
        <Field label="Your name" name="your-name" required autoComplete="name" error={c.errors['your-name'] && 'Please enter your name.'} />
        <Field label="Your email" name="your-email" type="email" required autoComplete="email" error={c.errors['your-email'] && 'Please enter your email address.'} />
      </div>
      <Field label="Subject" name="your-subject" />
      <Field label={messageLabel} name="your-message" as="textarea" rows={5} required error={c.errors['your-message'] && 'Please write your message.'} />
      <div className="actions">
        <button type="submit" className="btn">Write email</button>
      </div>
      <Handoff channel={c.handedOff} />
    </form>
  );
}
