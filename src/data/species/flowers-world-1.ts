import type { Species } from '@/types';

export const flowersWorld1: Species[] = [
  {
    id: 'tuberose',
    commonName: { en: 'Tuberose', bn: 'রজনীগন্ধা' },
    scientificName: 'Agave amica',
    altNames: {
      en: ['Polianthes tuberosa', 'Rajnigandha', 'Night-scented flower'],
      bn: ['পলিয়ান্থেস টিউবারোসা', 'রজনীগন্ধা ফুল', 'সুগন্ধা'],
    },
    synonyms: ['Polianthes tuberosa'],
    category: 'flowers',
    wikiTitle: 'Agave amica',
    description: {
      en: 'Tuberose is a bulbous perennial grown for its waxy white, intensely fragrant flowers that release their strongest scent at night. Originally domesticated in pre-Columbian Mexico, it is now one of the most important cut flowers in Bangladesh, where farmers in Jashore’s Godkhali area grow it on a large scale. Its essential oil is a prized ingredient in perfumery.',
      bn: 'রজনীগন্ধা একটি কন্দজাতীয় বহুবর্ষজীবী গাছ, যার মোমের মতো সাদা ফুল রাতে সবচেয়ে বেশি সুগন্ধ ছড়ায় — নামটিও সেখান থেকেই এসেছে। এর আদি নিবাস মেক্সিকো, সেখানে প্রাচীনকাল থেকেই এর চাষ হতো। আজ এটি বাংলাদেশের অন্যতম প্রধান বাণিজ্যিক ফুল; যশোরের গদখালীসহ বিভিন্ন এলাকায় ব্যাপকভাবে রজনীগন্ধার চাষ হয় এবং বিয়ে, অনুষ্ঠান ও ফুলের তোড়ায় এর চাহিদা সারা বছর।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Asparagales',
      family: 'Asparagaceae',
      genus: 'Agave',
      species: 'A. amica',
    },
    physical: {
      size: {
        en: 'Flower spikes 60–120 cm tall; individual flowers about 5–6 cm long',
        bn: 'ফুলের দণ্ড ৬০–১২০ সেমি উঁচু; প্রতিটি ফুল প্রায় ৫–৬ সেমি লম্বা',
      },
      weight: {
        en: 'Not applicable — usually traded by the stem or spike',
        bn: 'প্রযোজ্য নয় — সাধারণত স্টিক বা ডাঁটি হিসেবে বিক্রি হয়',
      },
      lifespan: {
        en: 'Perennial from underground bulbs; bulbs are replanted every 2–3 years',
        bn: 'মাটির নিচের কন্দ থেকে বহুবর্ষজীবী; সাধারণত ২–৩ বছর পরপর কন্দ নতুন করে লাগানো হয়',
      },
      features: {
        en: [
          'Waxy, tubular white flowers in single or double forms',
          'Long, narrow grass-like leaves at the base',
          'Strong sweet fragrance that intensifies after dusk',
        ],
        bn: [
          'মোমের মতো মসৃণ, নলাকার সাদা ফুল — একক ও ডাবল দুই ধরনেরই হয়',
          'গোড়ায় ঘাসের মতো লম্বা, সরু পাতা',
          'সন্ধ্যার পর মিষ্টি সুগন্ধ আরও তীব্র হয়',
        ],
      },
    },
    habitat: {
      en: 'Known only in cultivation; grown in sunny, well-drained fields and gardens',
      bn: 'বুনো অবস্থায় পাওয়া যায় না; রোদেলা, পানি না জমা মাঠ ও বাগানে চাষ হয়',
    },
    habitats: ['urban-farmland'],
    regions: ['north-america', 'south-asia'],
    distribution: {
      en: 'Native to Mexico; widely cultivated in Bangladesh, India, China, Kenya and other warm countries.',
      bn: 'আদি নিবাস মেক্সিকো; বাংলাদেশ, ভারত, চীন, কেনিয়াসহ বহু উষ্ণ দেশে ব্যাপকভাবে চাষ হয়।',
    },
    climate: {
      en: 'Warm tropical and subtropical climates with plenty of sun',
      bn: 'প্রচুর রোদযুক্ত উষ্ণ ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; stores food in its bulb and needs fertile, well-drained loam',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে কন্দে জমা রাখে; উর্বর দোআঁশ মাটি পছন্দ করে',
    },
    ecologicalRole: {
      en: 'Its night scent attracts moths, the likely natural pollinators of its wild ancestors.',
      bn: 'রাতের সুগন্ধ মথ বা রাতের পতঙ্গদের আকর্ষণ করে, যারা সম্ভবত এর বুনো পূর্বপুরুষদের পরাগায়ন করত।',
    },
    behavior: {
      en: 'Flowers open from the bottom of the spike upward, mainly from spring to autumn; propagated by bulbs rather than seed.',
      bn: 'দণ্ডের নিচ থেকে ওপরের দিকে একে একে ফুল ফোটে, মূলত বসন্ত থেকে শরৎ পর্যন্ত; বীজ নয়, কন্দ থেকেই চারা হয়।',
    },
    range: {
      native: [
        [19.4, -99.1],
        [20.7, -103.3],
        [17.1, -96.7],
        [21.9, -102.3],
      ],
      introduced: [
        [23.05, 89.0],
        [23.8, 90.4],
        [22.6, 88.4],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Unknown in the wild — the plant is known only from cultivation', 'Bulb rot and nematode diseases in farms'],
        bn: ['বুনো অবস্থায় এর অস্তিত্ব অজানা — শুধু চাষের মাধ্যমেই টিকে আছে', 'খামারে কন্দ পচা ও কৃমিজনিত রোগ'],
      },
      initiatives: {
        en: ['Improved varieties and disease management from horticultural research institutes', 'Flower-farming support programmes in Jashore'],
        bn: ['উদ্যানতত্ত্ব গবেষণা প্রতিষ্ঠানের উন্নত জাত ও রোগ ব্যবস্থাপনা', 'যশোর অঞ্চলে ফুলচাষিদের সহায়তা কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'Its Bengali name, rajanigandha, means “fragrance of the night”.',
        'Tuberose absolute is one of the most expensive natural perfume materials.',
        'Godkhali in Jashore is often called the flower capital of Bangladesh.',
      ],
      bn: [
        '“রজনীগন্ধা” নামের অর্থ “রাতের সুগন্ধ”।',
        'রজনীগন্ধার নির্যাস সুগন্ধি শিল্পের সবচেয়ে দামি প্রাকৃতিক উপাদানগুলোর একটি।',
        'যশোরের গদখালীকে প্রায়ই বাংলাদেশের “ফুলের রাজধানী” বলা হয়।',
      ],
    },
    related: ['african-marigold', 'madonna-lily', 'gerbera-daisy'],
  },
  {
    id: 'african-marigold',
    commonName: { en: 'African Marigold', bn: 'গাঁদা' },
    scientificName: 'Tagetes erecta',
    altNames: {
      en: ['Mexican marigold', 'Aztec marigold', 'Marigold'],
      bn: ['গাঁদা ফুল', 'আফ্রিকান গাঁদা', 'হলুদ গাঁদা'],
    },
    category: 'flowers',
    wikiTitle: 'Tagetes erecta',
    description: {
      en: 'Despite its name, the African marigold is native to Mexico and Central America, where the Aztecs used it in rituals. Its large, pom-pom orange and yellow flower heads are now essential in South Asia for garlands, weddings, Pohela Falgun and religious festivals. In Bangladesh it is one of the easiest and most widely grown winter flowers.',
      bn: 'নামে “আফ্রিকান” হলেও গাঁদার আদি নিবাস মেক্সিকো ও মধ্য আমেরিকা, যেখানে অ্যাজটেকরা ধর্মীয় আচারে এটি ব্যবহার করত। এর বড়, বলের মতো কমলা ও হলুদ ফুল এখন দক্ষিণ এশিয়ায় মালা গাঁথা, বিয়ে, পহেলা ফাল্গুন ও নানা উৎসবের অপরিহার্য অনুষঙ্গ। বাংলাদেশে শীতকালে সবচেয়ে সহজে ও সবচেয়ে বেশি চাষ হওয়া ফুলগুলোর মধ্যে গাঁদা অন্যতম।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Asterales',
      family: 'Asteraceae',
      genus: 'Tagetes',
      species: 'T. erecta',
    },
    physical: {
      size: {
        en: 'Plants 30–110 cm tall; flower heads 5–12 cm across',
        bn: 'গাছ ৩০–১১০ সেমি উঁচু; ফুলের মাথা ৫–১২ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — flowers are sold by the garland or by weight in bulk',
        bn: 'প্রযোজ্য নয় — ফুল মালা হিসেবে বা পাইকারি দরে ওজন ধরে বিক্রি হয়',
      },
      lifespan: {
        en: 'Annual; completes its life cycle in 4–6 months',
        bn: 'একবর্ষজীবী; ৪–৬ মাসে জীবনচক্র শেষ হয়',
      },
      features: {
        en: [
          'Dense, rounded flower heads in yellow, gold or orange',
          'Finely divided, strongly scented leaves',
          'Sturdy, branching upright stems',
        ],
        bn: [
          'হলুদ, সোনালি বা কমলা রঙের ঘন, গোলাকার ফুল',
          'সূক্ষ্মভাবে খাঁজকাটা, তীব্র গন্ধযুক্ত পাতা',
          'শক্ত, শাখাপ্রশাখাযুক্ত খাড়া কাণ্ড',
        ],
      },
    },
    habitat: {
      en: 'Open, sunny grassland and scrub in its native range; gardens and farmland elsewhere',
      bn: 'আদি অঞ্চলে খোলা, রোদেলা তৃণভূমি ও ঝোপঝাড়; অন্যত্র বাগান ও কৃষিজমি',
    },
    habitats: ['grassland', 'urban-farmland'],
    regions: ['north-america', 'south-asia'],
    distribution: {
      en: 'Native to Mexico and Guatemala; cultivated across South Asia, including all of Bangladesh, and worldwide.',
      bn: 'আদি নিবাস মেক্সিকো ও গুয়াতেমালা; বাংলাদেশসহ পুরো দক্ষিণ এশিয়া এবং বিশ্বজুড়ে চাষ হয়।',
    },
    climate: {
      en: 'Warm temperate to tropical; in Bangladesh grown mainly in the cool dry winter',
      bn: 'উষ্ণ নাতিশীতোষ্ণ থেকে ক্রান্তীয়; বাংলাদেশে মূলত শুষ্ক শীতকালে চাষ হয়',
    },
    diet: {
      en: 'Photosynthesis; thrives in sunny spots with moderately fertile soil',
      bn: 'সালোকসংশ্লেষণ; রোদেলা জায়গায় মাঝারি উর্বর মাটিতে ভালো জন্মে',
    },
    ecologicalRole: {
      en: 'Attracts bees and butterflies, and its roots release compounds that suppress some soil nematodes.',
      bn: 'মৌমাছি ও প্রজাপতিকে আকর্ষণ করে; এর শিকড় থেকে নিঃসৃত রাসায়নিক মাটির কিছু ক্ষতিকর কৃমি দমন করে।',
    },
    behavior: {
      en: 'Grows quickly from seed or cuttings and flowers continuously for several months, especially if old blooms are removed.',
      bn: 'বীজ বা ডাল কেটে লাগালে দ্রুত বাড়ে; পুরোনো ফুল তুলে দিলে কয়েক মাস ধরে একটানা ফুল দেয়।',
    },
    range: {
      native: [
        [19.4, -99.1],
        [17.1, -96.7],
        [16.75, -93.1],
        [14.6, -90.5],
      ],
      introduced: [
        [23.8, 90.4],
        [22.6, 88.4],
        [26.85, 80.95],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not considered threatened; abundant in cultivation', 'Fungal blights and mites in commercial crops'],
        bn: ['বিপন্ন নয়; চাষাবাদে প্রচুর পরিমাণে রয়েছে', 'বাণিজ্যিক চাষে ছত্রাকজনিত রোগ ও মাকড়ের আক্রমণ'],
      },
      initiatives: {
        en: ['Use as a trap crop and companion plant in integrated pest management', 'Commercial cultivation for natural lutein pigment'],
        bn: ['সমন্বিত বালাই ব্যবস্থাপনায় ফাঁদ ফসল ও সহচর উদ্ভিদ হিসেবে ব্যবহার', 'প্রাকৃতিক লুটেইন রঞ্জক তৈরির জন্য বাণিজ্যিক চাষ'],
      },
    },
    facts: {
      en: [
        'Marigold petals are a major source of lutein, used as a natural yellow colouring in poultry feed and food.',
        'In Mexico it is the cempasúchil, the flower of the Day of the Dead.',
        'Traditionally the crushed leaves are applied to minor cuts; this is folk use, not proven medicine.',
      ],
      bn: [
        'গাঁদার পাপড়ি লুটেইনের একটি বড় উৎস, যা মুরগির খাদ্য ও খাবারে প্রাকৃতিক হলুদ রং হিসেবে ব্যবহৃত হয়।',
        'মেক্সিকোতে একে “সেমপাসুচিল” বলে, যা মৃতদের দিবসের (ডে অব দ্য ডেড) প্রধান ফুল।',
        'গ্রামে কাটা জায়গায় গাঁদা পাতার রস লাগানোর প্রচলন আছে — এটি লোকজ ব্যবহার, প্রমাণিত চিকিৎসা নয়।',
      ],
    },
    related: ['tuberose', 'garden-cosmos', 'zinnia', 'sunflower'],
  },
  {
    id: 'madagascar-periwinkle',
    commonName: { en: 'Madagascar Periwinkle', bn: 'নয়নতারা' },
    scientificName: 'Catharanthus roseus',
    altNames: {
      en: ['Rosy periwinkle', 'Vinca', 'Bright eyes'],
      bn: ['নয়নতারা ফুল', 'সদাবাহার', 'গোলাপি নয়নতারা'],
    },
    synonyms: ['Vinca rosea'],
    category: 'flowers',
    secondaryCategories: ['plants'],
    wikiTitle: 'Catharanthus roseus',
    description: {
      en: 'The Madagascar periwinkle is a hardy evergreen herb with five-petalled pink, white or purple flowers that bloom almost all year. Native only to Madagascar, it is now a familiar sight in Bangladeshi courtyards, roadsides and graveyards. It is famous in medicine as the source of vinblastine and vincristine, anticancer drugs — but the whole plant is poisonous if eaten.',
      bn: 'নয়নতারা একটি শক্তপোক্ত চিরসবুজ বিরুৎ, যার পাঁচ পাপড়ির গোলাপি, সাদা বা বেগুনি ফুল প্রায় সারা বছরই ফোটে। এর আদি নিবাস কেবল মাদাগাস্কার, তবে এখন বাংলাদেশের উঠান, রাস্তার ধার ও কবরস্থানে এটি অতি পরিচিত দৃশ্য। চিকিৎসাবিজ্ঞানে এটি বিখ্যাত, কারণ এ থেকে ক্যানসার-প্রতিরোধী ওষুধ ভিনব্লাস্টিন ও ভিনক্রিস্টিন পাওয়া যায় — তবে পুরো গাছটিই বিষাক্ত, খাওয়া একেবারেই নিরাপদ নয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Gentianales',
      family: 'Apocynaceae',
      genus: 'Catharanthus',
      species: 'C. roseus',
    },
    physical: {
      size: {
        en: 'Up to about 1 m tall; flowers 2.5–4.5 cm across',
        bn: 'প্রায় ১ মিটার পর্যন্ত উঁচু; ফুল ২.৫–৪.৫ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a small herb',
        bn: 'প্রযোজ্য নয় — ছোট বিরুৎ জাতীয় গাছ',
      },
      lifespan: {
        en: 'Short-lived perennial, often 2–3 years; grown as an annual in cold countries',
        bn: 'স্বল্পায়ু বহুবর্ষজীবী, সাধারণত ২–৩ বছর বাঁচে; শীতপ্রধান দেশে একবর্ষজীবী হিসেবে চাষ হয়',
      },
      features: {
        en: [
          'Five flat petals, often with a darker red or yellow “eye” at the centre',
          'Glossy, oval, opposite leaves',
          'Stems and leaves contain toxic alkaloids',
        ],
        bn: [
          'পাঁচটি চ্যাপ্টা পাপড়ি, মাঝখানে প্রায়ই গাঢ় লাল বা হলুদ “চোখ”',
          'চকচকে, ডিম্বাকার, জোড়ায় জোড়ায় সাজানো পাতা',
          'কাণ্ড ও পাতায় বিষাক্ত অ্যালকালয়েড থাকে',
        ],
      },
    },
    habitat: {
      en: 'Dry forest edges, sandy coastal scrub and disturbed ground; gardens and roadsides when introduced',
      bn: 'শুকনো বনের কিনারা, বালুময় উপকূলীয় ঝোপ ও পতিত জমি; অন্য দেশে বাগান ও রাস্তার ধারে',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['africa', 'south-asia'],
    distribution: {
      en: 'Endemic to Madagascar in the wild; naturalised throughout the tropics, including Bangladesh.',
      bn: 'বুনো অবস্থায় শুধু মাদাগাস্কারে পাওয়া যায়; বাংলাদেশসহ সারা পৃথিবীর ক্রান্তীয় অঞ্চলে ছড়িয়ে প্রাকৃতিকভাবে জন্মাচ্ছে।',
    },
    climate: {
      en: 'Tropical and subtropical; very tolerant of heat and drought',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয়; গরম ও খরা খুব ভালো সহ্য করে',
    },
    diet: {
      en: 'Photosynthesis; grows even in poor, sandy soils',
      bn: 'সালোকসংশ্লেষণ; অনুর্বর বালুমাটিতেও জন্মাতে পারে',
    },
    ecologicalRole: {
      en: 'Visited by butterflies and moths; its toxic alkaloids protect it from most grazing animals.',
      bn: 'প্রজাপতি ও মথ এর ফুলে আসে; বিষাক্ত অ্যালকালয়েডের কারণে বেশির ভাগ তৃণভোজী প্রাণী একে খায় না।',
    },
    behavior: {
      en: 'Flowers almost year-round and self-seeds freely, springing up in cracks and waste ground.',
      bn: 'প্রায় সারা বছর ফুল ফোটায় এবং নিজে নিজেই বীজ ছড়িয়ে দেয়ালের ফাটল ও পতিত জায়গায় গজিয়ে ওঠে।',
    },
    range: {
      native: [
        [-23.35, 43.7],
        [-25.0, 46.9],
        [-18.9, 47.5],
        [-15.7, 46.3],
        [-12.3, 49.3],
      ],
      introduced: [
        [23.8, 90.4],
        [13.1, 80.3],
        [25.8, -80.2],
      ],
      endemicTo: { en: 'Madagascar (wild populations)', bn: 'মাদাগাস্কার (বুনো জনগোষ্ঠী)' },
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Destruction of native dry forest in Madagascar', 'Slash-and-burn agriculture'],
        bn: ['মাদাগাস্কারের প্রাকৃতিক শুকনো বন ধ্বংস', 'জুম বা আগুনে পোড়ানো চাষাবাদ'],
      },
      initiatives: {
        en: ['Protected areas in Madagascar', 'Large-scale cultivation for the pharmaceutical industry reduces wild harvesting'],
        bn: ['মাদাগাস্কারে সংরক্ষিত বনাঞ্চল', 'ওষুধশিল্পের জন্য বড় পরিসরে চাষ, যা বুনো গাছ সংগ্রহের চাপ কমায়'],
      },
    },
    facts: {
      en: [
        'Vincristine from this plant helped raise childhood leukaemia survival dramatically.',
        'Hundreds of kilograms of dried leaves are needed to extract just a gram of vinblastine.',
        'It is used in traditional medicine for diabetes, but self-medication is dangerous because the plant is toxic.',
      ],
      bn: [
        'এই গাছ থেকে পাওয়া ভিনক্রিস্টিন শিশুদের লিউকেমিয়া থেকে সেরে ওঠার হার নাটকীয়ভাবে বাড়িয়েছে।',
        'মাত্র এক গ্রাম ভিনব্লাস্টিন পেতে কয়েকশ কেজি শুকনো পাতা লাগে।',
        'লোকজ চিকিৎসায় ডায়াবেটিসে এর ব্যবহার আছে, কিন্তু গাছটি বিষাক্ত বলে নিজে নিজে সেবন করা বিপজ্জনক।',
      ],
    },
    related: ['moss-rose', 'zinnia', 'neem'],
  },
  {
    id: 'garden-cosmos',
    commonName: { en: 'Garden Cosmos', bn: 'কসমস' },
    scientificName: 'Cosmos bipinnatus',
    altNames: {
      en: ['Cosmos', 'Mexican aster'],
      bn: ['কসমস ফুল', 'মেক্সিকান অ্যাস্টার'],
    },
    category: 'flowers',
    wikiTitle: 'Cosmos bipinnatus',
    description: {
      en: 'Garden cosmos is a tall, airy annual with daisy-like flowers in pink, white, magenta and crimson around a yellow centre. Native to the highlands of Mexico, it is one of the most popular winter flowers in Bangladeshi gardens and roadside beds because it grows fast and needs little care.',
      bn: 'কসমস লম্বা, হালকা গড়নের একবর্ষজীবী গাছ, যার ডেইজির মতো ফুলে হলুদ কেন্দ্রের চারপাশে গোলাপি, সাদা, ম্যাজেন্টা বা গাঢ় লাল পাপড়ি থাকে। এর আদি নিবাস মেক্সিকোর উঁচু অঞ্চল। দ্রুত বাড়ে এবং খুব কম যত্নেই ফুল দেয় বলে বাংলাদেশের বাগান, ছাদবাগান ও সড়কদ্বীপে এটি শীতের অন্যতম জনপ্রিয় ফুল।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Asterales',
      family: 'Asteraceae',
      genus: 'Cosmos',
      species: 'C. bipinnatus',
    },
    physical: {
      size: {
        en: 'Usually 0.6–2 m tall; flower heads 5–10 cm across',
        bn: 'সাধারণত ০.৬–২ মিটার উঁচু; ফুলের মাথা ৫–১০ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a light, herbaceous annual',
        bn: 'প্রযোজ্য নয় — হালকা, নরম কাণ্ডের একবর্ষজীবী গাছ',
      },
      lifespan: {
        en: 'Annual',
        bn: 'একবর্ষজীবী',
      },
      features: {
        en: [
          'Feathery, finely divided leaves like threads',
          'Eight broad ray petals with toothed tips',
          'Slender stems that sway in the wind',
        ],
        bn: [
          'সুতোর মতো সূক্ষ্মভাবে বিভক্ত, পালকের মতো পাতা',
          'আগা খাঁজকাটা আটটি চওড়া পাপড়ি',
          'সরু কাণ্ড, যা বাতাসে দোলে',
        ],
      },
    },
    habitat: {
      en: 'Grassy slopes and roadsides in highlands; gardens and wasteland where introduced',
      bn: 'উঁচু অঞ্চলের ঘাসে ঢাকা ঢাল ও রাস্তার ধার; অন্য দেশে বাগান ও পতিত জমি',
    },
    habitats: ['grassland', 'urban-farmland'],
    regions: ['north-america', 'south-asia', 'africa'],
    distribution: {
      en: 'Native to Mexico and the far south-western United States; grown and naturalised worldwide, including Bangladesh and South Africa.',
      bn: 'আদি নিবাস মেক্সিকো ও যুক্তরাষ্ট্রের দক্ষিণ-পশ্চিম প্রান্ত; বাংলাদেশ ও দক্ষিণ আফ্রিকাসহ বিশ্বজুড়ে চাষ হয় ও প্রাকৃতিকভাবে ছড়িয়েছে।',
    },
    climate: {
      en: 'Sunny, warm temperate to subtropical; prefers dry spells to waterlogging',
      bn: 'রোদেলা, উষ্ণ নাতিশীতোষ্ণ থেকে উপক্রান্তীয়; জলাবদ্ধতার চেয়ে শুকনো আবহাওয়া পছন্দ করে',
    },
    diet: {
      en: 'Photosynthesis; flowers best in rather poor soil — too much fertiliser gives leaves instead of flowers',
      bn: 'সালোকসংশ্লেষণ; কম উর্বর মাটিতেই বেশি ফুল দেয় — অতিরিক্ত সারে পাতা বাড়ে, ফুল কমে',
    },
    ecologicalRole: {
      en: 'A rich nectar and pollen source for bees, hoverflies and butterflies; seeds feed small birds.',
      bn: 'মৌমাছি, হোভারফ্লাই ও প্রজাপতির জন্য মধু ও পরাগের ভালো উৎস; বীজ ছোট পাখিরা খায়।',
    },
    behavior: {
      en: 'Germinates quickly and flowers within about two months of sowing; readily self-seeds.',
      bn: 'বীজ দ্রুত অঙ্কুরিত হয় এবং বপনের প্রায় দুই মাসের মধ্যে ফুল ফোটে; নিজে নিজেই বীজ ছড়ায়।',
    },
    range: {
      native: [
        [19.4, -99.1],
        [20.6, -100.4],
        [23.6, -102.5],
        [28.6, -106.1],
        [31.3, -110.9],
      ],
      introduced: [
        [23.8, 90.4],
        [-26.2, 28.0],
        [35.0, 135.8],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; common in cultivation', 'Aphids and powdery mildew in gardens'],
        bn: ['বিপন্ন নয়; চাষাবাদে বহুল প্রচলিত', 'বাগানে জাবপোকা ও পাউডারি মিলডিউ রোগ'],
      },
      initiatives: {
        en: ['Included in pollinator-friendly planting schemes', 'Monitored as a roadside weed in some regions where it spreads'],
        bn: ['পরাগায়নকারী-বান্ধব বাগান পরিকল্পনায় অন্তর্ভুক্ত', 'যেসব অঞ্চলে দ্রুত ছড়ায়, সেখানে আগাছা হিসেবে নজরদারি'],
      },
    },
    facts: {
      en: [
        'Spanish priests in Mexico named it cosmos, Greek for “order” or “harmony”, for its evenly arranged petals.',
        'In South Africa, roadsides turn pink with naturalised cosmos every autumn.',
      ],
      bn: [
        'মেক্সিকোর স্প্যানিশ ধর্মযাজকেরা সুবিন্যস্ত পাপড়ির জন্য এর নাম রাখেন “কসমস”, গ্রিক ভাষায় যার অর্থ “শৃঙ্খলা” বা “সামঞ্জস্য”।',
        'দক্ষিণ আফ্রিকায় প্রতি শরতে রাস্তার দুপাশ বুনো কসমসে গোলাপি হয়ে যায়।',
      ],
    },
    related: ['african-marigold', 'garden-dahlia', 'zinnia', 'sunflower'],
  },
  {
    id: 'garden-dahlia',
    commonName: { en: 'Garden Dahlia', bn: 'ডালিয়া' },
    scientificName: 'Dahlia pinnata',
    altNames: {
      en: ['Dahlia', 'Pinnate dahlia'],
      bn: ['ডালিয়া ফুল', 'ডালিয়া ফুলগাছ'],
    },
    synonyms: ['Dahlia variabilis'],
    category: 'flowers',
    wikiTitle: 'Dahlia pinnata',
    description: {
      en: 'The garden dahlia is a tuberous perennial from the mountains of Mexico, ancestor of the thousands of showy dahlia cultivars grown today. Its flowers range from small pom-poms to “dinner-plate” blooms in almost every colour except true blue. In Bangladesh dahlias are a highlight of winter flower shows and rooftop gardens.',
      bn: 'ডালিয়া মেক্সিকোর পার্বত্য অঞ্চলের একটি কন্দমূলযুক্ত বহুবর্ষজীবী গাছ, আর আজকের হাজারো বাহারি ডালিয়া জাতের পূর্বপুরুষ এটিই। ছোট বলের মতো ফুল থেকে শুরু করে থালার সমান বড় ফুল পর্যন্ত হয়; প্রকৃত নীল ছাড়া প্রায় সব রঙেই ডালিয়া পাওয়া যায়। বাংলাদেশে শীতের ফুল প্রদর্শনী ও ছাদবাগানের মধ্যমণি ডালিয়া।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Asterales',
      family: 'Asteraceae',
      genus: 'Dahlia',
      species: 'D. pinnata',
    },
    physical: {
      size: {
        en: 'Plants 0.7–2 m tall; flowers from 5 cm to over 25 cm across in cultivars',
        bn: 'গাছ ০.৭–২ মিটার উঁচু; জাতভেদে ফুল ৫ সেমি থেকে ২৫ সেমির বেশি চওড়া',
      },
      weight: {
        en: 'Not applicable — stores food in clustered tuberous roots',
        bn: 'প্রযোজ্য নয় — গুচ্ছ আকারের কন্দমূলে খাদ্য জমা রাখে',
      },
      lifespan: {
        en: 'Perennial from tuberous roots; grown as a winter seasonal in Bangladesh',
        bn: 'কন্দমূল থেকে বহুবর্ষজীবী; বাংলাদেশে শীতকালীন মৌসুমি ফুল হিসেবে চাষ হয়',
      },
      features: {
        en: [
          'Hollow stems and pinnately divided leaves',
          'Flower heads with many layered ray florets in cultivars',
          'Clusters of sweet-potato-like tuberous roots',
        ],
        bn: [
          'ফাঁপা কাণ্ড ও পালকের মতো বিভক্ত পাতা',
          'চাষের জাতে স্তরে স্তরে সাজানো অসংখ্য পাপড়ি',
          'মিষ্টি আলুর মতো দেখতে গুচ্ছবদ্ধ কন্দমূল',
        ],
      },
    },
    habitat: {
      en: 'Pine–oak forest clearings and grassy slopes in highlands; gardens worldwide',
      bn: 'উঁচু অঞ্চলের পাইন–ওক বনের ফাঁকা জায়গা ও ঘাসে ঢাকা ঢাল; বিশ্বজুড়ে বাগানে',
    },
    habitats: ['mountain', 'urban-farmland'],
    regions: ['north-america', 'south-asia', 'europe'],
    distribution: {
      en: 'Native to the central highlands of Mexico; cultivated in gardens across the world, including Bangladesh.',
      bn: 'আদি নিবাস মেক্সিকোর মধ্যাঞ্চলীয় উঁচু ভূমি; বাংলাদেশসহ বিশ্বের প্রায় সব দেশের বাগানে চাষ হয়।',
    },
    climate: {
      en: 'Mild, sunny climates; dislikes frost and extreme heat',
      bn: 'মৃদু, রোদেলা আবহাওয়া; তুষারপাত ও অতিরিক্ত গরম সহ্য করতে পারে না',
    },
    diet: {
      en: 'Photosynthesis; needs rich, well-drained soil and regular feeding for large blooms',
      bn: 'সালোকসংশ্লেষণ; বড় ফুলের জন্য উর্বর, ঝুরঝুরে মাটি ও নিয়মিত সার দরকার',
    },
    ecologicalRole: {
      en: 'Open single-flowered forms feed bees and butterflies; heavily doubled cultivars offer little nectar.',
      bn: 'একক পাপড়ির ফুল মৌমাছি ও প্রজাপতিকে খাবার জোগায়; ঘন পাপড়ির জাতে মধু প্রায় থাকে না।',
    },
    behavior: {
      en: 'Grows from tubers or cuttings, flowers for several months, then dies back to the tuberous roots in the dormant season.',
      bn: 'কন্দ বা কাটিং থেকে চারা হয়, কয়েক মাস ফুল দেয়, তারপর সুপ্ত মৌসুমে ওপরের অংশ মরে গিয়ে কন্দমূল মাটিতে থেকে যায়।',
    },
    range: {
      native: [
        [19.4, -99.1],
        [19.05, -98.2],
        [18.9, -99.2],
        [20.7, -103.3],
        [19.7, -101.2],
      ],
      introduced: [
        [23.8, 90.4],
        [52.1, 5.1],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Loss of highland habitat for wild dahlia species in Mexico', 'Viral diseases and tuber rot in cultivation'],
        bn: ['মেক্সিকোতে বুনো ডালিয়ার পার্বত্য আবাসস্থল হ্রাস', 'চাষে ভাইরাসজনিত রোগ ও কন্দ পচা'],
      },
      initiatives: {
        en: ['National dahlia collections and registers kept by horticultural societies', 'Seed and tuber banks of wild Mexican dahlias'],
        bn: ['উদ্যানতত্ত্ব সমিতিগুলোর জাতীয় ডালিয়া সংগ্রহ ও নিবন্ধন', 'মেক্সিকোর বুনো ডালিয়ার বীজ ও কন্দ ব্যাংক'],
      },
    },
    facts: {
      en: [
        'The dahlia is the national flower of Mexico.',
        'The Aztecs ate dahlia tubers and used the hollow stems of tree dahlias as water pipes.',
        'There are tens of thousands of registered dahlia cultivars.',
      ],
      bn: [
        'ডালিয়া মেক্সিকোর জাতীয় ফুল।',
        'অ্যাজটেকরা ডালিয়ার কন্দ খেত এবং বড় জাতের ডালিয়ার ফাঁপা কাণ্ড পানির নল হিসেবে ব্যবহার করত।',
        'বিশ্বে কয়েক হাজার নিবন্ধিত ডালিয়ার জাত রয়েছে।',
      ],
    },
    related: ['garden-cosmos', 'zinnia', 'african-marigold'],
  },
  {
    id: 'zinnia',
    commonName: { en: 'Zinnia', bn: 'জিনিয়া' },
    scientificName: 'Zinnia elegans',
    altNames: {
      en: ['Common zinnia', 'Youth-and-age', 'Elegant zinnia'],
      bn: ['জিনিয়া ফুল', 'জিনিয়া ফুলগাছ', 'বাহারি জিনিয়া'],
    },
    synonyms: ['Zinnia violacea'],
    category: 'flowers',
    wikiTitle: 'Zinnia elegans',
    description: {
      en: 'Zinnia is a cheerful, sun-loving annual from Mexico with bright, long-lasting flowers in red, orange, pink, yellow, purple and white. It tolerates heat better than most garden annuals, so in Bangladesh it is grown both in winter and in the hot pre-monsoon season. Its flowers last well in vases and draw butterflies to the garden.',
      bn: 'জিনিয়া মেক্সিকোর একটি রোদপ্রিয় একবর্ষজীবী গাছ, যার উজ্জ্বল ও দীর্ঘস্থায়ী ফুল লাল, কমলা, গোলাপি, হলুদ, বেগুনি ও সাদা রঙের হয়। অধিকাংশ মৌসুমি ফুলের চেয়ে এটি গরম বেশি সহ্য করে, তাই বাংলাদেশে শীতের পাশাপাশি গ্রীষ্মেও জিনিয়া ফোটে। ফুলদানিতে অনেক দিন তাজা থাকে এবং বাগানে প্রজাপতি টেনে আনে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Asterales',
      family: 'Asteraceae',
      genus: 'Zinnia',
      species: 'Z. elegans',
    },
    physical: {
      size: {
        en: 'Plants 30–100 cm tall; flower heads 3–12 cm across',
        bn: 'গাছ ৩০–১০০ সেমি উঁচু; ফুলের মাথা ৩–১২ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a herbaceous annual',
        bn: 'প্রযোজ্য নয় — নরম কাণ্ডের একবর্ষজীবী গাছ',
      },
      lifespan: {
        en: 'Annual',
        bn: 'একবর্ষজীবী',
      },
      features: {
        en: [
          'Rough, hairy, oval leaves clasping the stem',
          'Stiff ray petals that stay on the flower for weeks',
          'Single, semi-double and fully double flower forms',
        ],
        bn: [
          'খসখসে, রোমশ, ডিম্বাকার পাতা কাণ্ডকে জড়িয়ে থাকে',
          'শক্ত পাপড়ি, যা কয়েক সপ্তাহ ফুলে টিকে থাকে',
          'একক, আধা-ডাবল ও পূর্ণ ডাবল — নানা রকম ফুল',
        ],
      },
    },
    habitat: {
      en: 'Dry grassland and scrub in its native range; sunny garden beds elsewhere',
      bn: 'আদি অঞ্চলে শুকনো তৃণভূমি ও ঝোপঝাড়; অন্যত্র রোদেলা বাগানের বেড',
    },
    habitats: ['grassland', 'urban-farmland'],
    regions: ['north-america', 'south-asia'],
    distribution: {
      en: 'Native to Mexico; cultivated worldwide and very common in Bangladesh and India.',
      bn: 'আদি নিবাস মেক্সিকো; বিশ্বজুড়ে চাষ হয় এবং বাংলাদেশ ও ভারতে অত্যন্ত প্রচলিত।',
    },
    climate: {
      en: 'Hot, sunny climates; sensitive to cold and to prolonged wet weather',
      bn: 'গরম, রোদেলা আবহাওয়া; ঠান্ডা ও দীর্ঘ স্যাঁতসেঁতে আবহাওয়ায় ভালো থাকে না',
    },
    diet: {
      en: 'Photosynthesis; grows in most well-drained soils',
      bn: 'সালোকসংশ্লেষণ; পানি নিষ্কাশনের সুবিধাযুক্ত প্রায় সব মাটিতেই জন্মে',
    },
    ecologicalRole: {
      en: 'One of the best garden flowers for butterflies, which land on its flat flower heads to drink nectar.',
      bn: 'প্রজাপতির জন্য অন্যতম সেরা বাগানফুল; চ্যাপ্টা ফুলের ওপর বসে প্রজাপতিরা মধু পান করে।',
    },
    behavior: {
      en: 'Grows fast from seed, flowering 6–8 weeks after sowing and continuing until cold weather.',
      bn: 'বীজ থেকে দ্রুত বাড়ে; বপনের ৬–৮ সপ্তাহ পরে ফুল ফোটা শুরু হয় এবং ঠান্ডা পড়া পর্যন্ত চলে।',
    },
    range: {
      native: [
        [19.4, -99.1],
        [20.6, -103.3],
        [17.1, -96.7],
        [22.15, -100.98],
      ],
      introduced: [
        [23.8, 90.4],
        [24.9, 91.9],
        [28.6, 77.2],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; abundant in cultivation', 'Powdery mildew and leaf spot in humid weather'],
        bn: ['বিপন্ন নয়; চাষাবাদে প্রচুর পরিমাণে রয়েছে', 'আর্দ্র আবহাওয়ায় পাউডারি মিলডিউ ও পাতায় দাগ রোগ'],
      },
      initiatives: {
        en: ['Breeding of mildew-resistant varieties', 'Use in butterfly gardens and school gardening programmes'],
        bn: ['মিলডিউ-প্রতিরোধী জাত উদ্ভাবন', 'প্রজাপতি উদ্যান ও স্কুলের বাগান কর্মসূচিতে ব্যবহার'],
      },
    },
    facts: {
      en: [
        'In 2016 a zinnia became the first flower to bloom on the International Space Station.',
        'It is named after the German botanist Johann Gottfried Zinn.',
      ],
      bn: [
        '২০১৬ সালে আন্তর্জাতিক মহাকাশ স্টেশনে প্রথম যে ফুল ফোটে, সেটি ছিল একটি জিনিয়া।',
        'জার্মান উদ্ভিদবিজ্ঞানী ইয়োহান গটফ্রিড জিনের নামে এর নামকরণ করা হয়েছে।',
      ],
    },
    related: ['garden-cosmos', 'african-marigold', 'garden-dahlia'],
  },
  {
    id: 'gerbera-daisy',
    commonName: { en: 'Gerbera Daisy', bn: 'জারবেরা' },
    scientificName: 'Gerbera jamesonii',
    altNames: {
      en: ['Barberton daisy', 'Transvaal daisy', 'Gerbera'],
      bn: ['জারবেরা ফুল', 'বারবারটন ডেইজি', 'ট্রান্সভাল ডেইজি'],
    },
    category: 'flowers',
    wikiTitle: 'Gerbera jamesonii',
    description: {
      en: 'The gerbera, or Barberton daisy, is a perennial from the grasslands of north-eastern South Africa and Eswatini. Its large, perfectly round flowers in red, orange, pink, yellow and white make it one of the world’s top-selling cut flowers. In Bangladesh, gerbera is grown commercially in Jashore, Savar and Gazipur, often under polythene shade houses.',
      bn: 'জারবেরা বা বারবারটন ডেইজি দক্ষিণ আফ্রিকার উত্তর-পূর্বাঞ্চল ও এসওয়াতিনির তৃণভূমির একটি বহুবর্ষজীবী গাছ। লাল, কমলা, গোলাপি, হলুদ ও সাদা রঙের বড়, নিখুঁত গোল ফুলের জন্য এটি বিশ্বের সর্বাধিক বিক্রিত কাট-ফ্লাওয়ারগুলোর একটি। বাংলাদেশে যশোর, সাভার ও গাজীপুরে প্রায়ই পলিথিনের ছাউনির নিচে বাণিজ্যিকভাবে জারবেরা চাষ হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Asterales',
      family: 'Asteraceae',
      genus: 'Gerbera',
      species: 'G. jamesonii',
    },
    physical: {
      size: {
        en: 'Leaves in a basal rosette; flower stalks 25–60 cm; flower heads 7–12 cm across',
        bn: 'গোড়ায় গোলাকারে সাজানো পাতা; ফুলের ডাঁটি ২৫–৬০ সেমি; ফুল ৭–১২ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — sold by the stem',
        bn: 'প্রযোজ্য নয় — ডাঁটি হিসেবে বিক্রি হয়',
      },
      lifespan: {
        en: 'Perennial; commercial plants are productive for 2–3 years',
        bn: 'বহুবর্ষজীবী; বাণিজ্যিক চাষে একটি গাছ ২–৩ বছর ভালো ফলন দেয়',
      },
      features: {
        en: [
          'Single leafless flower stalk rising from a rosette of lobed, woolly leaves',
          'Flat, symmetrical flower head with a dark or green centre',
          'Cut flowers last one to two weeks in water',
        ],
        bn: [
          'খাঁজকাটা, পশমি পাতার গুচ্ছ থেকে একটি পাতাহীন ফুলের ডাঁটি ওঠে',
          'চ্যাপ্টা, সুষম ফুল; মাঝখানটা গাঢ় বা সবুজ',
          'কাটা ফুল পানিতে এক থেকে দুই সপ্তাহ তাজা থাকে',
        ],
      },
    },
    habitat: {
      en: 'Grassy hillsides and rocky outcrops in summer-rainfall grassland',
      bn: 'গ্রীষ্মকালীন বৃষ্টিনির্ভর তৃণভূমির ঘাসে ঢাকা পাহাড়ি ঢাল ও পাথুরে জায়গা',
    },
    habitats: ['grassland', 'urban-farmland'],
    regions: ['africa', 'south-asia', 'europe'],
    distribution: {
      en: 'Native to Mpumalanga and Limpopo in South Africa and to Eswatini; grown commercially in the Netherlands, Kenya, India, Bangladesh and elsewhere.',
      bn: 'আদি নিবাস দক্ষিণ আফ্রিকার এমপুমালাঙ্গা ও লিম্পোপো প্রদেশ এবং এসওয়াতিনি; নেদারল্যান্ডস, কেনিয়া, ভারত, বাংলাদেশসহ বহু দেশে বাণিজ্যিকভাবে চাষ হয়।',
    },
    climate: {
      en: 'Warm subtropical with dry, mild winters',
      bn: 'উষ্ণ উপক্রান্তীয়, শুষ্ক ও মৃদু শীতযুক্ত',
    },
    diet: {
      en: 'Photosynthesis; needs loose, well-drained, slightly acidic soil — waterlogging rots the crown',
      bn: 'সালোকসংশ্লেষণ; ঝুরঝুরে, সামান্য অম্লীয় মাটি দরকার — পানি জমলে গোড়া পচে যায়',
    },
    ecologicalRole: {
      en: 'Its flower heads provide nectar and pollen for bees, flies and butterflies in native grasslands.',
      bn: 'আদি তৃণভূমিতে এর ফুল মৌমাছি, মাছি ও প্রজাপতিকে মধু ও পরাগ জোগায়।',
    },
    behavior: {
      en: 'Each rosette sends up flowers repeatedly through the season; propagated commercially by tissue culture.',
      bn: 'প্রতিটি গাছ মৌসুম জুড়ে বারবার ফুলের ডাঁটি পাঠায়; বাণিজ্যিকভাবে টিস্যু কালচারের মাধ্যমে চারা তৈরি হয়।',
    },
    range: {
      native: [
        [-25.79, 31.05],
        [-25.45, 30.97],
        [-23.9, 29.45],
        [-26.32, 31.14],
      ],
      introduced: [
        [23.05, 89.0],
        [23.85, 90.26],
        [52.0, 4.4],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Conversion of native grassland to plantations and farms', 'Fungal root rot and whitefly in greenhouses'],
        bn: ['প্রাকৃতিক তৃণভূমিকে বাগান ও কৃষিজমিতে রূপান্তর', 'গ্রিনহাউসে ছত্রাকজনিত শিকড় পচা ও সাদা মাছির আক্রমণ'],
      },
      initiatives: {
        en: ['Grassland protected areas around Barberton', 'Tissue-culture plantlets for disease-free commercial farming'],
        bn: ['বারবারটনের আশপাশে তৃণভূমি সংরক্ষিত এলাকা', 'রোগমুক্ত বাণিজ্যিক চাষের জন্য টিস্যু কালচারের চারা'],
      },
    },
    facts: {
      en: [
        'It was first collected near the gold-mining town of Barberton in the 1880s.',
        'NASA’s clean-air study listed gerbera among plants that can remove some indoor air pollutants.',
      ],
      bn: [
        '১৮৮০-এর দশকে সোনার খনির শহর বারবারটনের কাছে প্রথম এটি সংগ্রহ করা হয়।',
        'নাসার এক গবেষণায় ঘরের বাতাসের কিছু দূষক শোষণকারী গাছের তালিকায় জারবেরার নাম এসেছে।',
      ],
    },
    related: ['tuberose', 'king-protea', 'bird-of-paradise-flower'],
  },
  {
    id: 'moss-rose',
    commonName: { en: 'Moss Rose', bn: 'পর্তুলাকা' },
    scientificName: 'Portulaca grandiflora',
    altNames: {
      en: ['Portulaca', 'Ten o’clock flower', 'Rose moss'],
      bn: ['টাইম ফুল', 'নয়টার ফুল', 'দশটার ফুল'],
    },
    category: 'flowers',
    wikiTitle: 'Portulaca grandiflora',
    description: {
      en: 'Moss rose is a low, succulent annual from southern South America with silky, rose-like flowers in brilliant pink, red, orange, yellow and white. Its flowers open in bright morning sun and close by afternoon, which is why Bangladeshis call it the “ten o’clock” or “time” flower. It is a favourite for rooftop pots and hanging baskets because it thrives in heat and needs very little water.',
      bn: 'পর্তুলাকা দক্ষিণ আমেরিকার দক্ষিণাঞ্চলের একটি নিচু, রসালো একবর্ষজীবী গাছ, যার রেশমি, গোলাপের মতো ফুল উজ্জ্বল গোলাপি, লাল, কমলা, হলুদ ও সাদা রঙের হয়। সকালের কড়া রোদে ফুল ফোটে আর বিকেলের মধ্যে বুজে যায় — তাই একে “টাইম ফুল” বা “দশটার ফুল” বলা হয়। প্রচণ্ড গরমেও ভালো থাকে এবং খুব কম পানি লাগে বলে ছাদের টব ও ঝুলন্ত টবে এটি খুব জনপ্রিয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Caryophyllales',
      family: 'Portulacaceae',
      genus: 'Portulaca',
      species: 'P. grandiflora',
    },
    physical: {
      size: {
        en: '10–30 cm tall, spreading; flowers 2.5–4 cm across',
        bn: '১০–৩০ সেমি উঁচু, মাটিতে ছড়িয়ে বাড়ে; ফুল ২.৫–৪ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a small succulent herb',
        bn: 'প্রযোজ্য নয় — ছোট রসালো বিরুৎ',
      },
      lifespan: {
        en: 'Annual, though easily kept going from cuttings',
        bn: 'একবর্ষজীবী, তবে ডাল কেটে লাগিয়ে সহজেই বারবার চারা করা যায়',
      },
      features: {
        en: [
          'Fleshy, cylindrical, needle-like leaves that store water',
          'Reddish, succulent stems that root easily',
          'Single or rose-like double flowers with silky petals',
        ],
        bn: [
          'পানি জমিয়ে রাখা রসালো, নলাকার, সুচের মতো পাতা',
          'লালচে, রসালো কাণ্ড, যা সহজেই শিকড় ছাড়ে',
          'রেশমি পাপড়ির একক বা গোলাপের মতো ডাবল ফুল',
        ],
      },
    },
    habitat: {
      en: 'Sandy, rocky and dry open ground; pots and gravel gardens in cultivation',
      bn: 'বালুময়, পাথুরে ও শুকনো খোলা জমি; চাষে টব ও নুড়ি-বাগানে',
    },
    habitats: ['grassland', 'desert', 'urban-farmland'],
    regions: ['south-america', 'south-asia'],
    distribution: {
      en: 'Native to Argentina, southern Brazil and Uruguay; grown worldwide and especially common in Bangladeshi homes.',
      bn: 'আদি নিবাস আর্জেন্টিনা, দক্ষিণ ব্রাজিল ও উরুগুয়ে; বিশ্বজুড়ে চাষ হয় এবং বাংলাদেশের বাড়িঘরে বিশেষভাবে প্রচলিত।',
    },
    climate: {
      en: 'Hot, sunny and fairly dry climates',
      bn: 'গরম, রোদেলা ও তুলনামূলক শুকনো জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; can switch to water-saving CAM photosynthesis under drought',
      bn: 'সালোকসংশ্লেষণ; খরার সময় পানি-সাশ্রয়ী সিএএম পদ্ধতির সালোকসংশ্লেষণে যেতে পারে',
    },
    ecologicalRole: {
      en: 'Its open flowers are visited by bees and other small insects in the morning hours.',
      bn: 'সকালবেলা খোলা ফুলে মৌমাছি ও অন্যান্য ছোট পতঙ্গ আসে।',
    },
    behavior: {
      en: 'Flowers open only in full sun and close in the afternoon or on cloudy days; spreads by self-seeding and broken stems.',
      bn: 'শুধু কড়া রোদে ফুল ফোটে, বিকেলে বা মেঘলা দিনে বুজে থাকে; নিজে বীজ ছড়িয়ে ও ভাঙা ডাল থেকে বংশবিস্তার করে।',
    },
    range: {
      native: [
        [-31.4, -64.2],
        [-30.0, -51.2],
        [-34.9, -56.2],
        [-27.5, -55.9],
        [-24.8, -65.4],
      ],
      introduced: [
        [23.8, 90.4],
        [22.35, 91.8],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; common in cultivation', 'Rots quickly if overwatered or waterlogged'],
        bn: ['বিপন্ন নয়; চাষাবাদে বহুল প্রচলিত', 'অতিরিক্ত পানি বা জলাবদ্ধতায় দ্রুত পচে যায়'],
      },
      initiatives: {
        en: ['Recommended for water-wise and rooftop gardening', 'Breeding of long-opening and double-flowered varieties'],
        bn: ['পানি-সাশ্রয়ী ও ছাদবাগানের জন্য সুপারিশকৃত', 'দীর্ঘক্ষণ ফোটা থাকা ও ডাবল ফুলের জাত উদ্ভাবন'],
      },
    },
    facts: {
      en: [
        'It is a close relative of purslane, a common leafy vegetable.',
        'A single broken stem pushed into soil can grow into a new flowering plant within weeks.',
      ],
      bn: [
        'বহুল পরিচিত শাক নুনিয়া বা লোনা শাকের নিকটাত্মীয় এটি।',
        'একটি ভাঙা ডাল মাটিতে গুঁজে দিলেই কয়েক সপ্তাহের মধ্যে নতুন গাছে ফুল ফোটে।',
      ],
    },
    related: ['madagascar-periwinkle', 'zinnia'],
  },
  {
    id: 'common-poppy',
    commonName: { en: 'Common Poppy', bn: 'লাল পপি' },
    scientificName: 'Papaver rhoeas',
    altNames: {
      en: ['Corn poppy', 'Field poppy', 'Flanders poppy', 'Red poppy'],
      bn: ['পপি', 'ক্ষেতের পপি', 'ফ্ল্যান্ডার্স পপি', 'বুনো পপি'],
    },
    category: 'flowers',
    wikiTitle: 'Papaver rhoeas',
    description: {
      en: 'The common poppy is an annual wildflower of farmland and disturbed ground, with papery scarlet petals often marked with a black blotch at the base. It has followed agriculture across Europe, North Africa and western Asia for thousands of years. Since the First World War it has been the symbol of remembrance for fallen soldiers. Unlike the opium poppy, it contains no opium, but the plant is mildly toxic to livestock and people.',
      bn: 'লাল পপি কৃষিজমি ও খোঁড়াখুঁড়ি করা জমিতে জন্মানো একবর্ষজীবী বুনোফুল; এর কাগজের মতো পাতলা টকটকে লাল পাপড়ির গোড়ায় প্রায়ই কালো ছোপ থাকে। হাজার হাজার বছর ধরে চাষাবাদের সঙ্গে সঙ্গে এটি ইউরোপ, উত্তর আফ্রিকা ও পশ্চিম এশিয়ায় ছড়িয়েছে। প্রথম বিশ্বযুদ্ধের পর থেকে এটি নিহত সৈনিকদের স্মরণের প্রতীক। আফিম পপির মতো এতে আফিম থাকে না, তবে গাছটি মানুষ ও গবাদিপশুর জন্য হালকা বিষাক্ত।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Ranunculales',
      family: 'Papaveraceae',
      genus: 'Papaver',
      species: 'P. rhoeas',
    },
    physical: {
      size: {
        en: '30–70 cm tall; flowers 5–10 cm across',
        bn: '৩০–৭০ সেমি উঁচু; ফুল ৫–১০ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — seeds are tiny, with thousands per capsule',
        bn: 'প্রযোজ্য নয় — বীজ অতি ক্ষুদ্র, একটি ফলে হাজারো বীজ থাকে',
      },
      lifespan: {
        en: 'Annual; seeds can stay dormant in soil for decades',
        bn: 'একবর্ষজীবী; বীজ মাটিতে কয়েক দশক পর্যন্ত সুপ্ত থাকতে পারে',
      },
      features: {
        en: [
          'Four thin, crinkled scarlet petals',
          'Bristly stems and deeply lobed leaves',
          'Pepper-pot seed capsule that scatters seed through small pores',
        ],
        bn: [
          'চারটি পাতলা, কোঁচকানো টকটকে লাল পাপড়ি',
          'খসখসে রোমযুক্ত কাণ্ড ও গভীরভাবে খাঁজকাটা পাতা',
          'মরিচদানির মতো ফল, যার ছোট ছিদ্র দিয়ে বীজ ছড়ায়',
        ],
      },
    },
    habitat: {
      en: 'Cereal fields, field margins, roadsides and freshly disturbed soil',
      bn: 'শস্যক্ষেত, ক্ষেতের আল, রাস্তার ধার ও সদ্য খোঁড়া মাটি',
    },
    habitats: ['urban-farmland', 'grassland'],
    regions: ['europe', 'africa'],
    distribution: {
      en: 'Europe, North Africa and western Asia; introduced to North America, Australia and elsewhere.',
      bn: 'ইউরোপ, উত্তর আফ্রিকা ও পশ্চিম এশিয়া; উত্তর আমেরিকা, অস্ট্রেলিয়াসহ অন্যান্য অঞ্চলে বাইরে থেকে আনা হয়েছে।',
    },
    climate: {
      en: 'Mediterranean and temperate climates with cool winters',
      bn: 'ঠান্ডা শীতযুক্ত ভূমধ্যসাগরীয় ও নাতিশীতোষ্ণ জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; an opportunist of bare, recently ploughed soil',
      bn: 'সালোকসংশ্লেষণ; সদ্য চাষ করা ফাঁকা মাটির সুযোগ নিয়ে দ্রুত জন্মায়',
    },
    ecologicalRole: {
      en: 'An important pollen source for bees in farmland; its flowers have no nectar.',
      bn: 'কৃষিজমিতে মৌমাছির জন্য পরাগের গুরুত্বপূর্ণ উৎস; এর ফুলে মধু থাকে না।',
    },
    behavior: {
      en: 'Germinates when soil is disturbed and flowers in late spring and summer; each flower lasts only about a day.',
      bn: 'মাটি খোঁড়া হলেই বীজ অঙ্কুরিত হয়; বসন্তের শেষ ও গ্রীষ্মে ফুল ফোটে, প্রতিটি ফুল মাত্র এক দিনের মতো টেকে।',
    },
    range: {
      native: [
        [48.9, 2.4],
        [51.5, -0.1],
        [41.9, 12.5],
        [37.9, 23.7],
        [36.8, 10.2],
        [50.85, 4.35],
      ],
      introduced: [
        [40.7, -74.0],
        [-37.8, 145.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Herbicide use in cereal fields', 'Seed cleaning and intensive farming'],
        bn: ['শস্যক্ষেতে আগাছানাশক প্রয়োগ', 'বীজ পরিষ্কারের আধুনিক পদ্ধতি ও নিবিড় চাষাবাদ'],
      },
      initiatives: {
        en: ['Uncultivated field margins under agri-environment schemes', 'Arable wildflower conservation projects in Europe'],
        bn: ['কৃষি-পরিবেশ প্রকল্পের আওতায় ক্ষেতের কিনারা চাষমুক্ত রাখা', 'ইউরোপে কৃষিজমির বুনোফুল সংরক্ষণ প্রকল্প'],
      },
    },
    facts: {
      en: [
        'Poppies bloomed across the churned battlefields of Flanders, inspiring the 1915 poem “In Flanders Fields”.',
        'Its seeds can survive in the soil for more than 80 years, waiting for the ground to be disturbed.',
      ],
      bn: [
        'ফ্ল্যান্ডার্সের যুদ্ধবিধ্বস্ত মাঠে ফোটা পপি দেখে ১৯১৫ সালে লেখা হয় বিখ্যাত কবিতা “ইন ফ্ল্যান্ডার্স ফিল্ডস”।',
        'এর বীজ মাটিতে ৮০ বছরেরও বেশি টিকে থাকতে পারে, মাটি খোঁড়ার অপেক্ষায়।',
      ],
    },
    related: ['cornflower', 'english-lavender', 'common-bluebell'],
  },
];
