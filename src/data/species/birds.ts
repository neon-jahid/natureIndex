import type { Species } from '@/types';

export const birds: Species[] = [
  {
    id: 'oriental-magpie-robin',
    commonName: { en: 'Oriental Magpie-Robin', bn: 'দোয়েল' },
    scientificName: 'Copsychus saularis',
    altNames: {
      en: ['Magpie Robin', 'Dhyal', 'Doel'],
      bn: ['দোয়েল পাখি', 'দয়েল', 'উদয়েল'],
    },
    category: 'birds',
    wikiTitle: 'Oriental magpie-robin',
    description: {
      en: 'The oriental magpie-robin, known in Bangladesh as the doel, is the national bird of Bangladesh. This small black-and-white songbird is a familiar sight in village yards, gardens and city parks, where it perches with its tail cocked upright and sings rich, varied songs, especially at dawn. It appears on Bangladeshi banknotes and coins, and a famous Doel Square stands in Dhaka.',
      bn: 'দোয়েল বাংলাদেশের জাতীয় পাখি। সাদা-কালো রঙের এই ছোট গায়ক পাখিটি গ্রামের উঠান, বাগান থেকে শুরু করে শহরের পার্ক পর্যন্ত সবখানেই দেখা যায়। লেজ খাড়া করে উঁচিয়ে বসে থাকা আর ভোরবেলা মিষ্টি সুরে নানা রকম শিস দেওয়া এর চেনা স্বভাব। বাংলাদেশের টাকা ও পয়সায় দোয়েলের ছবি আছে, আর ঢাকায় রয়েছে বিখ্যাত দোয়েল চত্বর।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Passeriformes',
      family: 'Muscicapidae',
      genus: 'Copsychus',
      species: 'C. saularis',
    },
    physical: {
      size: {
        en: '19–21 cm long including the long tail',
        bn: 'লম্বা লেজসহ ১৯–২১ সেমি',
      },
      weight: {
        en: '31–40 g',
        bn: '৩১–৪০ গ্রাম',
      },
      lifespan: {
        en: 'Usually 5–8 years; up to about 15 years recorded',
        bn: 'সাধারণত ৫–৮ বছর; সর্বোচ্চ প্রায় ১৫ বছর পর্যন্ত রেকর্ড আছে',
      },
      features: {
        en: [
          'Male is glossy blue-black above with a white belly and white wing patch',
          'Female is similar but slate-grey where the male is black',
          'Long tail with white outer feathers, often held cocked upright',
        ],
        bn: [
          'পুরুষ পাখির পিঠ ও মাথা চকচকে নীলচে-কালো, পেট সাদা এবং ডানায় সাদা পট্টি',
          'স্ত্রী পাখি দেখতে একই রকম, তবে কালোর জায়গায় ছাই-ধূসর রং',
          'লম্বা লেজের দুই পাশের পালক সাদা; প্রায়ই লেজ খাড়া করে রাখে',
        ],
      },
    },
    habitat: {
      en: 'Open woodland, village groves, gardens, farmland and urban parks',
      bn: 'হালকা বনভূমি, গ্রামের ঝোপঝাড় ও বাগান, কৃষিজমি এবং শহরের পার্ক',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Across South and Southeast Asia — Bangladesh, India, Pakistan, Nepal, Sri Lanka, Myanmar, Thailand, Malaysia, Indonesia, the Philippines and southern China.',
      bn: 'দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়া জুড়ে — বাংলাদেশ, ভারত, পাকিস্তান, নেপাল, শ্রীলঙ্কা, মিয়ানমার, থাইল্যান্ড, মালয়েশিয়া, ইন্দোনেশিয়া, ফিলিপাইন ও দক্ষিণ চীন।',
    },
    climate: {
      en: 'Tropical and subtropical monsoon climates',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Mainly insects and other invertebrates such as earthworms and spiders; occasionally small fruits, nectar and tiny lizards',
      bn: 'প্রধানত পোকামাকড় ও কেঁচো, মাকড়সার মতো অমেরুদণ্ডী প্রাণী; মাঝে মাঝে ছোট ফল, ফুলের মধু ও ছোট টিকটিকি',
    },
    ecologicalRole: {
      en: 'An important natural controller of insect pests in farms and gardens.',
      bn: 'খেত-খামার ও বাগানের ক্ষতিকর পোকামাকড় দমনে দোয়েল গুরুত্বপূর্ণ প্রাকৃতিক ভূমিকা রাখে।',
    },
    behavior: {
      en: 'Territorial; males sing loudly from exposed perches, especially during the breeding season (March–July). Nests in tree holes, wall crevices and under roofs, and often forages on the ground hopping with tail raised.',
      bn: 'নিজের এলাকা নিয়ে সচেতন; প্রজনন মৌসুমে (মার্চ–জুলাই) পুরুষ পাখি খোলা ডালে বসে জোরে জোরে গান গায়। গাছের কোটর, দেয়ালের ফাটল বা ঘরের চালের নিচে বাসা বাঁধে। লেজ উঁচিয়ে মাটিতে লাফিয়ে লাফিয়ে খাবার খোঁজে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.35, 91.8],
        [24.9, 91.9],
        [28.6, 77.2],
        [7.3, 80.6],
        [13.75, 100.5],
        [3.1, 101.7],
        [23.1, 113.3],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Trapping for the cage-bird trade (especially in Southeast Asia)', 'Loss of nesting holes as old trees are cut', 'Pesticide use reducing insect prey'],
        bn: ['খাঁচার পাখি হিসেবে বিক্রির জন্য ধরা (বিশেষত দক্ষিণ-পূর্ব এশিয়ায়)', 'পুরোনো গাছ কাটায় বাসা বাঁধার কোটর কমে যাওয়া', 'কীটনাশকের ব্যবহারে খাদ্য-পোকা কমে যাওয়া'],
      },
      initiatives: {
        en: ['Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012', 'Nest-box programmes in gardens and campuses', 'National symbol featured on currency, raising public awareness'],
        bn: ['বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন ২০১২-এর অধীনে সংরক্ষিত', 'বাগান ও শিক্ষাপ্রতিষ্ঠানে কৃত্রিম বাসা স্থাপন কর্মসূচি', 'জাতীয় প্রতীক হিসেবে টাকায় ছবি থাকায় জনসচেতনতা বৃদ্ধি'],
      },
    },
    facts: {
      en: [
        'The doel appears on the Bangladeshi 2-taka note.',
        'Males can mimic the calls of other birds.',
        'In Singapore it nearly disappeared because of trapping, then recovered after protection.',
      ],
      bn: [
        'বাংলাদেশের ২ টাকার নোটে দোয়েলের ছবি আছে।',
        'পুরুষ দোয়েল অন্য পাখির ডাক নকল করতে পারে।',
        'সিঙ্গাপুরে অতিরিক্ত শিকারের কারণে দোয়েল প্রায় হারিয়ে গিয়েছিল, পরে সুরক্ষা পেয়ে আবার সংখ্যা বেড়েছে।',
      ],
    },
    related: ['common-kingfisher', 'spoon-billed-sandpiper', 'banyan'],
  },
  {
    id: 'spoon-billed-sandpiper',
    commonName: { en: 'Spoon-billed Sandpiper', bn: 'চামচঠুঁটো বাটান' },
    scientificName: 'Calidris pygmaea',
    altNames: {
      en: ['Spoonbill Sandpiper', 'Spoony'],
      bn: ['চামচঠুঁটি বাটান', 'চামচ-ঠোঁট বাটান'],
    },
    synonyms: ['Eurynorhynchus pygmeus', 'Calidris pygmeus'],
    category: 'birds',
    wikiTitle: 'Spoon-billed sandpiper',
    description: {
      en: 'The spoon-billed sandpiper is a tiny, sparrow-sized shorebird with a unique spatula-shaped bill. It breeds only on the coastal tundra of Chukotka in the Russian Far East and migrates about 8,000 km to winter on the mudflats of South and Southeast Asia. Bangladesh’s coast — especially Sonadia Island and the islands of the Meghna estuary — is one of its most important wintering grounds.',
      bn: 'চামচঠুঁটো বাটান চড়ুইয়ের মতো ছোট একটি সৈকত পাখি, যার ঠোঁটের আগা চামচের মতো চ্যাপ্টা — পৃথিবীতে এমন ঠোঁট আর কোনো পাখির নেই। এরা কেবল রাশিয়ার দূরপ্রাচ্যের চুকোটকা উপদ্বীপের উপকূলীয় তুন্দ্রায় ডিম পাড়ে এবং প্রায় ৮,০০০ কিলোমিটার পাড়ি দিয়ে দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার কাদাচরে শীত কাটাতে আসে। বাংলাদেশের উপকূল — বিশেষ করে সোনাদিয়া দ্বীপ ও মেঘনা মোহনার চরগুলো — এদের সবচেয়ে গুরুত্বপূর্ণ শীতকালীন আবাসের একটি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Charadriiformes',
      family: 'Scolopacidae',
      genus: 'Calidris',
      species: 'C. pygmaea',
    },
    physical: {
      size: {
        en: '14–16 cm long; wingspan about 38 cm',
        bn: '১৪–১৬ সেমি লম্বা; ডানার বিস্তার প্রায় ৩৮ সেমি',
      },
      weight: {
        en: '29–34 g',
        bn: '২৯–৩৪ গ্রাম',
      },
      lifespan: {
        en: 'Up to about 10 years',
        bn: 'প্রায় ১০ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Black bill that widens into a flat “spoon” at the tip',
          'Rusty-red head and breast in breeding plumage',
          'Grey-brown above and white below in winter',
        ],
        bn: [
          'কালো ঠোঁট, যার আগা চওড়া হয়ে চ্যাপ্টা চামচের আকার নিয়েছে',
          'প্রজনন মৌসুমে মাথা ও বুক লালচে-মরচে রঙের',
          'শীতকালে পিঠ ধূসর-বাদামি ও পেট সাদা',
        ],
      },
    },
    habitat: {
      en: 'Breeds on coastal tundra with lagoons; winters on intertidal mudflats and sandbars',
      bn: 'উপহ্রদসহ উপকূলীয় তুন্দ্রায় প্রজনন করে; শীতে জোয়ার-ভাটার কাদাচর ও বালুচরে থাকে',
    },
    habitats: ['wetland', 'polar'],
    regions: ['east-asia', 'south-asia', 'southeast-asia', 'polar'],
    distribution: {
      en: 'Breeds in Chukotka and Kamchatka (Russia); migrates along the East Asian–Australasian Flyway via Korea and China to winter in Bangladesh, Myanmar, Thailand and Vietnam.',
      bn: 'রাশিয়ার চুকোটকা ও কামচাটকায় প্রজনন করে; পূর্ব এশিয়া–অস্ট্রেলেশীয় উড়ালপথ ধরে কোরিয়া ও চীন হয়ে বাংলাদেশ, মিয়ানমার, থাইল্যান্ড ও ভিয়েতনামে শীত কাটায়।',
    },
    climate: {
      en: 'Arctic tundra summers; tropical coastal winters',
      bn: 'গ্রীষ্মে আর্কটিক তুন্দ্রা; শীতে ক্রান্তীয় উপকূলীয় জলবায়ু',
    },
    diet: {
      en: 'Small invertebrates — insects and larvae on the tundra; worms, tiny crustaceans and molluscs on mudflats',
      bn: 'ছোট অমেরুদণ্ডী প্রাণী — তুন্দ্রায় পোকা ও লার্ভা; কাদাচরে কেঁচোজাতীয় প্রাণী, ছোট চিংড়িজাতীয় প্রাণী ও শামুক-ঝিনুক',
    },
    ecologicalRole: {
      en: 'An indicator of the health of Asia’s tidal flats, which also support millions of other migratory shorebirds and coastal fisheries.',
      bn: 'এশিয়ার জোয়ার-ভাটার কাদাচরের স্বাস্থ্যের নির্দেশক; এই চরগুলোই লাখো পরিযায়ী সৈকত পাখি ও উপকূলীয় মৎস্যসম্পদের ভরসা।',
    },
    behavior: {
      en: 'Feeds by sweeping its bill side to side through shallow water and mud. Males perform song flights over breeding territories; pairs are monogamous and the male mostly cares for the chicks.',
      bn: 'অগভীর পানি ও কাদায় ঠোঁট এপাশ-ওপাশ নাড়িয়ে খাবার খোঁজে। প্রজনন এলাকায় পুরুষ পাখি উড়তে উড়তে গান গায়; এরা জোড়ায় থাকে এবং ছানাদের দেখাশোনা মূলত পুরুষ পাখিই করে।',
    },
    range: {
      native: [
        [65.6, -171.0],
        [61.0, 172.0],
        [21.5, 91.9],
        [22.2, 91.1],
        [16.5, 97.5],
        [32.7, 121.0],
        [20.0, 106.5],
      ],
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      population: {
        en: 'Only a few hundred individuals; roughly 200 breeding pairs',
        bn: 'মাত্র কয়েকশো পাখি; আনুমানিক ২০০ প্রজননক্ষম জোড়া',
      },
      threats: {
        en: ['Trapping with mist-nets on wintering grounds', 'Reclamation of tidal mudflats, especially in the Yellow Sea', 'Coastal development and disturbance', 'Climate change affecting tundra breeding sites'],
        bn: ['শীতকালীন আবাসে জাল পেতে পাখি শিকার', 'বিশেষত পীত সাগর অঞ্চলে কাদাচর ভরাট', 'উপকূলীয় উন্নয়ন ও মানুষের উপদ্রব', 'জলবায়ু পরিবর্তনে তুন্দ্রার প্রজনন এলাকার ক্ষতি'],
      },
      initiatives: {
        en: ['“Head-starting” — hatching eggs in captivity and releasing chicks in Chukotka', 'Alternative livelihoods for bird hunters at Sonadia, Bangladesh', 'Coastal protected areas along the flyway', 'Colour-flag and satellite tracking'],
        bn: ['‘হেড-স্টার্টিং’ — চুকোটকায় ডিম সংগ্রহ করে কৃত্রিমভাবে ফুটিয়ে ছানা অবমুক্ত করা', 'বাংলাদেশের সোনাদিয়ায় পাখি শিকারিদের জন্য বিকল্প জীবিকার ব্যবস্থা', 'উড়ালপথ বরাবর উপকূলীয় সংরক্ষিত এলাকা', 'রঙিন পতাকা ও স্যাটেলাইটের সাহায্যে পাখি অনুসরণ'],
      },
    },
    facts: {
      en: [
        'Chicks hatch with a spoon-shaped bill already formed.',
        'Each year it flies roughly 16,000 km on its round-trip migration.',
        'Former bird trappers in Bangladesh now help protect it.',
      ],
      bn: [
        'ডিম ফুটে বের হওয়ার সময়ই ছানার ঠোঁট চামচের মতো থাকে।',
        'প্রতি বছর আসা-যাওয়ায় এরা প্রায় ১৬,০০০ কিলোমিটার পথ পাড়ি দেয়।',
        'বাংলাদেশের একসময়ের পাখি শিকারিরাই এখন এদের রক্ষায় কাজ করছেন।',
      ],
    },
    related: ['oriental-magpie-robin', 'common-kingfisher', 'emperor-penguin'],
  },
  {
    id: 'bald-eagle',
    commonName: { en: 'Bald Eagle', bn: 'বল্ড ঈগল' },
    scientificName: 'Haliaeetus leucocephalus',
    altNames: {
      en: ['American Eagle', 'White-headed Eagle', 'American Bald Eagle'],
      bn: ['আমেরিকান ঈগল', 'সাদামাথা ঈগল', 'টাকমাথা ঈগল'],
    },
    synonyms: ['Falco leucocephalus'],
    category: 'birds',
    wikiTitle: 'Bald eagle',
    description: {
      en: 'The bald eagle is a large sea eagle of North America and the national bird of the United States. Its name comes from an old meaning of “bald” — white-headed — not from a lack of feathers. Once pushed to the brink by DDT poisoning and hunting, it made one of the most remarkable recoveries in conservation history and was removed from the US endangered species list in 2007.',
      bn: 'বল্ড ঈগল উত্তর আমেরিকার একটি বড় আকারের সামুদ্রিক ঈগল এবং যুক্তরাষ্ট্রের জাতীয় পাখি। নামে ‘বল্ড’ (টাকমাথা) থাকলেও এর মাথায় পালক ঠিকই আছে — পুরোনো ইংরেজিতে ‘বল্ড’ মানে ছিল ‘সাদা মাথার’। একসময় ডিডিটি কীটনাশকের বিষক্রিয়া ও শিকারের কারণে এরা বিলুপ্তির দ্বারপ্রান্তে চলে গিয়েছিল। পরে সংরক্ষণের ইতিহাসে অন্যতম সফল প্রত্যাবর্তন ঘটে, এবং ২০০৭ সালে যুক্তরাষ্ট্রের বিপন্ন প্রজাতির তালিকা থেকে একে বাদ দেওয়া হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Accipitriformes',
      family: 'Accipitridae',
      genus: 'Haliaeetus',
      species: 'H. leucocephalus',
    },
    physical: {
      size: {
        en: '70–102 cm long; wingspan 1.8–2.3 m',
        bn: '৭০–১০২ সেমি লম্বা; ডানার বিস্তার ১.৮–২.৩ মিটার',
      },
      weight: {
        en: '3–6.3 kg; females are about 25% larger than males',
        bn: '৩–৬.৩ কেজি; স্ত্রী ঈগল পুরুষের চেয়ে প্রায় ২৫% বড়',
      },
      lifespan: {
        en: '20–30 years in the wild',
        bn: 'বনে ২০–৩০ বছর',
      },
      features: {
        en: [
          'Adults have a white head and tail with a dark brown body',
          'Massive hooked yellow bill and yellow feet',
          'Young birds are mottled brown and take about 5 years to get the white head',
        ],
        bn: [
          'প্রাপ্তবয়স্কদের মাথা ও লেজ সাদা, দেহ গাঢ় বাদামি',
          'বিশাল বাঁকানো হলুদ ঠোঁট ও হলুদ পা',
          'অল্পবয়সীরা ছোপছোপ বাদামি; সাদা মাথা হতে প্রায় ৫ বছর লাগে',
        ],
      },
    },
    habitat: {
      en: 'Near large lakes, rivers, reservoirs and coasts with tall trees for nesting',
      bn: 'বড় হ্রদ, নদী, জলাধার ও উপকূলের কাছে, যেখানে বাসা বাঁধার মতো উঁচু গাছ আছে',
    },
    habitats: ['rivers-lakes', 'temperate-forest', 'wetland'],
    regions: ['north-america'],
    distribution: {
      en: 'Most of North America, from Alaska and Canada across the United States to northern Mexico; Alaska and British Columbia hold the largest numbers.',
      bn: 'উত্তর আমেরিকার বেশিরভাগ অঞ্চল — আলাস্কা ও কানাডা থেকে যুক্তরাষ্ট্র হয়ে উত্তর মেক্সিকো পর্যন্ত; সবচেয়ে বেশি দেখা যায় আলাস্কা ও ব্রিটিশ কলাম্বিয়ায়।',
    },
    climate: {
      en: 'Temperate to subarctic climates; northern birds migrate south in winter',
      bn: 'নাতিশীতোষ্ণ থেকে উপ-মেরু জলবায়ু; উত্তরের পাখিরা শীতে দক্ষিণে চলে যায়',
    },
    diet: {
      en: 'Mainly fish such as salmon; also waterbirds, small mammals and carrion. Often steals fish from ospreys',
      bn: 'প্রধানত স্যামনসহ বিভিন্ন মাছ; এছাড়া জলচর পাখি, ছোট স্তন্যপায়ী ও মৃত প্রাণী। প্রায়ই মাছমুরাল (অস্প্রে) পাখির কাছ থেকে মাছ ছিনিয়ে নেয়',
    },
    ecologicalRole: {
      en: 'A top predator and scavenger of aquatic ecosystems; its recovery is used as a measure of reduced pesticide pollution.',
      bn: 'জলজ বাস্তুতন্ত্রের শীর্ষ শিকারি ও মৃতভোজী; এদের সংখ্যা বেড়ে ওঠাকে কীটনাশক দূষণ কমার মাপকাঠি হিসেবে দেখা হয়।',
    },
    behavior: {
      en: 'Pairs usually mate for life and reuse the same nest for years. Gathers in large numbers where salmon run in winter. Performs spectacular courtship flights, locking talons and cartwheeling through the air.',
      bn: 'জোড়া সাধারণত সারাজীবন একসঙ্গে থাকে এবং বছরের পর বছর একই বাসা ব্যবহার করে। শীতে যেখানে স্যামন মাছ ঝাঁকে আসে, সেখানে দলে দলে জড়ো হয়। প্রণয়ের সময় আকাশে দুজন নখে নখ আটকে ডিগবাজি খেতে খেতে নিচে নামে — দেখার মতো দৃশ্য।',
    },
    range: {
      native: [
        [58.3, -134.4],
        [49.3, -123.1],
        [46.8, -92.1],
        [38.9, -77.0],
        [27.9, -82.5],
        [61.2, -149.9],
        [45.5, -122.7],
        [53.5, -113.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'increasing',
      population: {
        en: 'About 316,700 in the lower 48 US states (2020 estimate), plus large populations in Alaska and Canada',
        bn: 'যুক্তরাষ্ট্রের মূল ৪৮টি অঙ্গরাজ্যে প্রায় ৩,১৬,৭০০টি (২০২০ সালের হিসাব); এছাড়া আলাস্কা ও কানাডায় আরও বড় সংখ্যায় আছে',
      },
      threats: {
        en: ['Lead poisoning from ammunition fragments in carcasses', 'Collisions with vehicles, power lines and wind turbines', 'Habitat loss along shorelines', 'Avian influenza'],
        bn: ['মৃত প্রাণীর দেহে থাকা গুলির সিসায় বিষক্রিয়া', 'যানবাহন, বিদ্যুতের তার ও বায়ুকলের সঙ্গে ধাক্কা', 'তীরবর্তী আবাসস্থল ধ্বংস', 'বার্ড ফ্লু'],
      },
      initiatives: {
        en: ['Ban on DDT in the United States (1972)', 'Bald and Golden Eagle Protection Act', 'Reintroduction and nest-site protection', 'Lead-free ammunition campaigns'],
        bn: ['যুক্তরাষ্ট্রে ডিডিটি নিষিদ্ধকরণ (১৯৭২)', 'বল্ড অ্যান্ড গোল্ডেন ঈগল প্রোটেকশন অ্যাক্ট', 'পুনঃঅবমুক্তি ও বাসার স্থান সুরক্ষা', 'সিসামুক্ত গুলি ব্যবহারের প্রচারণা'],
      },
    },
    facts: {
      en: [
        'Bald eagles build the largest tree nests of any North American bird — one weighed about 2 tonnes.',
        'In the 1960s fewer than 500 nesting pairs remained in the lower 48 states.',
        'Despite its fierce look, its call is a weak, high-pitched chirping.',
      ],
      bn: [
        'উত্তর আমেরিকার পাখিদের মধ্যে গাছের ওপর সবচেয়ে বড় বাসা বানায় বল্ড ঈগল — একটি বাসার ওজন ছিল প্রায় ২ টন।',
        '১৯৬০-এর দশকে যুক্তরাষ্ট্রের মূল ৪৮টি অঙ্গরাজ্যে ৫০০টিরও কম জোড়া অবশিষ্ট ছিল।',
        'চেহারা হিংস্র হলেও এর ডাক বেশ মৃদু ও চিকন কিচিরমিচির ধরনের।',
      ],
    },
    related: ['common-kingfisher', 'polar-bear', 'giant-sequoia'],
  },
  {
    id: 'emperor-penguin',
    commonName: { en: 'Emperor Penguin', bn: 'সম্রাট পেঙ্গুইন' },
    scientificName: 'Aptenodytes forsteri',
    altNames: {
      en: ['Emperor', 'Penguin'],
      bn: ['এম্পেরর পেঙ্গুইন', 'পেঙ্গুইন'],
    },
    category: 'birds',
    secondaryCategories: ['marine'],
    wikiTitle: 'Emperor penguin',
    description: {
      en: 'The emperor penguin is the tallest and heaviest of all penguins and the only penguin that breeds during the dark Antarctic winter, on sea ice. Males incubate the single egg on their feet for about two months in temperatures down to −40 °C, huddling together against blizzards while the females feed at sea.',
      bn: 'সম্রাট পেঙ্গুইন সব পেঙ্গুইনের মধ্যে সবচেয়ে লম্বা ও ভারী, এবং অ্যান্টার্কটিকার অন্ধকার শীতকালে সামুদ্রিক বরফের ওপর ডিম পাড়ে এমন একমাত্র পেঙ্গুইন। মা পেঙ্গুইন যখন সমুদ্রে খাবার খুঁজতে যায়, তখন বাবা পেঙ্গুইন প্রায় দুই মাস ধরে পায়ের ওপর একটি মাত্র ডিম রেখে তা দিয়ে থাকে। −৪০ ডিগ্রি সেলসিয়াসের হাড়কাঁপানো ঠান্ডা ও তুষারঝড়ে টিকে থাকতে তারা গায়ে গা ঘেঁষে জটলা বেঁধে দাঁড়িয়ে থাকে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Sphenisciformes',
      family: 'Spheniscidae',
      genus: 'Aptenodytes',
      species: 'A. forsteri',
    },
    physical: {
      size: {
        en: 'Up to 1.1–1.3 m tall',
        bn: '১.১–১.৩ মিটার পর্যন্ত উঁচু',
      },
      weight: {
        en: '22–45 kg, depending on the stage of the breeding cycle',
        bn: '২২–৪৫ কেজি; প্রজনন চক্রের কোন পর্যায়ে আছে তার ওপর ওজন নির্ভর করে',
      },
      lifespan: {
        en: 'About 20 years in the wild',
        bn: 'বনে প্রায় ২০ বছর',
      },
      features: {
        en: [
          'Black back, white belly and bright yellow-orange ear patches',
          'Four layers of densely packed, scale-like feathers',
          'Flipper-like wings for “flying” underwater',
          'A brood pouch — a fold of skin that covers the egg on the feet',
        ],
        bn: [
          'কালো পিঠ, সাদা পেট এবং কানের কাছে উজ্জ্বল হলুদ-কমলা ছোপ',
          'আঁশের মতো ঘন করে সাজানো চার স্তরের পালক',
          'পানির নিচে ‘ওড়ার’ জন্য দাঁড়ের মতো ডানা',
          'পায়ের ওপর রাখা ডিম ঢেকে রাখার জন্য চামড়ার একটি ভাঁজ (ব্রুড পাউচ)',
        ],
      },
    },
    habitat: {
      en: 'Antarctic fast ice (sea ice attached to the coast) and the surrounding Southern Ocean',
      bn: 'অ্যান্টার্কটিকার উপকূলে আটকে থাকা স্থির সামুদ্রিক বরফ এবং চারপাশের দক্ষিণ মহাসাগর',
    },
    habitats: ['polar', 'ocean'],
    regions: ['polar', 'oceans'],
    distribution: {
      en: 'All around the coast of Antarctica, in more than 60 breeding colonies.',
      bn: 'অ্যান্টার্কটিকার পুরো উপকূল জুড়ে ৬০টিরও বেশি প্রজনন কলোনিতে।',
    },
    climate: {
      en: 'The harshest polar climate on Earth — winter winds up to 200 km/h and temperatures below −40 °C',
      bn: 'পৃথিবীর সবচেয়ে কঠোর মেরু জলবায়ু — শীতে ঘণ্টায় ২০০ কিলোমিটার পর্যন্ত বাতাস ও −৪০ ডিগ্রি সেলসিয়াসের নিচে তাপমাত্রা',
    },
    diet: {
      en: 'Fish (especially Antarctic silverfish), krill and squid',
      bn: 'মাছ (বিশেষত অ্যান্টার্কটিক সিলভারফিশ), ক্রিল ও স্কুইড',
    },
    ecologicalRole: {
      en: 'A key mid-level predator of the Southern Ocean and important prey for leopard seals and orcas.',
      bn: 'দক্ষিণ মহাসাগরের খাদ্যশৃঙ্খলে গুরুত্বপূর্ণ মধ্যম স্তরের শিকারি, আবার লেপার্ড সিল ও অর্কা (কিলার তিমি)-র প্রধান খাদ্যও।',
    },
    behavior: {
      en: 'Highly social; thousands huddle together and slowly rotate so each bird takes turns on the cold outer edge. Can dive to over 500 m and stay underwater for more than 20 minutes.',
      bn: 'খুবই সামাজিক; হাজার হাজার পেঙ্গুইন জটলা বেঁধে থাকে এবং ধীরে ধীরে জায়গা বদল করে, যাতে সবাই পালা করে ঠান্ডা বাইরের দিকে থাকে। এরা ৫০০ মিটারেরও বেশি গভীরে ডুব দিতে এবং ২০ মিনিটের বেশি পানির নিচে থাকতে পারে।',
    },
    range: {
      native: [
        [-66.67, 140.0],
        [-77.5, 168.0],
        [-75.5, -27.0],
        [-67.5, 61.0],
        [-74.0, -102.0],
        [-70.5, 7.5],
        [-66.0, 92.0],
      ],
      endemicTo: { en: 'Antarctica', bn: 'অ্যান্টার্কটিকা' },
    },
    conservation: {
      status: 'NT',
      trend: 'decreasing',
      population: {
        en: 'About 250,000 breeding pairs (satellite surveys)',
        bn: 'প্রায় ২,৫০,০০০ প্রজননক্ষম জোড়া (স্যাটেলাইট জরিপ অনুযায়ী)',
      },
      threats: {
        en: ['Loss and early break-up of sea ice due to climate change', 'Krill and fish harvesting in the Southern Ocean', 'Disturbance from tourism and research stations'],
        bn: ['জলবায়ু পরিবর্তনে সামুদ্রিক বরফ কমে যাওয়া ও আগেভাগে ভেঙে যাওয়া', 'দক্ষিণ মহাসাগরে ক্রিল ও মাছ আহরণ', 'পর্যটন ও গবেষণাকেন্দ্রের কারণে উপদ্রব'],
      },
      initiatives: {
        en: ['Antarctic Treaty and its environmental protocol', 'Marine protected areas such as the Ross Sea MPA', 'Satellite monitoring of breeding colonies', 'Listed as Threatened under the US Endangered Species Act (2022)'],
        bn: ['অ্যান্টার্কটিক চুক্তি ও এর পরিবেশ সুরক্ষা প্রটোকল', 'রস সাগরের মতো সামুদ্রিক সংরক্ষিত এলাকা', 'স্যাটেলাইটের মাধ্যমে প্রজনন কলোনি পর্যবেক্ষণ', 'যুক্তরাষ্ট্রের বিপন্ন প্রজাতি আইনে ‘হুমকির মুখে’ তালিকাভুক্ত (২০২২)'],
      },
      assessed: '2020',
    },
    facts: {
      en: [
        'Many colonies were first discovered from space by spotting their droppings on the ice.',
        'Males fast for up to 4 months and lose nearly half their body weight.',
        'Each chick recognises its parent by its unique call among thousands.',
      ],
      bn: [
        'বরফের ওপর এদের বিষ্ঠার দাগ দেখে মহাকাশ থেকে স্যাটেলাইটের সাহায্যে অনেক কলোনি প্রথম খুঁজে পাওয়া গেছে।',
        'বাবা পেঙ্গুইন ৪ মাস পর্যন্ত না খেয়ে থাকে এবং শরীরের ওজনের প্রায় অর্ধেক হারায়।',
        'হাজারো পেঙ্গুইনের ভিড়েও ছানা তার বাবা-মাকে আলাদা ডাক শুনে চিনে নেয়।',
      ],
    },
    related: ['polar-bear', 'blue-whale', 'spoon-billed-sandpiper'],
  },
  {
    id: 'common-kingfisher',
    commonName: { en: 'Common Kingfisher', bn: 'পাতি মাছরাঙা' },
    scientificName: 'Alcedo atthis',
    altNames: {
      en: ['Kingfisher', 'Eurasian Kingfisher', 'River Kingfisher', 'Small Blue Kingfisher'],
      bn: ['মাছরাঙা', 'ছোট মাছরাঙা', 'নীল মাছরাঙা', 'মাছরাঙা পাখি'],
    },
    category: 'birds',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Common kingfisher',
    description: {
      en: 'The common kingfisher is a small, brilliantly coloured bird with a vivid blue back and orange underparts. In Bangladesh it is one of the best-loved village birds, often seen sitting motionless on a bamboo pole or branch above a pond before plunging head-first to catch a fish. In Bengali, all birds of the kingfisher family are simply called machhranga.',
      bn: 'পাতি মাছরাঙা ছোট আকারের ঝলমলে রঙের একটি পাখি — পিঠ উজ্জ্বল নীল, বুক ও পেট কমলা। বাংলাদেশের গ্রামে এটি অতি পরিচিত ও প্রিয় পাখি। পুকুর বা খালের ওপর বাঁশের খুঁটি কিংবা গাছের ডালে চুপচাপ বসে থাকে, তারপর হঠাৎ মাথা নিচু করে পানিতে ঝাঁপ দিয়ে মাছ ধরে আনে। বাংলায় এই পরিবারের সব পাখিকেই মাছরাঙা বলা হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Coraciiformes',
      family: 'Alcedinidae',
      genus: 'Alcedo',
      species: 'A. atthis',
    },
    physical: {
      size: {
        en: '16–17 cm long; wingspan 24–26 cm',
        bn: '১৬–১৭ সেমি লম্বা; ডানার বিস্তার ২৪–২৬ সেমি',
      },
      weight: {
        en: '34–46 g',
        bn: '৩৪–৪৬ গ্রাম',
      },
      lifespan: {
        en: 'Usually 1–2 years in the wild; up to about 21 years recorded',
        bn: 'বনে সাধারণত ১–২ বছর; সর্বোচ্চ প্রায় ২১ বছরের রেকর্ড আছে',
      },
      features: {
        en: [
          'Shining blue-green upperparts and orange underparts',
          'Long, dagger-like black bill (female has an orange base to the lower bill)',
          'Short tail and tiny red feet',
        ],
        bn: [
          'উজ্জ্বল নীল-সবুজ পিঠ এবং কমলা রঙের পেট',
          'লম্বা, ছোরার মতো কালো ঠোঁট (স্ত্রী পাখির নিচের ঠোঁটের গোড়া কমলা)',
          'ছোট লেজ ও ছোট লাল পা',
        ],
      },
    },
    habitat: {
      en: 'Clear, slow-flowing rivers, canals, ponds, lakes, ditches and mangrove creeks',
      bn: 'পরিষ্কার ও ধীরে বয়ে চলা নদী, খাল, পুকুর, হ্রদ, ডোবা এবং ম্যানগ্রোভের খাঁড়ি',
    },
    habitats: ['rivers-lakes', 'wetland', 'mangrove', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'europe', 'africa', 'oceania'],
    distribution: {
      en: 'Widespread across Europe, North Africa and Asia east to Japan and south to Indonesia, New Guinea and the Solomon Islands. Common throughout Bangladesh.',
      bn: 'ইউরোপ, উত্তর আফ্রিকা এবং পূর্বে জাপান ও দক্ষিণে ইন্দোনেশিয়া, নিউ গিনি ও সলোমন দ্বীপপুঞ্জ পর্যন্ত এশিয়ার বিস্তীর্ণ এলাকায় পাওয়া যায়। বাংলাদেশের সর্বত্রই দেখা মেলে।',
    },
    climate: {
      en: 'Temperate to tropical; northern populations migrate south when waters freeze',
      bn: 'নাতিশীতোষ্ণ থেকে ক্রান্তীয়; উত্তরের পাখিরা পানি জমে গেলে দক্ষিণে চলে আসে',
    },
    diet: {
      en: 'Small fish such as minnows and fry; also aquatic insects, tadpoles and small crustaceans',
      bn: 'ছোট মাছ ও পোনা; এছাড়া জলজ পোকা, ব্যাঙাচি ও ছোট চিংড়িজাতীয় প্রাণী',
    },
    ecologicalRole: {
      en: 'A sensitive indicator of clean, fish-rich waterways.',
      bn: 'পরিষ্কার ও মাছসমৃদ্ধ জলাশয়ের একটি সংবেদনশীল নির্দেশক পাখি।',
    },
    behavior: {
      en: 'Solitary and territorial. Hunts from a low perch, diving at high speed with eyes protected by a third eyelid. Nests at the end of a tunnel up to 1 m long dug into a riverbank.',
      bn: 'একা থাকে ও নিজের এলাকা আগলে রাখে। নিচু ডালে বসে শিকার খোঁজে এবং প্রচণ্ড গতিতে পানিতে ঝাঁপ দেয়; তখন চোখের ওপর একটি স্বচ্ছ তৃতীয় পাতা চোখকে রক্ষা করে। নদীর খাড়া পাড়ে ১ মিটার পর্যন্ত লম্বা সুড়ঙ্গ খুঁড়ে তার শেষ মাথায় বাসা বানায়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [24.9, 91.9],
        [22.5, 89.5],
        [51.5, -0.5],
        [48.8, 2.3],
        [35.7, 139.7],
        [28.6, 77.2],
        [-6.2, 106.8],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Water pollution reducing fish prey', 'Canalisation and loss of natural riverbanks for nesting', 'Severe winters in Europe', 'Pesticide run-off from farmland'],
        bn: ['পানিদূষণে খাদ্য-মাছ কমে যাওয়া', 'খাল-নদী বাঁধাই করায় বাসা বানানোর মতো প্রাকৃতিক পাড় হারিয়ে যাওয়া', 'ইউরোপে তীব্র শীত', 'কৃষিজমি থেকে কীটনাশক ধুয়ে পানিতে মেশা'],
      },
      initiatives: {
        en: ['Protected under the EU Birds Directive (Annex I)', 'Artificial nesting banks along rivers', 'Wetland and river restoration projects'],
        bn: ['ইউরোপীয় ইউনিয়নের বার্ডস ডিরেক্টিভের (পরিশিষ্ট ১) অধীনে সংরক্ষিত', 'নদীর ধারে কৃত্রিম বাসা-পাড় তৈরি', 'জলাভূমি ও নদী পুনরুদ্ধার প্রকল্প'],
      },
    },
    facts: {
      en: [
        'Japan’s Shinkansen bullet train nose was redesigned after the kingfisher’s beak to reduce noise.',
        'It beats a fish against its perch before swallowing it head-first.',
        'Its blue colour comes from the structure of its feathers, not from pigment.',
      ],
      bn: [
        'মাছরাঙার ঠোঁটের আকৃতি দেখে জাপানের শিনকানসেন বুলেট ট্রেনের সামনের অংশ নতুন করে নকশা করা হয়েছিল, যাতে শব্দ কম হয়।',
        'মাছ ধরে ডালে আছাড় মেরে নিস্তেজ করে, তারপর মাথার দিক থেকে গিলে খায়।',
        'এর নীল রং কোনো রঞ্জক পদার্থ থেকে নয়, পালকের গঠনের কারণে তৈরি হয়।',
      ],
    },
    related: ['oriental-magpie-robin', 'fishing-cat', 'rohu', 'white-water-lily'],
  },
];
