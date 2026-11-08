import type { Species } from '@/types';

export const fish: Species[] = [
  {
    id: 'hilsa',
    commonName: { en: 'Hilsa', bn: 'ইলিশ' },
    scientificName: 'Tenualosa ilisha',
    altNames: {
      en: ['Ilish', 'Hilsa Shad', 'Indian Shad', 'Palla'],
      bn: ['ইলিশ মাছ', 'ইলশে', 'জাটকা', 'পদ্মার ইলিশ'],
    },
    synonyms: ['Hilsa ilisha', 'Clupea ilisha'],
    category: 'fish',
    secondaryCategories: ['marine', 'freshwater'],
    wikiTitle: 'Ilish',
    description: {
      en: 'The hilsa is the national fish of Bangladesh and the centrepiece of Bengali cuisine and culture. This silvery shad lives in the Bay of Bengal but swims up the Meghna, Padma and other rivers to spawn — a journey that makes river-caught hilsa especially prized for its rich, oily flavour. Bangladesh lands most of the world’s hilsa, and the fishery supports the livelihoods of hundreds of thousands of fishing families. Bangladeshi hilsa received Geographical Indication (GI) status in 2017.',
      bn: 'ইলিশ বাংলাদেশের জাতীয় মাছ এবং বাঙালির রসনা ও সংস্কৃতির অবিচ্ছেদ্য অংশ। রুপালি এই মাছ বঙ্গোপসাগরে বাস করে, কিন্তু ডিম ছাড়ার জন্য মেঘনা, পদ্মাসহ বিভিন্ন নদীতে উজান বেয়ে আসে — আর এই যাত্রার কারণেই নদীর ইলিশের স্বাদ ও ঘ্রাণ এত অতুলনীয়। বিশ্বের মোট ইলিশের সিংহভাগই আহরিত হয় বাংলাদেশে, আর লাখ লাখ জেলে পরিবারের জীবিকা এর ওপর নির্ভরশীল। ২০১৭ সালে বাংলাদেশের ইলিশ ভৌগোলিক নির্দেশক (জিআই) পণ্যের স্বীকৃতি পায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Clupeiformes',
      family: 'Clupeidae',
      genus: 'Tenualosa',
      species: 'T. ilisha',
    },
    physical: {
      size: {
        en: 'Commonly 30–50 cm; maximum about 60 cm',
        bn: 'সাধারণত ৩০–৫০ সেমি; সর্বোচ্চ প্রায় ৬০ সেমি',
      },
      weight: {
        en: 'Usually 0.5–2 kg; large fish up to about 3 kg',
        bn: 'সাধারণত ৫০০ গ্রাম থেকে ২ কেজি; বড় ইলিশ প্রায় ৩ কেজি পর্যন্ত',
      },
      lifespan: {
        en: 'About 5 years',
        bn: 'প্রায় ৫ বছর',
      },
      features: {
        en: [
          'Deep, laterally flattened silvery body with a bluish-green back',
          'A row of sharp scutes (keel scales) along the belly',
          'Many fine bones and a high fat content that gives its famous taste',
        ],
        bn: [
          'চ্যাপ্টা, চওড়া রুপালি দেহ, পিঠের দিক নীলাভ-সবুজ',
          'পেটের নিচ বরাবর সারিবদ্ধ ধারালো আঁশ (খাঁজকাটা কিনারা)',
          'প্রচুর সূক্ষ্ম কাঁটা এবং বেশি চর্বি, যা এর বিখ্যাত স্বাদের উৎস',
        ],
      },
    },
    habitat: {
      en: 'Coastal waters and estuaries of the Bay of Bengal; migrates into large rivers to spawn',
      bn: 'বঙ্গোপসাগরের উপকূলীয় জলসীমা ও মোহনা; ডিম ছাড়তে বড় নদীতে প্রবেশ করে',
    },
    habitats: ['ocean', 'rivers-lakes', 'mangrove'],
    regions: ['south-asia', 'southeast-asia', 'oceans'],
    distribution: {
      en: 'From the Persian Gulf and Arabian Sea to the Bay of Bengal and Myanmar. The main fishery is in Bangladesh (Meghna estuary, Padma, Bay of Bengal), followed by India and Myanmar.',
      bn: 'পারস্য উপসাগর ও আরব সাগর থেকে বঙ্গোপসাগর ও মিয়ানমার পর্যন্ত। প্রধান আহরণক্ষেত্র বাংলাদেশ (মেঘনা মোহনা, পদ্মা ও বঙ্গোপসাগর), এরপর ভারত ও মিয়ানমার।',
    },
    climate: {
      en: 'Tropical monsoon waters; migration peaks with monsoon floods',
      bn: 'ক্রান্তীয় মৌসুমি অঞ্চলের পানি; বর্ষার পানিপ্রবাহের সঙ্গে অভিপ্রয়াণ সর্বোচ্চ হয়',
    },
    diet: {
      en: 'Filter-feeder on plankton — mainly diatoms, algae and tiny crustaceans',
      bn: 'প্লাংকটনভোজী — প্রধানত ডায়াটম, শৈবাল ও অতি ক্ষুদ্র চিংড়িজাতীয় প্রাণী ছেঁকে খায়',
    },
    ecologicalRole: {
      en: 'Links plankton production to larger predators such as dolphins, sharks and seabirds, and moves nutrients between sea and rivers.',
      bn: 'প্লাংকটন থেকে শুশুক, হাঙর ও সামুদ্রিক পাখির মতো বড় শিকারি পর্যন্ত খাদ্যশৃঙ্খলের সংযোগ রক্ষা করে এবং সাগর ও নদীর মধ্যে পুষ্টি বহন করে।',
    },
    behavior: {
      en: 'Swims in large schools. Adults migrate upriver to spawn, with a peak around the full moon of the Bengali month of Ashwin (October); the young, called jatka, drift back down to the sea to grow.',
      bn: 'বড় বড় ঝাঁকে চলাফেরা করে। প্রাপ্তবয়স্ক ইলিশ ডিম ছাড়তে নদীর উজানে যায়; আশ্বিন মাসের পূর্ণিমায় (অক্টোবর) ডিম ছাড়া সবচেয়ে বেশি হয়। বাচ্চা ইলিশ বা জাটকা স্রোতের সঙ্গে আবার সাগরে নেমে গিয়ে বড় হয়।',
    },
    range: {
      native: [
        [22.4, 90.8],
        [23.5, 90.2],
        [21.3, 91.0],
        [21.9, 88.1],
        [16.0, 95.0],
        [24.6, 67.6],
        [29.9, 48.6],
        [19.5, 85.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Catching of juveniles (jatka) and brood fish', 'Siltation and reduced river flow from upstream dams', 'River pollution', 'Climate change affecting migration'],
        bn: ['জাটকা ও ডিমওয়ালা মা ইলিশ ধরা', 'উজানে বাঁধের কারণে নদীতে পলি জমা ও পানিপ্রবাহ কমে যাওয়া', 'নদীদূষণ', 'জলবায়ু পরিবর্তনে অভিপ্রয়াণে বিঘ্ন'],
      },
      initiatives: {
        en: ['22-day fishing ban during the peak breeding season in October', 'Jatka catch ban from November to June', 'Hilsa sanctuaries in the Meghna, Padma and other rivers', 'Food support (VGF rice) for fishers during ban periods'],
        bn: ['অক্টোবরে প্রধান প্রজনন মৌসুমে ২২ দিন ইলিশ ধরা নিষিদ্ধ', 'নভেম্বর থেকে জুন পর্যন্ত জাটকা ধরা নিষিদ্ধ', 'মেঘনা, পদ্মাসহ বিভিন্ন নদীতে ইলিশের অভয়াশ্রম', 'নিষেধাজ্ঞার সময় জেলেদের ভিজিএফ চাল সহায়তা'],
      },
    },
    facts: {
      en: [
        'Bangladesh produces well over half of the world’s hilsa catch.',
        'Hilsa is part of Bengali New Year (Pohela Boishakh) traditions, eaten with panta bhat.',
        'Thanks to the jatka ban and sanctuaries, Bangladesh’s hilsa production roughly doubled between 2008 and 2020.',
      ],
      bn: [
        'বিশ্বে আহরিত ইলিশের অর্ধেকেরও অনেক বেশি আসে বাংলাদেশ থেকে।',
        'পহেলা বৈশাখে পান্তা-ইলিশ বাঙালির ঐতিহ্যের অংশ হয়ে উঠেছে।',
        'জাটকা নিষেধাজ্ঞা ও অভয়াশ্রমের ফলে ২০০৮ থেকে ২০২০ সালের মধ্যে বাংলাদেশে ইলিশ উৎপাদন প্রায় দ্বিগুণ হয়েছে।',
      ],
    },
    related: ['rohu', 'irrawaddy-dolphin', 'ganges-river-dolphin', 'giant-freshwater-prawn'],
  },
  {
    id: 'rohu',
    commonName: { en: 'Rohu', bn: 'রুই' },
    scientificName: 'Labeo rohita',
    altNames: {
      en: ['Rohu Carp', 'Indian Major Carp', 'Roho Labeo'],
      bn: ['রুই মাছ', 'রুইমাছ', 'রোহু'],
    },
    synonyms: ['Cyprinus rohita'],
    category: 'fish',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Rohu',
    description: {
      en: 'Rohu is the most popular of the Indian major carps and a staple on dinner tables across Bangladesh. Along with catla and mrigal, it is the backbone of pond aquaculture in South Asia. Its naturally spawning stocks are found in the great rivers, and the Halda river near Chattogram is famous as one of the few places where wild carp eggs can still be collected naturally.',
      bn: 'রুই ভারতীয় প্রধান কার্পজাতীয় মাছগুলোর মধ্যে সবচেয়ে জনপ্রিয় এবং বাংলাদেশের ঘরে ঘরে প্রতিদিনের খাবারের অংশ। কাতলা ও মৃগেলের সঙ্গে রুই দক্ষিণ এশিয়ার পুকুরে মাছচাষের মূল ভিত্তি। প্রাকৃতিকভাবে এরা বড় নদীগুলোতে প্রজনন করে; চট্টগ্রামের হালদা নদী এমন বিরল জায়গাগুলোর একটি, যেখানে এখনো প্রাকৃতিকভাবে রুই-কাতলার নিষিক্ত ডিম সংগ্রহ করা যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Cypriniformes',
      family: 'Cyprinidae',
      genus: 'Labeo',
      species: 'L. rohita',
    },
    physical: {
      size: {
        en: 'Usually 40–60 cm when harvested; can exceed 1 m in the wild',
        bn: 'আহরণের সময় সাধারণত ৪০–৬০ সেমি; প্রকৃতিতে ১ মিটারেরও বেশি লম্বা হতে পারে',
      },
      weight: {
        en: 'Market fish 1–5 kg; wild giants recorded over 30 kg',
        bn: 'বাজারের মাছ সাধারণত ১–৫ কেজি; নদীতে ৩০ কেজির বেশি ওজনের রুইও পাওয়া গেছে',
      },
      lifespan: {
        en: 'About 10 years',
        bn: 'প্রায় ১০ বছর',
      },
      features: {
        en: [
          'Streamlined silvery body with reddish-tinged scales',
          'Fleshy, fringed lips and a downward-facing mouth for grazing',
          'Reddish fins, especially in breeding season',
        ],
        bn: [
          'সুগঠিত রুপালি দেহ, আঁশে লালচে আভা',
          'মাংসল, ঝালরের মতো ঠোঁট এবং খাবার খোঁটার জন্য নিচের দিকে মুখ',
          'পাখনাগুলো লালচে, প্রজনন মৌসুমে আরও স্পষ্ট',
        ],
      },
    },
    habitat: {
      en: 'Large rivers and their floodplains; widely farmed in ponds, beels and reservoirs',
      bn: 'বড় নদী ও তার প্লাবনভূমি; পুকুর, বিল ও জলাধারে ব্যাপকভাবে চাষ করা হয়',
    },
    habitats: ['rivers-lakes', 'wetland', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Native to the Ganges–Brahmaputra–Meghna, Indus and Irrawaddy river systems of Bangladesh, India, Nepal, Pakistan and Myanmar. Introduced for aquaculture to Sri Lanka, peninsular Indian rivers and many other countries.',
      bn: 'বাংলাদেশ, ভারত, নেপাল, পাকিস্তান ও মিয়ানমারের গঙ্গা–ব্রহ্মপুত্র–মেঘনা, সিন্ধু ও ইরাবতী নদী অববাহিকার স্থানীয় মাছ। মাছচাষের জন্য শ্রীলঙ্কা, দক্ষিণ ভারতের নদী ও আরও অনেক দেশে নেওয়া হয়েছে।',
    },
    climate: {
      en: 'Tropical and subtropical freshwater, about 22–32 °C',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় মিঠাপানি, প্রায় ২২–৩২ ডিগ্রি সেলসিয়াস',
    },
    diet: {
      en: 'Herbivore — grazes on algae, plankton and decaying plant matter in the middle water layer',
      bn: 'তৃণভোজী — পানির মধ্যস্তরে শৈবাল, প্লাংকটন ও পচা উদ্ভিজ্জ পদার্থ খায়',
    },
    ecologicalRole: {
      en: 'Grazes algae and recycles organic matter; in polyculture it uses the middle water layer, complementing surface-feeding catla and bottom-feeding mrigal.',
      bn: 'শৈবাল খেয়ে ও জৈব পদার্থ পুনর্ব্যবহার করে পানির পরিবেশ ভালো রাখে; মিশ্রচাষে রুই পানির মধ্যস্তর ব্যবহার করে, তাই ওপরের স্তরের কাতলা ও তলার মৃগেলের সঙ্গে খাবার নিয়ে প্রতিযোগিতা হয় না।',
    },
    behavior: {
      en: 'Schools in rivers and migrates to flooded areas to breed. Spawns once a year during monsoon floods, when rising, muddy water triggers mass spawning.',
      bn: 'নদীতে ঝাঁক বেঁধে থাকে এবং প্রজননের জন্য প্লাবিত এলাকায় যায়। বছরে একবার বর্ষার ঢলের সময় ডিম ছাড়ে — বজ্রবৃষ্টি ও ঘোলা পানির ঢল এদের দলবদ্ধ ডিম ছাড়ার সংকেত দেয়।',
    },
    range: {
      native: [
        [22.6, 91.85],
        [24.0, 89.0],
        [26.2, 91.7],
        [25.4, 83.0],
        [27.7, 68.8],
        [20.0, 95.0],
        [20.5, 85.8],
        [27.5, 83.5],
      ],
      introduced: [
        [7.3, 80.6],
        [11.5, 77.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Loss of natural spawning grounds to dams and siltation', 'River pollution', 'Overfishing of wild brood stock', 'Inbreeding and hybridisation in hatchery stocks'],
        bn: ['বাঁধ ও পলি জমায় প্রাকৃতিক প্রজননক্ষেত্র নষ্ট হওয়া', 'নদীদূষণ', 'প্রকৃতির মা মাছ অতিরিক্ত আহরণ', 'হ্যাচারির মাছে অন্তঃপ্রজনন ও সংকরায়ণ'],
      },
      initiatives: {
        en: ['Halda river declared Bangabandhu Fisheries Heritage (2020) to protect natural carp spawning', 'Improved brood stock programmes by the Bangladesh Fisheries Research Institute', 'Fish sanctuaries in rivers and beels'],
        bn: ['প্রাকৃতিক কার্প প্রজনন রক্ষায় হালদা নদীকে "বঙ্গবন্ধু মৎস্য হেরিটেজ" ঘোষণা (২০২০)', 'বাংলাদেশ মৎস্য গবেষণা ইনস্টিটিউটের উন্নত মা মাছ কর্মসূচি', 'নদী ও বিলে মৎস্য অভয়াশ্রম'],
      },
    },
    facts: {
      en: [
        'Fishers on the Halda collect fertilised carp eggs straight from the river during thunderstorms in April–June.',
        'Rohu head (muri ghonto) is a classic Bengali dish.',
        'It is one of the most widely farmed freshwater fish in the world.',
      ],
      bn: [
        'এপ্রিল–জুনে বজ্রসহ বৃষ্টির সময় হালদার জেলেরা সরাসরি নদী থেকে রুই-কাতলার নিষিক্ত ডিম সংগ্রহ করেন।',
        'রুই মাছের মাথা দিয়ে মুড়িঘণ্ট বাঙালির ঐতিহ্যবাহী পদ।',
        'এটি বিশ্বে সবচেয়ে বেশি চাষ হওয়া মিঠাপানির মাছগুলোর একটি।',
      ],
    },
    related: ['hilsa', 'giant-freshwater-prawn', 'ganges-river-dolphin'],
  },
  {
    id: 'whale-shark',
    commonName: { en: 'Whale Shark', bn: 'তিমি হাঙর' },
    scientificName: 'Rhincodon typus',
    altNames: {
      en: ['Whaleshark', 'Butanding', 'Gentle Giant'],
      bn: ['তিমি হাঙ্গর', 'হোয়েল শার্ক', 'বিশাল হাঙর'],
    },
    synonyms: ['Rhiniodon typus'],
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Whale shark',
    description: {
      en: 'The whale shark is the largest fish in the world — a gentle giant that can grow longer than a bus. Despite its size it is harmless to people, feeding by filtering plankton and small fish through its huge mouth. Each shark has a unique pattern of white spots and stripes on a dark grey back, used like a fingerprint by researchers. Whale sharks roam all tropical oceans, including the Bay of Bengal.',
      bn: 'তিমি হাঙর পৃথিবীর সবচেয়ে বড় মাছ — একটি বাসের চেয়েও লম্বা হতে পারে এমন শান্তশিষ্ট দানব। এত বিশাল হলেও মানুষের জন্য এরা নিরীহ; বিরাট হাঁ করে পানি থেকে প্লাংকটন ও ছোট মাছ ছেঁকে খায়। গাঢ় ধূসর পিঠে সাদা ফোঁটা ও রেখার নকশা প্রতিটি হাঙরের ক্ষেত্রে আলাদা, তাই গবেষকেরা একে আঙুলের ছাপের মতো ব্যবহার করে আলাদা আলাদা হাঙর শনাক্ত করেন। বঙ্গোপসাগরসহ বিশ্বের সব ক্রান্তীয় সাগরে এরা ঘুরে বেড়ায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Chondrichthyes',
      order: 'Orectolobiformes',
      family: 'Rhincodontidae',
      genus: 'Rhincodon',
      species: 'R. typus',
    },
    physical: {
      size: {
        en: 'Commonly 5–12 m; the largest reliably measured about 18.8 m',
        bn: 'সাধারণত ৫–১২ মিটার; নির্ভরযোগ্যভাবে মাপা সবচেয়ে বড়টি প্রায় ১৮.৮ মিটার',
      },
      weight: {
        en: 'Large adults about 15–20 tonnes',
        bn: 'বড় প্রাপ্তবয়স্ক প্রায় ১৫–২০ টন',
      },
      lifespan: {
        en: 'Estimated 80–130 years',
        bn: 'আনুমানিক ৮০–১৩০ বছর',
      },
      features: {
        en: [
          'Wide, flat head with a mouth up to 1.5 m across at the front of the snout',
          'Checkerboard pattern of pale spots and stripes, unique to each individual',
          'Three prominent ridges along each side of the back',
        ],
        bn: [
          'চওড়া চ্যাপ্টা মাথা, নাকের একেবারে সামনে প্রায় ১.৫ মিটার চওড়া মুখ',
          'হালকা রঙের ফোঁটা ও রেখার দাবার ছকের মতো নকশা, যা প্রতিটি হাঙরের আলাদা',
          'পিঠের দুপাশে লম্বালম্বি তিনটি করে স্পষ্ট শিরা',
        ],
      },
    },
    habitat: {
      en: 'Warm open oceans and coastal waters, often gathering where plankton blooms or fish spawn',
      bn: 'উষ্ণ উন্মুক্ত সাগর ও উপকূলীয় জলসীমা; যেখানে প্লাংকটন বাড়ে বা মাছ ডিম ছাড়ে সেখানে প্রায়ই দলে জড়ো হয়',
    },
    habitats: ['ocean', 'coral-reef'],
    regions: ['oceans', 'south-asia', 'southeast-asia', 'oceania', 'africa', 'north-america', 'south-america'],
    distribution: {
      en: 'All tropical and warm-temperate seas. Famous gathering sites include Ningaloo Reef (Australia), the Yucatán (Mexico), the Maldives, the Philippines, Mozambique and Djibouti. Occasionally recorded off the coast of Bangladesh.',
      bn: 'বিশ্বের সব ক্রান্তীয় ও উষ্ণ-নাতিশীতোষ্ণ সাগরে পাওয়া যায়। অস্ট্রেলিয়ার নিংগালু রিফ, মেক্সিকোর ইউকাতান, মালদ্বীপ, ফিলিপাইন, মোজাম্বিক ও জিবুতি এদের জড়ো হওয়ার বিখ্যাত স্থান। বাংলাদেশের উপকূলেও মাঝে মাঝে দেখা যায়।',
    },
    climate: {
      en: 'Tropical and warm-temperate waters, mostly 21–30 °C',
      bn: 'ক্রান্তীয় ও উষ্ণ-নাতিশীতোষ্ণ পানি, সাধারণত ২১–৩০ ডিগ্রি সেলসিয়াস',
    },
    diet: {
      en: 'Filter-feeder — plankton, krill, fish eggs, small fish and squid',
      bn: 'ছাঁকনিভোজী — প্লাংকটন, ক্রিল, মাছের ডিম, ছোট মাছ ও স্কুইড',
    },
    ecologicalRole: {
      en: 'Helps regulate plankton and recycles nutrients across ocean basins; also supports ecotourism economies in many coastal communities.',
      bn: 'প্লাংকটনের ভারসাম্য রক্ষা করে এবং মহাসাগরজুড়ে পুষ্টি পুনর্বণ্টন করে; অনেক উপকূলীয় জনপদের পরিবেশবান্ধব পর্যটন-অর্থনীতিরও ভিত্তি।',
    },
    behavior: {
      en: 'Usually solitary but gathers seasonally at feeding hotspots. Makes long migrations across oceans and can dive below 1,900 m. Females give birth to live young that hatch from eggs inside the mother.',
      bn: 'সাধারণত একাকী, তবে নির্দিষ্ট মৌসুমে খাবারের প্রাচুর্য থাকা জায়গায় জড়ো হয়। মহাসাগর পাড়ি দিয়ে দীর্ঘ পথ অভিপ্রয়াণ করে এবং ১,৯০০ মিটারেরও বেশি গভীরে ডুব দিতে পারে। মায়ের দেহের ভেতরে ডিম ফুটে জীবন্ত বাচ্চা জন্ম নেয়।',
    },
    range: {
      native: [
        [-22.7, 113.7],
        [21.5, -86.7],
        [3.5, 72.8],
        [12.9, 123.6],
        [-23.9, 35.6],
        [11.6, 43.1],
        [1.7, -92.0],
        [20.5, 91.0],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Fishing for fins, meat and oil', 'Bycatch in nets', 'Collisions with ships', 'Unregulated tourism and marine pollution'],
        bn: ['পাখনা, মাংস ও তেলের জন্য শিকার', 'মাছ ধরার জালে আটকা পড়া', 'জাহাজের সঙ্গে সংঘর্ষ', 'অনিয়ন্ত্রিত পর্যটন ও সামুদ্রিক দূষণ'],
      },
      initiatives: {
        en: ['Listed in CITES Appendix II and CMS Appendix I', 'Hunting bans in India, the Philippines, Maldives and other countries', 'Photo-identification databases built with citizen scientists', 'Marine protected areas at key gathering sites'],
        bn: ['সাইটিস (CITES) পরিশিষ্ট-২ ও সিএমএস পরিশিষ্ট-১ তালিকাভুক্ত', 'ভারত, ফিলিপাইন, মালদ্বীপসহ বহু দেশে শিকার নিষিদ্ধ', 'সাধারণ মানুষের তোলা ছবি দিয়ে হাঙর শনাক্তকরণ ডেটাবেস', 'জড়ো হওয়ার প্রধান স্থানগুলোতে সামুদ্রিক সংরক্ষিত এলাকা'],
      },
      assessed: '2016',
    },
    facts: {
      en: [
        'It is a shark, not a whale — it breathes with gills.',
        'Its mouth holds about 3,000 tiny teeth that it does not use for feeding.',
        'A single female was found carrying about 300 developing pups.',
      ],
      bn: [
        'নামে তিমি হলেও এটি আসলে হাঙর — ফুলকা দিয়ে শ্বাস নেয়।',
        'মুখে প্রায় ৩,০০০টি ক্ষুদ্র দাঁত থাকে, কিন্তু খাওয়ার কাজে সেগুলো ব্যবহার হয় না।',
        'একবার একটি স্ত্রী তিমি হাঙরের দেহে প্রায় ৩০০টি বাচ্চা পাওয়া গিয়েছিল।',
      ],
    },
    related: ['blue-whale', 'green-sea-turtle', 'staghorn-coral', 'ocellaris-clownfish'],
  },
  {
    id: 'ocellaris-clownfish',
    commonName: { en: 'Ocellaris Clownfish', bn: 'ক্লাউনফিশ' },
    scientificName: 'Amphiprion ocellaris',
    altNames: {
      en: ['False Clownfish', 'Clown Anemonefish', 'Nemo', 'False Percula Clownfish'],
      bn: ['ক্লাউন মাছ', 'জোকার মাছ', 'নিমো মাছ', 'অ্যানিমোন মাছ'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Ocellaris clownfish',
    description: {
      en: 'The ocellaris clownfish is the bright orange-and-white fish made famous by the film Finding Nemo. It lives among the stinging tentacles of sea anemones, protected by a special mucus coating on its skin. In return it cleans the anemone, chases away fish that would eat it and feeds it with its waste. Every group is run by a single dominant female; if she dies, the largest male changes sex to take her place.',
      bn: 'ফাইন্ডিং নিমো চলচ্চিত্রের কল্যাণে কমলা-সাদা রঙের ক্লাউনফিশ এখন সবার পরিচিত। এরা সি অ্যানিমোনের বিষাক্ত শুঁড়ের মাঝে বাস করে, আর চামড়ার বিশেষ পিচ্ছিল আবরণ ওদের দংশন থেকে রক্ষা করে। বিনিময়ে ক্লাউনফিশ অ্যানিমোনকে পরিষ্কার রাখে, অ্যানিমোন খেতে আসা মাছ তাড়িয়ে দেয় এবং নিজের বর্জ্য দিয়ে তাকে পুষ্টি জোগায়। প্রতিটি দলে একটি মাত্র প্রভাবশালী স্ত্রী মাছ থাকে; সে মারা গেলে দলের সবচেয়ে বড় পুরুষটি লিঙ্গ বদলে স্ত্রী হয়ে তার জায়গা নেয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Blenniiformes',
      family: 'Pomacentridae',
      genus: 'Amphiprion',
      species: 'A. ocellaris',
    },
    physical: {
      size: {
        en: 'Up to about 11 cm; females larger than males',
        bn: 'প্রায় ১১ সেমি পর্যন্ত লম্বা; স্ত্রী পুরুষের চেয়ে বড়',
      },
      weight: {
        en: 'About 5–25 g',
        bn: 'প্রায় ৫–২৫ গ্রাম',
      },
      lifespan: {
        en: 'About 6–10 years in the wild; over 20 years in aquariums',
        bn: 'প্রকৃতিতে প্রায় ৬–১০ বছর; অ্যাকুরিয়ামে ২০ বছরেরও বেশি',
      },
      features: {
        en: [
          'Bright orange body with three white bands edged in thin black lines',
          'Usually 11 spines in the dorsal fin, which helps tell it apart from the similar orange clownfish (A. percula)',
          'Protective mucus layer that prevents anemones from stinging it',
        ],
        bn: [
          'উজ্জ্বল কমলা দেহে তিনটি সাদা ডোরা, প্রতিটির কিনারায় সরু কালো রেখা',
          'পিঠের পাখনায় সাধারণত ১১টি কাঁটা, যা দেখে প্রায় একই রকম দেখতে A. percula থেকে একে আলাদা করা যায়',
          'চামড়ায় সুরক্ষামূলক পিচ্ছিল আবরণ, যার ফলে অ্যানিমোন হুল ফোটায় না',
        ],
      },
    },
    habitat: {
      en: 'Shallow coral reefs and lagoons, always living inside host sea anemones',
      bn: 'অগভীর প্রবালপ্রাচীর ও উপহ্রদ; সবসময় আশ্রয়দাতা সি অ্যানিমোনের ভেতরে বাস করে',
    },
    habitats: ['coral-reef'],
    regions: ['oceans', 'southeast-asia', 'east-asia', 'oceania', 'south-asia'],
    distribution: {
      en: 'Eastern Indian Ocean and western Pacific: the Andaman and Nicobar Islands, Andaman Sea, Indonesia, Malaysia, the Philippines, the South China Sea north to the Ryukyu Islands of Japan, and north-western Australia.',
      bn: 'পূর্ব ভারত মহাসাগর ও পশ্চিম প্রশান্ত মহাসাগর: আন্দামান ও নিকোবর দ্বীপপুঞ্জ, আন্দামান সাগর, ইন্দোনেশিয়া, মালয়েশিয়া, ফিলিপাইন, দক্ষিণ চীন সাগর থেকে উত্তরে জাপানের রিউকিউ দ্বীপপুঞ্জ এবং উত্তর-পশ্চিম অস্ট্রেলিয়া।',
    },
    climate: {
      en: 'Warm tropical seas, about 24–28 °C',
      bn: 'উষ্ণ ক্রান্তীয় সাগর, প্রায় ২৪–২৮ ডিগ্রি সেলসিয়াস',
    },
    diet: {
      en: 'Omnivore — zooplankton, small crustaceans, algae and leftovers from the anemone’s meals',
      bn: 'সর্বভুক — প্রাণী-প্লাংকটন, ছোট চিংড়িজাতীয় প্রাণী, শৈবাল এবং অ্যানিমোনের খাবারের উচ্ছিষ্ট',
    },
    ecologicalRole: {
      en: 'A classic example of mutualism: it defends, cleans and fertilises its host anemone, which in turn shelters it from predators.',
      bn: 'পারস্পরিক সহযোগিতার (মিউচুয়ালিজম) এক আদর্শ উদাহরণ: ক্লাউনফিশ অ্যানিমোনকে রক্ষা করে, পরিষ্কার রাখে ও পুষ্টি দেয়, আর অ্যানিমোন তাকে শিকারির হাত থেকে আশ্রয় দেয়।',
    },
    behavior: {
      en: 'Lives in small groups with a strict size-based hierarchy. All are born male; the dominant fish becomes female. The breeding pair lays eggs on a rock beside the anemone, and the male guards and fans them until they hatch.',
      bn: 'ছোট দলে থাকে, আর দলে আকার অনুযায়ী কড়া ক্রমবিন্যাস মানা হয়। সব ক্লাউনফিশ পুরুষ হয়ে জন্মায়; দলের সবচেয়ে প্রভাবশালীটি স্ত্রী হয়ে যায়। প্রজনন জুটি অ্যানিমোনের পাশে পাথরের গায়ে ডিম পাড়ে, আর পুরুষ মাছ ডিম ফোটা পর্যন্ত পাহারা দেয় ও পাখনা নেড়ে বাতাস দেয়।',
    },
    range: {
      native: [
        [11.7, 92.7],
        [7.9, 98.3],
        [-8.4, 116.0],
        [5.9, 118.1],
        [10.0, 119.0],
        [26.2, 127.7],
        [-15.0, 124.0],
        [1.3, 125.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Collection for the aquarium trade', 'Coral and anemone bleaching from ocean warming', 'Ocean acidification affecting larval senses', 'Destructive fishing and reef damage'],
        bn: ['অ্যাকুরিয়াম ব্যবসার জন্য সংগ্রহ', 'সমুদ্রের তাপমাত্রা বৃদ্ধিতে প্রবাল ও অ্যানিমোনের বিবর্ণতা (ব্লিচিং)', 'সমুদ্রের অম্লতা বৃদ্ধিতে লার্ভার ইন্দ্রিয়শক্তি ক্ষতিগ্রস্ত হওয়া', 'ক্ষতিকর মাছ ধরার পদ্ধতি ও প্রবালপ্রাচীর ধ্বংস'],
      },
      initiatives: {
        en: ['Captive breeding supplies most clownfish in the aquarium trade', 'Marine protected areas across the Coral Triangle', 'Reef restoration projects'],
        bn: ['অ্যাকুরিয়াম বাজারের অধিকাংশ ক্লাউনফিশ এখন কৃত্রিম প্রজননে উৎপাদিত', 'কোরাল ট্রায়াঙ্গল জুড়ে সামুদ্রিক সংরক্ষিত এলাকা', 'প্রবালপ্রাচীর পুনরুদ্ধার প্রকল্প'],
      },
      assessed: '2022',
    },
    facts: {
      en: [
        'Clownfish are born male and can change into females — but never back again.',
        'It was one of the first marine fish to be bred commercially in captivity.',
        'Young clownfish find their way back to reefs by following the sounds and smells of the reef.',
      ],
      bn: [
        'ক্লাউনফিশ পুরুষ হয়ে জন্মায় এবং পরে স্ত্রীতে রূপান্তরিত হতে পারে — তবে আর কখনো পুরুষে ফেরে না।',
        'বাণিজ্যিকভাবে কৃত্রিম প্রজনন করা প্রথম দিকের সামুদ্রিক মাছগুলোর মধ্যে এটি একটি।',
        'বাচ্চা ক্লাউনফিশ প্রবালপ্রাচীরের শব্দ ও গন্ধ অনুসরণ করে প্রাচীরে ফিরে আসে।',
      ],
    },
    related: ['staghorn-coral', 'common-octopus', 'green-sea-turtle', 'whale-shark'],
  },
];
