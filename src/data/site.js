// Business facts from docs/source-audit/content/core-facts.json.
// Conflicts (08-issues-gaps-questions.md §1) are resolved only where the source itself
// supports it; everything else is noted in docs/phase-2/OPEN-QUESTIONS.md.

export const site = {
  name: 'Dragonfly Village',
  url: 'https://dragonfly-village.com',
  tagline: 'A Magical Village For Your Retreat…',
  // +62 859 3388 1999 is the number in the header of every page, including the
  // Accommodation page itself. The single "+62-857" variant (F1) is not used.
  phoneDisplay: '+62 859 3388 1999',
  phoneHref: 'tel:+6285933881999',
  whatsappHref: 'https://wa.me/6285933881999',
  whatsappNote: 'WhatsApp text only during working hours from 7am to 9pm',
  workingHours: '7:00 am – 9:00 pm',
  // F2: home@ is the general address; info@ appears only on "email us for retreat
  // rates" links. Each is kept in its original context until the owner confirms.
  email: 'home@dragonfly-village.com',
  retreatEmail: 'info@dragonfly-village.com',
  // F10: Contact page spelling, which also matches the Google Maps query.
  address: ['Jalan Raya Ubud', 'Subak Sok Wayah, Abangan', 'Ubud, Gianyar, Bali', 'Indonesia 80571'],
  mapsEmbed:
    'https://maps.google.com/maps?q=Jl.%20Subak%20Sok%20Wayah%20Jl.%20Raya%20Ubud%2C%20Ubud%2C%20Kecamatan%20Ubud%2C%20Kabupaten%20Gianyar%2C%20Bali%2080571&t=m&z=11&output=embed&iwloc=near',
  mapsLink:
    'https://maps.google.com/maps?q=Jl.%20Subak%20Sok%20Wayah%20Jl.%20Raya%20Ubud%2C%20Ubud%2C%20Kecamatan%20Ubud%2C%20Kabupaten%20Gianyar%2C%20Bali%2080571',
  accessNotice:
    'Please call us on +62 859 3388 1999 for motorbike luggage transfer. Dragonfly Village is not accessible by car for the last 700m from the main road.',
  checkIn: '2pm',
  checkOut: '11am',
  social: {
    facebook: 'https://www.facebook.com/Dragonfly-Village-304468789679473/',
    instagram: 'https://www.instagram.com/dragonflyvillage/',
    youtube: 'https://www.youtube.com/watch?v=BfLM_niQW2Y',
  },
  youtubeId: 'BfLM_niQW2Y',
};

// Indexing is opt-in (set SITE_INDEXING=true when the site moves to its real domain).
export const indexable = process.env.SITE_INDEXING === 'true';

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/accommodations/', label: 'Accommodation' },
  { href: '/retreats-events/', label: 'Retreats & Events' },
  { href: '/herbal-steam-sauna/', label: 'Sauna' },
  { href: '/cafe/', label: 'Café' },
  { href: '/detox/', label: 'Detox' },
  { href: '/about/', label: 'About' },
  { href: '/contacts/', label: 'Contact' },
];

export const motto = { text: 'Live simply so that others may simply live.', by: 'Gandhi' };

export const story = {
  intro:
    'Dragonfly Village, an enchanted retreat paradise, is set in the midst of one of the most beautiful rice field walks in the center of Ubud, Bali.',
  concept:
    'Tranquility and stunning greenery all around… panorama with sacred Mt Agung and the northern ranges of mountain in a distance… open space filled with dragonflies in the day and fireflies in the night… symphony of crickets and frogs… for those who enjoy being in nature, healing and learning. Only footsteps away from center Ubud, but tucked away from its hassles and bustles, we offer the best of both worlds.',
  structures:
    'Our structures are mostly recycled wood and traditional antique teak houses brought over from remote villages in Java. We focus our energy on living simply and consciously within an organic environment.',
  workshops:
    'You will find various workshops on yoga retreats, bodywork, detox & fasting programs and other healing modalities being hosted at Dragonfly Village. We warmly welcome you to join us in sharing this space for individual and collective transformation.',
  symbolism:
    'Dragonfly represents metamorphosis and transformation. The main symbolisms are renewals, adaptability, grace and positive force. They fly abundantly here in the rice field, a symbol of the sense of self that comes with maturity. A creature of the wind, that represents change, and knows it must live life to the fullest with the short life it has. Dragonflies are courage and they are the power of life.',
  nature:
    'Dragonfly Village is all about living close to nature, our rooms are designed so the natural world is very much a part of your experience here. We do not want to shut out our beautiful animal friends, frogs, insects, breezes and vegetation that thrive in abundance here. You will experience the above and probably more! This place is best suited for animal lovers and people that love the great outdoors!',
};

export const features = [
  'Herbal Steam Sauna',
  'Close to Ubud center',
  'Salt Water Pool',
  'Workshop Spaces',
  'Dragonfly Café',
  'Free Fiberoptic WiFi',
  'Daily House Keeping',
  'Permaculture Garden',
];

export const history = [
  { date: '2010-04-07', label: 'April 7, 2010', title: 'Dream Sketching' },
  { date: '2010-11-09', label: 'November 9, 2010', title: 'Magical Land Manifested' },
  { date: '2011-05-01', label: 'May 1, 2011', title: 'Dragonfly Village blueprint came into being' },
  { date: '2011-05-17', label: 'May 17, 2011', title: 'Land Ceremony', text: 'Ceremony honoring Dewi Shri and asking permission to convert the agriculture land into building.' },
  { date: '2011-08-12', label: 'August 12, 2011', title: 'First Foundation', text: 'Dragonfly started to take on 3D existence with first foundation work on the land.' },
  { date: '2013-03-16', label: 'March 16, 2013', title: 'Opening Ceremony', text: 'Dragonfly Village Balinese opening ceremony blessing by Mahareshi.' },
];

export const pets = [
  { name: 'Tin Tin', image: 'about/pets/pets-tin-tin', alt: 'Tin Tin, a fluffy white dog' },
  { name: 'In memory of Lemon', image: 'about/pets/pets-lemon', alt: 'Lemon, a ginger cat' },
  { name: 'Shakti', image: 'about/pets/pets-shakti', alt: 'Shakti, a white cat with tabby patches' },
  { name: 'Fluffy', image: 'about/pets/pets-fluffy', alt: 'Fluffy, a white and ginger cat' },
];

export const terms = {
  casual: ['Casual stay booking is confirmed with Rp 1 mil deposit.', 'All deposits are non-refundable.'],
  retreats: [
    'All retreat bookings are confirmed with a deposit. Without deposit, we do not block out any dates officially.',
    'Retreat balance payment is due one month before the start of retreat date. Any last minute changes can be settled on check in day.',
  ],
};

export const retreatVenue = {
  licence: 'Dragonfly Village is fully licensed and complies with Indonesian legality for hosting all residential retreat groups.',
  spaces:
    'We have 2 workshop spaces available – upstairs and downstairs sacred Hexagon, 90–100m² each.',
  upstairs:
    'Upstairs shala is completely open with 360 degree view of the rice field. The entire northern mountain ranges of Mt Batukaru and Mt Agung in panorama. We see as far down to the Balinese coast in the south. Moon rise and stunning sunsets… breeze.',
  downstairs: 'Downstairs shala is semi enclosed by half bamboo wall offering more privacy.',
  rates: 'Dragonfly Village has been specially created to host retreats. Please email us for retreat rates and details.',
  deposits: 'All deposits are non-refundable.',
};
