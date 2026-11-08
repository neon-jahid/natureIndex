import type { Species } from '@/types';

export const flowers: Species[] = [
  {
    id: 'white-water-lily',
    commonName: { en: 'White Water Lily', bn: 'শাপলা' },
    scientificName: 'Nymphaea nouchali',
    altNames: {
      en: ['Shapla', 'Blue Lotus', 'Star Lotus', 'Red and Blue Water Lily'],
      bn: ['সাদা শাপলা', 'শালুক', 'জাতীয় ফুল', 'নীল শাপলা'],
    },
    synonyms: ['Nymphaea stellata', 'Castalia stellata'],
    category: 'flowers',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Nymphaea nouchali',
    description: {
      en: 'The water lily, or shapla, is the national flower of Bangladesh and appears on the country’s national emblem. It floats on ponds, haors, beels and flooded rice fields across the delta, opening its star-shaped blossoms in the morning and closing them in the afternoon. White flowers are the best known in Bangladesh, though the species also has blue and pink forms. Its stalks, seeds and rhizomes have long been eaten by rural people, especially in the monsoon.',
      bn: 'শাপলা বাংলাদেশের জাতীয় ফুল; দেশের জাতীয় প্রতীকেও শাপলার ছবি রয়েছে। বর্ষায় পুকুর, হাওর, বিল আর প্লাবিত ধানখেতে পানির ওপর ভেসে থাকা শাপলা বাংলার অতি পরিচিত দৃশ্য। তারার মতো পাপড়িওয়ালা এই ফুল সকালে ফোটে এবং বিকেলে বুজে যায়। বাংলাদেশে সাদা শাপলাই সবচেয়ে বেশি চোখে পড়ে, তবে এই প্রজাতির নীল ও গোলাপি রঙের ফুলও আছে। গ্রামের মানুষ বহুকাল ধরে শাপলার ডাঁটা সবজি হিসেবে, বীজ (ঢ্যাপ) খই বানিয়ে এবং কন্দ (শালুক) সিদ্ধ করে খেয়ে আসছে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Nymphaeales',
      family: 'Nymphaeaceae',
      genus: 'Nymphaea',
      species: 'N. nouchali',
    },
    physical: {
      size: {
        en: 'Flowers 5–15 cm across; floating leaves 15–25 cm wide; stalks grow as long as the water is deep (often 1–2 m)',
        bn: 'ফুল ৫–১৫ সেমি চওড়া; ভাসমান পাতা ১৫–২৫ সেমি চওড়া; পানির গভীরতা অনুযায়ী ডাঁটা লম্বা হয় (সাধারণত ১–২ মিটার)',
      },
      weight: {
        en: 'A light, soft-tissued aquatic herb; air channels in the stalks and leaves keep it afloat',
        bn: 'হালকা ও নরম জলজ বীরুৎ; ডাঁটা ও পাতার ভেতরের বায়ুনালি একে পানিতে ভাসিয়ে রাখে',
      },
      lifespan: {
        en: 'Perennial — the underground rhizome survives for years; each flower lasts about 3–4 days',
        bn: 'বহুবর্ষজীবী — কাদার নিচের কন্দ বহু বছর বেঁচে থাকে; একেকটি ফুল ৩–৪ দিন টিকে থাকে',
      },
      features: {
        en: [
          'Star-shaped flowers with pointed petals and a golden-yellow centre',
          'Round floating leaves with a deep notch, often purplish underneath',
          'Long, spongy flower stalks rising from a starchy rhizome in the mud',
          'Flowers sit on or just above the water surface',
        ],
        bn: [
          'সূচালো পাপড়িওয়ালা তারার মতো ফুল, মাঝখানটা সোনালি-হলুদ',
          'গোলাকার ভাসমান পাতায় গভীর খাঁজ, পাতার নিচের দিক প্রায়ই বেগুনি',
          'কাদার নিচের শ্বেতসারপূর্ণ কন্দ থেকে লম্বা, স্পঞ্জের মতো নরম ডাঁটা ওঠে',
          'ফুল পানির ওপর বা পানির সামান্য ওপরে ফোটে',
        ],
      },
    },
    habitat: {
      en: 'Still or slow-moving fresh water — ponds, beels, haors, ditches, lakes and flooded paddy fields',
      bn: 'স্থির বা ধীরপ্রবাহী মিঠা পানি — পুকুর, বিল, হাওর, ডোবা, হ্রদ ও প্লাবিত ধানখেত',
    },
    habitats: ['wetland', 'rivers-lakes', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'oceania'],
    distribution: {
      en: 'Native to the Indian subcontinent (including all of Bangladesh), Sri Lanka, Southeast Asia and northern Australia.',
      bn: 'ভারতীয় উপমহাদেশ (সমগ্র বাংলাদেশসহ), শ্রীলঙ্কা, দক্ষিণ-পূর্ব এশিয়া ও উত্তর অস্ট্রেলিয়ার স্থানীয় উদ্ভিদ।',
    },
    climate: {
      en: 'Warm tropical and monsoon climates with seasonal flooding',
      bn: 'মৌসুমি বন্যাপ্রবণ উষ্ণ ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis — floating leaves capture sunlight while roots draw nutrients from the muddy bottom',
      bn: 'সালোকসংশ্লেষণ — ভাসমান পাতা সূর্যের আলো গ্রহণ করে এবং শিকড় তলার কাদা থেকে পুষ্টি শোষণ করে',
    },
    ecologicalRole: {
      en: 'Its leaves shade the water and shelter fish, frogs and insects; the flowers feed bees and beetles, and the seeds and rhizomes are eaten by ducks and other waterbirds.',
      bn: 'এর পাতা পানিকে ছায়া দেয় এবং মাছ, ব্যাঙ ও পোকামাকড়ের আশ্রয় তৈরি করে; ফুল মৌমাছি ও গুবরেপোকার খাদ্য জোগায়, আর বীজ ও কন্দ হাঁস ও অন্যান্য জলচর পাখি খায়।',
    },
    behavior: {
      en: 'Flowers open in the morning and close by afternoon for several days in a row. Blooming peaks in the monsoon and autumn; after pollination the stalk bends and the fruit ripens under water.',
      bn: 'ফুল টানা কয়েক দিন সকালে ফোটে ও বিকেলে বুজে যায়। বর্ষা ও শরৎকালে সবচেয়ে বেশি ফুল ফোটে; পরাগায়নের পর ডাঁটা বেঁকে যায় এবং ফল পানির নিচে পাকে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [24.6, 91.2],
        [22.6, 88.4],
        [7.9, 80.7],
        [19.7, 96.1],
        [15.0, 100.5],
        [-12.5, 131.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Draining and filling of wetlands', 'Water pollution from fertilisers and pesticides', 'Over-harvesting from shrinking beels'],
        bn: ['জলাভূমি শুকিয়ে ও ভরাট করে ফেলা', 'রাসায়নিক সার ও কীটনাশকে পানিদূষণ', 'সংকুচিত বিল থেকে অতিরিক্ত আহরণ'],
      },
      initiatives: {
        en: ['Haor and wetland protection under Bangladesh’s Ecologically Critical Areas', 'Ramsar sites such as Tanguar Haor', 'Community-based wetland management'],
        bn: ['পরিবেশগত সংকটাপন্ন এলাকা ঘোষণার মাধ্যমে হাওর ও জলাভূমি সংরক্ষণ', 'টাঙ্গুয়ার হাওরের মতো রামসার এলাকা', 'স্থানীয় জনগোষ্ঠীভিত্তিক জলাভূমি ব্যবস্থাপনা'],
      },
    },
    facts: {
      en: [
        'The shapla is Bangladesh’s national flower and sits at the centre of the national emblem.',
        'Roasted shapla seeds, called dhyap, are puffed like popcorn and sold as a snack.',
        'The flower opens in the morning and closes in the afternoon, repeating this for a few days.',
      ],
      bn: [
        'শাপলা বাংলাদেশের জাতীয় ফুল এবং জাতীয় প্রতীকের কেন্দ্রে এর ছবি রয়েছে।',
        'শাপলার বীজ ঢ্যাপ ভেজে খইয়ের মতো ফোটানো হয় — গ্রামবাংলার জনপ্রিয় খাবার।',
        'ফুলটি সকালে ফোটে, বিকেলে বুজে যায় এবং কয়েক দিন ধরে এভাবেই চলে।',
      ],
    },
    related: ['sacred-lotus', 'rohu', 'common-kingfisher', 'indian-bullfrog'],
  },
  {
    id: 'sacred-lotus',
    commonName: { en: 'Sacred Lotus', bn: 'পদ্ম' },
    scientificName: 'Nelumbo nucifera',
    altNames: {
      en: ['Lotus', 'Indian Lotus', 'Bean of India'],
      bn: ['পদ্মফুল', 'কমল', 'লাল পদ্ম'],
    },
    synonyms: ['Nelumbium speciosum', 'Nymphaea nelumbo'],
    category: 'flowers',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Nelumbo nucifera',
    description: {
      en: 'The sacred lotus is a large aquatic plant whose pink or white flowers rise high above the water on sturdy stalks. It is the national flower of India and a powerful symbol of purity in Hinduism and Buddhism, because it blooms spotless out of muddy water. Unlike the water lily, both its leaves and flowers usually stand above the surface. Its rhizome, seeds and young leaves are eaten across Asia.',
      bn: 'পদ্ম একটি বড় জলজ উদ্ভিদ, যার গোলাপি বা সাদা ফুল শক্ত ডাঁটার ওপর পানি থেকে বেশ উঁচুতে ফোটে। এটি ভারতের জাতীয় ফুল এবং হিন্দু ও বৌদ্ধ ধর্মে পবিত্রতার প্রতীক — কারণ কাদাপানিতে জন্মেও পদ্ম থাকে নিষ্কলুষ। শাপলার সঙ্গে এর বড় পার্থক্য হলো, পদ্মের পাতা ও ফুল সাধারণত পানির ওপরে উঠে থাকে। এশিয়াজুড়ে পদ্মের মূল (কন্দ), বীজ ও কচি পাতা খাবার হিসেবে ব্যবহৃত হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Proteales',
      family: 'Nelumbonaceae',
      genus: 'Nelumbo',
      species: 'N. nucifera',
    },
    physical: {
      size: {
        en: 'Leaves up to 60–80 cm across, held up to 1.5 m above the water; flowers 15–30 cm wide',
        bn: 'পাতা ৬০–৮০ সেমি পর্যন্ত চওড়া, পানির ওপর ১.৫ মিটার পর্যন্ত উঁচুতে থাকে; ফুল ১৫–৩০ সেমি চওড়া',
      },
      weight: {
        en: 'A robust aquatic perennial; a single rhizome segment can weigh several hundred grams',
        bn: 'মজবুত বহুবর্ষজীবী জলজ উদ্ভিদ; কন্দের একেকটি খণ্ডের ওজন কয়েকশো গ্রাম পর্যন্ত হতে পারে',
      },
      lifespan: {
        en: 'Perennial through its rhizome; each flower lasts about 3 days; seeds can stay viable for over 1,000 years',
        bn: 'কন্দের মাধ্যমে বহুবর্ষজীবী; একেকটি ফুল প্রায় ৩ দিন টেকে; বীজ ১,০০০ বছরেরও বেশি সময় অঙ্কুরোদগমক্ষম থাকতে পারে',
      },
      features: {
        en: [
          'Round, water-repellent leaves with the stalk attached at the centre',
          'Large pink or white flowers with many broad petals',
          'Flat-topped seed head shaped like a shower head',
          'Long, segmented rhizome with air channels, known as lotus root',
        ],
        bn: [
          'গোলাকার, পানি-বিকর্ষী পাতা; ডাঁটা পাতার ঠিক মাঝখানে যুক্ত',
          'অনেক চওড়া পাপড়িওয়ালা বড় গোলাপি বা সাদা ফুল',
          'ঝাঁঝরির মতো চ্যাপ্টা মাথাওয়ালা বীজাধার (পদ্মচাক)',
          'বায়ুনালিযুক্ত লম্বা, গিঁটওয়ালা কন্দ — যা পদ্মমূল নামে পরিচিত',
        ],
      },
    },
    habitat: {
      en: 'Shallow, still fresh water — ponds, lakes, floodplain marshes and temple tanks',
      bn: 'অগভীর, স্থির মিঠা পানি — পুকুর, দিঘি, হ্রদ, প্লাবনভূমির জলাভূমি ও মন্দিরের পুকুর',
    },
    habitats: ['wetland', 'rivers-lakes'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'oceania'],
    distribution: {
      en: 'Native from India, Bangladesh and Sri Lanka through Southeast Asia to China, New Guinea and northern Australia; cultivated widely elsewhere.',
      bn: 'ভারত, বাংলাদেশ ও শ্রীলঙ্কা থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে চীন, নিউগিনি ও উত্তর অস্ট্রেলিয়া পর্যন্ত এর প্রাকৃতিক বিস্তার; অন্যত্রও ব্যাপকভাবে চাষ করা হয়।',
    },
    climate: {
      en: 'Tropical to warm-temperate climates with hot summers',
      bn: 'উষ্ণ গ্রীষ্মযুক্ত ক্রান্তীয় থেকে উষ্ণ-নাতিশীতোষ্ণ জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis — the raised leaves capture sunlight and pipe air down to the buried rhizome',
      bn: 'সালোকসংশ্লেষণ — উঁচু পাতা সূর্যালোক গ্রহণ করে এবং কাদায় পোঁতা কন্দে বাতাস পৌঁছে দেয়',
    },
    ecologicalRole: {
      en: 'Lotus beds shelter fish, frogs and waterbirds, stabilise sediments and absorb excess nutrients from the water. Bees and beetles pollinate its warm flowers.',
      bn: 'পদ্মবন মাছ, ব্যাঙ ও জলচর পাখির আশ্রয়স্থল; এটি তলানির মাটি ধরে রাখে এবং পানির অতিরিক্ত পুষ্টি শোষণ করে। মৌমাছি ও গুবরেপোকা এর উষ্ণ ফুলে পরাগায়ন ঘটায়।',
    },
    behavior: {
      en: 'Blooms in summer and the monsoon. The flower can warm itself to about 30–35 °C to attract pollinating insects, and opens in the morning and partly closes at night.',
      bn: 'গ্রীষ্ম ও বর্ষায় ফুল ফোটে। পরাগবাহী পোকাকে আকৃষ্ট করতে ফুলটি নিজের তাপমাত্রা প্রায় ৩০–৩৫ ডিগ্রি সেলসিয়াসে ধরে রাখতে পারে; সকালে ফোটে এবং রাতে আংশিক বুজে যায়।',
    },
    range: {
      native: [
        [23.7, 90.4],
        [25.3, 83.0],
        [7.0, 80.0],
        [21.0, 105.8],
        [30.6, 114.3],
        [13.7, 100.5],
        [-12.4, 130.8],
      ],
      introduced: [
        [30.2, -90.0],
        [35.0, 135.8],
      ],
    },
    conservation: {
      status: 'DD',
      trend: 'unknown',
      threats: {
        en: ['Loss and pollution of shallow wetlands', 'Draining of ponds for construction and farming', 'Invasive aquatic weeds'],
        bn: ['অগভীর জলাভূমি হারিয়ে যাওয়া ও দূষণ', 'নির্মাণ ও চাষের জন্য পুকুর-দিঘি ভরাট', 'আগ্রাসী জলজ আগাছা'],
      },
      initiatives: {
        en: ['Widespread cultivation for food, medicine and worship', 'Protection of wetlands and temple ponds', 'Seed banks and botanical garden collections'],
        bn: ['খাদ্য, ঔষধ ও পূজার জন্য ব্যাপক চাষ', 'জলাভূমি ও মন্দিরের পুকুর সংরক্ষণ', 'বীজব্যাংক ও উদ্ভিদ উদ্যানে সংগ্রহ'],
      },
    },
    facts: {
      en: [
        'A lotus seed about 1,300 years old, found in a dry lakebed in China, successfully germinated.',
        'Its leaves are so water-repellent that droplets roll off carrying dirt — the “lotus effect”.',
        'The lotus is the national flower of India and Vietnam.',
      ],
      bn: [
        'চীনের একটি শুকনো হ্রদের তলায় পাওয়া প্রায় ১,৩০০ বছরের পুরোনো পদ্মবীজ থেকেও চারা গজিয়েছে।',
        'পদ্মপাতা এতটাই পানি-বিকর্ষী যে পানির ফোঁটা ধুলাবালি নিয়ে গড়িয়ে পড়ে — একে বলে “লোটাস এফেক্ট”।',
        'পদ্ম ভারত ও ভিয়েতনামের জাতীয় ফুল।',
      ],
    },
    related: ['white-water-lily', 'holy-basil', 'banyan'],
  },
  {
    id: 'rafflesia',
    commonName: { en: 'Rafflesia', bn: 'র‍্যাফ্লেসিয়া' },
    scientificName: 'Rafflesia arnoldii',
    altNames: {
      en: ['Corpse Flower', 'Corpse Lily', 'Monster Flower', 'Giant Padma'],
      bn: ['শবফুল', 'মৃতদেহ ফুল', 'বিশ্বের সবচেয়ে বড় ফুল', 'রাফলেসিয়া'],
    },
    category: 'flowers',
    wikiTitle: 'Rafflesia arnoldii',
    description: {
      en: 'Rafflesia arnoldii produces the largest single flower in the world, up to about 1 m across. It is a parasite with no leaves, stems or roots of its own: it lives hidden inside the tissues of a tropical vine and appears only when its huge cabbage-like bud bursts through the bark. The open flower smells of rotting meat, attracting the carrion flies that pollinate it. It grows only in the rainforests of Sumatra and Borneo.',
      bn: 'র‍্যাফ্লেসিয়া আর্নল্ডির ফুলই পৃথিবীর সবচেয়ে বড় একক ফুল — প্রায় ১ মিটার পর্যন্ত চওড়া। এটি একটি পরজীবী উদ্ভিদ; এর নিজের কোনো পাতা, কাণ্ড বা শিকড় নেই। এটি একধরনের ক্রান্তীয় লতার দেহের ভেতরে লুকিয়ে বাস করে এবং বাঁধাকপির মতো বিশাল কুঁড়ি লতার বাকল ফুঁড়ে বেরোলে তবেই দেখা যায়। ফোটা ফুল থেকে পচা মাংসের মতো দুর্গন্ধ বের হয়, যা পরাগায়নকারী মাছিদের টেনে আনে। এটি কেবল সুমাত্রা ও বোর্নিওর রেইনফরেস্টে জন্মায়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Malpighiales',
      family: 'Rafflesiaceae',
      genus: 'Rafflesia',
      species: 'R. arnoldii',
    },
    physical: {
      size: {
        en: 'Flower up to about 1 m in diameter; petals (lobes) up to 2.5 cm thick',
        bn: 'ফুলের ব্যাস প্রায় ১ মিটার পর্যন্ত; পাপড়ি (লোব) ২.৫ সেমি পর্যন্ত পুরু',
      },
      weight: {
        en: 'A single flower can weigh up to about 10–11 kg',
        bn: 'একটি ফুলের ওজন প্রায় ১০–১১ কেজি পর্যন্ত হতে পারে',
      },
      lifespan: {
        en: 'The bud develops for around 9 months or more; the open flower lasts only about 5–7 days before rotting',
        bn: 'কুঁড়ি পরিণত হতে প্রায় ৯ মাস বা তারও বেশি সময় লাগে; ফোটা ফুল মাত্র ৫–৭ দিন টিকে থাকে, তারপর পচে যায়',
      },
      features: {
        en: [
          'Five thick, leathery reddish-brown lobes covered in pale warts',
          'A large central bowl (diaphragm) with a ring of spikes inside',
          'No leaves, stems, roots or chlorophyll',
          'Strong smell of rotting flesh when in bloom',
        ],
        bn: [
          'ফ্যাকাশে আঁচিলের মতো ছোপযুক্ত পাঁচটি পুরু, চামড়ার মতো লালচে-বাদামি পাপড়ি',
          'মাঝখানে বড় একটি গামলার মতো অংশ, যার ভেতরে কাঁটার মতো অভিক্ষেপ',
          'কোনো পাতা, কাণ্ড, শিকড় বা ক্লোরোফিল নেই',
          'ফোটার সময় পচা মাংসের তীব্র দুর্গন্ধ ছড়ায়',
        ],
      },
    },
    habitat: {
      en: 'Undisturbed lowland and hill tropical rainforest, wherever its Tetrastigma host vines grow',
      bn: 'অক্ষত নিম্নভূমি ও পাহাড়ি ক্রান্তীয় রেইনফরেস্ট, যেখানে এর আশ্রয়দাতা টেট্রাস্টিগমা লতা জন্মায়',
    },
    habitats: ['tropical-forest'],
    regions: ['southeast-asia'],
    distribution: {
      en: 'Endemic to the rainforests of Sumatra and Borneo (Indonesia and Malaysia).',
      bn: 'কেবল সুমাত্রা ও বোর্নিওর (ইন্দোনেশিয়া ও মালয়েশিয়া) রেইনফরেস্টে পাওয়া যায়।',
    },
    climate: {
      en: 'Hot, constantly humid equatorial climate',
      bn: 'সারা বছর আর্দ্র, উষ্ণ নিরক্ষীয় জলবায়ু',
    },
    diet: {
      en: 'Holoparasite — it takes all its water and nutrients from its host vine (Tetrastigma) and cannot photosynthesise',
      bn: 'পূর্ণ পরজীবী — আশ্রয়দাতা টেট্রাস্টিগমা লতা থেকে সব পানি ও পুষ্টি নেয়; নিজে সালোকসংশ্লেষণ করতে পারে না',
    },
    ecologicalRole: {
      en: 'Provides food and breeding cues for carrion flies that pollinate it; its fruits are thought to be eaten by small forest mammals such as tree shrews, which spread the seeds.',
      bn: 'পরাগায়নকারী মাছিদের আকৃষ্ট করে; ধারণা করা হয়, গেছো ছুঁচো জাতীয় ছোট বন্যপ্রাণী এর ফল খায় এবং বীজ ছড়িয়ে দেয়।',
    },
    behavior: {
      en: 'Lives invisibly as threads of tissue inside the host. Buds appear unpredictably and take months to open. Flowers are male or female, so successful pollination needs both sexes blooming nearby at the same time — which is rare.',
      bn: 'আশ্রয়দাতার দেহের ভেতরে সুতার মতো কোষ হিসেবে অদৃশ্যভাবে বাস করে। কুঁড়ি অনিশ্চিতভাবে দেখা দেয় এবং ফুটতে কয়েক মাস লাগে। ফুল হয় পুরুষ, নয়তো স্ত্রী — তাই পরাগায়নের জন্য কাছাকাছি একই সময়ে দুই ধরনের ফুল ফোটা দরকার, যা খুবই বিরল।',
    },
    range: {
      native: [
        [-3.6, 102.6],
        [-2.7, 101.9],
        [-0.6, 100.5],
        [2.6, 98.6],
        [0.6, 113.5],
        [1.1, 110.6],
      ],
      endemicTo: { en: 'Sumatra and Borneo', bn: 'সুমাত্রা ও বোর্নিও' },
    },
    conservation: {
      status: 'NE',
      trend: 'decreasing',
      threats: {
        en: ['Deforestation for oil palm and other plantations', 'Bud collection for traditional medicine and souvenirs', 'Trampling by tourists', 'Very low pollination success'],
        bn: ['তেলপাম ও অন্যান্য বাগানের জন্য বন উজাড়', 'লোকজ ঔষধ ও স্মারক হিসেবে কুঁড়ি সংগ্রহ', 'পর্যটকদের পায়ে মাড়ানো', 'পরাগায়নের অত্যন্ত কম সাফল্য'],
      },
      initiatives: {
        en: ['Protection in Indonesian national parks such as Kerinci Seblat', 'Community guardianship of flowering sites in Bengkulu', 'Research on propagation through grafting host vines'],
        bn: ['কেরিনচি সেবলাতের মতো ইন্দোনেশীয় জাতীয় উদ্যানে সংরক্ষণ', 'বেংকুলুতে স্থানীয় জনগণের মাধ্যমে ফুল ফোটার স্থান পাহারা', 'আশ্রয়দাতা লতা কলম করে বংশবিস্তারের গবেষণা'],
      },
    },
    facts: {
      en: [
        'It is the largest single flower on Earth.',
        'Rafflesia arnoldii is one of Indonesia’s three national flowers.',
        'It was named after Sir Stamford Raffles and Joseph Arnold, who recorded it in Sumatra in 1818.',
      ],
      bn: [
        'এটি পৃথিবীর সবচেয়ে বড় একক ফুল।',
        'র‍্যাফ্লেসিয়া আর্নল্ডি ইন্দোনেশিয়ার তিনটি জাতীয় ফুলের একটি।',
        '১৮১৮ সালে সুমাত্রায় এটি নথিভুক্তকারী স্যার স্ট্যামফোর্ড র‍্যাফলস ও জোসেফ আর্নল্ডের নামে এর নামকরণ হয়েছে।',
      ],
    },
    related: ['venus-flytrap', 'atlas-moth', 'sacred-lotus'],
  },
  {
    id: 'sunflower',
    commonName: { en: 'Sunflower', bn: 'সূর্যমুখী' },
    scientificName: 'Helianthus annuus',
    altNames: {
      en: ['Common Sunflower', 'Annual Sunflower'],
      bn: ['সূর্যমুখী ফুল', 'সূর্যমুখী তেলবীজ'],
    },
    category: 'flowers',
    secondaryCategories: ['plants'],
    wikiTitle: 'Common sunflower',
    description: {
      en: 'The sunflower is a tall annual plant famous for its huge golden flower heads. Native to North America, it was domesticated by Indigenous peoples thousands of years ago and is now one of the world’s most important oilseed crops. In Bangladesh it is grown in winter, especially in the salt-affected coastal districts of the south, where it helps farmers use land that would otherwise lie fallow.',
      bn: 'সূর্যমুখী একটি লম্বা বর্ষজীবী উদ্ভিদ, যার বিশাল সোনালি ফুলের জন্য এটি সবার কাছে পরিচিত। এর আদি নিবাস উত্তর আমেরিকা; হাজার হাজার বছর আগে সেখানকার আদিবাসীরা এটিকে চাষের আওতায় আনেন। আজ এটি পৃথিবীর অন্যতম প্রধান তেলবীজ ফসল। বাংলাদেশে শীতকালে, বিশেষ করে দক্ষিণের লবণাক্ত উপকূলীয় জেলাগুলোতে সূর্যমুখীর চাষ বাড়ছে — এতে অনেক পতিত জমি কাজে লাগানো যাচ্ছে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Asterales',
      family: 'Asteraceae',
      genus: 'Helianthus',
      species: 'H. annuus',
    },
    physical: {
      size: {
        en: 'Usually 1.5–3 m tall; flower heads 10–30 cm across in cultivated varieties',
        bn: 'সাধারণত ১.৫–৩ মিটার লম্বা; চাষের জাতে ফুলের মাথা ১০–৩০ সেমি চওড়া',
      },
      weight: {
        en: 'A mature seed head can weigh 1–2 kg; each head holds up to about 1,000–2,000 seeds',
        bn: 'পরিণত ফুলের মাথার ওজন ১–২ কেজি হতে পারে; একেকটি মাথায় প্রায় ১,০০০–২,০০০ বীজ থাকে',
      },
      lifespan: {
        en: 'Annual — completes its life cycle in about 90–120 days',
        bn: 'বর্ষজীবী — প্রায় ৯০–১২০ দিনে জীবনচক্র সম্পন্ন করে',
      },
      features: {
        en: [
          'Each “flower” is actually a head of hundreds of tiny florets',
          'Bright yellow ray petals around a brown or purple centre',
          'Seeds arranged in interlocking spirals that follow Fibonacci numbers',
          'Rough, hairy stem and large heart-shaped leaves',
        ],
        bn: [
          'প্রতিটি “ফুল” আসলে শত শত ক্ষুদ্র পুষ্পিকার সমষ্টি',
          'বাদামি বা বেগুনি কেন্দ্রের চারপাশে উজ্জ্বল হলুদ পাপড়ি',
          'বীজগুলো পরস্পর জড়ানো সর্পিল সারিতে সাজানো, যা ফিবোনাচি সংখ্যা মেনে চলে',
          'খসখসে লোমশ কাণ্ড ও হৃৎপিণ্ডাকৃতির বড় পাতা',
        ],
      },
    },
    habitat: {
      en: 'Open, sunny ground — prairies, roadsides and farmland with well-drained soil',
      bn: 'খোলা রোদেলা জমি — প্রেইরি তৃণভূমি, রাস্তার ধার ও পানি নিষ্কাশিত চাষের জমি',
    },
    habitats: ['grassland', 'urban-farmland'],
    regions: ['north-america', 'europe', 'south-america', 'south-asia', 'east-asia'],
    distribution: {
      en: 'Wild sunflowers are native to the central and western United States and northern Mexico; the crop is now grown worldwide, with Russia, Ukraine and Argentina among the top producers.',
      bn: 'বুনো সূর্যমুখীর আদি নিবাস যুক্তরাষ্ট্রের মধ্য ও পশ্চিমাঞ্চল এবং উত্তর মেক্সিকো; এখন সারা বিশ্বে এর চাষ হয় — রাশিয়া, ইউক্রেন ও আর্জেন্টিনা শীর্ষ উৎপাদক।',
    },
    climate: {
      en: 'Warm, sunny temperate and subtropical climates; fairly drought-tolerant',
      bn: 'উষ্ণ ও রোদেলা নাতিশীতোষ্ণ এবং উপক্রান্তীয় জলবায়ু; বেশ খরাসহিষ্ণু',
    },
    diet: {
      en: 'Photosynthesis — a fast-growing plant with a deep taproot that reaches water and nutrients far below the surface',
      bn: 'সালোকসংশ্লেষণ — দ্রুত বর্ধনশীল উদ্ভিদ; গভীর প্রধান মূল মাটির অনেক নিচ থেকে পানি ও পুষ্টি সংগ্রহ করে',
    },
    ecologicalRole: {
      en: 'Its nectar and pollen feed honey bees, native bees and butterflies, and its seeds are eaten by birds and small mammals. Sunflowers have also been used to draw heavy metals out of contaminated soil.',
      bn: 'এর মধু ও পরাগ মৌমাছি, বুনো মৌমাছি ও প্রজাপতির খাদ্য; বীজ খায় পাখি ও ছোট স্তন্যপায়ী প্রাণী। দূষিত মাটি থেকে ভারী ধাতু শুষে নিতেও সূর্যমুখী ব্যবহার করা হয়েছে।',
    },
    behavior: {
      en: 'Young plants track the sun from east to west during the day and swing back at night. Once the flower opens, the head stops moving and mostly faces east, which warms it in the morning and attracts more pollinators.',
      bn: 'কচি গাছ দিনে সূর্যের সঙ্গে পূর্ব থেকে পশ্চিমে মাথা ঘোরায় এবং রাতে আবার পূর্বমুখী হয়। ফুল পুরোপুরি ফুটে গেলে মাথা আর ঘোরে না, সাধারণত পূর্বদিকে মুখ করে থাকে — এতে সকালে ফুলটি দ্রুত উষ্ণ হয় এবং বেশি পরাগবাহী আসে।',
    },
    range: {
      native: [
        [39.0, -98.0],
        [35.0, -106.0],
        [45.0, -100.0],
        [31.5, -97.0],
        [41.0, -112.0],
        [28.5, -106.0],
      ],
      introduced: [
        [48.5, 34.0],
        [51.0, 40.0],
        [-35.0, -62.0],
        [46.0, 0.5],
        [16.0, 77.0],
        [22.4, 90.3],
        [41.0, 110.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Loss of genetic diversity in wild relatives as prairies are converted to farmland', 'Crop diseases and pests', 'Bird damage to ripening seed heads'],
        bn: ['প্রেইরি তৃণভূমি চাষের জমিতে রূপান্তরের ফলে বুনো জাতের জিনগত বৈচিত্র্য হ্রাস', 'ফসলের রোগ ও পোকামাকড়', 'পাকা বীজে পাখির আক্রমণ'],
      },
      initiatives: {
        en: ['Seed banks conserving wild Helianthus species', 'Breeding of salt- and drought-tolerant varieties', 'Expansion of sunflower farming in Bangladesh’s coastal belt'],
        bn: ['বীজব্যাংকে বুনো হেলিয়্যান্থাস প্রজাতি সংরক্ষণ', 'লবণ ও খরাসহিষ্ণু জাত উদ্ভাবন', 'বাংলাদেশের উপকূলীয় অঞ্চলে সূর্যমুখী চাষ সম্প্রসারণ'],
      },
    },
    facts: {
      en: [
        'The tallest sunflower on record measured over 9 m.',
        'Its name Helianthus comes from the Greek words for “sun” and “flower”.',
        'Sunflower oil is one of the most widely used cooking oils in the world.',
      ],
      bn: [
        'রেকর্ড অনুযায়ী সবচেয়ে লম্বা সূর্যমুখী গাছটি ৯ মিটারেরও বেশি উঁচু ছিল।',
        'এর বৈজ্ঞানিক নাম হেলিয়্যান্থাস এসেছে গ্রিক “সূর্য” ও “ফুল” শব্দ থেকে।',
        'সূর্যমুখীর তেল বিশ্বের সবচেয়ে বেশি ব্যবহৃত রান্নার তেলগুলোর একটি।',
      ],
    },
    related: ['western-honey-bee', 'monarch-butterfly', 'seven-spot-ladybird'],
  },
];
