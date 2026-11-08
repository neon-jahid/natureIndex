import type { Species } from '@/types';

export const reptiles: Species[] = [
  {
    id: 'gharial',
    commonName: { en: 'Gharial', bn: 'ঘড়িয়াল' },
    scientificName: 'Gavialis gangeticus',
    altNames: {
      en: ['Gavial', 'Fish-eating Crocodile', 'Indian Gharial'],
      bn: ['ঘড়িয়াল কুমির', 'মেছো কুমির', 'গাভিয়াল'],
    },
    synonyms: ['Lacerta gangetica'],
    category: 'reptiles',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Gharial',
    description: {
      en: 'The gharial is a large crocodilian with an extremely long, thin snout lined with over a hundred sharp, interlocking teeth — a perfect tool for catching fish. Adult males grow a bulbous knob on the tip of the snout called a "ghara", after the Hindi word for an earthen pot. Once common in the Padma, Jamuna and other great rivers of the subcontinent, it is now one of the most threatened crocodilians in the world and is close to vanishing from Bangladesh.',
      bn: 'ঘড়িয়াল একটি বড় আকারের কুমিরজাতীয় সরীসৃপ। এর চোয়াল অস্বাভাবিক লম্বা ও সরু, আর তাতে সারি সারি শতাধিক ধারালো দাঁত — মাছ ধরার জন্য একেবারে উপযুক্ত। প্রাপ্তবয়স্ক পুরুষের নাকের ডগায় মাটির ঘড়ার মতো একটি স্ফীত অংশ গজায়, সেখান থেকেই "ঘড়িয়াল" নামের উৎপত্তি। একসময় পদ্মা, যমুনাসহ উপমহাদেশের বড় নদীগুলোতে এদের প্রচুর দেখা যেত, কিন্তু এখন এরা বিশ্বের সবচেয়ে বিপন্ন কুমিরগুলোর একটি এবং বাংলাদেশ থেকে প্রায় হারিয়ে যেতে বসেছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Crocodilia',
      family: 'Gavialidae',
      genus: 'Gavialis',
      species: 'G. gangeticus',
    },
    physical: {
      size: {
        en: 'Males 3–6 m long; females 2.6–4.5 m',
        bn: 'পুরুষ ৩–৬ মিটার লম্বা; স্ত্রী ২.৬–৪.৫ মিটার',
      },
      weight: {
        en: 'Males up to about 160–250 kg; females smaller',
        bn: 'পুরুষ প্রায় ১৬০–২৫০ কেজি পর্যন্ত; স্ত্রী তুলনামূলক হালকা',
      },
      lifespan: {
        en: 'Estimated 40–60 years',
        bn: 'আনুমানিক ৪০–৬০ বছর',
      },
      features: {
        en: [
          'Very long, narrow snout with about 110 sharp interlocking teeth',
          'Males develop a pot-shaped "ghara" on the snout tip, used to make buzzing sounds and bubbles',
          'Olive-grey body; legs too weak to walk upright on land, so it slides on its belly',
        ],
        bn: [
          'অত্যন্ত লম্বা ও সরু চোয়াল, তাতে প্রায় ১১০টি ধারালো দাঁত পরস্পরের ফাঁকে ফাঁকে বসানো',
          'পুরুষের নাকের ডগায় ঘড়ার মতো স্ফীত অংশ থাকে, যা দিয়ে এরা গুঞ্জনের মতো শব্দ ও বুদবুদ তৈরি করে',
          'জলপাই-ধূসর দেহ; পা দুর্বল বলে ডাঙায় সোজা হয়ে হাঁটতে পারে না, পেট ঘষে চলে',
        ],
      },
    },
    habitat: {
      en: 'Deep, fast-flowing rivers with sandbanks for basking and nesting',
      bn: 'গভীর ও স্রোতস্বিনী নদী, যেখানে রোদ পোহানো ও ডিম পাড়ার জন্য বালুচর আছে',
    },
    habitats: ['rivers-lakes'],
    regions: ['south-asia'],
    distribution: {
      en: 'Now mainly in the Chambal, Girwa, Gandak and Son rivers of India and the Rapti–Narayani system of Nepal. Only a handful survive in the Padma and Jamuna rivers of Bangladesh; it is extinct in Pakistan, Bhutan and Myanmar.',
      bn: 'বর্তমানে প্রধানত ভারতের চম্বল, গিরওয়া, গণ্ডক ও শোন নদী এবং নেপালের রাপ্তি–নারায়ণী নদীতে টিকে আছে। বাংলাদেশের পদ্মা ও যমুনায় হাতে গোনা কয়েকটি ঘড়িয়াল বেঁচে আছে; পাকিস্তান, ভুটান ও মিয়ানমার থেকে এরা বিলুপ্ত।',
    },
    climate: {
      en: 'Tropical and subtropical monsoon climate',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Almost entirely fish; young gharials also eat insects, frogs and small crustaceans',
      bn: 'প্রায় সম্পূর্ণ মাছভোজী; বাচ্চা ঘড়িয়াল পোকামাকড়, ব্যাঙ ও ছোট চিংড়িজাতীয় প্রাণীও খায়',
    },
    ecologicalRole: {
      en: 'As a top fish predator it helps keep river fish communities healthy and is a strong indicator of clean, free-flowing rivers.',
      bn: 'নদীর শীর্ষ মাছশিকারি হিসেবে ঘড়িয়াল মাছের জনগোষ্ঠীকে সুস্থ রাখে; এদের উপস্থিতি পরিষ্কার ও প্রবহমান নদীর একটি গুরুত্বপূর্ণ নির্দেশক।',
    },
    behavior: {
      en: 'Spends most of its life in water and comes onto sandbanks to bask. Females dig nests in sand during the dry season and guard the hatchlings, which stay in crèches for weeks.',
      bn: 'জীবনের বেশির ভাগ সময় পানিতে কাটায় এবং রোদ পোহাতে বালুচরে ওঠে। শুষ্ক মৌসুমে স্ত্রী ঘড়িয়াল বালিতে গর্ত খুঁড়ে ডিম পাড়ে এবং ডিম ফোটার পর কয়েক সপ্তাহ বাচ্চাদের দল বেঁধে পাহারা দেয়।',
    },
    range: {
      native: [
        [26.6, 78.3],
        [28.3, 81.1],
        [27.5, 84.0],
        [27.2, 84.4],
        [24.4, 81.9],
        [24.4, 88.6],
        [24.8, 89.7],
      ],
      endemicTo: { en: 'Northern Indian subcontinent', bn: 'উত্তর ভারতীয় উপমহাদেশ' },
    },
    conservation: {
      status: 'CR',
      trend: 'increasing',
      population: {
        en: 'About 650 mature individuals in the wild (IUCN, 2019)',
        bn: 'বনে প্রায় ৬৫০টি প্রাপ্তবয়স্ক ঘড়িয়াল (আইইউসিএন, ২০১৯)',
      },
      threats: {
        en: ['Drowning in fishing nets', 'Dams, barrages and river diversion', 'Sand mining on nesting banks', 'Loss of fish prey from overfishing'],
        bn: ['মাছ ধরার জালে আটকে মৃত্যু', 'বাঁধ, ব্যারাজ ও নদীর গতিপথ পরিবর্তন', 'ডিম পাড়ার বালুচর থেকে বালু উত্তোলন', 'অতিরিক্ত মাছ ধরায় খাদ্য সংকট'],
      },
      initiatives: {
        en: ['National Chambal Sanctuary in India', 'Captive breeding and release in India and Nepal', 'Gharial breeding programme in Bangladesh', 'Community nest monitoring along the Padma'],
        bn: ['ভারতের ন্যাশনাল চম্বল অভয়ারণ্য', 'ভারত ও নেপালে কৃত্রিম প্রজনন ও প্রকৃতিতে অবমুক্তকরণ', 'বাংলাদেশে ঘড়িয়াল প্রজনন কর্মসূচি', 'পদ্মার তীরে স্থানীয় জনগণের অংশগ্রহণে বাসা পর্যবেক্ষণ'],
      },
      assessed: '2019',
    },
    facts: {
      en: [
        'It is the only surviving member of its family, Gavialidae.',
        'The name comes from "ghara", the pot-shaped knob on the male’s snout.',
        'In 2007–08 more than 100 gharials died suddenly in the Chambal river, likely from pollution.',
      ],
      bn: [
        'গ্যাভিয়ালিডি গোত্রে এখন টিকে থাকা একমাত্র প্রজাতি ঘড়িয়াল।',
        'পুরুষের নাকের ডগার ঘড়ার মতো অংশ থেকেই এর নাম হয়েছে "ঘড়িয়াল"।',
        '২০০৭–০৮ সালে চম্বল নদীতে হঠাৎ ১০০টিরও বেশি ঘড়িয়াল মারা যায়, সম্ভবত দূষণের কারণে।',
      ],
    },
    related: ['ganges-river-dolphin', 'king-cobra', 'komodo-dragon', 'hilsa'],
  },
  {
    id: 'king-cobra',
    commonName: { en: 'King Cobra', bn: 'শঙ্খচূড়' },
    scientificName: 'Ophiophagus hannah',
    altNames: {
      en: ['Hamadryad', 'Northern King Cobra', 'Snake-eater'],
      bn: ['রাজগোখরা', 'রাজ গোখরো', 'শঙ্খচূড় সাপ'],
    },
    synonyms: ['Hamadryas hannah', 'Naja hannah'],
    category: 'reptiles',
    wikiTitle: 'King cobra',
    description: {
      en: 'The king cobra is the world’s longest venomous snake. When threatened it raises the front third of its body off the ground, spreads a narrow hood and gives a deep, growling hiss. True to its genus name Ophiophagus — "snake-eater" — it feeds mainly on other snakes. In Bangladesh it survives in the hill forests of Chattogram, the Chittagong Hill Tracts, Sylhet and the Sundarbans. Studies published in 2024 split the king cobra into four species; the one found in Bangladesh keeps the name O. hannah.',
      bn: 'শঙ্খচূড় পৃথিবীর সবচেয়ে লম্বা বিষধর সাপ। বিপদ টের পেলে এটি শরীরের সামনের এক-তৃতীয়াংশ মাটি থেকে উঁচু করে, সরু ফণা মেলে এবং গম্ভীর গর্জনের মতো হিসহিস শব্দ করে। এর গণনাম Ophiophagus অর্থ "সাপভুক" — নামের মতোই এরা প্রধানত অন্য সাপ খেয়ে বেঁচে থাকে। বাংলাদেশে চট্টগ্রাম, পার্বত্য চট্টগ্রাম ও সিলেটের পাহাড়ি বন এবং সুন্দরবনে এদের দেখা মেলে। ২০২৪ সালে প্রকাশিত গবেষণায় শঙ্খচূড়কে চারটি আলাদা প্রজাতিতে ভাগ করা হয়েছে; বাংলাদেশের শঙ্খচূড়ের নাম O. hannah-ই রয়ে গেছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Elapidae',
      genus: 'Ophiophagus',
      species: 'O. hannah',
    },
    physical: {
      size: {
        en: 'Usually 3–4 m long; record about 5.85 m',
        bn: 'সাধারণত ৩–৪ মিটার লম্বা; রেকর্ড প্রায় ৫.৮৫ মিটার',
      },
      weight: {
        en: 'Typically 6–9 kg; large males up to about 12 kg',
        bn: 'সাধারণত ৬–৯ কেজি; বড় পুরুষ প্রায় ১২ কেজি পর্যন্ত',
      },
      lifespan: {
        en: 'About 20 years in the wild',
        bn: 'বনে প্রায় ২০ বছর',
      },
      features: {
        en: [
          'Olive, brown or black body with pale crossbands, especially in young snakes',
          'Narrow hood without the spectacle mark of the common cobra',
          'A pair of large occipital scales behind the head',
        ],
        bn: [
          'জলপাই, বাদামি বা কালো দেহে হালকা রঙের আড়াআড়ি দাগ, বিশেষত বাচ্চাদের মধ্যে স্পষ্ট',
          'সরু ফণা, তাতে সাধারণ গোখরার মতো চশমার দাগ নেই',
          'মাথার পেছনে একজোড়া বড় আঁশ',
        ],
      },
    },
    habitat: {
      en: 'Dense evergreen and semi-evergreen forests, bamboo thickets, mangroves and forest-edge farmland near streams',
      bn: 'ঘন চিরসবুজ ও আধা-চিরসবুজ বন, বাঁশঝাড়, ম্যানগ্রোভ এবং ছড়ার কাছে বনঘেঁষা কৃষিজমি',
    },
    habitats: ['tropical-forest', 'mangrove', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'From the Himalayan foothills of India and Nepal through Bangladesh, Bhutan and Myanmar to Thailand, Indochina and southern China. Bangladesh: Chattogram, Chittagong Hill Tracts, Sylhet and the Sundarbans.',
      bn: 'ভারত ও নেপালের হিমালয়ের পাদদেশ থেকে বাংলাদেশ, ভুটান ও মিয়ানমার হয়ে থাইল্যান্ড, ইন্দোচীন ও দক্ষিণ চীন পর্যন্ত। বাংলাদেশে চট্টগ্রাম, পার্বত্য চট্টগ্রাম, সিলেট ও সুন্দরবনে পাওয়া যায়।',
    },
    climate: {
      en: 'Warm, humid tropical and subtropical climates',
      bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় এবং উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Mainly other snakes — rat snakes, kraits, pythons and even other cobras; occasionally monitor lizards',
      bn: 'প্রধানত অন্য সাপ — দাঁড়াশ, কালাচ, অজগর, এমনকি অন্য গোখরাও; মাঝে মাঝে গুইসাপ খায়',
    },
    ecologicalRole: {
      en: 'A top predator of snakes, it keeps populations of venomous and rodent-eating snakes in check.',
      bn: 'সাপের শীর্ষ শিকারি হিসেবে শঙ্খচূড় বিষধর ও ইঁদুরভোজী সাপের সংখ্যা নিয়ন্ত্রণে রাখে।',
    },
    behavior: {
      en: 'Shy and usually avoids people. It is the only snake known to build a nest: the female gathers leaf litter into a mound, lays 20–40 eggs and guards them for about two months.',
      bn: 'লাজুক স্বভাবের, সাধারণত মানুষ এড়িয়ে চলে। এটিই একমাত্র সাপ যে বাসা বানায় — স্ত্রী শঙ্খচূড় শুকনো পাতা জড়ো করে ঢিবি তৈরি করে, তাতে ২০–৪০টি ডিম পাড়ে এবং প্রায় দুই মাস পাহারা দেয়।',
    },
    range: {
      native: [
        [22.4, 92.2],
        [24.3, 91.8],
        [21.9, 89.5],
        [26.9, 92.8],
        [21.0, 96.0],
        [14.5, 99.0],
        [18.5, 105.0],
        [23.5, 108.5],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Deforestation and habitat loss', 'Killing out of fear', 'Capture for snake charming, skin and traditional medicine', 'Illegal wildlife trade'],
        bn: ['বন উজাড় ও আবাসস্থল হারানো', 'ভয়ের কারণে মেরে ফেলা', 'সাপুড়ের খেলা, চামড়া ও কবিরাজি ওষুধের জন্য ধরা', 'অবৈধ বন্যপ্রাণী বাণিজ্য'],
      },
      initiatives: {
        en: ['Listed in CITES Appendix II', 'Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012', 'Radio-telemetry research and nest protection in India', 'Snake rescue and awareness programmes'],
        bn: ['সাইটিস (CITES) পরিশিষ্ট-২ তালিকাভুক্ত', 'বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন ২০১২ অনুযায়ী সংরক্ষিত', 'ভারতে রেডিও-টেলিমেট্রি গবেষণা ও বাসা সংরক্ষণ', 'সাপ উদ্ধার ও জনসচেতনতা কার্যক্রম'],
      },
    },
    facts: {
      en: [
        'A single bite can deliver enough venom to kill an elephant, yet bites on people are rare.',
        'It can "growl" — its low hiss is produced by pouches in the windpipe.',
        'It is the only snake in the world that builds a nest for its eggs.',
      ],
      bn: [
        'এক কামড়ে এত বিষ ঢালতে পারে যে একটি হাতিও মারা যেতে পারে, তবু মানুষকে কামড়ানোর ঘটনা বিরল।',
        'শ্বাসনালির বিশেষ থলির কারণে এরা গরগর শব্দে "গর্জন" করতে পারে।',
        'ডিমের জন্য বাসা বানায় এমন সাপ পৃথিবীতে কেবল এটিই।',
      ],
    },
    related: ['gharial', 'komodo-dragon', 'royal-bengal-tiger'],
  },
  {
    id: 'green-sea-turtle',
    commonName: { en: 'Green Sea Turtle', bn: 'সবুজ সামুদ্রিক কচ্ছপ' },
    scientificName: 'Chelonia mydas',
    altNames: {
      en: ['Green Turtle', 'Black Sea Turtle', 'Pacific Green Turtle'],
      bn: ['সবুজ কাছিম', 'সামুদ্রিক কাছিম', 'সবুজ কচ্ছপ'],
    },
    synonyms: ['Testudo mydas'],
    category: 'reptiles',
    secondaryCategories: ['marine'],
    wikiTitle: 'Green sea turtle',
    description: {
      en: 'The green sea turtle is one of the largest hard-shelled sea turtles. It is named not for its shell but for the greenish fat under it, coloured by its diet of seagrass and algae. Adults migrate thousands of kilometres between feeding grounds and the beaches where they hatched. In Bangladesh, green turtles come ashore to nest on Saint Martin’s Island and the Cox’s Bazar–Teknaf coast.',
      bn: 'সবুজ সামুদ্রিক কচ্ছপ শক্ত খোলসওয়ালা সামুদ্রিক কচ্ছপদের মধ্যে অন্যতম বড়। এর নাম খোলসের রঙের জন্য নয়, বরং খোলসের নিচের সবুজাভ চর্বির জন্য — সামুদ্রিক ঘাস ও শৈবাল খাওয়ার ফলে চর্বির রং সবুজ হয়। প্রাপ্তবয়স্ক কচ্ছপ খাদ্য সংগ্রহের এলাকা থেকে হাজার হাজার কিলোমিটার পাড়ি দিয়ে নিজের জন্মস্থান সৈকতে ফিরে আসে। বাংলাদেশে সেন্ট মার্টিন দ্বীপ এবং কক্সবাজার–টেকনাফ উপকূলে এরা ডিম পাড়তে আসে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Testudines',
      family: 'Cheloniidae',
      genus: 'Chelonia',
      species: 'C. mydas',
    },
    physical: {
      size: {
        en: 'Shell (carapace) 80–120 cm long',
        bn: 'খোলস (ক্যারাপেস) ৮০–১২০ সেমি লম্বা',
      },
      weight: {
        en: 'Adults usually 65–200 kg; exceptionally over 300 kg',
        bn: 'প্রাপ্তবয়স্ক সাধারণত ৬৫–২০০ কেজি; ব্যতিক্রমী ক্ষেত্রে ৩০০ কেজিরও বেশি',
      },
      lifespan: {
        en: 'Matures at 25–40 years; may live 70 years or more',
        bn: '২৫–৪০ বছর বয়সে প্রজননক্ষম হয়; ৭০ বছর বা তারও বেশি বাঁচতে পারে',
      },
      features: {
        en: [
          'Smooth, heart-shaped shell in olive, brown or black shades',
          'Small, rounded head with a single pair of scales between the eyes',
          'Paddle-like front flippers for long-distance swimming',
        ],
        bn: [
          'মসৃণ, হৃৎপিণ্ড আকৃতির খোলস, রং জলপাই, বাদামি বা কালচে',
          'ছোট গোলাকার মাথা, চোখের মাঝে মাত্র একজোড়া আঁশ',
          'দূরপাল্লার সাঁতারের জন্য বৈঠার মতো সামনের ফ্লিপার',
        ],
      },
    },
    habitat: {
      en: 'Tropical and subtropical seas, especially shallow coastal waters with seagrass beds and coral reefs; nests on sandy beaches',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় সাগর, বিশেষত সামুদ্রিক ঘাস ও প্রবালপ্রাচীরসমৃদ্ধ অগভীর উপকূলীয় জলাশয়; বালুকাময় সৈকতে ডিম পাড়ে',
    },
    habitats: ['ocean', 'coral-reef'],
    regions: ['oceans', 'south-asia', 'southeast-asia', 'oceania', 'africa', 'north-america', 'south-america'],
    distribution: {
      en: 'Found worldwide in tropical and subtropical oceans. Major nesting sites include Raine Island (Australia), Tortuguero (Costa Rica), Ascension Island and the Gulf of Oman; in Bangladesh it nests on Saint Martin’s Island and the southern Cox’s Bazar coast.',
      bn: 'বিশ্বের ক্রান্তীয় ও উপক্রান্তীয় সব মহাসাগরে পাওয়া যায়। অস্ট্রেলিয়ার রেইন দ্বীপ, কোস্টারিকার তোর্তুগেরো, অ্যাসেনশন দ্বীপ ও ওমান উপসাগর এদের প্রধান প্রজননস্থল; বাংলাদেশে সেন্ট মার্টিন দ্বীপ ও কক্সবাজারের দক্ষিণ উপকূলে ডিম পাড়ে।',
    },
    climate: {
      en: 'Warm tropical and subtropical waters, generally above 20 °C',
      bn: 'উষ্ণ ক্রান্তীয় ও উপক্রান্তীয় পানি, সাধারণত ২০ ডিগ্রি সেলসিয়াসের বেশি তাপমাত্রা',
    },
    diet: {
      en: 'Juveniles are omnivorous (jellyfish, sponges, small invertebrates); adults are mainly herbivores, grazing on seagrass and algae',
      bn: 'বাচ্চারা সর্বভুক (জেলিফিশ, স্পঞ্জ, ছোট অমেরুদণ্ডী প্রাণী); প্রাপ্তবয়স্করা মূলত তৃণভোজী — সামুদ্রিক ঘাস ও শৈবাল খায়',
    },
    ecologicalRole: {
      en: 'Grazing keeps seagrass meadows short and healthy, which supports fish nurseries; nesting turtles also carry nutrients from the sea to beach ecosystems.',
      bn: 'সামুদ্রিক ঘাস খেয়ে এরা ঘাসের বিস্তীর্ণ মাঠকে ছেঁটে সুস্থ রাখে, যা মাছের বাচ্চাদের আশ্রয়স্থল টিকিয়ে রাখে; ডিম পাড়ার মাধ্যমে সাগরের পুষ্টি সৈকতের বাস্তুতন্ত্রেও পৌঁছে দেয়।',
    },
    behavior: {
      en: 'Females return every 2–4 years to nest, usually on the beach where they hatched, laying about 100 eggs per clutch at night. The temperature of the sand decides the hatchlings’ sex — warmer sand produces more females.',
      bn: 'স্ত্রী কচ্ছপ প্রতি ২–৪ বছর পরপর সাধারণত নিজের জন্মস্থান সৈকতে ফিরে রাতের বেলা প্রতিবারে প্রায় ১০০টি ডিম পাড়ে। বালির তাপমাত্রাই বাচ্চার লিঙ্গ নির্ধারণ করে — বালি যত গরম, স্ত্রী বাচ্চা তত বেশি।',
    },
    range: {
      native: [
        [20.62, 92.32],
        [-11.6, 144.0],
        [10.55, -83.5],
        [-7.95, -14.35],
        [22.5, 59.8],
        [5.0, 118.5],
        [21.3, -157.8],
        [-25.5, 40.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'increasing',
      threats: {
        en: ['Harvest of eggs and adults for food', 'Bycatch in fishing nets', 'Loss of nesting beaches to coastal development and lighting', 'Plastic pollution and climate change'],
        bn: ['খাবারের জন্য ডিম ও কচ্ছপ সংগ্রহ', 'মাছ ধরার জালে আটকা পড়া', 'উপকূলীয় স্থাপনা ও আলোর কারণে ডিম পাড়ার সৈকত হারানো', 'প্লাস্টিক দূষণ ও জলবায়ু পরিবর্তন'],
      },
      initiatives: {
        en: ['Listed in CITES Appendix I', 'Turtle hatcheries and beach patrols on Saint Martin’s Island and the Teknaf coast', 'Turtle excluder devices on trawl nets', 'Saint Martin’s Island Marine Protected Area'],
        bn: ['সাইটিস (CITES) পরিশিষ্ট-১ তালিকাভুক্ত', 'সেন্ট মার্টিন ও টেকনাফ উপকূলে কচ্ছপের হ্যাচারি ও সৈকত পাহারা', 'ট্রলারের জালে কচ্ছপ বের হওয়ার যন্ত্র (TED) ব্যবহার', 'সেন্ট মার্টিন দ্বীপ সামুদ্রিক সংরক্ষিত এলাকা'],
      },
      assessed: '2025',
    },
    facts: {
      en: [
        'Some green turtles migrate more than 2,000 km between feeding and nesting grounds.',
        'Unlike most sea turtles, adults are almost entirely vegetarian.',
        'Hatchlings find the sea by heading towards the brightest horizon, which is why beach lights confuse them.',
      ],
      bn: [
        'কিছু সবুজ কচ্ছপ খাদ্য সংগ্রহ ও ডিম পাড়ার জায়গার মধ্যে ২,০০০ কিলোমিটারেরও বেশি পথ পাড়ি দেয়।',
        'বেশির ভাগ সামুদ্রিক কচ্ছপের উল্টো, প্রাপ্তবয়স্ক সবুজ কচ্ছপ প্রায় সম্পূর্ণ নিরামিষভোজী।',
        'বাচ্চারা দিগন্তের সবচেয়ে উজ্জ্বল দিক লক্ষ্য করে সাগরে যায়, তাই সৈকতের কৃত্রিম আলো ওদের পথ ভুলিয়ে দেয়।',
      ],
    },
    related: ['staghorn-coral', 'whale-shark', 'blue-whale', 'common-octopus'],
  },
  {
    id: 'komodo-dragon',
    commonName: { en: 'Komodo Dragon', bn: 'কমোডো ড্রাগন' },
    scientificName: 'Varanus komodoensis',
    altNames: {
      en: ['Komodo Monitor', 'Ora', 'Giant Monitor Lizard'],
      bn: ['কোমোডো ড্রাগন', 'কমোডো গুইসাপ', 'দানব গুইসাপ'],
    },
    category: 'reptiles',
    wikiTitle: 'Komodo dragon',
    description: {
      en: 'The Komodo dragon is the largest living lizard — a giant monitor lizard, a close relative of the monitor lizards (guisap) seen in Bangladesh. It lives only on a few islands in Indonesia, where it is the top predator, ambushing deer, wild pigs and even water buffalo. Its bite delivers venom that lowers blood pressure and stops blood from clotting, so wounded prey quickly weakens.',
      bn: 'কমোডো ড্রাগন পৃথিবীর বৃহত্তম জীবিত টিকটিকিজাতীয় প্রাণী — আসলে এটি এক বিশাল গুইসাপ, বাংলাদেশের গুইসাপের নিকটাত্মীয়। কেবল ইন্দোনেশিয়ার কয়েকটি দ্বীপে এদের বাস, আর সেখানে এরাই শীর্ষ শিকারি। ওত পেতে থেকে হরিণ, বুনো শূকর, এমনকি মহিষও শিকার করে। এদের কামড়ে থাকা বিষ রক্তচাপ কমিয়ে দেয় ও রক্ত জমাট বাঁধতে দেয় না, ফলে আহত শিকার দ্রুত দুর্বল হয়ে পড়ে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Varanidae',
      genus: 'Varanus',
      species: 'V. komodoensis',
    },
    physical: {
      size: {
        en: 'Up to about 3 m long; males larger than females',
        bn: 'প্রায় ৩ মিটার পর্যন্ত লম্বা; পুরুষ স্ত্রীর চেয়ে বড়',
      },
      weight: {
        en: 'Adults commonly 70 kg; large males up to about 90 kg',
        bn: 'প্রাপ্তবয়স্ক সাধারণত ৭০ কেজি; বড় পুরুষ প্রায় ৯০ কেজি পর্যন্ত',
      },
      lifespan: {
        en: 'About 30 years in the wild',
        bn: 'বনে প্রায় ৩০ বছর',
      },
      features: {
        en: [
          'Heavy, armoured body with tough scales reinforced by small bones (osteoderms)',
          'Long, yellow forked tongue used to "smell" carrion several kilometres away',
          'Serrated, shark-like teeth and a strong muscular tail',
        ],
        bn: [
          'ভারী দেহ, চামড়ার নিচে ছোট ছোট হাড়ের (অস্টিওডার্ম) বর্মে মজবুত আঁশ',
          'লম্বা হলুদ চেরা জিভ, যা দিয়ে কয়েক কিলোমিটার দূরের মৃতদেহের গন্ধ পায়',
          'হাঙরের মতো করাতদাঁতি দাঁত এবং শক্তিশালী পেশিবহুল লেজ',
        ],
      },
    },
    habitat: {
      en: 'Dry tropical savanna, open grassland and monsoon forest on volcanic islands, from beaches to ridge tops',
      bn: 'আগ্নেয় দ্বীপের শুষ্ক ক্রান্তীয় সাভানা, খোলা তৃণভূমি ও মৌসুমি বন — সৈকত থেকে পাহাড়ের চূড়া পর্যন্ত',
    },
    habitats: ['grassland', 'tropical-forest'],
    regions: ['southeast-asia'],
    distribution: {
      en: 'Only on the Indonesian islands of Komodo, Rinca, Gili Motang, Nusa Kode and parts of western and northern Flores.',
      bn: 'কেবল ইন্দোনেশিয়ার কমোডো, রিনচা, গিলি মোতাং, নুসা কোদে দ্বীপে এবং ফ্লোরেস দ্বীপের পশ্চিম ও উত্তরাংশে পাওয়া যায়।',
    },
    climate: {
      en: 'Hot, dry tropical climate with a short wet season',
      bn: 'গরম ও শুষ্ক ক্রান্তীয় জলবায়ু, স্বল্পস্থায়ী বর্ষাকাল',
    },
    diet: {
      en: 'Carnivore — Timor deer, wild pigs, water buffalo, smaller lizards and lots of carrion; young dragons eat insects, geckos and birds',
      bn: 'মাংসাশী — তিমুর হরিণ, বুনো শূকর, মহিষ, ছোট টিকটিকি এবং প্রচুর মরা প্রাণী; বাচ্চারা পোকামাকড়, টিকটিকি ও পাখি খায়',
    },
    ecologicalRole: {
      en: 'As the islands’ apex predator and main scavenger, it controls deer and pig numbers and quickly cleans up carcasses.',
      bn: 'দ্বীপগুলোর শীর্ষ শিকারি ও প্রধান মৃতভোজী হিসেবে এরা হরিণ ও শূকরের সংখ্যা নিয়ন্ত্রণ করে এবং দ্রুত মৃতদেহ পরিষ্কার করে।',
    },
    behavior: {
      en: 'Mostly solitary, gathering only at large carcasses. Young dragons live in trees to escape cannibalistic adults. Females can reproduce without males (parthenogenesis).',
      bn: 'সাধারণত একাকী, কেবল বড় মৃতদেহ ঘিরে একসঙ্গে জড়ো হয়। প্রাপ্তবয়স্করা স্বজাতি খেয়ে ফেলে বলে বাচ্চারা গাছে থাকে। পুরুষের সংস্পর্শ ছাড়াই স্ত্রী কমোডো ডিম পেড়ে বাচ্চা জন্ম দিতে পারে (পার্থেনোজেনেসিস)।',
    },
    range: {
      native: [
        [-8.55, 119.45],
        [-8.65, 119.72],
        [-8.48, 119.93],
        [-8.42, 121.0],
        [-8.7, 119.9],
        [-8.48, 120.4],
      ],
      endemicTo: { en: 'Lesser Sunda Islands, Indonesia', bn: 'লেসার সুন্দা দ্বীপপুঞ্জ, ইন্দোনেশিয়া' },
    },
    conservation: {
      status: 'EN',
      trend: 'stable',
      population: {
        en: 'About 1,380 mature individuals (IUCN, 2019)',
        bn: 'প্রায় ১,৩৮০টি প্রাপ্তবয়স্ক কমোডো (আইইউসিএন, ২০১৯)',
      },
      threats: {
        en: ['Sea-level rise from climate change, which could shrink its habitat by 30% or more', 'Poaching of its prey (deer and pigs)', 'Habitat loss and fires on Flores', 'Small, isolated populations'],
        bn: ['জলবায়ু পরিবর্তনে সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি, যাতে আবাসস্থল ৩০ শতাংশ বা তারও বেশি কমে যেতে পারে', 'এদের শিকার হরিণ ও শূকর চোরাশিকার', 'ফ্লোরেসে আবাসস্থল ধ্বংস ও অগ্নিকাণ্ড', 'ছোট ও বিচ্ছিন্ন জনগোষ্ঠী'],
      },
      initiatives: {
        en: ['Komodo National Park (UNESCO World Heritage Site since 1991)', 'Listed in CITES Appendix I', 'Nature reserves on Flores', 'Zoo breeding programmes worldwide'],
        bn: ['কমোডো জাতীয় উদ্যান (১৯৯১ সাল থেকে ইউনেস্কো বিশ্ব ঐতিহ্য)', 'সাইটিস (CITES) পরিশিষ্ট-১ তালিকাভুক্ত', 'ফ্লোরেস দ্বীপে প্রকৃতি সংরক্ষিত এলাকা', 'বিশ্বজুড়ে চিড়িয়াখানায় প্রজনন কর্মসূচি'],
      },
      assessed: '2019',
    },
    facts: {
      en: [
        'It can eat up to 80% of its own body weight in a single meal.',
        'Western science only learned of it in 1910.',
        'Its teeth are tipped with iron, which helps keep their cutting edges hard.',
      ],
      bn: [
        'এক বেলায় নিজের দেহের ওজনের ৮০ শতাংশ পর্যন্ত খাবার খেয়ে ফেলতে পারে।',
        'পশ্চিমা বিজ্ঞানীরা এর কথা প্রথম জানতে পারেন ১৯১০ সালে।',
        'এদের দাঁতের ডগায় লোহার আবরণ থাকে, যা দাঁতের ধার শক্ত রাখে।',
      ],
    },
    related: ['king-cobra', 'gharial', 'green-sea-turtle'],
  },
];
