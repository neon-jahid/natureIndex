import type { Species } from '@/types';

export const insectsLepidoptera1: Species[] = [
  {
    id: 'common-mormon',
    commonName: { en: 'Common Mormon', bn: 'কমন মরমন' },
    scientificName: 'Papilio polytes',
    altNames: {
      en: ['Mormon Swallowtail', 'Black Swallowtail'],
      bn: ['মরমন প্রজাপতি', 'কালো সোয়ালোটেইল'],
    },
    category: 'insects',
    wikiTitle: 'Papilio polytes',
    description: {
      en: 'The common Mormon is a black swallowtail butterfly found across South and Southeast Asia, and one of the most familiar butterflies in Bangladeshi gardens. It is famous for female mimicry: some females copy the poisonous common rose and crimson rose, while others look like the plain black male. Its caterpillars feed on citrus leaves, so it is often seen around lemon and orange trees.',
      bn: 'কমন মরমন দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার একটি কালো সোয়ালোটেইল প্রজাপতি এবং বাংলাদেশের বাগানে সবচেয়ে পরিচিত প্রজাপতিগুলোর একটি। এর স্ত্রী প্রজাপতিরা নকল বা অনুকরণের জন্য বিখ্যাত — কেউ বিষাক্ত কমন রোজ প্রজাপতির মতো দেখতে, আবার কেউ পুরুষের মতোই সাদামাটা কালো। এর শুঁয়োপোকা লেবুজাতীয় গাছের পাতা খায়, তাই লেবু ও কমলাগাছের আশপাশে একে প্রায়ই দেখা যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Papilionidae',
      genus: 'Papilio',
      species: 'P. polytes',
    },
    physical: {
      size: { en: 'Wingspan about 9–10 cm', bn: 'ডানার বিস্তার প্রায় ৯–১০ সেমি' },
      weight: { en: 'Well under 1 g', bn: '১ গ্রামের অনেক কম' },
      lifespan: {
        en: 'Adults live about 2–4 weeks; full life cycle about 1–1.5 months',
        bn: 'পূর্ণবয়স্ক প্রজাপতি প্রায় ২–৪ সপ্তাহ বাঁচে; পুরো জীবনচক্র প্রায় দেড় মাস',
      },
      features: {
        en: [
          'Male black with a band of white spots across the hindwings',
          'Females come in several forms, some mimicking the red-bodied common rose',
          'Young caterpillars look like bird droppings; older ones are green',
        ],
        bn: [
          'পুরুষ প্রজাপতি কালো, পেছনের ডানায় সাদা ছোপের একটি সারি',
          'স্ত্রী প্রজাপতির কয়েকটি রূপ আছে, কিছু লাল দেহের কমন রোজের অনুকরণ করে',
          'ছোট শুঁয়োপোকা দেখতে পাখির বিষ্ঠার মতো; বড় হলে সবুজ হয়',
        ],
      },
    },
    habitat: {
      en: 'Gardens, citrus orchards, village groves and forest edges',
      bn: 'বাগান, লেবুজাতীয় ফলের বাগান, গ্রামের ঝোপঝাড় ও বনের প্রান্ত',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'From Pakistan, India and Bangladesh through Southeast Asia to southern China and Japan.',
      bn: 'পাকিস্তান, ভারত ও বাংলাদেশ থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে দক্ষিণ চীন ও জাপান পর্যন্ত।',
    },
    climate: { en: 'Warm tropical and subtropical climates', bn: 'উষ্ণ ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Caterpillars eat citrus and curry-leaf plants; adults sip nectar from flowers such as lantana and ixora',
      bn: 'শুঁয়োপোকা লেবুজাতীয় গাছ ও কারিপাতা খায়; পূর্ণবয়স্ক প্রজাপতি ল্যান্টানা, রঙ্গন ইত্যাদি ফুলের মধু পান করে',
    },
    ecologicalRole: {
      en: 'Pollinates garden flowers and is food for birds, lizards and spiders; a minor pest in citrus nurseries.',
      bn: 'বাগানের ফুলের পরাগায়ন করে এবং পাখি, টিকটিকি ও মাকড়সার খাদ্য; লেবুর চারার নার্সারিতে সামান্য ক্ষতিকর।',
    },
    behavior: {
      en: 'Flies fast and low through gardens, visiting flowers with constantly fluttering wings; breeds all year in warm areas.',
      bn: 'বাগানের ভেতর দিয়ে দ্রুত ও নিচু হয়ে ওড়ে, ডানা ঝাপটাতে ঝাপটাতে ফুলে বসে; উষ্ণ অঞ্চলে সারা বছর বংশবৃদ্ধি করে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.6, 88.4],
        [12.97, 77.6],
        [13.75, 100.5],
        [23.1, 113.3],
        [26.2, 127.7],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Pesticide use in gardens and orchards', 'Loss of green spaces in cities'],
        bn: ['বাগান ও ফলবাগানে কীটনাশকের ব্যবহার', 'শহরে সবুজ জায়গা কমে যাওয়া'],
      },
      initiatives: {
        en: ['Butterfly gardens and parks', 'Citizen-science butterfly counts'],
        bn: ['প্রজাপতি বাগান ও পার্ক তৈরি', 'নাগরিক-বিজ্ঞানভিত্তিক প্রজাপতি গণনা'],
      },
    },
    facts: {
      en: [
        'A single gene region, doublesex, controls whether a female mimics the poisonous common rose.',
        'Planting a lemon tree is often enough to attract this butterfly to a balcony garden.',
      ],
      bn: [
        'স্ত্রী প্রজাপতি বিষাক্ত কমন রোজের অনুকরণ করবে কি না, তা নিয়ন্ত্রণ করে "ডাবলসেক্স" নামের একটি জিন অঞ্চল।',
        'বারান্দার বাগানে একটি লেবুগাছ লাগালেই অনেক সময় এই প্রজাপতি আসতে শুরু করে।',
      ],
    },
    related: ['common-rose', 'lime-butterfly', 'tailed-jay'],
  },
  {
    id: 'lime-butterfly',
    commonName: { en: 'Lime Butterfly', bn: 'লেবু প্রজাপতি' },
    scientificName: 'Papilio demoleus',
    altNames: {
      en: ['Lemon Butterfly', 'Chequered Swallowtail', 'Common Lime'],
      bn: ['লেবুর প্রজাপতি', 'চেকার্ড সোয়ালোটেইল', 'কমন লাইম'],
    },
    category: 'insects',
    wikiTitle: 'Papilio demoleus',
    description: {
      en: 'The lime butterfly is a tailless swallowtail with a chequered pattern of pale yellow spots on black wings. It is one of the most widespread swallowtails in the world and is common in Bangladesh wherever citrus grows. Its caterpillars can strip young lemon and orange plants, making it a known pest of citrus nurseries.',
      bn: 'লেবু প্রজাপতি একটি লেজহীন সোয়ালোটেইল, যার কালো ডানায় হালকা হলুদ ছোপ দাবার ছকের মতো সাজানো। এটি পৃথিবীর সবচেয়ে বিস্তৃত সোয়ালোটেইলগুলোর একটি এবং বাংলাদেশে যেখানেই লেবুজাতীয় গাছ আছে, সেখানেই একে দেখা যায়। এর শুঁয়োপোকা ছোট লেবু ও কমলার চারার পাতা সাবাড় করে ফেলতে পারে, তাই লেবুর নার্সারিতে এটি পরিচিত ক্ষতিকর পোকা।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Papilionidae',
      genus: 'Papilio',
      species: 'P. demoleus',
    },
    physical: {
      size: { en: 'Wingspan about 8–10 cm', bn: 'ডানার বিস্তার প্রায় ৮–১০ সেমি' },
      weight: { en: 'Well under 1 g', bn: '১ গ্রামের অনেক কম' },
      lifespan: {
        en: 'Adults live about 2–3 weeks; several generations a year',
        bn: 'পূর্ণবয়স্ক প্রজাপতি প্রায় ২–৩ সপ্তাহ বাঁচে; বছরে কয়েকটি প্রজন্ম হয়',
      },
      features: {
        en: [
          'No tail on the hindwings, unlike most swallowtails',
          'Black wings densely chequered with pale yellow spots',
          'Red and blue eyespots near the inner edge of the hindwing',
        ],
        bn: [
          'বেশির ভাগ সোয়ালোটেইলের মতো পেছনের ডানায় লেজ নেই',
          'কালো ডানায় ঘন হালকা হলুদ ছোপ',
          'পেছনের ডানার ভেতরের কিনারে লাল ও নীল চোখের মতো দাগ',
        ],
      },
    },
    habitat: {
      en: 'Gardens, citrus orchards, farmland and open dry scrub',
      bn: 'বাগান, লেবুজাতীয় ফলের বাগান, কৃষিজমি ও খোলা শুষ্ক ঝোপঝাড়',
    },
    habitats: ['urban-farmland', 'grassland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'oceania'],
    distribution: {
      en: 'From the Middle East and South Asia through Southeast Asia to southern China and Australia; introduced to the Caribbean.',
      bn: 'মধ্যপ্রাচ্য ও দক্ষিণ এশিয়া থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে দক্ষিণ চীন ও অস্ট্রেলিয়া পর্যন্ত; ক্যারিবীয় অঞ্চলে এটি প্রবেশ করানো হয়েছে।',
    },
    climate: { en: 'Tropical, subtropical and semi-arid climates', bn: 'ক্রান্তীয়, উপক্রান্তীয় ও আধা-শুষ্ক জলবায়ু' },
    diet: {
      en: 'Caterpillars eat citrus leaves (and native legumes in Australia); adults drink flower nectar',
      bn: 'শুঁয়োপোকা লেবুজাতীয় গাছের পাতা খায় (অস্ট্রেলিয়ায় স্থানীয় শিমজাতীয় গাছও); পূর্ণবয়স্ক প্রজাপতি ফুলের মধু পান করে',
    },
    ecologicalRole: {
      en: 'A pollinator of garden flowers and prey for birds, but also an agricultural pest of citrus seedlings.',
      bn: 'বাগানের ফুলের পরাগায়নকারী ও পাখির খাদ্য, আবার লেবুর চারার একটি কৃষি-ক্ষতিকর পোকাও।',
    },
    behavior: {
      en: 'A strong, fast flier that can disperse long distances; males often gather at damp mud to drink minerals.',
      bn: 'শক্তিশালী ও দ্রুতগামী উড়ুক্কু, অনেক দূর পর্যন্ত ছড়িয়ে পড়তে পারে; পুরুষেরা প্রায়ই ভেজা কাদায় বসে খনিজ লবণ শুষে নেয়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [28.6, 77.2],
        [24.9, 67.0],
        [13.75, 100.5],
        [-6.2, 106.8],
        [-27.5, 153.0],
      ],
      introduced: [
        [18.5, -69.9],
        [18.2, -66.5],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; heavy pesticide spraying reduces local numbers'],
        bn: ['হুমকির মুখে নেই; অতিরিক্ত কীটনাশক ছিটানোয় স্থানীয়ভাবে সংখ্যা কমে'],
      },
      initiatives: {
        en: ['Integrated pest management in citrus orchards', 'Butterfly monitoring by naturalist groups'],
        bn: ['লেবুবাগানে সমন্বিত বালাই ব্যবস্থাপনা', 'প্রকৃতিপ্রেমী সংগঠনের প্রজাপতি পর্যবেক্ষণ'],
      },
    },
    facts: {
      en: [
        'It reached the Dominican Republic around 2004, likely carried by people.',
        'Its young caterpillars disguise themselves as bird droppings.',
      ],
      bn: [
        'আনুমানিক ২০০৪ সালের দিকে এটি ডোমিনিকান প্রজাতন্ত্রে পৌঁছায়, সম্ভবত মানুষের মাধ্যমে।',
        'এর ছোট শুঁয়োপোকা পাখির বিষ্ঠার ছদ্মবেশ ধরে আত্মরক্ষা করে।',
      ],
    },
    related: ['common-mormon', 'common-rose', 'tailed-jay'],
  },
  {
    id: 'blue-tiger',
    commonName: { en: 'Blue Tiger', bn: 'নীল বাঘা প্রজাপতি' },
    scientificName: 'Tirumala limniace',
    altNames: {
      en: ['Blue Tiger Butterfly'],
      bn: ['ব্লু টাইগার'],
    },
    category: 'insects',
    wikiTitle: 'Tirumala limniace',
    description: {
      en: 'The blue tiger is a milkweed butterfly with black wings marked by pale bluish, semi-transparent streaks and spots. Like its relative the monarch, it is distasteful to predators because its caterpillars feed on toxic milkweed vines. In South India it makes large seasonal migrations, and it is common in Bangladeshi forests and villages.',
      bn: 'নীল বাঘা প্রজাপতি মিল্কউইড গোত্রের একটি প্রজাপতি, যার কালো ডানায় হালকা নীলচে, আধা-স্বচ্ছ রেখা ও ছোপ থাকে। এর আত্মীয় মোনার্ক প্রজাপতির মতো এটিও শিকারির কাছে বিস্বাদ, কারণ এর শুঁয়োপোকা বিষাক্ত লতা খেয়ে বড় হয়। দক্ষিণ ভারতে এরা দল বেঁধে মৌসুমি পরিযান করে; বাংলাদেশের বন ও গ্রামে এটি বেশ সাধারণ।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Nymphalidae',
      genus: 'Tirumala',
      species: 'T. limniace',
    },
    physical: {
      size: { en: 'Wingspan about 9–10 cm', bn: 'ডানার বিস্তার প্রায় ৯–১০ সেমি' },
      weight: { en: 'Well under 1 g', bn: '১ গ্রামের অনেক কম' },
      lifespan: { en: 'Adults live several weeks', bn: 'পূর্ণবয়স্ক প্রজাপতি কয়েক সপ্তাহ বাঁচে' },
      features: {
        en: [
          'Black wings with pale blue, glassy streaks and spots',
          'Slow, gliding flight that advertises its bad taste',
          'Males have scent pouches on the hindwings',
        ],
        bn: [
          'কালো ডানায় হালকা নীল, কাচের মতো রেখা ও ছোপ',
          'ধীরে ভেসে ভেসে ওড়ে, যা শিকারিকে এর বিস্বাদের কথা জানান দেয়',
          'পুরুষের পেছনের ডানায় গন্ধ-থলি থাকে',
        ],
      },
    },
    habitat: {
      en: 'Forest edges, scrub, gardens and open country',
      bn: 'বনের প্রান্ত, ঝোপঝাড়, বাগান ও খোলা প্রান্তর',
    },
    habitats: ['tropical-forest', 'urban-farmland', 'grassland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'India, Sri Lanka, Bangladesh, Nepal and Myanmar through Southeast Asia to southern China.',
      bn: 'ভারত, শ্রীলঙ্কা, বাংলাদেশ, নেপাল ও মিয়ানমার থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে দক্ষিণ চীন পর্যন্ত।',
    },
    climate: { en: 'Tropical monsoon climates', bn: 'ক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Caterpillars feed on milkweed-family vines such as Wattakaka; adults sip nectar and plant juices',
      bn: 'শুঁয়োপোকা দুধিয়া-গোত্রের লতা খায়; পূর্ণবয়স্ক প্রজাপতি ফুলের মধু ও গাছের রস পান করে',
    },
    ecologicalRole: {
      en: 'Pollinates many wild flowers and is a model for mimicry by other butterflies.',
      bn: 'অনেক বুনো ফুলের পরাগায়ন করে এবং অন্য প্রজাপতিরা একে নকল করে আত্মরক্ষা করে।',
    },
    behavior: {
      en: 'Males visit dried Heliotropium and Crotalaria plants to collect alkaloids used in courtship; gathers in large numbers on migration.',
      bn: 'পুরুষেরা শুকনো হাতিশুঁড় ও ঝুনঝুনি গাছ থেকে অ্যালকালয়েড সংগ্রহ করে, যা প্রণয়ে কাজে লাগে; পরিযানের সময় বিপুল সংখ্যায় একত্র হয়।',
    },
    range: {
      native: [
        [24.3, 91.7],
        [22.4, 91.8],
        [11.0, 76.9],
        [7.3, 80.6],
        [16.8, 96.2],
        [18.8, 98.98],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Loss of forest edges and host vines', 'Pesticide use'],
        bn: ['বনের প্রান্ত ও খাদ্য-লতা ধ্বংস', 'কীটনাশকের ব্যবহার'],
      },
      initiatives: {
        en: ['Migration counts in the Western Ghats', 'Butterfly surveys in Bangladeshi protected areas'],
        bn: ['পশ্চিমঘাটে পরিযায়ী প্রজাপতি গণনা', 'বাংলাদেশের সংরক্ষিত বনে প্রজাপতি জরিপ'],
      },
    },
    facts: {
      en: [
        'Hundreds of thousands of blue tigers can migrate together in southern India.',
        'Birds that eat one usually learn to avoid it afterwards.',
      ],
      bn: [
        'দক্ষিণ ভারতে লাখো নীল বাঘা প্রজাপতি একসঙ্গে পরিযান করতে পারে।',
        'যে পাখি একবার একে খায়, সাধারণত পরে আর এর দিকে যায় না।',
      ],
    },
    related: ['plain-tiger', 'common-crow', 'monarch-butterfly'],
  },
  {
    id: 'plain-tiger',
    commonName: { en: 'Plain Tiger', bn: 'প্লেইন টাইগার' },
    scientificName: 'Danaus chrysippus',
    altNames: {
      en: ['African Monarch', 'African Queen', 'Lesser Wanderer'],
      bn: ['বাঘা প্রজাপতি', 'আফ্রিকান মোনার্ক', 'কমলা বাঘা প্রজাপতি'],
    },
    category: 'insects',
    wikiTitle: 'Danaus chrysippus',
    description: {
      en: 'The plain tiger is a medium-sized orange butterfly with black-and-white wingtips, closely related to the monarch. It is one of the most widespread butterflies on Earth, found across Africa, Asia and Australia, and is common in Bangladeshi fields and roadsides. Toxins absorbed from milkweeds make it poisonous, and several other butterflies mimic it.',
      bn: 'প্লেইন টাইগার মাঝারি আকারের কমলা রঙের প্রজাপতি, যার ডানার আগায় কালো-সাদা দাগ থাকে; এটি মোনার্ক প্রজাপতির নিকট আত্মীয়। আফ্রিকা, এশিয়া ও অস্ট্রেলিয়াজুড়ে বিস্তৃত এই প্রজাপতি পৃথিবীর সবচেয়ে ছড়ানো প্রজাপতিগুলোর একটি, বাংলাদেশের মাঠ ও রাস্তার ধারেও এটি সাধারণ। আকন্দ জাতীয় গাছ থেকে শোষিত বিষের কারণে এটি বিষাক্ত, তাই অন্য কয়েকটি প্রজাপতি একে নকল করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Nymphalidae',
      genus: 'Danaus',
      species: 'D. chrysippus',
    },
    physical: {
      size: { en: 'Wingspan about 7–8 cm', bn: 'ডানার বিস্তার প্রায় ৭–৮ সেমি' },
      weight: { en: 'Well under 1 g', bn: '১ গ্রামের অনেক কম' },
      lifespan: { en: 'Adults live about 2–4 weeks', bn: 'পূর্ণবয়স্ক প্রজাপতি প্রায় ২–৪ সপ্তাহ বাঁচে' },
      features: {
        en: [
          'Tawny orange wings with a black forewing tip crossed by a white band',
          'Black body speckled with white dots',
          'Caterpillar banded black, white and yellow with three pairs of fleshy filaments',
        ],
        bn: [
          'বাদামি-কমলা ডানা; সামনের ডানার কালো আগায় সাদা ফিতার মতো দাগ',
          'কালো দেহে সাদা ফোঁটা',
          'শুঁয়োপোকা কালো, সাদা ও হলুদ ডোরাকাটা, গায়ে তিন জোড়া মাংসল শুঁড়',
        ],
      },
    },
    habitat: {
      en: 'Open fields, roadsides, gardens and dry scrub',
      bn: 'খোলা মাঠ, রাস্তার ধার, বাগান ও শুষ্ক ঝোপঝাড়',
    },
    habitats: ['grassland', 'urban-farmland', 'desert'],
    regions: ['south-asia', 'southeast-asia', 'africa', 'oceania', 'europe'],
    distribution: {
      en: 'Throughout Africa, southern Europe, the Middle East, South and Southeast Asia and Australia.',
      bn: 'আফ্রিকা, দক্ষিণ ইউরোপ, মধ্যপ্রাচ্য, দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়া এবং অস্ট্রেলিয়াজুড়ে।',
    },
    climate: { en: 'Tropical, subtropical and arid climates', bn: 'ক্রান্তীয়, উপক্রান্তীয় ও শুষ্ক জলবায়ু' },
    diet: {
      en: 'Caterpillars feed on milkweeds such as akanda (Calotropis); adults drink nectar',
      bn: 'শুঁয়োপোকা আকন্দ (Calotropis) জাতীয় গাছ খায়; পূর্ণবয়স্ক প্রজাপতি ফুলের মধু পান করে',
    },
    ecologicalRole: {
      en: 'Pollinator of wild flowers and the toxic model for several mimic butterflies, including female danaid eggflies.',
      bn: 'বুনো ফুলের পরাগায়নকারী এবং কয়েকটি অনুকরণকারী প্রজাপতির "মডেল", যেমন ডেনাইড এগফ্লাইয়ের স্ত্রী প্রজাপতি।',
    },
    behavior: {
      en: 'Flies slowly and openly, relying on its toxicity; breeds year-round in warm places.',
      bn: 'বিষাক্ত হওয়ায় নিশ্চিন্তে ধীরগতিতে খোলামেলা ওড়ে; উষ্ণ অঞ্চলে সারা বছর বংশবৃদ্ধি করে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [28.6, 77.2],
        [-1.3, 36.8],
        [30.0, 31.2],
        [13.75, 100.5],
        [-12.5, 130.8],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Not globally threatened; local pesticide use'],
        bn: ['বিশ্বব্যাপী হুমকির মুখে নেই; স্থানীয়ভাবে কীটনাশকের ব্যবহার'],
      },
      initiatives: {
        en: ['Leaving akanda and other wild milkweeds on roadsides', 'Butterfly monitoring schemes'],
        bn: ['রাস্তার ধারে আকন্দ ও অন্যান্য বুনো গাছ রেখে দেওয়া', 'প্রজাপতি পর্যবেক্ষণ কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'It is thought to be one of the first butterflies ever depicted in art — on an ancient Egyptian tomb fresco.',
        'Its toxins come from the plants its caterpillars eat.',
      ],
      bn: [
        'ধারণা করা হয়, প্রাচীন মিসরের একটি সমাধির দেয়ালচিত্রে আঁকা এটিই শিল্পকর্মে চিত্রিত প্রথম প্রজাপতিগুলোর একটি।',
        'এর শরীরের বিষ আসে শুঁয়োপোকা অবস্থায় খাওয়া গাছ থেকে।',
      ],
    },
    related: ['monarch-butterfly', 'blue-tiger', 'common-crow', 'great-eggfly'],
  },
  {
    id: 'common-jezebel',
    commonName: { en: 'Common Jezebel', bn: 'কমন জেজেবেল' },
    scientificName: 'Delias eucharis',
    altNames: {
      en: ['Jezebel Butterfly'],
      bn: ['জেজেবেল প্রজাপতি'],
    },
    category: 'insects',
    wikiTitle: 'Delias eucharis',
    description: {
      en: 'The common Jezebel is a white butterfly whose underside hindwings are painted bright yellow with a border of red spots edged in black. These vivid colours warn birds that it is distasteful, as its caterpillars feed on parasitic mistletoes. It is a common sight in Bangladeshi villages, especially around mango and other trees carrying mistletoe.',
      bn: 'কমন জেজেবেল একটি সাদা প্রজাপতি, যার পেছনের ডানার নিচের পিঠ উজ্জ্বল হলুদ, আর কিনারায় কালো দিয়ে ঘেরা লাল ছোপের সারি। এই চোখধাঁধানো রং পাখিকে সতর্ক করে যে প্রজাপতিটি বিস্বাদ, কারণ এর শুঁয়োপোকা পরজীবী পরগাছা খায়। বাংলাদেশের গ্রামে, বিশেষ করে পরগাছা-ভরা আমগাছ ও অন্যান্য গাছের আশপাশে, একে প্রায়ই দেখা যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Pieridae',
      genus: 'Delias',
      species: 'D. eucharis',
    },
    physical: {
      size: { en: 'Wingspan about 6.5–8.5 cm', bn: 'ডানার বিস্তার প্রায় ৬.৫–৮.৫ সেমি' },
      weight: { en: 'Well under 1 g', bn: '১ গ্রামের অনেক কম' },
      lifespan: { en: 'Adults live a few weeks', bn: 'পূর্ণবয়স্ক প্রজাপতি কয়েক সপ্তাহ বাঁচে' },
      features: {
        en: [
          'Upperside white with dark veins',
          'Underside hindwing bright yellow with a row of red, black-edged spots',
        ],
        bn: [
          'ডানার ওপরের পিঠ সাদা, শিরাগুলো কালচে',
          'পেছনের ডানার নিচের পিঠ উজ্জ্বল হলুদ, তাতে কালো কিনারাযুক্ত লাল ছোপের সারি',
        ],
      },
    },
    habitat: {
      en: 'Gardens, village groves, orchards and open woodland',
      bn: 'বাগান, গ্রামের গাছপালা, ফলবাগান ও পাতলা বনভূমি',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'India, Sri Lanka, Bangladesh, Nepal and Myanmar into Thailand.',
      bn: 'ভারত, শ্রীলঙ্কা, বাংলাদেশ, নেপাল ও মিয়ানমার থেকে থাইল্যান্ড পর্যন্ত।',
    },
    climate: { en: 'Tropical and subtropical climates', bn: 'ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Caterpillars eat mistletoes (Dendrophthoe, Loranthus); adults take nectar from tree blossoms',
      bn: 'শুঁয়োপোকা পরগাছা (Dendrophthoe, Loranthus) খায়; পূর্ণবয়স্ক প্রজাপতি গাছের ফুলের মধু পান করে',
    },
    ecologicalRole: {
      en: 'Helps keep mistletoe in check and pollinates flowering trees.',
      bn: 'পরগাছার বিস্তার কিছুটা নিয়ন্ত্রণে রাখে এবং ফুলেল গাছের পরাগায়ন করে।',
    },
    behavior: {
      en: 'Flies slowly high among treetops; caterpillars feed together in groups.',
      bn: 'গাছের মগডালের আশপাশে ধীরে ধীরে ওড়ে; শুঁয়োপোকারা দল বেঁধে খায়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [24.4, 88.6],
        [19.1, 72.9],
        [7.3, 80.6],
        [27.7, 85.3],
        [16.8, 96.2],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Removal of mistletoe-bearing trees', 'Pesticide use'],
        bn: ['পরগাছাযুক্ত গাছ কেটে ফেলা', 'কীটনাশকের ব্যবহার'],
      },
      initiatives: {
        en: ['Village tree conservation', 'Butterfly education in schools'],
        bn: ['গ্রামের গাছপালা সংরক্ষণ', 'স্কুলে প্রজাপতি বিষয়ক শিক্ষা'],
      },
    },
    facts: {
      en: [
        'The bright underside is a warning signal, not decoration.',
        'Its caterpillars depend on mistletoe, a plant many farmers consider a pest.',
      ],
      bn: [
        'নিচের পিঠের উজ্জ্বল রং আসলে সতর্কসংকেত, সাজসজ্জা নয়।',
        'এর শুঁয়োপোকা পরগাছার ওপর নির্ভরশীল, যাকে অনেক কৃষক ক্ষতিকর মনে করেন।',
      ],
    },
    related: ['common-rose', 'plain-tiger'],
  },
  {
    id: 'common-rose',
    commonName: { en: 'Common Rose', bn: 'কমন রোজ' },
    scientificName: 'Pachliopta aristolochiae',
    altNames: {
      en: ['Common Rose Swallowtail'],
      bn: ['গোলাপি সোয়ালোটেইল'],
    },
    category: 'insects',
    wikiTitle: 'Pachliopta aristolochiae',
    description: {
      en: 'The common rose is a black swallowtail with a bright red body and white and red patches on its hindwings. Its caterpillars feed on Aristolochia vines (ishwarmul), storing toxins that make the butterfly poisonous to birds. The female common Mormon mimics it to gain protection.',
      bn: 'কমন রোজ একটি কালো সোয়ালোটেইল প্রজাপতি; এর দেহ উজ্জ্বল লাল এবং পেছনের ডানায় সাদা ও লাল ছোপ থাকে। এর শুঁয়োপোকা ঈশ্বরমূল (Aristolochia) লতা খেয়ে বিষ জমা করে, ফলে প্রজাপতিটি পাখির কাছে বিষাক্ত। কমন মরমনের স্ত্রী প্রজাপতি সুরক্ষার জন্য একে নকল করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Papilionidae',
      genus: 'Pachliopta',
      species: 'P. aristolochiae',
    },
    physical: {
      size: { en: 'Wingspan about 8–11 cm', bn: 'ডানার বিস্তার প্রায় ৮–১১ সেমি' },
      weight: { en: 'Well under 1 g', bn: '১ গ্রামের অনেক কম' },
      lifespan: { en: 'Adults live a few weeks', bn: 'পূর্ণবয়স্ক প্রজাপতি কয়েক সপ্তাহ বাঁচে' },
      features: {
        en: [
          'Crimson red head and abdomen',
          'Black hindwings with white patches, red crescents and long tails',
          'Caterpillar dark maroon with fleshy red-tipped spines',
        ],
        bn: [
          'মাথা ও পেট টকটকে লাল',
          'কালো পেছনের ডানায় সাদা ছোপ, লাল অর্ধচন্দ্রাকার দাগ ও লম্বা লেজ',
          'শুঁয়োপোকা গাঢ় খয়েরি, গায়ে লাল আগাওয়ালা মাংসল কাঁটা',
        ],
      },
    },
    habitat: {
      en: 'Gardens, scrub, forest edges and open country',
      bn: 'বাগান, ঝোপঝাড়, বনের প্রান্ত ও খোলা প্রান্তর',
    },
    habitats: ['urban-farmland', 'tropical-forest', 'grassland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'From Pakistan, India and Bangladesh across Southeast Asia to southern China and Indonesia.',
      bn: 'পাকিস্তান, ভারত ও বাংলাদেশ থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে দক্ষিণ চীন ও ইন্দোনেশিয়া পর্যন্ত।',
    },
    climate: { en: 'Tropical and subtropical climates', bn: 'ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Caterpillars eat Aristolochia vines; adults drink nectar from lantana, jatropha and other flowers',
      bn: 'শুঁয়োপোকা ঈশ্বরমূল লতা খায়; পূর্ণবয়স্ক প্রজাপতি ল্যান্টানা, ভেরেন্ডা ইত্যাদি ফুলের মধু পান করে',
    },
    ecologicalRole: {
      en: 'A pollinator and the toxic model for the mimetic female common Mormon.',
      bn: 'পরাগায়নকারী এবং অনুকরণকারী কমন মরমন স্ত্রী প্রজাপতির বিষাক্ত "মডেল"।',
    },
    behavior: {
      en: 'Flies slowly and lazily, often near the ground; roosts communally at night.',
      bn: 'অলসভাবে ধীরে ওড়ে, প্রায়ই মাটির কাছাকাছি; রাতে অনেকে মিলে একসঙ্গে বিশ্রাম নেয়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.4, 91.8],
        [18.5, 73.9],
        [13.75, 100.5],
        [22.3, 114.2],
        [-7.8, 110.4],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Clearing of Aristolochia host vines', 'Pesticide use'],
        bn: ['ঈশ্বরমূল লতা কেটে ফেলা', 'কীটনাশকের ব্যবহার'],
      },
      initiatives: {
        en: ['Planting Aristolochia in butterfly gardens', 'Butterfly surveys'],
        bn: ['প্রজাপতি বাগানে ঈশ্বরমূল লাগানো', 'প্রজাপতি জরিপ'],
      },
    },
    facts: {
      en: [
        'Its red body is a warning colour for predators.',
        'Aristolochia (ishwarmul) is used in folk medicine but contains toxic aristolochic acids — the same plant makes this butterfly poisonous.',
      ],
      bn: [
        'এর লাল দেহ শিকারিদের জন্য একটি সতর্কসংকেত।',
        'ঈশ্বরমূল লোকচিকিৎসায় ব্যবহৃত হলেও এতে বিষাক্ত অ্যারিস্টোলোকিক অ্যাসিড থাকে — এই গাছই প্রজাপতিটিকে বিষাক্ত করে তোলে।',
      ],
    },
    related: ['common-mormon', 'lime-butterfly', 'queen-alexandras-birdwing'],
  },
  {
    id: 'blue-pansy',
    commonName: { en: 'Blue Pansy', bn: 'নীল প্যানসি' },
    scientificName: 'Junonia orithya',
    altNames: {
      en: ['Eyed Pansy', 'Blue Argus'],
      bn: ['ব্লু প্যানসি', 'চোখওয়ালা প্যানসি'],
    },
    category: 'insects',
    wikiTitle: 'Junonia orithya',
    description: {
      en: 'The blue pansy is a small, fast butterfly whose males flash a brilliant blue on the hindwings, each set with orange-ringed eyespots. It loves sunny, open ground such as fallow fields, lawns and dry riverbanks. It is widespread from Africa through South Asia to Australia and is common in Bangladesh, particularly in the dry season.',
      bn: 'নীল প্যানসি একটি ছোট ও দ্রুতগামী প্রজাপতি; পুরুষের পেছনের ডানায় ঝলমলে নীল রং আর কমলা বলয়ঘেরা চোখের মতো দাগ থাকে। রোদেলা খোলা জায়গা — পতিত জমি, ঘাসের লন ও শুকনো নদীর চর — এর প্রিয়। আফ্রিকা থেকে দক্ষিণ এশিয়া হয়ে অস্ট্রেলিয়া পর্যন্ত বিস্তৃত এই প্রজাপতি বাংলাদেশেও সাধারণ, বিশেষ করে শুষ্ক মৌসুমে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Nymphalidae',
      genus: 'Junonia',
      species: 'J. orithya',
    },
    physical: {
      size: { en: 'Wingspan about 4–6 cm', bn: 'ডানার বিস্তার প্রায় ৪–৬ সেমি' },
      weight: { en: 'A fraction of a gram', bn: 'এক গ্রামের ভগ্নাংশ মাত্র' },
      lifespan: { en: 'Adults live about 2–3 weeks', bn: 'পূর্ণবয়স্ক প্রজাপতি প্রায় ২–৩ সপ্তাহ বাঁচে' },
      features: {
        en: [
          'Male hindwings bright blue; females browner with less blue',
          'Black forewings with white bars and orange eyespots',
        ],
        bn: [
          'পুরুষের পেছনের ডানা উজ্জ্বল নীল; স্ত্রীর ডানা বেশি বাদামি, নীল কম',
          'কালো সামনের ডানায় সাদা দাগ ও কমলা চোখের মতো ছোপ',
        ],
      },
    },
    habitat: {
      en: 'Open grassland, fallow fields, lawns and dry riverbeds',
      bn: 'খোলা তৃণভূমি, পতিত জমি, ঘাসের লন ও শুকনো নদীখাত',
    },
    habitats: ['grassland', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'africa', 'oceania'],
    distribution: {
      en: 'Africa, Arabia, South and Southeast Asia, and Australia.',
      bn: 'আফ্রিকা, আরব উপদ্বীপ, দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়া এবং অস্ট্রেলিয়া।',
    },
    climate: { en: 'Warm, sunny tropical and subtropical climates', bn: 'উষ্ণ, রোদেলা ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Caterpillars eat low herbs such as Acanthaceae and Plantaginaceae; adults sip nectar',
      bn: 'শুঁয়োপোকা বাসক-গোত্রসহ মাটির কাছের নানা লতাগুল্ম খায়; পূর্ণবয়স্ক প্রজাপতি ফুলের মধু পান করে',
    },
    ecologicalRole: {
      en: 'Pollinates small wild flowers of open ground and feeds birds and lizards.',
      bn: 'খোলা জমির ছোট বুনো ফুলের পরাগায়ন করে এবং পাখি ও টিকটিকির খাদ্য।',
    },
    behavior: {
      en: 'Basks with wings open on bare ground; males are territorial and chase intruders.',
      bn: 'খালি মাটিতে ডানা মেলে রোদ পোহায়; পুরুষেরা এলাকা পাহারা দেয় এবং অনুপ্রবেশকারীকে তাড়া করে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [25.7, 89.25],
        [21.15, 79.1],
        [-1.3, 36.8],
        [15.9, 101.0],
        [-19.3, 146.8],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; conversion of fallow land and pesticide use'],
        bn: ['হুমকির মুখে নেই; পতিত জমি রূপান্তর ও কীটনাশক ব্যবহার'],
      },
      initiatives: {
        en: ['Wildflower patches in parks', 'Citizen-science butterfly records'],
        bn: ['পার্কে বুনো ফুলের অংশ রেখে দেওয়া', 'নাগরিক-বিজ্ঞানভিত্তিক প্রজাপতি রেকর্ড'],
      },
    },
    facts: {
      en: [
        'The eyespots may divert bird attacks away from the body.',
        'It is often one of the first butterflies seen on newly cleared land.',
      ],
      bn: [
        'চোখের মতো দাগগুলো পাখির আক্রমণ দেহ থেকে সরিয়ে দিতে সাহায্য করে।',
        'নতুন পরিষ্কার করা জমিতে প্রথম যেসব প্রজাপতি আসে, এটি প্রায়ই তাদের একটি।',
      ],
    },
    related: ['great-eggfly', 'painted-lady'],
  },
  {
    id: 'great-eggfly',
    commonName: { en: 'Great Eggfly', bn: 'গ্রেট এগফ্লাই' },
    scientificName: 'Hypolimnas bolina',
    altNames: {
      en: ['Common Eggfly', 'Blue Moon Butterfly'],
      bn: ['বড় এগফ্লাই', 'ব্লু মুন প্রজাপতি'],
    },
    category: 'insects',
    wikiTitle: 'Hypolimnas bolina',
    description: {
      en: 'The great eggfly is a large black butterfly whose males carry three glowing white patches ringed with iridescent purple-blue. Females are highly variable, and some mimic poisonous crow butterflies. It ranges from South Asia across the Pacific islands and is a common garden butterfly in Bangladesh.',
      bn: 'গ্রেট এগফ্লাই একটি বড় কালো প্রজাপতি; পুরুষের ডানায় তিনটি উজ্জ্বল সাদা ছোপ থাকে, যার চারপাশে ঝিকমিকে বেগুনি-নীল আভা। স্ত্রী প্রজাপতিদের রূপ নানা রকম, কিছু বিষাক্ত ক্রো প্রজাপতির অনুকরণ করে। দক্ষিণ এশিয়া থেকে প্রশান্ত মহাসাগরের দ্বীপপুঞ্জ পর্যন্ত বিস্তৃত এই প্রজাপতি বাংলাদেশের বাগানেও সাধারণ।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Nymphalidae',
      genus: 'Hypolimnas',
      species: 'H. bolina',
    },
    physical: {
      size: { en: 'Wingspan about 7–11 cm', bn: 'ডানার বিস্তার প্রায় ৭–১১ সেমি' },
      weight: { en: 'Well under 1 g', bn: '১ গ্রামের অনেক কম' },
      lifespan: { en: 'Adults live several weeks', bn: 'পূর্ণবয়স্ক প্রজাপতি কয়েক সপ্তাহ বাঁচে' },
      features: {
        en: [
          'Male velvety black with three white patches edged in purple-blue',
          'Females larger, brown with orange and white markings in many forms',
        ],
        bn: [
          'পুরুষ মখমলের মতো কালো, তিনটি সাদা ছোপের চারপাশে বেগুনি-নীল আভা',
          'স্ত্রী আকারে বড়, বাদামি দেহে কমলা ও সাদা দাগ; রূপ নানা রকম',
        ],
      },
    },
    habitat: {
      en: 'Gardens, forest edges, farmland and coastal scrub',
      bn: 'বাগান, বনের প্রান্ত, কৃষিজমি ও উপকূলীয় ঝোপঝাড়',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'oceania'],
    distribution: {
      en: 'From Madagascar and India through Southeast Asia to Japan, Australia and the Pacific islands.',
      bn: 'মাদাগাস্কার ও ভারত থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে জাপান, অস্ট্রেলিয়া ও প্রশান্ত মহাসাগরীয় দ্বীপপুঞ্জ পর্যন্ত।',
    },
    climate: { en: 'Tropical and subtropical climates', bn: 'ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Caterpillars eat weeds such as Sida and sweet potato leaves; adults take nectar and rotting fruit',
      bn: 'শুঁয়োপোকা বেড়েলা (Sida) ও মিষ্টি আলুর পাতাসহ নানা আগাছা খায়; পূর্ণবয়স্ক প্রজাপতি ফুলের মধু ও পচা ফল খায়',
    },
    ecologicalRole: {
      en: 'Pollinator and prey species; a classic subject in studies of mimicry and of Wolbachia bacteria.',
      bn: 'পরাগায়নকারী ও শিকার-প্রাণী; অনুকরণ এবং ওলবাকিয়া ব্যাকটেরিয়া নিয়ে গবেষণায় একটি বিখ্যাত উদাহরণ।',
    },
    behavior: {
      en: 'Males defend sunny perches and chase rivals; females guard their eggs, which is unusual among butterflies.',
      bn: 'পুরুষেরা রোদেলা বসার জায়গা পাহারা দেয় ও প্রতিদ্বন্দ্বীকে তাড়ায়; স্ত্রী প্রজাপতি ডিম পাহারা দেয়, যা প্রজাপতির মধ্যে বিরল।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.4, 91.8],
        [12.97, 77.6],
        [1.35, 103.8],
        [-16.9, 145.8],
        [-17.7, 178.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; habitat clearance and pesticides locally'],
        bn: ['হুমকির মুখে নেই; স্থানীয়ভাবে আবাস ধ্বংস ও কীটনাশক'],
      },
      initiatives: {
        en: ['Butterfly-friendly gardening', 'Long-term field studies in the Pacific'],
        bn: ['প্রজাপতিবান্ধব বাগান তৈরি', 'প্রশান্ত মহাসাগরীয় দ্বীপে দীর্ঘমেয়াদি গবেষণা'],
      },
    },
    facts: {
      en: [
        'On some Samoan islands a male-killing bacterium once left about 100 females for every male, until the butterflies evolved resistance.',
        'Its common name comes from the egg-shaped white spots on the male.',
      ],
      bn: [
        'সামোয়ার কিছু দ্বীপে পুরুষ-মারা এক ব্যাকটেরিয়ার কারণে একসময় প্রতি পুরুষের বিপরীতে প্রায় ১০০টি স্ত্রী প্রজাপতি ছিল; পরে প্রজাপতিরা প্রতিরোধ ক্ষমতা গড়ে তোলে।',
        'পুরুষের ডানার ডিমাকৃতি সাদা ছোপ থেকেই এর ইংরেজি নাম "এগফ্লাই"।',
      ],
    },
    related: ['blue-pansy', 'common-crow', 'plain-tiger'],
  },
  {
    id: 'tailed-jay',
    commonName: { en: 'Tailed Jay', bn: 'টেইলড জে' },
    scientificName: 'Graphium agamemnon',
    altNames: {
      en: ['Green-spotted Triangle', 'Green Triangle', 'Tailed Green Jay'],
      bn: ['সবুজ ফুটকি প্রজাপতি', 'সবুজ ত্রিভুজ প্রজাপতি', 'লেজওয়ালা সবুজ জে'],
    },
    category: 'insects',
    wikiTitle: 'Graphium agamemnon',
    description: {
      en: 'The tailed jay is a fast-flying swallowtail with black wings covered in apple-green spots and short tails on the hindwings. Its caterpillars feed on trees of the custard-apple and magnolia families, including the mast tree or debdaru (Polyalthia longifolia), which is widely planted along Bangladeshi roads. As a result it is common even in Dhaka city.',
      bn: 'টেইলড জে একটি দ্রুতগামী সোয়ালোটেইল প্রজাপতি; এর কালো ডানায় আপেল-সবুজ ফুটকি আর পেছনের ডানায় ছোট লেজ থাকে। এর শুঁয়োপোকা আতা ও চম্পা গোত্রের গাছ খায়, যার মধ্যে বাংলাদেশের রাস্তার ধারে বহুল লাগানো দেবদারুও (Polyalthia) আছে। সে কারণে ঢাকা শহরেও একে প্রায়ই দেখা যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Papilionidae',
      genus: 'Graphium',
      species: 'G. agamemnon',
    },
    physical: {
      size: { en: 'Wingspan about 8.5–10 cm', bn: 'ডানার বিস্তার প্রায় ৮.৫–১০ সেমি' },
      weight: { en: 'Well under 1 g', bn: '১ গ্রামের অনেক কম' },
      lifespan: { en: 'Adults live a few weeks', bn: 'পূর্ণবয়স্ক প্রজাপতি কয়েক সপ্তাহ বাঁচে' },
      features: {
        en: [
          'Black wings with numerous apple-green spots',
          'Short tail on each hindwing',
          'Constantly quivering wings even while feeding',
        ],
        bn: [
          'কালো ডানায় অসংখ্য আপেল-সবুজ ফুটকি',
          'প্রতিটি পেছনের ডানায় ছোট লেজ',
          'মধু খাওয়ার সময়ও ডানা অনবরত কাঁপতে থাকে',
        ],
      },
    },
    habitat: {
      en: 'Lowland forests, parks, gardens and tree-lined streets',
      bn: 'নিম্নভূমির বন, পার্ক, বাগান ও গাছে ঘেরা রাস্তা',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'oceania'],
    distribution: {
      en: 'India, Sri Lanka and Bangladesh through Southeast Asia to southern China, New Guinea and northern Australia.',
      bn: 'ভারত, শ্রীলঙ্কা ও বাংলাদেশ থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে দক্ষিণ চীন, নিউগিনি ও উত্তর অস্ট্রেলিয়া পর্যন্ত।',
    },
    climate: { en: 'Hot, humid tropical climates', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Caterpillars eat Annonaceae and Magnoliaceae such as debdaru, custard apple and champak; adults take nectar',
      bn: 'শুঁয়োপোকা দেবদারু, আতা, চম্পা প্রভৃতি গাছের পাতা খায়; পূর্ণবয়স্ক প্রজাপতি ফুলের মধু পান করে',
    },
    ecologicalRole: {
      en: 'A pollinator of flowering shrubs and trees in towns and forests.',
      bn: 'শহর ও বনের ফুলেল গুল্ম ও গাছের পরাগায়নকারী।',
    },
    behavior: {
      en: 'Restless and very fast in flight; males gather at wet sand and mud to drink minerals.',
      bn: 'অস্থির স্বভাবের, খুব দ্রুত ওড়ে; পুরুষেরা ভেজা বালু ও কাদায় দল বেঁধে খনিজ পান করে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [24.9, 91.9],
        [12.97, 77.6],
        [3.1, 101.7],
        [-6.2, 147.0],
        [-16.9, 145.8],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Felling of roadside and park trees', 'Pesticide use'],
        bn: ['রাস্তার ধার ও পার্কের গাছ কাটা', 'কীটনাশকের ব্যবহার'],
      },
      initiatives: {
        en: ['Urban tree planting with native host trees', 'Butterfly parks'],
        bn: ['শহরে দেশি খাদ্যগাছ লাগানো', 'প্রজাপতি পার্ক'],
      },
    },
    facts: {
      en: [
        'Its caterpillars thrive on debdaru trees planted along city roads.',
        'It rarely sits still — its wings keep fluttering even on a flower.',
      ],
      bn: [
        'শহরের রাস্তার ধারে লাগানো দেবদারু গাছে এর শুঁয়োপোকা দিব্যি বেড়ে ওঠে।',
        'এটি খুব কমই স্থির হয়ে বসে — ফুলে বসেও ডানা ঝাপটাতে থাকে।',
      ],
    },
    related: ['common-mormon', 'lime-butterfly', 'common-rose'],
  },
];
