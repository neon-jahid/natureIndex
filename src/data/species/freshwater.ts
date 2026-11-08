import type { Species } from '@/types';

export const freshwater: Species[] = [
  {
    id: 'ganges-river-dolphin',
    commonName: { en: 'Ganges River Dolphin', bn: 'গাঙ্গেয় শুশুক' },
    scientificName: 'Platanista gangetica',
    altNames: {
      en: ['Susu', 'Shushuk', 'South Asian River Dolphin', 'Blind River Dolphin', 'Ganges Dolphin'],
      bn: ['শুশুক', 'শিশু', 'শুশু', 'গাঙ্গেয় ডলফিন', 'নদীর ডলফিন'],
    },
    synonyms: ['Platanista gangetica gangetica', 'Delphinus gangeticus'],
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Ganges river dolphin',
    description: {
      en: 'The Ganges river dolphin, known in Bangladesh as the shushuk, is a nearly blind freshwater dolphin of the Ganges–Brahmaputra–Meghna and Karnaphuli–Sangu river systems. It finds its way and its food in muddy water using echolocation, and must surface every minute or two to breathe — a familiar sight for boatmen on Bangladesh’s rivers. It is the national aquatic animal of India.',
      bn: 'গাঙ্গেয় শুশুক মিঠাপানির এক ধরনের ডলফিন, যা গঙ্গা–পদ্মা, ব্রহ্মপুত্র–যমুনা, মেঘনা এবং কর্ণফুলী–সাঙ্গু নদীতে বাস করে। এরা প্রায় অন্ধ; ঘোলা পানিতে শব্দের প্রতিধ্বনি (ইকোলোকেশন) কাজে লাগিয়ে পথ চেনে ও খাবার খোঁজে। প্রতি এক-দুই মিনিট পরপর শ্বাস নিতে পানির ওপর ভেসে ওঠে — বাংলাদেশের নদীতে মাঝিমাল্লাদের কাছে এটি অতি চেনা দৃশ্য। এটি ভারতের জাতীয় জলজ প্রাণী।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Platanistidae',
      genus: 'Platanista',
      species: 'P. gangetica',
    },
    physical: {
      size: {
        en: 'Females up to about 2.6 m; males up to about 2.1 m',
        bn: 'স্ত্রী প্রায় ২.৬ মিটার পর্যন্ত; পুরুষ প্রায় ২.১ মিটার পর্যন্ত',
      },
      weight: {
        en: '70–90 kg',
        bn: '৭০–৯০ কেজি',
      },
      lifespan: {
        en: 'About 28–30 years',
        bn: 'প্রায় ২৮–৩০ বছর',
      },
      features: {
        en: [
          'Long, narrow beak packed with sharp interlocking teeth',
          'Tiny eyes without a lens — it can only sense light and its direction',
          'Low, triangular hump instead of a tall dorsal fin',
          'Broad, paddle-like flippers and a flexible neck',
        ],
        bn: [
          'লম্বা ও সরু চঞ্চু, তাতে ধারালো দাঁত পরস্পর আটকে থাকে',
          'খুব ছোট চোখ, তাতে লেন্স নেই — শুধু আলো ও আলোর দিক টের পায়',
          'উঁচু পিঠ-পাখনার বদলে পিঠে নিচু ত্রিকোণাকার কুঁজ',
          'চওড়া বৈঠার মতো পাখনা এবং নমনীয় ঘাড়',
        ],
      },
    },
    habitat: {
      en: 'Deep pools and eddies of large, turbid rivers, especially at river confluences; also tidal channels of the Sundarbans',
      bn: 'বড় ও ঘোলা নদীর গভীর অংশ ও ঘূর্ণিস্রোত, বিশেষত নদীর মোহনা ও সংযোগস্থল; সুন্দরবনের জোয়ার-ভাটার খালেও দেখা যায়',
    },
    habitats: ['rivers-lakes', 'mangrove'],
    regions: ['south-asia'],
    distribution: {
      en: 'India, Bangladesh and Nepal, in the Ganges–Padma, Brahmaputra–Jamuna, Meghna and Karnaphuli–Sangu river systems and their tributaries.',
      bn: 'ভারত, বাংলাদেশ ও নেপাল — গঙ্গা–পদ্মা, ব্রহ্মপুত্র–যমুনা, মেঘনা এবং কর্ণফুলী–সাঙ্গু নদী ও এদের শাখানদীতে।',
    },
    climate: {
      en: 'Tropical and subtropical monsoon climate with large seasonal floods',
      bn: 'বর্ষায় বড় বন্যা হয় এমন ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Fish (carps, catfish, gobies) and freshwater prawns, often caught near the river bottom',
      bn: 'মাছ (রুই-জাতীয় মাছ, বিভিন্ন জাতের ক্যাটফিশ বা মাগুর-জাতীয় মাছ, বেলে মাছ) ও মিঠাপানির চিংড়ি; সাধারণত নদীর তলদেশের কাছ থেকে শিকার করে',
    },
    ecologicalRole: {
      en: 'The top predator of South Asia’s great rivers; healthy dolphin numbers indicate healthy river flow and fish stocks.',
      bn: 'দক্ষিণ এশিয়ার বড় নদীগুলোর শীর্ষ শিকারি; শুশুকের সংখ্যা ভালো থাকা মানে নদীর প্রবাহ ও মাছের মজুত ভালো আছে।',
    },
    behavior: {
      en: 'Usually seen alone or in small groups. Often swims on its side, sweeping its beak through the mud. Produces almost continuous echolocation clicks to navigate.',
      bn: 'সাধারণত একা বা ছোট দলে দেখা যায়। প্রায়ই কাত হয়ে সাঁতার কাটে এবং চঞ্চু দিয়ে তলার কাদা হাতড়ে খাবার খোঁজে। চলাফেরার জন্য প্রায় অবিরাম ক্লিক শব্দ (ইকোলোকেশন) তৈরি করে।',
    },
    range: {
      native: [
        [24.3, 88.6],
        [23.6, 90.6],
        [24.9, 89.7],
        [22.4, 89.6],
        [22.35, 91.9],
        [25.6, 85.1],
        [26.2, 91.7],
        [27.0, 81.0],
      ],
      endemicTo: { en: 'Indian subcontinent (Ganges–Brahmaputra–Meghna basin)', bn: 'ভারতীয় উপমহাদেশ (গঙ্গা–ব্রহ্মপুত্র–মেঘনা অববাহিকা)' },
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      population: {
        en: 'About 6,300 counted in India (2025 national survey); a few thousand at most across the whole range',
        bn: 'ভারতে প্রায় ৬,৩০০টি (২০২৫ সালের জাতীয় জরিপ); পুরো বিস্তৃতি মিলিয়ে বড়জোর কয়েক হাজার',
      },
      threats: {
        en: ['Accidental drowning in fishing nets', 'Dams and barrages that fragment rivers and reduce flow', 'Water pollution from industry and agriculture', 'Sand and gravel mining', 'Hunting for oil used as fish bait'],
        bn: ['মাছ ধরার জালে আটকে ডুবে মারা যাওয়া', 'বাঁধ ও ব্যারাজের কারণে নদী বিচ্ছিন্ন হওয়া ও প্রবাহ কমে যাওয়া', 'শিল্প ও কৃষিজ দূষণ', 'বালু ও নুড়ি উত্তোলন', 'মাছ ধরার টোপ হিসেবে তেল সংগ্রহের জন্য শিকার'],
      },
      initiatives: {
        en: ['Dolphin sanctuaries in the Sundarbans and other rivers of Bangladesh', 'Project Dolphin in India', 'Vikramshila Gangetic Dolphin Sanctuary, Bihar', 'Halda River protection and community dolphin monitoring'],
        bn: ['সুন্দরবন ও বাংলাদেশের অন্যান্য নদীতে ডলফিন অভয়াশ্রম', 'ভারতে প্রজেক্ট ডলফিন', 'বিহারের বিক্রমশীলা গাঙ্গেয় ডলফিন অভয়ারণ্য', 'হালদা নদী সংরক্ষণ ও স্থানীয়দের অংশগ্রহণে শুশুক পর্যবেক্ষণ'],
      },
      assessed: '2022',
    },
    facts: {
      en: [
        'The name “shushuk” imitates the sound it makes when it surfaces to breathe.',
        'It is one of the very few functionally blind mammals.',
        'October 5 is celebrated as National Dolphin Day in India.',
      ],
      bn: [
        'শ্বাস নিতে ভেসে ওঠার সময় যে ‘শুশ’ শব্দ হয়, তা থেকেই ‘শুশুক’ নামের উৎপত্তি।',
        'যে অল্প কয়েকটি স্তন্যপায়ী প্রাণী কার্যত অন্ধ, শুশুক তাদের একটি।',
        'ভারতে ৫ অক্টোবর জাতীয় ডলফিন দিবস হিসেবে পালিত হয়।',
      ],
    },
    related: ['irrawaddy-dolphin', 'gharial', 'hilsa', 'giant-freshwater-prawn'],
  },
  {
    id: 'giant-freshwater-prawn',
    commonName: { en: 'Giant Freshwater Prawn', bn: 'গলদা চিংড়ি' },
    scientificName: 'Macrobrachium rosenbergii',
    altNames: {
      en: ['Giant River Prawn', 'Malaysian Prawn', 'Freshwater Shrimp', 'Scampi'],
      bn: ['গলদা', 'চিংড়ি', 'মিঠাপানির চিংড়ি', 'গলদা চিংড়ি মাছ'],
    },
    category: 'freshwater',
    wikiTitle: 'Macrobrachium rosenbergii',
    description: {
      en: 'The giant freshwater prawn, known in Bangladesh as golda chingri, is one of the largest freshwater prawns in the world. Adults live in rivers, canals and ponds, but their larvae need brackish estuary water to survive. It is a major aquaculture species, and golda farming in the ghers of Khulna, Bagerhat and Jessore is an important source of export income for Bangladesh.',
      bn: 'গলদা চিংড়ি পৃথিবীর সবচেয়ে বড় মিঠাপানির চিংড়িগুলোর একটি। পূর্ণবয়স্ক চিংড়ি নদী, খাল ও পুকুরে থাকে, কিন্তু এদের লার্ভা বা শূককীট বাঁচার জন্য মোহনার লোনা-মিঠা মেশানো পানির প্রয়োজন হয়। এটি চাষের জন্য অত্যন্ত গুরুত্বপূর্ণ প্রজাতি — খুলনা, বাগেরহাট ও যশোরের ঘেরে গলদা চাষ বাংলাদেশের রপ্তানি আয়ের একটি বড় উৎস।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Malacostraca',
      order: 'Decapoda',
      family: 'Palaemonidae',
      genus: 'Macrobrachium',
      species: 'M. rosenbergii',
    },
    physical: {
      size: {
        en: 'Males up to about 32 cm long (body); females smaller',
        bn: 'পুরুষ (দেহ) প্রায় ৩২ সেমি পর্যন্ত লম্বা; স্ত্রী তুলনামূলক ছোট',
      },
      weight: {
        en: 'Large males can exceed 400 g; farmed prawns are usually 30–100 g',
        bn: 'বড় পুরুষ চিংড়ির ওজন ৪০০ গ্রামেরও বেশি হতে পারে; চাষের চিংড়ি সাধারণত ৩০–১০০ গ্রাম',
      },
      lifespan: {
        en: 'About 2–3 years',
        bn: 'প্রায় ২–৩ বছর',
      },
      features: {
        en: [
          'Very long second pair of walking legs ending in claws — bright blue in dominant males',
          'Long, toothed rostrum (head spine) curving upward',
          'Bluish-grey to brownish body that turns orange-red when cooked',
        ],
        bn: [
          'দ্বিতীয় জোড়া পা খুব লম্বা, আগায় দাঁড়া — প্রভাবশালী পুরুষ চিংড়ির দাঁড়া উজ্জ্বল নীল',
          'মাথার সামনে লম্বা, খাঁজকাটা ও ওপরের দিকে বাঁকানো কাঁটা (রোস্ট্রাম)',
          'দেহ নীলচে-ধূসর থেকে বাদামি; রান্না করলে কমলা-লাল হয়ে যায়',
        ],
      },
    },
    habitat: {
      en: 'Rivers, canals, lakes, floodplains and ponds connected to brackish estuaries',
      bn: 'নদী, খাল, হ্রদ, প্লাবনভূমি ও পুকুর — যেগুলো লোনা পানির মোহনার সঙ্গে যুক্ত',
    },
    habitats: ['rivers-lakes', 'wetland', 'mangrove'],
    regions: ['south-asia', 'southeast-asia', 'oceania'],
    distribution: {
      en: 'Native from India and Bangladesh through Southeast Asia to New Guinea and northern Australia; farmed and introduced in many tropical countries.',
      bn: 'ভারত ও বাংলাদেশ থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে নিউ গিনি ও উত্তর অস্ট্রেলিয়া পর্যন্ত এদের প্রাকৃতিক আবাস; চাষের জন্য বহু ক্রান্তীয় দেশে নেওয়া হয়েছে।',
    },
    climate: {
      en: 'Warm tropical waters, ideally 28–31 °C',
      bn: 'উষ্ণ ক্রান্তীয় পানি; আদর্শ তাপমাত্রা ২৮–৩১ ডিগ্রি সেলসিয়াস',
    },
    diet: {
      en: 'Omnivore — aquatic insects, worms, small molluscs and crustaceans, algae and decaying plant matter',
      bn: 'সর্বভুক — জলজ পোকা, কেঁচোজাতীয় প্রাণী, ছোট শামুক-ঝিনুক ও চিংড়িজাতীয় প্রাণী, শৈবাল ও পচা উদ্ভিদাংশ',
    },
    ecologicalRole: {
      en: 'Recycles organic matter on river bottoms and is an important food for fish, birds, otters and river dolphins.',
      bn: 'নদীর তলদেশের জৈব পদার্থ পুনর্ব্যবহারে ভূমিকা রাখে এবং মাছ, পাখি, ভোঁদড় ও শুশুকের গুরুত্বপূর্ণ খাদ্য।',
    },
    behavior: {
      en: 'Mostly nocturnal; hides by day. Females carry eggs under the abdomen and migrate downstream so larvae hatch in brackish water; juveniles then move back upstream. Males form a social hierarchy shown by claw colour.',
      bn: 'মূলত নিশাচর; দিনে লুকিয়ে থাকে। মা চিংড়ি পেটের নিচে ডিম নিয়ে নদীর ভাটিতে নেমে আসে, যাতে লোনা পানিতে লার্ভা ফোটে; পরে ছোট চিংড়িরা আবার উজানে ফিরে যায়। পুরুষদের মধ্যে একধরনের সামাজিক ক্রমবিন্যাস থাকে, যা দাঁড়ার রং দেখে বোঝা যায়।',
    },
    range: {
      native: [
        [22.65, 89.8],
        [22.8, 89.55],
        [22.0, 88.5],
        [13.5, 100.6],
        [3.5, 101.0],
        [-0.5, 104.5],
        [-7.5, 141.5],
        [-12.5, 131.0],
      ],
      introduced: [
        [21.4, -157.9],
        [-3.7, -38.5],
        [22.5, 113.4],
        [23.0, 120.2],
        [18.2, -66.5],
        [-20.2, 57.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Overfishing of wild broodstock and juveniles', 'Barrages and dams blocking migration to estuaries', 'Water pollution and pesticides', 'Disease outbreaks in farms'],
        bn: ['প্রাকৃতিক উৎস থেকে মা চিংড়ি ও পোনা অতিরিক্ত আহরণ', 'বাঁধ ও ব্যারাজের কারণে মোহনায় যাতায়াতের পথ বন্ধ হওয়া', 'পানিদূষণ ও কীটনাশক', 'খামারে রোগের প্রাদুর্ভাব'],
      },
      initiatives: {
        en: ['Hatchery-produced post-larvae to reduce wild seed collection', 'Bangladesh Fisheries Research Institute breeding programmes', 'Seasonal fishing restrictions in rivers'],
        bn: ['প্রাকৃতিক পোনা আহরণ কমাতে হ্যাচারিতে পোনা উৎপাদন', 'বাংলাদেশ মৎস্য গবেষণা ইনস্টিটিউটের প্রজনন কর্মসূচি', 'নদীতে মৌসুমভিত্তিক মাছ ধরায় নিষেধাজ্ঞা'],
      },
    },
    facts: {
      en: [
        'Larvae die within a few days if kept in pure freshwater.',
        'A male’s claws can be longer than its whole body.',
        'Golda and bagda (tiger shrimp) together are often called Bangladesh’s “white gold”.',
      ],
      bn: [
        'লার্ভা শুধু মিঠাপানিতে রাখলে কয়েক দিনের মধ্যেই মারা যায়।',
        'পুরুষ গলদার দাঁড়া কখনো কখনো পুরো দেহের চেয়েও লম্বা হয়।',
        'গলদা ও বাগদা চিংড়িকে একসঙ্গে বাংলাদেশের ‘সাদা সোনা’ বলা হয়।',
      ],
    },
    related: ['rohu', 'hilsa', 'ganges-river-dolphin'],
  },
  {
    id: 'platypus',
    commonName: { en: 'Platypus', bn: 'প্লাটিপাস' },
    scientificName: 'Ornithorhynchus anatinus',
    altNames: {
      en: ['Duck-billed Platypus', 'Duckbill'],
      bn: ['হংসচঞ্চু', 'হাঁসঠোঁটি প্লাটিপাস'],
    },
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Platypus',
    description: {
      en: 'The platypus is one of the strangest animals on Earth — an egg-laying mammal with a duck-like bill, a beaver-like tail and webbed feet. Found only in eastern Australia, it hunts in streams with its eyes, ears and nostrils closed, finding prey through electric and touch sensors in its bill. Males carry a venomous spur on each hind leg.',
      bn: 'প্লাটিপাস পৃথিবীর সবচেয়ে অদ্ভুত প্রাণীগুলোর একটি — এটি ডিম পাড়া স্তন্যপায়ী, যার ঠোঁট হাঁসের মতো, লেজ বিভারের মতো আর পায়ে পর্দা। কেবল পূর্ব অস্ট্রেলিয়ায় পাওয়া যায়। পানির নিচে শিকার করার সময় এরা চোখ, কান ও নাক বন্ধ করে রাখে এবং ঠোঁটের বৈদ্যুতিক ও স্পর্শ-সংবেদী কোষের সাহায্যে শিকার খুঁজে নেয়। পুরুষ প্লাটিপাসের পেছনের দুই পায়ে বিষাক্ত কাঁটা থাকে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Monotremata',
      family: 'Ornithorhynchidae',
      genus: 'Ornithorhynchus',
      species: 'O. anatinus',
    },
    physical: {
      size: {
        en: 'Total length 40–60 cm including the tail',
        bn: 'লেজসহ মোট দৈর্ঘ্য ৪০–৬০ সেমি',
      },
      weight: {
        en: '0.7–2.4 kg; males are larger than females',
        bn: '০.৭–২.৪ কেজি; পুরুষ স্ত্রীর চেয়ে বড়',
      },
      lifespan: {
        en: 'Up to about 21 years in the wild',
        bn: 'বনে প্রায় ২১ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Soft, rubbery bill packed with electroreceptors',
          'Webbed front feet for swimming; webbing folds back for walking and digging',
          'Flat tail that stores fat',
          'Dense waterproof fur that glows under ultraviolet light',
        ],
        bn: [
          'নরম, রাবারের মতো ঠোঁট, যাতে অসংখ্য বিদ্যুৎ-সংবেদী কোষ',
          'সাঁতারের জন্য সামনের পায়ে পর্দা; হাঁটা ও গর্ত খোঁড়ার সময় পর্দা গুটিয়ে যায়',
          'চ্যাপ্টা লেজ, যাতে চর্বি জমা থাকে',
          'ঘন, পানিরোধী লোম, যা অতিবেগুনি আলোয় জ্বলজ্বল করে',
        ],
      },
    },
    habitat: {
      en: 'Freshwater rivers, streams, lakes and ponds with earth banks for burrows',
      bn: 'মিঠাপানির নদী, ঝরনা, হ্রদ ও পুকুর — যেখানে গর্ত খোঁড়ার মতো মাটির পাড় আছে',
    },
    habitats: ['rivers-lakes', 'temperate-forest', 'tropical-forest'],
    regions: ['oceania'],
    distribution: {
      en: 'Eastern Australia from northern Queensland to Victoria, and Tasmania; introduced to Kangaroo Island in South Australia.',
      bn: 'পূর্ব অস্ট্রেলিয়ার উত্তর কুইন্সল্যান্ড থেকে ভিক্টোরিয়া পর্যন্ত এবং তাসমানিয়া; দক্ষিণ অস্ট্রেলিয়ার ক্যাঙারু দ্বীপে মানুষের মাধ্যমে নেওয়া হয়েছে।',
    },
    climate: {
      en: 'From tropical highlands to cold alpine streams in the Australian Alps and Tasmania',
      bn: 'ক্রান্তীয় উচ্চভূমি থেকে শুরু করে অস্ট্রেলীয় আল্পস ও তাসমানিয়ার ঠান্ডা পাহাড়ি ঝরনা পর্যন্ত',
    },
    diet: {
      en: 'Carnivore — insect larvae, freshwater shrimps, yabbies, worms and small molluscs',
      bn: 'মাংসাশী — পোকার লার্ভা, মিঠাপানির ছোট চিংড়ি, ইয়াবি (মিঠাপানির গলদাজাতীয় প্রাণী), কেঁচোজাতীয় প্রাণী ও ছোট শামুক-ঝিনুক',
    },
    ecologicalRole: {
      en: 'A predator of stream invertebrates and an indicator of healthy freshwater ecosystems.',
      bn: 'ঝরনা ও নদীর অমেরুদণ্ডী প্রাণীর শিকারি এবং সুস্থ মিঠাপানির বাস্তুতন্ত্রের নির্দেশক।',
    },
    behavior: {
      en: 'Solitary and mostly active at dawn, dusk and night. Spends up to 12 hours a day foraging underwater, storing prey in cheek pouches. Females lay 1–3 eggs in a nesting burrow and feed the young milk that oozes from skin patches — they have no nipples.',
      bn: 'একাকী এবং মূলত ভোর, সন্ধ্যা ও রাতে সক্রিয়। দিনে ১২ ঘণ্টা পর্যন্ত পানির নিচে খাবার খোঁজে এবং গালের থলেতে শিকার জমিয়ে রাখে। মা প্লাটিপাস গর্তের ভেতর ১–৩টি ডিম পাড়ে; এদের বোঁটা নেই, তাই চামড়ার বিশেষ অংশ থেকে চুইয়ে পড়া দুধ খেয়ে বাচ্চা বড় হয়।',
    },
    range: {
      native: [
        [-17.2, 145.6],
        [-27.5, 152.8],
        [-33.7, 150.3],
        [-36.4, 148.3],
        [-37.8, 145.9],
        [-42.0, 146.5],
        [-41.2, 145.9],
      ],
      introduced: [[-35.8, 136.8]],
      endemicTo: { en: 'Eastern Australia and Tasmania', bn: 'পূর্ব অস্ট্রেলিয়া ও তাসমানিয়া' },
    },
    conservation: {
      status: 'NT',
      trend: 'decreasing',
      threats: {
        en: ['Drought and reduced river flows', 'Dams and water extraction', 'Drowning in opera-house yabby traps and fishing nets', 'Bank erosion and land clearing', 'Predation by foxes and dogs'],
        bn: ['খরা ও নদীর প্রবাহ কমে যাওয়া', 'বাঁধ নির্মাণ ও পানি উত্তোলন', 'ইয়াবি ধরার ফাঁদ ও মাছ ধরার জালে আটকে ডুবে যাওয়া', 'নদীর পাড় ভাঙন ও বন উজাড়', 'শিয়াল ও কুকুরের আক্রমণ'],
      },
      initiatives: {
        en: ['Bans on enclosed yabby traps in several Australian states', 'Riverbank restoration projects', 'Citizen-science sighting programmes such as platypusSPOT', 'Environmental DNA (eDNA) surveys'],
        bn: ['অস্ট্রেলিয়ার কয়েকটি অঙ্গরাজ্যে বন্ধ ধরনের ইয়াবি-ফাঁদ নিষিদ্ধ', 'নদীর পাড় পুনরুদ্ধার প্রকল্প', 'প্লাটিপাসস্পট (platypusSPOT)-এর মতো নাগরিক বিজ্ঞান কর্মসূচি', 'পরিবেশগত ডিএনএ (eDNA) জরিপ'],
      },
      assessed: '2016',
    },
    facts: {
      en: [
        'When the first specimen reached Britain in 1799, scientists thought it was a hoax made of sewn-together animals.',
        'The platypus has no stomach — its gullet connects directly to the intestine.',
        'Male venom is not deadly to humans but causes severe, long-lasting pain.',
      ],
      bn: [
        '১৭৯৯ সালে প্রথম নমুনাটি ব্রিটেনে পৌঁছালে বিজ্ঞানীরা ভেবেছিলেন, এটি কয়েকটি প্রাণী সেলাই করে জোড়া লাগানো কোনো ধাপ্পা।',
        'প্লাটিপাসের পাকস্থলী নেই — খাদ্যনালি সরাসরি অন্ত্রের সঙ্গে যুক্ত।',
        'পুরুষের বিষ মানুষের জন্য প্রাণঘাতী নয়, তবে তীব্র ও দীর্ঘস্থায়ী ব্যথা সৃষ্টি করে।',
      ],
    },
    related: ['giant-otter', 'axolotl', 'ganges-river-dolphin'],
  },
  {
    id: 'giant-otter',
    commonName: { en: 'Giant Otter', bn: 'দৈত্যাকার ভোঁদড়' },
    scientificName: 'Pteronura brasiliensis',
    altNames: {
      en: ['Giant River Otter', 'River Wolf', 'Ariranha'],
      bn: ['ভোঁদড়', 'উদবিড়াল', 'নদীর নেকড়ে'],
    },
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Giant otter',
    description: {
      en: 'The giant otter is the longest member of the weasel family, reaching up to 1.8 m. It lives in noisy family groups along the rivers, lakes and swamps of South America, especially the Amazon and the Pantanal, and is nicknamed the “river wolf” for hunting fish together. Each otter has a unique creamy throat patch that works like a fingerprint.',
      bn: 'দৈত্যাকার ভোঁদড় বেজি পরিবারের (মাস্টেলিডি) সবচেয়ে লম্বা সদস্য, যা ১.৮ মিটার পর্যন্ত লম্বা হতে পারে। দক্ষিণ আমেরিকার নদী, হ্রদ ও জলাভূমিতে — বিশেষত আমাজন ও পান্তানালে — এরা হইচই করা পারিবারিক দলে বাস করে। দল বেঁধে মাছ শিকার করে বলে একে ‘নদীর নেকড়ে’ বলা হয়। প্রতিটি ভোঁদড়ের গলায় ঘিয়ে রঙের একটি আলাদা নকশার ছোপ থাকে, যা মানুষের আঙুলের ছাপের মতোই অনন্য।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Mustelidae',
      genus: 'Pteronura',
      species: 'P. brasiliensis',
    },
    physical: {
      size: {
        en: 'Total length 1.5–1.8 m including a tail of about 65 cm',
        bn: 'প্রায় ৬৫ সেমি লম্বা লেজসহ মোট দৈর্ঘ্য ১.৫–১.৮ মিটার',
      },
      weight: {
        en: 'Males 26–32 kg; females 22–26 kg',
        bn: 'পুরুষ ২৬–৩২ কেজি; স্ত্রী ২২–২৬ কেজি',
      },
      lifespan: {
        en: 'Around 8–10 years in the wild; up to about 17 years in captivity',
        bn: 'বনে প্রায় ৮–১০ বছর; আবদ্ধ অবস্থায় প্রায় ১৭ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Dense, velvety chocolate-brown fur',
          'Unique cream-coloured throat markings on every individual',
          'Flattened, paddle-like tail and large webbed feet',
          'Sensitive whiskers for detecting fish in murky water',
        ],
        bn: [
          'ঘন, মখমলের মতো চকলেট-বাদামি লোম',
          'প্রত্যেকের গলায় আলাদা নকশার ঘিয়ে রঙের ছোপ',
          'চ্যাপ্টা, বৈঠার মতো লেজ এবং পর্দাযুক্ত বড় পা',
          'ঘোলা পানিতে মাছের উপস্থিতি টের পাওয়ার জন্য সংবেদনশীল গোঁফ',
        ],
      },
    },
    habitat: {
      en: 'Slow-moving rivers, oxbow lakes, creeks and swamps in tropical rainforest and wetlands',
      bn: 'ক্রান্তীয় রেইনফরেস্ট ও জলাভূমির ধীরগতির নদী, বাঁওড়, খাঁড়ি ও জলাবন',
    },
    habitats: ['rivers-lakes', 'tropical-forest', 'wetland'],
    regions: ['south-america'],
    distribution: {
      en: 'The Amazon, Orinoco and La Plata river systems and the Guianas — mainly Brazil, Peru, Bolivia, Colombia, Venezuela, Guyana, Suriname, French Guiana, Ecuador and Paraguay. Extinct in Argentina and Uruguay, although sightings have returned to Argentina.',
      bn: 'আমাজন, ওরিনোকো ও লা প্লাটা নদী অববাহিকা এবং গায়ানা অঞ্চল — প্রধানত ব্রাজিল, পেরু, বলিভিয়া, কলম্বিয়া, ভেনেজুয়েলা, গায়ানা, সুরিনাম, ফরাসি গায়ানা, ইকুয়েডর ও প্যারাগুয়ে। আর্জেন্টিনা ও উরুগুয়েতে বিলুপ্ত হয়ে গিয়েছিল, তবে সম্প্রতি আর্জেন্টিনায় আবার দেখা গেছে।',
    },
    climate: {
      en: 'Hot, humid tropical climate with seasonal flooding',
      bn: 'মৌসুমি বন্যাপ্রবণ উষ্ণ ও আর্দ্র ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Mainly fish such as characins, catfish and cichlids (3–4 kg a day); also crabs, small caimans and snakes',
      bn: 'প্রধানত মাছ — ক্যারাসিন, ক্যাটফিশ ও সিক্লিড (দিনে ৩–৪ কেজি); এছাড়া কাঁকড়া, ছোট কেইম্যান ও সাপ',
    },
    ecologicalRole: {
      en: 'An apex predator of Amazonian waters that shapes fish communities and indicates healthy, unpolluted rivers.',
      bn: 'আমাজনের জলাশয়ের শীর্ষ শিকারি; মাছের প্রজাতি ও সংখ্যার ভারসাম্য রক্ষা করে এবং দূষণমুক্ত সুস্থ নদীর নির্দেশক।',
    },
    behavior: {
      en: 'Lives in family groups of 3–10, usually a breeding pair and their offspring, who all help raise the young. Very vocal, with at least 22 distinct calls. Groups defend territories with communal latrines and dens dug into riverbanks.',
      bn: 'সাধারণত ৩–১০ সদস্যের পারিবারিক দলে থাকে — একটি প্রজননক্ষম জোড়া ও তাদের সন্তানেরা, যারা সবাই মিলে ছোটদের লালনপালন করে। খুবই সরব প্রাণী; অন্তত ২২ ধরনের আলাদা ডাক আছে। নদীর পাড়ে খোঁড়া গর্ত ও সম্মিলিত মলত্যাগের জায়গা দিয়ে দলটি নিজেদের এলাকা চিহ্নিত ও রক্ষা করে।',
    },
    range: {
      native: [
        [-3.1, -60.0],
        [-12.6, -69.2],
        [-17.5, -57.0],
        [-11.9, -71.4],
        [5.0, -58.5],
        [7.0, -66.0],
        [-0.5, -73.0],
        [-13.0, -64.5],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Habitat loss from deforestation and dams', 'Mercury pollution from gold mining', 'Conflict with fishers', 'Disease transmitted from domestic dogs', 'Historic hunting for pelts (over 20,000 exported in the 1950s–60s)'],
        bn: ['বন উজাড় ও বাঁধের কারণে আবাসস্থল ধ্বংস', 'সোনার খনি থেকে পারদ দূষণ', 'জেলেদের সঙ্গে সংঘাত', 'পোষা কুকুর থেকে রোগ সংক্রমণ', 'অতীতে চামড়ার জন্য ব্যাপক শিকার (১৯৫০–৬০-এর দশকে ২০,০০০-এরও বেশি চামড়া রপ্তানি)'],
      },
      initiatives: {
        en: ['CITES Appendix I listing banning international trade', 'Protected areas such as Manu National Park, Peru', 'Reintroduction in Iberá, Argentina', 'Community-based monitoring and responsible ecotourism'],
        bn: ['সাইটেস (CITES) পরিশিষ্ট ১-এ তালিকাভুক্তির মাধ্যমে আন্তর্জাতিক বাণিজ্য নিষিদ্ধ', 'পেরুর মানু জাতীয় উদ্যানের মতো সংরক্ষিত এলাকা', 'আর্জেন্টিনার ইবেরায় পুনঃঅবমুক্তি', 'স্থানীয়দের অংশগ্রহণে পর্যবেক্ষণ ও দায়িত্বশীল ইকোট্যুরিজম'],
      },
    },
    facts: {
      en: [
        'A group of giant otters can drive off jaguars and caimans.',
        'Its throat patch is used by researchers to identify individuals, like a fingerprint.',
        'It is one of the noisiest otters in the world.',
      ],
      bn: [
        'দলবদ্ধ দৈত্যাকার ভোঁদড় জাগুয়ার ও কেইম্যানকেও তাড়িয়ে দিতে পারে।',
        'গবেষকেরা গলার ছোপ দেখে আঙুলের ছাপের মতো আলাদা আলাদা ভোঁদড় শনাক্ত করেন।',
        'এটি পৃথিবীর সবচেয়ে সরব ভোঁদড়দের একটি।',
      ],
    },
    related: ['fishing-cat', 'platypus', 'ganges-river-dolphin', 'golden-poison-frog'],
  },
];
