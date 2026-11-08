import type { Species } from '@/types';

export const flowersAsia1: Species[] = [
  {
    id: 'arabian-jasmine',
    commonName: { en: 'Arabian Jasmine', bn: 'বেলি' },
    scientificName: 'Jasminum sambac',
    altNames: {
      en: ['Sambac Jasmine', 'Mogra', 'Sampaguita'],
      bn: ['বেলফুল', 'মল্লিকা', 'মোগরা'],
    },
    category: 'flowers',
    wikiTitle: 'Jasminum sambac',
    description: {
      en: 'Arabian jasmine is a small evergreen shrub grown across South and Southeast Asia for its intensely fragrant white flowers. Despite its name it is native to the Indian subcontinent and neighbouring Asia, not Arabia. It is the national flower of the Philippines and one of the most loved garden flowers in Bangladesh, strung into garlands and hair ornaments.',
      bn: 'বেলি একটি ছোট চিরসবুজ গুল্ম, যার তীব্র সুগন্ধি সাদা ফুলের জন্য দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়াজুড়ে এটি চাষ করা হয়। ইংরেজি নামে "আরব" থাকলেও এর আদি নিবাস আসলে ভারতীয় উপমহাদেশ ও আশপাশের এশিয়া। ফিলিপাইনের জাতীয় ফুল বেলি বাংলাদেশেরও অত্যন্ত প্রিয় ফুল — মালা গাঁথা ও খোঁপায় পরার জন্য এর জুড়ি নেই।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Lamiales',
      family: 'Oleaceae',
      genus: 'Jasminum',
      species: 'J. sambac',
    },
    physical: {
      size: {
        en: 'Shrub or scrambling vine 0.5–3 m tall; flowers 2–3 cm across',
        bn: '০.৫–৩ মিটার উঁচু গুল্ম বা লতানো গাছ; ফুল ২–৩ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a single flower weighs well under 1 g',
        bn: 'প্রযোজ্য নয় — একটি ফুলের ওজন ১ গ্রামেরও অনেক কম',
      },
      lifespan: { en: 'Perennial; lives many years with pruning', bn: 'বহুবর্ষজীবী; ছাঁটাই করলে বহু বছর বাঁচে' },
      features: {
        en: [
          'Waxy white single or double flowers that turn pinkish as they fade',
          'Glossy, oval, opposite leaves',
          'Strongest fragrance in the evening',
        ],
        bn: [
          'মোমের মতো মসৃণ সাদা একক বা ঘন পাপড়ির ফুল, যা ঝরে যাওয়ার আগে গোলাপি আভা নেয়',
          'চকচকে, ডিম্বাকার, মুখোমুখি সাজানো পাতা',
          'সন্ধ্যার দিকে সুগন্ধ সবচেয়ে তীব্র হয়',
        ],
      },
    },
    habitat: {
      en: 'Gardens, homesteads and temple grounds; wild forms grow in lowland scrub',
      bn: 'বাগান, বসতবাড়ির আঙিনা ও মন্দির প্রাঙ্গণ; বুনো রূপ নিচু এলাকার ঝোপঝাড়ে জন্মায়',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Native from the Indian subcontinent to Myanmar; cultivated throughout tropical Asia and beyond.',
      bn: 'আদি নিবাস ভারতীয় উপমহাদেশ থেকে মিয়ানমার পর্যন্ত; এখন ক্রান্তীয় এশিয়াসহ বিশ্বের নানা দেশে চাষ হয়।',
    },
    climate: { en: 'Warm, humid tropical and subtropical climates', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Photosynthesis; prefers rich, well-drained soil and full sun',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; উর্বর, পানি নিষ্কাশিত মাটি ও পূর্ণ রোদ পছন্দ করে',
    },
    ecologicalRole: {
      en: 'Its night-scented flowers attract moths and other nocturnal pollinators.',
      bn: 'রাতে সুগন্ধ ছড়ানো ফুল মথসহ নিশাচর পরাগায়নকারী পতঙ্গকে আকৃষ্ট করে।',
    },
    behavior: {
      en: 'Flowers mainly from spring to the end of the monsoon; buds open in the evening and fade by the next day.',
      bn: 'মূলত বসন্ত থেকে বর্ষার শেষ পর্যন্ত ফোটে; কুঁড়ি সন্ধ্যায় ফোটে এবং পরদিনই নেতিয়ে যায়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.6, 88.4],
        [13.1, 80.3],
        [16.8, 96.2],
        [26.1, 91.7],
      ],
      introduced: [
        [14.6, 121.0],
        [-6.2, 106.8],
        [21.3, -157.8],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; widely cultivated', 'Wild populations poorly known'],
        bn: ['হুমকির মুখে নয়; ব্যাপকভাবে চাষ হয়', 'বুনো জনগোষ্ঠী সম্পর্কে খুব কম জানা যায়'],
      },
      initiatives: {
        en: ['Commercial cultivation for perfume and garlands', 'Cultivar collections in botanical gardens'],
        bn: ['সুগন্ধি ও মালার জন্য বাণিজ্যিক চাষ', 'উদ্ভিদ উদ্যানে বিভিন্ন জাতের সংগ্রহ'],
      },
    },
    facts: {
      en: [
        'It is the national flower of the Philippines, where it is called sampaguita.',
        'Its flowers are used to scent jasmine tea in China.',
      ],
      bn: [
        'এটি ফিলিপাইনের জাতীয় ফুল; সেখানে একে সাম্পাগিতা বলা হয়।',
        'চীনে জুঁই চায়ে সুগন্ধ দিতে এই ফুল ব্যবহার করা হয়।',
      ],
    },
    related: ['night-flowering-jasmine', 'crape-jasmine', 'orange-jasmine'],
  },
  {
    id: 'night-flowering-jasmine',
    commonName: { en: 'Night-flowering Jasmine', bn: 'শিউলি' },
    scientificName: 'Nyctanthes arbor-tristis',
    altNames: {
      en: ['Parijat', 'Coral Jasmine', 'Tree of Sorrow'],
      bn: ['শেফালি', 'পারিজাত', 'শিউলি ফুল'],
    },
    category: 'flowers',
    wikiTitle: 'Nyctanthes arbor-tristis',
    description: {
      en: 'Night-flowering jasmine is a large shrub whose fragrant white flowers with bright orange tubes open at night and fall at dawn. In Bangladesh, a carpet of fallen shiuli flowers on the grass is the classic sign of autumn (Sharat) and the approach of Durga Puja. It is not a true jasmine but belongs to the same olive family.',
      bn: 'শিউলি একটি বড় গুল্ম, যার কমলা বোঁটাওয়ালা সুগন্ধি সাদা ফুল রাতে ফোটে আর ভোরে ঝরে পড়ে। বাংলাদেশে ঘাসের ওপর ঝরে পড়া শিউলির গালিচা শরৎকাল ও দুর্গাপূজা আগমনের চিরচেনা প্রতীক। এটি আসল জুঁই নয়, তবে জুঁইয়ের মতোই জলপাই পরিবারের সদস্য।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Lamiales',
      family: 'Oleaceae',
      genus: 'Nyctanthes',
      species: 'N. arbor-tristis',
    },
    physical: {
      size: {
        en: 'Shrub or small tree 3–10 m tall; flowers about 2 cm across',
        bn: '৩–১০ মিটার উঁচু গুল্ম বা ছোট গাছ; ফুল প্রায় ২ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — flowers are tiny and delicate',
        bn: 'প্রযোজ্য নয় — ফুল খুবই ছোট ও কোমল',
      },
      lifespan: { en: 'Perennial; lives for decades', bn: 'বহুবর্ষজীবী; কয়েক দশক বাঁচে' },
      features: {
        en: [
          'Five to eight white petals around a bright orange-red corolla tube',
          'Rough, sandpaper-like leaves',
          'Flat, heart-shaped two-seeded capsules',
        ],
        bn: [
          'উজ্জ্বল কমলা-লাল বোঁটার চারপাশে পাঁচ থেকে আটটি সাদা পাপড়ি',
          'শিরিষ কাগজের মতো খসখসে পাতা',
          'চ্যাপ্টা, হৃৎপিণ্ডাকার, দুই বীজওয়ালা ফল',
        ],
      },
    },
    habitat: {
      en: 'Dry deciduous forests, hill slopes, gardens and courtyards',
      bn: 'শুষ্ক পর্ণমোচী বন, পাহাড়ের ঢাল, বাগান ও উঠান',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Native to South Asia and northern Southeast Asia, from Pakistan and Nepal through India and Bangladesh to Thailand.',
      bn: 'দক্ষিণ এশিয়া ও উত্তর দক্ষিণ-পূর্ব এশিয়ার স্থানীয় — পাকিস্তান ও নেপাল থেকে ভারত, বাংলাদেশ হয়ে থাইল্যান্ড পর্যন্ত।',
    },
    climate: { en: 'Tropical and subtropical monsoon climates', bn: 'ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Photosynthesis; tolerates poor, dry soils',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; অনুর্বর, শুষ্ক মাটিতেও টিকে থাকে',
    },
    ecologicalRole: {
      en: 'Night-opening fragrant flowers are pollinated by moths; the shrub also provides cover for small birds.',
      bn: 'রাতে ফোটা সুগন্ধি ফুলের পরাগায়ন করে মথ; গুল্মটি ছোট পাখিদের আশ্রয়ও দেয়।',
    },
    behavior: {
      en: 'Blooms from late monsoon to early winter; flowers open after dusk and drop before sunrise.',
      bn: 'বর্ষার শেষ থেকে শীতের শুরু পর্যন্ত ফোটে; সন্ধ্যার পর ফুল ফোটে এবং সূর্যোদয়ের আগেই ঝরে পড়ে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [27.7, 85.3],
        [23.3, 77.4],
        [30.3, 78.0],
        [18.8, 98.9],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; common in cultivation', 'Clearing of dry forest reduces wild stands'],
        bn: ['হুমকির মুখে নয়; চাষে সহজলভ্য', 'শুষ্ক বন উজাড়ে বুনো গাছ কমছে'],
      },
      initiatives: {
        en: ['Widely planted in homesteads and temple gardens', 'Grown in medicinal plant gardens'],
        bn: ['বসতবাড়ি ও মন্দিরের বাগানে ব্যাপক রোপণ', 'ভেষজ উদ্ভিদ বাগানে চাষ'],
      },
    },
    facts: {
      en: [
        'The orange flower tubes were traditionally used as a natural yellow-orange dye for fabric.',
        'Leaf extracts are used in traditional medicine for fever; consult a doctor before any medicinal use.',
        'It is the state flower of West Bengal.',
      ],
      bn: [
        'ফুলের কমলা বোঁটা থেকে একসময় কাপড় রাঙানোর প্রাকৃতিক হলুদ-কমলা রং তৈরি হতো।',
        'লোকজ চিকিৎসায় জ্বরে শিউলি পাতার রস ব্যবহার করা হয়; ওষুধ হিসেবে খাওয়ার আগে চিকিৎসকের পরামর্শ নিন।',
        'এটি পশ্চিমবঙ্গের রাজ্য ফুল।',
      ],
    },
    related: ['arabian-jasmine', 'crape-jasmine', 'orange-jasmine'],
  },
  {
    id: 'chinese-hibiscus',
    commonName: { en: 'Chinese Hibiscus', bn: 'জবা' },
    scientificName: 'Hibiscus rosa-sinensis',
    altNames: {
      en: ['Shoeblackplant', 'China Rose', 'Hawaiian Hibiscus'],
      bn: ['জবা ফুল', 'রক্তজবা', 'জবা কুসুম'],
    },
    category: 'flowers',
    wikiTitle: 'Hibiscus rosa-sinensis',
    description: {
      en: 'Chinese hibiscus is an evergreen shrub with large, showy trumpet-shaped flowers, most famously in brilliant red. Its exact wild origin is uncertain, but it has been cultivated in East and tropical Asia for centuries and is now grown worldwide. In Bangladesh the red joba is a fixture of home gardens and is offered in Kali worship.',
      bn: 'জবা একটি চিরসবুজ গুল্ম, যার বড় ও আকর্ষণীয় চোঙাকৃতি ফুল — বিশেষ করে টকটকে লাল জবা — সবার চেনা। এর বুনো আদি উৎস নিশ্চিত নয়, তবে পূর্ব ও ক্রান্তীয় এশিয়ায় বহু শতাব্দী ধরে এর চাষ হয়ে আসছে, এখন সারা বিশ্বেই জন্মে। বাংলাদেশে লাল জবা বাড়ির বাগানের পরিচিত ফুল এবং কালীপূজায় নিবেদন করা হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Malvales',
      family: 'Malvaceae',
      genus: 'Hibiscus',
      species: 'H. rosa-sinensis',
    },
    physical: {
      size: {
        en: 'Shrub 2–5 m tall; flowers 10–15 cm across',
        bn: '২–৫ মিটার উঁচু গুল্ম; ফুল ১০–১৫ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a flower weighs only a few grams',
        bn: 'প্রযোজ্য নয় — একটি ফুলের ওজন মাত্র কয়েক গ্রাম',
      },
      lifespan: { en: 'Perennial; can live for decades', bn: 'বহুবর্ষজীবী; কয়েক দশক বাঁচতে পারে' },
      features: {
        en: [
          'Five broad petals around a long central staminal column',
          'Glossy, toothed, dark green leaves',
          'Thousands of cultivars in red, pink, yellow, orange and white',
        ],
        bn: [
          'পাঁচটি চওড়া পাপড়ির মাঝখানে লম্বা পুংকেশর-দণ্ড',
          'চকচকে, খাঁজকাটা কিনারার গাঢ় সবুজ পাতা',
          'লাল, গোলাপি, হলুদ, কমলা ও সাদা রঙের হাজারো জাত',
        ],
      },
    },
    habitat: {
      en: 'Gardens, hedges, roadsides and temple grounds',
      bn: 'বাগান, বেড়া, রাস্তার ধার ও মন্দির প্রাঙ্গণ',
    },
    habitats: ['urban-farmland'],
    regions: ['east-asia', 'southeast-asia', 'south-asia'],
    distribution: {
      en: 'Probably originated in cultivation in East or tropical Asia; now planted throughout the tropics and subtropics.',
      bn: 'সম্ভবত পূর্ব বা ক্রান্তীয় এশিয়ায় চাষের মধ্য দিয়ে উদ্ভূত; এখন বিশ্বের সব ক্রান্তীয় ও উপক্রান্তীয় অঞ্চলে লাগানো হয়।',
    },
    climate: { en: 'Warm tropical and subtropical climates; frost-sensitive', bn: 'উষ্ণ ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু; তুষারপাত সহ্য করে না' },
    diet: {
      en: 'Photosynthesis; needs sun, regular water and fertile soil',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; রোদ, নিয়মিত পানি ও উর্বর মাটি প্রয়োজন',
    },
    ecologicalRole: {
      en: 'Nectar-rich flowers feed sunbirds, butterflies and bees.',
      bn: 'মধুসমৃদ্ধ ফুল মৌটুসি পাখি, প্রজাপতি ও মৌমাছির খাদ্য জোগায়।',
    },
    behavior: {
      en: 'Blooms almost all year in warm climates; each flower lasts only about a day.',
      bn: 'উষ্ণ জলবায়ুতে প্রায় সারা বছর ফোটে; প্রতিটি ফুল মাত্র এক দিনের মতো টেকে।',
    },
    range: {
      native: [
        [23.1, 113.3],
        [22.3, 114.2],
        [21.0, 105.8],
        [25.0, 121.5],
      ],
      introduced: [
        [23.8, 90.4],
        [21.3, -157.8],
        [3.1, 101.7],
        [-17.7, 168.3],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; known mainly from cultivation', 'Pests such as mealybugs in gardens'],
        bn: ['হুমকির মুখে নয়; মূলত চাষ করা গাছ হিসেবেই পরিচিত', 'বাগানে ছাতরা পোকাসহ নানা পোকার আক্রমণ'],
      },
      initiatives: {
        en: ['Extensive cultivar breeding by hibiscus societies', 'Living collections in botanical gardens'],
        bn: ['জবা প্রেমী সংগঠনের মাধ্যমে নতুন জাত উদ্ভাবন', 'উদ্ভিদ উদ্যানে জীবন্ত সংগ্রহ'],
      },
    },
    facts: {
      en: [
        'It is the national flower of Malaysia, where it is called bunga raya.',
        'Crushed flowers were once used to polish shoes, hence the name "shoeblackplant".',
        'Flowers and leaves are used in traditional hair oils.',
      ],
      bn: [
        'এটি মালয়েশিয়ার জাতীয় ফুল; সেখানে একে বুঙ্গা রায়া বলে।',
        'একসময় ফুল পিষে জুতা পালিশ করা হতো, তাই ইংরেজিতে এর আরেক নাম "শুব্ল্যাকপ্ল্যান্ট"।',
        'চুলের প্রচলিত তেল তৈরিতে জবা ফুল ও পাতা ব্যবহার করা হয়।',
      ],
    },
    related: ['ixora', 'rangoon-creeper'],
  },
  {
    id: 'orange-jasmine',
    commonName: { en: 'Orange Jasmine', bn: 'কামিনী' },
    scientificName: 'Murraya paniculata',
    altNames: {
      en: ['Mock Orange', 'Chinese Box', 'Satinwood'],
      bn: ['কামিনী ফুল', 'কামিনী গাছ', 'কুঞ্জলতা'],
    },
    category: 'flowers',
    wikiTitle: 'Murraya paniculata',
    description: {
      en: 'Orange jasmine is an evergreen shrub of the citrus family, named for the orange-blossom scent of its small white flowers. Clusters open in flushes, often after rain, filling gardens with perfume for a night or two. In Bangladesh kamini is a popular hedge and courtyard plant, and its red berries attract birds.',
      bn: 'কামিনী লেবু পরিবারের একটি চিরসবুজ গুল্ম; এর ছোট সাদা ফুলে কমলালেবুর ফুলের মতো মিষ্টি ঘ্রাণ। প্রায়ই বৃষ্টির পর গুচ্ছ গুচ্ছ ফুল একসঙ্গে ফোটে এবং এক-দুই রাত পুরো বাগান সুগন্ধে ভরিয়ে রাখে। বাংলাদেশে কামিনী বেড়া ও উঠানের জনপ্রিয় গাছ; এর লাল ফল পাখিদের প্রিয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Sapindales',
      family: 'Rutaceae',
      genus: 'Murraya',
      species: 'M. paniculata',
    },
    physical: {
      size: {
        en: 'Shrub or small tree 2–7 m tall; flowers about 2 cm across',
        bn: '২–৭ মিটার উঁচু গুল্ম বা ছোট গাছ; ফুল প্রায় ২ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — berries are about 1 cm long',
        bn: 'প্রযোজ্য নয় — ফল প্রায় ১ সেমি লম্বা',
      },
      lifespan: { en: 'Perennial; lives for decades', bn: 'বহুবর্ষজীবী; কয়েক দশক বাঁচে' },
      features: {
        en: [
          'Clusters of five-petalled white flowers with a citrus scent',
          'Glossy compound leaves with 3–9 leaflets',
          'Small oval red berries',
        ],
        bn: [
          'লেবুর ঘ্রাণযুক্ত পাঁচ পাপড়ির সাদা ফুলের থোকা',
          '৩–৯টি পত্রকযুক্ত চকচকে যৌগিক পাতা',
          'ছোট ডিম্বাকার লাল ফল',
        ],
      },
    },
    habitat: {
      en: 'Forest edges, limestone scrub, gardens and hedges',
      bn: 'বনের কিনারা, চুনাপাথুরে ঝোপ, বাগান ও বেড়া',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'oceania'],
    distribution: {
      en: 'Native from South Asia through southern China and Southeast Asia to northern Australia.',
      bn: 'দক্ষিণ এশিয়া থেকে দক্ষিণ চীন ও দক্ষিণ-পূর্ব এশিয়া হয়ে উত্তর অস্ট্রেলিয়া পর্যন্ত এর আদি বিস্তার।',
    },
    climate: { en: 'Tropical and subtropical climates', bn: 'ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Photosynthesis; grows in sun or partial shade on most soils',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; রোদ বা আংশিক ছায়ায় প্রায় সব মাটিতে জন্মায়',
    },
    ecologicalRole: {
      en: 'Flowers feed bees and moths, and birds disperse the berries.',
      bn: 'ফুল মৌমাছি ও মথের খাদ্য জোগায়, আর পাখিরা ফল খেয়ে বীজ ছড়ায়।',
    },
    behavior: {
      en: 'Flowers in several flushes a year, often triggered by rain; each flush lasts only a few days.',
      bn: 'বছরে কয়েকবার, প্রায়ই বৃষ্টির পর, একসঙ্গে ফুল ফোটে; প্রতিবারের ফুল মাত্র কয়েক দিন থাকে।',
    },
    range: {
      native: [
        [24.9, 91.9],
        [22.3, 114.2],
        [13.7, 100.5],
        [-12.5, 130.8],
        [10.8, 106.7],
        [7.3, 80.6],
      ],
      introduced: [
        [25.8, -80.2],
        [21.3, -157.8],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['No major threats; very widespread', 'Host plant of the citrus greening vector, so sometimes removed near orchards'],
        bn: ['বড় কোনো হুমকি নেই; বিস্তৃত এলাকায় পাওয়া যায়', 'লেবুর গ্রিনিং রোগের বাহক পোকার আশ্রয় হওয়ায় কখনো বাগানের কাছ থেকে সরিয়ে ফেলা হয়'],
      },
      initiatives: {
        en: ['Widely planted as an ornamental hedge', 'Occurs in many protected forests'],
        bn: ['শোভাবর্ধক বেড়া হিসেবে ব্যাপক রোপণ', 'বহু সংরক্ষিত বনে প্রাকৃতিকভাবে জন্মায়'],
      },
    },
    facts: {
      en: [
        'Its hard, fine-grained wood has been used for tool handles.',
        'In some places it has escaped gardens and become invasive.',
      ],
      bn: [
        'এর শক্ত ও মিহি আঁশের কাঠ দিয়ে যন্ত্রপাতির হাতল তৈরি হয়েছে।',
        'কিছু দেশে বাগান থেকে ছড়িয়ে পড়ে এটি আগ্রাসী উদ্ভিদে পরিণত হয়েছে।',
      ],
    },
    related: ['arabian-jasmine', 'gardenia', 'night-flowering-jasmine'],
  },
  {
    id: 'crape-jasmine',
    commonName: { en: 'Crape Jasmine', bn: 'টগর' },
    scientificName: 'Tabernaemontana divaricata',
    altNames: {
      en: ['Pinwheel Flower', 'East India Rosebay', 'Carnation of India'],
      bn: ['টগর ফুল', 'থোকা টগর', 'চাঁদনি'],
    },
    category: 'flowers',
    wikiTitle: 'Tabernaemontana divaricata',
    description: {
      en: 'Crape jasmine is an evergreen shrub bearing pure white, pinwheel-like flowers almost all year. Single and double-flowered forms are both common in Bangladeshi gardens, where togor is used in worship and garlands. Like other members of the dogbane family, it has milky sap.',
      bn: 'টগর একটি চিরসবুজ গুল্ম, যাতে প্রায় সারা বছর ধবধবে সাদা, চরকির মতো পাকানো ফুল ফোটে। বাংলাদেশের বাগানে একক পাপড়ি ও থোকা পাপড়ির দুই রকম টগরই দেখা যায়; পূজা ও মালায় এর ব্যবহার আছে। করবী পরিবারের অন্য সদস্যদের মতো এর ডাল ভাঙলে দুধের মতো কষ বের হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Gentianales',
      family: 'Apocynaceae',
      genus: 'Tabernaemontana',
      species: 'T. divaricata',
    },
    physical: {
      size: {
        en: 'Shrub 1.5–3 m tall; flowers 3–5 cm across',
        bn: '১.৫–৩ মিটার উঁচু গুল্ম; ফুল ৩–৫ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — flowers weigh about a gram',
        bn: 'প্রযোজ্য নয় — একটি ফুলের ওজন প্রায় এক গ্রাম',
      },
      lifespan: { en: 'Perennial; lives many years', bn: 'বহুবর্ষজীবী; বহু বছর বাঁচে' },
      features: {
        en: [
          'Five white petals twisted like a pinwheel (double forms look like small roses)',
          'Large glossy dark green leaves',
          'White milky latex in stems and leaves',
        ],
        bn: [
          'চরকির মতো পাকানো পাঁচটি সাদা পাপড়ি (থোকা টগর দেখতে ছোট গোলাপের মতো)',
          'বড়, চকচকে, গাঢ় সবুজ পাতা',
          'কাণ্ড ও পাতায় সাদা দুধের মতো কষ',
        ],
      },
    },
    habitat: {
      en: 'Forest undergrowth, gardens, hedges and roadsides',
      bn: 'বনের নিচতলা, বাগান, বেড়া ও রাস্তার ধার',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Native from India, Nepal and Bangladesh through Myanmar and Thailand to southern China.',
      bn: 'ভারত, নেপাল ও বাংলাদেশ থেকে মিয়ানমার ও থাইল্যান্ড হয়ে দক্ষিণ চীন পর্যন্ত এর আদি বিস্তার।',
    },
    climate: { en: 'Warm, humid tropical and subtropical climates', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Photosynthesis; grows well in sun or light shade',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; রোদ বা হালকা ছায়ায় ভালো জন্মায়',
    },
    ecologicalRole: {
      en: 'Fragrant evening flowers attract hawk moths and butterflies.',
      bn: 'সন্ধ্যায় সুগন্ধ ছড়ানো ফুল বাজপাখি-মথ ও প্রজাপতিকে আকৃষ্ট করে।',
    },
    behavior: {
      en: 'Flowers nearly year-round, most heavily in the warm, wet months.',
      bn: 'প্রায় সারা বছর ফোটে; উষ্ণ ও বর্ষার মাসগুলোতে সবচেয়ে বেশি।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [27.7, 85.3],
        [21.0, 79.1],
        [19.8, 96.2],
        [18.8, 98.9],
        [22.8, 108.3],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; common in cultivation', 'Loss of forest understorey in the wild'],
        bn: ['হুমকির মুখে নয়; চাষে সহজলভ্য', 'বুনো পরিবেশে বনের নিচতলা ধ্বংস'],
      },
      initiatives: {
        en: ['Widely grown in gardens and parks', 'Studied for its medicinal alkaloids'],
        bn: ['বাগান ও পার্কে ব্যাপক চাষ', 'ঔষধি অ্যালকালয়েডের জন্য গবেষণা'],
      },
    },
    facts: {
      en: [
        'Its sap contains alkaloids studied in pharmacology; the plant is mildly toxic if eaten.',
        'The root was traditionally chewed for toothache — not recommended without medical advice.',
      ],
      bn: [
        'এর কষে নানা অ্যালকালয়েড থাকে, যা নিয়ে ওষুধবিজ্ঞানে গবেষণা হচ্ছে; গাছটি খেলে হালকা বিষক্রিয়া হতে পারে।',
        'লোকজ চিকিৎসায় দাঁতব্যথায় শিকড় চিবানো হতো — চিকিৎসকের পরামর্শ ছাড়া এমনটি করা উচিত নয়।',
      ],
    },
    related: ['arabian-jasmine', 'night-flowering-jasmine', 'gardenia'],
  },
  {
    id: 'gardenia',
    commonName: { en: 'Gardenia', bn: 'গন্ধরাজ' },
    scientificName: 'Gardenia jasminoides',
    altNames: {
      en: ['Cape Jasmine', 'Common Gardenia', 'Cape Jessamine'],
      bn: ['গন্ধরাজ ফুল', 'গার্ডেনিয়া', 'গন্ধরাজ লেবু ফুল'],
    },
    category: 'flowers',
    wikiTitle: 'Gardenia jasminoides',
    description: {
      en: 'Gardenia is an evergreen shrub prized for its creamy white, waxy flowers with a rich, sweet perfume. Native to southern China, Japan and nearby East and Southeast Asia, it has been cultivated in China for over a thousand years. In Bangladesh, gondhoraj — literally "king of fragrance" — is a cherished early-monsoon garden flower.',
      bn: 'গন্ধরাজ একটি চিরসবুজ গুল্ম, যার মোমের মতো মসৃণ ঘিয়ে-সাদা ফুলের ঘন মিষ্টি সুবাস সবার প্রিয়। দক্ষিণ চীন, জাপান ও আশপাশের পূর্ব ও দক্ষিণ-পূর্ব এশিয়া এর আদি নিবাস; চীনে হাজার বছরেরও বেশি সময় ধরে এর চাষ হচ্ছে। নামের মতোই "সুগন্ধের রাজা" গন্ধরাজ বাংলাদেশে বর্ষার শুরুর এক আদরের ফুল।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Gentianales',
      family: 'Rubiaceae',
      genus: 'Gardenia',
      species: 'G. jasminoides',
    },
    physical: {
      size: {
        en: 'Shrub 1–3 m tall; flowers 5–10 cm across',
        bn: '১–৩ মিটার উঁচু গুল্ম; ফুল ৫–১০ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — orange fruits are 2–4 cm long',
        bn: 'প্রযোজ্য নয় — কমলা রঙের ফল ২–৪ সেমি লম্বা',
      },
      lifespan: { en: 'Perennial; lives for decades', bn: 'বহুবর্ষজীবী; কয়েক দশক বাঁচে' },
      features: {
        en: [
          'Waxy white flowers that age to cream-yellow',
          'Thick, glossy, deep green leaves',
          'Ribbed orange fruits used as a natural yellow dye',
        ],
        bn: [
          'মোমের মতো সাদা ফুল, যা পুরোনো হলে ঘিয়ে-হলুদ হয়ে যায়',
          'পুরু, চকচকে, গাঢ় সবুজ পাতা',
          'খাঁজকাটা কমলা ফল, যা থেকে প্রাকৃতিক হলুদ রং তৈরি হয়',
        ],
      },
    },
    habitat: {
      en: 'Hillside thickets and forest edges; widely grown in gardens',
      bn: 'পাহাড়ের ঢালের ঝোপঝাড় ও বনের কিনারা; বাগানে ব্যাপক চাষ হয়',
    },
    habitats: ['tropical-forest', 'temperate-forest', 'urban-farmland'],
    regions: ['east-asia', 'southeast-asia'],
    distribution: {
      en: 'Native to southern China, Taiwan, southern Japan and Vietnam; cultivated across South Asia and worldwide.',
      bn: 'দক্ষিণ চীন, তাইওয়ান, দক্ষিণ জাপান ও ভিয়েতনামের স্থানীয়; দক্ষিণ এশিয়াসহ সারা বিশ্বে চাষ হয়।',
    },
    climate: { en: 'Warm, humid subtropical climates', bn: 'উষ্ণ ও আর্দ্র উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Photosynthesis; prefers acidic, moist, well-drained soil',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; অম্লীয়, আর্দ্র ও পানি নিষ্কাশিত মাটি পছন্দ করে',
    },
    ecologicalRole: {
      en: 'Its fragrant flowers are pollinated mainly by hawk moths at night.',
      bn: 'সুগন্ধি ফুলের পরাগায়ন মূলত রাতে বাজপাখি-মথের মাধ্যমে হয়।',
    },
    behavior: {
      en: 'Flowers from late spring through the monsoon; scent is strongest in warm, humid evenings.',
      bn: 'বসন্তের শেষ থেকে বর্ষাকাল পর্যন্ত ফোটে; উষ্ণ ও আর্দ্র সন্ধ্যায় সুবাস সবচেয়ে তীব্র হয়।',
    },
    range: {
      native: [
        [25.3, 110.3],
        [26.1, 119.3],
        [24.1, 120.7],
        [31.6, 130.6],
        [21.0, 105.8],
      ],
      introduced: [
        [23.8, 90.4],
        [21.3, -157.8],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; common in cultivation', 'Habitat clearance in parts of its wild range'],
        bn: ['হুমকির মুখে নয়; চাষে সহজলভ্য', 'বুনো এলাকার কিছু অংশে আবাসস্থল উজাড়'],
      },
      initiatives: {
        en: ['Widely cultivated for gardens and perfume', 'Fruit grown commercially in China for dye and traditional medicine'],
        bn: ['বাগান ও সুগন্ধির জন্য ব্যাপক চাষ', 'রং ও প্রচলিত ওষুধের জন্য চীনে বাণিজ্যিকভাবে ফল উৎপাদন'],
      },
    },
    facts: {
      en: [
        'Its fruit, zhi zi, has been used in China for centuries to colour food and cloth yellow.',
        'The flowers are a popular choice for corsages and bridal bouquets.',
      ],
      bn: [
        'চীনে বহু শতাব্দী ধরে এর ফল (চি চি) দিয়ে খাবার ও কাপড় হলুদ রং করা হয়।',
        'বুকে পরার ফুল ও বিয়ের তোড়ায় গন্ধরাজ খুবই জনপ্রিয়।',
      ],
    },
    related: ['ixora', 'arabian-jasmine', 'crape-jasmine'],
  },
  {
    id: 'rangoon-creeper',
    commonName: { en: 'Rangoon Creeper', bn: 'মধুমালতী' },
    scientificName: 'Combretum indicum',
    altNames: {
      en: ['Chinese Honeysuckle', 'Burma Creeper', 'Drunken Sailor'],
      bn: ['মধুমঞ্জরী', 'রেঙ্গুন লতা', 'মধুমালতী লতা'],
    },
    synonyms: ['Quisqualis indica'],
    category: 'flowers',
    wikiTitle: 'Combretum indicum',
    description: {
      en: 'Rangoon creeper is a vigorous woody climber whose drooping clusters of fragrant flowers open white at dusk, then turn pink and finally deep red over the next two days. This colour change gives a single cluster three shades at once. It is a favourite on gates, verandas and fences throughout Bangladesh.',
      bn: 'মধুমালতী একটি তেজি কাষ্ঠল লতা, যার ঝুলন্ত থোকার সুগন্ধি ফুল সন্ধ্যায় সাদা হয়ে ফোটে, তারপর পরের দুই দিনে গোলাপি ও শেষে গাঢ় লাল হয়। এই রং বদলের কারণে একই থোকায় একসঙ্গে তিন রঙের ফুল দেখা যায়। বাংলাদেশে বাড়ির ফটক, বারান্দা ও বেড়ায় এটি খুব জনপ্রিয় লতা।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Myrtales',
      family: 'Combretaceae',
      genus: 'Combretum',
      species: 'C. indicum',
    },
    physical: {
      size: {
        en: 'Climber reaching 2.5–8 m; flower tubes 5–8 cm long',
        bn: '২.৫–৮ মিটার পর্যন্ত বাড়ে; ফুলের নল ৫–৮ সেমি লম্বা',
      },
      weight: {
        en: 'Not applicable — a woody vine',
        bn: 'প্রযোজ্য নয় — এটি একটি কাষ্ঠল লতা',
      },
      lifespan: { en: 'Perennial; lives for decades', bn: 'বহুবর্ষজীবী; কয়েক দশক বাঁচে' },
      features: {
        en: [
          'Long slender flower tubes ending in five spreading petals',
          'Flowers change from white to pink to red',
          'Five-winged dry fruits',
        ],
        bn: [
          'লম্বা সরু নলের মাথায় ছড়ানো পাঁচটি পাপড়ি',
          'ফুলের রং সাদা থেকে গোলাপি, তারপর লাল হয়',
          'পাঁচটি ডানাওয়ালা শুকনো ফল',
        ],
      },
    },
    habitat: {
      en: 'Forest edges, thickets and riverbanks; widely grown on fences and walls',
      bn: 'বনের কিনারা, ঝোপঝাড় ও নদীর পাড়; বেড়া ও দেয়ালে ব্যাপকভাবে লাগানো হয়',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'oceania'],
    distribution: {
      en: 'Native to tropical Asia from India and Bangladesh through Myanmar to Malesia and New Guinea; naturalised throughout the tropics.',
      bn: 'ভারত ও বাংলাদেশ থেকে মিয়ানমার হয়ে মালয় দ্বীপপুঞ্জ ও নিউগিনি পর্যন্ত ক্রান্তীয় এশিয়ার স্থানীয়; এখন বিশ্বের নানা ক্রান্তীয় অঞ্চলে ছড়িয়ে পড়েছে।',
    },
    climate: { en: 'Hot, humid tropical climates', bn: 'গরম ও আর্দ্র ক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Photosynthesis; needs full sun and climbs by twining stems',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; পূর্ণ রোদ চায় এবং কাণ্ড পেঁচিয়ে ওপরে ওঠে',
    },
    ecologicalRole: {
      en: 'White night flowers attract hawk moths; red day flowers attract bees and sunbirds.',
      bn: 'রাতের সাদা ফুল বাজপাখি-মথকে, আর দিনের লাল ফুল মৌমাছি ও মৌটুসিকে আকৃষ্ট করে।',
    },
    behavior: {
      en: 'Flowers mainly from spring to autumn; the colour shift signals pollinators which flowers still hold nectar.',
      bn: 'মূলত বসন্ত থেকে শরৎ পর্যন্ত ফোটে; রং বদলের মাধ্যমে পরাগায়নকারীরা বুঝতে পারে কোন ফুলে এখনো মধু আছে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [16.8, 96.2],
        [13.7, 100.5],
        [3.1, 101.7],
        [-6.2, 106.8],
        [-6.3, 143.9],
      ],
      introduced: [
        [9.0, -79.5],
        [-4.3, 15.3],
        [25.8, -80.2],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; widespread and cultivated', 'Can itself become weedy outside its native range'],
        bn: ['হুমকির মুখে নয়; বিস্তৃত ও চাষে সহজলভ্য', 'আদি এলাকার বাইরে নিজেই আগাছা হয়ে উঠতে পারে'],
      },
      initiatives: {
        en: ['Widely planted as an ornamental climber', 'Grown in medicinal plant collections'],
        bn: ['শোভাবর্ধক লতা হিসেবে ব্যাপক রোপণ', 'ভেষজ উদ্ভিদ সংগ্রহে চাষ'],
      },
    },
    facts: {
      en: [
        'Its seeds were traditionally used against intestinal worms, but they can cause hiccups and nausea — do not self-medicate.',
        'The Latin name Quisqualis means "who? what?", reflecting early botanists\' puzzlement over its changing form.',
      ],
      bn: [
        'লোকজ চিকিৎসায় কৃমিনাশক হিসেবে এর বীজ ব্যবহৃত হতো, তবে তাতে হেঁচকি ও বমিভাব হতে পারে — নিজে নিজে খাওয়া উচিত নয়।',
        'এর পুরোনো লাতিন নাম Quisqualis-এর অর্থ "কে? কী?" — এর বদলে যাওয়া রূপ দেখে প্রথম দিকের উদ্ভিদবিদদের বিভ্রান্তি থেকেই এই নাম।',
      ],
    },
    related: ['chinese-hibiscus', 'ixora', 'arabian-jasmine'],
  },
  {
    id: 'ixora',
    commonName: { en: 'Jungle Geranium', bn: 'রঙ্গন' },
    scientificName: 'Ixora coccinea',
    altNames: {
      en: ['Ixora', 'Flame of the Woods', 'Jungle Flame'],
      bn: ['রঙ্গন ফুল', 'রুক্মিণী', 'লাল রঙ্গন'],
    },
    category: 'flowers',
    wikiTitle: 'Ixora coccinea',
    description: {
      en: 'Jungle geranium is a dense evergreen shrub that produces rounded heads of small scarlet flowers for much of the year. Native to southern India and Sri Lanka, it is one of the most common hedge and border plants in Bangladesh. Children often suck the sweet nectar from the slender flower tubes.',
      bn: 'রঙ্গন একটি ঘন চিরসবুজ গুল্ম, যাতে বছরের বেশির ভাগ সময় ছোট ছোট টকটকে লাল ফুলের গোলাকার থোকা ফোটে। দক্ষিণ ভারত ও শ্রীলঙ্কার স্থানীয় এই গাছ বাংলাদেশে বেড়া ও বাগানের কিনারায় সবচেয়ে বেশি লাগানো গাছগুলোর একটি। শিশুরা প্রায়ই সরু ফুলের নল থেকে মিষ্টি মধু চুষে খায়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Gentianales',
      family: 'Rubiaceae',
      genus: 'Ixora',
      species: 'I. coccinea',
    },
    physical: {
      size: {
        en: 'Shrub 1–2 m tall; flower heads 5–12 cm across',
        bn: '১–২ মিটার উঁচু গুল্ম; ফুলের থোকা ৫–১২ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — small purple-black berries',
        bn: 'প্রযোজ্য নয় — ছোট বেগুনি-কালো ফল',
      },
      lifespan: { en: 'Perennial; lives many years', bn: 'বহুবর্ষজীবী; বহু বছর বাঁচে' },
      features: {
        en: [
          'Dense, rounded clusters of four-petalled scarlet flowers',
          'Leathery oblong leaves held in opposite pairs',
          'Cultivars in orange, pink, yellow and white',
        ],
        bn: [
          'চার পাপড়ির লাল ফুলের ঘন, গোলাকার থোকা',
          'জোড়ায় জোড়ায় মুখোমুখি চামড়ার মতো লম্বাটে পাতা',
          'কমলা, গোলাপি, হলুদ ও সাদা রঙের জাতও আছে',
        ],
      },
    },
    habitat: {
      en: 'Lowland forest edges and scrub; hedges, parks and gardens',
      bn: 'নিচু এলাকার বনের কিনারা ও ঝোপ; বেড়া, পার্ক ও বাগান',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['south-asia'],
    distribution: {
      en: 'Native to southern India and Sri Lanka; planted throughout South and Southeast Asia and the tropics.',
      bn: 'দক্ষিণ ভারত ও শ্রীলঙ্কার স্থানীয়; দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়াসহ সব ক্রান্তীয় দেশে লাগানো হয়।',
    },
    climate: { en: 'Hot, humid tropical climates', bn: 'গরম ও আর্দ্র ক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Photosynthesis; prefers acidic soil and full sun',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; অম্লীয় মাটি ও পূর্ণ রোদ পছন্দ করে',
    },
    ecologicalRole: {
      en: 'An important nectar source for butterflies and sunbirds in towns.',
      bn: 'শহরাঞ্চলে প্রজাপতি ও মৌটুসি পাখির গুরুত্বপূর্ণ মধুর উৎস।',
    },
    behavior: {
      en: 'Flowers most of the year, peaking in the warm, wet season; tolerates heavy pruning.',
      bn: 'বছরের বেশির ভাগ সময় ফোটে, উষ্ণ বর্ষাকালে সবচেয়ে বেশি; জোরালো ছাঁটাই সহ্য করতে পারে।',
    },
    range: {
      native: [
        [8.5, 76.9],
        [10.0, 76.3],
        [12.9, 74.8],
        [6.9, 79.9],
        [7.3, 80.6],
      ],
      introduced: [
        [23.8, 90.4],
        [1.35, 103.8],
        [25.8, -80.2],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; abundant in cultivation', 'Coastal forest clearance in its native range'],
        bn: ['হুমকির মুখে নয়; চাষে প্রচুর পাওয়া যায়', 'আদি এলাকায় উপকূলীয় বন উজাড়'],
      },
      initiatives: {
        en: ['Popular in urban landscaping and butterfly gardens', 'Cultivar breeding in nurseries'],
        bn: ['নগর সৌন্দর্যায়ন ও প্রজাপতি বাগানে জনপ্রিয়', 'নার্সারিতে নতুন জাত উদ্ভাবন'],
      },
    },
    facts: {
      en: [
        'It belongs to the coffee family, Rubiaceae.',
        'Its flowers are widely offered in Hindu worship.',
      ],
      bn: [
        'রঙ্গন কফি পরিবারের (Rubiaceae) সদস্য।',
        'হিন্দু পূজায় রঙ্গন ফুল ব্যাপকভাবে নিবেদন করা হয়।',
      ],
    },
    related: ['gardenia', 'chinese-hibiscus', 'rangoon-creeper'],
  },
  {
    id: 'foxtail-orchid',
    commonName: { en: 'Foxtail Orchid', bn: 'শিয়াললেজা অর্কিড' },
    scientificName: 'Rhynchostylis retusa',
    altNames: {
      en: ['Kopou Phool', 'Fox-tail Orchid'],
      bn: ['কপৌ ফুল', 'ফক্সটেল অর্কিড'],
    },
    category: 'flowers',
    wikiTitle: 'Rhynchostylis retusa',
    description: {
      en: 'The foxtail orchid is an epiphytic orchid whose long, dense, drooping sprays of pink-spotted white flowers resemble a fox\'s tail. It grows wild on tree trunks in the forests of Bangladesh, northeast India and across tropical Asia. In Assam it is called kopou phool and is worn by women during the Bihu festival.',
      bn: 'শিয়াললেজা অর্কিড একটি পরাশ্রয়ী (এপিফাইট) অর্কিড; গোলাপি ছিটযুক্ত সাদা ফুলের লম্বা, ঘন, ঝুলন্ত মঞ্জরি দেখতে শিয়ালের লেজের মতো। বাংলাদেশ, উত্তর-পূর্ব ভারত ও ক্রান্তীয় এশিয়ার বনে গাছের গায়ে এটি প্রাকৃতিকভাবে জন্মায়। আসামে একে কপৌ ফুল বলে; বিহু উৎসবে মেয়েরা খোঁপায় এই ফুল পরে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Asparagales',
      family: 'Orchidaceae',
      genus: 'Rhynchostylis',
      species: 'R. retusa',
    },
    physical: {
      size: {
        en: 'Plant 15–40 cm tall; flower spikes up to about 60 cm long',
        bn: 'গাছ ১৫–৪০ সেমি উঁচু; ফুলের মঞ্জরি প্রায় ৬০ সেমি পর্যন্ত লম্বা',
      },
      weight: {
        en: 'Not applicable — a single spike carries 100 or more small flowers',
        bn: 'প্রযোজ্য নয় — একটি মঞ্জরিতে ১০০ বা তারও বেশি ছোট ফুল থাকে',
      },
      lifespan: { en: 'Perennial; long-lived epiphyte', bn: 'বহুবর্ষজীবী; দীর্ঘজীবী পরাশ্রয়ী উদ্ভিদ' },
      features: {
        en: [
          'Dense, cylindrical, pendulous spikes of white flowers spotted pink-purple',
          'Thick, channelled, strap-like leaves',
          'Thick, silvery aerial roots that cling to bark',
        ],
        bn: [
          'গোলাপি-বেগুনি ছিটযুক্ত সাদা ফুলের ঘন, নলাকার, ঝুলন্ত মঞ্জরি',
          'পুরু, খাঁজওয়ালা, ফিতার মতো পাতা',
          'গাছের বাকল আঁকড়ে থাকা মোটা রুপালি বায়বীয় মূল',
        ],
      },
    },
    habitat: {
      en: 'On tree trunks and branches in tropical and subtropical forests',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় বনে গাছের কাণ্ড ও ডালে',
    },
    habitats: ['tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Widespread from India, Sri Lanka, Nepal and Bangladesh through Southeast Asia to southern China and the Philippines.',
      bn: 'ভারত, শ্রীলঙ্কা, নেপাল ও বাংলাদেশ থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে দক্ষিণ চীন ও ফিলিপাইন পর্যন্ত বিস্তৃত।',
    },
    climate: { en: 'Warm, humid monsoon climates with a dry season', bn: 'শুষ্ক মৌসুমসহ উষ্ণ ও আর্দ্র মৌসুমি জলবায়ু' },
    diet: {
      en: 'Photosynthesis; aerial roots absorb water and minerals from rain and humid air',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; বায়বীয় মূল বৃষ্টি ও আর্দ্র বাতাস থেকে পানি ও খনিজ শোষণ করে',
    },
    ecologicalRole: {
      en: 'Its fragrant flowers are pollinated by bees; it does not harm its host tree.',
      bn: 'সুগন্ধি ফুলের পরাগায়ন করে মৌমাছি; আশ্রয়দাতা গাছের কোনো ক্ষতি করে না।',
    },
    behavior: {
      en: 'Flowers in late spring and early monsoon (April–June), around the Bengali New Year.',
      bn: 'বসন্তের শেষ ও বর্ষার শুরুতে (এপ্রিল–জুন), পহেলা বৈশাখের আশপাশে ফোটে।',
    },
    range: {
      native: [
        [24.3, 91.7],
        [22.6, 92.2],
        [26.1, 91.7],
        [7.3, 80.6],
        [18.8, 98.9],
        [22.0, 100.8],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'decreasing',
      threats: {
        en: ['Over-collection from the wild for sale', 'Deforestation removing host trees'],
        bn: ['বিক্রির জন্য বন থেকে অতিরিক্ত সংগ্রহ', 'বন উজাড়ে আশ্রয়দাতা গাছ হারিয়ে যাওয়া'],
      },
      initiatives: {
        en: ['Listed in CITES Appendix II, like all orchids', 'Tissue-culture propagation to reduce wild collection'],
        bn: ['সব অর্কিডের মতো সাইটিসের পরিশিষ্ট-২-এ তালিকাভুক্ত', 'বুনো সংগ্রহ কমাতে টিস্যু কালচারে চারা উৎপাদন'],
      },
    },
    facts: {
      en: [
        'It is the state flower of Assam and Arunachal Pradesh in India.',
        'A single plant can carry several fragrant spikes at once.',
      ],
      bn: [
        'এটি ভারতের আসাম ও অরুণাচল প্রদেশের রাজ্য ফুল।',
        'একটি গাছে একসঙ্গে কয়েকটি সুগন্ধি মঞ্জরি ফুটতে পারে।',
      ],
    },
    related: ['moth-orchid', 'noble-dendrobium'],
  },
];
