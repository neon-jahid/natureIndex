import type { Species } from '@/types';

export const marineReef2: Species[] = [
  {
    id: 'humpback-anglerfish',
    commonName: { en: 'Humpback Anglerfish', bn: 'কুঁজো অ্যাংলার মাছ' },
    scientificName: 'Melanocetus johnsonii',
    altNames: {
      en: ['Black Seadevil', "Johnson's Abyssal Anglerfish", 'Common Black Devil'],
      bn: ['কালো সাগরদানো', 'গভীর সমুদ্রের অ্যাংলার মাছ', 'বড়শি মাছ'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Melanocetus johnsonii',
    description: {
      en: 'The humpback anglerfish is a small, black deep-sea fish with a huge mouth full of needle-like teeth and a glowing “fishing lure” on its head. The lure holds light-producing bacteria and draws prey close in the darkness. Males are tiny and short-lived compared with the much larger females.',
      bn: 'কুঁজো অ্যাংলার মাছ গভীর সমুদ্রের ছোট, কালো রঙের একটি মাছ; এর বিশাল মুখে সুচের মতো দাঁত আর মাথায় থাকে আলো জ্বলা একটি "টোপ"। এই টোপের ভেতরে আলো উৎপাদনকারী ব্যাকটেরিয়া থাকে, যা অন্ধকারে শিকারকে কাছে টেনে আনে। স্ত্রী মাছের তুলনায় পুরুষগুলো অনেক ছোট ও স্বল্পায়ু।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Lophiiformes',
      family: 'Melanocetidae',
      genus: 'Melanocetus',
      species: 'M. johnsonii',
    },
    physical: {
      size: { en: 'Females up to about 18 cm; males under 3 cm', bn: 'স্ত্রী মাছ প্রায় ১৮ সেমি পর্যন্ত; পুরুষ ৩ সেমির কম' },
      weight: { en: 'Only a few tens of grams', bn: 'মাত্র কয়েক দশ গ্রাম' },
      lifespan: { en: 'Not well known', bn: 'ভালোভাবে জানা নেই' },
      features: {
        en: ['Rounded black body and enormous mouth', 'Glowing lure (esca) on a modified dorsal spine', 'Long, fang-like teeth; can swallow prey larger than itself'],
        bn: ['গোলগাল কালো দেহ ও বিশাল মুখ', 'পিঠের রূপান্তরিত কাঁটার মাথায় আলো জ্বলা টোপ', 'লম্বা দাঁতাল দাঁত; নিজের চেয়ে বড় শিকারও গিলে ফেলতে পারে'],
      },
    },
    habitat: {
      en: 'Open ocean in the dark mesopelagic and bathypelagic zones, mostly 100–1,500 m deep',
      bn: 'খোলা সমুদ্রের অন্ধকার মধ্য ও গভীর স্তর, সাধারণত ১০০–১,৫০০ মিটার গভীরে',
    },
    habitats: ['ocean'],
    regions: ['oceans'],
    distribution: {
      en: 'Tropical to temperate waters of the Atlantic, Indian and Pacific Oceans.',
      bn: 'আটলান্টিক, ভারত ও প্রশান্ত মহাসাগরের ক্রান্তীয় থেকে নাতিশীতোষ্ণ জলে।',
    },
    climate: { en: 'Cold, dark deep water, about 2–8 °C', bn: 'ঠান্ডা ও অন্ধকার গভীর পানি, প্রায় ২–৮ ডিগ্রি সেলসিয়াস' },
    diet: {
      en: 'Carnivore — small fish, shrimps and other crustaceans lured to its light',
      bn: 'মাংসাশী — আলোর টোপে আকৃষ্ট ছোট মাছ, চিংড়ি ও অন্যান্য কবচী প্রাণী',
    },
    ecologicalRole: {
      en: 'An ambush predator that helps regulate small animals of the deep midwater.',
      bn: 'ওত পেতে থাকা শিকারি হিসেবে গভীর মধ্যস্তরের ছোট প্রাণীর সংখ্যা নিয়ন্ত্রণে রাখে।',
    },
    behavior: {
      en: 'Hangs almost motionless in the water, waving its lure; free-living males search for females by smell.',
      bn: 'পানিতে প্রায় স্থির ভেসে থেকে টোপ দোলায়; স্বাধীনভাবে চলা পুরুষ মাছ গন্ধ শুঁকে স্ত্রী মাছ খুঁজে বেড়ায়।',
    },
    range: {
      native: [
        [32.0, -64.0],
        [20.0, -30.0],
        [-30.0, 10.0],
        [-10.0, 75.0],
        [20.0, 150.0],
        [30.0, -130.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Occasional bycatch in deep-water trawls', 'Possible future deep-sea mining'],
        bn: ['গভীর সমুদ্রের ট্রলারে মাঝে মাঝে আকস্মিকভাবে ধরা পড়া', 'ভবিষ্যতে গভীর সমুদ্রে খনন কার্যক্রম'],
      },
      initiatives: {
        en: ['Deep-sea research expeditions and video surveys'],
        bn: ['গভীর সমুদ্রে গবেষণা অভিযান ও ভিডিও জরিপ'],
      },
    },
    facts: {
      en: [
        'In 2014 a live black seadevil was filmed for the first time, by MBARI in Monterey Canyon at about 600 m depth.',
        'Unlike some anglerfish, males of this species do not stay permanently fused to the female.',
      ],
      bn: [
        '২০১৪ সালে মন্টেরি ক্যানিয়নে প্রায় ৬০০ মিটার গভীরে এমবারি গবেষকেরা প্রথমবারের মতো জীবিত এই মাছের ভিডিও ধারণ করেন।',
        'কিছু অ্যাংলার মাছের মতো এই প্রজাতির পুরুষ স্থায়ীভাবে স্ত্রী মাছের দেহে জুড়ে থাকে না।',
      ],
    },
    related: ['sloanes-viperfish', 'barreleye', 'blobfish'],
  },
  {
    id: 'blobfish',
    commonName: { en: 'Blobfish', bn: 'ব্লবফিশ' },
    scientificName: 'Psychrolutes marcidus',
    altNames: {
      en: ['Smooth-head Blobfish', 'Australian Blobfish'],
      bn: ['থলথলে মাছ', 'অস্ট্রেলীয় ব্লবফিশ'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Psychrolutes marcidus',
    description: {
      en: 'The blobfish is a deep-sea fathead sculpin with jelly-like flesh that is slightly less dense than water, letting it float just above the seabed without spending energy. Its famous “sad, droopy” look only appears when it is hauled to the surface and its body sags from decompression. In 2013 it was voted the world’s ugliest animal.',
      bn: 'ব্লবফিশ গভীর সমুদ্রের এক ধরনের মোটা-মাথা স্কাল্পিন মাছ; এর জেলির মতো দেহ পানির চেয়ে সামান্য হালকা, তাই প্রায় কোনো শক্তি খরচ না করেই সমুদ্রতলের ঠিক ওপরে ভেসে থাকতে পারে। এর বিখ্যাত "দুঃখী, ঝুলে পড়া" চেহারা দেখা যায় কেবল উপরে তোলার পর, যখন চাপ কমে গিয়ে দেহ নেতিয়ে পড়ে। ২০১৩ সালে একে বিশ্বের সবচেয়ে কুৎসিত প্রাণী হিসেবে ভোট দেওয়া হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Perciformes',
      family: 'Psychrolutidae',
      genus: 'Psychrolutes',
      species: 'P. marcidus',
    },
    physical: {
      size: { en: 'Usually under 30 cm', bn: 'সাধারণত ৩০ সেমির কম' },
      weight: { en: 'Up to about 2 kg', bn: 'প্রায় ২ কেজি পর্যন্ত' },
      lifespan: { en: 'Thought to be long-lived, but not well known', bn: 'দীর্ঘজীবী বলে ধারণা করা হয়, তবে নিশ্চিত জানা নেই' },
      features: {
        en: ['Soft, gelatinous body with very little muscle', 'Large head and loose, pinkish skin', 'Almost no swim bladder; buoyancy comes from its low-density flesh'],
        bn: ['খুব কম পেশিযুক্ত নরম, জেলির মতো দেহ', 'বড় মাথা ও ঢিলেঢালা গোলাপি চামড়া', 'বায়ুথলি প্রায় নেই; হালকা মাংসের কারণেই ভেসে থাকে'],
      },
    },
    habitat: {
      en: 'Soft seabed on the continental slope, about 600–1,200 m deep',
      bn: 'মহীঢালের নরম সমুদ্রতল, প্রায় ৬০০–১,২০০ মিটার গভীরে',
    },
    habitats: ['ocean'],
    regions: ['oceania', 'oceans'],
    distribution: {
      en: 'Deep waters off mainland Australia, Tasmania and New Zealand.',
      bn: 'অস্ট্রেলিয়ার মূল ভূখণ্ড, তাসমানিয়া ও নিউজিল্যান্ডের উপকূলের গভীর জলে।',
    },
    climate: { en: 'Cold deep water, roughly 2–9 °C, under very high pressure', bn: 'অত্যন্ত উচ্চ চাপের ঠান্ডা গভীর পানি, মোটামুটি ২–৯ ডিগ্রি সেলসিয়াস' },
    diet: {
      en: 'Opportunistic feeder — crabs, sea urchins, molluscs and other slow animals that drift past',
      bn: 'সুযোগসন্ধানী খাদক — কাঁকড়া, সামুদ্রিক আর্চিন, শামুক-ঝিনুক ও পাশ দিয়ে ভেসে যাওয়া অন্যান্য ধীরগতির প্রাণী',
    },
    ecologicalRole: {
      en: 'A slow bottom-dwelling predator and scavenger of the deep continental slope.',
      bn: 'গভীর মহীঢালের তলদেশে বাস করা ধীরগতির শিকারি ও মৃতভোজী প্রাণী।',
    },
    behavior: {
      en: 'Floats just above the bottom and swallows edible matter that comes within reach; females are thought to guard their eggs.',
      bn: 'তলদেশের ঠিক ওপরে ভেসে থাকে এবং নাগালে আসা খাবার গিলে ফেলে; ধারণা করা হয় স্ত্রী মাছ ডিম পাহারা দেয়।',
    },
    range: {
      native: [
        [-33.5, 152.5],
        [-37.5, 150.8],
        [-42.5, 148.8],
        [-44.0, 147.0],
        [-41.0, 174.5],
        [-45.0, 171.5],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Bycatch in deep-sea bottom trawling for orange roughy and other fish'],
        bn: ['অরেঞ্জ রাফি ও অন্যান্য মাছ ধরতে গভীর সমুদ্রে তলদেশ ট্রলিংয়ে আকস্মিকভাবে ধরা পড়া'],
      },
      initiatives: {
        en: ['Australian marine parks that restrict bottom trawling', 'Ugly Animal Preservation Society awareness campaign'],
        bn: ['তলদেশ ট্রলিং সীমিত করা অস্ট্রেলিয়ার সামুদ্রিক উদ্যান', 'আগলি অ্যানিমেল প্রিজারভেশন সোসাইটির সচেতনতা প্রচারণা'],
      },
    },
    facts: {
      en: [
        'The best-known blobfish specimen, “Mr. Blobby”, was caught in 2003 off New Zealand and is kept at the Australian Museum.',
        'At its natural depth the pressure is 60–120 times that at the surface, and the fish looks like an ordinary fish.',
      ],
      bn: [
        'সবচেয়ে পরিচিত নমুনা "মিস্টার ব্লবি" ২০০৩ সালে নিউজিল্যান্ডের কাছে ধরা পড়ে এবং অস্ট্রেলিয়ান মিউজিয়ামে সংরক্ষিত আছে।',
        'নিজের স্বাভাবিক গভীরতায় পানির চাপ উপরিভাগের ৬০–১২০ গুণ, আর সেখানে মাছটিকে সাধারণ মাছের মতোই দেখায়।',
      ],
    },
    related: ['humpback-anglerfish', 'frilled-shark', 'ocean-sunfish'],
  },
  {
    id: 'barreleye',
    commonName: { en: 'Barreleye', bn: 'ব্যারেলআই মাছ' },
    scientificName: 'Macropinna microstoma',
    altNames: {
      en: ['Barreleye Fish', 'Pacific Barreleye', 'Spookfish'],
      bn: ['পিপা-চোখা মাছ', 'স্বচ্ছ-মাথা মাছ', 'স্পুকফিশ'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Macropinna microstoma',
    description: {
      en: 'The barreleye is a small deep-sea fish with a transparent, fluid-filled dome over its head. Inside sit two glowing green, tube-shaped eyes that can rotate to look straight up or forward. The two dark spots above its mouth, which look like eyes, are actually its nostrils.',
      bn: 'ব্যারেলআই গভীর সমুদ্রের একটি ছোট মাছ, যার মাথার ওপর তরলে ভরা স্বচ্ছ গম্বুজের মতো আবরণ থাকে। এর ভেতরে রয়েছে সবুজ আভাযুক্ত দুটি নলাকার চোখ, যা ঘুরিয়ে সোজা ওপরে বা সামনের দিকে তাকাতে পারে। মুখের ওপরে চোখের মতো দেখতে কালো দুটি দাগ আসলে এর নাসারন্ধ্র।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Argentiniformes',
      family: 'Opisthoproctidae',
      genus: 'Macropinna',
      species: 'M. microstoma',
    },
    physical: {
      size: { en: 'Up to about 15 cm', bn: 'প্রায় ১৫ সেমি পর্যন্ত' },
      weight: { en: 'Only a few tens of grams', bn: 'মাত্র কয়েক দশ গ্রাম' },
      lifespan: { en: 'Unknown', bn: 'অজানা' },
      features: {
        en: ['Transparent, fluid-filled shield over the head', 'Rotating tubular eyes with green pigment', 'Large, flat fins that let it hang almost motionless'],
        bn: ['মাথার ওপর তরলে ভরা স্বচ্ছ ঢাল', 'সবুজ রঞ্জকযুক্ত ঘোরানো যায় এমন নলাকার চোখ', 'বড় চ্যাপ্টা পাখনা, যার সাহায্যে প্রায় স্থির হয়ে ভেসে থাকে'],
      },
    },
    habitat: {
      en: 'Twilight zone of the open ocean, about 600–800 m deep',
      bn: 'খোলা সমুদ্রের আলো-আঁধারি স্তর, প্রায় ৬০০–৮০০ মিটার গভীরে',
    },
    habitats: ['ocean'],
    regions: ['oceans', 'north-america', 'east-asia'],
    distribution: {
      en: 'Subarctic and temperate North Pacific, from the Bering Sea and Japan to Baja California.',
      bn: 'উত্তর প্রশান্ত মহাসাগরের উপমেরু ও নাতিশীতোষ্ণ অঞ্চল — বেরিং সাগর ও জাপান থেকে বাহা ক্যালিফোর্নিয়া পর্যন্ত।',
    },
    climate: { en: 'Cold, dim deep water, about 4–6 °C', bn: 'ঠান্ডা ও আবছা আলোর গভীর পানি, প্রায় ৪–৬ ডিগ্রি সেলসিয়াস' },
    diet: {
      en: 'Small crustaceans and jellies; may steal food from siphonophores',
      bn: 'ছোট কবচী প্রাণী ও জেলিজাতীয় প্রাণী; সাইফোনোফোরের ধরা খাবারও চুরি করে খেতে পারে',
    },
    ecologicalRole: {
      en: 'A small midwater predator linking zooplankton to larger deep-sea fish.',
      bn: 'ছোট মধ্যস্তরের শিকারি, যা প্রাণীপ্লাংকটন ও গভীর সমুদ্রের বড় মাছের মধ্যে খাদ্যশৃঙ্খলের যোগসূত্র।',
    },
    behavior: {
      en: 'Hovers horizontally, scanning upward for the silhouettes of prey, then rotates its eyes forward as it rises to feed.',
      bn: 'আনুভূমিকভাবে ভেসে থেকে ওপরের দিকে শিকারের ছায়া খোঁজে, তারপর খেতে ওপরে ওঠার সময় চোখ ঘুরিয়ে সামনের দিকে আনে।',
    },
    range: {
      native: [
        [36.7, -122.1],
        [32.0, -118.5],
        [48.0, -127.0],
        [55.0, -160.0],
        [57.0, 178.0],
        [40.0, 145.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Little known; possibly affected by ocean warming and deoxygenation'],
        bn: ['খুব কম জানা; সমুদ্রের উষ্ণায়ন ও অক্সিজেন হ্রাসে প্রভাবিত হতে পারে'],
      },
      initiatives: {
        en: ['Remote-operated vehicle research by MBARI in Monterey Bay'],
        bn: ['মন্টেরি উপসাগরে এমবারির দূরনিয়ন্ত্রিত যান দিয়ে গবেষণা'],
      },
    },
    facts: {
      en: [
        'Described in 1939, its transparent head was only properly seen in 2008, because the dome is destroyed when nets haul it up.',
        'The green pigment in its eyes may filter sunlight to help it spot the faint glow of bioluminescent prey.',
      ],
      bn: [
        '১৯৩৯ সালে বর্ণিত হলেও ২০০৮ সালের আগে এর স্বচ্ছ মাথা ঠিকভাবে দেখা যায়নি, কারণ জালে তোলার সময় গম্বুজটি নষ্ট হয়ে যায়।',
        'চোখের সবুজ রঞ্জক সম্ভবত সূর্যের আলো ছেঁকে জৈবদীপ্ত শিকারের ক্ষীণ আলো চিনতে সাহায্য করে।',
      ],
    },
    related: ['humpback-anglerfish', 'sloanes-viperfish', 'vampire-squid'],
  },
  {
    id: 'sloanes-viperfish',
    commonName: { en: "Sloane's Viperfish", bn: 'স্লোনের ভাইপার মাছ' },
    scientificName: 'Chauliodus sloani',
    altNames: {
      en: ['Viperfish', 'Viper Fish'],
      bn: ['সাপমুখো মাছ', 'ভাইপার মাছ'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: "Sloane's viperfish",
    description: {
      en: "Sloane's viperfish is a slender deep-sea predator with fang-like teeth so long they do not fit inside its closed mouth. A long first dorsal-fin ray tipped with a light organ may act as a lure, and rows of photophores along its belly help hide its silhouette from below. It migrates upward at night to hunt.",
      bn: 'স্লোনের ভাইপার মাছ গভীর সমুদ্রের সরু দেহের এক শিকারি, যার দাঁতাল দাঁত এত লম্বা যে মুখ বন্ধ করলেও ভেতরে আঁটে না। পিঠের পাখনার প্রথম লম্বা রশ্মির মাথায় আলো-অঙ্গ থাকে, যা টোপের কাজ করতে পারে; পেট বরাবর সারিবদ্ধ আলো-অঙ্গ নিচ থেকে এর ছায়া লুকাতে সাহায্য করে। রাতে শিকারের জন্য এটি ওপরের দিকে উঠে আসে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Stomiiformes',
      family: 'Stomiidae',
      genus: 'Chauliodus',
      species: 'C. sloani',
    },
    physical: {
      size: { en: 'Usually 25–30 cm; up to about 35 cm', bn: 'সাধারণত ২৫–৩০ সেমি; সর্বোচ্চ প্রায় ৩৫ সেমি' },
      weight: { en: 'Up to about 25 g', bn: 'প্রায় ২৫ গ্রাম পর্যন্ত' },
      lifespan: { en: 'Thought to be about 15–30 years', bn: 'ধারণা করা হয় প্রায় ১৫–৩০ বছর' },
      features: {
        en: ['Huge, needle-like fangs projecting outside the mouth', 'Light organ on the tip of a long dorsal-fin ray', 'Rows of photophores along the belly'],
        bn: ['মুখের বাইরে বেরিয়ে থাকা বিশাল সুচালো দাঁত', 'পিঠের পাখনার লম্বা রশ্মির ডগায় আলো-অঙ্গ', 'পেট বরাবর সারিবদ্ধ আলো-অঙ্গ'],
      },
    },
    habitat: {
      en: 'Open ocean, by day at about 250–1,500 m and at night in shallower water',
      bn: 'খোলা সমুদ্র; দিনে প্রায় ২৫০–১,৫০০ মিটার গভীরে, রাতে অপেক্ষাকৃত অগভীর পানিতে',
    },
    habitats: ['ocean'],
    regions: ['oceans'],
    distribution: {
      en: 'Tropical and temperate waters worldwide, including the Atlantic, Indian and Pacific Oceans and the Mediterranean.',
      bn: 'আটলান্টিক, ভারত ও প্রশান্ত মহাসাগর এবং ভূমধ্যসাগরসহ সারা বিশ্বের ক্রান্তীয় ও নাতিশীতোষ্ণ জলে।',
    },
    climate: { en: 'Deep water, roughly 4–15 °C', bn: 'গভীর পানি, মোটামুটি ৪–১৫ ডিগ্রি সেলসিয়াস' },
    diet: {
      en: 'Carnivore — lanternfish, other small fish and crustaceans',
      bn: 'মাংসাশী — লণ্ঠন মাছ, অন্যান্য ছোট মাছ ও কবচী প্রাণী',
    },
    ecologicalRole: {
      en: 'A key midwater predator that helps move carbon downward through its daily vertical migration.',
      bn: 'মধ্যস্তরের গুরুত্বপূর্ণ শিকারি; প্রতিদিনের উল্লম্ব যাতায়াতের মাধ্যমে কার্বনকে সমুদ্রের গভীরে পৌঁছে দিতে সাহায্য করে।',
    },
    behavior: {
      en: 'Ambushes prey at speed; its first vertebra absorbs the shock when it strikes with its jaws wide open.',
      bn: 'দ্রুত ঝাঁপিয়ে শিকার ধরে; চোয়াল পুরো খুলে আঘাত করার সময় প্রথম কশেরুকা ধাক্কা সামলায়।',
    },
    range: {
      native: [
        [35.0, -40.0],
        [36.0, 15.0],
        [-20.0, -10.0],
        [-15.0, 80.0],
        [15.0, 140.0],
        [-30.0, -100.0],
        [20.0, -160.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Bycatch in midwater trawls', 'Ocean warming and deoxygenation'],
        bn: ['মধ্যস্তরের ট্রলারে আকস্মিকভাবে ধরা পড়া', 'সমুদ্রের উষ্ণায়ন ও অক্সিজেন হ্রাস'],
      },
      initiatives: {
        en: ['Deep-sea biodiversity surveys'],
        bn: ['গভীর সমুদ্রের জীববৈচিত্র্য জরিপ'],
      },
    },
    facts: {
      en: [
        'It is named after Sir Hans Sloane, the naturalist whose collection founded the British Museum.',
        'Its fangs are so long that it must open its jaws more than 90° to swallow prey.',
      ],
      bn: [
        'ব্রিটিশ মিউজিয়ামের ভিত্তি গড়ে দেওয়া সংগ্রহের মালিক প্রকৃতিবিদ স্যার হ্যান্স স্লোনের নামে এর নামকরণ।',
        'এর দাঁত এত লম্বা যে শিকার গিলতে চোয়াল ৯০ ডিগ্রির বেশি খুলতে হয়।',
      ],
    },
    related: ['humpback-anglerfish', 'barreleye', 'giant-oarfish'],
  },
  {
    id: 'frilled-shark',
    commonName: { en: 'Frilled Shark', bn: 'ঝালর হাঙর' },
    scientificName: 'Chlamydoselachus anguineus',
    altNames: {
      en: ['Lizard Shark', 'Eel Shark'],
      bn: ['গিরগিটি হাঙর', 'বাইন হাঙর'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Frilled shark',
    description: {
      en: 'The frilled shark is an eel-like deep-sea shark named for the frilly edges of its six pairs of gill slits. Its mouth holds about 300 three-pointed teeth that trap squid and fish. Its body plan has changed little for millions of years, and it is often called a “living fossil”.',
      bn: 'ঝালর হাঙর বাইন মাছের মতো লম্বাটে গভীর সমুদ্রের একটি হাঙর; ছয় জোড়া ফুলকা-ছিদ্রের ঝালরের মতো কিনারার জন্য এই নাম। এর মুখে প্রায় ৩০০টি তিন-কাঁটাওয়ালা দাঁত থাকে, যা স্কুইড ও মাছ আটকে রাখে। লক্ষ লক্ষ বছরে এর দেহগঠন খুব কমই বদলেছে, তাই একে প্রায়ই "জীবন্ত জীবাশ্ম" বলা হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Chondrichthyes',
      order: 'Hexanchiformes',
      family: 'Chlamydoselachidae',
      genus: 'Chlamydoselachus',
      species: 'C. anguineus',
    },
    physical: {
      size: { en: 'Usually 1.5 m; up to about 2 m', bn: 'সাধারণত ১.৫ মিটার; সর্বোচ্চ প্রায় ২ মিটার' },
      weight: { en: 'Up to about 10 kg', bn: 'প্রায় ১০ কেজি পর্যন্ত' },
      lifespan: { en: 'Estimated around 25 years', bn: 'আনুমানিক প্রায় ২৫ বছর' },
      features: {
        en: ['Long, eel-like dark brown body', 'Six pairs of frilled gill slits', 'Rows of small, three-pronged teeth'],
        bn: ['লম্বা, বাইন মাছের মতো গাঢ় বাদামি দেহ', 'ঝালরের মতো ছয় জোড়া ফুলকা-ছিদ্র', 'সারিবদ্ধ ছোট তিন-কাঁটাওয়ালা দাঁত'],
      },
    },
    habitat: {
      en: 'Outer continental shelf and upper slope, usually 500–1,000 m deep',
      bn: 'মহীসোপানের বাইরের অংশ ও মহীঢালের ওপরের অংশ, সাধারণত ৫০০–১,০০০ মিটার গভীরে',
    },
    habitats: ['ocean'],
    regions: ['oceans', 'east-asia', 'europe', 'oceania', 'africa'],
    distribution: {
      en: 'Patchily distributed in the Atlantic and Pacific, including Norway, Japan, Australia, New Zealand, southern Africa and California.',
      bn: 'আটলান্টিক ও প্রশান্ত মহাসাগরে বিক্ষিপ্তভাবে ছড়িয়ে আছে — নরওয়ে, জাপান, অস্ট্রেলিয়া, নিউজিল্যান্ড, দক্ষিণ আফ্রিকা ও ক্যালিফোর্নিয়াসহ।',
    },
    climate: { en: 'Cool deep water, roughly 5–15 °C', bn: 'শীতল গভীর পানি, মোটামুটি ৫–১৫ ডিগ্রি সেলসিয়াস' },
    diet: {
      en: 'Carnivore — mainly squid, plus bony fish and other sharks',
      bn: 'মাংসাশী — প্রধানত স্কুইড, সেই সঙ্গে অস্থিময় মাছ ও অন্য হাঙর',
    },
    ecologicalRole: {
      en: 'A deep-water predator of squid on the continental slope.',
      bn: 'মহীঢালে স্কুইড শিকারি গভীর জলের একটি শিকারি প্রাণী।',
    },
    behavior: {
      en: 'May lunge at prey like a snake; gives birth to live young after what may be the longest pregnancy of any vertebrate, up to 3.5 years.',
      bn: 'সাপের মতো ঝাঁপিয়ে শিকার ধরতে পারে; জীবন্ত বাচ্চা প্রসব করে, আর এর গর্ভকাল সম্ভবত মেরুদণ্ডী প্রাণীদের মধ্যে দীর্ঘতম — সাড়ে তিন বছর পর্যন্ত।',
    },
    range: {
      native: [
        [35.0, 139.6],
        [62.0, 4.0],
        [-34.5, 18.0],
        [-42.0, 148.5],
        [-42.0, 174.0],
        [34.0, -120.0],
        [28.0, -16.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Bycatch in deep-water trawls, longlines and gillnets', 'Very slow reproduction makes it vulnerable to fishing'],
        bn: ['গভীর সমুদ্রের ট্রলার, লংলাইন ও ফাঁসজালে আকস্মিকভাবে ধরা পড়া', 'অত্যন্ত ধীর প্রজননের কারণে মাছ ধরার চাপে ঝুঁকিতে পড়ে'],
      },
      initiatives: {
        en: ['Deep-sea fishing restrictions in parts of the North Atlantic and Australia'],
        bn: ['উত্তর আটলান্টিক ও অস্ট্রেলিয়ার কিছু অংশে গভীর সমুদ্রে মাছ ধরার নিষেধাজ্ঞা'],
      },
    },
    facts: {
      en: [
        'A live frilled shark filmed in shallow water in Japan in 2007 drew worldwide attention.',
        'Its lineage dates back roughly 80 million years, to the time of the dinosaurs.',
      ],
      bn: [
        '২০০৭ সালে জাপানে অগভীর পানিতে একটি জীবিত ঝালর হাঙরের ভিডিও সারা বিশ্বে সাড়া ফেলে।',
        'এর বংশধারা প্রায় ৮ কোটি বছর পুরোনো — ডাইনোসরের যুগ পর্যন্ত বিস্তৃত।',
      ],
    },
    related: ['goblin-shark', 'great-white-shark', 'giant-squid'],
  },
  {
    id: 'goblin-shark',
    commonName: { en: 'Goblin Shark', bn: 'গবলিন হাঙর' },
    scientificName: 'Mitsukurina owstoni',
    altNames: {
      en: ['Elfin Shark', 'Tenguzame'],
      bn: ['ভূত হাঙর', 'তেঙ্গুজামে'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Goblin shark',
    description: {
      en: 'The goblin shark is a pinkish deep-sea shark with a long, flattened snout and jaws that can shoot forward at high speed to snatch prey. It is the only living member of a family whose lineage goes back about 125 million years. Its pink colour comes from blood vessels visible through its skin.',
      bn: 'গবলিন হাঙর গোলাপি রঙের গভীর সমুদ্রের একটি হাঙর; এর লম্বা চ্যাপ্টা নাক আর চোয়াল প্রচণ্ড গতিতে সামনে ছুড়ে দিয়ে শিকার ধরতে পারে। প্রায় ১২ কোটি ৫০ লক্ষ বছর পুরোনো বংশধারার পরিবারে এটিই একমাত্র জীবিত সদস্য। চামড়ার ভেতর দিয়ে দেখা যাওয়া রক্তনালির কারণে এর রং গোলাপি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Chondrichthyes',
      order: 'Lamniformes',
      family: 'Mitsukurinidae',
      genus: 'Mitsukurina',
      species: 'M. owstoni',
    },
    physical: {
      size: { en: 'Usually 3–4 m; possibly up to 6 m', bn: 'সাধারণত ৩–৪ মিটার; সম্ভবত ৬ মিটার পর্যন্ত' },
      weight: { en: 'Up to about 210 kg', bn: 'প্রায় ২১০ কেজি পর্যন্ত' },
      lifespan: { en: 'Possibly around 60 years', bn: 'সম্ভবত প্রায় ৬০ বছর' },
      features: {
        en: ['Long, blade-like snout covered in electroreceptors', 'Protrusible jaws with nail-like teeth', 'Soft, flabby, pinkish-grey body'],
        bn: ['বৈদ্যুতিক সংবেদী অঙ্গে ঢাকা লম্বা ফলার মতো নাক', 'সামনে ঠেলে বের করা যায় এমন চোয়াল ও পেরেকের মতো দাঁত', 'নরম, থলথলে গোলাপি-ধূসর দেহ'],
      },
    },
    habitat: {
      en: 'Outer continental shelves, upper slopes and seamounts, mostly 270–960 m deep',
      bn: 'মহীসোপানের বাইরের অংশ, মহীঢালের ওপরের অংশ ও সমুদ্রপাহাড়, সাধারণত ২৭০–৯৬০ মিটার গভীরে',
    },
    habitats: ['ocean'],
    regions: ['oceans', 'east-asia', 'oceania', 'africa', 'north-america', 'europe'],
    distribution: {
      en: 'Scattered records worldwide, most often from Japan, with others from Australia, New Zealand, South Africa, the Gulf of Mexico and the eastern Atlantic.',
      bn: 'সারা বিশ্বে বিক্ষিপ্তভাবে পাওয়া যায়; সবচেয়ে বেশি জাপানে, এ ছাড়া অস্ট্রেলিয়া, নিউজিল্যান্ড, দক্ষিণ আফ্রিকা, মেক্সিকো উপসাগর ও পূর্ব আটলান্টিকে।',
    },
    climate: { en: 'Cool deep water, roughly 5–15 °C', bn: 'শীতল গভীর পানি, মোটামুটি ৫–১৫ ডিগ্রি সেলসিয়াস' },
    diet: {
      en: 'Carnivore — deep-sea fish, squid and crustaceans',
      bn: 'মাংসাশী — গভীর সমুদ্রের মাছ, স্কুইড ও কবচী প্রাণী',
    },
    ecologicalRole: {
      en: 'A slow-moving ambush predator of the deep continental slope.',
      bn: 'গভীর মহীঢালের ধীরগতির, ওত পেতে থাকা শিকারি।',
    },
    behavior: {
      en: 'Drifts slowly and detects prey with its electrosensitive snout, then shoots its jaws forward in a fraction of a second.',
      bn: 'ধীরে ভেসে বেড়ায় এবং বিদ্যুৎ-সংবেদী নাক দিয়ে শিকার টের পেয়ে মুহূর্তের ভগ্নাংশে চোয়াল সামনে ছুড়ে দেয়।',
    },
    range: {
      native: [
        [35.2, 139.7],
        [-34.0, 151.5],
        [-41.5, 174.0],
        [-34.5, 18.5],
        [28.0, -89.0],
        [38.5, -9.5],
        [5.0, -52.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Occasional bycatch in deep-water fisheries'],
        bn: ['গভীর সমুদ্রের মাছ ধরায় মাঝে মাঝে আকস্মিকভাবে ধরা পড়া'],
      },
      initiatives: {
        en: ['Recording and study of bycatch specimens, especially in Japan'],
        bn: ['বিশেষত জাপানে আকস্মিকভাবে ধরা পড়া নমুনার নথিভুক্তি ও গবেষণা'],
      },
    },
    facts: {
      en: [
        'Its jaws can extend at up to about 3 m per second — among the fastest jaw strikes of any shark.',
        'The first specimen was caught near Yokohama, Japan, in 1897 and named after the zoologist Kakichi Mitsukuri and collector Alan Owston.',
      ],
      bn: [
        'এর চোয়াল প্রতি সেকেন্ডে প্রায় ৩ মিটার গতিতে সামনে আসতে পারে — হাঙরদের মধ্যে অন্যতম দ্রুততম চোয়ালের আঘাত।',
        '১৮৯৭ সালে জাপানের ইয়োকোহামার কাছে প্রথম নমুনা ধরা পড়ে; প্রাণিবিদ কাকিচি মিৎসুকুরি ও সংগ্রাহক অ্যালান ওস্টনের নামে এর নামকরণ।',
      ],
    },
    related: ['frilled-shark', 'great-white-shark', 'tiger-shark'],
  },
  {
    id: 'giant-oarfish',
    commonName: { en: 'Giant Oarfish', bn: 'দৈত্য বৈঠা মাছ' },
    scientificName: 'Regalecus glesne',
    altNames: {
      en: ['King of Herrings', 'Oarfish', 'Ribbonfish'],
      bn: ['ওরফিশ', 'হেরিংদের রাজা', 'ফিতা মাছ'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Giant oarfish',
    description: {
      en: 'The giant oarfish is the longest bony fish alive, a silvery, ribbon-shaped fish with a bright red dorsal fin running the length of its body. It lives in the open ocean below the surface layer and is rarely seen alive. Stranded oarfish are likely the source of many sea-serpent legends.',
      bn: 'দৈত্য বৈঠা মাছ বর্তমানে জীবিত সবচেয়ে লম্বা অস্থিময় মাছ; রুপালি ফিতার মতো দেহের পুরো দৈর্ঘ্য জুড়ে উজ্জ্বল লাল পিঠের পাখনা থাকে। এটি খোলা সমুদ্রে উপরিস্তরের নিচে বাস করে এবং জীবিত অবস্থায় খুব কমই দেখা যায়। তীরে ভেসে আসা বৈঠা মাছই সম্ভবত অনেক সামুদ্রিক সাপের কিংবদন্তির উৎস।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Lampriformes',
      family: 'Regalecidae',
      genus: 'Regalecus',
      species: 'R. glesne',
    },
    physical: {
      size: { en: 'Commonly 3–5 m; confirmed up to 8 m, reports of 11 m', bn: 'সাধারণত ৩–৫ মিটার; নিশ্চিতভাবে ৮ মিটার পর্যন্ত, ১১ মিটারেরও বিবরণ আছে' },
      weight: { en: 'Up to about 270 kg', bn: 'প্রায় ২৭০ কেজি পর্যন্ত' },
      lifespan: { en: 'Unknown', bn: 'অজানা' },
      features: {
        en: ['Long, compressed, silvery ribbon-like body', 'Red dorsal fin along the whole back and a red crest on the head', 'Long, oar-like pelvic fins'],
        bn: ['লম্বা, চাপা, রুপালি ফিতার মতো দেহ', 'পুরো পিঠ জুড়ে লাল পাখনা ও মাথায় লাল ঝুঁটি', 'বৈঠার মতো লম্বা শ্রোণি পাখনা'],
      },
    },
    habitat: {
      en: 'Open ocean, mainly in the mesopelagic zone down to about 1,000 m',
      bn: 'খোলা সমুদ্র, প্রধানত প্রায় ১,০০০ মিটার পর্যন্ত মধ্যস্তরে',
    },
    habitats: ['ocean'],
    regions: ['oceans'],
    distribution: {
      en: 'Worldwide in tropical to temperate seas, though rarely encountered.',
      bn: 'সারা বিশ্বের ক্রান্তীয় থেকে নাতিশীতোষ্ণ সমুদ্রে, তবে কদাচিৎ দেখা মেলে।',
    },
    climate: { en: 'Tropical to temperate oceans', bn: 'ক্রান্তীয় থেকে নাতিশীতোষ্ণ মহাসাগর' },
    diet: {
      en: 'Filter-feeder — krill, small crustaceans, small fish and squid',
      bn: 'ছাঁকনভোজী — ক্রিল, ছোট কবচী প্রাণী, ছোট মাছ ও স্কুইড',
    },
    ecologicalRole: {
      en: 'Feeds on zooplankton in the midwater and is eaten by large sharks.',
      bn: 'মধ্যস্তরে প্রাণীপ্লাংকটন খায় এবং নিজে বড় হাঙরের খাদ্য হয়।',
    },
    behavior: {
      en: 'Swims by rippling its long dorsal fin and has been filmed hanging vertically, head up, in the water.',
      bn: 'লম্বা পিঠের পাখনায় ঢেউ তুলে সাঁতার কাটে; পানিতে মাথা ওপরে রেখে খাড়াভাবে ভেসে থাকার ভিডিওও ধারণ করা হয়েছে।',
    },
    range: {
      native: [
        [33.0, -117.5],
        [24.0, -82.0],
        [60.0, 4.0],
        [35.0, 135.0],
        [-34.0, 151.0],
        [-20.0, 57.5],
        [-34.0, 18.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Little known; occasional bycatch'],
        bn: ['খুব কম জানা; মাঝে মাঝে আকস্মিকভাবে ধরা পড়া'],
      },
      initiatives: {
        en: ['Scientific study of stranded specimens'],
        bn: ['তীরে ভেসে আসা নমুনার বৈজ্ঞানিক গবেষণা'],
      },
    },
    facts: {
      en: [
        'In Japan it is known as a “messenger from the sea god’s palace”, and folklore links strandings to earthquakes — a link not supported by scientific study.',
        'It can shed the rear part of its body, which does not grow back.',
      ],
      bn: [
        'জাপানে একে "সমুদ্রদেবতার প্রাসাদের দূত" বলা হয়, আর লোককথায় এর তীরে ভেসে আসাকে ভূমিকম্পের সঙ্গে যুক্ত করা হয় — যদিও বৈজ্ঞানিক গবেষণা এর পক্ষে প্রমাণ পায়নি।',
        'এটি দেহের পেছনের অংশ খসিয়ে ফেলতে পারে, যা আর গজায় না।',
      ],
    },
    related: ['ocean-sunfish', 'sloanes-viperfish', 'giant-squid'],
  },
  {
    id: 'giant-squid',
    commonName: { en: 'Giant Squid', bn: 'দৈত্য স্কুইড' },
    scientificName: 'Architeuthis dux',
    altNames: {
      en: ['Architeuthis', 'Kraken'],
      bn: ['বিশাল স্কুইড', 'ক্র্যাকেন'],
    },
    category: 'marine',
    wikiTitle: 'Giant squid',
    description: {
      en: 'The giant squid is one of the largest invertebrates on Earth, reaching about 12–13 m including its two long feeding tentacles. It has the largest eyes in the animal kingdom, up to 27 cm across. It lives in the deep ocean and was first photographed alive in its natural habitat only in 2004.',
      bn: 'দৈত্য স্কুইড পৃথিবীর বৃহত্তম অমেরুদণ্ডী প্রাণীদের একটি; দুটি লম্বা শিকার-কর্ষিকাসহ এর দৈর্ঘ্য প্রায় ১২–১৩ মিটার পর্যন্ত হয়। প্রাণিজগতে এর চোখই সবচেয়ে বড় — ব্যাস ২৭ সেমি পর্যন্ত। এটি গভীর সমুদ্রে বাস করে; প্রাকৃতিক আবাসে জীবিত অবস্থায় এর প্রথম ছবি তোলা হয় মাত্র ২০০৪ সালে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Mollusca',
      class: 'Cephalopoda',
      order: 'Oegopsida',
      family: 'Architeuthidae',
      genus: 'Architeuthis',
      species: 'A. dux',
    },
    physical: {
      size: { en: 'Females up to about 13 m long including tentacles; males up to about 10 m', bn: 'কর্ষিকাসহ স্ত্রী প্রায় ১৩ মিটার পর্যন্ত; পুরুষ প্রায় ১০ মিটার পর্যন্ত' },
      weight: { en: 'Females up to about 275 kg', bn: 'স্ত্রী প্রায় ২৭৫ কেজি পর্যন্ত' },
      lifespan: { en: 'Probably under 5 years', bn: 'সম্ভবত ৫ বছরের কম' },
      features: {
        en: ['Eight arms and two very long feeding tentacles with toothed suckers', 'Eyes up to 27 cm across', 'Ammonia-rich tissue that keeps it buoyant'],
        bn: ['আটটি বাহু এবং দাঁতযুক্ত চোষকসহ দুটি অত্যন্ত লম্বা শিকার-কর্ষিকা', '২৭ সেমি পর্যন্ত ব্যাসের চোখ', 'অ্যামোনিয়া-সমৃদ্ধ দেহকলা, যা একে ভাসিয়ে রাখে'],
      },
    },
    habitat: {
      en: 'Deep ocean, typically 300–1,000 m, often near continental slopes and islands',
      bn: 'গভীর সমুদ্র, সাধারণত ৩০০–১,০০০ মিটার, প্রায়ই মহীঢাল ও দ্বীপের কাছে',
    },
    habitats: ['ocean'],
    regions: ['oceans'],
    distribution: {
      en: 'Found in all the world’s oceans; most specimens come from Newfoundland, Norway, Spain, South Africa, Japan and New Zealand.',
      bn: 'পৃথিবীর সব মহাসাগরে পাওয়া যায়; বেশিরভাগ নমুনা এসেছে নিউফাউন্ডল্যান্ড, নরওয়ে, স্পেন, দক্ষিণ আফ্রিকা, জাপান ও নিউজিল্যান্ড থেকে।',
    },
    climate: { en: 'Cold to temperate deep water', bn: 'ঠান্ডা থেকে নাতিশীতোষ্ণ গভীর পানি' },
    diet: {
      en: 'Carnivore — deep-sea fish and other squid',
      bn: 'মাংসাশী — গভীর সমুদ্রের মাছ ও অন্যান্য স্কুইড',
    },
    ecologicalRole: {
      en: 'A large deep-sea predator and a major prey of sperm whales.',
      bn: 'গভীর সমুদ্রের বড় শিকারি এবং স্পার্ম তিমির প্রধান খাদ্যগুলোর একটি।',
    },
    behavior: {
      en: 'Seizes prey with its two long tentacles and pulls it to its beak; largely solitary.',
      bn: 'দুটি লম্বা কর্ষিকা দিয়ে শিকার আঁকড়ে ধরে চঞ্চুর কাছে টেনে আনে; সাধারণত একা থাকে।',
    },
    range: {
      native: [
        [47.5, -52.5],
        [63.0, 5.0],
        [43.5, -6.0],
        [-34.5, 18.0],
        [27.0, 142.0],
        [-42.0, 174.0],
        [37.0, -25.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Occasional bycatch in deep-sea trawls', 'Underwater noise from seismic surveys has been linked to strandings'],
        bn: ['গভীর সমুদ্রের ট্রলারে মাঝে মাঝে আকস্মিকভাবে ধরা পড়া', 'সিসমিক জরিপের পানির নিচের শব্দকে তীরে ভেসে আসার সঙ্গে যুক্ত করা হয়েছে'],
      },
      initiatives: {
        en: ['Deep-sea camera expeditions such as the Medusa lure camera'],
        bn: ['মেডুসা টোপ-ক্যামেরার মতো গভীর সমুদ্রের ক্যামেরা অভিযান'],
      },
    },
    facts: {
      en: [
        'Japanese scientists Tsunemi Kubodera and Kyoichi Mori took the first photos of a live giant squid in the wild in 2004.',
        'Genetic studies suggest all giant squids worldwide belong to a single species.',
      ],
      bn: [
        '২০০৪ সালে জাপানি বিজ্ঞানী সুনেমি কুবোদেরা ও কিওইচি মোরি প্রথম প্রকৃতিতে জীবিত দৈত্য স্কুইডের ছবি তোলেন।',
        'জিনগত গবেষণা বলছে, সারা বিশ্বের সব দৈত্য স্কুইড একটিমাত্র প্রজাতির।',
      ],
    },
    related: ['vampire-squid', 'chambered-nautilus', 'common-octopus'],
  },
  {
    id: 'vampire-squid',
    commonName: { en: 'Vampire Squid', bn: 'ভ্যাম্পায়ার স্কুইড' },
    scientificName: 'Vampyroteuthis infernalis',
    altNames: {
      en: ['Vampire Squid from Hell'],
      bn: ['নরকের রক্তচোষা স্কুইড'],
    },
    category: 'marine',
    wikiTitle: 'Vampire squid',
    description: {
      en: 'The vampire squid is a small, dark deep-sea cephalopod with webbed arms like a cloak and large eyes that can look red or blue. Despite its name it is neither a true squid nor an octopus, but the last survivor of its own ancient order. It lives in oxygen-poor water and feeds gently on “marine snow” rather than hunting.',
      bn: 'ভ্যাম্পায়ার স্কুইড গভীর সমুদ্রের একটি ছোট, গাঢ় রঙের মাথাপায়ী প্রাণী; এর বাহুগুলো আলখাল্লার মতো পর্দায় জোড়া, আর বড় চোখ দুটি লাল বা নীল দেখাতে পারে। নাম যা-ই হোক, এটি প্রকৃত স্কুইড বা অক্টোপাস নয়, বরং নিজস্ব এক প্রাচীন বর্গের শেষ জীবিত সদস্য। এটি অক্সিজেন-স্বল্প পানিতে থাকে এবং শিকার না করে শান্তভাবে "সামুদ্রিক তুষার" খেয়ে বাঁচে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Mollusca',
      class: 'Cephalopoda',
      order: 'Vampyromorphida',
      family: 'Vampyroteuthidae',
      genus: 'Vampyroteuthis',
      species: 'V. infernalis',
    },
    physical: {
      size: { en: 'Up to about 30 cm total length', bn: 'মোট দৈর্ঘ্য প্রায় ৩০ সেমি পর্যন্ত' },
      weight: { en: 'Up to about 450 g', bn: 'প্রায় ৪৫০ গ্রাম পর্যন্ত' },
      lifespan: { en: 'Possibly up to about 8 years', bn: 'সম্ভবত প্রায় ৮ বছর পর্যন্ত' },
      features: {
        en: ['Eight webbed arms lined with soft spines (cirri)', 'Two retractile sticky filaments for collecting food', 'Light organs over the body, including at the arm tips'],
        bn: ['নরম কাঁটার মতো সিরাইযুক্ত, পর্দায় জোড়া আটটি বাহু', 'খাবার জড়ো করার জন্য দুটি গুটিয়ে রাখা যায় এমন আঠালো সুতা', 'বাহুর ডগাসহ সারা দেহে আলো-অঙ্গ'],
      },
    },
    habitat: {
      en: 'Oxygen-minimum zone of the deep ocean, mostly 600–1,200 m',
      bn: 'গভীর সমুদ্রের ন্যূনতম অক্সিজেন স্তর, সাধারণত ৬০০–১,২০০ মিটার',
    },
    habitats: ['ocean'],
    regions: ['oceans'],
    distribution: {
      en: 'Tropical and temperate oceans worldwide.',
      bn: 'সারা বিশ্বের ক্রান্তীয় ও নাতিশীতোষ্ণ মহাসাগরে।',
    },
    climate: { en: 'Cold deep water, about 2–6 °C', bn: 'ঠান্ডা গভীর পানি, প্রায় ২–৬ ডিগ্রি সেলসিয়াস' },
    diet: {
      en: 'Detritivore — “marine snow”: sinking particles, faecal pellets and remains of plankton',
      bn: 'অবশেষভোজী — "সামুদ্রিক তুষার": ডুবে আসা কণা, মল-দানা ও প্লাংকটনের অবশেষ',
    },
    ecologicalRole: {
      en: 'Recycles sinking organic matter in the deep sea; eaten by deep-diving fish and whales.',
      bn: 'গভীর সমুদ্রে ডুবে আসা জৈব পদার্থ পুনর্ব্যবহারে ভূমিকা রাখে; গভীরে ডুব দেওয়া মাছ ও তিমি একে খায়।',
    },
    behavior: {
      en: 'When threatened it turns its webbed arms inside out over its body (the “pineapple” posture) and releases glowing mucus instead of ink.',
      bn: 'বিপদ টের পেলে পর্দাযুক্ত বাহুগুলো উল্টে দেহ ঢেকে ফেলে ("আনারস" ভঙ্গি) এবং কালির বদলে আলো জ্বলা শ্লেষ্মা ছাড়ে।',
    },
    range: {
      native: [
        [36.7, -122.3],
        [20.0, -158.0],
        [25.0, -40.0],
        [-10.0, 0.0],
        [-15.0, 70.0],
        [10.0, 130.0],
        [-30.0, -80.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Expansion and change of oxygen-minimum zones with ocean warming'],
        bn: ['সমুদ্রের উষ্ণায়নে ন্যূনতম অক্সিজেন স্তরের বিস্তার ও পরিবর্তন'],
      },
      initiatives: {
        en: ['Deep-sea observation and research, notably by MBARI'],
        bn: ['গভীর সমুদ্রে পর্যবেক্ষণ ও গবেষণা, বিশেষত এমবারির'],
      },
    },
    facts: {
      en: [
        'It was first described in 1903 and was at first mistakenly classified as an octopus.',
        'Its “hell” name comes from its dark colour, cloak-like webbing and red eyes, not its behaviour.',
      ],
      bn: [
        '১৯০৩ সালে প্রথম বর্ণিত হয় এবং প্রথমে একে ভুল করে অক্টোপাস হিসেবে শ্রেণিভুক্ত করা হয়েছিল।',
        'এর "নরক" নামটি এসেছে গাঢ় রং, আলখাল্লার মতো পর্দা ও লাল চোখ থেকে, আচরণ থেকে নয়।',
      ],
    },
    related: ['giant-squid', 'chambered-nautilus', 'barreleye'],
  },
  {
    id: 'chambered-nautilus',
    commonName: { en: 'Chambered Nautilus', bn: 'কক্ষযুক্ত নটিলাস' },
    scientificName: 'Nautilus pompilius',
    altNames: {
      en: ['Emperor Nautilus', 'Pearly Nautilus'],
      bn: ['সম্রাট নটিলাস', 'মুক্তা নটিলাস'],
    },
    category: 'marine',
    wikiTitle: 'Chambered nautilus',
    description: {
      en: 'The chambered nautilus is a shelled cephalopod whose coiled, striped shell is divided into gas-filled chambers that it uses to control buoyancy. It has up to about 90 grasping tentacles without suckers and simple pinhole eyes. Nautiluses are often called living fossils because their basic body plan has persisted for hundreds of millions of years.',
      bn: 'কক্ষযুক্ত নটিলাস খোলসযুক্ত একটি মাথাপায়ী প্রাণী; এর পেঁচানো ডোরাকাটা খোলস কয়েকটি গ্যাসভর্তি কক্ষে ভাগ করা, যা দিয়ে এটি ভেসে থাকা নিয়ন্ত্রণ করে। এর প্রায় ৯০টি পর্যন্ত চোষকহীন আঁকড়ে ধরার কর্ষিকা এবং সরল ছিদ্র-চোখ আছে। কোটি কোটি বছর ধরে এদের মৌলিক দেহগঠন প্রায় একই রয়ে গেছে বলে নটিলাসকে প্রায়ই জীবন্ত জীবাশ্ম বলা হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Mollusca',
      class: 'Cephalopoda',
      order: 'Nautilida',
      family: 'Nautilidae',
      genus: 'Nautilus',
      species: 'N. pompilius',
    },
    physical: {
      size: { en: 'Shell usually 15–20 cm across; up to about 25 cm', bn: 'খোলস সাধারণত ১৫–২০ সেমি চওড়া; সর্বোচ্চ প্রায় ২৫ সেমি' },
      weight: { en: 'About 0.5–1.5 kg', bn: 'প্রায় ০.৫–১.৫ কেজি' },
      lifespan: { en: 'Over 20 years', bn: '২০ বছরেরও বেশি' },
      features: {
        en: ['Coiled shell with reddish-brown stripes and a pearly lining', 'Up to about 90 sucker-less tentacles', 'Pinhole eyes without a lens'],
        bn: ['লালচে-বাদামি ডোরা ও মুক্তার মতো ভেতরের আস্তরসহ পেঁচানো খোলস', 'প্রায় ৯০টি পর্যন্ত চোষকহীন কর্ষিকা', 'লেন্সবিহীন ছিদ্র-চোখ'],
      },
    },
    habitat: {
      en: 'Steep slopes of coral reefs, by day at about 100–500 m and rising shallower at night',
      bn: 'প্রবাল প্রাচীরের খাড়া ঢাল; দিনে প্রায় ১০০–৫০০ মিটার গভীরে, রাতে অপেক্ষাকৃত অগভীরে উঠে আসে',
    },
    habitats: ['coral-reef', 'ocean'],
    regions: ['southeast-asia', 'oceania', 'oceans'],
    distribution: {
      en: 'Indo-West Pacific, including the Philippines, Indonesia, Papua New Guinea, Australia, Palau and Fiji.',
      bn: 'ভারত-পশ্চিম প্রশান্ত মহাসাগর — ফিলিপাইন, ইন্দোনেশিয়া, পাপুয়া নিউগিনি, অস্ট্রেলিয়া, পালাউ ও ফিজিসহ।',
    },
    climate: { en: 'Tropical seas; prefers cool water below about 25 °C', bn: 'ক্রান্তীয় সমুদ্র; প্রায় ২৫ ডিগ্রি সেলসিয়াসের নিচের শীতল পানি পছন্দ করে' },
    diet: {
      en: 'Scavenger and predator — carrion, crustaceans, fish remains and moulted crab shells',
      bn: 'মৃতভোজী ও শিকারি — মৃত প্রাণী, কবচী প্রাণী, মাছের অবশেষ ও কাঁকড়ার ঝরানো খোলস',
    },
    ecologicalRole: {
      en: 'A deep-reef scavenger that helps clean up carrion on reef slopes.',
      bn: 'গভীর প্রাচীরের মৃতভোজী, যা প্রাচীরের ঢালে মৃত প্রাণীর দেহাবশেষ পরিষ্কার করে।',
    },
    behavior: {
      en: 'Moves by jet propulsion and adjusts buoyancy by changing the fluid in its shell chambers; finds food mainly by smell.',
      bn: 'জেট-প্রপালশনের মাধ্যমে চলে এবং খোলসের কক্ষের তরল বদলে ভেসে থাকা নিয়ন্ত্রণ করে; প্রধানত গন্ধ শুঁকে খাবার খুঁজে পায়।',
    },
    range: {
      native: [
        [9.5, 123.5],
        [-8.5, 115.5],
        [-5.0, 145.5],
        [-18.0, 147.0],
        [7.3, 134.5],
        [-18.0, 178.0],
        [-14.3, -170.7],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'decreasing',
      threats: {
        en: ['Overfishing with baited traps for the ornamental shell trade', 'Very slow growth and late maturity (10–15 years)'],
        bn: ['শৌখিন খোলসের ব্যবসার জন্য টোপ দেওয়া ফাঁদে অতিরিক্ত আহরণ', 'অত্যন্ত ধীর বৃদ্ধি ও দেরিতে (১০–১৫ বছরে) প্রজননক্ষম হওয়া'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II since 2017', 'Population surveys with baited remote cameras'],
        bn: ['২০১৭ সাল থেকে সাইটিসের পরিশিষ্ট-২-এ তালিকাভুক্ত', 'টোপযুক্ত দূরনিয়ন্ত্রিত ক্যামেরা দিয়ে সংখ্যা জরিপ'],
      },
    },
    facts: {
      en: [
        'Nautilus ancestors appeared about 500 million years ago, long before the dinosaurs.',
        'The first nuclear-powered submarine, USS Nautilus, shares its name with this animal through Jules Verne’s novel.',
      ],
      bn: [
        'নটিলাসের পূর্বপুরুষেরা প্রায় ৫০ কোটি বছর আগে আবির্ভূত হয়, ডাইনোসরের অনেক আগে।',
        'প্রথম পারমাণবিক শক্তিচালিত সাবমেরিন ইউএসএস নটিলাস জুল ভার্নের উপন্যাসের সূত্রে এই প্রাণীর নাম বহন করে।',
      ],
    },
    related: ['giant-squid', 'vampire-squid', 'common-octopus'],
  },
];
