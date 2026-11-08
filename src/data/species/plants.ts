import type { Species } from '@/types';

export const plants: Species[] = [
  {
    id: 'neem',
    commonName: { en: 'Neem', bn: 'নিম' },
    scientificName: 'Azadirachta indica',
    altNames: {
      en: ['Neem Tree', 'Indian Lilac', 'Margosa'],
      bn: ['নিমগাছ', 'নিম পাতা', 'নিম্ব'],
    },
    synonyms: ['Melia azadirachta', 'Antelaea azadirachta'],
    category: 'plants',
    secondaryCategories: ['trees'],
    wikiTitle: 'Azadirachta indica',
    description: {
      en: 'Neem is a fast-growing evergreen tree of the mahogany family, native to the Indian subcontinent and a familiar sight in village courtyards across Bangladesh. Almost every part of the tree has a place in traditional medicine and daily life: twigs have long been chewed as natural toothbrushes, and bitter leaves are used in folk remedies for skin problems. Its seeds contain azadirachtin, a natural compound used in eco-friendly insecticides. These traditional uses are not a substitute for medical advice, and neem oil can be poisonous if swallowed, especially by children.',
      bn: 'নিম মেহগনি পরিবারের দ্রুত বর্ধনশীল চিরসবুজ গাছ। ভারতীয় উপমহাদেশের স্থানীয় এই গাছ বাংলাদেশের গ্রামের উঠানে খুবই পরিচিত। গাছটির প্রায় প্রতিটি অংশই প্রচলিত চিকিৎসা ও দৈনন্দিন জীবনে ব্যবহৃত হয়ে আসছে — নিমের ডাল বহুকাল ধরে দাঁতন হিসেবে চিবানো হয়, আর তেতো পাতা চর্মরোগের ঘরোয়া প্রতিকারে ব্যবহৃত হয়। এর বীজে থাকে অ্যাজাডিরাক্টিন নামের প্রাকৃতিক যৌগ, যা পরিবেশবান্ধব কীটনাশক তৈরিতে কাজে লাগে। মনে রাখা দরকার, এসব প্রচলিত ব্যবহার চিকিৎসকের পরামর্শের বিকল্প নয়; আর নিম তেল গিলে ফেললে, বিশেষ করে শিশুদের জন্য, তা বিষাক্ত হতে পারে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Sapindales',
      family: 'Meliaceae',
      genus: 'Azadirachta',
      species: 'A. indica',
    },
    physical: {
      size: {
        en: 'Usually 15–20 m tall, occasionally up to 35 m; crown spread 15–20 m',
        bn: 'সাধারণত ১৫–২০ মিটার উঁচু, কখনো ৩৫ মিটার পর্যন্ত; ডালপালার বিস্তার ১৫–২০ মিটার',
      },
      weight: {
        en: 'Not usually measured by weight; fruits are olive-like drupes 1.4–2.8 cm long',
        bn: 'ওজন দিয়ে সাধারণত মাপা হয় না; ফল জলপাইয়ের মতো, ১.৪–২.৮ সেমি লম্বা',
      },
      lifespan: {
        en: 'Perennial; can live 150–200 years',
        bn: 'বহুবর্ষজীবী; ১৫০–২০০ বছর পর্যন্ত বাঁচতে পারে',
      },
      features: {
        en: [
          'Pinnate leaves with toothed, sickle-shaped leaflets',
          'Small, white, fragrant flowers in drooping clusters',
          'Smooth yellow-green fruits that turn yellow when ripe',
          'Strongly bitter taste in leaves, bark and seeds',
        ],
        bn: [
          'যৌগিক পাতা, পত্রকগুলো কাস্তের মতো বাঁকা ও কিনারা খাঁজকাটা',
          'ঝুলন্ত থোকায় ছোট, সাদা, সুগন্ধি ফুল',
          'মসৃণ হলদে-সবুজ ফল, পাকলে হলুদ হয়',
          'পাতা, বাকল ও বীজের স্বাদ প্রচণ্ড তেতো',
        ],
      },
    },
    habitat: {
      en: 'Dry deciduous forests, plains, roadsides and village homesteads; thrives on poor, dry soils',
      bn: 'শুষ্ক পর্ণমোচী বন, সমভূমি, রাস্তার ধার ও গ্রামের বসতবাড়ি; অনুর্বর ও শুকনো মাটিতেও ভালো জন্মায়',
    },
    habitats: ['tropical-forest', 'urban-farmland', 'grassland'],
    regions: ['south-asia', 'southeast-asia', 'africa', 'oceania', 'north-america'],
    distribution: {
      en: 'Native to the Indian subcontinent (Bangladesh, India, Nepal, Pakistan, Sri Lanka) and possibly Myanmar. Widely planted and naturalised in Southeast Asia, Africa (especially the Sahel), the Middle East, the Caribbean and northern Australia.',
      bn: 'ভারতীয় উপমহাদেশের (বাংলাদেশ, ভারত, নেপাল, পাকিস্তান, শ্রীলঙ্কা) এবং সম্ভবত মিয়ানমারের স্থানীয় গাছ। দক্ষিণ-পূর্ব এশিয়া, আফ্রিকা (বিশেষত সাহেল অঞ্চল), মধ্যপ্রাচ্য, ক্যারিবীয় অঞ্চল ও উত্তর অস্ট্রেলিয়ায় ব্যাপকভাবে রোপণ করা হয়েছে এবং প্রাকৃতিকভাবে ছড়িয়ে পড়েছে।',
    },
    climate: {
      en: 'Tropical and subtropical; tolerates intense heat and drought but not prolonged frost or waterlogging',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয়; প্রচণ্ড গরম ও খরা সহ্য করে, তবে দীর্ঘ তুষারপাত বা জলাবদ্ধতা সহ্য করতে পারে না',
    },
    diet: {
      en: 'Photosynthesis; a deep taproot lets it reach groundwater during long dry seasons',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; গভীর প্রধান মূলের সাহায্যে দীর্ঘ শুষ্ক মৌসুমেও মাটির নিচের পানি পায়',
    },
    ecologicalRole: {
      en: 'Provides shade, shelter and fruit for birds and bats, helps restore degraded dry land and is used in windbreaks and reforestation.',
      bn: 'ছায়া ও আশ্রয় দেয়, পাখি ও বাদুড়কে ফল জোগায়, ক্ষয়প্রাপ্ত শুষ্ক জমি পুনরুদ্ধারে সাহায্য করে এবং বায়ুরোধী বেষ্টনী ও বনায়নে ব্যবহৃত হয়।',
    },
    behavior: {
      en: 'Grows quickly and begins fruiting in 3–5 years. Flowers in spring (around Chaitra–Baishakh in Bangladesh) and is pollinated mainly by bees; birds and bats spread the seeds.',
      bn: 'দ্রুত বাড়ে এবং ৩–৫ বছরের মধ্যে ফল ধরতে শুরু করে। বসন্তে (বাংলাদেশে মোটামুটি চৈত্র–বৈশাখে) ফুল ফোটে; মূলত মৌমাছি পরাগায়ন ঘটায়, আর পাখি ও বাদুড় বীজ ছড়ায়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [24.4, 88.6],
        [26.9, 75.8],
        [17.4, 78.5],
        [12.97, 77.6],
        [27.7, 85.3],
        [8.6, 81.2],
      ],
      introduced: [
        [12.6, -8.0],
        [9.1, 7.4],
        [14.7, -17.4],
        [21.4, 39.8],
        [18.5, -72.3],
        [-12.5, 130.8],
        [-17.8, 178.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Locally, over-cutting for timber and fuelwood', 'Neem dieback disease caused by fungi in parts of India'],
        bn: ['কোথাও কোথাও কাঠ ও জ্বালানির জন্য অতিরিক্ত কাটা', 'ভারতের কিছু অঞ্চলে ছত্রাকজনিত "নিম ডাইব্যাক" রোগ'],
      },
      initiatives: {
        en: ['Widely planted in social forestry and roadside plantation programmes', 'Commercial cultivation for neem oil and bio-pesticides'],
        bn: ['সামাজিক বনায়ন ও সড়ক-পাশের বৃক্ষরোপণ কর্মসূচিতে ব্যাপকভাবে রোপণ', 'নিম তেল ও জৈব কীটনাশকের জন্য বাণিজ্যিক চাষ'],
      },
    },
    facts: {
      en: [
        'Neem leaves are traditionally kept among stored clothes, books and grain to deter insects.',
        'Azadirachtin from neem seeds disrupts insect feeding and growth but is low in toxicity to mammals.',
        'In Bangladesh, eating bitter neem leaves with rice is a traditional spring-time custom in many homes.',
      ],
      bn: [
        'পোকামাকড় দূরে রাখতে প্রথাগতভাবে কাপড়, বই ও শস্যের মধ্যে নিমপাতা রাখা হয়।',
        'নিমবীজের অ্যাজাডিরাক্টিন পোকার খাওয়া ও বৃদ্ধি ব্যাহত করে, কিন্তু স্তন্যপায়ীদের জন্য এর বিষাক্ততা কম।',
        'বাংলাদেশের অনেক ঘরে বসন্তকালে ভাতের সঙ্গে তেতো নিমপাতা ভাজা খাওয়ার প্রচলন আছে।',
      ],
    },
    related: ['holy-basil', 'aloe-vera', 'banyan', 'western-honey-bee'],
  },
  {
    id: 'holy-basil',
    commonName: { en: 'Holy Basil', bn: 'তুলসী' },
    scientificName: 'Ocimum tenuiflorum',
    altNames: {
      en: ['Tulsi', 'Tulasi', 'Sacred Basil'],
      bn: ['তুলসী গাছ', 'কৃষ্ণ তুলসী', 'রাম তুলসী'],
    },
    synonyms: ['Ocimum sanctum'],
    category: 'plants',
    wikiTitle: 'Ocimum tenuiflorum',
    description: {
      en: 'Holy Basil, or tulsi, is an aromatic shrub of the mint family native to the Indian subcontinent and Southeast Asia. It is sacred in Hinduism and is grown on a raised platform (tulsi mancha) in the courtyard of many Hindu homes in Bangladesh, where it is worshipped every evening. In traditional medicine such as Ayurveda, tulsi leaves are taken with honey or as a tea to ease coughs and colds. Some studies are exploring its effects, but it should not replace professional medical care.',
      bn: 'তুলসী পুদিনা পরিবারের একটি সুগন্ধি গুল্ম; ভারতীয় উপমহাদেশ ও দক্ষিণ-পূর্ব এশিয়ার স্থানীয় উদ্ভিদ। হিন্দু ধর্মে তুলসী পবিত্র — বাংলাদেশের অনেক হিন্দু বাড়ির উঠানে তুলসীমঞ্চে এই গাছ লাগানো হয় এবং প্রতি সন্ধ্যায় প্রদীপ জ্বালিয়ে পূজা করা হয়। আয়ুর্বেদসহ প্রচলিত চিকিৎসায় সর্দি-কাশিতে মধুর সঙ্গে তুলসী পাতার রস বা তুলসী চা খাওয়ার রীতি আছে। এর গুণাগুণ নিয়ে কিছু গবেষণা চলছে, তবে এটি চিকিৎসকের পরামর্শ ও চিকিৎসার বিকল্প নয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Lamiales',
      family: 'Lamiaceae',
      genus: 'Ocimum',
      species: 'O. tenuiflorum',
    },
    physical: {
      size: {
        en: 'Erect, much-branched shrub 30–60 cm tall (occasionally up to 1 m)',
        bn: 'খাড়া, অনেক শাখাযুক্ত গুল্ম; ৩০–৬০ সেমি উঁচু (কখনো ১ মিটার পর্যন্ত)',
      },
      weight: {
        en: 'Not applicable — a small herb; leaves are 2–5 cm long',
        bn: 'প্রযোজ্য নয় — ছোট গুল্ম; পাতা ২–৫ সেমি লম্বা',
      },
      lifespan: {
        en: 'Short-lived perennial, usually 1–3 years; often grown as an annual',
        bn: 'স্বল্পায়ু বহুবর্ষজীবী, সাধারণত ১–৩ বছর বাঁচে; অনেক সময় একবর্ষজীবী হিসেবে চাষ করা হয়',
      },
      features: {
        en: [
          'Strongly scented, slightly hairy oval leaves with a clove-like aroma',
          'Green-leaved (Rama) and purple-leaved (Krishna/Shyama) varieties',
          'Small purplish or white flowers on slender spikes',
          'Square, hairy stems typical of the mint family',
        ],
        bn: [
          'তীব্র সুগন্ধি, হালকা লোমযুক্ত ডিম্বাকার পাতা; গন্ধ অনেকটা লবঙ্গের মতো',
          'সবুজ পাতার (রাম তুলসী) ও বেগুনি পাতার (কৃষ্ণ বা শ্যামা তুলসী) জাত',
          'সরু মঞ্জরিতে ছোট বেগুনি বা সাদা ফুল',
          'পুদিনা পরিবারের বৈশিষ্ট্য অনুযায়ী চারকোনা, লোমশ কাণ্ড',
        ],
      },
    },
    habitat: {
      en: 'Cultivated in homes, temple grounds and gardens; also grows wild on disturbed ground and open scrub',
      bn: 'বাড়ি, মন্দির প্রাঙ্গণ ও বাগানে চাষ করা হয়; পতিত জমি ও খোলা ঝোপঝাড়ে বুনো অবস্থায়ও জন্মায়',
    },
    habitats: ['urban-farmland', 'grassland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Native across the Indian subcontinent and Southeast Asia, including Bangladesh, India, Nepal, Sri Lanka, Myanmar, Thailand and Malaysia. Cultivated worldwide by South Asian communities and herb growers.',
      bn: 'বাংলাদেশ, ভারত, নেপাল, শ্রীলঙ্কা, মিয়ানমার, থাইল্যান্ড ও মালয়েশিয়াসহ ভারতীয় উপমহাদেশ ও দক্ষিণ-পূর্ব এশিয়াজুড়ে স্থানীয়। দক্ষিণ এশীয় প্রবাসী ও ভেষজ চাষিদের মাধ্যমে সারা বিশ্বে চাষ হয়।',
    },
    climate: {
      en: 'Warm tropical and subtropical; sensitive to frost',
      bn: 'উষ্ণ ক্রান্তীয় ও উপক্রান্তীয়; তুষারপাত সহ্য করতে পারে না',
    },
    diet: {
      en: 'Photosynthesis; prefers full sun and well-drained, moderately fertile soil',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; পূর্ণ রোদ এবং পানি নিষ্কাশিত, মাঝারি উর্বর মাটি পছন্দ করে',
    },
    ecologicalRole: {
      en: 'Its nectar-rich flowers attract bees and other pollinators, and its aromatic oils deter many leaf-eating insects.',
      bn: 'মধুরসপূর্ণ ফুল মৌমাছি ও অন্যান্য পরাগায়নকারীকে আকৃষ্ট করে, আর সুগন্ধি তেল অনেক পাতাখেকো পোকাকে দূরে রাখে।',
    },
    behavior: {
      en: 'Flowers for much of the year in warm climates; pollinated mainly by bees. Seeds germinate readily and plants often self-sow around the parent.',
      bn: 'উষ্ণ জলবায়ুতে বছরের বেশির ভাগ সময় ফুল ফোটে; মূলত মৌমাছি পরাগায়ন ঘটায়। বীজ সহজে অঙ্কুরিত হয় এবং মূল গাছের আশপাশে নিজে থেকেই নতুন চারা গজায়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.8, 89.5],
        [25.3, 83.0],
        [13.1, 80.3],
        [7.3, 80.6],
        [16.8, 96.2],
        [13.75, 100.5],
        [3.1, 101.7],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['No major threats; very widely cultivated', 'Over-harvesting of wild plants for the herbal trade in some areas'],
        bn: ['বড় কোনো হুমকি নেই; ব্যাপকভাবে চাষ হয়', 'কিছু এলাকায় ভেষজ বাণিজ্যের জন্য বুনো গাছ অতিরিক্ত সংগ্রহ'],
      },
      initiatives: {
        en: ['Home and temple cultivation across South Asia', 'Organic herbal farming for tulsi tea and extracts'],
        bn: ['দক্ষিণ এশিয়াজুড়ে বাড়ি ও মন্দিরে চাষ', 'তুলসী চা ও নির্যাসের জন্য জৈব ভেষজ চাষ'],
      },
    },
    facts: {
      en: [
        'Its clove-like scent comes mainly from eugenol, the same compound found in cloves.',
        'Tulsi leaves are traditionally offered in Hindu worship, and tulsi beads are used in prayer garlands.',
        'In Thai cooking it is called "kra pao" and is used in the popular stir-fry pad kra pao.',
      ],
      bn: [
        'এর লবঙ্গের মতো গন্ধ আসে মূলত ইউজেনল থেকে — লবঙ্গেও এই যৌগ থাকে।',
        'হিন্দু পূজায় তুলসী পাতা নিবেদন করা হয় এবং তুলসী কাঠের দানা দিয়ে জপমালা তৈরি হয়।',
        'থাই রান্নায় একে "ক্রা পাও" বলে; জনপ্রিয় খাবার "প্যাড ক্রা পাও"-তে এটি ব্যবহৃত হয়।',
      ],
    },
    related: ['neem', 'aloe-vera', 'sacred-lotus', 'western-honey-bee'],
  },
  {
    id: 'aloe-vera',
    commonName: { en: 'Aloe Vera', bn: 'ঘৃতকুমারী' },
    scientificName: 'Aloe vera',
    altNames: {
      en: ['True Aloe', 'Barbados Aloe', 'Medicinal Aloe'],
      bn: ['অ্যালোভেরা', 'ঘৃতকাঞ্চন', 'ঘিকুমারী'],
    },
    synonyms: ['Aloe barbadensis', 'Aloe vulgaris'],
    category: 'plants',
    wikiTitle: 'Aloe vera',
    description: {
      en: 'Aloe vera is a stemless succulent with thick, fleshy leaves full of a clear gel. It originated in the Arabian Peninsula but has been cultivated for thousands of years and now grows across the tropics, including in pots and farms all over Bangladesh. The leaf gel is traditionally applied to minor burns, sunburn and dry skin, and is widely used in cosmetics and drinks. The yellow latex just under the skin is a strong laxative and can cause side effects, so aloe should be used with care and is not a replacement for medical treatment.',
      bn: 'ঘৃতকুমারী বা অ্যালোভেরা কাণ্ডহীন রসালো উদ্ভিদ; এর পুরু, মাংসল পাতায় স্বচ্ছ জেল ভরা থাকে। এর আদি নিবাস আরব উপদ্বীপ, তবে হাজার হাজার বছর ধরে চাষ হওয়ায় এখন ক্রান্তীয় অঞ্চলজুড়ে জন্মায় — বাংলাদেশেও টবে ও খামারে ব্যাপকভাবে চাষ হয়। প্রচলিতভাবে হালকা পোড়া, রোদে পোড়া ও শুষ্ক ত্বকে পাতার জেল লাগানো হয়, আর প্রসাধনী ও পানীয়তেও এর ব্যবহার ব্যাপক। পাতার খোসার ঠিক নিচের হলুদ কষ শক্তিশালী জোলাপ এবং পার্শ্বপ্রতিক্রিয়া ঘটাতে পারে, তাই সাবধানে ব্যবহার করা উচিত; এটি চিকিৎসার বিকল্প নয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Asparagales',
      family: 'Asphodelaceae',
      genus: 'Aloe',
      species: 'A. vera',
    },
    physical: {
      size: {
        en: 'Rosettes 60–100 cm tall; leaves 30–50 cm long and up to 10 cm wide at the base',
        bn: 'পাতার গুচ্ছ ৬০–১০০ সেমি উঁচু; পাতা ৩০–৫০ সেমি লম্বা এবং গোড়ায় ১০ সেমি পর্যন্ত চওড়া',
      },
      weight: {
        en: 'A mature leaf typically weighs about 0.5–1.5 kg, most of it water-rich gel',
        bn: 'একটি পরিণত পাতার ওজন সাধারণত প্রায় ০.৫–১.৫ কেজি, যার বেশির ভাগই পানিপূর্ণ জেল',
      },
      lifespan: {
        en: 'Perennial; individual plants live for many years and spread by offsets (pups)',
        bn: 'বহুবর্ষজীবী; একটি গাছ বহু বছর বাঁচে এবং গোড়া থেকে চারা (পাপ) বের হয়ে বংশবিস্তার করে',
      },
      features: {
        en: [
          'Thick, grey-green, lance-shaped leaves with small white teeth along the edges',
          'Clear inner gel and a bitter yellow latex beneath the leaf skin',
          'Tall flower spike with tubular yellow flowers',
          'Young leaves often have pale speckles',
        ],
        bn: [
          'পুরু, ধূসর-সবুজ, বর্শাকার পাতা; কিনারায় ছোট সাদা কাঁটা',
          'ভেতরে স্বচ্ছ জেল এবং খোসার নিচে তেতো হলুদ কষ',
          'লম্বা পুষ্পদণ্ডে নলাকার হলুদ ফুল',
          'কচি পাতায় প্রায়ই হালকা রঙের ছিট থাকে',
        ],
      },
    },
    habitat: {
      en: 'Dry, rocky and sandy ground in arid regions; widely grown in gardens, pots and plantations',
      bn: 'শুষ্ক অঞ্চলের পাথুরে ও বালুময় মাটি; বাগান, টব ও খামারে ব্যাপকভাবে চাষ হয়',
    },
    habitats: ['desert', 'urban-farmland', 'grassland'],
    regions: ['africa', 'south-asia', 'north-america', 'south-america', 'europe', 'oceania'],
    distribution: {
      en: 'Believed to be native to the south-western Arabian Peninsula (Oman and Yemen). Naturalised in North Africa, the Canary Islands, southern Europe, South Asia, the Caribbean, Mexico, the southern United States and Australia.',
      bn: 'ধারণা করা হয়, এর আদি নিবাস আরব উপদ্বীপের দক্ষিণ-পশ্চিমাংশ (ওমান ও ইয়েমেন)। উত্তর আফ্রিকা, ক্যানারি দ্বীপপুঞ্জ, দক্ষিণ ইউরোপ, দক্ষিণ এশিয়া, ক্যারিবীয় অঞ্চল, মেক্সিকো, দক্ষিণ যুক্তরাষ্ট্র ও অস্ট্রেলিয়ায় প্রাকৃতিকভাবে ছড়িয়ে পড়েছে।',
    },
    climate: {
      en: 'Hot, dry or semi-arid; tolerates drought well but not frost or waterlogged soil',
      bn: 'গরম, শুষ্ক বা আধা-শুষ্ক; খরা ভালো সহ্য করে, কিন্তু তুষারপাত বা জলাবদ্ধ মাটি সহ্য করতে পারে না',
    },
    diet: {
      en: 'Photosynthesis using CAM — it opens its pores at night to save water and stores water in its leaves',
      bn: 'সালোকসংশ্লেষণ, তবে "ক্যাম" (CAM) পদ্ধতিতে — পানি বাঁচাতে রাতে পত্ররন্ধ্র খোলে এবং পাতায় পানি জমিয়ে রাখে',
    },
    ecologicalRole: {
      en: 'In the wild its nectar-rich flowers feed birds and bees, and its offsets help stabilise loose sandy soil.',
      bn: 'বুনো পরিবেশে এর মধুরসপূর্ণ ফুল পাখি ও মৌমাছির খাবার জোগায়, আর গোড়ার চারা আলগা বালুময় মাটি ধরে রাখতে সাহায্য করে।',
    },
    behavior: {
      en: 'Slow-growing. Flowers mostly in winter or spring in warm climates; flowers are pollinated by birds and bees. Cultivated plants rarely set seed and are propagated from pups.',
      bn: 'ধীরে বাড়ে। উষ্ণ অঞ্চলে সাধারণত শীত বা বসন্তে ফুল ফোটে; পাখি ও মৌমাছি পরাগায়ন ঘটায়। চাষ করা গাছে কদাচিৎ বীজ হয়, তাই গোড়ার চারা থেকে বংশবৃদ্ধি করা হয়।',
    },
    range: {
      native: [
        [17.0, 54.1],
        [15.4, 44.2],
        [13.0, 45.0],
      ],
      introduced: [
        [28.3, -16.5],
        [31.6, -8.0],
        [37.4, -5.9],
        [23.8, 90.4],
        [26.9, 70.9],
        [13.1, -59.6],
        [20.9, -89.6],
        [26.2, -98.2],
        [-23.7, 133.9],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened as a species; known mainly from cultivation', 'Many wild Aloe relatives are threatened by over-harvesting'],
        bn: ['প্রজাতি হিসেবে বিপন্ন নয়; মূলত চাষের মাধ্যমেই পরিচিত', 'অতিরিক্ত সংগ্রহের কারণে অ্যালো গণের অনেক বুনো প্রজাতি হুমকির মুখে'],
      },
      initiatives: {
        en: ['Large-scale commercial cultivation reduces pressure on wild aloes', 'All Aloe species except Aloe vera are listed under CITES to regulate trade'],
        bn: ['বড় পরিসরে বাণিজ্যিক চাষ বুনো অ্যালো প্রজাতির ওপর চাপ কমায়', 'বাণিজ্য নিয়ন্ত্রণে Aloe vera ছাড়া সব অ্যালো প্রজাতি সাইটিস (CITES)-এর তালিকাভুক্ত'],
      },
    },
    facts: {
      en: [
        'The gel is about 99% water.',
        'Aloe vera has been used in traditional remedies since ancient Egyptian and Greek times.',
        'Natore in Bangladesh is well known for commercial aloe vera farming.',
      ],
      bn: [
        'এর জেলের প্রায় ৯৯ শতাংশই পানি।',
        'প্রাচীন মিসরীয় ও গ্রিক যুগ থেকেই ঘৃতকুমারী প্রচলিত চিকিৎসায় ব্যবহৃত হয়ে আসছে।',
        'বাংলাদেশের নাটোর জেলা বাণিজ্যিক অ্যালোভেরা চাষের জন্য সুপরিচিত।',
      ],
    },
    related: ['neem', 'holy-basil', 'african-baobab'],
  },
  {
    id: 'venus-flytrap',
    commonName: { en: 'Venus Flytrap', bn: 'ভেনাস ফ্লাইট্র্যাপ' },
    scientificName: 'Dionaea muscipula',
    altNames: {
      en: ['Venus’s Flytrap', 'Flytrap', 'Carnivorous Plant'],
      bn: ['মাংসাশী উদ্ভিদ', 'পতঙ্গভুক উদ্ভিদ', 'মাছিখেকো গাছ'],
    },
    category: 'plants',
    wikiTitle: 'Venus flytrap',
    description: {
      en: 'The Venus Flytrap is the world’s most famous carnivorous plant. Each leaf ends in a hinged trap edged with stiff "teeth"; when an insect touches the trigger hairs inside twice in quick succession, the trap snaps shut in a fraction of a second. Despite its fame, it grows naturally only in a small area of boggy pine savanna on the coastal plain of North and South Carolina, USA, where it depends on regular fires to keep competing plants away.',
      bn: 'ভেনাস ফ্লাইট্র্যাপ পৃথিবীর সবচেয়ে বিখ্যাত মাংসাশী উদ্ভিদ। প্রতিটি পাতার মাথায় থাকে কবজার মতো খোলা-বন্ধ হওয়া একটি ফাঁদ, যার কিনারায় শক্ত "দাঁত"। কোনো পোকা ফাঁদের ভেতরের সংবেদী লোম অল্প সময়ের ব্যবধানে দুবার ছুঁয়ে ফেললেই এক পলকে ফাঁদ বন্ধ হয়ে যায়। এত খ্যাতি সত্ত্বেও প্রকৃতিতে এরা জন্মায় কেবল যুক্তরাষ্ট্রের নর্থ ও সাউথ ক্যারোলাইনার উপকূলীয় সমভূমির ছোট্ট এক এলাকার স্যাঁতসেঁতে পাইন-সাভানায়। প্রতিযোগী গাছপালা সরিয়ে রাখতে এদের নিয়মিত প্রাকৃতিক দাবানলের প্রয়োজন হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Caryophyllales',
      family: 'Droseraceae',
      genus: 'Dionaea',
      species: 'D. muscipula',
    },
    physical: {
      size: {
        en: 'Rosette about 10–13 cm across; traps up to about 3–4 cm long; flower stalk 15–30 cm tall',
        bn: 'পাতার গুচ্ছ প্রায় ১০–১৩ সেমি চওড়া; ফাঁদ প্রায় ৩–৪ সেমি পর্যন্ত লম্বা; ফুলের ডাঁটা ১৫–৩০ সেমি উঁচু',
      },
      weight: {
        en: 'Not applicable — a small herb weighing only a few grams',
        bn: 'প্রযোজ্য নয় — মাত্র কয়েক গ্রাম ওজনের ছোট বীরুৎ',
      },
      lifespan: {
        en: 'Perennial; can live 20 years or more, dying back to an underground rhizome in winter',
        bn: 'বহুবর্ষজীবী; ২০ বছর বা তার বেশি বাঁচতে পারে; শীতে মাটির নিচের রাইজোমে সুপ্ত থাকে',
      },
      features: {
        en: [
          'Hinged two-lobed traps with bristly "teeth" along the edges',
          'Three to four trigger hairs on the inner surface of each lobe',
          'Inside of the trap often bright red',
          'White flowers on a tall stalk, held well above the traps',
        ],
        bn: [
          'কবজার মতো দুই ভাগের ফাঁদ, কিনারায় খাড়া "দাঁত"',
          'প্রতিটি ভাগের ভেতরের দিকে ৩–৪টি সংবেদী লোম',
          'ফাঁদের ভেতরটা প্রায়ই উজ্জ্বল লাল',
          'লম্বা ডাঁটায় সাদা ফুল, ফাঁদ থেকে অনেক উঁচুতে থাকে',
        ],
      },
    },
    habitat: {
      en: 'Wet, sandy, nutrient-poor soils in longleaf pine savannas and the edges of pocosin bogs',
      bn: 'লংলিফ পাইন সাভানা ও পোকোসিন জলাভূমির কিনারায় ভেজা, বালুময় ও পুষ্টিহীন মাটি',
    },
    habitats: ['wetland', 'grassland'],
    regions: ['north-america'],
    distribution: {
      en: 'Found naturally only within about 120 km of Wilmington, North Carolina, extending into north-eastern South Carolina. Small naturalised populations exist in Florida and New Jersey.',
      bn: 'প্রাকৃতিকভাবে কেবল নর্থ ক্যারোলাইনার উইলমিংটন শহরের প্রায় ১২০ কিলোমিটারের মধ্যে, সাউথ ক্যারোলাইনার উত্তর-পূর্বাংশ পর্যন্ত পাওয়া যায়। ফ্লোরিডা ও নিউ জার্সিতে মানুষের মাধ্যমে ছড়ানো ছোট কিছু জনগোষ্ঠী আছে।',
    },
    climate: {
      en: 'Humid subtropical with hot summers and mild winters; needs a cool winter dormancy',
      bn: 'আর্দ্র উপক্রান্তীয় — গ্রীষ্ম গরম, শীত মৃদু; শীতকালে ঠান্ডায় সুপ্তাবস্থা প্রয়োজন',
    },
    diet: {
      en: 'Photosynthesis for energy, plus carnivory: it traps and digests ants, spiders, beetles and flies to obtain nitrogen and phosphorus missing from the soil',
      bn: 'শক্তির জন্য সালোকসংশ্লেষণ করে; পাশাপাশি মাংসাশী — মাটিতে না থাকা নাইট্রোজেন ও ফসফরাস পেতে পিঁপড়া, মাকড়সা, গুবরে পোকা ও মাছি ধরে হজম করে',
    },
    ecologicalRole: {
      en: 'A specialist of fire-maintained wetlands; its presence indicates healthy, well-burned longleaf pine savanna.',
      bn: 'দাবানলের মাধ্যমে টিকে থাকা জলাভূমির বিশেষায়িত উদ্ভিদ; এর উপস্থিতি সুস্থ লংলিফ পাইন সাভানার নির্দেশক।',
    },
    behavior: {
      en: 'Two touches of the trigger hairs within about 20 seconds close the trap in around 0.1 seconds. Further stimulation seals it, and digestion takes about 5–12 days. Flowers in May–June and is pollinated by bees and beetles that it does not eat.',
      bn: 'প্রায় ২০ সেকেন্ডের মধ্যে সংবেদী লোমে দুবার স্পর্শ লাগলে মাত্র ০.১ সেকেন্ডের মতো সময়ে ফাঁদ বন্ধ হয়। শিকার নড়াচড়া করতে থাকলে ফাঁদ শক্তভাবে আটকে যায়, আর হজম হতে প্রায় ৫–১২ দিন লাগে। মে–জুনে ফুল ফোটে; মৌমাছি ও গুবরে পোকা পরাগায়ন ঘটায় — মজার ব্যাপার, এদের ফাঁদে খুব কমই ধরা পড়ে।',
    },
    range: {
      native: [
        [34.23, -77.94],
        [34.1, -78.3],
        [34.5, -77.7],
        [34.05, -77.92],
        [34.9, -77.0],
        [33.85, -78.95],
      ],
      introduced: [
        [30.4, -84.9],
        [39.8, -74.5],
      ],
      endemicTo: { en: 'Coastal plain of North and South Carolina, USA', bn: 'যুক্তরাষ্ট্রের নর্থ ও সাউথ ক্যারোলাইনার উপকূলীয় সমভূমি' },
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Poaching of wild plants for sale', 'Drainage and development of wetlands', 'Fire suppression allowing shrubs to shade it out'],
        bn: ['বিক্রির জন্য বুনো গাছ চুরি করে তোলা', 'জলাভূমি শুকিয়ে উন্নয়ন ও আবাসন প্রকল্প', 'দাবানল দমনের ফলে ঝোপঝাড় বেড়ে গিয়ে আলো আটকে দেওয়া'],
      },
      initiatives: {
        en: ['Poaching wild flytraps has been a felony in North Carolina since 2014', 'Prescribed burning in protected areas such as the Green Swamp Preserve', 'Mass propagation by nurseries and tissue culture supplies the plant trade'],
        bn: ['২০১৪ সাল থেকে নর্থ ক্যারোলাইনায় বুনো ফ্লাইট্র্যাপ তোলা গুরুতর অপরাধ (ফেলোনি)', 'গ্রিন সোয়াম্প প্রিজার্ভের মতো সংরক্ষিত এলাকায় পরিকল্পিত অগ্নিসংযোগ', 'নার্সারি ও টিস্যু কালচারে ব্যাপক উৎপাদন দিয়ে বাজারের চাহিদা মেটানো'],
      },
      assessed: '2000',
    },
    facts: {
      en: [
        'The trap can "count": two touches close it, and about five trigger digestion.',
        'Charles Darwin called it "one of the most wonderful plants in the world".',
        'It is the official carnivorous plant of North Carolina.',
      ],
      bn: [
        'ফাঁদটি যেন "গুনতে" পারে: দুবার স্পর্শে বন্ধ হয়, আর প্রায় পাঁচবার স্পর্শে হজম শুরু হয়।',
        'চার্লস ডারউইন একে "পৃথিবীর সবচেয়ে আশ্চর্য উদ্ভিদগুলোর একটি" বলেছিলেন।',
        'এটি নর্থ ক্যারোলাইনার সরকারি "অঙ্গরাজ্য মাংসাশী উদ্ভিদ"।',
      ],
    },
    related: ['rafflesia', 'sacred-lotus', 'seven-spot-ladybird'],
  },
];
