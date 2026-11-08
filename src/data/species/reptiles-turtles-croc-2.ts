import type { Species } from '@/types';

export const reptilesTurtlesCroc2: Species[] = [
  {
    id: 'galapagos-giant-tortoise',
    commonName: { en: 'Galápagos Giant Tortoise', bn: 'গালাপাগোসের দৈত্য কচ্ছপ' },
    scientificName: 'Chelonoidis niger',
    altNames: {
      en: ['Galápagos Tortoise', 'Giant Tortoise'],
      bn: ['গালাপাগোস কচ্ছপ', 'দৈত্যাকার কচ্ছপ'],
    },
    category: 'reptiles',
    wikiTitle: 'Galápagos tortoise',
    description: {
      en: 'The Galápagos giant tortoise is the largest living tortoise and the animal that gave the Galápagos Islands their name. Different islands hold distinct forms with dome-shaped or saddle-backed shells, which helped inspire Charles Darwin’s ideas on evolution. Whalers and settlers killed hundreds of thousands, but decades of breeding and restoration have brought several populations back.',
      bn: 'গালাপাগোসের দৈত্য কচ্ছপ পৃথিবীর সবচেয়ে বড় জীবিত স্থলচর কচ্ছপ; এদের নাম থেকেই গালাপাগোস দ্বীপপুঞ্জের নামকরণ। ভিন্ন ভিন্ন দ্বীপে গম্বুজ আকৃতির বা ঘোড়ার জিনের মতো খোলসের আলাদা আলাদা রূপ দেখা যায়, যা চার্লস ডারউইনের বিবর্তন-চিন্তাকে অনুপ্রাণিত করেছিল। তিমি শিকারি ও বসতি স্থাপনকারীরা লাখ লাখ কচ্ছপ মেরে ফেলেছিল, তবে কয়েক দশকের প্রজনন ও পুনরুদ্ধার কার্যক্রমে কয়েকটি জনগোষ্ঠী আবার ঘুরে দাঁড়িয়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Testudines',
      family: 'Testudinidae',
      genus: 'Chelonoidis',
      species: 'C. niger',
    },
    physical: {
      size: { en: 'Shell length up to about 1.5 m', bn: 'খোলসের দৈর্ঘ্য প্রায় ১.৫ মিটার পর্যন্ত' },
      weight: { en: 'Large males over 250 kg; some up to about 400 kg', bn: 'বড় পুরুষ ২৫০ কেজির বেশি; কোনোটি প্রায় ৪০০ কেজি পর্যন্ত' },
      lifespan: { en: 'Often over 100 years', bn: 'প্রায়ই ১০০ বছরের বেশি' },
      features: {
        en: ['Huge domed or saddle-shaped shell depending on the island', 'Long neck and thick, elephant-like legs', 'Saddle-backed forms can stretch high to reach cactus pads'],
        bn: ['দ্বীপভেদে বিশাল গম্বুজ আকৃতির বা জিনের মতো খোলস', 'লম্বা গলা ও হাতির মতো মোটা পা', 'জিন-খোলসওয়ালারা গলা উঁচু করে ক্যাকটাসের পাতা নাগাল পায়'],
      },
    },
    habitat: {
      en: 'Dry lowland scrub to humid highland grasslands and forests',
      bn: 'শুষ্ক নিচু ঝোপঝাড় থেকে আর্দ্র উঁচু তৃণভূমি ও বন',
    },
    habitats: ['grassland', 'desert', 'tropical-forest'],
    regions: ['south-america'],
    distribution: {
      en: 'Endemic to the Galápagos Islands of Ecuador, including Santa Cruz, Isabela and San Cristóbal.',
      bn: 'ইকুয়েডরের গালাপাগোস দ্বীপপুঞ্জে সীমাবদ্ধ — সান্তা ক্রুজ, ইসাবেলা ও সান ক্রিস্টোবাল দ্বীপসহ।',
    },
    climate: { en: 'Dry tropical lowlands with cooler, misty highlands', bn: 'শুষ্ক ক্রান্তীয় নিম্নভূমি এবং শীতল, কুয়াশাচ্ছন্ন উচ্চভূমি' },
    diet: {
      en: 'Herbivore — grasses, leaves, cactus pads and fruit',
      bn: 'তৃণভোজী — ঘাস, পাতা, ক্যাকটাসের পাতা ও ফল',
    },
    ecologicalRole: {
      en: 'An “ecosystem engineer” that disperses seeds over long distances and shapes island vegetation by grazing and trampling.',
      bn: 'একটি “বাস্তুতন্ত্র প্রকৌশলী”; দূর-দূরান্তে বীজ ছড়ায় এবং চরে খেয়ে ও মাড়িয়ে দ্বীপের উদ্ভিদজগৎ গড়ে তোলে।',
    },
    behavior: {
      en: 'Slow-moving and long-lived; many migrate seasonally between lowlands and highlands and wallow in pools to stay cool.',
      bn: 'ধীরগতির ও দীর্ঘজীবী; অনেকে মৌসুম অনুযায়ী নিচু এলাকা ও উঁচু এলাকার মধ্যে যাতায়াত করে এবং ঠান্ডা থাকতে কাদাপানিতে গড়াগড়ি দেয়।',
    },
    range: {
      native: [
        [-0.65, -90.4],
        [-0.85, -91.1],
        [-0.25, -91.4],
        [-0.85, -89.45],
      ],
      endemicTo: { en: 'Galápagos Islands, Ecuador', bn: 'গালাপাগোস দ্বীপপুঞ্জ, ইকুয়েডর' },
    },
    conservation: {
      status: 'VU',
      trend: 'increasing',
      threats: {
        en: ['Introduced goats, rats, pigs and fire ants', 'Historical over-harvesting by whalers and settlers', 'Habitat change on inhabited islands'],
        bn: ['বাইরে থেকে আনা ছাগল, ইঁদুর, শূকর ও আগুনে পিঁপড়া', 'অতীতে তিমি শিকারি ও বসতি স্থাপনকারীদের অতিরিক্ত শিকার', 'জনবসতিপূর্ণ দ্বীপে আবাসস্থলের পরিবর্তন'],
      },
      initiatives: {
        en: ['Captive breeding and repatriation by the Galápagos National Park and Charles Darwin Foundation', 'Eradication of feral goats from Isabela and other islands'],
        bn: ['গালাপাগোস জাতীয় উদ্যান ও চার্লস ডারউইন ফাউন্ডেশনের প্রজনন ও প্রত্যাবর্তন কর্মসূচি', 'ইসাবেলাসহ বিভিন্ন দ্বীপ থেকে বুনো ছাগল নির্মূল'],
      },
      assessed: '2017',
    },
    facts: {
      en: ['“Galápago” is an old Spanish word for tortoise or saddle.', '“Lonesome George”, the last Pinta Island tortoise, died in 2012.', 'They can survive up to a year without eating or drinking.'],
      bn: ['“গালাপাগো” একটি পুরোনো স্প্যানিশ শব্দ, যার অর্থ কচ্ছপ বা ঘোড়ার জিন।', 'পিন্টা দ্বীপের শেষ কচ্ছপ “লোনসাম জর্জ” ২০১২ সালে মারা যায়।', 'এরা কিছু না খেয়ে ও পান না করে প্রায় এক বছর বাঁচতে পারে।'],
    },
    related: ['aldabra-giant-tortoise', 'indian-star-tortoise'],
  },
  {
    id: 'aldabra-giant-tortoise',
    commonName: { en: 'Aldabra Giant Tortoise', bn: 'আলদাব্রার দৈত্য কচ্ছপ' },
    scientificName: 'Aldabrachelys gigantea',
    altNames: {
      en: ['Aldabra Tortoise', 'Seychelles Giant Tortoise'],
      bn: ['আলদাব্রা কচ্ছপ', 'সেশেলসের দৈত্য কচ্ছপ'],
    },
    category: 'reptiles',
    wikiTitle: 'Aldabra giant tortoise',
    description: {
      en: 'The Aldabra giant tortoise is one of the largest tortoises in the world, living on the remote Aldabra Atoll in the Seychelles. Over 100,000 roam the atoll, making it the largest giant-tortoise population on Earth. Some individuals have reached well over 150 years, earning it fame as one of the longest-lived animals.',
      bn: 'আলদাব্রার দৈত্য কচ্ছপ পৃথিবীর সবচেয়ে বড় স্থলচর কচ্ছপগুলোর একটি; সেশেলসের প্রত্যন্ত আলদাব্রা প্রবালদ্বীপে এদের বাস। এই প্রবালদ্বীপে লাখখানেক কচ্ছপ ঘুরে বেড়ায় — পৃথিবীতে দৈত্য কচ্ছপের সবচেয়ে বড় জনগোষ্ঠী। কোনো কোনো কচ্ছপ ১৫০ বছরেরও অনেক বেশি বেঁচেছে বলে জানা যায়, তাই এরা দীর্ঘজীবী প্রাণী হিসেবে বিখ্যাত।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Testudines',
      family: 'Testudinidae',
      genus: 'Aldabrachelys',
      species: 'A. gigantea',
    },
    physical: {
      size: { en: 'Shell length about 1–1.2 m', bn: 'খোলসের দৈর্ঘ্য প্রায় ১–১.২ মিটার' },
      weight: { en: 'Males around 250 kg; females about 160 kg', bn: 'পুরুষ প্রায় ২৫০ কেজি; স্ত্রী প্রায় ১৬০ কেজি' },
      lifespan: { en: 'Over 100 years; some reportedly exceed 150', bn: '১০০ বছরের বেশি; কারো কারো বয়স ১৫০ ছাড়িয়েছে বলে জানা যায়' },
      features: {
        en: ['High-domed, dark grey-brown shell', 'Very long neck for reaching branches', 'Thick, scaly legs'],
        bn: ['উঁচু গম্বুজের মতো গাঢ় ধূসর-বাদামি খোলস', 'ডালপালা নাগাল পেতে খুব লম্বা গলা', 'মোটা, আঁশযুক্ত পা'],
      },
    },
    habitat: {
      en: 'Grassland, scrub and mangrove edges on coral islands',
      bn: 'প্রবালদ্বীপের তৃণভূমি, ঝোপঝাড় ও ম্যানগ্রোভের কিনারা',
    },
    habitats: ['grassland', 'mangrove'],
    regions: ['africa'],
    distribution: {
      en: 'Aldabra Atoll in the Seychelles; introduced to other Seychelles islands, Mauritius and Rodrigues.',
      bn: 'সেশেলসের আলদাব্রা প্রবালদ্বীপ; সেশেলসের অন্যান্য দ্বীপ, মরিশাস ও রদ্রিগেসে নিয়ে যাওয়া হয়েছে।',
    },
    climate: { en: 'Hot, tropical island climate with a dry season', bn: 'উষ্ণ ক্রান্তীয় দ্বীপের জলবায়ু; একটি শুষ্ক মৌসুম থাকে' },
    diet: {
      en: 'Herbivore — grasses, herbs, leaves and woody plants; occasionally carrion',
      bn: 'তৃণভোজী — ঘাস, লতাগুল্ম, পাতা ও কাঠল গাছ; মাঝেমধ্যে মৃত প্রাণীও খায়',
    },
    ecologicalRole: {
      en: 'The atoll’s main large herbivore; its grazing creates special “tortoise turf” grasslands and it spreads seeds widely.',
      bn: 'প্রবালদ্বীপের প্রধান বড় তৃণভোজী; এদের চরে খাওয়ায় বিশেষ “টরটয়েজ টার্ফ” ঘাসভূমি তৈরি হয় এবং দূর-দূরান্তে বীজ ছড়ায়।',
    },
    behavior: {
      en: 'Most active in the morning and late afternoon, sheltering in shade or bushes during the midday heat.',
      bn: 'সকালে ও শেষ বিকেলে বেশি সক্রিয়; দুপুরের প্রচণ্ড গরমে ছায়া বা ঝোপে আশ্রয় নেয়।',
    },
    range: {
      native: [
        [-9.42, 46.35],
        [-9.4, 46.2],
        [-9.45, 46.5],
      ],
      introduced: [
        [-4.6, 55.45],
        [-20.3, 57.6],
        [-19.7, 63.4],
      ],
      endemicTo: { en: 'Aldabra Atoll, Seychelles', bn: 'আলদাব্রা প্রবালদ্বীপ, সেশেলস' },
    },
    conservation: {
      status: 'VU',
      trend: 'unknown',
      population: { en: 'Roughly 100,000 on Aldabra', bn: 'আলদাব্রায় আনুমানিক এক লাখ' },
      threats: {
        en: ['Very small natural range vulnerable to sea-level rise', 'Introduced predators and goats competing for food'],
        bn: ['খুবই ছোট প্রাকৃতিক এলাকা, যা সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধিতে ঝুঁকিতে', 'বাইরে থেকে আসা শিকারি প্রাণী ও খাদ্যের প্রতিযোগী ছাগল'],
      },
      initiatives: {
        en: ['Aldabra is a UNESCO World Heritage Site managed by the Seychelles Islands Foundation', 'Use as a “rewilding” replacement for extinct tortoises on Mauritian islands'],
        bn: ['আলদাব্রা ইউনেস্কো বিশ্ব ঐতিহ্য, যা সেশেলস আইল্যান্ডস ফাউন্ডেশন পরিচালনা করে', 'মরিশাসের দ্বীপে বিলুপ্ত কচ্ছপের বদলে “রিওয়াইল্ডিং”-এর জন্য এদের ব্যবহার'],
      },
      assessed: '1996',
    },
    facts: {
      en: ['Jonathan, a Seychelles giant tortoise on St Helena, is often called the oldest known living land animal.', 'Aldabra tortoises have been seen hunting and eating chicks.'],
      bn: ['সেন্ট হেলেনা দ্বীপের সেশেলস দৈত্য কচ্ছপ “জোনাথন”-কে প্রায়ই সবচেয়ে বয়স্ক জীবিত স্থলচর প্রাণী বলা হয়।', 'আলদাব্রার কচ্ছপকে পাখির ছানা ধরে খেতেও দেখা গেছে।'],
    },
    related: ['galapagos-giant-tortoise', 'indian-star-tortoise'],
  },
  {
    id: 'indian-star-tortoise',
    commonName: { en: 'Indian Star Tortoise', bn: 'ভারতীয় তারা কচ্ছপ' },
    scientificName: 'Geochelone elegans',
    altNames: {
      en: ['Star Tortoise'],
      bn: ['তারা কচ্ছপ'],
    },
    category: 'reptiles',
    wikiTitle: 'Indian star tortoise',
    description: {
      en: 'The Indian star tortoise is named for the striking yellow star patterns radiating across each hump of its shell. It lives in dry scrub and grasslands of India, Pakistan and Sri Lanka. Its beauty has made it one of the most smuggled tortoises in the world for the illegal pet trade.',
      bn: 'ভারতীয় তারা কচ্ছপের খোলসের প্রতিটি উঁচু অংশ থেকে হলুদ রেখা তারার মতো ছড়িয়ে থাকে, সেখান থেকেই এই নাম। ভারত, পাকিস্তান ও শ্রীলঙ্কার শুষ্ক ঝোপঝাড় ও তৃণভূমিতে এদের বাস। সৌন্দর্যের কারণেই অবৈধ পোষা প্রাণীর বাজারে এটি পৃথিবীর সবচেয়ে বেশি পাচার হওয়া কচ্ছপগুলোর একটি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Testudines',
      family: 'Testudinidae',
      genus: 'Geochelone',
      species: 'G. elegans',
    },
    physical: {
      size: { en: 'Shell length 15–38 cm (females larger)', bn: 'খোলসের দৈর্ঘ্য ১৫–৩৮ সেমি (স্ত্রী বড়)' },
      weight: { en: 'About 1–7 kg', bn: 'প্রায় ১–৭ কেজি' },
      lifespan: { en: 'Around 30–80 years', bn: 'প্রায় ৩০–৮০ বছর' },
      features: {
        en: ['Black shell with yellow star-shaped rays on each scute', 'Raised, pyramid-like humps on the shell', 'Pattern acts as camouflage among grass and shadows'],
        bn: ['কালো খোলসের প্রতিটি খণ্ডে হলুদ তারার মতো রেখা', 'খোলসে পিরামিডের মতো উঁচু ঢিবি', 'এই নকশা ঘাস ও ছায়ার মাঝে ছদ্মবেশের কাজ করে'],
      },
    },
    habitat: {
      en: 'Dry scrub forest, thorn forest, grassland and field edges',
      bn: 'শুষ্ক ঝোপবন, কাঁটাবন, তৃণভূমি ও খেতের কিনারা',
    },
    habitats: ['grassland', 'desert', 'urban-farmland'],
    regions: ['south-asia'],
    distribution: {
      en: 'North-western and southern India, south-eastern Pakistan and Sri Lanka.',
      bn: 'ভারতের উত্তর-পশ্চিম ও দক্ষিণাঞ্চল, পাকিস্তানের দক্ষিণ-পূর্বাঞ্চল এবং শ্রীলঙ্কা।',
    },
    climate: { en: 'Semi-arid to monsoon tropical', bn: 'আধা-শুষ্ক থেকে মৌসুমি ক্রান্তীয়' },
    diet: {
      en: 'Herbivore — grasses, fallen fruit, flowers and succulent plants',
      bn: 'তৃণভোজী — ঘাস, ঝরে পড়া ফল, ফুল ও রসালো উদ্ভিদ',
    },
    ecologicalRole: {
      en: 'Disperses seeds of fruits and grasses across dry landscapes.',
      bn: 'শুষ্ক এলাকায় ফল ও ঘাসের বীজ ছড়িয়ে দেয়।',
    },
    behavior: {
      en: 'Most active during the monsoon, feeding in the mornings and evenings and resting under bushes in the heat.',
      bn: 'বর্ষাকালে সবচেয়ে সক্রিয়; সকাল-সন্ধ্যায় খায় আর গরমের সময় ঝোপের নিচে বিশ্রাম নেয়।',
    },
    range: {
      native: [
        [23.0, 70.5],
        [26.9, 71.5],
        [15.5, 77.5],
        [11.0, 78.5],
        [8.3, 80.4],
        [24.8, 68.8],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Illegal collection for the international pet trade', 'Loss of scrub habitat to farming and development'],
        bn: ['আন্তর্জাতিক পোষা প্রাণীর বাজারের জন্য অবৈধ সংগ্রহ', 'কৃষি ও উন্নয়নের কারণে ঝোপঝাড়ের আবাসস্থল হারানো'],
      },
      initiatives: {
        en: ['Moved to CITES Appendix I in 2019, banning commercial trade', 'Seizure, rehabilitation and release of trafficked tortoises in India'],
        bn: ['২০১৯ সালে সাইটিস পরিশিষ্ট-১-এ অন্তর্ভুক্ত করে বাণিজ্যিক কেনাবেচা নিষিদ্ধ', 'ভারতে পাচার হওয়া কচ্ছপ জব্দ, পুনর্বাসন ও প্রকৃতিতে অবমুক্তকরণ'],
      },
      assessed: '2016',
    },
    facts: {
      en: ['Its high-domed shell helps it flip back over if turned upside down.', 'Tens of thousands are thought to be poached each year.'],
      bn: ['উঁচু গম্বুজের মতো খোলসের কারণে উল্টে গেলেও সহজে আবার সোজা হতে পারে।', 'ধারণা করা হয়, প্রতিবছর কয়েক হাজার তারা কচ্ছপ চোরাইভাবে ধরা হয়।'],
    },
    related: ['galapagos-giant-tortoise', 'aldabra-giant-tortoise', 'indian-flapshell-turtle'],
  },
  {
    id: 'black-softshell-turtle',
    commonName: { en: 'Black Softshell Turtle', bn: 'বোস্তামী কাছিম' },
    scientificName: 'Nilssonia nigricans',
    altNames: {
      en: ['Bostami Turtle', 'Bostami Softshell'],
      bn: ['বোস্তামীর কাছিম', 'কালো নরম খোলসের কাছিম'],
    },
    synonyms: ['Aspideretes nigricans'],
    category: 'reptiles',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Black softshell turtle',
    description: {
      en: 'The black softshell turtle is famous for the colony living in the pond of the shrine of Sultan Bayazid Bastami in Chattogram, where devotees have fed and protected the turtles for generations. Long believed extinct in the wild, it has since been found in a few rivers and temple ponds in north-eastern India and Bangladesh. It is a large freshwater turtle with a soft, leathery shell.',
      bn: 'বোস্তামী কাছিম সবচেয়ে বেশি পরিচিত চট্টগ্রামের হযরত বায়েজিদ বোস্তামীর (রহ.) মাজারের পুকুরের জন্য, যেখানে ভক্তরা প্রজন্মের পর প্রজন্ম ধরে এদের খাওয়ায় ও রক্ষা করে আসছে। দীর্ঘদিন একে বন্য পরিবেশে বিলুপ্ত মনে করা হলেও পরে উত্তর-পূর্ব ভারত ও বাংলাদেশের কয়েকটি নদী ও মন্দির-পুকুরে এদের পাওয়া গেছে। এটি নরম, চামড়ার মতো খোলসওয়ালা একটি বড় মিঠাপানির কাছিম।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Testudines',
      family: 'Trionychidae',
      genus: 'Nilssonia',
      species: 'N. nigricans',
    },
    physical: {
      size: { en: 'Shell length up to about 90 cm', bn: 'খোলসের দৈর্ঘ্য প্রায় ৯০ সেমি পর্যন্ত' },
      weight: { en: 'Large adults can exceed 50 kg', bn: 'বড় প্রাপ্তবয়স্ক ৫০ কেজিরও বেশি হতে পারে' },
      lifespan: { en: 'Probably several decades; shrine turtles are said to be very old', bn: 'সম্ভবত কয়েক দশক; মাজারের কাছিমগুলো অনেক পুরোনো বলে কথিত' },
      features: {
        en: ['Flat, leathery, dark grey-black shell without hard scutes', 'Long, snorkel-like snout', 'Young have yellowish spots on the head that fade with age'],
        bn: ['শক্ত আঁশবিহীন, চ্যাপ্টা ও চামড়ার মতো গাঢ় ধূসর-কালো খোলস', 'স্নরকেলের মতো লম্বা নাক', 'বাচ্চাদের মাথায় হলদেটে ছোপ থাকে, বয়সের সঙ্গে মিলিয়ে যায়'],
      },
    },
    habitat: {
      en: 'Rivers, wetlands and temple or shrine ponds',
      bn: 'নদী, জলাভূমি এবং মন্দির বা মাজারের পুকুর',
    },
    habitats: ['rivers-lakes', 'wetland'],
    regions: ['south-asia'],
    distribution: {
      en: 'Chattogram and Sylhet regions of Bangladesh and the Brahmaputra basin in Assam, India.',
      bn: 'বাংলাদেশের চট্টগ্রাম ও সিলেট অঞ্চল এবং ভারতের আসামের ব্রহ্মপুত্র অববাহিকা।',
    },
    climate: { en: 'Humid tropical monsoon', bn: 'আর্দ্র ক্রান্তীয় মৌসুমি' },
    diet: {
      en: 'Omnivore — fish, snails, carrion and plant matter; shrine turtles eat food offered by visitors',
      bn: 'সর্বভুক — মাছ, শামুক, মৃত প্রাণী ও উদ্ভিদ; মাজারের কাছিমেরা দর্শনার্থীদের দেওয়া খাবার খায়',
    },
    ecologicalRole: {
      en: 'A scavenger and predator that helps keep rivers and ponds clean of carcasses.',
      bn: 'মৃতভোজী ও শিকারি হিসেবে নদী ও পুকুর থেকে মৃতদেহ সরিয়ে পানি পরিষ্কার রাখতে সাহায্য করে।',
    },
    behavior: {
      en: 'Spends most time in water, basking on banks; at the Bostami shrine turtles come to the steps when called to be fed.',
      bn: 'বেশির ভাগ সময় পানিতে কাটায়, পাড়ে উঠে রোদ পোহায়; বোস্তামীর মাজারে ডাক শুনে খাবারের জন্য সিঁড়ির কাছে চলে আসে।',
    },
    range: {
      native: [
        [22.39, 91.83],
        [24.9, 91.87],
        [26.15, 91.75],
        [26.7, 92.8],
      ],
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      threats: {
        en: ['Hunting for meat and traditional medicine', 'Pollution and poor water quality in shrine ponds', 'Loss of natural nesting banks'],
        bn: ['মাংস ও প্রথাগত ওষুধের জন্য শিকার', 'মাজারের পুকুরে দূষণ ও পানির নিম্নমান', 'প্রাকৃতিক ডিম পাড়ার পাড় হারিয়ে যাওয়া'],
      },
      initiatives: {
        en: ['Egg collection and hatching at the Bostami shrine with conservation groups', 'Head-starting and release in Assam temple ponds and rivers'],
        bn: ['সংরক্ষণ সংস্থার সহায়তায় বোস্তামীর মাজারে ডিম সংগ্রহ ও ফোটানো', 'আসামের মন্দির-পুকুর ও নদীতে বাচ্চা লালন করে অবমুক্তকরণ'],
      },
      assessed: '2021',
    },
    facts: {
      en: ['Local tradition holds that the turtles are the descendants of people cursed by the saint.', 'For decades the shrine pond was thought to hold the entire world population.'],
      bn: ['স্থানীয় লোককথা অনুযায়ী, এই কাছিমেরা হযরত বায়েজিদ বোস্তামীর অভিশাপে রূপান্তরিত মানুষের বংশধর।', 'কয়েক দশক ধরে মনে করা হতো, মাজারের পুকুরেই পৃথিবীর সব বোস্তামী কাছিম আছে।'],
    },
    related: ['indian-flapshell-turtle', 'northern-river-terrapin', 'mugger-crocodile'],
  },
  {
    id: 'northern-river-terrapin',
    commonName: { en: 'Northern River Terrapin', bn: 'বাটাগুর কাছিম' },
    scientificName: 'Batagur baska',
    altNames: {
      en: ['River Terrapin', 'Batagur Baska', 'Four-toed Terrapin'],
      bn: ['বাটাগুর বাসকা', 'কাইট্টা', 'নদীর কাছিম'],
    },
    category: 'reptiles',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Northern river terrapin',
    description: {
      en: 'The northern river terrapin is one of the most endangered turtles in the world, found in the tidal rivers and mangroves of the Sundarbans and Myanmar. Breeding males turn a striking black with a crimson-white head during the mating season. In Bangladesh, a captive-breeding programme at Bhawal National Park and the Sundarbans has rescued the species from the brink.',
      bn: 'বাটাগুর কাছিম পৃথিবীর সবচেয়ে বিপন্ন কাছিমগুলোর একটি; সুন্দরবন ও মিয়ানমারের জোয়ার-ভাটার নদী ও ম্যানগ্রোভে এদের বাস। প্রজনন মৌসুমে পুরুষ কাছিমের শরীর কালো আর মাথা লাল-সাদা রঙের হয়ে যায়। বাংলাদেশে গাজীপুরের ভাওয়াল জাতীয় উদ্যান ও সুন্দরবনের করমজলে প্রজনন কর্মসূচির মাধ্যমে প্রজাতিটিকে বিলুপ্তির কিনারা থেকে ফিরিয়ে আনা হচ্ছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Testudines',
      family: 'Geoemydidae',
      genus: 'Batagur',
      species: 'B. baska',
    },
    physical: {
      size: { en: 'Shell length up to about 60 cm', bn: 'খোলসের দৈর্ঘ্য প্রায় ৬০ সেমি পর্যন্ত' },
      weight: { en: 'Up to about 18–25 kg', bn: 'প্রায় ১৮–২৫ কেজি পর্যন্ত' },
      lifespan: { en: 'Several decades; probably 40 years or more', bn: 'কয়েক দশক; সম্ভবত ৪০ বছর বা তারও বেশি' },
      features: {
        en: ['Only four claws on the front feet', 'Upturned, pointed snout', 'Breeding males turn black with a red or white head and neck'],
        bn: ['সামনের পায়ে মাত্র চারটি নখ', 'ওপরের দিকে বাঁকা, সুচালো নাক', 'প্রজনন মৌসুমে পুরুষের শরীর কালো আর মাথা-গলা লাল বা সাদা হয়'],
      },
    },
    habitat: {
      en: 'Tidal rivers, estuaries and mangrove creeks; nests on sandy riverbanks and beaches',
      bn: 'জোয়ার-ভাটার নদী, মোহনা ও ম্যানগ্রোভের খাল; বালুময় নদীতীর ও সৈকতে ডিম পাড়ে',
    },
    habitats: ['mangrove', 'rivers-lakes'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'The Sundarbans of Bangladesh and India, Odisha, and Myanmar.',
      bn: 'বাংলাদেশ ও ভারতের সুন্দরবন, ওড়িশা এবং মিয়ানমার।',
    },
    climate: { en: 'Hot, humid tropical monsoon', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় মৌসুমি' },
    diet: {
      en: 'Omnivore — mangrove fruits and leaves, plants, clams, snails and small fish',
      bn: 'সর্বভুক — ম্যানগ্রোভের ফল ও পাতা, জলজ উদ্ভিদ, ঝিনুক, শামুক ও ছোট মাছ',
    },
    ecologicalRole: {
      en: 'Disperses mangrove seeds and cycles nutrients in estuarine food webs.',
      bn: 'ম্যানগ্রোভের বীজ ছড়ায় এবং মোহনার খাদ্যজালে পুষ্টি চক্রে ভূমিকা রাখে।',
    },
    behavior: {
      en: 'Migrates upstream or to coastal sandbanks to nest in the dry season, laying clutches of around 20–35 eggs.',
      bn: 'শুষ্ক মৌসুমে ডিম পাড়তে উজানে বা উপকূলের বালুচরে যায় এবং একবারে প্রায় ২০–৩৫টি ডিম পাড়ে।',
    },
    range: {
      native: [
        [22.0, 89.6],
        [21.9, 88.8],
        [20.3, 86.7],
        [16.2, 95.0],
      ],
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      threats: {
        en: ['Collection of eggs and adults for food and trade', 'Loss of nesting beaches and sandbanks', 'Drowning in fishing nets'],
        bn: ['খাবার ও বাণিজ্যের জন্য ডিম ও প্রাপ্তবয়স্ক কাছিম সংগ্রহ', 'ডিম পাড়ার সৈকত ও বালুচর হারানো', 'মাছ ধরার জালে আটকে ডুবে মারা যাওয়া'],
      },
      initiatives: {
        en: ['Captive breeding at Bhawal National Park and Karamjal in Bangladesh, led by the Forest Department with conservation partners', 'Release of head-started juveniles into the Sundarbans'],
        bn: ['বন বিভাগ ও সংরক্ষণ সহযোগীদের উদ্যোগে ভাওয়াল জাতীয় উদ্যান ও করমজলে আবদ্ধ প্রজনন', 'লালন করা বাচ্চা কাছিম সুন্দরবনে অবমুক্তকরণ'],
      },
    },
    facts: {
      en: ['In 2008 only a handful of these turtles were known in Bangladesh — some found in a village pond.', 'It has become the flagship species of turtle conservation in the Sundarbans.'],
      bn: ['২০০৮ সালে বাংলাদেশে হাতে গোনা কয়েকটি বাটাগুর কাছিমের খোঁজ মিলেছিল — কয়েকটি পাওয়া গিয়েছিল গ্রামের পুকুরে।', 'সুন্দরবনের কাছিম সংরক্ষণের প্রতীক হয়ে উঠেছে এই প্রজাতি।'],
    },
    related: ['black-softshell-turtle', 'saltwater-crocodile', 'royal-bengal-tiger'],
  },
  {
    id: 'indian-flapshell-turtle',
    commonName: { en: 'Indian Flapshell Turtle', bn: 'শুনধি কাছিম' },
    scientificName: 'Lissemys punctata',
    altNames: {
      en: ['Flapshell Turtle', 'Spotted Flapshell Turtle'],
      bn: ['সুন্দি কাছিম', 'ঢাকনা-খোলসের কাছিম'],
    },
    category: 'reptiles',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Indian flapshell turtle',
    description: {
      en: 'The Indian flapshell turtle is one of the most common freshwater turtles of Bangladesh, living in ponds, ditches, rice fields and rivers. Flaps of skin on the underside of its shell can close over its hind legs for protection. It survives the dry season by burying itself in mud until the rains return.',
      bn: 'শুনধি কাছিম বাংলাদেশের সবচেয়ে পরিচিত মিঠাপানির কাছিমগুলোর একটি; পুকুর, ডোবা, ধানক্ষেত ও নদীতে এদের দেখা যায়। খোলসের নিচের দিকে চামড়ার ঢাকনা থাকে, যা দিয়ে পেছনের পা ঢেকে আত্মরক্ষা করতে পারে। শুকনো মৌসুমে কাদার নিচে ঢুকে বৃষ্টি না আসা পর্যন্ত এভাবে টিকে থাকে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Testudines',
      family: 'Trionychidae',
      genus: 'Lissemys',
      species: 'L. punctata',
    },
    physical: {
      size: { en: 'Shell length usually 20–35 cm', bn: 'খোলসের দৈর্ঘ্য সাধারণত ২০–৩৫ সেমি' },
      weight: { en: 'Usually 1–3 kg', bn: 'সাধারণত ১–৩ কেজি' },
      lifespan: { en: 'Probably 20–30 years or more', bn: 'সম্ভবত ২০–৩০ বছর বা তারও বেশি' },
      features: {
        en: ['Soft, rounded olive-green shell, often with yellow spots', 'Hinged flaps on the lower shell cover the hind limbs', 'Pointed snout used like a snorkel'],
        bn: ['নরম, গোলাকার জলপাই-সবুজ খোলস, প্রায়ই হলুদ ছোপসহ', 'নিচের খোলসে কব্জার মতো ঢাকনা, যা পেছনের পা ঢেকে রাখে', 'স্নরকেলের মতো ব্যবহৃত সুচালো নাক'],
      },
    },
    habitat: {
      en: 'Ponds, ditches, rice paddies, canals and slow rivers',
      bn: 'পুকুর, ডোবা, ধানক্ষেত, খাল ও ধীরগতির নদী',
    },
    habitats: ['rivers-lakes', 'wetland', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Bangladesh, India, Pakistan, Nepal, Sri Lanka and Myanmar.',
      bn: 'বাংলাদেশ, ভারত, পাকিস্তান, নেপাল, শ্রীলঙ্কা ও মিয়ানমার।',
    },
    climate: { en: 'Tropical and subtropical monsoon', bn: 'ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি' },
    diet: {
      en: 'Omnivore — snails, frogs, fish, insects, carrion and aquatic plants',
      bn: 'সর্বভুক — শামুক, ব্যাঙ, মাছ, পোকামাকড়, মৃত প্রাণী ও জলজ উদ্ভিদ',
    },
    ecologicalRole: {
      en: 'Cleans ponds and paddies by eating carrion and controls snails and insects.',
      bn: 'মৃত প্রাণী খেয়ে পুকুর ও ধানক্ষেত পরিষ্কার রাখে এবং শামুক ও পোকামাকড়ের সংখ্যা নিয়ন্ত্রণ করে।',
    },
    behavior: {
      en: 'Aestivates buried in mud in the dry season and can travel overland between waterbodies after rain.',
      bn: 'শুষ্ক মৌসুমে কাদায় পুঁতে থেকে গ্রীষ্মনিদ্রা যায় এবং বৃষ্টির পর ডাঙা দিয়ে এক জলাশয় থেকে আরেক জলাশয়ে চলে যায়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [24.9, 91.9],
        [25.6, 85.1],
        [19.0, 73.0],
        [7.9, 80.7],
        [16.8, 96.2],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'unknown',
      threats: {
        en: ['Heavy harvest for meat in South Asian markets', 'Illegal international trade', 'Pesticides and loss of wetlands'],
        bn: ['দক্ষিণ এশিয়ার বাজারে মাংসের জন্য ব্যাপক শিকার', 'অবৈধ আন্তর্জাতিক বাণিজ্য', 'কীটনাশক ও জলাভূমি হারানো'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II', 'Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012'],
        bn: ['সাইটিস পরিশিষ্ট-২-এ তালিকাভুক্ত', 'বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন ২০১২-এর আওতায় সুরক্ষিত'],
      },
    },
    facts: {
      en: ['It is one of the most widely traded turtles in South Asia, despite legal protection.', 'Its eggs are hard-shelled, unlike those of many other softshell turtles.'],
      bn: ['আইনি সুরক্ষা থাকা সত্ত্বেও দক্ষিণ এশিয়ায় সবচেয়ে বেশি কেনাবেচা হওয়া কাছিমগুলোর একটি এটি।', 'অন্য অনেক নরম-খোলসের কাছিমের বিপরীতে এদের ডিমের খোসা শক্ত।'],
    },
    related: ['black-softshell-turtle', 'northern-river-terrapin', 'indian-star-tortoise'],
  },
  {
    id: 'alligator-snapping-turtle',
    commonName: { en: 'Alligator Snapping Turtle', bn: 'অ্যালিগেটর স্ন্যাপিং কচ্ছপ' },
    scientificName: 'Macrochelys temminckii',
    altNames: {
      en: ['Alligator Snapper', 'Loggerhead Snapper'],
      bn: ['অ্যালিগেটর স্ন্যাপার', 'কামড়ানো কচ্ছপ'],
    },
    synonyms: ['Macroclemys temminckii'],
    category: 'reptiles',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Alligator snapping turtle',
    description: {
      en: 'The alligator snapping turtle is one of the heaviest freshwater turtles in the world, with a massive head, hooked beak and three rows of spiky ridges on its shell. It lies motionless on river bottoms with its mouth open, wiggling a pink, worm-like tongue lure to attract fish. It lives in rivers draining into the Gulf of Mexico in the south-eastern United States.',
      bn: 'অ্যালিগেটর স্ন্যাপিং কচ্ছপ পৃথিবীর সবচেয়ে ভারী মিঠাপানির কচ্ছপগুলোর একটি; বিশাল মাথা, বাঁকানো ঠোঁট আর খোলসে তিন সারি কাঁটার মতো উঁচু শিরা এদের বৈশিষ্ট্য। নদীর তলায় মুখ হাঁ করে নিশ্চল পড়ে থাকে এবং কেঁচোর মতো দেখতে গোলাপি জিহ্বা নাড়িয়ে মাছকে প্রলুব্ধ করে। যুক্তরাষ্ট্রের দক্ষিণ-পূর্বাঞ্চলে মেক্সিকো উপসাগরে গিয়ে পড়া নদীগুলোতে এদের বাস।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Testudines',
      family: 'Chelydridae',
      genus: 'Macrochelys',
      species: 'M. temminckii',
    },
    physical: {
      size: { en: 'Shell length usually 35–80 cm', bn: 'খোলসের দৈর্ঘ্য সাধারণত ৩৫–৮০ সেমি' },
      weight: { en: 'Males commonly 40–80 kg; exceptional individuals over 100 kg', bn: 'পুরুষ সাধারণত ৪০–৮০ কেজি; ব্যতিক্রমী কিছু ১০০ কেজির বেশি' },
      lifespan: { en: 'Often 45–70 years; possibly over 100', bn: 'প্রায়ই ৪৫–৭০ বছর; সম্ভবত ১০০ বছরেরও বেশি' },
      features: {
        en: ['Three rows of tall, pointed ridges along the shell', 'Huge head with a sharply hooked beak', 'Pink, worm-shaped lure on the tongue'],
        bn: ['খোলস বরাবর তিন সারি উঁচু, সুচালো শিরা', 'তীক্ষ্ণভাবে বাঁকানো ঠোঁটসহ বিশাল মাথা', 'জিহ্বায় কেঁচোর মতো গোলাপি টোপ'],
      },
    },
    habitat: {
      en: 'Deep rivers, oxbow lakes, bayous and swamps',
      bn: 'গভীর নদী, অশ্বক্ষুরাকৃতি হ্রদ, বেয়ু ও জলাভূমি',
    },
    habitats: ['rivers-lakes', 'wetland'],
    regions: ['north-america'],
    distribution: {
      en: 'South-eastern United States, mainly in the Mississippi basin and other Gulf Coast rivers.',
      bn: 'যুক্তরাষ্ট্রের দক্ষিণ-পূর্বাঞ্চল — মূলত মিসিসিপি অববাহিকা ও মেক্সিকো উপসাগর উপকূলের অন্যান্য নদী।',
    },
    climate: { en: 'Warm temperate to subtropical', bn: 'উষ্ণ নাতিশীতোষ্ণ থেকে উপক্রান্তীয়' },
    diet: {
      en: 'Omnivore — fish, mussels, snails, crayfish, other turtles, carrion and fallen nuts and fruit',
      bn: 'সর্বভুক — মাছ, ঝিনুক, শামুক, চিংড়িজাতীয় প্রাণী, অন্য কচ্ছপ, মৃত প্রাণী এবং ঝরে পড়া বাদাম ও ফল',
    },
    ecologicalRole: {
      en: 'A top predator and scavenger of southern rivers that also disperses seeds of riverside trees.',
      bn: 'দক্ষিণাঞ্চলের নদীর শীর্ষ শিকারি ও মৃতভোজী; নদীতীরের গাছের বীজও ছড়িয়ে দেয়।',
    },
    behavior: {
      en: 'Almost entirely aquatic and can stay underwater for 40–50 minutes; only females leave the water, to nest.',
      bn: 'প্রায় পুরোপুরি জলচর এবং ৪০–৫০ মিনিট পানির নিচে থাকতে পারে; শুধু স্ত্রী কচ্ছপ ডিম পাড়তে ডাঙায় ওঠে।',
    },
    range: {
      native: [
        [31.0, -91.5],
        [34.5, -92.0],
        [30.5, -87.5],
        [30.4, -84.3],
        [36.5, -89.5],
        [30.3, -94.0],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Past commercial harvest for turtle soup', 'Illegal collection for the pet trade', 'Dams and river channelisation'],
        bn: ['অতীতে কচ্ছপের স্যুপের জন্য বাণিজ্যিক শিকার', 'পোষা প্রাণীর বাজারের জন্য অবৈধ সংগ্রহ', 'বাঁধ ও নদীর গতিপথ সোজা করা'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II and protected in most US states', 'Head-starting and reintroduction programmes in several states'],
        bn: ['সাইটিস পরিশিষ্ট-২-এ তালিকাভুক্ত এবং যুক্তরাষ্ট্রের বেশির ভাগ অঙ্গরাজ্যে সুরক্ষিত', 'কয়েকটি অঙ্গরাজ্যে বাচ্চা লালন ও পুনঃপ্রবর্তন কর্মসূচি'],
      },
    },
    facts: {
      en: ['Its bite is powerful enough to cut through thick sticks — keep fingers away.', 'Algae often grow on its shell, adding to its camouflage.'],
      bn: ['এদের কামড় মোটা লাঠিও কেটে ফেলার মতো শক্তিশালী — আঙুল দূরে রাখাই ভালো।', 'খোলসে প্রায়ই শ্যাওলা জন্মায়, যা ছদ্মবেশকে আরও নিখুঁত করে।'],
    },
    related: ['american-alligator', 'indian-flapshell-turtle'],
  },
];
