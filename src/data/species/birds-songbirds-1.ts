import type { Species } from '@/types';

export const birdsSongbirds1: Species[] = [
  {
    id: 'house-crow',
    commonName: { en: 'House Crow', bn: 'পাতি কাক' },
    scientificName: 'Corvus splendens',
    altNames: {
      en: ['Indian House Crow', 'Grey-necked Crow', 'Colombo Crow'],
      bn: ['কাক', 'বাড়ির কাক', 'ছাইরঙা ঘাড়ের কাক'],
    },
    category: 'birds',
    wikiTitle: 'House crow',
    description: {
      en: 'The house crow is the familiar grey-necked crow of towns and villages across South Asia. Bold, noisy and highly intelligent, it lives almost entirely alongside people, scavenging food waste in markets, rubbish heaps and rooftops. Hitching rides on ships, it has spread to ports in Africa, the Middle East and beyond, where it is an aggressive invasive species.',
      bn: 'পাতি কাক দক্ষিণ এশিয়ার শহর ও গ্রামের অতি পরিচিত পাখি, যার ঘাড় ও গলা ছাইরঙা। সাহসী, হইচইপ্রিয় ও অত্যন্ত বুদ্ধিমান এই পাখি প্রায় পুরোপুরি মানুষের আশপাশে বাস করে — বাজার, ময়লার স্তূপ আর ছাদে খাবারের উচ্ছিষ্ট খুঁজে খায়। জাহাজে চড়ে এরা আফ্রিকা, মধ্যপ্রাচ্যসহ নানা দেশের বন্দরে ছড়িয়ে পড়েছে, যেখানে এরা আগ্রাসী বহিরাগত প্রজাতি হিসেবে সমস্যা তৈরি করছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Corvidae',
      genus: 'Corvus',
      species: 'C. splendens',
    },
    physical: {
      size: { en: 'About 40 cm long', bn: 'প্রায় ৪০ সেমি লম্বা' },
      weight: { en: 'About 250–370 g', bn: 'প্রায় ২৫০–৩৭০ গ্রাম' },
      lifespan: { en: 'Usually several years; can exceed 10 years', bn: 'সাধারণত কয়েক বছর; ১০ বছরের বেশিও বাঁচতে পারে' },
      features: {
        en: ['Glossy black body with a paler grey neck, nape and breast', 'Stout black bill and dark eyes', 'Harsh, repeated “kaa-kaa” call'],
        bn: ['চকচকে কালো শরীর, ঘাড়, মাথার পেছন ও বুক ছাইরঙা', 'মোটা কালো ঠোঁট ও গাঢ় চোখ', 'কর্কশ, বারবার “কা-কা” ডাক'],
      },
    },
    habitat: {
      en: 'Cities, towns, villages, ports and farmland — almost always near human settlements',
      bn: 'শহর, মফস্বল, গ্রাম, বন্দর ও কৃষিজমি — প্রায় সবসময় মানুষের বসতির কাছে',
    },
    habitats: ['urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'africa'],
    distribution: {
      en: 'Native to Bangladesh, India, Pakistan, Nepal, Sri Lanka and Myanmar; introduced to East Africa, Arabia, Singapore and other port cities.',
      bn: 'বাংলাদেশ, ভারত, পাকিস্তান, নেপাল, শ্রীলঙ্কা ও মিয়ানমারের স্থানীয় পাখি; পূর্ব আফ্রিকা, আরব উপদ্বীপ, সিঙ্গাপুরসহ বিভিন্ন বন্দরনগরীতে মানুষের মাধ্যমে ছড়িয়েছে।',
    },
    climate: { en: 'Tropical and subtropical, hot and humid to dry', bn: 'ক্রান্তীয় ও উপক্রান্তীয় — উষ্ণ-আর্দ্র থেকে শুষ্ক' },
    diet: {
      en: 'Omnivore — food scraps, carrion, insects, fruit, grain, eggs and nestlings',
      bn: 'সর্বভুক — খাবারের উচ্ছিষ্ট, মরা প্রাণী, পোকামাকড়, ফল, শস্য, অন্য পাখির ডিম ও ছানা',
    },
    ecologicalRole: {
      en: 'A major urban scavenger that cleans up waste, though in introduced ranges it harms native birds.',
      bn: 'শহরের প্রধান ঝাড়ুদার পাখি হিসেবে ময়লা-আবর্জনা পরিষ্কারে ভূমিকা রাখে, তবে নতুন এলাকায় স্থানীয় পাখিদের ক্ষতি করে।',
    },
    behavior: {
      en: 'Highly social; roosts communally in large trees and mobs predators and other birds in noisy groups.',
      bn: 'অত্যন্ত সামাজিক; বড় গাছে দল বেঁধে রাত কাটায় এবং শিকারি প্রাণী বা অন্য পাখিকে দল বেঁধে চেঁচিয়ে তাড়া করে।',
    },
    range: {
      native: [[23.8, 90.4], [22.6, 88.4], [28.6, 77.2], [24.9, 67.0], [6.9, 79.9], [16.8, 96.2]],
      introduced: [[-4.0, 39.7], [12.8, 45.0], [1.3, 103.8], [-6.8, 39.3]],
    },
    conservation: {
      status: 'LC',
      trend: 'increasing',
      threats: {
        en: ['Poisoning and culling where it is treated as a pest', 'Few significant threats overall — it thrives alongside people'],
        bn: ['ক্ষতিকর পাখি হিসেবে বিষ প্রয়োগ ও নিধন', 'সামগ্রিকভাবে বড় কোনো হুমকি নেই — মানুষের পাশে এরা ভালোই টিকে থাকে'],
      },
      initiatives: {
        en: ['Eradication programmes in invaded countries such as Kenya and the Netherlands', 'Better waste management to limit urban crow numbers'],
        bn: ['কেনিয়া ও নেদারল্যান্ডসের মতো আক্রান্ত দেশে নির্মূল কর্মসূচি', 'শহরে কাকের সংখ্যা সীমিত রাখতে উন্নত বর্জ্য ব্যবস্থাপনা'],
      },
    },
    facts: {
      en: [
        'The koel lays its eggs in house crow nests, so crows often raise koel chicks unknowingly.',
        'Crows recognise individual human faces and remember people who threatened them.',
        'It is considered one of the world’s most successful ship-borne bird invaders.',
      ],
      bn: [
        'কোকিল পাতি কাকের বাসায় ডিম পাড়ে, তাই কাক প্রায়ই না জেনে কোকিলের ছানা বড় করে।',
        'কাক আলাদা আলাদা মানুষের মুখ চিনতে পারে এবং যে তাকে ভয় দেখিয়েছে তাকে মনে রাখে।',
        'জাহাজে চড়ে নতুন দেশে ছড়িয়ে পড়া পাখিদের মধ্যে এটি অন্যতম সফল প্রজাতি।',
      ],
    },
    related: ['common-raven', 'common-myna', 'house-sparrow'],
  },
  {
    id: 'common-myna',
    commonName: { en: 'Common Myna', bn: 'ভাত শালিক' },
    scientificName: 'Acridotheres tristis',
    altNames: {
      en: ['Indian Myna', 'Myna', 'Mynah'],
      bn: ['শালিক', 'ভাত শালিখ', 'দেশি শালিক'],
    },
    category: 'birds',
    wikiTitle: 'Common myna',
    description: {
      en: 'The common myna is a confident brown starling with a black head and bright yellow eye-patch, found in every Bangladeshi town and village. It walks rather than hops, often following cattle or lawnmowers to catch disturbed insects. Introduced around the world, it is now listed among the 100 worst invasive alien species.',
      bn: 'ভাত শালিক বাদামি রঙের আত্মবিশ্বাসী একটি পাখি, যার মাথা কালো আর চোখের চারপাশে উজ্জ্বল হলুদ চামড়া থাকে; বাংলাদেশের প্রতিটি শহর ও গ্রামে এদের দেখা যায়। এরা লাফিয়ে নয়, হেঁটে চলে এবং প্রায়ই গরুর পেছনে ঘুরে ঘুরে উড়ে ওঠা পোকা ধরে খায়। পৃথিবীর বহু দেশে মানুষের হাতে ছড়িয়ে পড়ায় এটি এখন বিশ্বের ১০০টি সবচেয়ে ক্ষতিকর আগ্রাসী প্রজাতির তালিকায় রয়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Sturnidae',
      genus: 'Acridotheres',
      species: 'A. tristis',
    },
    physical: {
      size: { en: 'About 23–26 cm long', bn: 'প্রায় ২৩–২৬ সেমি লম্বা' },
      weight: { en: 'About 110–140 g', bn: 'প্রায় ১১০–১৪০ গ্রাম' },
      lifespan: { en: 'About 4 years in the wild; up to about 12 years in captivity', bn: 'বনে প্রায় ৪ বছর; আবদ্ধ অবস্থায় প্রায় ১২ বছর পর্যন্ত' },
      features: {
        en: ['Brown body with glossy black head', 'Yellow bill, legs and bare skin behind the eye', 'Large white wing patches visible in flight'],
        bn: ['বাদামি শরীর ও চকচকে কালো মাথা', 'ঠোঁট, পা ও চোখের পেছনের খোলা চামড়া হলুদ', 'ওড়ার সময় ডানায় বড় সাদা ছোপ দেখা যায়'],
      },
    },
    habitat: {
      en: 'Towns, villages, farmland, gardens and open grassy areas',
      bn: 'শহর, গ্রাম, কৃষিজমি, বাগান ও খোলা ঘাসজমি',
    },
    habitats: ['urban-farmland', 'grassland'],
    regions: ['south-asia', 'southeast-asia', 'oceania'],
    distribution: {
      en: 'Native from Iran and Central Asia through South Asia to Myanmar; introduced to Australia, New Zealand, South Africa, Hawaii and many islands.',
      bn: 'ইরান ও মধ্য এশিয়া থেকে দক্ষিণ এশিয়া হয়ে মিয়ানমার পর্যন্ত স্থানীয়; অস্ট্রেলিয়া, নিউজিল্যান্ড, দক্ষিণ আফ্রিকা, হাওয়াই ও বহু দ্বীপে মানুষের মাধ্যমে ছড়িয়েছে।',
    },
    climate: { en: 'Tropical to warm temperate', bn: 'ক্রান্তীয় থেকে উষ্ণ নাতিশীতোষ্ণ' },
    diet: {
      en: 'Omnivore — insects (especially grasshoppers), fruit, grain and kitchen scraps',
      bn: 'সর্বভুক — পোকামাকড় (বিশেষত ফড়িং), ফল, শস্যদানা ও রান্নাঘরের উচ্ছিষ্ট',
    },
    ecologicalRole: {
      en: 'Controls crop pests such as grasshoppers and caterpillars, but competes with native hole-nesting birds where introduced.',
      bn: 'ফড়িং ও শুঁয়োপোকার মতো ফসলের ক্ষতিকর পোকা খেয়ে উপকার করে, তবে নতুন এলাকায় গর্তে বাসা বাঁধা স্থানীয় পাখিদের সঙ্গে প্রতিযোগিতা করে।',
    },
    behavior: {
      en: 'Usually in pairs that mate for life; gathers in large, noisy communal roosts at dusk.',
      bn: 'সাধারণত জোড়ায় থাকে এবং জোড়া আজীবন টিকে থাকে; সন্ধ্যায় বড় দলে একসঙ্গে গাছে জড়ো হয়ে হইচই করে রাত কাটায়।',
    },
    range: {
      native: [[23.8, 90.4], [28.6, 77.2], [33.7, 73.0], [13.0, 80.2], [41.3, 69.3], [16.8, 96.2]],
      introduced: [[-33.9, 151.2], [21.3, -157.8], [-29.9, 31.0], [-36.8, 174.8]],
    },
    conservation: {
      status: 'LC',
      trend: 'increasing',
      threats: {
        en: ['Trapping for the cage-bird trade', 'Culling programmes in invaded countries'],
        bn: ['খাঁচার পাখি হিসেবে বিক্রির জন্য ধরা', 'আক্রান্ত দেশগুলোতে নিধন কর্মসূচি'],
      },
      initiatives: {
        en: ['Community trapping schemes in Australia to protect native birds', 'Biosecurity checks to stop spread to new islands'],
        bn: ['স্থানীয় পাখি রক্ষায় অস্ট্রেলিয়ায় জনগণের অংশগ্রহণে ফাঁদ পাতার কর্মসূচি', 'নতুন দ্বীপে ছড়ানো ঠেকাতে জীবনিরাপত্তা পরীক্ষা'],
      },
    },
    facts: {
      en: [
        'It was introduced to Mauritius in the 1760s to control locusts.',
        'Mynas can imitate human speech and other sounds.',
        'Its species name tristis means “sad”, although it is a lively bird.',
      ],
      bn: [
        'পঙ্গপাল দমনের জন্য ১৭৬০-এর দশকে একে মরিশাসে নেওয়া হয়েছিল।',
        'শালিক মানুষের কথা ও নানা শব্দ নকল করতে পারে।',
        'এর বৈজ্ঞানিক নামের tristis অর্থ “বিষণ্ণ”, যদিও পাখিটি বেশ চঞ্চল।',
      ],
    },
    related: ['house-crow', 'red-vented-bulbul', 'oriental-magpie-robin'],
  },
  {
    id: 'red-vented-bulbul',
    commonName: { en: 'Red-vented Bulbul', bn: 'বাংলা বুলবুলি' },
    scientificName: 'Pycnonotus cafer',
    altNames: {
      en: ['Bulbul', 'Common Bulbul'],
      bn: ['বুলবুলি', 'বুলবুল'],
    },
    category: 'birds',
    wikiTitle: 'Red-vented bulbul',
    description: {
      en: 'The red-vented bulbul is one of the most common garden birds of Bangladesh, recognised by its black crested head and bright red patch under the tail. Its cheerful, bubbling calls are heard in villages, parks and homesteads throughout the year. It has been introduced to several Pacific islands, where it damages fruit crops and is considered invasive.',
      bn: 'বাংলা বুলবুলি বাংলাদেশের বাড়ির আঙিনার সবচেয়ে পরিচিত পাখিগুলোর একটি; মাথায় কালো ঝুঁটি আর লেজের নিচে উজ্জ্বল লাল ছোপ দেখে সহজেই চেনা যায়। গ্রাম, পার্ক ও বসতবাড়িতে সারা বছর এদের মিষ্টি কিচিরমিচির শোনা যায়। প্রশান্ত মহাসাগরের কয়েকটি দ্বীপে মানুষের মাধ্যমে ছড়িয়ে পড়ে এরা ফলের ক্ষতি করছে এবং সেখানে আগ্রাসী প্রজাতি হিসেবে বিবেচিত।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Pycnonotidae',
      genus: 'Pycnonotus',
      species: 'P. cafer',
    },
    physical: {
      size: { en: 'About 20 cm long', bn: 'প্রায় ২০ সেমি লম্বা' },
      weight: { en: 'About 26–45 g', bn: 'প্রায় ২৬–৪৫ গ্রাম' },
      lifespan: { en: 'Several years; up to about 11 years recorded', bn: 'কয়েক বছর; প্রায় ১১ বছর পর্যন্ত বাঁচার রেকর্ড আছে' },
      features: {
        en: ['Black head with a short crest', 'Scaly dark-brown body and white rump', 'Bright red vent under the tail'],
        bn: ['ছোট ঝুঁটিসহ কালো মাথা', 'আঁশের মতো নকশাওয়ালা গাঢ় বাদামি শরীর ও সাদা কোমর', 'লেজের নিচে উজ্জ্বল লাল ছোপ'],
      },
    },
    habitat: {
      en: 'Gardens, village groves, scrub, open woodland and farmland',
      bn: 'বাগান, গ্রামের ঝোপঝাড়, গাছপালা, হালকা বন ও কৃষিজমি',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'oceania'],
    distribution: {
      en: 'Pakistan, India, Sri Lanka, Nepal, Bangladesh and Myanmar; introduced to Hawaii, Fiji, Samoa, Tonga and parts of the Middle East.',
      bn: 'পাকিস্তান, ভারত, শ্রীলঙ্কা, নেপাল, বাংলাদেশ ও মিয়ানমার; হাওয়াই, ফিজি, সামোয়া, টোঙ্গা এবং মধ্যপ্রাচ্যের কিছু অংশে মানুষের মাধ্যমে ছড়িয়েছে।',
    },
    climate: { en: 'Tropical and subtropical', bn: 'ক্রান্তীয় ও উপক্রান্তীয়' },
    diet: {
      en: 'Fruit, berries, nectar, flower buds and insects',
      bn: 'ফল, রসালো বেরি, ফুলের মধু, কুঁড়ি ও পোকামাকড়',
    },
    ecologicalRole: {
      en: 'An important seed disperser for many shrubs and trees, and a consumer of garden insects.',
      bn: 'বহু গুল্ম ও গাছের বীজ ছড়িয়ে দেওয়ায় গুরুত্বপূর্ণ ভূমিকা রাখে এবং বাগানের পোকামাকড় খায়।',
    },
    behavior: {
      en: 'Usually seen in pairs or small groups; builds a neat cup nest in bushes and defends it noisily.',
      bn: 'সাধারণত জোড়ায় বা ছোট দলে দেখা যায়; ঝোপের মধ্যে পরিপাটি বাটির মতো বাসা বানায় এবং হইচই করে বাসা পাহারা দেয়।',
    },
    range: {
      native: [[23.8, 90.4], [22.3, 91.8], [28.6, 77.2], [13.0, 80.2], [7.3, 80.6], [27.7, 85.3]],
      introduced: [[21.3, -157.8], [-18.1, 178.4], [-13.8, -171.8]],
    },
    conservation: {
      status: 'LC',
      trend: 'increasing',
      threats: {
        en: ['Trapping for the cage-bird trade and traditional bulbul fights', 'Pesticide use in gardens and farmland'],
        bn: ['খাঁচার পাখি ও প্রথাগত বুলবুলির লড়াইয়ের জন্য ধরা', 'বাগান ও কৃষিজমিতে কীটনাশকের ব্যবহার'],
      },
      initiatives: {
        en: ['Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012', 'Control programmes on invaded Pacific islands'],
        bn: ['বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর অধীনে সুরক্ষিত', 'আক্রান্ত প্রশান্ত মহাসাগরীয় দ্বীপে নিয়ন্ত্রণ কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'It is listed among the world’s 100 worst invasive alien species.',
        'Bulbuls were once kept and trained for fighting contests in parts of South Asia.',
        'The bulbul appears often in Bengali rhymes and songs.',
      ],
      bn: [
        'এটি বিশ্বের ১০০টি সবচেয়ে ক্ষতিকর আগ্রাসী প্রজাতির তালিকায় রয়েছে।',
        'দক্ষিণ এশিয়ার কিছু অঞ্চলে একসময় বুলবুলিকে লড়াইয়ের জন্য পোষা ও প্রশিক্ষণ দেওয়া হতো।',
        'বাংলা ছড়া ও গানে বুলবুলির উল্লেখ বারবার পাওয়া যায়।',
      ],
    },
    related: ['common-myna', 'oriental-magpie-robin', 'common-tailorbird'],
  },
  {
    id: 'black-drongo',
    commonName: { en: 'Black Drongo', bn: 'কালো ফিঙে' },
    scientificName: 'Dicrurus macrocercus',
    altNames: {
      en: ['King Crow', 'Drongo'],
      bn: ['ফিঙে', 'ফিঙ্গে'],
    },
    category: 'birds',
    wikiTitle: 'Black drongo',
    description: {
      en: 'The black drongo is a glossy black bird with a long, deeply forked tail, commonly seen perched on electric wires and fence posts across Bangladesh. Fearless for its size, it boldly attacks crows, hawks and even eagles that come near its nest. Farmers value it because it catches large numbers of insects disturbed by grazing cattle and ploughing.',
      bn: 'কালো ফিঙে চকচকে কালো রঙের পাখি, যার লম্বা লেজ আগায় গভীরভাবে চেরা; বাংলাদেশের সর্বত্র বিদ্যুতের তার ও খুঁটির ওপর এদের বসে থাকতে দেখা যায়। আকারে ছোট হলেও এরা ভীষণ সাহসী — বাসার কাছে কাক, বাজ এমনকি ঈগল এলেও তেড়ে গিয়ে আক্রমণ করে। গরু চরানো ও জমি চাষের সময় উড়ে ওঠা অসংখ্য পোকা ধরে খায় বলে কৃষকের কাছে এরা উপকারী বন্ধু।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Dicruridae',
      genus: 'Dicrurus',
      species: 'D. macrocercus',
    },
    physical: {
      size: { en: 'About 28 cm long including the long tail', bn: 'লম্বা লেজসহ প্রায় ২৮ সেমি' },
      weight: { en: 'About 40–60 g', bn: 'প্রায় ৪০–৬০ গ্রাম' },
      lifespan: { en: 'Several years in the wild', bn: 'বনে কয়েক বছর' },
      features: {
        en: ['Glossy blue-black plumage', 'Long tail with a deep fork and outcurved tips', 'Small white spot at the base of the bill in adults'],
        bn: ['নীলাভ আভাযুক্ত চকচকে কালো পালক', 'লম্বা, গভীরভাবে চেরা লেজ যার আগা বাইরের দিকে বাঁকানো', 'প্রাপ্তবয়স্কদের ঠোঁটের গোড়ায় ছোট সাদা ফোঁটা'],
      },
    },
    habitat: {
      en: 'Open farmland, grassland, village edges and lightly wooded country',
      bn: 'খোলা কৃষিজমি, ঘাসজমি, গ্রামের প্রান্ত ও হালকা গাছপালাময় এলাকা',
    },
    habitats: ['urban-farmland', 'grassland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'From Iran and Pakistan across South Asia to southern China, Southeast Asia and Java; northern birds migrate south in winter.',
      bn: 'ইরান ও পাকিস্তান থেকে দক্ষিণ এশিয়া হয়ে দক্ষিণ চীন, দক্ষিণ-পূর্ব এশিয়া ও জাভা পর্যন্ত; উত্তরের পাখিরা শীতে দক্ষিণে চলে আসে।',
    },
    climate: { en: 'Tropical to warm temperate', bn: 'ক্রান্তীয় থেকে উষ্ণ নাতিশীতোষ্ণ' },
    diet: {
      en: 'Insectivore — grasshoppers, beetles, termites, moths and other flying insects caught in the air or from the ground',
      bn: 'পতঙ্গভুক — ফড়িং, গুবরে পোকা, উইপোকা, মথ ও অন্যান্য উড়ন্ত পোকা, যা বাতাসে বা মাটি থেকে ধরে',
    },
    ecologicalRole: {
      en: 'A natural pest controller in farmland; smaller birds often nest near drongos for protection from predators.',
      bn: 'কৃষিজমিতে প্রাকৃতিক পোকা নিয়ন্ত্রক; শিকারির হাত থেকে বাঁচতে ছোট পাখিরা প্রায়ই ফিঙের বাসার কাছে বাসা বাঁধে।',
    },
    behavior: {
      en: 'Aggressive and territorial; sallies from a perch to snatch insects and fearlessly mobs much larger birds.',
      bn: 'আক্রমণাত্মক ও এলাকাভিত্তিক; বসার জায়গা থেকে ঝাঁপিয়ে পড়ে পোকা ধরে এবং নিজের চেয়ে অনেক বড় পাখিকেও নির্ভয়ে তাড়া করে।',
    },
    range: {
      native: [[23.8, 90.4], [28.6, 77.2], [33.7, 73.0], [13.7, 100.5], [23.1, 113.3], [-7.5, 110.5]],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Pesticides reducing insect prey', 'Loss of perches and nesting trees in farmland'],
        bn: ['কীটনাশকের কারণে খাদ্য-পোকার সংখ্যা কমে যাওয়া', 'কৃষিজমিতে বসার জায়গা ও বাসার গাছ কমে যাওয়া'],
      },
      initiatives: {
        en: ['Planting perches (“bird perching”) in rice fields for natural pest control in Bangladesh', 'Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012'],
        bn: ['প্রাকৃতিক উপায়ে পোকা দমনে বাংলাদেশে ধানক্ষেতে ডাল পোঁতা (পার্চিং) পদ্ধতি', 'বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর অধীনে সুরক্ষিত'],
      },
    },
    facts: {
      en: [
        'Its old name “King Crow” comes from its habit of chasing crows.',
        'Drongos can mimic the alarm calls of other birds.',
        'It often rides on the backs of cattle to catch insects they disturb.',
      ],
      bn: [
        'কাককে তাড়া করার অভ্যাসের জন্য ইংরেজিতে একে “কিং ক্রো” বা কাকের রাজা বলা হতো।',
        'ফিঙে অন্য পাখির বিপদসংকেতের ডাক নকল করতে পারে।',
        'গরুর পিঠে বসে থেকে গরুর চলাফেরায় উড়ে ওঠা পোকা ধরে খায়।',
      ],
    },
    related: ['house-crow', 'black-hooded-oriole', 'barn-swallow'],
  },
  {
    id: 'baya-weaver',
    commonName: { en: 'Baya Weaver', bn: 'বাবুই' },
    scientificName: 'Ploceus philippinus',
    altNames: {
      en: ['Baya', 'Weaver Bird'],
      bn: ['বাবুই পাখি', 'দেশি বাবুই'],
    },
    category: 'birds',
    wikiTitle: 'Baya weaver',
    description: {
      en: 'The Baya weaver is the master nest-builder of the Bangladeshi countryside, famous for the hanging, retort-shaped nests it weaves from strips of grass and palm leaves. Colonies of these nests dangle from palmyra (tal) palms, often over water. Breeding males wear a bright yellow crown, while females and non-breeding birds look like streaky brown sparrows.',
      bn: 'বাবুই বাংলাদেশের গ্রামের সেরা বাসা-কারিগর পাখি; ঘাস আর তালপাতার সরু ফালি বুনে তৈরি ঝুলন্ত, বোতলের মতো বাসার জন্য এরা বিখ্যাত। তালগাছে, প্রায়ই পানির ওপর ঝুঁকে থাকা ডালে, দল বেঁধে এদের বহু বাসা ঝুলতে দেখা যায়। প্রজনন মৌসুমে পুরুষের মাথা উজ্জ্বল হলুদ হয়, আর স্ত্রী ও অপ্রজনন মৌসুমের পাখিদের দেখতে বাদামি দাগওয়ালা চড়ুইয়ের মতো লাগে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Ploceidae',
      genus: 'Ploceus',
      species: 'P. philippinus',
    },
    physical: {
      size: { en: 'About 15 cm long', bn: 'প্রায় ১৫ সেমি লম্বা' },
      weight: { en: 'About 20–30 g', bn: 'প্রায় ২০–৩০ গ্রাম' },
      lifespan: { en: 'A few years in the wild', bn: 'বনে কয়েক বছর' },
      features: {
        en: ['Sparrow-like streaked brown back', 'Breeding male has a bright yellow crown and dark face', 'Thick, conical seed-eating bill'],
        bn: ['চড়ুইয়ের মতো বাদামি দাগওয়ালা পিঠ', 'প্রজনন মৌসুমে পুরুষের মাথা উজ্জ্বল হলুদ ও মুখ কালচে', 'বীজ খাওয়ার উপযোগী মোটা, শঙ্কু আকৃতির ঠোঁট'],
      },
    },
    habitat: {
      en: 'Rice fields, grassland and open country with scattered palms and trees, often near water',
      bn: 'ধানক্ষেত, ঘাসজমি এবং ছড়ানো তালগাছ ও অন্যান্য গাছসহ খোলা এলাকা, প্রায়ই পানির কাছে',
    },
    habitats: ['urban-farmland', 'grassland', 'wetland'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Pakistan, India, Sri Lanka, Nepal, Bangladesh and Myanmar east to Thailand, Malaysia, Sumatra and Java.',
      bn: 'পাকিস্তান, ভারত, শ্রীলঙ্কা, নেপাল, বাংলাদেশ ও মিয়ানমার থেকে পূর্বে থাইল্যান্ড, মালয়েশিয়া, সুমাত্রা ও জাভা পর্যন্ত।',
    },
    climate: { en: 'Tropical monsoon', bn: 'ক্রান্তীয় মৌসুমি' },
    diet: {
      en: 'Mainly seeds and grain, especially rice; also insects fed to the chicks',
      bn: 'মূলত বীজ ও শস্যদানা, বিশেষ করে ধান; ছানাদের পোকামাকড়ও খাওয়ায়',
    },
    ecologicalRole: {
      en: 'Eats grass seeds and insects, and its abandoned nests are reused by other small birds and animals.',
      bn: 'ঘাসের বীজ ও পোকামাকড় খায়; এদের পরিত্যক্ত বাসা অন্য ছোট পাখি ও প্রাণী ব্যবহার করে।',
    },
    behavior: {
      en: 'Breeds in colonies during the monsoon; males build half-finished nests and females inspect them before choosing a mate.',
      bn: 'বর্ষাকালে দল বেঁধে প্রজনন করে; পুরুষ অর্ধেক বাসা বানায়, আর স্ত্রী বাসা পরীক্ষা করে পছন্দ হলে তবেই সঙ্গী বেছে নেয়।',
    },
    range: {
      native: [[23.8, 90.4], [24.9, 91.9], [28.6, 77.2], [13.0, 80.2], [7.3, 80.6], [16.8, 96.2], [13.7, 100.5], [-6.9, 107.6]],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Felling of palmyra palms used for nesting', 'Pesticide use in rice fields', 'Nests collected for decoration and trade'],
        bn: ['বাসা বাঁধার তালগাছ কেটে ফেলা', 'ধানক্ষেতে কীটনাশকের ব্যবহার', 'সাজসজ্জা ও বিক্রির জন্য বাসা সংগ্রহ'],
      },
      initiatives: {
        en: ['Palm tree planting campaigns along rural roads in Bangladesh', 'Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012'],
        bn: ['বাংলাদেশে গ্রামীণ সড়কের পাশে তালগাছ রোপণ কর্মসূচি', 'বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর অধীনে সুরক্ষিত'],
      },
    },
    facts: {
      en: [
        'A single nest may take a male around 500 trips carrying grass strips.',
        'The nest entrance is a long downward tube that keeps out snakes and predators.',
        'Rajanikanta Sen’s famous Bengali poem “Babui pakhire dāki” is about this bird.',
      ],
      bn: [
        'একটি বাসা বানাতে একটি পুরুষ বাবুইকে প্রায় ৫০০ বার ঘাসের ফালি বয়ে আনতে হতে পারে।',
        'বাসার প্রবেশপথ নিচের দিকে লম্বা নলের মতো, যা সাপ ও শিকারিকে ঢুকতে দেয় না।',
        'রজনীকান্ত সেনের বিখ্যাত কবিতা “বাবুই পাখিরে ডাকি, বলিছে চড়াই” এই পাখিকে নিয়েই লেখা।',
      ],
    },
    related: ['house-sparrow', 'common-tailorbird'],
  },
  {
    id: 'purple-sunbird',
    commonName: { en: 'Purple Sunbird', bn: 'বেগুনি মৌটুসি' },
    scientificName: 'Cinnyris asiaticus',
    altNames: {
      en: ['Sunbird'],
      bn: ['মৌটুসি'],
    },
    synonyms: ['Nectarinia asiatica'],
    category: 'birds',
    wikiTitle: 'Purple sunbird',
    description: {
      en: 'The purple sunbird is a tiny nectar-feeding bird with a thin, curved bill, common in Bangladeshi gardens and village groves. Breeding males are a shimmering metallic purple-black, while females are olive above and yellowish below. Like hummingbirds of the Americas, sunbirds sometimes hover briefly in front of flowers to feed.',
      bn: 'বেগুনি মৌটুসি সরু, বাঁকানো ঠোঁটের খুদে একটি পাখি, যারা ফুলের মধু খায়; বাংলাদেশের বাগান ও গ্রামের গাছপালায় এদের প্রায়ই দেখা যায়। প্রজনন মৌসুমে পুরুষের শরীর ঝলমলে ধাতব বেগুনি-কালো হয়, আর স্ত্রী পাখির পিঠ জলপাই-সবুজ ও পেট হলদেটে। আমেরিকার হামিংবার্ডের মতো মৌটুসিও কখনো কখনো ফুলের সামনে ডানা ঝাপটে শূন্যে ভেসে মধু খায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Nectariniidae',
      genus: 'Cinnyris',
      species: 'C. asiaticus',
    },
    physical: {
      size: { en: 'About 10 cm long', bn: 'প্রায় ১০ সেমি লম্বা' },
      weight: { en: 'About 7–10 g', bn: 'প্রায় ৭–১০ গ্রাম' },
      lifespan: { en: 'A few years in the wild', bn: 'বনে কয়েক বছর' },
      features: {
        en: ['Long, thin, down-curved bill for probing flowers', 'Breeding male glossy purple-black with hidden yellow-orange tufts', 'Female olive-brown above, yellow below'],
        bn: ['ফুলের ভেতর ঢোকানোর উপযোগী লম্বা, সরু, নিচের দিকে বাঁকানো ঠোঁট', 'প্রজনন মৌসুমে পুরুষ চকচকে বেগুনি-কালো, ডানার নিচে লুকানো হলুদ-কমলা পালকগুচ্ছ', 'স্ত্রী পাখির পিঠ জলপাই-বাদামি ও পেট হলুদ'],
      },
    },
    habitat: {
      en: 'Gardens, orchards, scrub, open forest and village groves',
      bn: 'বাগান, ফলবাগান, ঝোপঝাড়, হালকা বন ও গ্রামের গাছপালা',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'From Oman and Iran through Pakistan, India, Sri Lanka, Nepal and Bangladesh to Myanmar, Thailand and Indochina.',
      bn: 'ওমান ও ইরান থেকে পাকিস্তান, ভারত, শ্রীলঙ্কা, নেপাল ও বাংলাদেশ হয়ে মিয়ানমার, থাইল্যান্ড ও ইন্দোচীন পর্যন্ত।',
    },
    climate: { en: 'Tropical to hot arid', bn: 'ক্রান্তীয় থেকে উষ্ণ শুষ্ক' },
    diet: {
      en: 'Nectar, supplemented with small insects and spiders, especially when feeding chicks',
      bn: 'ফুলের মধু, সঙ্গে ছোট পোকামাকড় ও মাকড়সা — বিশেষ করে ছানাদের খাওয়ানোর সময়',
    },
    ecologicalRole: {
      en: 'An important pollinator of many flowering plants, including parasitic mistletoes whose seeds it also spreads.',
      bn: 'বহু ফুলগাছের গুরুত্বপূর্ণ পরাগায়নকারী; পরগাছা জাতীয় উদ্ভিদের (বান্দা) বীজও ছড়িয়ে দেয়।',
    },
    behavior: {
      en: 'Restless and active; builds a hanging pouch nest bound with spider silk and decorated with bits of bark and lichen.',
      bn: 'চঞ্চল ও সদা ব্যস্ত; মাকড়সার জাল দিয়ে বেঁধে ঝুলন্ত থলির মতো বাসা বানায় এবং গাছের ছাল ও শৈবালের টুকরো দিয়ে সাজায়।',
    },
    range: {
      native: [[23.8, 90.4], [28.6, 77.2], [23.6, 58.5], [13.0, 80.2], [7.3, 80.6], [13.7, 100.5]],
    },
    conservation: {
      status: 'LC',
      trend: 'increasing',
      threats: {
        en: ['Pesticide use in gardens and orchards', 'Loss of flowering shrubs in towns'],
        bn: ['বাগান ও ফলবাগানে কীটনাশকের ব্যবহার', 'শহরে ফুলের ঝোপঝাড় কমে যাওয়া'],
      },
      initiatives: {
        en: ['Planting native flowering shrubs in urban gardens', 'Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012'],
        bn: ['শহরের বাগানে দেশি ফুলের গাছ লাগানো', 'বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর অধীনে সুরক্ষিত'],
      },
    },
    facts: {
      en: [
        'Outside the breeding season males moult into an “eclipse” plumage with just a dark stripe down the breast.',
        'Sunbirds pierce the base of some flowers to “steal” nectar without pollinating them.',
      ],
      bn: [
        'প্রজনন মৌসুম শেষে পুরুষ পালক বদলে স্ত্রীর মতো দেখতে হয়, শুধু বুকের মাঝখানে একটি কালো রেখা থাকে।',
        'কখনো কখনো মৌটুসি ফুলের গোড়া ফুটো করে পরাগায়ন না করেই মধু “চুরি” করে।',
      ],
    },
    related: ['common-tailorbird', 'red-vented-bulbul'],
  },
  {
    id: 'common-tailorbird',
    commonName: { en: 'Common Tailorbird', bn: 'পাতি টুনটুনি' },
    scientificName: 'Orthotomus sutorius',
    altNames: {
      en: ['Tailorbird', 'Tailor Bird'],
      bn: ['টুনটুনি', 'দর্জি পাখি'],
    },
    category: 'birds',
    wikiTitle: 'Common tailorbird',
    description: {
      en: 'The common tailorbird is a tiny, restless green warbler with a rusty cap and a cocked tail, found in almost every garden in Bangladesh. It gets its name from its remarkable nest: the bird pierces the edges of large leaves with its bill and stitches them together with plant fibre or spider silk to form a cradle. Its loud, repetitive “towit-towit” call belies its small size.',
      bn: 'পাতি টুনটুনি মাথায় লালচে টুপি আর খাড়া লেজওয়ালা ছোট্ট, চঞ্চল সবুজ পাখি; বাংলাদেশের প্রায় প্রতিটি বাগানেই এদের দেখা মেলে। এর নাম এসেছে আশ্চর্য বাসা থেকে — ঠোঁট দিয়ে বড় পাতার কিনারা ফুটো করে আঁশ বা মাকড়সার সুতা দিয়ে পাতা সেলাই করে দোলনার মতো বাসা বানায়। ছোট্ট শরীর হলেও এর “টুইট-টুইট” ডাক বেশ জোরালো।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Cisticolidae',
      genus: 'Orthotomus',
      species: 'O. sutorius',
    },
    physical: {
      size: { en: 'About 10–14 cm long (breeding males have longer tails)', bn: 'প্রায় ১০–১৪ সেমি লম্বা (প্রজনন মৌসুমে পুরুষের লেজ লম্বা হয়)' },
      weight: { en: 'About 6–10 g', bn: 'প্রায় ৬–১০ গ্রাম' },
      lifespan: { en: 'A few years in the wild', bn: 'বনে কয়েক বছর' },
      features: {
        en: ['Olive-green back and pale underparts', 'Rufous forehead and crown', 'Long tail often held cocked upright'],
        bn: ['জলপাই-সবুজ পিঠ ও ফ্যাকাশে পেট', 'কপাল ও মাথার ওপরটা লালচে-বাদামি', 'লম্বা লেজ প্রায়ই খাড়া করে রাখে'],
      },
    },
    habitat: {
      en: 'Gardens, hedges, scrub, farmland edges and forest undergrowth',
      bn: 'বাগান, বেড়ার ঝোপ, ঝোপঝাড়, ক্ষেতের ধার ও বনের নিচু গাছপালা',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Pakistan, India, Sri Lanka, Nepal and Bangladesh east through southern China and Southeast Asia to Java.',
      bn: 'পাকিস্তান, ভারত, শ্রীলঙ্কা, নেপাল ও বাংলাদেশ থেকে পূর্বে দক্ষিণ চীন ও দক্ষিণ-পূর্ব এশিয়া হয়ে জাভা পর্যন্ত।',
    },
    climate: { en: 'Tropical and subtropical', bn: 'ক্রান্তীয় ও উপক্রান্তীয়' },
    diet: {
      en: 'Insectivore — small insects, larvae and spiders; occasionally nectar',
      bn: 'পতঙ্গভুক — ছোট পোকা, শূককীট ও মাকড়সা; মাঝে মাঝে ফুলের মধুও খায়',
    },
    ecologicalRole: {
      en: 'Keeps garden pests such as aphids and caterpillars in check.',
      bn: 'জাবপোকা ও শুঁয়োপোকার মতো বাগানের ক্ষতিকর পোকা নিয়ন্ত্রণে রাখে।',
    },
    behavior: {
      en: 'Usually in pairs, hopping through low foliage while flicking its tail and calling loudly.',
      bn: 'সাধারণত জোড়ায় থাকে; লেজ নাচাতে নাচাতে আর জোরে ডাকতে ডাকতে নিচু ঝোপের মধ্যে লাফিয়ে বেড়ায়।',
    },
    range: {
      native: [[23.8, 90.4], [28.6, 77.2], [13.0, 80.2], [7.3, 80.6], [21.0, 105.8], [23.1, 113.3], [-6.9, 107.6]],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Clearing of hedges and garden shrubs', 'Pesticide use'],
        bn: ['বেড়ার ঝোপ ও বাগানের গুল্ম কেটে ফেলা', 'কীটনাশকের ব্যবহার'],
      },
      initiatives: {
        en: ['Bird-friendly gardening with native shrubs', 'Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012'],
        bn: ['দেশি গুল্ম দিয়ে পাখিবান্ধব বাগান করা', 'বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর অধীনে সুরক্ষিত'],
      },
    },
    facts: {
      en: [
        'The tailorbird features in Rudyard Kipling’s “Rikki-Tikki-Tavi” as Darzee, the tailor.',
        'It makes knots on the outside of its leaf stitches so they do not pull through.',
        'Tuntuni is a favourite character in Bengali folk tales by Upendrakishore Ray Chowdhury.',
      ],
      bn: [
        'রুডইয়ার্ড কিপলিংয়ের গল্প “রিক্কি-টিক্কি-টাভি”-তে দর্জি নামে টুনটুনির চরিত্র আছে।',
        'পাতার সেলাই যাতে খুলে না যায়, সেজন্য টুনটুনি সুতার বাইরের দিকে গিঁট দেয়।',
        'উপেন্দ্রকিশোর রায়চৌধুরীর “টুনটুনির বই”-এর জনপ্রিয় চরিত্র এই টুনটুনি।',
      ],
    },
    related: ['purple-sunbird', 'baya-weaver', 'oriental-magpie-robin'],
  },
  {
    id: 'black-hooded-oriole',
    commonName: { en: 'Black-hooded Oriole', bn: 'কালোমাথা বেনেবউ' },
    scientificName: 'Oriolus xanthornus',
    altNames: {
      en: ['Oriole', 'Asian Black-headed Oriole'],
      bn: ['বেনেবউ', 'হলদে পাখি'],
    },
    category: 'birds',
    wikiTitle: 'Black-hooded oriole',
    description: {
      en: 'The black-hooded oriole is a brilliant golden-yellow bird with a jet-black head, a pink bill and a rich, fluting song. In Bangladesh it is the familiar “benebou” of village groves and gardens, where it keeps mostly to the leafy canopy. Despite its bright colours it is often heard before it is seen.',
      bn: 'কালোমাথা বেনেবউ উজ্জ্বল সোনালি-হলুদ পাখি, যার মাথা কুচকুচে কালো, ঠোঁট গোলাপি আর গলায় বাঁশির মতো সুরেলা শিস। বাংলাদেশের গ্রামের গাছপালা ও বাগানে এটি পরিচিত “বেনেবউ” বা “হলদে পাখি”; এরা বেশির ভাগ সময় গাছের ঘন পাতার আড়ালে থাকে। উজ্জ্বল রং থাকা সত্ত্বেও এদের প্রায়ই দেখার আগে ডাক শোনা যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Oriolidae',
      genus: 'Oriolus',
      species: 'O. xanthornus',
    },
    physical: {
      size: { en: 'About 25 cm long', bn: 'প্রায় ২৫ সেমি লম্বা' },
      weight: { en: 'About 60–80 g', bn: 'প্রায় ৬০–৮০ গ্রাম' },
      lifespan: { en: 'Several years in the wild', bn: 'বনে কয়েক বছর' },
      features: {
        en: ['Bright golden-yellow body', 'Entire head and throat glossy black', 'Pinkish-red bill and black-and-yellow wings'],
        bn: ['উজ্জ্বল সোনালি-হলুদ শরীর', 'পুরো মাথা ও গলা চকচকে কালো', 'গোলাপি-লাল ঠোঁট এবং কালো-হলুদ ডানা'],
      },
    },
    habitat: {
      en: 'Open woodland, village groves, gardens, orchards and mangrove edges',
      bn: 'হালকা বন, গ্রামের গাছপালা, বাগান, ফলবাগান ও ম্যানগ্রোভের প্রান্ত',
    },
    habitats: ['tropical-forest', 'urban-farmland', 'mangrove'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'India, Sri Lanka, Nepal, Bangladesh and Myanmar east through Thailand and Indochina to Malaysia, Sumatra and Borneo.',
      bn: 'ভারত, শ্রীলঙ্কা, নেপাল, বাংলাদেশ ও মিয়ানমার থেকে থাইল্যান্ড ও ইন্দোচীন হয়ে মালয়েশিয়া, সুমাত্রা ও বোর্নিও পর্যন্ত।',
    },
    climate: { en: 'Tropical monsoon', bn: 'ক্রান্তীয় মৌসুমি' },
    diet: {
      en: 'Fruit such as figs, plus insects, caterpillars and nectar',
      bn: 'ডুমুরসহ নানা ফল, পোকামাকড়, শুঁয়োপোকা ও ফুলের মধু',
    },
    ecologicalRole: {
      en: 'Disperses the seeds of figs and other fruiting trees and eats leaf-eating caterpillars.',
      bn: 'ডুমুর ও অন্যান্য ফলগাছের বীজ ছড়ায় এবং পাতা-খেকো শুঁয়োপোকা খেয়ে গাছ রক্ষা করে।',
    },
    behavior: {
      en: 'Arboreal and usually in pairs; builds a cup nest slung like a hammock in the fork of a branch.',
      bn: 'গাছে থাকতে ভালোবাসে এবং সাধারণত জোড়ায় চলে; ডালের দুই শাখার মাঝে দোলনার মতো ঝুলন্ত বাটি-আকৃতির বাসা বানায়।',
    },
    range: {
      native: [[23.8, 90.4], [22.0, 89.5], [28.6, 77.2], [13.0, 80.2], [13.7, 100.5], [3.1, 101.7]],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Loss of large trees in villages and towns', 'Trapping for the pet trade'],
        bn: ['গ্রাম ও শহরে বড় গাছ কমে যাওয়া', 'পোষার জন্য ধরা ও বিক্রি'],
      },
      initiatives: {
        en: ['Social forestry and roadside tree planting in Bangladesh', 'Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012'],
        bn: ['বাংলাদেশে সামাজিক বনায়ন ও সড়কের পাশে বৃক্ষরোপণ', 'বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর অধীনে সুরক্ষিত'],
      },
    },
    facts: {
      en: [
        'Young birds lack the full black hood, showing a yellowish forehead and a streaked throat instead.',
        'The species name xanthornus means “yellow bird”.',
      ],
      bn: [
        'অল্পবয়সী পাখির মাথা পুরো কালো হয় না — কপাল হলদেটে আর গলায় দাগ থাকে।',
        'বৈজ্ঞানিক নামের xanthornus অর্থ “হলুদ পাখি”।',
      ],
    },
    related: ['black-drongo', 'red-vented-bulbul', 'purple-sunbird'],
  },
  {
    id: 'house-sparrow',
    commonName: { en: 'House Sparrow', bn: 'পাতি চড়ুই' },
    scientificName: 'Passer domesticus',
    altNames: {
      en: ['Sparrow', 'English Sparrow'],
      bn: ['চড়ুই', 'চড়াই'],
    },
    category: 'birds',
    wikiTitle: 'House sparrow',
    description: {
      en: 'The house sparrow is a small, chirpy brown bird that has lived alongside people for thousands of years, nesting in holes and crevices of houses. Males have a grey crown, black bib and chestnut nape, while females are plain buff-brown. Introduced to every inhabited continent, it is one of the most widespread birds on Earth, yet it has declined sharply in many cities.',
      bn: 'পাতি চড়ুই ছোট, কিচিরমিচির করা বাদামি পাখি, যারা হাজার হাজার বছর ধরে মানুষের ঘরের ফাঁকফোকরে বাসা বেঁধে মানুষের পাশেই বাস করছে। পুরুষের মাথার ওপরটা ধূসর, গলায় কালো ছোপ আর ঘাড় তামাটে; স্ত্রী পাখি সাদামাটা হালকা বাদামি। মানুষের মাধ্যমে প্রতিটি জনবসতিপূর্ণ মহাদেশে ছড়িয়ে পড়ায় এটি পৃথিবীর সবচেয়ে বিস্তৃত পাখিদের একটি, তবু বহু শহরে এদের সংখ্যা দ্রুত কমে যাচ্ছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Passeridae',
      genus: 'Passer',
      species: 'P. domesticus',
    },
    physical: {
      size: { en: 'About 14–16 cm long', bn: 'প্রায় ১৪–১৬ সেমি লম্বা' },
      weight: { en: 'About 24–40 g', bn: 'প্রায় ২৪–৪০ গ্রাম' },
      lifespan: { en: 'Usually 3–5 years; rarely over 10 years', bn: 'সাধারণত ৩–৫ বছর; কদাচিৎ ১০ বছরের বেশি' },
      features: {
        en: ['Male has grey crown, black bib and chestnut nape', 'Female plain brown with a pale stripe behind the eye', 'Short, stout seed-cracking bill'],
        bn: ['পুরুষের মাথা ধূসর, গলায় কালো ছোপ ও ঘাড় তামাটে', 'স্ত্রী সাদামাটা বাদামি, চোখের পেছনে হালকা রেখা', 'বীজ ভাঙার উপযোগী খাটো, মোটা ঠোঁট'],
      },
    },
    habitat: {
      en: 'Towns, villages, farms and markets — closely tied to human buildings',
      bn: 'শহর, গ্রাম, খামার ও বাজার — মানুষের ঘরবাড়ির সঙ্গে ঘনিষ্ঠভাবে জড়িত',
    },
    habitats: ['urban-farmland'],
    regions: ['south-asia', 'europe', 'africa', 'east-asia', 'north-america', 'south-america', 'oceania'],
    distribution: {
      en: 'Native to Europe, North Africa and much of Asia including Bangladesh; introduced to the Americas, southern Africa, Australia and New Zealand.',
      bn: 'ইউরোপ, উত্তর আফ্রিকা এবং বাংলাদেশসহ এশিয়ার বেশির ভাগ অঞ্চলের স্থানীয় পাখি; আমেরিকা, দক্ষিণ আফ্রিকা, অস্ট্রেলিয়া ও নিউজিল্যান্ডে মানুষের মাধ্যমে ছড়িয়েছে।',
    },
    climate: { en: 'Almost all climates where people live, from tropical to cold temperate', bn: 'মানুষ বাস করে এমন প্রায় সব জলবায়ু — ক্রান্তীয় থেকে শীতল নাতিশীতোষ্ণ' },
    diet: {
      en: 'Seeds, grain and food scraps; chicks are fed mainly on insects',
      bn: 'বীজ, শস্যদানা ও খাবারের উচ্ছিষ্ট; ছানাদের মূলত পোকামাকড় খাওয়ায়',
    },
    ecologicalRole: {
      en: 'Eats weed seeds and insects, and is prey for cats, hawks and owls in towns.',
      bn: 'আগাছার বীজ ও পোকামাকড় খায় এবং শহরে বিড়াল, বাজপাখি ও পেঁচার খাদ্য।',
    },
    behavior: {
      en: 'Highly social; feeds in flocks, takes dust baths and nests in loose colonies under roofs and in wall cavities.',
      bn: 'অত্যন্ত সামাজিক; দল বেঁধে খায়, ধুলোয় গড়াগড়ি দিয়ে গোসল করে এবং ছাদের নিচে ও দেয়ালের ফোকরে কাছাকাছি বাসা বাঁধে।',
    },
    range: {
      native: [[51.5, -0.1], [48.9, 2.3], [55.8, 37.6], [23.8, 90.4], [30.0, 31.2], [33.7, 73.0]],
      introduced: [[40.7, -74.0], [-33.9, 151.2], [-23.5, -46.6], [-33.9, 18.4], [-36.8, 174.8]],
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Modern buildings without nesting holes', 'Fewer insects for chicks due to pesticides and paved gardens', 'Air pollution in cities'],
        bn: ['বাসা বাঁধার ফোকরহীন আধুনিক দালানকোঠা', 'কীটনাশক ও বাঁধানো আঙিনার কারণে ছানাদের খাবারের পোকা কমে যাওয়া', 'শহরের বায়ুদূষণ'],
      },
      initiatives: {
        en: ['World Sparrow Day on 20 March', 'Installing nest boxes on homes and buildings'],
        bn: ['প্রতি বছর ২০ মার্চ বিশ্ব চড়ুই দিবস পালন', 'বাড়ি ও দালানে কৃত্রিম বাসা (নেস্ট বক্স) লাগানো'],
      },
    },
    facts: {
      en: [
        'It is the state bird of Delhi, India.',
        'House sparrows were introduced to New York in the 1850s and spread across North America.',
        'It has followed farming and settlements for roughly 10,000 years.',
      ],
      bn: [
        'চড়ুই ভারতের দিল্লির রাজ্য-পাখি।',
        '১৮৫০-এর দশকে নিউইয়র্কে চড়ুই ছাড়া হয়, এরপর এরা পুরো উত্তর আমেরিকায় ছড়িয়ে পড়ে।',
        'প্রায় ১০,০০০ বছর ধরে চড়ুই মানুষের কৃষি ও বসতির সঙ্গী।',
      ],
    },
    related: ['baya-weaver', 'house-crow', 'barn-swallow'],
  },
  {
    id: 'indian-peafowl',
    commonName: { en: 'Indian Peafowl', bn: 'নীল ময়ূর' },
    scientificName: 'Pavo cristatus',
    altNames: {
      en: ['Peacock', 'Peahen', 'Blue Peafowl'],
      bn: ['ময়ূর', 'ময়ূরী', 'ভারতীয় ময়ূর'],
    },
    category: 'birds',
    wikiTitle: 'Indian peafowl',
    description: {
      en: 'The Indian peafowl is one of the most spectacular birds in the world, the male (peacock) displaying a shimmering train of eye-spotted feathers in a great fan. It is the national bird of India and is deeply woven into the art, religion and folklore of the subcontinent. In Bangladesh wild peafowl have vanished, and the bird is now seen mainly in zoos, parks and private collections.',
      bn: 'নীল ময়ূর পৃথিবীর সবচেয়ে মনোমুগ্ধকর পাখিগুলোর একটি; পুরুষ ময়ূর চোখের মতো নকশাওয়ালা ঝলমলে পেখম পাখার মতো মেলে ধরে। এটি ভারতের জাতীয় পাখি এবং উপমহাদেশের শিল্পকলা, ধর্ম ও লোকগাথার সঙ্গে গভীরভাবে জড়িয়ে আছে। বাংলাদেশের প্রকৃতি থেকে বুনো ময়ূর হারিয়ে গেছে; এখন মূলত চিড়িয়াখানা, পার্ক ও ব্যক্তিগত সংগ্রহে এদের দেখা যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Galliformes',
      family: 'Phasianidae',
      genus: 'Pavo',
      species: 'P. cristatus',
    },
    physical: {
      size: {
        en: 'Male about 1–1.2 m body length, up to about 2.2 m with the train; female about 95 cm',
        bn: 'পুরুষের দেহ প্রায় ১–১.২ মিটার, পেখমসহ প্রায় ২.২ মিটার পর্যন্ত; স্ত্রী প্রায় ৯৫ সেমি',
      },
      weight: { en: 'Male about 4–6 kg; female about 2.7–4 kg', bn: 'পুরুষ প্রায় ৪–৬ কেজি; স্ত্রী প্রায় ২.৭–৪ কেজি' },
      lifespan: { en: 'About 15–20 years; longer in captivity', bn: 'প্রায় ১৫–২০ বছর; আবদ্ধ অবস্থায় আরও বেশি' },
      features: {
        en: ['Male has an iridescent blue neck and a train of up to about 200 eye-spotted feathers', 'Fan-shaped crest on the head of both sexes', 'Female (peahen) brownish with a green neck and no train'],
        bn: ['পুরুষের গলা ঝলমলে নীল এবং প্রায় ২০০টি চোখ-নকশার পালকের পেখম', 'নারী-পুরুষ উভয়ের মাথায় পাখার মতো ঝুঁটি', 'স্ত্রী ময়ূরী বাদামি, গলা সবুজ এবং পেখম নেই'],
      },
    },
    habitat: {
      en: 'Dry and moist deciduous forest, scrub and farmland near water, often close to villages and temples',
      bn: 'শুষ্ক ও আর্দ্র পর্ণমোচী বন, ঝোপঝাড় এবং পানির কাছের কৃষিজমি — প্রায়ই গ্রাম ও মন্দিরের আশপাশে',
    },
    habitats: ['tropical-forest', 'grassland', 'urban-farmland'],
    regions: ['south-asia'],
    distribution: {
      en: 'India, Sri Lanka, Pakistan and Nepal; formerly Bangladesh. Introduced to many countries, including feral populations in Australia, New Zealand and the USA.',
      bn: 'ভারত, শ্রীলঙ্কা, পাকিস্তান ও নেপাল; একসময় বাংলাদেশেও ছিল। বহু দেশে নেওয়া হয়েছে — অস্ট্রেলিয়া, নিউজিল্যান্ড ও যুক্তরাষ্ট্রে বুনো হয়ে যাওয়া জনগোষ্ঠী আছে।',
    },
    climate: { en: 'Tropical and subtropical, dry to monsoon', bn: 'ক্রান্তীয় ও উপক্রান্তীয় — শুষ্ক থেকে মৌসুমি' },
    diet: {
      en: 'Omnivore — seeds, grain, shoots, insects, small reptiles and even small snakes',
      bn: 'সর্বভুক — বীজ, শস্যদানা, কচি ডগা, পোকামাকড়, ছোট সরীসৃপ, এমনকি ছোট সাপও',
    },
    ecologicalRole: {
      en: 'Controls insects and small snakes, and serves as prey for tigers, leopards and other predators.',
      bn: 'পোকামাকড় ও ছোট সাপ নিয়ন্ত্রণে রাখে এবং বাঘ, চিতাবাঘসহ অন্যান্য শিকারির খাদ্য।',
    },
    behavior: {
      en: 'Forages on the ground in small groups and roosts high in trees; males display their trains and call loudly in the monsoon breeding season.',
      bn: 'ছোট দলে মাটিতে খাবার খোঁজে এবং রাতে উঁচু গাছে আশ্রয় নেয়; বর্ষার প্রজনন মৌসুমে পুরুষ পেখম মেলে নাচে ও জোরে ডাকে।',
    },
    range: {
      native: [[28.6, 77.2], [26.9, 75.8], [13.0, 77.6], [7.3, 80.6], [27.5, 84.4], [25.4, 68.4]],
      introduced: [[21.3, -157.8], [-35.8, 137.2], [-39.5, 176.9]],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Poaching for meat and feathers', 'Poisoning from pesticide-treated seeds', 'Loss of habitat in its former range including Bangladesh'],
        bn: ['মাংস ও পালকের জন্য চোরাশিকার', 'কীটনাশক মেশানো বীজ খেয়ে বিষক্রিয়া', 'বাংলাদেশসহ আগের বিচরণ এলাকায় আবাসস্থল ধ্বংস'],
      },
      initiatives: {
        en: ['Highest legal protection under India’s Wildlife Protection Act', 'Captive breeding in zoos and safari parks in Bangladesh'],
        bn: ['ভারতের বন্যপ্রাণী সুরক্ষা আইনে সর্বোচ্চ সুরক্ষা', 'বাংলাদেশের চিড়িয়াখানা ও সাফারি পার্কে প্রজনন'],
      },
    },
    facts: {
      en: [
        'The peacock’s “train” is not its tail but elongated upper tail coverts.',
        'Peafowl colours come from microscopic structures in the feathers, not pigment alone.',
        'Peacock feathers are traditionally associated with Lord Krishna.',
      ],
      bn: [
        'ময়ূরের পেখম আসলে লেজ নয়, লেজের ওপরের লম্বা ঢাকনি-পালক।',
        'ময়ূরের ঝলমলে রং শুধু রঞ্জক নয়, পালকের অতি ক্ষুদ্র গঠন থেকে আলো প্রতিফলিত হয়ে তৈরি হয়।',
        'ময়ূরপুচ্ছ ঐতিহ্যগতভাবে শ্রীকৃষ্ণের সঙ্গে যুক্ত।',
      ],
    },
    related: ['red-junglefowl', 'kalij-pheasant', 'greater-bird-of-paradise'],
  },
];
