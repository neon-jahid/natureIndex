import type { Species } from '@/types';

export const reptilesTurtlesCroc1: Species[] = [
  {
    id: 'mugger-crocodile',
    commonName: { en: 'Mugger Crocodile', bn: 'মিঠাপানির কুমির' },
    scientificName: 'Crocodylus palustris',
    altNames: {
      en: ['Mugger', 'Marsh Crocodile', 'Broad-snouted Crocodile'],
      bn: ['মাগার কুমির', 'জলাভূমির কুমির', 'খানজাহান আলীর কুমির'],
    },
    category: 'reptiles',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Mugger crocodile',
    description: {
      en: 'The mugger is a medium-sized, broad-snouted crocodile of rivers, lakes and marshes across the Indian subcontinent. It is a hardy generalist that even lives in reservoirs and village ponds, and can walk long distances overland between waterbodies. In Bangladesh it is nearly gone from the wild, but the famous crocodiles of Khan Jahan Ali’s dighi in Bagerhat belong to this species.',
      bn: 'মিঠাপানির কুমির বা মাগার ভারতীয় উপমহাদেশের নদী, হ্রদ ও জলাভূমির একটি মাঝারি আকারের, চওড়া মুখের কুমির। এরা খুবই সহনশীল — জলাধার, এমনকি গ্রামের পুকুরেও টিকে থাকতে পারে এবং এক জলাশয় থেকে আরেক জলাশয়ে ডাঙা দিয়ে অনেক দূর হেঁটে যায়। বাংলাদেশের বন্য পরিবেশ থেকে এরা প্রায় হারিয়ে গেছে, তবে বাগেরহাটে খানজাহান আলীর দিঘির বিখ্যাত কুমিরগুলো এই প্রজাতিরই।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Crocodilia',
      family: 'Crocodylidae',
      genus: 'Crocodylus',
      species: 'C. palustris',
    },
    physical: {
      size: { en: 'Usually 2–3.5 m; large males up to about 4.5 m', bn: 'সাধারণত ২–৩.৫ মিটার; বড় পুরুষ প্রায় ৪.৫ মিটার পর্যন্ত' },
      weight: { en: 'Adults commonly 40–200 kg; big males heavier', bn: 'প্রাপ্তবয়স্ক সাধারণত ৪০–২০০ কেজি; বড় পুরুষ আরও ভারী' },
      lifespan: { en: 'Around 40–60 years', bn: 'প্রায় ৪০–৬০ বছর' },
      features: {
        en: ['Very broad, short snout — the widest of any living crocodile', 'Olive to grey-brown body with darker cross-bands in young', 'Heavy bony scutes on the neck and back'],
        bn: ['খুব চওড়া ও খাটো মুখ — জীবিত কুমিরদের মধ্যে সবচেয়ে চওড়া', 'জলপাই থেকে ধূসর-বাদামি দেহ; বাচ্চাদের গায়ে গাঢ় আড়াআড়ি দাগ', 'ঘাড় ও পিঠে মোটা হাড়ের আঁশ'],
      },
    },
    habitat: {
      en: 'Slow rivers, lakes, marshes, reservoirs and large ponds',
      bn: 'ধীরগতির নদী, হ্রদ, জলাভূমি, জলাধার ও বড় পুকুর',
    },
    habitats: ['rivers-lakes', 'wetland'],
    regions: ['south-asia'],
    distribution: {
      en: 'India, Sri Lanka, Pakistan, Nepal and Iran; extinct or nearly so in Bangladesh and Bhutan.',
      bn: 'ভারত, শ্রীলঙ্কা, পাকিস্তান, নেপাল ও ইরান; বাংলাদেশ ও ভুটানে বন্য অবস্থায় বিলুপ্ত বা প্রায় বিলুপ্ত।',
    },
    climate: { en: 'Tropical and subtropical, tolerating hot dry seasons', bn: 'ক্রান্তীয় ও উপক্রান্তীয়; গরম শুষ্ক মৌসুমও সহ্য করতে পারে' },
    diet: {
      en: 'Carnivore — fish, frogs, snakes, birds, and mammals up to the size of deer',
      bn: 'মাংসাশী — মাছ, ব্যাঙ, সাপ, পাখি এবং হরিণের মতো আকারের স্তন্যপায়ী প্রাণী',
    },
    ecologicalRole: {
      en: 'A top predator and scavenger of wetlands that removes sick animals and carcasses and helps keep fish populations healthy.',
      bn: 'জলাভূমির শীর্ষ শিকারি ও মৃতভোজী হিসেবে অসুস্থ প্রাণী ও মৃতদেহ সরিয়ে দেয় এবং মাছের জনগোষ্ঠী সুস্থ রাখতে সাহায্য করে।',
    },
    behavior: {
      en: 'Basks for long hours, digs burrows to escape heat and drought, and has been seen balancing sticks on its snout near egret nesting sites.',
      bn: 'দীর্ঘ সময় রোদ পোহায়, গরম ও খরা থেকে বাঁচতে গর্ত খোঁড়ে; বকের বাসার কাছে মুখের ওপর কাঠি রেখে ফাঁদ পাততেও দেখা গেছে।',
    },
    range: {
      native: [
        [22.67, 89.75],
        [23.0, 72.6],
        [26.4, 77.0],
        [7.3, 81.5],
        [27.6, 84.3],
        [25.4, 68.4],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Loss and drainage of wetlands', 'Drowning in fishing nets', 'Conflict with people and livestock'],
        bn: ['জলাভূমি ভরাট ও শুকিয়ে ফেলা', 'মাছ ধরার জালে আটকে ডুবে মারা যাওয়া', 'মানুষ ও গবাদিপশুর সঙ্গে সংঘাত'],
      },
      initiatives: {
        en: ['Legal protection under wildlife laws in India and Bangladesh', 'Captive breeding and restocking programmes in India'],
        bn: ['ভারত ও বাংলাদেশের বন্যপ্রাণী আইনে সুরক্ষা', 'ভারতে আবদ্ধ প্রজনন ও প্রকৃতিতে অবমুক্তকরণ কর্মসূচি'],
      },
      assessed: '2013',
    },
    facts: {
      en: ['The name “mugger” comes from the Hindi–Urdu word “magar”, meaning water monster.', 'Muggers are one of the few reptiles recorded using tools as lures.'],
      bn: ['“মাগার” নামটি এসেছে হিন্দি–উর্দু “মগর” শব্দ থেকে, যার অর্থ জলদানব।', 'শিকার ধরতে টোপ হিসেবে কাঠি ব্যবহার করে — এমন হাতে গোনা সরীসৃপের একটি এরা।'],
    },
    related: ['gharial', 'saltwater-crocodile', 'false-gharial'],
  },
  {
    id: 'saltwater-crocodile',
    commonName: { en: 'Saltwater Crocodile', bn: 'লোনাপানির কুমির' },
    scientificName: 'Crocodylus porosus',
    altNames: {
      en: ['Estuarine Crocodile', 'Saltie', 'Indo-Pacific Crocodile'],
      bn: ['নোনাপানির কুমির', 'মোহনার কুমির', 'সুন্দরবনের কুমির'],
    },
    category: 'reptiles',
    secondaryCategories: ['marine'],
    wikiTitle: 'Saltwater crocodile',
    description: {
      en: 'The saltwater crocodile is the largest living reptile, with old males exceeding 6 m. It lives in mangroves, estuaries and coastal rivers from India to northern Australia, and can travel across open sea between islands. In Bangladesh it survives in the rivers and creeks of the Sundarbans.',
      bn: 'লোনাপানির কুমির পৃথিবীর সবচেয়ে বড় জীবিত সরীসৃপ; বয়স্ক পুরুষ ৬ মিটারেরও বেশি লম্বা হতে পারে। ভারত থেকে উত্তর অস্ট্রেলিয়া পর্যন্ত ম্যানগ্রোভ, মোহনা ও উপকূলীয় নদীতে এদের বাস, এমনকি খোলা সাগর পাড়ি দিয়ে এক দ্বীপ থেকে আরেক দ্বীপে যেতে পারে। বাংলাদেশে সুন্দরবনের নদী ও খালে এরা এখনো টিকে আছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Crocodilia',
      family: 'Crocodylidae',
      genus: 'Crocodylus',
      species: 'C. porosus',
    },
    physical: {
      size: { en: 'Males usually 4.5–6 m, occasionally more; females 2.5–3.5 m', bn: 'পুরুষ সাধারণত ৪.৫–৬ মিটার, কখনো আরও বড়; স্ত্রী ২.৫–৩.৫ মিটার' },
      weight: { en: 'Large males 400–1,000 kg or more', bn: 'বড় পুরুষ ৪০০–১,০০০ কেজি বা তারও বেশি' },
      lifespan: { en: 'Commonly 60–70 years; possibly longer', bn: 'সাধারণত ৬০–৭০ বছর; সম্ভবত আরও বেশি' },
      features: {
        en: ['Massive head with a pair of ridges running from the eyes down the snout', 'Few or no bony scutes on the back of the neck', 'Salt glands on the tongue let it live in seawater'],
        bn: ['বিশাল মাথা; চোখ থেকে নাক পর্যন্ত এক জোড়া উঁচু শিরা', 'ঘাড়ের পেছনে হাড়ের আঁশ খুব কম বা নেই', 'জিহ্বার লবণ-গ্রন্থির কারণে সমুদ্রের লোনা পানিতেও বাঁচতে পারে'],
      },
    },
    habitat: {
      en: 'Mangrove swamps, estuaries, tidal rivers and coastal waters',
      bn: 'ম্যানগ্রোভ বন, মোহনা, জোয়ার-ভাটার নদী ও উপকূলীয় জলসীমা',
    },
    habitats: ['mangrove', 'rivers-lakes', 'ocean'],
    regions: ['south-asia', 'southeast-asia', 'oceania'],
    distribution: {
      en: 'Eastern India, Bangladesh and Sri Lanka through Southeast Asia to New Guinea and northern Australia.',
      bn: 'পূর্ব ভারত, বাংলাদেশ ও শ্রীলঙ্কা থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে নিউগিনি ও উত্তর অস্ট্রেলিয়া পর্যন্ত।',
    },
    climate: { en: 'Hot, humid tropical coasts', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় উপকূল' },
    diet: {
      en: 'Carnivore — fish, crabs, turtles, birds, monkeys, deer, wild boar and even buffalo',
      bn: 'মাংসাশী — মাছ, কাঁকড়া, কচ্ছপ, পাখি, বানর, হরিণ, বুনো শূকর, এমনকি মহিষও',
    },
    ecologicalRole: {
      en: 'An apex predator of mangrove and estuary ecosystems that regulates prey numbers and recycles nutrients.',
      bn: 'ম্যানগ্রোভ ও মোহনার বাস্তুতন্ত্রের শীর্ষ শিকারি; শিকারের সংখ্যা নিয়ন্ত্রণ করে এবং পুষ্টি উপাদান চক্রে ফিরিয়ে দেয়।',
    },
    behavior: {
      en: 'An ambush hunter that waits submerged at the water’s edge; males are fiercely territorial and can be dangerous to people.',
      bn: 'পানির কিনারে ডুবে থেকে ওত পেতে শিকার ধরে; পুরুষেরা নিজের এলাকা নিয়ে ভীষণ আক্রমণাত্মক এবং মানুষের জন্যও বিপজ্জনক হতে পারে।',
    },
    range: {
      native: [
        [22.0, 89.4],
        [20.7, 86.9],
        [1.5, 110.3],
        [-8.5, 140.5],
        [-12.4, 130.8],
        [-16.5, 145.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Mangrove loss and coastal development', 'Killing after conflicts with people', 'Illegal hunting for skins'],
        bn: ['ম্যানগ্রোভ ধ্বংস ও উপকূলীয় উন্নয়ন', 'মানুষের সঙ্গে সংঘাতের পর হত্যা', 'চামড়ার জন্য অবৈধ শিকার'],
      },
      initiatives: {
        en: ['Karamjal Wildlife Centre in the Sundarbans breeds and releases crocodiles', 'Regulated skin trade and protection in Australia'],
        bn: ['সুন্দরবনের করমজল বন্যপ্রাণী প্রজনন কেন্দ্রে কুমির প্রজনন ও অবমুক্তকরণ', 'অস্ট্রেলিয়ায় সুরক্ষা ও নিয়ন্ত্রিত চামড়া বাণিজ্য'],
      },
      assessed: '2021',
    },
    facts: {
      en: ['It has one of the strongest bites ever measured in any animal.', 'Satellite-tagged saltwater crocodiles have ridden ocean currents for hundreds of kilometres.'],
      bn: ['প্রাণিজগতে মাপা সবচেয়ে শক্তিশালী কামড়গুলোর একটি এদের।', 'স্যাটেলাইট ট্যাগ লাগানো লোনাপানির কুমির সমুদ্রস্রোতে ভেসে শত শত কিলোমিটার পাড়ি দিয়েছে।'],
    },
    related: ['mugger-crocodile', 'nile-crocodile', 'royal-bengal-tiger'],
  },
  {
    id: 'nile-crocodile',
    commonName: { en: 'Nile Crocodile', bn: 'নীলনদের কুমির' },
    scientificName: 'Crocodylus niloticus',
    altNames: {
      en: ['African Crocodile', 'Common Crocodile'],
      bn: ['আফ্রিকার কুমির', 'নাইল কুমির'],
    },
    category: 'reptiles',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Nile crocodile',
    description: {
      en: 'The Nile crocodile is Africa’s largest freshwater predator, found in rivers, lakes and swamps across much of sub-Saharan Africa. It is famous for ambushing wildebeest and zebra at river crossings during the great migrations of East Africa. Females guard their nests and gently carry hatchlings to the water in their jaws.',
      bn: 'নীলনদের কুমির আফ্রিকার মিঠাপানির সবচেয়ে বড় শিকারি; সাহারার দক্ষিণের আফ্রিকার বেশির ভাগ নদী, হ্রদ ও জলাভূমিতে এদের দেখা মেলে। পূর্ব আফ্রিকায় বিশাল পশুপালের অভিবাসনের সময় নদী পার হওয়া ওয়াইল্ডবিস্ট ও জেব্রা ধরার জন্য এরা বিখ্যাত। মা কুমির বাসা পাহারা দেয় এবং ডিম ফুটে বের হওয়া বাচ্চাদের মুখে করে আলতোভাবে পানিতে নিয়ে যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Crocodilia',
      family: 'Crocodylidae',
      genus: 'Crocodylus',
      species: 'C. niloticus',
    },
    physical: {
      size: { en: 'Males usually 3.5–5 m; females 2.5–3.8 m', bn: 'পুরুষ সাধারণত ৩.৫–৫ মিটার; স্ত্রী ২.৫–৩.৮ মিটার' },
      weight: { en: 'Large males 225–750 kg', bn: 'বড় পুরুষ ২২৫–৭৫০ কেজি' },
      lifespan: { en: 'About 50–70 years', bn: 'প্রায় ৫০–৭০ বছর' },
      features: {
        en: ['Dark olive-bronze back with paler yellowish flanks', 'Long, moderately broad snout', 'Interlocking teeth visible when the mouth is closed'],
        bn: ['গাঢ় জলপাই-ব্রোঞ্জ রঙের পিঠ, পাশ ফিকে হলদেটে', 'লম্বা, মাঝারি চওড়া মুখ', 'মুখ বন্ধ থাকলেও খাঁজে খাঁজে বসানো দাঁত দেখা যায়'],
      },
    },
    habitat: {
      en: 'Rivers, lakes, freshwater marshes and occasionally estuaries',
      bn: 'নদী, হ্রদ, মিঠাপানির জলাভূমি এবং কখনো কখনো মোহনা',
    },
    habitats: ['rivers-lakes', 'wetland'],
    regions: ['africa'],
    distribution: {
      en: 'Sub-Saharan Africa, the Nile basin and Madagascar.',
      bn: 'সাহারার দক্ষিণের আফ্রিকা, নীলনদ অববাহিকা ও মাদাগাস্কার।',
    },
    climate: { en: 'Tropical and subtropical, from savanna to rainforest', bn: 'ক্রান্তীয় ও উপক্রান্তীয়; সাভানা থেকে বৃষ্টিবন পর্যন্ত' },
    diet: {
      en: 'Carnivore — mainly fish when young; adults also take antelope, zebra, wildebeest and other large mammals',
      bn: 'মাংসাশী — ছোট অবস্থায় মূলত মাছ; বড় হলে হরিণজাতীয় প্রাণী, জেব্রা, ওয়াইল্ডবিস্টসহ বড় স্তন্যপায়ীও খায়',
    },
    ecologicalRole: {
      en: 'An apex predator and scavenger that shapes the behaviour of animals coming to drink and cleans waterways of carcasses.',
      bn: 'শীর্ষ শিকারি ও মৃতভোজী; পানি খেতে আসা প্রাণীদের আচরণ প্রভাবিত করে এবং জলাশয় থেকে মৃতদেহ পরিষ্কার করে।',
    },
    behavior: {
      en: 'Basks on sandbanks with jaws open to cool down and sometimes hunts cooperatively, herding fish or sharing large kills.',
      bn: 'বালুচরে মুখ হাঁ করে রোদ পোহায় যাতে শরীর ঠান্ডা থাকে; কখনো দল বেঁধে মাছ তাড়িয়ে ধরে বা বড় শিকার ভাগাভাগি করে খায়।',
    },
    range: {
      native: [
        [-2.3, 34.8],
        [3.5, 32.0],
        [-17.9, 25.9],
        [-24.0, 31.5],
        [9.0, -1.0],
        [-19.0, 46.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Habitat loss and dam building', 'Pollution of rivers', 'Persecution due to conflict with people'],
        bn: ['আবাসস্থল ধ্বংস ও বাঁধ নির্মাণ', 'নদীদূষণ', 'মানুষের সঙ্গে সংঘাতের কারণে হত্যা'],
      },
      initiatives: {
        en: ['Protection in national parks such as Kruger and the Serengeti', 'CITES-regulated ranching for sustainable skin trade'],
        bn: ['ক্রুগার ও সেরেঙ্গেটির মতো জাতীয় উদ্যানে সুরক্ষা', 'সাইটিস নিয়ন্ত্রিত খামারভিত্তিক টেকসই চামড়া বাণিজ্য'],
      },
    },
    facts: {
      en: ['Ancient Egyptians worshipped a crocodile-headed god called Sobek.', 'Nest temperature decides whether hatchlings become male or female.'],
      bn: ['প্রাচীন মিসরীয়রা কুমিরের মাথাওয়ালা দেবতা সোবেকের পূজা করত।', 'বাসার তাপমাত্রাই ঠিক করে দেয় বাচ্চা পুরুষ হবে না স্ত্রী।'],
    },
    related: ['saltwater-crocodile', 'mugger-crocodile', 'american-alligator'],
  },
  {
    id: 'american-alligator',
    commonName: { en: 'American Alligator', bn: 'আমেরিকান অ্যালিগেটর' },
    scientificName: 'Alligator mississippiensis',
    altNames: {
      en: ['Alligator', 'Gator', 'Common Alligator'],
      bn: ['অ্যালিগেটর', 'গেটর', 'মার্কিন অ্যালিগেটর'],
    },
    category: 'reptiles',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'American alligator',
    description: {
      en: 'The American alligator is a large crocodilian of freshwater swamps, marshes and rivers in the south-eastern United States. Once hunted close to extinction, it recovered so well under legal protection that it is now one of conservation’s great success stories. Alligators dig “gator holes” that hold water through droughts and become refuges for many other animals.',
      bn: 'আমেরিকান অ্যালিগেটর যুক্তরাষ্ট্রের দক্ষিণ-পূর্বাঞ্চলের মিঠাপানির জলা, বিল ও নদীর একটি বড় কুমিরজাতীয় প্রাণী। একসময় শিকারের ফলে এরা প্রায় বিলুপ্ত হতে বসেছিল, কিন্তু আইনি সুরক্ষায় এদের সংখ্যা এত ভালোভাবে ফিরে এসেছে যে এটি এখন সংরক্ষণের এক বড় সাফল্যের উদাহরণ। এদের খোঁড়া “গেটর হোল” খরার সময়েও পানি ধরে রাখে এবং আরও অনেক প্রাণীর আশ্রয় হয়ে ওঠে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Crocodilia',
      family: 'Alligatoridae',
      genus: 'Alligator',
      species: 'A. mississippiensis',
    },
    physical: {
      size: { en: 'Males 3.4–4.5 m; females about 2.6–3 m', bn: 'পুরুষ ৩.৪–৪.৫ মিটার; স্ত্রী প্রায় ২.৬–৩ মিটার' },
      weight: { en: 'Males commonly 200–450 kg', bn: 'পুরুষ সাধারণত ২০০–৪৫০ কেজি' },
      lifespan: { en: '35–50 years in the wild; longer in captivity', bn: 'বনে ৩৫–৫০ বছর; আবদ্ধ অবস্থায় আরও বেশি' },
      features: {
        en: ['Broad, rounded U-shaped snout', 'Lower teeth hidden when the mouth is closed', 'Dark, almost black armoured back'],
        bn: ['চওড়া, গোলাকার “U” আকৃতির মুখ', 'মুখ বন্ধ থাকলে নিচের চোয়ালের দাঁত ঢাকা পড়ে যায়', 'গাঢ়, প্রায় কালো বর্মের মতো পিঠ'],
      },
    },
    habitat: {
      en: 'Freshwater swamps, marshes, lakes and slow rivers',
      bn: 'মিঠাপানির জলা, বিল, হ্রদ ও ধীরগতির নদী',
    },
    habitats: ['wetland', 'rivers-lakes'],
    regions: ['north-america'],
    distribution: {
      en: 'South-eastern United States, from North Carolina to Texas, with Florida and Louisiana holding the most.',
      bn: 'যুক্তরাষ্ট্রের দক্ষিণ-পূর্বাঞ্চল — নর্থ ক্যারোলাইনা থেকে টেক্সাস পর্যন্ত; ফ্লোরিডা ও লুইজিয়ানায় সবচেয়ে বেশি।',
    },
    climate: { en: 'Warm temperate to subtropical, with cool winters', bn: 'উষ্ণ নাতিশীতোষ্ণ থেকে উপক্রান্তীয়; শীতকাল ঠান্ডা' },
    diet: {
      en: 'Carnivore — fish, turtles, snakes, birds and mammals',
      bn: 'মাংসাশী — মাছ, কচ্ছপ, সাপ, পাখি ও স্তন্যপায়ী প্রাণী',
    },
    ecologicalRole: {
      en: 'A keystone “ecosystem engineer” whose gator holes and nest mounds create habitat for fish, birds and plants.',
      bn: 'একটি মূল “বাস্তুতন্ত্র প্রকৌশলী” প্রজাতি; এদের গেটর হোল ও বাসার ঢিবি মাছ, পাখি ও উদ্ভিদের আবাস তৈরি করে।',
    },
    behavior: {
      en: 'Males bellow loudly in spring; in freezing weather alligators can lie in icy water with just their nostrils poking above the surface.',
      bn: 'বসন্তে পুরুষেরা জোরে গর্জন করে; প্রচণ্ড ঠান্ডায় বরফ জমা পানিতে শুধু নাকের ছিদ্র বাইরে রেখে টিকে থাকতে পারে।',
    },
    range: {
      native: [
        [25.8, -80.9],
        [28.5, -81.5],
        [30.0, -91.5],
        [33.0, -80.0],
        [29.5, -95.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      population: { en: 'Estimated at over 5 million', bn: 'আনুমানিক ৫০ লাখেরও বেশি' },
      threats: {
        en: ['Wetland drainage and urban expansion', 'Pollution and changes to water flow'],
        bn: ['জলাভূমি শুকিয়ে ফেলা ও নগরায়ণ', 'দূষণ ও পানিপ্রবাহের পরিবর্তন'],
      },
      initiatives: {
        en: ['Protection under the US Endangered Species Act (1967) led to recovery', 'Regulated harvest and egg-ranching programmes'],
        bn: ['যুক্তরাষ্ট্রের বিপন্ন প্রজাতি আইনে (১৯৬৭) সুরক্ষার ফলে সংখ্যা পুনরুদ্ধার', 'নিয়ন্ত্রিত শিকার ও ডিমভিত্তিক খামার কর্মসূচি'],
      },
      assessed: '2018',
    },
    facts: {
      en: ['It is the official state reptile of Florida, Louisiana and Mississippi.', 'Alligators can replace each tooth many times over their lives.'],
      bn: ['এটি ফ্লোরিডা, লুইজিয়ানা ও মিসিসিপি অঙ্গরাজ্যের রাষ্ট্রীয় সরীসৃপ।', 'জীবনভর এদের প্রতিটি দাঁত বহুবার নতুন করে গজাতে পারে।'],
    },
    related: ['chinese-alligator', 'black-caiman', 'alligator-snapping-turtle'],
  },
  {
    id: 'chinese-alligator',
    commonName: { en: 'Chinese Alligator', bn: 'চীনা অ্যালিগেটর' },
    scientificName: 'Alligator sinensis',
    altNames: {
      en: ['Yangtze Alligator', 'Tu Long'],
      bn: ['ইয়াংসি অ্যালিগেটর', 'তু লং'],
    },
    category: 'reptiles',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Chinese alligator',
    description: {
      en: 'The Chinese alligator is a small, shy alligator found only in the lower Yangtze River region of eastern China. It is one of the most endangered crocodilians, with only a few hundred left in the wild. It spends winter hibernating in burrows and may have inspired early legends of the Chinese dragon.',
      bn: 'চীনা অ্যালিগেটর একটি ছোট ও লাজুক অ্যালিগেটর, যা কেবল পূর্ব চীনের ইয়াংসি নদীর নিম্ন অববাহিকায় পাওয়া যায়। এটি সবচেয়ে বিপন্ন কুমিরজাতীয় প্রাণীগুলোর একটি — বন্য অবস্থায় মাত্র কয়েকশ টিকে আছে। শীতকালে এরা গর্তে শীতনিদ্রায় কাটায়; ধারণা করা হয়, চীনা ড্রাগনের প্রাচীন কিংবদন্তির পেছনে এদের ভূমিকা থাকতে পারে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Crocodilia',
      family: 'Alligatoridae',
      genus: 'Alligator',
      species: 'A. sinensis',
    },
    physical: {
      size: { en: 'Usually 1.5–2.1 m long', bn: 'সাধারণত ১.৫–২.১ মিটার লম্বা' },
      weight: { en: 'About 35–45 kg', bn: 'প্রায় ৩৫–৪৫ কেজি' },
      lifespan: { en: 'Around 50 years or more', bn: 'প্রায় ৫০ বছর বা তারও বেশি' },
      features: {
        en: ['Short, slightly upturned snout', 'Dark grey-black body with faint yellow bands', 'Bony plates even on the belly, unlike its American cousin'],
        bn: ['খাটো, সামান্য ওপরের দিকে বাঁকা মুখ', 'গাঢ় ধূসর-কালো দেহে হালকা হলুদ ডোরা', 'আমেরিকান আত্মীয়ের বিপরীতে পেটেও হাড়ের পাত'],
      },
    },
    habitat: {
      en: 'Ponds, marshes and slow streams among farmland',
      bn: 'কৃষিজমির মাঝে পুকুর, জলাভূমি ও ধীরগতির খাল',
    },
    habitats: ['wetland', 'rivers-lakes', 'urban-farmland'],
    regions: ['east-asia'],
    distribution: {
      en: 'Endemic to the lower Yangtze basin, mainly Anhui Province, China.',
      bn: 'চীনের ইয়াংসি নদীর নিম্ন অববাহিকায় — মূলত আনহুই প্রদেশে — সীমাবদ্ধ।',
    },
    climate: { en: 'Humid subtropical with cold winters', bn: 'আর্দ্র উপক্রান্তীয়; শীতকাল ঠান্ডা' },
    diet: {
      en: 'Snails, clams, fish, insects and small mammals',
      bn: 'শামুক, ঝিনুক, মাছ, পোকামাকড় ও ছোট স্তন্যপায়ী প্রাণী',
    },
    ecologicalRole: {
      en: 'A wetland predator that controls snails and small animals, and its burrows shelter other creatures.',
      bn: 'জলাভূমির শিকারি হিসেবে শামুক ও ছোট প্রাণীর সংখ্যা নিয়ন্ত্রণ করে; এদের গর্তে অন্য প্রাণীও আশ্রয় পায়।',
    },
    behavior: {
      en: 'Digs complex burrow systems and hibernates from about October to April; mostly active at night in summer.',
      bn: 'জটিল গর্ত-ব্যবস্থা খোঁড়ে এবং মোটামুটি অক্টোবর থেকে এপ্রিল পর্যন্ত শীতনিদ্রায় থাকে; গ্রীষ্মে মূলত রাতে সক্রিয়।',
    },
    range: {
      native: [
        [30.9, 118.7],
        [30.6, 118.4],
        [31.0, 119.2],
      ],
      endemicTo: { en: 'Lower Yangtze River, eastern China', bn: 'পূর্ব চীনের ইয়াংসি নদীর নিম্ন অববাহিকা' },
    },
    conservation: {
      status: 'CR',
      trend: 'unknown',
      threats: {
        en: ['Conversion of wetlands to rice paddies and farms', 'Pesticide poisoning of prey', 'Small, isolated populations'],
        bn: ['জলাভূমিকে ধানক্ষেত ও খামারে রূপান্তর', 'কীটনাশকে শিকার-প্রাণীর বিষক্রিয়া', 'ছোট ও বিচ্ছিন্ন জনগোষ্ঠী'],
      },
      initiatives: {
        en: ['Anhui Chinese Alligator National Nature Reserve and breeding centre', 'Reintroduction of captive-bred alligators to restored wetlands'],
        bn: ['আনহুই চীনা অ্যালিগেটর জাতীয় প্রকৃতি সংরক্ষিত এলাকা ও প্রজনন কেন্দ্র', 'পুনরুদ্ধার করা জলাভূমিতে আবদ্ধ অবস্থায় জন্মানো অ্যালিগেটর অবমুক্তকরণ'],
      },
      assessed: '2017',
    },
    facts: {
      en: ['Captive-breeding centres in China hold many thousands, far more than survive in the wild.', 'Only two living alligator species exist — this one and the American alligator.'],
      bn: ['চীনের প্রজনন কেন্দ্রগুলোতে কয়েক হাজার অ্যালিগেটর আছে — বন্য সংখ্যার চেয়ে অনেক বেশি।', 'পৃথিবীতে জীবিত অ্যালিগেটর মাত্র দুই প্রজাতির — এটি আর আমেরিকান অ্যালিগেটর।'],
    },
    related: ['american-alligator', 'chinese-giant-salamander', 'black-caiman'],
  },
  {
    id: 'black-caiman',
    commonName: { en: 'Black Caiman', bn: 'কালো কেইম্যান' },
    scientificName: 'Melanosuchus niger',
    altNames: {
      en: ['Caiman', 'Jacaré-açu'],
      bn: ['কেইম্যান', 'জাকারে-আসু'],
    },
    category: 'reptiles',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Black caiman',
    description: {
      en: 'The black caiman is the largest member of the alligator family and the top predator of the Amazon basin. Its dark scales help it stay hidden while hunting at night in flooded forests and oxbow lakes. Heavily hunted for leather in the 20th century, it has recovered in many areas since protection.',
      bn: 'কালো কেইম্যান অ্যালিগেটর পরিবারের সবচেয়ে বড় সদস্য এবং আমাজন অববাহিকার শীর্ষ শিকারি। গাঢ় রঙের আঁশের কারণে বন্যাপ্লাবিত বন ও অশ্বক্ষুরাকৃতি হ্রদে রাতে শিকারের সময় এরা সহজে লুকিয়ে থাকতে পারে। বিংশ শতাব্দীতে চামড়ার জন্য ব্যাপক শিকারের পর সুরক্ষার ফলে অনেক এলাকায় এদের সংখ্যা আবার বেড়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Crocodilia',
      family: 'Alligatoridae',
      genus: 'Melanosuchus',
      species: 'M. niger',
    },
    physical: {
      size: { en: 'Males usually 3–4.5 m; occasionally up to 5 m', bn: 'পুরুষ সাধারণত ৩–৪.৫ মিটার; কখনো ৫ মিটার পর্যন্ত' },
      weight: { en: 'Large males 300–400 kg or more', bn: 'বড় পুরুষ ৩০০–৪০০ কেজি বা তারও বেশি' },
      lifespan: { en: 'Probably 50–80 years', bn: 'সম্ভবত ৫০–৮০ বছর' },
      features: {
        en: ['Very dark, almost black skin', 'Pale grey bands on the lower jaw', 'Large eyes adapted for night hunting'],
        bn: ['খুব গাঢ়, প্রায় কালো চামড়া', 'নিচের চোয়ালে ফিকে ধূসর ডোরা', 'রাতে শিকারের উপযোগী বড় চোখ'],
      },
    },
    habitat: {
      en: 'Slow rivers, oxbow lakes, flooded forests and savanna wetlands',
      bn: 'ধীরগতির নদী, অশ্বক্ষুরাকৃতি হ্রদ, বন্যাপ্লাবিত বন ও সাভানার জলাভূমি',
    },
    habitats: ['rivers-lakes', 'wetland', 'tropical-forest'],
    regions: ['south-america'],
    distribution: {
      en: 'Amazon basin of Brazil, Peru, Ecuador, Colombia and Bolivia, and parts of the Guianas.',
      bn: 'ব্রাজিল, পেরু, ইকুয়েডর, কলম্বিয়া ও বলিভিয়ার আমাজন অববাহিকা এবং গায়ানা অঞ্চলের কিছু অংশ।',
    },
    climate: { en: 'Hot, wet equatorial', bn: 'উষ্ণ ও আর্দ্র নিরক্ষীয়' },
    diet: {
      en: 'Carnivore — fish including piranhas, capybaras, turtles, birds and other caimans',
      bn: 'মাংসাশী — পিরানহাসহ নানা মাছ, ক্যাপিবারা, কচ্ছপ, পাখি ও অন্য কেইম্যান',
    },
    ecologicalRole: {
      en: 'Its droppings fertilise nutrient-poor Amazon lakes, supporting plankton and fish stocks.',
      bn: 'এদের মল পুষ্টিহীন আমাজনের হ্রদে সার হিসেবে কাজ করে, ফলে প্ল্যাংকটন ও মাছের উৎপাদন বাড়ে।',
    },
    behavior: {
      en: 'Mainly nocturnal; females build mound nests of vegetation and guard them for weeks.',
      bn: 'মূলত নিশাচর; স্ত্রী কেইম্যান লতাপাতা দিয়ে ঢিবির মতো বাসা বানায় এবং সপ্তাহের পর সপ্তাহ পাহারা দেয়।',
    },
    range: {
      native: [
        [-3.1, -60.0],
        [-2.5, -65.0],
        [-4.5, -73.5],
        [-12.5, -69.0],
        [-1.0, -52.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'increasing',
      threats: {
        en: ['Illegal hunting for meat and skins', 'Deforestation and dams in the Amazon'],
        bn: ['মাংস ও চামড়ার জন্য অবৈধ শিকার', 'আমাজনে বন উজাড় ও বাঁধ নির্মাণ'],
      },
      initiatives: {
        en: ['Protection in reserves such as Mamirauá in Brazil', 'Community-based sustainable management programmes'],
        bn: ['ব্রাজিলের মামিরাউয়ার মতো সংরক্ষিত এলাকায় সুরক্ষা', 'স্থানীয় জনগোষ্ঠীভিত্তিক টেকসই ব্যবস্থাপনা কর্মসূচি'],
      },
    },
    facts: {
      en: ['It is one of the largest predators in South America.', 'When caimans were hunted out of some lakes, fish catches fell because the lakes lost nutrients.'],
      bn: ['এটি দক্ষিণ আমেরিকার সবচেয়ে বড় শিকারি প্রাণীদের একটি।', 'কিছু হ্রদ থেকে কেইম্যান শিকার করে শেষ করার পর পুষ্টি কমে গিয়ে সেখানে মাছ ধরা পড়াও কমে যায়।'],
    },
    related: ['american-alligator', 'giant-otter', 'chinese-alligator'],
  },
  {
    id: 'false-gharial',
    commonName: { en: 'False Gharial', bn: 'মেকি ঘড়িয়াল' },
    scientificName: 'Tomistoma schlegelii',
    altNames: {
      en: ['Tomistoma', 'Malayan Gharial', 'Sunda Gharial'],
      bn: ['টমিস্টোমা', 'মালয় ঘড়িয়াল', 'সুন্ডা ঘড়িয়াল'],
    },
    category: 'reptiles',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'False gharial',
    description: {
      en: 'The false gharial is a long-snouted crocodilian of peat-swamp forests and rivers in Malaysia and Indonesia. Despite its name, genetic studies show it is a close relative of the true gharial. It is rarely seen and poorly studied, and its swamp-forest habitat is disappearing quickly.',
      bn: 'মেকি ঘড়িয়াল মালয়েশিয়া ও ইন্দোনেশিয়ার পিট-জলাবন ও নদীর একটি লম্বা মুখওয়ালা কুমিরজাতীয় প্রাণী। নামে “মেকি” হলেও জিনগত গবেষণায় দেখা গেছে, এটি আসল ঘড়িয়ালের ঘনিষ্ঠ আত্মীয়। এদের খুব কমই দেখা যায়, গবেষণাও কম, আর এদের জলাবন দ্রুত হারিয়ে যাচ্ছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Crocodilia',
      family: 'Gavialidae',
      genus: 'Tomistoma',
      species: 'T. schlegelii',
    },
    physical: {
      size: { en: 'Males up to about 4–5 m; females around 3 m', bn: 'পুরুষ প্রায় ৪–৫ মিটার পর্যন্ত; স্ত্রী প্রায় ৩ মিটার' },
      weight: { en: 'Large males around 200–250 kg', bn: 'বড় পুরুষ প্রায় ২০০–২৫০ কেজি' },
      lifespan: { en: 'Thought to be 60 years or more', bn: 'ধারণা করা হয় ৬০ বছর বা তারও বেশি' },
      features: {
        en: ['Very slender snout that widens gradually toward the head', 'Reddish-brown body with dark bands on the back and tail', 'No bulbous “ghara” on the snout tip, unlike the true gharial'],
        bn: ['খুব সরু মুখ, যা মাথার দিকে ক্রমে চওড়া হয়েছে', 'লালচে-বাদামি দেহে পিঠ ও লেজে গাঢ় ডোরা', 'আসল ঘড়িয়ালের মতো নাকের আগায় হাঁড়ির মতো “ঘড়া” নেই'],
      },
    },
    habitat: {
      en: 'Peat-swamp forests, blackwater rivers and lakes',
      bn: 'পিট-জলাবন, কালো পানির নদী ও হ্রদ',
    },
    habitats: ['wetland', 'rivers-lakes', 'tropical-forest'],
    regions: ['southeast-asia'],
    distribution: {
      en: 'Peninsular Malaysia, Borneo, Sumatra and Java (possibly extinct in Thailand).',
      bn: 'মালয় উপদ্বীপ, বোর্নিও, সুমাত্রা ও জাভা (থাইল্যান্ডে সম্ভবত বিলুপ্ত)।',
    },
    climate: { en: 'Hot, wet equatorial', bn: 'উষ্ণ ও আর্দ্র নিরক্ষীয়' },
    diet: {
      en: 'Mainly fish, but also monkeys, birds and other vertebrates',
      bn: 'মূলত মাছ, তবে বানর, পাখি ও অন্যান্য মেরুদণ্ডী প্রাণীও খায়',
    },
    ecologicalRole: {
      en: 'A top predator of swamp-forest waters and an indicator of healthy peatland ecosystems.',
      bn: 'জলাবনের পানির শীর্ষ শিকারি এবং সুস্থ পিট-জলাভূমি বাস্তুতন্ত্রের একটি নির্দেশক প্রজাতি।',
    },
    behavior: {
      en: 'Secretive and mostly solitary; females lay eggs in mound nests of peat and leaves on the forest floor.',
      bn: 'লাজুক ও মূলত একাকী; স্ত্রী বনের মেঝেতে পিট ও পাতার ঢিবি বানিয়ে তাতে ডিম পাড়ে।',
    },
    range: {
      native: [
        [3.0, 103.0],
        [-0.5, 104.0],
        [-2.0, 113.5],
        [1.5, 111.0],
        [-1.0, 102.0],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Draining and burning of peat-swamp forests for plantations', 'Drowning in fishing gear', 'Illegal capture'],
        bn: ['বাগান তৈরির জন্য পিট-জলাবন শুকিয়ে ফেলা ও পুড়িয়ে দেওয়া', 'মাছ ধরার সরঞ্জামে আটকে ডুবে মারা যাওয়া', 'অবৈধভাবে ধরা'],
      },
      initiatives: {
        en: ['Tomistoma Task Force of the IUCN Crocodile Specialist Group', 'Peat-swamp protection in Indonesian and Malaysian reserves'],
        bn: ['আইইউসিএন কুমির বিশেষজ্ঞ দলের টমিস্টোমা টাস্কফোর্স', 'ইন্দোনেশিয়া ও মালয়েশিয়ার সংরক্ষিত এলাকায় পিট-জলাবন সুরক্ষা'],
      },
      assessed: '2014',
    },
    facts: {
      en: ['Fossils show its relatives once lived as far away as Europe and North Africa.', 'Its nests are among the largest of any crocodilian.'],
      bn: ['জীবাশ্ম থেকে জানা যায়, এর আত্মীয়রা একসময় ইউরোপ ও উত্তর আফ্রিকা পর্যন্ত বাস করত।', 'কুমিরজাতীয় প্রাণীদের মধ্যে এদের বাসা সবচেয়ে বড়গুলোর একটি।'],
    },
    related: ['gharial', 'mugger-crocodile', 'saltwater-crocodile'],
  },
  {
    id: 'tuatara',
    commonName: { en: 'Tuatara', bn: 'টুয়াটারা' },
    scientificName: 'Sphenodon punctatus',
    altNames: {
      en: ['Living Fossil Reptile'],
      bn: ['জীবন্ত জীবাশ্ম সরীসৃপ'],
    },
    category: 'reptiles',
    wikiTitle: 'Tuatara',
    description: {
      en: 'The tuatara looks like a lizard but is the only surviving member of an ancient reptile order, the Rhynchocephalia, that flourished alongside the early dinosaurs. It is found only in New Zealand, mainly on predator-free offshore islands. Tuatara grow extremely slowly, tolerate cool temperatures unusual for reptiles and can live for over a century.',
      bn: 'টুয়াটারা দেখতে টিকটিকি বা গিরগিটির মতো হলেও এটি রিনকোসেফালিয়া নামের এক প্রাচীন সরীসৃপ বর্গের একমাত্র টিকে থাকা সদস্য — এই বর্গ আদি ডাইনোসরদের যুগে বিস্তৃত ছিল। এদের শুধু নিউজিল্যান্ডে, মূলত শিকারিমুক্ত উপকূলীয় দ্বীপগুলোতে পাওয়া যায়। টুয়াটারা খুব ধীরে বড় হয়, সরীসৃপ হয়েও ঠান্ডা আবহাওয়া সহ্য করতে পারে এবং একশ বছরেরও বেশি বাঁচতে পারে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Rhynchocephalia',
      family: 'Sphenodontidae',
      genus: 'Sphenodon',
      species: 'S. punctatus',
    },
    physical: {
      size: { en: 'Up to about 80 cm long (males larger)', bn: 'প্রায় ৮০ সেমি পর্যন্ত লম্বা (পুরুষ বড়)' },
      weight: { en: 'Up to about 1–1.3 kg', bn: 'প্রায় ১–১.৩ কেজি পর্যন্ত' },
      lifespan: { en: 'Commonly 60 years or more; can exceed 100 years', bn: 'সাধারণত ৬০ বছর বা তারও বেশি; ১০০ বছর ছাড়াতে পারে' },
      features: {
        en: ['Spiny crest along the neck and back', 'Teeth are saw-like projections of the jawbone, with two rows in the upper jaw', 'A light-sensitive “third eye” on top of the head in hatchlings'],
        bn: ['ঘাড় ও পিঠ বরাবর কাঁটার মতো ঝুঁটি', 'দাঁত আসলে চোয়ালের হাড়েরই করাতের মতো অংশ; ওপরের চোয়ালে দুই সারি', 'বাচ্চাদের মাথার ওপরে আলো-সংবেদী একটি “তৃতীয় চোখ”'],
      },
    },
    habitat: {
      en: 'Coastal forest and scrub on offshore islands, often sharing seabird burrows',
      bn: 'উপকূলীয় দ্বীপের বন ও ঝোপঝাড়; প্রায়ই সামুদ্রিক পাখির গর্তে একসঙ্গে থাকে',
    },
    habitats: ['temperate-forest'],
    regions: ['oceania'],
    distribution: {
      en: 'New Zealand — around 30 offshore islands plus fenced mainland sanctuaries such as Zealandia.',
      bn: 'নিউজিল্যান্ড — প্রায় ৩০টি উপকূলীয় দ্বীপ এবং জিল্যান্ডিয়ার মতো বেড়া-ঘেরা মূল ভূখণ্ডের অভয়ারণ্য।',
    },
    climate: { en: 'Cool, temperate maritime', bn: 'শীতল নাতিশীতোষ্ণ সামুদ্রিক' },
    diet: {
      en: 'Insects such as wētā and beetles, spiders, snails, lizards and seabird eggs and chicks',
      bn: 'ওয়েটা ও গুবরে পোকাসহ নানা পোকামাকড়, মাকড়সা, শামুক, টিকটিকি এবং সামুদ্রিক পাখির ডিম ও ছানা',
    },
    ecologicalRole: {
      en: 'A key predator of invertebrates on island ecosystems, closely linked with seabird colonies.',
      bn: 'দ্বীপের বাস্তুতন্ত্রে অমেরুদণ্ডী প্রাণীর প্রধান শিকারি; সামুদ্রিক পাখির কলোনির সঙ্গে ঘনিষ্ঠভাবে জড়িত।',
    },
    behavior: {
      en: 'Mostly nocturnal and active at temperatures as low as 5 °C; eggs take 11–16 months to hatch.',
      bn: 'মূলত নিশাচর এবং মাত্র ৫ ডিগ্রি সেলসিয়াস তাপমাত্রাতেও সক্রিয় থাকে; ডিম ফুটতে ১১–১৬ মাস লাগে।',
    },
    range: {
      native: [
        [-41.0, 174.0],
        [-35.9, 174.7],
        [-41.3, 174.75],
        [-37.3, 176.0],
      ],
      endemicTo: { en: 'New Zealand', bn: 'নিউজিল্যান্ড' },
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Introduced rats that eat eggs and young', 'Climate warming that may skew nest sex ratios toward males'],
        bn: ['বাইরে থেকে আসা ইঁদুর, যারা ডিম ও বাচ্চা খেয়ে ফেলে', 'উষ্ণায়নের ফলে বাসায় পুরুষ বাচ্চার অনুপাত বেড়ে যাওয়ার ঝুঁকি'],
      },
      initiatives: {
        en: ['Rat eradication on offshore islands', 'Captive breeding and translocation to predator-free sanctuaries'],
        bn: ['উপকূলীয় দ্বীপগুলো থেকে ইঁদুর নির্মূল', 'আবদ্ধ প্রজনন ও শিকারিমুক্ত অভয়ারণ্যে স্থানান্তর'],
      },
    },
    facts: {
      en: ['“Tuatara” is a Māori word meaning “peaks on the back”.', 'Its closest relatives died out around 60 million years ago.'],
      bn: ['“টুয়াটারা” একটি মাওরি শব্দ, যার অর্থ “পিঠের চূড়া”।', 'এর নিকটতম আত্মীয়রা প্রায় ৬ কোটি বছর আগে বিলুপ্ত হয়ে গেছে।'],
    },
    related: ['komodo-dragon', 'platypus'],
  },
];
