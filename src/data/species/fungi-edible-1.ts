import type { Species } from '@/types';

export const fungiEdible1: Species[] = [
  {
    id: 'button-mushroom',
    commonName: { en: 'Button Mushroom', bn: 'বাটন মাশরুম' },
    scientificName: 'Agaricus bisporus',
    altNames: {
      en: ['White Mushroom', 'Champignon', 'Cremini', 'Portobello', 'Common Mushroom'],
      bn: ['সাদা মাশরুম', 'শ্যাম্পিনিয়ন', 'ক্রিমিনি', 'পোর্টোবেলো', 'সাধারণ মাশরুম'],
    },
    synonyms: ['Agaricus brunnescens', 'Psalliota hortensis'],
    category: 'fungi',
    wikiTitle: 'Agaricus bisporus',
    description: {
      en: 'The button mushroom is the most widely eaten mushroom in the world; white button, brown cremini and large portobello mushrooms are all the same species picked at different stages. It is grown on composted straw and manure in dark, climate-controlled rooms. In Bangladesh it is grown on a small scale in the cool winter months, as it needs lower temperatures than oyster or straw mushrooms.',
      bn: 'বাটন মাশরুম পৃথিবীতে সবচেয়ে বেশি খাওয়া মাশরুম; সাদা বাটন, বাদামি ক্রিমিনি আর বড় পোর্টোবেলো — এগুলো আসলে একই প্রজাতি, শুধু ভিন্ন ভিন্ন বয়সে তোলা হয়। খড় ও গোবরের পচানো কম্পোস্টে, অন্ধকার ও নিয়ন্ত্রিত তাপমাত্রার ঘরে এর চাষ হয়। ঝিনুক বা খড় মাশরুমের চেয়ে এর জন্য কম তাপমাত্রা লাগে, তাই বাংলাদেশে শীতকালে অল্প পরিসরে এর চাষ হয়।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Agaricaceae',
      genus: 'Agaricus',
      species: 'A. bisporus',
    },
    physical: {
      size: {
        en: 'Cap 3–10 cm across (portobellos up to 15 cm); stem 2–6 cm tall',
        bn: 'টুপি ৩–১০ সেমি চওড়া (পোর্টোবেলো ১৫ সেমি পর্যন্ত); ডাঁটা ২–৬ সেমি লম্বা',
      },
      weight: {
        en: 'About 10–30 g per button; a large portobello can exceed 100 g',
        bn: 'একেকটি বাটন প্রায় ১০–৩০ গ্রাম; বড় পোর্টোবেলো ১০০ গ্রামেরও বেশি হতে পারে',
      },
      lifespan: {
        en: 'Mushrooms are harvested 3–5 weeks after spawning; each fruit body lasts only a few days',
        bn: 'বীজ (স্পন) দেওয়ার ৩–৫ সপ্তাহ পর মাশরুম তোলা হয়; প্রতিটি মাশরুম মাত্র কয়েক দিন টেকে',
      },
      features: {
        en: [
          'Smooth white to light-brown rounded cap',
          'Gills pink when young, turning chocolate-brown with age — never white',
          'A thin ring (partial veil) on the stem',
        ],
        bn: [
          'মসৃণ, গোলাকার সাদা থেকে হালকা বাদামি টুপি',
          'গিল কচি অবস্থায় গোলাপি, বয়স বাড়লে চকলেট-বাদামি হয় — কখনো সাদা থাকে না',
          'ডাঁটায় একটি পাতলা আংটি থাকে',
        ],
      },
    },
    habitat: {
      en: 'Wild in grasslands, compost and manured soil; farmed indoors on composted straw and manure',
      bn: 'প্রকৃতিতে তৃণভূমি, কম্পোস্ট ও সার দেওয়া মাটিতে জন্মায়; ঘরের ভেতরে পচানো খড় ও গোবরের কম্পোস্টে চাষ হয়',
    },
    habitats: ['grassland', 'urban-farmland'],
    regions: ['europe', 'north-america', 'east-asia', 'south-asia'],
    distribution: {
      en: 'Native to grasslands of Europe and North America; cultivated worldwide, with China the largest producer.',
      bn: 'ইউরোপ ও উত্তর আমেরিকার তৃণভূমির স্থানীয় প্রজাতি; সারা বিশ্বে এর চাষ হয়, সবচেয়ে বেশি উৎপাদন করে চীন।',
    },
    climate: {
      en: 'Cool and humid; fruits best at about 15–18 °C',
      bn: 'শীতল ও আর্দ্র পরিবেশ; প্রায় ১৫–১৮ ডিগ্রি সেলসিয়াসে সবচেয়ে ভালো ফলন দেয়',
    },
    diet: {
      en: 'Saprotrophic — it decomposes partly rotted plant matter and manure in compost',
      bn: 'মৃতজীবী — কম্পোস্টের আধপচা উদ্ভিজ্জ পদার্থ ও গোবর পচিয়ে পুষ্টি নেয়',
    },
    ecologicalRole: {
      en: 'Recycles nutrients from dung and plant litter back into the soil.',
      bn: 'গোবর ও ঝরা পাতার পুষ্টি মাটিতে ফিরিয়ে দেয়।',
    },
    behavior: {
      en: 'Fruits in "flushes" every 7–10 days on a compost bed; each basidium carries only two spores, which gives the species its name.',
      bn: 'কম্পোস্টের বেডে প্রতি ৭–১০ দিন পরপর দফায় দফায় মাশরুম গজায়; প্রতিটি ব্যাসিডিয়ামে মাত্র দুটি রেণু থাকে — এ থেকেই এর বৈজ্ঞানিক নাম "bisporus"।',
    },
    range: {
      native: [
        [51.5, -0.5],
        [48.8, 2.3],
        [52.0, 5.0],
        [45.0, 10.0],
        [37.5, -122.3],
      ],
      introduced: [
        [36.0, 117.0],
        [23.85, 90.26],
        [-34.0, 151.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Few threats — abundant and widely cultivated', 'Disease outbreaks in farms (e.g. dry bubble and green mould)'],
        bn: ['তেমন হুমকি নেই — প্রচুর পরিমাণে চাষ হয়', 'খামারে রোগের প্রাদুর্ভাব (যেমন ড্রাই বাবল ও সবুজ ছাতা)'],
      },
      initiatives: {
        en: ['Culture collections preserving wild strains for breeding', 'Mushroom Development Institute, Savar, trials winter cultivation in Bangladesh'],
        bn: ['প্রজননের জন্য বুনো জাত সংরক্ষণ করা কালচার সংগ্রহশালা', 'সাভারের মাশরুম উন্নয়ন ইনস্টিটিউট বাংলাদেশে শীতকালীন চাষ নিয়ে পরীক্ষা করছে'],
      },
    },
    facts: {
      en: [
        'Button, cremini and portobello are the same species at different ages.',
        'Exposed to UV light, the mushrooms make vitamin D.',
        'Never eat wild white mushrooms without expert identification — young deadly Amanitas (death cap, destroying angel) can look similar.',
      ],
      bn: [
        'বাটন, ক্রিমিনি ও পোর্টোবেলো একই প্রজাতি — শুধু বয়সের পার্থক্য।',
        'অতিবেগুনি আলোতে রাখলে এই মাশরুমে ভিটামিন ডি তৈরি হয়।',
        'বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনো বুনো সাদা মাশরুম খাবেন না — কচি অবস্থায় প্রাণঘাতী অ্যামানিটা (ডেথ ক্যাপ, ডেস্ট্রয়িং এঞ্জেল) দেখতে প্রায় একই রকম।',
      ],
    },
    related: ['oyster-mushroom', 'straw-mushroom', 'milky-mushroom', 'shiitake'],
  },
  {
    id: 'shiitake',
    commonName: { en: 'Shiitake', bn: 'শিতাকে মাশরুম' },
    scientificName: 'Lentinula edodes',
    altNames: {
      en: ['Shiitake Mushroom', 'Black Forest Mushroom', 'Xianggu', 'Oak Mushroom'],
      bn: ['শিতাকি মাশরুম', 'ব্ল্যাক ফরেস্ট মাশরুম', 'শিয়াংগু', 'ওক মাশরুম'],
    },
    synonyms: ['Lentinus edodes', 'Agaricus edodes'],
    category: 'fungi',
    wikiTitle: 'Shiitake',
    description: {
      en: 'Shiitake is a wood-rotting mushroom native to East Asia and the second most cultivated mushroom in the world. It has been grown on oak logs in China and Japan for centuries and is prized for its rich, savoury (umami) flavour. In traditional East Asian medicine it is considered a health food; eat it well cooked, because raw shiitake can cause an itchy "flagellate" skin rash in some people.',
      bn: 'শিতাকে পূর্ব এশিয়ার একটি কাঠপচা মাশরুম এবং বিশ্বে চাষের দিক থেকে দ্বিতীয় বৃহত্তম মাশরুম। চীন ও জাপানে বহু শতাব্দী ধরে ওক গাছের গুঁড়িতে এর চাষ হয়ে আসছে; এর গাঢ়, সুস্বাদু (উমামি) স্বাদের জন্য এটি খুব জনপ্রিয়। পূর্ব এশিয়ার প্রথাগত চিকিৎসায় একে স্বাস্থ্যকর খাবার মনে করা হয়; তবে ভালোভাবে রান্না করে খাওয়া উচিত, কারণ কাঁচা শিতাকে খেলে কারও কারও চামড়ায় চুলকানিযুক্ত দাগ (ফ্ল্যাজেলেট ডার্মাটাইটিস) দেখা দেয়।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Omphalotaceae',
      genus: 'Lentinula',
      species: 'L. edodes',
    },
    physical: {
      size: {
        en: 'Cap 5–15 cm across; tough, fibrous stem 3–5 cm long',
        bn: 'টুপি ৫–১৫ সেমি চওড়া; ডাঁটা শক্ত ও আঁশযুক্ত, ৩–৫ সেমি লম্বা',
      },
      weight: {
        en: 'Usually 15–50 g per fresh mushroom',
        bn: 'একেকটি তাজা মাশরুম সাধারণত ১৫–৫০ গ্রাম',
      },
      lifespan: {
        en: 'Logs can keep fruiting for 3–6 years; each mushroom lasts about a week',
        bn: 'একটি গুঁড়ি থেকে ৩–৬ বছর পর্যন্ত মাশরুম পাওয়া যায়; প্রতিটি মাশরুম প্রায় এক সপ্তাহ টেকে',
      },
      features: {
        en: [
          'Umbrella-shaped light to dark brown cap, often with white cracks or scales',
          'White gills and a tough, woody stem usually removed before cooking',
          'Strong savoury aroma, stronger when dried',
        ],
        bn: [
          'ছাতার মতো হালকা থেকে গাঢ় বাদামি টুপি, প্রায়ই সাদা ফাটল বা আঁশ থাকে',
          'সাদা গিল; শক্ত কাঠের মতো ডাঁটা রান্নার আগে সাধারণত ফেলে দেওয়া হয়',
          'তীব্র সুগন্ধ, শুকালে গন্ধ আরও বাড়ে',
        ],
      },
    },
    habitat: {
      en: 'Dead logs of oak, chestnut and other broadleaf trees in humid forests; farmed on logs and sawdust blocks',
      bn: 'আর্দ্র বনে ওক, চেস্টনাট ও অন্যান্য চওড়া পাতার গাছের মরা গুঁড়ি; গুঁড়ি ও কাঠের গুঁড়ার ব্লকে চাষ হয়',
    },
    habitats: ['temperate-forest', 'urban-farmland'],
    regions: ['east-asia', 'southeast-asia', 'south-asia', 'north-america'],
    distribution: {
      en: 'Native to China, Japan, Korea and parts of Southeast Asia; now cultivated worldwide, including on a small scale in Bangladesh.',
      bn: 'চীন, জাপান, কোরিয়া ও দক্ষিণ-পূর্ব এশিয়ার কিছু অংশের স্থানীয় প্রজাতি; এখন বাংলাদেশসহ সারা বিশ্বে চাষ হয়, যদিও বাংলাদেশে পরিসর ছোট।',
    },
    climate: {
      en: 'Temperate to subtropical, humid; fruits best at about 12–20 °C',
      bn: 'নাতিশীতোষ্ণ থেকে উপক্রান্তীয়, আর্দ্র; প্রায় ১২–২০ ডিগ্রি সেলসিয়াসে ভালো ফলন দেয়',
    },
    diet: {
      en: 'Saprotrophic white-rot fungus that digests the lignin and cellulose of dead hardwood',
      bn: 'মৃতজীবী সাদা-পচন ছত্রাক; মরা শক্ত কাঠের লিগনিন ও সেলুলোজ হজম করে',
    },
    ecologicalRole: {
      en: 'Breaks down fallen hardwood, returning carbon and nutrients to the forest floor.',
      bn: 'পড়ে থাকা শক্ত কাঠ পচিয়ে বনের মাটিতে কার্বন ও পুষ্টি ফিরিয়ে দেয়।',
    },
    behavior: {
      en: 'Fruits after cool rain or after farmers soak the logs in cold water, a "shock" that triggers mushrooms within days.',
      bn: 'ঠান্ডা বৃষ্টির পরে মাশরুম গজায়; চাষিরা গুঁড়ি ঠান্ডা পানিতে ভিজিয়ে "ধাক্কা" দেন, ফলে কয়েক দিনের মধ্যেই মাশরুম বের হয়।',
    },
    range: {
      native: [
        [35.5, 138.0],
        [33.0, 131.0],
        [36.5, 127.8],
        [28.0, 118.0],
        [24.0, 121.0],
      ],
      introduced: [
        [23.85, 90.26],
        [38.0, -78.0],
        [-37.8, 145.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Loss of old broadleaf forests in East Asia', 'Few threats overall — widely cultivated'],
        bn: ['পূর্ব এশিয়ায় পুরোনো চওড়া পাতার বন কমে যাওয়া', 'সামগ্রিকভাবে তেমন হুমকি নেই — ব্যাপকভাবে চাষকৃত'],
      },
      initiatives: {
        en: ['Strain banks in Japan and China conserving wild genetic diversity', 'Sawdust-block cultivation that reduces cutting of oak logs'],
        bn: ['জাপান ও চীনে বুনো জিনগত বৈচিত্র্য সংরক্ষণে জাত-ভান্ডার', 'কাঠের গুঁড়ার ব্লকে চাষ, যাতে ওক গাছ কাটার প্রয়োজন কমে'],
      },
    },
    facts: {
      en: [
        'Written records of shiitake cultivation in China go back about 800–1,000 years.',
        'It contains lentinan, a compound studied (and used in Japan) alongside cancer treatment.',
        'Never eat wild mushrooms without expert identification — some deadly wood-growing species, such as Galerina, grow on logs too.',
      ],
      bn: [
        'চীনে শিতাকে চাষের লিখিত বিবরণ প্রায় ৮০০–১,০০০ বছর পুরোনো।',
        'এতে লেন্টিনান নামের একটি যৌগ আছে, যা ক্যানসার চিকিৎসার সহায়ক হিসেবে গবেষণা হয়েছে (জাপানে ব্যবহারও হয়)।',
        'বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনো বুনো মাশরুম খাবেন না — গ্যালেরিনার মতো প্রাণঘাতী প্রজাতিও মরা কাঠে জন্মায়।',
      ],
    },
    related: ['button-mushroom', 'enoki', 'oyster-mushroom', 'wood-ear-mushroom'],
  },
  {
    id: 'straw-mushroom',
    commonName: { en: 'Straw Mushroom', bn: 'খড় মাশরুম' },
    scientificName: 'Volvariella volvacea',
    altNames: {
      en: ['Paddy Straw Mushroom', 'Chinese Mushroom', 'Volvariella'],
      bn: ['বিচালি মাশরুম', 'ধানের খড়ের মাশরুম', 'ভলভেরিয়েলা'],
    },
    category: 'fungi',
    wikiTitle: 'Volvariella volvacea',
    description: {
      en: 'The straw mushroom is a fast-growing tropical mushroom traditionally grown on rice straw, and is harvested at the egg stage before the cap opens. It thrives in hot, humid weather, which makes it well suited to summer farming in Bangladesh, where it is grown on bundles of paddy straw by small farmers. It is popular in Chinese and Southeast Asian cooking.',
      bn: 'খড় মাশরুম দ্রুত বর্ধনশীল একটি ক্রান্তীয় মাশরুম; প্রথাগতভাবে ধানের খড়ে এর চাষ হয় এবং টুপি খোলার আগেই ডিমের মতো অবস্থায় তোলা হয়। গরম ও আর্দ্র আবহাওয়ায় এটি ভালো জন্মায়, তাই বাংলাদেশে গ্রীষ্ম ও বর্ষায় ছোট চাষিরা ধানের খড়ের আঁটি দিয়ে সহজেই এর চাষ করেন। চীনা ও দক্ষিণ-পূর্ব এশীয় রান্নায় এটি খুব জনপ্রিয়।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Pluteaceae',
      genus: 'Volvariella',
      species: 'V. volvacea',
    },
    physical: {
      size: {
        en: 'Egg stage 2–4 cm tall; opened cap 5–12 cm across',
        bn: 'ডিম অবস্থায় ২–৪ সেমি উঁচু; খোলা টুপি ৫–১২ সেমি চওড়া',
      },
      weight: {
        en: 'About 10–30 g per egg-stage mushroom',
        bn: 'ডিম অবস্থার একেকটি মাশরুম প্রায় ১০–৩০ গ্রাম',
      },
      lifespan: {
        en: 'First harvest 10–14 days after spawning; the crop lasts about 3–4 weeks',
        bn: 'বীজ দেওয়ার ১০–১৪ দিনের মধ্যে প্রথম ফলন; পুরো ফসল প্রায় ৩–৪ সপ্তাহ চলে',
      },
      features: {
        en: [
          'Young mushroom enclosed in a dark grey-brown egg-like sac (volva)',
          'Mature grey-brown cap with free gills turning pink',
          'Cup-like volva remains at the base of the stem',
        ],
        bn: [
          'কচি মাশরুম গাঢ় ধূসর-বাদামি ডিমের মতো থলিতে (ভলভা) মোড়ানো থাকে',
          'পরিণত টুপি ধূসর-বাদামি; গিল আলাদা এবং গোলাপি হয়ে যায়',
          'ডাঁটার গোড়ায় পেয়ালার মতো ভলভা থেকে যায়',
        ],
      },
    },
    habitat: {
      en: 'Rotting rice straw, crop residues and compost in warm, humid lowlands',
      bn: 'উষ্ণ ও আর্দ্র নিম্নভূমিতে পচা ধানের খড়, ফসলের উচ্ছিষ্ট ও কম্পোস্ট',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Tropical and subtropical Asia, from Bangladesh and India to southern China and Southeast Asia.',
      bn: 'বাংলাদেশ ও ভারত থেকে দক্ষিণ চীন ও দক্ষিণ-পূর্ব এশিয়া পর্যন্ত ক্রান্তীয় ও উপক্রান্তীয় এশিয়া।',
    },
    climate: {
      en: 'Hot and humid; grows best at 30–35 °C with high humidity',
      bn: 'গরম ও আর্দ্র; ৩০–৩৫ ডিগ্রি সেলসিয়াস তাপমাত্রা ও বেশি আর্দ্রতায় সবচেয়ে ভালো জন্মায়',
    },
    diet: {
      en: 'Saprotrophic — it digests cellulose in straw and other crop waste',
      bn: 'মৃতজীবী — খড় ও অন্যান্য ফসলের উচ্ছিষ্টের সেলুলোজ হজম করে',
    },
    ecologicalRole: {
      en: 'Turns rice straw, often burned as waste, into food and nutrient-rich compost.',
      bn: 'যে খড় প্রায়ই পুড়িয়ে ফেলা হয়, তা থেকে খাবার ও পুষ্টিকর জৈব সার তৈরি করে।',
    },
    behavior: {
      en: 'Grows extremely fast — the egg can double in size in a day — so it must be picked several times daily.',
      bn: 'অত্যন্ত দ্রুত বাড়ে — একদিনেই ডিম দ্বিগুণ বড় হতে পারে — তাই দিনে কয়েকবার তুলতে হয়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.5, 88.4],
        [23.1, 113.3],
        [13.7, 100.5],
        [21.0, 105.8],
        [14.6, 121.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Few threats — common and widely cultivated', 'Strain degeneration in farms reduces yields'],
        bn: ['তেমন হুমকি নেই — সাধারণ ও ব্যাপকভাবে চাষকৃত', 'খামারে জাতের অবক্ষয়ে ফলন কমে যাওয়া'],
      },
      initiatives: {
        en: ['Mushroom Development Institute, Savar, supplies straw-mushroom spawn and training', 'Promotion of straw recycling instead of field burning'],
        bn: ['সাভারের মাশরুম উন্নয়ন ইনস্টিটিউট খড় মাশরুমের বীজ ও প্রশিক্ষণ দেয়', 'মাঠে খড় না পুড়িয়ে পুনর্ব্যবহারে উৎসাহ প্রদান'],
      },
    },
    facts: {
      en: [
        'It is one of the fastest-growing cultivated mushrooms, ready in about 10 days.',
        'It cannot be stored in a fridge — cold below about 10 °C damages it.',
        'Never eat wild mushrooms without expert identification — the egg stage of the deadly death cap (Amanita) looks very similar and has caused fatal poisonings in Asia.',
      ],
      bn: [
        'এটি দ্রুততম চাষযোগ্য মাশরুমগুলোর একটি — মাত্র ১০ দিনের মতো সময়ে তোলা যায়।',
        'ফ্রিজে রাখা যায় না — প্রায় ১০ ডিগ্রি সেলসিয়াসের নিচে ঠান্ডায় এটি নষ্ট হয়ে যায়।',
        'বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনো বুনো মাশরুম খাবেন না — প্রাণঘাতী ডেথ ক্যাপের (অ্যামানিটা) ডিম অবস্থা দেখতে প্রায় একই রকম, এশিয়ায় এতে মৃত্যুর ঘটনাও ঘটেছে।',
      ],
    },
    related: ['oyster-mushroom', 'milky-mushroom', 'button-mushroom'],
  },
  {
    id: 'milky-mushroom',
    commonName: { en: 'Milky Mushroom', bn: 'দুধ মাশরুম' },
    scientificName: 'Calocybe indica',
    altNames: {
      en: ['Milky White Mushroom', 'Indian Milky Mushroom', 'Calocybe'],
      bn: ['মিল্কি মাশরুম', 'দুধসাদা মাশরুম', 'ক্যালোসাইবি'],
    },
    category: 'fungi',
    wikiTitle: 'Calocybe indica',
    description: {
      en: 'The milky mushroom is a large, pure white mushroom first described from India and suited to hot climates. It has a long shelf life for a fresh mushroom and a firm, meaty texture. It is grown in Bangladesh during the hot months on pasteurised straw covered with a soil "casing" layer, complementing oyster mushrooms that prefer cooler weather.',
      bn: 'দুধ মাশরুম বড় আকারের ধবধবে সাদা একটি মাশরুম; প্রথম ভারত থেকে বর্ণনা করা হয় এবং গরম আবহাওয়ার জন্য বেশ উপযোগী। তাজা মাশরুম হিসেবে এটি অনেক দিন ভালো থাকে এবং এর গঠন শক্ত ও মাংসল। বাংলাদেশে গরমের মাসগুলোতে জীবাণুমুক্ত খড়ের ওপর মাটির আবরণ (কেসিং) দিয়ে এর চাষ হয়, ফলে ঠান্ডা আবহাওয়া পছন্দ করা ঝিনুক মাশরুমের পাশাপাশি সারা বছর মাশরুম পাওয়া যায়।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Lyophyllaceae',
      genus: 'Calocybe',
      species: 'C. indica',
    },
    physical: {
      size: {
        en: 'Cap 5–15 cm across; thick stem 5–10 cm tall',
        bn: 'টুপি ৫–১৫ সেমি চওড়া; মোটা ডাঁটা ৫–১০ সেমি লম্বা',
      },
      weight: {
        en: 'Often 50–250 g per mushroom',
        bn: 'একেকটি মাশরুম প্রায়ই ৫০–২৫০ গ্রাম',
      },
      lifespan: {
        en: 'First harvest about 4–6 weeks after spawning; fresh mushrooms keep for several days',
        bn: 'বীজ দেওয়ার প্রায় ৪–৬ সপ্তাহ পর প্রথম ফলন; তাজা মাশরুম কয়েক দিন ভালো থাকে',
      },
      features: {
        en: [
          'Milky-white, fleshy cap and gills',
          'Thick, swollen stem that is fully edible',
          'Grows singly or in small clusters from cased beds',
        ],
        bn: [
          'দুধের মতো সাদা মাংসল টুপি ও গিল',
          'মোটা, গোড়ায় ফোলা ডাঁটা — পুরোটাই খাওয়া যায়',
          'মাটির আবরণ দেওয়া বেড থেকে একা বা ছোট গুচ্ছে গজায়',
        ],
      },
    },
    habitat: {
      en: 'Rich soil and decaying plant matter in warm regions; farmed on straw beds under a soil casing',
      bn: 'উষ্ণ অঞ্চলের উর্বর মাটি ও পচা উদ্ভিজ্জ পদার্থ; মাটির আবরণ দেওয়া খড়ের বেডে চাষ হয়',
    },
    habitats: ['urban-farmland', 'grassland'],
    regions: ['south-asia'],
    distribution: {
      en: 'Native to India, especially the south and West Bengal; cultivated in Bangladesh, Sri Lanka and other warm countries.',
      bn: 'ভারতের, বিশেষ করে দক্ষিণ ভারত ও পশ্চিমবঙ্গের স্থানীয় প্রজাতি; বাংলাদেশ, শ্রীলঙ্কা ও অন্যান্য উষ্ণ দেশে চাষ হয়।',
    },
    climate: {
      en: 'Hot and humid; grows best at about 30–35 °C',
      bn: 'গরম ও আর্দ্র; প্রায় ৩০–৩৫ ডিগ্রি সেলসিয়াসে সবচেয়ে ভালো জন্মায়',
    },
    diet: {
      en: 'Saprotrophic — it decomposes straw and other plant residues',
      bn: 'মৃতজীবী — খড় ও অন্যান্য উদ্ভিজ্জ উচ্ছিষ্ট পচিয়ে পুষ্টি নেয়',
    },
    ecologicalRole: {
      en: 'Recycles crop residues into food and organic matter for soil.',
      bn: 'ফসলের উচ্ছিষ্ট থেকে খাদ্য ও মাটির জন্য জৈব পদার্থ তৈরি করে।',
    },
    behavior: {
      en: 'Fruits during hot, humid months; needs a soil casing layer to trigger mushroom formation.',
      bn: 'গরম ও আর্দ্র মাসগুলোতে মাশরুম গজায়; মাশরুম তৈরি শুরু করতে মাটির আবরণ প্রয়োজন হয়।',
    },
    range: {
      native: [
        [11.0, 78.0],
        [13.0, 80.2],
        [10.0, 76.3],
        [22.5, 88.3],
      ],
      introduced: [
        [23.85, 90.26],
        [7.3, 80.6],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Few threats — mostly known from cultivation', 'Limited spawn supply restricts farming'],
        bn: ['তেমন হুমকি নেই — মূলত চাষের মাধ্যমেই পরিচিত', 'বীজের সীমিত সরবরাহ চাষ সম্প্রসারণে বাধা'],
      },
      initiatives: {
        en: ['Mushroom Development Institute, Savar, promotes summer cultivation', 'Indian research centres breeding high-yield strains'],
        bn: ['সাভারের মাশরুম উন্নয়ন ইনস্টিটিউট গ্রীষ্মকালীন চাষে উৎসাহ দেয়', 'ভারতের গবেষণা কেন্দ্রে উচ্চফলনশীল জাত উদ্ভাবন'],
      },
    },
    facts: {
      en: [
        'It was first described scientifically from India in the 1970s.',
        'Unlike most mushrooms, it thrives at temperatures above 30 °C.',
        'Never eat wild white mushrooms without expert identification — deadly white Amanitas can look similar.',
      ],
      bn: [
        '১৯৭০-এর দশকে ভারত থেকে প্রথম এর বৈজ্ঞানিক বর্ণনা দেওয়া হয়।',
        'বেশিরভাগ মাশরুমের উল্টো, এটি ৩০ ডিগ্রি সেলসিয়াসের বেশি তাপমাত্রায় ভালো জন্মায়।',
        'বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনো বুনো সাদা মাশরুম খাবেন না — প্রাণঘাতী সাদা অ্যামানিটা দেখতে প্রায় একই রকম।',
      ],
    },
    related: ['straw-mushroom', 'oyster-mushroom', 'button-mushroom'],
  },
  {
    id: 'enoki',
    commonName: { en: 'Enoki', bn: 'এনোকি মাশরুম' },
    scientificName: 'Flammulina filiformis',
    altNames: {
      en: ['Enokitake', 'Golden Needle Mushroom', 'Velvet Shank'],
      bn: ['এনোকিতাকে', 'সোনালি সুই মাশরুম', 'ভেলভেট শ্যাংক'],
    },
    synonyms: ['Flammulina velutipes var. filiformis'],
    category: 'fungi',
    wikiTitle: 'Enokitake',
    description: {
      en: 'Enoki is the East Asian mushroom sold in packs of long, thin, white stems with tiny caps. The pale, noodle-like form is produced by growing it in darkness and high carbon dioxide; wild enoki looks very different, with orange-brown, sticky caps and velvety dark stems. It is a popular ingredient in hotpots and soups in Japan, Korea and China.',
      bn: 'এনোকি পূর্ব এশিয়ার একটি মাশরুম, যা লম্বা সরু সাদা ডাঁটা ও ছোট্ট টুপিসহ প্যাকেটে বিক্রি হয়। অন্ধকারে ও বেশি কার্বন ডাই-অক্সাইডে চাষ করায় এটি এমন ফ্যাকাশে, নুডলসের মতো হয়; বুনো এনোকি দেখতে একেবারে আলাদা — কমলা-বাদামি আঠালো টুপি ও মখমলের মতো কালচে ডাঁটা। জাপান, কোরিয়া ও চীনে হটপট ও স্যুপে এটি জনপ্রিয় উপকরণ।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Physalacriaceae',
      genus: 'Flammulina',
      species: 'F. filiformis',
    },
    physical: {
      size: {
        en: 'Cultivated: stems 8–15 cm long, caps under 1 cm; wild caps 2–5 cm across',
        bn: 'চাষ করা: ডাঁটা ৮–১৫ সেমি লম্বা, টুপি ১ সেমির কম; বুনো টুপি ২–৫ সেমি চওড়া',
      },
      weight: {
        en: 'Sold in clusters of about 100–200 g',
        bn: 'প্রায় ১০০–২০০ গ্রামের গুচ্ছ হিসেবে বিক্রি হয়',
      },
      lifespan: {
        en: 'Harvested about 2 months after inoculation; wild mushrooms last 1–2 weeks in cold weather',
        bn: 'বীজ দেওয়ার প্রায় ২ মাস পর তোলা হয়; শীতল আবহাওয়ায় বুনো মাশরুম ১–২ সপ্তাহ টেকে',
      },
      features: {
        en: [
          'Cultivated form: long, thin white stems with tiny round caps',
          'Wild form: sticky orange-brown cap and dark velvety stem base',
          'Tolerates freezing and can fruit in winter',
        ],
        bn: [
          'চাষ করা রূপ: লম্বা, সরু সাদা ডাঁটা আর ছোট গোল টুপি',
          'বুনো রূপ: আঠালো কমলা-বাদামি টুপি ও কালচে মখমলের মতো ডাঁটার গোড়া',
          'জমাট ঠান্ডা সহ্য করতে পারে এবং শীতকালেও গজায়',
        ],
      },
    },
    habitat: {
      en: 'Dead and dying broadleaf trees in temperate forests; farmed in bottles of sawdust indoors',
      bn: 'নাতিশীতোষ্ণ বনের মরা ও মৃতপ্রায় চওড়া পাতার গাছ; ঘরের ভেতরে কাঠের গুঁড়ার বোতলে চাষ হয়',
    },
    habitats: ['temperate-forest', 'urban-farmland'],
    regions: ['east-asia'],
    distribution: {
      en: 'Native to East Asia, including China, Japan and Korea; cultivated commercially in East Asia and exported worldwide.',
      bn: 'চীন, জাপান ও কোরিয়াসহ পূর্ব এশিয়ার স্থানীয় প্রজাতি; পূর্ব এশিয়ায় বাণিজ্যিকভাবে চাষ হয় এবং সারা বিশ্বে রপ্তানি হয়।',
    },
    climate: {
      en: 'Cold temperate; fruits at low temperatures, often 5–15 °C',
      bn: 'শীতল নাতিশীতোষ্ণ; কম তাপমাত্রায়, প্রায়ই ৫–১৫ ডিগ্রি সেলসিয়াসে গজায়',
    },
    diet: {
      en: 'Saprotrophic and weakly parasitic on hardwood, digesting dead wood',
      bn: 'মৃতজীবী এবং শক্ত কাঠের গাছে মৃদু পরজীবী; মরা কাঠ হজম করে পুষ্টি নেয়',
    },
    ecologicalRole: {
      en: 'Decomposes dead broadleaf wood, especially in winter when few other fungi fruit.',
      bn: 'মরা চওড়া পাতার গাছের কাঠ পচায়, বিশেষ করে শীতকালে যখন অন্য ছত্রাক কম জন্মায়।',
    },
    behavior: {
      en: 'Fruits in late autumn and winter, even after frosts; in darkness the stems stretch long towards light and air.',
      bn: 'হেমন্তের শেষ ও শীতকালে, এমনকি তুষারপাতের পরেও গজায়; অন্ধকারে আলো ও বাতাসের খোঁজে ডাঁটা লম্বা হয়ে যায়।',
    },
    range: {
      native: [
        [36.0, 138.0],
        [37.5, 127.5],
        [30.0, 104.0],
        [40.0, 116.0],
        [43.0, 141.3],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Few threats — common and widely cultivated', 'Listeria contamination of packaged enoki has caused food recalls'],
        bn: ['তেমন হুমকি নেই — সাধারণ ও ব্যাপকভাবে চাষকৃত', 'প্যাকেটজাত এনোকিতে লিস্টেরিয়া জীবাণুর সংক্রমণে খাদ্য প্রত্যাহারের ঘটনা ঘটেছে'],
      },
      initiatives: {
        en: ['Genome studies supporting strain improvement', 'Food-safety guidance to cook enoki thoroughly'],
        bn: ['জাত উন্নয়নে জিনোম গবেষণা', 'এনোকি ভালোভাবে রান্না করে খাওয়ার খাদ্য-নিরাপত্তা নির্দেশনা'],
      },
    },
    facts: {
      en: [
        'Cultivated and wild enoki look so different that many people do not recognise them as the same mushroom.',
        'Packaged enoki should always be cooked, not eaten raw.',
        'Never eat wild mushrooms without expert identification — wild enoki can be confused with the deadly Galerina marginata.',
      ],
      bn: [
        'চাষ করা ও বুনো এনোকি দেখতে এত আলাদা যে অনেকেই এদের একই মাশরুম বলে চিনতে পারেন না।',
        'প্যাকেটজাত এনোকি সব সময় রান্না করে খাওয়া উচিত, কাঁচা নয়।',
        'বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনো বুনো মাশরুম খাবেন না — বুনো এনোকিকে প্রাণঘাতী Galerina marginata বলে ভুল হতে পারে।',
      ],
    },
    related: ['shiitake', 'honey-fungus', 'button-mushroom'],
  },
  {
    id: 'reishi',
    commonName: { en: 'Reishi', bn: 'রিশি মাশরুম' },
    scientificName: 'Ganoderma lucidum',
    altNames: {
      en: ['Lingzhi', 'Varnished Conk', 'Ganoderma', 'Mushroom of Immortality'],
      bn: ['লিংঝি', 'গ্যানোডার্মা', 'গ্যানোডার্মা মাশরুম', 'অমরত্বের মাশরুম'],
    },
    category: 'fungi',
    wikiTitle: 'Ganoderma lucidum',
    description: {
      en: 'Reishi is a woody bracket fungus with a shiny, varnished red-brown cap, revered for over 2,000 years in Chinese and Japanese traditional medicine. It is too hard and bitter to eat as food and is used as tea, powder or extract. Ganoderma is cultivated in Bangladesh, but much "reishi" sold in Asia is actually the closely related Ganoderma lingzhi; health claims are not well proven, and supplements can interact with medicines, so consult a doctor before use.',
      bn: 'রিশি একটি কাঠের মতো শক্ত তাক-ছত্রাক; এর টুপি চকচকে, যেন বার্নিশ করা লালচে-বাদামি। চীন ও জাপানের প্রথাগত চিকিৎসায় ২,০০০ বছরেরও বেশি সময় ধরে এটি সম্মানিত। খাবার হিসেবে খাওয়ার পক্ষে এটি অতিরিক্ত শক্ত ও তেতো, তাই চা, গুঁড়া বা নির্যাস হিসেবে ব্যবহার করা হয়। বাংলাদেশেও গ্যানোডার্মার চাষ হয়, তবে এশিয়ায় "রিশি" নামে বিক্রি হওয়া অনেক কিছুই আসলে নিকটাত্মীয় Ganoderma lingzhi। এর স্বাস্থ্যগুণের দাবি এখনো ভালোভাবে প্রমাণিত নয় এবং সাপ্লিমেন্ট ওষুধের সঙ্গে প্রতিক্রিয়া করতে পারে, তাই ব্যবহারের আগে চিকিৎসকের পরামর্শ নিন।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Polyporales',
      family: 'Ganodermataceae',
      genus: 'Ganoderma',
      species: 'G. lucidum',
    },
    physical: {
      size: {
        en: 'Kidney- or fan-shaped cap 5–30 cm across, often on a side stalk',
        bn: 'কিডনি বা পাখার মতো টুপি ৫–৩০ সেমি চওড়া, প্রায়ই পাশ থেকে বের হওয়া ডাঁটাসহ',
      },
      weight: {
        en: 'Tough and woody; a dried fruit body typically weighs 20–100 g',
        bn: 'শক্ত ও কাঠের মতো; একটি শুকনো মাশরুম সাধারণত ২০–১০০ গ্রাম',
      },
      lifespan: {
        en: 'Annual fruit bodies that can persist for months; mycelium lives for years in a stump',
        bn: 'বার্ষিক মাশরুম, তবে কয়েক মাস টিকে থাকতে পারে; গাছের গুঁড়িতে মাইসেলিয়াম বহু বছর বাঁচে',
      },
      features: {
        en: [
          'Glossy, lacquered red to reddish-brown upper surface',
          'Underside white to cream with tiny pores instead of gills',
          'Releases rusty-brown spores that can dust nearby surfaces',
        ],
        bn: [
          'ওপরের পৃষ্ঠ চকচকে, গালার প্রলেপের মতো লাল থেকে লালচে-বাদামি',
          'নিচের দিক সাদা থেকে ঘিয়ে রঙের, গিলের বদলে ক্ষুদ্র ছিদ্র থাকে',
          'মরিচা-বাদামি রেণু ছড়ায়, যা আশপাশে গুঁড়ার মতো জমে',
        ],
      },
    },
    habitat: {
      en: 'Stumps and bases of dead or dying broadleaf trees; cultivated on logs and sawdust bags',
      bn: 'মরা বা মৃতপ্রায় চওড়া পাতার গাছের গুঁড়ি ও গোড়া; গুঁড়ি ও কাঠের গুঁড়ার ব্যাগে চাষ হয়',
    },
    habitats: ['temperate-forest', 'urban-farmland'],
    regions: ['europe', 'east-asia', 'south-asia'],
    distribution: {
      en: 'In the strict sense native to Europe and parts of Asia; Ganoderma species are cultivated across East Asia and in Bangladesh.',
      bn: 'সংকীর্ণ অর্থে ইউরোপ ও এশিয়ার কিছু অংশের স্থানীয় প্রজাতি; পূর্ব এশিয়াজুড়ে এবং বাংলাদেশে গ্যানোডার্মার চাষ হয়।',
    },
    climate: {
      en: 'Warm temperate to subtropical, humid; cultivated at about 25–30 °C',
      bn: 'উষ্ণ নাতিশীতোষ্ণ থেকে উপক্রান্তীয়, আর্দ্র; প্রায় ২৫–৩০ ডিগ্রি সেলসিয়াসে চাষ হয়',
    },
    diet: {
      en: 'White-rot fungus — saprotrophic on stumps and weakly parasitic on living trees',
      bn: 'সাদা-পচন ছত্রাক — গাছের গুঁড়িতে মৃতজীবী এবং জীবিত গাছে মৃদু পরজীবী',
    },
    ecologicalRole: {
      en: 'Decays the heartwood of broadleaf trees, recycling wood and creating cavities used by wildlife.',
      bn: 'চওড়া পাতার গাছের অন্তঃকাঠ পচায়, কাঠ পুনর্চক্রায়ন করে এবং বন্যপ্রাণীর ব্যবহারযোগ্য কোটর তৈরি করে।',
    },
    behavior: {
      en: 'Fruit bodies grow slowly over weeks from the base of trees and release spores for months.',
      bn: 'গাছের গোড়া থেকে কয়েক সপ্তাহ ধরে ধীরে ধীরে মাশরুম বড় হয় এবং মাসের পর মাস রেণু ছড়ায়।',
    },
    range: {
      native: [
        [50.0, 10.0],
        [45.0, 8.0],
        [48.0, 16.0],
        [42.0, 13.0],
        [46.0, 25.0],
      ],
      introduced: [[23.85, 90.26]],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Over-collection of wild fruit bodies for the medicine trade', 'Removal of old trees and stumps'],
        bn: ['ওষুধ বাণিজ্যের জন্য বুনো মাশরুম অতিরিক্ত সংগ্রহ', 'পুরোনো গাছ ও গুঁড়ি সরিয়ে ফেলা'],
      },
      initiatives: {
        en: ['Large-scale cultivation reduces pressure on wild populations', 'DNA barcoding to correctly label Ganoderma products'],
        bn: ['ব্যাপক চাষের ফলে বুনো মাশরুমের ওপর চাপ কমছে', 'গ্যানোডার্মা পণ্যের সঠিক লেবেলের জন্য ডিএনএ বারকোডিং'],
      },
    },
    facts: {
      en: [
        'In Chinese art the lingzhi is a symbol of long life and good fortune.',
        'It has pores rather than gills, which makes it a polypore.',
        'Never consume wild bracket fungi without expert identification, and never treat reishi as a substitute for medical treatment.',
      ],
      bn: [
        'চীনা শিল্পকলায় লিংঝি দীর্ঘায়ু ও সৌভাগ্যের প্রতীক।',
        'এর গিলের বদলে ছিদ্র থাকে, তাই একে পলিপোর ছত্রাক বলা হয়।',
        'বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনো বুনো তাক-ছত্রাক খাবেন না, আর রিশিকে কখনো চিকিৎসার বিকল্প ভাববেন না।',
      ],
    },
    related: ['lions-mane', 'cordyceps-militaris', 'shiitake'],
  },
  {
    id: 'lions-mane',
    commonName: { en: "Lion's Mane", bn: 'লায়ন্স মেন মাশরুম' },
    scientificName: 'Hericium erinaceus',
    altNames: {
      en: ["Lion's Mane Mushroom", 'Bearded Tooth Fungus', 'Monkey Head Mushroom', 'Pom Pom Mushroom'],
      bn: ['সিংহকেশর মাশরুম', 'দাড়িওয়ালা দাঁত-ছত্রাক', 'বানরমাথা মাশরুম', 'পমপম মাশরুম'],
    },
    category: 'fungi',
    wikiTitle: 'Hericium erinaceus',
    description: {
      en: "Lion's mane is a striking white fungus made of cascading icicle-like spines instead of a cap and gills. It grows on wounds of old broadleaf trees and is now cultivated on sawdust for its seafood-like taste. It is used in traditional Chinese medicine, and its compounds are being studied for effects on nerve cells, though benefits in people are not yet proven.",
      bn: 'লায়ন্স মেন একটি চোখধাঁধানো সাদা ছত্রাক; এর টুপি বা গিল নেই, বরং বরফের ঝুরির মতো ঝুলে থাকা অসংখ্য কাঁটা দিয়ে তৈরি। পুরোনো চওড়া পাতার গাছের ক্ষতস্থানে এটি জন্মায়; চিংড়ি বা কাঁকড়ার মতো স্বাদের জন্য এখন কাঠের গুঁড়ায় এর চাষ হয়। প্রথাগত চীনা চিকিৎসায় এটি ব্যবহৃত হয় এবং স্নায়ুকোষের ওপর এর যৌগের প্রভাব নিয়ে গবেষণা চলছে, তবে মানুষের ক্ষেত্রে উপকারিতা এখনো প্রমাণিত নয়।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Russulales',
      family: 'Hericiaceae',
      genus: 'Hericium',
      species: 'H. erinaceus',
    },
    physical: {
      size: {
        en: 'Rounded clump 5–40 cm across, with spines 1–5 cm long',
        bn: 'গোলাকার পিণ্ড ৫–৪০ সেমি চওড়া, কাঁটাগুলো ১–৫ সেমি লম্বা',
      },
      weight: {
        en: 'Cultivated heads usually 100–500 g; wild ones can exceed 1 kg',
        bn: 'চাষ করা মাশরুম সাধারণত ১০০–৫০০ গ্রাম; বুনোগুলো ১ কেজিরও বেশি হতে পারে',
      },
      lifespan: {
        en: 'Fruit body lasts a few weeks; mycelium can fruit on the same tree for years',
        bn: 'মাশরুম কয়েক সপ্তাহ টেকে; একই গাছে মাইসেলিয়াম বছরের পর বছর মাশরুম দেয়',
      },
      features: {
        en: [
          'Single white mass of hanging, icicle-like spines',
          'Turns yellowish-brown with age',
          'No cap or gills — spores form on the spines',
        ],
        bn: [
          'ঝুলন্ত বরফ-ঝুরির মতো কাঁটায় ভরা একটি সাদা পিণ্ড',
          'বয়স বাড়লে হলদে-বাদামি হয়ে যায়',
          'টুপি বা গিল নেই — কাঁটার গায়েই রেণু তৈরি হয়',
        ],
      },
    },
    habitat: {
      en: 'Wounds and dead parts of old oak, beech and other broadleaf trees in mature forests',
      bn: 'পরিণত বনে পুরোনো ওক, বিচ ও অন্যান্য চওড়া পাতার গাছের ক্ষতস্থান ও মরা অংশ',
    },
    habitats: ['temperate-forest', 'urban-farmland'],
    regions: ['europe', 'north-america', 'east-asia'],
    distribution: {
      en: 'Widespread but scattered across the temperate Northern Hemisphere — Europe, North America and East Asia.',
      bn: 'উত্তর গোলার্ধের নাতিশীতোষ্ণ অঞ্চলে — ইউরোপ, উত্তর আমেরিকা ও পূর্ব এশিয়ায় — বিস্তৃত হলেও বিক্ষিপ্তভাবে পাওয়া যায়।',
    },
    climate: {
      en: 'Temperate; fruits in late summer and autumn',
      bn: 'নাতিশীতোষ্ণ; গ্রীষ্মের শেষ ও শরৎকালে গজায়',
    },
    diet: {
      en: 'Saprotrophic and weakly parasitic, causing white rot in hardwood',
      bn: 'মৃতজীবী ও মৃদু পরজীবী; শক্ত কাঠে সাদা পচন ঘটায়',
    },
    ecologicalRole: {
      en: 'Decays heartwood of old trees, helping form hollows used by birds and bats.',
      bn: 'পুরোনো গাছের অন্তঃকাঠ পচিয়ে কোটর তৈরিতে সাহায্য করে, যা পাখি ও বাদুড় ব্যবহার করে।',
    },
    behavior: {
      en: 'Often reappears on the same tree year after year, usually high up on a trunk wound.',
      bn: 'প্রায়ই একই গাছে বছরের পর বছর ফিরে আসে, সাধারণত কাণ্ডের উঁচু কোনো ক্ষতস্থানে।',
    },
    range: {
      native: [
        [50.0, 10.0],
        [45.0, 2.0],
        [51.5, -1.0],
        [42.0, -80.0],
        [37.5, 127.5],
        [36.0, 138.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Felling of old trees and removal of dead wood', 'Loss of ancient broadleaf woodland'],
        bn: ['পুরোনো গাছ কাটা ও মরা কাঠ সরিয়ে ফেলা', 'প্রাচীন চওড়া পাতার বনভূমি কমে যাওয়া'],
      },
      initiatives: {
        en: ['Legally protected in the UK and listed on several European national red lists', 'Cultivation reduces collecting pressure on wild fruit bodies'],
        bn: ['যুক্তরাজ্যে আইনত সুরক্ষিত এবং ইউরোপের কয়েকটি দেশের লাল তালিকাভুক্ত', 'চাষের ফলে বুনো মাশরুম সংগ্রহের চাপ কমে'],
      },
    },
    facts: {
      en: [
        'Cooked lion’s mane is often compared to crab or lobster meat.',
        'Despite being widespread, it is rare in many European countries.',
        'Never eat wild mushrooms without expert identification, and leave rare wild lion’s mane where it grows.',
      ],
      bn: [
        'রান্না করা লায়ন্স মেনের স্বাদকে প্রায়ই কাঁকড়া বা গলদা চিংড়ির মাংসের সঙ্গে তুলনা করা হয়।',
        'বিস্তৃত এলাকায় পাওয়া গেলেও ইউরোপের অনেক দেশে এটি দুর্লভ।',
        'বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনো বুনো মাশরুম খাবেন না, আর দুর্লভ বুনো লায়ন্স মেন যেখানে জন্মায় সেখানেই রেখে দিন।',
      ],
    },
    related: ['reishi', 'shiitake', 'cordyceps-militaris'],
  },
  {
    id: 'wood-ear-mushroom',
    commonName: { en: 'Wood Ear Mushroom', bn: 'কান মাশরুম' },
    scientificName: 'Auricularia cornea',
    altNames: {
      en: ['Cloud Ear Fungus', 'Hairy Wood Ear', 'Black Fungus', 'Mu Er'],
      bn: ['কানছাতা', 'লোমশ কান মাশরুম', 'কালো ছত্রাক', 'মু-এর'],
    },
    synonyms: ['Auricularia polytricha'],
    category: 'fungi',
    wikiTitle: 'Auricularia cornea',
    description: {
      en: 'The wood ear is a rubbery, ear-shaped jelly fungus that grows on dead branches in warm, humid forests. It has little flavour but a pleasant crunchy texture and is widely used in Chinese and Southeast Asian soups and stir-fries. In Bangladesh it is cultivated on sawdust bags as "kan mushroom" (ear mushroom) and can be sold dried.',
      bn: 'কান মাশরুম রাবারের মতো নরম, কানের আকৃতির একটি জেলি-ছত্রাক, যা উষ্ণ ও আর্দ্র বনে মরা ডালে জন্মায়। এর নিজস্ব স্বাদ তেমন নেই, তবে কচকচে গঠনের জন্য চীনা ও দক্ষিণ-পূর্ব এশীয় স্যুপ ও ভাজিতে এটি ব্যাপকভাবে ব্যবহৃত হয়। বাংলাদেশে কাঠের গুঁড়ার ব্যাগে "কান মাশরুম" নামে এর চাষ হয় এবং শুকিয়ে বিক্রি করা যায়।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Auriculariales',
      family: 'Auriculariaceae',
      genus: 'Auricularia',
      species: 'A. cornea',
    },
    physical: {
      size: {
        en: 'Ear- or cup-shaped fruit bodies 3–15 cm across and 1–2 mm thick',
        bn: 'কান বা পেয়ালার মতো মাশরুম ৩–১৫ সেমি চওড়া এবং ১–২ মিমি পুরু',
      },
      weight: {
        en: 'A few grams each; dried wood ear swells several times its weight in water',
        bn: 'একেকটি কয়েক গ্রাম; শুকনো কান মাশরুম পানিতে ভেজালে ওজনের কয়েক গুণ ফুলে ওঠে',
      },
      lifespan: {
        en: 'Fruit bodies can dry out and revive after rain several times',
        bn: 'মাশরুম শুকিয়ে গিয়ে বৃষ্টির পর আবার সতেজ হয়ে উঠতে পারে, কয়েকবার',
      },
      features: {
        en: [
          'Rubbery, gelatinous, ear-shaped body',
          'Upper surface covered in fine hairs; underside smooth and brown to purplish',
          'Grows in clusters along dead branches',
        ],
        bn: [
          'রাবারের মতো, জেলিসদৃশ কানের আকৃতির দেহ',
          'ওপরের পৃষ্ঠে মিহি লোম; নিচের দিক মসৃণ, বাদামি থেকে বেগুনি',
          'মরা ডাল বরাবর গুচ্ছে গুচ্ছে জন্মায়',
        ],
      },
    },
    habitat: {
      en: 'Dead branches and logs of broadleaf trees in tropical and subtropical forests; farmed on sawdust bags',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় বনে চওড়া পাতার গাছের মরা ডাল ও গুঁড়ি; কাঠের গুঁড়ার ব্যাগে চাষ হয়',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['east-asia', 'southeast-asia', 'south-asia'],
    distribution: {
      en: 'Tropical and subtropical regions worldwide, especially southern China and Southeast Asia; cultivated in Bangladesh.',
      bn: 'বিশ্বের ক্রান্তীয় ও উপক্রান্তীয় অঞ্চল, বিশেষ করে দক্ষিণ চীন ও দক্ষিণ-পূর্ব এশিয়া; বাংলাদেশে চাষ হয়।',
    },
    climate: {
      en: 'Warm and humid; fruits best at about 20–30 °C after rain',
      bn: 'উষ্ণ ও আর্দ্র; বৃষ্টির পর প্রায় ২০–৩০ ডিগ্রি সেলসিয়াসে ভালো জন্মায়',
    },
    diet: {
      en: 'Saprotrophic — it decomposes dead wood',
      bn: 'মৃতজীবী — মরা কাঠ পচিয়ে পুষ্টি নেয়',
    },
    ecologicalRole: {
      en: 'Helps break down fallen branches, recycling nutrients in forests.',
      bn: 'পড়ে থাকা ডালপালা পচিয়ে বনের পুষ্টিচক্র সচল রাখে।',
    },
    behavior: {
      en: 'Shrivels hard and dry in drought and swells back to a soft, jelly-like state when wet.',
      bn: 'খরায় শক্ত হয়ে কুঁচকে যায় এবং ভিজলে আবার নরম জেলির মতো হয়ে ফুলে ওঠে।',
    },
    range: {
      native: [
        [23.0, 113.0],
        [25.0, 102.0],
        [13.7, 100.5],
        [14.6, 121.0],
        [-6.5, 107.0],
        [21.0, 105.8],
      ],
      introduced: [[23.85, 90.26]],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Few threats — common and widely cultivated', 'Loss of tropical forests reduces wild populations locally'],
        bn: ['তেমন হুমকি নেই — সাধারণ ও ব্যাপকভাবে চাষকৃত', 'ক্রান্তীয় বন ধ্বংসে স্থানীয়ভাবে বুনো সংখ্যা কমছে'],
      },
      initiatives: {
        en: ['Mushroom Development Institute, Savar, provides spawn and training', 'Sawdust-bag cultivation using timber-mill waste'],
        bn: ['সাভারের মাশরুম উন্নয়ন ইনস্টিটিউট বীজ ও প্রশিক্ষণ দেয়', 'করাতকলের উচ্ছিষ্ট কাঠের গুঁড়া দিয়ে ব্যাগে চাষ'],
      },
    },
    facts: {
      en: [
        'Wood ear fungi were among the first mushrooms cultivated in China, over 1,000 years ago.',
        'Dried wood ear can swell to several times its size when soaked.',
        'Never eat wild mushrooms without expert identification — and do not leave soaked wood ear at room temperature for long, as spoiled fungus can cause serious food poisoning.',
      ],
      bn: [
        'চীনে ১,০০০ বছরেরও আগে যেসব মাশরুমের চাষ শুরু হয়, কান মাশরুম তাদের অন্যতম।',
        'শুকনো কান মাশরুম পানিতে ভেজালে কয়েক গুণ বড় হয়ে যায়।',
        'বিশেষজ্ঞের শনাক্তকরণ ছাড়া কখনো বুনো মাশরুম খাবেন না — আর ভেজানো কান মাশরুম বেশিক্ষণ ঘরের তাপমাত্রায় ফেলে রাখবেন না, নষ্ট হলে মারাত্মক খাদ্যে বিষক্রিয়া হতে পারে।',
      ],
    },
    related: ['shiitake', 'oyster-mushroom', 'straw-mushroom'],
  },
];
