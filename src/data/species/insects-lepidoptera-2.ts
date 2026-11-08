import type { Species } from '@/types';

export const insectsLepidoptera2: Species[] = [
  {
    id: 'common-crow',
    commonName: { en: 'Common Crow', bn: 'কমন ক্রো' },
    scientificName: 'Euploea core',
    altNames: {
      en: ['Common Indian Crow', 'Australian Crow'],
      bn: ['কাক প্রজাপতি', 'কালো কাক প্রজাপতি'],
    },
    category: 'insects',
    wikiTitle: 'Euploea core',
    description: {
      en: 'The common crow is a glossy dark-brown milkweed butterfly with rows of white spots along the wing margins. Its caterpillars feed on latex-rich plants such as oleander and figs, making the adult toxic and avoided by birds. It is common throughout Bangladesh, and its shiny, mirror-like chrysalis is a favourite find for children.',
      bn: 'কমন ক্রো চকচকে গাঢ় বাদামি রঙের মিল্কউইড গোত্রের প্রজাপতি, যার ডানার কিনারায় সাদা ফোঁটার সারি থাকে। এর শুঁয়োপোকা করবী, ডুমুরসহ কষযুক্ত গাছ খায়, ফলে পূর্ণবয়স্ক প্রজাপতি বিষাক্ত হয় এবং পাখিরা একে এড়িয়ে চলে। বাংলাদেশজুড়ে এটি সাধারণ, আর এর আয়নার মতো চকচকে পিউপা শিশুদের কাছে দারুণ আকর্ষণীয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Nymphalidae',
      genus: 'Euploea',
      species: 'E. core',
    },
    physical: {
      size: { en: 'Wingspan about 8.5–9.5 cm', bn: 'ডানার বিস্তার প্রায় ৮.৫–৯.৫ সেমি' },
      weight: { en: 'Well under 1 g', bn: '১ গ্রামের অনেক কম' },
      lifespan: { en: 'Adults live several weeks to a few months', bn: 'পূর্ণবয়স্ক প্রজাপতি কয়েক সপ্তাহ থেকে কয়েক মাস বাঁচে' },
      features: {
        en: [
          'Dark brown wings with white spots along the margins',
          'Metallic silver-gold chrysalis',
          'Caterpillar striped with four pairs of long black filaments',
        ],
        bn: [
          'গাঢ় বাদামি ডানার কিনারায় সাদা ফোঁটা',
          'ধাতব রুপালি-সোনালি পিউপা',
          'ডোরাকাটা শুঁয়োপোকার গায়ে চার জোড়া লম্বা কালো শুঁড়',
        ],
      },
    },
    habitat: {
      en: 'Gardens, villages, forest edges and scrub',
      bn: 'বাগান, গ্রাম, বনের প্রান্ত ও ঝোপঝাড়',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'oceania'],
    distribution: {
      en: 'South Asia, Southeast Asia and Australia.',
      bn: 'দক্ষিণ এশিয়া, দক্ষিণ-পূর্ব এশিয়া ও অস্ট্রেলিয়া।',
    },
    climate: { en: 'Tropical and subtropical climates', bn: 'ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Caterpillars eat oleander, figs and milkweeds; adults drink nectar',
      bn: 'শুঁয়োপোকা করবী, ডুমুর ও আকন্দজাতীয় গাছ খায়; পূর্ণবয়স্ক প্রজাপতি ফুলের মধু পান করে',
    },
    ecologicalRole: {
      en: 'A pollinator and the toxic model for several mimics, including some female eggflies and swallowtails.',
      bn: 'পরাগায়নকারী এবং কয়েকটি অনুকরণকারী প্রজাপতির বিষাক্ত "মডেল", যেমন কিছু এগফ্লাই ও সোয়ালোটেইলের স্ত্রী প্রজাপতি।',
    },
    behavior: {
      en: 'Slow, sailing flight; in the dry season many crows gather to rest together in shady places.',
      bn: 'ধীরে ভেসে ভেসে ওড়ে; শুষ্ক মৌসুমে অনেক প্রজাপতি একসঙ্গে ছায়াঘেরা জায়গায় বিশ্রাম নেয়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [24.4, 88.6],
        [19.1, 72.9],
        [7.3, 80.6],
        [13.75, 100.5],
        [-27.5, 153.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; local pesticide use'],
        bn: ['হুমকির মুখে নেই; স্থানীয়ভাবে কীটনাশক ব্যবহার'],
      },
      initiatives: {
        en: ['Butterfly gardens', 'Migration and roost monitoring in India'],
        bn: ['প্রজাপতি বাগান', 'ভারতে পরিযান ও বিশ্রামস্থল পর্যবেক্ষণ'],
      },
    },
    facts: {
      en: [
        'When handled, males may extend yellow hair-pencils that release a scent.',
        'Its chrysalis looks like a drop of polished metal.',
      ],
      bn: [
        'হাতে ধরলে পুরুষ প্রজাপতি পেটের আগা থেকে হলুদ লোমগুচ্ছ বের করে গন্ধ ছড়ায়।',
        'এর পিউপা দেখতে যেন পালিশ করা ধাতুর একটি ফোঁটা।',
      ],
    },
    related: ['blue-tiger', 'plain-tiger', 'great-eggfly'],
  },
  {
    id: 'silkworm-moth',
    commonName: { en: 'Domestic Silkworm Moth', bn: 'রেশম পোকা' },
    scientificName: 'Bombyx mori',
    altNames: {
      en: ['Silkworm', 'Mulberry Silkworm', 'Silk Moth'],
      bn: ['তুঁত রেশমপোকা', 'রেশম মথ', 'পলু পোকা'],
    },
    category: 'insects',
    wikiTitle: 'Bombyx mori',
    description: {
      en: 'The domestic silkworm is a moth bred by people for at least 5,000 years for the silk thread its caterpillar spins into a cocoon. It no longer exists in the wild — adults cannot fly and depend entirely on humans. In Bangladesh, Rajshahi is the heart of sericulture, and "Rajshahi silk" made from mulberry silkworms is famous across the country.',
      bn: 'রেশম পোকা এমন একটি মথ, যার শুঁয়োপোকার বোনা গুটির সুতার জন্য মানুষ অন্তত ৫,০০০ বছর ধরে একে পালন করে আসছে। প্রকৃতিতে এর আর কোনো বন্য জনগোষ্ঠী নেই — পূর্ণবয়স্ক মথ উড়তে পারে না, পুরোপুরি মানুষের ওপর নির্ভরশীল। বাংলাদেশে রাজশাহী রেশম চাষের প্রাণকেন্দ্র, আর তুঁত রেশম থেকে তৈরি "রাজশাহী সিল্ক" সারা দেশে বিখ্যাত।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Bombycidae',
      genus: 'Bombyx',
      species: 'B. mori',
    },
    physical: {
      size: {
        en: 'Moth wingspan about 4–5 cm; mature caterpillar about 7–8 cm',
        bn: 'মথের ডানার বিস্তার প্রায় ৪–৫ সেমি; পূর্ণবয়স্ক শুঁয়োপোকা প্রায় ৭–৮ সেমি',
      },
      weight: { en: 'Mature caterpillar up to about 4–5 g', bn: 'পূর্ণবয়স্ক শুঁয়োপোকা প্রায় ৪–৫ গ্রাম পর্যন্ত' },
      lifespan: {
        en: 'Life cycle about 6–8 weeks; adult moths live only a few days and do not eat',
        bn: 'জীবনচক্র প্রায় ৬–৮ সপ্তাহ; পূর্ণবয়স্ক মথ মাত্র কয়েক দিন বাঁচে এবং কিছুই খায় না',
      },
      features: {
        en: [
          'Creamy white, furry moth with reduced mouthparts and no ability to fly',
          'Caterpillar spins a cocoon from one continuous silk thread often 1 km or longer',
          'Caterpillar has a small horn at the tail end',
        ],
        bn: [
          'সাদাটে, লোমশ মথ; মুখাংশ অপরিণত এবং উড়তে পারে না',
          'শুঁয়োপোকা একটানা একটি রেশম সুতা দিয়ে গুটি বোনে, যা প্রায়ই ১ কিলোমিটার বা তারও বেশি লম্বা',
          'শুঁয়োপোকার লেজের দিকে একটি ছোট শিং থাকে',
        ],
      },
    },
    habitat: {
      en: 'Exists only in captivity — rearing houses beside mulberry plantations',
      bn: 'কেবল মানুষের তত্ত্বাবধানে — তুঁতবাগানের পাশে পলুঘরে পালিত হয়',
    },
    habitats: ['urban-farmland'],
    regions: ['east-asia', 'south-asia', 'southeast-asia'],
    distribution: {
      en: 'Domesticated in ancient China from the wild silkmoth Bombyx mandarina; now reared in China, India, Bangladesh, Uzbekistan, Thailand and elsewhere.',
      bn: 'প্রাচীন চীনে বুনো রেশম মথ Bombyx mandarina থেকে গৃহপালিত করা হয়; এখন চীন, ভারত, বাংলাদেশ, উজবেকিস্তান, থাইল্যান্ডসহ নানা দেশে পালন করা হয়।',
    },
    climate: {
      en: 'Reared best at mild temperatures of about 23–28 °C with moderate humidity',
      bn: 'প্রায় ২৩–২৮ ডিগ্রি সেলসিয়াস তাপমাত্রা ও মাঝারি আর্দ্রতায় সবচেয়ে ভালো পালন হয়',
    },
    diet: {
      en: 'Caterpillars eat only mulberry (tut) leaves; adults do not feed',
      bn: 'শুঁয়োপোকা শুধু তুঁতপাতা খায়; পূর্ণবয়স্ক মথ কিছুই খায় না',
    },
    ecologicalRole: {
      en: 'No wild role; economically vital for silk, a model organism in genetics, and its pupae are eaten or used as feed.',
      bn: 'প্রকৃতিতে কোনো ভূমিকা নেই; রেশম শিল্পে অর্থনৈতিকভাবে গুরুত্বপূর্ণ, জিনতত্ত্ব গবেষণার মডেল প্রাণী, আর এর পিউপা খাদ্য ও পশুখাদ্য হিসেবে ব্যবহৃত হয়।',
    },
    behavior: {
      en: 'Caterpillars moult four times, then spin a cocoon over 2–3 days; adults mate and lay 300–500 eggs within days of emerging.',
      bn: 'শুঁয়োপোকা চারবার খোলস বদলায়, তারপর ২–৩ দিনে গুটি বোনে; মথ বের হয়ে কয়েক দিনের মধ্যে মিলিত হয়ে ৩০০–৫০০টি ডিম পাড়ে।',
    },
    range: {
      native: [
        [30.3, 120.2],
        [31.3, 120.6],
        [34.3, 108.9],
        [24.4, 88.6],
        [12.3, 76.6],
      ],
      introduced: [
        [41.3, 69.3],
        [15.0, 102.1],
        [45.7, 9.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not applicable to a domestic species; sericulture in Bangladesh has declined due to competition from imported silk', 'Viral and fungal diseases in rearing houses'],
        bn: ['গৃহপালিত প্রজাতি বলে প্রযোজ্য নয়; তবে আমদানি করা রেশমের প্রতিযোগিতায় বাংলাদেশে রেশম চাষ কমে গেছে', 'পলুঘরে ভাইরাস ও ছত্রাকজনিত রোগ'],
      },
      initiatives: {
        en: ['Bangladesh Sericulture Development Board and research institute in Rajshahi', 'Breeding disease-resistant silkworm strains'],
        bn: ['রাজশাহীতে বাংলাদেশ রেশম উন্নয়ন বোর্ড ও রেশম গবেষণা ইনস্টিটিউট', 'রোগ-প্রতিরোধী রেশমপোকার জাত উদ্ভাবন'],
      },
    },
    facts: {
      en: [
        'Silk production was a closely guarded secret of China for many centuries, giving its name to the Silk Road.',
        'About 2,500–3,000 cocoons are needed to make roughly half a kilogram of silk.',
        'It is one of the very few fully domesticated insects.',
      ],
      bn: [
        'বহু শতাব্দী ধরে রেশম তৈরির কৌশল চীনের কঠোরভাবে গোপন রাখা রহস্য ছিল; এখান থেকেই "সিল্ক রোড" নামের উৎপত্তি।',
        'প্রায় আধা কেজি রেশম তৈরি করতে ২,৫০০–৩,০০০টি গুটি লাগে।',
        'সম্পূর্ণ গৃহপালিত হাতে-গোনা কয়েকটি পতঙ্গের মধ্যে এটি একটি।',
      ],
    },
    related: ['atlas-moth', 'deaths-head-hawkmoth', 'western-honey-bee'],
  },
  {
    id: 'queen-alexandras-birdwing',
    commonName: { en: "Queen Alexandra's Birdwing", bn: 'কুইন আলেকজান্দ্রার বার্ডউইং' },
    scientificName: 'Ornithoptera alexandrae',
    altNames: {
      en: ['Alexandra Birdwing'],
      bn: ['পৃথিবীর বৃহত্তম প্রজাপতি'],
    },
    category: 'insects',
    wikiTitle: "Queen Alexandra's birdwing",
    description: {
      en: "Queen Alexandra's birdwing is the largest butterfly in the world, with females spanning up to about 28 cm. It lives only in a small area of rainforest in Oro Province, Papua New Guinea. Males have iridescent turquoise-and-green wings, and the species is so rare that international trade is strictly banned.",
      bn: 'কুইন আলেকজান্দ্রার বার্ডউইং পৃথিবীর সবচেয়ে বড় প্রজাপতি; স্ত্রী প্রজাপতির ডানার বিস্তার প্রায় ২৮ সেমি পর্যন্ত হতে পারে। এটি কেবল পাপুয়া নিউগিনির ওরো প্রদেশের ছোট একটি রেইনফরেস্ট এলাকায় পাওয়া যায়। পুরুষের ডানা ঝিকমিকে ফিরোজা ও সবুজ রঙের; প্রজাতিটি এতই বিরল যে এর আন্তর্জাতিক বাণিজ্য কঠোরভাবে নিষিদ্ধ।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Papilionidae',
      genus: 'Ornithoptera',
      species: 'O. alexandrae',
    },
    physical: {
      size: {
        en: 'Females wingspan up to about 25–28 cm; males smaller, about 16–20 cm',
        bn: 'স্ত্রী প্রজাপতির ডানার বিস্তার প্রায় ২৫–২৮ সেমি পর্যন্ত; পুরুষ ছোট, প্রায় ১৬–২০ সেমি',
      },
      weight: { en: 'Up to about 12 g', bn: 'প্রায় ১২ গ্রাম পর্যন্ত' },
      lifespan: { en: 'Adults live about 3 months', bn: 'পূর্ণবয়স্ক প্রজাপতি প্রায় ৩ মাস বাঁচে' },
      features: {
        en: [
          'Females brown with cream markings and the largest wings of any butterfly',
          'Males iridescent blue-green with a bright yellow abdomen',
        ],
        bn: [
          'স্ত্রী প্রজাপতি বাদামি, ঘিয়া রঙের দাগযুক্ত; প্রজাপতিদের মধ্যে সবচেয়ে বড় ডানা',
          'পুরুষ ঝিকমিকে নীল-সবুজ, পেট উজ্জ্বল হলুদ',
        ],
      },
    },
    habitat: {
      en: 'Lowland tropical rainforest canopy',
      bn: 'নিম্নভূমির ক্রান্তীয় রেইনফরেস্টের চাঁদোয়া',
    },
    habitats: ['tropical-forest'],
    regions: ['oceania'],
    distribution: {
      en: 'Only the Popondetta plain and nearby forests of Oro Province, Papua New Guinea.',
      bn: 'কেবল পাপুয়া নিউগিনির ওরো প্রদেশের পপনডেটা সমভূমি ও আশপাশের বন।',
    },
    climate: { en: 'Hot, wet equatorial climate', bn: 'উষ্ণ ও আর্দ্র নিরক্ষীয় জলবায়ু' },
    diet: {
      en: 'Caterpillars eat only certain toxic Aristolochia vines; adults drink nectar from tall flowering trees',
      bn: 'শুঁয়োপোকা শুধু নির্দিষ্ট কিছু বিষাক্ত Aristolochia লতা খায়; পূর্ণবয়স্ক প্রজাপতি উঁচু ফুলেল গাছের মধু পান করে',
    },
    ecologicalRole: {
      en: 'A canopy pollinator and a flagship species for protecting New Guinea rainforest.',
      bn: 'বনের চাঁদোয়ার পরাগায়নকারী এবং নিউগিনির রেইনফরেস্ট রক্ষার প্রতীকী প্রজাতি।',
    },
    behavior: {
      en: 'Flies high in the canopy in early morning and late afternoon; females lay eggs on vines climbing tall trees.',
      bn: 'সকাল ও বিকেলে বনের উঁচু চাঁদোয়ায় ওড়ে; স্ত্রী প্রজাপতি উঁচু গাছ বেয়ে ওঠা লতায় ডিম পাড়ে।',
    },
    range: {
      native: [
        [-8.77, 148.23],
        [-8.9, 148.4],
        [-8.6, 148.0],
        [-9.0, 148.1],
      ],
      endemicTo: { en: 'Oro Province, Papua New Guinea', bn: 'পাপুয়া নিউগিনির ওরো প্রদেশ' },
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Clearing of rainforest for oil-palm plantations and logging', 'Volcanic eruption of Mount Lamington destroyed habitat in 1951', 'Illegal collecting for the specimen trade'],
        bn: ['অয়েল পাম বাগান ও কাঠ কাটার জন্য রেইনফরেস্ট উজাড়', '১৯৫১ সালে মাউন্ট ল্যামিংটন আগ্নেয়গিরির অগ্ন্যুৎপাতে আবাসস্থল ধ্বংস', 'নমুনা ব্যবসার জন্য অবৈধ সংগ্রহ'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix I, banning international commercial trade', 'Planting host vines and protecting forest with local landowners'],
        bn: ['CITES পরিশিষ্ট-১-এ তালিকাভুক্ত, আন্তর্জাতিক বাণিজ্য নিষিদ্ধ', 'স্থানীয় ভূমিমালিকদের সঙ্গে খাদ্য-লতা রোপণ ও বন সংরক্ষণ'],
      },
    },
    facts: {
      en: [
        'The first specimen collected in 1906 was brought down with a small shotgun.',
        'It is named after Queen Alexandra, wife of King Edward VII of Britain.',
      ],
      bn: [
        '১৯০৬ সালে সংগৃহীত প্রথম নমুনাটিকে ছোট একটি শটগান দিয়ে গুলি করে নামানো হয়েছিল।',
        'ব্রিটেনের রাজা সপ্তম এডওয়ার্ডের স্ত্রী রানি আলেকজান্দ্রার নামে এর নামকরণ।',
      ],
    },
    related: ['common-rose', 'blue-morpho', 'atlas-moth'],
  },
  {
    id: 'blue-morpho',
    commonName: { en: 'Menelaus Blue Morpho', bn: 'নীল মরফো' },
    scientificName: 'Morpho menelaus',
    altNames: {
      en: ['Blue Morpho', 'Menelaus Morpho'],
      bn: ['ব্লু মরফো', 'মেনেলাস মরফো'],
    },
    category: 'insects',
    wikiTitle: 'Morpho menelaus',
    description: {
      en: 'The Menelaus blue morpho is one of the most dazzling butterflies on Earth, with large wings that flash a brilliant metallic blue. The colour is not pigment but structural — microscopic scale ridges reflect blue light. It lives in the rainforests of Central and South America, where its flashing flight confuses predators.',
      bn: 'নীল মরফো পৃথিবীর সবচেয়ে ঝলমলে প্রজাপতিগুলোর একটি; এর বড় ডানা থেকে উজ্জ্বল ধাতব নীল আলো ঠিকরে পড়ে। এই রং কোনো রঞ্জক নয়, বরং গাঠনিক — ডানার আঁশের অতিক্ষুদ্র খাঁজ নীল আলো প্রতিফলিত করে। মধ্য ও দক্ষিণ আমেরিকার রেইনফরেস্টে এর বাস, আর ওড়ার সময় নীল ঝলকানি শিকারিকে বিভ্রান্ত করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Nymphalidae',
      genus: 'Morpho',
      species: 'M. menelaus',
    },
    physical: {
      size: { en: 'Wingspan about 12–15 cm', bn: 'ডানার বিস্তার প্রায় ১২–১৫ সেমি' },
      weight: { en: 'About 1 g or less', bn: 'প্রায় ১ গ্রাম বা তার কম' },
      lifespan: {
        en: 'Adults live about 2–3 weeks; whole life cycle about 4 months',
        bn: 'পূর্ণবয়স্ক প্রজাপতি প্রায় ২–৩ সপ্তাহ বাঁচে; পুরো জীবনচক্র প্রায় ৪ মাস',
      },
      features: {
        en: [
          'Upperside brilliant iridescent blue (structural colour)',
          'Underside brown with eyespots for camouflage when wings are closed',
        ],
        bn: [
          'ডানার ওপরের পিঠ ঝিকমিকে উজ্জ্বল নীল (গাঠনিক রং)',
          'নিচের পিঠ বাদামি, চোখের মতো দাগযুক্ত — ডানা বন্ধ করলে ছদ্মবেশ হয়',
        ],
      },
    },
    habitat: {
      en: 'Tropical rainforest, especially along rivers and clearings',
      bn: 'ক্রান্তীয় রেইনফরেস্ট, বিশেষত নদীর ধার ও বনের ফাঁকা জায়গা',
    },
    habitats: ['tropical-forest'],
    regions: ['south-america', 'north-america'],
    distribution: {
      en: 'Central America and the Amazon basin of South America.',
      bn: 'মধ্য আমেরিকা ও দক্ষিণ আমেরিকার আমাজন অববাহিকা।',
    },
    climate: { en: 'Hot, humid equatorial climate', bn: 'উষ্ণ ও আর্দ্র নিরক্ষীয় জলবায়ু' },
    diet: {
      en: 'Caterpillars eat legumes; adults drink juice of rotting fruit, tree sap and fungi rather than nectar',
      bn: 'শুঁয়োপোকা শিমজাতীয় গাছ খায়; পূর্ণবয়স্ক প্রজাপতি ফুলের মধুর বদলে পচা ফলের রস, গাছের কষ ও ছত্রাক খায়',
    },
    ecologicalRole: {
      en: 'Helps recycle rotting fruit and is prey for jacamars and flycatchers.',
      bn: 'পচা ফল পুনঃচক্রায়নে সাহায্য করে এবং জ্যাকামার ও চুটকি পাখির খাদ্য।',
    },
    behavior: {
      en: 'Males patrol forest streams; the alternating blue flash and brown underside make it seem to vanish in flight.',
      bn: 'পুরুষেরা বনের ঝরনা বরাবর টহল দেয়; ওড়ার সময় নীল ঝলক আর বাদামি নিচের পিঠ পালাক্রমে দেখা যাওয়ায় মনে হয় যেন হঠাৎ অদৃশ্য হয়ে যাচ্ছে।',
    },
    range: {
      native: [
        [9.9, -84.1],
        [8.5, -80.0],
        [-3.1, -60.0],
        [-12.6, -69.2],
        [4.6, -74.1],
        [5.0, -53.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Deforestation of the Amazon and Central America', 'Collection for decorative wing jewellery'],
        bn: ['আমাজন ও মধ্য আমেরিকায় বন উজাড়', 'ডানা দিয়ে গয়না ও সাজসামগ্রী তৈরির জন্য সংগ্রহ'],
      },
      initiatives: {
        en: ['Butterfly farming that supplies zoos sustainably', 'Rainforest protected areas'],
        bn: ['টেকসইভাবে চিড়িয়াখানায় সরবরাহের জন্য প্রজাপতি খামার', 'রেইনফরেস্ট সংরক্ষিত এলাকা'],
      },
    },
    facts: {
      en: [
        'Its wing nanostructure has inspired anti-counterfeiting inks and fabrics without dyes.',
        'The blue flash can be seen by pilots flying low over the forest canopy.',
      ],
      bn: [
        'এর ডানার অতিক্ষুদ্র গঠন থেকে অনুপ্রাণিত হয়ে জালিয়াতি-রোধী কালি ও রঞ্জকহীন কাপড় তৈরি হয়েছে।',
        'বনের ওপর দিয়ে নিচু হয়ে ওড়া বিমানচালকেরাও এর নীল ঝলক দেখতে পান বলে জানা যায়।',
      ],
    },
    related: ['queen-alexandras-birdwing', 'painted-lady', 'monarch-butterfly'],
  },
  {
    id: 'painted-lady',
    commonName: { en: 'Painted Lady', bn: 'পেইন্টেড লেডি' },
    scientificName: 'Vanessa cardui',
    altNames: {
      en: ['Cosmopolitan Butterfly', 'Thistle Butterfly'],
      bn: ['রাঙা প্রজাপতি', 'কসমোপলিটান প্রজাপতি'],
    },
    category: 'insects',
    wikiTitle: 'Vanessa cardui',
    description: {
      en: 'The painted lady is the most widespread butterfly in the world, found on every continent except Antarctica and South America. It is a record-breaking migrant: generations travel up to about 14,000 km in a yearly round trip between tropical Africa and Europe, crossing the Sahara. It also reaches Bangladesh, especially in the cooler months.',
      bn: 'পেইন্টেড লেডি পৃথিবীর সবচেয়ে বিস্তৃত প্রজাপতি, অ্যান্টার্কটিকা ও দক্ষিণ আমেরিকা ছাড়া সব মহাদেশে এর দেখা মেলে। এটি রেকর্ড-গড়া পরিযায়ী — কয়েক প্রজন্ম মিলে ক্রান্তীয় আফ্রিকা ও ইউরোপের মধ্যে সাহারা পেরিয়ে বছরে প্রায় ১৪,০০০ কিলোমিটার পর্যন্ত পাড়ি দেয়। বাংলাদেশেও এটি আসে, বিশেষ করে শীতের মাসগুলোতে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Nymphalidae',
      genus: 'Vanessa',
      species: 'V. cardui',
    },
    physical: {
      size: { en: 'Wingspan about 5–7 cm', bn: 'ডানার বিস্তার প্রায় ৫–৭ সেমি' },
      weight: { en: 'A fraction of a gram', bn: 'এক গ্রামের ভগ্নাংশ মাত্র' },
      lifespan: { en: 'Adults live about 2–4 weeks', bn: 'পূর্ণবয়স্ক প্রজাপতি প্রায় ২–৪ সপ্তাহ বাঁচে' },
      features: {
        en: [
          'Orange-pink wings with black patches and white spots near the forewing tips',
          'Underside mottled grey-brown with small eyespots',
        ],
        bn: [
          'কমলা-গোলাপি ডানায় কালো ছোপ; সামনের ডানার আগায় সাদা ফোঁটা',
          'নিচের পিঠ ধূসর-বাদামি ছোপছোপ, ছোট চোখের মতো দাগ',
        ],
      },
    },
    habitat: {
      en: 'Open sunny places — fields, deserts, gardens and mountain meadows',
      bn: 'রোদেলা খোলা জায়গা — মাঠ, মরুভূমি, বাগান ও পাহাড়ি তৃণভূমি',
    },
    habitats: ['grassland', 'urban-farmland', 'desert', 'mountain'],
    regions: ['europe', 'africa', 'south-asia', 'east-asia', 'north-america', 'oceania'],
    distribution: {
      en: 'Nearly worldwide across Europe, Africa, Asia, North America and Australia.',
      bn: 'ইউরোপ, আফ্রিকা, এশিয়া, উত্তর আমেরিকা ও অস্ট্রেলিয়াসহ প্রায় সারা পৃথিবীতে।',
    },
    climate: { en: 'Highly adaptable — from deserts to temperate summers', bn: 'অত্যন্ত অভিযোজনক্ষম — মরুভূমি থেকে নাতিশীতোষ্ণ গ্রীষ্ম পর্যন্ত' },
    diet: {
      en: 'Caterpillars eat thistles, mallows and many other plants; adults drink nectar',
      bn: 'শুঁয়োপোকা কাঁটাগাছ, বেড়েলা-জাতীয় গাছসহ বহু উদ্ভিদ খায়; পূর্ণবয়স্ক প্রজাপতি ফুলের মধু পান করে',
    },
    ecologicalRole: {
      en: 'Moves pollen and nutrients across continents during mass migrations.',
      bn: 'বিশাল পরিযানের সময় মহাদেশ থেকে মহাদেশে পরাগরেণু ও পুষ্টি বহন করে।',
    },
    behavior: {
      en: 'Migrates in huge waves, often flying high and out of sight; cannot survive freezing winters in any life stage.',
      bn: 'বিশাল ঝাঁকে পরিযান করে, প্রায়ই চোখের আড়ালে অনেক উঁচু দিয়ে ওড়ে; জীবনের কোনো পর্যায়েই হিমশীতল শীত সহ্য করতে পারে না।',
    },
    range: {
      native: [
        [51.5, -0.1],
        [31.6, -8.0],
        [9.0, 38.7],
        [23.8, 90.4],
        [34.0, -118.2],
        [-33.9, 151.2],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Not threatened; populations fluctuate hugely with weather'],
        bn: ['হুমকির মুখে নেই; আবহাওয়ার কারণে সংখ্যা ব্যাপকভাবে ওঠানামা করে'],
      },
      initiatives: {
        en: ['Radar and citizen-science tracking of migrations', 'Widely bred in schools for education'],
        bn: ['রাডার ও নাগরিক-বিজ্ঞানের মাধ্যমে পরিযান পর্যবেক্ষণ', 'শিক্ষার জন্য স্কুলে ব্যাপকভাবে পালন'],
      },
    },
    facts: {
      en: [
        'Its yearly migration cycle is longer than that of the monarch.',
        'In 2019 a vast swarm over California was large enough to show on weather radar.',
      ],
      bn: [
        'এর বার্ষিক পরিযান চক্র মোনার্ক প্রজাপতির চেয়েও দীর্ঘ।',
        '২০১৯ সালে ক্যালিফোর্নিয়ার আকাশে এর এত বড় ঝাঁক দেখা গিয়েছিল যে আবহাওয়া রাডারেও ধরা পড়ে।',
      ],
    },
    related: ['monarch-butterfly', 'blue-pansy', 'wandering-glider'],
  },
  {
    id: 'deaths-head-hawkmoth',
    commonName: { en: "African Death's-head Hawkmoth", bn: 'মড়ার খুলি মথ' },
    scientificName: 'Acherontia atropos',
    altNames: {
      en: ["Death's-head Hawkmoth", 'Skull Moth'],
      bn: ['খুলি মথ', 'ডেথস-হেড হকমথ'],
    },
    category: 'insects',
    wikiTitle: 'Acherontia atropos',
    description: {
      en: "The death's-head hawkmoth is a large, powerful moth named for the skull-like pattern on its thorax. It can squeak loudly when disturbed and raids beehives to drink honey, protected by its thick cuticle and a scent that mimics bees. It has long been linked with bad omens and folklore.",
      bn: 'মড়ার খুলি মথ একটি বড় ও শক্তিশালী মথ; এর বুকের ওপর মানুষের মাথার খুলির মতো নকশা থেকেই এই নাম। বিরক্ত হলে এটি জোরে চিঁ চিঁ শব্দ করে এবং মৌচাকে ঢুকে মধু খায় — পুরু খোলস আর মৌমাছির মতো গন্ধ একে রক্ষা করে। বহু যুগ ধরে একে অশুভ সংকেত ও লোককথার সঙ্গে জড়ানো হয়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Sphingidae',
      genus: 'Acherontia',
      species: 'A. atropos',
    },
    physical: {
      size: { en: 'Wingspan about 9–13 cm', bn: 'ডানার বিস্তার প্রায় ৯–১৩ সেমি' },
      weight: { en: 'Up to about 3 g', bn: 'প্রায় ৩ গ্রাম পর্যন্ত' },
      lifespan: { en: 'Adults live a few weeks; often one or two generations a year', bn: 'পূর্ণবয়স্ক মথ কয়েক সপ্তাহ বাঁচে; বছরে সাধারণত এক বা দুই প্রজন্ম' },
      features: {
        en: [
          'Skull-shaped pale marking on the dark thorax',
          'Yellow-and-black banded abdomen and yellow hindwings',
          'Short, stout proboscis able to pierce honeycomb',
        ],
        bn: [
          'গাঢ় বুকের ওপর খুলির মতো হালকা রঙের দাগ',
          'হলুদ-কালো ডোরাকাটা পেট ও হলুদ পেছনের ডানা',
          'ছোট ও মোটা শুঁড়, যা মৌচাকের খোপ ফুটো করতে পারে',
        ],
      },
    },
    habitat: {
      en: 'Farmland, gardens and open countryside, especially potato and nightshade fields',
      bn: 'কৃষিজমি, বাগান ও খোলা গ্রামাঞ্চল, বিশেষত আলু ও বেগুনজাতীয় ফসলের খেত',
    },
    habitats: ['urban-farmland', 'grassland'],
    regions: ['africa', 'europe'],
    distribution: {
      en: 'Resident in Africa and the Middle East; migrates north into Europe each summer, sometimes reaching Britain and Scandinavia.',
      bn: 'আফ্রিকা ও মধ্যপ্রাচ্যের স্থায়ী বাসিন্দা; প্রতি গ্রীষ্মে উত্তরে ইউরোপে পরিযান করে, কখনো ব্রিটেন ও স্ক্যান্ডিনেভিয়া পর্যন্ত পৌঁছায়।',
    },
    climate: { en: 'Warm tropical and Mediterranean climates; summer visitor in temperate areas', bn: 'উষ্ণ ক্রান্তীয় ও ভূমধ্যসাগরীয় জলবায়ু; নাতিশীতোষ্ণ অঞ্চলে গ্রীষ্মকালীন অতিথি' },
    diet: {
      en: 'Caterpillars eat potato, tomato, jasmine and other plants; adults drink honey and tree sap',
      bn: 'শুঁয়োপোকা আলু, টমেটো, জুঁইসহ নানা গাছ খায়; পূর্ণবয়স্ক মথ মধু ও গাছের রস খায়',
    },
    ecologicalRole: {
      en: 'Prey for bats and birds; an occasional honey thief and minor crop feeder.',
      bn: 'বাদুড় ও পাখির খাদ্য; মাঝে মাঝে মধু চোর এবং ফসলের সামান্য ক্ষতিকর।',
    },
    behavior: {
      en: 'Nocturnal and a strong migrant; squeaks by forcing air through its proboscis when handled.',
      bn: 'নিশাচর ও শক্তিশালী পরিযায়ী; ধরলে শুঁড়ের ভেতর দিয়ে বাতাস ঠেলে চিঁ চিঁ শব্দ করে।',
    },
    range: {
      native: [
        [-1.3, 36.8],
        [-26.2, 28.0],
        [6.5, 3.4],
        [36.8, 10.2],
        [37.4, -5.98],
        [31.8, 35.2],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Pesticide use on potato crops', 'Light pollution affecting night-flying moths'],
        bn: ['আলুর খেতে কীটনাশক ব্যবহার', 'রাতের কৃত্রিম আলোর দূষণ নিশাচর মথকে ক্ষতিগ্রস্ত করে'],
      },
      initiatives: {
        en: ['Moth recording schemes in Europe', 'Reducing unnecessary outdoor lighting'],
        bn: ['ইউরোপে মথ রেকর্ডিং কর্মসূচি', 'অপ্রয়োজনীয় বহিরঙ্গন আলো কমানো'],
      },
    },
    facts: {
      en: [
        'It is one of the few moths that can make a loud sound audible to people.',
        'Its relative Acherontia styx occurs in Bangladesh and also has a skull mark.',
      ],
      bn: [
        'হাতে-গোনা যে কয়েকটি মথ মানুষের শোনার মতো জোরে শব্দ করতে পারে, এটি তাদের একটি।',
        'এর আত্মীয় Acherontia styx বাংলাদেশেও পাওয়া যায়, তারও বুকে খুলির মতো দাগ আছে।',
      ],
    },
    related: ['silkworm-moth', 'atlas-moth', 'western-honey-bee'],
  },
  {
    id: 'green-marsh-hawk',
    commonName: { en: 'Green Marsh Hawk', bn: 'সবুজ জলা ফড়িং' },
    scientificName: 'Orthetrum sabina',
    altNames: {
      en: ['Slender Skimmer', 'Variegated Green Skimmer'],
      bn: ['সবুজ ফড়িং', 'সরু স্কিমার'],
    },
    category: 'insects',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Orthetrum sabina',
    description: {
      en: 'The green marsh hawk is a slender dragonfly with a green-and-black striped thorax and a swollen base to its abdomen. It is one of the most common dragonflies in Bangladesh, seen around ponds, rice fields and ditches almost all year. A fierce predator, it often catches and eats other dragonflies as large as itself.',
      bn: 'সবুজ জলা ফড়িং একটি সরু গড়নের ফড়িং; এর বুক সবুজ-কালো ডোরাকাটা আর পেটের গোড়া ফোলা। বাংলাদেশের সবচেয়ে সাধারণ ফড়িংগুলোর একটি, পুকুর, ধানখেত ও ডোবার ধারে প্রায় সারা বছর দেখা যায়। হিংস্র শিকারি এই ফড়িং প্রায়ই নিজের সমান আকারের অন্য ফড়িং ধরে খেয়ে ফেলে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Odonata',
      family: 'Libellulidae',
      genus: 'Orthetrum',
      species: 'O. sabina',
    },
    physical: {
      size: { en: 'Body length about 4.5–5 cm; wingspan about 6.5–7 cm', bn: 'দেহের দৈর্ঘ্য প্রায় ৪.৫–৫ সেমি; ডানার বিস্তার প্রায় ৬.৫–৭ সেমি' },
      weight: { en: 'A fraction of a gram', bn: 'এক গ্রামের ভগ্নাংশ মাত্র' },
      lifespan: {
        en: 'Larvae live in water for several months; adults a few weeks',
        bn: 'লার্ভা কয়েক মাস পানিতে থাকে; পূর্ণবয়স্ক ফড়িং কয়েক সপ্তাহ বাঁচে',
      },
      features: {
        en: [
          'Greenish thorax with black stripes',
          'Abdomen swollen at the base, then thin, banded black and white',
          'Clear wings',
        ],
        bn: [
          'সবুজাভ বুকে কালো ডোরা',
          'পেটের গোড়া ফোলা, তারপর সরু ও সাদা-কালো ডোরাকাটা',
          'স্বচ্ছ ডানা',
        ],
      },
    },
    habitat: {
      en: 'Ponds, marshes, rice paddies, ditches and slow streams',
      bn: 'পুকুর, জলাভূমি, ধানখেত, ডোবা ও ধীরগতির খাল',
    },
    habitats: ['wetland', 'urban-farmland', 'rivers-lakes'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'oceania', 'africa'],
    distribution: {
      en: 'From North Africa and the Middle East across South and Southeast Asia to Japan, Australia and the Pacific.',
      bn: 'উত্তর আফ্রিকা ও মধ্যপ্রাচ্য থেকে দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়া হয়ে জাপান, অস্ট্রেলিয়া ও প্রশান্ত মহাসাগরীয় অঞ্চল পর্যন্ত।',
    },
    climate: { en: 'Tropical and warm subtropical climates', bn: 'ক্রান্তীয় ও উষ্ণ উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Predator — catches flies, mosquitoes, butterflies and other dragonflies; larvae eat aquatic insects and tadpoles',
      bn: 'শিকারি — মাছি, মশা, প্রজাপতি ও অন্য ফড়িং ধরে খায়; লার্ভা জলজ পোকা ও ব্যাঙাচি খায়',
    },
    ecologicalRole: {
      en: 'Controls mosquitoes and rice-field pests, and indicates healthy wetlands.',
      bn: 'মশা ও ধানখেতের ক্ষতিকর পোকা নিয়ন্ত্রণ করে এবং সুস্থ জলাভূমির নির্দেশক।',
    },
    behavior: {
      en: 'Perches on stems and ambushes passing insects; males guard stretches of water.',
      bn: 'ডাঁটায় বসে থেকে পাশ দিয়ে যাওয়া পোকার ওপর ঝাঁপিয়ে পড়ে; পুরুষেরা পানির একেকটি অংশ পাহারা দেয়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.8, 89.55],
        [28.6, 77.2],
        [13.75, 100.5],
        [26.2, 127.7],
        [-12.5, 130.8],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Filling of ponds and wetlands', 'Pesticide runoff in rice fields'],
        bn: ['পুকুর ও জলাভূমি ভরাট', 'ধানখেতের কীটনাশক পানিতে মিশে যাওয়া'],
      },
      initiatives: {
        en: ['Wetland conservation', 'Dragonfly surveys by naturalist groups'],
        bn: ['জলাভূমি সংরক্ষণ', 'প্রকৃতিপ্রেমী সংগঠনের ফড়িং জরিপ'],
      },
    },
    facts: {
      en: [
        'It will tackle prey as big as itself, including other skimmers.',
        'Its larvae can live in quite polluted, temporary water.',
      ],
      bn: [
        'নিজের সমান আকারের শিকার, এমনকি অন্য ফড়িংকেও এটি আক্রমণ করে।',
        'এর লার্ভা মোটামুটি দূষিত ও অস্থায়ী পানিতেও টিকে থাকতে পারে।',
      ],
    },
    related: ['common-picture-wing', 'wandering-glider'],
  },
  {
    id: 'common-picture-wing',
    commonName: { en: 'Common Picture Wing', bn: 'রঙিন ডানার ফড়িং' },
    scientificName: 'Rhyothemis variegata',
    altNames: {
      en: ['Variegated Flutterer', 'Picture Wing Dragonfly'],
      bn: ['ছবি-ডানা ফড়িং', 'প্রজাপতি ফড়িং'],
    },
    category: 'insects',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Rhyothemis variegata',
    description: {
      en: 'The common picture wing is a dragonfly whose wings are patterned with golden-yellow and black patches, so it is often mistaken for a butterfly. It flutters slowly over ponds, lakes and paddy fields in fluttering, butterfly-like flight. It is widespread in Bangladesh, especially during the monsoon.',
      bn: 'রঙিন ডানার ফড়িংয়ের ডানায় সোনালি-হলুদ ও কালো ছোপের নকশা থাকে, তাই অনেকেই একে প্রজাপতি বলে ভুল করেন। পুকুর, বিল ও ধানখেতের ওপর এটি প্রজাপতির মতো ধীরে ধীরে ডানা ঝাপটিয়ে ওড়ে। বাংলাদেশে, বিশেষ করে বর্ষাকালে, এটি ব্যাপকভাবে দেখা যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Odonata',
      family: 'Libellulidae',
      genus: 'Rhyothemis',
      species: 'R. variegata',
    },
    physical: {
      size: { en: 'Body length about 3.5–4 cm; wingspan about 7–8 cm', bn: 'দেহের দৈর্ঘ্য প্রায় ৩.৫–৪ সেমি; ডানার বিস্তার প্রায় ৭–৮ সেমি' },
      weight: { en: 'A fraction of a gram', bn: 'এক গ্রামের ভগ্নাংশ মাত্র' },
      lifespan: { en: 'Aquatic larval stage of several months; adults a few weeks', bn: 'পানিতে লার্ভা অবস্থা কয়েক মাস; পূর্ণবয়স্ক ফড়িং কয়েক সপ্তাহ' },
      features: {
        en: [
          'Wings patterned with amber-yellow and black, like stained glass',
          'Females have broader, more heavily patterned wings than males',
        ],
        bn: [
          'ডানায় রঙিন কাচের মতো অ্যাম্বার-হলুদ ও কালো নকশা',
          'স্ত্রীর ডানা পুরুষের চেয়ে চওড়া ও বেশি নকশাদার',
        ],
      },
    },
    habitat: {
      en: 'Ponds, lakes, marshes and flooded paddy fields',
      bn: 'পুকুর, হ্রদ, জলাভূমি ও পানিতে ডোবা ধানখেত',
    },
    habitats: ['wetland', 'rivers-lakes', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'India, Sri Lanka, Bangladesh and Nepal through Southeast Asia to southern China.',
      bn: 'ভারত, শ্রীলঙ্কা, বাংলাদেশ ও নেপাল থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে দক্ষিণ চীন পর্যন্ত।',
    },
    climate: { en: 'Tropical monsoon climates', bn: 'ক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Predator of small flying insects such as midges and mosquitoes; larvae eat aquatic invertebrates',
      bn: 'মশা ও ছোট মাছির মতো উড়ন্ত পোকা শিকার করে; লার্ভা জলজ অমেরুদণ্ডী প্রাণী খায়',
    },
    ecologicalRole: {
      en: 'Helps control mosquitoes and midges around wetlands and rice fields.',
      bn: 'জলাভূমি ও ধানখেতের আশপাশে মশা ও ছোট মাছি নিয়ন্ত্রণে সাহায্য করে।',
    },
    behavior: {
      en: 'Flies in slow, fluttering bursts and often gathers in loose swarms before rain; perches on tall stems.',
      bn: 'থেমে থেমে ধীরে ডানা ঝাপটিয়ে ওড়ে; বৃষ্টির আগে প্রায়ই ঢিলেঢালা ঝাঁক বাঁধে এবং উঁচু ডাঁটায় বসে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [24.9, 91.9],
        [22.6, 88.4],
        [7.3, 80.6],
        [13.75, 100.5],
        [23.1, 113.3],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Drainage and filling of wetlands', 'Agricultural pesticides'],
        bn: ['জলাভূমি শুকানো ও ভরাট', 'কৃষিতে কীটনাশক ব্যবহার'],
      },
      initiatives: {
        en: ['Protecting haors, beels and village ponds', 'Citizen-science dragonfly records'],
        bn: ['হাওর, বিল ও গ্রামের পুকুর রক্ষা', 'নাগরিক-বিজ্ঞানভিত্তিক ফড়িং রেকর্ড'],
      },
    },
    facts: {
      en: [
        'It is often called the "butterfly dragonfly" because of its patterned wings and flight.',
        'Like all dragonflies, it spends most of its life underwater as a larva.',
      ],
      bn: [
        'নকশাদার ডানা ও ওড়ার ধরনের জন্য একে প্রায়ই "প্রজাপতি ফড়িং" বলা হয়।',
        'সব ফড়িংয়ের মতো এরও জীবনের বেশির ভাগ সময় কাটে পানির নিচে লার্ভা হিসেবে।',
      ],
    },
    related: ['green-marsh-hawk', 'wandering-glider'],
  },
  {
    id: 'wandering-glider',
    commonName: { en: 'Wandering Glider', bn: 'ভবঘুরে ফড়িং' },
    scientificName: 'Pantala flavescens',
    altNames: {
      en: ['Globe Skimmer', 'Globe Wanderer'],
      bn: ['হলুদ ফড়িং', 'গ্লোব স্কিমার'],
    },
    category: 'insects',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Pantala flavescens',
    description: {
      en: 'The wandering glider is a golden-yellow dragonfly and the most widespread dragonfly on Earth. It holds the record for the longest insect migration: generations cross the Indian Ocean between India and East Africa, a round trip of roughly 14,000–18,000 km. In Bangladesh it appears in huge swarms over fields before and after the monsoon rains.',
      bn: 'ভবঘুরে ফড়িং একটি সোনালি-হলুদ ফড়িং এবং পৃথিবীর সবচেয়ে বিস্তৃত ফড়িং প্রজাতি। পতঙ্গের মধ্যে দীর্ঘতম পরিযানের রেকর্ড এর দখলে — কয়েক প্রজন্ম মিলে ভারত ও পূর্ব আফ্রিকার মধ্যে ভারত মহাসাগর পাড়ি দেয়, যাওয়া-আসা মিলিয়ে প্রায় ১৪,০০০–১৮,০০০ কিলোমিটার। বাংলাদেশে বর্ষার আগে-পরে মাঠের ওপর এদের বিশাল ঝাঁক দেখা যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Odonata',
      family: 'Libellulidae',
      genus: 'Pantala',
      species: 'P. flavescens',
    },
    physical: {
      size: { en: 'Body length about 4.5–5 cm; wingspan about 7–8.5 cm', bn: 'দেহের দৈর্ঘ্য প্রায় ৪.৫–৫ সেমি; ডানার বিস্তার প্রায় ৭–৮.৫ সেমি' },
      weight: { en: 'About 0.3 g', bn: 'প্রায় ০.৩ গ্রাম' },
      lifespan: {
        en: 'Larvae develop fast, in as little as 5–6 weeks; adults live a few weeks',
        bn: 'লার্ভা দ্রুত বড় হয়, মাত্র ৫–৬ সপ্তাহেই; পূর্ণবয়স্ক ফড়িং কয়েক সপ্তাহ বাঁচে',
      },
      features: {
        en: [
          'Golden-yellow to orange body',
          'Very broad hindwings for gliding on the wind',
          'Large eyes covering most of the head',
        ],
        bn: [
          'সোনালি-হলুদ থেকে কমলা রঙের দেহ',
          'বাতাসে ভেসে থাকার জন্য খুব চওড়া পেছনের ডানা',
          'মাথার প্রায় পুরোটা জুড়ে বড় বড় চোখ',
        ],
      },
    },
    habitat: {
      en: 'Open fields, wetlands and temporary rain-fed pools',
      bn: 'খোলা মাঠ, জলাভূমি ও বৃষ্টিতে তৈরি অস্থায়ী জলাশয়',
    },
    habitats: ['wetland', 'grassland', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'africa', 'north-america', 'south-america', 'oceania'],
    distribution: {
      en: 'Throughout the tropics and warm temperate regions of every continent except Antarctica and most of Europe.',
      bn: 'অ্যান্টার্কটিকা ও ইউরোপের বেশির ভাগ অঞ্চল ছাড়া সব মহাদেশের ক্রান্তীয় ও উষ্ণ নাতিশীতোষ্ণ অঞ্চলে।',
    },
    climate: { en: 'Tropical and warm climates; follows monsoon rains', bn: 'ক্রান্তীয় ও উষ্ণ জলবায়ু; মৌসুমি বৃষ্টির পিছু পিছু চলে' },
    diet: {
      en: 'Catches tiny flying insects in the air; larvae eat aquatic insects and tadpoles',
      bn: 'বাতাসে উড়তে উড়তে ক্ষুদ্র পোকা ধরে খায়; লার্ভা জলজ পোকা ও ব্যাঙাচি খায়',
    },
    ecologicalRole: {
      en: 'Controls flying insects and links distant ecosystems through its migration.',
      bn: 'উড়ন্ত পোকা নিয়ন্ত্রণ করে এবং পরিযানের মাধ্যমে দূরবর্তী বাস্তুতন্ত্রকে সংযুক্ত করে।',
    },
    behavior: {
      en: 'Glides for hours on high winds; lays eggs in fresh rain pools, which its larvae must leave before they dry.',
      bn: 'উঁচু বাতাসে ঘণ্টার পর ঘণ্টা ভেসে থাকে; বৃষ্টির নতুন জলাশয়ে ডিম পাড়ে, আর সেটি শুকানোর আগেই লার্ভাকে বড় হয়ে বের হতে হয়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [4.2, 73.5],
        [-1.3, 36.8],
        [13.75, 100.5],
        [-15.8, -47.9],
        [21.3, -157.8],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Not threatened; loss of temporary pools and wetlands locally'],
        bn: ['হুমকির মুখে নেই; স্থানীয়ভাবে অস্থায়ী জলাশয় ও জলাভূমি হারানো'],
      },
      initiatives: {
        en: ['Isotope and genetic studies of its migration', 'Wetland conservation'],
        bn: ['আইসোটোপ ও জিনগত পদ্ধতিতে পরিযান গবেষণা', 'জলাভূমি সংরক্ষণ'],
      },
    },
    facts: {
      en: [
        'Huge numbers arrive in the Maldives each autumn, flying over open ocean from India.',
        'Genetic studies suggest populations worldwide mix almost as one giant population.',
        'It has been recorded flying over 6,000 m high in the Himalayas.',
      ],
      bn: [
        'প্রতি শরতে ভারত থেকে খোলা সমুদ্র পেরিয়ে বিপুল সংখ্যায় এরা মালদ্বীপে পৌঁছায়।',
        'জিনগত গবেষণা বলছে, সারা পৃথিবীর জনগোষ্ঠী প্রায় একটি বিশাল জনগোষ্ঠীর মতোই মিশে থাকে।',
        'হিমালয়ে ৬,০০০ মিটারেরও বেশি উচ্চতায় একে উড়তে দেখা গেছে।',
      ],
    },
    related: ['green-marsh-hawk', 'common-picture-wing', 'painted-lady'],
  },
];
