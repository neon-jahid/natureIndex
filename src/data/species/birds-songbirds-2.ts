import type { Species } from '@/types';

export const birdsSongbirds2: Species[] = [
  {
    id: 'red-junglefowl',
    commonName: { en: 'Red Junglefowl', bn: 'লাল বনমোরগ' },
    scientificName: 'Gallus gallus',
    altNames: {
      en: ['Junglefowl', 'Wild Chicken', 'Jungle Cock'],
      bn: ['বনমোরগ', 'বনমুরগি', 'বুনো মোরগ'],
    },
    category: 'birds',
    wikiTitle: 'Red junglefowl',
    description: {
      en: 'The red junglefowl is the wild ancestor of the domestic chicken, the most numerous bird on the planet. The male is a slim, brilliantly coloured cockerel with golden-orange hackles, a red comb and a long arching green-black tail. In Bangladesh it still lives in the Sundarbans and the hill forests of Sylhet and Chattogram, where its crow, shorter than a village rooster’s, rings out at dawn.',
      bn: 'লাল বনমোরগ পৃথিবীর সবচেয়ে সংখ্যায় বেশি পাখি — গৃহপালিত মুরগির — বুনো পূর্বপুরুষ। পুরুষ বনমোরগ ছিপছিপে ও ঝলমলে রঙের; ঘাড়ে সোনালি-কমলা পালক, মাথায় লাল ঝুঁটি আর লম্বা বাঁকানো সবুজাভ-কালো লেজ। বাংলাদেশে সুন্দরবন এবং সিলেট ও চট্টগ্রামের পাহাড়ি বনে এরা এখনো টিকে আছে; ভোরে এদের ডাক গ্রামের মোরগের চেয়ে ছোট ও তীক্ষ্ণ শোনায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Galliformes',
      family: 'Phasianidae',
      genus: 'Gallus',
      species: 'G. gallus',
    },
    physical: {
      size: { en: 'Male about 65–75 cm including tail; female about 42–46 cm', bn: 'পুরুষ লেজসহ প্রায় ৬৫–৭৫ সেমি; স্ত্রী প্রায় ৪২–৪৬ সেমি' },
      weight: { en: 'Male about 0.7–1.5 kg; female about 0.5–1 kg', bn: 'পুরুষ প্রায় ০.৭–১.৫ কেজি; স্ত্রী প্রায় ০.৫–১ কেজি' },
      lifespan: { en: 'Several years in the wild; over 10 years in captivity', bn: 'বনে কয়েক বছর; আবদ্ধ অবস্থায় ১০ বছরের বেশি' },
      features: {
        en: ['Male has golden-orange neck hackles, red comb and wattles', 'Long, arching glossy green-black tail', 'Female is cryptic brown with a small comb'],
        bn: ['পুরুষের ঘাড়ে সোনালি-কমলা পালক, মাথায় লাল ঝুঁটি ও গলায় লাল লতিকা', 'লম্বা, বাঁকানো চকচকে সবুজাভ-কালো লেজ', 'স্ত্রী বনমুরগি ছদ্মবেশী বাদামি রঙের, ঝুঁটি ছোট'],
      },
    },
    habitat: {
      en: 'Forest edges, bamboo thickets, secondary forest, mangroves and scrub near clearings',
      bn: 'বনের প্রান্ত, বাঁশঝাড়, গৌণ বন, ম্যানগ্রোভ ও ফাঁকা জায়গার কাছের ঝোপঝাড়',
    },
    habitats: ['tropical-forest', 'mangrove'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'From the Himalayan foothills of India and Nepal through Bangladesh, Myanmar and Indochina to southern China, Malaysia, Sumatra and Java.',
      bn: 'ভারত ও নেপালের হিমালয় পাদদেশ থেকে বাংলাদেশ, মিয়ানমার ও ইন্দোচীন হয়ে দক্ষিণ চীন, মালয়েশিয়া, সুমাত্রা ও জাভা পর্যন্ত।',
    },
    climate: { en: 'Tropical and subtropical, humid', bn: 'আর্দ্র ক্রান্তীয় ও উপক্রান্তীয়' },
    diet: {
      en: 'Omnivore — seeds, fallen fruit, bamboo seeds, shoots, insects, worms and small lizards',
      bn: 'সর্বভুক — বীজ, ঝরে পড়া ফল, বাঁশের বীজ, কচি ডগা, পোকামাকড়, কেঁচো ও ছোট টিকটিকি',
    },
    ecologicalRole: {
      en: 'Scratches the forest floor, spreading seeds and controlling insects, and is prey for cats, raptors and snakes.',
      bn: 'বনের মাটি আঁচড়ে বীজ ছড়ায় ও পোকা নিয়ন্ত্রণ করে; বনবিড়াল, শিকারি পাখি ও সাপের খাদ্য।',
    },
    behavior: {
      en: 'Shy and wary; feeds in small groups at dawn and dusk, roosts in trees and flies strongly when alarmed.',
      bn: 'লাজুক ও সতর্ক; ভোর ও সন্ধ্যায় ছোট দলে খাবার খোঁজে, রাতে গাছে থাকে এবং ভয় পেলে জোরে উড়ে পালায়।',
    },
    range: {
      native: [[24.3, 91.8], [22.0, 89.5], [22.2, 92.2], [29.5, 78.8], [27.5, 84.4], [15.0, 101.0], [21.0, 105.8], [-7.5, 110.5]],
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Hunting and snaring for meat', 'Hybridisation with free-ranging domestic chickens', 'Forest loss and degradation'],
        bn: ['মাংসের জন্য শিকার ও ফাঁদ পাতা', 'ছেড়ে রাখা গৃহপালিত মুরগির সঙ্গে সংকরায়ণ', 'বন উজাড় ও বনের অবক্ষয়'],
      },
      initiatives: {
        en: ['Protected in Lawachara, Satchari and the Sundarbans reserves in Bangladesh', 'Genetic studies to identify pure wild populations'],
        bn: ['বাংলাদেশের লাউয়াছড়া, সাতছড়ি ও সুন্দরবনের সংরক্ষিত এলাকায় সুরক্ষা', 'বিশুদ্ধ বুনো জনগোষ্ঠী শনাক্তে জিনগত গবেষণা'],
      },
    },
    facts: {
      en: [
        'All domestic chickens descend mainly from this species, domesticated in Southeast Asia thousands of years ago.',
        'Unlike most domestic roosters, wild males moult into a dull “eclipse” neck plumage after breeding.',
      ],
      bn: [
        'পৃথিবীর সব গৃহপালিত মুরগি মূলত এই প্রজাতি থেকে এসেছে; হাজার হাজার বছর আগে দক্ষিণ-পূর্ব এশিয়ায় একে পোষ মানানো হয়।',
        'গৃহপালিত মোরগের বিপরীতে প্রজনন শেষে বুনো মোরগের ঘাড়ের রঙিন পালক ঝরে গিয়ে সাময়িকভাবে নিষ্প্রভ পালক গজায়।',
      ],
    },
    related: ['kalij-pheasant', 'indian-peafowl'],
  },
  {
    id: 'kalij-pheasant',
    commonName: { en: 'Kalij Pheasant', bn: 'কালো মথুরা' },
    scientificName: 'Lophura leucomelanos',
    altNames: {
      en: ['Kalij', 'Kaleej Pheasant'],
      bn: ['মথুরা', 'কালিজ মথুরা'],
    },
    category: 'birds',
    wikiTitle: 'Kalij pheasant',
    description: {
      en: 'The kalij pheasant is a medium-sized forest pheasant of the Himalayas and the hills of northeast India, Bangladesh and Myanmar. Males are glossy blue-black with a drooping crest and bare red facial skin, while females are warm brown. In Bangladesh it survives in the evergreen hill forests of Sylhet and Chattogram, where it is rarely seen but often heard scratching in the leaf litter.',
      bn: 'কালো মথুরা হিমালয় এবং উত্তর-পূর্ব ভারত, বাংলাদেশ ও মিয়ানমারের পাহাড়ি বনের মাঝারি আকারের একটি বুনো মুরগিজাতীয় পাখি। পুরুষ পাখি চকচকে নীলাভ-কালো, মাথায় পেছনে ঝুলে থাকা ঝুঁটি আর চোখের চারপাশে লাল খোলা চামড়া; স্ত্রী পাখি উষ্ণ বাদামি রঙের। বাংলাদেশে সিলেট ও চট্টগ্রামের চিরসবুজ পাহাড়ি বনে এরা টিকে আছে — দেখা পাওয়া কঠিন হলেও শুকনো পাতা আঁচড়ানোর শব্দ প্রায়ই শোনা যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Galliformes',
      family: 'Phasianidae',
      genus: 'Lophura',
      species: 'L. leucomelanos',
    },
    physical: {
      size: { en: 'Male about 63–74 cm; female about 50–60 cm', bn: 'পুরুষ প্রায় ৬৩–৭৪ সেমি; স্ত্রী প্রায় ৫০–৬০ সেমি' },
      weight: { en: 'About 0.8–1.2 kg', bn: 'প্রায় ০.৮–১.২ কেজি' },
      lifespan: { en: 'Several years; over 10 years in captivity', bn: 'কয়েক বছর; আবদ্ধ অবস্থায় ১০ বছরের বেশি' },
      features: {
        en: ['Male glossy blue-black, with white barring on the rump in some subspecies', 'Bare scarlet skin around the eye', 'Long, drooping crest and arched tail'],
        bn: ['পুরুষ চকচকে নীলাভ-কালো; কিছু উপপ্রজাতির কোমরে সাদা ডোরা', 'চোখের চারপাশে টকটকে লাল খোলা চামড়া', 'পেছনে ঝুলে থাকা লম্বা ঝুঁটি ও বাঁকানো লেজ'],
      },
    },
    habitat: {
      en: 'Dense undergrowth in evergreen and deciduous hill forests, bamboo and forest edges',
      bn: 'চিরসবুজ ও পর্ণমোচী পাহাড়ি বনের ঘন ঝোপ, বাঁশবন ও বনের প্রান্ত',
    },
    habitats: ['tropical-forest', 'mountain', 'temperate-forest'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Himalayas from Pakistan through Nepal and Bhutan to northeast India, Bangladesh, Myanmar and western Thailand; introduced to Hawaii.',
      bn: 'পাকিস্তান থেকে নেপাল ও ভুটান হয়ে হিমালয় অঞ্চল, উত্তর-পূর্ব ভারত, বাংলাদেশ, মিয়ানমার ও পশ্চিম থাইল্যান্ড; হাওয়াইয়ে মানুষের মাধ্যমে ছড়িয়েছে।',
    },
    climate: { en: 'Subtropical to temperate, monsoon-influenced', bn: 'মৌসুমি প্রভাবিত উপক্রান্তীয় থেকে নাতিশীতোষ্ণ' },
    diet: {
      en: 'Omnivore — seeds, berries, bamboo seeds, roots, insects and termites',
      bn: 'সর্বভুক — বীজ, বেরি, বাঁশের বীজ, শিকড়, পোকামাকড় ও উইপোকা',
    },
    ecologicalRole: {
      en: 'Turns over leaf litter while foraging, aiding seed dispersal and nutrient cycling, and is prey for leopards and raptors.',
      bn: 'খাবার খুঁজতে গিয়ে ঝরা পাতা উল্টে দেয়, ফলে বীজ ছড়ানো ও পুষ্টি চক্রে সাহায্য করে; চিতাবাঘ ও শিকারি পাখির খাদ্য।',
    },
    behavior: {
      en: 'Lives in pairs or family groups; males make a loud whirring sound with their wings during display.',
      bn: 'জোড়ায় বা পারিবারিক দলে থাকে; প্রদর্শনের সময় পুরুষ ডানা ঝাপটে জোরালো গুঞ্জনের মতো শব্দ করে।',
    },
    range: {
      native: [[30.4, 78.0], [27.7, 85.3], [27.4, 90.5], [24.3, 91.8], [22.0, 92.3], [21.0, 96.0], [18.8, 98.9]],
      introduced: [[19.6, -155.5]],
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Hunting and snaring', 'Hill forest clearing for shifting cultivation and plantations'],
        bn: ['শিকার ও ফাঁদ পাতা', 'জুমচাষ ও বাগানের জন্য পাহাড়ি বন উজাড়'],
      },
      initiatives: {
        en: ['Protected in Lawachara National Park and Rema-Kalenga Wildlife Sanctuary', 'Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012'],
        bn: ['লাউয়াছড়া জাতীয় উদ্যান ও রেমা-কালেঙ্গা বন্যপ্রাণী অভয়ারণ্যে সুরক্ষা', 'বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর অধীনে সুরক্ষিত'],
      },
    },
    facts: {
      en: [
        'Kalij were released on Hawaii’s Big Island in 1962 and are now established there.',
        'Several subspecies differ markedly in colour, from all-black to black with white-barred backs.',
      ],
      bn: [
        '১৯৬২ সালে হাওয়াইয়ের বিগ আইল্যান্ডে মথুরা ছাড়া হয়, এখন সেখানে এরা স্থায়ীভাবে বাস করে।',
        'বিভিন্ন উপপ্রজাতির রঙে বেশ পার্থক্য — কোনোটি পুরো কালো, কোনোটির পিঠে সাদা ডোরা।',
      ],
    },
    related: ['red-junglefowl', 'indian-peafowl'],
  },
  {
    id: 'common-ostrich',
    commonName: { en: 'Common Ostrich', bn: 'উটপাখি' },
    scientificName: 'Struthio camelus',
    altNames: {
      en: ['Ostrich', 'African Ostrich'],
      bn: ['আফ্রিকান উটপাখি', 'অস্ট্রিচ'],
    },
    category: 'birds',
    wikiTitle: 'Common ostrich',
    description: {
      en: 'The common ostrich is the largest and heaviest living bird, a flightless giant of the African savanna. It cannot fly, but it is the fastest-running bird on Earth, reaching speeds of around 70 km/h on its long, two-toed legs. It also lays the largest eggs of any living bird.',
      bn: 'উটপাখি বর্তমানে জীবিত সবচেয়ে বড় ও ভারী পাখি — আফ্রিকার সাভানা তৃণভূমির উড়তে-না-পারা এক দানব। উড়তে না পারলেও দুই আঙুলের লম্বা পায়ে এরা ঘণ্টায় প্রায় ৭০ কিলোমিটার বেগে দৌড়াতে পারে, যা পৃথিবীর যেকোনো পাখির চেয়ে দ্রুত। জীবিত পাখিদের মধ্যে এদের ডিমও সবচেয়ে বড়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Struthioniformes',
      family: 'Struthionidae',
      genus: 'Struthio',
      species: 'S. camelus',
    },
    physical: {
      size: { en: 'About 2.1–2.8 m tall', bn: 'প্রায় ২.১–২.৮ মিটার উঁচু' },
      weight: { en: 'About 63–145 kg', bn: 'প্রায় ৬৩–১৪৫ কেজি' },
      lifespan: { en: 'About 30–40 years; up to about 50 in captivity', bn: 'প্রায় ৩০–৪০ বছর; আবদ্ধ অবস্থায় প্রায় ৫০ বছর পর্যন্ত' },
      features: {
        en: ['Only two toes on each foot, the larger with a hoof-like nail', 'Male black with white wing and tail plumes; female grey-brown', 'Long bare neck and very large eyes'],
        bn: ['প্রতি পায়ে মাত্র দুটি আঙুল, বড়টিতে খুরের মতো নখ', 'পুরুষ কালো, ডানা ও লেজে সাদা পালক; স্ত্রী ধূসর-বাদামি', 'লম্বা পালকহীন গলা ও অনেক বড় চোখ'],
      },
    },
    habitat: {
      en: 'Open savanna, dry grassland, semi-desert and thorn scrub',
      bn: 'খোলা সাভানা, শুষ্ক তৃণভূমি, আধা-মরুভূমি ও কাঁটাঝোপ',
    },
    habitats: ['grassland', 'desert'],
    regions: ['africa'],
    distribution: {
      en: 'Sub-Saharan Africa, from the Sahel to East and southern Africa; feral birds also live in South Australia.',
      bn: 'সাহারার দক্ষিণের আফ্রিকা — সাহেল অঞ্চল থেকে পূর্ব ও দক্ষিণ আফ্রিকা পর্যন্ত; দক্ষিণ অস্ট্রেলিয়ায় খামার থেকে পালানো বুনো উটপাখিও আছে।',
    },
    climate: { en: 'Hot, dry tropical and arid climates', bn: 'উষ্ণ, শুষ্ক ক্রান্তীয় ও মরু জলবায়ু' },
    diet: {
      en: 'Mostly plants — grasses, seeds, shoots and succulents — plus insects and small animals; swallows pebbles to grind food',
      bn: 'মূলত উদ্ভিদ — ঘাস, বীজ, কচি ডগা ও রসালো গাছ — সঙ্গে পোকামাকড় ও ছোট প্রাণী; খাবার পিষতে নুড়িপাথর গিলে ফেলে',
    },
    ecologicalRole: {
      en: 'A large grazer of the savanna that often mixes with zebras and antelopes, sharing vigilance against predators.',
      bn: 'সাভানার বড় তৃণভোজী; প্রায়ই জেব্রা ও হরিণের দলের সঙ্গে চলে এবং একসঙ্গে শিকারির ওপর নজর রাখে।',
    },
    behavior: {
      en: 'Lives in small groups; several females lay eggs in one communal nest guarded by a dominant pair, and males incubate at night.',
      bn: 'ছোট দলে থাকে; কয়েকটি স্ত্রী একটি সাধারণ বাসায় ডিম পাড়ে, যা একটি প্রধান জোড়া পাহারা দেয় — রাতে পুরুষ ডিমে তা দেয়।',
    },
    range: {
      native: [[-22.0, 24.0], [-22.5, 17.0], [-2.3, 34.8], [9.0, 40.0], [13.5, 2.1], [-33.0, 22.0]],
      introduced: [[-31.5, 137.5]],
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Hunting for meat, feathers and eggs', 'Habitat loss to farming and fencing', 'Severe declines in the Sahel'],
        bn: ['মাংস, পালক ও ডিমের জন্য শিকার', 'কৃষিকাজ ও বেড়ার কারণে আবাসস্থল হারানো', 'সাহেল অঞ্চলে সংখ্যা মারাত্মকভাবে কমে যাওয়া'],
      },
      initiatives: {
        en: ['Reintroduction of North African ostriches in Niger, Morocco and Tunisia', 'Protection in national parks across East and southern Africa'],
        bn: ['নাইজার, মরক্কো ও তিউনিসিয়ায় উত্তর আফ্রিকার উটপাখি পুনঃপ্রবর্তন', 'পূর্ব ও দক্ষিণ আফ্রিকার জাতীয় উদ্যানগুলোতে সুরক্ষা'],
      },
    },
    facts: {
      en: [
        'Ostriches do not bury their heads in sand — they lower them to turn eggs or hide by lying flat.',
        'An ostrich egg weighs about 1.4 kg, equal to roughly two dozen chicken eggs.',
        'Its eye is larger than its brain.',
      ],
      bn: [
        'উটপাখি আসলে বালিতে মাথা গোঁজে না — ডিম উল্টাতে মাথা নিচু করে বা লুকাতে মাটিতে গলা বিছিয়ে শুয়ে পড়ে।',
        'একটি উটপাখির ডিমের ওজন প্রায় ১.৪ কেজি, যা প্রায় দুই ডজন মুরগির ডিমের সমান।',
        'উটপাখির চোখ তার মস্তিষ্কের চেয়েও বড়।',
      ],
    },
    related: ['emu', 'southern-cassowary'],
  },
  {
    id: 'emu',
    commonName: { en: 'Emu', bn: 'ইমু' },
    scientificName: 'Dromaius novaehollandiae',
    altNames: {
      en: ['Australian Emu'],
      bn: ['ইমু পাখি'],
    },
    category: 'birds',
    wikiTitle: 'Emu',
    description: {
      en: 'The emu is Australia’s largest native bird and the second-tallest living bird after the ostrich. Shaggy grey-brown feathers cover its body, and it can sprint at around 50 km/h and travel great distances in search of food and water. It appears on Australia’s coat of arms alongside the kangaroo.',
      bn: 'ইমু অস্ট্রেলিয়ার সবচেয়ে বড় স্থানীয় পাখি এবং উটপাখির পরে পৃথিবীর দ্বিতীয় উচ্চতম জীবিত পাখি। এদের শরীর এলোমেলো ধূসর-বাদামি পালকে ঢাকা; ঘণ্টায় প্রায় ৫০ কিলোমিটার বেগে দৌড়াতে পারে এবং খাবার ও পানির খোঁজে বহু দূর পাড়ি দেয়। ক্যাঙারুর সঙ্গে ইমুও অস্ট্রেলিয়ার জাতীয় প্রতীকে স্থান পেয়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Casuariiformes',
      family: 'Dromaiidae',
      genus: 'Dromaius',
      species: 'D. novaehollandiae',
    },
    physical: {
      size: { en: 'About 1.5–1.9 m tall', bn: 'প্রায় ১.৫–১.৯ মিটার উঁচু' },
      weight: { en: 'About 18–60 kg', bn: 'প্রায় ১৮–৬০ কেজি' },
      lifespan: { en: 'About 10–20 years in the wild', bn: 'বনে প্রায় ১০–২০ বছর' },
      features: {
        en: ['Shaggy, double-shafted grey-brown feathers', 'Bluish bare skin on the neck', 'Three-toed feet and tiny vestigial wings'],
        bn: ['এলোমেলো, দুই শাখাওয়ালা ধূসর-বাদামি পালক', 'গলায় নীলচে খোলা চামড়া', 'তিন আঙুলের পা ও খুব ছোট অকেজো ডানা'],
      },
    },
    habitat: {
      en: 'Grassland, savanna woodland, scrub and semi-arid plains; avoids dense rainforest and true desert',
      bn: 'তৃণভূমি, সাভানা বন, ঝোপঝাড় ও আধা-শুষ্ক সমভূমি; ঘন বৃষ্টিবন ও প্রকৃত মরুভূমি এড়িয়ে চলে',
    },
    habitats: ['grassland', 'desert'],
    regions: ['oceania'],
    distribution: {
      en: 'Found across most of mainland Australia; the island forms of Tasmania and King Island are extinct.',
      bn: 'অস্ট্রেলিয়ার মূল ভূখণ্ডের বেশির ভাগ এলাকায় পাওয়া যায়; তাসমানিয়া ও কিং আইল্যান্ডের দ্বীপজ রূপগুলো বিলুপ্ত।',
    },
    climate: { en: 'Arid to temperate', bn: 'শুষ্ক থেকে নাতিশীতোষ্ণ' },
    diet: {
      en: 'Fruit, seeds, flowers, young shoots and insects such as grasshoppers and caterpillars',
      bn: 'ফল, বীজ, ফুল, কচি ডগা এবং ফড়িং ও শুঁয়োপোকার মতো পোকামাকড়',
    },
    ecologicalRole: {
      en: 'A key long-distance seed disperser of Australian plants.',
      bn: 'অস্ট্রেলিয়ার উদ্ভিদের বীজ বহু দূরে ছড়িয়ে দেওয়ায় গুরুত্বপূর্ণ ভূমিকা রাখে।',
    },
    behavior: {
      en: 'Nomadic, following rainfall; the male alone incubates the eggs for about eight weeks, barely eating, and raises the chicks.',
      bn: 'বৃষ্টির খোঁজে যাযাবরের মতো ঘুরে বেড়ায়; পুরুষ ইমু একাই প্রায় আট সপ্তাহ প্রায় না খেয়ে ডিমে তা দেয় এবং ছানাদের বড় করে।',
    },
    range: {
      native: [[-25.0, 135.0], [-31.0, 121.0], [-33.0, 146.0], [-20.0, 145.0], [-28.0, 150.0], [-36.5, 143.5]],
      endemicTo: { en: 'Australia', bn: 'অস্ট্রেলিয়া' },
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Vehicle collisions and fences', 'Predation of eggs and chicks by foxes, dogs and feral pigs', 'Habitat clearing in farming regions'],
        bn: ['গাড়ির ধাক্কা ও কাঁটাতারের বেড়া', 'শিয়াল, কুকুর ও বুনো শূকরের হাতে ডিম ও ছানা শিকার', 'কৃষি এলাকায় আবাসস্থল পরিষ্কার'],
      },
      initiatives: {
        en: ['Protection under Australian state wildlife laws', 'Fox control programmes in conservation areas'],
        bn: ['অস্ট্রেলিয়ার রাজ্যভিত্তিক বন্যপ্রাণী আইনে সুরক্ষা', 'সংরক্ষিত এলাকায় শিয়াল নিয়ন্ত্রণ কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'In the 1932 “Emu War”, Australian soldiers with machine guns failed to reduce emu numbers in Western Australia.',
        'Emus are farmed in several countries, including India, for meat and oil.',
        'Females make deep booming sounds using an inflatable throat sac.',
      ],
      bn: [
        '১৯৩২ সালের “ইমু যুদ্ধে” পশ্চিম অস্ট্রেলিয়ায় মেশিনগানধারী সৈন্যরাও ইমুর সংখ্যা কমাতে ব্যর্থ হয়েছিল।',
        'ভারতসহ কয়েকটি দেশে মাংস ও তেলের জন্য ইমু পালন করা হয়।',
        'স্ত্রী ইমু গলার ফোলানো থলি দিয়ে গম্ভীর ঢাকের মতো শব্দ করে।',
      ],
    },
    related: ['common-ostrich', 'southern-cassowary', 'superb-lyrebird'],
  },
  {
    id: 'southern-cassowary',
    commonName: { en: 'Southern Cassowary', bn: 'দক্ষিণের ক্যাসোয়ারি' },
    scientificName: 'Casuarius casuarius',
    altNames: {
      en: ['Cassowary', 'Double-wattled Cassowary', 'Australian Cassowary'],
      bn: ['ক্যাসোয়ারি', 'দুই-লতিকার ক্যাসোয়ারি', 'অস্ট্রেলীয় ক্যাসোয়ারি'],
    },
    category: 'birds',
    wikiTitle: 'Southern cassowary',
    description: {
      en: 'The southern cassowary is a huge flightless bird of the rainforests of New Guinea and northeastern Australia, with glossy black plumage, a bright blue neck and a tall horn-like casque on its head. Each foot bears a dagger-like inner claw, making it one of the few birds capable of seriously injuring a person. It is a vital “rainforest gardener”, swallowing whole fruits and dispersing their large seeds.',
      bn: 'দক্ষিণের ক্যাসোয়ারি নিউ গিনি ও উত্তর-পূর্ব অস্ট্রেলিয়ার বৃষ্টিবনের উড়তে-না-পারা বিশাল পাখি; এদের পালক চকচকে কালো, গলা উজ্জ্বল নীল আর মাথায় শিংয়ের মতো উঁচু শক্ত ঢিবি (ক্যাস্ক)। প্রতি পায়ের ভেতরের আঙুলে ছোরার মতো ধারালো নখ থাকে, তাই এটি মানুষকে গুরুতর আহত করতে পারে এমন অল্প কয়েকটি পাখির একটি। আস্ত ফল গিলে বড় বড় বীজ ছড়িয়ে দেয় বলে একে “বৃষ্টিবনের মালি” বলা হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Casuariiformes',
      family: 'Casuariidae',
      genus: 'Casuarius',
      species: 'C. casuarius',
    },
    physical: {
      size: { en: 'About 1.5–1.8 m tall; females larger than males', bn: 'প্রায় ১.৫–১.৮ মিটার উঁচু; স্ত্রী পুরুষের চেয়ে বড়' },
      weight: { en: 'Females often around 55–70 kg; males lighter', bn: 'স্ত্রী প্রায়ই ৫৫–৭০ কেজি; পুরুষ তুলনামূলক হালকা' },
      lifespan: { en: 'Probably 40 years or more in the wild', bn: 'বনে সম্ভবত ৪০ বছর বা তার বেশি' },
      features: {
        en: ['Tall, helmet-like casque on the head', 'Bright blue neck with two red wattles', 'Inner toe with a claw up to about 12 cm long'],
        bn: ['মাথায় হেলমেটের মতো উঁচু ক্যাস্ক', 'উজ্জ্বল নীল গলায় দুটি লাল লতিকা', 'ভেতরের আঙুলে প্রায় ১২ সেমি পর্যন্ত লম্বা নখ'],
      },
    },
    habitat: {
      en: 'Tropical rainforest, adjacent swamp forest and mangrove edges',
      bn: 'ক্রান্তীয় বৃষ্টিবন, এর পাশের জলাবন ও ম্যানগ্রোভের প্রান্ত',
    },
    habitats: ['tropical-forest', 'wetland'],
    regions: ['oceania'],
    distribution: {
      en: 'Southern New Guinea and nearby islands, and the Wet Tropics and Cape York Peninsula of Queensland, Australia.',
      bn: 'দক্ষিণ নিউ গিনি ও আশপাশের দ্বীপ এবং অস্ট্রেলিয়ার কুইন্সল্যান্ডের ওয়েট ট্রপিকস ও কেপ ইয়র্ক উপদ্বীপ।',
    },
    climate: { en: 'Hot, humid tropical', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয়' },
    diet: {
      en: 'Mainly fallen fruit; also fungi, insects and small vertebrates',
      bn: 'মূলত মাটিতে পড়া ফল; এছাড়া ছত্রাক, পোকামাকড় ও ছোট মেরুদণ্ডী প্রাণী',
    },
    ecologicalRole: {
      en: 'The only animal able to disperse the seeds of some large-fruited rainforest trees.',
      bn: 'বৃষ্টিবনের কিছু বড় ফলের গাছের বীজ ছড়াতে পারে একমাত্র এই পাখিই।',
    },
    behavior: {
      en: 'Solitary and shy; the male incubates the eggs and raises the striped chicks for up to nine months.',
      bn: 'একাকী ও লাজুক; পুরুষ ক্যাসোয়ারি ডিমে তা দেয় এবং ডোরাকাটা ছানাদের প্রায় নয় মাস পর্যন্ত লালন করে।',
    },
    range: {
      native: [[-17.5, 145.9], [-16.2, 145.4], [-12.5, 142.9], [-8.0, 141.0], [-6.5, 143.5], [-4.0, 136.5]],
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Rainforest clearing for housing and agriculture', 'Road deaths and dog attacks in Australia', 'Hunting in New Guinea'],
        bn: ['আবাসন ও কৃষির জন্য বৃষ্টিবন উজাড়', 'অস্ট্রেলিয়ায় গাড়ির ধাক্কা ও কুকুরের আক্রমণ', 'নিউ গিনিতে শিকার'],
      },
      initiatives: {
        en: ['Listed as Endangered under Australian national law, with recovery plans', 'Wildlife corridors and road-crossing signs in Queensland’s Wet Tropics'],
        bn: ['অস্ট্রেলিয়ার জাতীয় আইনে বিপন্ন হিসেবে তালিকাভুক্ত ও পুনরুদ্ধার পরিকল্পনা', 'কুইন্সল্যান্ডের ওয়েট ট্রপিকসে বন্যপ্রাণী করিডোর ও সড়ক পারাপার সতর্কচিহ্ন'],
      },
    },
    facts: {
      en: [
        'Cassowaries can run at around 50 km/h and are strong swimmers.',
        'They produce very low-frequency booming calls that travel through dense forest.',
        'Their feet and claws are often compared to those of dinosaurs.',
      ],
      bn: [
        'ক্যাসোয়ারি ঘণ্টায় প্রায় ৫০ কিলোমিটার বেগে দৌড়াতে পারে এবং ভালো সাঁতারু।',
        'এরা খুব নিম্ন কম্পাঙ্কের গুমগুম শব্দ করে, যা ঘন বনের ভেতর দিয়ে দূরে পৌঁছায়।',
        'এদের পা ও নখের গঠনকে প্রায়ই ডাইনোসরের সঙ্গে তুলনা করা হয়।',
      ],
    },
    related: ['emu', 'common-ostrich', 'greater-bird-of-paradise'],
  },
  {
    id: 'greater-bird-of-paradise',
    commonName: { en: 'Greater Bird-of-paradise', bn: 'বড় স্বর্গপাখি' },
    scientificName: 'Paradisaea apoda',
    altNames: {
      en: ['Bird of Paradise', 'Bird-of-paradise'],
      bn: ['স্বর্গপাখি', 'বার্ড অব প্যারাডাইস'],
    },
    category: 'birds',
    wikiTitle: 'Greater bird-of-paradise',
    description: {
      en: 'The greater bird-of-paradise is the largest member of its genus and one of the most spectacular birds of New Guinea. Males have a yellow crown, an emerald-green throat and cascades of golden-yellow and white flank plumes, which they raise and shake in group displays high in the rainforest canopy. Its plumes were once so prized in Europe that skins were traded for centuries.',
      bn: 'বড় স্বর্গপাখি নিজের গণের সবচেয়ে বড় সদস্য এবং নিউ গিনির সবচেয়ে মনোমুগ্ধকর পাখিদের একটি। পুরুষের মাথা হলুদ, গলা পান্না-সবুজ আর দুই পাশ থেকে সোনালি-হলুদ ও সাদা লম্বা পালকের ঝালর নেমে আসে; বৃষ্টিবনের উঁচু ডালে দল বেঁধে এরা সেই পালক তুলে নেচে নেচে প্রদর্শন করে। একসময় ইউরোপে এর পালক এত মূল্যবান ছিল যে শতাব্দীর পর শতাব্দী এর চামড়ার ব্যবসা চলেছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Paradisaeidae',
      genus: 'Paradisaea',
      species: 'P. apoda',
    },
    physical: {
      size: { en: 'Male about 43 cm long, excluding the long tail wires', bn: 'লেজের লম্বা তারের মতো পালক বাদে পুরুষ প্রায় ৪৩ সেমি' },
      weight: { en: 'A few hundred grams', bn: 'কয়েকশ গ্রাম' },
      lifespan: { en: 'Not well known; probably several years', bn: 'ভালোভাবে জানা নেই; সম্ভবত কয়েক বছর' },
      features: {
        en: ['Long golden-yellow and white flank plumes in males', 'Iridescent emerald-green throat and yellow crown', 'Two long wire-like central tail feathers'],
        bn: ['পুরুষের দুই পাশে লম্বা সোনালি-হলুদ ও সাদা পালকের ঝালর', 'ঝলমলে পান্না-সবুজ গলা ও হলুদ মাথা', 'লেজের মাঝখানে দুটি লম্বা তারের মতো পালক'],
      },
    },
    habitat: {
      en: 'Lowland and hill rainforest',
      bn: 'নিম্নভূমি ও পাহাড়ি বৃষ্টিবন',
    },
    habitats: ['tropical-forest'],
    regions: ['oceania'],
    distribution: {
      en: 'Southwestern New Guinea (Indonesia and Papua New Guinea) and the Aru Islands.',
      bn: 'দক্ষিণ-পশ্চিম নিউ গিনি (ইন্দোনেশিয়া ও পাপুয়া নিউ গিনি) এবং আরু দ্বীপপুঞ্জ।',
    },
    climate: { en: 'Hot, humid tropical', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয়' },
    diet: {
      en: 'Mainly fruit, plus insects and other arthropods',
      bn: 'মূলত ফল, সঙ্গে পোকামাকড় ও অন্যান্য সন্ধিপদী প্রাণী',
    },
    ecologicalRole: {
      en: 'Disperses the seeds of many rainforest fruiting trees.',
      bn: 'বৃষ্টিবনের বহু ফলগাছের বীজ ছড়িয়ে দেয়।',
    },
    behavior: {
      en: 'Males gather at traditional display trees (leks) and perform group dances to attract females, who raise the young alone.',
      bn: 'পুরুষেরা নির্দিষ্ট প্রদর্শনী গাছে (লেক) জড়ো হয়ে দলবদ্ধ নাচ দেখিয়ে স্ত্রীকে আকৃষ্ট করে; স্ত্রী একাই ছানা বড় করে।',
    },
    range: {
      native: [[-6.2, 134.4], [-7.5, 140.5], [-6.5, 142.0], [-7.8, 139.0], [-5.8, 138.2]],
      endemicTo: { en: 'New Guinea and the Aru Islands', bn: 'নিউ গিনি ও আরু দ্বীপপুঞ্জ' },
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Logging and oil-palm expansion in lowland New Guinea', 'Local hunting for plumes'],
        bn: ['নিউ গিনির নিম্নভূমিতে কাঠ সংগ্রহ ও পাম তেলের বাগান সম্প্রসারণ', 'পালকের জন্য স্থানীয় শিকার'],
      },
      initiatives: {
        en: ['International trade regulated under CITES Appendix II', 'Community-based ecotourism at display sites'],
        bn: ['সাইটেস পরিশিষ্ট-২-এর অধীনে আন্তর্জাতিক বাণিজ্য নিয়ন্ত্রিত', 'প্রদর্শনী এলাকায় স্থানীয় জনগোষ্ঠীভিত্তিক ইকোট্যুরিজম'],
      },
    },
    facts: {
      en: [
        'Its name apoda means “footless”: early trade skins had their feet removed, so Europeans believed the birds never landed.',
        'A bird-of-paradise appears on the flag of Papua New Guinea.',
      ],
      bn: [
        'এর বৈজ্ঞানিক নাম apoda অর্থ “পা-হীন” — ব্যবসার চামড়ায় পা কেটে ফেলা থাকত, তাই ইউরোপীয়রা ভাবত এরা কখনো মাটিতে নামে না।',
        'পাপুয়া নিউ গিনির জাতীয় পতাকায় স্বর্গপাখির ছবি আছে।',
      ],
    },
    related: ['superb-lyrebird', 'southern-cassowary', 'indian-peafowl'],
  },
  {
    id: 'european-robin',
    commonName: { en: 'European Robin', bn: 'ইউরোপীয় রবিন' },
    scientificName: 'Erithacus rubecula',
    altNames: {
      en: ['Robin', 'Robin Redbreast'],
      bn: ['রবিন', 'লালবুক রবিন'],
    },
    category: 'birds',
    wikiTitle: 'European robin',
    description: {
      en: 'The European robin is a small, plump songbird with an orange-red face and breast, one of the best-loved garden birds of Europe. Despite its gentle image it is fiercely territorial, and both males and females sing through the winter to defend their patch. In Britain it often follows gardeners closely to snatch worms turned up by the spade.',
      bn: 'ইউরোপীয় রবিন কমলা-লাল মুখ ও বুকের ছোট, গোলগাল গায়ক পাখি এবং ইউরোপের সবচেয়ে প্রিয় বাগানের পাখিগুলোর একটি। শান্ত চেহারার আড়ালে এরা ভীষণ এলাকাপ্রিয় — নিজের এলাকা রক্ষায় পুরুষ ও স্ত্রী উভয়েই শীতকালেও গান গায়। ব্রিটেনে মাটি কোপানোর সময় উঠে আসা কেঁচো ধরতে এরা প্রায়ই মালির খুব কাছে ঘুরঘুর করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Muscicapidae',
      genus: 'Erithacus',
      species: 'E. rubecula',
    },
    physical: {
      size: { en: 'About 12.5–14 cm long', bn: 'প্রায় ১২.৫–১৪ সেমি লম্বা' },
      weight: { en: 'About 16–22 g', bn: 'প্রায় ১৬–২২ গ্রাম' },
      lifespan: { en: 'Usually about 2 years; a few live much longer', bn: 'সাধারণত প্রায় ২ বছর; অল্প কিছু অনেক বেশি দিন বাঁচে' },
      features: {
        en: ['Orange-red face and breast edged with grey', 'Olive-brown back and whitish belly', 'Large dark eyes suited to feeding in dim light'],
        bn: ['ধূসর কিনারাসহ কমলা-লাল মুখ ও বুক', 'জলপাই-বাদামি পিঠ ও সাদাটে পেট', 'আবছা আলোয় খাবার খোঁজার উপযোগী বড় কালো চোখ'],
      },
    },
    habitat: {
      en: 'Woodland, hedgerows, parks and gardens',
      bn: 'বনভূমি, ঝোপের বেড়া, পার্ক ও বাগান',
    },
    habitats: ['temperate-forest', 'urban-farmland'],
    regions: ['europe', 'africa'],
    distribution: {
      en: 'Throughout Europe east to western Siberia and Iran, and in North Africa; northern and eastern birds migrate south in winter.',
      bn: 'সমগ্র ইউরোপ থেকে পূর্বে পশ্চিম সাইবেরিয়া ও ইরান পর্যন্ত এবং উত্তর আফ্রিকায়; উত্তর ও পূর্বের পাখিরা শীতে দক্ষিণে চলে যায়।',
    },
    climate: { en: 'Temperate and Mediterranean', bn: 'নাতিশীতোষ্ণ ও ভূমধ্যসাগরীয়' },
    diet: {
      en: 'Insects, worms, spiders and other invertebrates, plus berries and seeds in winter',
      bn: 'পোকামাকড়, কেঁচো, মাকড়সা ও অন্যান্য অমেরুদণ্ডী প্রাণী; শীতে বেরি ও বীজ',
    },
    ecologicalRole: {
      en: 'Controls garden and woodland invertebrates and spreads the seeds of berry-bearing shrubs.',
      bn: 'বাগান ও বনের অমেরুদণ্ডী প্রাণী নিয়ন্ত্রণ করে এবং বেরি-ধরা গুল্মের বীজ ছড়ায়।',
    },
    behavior: {
      en: 'Strongly territorial year-round; sings even at night near streetlights and readily attacks rival robins.',
      bn: 'সারা বছর কঠোরভাবে এলাকাপ্রিয়; রাস্তার বাতির কাছে রাতেও গান গায় এবং প্রতিদ্বন্দ্বী রবিনকে সহজেই আক্রমণ করে।',
    },
    range: {
      native: [[51.5, -0.1], [48.9, 2.3], [52.5, 13.4], [40.4, -3.7], [59.3, 18.0], [41.0, 29.0], [36.8, 3.0]],
    },
    conservation: {
      status: 'LC',
      trend: 'increasing',
      threats: {
        en: ['Predation by domestic cats', 'Harsh winters causing high mortality'],
        bn: ['পোষা বিড়ালের শিকার', 'কঠিন শীতে ব্যাপক মৃত্যু'],
      },
      initiatives: {
        en: ['Garden bird feeding and nest-box schemes', 'Long-term monitoring through bird ringing and garden bird surveys'],
        bn: ['বাগানে পাখিকে খাবার দেওয়া ও কৃত্রিম বাসা স্থাপন কর্মসূচি', 'পায়ে রিং পরানো ও বাগানের পাখি জরিপের মাধ্যমে দীর্ঘমেয়াদি পর্যবেক্ষণ'],
      },
    },
    facts: {
      en: [
        'It was voted Britain’s national bird in a popular poll in 2015.',
        'The robin was among the first birds shown to navigate using the Earth’s magnetic field.',
        'Robins are a traditional symbol on British Christmas cards.',
      ],
      bn: [
        '২০১৫ সালের এক জনপ্রিয় ভোটে রবিন ব্রিটেনের জাতীয় পাখি নির্বাচিত হয়।',
        'পৃথিবীর চৌম্বকক্ষেত্র ব্যবহার করে পথ চেনার প্রমাণ যেসব পাখিতে প্রথম পাওয়া যায়, রবিন তাদের একটি।',
        'ব্রিটিশ বড়দিনের কার্ডে রবিন একটি প্রথাগত প্রতীক।',
      ],
    },
    related: ['oriental-magpie-robin', 'house-sparrow', 'barn-swallow'],
  },
  {
    id: 'common-raven',
    commonName: { en: 'Common Raven', bn: 'পাতি র‍্যাভেন' },
    scientificName: 'Corvus corax',
    altNames: {
      en: ['Raven', 'Northern Raven'],
      bn: ['র‍্যাভেন', 'বড় দাঁড়কাক'],
    },
    category: 'birds',
    wikiTitle: 'Common raven',
    description: {
      en: 'The common raven is the largest of all songbirds and one of the most widespread birds of the Northern Hemisphere, found from Arctic tundra to hot deserts. All black, with a heavy bill, shaggy throat feathers and a wedge-shaped tail, it is famed for its intelligence, problem-solving and playful aerial acrobatics. Ravens feature prominently in the myths of Norse, Celtic and Native American cultures.',
      bn: 'পাতি র‍্যাভেন সব গায়ক পাখির (প্যাসেরিন) মধ্যে সবচেয়ে বড় এবং উত্তর গোলার্ধের অন্যতম বিস্তৃত পাখি — আর্কটিক তুন্দ্রা থেকে উষ্ণ মরুভূমি পর্যন্ত এদের দেখা মেলে। পুরো কালো শরীর, ভারী ঠোঁট, গলায় এলোমেলো পালক আর কীলকাকৃতির লেজের এই পাখি বুদ্ধিমত্তা, সমস্যা সমাধানের দক্ষতা ও আকাশে খেলাচ্ছলে ডিগবাজির জন্য বিখ্যাত। নর্স, কেল্টিক ও আদিবাসী আমেরিকান পুরাণে র‍্যাভেনের বিশেষ স্থান রয়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Corvidae',
      genus: 'Corvus',
      species: 'C. corax',
    },
    physical: {
      size: { en: 'About 56–69 cm long; wingspan up to about 1.5 m', bn: 'প্রায় ৫৬–৬৯ সেমি লম্বা; ডানার বিস্তার প্রায় ১.৫ মিটার পর্যন্ত' },
      weight: { en: 'About 0.7–2 kg', bn: 'প্রায় ০.৭–২ কেজি' },
      lifespan: { en: 'About 10–15 years in the wild; much longer in captivity', bn: 'বনে প্রায় ১০–১৫ বছর; আবদ্ধ অবস্থায় আরও অনেক বেশি' },
      features: {
        en: ['Entirely glossy black plumage', 'Massive bill and shaggy throat hackles', 'Wedge-shaped tail in flight'],
        bn: ['পুরো শরীর চকচকে কালো পালকে ঢাকা', 'বিশাল ঠোঁট ও গলায় এলোমেলো লম্বা পালক', 'ওড়ার সময় লেজ কীলকের মতো দেখায়'],
      },
    },
    habitat: {
      en: 'Mountains, sea cliffs, forests, tundra, deserts and increasingly towns',
      bn: 'পাহাড়, সমুদ্রতীরের খাড়া পাথুরে ঢাল, বন, তুন্দ্রা, মরুভূমি এবং ক্রমবর্ধমানভাবে শহরাঞ্চল',
    },
    habitats: ['mountain', 'temperate-forest', 'desert', 'polar'],
    regions: ['europe', 'north-america', 'east-asia', 'south-asia', 'africa'],
    distribution: {
      en: 'Across Europe, northern and Central Asia, the Himalayas, North Africa and North America south to Central America.',
      bn: 'ইউরোপ, উত্তর ও মধ্য এশিয়া, হিমালয়, উত্তর আফ্রিকা এবং উত্তর আমেরিকা থেকে দক্ষিণে মধ্য আমেরিকা পর্যন্ত।',
    },
    climate: { en: 'From Arctic to hot desert climates', bn: 'আর্কটিক থেকে উষ্ণ মরু জলবায়ু পর্যন্ত' },
    diet: {
      en: 'Omnivore — carrion, small animals, eggs, insects, grain, fruit and human food waste',
      bn: 'সর্বভুক — মরা প্রাণী, ছোট প্রাণী, ডিম, পোকামাকড়, শস্য, ফল ও মানুষের খাবারের উচ্ছিষ্ট',
    },
    ecologicalRole: {
      en: 'An important scavenger that often leads wolves and other predators to carcasses and vice versa.',
      bn: 'গুরুত্বপূর্ণ মৃতভোজী পাখি; প্রায়ই নেকড়ে ও অন্য শিকারিদের মরা প্রাণীর কাছে নিয়ে যায়, আবার তাদের অনুসরণও করে।',
    },
    behavior: {
      en: 'Pairs mate for life and hold large territories; young birds gather in roosts and share information about food.',
      bn: 'জোড়া আজীবন একসঙ্গে থাকে ও বড় এলাকা দখলে রাখে; অল্পবয়সী পাখিরা দল বেঁধে রাত কাটায় এবং খাবারের খবর একে অপরকে জানায়।',
    },
    range: {
      native: [[64.1, -21.9], [61.2, -149.9], [36.1, -112.1], [51.5, -3.2], [46.8, 8.2], [47.9, 106.9], [34.2, 77.6], [31.6, -8.0]],
    },
    conservation: {
      status: 'LC',
      trend: 'increasing',
      threats: {
        en: ['Poisoned baits set for predators', 'Persecution by farmers and gamekeepers', 'Lead poisoning from scavenged carcasses'],
        bn: ['শিকারি প্রাণী মারার জন্য রাখা বিষটোপ', 'কৃষক ও শিকার-রক্ষকদের হাতে নিধন', 'মরা প্রাণী খেতে গিয়ে সিসার বিষক্রিয়া'],
      },
      initiatives: {
        en: ['Legal protection in much of Europe and North America', 'Recolonisation of former range following protection'],
        bn: ['ইউরোপ ও উত্তর আমেরিকার বেশির ভাগ অঞ্চলে আইনি সুরক্ষা', 'সুরক্ষার ফলে আগের বিচরণ এলাকায় আবার ফিরে আসা'],
      },
    },
    facts: {
      en: [
        'Legend says Britain will fall if the ravens ever leave the Tower of London.',
        'Ravens can plan ahead and use tools in experiments, rivalling great apes.',
        'In Norse myth the god Odin had two ravens, Huginn and Muninn.',
      ],
      bn: [
        'কিংবদন্তি অনুযায়ী লন্ডন টাওয়ার থেকে র‍্যাভেন চলে গেলে ব্রিটেনের পতন ঘটবে।',
        'পরীক্ষায় দেখা গেছে, র‍্যাভেন আগাম পরিকল্পনা করতে ও হাতিয়ার ব্যবহার করতে পারে — যা বনমানুষদের সমকক্ষ।',
        'নর্স পুরাণে দেবতা ওডিনের হুগিন ও মুনিন নামে দুটি র‍্যাভেন ছিল।',
      ],
    },
    related: ['house-crow', 'bald-eagle'],
  },
  {
    id: 'superb-lyrebird',
    commonName: { en: 'Superb Lyrebird', bn: 'সুপার্ব লায়ারবার্ড' },
    scientificName: 'Menura novaehollandiae',
    altNames: {
      en: ['Lyrebird'],
      bn: ['লায়ারবার্ড'],
    },
    category: 'birds',
    wikiTitle: 'Superb lyrebird',
    description: {
      en: 'The superb lyrebird is a large, ground-dwelling songbird of southeastern Australia’s forests, named for the male’s magnificent lyre-shaped tail. It is one of the world’s greatest vocal mimics, weaving the calls of dozens of other birds — and sometimes camera shutters, car alarms and chainsaws — into its song. Males display on cleared earth mounds, fanning their lacy tail over their heads.',
      bn: 'সুপার্ব লায়ারবার্ড দক্ষিণ-পূর্ব অস্ট্রেলিয়ার বনের মাটিতে চলা বড় আকারের গায়ক পাখি; পুরুষের বীণার (লায়ার) মতো অপূর্ব লেজ থেকেই এর নাম। এটি পৃথিবীর সেরা শব্দ-নকলকারী পাখিদের একটি — নিজের গানে কয়েক ডজন পাখির ডাক, এমনকি কখনো ক্যামেরার শাটার, গাড়ির অ্যালার্ম ও করাতকলের শব্দও জুড়ে দেয়। পুরুষ পরিষ্কার করা মাটির ঢিবির ওপর দাঁড়িয়ে জালির মতো লেজ মাথার ওপর মেলে ধরে প্রদর্শন করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Menuridae',
      genus: 'Menura',
      species: 'M. novaehollandiae',
    },
    physical: {
      size: { en: 'Male about 80–100 cm including the tail; female about 75–85 cm', bn: 'লেজসহ পুরুষ প্রায় ৮০–১০০ সেমি; স্ত্রী প্রায় ৭৫–৮৫ সেমি' },
      weight: { en: 'About 0.9–1.1 kg', bn: 'প্রায় ০.৯–১.১ কেজি' },
      lifespan: { en: 'Long-lived for a songbird; often well over 10 years', bn: 'গায়ক পাখি হিসেবে দীর্ঘজীবী; প্রায়ই ১০ বছরের অনেক বেশি' },
      features: {
        en: ['Male’s tail of 16 feathers, including two lyre-shaped outer plumes', 'Brown-grey body and strong legs for scratching', 'Short, rounded wings — a weak flier'],
        bn: ['পুরুষের ১৬টি পালকের লেজ, যার বাইরের দুটি বীণার মতো বাঁকানো', 'বাদামি-ধূসর শরীর ও মাটি আঁচড়ানোর উপযোগী শক্ত পা', 'খাটো, গোলাকার ডানা — ওড়ায় তেমন দক্ষ নয়'],
      },
    },
    habitat: {
      en: 'Wet eucalyptus forest and temperate rainforest with dense undergrowth',
      bn: 'ঘন ঝোপসহ আর্দ্র ইউক্যালিপটাস বন ও নাতিশীতোষ্ণ বৃষ্টিবন',
    },
    habitats: ['temperate-forest', 'mountain'],
    regions: ['oceania'],
    distribution: {
      en: 'Southeastern Australia from southern Queensland through New South Wales to Victoria; introduced to Tasmania.',
      bn: 'দক্ষিণ-পূর্ব অস্ট্রেলিয়া — দক্ষিণ কুইন্সল্যান্ড থেকে নিউ সাউথ ওয়েলস হয়ে ভিক্টোরিয়া পর্যন্ত; তাসমানিয়ায় মানুষের মাধ্যমে নেওয়া হয়েছে।',
    },
    climate: { en: 'Temperate to subtropical, moist', bn: 'আর্দ্র নাতিশীতোষ্ণ থেকে উপক্রান্তীয়' },
    diet: {
      en: 'Insects, worms, spiders, centipedes and other invertebrates scratched from leaf litter',
      bn: 'ঝরা পাতা আঁচড়ে বের করা পোকামাকড়, কেঁচো, মাকড়সা, কেন্নো ও অন্যান্য অমেরুদণ্ডী প্রাণী',
    },
    ecologicalRole: {
      en: 'An “ecosystem engineer” that turns over vast amounts of soil and litter, reducing fuel loads for bushfires.',
      bn: '“বাস্তুতন্ত্রের প্রকৌশলী” — বিপুল পরিমাণ মাটি ও ঝরা পাতা উল্টে দেয়, ফলে দাবানলের জ্বালানি কমে যায়।',
    },
    behavior: {
      en: 'Mostly terrestrial and shy; males sing and display through the winter breeding season, roosting high in trees at night.',
      bn: 'বেশির ভাগ সময় মাটিতে থাকে ও লাজুক; শীতকালীন প্রজনন মৌসুমে পুরুষ গান গায় ও নাচ দেখায়, রাতে উঁচু গাছে আশ্রয় নেয়।',
    },
    range: {
      native: [[-33.7, 150.3], [-37.8, 145.5], [-35.3, 148.9], [-28.3, 152.9], [-31.0, 152.0], [-37.5, 149.0]],
      introduced: [[-42.9, 146.8]],
      endemicTo: { en: 'Southeastern Australia', bn: 'দক্ষিণ-পূর্ব অস্ট্রেলিয়া' },
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Severe bushfires such as those of 2019–2020', 'Predation by foxes and feral cats', 'Forest clearing'],
        bn: ['২০১৯–২০২০ সালের মতো ভয়াবহ দাবানল', 'শিয়াল ও বুনো বিড়ালের শিকার', 'বন উজাড়'],
      },
      initiatives: {
        en: ['Protection in national parks such as Dandenong Ranges and Blue Mountains', 'Post-fire monitoring and fox control'],
        bn: ['ড্যান্ডেনং রেঞ্জেস ও ব্লু মাউন্টেনসের মতো জাতীয় উদ্যানে সুরক্ষা', 'দাবানল-পরবর্তী পর্যবেক্ষণ ও শিয়াল নিয়ন্ত্রণ'],
      },
    },
    facts: {
      en: [
        'It appears on the reverse of the Australian 10-cent coin.',
        'Lyrebirds are among the oldest songbird lineages in the world.',
        'Females also mimic, though less often than males.',
      ],
      bn: [
        'অস্ট্রেলিয়ার ১০ সেন্টের মুদ্রার পেছনে এই পাখির ছবি আছে।',
        'লায়ারবার্ড পৃথিবীর সবচেয়ে প্রাচীন গায়ক পাখির বংশধারাগুলোর একটি।',
        'স্ত্রী লায়ারবার্ডও শব্দ নকল করে, তবে পুরুষের চেয়ে কম।',
      ],
    },
    related: ['emu', 'greater-bird-of-paradise', 'platypus'],
  },
  {
    id: 'barn-swallow',
    commonName: { en: 'Barn Swallow', bn: 'পাতি আবাবিল' },
    scientificName: 'Hirundo rustica',
    altNames: {
      en: ['Swallow'],
      bn: ['আবাবিল'],
    },
    category: 'birds',
    wikiTitle: 'Barn swallow',
    description: {
      en: 'The barn swallow is the most widespread swallow in the world, breeding across the Northern Hemisphere and wintering as far south as Argentina, southern Africa and Australia. Glossy blue above with a rusty-red throat and long tail streamers, it hunts insects in fast, swooping flight low over fields and water. In Bangladesh it is a common winter visitor, often seen in large flocks lining electric wires.',
      bn: 'পাতি আবাবিল পৃথিবীর সবচেয়ে বিস্তৃত আবাবিল প্রজাতি; উত্তর গোলার্ধজুড়ে প্রজনন করে এবং শীতে দক্ষিণে আর্জেন্টিনা, দক্ষিণ আফ্রিকা ও অস্ট্রেলিয়া পর্যন্ত চলে যায়। পিঠ চকচকে নীল, গলা লালচে-মরিচা রঙের আর লেজে লম্বা সরু ফিতার মতো পালক; মাঠ ও জলাশয়ের ওপর নিচু দিয়ে দ্রুত ছোঁ মেরে উড়তে উড়তে পোকা শিকার করে। বাংলাদেশে এটি একটি সাধারণ শীতের পরিযায়ী পাখি — প্রায়ই বিদ্যুতের তারে সারি বেঁধে বসে থাকা বড় ঝাঁক দেখা যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Hirundinidae',
      genus: 'Hirundo',
      species: 'H. rustica',
    },
    physical: {
      size: { en: 'About 17–19 cm long including tail streamers', bn: 'লেজের লম্বা পালকসহ প্রায় ১৭–১৯ সেমি' },
      weight: { en: 'About 16–22 g', bn: 'প্রায় ১৬–২২ গ্রাম' },
      lifespan: { en: 'Usually about 4 years; rarely over 10 years', bn: 'সাধারণত প্রায় ৪ বছর; কদাচিৎ ১০ বছরের বেশি' },
      features: {
        en: ['Glossy steel-blue upperparts and rusty-red forehead and throat', 'Deeply forked tail with long outer streamers', 'Long, pointed wings built for agile flight'],
        bn: ['চকচকে ইস্পাত-নীল পিঠ এবং লালচে কপাল ও গলা', 'গভীরভাবে চেরা লেজ, বাইরের পালক লম্বা ফিতার মতো', 'দ্রুত ও কৌশলী ওড়ার উপযোগী লম্বা, সুচালো ডানা'],
      },
    },
    habitat: {
      en: 'Open farmland, grassland, wetlands and villages, nesting in buildings and under bridges',
      bn: 'খোলা কৃষিজমি, তৃণভূমি, জলাভূমি ও গ্রাম; দালানকোঠা ও সেতুর নিচে বাসা বাঁধে',
    },
    habitats: ['urban-farmland', 'grassland', 'wetland'],
    regions: ['europe', 'north-america', 'east-asia', 'south-asia', 'africa', 'south-america', 'southeast-asia'],
    distribution: {
      en: 'Breeds across Europe, Asia, North Africa and North America; winters in sub-Saharan Africa, South and Southeast Asia, northern Australia and South America.',
      bn: 'ইউরোপ, এশিয়া, উত্তর আফ্রিকা ও উত্তর আমেরিকায় প্রজনন করে; শীতে সাহারার দক্ষিণের আফ্রিকা, দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়া, উত্তর অস্ট্রেলিয়া ও দক্ষিণ আমেরিকায় যায়।',
    },
    climate: { en: 'Temperate summers and tropical winters', bn: 'গ্রীষ্মে নাতিশীতোষ্ণ ও শীতে ক্রান্তীয় অঞ্চল' },
    diet: {
      en: 'Insectivore — flies, beetles, mosquitoes and other flying insects caught on the wing',
      bn: 'পতঙ্গভুক — মাছি, গুবরে পোকা, মশা ও অন্যান্য উড়ন্ত পোকা, যা উড়তে উড়তে ধরে',
    },
    ecologicalRole: {
      en: 'Consumes huge numbers of flying insects, including crop pests and mosquitoes.',
      bn: 'ফসলের ক্ষতিকর পোকা ও মশাসহ বিপুল পরিমাণ উড়ন্ত পোকা খায়।',
    },
    behavior: {
      en: 'Builds a cup nest of mud pellets on beams and ledges; migrates thousands of kilometres and gathers in huge reedbed roosts.',
      bn: 'কাদার দলা দিয়ে কড়িকাঠ ও কার্নিশে বাটির মতো বাসা বানায়; হাজার হাজার কিলোমিটার পরিযান করে এবং নলখাগড়ার বনে বিশাল ঝাঁকে রাত কাটায়।',
    },
    range: {
      native: [[51.5, -0.1], [55.8, 37.6], [40.0, -100.0], [35.7, 139.7], [23.8, 90.4], [-26.0, 28.0], [-15.0, -55.0]],
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Loss of nest sites as old barns are modernised', 'Decline of flying insects due to pesticides and intensive farming', 'Hunting at some winter roosts'],
        bn: ['পুরোনো গোলাঘর আধুনিকীকরণে বাসার জায়গা হারানো', 'কীটনাশক ও নিবিড় চাষাবাদে উড়ন্ত পোকা কমে যাওয়া', 'কিছু শীতকালীন আশ্রয়স্থলে শিকার'],
      },
      initiatives: {
        en: ['Keeping barns and outbuildings open for nesting', 'International monitoring of migratory roosts'],
        bn: ['বাসা বাঁধার জন্য গোলাঘর ও চালাঘর খোলা রাখা', 'পরিযায়ী আশ্রয়স্থলের আন্তর্জাতিক পর্যবেক্ষণ'],
      },
    },
    facts: {
      en: [
        'It is the national bird of Austria and Estonia.',
        'Females prefer males with longer, more symmetrical tail streamers.',
        'European swallows winter in southern Africa, a round trip of over 20,000 km.',
      ],
      bn: [
        'এটি অস্ট্রিয়া ও এস্তোনিয়ার জাতীয় পাখি।',
        'স্ত্রী আবাবিল লম্বা ও সমান মাপের লেজওয়ালা পুরুষকে বেশি পছন্দ করে।',
        'ইউরোপের আবাবিল শীত কাটাতে দক্ষিণ আফ্রিকায় যায় — আসা-যাওয়ায় ২০,০০০ কিলোমিটারেরও বেশি পথ।',
      ],
    },
    related: ['black-drongo', 'house-sparrow', 'european-robin'],
  },
];
