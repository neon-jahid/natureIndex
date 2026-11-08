import type { Species } from '@/types';

export const amphibians: Species[] = [
  {
    id: 'indian-bullfrog',
    commonName: { en: 'Indian Bullfrog', bn: 'সোনা ব্যাঙ' },
    scientificName: 'Hoplobatrachus tigerinus',
    altNames: {
      en: ['Asian Bullfrog', 'Tiger Frog', 'Indus Valley Bullfrog'],
      bn: ['কোলা ব্যাঙ', 'সোনাব্যাঙ', 'হলুদ ব্যাঙ'],
    },
    synonyms: ['Rana tigerina'],
    category: 'amphibians',
    wikiTitle: 'Hoplobatrachus tigerinus',
    description: {
      en: 'The Indian bullfrog is the largest frog of Bangladesh and a familiar sound of the monsoon. For most of the year it is olive-green to brown with dark spots, but at the start of the rains breeding males turn a brilliant yellow and inflate bright blue vocal sacs while calling loudly from flooded fields and ponds. In the 1970s–80s millions were caught in Bangladesh and India for the frog-leg export trade, which was later banned.',
      bn: 'সোনা ব্যাঙ বাংলাদেশের সবচেয়ে বড় ব্যাঙ, আর বর্ষার ডাকের সঙ্গে এর পরিচয় সবারই আছে। বছরের বেশির ভাগ সময় এর গায়ের রং জলপাই-সবুজ থেকে বাদামি, তাতে কালচে ছোপ থাকে। কিন্তু বর্ষা শুরু হলে প্রজননক্ষম পুরুষ ব্যাঙ উজ্জ্বল হলুদ হয়ে যায় এবং গলার দুপাশের নীল স্বরথলি ফুলিয়ে পানিতে ডোবা জমি ও পুকুর থেকে জোরে জোরে ডাকে। ১৯৭০–৮০-এর দশকে ব্যাঙের পা রপ্তানির জন্য বাংলাদেশ ও ভারত থেকে লাখ লাখ সোনা ব্যাঙ ধরা হতো; পরে এই বাণিজ্য নিষিদ্ধ করা হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Amphibia',
      order: 'Anura',
      family: 'Dicroglossidae',
      genus: 'Hoplobatrachus',
      species: 'H. tigerinus',
    },
    physical: {
      size: {
        en: 'Snout–vent length up to about 17 cm',
        bn: 'নাক থেকে পায়ু পর্যন্ত প্রায় ১৭ সেমি পর্যন্ত লম্বা',
      },
      weight: {
        en: 'Large adults about 500–600 g',
        bn: 'বড় প্রাপ্তবয়স্ক ব্যাঙ প্রায় ৫০০–৬০০ গ্রাম',
      },
      lifespan: {
        en: 'About 5–8 years',
        bn: 'প্রায় ৫–৮ বছর',
      },
      features: {
        en: [
          'Olive to brown skin with dark spots and a pale stripe down the middle of the back',
          'Breeding males turn bright yellow with blue vocal sacs',
          'Powerful hind legs with fully webbed toes',
        ],
        bn: [
          'জলপাই থেকে বাদামি চামড়ায় কালচে ছোপ এবং পিঠের মাঝ বরাবর একটি হালকা রঙের রেখা',
          'প্রজনন মৌসুমে পুরুষ ব্যাঙ উজ্জ্বল হলুদ হয়, গলার স্বরথলি হয় নীল',
          'শক্তিশালী পেছনের পা, আঙুলগুলো পুরোপুরি পর্দায় জোড়া',
        ],
      },
    },
    habitat: {
      en: 'Ponds, ditches, marshes, rice paddies and other freshwater wetlands, including near villages',
      bn: 'পুকুর, ডোবা, জলাভূমি, ধানক্ষেত ও অন্যান্য মিঠাপানির জলাশয়, গ্রামের আশপাশেও',
    },
    habitats: ['wetland', 'rivers-lakes', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Widespread across Bangladesh, India, Nepal, Pakistan, Sri Lanka, Bhutan, Afghanistan and Myanmar. Introduced to the Andaman Islands and Madagascar.',
      bn: 'বাংলাদেশ, ভারত, নেপাল, পাকিস্তান, শ্রীলঙ্কা, ভুটান, আফগানিস্তান ও মিয়ানমারজুড়ে বিস্তৃত। আন্দামান দ্বীপপুঞ্জ ও মাদাগাস্কারে মানুষের মাধ্যমে প্রবর্তিত হয়েছে।',
    },
    climate: {
      en: 'Tropical and subtropical monsoon climates',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Insects, worms, snails, small fish, other frogs, small snakes and even mice and small birds',
      bn: 'পোকামাকড়, কেঁচো, শামুক, ছোট মাছ, অন্য ব্যাঙ, ছোট সাপ, এমনকি ইঁদুর ও ছোট পাখিও খায়',
    },
    ecologicalRole: {
      en: 'Eats huge numbers of crop pests and mosquitoes in rice fields, and is itself food for snakes, herons, otters and fishing cats.',
      bn: 'ধানক্ষেতের ক্ষতিকর পোকা ও মশা বিপুল পরিমাণে খেয়ে কৃষকের উপকার করে; আবার নিজে সাপ, বক, ভোঁদড় ও মেছোবাঘের খাদ্য।',
    },
    behavior: {
      en: 'Mostly nocturnal. Spends the dry season buried in mud or hiding in holes, emerging with the first heavy rains to breed in noisy choruses. Can leap more than a metre to escape danger.',
      bn: 'মূলত নিশাচর। শুষ্ক মৌসুম কাদার নিচে বা গর্তে লুকিয়ে কাটায়; প্রথম ভারী বৃষ্টির সঙ্গে বেরিয়ে এসে দলবেঁধে হইচই করে ডাকে ও প্রজনন করে। বিপদ দেখলে এক মিটারেরও বেশি দূরে লাফ দিতে পারে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [24.9, 91.9],
        [22.8, 89.5],
        [26.8, 80.9],
        [19.1, 72.9],
        [27.7, 85.3],
        [30.2, 71.5],
        [7.9, 80.8],
      ],
      introduced: [
        [11.6, 92.7],
        [-18.9, 47.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Past mass harvest for the frog-leg trade', 'Pesticide and fertiliser use in rice fields', 'Draining and filling of wetlands', 'Local collection for food'],
        bn: ['অতীতে ব্যাঙের পা রপ্তানির জন্য ব্যাপক হারে ধরা', 'ধানক্ষেতে কীটনাশক ও রাসায়নিক সারের ব্যবহার', 'জলাভূমি ভরাট ও শুকিয়ে ফেলা', 'খাবারের জন্য স্থানীয়ভাবে ধরা'],
      },
      initiatives: {
        en: ['Frog-leg export ban in India (1987) and Bangladesh (late 1980s)', 'Listed in CITES Appendix II (1985)', 'Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012'],
        bn: ['ভারত (১৯৮৭) ও বাংলাদেশে (১৯৮০-এর দশকের শেষে) ব্যাঙের পা রপ্তানি নিষিদ্ধ', 'সাইটিস (CITES) পরিশিষ্ট-২ তালিকাভুক্ত (১৯৮৫)', 'বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন ২০১২ অনুযায়ী সংরক্ষিত'],
      },
    },
    facts: {
      en: [
        'Breeding males change colour from dull olive to bright yellow within days of the first monsoon rains.',
        'The decline of frogs after the export boom was followed by more crop pests and higher pesticide use.',
        'Its tadpoles are carnivorous and may eat other tadpoles.',
      ],
      bn: [
        'বর্ষার প্রথম বৃষ্টির কয়েক দিনের মধ্যেই পুরুষ ব্যাঙ ম্লান জলপাই রং বদলে উজ্জ্বল হলুদ হয়ে যায়।',
        'রপ্তানির জন্য ব্যাপক হারে ব্যাঙ ধরার পর ক্ষেতে পোকার আক্রমণ ও কীটনাশকের ব্যবহার দুটোই বেড়ে গিয়েছিল।',
        'এদের ব্যাঙাচি মাংসাশী, অন্য ব্যাঙাচিও খেয়ে ফেলে।',
      ],
    },
    related: ['golden-poison-frog', 'fishing-cat', 'king-cobra'],
  },
  {
    id: 'axolotl',
    commonName: { en: 'Axolotl', bn: 'অ্যাক্সোলোটল' },
    scientificName: 'Ambystoma mexicanum',
    altNames: {
      en: ['Mexican Walking Fish', 'Mexican Salamander', 'Ajolote'],
      bn: ['অ্যাক্সোলটল', 'মেক্সিকান হাঁটা মাছ', 'মেক্সিকান স্যালাম্যান্ডার'],
    },
    synonyms: ['Siredon mexicanum'],
    category: 'amphibians',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Axolotl',
    description: {
      en: 'The axolotl is a salamander that never grows up: it keeps its feathery external gills and fin-like tail and lives its whole life underwater, a condition called neoteny. It is famous for its extraordinary ability to regrow lost limbs, parts of its heart, spinal cord and even brain, which makes it a key animal in medical research. Though millions live in labs and aquariums, in the wild it survives only in the shrinking canals of Lake Xochimilco in Mexico City.',
      bn: 'অ্যাক্সোলোটল এমন এক স্যালাম্যান্ডার যে কখনো পুরোপুরি বড় হয় না — সারা জীবন পালকের মতো বাইরের ফুলকা ও পাখনার মতো লেজ নিয়ে পানির নিচেই কাটায়। এই অবস্থাকে বলে নিওটেনি। হারানো পা, হৃৎপিণ্ডের অংশ, মেরুরজ্জু, এমনকি মস্তিষ্কের অংশও নতুন করে গজানোর অসাধারণ ক্ষমতার জন্য এটি চিকিৎসা-গবেষণায় অত্যন্ত গুরুত্বপূর্ণ প্রাণী। গবেষণাগার ও অ্যাকুরিয়ামে লাখ লাখ অ্যাক্সোলোটল থাকলেও প্রকৃতিতে এরা টিকে আছে কেবল মেক্সিকো সিটির সোচিমিলকো হ্রদের ক্রমশ সংকুচিত খালগুলোতে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Amphibia',
      order: 'Urodela',
      family: 'Ambystomatidae',
      genus: 'Ambystoma',
      species: 'A. mexicanum',
    },
    physical: {
      size: {
        en: 'Usually 15–30 cm long',
        bn: 'সাধারণত ১৫–৩০ সেমি লম্বা',
      },
      weight: {
        en: 'About 60–230 g',
        bn: 'প্রায় ৬০–২৩০ গ্রাম',
      },
      lifespan: {
        en: '10–15 years in captivity; shorter in the wild',
        bn: 'আবদ্ধ অবস্থায় ১০–১৫ বছর; প্রকৃতিতে আরও কম',
      },
      features: {
        en: [
          'Three pairs of feathery external gills on the sides of the head',
          'Wide head, tiny eyes and a permanent "smile"',
          'Wild axolotls are dark olive-brown; pink, white and golden forms are bred in captivity',
        ],
        bn: [
          'মাথার দুপাশে তিন জোড়া পালকের মতো বাইরের ফুলকা',
          'চওড়া মাথা, ছোট চোখ আর মুখে যেন সবসময় হাসি লেগে থাকে',
          'বন্য অ্যাক্সোলোটল গাঢ় জলপাই-বাদামি; গোলাপি, সাদা ও সোনালি রঙেরগুলো কৃত্রিমভাবে প্রজনন করা',
        ],
      },
    },
    habitat: {
      en: 'Cool, still freshwater lake and canal systems with dense aquatic vegetation',
      bn: 'ঠান্ডা, স্থির মিঠাপানির হ্রদ ও খাল, যেখানে প্রচুর জলজ উদ্ভিদ আছে',
    },
    habitats: ['rivers-lakes', 'wetland'],
    regions: ['north-america'],
    distribution: {
      en: 'Only in the canals and remnant wetlands of Lake Xochimilco in southern Mexico City; the population in nearby Lake Chalco is gone.',
      bn: 'কেবল দক্ষিণ মেক্সিকো সিটির সোচিমিলকো হ্রদের খাল ও অবশিষ্ট জলাভূমিতে; কাছের চালকো হ্রদের জনগোষ্ঠী আর নেই।',
    },
    climate: {
      en: 'Mild highland climate at about 2,240 m elevation; water usually 15–20 °C',
      bn: 'প্রায় ২,২৪০ মিটার উচ্চতার মৃদু উঁচুভূমির জলবায়ু; পানির তাপমাত্রা সাধারণত ১৫–২০ ডিগ্রি সেলসিয়াস',
    },
    diet: {
      en: 'Carnivore — worms, insect larvae, small crustaceans, snails and small fish, sucked in with a quick gulp',
      bn: 'মাংসাশী — কেঁচো, পোকার লার্ভা, ছোট চিংড়িজাতীয় প্রাণী, শামুক ও ছোট মাছ; দ্রুত মুখ খুলে টেনে গিলে ফেলে',
    },
    ecologicalRole: {
      en: 'A predator of small invertebrates in the Xochimilco canals and an indicator of the health of this ancient wetland and its chinampa farms.',
      bn: 'সোচিমিলকোর খালে ছোট অমেরুদণ্ডী প্রাণীর শিকারি; এই প্রাচীন জলাভূমি ও এর ভাসমান "চিনাম্পা" খেতগুলোর স্বাস্থ্যের নির্দেশক।',
    },
    behavior: {
      en: 'Solitary and mostly active at night, resting on the bottom among plants by day. It can also gulp air at the surface to use its simple lungs.',
      bn: 'একাকী এবং মূলত রাতে সক্রিয়; দিনের বেলা তলদেশে জলজ উদ্ভিদের মাঝে বিশ্রাম নেয়। প্রয়োজনে পানির ওপরে উঠে বাতাস গিলে সাধারণ ফুসফুসও ব্যবহার করে।',
    },
    range: {
      native: [
        [19.27, -99.1],
        [19.26, -99.08],
        [19.28, -99.06],
        [19.25, -99.11],
      ],
      endemicTo: { en: 'Lake Xochimilco, Mexico City, Mexico', bn: 'সোচিমিলকো হ্রদ, মেক্সিকো সিটি, মেক্সিকো' },
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      threats: {
        en: ['Water pollution and urban sprawl around Mexico City', 'Introduced carp and tilapia that eat eggs and young', 'Draining of canals and lowering water tables', 'Capture for food and the pet trade'],
        bn: ['মেক্সিকো সিটির নগরায়ণ ও পানিদূষণ', 'বাইরে থেকে আনা কার্প ও তেলাপিয়া মাছ, যারা ডিম ও বাচ্চা খেয়ে ফেলে', 'খাল শুকিয়ে যাওয়া ও ভূগর্ভস্থ পানির স্তর নেমে যাওয়া', 'খাবার ও পোষা প্রাণী হিসেবে ধরা'],
      },
      initiatives: {
        en: ['"Chinampa refuge" programme with traditional farmers in Xochimilco', 'Listed in CITES Appendix II', 'Captive breeding at the Anfibium axolotl museum and research centres', 'Xochimilco is a UNESCO World Heritage Site'],
        bn: ['সোচিমিলকোর ঐতিহ্যবাহী কৃষকদের সঙ্গে "চিনাম্পা আশ্রয়স্থল" কর্মসূচি', 'সাইটিস (CITES) পরিশিষ্ট-২ তালিকাভুক্ত', 'আনফিবিয়াম অ্যাক্সোলোটল জাদুঘর ও গবেষণাকেন্দ্রে কৃত্রিম প্রজনন', 'সোচিমিলকো ইউনেস্কো বিশ্ব ঐতিহ্যের অংশ'],
      },
      assessed: '2019',
    },
    facts: {
      en: [
        'An axolotl can regrow a lost leg perfectly, bones and all, many times over.',
        'Its genome is about ten times larger than the human genome.',
        'The name comes from the Aztec language Nahuatl and is linked to Xolotl, a god of fire and lightning.',
      ],
      bn: [
        'হারানো পা হাড়সহ নিখুঁতভাবে বারবার নতুন করে গজাতে পারে।',
        'এর জিনোম মানুষের জিনোমের চেয়ে প্রায় ১০ গুণ বড়।',
        'নামটি অ্যাজটেকদের নাহুয়াতল ভাষা থেকে এসেছে, আগুন ও বজ্রের দেবতা শোলোটলের সঙ্গে যুক্ত।',
      ],
    },
    related: ['chinese-giant-salamander', 'golden-poison-frog', 'indian-bullfrog'],
  },
  {
    id: 'golden-poison-frog',
    commonName: { en: 'Golden Poison Frog', bn: 'সোনালি বিষ ব্যাঙ' },
    scientificName: 'Phyllobates terribilis',
    altNames: {
      en: ['Golden Dart Frog', 'Golden Poison Dart Frog', 'Poison Dart Frog'],
      bn: ['সোনালি বিষাক্ত ব্যাঙ', 'বিষতির ব্যাঙ', 'পয়জন ডার্ট ফ্রগ'],
    },
    category: 'amphibians',
    wikiTitle: 'Golden poison frog',
    description: {
      en: 'Barely the size of a thumb, the golden poison frog is one of the most poisonous animals on Earth. Its skin carries batrachotoxin, and a single wild frog holds enough to kill about ten adult people. The Emberá people of Colombia have long wiped their blowgun darts on its back for hunting. Its bright yellow, orange or mint-green colour is a warning to predators. Captive-bred frogs are harmless, because the toxin comes from insects in its natural diet.',
      bn: 'আকারে মাত্র বুড়ো আঙুলের সমান হলেও সোনালি বিষ ব্যাঙ পৃথিবীর সবচেয়ে বিষাক্ত প্রাণীদের একটি। এর চামড়ায় থাকে ব্যাট্রাকোটক্সিন নামের বিষ; একটি বন্য ব্যাঙের বিষে প্রায় ১০ জন প্রাপ্তবয়স্ক মানুষের মৃত্যু হতে পারে। কলম্বিয়ার এম্বেরা জনগোষ্ঠী শিকারের জন্য তাদের ফুঁ-নলের তীর এই ব্যাঙের পিঠে ঘষে বিষাক্ত করত। এর উজ্জ্বল হলুদ, কমলা বা পুদিনা-সবুজ রং শিকারিদের জন্য সতর্কসংকেত। খাঁচায় জন্মানো ব্যাঙ নির্বিষ, কারণ বিষটি আসে প্রকৃতিতে খাওয়া পোকামাকড় থেকে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Amphibia',
      order: 'Anura',
      family: 'Dendrobatidae',
      genus: 'Phyllobates',
      species: 'P. terribilis',
    },
    physical: {
      size: {
        en: 'About 4.5–5.5 cm long',
        bn: 'প্রায় ৪.৫–৫.৫ সেমি লম্বা',
      },
      weight: {
        en: 'About 30 g',
        bn: 'প্রায় ৩০ গ্রাম',
      },
      lifespan: {
        en: 'About 5 years in the wild; 10 years or more in captivity',
        bn: 'প্রকৃতিতে প্রায় ৫ বছর; আবদ্ধ অবস্থায় ১০ বছর বা তারও বেশি',
      },
      features: {
        en: [
          'Solid bright yellow, orange or pale mint-green colour',
          'Small adhesive pads on the toes for climbing',
          'Skin glands packed with batrachotoxin',
        ],
        bn: [
          'গাঢ় উজ্জ্বল হলুদ, কমলা বা হালকা পুদিনা-সবুজ একরঙা দেহ',
          'বেয়ে ওঠার জন্য পায়ের আঙুলের ডগায় ছোট আঠালো প্যাড',
          'চামড়ার গ্রন্থিতে ব্যাট্রাকোটক্সিন বিষে ভরা',
        ],
      },
    },
    habitat: {
      en: 'Floor of lowland tropical rainforest with very high rainfall, near streams',
      bn: 'অতিবৃষ্টিপ্রবণ নিম্নভূমির ক্রান্তীয় রেইনফরেস্টের মেঝে, ছড়া বা ঝরনার কাছে',
    },
    habitats: ['tropical-forest'],
    regions: ['south-america'],
    distribution: {
      en: 'A small area of the Pacific coast rainforest of Colombia, mainly in the Cauca department.',
      bn: 'কলম্বিয়ার প্রশান্ত মহাসাগরীয় উপকূলের রেইনফরেস্টের ছোট্ট একটি এলাকায়, প্রধানত কাউকা প্রদেশে।',
    },
    climate: {
      en: 'Hot, extremely wet tropical climate, over 5,000 mm of rain a year',
      bn: 'গরম ও অত্যন্ত ভেজা ক্রান্তীয় জলবায়ু; বছরে ৫,০০০ মিলিমিটারের বেশি বৃষ্টিপাত',
    },
    diet: {
      en: 'Ants, termites, beetles and other small insects caught with a sticky tongue',
      bn: 'আঠালো জিভ দিয়ে ধরা পিঁপড়া, উইপোকা, গুবরে পোকা ও অন্যান্য ছোট পোকামাকড়',
    },
    ecologicalRole: {
      en: 'Controls ants and other small insects on the forest floor; its toxins are studied as models for powerful painkillers and heart drugs.',
      bn: 'বনের মেঝেতে পিঁপড়া ও ছোট পোকার সংখ্যা নিয়ন্ত্রণ করে; এর বিষ নিয়ে শক্তিশালী ব্যথানাশক ও হৃদ্‌রোগের ওষুধ তৈরির গবেষণা চলছে।',
    },
    behavior: {
      en: 'Active by day and bold, since few predators can eat it. Lives in small groups. Males carry newly hatched tadpoles on their backs to small pools of water.',
      bn: 'দিনের বেলা সক্রিয় এবং বেশ সাহসী, কারণ খুব কম শিকারিই একে খেতে পারে। ছোট দলে থাকে। ডিম ফুটলে পুরুষ ব্যাঙ ব্যাঙাচিগুলোকে পিঠে করে ছোট ছোট পানির গর্তে পৌঁছে দেয়।',
    },
    range: {
      native: [
        [2.75, -77.45],
        [2.6, -77.6],
        [2.9, -77.3],
        [2.45, -77.55],
      ],
      endemicTo: { en: 'Pacific coast of Colombia (Cauca)', bn: 'কলম্বিয়ার প্রশান্ত মহাসাগরীয় উপকূল (কাউকা)' },
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Deforestation for farming, logging and coca crops', 'Illegal gold mining polluting streams', 'Very small range', 'Illegal collection for the pet trade'],
        bn: ['কৃষি, কাঠ আহরণ ও কোকা চাষের জন্য বন উজাড়', 'অবৈধ সোনার খনির কারণে ছড়ার পানিদূষণ', 'অত্যন্ত ছোট বিচরণ এলাকা', 'পোষা প্রাণী হিসেবে অবৈধ সংগ্রহ'],
      },
      initiatives: {
        en: ['Listed in CITES Appendix II', 'Rana Terribilis reserve in Colombia', 'Captive breeding in zoos and by hobbyists, reducing demand for wild frogs'],
        bn: ['সাইটিস (CITES) পরিশিষ্ট-২ তালিকাভুক্ত', 'কলম্বিয়ায় "রানা তেরিবিলিস" সংরক্ষিত এলাকা', 'চিড়িয়াখানা ও শখের পালনকারীদের কৃত্রিম প্রজনন, যাতে বন্য ব্যাঙের চাহিদা কমে'],
      },
    },
    facts: {
      en: [
        'A single wild frog carries roughly one milligram of poison — enough to kill about ten people.',
        'Its scientific name terribilis means "terrible" or "dreadful".',
        'Only one snake, Erythrolamprus epinephelus, is known to tolerate its poison.',
      ],
      bn: [
        'একটি বন্য ব্যাঙে প্রায় ১ মিলিগ্রাম বিষ থাকে — যা প্রায় ১০ জন মানুষকে মারার জন্য যথেষ্ট।',
        'এর বৈজ্ঞানিক নামের terribilis অংশের অর্থ "ভয়ংকর"।',
        'কেবল একটি সাপ (Erythrolamprus epinephelus) এর বিষ সহ্য করতে পারে বলে জানা যায়।',
      ],
    },
    related: ['indian-bullfrog', 'axolotl', 'zombie-ant-fungus'],
  },
  {
    id: 'chinese-giant-salamander',
    commonName: { en: 'Chinese Giant Salamander', bn: 'চীনা দানব স্যালাম্যান্ডার' },
    scientificName: 'Andrias davidianus',
    altNames: {
      en: ['Giant Salamander', 'Baby Fish (wawa yu)'],
      bn: ['চীনা বিশাল স্যালাম্যান্ডার', 'দানব স্যালাম্যান্ডার'],
    },
    synonyms: ['Megalobatrachus davidianus', 'Sieboldia davidiana'],
    category: 'amphibians',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Chinese giant salamander',
    description: {
      en: 'The Chinese giant salamander is one of the largest amphibians in the world, a living fossil whose lineage dates back to the age of dinosaurs. Flat, wrinkly and brown, it lurks under rocks in cold mountain streams and breathes mostly through its skin. Its cry sounds like a crying baby, giving it the Chinese name "wawa yu" (baby fish). Though millions are farmed for food, wild populations have almost vanished, and recent genetic studies show it is actually several distinct species.',
      bn: 'চীনা দানব স্যালাম্যান্ডার পৃথিবীর সবচেয়ে বড় উভচর প্রাণীদের একটি — এক জীবন্ত জীবাশ্ম, যার বংশধারা ডাইনোসর যুগ পর্যন্ত বিস্তৃত। চ্যাপ্টা, কোঁচকানো, বাদামি রঙের এই প্রাণী পাহাড়ি ঠান্ডা ঝরনার পাথরের নিচে লুকিয়ে থাকে এবং প্রধানত চামড়া দিয়ে শ্বাস নেয়। এর ডাক শিশুর কান্নার মতো শোনায়, তাই চীনা ভাষায় একে বলে "ওয়াওয়া ইউ" বা শিশু-মাছ। খাদ্যের জন্য খামারে লাখ লাখ চাষ হলেও প্রকৃতিতে এরা প্রায় হারিয়ে গেছে। সাম্প্রতিক জিনগত গবেষণায় দেখা গেছে, এটি আসলে কয়েকটি আলাদা প্রজাতির সমষ্টি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Amphibia',
      order: 'Urodela',
      family: 'Cryptobranchidae',
      genus: 'Andrias',
      species: 'A. davidianus',
    },
    physical: {
      size: {
        en: 'Commonly about 1.1 m long; historically up to 1.8 m',
        bn: 'সাধারণত প্রায় ১.১ মিটার লম্বা; অতীতে ১.৮ মিটার পর্যন্ত পাওয়া গেছে',
      },
      weight: {
        en: 'Usually 25–30 kg; exceptionally over 50 kg',
        bn: 'সাধারণত ২৫–৩০ কেজি; ব্যতিক্রমী ক্ষেত্রে ৫০ কেজিরও বেশি',
      },
      lifespan: {
        en: 'More than 50 years; up to about 60 years in captivity',
        bn: '৫০ বছরেরও বেশি; আবদ্ধ অবস্থায় প্রায় ৬০ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Broad, flat head with tiny lidless eyes',
          'Wrinkled skin folds along the body sides that increase the area for breathing',
          'Mottled brown-black colour that blends with stream rocks',
        ],
        bn: [
          'চওড়া চ্যাপ্টা মাথা, পাতাহীন ছোট ছোট চোখ',
          'দেহের দুপাশে কোঁচকানো চামড়ার ভাঁজ, যা শ্বাস নেওয়ার জায়গা বাড়ায়',
          'বাদামি-কালো ছোপ ছোপ রং, ঝরনার পাথরের সঙ্গে মিশে যায়',
        ],
      },
    },
    habitat: {
      en: 'Clear, cold, fast-flowing mountain streams and rivers with rocky beds and underwater caves',
      bn: 'স্বচ্ছ, ঠান্ডা ও খরস্রোতা পাহাড়ি ঝরনা ও নদী, যার তলদেশ পাথুরে এবং পানির নিচে গুহা আছে',
    },
    habitats: ['rivers-lakes', 'mountain'],
    regions: ['east-asia'],
    distribution: {
      en: 'Central, southern and south-western China, especially the Yangtze, Yellow River and Pearl River basins. Introduced Chinese giant salamanders also live in rivers around Kyoto, Japan, where they hybridise with the native Japanese giant salamander.',
      bn: 'মধ্য, দক্ষিণ ও দক্ষিণ-পশ্চিম চীন, বিশেষত ইয়াংসি, হোয়াংহো (পীত নদী) ও পার্ল নদীর অববাহিকা। জাপানের কিয়োটোর আশপাশের নদীতেও মানুষের মাধ্যমে প্রবর্তিত চীনা দানব স্যালাম্যান্ডার আছে, যারা স্থানীয় জাপানি দানব স্যালাম্যান্ডারের সঙ্গে সংকর তৈরি করছে।',
    },
    climate: {
      en: 'Temperate to subtropical; prefers water of about 10–20 °C',
      bn: 'নাতিশীতোষ্ণ থেকে উপক্রান্তীয়; প্রায় ১০–২০ ডিগ্রি সেলসিয়াস তাপমাত্রার পানি পছন্দ করে',
    },
    diet: {
      en: 'Fish, crabs, shrimp, frogs, worms and insects, caught with a sudden sideways snap',
      bn: 'মাছ, কাঁকড়া, চিংড়ি, ব্যাঙ, কেঁচো ও পোকামাকড়; হঠাৎ পাশ ফিরে কামড় দিয়ে শিকার ধরে',
    },
    ecologicalRole: {
      en: 'A top predator in mountain streams that regulates populations of crabs, fish and other aquatic animals.',
      bn: 'পাহাড়ি ঝরনার শীর্ষ শিকারি হিসেবে কাঁকড়া, মাছ ও অন্যান্য জলজ প্রাণীর সংখ্যা নিয়ন্ত্রণ করে।',
    },
    behavior: {
      en: 'Nocturnal and solitary, with very poor eyesight; it finds prey by sensing vibrations and smell. Males guard nests of eggs in riverbank burrows until they hatch.',
      bn: 'নিশাচর ও একাকী; দৃষ্টিশক্তি খুব দুর্বল, তাই পানির কম্পন ও গন্ধ টের পেয়ে শিকার খুঁজে পায়। পুরুষ স্যালাম্যান্ডার নদীতীরের গর্তে ডিম ফোটা পর্যন্ত পাহারা দেয়।',
    },
    range: {
      native: [
        [33.0, 107.5],
        [31.0, 110.3],
        [29.2, 109.4],
        [26.5, 107.5],
        [28.0, 116.5],
        [25.0, 113.0],
        [30.5, 103.5],
      ],
      introduced: [[35.1, 135.75]],
      endemicTo: { en: 'China', bn: 'চীন' },
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      threats: {
        en: ['Over-harvesting for luxury food and traditional medicine', 'Release of farmed animals that mix genetically different lineages', 'Dams, mining and stream pollution', 'Disease (ranavirus) in farms spreading to the wild'],
        bn: ['বিলাসী খাবার ও প্রথাগত ওষুধের জন্য অতিরিক্ত শিকার', 'খামারের প্রাণী প্রকৃতিতে ছেড়ে দেওয়ায় ভিন্ন ভিন্ন বংশধারার মিশ্রণ', 'বাঁধ, খনন ও ঝরনার পানিদূষণ', 'খামার থেকে প্রকৃতিতে রোগ (রানাভাইরাস) ছড়ানো'],
      },
      initiatives: {
        en: ['Listed in CITES Appendix I', 'Nationally protected in China, with more than 40 nature reserves', 'Genetic screening to guide restocking with local lineages', 'Field surveys by ZSL and Chinese partners'],
        bn: ['সাইটিস (CITES) পরিশিষ্ট-১ তালিকাভুক্ত', 'চীনে জাতীয়ভাবে সংরক্ষিত; ৪০টিরও বেশি প্রকৃতি সংরক্ষিত এলাকা', 'স্থানীয় বংশধারা ঠিক রেখে প্রকৃতিতে ছাড়ার জন্য জিনগত পরীক্ষা', 'জেডএসএল ও চীনা সহযোগীদের মাঠ জরিপ'],
      },
    },
    facts: {
      en: [
        'Its lineage separated from other salamanders around 170 million years ago.',
        'A 2018 nationwide survey found wild salamanders at only a handful of the sites searched.',
        'Its closest living relatives are the Japanese giant salamander and the North American hellbender.',
      ],
      bn: [
        'প্রায় ১৭ কোটি বছর আগে এর বংশধারা অন্য স্যালাম্যান্ডারদের থেকে আলাদা হয়ে যায়।',
        '২০১৮ সালের দেশব্যাপী জরিপে খোঁজা এলাকাগুলোর মধ্যে হাতে গোনা কয়েকটিতে মাত্র বন্য স্যালাম্যান্ডার পাওয়া গেছে।',
        'এর নিকটতম জীবিত আত্মীয় জাপানি দানব স্যালাম্যান্ডার ও উত্তর আমেরিকার হেলবেন্ডার।',
      ],
    },
    related: ['axolotl', 'giant-panda', 'indian-bullfrog'],
  },
];
