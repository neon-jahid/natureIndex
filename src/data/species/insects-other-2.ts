import type { Species } from '@/types';

export const insectsOther2: Species[] = [
  {
    id: 'goliath-beetle',
    commonName: { en: 'Goliath Beetle', bn: 'গোলিয়াথ গুবরে পোকা' },
    scientificName: 'Goliathus goliatus',
    altNames: {
      en: ['Goliathus', 'African Goliath Beetle'],
      bn: ['গোলিয়াথ বিটল', 'আফ্রিকার দৈত্য গুবরে পোকা'],
    },
    category: 'insects',
    wikiTitle: 'Goliathus goliatus',
    description: {
      en: 'The Goliath beetle is a giant flower chafer from the rainforests of equatorial Africa and one of the heaviest insects in the world. Adults have bold black-and-white patterned backs, and males carry a Y-shaped horn used in fights. Its larvae grow even heavier than the adults before they pupate.',
      bn: 'গোলিয়াথ গুবরে পোকা নিরক্ষীয় আফ্রিকার রেইনফরেস্টের একটি দৈত্যাকার ফ্লাওয়ার চেফার এবং পৃথিবীর সবচেয়ে ভারী পতঙ্গগুলোর একটি। পূর্ণবয়স্ক পোকার পিঠে সাদা-কালো নকশা থাকে, আর পুরুষের মাথায় থাকে লড়াইয়ে ব্যবহৃত ইংরেজি Y অক্ষরের মতো শিং। পিউপা হওয়ার আগে এর লার্ভা পূর্ণবয়স্ক পোকার চেয়েও ভারী হয়ে ওঠে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Coleoptera',
      family: 'Scarabaeidae',
      genus: 'Goliathus',
      species: 'G. goliatus',
    },
    physical: {
      size: { en: 'Males about 6–11 cm long; females smaller', bn: 'পুরুষ প্রায় ৬–১১ সেমি লম্বা; স্ত্রী ছোট' },
      weight: {
        en: 'Adults roughly 50 g or less; larvae can reach about 100 g',
        bn: 'পূর্ণবয়স্ক মোটামুটি ৫০ গ্রাম বা তার কম; লার্ভা প্রায় ১০০ গ্রাম পর্যন্ত হতে পারে',
      },
      lifespan: {
        en: 'Larval stage several months; adults live a few months',
        bn: 'লার্ভা দশা কয়েক মাস; পূর্ণবয়স্ক কয়েক মাস বাঁচে',
      },
      features: {
        en: [
          'Black-and-white or cream patterned wing cases and thorax',
          'Males have a Y-shaped head horn; females have a wedge-shaped head for digging',
          'Strong clawed legs for gripping tree bark',
        ],
        bn: [
          'ডানার খোলস ও বক্ষে সাদা-কালো বা ক্রিম রঙের নকশা',
          'পুরুষের মাথায় Y আকৃতির শিং; স্ত্রীর মাথা মাটি খোঁড়ার উপযোগী কীলকের মতো',
          'গাছের বাকল আঁকড়ে ধরার জন্য নখরযুক্ত শক্ত পা',
        ],
      },
    },
    habitat: { en: 'Tropical rainforests and forest edges', bn: 'ক্রান্তীয় রেইনফরেস্ট ও বনের প্রান্ত' },
    habitats: ['tropical-forest'],
    regions: ['africa'],
    distribution: {
      en: 'Equatorial Africa from Nigeria and Cameroon through Gabon and the Congo Basin to Uganda and western Kenya.',
      bn: 'নিরক্ষীয় আফ্রিকা — নাইজেরিয়া ও ক্যামেরুন থেকে গ্যাবন ও কঙ্গো অববাহিকা হয়ে উগান্ডা ও পশ্চিম কেনিয়া পর্যন্ত।',
    },
    climate: { en: 'Hot, humid equatorial', bn: 'উষ্ণ ও আর্দ্র নিরক্ষীয় জলবায়ু' },
    diet: {
      en: 'Adults feed on tree sap and ripe fruit; larvae eat decaying plant matter and need a high-protein diet',
      bn: 'পূর্ণবয়স্করা গাছের রস ও পাকা ফল খায়; লার্ভা পচা উদ্ভিদাংশ খায় এবং এদের প্রোটিনসমৃদ্ধ খাবার দরকার হয়',
    },
    ecologicalRole: {
      en: 'Its larvae help break down dead plant material and recycle nutrients in the forest soil.',
      bn: 'এর লার্ভা মরা উদ্ভিদাংশ ভেঙে বনের মাটিতে পুষ্টি ফিরিয়ে দিতে সাহায্য করে।',
    },
    behavior: {
      en: 'Active by day in the canopy; males wrestle rivals with their horns and are strong fliers despite their size.',
      bn: 'দিনের বেলা গাছের উঁচু ডালে সক্রিয় থাকে; পুরুষরা শিং দিয়ে প্রতিদ্বন্দ্বীর সঙ্গে লড়াই করে, আর এত বড় হয়েও ভালো উড়তে পারে।',
    },
    range: {
      native: [
        [6.5, 6.0],
        [3.9, 11.5],
        [-0.8, 11.6],
        [-1.0, 23.0],
        [0.5, 30.5],
        [0.3, 34.8],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Tropical deforestation', 'Collection for the insect trade'],
        bn: ['ক্রান্তীয় বন উজাড়', 'পতঙ্গ বাণিজ্যের জন্য সংগ্রহ'],
      },
      initiatives: {
        en: ['Captive breeding by hobbyists and zoos', 'Protected rainforest areas in central Africa'],
        bn: ['শৌখিন পালনকারী ও চিড়িয়াখানায় প্রজনন', 'মধ্য আফ্রিকার সংরক্ষিত রেইনফরেস্ট'],
      },
    },
    facts: {
      en: [
        'The genus is named after Goliath, the giant from the Bible story.',
        'Goliath beetle larvae are among the heaviest insect larvae known.',
      ],
      bn: [
        'বাইবেলের দানব গোলিয়াথের নাম থেকে এর গণের নামকরণ হয়েছে।',
        'গোলিয়াথ গুবরে পোকার লার্ভা জানা সবচেয়ে ভারী পতঙ্গ-লার্ভাগুলোর একটি।',
      ],
    },
    related: ['hercules-beetle', 'european-stag-beetle', 'sacred-scarab'],
  },
  {
    id: 'hercules-beetle',
    commonName: { en: 'Hercules Beetle', bn: 'হারকিউলিস গুবরে পোকা' },
    scientificName: 'Dynastes hercules',
    altNames: {
      en: ['Rhinoceros Beetle', 'Hercules Rhinoceros Beetle'],
      bn: ['গণ্ডার পোকা', 'হারকিউলিস বিটল'],
    },
    category: 'insects',
    wikiTitle: 'Dynastes hercules',
    description: {
      en: 'The Hercules beetle is a rhinoceros beetle from the rainforests of Central and South America and the Lesser Antilles, and one of the longest beetles in the world. Males carry a huge pair of horns — one from the head and one from the thorax — used like pincers to lift and throw rivals. Despite its fearsome look it is harmless to people.',
      bn: 'হারকিউলিস গুবরে পোকা মধ্য ও দক্ষিণ আমেরিকা এবং ক্যারিবিয়ানের লেসার অ্যান্টিলিস দ্বীপপুঞ্জের রেইনফরেস্টে বাস করা একটি গণ্ডার-গুবরে পোকা, যা পৃথিবীর সবচেয়ে লম্বা গুবরে পোকাগুলোর একটি। পুরুষের মাথা ও বক্ষ থেকে বেরোনো এক জোড়া বিশাল শিং থাকে, যা চিমটার মতো ব্যবহার করে প্রতিদ্বন্দ্বীকে তুলে ছুড়ে ফেলে। ভয়ংকর চেহারা হলেও মানুষের জন্য এটি সম্পূর্ণ নিরীহ।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Coleoptera',
      family: 'Scarabaeidae',
      genus: 'Dynastes',
      species: 'D. hercules',
    },
    physical: {
      size: {
        en: 'Males up to about 17 cm including the horn; females about 5–8 cm',
        bn: 'শিংসহ পুরুষ প্রায় ১৭ সেমি পর্যন্ত; স্ত্রী প্রায় ৫–৮ সেমি',
      },
      weight: { en: 'Adults several tens of grams; larvae can exceed 100 g', bn: 'পূর্ণবয়স্ক কয়েক দশ গ্রাম; লার্ভা ১০০ গ্রামেরও বেশি হতে পারে' },
      lifespan: {
        en: 'About 1–2 years as a larva; adults several months to a year',
        bn: 'লার্ভা হিসেবে প্রায় ১–২ বছর; পূর্ণবয়স্ক কয়েক মাস থেকে এক বছর',
      },
      features: {
        en: [
          'Males have a long thoracic horn and a shorter upcurved head horn',
          'Wing cases change from olive-yellow to black with humidity',
          'Females are hornless with rough, hairy wing cases',
        ],
        bn: [
          'পুরুষের বক্ষ থেকে লম্বা শিং এবং মাথা থেকে ওপরে বাঁকা ছোট শিং',
          'আর্দ্রতা অনুযায়ী ডানার খোলসের রং জলপাই-হলুদ থেকে কালো হয়ে যায়',
          'স্ত্রী পোকার শিং নেই, ডানার খোলস খসখসে ও লোমশ',
        ],
      },
    },
    habitat: { en: 'Tropical rainforests and montane forests', bn: 'ক্রান্তীয় রেইনফরেস্ট ও পাহাড়ি বন' },
    habitats: ['tropical-forest', 'mountain'],
    regions: ['north-america', 'south-america'],
    distribution: {
      en: 'Southern Mexico and Central America south to Bolivia and the Amazon, and the Lesser Antilles islands such as Guadeloupe and Dominica.',
      bn: 'দক্ষিণ মেক্সিকো ও মধ্য আমেরিকা থেকে দক্ষিণে বলিভিয়া ও আমাজন, এবং গুয়াদলুপ ও ডমিনিকার মতো লেসার অ্যান্টিলিস দ্বীপ।',
    },
    climate: { en: 'Warm, humid tropical', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয়' },
    diet: {
      en: 'Adults eat fresh and rotting fruit; larvae feed on decaying wood',
      bn: 'পূর্ণবয়স্করা তাজা ও পচা ফল খায়; লার্ভা পচা কাঠ খায়',
    },
    ecologicalRole: {
      en: 'Its wood-eating larvae are important decomposers of fallen trees.',
      bn: 'কাঠখেকো লার্ভা পড়ে থাকা গাছ পচিয়ে মাটিতে মিশিয়ে দেওয়ার কাজে গুরুত্বপূর্ণ ভূমিকা রাখে।',
    },
    behavior: {
      en: 'Nocturnal; males fight over females and feeding sites, and adults may hiss when disturbed.',
      bn: 'নিশাচর; স্ত্রী পোকা ও খাবারের জায়গা নিয়ে পুরুষরা লড়াই করে, আর বিরক্ত হলে হিসহিস শব্দ করতে পারে।',
    },
    range: {
      native: [
        [16.2, -61.6],
        [15.4, -61.4],
        [10.0, -84.0],
        [4.6, -74.1],
        [-3.5, -62.0],
        [-16.5, -64.5],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Deforestation', 'Collection for the pet and specimen trade'],
        bn: ['বন উজাড়', 'পোষা প্রাণী ও নমুনা বাণিজ্যের জন্য সংগ্রহ'],
      },
      initiatives: {
        en: ['Captive breeding reduces wild collection', 'Rainforest protected areas'],
        bn: ['আবদ্ধ অবস্থায় প্রজনন করায় বন থেকে সংগ্রহ কমছে', 'সংরক্ষিত রেইনফরেস্ট এলাকা'],
      },
    },
    facts: {
      en: [
        'It is named after Hercules, the strongman hero of Greek mythology.',
        'Its colour change from yellow to black is caused by moisture filling a spongy layer in the wing cases.',
      ],
      bn: [
        'গ্রিক পুরাণের মহাশক্তিধর বীর হারকিউলিসের নামে এর নামকরণ।',
        'ডানার খোলসের স্পঞ্জের মতো স্তরে আর্দ্রতা ঢুকলে এর রং হলুদ থেকে কালো হয়ে যায়।',
      ],
    },
    related: ['goliath-beetle', 'european-stag-beetle'],
  },
  {
    id: 'european-stag-beetle',
    commonName: { en: 'European Stag Beetle', bn: 'ইউরোপীয় স্ট্যাগ বিটল' },
    scientificName: 'Lucanus cervus',
    altNames: {
      en: ['Stag Beetle'],
      bn: ['হরিণ-শিং গুবরে পোকা'],
    },
    category: 'insects',
    wikiTitle: 'Lucanus cervus',
    description: {
      en: 'The European stag beetle is one of Europe’s largest beetles, named for the males’ huge antler-like jaws. It spends most of its life as a grub inside rotting wood underground, emerging as an adult for only a few weeks in summer. It has declined in many countries and is protected under European law.',
      bn: 'ইউরোপীয় স্ট্যাগ বিটল ইউরোপের সবচেয়ে বড় গুবরে পোকাগুলোর একটি; পুরুষের হরিণের শিংয়ের মতো বিশাল চোয়াল থেকেই এর নাম। জীবনের বেশিরভাগ সময় এটি মাটির নিচে পচা কাঠের ভেতরে লার্ভা হিসেবে কাটায়, আর পূর্ণবয়স্ক হয়ে বেরিয়ে গ্রীষ্মে মাত্র কয়েক সপ্তাহ বাঁচে। অনেক দেশে এদের সংখ্যা কমে যাওয়ায় ইউরোপীয় আইনে এটি সংরক্ষিত।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Coleoptera',
      family: 'Lucanidae',
      genus: 'Lucanus',
      species: 'L. cervus',
    },
    physical: {
      size: { en: 'Males about 3.5–9 cm including jaws; females 3–5 cm', bn: 'চোয়ালসহ পুরুষ প্রায় ৩.৫–৯ সেমি; স্ত্রী ৩–৫ সেমি' },
      weight: { en: 'A few grams', bn: 'কয়েক গ্রাম' },
      lifespan: {
        en: 'Larvae 3–6 years in dead wood; adults only a few weeks',
        bn: 'মরা কাঠে লার্ভা ৩–৬ বছর; পূর্ণবয়স্ক মাত্র কয়েক সপ্তাহ',
      },
      features: {
        en: [
          'Males have reddish-brown, antler-like mandibles',
          'Shiny black head and thorax with chestnut wing cases',
          'Females have small but powerful jaws',
        ],
        bn: [
          'পুরুষের লালচে-বাদামি, হরিণের শিংয়ের মতো চোয়াল',
          'চকচকে কালো মাথা ও বক্ষ, বাদামি ডানার খোলস',
          'স্ত্রীর চোয়াল ছোট হলেও শক্তিশালী',
        ],
      },
    },
    habitat: {
      en: 'Old oak woodlands, parks, orchards and gardens with dead wood',
      bn: 'পুরোনো ওক বন, পার্ক, ফলের বাগান ও মরা কাঠ আছে এমন বাগান',
    },
    habitats: ['temperate-forest', 'urban-farmland'],
    regions: ['europe'],
    distribution: {
      en: 'Most of Europe from Spain and Britain to the Baltic, and east to Turkey and the Caucasus.',
      bn: 'স্পেন ও ব্রিটেন থেকে বাল্টিক অঞ্চল পর্যন্ত ইউরোপের বেশিরভাগ এলাকা, পূর্বে তুরস্ক ও ককেশাস পর্যন্ত।',
    },
    climate: { en: 'Temperate', bn: 'নাতিশীতোষ্ণ' },
    diet: {
      en: 'Larvae eat decaying wood; adults drink sap and fruit juices, using fat reserves from the larval stage',
      bn: 'লার্ভা পচা কাঠ খায়; পূর্ণবয়স্করা গাছের রস ও ফলের রস খায় এবং মূলত লার্ভা অবস্থায় জমানো চর্বির ওপর বাঁচে',
    },
    ecologicalRole: {
      en: 'A key decomposer of dead wood and an indicator of healthy, old woodland.',
      bn: 'মরা কাঠের গুরুত্বপূর্ণ বিয়োজক এবং সুস্থ, পুরোনো বনভূমির নির্দেশক প্রজাতি।',
    },
    behavior: {
      en: 'Males fly on warm summer evenings and wrestle rivals with their jaws, much like rutting deer.',
      bn: 'গ্রীষ্মের উষ্ণ সন্ধ্যায় পুরুষরা ওড়ে এবং প্রজনন মৌসুমের হরিণের মতো চোয়াল দিয়ে প্রতিদ্বন্দ্বীর সঙ্গে কুস্তি লড়ে।',
    },
    range: {
      native: [
        [51.3, -0.5],
        [48.8, 2.3],
        [50.1, 8.7],
        [40.4, -3.7],
        [45.5, 14.5],
        [41.0, 29.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Removal of dead wood and old trees', 'Loss of ancient woodland', 'Road traffic and predation by crows and magpies'],
        bn: ['মরা কাঠ ও পুরোনো গাছ সরিয়ে ফেলা', 'প্রাচীন বনভূমি হারিয়ে যাওয়া', 'সড়ক দুর্ঘটনা এবং কাক ও ম্যাগপাইয়ের শিকার'],
      },
      initiatives: {
        en: ['Listed under the EU Habitats Directive (Annex II)', 'Log-pile and “stag beetle bucket” habitat projects in gardens'],
        bn: ['ইইউ হ্যাবিট্যাটস ডিরেক্টিভের দ্বিতীয় তফসিলে তালিকাভুক্ত', 'বাগানে কাঠের স্তূপ ও "স্ট্যাগ বিটল বাকেট" দিয়ে আবাস তৈরি প্রকল্প'],
      },
    },
    facts: {
      en: [
        'Despite their size, male jaws are used for wrestling, not for biting people.',
        'Its scientific name cervus means “deer” in Latin.',
      ],
      bn: [
        'এত বড় হলেও পুরুষের চোয়াল মানুষ কামড়ানোর জন্য নয়, প্রতিদ্বন্দ্বীর সঙ্গে কুস্তির জন্য।',
        'বৈজ্ঞানিক নামের cervus শব্দের লাতিন অর্থ "হরিণ"।',
      ],
    },
    related: ['hercules-beetle', 'goliath-beetle'],
  },
  {
    id: 'sacred-scarab',
    commonName: { en: 'Sacred Scarab', bn: 'পবিত্র স্কারাব' },
    scientificName: 'Scarabaeus sacer',
    altNames: {
      en: ['Dung Beetle', 'Scarab Beetle'],
      bn: ['গোবরে পোকা', 'স্কারাব গুবরে পোকা'],
    },
    category: 'insects',
    wikiTitle: 'Scarabaeus sacer',
    description: {
      en: 'The sacred scarab is a dung beetle that shapes animal dung into balls and rolls them away to bury as food. Ancient Egyptians linked the rolling ball to the sun moving across the sky and worshipped the scarab as a symbol of the sun god Khepri. Dung beetles like it play a vital role in recycling waste and enriching soil.',
      bn: 'পবিত্র স্কারাব একধরনের গোবরে পোকা, যা পশুর গোবর গোল বলের মতো পাকিয়ে গড়িয়ে নিয়ে যায় এবং খাবার হিসেবে মাটিতে পুঁতে রাখে। প্রাচীন মিসরীয়রা গড়িয়ে চলা এই বলকে আকাশে সূর্যের চলার সঙ্গে তুলনা করত এবং স্কারাবকে সূর্যদেবতা খেপরির প্রতীক হিসেবে পূজা করত। এর মতো গোবরে পোকারা বর্জ্য পুনর্ব্যবহার ও মাটি উর্বর করায় গুরুত্বপূর্ণ ভূমিকা রাখে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Coleoptera',
      family: 'Scarabaeidae',
      genus: 'Scarabaeus',
      species: 'S. sacer',
    },
    physical: {
      size: { en: 'About 2.5–4 cm long', bn: 'প্রায় ২.৫–৪ সেমি লম্বা' },
      weight: { en: 'A few grams', bn: 'কয়েক গ্রাম' },
      lifespan: { en: 'Adults may live up to a few years', bn: 'পূর্ণবয়স্ক কয়েক বছর পর্যন্ত বাঁচতে পারে' },
      features: {
        en: [
          'Matte black, broad, rounded body',
          'Rake-like teeth on the head and front legs for shaping dung',
          'Long hind legs used to push the dung ball backwards',
        ],
        bn: [
          'চওড়া, গোলাকার, অনুজ্জ্বল কালো দেহ',
          'গোবর আকার দিতে মাথা ও সামনের পায়ে আঁচড়ার মতো খাঁজকাটা দাঁত',
          'পেছনের লম্বা পা দিয়ে গোবরের বল পেছন দিকে ঠেলে নেয়',
        ],
      },
    },
    habitat: {
      en: 'Sandy coasts, dunes, dry grasslands and pastures with grazing animals',
      bn: 'বালুময় উপকূল, বালিয়াড়ি, শুষ্ক তৃণভূমি ও গবাদিপশু চরে এমন চারণভূমি',
    },
    habitats: ['grassland', 'desert'],
    regions: ['europe', 'africa'],
    distribution: {
      en: 'Around the Mediterranean — southern Europe, North Africa including Egypt, and the Middle East.',
      bn: 'ভূমধ্যসাগরের চারপাশ — দক্ষিণ ইউরোপ, মিসরসহ উত্তর আফ্রিকা এবং মধ্যপ্রাচ্য।',
    },
    climate: { en: 'Warm Mediterranean and arid', bn: 'উষ্ণ ভূমধ্যসাগরীয় ও শুষ্ক' },
    diet: {
      en: 'Dung of grazing mammals such as sheep, goats and cattle',
      bn: 'ভেড়া, ছাগল ও গরুর মতো তৃণভোজী প্রাণীর গোবর',
    },
    ecologicalRole: {
      en: 'Buries dung, returning nutrients to the soil, dispersing seeds and reducing flies and livestock parasites.',
      bn: 'গোবর মাটিতে পুঁতে পুষ্টি মাটিতে ফিরিয়ে দেয়, বীজ ছড়ায় এবং মাছি ও গবাদিপশুর পরজীবী কমায়।',
    },
    behavior: {
      en: 'Rolls dung balls in a straight line away from the dung pile; females lay eggs inside pear-shaped brood balls underground.',
      bn: 'গোবরের স্তূপ থেকে সোজা পথে বল গড়িয়ে নিয়ে যায়; স্ত্রী পোকা মাটির নিচে নাশপাতির মতো বলের ভেতরে ডিম পাড়ে।',
    },
    range: {
      native: [
        [30.0, 31.2],
        [37.0, -6.5],
        [43.5, 4.5],
        [38.0, 23.7],
        [32.0, 34.8],
        [35.8, 10.6],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Antiparasitic drugs like ivermectin in livestock dung', 'Coastal development and decline of traditional grazing'],
        bn: ['গবাদিপশুর গোবরে আইভারমেকটিনের মতো কৃমিনাশক ওষুধের অবশেষ', 'উপকূলে উন্নয়ন কাজ ও প্রথাগত পশুচারণ কমে যাওয়া'],
      },
      initiatives: {
        en: ['Research on dung-beetle-friendly livestock treatments', 'Protection of Mediterranean coastal dunes'],
        bn: ['গোবরে পোকার জন্য নিরাপদ পশু-চিকিৎসা নিয়ে গবেষণা', 'ভূমধ্যসাগরীয় উপকূলীয় বালিয়াড়ি সংরক্ষণ'],
      },
    },
    facts: {
      en: [
        'Scarab-shaped amulets were among the most popular charms in ancient Egypt.',
        'A dung beetle can roll a ball many times its own weight.',
      ],
      bn: [
        'প্রাচীন মিসরে স্কারাব আকৃতির তাবিজ ছিল সবচেয়ে জনপ্রিয় কবচগুলোর একটি।',
        'একটি গোবরে পোকা নিজের ওজনের বহুগুণ ভারী বল গড়িয়ে নিতে পারে।',
      ],
    },
    related: ['goliath-beetle', 'hercules-beetle'],
  },
  {
    id: 'european-mantis',
    commonName: { en: 'European Mantis', bn: 'ইউরোপীয় ম্যান্টিস' },
    scientificName: 'Mantis religiosa',
    altNames: {
      en: ['Praying Mantis', 'Mantis'],
      bn: ['প্রার্থনারত পতঙ্গ', 'ম্যান্টিস'],
    },
    category: 'insects',
    wikiTitle: 'Mantis religiosa',
    description: {
      en: 'The European mantis is the classic “praying mantis”, named for the way it holds its spiny forelegs folded as if in prayer. It is a patient ambush predator that waits motionless for insects, then strikes in a fraction of a second. Native to the Old World, it was introduced to North America over a century ago.',
      bn: 'ইউরোপীয় ম্যান্টিস হলো চিরপরিচিত "প্রার্থনারত পতঙ্গ" — কাঁটাওয়ালা সামনের পা দুটি প্রার্থনার ভঙ্গিতে ভাঁজ করে রাখে বলে এই নাম। এটি ধৈর্যশীল ওত-পাতা শিকারি; নিশ্চল হয়ে অপেক্ষা করে এবং চোখের পলকে পোকা ধরে ফেলে। এর আদি বাস পুরোনো বিশ্বে (ইউরোপ, আফ্রিকা ও এশিয়া), তবে একশো বছরেরও আগে উত্তর আমেরিকায় এটি ছড়িয়ে পড়ে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Mantodea',
      family: 'Mantidae',
      genus: 'Mantis',
      species: 'M. religiosa',
    },
    physical: {
      size: { en: 'About 5–9 cm long; females larger than males', bn: 'প্রায় ৫–৯ সেমি লম্বা; স্ত্রী পুরুষের চেয়ে বড়' },
      weight: { en: 'Usually under 5 g', bn: 'সাধারণত ৫ গ্রামের কম' },
      lifespan: { en: 'About one year, mostly as an egg case over winter', bn: 'প্রায় এক বছর, যার বেশিরভাগ সময় শীতে ডিমের থলেতে কাটে' },
      features: {
        en: [
          'Green or brown body that camouflages among plants',
          'Black-ringed spot on the inner side of each foreleg',
          'Triangular head that can turn to look over its shoulder',
        ],
        bn: [
          'সবুজ বা বাদামি দেহ, যা গাছপালার মধ্যে মিশে যায়',
          'সামনের পায়ের ভেতরের দিকে কালো বৃত্তঘেরা দাগ',
          'ত্রিকোণ মাথা, যা ঘুরিয়ে কাঁধের ওপর দিয়ে পেছনে তাকাতে পারে',
        ],
      },
    },
    habitat: { en: 'Sunny meadows, shrublands, gardens and field margins', bn: 'রোদেলা তৃণভূমি, ঝোপঝাড়, বাগান ও খেতের ধার' },
    habitats: ['grassland', 'urban-farmland'],
    regions: ['europe', 'africa', 'east-asia', 'south-asia', 'north-america'],
    distribution: {
      en: 'Southern and central Europe, Africa and much of Asia; introduced to North America in the late 1800s.',
      bn: 'দক্ষিণ ও মধ্য ইউরোপ, আফ্রিকা এবং এশিয়ার বড় অংশ; ১৮০০ সালের শেষ দিকে উত্তর আমেরিকায় ছড়িয়েছে।',
    },
    climate: { en: 'Warm temperate to tropical', bn: 'উষ্ণ নাতিশীতোষ্ণ থেকে ক্রান্তীয়' },
    diet: {
      en: 'Carnivore — flies, grasshoppers, moths, bees and other insects',
      bn: 'মাংসাশী — মাছি, ঘাসফড়িং, মথ, মৌমাছিসহ নানা পোকা',
    },
    ecologicalRole: {
      en: 'A generalist predator that helps keep insect populations in check.',
      bn: 'সর্বভুক ধরনের শিকারি পতঙ্গ, যা পোকামাকড়ের সংখ্যা নিয়ন্ত্রণে সাহায্য করে।',
    },
    behavior: {
      en: 'Sways gently like a leaf in the wind while stalking; females sometimes eat the male during or after mating.',
      bn: 'শিকারের সময় বাতাসে দোলা পাতার মতো আস্তে দোলে; মিলনের সময় বা পরে স্ত্রী ম্যান্টিস কখনো কখনো পুরুষটিকে খেয়ে ফেলে।',
    },
    range: {
      native: [
        [43.7, 7.3],
        [41.9, 12.5],
        [47.5, 19.0],
        [-26.2, 28.0],
        [41.3, 69.2],
        [35.7, 139.7],
      ],
      introduced: [
        [43.2, -77.6],
        [45.5, -73.6],
        [42.3, -83.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Pesticide use', 'Loss of meadows and grasslands'],
        bn: ['কীটনাশকের ব্যবহার', 'তৃণভূমি হারিয়ে যাওয়া'],
      },
      initiatives: {
        en: ['Protected in some German states and other parts of Europe', 'Grassland conservation schemes'],
        bn: ['জার্মানির কিছু রাজ্যসহ ইউরোপের নানা অংশে সংরক্ষিত', 'তৃণভূমি সংরক্ষণ প্রকল্প'],
      },
    },
    facts: {
      en: [
        'It is the official state insect of Connecticut, USA.',
        'A female lays her eggs in a foamy case called an ootheca, which hardens and protects them through winter.',
      ],
      bn: [
        'এটি যুক্তরাষ্ট্রের কানেটিকাট অঙ্গরাজ্যের রাষ্ট্রীয় পতঙ্গ।',
        'স্ত্রী ম্যান্টিস ফেনার মতো একটি থলেতে (উথিকা) ডিম পাড়ে, যা শক্ত হয়ে শীতকালে ডিমগুলোকে রক্ষা করে।',
      ],
    },
    related: ['orchid-mantis', 'desert-locust'],
  },
  {
    id: 'orchid-mantis',
    commonName: { en: 'Orchid Mantis', bn: 'অর্কিড ম্যান্টিস' },
    scientificName: 'Hymenopus coronatus',
    altNames: {
      en: ['Walking Flower Mantis', 'Pink Orchid Mantis'],
      bn: ['ফুল ম্যান্টিস', 'গোলাপি অর্কিড ম্যান্টিস'],
    },
    category: 'insects',
    wikiTitle: 'Hymenopus coronatus',
    description: {
      en: 'The orchid mantis is a strikingly beautiful mantis from the rainforests of Southeast Asia whose white-and-pink body and petal-shaped legs make it look like a flower. Rather than hiding on a particular orchid, it sits in the open and lures pollinating insects, which mistake it for a bloom. Females are several times larger than males.',
      bn: 'অর্কিড ম্যান্টিস দক্ষিণ-পূর্ব এশিয়ার রেইনফরেস্টের এক অপূর্ব সুন্দর ম্যান্টিস; সাদা-গোলাপি দেহ আর পাপড়ির মতো পায়ের কারণে একে দেখতে ফুলের মতো লাগে। কোনো নির্দিষ্ট অর্কিডে লুকিয়ে না থেকে এটি খোলা জায়গায় বসে থাকে, আর ফুল ভেবে কাছে আসা পরাগায়নকারী পোকাদের শিকার করে। স্ত্রী ম্যান্টিস পুরুষের চেয়ে কয়েক গুণ বড়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Mantodea',
      family: 'Hymenopodidae',
      genus: 'Hymenopus',
      species: 'H. coronatus',
    },
    physical: {
      size: { en: 'Females about 6–7 cm; males about 2.5–3 cm', bn: 'স্ত্রী প্রায় ৬–৭ সেমি; পুরুষ প্রায় ২.৫–৩ সেমি' },
      weight: { en: 'A few grams or less', bn: 'কয়েক গ্রাম বা তার কম' },
      lifespan: { en: 'About 5–9 months', bn: 'প্রায় ৫–৯ মাস' },
      features: {
        en: [
          'White to pink colour that can shift with surroundings and age',
          'Flattened, petal-like lobes on the walking legs',
          'Young nymphs are black and orange, mimicking assassin bugs',
        ],
        bn: [
          'সাদা থেকে গোলাপি রং, যা পরিবেশ ও বয়সের সঙ্গে কিছুটা বদলায়',
          'হাঁটার পায়ে পাপড়ির মতো চ্যাপ্টা অংশ',
          'একদম ছোট নিম্ফ কালো-কমলা রঙের, যা দেখতে বিষাক্ত অ্যাসাসিন বাগের মতো',
        ],
      },
    },
    habitat: { en: 'Humid tropical rainforests and forest edges', bn: 'আর্দ্র ক্রান্তীয় রেইনফরেস্ট ও বনের প্রান্ত' },
    habitats: ['tropical-forest'],
    regions: ['southeast-asia'],
    distribution: {
      en: 'Malaysia, Indonesia (Sumatra, Borneo), Thailand, Myanmar and nearby parts of Southeast Asia.',
      bn: 'মালয়েশিয়া, ইন্দোনেশিয়া (সুমাত্রা, বোর্নিও), থাইল্যান্ড, মিয়ানমার এবং দক্ষিণ-পূর্ব এশিয়ার আশপাশের এলাকা।',
    },
    climate: { en: 'Hot, humid tropical', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয়' },
    diet: {
      en: 'Carnivore — bees, flies, butterflies and other pollinating insects',
      bn: 'মাংসাশী — মৌমাছি, মাছি, প্রজাপতি ও অন্যান্য পরাগায়নকারী পোকা',
    },
    ecologicalRole: {
      en: 'A specialised ambush predator of flower-visiting insects in the rainforest.',
      bn: 'রেইনফরেস্টে ফুলে আসা পোকাদের বিশেষায়িত ওত-পাতা শিকারি।',
    },
    behavior: {
      en: 'Uses aggressive mimicry — studies show it attracts pollinators even more than real flowers do.',
      bn: 'ছদ্মবেশে শিকার টানে — গবেষণায় দেখা গেছে, আসল ফুলের চেয়েও বেশি পরাগায়নকারী পোকা এর দিকে আকৃষ্ট হয়।',
    },
    range: {
      native: [
        [3.1, 101.7],
        [1.5, 110.3],
        [-0.5, 101.5],
        [8.0, 98.3],
        [12.0, 98.6],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Rainforest clearance for oil palm', 'Collection for the pet trade'],
        bn: ['তেলপামের জন্য রেইনফরেস্ট উজাড়', 'পোষা প্রাণী বাণিজ্যের জন্য সংগ্রহ'],
      },
      initiatives: {
        en: ['Widely bred in captivity by enthusiasts', 'Protected forests in Malaysia and Indonesia'],
        bn: ['শৌখিন পালনকারীদের মাধ্যমে ব্যাপকভাবে আবদ্ধ প্রজনন', 'মালয়েশিয়া ও ইন্দোনেশিয়ার সংরক্ষিত বন'],
      },
    },
    facts: {
      en: [
        '19th-century travellers’ tales described it as a “carnivorous orchid” that caught butterflies.',
        'Males are small and brown-green, looking nothing like the flower-like females.',
      ],
      bn: [
        'উনিশ শতকের পর্যটকদের গল্পে একে প্রজাপতি ধরা "মাংসাশী অর্কিড" বলে বর্ণনা করা হয়েছিল।',
        'পুরুষ ম্যান্টিস ছোট ও বাদামি-সবুজ, ফুলের মতো স্ত্রী ম্যান্টিসের সঙ্গে এদের কোনো মিলই নেই।',
      ],
    },
    related: ['european-mantis'],
  },
  {
    id: 'desert-locust',
    commonName: { en: 'Desert Locust', bn: 'মরু পঙ্গপাল' },
    scientificName: 'Schistocerca gregaria',
    altNames: {
      en: ['Locust', 'Locust Swarm'],
      bn: ['পঙ্গপাল', 'পঙ্গপালের ঝাঁক'],
    },
    category: 'insects',
    wikiTitle: 'Desert locust',
    description: {
      en: 'The desert locust is a grasshopper that can switch from a shy, solitary form to a gregarious one that forms enormous swarms. Swarms can travel more than 100 km a day and devour crops across Africa, the Middle East and South Asia, threatening the food supply of millions. It is considered the world’s most destructive migratory pest.',
      bn: 'মরু পঙ্গপাল একধরনের ঘাসফড়িং, যা লাজুক ও একাকী অবস্থা থেকে দলবদ্ধ অবস্থায় রূপ বদলে বিশাল ঝাঁক তৈরি করতে পারে। একটি ঝাঁক দিনে ১০০ কিলোমিটারেরও বেশি পথ পাড়ি দিতে পারে এবং আফ্রিকা, মধ্যপ্রাচ্য ও দক্ষিণ এশিয়ার ফসল খেয়ে সাবাড় করে লাখো মানুষের খাদ্য নিরাপত্তা হুমকিতে ফেলে। একে পৃথিবীর সবচেয়ে ধ্বংসাত্মক পরিযায়ী ক্ষতিকর পোকা বলা হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Orthoptera',
      family: 'Acrididae',
      genus: 'Schistocerca',
      species: 'S. gregaria',
    },
    physical: {
      size: { en: 'Adults about 6–9 cm long', bn: 'পূর্ণবয়স্ক প্রায় ৬–৯ সেমি লম্বা' },
      weight: { en: 'About 2 g', bn: 'প্রায় ২ গ্রাম' },
      lifespan: { en: 'About 3–5 months', bn: 'প্রায় ৩–৫ মাস' },
      features: {
        en: [
          'Solitary form is green or sandy; gregarious adults turn pink then yellow',
          'Powerful hind legs and long wings for migration',
          'Can eat roughly its own body weight in plants each day',
        ],
        bn: [
          'একাকী অবস্থায় সবুজ বা বালুরঙা; দলবদ্ধ পূর্ণবয়স্করা প্রথমে গোলাপি, পরে হলুদ হয়',
          'শক্তিশালী পেছনের পা এবং পরিযানের জন্য লম্বা ডানা',
          'প্রতিদিন মোটামুটি নিজের ওজনের সমান গাছপালা খেতে পারে',
        ],
      },
    },
    habitat: {
      en: 'Deserts and semi-arid lands; swarms invade farmland and pastures',
      bn: 'মরুভূমি ও আধা-শুষ্ক অঞ্চল; ঝাঁক কৃষিজমি ও চারণভূমিতে হানা দেয়',
    },
    habitats: ['desert', 'grassland', 'urban-farmland'],
    regions: ['africa', 'south-asia'],
    distribution: {
      en: 'From the Sahara and Sahel across Arabia to Iran, Pakistan and northwestern India; plagues can affect about 60 countries.',
      bn: 'সাহারা ও সাহেল থেকে আরব উপদ্বীপ হয়ে ইরান, পাকিস্তান ও উত্তর-পশ্চিম ভারত পর্যন্ত; বড় প্রাদুর্ভাবে প্রায় ৬০টি দেশ আক্রান্ত হতে পারে।',
    },
    climate: { en: 'Hot, arid, with occasional heavy rains that trigger breeding', bn: 'উষ্ণ ও শুষ্ক; মাঝে মাঝে ভারী বৃষ্টি হলে প্রজনন বেড়ে যায়' },
    diet: {
      en: 'Herbivore — almost any green vegetation, including cereals, vegetables and fruit trees',
      bn: 'তৃণভোজী — খাদ্যশস্য, সবজি ও ফলগাছসহ প্রায় যেকোনো সবুজ গাছপালা',
    },
    ecologicalRole: {
      en: 'Food for many birds, reptiles and mammals, but in swarm years a devastating crop pest.',
      bn: 'বহু পাখি, সরীসৃপ ও স্তন্যপায়ীর খাদ্য, তবে ঝাঁকের বছরে ফসলের ভয়াবহ শত্রু।',
    },
    behavior: {
      en: 'Crowding raises serotonin levels, turning solitary locusts gregarious within hours so they march and fly together.',
      bn: 'ভিড়ের কারণে দেহে সেরোটোনিন বেড়ে যায়, ফলে কয়েক ঘণ্টার মধ্যে একাকী পঙ্গপাল দলবদ্ধ হয়ে একসঙ্গে হাঁটে ও ওড়ে।',
    },
    range: {
      native: [
        [18.0, -10.0],
        [16.0, 5.0],
        [15.5, 32.5],
        [9.0, 40.0],
        [20.0, 45.0],
        [27.0, 68.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Large-scale pesticide control campaigns'],
        bn: ['বড় আকারের কীটনাশক দমন অভিযান'],
      },
      initiatives: {
        en: ['FAO Desert Locust Information Service and early warning', 'Biopesticides based on the fungus Metarhizium'],
        bn: ['জাতিসংঘের খাদ্য ও কৃষি সংস্থার (FAO) মরু পঙ্গপাল তথ্যসেবা ও আগাম সতর্কতা', 'Metarhizium ছত্রাকভিত্তিক জৈব কীটনাশক'],
      },
    },
    facts: {
      en: [
        'A swarm covering one square kilometre can contain tens of millions of locusts.',
        'The 2019–2021 upsurge hit East Africa, Yemen, Pakistan and India hard.',
        'Locust plagues are described in ancient texts, including the Bible and the Quran.',
      ],
      bn: [
        'এক বর্গকিলোমিটার জুড়ে থাকা একটি ঝাঁকে কয়েক কোটি পঙ্গপাল থাকতে পারে।',
        '২০১৯–২০২১ সালের প্রাদুর্ভাবে পূর্ব আফ্রিকা, ইয়েমেন, পাকিস্তান ও ভারত ব্যাপক ক্ষতিগ্রস্ত হয়।',
        'বাইবেল ও কুরআনসহ প্রাচীন গ্রন্থে পঙ্গপালের উপদ্রবের বর্ণনা আছে।',
      ],
    },
    related: ['european-mantis', 'periodical-cicada'],
  },
  {
    id: 'periodical-cicada',
    commonName: { en: 'Periodical Cicada', bn: 'সতেরো বছরের ঝিঁঝিঁ' },
    scientificName: 'Magicicada septendecim',
    altNames: {
      en: ['17-year Cicada', 'Pharaoh Cicada', 'Magicicada'],
      bn: ['পর্যায়বৃত্ত সিকাডা', 'ফারাও সিকাডা', 'সিকাডা'],
    },
    category: 'insects',
    wikiTitle: 'Magicicada septendecim',
    description: {
      en: 'Magicicada septendecim is a North American periodical cicada that spends 17 years underground as a nymph, sucking sap from tree roots. Then, in a single spring, billions emerge together, sing in deafening choruses, mate, lay eggs and die within weeks. This mass emergence overwhelms predators so that enough survive to breed.',
      bn: 'Magicicada septendecim উত্তর আমেরিকার একটি পর্যায়বৃত্ত সিকাডা (ঝিঁঝিঁজাতীয় পতঙ্গ), যা নিম্ফ হিসেবে মাটির নিচে গাছের শিকড়ের রস খেয়ে টানা ১৭ বছর কাটায়। তারপর একটি বসন্তে কোটি কোটি সিকাডা একসঙ্গে বেরিয়ে আসে, কান ফাটানো সুরে ডাকে, মিলিত হয়, ডিম পাড়ে এবং কয়েক সপ্তাহের মধ্যেই মারা যায়। একসঙ্গে এত বেশি সংখ্যায় বেরোনোয় শিকারিরা সবাইকে খেয়ে শেষ করতে পারে না, ফলে যথেষ্টসংখ্যক সিকাডা বেঁচে বংশবৃদ্ধি করতে পারে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Hemiptera',
      family: 'Cicadidae',
      genus: 'Magicicada',
      species: 'M. septendecim',
    },
    physical: {
      size: { en: 'About 2.5–3.5 cm long', bn: 'প্রায় ২.৫–৩.৫ সেমি লম্বা' },
      weight: { en: 'Roughly 1 g or less', bn: 'মোটামুটি ১ গ্রাম বা তার কম' },
      lifespan: {
        en: '17 years, almost all underground; adults live only a few weeks',
        bn: '১৭ বছর, যার প্রায় পুরোটাই মাটির নিচে; পূর্ণবয়স্ক মাত্র কয়েক সপ্তাহ বাঁচে',
      },
      features: {
        en: [
          'Black body with bright red eyes',
          'Clear wings with orange veins',
          'Males sing loudly using drum-like tymbal organs',
        ],
        bn: [
          'কালো দেহ ও উজ্জ্বল লাল চোখ',
          'কমলা শিরাযুক্ত স্বচ্ছ ডানা',
          'পুরুষরা ঢোলের মতো টিম্বাল অঙ্গ দিয়ে জোরে ডাকে',
        ],
      },
    },
    habitat: { en: 'Deciduous forests, woodland edges and suburbs with trees', bn: 'পর্ণমোচী বন, বনের প্রান্ত ও গাছপালাসমৃদ্ধ শহরতলি' },
    habitats: ['temperate-forest', 'urban-farmland'],
    regions: ['north-america'],
    distribution: {
      en: 'Eastern United States, from the Great Lakes south to Georgia and west to the Great Plains.',
      bn: 'যুক্তরাষ্ট্রের পূর্বাঞ্চল — গ্রেট লেকস থেকে দক্ষিণে জর্জিয়া এবং পশ্চিমে গ্রেট প্লেইনস পর্যন্ত।',
    },
    climate: { en: 'Temperate with cold winters', bn: 'শীতল শীতকালসহ নাতিশীতোষ্ণ' },
    diet: {
      en: 'Nymphs suck xylem sap from tree roots; adults feed little on twig sap',
      bn: 'নিম্ফ গাছের শিকড়ের জাইলেম রস চুষে খায়; পূর্ণবয়স্করা ডালের রস অল্পই খায়',
    },
    ecologicalRole: {
      en: 'Emergences provide a feast for birds and mammals, and the dead cicadas release a pulse of nutrients into forest soils.',
      bn: 'সিকাডা বের হওয়ার বছর পাখি ও স্তন্যপায়ীদের জন্য খাদ্যের উৎসব; মরা সিকাডা বনের মাটিতে হঠাৎ প্রচুর পুষ্টি যোগ করে।',
    },
    behavior: {
      en: 'Emerges when the soil reaches about 18 °C; males gather in chorus trees, and females cut slits in twigs to lay eggs.',
      bn: 'মাটির তাপমাত্রা প্রায় ১৮° সেলসিয়াসে পৌঁছালে বেরিয়ে আসে; পুরুষরা কোনো গাছে দল বেঁধে ডাকে, আর স্ত্রী সিকাডা ডালে চিরে ডিম পাড়ে।',
    },
    range: {
      native: [
        [39.0, -77.0],
        [40.0, -83.0],
        [39.8, -86.2],
        [41.9, -87.6],
        [36.2, -86.8],
        [40.4, -80.0],
      ],
    },
    conservation: {
      status: 'NT',
      trend: 'unknown',
      threats: {
        en: ['Clearing of forests and urban development', 'Local broods disappearing as habitat fragments'],
        bn: ['বন উজাড় ও নগরায়ণ', 'আবাস খণ্ডিত হওয়ায় স্থানীয় দলগুলো বিলুপ্ত হওয়া'],
      },
      initiatives: {
        en: ['Citizen-science mapping of broods (e.g. the Cicada Safari app)', 'Protection of mature eastern forests'],
        bn: ['নাগরিক বিজ্ঞানের মাধ্যমে সিকাডা দলের মানচিত্র তৈরি (যেমন সিকাডা সাফারি অ্যাপ)', 'পূর্বাঞ্চলের পরিণত বন সংরক্ষণ'],
      },
    },
    facts: {
      en: [
        'The prime-number cycles of 13 and 17 years may help cicadas avoid predators with regular cycles.',
        'Periodical cicadas are harmless — they do not bite or sting.',
      ],
      bn: [
        '১৩ ও ১৭ — এই মৌলিক সংখ্যার চক্র হয়তো নিয়মিত চক্রে বাড়া শিকারিদের এড়াতে সাহায্য করে।',
        'পর্যায়বৃত্ত সিকাডা নিরীহ — কামড়ায়ও না, হুলও ফোটায় না।',
      ],
    },
    related: ['desert-locust', 'common-eastern-firefly'],
  },
  {
    id: 'common-eastern-firefly',
    commonName: { en: 'Common Eastern Firefly', bn: 'জোনাকি' },
    scientificName: 'Photinus pyralis',
    altNames: {
      en: ['Firefly', 'Lightning Bug', 'Big Dipper Firefly'],
      bn: ['জোনাকি পোকা', 'আলো-পোকা', 'বিগ ডিপার জোনাকি'],
    },
    category: 'insects',
    wikiTitle: 'Photinus pyralis',
    description: {
      en: 'The common eastern firefly is North America’s best-known firefly, a soft-bodied beetle that lights up summer evenings with yellow-green flashes. Males fly low and flash a rising “J”-shaped signal, and females answer from the grass. The light-producing enzyme from this species, firefly luciferase, has become a vital tool in medical and biological research.',
      bn: 'কমন ইস্টার্ন জোনাকি উত্তর আমেরিকার সবচেয়ে পরিচিত জোনাকি — নরম দেহের একধরনের গুবরে পোকা, যা গ্রীষ্মের সন্ধ্যায় হলদে-সবুজ আলো জ্বেলে চারপাশ মাতিয়ে রাখে। পুরুষ জোনাকি নিচু হয়ে উড়তে উড়তে ইংরেজি "J" অক্ষরের মতো ওপরে ওঠা আলোর সংকেত দেয়, আর ঘাসে বসে স্ত্রী জোনাকি উত্তর দেয়। এই প্রজাতির আলো তৈরির এনজাইম লুসিফারেজ চিকিৎসা ও জীববিজ্ঞান গবেষণায় একটি গুরুত্বপূর্ণ হাতিয়ার।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Coleoptera',
      family: 'Lampyridae',
      genus: 'Photinus',
      species: 'P. pyralis',
    },
    physical: {
      size: { en: 'About 1–1.4 cm long', bn: 'প্রায় ১–১.৪ সেমি লম্বা' },
      weight: { en: 'A few tens of milligrams', bn: 'কয়েক দশ মিলিগ্রাম' },
      lifespan: {
        en: 'Larvae live 1–2 years in the soil; adults a few weeks',
        bn: 'লার্ভা মাটিতে ১–২ বছর বাঁচে; পূর্ণবয়স্ক কয়েক সপ্তাহ',
      },
      features: {
        en: [
          'Light organ on the underside of the last abdominal segments',
          'Pink-and-yellow shield over the head with a dark central spot',
          'Dark brown wing cases edged in yellow',
        ],
        bn: [
          'পেটের শেষ দিকের অংশের নিচে আলো তৈরির অঙ্গ',
          'মাথার ওপরের ঢালের মতো অংশ গোলাপি-হলুদ, মাঝখানে কালো ছোপ',
          'হলুদ কিনারাসহ গাঢ় বাদামি ডানার খোলস',
        ],
      },
    },
    habitat: {
      en: 'Lawns, meadows, field edges and open woodland, often near moisture',
      bn: 'ঘাসের লন, তৃণভূমি, খেতের ধার ও হালকা বন, প্রায়ই আর্দ্র জায়গার কাছে',
    },
    habitats: ['grassland', 'temperate-forest', 'urban-farmland'],
    regions: ['north-america'],
    distribution: {
      en: 'Eastern and central United States, from the Great Lakes south to the Gulf Coast and Texas.',
      bn: 'যুক্তরাষ্ট্রের পূর্ব ও মধ্যাঞ্চল — গ্রেট লেকস থেকে দক্ষিণে উপসাগরীয় উপকূল ও টেক্সাস পর্যন্ত।',
    },
    climate: { en: 'Warm temperate with humid summers', bn: 'আর্দ্র গ্রীষ্মসহ উষ্ণ নাতিশীতোষ্ণ' },
    diet: {
      en: 'Larvae prey on snails, slugs and worms; adults eat little or nothing',
      bn: 'লার্ভা শামুক, খোলসহীন শামুক ও কেঁচো শিকার করে; পূর্ণবয়স্করা খুব সামান্য খায় বা কিছুই খায় না',
    },
    ecologicalRole: {
      en: 'Its larvae help control snails and slugs, and fireflies are sensitive indicators of healthy, dark habitats.',
      bn: 'এর লার্ভা শামুক নিয়ন্ত্রণে রাখে; আর জোনাকির উপস্থিতি সুস্থ ও অন্ধকার পরিবেশের সংবেদনশীল নির্দেশক।',
    },
    behavior: {
      en: 'Active at dusk; each species has its own flash code, and some predatory fireflies mimic female signals to lure and eat males.',
      bn: 'সন্ধ্যায় সক্রিয় হয়; প্রতিটি প্রজাতির নিজস্ব আলো-সংকেত আছে, আর কিছু শিকারি জোনাকি স্ত্রীর সংকেত নকল করে পুরুষ জোনাকিকে ডেকে এনে খেয়ে ফেলে।',
    },
    range: {
      native: [
        [39.0, -77.0],
        [40.7, -74.0],
        [35.2, -80.8],
        [33.7, -84.4],
        [38.6, -90.2],
        [30.3, -97.7],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Artificial light at night that drowns out flash signals', 'Pesticides and lawn chemicals', 'Habitat loss'],
        bn: ['রাতের কৃত্রিম আলো, যা জোনাকির সংকেত ঢেকে দেয়', 'কীটনাশক ও লনে ব্যবহৃত রাসায়নিক', 'আবাসস্থল হারিয়ে যাওয়া'],
      },
      initiatives: {
        en: ['Firefly Watch and other citizen-science surveys', 'Dark-sky campaigns to reduce light pollution'],
        bn: ['ফায়ারফ্লাই ওয়াচসহ নাগরিক বিজ্ঞান জরিপ', 'আলোক দূষণ কমাতে অন্ধকার আকাশ রক্ষার প্রচারণা'],
      },
    },
    facts: {
      en: [
        'Firefly light is “cold light” — nearly all the energy becomes light rather than heat.',
        'Its genome was sequenced in 2018.',
        'Bangladesh has its own fireflies too — the ones glowing on village nights are related species.',
      ],
      bn: [
        'জোনাকির আলো "ঠান্ডা আলো" — শক্তির প্রায় পুরোটাই তাপ না হয়ে আলোতে রূপ নেয়।',
        '২০১৮ সালে এর জিনোম উন্মোচন করা হয়।',
        'বাংলাদেশের গ্রামের রাতে যে জোনাকি জ্বলে, সেগুলো এরই আত্মীয় অন্য প্রজাতির।',
      ],
    },
    related: ['periodical-cicada', 'european-stag-beetle'],
  },
];
