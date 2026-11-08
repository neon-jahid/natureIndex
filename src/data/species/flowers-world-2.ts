import type { Species } from '@/types';

export const flowersWorld2: Species[] = [
  {
    id: 'english-lavender',
    commonName: { en: 'English Lavender', bn: 'ল্যাভেন্ডার' },
    scientificName: 'Lavandula angustifolia',
    altNames: {
      en: ['Lavender', 'True lavender', 'Common lavender'],
      bn: ['ল্যাভেন্ডার ফুল', 'ইংলিশ ল্যাভেন্ডার', 'খাঁটি ল্যাভেন্ডার'],
    },
    synonyms: ['Lavandula officinalis'],
    category: 'flowers',
    secondaryCategories: ['plants'],
    wikiTitle: 'Lavandula angustifolia',
    description: {
      en: 'English lavender is a small, aromatic evergreen shrub with grey-green leaves and spikes of purple-blue flowers. Despite its name, it is native to the dry, rocky hills of the western Mediterranean, not England. Its scented oil is used in perfumes, soaps and aromatherapy, and the famous purple fields of Provence in France are planted with lavender and its hybrids.',
      bn: 'ল্যাভেন্ডার একটি ছোট, সুগন্ধি চিরসবুজ গুল্ম, যার পাতা ধূসর-সবুজ আর ফুল বেগুনি-নীল রঙের শিষে ফোটে। নামে “ইংলিশ” হলেও এর আদি নিবাস ইংল্যান্ড নয়, বরং পশ্চিম ভূমধ্যসাগরীয় অঞ্চলের শুকনো, পাথুরে পাহাড়। এর সুগন্ধি তেল আতর, সাবান ও অ্যারোমাথেরাপিতে ব্যবহৃত হয়; ফ্রান্সের প্রোভঁস অঞ্চলের বিখ্যাত বেগুনি মাঠগুলো ল্যাভেন্ডার ও এর সংকর জাতে ভরা।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Lamiales',
      family: 'Lamiaceae',
      genus: 'Lavandula',
      species: 'L. angustifolia',
    },
    physical: {
      size: {
        en: 'Shrub 30–100 cm tall; flower spikes 2–8 cm long',
        bn: '৩০–১০০ সেমি উঁচু গুল্ম; ফুলের শিষ ২–৮ সেমি লম্বা',
      },
      weight: {
        en: 'Not applicable — harvested as dried flower stems or distilled for oil',
        bn: 'প্রযোজ্য নয় — শুকনো ফুলের ডাঁটি হিসেবে সংগ্রহ বা তেল পাতন করা হয়',
      },
      lifespan: {
        en: 'Perennial; productive for about 10–15 years',
        bn: 'বহুবর্ষজীবী; প্রায় ১০–১৫ বছর ভালো ফলন দেয়',
      },
      features: {
        en: [
          'Narrow, grey-green leaves covered in fine hairs',
          'Square stems typical of the mint family',
          'Small purple flowers in whorls on long, bare stalks',
        ],
        bn: [
          'সরু, ধূসর-সবুজ পাতা, সূক্ষ্ম রোমে ঢাকা',
          'পুদিনা গোত্রের বৈশিষ্ট্যমূলক চারকোনা কাণ্ড',
          'লম্বা, পাতাহীন ডাঁটির মাথায় স্তরে স্তরে ছোট বেগুনি ফুল',
        ],
      },
    },
    habitat: {
      en: 'Dry, sunny, rocky slopes on limestone in hills and low mountains',
      bn: 'পাহাড় ও নিচু পর্বতের চুনাপাথরের শুকনো, রোদেলা, পাথুরে ঢাল',
    },
    habitats: ['mountain', 'grassland', 'urban-farmland'],
    regions: ['europe'],
    distribution: {
      en: 'Native to Spain, southern France and north-western Italy; cultivated widely in Europe, North America, Australia and Asia.',
      bn: 'আদি নিবাস স্পেন, দক্ষিণ ফ্রান্স ও উত্তর-পশ্চিম ইতালি; ইউরোপ, উত্তর আমেরিকা, অস্ট্রেলিয়া ও এশিয়ায় ব্যাপকভাবে চাষ হয়।',
    },
    climate: {
      en: 'Mediterranean climate with hot, dry summers and cool winters',
      bn: 'গরম, শুষ্ক গ্রীষ্ম ও ঠান্ডা শীতের ভূমধ্যসাগরীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; prefers poor, alkaline, very well-drained soil',
      bn: 'সালোকসংশ্লেষণ; অনুর্বর, ক্ষারীয় ও খুব ভালো পানি নিষ্কাশনযুক্ত মাটি পছন্দ করে',
    },
    ecologicalRole: {
      en: 'A major nectar plant for honey bees, bumblebees and butterflies.',
      bn: 'মৌমাছি, ভোমরা ও প্রজাপতির জন্য মধুর একটি প্রধান উৎস।',
    },
    behavior: {
      en: 'Flowers in early to mid summer; its aromatic oils deter grazing animals and reduce water loss.',
      bn: 'গ্রীষ্মের শুরু থেকে মাঝামাঝি ফুল ফোটে; এর সুগন্ধি তেল তৃণভোজী প্রাণীদের দূরে রাখে এবং পানি হারানো কমায়।',
    },
    range: {
      native: [
        [44.0, 5.5],
        [42.5, 2.5],
        [40.5, -1.0],
        [44.5, 7.3],
        [43.7, 6.5],
      ],
      introduced: [
        [51.0, -0.5],
        [-42.0, 147.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Abandonment of traditional grazing on wild hillsides', 'Climate-driven drought and the bacterial disease Xylella in cultivated fields'],
        bn: ['বুনো পাহাড়ি ঢালে প্রচলিত পশুচারণ বন্ধ হয়ে ঝোপঝাড় বেড়ে যাওয়া', 'জলবায়ু পরিবর্তনজনিত খরা এবং চাষের মাঠে জাইলেলা নামের ব্যাকটেরিয়াজনিত রোগ'],
      },
      initiatives: {
        en: ['Protected designation of origin for Haute-Provence lavender oil', 'Research into disease-resistant lavender varieties'],
        bn: ['ওত-প্রোভঁসের ল্যাভেন্ডার তেলের ভৌগোলিক নির্দেশক সুরক্ষা', 'রোগ-প্রতিরোধী ল্যাভেন্ডার জাত নিয়ে গবেষণা'],
      },
    },
    facts: {
      en: [
        'The name may come from the Latin lavare, “to wash”, because Romans scented their baths with it.',
        'Lavender oil is traditionally used to aid relaxation, but it should not be swallowed and can irritate sensitive skin.',
      ],
      bn: [
        'নামটি সম্ভবত লাতিন “লাভারে” (অর্থ “ধোয়া”) থেকে এসেছে, কারণ রোমানরা গোসলের পানি এ দিয়ে সুগন্ধি করত।',
        'প্রচলিতভাবে মন শান্ত রাখতে ল্যাভেন্ডার তেল ব্যবহার করা হয়, তবে এটি খাওয়া উচিত নয় এবং সংবেদনশীল ত্বকে জ্বালা করতে পারে।',
      ],
    },
    related: ['common-poppy', 'edelweiss', 'madonna-lily', 'holy-basil'],
  },
  {
    id: 'edelweiss',
    commonName: { en: 'Edelweiss', bn: 'এডেলভাইস' },
    scientificName: 'Leontopodium nivale subsp. alpinum',
    altNames: {
      en: ['Alpine edelweiss', 'Leontopodium alpinum'],
      bn: ['এডেলওয়াইস', 'আল্পসের এডেলভাইস'],
    },
    synonyms: ['Leontopodium alpinum'],
    category: 'flowers',
    wikiTitle: 'Edelweiss',
    description: {
      en: 'Edelweiss is a small, woolly, star-shaped mountain flower that grows on limestone ledges high in the Alps and other European mountains. Its dense white hairs protect it from cold, drying winds and strong ultraviolet light. Long a symbol of the Alps, courage and devotion, it is the national flower of Switzerland and Austria in popular tradition.',
      bn: 'এডেলভাইস একটি ছোট, পশমে ঢাকা, তারার মতো দেখতে পাহাড়ি ফুল, যা আল্পস ও ইউরোপের অন্যান্য পর্বতের উঁচুতে চুনাপাথরের খাঁজে জন্মে। এর ঘন সাদা রোম ঠান্ডা, শুকনো বাতাস ও তীব্র অতিবেগুনি রশ্মি থেকে গাছটিকে রক্ষা করে। বহুকাল ধরে এটি আল্পস, সাহস ও ভালোবাসার প্রতীক; সুইজারল্যান্ড ও অস্ট্রিয়ায় একে প্রচলিতভাবে জাতীয় ফুল হিসেবে ধরা হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Asterales',
      family: 'Asteraceae',
      genus: 'Leontopodium',
      species: 'L. nivale',
    },
    physical: {
      size: {
        en: '3–20 cm tall; the woolly “star” is 2–10 cm across',
        bn: '৩–২০ সেমি উঁচু; পশমি “তারা”টি ২–১০ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a tiny alpine herb',
        bn: 'প্রযোজ্য নয় — অতি ছোট পাহাড়ি বিরুৎ',
      },
      lifespan: {
        en: 'Perennial',
        bn: 'বহুবর্ষজীবী',
      },
      features: {
        en: [
          'White, felt-like “petals” are actually woolly leaf-like bracts',
          'Five to fifteen small yellow flower heads cluster in the centre',
          'Whole plant covered in dense white hairs',
        ],
        bn: [
          'সাদা, ফেল্টের মতো “পাপড়ি” আসলে পশমি মঞ্জরিপত্র',
          'মাঝখানে পাঁচ থেকে পনেরোটি ছোট হলুদ ফুলের গুচ্ছ',
          'পুরো গাছ ঘন সাদা রোমে ঢাকা',
        ],
      },
    },
    habitat: {
      en: 'Rocky limestone grassland, ledges and scree at about 1,800–3,000 m',
      bn: 'প্রায় ১,৮০০–৩,০০০ মিটার উচ্চতায় চুনাপাথরের পাথুরে তৃণভূমি, খাঁজ ও নুড়িময় ঢাল',
    },
    habitats: ['mountain', 'grassland'],
    regions: ['europe'],
    distribution: {
      en: 'The Alps, Pyrenees, Jura, Carpathians and mountains of the Balkans.',
      bn: 'আল্পস, পিরেনিজ, জুরা, কার্পেথিয়ান ও বলকান অঞ্চলের পর্বতমালা।',
    },
    climate: {
      en: 'Cold alpine climate with long snowy winters and intense sunlight',
      bn: 'দীর্ঘ তুষারময় শীত ও তীব্র রোদের শীতল আল্পীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; grows in thin, stony, lime-rich soil',
      bn: 'সালোকসংশ্লেষণ; পাতলা, পাথুরে, চুনসমৃদ্ধ মাটিতে জন্মে',
    },
    ecologicalRole: {
      en: 'Pollinated mainly by flies and small beetles in high mountain meadows.',
      bn: 'উঁচু পাহাড়ি তৃণভূমিতে মূলত মাছি ও ছোট গুবরেপোকা এর পরাগায়ন ঘটায়।',
    },
    behavior: {
      en: 'Flowers from July to September during the short alpine summer; seeds are dispersed by wind.',
      bn: 'আল্পসের ছোট গ্রীষ্মে জুলাই থেকে সেপ্টেম্বরে ফুল ফোটে; বাতাসে বীজ ছড়ায়।',
    },
    range: {
      native: [
        [46.5, 10.0],
        [47.1, 11.5],
        [46.0, 7.7],
        [42.7, 0.5],
        [49.2, 20.0],
        [42.5, 19.8],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Historical over-picking by tourists and climbers', 'Climate warming pushing alpine plants upslope'],
        bn: ['অতীতে পর্যটক ও পর্বতারোহীদের অতিরিক্ত ফুল তোলা', 'জলবায়ু উষ্ণায়নে পাহাড়ি উদ্ভিদের আরও উঁচুতে সরে যাওয়ার চাপ'],
      },
      initiatives: {
        en: ['Legal protection from picking in Austria, Switzerland, Germany and other countries', 'Commercial cultivation for cosmetics reduces collection from the wild'],
        bn: ['অস্ট্রিয়া, সুইজারল্যান্ড, জার্মানিসহ বিভিন্ন দেশে ফুল তোলা আইনত নিষিদ্ধ', 'প্রসাধনী শিল্পের জন্য বাণিজ্যিক চাষ, যা বুনো ফুল সংগ্রহ কমায়'],
      },
    },
    facts: {
      en: [
        'The name comes from German edel (“noble”) and weiß (“white”).',
        'The song “Edelweiss” from The Sound of Music made the flower famous worldwide.',
      ],
      bn: [
        'নামটি জার্মান “এডেল” (মহৎ) ও “ভাইস” (সাদা) শব্দ থেকে এসেছে।',
        '“দ্য সাউন্ড অব মিউজিক” চলচ্চিত্রের “এডেলভাইস” গানটি ফুলটিকে বিশ্বজুড়ে বিখ্যাত করেছে।',
      ],
    },
    related: ['english-lavender', 'ladys-slipper-orchid', 'cornflower'],
  },
  {
    id: 'king-protea',
    commonName: { en: 'King Protea', bn: 'কিং প্রোটিয়া' },
    scientificName: 'Protea cynaroides',
    altNames: {
      en: ['Giant protea', 'Honeypot', 'King sugarbush'],
      bn: ['প্রোটিয়া', 'দানব প্রোটিয়া', 'রাজা প্রোটিয়া'],
    },
    category: 'flowers',
    wikiTitle: 'Protea cynaroides',
    description: {
      en: 'The king protea is a woody shrub of South Africa’s fynbos with the largest flower head of any protea — a huge bowl of pink to creamy bracts surrounding hundreds of small flowers. It is the national flower of South Africa. Like many fynbos plants it is adapted to periodic wildfires, resprouting from a thick underground stem.',
      bn: 'কিং প্রোটিয়া দক্ষিণ আফ্রিকার “ফিনবস” নামের ঝোপবনের একটি কাষ্ঠল গুল্ম; প্রোটিয়া গণের মধ্যে এর ফুলই সবচেয়ে বড় — গোলাপি থেকে ঘিয়ে রঙের মঞ্জরিপত্রে ঘেরা বিশাল বাটির মতো, যার মধ্যে থাকে শত শত ছোট ফুল। এটি দক্ষিণ আফ্রিকার জাতীয় ফুল। ফিনবসের অনেক উদ্ভিদের মতো এটিও দাবানলের সঙ্গে খাপ খাইয়ে নিয়েছে — আগুনে পুড়ে গেলেও মাটির নিচের মোটা কাণ্ড থেকে আবার নতুন করে গজায়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Proteales',
      family: 'Proteaceae',
      genus: 'Protea',
      species: 'P. cynaroides',
    },
    physical: {
      size: {
        en: 'Shrub 0.3–2 m tall; flower heads 12–30 cm across',
        bn: '০.৩–২ মিটার উঁচু গুল্ম; ফুলের মাথা ১২–৩০ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a single cut flower head can be heavy enough to need a sturdy vase',
        bn: 'প্রযোজ্য নয় — একটি কাটা ফুল এত ভারী যে মজবুত ফুলদানি লাগে',
      },
      lifespan: {
        en: 'Long-lived perennial shrub, often several decades thanks to resprouting',
        bn: 'দীর্ঘজীবী বহুবর্ষজীবী গুল্ম; বারবার নতুন করে গজানোর ফলে কয়েক দশক বাঁচতে পারে',
      },
      features: {
        en: [
          'Massive bowl-shaped flower head ringed by pointed coloured bracts',
          'Thick, leathery, glossy leaves on long stalks',
          'Underground woody stem (lignotuber) with dormant buds',
        ],
        bn: [
          'সুচালো রঙিন মঞ্জরিপত্রে ঘেরা বিশাল বাটির মতো ফুল',
          'লম্বা বোঁটায় পুরু, চামড়ার মতো চকচকে পাতা',
          'মাটির নিচে সুপ্ত কুঁড়িযুক্ত মোটা কাষ্ঠল কাণ্ড (লিগনোটিউবার)',
        ],
      },
    },
    habitat: {
      en: 'Fynbos shrubland on nutrient-poor sandstone slopes, from sea level to about 1,500 m',
      bn: 'সমুদ্রপৃষ্ঠ থেকে প্রায় ১,৫০০ মিটার উচ্চতা পর্যন্ত পুষ্টিহীন বেলেপাথরের ঢালে ফিনবস ঝোপবন',
    },
    habitats: ['grassland', 'mountain'],
    regions: ['africa'],
    distribution: {
      en: 'Endemic to the Western and Eastern Cape provinces of South Africa.',
      bn: 'শুধু দক্ষিণ আফ্রিকার ওয়েস্টার্ন কেপ ও ইস্টার্ন কেপ প্রদেশে পাওয়া যায়।',
    },
    climate: {
      en: 'Mediterranean-type climate with winter rain and dry, windy summers',
      bn: 'শীতকালে বৃষ্টি ও শুষ্ক, ঝোড়ো গ্রীষ্মের ভূমধ্যসাগরীয় ধাঁচের জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; special clustered “proteoid” roots extract scarce phosphorus from very poor soils',
      bn: 'সালোকসংশ্লেষণ; গুচ্ছবদ্ধ বিশেষ “প্রোটিয়য়েড” শিকড় অত্যন্ত অনুর্বর মাটি থেকে দুষ্প্রাপ্য ফসফরাস সংগ্রহ করে',
    },
    ecologicalRole: {
      en: 'Its abundant nectar feeds sugarbirds, sunbirds and beetles, which pollinate it.',
      bn: 'এর প্রচুর মধু সুগারবার্ড, মৌটুসি পাখি ও গুবরেপোকাদের খাবার জোগায়, আর তারাই এর পরাগায়ন ঘটায়।',
    },
    behavior: {
      en: 'Resprouts after fire and flowers mainly from winter to spring; fire also triggers seed release and germination.',
      bn: 'আগুনের পর আবার গজিয়ে ওঠে এবং মূলত শীত থেকে বসন্তে ফুল দেয়; আগুনের তাপেই বীজ ঝরে পড়ে ও অঙ্কুরিত হয়।',
    },
    range: {
      native: [
        [-33.95, 18.9],
        [-34.1, 19.3],
        [-33.6, 22.2],
        [-33.9, 25.0],
        [-34.0, 20.5],
      ],
      endemicTo: { en: 'Cape Floristic Region, South Africa', bn: 'কেপ উদ্ভিদ অঞ্চল, দক্ষিণ আফ্রিকা' },
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Fires that are too frequent, before plants can set seed', 'Invasive alien trees and urban expansion in the Cape'],
        bn: ['গাছ বীজ তৈরির আগেই অতি ঘন ঘন দাবানল', 'কেপ অঞ্চলে আগ্রাসী বিদেশি গাছ ও নগরায়ণ'],
      },
      initiatives: {
        en: ['Protection within the Cape Floral Region Protected Areas World Heritage Site', 'Removal of invasive alien plants by the Working for Water programme'],
        bn: ['কেপ ফ্লোরাল রিজিয়ন বিশ্ব ঐতিহ্য সংরক্ষিত এলাকায় সুরক্ষা', '“ওয়ার্কিং ফর ওয়াটার” কর্মসূচির মাধ্যমে আগ্রাসী বিদেশি গাছ অপসারণ'],
      },
    },
    facts: {
      en: [
        'South Africa’s national cricket team is nicknamed the Proteas after this flower.',
        'The genus is named after Proteus, the Greek god who could change his shape, because proteas are so varied.',
        'South Africa’s national red list (SANBI) rates it Least Concern.',
      ],
      bn: [
        'এই ফুলের নামেই দক্ষিণ আফ্রিকার জাতীয় ক্রিকেট দলের ডাকনাম “প্রোটিয়াস”।',
        'প্রোটিয়া গণের প্রজাতিগুলো এত বৈচিত্র্যময় যে রূপ বদলাতে পারা গ্রিক দেবতা প্রোটিয়াসের নামে এর নাম রাখা হয়েছে।',
        'দক্ষিণ আফ্রিকার জাতীয় লাল তালিকায় (SANBI) এটি “ন্যূনতম উদ্বেগ” শ্রেণিতে আছে।',
      ],
    },
    related: ['bird-of-paradise-flower', 'gerbera-daisy', 'sacred-lotus'],
  },
  {
    id: 'bird-of-paradise-flower',
    commonName: { en: 'Bird of Paradise Flower', bn: 'বার্ড অব প্যারাডাইস ফুল' },
    scientificName: 'Strelitzia reginae',
    altNames: {
      en: ['Crane flower', 'Strelitzia', 'Bird of paradise'],
      bn: ['স্ট্রেলিৎজিয়া', 'সারস ফুল', 'স্বর্গপাখি ফুল'],
    },
    category: 'flowers',
    wikiTitle: 'Strelitzia reginae',
    description: {
      en: 'The bird of paradise flower is a clump-forming evergreen from coastal South Africa whose orange-and-blue blooms look like the head of a crested bird. The flowers emerge from a stiff, beak-like sheath, one after another. It is popular in tropical gardens and as a long-lasting cut flower, and is increasingly grown in Bangladeshi parks and hotels.',
      bn: 'বার্ড অব প্যারাডাইস দক্ষিণ আফ্রিকার উপকূলীয় অঞ্চলের একটি ঝাড় আকারে বাড়া চিরসবুজ গাছ, যার কমলা ও নীল ফুল দেখতে ঝুঁটিওয়ালা পাখির মাথার মতো। শক্ত, ঠোঁটের মতো একটি খোল থেকে একের পর এক ফুল বেরিয়ে আসে। ক্রান্তীয় অঞ্চলের বাগানে এবং দীর্ঘস্থায়ী কাট-ফ্লাওয়ার হিসেবে এটি জনপ্রিয়; বাংলাদেশের পার্ক ও হোটেলের বাগানেও এখন ক্রমশ দেখা যাচ্ছে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Zingiberales',
      family: 'Strelitziaceae',
      genus: 'Strelitzia',
      species: 'S. reginae',
    },
    physical: {
      size: {
        en: 'Clumps up to about 2 m tall; flowers about 15–20 cm long',
        bn: 'ঝাড় প্রায় ২ মিটার পর্যন্ত উঁচু; ফুল প্রায় ১৫–২০ সেমি লম্বা',
      },
      weight: {
        en: 'Not applicable — a clump-forming herb',
        bn: 'প্রযোজ্য নয় — ঝাড় আকারে বাড়া বিরুৎ',
      },
      lifespan: {
        en: 'Long-lived perennial; clumps can live for decades',
        bn: 'দীর্ঘজীবী বহুবর্ষজীবী; একটি ঝাড় কয়েক দশক বাঁচতে পারে',
      },
      features: {
        en: [
          'Orange sepals and arrow-shaped blue petals rising from a green, beak-like spathe',
          'Large, leathery, paddle-shaped leaves on long stalks',
          'Thick, fleshy roots',
        ],
        bn: [
          'সবুজ, ঠোঁটের মতো খোল থেকে বেরিয়ে আসা কমলা বৃত্যংশ ও তিরের মতো নীল পাপড়ি',
          'লম্বা বোঁটায় বড়, চামড়ার মতো, বইঠা আকৃতির পাতা',
          'মোটা, রসালো শিকড়',
        ],
      },
    },
    habitat: {
      en: 'Coastal scrub and riverbanks in thickets and clearings',
      bn: 'উপকূলীয় ঝোপঝাড় এবং নদীতীরের ঝোপ ও ফাঁকা জায়গা',
    },
    habitats: ['grassland', 'rivers-lakes', 'urban-farmland'],
    regions: ['africa'],
    distribution: {
      en: 'Native to the Eastern Cape and southern KwaZulu-Natal in South Africa; grown in warm regions worldwide.',
      bn: 'আদি নিবাস দক্ষিণ আফ্রিকার ইস্টার্ন কেপ ও দক্ষিণ কোয়াজুলু-নাটাল; বিশ্বের উষ্ণ অঞ্চলে ব্যাপকভাবে চাষ হয়।',
    },
    climate: {
      en: 'Warm subtropical with mild winters',
      bn: 'মৃদু শীতের উষ্ণ উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; grows best in rich, well-drained soil with regular watering',
      bn: 'সালোকসংশ্লেষণ; উর্বর, পানি নিষ্কাশনযুক্ত মাটি ও নিয়মিত সেচে ভালো জন্মে',
    },
    ecologicalRole: {
      en: 'Pollinated by sunbirds, which perch on the blue petals and get dusted with pollen on their feet.',
      bn: 'মৌটুসি পাখি নীল পাপড়ির ওপর বসলে তাদের পায়ে পরাগ লেগে যায় — এভাবেই এর পরাগায়ন হয়।',
    },
    behavior: {
      en: 'Flowers mostly from autumn to spring; each spathe produces several flowers in succession.',
      bn: 'মূলত শরৎ থেকে বসন্ত পর্যন্ত ফুল দেয়; প্রতিটি খোল থেকে পরপর কয়েকটি ফুল বের হয়।',
    },
    range: {
      native: [
        [-33.0, 27.9],
        [-32.6, 28.4],
        [-31.6, 29.5],
        [-30.7, 30.4],
        [-33.7, 26.6],
      ],
      introduced: [
        [34.05, -118.25],
        [32.65, -16.9],
        [23.8, 90.4],
      ],
      endemicTo: { en: 'South Africa', bn: 'দক্ষিণ আফ্রিকা' },
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Coastal development in the Eastern Cape', 'Illegal collection of plants from the wild'],
        bn: ['ইস্টার্ন কেপের উপকূলে উন্নয়ন ও নির্মাণকাজ', 'বুনো গাছ অবৈধভাবে সংগ্রহ'],
      },
      initiatives: {
        en: ['Widespread nursery propagation for horticulture', 'Coastal nature reserves in the Eastern Cape'],
        bn: ['উদ্যান শিল্পের জন্য নার্সারিতে ব্যাপক চারা উৎপাদন', 'ইস্টার্ন কেপের উপকূলীয় প্রাকৃতিক সংরক্ষিত এলাকা'],
      },
    },
    facts: {
      en: [
        'It is the official flower of the city of Los Angeles.',
        'The genus honours Queen Charlotte of Mecklenburg-Strelitz, wife of King George III.',
        'Seeds have a bright orange, furry aril that attracts birds.',
      ],
      bn: [
        'এটি যুক্তরাষ্ট্রের লস অ্যাঞ্জেলেস শহরের দাপ্তরিক ফুল।',
        'রাজা তৃতীয় জর্জের স্ত্রী মেকলেনবুর্গ-স্ট্রেলিৎজের রানি শার্লটের সম্মানে এর নামকরণ।',
        'এর বীজে উজ্জ্বল কমলা, পশমের মতো একটি আবরণ থাকে, যা পাখিদের আকর্ষণ করে।',
      ],
    },
    related: ['king-protea', 'gerbera-daisy'],
  },
  {
    id: 'madonna-lily',
    commonName: { en: 'Madonna Lily', bn: 'ম্যাডোনা লিলি' },
    scientificName: 'Lilium candidum',
    altNames: {
      en: ['White lily', 'Easter lily (traditional)', 'Annunciation lily'],
      bn: ['সাদা লিলি', 'লিলি ফুল', 'শ্বেত লিলি'],
    },
    category: 'flowers',
    wikiTitle: 'Lilium candidum',
    description: {
      en: 'The Madonna lily is one of the oldest cultivated flowers, grown for more than 3,000 years for its pure white, sweetly scented, trumpet-shaped blooms. Native to the Balkans and the eastern Mediterranean, it became a Christian symbol of purity and appears in countless paintings of the Virgin Mary. All lilies are highly poisonous to cats.',
      bn: 'ম্যাডোনা লিলি পৃথিবীর প্রাচীনতম চাষকৃত ফুলগুলোর একটি; এর ধবধবে সাদা, মিষ্টি সুগন্ধি, শিঙার মতো ফুলের জন্য তিন হাজার বছরেরও বেশি সময় ধরে এর চাষ হয়ে আসছে। এর আদি নিবাস বলকান অঞ্চল ও পূর্ব ভূমধ্যসাগরীয় এলাকা। খ্রিস্টধর্মে এটি পবিত্রতার প্রতীক এবং কুমারী মেরির অসংখ্য চিত্রকর্মে এর দেখা মেলে। সতর্কতা: সব ধরনের লিলি বিড়ালের জন্য মারাত্মক বিষাক্ত।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Liliales',
      family: 'Liliaceae',
      genus: 'Lilium',
      species: 'L. candidum',
    },
    physical: {
      size: {
        en: 'Stems 1–2 m tall; flowers 5–8 cm long',
        bn: 'কাণ্ড ১–২ মিটার উঁচু; ফুল ৫–৮ সেমি লম্বা',
      },
      weight: {
        en: 'Not applicable — grows from a scaly bulb',
        bn: 'প্রযোজ্য নয় — আঁশযুক্ত কন্দ থেকে জন্মায়',
      },
      lifespan: {
        en: 'Perennial from a bulb',
        bn: 'কন্দ থেকে বহুবর্ষজীবী',
      },
      features: {
        en: [
          'Pure white trumpet flowers with golden-yellow anthers',
          'A winter rosette of leaves that persists while most lilies are dormant',
          'Strong, sweet fragrance',
        ],
        bn: [
          'সোনালি-হলুদ পরাগধানীযুক্ত ধবধবে সাদা শিঙার মতো ফুল',
          'শীতকালে গোড়ায় পাতার গুচ্ছ থাকে, যখন অন্য লিলিরা সুপ্ত থাকে',
          'তীব্র, মিষ্টি সুগন্ধ',
        ],
      },
    },
    habitat: {
      en: 'Rocky limestone slopes, scrub and cliffs in hilly country',
      bn: 'পাহাড়ি এলাকার চুনাপাথরের পাথুরে ঢাল, ঝোপঝাড় ও খাড়া পাহাড়',
    },
    habitats: ['mountain', 'grassland', 'urban-farmland'],
    regions: ['europe'],
    distribution: {
      en: 'Native to the southern Balkans, Greece and the eastern Mediterranean coast; cultivated and naturalised across Europe.',
      bn: 'আদি নিবাস দক্ষিণ বলকান, গ্রিস ও পূর্ব ভূমধ্যসাগরের উপকূল; পুরো ইউরোপে চাষ হয় ও প্রাকৃতিকভাবে ছড়িয়ে আছে।',
    },
    climate: {
      en: 'Mediterranean climate with mild, wet winters and hot, dry summers',
      bn: 'মৃদু, বৃষ্টিময় শীত ও গরম, শুষ্ক গ্রীষ্মের ভূমধ্যসাগরীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; stores food in its bulb and prefers lime-rich soil',
      bn: 'সালোকসংশ্লেষণ; কন্দে খাদ্য জমা রাখে এবং চুনসমৃদ্ধ মাটি পছন্দ করে',
    },
    ecologicalRole: {
      en: 'Its scented flowers attract moths and bees, which carry its pollen.',
      bn: 'সুগন্ধি ফুল মথ ও মৌমাছিদের আকর্ষণ করে, যারা এর পরাগ বহন করে।',
    },
    behavior: {
      en: 'Leaves appear in autumn, flowers open in early summer, and the bulb rests through the hottest months.',
      bn: 'শরতে পাতা গজায়, গ্রীষ্মের শুরুতে ফুল ফোটে এবং সবচেয়ে গরমের মাসগুলোতে কন্দ বিশ্রামে থাকে।',
    },
    range: {
      native: [
        [37.9, 23.7],
        [40.6, 22.9],
        [39.6, 20.8],
        [33.9, 35.8],
        [32.8, 35.0],
      ],
      introduced: [
        [48.9, 2.35],
        [51.5, -0.1],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Collection of bulbs from wild populations', 'Grey mould (botrytis) and lily viruses'],
        bn: ['বুনো জনগোষ্ঠী থেকে কন্দ তুলে নেওয়া', 'গ্রে মোল্ড (বোট্রাইটিস) ও লিলির ভাইরাসজনিত রোগ'],
      },
      initiatives: {
        en: ['Protection of wild sites in parts of its native range', 'Propagation of virus-free bulbs in nurseries'],
        bn: ['আদি অঞ্চলের কিছু এলাকায় বুনো জনগোষ্ঠী সুরক্ষা', 'নার্সারিতে ভাইরাসমুক্ত কন্দ উৎপাদন'],
      },
    },
    facts: {
      en: [
        'Madonna lilies appear in Minoan frescoes on Crete from around 1500 BCE.',
        'Eating even a small amount of any lily — including pollen licked from fur — can cause fatal kidney failure in cats.',
      ],
      bn: [
        'ক্রিট দ্বীপে খ্রিস্টপূর্ব প্রায় ১৫০০ সালের মিনোয়ান দেয়ালচিত্রে ম্যাডোনা লিলির ছবি আছে।',
        'যেকোনো লিলির সামান্য অংশ — এমনকি গায়ের লোম থেকে চেটে খাওয়া পরাগও — বিড়ালের মারাত্মক কিডনি বিকল ঘটাতে পারে।',
      ],
    },
    related: ['tuberose', 'common-bluebell', 'english-lavender'],
  },
  {
    id: 'cornflower',
    commonName: { en: 'Cornflower', bn: 'কর্নফ্লাওয়ার' },
    scientificName: 'Centaurea cyanus',
    altNames: {
      en: ['Bachelor’s button', 'Bluebottle', 'Cyani'],
      bn: ['নীল কর্নফ্লাওয়ার', 'ব্যাচেলরস বাটন', 'নীলমণি ফুল'],
    },
    category: 'flowers',
    wikiTitle: 'Centaurea cyanus',
    description: {
      en: 'The cornflower is an annual wildflower of European cereal fields, famous for its intense blue flower heads with frilly outer florets. Once a common weed of wheat and rye, it declined sharply with modern herbicides but is now widely sown in gardens and wildflower meadows. It is the national flower of Estonia and a traditional symbol in Germany and France.',
      bn: 'কর্নফ্লাওয়ার ইউরোপের শস্যক্ষেতের একবর্ষজীবী বুনোফুল, যার গাঢ় নীল ফুলের কিনারায় ঝালরের মতো ছোট ছোট পুষ্পিকা থাকে। একসময় গম ও রাই ক্ষেতের সাধারণ আগাছা হলেও আধুনিক আগাছানাশকের কারণে এর সংখ্যা ব্যাপকভাবে কমে যায়; তবে এখন বাগান ও বুনোফুলের মাঠে এটি প্রচুর বোনা হয়। এটি এস্তোনিয়ার জাতীয় ফুল এবং জার্মানি ও ফ্রান্সেও একটি ঐতিহ্যবাহী প্রতীক।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Asterales',
      family: 'Asteraceae',
      genus: 'Centaurea',
      species: 'C. cyanus',
    },
    physical: {
      size: {
        en: '40–90 cm tall; flower heads 1.5–3 cm across',
        bn: '৪০–৯০ সেমি উঁচু; ফুল ১.৫–৩ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a slender annual herb',
        bn: 'প্রযোজ্য নয় — সরু একবর্ষজীবী বিরুৎ',
      },
      lifespan: {
        en: 'Annual',
        bn: 'একবর্ষজীবী',
      },
      features: {
        en: [
          'Vivid blue flower heads with funnel-shaped, frilled outer florets',
          'Narrow, grey-green, slightly woolly leaves',
          'Wiry, branching stems',
        ],
        bn: [
          'ঝালরের মতো ফানেল-আকৃতির বাইরের পুষ্পিকাযুক্ত উজ্জ্বল নীল ফুল',
          'সরু, ধূসর-সবুজ, হালকা পশমি পাতা',
          'তারের মতো সরু, শাখাযুক্ত কাণ্ড',
        ],
      },
    },
    habitat: {
      en: 'Arable fields, field margins and disturbed sunny ground',
      bn: 'চাষের জমি, ক্ষেতের আল ও রোদেলা খোঁড়াখুঁড়ি করা জমি',
    },
    habitats: ['urban-farmland', 'grassland'],
    regions: ['europe'],
    distribution: {
      en: 'Native to Europe, probably originating in the eastern Mediterranean; naturalised in North America, Australia and parts of Asia.',
      bn: 'আদি নিবাস ইউরোপ, সম্ভবত পূর্ব ভূমধ্যসাগরীয় অঞ্চল থেকে উদ্ভূত; উত্তর আমেরিকা, অস্ট্রেলিয়া ও এশিয়ার কিছু অংশে প্রাকৃতিকভাবে ছড়িয়েছে।',
    },
    climate: {
      en: 'Temperate and Mediterranean climates',
      bn: 'নাতিশীতোষ্ণ ও ভূমধ্যসাগরীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; prefers light, sandy, low-fertility soils',
      bn: 'সালোকসংশ্লেষণ; হালকা, বালুময়, কম উর্বর মাটি পছন্দ করে',
    },
    ecologicalRole: {
      en: 'A valuable nectar source for bees, bumblebees and butterflies on farmland; seeds are eaten by finches.',
      bn: 'কৃষিজমিতে মৌমাছি, ভোমরা ও প্রজাপতির জন্য মধুর মূল্যবান উৎস; ফিঞ্চ পাখিরা এর বীজ খায়।',
    },
    behavior: {
      en: 'Germinates in autumn or spring alongside cereals and flowers from early to late summer.',
      bn: 'শস্যের সঙ্গে শরৎ বা বসন্তে অঙ্কুরিত হয় এবং গ্রীষ্মের শুরু থেকে শেষ পর্যন্ত ফুল দেয়।',
    },
    range: {
      native: [
        [50.0, 15.0],
        [52.2, 21.0],
        [48.0, 2.0],
        [41.0, 26.0],
        [58.4, 24.5],
      ],
      introduced: [
        [44.0, -79.0],
        [-34.9, 138.6],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Herbicide use and seed cleaning in cereal farming', 'Loss of traditional low-intensity arable land'],
        bn: ['শস্য চাষে আগাছানাশক প্রয়োগ ও বীজ পরিষ্কার', 'প্রচলিত কম-নিবিড় চাষের জমি হারিয়ে যাওয়া'],
      },
      initiatives: {
        en: ['Wildflower strips and field-margin schemes in Europe', 'Conservation of arable plants by groups such as Plantlife'],
        bn: ['ইউরোপে বুনোফুলের ফালি ও ক্ষেতের কিনারা সংরক্ষণ প্রকল্প', 'প্ল্যান্টলাইফের মতো সংগঠনের মাধ্যমে কৃষিজমির উদ্ভিদ সংরক্ষণ'],
      },
    },
    facts: {
      en: [
        'The colour “cornflower blue” is named after it.',
        'Cornflowers were found in Tutankhamun’s tomb, woven into garlands.',
        'Its petals are edible and used to colour teas, but people with daisy-family allergies should take care.',
      ],
      bn: [
        '“কর্নফ্লাওয়ার ব্লু” নামের রংটি এই ফুলের নামেই।',
        'তুতেনখামুনের সমাধিতে মালায় গাঁথা কর্নফ্লাওয়ার পাওয়া গেছে।',
        'এর পাপড়ি খাওয়া যায় এবং চায়ে রং দিতে ব্যবহার হয়, তবে সূর্যমুখী গোত্রের উদ্ভিদে অ্যালার্জি থাকলে সাবধান থাকা উচিত।',
      ],
    },
    related: ['common-poppy', 'common-bluebell', 'garden-cosmos'],
  },
  {
    id: 'common-bluebell',
    commonName: { en: 'Common Bluebell', bn: 'ব্লুবেল' },
    scientificName: 'Hyacinthoides non-scripta',
    altNames: {
      en: ['English bluebell', 'Wild hyacinth', 'Bluebell'],
      bn: ['ইংলিশ ব্লুবেল', 'বুনো হায়াসিন্থ', 'নীল ঘণ্টা ফুল'],
    },
    synonyms: ['Endymion non-scriptus', 'Scilla non-scripta'],
    category: 'flowers',
    wikiTitle: 'Hyacinthoides non-scripta',
    description: {
      en: 'The common bluebell is a spring-flowering bulb of Atlantic Europe whose nodding, violet-blue bells carpet ancient woodlands before the tree canopy closes. Britain holds a large share of the world’s population, and bluebell woods are a celebrated sight there. All parts of the plant are poisonous if eaten.',
      bn: 'ব্লুবেল আটলান্টিক ইউরোপের বসন্তকালীন একটি কন্দজাতীয় উদ্ভিদ; গাছের পাতা ঘন হওয়ার আগেই এর ঝুলে থাকা বেগুনি-নীল ঘণ্টার মতো ফুল প্রাচীন বনের মেঝে কার্পেটের মতো ঢেকে দেয়। বিশ্বের মোট ব্লুবেলের একটি বড় অংশ ব্রিটেনে জন্মায়, আর সেখানে ব্লুবেল-বন একটি বিখ্যাত দৃশ্য। সতর্কতা: গাছটির সব অংশ খেলে বিষক্রিয়া হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Asparagales',
      family: 'Asparagaceae',
      genus: 'Hyacinthoides',
      species: 'H. non-scripta',
    },
    physical: {
      size: {
        en: 'Flower stems 20–50 cm tall; each bell about 1.5–2 cm long',
        bn: 'ফুলের ডাঁটি ২০–৫০ সেমি উঁচু; প্রতিটি ঘণ্টা প্রায় ১.৫–২ সেমি লম্বা',
      },
      weight: {
        en: 'Not applicable — grows from a small white bulb',
        bn: 'প্রযোজ্য নয় — ছোট সাদা কন্দ থেকে জন্মায়',
      },
      lifespan: {
        en: 'Perennial; seedlings take about five years to flower',
        bn: 'বহুবর্ষজীবী; চারা থেকে ফুল ফুটতে প্রায় পাঁচ বছর লাগে',
      },
      features: {
        en: [
          'Flowers hang on one side of a stem that droops at the tip',
          'Petal tips curl back; anthers are creamy white',
          'Sweet scent, unlike the Spanish bluebell',
        ],
        bn: [
          'ডাঁটির এক পাশে ফুল ঝুলে থাকে, ডাঁটির আগা নুয়ে পড়ে',
          'পাপড়ির আগা পেছনের দিকে বাঁকানো; পরাগধানী ঘিয়ে-সাদা',
          'মিষ্টি সুগন্ধ, যা স্প্যানিশ ব্লুবেলে থাকে না',
        ],
      },
    },
    habitat: {
      en: 'Ancient deciduous woodland, hedgerows and coastal grassland',
      bn: 'প্রাচীন পর্ণমোচী বন, ঝোপের বেড়া ও উপকূলীয় তৃণভূমি',
    },
    habitats: ['temperate-forest', 'grassland'],
    regions: ['europe'],
    distribution: {
      en: 'Britain, Ireland, western France, Belgium, the Netherlands and northern Spain.',
      bn: 'ব্রিটেন, আয়ারল্যান্ড, পশ্চিম ফ্রান্স, বেলজিয়াম, নেদারল্যান্ডস ও উত্তর স্পেন।',
    },
    climate: {
      en: 'Mild, moist Atlantic climate',
      bn: 'মৃদু, আর্দ্র আটলান্টিক জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; makes most of its food in early spring before trees leaf out, storing it in the bulb',
      bn: 'সালোকসংশ্লেষণ; বসন্তের শুরুতে গাছে পাতা আসার আগেই বেশির ভাগ খাদ্য তৈরি করে কন্দে জমিয়ে রাখে',
    },
    ecologicalRole: {
      en: 'An early source of nectar for bumblebees, hoverflies and butterflies emerging in spring.',
      bn: 'বসন্তে বের হওয়া ভোমরা, হোভারফ্লাই ও প্রজাপতির জন্য মৌসুমের প্রথম দিকের মধুর উৎস।',
    },
    behavior: {
      en: 'Flowers from April to May, then the leaves die back and the bulb stays dormant underground for the rest of the year.',
      bn: 'এপ্রিল থেকে মে মাসে ফুল ফোটে; এরপর পাতা মরে যায় এবং বছরের বাকি সময় কন্দ মাটির নিচে সুপ্ত থাকে।',
    },
    range: {
      native: [
        [51.5, -1.5],
        [53.0, -7.0],
        [56.0, -4.0],
        [49.0, -0.5],
        [51.0, 4.0],
        [43.2, -5.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Hybridisation with the introduced Spanish bluebell', 'Illegal digging of wild bulbs', 'Trampling and woodland loss'],
        bn: ['বাইরে থেকে আনা স্প্যানিশ ব্লুবেলের সঙ্গে সংকরায়ণ', 'বুনো কন্দ অবৈধভাবে তুলে নেওয়া', 'পায়ে মাড়ানো ও বনভূমি হ্রাস'],
      },
      initiatives: {
        en: ['Protection from trade under the UK Wildlife and Countryside Act', 'Citizen-science surveys to map native and hybrid bluebells'],
        bn: ['যুক্তরাজ্যের বন্যপ্রাণী ও পল্লী আইনের আওতায় কেনাবেচা নিষিদ্ধ', 'দেশি ও সংকর ব্লুবেল চিহ্নিত করতে নাগরিক-বিজ্ঞান জরিপ'],
      },
    },
    facts: {
      en: [
        'A carpet of bluebells is a strong sign of ancient woodland that has stood for centuries.',
        'Its sticky sap was once used to glue pages into books and feathers onto arrows.',
      ],
      bn: [
        'ব্লুবেলের কার্পেট সাধারণত বোঝায় যে বনটি কয়েকশ বছরের পুরোনো।',
        'একসময় এর আঠালো রস দিয়ে বইয়ের পাতা বাঁধাই এবং তিরে পালক লাগানো হতো।',
      ],
    },
    related: ['madonna-lily', 'cornflower', 'ladys-slipper-orchid'],
  },
  {
    id: 'ladys-slipper-orchid',
    commonName: { en: 'Lady’s Slipper Orchid', bn: 'লেডিজ স্লিপার অর্কিড' },
    scientificName: 'Cypripedium calceolus',
    altNames: {
      en: ['Yellow lady’s slipper', 'Lady’s slipper', 'Venus’ shoe'],
      bn: ['হলুদ লেডিজ স্লিপার', 'চটি অর্কিড', 'জুতা অর্কিড'],
    },
    category: 'flowers',
    wikiTitle: 'Cypripedium calceolus',
    description: {
      en: 'The lady’s slipper is a terrestrial orchid with a striking flower: a puffed, slipper-shaped yellow lip framed by twisted maroon petals. It grows in light woodland on limestone across Europe and into northern Asia. Over-collection made it extremely rare in many countries — in Britain it was once reduced to a single wild plant.',
      bn: 'লেডিজ স্লিপার মাটিতে জন্মানো একটি অর্কিড, যার ফুল খুবই নজরকাড়া: ফোলা, চটিজুতার মতো হলুদ ঠোঁট, চারপাশে প্যাঁচানো মেরুন পাপড়ি। ইউরোপজুড়ে এবং উত্তর এশিয়া পর্যন্ত চুনাপাথরের হালকা বনে এটি জন্মে। অতিরিক্ত সংগ্রহের কারণে বহু দেশে এটি অত্যন্ত দুর্লভ হয়ে পড়ে — ব্রিটেনে একসময় মাত্র একটি বুনো গাছ টিকে ছিল।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Asparagales',
      family: 'Orchidaceae',
      genus: 'Cypripedium',
      species: 'C. calceolus',
    },
    physical: {
      size: {
        en: '15–60 cm tall; the yellow pouch is 3–4 cm long',
        bn: '১৫–৬০ সেমি উঁচু; হলুদ থলেটি ৩–৪ সেমি লম্বা',
      },
      weight: {
        en: 'Not applicable — a small herbaceous orchid',
        bn: 'প্রযোজ্য নয় — ছোট নরম কাণ্ডের অর্কিড',
      },
      lifespan: {
        en: 'Long-lived perennial; individual plants can survive for many decades',
        bn: 'দীর্ঘজীবী বহুবর্ষজীবী; একটি গাছ কয়েক দশক বাঁচতে পারে',
      },
      features: {
        en: [
          'Inflated yellow slipper-shaped lip',
          'Twisted maroon-brown petals and sepals',
          'Broad, pleated, oval leaves',
        ],
        bn: [
          'ফোলা, চটিজুতার মতো হলুদ ঠোঁট',
          'প্যাঁচানো মেরুন-বাদামি পাপড়ি ও বৃত্যংশ',
          'চওড়া, ভাঁজযুক্ত, ডিম্বাকার পাতা',
        ],
      },
    },
    habitat: {
      en: 'Open deciduous and mixed woodland, woodland edges and scrub on limestone',
      bn: 'চুনাপাথরের মাটিতে খোলা পর্ণমোচী ও মিশ্র বন, বনের কিনারা ও ঝোপঝাড়',
    },
    habitats: ['temperate-forest', 'mountain'],
    regions: ['europe', 'east-asia'],
    distribution: {
      en: 'From Britain and Spain across central and northern Europe to Siberia, Mongolia and northern China.',
      bn: 'ব্রিটেন ও স্পেন থেকে মধ্য ও উত্তর ইউরোপ হয়ে সাইবেরিয়া, মঙ্গোলিয়া ও উত্তর চীন পর্যন্ত।',
    },
    climate: {
      en: 'Cool temperate climate with cold winters',
      bn: 'ঠান্ডা শীতের শীতল নাতিশীতোষ্ণ জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis as an adult; seedlings depend on soil fungi for food for several years',
      bn: 'পূর্ণবয়স্ক গাছ সালোকসংশ্লেষণ করে; কিন্তু চারা অবস্থায় কয়েক বছর মাটির ছত্রাকের ওপর খাদ্যের জন্য নির্ভরশীল',
    },
    ecologicalRole: {
      en: 'Its pouch is a trap: small solitary bees fall in and can only escape past the pollen, pollinating the flower.',
      bn: 'এর থলেটি আসলে একটি ফাঁদ: ছোট একাকী মৌমাছি ভেতরে পড়ে গেলে কেবল পরাগের পাশ দিয়েই বের হতে পারে, আর এভাবেই পরাগায়ন ঘটে।',
    },
    behavior: {
      en: 'Flowers in May–June; seedlings may take more than ten years to reach flowering size.',
      bn: 'মে–জুন মাসে ফুল ফোটে; চারা থেকে ফুল দেওয়ার উপযুক্ত হতে দশ বছরেরও বেশি লাগতে পারে।',
    },
    range: {
      native: [
        [47.0, 11.0],
        [61.0, 15.0],
        [54.2, -2.3],
        [49.0, 20.0],
        [56.0, 40.0],
        [52.0, 104.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Illegal digging by collectors', 'Forestry changes and canopy closure', 'Trampling at well-known sites'],
        bn: ['সংগ্রাহকদের অবৈধভাবে গাছ তুলে নেওয়া', 'বন ব্যবস্থাপনার পরিবর্তন ও বনের ছাউনি ঘন হয়ে যাওয়া', 'পরিচিত স্থানগুলোতে পায়ে মাড়ানো'],
      },
      initiatives: {
        en: ['Listed in the EU Habitats Directive and protected by CITES', 'Lab-grown seedlings reintroduced to wild sites in Britain'],
        bn: ['ইউরোপীয় ইউনিয়নের হ্যাবিট্যাটস নির্দেশিকা ও সাইটিস (CITES) চুক্তিতে সুরক্ষিত', 'গবেষণাগারে জন্মানো চারা ব্রিটেনের বুনো এলাকায় পুনঃস্থাপন'],
      },
    },
    facts: {
      en: [
        'The single surviving British wild plant was guarded by volunteers for decades.',
        'Its seeds are dust-like and contain almost no food, so they need a fungal partner to germinate.',
      ],
      bn: [
        'ব্রিটেনে টিকে থাকা একমাত্র বুনো গাছটিকে স্বেচ্ছাসেবকেরা কয়েক দশক ধরে পাহারা দিয়েছেন।',
        'এর বীজ ধুলোর মতো ক্ষুদ্র এবং প্রায় খাদ্যহীন, তাই অঙ্কুরোদ্গমের জন্য ছত্রাকের সাহায্য লাগে।',
      ],
    },
    related: ['ghost-orchid', 'edelweiss', 'common-bluebell'],
  },
  {
    id: 'ghost-orchid',
    commonName: { en: 'Ghost Orchid', bn: 'ঘোস্ট অর্কিড' },
    scientificName: 'Dendrophylax lindenii',
    altNames: {
      en: ['White frog orchid', 'Palm-polly'],
      bn: ['ভুতুড়ে অর্কিড', 'সাদা ব্যাঙ অর্কিড'],
    },
    synonyms: ['Polyrrhiza lindenii', 'Polyradicion lindenii'],
    category: 'flowers',
    wikiTitle: 'Dendrophylax lindenii',
    description: {
      en: 'The ghost orchid is a rare, leafless orchid that clings to tree trunks in the swamps of southern Florida and Cuba. For most of the year it is just a tangle of green roots, but in summer it produces ghostly white flowers that seem to float in the air. It became famous through the book “The Orchid Thief”.',
      bn: 'ঘোস্ট অর্কিড একটি দুর্লভ, পাতাহীন অর্কিড, যা দক্ষিণ ফ্লোরিডা ও কিউবার জলাবনের গাছের গুঁড়িতে আঁকড়ে থাকে। বছরের বেশির ভাগ সময় এটি কেবল সবুজ শিকড়ের জট, কিন্তু গ্রীষ্মে এর ভুতুড়ে সাদা ফুল ফোটে, যা দেখে মনে হয় বাতাসে ভাসছে। “দ্য অর্কিড থিফ” বইয়ের মাধ্যমে এটি বিশ্বজুড়ে পরিচিতি পায়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Asparagales',
      family: 'Orchidaceae',
      genus: 'Dendrophylax',
      species: 'D. lindenii',
    },
    physical: {
      size: {
        en: 'Flowers about 4 cm wide with lip tails up to 12 cm long; roots spread over about 30 cm',
        bn: 'ফুল প্রায় ৪ সেমি চওড়া, ঠোঁটের লেজ ১২ সেমি পর্যন্ত লম্বা; শিকড় প্রায় ৩০ সেমি জায়গাজুড়ে ছড়ায়',
      },
      weight: {
        en: 'Not applicable — a tiny epiphyte',
        bn: 'প্রযোজ্য নয় — অতি ছোট পরাশ্রয়ী (এপিফাইট) উদ্ভিদ',
      },
      lifespan: {
        en: 'Perennial; lifespan in the wild is not well known',
        bn: 'বহুবর্ষজীবী; বুনো অবস্থায় আয়ু সম্পর্কে ভালোভাবে জানা নেই',
      },
      features: {
        en: [
          'No leaves — photosynthesis takes place in flattened green roots',
          'White flower with a two-tailed lip resembling a leaping frog',
          'Faint night-time fragrance',
        ],
        bn: [
          'কোনো পাতা নেই — চ্যাপ্টা সবুজ শিকড়েই সালোকসংশ্লেষণ হয়',
          'দুটি লেজওয়ালা ঠোঁটের সাদা ফুল, দেখতে লাফানো ব্যাঙের মতো',
          'রাতে হালকা সুগন্ধ ছড়ায়',
        ],
      },
    },
    habitat: {
      en: 'Shaded, humid cypress and pond-apple swamps, on tree trunks',
      bn: 'ছায়াঘেরা, আর্দ্র সাইপ্রেস ও পন্ড-অ্যাপল জলাবনে গাছের গুঁড়িতে',
    },
    habitats: ['wetland', 'tropical-forest'],
    regions: ['north-america'],
    distribution: {
      en: 'Southern Florida (notably the Fakahatchee Strand and Big Cypress) and western Cuba.',
      bn: 'দক্ষিণ ফ্লোরিডা (বিশেষত ফাকাহ্যাচি স্ট্র্যান্ড ও বিগ সাইপ্রেস) এবং পশ্চিম কিউবা।',
    },
    climate: {
      en: 'Hot, humid subtropical with a wet summer',
      bn: 'বর্ষাপ্রধান গ্রীষ্মের গরম, আর্দ্র উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis through its green roots; absorbs water and minerals from rain and bark, helped by fungi',
      bn: 'সবুজ শিকড় দিয়ে সালোকসংশ্লেষণ করে; ছত্রাকের সহায়তায় বৃষ্টির পানি ও গাছের বাকল থেকে পানি ও খনিজ শোষণ করে',
    },
    ecologicalRole: {
      en: 'Pollinated at night by large sphinx moths with tongues long enough to reach its deep nectar spur.',
      bn: 'রাতে লম্বা শুঁড়ওয়ালা বড় স্ফিংক্স মথ এর গভীর মধুনালি থেকে মধু খেতে এসে পরাগায়ন ঘটায়।',
    },
    behavior: {
      en: 'Flowers in summer, usually one to a few blooms at a time; it is not a parasite and does not harm its host tree.',
      bn: 'গ্রীষ্মে একবারে এক বা কয়েকটি ফুল ফোটে; এটি পরজীবী নয়, আশ্রয়দাতা গাছের কোনো ক্ষতি করে না।',
    },
    range: {
      native: [
        [25.95, -81.4],
        [26.05, -81.25],
        [25.9, -81.0],
        [22.6, -83.4],
        [22.4, -83.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'decreasing',
      threats: {
        en: ['Poaching by orchid collectors', 'Drainage and altered water flow in Florida swamps', 'Hurricanes and loss of host trees'],
        bn: ['অর্কিড সংগ্রাহকদের চুরি', 'ফ্লোরিডার জলাভূমি নিষ্কাশন ও পানিপ্রবাহের পরিবর্তন', 'ঘূর্ণিঝড় ও আশ্রয়দাতা গাছ হারিয়ে যাওয়া'],
      },
      initiatives: {
        en: ['Protection in Fakahatchee Strand Preserve State Park and Big Cypress National Preserve', 'Lab propagation and reintroduction of seedlings'],
        bn: ['ফাকাহ্যাচি স্ট্র্যান্ড প্রিজার্ভ স্টেট পার্ক ও বিগ সাইপ্রেস ন্যাশনাল প্রিজার্ভে সুরক্ষা', 'গবেষণাগারে চারা উৎপাদন ও বুনো পরিবেশে পুনঃস্থাপন'],
      },
    },
    facts: {
      en: [
        'Only a few thousand wild plants are thought to remain in Florida.',
        'The 2002 film “Adaptation” was based on the story of a ghost-orchid poacher.',
      ],
      bn: [
        'ধারণা করা হয়, ফ্লোরিডায় মাত্র কয়েক হাজার বুনো গাছ টিকে আছে।',
        '২০০২ সালের চলচ্চিত্র “অ্যাডাপটেশন” এক ঘোস্ট অর্কিড চোরের কাহিনি অবলম্বনে নির্মিত।',
      ],
    },
    related: ['ladys-slipper-orchid', 'king-protea'],
  },
];
