import type { Species } from '@/types';

export const treesAsia1: Species[] = [
  {
    id: 'mango',
    commonName: { en: 'Mango', bn: 'আম' },
    scientificName: 'Mangifera indica',
    altNames: {
      en: ['Mango Tree', 'Indian Mango', 'Common Mango'],
      bn: ['আমগাছ', 'আম্র', 'রসাল'],
    },
    category: 'trees',
    wikiTitle: 'Mangifera indica',
    description: {
      en: 'The mango is the national tree of Bangladesh and one of the most loved fruit trees in the world, cultivated in South Asia for thousands of years. Its sweet, juicy fruit defines the Bangladeshi summer, and Rajshahi and Chapainawabganj are famous for varieties such as Fazli, Langra, Himsagar and Amrapali. A large, evergreen tree with a dense dome-shaped crown, it also gives shade, timber and a central place in Bengali culture and poetry.',
      bn: 'আমগাছ বাংলাদেশের জাতীয় বৃক্ষ এবং পৃথিবীর অন্যতম প্রিয় ফলের গাছ; দক্ষিণ এশিয়ায় হাজার হাজার বছর ধরে এর চাষ হয়ে আসছে। মধুমাসে রসালো মিষ্টি আম ছাড়া বাংলাদেশের গ্রীষ্ম ভাবাই যায় না — রাজশাহী ও চাঁপাইনবাবগঞ্জ ফজলি, ল্যাংড়া, হিমসাগর, আম্রপালির মতো জাতের জন্য বিখ্যাত। ঘন গম্বুজাকৃতির চিরসবুজ এই বড় গাছ ছায়া, কাঠ এবং বাঙালির সংস্কৃতি ও সাহিত্যে বিশেষ স্থান জুড়ে আছে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Sapindales',
      family: 'Anacardiaceae',
      genus: 'Mangifera',
      species: 'M. indica',
    },
    physical: {
      size: {
        en: 'Usually 10–30 m tall with a broad, rounded crown',
        bn: 'সাধারণত ১০–৩০ মিটার উঁচু; মাথা চওড়া ও গোলাকার',
      },
      weight: {
        en: 'Not measured by weight; a single fruit weighs roughly 150 g to over 1 kg depending on variety',
        bn: 'ওজন দিয়ে মাপা হয় না; জাতভেদে একেকটি আমের ওজন মোটামুটি ১৫০ গ্রাম থেকে ১ কেজির বেশি',
      },
      lifespan: {
        en: 'Long-lived perennial; many trees bear fruit for 100 years or more',
        bn: 'দীর্ঘজীবী বহুবর্ষজীবী গাছ; অনেক গাছ ১০০ বছর বা তারও বেশি সময় ফল দেয়',
      },
      features: {
        en: [
          'Long, leathery, lance-shaped leaves; new leaves are copper-red',
          'Large clusters (panicles) of tiny fragrant yellowish flowers called mukul',
          'Fleshy fruit with a single large flattened stone',
        ],
        bn: [
          'লম্বা, চামড়ার মতো বর্শাকৃতি পাতা; কচি পাতা তামাটে লাল',
          'ছোট ছোট সুগন্ধি হলদেটে ফুলের বড় থোকা, যাকে মুকুল বলে',
          'শাঁসালো ফল, ভেতরে একটি বড় চ্যাপ্টা আঁটি',
        ],
      },
    },
    habitat: {
      en: 'Orchards, homesteads and village groves on well-drained soils in the tropical lowlands',
      bn: 'ক্রান্তীয় নিম্নভূমির পানি-নিষ্কাশিত মাটিতে বাগান, বসতবাড়ি ও গ্রামের বাগিচা',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Native to the region of northeast India, Bangladesh and Myanmar; now grown throughout the tropics, with India the largest producer.',
      bn: 'উত্তর-পূর্ব ভারত, বাংলাদেশ ও মিয়ানমার অঞ্চলের আদি গাছ; বর্তমানে সারা বিশ্বের ক্রান্তীয় অঞ্চলে চাষ হয়, সবচেয়ে বেশি উৎপাদন করে ভারত।',
    },
    climate: {
      en: 'Tropical monsoon climate with a distinct dry season that triggers flowering',
      bn: 'স্পষ্ট শুষ্ক মৌসুমসহ ক্রান্তীয় মৌসুমি জলবায়ু; শুষ্ক মৌসুমেই মুকুল আসে',
    },
    diet: {
      en: 'Photosynthesis; its deep taproot draws water and nutrients from well below the surface',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; গভীর প্রধান মূল মাটির অনেক নিচ থেকে পানি ও পুষ্টি টেনে নেয়',
    },
    ecologicalRole: {
      en: 'Its flowers feed bees, flies and other pollinators, and its fruit and canopy support bats, birds, squirrels and insects.',
      bn: 'মুকুল মৌমাছি, মাছি ও অন্যান্য পরাগায়নকারী পতঙ্গের খাবার জোগায়; ফল ও ঘন ডালপালা বাদুড়, পাখি, কাঠবিড়ালি ও পোকামাকড়ের আশ্রয়।',
    },
    behavior: {
      en: 'Flowers in late winter to early spring (about January–March) and fruits ripen in summer (May–July); many trees bear heavily only every other year.',
      bn: 'শীতের শেষে থেকে বসন্তের শুরুতে (মোটামুটি জানুয়ারি–মার্চ) মুকুল আসে এবং গ্রীষ্মে (মে–জুলাই) আম পাকে; অনেক গাছ এক বছর পরপর বেশি ফল দেয়।',
    },
    range: {
      native: [
        [24.4, 88.6],
        [24.6, 88.27],
        [26.2, 91.7],
        [25.3, 91.0],
        [21.9, 96.0],
      ],
      introduced: [
        [19.4, -99.1],
        [-6.8, 39.3],
        [14.6, 121.0],
        [25.8, -80.2],
        [-15.8, -47.9],
      ],
    },
    conservation: {
      status: 'DD',
      trend: 'unknown',
      threats: {
        en: ['Loss of wild populations through forest clearance', 'Pests and diseases such as mango hopper and anthracnose', 'Climate change disrupting flowering'],
        bn: ['বন উজাড়ে বুনো আমগাছ হারিয়ে যাওয়া', 'আমের শোষক পোকা ও অ্যানথ্রাকনোজের মতো রোগবালাই', 'জলবায়ু পরিবর্তনে মুকুল আসার সময় এলোমেলো হওয়া'],
      },
      initiatives: {
        en: ['Mango research and germplasm collections such as the Regional Horticulture Research Station in Chapainawabganj', 'Geographical Indication (GI) status for Bangladeshi varieties like Fazli and Khirsapat'],
        bn: ['চাঁপাইনবাবগঞ্জের আঞ্চলিক উদ্যানতত্ত্ব গবেষণা কেন্দ্রের মতো আম গবেষণা ও জাত সংরক্ষণ', 'ফজলি ও ক্ষীরশাপাতের মতো বাংলাদেশি জাতের ভৌগোলিক নির্দেশক (জিআই) স্বীকৃতি'],
      },
    },
    facts: {
      en: [
        'The mango tree was declared the national tree of Bangladesh in 2010.',
        'It is related to cashew and pistachio; the sap and peel can irritate sensitive skin.',
        'Hundreds of named mango varieties exist in South Asia alone.',
      ],
      bn: [
        '২০১০ সালে আমগাছকে বাংলাদেশের জাতীয় বৃক্ষ ঘোষণা করা হয়।',
        'কাজুবাদাম ও পেস্তার আত্মীয়; এর কষ ও খোসা সংবেদনশীল ত্বকে চুলকানি তৈরি করতে পারে।',
        'শুধু দক্ষিণ এশিয়াতেই আমের কয়েকশো নামকরা জাত রয়েছে।',
      ],
    },
    related: ['jackfruit', 'jamun', 'banyan'],
  },
  {
    id: 'jackfruit',
    commonName: { en: 'Jackfruit', bn: 'কাঁঠাল' },
    scientificName: 'Artocarpus heterophyllus',
    altNames: {
      en: ['Jack Tree', 'Jakfruit', 'Jackfruit Tree'],
      bn: ['কাঁঠালগাছ', 'এঁচোড়', 'কাঁঠাল গাছ'],
    },
    category: 'trees',
    wikiTitle: 'Jackfruit',
    description: {
      en: 'Jackfruit is the national fruit of Bangladesh and bears the largest tree-borne fruit in the world. The spiky green fruit grows directly from the trunk and thick branches and is eaten ripe as sweet golden pods, or unripe as a vegetable. The tree is common in almost every Bangladeshi homestead, and its strong yellow timber is valued for furniture and musical instruments.',
      bn: 'কাঁঠাল বাংলাদেশের জাতীয় ফল, আর গাছে ধরা ফলের মধ্যে এটিই পৃথিবীর সবচেয়ে বড়। কাঁটাওয়ালা সবুজ ফল সরাসরি কাণ্ড ও মোটা ডাল থেকে ঝোলে; পাকা কাঁঠালের মিষ্টি সোনালি কোয়া খাওয়া হয়, আর কাঁচা কাঁঠাল বা এঁচোড় তরকারি হিসেবে জনপ্রিয়। বাংলাদেশের প্রায় প্রতিটি বসতবাড়িতে এ গাছ দেখা যায়; এর মজবুত হলুদ কাঠ আসবাব ও বাদ্যযন্ত্র তৈরিতে কদর পায়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Rosales',
      family: 'Moraceae',
      genus: 'Artocarpus',
      species: 'A. heterophyllus',
    },
    physical: {
      size: {
        en: 'Usually 10–20 m tall with a dense, spreading crown',
        bn: 'সাধারণত ১০–২০ মিটার উঁচু; ডালপালা ঘন ও ছড়ানো',
      },
      weight: {
        en: 'Fruits commonly weigh 5–25 kg; exceptional ones reach over 40 kg',
        bn: 'ফল সাধারণত ৫–২৫ কেজি; ব্যতিক্রমী ফল ৪০ কেজিরও বেশি হতে পারে',
      },
      lifespan: {
        en: 'Perennial; trees fruit for several decades',
        bn: 'বহুবর্ষজীবী; একটি গাছ কয়েক দশক ধরে ফল দেয়',
      },
      features: {
        en: [
          'Huge oblong fruits with a bumpy, spiky green rind growing from the trunk',
          'Glossy dark-green leathery leaves',
          'All parts exude sticky white latex when cut',
        ],
        bn: [
          'কাণ্ড থেকে ঝোলা বিশাল লম্বাটে ফল, গায়ে খসখসে কাঁটাওয়ালা সবুজ খোসা',
          'চকচকে গাঢ় সবুজ চামড়ার মতো পাতা',
          'কাটলে সব অংশ থেকে আঠালো সাদা কষ বের হয়',
        ],
      },
    },
    habitat: {
      en: 'Homesteads, orchards and humid lowland forests on well-drained soils',
      bn: 'বসতবাড়ি, ফলবাগান ও পানি-নিষ্কাশিত মাটির আর্দ্র নিম্নভূমির বন',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Native to the rainforests of the Western Ghats in southern India; widely cultivated across Bangladesh, South and Southeast Asia, and elsewhere in the tropics.',
      bn: 'দক্ষিণ ভারতের পশ্চিমঘাট পর্বতের বৃষ্টিবনের আদি গাছ; বাংলাদেশসহ দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়া এবং বিশ্বের অন্যান্য ক্রান্তীয় অঞ্চলে ব্যাপক চাষ হয়।',
    },
    climate: {
      en: 'Warm, humid tropical climate; does not tolerate frost or waterlogging',
      bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় জলবায়ু; তুষারপাত বা জলাবদ্ধতা সহ্য করতে পারে না',
    },
    diet: {
      en: 'Photosynthesis; needs deep, well-drained soil',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; গভীর ও পানি-নিষ্কাশিত মাটি প্রয়োজন',
    },
    ecologicalRole: {
      en: 'Its strong-smelling fruit feeds bats, monkeys, squirrels and birds, which help disperse its seeds.',
      bn: 'তীব্র গন্ধের ফল বাদুড়, বানর, কাঠবিড়ালি ও পাখির খাবার; এরাই বীজ ছড়াতে সাহায্য করে।',
    },
    behavior: {
      en: 'Male and female flower spikes appear on the same tree in winter; fruits ripen in summer (about May–August).',
      bn: 'শীতকালে একই গাছে পুরুষ ও স্ত্রী ফুলের মঞ্জরি আসে; গ্রীষ্মে (মোটামুটি মে–আগস্ট) কাঁঠাল পাকে।',
    },
    range: {
      native: [
        [10.5, 76.2],
        [12.4, 75.7],
        [9.5, 77.0],
        [14.2, 74.8],
      ],
      introduced: [
        [24.0, 90.4],
        [23.5, 91.2],
        [13.7, 100.5],
        [-6.2, 106.8],
        [-12.9, -38.5],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Loss of wild trees in the Western Ghats', 'Heavy post-harvest losses because ripe fruit spoils quickly', 'Fruit rot and pest damage'],
        bn: ['পশ্চিমঘাটে বুনো গাছ হারিয়ে যাওয়া', 'পাকা ফল দ্রুত নষ্ট হওয়ায় সংগ্রহের পর বিপুল অপচয়', 'ফল পচা রোগ ও পোকার আক্রমণ'],
      },
      initiatives: {
        en: ['Variety improvement and year-round jackfruit research by BARI', 'Processing of jackfruit into chips, jam and meat substitutes to reduce waste'],
        bn: ['বারির মাধ্যমে উন্নত ও বারোমাসি কাঁঠালের জাত উদ্ভাবন', 'অপচয় কমাতে কাঁঠাল থেকে চিপস, জ্যাম ও মাংসের বিকল্প খাবার তৈরি'],
      },
    },
    facts: {
      en: [
        'A single jackfruit can contain hundreds of edible bulbs and seeds.',
        'Roasted or curried jackfruit seeds are a traditional Bangladeshi food.',
        'Young unripe jackfruit is popular worldwide as a plant-based meat substitute.',
      ],
      bn: [
        'একটি কাঁঠালে কয়েকশো কোয়া ও বিচি থাকতে পারে।',
        'ভাজা বা তরকারিতে রান্না কাঁঠালের বিচি বাংলাদেশের প্রচলিত খাবার।',
        'কচি কাঁচা কাঁঠাল বিশ্বজুড়ে মাংসের উদ্ভিজ্জ বিকল্প হিসেবে জনপ্রিয়।',
      ],
    },
    related: ['mango', 'banyan', 'sacred-fig'],
  },
  {
    id: 'coconut-palm',
    commonName: { en: 'Coconut Palm', bn: 'নারকেল' },
    scientificName: 'Cocos nucifera',
    altNames: {
      en: ['Coconut', 'Coconut Tree', 'Coco Palm'],
      bn: ['নারকেলগাছ', 'নারিকেল', 'ডাব'],
    },
    category: 'trees',
    wikiTitle: 'Coconut',
    description: {
      en: 'The coconut palm is a tall, slender palm that crowns tropical coasts and village ponds across Bangladesh. Almost every part is useful: green coconuts (dab) give refreshing water, mature nuts give flesh and oil, the husk gives coir rope and the leaves thatch roofs. Its floating, salt-tolerant nuts have spread it along tropical shores around the world.',
      bn: 'নারকেলগাছ লম্বা, সরু একটি পাম, যা ক্রান্তীয় সমুদ্রতীর থেকে শুরু করে বাংলাদেশের গ্রামের পুকুরপাড় পর্যন্ত সবখানে দেখা যায়। এর প্রায় সব অংশই কাজে লাগে: কচি ডাবের পানি তৃষ্ণা মেটায়, ঝুনা নারকেল থেকে শাঁস ও তেল, ছোবড়া থেকে দড়ি আর পাতা দিয়ে ঘরের ছাউনি হয়। লবণ সহনশীল নারকেল পানিতে ভেসে ভেসে পৃথিবীর ক্রান্তীয় উপকূলজুড়ে ছড়িয়ে পড়েছে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Arecales',
      family: 'Arecaceae',
      genus: 'Cocos',
      species: 'C. nucifera',
    },
    physical: {
      size: {
        en: 'Tall varieties grow up to about 30 m; leaves 4–6 m long',
        bn: 'লম্বা জাত প্রায় ৩০ মিটার পর্যন্ত উঁচু হয়; পাতা ৪–৬ মিটার লম্বা',
      },
      weight: {
        en: 'A mature coconut weighs about 1–2 kg',
        bn: 'একটি পরিণত নারকেলের ওজন প্রায় ১–২ কেজি',
      },
      lifespan: {
        en: 'Perennial; productive for 60–80 years',
        bn: 'বহুবর্ষজীবী; ৬০–৮০ বছর পর্যন্ত ফল দেয়',
      },
      features: {
        en: [
          'Single unbranched trunk marked with ring-like leaf scars',
          'Crown of large feather-shaped (pinnate) leaves',
          'Fruit with a thick fibrous husk around a hard shell',
        ],
        bn: [
          'শাখাহীন একক কাণ্ড, গায়ে আংটির মতো পাতা ঝরার দাগ',
          'মাথায় পালকের মতো বড় বড় পাতার মুকুট',
          'শক্ত খোলের চারপাশে পুরু আঁশযুক্ত ছোবড়া',
        ],
      },
    },
    habitat: {
      en: 'Sandy tropical coasts, islands, homesteads and pond banks',
      bn: 'ক্রান্তীয় বালুকাময় উপকূল, দ্বীপ, বসতবাড়ি ও পুকুরপাড়',
    },
    habitats: ['urban-farmland', 'ocean'],
    regions: ['south-asia', 'southeast-asia', 'oceania'],
    distribution: {
      en: 'Thought to originate in the Indo-Pacific region; now grown throughout the humid tropics, including coastal and southern Bangladesh.',
      bn: 'ধারণা করা হয় ইন্দো-প্রশান্ত মহাসাগরীয় অঞ্চলে এর উৎপত্তি; বর্তমানে বাংলাদেশের উপকূল ও দক্ষিণাঞ্চলসহ সারা বিশ্বের আর্দ্র ক্রান্তীয় এলাকায় জন্মে।',
    },
    climate: {
      en: 'Hot, humid tropical climate with plenty of sunshine and rainfall',
      bn: 'প্রচুর রোদ ও বৃষ্টিসহ উষ্ণ ও আর্দ্র ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; tolerates salty sandy soils near the sea',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; সমুদ্রের কাছের লবণাক্ত বালুমাটিতেও টিকে থাকে',
    },
    ecologicalRole: {
      en: 'Stabilises sandy coasts and provides nesting and feeding sites for birds, bats, crabs and insects.',
      bn: 'বালুকাময় উপকূলকে স্থিতিশীল রাখে এবং পাখি, বাদুড়, কাঁকড়া ও পোকামাকড়ের বাসা ও খাদ্যের জোগান দেয়।',
    },
    behavior: {
      en: 'Produces a new leaf and flower cluster roughly every month, so nuts are harvested year-round; fruits take about a year to mature.',
      bn: 'প্রায় প্রতি মাসে একটি নতুন পাতা ও ফুলের ছড়া বের হয়, তাই সারা বছর নারকেল পাওয়া যায়; একটি ফল পরিণত হতে প্রায় এক বছর লাগে।',
    },
    range: {
      native: [
        [7.9, 80.7],
        [10.3, 123.9],
        [-2.5, 118.0],
        [-6.3, 147.0],
        [-17.7, 178.0],
      ],
      introduced: [
        [22.0, 90.3],
        [-4.0, 39.6],
        [18.2, -66.5],
        [9.9, -84.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Ageing plantations and declining yields', 'Pests such as the rhinoceros beetle and red palm weevil', 'Lethal yellowing and other diseases'],
        bn: ['পুরোনো বাগান ও কমে আসা ফলন', 'গণ্ডার পোকা ও লাল পাম উইভিলের মতো ক্ষতিকর পোকা', 'লিথাল ইয়েলোয়িং ও অন্যান্য রোগ'],
      },
      initiatives: {
        en: ['International Coconut Genebank collections conserving varieties', 'Replanting with improved dwarf and hybrid varieties'],
        bn: ['আন্তর্জাতিক নারকেল জিনব্যাংকে বিভিন্ন জাত সংরক্ষণ', 'উন্নত খাটো ও হাইব্রিড জাত দিয়ে নতুন করে বাগান করা'],
      },
    },
    facts: {
      en: [
        'Coconuts can float at sea for months and still germinate on a new shore.',
        'Bangladesh’s Saint Martin’s Island is locally called Narikel Jinjira — “Coconut Island”.',
        'Coconut water is naturally sterile inside an unopened green nut.',
      ],
      bn: [
        'নারকেল মাসের পর মাস সমুদ্রে ভেসে থেকেও নতুন তীরে গিয়ে অঙ্কুরিত হতে পারে।',
        'বাংলাদেশের সেন্ট মার্টিন দ্বীপের স্থানীয় নাম নারিকেল জিঞ্জিরা।',
        'না-খোলা কচি ডাবের ভেতরের পানি প্রাকৃতিকভাবে জীবাণুমুক্ত থাকে।',
      ],
    },
    related: ['palmyra-palm', 'indian-date-palm', 'betel-nut-palm'],
  },
  {
    id: 'indian-date-palm',
    commonName: { en: 'Indian Date Palm', bn: 'খেজুর' },
    scientificName: 'Phoenix sylvestris',
    altNames: {
      en: ['Silver Date Palm', 'Sugar Date Palm', 'Wild Date Palm'],
      bn: ['খেজুরগাছ', 'খেজুর গাছ', 'বুনো খেজুর'],
    },
    category: 'trees',
    wikiTitle: 'Phoenix sylvestris',
    description: {
      en: 'The Indian date palm is the khejur tree of rural Bangladesh, best known for the sweet sap tapped from its trunk on winter mornings. Gachhis (sap collectors) cut the top of the trunk and hang earthen pots overnight; the juice is drunk fresh or boiled into jaggery (gur) and patali gur, especially in Jashore and Faridpur. Its small fruits are edible but much less fleshy than those of the Arabian date palm.',
      bn: 'খেজুরগাছ বাংলাদেশের গ্রামের পরিচিত গাছ, শীতের সকালে এর রসের জন্যই সবচেয়ে বিখ্যাত। গাছিরা কাণ্ডের মাথা চেঁছে রাতভর মাটির হাঁড়ি ঝুলিয়ে রস সংগ্রহ করেন; সেই রস কাঁচা খাওয়া হয় অথবা জ্বাল দিয়ে গুড় ও পাটালি বানানো হয় — যশোর ও ফরিদপুরের খেজুর গুড় বিশেষ নামকরা। এর ছোট ফল খাওয়া যায়, তবে আরবের খেজুরের মতো শাঁসালো নয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Arecales',
      family: 'Arecaceae',
      genus: 'Phoenix',
      species: 'P. sylvestris',
    },
    physical: {
      size: {
        en: 'Usually 4–15 m tall; trunk about 30–40 cm thick',
        bn: 'সাধারণত ৪–১৫ মিটার উঁচু; কাণ্ড প্রায় ৩০–৪০ সেমি মোটা',
      },
      weight: {
        en: 'Not measured by weight; a productive tree may yield several litres of sap per night in winter',
        bn: 'ওজন দিয়ে মাপা হয় না; শীতে একটি ভালো গাছ থেকে প্রতি রাতে কয়েক লিটার রস পাওয়া যায়',
      },
      lifespan: {
        en: 'Perennial; trees are tapped for many years',
        bn: 'বহুবর্ষজীবী; বহু বছর ধরে রস সংগ্রহ করা যায়',
      },
      features: {
        en: [
          'Rough trunk covered with old leaf bases',
          'Greyish-green feather-like leaves with sharp spines near the base',
          'Small orange-yellow fruits ripening to purplish-brown',
        ],
        bn: [
          'পুরোনো পাতার গোড়ায় ঢাকা খসখসে কাণ্ড',
          'ধূসর-সবুজ পালকের মতো পাতা, গোড়ার দিকে ধারালো কাঁটা',
          'ছোট কমলা-হলুদ ফল, পাকলে বেগুনি-বাদামি হয়',
        ],
      },
    },
    habitat: {
      en: 'Village roadsides, field edges, embankments and dry open plains',
      bn: 'গ্রামের রাস্তার ধার, জমির আল, বাঁধ এবং শুকনো খোলা প্রান্তর',
    },
    habitats: ['urban-farmland', 'grassland'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Native to Bangladesh, India, Pakistan, Nepal, Sri Lanka and Myanmar; especially common in western and southwestern Bangladesh.',
      bn: 'বাংলাদেশ, ভারত, পাকিস্তান, নেপাল, শ্রীলঙ্কা ও মিয়ানমারের আদি গাছ; বাংলাদেশের পশ্চিম ও দক্ষিণ-পশ্চিমাঞ্চলে বিশেষভাবে বেশি দেখা যায়।',
    },
    climate: {
      en: 'Tropical monsoon climate; tolerates drought and poor soils',
      bn: 'ক্রান্তীয় মৌসুমি জলবায়ু; খরা ও অনুর্বর মাটি সহ্য করতে পারে',
    },
    diet: {
      en: 'Photosynthesis; sugars stored in the trunk flow out as sap when it is tapped',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; কাণ্ডে জমা শর্করাই চাঁছার পর রস হয়ে বেরিয়ে আসে',
    },
    ecologicalRole: {
      en: 'Its fruits and sap feed birds, bats, squirrels and insects, and its crowns shelter nesting birds such as weavers.',
      bn: 'ফল ও রস পাখি, বাদুড়, কাঠবিড়ালি ও পোকামাকড়ের খাবার; মাথায় বাবুইসহ নানা পাখি বাসা বাঁধে।',
    },
    behavior: {
      en: 'Male and female flowers grow on separate trees in spring; sap flows best on cold winter nights (about November–February).',
      bn: 'বসন্তে আলাদা গাছে পুরুষ ও স্ত্রী ফুল ফোটে; শীতের ঠান্ডা রাতে (মোটামুটি নভেম্বর–ফেব্রুয়ারি) সবচেয়ে বেশি রস ঝরে।',
    },
    range: {
      native: [
        [23.17, 89.21],
        [23.6, 89.84],
        [25.6, 85.1],
        [22.6, 88.4],
        [27.5, 83.5],
        [30.2, 71.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Felling for brick-kiln fuel', 'Declining number of skilled gachhis', 'Nipah virus risk from bats contaminating raw sap'],
        bn: ['ইটভাটার জ্বালানির জন্য গাছ কাটা', 'দক্ষ গাছির সংখ্যা কমে যাওয়া', 'বাদুড়ের মাধ্যমে কাঁচা রসে নিপাহ ভাইরাস ছড়ানোর ঝুঁকি'],
      },
      initiatives: {
        en: ['Roadside and embankment date-palm planting programmes', 'Geographical Indication status for Jashore date-palm jaggery'],
        bn: ['রাস্তা ও বাঁধের ধারে খেজুরগাছ রোপণ কর্মসূচি', 'যশোরের খেজুর গুড়ের ভৌগোলিক নির্দেশক (জিআই) স্বীকৃতি'],
      },
    },
    facts: {
      en: [
        'Health authorities advise against drinking raw date-palm sap because bats can spread the deadly Nipah virus into it.',
        'The zigzag notches left by tapping are a familiar sight on old khejur trees.',
        'Its leaves are woven into mats, baskets and brooms.',
      ],
      bn: [
        'বাদুড়ের মাধ্যমে প্রাণঘাতী নিপাহ ভাইরাস ছড়াতে পারে বলে স্বাস্থ্য বিভাগ কাঁচা খেজুরের রস না খাওয়ার পরামর্শ দেয়।',
        'পুরোনো খেজুরগাছের গায়ে রস কাটার আঁকাবাঁকা খাঁজ খুব পরিচিত দৃশ্য।',
        'এর পাতা দিয়ে পাটি, ঝুড়ি ও ঝাড়ু বানানো হয়।',
      ],
    },
    related: ['palmyra-palm', 'coconut-palm', 'betel-nut-palm'],
  },
  {
    id: 'palmyra-palm',
    commonName: { en: 'Palmyra Palm', bn: 'তাল' },
    scientificName: 'Borassus flabellifer',
    altNames: {
      en: ['Toddy Palm', 'Asian Palmyra Palm', 'Sugar Palm'],
      bn: ['তালগাছ', 'তাল গাছ', 'তালবৃক্ষ'],
    },
    category: 'trees',
    wikiTitle: 'Borassus flabellifer',
    description: {
      en: 'The palmyra palm is the tall tal tree that stands alone above Bangladeshi fields, immortalised in Rabindranath Tagore’s poem “Taal gachh ek paye dariye”. Its round fan-shaped leaves, sweet sap, jelly-like young seeds (tal shash) and fibrous ripe fruit pulp, used for tal pitha, are all part of rural life. It is also planted along roads and embankments because it resists drought and is said to attract lightning away from homes.',
      bn: 'তালগাছ বাংলাদেশের মাঠে একা দাঁড়িয়ে থাকা লম্বা গাছ — রবীন্দ্রনাথের "তালগাছ এক পায়ে দাঁড়িয়ে" কবিতায় যে অমর হয়ে আছে। পাখার মতো গোল পাতা, মিষ্টি রস, কচি তালের নরম শাঁস আর পাকা তালের রস দিয়ে তৈরি তালের পিঠা — সবই গ্রামীণ জীবনের অংশ। খরাসহিষ্ণু হওয়ায় এবং বজ্রপাত থেকে রক্ষায় সহায়ক বলে রাস্তা ও বাঁধের ধারে তালগাছ লাগানো হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Arecales',
      family: 'Arecaceae',
      genus: 'Borassus',
      species: 'B. flabellifer',
    },
    physical: {
      size: {
        en: 'Up to about 30 m tall; leaves 2–3 m across',
        bn: 'প্রায় ৩০ মিটার পর্যন্ত উঁচু; পাতা ২–৩ মিটার চওড়া',
      },
      weight: {
        en: 'Not measured by weight; each fruit is roughly 1–2 kg',
        bn: 'ওজন দিয়ে মাপা হয় না; একেকটি তাল মোটামুটি ১–২ কেজি',
      },
      lifespan: {
        en: 'Long-lived perennial, often over 100 years',
        bn: 'দীর্ঘজীবী বহুবর্ষজীবী; প্রায়ই ১০০ বছরের বেশি বাঁচে',
      },
      features: {
        en: [
          'Very tall, straight, dark trunk without branches',
          'Stiff fan-shaped leaves on spiny-edged stalks',
          'Round black-purple fruits in heavy clusters',
        ],
        bn: [
          'খুব লম্বা, সোজা, কালচে শাখাহীন কাণ্ড',
          'কাঁটাওয়ালা ডাঁটায় শক্ত পাখার মতো পাতা',
          'ভারী কাঁদিতে গোল কালচে-বেগুনি ফল',
        ],
      },
    },
    habitat: {
      en: 'Open farmland, roadsides, embankments and dry plains',
      bn: 'খোলা কৃষিজমি, রাস্তার ধার, বাঁধ ও শুকনো সমভূমি',
    },
    habitats: ['urban-farmland', 'grassland'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Native to South Asia and mainland Southeast Asia, from India and Sri Lanka to Cambodia; common across Bangladesh.',
      bn: 'ভারত ও শ্রীলঙ্কা থেকে কম্বোডিয়া পর্যন্ত দক্ষিণ ও মূল ভূখণ্ডের দক্ষিণ-পূর্ব এশিয়ার আদি গাছ; বাংলাদেশের সর্বত্র দেখা যায়।',
    },
    climate: {
      en: 'Hot tropical climate with a long dry season',
      bn: 'দীর্ঘ শুষ্ক মৌসুমসহ গরম ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; deep roots let it survive on dry, poor soils',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; গভীর শিকড়ের কারণে শুকনো অনুর্বর মাটিতেও টিকে থাকে',
    },
    ecologicalRole: {
      en: 'Its crown is a favourite nesting site of the baya weaver, whose hanging nests are a classic Bangladeshi sight; bats and palm squirrels feed on it.',
      bn: 'এর মাথা বাবুই পাখির প্রিয় বাসার জায়গা — তালগাছে ঝুলন্ত বাবুইয়ের বাসা বাংলার চিরচেনা দৃশ্য; বাদুড় ও কাঠবিড়ালিও এখান থেকে খাবার পায়।',
    },
    behavior: {
      en: 'Grows slowly and begins fruiting after many years; male and female trees are separate, and fruits ripen in the late monsoon (Bhadro).',
      bn: 'ধীরে বাড়ে এবং বহু বছর পর ফল দিতে শুরু করে; পুরুষ ও স্ত্রী গাছ আলাদা, আর ভাদ্র মাসে তাল পাকে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [9.7, 80.0],
        [11.0, 79.0],
        [16.5, 80.6],
        [13.4, 103.9],
        [21.0, 96.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Felling for timber and brick-kiln fuel', 'Slow growth makes lost trees hard to replace'],
        bn: ['কাঠ ও ইটভাটার জ্বালানির জন্য গাছ কাটা', 'ধীরে বাড়ে বলে হারানো গাছের জায়গা সহজে পূরণ হয় না'],
      },
      initiatives: {
        en: ['Government programmes in Bangladesh planting millions of palmyra palms to reduce lightning deaths', 'Roadside and embankment tree-planting campaigns'],
        bn: ['বজ্রপাতে মৃত্যু কমাতে বাংলাদেশ সরকারের লাখ লাখ তালগাছ রোপণ কর্মসূচি', 'রাস্তা ও বাঁধের ধারে বৃক্ষরোপণ অভিযান'],
      },
    },
    facts: {
      en: [
        'Ancient South Asian manuscripts were written on dried palmyra leaves.',
        'The palmyra palm is the national tree of Cambodia.',
        'Baya weavers often build dozens of nests in a single palm.',
      ],
      bn: [
        'প্রাচীন দক্ষিণ এশিয়ার পুঁথি শুকনো তালপাতায় লেখা হতো।',
        'তালগাছ কম্বোডিয়ার জাতীয় বৃক্ষ।',
        'একটি তালগাছে বাবুই পাখি অনেক সময় কয়েক ডজন বাসা বাঁধে।',
      ],
    },
    related: ['indian-date-palm', 'coconut-palm', 'betel-nut-palm'],
  },
  {
    id: 'betel-nut-palm',
    commonName: { en: 'Betel Nut Palm', bn: 'সুপারি' },
    scientificName: 'Areca catechu',
    altNames: {
      en: ['Areca Palm', 'Areca Nut Palm', 'Betel Palm'],
      bn: ['সুপারিগাছ', 'সুপারি গাছ', 'গুয়া'],
    },
    category: 'trees',
    wikiTitle: 'Areca catechu',
    description: {
      en: 'The betel nut palm is a tall, very slender palm planted in dense groves around homesteads in Bangladesh, especially in Barishal, Noakhali and Cox’s Bazar. Its seed, the areca nut (supari), is chewed with betel leaf (paan) — a deep-rooted social custom across South and Southeast Asia. Its fallen leaf sheaths are pressed into eco-friendly plates and hats.',
      bn: 'সুপারিগাছ লম্বা ও খুব সরু একটি পাম; বাংলাদেশে বিশেষ করে বরিশাল, নোয়াখালী ও কক্সবাজারে বসতবাড়ির চারপাশে ঘন বাগান করে লাগানো হয়। এর বীজ সুপারি পানের সঙ্গে চিবিয়ে খাওয়া দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার বহু পুরোনো সামাজিক রীতি। ঝরে পড়া পাতার খোল (খোলা) চেপে পরিবেশবান্ধব থালা ও টুপি তৈরি হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Arecales',
      family: 'Arecaceae',
      genus: 'Areca',
      species: 'A. catechu',
    },
    physical: {
      size: {
        en: 'Usually 10–20 m tall with a trunk only 10–15 cm thick',
        bn: 'সাধারণত ১০–২০ মিটার উঁচু; কাণ্ড মাত্র ১০–১৫ সেমি মোটা',
      },
      weight: {
        en: 'Not measured by weight; a bunch carries dozens to a few hundred nuts',
        bn: 'ওজন দিয়ে মাপা হয় না; একেকটি কাঁদিতে কয়েক ডজন থেকে কয়েকশো সুপারি ধরে',
      },
      lifespan: {
        en: 'Perennial; productive for about 40–60 years',
        bn: 'বহুবর্ষজীবী; প্রায় ৪০–৬০ বছর ফল দেয়',
      },
      features: {
        en: [
          'Very straight, slim, ringed green-grey trunk',
          'Smooth green crownshaft below a small crown of feathery leaves',
          'Egg-sized fruits that turn orange-red when ripe',
        ],
        bn: [
          'খুব সোজা, সরু, আংটিদাগওয়ালা সবুজ-ধূসর কাণ্ড',
          'পালকের মতো পাতার ছোট মুকুটের নিচে মসৃণ সবুজ খোল',
          'ডিমের মতো আকারের ফল, পাকলে কমলা-লাল হয়',
        ],
      },
    },
    habitat: {
      en: 'Homestead groves and plantations in humid, low-lying areas',
      bn: 'আর্দ্র নিচু এলাকার বসতবাড়ির বাগান ও আবাদি জমি',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Probably native to the Philippines and Malesia; cultivated for centuries throughout tropical Asia, including all of Bangladesh.',
      bn: 'সম্ভবত ফিলিপাইন ও মালয় দ্বীপপুঞ্জ অঞ্চলের আদি গাছ; বহু শতাব্দী ধরে বাংলাদেশসহ সমগ্র ক্রান্তীয় এশিয়ায় চাষ হচ্ছে।',
    },
    climate: {
      en: 'Hot, humid tropical climate with high rainfall',
      bn: 'বেশি বৃষ্টিপাতসহ উষ্ণ ও আর্দ্র ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; prefers moist, fertile, well-drained soil',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; আর্দ্র, উর্বর ও পানি-নিষ্কাশিত মাটি পছন্দ করে',
    },
    ecologicalRole: {
      en: 'Groves provide shade and shelter for birds, squirrels and climbing plants such as betel and black pepper vines.',
      bn: 'সুপারিবাগান পাখি ও কাঠবিড়ালির আশ্রয় এবং পান ও গোলমরিচের মতো লতানো গাছের অবলম্বন।',
    },
    behavior: {
      en: 'Begins fruiting after about 5–8 years; flowers mostly in spring and summer, with nuts harvested in late autumn and winter.',
      bn: 'প্রায় ৫–৮ বছর বয়সে ফল দিতে শুরু করে; মূলত বসন্ত ও গ্রীষ্মে ফুল আসে, হেমন্ত ও শীতে সুপারি সংগ্রহ করা হয়।',
    },
    range: {
      native: [
        [14.6, 121.0],
        [10.3, 123.9],
        [7.1, 125.6],
        [12.0, 122.5],
      ],
      introduced: [
        [22.7, 90.35],
        [22.8, 91.1],
        [13.9, 75.6],
        [10.5, 76.2],
        [19.2, 109.7],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Fungal diseases such as fruit rot (koleroga)', 'Yellow leaf disease reducing yields'],
        bn: ['ফল পচার (কোলেরোগা) মতো ছত্রাকজনিত রোগ', 'হলুদ পাতা রোগে ফলন কমে যাওয়া'],
      },
      initiatives: {
        en: ['Disease-resistant variety research in India and Bangladesh', 'Promotion of areca-leaf plates as a plastic alternative'],
        bn: ['ভারত ও বাংলাদেশে রোগপ্রতিরোধী জাত নিয়ে গবেষণা', 'প্লাস্টিকের বিকল্প হিসেবে সুপারির খোলার থালা জনপ্রিয় করা'],
      },
    },
    facts: {
      en: [
        'Caution: areca nut is classified as a human carcinogen — regular chewing is linked to oral cancer.',
        'Offering paan-supari to guests is a traditional sign of hospitality in Bangladesh.',
        'The ornamental “areca palm” sold in nurseries is usually a different species.',
      ],
      bn: [
        'সতর্কতা: সুপারি মানুষের জন্য ক্যানসার সৃষ্টিকারী হিসেবে চিহ্নিত — নিয়মিত সুপারি চিবানো মুখগহ্বরের ক্যানসারের সঙ্গে যুক্ত।',
        'অতিথিকে পান-সুপারি দিয়ে আপ্যায়ন বাংলাদেশের পুরোনো রীতি।',
        'নার্সারিতে বিক্রি হওয়া শোভাবর্ধক "এরিকা পাম" সাধারণত আলাদা প্রজাতি।',
      ],
    },
    related: ['coconut-palm', 'palmyra-palm', 'indian-date-palm'],
  },
  {
    id: 'sal-tree',
    commonName: { en: 'Sal', bn: 'শাল' },
    scientificName: 'Shorea robusta',
    altNames: {
      en: ['Sal Tree', 'Sakhua', 'Shala Tree'],
      bn: ['শালগাছ', 'গজারি', 'শাল গাছ'],
    },
    category: 'trees',
    wikiTitle: 'Shorea robusta',
    description: {
      en: 'Sal is a large hardwood tree that forms vast deciduous forests across northern India, Nepal and central Bangladesh. In Bangladesh its forests survive in Madhupur, Gazipur (Bhawal National Park) and the north, where the tree is locally called gajari. Its strong, durable timber was used for houses, railway sleepers and boats, and its leaves are stitched into plates.',
      bn: 'শাল একটি বড় শক্ত কাঠের গাছ, যা উত্তর ভারত, নেপাল ও মধ্য বাংলাদেশে বিস্তীর্ণ পাতাঝরা বন গড়ে তোলে। বাংলাদেশে মধুপুর, গাজীপুরের ভাওয়াল জাতীয় উদ্যান ও উত্তরাঞ্চলে শালবন টিকে আছে; স্থানীয়ভাবে এ গাছকে গজারিও বলে। এর মজবুত ও টেকসই কাঠ ঘরবাড়ি, রেলের স্লিপার ও নৌকা তৈরিতে ব্যবহৃত হয়েছে, আর পাতা সেলাই করে থালা বানানো হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Malvales',
      family: 'Dipterocarpaceae',
      genus: 'Shorea',
      species: 'S. robusta',
    },
    physical: {
      size: {
        en: 'Usually 30–35 m tall; trunk up to about 2 m in diameter',
        bn: 'সাধারণত ৩০–৩৫ মিটার উঁচু; কাণ্ডের ব্যাস প্রায় ২ মিটার পর্যন্ত',
      },
      weight: {
        en: 'Not measured by weight; its heartwood is very heavy and hard',
        bn: 'ওজন দিয়ে মাপা হয় না; এর সারকাঠ খুব ভারী ও শক্ত',
      },
      lifespan: {
        en: 'Long-lived perennial; trees can live well over 100 years',
        bn: 'দীর্ঘজীবী বহুবর্ষজীবী; ১০০ বছরেরও অনেক বেশি বাঁচতে পারে',
      },
      features: {
        en: [
          'Tall straight trunk with thick, deeply furrowed bark',
          'Large shiny oval leaves',
          'Seeds with five papery wings that spin as they fall',
        ],
        bn: [
          'লম্বা সোজা কাণ্ড, বাকল পুরু ও গভীর খাঁজকাটা',
          'বড় চকচকে ডিম্বাকার পাতা',
          'পাঁচটি কাগজের মতো ডানাওয়ালা বীজ, যা ঘুরতে ঘুরতে মাটিতে পড়ে',
        ],
      },
    },
    habitat: {
      en: 'Tropical moist and dry deciduous forests on well-drained red laterite soils',
      bn: 'পানি-নিষ্কাশিত লাল ল্যাটেরাইট মাটির ক্রান্তীয় আর্দ্র ও শুষ্ক পাতাঝরা বন',
    },
    habitats: ['tropical-forest'],
    regions: ['south-asia'],
    distribution: {
      en: 'Native to India, Nepal, Bhutan and Bangladesh, from the Himalayan foothills to central and eastern India and the Madhupur tract.',
      bn: 'হিমালয়ের পাদদেশ থেকে মধ্য ও পূর্ব ভারত এবং মধুপুর গড় পর্যন্ত — ভারত, নেপাল, ভুটান ও বাংলাদেশের আদি গাছ।',
    },
    climate: {
      en: 'Tropical monsoon climate with a pronounced dry season',
      bn: 'স্পষ্ট শুষ্ক মৌসুমসহ ক্রান্তীয় মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; roots partner with mycorrhizal fungi that help absorb nutrients',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; শিকড়ের সঙ্গে মাইকোরাইজা ছত্রাক মিলে পুষ্টি শোষণে সাহায্য করে',
    },
    ecologicalRole: {
      en: 'Sal forests are home to elephants, deer, langurs and many birds, and support forest communities such as the Garo and Koch.',
      bn: 'শালবন হাতি, হরিণ, মুখপোড়া হনুমান ও নানা পাখির আবাস এবং গারো ও কোচের মতো বননির্ভর জনগোষ্ঠীর জীবিকার উৎস।',
    },
    behavior: {
      en: 'Sheds most of its leaves briefly in the dry season, flowers in spring and releases winged seeds at the start of the monsoon, which germinate within days.',
      bn: 'শুষ্ক মৌসুমে অল্প সময়ের জন্য বেশির ভাগ পাতা ঝরায়, বসন্তে ফুল ফোটে এবং বর্ষার শুরুতে ডানাওয়ালা বীজ ঝরে, যা কয়েক দিনের মধ্যেই অঙ্কুরিত হয়।',
    },
    range: {
      native: [
        [24.6, 90.1],
        [24.1, 90.4],
        [25.7, 88.6],
        [27.6, 84.4],
        [23.4, 85.3],
        [22.0, 81.5],
      ],
    },
    conservation: {
      status: 'NT',
      trend: 'decreasing',
      threats: {
        en: ['Encroachment and conversion of sal forest to farms and factories', 'Illegal felling', 'Replacement with fast-growing exotic plantations'],
        bn: ['শালবন দখল করে কৃষিজমি ও কারখানা স্থাপন', 'অবৈধভাবে গাছ কাটা', 'দ্রুত বর্ধনশীল বিদেশি গাছের বাগান দিয়ে শালবন প্রতিস্থাপন'],
      },
      initiatives: {
        en: ['Protection in Bhawal and Madhupur National Parks', 'Community-based forest co-management programmes'],
        bn: ['ভাওয়াল ও মধুপুর জাতীয় উদ্যানে সংরক্ষণ', 'স্থানীয় জনগোষ্ঠীকে নিয়ে বনের সহ-ব্যবস্থাপনা কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'Buddhist tradition holds that the Buddha was born and died beneath sal trees.',
        'Its resin, known as dhuna, is burnt as incense.',
        'Sal regrows vigorously from stumps, which helps damaged forests recover.',
      ],
      bn: [
        'বৌদ্ধ ঐতিহ্য অনুযায়ী গৌতম বুদ্ধের জন্ম ও মহাপরিনির্বাণ দুই-ই শালগাছের নিচে।',
        'এর রজন "ধুনা" নামে পরিচিত, যা ধূপ হিসেবে পোড়ানো হয়।',
        'কাটা গোড়া থেকে শাল জোরালোভাবে আবার গজায়, ফলে ক্ষতিগ্রস্ত বন সহজে পুনরুদ্ধার হয়।',
      ],
    },
    related: ['teak', 'garjan', 'asian-elephant'],
  },
  {
    id: 'teak',
    commonName: { en: 'Teak', bn: 'সেগুন' },
    scientificName: 'Tectona grandis',
    altNames: {
      en: ['Teak Tree', 'Burma Teak', 'Indian Oak'],
      bn: ['সেগুনগাছ', 'সেগুন গাছ', 'শেগুন'],
    },
    category: 'trees',
    wikiTitle: 'Teak',
    description: {
      en: 'Teak is one of the world’s most prized timber trees, famous for its golden-brown, oily wood that resists water, termites and decay. Native to India, Myanmar, Laos and Thailand, it has been planted widely in Bangladesh, especially in the Chattogram Hill Tracts and Cox’s Bazar. Although plantations are common, natural old-growth teak forests have shrunk badly.',
      bn: 'সেগুন পৃথিবীর অন্যতম মূল্যবান কাঠের গাছ; এর সোনালি-বাদামি তৈলাক্ত কাঠ পানি, উইপোকা ও পচন প্রতিরোধে বিখ্যাত। ভারত, মিয়ানমার, লাওস ও থাইল্যান্ডের আদি এই গাছ বাংলাদেশে, বিশেষ করে পার্বত্য চট্টগ্রাম ও কক্সবাজারে, ব্যাপকভাবে লাগানো হয়েছে। বাগান প্রচুর থাকলেও প্রাকৃতিক পুরোনো সেগুনবন মারাত্মকভাবে কমে গেছে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Lamiales',
      family: 'Lamiaceae',
      genus: 'Tectona',
      species: 'T. grandis',
    },
    physical: {
      size: {
        en: 'Up to about 40 m tall in natural forest',
        bn: 'প্রাকৃতিক বনে প্রায় ৪০ মিটার পর্যন্ত উঁচু হয়',
      },
      weight: {
        en: 'Not measured by weight; its timber is moderately heavy and very stable',
        bn: 'ওজন দিয়ে মাপা হয় না; এর কাঠ মাঝারি ভারী ও খুব টেকসই',
      },
      lifespan: {
        en: 'Long-lived perennial; plantation trees are usually felled at 40–80 years',
        bn: 'দীর্ঘজীবী বহুবর্ষজীবী; বাগানের গাছ সাধারণত ৪০–৮০ বছর বয়সে কাটা হয়',
      },
      features: {
        en: [
          'Very large, rough, papery leaves up to 50 cm long',
          'Large sprays of small white flowers at the branch tips',
          'Golden-brown oily heartwood',
        ],
        bn: [
          '৫০ সেমি পর্যন্ত লম্বা খসখসে, বিশাল পাতা',
          'ডালের আগায় ছোট সাদা ফুলের বড় থোকা',
          'সোনালি-বাদামি তৈলাক্ত সারকাঠ',
        ],
      },
    },
    habitat: {
      en: 'Tropical dry and moist deciduous forests on hills and well-drained soils',
      bn: 'পাহাড় ও পানি-নিষ্কাশিত মাটির ক্রান্তীয় শুষ্ক ও আর্দ্র পাতাঝরা বন',
    },
    habitats: ['tropical-forest', 'mountain'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Native to India, Myanmar, Laos and Thailand; planted across the tropics, including Bangladesh, Indonesia, Africa and Central America.',
      bn: 'ভারত, মিয়ানমার, লাওস ও থাইল্যান্ডের আদি গাছ; বাংলাদেশ, ইন্দোনেশিয়া, আফ্রিকা ও মধ্য আমেরিকাসহ সারা ক্রান্তীয় অঞ্চলে লাগানো হয়।',
    },
    climate: {
      en: 'Tropical monsoon climate with a dry season of several months',
      bn: 'কয়েক মাসের শুষ্ক মৌসুমসহ ক্রান্তীয় মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; needs deep, well-drained, fairly fertile soil',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; গভীর, পানি-নিষ্কাশিত ও মোটামুটি উর্বর মাটি প্রয়োজন',
    },
    ecologicalRole: {
      en: 'Wild teak forests support elephants, deer and many birds; monoculture plantations, by contrast, often suffer soil erosion.',
      bn: 'প্রাকৃতিক সেগুনবন হাতি, হরিণ ও নানা পাখির আবাস; বিপরীতে একক প্রজাতির সেগুনবাগানে প্রায়ই মাটির ক্ষয় দেখা দেয়।',
    },
    behavior: {
      en: 'Drops its leaves in the dry season and flowers in the monsoon (about June–August); seeds have hard coats and germinate slowly.',
      bn: 'শুষ্ক মৌসুমে পাতা ঝরায় এবং বর্ষায় (মোটামুটি জুন–আগস্ট) ফুল ফোটে; বীজের খোসা শক্ত, তাই ধীরে অঙ্কুরিত হয়।',
    },
    range: {
      native: [
        [11.6, 76.3],
        [21.0, 79.0],
        [19.7, 96.1],
        [18.8, 99.0],
        [19.9, 102.1],
      ],
      introduced: [
        [22.4, 92.1],
        [21.4, 92.0],
        [-7.0, 111.0],
        [7.9, -1.0],
        [9.9, -84.5],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Over-exploitation of wild trees for high-value timber', 'Clearance of natural forests', 'Loss of wild genetic diversity'],
        bn: ['দামি কাঠের জন্য বুনো গাছ মাত্রাতিরিক্ত কাটা', 'প্রাকৃতিক বন উজাড়', 'বুনো জিনগত বৈচিত্র্য হারিয়ে যাওয়া'],
      },
      initiatives: {
        en: ['Export controls on natural teak in Myanmar', 'Seed orchards and genetic conservation of wild teak populations'],
        bn: ['মিয়ানমারে প্রাকৃতিক সেগুন কাঠ রপ্তানিতে নিয়ন্ত্রণ', 'বুনো সেগুনের বীজ বাগান ও জিন সংরক্ষণ'],
      },
    },
    facts: {
      en: [
        'Teak’s natural oils make it a favourite wood for ship decks and outdoor furniture.',
        'The Kaptai area of the Chattogram Hill Tracts has some of Bangladesh’s oldest teak plantations.',
        'Crushed young teak leaves release a red dye.',
      ],
      bn: [
        'প্রাকৃতিক তেলের কারণে জাহাজের ডেক ও বাইরের আসবাব তৈরিতে সেগুন কাঠ সবচেয়ে পছন্দের।',
        'পার্বত্য চট্টগ্রামের কাপ্তাই এলাকায় বাংলাদেশের সবচেয়ে পুরোনো কিছু সেগুনবাগান রয়েছে।',
        'কচি সেগুনপাতা পিষলে লাল রং বের হয়।',
      ],
    },
    related: ['sal-tree', 'garjan', 'asian-elephant'],
  },
  {
    id: 'red-silk-cotton-tree',
    commonName: { en: 'Red Silk-cotton Tree', bn: 'শিমুল' },
    scientificName: 'Bombax ceiba',
    altNames: {
      en: ['Cotton Tree', 'Red Cotton Tree', 'Kapok Tree'],
      bn: ['শিমুলগাছ', 'রক্তশিমুল', 'শিমুল তুলা'],
    },
    category: 'trees',
    wikiTitle: 'Bombax ceiba',
    description: {
      en: 'The red silk-cotton tree, shimul, sets the bare branches of late winter ablaze with large crimson flowers, announcing the arrival of spring (Basanta) in Bangladesh. Its pods later burst to release seeds wrapped in soft white floss, used to stuff pillows and quilts. The flowers are full of nectar and draw crowds of mynas, bulbuls and other birds.',
      bn: 'শীতের শেষে পাতাহীন ডালে বড় বড় টকটকে লাল ফুল ফুটিয়ে শিমুল বাংলাদেশে বসন্তের আগমনী বার্তা দেয়। পরে ফল ফেটে নরম সাদা তুলায় মোড়া বীজ উড়ে বেড়ায়; এই তুলা দিয়ে বালিশ ও লেপ বানানো হয়। ফুলে প্রচুর মধু থাকায় শালিক, বুলবুলিসহ নানা পাখি ভিড় জমায়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Malvales',
      family: 'Malvaceae',
      genus: 'Bombax',
      species: 'B. ceiba',
    },
    physical: {
      size: {
        en: 'Usually 20–30 m tall, sometimes more, with a buttressed base',
        bn: 'সাধারণত ২০–৩০ মিটার, কখনো আরও উঁচু; গোড়ায় ঠেসমূল থাকে',
      },
      weight: {
        en: 'Not measured by weight; its timber is soft and light',
        bn: 'ওজন দিয়ে মাপা হয় না; এর কাঠ নরম ও হালকা',
      },
      lifespan: {
        en: 'Long-lived perennial; many decades',
        bn: 'দীর্ঘজীবী বহুবর্ষজীবী; বহু দশক বাঁচে',
      },
      features: {
        en: [
          'Young trunk covered with sharp conical prickles',
          'Large cup-shaped crimson or orange flowers on leafless branches',
          'Branches spread horizontally in tiers',
        ],
        bn: [
          'কচি কাণ্ডে ধারালো শঙ্কু আকৃতির কাঁটা',
          'পাতাহীন ডালে পেয়ালার মতো বড় লাল বা কমলা ফুল',
          'ডালপালা থাকে থাকে আনুভূমিকভাবে ছড়ানো',
        ],
      },
    },
    habitat: {
      en: 'Deciduous forests, riverbanks, village roadsides and farmland',
      bn: 'পাতাঝরা বন, নদীর পাড়, গ্রামের রাস্তার ধার ও কৃষিজমি',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'oceania'],
    distribution: {
      en: 'Native from Pakistan and India through Bangladesh and Southeast Asia to southern China and northern Australia.',
      bn: 'পাকিস্তান ও ভারত থেকে বাংলাদেশ, দক্ষিণ-পূর্ব এশিয়া হয়ে দক্ষিণ চীন ও উত্তর অস্ট্রেলিয়া পর্যন্ত এর আদি বিস্তার।',
    },
    climate: {
      en: 'Tropical and subtropical monsoon climates with a dry winter',
      bn: 'শুকনো শীতসহ ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; grows fast on deep alluvial soils',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; গভীর পলিমাটিতে দ্রুত বাড়ে',
    },
    ecologicalRole: {
      en: 'Its nectar-rich flowers are a vital late-winter food source for birds, squirrels, bees and bats, which pollinate it.',
      bn: 'মধুভরা ফুল শীতের শেষে পাখি, কাঠবিড়ালি, মৌমাছি ও বাদুড়ের গুরুত্বপূর্ণ খাদ্য; এরাই পরাগায়ন ঘটায়।',
    },
    behavior: {
      en: 'Sheds all its leaves in winter, flowers in February–March, and its pods split in April–May to scatter fluffy seeds on the wind.',
      bn: 'শীতে সব পাতা ঝরিয়ে ফেলে, ফেব্রুয়ারি–মার্চে ফুল ফোটে এবং এপ্রিল–মে মাসে ফল ফেটে তুলাওয়ালা বীজ বাতাসে ছড়িয়ে পড়ে।',
    },
    range: {
      native: [
        [25.1, 91.4],
        [23.8, 90.4],
        [27.0, 80.0],
        [16.8, 96.2],
        [23.1, 113.3],
        [-12.5, 131.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Felling for matchstick and plywood timber', 'Loss of large old trees along roads and rivers'],
        bn: ['দেশলাইয়ের কাঠি ও প্লাইউডের জন্য গাছ কাটা', 'রাস্তা ও নদীর ধারের বড় পুরোনো গাছ হারিয়ে যাওয়া'],
      },
      initiatives: {
        en: ['Popular planting in roadside and urban greening schemes', 'Protected shimul gardens that have become tourist sites, such as the one at Tahirpur, Sunamganj'],
        bn: ['রাস্তার ধারে ও নগর সবুজায়নে শিমুল রোপণ', 'সুনামগঞ্জের তাহিরপুরের মতো শিমুলবাগান সংরক্ষণ, যা এখন পর্যটনকেন্দ্র'],
      },
    },
    facts: {
      en: [
        'The silky floss is too short to spin but is light, buoyant and warm, ideal for pillows.',
        'Shimul flowers are a symbol of Pohela Falgun, the first day of spring in Bangladesh.',
        'It is the official tree of Guangzhou, China, where it is called the kapok flower.',
      ],
      bn: [
        'শিমুল তুলার আঁশ সুতা কাটার মতো লম্বা নয়, তবে হালকা, ভাসমান ও উষ্ণ — বালিশের জন্য আদর্শ।',
        'বাংলাদেশে পহেলা ফাল্গুন ও বসন্ত উৎসবের প্রতীক শিমুল ফুল।',
        'চীনের গুয়াংঝু শহরের প্রতীকী ফুল শিমুল।',
      ],
    },
    related: ['royal-poinciana', 'kadam', 'arjuna'],
  },
  {
    id: 'royal-poinciana',
    commonName: { en: 'Royal Poinciana', bn: 'কৃষ্ণচূড়া' },
    scientificName: 'Delonix regia',
    altNames: {
      en: ['Flame Tree', 'Gulmohar', 'Flamboyant'],
      bn: ['কৃষ্ণচূড়া গাছ', 'গুলমোহর', 'অগ্নিশিখা'],
    },
    category: 'trees',
    wikiTitle: 'Delonix regia',
    description: {
      en: 'The royal poinciana, krishnachura, is one of the most spectacular flowering trees in the world, covering its umbrella-shaped crown in scarlet blossoms during the Bangladeshi summer. Though it is native only to the dry forests of Madagascar, it has been planted so widely along roads, campuses and parks across South Asia that it feels entirely local. In the wild it is threatened by forest loss in Madagascar.',
      bn: 'কৃষ্ণচূড়া পৃথিবীর সবচেয়ে দৃষ্টিনন্দন ফুলের গাছগুলোর একটি; বাংলাদেশের গ্রীষ্মে ছাতার মতো মাথাজুড়ে টকটকে লাল ফুলে ছেয়ে যায়। এর আদি নিবাস কেবল মাদাগাস্কারের শুষ্ক বন, তবে দক্ষিণ এশিয়ার রাস্তা, শিক্ষাপ্রতিষ্ঠান ও পার্কে এত বেশি লাগানো হয়েছে যে একে একেবারে দেশি গাছ মনে হয়। বনে মাদাগাস্কারের বন উজাড়ের কারণে এটি হুমকির মুখে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Fabales',
      family: 'Fabaceae',
      genus: 'Delonix',
      species: 'D. regia',
    },
    physical: {
      size: {
        en: 'Usually 10–12 m tall, with a crown often wider than the tree is tall',
        bn: 'সাধারণত ১০–১২ মিটার উঁচু; মাথার বিস্তার প্রায়ই উচ্চতার চেয়ে বেশি',
      },
      weight: {
        en: 'Not measured by weight; its woody seed pods can be up to 60 cm long',
        bn: 'ওজন দিয়ে মাপা হয় না; কাঠের মতো শক্ত শুঁটি ৬০ সেমি পর্যন্ত লম্বা হতে পারে',
      },
      lifespan: {
        en: 'Perennial; several decades',
        bn: 'বহুবর্ষজীবী; কয়েক দশক বাঁচে',
      },
      features: {
        en: [
          'Feathery, fern-like twice-compound leaves',
          'Scarlet-orange flowers with one white-and-yellow streaked petal',
          'Long, flat, dark-brown woody pods',
        ],
        bn: [
          'পালকের মতো ফার্নসদৃশ দ্বিপক্ষল যৌগিক পাতা',
          'টকটকে লাল-কমলা ফুল, একটি পাপড়িতে সাদা-হলুদ ডোরা',
          'লম্বা, চ্যাপ্টা, গাঢ় বাদামি কাঠের মতো শুঁটি',
        ],
      },
    },
    habitat: {
      en: 'Wild in dry deciduous forest; planted along roads, in parks and gardens',
      bn: 'বনে শুষ্ক পাতাঝরা বনে; রাস্তার ধারে, পার্ক ও বাগানে লাগানো হয়',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['africa', 'south-asia', 'southeast-asia'],
    distribution: {
      en: 'Native to western and northern Madagascar; planted throughout the tropics, including every district of Bangladesh.',
      bn: 'মাদাগাস্কারের পশ্চিম ও উত্তরাঞ্চলের আদি গাছ; বাংলাদেশের প্রতিটি জেলাসহ সারা বিশ্বের ক্রান্তীয় অঞ্চলে লাগানো হয়।',
    },
    climate: {
      en: 'Tropical climate with a dry season; sensitive to frost',
      bn: 'শুষ্ক মৌসুমসহ ক্রান্তীয় জলবায়ু; তুষারপাত সহ্য করতে পারে না',
    },
    diet: {
      en: 'Photosynthesis; like many legumes it improves poor soils',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; অনেক শিমজাতীয় গাছের মতো অনুর্বর মাটির উন্নতি ঘটায়',
    },
    ecologicalRole: {
      en: 'Its flowers attract butterflies, sunbirds and bees, and its dense shade cools city streets.',
      bn: 'ফুল প্রজাপতি, মৌটুসি ও মৌমাছিকে আকৃষ্ট করে; ঘন ছায়া শহরের রাস্তা ঠান্ডা রাখে।',
    },
    behavior: {
      en: 'Partly sheds its leaves in the dry season and blooms from about April to June, often alongside the yellow-flowered radhachura.',
      bn: 'শুষ্ক মৌসুমে আংশিক পাতা ঝরায় এবং মোটামুটি এপ্রিল থেকে জুন পর্যন্ত ফুল ফোটায়; প্রায়ই হলুদ ফুলের রাধাচূড়ার পাশে দেখা যায়।',
    },
    range: {
      native: [
        [-15.7, 46.3],
        [-16.9, 45.0],
        [-12.3, 49.3],
        [-19.5, 44.6],
      ],
      introduced: [
        [23.73, 90.4],
        [22.36, 91.8],
        [19.1, 72.9],
        [13.75, 100.5],
        [18.0, -76.8],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Clearance of dry forest in Madagascar', 'Felling of urban trees for road widening'],
        bn: ['মাদাগাস্কারের শুষ্ক বন উজাড়', 'রাস্তা প্রশস্ত করতে শহরের গাছ কাটা'],
      },
      initiatives: {
        en: ['Protected areas in western Madagascar', 'Widespread cultivation as an ornamental tree, which safeguards its survival'],
        bn: ['পশ্চিম মাদাগাস্কারে সংরক্ষিত এলাকা', 'শোভাবর্ধক গাছ হিসেবে ব্যাপক চাষ, যা প্রজাতিটির টিকে থাকা নিশ্চিত করছে'],
      },
    },
    facts: {
      en: [
        'Krishnachura is celebrated in many Bengali songs and poems about the summer month of Boishakh.',
        'The tree was once thought nearly extinct in the wild before new populations were found in Madagascar.',
        'Its dried pods are used as rattles in the Caribbean.',
      ],
      bn: [
        'বৈশাখ ও গ্রীষ্ম নিয়ে লেখা বহু বাংলা গান ও কবিতায় কৃষ্ণচূড়ার উল্লেখ আছে।',
        'একসময় বনে প্রায় বিলুপ্ত মনে করা হলেও পরে মাদাগাস্কারে এর নতুন জনগোষ্ঠী পাওয়া যায়।',
        'ক্যারিবীয় অঞ্চলে এর শুকনো শুঁটি ঝুনঝুনি বাদ্য হিসেবে ব্যবহৃত হয়।',
      ],
    },
    related: ['red-silk-cotton-tree', 'rain-tree', 'tamarind'],
  },
];
