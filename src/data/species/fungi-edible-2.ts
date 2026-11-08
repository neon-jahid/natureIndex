import type { Species } from '@/types';

export const fungiEdible2: Species[] = [
  {
    id: 'golden-chanterelle',
    commonName: { en: 'Golden Chanterelle', bn: 'সোনালি শ্যান্টারেল' },
    scientificName: 'Cantharellus cibarius',
    altNames: {
      en: ['Chanterelle', 'Girolle', 'Pfifferling'],
      bn: ['শ্যান্টারেল', 'জিরোল', 'ফিফারলিং'],
    },
    category: 'fungi',
    wikiTitle: 'Cantharellus cibarius',
    description: {
      en: 'The golden chanterelle is an egg-yolk-yellow, funnel-shaped wild mushroom prized in European cooking for its fruity, apricot-like aroma. It forms partnerships with tree roots and cannot be farmed commercially, so all chanterelles on the market are gathered from forests. Several poisonous mushrooms look similar, so wild mushrooms must never be eaten without expert identification.',
      bn: 'সোনালি শ্যান্টারেল ডিমের কুসুমের মতো হলুদ, ফানেল আকৃতির একটি বুনো মাশরুম; খুবানির মতো ফলের সুগন্ধের জন্য ইউরোপীয় রান্নায় এর বিশেষ কদর। এটি গাছের শিকড়ের সঙ্গে অংশীদারত্বে বাঁচে, তাই বাণিজ্যিকভাবে চাষ করা যায় না — বাজারের সব শ্যান্টারেলই বন থেকে সংগ্রহ করা। কয়েকটি বিষাক্ত মাশরুম দেখতে প্রায় একই রকম, তাই বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনোই বুনো মাশরুম খাওয়া উচিত নয়।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Cantharellales',
      family: 'Cantharellaceae',
      genus: 'Cantharellus',
      species: 'C. cibarius',
    },
    physical: {
      size: {
        en: 'Cap 3–10 cm across, becoming funnel-shaped; stem 2–8 cm tall',
        bn: 'টুপি ৩–১০ সেমি চওড়া, বয়সে ফানেলের মতো হয়; ডাঁটা ২–৮ সেমি লম্বা',
      },
      weight: {
        en: 'Usually 10–60 g per mushroom',
        bn: 'একেকটি মাশরুম সাধারণত ১০–৬০ গ্রাম',
      },
      lifespan: {
        en: 'Fruit bodies can last several weeks; the mycelium lives for decades with its host trees',
        bn: 'মাশরুম কয়েক সপ্তাহ টিকে থাকতে পারে; আশ্রয়দাতা গাছের সঙ্গে মাইসেলিয়াম কয়েক দশক বাঁচে',
      },
      features: {
        en: [
          'Egg-yolk yellow to orange colour throughout',
          'Blunt, forked false gills (ridges) running down the stem, not true blade-like gills',
          'Fruity, apricot-like smell',
        ],
        bn: [
          'পুরো দেহ ডিমের কুসুমের মতো হলুদ থেকে কমলা',
          'আসল পাতলা গিলের বদলে ভোঁতা, শাখাযুক্ত ভাঁজ ডাঁটা বেয়ে নেমে আসে',
          'খুবানির মতো ফলের সুগন্ধ',
        ],
      },
    },
    habitat: {
      en: 'Mossy floors of broadleaf and conifer forests, under oak, beech, birch, spruce and pine',
      bn: 'ওক, বিচ, বার্চ, স্প্রুস ও পাইন গাছের নিচে চওড়া পাতা ও সরলবর্গীয় বনের শ্যাওলাঢাকা মাটি',
    },
    habitats: ['temperate-forest'],
    regions: ['europe'],
    distribution: {
      en: 'Widespread across Europe from Scandinavia to the Mediterranean; similar chanterelles elsewhere are now treated as separate species.',
      bn: 'স্ক্যান্ডিনেভিয়া থেকে ভূমধ্যসাগর পর্যন্ত ইউরোপজুড়ে বিস্তৃত; অন্যান্য মহাদেশের অনুরূপ শ্যান্টারেলকে এখন আলাদা প্রজাতি ধরা হয়।',
    },
    climate: {
      en: 'Temperate to boreal; fruits in summer and autumn after rain',
      bn: 'নাতিশীতোষ্ণ থেকে উত্তরীয় শীতল জলবায়ু; বৃষ্টির পর গ্রীষ্ম ও শরৎকালে গজায়',
    },
    diet: {
      en: 'Ectomycorrhizal — exchanges soil water and minerals for sugars from tree roots',
      bn: 'এক্টোমাইকোরাইজাল — গাছের শিকড়কে মাটির পানি ও খনিজ দেয়, বিনিময়ে শর্করা নেয়',
    },
    ecologicalRole: {
      en: 'A partner fungus that improves the health and nutrient uptake of forest trees.',
      bn: 'অংশীদার ছত্রাক হিসেবে বনের গাছের স্বাস্থ্য ও পুষ্টি গ্রহণ বাড়ায়।',
    },
    behavior: {
      en: 'Appears in the same forest patches year after year; fruit bodies grow slowly and are rarely attacked by insects.',
      bn: 'বছরের পর বছর বনের একই জায়গায় গজায়; মাশরুম ধীরে বাড়ে এবং কদাচিৎ পোকার আক্রমণের শিকার হয়।',
    },
    range: {
      native: [
        [60.0, 15.0],
        [50.0, 10.0],
        [52.0, 20.0],
        [45.0, 5.0],
        [40.0, -4.0],
        [57.0, -4.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Nitrogen pollution harming mycorrhizal fungi', 'Over-harvesting and soil trampling in popular forests', 'Clear-cutting of forests'],
        bn: ['নাইট্রোজেন দূষণে মাইকোরাইজাল ছত্রাকের ক্ষতি', 'জনপ্রিয় বনে অতিরিক্ত সংগ্রহ ও মাটি মাড়ানো', 'বন উজাড় করে কাঠ কাটা'],
      },
      initiatives: {
        en: ['Picking limits in several European countries', 'Long-term monitoring of forest fungi'],
        bn: ['ইউরোপের কয়েকটি দেশে সংগ্রহের সীমা নির্ধারণ', 'বনের ছত্রাকের দীর্ঘমেয়াদি পর্যবেক্ষণ'],
      },
    },
    facts: {
      en: [
        'Chanterelles have never been reliably cultivated, so every one sold is wild-picked.',
        'They are rich in vitamin D compared with most foods.',
        'Lookalikes such as the toxic jack-o’-lantern mushroom (Omphalotus) have true, sharp gills — never eat wild mushrooms without expert identification.',
      ],
      bn: [
        'শ্যান্টারেলের নির্ভরযোগ্য চাষ আজও সম্ভব হয়নি, তাই বিক্রি হওয়া প্রতিটিই বন থেকে তোলা।',
        'অধিকাংশ খাবারের তুলনায় এতে ভিটামিন ডি বেশি থাকে।',
        'বিষাক্ত জ্যাক-ও’-ল্যান্টার্ন (Omphalotus) মাশরুমের মতো সদৃশ প্রজাতির আসল ধারালো গিল থাকে — বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনো বুনো মাশরুম খাবেন না।',
      ],
    },
    related: ['porcini', 'black-morel', 'black-truffle', 'fly-agaric'],
  },
  {
    id: 'porcini',
    commonName: { en: 'Porcini', bn: 'পোরচিনি মাশরুম' },
    scientificName: 'Boletus edulis',
    altNames: {
      en: ['Penny Bun', 'King Bolete', 'Cep', 'Steinpilz'],
      bn: ['পেনি বান', 'রাজকীয় বোলেট', 'সেপ', 'স্টাইনপিলৎস'],
    },
    category: 'fungi',
    wikiTitle: 'Boletus edulis',
    description: {
      en: 'Porcini is a stout, brown-capped wild mushroom with a sponge of pores under the cap instead of gills, celebrated in Italian and French cuisine. It lives in partnership with tree roots, so it is gathered from forests rather than farmed, and it is often sold dried. Some boletes are poisonous or very bitter, so wild mushrooms must never be eaten without expert identification.',
      bn: 'পোরচিনি মোটাসোটা, বাদামি টুপির একটি বুনো মাশরুম; টুপির নিচে গিলের বদলে স্পঞ্জের মতো ছিদ্র থাকে। ইতালীয় ও ফরাসি রান্নায় এর বিশেষ খ্যাতি। এটি গাছের শিকড়ের সঙ্গে অংশীদারত্বে বাঁচে, তাই চাষ নয় — বন থেকেই সংগ্রহ করা হয়, এবং প্রায়ই শুকিয়ে বিক্রি হয়। কিছু বোলেট বিষাক্ত বা খুব তেতো, তাই বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনোই বুনো মাশরুম খাওয়া উচিত নয়।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Boletales',
      family: 'Boletaceae',
      genus: 'Boletus',
      species: 'B. edulis',
    },
    physical: {
      size: {
        en: 'Cap 7–30 cm across; club-shaped stem 8–25 cm tall',
        bn: 'টুপি ৭–৩০ সেমি চওড়া; গদার মতো মোটা ডাঁটা ৮–২৫ সেমি লম্বা',
      },
      weight: {
        en: 'Often 100–500 g; exceptional specimens exceed 3 kg',
        bn: 'প্রায়ই ১০০–৫০০ গ্রাম; ব্যতিক্রমী কিছু মাশরুম ৩ কেজিরও বেশি হয়',
      },
      lifespan: {
        en: 'Fruit body lasts 1–2 weeks; mycelium lives for decades with its trees',
        bn: 'মাশরুম ১–২ সপ্তাহ টেকে; গাছের সঙ্গে মাইসেলিয়াম কয়েক দশক বাঁচে',
      },
      features: {
        en: [
          'Bun-like brown cap, slightly sticky when wet',
          'Pores white, turning yellow-olive with age, not changing colour when bruised',
          'Thick pale stem with a fine white net pattern near the top',
        ],
        bn: [
          'বনরুটির মতো বাদামি টুপি, ভিজলে খানিকটা আঠালো',
          'ছিদ্র প্রথমে সাদা, পরে হলদে-জলপাই রঙের হয়; চাপ দিলে রং বদলায় না',
          'মোটা ফ্যাকাশে ডাঁটার ওপরের দিকে সূক্ষ্ম সাদা জালের নকশা',
        ],
      },
    },
    habitat: {
      en: 'Coniferous and broadleaf forests, with pine, spruce, oak, beech and birch',
      bn: 'পাইন, স্প্রুস, ওক, বিচ ও বার্চ গাছের সরলবর্গীয় ও চওড়া পাতার বন',
    },
    habitats: ['temperate-forest', 'mountain'],
    regions: ['europe', 'north-america', 'east-asia'],
    distribution: {
      en: 'Temperate and boreal forests of Europe, northern Asia and North America; introduced with pine plantations to southern Africa and New Zealand.',
      bn: 'ইউরোপ, উত্তর এশিয়া ও উত্তর আমেরিকার নাতিশীতোষ্ণ ও উত্তরীয় বন; পাইন বাগানের সঙ্গে দক্ষিণ আফ্রিকা ও নিউজিল্যান্ডে প্রবেশ করেছে।',
    },
    climate: {
      en: 'Temperate to boreal; fruits in late summer and autumn after warm rain',
      bn: 'নাতিশীতোষ্ণ থেকে উত্তরীয় শীতল জলবায়ু; উষ্ণ বৃষ্টির পর গ্রীষ্মের শেষ ও শরৎকালে গজায়',
    },
    diet: {
      en: 'Ectomycorrhizal — trades soil nutrients with tree roots for sugars',
      bn: 'এক্টোমাইকোরাইজাল — গাছের শিকড়ের সঙ্গে মাটির পুষ্টির বিনিময়ে শর্করা নেয়',
    },
    ecologicalRole: {
      en: 'Supports forest trees through root partnerships and feeds squirrels, deer, slugs and insects.',
      bn: 'শিকড়ের অংশীদারত্বে বনের গাছকে সহায়তা করে এবং কাঠবিড়ালি, হরিণ, শামুক ও পোকামাকড়ের খাদ্য জোগায়।',
    },
    behavior: {
      en: 'Fruits in flushes after warm rain, often in the same spots each year near its host trees.',
      bn: 'উষ্ণ বৃষ্টির পর দফায় দফায় গজায়, প্রায়ই প্রতি বছর আশ্রয়দাতা গাছের কাছে একই জায়গায়।',
    },
    range: {
      native: [
        [46.0, 11.0],
        [50.0, 15.0],
        [60.0, 25.0],
        [44.0, 2.0],
        [47.0, -121.0],
        [55.0, 83.0],
      ],
      introduced: [
        [-33.9, 18.9],
        [-41.0, 174.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Commercial over-harvesting in some regions', 'Loss of old forests and nitrogen pollution'],
        bn: ['কিছু অঞ্চলে বাণিজ্যিকভাবে অতিরিক্ত সংগ্রহ', 'পুরোনো বন ধ্বংস ও নাইট্রোজেন দূষণ'],
      },
      initiatives: {
        en: ['Collection permits and daily limits in parts of Italy', 'Research on mycorrhizal inoculation of tree seedlings'],
        bn: ['ইতালির কিছু অঞ্চলে সংগ্রহের অনুমতিপত্র ও দৈনিক সীমা', 'চারাগাছে মাইকোরাইজাল ছত্রাক প্রয়োগ নিয়ে গবেষণা'],
      },
    },
    facts: {
      en: [
        '"Porcini" means "piglets" in Italian.',
        'Despite many attempts, it has never been successfully farmed.',
        'Never eat wild mushrooms without expert identification — the very bitter Tylopilus felleus and the poisonous devil’s bolete can be mistaken for porcini.',
      ],
      bn: [
        'ইতালীয় ভাষায় "পোরচিনি" মানে "শূকরছানা"।',
        'বহু চেষ্টার পরেও আজ পর্যন্ত এর সফল চাষ সম্ভব হয়নি।',
        'বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনো বুনো মাশরুম খাবেন না — খুব তেতো Tylopilus felleus ও বিষাক্ত ডেভিলস বোলেটকে পোরচিনি বলে ভুল হতে পারে।',
      ],
    },
    related: ['golden-chanterelle', 'black-truffle', 'fly-agaric'],
  },
  {
    id: 'black-morel',
    commonName: { en: 'Black Morel', bn: 'কালো মোরেল' },
    scientificName: 'Morchella elata',
    altNames: {
      en: ['Morel', 'Morel Mushroom', 'Gucchi'],
      bn: ['মোরেল', 'মোরেল মাশরুম', 'গুচ্ছি'],
    },
    category: 'fungi',
    wikiTitle: 'Morchella elata',
    description: {
      en: 'The black morel is a spring mushroom with a dark, honeycomb-like cap of pits and ridges and a hollow inside. Morels are among the most expensive wild mushrooms; in the Himalayas related species are gathered as "gucchi". Morels are toxic raw and must be cooked thoroughly, and the poisonous false morel (Gyromitra) looks similar — never eat wild mushrooms without expert identification.',
      bn: 'কালো মোরেল বসন্তকালের একটি মাশরুম; এর গাঢ় রঙের টুপি মৌচাকের মতো খাঁজ ও শিরায় ভরা, আর ভেতরটা ফাঁপা। মোরেল সবচেয়ে দামি বুনো মাশরুমগুলোর একটি; হিমালয় অঞ্চলে এর নিকটাত্মীয় প্রজাতি "গুচ্ছি" নামে সংগ্রহ করা হয়। কাঁচা মোরেল বিষাক্ত, তাই ভালোভাবে রান্না করে খেতে হয়; আর বিষাক্ত নকল মোরেল (Gyromitra) দেখতে প্রায় একই রকম — বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনো বুনো মাশরুম খাবেন না।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Ascomycota',
      class: 'Pezizomycetes',
      order: 'Pezizales',
      family: 'Morchellaceae',
      genus: 'Morchella',
      species: 'M. elata',
    },
    physical: {
      size: {
        en: 'Total height 5–15 cm; conical cap 2–5 cm wide',
        bn: 'মোট উচ্চতা ৫–১৫ সেমি; শঙ্কু আকৃতির টুপি ২–৫ সেমি চওড়া',
      },
      weight: {
        en: 'Light because hollow — usually 10–40 g each',
        bn: 'ফাঁপা হওয়ায় হালকা — একেকটি সাধারণত ১০–৪০ গ্রাম',
      },
      lifespan: {
        en: 'Fruit bodies last 1–3 weeks in spring',
        bn: 'বসন্তকালে মাশরুম ১–৩ সপ্তাহ টেকে',
      },
      features: {
        en: [
          'Conical cap with dark, vertically aligned ridges and pits',
          'Completely hollow from cap tip to stem base',
          'Cap attached directly to the stem (unlike false morels)',
        ],
        bn: [
          'শঙ্কু আকৃতির টুপিতে গাঢ় রঙের লম্বালম্বি শিরা ও খাঁজ',
          'টুপির আগা থেকে ডাঁটার গোড়া পর্যন্ত পুরোটা ফাঁপা',
          'টুপি সরাসরি ডাঁটার সঙ্গে জোড়া থাকে (নকল মোরেলের মতো নয়)',
        ],
      },
    },
    habitat: {
      en: 'Coniferous forests, especially burned areas, disturbed ground and wood-chip mulch',
      bn: 'সরলবর্গীয় বন, বিশেষ করে আগুনে পোড়া এলাকা, খোঁড়াখুঁড়ি হওয়া মাটি ও কাঠের কুচির স্তূপ',
    },
    habitats: ['temperate-forest', 'mountain'],
    regions: ['europe'],
    distribution: {
      en: 'Europe, especially mountain conifer forests; closely related black morels occur across North America and Asia, including the Himalayas.',
      bn: 'ইউরোপ, বিশেষ করে পাহাড়ি সরলবর্গীয় বন; ঘনিষ্ঠ আত্মীয় কালো মোরেল উত্তর আমেরিকা ও হিমালয়সহ এশিয়াজুড়ে পাওয়া যায়।',
    },
    climate: {
      en: 'Temperate and montane; fruits in spring as soils warm',
      bn: 'নাতিশীতোষ্ণ ও পাহাড়ি; বসন্তে মাটি উষ্ণ হলে গজায়',
    },
    diet: {
      en: 'Mainly saprotrophic on dead plant matter, possibly with loose links to tree roots',
      bn: 'মূলত মৃত উদ্ভিজ্জ পদার্থে মৃতজীবী, সম্ভবত গাছের শিকড়ের সঙ্গেও আলগা সম্পর্ক থাকে',
    },
    ecologicalRole: {
      en: 'One of the first fungi to recolonise burned forests, helping recycle nutrients after fire.',
      bn: 'আগুনে পোড়া বনে প্রথম দিকে ফিরে আসা ছত্রাকগুলোর একটি; আগুনের পর পুষ্টিচক্র সচল করতে সাহায্য করে।',
    },
    behavior: {
      en: 'Fruits briefly in spring, often in large numbers the year after a forest fire.',
      bn: 'বসন্তে অল্প সময়ের জন্য গজায়; বনে আগুন লাগার পরের বছর প্রায়ই প্রচুর সংখ্যায় দেখা দেয়।',
    },
    range: {
      native: [
        [46.0, 8.0],
        [47.0, 12.0],
        [50.0, 10.0],
        [44.0, 6.0],
        [42.5, 1.5],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Heavy commercial picking in some areas', 'Changes in fire regimes and forest management'],
        bn: ['কিছু এলাকায় ব্যাপক বাণিজ্যিক সংগ্রহ', 'বনে আগুনের ধরন ও বন ব্যবস্থাপনায় পরিবর্তন'],
      },
      initiatives: {
        en: ['Permit systems for morel picking on public forests', 'Research on outdoor morel cultivation in China'],
        bn: ['সরকারি বনে মোরেল সংগ্রহে অনুমতিপত্র ব্যবস্থা', 'চীনে খোলা মাঠে মোরেল চাষ নিয়ে গবেষণা'],
      },
    },
    facts: {
      en: [
        'Morels are sac fungi (Ascomycota), more closely related to truffles than to button mushrooms.',
        'Raw or undercooked morels can cause stomach upsets — always cook them well.',
        'Cut a morel lengthwise: a true morel is completely hollow; false morels are cottony or chambered inside. Still, never eat wild mushrooms without expert identification.',
      ],
      bn: [
        'মোরেল থলি-ছত্রাক (Ascomycota); বাটন মাশরুমের চেয়ে ট্রাফলের সঙ্গে এর আত্মীয়তা বেশি।',
        'কাঁচা বা আধসেদ্ধ মোরেল খেলে পেটের পীড়া হতে পারে — সব সময় ভালোভাবে রান্না করুন।',
        'লম্বালম্বি কাটলে আসল মোরেল পুরোপুরি ফাঁপা; নকল মোরেলের ভেতরে তুলার মতো বা খোপ খোপ থাকে। তবুও বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনো বুনো মাশরুম খাবেন না।',
      ],
    },
    related: ['black-truffle', 'golden-chanterelle', 'porcini'],
  },
  {
    id: 'black-truffle',
    commonName: { en: 'Black Truffle', bn: 'কালো ট্রাফল' },
    scientificName: 'Tuber melanosporum',
    altNames: {
      en: ['Périgord Truffle', 'French Black Truffle', 'Truffle'],
      bn: ['পেরিগর ট্রাফল', 'ফরাসি কালো ট্রাফল', 'ট্রাফল'],
    },
    category: 'fungi',
    wikiTitle: 'Tuber melanosporum',
    description: {
      en: 'The black truffle is an underground fungus that forms a knobbly black lump among the roots of oak and hazel trees in southern Europe. Its powerful aroma makes it one of the most expensive foods in the world. Because it grows hidden in the soil, trained dogs (and traditionally pigs) are used to sniff it out.',
      bn: 'কালো ট্রাফল মাটির নিচে জন্মানো একটি ছত্রাক; দক্ষিণ ইউরোপে ওক ও হ্যাজেল গাছের শিকড়ের ফাঁকে এটি এবড়োখেবড়ো কালো দলার মতো তৈরি হয়। এর তীব্র সুগন্ধের কারণে এটি পৃথিবীর সবচেয়ে দামি খাবারগুলোর একটি। মাটির নিচে লুকানো থাকে বলে প্রশিক্ষিত কুকুর (আর প্রথাগতভাবে শূকর) দিয়ে গন্ধ শুঁকে খুঁজে বের করা হয়।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Ascomycota',
      class: 'Pezizomycetes',
      order: 'Pezizales',
      family: 'Tuberaceae',
      genus: 'Tuber',
      species: 'T. melanosporum',
    },
    physical: {
      size: {
        en: 'Rounded tuber usually 3–8 cm across, occasionally larger',
        bn: 'গোলাকার দলা সাধারণত ৩–৮ সেমি চওড়া, কখনো আরও বড়',
      },
      weight: {
        en: 'Usually 20–100 g; rare specimens exceed 1 kg',
        bn: 'সাধারণত ২০–১০০ গ্রাম; বিরল ক্ষেত্রে ১ কেজিরও বেশি',
      },
      lifespan: {
        en: 'Each truffle takes several months to ripen; productive orchards fruit for decades',
        bn: 'একেকটি ট্রাফল পাকতে কয়েক মাস লাগে; ফলনশীল ট্রাফল-বাগান কয়েক দশক ফলন দেয়',
      },
      features: {
        en: [
          'Black, warty outer skin made of small pyramid-shaped bumps',
          'Dark purplish-black interior marbled with fine white veins',
          'Intense earthy, musky aroma when ripe',
        ],
        bn: [
          'ছোট ছোট পিরামিডের মতো উঁচু দানায় ভরা কালো, আঁচিলযুক্ত বাইরের আবরণ',
          'ভেতরটা গাঢ় বেগুনি-কালো, তাতে সূক্ষ্ম সাদা শিরার মার্বেল নকশা',
          'পাকলে তীব্র মাটির মতো, কস্তুরী-সদৃশ গন্ধ',
        ],
      },
    },
    habitat: {
      en: 'Chalky, well-drained limestone soils beneath oak and hazel in open woodland and orchards',
      bn: 'খোলা বনভূমি ও বাগানে ওক ও হ্যাজেল গাছের নিচে চুনাপাথরের, পানি সহজে নেমে যায় এমন মাটি',
    },
    habitats: ['temperate-forest', 'urban-farmland'],
    regions: ['europe', 'oceania'],
    distribution: {
      en: 'Native to southern France, northern Spain and Italy; now grown in truffle orchards in Australia, New Zealand, Chile and North America.',
      bn: 'দক্ষিণ ফ্রান্স, উত্তর স্পেন ও ইতালির স্থানীয় প্রজাতি; এখন অস্ট্রেলিয়া, নিউজিল্যান্ড, চিলি ও উত্তর আমেরিকায় ট্রাফল-বাগানে চাষ হয়।',
    },
    climate: {
      en: 'Mediterranean, with warm summers, summer storms and cold winters',
      bn: 'ভূমধ্যসাগরীয় জলবায়ু — উষ্ণ গ্রীষ্ম, গ্রীষ্মকালীন ঝড়বৃষ্টি ও ঠান্ডা শীত',
    },
    diet: {
      en: 'Ectomycorrhizal with oak and hazel roots, receiving sugars in exchange for minerals and water',
      bn: 'ওক ও হ্যাজেলের শিকড়ের সঙ্গে এক্টোমাইকোরাইজাল সম্পর্ক; খনিজ ও পানির বিনিময়ে শর্করা পায়',
    },
    ecologicalRole: {
      en: 'Supports host trees, and its aroma attracts animals such as wild boar that dig it up and spread its spores.',
      bn: 'আশ্রয়দাতা গাছকে সহায়তা করে; এর গন্ধে বুনো শূকরের মতো প্রাণী আকৃষ্ট হয়ে মাটি খুঁড়ে খায় এবং রেণু ছড়িয়ে দেয়।',
    },
    behavior: {
      en: 'Ripens underground in winter; it often kills the grass around host trees, leaving a bare "brûlé" (burnt) patch.',
      bn: 'শীতকালে মাটির নিচে পাকে; প্রায়ই আশ্রয়দাতা গাছের চারপাশের ঘাস মেরে ফেলে, ফলে "ব্রুলে" (পোড়া) নামে খালি জায়গা তৈরি হয়।',
    },
    range: {
      native: [
        [44.3, 5.0],
        [44.8, 1.0],
        [41.5, -0.5],
        [40.5, -1.5],
        [43.0, 12.5],
      ],
      introduced: [
        [-34.2, 116.1],
        [-43.5, 172.6],
        [-37.5, -72.5],
        [36.0, -79.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Abandonment of traditional woodland and grazing', 'Hotter, drier summers from climate change', 'Fraud with cheaper Asian truffles'],
        bn: ['প্রথাগত বনভূমি ও চারণভূমি পরিত্যক্ত হওয়া', 'জলবায়ু পরিবর্তনে আরও গরম ও শুষ্ক গ্রীষ্ম', 'সস্তা এশীয় ট্রাফল মিশিয়ে প্রতারণা'],
      },
      initiatives: {
        en: ['Planting of truffle orchards with inoculated oak and hazel seedlings', 'Regulated truffle seasons and harvesting rules in France and Spain'],
        bn: ['ছত্রাক-যুক্ত ওক ও হ্যাজেল চারা দিয়ে ট্রাফল-বাগান তৈরি', 'ফ্রান্স ও স্পেনে নিয়ন্ত্রিত ট্রাফল মৌসুম ও সংগ্রহের নিয়ম'],
      },
    },
    facts: {
      en: [
        'Spain is now one of the largest producers of black truffles, mostly from planted orchards.',
        'Dogs are preferred over pigs for hunting truffles, because pigs tend to eat them.',
        'Never eat any wild underground fungus without expert identification — some false truffles are poisonous.',
      ],
      bn: [
        'স্পেন এখন কালো ট্রাফলের অন্যতম বৃহৎ উৎপাদক, যার বেশিরভাগই আসে চাষ করা বাগান থেকে।',
        'ট্রাফল খুঁজতে শূকরের চেয়ে কুকুর বেশি পছন্দ করা হয়, কারণ শূকর ট্রাফল খেয়ে ফেলতে চায়।',
        'বিশেষজ্ঞের শনাক্তকরণ ছাড়া মাটির নিচের কোনো বুনো ছত্রাক কখনো খাবেন না — কিছু নকল ট্রাফল বিষাক্ত।',
      ],
    },
    related: ['black-morel', 'porcini', 'golden-chanterelle'],
  },
  {
    id: 'cordyceps-militaris',
    commonName: { en: 'Cordyceps Militaris', bn: 'কর্ডিসেপস মিলিটারিস' },
    scientificName: 'Cordyceps militaris',
    altNames: {
      en: ['Scarlet Caterpillar Club', 'Orange Cordyceps', 'Cordyceps'],
      bn: ['লাল শুঁয়োপোকা-গদা ছত্রাক', 'কমলা কর্ডিসেপস', 'কর্ডিসেপস'],
    },
    category: 'fungi',
    wikiTitle: 'Cordyceps militaris',
    description: {
      en: 'Cordyceps militaris is a parasitic fungus that infects buried moth pupae and grows bright orange club-shaped fruit bodies out of the dead insect. It is now cultivated on grain and silkworm pupae as a cheaper alternative to the rare Himalayan caterpillar fungus, and is sold as a dried "superfood" and supplement. Its traditional uses are not well proven in clinical trials; consult a doctor before use, especially if taking other medicines.',
      bn: 'কর্ডিসেপস মিলিটারিস একটি পরজীবী ছত্রাক, যা মাটিতে থাকা মথের পিউপাকে আক্রমণ করে এবং মৃত পোকার দেহ থেকে উজ্জ্বল কমলা গদার মতো মাশরুম বের করে। দুর্লভ হিমালয়ের "ইয়ারসাগুম্বা" ছত্রাকের সস্তা বিকল্প হিসেবে এখন শস্যদানা ও রেশমপোকার পিউপায় এর চাষ হয় এবং শুকনো "সুপারফুড" ও সাপ্লিমেন্ট হিসেবে বিক্রি হয়। এর প্রথাগত ব্যবহার ক্লিনিক্যাল পরীক্ষায় ভালোভাবে প্রমাণিত নয়; ব্যবহারের আগে, বিশেষত অন্য ওষুধ খেলে, চিকিৎসকের পরামর্শ নিন।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Ascomycota',
      class: 'Sordariomycetes',
      order: 'Hypocreales',
      family: 'Cordycipitaceae',
      genus: 'Cordyceps',
      species: 'C. militaris',
    },
    physical: {
      size: {
        en: 'Club-shaped fruit bodies 2–8 cm tall and 3–6 mm thick',
        bn: 'গদার মতো মাশরুম ২–৮ সেমি লম্বা ও ৩–৬ মিমি মোটা',
      },
      weight: {
        en: 'Under 1 g each when fresh',
        bn: 'তাজা অবস্থায় একেকটি ১ গ্রামেরও কম',
      },
      lifespan: {
        en: 'Fruit bodies last a few weeks; cultivated crops take about 2 months',
        bn: 'মাশরুম কয়েক সপ্তাহ টেকে; চাষে প্রায় ২ মাসে ফসল ওঠে',
      },
      features: {
        en: [
          'Bright orange to scarlet club-shaped fruit bodies',
          'Upper part rough with tiny embedded spore-producing flasks',
          'In the wild, grows from a buried insect pupa',
        ],
        bn: [
          'উজ্জ্বল কমলা থেকে টকটকে লাল গদার মতো মাশরুম',
          'ওপরের অংশ খসখসে, ভেতরে রেণু তৈরির ক্ষুদ্র কলসির মতো গঠন',
          'প্রকৃতিতে মাটিতে পোঁতা পোকার পিউপা থেকে গজায়',
        ],
      },
    },
    habitat: {
      en: 'Forest soils and leaf litter where moth pupae overwinter; cultivated indoors on rice and other grains',
      bn: 'বনের মাটি ও ঝরা পাতার স্তর, যেখানে মথের পিউপা শীত কাটায়; ঘরের ভেতরে চাল ও অন্যান্য শস্যে চাষ হয়',
    },
    habitats: ['temperate-forest', 'urban-farmland'],
    regions: ['europe', 'north-america', 'east-asia', 'south-asia'],
    distribution: {
      en: 'Widespread in temperate forests of the Northern Hemisphere; cultivated mainly in China and Korea, and now also on a small scale in Bangladesh.',
      bn: 'উত্তর গোলার্ধের নাতিশীতোষ্ণ বনে বিস্তৃত; মূলত চীন ও কোরিয়ায় চাষ হয়, এখন বাংলাদেশেও ছোট পরিসরে চাষ শুরু হয়েছে।',
    },
    climate: {
      en: 'Temperate and humid; cultivated at about 18–22 °C with light',
      bn: 'নাতিশীতোষ্ণ ও আর্দ্র; আলোসহ প্রায় ১৮–২২ ডিগ্রি সেলসিয়াসে চাষ হয়',
    },
    diet: {
      en: 'Parasitic on insects — it infects and consumes moth and butterfly pupae and larvae',
      bn: 'পোকামাকড়ের পরজীবী — মথ ও প্রজাপতির পিউপা ও লার্ভা সংক্রমিত করে খেয়ে ফেলে',
    },
    ecologicalRole: {
      en: 'A natural enemy of moths that helps keep insect numbers in check.',
      bn: 'মথের প্রাকৃতিক শত্রু হিসেবে পোকামাকড়ের সংখ্যা নিয়ন্ত্রণে রাখতে সাহায্য করে।',
    },
    behavior: {
      en: 'Spores infect pupae in the soil; the fungus fills the insect’s body, then sends fruit bodies up to the surface in summer and autumn.',
      bn: 'মাটিতে থাকা পিউপায় রেণু সংক্রমণ ঘটায়; ছত্রাক পোকার পুরো দেহ দখল করে, পরে গ্রীষ্ম ও শরৎকালে মাটির ওপরে মাশরুম পাঠায়।',
    },
    range: {
      native: [
        [50.0, 10.0],
        [60.0, 15.0],
        [45.0, -75.0],
        [43.0, 126.0],
        [36.0, 138.0],
      ],
      introduced: [[23.85, 90.26]],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Loss of forest habitat and insect hosts', 'Few threats overall — widely cultivated'],
        bn: ['বনের আবাসস্থল ও আশ্রয়দাতা পোকামাকড় কমে যাওয়া', 'সামগ্রিকভাবে তেমন হুমকি নেই — ব্যাপকভাবে চাষকৃত'],
      },
      initiatives: {
        en: ['Cultivation reduces collecting pressure on the endangered Himalayan caterpillar fungus', 'Quality testing of cordycepin content in supplements'],
        bn: ['এর চাষ দুর্লভ হিমালয়ের শুঁয়োপোকা-ছত্রাক সংগ্রহের চাপ কমায়', 'সাপ্লিমেন্টে কর্ডিসেপিনের মাত্রা যাচাই'],
      },
    },
    facts: {
      en: [
        'It produces cordycepin, a compound studied for possible medical uses.',
        'Unlike the Himalayan caterpillar fungus, it can be grown without any insects.',
        'Never eat wild fungi without expert identification, and buy supplements only from trusted sources.',
      ],
      bn: [
        'এটি কর্ডিসেপিন নামের একটি যৌগ তৈরি করে, যার সম্ভাব্য চিকিৎসা-ব্যবহার নিয়ে গবেষণা চলছে।',
        'হিমালয়ের শুঁয়োপোকা-ছত্রাকের উল্টো, এটি কোনো পোকা ছাড়াই চাষ করা যায়।',
        'বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনো বুনো ছত্রাক খাবেন না, আর সাপ্লিমেন্ট কিনুন কেবল বিশ্বস্ত উৎস থেকে।',
      ],
    },
    related: ['zombie-ant-fungus', 'reishi', 'lions-mane'],
  },
  {
    id: 'bakers-yeast',
    commonName: { en: "Baker's Yeast", bn: 'ইস্ট' },
    scientificName: 'Saccharomyces cerevisiae',
    altNames: {
      en: ["Brewer's Yeast", 'Yeast', 'Budding Yeast'],
      bn: ['খামির', 'বেকারি ইস্ট', 'মুকুলোদ্গমী ইস্ট'],
    },
    category: 'fungi',
    wikiTitle: 'Saccharomyces cerevisiae',
    description: {
      en: "Baker's yeast is a single-celled fungus that ferments sugar into carbon dioxide and alcohol — the gas makes bread rise and the alcohol is the basis of brewing. It has been used by people for thousands of years and is one of the most important model organisms in biology. In Bangladesh it is used in bakeries for bread, buns and cakes.",
      bn: 'ইস্ট বা খামির এককোষী একটি ছত্রাক, যা চিনিকে গাঁজিয়ে কার্বন ডাই-অক্সাইড ও অ্যালকোহল তৈরি করে — এই গ্যাসেই পাউরুটি ফুলে ওঠে। হাজার হাজার বছর ধরে মানুষ এটি ব্যবহার করছে এবং জীববিজ্ঞান গবেষণায় এটি সবচেয়ে গুরুত্বপূর্ণ মডেল জীবগুলোর একটি। বাংলাদেশে বেকারিতে পাউরুটি, বনরুটি ও কেক তৈরিতে এটি ব্যবহৃত হয়।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Ascomycota',
      class: 'Saccharomycetes',
      order: 'Saccharomycetales',
      family: 'Saccharomycetaceae',
      genus: 'Saccharomyces',
      species: 'S. cerevisiae',
    },
    physical: {
      size: {
        en: 'Microscopic oval cells about 5–10 micrometres across',
        bn: 'আণুবীক্ষণিক ডিম্বাকার কোষ, প্রায় ৫–১০ মাইক্রোমিটার চওড়া',
      },
      weight: {
        en: 'Not applicable — a single cell weighs only picograms; billions fit in a gram of dried yeast',
        bn: 'প্রযোজ্য নয় — একটি কোষের ওজন মাত্র কয়েক পিকোগ্রাম; এক গ্রাম শুকনো ইস্টে কোটি কোটি কোষ থাকে',
      },
      lifespan: {
        en: 'Each cell can bud about 20–30 times before dying; a colony can be kept alive indefinitely',
        bn: 'মারা যাওয়ার আগে একটি কোষ প্রায় ২০–৩০ বার মুকুল তৈরি করতে পারে; উপনিবেশ অনির্দিষ্টকাল বাঁচিয়ে রাখা যায়',
      },
      features: {
        en: [
          'Single round to oval cells, visible only under a microscope',
          'Reproduces by budding — a small daughter cell grows from the parent',
          'Can live with or without oxygen',
        ],
        bn: [
          'এককোষী গোল থেকে ডিম্বাকার কোষ, কেবল অণুবীক্ষণ যন্ত্রে দেখা যায়',
          'মুকুলোদ্গমের মাধ্যমে বংশবৃদ্ধি — মাতৃকোষ থেকে ছোট অপত্যকোষ গজায়',
          'অক্সিজেন থাকুক বা না থাকুক, দুই অবস্থাতেই বাঁচতে পারে',
        ],
      },
    },
    habitat: {
      en: 'Sugary surfaces such as ripe fruit, flower nectar and tree bark; bakeries, breweries and laboratories',
      bn: 'পাকা ফল, ফুলের মধু ও গাছের বাকলের মতো চিনিযুক্ত পৃষ্ঠ; বেকারি, ব্রুয়ারি ও গবেষণাগার',
    },
    habitats: ['temperate-forest', 'urban-farmland'],
    regions: ['east-asia', 'europe', 'south-asia', 'north-america'],
    distribution: {
      en: 'Thought to originate in East Asia, where wild strains live on tree bark; now spread worldwide with human food and drink.',
      bn: 'ধারণা করা হয় এর উৎপত্তি পূর্ব এশিয়ায়, যেখানে গাছের বাকলে বুনো জাত বাস করে; এখন মানুষের খাদ্য ও পানীয়ের মাধ্যমে সারা বিশ্বে ছড়িয়ে পড়েছে।',
    },
    climate: {
      en: 'Grows best at about 30–35 °C; killed above about 50 °C',
      bn: 'প্রায় ৩০–৩৫ ডিগ্রি সেলসিয়াসে সবচেয়ে ভালো বাড়ে; প্রায় ৫০ ডিগ্রির ওপরে মারা যায়',
    },
    diet: {
      en: 'Heterotrophic — it feeds on sugars, fermenting them to ethanol and carbon dioxide',
      bn: 'পরভোজী — চিনি খেয়ে বেঁচে থাকে এবং তা গাঁজিয়ে ইথানল ও কার্বন ডাই-অক্সাইড তৈরি করে',
    },
    ecologicalRole: {
      en: 'Ferments fruit sugars in nature and is spread between plants by insects such as wasps.',
      bn: 'প্রকৃতিতে ফলের চিনি গাঁজায় এবং বোলতার মতো পোকার মাধ্যমে এক গাছ থেকে আরেক গাছে ছড়ায়।',
    },
    behavior: {
      en: 'Multiplies by budding every 1.5–2 hours in good conditions, and forms tough spores when starved.',
      bn: 'অনুকূল অবস্থায় প্রতি ১.৫–২ ঘণ্টায় মুকুলোদ্গমে সংখ্যা বাড়ায়; খাবারের অভাবে শক্ত রেণু তৈরি করে।',
    },
    range: {
      native: [
        [31.0, 112.0],
        [34.0, 108.0],
        [25.0, 102.0],
        [24.0, 121.0],
      ],
      introduced: [
        [48.8, 2.3],
        [23.8, 90.4],
        [40.7, -74.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['No significant threats — abundant worldwide', 'Loss of wild genetic diversity in old forests of China'],
        bn: ['উল্লেখযোগ্য কোনো হুমকি নেই — সারা বিশ্বে প্রচুর', 'চীনের পুরোনো বনে বুনো জিনগত বৈচিত্র্য হারানো'],
      },
      initiatives: {
        en: ['Culture collections preserving thousands of yeast strains', 'Genome projects mapping wild and domestic strains'],
        bn: ['হাজার হাজার ইস্ট জাত সংরক্ষণকারী কালচার সংগ্রহশালা', 'বুনো ও গৃহপালিত জাতের জিনোম মানচিত্র তৈরির প্রকল্প'],
      },
    },
    facts: {
      en: [
        'In 1996 it became the first eukaryote — a cell with a nucleus — to have its whole genome sequenced.',
        'Many human genes can replace their yeast equivalents, making it a key model for medical research.',
        'It is used to make insulin and some vaccines through genetic engineering.',
      ],
      bn: [
        '১৯৯৬ সালে এটি প্রথম ইউক্যারিওট — নিউক্লিয়াসযুক্ত কোষের জীব — যার পুরো জিনোম পাঠ করা হয়।',
        'মানুষের অনেক জিন ইস্টের সমতুল্য জিনের জায়গায় কাজ করতে পারে, তাই চিকিৎসা গবেষণায় এটি গুরুত্বপূর্ণ মডেল।',
        'জিন প্রকৌশলের মাধ্যমে ইনসুলিন ও কিছু টিকা তৈরিতে এটি ব্যবহৃত হয়।',
      ],
    },
    related: ['penicillium-chrysogenum', 'black-morel', 'black-truffle'],
  },
  {
    id: 'penicillium-chrysogenum',
    commonName: { en: 'Penicillin Mould', bn: 'পেনিসিলিয়াম ছত্রাক' },
    scientificName: 'Penicillium chrysogenum',
    altNames: {
      en: ['Penicillium', 'Penicillium notatum', 'Blue-green Mould'],
      bn: ['পেনিসিলিয়াম', 'পেনিসিলিয়াম নোটাটাম', 'নীলচে-সবুজ ছাতা'],
    },
    synonyms: ['Penicillium notatum'],
    category: 'fungi',
    wikiTitle: 'Penicillium chrysogenum',
    description: {
      en: 'Penicillium chrysogenum is a common blue-green mould found on damp walls, bread and soil, and the industrial source of the antibiotic penicillin. Penicillin from a related Penicillium mould was discovered by Alexander Fleming in 1928, and high-yield strains of this species later made mass production possible, saving millions of lives. Mouldy food should not be eaten, and indoor mould can trigger allergies and asthma.',
      bn: 'পেনিসিলিয়াম ক্রাইসোজেনাম একটি সাধারণ নীলচে-সবুজ ছাতা, যা স্যাঁতসেঁতে দেয়াল, পাউরুটি ও মাটিতে জন্মায়; শিল্পক্ষেত্রে অ্যান্টিবায়োটিক পেনিসিলিনের মূল উৎস এটি। ১৯২৮ সালে আলেকজান্ডার ফ্লেমিং একটি পেনিসিলিয়াম ছাতা থেকে পেনিসিলিন আবিষ্কার করেন, আর পরে এই প্রজাতির উচ্চফলনশীল জাতের কল্যাণেই ব্যাপক উৎপাদন সম্ভব হয় — যা লাখ লাখ প্রাণ বাঁচিয়েছে। ছাতা পড়া খাবার খাওয়া উচিত নয়, আর ঘরের ছাতা অ্যালার্জি ও হাঁপানির কারণ হতে পারে।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Ascomycota',
      class: 'Eurotiomycetes',
      order: 'Eurotiales',
      family: 'Aspergillaceae',
      genus: 'Penicillium',
      species: 'P. chrysogenum',
    },
    physical: {
      size: {
        en: 'Microscopic threads; colonies grow to a few centimetres across',
        bn: 'আণুবীক্ষণিক সুতার মতো হাইফা; উপনিবেশ কয়েক সেন্টিমিটার পর্যন্ত চওড়া হয়',
      },
      weight: {
        en: 'Not applicable — a microscopic mould',
        bn: 'প্রযোজ্য নয় — এটি আণুবীক্ষণিক ছাতা',
      },
      lifespan: {
        en: 'Colonies grow for days to weeks; spores can survive dormant for years',
        bn: 'উপনিবেশ কয়েক দিন থেকে কয়েক সপ্তাহ বাড়ে; রেণু বহু বছর সুপ্ত অবস্থায় টিকে থাকতে পারে',
      },
      features: {
        en: [
          'Velvety blue-green colonies, often with yellow droplets on top',
          'Brush-like spore-bearing structures (penicillus, Latin for "little brush")',
          'Produces masses of tiny airborne spores',
        ],
        bn: [
          'মখমলের মতো নীলচে-সবুজ উপনিবেশ, ওপরে প্রায়ই হলুদ ফোঁটা',
          'রেণু বহনকারী তুলির মতো গঠন (লাতিন "penicillus" অর্থ ছোট তুলি)',
          'বাতাসে ভাসা অসংখ্য ক্ষুদ্র রেণু তৈরি করে',
        ],
      },
    },
    habitat: {
      en: 'Soil, decaying food, damp buildings and indoor air worldwide; grown in steel fermentation tanks in industry',
      bn: 'সারা বিশ্বে মাটি, পচা খাবার, স্যাঁতসেঁতে ভবন ও ঘরের বাতাস; শিল্পক্ষেত্রে ইস্পাতের গাঁজন ট্যাংকে চাষ হয়',
    },
    habitats: ['urban-farmland', 'temperate-forest'],
    regions: ['europe', 'north-america', 'south-asia', 'east-asia', 'oceania'],
    distribution: {
      en: 'Cosmopolitan — found on every continent, especially in temperate and subtropical regions and indoors.',
      bn: 'সর্বব্যাপী — প্রতিটি মহাদেশে পাওয়া যায়, বিশেষ করে নাতিশীতোষ্ণ ও উপক্রান্তীয় অঞ্চলে এবং ঘরের ভেতরে।',
    },
    climate: {
      en: 'Tolerates a wide range; grows best around 20–25 °C in damp conditions',
      bn: 'নানা রকম পরিবেশ সহ্য করে; স্যাঁতসেঁতে অবস্থায় প্রায় ২০–২৫ ডিগ্রি সেলসিয়াসে ভালো বাড়ে',
    },
    diet: {
      en: 'Saprotrophic — it digests sugars and starches in decaying food and organic matter',
      bn: 'মৃতজীবী — পচা খাবার ও জৈব পদার্থের চিনি ও শ্বেতসার হজম করে',
    },
    ecologicalRole: {
      en: 'A decomposer whose penicillin suppresses competing bacteria in its patch.',
      bn: 'বিয়োজক হিসেবে কাজ করে; এর পেনিসিলিন আশপাশের প্রতিদ্বন্দ্বী ব্যাকটেরিয়া দমন করে।',
    },
    behavior: {
      en: 'Spreads by airborne spores that settle on any damp surface and germinate within a day.',
      bn: 'বাতাসে ভাসা রেণুর মাধ্যমে ছড়ায়; যেকোনো স্যাঁতসেঁতে পৃষ্ঠে পড়ে এক দিনের মধ্যেই অঙ্কুরিত হয়।',
    },
    range: {
      native: [
        [51.5, -0.17],
        [40.7, -89.6],
        [48.8, 2.3],
        [23.8, 90.4],
        [35.7, 139.7],
        [-33.9, 151.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['No threats — one of the most common moulds on Earth', 'Its usefulness is threatened by bacteria evolving penicillin resistance'],
        bn: ['কোনো হুমকি নেই — পৃথিবীর সবচেয়ে সাধারণ ছাতাগুলোর একটি', 'ব্যাকটেরিয়ার পেনিসিলিন-প্রতিরোধী হয়ে ওঠায় এর উপযোগিতা কমছে'],
      },
      initiatives: {
        en: ['Fleming’s original culture is preserved in national culture collections', 'Antibiotic stewardship campaigns against misuse of penicillin'],
        bn: ['ফ্লেমিংয়ের মূল কালচার জাতীয় কালচার সংগ্রহশালায় সংরক্ষিত', 'পেনিসিলিনের অপব্যবহার রোধে অ্যান্টিবায়োটিক সচেতনতা কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'A high-yield strain used for mass production in the 1940s came from a mouldy cantaloupe melon in Peoria, Illinois.',
        'Fleming’s original mould is now classified as the closely related Penicillium rubens.',
        'Never take antibiotics without a doctor’s prescription, and finish the full course.',
      ],
      bn: [
        '১৯৪০-এর দশকে ব্যাপক উৎপাদনে ব্যবহৃত উচ্চফলনশীল একটি জাত পাওয়া গিয়েছিল যুক্তরাষ্ট্রের ইলিনয়ের পিওরিয়া শহরের একটি ছাতা পড়া ক্যান্টালুপ তরমুজ থেকে।',
        'ফ্লেমিংয়ের মূল ছাতাটিকে এখন নিকটাত্মীয় Penicillium rubens প্রজাতি হিসেবে শ্রেণিবদ্ধ করা হয়।',
        'চিকিৎসকের ব্যবস্থাপত্র ছাড়া কখনো অ্যান্টিবায়োটিক খাবেন না, আর পুরো কোর্স শেষ করুন।',
      ],
    },
    related: ['bakers-yeast', 'reishi', 'cordyceps-militaris'],
  },
];
