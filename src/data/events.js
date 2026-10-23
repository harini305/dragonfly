// Seven events from /activity/*. Dates are ISO (Bali, UTC+8). Listings hide events whose
// end date has passed; early-bird prices are shown only until their published end date.
// Copy is the published event copy; emoji bullets are rewritten as plain lines.

const shifuLiBio = [
  'Shifu Li Shi Feng was born in Henan Province, China — the birthplace of Shaolin Kung Fu, Qigong, Taichi, and Chinese classical philosophy. He is co-founder of the Li Shi Feng Kungfu Academy and the Zhong Jin Dao Training System, a body–mind–energy path rooted in balance, discipline, and internal cultivation. His teaching integrates traditional Shaolin training with the philosophical foundations of Buddhism, Taoism, and Confucianism.',
  'For more than a decade, Shifu Li has shared Shaolin, Qigong, Taichi, and classical Chinese philosophy with students from over 120 countries across Asia, Europe, the Americas, and beyond. His approach combines precise technical instruction with direct personal correction, guiding practitioners to develop structure, internal power, and clarity through authentic practice.',
];

export const events = [
  {
    slug: 'dance-of-the-dragonfly',
    title: 'Dance of the Dragonfly',
    recurring: true,
    when: 'Every Wednesday · 5:00 – 7:00 PM',
    image: 'events/dragonfly-dance-sq-every-wednesday',
    imageAlt: 'Poster: Dance of the Dragonfly, a playful archetypal movement experience, every Wednesday 5PM–7PM, Dragonfly Village Ubud',
    metaTitle: 'Dance of the Dragonfly in Ubud, Every Wednesday 5–7 PM',
    metaDescription: 'A weekly conscious movement journey in Ubud: guided movement, somatic awareness and free dance. Every Wednesday, 5–7 PM at Dragonfly Village.',
    summary:
      'The Dance of the Dragonfly is a weekly conscious movement journey that uses the dragonfly’s metamorphosis to explore personal transformation, adaptability and somatic awareness.',
    body: [
      'Just as a dragonfly transitions from life underwater to the air, we take this journey into the body. Through breath, imagination, guided movement, and improvisation, we enter our “inner waters”—the realm of feeling, memory, and intuition—to explore what is ready to shift or emerge.',
      'The dragonfly serves as our ally. Its ability to hover, change direction, and move between elements offers a rich landscape for self-discovery. Each week opens a different doorway to transformation—sometimes through an element or question, and other times by exploring archetypal energies like the Alchemist, Visionary, Mystic, or Liberator through the body.',
      'Moving between individual exploration, playful encounters, and group improvisation, the practice opens into a free dance space. There is no choreography to learn and no correct way to dance—only curiosity, imagination, and listening. When we stop telling the body what to do, another story begins to appear.',
      'What might your moving body already know that you have not yet found words for?',
      'No dance experience needed. Experienced movers, contact dancers and complete beginners are equally welcome.',
    ],
    details: [
      ['When', 'Every Wednesday'],
      ['Dance journey', '5:00 – 7:00 PM (guided movement, somatic awareness, and free dance)'],
      ['Tickets', 'IDR 150k KITAS / 200k visitors'],
    ],
    afterTitle: 'After the dance, you are invited to stay and continue the evening together',
    after: [
      'Herbal Steam Sauna + Salt Water Pool · 6:00–9:00 PM (additional IDR 80k only)',
      'Fire Circle & Soul Connection (free for dancers who prefer not to use the sauna or salt pool)',
      'Hearty food available · Last order 8:30 PM',
    ],
    closing: ['A conscious, nature-held space for movement, emotional exploration, play, connection and transformation.', 'Let the sunset become a threshold.'],
    booking: { kind: 'tickets', href: 'https://megatix.co.id/events/dance-of-the-dragonfly-archetype', label: 'Tickets on Megatix', note: 'Tickets can also be bought at our reception desk.' },
  },
  {
    slug: 'shaolin-basics-foundations-of-shaolin-kung-fu-with-shifu-li-shi-feng',
    title: 'Shaolin Basics: Foundations of Shaolin Kung Fu with Shifu Li Shi Feng',
    shortTitle: 'Shaolin Basics',
    start: '2026-11-03', end: '2026-11-08', when: 'November 3–8, 2026',
    image: 'events/shaolin-li-ig',
    imageAlt: 'Poster: Shaolin Basics, Foundations of Shaolin Kung Fu with Shifu Li Shi Feng, 3–8 November 2026, Dragonfly Village Bali',
    metaTitle: 'Shaolin Basics Kung Fu Course in Bali, 3–8 Nov 2026',
    metaDescription: 'A 6-day introduction to Shaolin Kung Fu with Shifu Li Shi Feng at Dragonfly Village, Bali, 3–8 November 2026.',
    summary:
      'A six day introduction to authentic Shaolin Kung Fu with Shifu Li Shi Feng. Each morning opens with Baduanjin, the classic Eight Pieces of Brocade qigong set, to settle the breath and open the body before training begins.',
    body: [
      'From there, the course builds through two foundational forms, Wu Bu Quan, the Five Step Fist, which teaches the core stances and steps underpinning all Shaolin practice, and Qi Xing Quan, the Seven Star Fist, a longer traditional form that brings those fundamentals together into flowing combination. No prior experience needed.',
      'Shaolin Kung Fu begins the same way every internal art does: with the breath. Baduanjin opens each session, settling the body before the stances, strikes, and forms begin.',
      'Over six days, training builds through two foundational forms. Wu Bu Quan, the Five Step Fist, lays down the stances and footwork that everything else in Shaolin practice stands on. Qi Xing Quan, the Seven Star Fist, then draws those fundamentals into a longer, flowing sequence of strikes and combinations. Afternoons include short qigong and Chan philosophy discussion.',
    ],
    details: [['Hours', '9 AM – 12 PM / 2:30 – 5 PM daily'], ['Level', 'All levels welcome']],
    earlyBird: { price: 'IDR 13.780 million', until: '2026-10-26', untilLabel: '26 October 2026' },
    price: 'IDR 14.980 million',
    includes: ['7 nights shared accommodation (check in 2nd / check out 9th)', '3 vegetarian/vegan complete meals daily', '2 evenings herbal steam sauna', 'Full training program'],
    teacher: { name: 'Shifu Li Shi Feng', bio: shifuLiBio },
    schedule: [
      { day: 'Tuesday 3 November — Foundations', items: ['9:00–12:00 — Baduanjin qigong, then basic stance work (horse stance, bow stance, footwork), introduction to Wu Bu Quan opening movements', '12:00–2:30 — Lunch break', '2:30–5:00 — Short qigong and Chan philosophy discussion, then continued Wu Bu Quan drilling, stance conditioning', 'From 4:30 — Shala open for free practice'] },
      { day: 'Wednesday 4 November — Building Wu Bu Quan', items: ['9:00–12:00 — Baduanjin qigong, then Wu Bu Quan full sequence, footwork and transitions', '12:00–2:30 — Lunch break', '2:30–5:00 — Short qigong and Chan philosophy discussion, then Wu Bu Quan refinement and partner stance checks', 'Evening — Herbal steam bath'] },
      { day: 'Thursday 5 November — Polishing and Transition', items: ['9:00–12:00 — Baduanjin qigong, then Wu Bu Quan full run-throughs, corrections, then introduction to Qi Xing Quan opening section', '12:00–2:30 — Lunch break', '2:30–5:00 — Short qigong practice, then Qi Xing Quan opening section drilled and repeated', 'From 4:30 — Shala open for free practice'] },
      { day: 'Friday 6 November — Building Qi Xing Quan', items: ['9:00–12:00 — Baduanjin qigong, then Qi Xing Quan middle section, strikes and combinations', '12:00–2:30 — Lunch break', '2:30–5:00 — Short qigong practice, then continued Qi Xing Quan sequencing', 'From 4:30 — Shala open for free practice'] },
      { day: 'Saturday 7 November — Assembling the Form', items: ['9:00–12:00 — Baduanjin qigong, then Qi Xing Quan full form assembly, linking all sections', '12:00–2:30 — Lunch break', '2:30–5:00 — Short qigong practice then full form practice and individual corrections', 'From 4:30 — Shala open for free practice', 'Evening — Herbal steam bath'] },
      { day: 'Sunday 8 November — Closing Half Day', items: ['9:00–12:00 — Baduanjin qigong, then full run-through of both Wu Bu Quan and Qi Xing Quan, final corrections, closing performance or demonstration, certificates', '12:00 — Closing lunch together, course concludes'] },
    ],
    scheduleNote: 'Timetables are flexible according to needs and flow of the class.',
    booking: { kind: 'email', email: 'home@dragonfly-village.com' },
  },
  {
    slug: 'yang-tai-chi-the-complete-24-form-with-shifu-li-shi-feng',
    title: 'Yang Tai Chi: The Complete 24 Form with Shifu Li Shi Feng',
    shortTitle: 'Yang Tai Chi',
    start: '2026-11-10', end: '2026-11-15', when: 'November 10–15, 2026',
    image: 'events/yang-tai-chi-ig',
    imageAlt: 'Poster: Yang Tai Chi, The Complete 24-Form with Shifu Li Shi Feng, 10–15 November 2026, Dragonfly Village Bali',
    metaTitle: 'Yang Tai Chi 24 Form Course in Bali, 10–15 Nov 2026',
    metaDescription: 'Learn the complete Yang Tai Chi 24 form, built section by section over 6 days with Shifu Li Shi Feng at Dragonfly Village, Bali, 10–15 November 2026.',
    summary:
      'The Yang style is the most widely practised form of tai chi in the world, known for its slow, flowing movements and deep calming effect. Over six days, the complete Yang 24 form is built section by section with Shifu Li — four sections at a time — so each shape and transition has room to settle into the body before the next is added.',
    body: [
      'Every session begins with qigong to open the energy channels and ease into breath before the form itself begins, and each afternoon offers drilling and free practice time in the shala to help what’s learned in the morning take hold.',
    ],
    details: [['Hours', '9 AM–12 PM and 2:30–5 PM daily'], ['Level', 'All levels welcome']],
    earlyBird: { price: 'IDR 18.8 million', until: '2026-10-26', untilLabel: '26 October 2026' },
    price: 'IDR 22 million',
    includes: ['7 nights shared accommodation (check in 9th / check out 16th)', '3 vegetarian/vegan complete meals daily', '3 evenings herbal steam sauna', 'Full training program'],
    teacher: { name: 'Shifu Li Shi Feng', bio: shifuLiBio },
    booking: { kind: 'email', email: 'home@dragonfly-village.com' },
  },
  {
    slug: 'chen-tai-chi-fan-form-4-day-intensive-with-shifu-li-shi-feng',
    title: 'Chen Tai Chi Fan Form – 4-Day Intensive with Shifu Li Shi Feng',
    shortTitle: 'Chen Tai Chi Fan Form',
    start: '2026-11-17', end: '2026-11-20', when: 'November 17–20, 2026',
    image: 'events/fan-tai-chi-ig',
    imageAlt: 'Poster: Chen Tai Chi Fan Form, 4-Day Intensive with Shifu Li Shi Feng, 17–20 November 2026, Dragonfly Village Bali',
    metaTitle: 'Chen Tai Chi Fan Form Course in Bali, 17–20 Nov 2026',
    metaDescription: 'Learn the Chen Tai Chi fan form in a 4-day intensive with Shifu Li Shi Feng at Dragonfly Village, Bali, 17–20 November 2026. Fan included.',
    summary:
      'A four-day deep dive into the Chen style tai chi fan form, the oldest and most martial of the tai chi lineages, expressed here through the added grace and challenge of the fan.',
    body: [
      'Each day starts with Qi Gong before moving into fan technique and choreography, and a special tai chi fan is included for every participant to keep and continue practising with.',
      'The Chen style fan is one of the most graceful and commanding weapons forms in the Chinese martial arts tradition. Rooted in the spiralling, silk-reeling energy of Chen Tai Chi, it moves between stillness and explosive release — the open fan becoming a shield, a blade, or a wave.',
      'Over four full days, you’ll learn the complete form from scratch under the direct guidance of Shifu Li Shi Feng, whose teaching spans Shaolin Kung Fu, Tai Chi, and Qi Gong.',
      'No prior fan experience is required. Students with a background in Tai Chi, Qi Gong, or yoga will find familiar principles at work — and new ones waiting to be discovered.',
    ],
    earlyBird: { price: 'IDR 10.5 million', until: '2026-11-10', untilLabel: '10 November 2026' },
    price: 'IDR 11.7 million',
    includes: ['5 nights shared accommodation (check in 16th / check out 21st)', '3 vegetarian/vegan complete meals daily', '2 evenings herbal steam sauna', 'Full training program'],
    booking: { kind: 'email', email: 'home@dragonfly-village.com' },
  },
  {
    slug: 'nurturing-qi-gong-a-peaceful-3-day-experience-with-tcm-dr-jon-win',
    title: 'Nurturing Qi Gong – A peaceful 3-day experience with TCM Dr. Jon Win',
    shortTitle: 'Nurturing Qi Gong',
    start: '2027-01-29', end: '2027-01-31', when: 'January 29 – 31, 2027',
    image: 'events/nurturing-qi',
    imageAlt: 'Poster: Nurturing Qi Gong, practice and TCM talks on holistic health with Dr. Jon Win, 29–31 January 2027, Dragonfly Village Bali',
    metaTitle: 'Nurturing Qi Gong Retreat in Bali, 29–31 Jan 2027',
    metaDescription: 'A gentle 3-day Qi Gong retreat in Bali with TCM talks on holistic health by Dr. Jon Win. 29–31 January 2027 at Dragonfly Village.',
    summary:
      'Embark on this journey to Health, Longevity & Healing. Reconnect with your body, breath, and inner energy through gentle Qi Gong and Traditional Chinese Medicine wisdom.',
    body: ['Learn to nourish your Qi, restore balance, and support your body’s natural healing process.'],
    priceNote: 'Price not published. Email us for booking information.',
    booking: { kind: 'email', email: 'home@dragonfly-village.com' },
  },
  {
    slug: 'shaolin-arts-retreat-traditional-kung-fu-chi-kung',
    title: 'Shaolin Arts Retreat – Traditional Kung Fu & Chi Kung',
    shortTitle: 'Shaolin Arts Retreat',
    start: '2027-02-21', end: '2027-02-27', when: 'February 21–27, 2027',
    image: 'events/shaolin-ig',
    imageAlt: 'Poster: Shaolin Arts Retreat, Traditional Kung Fu and Chi Kung, all levels welcome, 21st–27th February 2027, Dragonfly Village Bali',
    metaTitle: 'Shaolin Arts Retreat in Bali, 21–27 Feb 2027',
    metaDescription: 'A 7-day Shaolin Arts Retreat in Bali: traditional Kung Fu and Chi Kung for all levels at Dragonfly Village, guided by Thomas of Nam Yang Greece.',
    summary: 'Step away from the noise & join us this February 2027, Bali Shaolin Arts Retreat!',
    body: [
      'Through movement, breath, coordination and focused attention, traditional Kung Fu and Chi Kung help cultivate:',
    ],
    bodyList: [
      'greater body awareness and mobility', 'concentration and mental clarity', 'balance, coordination and strength',
      'a calmer relationship with pressure', 'the ability to slow down without switching off',
    ],
    bodyAfter: [
      'Guided by Thomas of Nam Yang Greece, each participant receives personal attention, with the training adapted to their level, body and individual goals; whether you’re stepping onto the training floor for the first time or already have established experience.',
      'Expect a practice that is precise without being rigid, challenging without being punishing, and surprisingly relevant to life beyond the training floor.',
      'Less screen time. More body time. Less reacting. More responding. Less “busy.” More capable.',
      'All of this in the magical setting of the Dragonfly Village, with plenty of recovery, nourishing food and a few well-deserved treats along the way.',
      'For busy humans who could use a different kind of productivity. Leave radiant and stronger, indefinitely.',
    ],
    // No amount is published; the offer text is shown only until its stated end.
    earlyBird: { text: 'Early bird rate until end of November 2026.', until: '2026-11-30', untilLabel: '30 November 2026' },
    booking: { kind: 'external', href: 'https://crockungfu.com/bali-retreat', label: 'More info at crockungfu.com' },
  },
  {
    slug: 'bali-retreat-power-without-armor-march-2-9-2027',
    title: 'Bali Retreat ~ Power Without Armor ~ March 2-9, 2027',
    shortTitle: 'Power Without Armor',
    start: '2027-03-02', end: '2027-03-09', when: 'March 2–9, 2027',
    image: 'events/screen-shot-2026-05-23-at-11-44-49-am',
    imageAlt: 'Aerial view of Dragonfly Village bungalows in the rice fields at sunset, captioned “Bali Retreat March 2027”',
    metaTitle: 'Power Without Armor – Bali Retreat, March 2–9, 2027',
    metaDescription: 'A Compassionate Inquiry-based retreat for professionals at Dragonfly Village, Ubud, March 2–9, 2027. Seven nights, cohort of 11 max.',
    summary:
      'What if the leadership you’re building isn’t meant to protect you from the world – but to reconnect you to yourself?',
    body: [
      'This is not a productivity retreat, nor is it a branding exercise. And it is not about becoming more impressive either. This is Power, Without Armor – a Compassionate Inquiry-based retreat for professionals who are ready to stop holding it all together and start leading from more somatic integrity.',
      'An opportunity to detox your nervous system, your authentic leadership story, and your self-worth in a magical village nestled among rice fields, where dragonflies dance by day, fireflies glow by night, and a wild symphony of crickets and frogs holds your healing… so you can restore your somatic integrity baseline.',
    ],
    includes: [
      '7 nights among rice fields, dragonflies, and century-old teak bungalows',
      'Deep relational work exploring power, money, responsibility, and self-protection at the level of your nervous system',
      'Intimate cohort of 11 max – because this work requires trust, not scale',
    ],
    includesTitle: 'The retreat',
    forYouTitle: 'This retreat is for you if',
    forYou: [
      'Your leadership has been sustained through tension, over-functioning, or pushing past yourself',
      'You carry responsibility for many, yet seldom experience deep support or reciprocity',
      'You know the next chapter of your leadership asks for deeper repair and integration, not just sharper strategy',
    ],
    closing: ['What lives beneath the armor you’ve been wearing?'],
    // F12: the listing only says "DM for details" without naming a channel.
    priceNote: 'Price not published.',
    booking: { kind: 'contact', label: 'Ask us for details' },
  },
];

// "Today" in Bali (UTC+8) as YYYY-MM-DD so date comparisons match the venue's calendar.
export function baliToday(now = new Date()) {
  return new Date(now.getTime() + 8 * 3600 * 1000).toISOString().slice(0, 10);
}

export const isPast = (event, today = baliToday()) => !event.recurring && event.end < today;
export const earlyBirdActive = (event, today = baliToday()) => Boolean(event.earlyBird) && today <= event.earlyBird.until;

export function upcomingEvents(today = baliToday()) {
  return events
    .filter((e) => !isPast(e, today))
    .sort((a, b) => (a.recurring ? -1 : b.recurring ? 1 : a.start.localeCompare(b.start)));
}

export const getEvent = (slug) => events.find((e) => e.slug === slug);
