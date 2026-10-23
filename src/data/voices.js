// Ten real testimonials: nine from the testimonial post type (text as published there)
// plus Maria Issa, who appears only in the About carousel. Quotes are verbatim; the
// placeholder location "Planet Earth" and blank locations are omitted (F11). No ratings exist.

export const testimonials = [
  { name: 'Georgios', from: 'Germany', title: 'A fairytale among the rice fields', text: 'If you are looking for a fairytale, this is the right place for you! Magnificent gardens with a small river like pond running through them. At night there are fire bugs greeting you, geckos singing, frogs singing… if you are lucky you can here the rain on the roof- all that matched up with great stuff always ready to meet your needs. And don’t underestimate the peace that you are going to find between the rice fields and the friendly locals!' },
  { name: 'Jayne Burns-Milostic', text: 'Dragonfly Village is a beautiful village surrounded by rice paddies. Minutes walk to bustling Ubud but when you are in the village you are surrounded by peace and tranquility. The people that work there are so kind and helpful, nothing is too much trouble. The food is prepared with absolute love and nourishes your soul as well as your body. I could not recommend it highly enough!! I spent a life-changing 5 days here in retreat and would love to return with my family for a holiday. I loved everything about this place.' },
  { name: 'Rae De Rusett', text: 'A beautiful and peaceful slice of heaven nestled in the rice paddies that enables you to gently process within. Magic happens here…' },
  { name: 'Carissa', from: 'Indonesia', title: 'Amazing time at dragonfly village', text: 'I liked the zen feeling you get the moment you walk into the place. Don’t expect extreme luxury and 24 hour catering to you but the people are super helpful and nice, including the owner, and the property and cabins are very well kept and gave a comfortable feel. If you are looking for a peaceful, tranquil and authentic experience this the place to be. We really enjoyed the sauna nights. Met some great people and had interesting conversations during those nights. Overall we all extremely enjoyed our stay here. One of the best places I have stayed so far and would definitely return someday.' },
  { name: 'Cheryl Lynn', from: 'Connecticut, United States', text: 'Just spent 7 amazing days at the Dragonfly. The staff, grounds and food were everything and more! Exactly what you would hope for a relaxing, enjoyable get-a-way/retreat when so far from home. It is a hidden gem in the beautiful Village of Ubud and I give my highest recommendation! I hope to return to Bali one day, if I do- the Dragonfly will be my home for when I return.' },
  { name: 'Gabriele Hailazidis', text: 'Dragonfly is bliss, lovely people and surrounded by amazingly nature. Felt like in paradise and everyone made such a huge effort to make you feel like at home and continuously spoilt us with beautiful food and smiles' },
  { name: 'Kirstie Du Preez', from: 'Great Britain', text: 'From the time we arrived we were already happy to be here ! I’ll be back x Loved the atmosphere, calm and peaceful ! Best massage I’ve ever had to date ! :)))) !' },
  { name: 'Julie', from: 'Luxembourg', text: 'Extraordinay place to relax… extraordinary location, beautiful place and surroundings.. bungalows with view on the ricefields. Very peaceful atmosphere. Amazing food and breakfast. Staff very kind and helpful. 10min walks to ubud centre. Great hotel ! Absolutely to recommend.' },
  { name: 'Marz Lacy', from: 'Australia', text: 'Location, staff, sauna, food, environmentally conscious' },
  { name: 'Maria Issa', text: 'An amazing oasis in Ubud! One of my absolute favorite places!' },
];

// About-page FAQ (9 items). Two answers contain facts that conflict with newer pages
// (F3 café hours, F4 "vegetarian only"); those clauses are omitted and the answer
// points to the page that carries the detail. All other answers are as published.
export const faqs = [
  { q: 'Do you organize airport or other location pick up / drop off?', a: ['Yes, just send us your flight info or location.'] },
  { q: 'How do we get our luggage into the Dragonfly in the small path?', a: ['Our staff are used to transferring luggage on motorbike. Just call our reception 5 mins before you arrive.'] },
  { q: 'Do I need a torch light?', a: ['Yes, it’s a good idea. The path to the Dragonfly is not lit at night, useful to have a torch light with you.'] },
  { q: 'Is there air-con?', a: ['We are an eco friendly set up, there are no air-cons in our rooms, only ceiling fan in every bungalow. Ubud is slightly cooler in the night due to terrain elevation. If you need extra table fan, please request at our reception.'] },
  { q: 'What food do you offer?', a: ['Vegan & GF options readily available on requests. Breakfast, lunch and dinner daily.'], link: { href: '/cafe/', label: 'Dragonfly Café' } },
  { q: 'When is the sauna open? What do I have to bring? Do I have to book?', a: ['Our herbal steam sauna is open to the general public from 6pm–9pm every Monday (silent), Wednesday and Saturday. No reservation required. Please bring your swimming suits and towels. We provide sarong for you to borrow.'], link: { href: '/herbal-steam-sauna/', label: 'Sauna sessions and prices' } },
  { q: 'Can I leave luggage in the Dragonfly?', a: ['Yes, you can leave your luggage in our reception if you arrive earlier than check in time 2pm and leave later than our check out time 11am.'] },
  { q: 'Do you organise tours?', a: ['Yes, we can assist to organize outings and tours for you.'] },
  { q: 'What other services do you have?', a: ['Laundry and massage service is available.'] },
];
