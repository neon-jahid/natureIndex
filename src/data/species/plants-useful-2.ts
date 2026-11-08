import type { Species } from '@/types';

export const plantsUseful2: Species[] = [
  {
    id: 'brown-mustard',
    commonName: { en: 'Mustard', bn: 'সরিষা' },
    scientificName: 'Brassica juncea',
    altNames: {
      en: ['Brown Mustard', 'Indian Mustard', 'Mustard Greens'],
      bn: ['সর্ষে', 'রাই সরিষা', 'সরিষা শাক'],
    },
    category: 'plants',
    wikiTitle: 'Brassica juncea',
    description: {
      en: 'Brown or Indian mustard is an annual of the cabbage family, grown for its oil-rich seeds and peppery leaves. In winter, mustard fields turn large parts of rural Bangladesh a brilliant yellow, and mustard oil is the traditional cooking oil of Bengali kitchens, essential for dishes such as shorshe ilish. Bangladesh grows both this species (rai) and field mustard (Brassica rapa, tori and swet), and beekeepers move hives into the fields to collect mustard honey.',
      bn: 'রাই সরিষা বাঁধাকপি পরিবারের একবর্ষজীবী উদ্ভিদ, যা তেলসমৃদ্ধ বীজ ও ঝাঁঝালো পাতার জন্য চাষ করা হয়। শীতকালে সরিষা ফুলে বাংলাদেশের গ্রামের বিস্তীর্ণ মাঠ উজ্জ্বল হলুদ হয়ে ওঠে। সরিষার তেল বাঙালি রান্নাঘরের ঐতিহ্যবাহী তেল, আর সর্ষে ইলিশের মতো পদে সরিষা বাটা অপরিহার্য। বাংলাদেশে এই প্রজাতি (রাই) এবং টরি ও শ্বেত সরিষা (Brassica rapa) দুটোই চাষ হয়; মৌচাষিরা মৌবাক্স নিয়ে মাঠে যান সরিষা ফুলের মধু সংগ্রহ করতে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Brassicales',
      family: 'Brassicaceae',
      genus: 'Brassica',
      species: 'B. juncea',
    },
    physical: {
      size: {
        en: 'Usually 1–1.8 m tall',
        bn: 'সাধারণত ১–১.৮ মিটার উঁচু',
      },
      weight: {
        en: 'Not applicable — seeds are tiny, about 2–4 g per thousand',
        bn: 'প্রযোজ্য নয় — বীজ খুব ছোট, এক হাজার বীজের ওজন প্রায় ২–৪ গ্রাম',
      },
      lifespan: {
        en: 'Annual; about 90–110 days',
        bn: 'একবর্ষজীবী; প্রায় ৯০–১১০ দিন',
      },
      features: {
        en: [
          'Bright yellow four-petalled flowers in loose clusters',
          'Slender pods (siliques) holding many small brown or yellow seeds',
          'Lower leaves are lobed and slightly hairy, with a sharp taste',
        ],
        bn: [
          'আলগা থোকায় চার পাপড়ির উজ্জ্বল হলুদ ফুল',
          'সরু শুঁটিতে অনেক ছোট বাদামি বা হলুদ বীজ',
          'নিচের পাতা খাঁজকাটা, হালকা রোমযুক্ত ও ঝাঁঝালো স্বাদের',
        ],
      },
    },
    habitat: {
      en: 'Winter farmland, often sown between two rice crops',
      bn: 'শীতের কৃষিজমি, প্রায়ই দুই ধান ফসলের মাঝে বোনা হয়',
    },
    habitats: ['urban-farmland'],
    regions: ['south-asia', 'east-asia', 'europe', 'north-america', 'oceania'],
    distribution: {
      en: 'Probably arose in Central Asia or the Himalayan foothills; major crop in India, Bangladesh, Nepal, China and Canada, with Tangail, Sirajganj and Manikganj key mustard districts in Bangladesh.',
      bn: 'সম্ভবত মধ্য এশিয়া বা হিমালয়ের পাদদেশে উৎপত্তি; ভারত, বাংলাদেশ, নেপাল, চীন ও কানাডায় প্রধান ফসল — বাংলাদেশে টাঙ্গাইল, সিরাজগঞ্জ ও মানিকগঞ্জ সরিষার জন্য বিখ্যাত।',
    },
    climate: {
      en: 'Cool, dry winter season with little rain',
      bn: 'কম বৃষ্টির ঠান্ডা, শুকনো শীত মৌসুম',
    },
    diet: {
      en: 'Photosynthesis; needs sulphur and nitrogen, often sown on residual soil moisture after the rice harvest',
      bn: 'সালোকসংশ্লেষণে খাদ্য তৈরি করে; সালফার ও নাইট্রোজেন দরকার, প্রায়ই ধান কাটার পর জমির অবশিষ্ট রসে বোনা হয়',
    },
    ecologicalRole: {
      en: 'Its winter flowers are a major source of nectar for honeybees and other pollinators.',
      bn: 'শীতের এই ফুল মৌমাছি ও অন্যান্য পরাগায়নকারী পতঙ্গের মধুর বড় উৎস।',
    },
    behavior: {
      en: 'Sown in October–November, flowers in about a month and is harvested in January–February; largely self-pollinating but visited by many bees.',
      bn: 'কার্তিকে বোনা হয়, মাসখানেকের মধ্যে ফুল ফোটে এবং পৌষ-মাঘে কাটা হয়; বেশির ভাগ স্বপরাগায়ন হলেও প্রচুর মৌমাছি ফুলে আসে।',
    },
    range: {
      native: [
        [36.0, 68.0],
        [30.7, 76.8],
        [34.3, 108.9],
      ],
      introduced: [
        [24.25, 89.9],
        [24.45, 89.7],
        [52.1, -106.6],
        [-34.0, 147.0],
        [27.7, 85.3],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Aphid attacks and Alternaria blight', 'Late-season heat shortening the growing period'],
        bn: ['জাবপোকার আক্রমণ ও অল্টারনারিয়া ব্লাইট রোগ', 'মৌসুমের শেষে গরম পড়ে গিয়ে বৃদ্ধিকাল কমে যাওয়া'],
      },
      initiatives: {
        en: ['Short-duration BARI and BINA mustard varieties that fit between rice crops', 'Promotion of beekeeping in mustard fields to raise yields'],
        bn: ['দুই ধান ফসলের মাঝে চাষের উপযোগী বারি ও বিনার স্বল্পমেয়াদি সরিষার জাত', 'ফলন বাড়াতে সরিষা খেতে মৌচাষে উৎসাহ'],
      },
    },
    facts: {
      en: [
        'Mustard’s pungency comes from compounds released when crushed seeds meet water.',
        'Bees in mustard fields can raise seed yield while producing honey.',
      ],
      bn: [
        'বাটা সরিষা পানির সংস্পর্শে এলে যে যৌগ তৈরি হয়, তা থেকেই এর ঝাঁঝ আসে।',
        'সরিষা খেতে মৌমাছি থাকলে মধুও পাওয়া যায়, আবার বীজের ফলনও বাড়ে।',
      ],
    },
    related: ['common-wheat', 'rice', 'western-honey-bee', 'coriander'],
  },
  {
    id: 'betel',
    commonName: { en: 'Betel', bn: 'পান' },
    scientificName: 'Piper betle',
    altNames: {
      en: ['Betel Leaf', 'Betel Vine', 'Paan'],
      bn: ['পানপাতা', 'পানের লতা', 'সাঁচি পান'],
    },
    category: 'plants',
    wikiTitle: 'Betel',
    description: {
      en: 'Betel is an evergreen climbing vine of the pepper family, grown for its glossy, heart-shaped leaves. In Bangladesh betel leaves are cultivated in shaded bamboo enclosures called baroj, and offering paan is a long-standing custom of hospitality. However, chewing betel quid that contains areca nut (supari), with or without tobacco, is classified as a cause of oral cancer, so this habit is strongly discouraged by health authorities.',
      bn: 'পান মরিচ পরিবারের চিরসবুজ লতানো উদ্ভিদ, যা চকচকে হৃৎপিণ্ড আকৃতির পাতার জন্য চাষ করা হয়। বাংলাদেশে বাঁশ ও খড়ের ছাউনি দেওয়া ছায়াঘেরা "বরজ"-এ পান চাষ হয়, আর অতিথিকে পান দেওয়া আমাদের বহু পুরোনো আপ্যায়নের রীতি। তবে সুপারি মিশিয়ে, জর্দা বা তামাকসহ কিংবা ছাড়া, পান খাওয়াকে মুখগহ্বরের ক্যানসারের অন্যতম কারণ হিসেবে চিহ্নিত করা হয়েছে; তাই স্বাস্থ্য বিশেষজ্ঞরা এই অভ্যাস এড়িয়ে চলার পরামর্শ দেন।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Piperales',
      family: 'Piperaceae',
      genus: 'Piper',
      species: 'P. betle',
    },
    physical: {
      size: {
        en: 'Vine climbing 2–5 m on supports; leaves 8–15 cm long',
        bn: 'অবলম্বন বেয়ে ২–৫ মিটার পর্যন্ত ওঠে; পাতা ৮–১৫ সেমি লম্বা',
      },
      weight: {
        en: 'Not applicable — sold by the leaf, often in bundles called “bira”',
        bn: 'প্রযোজ্য নয় — পাতা গুনে বিক্রি হয়, প্রায়ই "বিড়া" হিসেবে',
      },
      lifespan: {
        en: 'Perennial; a baroj is kept productive for several years',
        bn: 'বহুবর্ষজীবী; একটি বরজ কয়েক বছর ধরে পাতা দেয়',
      },
      features: {
        en: [
          'Glossy, heart-shaped leaves with a spicy, aromatic taste',
          'Jointed stems that cling with small aerial roots',
          'Tiny flowers in slender catkin-like spikes',
        ],
        bn: [
          'চকচকে, পানপাতা আকৃতির (হৃৎপিণ্ডাকার) পাতা, স্বাদ ঝাল ও সুগন্ধি',
          'গিঁটযুক্ত কাণ্ড, ছোট বায়বীয় মূল দিয়ে আঁকড়ে ধরে',
          'সরু শিষে অতি ক্ষুদ্র ফুল',
        ],
      },
    },
    habitat: {
      en: 'Shaded, humid enclosures (baroj) on raised, well-drained land',
      bn: 'উঁচু, পানি জমে না এমন জমিতে ছায়াঘেরা আর্দ্র বরজ',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'oceania'],
    distribution: {
      en: 'Probably native to Malesia (Malaysia–Indonesia); widely grown across South and Southeast Asia, including Rajshahi, Khulna, Barishal and Moheshkhali in Bangladesh.',
      bn: 'সম্ভবত মালয়েশিয়া-ইন্দোনেশিয়া অঞ্চলের স্থানীয়; দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়াজুড়ে চাষ হয়, বাংলাদেশে রাজশাহী, খুলনা, বরিশাল ও মহেশখালীতে উল্লেখযোগ্যভাবে।',
    },
    climate: {
      en: 'Hot, humid tropical climate with shade and steady moisture',
      bn: 'ছায়া ও নিয়মিত আর্দ্রতাসহ গরম, স্যাঁতসেঁতে ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis in partial shade; prefers rich, moist but well-drained soil',
      bn: 'আংশিক ছায়ায় সালোকসংশ্লেষণ করে; উর্বর, আর্দ্র কিন্তু পানি-নিষ্কাশিত মাটি পছন্দ করে',
    },
    ecologicalRole: {
      en: 'Baroj enclosures create cool, humid microhabitats used by frogs, lizards and insects.',
      bn: 'বরজের ভেতরের ঠান্ডা ও আর্দ্র পরিবেশে ব্যাঙ, টিকটিকি ও পোকামাকড় আশ্রয় নেয়।',
    },
    behavior: {
      en: 'Propagated by stem cuttings; male and female flowers are on separate plants and most cultivated vines rarely fruit.',
      bn: 'কাণ্ডের কাটিং থেকে চাষ হয়; পুরুষ ও স্ত্রী ফুল আলাদা গাছে হয়, আর চাষ করা লতায় ফল প্রায় হয় না বললেই চলে।',
    },
    range: {
      native: [
        [3.1, 101.7],
        [-0.9, 100.4],
        [-6.2, 106.8],
        [1.5, 110.3],
      ],
      introduced: [
        [24.4, 88.6],
        [21.6, 91.9],
        [22.7, 90.4],
        [10.8, 79.1],
        [13.7, 100.5],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Foot rot and leaf spot diseases in barojs', 'Cyclones and storm surges damaging coastal barojs'],
        bn: ['বরজে গোড়া পচা ও পাতায় দাগ রোগ', 'ঘূর্ণিঝড় ও জলোচ্ছ্বাসে উপকূলীয় বরজের ক্ষতি'],
      },
      initiatives: {
        en: ['Export of Bangladeshi betel leaf under phytosanitary controls', 'Public-health campaigns against chewing areca nut and tobacco'],
        bn: ['উদ্ভিদ-স্বাস্থ্য নিয়ন্ত্রণ মেনে বাংলাদেশি পান রপ্তানি', 'সুপারি ও তামাকসহ পান খাওয়ার বিরুদ্ধে জনস্বাস্থ্য প্রচারণা'],
      },
    },
    facts: {
      en: [
        'Areca nut, usually chewed with betel leaf, comes from a different plant — the areca palm.',
        'Moheshkhali’s sweet betel leaf is one of the best-known varieties in Bangladesh.',
      ],
      bn: [
        'পানের সঙ্গে সাধারণত যে সুপারি খাওয়া হয়, তা আসে সম্পূর্ণ আলাদা গাছ — সুপারি গাছ থেকে।',
        'মহেশখালীর মিষ্টি পান বাংলাদেশের সবচেয়ে পরিচিত জাতগুলোর একটি।',
      ],
    },
    related: ['black-pepper', 'green-cardamom'],
  },
  {
    id: 'black-pepper',
    commonName: { en: 'Black Pepper', bn: 'গোলমরিচ' },
    scientificName: 'Piper nigrum',
    altNames: {
      en: ['Pepper', 'Peppercorn', 'White Pepper'],
      bn: ['গোল মরিচ', 'কালো মরিচ', 'সাদা গোলমরিচ'],
    },
    category: 'plants',
    wikiTitle: 'Black pepper',
    description: {
      en: 'Black pepper is a woody climbing vine whose dried berries, peppercorns, are the world’s most traded spice. Native to the Western Ghats of southern India, it drew Arab, Portuguese and Dutch traders to the Malabar coast for centuries. Black, white and green pepper all come from the same fruit, processed differently. In Bangladesh it is grown on a small scale, mostly in Sylhet and the hill districts.',
      bn: 'গোলমরিচ কাষ্ঠল লতানো উদ্ভিদ, যার শুকনো ফল বিশ্বে সবচেয়ে বেশি কেনাবেচা হওয়া মসলা। দক্ষিণ ভারতের পশ্চিমঘাট পর্বতমালার এই স্থানীয় উদ্ভিদের টানে শত শত বছর ধরে আরব, পর্তুগিজ ও ওলন্দাজ বণিকেরা মালাবার উপকূলে আসতেন। কালো, সাদা ও সবুজ গোলমরিচ একই ফল থেকে আসে, শুধু প্রক্রিয়াজাতকরণ আলাদা। বাংলাদেশে সিলেট ও পার্বত্য জেলাগুলোতে অল্প পরিসরে এর চাষ হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Piperales',
      family: 'Piperaceae',
      genus: 'Piper',
      species: 'P. nigrum',
    },
    physical: {
      size: {
        en: 'Vine climbing up to 4–10 m on trees or poles',
        bn: 'গাছ বা খুঁটি বেয়ে ৪–১০ মিটার পর্যন্ত ওঠে',
      },
      weight: {
        en: 'Not applicable — each peppercorn is about 5 mm across',
        bn: 'প্রযোজ্য নয় — প্রতিটি গোলমরিচের দানা প্রায় ৫ মিমি চওড়া',
      },
      lifespan: {
        en: 'Perennial; vines bear for 20–30 years',
        bn: 'বহুবর্ষজীবী; একটি লতা ২০–৩০ বছর ফল দেয়',
      },
      features: {
        en: [
          'Heart-shaped to oval, glossy leaves',
          'Hanging spikes of small berries that ripen from green to red',
          'Contains piperine, which gives the sharp bite',
        ],
        bn: [
          'চকচকে, হৃৎপিণ্ডাকার থেকে ডিম্বাকার পাতা',
          'ঝুলন্ত শিষে ছোট ছোট ফল, সবুজ থেকে পেকে লাল হয়',
          'পিপারিন নামের যৌগ এর ঝাঁঝালো স্বাদ দেয়',
        ],
      },
    },
    habitat: {
      en: 'Humid tropical forests and shaded plantations, trained on support trees',
      bn: 'আর্দ্র ক্রান্তীয় বন ও ছায়াযুক্ত বাগান, অবলম্বন গাছে তুলে দেওয়া হয়',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'south-america', 'africa'],
    distribution: {
      en: 'Native to the Western Ghats of India; now grown mainly in Vietnam, Brazil, Indonesia, India and Sri Lanka.',
      bn: 'ভারতের পশ্চিমঘাট অঞ্চলের স্থানীয়; এখন প্রধানত ভিয়েতনাম, ব্রাজিল, ইন্দোনেশিয়া, ভারত ও শ্রীলঙ্কায় চাষ হয়।',
    },
    climate: {
      en: 'Hot, wet tropical climate with heavy rainfall',
      bn: 'প্রচুর বৃষ্টিসহ গরম, আর্দ্র ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis in partial shade; needs organic-rich, well-drained soil',
      bn: 'আংশিক ছায়ায় সালোকসংশ্লেষণ করে; জৈব পদার্থসমৃদ্ধ, পানি-নিষ্কাশিত মাটি দরকার',
    },
    ecologicalRole: {
      en: 'Its berries are eaten by birds that disperse the seeds in native forests.',
      bn: 'স্থানীয় বনে পাখিরা এর ফল খায় এবং বীজ ছড়িয়ে দেয়।',
    },
    behavior: {
      en: 'Flowers at the start of the monsoon; rain helps pollen move along the flower spikes, and berries ripen 6–8 months later.',
      bn: 'বর্ষার শুরুতে ফুল ফোটে; বৃষ্টির পানি শিষ বরাবর পরাগরেণু ছড়াতে সাহায্য করে, আর ৬–৮ মাস পর ফল পাকে।',
    },
    range: {
      native: [
        [11.6, 75.8],
        [10.0, 76.3],
        [9.6, 77.0],
        [12.4, 75.7],
      ],
      introduced: [
        [12.7, 108.0],
        [-5.4, 105.3],
        [-1.4, -48.5],
        [7.3, 80.6],
        [24.9, 91.9],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Quick wilt (foot rot) disease', 'Loss of wild relatives as Western Ghats forests are cleared'],
        bn: ['দ্রুত ঢলে পড়া (গোড়া পচা) রোগ', 'পশ্চিমঘাটের বন উজাড় হওয়ায় বুনো আত্মীয় প্রজাতি হারিয়ে যাওয়া'],
      },
      initiatives: {
        en: ['Germplasm conservation at India’s Indian Institute of Spices Research', 'Small-scale cultivation promoted in Sylhet and the hill districts of Bangladesh'],
        bn: ['ভারতের মসলা গবেষণা ইনস্টিটিউটে জার্মপ্লাজম সংরক্ষণ', 'বাংলাদেশের সিলেট ও পার্বত্য জেলায় ছোট পরিসরে চাষে উৎসাহ'],
      },
    },
    facts: {
      en: [
        'White pepper is made by removing the outer skin of ripe berries.',
        'Pepper was once so valuable it was used to pay rent and taxes in medieval Europe.',
      ],
      bn: [
        'পাকা ফলের বাইরের খোসা ছাড়িয়ে সাদা গোলমরিচ তৈরি হয়।',
        'মধ্যযুগের ইউরোপে গোলমরিচ এত দামি ছিল যে তা দিয়ে খাজনা ও কর পর্যন্ত দেওয়া হতো।',
      ],
    },
    related: ['betel', 'green-cardamom', 'turmeric', 'chili-pepper'],
  },
  {
    id: 'green-cardamom',
    commonName: { en: 'Green Cardamom', bn: 'এলাচ' },
    scientificName: 'Elettaria cardamomum',
    altNames: {
      en: ['Cardamom', 'True Cardamom', 'Small Cardamom'],
      bn: ['এলাচি', 'ছোট এলাচ', 'সবুজ এলাচ'],
    },
    category: 'plants',
    wikiTitle: 'Elettaria cardamomum',
    description: {
      en: 'Green cardamom is a tall perennial herb of the ginger family whose small, aromatic seed pods are among the world’s most expensive spices. In Bangladesh it flavours biryani, polao, korma, payesh and tea, though nearly all of it is imported. It grows wild in the moist forests of the Western Ghats in southern India.',
      bn: 'এলাচ আদা পরিবারের লম্বা বহুবর্ষজীবী বীরুৎ, যার ছোট সুগন্ধি ফল পৃথিবীর সবচেয়ে দামি মসলাগুলোর একটি। বাংলাদেশে বিরিয়ানি, পোলাও, কোরমা, পায়েস ও চায়ে এলাচ ব্যবহৃত হয়, যদিও প্রায় সবটাই আমদানি করা। দক্ষিণ ভারতের পশ্চিমঘাট অঞ্চলের আর্দ্র বনে এটি প্রাকৃতিকভাবে জন্মায়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Zingiberales',
      family: 'Zingiberaceae',
      genus: 'Elettaria',
      species: 'E. cardamomum',
    },
    physical: {
      size: {
        en: 'Leafy shoots 2–4 m tall',
        bn: 'পাতাযুক্ত ডগা ২–৪ মিটার উঁচু',
      },
      weight: {
        en: 'Not applicable — each pod is about 1–2 cm long',
        bn: 'প্রযোজ্য নয় — প্রতিটি এলাচ প্রায় ১–২ সেমি লম্বা',
      },
      lifespan: {
        en: 'Perennial; plantations yield for 10–15 years',
        bn: 'বহুবর্ষজীবী; বাগানে ১০–১৫ বছর ফলন দেয়',
      },
      features: {
        en: [
          'Long, lance-shaped leaves on reed-like stems from a rhizome',
          'Flower stalks creep along the ground near the base',
          'Green, three-sided pods holding sticky black seeds',
        ],
        bn: [
          'কন্দ থেকে গজানো নলের মতো কাণ্ডে লম্বা, বর্শাকৃতি পাতা',
          'ফুলের দণ্ড গাছের গোড়ার কাছে মাটির ওপর লতিয়ে থাকে',
          'তিন শিরাযুক্ত সবুজ ফলের ভেতর আঠালো কালো বীজ',
        ],
      },
    },
    habitat: {
      en: 'Shaded understorey of moist evergreen hill forests',
      bn: 'আর্দ্র চিরসবুজ পাহাড়ি বনের ছায়াঘেরা নিচতলা',
    },
    habitats: ['tropical-forest', 'mountain'],
    regions: ['south-asia', 'north-america', 'africa'],
    distribution: {
      en: 'Native to the Western Ghats of southern India; Guatemala is now the largest producer, followed by India.',
      bn: 'দক্ষিণ ভারতের পশ্চিমঘাট অঞ্চলের স্থানীয়; বর্তমানে গুয়াতেমালা সবচেয়ে বড় উৎপাদক, এরপর ভারত।',
    },
    climate: {
      en: 'Cool, humid tropical highlands with heavy rainfall',
      bn: 'প্রচুর বৃষ্টিপাতসহ ঠান্ডা, আর্দ্র ক্রান্তীয় উচ্চভূমি',
    },
    diet: {
      en: 'Photosynthesis under shade; needs deep forest loam rich in humus',
      bn: 'ছায়ায় সালোকসংশ্লেষণ করে; হিউমাসসমৃদ্ধ গভীর বনের দোআঁশ মাটি দরকার',
    },
    ecologicalRole: {
      en: 'Its flowers are pollinated mainly by bees, and shade-grown plantations retain much forest canopy.',
      bn: 'মূলত মৌমাছি এর ফুলের পরাগায়ন ঘটায়, আর ছায়ায় চাষ হওয়ায় বাগানে বনের অনেক গাছ টিকে থাকে।',
    },
    behavior: {
      en: 'Flowers through the monsoon; pods are hand-picked just before ripening and dried to keep their green colour.',
      bn: 'বর্ষাজুড়ে ফুল ফোটে; পুরো পাকার ঠিক আগে হাতে ফল তুলে শুকানো হয়, যাতে সবুজ রং থাকে।',
    },
    range: {
      native: [
        [9.8, 77.1],
        [12.4, 75.7],
        [9.5, 77.3],
        [11.4, 76.7],
      ],
      introduced: [
        [15.5, -90.4],
        [-5.1, 38.6],
        [7.2, 80.6],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Katte mosaic virus and capsule rot', 'Deforestation of its native hill forests'],
        bn: ['কাট্টে মোজাইক ভাইরাস ও ফল পচা রোগ', 'স্থানীয় পাহাড়ি বন উজাড়'],
      },
      initiatives: {
        en: ['Indian Cardamom Research Institute breeding programmes', 'Shade-grown, forest-friendly cultivation practices'],
        bn: ['ভারতীয় এলাচ গবেষণা প্রতিষ্ঠানের জাত উন্নয়ন কর্মসূচি', 'ছায়ায় বনবান্ধব পদ্ধতিতে চাষ'],
      },
    },
    facts: {
      en: [
        'Cardamom is often called the “queen of spices”, with black pepper as the king.',
        'Large or black cardamom (বড় এলাচ) used in meat dishes comes from a different plant, Amomum subulatum.',
      ],
      bn: [
        'এলাচকে প্রায়ই "মসলার রানি" বলা হয়, আর গোলমরিচকে বলা হয় "মসলার রাজা"।',
        'মাংসের তরকারিতে ব্যবহৃত বড় বা কালো এলাচ আসে আলাদা উদ্ভিদ Amomum subulatum থেকে।',
      ],
    },
    related: ['ginger', 'turmeric', 'black-pepper', 'tea-plant'],
  },
  {
    id: 'chili-pepper',
    commonName: { en: 'Chili Pepper', bn: 'মরিচ' },
    scientificName: 'Capsicum annuum',
    altNames: {
      en: ['Chilli', 'Green Chili', 'Red Chili'],
      bn: ['কাঁচা মরিচ', 'লঙ্কা', 'শুকনা মরিচ'],
    },
    category: 'plants',
    wikiTitle: 'Capsicum annuum',
    description: {
      en: 'Capsicum annuum is the species behind most chilies, as well as bell peppers and paprika. Domesticated in Mexico thousands of years ago, it was brought to South Asia by Portuguese traders in the 1500s and quickly became central to Bengali food — green chilies with rice and dried red chili powder in curries. Its heat comes from capsaicin, which can irritate eyes and skin; wash hands after handling hot chilies.',
      bn: 'Capsicum annuum প্রজাতি থেকেই বেশির ভাগ মরিচ, ক্যাপসিকাম ও পাপরিকা আসে। হাজার হাজার বছর আগে মেক্সিকোতে এর চাষ শুরু হয়, আর ষোড়শ শতকে পর্তুগিজ বণিকেরা একে দক্ষিণ এশিয়ায় নিয়ে আসেন। খুব দ্রুতই এটি বাঙালির খাবারের অবিচ্ছেদ্য অংশ হয়ে ওঠে — ভাতের সঙ্গে কাঁচা মরিচ, তরকারিতে শুকনা মরিচের গুঁড়া। এর ঝাল আসে ক্যাপসাইসিন থেকে, যা চোখ ও ত্বকে জ্বালা ধরাতে পারে; ঝাল মরিচ কাটার পর হাত ভালো করে ধুয়ে নেওয়া উচিত।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Solanales',
      family: 'Solanaceae',
      genus: 'Capsicum',
      species: 'C. annuum',
    },
    physical: {
      size: {
        en: 'Bushy plant 0.5–1.5 m tall',
        bn: 'ঝোপালো গাছ, ০.৫–১.৫ মিটার উঁচু',
      },
      weight: {
        en: 'Not applicable — fruits range from a few grams (chili) to over 150 g (bell pepper)',
        bn: 'প্রযোজ্য নয় — ফল কয়েক গ্রাম (মরিচ) থেকে ১৫০ গ্রামের বেশি (ক্যাপসিকাম) পর্যন্ত হয়',
      },
      lifespan: {
        en: 'Short-lived perennial, usually grown as an annual',
        bn: 'স্বল্পায়ু বহুবর্ষজীবী, সাধারণত একবর্ষী ফসল হিসেবে চাষ হয়',
      },
      features: {
        en: [
          'Small white, star-shaped flowers borne singly',
          'Hollow fruits that ripen from green to red, yellow or orange',
          'Capsaicin is concentrated in the pale inner ribs, not the seeds themselves',
        ],
        bn: [
          'একক সাদা, তারার মতো ছোট ফুল',
          'ফাঁপা ফল, সবুজ থেকে পেকে লাল, হলুদ বা কমলা হয়',
          'ক্যাপসাইসিন বীজে নয়, মূলত ভেতরের সাদা শিরায় বেশি থাকে',
        ],
      },
    },
    habitat: {
      en: 'Farmland, char lands and kitchen gardens; wild forms grow in scrub',
      bn: 'কৃষিজমি, চরাঞ্চল ও বাড়ির আঙিনার বাগান; বুনো রূপ ঝোপঝাড়ে জন্মায়',
    },
    habitats: ['urban-farmland', 'grassland'],
    regions: ['north-america', 'south-asia', 'east-asia', 'europe', 'africa', 'southeast-asia'],
    distribution: {
      en: 'Native from the southern United States through Mexico to northern South America; now grown worldwide, with Bogura and the river chars among major chili areas in Bangladesh.',
      bn: 'দক্ষিণ যুক্তরাষ্ট্র থেকে মেক্সিকো হয়ে উত্তর দক্ষিণ আমেরিকা পর্যন্ত স্থানীয়; এখন সারা বিশ্বে চাষ হয়, বাংলাদেশে বগুড়া ও নদীর চরাঞ্চল মরিচের প্রধান এলাকা।',
    },
    climate: {
      en: 'Warm, sunny climates; sensitive to frost and waterlogging',
      bn: 'উষ্ণ ও রোদেলা জলবায়ু; তুষারপাত ও জলাবদ্ধতা সহ্য করে না',
    },
    diet: {
      en: 'Photosynthesis; prefers well-drained, fertile loamy soil',
      bn: 'সালোকসংশ্লেষণে খাদ্য তৈরি করে; পানি-নিষ্কাশিত উর্বর দোআঁশ মাটি পছন্দ করে',
    },
    ecologicalRole: {
      en: 'Birds eat the fruits and spread the seeds — they cannot sense capsaicin, while mammals are deterred by it.',
      bn: 'পাখিরা ফল খেয়ে বীজ ছড়ায় — তারা ক্যাপসাইসিনের ঝাল টের পায় না, অথচ স্তন্যপায়ীরা এই ঝালে দূরে থাকে।',
    },
    behavior: {
      en: 'Seedlings are transplanted in winter in Bangladesh; mostly self-pollinating, and fruits can be picked green or ripe over several months.',
      bn: 'বাংলাদেশে শীতকালে চারা রোপণ করা হয়; বেশির ভাগ স্বপরাগায়ন, আর কয়েক মাস ধরে কাঁচা বা পাকা মরিচ তোলা যায়।',
    },
    range: {
      native: [
        [19.4, -99.1],
        [17.0, -96.7],
        [20.9, -89.6],
        [31.3, -110.9],
        [15.5, -90.3],
      ],
      introduced: [
        [24.85, 89.37],
        [16.3, 80.4],
        [30.6, 104.1],
        [46.5, 19.0],
        [10.5, 7.4],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Leaf curl virus spread by whiteflies', 'Loss of wild chiltepin habitat in Mexico and the US'],
        bn: ['সাদা মাছির মাধ্যমে ছড়ানো পাতা কোঁকড়ানো ভাইরাস', 'মেক্সিকো ও যুক্তরাষ্ট্রে বুনো চিলতেপিন মরিচের আবাসস্থল হারানো'],
      },
      initiatives: {
        en: ['Wild Chile Botanical Area in Arizona protecting wild chili plants', 'Seed banks conserving local chili varieties'],
        bn: ['অ্যারিজোনায় বুনো মরিচ রক্ষায় "ওয়াইল্ড চিলি বোটানিক্যাল এরিয়া"', 'স্থানীয় মরিচের জাত সংরক্ষণে বীজ ব্যাংক'],
      },
    },
    facts: {
      en: [
        'Before chilies arrived, Bengali cooks used black pepper and long pepper for heat.',
        'Milk or yoghurt eases chili burn better than water, because capsaicin dissolves in fat.',
      ],
      bn: [
        'মরিচ আসার আগে বাঙালি রাঁধুনিরা ঝালের জন্য গোলমরিচ ও পিপুল ব্যবহার করতেন।',
        'মরিচের জ্বালা কমাতে পানির চেয়ে দুধ বা দই বেশি কাজের, কারণ ক্যাপসাইসিন চর্বিতে দ্রবীভূত হয়।',
      ],
    },
    related: ['potato', 'black-pepper', 'coriander', 'maize'],
  },
  {
    id: 'coriander',
    commonName: { en: 'Coriander', bn: 'ধনিয়া' },
    scientificName: 'Coriandrum sativum',
    altNames: {
      en: ['Cilantro', 'Chinese Parsley', 'Dhania'],
      bn: ['ধনে', 'ধনেপাতা', 'ধনিয়া পাতা'],
    },
    category: 'plants',
    wikiTitle: 'Coriander',
    description: {
      en: 'Coriander is an annual herb of the carrot family; its fresh leaves (dhonepata) garnish Bangladeshi curries, bhortas and chutneys, while its dried seeds are a key whole and ground spice. It is one of the oldest spices known, found in ancient Egyptian tombs. Some people find that the leaves taste like soap, a trait partly linked to their genes.',
      bn: 'ধনিয়া গাজর পরিবারের একবর্ষজীবী বীরুৎ। এর টাটকা পাতা — ধনেপাতা — বাংলাদেশের তরকারি, ভর্তা ও চাটনির স্বাদ বাড়ায়, আর শুকনো বীজ গোটা বা গুঁড়া মসলা হিসেবে অপরিহার্য। এটি মানুষের জানা সবচেয়ে প্রাচীন মসলাগুলোর একটি — প্রাচীন মিশরের সমাধিতেও ধনিয়ার বীজ পাওয়া গেছে। কিছু মানুষের কাছে ধনেপাতার স্বাদ সাবানের মতো লাগে, যা আংশিকভাবে তাদের জিনের সঙ্গে সম্পর্কিত।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Apiales',
      family: 'Apiaceae',
      genus: 'Coriandrum',
      species: 'C. sativum',
    },
    physical: {
      size: {
        en: 'About 0.3–0.6 m tall when flowering',
        bn: 'ফুল ফোটার সময় প্রায় ০.৩–০.৬ মিটার উঁচু',
      },
      weight: {
        en: 'Not applicable — seeds are round, 3–5 mm across',
        bn: 'প্রযোজ্য নয় — বীজ গোল, ৩–৫ মিমি চওড়া',
      },
      lifespan: {
        en: 'Annual; leaves are ready in 4–6 weeks, seeds in about 3 months',
        bn: 'একবর্ষজীবী; ৪–৬ সপ্তাহে পাতা তোলা যায়, প্রায় ৩ মাসে বীজ হয়',
      },
      features: {
        en: [
          'Broad, lobed lower leaves and finely divided feathery upper leaves',
          'Small white or pale pink flowers in umbrella-like clusters (umbels)',
          'Round, ribbed, pale brown seeds with a citrusy aroma',
        ],
        bn: [
          'নিচের পাতা চওড়া ও খাঁজকাটা, ওপরের পাতা সূক্ষ্মভাবে বিভক্ত ও পালকের মতো',
          'ছাতার মতো থোকায় সাদা বা হালকা গোলাপি ছোট ফুল',
          'গোল, খাঁজযুক্ত, হালকা বাদামি বীজ; গন্ধ লেবুর মতো',
        ],
      },
    },
    habitat: {
      en: 'Winter vegetable fields and kitchen gardens',
      bn: 'শীতের সবজি খেত ও বাড়ির আঙিনার বাগান',
    },
    habitats: ['urban-farmland'],
    regions: ['europe', 'africa', 'south-asia', 'east-asia', 'north-america'],
    distribution: {
      en: 'Native to the eastern Mediterranean and western Asia; grown worldwide, with India the largest producer.',
      bn: 'পূর্ব ভূমধ্যসাগরীয় অঞ্চল ও পশ্চিম এশিয়ার স্থানীয়; সারা বিশ্বে চাষ হয়, ভারত সবচেয়ে বড় উৎপাদক।',
    },
    climate: {
      en: 'Cool, dry season; bolts quickly into flower in hot weather',
      bn: 'ঠান্ডা ও শুকনো মৌসুম; গরমে দ্রুত ফুল এসে পাতা কমে যায়',
    },
    diet: {
      en: 'Photosynthesis; grows well in light, fertile, well-drained soil',
      bn: 'সালোকসংশ্লেষণে খাদ্য তৈরি করে; হালকা, উর্বর ও পানি-নিষ্কাশিত মাটিতে ভালো জন্মায়',
    },
    ecologicalRole: {
      en: 'Its flat flower clusters attract bees, hoverflies and small parasitic wasps that help control pests.',
      bn: 'চ্যাপ্টা ফুলের থোকা মৌমাছি, হোভারফ্লাই ও ক্ষতিকর পোকা দমনে সহায়ক ছোট পরজীবী বোলতাকে আকর্ষণ করে।',
    },
    behavior: {
      en: 'Sown from autumn to winter in Bangladesh; flowers are insect-pollinated and seeds dry on the plant.',
      bn: 'বাংলাদেশে শরৎ থেকে শীতকাল পর্যন্ত বোনা হয়; পোকামাকড় পরাগায়ন ঘটায়, বীজ গাছেই শুকায়।',
    },
    range: {
      native: [
        [33.9, 35.5],
        [31.8, 35.2],
        [37.9, 23.7],
        [36.2, 37.2],
        [30.0, 31.2],
      ],
      introduced: [
        [23.8, 90.4],
        [25.2, 75.9],
        [19.4, -99.1],
        [30.6, 104.1],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Stem gall and powdery mildew diseases', 'Early heat causing plants to bolt'],
        bn: ['কাণ্ডে গল ও পাউডারি মিলডিউ রোগ', 'আগাম গরমে দ্রুত ফুল এসে যাওয়া'],
      },
      initiatives: {
        en: ['Year-round coriander varieties developed by BARI', 'Seed-spice research programmes in India'],
        bn: ['বারির উদ্ভাবিত সারা বছর চাষযোগ্য ধনিয়ার জাত', 'ভারতে বীজ-মসলা গবেষণা কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'In North America the leaves are called cilantro and the seeds coriander.',
        'Coriander seeds were found in the tomb of Tutankhamun.',
      ],
      bn: [
        'উত্তর আমেরিকায় পাতাকে "সিলান্ট্রো" আর বীজকে "কোরিয়ান্ডার" বলা হয়।',
        'মিশরের ফারাও তুতানখামেনের সমাধিতে ধনিয়ার বীজ পাওয়া গেছে।',
      ],
    },
    related: ['chili-pepper', 'gotu-kola', 'brown-mustard'],
  },
  {
    id: 'gotu-kola',
    commonName: { en: 'Gotu Kola', bn: 'থানকুনি' },
    scientificName: 'Centella asiatica',
    altNames: {
      en: ['Centella', 'Asiatic Pennywort', 'Mandukaparni'],
      bn: ['থানকুনি পাতা', 'সেন্টেলা', 'মণ্ডূকপর্ণী'],
    },
    category: 'plants',
    wikiTitle: 'Centella asiatica',
    description: {
      en: 'Gotu kola, called thankuni in Bangladesh, is a small creeping herb with kidney-shaped leaves that grows in damp, shady ground across the tropics. Its leaves are eaten as bhorta, in salads and juices, and are used in folk remedies for stomach upsets and in Ayurveda for wounds and memory. Some laboratory and small clinical studies are promising, but evidence is limited; concentrated supplements have rarely been linked to liver problems and are not advised in pregnancy.',
      bn: 'থানকুনি কিডনি আকৃতির পাতার ছোট লতানো বীরুৎ, যা ক্রান্তীয় অঞ্চলজুড়ে স্যাঁতসেঁতে, ছায়াঘেরা মাটিতে জন্মায়। বাংলাদেশে থানকুনি পাতা ভর্তা, সালাদ ও রস করে খাওয়া হয়; পেটের গোলমালে এটি প্রচলিত ঘরোয়া প্রতিকার, আর আয়ুর্বেদে ক্ষত ও স্মৃতিশক্তির জন্য ব্যবহৃত হয়। কিছু পরীক্ষাগার ও ছোট পরিসরের গবেষণার ফল আশাব্যঞ্জক হলেও প্রমাণ এখনো সীমিত; ঘন নির্যাসের সাপ্লিমেন্টের সঙ্গে কদাচিৎ যকৃতের সমস্যার যোগসূত্র পাওয়া গেছে, আর গর্ভাবস্থায় তা সেবন না করার পরামর্শ দেওয়া হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Apiales',
      family: 'Apiaceae',
      genus: 'Centella',
      species: 'C. asiatica',
    },
    physical: {
      size: {
        en: 'Low creeper 5–20 cm tall; leaves 2–5 cm wide',
        bn: '৫–২০ সেমি উঁচু, মাটিতে লতিয়ে থাকে; পাতা ২–৫ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a small, light herb',
        bn: 'প্রযোজ্য নয় — ছোট ও হালকা বীরুৎ',
      },
      lifespan: {
        en: 'Perennial',
        bn: 'বহুবর্ষজীবী',
      },
      features: {
        en: [
          'Round to kidney-shaped leaves with scalloped edges on long stalks',
          'Creeping runners that root at every node',
          'Tiny pinkish-red flowers hidden near the ground',
        ],
        bn: [
          'লম্বা বোঁটায় গোল থেকে কিডনি আকৃতির পাতা, কিনারা ঢেউখেলানো',
          'মাটিতে লতানো কাণ্ড, প্রতিটি গিঁট থেকে শিকড় গজায়',
          'মাটির কাছাকাছি লুকানো ছোট লালচে-গোলাপি ফুল',
        ],
      },
    },
    habitat: {
      en: 'Damp, shady ground — pond banks, paddy bunds, ditches and lawns',
      bn: 'স্যাঁতসেঁতে, ছায়াঘেরা মাটি — পুকুরপাড়, ধানখেতের আল, নালা ও ঘাসজমি',
    },
    habitats: ['wetland', 'urban-farmland', 'tropical-forest', 'grassland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'africa', 'oceania'],
    distribution: {
      en: 'Widespread in tropical and subtropical Asia, Africa, Madagascar, Australia and the Pacific islands; very common throughout Bangladesh.',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় এশিয়া, আফ্রিকা, মাদাগাস্কার, অস্ট্রেলিয়া ও প্রশান্ত মহাসাগরীয় দ্বীপপুঞ্জে বিস্তৃত; বাংলাদেশের সর্বত্র খুবই সাধারণ।',
    },
    climate: {
      en: 'Warm, humid tropical and subtropical climates',
      bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; thrives in moist, nutrient-rich soil and tolerates shade',
      bn: 'সালোকসংশ্লেষণে খাদ্য তৈরি করে; আর্দ্র, পুষ্টিসমৃদ্ধ মাটিতে ভালো জন্মায় এবং ছায়া সহ্য করে',
    },
    ecologicalRole: {
      en: 'Forms dense mats that bind soil on wet banks and shelter small invertebrates.',
      bn: 'ঘন আস্তরণ তৈরি করে ভেজা পাড়ের মাটি আটকে রাখে এবং ছোট অমেরুদণ্ডী প্রাণীদের আশ্রয় দেয়।',
    },
    behavior: {
      en: 'Spreads quickly by runners; flowers through the warm months, often unnoticed beneath the leaves.',
      bn: 'লতানো কাণ্ডের মাধ্যমে দ্রুত ছড়ায়; গরমের মাসগুলোতে ফুল ফোটে, যা পাতার নিচে প্রায়ই চোখে পড়ে না।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [7.0, 80.0],
        [13.7, 100.5],
        [-6.2, 106.8],
        [-18.9, 47.5],
        [-27.5, 153.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Over-collection from the wild for the herbal trade in some regions', 'Drainage and filling of wetlands and pond banks'],
        bn: ['কোনো কোনো অঞ্চলে ভেষজ ব্যবসার জন্য প্রকৃতি থেকে অতিরিক্ত সংগ্রহ', 'জলাভূমি ও পুকুরপাড় ভরাট বা শুকিয়ে ফেলা'],
      },
      initiatives: {
        en: ['Cultivation for the herbal and cosmetics industries', 'Inclusion in medicinal-plant gardens and conservation programmes'],
        bn: ['ভেষজ ও প্রসাধনী শিল্পের জন্য চাষ', 'ঔষধি উদ্ভিদ বাগান ও সংরক্ষণ কর্মসূচিতে অন্তর্ভুক্তি'],
      },
    },
    facts: {
      en: [
        'Despite the English name “pennywort”, it belongs to the carrot and coriander family.',
        'Its compounds, such as asiaticoside, are used in some skin-care creams.',
      ],
      bn: [
        'ইংরেজিতে একে "পেনিওয়ার্ট" বলা হলেও এটি আসলে গাজর ও ধনিয়ার পরিবারের সদস্য।',
        'এর অ্যাসিয়াটিকোসাইডের মতো যৌগ কিছু ত্বকচর্চার ক্রিমে ব্যবহৃত হয়।',
      ],
    },
    related: ['holy-basil', 'neem', 'bitter-gourd', 'coriander'],
  },
  {
    id: 'bitter-gourd',
    commonName: { en: 'Bitter Gourd', bn: 'করলা' },
    scientificName: 'Momordica charantia',
    altNames: {
      en: ['Bitter Melon', 'Karela', 'Balsam Pear'],
      bn: ['উচ্ছে', 'করোলা', 'উস্তা'],
    },
    category: 'plants',
    wikiTitle: 'Momordica charantia',
    description: {
      en: 'Bitter gourd is a climbing vine of the gourd family whose warty, intensely bitter fruits are a much-loved vegetable in Bangladesh, fried, cooked in shukto or mashed as bhorta. In folk medicine it is widely taken to help control blood sugar, and some studies show modest effects, but it is not a substitute for diabetes treatment. It can lower blood sugar too far when combined with diabetes medicines, and its seeds and ripe red seed-coats should be avoided, especially by children and pregnant women.',
      bn: 'করলা লাউ-কুমড়া পরিবারের লতানো উদ্ভিদ, যার খাঁজকাটা, তীব্র তেতো ফল বাংলাদেশে খুব জনপ্রিয় সবজি — ভাজি, শুক্তো বা ভর্তা করে খাওয়া হয়। লোকজ চিকিৎসায় রক্তে শর্করা নিয়ন্ত্রণে করলার রস খাওয়ার ব্যাপক প্রচলন আছে, এবং কিছু গবেষণায় সামান্য প্রভাব দেখা গেছে; তবে এটি ডায়াবেটিসের চিকিৎসার বিকল্প নয়। ডায়াবেটিসের ওষুধের সঙ্গে খেলে রক্তে শর্করা অতিরিক্ত কমে যেতে পারে; আর এর বীজ ও পাকা ফলের লাল আবরণ, বিশেষ করে শিশু ও গর্ভবতী নারীদের, এড়িয়ে চলা উচিত।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Cucurbitales',
      family: 'Cucurbitaceae',
      genus: 'Momordica',
      species: 'M. charantia',
    },
    physical: {
      size: {
        en: 'Vine climbing up to about 5 m; fruits 5–30 cm long',
        bn: 'প্রায় ৫ মিটার পর্যন্ত বেয়ে ওঠে; ফল ৫–৩০ সেমি লম্বা',
      },
      weight: {
        en: 'Not applicable — fruits typically weigh 50–300 g',
        bn: 'প্রযোজ্য নয় — একটি ফল সাধারণত ৫০–৩০০ গ্রাম',
      },
      lifespan: {
        en: 'Annual (or short-lived perennial in the tropics)',
        bn: 'একবর্ষজীবী (ক্রান্তীয় অঞ্চলে কখনো স্বল্পায়ু বহুবর্ষজীবী)',
      },
      features: {
        en: [
          'Deeply lobed leaves and coiling tendrils',
          'Yellow five-petalled flowers, male and female on the same plant',
          'Warty green fruits that turn orange and split open when ripe, showing red-coated seeds',
        ],
        bn: [
          'গভীরভাবে খাঁজকাটা পাতা ও প্যাঁচানো আকর্ষ',
          'পাঁচ পাপড়ির হলুদ ফুল; একই গাছে পুরুষ ও স্ত্রী ফুল',
          'খাঁজকাটা সবুজ ফল পাকলে কমলা হয়ে ফেটে যায়, ভেতরে লাল আবরণে ঢাকা বীজ',
        ],
      },
    },
    habitat: {
      en: 'Vegetable fields and homestead trellises; also wild in thickets',
      bn: 'সবজি খেত ও বাড়ির মাচা; ঝোপঝাড়ে বুনো অবস্থায়ও জন্মায়',
    },
    habitats: ['urban-farmland', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'africa', 'north-america', 'south-america'],
    distribution: {
      en: 'Thought to have been domesticated in Asia, likely eastern India and southern China, from wild forms that also occur in Africa; now grown and naturalised throughout the tropics.',
      bn: 'ধারণা করা হয় এশিয়ায়, সম্ভবত পূর্ব ভারত ও দক্ষিণ চীনে, এর চাষ শুরু হয়; বুনো রূপ আফ্রিকাতেও পাওয়া যায়। এখন সারা ক্রান্তীয় অঞ্চলে চাষ হয় এবং প্রাকৃতিকভাবে ছড়িয়ে পড়েছে।',
    },
    climate: {
      en: 'Hot, humid tropical and subtropical climates',
      bn: 'গরম ও আর্দ্র ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Photosynthesis; grows fast in fertile, well-drained soil with regular water',
      bn: 'সালোকসংশ্লেষণে খাদ্য তৈরি করে; নিয়মিত পানিসহ উর্বর, পানি-নিষ্কাশিত মাটিতে দ্রুত বাড়ে',
    },
    ecologicalRole: {
      en: 'Its flowers are visited by bees, and birds eat the bright red seed coats of ripe fruit and spread the seeds.',
      bn: 'মৌমাছি এর ফুলে আসে, আর পাখিরা পাকা ফলের উজ্জ্বল লাল বীজাবরণ খেয়ে বীজ ছড়ায়।',
    },
    behavior: {
      en: 'Climbs with tendrils onto bamboo trellises (macha); begins fruiting about 2 months after sowing and is pollinated by insects.',
      bn: 'আকর্ষ দিয়ে বাঁশের মাচায় ওঠে; বীজ বোনার প্রায় ২ মাস পর ফল ধরে, পোকামাকড় পরাগায়ন ঘটায়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.6, 88.4],
        [13.0, 80.2],
        [23.1, 113.3],
      ],
      introduced: [
        [18.0, -76.8],
        [27.0, -81.0],
        [-3.7, -38.5],
        [14.6, 121.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Fruit fly damage', 'Mosaic viruses and downy mildew'],
        bn: ['মাছি পোকার আক্রমণ', 'মোজাইক ভাইরাস ও ডাউনি মিলডিউ রোগ'],
      },
      initiatives: {
        en: ['Pheromone traps promoted to reduce pesticide use against fruit flies', 'Improved and hybrid varieties released by BARI'],
        bn: ['মাছি পোকা দমনে কীটনাশকের বদলে ফেরোমন ফাঁদ ব্যবহারে উৎসাহ', 'বারির উন্নত ও হাইব্রিড জাত উদ্ভাবন'],
      },
    },
    facts: {
      en: [
        'The bitterness comes from compounds called cucurbitacins and momordicin.',
        'Smaller, darker local types are often called uchche in Bengali, and larger ones korola.',
      ],
      bn: [
        'কিউকারবিটাসিন ও মোমোর্ডিসিন নামের যৌগ থেকে করলার তেতো স্বাদ আসে।',
        'ছোট ও গাঢ় সবুজ দেশি ধরনকে প্রায়ই উচ্ছে, আর বড়গুলোকে করলা বলা হয়।',
      ],
    },
    related: ['gotu-kola', 'neem', 'chili-pepper'],
  },
  {
    id: 'lemongrass',
    commonName: { en: 'Lemongrass', bn: 'লেমনগ্রাস' },
    scientificName: 'Cymbopogon citratus',
    altNames: {
      en: ['West Indian Lemongrass', 'Fever Grass'],
      bn: ['লেবু ঘাস', 'লেমন ঘাস'],
    },
    category: 'plants',
    wikiTitle: 'Cymbopogon citratus',
    description: {
      en: 'Lemongrass is a tall, clump-forming tropical grass whose leaves and stem bases smell strongly of lemon because of the compound citral. It flavours Thai and other Southeast Asian dishes, is brewed as an herbal tea, and is distilled for essential oil used in soaps and insect repellents. It is increasingly grown in Bangladeshi homesteads and rooftop gardens; as a food it is generally safe, but the concentrated oil should not be swallowed and can irritate skin.',
      bn: 'লেমনগ্রাস লম্বা, ঝাড় বেঁধে জন্মানো ক্রান্তীয় ঘাস। সাইট্রাল নামের যৌগের কারণে এর পাতা ও কাণ্ডের গোড়া থেকে লেবুর মতো তীব্র গন্ধ আসে। থাই ও দক্ষিণ-পূর্ব এশিয়ার রান্নায় এটি ব্যবহৃত হয়, ভেষজ চা হিসেবে পান করা হয়, আর এর সুগন্ধি তেল সাবান ও মশা-তাড়ানো পণ্যে ব্যবহৃত হয়। বাংলাদেশের বসতবাড়ি ও ছাদবাগানে এর চাষ ক্রমেই বাড়ছে। খাবার হিসেবে এটি সাধারণত নিরাপদ, তবে ঘন সুগন্ধি তেল গেলা উচিত নয় এবং তা ত্বকে জ্বালা ধরাতে পারে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Poales',
      family: 'Poaceae',
      genus: 'Cymbopogon',
      species: 'C. citratus',
    },
    physical: {
      size: {
        en: 'Dense clumps 1–2 m tall',
        bn: '১–২ মিটার উঁচু ঘন ঝাড়',
      },
      weight: {
        en: 'Not applicable — harvested as leafy stalks',
        bn: 'প্রযোজ্য নয় — পাতাসহ ডাঁটা হিসেবে কাটা হয়',
      },
      lifespan: {
        en: 'Perennial; clumps can be cut repeatedly for several years',
        bn: 'বহুবর্ষজীবী; একটি ঝাড় কয়েক বছর ধরে বারবার কাটা যায়',
      },
      features: {
        en: [
          'Long, narrow, blue-green leaves with rough edges',
          'Thick, pale stem bases packed in tight clumps',
          'Strong lemon scent when crushed',
        ],
        bn: [
          'লম্বা, সরু, নীলচে-সবুজ পাতা, কিনারা খসখসে',
          'ঘন ঝাড়ে মোটা, ফ্যাকাশে কাণ্ডের গোড়া',
          'পিষলে লেবুর তীব্র গন্ধ',
        ],
      },
    },
    habitat: {
      en: 'Sunny gardens, farm borders and plantations',
      bn: 'রোদেলা বাগান, খেতের আল ও বাণিজ্যিক বাগান',
    },
    habitats: ['urban-farmland', 'grassland'],
    regions: ['southeast-asia', 'south-asia', 'africa', 'south-america', 'north-america'],
    distribution: {
      en: 'Known only in cultivation, probably originating in Malesia; now grown throughout the tropics, including India, Guatemala, Brazil and Bangladesh.',
      bn: 'কেবল চাষাবাদেই পাওয়া যায়, সম্ভবত মালয়েশিয়া-ইন্দোনেশিয়া অঞ্চলে উৎপত্তি; এখন ভারত, গুয়াতেমালা, ব্রাজিল ও বাংলাদেশসহ পুরো ক্রান্তীয় অঞ্চলে চাষ হয়।',
    },
    climate: {
      en: 'Warm, sunny and humid tropical climates',
      bn: 'উষ্ণ, রোদেলা ও আর্দ্র ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Efficient C4 photosynthesis; tolerates poor soil but needs full sun',
      bn: 'দক্ষ সি-ফোর পদ্ধতির সালোকসংশ্লেষণ করে; অনুর্বর মাটি সহ্য করে, তবে পূর্ণ রোদ দরকার',
    },
    ecologicalRole: {
      en: 'Its dense roots help hold soil on slopes and field edges.',
      bn: 'এর ঘন শিকড় ঢাল ও খেতের কিনারার মাটি আটকে রাখতে সাহায্য করে।',
    },
    behavior: {
      en: 'Rarely flowers or sets seed in cultivation; it is propagated by dividing clumps.',
      bn: 'চাষের সময় কদাচিৎ ফুল ফোটে বা বীজ হয়; ঝাড় ভাগ করে চারা তৈরি করা হয়।',
    },
    range: {
      native: [
        [3.1, 101.7],
        [-6.2, 106.8],
        [5.4, 100.3],
        [-7.8, 110.4],
      ],
      introduced: [
        [9.9, 76.3],
        [23.8, 90.4],
        [14.6, -90.5],
        [-23.5, -46.6],
        [6.5, 3.4],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Leaf blight and rust diseases', 'Few genetic types because it is grown from clump divisions'],
        bn: ['পাতা ঝলসানো ও মরিচা রোগ', 'ঝাড় ভাগ করে চাষ হওয়ায় জিনগত বৈচিত্র্য কম'],
      },
      initiatives: {
        en: ['Essential-oil research and improved clones in India', 'Promotion in homestead and rooftop gardening in Bangladesh'],
        bn: ['ভারতে সুগন্ধি তেল নিয়ে গবেষণা ও উন্নত ক্লোন উদ্ভাবন', 'বাংলাদেশে বসতবাড়ি ও ছাদবাগানে চাষে উৎসাহ'],
      },
    },
    facts: {
      en: [
        'Citronella oil, used in mosquito repellents, comes from related Cymbopogon species.',
        'A single stalk from the market can be rooted in water and planted.',
      ],
      bn: [
        'মশা তাড়ানোর পণ্যে ব্যবহৃত সিট্রোনেলা তেল আসে Cymbopogon গণের আত্মীয় প্রজাতি থেকে।',
        'বাজার থেকে কেনা একটি ডাঁটা পানিতে রেখে শিকড় গজিয়ে টবে লাগানো যায়।',
      ],
    },
    related: ['ginger', 'tea-plant', 'holy-basil', 'gotu-kola'],
  },
];
