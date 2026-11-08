import type { Species } from '@/types';

export const mammals: Species[] = [
  {
    id: 'royal-bengal-tiger',
    commonName: { en: 'Royal Bengal Tiger', bn: 'রয়েল বেঙ্গল টাইগার' },
    scientificName: 'Panthera tigris tigris',
    altNames: {
      en: ['Bengal Tiger', 'Tiger', 'Indian Tiger'],
      bn: ['বাঘ', 'বেঙ্গল টাইগার', 'ডোরাকাটা বাঘ'],
    },
    synonyms: ['Panthera tigris bengalensis', 'Felis tigris'],
    category: 'mammals',
    wikiTitle: 'Bengal tiger',
    description: {
      en: 'The Royal Bengal Tiger is the national animal of Bangladesh and India and one of the largest wild cats on Earth. A solitary apex predator, it is famous for its orange coat with bold black stripes. The Sundarbans population is unique in being adapted to life in tidal mangrove forests, where tigers swim between islands and hunt along muddy creeks.',
      bn: 'রয়েল বেঙ্গল টাইগার বাংলাদেশ ও ভারতের জাতীয় পশু এবং পৃথিবীর বৃহত্তম বন্য বিড়ালগোত্রীয় প্রাণীদের একটি। কমলা রঙের শরীরে কালো ডোরাকাটা দাগের জন্য এরা সহজেই চেনা যায়। এরা একাকী চলাফেরা করা শীর্ষ শিকারি। সুন্দরবনের বাঘেরা জোয়ার-ভাটার ম্যানগ্রোভ বনে বসবাসে অভ্যস্ত — এরা এক দ্বীপ থেকে আরেক দ্বীপে সাঁতরে যায় এবং কাদামাটির খালের ধারে শিকার করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Felidae',
      genus: 'Panthera',
      species: 'P. tigris',
    },
    physical: {
      size: {
        en: 'Males 2.7–3.1 m long including tail; about 90–110 cm tall at the shoulder',
        bn: 'পুরুষ বাঘ লেজসহ ২.৭–৩.১ মিটার লম্বা; কাঁধ পর্যন্ত উচ্চতা প্রায় ৯০–১১০ সেমি',
      },
      weight: {
        en: 'Males 180–260 kg; females 100–160 kg (Sundarbans tigers are smaller)',
        bn: 'পুরুষ ১৮০–২৬০ কেজি; স্ত্রী ১০০–১৬০ কেজি (সুন্দরবনের বাঘ তুলনামূলক ছোট)',
      },
      lifespan: {
        en: '10–15 years in the wild; up to 20 years in captivity',
        bn: 'বনে ১০–১৫ বছর; আবদ্ধ অবস্থায় ২০ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Orange coat with unique black stripe pattern — no two tigers are alike',
          'White spots on the back of the ears',
          'Powerful forelimbs and retractable claws',
        ],
        bn: [
          'কমলা রঙের লোমে অনন্য কালো ডোরা — দুটি বাঘের ডোরা কখনো এক রকম হয় না',
          'কানের পেছনে সাদা ছোপ',
          'শক্তিশালী সামনের পা এবং গুটিয়ে রাখা যায় এমন নখর',
        ],
      },
    },
    habitat: {
      en: 'Tropical and subtropical forests, mangrove forests and tall grasslands',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় বনভূমি, ম্যানগ্রোভ বন এবং উঁচু তৃণভূমি',
    },
    habitats: ['mangrove', 'tropical-forest', 'grassland'],
    regions: ['south-asia'],
    distribution: {
      en: 'Bangladesh, India, Nepal and Bhutan; the Sundarbans shared by Bangladesh and India holds one of the most important populations.',
      bn: 'বাংলাদেশ, ভারত, নেপাল ও ভুটান; বাংলাদেশ ও ভারতের যৌথ সুন্দরবনে এদের অন্যতম গুরুত্বপূর্ণ জনগোষ্ঠী বাস করে।',
    },
    climate: {
      en: 'Hot, humid tropical and monsoon climates',
      bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় এবং মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Carnivore — chital (spotted deer), sambar, wild boar, and in the Sundarbans also fish, crabs and monitor lizards',
      bn: 'মাংসাশী — চিত্রা হরিণ, সাম্বার, বুনো শূকর; সুন্দরবনে মাছ, কাঁকড়া ও গুইসাপও খায়',
    },
    ecologicalRole: {
      en: 'As an apex predator it keeps herbivore populations in balance, protecting forest vegetation and the whole food web.',
      bn: 'শীর্ষ শিকারি হিসেবে বাঘ তৃণভোজী প্রাণীর সংখ্যা নিয়ন্ত্রণে রাখে, ফলে বনের গাছপালা ও সম্পূর্ণ খাদ্যশৃঙ্খল সুরক্ষিত থাকে।',
    },
    behavior: {
      en: 'Solitary and territorial; mostly active at dawn, dusk and night. Marks territory with scent and scratches, and is an excellent swimmer.',
      bn: 'একাকী ও এলাকাভিত্তিক প্রাণী; মূলত ভোর, সন্ধ্যা ও রাতে সক্রিয় থাকে। গন্ধ ও আঁচড়ের দাগ দিয়ে নিজের এলাকা চিহ্নিত করে এবং দক্ষ সাঁতারু।',
    },
    range: {
      native: [
        [21.95, 89.18],
        [22.2, 88.9],
        [26.7, 93.4],
        [29.5, 78.8],
        [21.7, 79.3],
        [27.5, 84.4],
        [26.8, 90.9],
      ],
      endemicTo: { en: 'Indian subcontinent', bn: 'ভারতীয় উপমহাদেশ' },
    },
    conservation: {
      status: 'EN',
      trend: 'increasing',
      population: {
        en: 'About 3,600 in India (2022) and 125 in the Bangladesh Sundarbans (2024 survey)',
        bn: 'ভারতে প্রায় ৩,৬০০টি (২০২২) এবং বাংলাদেশের সুন্দরবনে ১২৫টি (২০২৪ সালের জরিপ)',
      },
      threats: {
        en: ['Poaching for skin and body parts', 'Habitat loss and fragmentation', 'Human–tiger conflict', 'Sea-level rise in the Sundarbans'],
        bn: ['চামড়া ও দেহাংশের জন্য চোরাশিকার', 'আবাসস্থল ধ্বংস ও খণ্ডিত হওয়া', 'মানুষ ও বাঘের সংঘাত', 'সুন্দরবনে সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি'],
      },
      initiatives: {
        en: ['Project Tiger and tiger reserves in India', 'Bangladesh Tiger Action Plan', 'Village Tiger Response Teams in the Sundarbans', 'Camera-trap population surveys'],
        bn: ['ভারতে প্রজেক্ট টাইগার ও ব্যাঘ্র সংরক্ষিত এলাকা', 'বাংলাদেশ বাঘ সংরক্ষণ কর্মপরিকল্পনা', 'সুন্দরবনে ভিলেজ টাইগার রেসপন্স টিম', 'ক্যামেরা-ট্র্যাপের মাধ্যমে বাঘ জরিপ'],
      },
      assessed: '2022',
    },
    facts: {
      en: [
        'It is an excellent swimmer and can cross wide rivers in the Sundarbans.',
        'A tiger’s roar can be heard up to 3 km away.',
        'Tiger skin is striped too — not just the fur.',
      ],
      bn: [
        'এরা অত্যন্ত দক্ষ সাঁতারু; সুন্দরবনের চওড়া নদীও সাঁতরে পার হতে পারে।',
        'বাঘের গর্জন প্রায় ৩ কিলোমিটার দূর থেকেও শোনা যায়।',
        'শুধু লোম নয়, বাঘের চামড়াতেও ডোরাকাটা দাগ থাকে।',
      ],
    },
    related: ['fishing-cat', 'snow-leopard', 'asian-elephant'],
  },
  {
    id: 'asian-elephant',
    commonName: { en: 'Asian Elephant', bn: 'এশীয় হাতি' },
    scientificName: 'Elephas maximus',
    altNames: {
      en: ['Asiatic Elephant', 'Indian Elephant', 'Elephant'],
      bn: ['হাতি', 'বুনো হাতি', 'এশিয়ান হাতি'],
    },
    category: 'mammals',
    wikiTitle: 'Asian elephant',
    description: {
      en: 'The Asian elephant is the largest land animal in Asia and a keystone species of tropical forests. Smaller than its African relatives, it has rounded ears, a twin-domed head and a single finger-like tip on its trunk. In Bangladesh, a small population of wild elephants survives in the hill forests of Chattogram, Cox’s Bazar and the Sherpur–Jamalpur borderlands, moving along ancient migration corridors.',
      bn: 'এশীয় হাতি এশিয়ার সবচেয়ে বড় স্থলচর প্রাণী এবং ক্রান্তীয় বনের একটি মূল প্রজাতি (কি-স্টোন প্রজাতি)। আফ্রিকার হাতির চেয়ে এরা আকারে ছোট; কান গোলাকার, মাথায় দুটি উঁচু ঢিবি আর শুঁড়ের আগায় আঙুলের মতো একটি মাত্র প্রান্ত থাকে। বাংলাদেশে চট্টগ্রাম, কক্সবাজারের পাহাড়ি বন এবং শেরপুর–জামালপুরের সীমান্ত এলাকায় অল্প কিছু বুনো হাতি এখনো টিকে আছে, যারা বহু পুরোনো চলাচলের পথ ধরে এক বন থেকে আরেক বনে যাতায়াত করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Proboscidea',
      family: 'Elephantidae',
      genus: 'Elephas',
      species: 'E. maximus',
    },
    physical: {
      size: {
        en: 'Shoulder height 2–3.2 m; body length 5.5–6.4 m including trunk',
        bn: 'কাঁধ পর্যন্ত উচ্চতা ২–৩.২ মিটার; শুঁড়সহ দেহের দৈর্ঘ্য ৫.৫–৬.৪ মিটার',
      },
      weight: {
        en: 'Males up to about 5,000 kg; females 2,000–3,500 kg',
        bn: 'পুরুষ প্রায় ৫,০০০ কেজি পর্যন্ত; স্ত্রী ২,০০০–৩,৫০০ কেজি',
      },
      lifespan: {
        en: '60–70 years',
        bn: '৬০–৭০ বছর',
      },
      features: {
        en: [
          'Small, rounded ears compared with African elephants',
          'Only some males carry tusks; females have tiny “tushes” or none',
          'Highest point of the body is the arched back, not the shoulder',
          'Trunk ends in a single finger-like lip',
        ],
        bn: [
          'আফ্রিকার হাতির তুলনায় কান ছোট ও গোলাকার',
          'কেবল কিছু পুরুষ হাতির দাঁত (গজদন্ত) থাকে; মাদি হাতির দাঁত খুব ছোট বা থাকেই না',
          'দেহের সবচেয়ে উঁচু অংশ কাঁধ নয়, বাঁকানো পিঠ',
          'শুঁড়ের আগায় আঙুলের মতো একটি মাত্র প্রান্ত',
        ],
      },
    },
    habitat: {
      en: 'Tropical evergreen and deciduous forests, scrub and grasslands, usually near water',
      bn: 'ক্রান্তীয় চিরসবুজ ও পাতাঝরা বন, ঝোপঝাড় ও তৃণভূমি — সাধারণত পানির উৎসের কাছাকাছি',
    },
    habitats: ['tropical-forest', 'grassland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'India, Sri Lanka, Nepal, Bhutan, Bangladesh, Myanmar, Thailand, Malaysia, Indonesia (Sumatra, Borneo), Cambodia, Laos, Vietnam and southern China.',
      bn: 'ভারত, শ্রীলঙ্কা, নেপাল, ভুটান, বাংলাদেশ, মিয়ানমার, থাইল্যান্ড, মালয়েশিয়া, ইন্দোনেশিয়া (সুমাত্রা ও বোর্নিও), কম্বোডিয়া, লাওস, ভিয়েতনাম ও দক্ষিণ চীন।',
    },
    climate: {
      en: 'Warm tropical and subtropical monsoon climates',
      bn: 'উষ্ণ ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Herbivore — grasses, bamboo, bark, roots, leaves and fruit; eats up to 150 kg of plants a day',
      bn: 'তৃণভোজী — ঘাস, বাঁশ, গাছের বাকল, শিকড়, পাতা ও ফল; দিনে ১৫০ কেজি পর্যন্ত খাবার খায়',
    },
    ecologicalRole: {
      en: 'Elephants disperse seeds over long distances, open up dense forest and dig for water in dry seasons, creating resources used by many other animals.',
      bn: 'হাতি বহুদূর পর্যন্ত গাছের বীজ ছড়িয়ে দেয়, ঘন বনে পথ ও ফাঁকা জায়গা তৈরি করে এবং শুকনো মৌসুমে মাটি খুঁড়ে পানি বের করে — যা অন্য অনেক প্রাণীরও কাজে লাগে।',
    },
    behavior: {
      en: 'Lives in family herds led by an experienced older female (matriarch). Adult males roam alone or in loose groups and periodically enter “musth”, a state of heightened aggression.',
      bn: 'অভিজ্ঞ বয়স্ক মাদি হাতির নেতৃত্বে পারিবারিক দলে বাস করে। প্রাপ্তবয়স্ক পুরুষ হাতি একা বা ছোট দলে ঘুরে বেড়ায় এবং মাঝে মাঝে ‘মাস্ট’ অবস্থায় যায়, তখন এরা বেশ আক্রমণাত্মক হয়ে ওঠে।',
    },
    range: {
      native: [
        [21.2, 92.15],
        [22.6, 92.2],
        [11.6, 76.6],
        [26.7, 93.4],
        [7.9, 80.8],
        [14.4, 101.4],
        [4.6, 102.2],
        [22.0, 100.8],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      population: {
        en: 'Roughly 48,000–52,000 in the wild; fewer than 300 resident wild elephants in Bangladesh',
        bn: 'বনে আনুমানিক ৪৮,০০০–৫২,০০০টি; বাংলাদেশে স্থায়ী বুনো হাতি ৩০০টিরও কম',
      },
      threats: {
        en: ['Habitat loss and blocked migration corridors', 'Human–elephant conflict over crops', 'Poaching for ivory and skin', 'Electrocution and train collisions'],
        bn: ['আবাসস্থল ধ্বংস ও চলাচলের পথ বন্ধ হয়ে যাওয়া', 'ফসল নিয়ে মানুষ ও হাতির সংঘাত', 'দাঁত ও চামড়ার জন্য চোরাশিকার', 'বিদ্যুৎস্পৃষ্ট হওয়া ও ট্রেনের ধাক্কা'],
      },
      initiatives: {
        en: ['Project Elephant in India', 'Elephant Response Teams in Bangladesh', 'Protection of elephant corridors', 'CITES ban on ivory trade'],
        bn: ['ভারতে প্রজেক্ট এলিফ্যান্ট', 'বাংলাদেশে এলিফ্যান্ট রেসপন্স টিম', 'হাতি চলাচলের করিডোর সংরক্ষণ', 'সাইটেস (CITES)-এর অধীনে হাতির দাঁত বাণিজ্য নিষিদ্ধ'],
      },
    },
    facts: {
      en: [
        'An elephant’s trunk contains around 40,000 muscles.',
        'Elephants communicate with low rumbles that can travel several kilometres.',
        'They can recognise themselves in a mirror — a sign of self-awareness.',
      ],
      bn: [
        'হাতির শুঁড়ে প্রায় ৪০,০০০টি পেশি থাকে।',
        'হাতি খুব নিচু স্বরের গুমগুম আওয়াজে যোগাযোগ করে, যা কয়েক কিলোমিটার দূর পর্যন্ত পৌঁছায়।',
        'আয়নায় নিজেকে চিনতে পারে — যা আত্মসচেতনতার লক্ষণ।',
      ],
    },
    related: ['royal-bengal-tiger', 'giant-panda', 'banyan'],
  },
  {
    id: 'giant-panda',
    commonName: { en: 'Giant Panda', bn: 'জায়ান্ট পান্ডা' },
    scientificName: 'Ailuropoda melanoleuca',
    altNames: {
      en: ['Panda', 'Panda Bear', 'Giant Panda Bear'],
      bn: ['পান্ডা', 'বড় পান্ডা', 'পান্ডা ভালুক'],
    },
    category: 'mammals',
    wikiTitle: 'Giant panda',
    description: {
      en: 'The giant panda is a black-and-white bear found only in the mountain bamboo forests of central China. Although it belongs to the order Carnivora, almost its entire diet is bamboo. Once a symbol of extinction risk, it was downlisted from Endangered to Vulnerable in 2016 after decades of habitat protection.',
      bn: 'জায়ান্ট পান্ডা সাদা-কালো রঙের একধরনের ভালুক, যা কেবল মধ্য চীনের পাহাড়ি বাঁশবনে পাওয়া যায়। মাংসাশী বর্গের প্রাণী হলেও এদের খাবারের প্রায় পুরোটাই বাঁশ। একসময় বিলুপ্তির ঝুঁকির প্রতীক ছিল এই প্রাণী; কয়েক দশকের আবাসস্থল সংরক্ষণের ফলে ২০১৬ সালে এর অবস্থা ‘বিপন্ন’ থেকে ‘সংকটাপন্ন’-তে উন্নীত হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Ursidae',
      genus: 'Ailuropoda',
      species: 'A. melanoleuca',
    },
    physical: {
      size: {
        en: 'Body length 1.2–1.9 m; shoulder height 60–90 cm',
        bn: 'দেহের দৈর্ঘ্য ১.২–১.৯ মিটার; কাঁধ পর্যন্ত উচ্চতা ৬০–৯০ সেমি',
      },
      weight: {
        en: 'Males 85–125 kg; females 70–100 kg',
        bn: 'পুরুষ ৮৫–১২৫ কেজি; স্ত্রী ৭০–১০০ কেজি',
      },
      lifespan: {
        en: 'About 20 years in the wild; over 30 years in captivity',
        bn: 'বনে প্রায় ২০ বছর; আবদ্ধ অবস্থায় ৩০ বছরেরও বেশি',
      },
      features: {
        en: [
          'Black eye patches, ears, legs and shoulder band on a white body',
          'Enlarged wrist bone that works like a “thumb” for gripping bamboo',
          'Massive jaw muscles and broad molars for crushing stems',
        ],
        bn: [
          'সাদা শরীরে কালো চোখের চারপাশ, কান, পা ও কাঁধের পট্টি',
          'কবজির একটি বড় হাড় ‘বাড়তি বুড়ো আঙুলের’ মতো কাজ করে, যা দিয়ে বাঁশ আঁকড়ে ধরে',
          'বাঁশ চিবানোর জন্য শক্তিশালী চোয়ালের পেশি ও চওড়া মাড়ির দাঁত',
        ],
      },
    },
    habitat: {
      en: 'Cool, wet temperate bamboo and conifer forests at 1,200–3,400 m',
      bn: '১,২০০–৩,৪০০ মিটার উচ্চতার ঠান্ডা ও ভেজা নাতিশীতোষ্ণ বাঁশ ও সরলবর্গীয় বন',
    },
    habitats: ['temperate-forest', 'mountain'],
    regions: ['east-asia'],
    distribution: {
      en: 'Mountain ranges of Sichuan, Shaanxi and Gansu provinces in central China.',
      bn: 'মধ্য চীনের সিচুয়ান, শানসি ও গানসু প্রদেশের পর্বতমালা।',
    },
    climate: {
      en: 'Cool, humid montane climate with heavy rainfall and misty winters',
      bn: 'ঠান্ডা ও আর্দ্র পাহাড়ি জলবায়ু; প্রচুর বৃষ্টি ও কুয়াশাচ্ছন্ন শীতকাল',
    },
    diet: {
      en: 'About 99% bamboo (12–38 kg per day); occasionally small animals or carrion',
      bn: 'খাবারের প্রায় ৯৯% বাঁশ (দিনে ১২–৩৮ কেজি); মাঝে মাঝে ছোট প্রাণী বা মৃতদেহও খায়',
    },
    ecologicalRole: {
      en: 'An umbrella species — protecting panda forests also shelters golden snub-nosed monkeys, takins, red pandas and thousands of plant species.',
      bn: 'এটি একটি ‘ছাতা প্রজাতি’ — পান্ডার বন রক্ষা করলে সোনালি নাক-চ্যাপ্টা বানর, টাকিন, রেড পান্ডা এবং হাজারো উদ্ভিদ প্রজাতিও সুরক্ষা পায়।',
    },
    behavior: {
      en: 'Solitary and mostly silent; spends 10–16 hours a day feeding. Does not hibernate, but moves to lower slopes in winter. Communicates by scent marking.',
      bn: 'একাকী ও সাধারণত চুপচাপ স্বভাবের; দিনে ১০–১৬ ঘণ্টা খেয়েই কাটায়। শীতনিদ্রায় যায় না, তবে শীতে পাহাড়ের নিচের ঢালে নেমে আসে। গন্ধ দিয়ে চিহ্ন রেখে একে অপরের সঙ্গে যোগাযোগ করে।',
    },
    range: {
      native: [
        [31.0, 103.3],
        [30.1, 102.9],
        [33.7, 107.8],
        [33.0, 104.3],
        [32.5, 104.0],
        [29.3, 103.3],
      ],
      endemicTo: { en: 'Central China', bn: 'মধ্য চীন' },
    },
    conservation: {
      status: 'VU',
      trend: 'increasing',
      population: {
        en: 'About 1,864 in the wild (fourth national survey, 2014)',
        bn: 'বনে প্রায় ১,৮৬৪টি (চতুর্থ জাতীয় জরিপ, ২০১৪)',
      },
      threats: {
        en: ['Habitat fragmentation by roads and farmland', 'Mass bamboo die-offs after flowering', 'Climate change shifting bamboo zones', 'Small, isolated populations'],
        bn: ['রাস্তা ও কৃষিজমির কারণে আবাসস্থল খণ্ডিত হওয়া', 'বাঁশে ফুল আসার পর ব্যাপক হারে বাঁশ মরে যাওয়া', 'জলবায়ু পরিবর্তনে বাঁশবনের অবস্থান সরে যাওয়া', 'ছোট ও বিচ্ছিন্ন জনগোষ্ঠী'],
      },
      initiatives: {
        en: ['Giant Panda National Park (2021)', 'Network of over 60 panda reserves', 'Captive breeding and reintroduction', 'Forest-corridor restoration'],
        bn: ['জায়ান্ট পান্ডা জাতীয় উদ্যান (২০২১)', '৬০টিরও বেশি পান্ডা সংরক্ষিত এলাকার নেটওয়ার্ক', 'আবদ্ধ প্রজনন ও বনে পুনঃঅবমুক্তি', 'বনাঞ্চলের সংযোগপথ পুনরুদ্ধার'],
      },
    },
    facts: {
      en: [
        'A newborn panda weighs only about 100 g — around 1/900th of its mother’s weight.',
        'Pandas have the digestive system of a carnivore, so they digest only a fraction of the bamboo they eat.',
        'The panda has been the WWF logo since 1961.',
      ],
      bn: [
        'সদ্যোজাত পান্ডার ওজন মাত্র ১০০ গ্রামের মতো — মায়ের ওজনের প্রায় ৯০০ ভাগের ১ ভাগ।',
        'পান্ডার পরিপাকতন্ত্র মাংসাশী প্রাণীর মতো, তাই যত বাঁশ খায় তার সামান্য অংশই হজম করতে পারে।',
        '১৯৬১ সাল থেকে পান্ডা ডব্লিউডব্লিউএফ (WWF)-এর প্রতীক।',
      ],
    },
    related: ['snow-leopard', 'polar-bear', 'chinese-giant-salamander'],
  },
  {
    id: 'fishing-cat',
    commonName: { en: 'Fishing Cat', bn: 'মেছো বিড়াল' },
    scientificName: 'Prionailurus viverrinus',
    altNames: {
      en: ['Fish Cat', 'Mechho Bagh', 'Baghrol'],
      bn: ['মেছোবাঘ', 'বাঘরোল', 'মাছখেকো বিড়াল'],
    },
    synonyms: ['Felis viverrina'],
    category: 'mammals',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Fishing cat',
    description: {
      en: 'The fishing cat is a stocky, medium-sized wild cat that lives in wetlands and hunts fish by scooping them out of the water or diving in after them. It is found across Bangladesh — from the Sundarbans to village marshes and haors — but is often mistaken for a “tiger” and killed in retaliation for raiding fish ponds.',
      bn: 'মেছো বিড়াল মাঝারি আকারের, গাট্টাগোট্টা গড়নের একটি বন্য বিড়াল। জলাভূমিতে বাস করে এবং থাবা দিয়ে পানি থেকে মাছ তুলে আনে, প্রয়োজনে ডুব দিয়েও মাছ ধরে। সুন্দরবন থেকে শুরু করে গ্রামের বিল-ঝিল ও হাওর পর্যন্ত বাংলাদেশের নানা জায়গায় এদের দেখা মেলে। তবে গ্রামাঞ্চলে অনেকে এদের ‘বাঘ’ ভেবে ভুল করেন, আর পুকুরের মাছ খাওয়ার কারণে প্রায়ই এদের পিটিয়ে মারা হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Felidae',
      genus: 'Prionailurus',
      species: 'P. viverrinus',
    },
    physical: {
      size: {
        en: 'Head-and-body 57–78 cm; tail 20–30 cm',
        bn: 'মাথা ও দেহ ৫৭–৭৮ সেমি; লেজ ২০–৩০ সেমি',
      },
      weight: {
        en: 'Males 8.5–16 kg; females 5–9 kg',
        bn: 'পুরুষ ৮.৫–১৬ কেজি; স্ত্রী ৫–৯ কেজি',
      },
      lifespan: {
        en: 'About 10–12 years; up to 15 years in captivity',
        bn: 'প্রায় ১০–১২ বছর; আবদ্ধ অবস্থায় ১৫ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Olive-grey coat with rows of dark spots and stripes on the neck',
          'Partially webbed front feet for swimming',
          'Short, thick tail used as a rudder',
          'Dense double-layered fur that keeps the skin dry',
        ],
        bn: [
          'জলপাই-ধূসর লোমে সারিবদ্ধ কালো ছোপ এবং ঘাড়ে ডোরা',
          'সাঁতারের সুবিধার জন্য সামনের পায়ে আংশিক পর্দা (লিপ্তপদ)',
          'ছোট ও মোটা লেজ, যা পানিতে হালের মতো কাজ করে',
          'ঘন দুই স্তরের লোম, যা চামড়াকে শুকনো রাখে',
        ],
      },
    },
    habitat: {
      en: 'Marshes, swamps, reed beds, mangroves, oxbow lakes and fish ponds',
      bn: 'বিল, জলাভূমি, নলখাগড়ার বন, ম্যানগ্রোভ, বাঁওড় ও মাছের ঘের-পুকুর',
    },
    habitats: ['wetland', 'mangrove', 'rivers-lakes'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Patchily distributed in Bangladesh, India, Nepal, Sri Lanka, Pakistan, Myanmar, Thailand, Cambodia and Java; the Sundarbans and the haors of Bangladesh are key strongholds.',
      bn: 'বাংলাদেশ, ভারত, নেপাল, শ্রীলঙ্কা, পাকিস্তান, মিয়ানমার, থাইল্যান্ড, কম্বোডিয়া ও জাভায় বিক্ষিপ্তভাবে দেখা যায়; বাংলাদেশের সুন্দরবন ও হাওরাঞ্চল এদের গুরুত্বপূর্ণ আবাস।',
    },
    climate: {
      en: 'Tropical and subtropical lowland climates with monsoon flooding',
      bn: 'বর্ষায় প্লাবিত হয় এমন ক্রান্তীয় ও উপক্রান্তীয় নিম্নভূমির জলবায়ু',
    },
    diet: {
      en: 'Mainly fish; also frogs, crabs, snakes, birds, rodents and occasionally poultry',
      bn: 'প্রধানত মাছ; এছাড়া ব্যাঙ, কাঁকড়া, সাপ, পাখি, ইঁদুর এবং মাঝে মাঝে হাঁস-মুরগি',
    },
    ecologicalRole: {
      en: 'A top predator of wetlands; its presence indicates healthy marshes and mangroves, and it helps control rodent and fish populations.',
      bn: 'জলাভূমির শীর্ষ শিকারি; এদের উপস্থিতি সুস্থ জলাভূমি ও ম্যানগ্রোভের লক্ষণ। এরা ইঁদুর ও মাছের সংখ্যা নিয়ন্ত্রণে রাখতে সাহায্য করে।',
    },
    behavior: {
      en: 'Nocturnal and solitary. Sits at the water’s edge and scoops fish out with its paw, or dives head-first after prey. A strong swimmer that can cover long distances in water.',
      bn: 'নিশাচর ও একাকী। পানির ধারে বসে থাবা দিয়ে মাছ তুলে আনে, কখনো মাথা নিচু করে পানিতে ঝাঁপিয়ে পড়ে। দক্ষ সাঁতারু এবং পানিতে অনেক দূর পাড়ি দিতে পারে।',
    },
    range: {
      native: [
        [22.0, 89.4],
        [24.6, 91.3],
        [23.0, 90.4],
        [22.5, 88.3],
        [26.7, 87.3],
        [6.9, 79.9],
        [13.1, 100.0],
        [-6.9, 107.6],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Draining and conversion of wetlands', 'Retaliatory killing by fish farmers', 'Road accidents', 'Trapping and snaring'],
        bn: ['জলাভূমি ভরাট ও রূপান্তর', 'মাছচাষিদের প্রতিশোধমূলক হত্যা', 'সড়ক দুর্ঘটনা', 'ফাঁদ ও জালে আটকা পড়া'],
      },
      initiatives: {
        en: ['Fishing Cat Conservation Alliance', 'Community awareness programmes in Bangladesh', 'Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012', 'State animal of West Bengal, India'],
        bn: ['ফিশিং ক্যাট কনজারভেশন অ্যালায়েন্স', 'বাংলাদেশে স্থানীয় জনগণকে সচেতন করার কর্মসূচি', 'বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন ২০১২-এর অধীনে সংরক্ষিত', 'ভারতের পশ্চিমবঙ্গের রাজ্য প্রাণী'],
      },
      assessed: '2016',
    },
    facts: {
      en: [
        'Fishing cats have been seen diving fully underwater to catch fish and even ducks.',
        'Unlike most cats, they seem to enjoy water.',
        'They are about twice the size of a domestic cat.',
      ],
      bn: [
        'মেছো বিড়ালকে পুরোপুরি পানির নিচে ডুব দিয়ে মাছ, এমনকি হাঁস ধরতেও দেখা গেছে।',
        'বেশিরভাগ বিড়াল পানি এড়িয়ে চলে, কিন্তু এরা পানিতে থাকতে পছন্দ করে।',
        'এরা আকারে পোষা বিড়ালের প্রায় দ্বিগুণ।',
      ],
    },
    related: ['royal-bengal-tiger', 'sundari', 'common-kingfisher', 'giant-otter'],
  },
  {
    id: 'snow-leopard',
    commonName: { en: 'Snow Leopard', bn: 'তুষার চিতা' },
    scientificName: 'Panthera uncia',
    altNames: {
      en: ['Ounce', 'Irbis', 'Ghost of the Mountains'],
      bn: ['হিম চিতা', 'বরফ চিতা', 'স্নো লেপার্ড'],
    },
    synonyms: ['Uncia uncia', 'Felis uncia'],
    category: 'mammals',
    wikiTitle: 'Snow leopard',
    description: {
      en: 'The snow leopard is a big cat of the high mountains of Central and South Asia, perfectly adapted to cold, rocky terrain. Its smoky-grey coat with dark rosettes makes it almost invisible among rocks, earning it the name “ghost of the mountains”. It is so elusive that many people living in its range never see one.',
      bn: 'তুষার চিতা মধ্য ও দক্ষিণ এশিয়ার উঁচু পর্বতমালার একটি বড় বিড়ালগোত্রীয় প্রাণী, যা ঠান্ডা ও পাথুরে পরিবেশে চমৎকারভাবে মানিয়ে নিয়েছে। ধোঁয়াটে-ধূসর লোমে কালো গোলাপের মতো ছোপ থাকায় পাথরের মাঝে একে প্রায় দেখাই যায় না, তাই একে ‘পাহাড়ের ভূত’ বলা হয়। এরা এতটাই লাজুক যে এদের এলাকায় বসবাসকারী অনেক মানুষও কখনো একটিকে চোখে দেখেননি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Felidae',
      genus: 'Panthera',
      species: 'P. uncia',
    },
    physical: {
      size: {
        en: 'Head-and-body 75–150 cm; tail 80–105 cm; about 60 cm tall at the shoulder',
        bn: 'মাথা ও দেহ ৭৫–১৫০ সেমি; লেজ ৮০–১০৫ সেমি; কাঁধ পর্যন্ত উচ্চতা প্রায় ৬০ সেমি',
      },
      weight: {
        en: '22–55 kg',
        bn: '২২–৫৫ কেজি',
      },
      lifespan: {
        en: '10–12 years in the wild; up to 20 years in captivity',
        bn: 'বনে ১০–১২ বছর; আবদ্ধ অবস্থায় ২০ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Very long, thick tail used for balance and wrapped around the face for warmth',
          'Wide, fur-covered paws that act like snowshoes',
          'Thick smoky-grey fur with dark rosettes',
          'Enlarged nasal cavity to warm cold, thin air',
        ],
        bn: [
          'খুব লম্বা ও মোটা লেজ — ভারসাম্য রাখতে এবং ঠান্ডায় মুখ ঢেকে রাখতে কাজে লাগে',
          'চওড়া, লোমে ঢাকা থাবা, যা বরফে হাঁটার জুতার মতো কাজ করে',
          'ঘন ধোঁয়াটে-ধূসর লোমে কালো গোলাপসদৃশ ছোপ',
          'ঠান্ডা ও পাতলা বাতাস গরম করার জন্য বড় নাসাগহ্বর',
        ],
      },
    },
    habitat: {
      en: 'Alpine and subalpine zones, rocky cliffs and steppe, usually at 3,000–4,500 m',
      bn: 'আলপাইন ও উপ-আলপাইন অঞ্চল, পাথুরে খাড়া ঢাল ও স্তেপ তৃণভূমি — সাধারণত ৩,০০০–৪,৫০০ মিটার উচ্চতায়',
    },
    habitats: ['mountain', 'grassland'],
    regions: ['south-asia', 'east-asia'],
    distribution: {
      en: 'Twelve countries including China, Mongolia, India, Nepal, Bhutan, Pakistan, Afghanistan, Kyrgyzstan, Kazakhstan, Tajikistan, Uzbekistan and Russia; the Tibetan Plateau holds the largest share.',
      bn: 'চীন, মঙ্গোলিয়া, ভারত, নেপাল, ভুটান, পাকিস্তান, আফগানিস্তান, কিরগিজস্তান, কাজাখস্তান, তাজিকিস্তান, উজবেকিস্তান ও রাশিয়া — মোট ১২টি দেশ; সবচেয়ে বেশি আছে তিব্বত মালভূমিতে।',
    },
    climate: {
      en: 'Cold, dry high-altitude climate with long snowy winters',
      bn: 'ঠান্ডা ও শুষ্ক উচ্চ পার্বত্য জলবায়ু; দীর্ঘ তুষারাবৃত শীতকাল',
    },
    diet: {
      en: 'Carnivore — blue sheep (bharal), Siberian ibex, argali, marmots, pikas and sometimes livestock',
      bn: 'মাংসাশী — ভরাল (নীল ভেড়া), সাইবেরীয় আইবেক্স, আরগালি, মারমট, পিকা এবং কখনো কখনো গৃহপালিত পশু',
    },
    ecologicalRole: {
      en: 'The apex predator of high Asia; it regulates wild sheep and goat numbers, protecting fragile alpine pastures and the watersheds that feed major Asian rivers.',
      bn: 'উচ্চ এশিয়ার শীর্ষ শিকারি; বুনো ভেড়া ও ছাগলের সংখ্যা নিয়ন্ত্রণ করে নাজুক আলপাইন চারণভূমি এবং এশিয়ার বড় বড় নদীর উৎস অঞ্চল রক্ষায় ভূমিকা রাখে।',
    },
    behavior: {
      en: 'Solitary and most active at dawn and dusk. Can leap up to 9 m and stalks prey down steep slopes. Cannot roar; it communicates with chuffs, mews and scent marks.',
      bn: 'একাকী এবং মূলত ভোর ও সন্ধ্যায় সক্রিয়। প্রায় ৯ মিটার পর্যন্ত লাফ দিতে পারে এবং খাড়া ঢাল বেয়ে শিকারের পিছু নেয়। এরা গর্জন করতে পারে না; ফোঁসফোঁস, মিউ শব্দ ও গন্ধচিহ্ন দিয়ে যোগাযোগ করে।',
    },
    range: {
      native: [
        [34.1, 77.6],
        [28.2, 84.0],
        [27.9, 90.4],
        [33.0, 92.0],
        [42.0, 78.0],
        [46.5, 91.5],
        [36.5, 73.0],
        [38.5, 72.5],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      population: {
        en: 'Roughly 4,000–6,500 in the wild (global estimates)',
        bn: 'বনে আনুমানিক ৪,০০০–৬,৫০০টি (বৈশ্বিক অনুমান)',
      },
      threats: {
        en: ['Poaching for fur and bones', 'Retaliatory killing over livestock losses', 'Decline of wild prey', 'Climate change shrinking alpine habitat'],
        bn: ['লোম ও হাড়ের জন্য চোরাশিকার', 'গবাদিপশু হারানোর প্রতিশোধে হত্যা', 'বুনো শিকারপ্রাণী কমে যাওয়া', 'জলবায়ু পরিবর্তনে আলপাইন আবাসস্থল সংকুচিত হওয়া'],
      },
      initiatives: {
        en: ['Global Snow Leopard and Ecosystem Protection Program (GSLEP)', 'Predator-proof livestock corrals', 'Community livestock insurance schemes', 'Camera-trap population surveys'],
        bn: ['গ্লোবাল স্নো লেপার্ড অ্যান্ড ইকোসিস্টেম প্রোটেকশন প্রোগ্রাম (GSLEP)', 'শিকারি-প্রতিরোধী গোয়ালঘর নির্মাণ', 'স্থানীয় গবাদিপশু বিমা প্রকল্প', 'ক্যামেরা-ট্র্যাপের মাধ্যমে জরিপ'],
      },
    },
    facts: {
      en: [
        'Its tail is nearly as long as its body.',
        'Snow leopards are the only big cats in the genus Panthera that cannot roar.',
        'October 23 is celebrated as International Snow Leopard Day.',
      ],
      bn: [
        'এর লেজ প্রায় দেহের সমান লম্বা।',
        'প্যানথেরা গণের বড় বিড়ালদের মধ্যে একমাত্র তুষার চিতাই গর্জন করতে পারে না।',
        '২৩ অক্টোবর আন্তর্জাতিক তুষার চিতা দিবস হিসেবে পালিত হয়।',
      ],
    },
    related: ['royal-bengal-tiger', 'giant-panda', 'polar-bear'],
  },
  {
    id: 'polar-bear',
    commonName: { en: 'Polar Bear', bn: 'মেরু ভালুক' },
    scientificName: 'Ursus maritimus',
    altNames: {
      en: ['White Bear', 'Ice Bear', 'Sea Bear'],
      bn: ['শ্বেত ভালুক', 'সাদা ভালুক', 'পোলার বেয়ার'],
    },
    synonyms: ['Thalarctos maritimus'],
    category: 'mammals',
    secondaryCategories: ['marine'],
    wikiTitle: 'Polar bear',
    description: {
      en: 'The polar bear is the largest land carnivore on Earth and lives on the sea ice of the Arctic Ocean. It is classified as a marine mammal because it spends most of its life on frozen seas, hunting seals at breathing holes. As Arctic sea ice melts earlier each year because of climate change, polar bears have become a global symbol of a warming planet.',
      bn: 'মেরু ভালুক পৃথিবীর সবচেয়ে বড় স্থলচর মাংসাশী প্রাণী, যা উত্তর মহাসাগরের সামুদ্রিক বরফের ওপর বাস করে। জীবনের বেশিরভাগ সময় জমাট সমুদ্রে কাটায় এবং বরফের ফাঁকে সিলের শ্বাস নেওয়ার গর্তের পাশে ওত পেতে শিকার করে — তাই একে সামুদ্রিক স্তন্যপায়ী হিসেবে গণ্য করা হয়। জলবায়ু পরিবর্তনের ফলে প্রতি বছর আর্কটিকের বরফ আগেভাগে গলে যাচ্ছে, আর মেরু ভালুক হয়ে উঠেছে উষ্ণ হতে থাকা পৃথিবীর প্রতীক।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Ursidae',
      genus: 'Ursus',
      species: 'U. maritimus',
    },
    physical: {
      size: {
        en: 'Males 2.4–3 m long; females 1.8–2.4 m',
        bn: 'পুরুষ ২.৪–৩ মিটার লম্বা; স্ত্রী ১.৮–২.৪ মিটার',
      },
      weight: {
        en: 'Males 350–700 kg; females 150–300 kg',
        bn: 'পুরুষ ৩৫০–৭০০ কেজি; স্ত্রী ১৫০–৩০০ কেজি',
      },
      lifespan: {
        en: '20–25 years in the wild',
        bn: 'বনে ২০–২৫ বছর',
      },
      features: {
        en: [
          'Transparent, hollow guard hairs that look white and trap heat',
          'Black skin beneath the fur to absorb sunlight',
          'Fat layer up to 10 cm thick',
          'Huge paws (up to 30 cm wide) with rough pads for grip on ice',
        ],
        bn: [
          'স্বচ্ছ ও ফাঁপা লোম, যা সাদা দেখায় এবং তাপ ধরে রাখে',
          'লোমের নিচে কালো চামড়া, যা সূর্যের তাপ শোষণ করে',
          '১০ সেমি পর্যন্ত পুরু চর্বির স্তর',
          'বিশাল থাবা (৩০ সেমি পর্যন্ত চওড়া), বরফে পিছলে না যাওয়ার জন্য খসখসে তালু',
        ],
      },
    },
    habitat: {
      en: 'Arctic sea ice, coastal tundra and islands',
      bn: 'আর্কটিকের সামুদ্রিক বরফ, উপকূলীয় তুন্দ্রা ও দ্বীপ',
    },
    habitats: ['polar', 'ocean'],
    regions: ['polar', 'north-america', 'europe'],
    distribution: {
      en: 'Circumpolar Arctic: Canada (about two-thirds of the population), Alaska (USA), Greenland, Svalbard (Norway) and Arctic Russia.',
      bn: 'উত্তর মেরুর চারপাশ জুড়ে: কানাডা (মোট সংখ্যার প্রায় দুই-তৃতীয়াংশ), আলাস্কা (যুক্তরাষ্ট্র), গ্রিনল্যান্ড, স্বালবার্ড (নরওয়ে) এবং রাশিয়ার আর্কটিক অঞ্চল।',
    },
    climate: {
      en: 'Polar climate with long, dark winters and temperatures below −40 °C',
      bn: 'মেরু জলবায়ু; দীর্ঘ অন্ধকার শীতকাল এবং তাপমাত্রা −৪০ ডিগ্রি সেলসিয়াসেরও নিচে নেমে যায়',
    },
    diet: {
      en: 'Carnivore — mainly ringed and bearded seals; also walrus, whale carcasses and seabird eggs',
      bn: 'মাংসাশী — প্রধানত রিংড সিল ও বেয়ার্ডেড সিল; এছাড়া সিন্ধুঘোটক, তিমির মৃতদেহ ও সামুদ্রিক পাখির ডিম',
    },
    ecologicalRole: {
      en: 'The Arctic’s apex predator; its leftover kills feed Arctic foxes, ravens and gulls, and its health reflects the state of the whole sea-ice ecosystem.',
      bn: 'আর্কটিকের শীর্ষ শিকারি; এদের খেয়ে ফেলে রাখা শিকারের অবশিষ্টাংশ খেয়ে বাঁচে মেরু শিয়াল, দাঁড়কাক ও গাংচিল। মেরু ভালুকের অবস্থা দেখে পুরো সামুদ্রিক বরফ বাস্তুতন্ত্রের অবস্থা বোঝা যায়।',
    },
    behavior: {
      en: 'Mostly solitary; travels huge distances across the ice. A powerful swimmer that can swim for days. Pregnant females dig snow dens where cubs are born in winter.',
      bn: 'সাধারণত একা থাকে এবং বরফের ওপর দিয়ে বিশাল দূরত্ব পাড়ি দেয়। শক্তিশালী সাঁতারু, টানা কয়েক দিন সাঁতার কাটতে পারে। গর্ভবতী মা ভালুক বরফ খুঁড়ে গুহা বানায়, সেখানেই শীতকালে বাচ্চার জন্ম হয়।',
    },
    range: {
      native: [
        [58.8, -94.2],
        [71.3, -156.8],
        [74.7, -95.0],
        [78.2, 15.6],
        [76.5, -68.8],
        [71.0, -179.5],
        [80.5, 58.0],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'unknown',
      population: {
        en: 'About 22,000–31,000 in 19 subpopulations',
        bn: '১৯টি উপ-জনগোষ্ঠীতে প্রায় ২২,০০০–৩১,০০০টি',
      },
      threats: {
        en: ['Loss of sea ice due to climate change', 'Oil and gas development', 'Pollution with persistent chemicals', 'Conflict with people in Arctic towns'],
        bn: ['জলবায়ু পরিবর্তনে সামুদ্রিক বরফ হ্রাস', 'তেল ও গ্যাস উত্তোলন', 'দীর্ঘস্থায়ী রাসায়নিক দূষণ', 'আর্কটিকের জনবসতিতে মানুষের সঙ্গে সংঘাত'],
      },
      initiatives: {
        en: ['1973 Agreement on the Conservation of Polar Bears', 'Circumpolar Action Plan', 'Hunting quotas regulated with Indigenous communities', 'Polar bear patrols in Arctic communities'],
        bn: ['১৯৭৩ সালের মেরু ভালুক সংরক্ষণ চুক্তি', 'সারকামপোলার অ্যাকশন প্ল্যান', 'আদিবাসী জনগোষ্ঠীর সঙ্গে মিলে শিকারের কোটা নিয়ন্ত্রণ', 'আর্কটিকের জনবসতিতে মেরু ভালুক টহল দল'],
      },
      assessed: '2015',
    },
    facts: {
      en: [
        'Polar bear fur is not actually white — each hair is transparent.',
        'A polar bear can smell a seal nearly 1 km away.',
        'One female was tracked swimming for 9 days straight across the Beaufort Sea.',
      ],
      bn: [
        'মেরু ভালুকের লোম আসলে সাদা নয় — প্রতিটি লোম স্বচ্ছ।',
        'প্রায় ১ কিলোমিটার দূর থেকেও এরা সিলের গন্ধ পায়।',
        'একটি মা ভালুককে বোফোর্ট সাগরে টানা ৯ দিন সাঁতার কাটতে দেখা গেছে।',
      ],
    },
    related: ['snow-leopard', 'emperor-penguin', 'blue-whale'],
  },
];
