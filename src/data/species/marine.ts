import type { Species } from '@/types';

export const marine: Species[] = [
  {
    id: 'blue-whale',
    commonName: { en: 'Blue Whale', bn: 'নীল তিমি' },
    scientificName: 'Balaenoptera musculus',
    altNames: {
      en: ['Sulphur-bottom Whale', 'Great Blue Whale', 'Pygmy Blue Whale'],
      bn: ['তিমি', 'বিশাল নীল তিমি', 'বামন নীল তিমি'],
    },
    synonyms: ['Balaena musculus', 'Sibbaldus musculus'],
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Blue whale',
    description: {
      en: 'The blue whale is the largest animal known ever to have lived — larger than any dinosaur. Despite its size it feeds almost entirely on krill, tiny shrimp-like animals, which it gulps in huge mouthfuls and strains through baleen plates. Industrial whaling in the 20th century killed hundreds of thousands and pushed it close to extinction; since full protection in 1966 numbers have slowly begun to recover.',
      bn: 'নীল তিমি এ পর্যন্ত জানা পৃথিবীর সবচেয়ে বড় প্রাণী — যেকোনো ডাইনোসরের চেয়েও বড়। বিশাল দেহ হলেও এদের খাবার মূলত ক্রিল, অর্থাৎ চিংড়ির মতো ক্ষুদ্র প্রাণী। বিরাট হাঁ করে পানিসহ ক্রিল মুখে নেয়, তারপর মুখের বেলিন-পাত দিয়ে ছেঁকে খায়। বিংশ শতাব্দীর বাণিজ্যিক তিমি শিকারে লাখ লাখ নীল তিমি মারা পড়ে এবং প্রজাতিটি বিলুপ্তির দ্বারপ্রান্তে চলে যায়; ১৯৬৬ সালে পূর্ণ সুরক্ষা দেওয়ার পর থেকে এদের সংখ্যা ধীরে ধীরে বাড়ছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Balaenopteridae',
      genus: 'Balaenoptera',
      species: 'B. musculus',
    },
    physical: {
      size: {
        en: 'Usually 24–30 m long; the longest reliably measured was about 30 m (Antarctic females are largest)',
        bn: 'সাধারণত ২৪–৩০ মিটার লম্বা; নির্ভরযোগ্যভাবে মাপা সবচেয়ে লম্বাটি ছিল প্রায় ৩০ মিটার (অ্যান্টার্কটিকার স্ত্রী তিমি সবচেয়ে বড়)',
      },
      weight: {
        en: 'Typically 100–150 tonnes; the heaviest recorded individuals approached 170–190 tonnes',
        bn: 'সাধারণত ১০০–১৫০ টন; রেকর্ডকৃত সবচেয়ে ভারী তিমির ওজন ছিল প্রায় ১৭০–১৯০ টন',
      },
      lifespan: {
        en: 'About 80–90 years; some may live longer',
        bn: 'প্রায় ৮০–৯০ বছর; কেউ কেউ আরও বেশি দিন বাঁচতে পারে',
      },
      features: {
        en: [
          'Long, streamlined blue-grey body mottled with lighter spots',
          'Broad, flat U-shaped head with a single ridge and twin blowholes',
          'Tiny dorsal fin set far back on the body',
          'Up to about 90 throat grooves that expand like a balloon when feeding',
        ],
        bn: [
          'হালকা ছোপযুক্ত লম্বা, সুগঠিত নীলচে-ধূসর দেহ',
          'চওড়া, চ্যাপ্টা ইউ-আকৃতির মাথা; মাথায় একটি শিরা ও জোড়া নিঃশ্বাস-ছিদ্র',
          'শরীরের অনেক পেছনে ছোট্ট পিঠের পাখনা',
          'গলায় প্রায় ৯০টি পর্যন্ত খাঁজ, খাওয়ার সময় যা বেলুনের মতো ফুলে ওঠে',
        ],
      },
    },
    habitat: {
      en: 'Open ocean and continental shelf edges, from polar feeding grounds to warmer tropical waters',
      bn: 'খোলা সমুদ্র ও মহীসোপানের কিনারা — মেরু অঞ্চলের খাদ্যক্ষেত্র থেকে উষ্ণ ক্রান্তীয় জলরাশি পর্যন্ত',
    },
    habitats: ['ocean', 'polar'],
    regions: ['oceans', 'polar'],
    distribution: {
      en: 'Found in all oceans except the Arctic Ocean interior. Populations include Antarctic, North Atlantic, North Pacific and northern Indian Ocean whales, plus pygmy blue whales around Sri Lanka, Australia and the southern Indian Ocean.',
      bn: 'উত্তর মেরু মহাসাগরের অভ্যন্তর ছাড়া সব মহাসাগরে পাওয়া যায়। অ্যান্টার্কটিক, উত্তর আটলান্টিক, উত্তর প্রশান্ত ও উত্তর ভারত মহাসাগরে আলাদা জনগোষ্ঠী রয়েছে; এ ছাড়া শ্রীলঙ্কা, অস্ট্রেলিয়া ও দক্ষিণ ভারত মহাসাগরে বামন নীল তিমি দেখা যায়।',
    },
    climate: {
      en: 'Cold polar and temperate seas for feeding; warmer tropical waters for breeding in winter',
      bn: 'খাবার সংগ্রহের জন্য শীতল মেরু ও নাতিশীতোষ্ণ সমুদ্র; শীতে প্রজননের জন্য উষ্ণ ক্রান্তীয় জলরাশি',
    },
    diet: {
      en: 'Filter feeder — almost exclusively krill; it can eat several tonnes a day during peak feeding season',
      bn: 'ছাঁকনি-ভোজী — প্রায় শুধুই ক্রিল খায়; খাদ্য মৌসুমের চরম সময়ে দিনে কয়েক টন পর্যন্ত খেতে পারে',
    },
    ecologicalRole: {
      en: 'By feeding at depth and releasing iron-rich faeces near the surface, blue whales fertilise plankton growth, which supports the whole ocean food web and helps the ocean absorb carbon.',
      bn: 'গভীরে খাবার খেয়ে পানির উপরিভাগে লৌহসমৃদ্ধ মল ত্যাগ করে নীল তিমি প্ল্যাংকটনের বৃদ্ধিতে সার জোগায় — এতে পুরো সামুদ্রিক খাদ্যশৃঙ্খল টিকে থাকে এবং সমুদ্রের কার্বন শোষণক্ষমতা বাড়ে।',
    },
    behavior: {
      en: 'Usually travels alone or in pairs. Migrates long distances between feeding and breeding areas. Makes very loud, low-frequency calls that can travel hundreds of kilometres underwater; dives typically last 10–20 minutes.',
      bn: 'সাধারণত একা বা জোড়ায় চলে। খাদ্যক্ষেত্র ও প্রজননক্ষেত্রের মধ্যে দীর্ঘ পথ পাড়ি দেয়। এদের অত্যন্ত জোরালো, নিম্ন-কম্পাঙ্কের ডাক পানির নিচে শত শত কিলোমিটার দূরে পৌঁছায়; একেকটি ডুব সাধারণত ১০–২০ মিনিট স্থায়ী হয়।',
    },
    range: {
      native: [
        [-62.0, -30.0],
        [-65.0, 80.0],
        [34.5, -121.5],
        [65.0, -25.0],
        [5.8, 80.5],
        [-38.5, 141.5],
        [-44.0, -75.5],
        [10.0, 60.0],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'increasing',
      population: {
        en: 'Roughly 5,000–15,000 mature individuals worldwide (IUCN 2018)',
        bn: 'বিশ্বব্যাপী আনুমানিক ৫,০০০–১৫,০০০টি প্রাপ্তবয়স্ক তিমি (আইইউসিএন ২০১৮)',
      },
      threats: {
        en: ['Collisions with ships', 'Entanglement in fishing gear', 'Underwater noise from shipping and seismic surveys', 'Climate change affecting krill supply'],
        bn: ['জাহাজের সঙ্গে সংঘর্ষ', 'মাছ ধরার জালে আটকে পড়া', 'জাহাজ চলাচল ও ভূকম্পন জরিপের শব্দদূষণ', 'জলবায়ু পরিবর্তনে ক্রিলের প্রাপ্যতা কমে যাওয়া'],
      },
      initiatives: {
        en: ['International Whaling Commission protection since 1966', 'CITES Appendix I listing', 'Ship speed-reduction zones off California and Sri Lanka', 'Marine protected areas and whale sanctuaries'],
        bn: ['১৯৬৬ সাল থেকে আন্তর্জাতিক তিমি কমিশনের সুরক্ষা', 'সাইটেস পরিশিষ্ট-১ এ অন্তর্ভুক্তি', 'ক্যালিফোর্নিয়া ও শ্রীলঙ্কা উপকূলে জাহাজের গতিসীমা নির্ধারণ', 'সামুদ্রিক সংরক্ষিত এলাকা ও তিমি অভয়ারণ্য'],
      },
      assessed: '2018',
    },
    facts: {
      en: [
        'A blue whale’s heart weighs around 180 kg — about as much as a large tiger.',
        'Its calls are among the loudest sounds made by any animal.',
        'A newborn calf is about 7 m long and gains roughly 90 kg a day on its mother’s milk.',
      ],
      bn: [
        'নীল তিমির হৃৎপিণ্ডের ওজন প্রায় ১৮০ কেজি — একটি বড় বাঘের সমান।',
        'এদের ডাক প্রাণিজগতের সবচেয়ে উচ্চ শব্দগুলোর একটি।',
        'সদ্যোজাত বাচ্চা প্রায় ৭ মিটার লম্বা হয় এবং মায়ের দুধ খেয়ে দিনে প্রায় ৯০ কেজি করে ওজন বাড়ায়।',
      ],
    },
    related: ['whale-shark', 'irrawaddy-dolphin', 'emperor-penguin', 'honey-fungus'],
  },
  {
    id: 'staghorn-coral',
    commonName: { en: 'Staghorn Coral', bn: 'স্ট্যাগহর্ন প্রবাল' },
    scientificName: 'Acropora cervicornis',
    altNames: {
      en: ['Staghorn', 'Branching Coral'],
      bn: ['হরিণশিং প্রবাল', 'শাখা প্রবাল'],
    },
    category: 'marine',
    wikiTitle: 'Staghorn coral',
    description: {
      en: 'Staghorn coral is a fast-growing reef-building coral of the Caribbean, named for its thick branches that look like a deer’s antlers. Each colony is made of thousands of tiny polyps living with microscopic algae that give them food and colour. Once one of the most common corals in the region, it has declined by over 80% since the 1980s because of disease, bleaching and storms, and is now Critically Endangered.',
      bn: 'স্ট্যাগহর্ন প্রবাল ক্যারিবীয় সাগরের দ্রুত বর্ধনশীল একটি প্রবালপ্রাচীর-গঠনকারী প্রবাল; হরিণের শিংয়ের মতো মোটা শাখার জন্য এর এই নাম। প্রতিটি কলোনি হাজার হাজার ক্ষুদ্র পলিপ নিয়ে গঠিত, যারা আণুবীক্ষণিক শৈবালের সঙ্গে মিলেমিশে বাস করে — শৈবাল তাদের খাদ্য ও রং জোগায়। একসময় এটি ওই অঞ্চলের অন্যতম সাধারণ প্রবাল ছিল, কিন্তু রোগ, ব্লিচিং ও ঝড়ের কারণে ১৯৮০-এর দশক থেকে এর সংখ্যা ৮০ শতাংশেরও বেশি কমে গেছে; এখন এটি মহাবিপন্ন।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Anthozoa',
      order: 'Scleractinia',
      family: 'Acroporidae',
      genus: 'Acropora',
      species: 'A. cervicornis',
    },
    physical: {
      size: {
        en: 'Branches 1–7 cm thick; colonies can reach 1.5 m tall and several metres across, forming dense thickets',
        bn: 'শাখা ১–৭ সেমি মোটা; কলোনি ১.৫ মিটার পর্যন্ত উঁচু ও কয়েক মিটার চওড়া হয়ে ঘন ঝোপের মতো তৈরি করে',
      },
      weight: {
        en: 'Built from a dense limestone (calcium carbonate) skeleton; a large thicket can weigh many tonnes',
        bn: 'ঘন চুনাপাথরের (ক্যালসিয়াম কার্বনেট) কঙ্কালে গঠিত; একটি বড় প্রবাল-ঝোপের ওজন কয়েক টন হতে পারে',
      },
      lifespan: {
        en: 'Colonies can persist for decades by continual growth and fragmentation; individual polyps live a few years',
        bn: 'অবিরাম বৃদ্ধি ও খণ্ডিত হয়ে নতুন কলোনি তৈরির মাধ্যমে কয়েক দশক টিকে থাকতে পারে; একেকটি পলিপ কয়েক বছর বাঁচে',
      },
      features: {
        en: [
          'Cylindrical, antler-like branches',
          'Golden-brown to tan colour from symbiotic algae',
          'Pale, rounded growing tip at the end of each branch',
          'Grows up to 10–20 cm per year — one of the fastest Caribbean corals',
        ],
        bn: [
          'নলাকার, হরিণের শিংয়ের মতো শাখা',
          'সহবাসী শৈবালের কারণে সোনালি-বাদামি থেকে হালকা বাদামি রং',
          'প্রতিটি শাখার মাথায় ফ্যাকাশে, গোলাকার বর্ধনশীল ডগা',
          'বছরে ১০–২০ সেমি পর্যন্ত বাড়ে — ক্যারিবীয় অঞ্চলের দ্রুততম বর্ধনশীল প্রবালগুলোর একটি',
        ],
      },
    },
    habitat: {
      en: 'Clear, warm, shallow reef waters, usually 1–20 m deep, on back reefs and fore-reef slopes',
      bn: 'স্বচ্ছ, উষ্ণ ও অগভীর প্রবালপ্রাচীরের পানি, সাধারণত ১–২০ মিটার গভীরে',
    },
    habitats: ['coral-reef', 'ocean'],
    regions: ['oceans', 'north-america', 'south-america'],
    distribution: {
      en: 'Throughout the Caribbean Sea, the Bahamas, Florida and the southern Gulf of Mexico, south to the coasts of Venezuela and Colombia.',
      bn: 'সমগ্র ক্যারিবীয় সাগর, বাহামা, ফ্লোরিডা ও মেক্সিকো উপসাগরের দক্ষিণাংশ থেকে ভেনেজুয়েলা ও কলম্বিয়ার উপকূল পর্যন্ত।',
    },
    climate: {
      en: 'Tropical seas with water temperatures of about 25–29 °C',
      bn: 'প্রায় ২৫–২৯ ডিগ্রি সেলসিয়াস তাপমাত্রার ক্রান্তীয় সমুদ্র',
    },
    diet: {
      en: 'Mainly gets sugars from symbiotic zooxanthellae algae that photosynthesise inside its tissues; polyps also catch zooplankton with stinging tentacles at night',
      bn: 'মূলত দেহকলার ভেতরে থাকা সহবাসী জুজ্যান্থেলি শৈবালের সালোকসংশ্লেষণে তৈরি শর্করা থেকে পুষ্টি পায়; রাতে পলিপগুলো হুলযুক্ত কর্ষিকা দিয়ে প্রাণিকণাও (জুপ্ল্যাংকটন) ধরে খায়',
    },
    ecologicalRole: {
      en: 'Its branching thickets build reef structure and provide shelter and nurseries for fish, lobsters and other reef life, while helping break waves that would otherwise erode coastlines.',
      bn: 'এর শাখাযুক্ত ঝোপ প্রবালপ্রাচীরের কাঠামো গড়ে তোলে এবং মাছ, লবস্টার ও অন্যান্য সামুদ্রিক প্রাণীর আশ্রয় ও প্রজননক্ষেত্র তৈরি করে; পাশাপাশি ঢেউয়ের শক্তি কমিয়ে উপকূলকে ক্ষয় থেকে রক্ষা করে।',
    },
    behavior: {
      en: 'Reproduces mostly by fragmentation — broken branches reattach and grow into new colonies. It also spawns once a year, releasing eggs and sperm a few nights after the full moon in late summer.',
      bn: 'মূলত খণ্ডিত হয়ে বংশবিস্তার করে — ভাঙা শাখা আবার কোথাও আটকে নতুন কলোনিতে পরিণত হয়। এ ছাড়া বছরে একবার, গ্রীষ্মের শেষে পূর্ণিমার কয়েক রাত পর ডিম ও শুক্রাণু ছাড়ে।',
    },
    range: {
      native: [
        [24.9, -80.6],
        [24.2, -77.6],
        [18.3, -87.8],
        [16.3, -86.5],
        [20.8, -78.9],
        [18.3, -64.8],
        [12.2, -68.3],
        [11.3, -74.2],
      ],
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      threats: {
        en: ['White-band disease and stony coral tissue loss disease', 'Coral bleaching from marine heatwaves', 'Hurricane damage', 'Pollution, sedimentation and predation by snails and fireworms'],
        bn: ['হোয়াইট-ব্যান্ড ও অন্যান্য প্রবাল রোগ', 'সামুদ্রিক তাপপ্রবাহে প্রবাল ব্লিচিং', 'ঘূর্ণিঝড়ে ক্ষতি', 'দূষণ, পলি জমা এবং শামুক ও ফায়ারওয়ার্মের আক্রমণ'],
      },
      initiatives: {
        en: ['Coral nurseries and outplanting in Florida and the Caribbean', 'Listed as threatened under the US Endangered Species Act', 'Marine protected areas', 'Research into heat-tolerant coral genotypes'],
        bn: ['ফ্লোরিডা ও ক্যারিবীয় অঞ্চলে প্রবাল নার্সারি ও পুনঃরোপণ', 'যুক্তরাষ্ট্রের বিপন্ন প্রজাতি আইনে সংকটাপন্ন তালিকাভুক্ত', 'সামুদ্রিক সংরক্ষিত এলাকা', 'তাপসহিষ্ণু প্রবাল জাত নিয়ে গবেষণা'],
      },
      assessed: '2022',
    },
    facts: {
      en: [
        'Because it grows so fast, staghorn coral is a favourite species for reef-restoration projects.',
        'A coral “branch” is actually a colony of thousands of tiny animals.',
        'Corals look like plants but are animals related to jellyfish and sea anemones.',
      ],
      bn: [
        'দ্রুত বাড়ে বলে প্রবালপ্রাচীর পুনরুদ্ধার প্রকল্পে স্ট্যাগহর্ন প্রবাল খুবই জনপ্রিয়।',
        'প্রবালের একেকটি “শাখা” আসলে হাজার হাজার ক্ষুদ্র প্রাণীর একটি কলোনি।',
        'প্রবাল দেখতে উদ্ভিদের মতো হলেও এরা আসলে প্রাণী — জেলিফিশ ও সি-অ্যানিমোনের আত্মীয়।',
      ],
    },
    related: ['ocellaris-clownfish', 'green-sea-turtle', 'common-octopus'],
  },
  {
    id: 'common-octopus',
    commonName: { en: 'Common Octopus', bn: 'সাধারণ অক্টোপাস' },
    scientificName: 'Octopus vulgaris',
    altNames: {
      en: ['Octopus', 'Atlantic Octopus'],
      bn: ['অক্টোপাস', 'আটবাহু প্রাণী'],
    },
    category: 'marine',
    wikiTitle: 'Common octopus',
    description: {
      en: 'The common octopus is a highly intelligent mollusc with eight flexible arms, three hearts and blue blood. It can change the colour and texture of its skin in a fraction of a second to vanish against rocks or seaweed, squirt ink to escape predators, and squeeze through any gap larger than its beak. Solving puzzles, opening jars and using tools, it is one of the smartest invertebrates known.',
      bn: 'সাধারণ অক্টোপাস অত্যন্ত বুদ্ধিমান একটি শামুকগোত্রীয় (মোলাস্কা) প্রাণী, যার আটটি নমনীয় বাহু, তিনটি হৃৎপিণ্ড এবং নীল রক্ত রয়েছে। চোখের পলকে এটি গায়ের রং ও চামড়ার গঠন বদলে পাথর বা শৈবালের সঙ্গে মিশে যেতে পারে, শিকারির হাত থেকে বাঁচতে কালি ছুড়ে দেয়, আর ঠোঁটের চেয়ে বড় যেকোনো ফাঁক গলে বেরিয়ে যেতে পারে। ধাঁধা সমাধান, বয়ামের ঢাকনা খোলা ও হাতিয়ার ব্যবহারে পারদর্শী এই প্রাণী মেরুদণ্ডহীনদের মধ্যে সবচেয়ে বুদ্ধিমানদের একটি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Mollusca',
      class: 'Cephalopoda',
      order: 'Octopoda',
      family: 'Octopodidae',
      genus: 'Octopus',
      species: 'O. vulgaris',
    },
    physical: {
      size: {
        en: 'Mantle up to about 25 cm; total length with arms usually 0.6–1 m, occasionally up to 1.3 m',
        bn: 'ম্যান্টল প্রায় ২৫ সেমি পর্যন্ত; বাহুসহ মোট দৈর্ঘ্য সাধারণত ০.৬–১ মিটার, কখনো ১.৩ মিটার পর্যন্ত',
      },
      weight: {
        en: 'Usually 3–5 kg; large individuals can exceed 10 kg',
        bn: 'সাধারণত ৩–৫ কেজি; বড়গুলো ১০ কেজিরও বেশি হতে পারে',
      },
      lifespan: {
        en: 'Only about 1–2 years; females die soon after their eggs hatch',
        bn: 'মাত্র ১–২ বছর; ডিম ফোটার কিছুদিন পরই স্ত্রী অক্টোপাস মারা যায়',
      },
      features: {
        en: [
          'Eight arms, each with two rows of sensitive suckers',
          'Skin full of colour cells (chromatophores) for instant camouflage',
          'Three hearts and copper-based blue blood',
          'A hard, parrot-like beak — the only rigid part of its body',
        ],
        bn: [
          'আটটি বাহু, প্রতিটিতে দুই সারি সংবেদনশীল চোষক',
          'তাৎক্ষণিক ছদ্মবেশের জন্য ত্বকে অসংখ্য রঙ-কোষ (ক্রোমাটোফোর)',
          'তিনটি হৃৎপিণ্ড এবং তামাভিত্তিক নীল রক্ত',
          'টিয়াপাখির মতো শক্ত ঠোঁট — শরীরের একমাত্র শক্ত অংশ',
        ],
      },
    },
    habitat: {
      en: 'Rocky seabeds, reefs and seagrass meadows from the shore down to about 200 m deep',
      bn: 'পাথুরে সমুদ্রতল, প্রবালপ্রাচীর ও সামুদ্রিক ঘাসের বন — তীর থেকে প্রায় ২০০ মিটার গভীরতা পর্যন্ত',
    },
    habitats: ['ocean', 'coral-reef'],
    regions: ['oceans', 'europe', 'africa'],
    distribution: {
      en: 'The Mediterranean Sea and the eastern Atlantic from the British Isles to West Africa. Similar octopuses elsewhere in the world, once included in this species, are now often treated as separate species.',
      bn: 'ভূমধ্যসাগর এবং ব্রিটিশ দ্বীপপুঞ্জ থেকে পশ্চিম আফ্রিকা পর্যন্ত পূর্ব আটলান্টিক মহাসাগর। বিশ্বের অন্যান্য অঞ্চলের একই রকম অক্টোপাসগুলোকে আগে এই প্রজাতির অন্তর্ভুক্ত ধরা হলেও এখন সাধারণত আলাদা প্রজাতি হিসেবে গণ্য করা হয়।',
    },
    climate: {
      en: 'Temperate to subtropical coastal seas',
      bn: 'নাতিশীতোষ্ণ থেকে উপক্রান্তীয় উপকূলীয় সমুদ্র',
    },
    diet: {
      en: 'Carnivore — crabs, shrimp, clams, snails and fish; it drills or pries open shells and injects paralysing saliva',
      bn: 'মাংসাশী — কাঁকড়া, চিংড়ি, ঝিনুক, শামুক ও মাছ; খোলস ফুটো করে বা টেনে খুলে ভেতরে অবশকারী লালা ঢুকিয়ে দেয়',
    },
    ecologicalRole: {
      en: 'An important mid-level predator that keeps crab and shellfish numbers in check, and in turn is food for dolphins, sharks, seals and large fish.',
      bn: 'মধ্যম স্তরের গুরুত্বপূর্ণ শিকারি; কাঁকড়া ও খোলসধারী প্রাণীর সংখ্যা নিয়ন্ত্রণে রাখে, আবার নিজেও ডলফিন, হাঙর, সিল ও বড় মাছের খাদ্য।',
    },
    behavior: {
      en: 'Solitary and mostly active at night. Lives in a den among rocks, often surrounded by empty shells from its meals. Moves by crawling or by jet propulsion, and the female guards her eggs for weeks without eating.',
      bn: 'একাকী এবং মূলত নিশাচর। পাথরের খাঁজে গর্ত বানিয়ে থাকে, যার চারপাশে প্রায়ই খেয়ে ফেলা খোলস জমে থাকে। হামাগুড়ি দিয়ে বা পানির জেট ছুড়ে চলাফেরা করে। স্ত্রী অক্টোপাস না খেয়ে কয়েক সপ্তাহ ধরে ডিম পাহারা দেয়।',
    },
    range: {
      native: [
        [38.0, 15.0],
        [40.0, 5.0],
        [36.0, -6.0],
        [43.5, -8.5],
        [28.0, -15.5],
        [20.5, -17.5],
        [35.5, 24.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Overfishing in some areas', 'Coastal habitat degradation', 'Ocean warming and pollution'],
        bn: ['কিছু এলাকায় অতিরিক্ত আহরণ', 'উপকূলীয় আবাসস্থলের অবক্ষয়', 'সমুদ্রের উষ্ণতা বৃদ্ধি ও দূষণ'],
      },
      initiatives: {
        en: ['Seasonal fishing closures in Spain, Portugal and West Africa', 'Community co-managed octopus fisheries in Asturias, Spain', 'Animal-welfare debate over proposed octopus farming'],
        bn: ['স্পেন, পর্তুগাল ও পশ্চিম আফ্রিকায় মৌসুমি মাছ ধরা বন্ধ রাখা', 'স্পেনের আস্তুরিয়াসে জেলেদের যৌথ ব্যবস্থাপনায় অক্টোপাস আহরণ', 'প্রস্তাবিত অক্টোপাস খামার নিয়ে প্রাণিকল্যাণ বিতর্ক'],
      },
    },
    facts: {
      en: [
        'About two-thirds of an octopus’s neurons are in its arms, not its brain.',
        'It has no bones, so it can squeeze through a hole the size of its beak.',
        'Octopuses have been seen escaping aquarium tanks to raid neighbouring ones.',
      ],
      bn: [
        'অক্টোপাসের স্নায়ুকোষের প্রায় তিন ভাগের দুই ভাগই থাকে বাহুতে, মস্তিষ্কে নয়।',
        'শরীরে কোনো হাড় নেই, তাই ঠোঁটের সমান ছোট ছিদ্র দিয়েও গলে যেতে পারে।',
        'অ্যাকুয়ারিয়ামে অক্টোপাসকে নিজের ট্যাংক থেকে বেরিয়ে পাশের ট্যাংকে খাবার চুরি করতে দেখা গেছে।',
      ],
    },
    related: ['staghorn-coral', 'ocellaris-clownfish', 'green-sea-turtle'],
  },
  {
    id: 'irrawaddy-dolphin',
    commonName: { en: 'Irrawaddy Dolphin', bn: 'ইরাবতী ডলফিন' },
    scientificName: 'Orcaella brevirostris',
    altNames: {
      en: ['Irrawaddy River Dolphin', 'Snubfin Dolphin', 'Mahakam River Dolphin'],
      bn: ['ইরাবতী শুশুক', 'শুশুক', 'ডলফিন'],
    },
    category: 'marine',
    secondaryCategories: ['mammals', 'freshwater'],
    wikiTitle: 'Irrawaddy dolphin',
    description: {
      en: 'The Irrawaddy dolphin is a gentle, round-headed dolphin with no beak that lives in coastal seas, estuaries and a few large rivers of South and Southeast Asia. Bangladesh is its most important stronghold: the brackish waters of the Sundarbans and the coastal Bay of Bengal hold the largest known population in the world. It is famous in Myanmar for cooperating with fishermen, herding fish towards their cast nets.',
      bn: 'ইরাবতী ডলফিন গোলাকার মাথা ও ঠোঁটবিহীন মুখের একটি শান্ত স্বভাবের ডলফিন। দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার উপকূলীয় সমুদ্র, মোহনা এবং কয়েকটি বড় নদীতে এর বাস। এদের সবচেয়ে গুরুত্বপূর্ণ আবাস বাংলাদেশ — সুন্দরবনের লোনা পানি ও বঙ্গোপসাগরের উপকূলে বিশ্বের সবচেয়ে বড় পরিচিত জনগোষ্ঠী বাস করে। মিয়ানমারের ইরাবতী নদীতে জেলেদের সঙ্গে সহযোগিতার জন্য এরা বিখ্যাত — এরা মাছ তাড়িয়ে জেলেদের জালের দিকে নিয়ে আসে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Delphinidae',
      genus: 'Orcaella',
      species: 'O. brevirostris',
    },
    physical: {
      size: {
        en: 'Adults about 2.1–2.75 m long',
        bn: 'প্রাপ্তবয়স্ক ডলফিন প্রায় ২.১–২.৭৫ মিটার লম্বা',
      },
      weight: {
        en: 'Usually 90–150 kg',
        bn: 'সাধারণত ৯০–১৫০ কেজি',
      },
      lifespan: {
        en: 'Around 30 years',
        bn: 'প্রায় ৩০ বছর',
      },
      features: {
        en: [
          'Rounded, bulging forehead with no beak',
          'Small, rounded triangular dorsal fin',
          'Grey to bluish-grey body, paler underneath',
          'Flexible neck and a U-shaped blowhole',
        ],
        bn: [
          'ঠোঁটবিহীন, গোলাকার ও উঁচু কপাল',
          'ছোট, গোলাকার ত্রিভুজাকৃতির পিঠের পাখনা',
          'ধূসর থেকে নীলচে-ধূসর দেহ, পেটের দিক হালকা',
          'নমনীয় ঘাড় এবং ইউ-আকৃতির নিঃশ্বাস-ছিদ্র',
        ],
      },
    },
    habitat: {
      en: 'Shallow coastal waters, estuaries, mangrove channels and large rivers; prefers brackish water near river mouths',
      bn: 'অগভীর উপকূলীয় সমুদ্র, মোহনা, ম্যানগ্রোভ বনের খাল ও বড় নদী; নদীর মোহনার কাছে লোনা-মিঠা মিশ্র পানি পছন্দ করে',
    },
    habitats: ['ocean', 'mangrove', 'rivers-lakes'],
    regions: ['south-asia', 'southeast-asia', 'oceans'],
    distribution: {
      en: 'Coasts of the Bay of Bengal (Bangladesh, India’s Chilika Lake, Myanmar) to Thailand, Cambodia, Indonesia and the Philippines; river populations live in the Ayeyarwady, Mekong and Mahakam rivers. In Bangladesh it occurs throughout the Sundarbans and the Meghna estuary.',
      bn: 'বঙ্গোপসাগরের উপকূল (বাংলাদেশ, ভারতের চিল্কা হ্রদ, মিয়ানমার) থেকে থাইল্যান্ড, কম্বোডিয়া, ইন্দোনেশিয়া ও ফিলিপাইন পর্যন্ত; ইরাবতী, মেকং ও মাহাকাম নদীতে মিঠা পানির জনগোষ্ঠী রয়েছে। বাংলাদেশে সমগ্র সুন্দরবন ও মেঘনার মোহনায় এদের দেখা মেলে।',
    },
    climate: {
      en: 'Warm tropical and monsoon waters',
      bn: 'উষ্ণ ক্রান্তীয় ও মৌসুমি অঞ্চলের জলরাশি',
    },
    diet: {
      en: 'Carnivore — fish, shrimp, squid and other crustaceans and cephalopods',
      bn: 'মাংসাশী — মাছ, চিংড়ি, স্কুইড এবং অন্যান্য কবচী ও সেফালোপড প্রাণী',
    },
    ecologicalRole: {
      en: 'A top predator of estuaries and rivers whose presence signals a healthy aquatic ecosystem; it helps regulate fish and shrimp populations.',
      bn: 'মোহনা ও নদীর শীর্ষ শিকারি; এদের উপস্থিতি সুস্থ জলজ বাস্তুতন্ত্রের লক্ষণ। এরা মাছ ও চিংড়ির সংখ্যা নিয়ন্ত্রণে ভূমিকা রাখে।',
    },
    behavior: {
      en: 'Lives in small groups of 2–6, sometimes more. Shy and slow-swimming; it surfaces quietly and rarely leaps. It is known to spit jets of water, possibly to herd fish.',
      bn: '২–৬টির ছোট দলে, কখনো আরও বড় দলে চলে। লাজুক ও ধীরগতির সাঁতারু; নিঃশব্দে পানির ওপর ভেসে ওঠে এবং কদাচিৎ লাফ দেয়। মুখ থেকে পানির ফোয়ারা ছুড়তে দেখা যায়, সম্ভবত মাছ তাড়ানোর জন্য।',
    },
    range: {
      native: [
        [21.9, 89.6],
        [22.4, 90.9],
        [19.7, 85.3],
        [22.0, 96.0],
        [12.5, 106.0],
        [7.4, 100.4],
        [-0.4, 116.9],
        [10.9, 119.3],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      population: {
        en: 'About 5,400 estimated in Bangladesh’s coastal waters (2008 survey) — the largest known population; several river subpopulations number fewer than 100',
        bn: 'বাংলাদেশের উপকূলীয় জলসীমায় আনুমানিক প্রায় ৫,৪০০টি (২০০৮ সালের জরিপ) — বিশ্বের সবচেয়ে বড় পরিচিত জনগোষ্ঠী; কয়েকটি নদীর জনগোষ্ঠীতে ১০০টিরও কম ডলফিন রয়েছে',
      },
      threats: {
        en: ['Accidental capture in gillnets', 'Reduced freshwater flow and rising salinity', 'Pollution and boat traffic', 'Habitat loss from dams and dredging'],
        bn: ['ফাঁস জালে (গিলনেট) দুর্ঘটনাবশত আটকে পড়া', 'মিঠা পানির প্রবাহ হ্রাস ও লবণাক্ততা বৃদ্ধি', 'দূষণ ও নৌযান চলাচল', 'বাঁধ ও ড্রেজিংয়ের ফলে আবাসস্থল নষ্ট'],
      },
      initiatives: {
        en: ['Dolphin sanctuaries in the Bangladesh Sundarbans (Dhangmari, Chandpai, Dudhmukhi)', 'Swatch of No Ground Marine Protected Area', 'Fisher-based dolphin monitoring networks', 'CITES Appendix I listing'],
        bn: ['বাংলাদেশের সুন্দরবনে ডলফিন অভয়ারণ্য (ঢাংমারী, চাঁদপাই, দুধমুখী)', 'সোয়াচ অব নো গ্রাউন্ড সামুদ্রিক সংরক্ষিত এলাকা', 'জেলেদের অংশগ্রহণে ডলফিন পর্যবেক্ষণ নেটওয়ার্ক', 'সাইটেস পরিশিষ্ট-১ এ অন্তর্ভুক্তি'],
      },
      assessed: '2017',
    },
    facts: {
      en: [
        'Bangladesh is home to the largest known population of Irrawaddy dolphins in the world.',
        'Its closest relative is the Australian snubfin dolphin, recognised as a separate species only in 2005.',
        'In Myanmar, some dolphins and fishermen have cooperated to catch fish for generations.',
      ],
      bn: [
        'বিশ্বে ইরাবতী ডলফিনের সবচেয়ে বড় পরিচিত জনগোষ্ঠীর বাস বাংলাদেশে।',
        'এর সবচেয়ে কাছের আত্মীয় অস্ট্রেলিয়ার স্নাবফিন ডলফিন, যাকে মাত্র ২০০৫ সালে আলাদা প্রজাতি হিসেবে স্বীকৃতি দেওয়া হয়।',
        'মিয়ানমারে বংশপরম্পরায় কিছু ডলফিন ও জেলে একসঙ্গে মাছ ধরে আসছে।',
      ],
    },
    related: ['ganges-river-dolphin', 'hilsa', 'fishing-cat', 'sundari'],
  },
];
