import type { Species } from '@/types';

export const mammalsAsia2: Species[] = [
  {
    id: 'capped-langur',
    commonName: { en: 'Capped Langur', bn: 'মুখপোড়া হনুমান' },
    scientificName: 'Trachypithecus pileatus',
    altNames: {
      en: ['Capped Leaf Monkey', 'Capped Monkey'],
      bn: ['টুপি হনুমান', 'কালোমুখো হনুমান'],
    },
    category: 'mammals',
    wikiTitle: 'Capped langur',
    description: {
      en: 'The capped langur is a long-tailed leaf monkey named for the dark tuft of hair on its crown that looks like a cap. It has a black face surrounded by long, pale cheek whiskers. In Bangladesh it lives in the hill forests of Sylhet and Chattogram and is one of the country’s threatened primates.',
      bn: 'মুখপোড়া হনুমান লম্বা লেজওয়ালা পাতাখেকো বানর; মাথার ওপর টুপির মতো গাঢ় লোমের গোছা থেকেই এর ইংরেজি নাম। কালো মুখের চারপাশে লম্বা, হালকা রঙের গালের লোম থাকে। বাংলাদেশে এরা সিলেট ও চট্টগ্রামের পাহাড়ি বনে বাস করে এবং দেশের সংকটাপন্ন প্রাইমেটদের একটি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Primates',
      family: 'Cercopithecidae',
      genus: 'Trachypithecus',
      species: 'T. pileatus',
    },
    physical: {
      size: { en: 'Body 50–70 cm long; tail 80–100 cm', bn: 'দেহ ৫০–৭০ সেমি লম্বা; লেজ ৮০–১০০ সেমি' },
      weight: { en: '9.5–14 kg', bn: '৯.৫–১৪ কেজি' },
      lifespan: { en: 'About 20–25 years', bn: 'প্রায় ২০–২৫ বছর' },
      features: {
        en: [
          'Dark cap of upright hair on the crown',
          'Black face framed by pale, golden or whitish cheek hair',
          'Very long tail, longer than the body',
        ],
        bn: [
          'মাথার ওপর খাড়া লোমের গাঢ় টুপি',
          'কালো মুখের চারপাশে হালকা সোনালি বা সাদাটে গালের লোম',
          'দেহের চেয়েও লম্বা লেজ',
        ],
      },
    },
    habitat: {
      en: 'Tropical evergreen, semi-evergreen and moist deciduous forests',
      bn: 'ক্রান্তীয় চিরসবুজ, আধা-চিরসবুজ ও আর্দ্র পর্ণমোচী বন',
    },
    habitats: ['tropical-forest'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Bangladesh, Northeast India, Bhutan and north-western Myanmar.',
      bn: 'বাংলাদেশ, উত্তর-পূর্ব ভারত, ভুটান ও উত্তর-পশ্চিম মিয়ানমার।',
    },
    climate: { en: 'Warm, humid monsoon climate', bn: 'উষ্ণ ও আর্দ্র মৌসুমি জলবায়ু' },
    diet: {
      en: 'Herbivore — mainly leaves, plus fruits, flowers and seeds',
      bn: 'তৃণভোজী — প্রধানত পাতা, সঙ্গে ফল, ফুল ও বীজ',
    },
    ecologicalRole: {
      en: 'A leaf-eater that shapes the canopy and disperses some seeds; prey for leopards and large eagles.',
      bn: 'পাতাখেকো হিসেবে বনের চাঁদোয়ার গঠনে ভূমিকা রাখে ও কিছু বীজ ছড়ায়; চিতাবাঘ ও বড় ইগলের খাদ্য।',
    },
    behavior: {
      en: 'Lives in groups of about 5–15 with one adult male; active by day and spends most time high in trees.',
      bn: 'একটি প্রাপ্তবয়স্ক পুরুষসহ প্রায় ৫–১৫টির দলে থাকে; দিনে সক্রিয় এবং বেশিরভাগ সময় উঁচু গাছে কাটায়।',
    },
    range: {
      native: [
        [24.3, 91.8],
        [24.1, 91.5],
        [22.6, 92.2],
        [26.5, 93.0],
        [26.9, 90.9],
        [24.5, 94.5],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Loss and fragmentation of hill forests', 'Hunting for meat and traditional medicine', 'Shifting cultivation'],
        bn: ['পাহাড়ি বন ধ্বংস ও খণ্ডিত হওয়া', 'মাংস ও প্রচলিত ওষুধের জন্য শিকার', 'জুম চাষ'],
      },
      initiatives: {
        en: ['Protection in Satchari, Lawachara and Rema-Kalenga protected areas', 'Listed on CITES Appendix I'],
        bn: ['সাতছড়ি, লাউয়াছড়া ও রেমা-কালেঙ্গা সংরক্ষিত এলাকায় সুরক্ষা', 'সাইটিস পরিশিষ্ট-১ এ তালিকাভুক্ত'],
      },
    },
    facts: {
      en: [
        'Infants are born bright golden-orange and darken as they grow.',
        'Like other langurs it has a multi-chambered stomach to digest leaves.',
      ],
      bn: [
        'ছানারা উজ্জ্বল সোনালি-কমলা রঙ নিয়ে জন্মায় এবং বড় হতে হতে রং গাঢ় হয়।',
        'অন্যান্য হনুমানের মতো পাতা হজমের জন্য এদের কয়েক প্রকোষ্ঠবিশিষ্ট পাকস্থলী আছে।',
      ],
    },
    related: ['western-hoolock-gibbon', 'rhesus-macaque', 'bengal-slow-loris'],
  },
  {
    id: 'bengal-slow-loris',
    commonName: { en: 'Bengal Slow Loris', bn: 'লজ্জাবতী বানর' },
    scientificName: 'Nycticebus bengalensis',
    altNames: {
      en: ['Slow Loris', 'Northern Slow Loris'],
      bn: ['লাজুক বানর', 'স্লো লরিস'],
    },
    category: 'mammals',
    wikiTitle: 'Bengal slow loris',
    description: {
      en: 'The Bengal slow loris is a small, nocturnal primate with huge round eyes and slow, deliberate movements. It is one of the very few venomous mammals: a gland on its elbow produces a toxin that it mixes with saliva. In Bangladesh it lives in the evergreen forests of the east but is rarely seen because it is active only at night.',
      bn: 'লজ্জাবতী বানর বড় গোল চোখ আর ধীরস্থির চলাফেরার ছোট নিশাচর প্রাইমেট। এরা খুব অল্প কয়েকটি বিষাক্ত স্তন্যপায়ীর একটি — কনুইয়ের একটি গ্রন্থি থেকে বের হওয়া বিষ লালার সঙ্গে মিশিয়ে কামড় দেয়। বাংলাদেশে পূর্বাঞ্চলের চিরসবুজ বনে এদের বাস, তবে শুধু রাতে সক্রিয় থাকায় খুব কমই চোখে পড়ে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Primates',
      family: 'Lorisidae',
      genus: 'Nycticebus',
      species: 'N. bengalensis',
    },
    physical: {
      size: { en: 'Head and body 26–38 cm; tail a tiny stub', bn: 'মাথা ও দেহ ২৬–৩৮ সেমি; লেজ নামমাত্র' },
      weight: { en: '1–2.1 kg', bn: '১–২.১ কেজি' },
      lifespan: { en: 'About 20 years in captivity', bn: 'আবদ্ধ অবস্থায় প্রায় ২০ বছর' },
      features: {
        en: [
          'Large forward-facing eyes ringed with dark patches',
          'Dark stripe running along the back',
          'Strong grasping hands and feet for gripping branches for hours',
        ],
        bn: [
          'গাঢ় ছোপে ঘেরা বড়, সামনের দিকে মুখ করা চোখ',
          'পিঠ বরাবর একটি গাঢ় ডোরা',
          'ঘণ্টার পর ঘণ্টা ডাল আঁকড়ে থাকার মতো শক্ত হাত ও পা',
        ],
      },
    },
    habitat: {
      en: 'Tropical evergreen and semi-evergreen forests and bamboo thickets',
      bn: 'ক্রান্তীয় চিরসবুজ ও আধা-চিরসবুজ বন এবং বাঁশঝাড়',
    },
    habitats: ['tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Bangladesh, Northeast India, Myanmar, Thailand, Laos, Cambodia, Vietnam and southern China.',
      bn: 'বাংলাদেশ, উত্তর-পূর্ব ভারত, মিয়ানমার, থাইল্যান্ড, লাওস, কম্বোডিয়া, ভিয়েতনাম ও দক্ষিণ চীন।',
    },
    climate: { en: 'Warm, humid tropical and subtropical climates', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় এবং উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Omnivore — plant gum and sap, nectar, fruits, insects and small animals',
      bn: 'সর্বভুক — গাছের আঠা ও রস, ফুলের মধু, ফল, পোকামাকড় ও ছোট প্রাণী',
    },
    ecologicalRole: {
      en: 'Pollinates some flowers while feeding on nectar and helps control insects.',
      bn: 'মধু খাওয়ার সময় কিছু ফুলের পরাগায়ন ঘটায় এবং পোকামাকড় নিয়ন্ত্রণে সাহায্য করে।',
    },
    behavior: {
      en: 'Strictly nocturnal and arboreal; it moves silently and slowly to avoid detection and curls into a ball to sleep by day.',
      bn: 'সম্পূর্ণ নিশাচর ও গেছো; চোখ এড়াতে নিঃশব্দে ধীরে চলে এবং দিনে গুটিসুটি মেরে বলের মতো হয়ে ঘুমায়।',
    },
    range: {
      native: [
        [24.3, 91.8],
        [22.3, 92.3],
        [26.0, 92.5],
        [19.5, 96.5],
        [15.0, 101.0],
        [22.0, 101.5],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Illegal pet trade, often driven by social-media videos', 'Hunting for traditional medicine', 'Deforestation'],
        bn: ['অবৈধ পোষা প্রাণীর বাণিজ্য, যা প্রায়ই সামাজিক মাধ্যমের ভিডিও দেখে বাড়ে', 'প্রচলিত ওষুধের জন্য শিকার', 'বন উজাড়'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix I', 'Rescue and release of confiscated lorises by the Bangladesh Forest Department'],
        bn: ['সাইটিস পরিশিষ্ট-১ এ তালিকাভুক্ত', 'বাংলাদেশ বন বিভাগ কর্তৃক উদ্ধারকৃত লজ্জাবতী বানর বনে অবমুক্তকরণ'],
      },
      assessed: '2020',
    },
    facts: {
      en: [
        'Its bite can cause painful swelling and, rarely, severe allergic shock in people — never handle one.',
        'Its Bengali name reflects the way it hides its face when disturbed.',
      ],
      bn: [
        'এদের কামড়ে যন্ত্রণাদায়ক ফোলা এবং কখনো কখনো মানুষের মারাত্মক অ্যালার্জিক প্রতিক্রিয়া হতে পারে — তাই কখনো হাতে ধরবেন না।',
        'বিরক্ত হলে হাত দিয়ে মুখ ঢেকে রাখার স্বভাব থেকেই এর বাংলা নাম "লজ্জাবতী"।',
      ],
    },
    related: ['western-hoolock-gibbon', 'capped-langur', 'rhesus-macaque'],
  },
  {
    id: 'chinese-pangolin',
    commonName: { en: 'Chinese Pangolin', bn: 'চীনা বনরুই' },
    scientificName: 'Manis pentadactyla',
    altNames: {
      en: ['Pangolin', 'Scaly Anteater'],
      bn: ['বনরুই', 'পিপীলিকাভুক'],
    },
    category: 'mammals',
    wikiTitle: 'Chinese pangolin',
    description: {
      en: 'The Chinese pangolin is a scale-covered, ant- and termite-eating mammal that rolls into a tight ball when threatened. Pangolins are the most trafficked mammals in the world, hunted for their scales and meat. In Bangladesh it survives in the hill forests of the north-east and south-east.',
      bn: 'চীনা বনরুই আঁশে ঢাকা, পিঁপড়া ও উইপোকাখেকো স্তন্যপায়ী, যারা বিপদে পড়লে শক্ত বলের মতো গুটিয়ে যায়। আঁশ ও মাংসের জন্য বনরুই পৃথিবীর সবচেয়ে বেশি পাচার হওয়া স্তন্যপায়ী প্রাণী। বাংলাদেশে উত্তর-পূর্ব ও দক্ষিণ-পূর্বের পাহাড়ি বনে এরা এখনো টিকে আছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Pholidota',
      family: 'Manidae',
      genus: 'Manis',
      species: 'M. pentadactyla',
    },
    physical: {
      size: { en: 'Head and body 40–58 cm; tail 25–38 cm', bn: 'মাথা ও দেহ ৪০–৫৮ সেমি; লেজ ২৫–৩৮ সেমি' },
      weight: { en: '2–7 kg', bn: '২–৭ কেজি' },
      lifespan: { en: 'Up to about 20 years in captivity', bn: 'আবদ্ধ অবস্থায় প্রায় ২০ বছর পর্যন্ত' },
      features: {
        en: [
          'Overlapping bronze-brown scales made of keratin',
          'Long, sticky tongue for licking up ants and termites',
          'Strong front claws for digging burrows and breaking into nests',
        ],
        bn: [
          'কেরাটিনের তৈরি একটির ওপর আরেকটি বসানো তামাটে-বাদামি আঁশ',
          'পিঁপড়া ও উইপোকা চেটে খাওয়ার জন্য লম্বা, আঠালো জিভ',
          'গর্ত খোঁড়া ও বাসা ভাঙার জন্য সামনের পায়ে শক্ত নখ',
        ],
      },
    },
    habitat: {
      en: 'Subtropical and tropical forests, bamboo groves and adjacent farmland',
      bn: 'উপক্রান্তীয় ও ক্রান্তীয় বন, বাঁশবন এবং আশপাশের কৃষিজমি',
    },
    habitats: ['tropical-forest', 'temperate-forest', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Nepal, Bhutan, Northeast India, Bangladesh, Myanmar, northern Indochina, southern China and Taiwan.',
      bn: 'নেপাল, ভুটান, উত্তর-পূর্ব ভারত, বাংলাদেশ, মিয়ানমার, উত্তর ইন্দোচীন, দক্ষিণ চীন ও তাইওয়ান।',
    },
    climate: { en: 'Subtropical and tropical monsoon climates', bn: 'উপক্রান্তীয় ও ক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Insectivore — almost entirely ants and termites',
      bn: 'কীটভোজী — প্রায় পুরোপুরি পিঁপড়া ও উইপোকা',
    },
    ecologicalRole: {
      en: 'Controls termite and ant populations, and its burrows are used as shelter by other animals.',
      bn: 'উইপোকা ও পিঁপড়ার সংখ্যা নিয়ন্ত্রণ করে; এদের খোঁড়া গর্ত অন্যান্য প্রাণীও আশ্রয় হিসেবে ব্যবহার করে।',
    },
    behavior: {
      en: 'Solitary and nocturnal; it sleeps by day in deep burrows and curls into an armoured ball when threatened.',
      bn: 'একাকী ও নিশাচর; দিনে গভীর গর্তে ঘুমায় এবং বিপদে পড়লে আঁশের বর্মে মোড়া বলের মতো গুটিয়ে যায়।',
    },
    range: {
      native: [
        [24.3, 91.8],
        [22.0, 92.4],
        [27.7, 85.3],
        [26.5, 93.0],
        [22.0, 105.0],
        [25.0, 113.0],
      ],
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      threats: {
        en: ['Poaching for scales used in traditional medicine', 'Hunting for meat considered a delicacy', 'Habitat loss'],
        bn: ['প্রচলিত ওষুধে ব্যবহৃত আঁশের জন্য চোরাশিকার', 'বিলাসী খাবার হিসেবে মাংসের জন্য শিকার', 'আবাসস্থল হারানো'],
      },
      initiatives: {
        en: ['All pangolins moved to CITES Appendix I in 2016', 'World Pangolin Day awareness campaigns'],
        bn: ['২০১৬ সালে সব প্রজাতির বনরুই সাইটিস পরিশিষ্ট-১ এ অন্তর্ভুক্ত', 'বিশ্ব বনরুই দিবসে সচেতনতামূলক প্রচারণা'],
      },
      assessed: '2019',
    },
    facts: {
      en: [
        'Pangolin scales are made of keratin — the same material as human fingernails.',
        'It has no teeth; swallowed stones in its stomach help grind food.',
      ],
      bn: [
        'বনরুইয়ের আঁশ কেরাটিন দিয়ে তৈরি — মানুষের নখও একই উপাদানে গড়া।',
        'এদের কোনো দাঁত নেই; পাকস্থলীতে গিলে ফেলা ছোট পাথর খাবার পিষতে সাহায্য করে।',
      ],
    },
    related: ['sloth-bear', 'bengal-slow-loris'],
  },
  {
    id: 'chital',
    commonName: { en: 'Chital', bn: 'চিত্রা হরিণ' },
    scientificName: 'Axis axis',
    altNames: {
      en: ['Spotted Deer', 'Axis Deer'],
      bn: ['চিত্রল হরিণ', 'ফুটকি হরিণ'],
    },
    category: 'mammals',
    wikiTitle: 'Chital',
    description: {
      en: 'The chital is a graceful deer with a reddish-brown coat dotted with white spots that it keeps throughout its life. It is the most common deer of the Sundarbans and the main prey of the Royal Bengal tiger there. Herds often follow troops of rhesus macaques to eat the leaves and fruit the monkeys drop.',
      bn: 'চিত্রা হরিণ লালচে-বাদামি গায়ে সাদা ফোঁটাওয়ালা সুন্দর হরিণ; এই ফোঁটা সারাজীবন থাকে। সুন্দরবনের সবচেয়ে বেশি দেখা হরিণ এটি এবং সেখানে রয়েল বেঙ্গল টাইগারের প্রধান শিকার। বানরের দল গাছ থেকে যে পাতা ও ফল ফেলে, তা খেতে হরিণের পাল প্রায়ই বানরদের পিছু পিছু ঘোরে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Cervidae',
      genus: 'Axis',
      species: 'A. axis',
    },
    physical: {
      size: { en: 'About 90 cm tall at the shoulder; body 1–1.5 m long', bn: 'কাঁধ পর্যন্ত প্রায় ৯০ সেমি উঁচু; দেহ ১–১.৫ মিটার লম্বা' },
      weight: { en: 'Males 30–75 kg; females 25–45 kg', bn: 'পুরুষ ৩০–৭৫ কেজি; স্ত্রী ২৫–৪৫ কেজি' },
      lifespan: { en: 'About 8–14 years', bn: 'প্রায় ৮–১৪ বছর' },
      features: {
        en: [
          'Reddish-brown coat with rows of white spots',
          'Males carry three-tined antlers up to about 1 m long',
          'White throat, belly and underside of the tail',
        ],
        bn: [
          'লালচে-বাদামি লোমে সারি সারি সাদা ফোঁটা',
          'পুরুষ হরিণের তিন শাখাওয়ালা শিং প্রায় ১ মিটার পর্যন্ত লম্বা হয়',
          'গলা, পেট ও লেজের নিচের দিক সাদা',
        ],
      },
    },
    habitat: {
      en: 'Open forests, forest edges, grassland and mangrove forests',
      bn: 'হালকা বন, বনের প্রান্ত, তৃণভূমি ও ম্যানগ্রোভ বন',
    },
    habitats: ['tropical-forest', 'grassland', 'mangrove'],
    regions: ['south-asia'],
    distribution: {
      en: 'India, Nepal, Bhutan, Sri Lanka and Bangladesh, where it is common in the Sundarbans.',
      bn: 'ভারত, নেপাল, ভুটান, শ্রীলঙ্কা ও বাংলাদেশ; বাংলাদেশে সুন্দরবনে এরা প্রচুর সংখ্যায় আছে।',
    },
    climate: { en: 'Tropical monsoon climate', bn: 'ক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Herbivore — grasses, leaves, fallen fruits and flowers',
      bn: 'তৃণভোজী — ঘাস, পাতা, ঝরে পড়া ফল ও ফুল',
    },
    ecologicalRole: {
      en: 'The key prey species for tigers, leopards and dholes, and a grazer that shapes grassland vegetation.',
      bn: 'বাঘ, চিতাবাঘ ও ঢোলের প্রধান শিকার এবং চারণভোজী হিসেবে তৃণভূমির উদ্ভিদ গঠনে ভূমিকা রাখে।',
    },
    behavior: {
      en: 'Lives in herds of up to dozens of animals and gives sharp alarm calls when it spots a predator.',
      bn: 'কয়েক ডজন পর্যন্ত সদস্যের পালে থাকে এবং শিকারি দেখলে তীক্ষ্ণ সতর্কসংকেত দেয়।',
    },
    range: {
      native: [
        [21.95, 89.5],
        [22.2, 89.1],
        [26.6, 93.4],
        [22.3, 80.6],
        [11.6, 76.6],
        [8.4, 80.4],
      ],
      introduced: [
        [20.8, -156.9],
        [-33.8, 151.0],
        [29.5, -99.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Poaching for meat, including in the Sundarbans', 'Competition with livestock for grazing'],
        bn: ['মাংসের জন্য চোরাশিকার, সুন্দরবনেও', 'চারণভূমিতে গবাদিপশুর সঙ্গে প্রতিযোগিতা'],
      },
      initiatives: {
        en: ['Protected in the Sundarbans wildlife sanctuaries', 'Anti-poaching patrols by the Bangladesh Forest Department'],
        bn: ['সুন্দরবনের বন্যপ্রাণী অভয়ারণ্যে সুরক্ষিত', 'বাংলাদেশ বন বিভাগের চোরাশিকার-বিরোধী টহল'],
      },
      assessed: '2015',
    },
    facts: {
      en: [
        'Chital and langurs or macaques warn each other of tigers — a classic forest partnership.',
        'Unlike most deer, chital keep their spots as adults.',
      ],
      bn: [
        'চিত্রা হরিণ আর বানর একে অপরকে বাঘের আগমনের সংকেত দেয় — বনের এক চমৎকার বন্ধুত্ব।',
        'অধিকাংশ হরিণের ফোঁটা বড় হলে মিলিয়ে যায়, কিন্তু চিত্রা হরিণের থেকে যায়।',
      ],
    },
    related: ['royal-bengal-tiger', 'sambar', 'barking-deer', 'hog-deer'],
  },
  {
    id: 'sambar',
    commonName: { en: 'Sambar', bn: 'সাম্বার হরিণ' },
    scientificName: 'Rusa unicolor',
    altNames: {
      en: ['Sambar Deer', 'Sambhar'],
      bn: ['সাম্বার', 'সম্বর হরিণ'],
    },
    category: 'mammals',
    wikiTitle: 'Sambar deer',
    description: {
      en: 'The sambar is the largest deer of South and Southeast Asia, with a dark brown, shaggy coat and large rugged antlers in males. It is a shy forest animal that feeds mostly at night. In Bangladesh it has become very rare, with small numbers left in the hill forests of Chattogram and Sylhet.',
      bn: 'সাম্বার দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার সবচেয়ে বড় হরিণ; গায়ে গাঢ় বাদামি রুক্ষ লোম আর পুরুষের মাথায় বড় শক্তপোক্ত শিং। এরা লাজুক বনের প্রাণী, বেশিরভাগ সময় রাতে চরে খায়। বাংলাদেশে এরা অত্যন্ত বিরল হয়ে পড়েছে; চট্টগ্রাম ও সিলেটের পাহাড়ি বনে অল্প কিছু টিকে আছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Cervidae',
      genus: 'Rusa',
      species: 'R. unicolor',
    },
    physical: {
      size: { en: '1–1.6 m tall at the shoulder', bn: 'কাঁধ পর্যন্ত ১–১.৬ মিটার উঁচু' },
      weight: { en: 'Males 150–320 kg; females 100–230 kg', bn: 'পুরুষ ১৫০–৩২০ কেজি; স্ত্রী ১০০–২৩০ কেজি' },
      lifespan: { en: 'Up to about 20 years', bn: 'প্রায় ২০ বছর পর্যন্ত' },
      features: {
        en: [
          'Coarse dark brown coat and a shaggy neck mane in males',
          'Long, three-tined antlers',
          'A bare red patch on the throat in both sexes',
        ],
        bn: [
          'খসখসে গাঢ় বাদামি লোম, পুরুষের ঘাড়ে কেশরের মতো লোম',
          'লম্বা, তিন শাখাওয়ালা শিং',
          'স্ত্রী-পুরুষ উভয়ের গলায় লোমহীন লাল ছোপ',
        ],
      },
    },
    habitat: {
      en: 'Tropical and subtropical forests on hills and plains, usually near water',
      bn: 'পাহাড় ও সমতলের ক্রান্তীয় এবং উপক্রান্তীয় বন, সাধারণত জলাশয়ের কাছে',
    },
    habitats: ['tropical-forest', 'mountain'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'India, Sri Lanka, Nepal, Bangladesh, Myanmar, Southeast Asia, southern China, Taiwan, Sumatra and Borneo.',
      bn: 'ভারত, শ্রীলঙ্কা, নেপাল, বাংলাদেশ, মিয়ানমার, দক্ষিণ-পূর্ব এশিয়া, দক্ষিণ চীন, তাইওয়ান, সুমাত্রা ও বোর্নিও।',
    },
    climate: { en: 'Tropical and subtropical climates', bn: 'ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Herbivore — grasses, leaves, shrubs, fruits and aquatic plants',
      bn: 'তৃণভোজী — ঘাস, পাতা, ঝোপঝাড়, ফল ও জলজ উদ্ভিদ',
    },
    ecologicalRole: {
      en: 'Important prey for tigers and dholes and a browser that influences forest regeneration.',
      bn: 'বাঘ ও ঢোলের গুরুত্বপূর্ণ শিকার এবং পাতা খেয়ে বনের নতুন গাছ জন্মানোর ধরনে প্রভাব ফেলে।',
    },
    behavior: {
      en: 'Mostly nocturnal and solitary or in small groups; it stamps and gives a loud “dhank” call when alarmed.',
      bn: 'প্রধানত নিশাচর, একা বা ছোট দলে থাকে; ভয় পেলে পা ঠুকে জোরে "ধাঙ্ক" শব্দে ডাকে।',
    },
    range: {
      native: [
        [22.4, 92.3],
        [22.3, 80.6],
        [11.6, 76.6],
        [7.5, 80.8],
        [14.4, 101.4],
        [1.0, 114.0],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Heavy hunting for meat and antlers', 'Loss and degradation of forests'],
        bn: ['মাংস ও শিংয়ের জন্য ব্যাপক শিকার', 'বন ধ্বংস ও অবক্ষয়'],
      },
      initiatives: {
        en: ['Protection in national parks across its range', 'Anti-poaching efforts in Indian tiger reserves'],
        bn: ['পুরো বিচরণক্ষেত্রের জাতীয় উদ্যানগুলোতে সুরক্ষা', 'ভারতের ব্যাঘ্র সংরক্ষিত এলাকায় চোরাশিকার প্রতিরোধ'],
      },
      assessed: '2015',
    },
    facts: {
      en: [
        'Sambar often stand in water to escape predators such as dholes.',
        'Its antlers can exceed 1 m in length in large stags.',
      ],
      bn: [
        'ঢোলের মতো শিকারির হাত থেকে বাঁচতে সাম্বার প্রায়ই পানিতে নেমে দাঁড়িয়ে থাকে।',
        'বড় পুরুষ সাম্বারের শিং ১ মিটারেরও বেশি লম্বা হতে পারে।',
      ],
    },
    related: ['chital', 'barking-deer', 'dhole', 'royal-bengal-tiger'],
  },
  {
    id: 'barking-deer',
    commonName: { en: 'Barking Deer', bn: 'মায়া হরিণ' },
    scientificName: 'Muntiacus muntjak',
    altNames: {
      en: ['Indian Muntjac', 'Red Muntjac', 'Muntjac'],
      bn: ['কাকর হরিণ', 'মুনটজ্যাক', 'লাল মায়া হরিণ'],
    },
    category: 'mammals',
    wikiTitle: 'Indian muntjac',
    description: {
      en: 'The barking deer is a small, reddish-brown deer named for its loud, dog-like bark used as an alarm call. Males have short antlers on long hairy pedicels and small tusk-like upper canines. It is the most widespread deer in Bangladesh’s hill forests and also occurs in the Sundarbans.',
      bn: 'মায়া হরিণ ছোট আকারের লালচে-বাদামি হরিণ; বিপদ টের পেলে কুকুরের মতো জোরে ডাকে বলে ইংরেজিতে একে "বার্কিং ডিয়ার" বলা হয়। পুরুষের মাথায় লোমে ঢাকা লম্বা বেদির ওপর ছোট শিং এবং ওপরের চোয়ালে ছোট গজদাঁতের মতো শ্বদন্ত থাকে। বাংলাদেশের পাহাড়ি বনে এটিই সবচেয়ে বিস্তৃত হরিণ; সুন্দরবনেও পাওয়া যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Cervidae',
      genus: 'Muntiacus',
      species: 'M. muntjak',
    },
    physical: {
      size: { en: '40–65 cm tall at the shoulder; body 90–110 cm long', bn: 'কাঁধ পর্যন্ত ৪০–৬৫ সেমি উঁচু; দেহ ৯০–১১০ সেমি লম্বা' },
      weight: { en: '14–28 kg', bn: '১৪–২৮ কেজি' },
      lifespan: { en: 'About 15–17 years', bn: 'প্রায় ১৫–১৭ বছর' },
      features: {
        en: [
          'Short antlers growing from long, fur-covered pedicels',
          'Males have small protruding upper canine tusks',
          'V-shaped ridges on the face',
        ],
        bn: [
          'লোমে ঢাকা লম্বা বেদি থেকে গজানো ছোট শিং',
          'পুরুষের ওপরের চোয়াল থেকে বেরিয়ে থাকা ছোট শ্বদন্ত',
          'মুখে ইংরেজি "V" আকৃতির উঁচু রেখা',
        ],
      },
    },
    habitat: {
      en: 'Dense forests, hill scrub and mangroves',
      bn: 'ঘন বন, পাহাড়ি ঝোপঝাড় ও ম্যানগ্রোভ',
    },
    habitats: ['tropical-forest', 'mangrove', 'mountain'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'From India, Sri Lanka, Nepal and Bangladesh through Southeast Asia to southern China, Sumatra, Java and Borneo.',
      bn: 'ভারত, শ্রীলঙ্কা, নেপাল ও বাংলাদেশ থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে দক্ষিণ চীন, সুমাত্রা, জাভা ও বোর্নিও পর্যন্ত।',
    },
    climate: { en: 'Tropical and subtropical climates', bn: 'ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Herbivore — leaves, shoots, fallen fruits, seeds and bark',
      bn: 'তৃণভোজী — পাতা, কচি ডগা, ঝরে পড়া ফল, বীজ ও গাছের ছাল',
    },
    ecologicalRole: {
      en: 'Disperses seeds of forest fruits and is prey for leopards, clouded leopards, dholes and pythons.',
      bn: 'বনের ফলের বীজ ছড়ায় এবং চিতাবাঘ, লামচিতা, ঢোল ও অজগরের শিকার।',
    },
    behavior: {
      en: 'Mostly solitary and active at dawn and dusk; it may bark for an hour when it senses a predator.',
      bn: 'প্রধানত একাকী এবং ভোর ও সন্ধ্যায় সক্রিয়; শিকারির উপস্থিতি টের পেলে এক ঘণ্টা ধরেও ডাকতে পারে।',
    },
    range: {
      native: [
        [24.3, 91.8],
        [22.0, 92.3],
        [22.0, 89.4],
        [15.0, 75.0],
        [13.0, 102.0],
        [-0.5, 113.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Hunting with snares and dogs', 'Forest clearance'],
        bn: ['ফাঁদ ও কুকুর দিয়ে শিকার', 'বন পরিষ্কার করা'],
      },
      initiatives: {
        en: ['Protected under the Bangladesh Wildlife Act 2012', 'Occurs in many protected areas across its range'],
        bn: ['বাংলাদেশ বন্যপ্রাণী আইন, ২০১২-এর অধীনে সুরক্ষিত', 'বিচরণক্ষেত্রের বহু সংরক্ষিত এলাকায় পাওয়া যায়'],
      },
      assessed: '2016',
    },
    facts: {
      en: [
        'Muntjacs are among the oldest known deer, appearing over 15 million years ago.',
        'Northern populations, including Bangladesh’s, are increasingly treated as a separate species, Muntiacus vaginalis.',
      ],
      bn: [
        'মায়া হরিণ সবচেয়ে প্রাচীন হরিণদের একটি; ১৫০ লাখ বছরেরও আগে এদের আবির্ভাব।',
        'বাংলাদেশসহ উত্তরের জনগোষ্ঠীকে এখন অনেক বিজ্ঞানী আলাদা প্রজাতি Muntiacus vaginalis হিসেবে গণ্য করেন।',
      ],
    },
    related: ['chital', 'sambar', 'hog-deer', 'clouded-leopard'],
  },
  {
    id: 'hog-deer',
    commonName: { en: 'Hog Deer', bn: 'পাড়া হরিণ' },
    scientificName: 'Axis porcinus',
    altNames: {
      en: ['Indian Hog Deer'],
      bn: ['পারা হরিণ'],
    },
    category: 'mammals',
    wikiTitle: 'Indian hog deer',
    description: {
      en: 'The hog deer is a small, stocky deer of tall floodplain grasslands, named for the way it runs with its head low through the grass like a hog. It was once common on the floodplains and char lands of Bangladesh. Today it is regarded as extinct in the wild in Bangladesh, apart from small reintroduced or captive groups.',
      bn: 'পাড়া হরিণ নদীর প্লাবনভূমির উঁচু ঘাসবনের ছোট, মোটাসোটা হরিণ; শূকরের মতো মাথা নিচু করে ঘাসের ভেতর দিয়ে ছোটে বলে ইংরেজিতে এর নাম "হগ ডিয়ার"। একসময় বাংলাদেশের প্লাবনভূমি ও চরাঞ্চলে এদের প্রচুর দেখা যেত। এখন বাংলাদেশে প্রকৃতিতে এরা বিলুপ্ত বলে ধরা হয়; কেবল ছোট কিছু পুনঃপ্রবর্তিত বা আবদ্ধ দল টিকে আছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Cervidae',
      genus: 'Axis',
      species: 'A. porcinus',
    },
    physical: {
      size: { en: 'About 60–70 cm tall at the shoulder', bn: 'কাঁধ পর্যন্ত প্রায় ৬০–৭০ সেমি উঁচু' },
      weight: { en: '30–50 kg', bn: '৩০–৫০ কেজি' },
      lifespan: { en: 'About 20 years', bn: 'প্রায় ২০ বছর' },
      features: {
        en: [
          'Stocky body with short legs',
          'Olive-brown coat; young and some adults show faint spots in summer',
          'Small three-tined antlers in males',
        ],
        bn: [
          'খাটো পা ও মোটাসোটা দেহ',
          'জলপাই-বাদামি লোম; বাচ্চা ও কিছু প্রাপ্তবয়স্কের গায়ে গ্রীষ্মে হালকা ফোঁটা দেখা যায়',
          'পুরুষের মাথায় তিন শাখাওয়ালা ছোট শিং',
        ],
      },
    },
    habitat: {
      en: 'Tall wet grasslands on river floodplains',
      bn: 'নদীর প্লাবনভূমির উঁচু ভেজা ঘাসবন',
    },
    habitats: ['grassland', 'wetland'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Now mainly in the Terai and Brahmaputra grasslands of India and Nepal, with small populations in Pakistan, Myanmar and Cambodia.',
      bn: 'এখন প্রধানত ভারত ও নেপালের তরাই এবং ব্রহ্মপুত্র অববাহিকার তৃণভূমিতে; পাকিস্তান, মিয়ানমার ও কম্বোডিয়ায় ছোট জনগোষ্ঠী আছে।',
    },
    climate: { en: 'Tropical and subtropical monsoon climates', bn: 'ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Herbivore — mainly young grasses, plus herbs and leaves',
      bn: 'তৃণভোজী — প্রধানত কচি ঘাস, সঙ্গে লতাগুল্ম ও পাতা',
    },
    ecologicalRole: {
      en: 'A grazer of floodplain grasslands and prey for tigers and leopards.',
      bn: 'প্লাবনভূমির তৃণভূমির চারণভোজী এবং বাঘ ও চিতাবাঘের শিকার।',
    },
    behavior: {
      en: 'Mostly solitary and crepuscular; it dashes away low through the grass rather than leaping like other deer.',
      bn: 'প্রধানত একাকী, ভোর ও গোধূলিতে সক্রিয়; অন্য হরিণের মতো লাফিয়ে না পালিয়ে মাথা নিচু করে ঘাসের ভেতর দিয়ে ছুটে পালায়।',
    },
    range: {
      native: [
        [26.6, 93.4],
        [26.7, 92.0],
        [28.6, 80.5],
        [27.5, 84.3],
        [16.0, 95.0],
        [12.5, 106.5],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Conversion of floodplain grasslands to farmland', 'Hunting for meat', 'Grassland burning and flooding changes'],
        bn: ['প্লাবনভূমির তৃণভূমিকে কৃষিজমিতে রূপান্তর', 'মাংসের জন্য শিকার', 'তৃণভূমি পোড়ানো ও বন্যার ধরনে পরিবর্তন'],
      },
      initiatives: {
        en: ['Protection in Kaziranga, Manas and Chitwan National Parks', 'Captive breeding and release programmes'],
        bn: ['কাজিরাঙ্গা, মানস ও চিতওয়ান জাতীয় উদ্যানে সুরক্ষা', 'আবদ্ধ অবস্থায় প্রজনন ও অবমুক্তকরণ কর্মসূচি'],
      },
      assessed: '2015',
    },
    facts: {
      en: [
        'Introduced populations live in Australia and Sri Lanka.',
        'Its decline mirrors the loss of tall grasslands across South Asia.',
      ],
      bn: [
        'অস্ট্রেলিয়া ও শ্রীলঙ্কায় মানুষের আনা এদের জনগোষ্ঠী আছে।',
        'দক্ষিণ এশিয়াজুড়ে উঁচু তৃণভূমি হারিয়ে যাওয়ার সঙ্গে সঙ্গেই এদের সংখ্যা কমেছে।',
      ],
    },
    related: ['chital', 'indian-rhinoceros', 'wild-water-buffalo'],
  },
  {
    id: 'gaur',
    commonName: { en: 'Gaur', bn: 'গৌর' },
    scientificName: 'Bos gaurus',
    altNames: {
      en: ['Indian Bison', 'Seladang'],
      bn: ['ভারতীয় বাইসন', 'বনগরু'],
    },
    category: 'mammals',
    wikiTitle: 'Gaur',
    description: {
      en: 'The gaur is the largest wild cattle in the world, a massive dark bull with white “stockings” on its lower legs. Despite its size it is generally shy and keeps to forest and hill country. In Bangladesh only a handful may survive in remote parts of the Chattogram Hill Tracts.',
      bn: 'গৌর পৃথিবীর সবচেয়ে বড় বুনো গরু — বিশাল গাঢ় রঙের দেহ আর পায়ের নিচের অংশে সাদা "মোজা"। বিশাল আকার সত্ত্বেও এরা সাধারণত লাজুক এবং বন ও পাহাড়ি এলাকায় থাকে। বাংলাদেশে পার্বত্য চট্টগ্রামের দুর্গম অঞ্চলে হয়তো হাতে গোনা কয়েকটি টিকে আছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Bovidae',
      genus: 'Bos',
      species: 'B. gaurus',
    },
    physical: {
      size: { en: '1.7–2.2 m tall at the shoulder; body 2.5–3.3 m long', bn: 'কাঁধ পর্যন্ত ১.৭–২.২ মিটার উঁচু; দেহ ২.৫–৩.৩ মিটার লম্বা' },
      weight: { en: 'Males 600–1,500 kg; females about 440–700 kg', bn: 'পুরুষ ৬০০–১,৫০০ কেজি; স্ত্রী প্রায় ৪৪০–৭০০ কেজি' },
      lifespan: { en: 'About 20–25 years', bn: 'প্রায় ২০–২৫ বছর' },
      features: {
        en: [
          'Massive muscular hump over the shoulders',
          'Dark brown to black coat with white lower legs',
          'Curved horns with a pale grey ridge between them on the forehead',
        ],
        bn: [
          'কাঁধের ওপর বিশাল পেশিবহুল কুঁজ',
          'গাঢ় বাদামি থেকে কালো লোম ও সাদা রঙের নিচের পা',
          'বাঁকানো শিং, দুই শিংয়ের মাঝে কপালে ফ্যাকাশে ধূসর উঁচু অংশ',
        ],
      },
    },
    habitat: {
      en: 'Evergreen and deciduous forests with nearby grassy clearings and water',
      bn: 'চিরসবুজ ও পর্ণমোচী বন, যার কাছে ঘাসে ঢাকা খোলা জায়গা ও পানি আছে',
    },
    habitats: ['tropical-forest', 'grassland', 'mountain'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'India (its stronghold), Nepal, Bhutan, Bangladesh, Myanmar, Thailand, Indochina, Peninsular Malaysia and southern China.',
      bn: 'ভারত (প্রধান আবাস), নেপাল, ভুটান, বাংলাদেশ, মিয়ানমার, থাইল্যান্ড, ইন্দোচীন, মালয় উপদ্বীপ ও দক্ষিণ চীন।',
    },
    climate: { en: 'Tropical monsoon climates', bn: 'ক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Herbivore — grasses, bamboo, leaves, shrubs and fruits',
      bn: 'তৃণভোজী — ঘাস, বাঁশ, পাতা, ঝোপঝাড় ও ফল',
    },
    ecologicalRole: {
      en: 'A large grazer that opens up vegetation and is occasional prey for tigers.',
      bn: 'বড় চারণভোজী হিসেবে ঘন উদ্ভিদ পাতলা করে এবং মাঝে মাঝে বাঘের শিকার হয়।',
    },
    behavior: {
      en: 'Lives in herds of up to about 40 led by an older female; adult bulls often roam alone.',
      bn: 'একটি বয়স্ক মাদির নেতৃত্বে প্রায় ৪০টি পর্যন্ত সদস্যের পালে থাকে; প্রাপ্তবয়স্ক ষাঁড়েরা প্রায়ই একা ঘোরে।',
    },
    range: {
      native: [
        [21.8, 92.5],
        [11.6, 76.6],
        [22.3, 80.6],
        [26.7, 90.9],
        [14.4, 101.4],
        [4.5, 102.4],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Hunting for meat and trophies', 'Habitat loss', 'Diseases caught from domestic cattle'],
        bn: ['মাংস ও শিংয়ের জন্য শিকার', 'আবাসস্থল হারানো', 'গৃহপালিত গরু থেকে রোগ সংক্রমণ'],
      },
      initiatives: {
        en: ['Large protected populations in Indian reserves such as Nagarhole and Bandipur', 'Listed on CITES Appendix I'],
        bn: ['ভারতের নাগারহোল ও বান্দিপুরের মতো সংরক্ষিত এলাকায় বড় জনগোষ্ঠীর সুরক্ষা', 'সাইটিস পরিশিষ্ট-১ এ তালিকাভুক্ত'],
      },
      assessed: '2016',
    },
    facts: {
      en: [
        'The domesticated form of the gaur is the gayal or mithun, kept by hill communities.',
        'A big gaur bull can outweigh a small car.',
      ],
      bn: [
        'গৌরের গৃহপালিত রূপ হলো গয়াল বা মিথুন, যা পাহাড়ি জনগোষ্ঠী পালন করে।',
        'একটি বড় গৌর ষাঁড়ের ওজন ছোট গাড়ির চেয়েও বেশি হতে পারে।',
      ],
    },
    related: ['wild-water-buffalo', 'asian-elephant', 'royal-bengal-tiger'],
  },
  {
    id: 'indian-rhinoceros',
    commonName: { en: 'Indian Rhinoceros', bn: 'ভারতীয় গণ্ডার' },
    scientificName: 'Rhinoceros unicornis',
    altNames: {
      en: ['Greater One-horned Rhinoceros', 'Indian Rhino', 'One-horned Rhino'],
      bn: ['একশৃঙ্গ গণ্ডার', 'গণ্ডার', 'বড় একশিঙা গণ্ডার'],
    },
    category: 'mammals',
    wikiTitle: 'Indian rhinoceros',
    description: {
      en: 'The Indian rhinoceros is a huge, single-horned rhino whose thick skin falls in folds that look like armour plates. Once found across the northern floodplains of the subcontinent, including Bangladesh, it was hunted to near extinction. Thanks to strict protection, its numbers have recovered to over 4,000, mainly in India and Nepal.',
      bn: 'ভারতীয় গণ্ডার বিশাল আকারের একশিঙা গণ্ডার; এদের পুরু চামড়া ভাঁজে ভাঁজে ঝুলে থাকে, দেখতে বর্মের মতো। বাংলাদেশসহ উপমহাদেশের উত্তরের প্লাবনভূমিজুড়ে একসময় এদের বাস ছিল, কিন্তু শিকারের ফলে প্রায় বিলুপ্ত হয়ে যায়। কঠোর সুরক্ষার কারণে এদের সংখ্যা এখন বেড়ে ৪,০০০ ছাড়িয়েছে, যার বেশিরভাগই ভারত ও নেপালে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Perissodactyla',
      family: 'Rhinocerotidae',
      genus: 'Rhinoceros',
      species: 'R. unicornis',
    },
    physical: {
      size: { en: '1.7–2 m tall at the shoulder; body 3–3.8 m long', bn: 'কাঁধ পর্যন্ত ১.৭–২ মিটার উঁচু; দেহ ৩–৩.৮ মিটার লম্বা' },
      weight: { en: 'Males about 2,000–2,700 kg; females about 1,600 kg', bn: 'পুরুষ প্রায় ২,০০০–২,৭০০ কেজি; স্ত্রী প্রায় ১,৬০০ কেজি' },
      lifespan: { en: 'About 35–45 years', bn: 'প্রায় ৩৫–৪৫ বছর' },
      features: {
        en: [
          'A single black horn 20–60 cm long',
          'Thick grey-brown skin with deep folds and wart-like bumps',
          'Upper lip partly prehensile for grasping grass',
        ],
        bn: [
          '২০–৬০ সেমি লম্বা একটি কালো শিং',
          'গভীর ভাঁজ ও আঁচিলের মতো গুটিযুক্ত পুরু ধূসর-বাদামি চামড়া',
          'ঘাস আঁকড়ে ধরার মতো আংশিক নমনীয় ওপরের ঠোঁট',
        ],
      },
    },
    habitat: {
      en: 'Tall alluvial grasslands, swamps and riverine forests',
      bn: 'পলিমাটির উঁচু তৃণভূমি, জলাভূমি ও নদীতীরের বন',
    },
    habitats: ['grassland', 'wetland', 'rivers-lakes'],
    regions: ['south-asia'],
    distribution: {
      en: 'Assam and West Bengal in India and the Terai of Nepal; extinct in Bangladesh and Pakistan.',
      bn: 'ভারতের আসাম ও পশ্চিমবঙ্গ এবং নেপালের তরাই অঞ্চল; বাংলাদেশ ও পাকিস্তানে বিলুপ্ত।',
    },
    climate: { en: 'Hot, humid monsoon climate with seasonal floods', bn: 'মৌসুমি বন্যাসহ উষ্ণ ও আর্দ্র মৌসুমি জলবায়ু' },
    diet: {
      en: 'Herbivore — tall grasses, aquatic plants, leaves, twigs and fruits',
      bn: 'তৃণভোজী — উঁচু ঘাস, জলজ উদ্ভিদ, পাতা, ডালপালা ও ফল',
    },
    ecologicalRole: {
      en: 'A “mega-gardener” that maintains grassland structure and spreads seeds in its dung.',
      bn: 'তৃণভূমির গঠন বজায় রেখে এবং মলের মাধ্যমে বীজ ছড়িয়ে এরা বনের "বড় মালি"র ভূমিকা পালন করে।',
    },
    behavior: {
      en: 'Mostly solitary and fond of wallowing in water and mud; it uses communal dung piles to communicate.',
      bn: 'প্রধানত একাকী, পানি ও কাদায় গড়াগড়ি করতে ভালোবাসে; যৌথ মলস্তূপের মাধ্যমে একে অপরের সঙ্গে যোগাযোগ করে।',
    },
    range: {
      native: [
        [26.6, 93.4],
        [26.7, 91.0],
        [26.7, 89.3],
        [27.5, 84.3],
        [28.5, 81.2],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'increasing',
      population: {
        en: 'About 4,000 in the wild (early 2020s estimates)',
        bn: 'বনে প্রায় ৪,০০০টি (২০২০-এর দশকের শুরুর হিসাব)',
      },
      threats: {
        en: ['Poaching for its horn', 'Floods and habitat degradation', 'Invasive plants in grasslands'],
        bn: ['শিংয়ের জন্য চোরাশিকার', 'বন্যা ও আবাসস্থলের অবক্ষয়', 'তৃণভূমিতে আগ্রাসী উদ্ভিদ'],
      },
      initiatives: {
        en: ['Strict protection in Kaziranga and Chitwan National Parks', 'Indian Rhino Vision 2020 translocations to new reserves'],
        bn: ['কাজিরাঙ্গা ও চিতওয়ান জাতীয় উদ্যানে কঠোর সুরক্ষা', 'ইন্ডিয়ান রাইনো ভিশন ২০২০-এর মাধ্যমে নতুন সংরক্ষিত এলাকায় স্থানান্তর'],
      },
      assessed: '2018',
    },
    facts: {
      en: [
        'Kaziranga National Park holds about two-thirds of all Indian rhinos.',
        'Rhino horn is made of keratin, like hair and fingernails.',
      ],
      bn: [
        'পৃথিবীর মোট ভারতীয় গণ্ডারের প্রায় দুই-তৃতীয়াংশ কাজিরাঙ্গা জাতীয় উদ্যানে বাস করে।',
        'গণ্ডারের শিং চুল ও নখের মতোই কেরাটিনে তৈরি।',
      ],
    },
    related: ['wild-water-buffalo', 'hog-deer', 'asian-elephant', 'royal-bengal-tiger'],
  },
  {
    id: 'wild-water-buffalo',
    commonName: { en: 'Wild Water Buffalo', bn: 'বুনো মহিষ' },
    scientificName: 'Bubalus arnee',
    altNames: {
      en: ['Asian Buffalo', 'Arna'],
      bn: ['বন্য মহিষ', 'আরনা মহিষ'],
    },
    category: 'mammals',
    wikiTitle: 'Wild water buffalo',
    description: {
      en: 'The wild water buffalo is the ancestor of the domestic buffalo and one of the largest wild bovines, with the widest horn span of any living animal. It depends on wet grasslands, swamps and river floodplains. It once roamed Bangladesh’s wetlands but is now extinct there, with most survivors in Assam, India.',
      bn: 'বুনো মহিষ গৃহপালিত মহিষের পূর্বপুরুষ এবং সবচেয়ে বড় বুনো গবাদি প্রাণীদের একটি; জীবিত প্রাণীদের মধ্যে এদের শিংয়ের বিস্তার সবচেয়ে বেশি। এরা ভেজা তৃণভূমি, জলাভূমি ও নদীর প্লাবনভূমির ওপর নির্ভরশীল। একসময় বাংলাদেশের জলাভূমিতে বিচরণ করলেও এখন এখানে বিলুপ্ত; বেশিরভাগ টিকে আছে ভারতের আসামে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Bovidae',
      genus: 'Bubalus',
      species: 'B. arnee',
    },
    physical: {
      size: { en: '1.5–1.9 m tall at the shoulder; body 2.4–3 m long', bn: 'কাঁধ পর্যন্ত ১.৫–১.৯ মিটার উঁচু; দেহ ২.৪–৩ মিটার লম্বা' },
      weight: { en: '600–1,200 kg', bn: '৬০০–১,২০০ কেজি' },
      lifespan: { en: 'About 25 years', bn: 'প্রায় ২৫ বছর' },
      features: {
        en: [
          'Enormous crescent-shaped horns spreading up to about 2 m tip to tip',
          'Sparse dark grey-black coat',
          'Whitish “stockings” on the lower legs',
        ],
        bn: [
          'আগা থেকে আগা প্রায় ২ মিটার পর্যন্ত বিস্তৃত বিশাল অর্ধচন্দ্রাকৃতি শিং',
          'পাতলা গাঢ় ধূসর-কালো লোম',
          'পায়ের নিচের অংশে সাদাটে "মোজা"',
        ],
      },
    },
    habitat: {
      en: 'Wet grasslands, swamps and river floodplains',
      bn: 'ভেজা তৃণভূমি, জলাভূমি ও নদীর প্লাবনভূমি',
    },
    habitats: ['wetland', 'grassland', 'rivers-lakes'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Mainly Assam in India, with small populations in central India, Nepal, Bhutan, Myanmar, Thailand and Cambodia.',
      bn: 'প্রধানত ভারতের আসামে; মধ্য ভারত, নেপাল, ভুটান, মিয়ানমার, থাইল্যান্ড ও কম্বোডিয়ায় ছোট ছোট জনগোষ্ঠী আছে।',
    },
    climate: { en: 'Hot, humid tropical monsoon climate', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Herbivore — grasses, reeds and aquatic plants',
      bn: 'তৃণভোজী — ঘাস, নলখাগড়া ও জলজ উদ্ভিদ',
    },
    ecologicalRole: {
      en: 'Its grazing and wallowing create open patches and pools used by many other wetland species.',
      bn: 'এদের চারণ ও কাদায় গড়াগড়ির ফলে খোলা জায়গা ও ছোট ডোবা তৈরি হয়, যা জলাভূমির বহু প্রাণী ব্যবহার করে।',
    },
    behavior: {
      en: 'Lives in female-led herds; spends hot hours wallowing in water and can be aggressive when threatened.',
      bn: 'মাদির নেতৃত্বে পালে থাকে; গরমের সময় পানিতে গা ডুবিয়ে রাখে এবং বিপদে আক্রমণাত্মক হয়ে উঠতে পারে।',
    },
    range: {
      native: [
        [26.6, 93.4],
        [26.7, 91.0],
        [26.7, 87.0],
        [19.5, 81.5],
        [15.4, 99.3],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Interbreeding with domestic and feral buffalo', 'Diseases and parasites from livestock', 'Loss of wetlands and hunting'],
        bn: ['গৃহপালিত ও ছাড়া মহিষের সঙ্গে সংকরায়ণ', 'গবাদিপশু থেকে রোগ ও পরজীবী সংক্রমণ', 'জলাভূমি হারানো ও শিকার'],
      },
      initiatives: {
        en: ['Protection in Kaziranga, Manas and Koshi Tappu reserves', 'Listed on CITES Appendix III (Nepal)'],
        bn: ['কাজিরাঙ্গা, মানস ও কোশি টাপু সংরক্ষিত এলাকায় সুরক্ষা', 'সাইটিস পরিশিষ্ট-৩ এ তালিকাভুক্ত (নেপালের পক্ষ থেকে)'],
      },
    },
    facts: {
      en: [
        'Its horns have the largest span of any living bovid.',
        'Fewer than about 4,000 truly wild animals are thought to remain.',
      ],
      bn: [
        'জীবিত গবাদি প্রাণীদের মধ্যে এদের শিংয়ের বিস্তার সবচেয়ে বেশি।',
        'ধারণা করা হয়, বিশুদ্ধ বুনো মহিষ এখন আনুমানিক ৪,০০০টিরও কম টিকে আছে।',
      ],
    },
    related: ['gaur', 'indian-rhinoceros', 'hog-deer'],
  },
];
