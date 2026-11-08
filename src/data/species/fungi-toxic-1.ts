import type { Species } from '@/types';

export const fungiToxic1: Species[] = [
  {
    id: 'death-cap',
    commonName: { en: 'Death Cap', bn: 'ডেথ ক্যাপ' },
    scientificName: 'Amanita phalloides',
    altNames: {
      en: ['Death Cap Mushroom', 'Deadly Amanita'],
      bn: ['মৃত্যু-টুপি মাশরুম', 'প্রাণঘাতী অ্যামানিটা'],
    },
    category: 'fungi',
    wikiTitle: 'Amanita phalloides',
    description: {
      en: 'The death cap is the most dangerous mushroom in the world and is responsible for the majority of fatal mushroom poisonings. It contains amatoxins, which are not destroyed by cooking, freezing or drying and which destroy liver cells. Symptoms begin only hours after the meal, often followed by a deceptive "recovery" before liver and kidney failure. Native to Europe, it has spread with imported trees to North America, Australia and other continents.',
      bn: 'ডেথ ক্যাপ পৃথিবীর সবচেয়ে বিপজ্জনক মাশরুম; মাশরুম খেয়ে মৃত্যুর বেশিরভাগ ঘটনার জন্য এটিই দায়ী। এতে অ্যামাটক্সিন নামের বিষ থাকে, যা রান্না, জমানো বা শুকানোতেও নষ্ট হয় না এবং যকৃতের কোষ ধ্বংস করে। খাওয়ার কয়েক ঘণ্টা পর উপসর্গ শুরু হয়, প্রায়ই মাঝে একটি প্রতারণাপূর্ণ "সেরে ওঠা" দশা আসে, তারপর যকৃৎ ও কিডনি বিকল হয়ে যায়। এটি ইউরোপের স্থানীয় প্রজাতি, তবে আমদানি করা গাছের সঙ্গে উত্তর আমেরিকা, অস্ট্রেলিয়াসহ অন্যান্য মহাদেশে ছড়িয়ে পড়েছে।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Amanitaceae',
      genus: 'Amanita',
      species: 'A. phalloides',
    },
    physical: {
      size: {
        en: 'Cap 5–15 cm across; stem 8–15 cm tall',
        bn: 'টুপি ৫–১৫ সেমি চওড়া; ডাঁটা ৮–১৫ সেমি লম্বা',
      },
      weight: {
        en: 'A single mushroom — even half of one — can contain enough toxin to kill an adult',
        bn: 'একটি মাশরুম — এমনকি তার অর্ধেকেও — একজন প্রাপ্তবয়স্ক মানুষকে মেরে ফেলার মতো বিষ থাকতে পারে',
      },
      lifespan: {
        en: 'Fruit bodies last about a week; the mycelium lives for years with its host tree',
        bn: 'মাশরুম প্রায় এক সপ্তাহ টেকে; মাইসেলিয়াম আশ্রয়দাতা গাছের সঙ্গে বহু বছর বাঁচে',
      },
      features: {
        en: [
          'Olive-green to yellowish cap, sometimes almost white',
          'White gills, a skirt-like ring on the stem and a sac-like cup (volva) at the base',
          'Young "egg" stage can be mistaken for puffballs or straw mushrooms',
        ],
        bn: [
          'জলপাই-সবুজ থেকে হলদেটে টুপি, কখনো প্রায় সাদা',
          'সাদা গিল, ডাঁটায় ঘাগরার মতো আংটি এবং গোড়ায় থলির মতো পেয়ালা (ভলভা)',
          'কচি "ডিম" অবস্থাকে পাফবল বা খড় মাশরুম বলে ভুল হতে পারে',
        ],
      },
    },
    habitat: {
      en: 'Broadleaf woodland, parks and gardens, mostly under oak, beech, chestnut and other hosts',
      bn: 'চওড়া পাতার বন, পার্ক ও বাগান; সাধারণত ওক, বিচ, চেস্টনাট ও অন্যান্য গাছের নিচে',
    },
    habitats: ['temperate-forest', 'urban-farmland'],
    regions: ['europe', 'north-america', 'oceania', 'africa'],
    distribution: {
      en: 'Native to Europe, from Scandinavia to the Mediterranean; introduced with trees to North America, Australia, New Zealand, South Africa and elsewhere.',
      bn: 'স্ক্যান্ডিনেভিয়া থেকে ভূমধ্যসাগর পর্যন্ত ইউরোপের স্থানীয় প্রজাতি; গাছের সঙ্গে উত্তর আমেরিকা, অস্ট্রেলিয়া, নিউজিল্যান্ড, দক্ষিণ আফ্রিকা ও অন্যান্য স্থানে ছড়িয়েছে।',
    },
    climate: {
      en: 'Temperate; fruits mainly in late summer and autumn after rain',
      bn: 'নাতিশীতোষ্ণ; প্রধানত গ্রীষ্মের শেষ ও শরৎকালে বৃষ্টির পর গজায়',
    },
    diet: {
      en: 'Ectomycorrhizal — exchanges soil nutrients with tree roots for sugars',
      bn: 'এক্টোমাইকোরাইজাল — গাছের শিকড়কে মাটির পুষ্টি দিয়ে বিনিময়ে শর্করা নেয়',
    },
    ecologicalRole: {
      en: 'A root partner of many trees, helping them absorb water and minerals.',
      bn: 'বহু গাছের শিকড়ের সঙ্গী হিসেবে গাছকে পানি ও খনিজ শোষণে সাহায্য করে।',
    },
    behavior: {
      en: 'Emerges from a white egg-like universal veil; it smells faintly sweet at first and unpleasant with age.',
      bn: 'সাদা ডিমের মতো আবরণ ভেদ করে বের হয়; শুরুতে হালকা মিষ্টি গন্ধ থাকে, বয়স বাড়লে গন্ধ অপ্রীতিকর হয়।',
    },
    range: {
      native: [
        [51.5, 0.0],
        [48.8, 2.3],
        [50.0, 10.0],
        [45.0, 10.0],
        [40.4, -3.7],
        [55.7, 13.2],
        [44.4, 26.1],
      ],
      introduced: [
        [37.8, -122.3],
        [42.4, -71.1],
        [-35.3, 149.1],
        [-33.9, 18.4],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened — common and spreading to new continents', 'Its spread is itself a public-health concern'],
        bn: ['বিপন্ন নয় — সাধারণ এবং নতুন মহাদেশে ছড়িয়ে পড়ছে', 'এর বিস্তার নিজেই জনস্বাস্থ্যের জন্য উদ্বেগের বিষয়'],
      },
      initiatives: {
        en: ['Public warnings in areas where it has been introduced', 'Poison-centre guidance for early hospital treatment'],
        bn: ['যেসব এলাকায় এটি ছড়িয়েছে সেখানে জনসাধারণকে সতর্কবার্তা', 'দ্রুত হাসপাতালে চিকিৎসার জন্য বিষ নিয়ন্ত্রণ কেন্দ্রের নির্দেশনা'],
      },
    },
    facts: {
      en: [
        'Cooking, boiling, freezing or drying does not make the death cap safe.',
        'The Roman emperor Claudius is often said to have been killed with death caps, though this cannot be proven.',
        'Anyone who may have eaten a wild mushroom and feels sick should go to hospital at once — early treatment saves lives.',
      ],
      bn: [
        'রান্না, সেদ্ধ, জমানো বা শুকানো — কোনোভাবেই ডেথ ক্যাপ নিরাপদ হয় না।',
        'প্রায়ই বলা হয় রোমান সম্রাট ক্লডিয়াসকে ডেথ ক্যাপ খাইয়ে হত্যা করা হয়েছিল, যদিও তা প্রমাণ করা যায় না।',
        'বুনো মাশরুম খেয়ে অসুস্থ বোধ করলে সঙ্গে সঙ্গে হাসপাতালে যান — দ্রুত চিকিৎসা জীবন বাঁচায়।',
      ],
    },
    related: ['destroying-angel', 'fly-agaric', 'straw-mushroom', 'button-mushroom', 'funeral-bell'],
  },
  {
    id: 'destroying-angel',
    commonName: { en: 'Destroying Angel', bn: 'ডেস্ট্রয়িং এঞ্জেল' },
    scientificName: 'Amanita virosa',
    altNames: {
      en: ['European Destroying Angel', 'White Death Cap'],
      bn: ['ইউরোপীয় ডেস্ট্রয়িং এঞ্জেল', 'সাদা ডেথ ক্যাপ'],
    },
    category: 'fungi',
    wikiTitle: 'Amanita virosa',
    description: {
      en: 'The European destroying angel is a pure white, elegant mushroom that is as deadly as its close relative the death cap. It contains the same amatoxins that cause delayed, often fatal liver failure. Because it is entirely white, it is easily confused with edible white mushrooms such as young button mushrooms or puffballs. Similar white destroying angels occur in North America and Asia.',
      bn: 'ইউরোপীয় ডেস্ট্রয়িং এঞ্জেল ধবধবে সাদা, দেখতে সুন্দর একটি মাশরুম, কিন্তু এর নিকটাত্মীয় ডেথ ক্যাপের মতোই প্রাণঘাতী। এতে একই অ্যামাটক্সিন থাকে, যা দেরিতে শুরু হওয়া এবং প্রায়ই মারাত্মক যকৃৎ বিকলতা ঘটায়। পুরোটা সাদা হওয়ায় একে সহজেই কচি বাটন মাশরুম বা পাফবলের মতো খাওয়ার উপযোগী সাদা মাশরুম বলে ভুল হয়। উত্তর আমেরিকা ও এশিয়াতেও এমন সাদা প্রাণঘাতী অ্যামানিটা পাওয়া যায়।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Amanitaceae',
      genus: 'Amanita',
      species: 'A. virosa',
    },
    physical: {
      size: {
        en: 'Cap 5–12 cm across, often conical at first; stem 9–15 cm tall',
        bn: 'টুপি ৫–১২ সেমি চওড়া, শুরুতে প্রায়ই মোচাকৃতি; ডাঁটা ৯–১৫ সেমি লম্বা',
      },
      weight: {
        en: 'A slender mushroom; even a small amount can be fatal',
        bn: 'সরু গড়নের মাশরুম; সামান্য পরিমাণ খেলেও মৃত্যু হতে পারে',
      },
      lifespan: {
        en: 'Fruit bodies last several days; the mycelium is long-lived with its host trees',
        bn: 'মাশরুম কয়েক দিন টেকে; মাইসেলিয়াম আশ্রয়দাতা গাছের সঙ্গে দীর্ঘদিন বাঁচে',
      },
      features: {
        en: [
          'Entirely white cap, gills and stem',
          'Shaggy, scaly stem with a fragile ring',
          'Bag-like volva at the base, often hidden in soil or moss',
        ],
        bn: [
          'টুপি, গিল ও ডাঁটা — সবই সাদা',
          'ডাঁটা আঁশযুক্ত ও খসখসে, তাতে ভঙ্গুর আংটি',
          'গোড়ায় থলির মতো ভলভা, যা প্রায়ই মাটি বা শ্যাওলার নিচে লুকিয়ে থাকে',
        ],
      },
    },
    habitat: {
      en: 'Mixed and coniferous woodland on acidic soils, often with birch, spruce and pine',
      bn: 'অম্লীয় মাটির মিশ্র ও সরলবর্গীয় বন; প্রায়ই বার্চ, স্প্রুস ও পাইনের সঙ্গে',
    },
    habitats: ['temperate-forest'],
    regions: ['europe'],
    distribution: {
      en: 'Europe, more common in the north including Scandinavia and Scotland; related white Amanitas occur in North America and East Asia.',
      bn: 'ইউরোপ, বিশেষ করে স্ক্যান্ডিনেভিয়া ও স্কটল্যান্ডসহ উত্তরাঞ্চলে বেশি দেখা যায়; উত্তর আমেরিকা ও পূর্ব এশিয়ায় এর আত্মীয় সাদা অ্যামানিটা পাওয়া যায়।',
    },
    climate: {
      en: 'Cool temperate; fruits from summer to autumn',
      bn: 'শীতল নাতিশীতোষ্ণ; গ্রীষ্ম থেকে শরৎকাল পর্যন্ত গজায়',
    },
    diet: {
      en: 'Ectomycorrhizal with broadleaf and coniferous trees',
      bn: 'চওড়া পাতার ও সরলবর্গীয় গাছের সঙ্গে এক্টোমাইকোরাইজাল সম্পর্ক',
    },
    ecologicalRole: {
      en: 'Supplies trees with water and nutrients through a shared root network.',
      bn: 'শিকড়ের যৌথ জালের মাধ্যমে গাছকে পানি ও পুষ্টি জোগায়।',
    },
    behavior: {
      en: 'Grows singly or scattered on the forest floor; the cap stays white even as it ages.',
      bn: 'বনের মেঝেতে একা বা ছড়িয়ে-ছিটিয়ে জন্মায়; বয়স বাড়লেও টুপি সাদাই থাকে।',
    },
    range: {
      native: [
        [57.0, -4.0],
        [60.0, 15.0],
        [62.0, 25.0],
        [51.0, 10.0],
        [52.0, 20.0],
        [47.0, 8.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['No major threats known', 'Loss of old forest affects local populations'],
        bn: ['বড় কোনো হুমকি জানা নেই', 'পুরোনো বন কমে গেলে স্থানীয়ভাবে সংখ্যা কমে'],
      },
      initiatives: {
        en: ['Poison-awareness campaigns by mycological societies', 'Field guides stressing that all white Amanitas must be avoided'],
        bn: ['ছত্রাকবিদ্যা সমিতির বিষ-সচেতনতা প্রচার', 'মাঠ-নির্দেশিকায় সব সাদা অ্যামানিটা এড়িয়ে চলার পরামর্শ'],
      },
    },
    facts: {
      en: [
        'Its name "virosa" means poisonous.',
        'A drop of potassium hydroxide turns its cap yellow, a test used by mycologists.',
        'Never eat a white mushroom with a ring and a cup at the base — always dig up the whole base before identifying.',
      ],
      bn: [
        'এর নাম "virosa" অর্থ বিষাক্ত।',
        'পটাশিয়াম হাইড্রোক্সাইডের এক ফোঁটা দিলে এর টুপি হলুদ হয়ে যায় — ছত্রাকবিদেরা এই পরীক্ষা ব্যবহার করেন।',
        'আংটি ও গোড়ায় পেয়ালাসহ কোনো সাদা মাশরুম কখনো খাবেন না — শনাক্ত করার আগে পুরো গোড়াসহ তুলে দেখুন।',
      ],
    },
    related: ['death-cap', 'fly-agaric', 'button-mushroom'],
  },
  {
    id: 'false-morel',
    commonName: { en: 'False Morel', bn: 'নকল মোরেল' },
    scientificName: 'Gyromitra esculenta',
    altNames: {
      en: ['Brain Mushroom', 'Beefsteak Morel', 'Turban Fungus'],
      bn: ['মগজ মাশরুম', 'বিফস্টেক মোরেল', 'পাগড়ি ছত্রাক'],
    },
    category: 'fungi',
    wikiTitle: 'Gyromitra esculenta',
    description: {
      en: 'The false morel is a spring mushroom with a wrinkled, brain-like reddish-brown cap that can be mistaken for true morels. It contains gyromitrin, which the body converts into monomethylhydrazine — a compound also used as rocket fuel — causing vomiting, seizures, liver damage and sometimes death. Despite this, it is traditionally eaten in Finland and parts of Scandinavia after repeated boiling, a practice that is still risky, since even the cooking fumes can poison.',
      bn: 'নকল মোরেল বসন্তকালের একটি মাশরুম; এর লালচে-বাদামি, কুঁচকানো মগজের মতো টুপির কারণে একে আসল মোরেল বলে ভুল হয়। এতে জাইরোমিট্রিন থাকে, যা শরীরে মনোমিথাইলহাইড্রাজিনে পরিণত হয় — রকেটের জ্বালানিতেও এই যৌগ ব্যবহৃত হয় — ফলে বমি, খিঁচুনি, যকৃতের ক্ষতি এমনকি মৃত্যুও ঘটতে পারে। তবু ফিনল্যান্ড ও স্ক্যান্ডিনেভিয়ার কিছু অংশে কয়েকবার সেদ্ধ করে এটি প্রথাগতভাবে খাওয়া হয়; এটিও ঝুঁকিপূর্ণ, কারণ রান্নার ভাপেও বিষক্রিয়া হতে পারে।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Ascomycota',
      class: 'Pezizomycetes',
      order: 'Pezizales',
      family: 'Discinaceae',
      genus: 'Gyromitra',
      species: 'G. esculenta',
    },
    physical: {
      size: {
        en: 'Cap up to about 10 cm tall and 15 cm wide; short, thick stem',
        bn: 'টুপি প্রায় ১০ সেমি পর্যন্ত উঁচু ও ১৫ সেমি পর্যন্ত চওড়া; ডাঁটা খাটো ও মোটা',
      },
      weight: {
        en: 'Fleshy but hollow inside; usually tens of grams',
        bn: 'মাংসল কিন্তু ভেতরে ফাঁপা; সাধারণত কয়েক দশ গ্রাম',
      },
      lifespan: {
        en: 'Fruit bodies appear for a few weeks in spring',
        bn: 'বসন্তে কয়েক সপ্তাহ ধরে মাশরুম দেখা যায়',
      },
      features: {
        en: [
          'Reddish-brown, wrinkled, brain-like cap',
          'Cap folds are irregular, not neatly pitted like a true morel',
          'Cut lengthwise, it shows chambered cottony tissue rather than one clean hollow',
        ],
        bn: [
          'লালচে-বাদামি, কুঁচকানো, মগজের মতো টুপি',
          'টুপির ভাঁজ এলোমেলো — আসল মোরেলের মতো সুশৃঙ্খল গর্ত নয়',
          'লম্বালম্বি কাটলে ভেতরে একটি পরিষ্কার ফাঁপা জায়গার বদলে তুলার মতো প্রকোষ্ঠ দেখা যায়',
        ],
      },
    },
    habitat: {
      en: 'Sandy soils in coniferous forests, especially under pine, and in disturbed forest ground',
      bn: 'সরলবর্গীয় বনের বালুময় মাটি, বিশেষ করে পাইনের নিচে, এবং ক্ষতিগ্রস্ত বনভূমি',
    },
    habitats: ['temperate-forest'],
    regions: ['europe', 'north-america'],
    distribution: {
      en: 'Northern Europe and North America, most abundant in Scandinavia and the Alps and in northern coniferous forests.',
      bn: 'উত্তর ইউরোপ ও উত্তর আমেরিকা; স্ক্যান্ডিনেভিয়া, আল্পস ও উত্তরের সরলবর্গীয় বনে সবচেয়ে বেশি পাওয়া যায়।',
    },
    climate: {
      en: 'Cool temperate to boreal; fruits in spring as snow melts',
      bn: 'শীতল নাতিশীতোষ্ণ থেকে তুন্দ্রা-নিকটবর্তী বনাঞ্চল; বরফ গলার সময় বসন্তে গজায়',
    },
    diet: {
      en: 'Mainly saprotrophic on decaying wood and litter; possibly also mycorrhizal',
      bn: 'প্রধানত পচা কাঠ ও ঝরা পাতায় মৃতজীবী; সম্ভবত মাইকোরাইজালও',
    },
    ecologicalRole: {
      en: 'Helps decompose woody debris on the forest floor.',
      bn: 'বনের মেঝের কাঠের টুকরো পচাতে সাহায্য করে।',
    },
    behavior: {
      en: 'Appears early in spring, often at the same time as true morels, which makes confusion more likely.',
      bn: 'বসন্তের শুরুতে দেখা দেয়, প্রায়ই আসল মোরেলের সঙ্গে একই সময়ে — তাই ভুল হওয়ার আশঙ্কা বাড়ে।',
    },
    range: {
      native: [
        [61.0, 25.0],
        [60.0, 15.0],
        [52.0, 20.0],
        [47.0, 10.0],
        [45.0, -90.0],
        [47.0, -122.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['No major threats known', 'Forestry changes affect local fruiting'],
        bn: ['বড় কোনো হুমকি জানা নেই', 'বনায়ন পদ্ধতির পরিবর্তনে স্থানীয়ভাবে ফলন প্রভাবিত হয়'],
      },
      initiatives: {
        en: ['Finland requires warning labels and preparation instructions when it is sold', 'Public health advice not to eat it in many countries'],
        bn: ['ফিনল্যান্ডে বিক্রির সময় সতর্কবার্তা ও রান্নার নির্দেশনা দেওয়া বাধ্যতামূলক', 'অনেক দেশে এটি না খাওয়ার জনস্বাস্থ্য পরামর্শ'],
      },
    },
    facts: {
      en: [
        'Its scientific name "esculenta" means edible — a dangerous misnomer.',
        'Gyromitrin breaks down into monomethylhydrazine, a component of some rocket fuels.',
        'It is an ascomycete, more closely related to cup fungi and truffles than to ordinary gilled mushrooms.',
      ],
      bn: [
        'এর বৈজ্ঞানিক নাম "esculenta" অর্থ খাওয়ার উপযোগী — একটি বিপজ্জনক ভুল নাম।',
        'জাইরোমিট্রিন ভেঙে মনোমিথাইলহাইড্রাজিন হয়, যা কিছু রকেট জ্বালানির উপাদান।',
        'এটি একটি অ্যাসকোমাইসিট ছত্রাক — সাধারণ গিলওয়ালা মাশরুমের চেয়ে পেয়ালা-ছত্রাক ও ট্রাফলের বেশি নিকটাত্মীয়।',
      ],
    },
    related: ['black-morel', 'black-truffle', 'death-cap'],
  },
  {
    id: 'funeral-bell',
    commonName: { en: 'Funeral Bell', bn: 'ফিউনারেল বেল' },
    scientificName: 'Galerina marginata',
    altNames: {
      en: ['Deadly Galerina', 'Autumn Skullcap', 'Autumn Galerina'],
      bn: ['প্রাণঘাতী গ্যালেরিনা', 'শরৎ খুলিটুপি', 'শরৎ গ্যালেরিনা'],
    },
    synonyms: ['Galerina autumnalis'],
    category: 'fungi',
    wikiTitle: 'Galerina marginata',
    description: {
      en: 'The funeral bell is a small, ordinary-looking brown mushroom that grows on rotting wood and contains the same deadly amatoxins as the death cap. Its plain appearance makes it easy to confuse with edible wood-growing mushrooms such as honey fungus, sheathed woodtuft and wild enoki, and with hallucinogenic Psilocybe species. It is found in forests across much of the Northern Hemisphere and also in Australia.',
      bn: 'ফিউনারেল বেল দেখতে সাধারণ একটি ছোট বাদামি মাশরুম, যা পচা কাঠে জন্মায়; অথচ এতে ডেথ ক্যাপের মতোই প্রাণঘাতী অ্যামাটক্সিন থাকে। সাদামাটা চেহারার কারণে একে সহজেই হানি ফাঙ্গাস, বুনো এনোকির মতো কাঠে জন্মানো খাওয়ার উপযোগী মাশরুম কিংবা মনোবিকারক সাইলোসাইবি প্রজাতি বলে ভুল হয়। উত্তর গোলার্ধের বেশিরভাগ বনে এবং অস্ট্রেলিয়াতেও এটি পাওয়া যায়।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Hymenogastraceae',
      genus: 'Galerina',
      species: 'G. marginata',
    },
    physical: {
      size: {
        en: 'Cap about 2–4 cm across; thin stem 2–6 cm tall',
        bn: 'টুপি প্রায় ২–৪ সেমি চওড়া; সরু ডাঁটা ২–৬ সেমি লম্বা',
      },
      weight: {
        en: 'Only a few grams each, but a handful can be fatal',
        bn: 'একেকটি মাত্র কয়েক গ্রাম, কিন্তু এক মুঠো খেলে মৃত্যু হতে পারে',
      },
      lifespan: {
        en: 'Fruit bodies last a few days; the mycelium lives in a log until the wood is used up',
        bn: 'মাশরুম কয়েক দিন টেকে; কাঠ শেষ না হওয়া পর্যন্ত মাইসেলিয়াম গুঁড়িতে বেঁচে থাকে',
      },
      features: {
        en: [
          'Small honey-brown to tan cap that fades as it dries',
          'Rusty-brown spore print and a thin ring on the stem',
          'Grows singly or in small clusters on dead wood',
        ],
        bn: [
          'ছোট মধু-বাদামি থেকে হালকা বাদামি টুপি, শুকালে রং ফিকে হয়',
          'মরিচা-বাদামি রেণুর ছাপ এবং ডাঁটায় পাতলা আংটি',
          'মরা কাঠে একা বা ছোট গুচ্ছে জন্মায়',
        ],
      },
    },
    habitat: {
      en: 'Rotting logs and stumps of conifers and broadleaf trees, and buried wood in forests',
      bn: 'বনে সরলবর্গীয় ও চওড়া পাতার গাছের পচা গুঁড়ি, গাছের গোড়া ও মাটিচাপা কাঠ',
    },
    habitats: ['temperate-forest'],
    regions: ['europe', 'north-america', 'east-asia', 'oceania'],
    distribution: {
      en: 'Widespread in the Northern Hemisphere — Europe, North America and northern Asia — and also recorded in Australia.',
      bn: 'উত্তর গোলার্ধে বিস্তৃত — ইউরোপ, উত্তর আমেরিকা ও উত্তর এশিয়া — এবং অস্ট্রেলিয়াতেও পাওয়া গেছে।',
    },
    climate: {
      en: 'Temperate to boreal; fruits mainly in autumn, sometimes in spring',
      bn: 'নাতিশীতোষ্ণ থেকে শীতল উত্তরাঞ্চলীয়; প্রধানত শরতে, কখনো বসন্তেও গজায়',
    },
    diet: {
      en: 'Saprotrophic — it decomposes dead wood',
      bn: 'মৃতজীবী — মরা কাঠ পচিয়ে পুষ্টি নেয়',
    },
    ecologicalRole: {
      en: 'Breaks down logs and stumps, returning nutrients to forest soil.',
      bn: 'গাছের গুঁড়ি ও গোড়া পচিয়ে বনের মাটিতে পুষ্টি ফিরিয়ে দেয়।',
    },
    behavior: {
      en: 'Often fruits on the same logs as edible species, sometimes side by side with them.',
      bn: 'প্রায়ই খাওয়ার উপযোগী প্রজাতির সঙ্গে একই গুঁড়িতে, কখনো পাশাপাশি জন্মায়।',
    },
    range: {
      native: [
        [51.0, 10.0],
        [60.0, 15.0],
        [55.0, 37.0],
        [45.0, -75.0],
        [47.0, -122.0],
        [43.0, 141.0],
        [-37.8, 145.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened — common on dead wood', 'Removal of dead wood reduces local habitat'],
        bn: ['বিপন্ন নয় — মরা কাঠে সাধারণ', 'মরা কাঠ সরিয়ে ফেলায় স্থানীয় আবাস কমে'],
      },
      initiatives: {
        en: ['Foraging guides warning about "little brown mushrooms" on wood', 'Poison-centre advice on look-alikes of honey fungus'],
        bn: ['কাঠে জন্মানো "ছোট বাদামি মাশরুম" নিয়ে সংগ্রহ-নির্দেশিকার সতর্কবার্তা', 'হানি ফাঙ্গাসের সদৃশ মাশরুম নিয়ে বিষ নিয়ন্ত্রণ কেন্দ্রের পরামর্শ'],
      },
    },
    facts: {
      en: [
        'It contains the same amatoxins as the death cap.',
        'Older names such as Galerina autumnalis are now treated as the same species.',
        'Never eat "little brown mushrooms" from wood without expert identification — many look almost identical.',
      ],
      bn: [
        'এতে ডেথ ক্যাপের মতোই অ্যামাটক্সিন থাকে।',
        'Galerina autumnalis-এর মতো পুরোনো নামগুলোকে এখন একই প্রজাতি ধরা হয়।',
        'বিশেষজ্ঞের শনাক্তকরণ ছাড়া কাঠে জন্মানো "ছোট বাদামি মাশরুম" কখনো খাবেন না — অনেকগুলো দেখতে প্রায় হুবহু এক।',
      ],
    },
    related: ['honey-fungus', 'enoki', 'death-cap', 'magic-mushroom'],
  },
  {
    id: 'deadly-webcap',
    commonName: { en: 'Deadly Webcap', bn: 'ডেডলি ওয়েবক্যাপ' },
    scientificName: 'Cortinarius rubellus',
    altNames: {
      en: ['Deadly Cort', 'Foxy Orange Webcap'],
      bn: ['প্রাণঘাতী কর্টিনেরিয়াস', 'কমলা মাকড়জাল-টুপি'],
    },
    synonyms: ['Cortinarius speciosissimus', 'Cortinarius orellanoides'],
    category: 'fungi',
    wikiTitle: 'Cortinarius rubellus',
    description: {
      en: 'The deadly webcap is an orange-brown mushroom of northern conifer forests that contains orellanine, a toxin that attacks the kidneys. Its danger lies in the delay: symptoms usually begin two to three days after eating and can take up to three weeks, by which time kidney damage may be permanent and dialysis or a transplant needed. Young webcaps have a cobweb-like veil (cortina) under the cap, which gives the genus its name.',
      bn: 'ডেডলি ওয়েবক্যাপ উত্তরের সরলবর্গীয় বনের একটি কমলা-বাদামি মাশরুম; এতে ওরেলানিন নামের বিষ থাকে, যা কিডনিতে আঘাত করে। এর বিপদ লুকিয়ে আছে দেরিতে: উপসর্গ সাধারণত খাওয়ার দুই-তিন দিন পর শুরু হয়, কখনো তিন সপ্তাহ পর্যন্ত লাগে — ততক্ষণে কিডনির ক্ষতি স্থায়ী হয়ে যেতে পারে এবং ডায়ালাইসিস বা কিডনি প্রতিস্থাপন প্রয়োজন হয়। কচি অবস্থায় টুপির নিচে মাকড়সার জালের মতো আবরণ (কর্টিনা) থাকে, এ থেকেই গণের নাম।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Cortinariaceae',
      genus: 'Cortinarius',
      species: 'C. rubellus',
    },
    physical: {
      size: {
        en: 'Cap about 2.5–8 cm across, often with a pointed centre; stem 5–12 cm tall',
        bn: 'টুপি প্রায় ২.৫–৮ সেমি চওড়া, মাঝখানটা প্রায়ই সুচালো; ডাঁটা ৫–১২ সেমি লম্বা',
      },
      weight: {
        en: 'A medium-sized, fairly slender mushroom',
        bn: 'মাঝারি আকারের, বেশ সরু গড়নের মাশরুম',
      },
      lifespan: {
        en: 'Fruit bodies last about a week; the mycelium lives with its host trees for many years',
        bn: 'মাশরুম প্রায় এক সপ্তাহ টেকে; মাইসেলিয়াম আশ্রয়দাতা গাছের সঙ্গে বহু বছর বাঁচে',
      },
      features: {
        en: [
          'Tawny orange to rusty-brown cap with a small central bump',
          'Stem marked with yellowish bands from the remains of the veil',
          'Rusty-brown spore print',
        ],
        bn: [
          'হলদে-কমলা থেকে মরিচা-বাদামি টুপি, মাঝখানে ছোট উঁচু ঢিবি',
          'আবরণের অবশেষ থেকে ডাঁটায় হলদেটে ডোরা',
          'মরিচা-বাদামি রেণুর ছাপ',
        ],
      },
    },
    habitat: {
      en: 'Damp, mossy coniferous forests, especially under spruce and pine on acidic soils',
      bn: 'স্যাঁতসেঁতে, শ্যাওলায় ঢাকা সরলবর্গীয় বন, বিশেষ করে অম্লীয় মাটিতে স্প্রুস ও পাইনের নিচে',
    },
    habitats: ['temperate-forest'],
    regions: ['europe', 'north-america'],
    distribution: {
      en: 'Northern and central Europe, including Scandinavia and Scotland, and parts of North America.',
      bn: 'স্ক্যান্ডিনেভিয়া ও স্কটল্যান্ডসহ উত্তর ও মধ্য ইউরোপ এবং উত্তর আমেরিকার কিছু অংশ।',
    },
    climate: {
      en: 'Cool temperate to boreal; fruits in late summer and autumn',
      bn: 'শীতল নাতিশীতোষ্ণ থেকে উত্তরাঞ্চলীয় শীতল বন; গ্রীষ্মের শেষ ও শরৎকালে গজায়',
    },
    diet: {
      en: 'Ectomycorrhizal with conifers',
      bn: 'সরলবর্গীয় গাছের সঙ্গে এক্টোমাইকোরাইজাল সম্পর্ক',
    },
    ecologicalRole: {
      en: 'A root partner of spruce and pine, aiding their uptake of nutrients.',
      bn: 'স্প্রুস ও পাইনের শিকড়ের সঙ্গী হিসেবে তাদের পুষ্টি গ্রহণে সাহায্য করে।',
    },
    behavior: {
      en: 'Fruits among moss and bilberry in conifer woods, often in the same places as edible chanterelles.',
      bn: 'সরলবর্গীয় বনে শ্যাওলা ও বিলবেরির ঝোপের মধ্যে গজায়, প্রায়ই খাওয়ার উপযোগী শ্যান্টারেলের একই জায়গায়।',
    },
    range: {
      native: [
        [57.0, -4.5],
        [60.0, 15.0],
        [62.0, 25.0],
        [61.0, 9.0],
        [50.0, 12.0],
        [47.0, -122.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Clear-felling of old conifer forests', 'Nitrogen pollution, which harms many mycorrhizal fungi'],
        bn: ['পুরোনো সরলবর্গীয় বন একসঙ্গে কেটে ফেলা', 'নাইট্রোজেন দূষণ, যা অনেক মাইকোরাইজাল ছত্রাকের ক্ষতি করে'],
      },
      initiatives: {
        en: ['Poison-awareness information from national food agencies', 'Research into treatments for orellanine poisoning'],
        bn: ['জাতীয় খাদ্য সংস্থার বিষ-সচেতনতামূলক তথ্য', 'ওরেলানিন বিষক্রিয়ার চিকিৎসা নিয়ে গবেষণা'],
      },
    },
    facts: {
      en: [
        'In 2008 the British novelist Nicholas Evans and members of his family suffered kidney failure after eating deadly webcaps in Scotland.',
        'The toxin orellanine fluoresces under ultraviolet light.',
        'There is no antidote — never eat brown or orange mushrooms from conifer woods without expert identification.',
      ],
      bn: [
        '২০০৮ সালে স্কটল্যান্ডে ডেডলি ওয়েবক্যাপ খেয়ে ব্রিটিশ ঔপন্যাসিক নিকোলাস ইভান্স ও তাঁর পরিবারের কয়েকজনের কিডনি বিকল হয়ে যায়।',
        'ওরেলানিন বিষ অতিবেগুনি আলোতে উজ্জ্বল হয়ে জ্বলে।',
        'এর কোনো প্রতিষেধক নেই — বিশেষজ্ঞের শনাক্তকরণ ছাড়া সরলবর্গীয় বনের বাদামি বা কমলা মাশরুম কখনো খাবেন না।',
      ],
    },
    related: ['golden-chanterelle', 'porcini', 'death-cap'],
  },
  {
    id: 'magic-mushroom',
    commonName: { en: 'Magic Mushroom', bn: 'ম্যাজিক মাশরুম' },
    scientificName: 'Psilocybe cubensis',
    altNames: {
      en: ['Golden Teacher', 'Gold Cap', 'Cubensis', 'Shroom'],
      bn: ['গোল্ডেন টিচার', 'সোনালি টুপি', 'কিউবেনসিস', 'শ্রুম'],
    },
    synonyms: ['Stropharia cubensis'],
    category: 'fungi',
    wikiTitle: 'Psilocybe cubensis',
    description: {
      en: 'Psilocybe cubensis is the best-known "magic mushroom", a dung-loving species of warm regions that contains the hallucinogens psilocybin and psilocin. These compounds can cause intense changes in perception, panic and dangerous behaviour, and the mushroom is illegal to possess in many countries. Psilocybin is being studied in controlled clinical trials for depression, but wild picking is hazardous because deadly look-alikes such as Galerina also exist.',
      bn: 'Psilocybe cubensis সবচেয়ে পরিচিত "ম্যাজিক মাশরুম"; উষ্ণ অঞ্চলের এই প্রজাতি গবাদিপশুর গোবরে জন্মায় এবং এতে সাইলোসাইবিন ও সাইলোসিন নামের মনোবিকারক যৌগ থাকে। এসব যৌগ অনুভূতিতে তীব্র পরিবর্তন, আতঙ্ক ও বিপজ্জনক আচরণ ঘটাতে পারে, এবং বহু দেশে এই মাশরুম রাখা বেআইনি। বিষণ্নতার চিকিৎসায় নিয়ন্ত্রিত ক্লিনিক্যাল পরীক্ষায় সাইলোসাইবিন নিয়ে গবেষণা চলছে, তবে বুনো মাশরুম তোলা বিপজ্জনক, কারণ গ্যালেরিনার মতো প্রাণঘাতী সদৃশ মাশরুমও আছে।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Hymenogastraceae',
      genus: 'Psilocybe',
      species: 'P. cubensis',
    },
    physical: {
      size: {
        en: 'Cap about 1.5–8 cm across; stem 4–15 cm tall',
        bn: 'টুপি প্রায় ১.৫–৮ সেমি চওড়া; ডাঁটা ৪–১৫ সেমি লম্বা',
      },
      weight: {
        en: 'Typically a few grams to about 20 g fresh',
        bn: 'তাজা অবস্থায় সাধারণত কয়েক গ্রাম থেকে প্রায় ২০ গ্রাম',
      },
      lifespan: {
        en: 'Fruit bodies last only a few days before collapsing',
        bn: 'মাশরুম মাত্র কয়েক দিন টিকে থাকে, তারপর নেতিয়ে পড়ে',
      },
      features: {
        en: [
          'Golden-brown to cinnamon cap, paler towards the edge',
          'Dark purple-brown spore print and a membranous ring on the white stem',
          'Flesh bruises blue when handled',
        ],
        bn: [
          'সোনালি-বাদামি থেকে দারুচিনি রঙের টুপি, কিনারার দিকে ফিকে',
          'গাঢ় বেগুনি-বাদামি রেণুর ছাপ এবং সাদা ডাঁটায় পর্দার মতো আংটি',
          'হাতে চাপ লাগলে মাংসল অংশ নীল হয়ে যায়',
        ],
      },
    },
    habitat: {
      en: 'Cattle and other herbivore dung in pastures, and dung-enriched soil',
      bn: 'চারণভূমিতে গরু ও অন্যান্য তৃণভোজী প্রাণীর গোবর এবং গোবরমিশ্রিত মাটি',
    },
    habitats: ['grassland', 'urban-farmland'],
    regions: ['north-america', 'south-america', 'southeast-asia', 'south-asia', 'oceania'],
    distribution: {
      en: 'Pantropical and subtropical, including the Gulf Coast of the USA, Mexico, the Caribbean, South America, South and Southeast Asia and Australia.',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় অঞ্চলজুড়ে — যুক্তরাষ্ট্রের উপসাগরীয় উপকূল, মেক্সিকো, ক্যারিবীয় অঞ্চল, দক্ষিণ আমেরিকা, দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়া এবং অস্ট্রেলিয়া।',
    },
    climate: {
      en: 'Warm and humid; fruits in the rainy season',
      bn: 'উষ্ণ ও আর্দ্র; বর্ষাকালে গজায়',
    },
    diet: {
      en: 'Saprotrophic — it decomposes dung',
      bn: 'মৃতজীবী — গোবর পচিয়ে পুষ্টি নেয়',
    },
    ecologicalRole: {
      en: 'Breaks down herbivore dung, returning nutrients to pasture soil.',
      bn: 'তৃণভোজী প্রাণীর গোবর পচিয়ে চারণভূমির মাটিতে পুষ্টি ফিরিয়ে দেয়।',
    },
    behavior: {
      en: 'Fruits within days of warm rain on fresh dung; its spread is thought to be linked to the spread of cattle.',
      bn: 'উষ্ণ বৃষ্টির পর তাজা গোবরে কয়েক দিনের মধ্যে গজায়; ধারণা করা হয়, গবাদিপশুর বিস্তারের সঙ্গে এরও বিস্তার ঘটেছে।',
    },
    range: {
      native: [
        [22.0, -80.0],
        [19.0, -96.0],
        [29.5, -95.0],
        [5.0, -74.0],
        [-15.0, -47.0],
        [16.0, 100.0],
        [-27.5, 153.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened — common wherever cattle graze', 'Changes in livestock farming affect local occurrence'],
        bn: ['বিপন্ন নয় — যেখানে গবাদিপশু চরে সেখানেই সাধারণ', 'পশুপালন পদ্ধতির পরিবর্তনে স্থানীয় উপস্থিতি প্রভাবিত হয়'],
      },
      initiatives: {
        en: ['Controlled medical research on psilocybin', 'Drug laws restricting possession in many countries'],
        bn: ['সাইলোসাইবিন নিয়ে নিয়ন্ত্রিত চিকিৎসা গবেষণা', 'বহু দেশে এটি রাখা নিষিদ্ধ করে মাদক আইন'],
      },
    },
    facts: {
      en: [
        'It was first described scientifically in 1906 from Cuba, hence the name "cubensis".',
        'The blue bruising comes from the breakdown of psilocin.',
        'Possessing it is a criminal offence in many countries, and eating wild "magic mushrooms" risks mistaking deadly species for them.',
      ],
      bn: [
        '১৯০৬ সালে কিউবা থেকে এর প্রথম বৈজ্ঞানিক বর্ণনা দেওয়া হয়, তাই নাম "cubensis"।',
        'নীল দাগ পড়ে সাইলোসিন ভেঙে যাওয়ার কারণে।',
        'বহু দেশে এটি রাখা ফৌজদারি অপরাধ, আর বুনো "ম্যাজিক মাশরুম" খেলে প্রাণঘাতী প্রজাতিকে ভুল করে খাওয়ার ঝুঁকি থাকে।',
      ],
    },
    related: ['funeral-bell', 'ergot', 'fly-agaric'],
  },
  {
    id: 'ergot',
    commonName: { en: 'Ergot', bn: 'আরগট' },
    scientificName: 'Claviceps purpurea',
    altNames: {
      en: ['Ergot Fungus', 'Rye Ergot', "St. Anthony's Fire"],
      bn: ['আরগট ছত্রাক', 'রাইয়ের আরগট', 'সেন্ট অ্যান্থনির আগুন'],
    },
    category: 'fungi',
    wikiTitle: 'Claviceps purpurea',
    description: {
      en: 'Ergot is a fungus that infects the flowers of rye, wheat, barley and wild grasses, replacing grains with hard, dark purple-black bodies called sclerotia. These contain ergot alkaloids that cause ergotism — burning pain, gangrene of the limbs, convulsions and hallucinations — which struck medieval Europe in epidemics known as "St. Anthony\'s Fire". The same alkaloids gave medicine drugs for childbirth bleeding and migraine, and LSD was first made from them.',
      bn: 'আরগট একটি ছত্রাক, যা রাই, গম, বার্লি ও বুনো ঘাসের ফুলে সংক্রমণ ঘটায় এবং দানার জায়গায় শক্ত, গাঢ় বেগুনি-কালো স্ক্লেরোশিয়াম তৈরি করে। এতে আরগট অ্যালকালয়েড থাকে, যা আরগটিজম রোগ ঘটায় — জ্বালাপোড়া ব্যথা, হাত-পায়ে পচন (গ্যাংগ্রিন), খিঁচুনি ও অলীক দর্শন; মধ্যযুগের ইউরোপে "সেন্ট অ্যান্থনির আগুন" নামে এর মহামারি হতো। এই অ্যালকালয়েড থেকেই প্রসবকালীন রক্তক্ষরণ ও মাইগ্রেনের ওষুধ পাওয়া গেছে, আর প্রথম এলএসডিও তৈরি হয়েছিল এ থেকে।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Ascomycota',
      class: 'Sordariomycetes',
      order: 'Hypocreales',
      family: 'Clavicipitaceae',
      genus: 'Claviceps',
      species: 'C. purpurea',
    },
    physical: {
      size: {
        en: 'Horn-like sclerotia, on rye often 1–3 cm long; tiny drumstick-shaped fruit bodies a few millimetres across',
        bn: 'শিংয়ের মতো স্ক্লেরোশিয়াম, রাইয়ে প্রায়ই ১–৩ সেমি লম্বা; ঢোলের কাঠির মতো ক্ষুদ্র মাশরুম মাত্র কয়েক মিলিমিটার চওড়া',
      },
      weight: {
        en: 'Each sclerotium weighs a fraction of a gram',
        bn: 'প্রতিটি স্ক্লেরোশিয়ামের ওজন এক গ্রামেরও কম',
      },
      lifespan: {
        en: 'Sclerotia survive the winter in soil and germinate in spring; the cycle repeats each year',
        bn: 'স্ক্লেরোশিয়াম শীতকাল মাটিতে টিকে থাকে এবং বসন্তে অঙ্কুরিত হয়; প্রতি বছর এই চক্র চলে',
      },
      features: {
        en: [
          'Dark purple-black, horn-shaped sclerotia sticking out of grass or cereal ears',
          'In spring, sclerotia sprout small purple stalks with round heads',
          'Early infection produces a sticky "honeydew" that attracts insects',
        ],
        bn: [
          'ঘাস বা শস্যের শিষ থেকে বেরিয়ে থাকা গাঢ় বেগুনি-কালো শিংয়ের মতো স্ক্লেরোশিয়াম',
          'বসন্তে স্ক্লেরোশিয়াম থেকে গোল মাথাওয়ালা ছোট বেগুনি ডাঁটা বের হয়',
          'সংক্রমণের শুরুতে আঠালো মিষ্টি রস ("হানিডিউ") তৈরি হয়, যা পোকামাকড় আকর্ষণ করে',
        ],
      },
    },
    habitat: {
      en: 'Cereal fields and grasslands, on rye, wheat, barley, triticale and many wild grasses',
      bn: 'শস্যক্ষেত ও তৃণভূমি; রাই, গম, বার্লি, ট্রিটিকেলি ও বহু বুনো ঘাসে',
    },
    habitats: ['grassland', 'urban-farmland'],
    regions: ['europe', 'north-america', 'east-asia', 'oceania'],
    distribution: {
      en: 'Worldwide in temperate regions wherever its grass and cereal hosts grow.',
      bn: 'বিশ্বের নাতিশীতোষ্ণ অঞ্চলজুড়ে, যেখানে এর আশ্রয়দাতা ঘাস ও শস্য জন্মায়।',
    },
    climate: {
      en: 'Temperate; infections are worst in cool, wet springs during flowering',
      bn: 'নাতিশীতোষ্ণ; ফুল ফোটার সময় শীতল ও ভেজা বসন্তে সংক্রমণ সবচেয়ে বেশি হয়',
    },
    diet: {
      en: 'Parasitic — it infects the ovaries of grass flowers and feeds on the developing grain',
      bn: 'পরজীবী — ঘাসফুলের গর্ভাশয়ে সংক্রমণ ঘটিয়ে গঠনরত দানা থেকে পুষ্টি নেয়',
    },
    ecologicalRole: {
      en: 'A plant pathogen that reduces grain yield and contaminates food and fodder.',
      bn: 'উদ্ভিদের রোগজীবাণু; শস্যের ফলন কমায় এবং খাদ্য ও পশুখাদ্য দূষিত করে।',
    },
    behavior: {
      en: 'Spores released from spring fruit bodies are carried by wind; insects then spread the honeydew spores from flower to flower.',
      bn: 'বসন্তের মাশরুম থেকে ছড়ানো রেণু বাতাসে ভেসে যায়; পরে পোকামাকড় হানিডিউয়ের রেণু এক ফুল থেকে আরেক ফুলে ছড়ায়।',
    },
    range: {
      native: [
        [52.0, 20.0],
        [51.0, 10.0],
        [48.8, 2.3],
        [55.7, 37.6],
        [60.0, 15.0],
        [45.0, -95.0],
        [52.0, -106.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened — a widespread crop disease', 'Controlled by crop rotation, deep ploughing and grain cleaning'],
        bn: ['বিপন্ন নয় — ব্যাপকভাবে বিস্তৃত শস্যরোগ', 'শস্য-আবর্তন, গভীর চাষ ও দানা পরিষ্কারের মাধ্যমে নিয়ন্ত্রণ করা হয়'],
      },
      initiatives: {
        en: ['Legal limits on ergot sclerotia and alkaloids in grain and flour', 'Breeding cereals with shorter, less exposed flowering'],
        bn: ['দানা ও আটায় আরগট ও অ্যালকালয়েডের আইনি সীমা', 'কম সময় খোলা থাকে এমন ফুলের শস্য জাত উদ্ভাবন'],
      },
    },
    facts: {
      en: [
        'Swiss chemist Albert Hofmann first made LSD from ergot alkaloids in 1938.',
        'Midwives once used ergot to speed childbirth; the drug ergometrine is still used to stop bleeding after birth.',
        'Some historians have proposed ergot poisoning behind the Salem witch trials, but this idea is disputed.',
      ],
      bn: [
        '১৯৩৮ সালে সুইস রসায়নবিদ আলবার্ট হফম্যান আরগট অ্যালকালয়েড থেকে প্রথম এলএসডি তৈরি করেন।',
        'একসময় ধাত্রীরা প্রসব দ্রুত করতে আরগট ব্যবহার করতেন; প্রসবের পর রক্তক্ষরণ থামাতে আরগোমেট্রিন ওষুধ আজও ব্যবহৃত হয়।',
        'কিছু ইতিহাসবিদ সালেমের ডাইনি বিচারের পেছনে আরগট বিষক্রিয়ার কথা বলেছেন, তবে এই ধারণা বিতর্কিত।',
      ],
    },
    related: ['common-wheat', 'zombie-ant-fungus', 'cordyceps-militaris', 'magic-mushroom'],
  },
  {
    id: 'jack-o-lantern-mushroom',
    commonName: { en: "Jack-o'-Lantern Mushroom", bn: 'জ্যাক-ও-ল্যান্টার্ন মাশরুম' },
    scientificName: 'Omphalotus olearius',
    altNames: {
      en: ['Jack-o-Lantern', 'Olive Tree Mushroom', 'Glowing Mushroom'],
      bn: ['জ্যাক-ও-ল্যান্টার্ন', 'জলপাই গাছের মাশরুম', 'জ্বলজ্বলে মাশরুম'],
    },
    category: 'fungi',
    wikiTitle: 'Omphalotus olearius',
    description: {
      en: 'The jack-o\'-lantern is a bright orange mushroom that grows in clusters on the stumps and roots of olive, oak and other broadleaf trees in southern Europe. Its gills glow faintly green in the dark. It contains toxins called illudins that cause severe vomiting, cramps and diarrhoea, and it is often mistaken for the edible chanterelle, which grows singly on soil and has blunt ridges instead of true gills.',
      bn: 'জ্যাক-ও-ল্যান্টার্ন উজ্জ্বল কমলা রঙের একটি মাশরুম, যা দক্ষিণ ইউরোপে জলপাই, ওক ও অন্যান্য চওড়া পাতার গাছের গুঁড়ি ও শিকড়ে গুচ্ছ বেঁধে জন্মায়। অন্ধকারে এর গিল থেকে হালকা সবুজ আভা বের হয়। এতে ইলুডিন নামের বিষ থাকে, যা তীব্র বমি, পেটে খিঁচুনি ও ডায়রিয়া ঘটায়; প্রায়ই একে খাওয়ার উপযোগী শ্যান্টারেল বলে ভুল হয়, যদিও শ্যান্টারেল মাটিতে একা জন্মায় এবং তাতে আসল গিলের বদলে ভোঁতা ভাঁজ থাকে।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Omphalotaceae',
      genus: 'Omphalotus',
      species: 'O. olearius',
    },
    physical: {
      size: {
        en: 'Caps usually 5–15 cm across, funnel-shaped with age; stems 5–15 cm long',
        bn: 'টুপি সাধারণত ৫–১৫ সেমি চওড়া, বয়স বাড়লে ফানেলের মতো; ডাঁটা ৫–১৫ সেমি লম্বা',
      },
      weight: {
        en: 'Clusters can weigh well over a kilogram',
        bn: 'একেকটি গুচ্ছের ওজন এক কেজিরও বেশি হতে পারে',
      },
      lifespan: {
        en: 'Clusters last one to two weeks; the mycelium persists in roots for years',
        bn: 'গুচ্ছ এক থেকে দুই সপ্তাহ টেকে; মাইসেলিয়াম শিকড়ে বহু বছর থাকে',
      },
      features: {
        en: [
          'Bright orange to orange-brown caps in dense clusters',
          'True, crowded gills that run down the stem and glow faintly in darkness',
          'Grows from wood or buried roots, not directly from soil',
        ],
        bn: [
          'ঘন গুচ্ছে উজ্জ্বল কমলা থেকে কমলা-বাদামি টুপি',
          'ঘন, আসল গিল ডাঁটা বেয়ে নেমে আসে এবং অন্ধকারে হালকা জ্বলে',
          'মাটি থেকে নয়, কাঠ বা মাটিচাপা শিকড় থেকে জন্মায়',
        ],
      },
    },
    habitat: {
      en: 'Stumps, trunk bases and buried roots of olive, oak, chestnut and other broadleaf trees',
      bn: 'জলপাই, ওক, চেস্টনাট ও অন্যান্য চওড়া পাতার গাছের গুঁড়ি, কাণ্ডের গোড়া ও মাটিচাপা শিকড়',
    },
    habitats: ['temperate-forest', 'urban-farmland'],
    regions: ['europe'],
    distribution: {
      en: 'Southern and central Europe, especially around the Mediterranean in olive groves and oak woods.',
      bn: 'দক্ষিণ ও মধ্য ইউরোপ, বিশেষ করে ভূমধ্যসাগরের চারপাশের জলপাই বাগান ও ওক বনে।',
    },
    climate: {
      en: 'Warm temperate, Mediterranean; fruits in late summer and autumn',
      bn: 'উষ্ণ নাতিশীতোষ্ণ, ভূমধ্যসাগরীয়; গ্রীষ্মের শেষ ও শরৎকালে গজায়',
    },
    diet: {
      en: 'Saprotrophic and weakly parasitic on broadleaf wood',
      bn: 'চওড়া পাতার গাছের কাঠে মৃতজীবী ও মৃদু পরজীবী',
    },
    ecologicalRole: {
      en: 'Decays the roots and stumps of old trees, recycling wood nutrients.',
      bn: 'পুরোনো গাছের শিকড় ও গুঁড়ি পচিয়ে কাঠের পুষ্টি পুনর্চক্রায়ন করে।',
    },
    behavior: {
      en: 'Its gills give off a faint green bioluminescent glow, visible only in near-total darkness.',
      bn: 'এর গিল থেকে হালকা সবুজ জৈব-আলো বের হয়, যা প্রায় সম্পূর্ণ অন্ধকারেই কেবল দেখা যায়।',
    },
    range: {
      native: [
        [43.5, 4.0],
        [42.0, 12.5],
        [40.0, -4.0],
        [38.0, 23.0],
        [45.5, 15.0],
        [47.0, 8.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['No major threats known', 'Removal of old olive trees and stumps'],
        bn: ['বড় কোনো হুমকি জানা নেই', 'পুরোনো জলপাই গাছ ও গুঁড়ি সরিয়ে ফেলা'],
      },
      initiatives: {
        en: ['Poison-centre warnings about chanterelle look-alikes', 'Pharmaceutical research on illudin derivatives'],
        bn: ['শ্যান্টারেল-সদৃশ মাশরুম নিয়ে বিষ নিয়ন্ত্রণ কেন্দ্রের সতর্কবার্তা', 'ইলুডিন থেকে তৈরি যৌগ নিয়ে ওষুধ গবেষণা'],
      },
    },
    facts: {
      en: [
        'The name "olearius" refers to the olive trees on which it often grows.',
        'Irofulven, an experimental cancer drug, was derived from the mushroom toxin illudin S.',
        'Poisoning is rarely fatal but very unpleasant — it is a common cause of mistaken chanterelle meals.',
      ],
      bn: [
        '"olearius" নামটি জলপাই গাছকে বোঝায়, যাতে এটি প্রায়ই জন্মায়।',
        'পরীক্ষাধীন ক্যানসার-ওষুধ ইরোফুলভেন মাশরুমের বিষ ইলুডিন এস থেকে তৈরি।',
        'বিষক্রিয়ায় মৃত্যু কদাচিৎ হয়, তবে খুব কষ্টকর — শ্যান্টারেল ভেবে ভুল করে খাওয়ার একটি সাধারণ কারণ এটি।',
      ],
    },
    related: ['golden-chanterelle', 'olive', 'honey-fungus', 'english-oak'],
  },
  {
    id: 'green-spored-parasol',
    commonName: { en: 'Green-spored Parasol', bn: 'সবুজ-রেণু ছাতা মাশরুম' },
    scientificName: 'Chlorophyllum molybdites',
    altNames: {
      en: ['False Parasol', 'Green-spored Lepiota', "Vomiter"],
      bn: ['নকল ছাতা মাশরুম', 'সবুজ-রেণু লেপিওটা', 'বমি-মাশরুম'],
    },
    synonyms: ['Lepiota molybdites', 'Chlorophyllum esculentum'],
    category: 'fungi',
    wikiTitle: 'Chlorophyllum molybdites',
    description: {
      en: 'The green-spored parasol is a large white mushroom with brownish scales that often appears in rings on lawns, parks and fields after monsoon rains. It is widespread in tropical and subtropical regions, including Bangladesh and India, and is the most frequently eaten poisonous mushroom in North America. It causes severe vomiting and diarrhoea within a few hours; the sure sign is a green spore print and gills that turn greyish-green with age.',
      bn: 'সবুজ-রেণু ছাতা মাশরুম বাদামি আঁশযুক্ত বড় একটি সাদা মাশরুম, যা বর্ষার বৃষ্টির পর লন, পার্ক ও মাঠে প্রায়ই গোল বৃত্ত বেঁধে গজায়। বাংলাদেশ ও ভারতসহ ক্রান্তীয় ও উপক্রান্তীয় অঞ্চলে এটি ব্যাপকভাবে পাওয়া যায়, এবং উত্তর আমেরিকায় সবচেয়ে বেশি খাওয়া বিষাক্ত মাশরুম এটিই। খাওয়ার কয়েক ঘণ্টার মধ্যে তীব্র বমি ও ডায়রিয়া হয়; নিশ্চিত চেনার উপায় হলো সবুজ রেণুর ছাপ এবং বয়স বাড়লে গিলের ধূসর-সবুজ রং।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Agaricales',
      family: 'Agaricaceae',
      genus: 'Chlorophyllum',
      species: 'C. molybdites',
    },
    physical: {
      size: {
        en: 'Cap about 7–30 cm across when open; stem 5–30 cm tall',
        bn: 'খোলা টুপি প্রায় ৭–৩০ সেমি চওড়া; ডাঁটা ৫–৩০ সেমি লম্বা',
      },
      weight: {
        en: 'A large, heavy mushroom; big specimens can weigh a few hundred grams',
        bn: 'বড় ও ভারী মাশরুম; বড়গুলোর ওজন কয়েকশো গ্রাম হতে পারে',
      },
      lifespan: {
        en: 'Fruit bodies last a few days; the mycelium spreads outward in lawns for years',
        bn: 'মাশরুম কয়েক দিন টেকে; মাইসেলিয়াম লনে বছরের পর বছর বাইরের দিকে ছড়ায়',
      },
      features: {
        en: [
          'White cap with a brown centre that breaks into coarse brown scales',
          'Gills white at first, turning greyish-green; green spore print',
          'A thick, movable double ring on the stem',
        ],
        bn: [
          'সাদা টুপি, মাঝখানে বাদামি অংশ যা ভেঙে মোটা বাদামি আঁশ হয়',
          'গিল প্রথমে সাদা, পরে ধূসর-সবুজ; রেণুর ছাপ সবুজ',
          'ডাঁটায় মোটা, নড়ানো যায় এমন দুই স্তরের আংটি',
        ],
      },
    },
    habitat: {
      en: 'Lawns, pastures, parks, roadsides and other grassy places, often in fairy rings',
      bn: 'লন, চারণভূমি, পার্ক, রাস্তার ধার ও অন্যান্য ঘাসযুক্ত জায়গা, প্রায়ই পরি-বৃত্তে',
    },
    habitats: ['grassland', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'north-america', 'south-america', 'africa', 'oceania'],
    distribution: {
      en: 'Tropical and subtropical regions worldwide, including Bangladesh, India and Southeast Asia, eastern and southern USA, Latin America, Africa and Australia.',
      bn: 'বিশ্বের ক্রান্তীয় ও উপক্রান্তীয় অঞ্চল — বাংলাদেশ, ভারত ও দক্ষিণ-পূর্ব এশিয়া, যুক্তরাষ্ট্রের পূর্ব ও দক্ষিণাঞ্চল, লাতিন আমেরিকা, আফ্রিকা ও অস্ট্রেলিয়া।',
    },
    climate: {
      en: 'Warm and humid; fruits after heavy summer or monsoon rain',
      bn: 'উষ্ণ ও আর্দ্র; গ্রীষ্ম বা বর্ষার ভারী বৃষ্টির পর গজায়',
    },
    diet: {
      en: 'Saprotrophic — it decomposes organic matter in grassy soil',
      bn: 'মৃতজীবী — ঘাসযুক্ত মাটির জৈব পদার্থ পচিয়ে পুষ্টি নেয়',
    },
    ecologicalRole: {
      en: 'Recycles nutrients in grasslands; its fairy rings mark where the mycelium is growing outward.',
      bn: 'তৃণভূমিতে পুষ্টি পুনর্চক্রায়ন করে; এর পরি-বৃত্ত দেখায় মাইসেলিয়াম কোথায় বাইরের দিকে বাড়ছে।',
    },
    behavior: {
      en: 'Appears suddenly in rings or arcs on lawns after rain, sometimes in large numbers.',
      bn: 'বৃষ্টির পর লনে হঠাৎ বৃত্ত বা অর্ধবৃত্ত বেঁধে, কখনো অনেক সংখ্যায় দেখা দেয়।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.5, 88.4],
        [13.7, 100.5],
        [28.0, -82.0],
        [19.4, -99.1],
        [-23.5, -46.6],
        [-1.3, 36.8],
        [-27.5, 153.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened — common and thriving in urban lawns', 'None significant'],
        bn: ['বিপন্ন নয় — শহরের লনে সাধারণ ও বিস্তৃত', 'উল্লেখযোগ্য কোনো হুমকি নেই'],
      },
      initiatives: {
        en: ['Health warnings during the monsoon about wild mushroom poisoning', 'Teaching the spore-print test to tell it from edible parasols'],
        bn: ['বর্ষাকালে বুনো মাশরুম বিষক্রিয়া নিয়ে স্বাস্থ্য সতর্কবার্তা', 'খাওয়ার উপযোগী ছাতা মাশরুম থেকে আলাদা করতে রেণুর ছাপ পরীক্ষা শেখানো'],
      },
    },
    facts: {
      en: [
        'It is one of very few gilled mushrooms with a green spore print.',
        'It is the mushroom most often involved in poisonings in North America.',
        'Never eat a large white lawn mushroom in Bangladesh without expert identification — it can look like edible parasols and young white mushrooms.',
      ],
      bn: [
        'খুব কম গিলওয়ালা মাশরুমের রেণুর ছাপ সবুজ হয় — এটি তাদের একটি।',
        'উত্তর আমেরিকায় মাশরুম বিষক্রিয়ার ঘটনায় সবচেয়ে বেশি জড়িত এই মাশরুম।',
        'বিশেষজ্ঞের শনাক্তকরণ ছাড়া বাংলাদেশে লনে জন্মানো বড় সাদা মাশরুম কখনো খাবেন না — এটি খাওয়ার উপযোগী ছাতা মাশরুম ও কচি সাদা মাশরুমের মতো দেখতে।',
      ],
    },
    related: ['button-mushroom', 'milky-mushroom', 'death-cap', 'straw-mushroom'],
  },
  {
    id: 'devils-fingers',
    commonName: { en: "Devil's Fingers", bn: 'ডেভিলস ফিঙ্গার্স' },
    scientificName: 'Clathrus archeri',
    altNames: {
      en: ['Octopus Stinkhorn', 'Octopus Fungus'],
      bn: ['অক্টোপাস স্টিঙ্কহর্ন', 'অক্টোপাস ছত্রাক'],
    },
    synonyms: ['Anthurus archeri', 'Lysurus archeri'],
    category: 'fungi',
    wikiTitle: 'Clathrus archeri',
    description: {
      en: "Devil's fingers is a strange stinkhorn fungus that hatches from a whitish \"egg\" and unfurls bright red, tentacle-like arms, looking like an octopus or a starfish. The arms are coated with a dark, foul-smelling slime that smells of rotting flesh and attracts flies, which carry away the spores. Native to Australia and New Zealand, it was introduced to Europe in the early 20th century and has spread widely. It is not considered edible.",
      bn: 'ডেভিলস ফিঙ্গার্স একটি অদ্ভুত স্টিঙ্কহর্ন ছত্রাক; সাদাটে একটি "ডিম" ফেটে বেরিয়ে এটি উজ্জ্বল লাল শুঁড়ের মতো বাহু মেলে দেয়, দেখতে অক্টোপাস বা তারামাছের মতো। বাহুগুলোতে পচা মাংসের মতো দুর্গন্ধযুক্ত কালচে আঠালো পদার্থ লেগে থাকে, যা মাছিকে আকর্ষণ করে, আর মাছিরাই রেণু বয়ে নিয়ে যায়। অস্ট্রেলিয়া ও নিউজিল্যান্ডের স্থানীয় এই প্রজাতি বিংশ শতাব্দীর শুরুতে ইউরোপে পৌঁছায় এবং ব্যাপকভাবে ছড়িয়ে পড়েছে। এটি খাওয়ার উপযোগী বলে বিবেচিত নয়।',
    },
    taxonomy: {
      kingdom: 'Fungi',
      phylum: 'Basidiomycota',
      class: 'Agaricomycetes',
      order: 'Phallales',
      family: 'Phallaceae',
      genus: 'Clathrus',
      species: 'C. archeri',
    },
    physical: {
      size: {
        en: 'Egg 2–4 cm across; arms usually 4–7, each several centimetres long',
        bn: 'ডিম ২–৪ সেমি চওড়া; বাহু সাধারণত ৪–৭টি, প্রতিটি কয়েক সেন্টিমিটার লম্বা',
      },
      weight: {
        en: 'Soft and watery; usually a few tens of grams',
        bn: 'নরম ও জলীয়; সাধারণত কয়েক দশ গ্রাম',
      },
      lifespan: {
        en: 'The opened fruit body lasts only a few days; the egg stage can last longer',
        bn: 'খোলা মাশরুম মাত্র কয়েক দিন টেকে; ডিম অবস্থা কিছুটা বেশি সময় থাকে',
      },
      features: {
        en: [
          'Bright red arms emerging from a gelatinous whitish egg',
          'Dark olive-brown spore slime on the inner side of the arms',
          'Strong smell of rotting meat',
        ],
        bn: [
          'জেলির মতো সাদাটে ডিম থেকে বেরিয়ে আসা উজ্জ্বল লাল বাহু',
          'বাহুর ভেতরের দিকে গাঢ় জলপাই-বাদামি রেণুযুক্ত আঠালো পদার্থ',
          'পচা মাংসের মতো তীব্র দুর্গন্ধ',
        ],
      },
    },
    habitat: {
      en: 'Leaf litter and woody debris in forests, gardens and pastures',
      bn: 'বন, বাগান ও চারণভূমির ঝরা পাতা ও কাঠের টুকরো',
    },
    habitats: ['temperate-forest', 'grassland', 'urban-farmland'],
    regions: ['oceania', 'europe', 'north-america', 'africa'],
    distribution: {
      en: 'Native to Australia (including Tasmania) and New Zealand; introduced to Europe, where it was first recorded in France around 1914, and also found in North America and southern Africa.',
      bn: 'অস্ট্রেলিয়া (তাসমানিয়াসহ) ও নিউজিল্যান্ডের স্থানীয় প্রজাতি; ইউরোপে আনা হয়েছে — সেখানে প্রথম ফ্রান্সে প্রায় ১৯১৪ সালে দেখা যায় — এবং উত্তর আমেরিকা ও দক্ষিণ আফ্রিকাতেও পাওয়া যায়।',
    },
    climate: {
      en: 'Temperate and humid; fruits in summer and autumn',
      bn: 'নাতিশীতোষ্ণ ও আর্দ্র; গ্রীষ্ম ও শরৎকালে গজায়',
    },
    diet: {
      en: 'Saprotrophic — it decomposes leaf litter and wood debris',
      bn: 'মৃতজীবী — ঝরা পাতা ও কাঠের টুকরো পচিয়ে পুষ্টি নেয়',
    },
    ecologicalRole: {
      en: 'Decomposes plant litter and provides food for carrion flies that disperse its spores.',
      bn: 'উদ্ভিদের ঝরা অংশ পচায় এবং মড়াখেকো মাছিদের খাবার জোগায়, যারা এর রেণু ছড়ায়।',
    },
    behavior: {
      en: 'The arms burst out of the egg joined at the tips, then separate and curl back like a starfish.',
      bn: 'বাহুগুলো আগায় জোড়া লাগা অবস্থায় ডিম ফেটে বের হয়, তারপর আলাদা হয়ে তারামাছের মতো পেছনে বেঁকে যায়।',
    },
    range: {
      native: [
        [-33.9, 151.2],
        [-37.8, 145.0],
        [-42.9, 147.3],
        [-36.8, 174.8],
        [-41.3, 174.8],
      ],
      introduced: [
        [48.2, 6.5],
        [50.8, -0.1],
        [51.0, 10.0],
        [52.0, 5.0],
        [37.8, -122.3],
        [-33.9, 18.4],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'increasing',
      threats: {
        en: ['Not threatened — spreading in Europe', 'In some European countries it is considered an invasive alien species'],
        bn: ['বিপন্ন নয় — ইউরোপে ছড়িয়ে পড়ছে', 'ইউরোপের কিছু দেশে একে আগ্রাসী বহিরাগত প্রজাতি হিসেবে গণ্য করা হয়'],
      },
      initiatives: {
        en: ['Citizen-science recording of its spread across Europe', 'Monitoring of introduced fungi by national mycological societies'],
        bn: ['ইউরোপজুড়ে এর বিস্তার নথিভুক্ত করতে নাগরিক-বিজ্ঞান উদ্যোগ', 'জাতীয় ছত্রাকবিদ্যা সমিতির মাধ্যমে বহিরাগত ছত্রাক পর্যবেক্ষণ'],
      },
    },
    facts: {
      en: [
        'It probably reached France with wool or military supplies from Australia and New Zealand around the First World War.',
        'Its smell of rotting meat is a trick to recruit flies as spore carriers.',
        'Stinkhorns produce no gills — their spores sit in a slimy coating on the outside.',
      ],
      bn: [
        'সম্ভবত প্রথম বিশ্বযুদ্ধের সময় অস্ট্রেলিয়া ও নিউজিল্যান্ড থেকে আসা পশম বা সামরিক রসদের সঙ্গে এটি ফ্রান্সে পৌঁছায়।',
        'পচা মাংসের গন্ধ আসলে মাছিদের রেণু-বাহক বানানোর একটি কৌশল।',
        'স্টিঙ্কহর্নের কোনো গিল নেই — এদের রেণু বাইরের দিকের আঠালো আবরণে থাকে।',
      ],
    },
    related: ['fly-agaric', 'zombie-ant-fungus', 'jack-o-lantern-mushroom'],
  },
];
