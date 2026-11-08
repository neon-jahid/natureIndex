import type { Species } from '@/types';

export const marineInvertebrates2: Species[] = [
  {
    id: 'portuguese-man-o-war',
    commonName: { en: 'Portuguese Man o’ War', bn: 'পর্তুগিজ ম্যান-অব-ওয়ার' },
    scientificName: 'Physalia physalis',
    altNames: {
      en: ['Atlantic Portuguese Man o’ War', 'Man-of-war'],
      bn: ['ম্যান-অব-ওয়ার', 'ভাসমান বিষাক্ত জেলি'],
    },
    category: 'marine',
    wikiTitle: 'Portuguese man o\' war',
    description: {
      en: 'The Portuguese man o’ war looks like a jellyfish but is actually a siphonophore — a colony of many specialised individuals called zooids that cannot survive on their own. A gas-filled, blue-purple float keeps it at the surface and acts as a sail, so it drifts wherever wind and currents take it. Beneath hang long tentacles armed with stinging cells that paralyse fish and can give people extremely painful stings.',
      bn: 'পর্তুগিজ ম্যান-অব-ওয়ার দেখতে জেলিফিশের মতো হলেও আসলে এটি একটি সাইফোনোফোর — জুয়িড নামের অনেকগুলো বিশেষায়িত সদস্যের একটি উপনিবেশ, যাদের কেউ একা বাঁচতে পারে না। গ্যাসভরা নীল-বেগুনি ভাসমান থলিটি একে পানির ওপরে ভাসিয়ে রাখে এবং পালের মতো কাজ করে, ফলে বাতাস ও স্রোত যেদিকে নেয় সেদিকেই ভেসে যায়। নিচে ঝুলে থাকে হুলকোষে ভরা লম্বা কর্ষিকা, যা মাছকে অবশ করে দেয় এবং মানুষের শরীরে তীব্র যন্ত্রণাদায়ক দংশন করতে পারে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Hydrozoa',
      order: 'Siphonophorae',
      family: 'Physaliidae',
      genus: 'Physalia',
      species: 'P. physalis',
    },
    physical: {
      size: { en: 'Float up to about 30 cm long; tentacles usually about 10 m, sometimes over 30 m', bn: 'ভাসমান থলি প্রায় ৩০ সেমি পর্যন্ত লম্বা; কর্ষিকা সাধারণত প্রায় ১০ মিটার, কখনো ৩০ মিটারেরও বেশি' },
      weight: { en: 'Usually well under 1 kg', bn: 'সাধারণত ১ কেজির অনেক কম' },
      lifespan: { en: 'Thought to be about a year or less', bn: 'ধারণা করা হয় প্রায় এক বছর বা তার কম' },
      features: {
        en: ['Translucent blue-purple, gas-filled float with a crest-like sail', 'Long, dangling blue tentacles packed with stinging cells', 'Floats are either “left-handed” or “right-handed”, so they sail in different directions'],
        bn: ['ঝুঁটির মতো পালযুক্ত, গ্যাসভরা স্বচ্ছ নীল-বেগুনি ভাসমান থলি', 'হুলকোষে ভরা লম্বা ঝুলন্ত নীল কর্ষিকা', 'থলিগুলো “বাঁহাতি” বা “ডানহাতি” হয়, তাই ভিন্ন ভিন্ন দিকে ভেসে যায়'],
      },
    },
    habitat: {
      en: 'Surface of warm open oceans; often blown onto beaches in large numbers',
      bn: 'উষ্ণ খোলা সমুদ্রের উপরিতল; প্রায়ই বাতাসে দলে দলে সৈকতে এসে পড়ে',
    },
    habitats: ['ocean'],
    regions: ['oceans', 'north-america', 'europe', 'africa', 'oceania'],
    distribution: {
      en: 'Tropical and subtropical waters of the Atlantic, Indian and Pacific Oceans; carried by currents as far as the Gulf Stream, the Azores and occasionally the coasts of Britain.',
      bn: 'আটলান্টিক, ভারত ও প্রশান্ত মহাসাগরের ক্রান্তীয় ও উপক্রান্তীয় জলরাশি; স্রোতে ভেসে উপসাগরীয় স্রোতধারা, আজোরস এবং মাঝেমধ্যে ব্রিটেনের উপকূল পর্যন্ত পৌঁছে যায়।',
    },
    climate: { en: 'Tropical and subtropical seas', bn: 'ক্রান্তীয় ও উপক্রান্তীয় সমুদ্র' },
    diet: {
      en: 'Small fish, fish larvae and other small drifting animals caught on its tentacles',
      bn: 'কর্ষিকায় আটকানো ছোট মাছ, মাছের লার্ভা ও অন্যান্য ক্ষুদ্র ভাসমান প্রাণী',
    },
    ecologicalRole: {
      en: 'A surface predator of small fish, and itself food for loggerhead and leatherback turtles, ocean sunfish and the blue sea slug.',
      bn: 'সমুদ্রের উপরিতলে ছোট মাছের শিকারি; আবার লগারহেড ও চামড়াপিঠ কাছিম, ওশান সানফিশ এবং নীল সামুদ্রিক স্লাগের খাদ্য।',
    },
    behavior: {
      en: 'Has no means of swimming; it drifts with the wind, and can briefly deflate its float to dip below the surface.',
      bn: 'নিজে সাঁতার কাটতে পারে না, বাতাসের টানে ভেসে বেড়ায়; প্রয়োজনে থলির গ্যাস কিছুটা কমিয়ে অল্প সময়ের জন্য পানির নিচে ডুব দিতে পারে।',
    },
    range: {
      native: [
        [25.0, -79.5],
        [18.0, -65.0],
        [38.5, -28.0],
        [21.0, -157.5],
        [-33.8, 151.3],
        [-29.0, 32.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not considered threatened', 'Little is known about how ocean warming affects its numbers'],
        bn: ['বিপন্ন বলে গণ্য নয়', 'সমুদ্র উষ্ণায়ন এর সংখ্যায় কী প্রভাব ফেলে তা খুব কম জানা'],
      },
      initiatives: {
        en: ['Beach warning flags and lifeguard alerts during strandings', 'Public guidance on first aid for stings'],
        bn: ['দলে দলে সৈকতে ভেসে এলে সতর্ক পতাকা ও লাইফগার্ডের সতর্কবার্তা', 'দংশনের প্রাথমিক চিকিৎসা নিয়ে জনসচেতনতা'],
      },
    },
    facts: {
      en: [
        'Even dead specimens washed up on the beach can still sting.',
        'Its float contains a small amount of carbon monoxide along with other gases.',
      ],
      bn: [
        'সতর্কতা: সৈকতে ভেসে আসা মৃত ম্যান-অব-ওয়ারও দংশন করতে পারে।',
        'এর ভাসমান থলির গ্যাসে অন্যান্য গ্যাসের সঙ্গে সামান্য কার্বন মনোক্সাইডও থাকে।',
      ],
    },
    related: ['box-jellyfish', 'moon-jellyfish', 'loggerhead-sea-turtle', 'leatherback-sea-turtle', 'ocean-sunfish'],
  },
  {
    id: 'box-jellyfish',
    commonName: { en: 'Australian Box Jellyfish', bn: 'অস্ট্রেলীয় বাক্স জেলিফিশ' },
    scientificName: 'Chironex fleckeri',
    altNames: {
      en: ['Box Jellyfish', 'Sea Wasp', 'Marine Stinger'],
      bn: ['বাক্স জেলিফিশ', 'বক্স জেলিফিশ', 'সামুদ্রিক বোলতা'],
    },
    category: 'marine',
    wikiTitle: 'Chironex fleckeri',
    description: {
      en: 'Chironex fleckeri is the largest box jellyfish and is widely regarded as one of the most venomous animals on Earth. Its nearly transparent, cube-shaped bell trails up to 15 tentacles from each corner, and their venom can stop a person’s heart within minutes. Unlike true jellyfish it swims actively and has 24 eyes, some of which can form images.',
      bn: 'Chironex fleckeri সবচেয়ে বড় বাক্স জেলিফিশ এবং পৃথিবীর সবচেয়ে বিষাক্ত প্রাণীগুলোর একটি হিসেবে পরিচিত। প্রায় স্বচ্ছ, ঘনকাকৃতির ছাতার প্রতিটি কোণ থেকে ১৫টি পর্যন্ত কর্ষিকা ঝোলে, আর এর বিষে কয়েক মিনিটের মধ্যে মানুষের হৃৎস্পন্দন থেমে যেতে পারে। সাধারণ জেলিফিশের মতো ভেসে না থেকে এরা সক্রিয়ভাবে সাঁতার কাটে এবং এদের ২৪টি চোখ আছে, যার কয়েকটি ছবি দেখতে সক্ষম।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Cubozoa',
      order: 'Chirodropida',
      family: 'Chirodropidae',
      genus: 'Chironex',
      species: 'C. fleckeri',
    },
    physical: {
      size: { en: 'Bell up to about 30 cm across; tentacles up to about 3 m long', bn: 'ছাতা প্রায় ৩০ সেমি পর্যন্ত চওড়া; কর্ষিকা প্রায় ৩ মিটার পর্যন্ত লম্বা' },
      weight: { en: 'Up to about 2 kg', bn: 'প্রায় ২ কেজি পর্যন্ত' },
      lifespan: { en: 'Usually less than a year as a free-swimming adult', bn: 'মুক্ত-সাঁতারু প্রাপ্তবয়স্ক অবস্থায় সাধারণত এক বছরের কম' },
      features: {
        en: ['Pale, almost invisible cube-shaped bell', 'Up to 15 tentacles from each of the four corners', 'Clusters of eyes on each side of the bell — 24 in total'],
        bn: ['ফ্যাকাশে, প্রায় অদৃশ্য ঘনকাকৃতির ছাতা', 'চার কোণের প্রতিটি থেকে ১৫টি পর্যন্ত কর্ষিকা', 'ছাতার চার পাশে গুচ্ছাকারে মোট ২৪টি চোখ'],
      },
    },
    habitat: {
      en: 'Shallow coastal waters, estuaries and beaches near mangroves',
      bn: 'অগভীর উপকূলীয় পানি, মোহনা এবং ম্যানগ্রোভের কাছের সৈকত',
    },
    habitats: ['ocean', 'mangrove'],
    regions: ['oceania', 'southeast-asia'],
    distribution: {
      en: 'Coastal waters of northern Australia, from Western Australia to Queensland, and nearby New Guinea and the Indo-Pacific.',
      bn: 'পশ্চিম অস্ট্রেলিয়া থেকে কুইন্সল্যান্ড পর্যন্ত উত্তর অস্ট্রেলিয়ার উপকূলীয় পানি, সঙ্গে নিকটবর্তী নিউ গিনি ও ভারত-প্রশান্ত অঞ্চল।',
    },
    climate: { en: 'Tropical coastal seas, most common in the wet season', bn: 'ক্রান্তীয় উপকূলীয় সমুদ্র; বর্ষাকালে বেশি দেখা যায়' },
    diet: { en: 'Prawns and small fish', bn: 'চিংড়ি ও ছোট মাছ' },
    ecologicalRole: {
      en: 'A fast-acting predator of shrimp and small fish in shallow tropical waters; some sea turtles eat it unharmed.',
      bn: 'অগভীর ক্রান্তীয় পানিতে চিংড়ি ও ছোট মাছের দ্রুত শিকারি; কিছু সামুদ্রিক কাছিম কোনো ক্ষতি ছাড়াই একে খেয়ে ফেলে।',
    },
    behavior: {
      en: 'Swims actively at up to a few metres per second and steers around obstacles using its eyes; adults appear near shore mainly from about October to May.',
      bn: 'সেকেন্ডে কয়েক মিটার পর্যন্ত বেগে সক্রিয়ভাবে সাঁতার কাটে এবং চোখ দিয়ে বাধা এড়িয়ে চলে; প্রাপ্তবয়স্করা মূলত অক্টোবর থেকে মে মাসের মধ্যে তীরের কাছে আসে।',
    },
    range: {
      native: [
        [-12.4, 130.8],
        [-16.9, 145.8],
        [-12.6, 141.8],
        [-21.9, 114.1],
        [-15.0, 128.0],
        [-9.5, 147.2],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not considered threatened', 'Its biology and population size are poorly studied'],
        bn: ['বিপন্ন বলে গণ্য নয়', 'এর জীবনচক্র ও সংখ্যা নিয়ে গবেষণা খুবই কম'],
      },
      initiatives: {
        en: ['Stinger-resistant nets at popular Queensland beaches', 'Vinegar stations and warning signs on northern Australian beaches'],
        bn: ['কুইন্সল্যান্ডের জনপ্রিয় সৈকতে জেলিফিশ-প্রতিরোধী জাল', 'উত্তর অস্ট্রেলিয়ার সৈকতে ভিনেগার রাখার স্থান ও সতর্কফলক'],
      },
    },
    facts: {
      en: [
        'Pouring vinegar on a sting stops undischarged stinging cells from firing, but medical help is still urgent.',
        'Its venom also destroys skin cells, often leaving permanent scars.',
      ],
      bn: [
        'সতর্কতা: দংশনের জায়গায় ভিনেগার ঢাললে অবশিষ্ট হুলকোষ আর বিষ ছাড়ে না, তবু দ্রুত চিকিৎসা নেওয়া জরুরি।',
        'এর বিষ ত্বকের কোষও নষ্ট করে, ফলে প্রায়ই স্থায়ী দাগ থেকে যায়।',
      ],
    },
    related: ['portuguese-man-o-war', 'moon-jellyfish', 'green-sea-turtle'],
  },
  {
    id: 'moon-jellyfish',
    commonName: { en: 'Moon Jellyfish', bn: 'চাঁদ জেলিফিশ' },
    scientificName: 'Aurelia aurita',
    altNames: {
      en: ['Common Jellyfish', 'Moon Jelly', 'Saucer Jelly'],
      bn: ['সাধারণ জেলিফিশ', 'মুন জেলিফিশ', 'থালা জেলিফিশ'],
    },
    category: 'marine',
    wikiTitle: 'Aurelia aurita',
    description: {
      en: 'The moon jellyfish is one of the most familiar jellyfish, with a clear, saucer-shaped bell and four horseshoe-shaped rings that glow through it. It drifts in coastal waters around much of the world, feeding on plankton with a fringe of short tentacles. Its sting is mild for people, and it is a favourite in public aquariums.',
      bn: 'চাঁদ জেলিফিশ সবচেয়ে পরিচিত জেলিফিশগুলোর একটি; এর স্বচ্ছ থালার মতো ছাতার ভেতর দিয়ে ঘোড়ার নালের মতো চারটি বলয় স্পষ্ট দেখা যায়। পৃথিবীর বহু অঞ্চলের উপকূলীয় পানিতে এরা ভেসে বেড়ায় এবং ছাতার কিনারার ছোট ছোট কর্ষিকা দিয়ে প্লাংকটন ধরে খায়। মানুষের জন্য এর দংশন খুবই মৃদু, আর অ্যাকোয়ারিয়ামে এটি দর্শকদের প্রিয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Scyphozoa',
      order: 'Semaeostomeae',
      family: 'Ulmaridae',
      genus: 'Aurelia',
      species: 'A. aurita',
    },
    physical: {
      size: { en: 'Bell usually 25–40 cm across', bn: 'ছাতা সাধারণত ২৫–৪০ সেমি চওড়া' },
      weight: { en: 'Mostly water; large individuals weigh up to a few kilograms', bn: 'দেহের প্রায় পুরোটাই পানি; বড়গুলোর ওজন কয়েক কেজি পর্যন্ত' },
      lifespan: { en: 'Medusa stage usually several months to about a year; the polyp stage can live for years', bn: 'মেডুসা দশা সাধারণত কয়েক মাস থেকে প্রায় এক বছর; পলিপ দশা বহু বছর বাঁচতে পারে' },
      features: {
        en: ['Translucent, saucer-shaped bell', 'Four horseshoe-shaped reproductive organs visible through the bell', 'Fringe of hundreds of short, fine tentacles'],
        bn: ['স্বচ্ছ, থালার মতো ছাতা', 'ছাতার ভেতর দিয়ে দেখা যায় ঘোড়ার নালের মতো চারটি প্রজনন অঙ্গ', 'কিনারাজুড়ে শত শত ছোট ও সূক্ষ্ম কর্ষিকা'],
      },
    },
    habitat: {
      en: 'Coastal seas, bays, harbours and estuaries',
      bn: 'উপকূলীয় সমুদ্র, উপসাগর, পোতাশ্রয় ও মোহনা',
    },
    habitats: ['ocean'],
    regions: ['oceans', 'europe', 'north-america', 'east-asia'],
    distribution: {
      en: 'Coastal waters of the North Atlantic, including the North and Baltic Seas; closely related moon jellies occur in temperate and tropical seas worldwide.',
      bn: 'উত্তর সাগর ও বাল্টিক সাগরসহ উত্তর আটলান্টিকের উপকূলীয় পানি; ঘনিষ্ঠ আত্মীয় চাঁদ জেলিফিশেরা পৃথিবীজুড়ে নাতিশীতোষ্ণ ও ক্রান্তীয় সমুদ্রে পাওয়া যায়।',
    },
    climate: { en: 'Temperate to subtropical coastal seas', bn: 'নাতিশীতোষ্ণ থেকে উপক্রান্তীয় উপকূলীয় সমুদ্র' },
    diet: {
      en: 'Zooplankton such as copepods, fish eggs and larvae, trapped in mucus on the bell',
      bn: 'কোপিপড, মাছের ডিম ও লার্ভার মতো প্রাণী-প্লাংকটন, যা ছাতার গায়ের পিচ্ছিল শ্লেষ্মায় আটকে যায়',
    },
    ecologicalRole: {
      en: 'Competes with fish for plankton and can form huge blooms; it is a key food of the leatherback sea turtle.',
      bn: 'প্লাংকটন নিয়ে মাছের সঙ্গে প্রতিযোগিতা করে এবং কখনো বিপুল সংখ্যায় একসঙ্গে দেখা দেয়; চামড়াপিঠ কাছিমের অন্যতম প্রধান খাদ্য।',
    },
    behavior: {
      en: 'Drifts with currents, pulsing its bell gently; tiny polyps on the sea floor bud off baby jellyfish called ephyrae.',
      bn: 'ছাতা মৃদুভাবে সংকুচিত-প্রসারিত করে স্রোতের সঙ্গে ভেসে বেড়ায়; সমুদ্রতলের ক্ষুদ্র পলিপ থেকে মুকুলের মতো বাচ্চা জেলিফিশ (এফাইরা) জন্ম নেয়।',
    },
    range: {
      native: [
        [55.0, 3.0],
        [55.0, 15.0],
        [51.0, -3.0],
        [42.0, -69.0],
        [64.0, -22.0],
        [44.0, -9.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened — blooms are increasing in some areas', 'Blooms are favoured by overfishing, nutrient pollution and harbour structures'],
        bn: ['বিপন্ন নয় — কিছু এলাকায় এর অতিবৃদ্ধি বরং বাড়ছে', 'অতিরিক্ত মাছ ধরা, পুষ্টি দূষণ ও পোতাশ্রয়ের স্থাপনা অতিবৃদ্ধিতে সহায়তা করে'],
      },
      initiatives: {
        en: ['Bloom monitoring near power plants and fish farms', 'Research on jellyfish blooms and ocean health'],
        bn: ['বিদ্যুৎকেন্দ্র ও মাছের খামারের কাছে অতিবৃদ্ধির নজরদারি', 'জেলিফিশের অতিবৃদ্ধি ও সমুদ্রের স্বাস্থ্য নিয়ে গবেষণা'],
      },
    },
    facts: {
      en: [
        'Moon jellyfish polyps were flown into space aboard the Space Shuttle Columbia in 1991.',
        'Huge blooms have clogged the seawater intakes of coastal power stations.',
      ],
      bn: [
        '১৯৯১ সালে স্পেস শাটল কলম্বিয়ায় চড়ে চাঁদ জেলিফিশের পলিপ মহাকাশে গিয়েছিল।',
        'বিপুল সংখ্যায় জমে গিয়ে এরা উপকূলীয় বিদ্যুৎকেন্দ্রের সমুদ্রের পানি টানার পাইপ বন্ধ করে দিয়েছে।',
      ],
    },
    related: ['leatherback-sea-turtle', 'portuguese-man-o-war', 'box-jellyfish', 'ocean-sunfish'],
  },
  {
    id: 'american-lobster',
    commonName: { en: 'American Lobster', bn: 'আমেরিকান লবস্টার' },
    scientificName: 'Homarus americanus',
    altNames: {
      en: ['Atlantic Lobster', 'Maine Lobster', 'Canadian Lobster'],
      bn: ['আটলান্টিক লবস্টার', 'মেইন লবস্টার', 'সামুদ্রিক গলদা'],
    },
    category: 'marine',
    wikiTitle: 'American lobster',
    description: {
      en: 'The American lobster is a large, clawed crustacean of the cold north-western Atlantic and the heaviest crustacean in the world. It has one heavy crusher claw and one sharper cutter claw, and is normally greenish-brown, turning red only when cooked. It supports one of North America’s most valuable fisheries, centred on Maine and Atlantic Canada.',
      bn: 'আমেরিকান লবস্টার উত্তর-পশ্চিম আটলান্টিকের ঠান্ডা পানির বড় দাঁড়াওয়ালা খোলসি প্রাণী এবং পৃথিবীর সবচেয়ে ভারী ক্রাস্টেসিয়ান। এর একটি দাঁড়া ভারী, ভেঙে গুঁড়ো করার জন্য, আর অন্যটি ধারালো, কাটার জন্য; জীবিত অবস্থায় রং সবুজাভ-বাদামি, রান্না করলেই কেবল লাল হয়। মেইন ও আটলান্টিক কানাডাকেন্দ্রিক এর আহরণ উত্তর আমেরিকার অন্যতম মূল্যবান মৎস্যসম্পদ।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Malacostraca',
      order: 'Decapoda',
      family: 'Nephropidae',
      genus: 'Homarus',
      species: 'H. americanus',
    },
    physical: {
      size: { en: 'Usually 20–60 cm long', bn: 'সাধারণত ২০–৬০ সেমি লম্বা' },
      weight: { en: 'Usually 0.5–4 kg; record about 20 kg', bn: 'সাধারণত ০.৫–৪ কেজি; রেকর্ড প্রায় ২০ কেজি' },
      lifespan: { en: 'Often several decades; very large lobsters may be over 100 years old', bn: 'প্রায়ই কয়েক দশক; খুব বড় লবস্টারের বয়স ১০০ বছরেরও বেশি হতে পারে' },
      features: {
        en: ['Two unequal claws — a crusher and a cutter', 'Greenish-brown to blue-black shell that turns red when cooked', 'Long antennae and a broad, fan-shaped tail'],
        bn: ['অসমান দুটি দাঁড়া — একটি ভাঙার, অন্যটি কাটার', 'সবুজাভ-বাদামি থেকে নীলচে-কালো খোলস, রান্না করলে লাল হয়', 'লম্বা শুঙ্গ ও চওড়া পাখার মতো লেজ'],
      },
    },
    habitat: {
      en: 'Rocky and muddy sea floor of the continental shelf, from shallow water to about 700 m deep',
      bn: 'মহীসোপানের পাথুরে ও কাদাময় সমুদ্রতল, অগভীর পানি থেকে প্রায় ৭০০ মিটার গভীরতা পর্যন্ত',
    },
    habitats: ['ocean'],
    regions: ['north-america', 'oceans'],
    distribution: {
      en: 'Atlantic coast of North America, from Labrador in Canada south to North Carolina in the United States.',
      bn: 'উত্তর আমেরিকার আটলান্টিক উপকূল, কানাডার ল্যাব্রাডর থেকে দক্ষিণে যুক্তরাষ্ট্রের নর্থ ক্যারোলাইনা পর্যন্ত।',
    },
    climate: { en: 'Cold temperate seas', bn: 'শীতল নাতিশীতোষ্ণ সমুদ্র' },
    diet: {
      en: 'Omnivore — crabs, clams, mussels, sea urchins, worms, fish and some algae',
      bn: 'সর্বভুক — কাঁকড়া, ঝিনুক, শামুক, সি আর্চিন, কেঁচোজাতীয় প্রাণী, মাছ ও কিছু শৈবাল',
    },
    ecologicalRole: {
      en: 'A major bottom predator and scavenger that helps control sea urchins and crabs.',
      bn: 'সমুদ্রতলের প্রধান শিকারি ও আবর্জনাভোজী, যা সি আর্চিন ও কাঁকড়ার সংখ্যা নিয়ন্ত্রণে সাহায্য করে।',
    },
    behavior: {
      en: 'Mostly nocturnal and solitary, sheltering in rock crevices by day; it grows by moulting, and females carry thousands of eggs under the tail for up to a year.',
      bn: 'মূলত নিশাচর ও একাকী; দিনে পাথরের খাঁজে লুকিয়ে থাকে। খোলস বদলে বড় হয়, আর স্ত্রী লবস্টার লেজের নিচে হাজার হাজার ডিম প্রায় এক বছর পর্যন্ত বয়ে বেড়ায়।',
    },
    range: {
      native: [
        [44.0, -68.5],
        [43.0, -70.0],
        [46.5, -63.0],
        [44.5, -63.5],
        [48.5, -58.5],
        [41.3, -71.5],
        [36.5, -75.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Warming seas pushing populations north and collapsing southern stocks', 'Shell disease in warmer waters', 'Heavy fishing pressure'],
        bn: ['সমুদ্রের উষ্ণায়নে উত্তরে সরে যাওয়া এবং দক্ষিণাঞ্চলের মজুত ধসে পড়া', 'উষ্ণ পানিতে খোলসের রোগ', 'অতিরিক্ত আহরণের চাপ'],
      },
      initiatives: {
        en: ['Minimum and maximum size limits on catches', 'V-notching: marking and releasing egg-bearing females in Maine'],
        bn: ['ধরার ক্ষেত্রে ন্যূনতম ও সর্বোচ্চ আকারের সীমা', 'ভি-নচিং: মেইনে ডিমওয়ালা স্ত্রী লবস্টারের লেজে খাঁজ কেটে চিহ্নিত করে ছেড়ে দেওয়া'],
      },
      assessed: '2011',
    },
    facts: {
      en: [
        'Roughly one in two million American lobsters is born bright blue because of a genetic quirk.',
        'Lobsters “taste” and “smell” with tiny hairs on their legs and antennae.',
      ],
      bn: [
        'জিনগত বৈচিত্র্যের কারণে মোটামুটি প্রতি ২০ লাখে একটি আমেরিকান লবস্টার উজ্জ্বল নীল রঙের হয়।',
        'লবস্টার পা ও শুঙ্গের ক্ষুদ্র লোমের সাহায্যে স্বাদ ও গন্ধ টের পায়।',
      ],
    },
    related: ['red-king-crab', 'atlantic-cod', 'mud-crab'],
  },
  {
    id: 'antarctic-krill',
    commonName: { en: 'Antarctic Krill', bn: 'অ্যান্টার্কটিক ক্রিল' },
    scientificName: 'Euphausia superba',
    altNames: {
      en: ['Krill', 'Southern Krill'],
      bn: ['ক্রিল', 'দক্ষিণ মহাসাগরের ক্রিল'],
    },
    category: 'marine',
    wikiTitle: 'Antarctic krill',
    description: {
      en: 'Antarctic krill is a small, shrimp-like crustacean of the Southern Ocean and one of the most abundant animals on the planet, with a total weight estimated in the hundreds of millions of tonnes. It gathers in vast swarms that can turn the sea red. Almost the entire Antarctic food web — from penguins and seals to the great whales — depends on it.',
      bn: 'অ্যান্টার্কটিক ক্রিল দক্ষিণ মহাসাগরের চিংড়ির মতো ছোট খোলসি প্রাণী এবং পৃথিবীর সবচেয়ে বেশি সংখ্যায় থাকা প্রাণীগুলোর একটি; এদের মোট ওজন আনুমানিক কয়েক কোটি টন। এরা এত বিশাল ঝাঁক বাঁধে যে সমুদ্রের পানি লালচে দেখায়। পেঙ্গুইন ও সিল থেকে শুরু করে বিশাল তিমি পর্যন্ত অ্যান্টার্কটিকার প্রায় গোটা খাদ্যজাল এর ওপর নির্ভরশীল।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Malacostraca',
      order: 'Euphausiacea',
      family: 'Euphausiidae',
      genus: 'Euphausia',
      species: 'E. superba',
    },
    physical: {
      size: { en: 'Up to about 6 cm long', bn: 'প্রায় ৬ সেমি পর্যন্ত লম্বা' },
      weight: { en: 'Up to about 2 g', bn: 'প্রায় ২ গ্রাম পর্যন্ত' },
      lifespan: { en: 'About 5–6 years', bn: 'প্রায় ৫–৬ বছর' },
      features: {
        en: ['Translucent body with reddish pigment spots', 'Large black eyes', 'Light-producing organs on the body that glow blue-green'],
        bn: ['লালচে রঞ্জক বিন্দুযুক্ত স্বচ্ছ দেহ', 'বড় কালো চোখ', 'দেহে নীলাভ-সবুজ আলো জ্বালানোর অঙ্গ'],
      },
    },
    habitat: {
      en: 'Open waters of the Southern Ocean, often near or under sea ice',
      bn: 'দক্ষিণ মহাসাগরের খোলা পানি, প্রায়ই সামুদ্রিক বরফের কাছে বা নিচে',
    },
    habitats: ['ocean', 'polar'],
    regions: ['polar', 'oceans'],
    distribution: {
      en: 'Circumpolar in the Southern Ocean around Antarctica, most concentrated in the Scotia Sea and around the Antarctic Peninsula and South Georgia.',
      bn: 'অ্যান্টার্কটিকাকে ঘিরে দক্ষিণ মহাসাগরজুড়ে; সবচেয়ে বেশি স্কোশিয়া সাগর, অ্যান্টার্কটিক উপদ্বীপ ও দক্ষিণ জর্জিয়ার আশপাশে।',
    },
    climate: { en: 'Polar seas', bn: 'মেরু অঞ্চলের সমুদ্র' },
    diet: {
      en: 'Phytoplankton, especially diatoms, and algae scraped from the underside of sea ice',
      bn: 'উদ্ভিদ-প্লাংকটন, বিশেষ করে ডায়াটম, এবং সামুদ্রিক বরফের নিচ থেকে চেঁছে নেওয়া শৈবাল',
    },
    ecologicalRole: {
      en: 'The keystone species of the Antarctic, turning microscopic algae into food for whales, seals, penguins, seabirds and fish, and helping carry carbon to the deep sea.',
      bn: 'অ্যান্টার্কটিকার মূল ভিত্তি প্রজাতি; আণুবীক্ষণিক শৈবালকে তিমি, সিল, পেঙ্গুইন, সামুদ্রিক পাখি ও মাছের খাদ্যে রূপান্তর করে এবং কার্বনকে গভীর সমুদ্রে পৌঁছাতে সাহায্য করে।',
    },
    behavior: {
      en: 'Forms dense swarms with thousands of individuals per cubic metre; many krill move deeper by day and rise at night.',
      bn: 'প্রতি ঘনমিটারে হাজার হাজার ক্রিলের ঘন ঝাঁক বাঁধে; অনেক ক্রিল দিনে গভীরে নেমে যায় এবং রাতে উপরে উঠে আসে।',
    },
    range: {
      native: [
        [-54.3, -36.5],
        [-64.0, -62.0],
        [-58.0, -45.0],
        [-70.0, -40.0],
        [-74.0, 175.0],
        [-65.0, 110.0],
        [-66.0, 60.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Loss of sea ice that young krill depend on, due to climate warming', 'Growing commercial fishing for fish feed and omega-3 supplements', 'Ocean acidification'],
        bn: ['জলবায়ু উষ্ণায়নে বাচ্চা ক্রিলের আশ্রয় সামুদ্রিক বরফ কমে যাওয়া', 'মাছের খাবার ও ওমেগা-৩ সম্পূরকের জন্য বাড়তে থাকা বাণিজ্যিক আহরণ', 'সমুদ্রের অম্লতা বৃদ্ধি'],
      },
      initiatives: {
        en: ['Catch limits set by the Commission for the Conservation of Antarctic Marine Living Resources (CCAMLR)', 'Antarctic marine protected areas such as the Ross Sea region'],
        bn: ['অ্যান্টার্কটিক সামুদ্রিক জীবসম্পদ সংরক্ষণ কমিশন (সিসিএএমএলআর)-এর নির্ধারিত আহরণসীমা', 'রস সাগর অঞ্চলের মতো অ্যান্টার্কটিক সামুদ্রিক সংরক্ষিত এলাকা'],
      },
    },
    facts: {
      en: [
        'A single blue whale can eat several tonnes of krill in a day.',
        'When food is scarce, krill can shrink in size after moulting instead of starving.',
      ],
      bn: [
        'একটি নীল তিমি এক দিনে কয়েক টন ক্রিল খেতে পারে।',
        'খাবারের অভাবে না খেয়ে মরার বদলে ক্রিল খোলস বদলের পর আকারে ছোট হয়ে যেতে পারে।',
      ],
    },
    related: ['blue-whale', 'humpback-whale', 'adelie-penguin', 'emperor-penguin', 'fin-whale'],
  },
  {
    id: 'peacock-mantis-shrimp',
    commonName: { en: 'Peacock Mantis Shrimp', bn: 'ময়ূর ম্যান্টিস চিংড়ি' },
    scientificName: 'Odontodactylus scyllarus',
    altNames: {
      en: ['Harlequin Mantis Shrimp', 'Painted Mantis Shrimp', 'Clown Mantis Shrimp'],
      bn: ['হার্লেকুইন ম্যান্টিস চিংড়ি', 'রঙিন ম্যান্টিস চিংড়ি', 'ম্যান্টিস চিংড়ি'],
    },
    category: 'marine',
    wikiTitle: 'Odontodactylus scyllarus',
    description: {
      en: 'The peacock mantis shrimp is a brilliantly coloured reef crustacean famous for one of the fastest strikes in the animal kingdom. It swings a pair of club-like limbs so quickly that the water around them boils into collapsing bubbles, smashing snail and crab shells with ease. Its eyes are among the most complex known, able to detect polarised light, including circularly polarised light.',
      bn: 'ময়ূর ম্যান্টিস চিংড়ি প্রবাল প্রাচীরের ঝলমলে রঙের খোলসি প্রাণী, যা প্রাণিজগতের দ্রুততম আঘাতগুলোর একটির জন্য বিখ্যাত। মুগুরের মতো একজোড়া উপাঙ্গ এত দ্রুত চালায় যে আশপাশের পানিতে বুদ্বুদ তৈরি হয়ে ফেটে যায়, আর এতে শামুক ও কাঁকড়ার শক্ত খোলস সহজেই ভেঙে যায়। এর চোখ জানা সবচেয়ে জটিল চোখগুলোর একটি, যা বৃত্তাকার সমবর্তিত আলোসহ সমবর্তিত আলো শনাক্ত করতে পারে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Malacostraca',
      order: 'Stomatopoda',
      family: 'Odontodactylidae',
      genus: 'Odontodactylus',
      species: 'O. scyllarus',
    },
    physical: {
      size: { en: 'Usually 3–18 cm long', bn: 'সাধারণত ৩–১৮ সেমি লম্বা' },
      weight: { en: 'Usually under 100 g', bn: 'সাধারণত ১০০ গ্রামের কম' },
      lifespan: { en: 'Several years; exact span poorly known', bn: 'কয়েক বছর; সঠিক আয়ু ভালোভাবে জানা নেই' },
      features: {
        en: ['Bright green body with red legs and leopard-like spots on the front', 'A pair of club-shaped raptorial limbs folded under the head', 'Stalked eyes that move independently, each with three-part vision'],
        bn: ['উজ্জ্বল সবুজ দেহ, লাল পা এবং সামনের দিকে চিতার মতো ছোপ', 'মাথার নিচে ভাঁজ করা মুগুরের মতো একজোড়া শিকারি উপাঙ্গ', 'বৃন্তের ওপর বসানো স্বাধীনভাবে নড়াচড়া করা চোখ, প্রতিটি চোখ তিন ভাগে দেখে'],
      },
    },
    habitat: {
      en: 'Sand and coral-rubble bottoms near reefs, usually 3–40 m deep',
      bn: 'প্রবাল প্রাচীরের কাছের বালু ও প্রবালখণ্ডময় তলদেশ, সাধারণত ৩–৪০ মিটার গভীরে',
    },
    habitats: ['coral-reef'],
    regions: ['oceans', 'southeast-asia', 'oceania', 'africa'],
    distribution: {
      en: 'Tropical Indo-Pacific, from East Africa across the Indian Ocean and Southeast Asia to Guam, northern Australia and Fiji.',
      bn: 'পূর্ব আফ্রিকা থেকে ভারত মহাসাগর ও দক্ষিণ-পূর্ব এশিয়া হয়ে গুয়াম, উত্তর অস্ট্রেলিয়া ও ফিজি পর্যন্ত ক্রান্তীয় ভারত-প্রশান্ত অঞ্চল।',
    },
    climate: { en: 'Warm tropical seas', bn: 'উষ্ণ ক্রান্তীয় সমুদ্র' },
    diet: {
      en: 'Hard-shelled prey — snails, crabs, clams and other molluscs',
      bn: 'শক্ত খোলসের শিকার — শামুক, কাঁকড়া, ঝিনুক ও অন্যান্য কম্বোজ প্রাণী',
    },
    ecologicalRole: {
      en: 'A powerful predator that keeps populations of shelled invertebrates on reefs in check.',
      bn: 'শক্তিশালী শিকারি হিসেবে প্রবাল প্রাচীরে খোলসযুক্ত অমেরুদণ্ডী প্রাণীর সংখ্যা নিয়ন্ত্রণে রাখে।',
    },
    behavior: {
      en: 'Lives in a U-shaped burrow it digs in the sea floor, guarding it fiercely; it may stay with one mate for a long time.',
      bn: 'সমুদ্রতলে নিজের খোঁড়া ইউ-আকৃতির গর্তে থাকে এবং প্রচণ্ডভাবে সেটি পাহারা দেয়; অনেক সময় একই সঙ্গীর সঙ্গে দীর্ঘদিন থাকে।',
    },
    range: {
      native: [
        [13.4, 144.7],
        [-16.5, 146.0],
        [-8.5, 115.5],
        [10.0, 123.5],
        [-6.0, 39.5],
        [-17.5, 178.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Coral reef degradation', 'Collection for the aquarium trade'],
        bn: ['প্রবাল প্রাচীরের অবক্ষয়', 'অ্যাকোয়ারিয়াম বাণিজ্যের জন্য সংগ্রহ'],
      },
      initiatives: {
        en: ['Protection within Indo-Pacific marine parks', 'Studied by engineers to design tougher, impact-resistant materials'],
        bn: ['ভারত-প্রশান্ত অঞ্চলের সামুদ্রিক উদ্যানে সুরক্ষা', 'আরও মজবুত, আঘাতসহ উপকরণ তৈরিতে প্রকৌশলীরা এর মুগুর নিয়ে গবেষণা করছেন'],
      },
    },
    facts: {
      en: [
        'Its club accelerates about as fast as a .22-calibre bullet, and captive mantis shrimp have cracked aquarium glass.',
        'Its eyes contain 12 or more types of colour receptor, compared with three in humans.',
      ],
      bn: [
        'এর মুগুর প্রায় বন্দুকের ছোট গুলির মতো দ্রুত গতি পায়; বন্দি ম্যান্টিস চিংড়ি অ্যাকোয়ারিয়ামের কাচও ফাটিয়ে দিয়েছে।',
        'মানুষের চোখে রং শনাক্তকারী কোষ তিন ধরনের, আর এর চোখে ১২ বা তারও বেশি ধরনের।',
      ],
    },
    related: ['giant-clam', 'staghorn-coral', 'ocellaris-clownfish'],
  },
  {
    id: 'coconut-crab',
    commonName: { en: 'Coconut Crab', bn: 'নারকেল কাঁকড়া' },
    scientificName: 'Birgus latro',
    altNames: {
      en: ['Robber Crab', 'Palm Thief'],
      bn: ['চোর কাঁকড়া', 'ডাকাত কাঁকড়া'],
    },
    category: 'marine',
    wikiTitle: 'Coconut crab',
    description: {
      en: 'The coconut crab is the largest land-living arthropod in the world, a giant relative of hermit crabs found on tropical islands of the Indian and Pacific Oceans. Its larvae develop in the sea, but adults live entirely on land and would drown if kept underwater. With the strongest pinch of any crustacean, it can tear open coconuts and climb tall trees.',
      bn: 'নারকেল কাঁকড়া পৃথিবীর বৃহত্তম স্থলবাসী সন্ধিপদী প্রাণী; ভারত ও প্রশান্ত মহাসাগরের ক্রান্তীয় দ্বীপে পাওয়া সন্ন্যাসী কাঁকড়ার এক বিশাল আত্মীয়। এর লার্ভা সমুদ্রে বেড়ে ওঠে, কিন্তু প্রাপ্তবয়স্করা পুরোপুরি ডাঙায় থাকে এবং পানির নিচে রাখলে ডুবে মারা যায়। সব খোলসি প্রাণীর মধ্যে এর দাঁড়ার চাপ সবচেয়ে শক্তিশালী — এটি নারকেল ছিঁড়ে খুলতে ও উঁচু গাছে চড়তে পারে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Malacostraca',
      order: 'Decapoda',
      family: 'Coenobitidae',
      genus: 'Birgus',
      species: 'B. latro',
    },
    physical: {
      size: { en: 'Body up to about 40 cm long; leg span up to about 1 m', bn: 'দেহ প্রায় ৪০ সেমি পর্যন্ত লম্বা; পা ছড়ালে প্রায় ১ মিটার পর্যন্ত' },
      weight: { en: 'Up to about 4 kg', bn: 'প্রায় ৪ কেজি পর্যন্ত' },
      lifespan: { en: 'Possibly 40–60 years or more', bn: 'সম্ভবত ৪০–৬০ বছর বা তার বেশি' },
      features: {
        en: ['Huge, powerful claws, the left usually larger', 'Colour ranges from orange-red to purple-blue', 'Special “branchiostegal lungs” for breathing air'],
        bn: ['বিশাল ও শক্তিশালী দাঁড়া, সাধারণত বাঁ দাঁড়াটি বড়', 'রং কমলা-লাল থেকে বেগুনি-নীল পর্যন্ত', 'বাতাস থেকে শ্বাস নেওয়ার বিশেষ ফুসফুসসদৃশ অঙ্গ'],
      },
    },
    habitat: {
      en: 'Coastal forests, coral-rock areas and coconut groves on tropical islands, near the sea',
      bn: 'ক্রান্তীয় দ্বীপের সমুদ্রের কাছের উপকূলীয় বন, প্রবাল-পাথুরে এলাকা ও নারকেল বাগান',
    },
    habitats: ['tropical-forest', 'ocean'],
    regions: ['oceania', 'southeast-asia', 'africa', 'oceans'],
    distribution: {
      en: 'Islands across the Indian and Pacific Oceans, from Zanzibar, Aldabra and the Seychelles to Christmas Island and Polynesia; largest populations on Christmas Island and remote Pacific atolls.',
      bn: 'জাঞ্জিবার, আলদাবরা ও সেশেল থেকে ক্রিসমাস দ্বীপ ও পলিনেশিয়া পর্যন্ত ভারত ও প্রশান্ত মহাসাগরের দ্বীপপুঞ্জ; সবচেয়ে বড় সংখ্যা ক্রিসমাস দ্বীপ ও দূরবর্তী প্রশান্ত মহাসাগরীয় প্রবালদ্বীপে।',
    },
    climate: { en: 'Humid tropical islands', bn: 'আর্দ্র ক্রান্তীয় দ্বীপ' },
    diet: {
      en: 'Omnivorous scavenger — fruit, nuts, coconuts, seeds, carrion and other crabs',
      bn: 'সর্বভুক ও আবর্জনাভোজী — ফল, বাদাম, নারকেল, বীজ, মরা প্রাণী ও অন্য কাঁকড়া',
    },
    ecologicalRole: {
      en: 'A top land scavenger and predator on islands, dispersing seeds and cleaning up dead animals and fallen fruit.',
      bn: 'দ্বীপের ডাঙায় শীর্ষ আবর্জনাভোজী ও শিকারি; বীজ ছড়ায় এবং মরা প্রাণী ও পড়ে থাকা ফল পরিষ্কার করে।',
    },
    behavior: {
      en: 'Mostly nocturnal, hiding in burrows or rock crevices by day; females release eggs into the sea at high tide.',
      bn: 'মূলত নিশাচর, দিনে গর্ত বা পাথরের ফাটলে লুকিয়ে থাকে; স্ত্রী কাঁকড়া জোয়ারের সময় সমুদ্রে গিয়ে ডিম ছাড়ে।',
    },
    range: {
      native: [
        [-10.5, 105.6],
        [-9.4, 46.4],
        [-4.6, 55.5],
        [-6.1, 39.3],
        [-8.5, 179.2],
        [-14.0, -171.8],
        [13.4, 144.7],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Hunting for food, as it is considered a delicacy', 'Habitat loss from coastal development', 'Introduced predators such as rats and pigs'],
        bn: ['সুস্বাদু খাবার হিসেবে শিকার', 'উপকূলীয় উন্নয়নে আবাস হারানো', 'ইঁদুর ও শূকরের মতো বাইরে থেকে আনা শিকারি প্রাণী'],
      },
      initiatives: {
        en: ['Minimum size limits and harvest restrictions on several Pacific islands', 'Protection in Christmas Island National Park and Aldabra Atoll'],
        bn: ['প্রশান্ত মহাসাগরের কয়েকটি দ্বীপে ন্যূনতম আকারের সীমা ও আহরণে নিষেধাজ্ঞা', 'ক্রিসমাস দ্বীপ জাতীয় উদ্যান ও আলদাবরা প্রবালদ্বীপে সুরক্ষা'],
      },
      assessed: '2018',
    },
    facts: {
      en: [
        'Its pinch can exert over 3,000 newtons of force — stronger than the bite of most land predators.',
        'Young coconut crabs use empty snail shells for protection, just like hermit crabs.',
      ],
      bn: [
        'এর দাঁড়ার চাপ ৩,০০০ নিউটনেরও বেশি হতে পারে — ডাঙার বেশির ভাগ শিকারি প্রাণীর কামড়ের চেয়েও শক্তিশালী।',
        'সন্ন্যাসী কাঁকড়ার মতোই ছোট নারকেল কাঁকড়া সুরক্ষার জন্য ফাঁকা শামুকের খোলস ব্যবহার করে।',
      ],
    },
    related: ['mud-crab', 'red-king-crab', 'giant-clam'],
  },
  {
    id: 'elkhorn-coral',
    commonName: { en: 'Elkhorn Coral', bn: 'এল্কহর্ন প্রবাল' },
    scientificName: 'Acropora palmata',
    altNames: {
      en: ['Elkhorn', 'Moosehorn Coral'],
      bn: ['এল্কশিং প্রবাল', 'চ্যাপ্টা শিং প্রবাল'],
    },
    category: 'marine',
    wikiTitle: 'Elkhorn coral',
    description: {
      en: 'Elkhorn coral is a large, fast-growing reef-building coral of the Caribbean, named for its broad, flattened branches that look like the antlers of an elk. It once formed dense thickets in shallow water that sheltered coastlines from waves and provided homes for countless reef animals. Since the 1980s disease, bleaching and storms have wiped out most of it.',
      bn: 'এল্কহর্ন প্রবাল ক্যারিবীয় অঞ্চলের বড় ও দ্রুত বর্ধনশীল প্রাচীর-গঠনকারী প্রবাল; এর চওড়া ও চ্যাপ্টা শাখাগুলো দেখতে এল্ক হরিণের শিংয়ের মতো, তাই এমন নাম। একসময় অগভীর পানিতে এরা ঘন ঝোপের মতো জন্মাত, যা ঢেউ থেকে উপকূলকে রক্ষা করত এবং অসংখ্য প্রাণীকে আশ্রয় দিত। ১৯৮০-র দশক থেকে রোগ, প্রবাল বিবর্ণতা ও ঝড়ে এর বেশির ভাগই ধ্বংস হয়ে গেছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Anthozoa',
      order: 'Scleractinia',
      family: 'Acroporidae',
      genus: 'Acropora',
      species: 'A. palmata',
    },
    physical: {
      size: { en: 'Colonies up to about 4 m across and 2 m tall', bn: 'উপনিবেশ প্রায় ৪ মিটার পর্যন্ত চওড়া ও ২ মিটার উঁচু' },
      weight: { en: 'Not applicable — a colony of thousands of tiny polyps on a limestone skeleton', bn: 'প্রযোজ্য নয় — চুনাপাথরের কঙ্কালের ওপর হাজারো ক্ষুদ্র পলিপের উপনিবেশ' },
      lifespan: { en: 'Colonies can live for decades or longer', bn: 'উপনিবেশ কয়েক দশক বা তারও বেশি বাঁচতে পারে' },
      features: {
        en: ['Broad, flattened branches like elk antlers', 'Golden-brown to mustard colour from symbiotic algae', 'Branches grow about 5–10 cm a year'],
        bn: ['এল্ক হরিণের শিংয়ের মতো চওড়া ও চ্যাপ্টা শাখা', 'মিথোজীবী শৈবালের কারণে সোনালি-বাদামি থেকে সরিষা রং', 'শাখাগুলো বছরে প্রায় ৫–১০ সেমি বাড়ে'],
      },
    },
    habitat: {
      en: 'Shallow, wave-washed reef crests and fore-reefs, usually less than 5 m deep',
      bn: 'ঢেউ-আছড়ানো অগভীর প্রাচীরের চূড়া ও সম্মুখভাগ, সাধারণত ৫ মিটারের কম গভীরে',
    },
    habitats: ['coral-reef'],
    regions: ['north-america', 'south-america', 'oceans'],
    distribution: {
      en: 'Caribbean Sea, the Bahamas, the Florida Keys and the Gulf of Mexico, south to Venezuela.',
      bn: 'ক্যারিবীয় সাগর, বাহামা, ফ্লোরিডা কিজ ও মেক্সিকো উপসাগর থেকে দক্ষিণে ভেনেজুয়েলা পর্যন্ত।',
    },
    climate: { en: 'Warm, clear tropical seas', bn: 'উষ্ণ ও স্বচ্ছ ক্রান্তীয় সমুদ্র' },
    diet: {
      en: 'Sugars made by symbiotic algae (zooxanthellae), plus plankton caught by its polyps',
      bn: 'মিথোজীবী শৈবালের (জুজ্যান্থেলি) তৈরি শর্করা, সঙ্গে পলিপের ধরা প্লাংকটন',
    },
    ecologicalRole: {
      en: 'A major builder of Caribbean reef structure that breaks wave energy and shelters fish, lobsters and many other animals.',
      bn: 'ক্যারিবীয় প্রাচীর কাঠামোর প্রধান নির্মাতা; ঢেউয়ের শক্তি কমিয়ে দেয় এবং মাছ, লবস্টারসহ বহু প্রাণীকে আশ্রয় দেয়।',
    },
    behavior: {
      en: 'Spreads mainly by broken branches that reattach and grow; it also spawns once a year, a few nights after the August full moon.',
      bn: 'মূলত ভাঙা শাখা নতুন জায়গায় আটকে বেড়ে উঠে বিস্তার লাভ করে; বছরে একবার, আগস্টের পূর্ণিমার কয়েক রাত পর ডিম ও শুক্রাণু ছাড়ে।',
    },
    range: {
      native: [
        [24.6, -81.3],
        [24.0, -76.0],
        [17.5, -87.8],
        [20.8, -86.8],
        [18.1, -66.0],
        [12.2, -68.3],
        [18.4, -78.0],
      ],
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      threats: {
        en: ['White-band disease, which killed most colonies from the 1980s', 'Coral bleaching from marine heatwaves', 'Hurricanes, pollution and coral-eating snails'],
        bn: ['হোয়াইট-ব্যান্ড রোগ, যাতে ১৯৮০-র দশক থেকে বেশির ভাগ উপনিবেশ মারা যায়', 'সামুদ্রিক তাপপ্রবাহে প্রবাল বিবর্ণতা', 'ঘূর্ণিঝড়, দূষণ ও প্রবালভোজী শামুক'],
      },
      initiatives: {
        en: ['Listed as threatened under the US Endangered Species Act since 2006', 'Coral nurseries and outplanting programmes in Florida and the Caribbean'],
        bn: ['২০০৬ সাল থেকে যুক্তরাষ্ট্রের বিপন্ন প্রজাতি আইনে সংকটাপন্ন হিসেবে তালিকাভুক্ত', 'ফ্লোরিডা ও ক্যারিবীয় অঞ্চলে প্রবাল নার্সারি ও প্রাচীরে প্রবাল রোপণ কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'Elkhorn coral has declined by more than 80% across much of the Caribbean since the 1980s.',
        'Together with staghorn coral, it was among the first corals ever listed under the US Endangered Species Act.',
      ],
      bn: [
        '১৯৮০-র দশকের পর থেকে ক্যারিবীয় অঞ্চলের বেশির ভাগ জায়গায় এল্কহর্ন প্রবাল ৮০ শতাংশেরও বেশি কমে গেছে।',
        'স্ট্যাগহর্ন প্রবালের সঙ্গে এটিই প্রথম প্রবালগুলোর মধ্যে, যাদের যুক্তরাষ্ট্রের বিপন্ন প্রজাতি আইনে তালিকাভুক্ত করা হয়।',
      ],
    },
    related: ['staghorn-coral', 'hawksbill-sea-turtle', 'green-humphead-parrotfish'],
  },
  {
    id: 'sandfish-sea-cucumber',
    commonName: { en: 'Sandfish Sea Cucumber', bn: 'বালু সমুদ্রশসা' },
    scientificName: 'Holothuria scabra',
    altNames: {
      en: ['Sandfish', 'Golden Sandfish', 'Trepang'],
      bn: ['সমুদ্রশসা', 'সি কিউকাম্বার', 'ট্রেপাং'],
    },
    category: 'marine',
    wikiTitle: 'Holothuria scabra',
    description: {
      en: 'The sandfish is a soft, sausage-shaped sea cucumber that lives on sandy and muddy sea floors of the tropical Indo-Pacific, often among seagrass. It swallows sand, digests the organic matter in it and passes out clean sediment, much like an earthworm of the sea. Dried, it is one of the most valuable forms of “bêche-de-mer” in Asian markets, and overharvesting has made it endangered.',
      bn: 'বালু সমুদ্রশসা ক্রান্তীয় ভারত-প্রশান্ত অঞ্চলের বালু ও কাদাময় সমুদ্রতলে, প্রায়ই সামুদ্রিক ঘাসের মাঝে থাকা নরম, সসেজের মতো দেখতে প্রাণী। এটি বালু গিলে তার মধ্যের জৈব পদার্থ হজম করে এবং পরিষ্কার বালু বের করে দেয় — অনেকটা সমুদ্রের কেঁচোর মতো। শুকানো সমুদ্রশসা এশিয়ার বাজারে “বেশ-দ্য-মের” নামে অন্যতম দামি পণ্য, আর অতিরিক্ত আহরণের কারণে এই প্রজাতি এখন বিপন্ন।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Echinodermata',
      class: 'Holothuroidea',
      order: 'Holothuriida',
      family: 'Holothuriidae',
      genus: 'Holothuria',
      species: 'H. scabra',
    },
    physical: {
      size: { en: 'Usually 20–30 cm long; up to about 40 cm', bn: 'সাধারণত ২০–৩০ সেমি লম্বা; প্রায় ৪০ সেমি পর্যন্ত' },
      weight: { en: 'Usually 300 g–1 kg', bn: 'সাধারণত ৩০০ গ্রাম থেকে ১ কেজি' },
      lifespan: { en: 'Several years; exact span poorly known', bn: 'কয়েক বছর; সঠিক আয়ু ভালোভাবে জানা নেই' },
      features: {
        en: ['Thick, sausage-shaped body with fine wrinkles across the back', 'Grey to dark green-brown back with a paler underside', 'A ring of short tentacles around the mouth for scooping sand'],
        bn: ['পিঠজুড়ে সূক্ষ্ম ভাঁজযুক্ত মোটা, সসেজের মতো দেহ', 'ধূসর থেকে গাঢ় সবুজ-বাদামি পিঠ, পেট তুলনায় হালকা', 'মুখের চারপাশে বালু তোলার জন্য ছোট কর্ষিকার বলয়'],
      },
    },
    habitat: {
      en: 'Shallow sandy and muddy sea floors, seagrass beds and sheltered lagoons',
      bn: 'অগভীর বালু ও কাদাময় সমুদ্রতল, সামুদ্রিক ঘাসের বন ও সুরক্ষিত উপহ্রদ',
    },
    habitats: ['ocean', 'coral-reef'],
    regions: ['south-asia', 'southeast-asia', 'oceania', 'africa', 'east-asia'],
    distribution: {
      en: 'Tropical Indo-Pacific, from East Africa and Madagascar through India, Sri Lanka and Southeast Asia to northern Australia, New Caledonia and southern China.',
      bn: 'পূর্ব আফ্রিকা ও মাদাগাস্কার থেকে ভারত, শ্রীলঙ্কা ও দক্ষিণ-পূর্ব এশিয়া হয়ে উত্তর অস্ট্রেলিয়া, নিউ ক্যালিডোনিয়া ও দক্ষিণ চীন পর্যন্ত ক্রান্তীয় ভারত-প্রশান্ত অঞ্চল।',
    },
    climate: { en: 'Tropical coastal seas', bn: 'ক্রান্তীয় উপকূলীয় সমুদ্র' },
    diet: {
      en: 'Deposit feeder — bacteria, algae and decaying matter in swallowed sand and mud',
      bn: 'তলানিভোজী — গিলে ফেলা বালু ও কাদার ব্যাকটেরিয়া, শৈবাল ও পচা জৈব পদার্থ',
    },
    ecologicalRole: {
      en: 'Turns over and cleans sea-floor sediment, recycling nutrients that feed seagrass and corals.',
      bn: 'সমুদ্রতলের বালু-কাদা উল্টেপাল্টে পরিষ্কার রাখে এবং এমন পুষ্টি পুনর্চক্রিত করে, যা সামুদ্রিক ঘাস ও প্রবালের কাজে লাগে।',
    },
    behavior: {
      en: 'Burrows into the sand for part of each day and emerges to feed; sexes are separate and eggs are released into the water.',
      bn: 'দিনের একটি অংশ বালুর নিচে ঢুকে থাকে, পরে বেরিয়ে খাবার খায়; পুরুষ ও স্ত্রী আলাদা, এবং ডিম পানিতে ছেড়ে দেয়।',
    },
    range: {
      native: [
        [9.0, 79.2],
        [8.5, 79.8],
        [10.5, 119.5],
        [-23.3, 43.6],
        [-22.0, 166.0],
        [-12.5, 136.5],
        [12.0, 109.2],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Overharvesting for the dried sea cucumber trade', 'Easy collection by hand in shallow water', 'Loss of seagrass habitat'],
        bn: ['শুকানো সমুদ্রশসার বাণিজ্যের জন্য অতিরিক্ত আহরণ', 'অগভীর পানিতে হাত দিয়েই সহজে ধরা যায়', 'সামুদ্রিক ঘাসের আবাস হারানো'],
      },
      initiatives: {
        en: ['Hatchery breeding and sea ranching in Madagascar, Vietnam and the Philippines', 'Fishing bans and closed seasons in India, Sri Lanka and several Pacific countries'],
        bn: ['মাদাগাস্কার, ভিয়েতনাম ও ফিলিপাইনে হ্যাচারিতে প্রজনন ও সমুদ্রে চাষ', 'ভারত, শ্রীলঙ্কা ও প্রশান্ত অঞ্চলের কয়েকটি দেশে আহরণ নিষেধাজ্ঞা ও বন্ধ মৌসুম'],
      },
      assessed: '2013',
    },
    facts: {
      en: [
        'Sea cucumbers breathe by pumping water in and out through their rear end into internal “respiratory trees”.',
        'The sandfish was the first tropical sea cucumber to be bred in large numbers in hatcheries.',
      ],
      bn: [
        'সমুদ্রশসা পায়ুপথ দিয়ে পানি টেনে ভেতরের শাখাযুক্ত “শ্বাসবৃক্ষ”-এ নিয়ে শ্বাস নেয়।',
        'হ্যাচারিতে বড় পরিসরে প্রজনন করানো প্রথম ক্রান্তীয় সমুদ্রশসা এই বালু সমুদ্রশসা।',
      ],
    },
    related: ['giant-clam', 'crown-of-thorns-starfish', 'green-sea-turtle'],
  },
  {
    id: 'red-king-crab',
    commonName: { en: 'Red King Crab', bn: 'লাল কিং কাঁকড়া' },
    scientificName: 'Paralithodes camtschaticus',
    altNames: {
      en: ['Kamchatka Crab', 'Alaskan King Crab'],
      bn: ['কামচাটকা কাঁকড়া', 'আলাস্কার কিং কাঁকড়া'],
    },
    category: 'marine',
    wikiTitle: 'Red king crab',
    description: {
      en: 'The red king crab is one of the largest crabs in the world, with long spiny legs that can span nearly two metres. Native to the cold North Pacific around the Bering Sea, it is the most prized catch of the Alaskan king crab fishery. King crabs are thought to have evolved from hermit-crab ancestors, which is why their abdomen is asymmetrical and they have only six walking legs visible.',
      bn: 'লাল কিং কাঁকড়া পৃথিবীর সবচেয়ে বড় কাঁকড়াগুলোর একটি; এর কাঁটাওয়ালা লম্বা পা ছড়ালে প্রায় দুই মিটার হয়। বেরিং সাগরের আশপাশের ঠান্ডা উত্তর প্রশান্ত মহাসাগরের এই কাঁকড়া আলাস্কার কিং কাঁকড়া আহরণের সবচেয়ে মূল্যবান শিকার। ধারণা করা হয় কিং কাঁকড়ারা সন্ন্যাসী কাঁকড়ার পূর্বপুরুষ থেকে বিবর্তিত, তাই এদের পেট অসম এবং বাইরে থেকে মাত্র ছয়টি হাঁটার পা দেখা যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Malacostraca',
      order: 'Decapoda',
      family: 'Lithodidae',
      genus: 'Paralithodes',
      species: 'P. camtschaticus',
    },
    physical: {
      size: { en: 'Carapace up to about 28 cm wide; leg span up to about 1.8 m', bn: 'খোলস প্রায় ২৮ সেমি পর্যন্ত চওড়া; পা ছড়ালে প্রায় ১.৮ মিটার পর্যন্ত' },
      weight: { en: 'Usually 2–5 kg; record about 12.7 kg', bn: 'সাধারণত ২–৫ কেজি; রেকর্ড প্রায় ১২.৭ কেজি' },
      lifespan: { en: 'About 20–30 years', bn: 'প্রায় ২০–৩০ বছর' },
      features: {
        en: ['Burgundy-red, spiny shell that turns bright red when cooked', 'Three pairs of long walking legs, with a small fourth pair tucked away', 'Right claw larger than the left'],
        bn: ['কাঁটাওয়ালা গাঢ় লাল খোলস, রান্না করলে উজ্জ্বল লাল হয়', 'তিন জোড়া লম্বা হাঁটার পা, চতুর্থ ছোট জোড়াটি খোলসের নিচে লুকানো', 'ডান দাঁড়া বাঁ দাঁড়ার চেয়ে বড়'],
      },
    },
    habitat: {
      en: 'Cold continental-shelf sea floors, from shallow bays to about 200 m deep',
      bn: 'মহীসোপানের ঠান্ডা সমুদ্রতল, অগভীর উপসাগর থেকে প্রায় ২০০ মিটার গভীরতা পর্যন্ত',
    },
    habitats: ['ocean'],
    regions: ['north-america', 'east-asia', 'oceans', 'europe'],
    distribution: {
      en: 'North Pacific, from the Sea of Japan and Sea of Okhotsk around Kamchatka to the Bering Sea and Alaska; introduced by Soviet scientists to the Barents Sea, where it has spread along northern Norway.',
      bn: 'উত্তর প্রশান্ত মহাসাগর — জাপান সাগর ও ওখোৎস্ক সাগর থেকে কামচাটকা ঘিরে বেরিং সাগর ও আলাস্কা পর্যন্ত; সোভিয়েত বিজ্ঞানীরা একে বারেন্টস সাগরে ছেড়েছিলেন, সেখান থেকে এটি উত্তর নরওয়ের উপকূলজুড়ে ছড়িয়ে পড়েছে।',
    },
    climate: { en: 'Cold subarctic seas', bn: 'ঠান্ডা উপমেরু সমুদ্র' },
    diet: {
      en: 'Omnivore — worms, clams, mussels, snails, sea stars, sea urchins and algae',
      bn: 'সর্বভুক — কেঁচোজাতীয় প্রাণী, ঝিনুক, শামুক, তারামাছ, সি আর্চিন ও শৈবাল',
    },
    ecologicalRole: {
      en: 'An important bottom predator in its native range; where introduced in the Barents Sea it reshapes sea-floor communities.',
      bn: 'নিজস্ব এলাকায় সমুদ্রতলের গুরুত্বপূর্ণ শিকারি; বারেন্টস সাগরে আনা হওয়ার পর সেখানকার সমুদ্রতলের প্রাণিসমাজ বদলে দিচ্ছে।',
    },
    behavior: {
      en: 'Migrates seasonally between deep water and shallow breeding grounds; young crabs pile together in large defensive “pods”.',
      bn: 'ঋতুভেদে গভীর পানি ও অগভীর প্রজননক্ষেত্রের মধ্যে যাতায়াত করে; ছোট কাঁকড়ারা আত্মরক্ষার জন্য একসঙ্গে গাদাগাদি করে বড় দল (পড) গড়ে।',
    },
    range: {
      native: [
        [57.5, -160.0],
        [57.5, -153.0],
        [55.0, 160.0],
        [52.0, 156.0],
        [46.0, 143.0],
        [60.0, -170.0],
      ],
      introduced: [
        [70.0, 30.0],
        [69.5, 33.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Overfishing, which caused stock collapses around Kodiak in the 1980s', 'Warming of the Bering Sea', 'Ocean acidification weakening young crabs'],
        bn: ['অতিরিক্ত আহরণ, যার ফলে ১৯৮০-র দশকে কোডিয়াকের আশপাশে মজুত ধসে পড়ে', 'বেরিং সাগরের উষ্ণায়ন', 'সমুদ্রের অম্লতা বৃদ্ধিতে বাচ্চা কাঁকড়া দুর্বল হয়ে পড়া'],
      },
      initiatives: {
        en: ['Male-only, size-limited catch quotas in Alaska', 'Fishery closures when stocks are low, as in Bristol Bay in 2021–2022'],
        bn: ['আলাস্কায় শুধু নির্দিষ্ট আকারের পুরুষ কাঁকড়া ধরার কোটা', 'মজুত কমে গেলে আহরণ বন্ধ, যেমন ২০২১–২০২২ সালে ব্রিস্টল উপসাগরে'],
      },
    },
    facts: {
      en: [
        'Despite their name and looks, king crabs are more closely related to hermit crabs than to true crabs.',
        'The dangerous Alaskan king crab fishery became famous through the TV series “Deadliest Catch”.',
      ],
      bn: [
        'নাম ও চেহারা যা-ই হোক, কিং কাঁকড়া প্রকৃত কাঁকড়ার চেয়ে সন্ন্যাসী কাঁকড়ার বেশি নিকটাত্মীয়।',
        'আলাস্কার বিপজ্জনক কিং কাঁকড়া আহরণ টেলিভিশন ধারাবাহিক “ডেডলিয়েস্ট ক্যাচ”-এর মাধ্যমে বিখ্যাত হয়েছে।',
      ],
    },
    related: ['american-lobster', 'coconut-crab', 'mud-crab', 'sea-otter'],
  },
];
