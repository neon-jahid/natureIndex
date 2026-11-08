import type { Species } from '@/types';

export const fungi: Species[] = [
  {
    id: 'fly-agaric',
    commonName: { en: 'Fly Agaric', bn: 'ফ্লাই অ্যাগারিক' },
    scientificName: 'Amanita muscaria',
    altNames: {
      en: ['Fly Amanita', 'Toadstool', 'Red Mushroom'],
      bn: ['লাল ব্যাঙের ছাতা', 'বিষাক্ত মাশরুম', 'ফ্লাই আমানিটা'],
    },
    synonyms: ['Agaricus muscarius'],
    category: 'fungi',
    wikiTitle: 'Amanita muscaria',
    description: {
      en: 'The fly agaric is the classic fairy-tale toadstool: a bright red cap dotted with white warts on a white stem. It is POISONOUS — it contains ibotenic acid and muscimol, which cause vomiting, confusion, hallucinations and seizures, and it must never be eaten. It grows in partnership with the roots of birch, pine and spruce trees in the cooler forests of the Northern Hemisphere, and has spread to the Southern Hemisphere with pine plantations.',
      bn: 'ফ্লাই অ্যাগারিক রূপকথার বইয়ে আঁকা চেনা ব্যাঙের ছাতা — সাদা ডাঁটার ওপর সাদা ফুটকিওয়ালা টকটকে লাল টুপি। এটি বিষাক্ত! এতে আইবোটেনিক অ্যাসিড ও মাসিমল থাকে, যা বমি, বিভ্রান্তি, হ্যালুসিনেশন ও খিঁচুনি ঘটায় — তাই কোনোভাবেই খাওয়া উচিত নয়। উত্তর গোলার্ধের শীতল বনে এটি বার্চ, পাইন ও স্প্রুস গাছের শিকড়ের সঙ্গে মিলেমিশে জন্মায়; পাইন বাগানের সঙ্গে এটি দক্ষিণ গোলার্ধেও ছড়িয়ে পড়েছে।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Amanitaceae',
      genus: 'Amanita',
      species: 'A. muscaria',
    },
    physical: {
      size: {
        en: 'Cap 8–20 cm across (occasionally up to 30 cm); stem 5–20 cm tall',
        bn: 'টুপি ৮–২০ সেমি চওড়া (কখনো ৩০ সেমি পর্যন্ত); ডাঁটা ৫–২০ সেমি লম্বা',
      },
      weight: {
        en: 'A mature mushroom typically weighs around 50–200 g',
        bn: 'একটি পরিণত মাশরুমের ওজন সাধারণত ৫০–২০০ গ্রাম',
      },
      lifespan: {
        en: 'Mushrooms last from several days to about two weeks; the underground mycelium lives for many years with its host tree',
        bn: 'মাশরুমটি কয়েক দিন থেকে প্রায় দুই সপ্তাহ টেকে; মাটির নিচের মাইসেলিয়াম আশ্রয়দাতা গাছের সঙ্গে বহু বছর বেঁচে থাকে',
      },
      features: {
        en: [
          'Bright red to orange cap covered in white, wart-like flakes',
          'White gills and a white stem with a skirt-like ring',
          'Swollen bulb at the base of the stem',
          'Warts can wash off in rain, making it harder to identify',
        ],
        bn: [
          'সাদা আঁচিলের মতো ফুটকিতে ঢাকা উজ্জ্বল লাল থেকে কমলা টুপি',
          'সাদা গিল (ঝালর) এবং ঘাগরার মতো আংটিযুক্ত সাদা ডাঁটা',
          'ডাঁটার গোড়ায় ফোলা কন্দাকার অংশ',
          'বৃষ্টিতে সাদা ফুটকি ধুয়ে যেতে পারে, তখন চেনা কঠিন হয়',
        ],
      },
    },
    habitat: {
      en: 'Temperate and boreal forests, parks and plantations with birch, pine, spruce or fir',
      bn: 'বার্চ, পাইন, স্প্রুস বা ফার গাছযুক্ত নাতিশীতোষ্ণ ও তুন্দ্রা-সংলগ্ন (বোরিয়াল) বন, পার্ক ও বাগান',
    },
    habitats: ['temperate-forest', 'mountain'],
    regions: ['europe', 'north-america', 'east-asia', 'south-asia', 'oceania', 'africa', 'south-america'],
    distribution: {
      en: 'Native across the temperate and boreal Northern Hemisphere, including Europe, northern Asia, the Himalaya and North America; introduced to Australia, New Zealand, South Africa and South America with pine plantations.',
      bn: 'ইউরোপ, উত্তর এশিয়া, হিমালয় ও উত্তর আমেরিকাসহ উত্তর গোলার্ধের নাতিশীতোষ্ণ ও শীতল অঞ্চলের স্থানীয় ছত্রাক; পাইন বাগানের মাধ্যমে অস্ট্রেলিয়া, নিউজিল্যান্ড, দক্ষিণ আফ্রিকা ও দক্ষিণ আমেরিকায় ছড়িয়েছে।',
    },
    climate: {
      en: 'Cool temperate to subarctic climates; fruits in late summer and autumn',
      bn: 'শীতল নাতিশীতোষ্ণ থেকে উপমেরু জলবায়ু; গ্রীষ্মের শেষে ও শরতে মাশরুম গজায়',
    },
    diet: {
      en: 'Mycorrhizal — its mycelium wraps tree roots, trading soil minerals and water for sugars made by the tree',
      bn: 'মাইকোরাইজাল — এর মাইসেলিয়াম গাছের শিকড় জড়িয়ে থাকে; মাটি থেকে খনিজ ও পানি গাছকে দেয় এবং বিনিময়ে গাছের তৈরি শর্করা নেয়',
    },
    ecologicalRole: {
      en: 'Helps its host trees grow by extending their root systems and improving nutrient uptake, and links trees through underground fungal networks.',
      bn: 'গাছের শিকড়ের নাগাল বাড়িয়ে পুষ্টি শোষণে সাহায্য করে এর বৃদ্ধিতে ভূমিকা রাখে, এবং মাটির নিচের ছত্রাক-জালের মাধ্যমে গাছে গাছে সংযোগ তৈরি করে।',
    },
    behavior: {
      en: 'Mushrooms push up through the soil inside a white egg-like veil, which breaks into the warts on the cap. Spores are released from the gills and carried by wind.',
      bn: 'মাশরুম প্রথমে ডিমের মতো সাদা আবরণে মোড়া অবস্থায় মাটি ফুঁড়ে বের হয়; আবরণ ফেটে টুপির সাদা ফুটকিগুলো তৈরি হয়। গিল থেকে রেণু (স্পোর) ঝরে পড়ে এবং বাতাসে ছড়ায়।',
    },
    range: {
      native: [
        [60.0, 15.0],
        [51.0, 10.0],
        [56.5, -3.5],
        [60.0, 100.0],
        [45.0, -72.0],
        [61.0, -150.0],
        [36.5, 138.0],
        [31.5, 77.0],
      ],
      introduced: [
        [-38.5, 176.0],
        [-37.5, 145.5],
        [-34.0, 19.0],
        [-37.0, -72.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Locally, loss of host forests', 'Few threats overall — it is common and widespread'],
        bn: ['কিছু এলাকায় আশ্রয়দাতা বন হারানো', 'সামগ্রিকভাবে তেমন হুমকি নেই — এটি সাধারণ ও বহুল বিস্তৃত'],
      },
      initiatives: {
        en: ['Public education on poisonous mushrooms', 'Fungal biodiversity surveys'],
        bn: ['বিষাক্ত মাশরুম সম্পর্কে জনসচেতনতা', 'ছত্রাক জীববৈচিত্র্য জরিপ'],
      },
    },
    facts: {
      en: [
        'Its name comes from the old European custom of soaking it in milk to kill flies.',
        'It is poisonous: never eat wild mushrooms unless an expert has identified them.',
        'Its red-and-white look inspired countless fairy tales, Christmas decorations and the Super Mario mushroom.',
      ],
      bn: [
        'মাছি মারার জন্য দুধে ভিজিয়ে রাখার পুরোনো ইউরোপীয় প্রথা থেকে এর নাম “ফ্লাই অ্যাগারিক”।',
        'এটি বিষাক্ত — বিশেষজ্ঞ শনাক্ত না করা পর্যন্ত কোনো বুনো মাশরুম খাওয়া উচিত নয়।',
        'এর লাল-সাদা চেহারা অসংখ্য রূপকথা, বড়দিনের সাজসজ্জা ও সুপার মারিও গেমের মাশরুমের অনুপ্রেরণা।',
      ],
    },
    related: ['honey-fungus', 'oyster-mushroom', 'zombie-ant-fungus'],
  },
  {
    id: 'oyster-mushroom',
    commonName: { en: 'Oyster Mushroom', bn: 'ঝিনুক মাশরুম' },
    scientificName: 'Pleurotus ostreatus',
    altNames: {
      en: ['Pearl Oyster Mushroom', 'Tree Oyster', 'Oyster Fungus'],
      bn: ['অয়েস্টার মাশরুম', 'মাশরুম', 'ব্যাঙের ছাতা'],
    },
    synonyms: ['Agaricus ostreatus'],
    category: 'fungi',
    wikiTitle: 'Pleurotus ostreatus',
    description: {
      en: 'The oyster mushroom is an edible fungus named for its fan- or oyster-shaped cap. In the wild it grows in overlapping shelves on dead and dying hardwood trees, breaking down tough wood. It is one of the easiest mushrooms to cultivate and is the most widely farmed mushroom in Bangladesh, where it is grown on rice straw and sawdust in small household units, giving many families — especially women and young people — an extra source of income and nutrition.',
      bn: 'ঝিনুক মাশরুম একটি খাওয়ার উপযোগী ছত্রাক; ঝিনুক বা পাখার মতো আকারের টুপির জন্য এর এই নাম। প্রকৃতিতে এটি মরা বা মৃতপ্রায় গাছের গায়ে থাকে থাকে তাকের মতো জন্মায় এবং শক্ত কাঠ পচিয়ে ফেলে। এটি চাষ করা সবচেয়ে সহজ মাশরুমগুলোর একটি এবং বাংলাদেশে সবচেয়ে বেশি চাষ হওয়া মাশরুম। খড় ও কাঠের গুঁড়া দিয়ে ঘরেই এর চাষ করা যায় — ফলে অনেক পরিবার, বিশেষ করে নারী ও তরুণেরা, বাড়তি আয় ও পুষ্টির উৎস পাচ্ছেন।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Pleurotaceae',
      genus: 'Pleurotus',
      species: 'P. ostreatus',
    },
    physical: {
      size: {
        en: 'Caps 5–25 cm across, growing in overlapping clusters; stem short or absent',
        bn: 'টুপি ৫–২৫ সেমি চওড়া, থোকায় থোকায় একটির ওপর আরেকটি জন্মায়; ডাঁটা খাটো বা প্রায় নেই',
      },
      weight: {
        en: 'A single cluster can weigh from a few hundred grams to over 1 kg',
        bn: 'একেকটি থোকার ওজন কয়েকশো গ্রাম থেকে ১ কেজিরও বেশি হতে পারে',
      },
      lifespan: {
        en: 'Mushrooms mature in about 3–7 days; the mycelium lives as long as it has wood to digest',
        bn: 'মাশরুম ৩–৭ দিনে পরিণত হয়; কাঠ থাকা পর্যন্ত মাইসেলিয়াম বেঁচে থাকে',
      },
      features: {
        en: [
          'Fan- or oyster-shaped cap, white, grey, beige or brownish',
          'White gills running down onto the short stem',
          'Grows in layered shelves on wood',
          'Mild, slightly sweet smell, sometimes likened to aniseed',
        ],
        bn: [
          'পাখা বা ঝিনুকের মতো টুপি — সাদা, ধূসর, হালকা বাদামি বা বাদামি রঙের',
          'সাদা গিল খাটো ডাঁটা বেয়ে নিচে নেমে আসে',
          'কাঠের গায়ে তাকের মতো স্তরে স্তরে জন্মায়',
          'হালকা মিষ্টি গন্ধ, অনেকটা মৌরির মতো',
        ],
      },
    },
    habitat: {
      en: 'Dead or weakened broadleaf trees in temperate and subtropical forests; farmed indoors on straw, sawdust and other crop waste',
      bn: 'নাতিশীতোষ্ণ ও উপক্রান্তীয় বনে মরা বা দুর্বল চওড়া পাতার গাছ; ঘরের ভেতরে খড়, কাঠের গুঁড়া ও অন্যান্য ফসলের উচ্ছিষ্টে চাষ করা হয়',
    },
    habitats: ['temperate-forest', 'tropical-forest', 'urban-farmland'],
    regions: ['europe', 'north-america', 'east-asia', 'south-asia'],
    distribution: {
      en: 'Grows wild in temperate and subtropical forests of Europe, Asia and North America; cultivated worldwide, including across Bangladesh.',
      bn: 'ইউরোপ, এশিয়া ও উত্তর আমেরিকার নাতিশীতোষ্ণ ও উপক্রান্তীয় বনে প্রাকৃতিকভাবে জন্মায়; বাংলাদেশসহ সারা বিশ্বে এর চাষ হয়।',
    },
    climate: {
      en: 'Cool to mild, humid conditions; many strains fruit best at 15–25 °C',
      bn: 'শীতল থেকে মৃদু, আর্দ্র পরিবেশ; বেশিরভাগ জাত ১৫–২৫ ডিগ্রি সেলসিয়াসে ভালো ফলন দেয়',
    },
    diet: {
      en: 'Saprotrophic white-rot fungus — it digests lignin and cellulose in dead wood. It is also carnivorous: its mycelium paralyses and digests tiny nematode worms for extra nitrogen',
      bn: 'মৃতজীবী সাদা-পচন ছত্রাক — মরা কাঠের লিগনিন ও সেলুলোজ হজম করে। এটি মাংসাশীও বটে: এর মাইসেলিয়াম ক্ষুদ্র নেমাটোড কৃমিকে অবশ করে হজম করে বাড়তি নাইট্রোজেন সংগ্রহ করে',
    },
    ecologicalRole: {
      en: 'An important wood decomposer that recycles nutrients back into the forest soil. It is also being studied for cleaning up oil and pesticide pollution.',
      bn: 'কাঠ পচিয়ে বনের মাটিতে পুষ্টি ফিরিয়ে দেওয়া গুরুত্বপূর্ণ বিয়োজক। তেল ও কীটনাশক দূষণ পরিষ্কারে এর ব্যবহার নিয়েও গবেষণা চলছে।',
    },
    behavior: {
      en: 'Fruits in cool, damp weather, often in autumn and winter in the wild. Spores drop from the gills in huge numbers, sometimes leaving white spore dust on the wood below.',
      bn: 'শীতল ও স্যাঁতসেঁতে আবহাওয়ায়, প্রকৃতিতে সাধারণত শরৎ ও শীতকালে মাশরুম গজায়। গিল থেকে বিপুল পরিমাণ রেণু ঝরে, কখনো নিচের কাঠে সাদা গুঁড়ার মতো জমে থাকে।',
    },
    range: {
      native: [
        [50.0, 10.0],
        [52.0, 0.0],
        [45.0, 25.0],
        [42.0, -75.0],
        [47.0, -122.0],
        [37.0, 127.5],
        [35.0, 110.0],
        [30.5, 79.0],
      ],
      introduced: [
        [23.85, 90.26],
        [-34.0, 151.0],
        [-23.5, -46.6],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Removal of dead wood from managed forests', 'Few threats overall — common and widely cultivated'],
        bn: ['ব্যবস্থাপিত বন থেকে মরা কাঠ সরিয়ে ফেলা', 'সামগ্রিকভাবে তেমন হুমকি নেই — সাধারণ ও ব্যাপকভাবে চাষকৃত'],
      },
      initiatives: {
        en: ['Mushroom Development Institute in Savar, Bangladesh, trains farmers and supplies spawn', 'Promotion of mushroom farming for nutrition and rural income'],
        bn: ['সাভারের মাশরুম উন্নয়ন ইনস্টিটিউট কৃষকদের প্রশিক্ষণ ও বীজ (স্পন) সরবরাহ করে', 'পুষ্টি ও গ্রামীণ আয় বাড়াতে মাশরুম চাষে উৎসাহ প্রদান'],
      },
    },
    facts: {
      en: [
        'It is one of the few carnivorous mushrooms — it traps and eats microscopic worms.',
        'It naturally contains lovastatin, a compound used in cholesterol-lowering medicines.',
        'In Bangladesh it is often grown in bags of rice straw hanging inside homes.',
      ],
      bn: [
        'এটি হাতে গোনা কয়েকটি মাংসাশী মাশরুমের একটি — আণুবীক্ষণিক কৃমি ধরে খায়।',
        'এতে প্রাকৃতিকভাবে লোভাস্ট্যাটিন থাকে, যা কোলেস্টেরল কমানোর ওষুধে ব্যবহৃত হয়।',
        'বাংলাদেশে প্রায়ই ঘরের ভেতরে ঝোলানো খড়ভর্তি পলিব্যাগে এর চাষ করা হয়।',
      ],
    },
    related: ['honey-fungus', 'fly-agaric', 'zombie-ant-fungus'],
  },
  {
    id: 'zombie-ant-fungus',
    commonName: { en: 'Zombie-Ant Fungus', bn: 'জম্বি-পিঁপড়া ছত্রাক' },
    scientificName: 'Ophiocordyceps unilateralis',
    altNames: {
      en: ['Zombie Fungus', 'Cordyceps', 'Ant-infecting Fungus'],
      bn: ['জম্বি ছত্রাক', 'কর্ডিসেপস', 'পিঁপড়াখেকো ছত্রাক'],
    },
    synonyms: ['Cordyceps unilateralis', 'Torrubia unilateralis'],
    category: 'fungi',
    wikiTitle: 'Ophiocordyceps unilateralis',
    description: {
      en: 'The zombie-ant fungus is a parasitic fungus that takes over the bodies of carpenter ants in tropical forests. Once infected, an ant leaves its colony, climbs a plant and clamps its jaws onto the underside of a leaf in a final “death grip”. The fungus then kills the ant and grows a stalk from the back of its head, raining spores down onto the forest floor to infect more ants. It is a striking example of a parasite manipulating its host’s behaviour.',
      bn: 'জম্বি-পিঁপড়া ছত্রাক একটি পরজীবী ছত্রাক, যা ক্রান্তীয় বনের কাঠ-পিঁপড়ার (কার্পেন্টার অ্যান্ট) দেহ দখল করে নেয়। সংক্রমিত পিঁপড়া দল ছেড়ে গাছে চড়ে এবং পাতার নিচের শিরায় চোয়াল দিয়ে শেষবারের মতো শক্ত কামড় বসায় — যাকে বলা হয় “ডেথ গ্রিপ”। এরপর ছত্রাকটি পিঁপড়াকে মেরে ফেলে এবং এর মাথার পেছন থেকে একটি ডাঁটা গজায়, যেখান থেকে রেণু নিচে ঝরে আরও পিঁপড়াকে সংক্রমিত করে। পরজীবী কীভাবে আশ্রয়দাতার আচরণ নিয়ন্ত্রণ করতে পারে, এটি তার বিস্ময়কর উদাহরণ।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Ascomycota',
      class: 'Sordariomycetes',
      order: 'Hypocreales',
      family: 'Ophiocordycipitaceae',
      genus: 'Ophiocordyceps',
      species: 'O. unilateralis',
    },
    physical: {
      size: {
        en: 'Spore-bearing stalk usually 1–3 cm long, growing from an ant about 1 cm in size',
        bn: 'রেণুধারী ডাঁটা সাধারণত ১–৩ সেমি লম্বা, যা প্রায় ১ সেমি আকারের পিঁপড়ার দেহ থেকে গজায়',
      },
      weight: {
        en: 'Microscopic threads inside the host; the whole fungal body weighs only a fraction of a gram',
        bn: 'আশ্রয়দাতার দেহের ভেতরে আণুবীক্ষণিক সুতার মতো; পুরো ছত্রাকদেহের ওজন এক গ্রামের ভগ্নাংশমাত্র',
      },
      lifespan: {
        en: 'An infected ant typically dies within about one to three weeks; the stalk then develops over days to weeks and can keep releasing spores for a long time',
        bn: 'সংক্রমিত পিঁপড়া সাধারণত এক থেকে তিন সপ্তাহের মধ্যে মারা যায়; এরপর কয়েক দিন থেকে কয়েক সপ্তাহে ডাঁটা গজায় এবং দীর্ঘ সময় ধরে রেণু ছড়াতে পারে',
      },
      features: {
        en: [
          'Single slender stalk growing from the back of the ant’s head',
          'A swollen spore-producing cushion partway along the stalk',
          'Fungal threads anchoring the dead ant to the leaf',
          'Many closely related “cryptic” species, each specialised on one ant species',
        ],
        bn: [
          'পিঁপড়ার মাথার পেছন থেকে বের হওয়া একটি সরু ডাঁটা',
          'ডাঁটার মাঝামাঝি ফোলা রেণু-উৎপাদক অংশ',
          'মৃত পিঁপড়াকে পাতার সঙ্গে আটকে রাখা ছত্রাকের সুতা',
          'অনেকগুলো ঘনিষ্ঠ “গোপন” প্রজাতি রয়েছে, প্রত্যেকটি নির্দিষ্ট এক প্রজাতির পিঁপড়ায় বিশেষায়িত',
        ],
      },
    },
    habitat: {
      en: 'Humid tropical rainforest understorey, on leaves roughly 25 cm above the forest floor',
      bn: 'আর্দ্র ক্রান্তীয় রেইনফরেস্টের নিচের স্তর, মাটি থেকে প্রায় ২৫ সেমি উঁচুতে পাতার গায়ে',
    },
    habitats: ['tropical-forest'],
    regions: ['southeast-asia', 'south-america'],
    distribution: {
      en: 'Found in tropical forests worldwide, with well-studied populations in Thailand, Malaysia, Borneo and Brazil (Amazon and Atlantic Forest).',
      bn: 'বিশ্বের ক্রান্তীয় বনাঞ্চলে পাওয়া যায়; থাইল্যান্ড, মালয়েশিয়া, বোর্নিও ও ব্রাজিলে (আমাজন ও আটলান্টিক বন) এর ওপর বিস্তর গবেষণা হয়েছে।',
    },
    climate: {
      en: 'Hot, very humid tropical climate; needs stable temperature and moisture near the forest floor',
      bn: 'উষ্ণ ও অতি আর্দ্র ক্রান্তীয় জলবায়ু; বনের মেঝের কাছে স্থিতিশীল তাপমাত্রা ও আর্দ্রতা প্রয়োজন',
    },
    diet: {
      en: 'Parasitic (entomopathogenic) — it feeds on the living tissues of carpenter ants, then on the dead body',
      bn: 'পরজীবী (কীট-রোগজীবাণু) — কাঠ-পিঁপড়ার জীবন্ত দেহকলা থেকে পুষ্টি নেয়, পরে মৃতদেহ থেকে',
    },
    ecologicalRole: {
      en: 'Acts as a natural control on carpenter ant populations, helping keep any one ant species from dominating the forest.',
      bn: 'কাঠ-পিঁপড়ার সংখ্যা প্রাকৃতিকভাবে নিয়ন্ত্রণ করে, ফলে বনে কোনো এক প্রজাতির পিঁপড়া একচ্ছত্র আধিপত্য বিস্তার করতে পারে না।',
    },
    behavior: {
      en: 'Infected ants bite down on a leaf vein, often around midday, at a height and humidity ideal for the fungus. Spores fall in a “killing field” beneath, where foraging ants pick them up. Healthy ants recognise infected nestmates and carry them far from the colony.',
      bn: 'সংক্রমিত পিঁপড়া প্রায়ই দুপুরের দিকে ছত্রাকের জন্য আদর্শ উচ্চতা ও আর্দ্রতায় পাতার শিরায় কামড় বসায়। নিচে রেণু ঝরে একটি “মরণফাঁদ” তৈরি হয়, যেখান দিয়ে চলার সময় অন্য পিঁপড়া সংক্রমিত হয়। সুস্থ পিঁপড়ারা সংক্রমিত সঙ্গীকে চিনতে পারে এবং দূরে সরিয়ে দেয়।',
    },
    range: {
      native: [
        [14.4, 101.4],
        [18.8, 98.9],
        [5.0, 117.0],
        [-3.1, -60.0],
        [-20.7, -42.9],
        [4.5, 101.4],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Loss of tropical rainforest', 'Changes in forest-floor microclimate from logging and climate change'],
        bn: ['ক্রান্তীয় রেইনফরেস্ট ধ্বংস', 'গাছ কাটা ও জলবায়ু পরিবর্তনে বনের মেঝের অণু-জলবায়ু বদলে যাওয়া'],
      },
      initiatives: {
        en: ['Protection of rainforest reserves', 'Research into its bioactive compounds and host manipulation'],
        bn: ['রেইনফরেস্ট সংরক্ষিত এলাকা রক্ষা', 'এর জৈব-সক্রিয় যৌগ ও আশ্রয়দাতার আচরণ নিয়ন্ত্রণ নিয়ে গবেষণা'],
      },
    },
    facts: {
      en: [
        'Fossil leaves about 48 million years old show the same death-grip bite marks.',
        'The fungus does not infect people — it is highly specialised to its ant hosts.',
        'It inspired the fictional fungal outbreak in the video game and TV series “The Last of Us”.',
      ],
      bn: [
        'প্রায় ৪ কোটি ৮০ লাখ বছরের পুরোনো জীবাশ্ম পাতাতেও একই “ডেথ গ্রিপ” কামড়ের দাগ পাওয়া গেছে।',
        'এই ছত্রাক মানুষকে সংক্রমিত করে না — এটি কেবল নির্দিষ্ট পিঁপড়ার ওপর বিশেষায়িত।',
        'জনপ্রিয় ভিডিও গেম ও টিভি সিরিজ “দ্য লাস্ট অব আস”-এর কাল্পনিক ছত্রাক মহামারির অনুপ্রেরণা এটি।',
      ],
    },
    related: ['honey-fungus', 'fly-agaric', 'western-honey-bee'],
  },
  {
    id: 'honey-fungus',
    commonName: { en: 'Dark Honey Fungus', bn: 'হানি ফাঙ্গাস' },
    scientificName: 'Armillaria ostoyae',
    altNames: {
      en: ['Honey Fungus', 'Honey Mushroom', 'Humongous Fungus', 'Shoestring Root Rot'],
      bn: ['মধু ছত্রাক', 'হানি মাশরুম', 'দৈত্যাকার ছত্রাক', 'জুতার-ফিতা শিকড়-পচা'],
    },
    synonyms: ['Armillaria solidipes'],
    category: 'fungi',
    wikiTitle: 'Armillaria ostoyae',
    description: {
      en: 'Armillaria ostoyae is a tree-killing fungus that includes one of the largest known living organisms on Earth. In the Malheur National Forest in Oregon, USA, a single genetic individual spreads underground across nearly 10 square kilometres and is estimated to be thousands of years old. Above ground it appears only as clusters of honey-brown mushrooms in autumn; below ground it sends black, bootlace-like strands through the soil from tree to tree, causing root rot in conifers.',
      bn: 'আর্মিলারিয়া অস্টোয়ি একটি গাছ-মারা ছত্রাক, আর এর মধ্যেই রয়েছে পৃথিবীর সবচেয়ে বড় জীবিত জীবগুলোর একটি। যুক্তরাষ্ট্রের অরেগনের ম্যালহিউর জাতীয় বনে একটিমাত্র জিনগত একক মাটির নিচে প্রায় ১০ বর্গকিলোমিটার জুড়ে ছড়িয়ে আছে, এবং ধারণা করা হয় এর বয়স কয়েক হাজার বছর। মাটির ওপরে শুধু শরৎকালে মধু-বাদামি মাশরুমের থোকা দেখা যায়; কিন্তু মাটির নিচে জুতার ফিতার মতো কালো সুতা এক গাছ থেকে আরেক গাছে ছড়িয়ে সরলবর্গীয় গাছে শিকড়-পচা রোগ ঘটায়।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Physalacriaceae',
      genus: 'Armillaria',
      species: 'A. ostoyae',
    },
    physical: {
      size: {
        en: 'Mushroom caps 4–15 cm across; the largest known individual covers about 9.6 km² (965 hectares) underground',
        bn: 'মাশরুমের টুপি ৪–১৫ সেমি চওড়া; সবচেয়ে বড় পরিচিত একক মাটির নিচে প্রায় ৯.৬ বর্গকিলোমিটার (৯৬৫ হেক্টর) জুড়ে বিস্তৃত',
      },
      weight: {
        en: 'The giant Oregon individual is estimated to weigh thousands of tonnes in total, though such estimates are very rough',
        bn: 'অরেগনের দৈত্যাকার এককটির মোট ওজন কয়েক হাজার টন বলে অনুমান করা হয়, যদিও এই হিসাব খুবই আনুমানিক',
      },
      lifespan: {
        en: 'Mushrooms last a week or two; the Oregon individual is estimated at roughly 2,400–8,650 years old',
        bn: 'মাশরুম এক-দুই সপ্তাহ টেকে; অরেগনের এককটির বয়স আনুমানিক ২,৪০০–৮,৬৫০ বছর',
      },
      features: {
        en: [
          'Clustered honey- to brown-coloured caps with dark scales',
          'A white ring (annulus) on the stem',
          'Black, shoestring-like rhizomorphs spreading through soil',
          'White fan-shaped mycelium sheets under the bark of infected trees',
        ],
        bn: [
          'কালচে আঁশযুক্ত মধু থেকে বাদামি রঙের টুপি, থোকায় জন্মায়',
          'ডাঁটায় সাদা আংটি',
          'মাটির ভেতর দিয়ে ছড়ানো জুতার ফিতার মতো কালো রাইজোমর্ফ',
          'আক্রান্ত গাছের বাকলের নিচে পাখার মতো সাদা মাইসেলিয়ামের স্তর',
        ],
      },
    },
    habitat: {
      en: 'Coniferous and mixed temperate forests, on roots and stumps of pine, fir and other trees',
      bn: 'সরলবর্গীয় ও মিশ্র নাতিশীতোষ্ণ বন; পাইন, ফার ও অন্যান্য গাছের শিকড় ও গুঁড়িতে',
    },
    habitats: ['temperate-forest', 'mountain'],
    regions: ['north-america', 'europe', 'east-asia'],
    distribution: {
      en: 'Widespread in the cool temperate forests of North America (especially the Pacific Northwest), Europe and parts of Asia.',
      bn: 'উত্তর আমেরিকা (বিশেষ করে প্রশান্ত মহাসাগরীয় উত্তর-পশ্চিমাঞ্চল), ইউরোপ ও এশিয়ার কিছু অংশের শীতল নাতিশীতোষ্ণ বনে বিস্তৃত।',
    },
    climate: {
      en: 'Cool temperate and montane climates',
      bn: 'শীতল নাতিশীতোষ্ণ ও পার্বত্য জলবায়ু',
    },
    diet: {
      en: 'Parasitic and saprotrophic — it attacks and kills living trees through their roots, then keeps feeding on the dead wood',
      bn: 'পরজীবী ও মৃতজীবী — শিকড়ের মাধ্যমে জীবন্ত গাছ আক্রমণ করে মেরে ফেলে, তারপর মরা কাঠ থেকে পুষ্টি নিতে থাকে',
    },
    ecologicalRole: {
      en: 'A major natural cause of tree death that opens gaps in the forest, creates dead wood for insects and woodpeckers, and recycles nutrients — but it can be a serious pest in timber plantations.',
      bn: 'বনে গাছের মৃত্যুর একটি বড় প্রাকৃতিক কারণ; এতে বনে ফাঁকা জায়গা তৈরি হয়, পোকামাকড় ও কাঠঠোকরার জন্য মরা কাঠ জোগায় এবং পুষ্টি পুনর্চক্রায়ন করে — তবে কাঠের বাগানে এটি মারাত্মক ক্ষতিকর।',
    },
    behavior: {
      en: 'Spreads slowly underground via rhizomorphs, sometimes less than a metre a year, linking whole stands of trees. Mushrooms appear in autumn at the base of infected trees. Like other honey fungi, its mycelium can glow faintly in the dark (“foxfire”).',
      bn: 'রাইজোমর্ফের মাধ্যমে মাটির নিচে ধীরে ধীরে ছড়ায় — কখনো বছরে এক মিটারেরও কম — এবং পুরো এলাকার গাছগুলোকে যুক্ত করে ফেলে। শরৎকালে আক্রান্ত গাছের গোড়ায় মাশরুম গজায়। অন্যান্য হানি ফাঙ্গাসের মতো এর মাইসেলিয়ামও অন্ধকারে মৃদু আলো ছড়াতে পারে (“ফক্সফায়ার”)।',
    },
    range: {
      native: [
        [44.4, -118.6],
        [46.2, -121.5],
        [50.0, -120.0],
        [46.6, 10.2],
        [48.0, 8.0],
        [50.5, 20.0],
        [43.0, 142.5],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Few threats — it is common and often managed as a forest pest'],
        bn: ['তেমন হুমকি নেই — এটি সাধারণ এবং প্রায়ই বনের ক্ষতিকর জীব হিসেবে নিয়ন্ত্রণ করা হয়'],
      },
      initiatives: {
        en: ['Forest health monitoring and root-disease research', 'Planting resistant tree species in affected stands'],
        bn: ['বনের স্বাস্থ্য পর্যবেক্ষণ ও শিকড়-রোগ গবেষণা', 'আক্রান্ত এলাকায় প্রতিরোধী প্রজাতির গাছ লাগানো'],
      },
    },
    facts: {
      en: [
        'The Oregon “humongous fungus” is larger in area than about 1,300 football fields.',
        'Honey mushrooms are eaten in parts of Europe, but only after thorough cooking — raw or undercooked they cause stomach upset, and they are easily confused with poisonous look-alikes.',
        'Its glowing mycelium in rotting wood gave rise to old tales of “foxfire” lights in the forest.',
      ],
      bn: [
        'অরেগনের এই “দৈত্যাকার ছত্রাক” আয়তনে প্রায় ১,৩০০টি ফুটবল মাঠের চেয়েও বড়।',
        'ইউরোপের কিছু দেশে হানি মাশরুম খাওয়া হয়, তবে ভালোভাবে রান্না করে — কাঁচা বা আধাসেদ্ধ খেলে পেটের পীড়া হয়, আর বিষাক্ত অনুরূপ মাশরুমের সঙ্গে সহজেই গুলিয়ে যায়।',
        'পচা কাঠে এর আলো-ছড়ানো মাইসেলিয়াম থেকেই বনে “ফক্সফায়ার” আলোর পুরোনো লোককাহিনির জন্ম।',
      ],
    },
    related: ['giant-sequoia', 'oyster-mushroom', 'fly-agaric', 'blue-whale'],
  },
];
