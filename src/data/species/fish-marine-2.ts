import type { Species } from '@/types';

export const fishMarine2: Species[] = [
  {
    id: 'giant-oceanic-manta-ray',
    commonName: { en: 'Giant Oceanic Manta Ray', bn: 'দানব মান্তা রে' },
    scientificName: 'Mobula birostris',
    altNames: {
      en: ['Giant Manta Ray', 'Manta Ray', 'Devilfish'],
      bn: ['মান্তা রে', 'বিশাল শাপলাপাতা মাছ', 'দানব শাপলাপাতা'],
    },
    synonyms: ['Manta birostris'],
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Giant oceanic manta ray',
    description: {
      en: 'The giant oceanic manta ray is the largest ray in the world, gliding through tropical oceans on wing-like fins that can span about 7 m. Despite its size it is a gentle filter feeder, sieving plankton with its gill plates. It has one of the largest brain-to-body ratios of any fish and visits reef "cleaning stations" to have parasites removed.',
      bn: 'দানব মান্তা রে পৃথিবীর সবচেয়ে বড় রে বা শাপলাপাতা মাছ; প্রায় ৭ মিটার চওড়া ডানার মতো পাখনা মেলে এরা ক্রান্তীয় মহাসাগরে ভেসে বেড়ায়। বিশাল আকৃতি সত্ত্বেও এরা নিরীহ ছাঁকনভোজী — ফুলকার ছাঁকনি দিয়ে প্রাণিকণা ছেঁকে খায়। মাছেদের মধ্যে দেহের তুলনায় এদের মস্তিষ্ক সবচেয়ে বড়গুলোর একটি; পরজীবী পরিষ্কার করাতে এরা প্রবাল প্রাচীরের "পরিষ্কার-কেন্দ্রে" যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Chondrichthyes',
      order: 'Myliobatiformes',
      family: 'Mobulidae',
      genus: 'Mobula',
      species: 'M. birostris',
    },
    physical: {
      size: { en: 'Wingspan commonly 4.5–7 m', bn: 'ডানার বিস্তার সাধারণত ৪.৫–৭ মিটার' },
      weight: { en: 'Up to about 2,000 kg or more', bn: 'প্রায় ২,০০০ কেজি বা তারও বেশি' },
      lifespan: { en: 'At least 40 years', bn: 'অন্তত ৪০ বছর' },
      features: {
        en: ['Huge triangular pectoral "wings"', 'Two cephalic fins that unroll to funnel food into the mouth', 'Black back with white shoulder patches; unique belly spots identify individuals'],
        bn: ['বিশাল ত্রিভুজাকার বক্ষপাখনা বা "ডানা"', 'মুখের দুই পাশে দুটি শিং-পাখনা, যা খুলে খাবার মুখে ঢোকায়', 'কালো পিঠ ও কাঁধে সাদা ছোপ; পেটের দাগের নকশা দেখে প্রত্যেককে আলাদা করে চেনা যায়'],
      },
    },
    habitat: {
      en: 'Open ocean, offshore islands, seamounts and productive coastlines',
      bn: 'খোলা মহাসাগর, দূরবর্তী দ্বীপ, সাগরতলের পাহাড় ও খাদ্যসমৃদ্ধ উপকূল',
    },
    habitats: ['ocean', 'coral-reef'],
    regions: ['south-asia', 'southeast-asia', 'africa', 'north-america', 'south-america', 'oceania', 'oceans'],
    distribution: {
      en: 'Tropical and subtropical oceans worldwide, with well-known sites in Mexico, Ecuador, Mozambique, Indonesia and the Maldives.',
      bn: 'বিশ্বের ক্রান্তীয় ও উপক্রান্তীয় মহাসাগর; মেক্সিকো, ইকুয়েডর, মোজাম্বিক, ইন্দোনেশিয়া ও মালদ্বীপে এদের পরিচিত বিচরণক্ষেত্র আছে।',
    },
    climate: { en: 'Tropical and warm-temperate oceans', bn: 'ক্রান্তীয় ও উষ্ণ-নাতিশীতোষ্ণ মহাসাগর' },
    diet: {
      en: 'Filter feeder — zooplankton such as krill, copepods and fish larvae',
      bn: 'ছাঁকনভোজী — ক্রিল, কোপেপড ও মাছের লার্ভার মতো প্রাণিকণা',
    },
    ecologicalRole: {
      en: 'Moves nutrients between deep and surface waters and supports cleaner fish on reefs.',
      bn: 'গভীর ও উপরিভাগের পানির মধ্যে পুষ্টি পরিবহন করে এবং প্রবাল প্রাচীরের পরিষ্কারক মাছদের খাবার জোগায়।',
    },
    behavior: {
      en: 'Often solitary but gathers at feeding and cleaning sites; can dive below 1,000 m and sometimes leaps clear of the water.',
      bn: 'সাধারণত একা থাকে, তবে খাবার ও পরিষ্কার-কেন্দ্রে দল বাঁধে; ১,০০০ মিটারের বেশি গভীরে ডুব দিতে পারে এবং মাঝে মাঝে পানি থেকে লাফিয়ে ওঠে।',
    },
    range: {
      native: [
        [-0.5, -91.0],
        [18.8, -111.0],
        [-23.9, 35.6],
        [-8.75, 115.5],
        [4.0, 73.4],
        [7.0, 97.5],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Targeted fishing for gill plates used in traditional medicine', 'Bycatch in nets and longlines', 'Boat strikes and entanglement'],
        bn: ['প্রচলিত ওষুধে ব্যবহৃত ফুলকা-ছাঁকনির জন্য শিকার', 'জাল ও লংলাইনে দুর্ঘটনাবশত ধরা পড়া', 'নৌযানের ধাক্কা ও দড়িতে জড়িয়ে যাওয়া'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II and CMS Appendix I', 'Manta sanctuaries in Indonesia, the Maldives and Ecuador'],
        bn: ['সাইটিসের পরিশিষ্ট-২ ও সিএমএস-এর পরিশিষ্ট-১ তালিকাভুক্ত', 'ইন্দোনেশিয়া, মালদ্বীপ ও ইকুয়েডরে মান্তা অভয়ারণ্য'],
      },
    },
    facts: {
      en: [
        'Females usually give birth to a single pup only every few years.',
        'In tests with mirrors, mantas behaved in ways that suggest self-awareness.',
      ],
      bn: [
        'স্ত্রী মান্তা সাধারণত কয়েক বছর পরপর মাত্র একটি বাচ্চা প্রসব করে।',
        'আয়না দিয়ে পরীক্ষায় মান্তা এমন আচরণ করেছে, যা আত্মসচেতনতার ইঙ্গিত দেয়।',
      ],
    },
    related: ['whale-shark', 'largetooth-sawfish', 'ocean-sunfish'],
  },
  {
    id: 'atlantic-bluefin-tuna',
    commonName: { en: 'Atlantic Bluefin Tuna', bn: 'আটলান্টিক ব্লুফিন টুনা' },
    scientificName: 'Thunnus thynnus',
    altNames: {
      en: ['Bluefin Tuna', 'Northern Bluefin Tuna', 'Tunny'],
      bn: ['ব্লুফিন টুনা', 'টুনা মাছ', 'উত্তরের ব্লুফিন টুনা'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Atlantic bluefin tuna',
    description: {
      en: 'The Atlantic bluefin tuna is one of the largest and fastest bony fish, a warm-bodied ocean wanderer that crosses the Atlantic. Prized for sushi and sashimi, it was severely overfished in the late 20th century. Strict catch quotas since 2007 have allowed stocks to recover substantially.',
      bn: 'আটলান্টিক ব্লুফিন টুনা সবচেয়ে বড় ও দ্রুতগামী অস্থিময় মাছগুলোর একটি; শরীর উষ্ণ রাখতে পারা এই মাছ গোটা আটলান্টিক মহাসাগর পাড়ি দেয়। সুশি ও সাশিমির জন্য অত্যন্ত দামি হওয়ায় বিশ শতকের শেষভাগে এদের ব্যাপক অতিরিক্ত আহরণ হয়েছিল। ২০০৭ সাল থেকে কঠোর আহরণ-কোটার ফলে এদের মজুদ উল্লেখযোগ্যভাবে পুনরুদ্ধার হয়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Scombriformes',
      family: 'Scombridae',
      genus: 'Thunnus',
      species: 'T. thynnus',
    },
    physical: {
      size: { en: 'Commonly 2–2.5 m; up to about 3.7 m', bn: 'সাধারণত ২–২.৫ মিটার; সর্বোচ্চ প্রায় ৩.৭ মিটার' },
      weight: { en: 'Commonly 225–250 kg; record fish near 680 kg', bn: 'সাধারণত ২২৫–২৫০ কেজি; রেকর্ড মাছ প্রায় ৬৮০ কেজি' },
      lifespan: { en: 'Up to about 40 years', bn: 'প্রায় ৪০ বছর পর্যন্ত' },
      features: {
        en: ['Torpedo-shaped body, dark metallic blue above and silver below', 'Yellow finlets along the tail stalk', 'Fins fold into grooves to reduce drag'],
        bn: ['টর্পেডো আকৃতির দেহ, ওপরে গাঢ় ধাতব নীল ও নিচে রুপালি', 'লেজের গোড়া বরাবর হলুদ ছোট পাখনার সারি', 'পানির বাধা কমাতে পাখনা শরীরের খাঁজে ভাঁজ হয়ে ঢুকে যায়'],
      },
    },
    habitat: {
      en: 'Open ocean and continental shelves, from the surface to depths of about 1,000 m',
      bn: 'খোলা মহাসাগর ও মহীসোপান, পানির উপরিভাগ থেকে প্রায় ১,০০০ মিটার গভীরতা পর্যন্ত',
    },
    habitats: ['ocean'],
    regions: ['europe', 'north-america', 'africa', 'oceans'],
    distribution: {
      en: 'North Atlantic Ocean and the Mediterranean Sea; spawns in the Gulf of Mexico and the Mediterranean.',
      bn: 'উত্তর আটলান্টিক মহাসাগর ও ভূমধ্যসাগর; মেক্সিকো উপসাগর ও ভূমধ্যসাগরে ডিম পাড়ে।',
    },
    climate: { en: 'Subtropical to cold-temperate seas', bn: 'উপক্রান্তীয় থেকে শীতল-নাতিশীতোষ্ণ সাগর' },
    diet: {
      en: 'Carnivore — herring, mackerel, sardines, squid and crustaceans',
      bn: 'মাংসাশী — হেরিং, ম্যাকারেল, সার্ডিন, স্কুইড ও খোলসযুক্ত প্রাণী',
    },
    ecologicalRole: {
      en: 'A top ocean predator that controls schooling fish and transfers energy across ocean basins.',
      bn: 'মহাসাগরের শীর্ষ শিকারি, যা ঝাঁকবদ্ধ মাছের সংখ্যা নিয়ন্ত্রণ করে এবং এক সাগর থেকে আরেক সাগরে শক্তি স্থানান্তর করে।',
    },
    behavior: {
      en: 'Swims in schools and migrates thousands of kilometres between feeding grounds and spawning seas.',
      bn: 'ঝাঁক বেঁধে চলে এবং খাবারের এলাকা ও প্রজননের সাগরের মধ্যে হাজার হাজার কিলোমিটার পরিভ্রমণ করে।',
    },
    range: {
      native: [
        [35.95, -5.6],
        [40.0, 5.0],
        [44.0, -60.0],
        [26.0, -90.0],
        [60.0, 2.0],
        [35.0, -40.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'increasing',
      threats: {
        en: ['Past overfishing and illegal catches', 'High market demand for sushi', 'Ocean warming affecting spawning'],
        bn: ['অতীতের অতিরিক্ত ও অবৈধ আহরণ', 'সুশির জন্য বাজারে বিপুল চাহিদা', 'সাগরের উষ্ণায়নে প্রজনন প্রভাবিত হওয়া'],
      },
      initiatives: {
        en: ['ICCAT recovery plan with strict catch quotas', 'Electronic catch documentation to stop illegal trade'],
        bn: ['আইক্যাট-এর পুনরুদ্ধার পরিকল্পনা ও কঠোর আহরণ-কোটা', 'অবৈধ বাণিজ্য ঠেকাতে ইলেকট্রনিক আহরণ-নথি ব্যবস্থা'],
      },
      assessed: '2021',
    },
    facts: {
      en: [
        'Bluefin tuna can reach bursts of about 70 km/h.',
        'Special blood vessels let it keep muscles much warmer than the surrounding water.',
        'A single bluefin once sold for over 3 million US dollars at a Tokyo auction.',
      ],
      bn: [
        'ব্লুফিন টুনা হঠাৎ গতিতে ঘণ্টায় প্রায় ৭০ কিলোমিটার পর্যন্ত ছুটতে পারে।',
        'বিশেষ রক্তনালির কারণে এরা পেশিকে আশপাশের পানির চেয়ে অনেক উষ্ণ রাখতে পারে।',
        'টোকিওর এক নিলামে একটি ব্লুফিন টুনা ৩০ লাখ মার্কিন ডলারেরও বেশি দামে বিক্রি হয়েছিল।',
      ],
    },
    related: ['swordfish', 'atlantic-cod', 'atlantic-salmon'],
  },
  {
    id: 'atlantic-salmon',
    commonName: { en: 'Atlantic Salmon', bn: 'আটলান্টিক স্যামন' },
    scientificName: 'Salmo salar',
    altNames: {
      en: ['Salmon', 'Salmon of the Atlantic'],
      bn: ['স্যামন মাছ', 'স্যালমন'],
    },
    category: 'fish',
    secondaryCategories: ['marine', 'freshwater'],
    wikiTitle: 'Atlantic salmon',
    description: {
      en: 'The Atlantic salmon is born in cold, clear rivers, migrates to the North Atlantic to grow and then returns, often to its home stream, to spawn. Famous for leaping waterfalls on its upstream journey, it is also the world’s most widely farmed salmon. Wild populations have declined sharply.',
      bn: 'আটলান্টিক স্যামনের জন্ম শীতল ও স্বচ্ছ নদীতে; বড় হতে এরা উত্তর আটলান্টিক মহাসাগরে যায়, তারপর ডিম পাড়তে প্রায়ই নিজের জন্মস্থানের নদীতেই ফিরে আসে। উজানে যাওয়ার পথে জলপ্রপাত লাফিয়ে পার হওয়ার জন্য এরা বিখ্যাত; বিশ্বে সবচেয়ে বেশি চাষ করা স্যামনও এটি। তবে প্রাকৃতিক জনগোষ্ঠী অনেক কমে গেছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Salmoniformes',
      family: 'Salmonidae',
      genus: 'Salmo',
      species: 'S. salar',
    },
    physical: {
      size: { en: 'Adults usually 70–75 cm; up to about 1.5 m', bn: 'প্রাপ্তবয়স্ক সাধারণত ৭০–৭৫ সেমি; সর্বোচ্চ প্রায় ১.৫ মিটার' },
      weight: { en: 'Usually 3.5–5 kg; exceptionally over 30 kg', bn: 'সাধারণত ৩.৫–৫ কেজি; ব্যতিক্রমী ক্ষেত্রে ৩০ কেজির বেশি' },
      lifespan: { en: 'Up to about 13 years', bn: 'প্রায় ১৩ বছর পর্যন্ত' },
      features: {
        en: ['Silvery sea-run adults with small black X-shaped spots', 'Small fleshy adipose fin on the back', 'Breeding males develop a hooked lower jaw (kype)'],
        bn: ['সাগরফেরত প্রাপ্তবয়স্ক মাছ রুপালি, গায়ে ছোট কালো ক্রুশ-আকৃতির দাগ', 'পিঠে ছোট মাংসল চর্বি-পাখনা', 'প্রজনন মৌসুমে পুরুষের নিচের চোয়াল বাঁকা হুকের মতো হয়ে যায়'],
      },
    },
    habitat: {
      en: 'Cold, clean, gravel-bottomed rivers for breeding and the cool North Atlantic for feeding',
      bn: 'প্রজননের জন্য নুড়িপাথরের তলদেশযুক্ত শীতল পরিষ্কার নদী, আর খাবারের জন্য শীতল উত্তর আটলান্টিক',
    },
    habitats: ['rivers-lakes', 'ocean'],
    regions: ['europe', 'north-america', 'oceans'],
    distribution: {
      en: 'North Atlantic rivers and seas from Portugal to Russia, Iceland and Greenland, and from New England to Labrador.',
      bn: 'পর্তুগাল থেকে রাশিয়া, আইসল্যান্ড ও গ্রিনল্যান্ড এবং নিউ ইংল্যান্ড থেকে ল্যাব্রাডর পর্যন্ত উত্তর আটলান্টিকের নদী ও সাগর।',
    },
    climate: { en: 'Cool temperate to subarctic waters', bn: 'শীতল নাতিশীতোষ্ণ থেকে উপমেরু অঞ্চলের পানি' },
    diet: {
      en: 'Young eat aquatic insects in rivers; at sea adults eat herring, capelin, sand eels and krill',
      bn: 'বাচ্চারা নদীতে জলজ পোকামাকড় খায়; সাগরে প্রাপ্তবয়স্করা হেরিং, ক্যাপেলিন, স্যান্ড ইল ও ক্রিল খায়',
    },
    ecologicalRole: {
      en: 'Carries marine nutrients far inland when it returns to spawn and feeds otters, seals, ospreys and bears.',
      bn: 'ডিম পাড়তে ফেরার সময় সাগরের পুষ্টি নদীর অনেক ভেতরে বয়ে আনে এবং ভোঁদড়, সিল, মাছমুরাল ও ভালুকের খাবার জোগায়।',
    },
    behavior: {
      en: 'Anadromous; unlike Pacific salmon, many adults survive spawning and can return to breed again.',
      bn: 'অ্যানাড্রোমাস মাছ; প্রশান্ত মহাসাগরীয় স্যামনের বিপরীতে অনেকেই ডিম পাড়ার পর বেঁচে থাকে এবং আবার প্রজননে ফিরতে পারে।',
    },
    range: {
      native: [
        [63.5, -22.0],
        [70.0, 15.0],
        [47.0, -51.0],
        [57.6, -3.2],
        [62.0, -55.0],
        [44.9, -66.9],
      ],
    },
    conservation: {
      status: 'NT',
      trend: 'decreasing',
      threats: {
        en: ['Dams and weirs blocking migration', 'Sea lice, disease and escapees from salmon farms', 'Warming seas reducing survival at sea'],
        bn: ['বাঁধ ও জলকপাটে চলাচল বাধাগ্রস্ত হওয়া', 'চাষের খামার থেকে সামুদ্রিক উকুন, রোগ ও পালানো মাছ', 'সাগরের উষ্ণায়নে সাগরে বেঁচে থাকার হার কমে যাওয়া'],
      },
      initiatives: {
        en: ['North Atlantic Salmon Conservation Organization (NASCO)', 'Dam removal and river restoration projects'],
        bn: ['উত্তর আটলান্টিক স্যামন সংরক্ষণ সংস্থা (নাসকো)', 'বাঁধ অপসারণ ও নদী পুনরুদ্ধার প্রকল্প'],
      },
    },
    facts: {
      en: [
        'Salmon find their home river partly by its unique smell.',
        'They can leap more than 3 m to clear waterfalls.',
      ],
      bn: [
        'স্যামন অনেকটা নদীর নিজস্ব গন্ধ চিনে নিজের জন্মস্থানের নদী খুঁজে পায়।',
        'জলপ্রপাত পেরোতে এরা ৩ মিটারেরও বেশি উঁচুতে লাফ দিতে পারে।',
      ],
    },
    related: ['european-eel', 'atlantic-cod', 'atlantic-bluefin-tuna'],
  },
  {
    id: 'swordfish',
    commonName: { en: 'Swordfish', bn: 'সোর্ডফিশ' },
    scientificName: 'Xiphias gladius',
    altNames: {
      en: ['Broadbill', 'Broadbill Swordfish'],
      bn: ['তলোয়ার মাছ', 'তরবারি মাছ'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Swordfish',
    description: {
      en: 'The swordfish is a large, fast ocean predator named for its long, flat, sword-like bill. It uses the bill to slash and stun prey rather than to spear it. Special heater tissue warms its eyes and brain, helping it hunt in cold, dark deep water.',
      bn: 'সোর্ডফিশ বা তলোয়ার মাছ বড় ও দ্রুতগামী সামুদ্রিক শিকারি; মুখের সামনের লম্বা, চ্যাপ্টা, তলোয়ারের মতো ঠোঁটের জন্য এই নাম। এই ঠোঁট দিয়ে এরা শিকারকে গেঁথে ফেলে না, বরং পাশ থেকে আঘাত করে অবশ করে। বিশেষ তাপ-উৎপাদী টিস্যু এদের চোখ ও মস্তিষ্ক উষ্ণ রাখে, ফলে ঠান্ডা ও অন্ধকার গভীর পানিতেও শিকার করতে পারে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Carangiformes',
      family: 'Xiphiidae',
      genus: 'Xiphias',
      species: 'X. gladius',
    },
    physical: {
      size: { en: 'Commonly 3 m; up to about 4.5 m including the bill', bn: 'সাধারণত ৩ মিটার; ঠোঁটসহ সর্বোচ্চ প্রায় ৪.৫ মিটার' },
      weight: { en: 'Commonly 50–200 kg; record about 650 kg', bn: 'সাধারণত ৫০–২০০ কেজি; রেকর্ড প্রায় ৬৫০ কেজি' },
      lifespan: { en: 'Up to about 9–15 years', bn: 'প্রায় ৯–১৫ বছর পর্যন্ত' },
      features: {
        en: ['Long, flat bill about one-third of body length', 'Adults have no scales, teeth or pelvic fins', 'Tall, rigid first dorsal fin and crescent tail'],
        bn: ['দেহের প্রায় এক-তৃতীয়াংশ লম্বা চ্যাপ্টা ঠোঁট', 'প্রাপ্তবয়স্কদের আঁশ, দাঁত বা শ্রোণী পাখনা থাকে না', 'উঁচু ও শক্ত প্রথম পৃষ্ঠপাখনা এবং অর্ধচন্দ্রাকার লেজ'],
      },
    },
    habitat: {
      en: 'Open ocean from the surface to depths of over 500 m',
      bn: 'খোলা মহাসাগর, উপরিভাগ থেকে ৫০০ মিটারেরও বেশি গভীরতা পর্যন্ত',
    },
    habitats: ['ocean'],
    regions: ['oceans', 'europe', 'north-america', 'south-america', 'south-asia', 'oceania'],
    distribution: {
      en: 'Tropical and temperate parts of the Atlantic, Indian and Pacific oceans, and the Mediterranean.',
      bn: 'আটলান্টিক, ভারত ও প্রশান্ত মহাসাগরের ক্রান্তীয় ও নাতিশীতোষ্ণ অঞ্চল এবং ভূমধ্যসাগর।',
    },
    climate: { en: 'Tropical to temperate oceans', bn: 'ক্রান্তীয় থেকে নাতিশীতোষ্ণ মহাসাগর' },
    diet: {
      en: 'Carnivore — squid, mackerel, hake and other fish',
      bn: 'মাংসাশী — স্কুইড, ম্যাকারেল, হেইক ও অন্যান্য মাছ',
    },
    ecologicalRole: {
      en: 'A top open-ocean predator that links deep-water squid and fish to the surface food web.',
      bn: 'খোলা সাগরের শীর্ষ শিকারি, যা গভীর পানির স্কুইড ও মাছকে উপরিভাগের খাদ্যশৃঙ্খলের সঙ্গে যুক্ত করে।',
    },
    behavior: {
      en: 'Solitary; dives deep by day and rises to the surface at night, sometimes basking at the surface.',
      bn: 'একাকী; দিনে গভীরে ডুব দেয় এবং রাতে উপরে উঠে আসে, কখনো কখনো উপরিভাগে রোদ পোহায়।',
    },
    range: {
      native: [
        [35.0, -40.0],
        [39.0, 12.5],
        [-30.0, -45.0],
        [20.0, -160.0],
        [-15.0, 80.0],
        [-35.0, -75.0],
      ],
    },
    conservation: {
      status: 'NT',
      trend: 'unknown',
      threats: {
        en: ['Longline fishing, including capture of juveniles', 'Illegal driftnets in the Mediterranean'],
        bn: ['লংলাইন বড়শিতে আহরণ, ছোট মাছসহ', 'ভূমধ্যসাগরে অবৈধ ভাসমান জাল'],
      },
      initiatives: {
        en: ['ICCAT and regional quotas that rebuilt the North Atlantic stock', 'Minimum landing size rules'],
        bn: ['আইক্যাট ও আঞ্চলিক কোটা, যার ফলে উত্তর আটলান্টিকের মজুদ পুনরুদ্ধার হয়েছে', 'ধরা মাছের ন্যূনতম আকারের নিয়ম'],
      },
    },
    facts: {
      en: [
        'Swordfish bills have been found stuck in the hulls of wooden ships.',
        'Large swordfish can accumulate mercury, so health agencies advise limiting how much people eat.',
      ],
      bn: [
        'কাঠের জাহাজের খোলে তলোয়ার মাছের ঠোঁট গেঁথে থাকার ঘটনা পাওয়া গেছে।',
        'বড় সোর্ডফিশের দেহে পারদ জমতে পারে, তাই স্বাস্থ্য সংস্থাগুলো এটি পরিমিত খাওয়ার পরামর্শ দেয়।',
      ],
    },
    related: ['atlantic-bluefin-tuna', 'ocean-sunfish', 'great-white-shark'],
  },
  {
    id: 'ocean-sunfish',
    commonName: { en: 'Ocean Sunfish', bn: 'ওশান সানফিশ' },
    scientificName: 'Mola mola',
    altNames: {
      en: ['Mola', 'Common Mola', 'Sunfish'],
      bn: ['মোলা মাছ', 'সূর্যমাছ', 'সানফিশ'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Ocean sunfish',
    description: {
      en: 'The ocean sunfish is one of the heaviest bony fish in the world, with a tall, flattened body that looks like a giant swimming head. It drifts and swims in the open ocean, often basking on its side at the surface to warm up after deep dives. A female can produce hundreds of millions of eggs.',
      bn: 'ওশান সানফিশ পৃথিবীর সবচেয়ে ভারী অস্থিময় মাছগুলোর একটি; উঁচু ও চ্যাপ্টা দেহটি দেখতে যেন সাঁতার কাটা বিশাল একটি মাথা। খোলা মহাসাগরে এরা ভেসে ও সাঁতরে বেড়ায়, আর গভীরে ডুব দেওয়ার পর শরীর গরম করতে প্রায়ই কাত হয়ে পানির ওপরে রোদ পোহায়। একটি স্ত্রী মাছ কোটি কোটি ডিম দিতে পারে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Tetraodontiformes',
      family: 'Molidae',
      genus: 'Mola',
      species: 'M. mola',
    },
    physical: {
      size: { en: 'Average about 1.8 m long and 2.5 m tall fin to fin', bn: 'গড়ে প্রায় ১.৮ মিটার লম্বা এবং পাখনা থেকে পাখনা প্রায় ২.৫ মিটার উঁচু' },
      weight: { en: 'Commonly 250–1,000 kg; record above 2,000 kg', bn: 'সাধারণত ২৫০–১,০০০ কেজি; রেকর্ড ২,০০০ কেজির বেশি' },
      lifespan: { en: 'Probably more than 10 years', bn: 'সম্ভবত ১০ বছরের বেশি' },
      features: {
        en: ['No true tail — a rudder-like clavus instead', 'Tall dorsal and anal fins used like paddles', 'Small beak-like mouth with fused teeth'],
        bn: ['প্রকৃত লেজ নেই — তার বদলে হালের মতো "ক্লেভাস"', 'উঁচু পৃষ্ঠ ও পায়ু পাখনা বৈঠার মতো ব্যবহার করে', 'জোড়া লাগা দাঁতসহ ঠোঁটের মতো ছোট মুখ'],
      },
    },
    habitat: {
      en: 'Open ocean in tropical and temperate seas, from the surface to several hundred metres deep',
      bn: 'ক্রান্তীয় ও নাতিশীতোষ্ণ খোলা মহাসাগর, উপরিভাগ থেকে কয়েকশো মিটার গভীরতা পর্যন্ত',
    },
    habitats: ['ocean'],
    regions: ['oceans', 'europe', 'north-america', 'southeast-asia', 'east-asia', 'oceania'],
    distribution: {
      en: 'Tropical and temperate waters of the Atlantic, Pacific and Indian oceans and the Mediterranean.',
      bn: 'আটলান্টিক, প্রশান্ত ও ভারত মহাসাগর এবং ভূমধ্যসাগরের ক্রান্তীয় ও নাতিশীতোষ্ণ পানি।',
    },
    climate: { en: 'Tropical to temperate oceans', bn: 'ক্রান্তীয় থেকে নাতিশীতোষ্ণ মহাসাগর' },
    diet: {
      en: 'Mainly jellyfish and salps, plus small fish, squid and crustaceans',
      bn: 'মূলত জেলিফিশ ও সাল্প, সেই সঙ্গে ছোট মাছ, স্কুইড ও খোলসযুক্ত প্রাণী',
    },
    ecologicalRole: {
      en: 'Eats large amounts of jellyfish and hosts many parasites that are picked off by cleaner fish and seabirds.',
      bn: 'প্রচুর জেলিফিশ খায় এবং এদের গায়ের পরজীবী পরিষ্কারক মাছ ও সামুদ্রিক পাখির খাবার হয়।',
    },
    behavior: {
      en: 'Usually solitary; dives deep to hunt and basks at the surface, where seabirds clean its skin.',
      bn: 'সাধারণত একাকী; শিকারের জন্য গভীরে ডুব দেয় এবং উপরিভাগে রোদ পোহায়, তখন সামুদ্রিক পাখি এদের চামড়া পরিষ্কার করে দেয়।',
    },
    range: {
      native: [
        [38.0, -125.0],
        [-8.75, 115.45],
        [43.5, -10.0],
        [35.0, -40.0],
        [-38.0, 150.5],
        [33.0, 140.0],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Bycatch in driftnets and longlines', 'Swallowing plastic bags mistaken for jellyfish'],
        bn: ['ভাসমান জাল ও লংলাইনে দুর্ঘটনাবশত ধরা পড়া', 'জেলিফিশ ভেবে প্লাস্টিকের ব্যাগ গিলে ফেলা'],
      },
      initiatives: {
        en: ['Driftnet bans in the EU and elsewhere', 'Reducing marine plastic pollution'],
        bn: ['ইউরোপীয় ইউনিয়নসহ বিভিন্ন স্থানে ভাসমান জাল নিষিদ্ধ', 'সাগরে প্লাস্টিক দূষণ কমানোর উদ্যোগ'],
      },
    },
    facts: {
      en: [
        'A female has been estimated to carry around 300 million eggs — more than any other known vertebrate.',
        'Young sunfish can grow by tens of kilograms in a single year.',
      ],
      bn: [
        'একটি স্ত্রী মাছের দেহে প্রায় ৩০ কোটি ডিম থাকার হিসাব পাওয়া গেছে — জানা অন্য যেকোনো মেরুদণ্ডী প্রাণীর চেয়ে বেশি।',
        'বাচ্চা সানফিশ এক বছরেই কয়েক দশ কেজি পর্যন্ত বাড়তে পারে।',
      ],
    },
    related: ['giant-oceanic-manta-ray', 'swordfish', 'green-sea-turtle'],
  },
  {
    id: 'west-indian-ocean-coelacanth',
    commonName: { en: 'West Indian Ocean Coelacanth', bn: 'সিলাকান্থ' },
    scientificName: 'Latimeria chalumnae',
    altNames: {
      en: ['Coelacanth', 'Living Fossil Fish', 'Gombessa'],
      bn: ['পশ্চিম ভারত মহাসাগরীয় সিলাকান্থ', 'জীবন্ত জীবাশ্ম মাছ', 'গোম্বেসা'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'West Indian Ocean coelacanth',
    description: {
      en: 'The coelacanth is a "living fossil" — a lobe-finned fish from a group thought extinct for 66 million years until one was caught off South Africa in 1938. Its fleshy, limb-like fins make it a close relative of the ancestors of four-legged animals. It lives in deep caves off the Comoros and East Africa.',
      bn: 'সিলাকান্থ একটি "জীবন্ত জীবাশ্ম" — মাংসল পাখনাওয়ালা এই মাছের গোষ্ঠীকে ৬ কোটি ৬০ লাখ বছর আগেই বিলুপ্ত বলে ধরা হতো, যতক্ষণ না ১৯৩৮ সালে দক্ষিণ আফ্রিকার উপকূলে একটি ধরা পড়ে। এর হাত-পায়ের মতো মাংসল পাখনা দেখে বোঝা যায়, চারপেয়ে প্রাণীদের পূর্বপুরুষদের সঙ্গে এর ঘনিষ্ঠ আত্মীয়তা আছে। কোমোরোস ও পূর্ব আফ্রিকার উপকূলে সাগরের গভীর গুহায় এরা বাস করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Sarcopterygii',
      order: 'Coelacanthiformes',
      family: 'Latimeriidae',
      genus: 'Latimeria',
      species: 'L. chalumnae',
    },
    physical: {
      size: { en: 'Up to about 2 m long', bn: 'সর্বোচ্চ প্রায় ২ মিটার লম্বা' },
      weight: { en: 'Up to about 90 kg', bn: 'সর্বোচ্চ প্রায় ৯০ কেজি' },
      lifespan: { en: 'Possibly up to about 100 years', bn: 'সম্ভবত প্রায় ১০০ বছর পর্যন্ত' },
      features: {
        en: ['Fleshy lobed fins that move in a pattern like walking limbs', 'Dark steel-blue body with pale white flecks', 'Unique three-lobed tail and an oil-filled notochord instead of a full backbone'],
        bn: ['মাংসল খণ্ডযুক্ত পাখনা, যা হাঁটার মতো ছন্দে নড়ে', 'গাঢ় ইস্পাত-নীল দেহে সাদাটে ছিটছিটে দাগ', 'তিন ভাগে বিভক্ত অনন্য লেজ; পূর্ণ মেরুদণ্ডের বদলে তেলভরা নোটোকর্ড'],
      },
    },
    habitat: {
      en: 'Steep rocky slopes and underwater caves at about 150–250 m depth',
      bn: 'প্রায় ১৫০–২৫০ মিটার গভীরে খাড়া পাথুরে ঢাল ও সাগরতলের গুহা',
    },
    habitats: ['ocean'],
    regions: ['africa', 'oceans'],
    distribution: {
      en: 'Western Indian Ocean — mainly the Comoros, with smaller populations off South Africa, Mozambique, Madagascar, Tanzania and Kenya.',
      bn: 'পশ্চিম ভারত মহাসাগর — মূলত কোমোরোস দ্বীপপুঞ্জ; দক্ষিণ আফ্রিকা, মোজাম্বিক, মাদাগাস্কার, তানজানিয়া ও কেনিয়ার উপকূলে ছোট ছোট জনগোষ্ঠী আছে।',
    },
    climate: { en: 'Cool, stable deep waters of a tropical ocean', bn: 'ক্রান্তীয় মহাসাগরের শীতল ও স্থিতিশীল গভীর পানি' },
    diet: {
      en: 'Carnivore — deep-water fish, squid and cuttlefish, caught by drifting ambush',
      bn: 'মাংসাশী — গভীর পানির মাছ, স্কুইড ও কাটলফিশ; ধীরে ভেসে ওত পেতে শিকার ধরে',
    },
    ecologicalRole: {
      en: 'A slow-living deep-reef predator and a unique evolutionary link that helps scientists understand how fish moved onto land.',
      bn: 'ধীরগতির জীবনযাপনকারী গভীর প্রাচীরের শিকারি; মাছ কীভাবে ডাঙায় উঠে এল তা বুঝতে বিজ্ঞানীদের কাছে এটি এক অনন্য বিবর্তনীয় যোগসূত্র।',
    },
    behavior: {
      en: 'Rests in caves by day in small groups and drifts out alone at night to hunt; gives birth to live young.',
      bn: 'দিনে ছোট দলে গুহায় বিশ্রাম নেয় এবং রাতে একা ভেসে বেরিয়ে শিকার করে; জীবন্ত বাচ্চা প্রসব করে।',
    },
    range: {
      native: [
        [-11.7, 43.2],
        [-27.5, 32.75],
        [-23.5, 43.5],
        [-5.1, 39.3],
      ],
    },
    conservation: {
      status: 'CR',
      trend: 'unknown',
      threats: {
        en: ['Accidental capture by deep-set fishing lines and shark gillnets', 'Very slow reproduction and small population'],
        bn: ['গভীরে ফেলা বড়শি ও হাঙর-জালে দুর্ঘটনাবশত ধরা পড়া', 'অত্যন্ত ধীর প্রজনন ও ছোট জনসংখ্যা'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix I', 'Coelacanth Conservation Council and marine protected areas in the Comoros and Tanzania'],
        bn: ['সাইটিসের পরিশিষ্ট-১ তালিকাভুক্ত', 'সিলাকান্থ সংরক্ষণ পরিষদ এবং কোমোরোস ও তানজানিয়ায় সামুদ্রিক সংরক্ষিত এলাকা'],
      },
      assessed: '2000',
    },
    facts: {
      en: [
        'It was discovered by museum curator Marjorie Courtenay-Latimer, after whom the genus Latimeria is named.',
        'Pregnancy may last about five years — among the longest of any animal.',
      ],
      bn: [
        'জাদুঘর কিউরেটর মার্জোরি কোর্টনি-ল্যাটিমার এটি শনাক্ত করেন; তাঁর নামেই এর গণের নাম Latimeria।',
        'এদের গর্ভকাল প্রায় ৫ বছর হতে পারে — প্রাণিজগতে সবচেয়ে দীর্ঘগুলোর একটি।',
      ],
    },
    related: ['axolotl', 'chinese-giant-salamander', 'largetooth-sawfish'],
  },
  {
    id: 'red-lionfish',
    commonName: { en: 'Red Lionfish', bn: 'লায়নফিশ' },
    scientificName: 'Pterois volitans',
    altNames: {
      en: ['Lionfish', 'Turkeyfish', 'Firefish'],
      bn: ['সিংহ মাছ', 'লাল লায়নফিশ', 'বিষাক্ত লায়নফিশ'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Red lionfish',
    description: {
      en: 'The red lionfish is a strikingly striped reef fish with long, feathery fins and venomous spines. Native to the western Pacific, it was introduced to the western Atlantic in the 1980s, probably from aquariums, and has become one of the most damaging invasive marine species. Its sting is very painful but rarely deadly to people.',
      bn: 'লাল লায়নফিশ ডোরাকাটা, পালকের মতো লম্বা পাখনা ও বিষাক্ত কাঁটাযুক্ত দৃষ্টিনন্দন প্রবাল প্রাচীরের মাছ। আদি নিবাস পশ্চিম প্রশান্ত মহাসাগর হলেও ১৯৮০-র দশকে সম্ভবত অ্যাকুরিয়াম থেকে এরা পশ্চিম আটলান্টিকে ছড়িয়ে পড়ে এবং সবচেয়ে ক্ষতিকর আগ্রাসী সামুদ্রিক প্রজাতিগুলোর একটিতে পরিণত হয়। সতর্কতা: এর কাঁটার হুল অত্যন্ত যন্ত্রণাদায়ক, যদিও মানুষের জন্য খুব কমই প্রাণঘাতী।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Scorpaeniformes',
      family: 'Scorpaenidae',
      genus: 'Pterois',
      species: 'P. volitans',
    },
    physical: {
      size: { en: 'Up to about 38–47 cm', bn: 'সর্বোচ্চ প্রায় ৩৮–৪৭ সেমি' },
      weight: { en: 'Up to about 1.2 kg', bn: 'সর্বোচ্চ প্রায় ১.২ কেজি' },
      lifespan: { en: 'About 10–15 years', bn: 'প্রায় ১০–১৫ বছর' },
      features: {
        en: ['Red-brown and white vertical stripes', 'Fan-like pectoral fins and 13 venomous dorsal spines', 'Fleshy tentacles above the eyes'],
        bn: ['লালচে-বাদামি ও সাদা খাড়া ডোরা', 'পাখার মতো ছড়ানো বক্ষপাখনা ও পিঠে ১৩টি বিষাক্ত কাঁটা', 'চোখের ওপরে মাংসল শুঁড়'],
      },
    },
    habitat: {
      en: 'Coral reefs, rocky outcrops, lagoons and seagrass, mostly in shallow warm water',
      bn: 'প্রবাল প্রাচীর, পাথুরে স্তূপ, উপহ্রদ ও সামুদ্রিক ঘাসবন, মূলত অগভীর উষ্ণ পানিতে',
    },
    habitats: ['coral-reef', 'ocean'],
    regions: ['southeast-asia', 'east-asia', 'oceania', 'north-america', 'south-america', 'oceans'],
    distribution: {
      en: 'Native to the western and central Pacific; invasive along the US Atlantic coast, the Caribbean and the Gulf of Mexico.',
      bn: 'আদি নিবাস পশ্চিম ও মধ্য প্রশান্ত মহাসাগর; যুক্তরাষ্ট্রের আটলান্টিক উপকূল, ক্যারিবিয়ান ও মেক্সিকো উপসাগরে আগ্রাসী প্রজাতি।',
    },
    climate: { en: 'Tropical and subtropical seas', bn: 'ক্রান্তীয় ও উপক্রান্তীয় সাগর' },
    diet: {
      en: 'Carnivore — small reef fish, shrimps and crabs, often herded into corners with spread fins',
      bn: 'মাংসাশী — প্রবাল প্রাচীরের ছোট মাছ, চিংড়ি ও কাঁকড়া; পাখনা মেলে শিকারকে কোণঠাসা করে ধরে',
    },
    ecologicalRole: {
      en: 'A predator in its native range; in the Atlantic it eats huge numbers of native reef fish that have no defence against it.',
      bn: 'আদি নিবাসে সাধারণ শিকারি; কিন্তু আটলান্টিকে এরা বিপুল সংখ্যক স্থানীয় প্রবাল-মাছ খেয়ে ফেলে, যাদের এদের বিরুদ্ধে কোনো আত্মরক্ষার কৌশল নেই।',
    },
    behavior: {
      en: 'Hovers slowly by day and hunts mostly at dusk; females spawn every few days all year.',
      bn: 'দিনে ধীরে ভেসে থাকে এবং মূলত সন্ধ্যায় শিকার করে; স্ত্রী মাছ সারা বছর কয়েক দিন পরপর ডিম ছাড়ে।',
    },
    range: {
      native: [
        [-8.5, 119.5],
        [10.5, 123.5],
        [-18.0, 147.5],
        [26.5, 127.5],
        [-6.0, 130.0],
      ],
      introduced: [
        [25.0, -77.6],
        [17.6, -77.0],
        [32.2, -64.6],
        [24.5, -81.5],
        [25.0, -90.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Coral reef degradation in its native range', 'Collection for the aquarium trade'],
        bn: ['আদি নিবাসে প্রবাল প্রাচীরের অবক্ষয়', 'অ্যাকুরিয়াম ব্যবসার জন্য সংগ্রহ'],
      },
      initiatives: {
        en: ['Lionfish derbies and culling programmes in the Caribbean', 'Promoting lionfish as seafood to control the invasion'],
        bn: ['ক্যারিবিয়ানে লায়নফিশ শিকার প্রতিযোগিতা ও নিধন কর্মসূচি', 'আগ্রাসন ঠেকাতে লায়নফিশকে খাবার হিসেবে জনপ্রিয় করা'],
      },
    },
    facts: {
      en: [
        'A single female can release about 2 million eggs a year.',
        'Once the venomous spines are removed, the meat is safe and tasty to eat.',
      ],
      bn: [
        'একটি স্ত্রী লায়নফিশ বছরে প্রায় ২০ লাখ ডিম ছাড়তে পারে।',
        'বিষাক্ত কাঁটাগুলো সাবধানে ফেলে দিলে এর মাংস নিরাপদ ও সুস্বাদু।',
      ],
    },
    related: ['humphead-wrasse', 'spotted-seahorse', 'staghorn-coral', 'ocellaris-clownfish'],
  },
  {
    id: 'humphead-wrasse',
    commonName: { en: 'Humphead Wrasse', bn: 'নেপোলিয়ন র‍্যাস' },
    scientificName: 'Cheilinus undulatus',
    altNames: {
      en: ['Napoleon Wrasse', 'Napoleonfish', 'Maori Wrasse'],
      bn: ['হাম্পহেড র‍্যাস', 'নেপোলিয়ন মাছ', 'কুঁজোমাথা র‍্যাস'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Humphead wrasse',
    description: {
      en: 'The humphead wrasse is a huge, thick-lipped reef fish with a bulging forehead hump, often compared to Napoleon’s hat. It is one of the few predators that eats toxic animals such as crown-of-thorns starfish and boxfish. Slow-growing and long-lived, it has been heavily overfished for the live reef-fish restaurant trade.',
      bn: 'নেপোলিয়ন র‍্যাস বিশাল আকারের, মোটা ঠোঁটওয়ালা প্রবাল প্রাচীরের মাছ; কপালের উঁচু কুঁজটিকে প্রায়ই নেপোলিয়নের টুপির সঙ্গে তুলনা করা হয়। ক্রাউন-অব-থর্নস তারামাছ ও বক্সফিশের মতো বিষাক্ত প্রাণী খেতে পারে এমন অল্প কয়েকটি শিকারির একটি এটি। ধীরে বাড়ে ও দীর্ঘজীবী হওয়ায় রেস্তোরাঁয় জীবন্ত মাছ বিক্রির ব্যবসার জন্য অতিরিক্ত আহরণে এরা মারাত্মক ক্ষতিগ্রস্ত।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Labriformes',
      family: 'Labridae',
      genus: 'Cheilinus',
      species: 'C. undulatus',
    },
    physical: {
      size: { en: 'Males up to about 2 m; females rarely over 1 m', bn: 'পুরুষ প্রায় ২ মিটার পর্যন্ত; স্ত্রী কদাচিৎ ১ মিটারের বেশি' },
      weight: { en: 'Up to about 190 kg', bn: 'সর্বোচ্চ প্রায় ১৯০ কেজি' },
      lifespan: { en: 'About 30 years or more', bn: 'প্রায় ৩০ বছর বা তারও বেশি' },
      features: {
        en: ['Prominent hump on the forehead of large adults', 'Thick, fleshy lips', 'Blue-green body with intricate wavy markings around the eyes'],
        bn: ['বড় প্রাপ্তবয়স্কদের কপালে উঁচু কুঁজ', 'মোটা, মাংসল ঠোঁট', 'নীলচে-সবুজ দেহ; চোখের চারপাশে সূক্ষ্ম ঢেউখেলানো নকশা'],
      },
    },
    habitat: {
      en: 'Outer slopes and channels of coral reefs and lagoons, down to about 100 m',
      bn: 'প্রবাল প্রাচীরের বাইরের ঢাল, খাঁড়ি ও উপহ্রদ, প্রায় ১০০ মিটার গভীরতা পর্যন্ত',
    },
    habitats: ['coral-reef'],
    regions: ['southeast-asia', 'oceania', 'africa', 'south-asia', 'oceans'],
    distribution: {
      en: 'Indo-Pacific coral reefs from the Red Sea and East Africa to the central Pacific, including the Maldives and the Great Barrier Reef.',
      bn: 'লোহিত সাগর ও পূর্ব আফ্রিকা থেকে মধ্য প্রশান্ত মহাসাগর পর্যন্ত ভারত-প্রশান্ত মহাসাগরীয় প্রবাল প্রাচীর, মালদ্বীপ ও গ্রেট ব্যারিয়ার রিফসহ।',
    },
    climate: { en: 'Tropical seas', bn: 'ক্রান্তীয় সাগর' },
    diet: {
      en: 'Molluscs, crabs, sea urchins, fish and toxic prey such as crown-of-thorns starfish and boxfish',
      bn: 'শামুক-ঝিনুক, কাঁকড়া, সামুদ্রিক আর্চিন, মাছ এবং ক্রাউন-অব-থর্নস তারামাছ ও বক্সফিশের মতো বিষাক্ত শিকার',
    },
    ecologicalRole: {
      en: 'Helps protect coral by eating crown-of-thorns starfish, which can destroy large areas of reef.',
      bn: 'প্রবাল-খেকো ক্রাউন-অব-থর্নস তারামাছ খেয়ে প্রবাল প্রাচীরকে বড় ধরনের ক্ষতি থেকে রক্ষা করে।',
    },
    behavior: {
      en: 'Active by day and shelters in caves at night; many females change into males later in life.',
      bn: 'দিনে সক্রিয় থাকে এবং রাতে গুহায় আশ্রয় নেয়; অনেক স্ত্রী মাছ পরিণত বয়সে পুরুষে রূপান্তরিত হয়।',
    },
    range: {
      native: [
        [-16.5, 146.0],
        [27.0, 34.2],
        [7.3, 134.2],
        [-8.6, 119.5],
        [4.0, 73.5],
        [-17.5, 179.0],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Overfishing for the live reef-fish food trade', 'Destructive fishing with cyanide', 'Coral reef degradation'],
        bn: ['জীবন্ত প্রবাল-মাছ খাদ্য-বাণিজ্যের জন্য অতিরিক্ত আহরণ', 'সায়ানাইড দিয়ে ধ্বংসাত্মক মাছ শিকার', 'প্রবাল প্রাচীরের অবক্ষয়'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II', 'Fishing bans and marine reserves in Australia, Palau and Indonesia'],
        bn: ['সাইটিসের পরিশিষ্ট-২ তালিকাভুক্ত', 'অস্ট্রেলিয়া, পালাউ ও ইন্দোনেশিয়ায় শিকার নিষেধাজ্ঞা ও সামুদ্রিক সংরক্ষিত এলাকা'],
      },
      assessed: '2004',
    },
    facts: {
      en: [
        'It is one of the largest reef fish in the world.',
        'Divers often find individual wrasses curious and friendly, returning to the same reef for years.',
      ],
      bn: [
        'এটি পৃথিবীর সবচেয়ে বড় প্রবাল-মাছগুলোর একটি।',
        'ডুবুরিরা প্রায়ই এদের কৌতূহলী ও বন্ধুসুলভ পান; একই মাছ বছরের পর বছর একই প্রাচীরে থাকে।',
      ],
    },
    related: ['red-lionfish', 'spotted-seahorse', 'staghorn-coral', 'ocellaris-clownfish'],
  },
  {
    id: 'european-eel',
    commonName: { en: 'European Eel', bn: 'ইউরোপীয় ইল' },
    scientificName: 'Anguilla anguilla',
    altNames: {
      en: ['Eel', 'Glass Eel', 'Elver'],
      bn: ['ইল মাছ', 'কাচ-ইল', 'বাচ্চা ইল'],
    },
    category: 'fish',
    secondaryCategories: ['marine', 'freshwater'],
    wikiTitle: 'European eel',
    description: {
      en: 'The European eel is a snake-like fish with one of the most mysterious life cycles in nature. It is born in the Sargasso Sea, drifts as a transparent larva across the Atlantic, grows for decades in European rivers and lakes, and then swims back thousands of kilometres to spawn once and die. Its numbers have collapsed by more than 90% since the 1980s.',
      bn: 'ইউরোপীয় ইল সাপের মতো লম্বা মাছ, যার জীবনচক্র প্রকৃতির সবচেয়ে রহস্যময়গুলোর একটি। সারগাসো সাগরে জন্ম নিয়ে স্বচ্ছ লার্ভা হিসেবে আটলান্টিক পাড়ি দেয়, ইউরোপের নদী ও হ্রদে কয়েক দশক ধরে বড় হয়, তারপর হাজার হাজার কিলোমিটার সাঁতরে ফিরে গিয়ে একবার ডিম পেড়ে মারা যায়। ১৯৮০-র দশকের পর থেকে এদের সংখ্যা ৯০ শতাংশেরও বেশি কমে গেছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Anguilliformes',
      family: 'Anguillidae',
      genus: 'Anguilla',
      species: 'A. anguilla',
    },
    physical: {
      size: { en: 'Usually 60–80 cm; females up to about 1.3 m', bn: 'সাধারণত ৬০–৮০ সেমি; স্ত্রী ইল প্রায় ১.৩ মিটার পর্যন্ত' },
      weight: { en: 'Usually under 2 kg; rarely up to 6 kg', bn: 'সাধারণত ২ কেজির কম; কদাচিৎ ৬ কেজি পর্যন্ত' },
      lifespan: { en: 'Typically 5–20 years in the wild; can exceed 80 years in captivity', bn: 'প্রকৃতিতে সাধারণত ৫–২০ বছর; আবদ্ধ অবস্থায় ৮০ বছরেরও বেশি' },
      features: {
        en: ['Long snake-like body with slimy skin and tiny embedded scales', 'Dorsal, tail and anal fins joined in one continuous fin', 'Turns from yellow-brown to silver before migrating to sea'],
        bn: ['পিচ্ছিল চামড়া ও চামড়ায় ঢাকা খুদে আঁশসহ সাপের মতো লম্বা দেহ', 'পৃষ্ঠ, লেজ ও পায়ু পাখনা জুড়ে একটানা একটি পাখনা', 'সাগরে যাত্রার আগে হলদে-বাদামি থেকে রুপালি রং ধারণ করে'],
      },
    },
    habitat: {
      en: 'Rivers, lakes, estuaries and coastal lagoons; spawns in the open ocean',
      bn: 'নদী, হ্রদ, মোহনা ও উপকূলীয় উপহ্রদ; ডিম পাড়ে খোলা মহাসাগরে',
    },
    habitats: ['rivers-lakes', 'wetland', 'ocean'],
    regions: ['europe', 'africa', 'oceans'],
    distribution: {
      en: 'Fresh and coastal waters of Europe and North Africa from Norway to Morocco and the Mediterranean; spawns in the Sargasso Sea.',
      bn: 'নরওয়ে থেকে মরক্কো ও ভূমধ্যসাগর পর্যন্ত ইউরোপ ও উত্তর আফ্রিকার মিঠা ও উপকূলীয় পানি; ডিম পাড়ে সারগাসো সাগরে।',
    },
    climate: { en: 'Temperate waters; subtropical ocean for spawning', bn: 'নাতিশীতোষ্ণ পানি; প্রজননের জন্য উপক্রান্তীয় মহাসাগর' },
    diet: {
      en: 'Carnivore and scavenger — insect larvae, worms, snails, crustaceans and small fish',
      bn: 'মাংসাশী ও মৃতভোজী — পোকার লার্ভা, কেঁচো-জাতীয় প্রাণী, শামুক, খোলসযুক্ত প্রাণী ও ছোট মাছ',
    },
    ecologicalRole: {
      en: 'An important predator and prey in rivers, and a key link carrying energy between freshwater and the ocean.',
      bn: 'নদীর গুরুত্বপূর্ণ শিকারি ও শিকার, এবং মিঠাপানি ও মহাসাগরের মধ্যে শক্তি বহনকারী মূল যোগসূত্র।',
    },
    behavior: {
      en: 'Catadromous and nocturnal; can wriggle short distances over wet land to reach new waters.',
      bn: 'ক্যাটাড্রোমাস ও নিশাচর; ভেজা মাটির ওপর দিয়ে অল্প দূরত্ব এঁকেবেঁকে পার হয়ে নতুন জলাশয়ে যেতে পারে।',
    },
    range: {
      native: [
        [26.0, -60.0],
        [52.0, -10.5],
        [53.5, 8.5],
        [44.5, 13.0],
        [38.0, -9.6],
        [57.0, 20.0],
      ],
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      threats: {
        en: ['Dams and hydropower turbines blocking and killing migrating eels', 'Illegal trafficking of glass eels to Asia', 'Parasites, pollution and changing ocean currents'],
        bn: ['বাঁধ ও জলবিদ্যুৎ টারবাইনে চলাচল বাধাগ্রস্ত হওয়া ও মৃত্যু', 'এশিয়ায় কাচ-ইলের অবৈধ পাচার', 'পরজীবী, দূষণ ও সমুদ্রস্রোতের পরিবর্তন'],
      },
      initiatives: {
        en: ['EU Eel Regulation requiring national eel management plans', 'Listed on CITES Appendix II with an EU export ban'],
        bn: ['জাতীয় ইল ব্যবস্থাপনা পরিকল্পনা বাধ্যতামূলক করা ইউরোপীয় ইউনিয়নের ইল বিধিমালা', 'সাইটিসের পরিশিষ্ট-২ তালিকাভুক্ত এবং ইউরোপ থেকে রপ্তানি নিষিদ্ধ'],
      },
    },
    facts: {
      en: [
        'No one has ever observed European eels spawning in the wild.',
        'The journey back to the Sargasso Sea can be over 5,000 km.',
      ],
      bn: [
        'প্রকৃতিতে ইউরোপীয় ইলকে ডিম পাড়তে আজ পর্যন্ত কেউ চোখে দেখেনি।',
        'সারগাসো সাগরে ফেরার যাত্রাপথ ৫,০০০ কিলোমিটারেরও বেশি হতে পারে।',
      ],
    },
    related: ['atlantic-salmon', 'atlantic-cod', 'largetooth-sawfish'],
  },
  {
    id: 'atlantic-cod',
    commonName: { en: 'Atlantic Cod', bn: 'আটলান্টিক কড' },
    scientificName: 'Gadus morhua',
    altNames: {
      en: ['Cod', 'Codling'],
      bn: ['কড মাছ', 'কড'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Atlantic cod',
    description: {
      en: 'The Atlantic cod is a large bottom-dwelling fish of the cold North Atlantic that fed and enriched European and North American nations for centuries. Overfishing caused the famous collapse of the Grand Banks cod fishery off Newfoundland in 1992, putting tens of thousands of people out of work. Its liver produces cod liver oil, a traditional vitamin supplement.',
      bn: 'আটলান্টিক কড শীতল উত্তর আটলান্টিকের তলদেশবাসী বড় মাছ, যা শত শত বছর ধরে ইউরোপ ও উত্তর আমেরিকার মানুষের খাদ্য ও সমৃদ্ধির উৎস ছিল। অতিরিক্ত আহরণের ফলে ১৯৯২ সালে কানাডার নিউফাউন্ডল্যান্ডের গ্র্যান্ড ব্যাংকসে কড মৎস্যক্ষেত্র ভেঙে পড়ে এবং হাজার হাজার মানুষ কাজ হারায়। এর কলিজা থেকে কড লিভার অয়েল তৈরি হয়, যা ঐতিহ্যগতভাবে ভিটামিনের সম্পূরক হিসেবে খাওয়া হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Gadiformes',
      family: 'Gadidae',
      genus: 'Gadus',
      species: 'G. morhua',
    },
    physical: {
      size: { en: 'Commonly 50–100 cm; historically up to about 2 m', bn: 'সাধারণত ৫০–১০০ সেমি; অতীতে প্রায় ২ মিটার পর্যন্ত' },
      weight: { en: 'Usually 5–12 kg; record fish near 100 kg', bn: 'সাধারণত ৫–১২ কেজি; রেকর্ড মাছ প্রায় ১০০ কেজি' },
      lifespan: { en: 'Up to about 25 years', bn: 'প্রায় ২৫ বছর পর্যন্ত' },
      features: {
        en: ['Single whisker-like barbel on the chin', 'Three dorsal fins and two anal fins', 'Speckled greenish-brown body with a pale lateral line'],
        bn: ['থুতনিতে গোঁফের মতো একটি শুঁড়', 'তিনটি পৃষ্ঠপাখনা ও দুটি পায়ু পাখনা', 'ছিটছিটে সবুজাভ-বাদামি দেহে হালকা রঙের পার্শ্বরেখা'],
      },
    },
    habitat: {
      en: 'Cold continental shelves and banks, usually near the bottom down to about 600 m',
      bn: 'শীতল মহীসোপান ও সাগরতলের চর, সাধারণত তলদেশের কাছে প্রায় ৬০০ মিটার গভীরতা পর্যন্ত',
    },
    habitats: ['ocean'],
    regions: ['europe', 'north-america', 'oceans'],
    distribution: {
      en: 'North Atlantic from North Carolina and the Grand Banks to Greenland, Iceland, the North Sea, the Baltic and the Barents Sea.',
      bn: 'উত্তর ক্যারোলাইনা ও গ্র্যান্ড ব্যাংকস থেকে গ্রিনল্যান্ড, আইসল্যান্ড, উত্তর সাগর, বাল্টিক সাগর ও ব্যারেন্টস সাগর পর্যন্ত উত্তর আটলান্টিক।',
    },
    climate: { en: 'Cold temperate to subarctic seas', bn: 'শীতল নাতিশীতোষ্ণ থেকে উপমেরু অঞ্চলের সাগর' },
    diet: {
      en: 'Omnivorous predator — fish such as capelin and herring, crabs, shrimps, worms and molluscs',
      bn: 'সর্বভুক শিকারি — ক্যাপেলিন ও হেরিংয়ের মতো মাছ, কাঁকড়া, চিংড়ি, কৃমি-জাতীয় প্রাণী ও শামুক-ঝিনুক',
    },
    ecologicalRole: {
      en: 'Once the dominant predator of North Atlantic shelves; its collapse triggered major shifts in the food web.',
      bn: 'একসময় উত্তর আটলান্টিক মহীসোপানের প্রধান শিকারি ছিল; এদের পতনে খাদ্যশৃঙ্খলে বড় ধরনের পরিবর্তন ঘটে।',
    },
    behavior: {
      en: 'Forms schools and migrates seasonally to spawning grounds, where females release millions of eggs.',
      bn: 'ঝাঁক বাঁধে এবং ঋতুভেদে প্রজননক্ষেত্রে যায়, যেখানে স্ত্রী মাছ লাখ লাখ ডিম ছাড়ে।',
    },
    range: {
      native: [
        [64.0, -26.0],
        [71.0, 25.0],
        [56.0, 3.0],
        [44.5, -50.0],
        [41.8, -67.5],
        [55.5, 17.0],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'unknown',
      threats: {
        en: ['Historic and continuing overfishing', 'Bottom trawling that damages seabed habitat', 'Ocean warming, especially in the Baltic and Gulf of Maine'],
        bn: ['অতীত ও চলমান অতিরিক্ত আহরণ', 'তলদেশ-ঘষা ট্রলিংয়ে সমুদ্রতলের আবাসস্থল ধ্বংস', 'সাগরের উষ্ণায়ন, বিশেষ করে বাল্টিক ও মেইন উপসাগরে'],
      },
      initiatives: {
        en: ['Canada’s 1992 cod fishing moratorium', 'Science-based quotas in Norway and Iceland'],
        bn: ['১৯৯২ সালে কানাডার কড আহরণে স্থগিতাদেশ', 'নরওয়ে ও আইসল্যান্ডে বিজ্ঞানভিত্তিক আহরণ-কোটা'],
      },
      assessed: '1996',
    },
    facts: {
      en: [
        'A large female cod can release several million eggs in a season.',
        'Iceland and Britain fought the "Cod Wars" over fishing rights in the 1950s–1970s.',
      ],
      bn: [
        'একটি বড় স্ত্রী কড এক মৌসুমে কয়েক মিলিয়ন (কয়েক দশ লাখ) ডিম ছাড়তে পারে।',
        '১৯৫০ থেকে ১৯৭০-এর দশকে মাছ ধরার অধিকার নিয়ে আইসল্যান্ড ও ব্রিটেনের মধ্যে "কড যুদ্ধ" হয়েছিল।',
      ],
    },
    related: ['atlantic-salmon', 'atlantic-bluefin-tuna', 'european-eel'],
  },
];
