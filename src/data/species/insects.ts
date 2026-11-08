import type { Species } from '@/types';

export const insects: Species[] = [
  {
    id: 'monarch-butterfly',
    commonName: { en: 'Monarch Butterfly', bn: 'মোনার্ক প্রজাপতি' },
    scientificName: 'Danaus plexippus',
    altNames: {
      en: ['Monarch', 'Milkweed Butterfly', 'Wanderer'],
      bn: ['মোনার্ক', 'রাজা প্রজাপতি', 'মিল্কউইড প্রজাপতি'],
    },
    synonyms: ['Papilio plexippus'],
    category: 'insects',
    wikiTitle: 'Monarch butterfly',
    description: {
      en: 'The Monarch is one of the best-known butterflies in the world, recognised by its bright orange wings veined and bordered in black with white spots. North American monarchs make one of the most remarkable migrations in the insect world, travelling up to about 4,000 km each autumn to overwinter in the mountain fir forests of central Mexico and coastal California. No single butterfly completes the round trip — it takes several generations to return north each spring.',
      bn: 'মোনার্ক পৃথিবীর সবচেয়ে পরিচিত প্রজাপতিগুলোর একটি। উজ্জ্বল কমলা ডানায় কালো শিরা, কালো কিনারা আর সাদা ফোঁটা দেখে একে সহজেই চেনা যায়। উত্তর আমেরিকার মোনার্করা কীটপতঙ্গের জগতে অন্যতম বিস্ময়কর পরিযান করে — প্রতি শরতে প্রায় ৪,০০০ কিলোমিটার পথ পাড়ি দিয়ে এরা মধ্য মেক্সিকোর পাহাড়ি ফার বনে ও ক্যালিফোর্নিয়ার উপকূলে শীত কাটায়। কোনো একটি প্রজাপতি পুরো যাত্রা শেষ করে না; বসন্তে উত্তরে ফিরতে কয়েক প্রজন্ম লেগে যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Nymphalidae',
      genus: 'Danaus',
      species: 'D. plexippus',
    },
    physical: {
      size: {
        en: 'Wingspan 8.9–10.2 cm',
        bn: 'ডানার বিস্তার ৮.৯–১০.২ সেমি',
      },
      weight: {
        en: 'About 0.3–0.75 g',
        bn: 'প্রায় ০.৩–০.৭৫ গ্রাম',
      },
      lifespan: {
        en: 'Adults of summer generations live 2–6 weeks; the autumn migratory generation can live 6–9 months',
        bn: 'গ্রীষ্মকালীন প্রজন্মের পূর্ণবয়স্ক প্রজাপতি বাঁচে ২–৬ সপ্তাহ; শরতের পরিযায়ী প্রজন্ম ৬–৯ মাস পর্যন্ত বাঁচতে পারে',
      },
      features: {
        en: [
          'Bright orange wings with black veins and black borders dotted with white spots',
          'Males have a small black scent patch on a vein of each hind wing',
          'Caterpillars are banded in yellow, black and white',
          'Bright colours warn predators that it is toxic',
        ],
        bn: [
          'উজ্জ্বল কমলা ডানায় কালো শিরা এবং সাদা ফোঁটাযুক্ত কালো কিনারা',
          'পুরুষ প্রজাপতির প্রতিটি পেছনের ডানার একটি শিরায় ছোট কালো গন্ধ-দাগ থাকে',
          'শুঁয়োপোকার গায়ে হলুদ, কালো ও সাদা ডোরা',
          'উজ্জ্বল রং শিকারিদের সতর্ক করে যে এটি বিষাক্ত',
        ],
      },
    },
    habitat: {
      en: 'Open fields, meadows, prairies, roadsides and gardens where milkweed grows; overwinters in high-altitude oyamel fir forests and coastal groves',
      bn: 'খোলা মাঠ, তৃণভূমি, প্রেইরি, রাস্তার ধার ও বাগান — যেখানে মিল্কউইড গাছ জন্মায়; শীত কাটায় উঁচু পাহাড়ের ওয়ামেল ফার বনে ও উপকূলীয় গাছের সারিতে',
    },
    habitats: ['grassland', 'temperate-forest', 'urban-farmland'],
    regions: ['north-america', 'south-america', 'oceania', 'europe'],
    distribution: {
      en: 'Native to North, Central and South America. It has also become established in Hawaii and other Pacific islands, Australia, New Zealand, the Canary Islands and parts of southern Spain and Portugal.',
      bn: 'উত্তর, মধ্য ও দক্ষিণ আমেরিকার স্থানীয় প্রজাতি। এ ছাড়া হাওয়াইসহ প্রশান্ত মহাসাগরের বিভিন্ন দ্বীপ, অস্ট্রেলিয়া, নিউজিল্যান্ড, ক্যানারি দ্বীপপুঞ্জ এবং দক্ষিণ স্পেন ও পর্তুগালের কিছু অঞ্চলেও এরা স্থায়ীভাবে ছড়িয়ে পড়েছে।',
    },
    climate: {
      en: 'Temperate to tropical; migrates to escape freezing northern winters',
      bn: 'নাতিশীতোষ্ণ থেকে ক্রান্তীয়; উত্তরের হিমশীতল শীত এড়াতে পরিযান করে',
    },
    diet: {
      en: 'Caterpillars feed only on milkweed (Asclepias) leaves, absorbing toxic cardenolides; adults sip nectar from a wide range of flowers',
      bn: 'শুঁয়োপোকা কেবল মিল্কউইড (Asclepias) গাছের পাতা খায় এবং তা থেকে বিষাক্ত কার্ডেনোলাইড শরীরে জমা করে; পূর্ণবয়স্ক প্রজাপতি নানা ফুলের মধু পান করে',
    },
    ecologicalRole: {
      en: 'A pollinator of wildflowers and food for some specialised predators; its health is widely used as an indicator of the condition of grassland ecosystems.',
      bn: 'বুনো ফুলের পরাগায়নকারী এবং কিছু বিশেষ শিকারির খাদ্য; তৃণভূমি বাস্তুতন্ত্র কতটা ভালো আছে, তা বোঝার নির্দেশক হিসেবে মোনার্কের অবস্থা ব্যাপকভাবে বিবেচনা করা হয়।',
    },
    behavior: {
      en: 'Eastern North American monarchs fly south in autumn and cluster by the millions on fir trees in Mexico. They navigate using a time-compensated sun compass and possibly the Earth’s magnetic field.',
      bn: 'পূর্ব উত্তর আমেরিকার মোনার্করা শরতে দক্ষিণে উড়ে যায় এবং মেক্সিকোর ফার গাছে লাখ লাখ প্রজাপতি একসঙ্গে গুচ্ছ বেঁধে থাকে। দিক ঠিক করতে এরা সময়ের সঙ্গে সমন্বয় করা "সূর্য-কম্পাস" এবং সম্ভবত পৃথিবীর চৌম্বকক্ষেত্র ব্যবহার করে।',
    },
    range: {
      native: [
        [19.6, -100.25],
        [36.62, -121.92],
        [44.0, -93.0],
        [40.0, -83.0],
        [33.0, -97.0],
        [46.0, -75.0],
        [10.0, -84.0],
        [-15.0, -50.0],
      ],
      introduced: [
        [21.3, -157.85],
        [-33.87, 151.2],
        [-36.85, 174.76],
        [28.1, -15.4],
        [36.5, -6.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Loss of milkweed to herbicides and land conversion', 'Logging and degradation of overwintering forests in Mexico', 'Climate change and extreme weather', 'Pesticide use'],
        bn: ['আগাছানাশক ও জমির ব্যবহার বদলের ফলে মিল্কউইড গাছ কমে যাওয়া', 'মেক্সিকোর শীতকালীন আশ্রয়বনে গাছ কাটা ও বনের অবক্ষয়', 'জলবায়ু পরিবর্তন ও চরম আবহাওয়া', 'কীটনাশকের ব্যবহার'],
      },
      initiatives: {
        en: ['Monarch Butterfly Biosphere Reserve (UNESCO World Heritage Site) in Mexico', 'Milkweed planting and "Monarch Waystation" gardens', 'Citizen-science counts and tagging programmes', 'Proposed listing under the US Endangered Species Act'],
        bn: ['মেক্সিকোর মোনার্ক বাটারফ্লাই বায়োস্ফিয়ার রিজার্ভ (ইউনেস্কো বিশ্ব ঐতিহ্য)', 'মিল্কউইড রোপণ ও "মোনার্ক ওয়েস্টেশন" বাগান', 'নাগরিক-বিজ্ঞান গণনা ও ট্যাগিং কর্মসূচি', 'যুক্তরাষ্ট্রের বিপন্ন প্রজাতি আইনে তালিকাভুক্তির প্রস্তাব'],
      },
    },
    facts: {
      en: [
        'The migratory North American subspecies is assessed separately by the IUCN as Vulnerable.',
        'Monarchs are poisonous to many birds because of toxins stored from milkweed.',
        'The Viceroy butterfly looks so similar that predators often avoid both.',
        'Some monarchs have crossed the Atlantic and been recorded in Britain.',
      ],
      bn: [
        'উত্তর আমেরিকার পরিযায়ী উপপ্রজাতিকে আইইউসিএন আলাদাভাবে "সংকটাপন্ন" (Vulnerable) হিসেবে মূল্যায়ন করেছে।',
        'মিল্কউইড থেকে জমানো বিষের কারণে মোনার্ক অনেক পাখির জন্য বিষাক্ত।',
        'ভাইসরয় প্রজাপতি দেখতে এতটাই এক রকম যে শিকারিরা প্রায়ই দুটিকেই এড়িয়ে চলে।',
        'কিছু মোনার্ক আটলান্টিক মহাসাগর পাড়ি দিয়ে ব্রিটেনে পর্যন্ত পৌঁছেছে বলে রেকর্ড আছে।',
      ],
    },
    related: ['atlas-moth', 'western-honey-bee', 'sunflower', 'seven-spot-ladybird'],
  },
  {
    id: 'western-honey-bee',
    commonName: { en: 'Western Honey Bee', bn: 'মৌমাছি' },
    scientificName: 'Apis mellifera',
    altNames: {
      en: ['Honey Bee', 'European Honey Bee', 'Honeybee'],
      bn: ['মধুমাছি', 'ইউরোপীয় মৌমাছি', 'পশ্চিমা মৌমাছি'],
    },
    synonyms: ['Apis mellifica'],
    category: 'insects',
    wikiTitle: 'Western honey bee',
    description: {
      en: 'The Western Honey Bee is the world’s most widely kept bee and one of the most important pollinators of crops. It lives in highly organised colonies of tens of thousands of workers, a few hundred drones and a single queen. Bees turn flower nectar into honey and produce beeswax to build their combs. In Bangladesh, beekeepers place boxes of this species beside mustard, litchi and black-cumin fields, which both yields honey and raises crop yields.',
      bn: 'পশ্চিমা মৌমাছি পৃথিবীতে সবচেয়ে বেশি পালন করা মৌমাছি এবং ফসলের অন্যতম প্রধান পরাগায়নকারী। এরা অত্যন্ত সুশৃঙ্খল কলোনিতে বাস করে — একটি কলোনিতে থাকে হাজার হাজার কর্মী মৌমাছি, কয়েকশ পুরুষ মৌমাছি আর একটি মাত্র রানি। ফুলের মধুরস থেকে এরা মধু তৈরি করে এবং মোম দিয়ে চাক বানায়। বাংলাদেশে মৌচাষিরা সরিষা, লিচু ও কালোজিরার খেতের পাশে এই মৌমাছির বাক্স বসান — এতে মধু পাওয়া যায়, ফসলের ফলনও বাড়ে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Hymenoptera',
      family: 'Apidae',
      genus: 'Apis',
      species: 'A. mellifera',
    },
    physical: {
      size: {
        en: 'Workers about 12–15 mm long; queens 18–20 mm; drones 15–17 mm',
        bn: 'কর্মী মৌমাছি প্রায় ১২–১৫ মিমি লম্বা; রানি ১৮–২০ মিমি; পুরুষ মৌমাছি ১৫–১৭ মিমি',
      },
      weight: {
        en: 'A worker weighs about 0.1 g',
        bn: 'একটি কর্মী মৌমাছির ওজন প্রায় ০.১ গ্রাম',
      },
      lifespan: {
        en: 'Workers 5–7 weeks in summer and up to several months in winter; queens 2–5 years',
        bn: 'কর্মী মৌমাছি গ্রীষ্মে ৫–৭ সপ্তাহ, শীতে কয়েক মাস পর্যন্ত; রানি ২–৫ বছর',
      },
      features: {
        en: [
          'Golden-brown body with darker bands and dense hair that traps pollen',
          'Pollen baskets (corbiculae) on the hind legs',
          'Barbed sting in workers — a worker usually dies after stinging a mammal',
          'Wax glands on the underside of the abdomen',
        ],
        bn: [
          'সোনালি-বাদামি শরীরে গাঢ় ডোরা এবং ঘন লোম, যাতে পরাগরেণু আটকে যায়',
          'পেছনের পায়ে পরাগ জমানোর থলি (করবিকুলা)',
          'কর্মী মৌমাছির হুল কাঁটাযুক্ত — স্তন্যপায়ী প্রাণীকে হুল ফোটালে সাধারণত মৌমাছিটি মারা যায়',
          'পেটের নিচের দিকে মোম তৈরির গ্রন্থি',
        ],
      },
    },
    habitat: {
      en: 'Meadows, open woodland, farmland, orchards and gardens with abundant flowers; wild colonies nest in tree hollows and rock crevices',
      bn: 'প্রচুর ফুলযুক্ত তৃণভূমি, হালকা বনভূমি, কৃষিজমি, ফলের বাগান ও বসতবাড়ির বাগান; বুনো কলোনি গাছের কোটর ও পাথরের ফাটলে বাসা বাঁধে',
    },
    habitats: ['urban-farmland', 'grassland', 'temperate-forest', 'tropical-forest'],
    regions: ['africa', 'europe', 'south-asia', 'east-asia', 'north-america', 'south-america', 'oceania'],
    distribution: {
      en: 'Native to Africa, Europe and western Asia. Introduced by beekeepers to every continent except Antarctica, including the Americas, Australia, New Zealand, East Asia and South Asia (including Bangladesh).',
      bn: 'আফ্রিকা, ইউরোপ ও পশ্চিম এশিয়ার স্থানীয় প্রজাতি। মৌচাষিদের মাধ্যমে অ্যান্টার্কটিকা ছাড়া সব মহাদেশে ছড়িয়েছে — আমেরিকা, অস্ট্রেলিয়া, নিউজিল্যান্ড, পূর্ব এশিয়া এবং বাংলাদেশসহ দক্ষিণ এশিয়ায়।',
    },
    climate: {
      en: 'Highly adaptable — from tropical to cold temperate; colonies survive winter by clustering and generating heat',
      bn: 'অত্যন্ত মানিয়ে নিতে সক্ষম — ক্রান্তীয় থেকে শীতল নাতিশীতোষ্ণ অঞ্চল পর্যন্ত; শীতে কলোনির মৌমাছিরা গুচ্ছ বেঁধে শরীরের তাপে টিকে থাকে',
    },
    diet: {
      en: 'Herbivore — nectar (converted into honey) for energy and pollen for protein; larvae are fed royal jelly and "bee bread"',
      bn: 'তৃণভোজী — শক্তির জন্য ফুলের মধুরস (যা থেকে মধু তৈরি হয়) এবং আমিষের জন্য পরাগরেণু; লার্ভাকে রয়্যাল জেলি ও পরাগ-মধুর মিশ্রণ খাওয়ানো হয়',
    },
    ecologicalRole: {
      en: 'A key pollinator of fruits, vegetables, oilseeds and wildflowers; a large share of the world’s food crops benefit from bee pollination.',
      bn: 'ফল, সবজি, তেলবীজ ও বুনো ফুলের গুরুত্বপূর্ণ পরাগায়নকারী; পৃথিবীর খাদ্যশস্যের একটি বড় অংশ মৌমাছির পরাগায়ন থেকে উপকৃত হয়।',
    },
    behavior: {
      en: 'Highly social, with division of labour by age: young workers clean and nurse, older ones forage. Foragers tell nest-mates the direction and distance of food with the famous "waggle dance". New colonies form when the old queen leaves with a swarm.',
      bn: 'অত্যন্ত সামাজিক পতঙ্গ; বয়স অনুযায়ী কাজ ভাগ করা থাকে — তরুণ কর্মীরা চাক পরিষ্কার ও শিশু-মৌমাছির যত্ন নেয়, বয়স্করা খাবার সংগ্রহে বের হয়। বিখ্যাত "ওয়াগল নাচ"-এর মাধ্যমে এরা সঙ্গীদের খাবারের দিক ও দূরত্ব জানিয়ে দেয়। পুরোনো রানি একদল মৌমাছি নিয়ে চাক ছেড়ে গেলে নতুন কলোনি গড়ে ওঠে।',
    },
    range: {
      native: [
        [48.0, 10.0],
        [40.0, -4.0],
        [45.0, 25.0],
        [9.0, 39.0],
        [-1.0, 37.0],
        [-30.0, 24.0],
        [12.0, -1.5],
        [38.0, 35.0],
      ],
      introduced: [
        [40.0, -95.0],
        [-15.0, -50.0],
        [-33.0, 147.0],
        [-41.0, 174.0],
        [35.0, 105.0],
        [24.4, 89.7],
        [29.0, 77.0],
      ],
    },
    conservation: {
      status: 'DD',
      trend: 'unknown',
      threats: {
        en: ['Varroa mites and the viruses they spread', 'Pesticides, especially neonicotinoids', 'Loss of flower-rich habitat', 'Colony collapse and poor nutrition'],
        bn: ['ভ্যারোয়া মাইট ও এদের ছড়ানো ভাইরাস', 'কীটনাশক, বিশেষত নিওনিকোটিনয়েড', 'ফুলসমৃদ্ধ আবাসস্থল হারানো', 'কলোনি বিপর্যয় ও পুষ্টির অভাব'],
      },
      initiatives: {
        en: ['Restrictions on neonicotinoid pesticides in the EU', 'Pollinator-friendly farming and wildflower strips', 'Breeding of mite-resistant bees', 'Beekeeping training programmes for farmers, including in Bangladesh'],
        bn: ['ইউরোপীয় ইউনিয়নে নিওনিকোটিনয়েড কীটনাশকে নিষেধাজ্ঞা', 'পরাগায়নকারী-বান্ধব চাষাবাদ ও বুনো ফুলের সারি', 'মাইট-প্রতিরোধী মৌমাছির প্রজনন', 'বাংলাদেশসহ বিভিন্ন দেশে কৃষকদের মৌচাষ প্রশিক্ষণ'],
      },
      assessed: '2014',
    },
    facts: {
      en: [
        'To make about 450 g of honey, bees may visit around two million flowers.',
        'A strong colony can contain 20,000–80,000 bees in summer.',
        'Karl von Frisch won a Nobel Prize in 1973 partly for decoding the waggle dance.',
        'The IUCN Data Deficient listing covers the European population; wild colonies are hard to tell apart from managed ones.',
      ],
      bn: [
        'প্রায় ৪৫০ গ্রাম মধু তৈরি করতে মৌমাছিদের প্রায় ২০ লাখ ফুলে যেতে হতে পারে।',
        'গ্রীষ্মে একটি শক্তিশালী কলোনিতে ২০,০০০–৮০,০০০ মৌমাছি থাকতে পারে।',
        'ওয়াগল নাচের রহস্য উদ্‌ঘাটনের জন্য কার্ল ফন ফ্রিশ ১৯৭৩ সালে নোবেল পুরস্কার পান।',
        'আইইউসিএনের "তথ্য অপর্যাপ্ত" মূল্যায়নটি ইউরোপের জনগোষ্ঠীর জন্য; বুনো কলোনিকে পালিত কলোনি থেকে আলাদা করা কঠিন।',
      ],
    },
    related: ['sunflower', 'holy-basil', 'monarch-butterfly', 'neem'],
  },
  {
    id: 'atlas-moth',
    commonName: { en: 'Atlas Moth', bn: 'অ্যাটলাস মথ' },
    scientificName: 'Attacus atlas',
    altNames: {
      en: ['Atlas Silkmoth', 'Snake’s Head Moth'],
      bn: ['অ্যাটলাস রেশম মথ', 'সাপমুখো মথ'],
    },
    synonyms: ['Phalaena atlas'],
    category: 'insects',
    wikiTitle: 'Attacus atlas',
    description: {
      en: 'The Atlas Moth is one of the largest moths in the world, with a wingspan that can reach about 24 cm and one of the greatest total wing areas of any insect. Native to the forests of South and Southeast Asia, it has rich reddish-brown wings with triangular, see-through "windows". The curled tips of the forewings resemble a snake’s head, which may scare off predators. Adults have no working mouthparts and never eat.',
      bn: 'অ্যাটলাস মথ পৃথিবীর বৃহত্তম মথগুলোর একটি; এর ডানার বিস্তার প্রায় ২৪ সেমি পর্যন্ত হতে পারে এবং মোট ডানার আয়তনের দিক থেকে এটি সবচেয়ে বড় পতঙ্গদের একটি। দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার বনে এদের বাস। লালচে-বাদামি ডানায় ত্রিভুজাকার স্বচ্ছ "জানালা" থাকে। সামনের ডানার বাঁকানো আগা দেখতে সাপের মাথার মতো, যা সম্ভবত শিকারিদের ভয় দেখায়। পূর্ণবয়স্ক মথের কার্যকর মুখাঙ্গ নেই — এরা জীবনে কখনো কিছু খায় না।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Saturniidae',
      genus: 'Attacus',
      species: 'A. atlas',
    },
    physical: {
      size: {
        en: 'Wingspan about 20–24 cm; wing surface area up to about 400 cm²',
        bn: 'ডানার বিস্তার প্রায় ২০–২৪ সেমি; ডানার আয়তন প্রায় ৪০০ বর্গসেমি পর্যন্ত',
      },
      weight: {
        en: 'Adult females up to about 25 g; females are larger than males',
        bn: 'পূর্ণবয়স্ক স্ত্রী মথ প্রায় ২৫ গ্রাম পর্যন্ত; স্ত্রী মথ পুরুষের চেয়ে বড়',
      },
      lifespan: {
        en: 'Adults live only 1–2 weeks; the full life cycle takes a few months',
        bn: 'পূর্ণবয়স্ক মথ মাত্র ১–২ সপ্তাহ বাঁচে; পুরো জীবনচক্র শেষ হতে কয়েক মাস লাগে',
      },
      features: {
        en: [
          'Reddish-brown wings with translucent triangular "windows"',
          'Forewing tips shaped like a cobra’s head',
          'Males have large feathery antennae to detect female pheromones',
          'Pale green caterpillars covered in a white waxy powder',
        ],
        bn: [
          'লালচে-বাদামি ডানায় স্বচ্ছ ত্রিভুজাকার "জানালা"',
          'সামনের ডানার আগা দেখতে গোখরা সাপের মাথার মতো',
          'স্ত্রী মথের ফেরোমোন টের পেতে পুরুষ মথের বড় পালকের মতো শুঙ্গ',
          'ফ্যাকাশে সবুজ শুঁয়োপোকা, গায়ে সাদা মোমের মতো গুঁড়ো',
        ],
      },
    },
    habitat: {
      en: 'Tropical and subtropical forests, forest edges, secondary growth and rural gardens',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় বন, বনের প্রান্ত, পুনর্জন্মানো বন ও গ্রামীণ বাগান',
    },
    habitats: ['tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'South and Southeast Asia — from India and Sri Lanka through Myanmar, Thailand, southern China, Malaysia and Indonesia to the Philippines.',
      bn: 'দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়া — ভারত ও শ্রীলঙ্কা থেকে মিয়ানমার, থাইল্যান্ড, দক্ষিণ চীন, মালয়েশিয়া ও ইন্দোনেশিয়া হয়ে ফিলিপাইন পর্যন্ত।',
    },
    climate: {
      en: 'Warm, humid tropical and subtropical climates',
      bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় এবং উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Caterpillars eat the leaves of many trees and shrubs, including citrus, cinnamon, guava and jambolan (black plum); adults do not feed and live on fat reserves',
      bn: 'শুঁয়োপোকা লেবুজাতীয় গাছ, দারুচিনি, পেয়ারা ও জামসহ নানা গাছের পাতা খায়; পূর্ণবয়স্ক মথ কিছু খায় না, শুঁয়োপোকা অবস্থায় জমানো চর্বিতে বেঁচে থাকে',
    },
    ecologicalRole: {
      en: 'Its caterpillars recycle leaf matter and both larvae and adults are food for birds, lizards and other forest animals.',
      bn: 'এর শুঁয়োপোকা পাতা খেয়ে পুষ্টি চক্রে ভূমিকা রাখে, আর শুঁয়োপোকা ও মথ দুটোই পাখি, টিকটিকি ও বনের অন্যান্য প্রাণীর খাবার।',
    },
    behavior: {
      en: 'Mostly nocturnal. Females release pheromones that males can detect from kilometres away. When disturbed, the moth drops and flaps its wings to show the snake-head pattern.',
      bn: 'মূলত নিশাচর। স্ত্রী মথ ফেরোমোন ছাড়ে, যা পুরুষ মথ কয়েক কিলোমিটার দূর থেকেও টের পায়। বিরক্ত হলে মথটি মাটিতে পড়ে ডানা ঝাপটায় এবং সাপের মাথার মতো নকশা দেখায়।',
    },
    range: {
      native: [
        [11.0, 76.5],
        [7.5, 80.7],
        [22.5, 96.0],
        [18.8, 98.98],
        [23.0, 108.0],
        [4.0, 102.0],
        [-0.5, 101.5],
        [14.0, 121.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Deforestation and habitat loss', 'Pesticide use near forests', 'Collection for the specimen trade'],
        bn: ['বন উজাড় ও আবাসস্থল হারানো', 'বনের কাছে কীটনাশক ব্যবহার', 'নমুনা-বাণিজ্যের জন্য সংগ্রহ'],
      },
      initiatives: {
        en: ['Protected forests across its range', 'Captive breeding in butterfly houses and zoos', 'Small-scale cocoon silk (fagara silk) production in some areas'],
        bn: ['বিস্তৃতি অঞ্চলজুড়ে সংরক্ষিত বন', 'প্রজাপতি উদ্যান ও চিড়িয়াখানায় প্রজনন', 'কিছু এলাকায় গুটি থেকে ছোট পরিসরে রেশম (ফাগারা সিল্ক) উৎপাদন'],
      },
    },
    facts: {
      en: [
        'Adults have no functional mouth and survive only on reserves built up as caterpillars.',
        'Empty cocoons are sometimes used as small purses in Taiwan.',
        'In Cantonese its name means "snake’s head moth".',
      ],
      bn: [
        'পূর্ণবয়স্ক মথের কার্যকর মুখ নেই; শুঁয়োপোকা অবস্থায় জমানো খাদ্যেই এরা বেঁচে থাকে।',
        'তাইওয়ানে কখনো কখনো খালি গুটি ছোট টাকার থলি হিসেবে ব্যবহার করা হয়।',
        'ক্যান্টোনিজ ভাষায় এর নামের অর্থ "সাপমুখো মথ"।',
      ],
    },
    related: ['monarch-butterfly', 'western-honey-bee', 'rafflesia'],
  },
  {
    id: 'seven-spot-ladybird',
    commonName: { en: 'Seven-spot Ladybird', bn: 'সাত-ফোঁটা লেডিবার্ড' },
    scientificName: 'Coccinella septempunctata',
    altNames: {
      en: ['Ladybird', 'Ladybug', 'Seven-spotted Lady Beetle', 'Lady Beetle'],
      bn: ['লেডিবার্ড', 'লেডিবাগ', 'গুবরে পোকা', 'সাত ফোঁটার পোকা'],
    },
    category: 'insects',
    wikiTitle: 'Coccinella septempunctata',
    description: {
      en: 'The Seven-spot Ladybird is the most familiar ladybird in Europe and much of Asia, easily recognised by its glossy red wing cases with seven black spots. Both adults and larvae are voracious predators of aphids, which makes them a gardener’s and farmer’s friend. It is common in crop fields and gardens in Bangladesh too, where it helps naturally control pests on mustard, beans and vegetables.',
      bn: 'সাত-ফোঁটা লেডিবার্ড ইউরোপ ও এশিয়ার বেশির ভাগ অঞ্চলের সবচেয়ে পরিচিত লেডিবার্ড। চকচকে লাল ডানার আবরণে সাতটি কালো ফোঁটা দেখে একে সহজেই চেনা যায়। পূর্ণবয়স্ক পোকা ও লার্ভা দুটোই জাবপোকার (এফিড) বড় শত্রু, তাই এরা কৃষক ও বাগানিদের বন্ধু। বাংলাদেশের ফসলের মাঠ ও বাগানেও এরা সাধারণ — সরিষা, শিম ও নানা সবজির ক্ষতিকর পোকা প্রাকৃতিকভাবে দমনে সাহায্য করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Coleoptera',
      family: 'Coccinellidae',
      genus: 'Coccinella',
      species: 'C. septempunctata',
    },
    physical: {
      size: {
        en: 'Body length about 5–8 mm',
        bn: 'দেহের দৈর্ঘ্য প্রায় ৫–৮ মিমি',
      },
      weight: {
        en: 'About 30–50 mg',
        bn: 'প্রায় ৩০–৫০ মিলিগ্রাম',
      },
      lifespan: {
        en: 'Adults usually live up to about one year, overwintering as adults',
        bn: 'পূর্ণবয়স্ক পোকা সাধারণত প্রায় এক বছর পর্যন্ত বাঁচে; শীত কাটায় পূর্ণবয়স্ক অবস্থায়',
      },
      features: {
        en: [
          'Domed red or orange wing cases (elytra) with seven black spots',
          'Black head and thorax with white patches on each side',
          'Grey-black, spiky larvae with orange spots that look nothing like the adult',
          'Releases a bitter yellow fluid from its leg joints when threatened',
        ],
        bn: [
          'গম্বুজাকৃতির লাল বা কমলা ডানার আবরণে (এলিট্রা) সাতটি কালো ফোঁটা',
          'কালো মাথা ও বক্ষ, দুই পাশে সাদা ছোপ',
          'লার্ভা ধূসর-কালো ও কাঁটাযুক্ত, গায়ে কমলা ফোঁটা — দেখতে পূর্ণবয়স্ক পোকার মতো একদমই নয়',
          'বিপদে পড়লে পায়ের সন্ধি থেকে তেতো হলুদ তরল বের করে',
        ],
      },
    },
    habitat: {
      en: 'Grasslands, crop fields, gardens, hedgerows and woodland edges wherever aphids are plentiful',
      bn: 'তৃণভূমি, ফসলের মাঠ, বাগান, ঝোপঝাড় ও বনের প্রান্ত — যেখানে জাবপোকা প্রচুর থাকে',
    },
    habitats: ['grassland', 'urban-farmland', 'temperate-forest'],
    regions: ['europe', 'africa', 'south-asia', 'east-asia', 'north-america'],
    distribution: {
      en: 'Native across Europe, North Africa and temperate and tropical Asia, including Bangladesh and India. Deliberately released in North America to control aphids and established there since the 1970s.',
      bn: 'ইউরোপ, উত্তর আফ্রিকা এবং বাংলাদেশ ও ভারতসহ এশিয়ার নাতিশীতোষ্ণ ও ক্রান্তীয় অঞ্চলের স্থানীয় প্রজাতি। জাবপোকা দমনের জন্য উত্তর আমেরিকায় ইচ্ছাকৃতভাবে ছাড়া হয়েছিল; ১৯৭০-এর দশক থেকে সেখানে স্থায়ীভাবে ছড়িয়ে পড়েছে।',
    },
    climate: {
      en: 'Temperate to subtropical; hibernates in groups in colder regions',
      bn: 'নাতিশীতোষ্ণ থেকে উপক্রান্তীয়; শীতল অঞ্চলে দল বেঁধে শীতনিদ্রায় যায়',
    },
    diet: {
      en: 'Predator — mainly aphids, also scale insects and mites; adults may take pollen and nectar when prey is scarce',
      bn: 'শিকারি — মূলত জাবপোকা, সেই সঙ্গে স্কেল পোকা ও মাইট; শিকার কম থাকলে পূর্ণবয়স্ক পোকা পরাগ ও মধুরসও খায়',
    },
    ecologicalRole: {
      en: 'A natural biological control agent that keeps aphid populations in check, reducing the need for chemical pesticides.',
      bn: 'প্রাকৃতিক জৈব বালাইনাশক হিসেবে জাবপোকার সংখ্যা নিয়ন্ত্রণে রাখে, ফলে রাসায়নিক কীটনাশকের প্রয়োজন কমে।',
    },
    behavior: {
      en: 'Active by day. Its bright colours warn birds that it tastes bad, and it may play dead when disturbed. In autumn adults gather in sheltered spots to overwinter.',
      bn: 'দিনে সক্রিয় থাকে। উজ্জ্বল রং পাখিদের জানিয়ে দেয় যে এটি খেতে বিস্বাদ; বিরক্ত হলে মরার ভান করতে পারে। শরতে পূর্ণবয়স্ক পোকারা আশ্রয়স্থলে জড়ো হয়ে শীত কাটায়।',
    },
    range: {
      native: [
        [51.5, -0.1],
        [48.0, 10.0],
        [55.0, 37.0],
        [34.0, 3.0],
        [23.7, 90.4],
        [28.6, 77.2],
        [35.0, 105.0],
        [36.0, 138.0],
      ],
      introduced: [
        [40.2, -74.6],
        [40.4, -82.9],
        [43.7, -79.4],
        [39.0, -94.0],
        [45.5, -122.6],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Broad-spectrum insecticide use', 'Competition from the invasive Harlequin Ladybird in Europe', 'Loss of hedgerows and field margins'],
        bn: ['সর্বব্যাপী কীটনাশকের ব্যবহার', 'ইউরোপে আক্রমণাত্মক হারলেকুইন লেডিবার্ডের সঙ্গে প্রতিযোগিতা', 'ঝোপঝাড় ও খেতের আইল ধ্বংস'],
      },
      initiatives: {
        en: ['Integrated pest management (IPM) programmes that protect natural enemies', 'Citizen-science ladybird surveys'],
        bn: ['প্রাকৃতিক শত্রু রক্ষা করে এমন সমন্বিত বালাই ব্যবস্থাপনা (আইপিএম) কর্মসূচি', 'নাগরিক-বিজ্ঞান ভিত্তিক লেডিবার্ড জরিপ'],
      },
    },
    facts: {
      en: [
        'A single seven-spot ladybird may eat around 5,000 aphids in its lifetime.',
        'Despite the common name, it is a beetle, not a bird or a true bug.',
        'In North America it has spread so widely that it now competes with native ladybirds.',
      ],
      bn: [
        'একটি সাত-ফোঁটা লেডিবার্ড সারা জীবনে প্রায় ৫,০০০ জাবপোকা খেতে পারে।',
        'নামে "বার্ড" থাকলেও এটি পাখি নয় — এটি এক ধরনের গুবরে পোকা।',
        'উত্তর আমেরিকায় এরা এত ব্যাপকভাবে ছড়িয়েছে যে এখন সেখানকার স্থানীয় লেডিবার্ডদের সঙ্গে প্রতিযোগিতা করছে।',
      ],
    },
    related: ['western-honey-bee', 'monarch-butterfly', 'sunflower'],
  },
];
