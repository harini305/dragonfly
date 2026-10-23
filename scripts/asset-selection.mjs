// Curated subset of the Phase 1 asset manifest (docs/source-audit/04-assets-manifest.csv).
// Each entry: [group, original filename]. The original URL is resolved from the manifest,
// so nothing outside the audited set can be downloaded.

const rooms = {
  mangosteen: ['DRAGONFLY-BALI-MANGOSTEEN-11.jpg', 'DRAGONFLY-BALI-MANGOSTEEN-13.jpg', 'DRAGONFLY-BALI-MANGOSTEEN-14.jpg', 'DRAGONFLY-BALI-MANGOSTEEN-15.jpg', 'DRAGONFLY-BALI-MANGOSTEEN-30.jpg', 'DRAGONFLY-BALI-MANGOSTEEN-25.jpg'],
  coconut: ['DRAGONFLY-BALI-COCONUT-01.jpg', 'DRAGONFLY-BALI-COCONUT-04.jpg', 'DRAGONFLY-BALI-COCONUT-03.jpg', 'DRAGONFLY-BALI-COCONUT-11.jpg', 'DRAGONFLY-BALI-COCONUT-15.jpg', 'DRAGONFLY-BALI-COCONUT-13.jpg'],
  mango: ['DRAGONFLY-BALI-MANGO-01.jpg', 'DRAGONFLY-BALI-MANGO-02.jpg', 'DRAGONFLY-BALI-MANGO-03.jpg', 'DRAGONFLY-BALI-MANGO-13.jpg', 'DRAGONFLY-BALI-MANGO-18.jpg', 'DRAGONFLY-BALI-MANGO-20.jpg'],
  lychee: ['DRAGONFLY-BALI-LEECHE-16.jpg', 'DRAGONFLY-BALI-LEECHE-15.jpg', 'DRAGONFLY-BALI-LEECHE-03.jpg', 'DRAGONFLY-BALI-LEECHE-17.jpg', 'DRAGONFLY-BALI-LEECHE-19.jpg', 'DRAGONFLY-BALI-LEECHE-23.jpg'],
  papaya: ['DRAGONFLY-BALI-PAPAYA-18.jpg', 'DRAGONFLY-BALI-PAPAYA-15.jpg', 'DRAGONFLY-BALI-PAPAYA-19.jpg', 'DRAGONFLY-BALI-PAPAYA-21.jpg', 'DRAGONFLY-BALI-PAPAYA-25.jpg', 'DRAGONFLY-BALI-PAPAYA-27.jpg'],
  banana: ['DRAGONFLY-BALI-BANANA-4.jpg', 'DRAGONFLY-BALI-BANANA-5.jpg', 'DRAGONFLY-BALI-BANANA-1.jpg', 'DRAGONFLY-BALI-BANANA-6.jpg', 'DRAGONFLY-BALI-BANANA-15.jpg', 'DRAGONFLY-BALI-BANANA-42-2.jpg'],
  lotus: ['DRAGONFLY-BALI-LOTUS-14.jpg', 'DRAGONFLY-BALI-LOTUS-09.jpg', 'DRAGONFLY-BALI-LOTUS-10.jpg', 'DRAGONFLY-BALI-LOTUS-70.jpg', 'DRAGONFLY-BALI-LOTUS-12.jpg', 'DRAGONFLY-BALI-LOTUS-15.jpg'],
  'blue-moon': ['DRAGONFLY-BALI-BLUE-MOON-11.jpg', 'DRAGONFLY-BALI-BLUE-MOON-10.jpg', 'DRAGONFLY-BALI-BLUE-MOON-4.jpg', 'DRAGONFLY-BALI-BLUE-MOON-12.jpg', 'DRAGONFLY-BALI-BLUE-MOON-14.jpg', 'DRAGONFLY-BALI-BLUE-MOON-19.jpg'],
};

const menu = ['1-1.jpg', '2-1.jpg', '3-1.jpg', '4-1.jpg', '5-1.jpg', '6-1.jpg', '7-2.jpg',
  ...Array.from({ length: 25 }, (_, i) => (i + 8 === 19 ? '19-1.jpg' : `${i + 8}.jpg`))];

export const selection = [
  ...['Dragonfly_Village_Logo-Black.png', 'Dragonfly_Village_Logo-White.png',
    'cropped-Dragonfly_Village_Favicon-1-32x32.png', 'cropped-Dragonfly_Village_Favicon-1-180x180.png',
    'cropped-Dragonfly_Village_Favicon-1-192x192.png'].map((f) => ['brand', f]),
  ...['DRAGONFLY-BALI-D.VILLAGE-23.jpg', 'BALI-2019-SDRAGONFLY-DRONE-118-PANO.jpg', 'BALI-2019-SDRAGONFLY-DRONE-137.jpg',
    'BALI-2019-SDRAGONFLY-DRONE-155.jpg', 'DRAGONFLY-BALI-D.VILLAGE-11.jpg', 'DRAGONFLY-BALI-D.VILLAGE-13.jpg',
    'DRAGONFLY-BALI-ENTRANCE-10.jpg', 'DRAGONFLY-BALI-GARDEN-17.jpg', 'DRAGONFLY-BALI-FLORA-FAUNA-10.jpg',
    'DRAGONFLY-BALI-D.VILLAGE-21.jpg', 'DRAGONFLY-BALI-D.VILLAGE-41.jpg', 'BALI-2018-13.jpg',
    'DRAGONFLY-BALI-D.VILLAGE-16.jpg', 'dragonfly-village-map-new.png'].map((f) => ['place', f]),
  ...['BALI-2019-SDRAGONFLY-DRONE-121.jpg', 'BALI-2019-SDRAGONFLY-DRONE-130.jpg', 'BALI-2019-SDRAGONFLY-DRONE-102.jpg',
    'DRAGONFLY-BALI-ENTRANCE-21.jpg', 'DRAGONFLY-BALI-ENTRANCE-36.jpg', 'DRAGONFLY-BALI-D.VILLAGE-12.jpg',
    'BALI-2018-15.jpg', 'BALI-2018-30.jpg', 'DRAGONFLY-BALI-D.VILLAGE-48.jpg',
    'PETS-TIN-TIN.png', 'PETS-LEMON.png', 'PETS-SHAKTI.png', 'PETS-FLUFFY.png'].map((f) => ['about', f]),
  ...Object.entries(rooms).flatMap(([room, files]) => files.map((f) => [`rooms/${room}`, f])),
  ...['DRAGONFLY-BALI-RESTAURANT-27.jpg', 'DRAGONFLY-BALI-RESTAURANT-45.jpg', 'DRAGONFLY-BALI-RESTAURANT-31.jpg',
    'DRAGONFLY-BALI-RESTAURANT-29.jpg', 'DRAGONFLY-BALI-RESTAURANT-25-1.jpg', 'DRAGONFLY-BALI-RESTAURANT-22.jpg',
    'DRAGONFLY-BALI-RESTAURANT-15.jpg', 'DRAGONFLY-BALI-RESTAURANT-37.jpg', 'DRAGONFLY-BALI-RESTAURANT-40.jpg',
    'BALI-2019-SDRAGONFLY-DRONE-142.jpg', 'BALI-2019-SDRAGONFLY-DRONE-147-1.jpg', 'BALI-2019-SDRAGONFLY-DRONE-150.jpg'].map((f) => ['cafe', f]),
  ...menu.map((f) => ['cafe/menu', f]),
  ...['DRAGONFLY-BALI-SAUNA-56.1.jpg', 'DRAGONFLY-BALI-SAUNA-35.jpg', 'DRAGONFLY-BALI-SAUNA-30.jpg', 'DRAGONFLY-BALI-SAUNA-26.jpg',
    'DRAGONFLY-BALI-SAUNA-65.jpg', 'DRAGONFLY-BALI-SAUNA-61.jpg', 'DRAGONFLY-BALI-SAUNA-51.jpg', 'DRAGONFLY-BALI-SAUNA-44.jpg',
    'WhatsApp-Image-2026-02-27-at-11.31.13-4.jpeg', 'WhatsApp-Image-2026-02-27-at-11.31.14-1.jpeg'].map((f) => ['sauna', f]),
  ...['DRAGONFLY-BALI-YOGA-HOUSE-29.jpg', 'DRAGONFLY-BALI-YOGA-HOUSE-13.jpg', 'DRAGONFLY-BALI-YOGA-HOUSE-38.jpg',
    'DRAGONFLY-BALI-YOGA-HOUSE-26.jpg', 'DRAGONFLY-BALI-YOGA-HOUSE-35.jpg', 'DRAGONFLY-BALI-YOGA-HOUSE-39-1.jpg',
    'DRAGONFLY-BALI-YOGA-HOUSE-22.jpg', 'DRAGONFLY-BALI-YOGA-HOUSE-49.jpg'].map((f) => ['retreats', f]),
  ...['Dragonfly-Dance-SQ-Every-Wednesday.jpg', 'Shaolin-Li-IG.jpeg', 'Yang-Tai-Chi-IG.jpeg', 'Fan-Tai-Chi-IG.jpeg',
    'Nurturing-Qi.jpeg', 'Shaolin-IG.jpeg', 'Screen-Shot-2026-05-23-at-11.44.49-AM.png'].map((f) => ['events', f]),
  ...['WhatsApp-Image-2026-04-03-at-13.56.15.jpeg', '2-4.png', '4-4.png', '6.png', 'full-body-detox.png'].map((f) => ['detox', f]),
  ['contact', 'DRAGONFLY-BALI-FLORA-FAUNA-14.jpg'],
];
