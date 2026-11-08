import type { Species } from '@/types';

export const freshwaterInverts1: Species[] = [
  {
    id: 'golden-apple-snail',
    commonName: { en: 'Golden Apple Snail', bn: 'সোনালি আপেল শামুক' },
    scientificName: 'Pomacea canaliculata',
    altNames: {
      en: ['Channeled Apple Snail', 'Golden Kuhol', 'Apple Snail'],
      bn: ['গোল্ডেন আপেল শামুক', 'আপেল শামুক', 'বিদেশি শামুক'],
    },
    category: 'freshwater',
    wikiTitle: 'Pomacea canaliculata',
    description: {
      en: 'The golden apple snail is a large South American freshwater snail that has become one of the most damaging invasive animals in Asian rice fields. It was imported into Asia in the 1980s as a cheap food and aquarium animal, escaped from farms and spread rapidly through irrigation canals. It lays conspicuous bright pink egg clusters on stems and walls above the water.',
      bn: 'সোনালি আপেল শামুক দক্ষিণ আমেরিকার একটি বড় আকারের মিঠা পানির শামুক, যা এখন এশিয়ার ধানখেতের সবচেয়ে ক্ষতিকর আগ্রাসী প্রাণীদের একটি। ১৯৮০-এর দশকে সস্তা খাবার ও অ্যাকোয়ারিয়ামের প্রাণী হিসেবে একে এশিয়ায় আনা হয়; পরে খামার থেকে ছড়িয়ে পড়ে সেচখাল ধরে দ্রুত বিস্তার লাভ করে। পানির ওপরে গাছের কাণ্ড বা দেয়ালে এরা উজ্জ্বল গোলাপি রঙের ডিমের গুচ্ছ পাড়ে, যা দূর থেকেই চোখে পড়ে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Mollusca',
      class: 'Gastropoda',
      order: 'Architaenioglossa',
      family: 'Ampullariidae',
      genus: 'Pomacea',
      species: 'P. canaliculata',
    },
    physical: {
      size: { en: 'Shell usually 4–7.5 cm high, occasionally larger', bn: 'খোলস সাধারণত ৪–৭.৫ সেমি উঁচু, কখনো আরও বড়' },
      weight: { en: 'Adults roughly 20–100 g depending on size', bn: 'আকারভেদে প্রাপ্তবয়স্ক শামুক মোটামুটি ২০–১০০ গ্রাম' },
      lifespan: { en: 'Usually 1–4 years', bn: 'সাধারণত ১–৪ বছর' },
      features: {
        en: [
          'Globular yellow-brown to greenish shell with a deep, channel-like suture between whorls',
          'Breathes with both a gill and a lung, using a long siphon to take air at the surface',
          'Bright pink egg masses laid above the waterline',
        ],
        bn: [
          'গোলাকার হলদে-বাদামি থেকে সবুজাভ খোলস, প্যাঁচগুলোর মাঝে গভীর খাঁজের মতো রেখা',
          'ফুলকা ও ফুসফুস — দুটি দিয়েই শ্বাস নেয়; লম্বা নল দিয়ে পানির ওপর থেকে বাতাস টানে',
          'পানির ওপরে পাড়া উজ্জ্বল গোলাপি ডিমের গুচ্ছ',
        ],
      },
    },
    habitat: {
      en: 'Rice paddies, irrigation canals, ponds, swamps and slow-flowing rivers',
      bn: 'ধানখেত, সেচখাল, পুকুর, জলাভূমি ও ধীরগতির নদী',
    },
    habitats: ['wetland', 'rivers-lakes', 'urban-farmland'],
    regions: ['south-america', 'southeast-asia', 'east-asia', 'north-america', 'europe'],
    distribution: {
      en: 'Native to the La Plata basin of Argentina, Uruguay, Paraguay, Bolivia and southern Brazil; introduced across Southeast and East Asia, Hawaii and Spain.',
      bn: 'আর্জেন্টিনা, উরুগুয়ে, প্যারাগুয়ে, বলিভিয়া ও দক্ষিণ ব্রাজিলের লা প্লাতা অববাহিকার স্থানীয় প্রজাতি; দক্ষিণ-পূর্ব ও পূর্ব এশিয়া, হাওয়াই এবং স্পেনে মানুষের মাধ্যমে ছড়িয়েছে।',
    },
    climate: {
      en: 'Warm temperate to tropical; survives cool seasons buried in mud',
      bn: 'উষ্ণ নাতিশীতোষ্ণ থেকে ক্রান্তীয় জলবায়ু; শীতকাল কাদায় গা ঢেকে কাটিয়ে দিতে পারে',
    },
    diet: {
      en: 'Voracious herbivore — young rice seedlings, aquatic plants, algae and decaying matter',
      bn: 'অতিভোজী তৃণভোজী — ধানের কচি চারা, জলজ উদ্ভিদ, শৈবাল ও পচা জৈব পদার্থ খায়',
    },
    ecologicalRole: {
      en: 'Where introduced it strips aquatic vegetation, alters wetland ecosystems and competes with native snails.',
      bn: 'যেখানে ছড়িয়েছে সেখানে জলজ উদ্ভিদ সাবাড় করে জলাভূমির বাস্তুতন্ত্র বদলে দেয় এবং দেশি শামুকের সঙ্গে প্রতিযোগিতা করে।',
    },
    behavior: {
      en: 'Mostly active at night; females climb out of the water to lay hundreds of eggs, and adults can survive drought for months by sealing their shell with an operculum.',
      bn: 'মূলত রাতে সক্রিয়; স্ত্রী শামুক পানি থেকে উঠে শত শত ডিম পাড়ে, আর খরার সময় ঢাকনা দিয়ে খোলস বন্ধ করে মাসের পর মাস টিকে থাকতে পারে।',
    },
    range: {
      native: [
        [-34.6, -58.4],
        [-32.9, -60.7],
        [-25.3, -57.6],
        [-30.0, -51.2],
        [-33.5, -56.0],
      ],
      introduced: [
        [14.6, 121.0],
        [15.0, 100.5],
        [10.8, 106.7],
        [23.7, 120.9],
        [33.6, 130.4],
        [21.3, -157.8],
        [40.7, 0.8],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; it is itself a major invasive pest', 'Locally reduced in its native range by wetland drainage'],
        bn: ['এটি নিজে বিপন্ন নয়; বরং এটিই বড় আগ্রাসী বালাই', 'স্থানীয় আবাসে জলাভূমি শুকিয়ে ফেলায় কোথাও কোথাও সংখ্যা কমেছে'],
      },
      initiatives: {
        en: ['Hand-collection, egg crushing and duck grazing in rice fields', 'Import bans and quarantine controls in several countries'],
        bn: ['ধানখেতে হাতে কুড়ানো, ডিম নষ্ট করা ও হাঁস চরানোর মাধ্যমে নিয়ন্ত্রণ', 'বিভিন্ন দেশে আমদানি নিষেধাজ্ঞা ও কোয়ারেন্টিন ব্যবস্থা'],
      },
    },
    facts: {
      en: [
        'It is listed among the “100 of the World’s Worst Invasive Alien Species”.',
        'Its pink eggs contain a toxin that deters most predators.',
        'Eating it raw or undercooked can transmit the rat lungworm parasite, which causes meningitis.',
      ],
      bn: [
        'এটি “বিশ্বের ১০০টি সবচেয়ে ক্ষতিকর আগ্রাসী প্রজাতি”-র তালিকায় রয়েছে।',
        'এর গোলাপি ডিমে বিষাক্ত উপাদান থাকে, ফলে বেশিরভাগ শিকারি প্রাণী এটি খায় না।',
        'কাঁচা বা আধাসেদ্ধ অবস্থায় খেলে ইঁদুরের ফুসফুস-কৃমি সংক্রমিত হতে পারে, যা মেনিনজাইটিস ঘটায়।',
      ],
    },
    related: ['indian-apple-snail', 'zebra-mussel', 'red-swamp-crayfish'],
  },
  {
    id: 'indian-apple-snail',
    commonName: { en: 'Indian Apple Snail', bn: 'শামুক' },
    scientificName: 'Pila globosa',
    altNames: {
      en: ['Apple Snail', 'Pila', 'Globose Apple Snail'],
      bn: ['আপেল শামুক', 'বড় শামুক', 'ডোবার শামুক'],
    },
    category: 'freshwater',
    wikiTitle: 'Pila globosa',
    description: {
      en: 'Pila globosa is the large, round freshwater snail found in almost every pond, ditch and flooded paddy in Bangladesh. It is a familiar part of village life: the snails are collected as duck and fish feed, eaten by some communities, and their shells were once burnt to make lime. It is also the classic snail dissected in school and college zoology classes across South Asia.',
      bn: 'শামুক (Pila globosa) বাংলাদেশের প্রায় সব পুকুর, ডোবা আর বর্ষায় ডোবা ধানখেতে দেখা যাওয়া বড়, গোলাকার মিঠা পানির শামুক। গ্রামের জীবনের সঙ্গে এটি ঘনিষ্ঠভাবে জড়িত — হাঁস ও মাছের খাবার হিসেবে শামুক কুড়ানো হয়, কিছু জনগোষ্ঠী এটি খায়, আর একসময় খোলস পুড়িয়ে চুন তৈরি করা হতো। দক্ষিণ এশিয়ার স্কুল-কলেজের প্রাণিবিজ্ঞান ক্লাসে ব্যবচ্ছেদের জন্যও এটিই সবচেয়ে পরিচিত শামুক।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Mollusca',
      class: 'Gastropoda',
      order: 'Architaenioglossa',
      family: 'Ampullariidae',
      genus: 'Pila',
      species: 'P. globosa',
    },
    physical: {
      size: { en: 'Shell about 5–8 cm high', bn: 'খোলস প্রায় ৫–৮ সেমি উঁচু' },
      weight: { en: 'Roughly 30–80 g', bn: 'মোটামুটি ৩০–৮০ গ্রাম' },
      lifespan: { en: 'About 2–4 years', bn: 'প্রায় ২–৪ বছর' },
      features: {
        en: [
          'Thick, globular greenish-brown shell with a large aperture',
          'Hard operculum (lid) that seals the shell during dry periods',
          'Both a gill and a lung-like sac, allowing it to breathe in water and air',
        ],
        bn: [
          'পুরু, গোলাকার সবুজাভ-বাদামি খোলস ও বড় মুখ',
          'শক্ত ঢাকনা (অপারকুলাম), যা শুকনো মৌসুমে খোলসের মুখ বন্ধ করে রাখে',
          'ফুলকা ও ফুসফুসের মতো থলি — দুটিই আছে, তাই পানি ও বাতাস দুই জায়গা থেকেই শ্বাস নিতে পারে',
        ],
      },
    },
    habitat: {
      en: 'Ponds, ditches, beels, swamps and flooded rice fields with muddy bottoms',
      bn: 'কাদাযুক্ত তলার পুকুর, ডোবা, বিল, জলাভূমি ও বর্ষায় প্লাবিত ধানখেত',
    },
    habitats: ['wetland', 'rivers-lakes', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Bangladesh, India, Nepal, Sri Lanka and Myanmar; common throughout the plains of Bangladesh.',
      bn: 'বাংলাদেশ, ভারত, নেপাল, শ্রীলঙ্কা ও মিয়ানমার; বাংলাদেশের সমতল অঞ্চলজুড়ে সাধারণ।',
    },
    climate: {
      en: 'Tropical monsoon climate with distinct wet and dry seasons',
      bn: 'বর্ষা ও শুষ্ক মৌসুম স্পষ্ট এমন ক্রান্তীয় মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Herbivore and scavenger — soft aquatic plants, algae and decaying organic matter',
      bn: 'তৃণভোজী ও আবর্জনাভুক — নরম জলজ উদ্ভিদ, শৈবাল ও পচা জৈব পদার্থ খায়',
    },
    ecologicalRole: {
      en: 'Recycles plant matter in wetlands and is important prey for openbill storks, ducks, fish and otters.',
      bn: 'জলাভূমিতে উদ্ভিজ্জ পদার্থ পুনর্চক্রায়ণ করে এবং শামুকখোল পাখি, হাঁস, মাছ ও ভোঁদড়ের গুরুত্বপূর্ণ খাদ্য।',
    },
    behavior: {
      en: 'In the dry season it buries itself in mud and aestivates for months; it becomes active and breeds with the monsoon rains, laying white egg clusters on damp ground.',
      bn: 'শুকনো মৌসুমে কাদার নিচে ঢুকে মাসের পর মাস গ্রীষ্মনিদ্রায় থাকে; বর্ষা এলে সক্রিয় হয়ে প্রজনন করে এবং ভেজা মাটিতে সাদা ডিমের গুচ্ছ পাড়ে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [24.9, 91.9],
        [22.8, 89.5],
        [22.6, 88.4],
        [26.1, 91.7],
        [25.6, 85.1],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Over-collection for duck and fish feed', 'Pesticide use in rice fields', 'Drainage and filling of wetlands'],
        bn: ['হাঁস ও মাছের খাবারের জন্য অতিরিক্ত আহরণ', 'ধানখেতে কীটনাশকের ব্যবহার', 'জলাভূমি শুকানো ও ভরাট করা'],
      },
      initiatives: {
        en: ['Wetland sanctuaries in Bangladesh protect snail habitat', 'Research on snail farming to reduce wild harvest'],
        bn: ['বাংলাদেশের জলাভূমি অভয়াশ্রম শামুকের আবাস রক্ষা করে', 'প্রাকৃতিক আহরণ কমাতে শামুক চাষ নিয়ে গবেষণা'],
      },
    },
    facts: {
      en: [
        'The Asian openbill stork (শামুকখোল) is named for its habit of eating these snails.',
        'It can survive a whole dry season sealed inside its shell in hardened mud.',
      ],
      bn: [
        'শামুকখোল পাখির নামই এসেছে এই শামুক খাওয়ার অভ্যাস থেকে।',
        'শক্ত হয়ে যাওয়া কাদার নিচে খোলস বন্ধ করে পুরো শুকনো মৌসুম টিকে থাকতে পারে।',
      ],
    },
    related: ['golden-apple-snail', 'lamellidens-freshwater-mussel'],
  },
  {
    id: 'lamellidens-freshwater-mussel',
    commonName: { en: 'Indian Freshwater Mussel', bn: 'ঝিনুক' },
    scientificName: 'Lamellidens marginalis',
    altNames: {
      en: ['Freshwater Mussel', 'Pearl Mussel of Bangladesh'],
      bn: ['মিঠা পানির ঝিনুক', 'মুক্তার ঝিনুক'],
    },
    category: 'freshwater',
    wikiTitle: 'Unionidae',
    description: {
      en: 'Lamellidens marginalis is the common freshwater mussel of ponds, beels and rivers in Bangladesh and the wider Indian subcontinent. Like other mussels it filters large volumes of water, helping to keep ponds clean. It is the main species used for freshwater pearl culture in Bangladesh, where small irregular pearls are produced by inserting mantle tissue grafts.',
      bn: 'ঝিনুক (Lamellidens marginalis) বাংলাদেশ ও ভারতীয় উপমহাদেশের পুকুর, বিল ও নদীতে পাওয়া সবচেয়ে পরিচিত মিঠা পানির ঝিনুক। অন্যান্য ঝিনুকের মতো এটিও প্রচুর পানি ছেঁকে খাবার সংগ্রহ করে, ফলে পুকুরের পানি পরিষ্কার থাকে। বাংলাদেশে মিঠা পানির মুক্তা চাষে মূলত এই ঝিনুকই ব্যবহার করা হয় — ঝিনুকের দেহে ম্যান্টল টিস্যুর ছোট টুকরো স্থাপন করে মুক্তা তৈরি করানো হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Mollusca',
      class: 'Bivalvia',
      order: 'Unionida',
      family: 'Unionidae',
      genus: 'Lamellidens',
      species: 'L. marginalis',
    },
    physical: {
      size: { en: 'Shell usually 7–12 cm long', bn: 'খোলস সাধারণত ৭–১২ সেমি লম্বা' },
      weight: { en: 'Roughly 40–150 g including shell', bn: 'খোলসসহ মোটামুটি ৪০–১৫০ গ্রাম' },
      lifespan: { en: 'Several years; often around 5–10 years', bn: 'কয়েক বছর; প্রায়ই ৫–১০ বছরের মতো' },
      features: {
        en: [
          'Elongated, oval shell with brownish-green outer layer',
          'Shiny, pearly (nacreous) inner surface',
          'Muscular foot used to plough slowly through mud',
        ],
        bn: [
          'লম্বাটে ডিম্বাকার খোলস, বাইরের স্তর বাদামি-সবুজ',
          'ভেতরের দিক চকচকে মুক্তার মতো (ন্যাকার)',
          'পেশিবহুল পা দিয়ে কাদার ভেতর ধীরে ধীরে চলে',
        ],
      },
    },
    habitat: {
      en: 'Muddy and sandy bottoms of ponds, lakes, beels, canals and slow rivers',
      bn: 'পুকুর, হ্রদ, বিল, খাল ও ধীরগতির নদীর কাদা ও বালুময় তলদেশ',
    },
    habitats: ['rivers-lakes', 'wetland'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Bangladesh, India, Nepal, Pakistan, Sri Lanka and Myanmar.',
      bn: 'বাংলাদেশ, ভারত, নেপাল, পাকিস্তান, শ্রীলঙ্কা ও মিয়ানমার।',
    },
    climate: { en: 'Tropical and subtropical monsoon climates', bn: 'ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Filter feeder — phytoplankton, bacteria and fine organic particles',
      bn: 'ছাঁকনিভোজী — উদ্ভিদকণা (ফাইটোপ্ল্যাংকটন), ব্যাকটেরিয়া ও সূক্ষ্ম জৈব কণা খায়',
    },
    ecologicalRole: {
      en: 'Filters and clarifies water, and its larvae depend on fish hosts, linking mussels and fish populations.',
      bn: 'পানি ছেঁকে পরিষ্কার রাখে; এর লার্ভা মাছের দেহে পরজীবী হিসেবে বড় হয়, তাই ঝিনুক ও মাছের সংখ্যা পরস্পর সম্পর্কিত।',
    },
    behavior: {
      en: 'Lives half-buried in sediment; females brood larvae (glochidia) in their gills and release them to attach briefly to fish.',
      bn: 'তলার কাদায় অর্ধেক পুঁতে থাকে; স্ত্রী ঝিনুক ফুলকায় লার্ভা (গ্লোকিডিয়া) লালন করে এবং পরে ছেড়ে দেয়, যা অল্প সময় মাছের গায়ে লেগে থাকে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [24.3, 91.4],
        [22.6, 88.4],
        [25.6, 85.1],
        [7.3, 80.6],
        [16.8, 96.2],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Water pollution and pesticides', 'Over-harvesting for duck feed, lime and pearls', 'Siltation of wetlands'],
        bn: ['পানিদূষণ ও কীটনাশক', 'হাঁসের খাবার, চুন ও মুক্তার জন্য অতিরিক্ত আহরণ', 'জলাভূমিতে পলি জমা'],
      },
      initiatives: {
        en: ['Freshwater pearl culture research by the Bangladesh Fisheries Research Institute', 'Use of mussels as indicators in water-quality monitoring'],
        bn: ['বাংলাদেশ মৎস্য গবেষণা ইনস্টিটিউটের মিঠা পানির মুক্তা চাষ গবেষণা', 'পানির গুণমান পর্যবেক্ষণে ঝিনুককে সূচক হিসেবে ব্যবহার'],
      },
    },
    facts: {
      en: [
        'A single mussel can filter dozens of litres of water a day.',
        'Its crushed shell is traditionally burnt to make edible lime (চুন) for betel leaf.',
      ],
      bn: [
        'একটি ঝিনুক দিনে কয়েক ডজন লিটার পানি ছেঁকে ফেলতে পারে।',
        'প্রথাগতভাবে এর খোলস পুড়িয়ে পানের চুন তৈরি করা হয়।',
      ],
    },
    related: ['freshwater-pearl-mussel', 'indian-apple-snail', 'zebra-mussel'],
  },
  {
    id: 'freshwater-pearl-mussel',
    commonName: { en: 'Freshwater Pearl Mussel', bn: 'ইউরোপীয় মুক্তা ঝিনুক' },
    scientificName: 'Margaritifera margaritifera',
    altNames: {
      en: ['Pearl Mussel', 'Eastern Pearlshell'],
      bn: ['মিঠা পানির মুক্তা ঝিনুক', 'মুক্তা ঝিনুক'],
    },
    category: 'freshwater',
    wikiTitle: 'Freshwater pearl mussel',
    description: {
      en: 'The freshwater pearl mussel is one of the longest-lived invertebrates on Earth, with individuals known to live for more than a century. It inhabits cool, clean, fast-flowing rivers in Europe and north-eastern North America, and its larvae must spend months on the gills of young salmon or trout. Centuries of pearl hunting, pollution and river damage have made it one of the most endangered freshwater animals in Europe.',
      bn: 'ইউরোপীয় মুক্তা ঝিনুক পৃথিবীর সবচেয়ে দীর্ঘজীবী অমেরুদণ্ডী প্রাণীদের একটি; কোনো কোনো ঝিনুক এক শতাব্দীরও বেশি বাঁচে। এরা ইউরোপ ও উত্তর-পূর্ব উত্তর আমেরিকার ঠান্ডা, পরিষ্কার ও খরস্রোতা নদীতে থাকে, আর এদের লার্ভাকে কয়েক মাস স্যামন বা ট্রাউট মাছের ফুলকায় কাটাতে হয়। শত শত বছরের মুক্তা আহরণ, দূষণ ও নদীর ক্ষতির ফলে এটি এখন ইউরোপের সবচেয়ে বিপন্ন মিঠা পানির প্রাণীদের একটি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Mollusca',
      class: 'Bivalvia',
      order: 'Unionida',
      family: 'Margaritiferidae',
      genus: 'Margaritifera',
      species: 'M. margaritifera',
    },
    physical: {
      size: { en: 'Shell up to about 12–15 cm long', bn: 'খোলস প্রায় ১২–১৫ সেমি পর্যন্ত লম্বা' },
      weight: { en: 'Up to around 200 g including shell', bn: 'খোলসসহ প্রায় ২০০ গ্রাম পর্যন্ত' },
      lifespan: { en: 'Commonly 80–100+ years; some northern populations exceed 200 years', bn: 'সাধারণত ৮০–১০০ বছরের বেশি; উত্তরের কিছু জনগোষ্ঠীতে ২০০ বছরও ছাড়িয়ে যায়' },
      features: {
        en: [
          'Thick, kidney-shaped dark brown to black shell',
          'Iridescent nacre inside that occasionally forms natural pearls',
          'Growth rings on the shell can be counted to estimate age',
        ],
        bn: [
          'পুরু, কিডনি আকৃতির গাঢ় বাদামি থেকে কালো খোলস',
          'ভেতরে রংধনুর মতো ঝলমলে ন্যাকার, যাতে কখনো কখনো প্রাকৃতিক মুক্তা তৈরি হয়',
          'খোলসের বৃদ্ধিবলয় গুনে বয়স আন্দাজ করা যায়',
        ],
      },
    },
    habitat: {
      en: 'Cool, clean, well-oxygenated rivers and streams with stable gravel and sand beds',
      bn: 'স্থির নুড়ি ও বালুর তলদেশসহ ঠান্ডা, পরিষ্কার ও অক্সিজেনসমৃদ্ধ নদী ও ছড়া',
    },
    habitats: ['rivers-lakes', 'temperate-forest'],
    regions: ['europe', 'north-america'],
    distribution: {
      en: 'Northern and western Europe from Spain and Ireland to north-west Russia, and north-eastern North America.',
      bn: 'স্পেন ও আয়ারল্যান্ড থেকে উত্তর-পশ্চিম রাশিয়া পর্যন্ত উত্তর ও পশ্চিম ইউরোপ এবং উত্তর-পূর্ব উত্তর আমেরিকা।',
    },
    climate: { en: 'Cool temperate to boreal', bn: 'শীতল নাতিশীতোষ্ণ থেকে উপমেরু (বোরিয়াল) জলবায়ু' },
    diet: {
      en: 'Filter feeder — fine organic particles, bacteria and plankton',
      bn: 'ছাঁকনিভোজী — সূক্ষ্ম জৈব কণা, ব্যাকটেরিয়া ও প্ল্যাংকটন খায়',
    },
    ecologicalRole: {
      en: 'Dense beds filter river water and stabilise the riverbed; its presence indicates very high water quality.',
      bn: 'ঘন ঝিনুকের স্তর নদীর পানি ছেঁকে পরিষ্কার রাখে ও তলদেশ স্থিতিশীল করে; এর উপস্থিতি অত্যন্ত ভালো পানির মানের নির্দেশক।',
    },
    behavior: {
      en: 'Adults stay almost motionless, half-buried in gravel; larvae clamp onto salmon or trout gills for up to a year before dropping off to settle.',
      bn: 'প্রাপ্তবয়স্করা নুড়ির মধ্যে অর্ধেক পুঁতে প্রায় নিশ্চল থাকে; লার্ভা স্যামন বা ট্রাউটের ফুলকায় প্রায় এক বছর পর্যন্ত আটকে থেকে পরে খসে পড়ে তলায় বসতি গড়ে।',
    },
    range: {
      native: [
        [57.5, -4.5],
        [54.0, -9.0],
        [64.0, 20.0],
        [61.5, 10.0],
        [66.5, 33.0],
        [46.5, -66.5],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Siltation and nutrient pollution of rivers', 'Decline of host salmon and trout', 'Historical and illegal pearl fishing'],
        bn: ['নদীতে পলি জমা ও পুষ্টি-দূষণ', 'আশ্রয়দাতা স্যামন ও ট্রাউট মাছ কমে যাওয়া', 'অতীতের ও বর্তমানের অবৈধ মুক্তা আহরণ'],
      },
      initiatives: {
        en: ['Captive breeding programmes in several European countries', 'Legal protection under the EU Habitats Directive'],
        bn: ['ইউরোপের কয়েকটি দেশে আবদ্ধ প্রজনন কর্মসূচি', 'ইইউ হ্যাবিট্যাটস ডিরেক্টিভের আওতায় আইনি সুরক্ষা'],
      },
    },
    facts: {
      en: [
        'Only about one mussel in a thousand contains a pearl.',
        'Many surviving populations are “functionally extinct” — old adults with no young recruiting.',
      ],
      bn: [
        'প্রায় এক হাজার ঝিনুকের মধ্যে মাত্র একটিতে মুক্তা পাওয়া যায়।',
        'টিকে থাকা অনেক জনগোষ্ঠী কার্যত বিলুপ্ত — শুধু বুড়ো ঝিনুক আছে, নতুন বাচ্চা আর জন্মাচ্ছে না।',
      ],
    },
    related: ['lamellidens-freshwater-mussel', 'zebra-mussel'],
  },
  {
    id: 'zebra-mussel',
    commonName: { en: 'Zebra Mussel', bn: 'জেব্রা ঝিনুক' },
    scientificName: 'Dreissena polymorpha',
    altNames: {
      en: ['Zebra Clam'],
      bn: ['ডোরাকাটা ঝিনুক'],
    },
    category: 'freshwater',
    wikiTitle: 'Zebra mussel',
    description: {
      en: 'The zebra mussel is a small, striped freshwater mussel from the Ponto-Caspian region that has become a notorious invader of lakes and rivers in Europe and North America. It attaches in vast numbers to any hard surface using sticky byssal threads, clogging water intake pipes and smothering native mussels. Its arrival in the North American Great Lakes in the late 1980s caused billions of dollars of damage.',
      bn: 'জেব্রা ঝিনুক কৃষ্ণসাগর ও কাস্পিয়ান অঞ্চলের একটি ছোট, ডোরাকাটা মিঠা পানির ঝিনুক, যা ইউরোপ ও উত্তর আমেরিকার হ্রদ ও নদীতে কুখ্যাত আগ্রাসী প্রজাতিতে পরিণত হয়েছে। আঠালো বাইসাল সুতা দিয়ে এরা যেকোনো শক্ত পৃষ্ঠে লাখে লাখে লেগে থাকে; ফলে পানির পাইপ বন্ধ হয়ে যায় এবং দেশি ঝিনুক চাপা পড়ে মারা যায়। ১৯৮০-এর দশকের শেষে উত্তর আমেরিকার গ্রেট লেকসে এর আগমনে শত শত কোটি ডলারের ক্ষতি হয়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Mollusca',
      class: 'Bivalvia',
      order: 'Myida',
      family: 'Dreissenidae',
      genus: 'Dreissena',
      species: 'D. polymorpha',
    },
    physical: {
      size: { en: 'Usually 1.5–3 cm long; rarely up to 5 cm', bn: 'সাধারণত ১.৫–৩ সেমি লম্বা; কদাচিৎ ৫ সেমি পর্যন্ত' },
      weight: { en: 'A few grams', bn: 'কয়েক গ্রাম মাত্র' },
      lifespan: { en: 'Typically 2–5 years', bn: 'সাধারণত ২–৫ বছর' },
      features: {
        en: [
          'D-shaped shell with zigzag dark and light stripes',
          'Flat underside that lets it sit firmly on surfaces',
          'Tough byssal threads for anchoring',
        ],
        bn: [
          'ইংরেজি D অক্ষরের মতো খোলসে আঁকাবাঁকা গাঢ় ও হালকা ডোরা',
          'চ্যাপ্টা নিচের দিক, যা দিয়ে পৃষ্ঠে শক্তভাবে বসে থাকে',
          'আটকে থাকার জন্য মজবুত বাইসাল সুতা',
        ],
      },
    },
    habitat: {
      en: 'Lakes, reservoirs, rivers and canals with hard surfaces to attach to',
      bn: 'আটকে থাকার মতো শক্ত পৃষ্ঠযুক্ত হ্রদ, জলাধার, নদী ও খাল',
    },
    habitats: ['rivers-lakes'],
    regions: ['europe', 'north-america'],
    distribution: {
      en: 'Native to rivers draining into the Black and Caspian seas; introduced across most of Europe and the Great Lakes and Mississippi basin of North America.',
      bn: 'কৃষ্ণসাগর ও কাস্পিয়ান সাগরে পড়া নদীগুলোর স্থানীয় প্রজাতি; ইউরোপের বেশিরভাগ অঞ্চল এবং উত্তর আমেরিকার গ্রেট লেকস ও মিসিসিপি অববাহিকায় ছড়িয়ে পড়েছে।',
    },
    climate: { en: 'Temperate; tolerates cold winters', bn: 'নাতিশীতোষ্ণ; কনকনে শীত সহ্য করতে পারে' },
    diet: {
      en: 'Filter feeder — phytoplankton, small zooplankton and organic particles',
      bn: 'ছাঁকনিভোজী — উদ্ভিদকণা, ক্ষুদ্র প্রাণীকণা ও জৈব কণা খায়',
    },
    ecologicalRole: {
      en: 'Its intense filtering makes water clearer but strips plankton from the food web and can encourage toxic algal blooms.',
      bn: 'অতিমাত্রায় পানি ছাঁকার ফলে পানি স্বচ্ছ হয়, কিন্তু খাদ্যশৃঙ্খল থেকে প্ল্যাংকটন সরিয়ে নেয় এবং বিষাক্ত শৈবালের প্রাদুর্ভাব বাড়াতে পারে।',
    },
    behavior: {
      en: 'Forms dense colonies; a female can release hundreds of thousands of eggs a year, and free-swimming larvae drift widely in currents and boat water.',
      bn: 'ঘন উপনিবেশ গড়ে তোলে; একটি স্ত্রী ঝিনুক বছরে কয়েক লাখ ডিম ছাড়তে পারে, আর ভাসমান লার্ভা স্রোত ও নৌকার পানির সঙ্গে বহুদূর ছড়ায়।',
    },
    range: {
      native: [
        [46.5, 30.7],
        [47.2, 39.7],
        [46.3, 48.0],
        [45.2, 29.5],
        [48.5, 44.5],
      ],
      introduced: [
        [42.2, -81.2],
        [43.7, -79.4],
        [52.5, 13.4],
        [52.4, 5.2],
        [53.5, -8.0],
        [38.6, -90.2],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; it is a serious invasive species', 'Native Ponto-Caspian populations affected by pollution and dams'],
        bn: ['এটি বিপন্ন নয়; বরং এটি গুরুতর আগ্রাসী প্রজাতি', 'স্থানীয় আবাসে দূষণ ও বাঁধের কারণে কিছু জনগোষ্ঠী ক্ষতিগ্রস্ত'],
      },
      initiatives: {
        en: ['“Clean, Drain, Dry” campaigns for boats and fishing gear', 'Boat inspection stations to stop spread to new lakes'],
        bn: ['নৌকা ও মাছ ধরার সরঞ্জামের জন্য “পরিষ্কার করো, পানি ফেলো, শুকাও” প্রচারণা', 'নতুন হ্রদে বিস্তার ঠেকাতে নৌকা পরিদর্শন কেন্দ্র'],
      },
    },
    facts: {
      en: [
        'It reached the Great Lakes in ship ballast water, discovered in 1988.',
        'Colonies can reach tens of thousands of mussels per square metre.',
      ],
      bn: [
        'জাহাজের ব্যালাস্ট পানির মাধ্যমে এটি গ্রেট লেকসে পৌঁছায়; ১৯৮৮ সালে প্রথম শনাক্ত হয়।',
        'উপনিবেশে প্রতি বর্গমিটারে কয়েক হাজার থেকে কয়েক দশ হাজার ঝিনুক থাকতে পারে।',
      ],
    },
    related: ['lamellidens-freshwater-mussel', 'freshwater-pearl-mussel', 'golden-apple-snail'],
  },
  {
    id: 'red-swamp-crayfish',
    commonName: { en: 'Red Swamp Crayfish', bn: 'লাল জলাভূমির ক্রেফিশ' },
    scientificName: 'Procambarus clarkii',
    altNames: {
      en: ['Louisiana Crayfish', 'Crawfish', 'Crawdad', 'Mudbug'],
      bn: ['রেড সোয়াম্প ক্রেফিশ', 'লুইজিয়ানা ক্রেফিশ', 'ক্রেফিশ', 'মিঠা পানির গলদা'],
    },
    category: 'freshwater',
    wikiTitle: 'Procambarus clarkii',
    description: {
      en: 'The red swamp crayfish is a hardy, bright red freshwater crustacean native to the southern United States and north-eastern Mexico. It is farmed on a huge scale for food, especially in Louisiana and China, but escaped animals have become one of the world’s most widespread invasive freshwater species. It burrows into banks, devours plants and small animals, and spreads the deadly crayfish plague to native crayfish.',
      bn: 'রেড সোয়াম্প ক্রেফিশ দক্ষিণ যুক্তরাষ্ট্র ও উত্তর-পূর্ব মেক্সিকোর একটি কষ্টসহিষ্ণু, উজ্জ্বল লাল রঙের মিঠা পানির ক্রাস্টেশিয়ান, দেখতে অনেকটা ছোট গলদা চিংড়ির মতো। খাবার হিসেবে বিশেষ করে লুইজিয়ানা ও চীনে এর ব্যাপক চাষ হয়, কিন্তু খামার থেকে পালানো ক্রেফিশ বিশ্বের সবচেয়ে বিস্তৃত আগ্রাসী মিঠা পানির প্রজাতিগুলোর একটি হয়ে উঠেছে। এরা পাড়ে গর্ত খোঁড়ে, জলজ উদ্ভিদ ও ছোট প্রাণী সাবাড় করে এবং স্থানীয় ক্রেফিশের মধ্যে প্রাণঘাতী ক্রেফিশ প্লেগ ছড়ায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Malacostraca',
      order: 'Decapoda',
      family: 'Cambaridae',
      genus: 'Procambarus',
      species: 'P. clarkii',
    },
    physical: {
      size: { en: 'Usually 5.5–12 cm long', bn: 'সাধারণত ৫.৫–১২ সেমি লম্বা' },
      weight: { en: 'About 20–50 g', bn: 'প্রায় ২০–৫০ গ্রাম' },
      lifespan: { en: 'Usually 1–2 years; up to about 5 years', bn: 'সাধারণত ১–২ বছর; প্রায় ৫ বছর পর্যন্ত' },
      features: {
        en: [
          'Dark red body with raised bright red spots on the claws',
          'Large, rough pincers used for defence and feeding',
          'Tail fan for rapid backward escape swimming',
        ],
        bn: [
          'গাঢ় লাল দেহ, দাঁড়ার ওপর উঁচু উজ্জ্বল লাল ফোঁটা',
          'আত্মরক্ষা ও খাবার ধরার জন্য বড়, খসখসে দাঁড়া',
          'দ্রুত পেছনের দিকে পালানোর জন্য পাখার মতো লেজ',
        ],
      },
    },
    habitat: {
      en: 'Swamps, marshes, ditches, rice fields, ponds and slow streams',
      bn: 'জলাভূমি, জলা, নালা, ধানখেত, পুকুর ও ধীরগতির ছড়া',
    },
    habitats: ['wetland', 'rivers-lakes', 'urban-farmland'],
    regions: ['north-america', 'europe', 'east-asia', 'africa'],
    distribution: {
      en: 'Native to the Gulf Coast of the USA and north-eastern Mexico; introduced to Europe, China, Japan, Africa and parts of South America.',
      bn: 'যুক্তরাষ্ট্রের উপসাগরীয় উপকূল ও উত্তর-পূর্ব মেক্সিকোর স্থানীয়; ইউরোপ, চীন, জাপান, আফ্রিকা ও দক্ষিণ আমেরিকার কিছু অংশে ছড়িয়েছে।',
    },
    climate: { en: 'Warm temperate to subtropical; tolerates drought by burrowing', bn: 'উষ্ণ নাতিশীতোষ্ণ থেকে উপক্রান্তীয়; গর্তে ঢুকে খরা সহ্য করে' },
    diet: {
      en: 'Omnivore — aquatic plants, detritus, snails, insects, tadpoles and fish eggs',
      bn: 'সর্বভুক — জলজ উদ্ভিদ, পচা জৈব পদার্থ, শামুক, পোকামাকড়, ব্যাঙাচি ও মাছের ডিম',
    },
    ecologicalRole: {
      en: 'Important prey in its native swamps, but an ecosystem engineer and destructive predator where introduced.',
      bn: 'নিজ আবাসে গুরুত্বপূর্ণ শিকার-প্রাণী, কিন্তু নতুন জায়গায় বাস্তুতন্ত্র বদলে দেওয়া ধ্বংসাত্মক শিকারি।',
    },
    behavior: {
      en: 'Digs deep burrows to survive dry spells, is aggressive toward rivals and can walk overland between water bodies.',
      bn: 'শুকনো সময় টিকে থাকতে গভীর গর্ত খোঁড়ে, প্রতিদ্বন্দ্বীর প্রতি আগ্রাসী এবং এক জলাশয় থেকে আরেক জলাশয়ে ডাঙা দিয়ে হেঁটে যেতে পারে।',
    },
    range: {
      native: [
        [30.2, -92.0],
        [30.5, -91.2],
        [29.8, -95.4],
        [32.3, -90.2],
        [25.7, -100.3],
      ],
      introduced: [
        [30.6, 114.3],
        [31.2, 121.5],
        [35.7, 139.7],
        [37.2, -6.0],
        [-0.8, 36.4],
        [30.0, 31.2],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; it is a major global invader', 'Local native populations affected by wetland loss'],
        bn: ['এটি বিপন্ন নয়; বরং বিশ্বব্যাপী বড় আগ্রাসী প্রজাতি', 'নিজ আবাসে জলাভূমি হারানোয় কিছু স্থানীয় জনগোষ্ঠী ক্ষতিগ্রস্ত'],
      },
      initiatives: {
        en: ['Listed as an invasive species of concern in the European Union, banning trade and keeping', 'Trapping and control programmes in invaded wetlands'],
        bn: ['ইউরোপীয় ইউনিয়নে উদ্বেগজনক আগ্রাসী প্রজাতি হিসেবে তালিকাভুক্ত; কেনাবেচা ও পালন নিষিদ্ধ', 'আক্রান্ত জলাভূমিতে ফাঁদ পেতে নিয়ন্ত্রণ কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'China is now the world’s largest producer, where it is popular as “xiaolongxia” (little lobster).',
        'It turns bright red when cooked, like shrimp.',
      ],
      bn: [
        'বর্তমানে চীন বিশ্বের সবচেয়ে বড় উৎপাদক দেশ; সেখানে এটি “শিয়াওলংশিয়া” (ছোট লবস্টার) নামে জনপ্রিয় খাবার।',
        'চিংড়ির মতো রান্না করলে এর রং টকটকে লাল হয়ে যায়।',
      ],
    },
    related: ['giant-freshwater-prawn', 'golden-apple-snail', 'zebra-mussel'],
  },
  {
    id: 'medicinal-leech',
    commonName: { en: 'European Medicinal Leech', bn: 'ঔষধি জোঁক' },
    scientificName: 'Hirudo medicinalis',
    altNames: {
      en: ['Medicinal Leech', 'Leech'],
      bn: ['জোঁক', 'ইউরোপীয় জোঁক'],
    },
    category: 'freshwater',
    wikiTitle: 'Hirudo medicinalis',
    description: {
      en: 'The European medicinal leech is a blood-feeding freshwater annelid that has been used in medicine for thousands of years. Its saliva contains hirudin, a powerful anticoagulant, along with anaesthetic and vessel-widening compounds. Once collected so heavily for bloodletting that wild populations crashed, it is used today under medical supervision to restore blood flow after reconstructive and microsurgery.',
      bn: 'ইউরোপীয় ঔষধি জোঁক রক্তচোষা মিঠা পানির অঙ্গুরীমাল প্রাণী, যা হাজার হাজার বছর ধরে চিকিৎসায় ব্যবহৃত হয়ে আসছে। এর লালায় থাকে হিরুডিন নামের শক্তিশালী রক্ত-জমাট-রোধী উপাদান, সঙ্গে অবশকারী ও রক্তনালি প্রসারক উপাদানও। একসময় রক্তমোক্ষণের জন্য এত বেশি ধরা হতো যে বন্য জনসংখ্যা মারাত্মকভাবে কমে যায়; আজ চিকিৎসকের তত্ত্বাবধানে পুনর্গঠনমূলক ও মাইক্রোসার্জারির পর রক্তপ্রবাহ ফেরাতে এটি ব্যবহার করা হয়। বাংলাদেশের খাল-বিলের পরিচিত জোঁক অবশ্য ভিন্ন প্রজাতির।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Annelida',
      class: 'Clitellata',
      order: 'Arhynchobdellida',
      family: 'Hirudinidae',
      genus: 'Hirudo',
      species: 'H. medicinalis',
    },
    physical: {
      size: { en: 'Up to about 10–20 cm when fully extended', bn: 'পুরোপুরি প্রসারিত অবস্থায় প্রায় ১০–২০ সেমি পর্যন্ত' },
      weight: { en: 'Roughly 1–5 g unfed; several times heavier after a blood meal', bn: 'না খাওয়া অবস্থায় মোটামুটি ১–৫ গ্রাম; রক্ত খাওয়ার পর কয়েক গুণ ভারী' },
      lifespan: { en: 'Several years; long-lived for an invertebrate', bn: 'কয়েক বছর; অমেরুদণ্ডী প্রাণী হিসেবে দীর্ঘজীবী' },
      features: {
        en: [
          'Olive-green to brown body with reddish or yellow stripes along the back',
          'Suckers at both ends of the body',
          'Three jaws with fine teeth that leave a Y-shaped bite',
        ],
        bn: [
          'জলপাই-সবুজ থেকে বাদামি দেহ, পিঠ বরাবর লালচে বা হলুদ ডোরা',
          'দেহের দুই প্রান্তেই চোষক',
          'সূক্ষ্ম দাঁতযুক্ত তিনটি চোয়াল, কামড়ে ইংরেজি Y আকারের দাগ পড়ে',
        ],
      },
    },
    habitat: {
      en: 'Weedy ponds, marshes, ditches and lake margins with warm, shallow water',
      bn: 'আগাছাভরা পুকুর, জলা, নালা ও হ্রদের অগভীর উষ্ণ কিনারা',
    },
    habitats: ['wetland', 'rivers-lakes'],
    regions: ['europe'],
    distribution: {
      en: 'Europe from Britain and France east to the Urals and the Caucasus region.',
      bn: 'ব্রিটেন ও ফ্রান্স থেকে পূর্বে উরাল পর্বত ও ককেশাস অঞ্চল পর্যন্ত ইউরোপ।',
    },
    climate: { en: 'Temperate', bn: 'নাতিশীতোষ্ণ' },
    diet: {
      en: 'Blood-feeder — adults drink blood of mammals, amphibians and fish; young feed mainly on frogs and tadpoles',
      bn: 'রক্তভোজী — প্রাপ্তবয়স্করা স্তন্যপায়ী, উভচর ও মাছের রক্ত খায়; বাচ্চারা প্রধানত ব্যাঙ ও ব্যাঙাচির রক্ত খায়',
    },
    ecologicalRole: {
      en: 'A specialised parasite and in turn prey for fish and wading birds.',
      bn: 'একটি বিশেষায়িত পরজীবী এবং নিজেও মাছ ও জলচর পাখির খাদ্য।',
    },
    behavior: {
      en: 'Senses movement and warmth in water and swims toward potential hosts; after one large meal it can go many months without feeding.',
      bn: 'পানিতে নড়াচড়া ও উষ্ণতা টের পেয়ে আশ্রয়দাতার দিকে সাঁতরে যায়; একবার পেট ভরে রক্ত খেলে বহু মাস না খেয়ে থাকতে পারে।',
    },
    range: {
      native: [
        [47.0, 2.5],
        [51.0, 10.0],
        [52.0, 19.0],
        [47.2, 19.5],
        [49.0, 32.0],
        [50.8, -1.5],
      ],
    },
    conservation: {
      status: 'NT',
      trend: 'unknown',
      threats: {
        en: ['Historic over-collection for medicine', 'Drainage of wetlands and ponds', 'Loss of amphibian hosts'],
        bn: ['অতীতে চিকিৎসার জন্য অতিরিক্ত আহরণ', 'জলাভূমি ও পুকুর শুকিয়ে ফেলা', 'আশ্রয়দাতা উভচর প্রাণী কমে যাওয়া'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II to regulate international trade', 'Legally protected in several European countries'],
        bn: ['আন্তর্জাতিক বাণিজ্য নিয়ন্ত্রণে সাইটিস পরিশিষ্ট-২-এ তালিকাভুক্ত', 'ইউরোপের কয়েকটি দেশে আইনত সুরক্ষিত'],
      },
    },
    facts: {
      en: [
        'In 2004 the US FDA cleared medicinal leeches as a medical device.',
        'A single feed can take several times the leech’s own body weight in blood.',
        'Caution: leech therapy should only be done by trained medical staff because of infection and bleeding risks.',
      ],
      bn: [
        '২০০৪ সালে মার্কিন এফডিএ ঔষধি জোঁককে চিকিৎসা-সরঞ্জাম হিসেবে অনুমোদন দেয়।',
        'একবারে নিজের দেহের ওজনের কয়েক গুণ রক্ত খেতে পারে।',
        'সতর্কতা: সংক্রমণ ও রক্তক্ষরণের ঝুঁকির কারণে জোঁক-চিকিৎসা কেবল প্রশিক্ষিত চিকিৎসাকর্মীর মাধ্যমেই করা উচিত।',
      ],
    },
    related: ['freshwater-pearl-mussel', 'indian-bullfrog'],
  },
];
