import type { Species } from '@/types';

export const marineReef1: Species[] = [
  {
    id: 'blue-tang',
    commonName: { en: 'Blue Tang', bn: 'ব্লু ট্যাং' },
    scientificName: 'Paracanthurus hepatus',
    altNames: {
      en: ['Regal Tang', 'Palette Surgeonfish', 'Hippo Tang', 'Dory'],
      bn: ['রিগাল ট্যাং', 'নীল সার্জন মাছ', 'হিপো ট্যাং', 'ডোরি মাছ'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Paracanthurus',
    description: {
      en: 'The blue tang is a vivid royal-blue surgeonfish of Indo-Pacific coral reefs, made world-famous as “Dory” in the film Finding Nemo. Like all surgeonfish it carries a scalpel-sharp spine at the base of its tail. Almost all fish sold in the aquarium trade are still caught from the wild.',
      bn: 'ব্লু ট্যাং ভারত-প্রশান্ত মহাসাগরের প্রবাল প্রাচীরের উজ্জ্বল গাঢ় নীল রঙের একটি সার্জন মাছ; "ফাইন্ডিং নিমো" চলচ্চিত্রের "ডোরি" চরিত্রের কারণে এটি সারা বিশ্বে পরিচিত। অন্যান্য সার্জন মাছের মতো এর লেজের গোড়ায় অস্ত্রোপচারের ছুরির মতো ধারালো একটি কাঁটা থাকে। অ্যাকুরিয়ামের বাজারে বিক্রি হওয়া প্রায় সব মাছই এখনো সমুদ্র থেকে ধরে আনা হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Acanthuriformes',
      family: 'Acanthuridae',
      genus: 'Paracanthurus',
      species: 'P. hepatus',
    },
    physical: {
      size: { en: 'Usually 12–25 cm; up to about 31 cm', bn: 'সাধারণত ১২–২৫ সেমি; সর্বোচ্চ প্রায় ৩১ সেমি' },
      weight: { en: 'Up to about 600 g', bn: 'প্রায় ৬০০ গ্রাম পর্যন্ত' },
      lifespan: { en: 'Thought to live 8–20 years', bn: 'ধারণা করা হয় ৮–২০ বছর বাঁচে' },
      features: {
        en: ['Royal-blue body with a black “palette” pattern', 'Bright yellow tail fin', 'Sharp, venomless spine on each side of the tail base'],
        bn: ['গাঢ় নীল দেহে রং-তুলির প্যালেটের মতো কালো নকশা', 'উজ্জ্বল হলুদ লেজের পাখনা', 'লেজের গোড়ার দুই পাশে ধারালো (বিষহীন) কাঁটা'],
      },
    },
    habitat: {
      en: 'Clear outer-reef slopes and channels with strong currents, often near branching corals',
      bn: 'তীব্র স্রোতযুক্ত স্বচ্ছ পানির বহিঃপ্রাচীরের ঢাল ও চ্যানেল, প্রায়ই শাখাওয়ালা প্রবালের কাছে',
    },
    habitats: ['coral-reef'],
    regions: ['southeast-asia', 'oceania', 'africa', 'oceans'],
    distribution: {
      en: 'Widespread in the Indo-Pacific from East Africa to Japan, the Great Barrier Reef and Samoa.',
      bn: 'পূর্ব আফ্রিকা থেকে জাপান, গ্রেট ব্যারিয়ার রিফ ও সামোয়া পর্যন্ত ভারত-প্রশান্ত মহাসাগরে বিস্তৃত।',
    },
    climate: { en: 'Warm tropical seas, roughly 24–28 °C', bn: 'উষ্ণ ক্রান্তীয় সমুদ্র, মোটামুটি ২৪–২৮ ডিগ্রি সেলসিয়াস' },
    diet: {
      en: 'Omnivore — mainly zooplankton as adults, plus algae',
      bn: 'সর্বভুক — প্রাপ্তবয়স্ক অবস্থায় মূলত প্রাণীপ্লাংকটন, সেই সঙ্গে শৈবাল',
    },
    ecologicalRole: {
      en: 'Grazing on algae helps keep coral surfaces clear so corals can grow.',
      bn: 'শৈবাল খেয়ে প্রবালের উপরিভাগ পরিষ্কার রাখে, ফলে প্রবাল ভালোভাবে বাড়তে পারে।',
    },
    behavior: {
      en: 'Lives in small groups and dives into coral branches when threatened, sometimes “playing dead” on its side.',
      bn: 'ছোট দলে থাকে এবং বিপদ টের পেলে প্রবালের শাখার ভেতরে ঢুকে পড়ে; কখনো কাত হয়ে মরার ভানও করে।',
    },
    range: {
      native: [
        [-18.3, 147.7],
        [7.3, 134.4],
        [8.95, 119.9],
        [-8.6, 115.6],
        [-4.6, 55.6],
        [-13.8, -171.8],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Collection for the aquarium trade', 'Coral bleaching and reef loss', 'Cyanide fishing in parts of Southeast Asia'],
        bn: ['অ্যাকুরিয়াম বাণিজ্যের জন্য ধরা', 'প্রবাল বিবর্ণতা ও প্রাচীর ধ্বংস', 'দক্ষিণ-পূর্ব এশিয়ার কিছু এলাকায় সায়ানাইড দিয়ে মাছ ধরা'],
      },
      initiatives: {
        en: ['Captive-breeding research to reduce wild collection', 'Marine protected areas on Indo-Pacific reefs'],
        bn: ['বন্য মাছ ধরা কমাতে আবদ্ধ প্রজননের গবেষণা', 'ভারত-প্রশান্ত মহাসাগরের প্রাচীরে সংরক্ষিত সামুদ্রিক এলাকা'],
      },
    },
    facts: {
      en: [
        'Scientists first bred it in captivity in 2016 at the University of Florida.',
        'Its flesh can cause ciguatera poisoning, so it is not a food fish.',
      ],
      bn: [
        '২০১৬ সালে যুক্তরাষ্ট্রের ইউনিভার্সিটি অব ফ্লোরিডার বিজ্ঞানীরা প্রথম আবদ্ধ অবস্থায় এর প্রজনন ঘটান।',
        'এর মাংস খেলে সিগুয়াটেরা বিষক্রিয়া হতে পারে, তাই এটি খাওয়ার মাছ নয়।',
      ],
    },
    related: ['yellow-tang', 'ocellaris-clownfish', 'moorish-idol'],
  },
  {
    id: 'moorish-idol',
    commonName: { en: 'Moorish Idol', bn: 'মুরিশ আইডল' },
    scientificName: 'Zanclus cornutus',
    altNames: {
      en: ['Kihikihi'],
      bn: ['মুরিশ আইডল মাছ'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Moorish idol',
    description: {
      en: 'The Moorish idol is a striking reef fish with bold black, white and yellow bands and a long, trailing white dorsal filament. It is the only living member of its family and is common on reefs from East Africa to the eastern Pacific. Despite its popularity it is notoriously hard to keep in aquariums.',
      bn: 'মুরিশ আইডল কালো, সাদা ও হলুদ চওড়া ডোরা এবং পিঠের লম্বা সাদা সুতার মতো পাখনাওয়ালা একটি নজরকাড়া প্রবাল প্রাচীরের মাছ। নিজের পরিবারের এটিই একমাত্র জীবিত প্রজাতি; পূর্ব আফ্রিকা থেকে পূর্ব প্রশান্ত মহাসাগর পর্যন্ত প্রাচীরে এদের প্রায়ই দেখা যায়। জনপ্রিয় হলেও অ্যাকুরিয়ামে একে বাঁচিয়ে রাখা খুবই কঠিন।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Acanthuriformes',
      family: 'Zanclidae',
      genus: 'Zanclus',
      species: 'Z. cornutus',
    },
    physical: {
      size: { en: 'Up to about 23 cm', bn: 'প্রায় ২৩ সেমি পর্যন্ত' },
      weight: { en: 'Usually under 500 g', bn: 'সাধারণত ৫০০ গ্রামের কম' },
      lifespan: { en: 'Not well known; probably several years', bn: 'সঠিক জানা নেই; সম্ভবত কয়েক বছর' },
      features: {
        en: ['Tall, disc-shaped body with black, white and yellow bands', 'Long whip-like white dorsal filament', 'Narrow, tube-like snout with a small orange saddle'],
        bn: ['উঁচু, চাকতির মতো দেহে কালো, সাদা ও হলুদ ডোরা', 'চাবুকের মতো লম্বা সাদা পৃষ্ঠপাখনার সুতা', 'সরু নলের মতো তুণ্ড, তার ওপর ছোট কমলা ছোপ'],
      },
    },
    habitat: {
      en: 'Coral and rocky reefs and lagoons from the shallows to about 180 m',
      bn: 'অগভীর পানি থেকে প্রায় ১৮০ মিটার গভীরতা পর্যন্ত প্রবাল ও পাথুরে প্রাচীর এবং উপহ্রদ',
    },
    habitats: ['coral-reef'],
    regions: ['africa', 'southeast-asia', 'oceania', 'north-america', 'oceans'],
    distribution: {
      en: 'Indo-Pacific and eastern Pacific, from the Red Sea and East Africa to Hawaii and Mexico.',
      bn: 'লোহিত সাগর ও পূর্ব আফ্রিকা থেকে হাওয়াই ও মেক্সিকো পর্যন্ত ভারত-প্রশান্ত ও পূর্ব প্রশান্ত মহাসাগর।',
    },
    climate: { en: 'Tropical and subtropical seas', bn: 'ক্রান্তীয় ও উপক্রান্তীয় সমুদ্র' },
    diet: {
      en: 'Mainly sponges, plus algae and small bottom invertebrates',
      bn: 'মূলত স্পঞ্জ, পাশাপাশি শৈবাল ও তলদেশের ছোট অমেরুদণ্ডী প্রাণী',
    },
    ecologicalRole: {
      en: 'As a sponge-eater it helps stop sponges from overgrowing living corals.',
      bn: 'স্পঞ্জ খেয়ে এটি জীবন্ত প্রবালের ওপর স্পঞ্জের অতিরিক্ত বিস্তার ঠেকাতে সাহায্য করে।',
    },
    behavior: {
      en: 'Usually seen in pairs or small groups, though it may gather in large schools.',
      bn: 'সাধারণত জোড়ায় বা ছোট দলে দেখা যায়, তবে কখনো কখনো বড় ঝাঁকও বাঁধে।',
    },
    range: {
      native: [
        [27.0, 34.5],
        [-4.6, 55.6],
        [-18.3, 147.7],
        [-17.5, -149.8],
        [21.2, -157.8],
        [5.5, -87.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Coral reef degradation and bleaching', 'Local collection for the aquarium trade'],
        bn: ['প্রবাল প্রাচীরের অবক্ষয় ও বিবর্ণতা', 'স্থানীয়ভাবে অ্যাকুরিয়াম বাণিজ্যের জন্য ধরা'],
      },
      initiatives: {
        en: ['Marine protected areas across its range', 'Reef-monitoring programmes in the Pacific'],
        bn: ['বিস্তৃতি এলাকাজুড়ে সংরক্ষিত সামুদ্রিক এলাকা', 'প্রশান্ত মহাসাগরে প্রবাল প্রাচীর পর্যবেক্ষণ কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'Its name is said to come from the Moors of Africa, who believed the fish brought good luck.',
        'It is the only surviving species in the family Zanclidae.',
        'It appears as the character “Gill” in Finding Nemo.',
      ],
      bn: [
        'বলা হয়, আফ্রিকার মুর জাতির মানুষ এই মাছকে সৌভাগ্যের প্রতীক মনে করত, তা থেকেই এর নাম।',
        'জ্যানক্লিডি পরিবারের এটিই একমাত্র টিকে থাকা প্রজাতি।',
        '"ফাইন্ডিং নিমো" চলচ্চিত্রের "গিল" চরিত্রটি এই মাছ।',
      ],
    },
    related: ['blue-tang', 'emperor-angelfish', 'yellow-tang'],
  },
  {
    id: 'mandarinfish',
    commonName: { en: 'Mandarinfish', bn: 'ম্যান্ডারিন মাছ' },
    scientificName: 'Synchiropus splendidus',
    altNames: {
      en: ['Mandarin Dragonet', 'Green Mandarin', 'Psychedelic Mandarin'],
      bn: ['ম্যান্ডারিন ড্রাগনেট', 'সবুজ ম্যান্ডারিন', 'রঙিন ম্যান্ডারিন'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Synchiropus splendidus',
    description: {
      en: 'The mandarinfish is a tiny dragonet of western Pacific reefs, painted in swirls of electric blue, orange and green. It is one of very few animals whose blue colour comes from a true blue pigment in its cells. Shy by day, pairs rise from the reef at dusk in a slow mating dance.',
      bn: 'ম্যান্ডারিন মাছ পশ্চিম প্রশান্ত মহাসাগরের প্রবাল প্রাচীরের একটি ছোট্ট ড্রাগনেট মাছ, যার শরীরে উজ্জ্বল নীল, কমলা ও সবুজ রঙের ঘূর্ণি নকশা আঁকা। খুব কম প্রাণীর মধ্যে এটি একটি, যার নীল রং কোষের প্রকৃত নীল রঞ্জক থেকে আসে। দিনে লাজুক থাকলেও সন্ধ্যায় জোড়ায় জোড়ায় প্রাচীর থেকে ধীরে ধীরে ওপরে উঠে প্রজনন-নৃত্য করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Callionymiformes',
      family: 'Callionymidae',
      genus: 'Synchiropus',
      species: 'S. splendidus',
    },
    physical: {
      size: { en: 'Up to about 6–7 cm', bn: 'প্রায় ৬–৭ সেমি পর্যন্ত' },
      weight: { en: 'Only a few grams', bn: 'মাত্র কয়েক গ্রাম' },
      lifespan: { en: 'About 2–4 years; longer in good aquaria', bn: 'প্রায় ২–৪ বছর; ভালো অ্যাকুরিয়ামে আরও বেশি' },
      features: {
        en: ['Blue, orange and green wavy patterns', 'Scaleless skin coated in foul-smelling, toxic mucus', 'Males have a tall, spiny first dorsal fin'],
        bn: ['নীল, কমলা ও সবুজ ঢেউখেলানো নকশা', 'আঁশহীন চামড়া দুর্গন্ধযুক্ত বিষাক্ত শ্লেষ্মায় ঢাকা', 'পুরুষের প্রথম পৃষ্ঠপাখনা উঁচু ও কাঁটাযুক্ত'],
      },
    },
    habitat: {
      en: 'Sheltered lagoons and inshore reefs among coral rubble and branching corals',
      bn: 'সুরক্ষিত উপহ্রদ ও তীরবর্তী প্রাচীরে প্রবালের ভাঙা টুকরো ও শাখাওয়ালা প্রবালের ফাঁকে',
    },
    habitats: ['coral-reef'],
    regions: ['southeast-asia', 'east-asia', 'oceania', 'oceans'],
    distribution: {
      en: 'Western Pacific, from the Ryukyu Islands to the Philippines, Indonesia, Palau and northern Australia.',
      bn: 'পশ্চিম প্রশান্ত মহাসাগর — রিউকিউ দ্বীপপুঞ্জ থেকে ফিলিপাইন, ইন্দোনেশিয়া, পালাউ ও উত্তর অস্ট্রেলিয়া পর্যন্ত।',
    },
    climate: { en: 'Warm tropical seas', bn: 'উষ্ণ ক্রান্তীয় সমুদ্র' },
    diet: {
      en: 'Tiny crustaceans such as copepods and amphipods, picked one by one',
      bn: 'কোপেপড ও অ্যাম্ফিপডের মতো খুদে খোলসি প্রাণী, একটি একটি করে খুঁটে খায়',
    },
    ecologicalRole: {
      en: 'A specialist predator of tiny crustaceans living among coral rubble.',
      bn: 'প্রবালের ভাঙা টুকরোর মাঝে বাস করা খুদে খোলসি প্রাণীর বিশেষায়িত শিকারি।',
    },
    behavior: {
      en: 'Slow-moving and secretive; females choose larger males for spawning at dusk.',
      bn: 'ধীরগতির ও লুকিয়ে থাকা স্বভাবের; সন্ধ্যায় প্রজননের জন্য স্ত্রী মাছ বড় পুরুষকে বেছে নেয়।',
    },
    range: {
      native: [
        [9.6, 123.8],
        [-8.5, 119.5],
        [7.3, 134.4],
        [-16.5, 145.9],
        [26.3, 127.6],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Collection for the aquarium trade', 'Destruction of sheltered lagoon reefs'],
        bn: ['অ্যাকুরিয়াম বাণিজ্যের জন্য ধরা', 'সুরক্ষিত উপহ্রদের প্রাচীর ধ্বংস'],
      },
      initiatives: {
        en: ['Captive breeding for the aquarium hobby', 'Marine protected areas in the Coral Triangle'],
        bn: ['অ্যাকুরিয়াম শখের জন্য আবদ্ধ প্রজনন', 'কোরাল ট্রায়াঙ্গল অঞ্চলে সংরক্ষিত সামুদ্রিক এলাকা'],
      },
    },
    facts: {
      en: [
        'Its blue colour comes from special cells called cyanophores — almost unique among vertebrates.',
        'Its toxic slime makes it unpleasant to predators.',
      ],
      bn: [
        'এর নীল রং আসে "সায়ানোফোর" নামের বিশেষ কোষ থেকে — মেরুদণ্ডী প্রাণীদের মধ্যে যা প্রায় অনন্য।',
        'এর বিষাক্ত শ্লেষ্মার কারণে শিকারি প্রাণীরা একে খেতে পছন্দ করে না।',
      ],
    },
    related: ['blue-tang', 'ocellaris-clownfish'],
  },
  {
    id: 'emperor-angelfish',
    commonName: { en: 'Emperor Angelfish', bn: 'সম্রাট অ্যাঞ্জেল মাছ' },
    scientificName: 'Pomacanthus imperator',
    altNames: {
      en: ['Imperator Angelfish', 'Emperor Angel'],
      bn: ['এম্পেরর অ্যাঞ্জেলফিশ', 'সম্রাট অ্যাঞ্জেল'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Emperor angelfish',
    description: {
      en: 'The emperor angelfish is one of the most admired reef fish, with yellow and blue stripes and a dark mask across its eyes. Juveniles look completely different — dark blue with white rings — and change colour as they mature. It is common on reefs from the Red Sea to the central Pacific.',
      bn: 'সম্রাট অ্যাঞ্জেল মাছ প্রবাল প্রাচীরের সবচেয়ে আকর্ষণীয় মাছগুলোর একটি; এর দেহে হলুদ-নীল ডোরা আর চোখের ওপর দিয়ে গাঢ় মুখোশের মতো দাগ। বাচ্চা মাছ দেখতে সম্পূর্ণ আলাদা — গাঢ় নীলের ওপর সাদা বলয় — বড় হতে হতে রং বদলে যায়। লোহিত সাগর থেকে মধ্য প্রশান্ত মহাসাগর পর্যন্ত প্রাচীরে এদের প্রায়ই দেখা যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Acanthuriformes',
      family: 'Pomacanthidae',
      genus: 'Pomacanthus',
      species: 'P. imperator',
    },
    physical: {
      size: { en: 'Up to about 40 cm', bn: 'প্রায় ৪০ সেমি পর্যন্ত' },
      weight: { en: 'Up to about 1.5 kg', bn: 'প্রায় ১.৫ কেজি পর্যন্ত' },
      lifespan: { en: 'Over 20 years in aquaria', bn: 'অ্যাকুরিয়ামে ২০ বছরেরও বেশি' },
      features: {
        en: ['Adults: yellow and blue horizontal stripes with a black eye mask', 'Juveniles: dark blue with concentric white rings', 'Strong spine on the gill cover'],
        bn: ['প্রাপ্তবয়স্ক: হলুদ-নীল আড়াআড়ি ডোরা ও চোখে কালো মুখোশ', 'বাচ্চা: গাঢ় নীলের ওপর এককেন্দ্রিক সাদা বলয়', 'কানকোর ঢাকনায় শক্ত কাঁটা'],
      },
    },
    habitat: {
      en: 'Coral-rich lagoons, reef flats and outer slopes, often near caves and ledges',
      bn: 'প্রবালসমৃদ্ধ উপহ্রদ, প্রাচীরের সমতল ও বহিঃঢাল, প্রায়ই গুহা ও খাঁজের কাছে',
    },
    habitats: ['coral-reef'],
    regions: ['africa', 'south-asia', 'southeast-asia', 'oceania', 'oceans'],
    distribution: {
      en: 'Indo-Pacific from the Red Sea and East Africa to Hawaii, Japan and the Great Barrier Reef.',
      bn: 'লোহিত সাগর ও পূর্ব আফ্রিকা থেকে হাওয়াই, জাপান ও গ্রেট ব্যারিয়ার রিফ পর্যন্ত ভারত-প্রশান্ত মহাসাগর।',
    },
    climate: { en: 'Tropical seas', bn: 'ক্রান্তীয় সমুদ্র' },
    diet: {
      en: 'Sponges, tunicates and algae',
      bn: 'স্পঞ্জ, টিউনিকেট ও শৈবাল',
    },
    ecologicalRole: {
      en: 'Feeds on sponges and other encrusting animals, helping keep space open for corals; juveniles may clean other fish.',
      bn: 'স্পঞ্জ ও অন্যান্য আস্তরণ-প্রাণী খেয়ে প্রবালের জন্য জায়গা খালি রাখে; বাচ্চা মাছ অন্য মাছের শরীর পরিষ্কারও করে।',
    },
    behavior: {
      en: 'Territorial; adults can make a loud knocking sound when alarmed or defending territory.',
      bn: 'এলাকাভিত্তিক; ভয় পেলে বা এলাকা রক্ষা করতে প্রাপ্তবয়স্ক মাছ জোরে ঠকঠক শব্দ করতে পারে।',
    },
    range: {
      native: [
        [27.0, 34.5],
        [-4.6, 55.6],
        [4.2, 73.5],
        [-18.3, 147.7],
        [7.3, 134.4],
        [-21.0, 55.1],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Collection for the aquarium trade', 'Coral reef decline'],
        bn: ['অ্যাকুরিয়াম বাণিজ্যের জন্য ধরা', 'প্রবাল প্রাচীরের অবক্ষয়'],
      },
      initiatives: {
        en: ['Marine protected areas in the Indian Ocean and Pacific', 'Captive breeding for the aquarium trade'],
        bn: ['ভারত ও প্রশান্ত মহাসাগরে সংরক্ষিত সামুদ্রিক এলাকা', 'অ্যাকুরিয়াম বাণিজ্যের জন্য আবদ্ধ প্রজনন'],
      },
    },
    facts: {
      en: [
        'Juveniles look so different from adults that they were once thought to be a separate species.',
        'The colour change from juvenile to adult can take more than two years.',
      ],
      bn: [
        'বাচ্চা ও প্রাপ্তবয়স্ক মাছ এত আলাদা দেখতে যে একসময় এদের ভিন্ন প্রজাতি ভাবা হতো।',
        'বাচ্চা থেকে প্রাপ্তবয়স্কের রঙে বদলাতে দুই বছরেরও বেশি সময় লাগতে পারে।',
      ],
    },
    related: ['moorish-idol', 'blue-tang', 'bluestreak-cleaner-wrasse'],
  },
  {
    id: 'yellow-tang',
    commonName: { en: 'Yellow Tang', bn: 'হলুদ ট্যাং' },
    scientificName: 'Zebrasoma flavescens',
    altNames: {
      en: ['Lau‘ipala', 'Yellow Sailfin Tang'],
      bn: ['হলুদ সার্জন মাছ', 'হলুদ পালতোলা ট্যাং'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Yellow tang',
    description: {
      en: 'The yellow tang is a bright lemon-yellow surgeonfish best known from the reefs of Hawaii. It is one of the most popular fish in the marine aquarium trade. Like other tangs it grazes algae all day and carries a white, scalpel-like spine near its tail.',
      bn: 'হলুদ ট্যাং উজ্জ্বল লেবু-হলুদ রঙের একটি সার্জন মাছ, যা মূলত হাওয়াইয়ের প্রবাল প্রাচীরের জন্য পরিচিত। সামুদ্রিক অ্যাকুরিয়ামের সবচেয়ে জনপ্রিয় মাছগুলোর একটি এটি। অন্যান্য ট্যাংয়ের মতো এটিও সারাদিন শৈবাল খায় এবং লেজের কাছে ছুরির মতো একটি সাদা কাঁটা বহন করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Acanthuriformes',
      family: 'Acanthuridae',
      genus: 'Zebrasoma',
      species: 'Z. flavescens',
    },
    physical: {
      size: { en: 'Up to about 20 cm', bn: 'প্রায় ২০ সেমি পর্যন্ত' },
      weight: { en: 'Up to about 250 g', bn: 'প্রায় ২৫০ গ্রাম পর্যন্ত' },
      lifespan: { en: 'Can exceed 30 years in the wild', bn: 'প্রকৃতিতে ৩০ বছরেরও বেশি বাঁচতে পারে' },
      features: {
        en: ['Bright yellow, flat, oval body', 'Tall sail-like dorsal and anal fins', 'White spine at the tail base'],
        bn: ['উজ্জ্বল হলুদ, চ্যাপ্টা, ডিম্বাকার দেহ', 'পালের মতো উঁচু পৃষ্ঠ ও পায়ু পাখনা', 'লেজের গোড়ায় সাদা কাঁটা'],
      },
    },
    habitat: {
      en: 'Shallow reefs and lagoons, usually 2–45 m deep; juveniles shelter in finger corals',
      bn: 'অগভীর প্রাচীর ও উপহ্রদ, সাধারণত ২–৪৫ মিটার গভীরে; বাচ্চারা আঙুল-প্রবালের ফাঁকে আশ্রয় নেয়',
    },
    habitats: ['coral-reef'],
    regions: ['oceania', 'east-asia', 'north-america', 'oceans'],
    distribution: {
      en: 'Pacific Ocean — mainly Hawaii, also the Ryukyu, Mariana, Marshall and Wake islands.',
      bn: 'প্রশান্ত মহাসাগর — মূলত হাওয়াই, এ ছাড়া রিউকিউ, মারিয়ানা, মার্শাল ও ওয়েক দ্বীপপুঞ্জ।',
    },
    climate: { en: 'Tropical and subtropical seas', bn: 'ক্রান্তীয় ও উপক্রান্তীয় সমুদ্র' },
    diet: {
      en: 'Herbivore — grazes filamentous algae and seaweed',
      bn: 'তৃণভোজী — সুতার মতো শৈবাল ও সামুদ্রিক আগাছা খায়',
    },
    ecologicalRole: {
      en: 'An important algae grazer that stops seaweed from smothering corals.',
      bn: 'গুরুত্বপূর্ণ শৈবালভোজী, যা সামুদ্রিক আগাছাকে প্রবাল ঢেকে ফেলতে দেয় না।',
    },
    behavior: {
      en: 'Grazes in loose groups by day; at night its colour fades and a white stripe appears.',
      bn: 'দিনে ছড়ানো দলে চরে বেড়ায়; রাতে রং ফ্যাকাশে হয়ে যায় এবং গায়ে একটি সাদা ডোরা ফুটে ওঠে।',
    },
    range: {
      native: [
        [19.7, -156.1],
        [21.2, -157.8],
        [20.6, -156.6],
        [28.2, -177.4],
        [13.4, 144.6],
        [26.3, 127.6],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Heavy collection for the aquarium trade in Hawaii', 'Coral bleaching from marine heatwaves'],
        bn: ['হাওয়াইয়ে অ্যাকুরিয়াম বাণিজ্যের জন্য ব্যাপক হারে ধরা', 'সামুদ্রিক তাপপ্রবাহে প্রবাল বিবর্ণতা'],
      },
      initiatives: {
        en: ['Fish replenishment areas and collection limits in West Hawaii', 'Commercial captive breeding'],
        bn: ['পশ্চিম হাওয়াইয়ে মাছ পুনরুদ্ধার এলাকা ও ধরার সীমা', 'বাণিজ্যিকভাবে আবদ্ধ প্রজনন'],
      },
    },
    facts: {
      en: [
        'It was the most collected fish in Hawaii’s aquarium trade for decades.',
        'Captive-bred yellow tangs became commercially available in the 2010s.',
      ],
      bn: [
        'বহু দশক ধরে হাওয়াইয়ের অ্যাকুরিয়াম বাণিজ্যে সবচেয়ে বেশি ধরা মাছ ছিল এটি।',
        '২০১০-এর দশকে আবদ্ধ অবস্থায় জন্মানো হলুদ ট্যাং বাজারে আসতে শুরু করে।',
      ],
    },
    related: ['blue-tang', 'moorish-idol'],
  },
  {
    id: 'green-humphead-parrotfish',
    commonName: { en: 'Green Humphead Parrotfish', bn: 'সবুজ কুঁজো টিয়া মাছ' },
    scientificName: 'Bolbometopon muricatum',
    altNames: {
      en: ['Bumphead Parrotfish', 'Humphead Parrotfish', 'Giant Humphead Parrotfish'],
      bn: ['বাম্পহেড প্যারটফিশ', 'হাম্পহেড প্যারটফিশ', 'দানব টিয়া মাছ'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Green humphead parrotfish',
    description: {
      en: 'The green humphead parrotfish is the largest parrotfish in the world, with a bulging forehead and beak-like teeth. Herds of these giants crunch through reefs, grinding coral into fine sand. Because they sleep in predictable groups at night, they have been wiped out by spearfishing on many reefs.',
      bn: 'সবুজ কুঁজো টিয়া মাছ পৃথিবীর সবচেয়ে বড় প্যারটফিশ; এর কপাল ফুলে উঁচু হয়ে থাকে আর দাঁত টিয়াপাখির ঠোঁটের মতো। এই দৈত্যাকার মাছেরা দল বেঁধে প্রাচীর চিবিয়ে প্রবাল গুঁড়িয়ে মিহি বালুতে পরিণত করে। রাতে নির্দিষ্ট জায়গায় দল বেঁধে ঘুমায় বলে বহু প্রাচীরে বর্শা দিয়ে শিকারের ফলে এরা প্রায় নিশ্চিহ্ন হয়ে গেছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Labriformes',
      family: 'Scaridae',
      genus: 'Bolbometopon',
      species: 'B. muricatum',
    },
    physical: {
      size: { en: 'Up to about 1.3 m long', bn: 'প্রায় ১.৩ মিটার পর্যন্ত লম্বা' },
      weight: { en: 'Up to about 46 kg or more', bn: 'প্রায় ৪৬ কেজি বা তারও বেশি' },
      lifespan: { en: 'Up to about 40 years', bn: 'প্রায় ৪০ বছর পর্যন্ত' },
      features: {
        en: ['Large bony hump on the forehead', 'Fused, beak-like teeth often pale or exposed', 'Greyish-green body; the largest parrotfish'],
        bn: ['কপালে বড় হাড়ের কুঁজ', 'জোড়া লাগা ঠোঁটের মতো দাঁত, প্রায়ই সাদাটে ও বাইরে বের হয়ে থাকে', 'ধূসর-সবুজ দেহ; সবচেয়ে বড় প্যারটফিশ'],
      },
    },
    habitat: {
      en: 'Clear outer lagoons and seaward reefs, usually 1–30 m deep',
      bn: 'স্বচ্ছ পানির বহিঃউপহ্রদ ও সমুদ্রমুখী প্রাচীর, সাধারণত ১–৩০ মিটার গভীরে',
    },
    habitats: ['coral-reef'],
    regions: ['africa', 'southeast-asia', 'oceania', 'oceans'],
    distribution: {
      en: 'Indo-Pacific from the Red Sea and East Africa to Samoa, Japan and the Great Barrier Reef.',
      bn: 'লোহিত সাগর ও পূর্ব আফ্রিকা থেকে সামোয়া, জাপান ও গ্রেট ব্যারিয়ার রিফ পর্যন্ত ভারত-প্রশান্ত মহাসাগর।',
    },
    climate: { en: 'Tropical seas', bn: 'ক্রান্তীয় সমুদ্র' },
    diet: {
      en: 'Live coral and algae scraped and bitten from the reef',
      bn: 'প্রাচীর থেকে কামড়ে ও চেঁছে নেওয়া জীবন্ত প্রবাল ও শৈবাল',
    },
    ecologicalRole: {
      en: 'A major reef engineer: a single adult can turn several tonnes of reef into sand each year.',
      bn: 'প্রাচীরের প্রধান "প্রকৌশলী": একটি প্রাপ্তবয়স্ক মাছ বছরে কয়েক টন প্রাচীর বালুতে পরিণত করতে পারে।',
    },
    behavior: {
      en: 'Moves in herds by day and sleeps in groups in caves or on the reef at night; males ram heads during contests.',
      bn: 'দিনে দল বেঁধে চলে আর রাতে গুহায় বা প্রাচীরে দলবদ্ধভাবে ঘুমায়; লড়াইয়ে পুরুষেরা মাথা দিয়ে ঢুঁস মারে।',
    },
    range: {
      native: [
        [27.0, 34.5],
        [-4.6, 55.6],
        [-18.3, 147.7],
        [7.3, 134.4],
        [-8.5, 119.5],
        [-22.4, 166.4],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Night-time spearfishing of sleeping groups', 'Overfishing for food', 'Loss of coral reef and juvenile lagoon habitat'],
        bn: ['রাতে ঘুমন্ত দলকে বর্শা দিয়ে শিকার', 'খাদ্যের জন্য অতিরিক্ত মাছ ধরা', 'প্রবাল প্রাচীর ও বাচ্চাদের উপহ্রদ আবাস ধ্বংস'],
      },
      initiatives: {
        en: ['Bans on night spearfishing with SCUBA in several Pacific nations', 'Large no-take marine reserves'],
        bn: ['প্রশান্ত মহাসাগরের কয়েকটি দেশে স্কুবা নিয়ে রাতে বর্শা-শিকার নিষিদ্ধ', 'মাছ ধরা নিষিদ্ধ বড় সামুদ্রিক সংরক্ষিত এলাকা'],
      },
    },
    facts: {
      en: [
        'Much of the white sand on tropical beaches has passed through parrotfish guts.',
        'Males are thought to be the only fish known to head-butt each other in contests.',
      ],
      bn: [
        'ক্রান্তীয় সৈকতের সাদা বালুর বড় একটি অংশ প্যারটফিশের পেটের ভেতর দিয়ে তৈরি হয়েছে।',
        'ধারণা করা হয়, প্রতিদ্বন্দ্বিতায় মাথা দিয়ে ঢুঁস মারা একমাত্র জানা মাছ এরাই।',
      ],
    },
    related: ['staghorn-coral', 'elkhorn-coral', 'emperor-angelfish'],
  },
  {
    id: 'reef-stonefish',
    commonName: { en: 'Reef Stonefish', bn: 'পাথর মাছ' },
    scientificName: 'Synanceia verrucosa',
    altNames: {
      en: ['Stonefish', 'Estuarine Stonefish'],
      bn: ['স্টোনফিশ', 'রিফ স্টোনফিশ'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Synanceia verrucosa',
    description: {
      en: 'The reef stonefish is the most venomous fish known, perfectly disguised as a lump of algae-covered rock. Thirteen sharp spines along its back inject venom that causes excruciating pain and can be fatal to humans. It lies motionless on the seabed and ambushes passing fish in a split second.',
      bn: 'পাথর মাছ বা রিফ স্টোনফিশ পৃথিবীর সবচেয়ে বিষধর মাছ হিসেবে পরিচিত; শৈবালে ঢাকা পাথরের টুকরোর মতো দেখতে বলে একে চেনাই কঠিন। পিঠের ১৩টি ধারালো কাঁটা থেকে এমন বিষ ঢোকে, যা অসহ্য যন্ত্রণা দেয় এবং মানুষের মৃত্যুও ঘটাতে পারে। এটি সমুদ্রতলে নিশ্চল পড়ে থাকে এবং পাশ দিয়ে যাওয়া মাছকে চোখের পলকে গিলে ফেলে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Scorpaeniformes',
      family: 'Synanceiidae',
      genus: 'Synanceia',
      species: 'S. verrucosa',
    },
    physical: {
      size: { en: 'Usually 30–35 cm; up to about 40 cm', bn: 'সাধারণত ৩০–৩৫ সেমি; সর্বোচ্চ প্রায় ৪০ সেমি' },
      weight: { en: 'Up to about 2.4 kg', bn: 'প্রায় ২.৪ কেজি পর্যন্ত' },
      lifespan: { en: 'Not well known; possibly 5–10 years', bn: 'সঠিক জানা নেই; সম্ভবত ৫–১০ বছর' },
      features: {
        en: ['Warty, mottled skin that looks like rock or coral', '13 venomous dorsal spines', 'Upturned mouth and small eyes on top of the head'],
        bn: ['আঁচিলযুক্ত, ছোপছোপ চামড়া, দেখতে পাথর বা প্রবালের মতো', 'পিঠে ১৩টি বিষাক্ত কাঁটা', 'ঊর্ধ্বমুখী মুখ এবং মাথার ওপরে ছোট চোখ'],
      },
    },
    habitat: {
      en: 'Shallow reef flats, rubble and rocky bottoms, often half-buried in sand',
      bn: 'অগভীর প্রাচীর-সমতল, প্রবালের ভাঙা টুকরো ও পাথুরে তলদেশ, প্রায়ই বালুতে আধা-চাপা অবস্থায়',
    },
    habitats: ['coral-reef'],
    regions: ['africa', 'south-asia', 'southeast-asia', 'oceania', 'oceans'],
    distribution: {
      en: 'Indo-Pacific from the Red Sea and East Africa to French Polynesia, Japan and Australia.',
      bn: 'লোহিত সাগর ও পূর্ব আফ্রিকা থেকে ফরাসি পলিনেশিয়া, জাপান ও অস্ট্রেলিয়া পর্যন্ত ভারত-প্রশান্ত মহাসাগর।',
    },
    climate: { en: 'Tropical seas', bn: 'ক্রান্তীয় সমুদ্র' },
    diet: {
      en: 'Ambush predator of small fish, shrimps and other crustaceans',
      bn: 'ওত পেতে থাকা শিকারি — ছোট মাছ, চিংড়ি ও অন্যান্য খোলসি প্রাণী খায়',
    },
    ecologicalRole: {
      en: 'A camouflaged ambush predator that helps control small reef fish and crustaceans.',
      bn: 'ছদ্মবেশী ওত-পাতা শিকারি, যা প্রাচীরের ছোট মাছ ও খোলসি প্রাণীর সংখ্যা নিয়ন্ত্রণে রাখে।',
    },
    behavior: {
      en: 'Stays still for hours and does not flee when stepped on — it simply raises its spines.',
      bn: 'ঘণ্টার পর ঘণ্টা নিশ্চল থাকে; কেউ পা দিলেও পালায় না, শুধু কাঁটা খাড়া করে দেয়।',
    },
    range: {
      native: [
        [27.0, 34.5],
        [-4.6, 55.6],
        [-18.3, 147.7],
        [-17.5, -149.8],
        [9.6, 123.8],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Local fishing and live-food trade', 'Coral reef degradation'],
        bn: ['স্থানীয়ভাবে মাছ ধরা ও জীবন্ত মাছের খাদ্য-বাণিজ্য', 'প্রবাল প্রাচীরের অবক্ষয়'],
      },
      initiatives: {
        en: ['Stonefish antivenom produced in Australia', 'Public safety education for reef walkers'],
        bn: ['অস্ট্রেলিয়ায় স্টোনফিশের প্রতিষেধক (অ্যান্টিভেনম) তৈরি', 'প্রাচীরে হাঁটা মানুষের জন্য জনসচেতনতামূলক নিরাপত্তা শিক্ষা'],
      },
    },
    facts: {
      en: [
        'Caution: a sting is a medical emergency — immerse the wound in hot (not scalding) water and seek hospital care.',
        'It can survive out of water for several hours at low tide.',
        'Despite its venom, it is eaten as a delicacy in parts of East Asia once the spines are removed.',
      ],
      bn: [
        'সতর্কতা: পাথর মাছের কাঁটা বিঁধলে তা জরুরি চিকিৎসার বিষয় — ক্ষতস্থান সহনীয় গরম পানিতে ডুবিয়ে রেখে দ্রুত হাসপাতালে যান।',
        'ভাটার সময় এটি কয়েক ঘণ্টা পানির বাইরেও বেঁচে থাকতে পারে।',
        'বিষধর হলেও পূর্ব এশিয়ার কিছু অঞ্চলে কাঁটা ফেলে দিয়ে একে বিশেষ খাবার হিসেবে খাওয়া হয়।',
      ],
    },
    related: ['porcupinefish', 'giant-moray'],
  },
  {
    id: 'porcupinefish',
    commonName: { en: 'Spot-fin Porcupinefish', bn: 'কাঁটাওয়ালা পটকা মাছ' },
    scientificName: 'Diodon hystrix',
    altNames: {
      en: ['Porcupinefish', 'Balloonfish', 'Blowfish'],
      bn: ['পোরকুপাইন ফিশ', 'বেলুন মাছ', 'কাঁটা পটকা'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Diodon hystrix',
    description: {
      en: 'The spot-fin porcupinefish is a large, slow-swimming fish that can gulp water to inflate into a spiky ball when threatened. Its sharp spines normally lie flat against the body. Its internal organs contain the deadly nerve poison tetrodotoxin, making it dangerous to eat.',
      bn: 'কাঁটাওয়ালা পটকা মাছ ধীরগতিতে সাঁতার কাটা একটি বড় মাছ; বিপদে পড়লে পানি গিলে ফুলে কাঁটাওয়ালা বলের মতো হয়ে যায়। স্বাভাবিক অবস্থায় এর ধারালো কাঁটাগুলো শরীরের সঙ্গে লেপ্টে থাকে। এর অভ্যন্তরীণ অঙ্গে টেট্রোডোটক্সিন নামের প্রাণঘাতী স্নায়ুবিষ থাকে, তাই এটি খাওয়া বিপজ্জনক।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Tetraodontiformes',
      family: 'Diodontidae',
      genus: 'Diodon',
      species: 'D. hystrix',
    },
    physical: {
      size: { en: 'Commonly 40 cm; up to about 90 cm', bn: 'সাধারণত ৪০ সেমি; সর্বোচ্চ প্রায় ৯০ সেমি' },
      weight: { en: 'Up to about 3 kg', bn: 'প্রায় ৩ কেজি পর্যন্ত' },
      lifespan: { en: 'About 10 years', bn: 'প্রায় ১০ বছর' },
      features: {
        en: ['Body covered in long spines that stand up when inflated', 'Fused, beak-like teeth for crushing shells', 'Large eyes; pale body with small dark spots including on the fins'],
        bn: ['শরীরজুড়ে লম্বা কাঁটা, ফুললে খাড়া হয়ে যায়', 'খোলস ভাঙার জন্য জোড়া লাগা ঠোঁটের মতো দাঁত', 'বড় চোখ; হালকা রঙের দেহে ও পাখনায় ছোট কালো ফোঁটা'],
      },
    },
    habitat: {
      en: 'Coral reefs, lagoons and rocky areas, hiding in caves by day',
      bn: 'প্রবাল প্রাচীর, উপহ্রদ ও পাথুরে এলাকা; দিনে গুহায় লুকিয়ে থাকে',
    },
    habitats: ['coral-reef', 'ocean'],
    regions: ['oceans', 'africa', 'southeast-asia', 'oceania', 'north-america', 'south-america'],
    distribution: {
      en: 'Circumtropical — in tropical waters of the Atlantic, Indian and Pacific oceans.',
      bn: 'বিশ্বব্যাপী ক্রান্তীয় অঞ্চলে — আটলান্টিক, ভারত ও প্রশান্ত মহাসাগরের উষ্ণ পানিতে।',
    },
    climate: { en: 'Tropical and warm subtropical seas', bn: 'ক্রান্তীয় ও উষ্ণ উপক্রান্তীয় সমুদ্র' },
    diet: {
      en: 'Hard-shelled invertebrates — sea urchins, snails, crabs and hermit crabs',
      bn: 'শক্ত খোলসওয়ালা অমেরুদণ্ডী প্রাণী — সামুদ্রিক আর্চিন, শামুক, কাঁকড়া ও সন্ন্যাসী কাঁকড়া',
    },
    ecologicalRole: {
      en: 'Controls sea urchin and snail numbers, which helps protect seaweed and coral balance.',
      bn: 'সামুদ্রিক আর্চিন ও শামুকের সংখ্যা নিয়ন্ত্রণ করে, ফলে শৈবাল ও প্রবালের ভারসাম্য বজায় থাকে।',
    },
    behavior: {
      en: 'Solitary and nocturnal; inflates only as a last defence, since it is stressful for the fish.',
      bn: 'একাকী ও নিশাচর; ফুলে ওঠা এর জন্য কষ্টকর, তাই কেবল শেষ প্রতিরক্ষা হিসেবেই তা করে।',
    },
    range: {
      native: [
        [-18.3, 147.7],
        [24.6, -81.4],
        [-4.6, 55.6],
        [21.2, -157.8],
        [5.5, -87.0],
        [-3.8, -32.4],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Capture for the curio trade (dried, inflated fish)', 'Bycatch and reef degradation'],
        bn: ['শুকিয়ে ফোলানো স্মারক-বস্তু হিসেবে বিক্রির জন্য ধরা', 'অনিচ্ছাকৃত জালে ধরা পড়া ও প্রাচীরের অবক্ষয়'],
      },
      initiatives: {
        en: ['Protection within marine reserves', 'Discouraging sale of dried pufferfish souvenirs'],
        bn: ['সামুদ্রিক সংরক্ষিত এলাকায় সুরক্ষা', 'শুকনো পটকা মাছের স্মারক বিক্রিতে নিরুৎসাহিত করা'],
      },
    },
    facts: {
      en: [
        'Poisonous: its organs contain tetrodotoxin, which can be fatal if eaten.',
        'It can swell to several times its normal size in seconds.',
      ],
      bn: [
        'বিষাক্ত: এর অঙ্গে টেট্রোডোটক্সিন থাকে, যা খেলে মৃত্যু হতে পারে।',
        'মাত্র কয়েক সেকেন্ডে এটি স্বাভাবিক আকারের কয়েক গুণ ফুলে উঠতে পারে।',
      ],
    },
    related: ['reef-stonefish', 'giant-moray'],
  },
  {
    id: 'giant-moray',
    commonName: { en: 'Giant Moray', bn: 'দানব মোরে বাইম' },
    scientificName: 'Gymnothorax javanicus',
    altNames: {
      en: ['Giant Moray Eel', 'Java Moray'],
      bn: ['জায়ান্ট মোরে ইল', 'জাভা মোরে'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Giant moray',
    description: {
      en: 'The giant moray is the bulkiest moray eel, reaching up to 3 m long and around 30 kg. It hides in reef crevices with its mouth open, which helps it breathe rather than signalling aggression. It sometimes hunts in partnership with groupers, one of the few known cases of cooperation between fish species.',
      bn: 'দানব মোরে সবচেয়ে ভারী মোরে বাইম; এটি প্রায় ৩ মিটার লম্বা ও ৩০ কেজি পর্যন্ত ভারী হতে পারে। প্রাচীরের ফাটলে মুখ খুলে বসে থাকে — এটি আক্রমণের ইঙ্গিত নয়, বরং শ্বাস নেওয়ার কৌশল। কখনো কখনো গ্রুপার মাছের সঙ্গে জোট বেঁধে শিকার করে, যা দুই ভিন্ন প্রজাতির মাছের সহযোগিতার বিরল দৃষ্টান্ত।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Anguilliformes',
      family: 'Muraenidae',
      genus: 'Gymnothorax',
      species: 'G. javanicus',
    },
    physical: {
      size: { en: 'Up to about 3 m long', bn: 'প্রায় ৩ মিটার পর্যন্ত লম্বা' },
      weight: { en: 'Up to about 30 kg', bn: 'প্রায় ৩০ কেজি পর্যন্ত' },
      lifespan: { en: 'Up to about 30–36 years', bn: 'প্রায় ৩০–৩৬ বছর পর্যন্ত' },
      features: {
        en: ['Thick brown body with dark leopard-like spots', 'Black patch around the gill opening', 'Second set of jaws in the throat to pull prey in'],
        bn: ['মোটা বাদামি দেহে চিতাবাঘের মতো কালো ছোপ', 'কানকোর ছিদ্রের চারপাশে কালো দাগ', 'শিকার টেনে নিতে গলার ভেতরে দ্বিতীয় এক জোড়া চোয়াল'],
      },
    },
    habitat: {
      en: 'Crevices and caves of lagoons and seaward reefs, down to about 50 m',
      bn: 'উপহ্রদ ও সমুদ্রমুখী প্রাচীরের ফাটল ও গুহা, প্রায় ৫০ মিটার গভীরতা পর্যন্ত',
    },
    habitats: ['coral-reef'],
    regions: ['africa', 'south-asia', 'southeast-asia', 'oceania', 'oceans'],
    distribution: {
      en: 'Indo-Pacific from the Red Sea and East Africa to Hawaii and the Pitcairn Islands.',
      bn: 'লোহিত সাগর ও পূর্ব আফ্রিকা থেকে হাওয়াই ও পিটকেয়ার্ন দ্বীপপুঞ্জ পর্যন্ত ভারত-প্রশান্ত মহাসাগর।',
    },
    climate: { en: 'Tropical seas', bn: 'ক্রান্তীয় সমুদ্র' },
    diet: {
      en: 'Fish, octopuses, crabs and other crustaceans, mostly at night',
      bn: 'মাছ, অক্টোপাস, কাঁকড়া ও অন্যান্য খোলসি প্রাণী, বেশিরভাগ রাতে',
    },
    ecologicalRole: {
      en: 'A top reef predator that can flush prey out of crevices that other hunters cannot reach.',
      bn: 'প্রাচীরের শীর্ষ শিকারি; যেসব ফাটলে অন্য শিকারি পৌঁছাতে পারে না, সেখান থেকে শিকার বের করে আনে।',
    },
    behavior: {
      en: 'Mostly nocturnal; by day it rests in a crevice, opening and closing its mouth to pump water over the gills.',
      bn: 'মূলত নিশাচর; দিনে ফাটলে বিশ্রাম নেয় এবং ফুলকায় পানি চালাতে বারবার মুখ খোলে ও বন্ধ করে।',
    },
    range: {
      native: [
        [27.0, 34.5],
        [4.2, 73.5],
        [-18.3, 147.7],
        [21.2, -157.8],
        [-17.5, -149.8],
        [-24.4, -128.3],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Coral reef degradation', 'Local fishing'],
        bn: ['প্রবাল প্রাচীরের অবক্ষয়', 'স্থানীয়ভাবে মাছ ধরা'],
      },
      initiatives: {
        en: ['Protection in marine reserves', 'Dive-tourism codes discouraging hand-feeding'],
        bn: ['সামুদ্রিক সংরক্ষিত এলাকায় সুরক্ষা', 'হাতে খাওয়ানো নিরুৎসাহিত করতে ডুবুরি-পর্যটন আচরণবিধি'],
      },
    },
    facts: {
      en: [
        'Caution: large individuals often carry ciguatera toxin and should not be eaten.',
        'Its “pharyngeal jaws” shoot forward from the throat to grab prey — like the monster in the film Alien.',
      ],
      bn: [
        'সতর্কতা: বড় আকারের মাছের শরীরে প্রায়ই সিগুয়াটেরা বিষ থাকে, তাই এটি খাওয়া উচিত নয়।',
        'এর গলার ভেতরের চোয়াল সামনে ছুটে এসে শিকার ধরে — ঠিক "এলিয়েন" চলচ্চিত্রের দানবের মতো।',
      ],
    },
    related: ['reef-stonefish', 'porcupinefish', 'bluestreak-cleaner-wrasse'],
  },
];
