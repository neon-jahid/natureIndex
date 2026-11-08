import type { Species } from '@/types';

export const reptilesSquamates1: Species[] = [
  {
    id: 'spectacled-cobra',
    commonName: { en: 'Spectacled Cobra', bn: 'খৈয়া গোখরা' },
    scientificName: 'Naja naja',
    altNames: {
      en: ['Indian Cobra', 'Binocellate Cobra', 'Cobra'],
      bn: ['চশমা গোখরা', 'গোখরা সাপ', 'খড়মপায়া গোখরা'],
    },
    category: 'reptiles',
    wikiTitle: 'Indian cobra',
    description: {
      en: 'The spectacled cobra is one of South Asia’s best-known snakes and one of the “Big Four” species responsible for most serious snakebites in the region. When threatened it raises its body and spreads a hood marked with a spectacle-like pattern. It is highly venomous and dangerous — it must never be handled, cornered or provoked, and any bite needs immediate hospital treatment with antivenom.',
      bn: 'খৈয়া গোখরা দক্ষিণ এশিয়ার সবচেয়ে পরিচিত সাপগুলোর একটি এবং এ অঞ্চলের অধিকাংশ মারাত্মক সাপের কামড়ের জন্য দায়ী “বিগ ফোর” প্রজাতির অন্যতম। বিপদ টের পেলে এরা দেহের সামনের অংশ উঁচু করে ফণা মেলে ধরে, যার পেছনে চশমার মতো নকশা থাকে। এরা তীব্র বিষধর ও বিপজ্জনক — কখনোই ধরা, কোণঠাসা করা বা উত্তেজিত করা উচিত নয়; কামড়ালে দেরি না করে হাসপাতালে নিয়ে অ্যান্টিভেনম দিতে হবে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Elapidae',
      genus: 'Naja',
      species: 'N. naja',
    },
    physical: {
      size: {
        en: 'Usually 1–1.5 m long; rarely above 2 m',
        bn: 'সাধারণত ১–১.৫ মিটার লম্বা; কদাচিৎ ২ মিটারের বেশি',
      },
      weight: {
        en: 'Typically under 2 kg',
        bn: 'সাধারণত ২ কেজির কম',
      },
      lifespan: {
        en: 'Around 20 years in captivity; less in the wild',
        bn: 'আবদ্ধ অবস্থায় প্রায় ২০ বছর; বনে সাধারণত কম',
      },
      features: {
        en: [
          'Broad hood with a spectacle (two-ring) mark on the back',
          'Colour varies from yellowish-brown to black',
          'Short fixed front fangs that deliver neurotoxic venom',
        ],
        bn: [
          'চওড়া ফণার পেছনে চশমার মতো দুই বলয়ের দাগ',
          'রং হলদে-বাদামি থেকে কালো পর্যন্ত হতে পারে',
          'মুখের সামনে ছোট স্থির বিষদাঁত, যা দিয়ে স্নায়ুবিষ ঢালে',
        ],
      },
    },
    habitat: {
      en: 'Farmland, villages, open forest, scrub and the edges of wetlands, often near rodent-rich places',
      bn: 'খেত-খামার, গ্রাম, হালকা বন, ঝোপঝাড় ও জলাভূমির কিনারা — বিশেষ করে যেখানে ইঁদুর বেশি',
    },
    habitats: ['urban-farmland', 'tropical-forest', 'grassland', 'wetland'],
    regions: ['south-asia'],
    distribution: {
      en: 'Found across the Indian subcontinent — India, Pakistan, Sri Lanka, Nepal, Bhutan and western and northern Bangladesh.',
      bn: 'ভারতীয় উপমহাদেশজুড়ে দেখা যায় — ভারত, পাকিস্তান, শ্রীলঙ্কা, নেপাল, ভুটান এবং বাংলাদেশের পশ্চিম ও উত্তরাঞ্চলে।',
    },
    climate: {
      en: 'Tropical and subtropical monsoon climates',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Carnivore — mainly rats and mice, also frogs, toads, birds, eggs and other snakes',
      bn: 'মাংসাশী — প্রধানত ইঁদুর; এ ছাড়া ব্যাঙ, পাখি, ডিম ও অন্য সাপ খায়',
    },
    ecologicalRole: {
      en: 'An important natural controller of rats and mice that damage crops and stored grain.',
      bn: 'ফসল ও গোলার ধান নষ্টকারী ইঁদুর নিয়ন্ত্রণে এরা গুরুত্বপূর্ণ প্রাকৃতিক ভূমিকা রাখে।',
    },
    behavior: {
      en: 'Mostly active at dusk and night; it prefers to flee and hoods and hisses only as a warning when it feels trapped.',
      bn: 'মূলত সন্ধ্যা ও রাতে সক্রিয়; সাধারণত পালিয়ে যেতে চায়, কোণঠাসা হলে সতর্ক করতে ফণা তুলে হিসহিস শব্দ করে।',
    },
    range: {
      native: [
        [24.4, 88.6],
        [25.7, 89.2],
        [23.0, 77.4],
        [28.6, 77.2],
        [7.9, 80.7],
        [30.2, 71.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Killed on sight out of fear', 'Capture for snake charming and skin trade', 'Habitat loss and road deaths'],
        bn: ['ভয়ে দেখামাত্র মেরে ফেলা', 'সাপুড়েদের খেলা ও চামড়া ব্যবসার জন্য ধরা', 'আবাসস্থল ধ্বংস ও সড়কে চাপা পড়া'],
      },
      initiatives: {
        en: ['Legal protection under wildlife laws in Bangladesh and India', 'Snakebite awareness and trained snake-rescue programmes'],
        bn: ['বাংলাদেশ ও ভারতের বন্যপ্রাণী আইনে সুরক্ষিত', 'সাপের কামড় বিষয়ে সচেতনতা ও প্রশিক্ষিত সাপ উদ্ধারকারী দল'],
      },
    },
    facts: {
      en: [
        'Cobras cannot hear music — a charmer’s snake follows the movement of the flute, not the sound.',
        'After a bite, do not go to an ojha or cut the wound; keep still and reach a hospital with antivenom quickly.',
        'Its venom was used to develop the polyvalent antivenom used across South Asia.',
      ],
      bn: [
        'গোখরা বাঁশির সুর শুনতে পায় না — সাপুড়ের বাঁশির নড়াচড়া দেখেই সে দোলে।',
        'কামড়ালে ওঝার কাছে যাবেন না বা ক্ষত কাটবেন না; রোগীকে স্থির রেখে দ্রুত অ্যান্টিভেনম আছে এমন হাসপাতালে নিন।',
        'দক্ষিণ এশিয়ায় ব্যবহৃত পলিভ্যালেন্ট অ্যান্টিভেনম তৈরিতে এদের বিষ ব্যবহার করা হয়।',
      ],
    },
    related: ['monocled-cobra', 'king-cobra', 'common-krait', 'russells-viper'],
  },
  {
    id: 'monocled-cobra',
    commonName: { en: 'Monocled Cobra', bn: 'পদ্ম গোখরা' },
    scientificName: 'Naja kaouthia',
    altNames: {
      en: ['Monocellate Cobra', 'Bengal Cobra'],
      bn: ['কেউটে', 'গোখরা'],
    },
    category: 'reptiles',
    wikiTitle: 'Monocled cobra',
    description: {
      en: 'The monocled cobra is the most common cobra in Bangladesh, named for the single ring or “monocle” on the back of its hood. It lives close to people in paddy fields, homesteads and wetlands, especially during the monsoon. It is highly venomous and causes many serious bites in Bangladesh — keep a safe distance, never try to catch it, and call trained rescuers if one enters a home.',
      bn: 'পদ্ম গোখরা বাংলাদেশের সবচেয়ে বেশি দেখা যাওয়া গোখরা; ফণার পেছনে একটি গোল বলয় বা “এক চশমা” দাগের জন্য এর এই নাম। ধানখেত, বসতবাড়ি ও জলাভূমিতে মানুষের কাছাকাছি থাকে, বিশেষ করে বর্ষাকালে। এরা তীব্র বিষধর এবং বাংলাদেশে বহু মারাত্মক কামড়ের জন্য দায়ী — নিরাপদ দূরত্ব বজায় রাখুন, কখনো ধরার চেষ্টা করবেন না; ঘরে ঢুকলে প্রশিক্ষিত উদ্ধারকারীকে খবর দিন।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Elapidae',
      genus: 'Naja',
      species: 'N. kaouthia',
    },
    physical: {
      size: {
        en: 'Usually 1–1.5 m; large adults up to about 2.3 m',
        bn: 'সাধারণত ১–১.৫ মিটার; বড়গুলো প্রায় ২.৩ মিটার পর্যন্ত',
      },
      weight: {
        en: 'Typically 1–3 kg',
        bn: 'সাধারণত ১–৩ কেজি',
      },
      lifespan: {
        en: 'About 15–20 years in captivity',
        bn: 'আবদ্ধ অবস্থায় প্রায় ১৫–২০ বছর',
      },
      features: {
        en: [
          'Single O-shaped “monocle” mark on the back of the hood',
          'Brown, olive or blackish body, often with pale crossbands',
          'Fixed front fangs with potent neurotoxic venom',
        ],
        bn: [
          'ফণার পেছনে ইংরেজি O-আকৃতির একটি বলয়',
          'দেহ বাদামি, জলপাই বা কালচে, প্রায়ই হালকা আড়াআড়ি দাগ থাকে',
          'সামনের স্থির বিষদাঁতে তীব্র স্নায়ুবিষ',
        ],
      },
    },
    habitat: {
      en: 'Paddy fields, ponds, marshes, mangrove edges, homesteads and forest margins',
      bn: 'ধানখেত, পুকুরপাড়, বিল-হাওর, ম্যানগ্রোভের কিনারা, বসতবাড়ি ও বনের প্রান্ত',
    },
    habitats: ['wetland', 'urban-farmland', 'mangrove', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Eastern India, Bangladesh, Nepal and Bhutan east through Myanmar, Thailand and Indochina to southern China and northern Malaysia.',
      bn: 'পূর্ব ভারত, বাংলাদেশ, নেপাল ও ভুটান থেকে মিয়ানমার, থাইল্যান্ড ও ইন্দোচীন হয়ে দক্ষিণ চীন ও উত্তর মালয়েশিয়া পর্যন্ত।',
    },
    climate: {
      en: 'Hot, humid tropical and monsoon climates',
      bn: 'উষ্ণ-আর্দ্র ক্রান্তীয় ও মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Carnivore — rats, frogs, fish, birds and other snakes',
      bn: 'মাংসাশী — ইঁদুর, ব্যাঙ, মাছ, পাখি ও অন্য সাপ',
    },
    ecologicalRole: {
      en: 'A key predator of rodents in rice-growing landscapes, helping protect harvests.',
      bn: 'ধানপ্রধান এলাকায় ইঁদুরের অন্যতম প্রধান শিকারি, ফলে ফসল রক্ষায় সহায়তা করে।',
    },
    behavior: {
      en: 'Active mainly at dusk and night; it often shelters in rat holes and termite mounds, and many bites happen when people step on it in the dark.',
      bn: 'মূলত সন্ধ্যা ও রাতে সক্রিয়; ইঁদুরের গর্ত ও উইঢিবিতে লুকায়, আর অন্ধকারে পা পড়ে গেলে অনেক কামড়ের ঘটনা ঘটে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.8, 89.5],
        [24.9, 91.9],
        [16.8, 96.2],
        [13.7, 100.5],
        [22.8, 108.3],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Killed out of fear near homes', 'Harvest for skin, food and traditional medicine trade', 'Loss of wetlands'],
        bn: ['বসতবাড়ির কাছে ভয়ে মেরে ফেলা', 'চামড়া, খাদ্য ও প্রচলিত ওষুধের ব্যবসার জন্য ধরা', 'জলাভূমি হারিয়ে যাওয়া'],
      },
      initiatives: {
        en: ['Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012', 'Listed on CITES Appendix II to regulate trade'],
        bn: ['বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর আওতায় সুরক্ষিত', 'বাণিজ্য নিয়ন্ত্রণে সাইটিস পরিশিষ্ট-২-তে তালিকাভুক্ত'],
      },
    },
    facts: {
      en: [
        'Using a torch at night and sleeping inside a mosquito net greatly reduce the risk of snakebite.',
        'Some populations can spit venom a short distance as a defence, so eye protection matters near a hooding cobra.',
      ],
      bn: [
        'রাতে টর্চ নিয়ে চলা এবং মশারি টাঙিয়ে ঘুমালে সাপের কামড়ের ঝুঁকি অনেক কমে।',
        'কিছু জনগোষ্ঠী আত্মরক্ষায় অল্প দূরত্বে বিষ ছিটাতে পারে, তাই ফণা তোলা গোখরার কাছ থেকে চোখ বাঁচিয়ে দূরে থাকুন।',
      ],
    },
    related: ['spectacled-cobra', 'king-cobra', 'banded-krait', 'checkered-keelback'],
  },
  {
    id: 'common-krait',
    commonName: { en: 'Common Krait', bn: 'কালাচ' },
    scientificName: 'Bungarus caeruleus',
    altNames: {
      en: ['Indian Krait', 'Blue Krait'],
      bn: ['কালাচ সাপ', 'ঘামচাটা'],
    },
    category: 'reptiles',
    wikiTitle: 'Common krait',
    description: {
      en: 'The common krait is a glossy black or bluish-black snake with thin white crossbands and is among the most dangerous snakes in South Asia. It hunts at night and often enters houses, and its bite may be almost painless, so victims sleeping on the floor sometimes do not realise they have been bitten. Its venom causes paralysis — anyone bitten, or who wakes with unexplained weakness or drooping eyelids, needs urgent hospital care.',
      bn: 'কালাচ চকচকে কালো বা নীলচে-কালো রঙের সাপ, গায়ে সরু সাদা আড়াআড়ি দাগ থাকে; এটি দক্ষিণ এশিয়ার সবচেয়ে বিপজ্জনক সাপগুলোর একটি। রাতে শিকারে বের হয়ে প্রায়ই ঘরে ঢোকে, আর এর কামড়ে প্রায় ব্যথাই হয় না — ফলে মেঝেতে ঘুমানো মানুষ অনেক সময় বুঝতেই পারেন না। এর বিষে পক্ষাঘাত হয়; কামড়ালে, কিংবা ঘুম থেকে উঠে অকারণ দুর্বলতা বা চোখের পাতা ঝুলে পড়লে, দ্রুত হাসপাতালে যেতে হবে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Elapidae',
      genus: 'Bungarus',
      species: 'B. caeruleus',
    },
    physical: {
      size: {
        en: 'Usually about 0.9–1.2 m; rarely up to about 1.7 m',
        bn: 'সাধারণত প্রায় ০.৯–১.২ মিটার; কদাচিৎ প্রায় ১.৭ মিটার পর্যন্ত',
      },
      weight: {
        en: 'Slender; usually well under 1 kg',
        bn: 'সরু দেহ; সাধারণত ১ কেজির অনেক কম',
      },
      lifespan: {
        en: 'About 10–15 years',
        bn: 'প্রায় ১০–১৫ বছর',
      },
      features: {
        en: [
          'Shiny black to bluish-black body with paired thin white bands',
          'Row of enlarged hexagonal scales along the spine',
          'Small head barely wider than the neck',
        ],
        bn: [
          'চকচকে কালো বা নীলচে-কালো দেহে জোড়ায় জোড়ায় সরু সাদা দাগ',
          'মেরুদণ্ড বরাবর এক সারি বড় ষড়ভুজ আঁশ',
          'ছোট মাথা, ঘাড়ের চেয়ে সামান্য চওড়া',
        ],
      },
    },
    habitat: {
      en: 'Farmland, villages, scrub and open forest; often hides in rat holes, brick piles and inside houses',
      bn: 'খেত-খামার, গ্রাম, ঝোপঝাড় ও হালকা বন; প্রায়ই ইঁদুরের গর্ত, ইটের স্তূপ ও ঘরের ভেতরে লুকিয়ে থাকে',
    },
    habitats: ['urban-farmland', 'grassland', 'tropical-forest'],
    regions: ['south-asia'],
    distribution: {
      en: 'Widespread in India, Pakistan, Sri Lanka, Nepal and Bangladesh, mainly in drier western and northern parts of Bangladesh.',
      bn: 'ভারত, পাকিস্তান, শ্রীলঙ্কা, নেপাল ও বাংলাদেশে বিস্তৃত; বাংলাদেশে প্রধানত পশ্চিম ও উত্তরের তুলনামূলক শুষ্ক অঞ্চলে।',
    },
    climate: {
      en: 'Tropical and subtropical monsoon climates',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Carnivore — mainly other snakes, plus rodents, lizards and frogs',
      bn: 'মাংসাশী — প্রধানত অন্য সাপ; এ ছাড়া ইঁদুর, টিকটিকি ও ব্যাঙ',
    },
    ecologicalRole: {
      en: 'A predator of rodents and other snakes, helping to regulate their numbers.',
      bn: 'ইঁদুর ও অন্য সাপ খেয়ে এদের সংখ্যা নিয়ন্ত্রণে রাখে।',
    },
    behavior: {
      en: 'Strictly nocturnal; shy and sluggish by day, it hides its head under its coils but becomes active and more likely to bite at night.',
      bn: 'পুরোপুরি নিশাচর; দিনে লাজুক ও ধীর, মাথা কুণ্ডলীর নিচে লুকিয়ে রাখে, কিন্তু রাতে সক্রিয় হয় এবং কামড়ানোর আশঙ্কা বাড়ে।',
    },
    range: {
      native: [
        [24.4, 88.6],
        [25.7, 88.7],
        [26.9, 75.8],
        [21.1, 79.1],
        [7.3, 80.6],
        [31.5, 74.3],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Killed when found in or near houses', 'Road traffic', 'Habitat conversion'],
        bn: ['ঘরে বা আশেপাশে পেলে মেরে ফেলা', 'সড়কে চাপা পড়া', 'আবাসস্থলের রূপান্তর'],
      },
      initiatives: {
        en: ['Protected under wildlife laws in Bangladesh and India', 'Community campaigns promoting bed nets and safe sleeping off the floor'],
        bn: ['বাংলাদেশ ও ভারতের বন্যপ্রাণী আইনে সুরক্ষিত', 'মশারি ব্যবহার ও মেঝেতে না ঘুমানোর বিষয়ে সামাজিক প্রচারণা'],
      },
    },
    facts: {
      en: [
        'Sleeping on a raised bed under a well-tucked mosquito net is one of the best protections against krait bites.',
        'Krait venom can cause paralysis many hours after a painless bite.',
      ],
      bn: [
        'উঁচু খাটে মশারি ভালোভাবে গুঁজে ঘুমানো কালাচের কামড় থেকে বাঁচার অন্যতম সেরা উপায়।',
        'ব্যথাহীন কামড়ের অনেক ঘণ্টা পরেও কালাচের বিষে পক্ষাঘাত দেখা দিতে পারে।',
      ],
    },
    related: ['banded-krait', 'spectacled-cobra', 'russells-viper'],
  },
  {
    id: 'banded-krait',
    commonName: { en: 'Banded Krait', bn: 'শঙ্খিনী' },
    scientificName: 'Bungarus fasciatus',
    altNames: {
      en: ['Yellow-banded Krait'],
      bn: ['শাঁখামুটি'],
    },
    category: 'reptiles',
    wikiTitle: 'Banded krait',
    description: {
      en: 'The banded krait is a striking snake with bold, alternating black and yellow rings and a triangular, ridged back. It is shy and sluggish by day, often hiding its head instead of biting, but it is venomous and its bite can cause life-threatening paralysis. Admire it only from a distance and never pick it up, even if it seems calm.',
      bn: 'শঙ্খিনী উজ্জ্বল কালো ও হলুদ বলয়ে সাজানো একটি নজরকাড়া সাপ, যার পিঠ ত্রিকোণাকার ও উঁচু শিরযুক্ত। দিনের বেলায় এরা লাজুক ও ধীর, কামড়ানোর বদলে প্রায়ই মাথা লুকিয়ে রাখে; তবে এরা বিষধর এবং কামড়ে প্রাণঘাতী পক্ষাঘাত হতে পারে। শান্ত মনে হলেও কখনো হাতে তুলবেন না — শুধু দূর থেকে দেখুন।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Elapidae',
      genus: 'Bungarus',
      species: 'B. fasciatus',
    },
    physical: {
      size: {
        en: 'Usually 1–1.8 m; occasionally over 2 m',
        bn: 'সাধারণত ১–১.৮ মিটার; কখনো কখনো ২ মিটারের বেশি',
      },
      weight: {
        en: 'Usually 1–2 kg',
        bn: 'সাধারণত ১–২ কেজি',
      },
      lifespan: {
        en: 'Over 10 years',
        bn: '১০ বছরের বেশি',
      },
      features: {
        en: [
          'Broad black and yellow rings of roughly equal width',
          'Triangular body cross-section with a raised spine',
          'Blunt, rounded tail tip',
        ],
        bn: [
          'প্রায় সমান চওড়া কালো ও হলুদ বলয়',
          'দেহের প্রস্থচ্ছেদ ত্রিকোণাকার, পিঠে উঁচু শিরা',
          'লেজের ডগা ভোঁতা ও গোলাকার',
        ],
      },
    },
    habitat: {
      en: 'Wetlands, paddy fields, grassland and forest edges, often near water',
      bn: 'জলাভূমি, ধানখেত, তৃণভূমি ও বনের কিনারা, সাধারণত পানির কাছাকাছি',
    },
    habitats: ['wetland', 'urban-farmland', 'grassland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Eastern India and Bangladesh through Myanmar, Thailand and Indochina to southern China, Malaysia and Indonesia.',
      bn: 'পূর্ব ভারত ও বাংলাদেশ থেকে মিয়ানমার, থাইল্যান্ড ও ইন্দোচীন হয়ে দক্ষিণ চীন, মালয়েশিয়া ও ইন্দোনেশিয়া পর্যন্ত।',
    },
    climate: {
      en: 'Humid tropical and subtropical climates',
      bn: 'আর্দ্র ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Carnivore — feeds mostly on other snakes, sometimes fish, frogs and lizards',
      bn: 'মাংসাশী — প্রধানত অন্য সাপ; কখনো মাছ, ব্যাঙ ও গিরগিটি',
    },
    ecologicalRole: {
      en: 'A specialist snake-eater that helps keep populations of other snakes in balance.',
      bn: 'সাপভোজী এই সাপ অন্য সাপের সংখ্যায় ভারসাম্য রাখতে সাহায্য করে।',
    },
    behavior: {
      en: 'Nocturnal and slow-moving; when disturbed by day it usually tucks its head under its coils rather than striking.',
      bn: 'নিশাচর ও ধীরগতির; দিনে বিরক্ত হলে সাধারণত ছোবল না দিয়ে কুণ্ডলীর নিচে মাথা গুঁজে রাখে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [24.9, 91.9],
        [26.1, 91.7],
        [16.8, 96.2],
        [13.7, 100.5],
        [3.1, 101.7],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Harvest for food and traditional medicine in parts of Southeast Asia', 'Killed out of fear', 'Wetland loss'],
        bn: ['দক্ষিণ-পূর্ব এশিয়ার কিছু এলাকায় খাদ্য ও প্রচলিত ওষুধের জন্য শিকার', 'ভয়ে মেরে ফেলা', 'জলাভূমি হ্রাস'],
      },
      initiatives: {
        en: ['Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012', 'Awareness work by snake rescue groups'],
        bn: ['বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর আওতায় সুরক্ষিত', 'সাপ উদ্ধারকারী সংগঠনগুলোর সচেতনতা কার্যক্রম'],
      },
    },
    facts: {
      en: [
        'Its calm daytime behaviour has led to dangerous myths that it is harmless — it is not.',
        'Its bold rings are a warning signal to predators.',
      ],
      bn: [
        'দিনে শান্ত থাকায় অনেকে একে নিরীহ ভাবেন — এই ভুল ধারণা বিপজ্জনক।',
        'উজ্জ্বল বলয়গুলো শিকারি প্রাণীদের প্রতি একটি সতর্কসংকেত।',
      ],
    },
    related: ['common-krait', 'monocled-cobra', 'king-cobra'],
  },
  {
    id: 'russells-viper',
    commonName: { en: "Russell's Viper", bn: 'চন্দ্রবোড়া' },
    scientificName: 'Daboia russelii',
    altNames: {
      en: ['Daboia', 'Chain Viper'],
      bn: ['উলুবোড়া', 'রাসেলস ভাইপার'],
    },
    category: 'reptiles',
    wikiTitle: "Russell's viper",
    description: {
      en: 'Russell’s viper is a thick-bodied viper with chain-like rows of dark, pale-edged blotches, and one of South Asia’s “Big Four” medically important snakes. Its venom damages blood clotting and kidneys, and bites are a medical emergency treated with antivenom in hospital. In Bangladesh it has been recorded more often since the 2010s in the Padma and Jamuna floodplains, so farmers should wear boots and use a stick or torch when walking in tall grass.',
      bn: 'চন্দ্রবোড়া মোটা দেহের একটি ভাইপার, যার গায়ে শিকলের মতো সারি বেঁধে হালকা কিনারাযুক্ত গাঢ় ছোপ থাকে; এটি দক্ষিণ এশিয়ার চিকিৎসাগতভাবে গুরুত্বপূর্ণ “বিগ ফোর” সাপের একটি। এর বিষ রক্ত জমাট বাঁধার ক্ষমতা ও কিডনির ক্ষতি করে, তাই কামড় একটি জরুরি অবস্থা — হাসপাতালে অ্যান্টিভেনমই একমাত্র চিকিৎসা। ২০১০-এর দশক থেকে বাংলাদেশের পদ্মা ও যমুনার চর এলাকায় এদের বেশি দেখা যাচ্ছে, তাই কৃষকদের লম্বা ঘাসে বুট পরে এবং লাঠি বা টর্চ নিয়ে চলা উচিত।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Viperidae',
      genus: 'Daboia',
      species: 'D. russelii',
    },
    physical: {
      size: {
        en: 'Usually about 1–1.2 m; maximum around 1.8 m',
        bn: 'সাধারণত প্রায় ১–১.২ মিটার; সর্বোচ্চ প্রায় ১.৮ মিটার',
      },
      weight: {
        en: 'Heavy-bodied; large adults may exceed 2 kg',
        bn: 'ভারী দেহ; বড়গুলোর ওজন ২ কেজির বেশি হতে পারে',
      },
      lifespan: {
        en: 'About 15 years or more in captivity',
        bn: 'আবদ্ধ অবস্থায় প্রায় ১৫ বছর বা তার বেশি',
      },
      features: {
        en: [
          'Three rows of dark brown, black-and-white-edged oval blotches like a chain',
          'Flat, triangular head and long hinged fangs',
          'Loud hiss when threatened — louder than most snakes',
        ],
        bn: [
          'শিকলের মতো তিন সারি গাঢ় বাদামি ডিম্বাকার ছোপ, কিনারায় কালো-সাদা রেখা',
          'চ্যাপ্টা ত্রিকোণাকার মাথা ও ভাঁজ করা লম্বা বিষদাঁত',
          'বিপদে প্রেশার কুকারের মতো জোরে হিসহিস শব্দ করে',
        ],
      },
    },
    habitat: {
      en: 'Open grassland, crop fields, river chars and scrub; avoids dense forest',
      bn: 'খোলা তৃণভূমি, ফসলের খেত, নদীর চর ও ঝোপঝাড়; ঘন বন এড়িয়ে চলে',
    },
    habitats: ['grassland', 'urban-farmland', 'wetland'],
    regions: ['south-asia'],
    distribution: {
      en: 'India, Pakistan, Sri Lanka, Nepal, Bhutan and Bangladesh, where it occurs mainly in the Padma–Jamuna floodplains and the north-west.',
      bn: 'ভারত, পাকিস্তান, শ্রীলঙ্কা, নেপাল, ভুটান ও বাংলাদেশ; বাংলাদেশে প্রধানত পদ্মা–যমুনা অববাহিকা ও উত্তর-পশ্চিমাঞ্চলে।',
    },
    climate: {
      en: 'Tropical and subtropical monsoon climates',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Carnivore — mainly rats and mice, also lizards, frogs and birds',
      bn: 'মাংসাশী — প্রধানত ইঁদুর; এ ছাড়া গিরগিটি, ব্যাঙ ও পাখি',
    },
    ecologicalRole: {
      en: 'A major rodent predator in farmland; its numbers often rise where rats are plentiful.',
      bn: 'কৃষিজমিতে ইঁদুরের বড় শিকারি; যেখানে ইঁদুর বেশি, সেখানে এদের সংখ্যাও বাড়ে।',
    },
    behavior: {
      en: 'Mostly nocturnal and slow; it relies on camouflage and stays still, so most bites happen when people accidentally step on it or reach into crops.',
      bn: 'মূলত নিশাচর ও ধীর; ছদ্মবেশের ওপর নির্ভর করে চুপচাপ পড়ে থাকে, তাই বেশির ভাগ কামড় ঘটে অসাবধানে পা দিলে বা ফসলে হাত দিলে।',
    },
    range: {
      native: [
        [24.4, 88.6],
        [23.9, 89.9],
        [24.9, 89.8],
        [26.9, 75.8],
        [7.3, 80.6],
        [27.7, 85.3],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Mass killing during snakebite panics', 'Loss of grassland habitat', 'Road deaths'],
        bn: ['সাপের আতঙ্কের সময় গণহারে মেরে ফেলা', 'তৃণভূমি আবাসস্থল হারানো', 'সড়কে চাপা পড়া'],
      },
      initiatives: {
        en: ['Protected under wildlife laws in Bangladesh and India', 'Antivenom supply to upazila health complexes and snakebite training for doctors in Bangladesh'],
        bn: ['বাংলাদেশ ও ভারতের বন্যপ্রাণী আইনে সুরক্ষিত', 'বাংলাদেশে উপজেলা স্বাস্থ্য কমপ্লেক্সে অ্যান্টিভেনম সরবরাহ ও চিকিৎসকদের প্রশিক্ষণ'],
      },
    },
    facts: {
      en: [
        'Unlike most snakes, it gives birth to live young — sometimes more than 40 at once.',
        'Do not tie tight tourniquets or cut the bite; immobilise the limb and go straight to hospital.',
        'Killing snakes in panic does not make an area safer and raises the risk of being bitten.',
      ],
      bn: [
        'বেশির ভাগ সাপের মতো ডিম না পেড়ে এরা সরাসরি বাচ্চা প্রসব করে — একবারে কখনো ৪০টিরও বেশি।',
        'শক্ত করে বাঁধন দেবেন না বা ক্ষত কাটবেন না; আক্রান্ত অঙ্গ নড়াচড়া না করে সরাসরি হাসপাতালে যান।',
        'আতঙ্কে সাপ মারলে এলাকা নিরাপদ হয় না, বরং কামড় খাওয়ার ঝুঁকি বাড়ে।',
      ],
    },
    related: ['spectacled-cobra', 'common-krait', 'monocled-cobra'],
  },
  {
    id: 'burmese-python',
    commonName: { en: 'Burmese Python', bn: 'অজগর' },
    scientificName: 'Python bivittatus',
    altNames: {
      en: ['Asian Rock Python', 'Indian Python'],
      bn: ['বার্মিজ অজগর', 'অজগর সাপ'],
    },
    synonyms: ['Python molurus bivittatus'],
    category: 'reptiles',
    wikiTitle: 'Burmese python',
    description: {
      en: 'The Burmese python is one of the world’s largest snakes and the python found in Bangladesh’s hill forests, the Sundarbans and other wild areas. It is non-venomous and kills prey by constriction, but large individuals are very strong and can inflict serious bites, so they must be left alone. It is threatened in its native range, while released pets have become an invasive problem in Florida’s Everglades.',
      bn: 'অজগর বিশ্বের বৃহত্তম সাপগুলোর একটি; বাংলাদেশের পাহাড়ি বন, সুন্দরবন ও অন্যান্য বনাঞ্চলে এদের দেখা মেলে। এরা বিষহীন, শিকারকে পেঁচিয়ে শ্বাসরোধ করে মারে; তবে বড় অজগর ভীষণ শক্তিশালী এবং কামড়ে গুরুতর জখম করতে পারে, তাই এদের বিরক্ত করা উচিত নয়। নিজ আবাসে এরা বিপন্নপ্রায়, অথচ পোষা প্রাণী হিসেবে ছেড়ে দেওয়া অজগর যুক্তরাষ্ট্রের ফ্লোরিডার এভারগ্লেডসে আগ্রাসী প্রজাতিতে পরিণত হয়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Pythonidae',
      genus: 'Python',
      species: 'P. bivittatus',
    },
    physical: {
      size: {
        en: 'Commonly 3.5–5 m; exceptional individuals around 5.5 m or more',
        bn: 'সাধারণত ৩.৫–৫ মিটার; ব্যতিক্রমী কিছু প্রায় ৫.৫ মিটার বা তার বেশি',
      },
      weight: {
        en: 'Large females can exceed 50 kg; record animals near 90 kg',
        bn: 'বড় স্ত্রী অজগর ৫০ কেজি ছাড়াতে পারে; রেকর্ড আকারেরগুলো প্রায় ৯০ কেজি',
      },
      lifespan: {
        en: '20–25 years; longer in captivity',
        bn: '২০–২৫ বছর; আবদ্ধ অবস্থায় আরও বেশি',
      },
      features: {
        en: [
          'Tan body with large, dark-edged brown blotches like a giraffe pattern',
          'Arrow-shaped mark on top of the head',
          'Heat-sensing pits along the lips to detect warm-blooded prey',
        ],
        bn: [
          'হালকা বাদামি দেহে জিরাফের মতো গাঢ় কিনারাযুক্ত বড় বাদামি ছোপ',
          'মাথার ওপর তীরের ফলার মতো দাগ',
          'ঠোঁট বরাবর তাপ-সংবেদী গর্ত, যা দিয়ে উষ্ণ রক্তের শিকার টের পায়',
        ],
      },
    },
    habitat: {
      en: 'Tropical forests, mangroves, grassland and marshes, usually near water',
      bn: 'ক্রান্তীয় বন, ম্যানগ্রোভ, তৃণভূমি ও জলাভূমি, সাধারণত পানির কাছাকাছি',
    },
    habitats: ['tropical-forest', 'mangrove', 'wetland', 'grassland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Northeast India, Bangladesh, Nepal and Myanmar through Indochina to southern China and Java; introduced in southern Florida, USA.',
      bn: 'উত্তর-পূর্ব ভারত, বাংলাদেশ, নেপাল ও মিয়ানমার থেকে ইন্দোচীন হয়ে দক্ষিণ চীন ও জাভা পর্যন্ত; যুক্তরাষ্ট্রের দক্ষিণ ফ্লোরিডায় অনুপ্রবেশিত।',
    },
    climate: {
      en: 'Warm, humid tropical and subtropical climates',
      bn: 'উষ্ণ-আর্দ্র ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Carnivore — rodents, birds, monitor lizards and mammals up to the size of small deer',
      bn: 'মাংসাশী — ইঁদুর, পাখি, গুইসাপ এবং ছোট হরিণ আকারের স্তন্যপায়ী',
    },
    ecologicalRole: {
      en: 'A large ambush predator that controls rodent and mammal populations; in Florida it has sharply reduced native mammals.',
      bn: 'ওত পেতে শিকার করা বড় শিকারি, যা ইঁদুর ও স্তন্যপায়ীর সংখ্যা নিয়ন্ত্রণ করে; ফ্লোরিডায় এরা স্থানীয় স্তন্যপায়ীর সংখ্যা ব্যাপক কমিয়ে দিয়েছে।',
    },
    behavior: {
      en: 'Solitary ambush hunter and strong swimmer; females coil around their eggs and warm them by shivering.',
      bn: 'একাকী, ওত পেতে শিকার করে এবং দক্ষ সাঁতারু; স্ত্রী অজগর ডিম পেঁচিয়ে ধরে পেশি কাঁপিয়ে তাপ দেয়।',
    },
    range: {
      native: [
        [22.0, 89.5],
        [22.3, 92.1],
        [24.4, 91.8],
        [19.7, 96.1],
        [15.9, 105.8],
        [-7.3, 110.0],
      ],
      introduced: [
        [25.8, -80.9],
        [25.4, -80.6],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Skin trade and harvest for food and medicine', 'Capture for the pet trade', 'Forest loss'],
        bn: ['চামড়া ব্যবসা এবং খাদ্য ও ওষুধের জন্য শিকার', 'পোষা প্রাণীর বাজারের জন্য ধরা', 'বন উজাড়'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II', 'Rescue and release of pythons into protected forests by the Bangladesh Forest Department'],
        bn: ['সাইটিস পরিশিষ্ট-২-তে তালিকাভুক্ত', 'বাংলাদেশ বন বিভাগের মাধ্যমে উদ্ধার করা অজগর সংরক্ষিত বনে অবমুক্তকরণ'],
      },
    },
    facts: {
      en: [
        'After a large meal a python may not eat again for weeks or even months.',
        'Invasive Burmese pythons in the Everglades are so numerous that Florida runs annual python removal challenges.',
      ],
      bn: [
        'বড় শিকার খাওয়ার পর একটি অজগর কয়েক সপ্তাহ, এমনকি কয়েক মাস না খেয়ে থাকতে পারে।',
        'এভারগ্লেডসে আগ্রাসী অজগর এত বেড়েছে যে ফ্লোরিডায় প্রতি বছর অজগর অপসারণ প্রতিযোগিতা হয়।',
      ],
    },
    related: ['reticulated-python', 'green-anaconda', 'king-cobra'],
  },
  {
    id: 'reticulated-python',
    commonName: { en: 'Reticulated Python', bn: 'জালি অজগর' },
    scientificName: 'Malayopython reticulatus',
    altNames: {
      en: ['Retic', 'Asiatic Reticulated Python'],
      bn: ['গোলবাহার', 'জালিবোড়া অজগর'],
    },
    synonyms: ['Python reticulatus'],
    category: 'reptiles',
    wikiTitle: 'Reticulated python',
    description: {
      en: 'The reticulated python is the world’s longest snake, named for the intricate net-like (reticulated) pattern on its back. It is non-venomous and kills by constriction, and in Bangladesh it is rare, mainly found in the south-eastern hill forests. Very large pythons have on rare occasions killed people, so wild pythons should be watched only from a distance and reported to the forest department or rescuers.',
      bn: 'জালি অজগর পৃথিবীর সবচেয়ে লম্বা সাপ; পিঠের জালের মতো জটিল নকশা থেকে এর নাম। এরা বিষহীন, শিকারকে পেঁচিয়ে মারে; বাংলাদেশে এরা দুর্লভ, মূলত দক্ষিণ-পূর্বের পাহাড়ি বনে দেখা যায়। খুব বড় অজগর কদাচিৎ মানুষ মেরেছে, তাই বুনো অজগর শুধু দূর থেকে দেখুন এবং বন বিভাগ বা উদ্ধারকারী দলকে খবর দিন।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Pythonidae',
      genus: 'Malayopython',
      species: 'M. reticulatus',
    },
    physical: {
      size: {
        en: 'Commonly 3–6 m; the longest reliably measured wild snakes approach 7 m',
        bn: 'সাধারণত ৩–৬ মিটার; নির্ভরযোগ্যভাবে মাপা দীর্ঘতম বুনো সাপ প্রায় ৭ মিটার',
      },
      weight: {
        en: 'Large adults often 50–75 kg',
        bn: 'বড় প্রাপ্তবয়স্কদের ওজন প্রায়ই ৫০–৭৫ কেজি',
      },
      lifespan: {
        en: 'Over 20 years; up to about 30 in captivity',
        bn: '২০ বছরের বেশি; আবদ্ধ অবস্থায় প্রায় ৩০ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Complex net-like pattern of black, gold and pale diamonds',
          'Thin dark line running back from each eye',
          'Slimmer and longer than the Burmese python',
        ],
        bn: [
          'কালো, সোনালি ও হালকা রঙের হীরার মতো জালির জটিল নকশা',
          'প্রতিটি চোখের পেছনে সরু কালো রেখা',
          'বার্মিজ অজগরের চেয়ে সরু ও লম্বা',
        ],
      },
    },
    habitat: {
      en: 'Tropical rainforest, woodland and grassland near rivers; also around plantations and towns',
      bn: 'নদীর কাছাকাছি ক্রান্তীয় বৃষ্টিবন, বনভূমি ও তৃণভূমি; বাগান ও শহরের আশেপাশেও থাকে',
    },
    habitats: ['tropical-forest', 'rivers-lakes', 'urban-farmland'],
    regions: ['southeast-asia', 'south-asia'],
    distribution: {
      en: 'South-east Bangladesh and north-east India through Myanmar, Thailand and Indochina to Malaysia, Indonesia and the Philippines.',
      bn: 'দক্ষিণ-পূর্ব বাংলাদেশ ও উত্তর-পূর্ব ভারত থেকে মিয়ানমার, থাইল্যান্ড ও ইন্দোচীন হয়ে মালয়েশিয়া, ইন্দোনেশিয়া ও ফিলিপাইন পর্যন্ত।',
    },
    climate: {
      en: 'Hot, humid tropical climates',
      bn: 'উষ্ণ-আর্দ্র ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Carnivore — rats, birds, civets, monkeys, pigs and deer',
      bn: 'মাংসাশী — ইঁদুর, পাখি, গন্ধগোকুল, বানর, শূকর ও হরিণ',
    },
    ecologicalRole: {
      en: 'A top predator of medium-sized mammals, and a major controller of rats around villages and plantations.',
      bn: 'মাঝারি আকারের স্তন্যপায়ীর শীর্ষ শিকারি; গ্রাম ও বাগানের আশেপাশে ইঁদুর নিয়ন্ত্রণেও বড় ভূমিকা রাখে।',
    },
    behavior: {
      en: 'Mostly nocturnal ambush hunter, an excellent swimmer that has reached remote islands by sea.',
      bn: 'মূলত নিশাচর, ওত পেতে শিকার করে; দক্ষ সাঁতারু, সমুদ্র পাড়ি দিয়ে দূরের দ্বীপেও পৌঁছেছে।',
    },
    range: {
      native: [
        [21.9, 92.3],
        [16.8, 96.2],
        [13.7, 100.5],
        [3.1, 101.7],
        [-0.8, 113.9],
        [12.9, 121.8],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Large-scale skin harvest for the leather trade', 'Hunting for food and medicine', 'Deforestation'],
        bn: ['চামড়াশিল্পের জন্য ব্যাপক শিকার', 'খাদ্য ও ওষুধের জন্য শিকার', 'বন উজাড়'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II with export quotas', 'Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012'],
        bn: ['রপ্তানি কোটাসহ সাইটিস পরিশিষ্ট-২-তে তালিকাভুক্ত', 'বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর আওতায় সুরক্ষিত'],
      },
    },
    facts: {
      en: [
        'It is the longest snake on Earth, though the green anaconda is heavier.',
        'Hundreds of thousands of skins are traded legally each year from Southeast Asia.',
      ],
      bn: [
        'এটি পৃথিবীর দীর্ঘতম সাপ, যদিও সবুজ অ্যানাকোন্ডা ওজনে বেশি ভারী।',
        'দক্ষিণ-পূর্ব এশিয়া থেকে প্রতি বছর বৈধভাবে লাখ লাখ চামড়া বাণিজ্য হয়।',
      ],
    },
    related: ['burmese-python', 'green-anaconda', 'water-monitor'],
  },
  {
    id: 'checkered-keelback',
    commonName: { en: 'Checkered Keelback', bn: 'ঢোঁড়া সাপ' },
    scientificName: 'Fowlea piscator',
    altNames: {
      en: ['Asiatic Water Snake', 'Chequered Keelback'],
      bn: ['মেটে ঢোঁড়া', 'জলঢোঁড়া'],
    },
    synonyms: ['Xenochrophis piscator'],
    category: 'reptiles',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Checkered keelback',
    description: {
      en: 'The checkered keelback is the familiar water snake of Bangladesh’s ponds, ditches and paddy fields, marked with a chessboard pattern of dark spots. It is non-venomous, though it may bite readily and flatten its neck when cornered — it is best simply left alone. Because it is so common and harmless, it is often mistaken for, or confused with, venomous species, which is one reason all snakes should be watched from a distance.',
      bn: 'ঢোঁড়া সাপ বাংলাদেশের পুকুর, ডোবা ও ধানখেতের অতি পরিচিত জলের সাপ, যার গায়ে দাবার ছকের মতো কালো ছোপ থাকে। এরা বিষহীন, তবে কোণঠাসা হলে ঘাড় চ্যাপ্টা করে সহজেই কামড়ায় — তাই একে নিজের মতো থাকতে দেওয়াই ভালো। এরা এত সাধারণ ও নিরীহ যে প্রায়ই বিষধর সাপের সঙ্গে গুলিয়ে ফেলা হয়; এ কারণেই যেকোনো সাপকে দূর থেকে দেখা উচিত।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Natricidae',
      genus: 'Fowlea',
      species: 'F. piscator',
    },
    physical: {
      size: {
        en: 'Usually 0.6–1 m; occasionally up to about 1.5 m',
        bn: 'সাধারণত ০.৬–১ মিটার; কখনো প্রায় ১.৫ মিটার পর্যন্ত',
      },
      weight: {
        en: 'Usually a few hundred grams',
        bn: 'সাধারণত কয়েকশ গ্রাম',
      },
      lifespan: {
        en: 'About 5–10 years',
        bn: 'প্রায় ৫–১০ বছর',
      },
      features: {
        en: [
          'Olive or yellowish body with a checkerboard of dark spots',
          'Keeled (ridged) scales giving a rough texture',
          'Two dark streaks below and behind the eye',
        ],
        bn: [
          'জলপাই বা হলদে দেহে দাবার ছকের মতো কালো ছোপ',
          'আঁশে উঁচু শিরা (কিল) থাকায় খসখসে অনুভূতি',
          'চোখের নিচে ও পেছনে দুটি কালো রেখা',
        ],
      },
    },
    habitat: {
      en: 'Ponds, canals, rivers, marshes and flooded paddy fields',
      bn: 'পুকুর, খাল, নদী, বিল ও পানিতে ডোবা ধানখেত',
    },
    habitats: ['wetland', 'rivers-lakes', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Common throughout Bangladesh, India, Sri Lanka, Nepal and Pakistan, east to Myanmar, Thailand and southern China.',
      bn: 'সারা বাংলাদেশ, ভারত, শ্রীলঙ্কা, নেপাল ও পাকিস্তানে সাধারণ; পূর্বে মিয়ানমার, থাইল্যান্ড ও দক্ষিণ চীন পর্যন্ত বিস্তৃত।',
    },
    climate: {
      en: 'Tropical and subtropical climates',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Carnivore — mainly fish and frogs, also tadpoles',
      bn: 'মাংসাশী — প্রধানত মাছ ও ব্যাঙ; ব্যাঙাচিও খায়',
    },
    ecologicalRole: {
      en: 'An abundant mid-level predator and an important food source for kingfishers, herons, monitor lizards and larger snakes.',
      bn: 'সংখ্যায় প্রচুর মাঝারি স্তরের শিকারি; মাছরাঙা, বক, গুইসাপ ও বড় সাপের গুরুত্বপূর্ণ খাদ্য।',
    },
    behavior: {
      en: 'Active by day and night, it swims well and often waits in shallow water with only its head showing.',
      bn: 'দিনে ও রাতে সক্রিয়, ভালো সাঁতারু; প্রায়ই অগভীর পানিতে শুধু মাথা বের করে শিকারের অপেক্ষায় থাকে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.8, 89.5],
        [24.9, 91.9],
        [22.6, 88.4],
        [7.3, 80.6],
        [16.8, 96.2],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Killed because it is mistaken for a venomous snake', 'Drowning in fishing nets', 'Wetland pollution and pesticides'],
        bn: ['বিষধর ভেবে মেরে ফেলা', 'মাছ ধরার জালে আটকে মারা যাওয়া', 'জলাভূমি দূষণ ও কীটনাশক'],
      },
      initiatives: {
        en: ['Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012', 'School and community snake-identification awareness'],
        bn: ['বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর আওতায় সুরক্ষিত', 'স্কুল ও সমাজে সাপ চেনার সচেতনতা কার্যক্রম'],
      },
    },
    facts: {
      en: [
        'Even a bite from this harmless snake should be washed and checked, because snakes are easy to misidentify.',
        'The Bengali saying “ঢোঁড়া সাপ” is used for someone who looks fierce but is harmless.',
      ],
      bn: [
        'নিরীহ এই সাপ কামড়ালেও ক্ষত ধুয়ে চিকিৎসকের পরামর্শ নিন, কারণ সাপ চিনতে ভুল হওয়া খুব সহজ।',
        'ভয় দেখায় কিন্তু ক্ষতি করতে পারে না — এমন মানুষকে বাংলায় “ঢোঁড়া সাপ” বলা হয়।',
      ],
    },
    related: ['monocled-cobra', 'banded-krait', 'common-kingfisher'],
  },
  {
    id: 'green-vine-snake',
    commonName: { en: 'Green Vine Snake', bn: 'লাউডগা সাপ' },
    scientificName: 'Ahaetulla prasina',
    altNames: {
      en: ['Oriental Whip Snake', 'Asian Vine Snake'],
      bn: ['লাউডগা', 'সবুজ ডগা সাপ'],
    },
    category: 'reptiles',
    wikiTitle: 'Ahaetulla prasina',
    description: {
      en: 'The green vine snake is a very slender, leaf-green tree snake with a long pointed snout and keyhole-shaped pupils, known in Bangladesh as “laudoga” after the gourd vine it resembles. It is mildly venomous: its rear fangs deliver weak venom that is not considered dangerous to people, though bites can cause local swelling. Like all snakes, it should not be handled — simply enjoy its remarkable camouflage from a distance.',
      bn: 'লাউডগা সাপ অত্যন্ত সরু, পাতার মতো সবুজ গেছো সাপ; লম্বা সূচালো নাক ও চাবির ছিদ্রের মতো চোখের মণি এর বৈশিষ্ট্য। লাউয়ের ডগার মতো দেখতে বলে বাংলাদেশে এর এই নাম। এটি মৃদু বিষধর — মুখের পেছনের দাঁতে হালকা বিষ থাকে, যা মানুষের জন্য বিপজ্জনক নয়, তবে কামড়ে জায়গাটি ফুলে যেতে পারে। অন্য সব সাপের মতো একেও হাতে ধরা উচিত নয় — দূর থেকেই এর চমৎকার ছদ্মবেশ উপভোগ করুন।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Colubridae',
      genus: 'Ahaetulla',
      species: 'A. prasina',
    },
    physical: {
      size: {
        en: 'Usually 1–1.5 m, mostly tail; up to about 2 m',
        bn: 'সাধারণত ১–১.৫ মিটার, যার বড় অংশই লেজ; প্রায় ২ মিটার পর্যন্ত',
      },
      weight: {
        en: 'Very light; usually under 200 g',
        bn: 'খুব হালকা; সাধারণত ২০০ গ্রামের কম',
      },
      lifespan: {
        en: 'About 10 years or more',
        bn: 'প্রায় ১০ বছর বা তার বেশি',
      },
      features: {
        en: [
          'Bright green, whip-thin body',
          'Long pointed snout and horizontal keyhole-shaped pupils',
          'Flashes black-and-white skin between scales when threatened',
        ],
        bn: [
          'উজ্জ্বল সবুজ, চাবুকের মতো সরু দেহ',
          'লম্বা সূচালো নাক ও আড়াআড়ি চাবির ছিদ্রের মতো মণি',
          'বিপদে আঁশের ফাঁকের সাদা-কালো চামড়া দেখিয়ে ভয় দেখায়',
        ],
      },
    },
    habitat: {
      en: 'Forests, bamboo thickets, gardens and hedgerows with dense shrubs and vines',
      bn: 'বন, বাঁশঝাড়, বাগান ও লতাপাতায় ঘেরা ঘন ঝোপঝাড়',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'North-east India and Bangladesh through Myanmar, Thailand and Indochina to southern China, Malaysia, Indonesia and the Philippines.',
      bn: 'উত্তর-পূর্ব ভারত ও বাংলাদেশ থেকে মিয়ানমার, থাইল্যান্ড ও ইন্দোচীন হয়ে দক্ষিণ চীন, মালয়েশিয়া, ইন্দোনেশিয়া ও ফিলিপাইন পর্যন্ত।',
    },
    climate: {
      en: 'Warm, humid tropical climates',
      bn: 'উষ্ণ-আর্দ্র ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Carnivore — lizards and frogs, sometimes small birds',
      bn: 'মাংসাশী — গিরগিটি ও ব্যাঙ; কখনো ছোট পাখি',
    },
    ecologicalRole: {
      en: 'A predator of tree lizards and frogs, and prey for birds of prey and larger snakes.',
      bn: 'গেছো গিরগিটি ও ব্যাঙের শিকারি এবং শিকারি পাখি ও বড় সাপের খাদ্য।',
    },
    behavior: {
      en: 'Active by day; it sways gently like a vine in the breeze and uses binocular vision to judge strikes.',
      bn: 'দিনে সক্রিয়; বাতাসে দোলা লতার মতো ধীরে দোলে এবং দুই চোখের সম্মিলিত দৃষ্টিতে দূরত্ব মেপে ছোবল দেয়।',
    },
    range: {
      native: [
        [24.3, 91.7],
        [22.4, 92.2],
        [26.1, 91.7],
        [16.8, 96.2],
        [3.1, 101.7],
        [14.6, 121.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Forest and hedgerow clearance', 'Killed out of the myth that it strikes at eyes', 'Capture for the pet trade'],
        bn: ['বন ও ঝোপঝাড় পরিষ্কার করা', '“চোখে ছোবল দেয়” — এমন কুসংস্কারে মেরে ফেলা', 'পোষা প্রাণীর বাজারের জন্য ধরা'],
      },
      initiatives: {
        en: ['Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012', 'Occurs in protected areas such as Lawachara National Park'],
        bn: ['বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর আওতায় সুরক্ষিত', 'লাউয়াছড়া জাতীয় উদ্যানের মতো সংরক্ষিত এলাকায় বাস করে'],
      },
    },
    facts: {
      en: [
        'The popular belief that it deliberately strikes people’s eyes is a myth.',
        'Grooves in front of its eyes let it look forward with both eyes, unusual among snakes.',
      ],
      bn: [
        'এরা ইচ্ছা করে মানুষের চোখে ছোবল দেয় — এই প্রচলিত বিশ্বাস ভুল।',
        'চোখের সামনের খাঁজের কারণে এরা দুই চোখে একসঙ্গে সামনে দেখতে পারে, যা সাপের মধ্যে বিরল।',
      ],
    },
    related: ['oriental-garden-lizard', 'checkered-keelback', 'tokay-gecko'],
  },
  {
    id: 'yellow-lipped-sea-krait',
    commonName: { en: 'Yellow-lipped Sea Krait', bn: 'হলুদঠোঁট সামুদ্রিক কালাচ' },
    scientificName: 'Laticauda colubrina',
    altNames: {
      en: ['Banded Sea Krait', 'Colubrine Sea Krait'],
      bn: ['ডোরাকাটা সামুদ্রিক সাপ', 'সামুদ্রিক ক্রেইট'],
    },
    category: 'reptiles',
    secondaryCategories: ['marine'],
    wikiTitle: 'Laticauda colubrina',
    description: {
      en: 'The yellow-lipped sea krait is a blue-grey sea snake with bold black rings, a yellow snout and a paddle-shaped tail for swimming. It hunts eels among coral reefs but returns to land to digest, shed its skin and lay eggs. Its venom is extremely potent; although it is generally docile and bites are rare, divers and beach visitors must never touch or pick one up.',
      bn: 'হলুদঠোঁট সামুদ্রিক কালাচ নীলচে-ধূসর রঙের সামুদ্রিক সাপ; গায়ে মোটা কালো বলয়, নাক ও ঠোঁট হলুদ এবং সাঁতারের জন্য বৈঠার মতো চ্যাপ্টা লেজ। প্রবালপ্রাচীরের ফাঁকে এরা বাইম জাতীয় মাছ শিকার করে, কিন্তু খাবার হজম, খোলস বদল ও ডিম পাড়তে ডাঙায় ফিরে আসে। এর বিষ অত্যন্ত তীব্র; সাধারণত শান্ত স্বভাবের এবং কামড়ের ঘটনা বিরল হলেও ডুবুরি বা সৈকতে বেড়াতে আসা কারও কখনো একে ছোঁয়া বা হাতে তোলা উচিত নয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Elapidae',
      genus: 'Laticauda',
      species: 'L. colubrina',
    },
    physical: {
      size: {
        en: 'Usually 0.8–1.2 m; females up to about 1.5 m',
        bn: 'সাধারণত ০.৮–১.২ মিটার; স্ত্রী সাপ প্রায় ১.৫ মিটার পর্যন্ত',
      },
      weight: {
        en: 'Females are much heavier than males; usually under 2 kg',
        bn: 'স্ত্রী সাপ পুরুষের চেয়ে অনেক ভারী; সাধারণত ২ কেজির কম',
      },
      lifespan: {
        en: 'Around 10 years',
        bn: 'প্রায় ১০ বছর',
      },
      features: {
        en: [
          'Blue-grey body with 20–65 black rings',
          'Yellow upper lip and snout',
          'Flattened, paddle-like tail',
        ],
        bn: [
          'নীলচে-ধূসর দেহে ২০–৬৫টি কালো বলয়',
          'হলুদ ঠোঁট ও নাক',
          'চ্যাপ্টা, বৈঠার মতো লেজ',
        ],
      },
    },
    habitat: {
      en: 'Shallow tropical seas, coral reefs and rocky islets, coming ashore on beaches and in rock crevices',
      bn: 'অগভীর ক্রান্তীয় সমুদ্র, প্রবালপ্রাচীর ও পাথুরে ছোট দ্বীপ; সৈকত ও পাথরের ফাটলে ডাঙায় ওঠে',
    },
    habitats: ['coral-reef', 'ocean'],
    regions: ['oceans', 'southeast-asia', 'oceania', 'south-asia'],
    distribution: {
      en: 'Eastern Indian Ocean and western Pacific, from the Bay of Bengal and Andaman Sea through Southeast Asia to Fiji and Tonga.',
      bn: 'পূর্ব ভারত মহাসাগর ও পশ্চিম প্রশান্ত মহাসাগর — বঙ্গোপসাগর ও আন্দামান সাগর থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে ফিজি ও টোঙ্গা পর্যন্ত।',
    },
    climate: {
      en: 'Warm tropical marine waters',
      bn: 'উষ্ণ ক্রান্তীয় সমুদ্রজল',
    },
    diet: {
      en: 'Carnivore — mainly eels, plus small reef fish',
      bn: 'মাংসাশী — প্রধানত সামুদ্রিক বাইম; এ ছাড়া প্রবালপ্রাচীরের ছোট মাছ',
    },
    ecologicalRole: {
      en: 'A key predator of moray and conger eels on coral reefs.',
      bn: 'প্রবালপ্রাচীরে মোরে ও কঙ্গার বাইমের অন্যতম প্রধান শিকারি।',
    },
    behavior: {
      en: 'Hunts at sea, often alongside fish that flush out prey, and gathers in groups on land to rest and breed.',
      bn: 'সমুদ্রে শিকার করে, প্রায়ই অন্য মাছের সঙ্গে মিলে শিকার তাড়ায়; বিশ্রাম ও প্রজননের জন্য দল বেঁধে ডাঙায় ওঠে।',
    },
    range: {
      native: [
        [11.6, 92.7],
        [7.8, 98.3],
        [-8.7, 115.2],
        [10.5, 123.5],
        [-17.7, 168.3],
        [-17.8, 178.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Harvest for skins and food in parts of Asia', 'Coral reef degradation', 'Coastal development on nesting islets'],
        bn: ['এশিয়ার কিছু এলাকায় চামড়া ও খাদ্যের জন্য শিকার', 'প্রবালপ্রাচীরের অবক্ষয়', 'ডিম পাড়ার দ্বীপে উপকূলীয় উন্নয়ন'],
      },
      initiatives: {
        en: ['Occurs in many marine protected areas', 'Reef conservation and diver codes of conduct that forbid touching wildlife'],
        bn: ['অনেক সামুদ্রিক সংরক্ষিত এলাকায় বাস করে', 'প্রবালপ্রাচীর সংরক্ষণ এবং বন্যপ্রাণী ছোঁয়া নিষেধ — ডুবুরিদের এমন আচরণবিধি'],
      },
    },
    facts: {
      en: [
        'Sea kraits must return to land to lay eggs, unlike most sea snakes, which give birth at sea.',
        'It drinks fresh water and can become dehydrated if kept only in salt water.',
      ],
      bn: [
        'বেশির ভাগ সামুদ্রিক সাপ সাগরেই বাচ্চা দেয়, কিন্তু সামুদ্রিক কালাচকে ডিম পাড়তে ডাঙায় আসতে হয়।',
        'এরা মিঠা পানি পান করে; শুধু লোনা পানিতে থাকলে পানিশূন্যতায় ভুগতে পারে।',
      ],
    },
    related: ['common-krait', 'banded-krait', 'green-sea-turtle', 'staghorn-coral'],
  },
];
