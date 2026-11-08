import type { Species } from '@/types';

export const plantsUseful1: Species[] = [
  {
    id: 'rice',
    commonName: { en: 'Rice', bn: 'ধান' },
    scientificName: 'Oryza sativa',
    altNames: {
      en: ['Asian Rice', 'Paddy', 'Aman Rice'],
      bn: ['চাল', 'ধানগাছ', 'আমন ধান'],
    },
    category: 'plants',
    wikiTitle: 'Oryza sativa',
    description: {
      en: 'Asian rice is the staple food of Bangladesh and of more than half the world’s people. It is a grass grown mostly in flooded paddy fields, and in Bangladesh it is raised in three main seasons — Aus, Aman and Boro — so that the landscape turns green and gold several times a year. Thousands of local varieties exist, from fragrant Kalijira and Chinigura to modern high-yielding BRRI dhan varieties.',
      bn: 'ধান বাংলাদেশের প্রধান খাদ্যশস্য, আর পৃথিবীর অর্ধেকেরও বেশি মানুষের মূল খাবার এই ধানের চাল। এটি এক ধরনের ঘাসজাতীয় উদ্ভিদ, যা বেশির ভাগ ক্ষেত্রে পানি জমিয়ে রাখা জমিতে চাষ করা হয়। বাংলাদেশে আউশ, আমন ও বোরো — এই তিন মৌসুমে ধান চাষ হয়, তাই বছরে কয়েকবার মাঠ সবুজ থেকে সোনালি হয়ে ওঠে। সুগন্ধি কালিজিরা ও চিনিগুঁড়া থেকে শুরু করে ব্রি ধানের মতো উচ্চফলনশীল জাত — দেশে হাজারো রকমের ধান রয়েছে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Poales',
      family: 'Poaceae',
      genus: 'Oryza',
      species: 'O. sativa',
    },
    physical: {
      size: {
        en: 'Usually 0.6–1.5 m tall; some deep-water varieties grow several metres long',
        bn: 'সাধারণত ০.৬–১.৫ মিটার উঁচু; কিছু গভীর পানির জাত কয়েক মিটার পর্যন্ত লম্বা হয়',
      },
      weight: {
        en: 'Not applicable — a single grain weighs roughly 20–30 mg',
        bn: 'প্রযোজ্য নয় — একটি ধানের দানার ওজন মোটামুটি ২০–৩০ মিলিগ্রাম',
      },
      lifespan: {
        en: 'Annual; most varieties take about 3–6 months from sowing to harvest',
        bn: 'একবর্ষজীবী; বেশির ভাগ জাতের বীজ বোনা থেকে কাটা পর্যন্ত প্রায় ৩–৬ মাস লাগে',
      },
      features: {
        en: [
          'Long, narrow leaves and hollow jointed stems (culms) that form tillers',
          'Drooping flower clusters (panicles) that become heads of grain',
          'Air channels in stems and roots let it grow in standing water',
        ],
        bn: [
          'লম্বা সরু পাতা আর গিঁটযুক্ত ফাঁপা কাণ্ড, গোড়া থেকে অনেক কুশি বের হয়',
          'নুয়ে পড়া ছড়া বা শিষে ফুল ফোটে, পরে সেখানেই দানা হয়',
          'কাণ্ড ও শিকড়ে বাতাস চলাচলের নালি থাকায় জমে থাকা পানিতেও বাঁচে',
        ],
      },
    },
    habitat: {
      en: 'Flooded paddy fields, floodplains and terraced hill slopes',
      bn: 'পানি জমানো ধানখেত, প্লাবনভূমি ও পাহাড়ের ধাপ-কাটা জমি',
    },
    habitats: ['urban-farmland', 'wetland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'africa', 'south-america', 'north-america', 'europe'],
    distribution: {
      en: 'Domesticated in Asia (the Yangtze valley and the Ganges plains) and now grown on every inhabited continent; Bangladesh is one of the world’s top rice producers.',
      bn: 'এশিয়ায় (চীনের ইয়াংসি উপত্যকা ও গাঙ্গেয় সমভূমিতে) গৃহপালিত হয়, এখন বসতিপূর্ণ সব মহাদেশেই চাষ হয়; বাংলাদেশ বিশ্বের শীর্ষ ধান উৎপাদনকারী দেশগুলোর একটি।',
    },
    climate: {
      en: 'Warm, humid tropical and subtropical climates with plenty of water',
      bn: 'প্রচুর পানিসহ উষ্ণ ও আর্দ্র ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; draws nutrients from fertile alluvial soil and floodwater, helped by nitrogen-fixing microbes in paddy water',
      bn: 'সালোকসংশ্লেষণে খাদ্য তৈরি করে; উর্বর পলিমাটি ও বন্যার পানি থেকে পুষ্টি নেয়, ধানখেতের পানির নাইট্রোজেন-সংবন্ধনকারী অণুজীবও সাহায্য করে',
    },
    ecologicalRole: {
      en: 'Paddy fields act as seasonal wetlands for fish, frogs, egrets and insects, though flooded fields also release methane.',
      bn: 'ধানখেত মৌসুমি জলাভূমির মতো কাজ করে — মাছ, ব্যাঙ, বক ও পোকামাকড়ের আশ্রয় হয়; তবে পানিতে ডোবা খেত থেকে মিথেন গ্যাসও নির্গত হয়।',
    },
    behavior: {
      en: 'Seedlings are raised in nurseries and transplanted; the plant tillers, then flowers mostly in the morning and is largely self-pollinated.',
      bn: 'বীজতলায় চারা তৈরি করে মূল জমিতে রোপণ করা হয়; গাছ কুশি ছাড়ে, তারপর সাধারণত সকালে ফুল ফোটে এবং বেশির ভাগই স্বপরাগায়ন ঘটে।',
    },
    range: {
      native: [
        [30.5, 114.3],
        [23.1, 113.3],
        [24.9, 91.9],
        [25.6, 85.1],
        [23.8, 90.4],
      ],
      introduced: [
        [30.2, -92.0],
        [-22.9, -47.1],
        [39.3, -0.3],
        [-18.9, 47.5],
        [10.5, 7.4],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Loss of traditional local varieties to a few modern ones', 'Salinity intrusion and flooding linked to climate change', 'Pests and diseases such as blast and brown planthopper'],
        bn: ['আধুনিক অল্প কয়েকটি জাতের কারণে দেশি জাত হারিয়ে যাওয়া', 'জলবায়ু পরিবর্তনজনিত লবণাক্ততা ও বন্যা', 'ব্লাস্ট রোগ ও বাদামি গাছফড়িংয়ের মতো রোগবালাই'],
      },
      initiatives: {
        en: ['Gene banks at BRRI and the International Rice Research Institute', 'Breeding of salt- and flood-tolerant varieties'],
        bn: ['ব্রি ও আন্তর্জাতিক ধান গবেষণা ইনস্টিটিউটের জিন ব্যাংক', 'লবণ ও বন্যা সহনশীল জাত উদ্ভাবন'],
      },
    },
    facts: {
      en: [
        'Nabanna, the Bengali harvest festival, celebrates the new Aman rice in the month of Agrahayan.',
        'Some Bangladeshi deep-water rice can elongate quickly to keep its leaves above rising floodwater.',
        'Rice is the main source of daily calories for most people in Bangladesh.',
      ],
      bn: [
        'অগ্রহায়ণে নতুন আমন ধান ঘরে তোলার আনন্দে নবান্ন উৎসব পালিত হয়।',
        'বাংলাদেশের কিছু গভীর পানির ধান বন্যার পানি বাড়লে দ্রুত লম্বা হয়ে পাতা পানির ওপরে রাখে।',
        'বাংলাদেশের বেশির ভাগ মানুষের দৈনিক শক্তির প্রধান উৎস ভাত।',
      ],
    },
    related: ['jute', 'common-wheat', 'maize', 'sugarcane'],
  },
  {
    id: 'jute',
    commonName: { en: 'Jute', bn: 'পাট' },
    scientificName: 'Corchorus capsularis',
    altNames: {
      en: ['White Jute', 'Golden Fibre', 'Tossa Jute'],
      bn: ['সাদা পাট', 'সোনালি আঁশ', 'দেশি পাট'],
    },
    category: 'plants',
    wikiTitle: 'Corchorus capsularis',
    description: {
      en: 'White jute is a tall, slender annual of the mallow family whose long, shiny bast fibre earned it the name “golden fibre of Bangladesh”. Bangladesh and India together produce most of the world’s jute, which is spun into sacks, rope, carpets and biodegradable packaging. Its young leaves are also cooked as a bitter green vegetable (pat shak). The closely related tossa jute (Corchorus olitorius) is grown alongside it.',
      bn: 'সাদা বা দেশি পাট মালভেসি পরিবারের লম্বা, সরু একবর্ষজীবী উদ্ভিদ। এর লম্বা চকচকে আঁশের জন্য পাটকে বলা হয় বাংলাদেশের "সোনালি আঁশ"। বিশ্বের বেশির ভাগ পাট উৎপাদন হয় বাংলাদেশ ও ভারতে; এই আঁশ দিয়ে বস্তা, দড়ি, কার্পেট ও পরিবেশবান্ধব মোড়ক তৈরি হয়। কচি পাতা তেতো শাক — পাটশাক — হিসেবে রান্না করে খাওয়া হয়। এর ঘনিষ্ঠ আত্মীয় তোষা পাট (Corchorus olitorius) একই সঙ্গে চাষ হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Malvales',
      family: 'Malvaceae',
      genus: 'Corchorus',
      species: 'C. capsularis',
    },
    physical: {
      size: {
        en: 'Usually 2–4 m tall with a stem 1–2 cm thick',
        bn: 'সাধারণত ২–৪ মিটার উঁচু; কাণ্ড ১–২ সেমি মোটা',
      },
      weight: {
        en: 'Not applicable — measured by fibre yield per hectare',
        bn: 'প্রযোজ্য নয় — হেক্টরপ্রতি আঁশের ফলন দিয়ে মাপা হয়',
      },
      lifespan: {
        en: 'Annual; harvested about 4 months after sowing',
        bn: 'একবর্ষজীবী; বোনার প্রায় ৪ মাস পর কাটা হয়',
      },
      features: {
        en: [
          'Tall, straight, sparsely branched stem',
          'Small yellow five-petalled flowers',
          'Round, wrinkled seed capsules (unlike the long pods of tossa jute)',
        ],
        bn: [
          'লম্বা, সোজা, কম শাখাযুক্ত কাণ্ড',
          'পাঁচ পাপড়ির ছোট হলুদ ফুল',
          'গোলাকার কোঁচকানো বীজকোষ (তোষা পাটের লম্বা ফল থেকে আলাদা)',
        ],
      },
    },
    habitat: {
      en: 'Low-lying, seasonally flooded farmland on fertile river silt',
      bn: 'উর্বর নদীর পলিযুক্ত নিচু, মৌসুমি প্লাবিত কৃষিজমি',
    },
    habitats: ['urban-farmland', 'wetland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Probably native to the Indo-Burma region and southern China; grown mainly in Bangladesh and eastern India, especially the Ganges–Brahmaputra delta.',
      bn: 'সম্ভবত ইন্দো-বার্মা অঞ্চল ও দক্ষিণ চীনের স্থানীয়; প্রধানত বাংলাদেশ ও পূর্ব ভারতে, বিশেষ করে গঙ্গা-ব্রহ্মপুত্র বদ্বীপে চাষ হয়।',
    },
    climate: {
      en: 'Hot, humid monsoon climate with heavy summer rain',
      bn: 'গ্রীষ্মে প্রচুর বৃষ্টিসহ গরম ও আর্দ্র মৌসুমি জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; thrives on silt freshly deposited by floods and tolerates waterlogging late in the season',
      bn: 'সালোকসংশ্লেষণে খাদ্য তৈরি করে; বন্যার নতুন পলিতে ভালো জন্মায় এবং মৌসুমের শেষ দিকে জলাবদ্ধতা সহ্য করে',
    },
    ecologicalRole: {
      en: 'Fallen leaves enrich the soil, and jute products are a biodegradable alternative to plastic.',
      bn: 'ঝরে পড়া পাতা মাটিকে উর্বর করে, আর পাটজাত পণ্য প্লাস্টিকের পচনশীল বিকল্প।',
    },
    behavior: {
      en: 'Sown in spring and harvested in the monsoon; stems are retted (soaked) in ponds or ditches for weeks before the fibre is stripped.',
      bn: 'বসন্তে বোনা হয় এবং বর্ষায় কাটা হয়; আঁশ ছাড়ানোর আগে কাণ্ড কয়েক সপ্তাহ পুকুর বা ডোবায় জাগ দিয়ে পচানো হয়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [24.7, 90.4],
        [22.9, 89.5],
        [22.6, 88.4],
        [23.1, 113.3],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Competition from cheap synthetic fibres', 'Shortage of clean water for retting'],
        bn: ['সস্তা কৃত্রিম আঁশের প্রতিযোগিতা', 'পাট জাগ দেওয়ার মতো পরিষ্কার পানির অভাব'],
      },
      initiatives: {
        en: ['Sequencing of the jute genome by Bangladeshi scientists', 'Mandatory jute packaging laws in Bangladesh'],
        bn: ['বাংলাদেশি বিজ্ঞানীদের পাটের জিনোম রহস্য উন্মোচন', 'বাংলাদেশে পণ্যে পাটজাত মোড়কের বাধ্যতামূলক ব্যবহার আইন'],
      },
    },
    facts: {
      en: [
        'Jute is one of the cheapest and most widely produced natural fibres after cotton.',
        'Bangladeshi scientists led the decoding of the jute genome, announced in 2010.',
        'Leftover jute sticks (pankathi) are used as fuel and fencing in villages.',
      ],
      bn: [
        'তুলার পরে পাট সবচেয়ে সস্তা ও বেশি উৎপাদিত প্রাকৃতিক আঁশগুলোর একটি।',
        '২০১০ সালে বাংলাদেশি বিজ্ঞানীদের নেতৃত্বে পাটের জিনোম রহস্য উন্মোচনের ঘোষণা আসে।',
        'আঁশ ছাড়ানোর পর থাকা পাটকাঠি গ্রামে জ্বালানি ও বেড়া হিসেবে ব্যবহৃত হয়।',
      ],
    },
    related: ['rice', 'sugarcane'],
  },
  {
    id: 'turmeric',
    commonName: { en: 'Turmeric', bn: 'হলুদ' },
    scientificName: 'Curcuma longa',
    altNames: {
      en: ['Haldi', 'Indian Saffron'],
      bn: ['কাঁচা হলুদ', 'হলদি'],
    },
    category: 'plants',
    wikiTitle: 'Turmeric',
    description: {
      en: 'Turmeric is a leafy perennial of the ginger family grown for its bright orange rhizome, which is dried and ground into the yellow spice found in almost every Bangladeshi curry. It is part of the gaye holud ceremony before weddings and has long been used in traditional remedies for wounds and skin. Its pigment curcumin is being studied for health effects, but evidence is still limited and supplements are not a replacement for medical treatment.',
      bn: 'হলুদ আদা পরিবারের পাতাবহুল বহুবর্ষজীবী উদ্ভিদ। এর উজ্জ্বল কমলা রঙের কন্দ (রাইজোম) শুকিয়ে গুঁড়া করে যে মসলা তৈরি হয়, তা বাংলাদেশের প্রায় প্রতিটি তরকারিতে লাগে। বিয়ের আগে গায়ে হলুদ অনুষ্ঠানে কাঁচা হলুদ বাটা ব্যবহৃত হয়, আর কাটা-ছেঁড়া ও ত্বকের সমস্যায় ঘরোয়া প্রতিকার হিসেবেও এর প্রচলন বহু পুরোনো। এর রঞ্জক কারকিউমিন নিয়ে গবেষণা চলছে, তবে প্রমাণ এখনো সীমিত — হলুদের সাপ্লিমেন্ট চিকিৎসার বিকল্প নয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Zingiberales',
      family: 'Zingiberaceae',
      genus: 'Curcuma',
      species: 'C. longa',
    },
    physical: {
      size: {
        en: 'About 0.6–1 m tall',
        bn: 'প্রায় ০.৬–১ মিটার উঁচু',
      },
      weight: {
        en: 'Not applicable — a plant yields a clump of rhizomes often weighing a few hundred grams',
        bn: 'প্রযোজ্য নয় — একটি গাছ থেকে সাধারণত কয়েকশো গ্রাম ওজনের কন্দের গুচ্ছ পাওয়া যায়',
      },
      lifespan: {
        en: 'Perennial, but grown as an annual crop harvested after 7–10 months',
        bn: 'বহুবর্ষজীবী, তবে একবর্ষী ফসল হিসেবে ৭–১০ মাস পর তোলা হয়',
      },
      features: {
        en: [
          'Large, oblong leaves rising directly from the underground rhizome',
          'Rhizome with deep orange flesh and a warm, earthy smell',
          'Pale flower spikes with green and pinkish bracts',
        ],
        bn: [
          'মাটির নিচের কন্দ থেকে সরাসরি গজানো বড়, লম্বাটে পাতা',
          'কন্দের ভেতরটা গাঢ় কমলা, গন্ধ উষ্ণ ও মাটির মতো',
          'সবুজ ও গোলাপি আভার মঞ্জরিপত্রসহ ফ্যাকাশে ফুলের শিষ',
        ],
      },
    },
    habitat: {
      en: 'Well-drained farmland, homestead gardens and partly shaded hill slopes',
      bn: 'পানি নিষ্কাশন ভালো এমন কৃষিজমি, বসতবাড়ির বাগান ও আংশিক ছায়াযুক্ত পাহাড়ি ঢাল',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Known only in cultivation, probably originating in South or Southeast Asia; India is the largest producer, and it is widely grown in Bangladesh’s hill districts and northern regions.',
      bn: 'কেবল চাষাবাদেই পাওয়া যায়, সম্ভবত দক্ষিণ বা দক্ষিণ-পূর্ব এশিয়ায় উৎপত্তি; ভারত সবচেয়ে বড় উৎপাদক, বাংলাদেশের পার্বত্য জেলা ও উত্তরাঞ্চলে ব্যাপক চাষ হয়।',
    },
    climate: {
      en: 'Warm, humid tropical climate with good rainfall',
      bn: 'পর্যাপ্ত বৃষ্টিসহ উষ্ণ ও আর্দ্র ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; stores starch in its rhizome and needs loose, fertile, well-drained soil',
      bn: 'সালোকসংশ্লেষণে খাদ্য তৈরি করে কন্দে শ্বেতসার জমা রাখে; ঝুরঝুরে, উর্বর ও পানি জমে না এমন মাটি দরকার',
    },
    ecologicalRole: {
      en: 'Often intercropped under fruit trees and in hill farms, adding ground cover that reduces soil erosion.',
      bn: 'প্রায়ই ফলগাছের নিচে ও পাহাড়ি জুম খেতে সাথি ফসল হিসেবে লাগানো হয়, মাটি ঢেকে রেখে ক্ষয় কমায়।',
    },
    behavior: {
      en: 'Rarely sets seed; it is propagated from pieces of rhizome planted before the monsoon, and leaves die back in winter when it is harvested.',
      bn: 'বীজ প্রায় হয় না; বর্ষার আগে কন্দের টুকরা লাগিয়ে বংশবিস্তার করা হয়, শীতে পাতা শুকিয়ে গেলে হলুদ তোলা হয়।',
    },
    range: {
      native: [
        [11.3, 77.7],
        [17.4, 78.5],
        [22.6, 92.2],
        [16.8, 96.2],
        [23.8, 90.4],
      ],
      introduced: [
        [18.1, -77.3],
        [-4.0, 39.6],
        [-17.7, 178.0],
      ],
    },
    conservation: {
      status: 'DD',
      trend: 'unknown',
      threats: {
        en: ['Rhizome rot and leaf diseases in farms', 'Adulteration of powdered turmeric with lead-based colouring'],
        bn: ['খেতে কন্দ পচা ও পাতার রোগ', 'হলুদের গুঁড়ায় সিসাযুক্ত রং মেশানোর মতো ভেজাল'],
      },
      initiatives: {
        en: ['Improved varieties released by the Bangladesh Agricultural Research Institute (BARI)', 'Food-safety campaigns against lead-adulterated turmeric in Bangladesh'],
        bn: ['বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউটের (বারি) উন্নত জাত উদ্ভাবন', 'সিসা মেশানো হলুদের বিরুদ্ধে বাংলাদেশে খাদ্য নিরাপত্তা প্রচারণা'],
      },
    },
    facts: {
      en: [
        'Curcumin is poorly absorbed by the body on its own; black pepper is often eaten with it in cooking.',
        'Turmeric has been used to dye cloth, including traditional robes, for centuries.',
        'People taking blood-thinning medicines should ask a doctor before using turmeric supplements.',
      ],
      bn: [
        'কারকিউমিন একা শরীরে খুব কম শোষিত হয়; রান্নায় প্রায়ই গোলমরিচের সঙ্গে খাওয়া হয়।',
        'শত শত বছর ধরে কাপড়, এমনকি সন্ন্যাসীদের পোশাক রাঙাতেও হলুদ ব্যবহৃত হয়ে আসছে।',
        'যাঁরা রক্ত পাতলা করার ওষুধ খান, তাঁদের হলুদের সাপ্লিমেন্ট নেওয়ার আগে চিকিৎসকের পরামর্শ নেওয়া উচিত।',
      ],
    },
    related: ['ginger', 'green-cardamom', 'black-pepper', 'neem'],
  },
  {
    id: 'ginger',
    commonName: { en: 'Ginger', bn: 'আদা' },
    scientificName: 'Zingiber officinale',
    altNames: {
      en: ['Common Ginger', 'Ginger Root'],
      bn: ['আদা গাছ', 'শুকনো আদা'],
    },
    category: 'plants',
    wikiTitle: 'Ginger',
    description: {
      en: 'Ginger is a reed-like perennial whose pungent underground rhizome is one of the world’s most used spices; in Bangladesh it is ground with garlic as the base of countless curries and added to tea. In traditional medicine it is taken for colds and upset stomach, and clinical studies suggest it may help ease some kinds of nausea. Large amounts can cause heartburn, and people on blood thinners or expecting surgery should check with a doctor.',
      bn: 'আদা নলখাগড়ার মতো দেখতে বহুবর্ষজীবী উদ্ভিদ, যার ঝাঁঝালো কন্দ পৃথিবীর সবচেয়ে বেশি ব্যবহৃত মসলাগুলোর একটি। বাংলাদেশে রসুনের সঙ্গে আদাবাটা অসংখ্য তরকারির মূল উপকরণ, আর আদা-চা তো খুবই জনপ্রিয়। প্রচলিত চিকিৎসায় সর্দি-কাশি ও পেটের গোলমালে আদা খাওয়া হয়; কিছু গবেষণায় দেখা গেছে এটি কিছু ধরনের বমিভাব কমাতে সাহায্য করতে পারে। বেশি খেলে বুক জ্বালা হতে পারে, আর রক্ত পাতলা করার ওষুধ সেবনকারী বা অস্ত্রোপচারের অপেক্ষায় থাকা ব্যক্তিদের চিকিৎসকের পরামর্শ নেওয়া উচিত।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Zingiberales',
      family: 'Zingiberaceae',
      genus: 'Zingiber',
      species: 'Z. officinale',
    },
    physical: {
      size: {
        en: 'Leafy pseudostems about 0.6–1.2 m tall',
        bn: 'পাতাযুক্ত ছদ্মকাণ্ড প্রায় ০.৬–১.২ মিটার উঁচু',
      },
      weight: {
        en: 'Not applicable — rhizome clumps typically weigh 100–500 g per plant',
        bn: 'প্রযোজ্য নয় — প্রতি গাছে সাধারণত ১০০–৫০০ গ্রাম কন্দ হয়',
      },
      lifespan: {
        en: 'Perennial, grown as an annual crop harvested after 8–10 months',
        bn: 'বহুবর্ষজীবী, তবে ৮–১০ মাসের একবর্ষী ফসল হিসেবে চাষ হয়',
      },
      features: {
        en: [
          'Narrow, lance-shaped leaves in two rows along the stem',
          'Knobbly, branched, buff-skinned rhizome with pale yellow flesh',
          'Rarely flowers; flower spikes arise on separate short stalks',
        ],
        bn: [
          'কাণ্ডের দুই পাশে সারি করে সাজানো সরু, বর্শাকৃতি পাতা',
          'গাঁটযুক্ত, শাখায়িত কন্দ; বাইরে হালকা বাদামি, ভেতরে ফিকে হলুদ',
          'কদাচিৎ ফুল ফোটে; আলাদা ছোট দণ্ডে ফুলের শিষ বের হয়',
        ],
      },
    },
    habitat: {
      en: 'Fertile, well-drained farmland and partially shaded hill slopes',
      bn: 'উর্বর, পানি নিষ্কাশন ভালো এমন কৃষিজমি ও আংশিক ছায়াযুক্ত পাহাড়ি ঢাল',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'africa', 'north-america'],
    distribution: {
      en: 'Known only in cultivation, probably first domesticated in Island Southeast Asia or southern China; major producers include India, China, Nigeria and Nepal.',
      bn: 'কেবল চাষাবাদেই পাওয়া যায়, সম্ভবত দক্ষিণ-পূর্ব এশিয়ার দ্বীপাঞ্চল বা দক্ষিণ চীনে প্রথম চাষ শুরু হয়; প্রধান উৎপাদক ভারত, চীন, নাইজেরিয়া ও নেপাল।',
    },
    climate: {
      en: 'Warm, humid tropical and subtropical climates',
      bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; stores food in its rhizome and prefers loose soil rich in organic matter',
      bn: 'সালোকসংশ্লেষণে খাদ্য তৈরি করে কন্দে জমা রাখে; জৈব পদার্থসমৃদ্ধ ঝুরঝুরে মাটি পছন্দ করে',
    },
    ecologicalRole: {
      en: 'Grown in shaded agroforestry and as an intercrop, it makes productive use of space beneath fruit trees.',
      bn: 'ছায়াযুক্ত কৃষি-বনায়নে ও সাথি ফসল হিসেবে ফলগাছের নিচের জায়গা কাজে লাগায়।',
    },
    behavior: {
      en: 'Propagated from rhizome pieces planted in spring; shoots die back in winter and seed is almost never produced.',
      bn: 'বসন্তে কন্দের টুকরা লাগিয়ে চাষ হয়; শীতে ডগা শুকিয়ে যায়, আর বীজ প্রায় কখনোই হয় না।',
    },
    range: {
      native: [
        [23.1, 113.3],
        [22.0, 96.0],
        [-6.9, 107.6],
        [10.0, 76.3],
      ],
      introduced: [
        [10.5, 7.4],
        [18.1, -77.3],
        [27.7, 85.3],
      ],
    },
    conservation: {
      status: 'DD',
      trend: 'unknown',
      threats: {
        en: ['Soft rot and bacterial wilt in fields', 'Low genetic diversity because it is grown from clones'],
        bn: ['খেতে কন্দ পচা ও ব্যাকটেরিয়াজনিত ঢলে পড়া রোগ', 'কন্দ থেকে চাষ হওয়ায় জিনগত বৈচিত্র্য কম'],
      },
      initiatives: {
        en: ['Disease-free seed-rhizome programmes', 'Sack and container cultivation promoted for small farmers in Bangladesh'],
        bn: ['রোগমুক্ত বীজ-কন্দ সরবরাহ কর্মসূচি', 'বাংলাদেশে ক্ষুদ্র কৃষকদের জন্য বস্তায় আদা চাষে উৎসাহ'],
      },
    },
    facts: {
      en: [
        'Ginger’s heat comes mainly from gingerols, which turn into milder compounds when dried or cooked.',
        'In Bangladesh, “sack ginger” farming lets families grow ginger on rooftops and in yards.',
      ],
      bn: [
        'আদার ঝাঁঝ মূলত জিঞ্জেরল নামের যৌগ থেকে আসে, যা শুকালে বা রান্না করলে কিছুটা নরম স্বাদের যৌগে বদলে যায়।',
        'বাংলাদেশে বস্তায় আদা চাষ পদ্ধতিতে পরিবারগুলো ছাদে বা উঠানেই আদা ফলাতে পারে।',
      ],
    },
    related: ['turmeric', 'green-cardamom', 'tea-plant', 'lemongrass'],
  },
  {
    id: 'tea-plant',
    commonName: { en: 'Tea Plant', bn: 'চা গাছ' },
    scientificName: 'Camellia sinensis',
    altNames: {
      en: ['Tea', 'Assam Tea', 'Tea Bush'],
      bn: ['চা', 'আসাম চা', 'চায়ের ঝোপ'],
    },
    category: 'plants',
    wikiTitle: 'Camellia sinensis',
    description: {
      en: 'The tea plant is an evergreen shrub whose young leaves and buds are processed into black, green and other teas — the world’s most popular drink after water. In Bangladesh, rolling tea gardens cover the hills of Sylhet, Moulvibazar (Sreemangal) and Chattogram, and the country both produces and drinks large amounts of tea. Left unpruned it grows into a small tree, but on estates it is kept as waist-high bushes for plucking.',
      bn: 'চা গাছ একটি চিরসবুজ গুল্ম, যার কচি পাতা ও কুঁড়ি প্রক্রিয়াজাত করে কালো চা, সবুজ চা ইত্যাদি তৈরি হয় — পানির পরে এটিই পৃথিবীর সবচেয়ে জনপ্রিয় পানীয়। বাংলাদেশে সিলেট, মৌলভীবাজার (শ্রীমঙ্গল) ও চট্টগ্রামের টিলাজুড়ে ঢেউখেলানো চা বাগান দেখা যায়; দেশটি প্রচুর চা উৎপাদন করে এবং নিজেরাও প্রচুর চা পান করে। ছাঁটাই না করলে এটি ছোট গাছে পরিণত হয়, কিন্তু বাগানে পাতা তোলার সুবিধার জন্য কোমর-সমান উঁচু ঝোপ করে রাখা হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Ericales',
      family: 'Theaceae',
      genus: 'Camellia',
      species: 'C. sinensis',
    },
    physical: {
      size: {
        en: 'Pruned to about 1 m on estates; wild plants can reach 10–15 m',
        bn: 'বাগানে ছেঁটে প্রায় ১ মিটার রাখা হয়; বুনো অবস্থায় ১০–১৫ মিটার পর্যন্ত হতে পারে',
      },
      weight: {
        en: 'Not applicable — harvested as “two leaves and a bud”',
        bn: 'প্রযোজ্য নয় — "দুটি পাতা একটি কুঁড়ি" হিসেবে তোলা হয়',
      },
      lifespan: {
        en: 'Perennial; bushes stay productive for 50–100 years or more',
        bn: 'বহুবর্ষজীবী; একটি ঝোপ ৫০–১০০ বছর বা তারও বেশি সময় পাতা দেয়',
      },
      features: {
        en: [
          'Glossy, leathery, finely toothed leaves',
          'Small, fragrant white flowers with many yellow stamens',
          'Leaves contain caffeine and polyphenols that give tea its taste',
        ],
        bn: [
          'চকচকে, চামড়ার মতো, সূক্ষ্ম খাঁজকাটা কিনারার পাতা',
          'অনেক হলুদ পুংকেশরসহ ছোট, সুগন্ধি সাদা ফুল',
          'পাতায় থাকা ক্যাফেইন ও পলিফেনল চায়ের স্বাদ তৈরি করে',
        ],
      },
    },
    habitat: {
      en: 'Well-drained, acidic hill slopes with high rainfall, often under scattered shade trees',
      bn: 'প্রচুর বৃষ্টিপাতের অম্লীয় মাটির পানি-নিষ্কাশিত টিলার ঢাল, প্রায়ই ছড়ানো ছায়াগাছের নিচে',
    },
    habitats: ['urban-farmland', 'mountain', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'africa'],
    distribution: {
      en: 'Native to the region where southwestern China, northeast India and northern Myanmar meet; grown commercially in China, India, Sri Lanka, Kenya, Vietnam and Bangladesh.',
      bn: 'দক্ষিণ-পশ্চিম চীন, উত্তর-পূর্ব ভারত ও উত্তর মিয়ানমারের সংযোগস্থলের স্থানীয় উদ্ভিদ; চীন, ভারত, শ্রীলঙ্কা, কেনিয়া, ভিয়েতনাম ও বাংলাদেশে বাণিজ্যিকভাবে চাষ হয়।',
    },
    climate: {
      en: 'Warm, humid subtropical and tropical highland climates with year-round moisture',
      bn: 'সারা বছর আর্দ্রতাসহ উষ্ণ ও আর্দ্র উপক্রান্তীয় এবং ক্রান্তীয় উচ্চভূমির জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; needs acidic soil and is often grown with nitrogen-fixing shade trees',
      bn: 'সালোকসংশ্লেষণে খাদ্য তৈরি করে; অম্লীয় মাটি দরকার, প্রায়ই নাইট্রোজেন সংবন্ধনকারী ছায়াগাছের সঙ্গে চাষ হয়',
    },
    ecologicalRole: {
      en: 'Flowers feed bees in winter, and shade trees in tea estates provide habitat for birds, though clearing forest for gardens harms wildlife.',
      bn: 'শীতে ফুল মৌমাছিকে খাবার জোগায়, বাগানের ছায়াগাছে পাখিরা আশ্রয় পায়; তবে বাগানের জন্য বন কাটা বন্যপ্রাণীর ক্ষতি করে।',
    },
    behavior: {
      en: 'Fresh flushes of leaves are plucked every 1–2 weeks in the growing season; flowers in autumn and winter and is insect-pollinated.',
      bn: 'মৌসুমে প্রতি ১–২ সপ্তাহ পরপর নতুন কচি পাতা তোলা হয়; শরৎ ও শীতে ফুল ফোটে, পোকামাকড় পরাগায়ন ঘটায়।',
    },
    range: {
      native: [
        [25.0, 101.5],
        [22.0, 100.8],
        [26.7, 94.2],
        [25.4, 97.4],
      ],
      introduced: [
        [24.3, 91.7],
        [27.0, 88.3],
        [6.95, 80.8],
        [-0.37, 35.3],
        [21.6, 105.8],
      ],
    },
    conservation: {
      status: 'DD',
      trend: 'unknown',
      threats: {
        en: ['Loss of wild tea populations in their native forests', 'Climate change altering rainfall in tea-growing hills', 'Pests such as tea mosquito bug and red spider mite'],
        bn: ['স্থানীয় বনে বুনো চা গাছের সংখ্যা কমে যাওয়া', 'জলবায়ু পরিবর্তনে চা-অঞ্চলের বৃষ্টিপাতে অনিয়ম', 'চায়ের মশা ও লাল মাকড়ের মতো পোকার আক্রমণ'],
      },
      initiatives: {
        en: ['Clone and seed research at the Bangladesh Tea Research Institute, Sreemangal', 'Conservation of ancient tea trees in Yunnan'],
        bn: ['শ্রীমঙ্গলে বাংলাদেশ চা গবেষণা ইনস্টিটিউটের ক্লোন ও বীজ গবেষণা', 'চীনের ইউনান প্রদেশে প্রাচীন চা গাছ সংরক্ষণ'],
      },
    },
    facts: {
      en: [
        'Black, green, white and oolong teas all come from this one species — only the processing differs.',
        'Bangladesh’s first commercial tea garden, Malnicherra in Sylhet, was established in the 1850s.',
        'Sreemangal is often called the “tea capital” of Bangladesh.',
      ],
      bn: [
        'কালো, সবুজ, সাদা ও উলং — সব চা-ই এই একটি প্রজাতি থেকে আসে, পার্থক্য শুধু প্রক্রিয়াজাতকরণে।',
        'বাংলাদেশের প্রথম বাণিজ্যিক চা বাগান সিলেটের মালনীছড়া, যা ১৮৫০-এর দশকে প্রতিষ্ঠিত হয়।',
        'শ্রীমঙ্গলকে প্রায়ই বাংলাদেশের "চায়ের রাজধানী" বলা হয়।',
      ],
    },
    related: ['ginger', 'lemongrass', 'green-cardamom'],
  },
  {
    id: 'sugarcane',
    commonName: { en: 'Sugarcane', bn: 'আখ' },
    scientificName: 'Saccharum officinarum',
    altNames: {
      en: ['Noble Cane', 'Sugar Cane'],
      bn: ['ইক্ষু', 'কুশিয়ার'],
    },
    category: 'plants',
    wikiTitle: 'Saccharum officinarum',
    description: {
      en: 'Sugarcane is a giant perennial grass whose thick, juicy stems store large amounts of sucrose. Most of the world’s sugar comes from it, and in Bangladesh it is crushed for fresh juice, boiled into jaggery (akher gur) and refined in sugar mills of the northern and western districts. Modern commercial canes are hybrids of noble cane with wild Saccharum species.',
      bn: 'আখ বিশাল আকারের বহুবর্ষজীবী ঘাস, যার মোটা রসালো কাণ্ডে প্রচুর সুক্রোজ বা চিনি জমা থাকে। পৃথিবীর বেশির ভাগ চিনি আখ থেকেই আসে। বাংলাদেশে আখ মাড়াই করে টাটকা রস খাওয়া হয়, রস জ্বাল দিয়ে আখের গুড় বানানো হয়, আর উত্তর ও পশ্চিমাঞ্চলের চিনিকলে চিনি তৈরি হয়। আধুনিক বাণিজ্যিক আখের জাতগুলো মূলত এই প্রজাতি ও বুনো Saccharum প্রজাতির সংকর।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Poales',
      family: 'Poaceae',
      genus: 'Saccharum',
      species: 'S. officinarum',
    },
    physical: {
      size: {
        en: 'Stems 3–6 m tall and 2–5 cm thick',
        bn: 'কাণ্ড ৩–৬ মিটার উঁচু ও ২–৫ সেমি মোটা',
      },
      weight: {
        en: 'Not applicable — a single cane may weigh 1–3 kg',
        bn: 'প্রযোজ্য নয় — একটি আখের ওজন ১–৩ কেজি হতে পারে',
      },
      lifespan: {
        en: 'Perennial; a crop is harvested after 10–18 months and regrows as ratoon for a few seasons',
        bn: 'বহুবর্ষজীবী; ১০–১৮ মাস পর কাটা হয়, গোড়া থেকে মুড়ি আখ হিসেবে কয়েক মৌসুম আবার গজায়',
      },
      features: {
        en: [
          'Thick, jointed stems in shades of green, yellow or purple',
          'Long, arching leaves with sharp, rough edges',
          'Silky, feathery flower plumes (arrows) at the top',
        ],
        bn: [
          'সবুজ, হলুদ বা বেগুনি রঙের মোটা গিঁটযুক্ত কাণ্ড',
          'ধারালো খসখসে কিনারার লম্বা বাঁকানো পাতা',
          'আগায় রেশমি পালকের মতো ফুলের গুচ্ছ',
        ],
      },
    },
    habitat: {
      en: 'Fertile, irrigated farmland and river plains',
      bn: 'উর্বর, সেচযুক্ত কৃষিজমি ও নদী-তীরবর্তী সমভূমি',
    },
    habitats: ['urban-farmland'],
    regions: ['oceania', 'south-asia', 'southeast-asia', 'south-america', 'north-america', 'africa'],
    distribution: {
      en: 'Domesticated in New Guinea and spread across Asia in ancient times; Brazil and India are the largest producers today, and in Bangladesh it is grown mainly around Rajshahi, Natore, Kushtia and Joypurhat.',
      bn: 'নিউগিনিতে প্রথম চাষ শুরু হয় এবং প্রাচীনকালেই এশিয়াজুড়ে ছড়িয়ে পড়ে; বর্তমানে ব্রাজিল ও ভারত সবচেয়ে বড় উৎপাদক, আর বাংলাদেশে প্রধানত রাজশাহী, নাটোর, কুষ্টিয়া ও জয়পুরহাটে চাষ হয়।',
    },
    climate: {
      en: 'Hot tropical and subtropical climates with plenty of sun and water',
      bn: 'প্রচুর রোদ ও পানিসহ গরম ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Highly efficient C4 photosynthesis; a heavy feeder that needs rich soil and much water',
      bn: 'অত্যন্ত দক্ষ সি-ফোর পদ্ধতির সালোকসংশ্লেষণ করে; উর্বর মাটি ও প্রচুর পানি লাগে',
    },
    ecologicalRole: {
      en: 'Cane fields shelter rodents, jackals and birds; crushed stalks (bagasse) are burned for energy or made into paper.',
      bn: 'আখখেতে ইঁদুর, শিয়াল ও পাখি আশ্রয় নেয়; মাড়াইয়ের পর ছোবড়া জ্বালানি বা কাগজ তৈরিতে ব্যবহৃত হয়।',
    },
    behavior: {
      en: 'Planted from stem cuttings (setts) with buds at each node; it tillers into clumps and sugar content peaks in the cool dry season.',
      bn: 'গিঁটে কুঁড়িসহ কাণ্ডের টুকরা লাগিয়ে চাষ হয়; গোড়া থেকে অনেক কুশি বের হয়ে ঝাড় তৈরি করে, শীতের শুকনো মৌসুমে চিনির পরিমাণ সবচেয়ে বেশি হয়।',
    },
    range: {
      native: [
        [-6.3, 143.9],
        [-5.5, 145.8],
        [-9.4, 147.2],
      ],
      introduced: [
        [24.4, 88.9],
        [26.8, 80.9],
        [-21.2, -47.8],
        [-21.1, 149.2],
        [18.4, -66.0],
        [-26.3, 31.1],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Red rot and smut diseases', 'Declining area in Bangladesh as sugar mills struggle'],
        bn: ['লাল পচা ও কালো শিষ (স্মাট) রোগ', 'চিনিকলের দুরবস্থায় বাংলাদেশে চাষের জমি কমে যাওয়া'],
      },
      initiatives: {
        en: ['Variety development at the Bangladesh Sugarcrop Research Institute, Ishurdi', 'Germplasm collections of wild and noble canes'],
        bn: ['ঈশ্বরদীতে বাংলাদেশ সুগারক্রপ গবেষণা ইনস্টিটিউটের জাত উদ্ভাবন', 'বুনো ও খাঁটি আখের জার্মপ্লাজম সংগ্রহ'],
      },
    },
    facts: {
      en: [
        'Sugarcane is the world’s largest crop by harvested weight.',
        'The word “sugar” traces back through Arabic and Persian to the Sanskrit śarkarā.',
      ],
      bn: [
        'ফসল তোলার ওজনের হিসাবে আখ পৃথিবীর সবচেয়ে বড় ফসল।',
        'ইংরেজি "সুগার" শব্দটি আরবি ও ফারসি হয়ে সংস্কৃত "শর্করা" শব্দ থেকে এসেছে।',
      ],
    },
    related: ['rice', 'maize', 'jute'],
  },
  {
    id: 'common-wheat',
    commonName: { en: 'Wheat', bn: 'গম' },
    scientificName: 'Triticum aestivum',
    altNames: {
      en: ['Common Wheat', 'Bread Wheat'],
      bn: ['গমগাছ', 'আটার গম'],
    },
    category: 'plants',
    wikiTitle: 'Common wheat',
    description: {
      en: 'Common or bread wheat is one of the world’s three great cereal crops, ground into flour for bread, roti and paratha. It arose thousands of years ago in the Near East from natural crosses between three wild grasses. In Bangladesh it is the second most important cereal after rice, grown in the cool, dry winter (rabi) season, mainly in the northern and western districts.',
      bn: 'সাধারণ গম বা রুটির গম পৃথিবীর প্রধান তিনটি দানাশস্যের একটি; এর আটা-ময়দা দিয়ে রুটি, পাউরুটি ও পরোটা তৈরি হয়। হাজার হাজার বছর আগে নিকট প্রাচ্যে তিনটি বুনো ঘাসের প্রাকৃতিক সংকরায়ণে এর উৎপত্তি। বাংলাদেশে ধানের পরে গম দ্বিতীয় গুরুত্বপূর্ণ দানাশস্য, যা শীতের শুকনো রবি মৌসুমে মূলত উত্তর ও পশ্চিমাঞ্চলে চাষ হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Poales',
      family: 'Poaceae',
      genus: 'Triticum',
      species: 'T. aestivum',
    },
    physical: {
      size: {
        en: 'Usually 0.6–1.2 m tall',
        bn: 'সাধারণত ০.৬–১.২ মিটার উঁচু',
      },
      weight: {
        en: 'Not applicable — a thousand grains weigh roughly 30–50 g',
        bn: 'প্রযোজ্য নয় — এক হাজার দানার ওজন মোটামুটি ৩০–৫০ গ্রাম',
      },
      lifespan: {
        en: 'Annual; about 100–120 days in Bangladesh',
        bn: 'একবর্ষজীবী; বাংলাদেশে প্রায় ১০০–১২০ দিনে পাকে',
      },
      features: {
        en: [
          'Upright, compact spikes (ears) of grain, with or without bristly awns',
          'Hollow, jointed stems and flat, narrow leaves',
          'Six sets of chromosomes inherited from three ancestral species',
        ],
        bn: [
          'খাড়া, ঘন শিষে দানা, শুঙ্গ বা কাঁটার মতো সূক্ষ্ম রোম থাকতে পারে বা না-ও পারে',
          'গিঁটযুক্ত ফাঁপা কাণ্ড ও চ্যাপ্টা সরু পাতা',
          'তিনটি পূর্বপুরুষ প্রজাতি থেকে পাওয়া ছয় সেট ক্রোমোজোম',
        ],
      },
    },
    habitat: {
      en: 'Cultivated fields on loamy soils',
      bn: 'দোআঁশ মাটির চাষের জমি',
    },
    habitats: ['urban-farmland', 'grassland'],
    regions: ['europe', 'south-asia', 'east-asia', 'north-america', 'oceania', 'south-america', 'africa'],
    distribution: {
      en: 'Originated in the Fertile Crescent and the area south of the Caspian Sea; now grown worldwide, with China, India, Russia and the United States among the biggest producers.',
      bn: 'উর্বর অর্ধচন্দ্রাকৃতি অঞ্চল ও কাস্পিয়ান সাগরের দক্ষিণাঞ্চলে উৎপত্তি; এখন সারা বিশ্বে চাষ হয়, চীন, ভারত, রাশিয়া ও যুক্তরাষ্ট্র বড় উৎপাদক।',
    },
    climate: {
      en: 'Cool, temperate growing season; in the tropics it is grown in winter',
      bn: 'ঠান্ডা, নাতিশীতোষ্ণ আবহাওয়া প্রয়োজন; ক্রান্তীয় অঞ্চলে শীতকালে চাষ হয়',
    },
    diet: {
      en: 'Photosynthesis; needs moderate nitrogen and well-drained soil',
      bn: 'সালোকসংশ্লেষণে খাদ্য তৈরি করে; মাঝারি নাইট্রোজেন ও পানি-নিষ্কাশিত মাটি দরকার',
    },
    ecologicalRole: {
      en: 'Stubble and spilled grain feed sparrows, munias and rodents after harvest.',
      bn: 'ফসল কাটার পর পড়ে থাকা দানা ও নাড়া চড়ুই, মুনিয়া ও ইঁদুরের খাবার হয়।',
    },
    behavior: {
      en: 'Sown in November in Bangladesh and harvested in March; mostly self-pollinating, with flowers opening inside the spike.',
      bn: 'বাংলাদেশে কার্তিক-অগ্রহায়ণে (নভেম্বর) বোনা হয় এবং ফাল্গুন-চৈত্রে (মার্চ) কাটা হয়; শিষের ভেতরেই ফুল ফোটে, বেশির ভাগই স্বপরাগায়ন।',
    },
    range: {
      native: [
        [37.0, 40.0],
        [36.2, 44.0],
        [38.0, 46.3],
        [36.5, 52.0],
      ],
      introduced: [
        [30.9, 75.8],
        [25.6, 88.6],
        [38.5, -98.0],
        [49.0, 32.0],
        [-31.9, 117.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Wheat blast disease, first reported in Bangladesh in 2016', 'Heat stress during grain filling as winters warm'],
        bn: ['গমের ব্লাস্ট রোগ — বাংলাদেশে প্রথম শনাক্ত হয় ২০১৬ সালে', 'শীত কমে যাওয়ায় দানা পুষ্ট হওয়ার সময় তাপজনিত চাপ'],
      },
      initiatives: {
        en: ['Blast-resistant varieties from the Bangladesh Wheat and Maize Research Institute', 'Global wheat gene banks such as CIMMYT'],
        bn: ['বাংলাদেশ গম ও ভুট্টা গবেষণা ইনস্টিটিউটের ব্লাস্ট-প্রতিরোধী জাত', 'সিমিটের মতো আন্তর্জাতিক গমের জিন ব্যাংক'],
      },
    },
    facts: {
      en: [
        'Gluten proteins in wheat flour give dough its stretch; people with coeliac disease must avoid them.',
        'Wheat provides about a fifth of all calories eaten by humans.',
      ],
      bn: [
        'গমের আটায় থাকা গ্লুটেন প্রোটিন খামিরকে টানটান করে; সিলিয়াক রোগীদের তা এড়িয়ে চলতে হয়।',
        'মানুষের খাওয়া মোট শক্তির প্রায় পাঁচ ভাগের এক ভাগ আসে গম থেকে।',
      ],
    },
    related: ['rice', 'maize', 'brown-mustard'],
  },
  {
    id: 'maize',
    commonName: { en: 'Maize', bn: 'ভুট্টা' },
    scientificName: 'Zea mays',
    altNames: {
      en: ['Corn', 'Indian Corn', 'Sweet Corn'],
      bn: ['মকাই', 'জনার', 'মিষ্টি ভুট্টা'],
    },
    category: 'plants',
    wikiTitle: 'Maize',
    description: {
      en: 'Maize is a tall cereal grass domesticated about 9,000 years ago in southern Mexico from a wild grass called teosinte. It is now the most produced grain on Earth, used for food, poultry and fish feed, starch and fuel. In Bangladesh maize cultivation has grown rapidly, especially in the northern districts, largely to feed the poultry industry; roasted cobs are a popular street snack.',
      bn: 'ভুট্টা লম্বা ঘাসজাতীয় দানাশস্য, যা প্রায় ৯,০০০ বছর আগে দক্ষিণ মেক্সিকোতে টিওসিন্টে নামের বুনো ঘাস থেকে গৃহপালিত হয়। এখন এটি পৃথিবীতে সবচেয়ে বেশি উৎপাদিত দানাশস্য — খাবার, হাঁস-মুরগি ও মাছের খাদ্য, শ্বেতসার এবং জ্বালানি তৈরিতে ব্যবহৃত হয়। বাংলাদেশে, বিশেষ করে উত্তরাঞ্চলে, পোলট্রি শিল্পের চাহিদার কারণে ভুট্টা চাষ দ্রুত বেড়েছে; আর পোড়ানো ভুট্টা জনপ্রিয় রাস্তার খাবার।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Poales',
      family: 'Poaceae',
      genus: 'Zea',
      species: 'Z. mays',
    },
    physical: {
      size: {
        en: 'Usually 1.5–3 m tall',
        bn: 'সাধারণত ১.৫–৩ মিটার উঁচু',
      },
      weight: {
        en: 'Not applicable — a cob typically weighs 150–400 g',
        bn: 'প্রযোজ্য নয় — একটি মোচার ওজন সাধারণত ১৫০–৪০০ গ্রাম',
      },
      lifespan: {
        en: 'Annual; about 3–5 months',
        bn: 'একবর্ষজীবী; প্রায় ৩–৫ মাস',
      },
      features: {
        en: [
          'Male flowers in a tassel at the top, female flowers as silky ears on the stem',
          'Thick, solid stalk with broad, long leaves',
          'Prop roots near the base help hold the tall stem upright',
        ],
        bn: [
          'আগায় ঝালরের মতো পুরুষ ফুল, কাণ্ডের গায়ে রেশমি চুলসহ স্ত্রী ফুল বা মোচা',
          'মোটা, নিরেট কাণ্ড ও চওড়া লম্বা পাতা',
          'গোড়ার কাছে ঠেস মূল লম্বা কাণ্ডকে খাড়া রাখে',
        ],
      },
    },
    habitat: {
      en: 'Cultivated fields, including river char lands in Bangladesh',
      bn: 'চাষের জমি, বাংলাদেশে নদীর চরাঞ্চলসহ',
    },
    habitats: ['urban-farmland'],
    regions: ['north-america', 'south-america', 'east-asia', 'south-asia', 'africa', 'europe'],
    distribution: {
      en: 'Native to southern Mexico; now grown worldwide, with the United States, China and Brazil the largest producers and Rangpur, Dinajpur and Thakurgaon the main areas in Bangladesh.',
      bn: 'দক্ষিণ মেক্সিকোর স্থানীয়; এখন সারা বিশ্বে চাষ হয় — যুক্তরাষ্ট্র, চীন ও ব্রাজিল সবচেয়ে বড় উৎপাদক, আর বাংলাদেশে রংপুর, দিনাজপুর ও ঠাকুরগাঁও প্রধান এলাকা।',
    },
    climate: {
      en: 'Warm climates; frost-sensitive and needs moderate rainfall or irrigation',
      bn: 'উষ্ণ জলবায়ু; তুষারপাত সহ্য করে না, মাঝারি বৃষ্টি বা সেচ লাগে',
    },
    diet: {
      en: 'Efficient C4 photosynthesis; needs plenty of nitrogen fertiliser',
      bn: 'দক্ষ সি-ফোর পদ্ধতির সালোকসংশ্লেষণ করে; প্রচুর নাইট্রোজেন সার লাগে',
    },
    ecologicalRole: {
      en: 'Its abundant pollen is gathered by bees, and stalks are used as fodder and fuel.',
      bn: 'এর প্রচুর পরাগরেণু মৌমাছি সংগ্রহ করে, আর গাছের কাণ্ড গবাদিপশুর খাদ্য ও জ্বালানি হিসেবে ব্যবহৃত হয়।',
    },
    behavior: {
      en: 'Wind-pollinated: pollen from the tassel falls on the silks, each silk leading to one kernel.',
      bn: 'বাতাসের মাধ্যমে পরাগায়ন হয় — ঝালর থেকে পরাগরেণু রেশমি চুলে পড়ে, আর প্রতিটি চুল থেকে একটি করে দানা তৈরি হয়।',
    },
    range: {
      native: [
        [18.4, -100.0],
        [17.1, -96.7],
        [20.7, -103.3],
      ],
      introduced: [
        [42.0, -93.5],
        [25.7, 89.2],
        [43.8, 125.3],
        [-24.0, -52.0],
        [-0.5, 35.3],
        [45.0, 20.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Fall armyworm, which reached Bangladesh in 2018', 'Loss of traditional landraces in Mexico'],
        bn: ['ফল আর্মিওয়ার্ম পোকা, যা ২০১৮ সালে বাংলাদেশে পৌঁছায়', 'মেক্সিকোতে ঐতিহ্যবাহী স্থানীয় জাত হারিয়ে যাওয়া'],
      },
      initiatives: {
        en: ['CIMMYT maize gene bank in Mexico', 'Integrated pest management against fall armyworm'],
        bn: ['মেক্সিকোতে সিমিটের ভুট্টা জিন ব্যাংক', 'ফল আর্মিওয়ার্ম দমনে সমন্বিত বালাই ব্যবস্থাপনা'],
      },
    },
    facts: {
      en: [
        'Maize cannot survive in the wild — its kernels stay attached to the cob and need humans to plant them.',
        'Popcorn pops because water inside the kernel turns to steam and bursts the hard shell.',
      ],
      bn: [
        'ভুট্টা বুনো অবস্থায় টিকতে পারে না — দানা মোচায় আটকে থাকে, তাই মানুষকেই বীজ বুনতে হয়।',
        'দানার ভেতরের পানি গরমে বাষ্প হয়ে শক্ত খোসা ফাটিয়ে দেয় বলেই পপকর্ন ফোটে।',
      ],
    },
    related: ['rice', 'common-wheat', 'potato', 'chili-pepper'],
  },
  {
    id: 'potato',
    commonName: { en: 'Potato', bn: 'আলু' },
    scientificName: 'Solanum tuberosum',
    altNames: {
      en: ['Irish Potato', 'White Potato'],
      bn: ['গোল আলু', 'বিলাতি আলু'],
    },
    category: 'plants',
    wikiTitle: 'Potato',
    description: {
      en: 'The potato is a leafy herb of the nightshade family grown for its starchy underground tubers. It was domesticated in the Andes of Peru and Bolivia and reached South Asia during the colonial era; today it is the world’s most important non-grain food crop. Bangladesh is one of the largest potato producers in Asia, with Munshiganj, Bogura and Rangpur famous for their winter harvests. Green parts, sprouts and greened tubers contain solanine and should not be eaten.',
      bn: 'আলু বেগুন পরিবারের একটি পাতাবহুল বীরুৎ, যা মাটির নিচের শ্বেতসারপূর্ণ কন্দের জন্য চাষ করা হয়। পেরু ও বলিভিয়ার আন্দিজ পর্বতমালায় এর গৃহপালন শুরু হয়, আর ঔপনিবেশিক আমলে এটি দক্ষিণ এশিয়ায় আসে; এখন দানাশস্য ছাড়া এটিই পৃথিবীর সবচেয়ে গুরুত্বপূর্ণ খাদ্যফসল। বাংলাদেশ এশিয়ার বড় আলু উৎপাদকদের একটি; শীতের আলুর জন্য মুন্সীগঞ্জ, বগুড়া ও রংপুর বিখ্যাত। গাছের সবুজ অংশ, অঙ্কুর ও সবুজ হয়ে যাওয়া আলুতে সোলানিন নামের বিষাক্ত উপাদান থাকে, তাই এগুলো খাওয়া উচিত নয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Solanales',
      family: 'Solanaceae',
      genus: 'Solanum',
      species: 'S. tuberosum',
    },
    physical: {
      size: {
        en: 'About 0.4–1 m tall',
        bn: 'প্রায় ০.৪–১ মিটার উঁচু',
      },
      weight: {
        en: 'Not applicable — tubers usually weigh 50–300 g each',
        bn: 'প্রযোজ্য নয় — প্রতিটি আলুর ওজন সাধারণত ৫০–৩০০ গ্রাম',
      },
      lifespan: {
        en: 'Perennial by its tubers, but grown as an annual crop of about 3–4 months',
        bn: 'কন্দের মাধ্যমে বহুবর্ষজীবী, তবে প্রায় ৩–৪ মাসের একবর্ষী ফসল হিসেবে চাষ হয়',
      },
      features: {
        en: [
          'Compound leaves with several leaflets',
          'White, pink or purple star-shaped flowers with yellow centres',
          'Tubers form at the tips of underground stems (stolons), with “eyes” that sprout',
        ],
        bn: [
          'কয়েকটি পত্রকযুক্ত যৌগিক পাতা',
          'মাঝে হলুদসহ সাদা, গোলাপি বা বেগুনি তারার মতো ফুল',
          'মাটির নিচের কাণ্ডের (স্টোলন) আগায় আলু হয়; এর "চোখ" থেকে অঙ্কুর গজায়',
        ],
      },
    },
    habitat: {
      en: 'Cultivated fields with loose, sandy-loam soil',
      bn: 'ঝুরঝুরে বেলে-দোআঁশ মাটির চাষের জমি',
    },
    habitats: ['urban-farmland', 'mountain'],
    regions: ['south-america', 'south-asia', 'east-asia', 'europe', 'north-america', 'africa'],
    distribution: {
      en: 'Native to the Andes and southern Chile; now grown in about 150 countries, with China and India the top producers.',
      bn: 'আন্দিজ পর্বতমালা ও দক্ষিণ চিলির স্থানীয়; এখন প্রায় ১৫০টি দেশে চাষ হয়, চীন ও ভারত শীর্ষ উৎপাদক।',
    },
    climate: {
      en: 'Cool climates; in Bangladesh it is grown in the winter (rabi) season',
      bn: 'ঠান্ডা আবহাওয়া; বাংলাদেশে শীতের রবি মৌসুমে চাষ হয়',
    },
    diet: {
      en: 'Photosynthesis; sugars are moved underground and stored as starch in the tubers',
      bn: 'সালোকসংশ্লেষণে তৈরি শর্করা মাটির নিচে পাঠিয়ে কন্দে শ্বেতসার হিসেবে জমা রাখে',
    },
    ecologicalRole: {
      en: 'Its flowers are buzz-pollinated by bees, and the crop is host to pests such as aphids and potato tuber moths.',
      bn: 'মৌমাছি কাঁপুনি দিয়ে এর ফুলের পরাগায়ন ঘটায়; জাবপোকা ও আলুর সুতলি পোকার মতো বালাইয়ের আশ্রয় এই ফসল।',
    },
    behavior: {
      en: 'Planted from seed tubers in November and harvested in February–March in Bangladesh; it forms tubers when days are cool.',
      bn: 'বাংলাদেশে কার্তিক-অগ্রহায়ণে বীজ আলু লাগিয়ে মাঘ-ফাল্গুনে তোলা হয়; ঠান্ডা আবহাওয়ায় কন্দ তৈরি হয়।',
    },
    range: {
      native: [
        [-15.8, -70.0],
        [-13.5, -72.0],
        [-17.4, -66.2],
        [-42.6, -73.9],
      ],
      introduced: [
        [23.5, 90.5],
        [24.85, 89.37],
        [53.3, -7.5],
        [35.6, 104.6],
        [43.6, -116.2],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Late blight, the disease behind the Irish famine of the 1840s', 'Erosion of Andean landrace diversity'],
        bn: ['লেট ব্লাইট বা আলুর মড়ক রোগ — ১৮৪০-এর দশকের আইরিশ দুর্ভিক্ষের কারণ', 'আন্দিজের দেশি জাতের বৈচিত্র্য কমে যাওয়া'],
      },
      initiatives: {
        en: ['International Potato Center (CIP) gene bank in Lima, Peru', 'Blight-resistant varieties released in Bangladesh'],
        bn: ['পেরুর লিমায় আন্তর্জাতিক আলু কেন্দ্রের (সিআইপি) জিন ব্যাংক', 'বাংলাদেশে মড়ক-প্রতিরোধী জাত উদ্ভাবন'],
      },
    },
    facts: {
      en: [
        'Andean farmers grow thousands of potato varieties in many colours.',
        'Store potatoes in the dark: light turns them green and increases solanine.',
      ],
      bn: [
        'আন্দিজের কৃষকেরা নানা রঙের হাজারো জাতের আলু চাষ করেন।',
        'আলু অন্ধকারে রাখা উচিত — আলোয় আলু সবুজ হয়ে সোলানিন বেড়ে যায়।',
      ],
    },
    related: ['chili-pepper', 'maize', 'rice'],
  },
];
