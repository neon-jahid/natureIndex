import type { Species } from '@/types';

export const mammalsAfrEur1: Species[] = [
  {
    id: 'african-bush-elephant',
    commonName: { en: 'African Bush Elephant', bn: 'আফ্রিকান হাতি' },
    scientificName: 'Loxodonta africana',
    altNames: {
      en: ['African Savanna Elephant', 'African Elephant'],
      bn: ['আফ্রিকান সাভানা হাতি', 'আফ্রিকার হাতি'],
    },
    category: 'mammals',
    wikiTitle: 'African bush elephant',
    description: {
      en: 'The African bush elephant is the largest living land animal on Earth. It lives in close-knit family herds led by an experienced older female, the matriarch. Its huge ears, shaped a little like the map of Africa, help release body heat in the hot savanna.',
      bn: 'আফ্রিকান হাতি বর্তমান পৃথিবীর সবচেয়ে বড় স্থলচর প্রাণী। এরা অভিজ্ঞ বয়স্ক মাদি হাতির নেতৃত্বে ঘনিষ্ঠ পারিবারিক দলে বাস করে। এদের বিশাল কান দেখতে অনেকটা আফ্রিকা মহাদেশের মানচিত্রের মতো, আর এই কান নেড়ে গরম সাভানায় শরীরের তাপ বের করে দেয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Proboscidea',
      family: 'Elephantidae',
      genus: 'Loxodonta',
      species: 'L. africana',
    },
    physical: {
      size: {
        en: 'Shoulder height about 3–4 m in males, 2.2–2.6 m in females',
        bn: 'পুরুষের কাঁধ পর্যন্ত উচ্চতা প্রায় ৩–৪ মিটার, মাদির ২.২–২.৬ মিটার',
      },
      weight: {
        en: 'Males about 5,000–6,500 kg; females about 2,500–3,500 kg',
        bn: 'পুরুষ প্রায় ৫,০০০–৬,৫০০ কেজি; মাদি প্রায় ২,৫০০–৩,৫০০ কেজি',
      },
      lifespan: { en: '60–70 years', bn: '৬০–৭০ বছর' },
      features: {
        en: [
          'Very large ears that cover the shoulders',
          'Both males and females usually carry tusks',
          'Trunk tip has two finger-like projections',
        ],
        bn: [
          'কাঁধ ঢেকে দেওয়ার মতো বিশাল কান',
          'পুরুষ ও মাদি দুই ধরনের হাতিরই সাধারণত গজদন্ত থাকে',
          'শুঁড়ের আগায় আঙুলের মতো দুটি প্রান্ত',
        ],
      },
    },
    habitat: {
      en: 'Savannas, open woodlands, grasslands, semi-deserts and river valleys',
      bn: 'সাভানা, খোলা বনভূমি, তৃণভূমি, আধা-মরুভূমি ও নদী উপত্যকা',
    },
    habitats: ['grassland', 'desert', 'rivers-lakes'],
    regions: ['africa'],
    distribution: {
      en: 'Sub-Saharan Africa, with the largest populations in Botswana, Zimbabwe, Tanzania, Kenya and Zambia.',
      bn: 'সাহারার দক্ষিণের আফ্রিকা; সবচেয়ে বড় জনগোষ্ঠী বতসোয়ানা, জিম্বাবুয়ে, তানজানিয়া, কেনিয়া ও জাম্বিয়ায়।',
    },
    climate: {
      en: 'Hot tropical climates with distinct wet and dry seasons',
      bn: 'স্পষ্ট বর্ষা ও শুষ্ক ঋতুযুক্ত উষ্ণ ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Herbivore — grasses, leaves, bark, roots and fruit, eating up to about 150 kg a day',
      bn: 'তৃণভোজী — ঘাস, পাতা, গাছের বাকল, শিকড় ও ফল; দিনে প্রায় ১৫০ কেজি পর্যন্ত খাবার খায়',
    },
    ecologicalRole: {
      en: 'A keystone "ecosystem engineer" that opens up woodland, digs water holes and spreads seeds in its dung.',
      bn: 'একটি মূল "বাস্তুতন্ত্র প্রকৌশলী" প্রজাতি — ঘন বন ফাঁকা করে, পানির গর্ত খোঁড়ে এবং মলের মাধ্যমে বীজ ছড়িয়ে দেয়।',
    },
    behavior: {
      en: 'Females and young live in matriarch-led herds, while adult males roam alone or in bachelor groups; they communicate with low rumbles that travel kilometres.',
      bn: 'মাদি ও বাচ্চারা প্রধান মাদির নেতৃত্বে দলে থাকে, আর প্রাপ্তবয়স্ক পুরুষেরা একা বা পুরুষদের ছোট দলে ঘোরে; এরা গভীর গুরুগম্ভীর ডাকের মাধ্যমে কয়েক কিলোমিটার দূর পর্যন্ত যোগাযোগ করে।',
    },
    range: {
      native: [
        [-19.0, 23.5],
        [-18.5, 26.0],
        [-2.5, 34.8],
        [-2.7, 37.3],
        [-24.0, 31.5],
        [-13.0, 31.5],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Poaching for ivory', 'Habitat loss to farming and settlements', 'Human–elephant conflict'],
        bn: ['গজদন্তের জন্য চোরাশিকার', 'কৃষি ও বসতির কারণে আবাসস্থল হারানো', 'মানুষ ও হাতির সংঘাত'],
      },
      initiatives: {
        en: ['CITES ban on international ivory trade', 'Transfrontier conservation areas such as KAZA'],
        bn: ['সাইটেসের মাধ্যমে আন্তর্জাতিক গজদন্ত বাণিজ্যে নিষেধাজ্ঞা', 'কাজা-র মতো আন্তঃসীমান্ত সংরক্ষিত এলাকা'],
      },
      assessed: '2021',
    },
    facts: {
      en: [
        'In 2021 the IUCN first assessed African bush and forest elephants as two separate species.',
        'An elephant’s trunk contains tens of thousands of muscle units.',
        'Elephants can sense distant rumbles through their feet.',
      ],
      bn: [
        '২০২১ সালে আইইউসিএন প্রথমবার আফ্রিকান সাভানা হাতি ও বনের হাতিকে দুটি আলাদা প্রজাতি হিসেবে মূল্যায়ন করে।',
        'হাতির শুঁড়ে হাজার হাজার পেশি-একক থাকে।',
        'হাতি পায়ের তলা দিয়ে দূরের গুরুগম্ভীর শব্দের কম্পন টের পায়।',
      ],
    },
    related: ['asian-elephant', 'giraffe', 'white-rhinoceros'],
  },
  {
    id: 'lion',
    commonName: { en: 'Lion', bn: 'সিংহ' },
    scientificName: 'Panthera leo',
    altNames: {
      en: ['African Lion', 'King of the Jungle'],
      bn: ['আফ্রিকান সিংহ', 'পশুরাজ'],
    },
    category: 'mammals',
    wikiTitle: 'Lion',
    description: {
      en: 'The lion is the only truly social wild cat, living in groups called prides. Adult males are recognised by their impressive manes, which signal strength and health. Lions once ranged across Africa, the Middle East and India, but today survive mainly in sub-Saharan Africa, with a small Asiatic population in Gir, India.',
      bn: 'সিংহই একমাত্র বন্য বিড়ালগোত্রীয় প্রাণী যারা সত্যিকারের দলবদ্ধ জীবন যাপন করে; এদের দলকে "প্রাইড" বলা হয়। প্রাপ্তবয়স্ক পুরুষ সিংহের ঘাড়ের ঘন কেশর শক্তি ও সুস্বাস্থ্যের পরিচয় দেয়। একসময় আফ্রিকা, মধ্যপ্রাচ্য ও ভারতজুড়ে সিংহ ছিল, কিন্তু এখন মূলত সাহারার দক্ষিণের আফ্রিকায় এবং ভারতের গির অরণ্যে অল্প কিছু এশীয় সিংহ টিকে আছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Felidae',
      genus: 'Panthera',
      species: 'P. leo',
    },
    physical: {
      size: {
        en: 'Head-and-body length 1.4–2.5 m plus a 0.6–1 m tail; about 1.2 m tall at the shoulder',
        bn: 'মাথা ও দেহ ১.৪–২.৫ মিটার, সঙ্গে ০.৬–১ মিটার লেজ; কাঁধ পর্যন্ত উচ্চতা প্রায় ১.২ মিটার',
      },
      weight: {
        en: 'Males 150–250 kg; females 110–180 kg',
        bn: 'পুরুষ ১৫০–২৫০ কেজি; মাদি ১১০–১৮০ কেজি',
      },
      lifespan: {
        en: '10–14 years in the wild; up to about 20 years in captivity',
        bn: 'বনে ১০–১৪ বছর; আবদ্ধ অবস্থায় প্রায় ২০ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Males have a thick mane of hair around the head and neck',
          'Plain tawny coat without spots in adults',
          'Dark tuft of hair at the tip of the tail',
        ],
        bn: [
          'পুরুষ সিংহের মাথা ও ঘাড় ঘিরে ঘন কেশর',
          'প্রাপ্তবয়স্কদের গায়ে ছোপহীন বাদামি-হলুদ লোম',
          'লেজের আগায় কালচে লোমের গোছা',
        ],
      },
    },
    habitat: {
      en: 'Savannas, open grasslands, dry woodlands and scrub',
      bn: 'সাভানা, খোলা তৃণভূমি, শুষ্ক বনভূমি ও ঝোপঝাড়',
    },
    habitats: ['grassland', 'desert'],
    regions: ['africa', 'south-asia'],
    distribution: {
      en: 'Fragmented populations across sub-Saharan Africa, especially East and Southern Africa, plus the Gir Forest region of Gujarat, India.',
      bn: 'সাহারার দক্ষিণের আফ্রিকায়, বিশেষ করে পূর্ব ও দক্ষিণ আফ্রিকায় বিচ্ছিন্ন জনগোষ্ঠী; এছাড়া ভারতের গুজরাটের গির অরণ্য অঞ্চল।',
    },
    climate: {
      en: 'Warm tropical and semi-arid climates',
      bn: 'উষ্ণ ক্রান্তীয় ও আধা-শুষ্ক জলবায়ু',
    },
    diet: {
      en: 'Carnivore — wildebeest, zebra, buffalo, antelope and other large herbivores; also scavenges',
      bn: 'মাংসাশী — ওয়াইল্ডবিস্ট, জেব্রা, বুনো মহিষ, হরিণজাতীয় প্রাণী ও অন্যান্য বড় তৃণভোজী; মরা প্রাণীও খায়',
    },
    ecologicalRole: {
      en: 'An apex predator that regulates herds of large grazers and shapes the whole savanna food web.',
      bn: 'শীর্ষ শিকারি হিসেবে বড় তৃণভোজী প্রাণীর পাল নিয়ন্ত্রণ করে এবং সাভানার পুরো খাদ্যশৃঙ্খলকে প্রভাবিত করে।',
    },
    behavior: {
      en: 'Prides of related females hunt cooperatively, while males defend the territory; lions rest up to 20 hours a day.',
      bn: 'আত্মীয় মাদি সিংহরা দল বেঁধে শিকার করে আর পুরুষেরা এলাকা পাহারা দেয়; সিংহ দিনে প্রায় ২০ ঘণ্টা পর্যন্ত বিশ্রাম নেয়।',
    },
    range: {
      native: [
        [-2.3, 34.8],
        [-1.5, 35.1],
        [-24.0, 31.5],
        [-19.2, 23.5],
        [-8.5, 37.5],
        [21.2, 70.8],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Habitat loss and fragmentation', 'Retaliatory killing over livestock losses', 'Decline of wild prey due to bushmeat hunting'],
        bn: ['আবাসস্থল হারানো ও খণ্ডিত হওয়া', 'গবাদিপশু মারার প্রতিশোধে সিংহ হত্যা', 'বুনো মাংসের জন্য শিকারের ফলে শিকারযোগ্য প্রাণী কমে যাওয়া'],
      },
      initiatives: {
        en: ['Community "lion guardian" programmes that reduce conflict', 'Protected areas such as the Serengeti and Kruger'],
        bn: ['সংঘাত কমাতে স্থানীয় সম্প্রদায়ের "সিংহ রক্ষী" কর্মসূচি', 'সেরেঙ্গেটি ও ক্রুগারের মতো সংরক্ষিত এলাকা'],
      },
    },
    facts: {
      en: [
        'A lion’s roar can be heard up to about 8 km away.',
        'In a pride, the females do most of the hunting.',
        'Lions have disappeared from most of their historical range.',
      ],
      bn: [
        'সিংহের গর্জন প্রায় ৮ কিলোমিটার দূর থেকেও শোনা যায়।',
        'প্রাইডে বেশিরভাগ শিকার করে মাদি সিংহরা।',
        'অতীতের বিচরণ এলাকার বেশিরভাগ অংশ থেকেই সিংহ হারিয়ে গেছে।',
      ],
    },
    related: ['royal-bengal-tiger', 'african-leopard', 'cheetah', 'spotted-hyena'],
  },
  {
    id: 'cheetah',
    commonName: { en: 'Cheetah', bn: 'চিতা' },
    scientificName: 'Acinonyx jubatus',
    altNames: {
      en: ['Hunting Leopard'],
      bn: ['শিকারি চিতা'],
    },
    category: 'mammals',
    wikiTitle: 'Cheetah',
    description: {
      en: 'The cheetah is the fastest land animal, able to sprint at around 100 km/h in short bursts. Its slender body, long legs and long tail are built for speed rather than strength. Unlike most big cats it hunts mainly by day, and it once lived in India, where it went extinct in the 20th century.',
      bn: 'চিতা পৃথিবীর দ্রুততম স্থলচর প্রাণী; অল্প সময়ের জন্য এরা ঘণ্টায় প্রায় ১০০ কিলোমিটার বেগে দৌড়াতে পারে। এদের ছিপছিপে শরীর, লম্বা পা ও লম্বা লেজ শক্তির চেয়ে গতির জন্যই তৈরি। বেশিরভাগ বড় বিড়ালের মতো রাতে নয়, চিতা মূলত দিনের বেলায় শিকার করে। একসময় ভারতেও চিতা ছিল, কিন্তু বিংশ শতাব্দীতে সেখানে বিলুপ্ত হয়ে যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Felidae',
      genus: 'Acinonyx',
      species: 'A. jubatus',
    },
    physical: {
      size: {
        en: 'Head-and-body length 1.1–1.5 m with a 60–80 cm tail; 70–90 cm tall at the shoulder',
        bn: 'মাথা ও দেহ ১.১–১.৫ মিটার, লেজ ৬০–৮০ সেমি; কাঁধ পর্যন্ত উচ্চতা ৭০–৯০ সেমি',
      },
      weight: { en: '21–72 kg', bn: '২১–৭২ কেজি' },
      lifespan: {
        en: '10–12 years in the wild; up to about 20 years in captivity',
        bn: 'বনে ১০–১২ বছর; আবদ্ধ অবস্থায় প্রায় ২০ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Solid round black spots rather than rosettes',
          'Black "tear marks" running from the eyes to the mouth',
          'Semi-retractable claws that grip the ground like running spikes',
        ],
        bn: [
          'গোলাপের মতো ছোপ নয়, গায়ে নিরেট গোল কালো ফোঁটা',
          'চোখ থেকে মুখ পর্যন্ত নেমে আসা কালো "কান্নার দাগ"',
          'পুরোপুরি গোটানো যায় না এমন নখ, যা দৌড়ের সময় মাটি আঁকড়ে ধরে',
        ],
      },
    },
    habitat: {
      en: 'Open savannas, grasslands, dry scrub and semi-desert',
      bn: 'খোলা সাভানা, তৃণভূমি, শুষ্ক ঝোপঝাড় ও আধা-মরুভূমি',
    },
    habitats: ['grassland', 'desert'],
    regions: ['africa'],
    distribution: {
      en: 'Patchily across eastern and southern Africa, a few Saharan areas, and a tiny remnant population in Iran; reintroduced to India in 2022.',
      bn: 'পূর্ব ও দক্ষিণ আফ্রিকার বিচ্ছিন্ন এলাকা, সাহারার কিছু অংশ এবং ইরানে খুব ছোট একটি জনগোষ্ঠী; ২০২২ সালে ভারতে আবার আনা হয়েছে।',
    },
    climate: {
      en: 'Hot, dry tropical and arid climates',
      bn: 'উষ্ণ ও শুষ্ক ক্রান্তীয় এবং মরু জলবায়ু',
    },
    diet: {
      en: 'Carnivore — mainly gazelles, impalas and other small to medium antelopes, plus hares and birds',
      bn: 'মাংসাশী — মূলত গ্যাজেল, ইম্পালা ও অন্যান্য ছোট-মাঝারি হরিণজাতীয় প্রাণী; খরগোশ ও পাখিও খায়',
    },
    ecologicalRole: {
      en: 'A mid-sized predator that keeps populations of small antelopes in check.',
      bn: 'মাঝারি আকারের শিকারি হিসেবে ছোট হরিণজাতীয় প্রাণীর সংখ্যা নিয়ন্ত্রণে রাখে।',
    },
    behavior: {
      en: 'Females live alone with their cubs, while brothers often form lifelong male coalitions; hunts end after a chase of only 20–60 seconds.',
      bn: 'মাদি চিতা বাচ্চাদের নিয়ে একা থাকে, আর ভাইয়েরা প্রায়ই সারাজীবনের জন্য পুরুষদের ছোট দল গড়ে; একেকটি শিকারি দৌড় মাত্র ২০–৬০ সেকেন্ড স্থায়ী হয়।',
    },
    range: {
      native: [
        [-2.3, 34.8],
        [-1.4, 35.0],
        [-22.0, 17.0],
        [-20.0, 24.0],
        [-24.5, 31.5],
        [35.0, 56.5],
      ],
      introduced: [[25.6, 77.4]],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      population: {
        en: 'Roughly 6,500–7,000 adults in the wild',
        bn: 'বনে আনুমানিক ৬,৫০০–৭,০০০টি প্রাপ্তবয়স্ক চিতা',
      },
      threats: {
        en: ['Habitat loss and fragmentation', 'Conflict with livestock farmers', 'Illegal trade in cubs as pets'],
        bn: ['আবাসস্থল হারানো ও খণ্ডিত হওয়া', 'গবাদিপশু পালনকারীদের সঙ্গে সংঘাত', 'পোষা প্রাণী হিসেবে বাচ্চা চিতার অবৈধ বাণিজ্য'],
      },
      initiatives: {
        en: ['Livestock guarding dog programmes in Namibia', 'Project Cheetah reintroduction in India'],
        bn: ['নামিবিয়ায় গবাদিপশু পাহারায় প্রশিক্ষিত কুকুর কর্মসূচি', 'ভারতে প্রজেক্ট চিতার মাধ্যমে পুনঃপ্রবর্তন'],
      },
    },
    facts: {
      en: [
        'A cheetah can reach about 100 km/h within a few seconds.',
        'Cheetahs chirp and purr, but cannot roar.',
        'Its long tail works like a rudder for sharp turns at high speed.',
      ],
      bn: [
        'চিতা মাত্র কয়েক সেকেন্ডে ঘণ্টায় প্রায় ১০০ কিলোমিটার গতি তুলতে পারে।',
        'চিতা পাখির মতো কিচিরমিচির ও গরগর শব্দ করে, কিন্তু গর্জন করতে পারে না।',
        'লম্বা লেজটি নৌকার হালের মতো কাজ করে, ফলে দ্রুত দৌড়ের মধ্যেও তীক্ষ্ণ বাঁক নিতে পারে।',
      ],
    },
    related: ['lion', 'african-leopard', 'african-wild-dog'],
  },
  {
    id: 'african-leopard',
    commonName: { en: 'African Leopard', bn: 'আফ্রিকান চিতাবাঘ' },
    scientificName: 'Panthera pardus pardus',
    altNames: {
      en: ['Leopard'],
      bn: ['আফ্রিকার চিতাবাঘ'],
    },
    category: 'mammals',
    wikiTitle: 'African leopard',
    description: {
      en: 'The African leopard is the most widespread big cat in Africa, found from rainforests to deserts. It is a powerful, secretive hunter that often hauls its kills high into trees to keep them away from lions and hyenas. Its golden coat is covered in dark rosettes that provide superb camouflage.',
      bn: 'আফ্রিকান চিতাবাঘ আফ্রিকার সবচেয়ে বিস্তৃত বড় বিড়াল — বৃষ্টিবন থেকে মরুভূমি পর্যন্ত এদের দেখা মেলে। এরা শক্তিশালী ও গোপনচারী শিকারি; সিংহ ও হায়েনার হাত থেকে বাঁচাতে প্রায়ই শিকার টেনে গাছের উঁচু ডালে তুলে রাখে। সোনালি লোমে গোলাপের মতো কালো ছোপ এদের চমৎকার ছদ্মবেশ দেয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Felidae',
      genus: 'Panthera',
      species: 'P. pardus',
    },
    physical: {
      size: {
        en: 'Head-and-body length 0.9–1.9 m plus a 0.6–1.1 m tail',
        bn: 'মাথা ও দেহ ০.৯–১.৯ মিটার, সঙ্গে ০.৬–১.১ মিটার লেজ',
      },
      weight: {
        en: 'Males 30–90 kg; females 20–60 kg',
        bn: 'পুরুষ ৩০–৯০ কেজি; মাদি ২০–৬০ কেজি',
      },
      lifespan: {
        en: '12–17 years in the wild; over 20 years in captivity',
        bn: 'বনে ১২–১৭ বছর; আবদ্ধ অবস্থায় ২০ বছরের বেশি',
      },
      features: {
        en: [
          'Rosette-shaped spots on a golden-yellow coat',
          'Strong neck and jaws for dragging prey up trees',
          'Pale green or yellow eyes adapted for night vision',
        ],
        bn: [
          'সোনালি-হলুদ লোমে গোলাপ-আকৃতির কালো ছোপ',
          'শিকার টেনে গাছে তোলার জন্য শক্ত ঘাড় ও চোয়াল',
          'রাতে দেখার উপযোগী ফ্যাকাশে সবুজ বা হলুদ চোখ',
        ],
      },
    },
    habitat: {
      en: 'Rainforests, savannas, mountains, rocky hills and semi-deserts',
      bn: 'বৃষ্টিবন, সাভানা, পাহাড়, পাথুরে টিলা ও আধা-মরুভূমি',
    },
    habitats: ['tropical-forest', 'grassland', 'mountain', 'desert'],
    regions: ['africa'],
    distribution: {
      en: 'Most of sub-Saharan Africa, from the Congo Basin to the Kalahari and the Cape mountains.',
      bn: 'সাহারার দক্ষিণের আফ্রিকার বেশিরভাগ অঞ্চল — কঙ্গো অববাহিকা থেকে কালাহারি ও কেপের পাহাড় পর্যন্ত।',
    },
    climate: {
      en: 'Highly adaptable — from humid tropics to arid and cool mountain climates',
      bn: 'অত্যন্ত মানিয়ে নিতে সক্ষম — আর্দ্র ক্রান্তীয় থেকে শুষ্ক ও শীতল পাহাড়ি জলবায়ু পর্যন্ত',
    },
    diet: {
      en: 'Carnivore — antelopes, monkeys, rodents, birds and many other prey',
      bn: 'মাংসাশী — হরিণজাতীয় প্রাণী, বানর, ইঁদুরজাতীয় প্রাণী, পাখি ও আরও নানা শিকার',
    },
    ecologicalRole: {
      en: 'A versatile predator that controls a wide range of prey species, including crop-raiding baboons and rodents.',
      bn: 'বহুমুখী শিকারি হিসেবে নানা প্রজাতির প্রাণীর সংখ্যা নিয়ন্ত্রণ করে, যার মধ্যে ফসল নষ্টকারী বেবুন ও ইঁদুরজাতীয় প্রাণীও আছে।',
    },
    behavior: {
      en: 'Solitary and mostly nocturnal; stalks prey closely before pouncing, and is an excellent climber.',
      bn: 'একাকী ও মূলত নিশাচর; চুপিসারে শিকারের খুব কাছে গিয়ে ঝাঁপিয়ে পড়ে এবং গাছে চড়তে অত্যন্ত দক্ষ।',
    },
    range: {
      native: [
        [-24.8, 31.5],
        [-2.3, 34.8],
        [-0.5, 23.5],
        [-19.5, 23.0],
        [9.0, 38.7],
        [-33.9, 19.5],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Habitat loss', 'Illegal killing for skins and in conflict with farmers', 'Loss of prey to bushmeat hunting'],
        bn: ['আবাসস্থল হারানো', 'চামড়ার জন্য ও কৃষকদের সঙ্গে সংঘাতে অবৈধ হত্যা', 'বুনো মাংসের শিকারের ফলে খাদ্য-প্রাণী কমে যাওয়া'],
      },
      initiatives: {
        en: ['Synthetic leopard-skin capes for traditional ceremonies in South Africa', 'Trophy-hunting quotas and protected areas'],
        bn: ['দক্ষিণ আফ্রিকায় ঐতিহ্যবাহী অনুষ্ঠানে আসল চামড়ার বদলে কৃত্রিম চিতাবাঘ-চামড়ার পোশাক', 'শিকারের কোটা নিয়ন্ত্রণ ও সংরক্ষিত এলাকা'],
      },
    },
    facts: {
      en: [
        'Leopards can carry prey heavier than themselves up into a tree.',
        'All-black "black panthers" are leopards with a melanistic coat.',
      ],
      bn: [
        'চিতাবাঘ নিজের ওজনের চেয়েও ভারী শিকার মুখে করে গাছে তুলতে পারে।',
        'পুরোপুরি কালো "ব্ল্যাক প্যান্থার" আসলে কালো লোমের চিতাবাঘ।',
      ],
    },
    related: ['lion', 'cheetah', 'snow-leopard'],
  },
  {
    id: 'mountain-gorilla',
    commonName: { en: 'Mountain Gorilla', bn: 'পাহাড়ি গরিলা' },
    scientificName: 'Gorilla beringei beringei',
    altNames: {
      en: ['Gorilla', 'Eastern Gorilla'],
      bn: ['গরিলা', 'পূর্বাঞ্চলীয় গরিলা'],
    },
    category: 'mammals',
    wikiTitle: 'Mountain gorilla',
    description: {
      en: 'The mountain gorilla is a subspecies of eastern gorilla that lives only in the misty mountain forests of central Africa. Gentle and mostly vegetarian, it lives in family groups led by a mature male called a silverback. Intensive protection has made it one of the few great apes whose numbers are rising.',
      bn: 'পাহাড়ি গরিলা পূর্বাঞ্চলীয় গরিলার একটি উপপ্রজাতি, যারা শুধু মধ্য আফ্রিকার কুয়াশাঢাকা পাহাড়ি বনে বাস করে। শান্ত স্বভাবের এই প্রাণীরা মূলত উদ্ভিদভোজী এবং "সিলভারব্যাক" নামে পরিচিত প্রাপ্তবয়স্ক পুরুষের নেতৃত্বে পারিবারিক দলে থাকে। কঠোর সুরক্ষার ফলে এটি সেই অল্প কয়েকটি বনমানুষের একটি, যাদের সংখ্যা বাড়ছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Primates',
      family: 'Hominidae',
      genus: 'Gorilla',
      species: 'G. beringei',
    },
    physical: {
      size: {
        en: 'Standing height about 1.5–1.8 m in males; arm span over 2 m',
        bn: 'দাঁড়ালে পুরুষের উচ্চতা প্রায় ১.৫–১.৮ মিটার; দুই হাত মেলে ২ মিটারের বেশি',
      },
      weight: {
        en: 'Males about 140–200 kg; females about 70–100 kg',
        bn: 'পুরুষ প্রায় ১৪০–২০০ কেজি; মাদি প্রায় ৭০–১০০ কেজি',
      },
      lifespan: { en: 'About 35–40 years', bn: 'প্রায় ৩৫–৪০ বছর' },
      features: {
        en: [
          'Long, thick black fur suited to cold mountain forests',
          'Adult males develop a silver-grey saddle on the back',
          'Each gorilla has a unique nose print',
        ],
        bn: [
          'ঠান্ডা পাহাড়ি বনের উপযোগী লম্বা, ঘন কালো লোম',
          'প্রাপ্তবয়স্ক পুরুষের পিঠে রুপালি-ধূসর লোমের অংশ',
          'প্রতিটি গরিলার নাকের ভাঁজ আলাদা, আঙুলের ছাপের মতো',
        ],
      },
    },
    habitat: {
      en: 'Montane and bamboo forests at about 2,200–4,300 m elevation',
      bn: 'প্রায় ২,২০০–৪,৩০০ মিটার উচ্চতার পাহাড়ি বন ও বাঁশবন',
    },
    habitats: ['tropical-forest', 'mountain'],
    regions: ['africa'],
    distribution: {
      en: 'Two populations: the Virunga volcanoes (Rwanda, Uganda, DR Congo) and Bwindi Impenetrable Forest in Uganda.',
      bn: 'দুটি জনগোষ্ঠী: রুয়ান্ডা, উগান্ডা ও কঙ্গো গণপ্রজাতন্ত্রের ভিরুঙ্গা আগ্নেয়গিরি অঞ্চল এবং উগান্ডার বুইন্ডি বন।',
    },
    climate: {
      en: 'Cool, wet and misty highland climate',
      bn: 'শীতল, আর্দ্র ও কুয়াশাচ্ছন্ন পার্বত্য জলবায়ু',
    },
    diet: {
      en: 'Mainly herbivore — leaves, stems, shoots, bamboo, roots and occasionally insects',
      bn: 'মূলত উদ্ভিদভোজী — পাতা, কাণ্ড, কচি ডগা, বাঁশ, শিকড় এবং মাঝেমধ্যে পোকামাকড়',
    },
    ecologicalRole: {
      en: 'Shapes forest vegetation through feeding and trampling, and spreads seeds through the forest.',
      bn: 'খাওয়া ও চলাফেরার মাধ্যমে বনের গাছপালার গঠন বদলে দেয় এবং বনজুড়ে বীজ ছড়ায়।',
    },
    behavior: {
      en: 'Lives in stable groups led by a silverback; builds a fresh nest of vegetation each night to sleep in.',
      bn: 'একজন সিলভারব্যাকের নেতৃত্বে স্থায়ী দলে বাস করে; প্রতি রাতে ঘুমানোর জন্য লতাপাতা দিয়ে নতুন বাসা বানায়।',
    },
    range: {
      native: [
        [-1.45, 29.5],
        [-1.38, 29.6],
        [-1.05, 29.7],
        [-1.4, 29.45],
      ],
      endemicTo: { en: 'Virunga Mountains and Bwindi, central Africa', bn: 'মধ্য আফ্রিকার ভিরুঙ্গা পর্বতমালা ও বুইন্ডি বন' },
    },
    conservation: {
      status: 'EN',
      trend: 'increasing',
      population: {
        en: 'Just over 1,000 individuals',
        bn: '১,০০০টির কিছু বেশি',
      },
      threats: {
        en: ['Snares set for other animals', 'Diseases caught from humans', 'Armed conflict and habitat encroachment'],
        bn: ['অন্য প্রাণী ধরার জন্য পাতা ফাঁদ', 'মানুষ থেকে সংক্রমিত রোগ', 'সশস্ত্র সংঘাত ও আবাসস্থল দখল'],
      },
      initiatives: {
        en: ['Ranger patrols and regulated gorilla tourism', 'Gorilla Doctors veterinary programme'],
        bn: ['রেঞ্জারদের টহল ও নিয়ন্ত্রিত গরিলা পর্যটন', 'গরিলা ডক্টরস পশুচিকিৎসা কর্মসূচি'],
      },
      assessed: '2018',
    },
    facts: {
      en: [
        'In 2018 it was moved from Critically Endangered to Endangered thanks to conservation work.',
        'Gorillas share about 98% of their DNA with humans.',
      ],
      bn: [
        'সংরক্ষণ প্রচেষ্টার সাফল্যে ২০১৮ সালে এটি মহাবিপন্ন থেকে বিপন্ন শ্রেণিতে উন্নীত হয়।',
        'মানুষের সঙ্গে গরিলার ডিএনএর প্রায় ৯৮ শতাংশ মিল রয়েছে।',
      ],
    },
    related: ['chimpanzee', 'bonobo'],
  },
  {
    id: 'chimpanzee',
    commonName: { en: 'Chimpanzee', bn: 'শিম্পাঞ্জি' },
    scientificName: 'Pan troglodytes',
    altNames: {
      en: ['Common Chimpanzee', 'Chimp'],
      bn: ['সাধারণ শিম্পাঞ্জি', 'শিম্পু'],
    },
    category: 'mammals',
    wikiTitle: 'Chimpanzee',
    description: {
      en: 'The chimpanzee is one of humanity’s two closest living relatives. It is highly intelligent, uses tools such as sticks to fish for termites and stones to crack nuts, and passes these skills on as local "cultures". Chimpanzees live in large, complex communities across the forests and woodlands of equatorial Africa.',
      bn: 'শিম্পাঞ্জি মানুষের সবচেয়ে কাছের দুটি জীবিত আত্মীয়ের একটি। এরা অত্যন্ত বুদ্ধিমান — উইপোকা ধরতে কাঠি আর বাদাম ভাঙতে পাথর ব্যবহার করে, এবং এসব কৌশল প্রজন্ম থেকে প্রজন্মে শিখিয়ে স্থানীয় "সংস্কৃতি" গড়ে তোলে। নিরক্ষীয় আফ্রিকার বন ও বনভূমিতে এরা বড় ও জটিল সমাজে বাস করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Primates',
      family: 'Hominidae',
      genus: 'Pan',
      species: 'P. troglodytes',
    },
    physical: {
      size: {
        en: 'Standing height about 1–1.7 m',
        bn: 'দাঁড়ালে উচ্চতা প্রায় ১–১.৭ মিটার',
      },
      weight: {
        en: 'Males 40–70 kg; females 27–50 kg',
        bn: 'পুরুষ ৪০–৭০ কেজি; মাদি ২৭–৫০ কেজি',
      },
      lifespan: {
        en: 'About 40–50 years in the wild; up to 60 in captivity',
        bn: 'বনে প্রায় ৪০–৫০ বছর; আবদ্ধ অবস্থায় ৬০ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Coarse black hair with a bare face, hands and feet',
          'Arms longer than legs, used for knuckle-walking',
          'Opposable thumbs and big toes for gripping',
        ],
        bn: [
          'খসখসে কালো লোম; মুখ, হাত ও পা লোমহীন',
          'পায়ের চেয়ে হাত লম্বা; আঙুলের গাঁটে ভর দিয়ে হাঁটে',
          'আঁকড়ে ধরার উপযোগী বুড়ো আঙুল (হাত ও পা দুটোতেই)',
        ],
      },
    },
    habitat: {
      en: 'Tropical rainforests, swamp forests and wooded savannas',
      bn: 'ক্রান্তীয় বৃষ্টিবন, জলাবন ও গাছপালাযুক্ত সাভানা',
    },
    habitats: ['tropical-forest', 'grassland'],
    regions: ['africa'],
    distribution: {
      en: 'West and Central Africa to East Africa, from Senegal to western Tanzania and Uganda.',
      bn: 'পশ্চিম ও মধ্য আফ্রিকা থেকে পূর্ব আফ্রিকা — সেনেগাল থেকে পশ্চিম তানজানিয়া ও উগান্ডা পর্যন্ত।',
    },
    climate: {
      en: 'Warm, humid equatorial and tropical climates',
      bn: 'উষ্ণ ও আর্দ্র নিরক্ষীয় এবং ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Omnivore — mostly fruit, plus leaves, seeds, insects and occasionally hunted monkeys',
      bn: 'সর্বভুক — মূলত ফল, সঙ্গে পাতা, বীজ, পোকামাকড় এবং মাঝেমধ্যে শিকার করা বানর',
    },
    ecologicalRole: {
      en: 'An important seed disperser for many rainforest trees.',
      bn: 'বৃষ্টিবনের বহু গাছের বীজ ছড়ানোর গুরুত্বপূর্ণ বাহক।',
    },
    behavior: {
      en: 'Lives in fission–fusion communities of 20–150 members that split into smaller parties; males cooperate to patrol territory.',
      bn: '২০–১৫০ সদস্যের সমাজে বাস করে, যা প্রয়োজনমতো ছোট ছোট দলে ভাগ হয় আবার মিলিত হয়; পুরুষেরা একসঙ্গে এলাকা পাহারা দেয়।',
    },
    range: {
      native: [
        [12.0, -12.0],
        [7.5, -7.5],
        [3.0, 12.0],
        [0.5, 25.0],
        [-4.7, 29.6],
        [0.5, 30.4],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Deforestation and mining', 'Hunting for bushmeat and the pet trade', 'Infectious diseases such as Ebola'],
        bn: ['বন উজাড় ও খনন', 'বুনো মাংস ও পোষা প্রাণী বাণিজ্যের জন্য শিকার', 'ইবোলার মতো সংক্রামক রোগ'],
      },
      initiatives: {
        en: ['Long-term protection of sites such as Gombe and Taï National Parks', 'Sanctuaries for orphaned chimpanzees'],
        bn: ['গোম্বে ও তাই জাতীয় উদ্যানের মতো এলাকার দীর্ঘমেয়াদি সুরক্ষা', 'অনাথ শিম্পাঞ্জিদের জন্য আশ্রয়কেন্দ্র'],
      },
      assessed: '2016',
    },
    facts: {
      en: [
        'Jane Goodall’s research at Gombe revealed that chimpanzees make and use tools.',
        'Chimpanzees share about 98–99% of their DNA with humans.',
      ],
      bn: [
        'গোম্বেতে জেন গুডালের গবেষণা থেকে প্রথম জানা যায় যে শিম্পাঞ্জি হাতিয়ার বানায় ও ব্যবহার করে।',
        'মানুষের সঙ্গে শিম্পাঞ্জির ডিএনএর প্রায় ৯৮–৯৯ শতাংশ মিল রয়েছে।',
      ],
    },
    related: ['bonobo', 'mountain-gorilla'],
  },
  {
    id: 'bonobo',
    commonName: { en: 'Bonobo', bn: 'বনোবো' },
    scientificName: 'Pan paniscus',
    altNames: {
      en: ['Pygmy Chimpanzee'],
      bn: ['বামন শিম্পাঞ্জি'],
    },
    category: 'mammals',
    wikiTitle: 'Bonobo',
    description: {
      en: 'The bonobo is a great ape found only in the rainforests south of the Congo River. Closely related to the chimpanzee, it is slimmer and lives in more peaceful societies where females hold strong positions. Bonobos often defuse tension through social bonding rather than aggression.',
      bn: 'বনোবো একটি বনমানুষ, যা শুধু কঙ্গো নদীর দক্ষিণের বৃষ্টিবনে পাওয়া যায়। শিম্পাঞ্জির ঘনিষ্ঠ আত্মীয় হলেও এরা তুলনায় ছিপছিপে এবং তুলনামূলক শান্তিপূর্ণ সমাজে বাস করে, যেখানে মাদিদের অবস্থান শক্তিশালী। ঝগড়ার বদলে সামাজিক বন্ধনের মাধ্যমেই বনোবোরা প্রায়ই উত্তেজনা প্রশমিত করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Primates',
      family: 'Hominidae',
      genus: 'Pan',
      species: 'P. paniscus',
    },
    physical: {
      size: {
        en: 'Standing height about 1–1.2 m',
        bn: 'দাঁড়ালে উচ্চতা প্রায় ১–১.২ মিটার',
      },
      weight: {
        en: 'Males about 35–60 kg; females about 30–40 kg',
        bn: 'পুরুষ প্রায় ৩৫–৬০ কেজি; মাদি প্রায় ৩০–৪০ কেজি',
      },
      lifespan: {
        en: 'About 40 years; longer in captivity',
        bn: 'প্রায় ৪০ বছর; আবদ্ধ অবস্থায় আরও বেশি',
      },
      features: {
        en: [
          'Slender build with longer legs than the chimpanzee',
          'Dark face with pink lips and long hair parted on the head',
          'Often walks upright on two legs',
        ],
        bn: [
          'শিম্পাঞ্জির চেয়ে ছিপছিপে গড়ন ও লম্বা পা',
          'কালো মুখে গোলাপি ঠোঁট, মাথার লম্বা লোম মাঝখান দিয়ে সিঁথির মতো ভাগ করা',
          'প্রায়ই দুই পায়ে সোজা হয়ে হাঁটে',
        ],
      },
    },
    habitat: {
      en: 'Lowland tropical rainforests and swamp forests',
      bn: 'নিম্নভূমির ক্রান্তীয় বৃষ্টিবন ও জলাবন',
    },
    habitats: ['tropical-forest', 'wetland'],
    regions: ['africa'],
    distribution: {
      en: 'Only in the Democratic Republic of the Congo, between the Congo and Kasai rivers.',
      bn: 'শুধু কঙ্গো গণপ্রজাতন্ত্রে, কঙ্গো ও কাসাই নদীর মধ্যবর্তী অঞ্চলে।',
    },
    climate: {
      en: 'Hot, humid equatorial climate',
      bn: 'উষ্ণ ও আর্দ্র নিরক্ষীয় জলবায়ু',
    },
    diet: {
      en: 'Mainly fruit, plus leaves, stems, seeds, insects and small animals',
      bn: 'মূলত ফল, সঙ্গে পাতা, কাণ্ড, বীজ, পোকামাকড় ও ছোট প্রাণী',
    },
    ecologicalRole: {
      en: 'A major seed disperser in the Congo rainforest; many tree species depend on it.',
      bn: 'কঙ্গোর বৃষ্টিবনে বীজ ছড়ানোর প্রধান বাহক; অনেক গাছের প্রজাতি এদের ওপর নির্ভরশীল।',
    },
    behavior: {
      en: 'Female-centred groups that split and merge; strong bonds between females help keep the peace.',
      bn: 'মাদি-কেন্দ্রিক দল, যা প্রয়োজনমতো ভাগ হয় ও আবার মিলিত হয়; মাদিদের মধ্যে দৃঢ় বন্ধন দলে শান্তি বজায় রাখে।',
    },
    range: {
      native: [
        [-1.5, 22.0],
        [-2.5, 20.5],
        [-0.5, 23.5],
        [-3.0, 23.0],
        [0.5, 21.5],
      ],
      endemicTo: { en: 'Democratic Republic of the Congo', bn: 'কঙ্গো গণপ্রজাতন্ত্র' },
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Hunting for bushmeat', 'Habitat loss from logging and farming', 'Civil unrest weakening protection'],
        bn: ['বুনো মাংসের জন্য শিকার', 'কাঠ সংগ্রহ ও কৃষির কারণে আবাসস্থল হারানো', 'রাজনৈতিক অস্থিরতায় সুরক্ষা ব্যবস্থা দুর্বল হওয়া'],
      },
      initiatives: {
        en: ['Salonga National Park and community reserves', 'Lola ya Bonobo sanctuary and release programme'],
        bn: ['সালোঙ্গা জাতীয় উদ্যান ও স্থানীয় সম্প্রদায়ের সংরক্ষিত বন', 'লোলা ইয়া বনোবো আশ্রয়কেন্দ্র ও বনে ফেরানোর কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'Bonobos were recognised as a separate species only in 1929.',
        'Bonobos and chimpanzees are equally closely related to humans.',
      ],
      bn: [
        'বনোবোকে আলাদা প্রজাতি হিসেবে স্বীকৃতি দেওয়া হয় মাত্র ১৯২৯ সালে।',
        'মানুষের সঙ্গে বনোবো ও শিম্পাঞ্জির আত্মীয়তা সমান ঘনিষ্ঠ।',
      ],
    },
    related: ['chimpanzee', 'mountain-gorilla', 'okapi'],
  },
  {
    id: 'ring-tailed-lemur',
    commonName: { en: 'Ring-tailed Lemur', bn: 'রিং-টেইলড লেমুর' },
    scientificName: 'Lemur catta',
    altNames: {
      en: ['Lemur'],
      bn: ['লেমুর'],
    },
    category: 'mammals',
    wikiTitle: 'Ring-tailed lemur',
    description: {
      en: 'The ring-tailed lemur is the best-known primate of Madagascar, instantly recognised by its long black-and-white striped tail. It spends more time on the ground than other lemurs and lives in female-led troops. Like all lemurs, it is found naturally nowhere else on Earth.',
      bn: 'রিং-টেইলড লেমুর মাদাগাস্কারের সবচেয়ে পরিচিত প্রাইমেট; সাদা-কালো ডোরাকাটা লম্বা লেজ দেখেই একে চেনা যায়। অন্যান্য লেমুরের চেয়ে এরা মাটিতে বেশি সময় কাটায় এবং মাদির নেতৃত্বাধীন দলে বাস করে। সব লেমুরের মতোই প্রাকৃতিকভাবে পৃথিবীর আর কোথাও এদের পাওয়া যায় না।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Primates',
      family: 'Lemuridae',
      genus: 'Lemur',
      species: 'L. catta',
    },
    physical: {
      size: {
        en: 'Head-and-body length 39–46 cm; tail 56–63 cm',
        bn: 'মাথা ও দেহ ৩৯–৪৬ সেমি; লেজ ৫৬–৬৩ সেমি',
      },
      weight: { en: '2.2–3.5 kg', bn: '২.২–৩.৫ কেজি' },
      lifespan: {
        en: 'About 16–19 years in the wild; over 25 years in captivity',
        bn: 'বনে প্রায় ১৬–১৯ বছর; আবদ্ধ অবস্থায় ২৫ বছরের বেশি',
      },
      features: {
        en: [
          'Tail with 13–14 alternating black and white rings',
          'Grey body, white face and black "mask" around orange eyes',
          'Scent glands on wrists and chest',
        ],
        bn: [
          'লেজে ১৩–১৪টি পর্যায়ক্রমিক সাদা-কালো বলয়',
          'ধূসর শরীর, সাদা মুখ এবং কমলা চোখের চারপাশে কালো "মুখোশ"',
          'কবজি ও বুকে গন্ধগ্রন্থি',
        ],
      },
    },
    habitat: {
      en: 'Dry deciduous forests, gallery forests along rivers and spiny scrub',
      bn: 'শুষ্ক পত্রঝরা বন, নদীতীরের বন ও কাঁটাঝোপ',
    },
    habitats: ['tropical-forest', 'desert'],
    regions: ['africa'],
    distribution: {
      en: 'Southern and south-western Madagascar.',
      bn: 'মাদাগাস্কারের দক্ষিণ ও দক্ষিণ-পশ্চিমাঞ্চল।',
    },
    climate: {
      en: 'Hot, semi-arid climate with a long dry season',
      bn: 'দীর্ঘ শুষ্ক মৌসুমসহ উষ্ণ, আধা-শুষ্ক জলবায়ু',
    },
    diet: {
      en: 'Omnivore — fruit (especially tamarind), leaves, flowers, bark, sap and insects',
      bn: 'সর্বভুক — ফল (বিশেষ করে তেঁতুল), পাতা, ফুল, বাকল, গাছের রস ও পোকামাকড়',
    },
    ecologicalRole: {
      en: 'Disperses seeds and pollinates some plants in Madagascar’s dry forests.',
      bn: 'মাদাগাস্কারের শুষ্ক বনে বীজ ছড়ায় এবং কিছু উদ্ভিদের পরাগায়নে সাহায্য করে।',
    },
    behavior: {
      en: 'Lives in troops of about 6–30 dominated by females; sunbathes in the morning and holds "stink fights" by wafting scent with its tail.',
      bn: 'মাদিদের কর্তৃত্বে প্রায় ৬–৩০ সদস্যের দলে বাস করে; সকালে রোদ পোহায় এবং লেজে গন্ধ মেখে নাড়িয়ে প্রতিপক্ষের সঙ্গে "দুর্গন্ধের লড়াই" করে।',
    },
    range: {
      native: [
        [-23.4, 43.8],
        [-24.5, 46.0],
        [-22.3, 45.3],
        [-25.0, 46.9],
        [-23.0, 44.5],
      ],
      endemicTo: { en: 'Madagascar', bn: 'মাদাগাস্কার' },
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Forest loss for farming and charcoal', 'Hunting for food', 'Capture for the illegal pet trade'],
        bn: ['কৃষি ও কাঠকয়লার জন্য বন ধ্বংস', 'খাবারের জন্য শিকার', 'অবৈধ পোষা প্রাণী বাণিজ্যের জন্য ধরা'],
      },
      initiatives: {
        en: ['Protected areas such as Isalo and Andohahela National Parks', 'Large coordinated zoo breeding programmes'],
        bn: ['ইসালো ও আন্দোহাহেলা জাতীয় উদ্যানের মতো সংরক্ষিত এলাকা', 'চিড়িয়াখানাগুলোর সমন্বিত প্রজনন কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'Lemurs evolved in isolation on Madagascar for tens of millions of years.',
        'Troops raise their tails like flags to stay together while walking.',
      ],
      bn: [
        'কোটি কোটি বছর ধরে বিচ্ছিন্ন মাদাগাস্কার দ্বীপে লেমুরদের বিবর্তন ঘটেছে।',
        'হাঁটার সময় দলের সবাই পতাকার মতো লেজ উঁচিয়ে রাখে, যাতে কেউ দলছুট না হয়।',
      ],
    },
    related: ['chimpanzee', 'meerkat'],
  },
  {
    id: 'giraffe',
    commonName: { en: 'Giraffe', bn: 'জিরাফ' },
    scientificName: 'Giraffa camelopardalis',
    altNames: {
      en: ['Northern Giraffe', 'Camelopard'],
      bn: ['উত্তরাঞ্চলীয় জিরাফ', 'ক্যামেলোপার্ড'],
    },
    category: 'mammals',
    wikiTitle: 'Giraffe',
    description: {
      en: 'The giraffe is the tallest living animal, reaching treetop leaves that other grazers cannot. Its long neck holds the same number of vertebrae as a human’s — just seven — but each is greatly elongated. Each giraffe’s patchwork coat pattern is unique.',
      bn: 'জিরাফ পৃথিবীর সবচেয়ে লম্বা জীবিত প্রাণী; অন্য তৃণভোজীরা যে উঁচু ডালের পাতা নাগাল পায় না, জিরাফ তা সহজেই খেতে পারে। মানুষের মতো এদের গলাতেও মাত্র সাতটি কশেরুকা, তবে প্রতিটি অনেক লম্বা। প্রতিটি জিরাফের গায়ের ছোপের নকশা আলাদা।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Giraffidae',
      genus: 'Giraffa',
      species: 'G. camelopardalis',
    },
    physical: {
      size: {
        en: 'Height 4.3–5.7 m to the top of the horns',
        bn: 'শিংয়ের মাথা পর্যন্ত উচ্চতা ৪.৩–৫.৭ মিটার',
      },
      weight: {
        en: 'Males about 1,200–1,900 kg; females about 700–1,200 kg',
        bn: 'পুরুষ প্রায় ১,২০০–১,৯০০ কেজি; মাদি প্রায় ৭০০–১,২০০ কেজি',
      },
      lifespan: { en: 'About 20–25 years', bn: 'প্রায় ২০–২৫ বছর' },
      features: {
        en: [
          'Extremely long neck and legs',
          'Skin-covered horn-like ossicones on the head',
          'Dark, prehensile tongue up to about 50 cm long',
        ],
        bn: [
          'অত্যন্ত লম্বা গলা ও পা',
          'মাথায় চামড়ায় ঢাকা শিংয়ের মতো "অসিকোন"',
          'প্রায় ৫০ সেমি পর্যন্ত লম্বা কালচে, প্যাঁচিয়ে ধরতে সক্ষম জিভ',
        ],
      },
    },
    habitat: {
      en: 'Savannas and open woodlands with acacia trees',
      bn: 'বাবলা (অ্যাকাশিয়া) গাছযুক্ত সাভানা ও খোলা বনভূমি',
    },
    habitats: ['grassland'],
    regions: ['africa'],
    distribution: {
      en: 'Scattered populations across sub-Saharan Africa, from Niger and Chad to Kenya, Namibia and South Africa.',
      bn: 'সাহারার দক্ষিণের আফ্রিকায় ছড়ানো-ছিটানো জনগোষ্ঠী — নাইজার ও চাদ থেকে কেনিয়া, নামিবিয়া ও দক্ষিণ আফ্রিকা পর্যন্ত।',
    },
    climate: {
      en: 'Warm, seasonally dry tropical climate',
      bn: 'উষ্ণ, ঋতুভেদে শুষ্ক ক্রান্তীয় জলবায়ু',
    },
    diet: {
      en: 'Herbivore (browser) — mainly acacia leaves, shoots, flowers and fruit',
      bn: 'তৃণভোজী (ডালপাতাভোজী) — মূলত বাবলার পাতা, কচি ডগা, ফুল ও ফল',
    },
    ecologicalRole: {
      en: 'Prunes treetops, shaping savanna trees, and helps pollinate and disperse acacias.',
      bn: 'গাছের মাথা ছেঁটে সাভানার গাছের গড়ন ঠিক করে এবং বাবলা গাছের পরাগায়ন ও বীজ ছড়াতে সাহায্য করে।',
    },
    behavior: {
      en: 'Lives in loose, changing herds; males fight by swinging their necks in contests called "necking".',
      bn: 'ঢিলেঢালা, প্রায়ই বদলে যাওয়া পালে থাকে; পুরুষেরা গলা দুলিয়ে একে অপরকে আঘাত করে লড়াই করে, যাকে "নেকিং" বলে।',
    },
    range: {
      native: [
        [-2.3, 34.8],
        [-1.5, 36.8],
        [-19.0, 23.5],
        [-19.5, 15.0],
        [-24.0, 31.5],
        [13.5, 2.5],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      population: {
        en: 'Roughly 117,000 individuals across Africa',
        bn: 'সমগ্র আফ্রিকায় আনুমানিক ১,১৭,০০০টি',
      },
      threats: {
        en: ['Habitat loss and fragmentation', 'Poaching for meat and hides', 'Civil unrest in parts of its range'],
        bn: ['আবাসস্থল হারানো ও খণ্ডিত হওয়া', 'মাংস ও চামড়ার জন্য চোরাশিকার', 'বিচরণ এলাকার কিছু অংশে রাজনৈতিক অস্থিরতা'],
      },
      initiatives: {
        en: ['Translocations to restore giraffes to former ranges', 'Giraffe Conservation Foundation monitoring programmes'],
        bn: ['আগের বিচরণ এলাকায় জিরাফ ফিরিয়ে নিতে স্থানান্তর কর্মসূচি', 'জিরাফ কনজারভেশন ফাউন্ডেশনের পর্যবেক্ষণ কর্মসূচি'],
      },
      assessed: '2016',
    },
    facts: {
      en: [
        'Recent genetic studies suggest there may be four separate giraffe species.',
        'A newborn giraffe drops about 2 m to the ground at birth.',
      ],
      bn: [
        'সাম্প্রতিক জিনগত গবেষণা বলছে, জিরাফ আসলে চারটি আলাদা প্রজাতিও হতে পারে।',
        'জন্মের সময় জিরাফের বাচ্চা প্রায় ২ মিটার উঁচু থেকে মাটিতে পড়ে।',
      ],
    },
    related: ['okapi', 'african-bush-elephant', 'plains-zebra'],
  },
  {
    id: 'plains-zebra',
    commonName: { en: 'Plains Zebra', bn: 'জেব্রা' },
    scientificName: 'Equus quagga',
    altNames: {
      en: ['Common Zebra', 'Burchell’s Zebra', 'Zebra'],
      bn: ['সমভূমির জেব্রা', 'সাধারণ জেব্রা', 'ডোরাকাটা ঘোড়া'],
    },
    category: 'mammals',
    wikiTitle: 'Plains zebra',
    description: {
      en: 'The plains zebra is the most common and widespread zebra, a wild relative of the horse. Its bold black-and-white stripes may confuse predators and deter biting flies. Huge herds join the great wildebeest migration across the Serengeti and Maasai Mara.',
      bn: 'সমভূমির জেব্রা সবচেয়ে সাধারণ ও বিস্তৃত জেব্রা প্রজাতি, যা ঘোড়ার বন্য আত্মীয়। এদের স্পষ্ট সাদা-কালো ডোরা শিকারিকে বিভ্রান্ত করে এবং কামড়ানো মাছি দূরে রাখে বলে ধারণা করা হয়। সেরেঙ্গেটি ও মাসাই মারার বিখ্যাত ওয়াইল্ডবিস্ট অভিবাসনে বিশাল জেব্রার পালও যোগ দেয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Perissodactyla',
      family: 'Equidae',
      genus: 'Equus',
      species: 'E. quagga',
    },
    physical: {
      size: {
        en: 'Shoulder height 1.1–1.45 m; body length about 2–2.5 m',
        bn: 'কাঁধ পর্যন্ত উচ্চতা ১.১–১.৪৫ মিটার; দেহের দৈর্ঘ্য প্রায় ২–২.৫ মিটার',
      },
      weight: { en: '175–385 kg', bn: '১৭৫–৩৮৫ কেজি' },
      lifespan: {
        en: 'About 20 years in the wild; up to 40 in captivity',
        bn: 'বনে প্রায় ২০ বছর; আবদ্ধ অবস্থায় ৪০ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Broad stripes that wrap around the belly',
          'Faint brownish "shadow stripes" between black ones in southern populations',
          'Short, upright mane',
        ],
        bn: [
          'চওড়া ডোরা পেট পর্যন্ত ঘুরে এসেছে',
          'দক্ষিণাঞ্চলের জেব্রাদের কালো ডোরার মাঝে হালকা বাদামি "ছায়া-ডোরা"',
          'খাটো, খাড়া কেশর',
        ],
      },
    },
    habitat: {
      en: 'Grasslands, savannas and open woodlands near water',
      bn: 'পানির কাছাকাছি তৃণভূমি, সাভানা ও খোলা বনভূমি',
    },
    habitats: ['grassland'],
    regions: ['africa'],
    distribution: {
      en: 'Eastern and southern Africa, from southern Ethiopia to South Africa.',
      bn: 'পূর্ব ও দক্ষিণ আফ্রিকা — দক্ষিণ ইথিওপিয়া থেকে দক্ষিণ আফ্রিকা পর্যন্ত।',
    },
    climate: {
      en: 'Tropical and subtropical savanna climate',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় সাভানা জলবায়ু',
    },
    diet: {
      en: 'Herbivore (grazer) — mainly tough, tall grasses',
      bn: 'তৃণভোজী — মূলত শক্ত ও লম্বা ঘাস',
    },
    ecologicalRole: {
      en: 'Eats the coarse tops of tall grasses, opening up fresh growth for wildebeest and gazelles, and is key prey for lions and hyenas.',
      bn: 'লম্বা ঘাসের শক্ত আগা খেয়ে ফেলে, ফলে ওয়াইল্ডবিস্ট ও গ্যাজেলের জন্য নতুন কচি ঘাস জন্মায়; সিংহ ও হায়েনার গুরুত্বপূর্ণ শিকারও।',
    },
    behavior: {
      en: 'Lives in harems of one stallion with several mares and foals, which join into large herds; migrates seasonally in search of grass and water.',
      bn: 'একটি পুরুষ, কয়েকটি মাদি ও বাচ্চাদের নিয়ে পারিবারিক দল গঠন করে, যা মিলে বড় পাল হয়; ঘাস ও পানির খোঁজে ঋতুভিত্তিক অভিবাসন করে।',
    },
    range: {
      native: [
        [-2.3, 34.8],
        [-1.5, 35.1],
        [-19.0, 23.5],
        [-24.0, 31.5],
        [-13.0, 31.5],
        [5.5, 37.0],
      ],
    },
    conservation: {
      status: 'NT',
      trend: 'stable',
      threats: {
        en: ['Hunting for meat and hides', 'Competition with livestock and fencing of rangelands'],
        bn: ['মাংস ও চামড়ার জন্য শিকার', 'গবাদিপশুর সঙ্গে প্রতিযোগিতা ও চারণভূমিতে বেড়া দেওয়া'],
      },
      initiatives: {
        en: ['Protected migration routes in the Serengeti–Mara ecosystem', 'The Quagga Project, which breeds back quagga-like zebras'],
        bn: ['সেরেঙ্গেটি–মারা অঞ্চলে সংরক্ষিত অভিবাসন পথ', 'কোয়াগা প্রজেক্ট, যা প্রজননের মাধ্যমে কোয়াগার মতো জেব্রা ফিরিয়ে আনার চেষ্টা করছে'],
      },
      assessed: '2016',
    },
    facts: {
      en: [
        'No two zebras have exactly the same stripe pattern.',
        'The extinct quagga was a half-striped form of the plains zebra.',
      ],
      bn: [
        'দুটি জেব্রার ডোরার নকশা কখনো হুবহু এক হয় না।',
        'বিলুপ্ত কোয়াগা ছিল আধা-ডোরাকাটা এক ধরনের সমভূমির জেব্রা।',
      ],
    },
    related: ['giraffe', 'lion', 'white-rhinoceros'],
  },
];
