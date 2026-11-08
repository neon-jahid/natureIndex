import type { Species } from '@/types';

export const trees: Species[] = [
  {
    id: 'sundari',
    commonName: { en: 'Sundari', bn: 'সুন্দরী' },
    scientificName: 'Heritiera fomes',
    altNames: {
      en: ['Sundri', 'Sundari Tree', 'Looking-glass Mangrove'],
      bn: ['সুন্দরী গাছ', 'সুন্দরীগাছ', 'সুন্দরী বৃক্ষ'],
    },
    synonyms: ['Heritiera minor'],
    category: 'trees',
    wikiTitle: 'Heritiera fomes',
    description: {
      en: 'Sundari is the signature tree of the Sundarbans — the world’s largest single block of tidal mangrove forest, shared by Bangladesh and India — and most people believe the forest is named after it. It is the dominant tree in the less salty, freshwater-influenced parts of the forest, where its breathing roots (pneumatophores) poke up from the mud in dense carpets. Its hard, durable red timber was once heavily logged for boats, poles and furniture. Today Sundari is endangered, mainly because rising salinity has reduced its range and weakened the trees.',
      bn: 'সুন্দরী গাছ সুন্দরবনের প্রতীক। বাংলাদেশ ও ভারতের যৌথ সুন্দরবন পৃথিবীর বৃহত্তম একক জোয়ার-ভাটার ম্যানগ্রোভ বন, আর বেশির ভাগ মানুষের বিশ্বাস, এই গাছের নাম থেকেই বনের নাম "সুন্দরবন"। বনের যেসব এলাকায় লবণাক্ততা কম ও মিঠাপানির প্রভাব বেশি, সেখানে সুন্দরীই প্রধান গাছ — কাদার ওপর ঘন হয়ে উঠে থাকে এর শ্বাসমূল। শক্ত, টেকসই লালচে কাঠের জন্য একসময় নৌকা, খুঁটি ও আসবাব তৈরিতে ব্যাপকভাবে কাটা হতো। বর্তমানে সুন্দরী বিপন্ন; মূল কারণ লবণাক্ততা বেড়ে যাওয়ায় এর বিস্তৃতি কমে যাওয়া ও গাছ দুর্বল হয়ে পড়া।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Malvales',
      family: 'Malvaceae',
      genus: 'Heritiera',
      species: 'H. fomes',
    },
    physical: {
      size: {
        en: 'Usually 15–25 m tall with a trunk up to about 50 cm in diameter',
        bn: 'সাধারণত ১৫–২৫ মিটার উঁচু; কাণ্ডের ব্যাস প্রায় ৫০ সেমি পর্যন্ত',
      },
      weight: {
        en: 'Not usually measured by weight; its timber is one of the heaviest and hardest in the region',
        bn: 'ওজন দিয়ে সাধারণত মাপা হয় না; এর কাঠ এ অঞ্চলের সবচেয়ে ভারী ও শক্ত কাঠগুলোর একটি',
      },
      lifespan: {
        en: 'Long-lived perennial tree; individuals may live for many decades',
        bn: 'দীর্ঘজীবী বহুবর্ষজীবী গাছ; একেকটি গাছ বহু দশক বাঁচতে পারে',
      },
      features: {
        en: [
          'Dense, pencil-like breathing roots (pneumatophores) rising from the mud',
          'Leaves glossy green above and silvery-grey beneath',
          'Buttressed base on older trees',
          'Small bell-shaped orange-pink flowers and woody floating fruits',
        ],
        bn: [
          'কাদা ফুঁড়ে ঘন হয়ে ওঠা পেনসিলের মতো শ্বাসমূল',
          'পাতার ওপরের দিক চকচকে সবুজ, নিচের দিক রুপালি-ধূসর',
          'বয়স্ক গাছের গোড়ায় ঠেসমূল',
          'ছোট ঘণ্টাকৃতির কমলা-গোলাপি ফুল এবং পানিতে ভাসে এমন শক্ত ফল',
        ],
      },
    },
    habitat: {
      en: 'Tidal mangrove forests on regularly flooded, less saline clay soils of river deltas',
      bn: 'নদীর বদ্বীপে নিয়মিত জোয়ারে প্লাবিত, তুলনামূলক কম লবণাক্ত এঁটেল মাটির ম্যানগ্রোভ বন',
    },
    habitats: ['mangrove', 'wetland'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Mainly the Sundarbans of Bangladesh and India, which hold the vast majority of the population; also smaller stands in Odisha (India) and the Ayeyarwady delta of Myanmar.',
      bn: 'মূলত বাংলাদেশ ও ভারতের সুন্দরবনে — এর সিংহভাগই এখানে; এ ছাড়া ভারতের ওডিশা এবং মিয়ানমারের ইরাবতী বদ্বীপে ছোট পরিসরে পাওয়া যায়।',
    },
    climate: {
      en: 'Hot, humid tropical monsoon climate with heavy rainfall and frequent cyclones',
      bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় মৌসুমি জলবায়ু; প্রচুর বৃষ্টি ও ঘন ঘন ঘূর্ণিঝড়',
    },
    diet: {
      en: 'Photosynthesis; its breathing roots take in oxygen from the air because the waterlogged mud has almost none',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; জলাবদ্ধ কাদায় অক্সিজেন প্রায় না থাকায় শ্বাসমূল দিয়ে বাতাস থেকে অক্সিজেন নেয়',
    },
    ecologicalRole: {
      en: 'Forms the backbone of the Sundarbans ecosystem: it shelters the coast from cyclones and storm surges, traps sediment, stores large amounts of carbon and supports tigers, deer, fish, crabs and birds.',
      bn: 'সুন্দরবনের বাস্তুতন্ত্রের মেরুদণ্ড: ঘূর্ণিঝড় ও জলোচ্ছ্বাস থেকে উপকূলকে রক্ষা করে, পলি ধরে রাখে, প্রচুর কার্বন জমা রাখে এবং বাঘ, হরিণ, মাছ, কাঁকড়া ও পাখির আবাস জোগায়।',
    },
    behavior: {
      en: 'Flowers in spring (around March–April) and fruits in the monsoon. The buoyant fruits are dispersed by tides and germinate on newly deposited mud.',
      bn: 'বসন্তে (মোটামুটি মার্চ–এপ্রিলে) ফুল ফোটে এবং বর্ষায় ফল পাকে। ফল পানিতে ভেসে জোয়ার-ভাটায় ছড়িয়ে পড়ে এবং নতুন জমা পলিতে অঙ্কুরিত হয়।',
    },
    range: {
      native: [
        [22.1, 89.6],
        [22.3, 89.8],
        [21.95, 89.2],
        [22.2, 89.4],
        [22.0, 88.85],
        [20.7, 86.9],
        [16.0, 95.0],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Rising soil and water salinity, worsened by reduced freshwater flow', '"Top-dying" disease killing trees from the crown down', 'Sea-level rise and cyclones', 'Illegal logging'],
        bn: ['মিঠাপানির প্রবাহ কমে মাটি ও পানির লবণাক্ততা বৃদ্ধি', 'আগা-মরা ("টপ ডাইং") রোগে মাথা থেকে গাছ শুকিয়ে যাওয়া', 'সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি ও ঘূর্ণিঝড়', 'অবৈধভাবে গাছ কাটা'],
      },
      initiatives: {
        en: ['Ban on commercial felling in the Bangladesh Sundarbans', 'Sundarbans UNESCO World Heritage Site and Ramsar wetland status', 'Wildlife sanctuaries and forest patrols by the Bangladesh Forest Department', 'Mangrove research and replanting programmes'],
        bn: ['বাংলাদেশের সুন্দরবনে বাণিজ্যিকভাবে গাছ কাটায় নিষেধাজ্ঞা', 'সুন্দরবনের ইউনেস্কো বিশ্ব ঐতিহ্য ও রামসার জলাভূমির মর্যাদা', 'বন বিভাগের বন্যপ্রাণী অভয়ারণ্য ও বন টহল', 'ম্যানগ্রোভ গবেষণা ও পুনঃবনায়ন কর্মসূচি'],
      },
      assessed: '2010',
    },
    facts: {
      en: [
        '"Sundari" means "beautiful" in Bengali, and the Sundarbans is widely thought to be named after this tree.',
        'Its breathing roots can stick up 30 cm or more above the mud.',
        'Sundari wood is so dense and hard that it was traditionally prized for boat-building and electricity poles.',
      ],
      bn: [
        'বাংলায় "সুন্দরী" মানে রূপবতী; ধারণা করা হয়, এই গাছের নাম থেকেই "সুন্দরবন" নামের উৎপত্তি।',
        'এর শ্বাসমূল কাদার ওপর ৩০ সেমি বা তার বেশি উঁচু হয়ে থাকতে পারে।',
        'সুন্দরী কাঠ এত ঘন ও শক্ত যে নৌকা তৈরি ও বিদ্যুতের খুঁটির জন্য একসময় খুব কদর ছিল।',
      ],
    },
    related: ['royal-bengal-tiger', 'fishing-cat', 'irrawaddy-dolphin', 'banyan'],
  },
  {
    id: 'banyan',
    commonName: { en: 'Banyan', bn: 'বট' },
    scientificName: 'Ficus benghalensis',
    altNames: {
      en: ['Banyan Tree', 'Indian Banyan', 'Bengal Fig'],
      bn: ['বটগাছ', 'বটবৃক্ষ', 'বড় গাছ'],
    },
    synonyms: ['Ficus indica'],
    category: 'trees',
    wikiTitle: 'Ficus benghalensis',
    description: {
      en: 'The Banyan is a giant fig tree of the Indian subcontinent, famous for the aerial roots that drop from its branches, thicken into new trunks and let a single tree spread over a huge area. It is the national tree of India and a familiar landmark in Bangladeshi villages, where markets, meetings and festivals have long gathered in its shade. Its scientific name means "fig of Bengal". Banyans often begin life as a seed dropped by a bird onto another tree, sending roots down to the ground and eventually surrounding the host.',
      bn: 'বট ভারতীয় উপমহাদেশের বিশাল এক ডুমুরজাতীয় গাছ। এর ডাল থেকে নেমে আসা ঝুরিমূল মাটিতে পৌঁছে মোটা হয়ে নতুন কাণ্ডে পরিণত হয়, ফলে একটি গাছই বিশাল এলাকাজুড়ে ছড়িয়ে পড়তে পারে। বট ভারতের জাতীয় বৃক্ষ এবং বাংলাদেশের গ্রামে অতি পরিচিত — যুগ যুগ ধরে বটতলায় হাট, সালিশ ও মেলা বসে আসছে। এর বৈজ্ঞানিক নামের অর্থ "বাংলার ডুমুর"। প্রায়ই পাখির ফেলে যাওয়া বীজ থেকে অন্য গাছের ডালে এর জন্ম হয়; সেখান থেকে শিকড় মাটিতে নামিয়ে ধীরে ধীরে আশ্রয়দাতা গাছকে ঘিরে ফেলে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Rosales',
      family: 'Moraceae',
      genus: 'Ficus',
      species: 'F. benghalensis',
    },
    physical: {
      size: {
        en: 'Usually 20–25 m tall; a single tree’s canopy can spread over 1–2 hectares',
        bn: 'সাধারণত ২০–২৫ মিটার উঁচু; একটি গাছের ছাউনি ১–২ হেক্টর পর্যন্ত ছড়াতে পারে',
      },
      weight: {
        en: 'Not usually measured; the paired figs are about 1.5–2 cm across',
        bn: 'সাধারণত মাপা হয় না; জোড়ায় জোড়ায় ধরা ফল প্রায় ১.৫–২ সেমি চওড়া',
      },
      lifespan: {
        en: 'Perennial; can live for several hundred years',
        bn: 'বহুবর্ষজীবী; কয়েকশ বছর বাঁচতে পারে',
      },
      features: {
        en: [
          'Aerial prop roots that grow into extra trunks',
          'Large, leathery, oval leaves 10–20 cm long',
          'Small round figs that ripen bright red',
          'Milky latex in leaves and stems',
        ],
        bn: [
          'ঝুরিমূল, যা মাটিতে নেমে বাড়তি কাণ্ডে পরিণত হয়',
          'বড়, চামড়ার মতো পুরু, ডিম্বাকার পাতা; ১০–২০ সেমি লম্বা',
          'ছোট গোল ফল, পাকলে টকটকে লাল হয়',
          'পাতা ও ডালে দুধের মতো সাদা কষ',
        ],
      },
    },
    habitat: {
      en: 'Tropical deciduous and evergreen forests, riverbanks, villages, temples and roadsides',
      bn: 'ক্রান্তীয় পর্ণমোচী ও চিরসবুজ বন, নদীর পাড়, গ্রাম, মন্দির প্রাঙ্গণ ও রাস্তার ধার',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['south-asia'],
    distribution: {
      en: 'Native to the Indian subcontinent — Bangladesh, India, Pakistan, Nepal and Sri Lanka. Planted as an ornamental and shade tree in many tropical countries, including Hawaii and Florida.',
      bn: 'ভারতীয় উপমহাদেশের স্থানীয় গাছ — বাংলাদেশ, ভারত, পাকিস্তান, নেপাল ও শ্রীলঙ্কা। হাওয়াই ও ফ্লোরিডাসহ অনেক ক্রান্তীয় দেশে শোভাবর্ধক ও ছায়াদানকারী গাছ হিসেবে লাগানো হয়।',
    },
    climate: {
      en: 'Tropical and subtropical monsoon climates; frost-sensitive',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু; তুষারপাত সহ্য করতে পারে না',
    },
    diet: {
      en: 'Photosynthesis; when growing as an epiphyte it relies on rainwater and debris until its roots reach the soil',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; অন্য গাছের ওপর জন্মালে শিকড় মাটিতে পৌঁছানো পর্যন্ত বৃষ্টির পানি ও জমে থাকা জৈব আবর্জনার ওপর নির্ভর করে',
    },
    ecologicalRole: {
      en: 'A keystone species: its year-round figs feed birds such as barbets, hornbills and mynas, as well as fruit bats and monkeys, especially when other food is scarce.',
      bn: 'মূল প্রজাতি (কি-স্টোন): সারা বছর ধরা ফল বসন্তবৌরি, ধনেশ, শালিকসহ নানা পাখি, বাদুড় ও বানরের খাবার জোগায় — বিশেষ করে যখন অন্য খাবারের অভাব থাকে।',
    },
    behavior: {
      en: 'Its tiny flowers are hidden inside the fig and can only be pollinated by a specialised fig wasp, Eupristina masoni, in a partnership where each depends on the other. Birds and bats spread the seeds.',
      bn: 'এর ক্ষুদ্র ফুলগুলো ফলের ভেতরে লুকানো থাকে; কেবল একটি বিশেষ ডুমুর-বোলতা (Eupristina masoni) এদের পরাগায়ন ঘটাতে পারে — দুটি প্রজাতি একে অপরের ওপর নির্ভরশীল। পাখি ও বাদুড় বীজ ছড়ায়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [23.5, 89.2],
        [22.56, 88.29],
        [25.6, 85.1],
        [14.0, 77.9],
        [21.1, 79.1],
        [27.7, 85.3],
        [7.9, 80.7],
      ],
      introduced: [
        [20.87, -156.68],
        [26.6, -81.9],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Felling of old village trees for roads and development', 'Root damage from paving and construction'],
        bn: ['রাস্তা ও উন্নয়ন প্রকল্পের জন্য গ্রামের পুরোনো বটগাছ কেটে ফেলা', 'পাকা করা ও নির্মাণকাজে শিকড়ের ক্ষতি'],
      },
      initiatives: {
        en: ['Protection of heritage trees by local communities and religious sites', 'Planting in social forestry and urban greening'],
        bn: ['স্থানীয় জনগোষ্ঠী ও ধর্মীয় স্থানের মাধ্যমে ঐতিহ্যবাহী গাছ রক্ষা', 'সামাজিক বনায়ন ও নগর সবুজায়নে রোপণ'],
      },
    },
    facts: {
      en: [
        'The Great Banyan in the botanic garden near Kolkata covers about 1.9 hectares and has over 3,000 aerial roots; its original trunk was removed after decay.',
        'The word "banyan" comes from Gujarati traders (banias) who held meetings under these trees.',
        'A banyan in Lahaina, Hawaii, planted in 1873, survived the devastating 2023 wildfire.',
      ],
      bn: [
        'কলকাতার কাছে বোটানিক্যাল গার্ডেনের "দ্য গ্রেট ব্যানিয়ান" প্রায় ১.৯ হেক্টর জায়গাজুড়ে বিস্তৃত, ঝুরিমূল ৩,০০০-এর বেশি; পচন ধরায় এর মূল কাণ্ডটি কেটে ফেলতে হয়েছিল।',
        'ইংরেজি "ব্যানিয়ান" শব্দটি এসেছে গুজরাটি বণিক বা "বেনিয়া"দের থেকে, যাঁরা এই গাছের নিচে সভা করতেন।',
        'হাওয়াইয়ের লাহাইনায় ১৮৭৩ সালে লাগানো একটি বটগাছ ২০২৩ সালের ভয়াবহ দাবানলেও টিকে আছে।',
      ],
    },
    related: ['sundari', 'neem', 'african-baobab', 'holy-basil'],
  },
  {
    id: 'giant-sequoia',
    commonName: { en: 'Giant Sequoia', bn: 'জায়ান্ট সেকোইয়া' },
    scientificName: 'Sequoiadendron giganteum',
    altNames: {
      en: ['Sierra Redwood', 'Giant Redwood', 'Wellingtonia', 'Big Tree'],
      bn: ['সেকোইয়া', 'সিয়েরা রেডউড', 'দানব রেডউড', 'বিশাল সেকোইয়া'],
    },
    synonyms: ['Sequoia gigantea', 'Wellingtonia gigantea'],
    category: 'trees',
    wikiTitle: 'Sequoiadendron giganteum',
    description: {
      en: 'The Giant Sequoia is the most massive tree on Earth by volume. It grows only in about 70–80 scattered groves on the western slopes of the Sierra Nevada in California, where the largest individual, the General Sherman Tree, stands about 84 m tall. Some sequoias are more than 3,000 years old. Thick, fire-resistant bark has helped them survive millennia of natural fires, but recent extreme wildfires fuelled by drought and a century of fire suppression have killed a significant share of the large trees.',
      bn: 'জায়ান্ট সেকোইয়া আয়তনের দিক থেকে পৃথিবীর সবচেয়ে বিশাল গাছ। যুক্তরাষ্ট্রের ক্যালিফোর্নিয়ার সিয়েরা নেভাদা পর্বতের পশ্চিম ঢালে ছড়িয়ে থাকা মাত্র ৭০–৮০টি কুঞ্জে এরা জন্মায়। সবচেয়ে বড় গাছ "জেনারেল শেরম্যান" প্রায় ৮৪ মিটার উঁচু। কিছু সেকোইয়ার বয়স ৩,০০০ বছরেরও বেশি। পুরু, আগুন-সহনশীল বাকলের জোরে হাজার হাজার বছর ধরে এরা প্রাকৃতিক দাবানল সামলে টিকে আছে; কিন্তু খরা এবং প্রায় এক শতাব্দী ধরে দাবানল দমনের ফলে সাম্প্রতিক ভয়াবহ অগ্নিকাণ্ডে বড় গাছগুলোর উল্লেখযোগ্য অংশ মারা গেছে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Pinopsida',
      order: 'Pinales',
      family: 'Cupressaceae',
      genus: 'Sequoiadendron',
      species: 'S. giganteum',
    },
    physical: {
      size: {
        en: 'Typically 50–85 m tall (record about 95 m); trunk diameter 6–8 m at the base',
        bn: 'সাধারণত ৫০–৮৫ মিটার উঁচু (রেকর্ড প্রায় ৯৫ মিটার); গোড়ায় কাণ্ডের ব্যাস ৬–৮ মিটার',
      },
      weight: {
        en: 'The General Sherman Tree has a trunk volume of about 1,487 m³ and is estimated to weigh around 2,000 tonnes',
        bn: 'জেনারেল শেরম্যান গাছের কাণ্ডের আয়তন প্রায় ১,৪৮৭ ঘনমিটার; আনুমানিক ওজন প্রায় ২,০০০ টন',
      },
      lifespan: {
        en: 'Perennial; commonly 2,000+ years, with the oldest known over 3,000 years',
        bn: 'বহুবর্ষজীবী; প্রায়ই ২,০০০ বছরের বেশি বাঁচে, জানা সবচেয়ে প্রাচীন গাছের বয়স ৩,০০০ বছরের বেশি',
      },
      features: {
        en: [
          'Spongy, fibrous reddish-brown bark up to 60 cm thick',
          'Scale-like, awl-shaped blue-green leaves',
          'Small egg-shaped cones 4–7 cm long that can stay green on the tree for 20 years',
          'Massive, column-like trunk with few low branches on old trees',
        ],
        bn: [
          'নরম, আঁশযুক্ত লালচে-বাদামি বাকল, ৬০ সেমি পর্যন্ত পুরু',
          'আঁশের মতো, সুচালো নীলাভ-সবুজ পাতা',
          'ডিমাকৃতির ছোট মোচা, ৪–৭ সেমি লম্বা; গাছে ২০ বছর পর্যন্ত সবুজ থেকে যেতে পারে',
          'বিশাল স্তম্ভের মতো কাণ্ড; পুরোনো গাছের নিচের দিকে ডালপালা কম',
        ],
      },
    },
    habitat: {
      en: 'Mixed conifer forests on the western slopes of the Sierra Nevada at about 1,400–2,150 m elevation',
      bn: 'সিয়েরা নেভাদার পশ্চিম ঢালে প্রায় ১,৪০০–২,১৫০ মিটার উচ্চতার মিশ্র সরলবর্গীয় বন',
    },
    habitats: ['temperate-forest', 'mountain'],
    regions: ['north-america'],
    distribution: {
      en: 'Naturally restricted to a narrow belt about 420 km long in the Sierra Nevada, California, largely protected in Sequoia, Kings Canyon and Yosemite National Parks and Giant Sequoia National Monument. Widely planted in parks and estates in Europe, New Zealand and elsewhere.',
      bn: 'প্রাকৃতিকভাবে কেবল ক্যালিফোর্নিয়ার সিয়েরা নেভাদায় প্রায় ৪২০ কিলোমিটার দীর্ঘ সরু অঞ্চলে সীমাবদ্ধ; এর বড় অংশ সেকোইয়া, কিংস ক্যানিয়ন ও ইয়োসেমিটি জাতীয় উদ্যান এবং জায়ান্ট সেকোইয়া জাতীয় স্মারকে সংরক্ষিত। ইউরোপ, নিউজিল্যান্ডসহ নানা দেশের পার্ক ও বাগানে ব্যাপকভাবে লাগানো হয়েছে।',
    },
    climate: {
      en: 'Mediterranean mountain climate with dry summers and snowy winters; deep snowpack supplies summer moisture',
      bn: 'ভূমধ্যসাগরীয় ধাঁচের পার্বত্য জলবায়ু — গ্রীষ্ম শুষ্ক, শীতে তুষারপাত; গলিত তুষার গ্রীষ্মে আর্দ্রতা জোগায়',
    },
    diet: {
      en: 'Photosynthesis; a shallow but very wide root system (often spreading 30 m or more) gathers water and nutrients',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; অগভীর কিন্তু অত্যন্ত বিস্তৃত শিকড় (প্রায়ই ৩০ মিটার বা তার বেশি ছড়ানো) পানি ও পুষ্টি সংগ্রহ করে',
    },
    ecologicalRole: {
      en: 'Its huge trunks and crowns store enormous amounts of carbon and provide habitat for birds, squirrels, insects and lichens; fallen giants enrich the forest floor for centuries.',
      bn: 'বিশাল কাণ্ড ও ডালপালায় বিপুল পরিমাণ কার্বন জমা থাকে এবং পাখি, কাঠবিড়ালি, পোকামাকড় ও লাইকেনের আবাস জোগায়; পড়ে যাওয়া দানব গাছ শতাব্দীর পর শতাব্দী বনের মাটিকে উর্বর করে।',
    },
    behavior: {
      en: 'Depends on low-intensity fire to reproduce: heat dries and opens the cones, and fire clears the ground so tiny seeds can sprout in sunlight. Wind pollinated; cones are also opened by Douglas squirrels and longhorn beetles.',
      bn: 'বংশবিস্তারের জন্য মৃদু দাবানলের ওপর নির্ভরশীল: আগুনের তাপে মোচা শুকিয়ে খুলে যায়, আর আগুন মাটি পরিষ্কার করে দেয় যাতে ক্ষুদ্র বীজ রোদে অঙ্কুরিত হতে পারে। বাতাসের মাধ্যমে পরাগায়ন হয়; ডগলাস কাঠবিড়ালি ও লংহর্ন গুবরে পোকাও মোচা খুলতে সাহায্য করে।',
    },
    range: {
      native: [
        [36.58, -118.75],
        [36.74, -118.97],
        [37.5, -119.6],
        [36.05, -118.5],
        [38.28, -120.3],
        [36.2, -118.7],
      ],
      introduced: [
        [51.5, -1.3],
        [56.5, -3.5],
        [48.5, 9.0],
        [-38.1, 176.3],
      ],
      endemicTo: { en: 'Western Sierra Nevada, California, USA', bn: 'পশ্চিম সিয়েরা নেভাদা, ক্যালিফোর্নিয়া, যুক্তরাষ্ট্র' },
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      population: {
        en: 'Roughly 70,000–80,000 large sequoias (over about 1.2 m diameter) before the 2020–2021 fires, which killed an estimated 13–19% of them',
        bn: '২০২০–২০২১ সালের দাবানলের আগে প্রায় ৭০,০০০–৮০,০০০টি বড় সেকোইয়া (ব্যাস প্রায় ১.২ মিটারের বেশি) ছিল; সেই দাবানলে এর আনুমানিক ১৩–১৯ শতাংশ মারা যায়',
      },
      threats: {
        en: ['Extreme, high-severity wildfires', 'Drought and rising temperatures', 'Past logging and a century of fire suppression', 'Bark beetle attacks on drought-stressed trees'],
        bn: ['চরম ও তীব্র দাবানল', 'খরা ও তাপমাত্রা বৃদ্ধি', 'অতীতের গাছ কাটা ও এক শতাব্দী ধরে দাবানল দমন', 'খরায় দুর্বল গাছে বাকল-গুবরে পোকার আক্রমণ'],
      },
      initiatives: {
        en: ['Protection in Sequoia, Kings Canyon and Yosemite National Parks', 'Prescribed burning and fuel reduction around groves', 'Replanting of severely burned groves', 'Giant Sequoia Lands Coalition restoration work'],
        bn: ['সেকোইয়া, কিংস ক্যানিয়ন ও ইয়োসেমিটি জাতীয় উদ্যানে সংরক্ষণ', 'কুঞ্জের চারপাশে পরিকল্পিত অগ্নিসংযোগ ও দাহ্য পদার্থ সরানো', 'মারাত্মকভাবে পুড়ে যাওয়া কুঞ্জে নতুন চারা রোপণ', 'জায়ান্ট সেকোইয়া ল্যান্ডস কোয়ালিশনের পুনরুদ্ধার কার্যক্রম'],
      },
    },
    facts: {
      en: [
        'The General Sherman Tree is the largest known single-stem tree on Earth by volume.',
        'Its bark is rich in tannins, which help it resist fire, fungi and insects.',
        'A single mature tree may carry around 10,000–30,000 cones at once.',
      ],
      bn: [
        'আয়তনের দিক থেকে জেনারেল শেরম্যান পৃথিবীর জানা সবচেয়ে বড় একক-কাণ্ডের গাছ।',
        'এর বাকলে প্রচুর ট্যানিন থাকে, যা আগুন, ছত্রাক ও পোকামাকড় প্রতিরোধে সাহায্য করে।',
        'একটি পরিণত গাছে একসঙ্গে প্রায় ১০,০০০–৩০,০০০টি মোচা থাকতে পারে।',
      ],
    },
    related: ['african-baobab', 'banyan', 'bald-eagle'],
  },
  {
    id: 'african-baobab',
    commonName: { en: 'African Baobab', bn: 'আফ্রিকান বাওবাব' },
    scientificName: 'Adansonia digitata',
    altNames: {
      en: ['Baobab', 'Upside-down Tree', 'Monkey-bread Tree', 'Tree of Life'],
      bn: ['বাওবাব', 'উল্টো গাছ', 'বানর-রুটির গাছ', 'জীবনবৃক্ষ'],
    },
    category: 'trees',
    wikiTitle: 'Adansonia digitata',
    description: {
      en: 'The African Baobab is an iconic tree of the dry savannas of sub-Saharan Africa, with an enormous swollen trunk and stubby branches that, when leafless for much of the year, look like roots sticking up into the sky — hence the name "upside-down tree". It stores water in its spongy trunk to survive long droughts. Baobabs are among the longest-lived flowering trees: radiocarbon dating has shown some to be over 2,000 years old. The fruit pulp, rich in vitamin C, is eaten and traded across Africa, and leaves, seeds and bark all have traditional uses.',
      bn: 'আফ্রিকান বাওবাব সাহারার দক্ষিণের শুষ্ক সাভানার প্রতীকী গাছ। এর বিশাল ফোলা কাণ্ড আর খাটো ডালপালা বছরের বেশির ভাগ সময় পাতাহীন থাকে; তখন মনে হয় যেন শিকড়গুলো আকাশের দিকে উঠে আছে — তাই একে বলা হয় "উল্টো গাছ"। দীর্ঘ খরায় টিকে থাকতে এরা স্পঞ্জের মতো কাণ্ডে পানি জমিয়ে রাখে। সপুষ্পক উদ্ভিদের মধ্যে বাওবাব অন্যতম দীর্ঘজীবী — রেডিওকার্বন পরীক্ষায় কিছু গাছের বয়স ২,০০০ বছরেরও বেশি পাওয়া গেছে। ভিটামিন সি-সমৃদ্ধ এর ফলের শাঁস আফ্রিকাজুড়ে খাওয়া ও বেচাকেনা হয়, আর পাতা, বীজ ও বাকলেরও নানা প্রচলিত ব্যবহার আছে।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Malvales',
      family: 'Malvaceae',
      genus: 'Adansonia',
      species: 'A. digitata',
    },
    physical: {
      size: {
        en: '5–25 m tall with a trunk diameter of up to 10–14 m',
        bn: '৫–২৫ মিটার উঁচু; কাণ্ডের ব্যাস ১০–১৪ মিটার পর্যন্ত',
      },
      weight: {
        en: 'Not usually measured; the large woody fruits are 15–25 cm long, and a big tree can hold many thousands of litres of water in its trunk',
        bn: 'সাধারণত মাপা হয় না; শক্ত খোসার বড় ফল ১৫–২৫ সেমি লম্বা, আর একটি বড় গাছের কাণ্ডে হাজার হাজার লিটার পানি জমা থাকতে পারে',
      },
      lifespan: {
        en: 'Perennial; commonly several hundred years, with some individuals dated at over 2,000 years',
        bn: 'বহুবর্ষজীবী; সাধারণত কয়েকশ বছর বাঁচে, কিছু গাছের বয়স ২,০০০ বছরেরও বেশি নির্ণীত হয়েছে',
      },
      features: {
        en: [
          'Massive, smooth grey trunk that swells with stored water',
          'Hand-shaped (digitate) leaves with 5–7 leaflets',
          'Large, white, hanging flowers that open at night',
          'Velvety, oblong fruits filled with dry, powdery pulp',
        ],
        bn: [
          'বিশাল, মসৃণ ধূসর কাণ্ড, যা পানি জমিয়ে ফুলে ওঠে',
          'হাতের আঙুলের মতো ছড়ানো যৌগিক পাতা; ৫–৭টি পত্রক',
          'রাতে ফোটা বড়, সাদা, ঝুলন্ত ফুল',
          'মখমলের মতো খোসার লম্বাটে ফল, ভেতরে শুকনো গুঁড়োর মতো শাঁস',
        ],
      },
    },
    habitat: {
      en: 'Hot, dry savannas, open woodlands and rocky ground; often near villages, where many trees were planted or protected',
      bn: 'গরম ও শুষ্ক সাভানা, হালকা বনভূমি ও পাথুরে জমি; প্রায়ই গ্রামের কাছে দেখা যায়, যেখানে অনেক গাছ লাগানো বা রক্ষা করা হয়েছে',
    },
    habitats: ['grassland', 'desert', 'urban-farmland'],
    regions: ['africa'],
    distribution: {
      en: 'Widespread across the drier parts of sub-Saharan Africa, from Senegal and Sudan south to Namibia, Botswana, Zimbabwe and northern South Africa. Also planted in Madagascar, India, Sri Lanka and the Caribbean.',
      bn: 'সাহারার দক্ষিণে আফ্রিকার শুষ্ক অঞ্চলজুড়ে বিস্তৃত — সেনেগাল ও সুদান থেকে দক্ষিণে নামিবিয়া, বতসোয়ানা, জিম্বাবুয়ে ও উত্তর দক্ষিণ আফ্রিকা পর্যন্ত। মাদাগাস্কার, ভারত, শ্রীলঙ্কা ও ক্যারিবীয় অঞ্চলেও লাগানো হয়েছে।',
    },
    climate: {
      en: 'Hot semi-arid to dry tropical climate with a long dry season; frost-intolerant',
      bn: 'দীর্ঘ শুষ্ক মৌসুমসহ গরম আধা-শুষ্ক থেকে শুষ্ক ক্রান্তীয় জলবায়ু; তুষারপাত সহ্য করতে পারে না',
    },
    diet: {
      en: 'Photosynthesis; drops its leaves in the dry season and relies on water stored in its fibrous trunk',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; শুষ্ক মৌসুমে পাতা ঝরিয়ে ফেলে এবং আঁশযুক্ত কাণ্ডে জমানো পানির ওপর নির্ভর করে',
    },
    ecologicalRole: {
      en: 'Provides food, water and shelter for many animals: elephants strip its bark for moisture, fruit bats and bushbabies feed on its nectar, and birds nest in its hollows.',
      bn: 'অনেক প্রাণীর খাদ্য, পানি ও আশ্রয়ের উৎস: হাতি আর্দ্রতার জন্য এর বাকল ছিঁড়ে খায়, বাদুড় ও বুশবেবি ফুলের মধু খায়, আর পাখিরা এর কোটরে বাসা বাঁধে।',
    },
    behavior: {
      en: 'Leafless for up to 8–9 months of the year. Flowers open at dusk, last only about a day, and are pollinated mainly by fruit bats. Old trees often become hollow and can regrow after heavy bark damage.',
      bn: 'বছরে ৮–৯ মাস পর্যন্ত পাতাহীন থাকে। ফুল সন্ধ্যায় ফোটে, মাত্র এক দিনের মতো টেকে, আর মূলত বাদুড় পরাগায়ন ঘটায়। পুরোনো গাছ প্রায়ই ভেতর থেকে ফাঁপা হয়ে যায় এবং বাকলের বড় ক্ষতির পরও আবার সেরে উঠতে পারে।',
    },
    range: {
      native: [
        [14.7, -17.0],
        [13.5, 2.1],
        [13.0, 30.0],
        [-3.5, 36.0],
        [-6.2, 39.2],
        [-19.0, 23.5],
        [-18.0, 29.0],
        [-22.5, 31.0],
      ],
      introduced: [
        [22.35, 75.4],
        [8.98, 79.9],
        [-15.7, 46.3],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Climate change and prolonged droughts — several of the oldest baobabs have died since 2005', 'Elephant damage where elephants are confined to small reserves', 'Poor regeneration due to livestock grazing on seedlings'],
        bn: ['জলবায়ু পরিবর্তন ও দীর্ঘ খরা — ২০০৫ সালের পর থেকে সবচেয়ে প্রাচীন কয়েকটি বাওবাব মারা গেছে', 'ছোট সংরক্ষিত এলাকায় আটকে থাকা হাতির আঘাত', 'গবাদিপশু চারা খেয়ে ফেলায় নতুন গাছ কম জন্মানো'],
      },
      initiatives: {
        en: ['Community protection of heritage baobabs', 'Sustainable fruit-pulp trade giving local people income to protect trees', 'Nursery planting and research on regeneration'],
        bn: ['স্থানীয় জনগোষ্ঠীর মাধ্যমে ঐতিহ্যবাহী বাওবাব রক্ষা', 'টেকসই ফল-শাঁস বাণিজ্য, যা স্থানীয়দের আয় জোগায় এবং গাছ রক্ষায় উৎসাহ দেয়', 'নার্সারিতে চারা উৎপাদন ও পুনর্জন্ম নিয়ে গবেষণা'],
      },
    },
    facts: {
      en: [
        'Baobab fruit pulp contains several times more vitamin C than oranges by weight.',
        'Hollow baobabs have been used as shelters, storage rooms and even a prison.',
        'Unlike most trees, the baobab’s trunk can expand and shrink with the amount of water it holds.',
      ],
      bn: [
        'ওজনের হিসাবে বাওবাব ফলের শাঁসে কমলার চেয়ে কয়েক গুণ বেশি ভিটামিন সি থাকে।',
        'ফাঁপা বাওবাব গাছ আশ্রয়স্থল, গুদামঘর, এমনকি কারাগার হিসেবেও ব্যবহৃত হয়েছে।',
        'বেশির ভাগ গাছের বিপরীতে, বাওবাবের কাণ্ড পানির পরিমাণ অনুযায়ী ফুলে ওঠে ও সংকুচিত হয়।',
      ],
    },
    related: ['giant-sequoia', 'banyan', 'aloe-vera', 'asian-elephant'],
  },
];
