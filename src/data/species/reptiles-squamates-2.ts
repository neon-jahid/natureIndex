import type { Species } from '@/types';

export const reptilesSquamates2: Species[] = [
  {
    id: 'bengal-monitor',
    commonName: { en: 'Bengal Monitor', bn: 'গুইসাপ' },
    scientificName: 'Varanus bengalensis',
    altNames: {
      en: ['Common Indian Monitor', 'Indian Monitor Lizard'],
      bn: ['কালো গুইসাপ', 'গুই'],
    },
    category: 'reptiles',
    wikiTitle: 'Bengal monitor',
    description: {
      en: 'The Bengal monitor is the large lizard most Bangladeshis know simply as “gui shap”, though it is a lizard, not a snake. It roams villages, farmland and forests, digging out insects, eggs and small animals, and is completely non-venomous to people. It can bite, scratch and lash its tail if grabbed, so it should be left alone; it is legally protected and its skin and meat must not be traded.',
      bn: 'বাংলাদেশে সবাই যাকে “গুইসাপ” বলে চেনে, সেটি আসলে সাপ নয় — একটি বড় আকারের গিরগিটিজাতীয় সরীসৃপ। এরা গ্রাম, খেত-খামার ও বনে ঘুরে মাটি খুঁড়ে পোকামাকড়, ডিম ও ছোট প্রাণী খায় এবং মানুষের জন্য একেবারেই বিষহীন। তবে ধরতে গেলে কামড়, আঁচড় বা লেজের বাড়ি দিতে পারে, তাই একে বিরক্ত করা উচিত নয়; এরা আইনে সুরক্ষিত এবং এদের চামড়া ও মাংস কেনাবেচা নিষিদ্ধ।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Varanidae',
      genus: 'Varanus',
      species: 'V. bengalensis',
    },
    physical: {
      size: {
        en: '0.6–1.75 m long including the tail',
        bn: 'লেজসহ ০.৬–১.৭৫ মিটার লম্বা',
      },
      weight: {
        en: 'Usually 1–7 kg; large males heavier',
        bn: 'সাধারণত ১–৭ কেজি; বড় পুরুষ আরও ভারী',
      },
      lifespan: {
        en: 'Around 20 years',
        bn: 'প্রায় ২০ বছর',
      },
      features: {
        en: [
          'Grey-brown to olive skin, speckled in young animals',
          'Long forked tongue used for smelling',
          'Strong claws for digging and climbing trees',
        ],
        bn: [
          'ধূসর-বাদামি থেকে জলপাই রঙের চামড়া; বাচ্চাদের গায়ে ছিটছিটে দাগ',
          'গন্ধ নেওয়ার জন্য লম্বা চেরা জিভ',
          'মাটি খোঁড়া ও গাছে চড়ার জন্য শক্ত নখ',
        ],
      },
    },
    habitat: {
      en: 'Villages, farmland, bamboo groves, scrub and dry to moist forests',
      bn: 'গ্রাম, খেত-খামার, বাঁশঝাড়, ঝোপঝাড় এবং শুষ্ক থেকে আর্দ্র বন',
    },
    habitats: ['urban-farmland', 'tropical-forest', 'grassland'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Across South Asia from Iran and Pakistan through India, Nepal, Sri Lanka and Bangladesh to Myanmar and Thailand.',
      bn: 'ইরান ও পাকিস্তান থেকে ভারত, নেপাল, শ্রীলঙ্কা ও বাংলাদেশ হয়ে মিয়ানমার ও থাইল্যান্ড পর্যন্ত দক্ষিণ এশিয়াজুড়ে।',
    },
    climate: {
      en: 'Tropical and subtropical climates, from arid to humid',
      bn: 'শুষ্ক থেকে আর্দ্র — ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Carnivore and scavenger — beetles, grubs, snails, frogs, eggs, rodents and carrion',
      bn: 'মাংসাশী ও মৃতভোজী — গুবরে পোকা, শূককীট, শামুক, ব্যাঙ, ডিম, ইঁদুর ও মরা প্রাণী',
    },
    ecologicalRole: {
      en: 'Controls crop pests and rodents and cleans up carrion around villages.',
      bn: 'ফসলের ক্ষতিকর পোকা ও ইঁদুর নিয়ন্ত্রণ করে এবং গ্রামের আশেপাশের মরা প্রাণী পরিষ্কার করে।',
    },
    behavior: {
      en: 'Active by day, it shelters in burrows and tree hollows and usually runs away when it sees people.',
      bn: 'দিনে সক্রিয়; গর্ত ও গাছের কোটরে আশ্রয় নেয় এবং মানুষ দেখলে সাধারণত পালিয়ে যায়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [24.4, 88.6],
        [22.8, 89.5],
        [26.9, 75.8],
        [7.3, 80.6],
        [16.8, 96.2],
      ],
    },
    conservation: {
      status: 'NT',
      trend: 'unknown',
      threats: {
        en: ['Illegal hunting for skin, meat and “hatha jori” charms', 'Road deaths', 'Loss of village groves and hedgerows'],
        bn: ['চামড়া, মাংস ও তাবিজ-কবচের জন্য অবৈধ শিকার', 'সড়কে চাপা পড়া', 'গ্রামের বাগান ও ঝোপঝাড় কমে যাওয়া'],
      },
      initiatives: {
        en: ['Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012', 'Listed on CITES Appendix I, banning international commercial trade'],
        bn: ['বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর আওতায় সুরক্ষিত', 'সাইটিস পরিশিষ্ট-১-এ তালিকাভুক্ত, ফলে আন্তর্জাতিক বাণিজ্য নিষিদ্ধ'],
      },
    },
    facts: {
      en: [
        'Despite the name “gui shap”, it is not a snake and is not venomous.',
        'Monitors are among the most intelligent lizards and can be taught to count small numbers in experiments.',
      ],
      bn: [
        'নামে “সাপ” থাকলেও গুইসাপ আসলে সাপ নয় এবং বিষধরও নয়।',
        'গুইসাপ সবচেয়ে বুদ্ধিমান গিরগিটিজাতীয় প্রাণীদের একটি; পরীক্ষায় এরা ছোট সংখ্যা গুনতে শিখেছে।',
      ],
    },
    related: ['water-monitor', 'komodo-dragon', 'oriental-garden-lizard'],
  },
  {
    id: 'water-monitor',
    commonName: { en: 'Asian Water Monitor', bn: 'রামগদি' },
    scientificName: 'Varanus salvator',
    altNames: {
      en: ['Water Monitor', 'Common Water Monitor'],
      bn: ['পানি গুইসাপ', 'কাবা গুই'],
    },
    category: 'reptiles',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Asian water monitor',
    description: {
      en: 'The Asian water monitor is the second-heaviest lizard in the world after the Komodo dragon and a powerful swimmer. In Bangladesh it lives mainly in the Sundarbans and coastal wetlands, where it hunts fish, crabs and carrion along muddy creeks. It is not venomous to people but has sharp teeth, claws and a whip-like tail, so it should never be cornered or handled.',
      bn: 'রামগদি বা পানি গুইসাপ কোমোডো ড্রাগনের পর বিশ্বের দ্বিতীয় ভারী গিরগিটিজাতীয় প্রাণী এবং দক্ষ সাঁতারু। বাংলাদেশে এরা মূলত সুন্দরবন ও উপকূলীয় জলাভূমিতে বাস করে, কাদাভরা খালের ধারে মাছ, কাঁকড়া ও মরা প্রাণী খুঁজে খায়। মানুষের জন্য বিষধর নয়, তবে ধারালো দাঁত, নখ ও চাবুকের মতো লেজ আছে — তাই কখনো কোণঠাসা করা বা ধরা উচিত নয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Varanidae',
      genus: 'Varanus',
      species: 'V. salvator',
    },
    physical: {
      size: {
        en: 'Usually 1.5–2 m including tail; large males up to about 3 m',
        bn: 'লেজসহ সাধারণত ১.৫–২ মিটার; বড় পুরুষ প্রায় ৩ মিটার পর্যন্ত',
      },
      weight: {
        en: 'Usually 10–20 kg; exceptional males heavier',
        bn: 'সাধারণত ১০–২০ কেজি; ব্যতিক্রমী পুরুষ আরও ভারী',
      },
      lifespan: {
        en: 'About 10–15 years in the wild; longer in captivity',
        bn: 'বনে প্রায় ১০–১৫ বছর; আবদ্ধ অবস্থায় আরও বেশি',
      },
      features: {
        en: [
          'Dark grey-black skin with rows of yellow spots',
          'Long, laterally flattened tail used like a rudder',
          'Nostrils set near the tip of the snout for breathing while swimming',
        ],
        bn: [
          'গাঢ় ধূসর-কালো চামড়ায় সারি সারি হলুদ ফোঁটা',
          'দুই পাশে চ্যাপ্টা লম্বা লেজ, যা হালের মতো কাজ করে',
          'সাঁতারের সময় শ্বাস নিতে নাকের ছিদ্র মুখের আগার কাছে',
        ],
      },
    },
    habitat: {
      en: 'Mangroves, rivers, swamps, canals and coastal wetlands',
      bn: 'ম্যানগ্রোভ বন, নদী, জলাভূমি, খাল ও উপকূলীয় এলাকা',
    },
    habitats: ['mangrove', 'rivers-lakes', 'wetland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Eastern India, Bangladesh and Sri Lanka through mainland Southeast Asia to southern China, Indonesia and the Philippines.',
      bn: 'পূর্ব ভারত, বাংলাদেশ ও শ্রীলঙ্কা থেকে দক্ষিণ-পূর্ব এশিয়ার মূল ভূখণ্ড হয়ে দক্ষিণ চীন, ইন্দোনেশিয়া ও ফিলিপাইন পর্যন্ত।',
    },
    climate: {
      en: 'Hot, humid tropical climates',
      bn: 'উষ্ণ-আর্দ্র ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Carnivore and scavenger — fish, crabs, frogs, birds, eggs, rodents and carrion',
      bn: 'মাংসাশী ও মৃতভোজী — মাছ, কাঁকড়া, ব্যাঙ, পাখি, ডিম, ইঁদুর ও মরা প্রাণী',
    },
    ecologicalRole: {
      en: 'An important scavenger that removes carcasses from waterways, and prey for tigers and crocodiles in the Sundarbans.',
      bn: 'জলপথ থেকে মরা প্রাণী সরিয়ে পরিবেশ পরিষ্কার রাখে; সুন্দরবনে বাঘ ও কুমিরের খাদ্যও এরা।',
    },
    behavior: {
      en: 'Active by day, it basks on banks and dives into water when disturbed, staying submerged for up to half an hour.',
      bn: 'দিনে সক্রিয়; পাড়ে রোদ পোহায় এবং বিরক্ত হলে পানিতে ঝাঁপ দিয়ে আধা ঘণ্টা পর্যন্ত ডুবে থাকতে পারে।',
    },
    range: {
      native: [
        [21.95, 89.18],
        [22.2, 88.9],
        [16.8, 96.2],
        [13.7, 100.5],
        [-6.2, 106.8],
        [10.3, 123.9],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Commercial harvest for the leather trade', 'Mangrove and wetland loss', 'Hunting for meat and medicine'],
        bn: ['চামড়াশিল্পের জন্য বাণিজ্যিক শিকার', 'ম্যানগ্রোভ ও জলাভূমি ধ্বংস', 'মাংস ও ওষুধের জন্য শিকার'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II', 'Protected in the Sundarbans reserve forest and wildlife sanctuaries'],
        bn: ['সাইটিস পরিশিষ্ট-২-তে তালিকাভুক্ত', 'সুন্দরবন সংরক্ষিত বন ও বন্যপ্রাণী অভয়ারণ্যে সুরক্ষিত'],
      },
    },
    facts: {
      en: [
        'It thrives even in big Asian cities such as Bangkok, living in park lakes and canals.',
        'It is a strong enough swimmer to reach islands far out at sea.',
      ],
      bn: [
        'ব্যাংককের মতো বড় এশীয় শহরের পার্কের লেক ও খালেও এরা দিব্যি টিকে আছে।',
        'এরা এত ভালো সাঁতারু যে সমুদ্রের দূরের দ্বীপেও পৌঁছে যায়।',
      ],
    },
    related: ['bengal-monitor', 'komodo-dragon', 'royal-bengal-tiger', 'reticulated-python'],
  },
  {
    id: 'tokay-gecko',
    commonName: { en: 'Tokay Gecko', bn: 'তক্ষক' },
    scientificName: 'Gekko gecko',
    altNames: {
      en: ['Tokay'],
      bn: ['তক্ষক সাপ'],
    },
    category: 'reptiles',
    wikiTitle: 'Tokay gecko',
    description: {
      en: 'The tokay gecko is a large, blue-grey gecko with orange spots whose loud “to-kay” call echoes from trees and old buildings at night. It is harmless and non-venomous, but its powerful bite and grip make it best left undisturbed. In Bangladesh it has been heavily smuggled because of false claims about its medicinal value, and trading it is illegal.',
      bn: 'তক্ষক কমলা ফোঁটাযুক্ত নীলচে-ধূসর রঙের বড় আকারের টিকটিকি; রাতে গাছ ও পুরোনো দালান থেকে এর জোরালো “তক্‌-কা” ডাক শোনা যায়। এরা বিষহীন ও নিরীহ, তবে কামড় ও কামড়ে ধরে রাখার জোর বেশি, তাই বিরক্ত না করাই ভালো। ওষুধি গুণ নিয়ে ভুয়া প্রচারের কারণে বাংলাদেশে তক্ষক ব্যাপকভাবে পাচার হয়েছে; এর কেনাবেচা আইনত দণ্ডনীয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Gekkonidae',
      genus: 'Gekko',
      species: 'G. gecko',
    },
    physical: {
      size: {
        en: '25–40 cm including tail',
        bn: 'লেজসহ ২৫–৪০ সেমি',
      },
      weight: {
        en: 'About 150–400 g',
        bn: 'প্রায় ১৫০–৪০০ গ্রাম',
      },
      lifespan: {
        en: 'About 10 years; up to 20 in captivity',
        bn: 'প্রায় ১০ বছর; আবদ্ধ অবস্থায় ২০ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Blue-grey skin covered in orange or red spots',
          'Large eyes with vertical pupils',
          'Sticky toe pads that cling to walls and ceilings',
        ],
        bn: [
          'নীলচে-ধূসর চামড়ায় কমলা বা লাল ফোঁটা',
          'খাড়া মণিযুক্ত বড় চোখ',
          'আঠালো পায়ের তালু, যা দিয়ে দেয়াল ও ছাদে আটকে থাকে',
        ],
      },
    },
    habitat: {
      en: 'Tropical forests, large trees, cliffs and old buildings',
      bn: 'ক্রান্তীয় বন, বড় গাছ, পাহাড়ি খাড়া ঢাল ও পুরোনো দালানকোঠা',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'North-east India and Bangladesh through Southeast Asia to southern China, Indonesia and the Philippines; introduced in Florida and Hawaii.',
      bn: 'উত্তর-পূর্ব ভারত ও বাংলাদেশ থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে দক্ষিণ চীন, ইন্দোনেশিয়া ও ফিলিপাইন পর্যন্ত; ফ্লোরিডা ও হাওয়াইয়ে অনুপ্রবেশিত।',
    },
    climate: {
      en: 'Warm, humid tropical and subtropical climates',
      bn: 'উষ্ণ-আর্দ্র ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Carnivore — large insects, spiders, small lizards and occasionally baby birds or mice',
      bn: 'মাংসাশী — বড় পোকামাকড়, মাকড়সা, ছোট টিকটিকি এবং কখনো পাখির ছানা বা ইঁদুরছানা',
    },
    ecologicalRole: {
      en: 'A nocturnal predator that controls large insects such as cockroaches and crickets.',
      bn: 'নিশাচর শিকারি হিসেবে তেলাপোকা ও ঝিঁঝিঁ পোকার মতো বড় পোকামাকড় নিয়ন্ত্রণ করে।',
    },
    behavior: {
      en: 'Nocturnal and territorial; males call loudly to defend territory and attract mates.',
      bn: 'নিশাচর ও এলাকাভিত্তিক; পুরুষ তক্ষক এলাকা রক্ষা ও সঙ্গী আকর্ষণে জোরে ডাকে।',
    },
    range: {
      native: [
        [24.3, 91.7],
        [22.4, 92.2],
        [26.1, 91.7],
        [13.7, 100.5],
        [-6.2, 106.8],
        [23.1, 113.3],
      ],
      introduced: [
        [25.8, -80.2],
        [21.3, -157.8],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Massive trade for traditional medicine and the pet market', 'Smuggling driven by false rumours of high prices', 'Forest loss'],
        bn: ['প্রচলিত ওষুধ ও পোষা প্রাণীর বাজারের জন্য ব্যাপক বাণিজ্য', 'বিপুল দামের গুজবে পাচার', 'বন উজাড়'],
      },
      initiatives: {
        en: ['Moved to CITES Appendix II in 2019', 'Anti-smuggling operations by the Bangladesh Wildlife Crime Control Unit'],
        bn: ['২০১৯ সালে সাইটিস পরিশিষ্ট-২-তে অন্তর্ভুক্ত', 'বাংলাদেশ বন্যপ্রাণী অপরাধ দমন ইউনিটের পাচারবিরোধী অভিযান'],
      },
    },
    facts: {
      en: [
        'Rumours that tokay geckos are worth huge sums or cure diseases are false — they fuel illegal smuggling.',
        'Its call is one of the loudest of any lizard.',
      ],
      bn: [
        'তক্ষকের দাম কোটি টাকা বা এটি রোগ সারায় — এসব গুজব মিথ্যা, এগুলো অবৈধ পাচারকে উসকে দেয়।',
        'গিরগিটিজাতীয় প্রাণীদের মধ্যে এর ডাক সবচেয়ে জোরালোগুলোর একটি।',
      ],
    },
    related: ['common-house-gecko', 'oriental-garden-lizard', 'green-vine-snake'],
  },
  {
    id: 'oriental-garden-lizard',
    commonName: { en: 'Oriental Garden Lizard', bn: 'রক্তচোষা' },
    scientificName: 'Calotes versicolor',
    altNames: {
      en: ['Changeable Lizard', 'Eastern Garden Lizard'],
      bn: ['গিরগিটি', 'কাঁকলাস'],
    },
    category: 'reptiles',
    wikiTitle: 'Oriental garden lizard',
    description: {
      en: 'The oriental garden lizard is the familiar spiny-crested lizard of Bangladeshi gardens, hedges and fences. Breeding males turn their head and throat bright red, which gave rise to the Bengali name “roktochosha” (blood-sucker) — but it does not suck blood and is completely harmless. It is a useful insect-eater that should be left to live in gardens.',
      bn: 'রক্তচোষা বাংলাদেশের বাগান, ঝোপ ও বেড়ার অতি পরিচিত কাঁটাওয়ালা ঝুঁটিযুক্ত গিরগিটি। প্রজনন মৌসুমে পুরুষের মাথা ও গলা টকটকে লাল হয়ে যায়, সেখান থেকেই “রক্তচোষা” নাম — কিন্তু এরা রক্ত চোষে না এবং সম্পূর্ণ নিরীহ। পোকামাকড় খেয়ে উপকার করা এই প্রাণীটিকে বাগানে নিশ্চিন্তে থাকতে দেওয়া উচিত।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Agamidae',
      genus: 'Calotes',
      species: 'C. versicolor',
    },
    physical: {
      size: {
        en: 'Up to about 37 cm including the long tail; body 8–14 cm',
        bn: 'লম্বা লেজসহ প্রায় ৩৭ সেমি পর্যন্ত; দেহ ৮–১৪ সেমি',
      },
      weight: {
        en: 'Usually 30–100 g',
        bn: 'সাধারণত ৩০–১০০ গ্রাম',
      },
      lifespan: {
        en: 'About 3–5 years',
        bn: 'প্রায় ৩–৫ বছর',
      },
      features: {
        en: [
          'Row of spines along the neck and back',
          'Breeding males have a red head and throat',
          'Can change shade between brown, olive and yellowish',
        ],
        bn: [
          'ঘাড় ও পিঠ বরাবর এক সারি কাঁটা',
          'প্রজনন মৌসুমে পুরুষের মাথা ও গলা লাল',
          'বাদামি, জলপাই ও হলদে রঙে রং বদলাতে পারে',
        ],
      },
    },
    habitat: {
      en: 'Gardens, hedges, scrub, farmland and forest edges',
      bn: 'বাগান, বেড়া, ঝোপঝাড়, খেত-খামার ও বনের কিনারা',
    },
    habitats: ['urban-farmland', 'grassland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'From Iran and Afghanistan across South Asia including all of Bangladesh to southern China and Southeast Asia; introduced elsewhere.',
      bn: 'ইরান ও আফগানিস্তান থেকে সারা বাংলাদেশসহ দক্ষিণ এশিয়া হয়ে দক্ষিণ চীন ও দক্ষিণ-পূর্ব এশিয়া পর্যন্ত; কিছু জায়গায় অনুপ্রবেশিত।',
    },
    climate: {
      en: 'Tropical to warm temperate climates',
      bn: 'ক্রান্তীয় থেকে উষ্ণ নাতিশীতোষ্ণ জলবায়ু',
    },
    diet: {
      en: 'Insectivore — grasshoppers, beetles, ants and other insects; occasionally tiny vertebrates',
      bn: 'কীটভোজী — ফড়িং, গুবরে পোকা, পিঁপড়া ও অন্যান্য পোকা; কখনো খুব ছোট মেরুদণ্ডী প্রাণী',
    },
    ecologicalRole: {
      en: 'Controls garden and crop insects and is prey for birds, snakes and cats.',
      bn: 'বাগান ও ফসলের পোকা নিয়ন্ত্রণ করে এবং পাখি, সাপ ও বিড়ালের খাদ্য।',
    },
    behavior: {
      en: 'Active by day; males bob their heads and puff their throats to display, and lay eggs buried in soil.',
      bn: 'দিনে সক্রিয়; পুরুষ মাথা ওঠানামা করে ও গলা ফুলিয়ে প্রদর্শন করে; স্ত্রী মাটিতে গর্ত করে ডিম পাড়ে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.3, 91.8],
        [24.9, 89.4],
        [28.6, 77.2],
        [13.7, 100.5],
        [23.1, 113.3],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Pesticide use reducing insect prey', 'Killed by children and people due to myths', 'Predation by cats in towns'],
        bn: ['কীটনাশকের কারণে খাদ্য পোকা কমে যাওয়া', 'কুসংস্কারের কারণে মেরে ফেলা', 'শহরে বিড়ালের শিকার হওয়া'],
      },
      initiatives: {
        en: ['Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012', 'Nature education promoting wildlife-friendly gardens'],
        bn: ['বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর আওতায় সুরক্ষিত', 'বন্যপ্রাণীবান্ধব বাগান নিয়ে প্রকৃতি শিক্ষা'],
      },
    },
    facts: {
      en: [
        'Despite its Bengali name, it never sucks blood.',
        'Unlike geckos, it cannot shed and regrow its tail.',
      ],
      bn: [
        'নামে রক্তচোষা হলেও এরা কখনো রক্ত চোষে না।',
        'টিকটিকির মতো এরা লেজ খসিয়ে আবার নতুন লেজ গজাতে পারে না।',
      ],
    },
    related: ['common-house-gecko', 'tokay-gecko', 'bengal-monitor'],
  },
  {
    id: 'common-house-gecko',
    commonName: { en: 'Common House Gecko', bn: 'টিকটিকি' },
    scientificName: 'Hemidactylus frenatus',
    altNames: {
      en: ['Asian House Gecko', 'Chit-chat'],
      bn: ['ঘরের টিকটিকি', 'দেয়াল টিকটিকি'],
    },
    category: 'reptiles',
    wikiTitle: 'Common house gecko',
    description: {
      en: 'The common house gecko is the small, pale lizard that clings to walls and ceilings in almost every Bangladeshi home, especially around lights at night. It is harmless and non-venomous, and its familiar “tik-tik-tik” chirps are woven into local folklore. Native to South and Southeast Asia, it has spread with people to warm regions all over the world.',
      bn: 'টিকটিকি ছোট, হালকা রঙের গিরগিটিজাতীয় প্রাণী, যা বাংলাদেশের প্রায় প্রতিটি ঘরের দেয়াল ও ছাদে লেগে থাকে, বিশেষ করে রাতে বাতির আশেপাশে। এরা বিষহীন ও নিরীহ; এদের পরিচিত “টিক-টিক-টিক” ডাক নিয়ে লোকবিশ্বাসও প্রচলিত আছে। দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার এই প্রাণী মানুষের সঙ্গে সঙ্গে পৃথিবীর উষ্ণ অঞ্চলজুড়ে ছড়িয়ে পড়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Gekkonidae',
      genus: 'Hemidactylus',
      species: 'H. frenatus',
    },
    physical: {
      size: {
        en: '7.5–15 cm including tail',
        bn: 'লেজসহ ৭.৫–১৫ সেমি',
      },
      weight: {
        en: 'A few grams (about 3–6 g)',
        bn: 'মাত্র কয়েক গ্রাম (প্রায় ৩–৬ গ্রাম)',
      },
      lifespan: {
        en: 'About 5–7 years',
        bn: 'প্রায় ৫–৭ বছর',
      },
      features: {
        en: [
          'Pale, almost translucent skin that darkens or lightens',
          'Toe pads with microscopic hairs for climbing smooth surfaces',
          'Tail that breaks off to escape predators and regrows',
        ],
        bn: [
          'ফ্যাকাশে, প্রায় স্বচ্ছ চামড়া, যা গাঢ় বা হালকা হতে পারে',
          'পায়ের তালুতে আণুবীক্ষণিক লোম, যা দিয়ে মসৃণ দেয়ালে চড়ে',
          'বিপদে লেজ খসিয়ে পালায়, পরে আবার লেজ গজায়',
        ],
      },
    },
    habitat: {
      en: 'Houses, buildings and street lights; also tree trunks and rocks in the wild',
      bn: 'ঘরবাড়ি, দালান ও রাস্তার বাতি; বুনো পরিবেশে গাছের গুঁড়ি ও পাথরেও থাকে',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'oceania', 'north-america', 'africa'],
    distribution: {
      en: 'Native to South and Southeast Asia; now established across tropical and subtropical parts of the Americas, Africa and Oceania.',
      bn: 'দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার স্থানীয় প্রজাতি; এখন আমেরিকা, আফ্রিকা ও ওশেনিয়ার ক্রান্তীয় ও উপক্রান্তীয় অঞ্চলেও স্থায়ী।',
    },
    climate: {
      en: 'Warm tropical and subtropical climates',
      bn: 'উষ্ণ ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Insectivore — moths, mosquitoes, flies, cockroaches and spiders',
      bn: 'কীটভোজী — মথ, মশা, মাছি, তেলাপোকা ও মাকড়সা',
    },
    ecologicalRole: {
      en: 'Eats household insects including mosquitoes; outside its native range it can outcompete local geckos.',
      bn: 'মশাসহ ঘরের পোকামাকড় খায়; নিজ এলাকার বাইরে স্থানীয় টিকটিকিদের হটিয়ে দিতে পারে।',
    },
    behavior: {
      en: 'Nocturnal; it waits near lights for insects and defends feeding spots with chirping calls.',
      bn: 'নিশাচর; বাতির কাছে পোকার অপেক্ষায় থাকে এবং ডাক দিয়ে নিজের শিকারের জায়গা রক্ষা করে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.3, 91.8],
        [22.6, 88.4],
        [13.7, 100.5],
        [3.1, 101.7],
        [14.6, 121.0],
      ],
      introduced: [
        [21.3, -157.8],
        [-12.5, 130.8],
        [19.4, -99.1],
        [-6.8, 39.3],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'increasing',
      threats: {
        en: ['No major threats; it thrives alongside people'],
        bn: ['বড় কোনো হুমকি নেই; মানুষের সঙ্গে এরা ভালোভাবেই টিকে আছে'],
      },
      initiatives: {
        en: ['Monitoring as an invasive species on Pacific islands', 'Biosecurity checks on shipping cargo'],
        bn: ['প্রশান্ত মহাসাগরীয় দ্বীপে আগ্রাসী প্রজাতি হিসেবে পর্যবেক্ষণ', 'জাহাজের মালামালে জৈবনিরাপত্তা পরীক্ষা'],
      },
    },
    facts: {
      en: [
        'Geckos are not poisonous; food is not made toxic by a gecko falling into it, though basic hygiene still matters.',
        'In Bengali tradition a gecko’s “tik-tik” is often taken as agreeing with what was just said.',
      ],
      bn: [
        'টিকটিকি বিষাক্ত নয়; খাবারে টিকটিকি পড়লে খাবার বিষাক্ত হয় না, তবে স্বাস্থ্যবিধির জন্য সে খাবার এড়িয়ে চলাই ভালো।',
        'বাঙালি লোকবিশ্বাসে কথার পর টিকটিকির “টিক-টিক” ডাককে প্রায়ই সত্যের সাক্ষী ধরা হয়।',
      ],
    },
    related: ['tokay-gecko', 'oriental-garden-lizard'],
  },
  {
    id: 'green-anaconda',
    commonName: { en: 'Green Anaconda', bn: 'সবুজ অ্যানাকোন্ডা' },
    scientificName: 'Eunectes murinus',
    altNames: {
      en: ['Anaconda', 'Common Anaconda', 'Water Boa'],
      bn: ['অ্যানাকোন্ডা', 'সাধারণ অ্যানাকোন্ডা', 'জলের বোয়া'],
    },
    category: 'reptiles',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Green anaconda',
    description: {
      en: 'The green anaconda is the heaviest snake in the world, a massive water-loving boa of South American rivers and swamps. It is non-venomous and kills by constriction, ambushing animals that come to drink. Stories of anacondas hunting people are greatly exaggerated, but these powerful snakes should always be respected and observed only from a distance.',
      bn: 'সবুজ অ্যানাকোন্ডা পৃথিবীর সবচেয়ে ভারী সাপ — দক্ষিণ আমেরিকার নদী ও জলাভূমির পানিপ্রেমী বিশাল বোয়া। এরা বিষহীন, শিকারকে পেঁচিয়ে মারে এবং পানি খেতে আসা প্রাণীদের ওত পেতে ধরে। মানুষ শিকারের গল্পগুলো অনেকটাই অতিরঞ্জিত, তবে এই শক্তিশালী সাপকে সবসময় সমীহ করা উচিত এবং কেবল দূর থেকেই দেখা উচিত।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Boidae',
      genus: 'Eunectes',
      species: 'E. murinus',
    },
    physical: {
      size: {
        en: 'Females commonly 4–5 m; exceptional individuals over 6 m; males much smaller',
        bn: 'স্ত্রী সাধারণত ৪–৫ মিটার; ব্যতিক্রমী কিছু ৬ মিটারের বেশি; পুরুষ অনেক ছোট',
      },
      weight: {
        en: 'Large females 30–70 kg; exceptional ones near 100 kg or more',
        bn: 'বড় স্ত্রী ৩০–৭০ কেজি; ব্যতিক্রমী কিছু প্রায় ১০০ কেজি বা তার বেশি',
      },
      lifespan: {
        en: 'About 10 years in the wild; 20–30 in captivity',
        bn: 'বনে প্রায় ১০ বছর; আবদ্ধ অবস্থায় ২০–৩০ বছর',
      },
      features: {
        en: [
          'Olive-green body with large black oval spots',
          'Eyes and nostrils on top of the head for lurking in water',
          'Enormously thick, muscular body',
        ],
        bn: [
          'জলপাই-সবুজ দেহে বড় কালো ডিম্বাকার ছোপ',
          'পানিতে ঘাপটি মেরে থাকতে চোখ ও নাক মাথার ওপরে',
          'অত্যন্ত মোটা ও পেশিবহুল দেহ',
        ],
      },
    },
    habitat: {
      en: 'Slow-moving rivers, swamps, marshes and flooded grasslands',
      bn: 'ধীরে বয়ে চলা নদী, জলাভূমি, বিল ও বন্যাপ্লাবিত তৃণভূমি',
    },
    habitats: ['rivers-lakes', 'wetland', 'tropical-forest'],
    regions: ['south-america'],
    distribution: {
      en: 'Tropical South America east of the Andes, including the Amazon and Orinoco basins and Trinidad.',
      bn: 'আন্দিজ পর্বতের পূর্বে ক্রান্তীয় দক্ষিণ আমেরিকা — আমাজন ও অরিনোকো অববাহিকা এবং ত্রিনিদাদসহ।',
    },
    climate: {
      en: 'Hot, humid tropical climate with wet and dry seasons',
      bn: 'বর্ষা ও শুষ্ক মৌসুমসহ উষ্ণ-আর্দ্র ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Carnivore — fish, birds, capybaras, deer, turtles and caimans',
      bn: 'মাংসাশী — মাছ, পাখি, ক্যাপিবারা, হরিণ, কচ্ছপ ও কেইমান',
    },
    ecologicalRole: {
      en: 'An apex predator of South American wetlands that regulates populations of large rodents and reptiles.',
      bn: 'দক্ষিণ আমেরিকার জলাভূমির শীর্ষ শিকারি, যা বড় তীক্ষ্ণদন্তী প্রাণী ও সরীসৃপের সংখ্যা নিয়ন্ত্রণ করে।',
    },
    behavior: {
      en: 'Spends most of its time in water; in the breeding season several males may coil around one female in a “breeding ball”.',
      bn: 'বেশির ভাগ সময় পানিতে কাটায়; প্রজনন মৌসুমে কয়েকটি পুরুষ একটি স্ত্রীকে ঘিরে “প্রজনন বল” তৈরি করে।',
    },
    range: {
      native: [
        [7.9, -67.5],
        [-3.1, -60.0],
        [-8.8, -63.9],
        [4.9, -52.3],
        [10.5, -61.3],
        [-12.6, -69.2],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Killed out of fear and to protect livestock', 'Hunting for skins', 'Wetland drainage and deforestation'],
        bn: ['ভয়ে এবং গবাদিপশু রক্ষায় মেরে ফেলা', 'চামড়ার জন্য শিকার', 'জলাভূমি শুকানো ও বন উজাড়'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II', 'Long-term field research in the Venezuelan llanos'],
        bn: ['সাইটিস পরিশিষ্ট-২-তে তালিকাভুক্ত', 'ভেনেজুয়েলার ইয়ানোস তৃণভূমিতে দীর্ঘমেয়াদি মাঠ গবেষণা'],
      },
    },
    facts: {
      en: [
        'Females give birth to live young, sometimes 20–40 or more at a time.',
        'In 2024 scientists described the northern green anaconda (Eunectes akayima) as a separate species.',
      ],
      bn: [
        'স্ত্রী অ্যানাকোন্ডা সরাসরি বাচ্চা দেয় — কখনো একবারে ২০–৪০টি বা তার বেশি।',
        '২০২৪ সালে বিজ্ঞানীরা উত্তরাঞ্চলীয় সবুজ অ্যানাকোন্ডাকে (Eunectes akayima) আলাদা প্রজাতি হিসেবে বর্ণনা করেন।',
      ],
    },
    related: ['reticulated-python', 'burmese-python', 'giant-otter'],
  },
  {
    id: 'black-mamba',
    commonName: { en: 'Black Mamba', bn: 'ব্ল্যাক মাম্বা' },
    scientificName: 'Dendroaspis polylepis',
    altNames: {
      en: ['Mamba'],
      bn: ['কালো মাম্বা'],
    },
    category: 'reptiles',
    wikiTitle: 'Black mamba',
    description: {
      en: 'The black mamba is Africa’s longest venomous snake and one of the fastest snakes in the world. Its name comes from the inky-black inside of its mouth, which it gapes as a warning, not from its grey-brown body. Its fast-acting neurotoxic venom is deadly without prompt antivenom, but it is shy and usually flees — people should back away slowly and never attempt to catch or kill one.',
      bn: 'ব্ল্যাক মাম্বা আফ্রিকার দীর্ঘতম বিষধর সাপ এবং পৃথিবীর দ্রুততম সাপগুলোর একটি। ধূসর-বাদামি দেহের জন্য নয়, বরং সতর্ক করতে যে মুখ হাঁ করে, তার ভেতরের কালির মতো কালো রঙের জন্যই এর এই নাম। এর দ্রুত কার্যকর স্নায়ুবিষ সময়মতো অ্যান্টিভেনম না পেলে প্রাণঘাতী; তবে এরা লাজুক এবং সাধারণত পালিয়ে যায় — মানুষের উচিত ধীরে পিছিয়ে আসা, কখনো ধরা বা মারার চেষ্টা না করা।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Elapidae',
      genus: 'Dendroaspis',
      species: 'D. polylepis',
    },
    physical: {
      size: {
        en: 'Usually 2–3 m; rarely over 4 m',
        bn: 'সাধারণত ২–৩ মিটার; কদাচিৎ ৪ মিটারের বেশি',
      },
      weight: {
        en: 'Usually about 1–2 kg',
        bn: 'সাধারণত প্রায় ১–২ কেজি',
      },
      lifespan: {
        en: 'About 11 years in the wild',
        bn: 'বনে প্রায় ১১ বছর',
      },
      features: {
        en: [
          'Grey to olive-brown body, never truly black',
          'Black lining inside the mouth shown in threat displays',
          'Coffin-shaped head and slender, fast body',
        ],
        bn: [
          'ধূসর থেকে জলপাই-বাদামি দেহ, আসলে কখনো কালো নয়',
          'ভয় দেখাতে হাঁ করলে মুখের ভেতরের কালো রং দেখা যায়',
          'কফিনাকৃতি মাথা ও সরু, দ্রুতগামী দেহ',
        ],
      },
    },
    habitat: {
      en: 'Savanna, open woodland, rocky hills and scrubland',
      bn: 'সাভানা, হালকা বনভূমি, পাথুরে পাহাড় ও ঝোপঝাড়',
    },
    habitats: ['grassland', 'tropical-forest'],
    regions: ['africa'],
    distribution: {
      en: 'Eastern and southern Africa, from Ethiopia and Somalia to South Africa, with patches in West Africa.',
      bn: 'পূর্ব ও দক্ষিণ আফ্রিকা — ইথিওপিয়া ও সোমালিয়া থেকে দক্ষিণ আফ্রিকা পর্যন্ত, পশ্চিম আফ্রিকায় বিচ্ছিন্নভাবে।',
    },
    climate: {
      en: 'Warm tropical and subtropical savanna climates',
      bn: 'উষ্ণ ক্রান্তীয় ও উপক্রান্তীয় সাভানা জলবায়ু',
    },
    diet: {
      en: 'Carnivore — rodents, hyraxes, bushbabies and birds',
      bn: 'মাংসাশী — ইঁদুরজাতীয় প্রাণী, হাইর‍্যাক্স, বুশবেবি ও পাখি',
    },
    ecologicalRole: {
      en: 'A key predator of rodents and small mammals in African savannas.',
      bn: 'আফ্রিকার সাভানায় ইঁদুরজাতীয় ও ছোট স্তন্যপায়ীর গুরুত্বপূর্ণ শিকারি।',
    },
    behavior: {
      en: 'Active by day and returns to the same refuge, such as a termite mound or hollow tree, for long periods.',
      bn: 'দিনে সক্রিয়; উইঢিবি বা গাছের কোটরের মতো একই আশ্রয়ে দীর্ঘদিন ধরে ফিরে আসে।',
    },
    range: {
      native: [
        [-1.3, 36.8],
        [-6.8, 37.7],
        [-17.8, 31.0],
        [-24.0, 31.5],
        [9.0, 38.7],
        [-12.9, 28.6],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Killed on sight near settlements', 'Habitat conversion to farmland'],
        bn: ['জনবসতির কাছে দেখামাত্র মেরে ফেলা', 'আবাসস্থল কৃষিজমিতে রূপান্তর'],
      },
      initiatives: {
        en: ['Snake rescue and relocation services in South Africa and Kenya', 'Snakebite first-aid training and antivenom access programmes'],
        bn: ['দক্ষিণ আফ্রিকা ও কেনিয়ায় সাপ উদ্ধার ও স্থানান্তর সেবা', 'সাপে কাটার প্রাথমিক চিকিৎসা প্রশিক্ষণ ও অ্যান্টিভেনম প্রাপ্তি কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'It can move at roughly 15–20 km/h over short distances, though it uses speed to escape, not to chase people.',
        'Before antivenom became available, bites were almost always fatal.',
      ],
      bn: [
        'অল্প দূরত্বে এরা প্রায় ঘণ্টায় ১৫–২০ কিলোমিটার বেগে চলতে পারে, তবে এই গতি পালানোর জন্য, মানুষকে তাড়া করার জন্য নয়।',
        'অ্যান্টিভেনম আবিষ্কারের আগে এর কামড় প্রায় সবসময়ই মৃত্যু ঘটাত।',
      ],
    },
    related: ['inland-taipan', 'spectacled-cobra', 'king-cobra'],
  },
  {
    id: 'inland-taipan',
    commonName: { en: 'Inland Taipan', bn: 'ইনল্যান্ড তাইপান' },
    scientificName: 'Oxyuranus microlepidotus',
    altNames: {
      en: ['Fierce Snake', 'Small-scaled Snake'],
      bn: ['ফিয়ার্স স্নেক', 'ছোট-আঁশ তাইপান'],
    },
    category: 'reptiles',
    wikiTitle: 'Inland taipan',
    description: {
      en: 'The inland taipan of central Australia has the most toxic venom of any land snake in laboratory tests. Yet it lives in remote, sparsely populated floodplains, is shy and reclusive, and very few people have ever been bitten — mostly reptile keepers handling captive snakes. It is a clear lesson that venomous snakes should never be handled; any bite needs emergency antivenom treatment.',
      bn: 'মধ্য অস্ট্রেলিয়ার ইনল্যান্ড তাইপানের বিষ গবেষণাগারের পরীক্ষায় স্থলভাগের যেকোনো সাপের চেয়ে বেশি তীব্র। তবু এরা জনবিরল দূরবর্তী প্লাবনভূমিতে থাকে, স্বভাবে লাজুক ও নির্জনপ্রিয়, তাই খুব কম মানুষ এর কামড় খেয়েছেন — তাদেরও বেশির ভাগ আবদ্ধ সাপ নাড়াচাড়া করা সরীসৃপ-পালক। এটি স্পষ্ট শিক্ষা দেয় যে বিষধর সাপ কখনো হাতে ধরা উচিত নয়; কামড়ালে জরুরি ভিত্তিতে অ্যান্টিভেনম চিকিৎসা প্রয়োজন।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Elapidae',
      genus: 'Oxyuranus',
      species: 'O. microlepidotus',
    },
    physical: {
      size: {
        en: 'Usually about 1.8 m; up to about 2.5 m',
        bn: 'সাধারণত প্রায় ১.৮ মিটার; প্রায় ২.৫ মিটার পর্যন্ত',
      },
      weight: {
        en: 'Usually under 2 kg',
        bn: 'সাধারণত ২ কেজির কম',
      },
      lifespan: {
        en: 'About 10–15 years',
        bn: 'প্রায় ১০–১৫ বছর',
      },
      features: {
        en: [
          'Changes colour with the seasons — darker in winter, paler in summer',
          'Glossy dark head and rounded snout',
          'Small, smooth scales',
        ],
        bn: [
          'ঋতুভেদে রং বদলায় — শীতে গাঢ়, গ্রীষ্মে হালকা',
          'চকচকে গাঢ় মাথা ও গোলাকার নাক',
          'ছোট ও মসৃণ আঁশ',
        ],
      },
    },
    habitat: {
      en: 'Arid black-soil floodplains with deep soil cracks, in remote inland areas',
      bn: 'দূরবর্তী অভ্যন্তরীণ এলাকার শুষ্ক কালো মাটির প্লাবনভূমি, যেখানে মাটিতে গভীর ফাটল থাকে',
    },
    habitats: ['desert', 'grassland'],
    regions: ['oceania'],
    distribution: {
      en: 'The channel country where Queensland and South Australia meet, in central-eastern Australia.',
      bn: 'মধ্য-পূর্ব অস্ট্রেলিয়ায় কুইন্সল্যান্ড ও সাউথ অস্ট্রেলিয়ার সীমান্তবর্তী “চ্যানেল কান্ট্রি” অঞ্চল।',
    },
    climate: {
      en: 'Hot, arid to semi-arid climate',
      bn: 'উষ্ণ, শুষ্ক থেকে আধা-শুষ্ক জলবায়ু',
    },
    diet: {
      en: 'Carnivore — specialises in native rats such as the long-haired rat',
      bn: 'মাংসাশী — প্রধানত লম্বা লোমওয়ালা ইঁদুরের মতো স্থানীয় ইঁদুর',
    },
    ecologicalRole: {
      en: 'A specialist predator that tracks boom-and-bust rodent populations in the arid interior.',
      bn: 'শুষ্ক অভ্যন্তরে হঠাৎ বেড়ে যাওয়া ও কমে যাওয়া ইঁদুরের সংখ্যা নিয়ন্ত্রণকারী বিশেষজ্ঞ শিকারি।',
    },
    behavior: {
      en: 'Shy and reclusive, it shelters in soil cracks and burrows and is most active in the cooler parts of the day.',
      bn: 'লাজুক ও নির্জনপ্রিয়; মাটির ফাটল ও গর্তে আশ্রয় নেয় এবং দিনের তুলনামূলক ঠান্ডা সময়ে বেশি সক্রিয় থাকে।',
    },
    range: {
      native: [
        [-25.9, 139.4],
        [-27.0, 140.0],
        [-24.5, 141.5],
        [-26.5, 138.5],
      ],
      endemicTo: { en: 'Central Australia', bn: 'মধ্য অস্ট্রেলিয়া' },
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Overgrazing by livestock reducing rodent prey', 'Predation by introduced cats and foxes'],
        bn: ['গবাদিপশুর অতিরিক্ত চারণে খাদ্য ইঁদুর কমে যাওয়া', 'বাইরে থেকে আনা বিড়াল ও শিয়ালের শিকার হওয়া'],
      },
      initiatives: {
        en: ['Protected under Australian state wildlife laws', 'Australian antivenom research and production programmes'],
        bn: ['অস্ট্রেলিয়ার রাজ্যভিত্তিক বন্যপ্রাণী আইনে সুরক্ষিত', 'অস্ট্রেলিয়ার অ্যান্টিভেনম গবেষণা ও উৎপাদন কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'No human death from an inland taipan bite has been confirmed in modern times, thanks to its remote habitat and prompt antivenom treatment.',
        'It was described in 1879 but then went unrecorded for almost a century.',
      ],
      bn: [
        'দূরবর্তী আবাস ও দ্রুত অ্যান্টিভেনম চিকিৎসার কারণে আধুনিক কালে এর কামড়ে কোনো মানুষের মৃত্যু নিশ্চিতভাবে নথিভুক্ত হয়নি।',
        '১৮৭৯ সালে প্রথম বর্ণিত হলেও এরপর প্রায় এক শতাব্দী এর কোনো খোঁজ মেলেনি।',
      ],
    },
    related: ['black-mamba', 'common-krait', 'yellow-lipped-sea-krait'],
  },
  {
    id: 'green-iguana',
    commonName: { en: 'Green Iguana', bn: 'সবুজ ইগুয়ানা' },
    scientificName: 'Iguana iguana',
    altNames: {
      en: ['American Iguana', 'Common Iguana'],
      bn: ['ইগুয়ানা', 'আমেরিকান ইগুয়ানা'],
    },
    category: 'reptiles',
    wikiTitle: 'Green iguana',
    description: {
      en: 'The green iguana is a large, plant-eating lizard of Central and South American rainforests, often seen basking on branches over rivers. It has a row of spines down its back, a large throat flap and a long tail it can whip in defence. Popular in the pet trade, released iguanas have become invasive in Florida, Puerto Rico and elsewhere.',
      bn: 'সবুজ ইগুয়ানা মধ্য ও দক্ষিণ আমেরিকার বৃষ্টিবনের বড় আকারের তৃণভোজী গিরগিটি; প্রায়ই নদীর ওপর ঝুঁকে থাকা ডালে রোদ পোহাতে দেখা যায়। পিঠ বরাবর কাঁটার সারি, গলার নিচে বড় ঝুলন্ত চামড়া এবং আত্মরক্ষায় চাবুকের মতো ব্যবহারযোগ্য লম্বা লেজ এদের বৈশিষ্ট্য। পোষা প্রাণী হিসেবে জনপ্রিয় হওয়ায় ছেড়ে দেওয়া ইগুয়ানা ফ্লোরিডা, পুয়ের্তো রিকোসহ নানা জায়গায় আগ্রাসী হয়ে উঠেছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Iguanidae',
      genus: 'Iguana',
      species: 'I. iguana',
    },
    physical: {
      size: {
        en: '1.2–1.7 m including tail; large males up to about 2 m',
        bn: 'লেজসহ ১.২–১.৭ মিটার; বড় পুরুষ প্রায় ২ মিটার পর্যন্ত',
      },
      weight: {
        en: 'Usually 4–6 kg; large males up to about 8 kg',
        bn: 'সাধারণত ৪–৬ কেজি; বড় পুরুষ প্রায় ৮ কেজি পর্যন্ত',
      },
      lifespan: {
        en: 'About 10–15 years; up to 20 in captivity',
        bn: 'প্রায় ১০–১৫ বছর; আবদ্ধ অবস্থায় ২০ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Crest of spines from neck to tail',
          'Large dewlap under the throat',
          'A light-sensing “third eye” (parietal eye) on top of the head',
        ],
        bn: [
          'ঘাড় থেকে লেজ পর্যন্ত কাঁটার ঝুঁটি',
          'গলার নিচে বড় ঝুলন্ত চামড়া',
          'মাথার ওপর আলো-সংবেদী “তৃতীয় চোখ” (প্যারাইটাল চোখ)',
        ],
      },
    },
    habitat: {
      en: 'Tropical rainforest canopy, especially trees beside rivers and lakes',
      bn: 'ক্রান্তীয় বৃষ্টিবনের গাছের মাথা, বিশেষ করে নদী ও হ্রদের ধারের গাছ',
    },
    habitats: ['tropical-forest', 'rivers-lakes'],
    regions: ['south-america', 'north-america'],
    distribution: {
      en: 'Southern Mexico through Central America to Paraguay and southern Brazil, and some Caribbean islands; introduced in Florida, Puerto Rico and Hawaii.',
      bn: 'দক্ষিণ মেক্সিকো থেকে মধ্য আমেরিকা হয়ে প্যারাগুয়ে ও দক্ষিণ ব্রাজিল এবং কিছু ক্যারিবীয় দ্বীপ; ফ্লোরিডা, পুয়ের্তো রিকো ও হাওয়াইয়ে অনুপ্রবেশিত।',
    },
    climate: {
      en: 'Hot, humid tropical climates',
      bn: 'উষ্ণ-আর্দ্র ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Herbivore — leaves, flowers, fruit and shoots',
      bn: 'তৃণভোজী — পাতা, ফুল, ফল ও কচি ডগা',
    },
    ecologicalRole: {
      en: 'Disperses seeds of forest plants and is prey for hawks, cats and large snakes.',
      bn: 'বনের গাছের বীজ ছড়ায় এবং বাজপাখি, বনবিড়াল ও বড় সাপের খাদ্য।',
    },
    behavior: {
      en: 'Active by day and mostly arboreal; it drops from branches into water to escape and is a strong swimmer.',
      bn: 'দিনে সক্রিয় ও মূলত গাছবাসী; বিপদে ডাল থেকে পানিতে লাফিয়ে পড়ে এবং দক্ষ সাঁতারু।',
    },
    range: {
      native: [
        [9.9, -84.1],
        [17.2, -89.6],
        [-3.1, -60.0],
        [7.1, -73.1],
        [10.5, -66.9],
        [-15.6, -56.1],
      ],
      introduced: [
        [25.8, -80.2],
        [18.4, -66.1],
        [21.3, -157.8],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Hunting for meat and eggs', 'Capture for the pet trade', 'Deforestation'],
        bn: ['মাংস ও ডিমের জন্য শিকার', 'পোষা প্রাণীর বাজারের জন্য ধরা', 'বন উজাড়'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II', 'Iguana farming projects in Central America to reduce wild harvest'],
        bn: ['সাইটিস পরিশিষ্ট-২-তে তালিকাভুক্ত', 'বুনো শিকার কমাতে মধ্য আমেরিকায় ইগুয়ানা খামার প্রকল্প'],
      },
    },
    facts: {
      en: [
        'It can survive falls of 12 m or more from trees.',
        'Like many reptiles it can carry Salmonella, so always wash hands after contact with reptiles or their enclosures.',
      ],
      bn: [
        'গাছ থেকে ১২ মিটার বা তারও বেশি উচ্চতা থেকে পড়েও এরা বেঁচে যেতে পারে।',
        'অনেক সরীসৃপের মতো এরা সালমোনেলা জীবাণু বহন করতে পারে, তাই সরীসৃপ বা তাদের খাঁচা ছোঁয়ার পর অবশ্যই হাত ধুতে হবে।',
      ],
    },
    related: ['marine-iguana', 'green-anaconda'],
  },
  {
    id: 'marine-iguana',
    commonName: { en: 'Marine Iguana', bn: 'সামুদ্রিক ইগুয়ানা' },
    scientificName: 'Amblyrhynchus cristatus',
    altNames: {
      en: ['Galápagos Marine Iguana', 'Sea Iguana'],
      bn: ['গালাপাগোসের সামুদ্রিক ইগুয়ানা', 'সাগর ইগুয়ানা'],
    },
    category: 'reptiles',
    secondaryCategories: ['marine'],
    wikiTitle: 'Marine iguana',
    description: {
      en: 'The marine iguana of the Galápagos Islands is the only lizard in the world that feeds in the sea, grazing on algae from rocks in the cold surf. Charles Darwin famously called them “imps of darkness”, but they are gentle herbivores that bask in huge groups on black lava shores. It is found nowhere else on Earth and is vulnerable to El Niño events that wipe out its algae food.',
      bn: 'গালাপাগোস দ্বীপপুঞ্জের সামুদ্রিক ইগুয়ানা পৃথিবীর একমাত্র গিরগিটি, যা সমুদ্রে খাবার সংগ্রহ করে — ঠান্ডা ঢেউয়ের নিচে পাথর থেকে শৈবাল খায়। চার্লস ডারউইন এদের “অন্ধকারের দুষ্টু ভূত” বলেছিলেন, অথচ এরা শান্ত তৃণভোজী প্রাণী, কালো লাভার তীরে দল বেঁধে রোদ পোহায়। পৃথিবীর আর কোথাও এদের দেখা মেলে না, আর এল নিনোর সময় খাদ্য শৈবাল নষ্ট হলে এরা ভীষণ বিপদে পড়ে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Squamata',
      family: 'Iguanidae',
      genus: 'Amblyrhynchus',
      species: 'A. cristatus',
    },
    physical: {
      size: {
        en: 'About 0.6–1.3 m including tail, varying by island',
        bn: 'লেজসহ প্রায় ০.৬–১.৩ মিটার; দ্বীপভেদে আকার ভিন্ন',
      },
      weight: {
        en: 'About 1–12 kg depending on island and sex',
        bn: 'দ্বীপ ও লিঙ্গভেদে প্রায় ১–১২ কেজি',
      },
      lifespan: {
        en: 'Usually 5–12 years; some live longer',
        bn: 'সাধারণত ৫–১২ বছর; কিছু আরও বেশি দিন বাঁচে',
      },
      features: {
        en: [
          'Blunt snout for scraping algae off rocks',
          'Salt glands that it empties by “sneezing” salt out of its nostrils',
          'Flattened tail for swimming',
        ],
        bn: [
          'পাথর থেকে শৈবাল চেঁছে খাওয়ার জন্য ভোঁতা নাক',
          'লবণ গ্রন্থি — নাক দিয়ে “হাঁচি” দিয়ে বাড়তি লবণ বের করে দেয়',
          'সাঁতারের জন্য চ্যাপ্টা লেজ',
        ],
      },
    },
    habitat: {
      en: 'Rocky lava shores, intertidal zones and shallow coastal waters',
      bn: 'পাথুরে লাভা উপকূল, জোয়ার-ভাটার অঞ্চল ও অগভীর উপকূলীয় সমুদ্র',
    },
    habitats: ['ocean'],
    regions: ['south-america', 'oceans'],
    distribution: {
      en: 'Endemic to the Galápagos Islands of Ecuador in the eastern Pacific.',
      bn: 'পূর্ব প্রশান্ত মহাসাগরে ইকুয়েডরের গালাপাগোস দ্বীপপুঞ্জের স্থানীয় প্রজাতি।',
    },
    climate: {
      en: 'Dry tropical islands washed by cool ocean currents',
      bn: 'শীতল সমুদ্রস্রোতে ঘেরা শুষ্ক ক্রান্তীয় দ্বীপ',
    },
    diet: {
      en: 'Herbivore — red and green marine algae',
      bn: 'তৃণভোজী — লাল ও সবুজ সামুদ্রিক শৈবাল',
    },
    ecologicalRole: {
      en: 'A major grazer of intertidal algae and prey for Galápagos hawks, herons and introduced predators.',
      bn: 'জোয়ার-ভাটা অঞ্চলের শৈবালের প্রধান ভক্ষক এবং গালাপাগোস বাজপাখি, বক ও বাইরে থেকে আসা শিকারি প্রাণীর খাদ্য।',
    },
    behavior: {
      en: 'Basks to warm up before and after feeding in cold water; large males dive for algae while smaller iguanas feed at low tide.',
      bn: 'ঠান্ডা পানিতে খাওয়ার আগে ও পরে রোদ পোহিয়ে শরীর গরম করে; বড় পুরুষেরা ডুব দিয়ে শৈবাল খায়, ছোটরা ভাটার সময় খায়।',
    },
    range: {
      native: [
        [-0.4, -91.1],
        [-0.7, -90.3],
        [-1.3, -89.7],
        [-0.3, -91.6],
        [-0.9, -89.4],
      ],
      endemicTo: { en: 'Galápagos Islands, Ecuador', bn: 'গালাপাগোস দ্বীপপুঞ্জ, ইকুয়েডর' },
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['El Niño events causing mass starvation', 'Predation by introduced cats, dogs and rats', 'Oil spills and marine pollution'],
        bn: ['এল নিনোর কারণে ব্যাপক খাদ্যাভাব ও মৃত্যু', 'বাইরে থেকে আনা বিড়াল, কুকুর ও ইঁদুরের শিকার', 'তেল ছড়িয়ে পড়া ও সমুদ্রদূষণ'],
      },
      initiatives: {
        en: ['Protection within Galápagos National Park and Marine Reserve', 'Eradication of invasive predators on several islands'],
        bn: ['গালাপাগোস জাতীয় উদ্যান ও সামুদ্রিক সংরক্ষিত এলাকায় সুরক্ষা', 'কয়েকটি দ্বীপে আগ্রাসী শিকারি প্রাণী নির্মূল'],
      },
    },
    facts: {
      en: [
        'During food shortages adults can actually shrink in length, then grow again when food returns.',
        'Visitors must keep at least 2 m away and never touch them under park rules.',
      ],
      bn: [
        'খাদ্যাভাবের সময় প্রাপ্তবয়স্ক ইগুয়ানা দৈর্ঘ্যে আসলেই ছোট হয়ে যেতে পারে, খাবার ফিরলে আবার বাড়ে।',
        'উদ্যানের নিয়ম অনুযায়ী দর্শনার্থীদের অন্তত ২ মিটার দূরে থাকতে হয় এবং কখনো ছোঁয়া যায় না।',
      ],
    },
    related: ['green-iguana', 'green-sea-turtle', 'yellow-lipped-sea-krait'],
  },
];
