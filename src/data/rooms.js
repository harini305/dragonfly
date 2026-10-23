// Eight rooms as published on /accommodations/ (core-facts.json "rooms").
// Rates are casual-stay published rates in IDR thousands ("Rp1,180k").

export const seasons = {
  normal: 'Jan 15 – July 14 and Sept 15 – Dec 25',
  peak: 'July 15 – Sept 14 and Dec 26 – Jan 14',
};

export const roomAmenities = [
  'Balcony', 'Fan-cooled', 'Filtered drinking water', 'Free WiFi', 'Hot water', 'Laundry',
  'Organic insect repellent', 'Organic shampoo', 'Organic soap', 'Toilet & Shower',
];

export const accommodationCopy = {
  rates:
    'The Dragonfly Village has been specially created for hosting retreats. Please email us for retreat rates and details. Whenever we have availability not used by retreat groups, our bungalows are open for casual stay at last minute discounted rate.',
  direct: 'Discount available for direct booking with us. FREE organic scrub/ice-cream when you book directly with us.',
  bungalows: [
    'These are century-old antique bungalows, original wooden houses brought over from remote villages in Java, decorated with beautiful carvings, 100% recycled teak wood. All balconies are facing the rice fields, with its own private outdoor garden. We encourage conscious living – rooms are equipped with ceiling fan, there is no AC in all our bungalows – Ubud is slightly cooler at night.',
    'Each bungalow has an attached mud-wall bathroom, passion fruits & vines climbing over the natural roof, semi-open to the nature. Clean finishing. Hot shower is available. All rooms are supplied with natural organic shampoo, soap and insect repellent.',
    'Our beds and furniture are specially designed, made from recycled wood plough, which the farmers used with the buffaloes to plough the rice fields before. Twin beds and King size bed can be arranged in each room. We believe in creating an organic environment for best rejuvenating sleep.',
  ],
};

const standard =
  'This fan-cooled room is fitted with wooden interiors, mosquito net and a private semi open bathroom with a shower. It has a seating area on the front terrace with its own garden facing the open rice fields.';
const triple =
  'Accommodating up to 3 guests, this fan-cooled room is fitted with wooden interiors, mosquito nets and a private semi open bathroom with a shower. It also has a seating area on the front terrace with its own garden facing the open rice fields.';

const gallery = (room, files, alts) => files.map((f, i) => ({ key: `rooms/${room}/dragonfly-bali-${f}`, alt: alts[i] }));

export const rooms = [
  {
    slug: 'mangosteen', name: 'Mangosteen', type: 'Standard Double or Twin Room', booking: 'Mangosteen',
    description: `${standard} Room can be set up as two single beds OR one king size bed.`,
    normal: 1180, peak: 1280,
    images: gallery('mangosteen', ['mangosteen-13', 'mangosteen-25', 'mangosteen-11', 'mangosteen-14', 'mangosteen-15', 'mangosteen-30'], [
      'Mangosteen bungalow terrace with carved teak walls and cushioned seating',
      'Mangosteen bedroom with a canopy bed under a mosquito net',
      'Mangosteen bungalow seen from the garden path',
      'Side view of the antique teak Mangosteen bungalow',
      'View from the Mangosteen terrace across the garden to the rice field',
      'Mangosteen bedroom with wooden floor and open window shutters',
    ]),
  },
  {
    slug: 'coconut', name: 'Coconut', type: 'Standard Double or Twin Room', booking: 'Coconut',
    description: `${standard} Room can be set up as two single beds OR one king size bed.`,
    normal: 1180, peak: 1280,
    images: gallery('coconut', ['coconut-01', 'coconut-15', 'coconut-04', 'coconut-03', 'coconut-11', 'coconut-13'], [
      'Coconut bungalow with a peaked roof among palms at sunrise',
      'Coconut terrace with two armchairs and a small table',
      'Coconut bungalow behind a lily pond and wooden footbridge',
      'Coconut terrace steps leading to the garden and rice field',
      'Teak walls and louvred shutters of the Coconut bungalow',
      'Pink armchairs on the Coconut terrace deck',
    ]),
  },
  {
    slug: 'mango', name: 'Mango', type: 'Standard Double or Twin Room', booking: 'Mango',
    description: `${standard} Room can be set up as two low single beds OR one low king size bed.`,
    normal: 1180, peak: 1280,
    images: gallery('mango', ['mango-03', 'mango-02', 'mango-01', 'mango-13', 'mango-18', 'mango-20'], [
      'Mango bungalow with its long terrace and tiled roof',
      'Mango terrace with a daybed and two armchairs in morning light',
      'Mango bungalow and garden with a stepping-stone path',
      'Mango bedroom with a low bed and mosquito net',
      'Mango bedroom with a wooden desk and chair',
      'Semi-open mud-wall bathroom of the Mango bungalow',
    ]),
  },
  {
    slug: 'lychee', name: 'Lychee', type: 'Standard Twin Room', booking: 'Lychee',
    description: `${standard} Room is set up as two single beds.`,
    normal: 1180, peak: 1280,
    images: gallery('lychee', ['leeche-03', 'leeche-19', 'leeche-16', 'leeche-15', 'leeche-17', 'leeche-23'], [
      'Lychee bungalow with its terrace facing the garden',
      'Lychee terrace with a resident cat sitting by the door',
      'Garden pond and path beside the Lychee bungalow',
      'Lychee bungalow behind tall tropical plants',
      'Wooden footbridge over the pond near Lychee',
      'Daybed with pink and grey cushions on the Lychee terrace',
    ]),
  },
  {
    slug: 'papaya', name: 'Papaya', type: 'Superior Triple Room', booking: 'Papaya',
    description: `${triple} Room can be set up as 3 singles or one King + one single.`,
    normal: 1430, peak: 1480,
    // F8: the room text gives "Dec 26th – Jan 10th" for Papaya; every other room says Jan 14th.
    peakNote: 'The Papaya listing gives the peak season as ending Jan 10 rather than Jan 14. Please confirm dates when you enquire.',
    images: gallery('papaya', ['papaya-19', 'papaya-15', 'papaya-18', 'papaya-21', 'papaya-25', 'papaya-27'], [
      'Papaya terrace with carved doors, a bench and a small round table',
      'Papaya bungalow with its terrace in late afternoon light',
      'Papaya bungalow seen through garden trees',
      'Bistro table and chairs on the Papaya terrace',
      'Carved shutters and doors of the Papaya bungalow',
      'Daybed with cushions inside Papaya, seen from above',
    ]),
  },
  {
    slug: 'banana', name: 'Banana', type: 'Superior Triple Room', booking: 'Banana',
    description: `${triple} Room can be set up as 3 singles or one King + one single. One of the single beds is in the attic.`,
    normal: 1380, peak: 1450,
    images: gallery('banana', ['banana-5', 'banana-4', 'banana-1', 'banana-15', 'banana-6', 'banana-42-2'], [
      'Banana bungalow terrace with a carved bench and flowers',
      'Banana bungalow at the end of a stepping-stone garden path',
      'Banana bungalow roof behind large tropical leaves',
      'Banana terrace with a carved wooden bench and hanging textile',
      'Lawn and flowering garden in front of Banana',
      'Stone basin with fresh flowers in the Banana bathroom',
    ]),
  },
  {
    slug: 'lotus', name: 'Lotus', type: 'Family Suite', booking: 'Lotus',
    description:
      'Accommodating up to 3 guests, this spacious fan-cooled room is fitted with wooden interiors, mosquito nets and a private semi open bathroom with a shower and a bathtub. It has both an indoor seating area facing the rice fields and an outdoor seating area on the front terrace facing our garden. Lotus Suite can be set up as one King + 1 single OR 3 singles.',
    extras: ['Bathtub', 'Fridge'],
    normal: 1550, peak: 1600,
    images: gallery('lotus', ['lotus-15', 'lotus-09', 'lotus-14', 'lotus-10', 'lotus-12', 'lotus-70'], [
      'Carved teak facade and terrace of the Lotus family suite',
      'Lotus suite with its raised terrace and lawn',
      'Lotus suite among red ti plants at sunrise',
      'Lotus suite terrace beside large tropical leaves',
      'Lotus terrace seating looking out to the garden',
      'Lantern-lit roof eaves of the Lotus suite',
    ]),
  },
  {
    slug: 'blue-moon', name: 'Blue Moon', type: 'Quadruple Room', booking: 'Blue Moon',
    description:
      'Blue Moon is our biggest bungalow – 8m × 5.5m inside space with 4 single beds in each corner of the room, plus 2 hanging beds (additional cost) in the attic. Each corner has a curtain separation. There are TWO toilets with showers attached in the semi open bathroom and a spacious terrace facing the rice fields.',
    extraBeds: 'Two extra hanging beds for children at Rp175k each.',
    normal: 1900, peak: 1950,
    images: gallery('blue-moon', ['blue-moon-11', 'blue-moon-19', 'blue-moon-4', 'blue-moon-12', 'blue-moon-14', 'blue-moon-10'], [
      'Blue Moon bungalow with its long row of carved windows',
      'Inside Blue Moon: carved pillars, curtained beds and a pendant lamp',
      'Blue Moon beside a garden pond',
      'Blue Moon framed by a large tree and garden',
      'Blue Moon roof against the sun above a flower garden',
      'Blue Moon at dusk among tall plants',
    ]),
  },
];

export const formatRate = (k) => `Rp${k.toLocaleString('en-US')}k`;
