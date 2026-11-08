import type { Species } from '@/types';

export const mammalsAfrEur2: Species[] = [
  {
    id: 'black-rhinoceros',
    commonName: { en: 'Black Rhinoceros', bn: 'কালো গন্ডার' },
    scientificName: 'Diceros bicornis',
    altNames: {
      en: ['Black Rhino', 'Hook-lipped Rhinoceros'],
      bn: ['কালো রাইনো', 'বাঁকা-ঠোঁটের গন্ডার'],
    },
    category: 'mammals',
    wikiTitle: 'Black rhinoceros',
    description: {
      en: 'The black rhinoceros is a two-horned rhino of eastern and southern Africa, actually grey rather than black. It uses its pointed, hooked upper lip to pluck leaves and twigs from shrubs. Poaching for horn drove it close to extinction in the late 20th century, but intense protection has helped numbers slowly recover.',
      bn: 'কালো গন্ডার পূর্ব ও দক্ষিণ আফ্রিকার দুই শিংওয়ালা গন্ডার; নাম কালো হলেও এদের গায়ের রং আসলে ধূসর। সুচালো, বাঁকানো ওপরের ঠোঁট দিয়ে এরা ঝোপঝাড়ের পাতা ও ডাল ছিঁড়ে খায়। বিংশ শতাব্দীর শেষ দিকে শিংয়ের জন্য চোরাশিকারে এরা প্রায় বিলুপ্তির মুখে পড়েছিল, তবে কঠোর সুরক্ষায় সংখ্যা ধীরে ধীরে বাড়ছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Perissodactyla',
      family: 'Rhinocerotidae',
      genus: 'Diceros',
      species: 'D. bicornis',
    },
    physical: {
      size: {
        en: 'Body length 3–3.75 m; shoulder height 1.4–1.8 m',
        bn: 'দেহের দৈর্ঘ্য ৩–৩.৭৫ মিটার; কাঁধ পর্যন্ত উচ্চতা ১.৪–১.৮ মিটার',
      },
      weight: { en: '800–1,400 kg', bn: '৮০০–১,৪০০ কেজি' },
      lifespan: { en: 'About 35–50 years', bn: 'প্রায় ৩৫–৫০ বছর' },
      features: {
        en: [
          'Pointed, prehensile upper lip for browsing',
          'Two horns made of keratin, the front one longer',
          'Smaller head held higher than the white rhino’s',
        ],
        bn: [
          'ডালপাতা ছিঁড়ে খাওয়ার উপযোগী সুচালো, আঁকড়ে ধরতে সক্ষম ওপরের ঠোঁট',
          'কেরাটিনে তৈরি দুটি শিং; সামনেরটি বড়',
          'সাদা গন্ডারের চেয়ে ছোট মাথা, যা উঁচু করে রাখে',
        ],
      },
    },
    habitat: {
      en: 'Bushland, dry savanna woodland and semi-desert scrub',
      bn: 'ঝোপঝাড়, শুষ্ক সাভানা বনভূমি ও আধা-মরু ঝোপ',
    },
    habitats: ['grassland', 'desert'],
    regions: ['africa'],
    distribution: {
      en: 'Mainly South Africa, Namibia, Kenya and Zimbabwe, with smaller populations elsewhere in eastern and southern Africa.',
      bn: 'মূলত দক্ষিণ আফ্রিকা, নামিবিয়া, কেনিয়া ও জিম্বাবুয়ে; পূর্ব ও দক্ষিণ আফ্রিকার অন্যান্য দেশে ছোট জনগোষ্ঠী।',
    },
    climate: {
      en: 'Hot, dry tropical and semi-arid climates',
      bn: 'উষ্ণ ও শুষ্ক ক্রান্তীয় এবং আধা-শুষ্ক জলবায়ু',
    },
    diet: {
      en: 'Herbivore (browser) — leaves, twigs, shoots and fruit of woody plants',
      bn: 'তৃণভোজী (ডালপাতাভোজী) — কাঠল গাছের পাতা, ডাল, কচি ডগা ও ফল',
    },
    ecologicalRole: {
      en: 'Shapes bushland by browsing woody plants and spreads seeds in its dung.',
      bn: 'কাঠল গাছপালা খেয়ে ঝোপঝাড়ের গঠন নিয়ন্ত্রণ করে এবং মলের মাধ্যমে বীজ ছড়ায়।',
    },
    behavior: {
      en: 'Mostly solitary and can be aggressive when disturbed; marks territory with dung middens and urine.',
      bn: 'মূলত একাকী এবং বিরক্ত হলে আক্রমণাত্মক হয়ে উঠতে পারে; মলের স্তূপ ও প্রস্রাব দিয়ে এলাকা চিহ্নিত করে।',
    },
    range: {
      native: [
        [-28.2, 31.9],
        [-19.0, 15.5],
        [-20.5, 14.0],
        [0.0, 36.9],
        [-1.5, 35.0],
        [-17.8, 29.5],
      ],
    },
    conservation: {
      status: 'CR',
      trend: 'increasing',
      population: {
        en: 'Roughly 6,000–6,500 individuals',
        bn: 'আনুমানিক ৬,০০০–৬,৫০০টি',
      },
      threats: {
        en: ['Poaching for horn, driven by illegal trade in Asia', 'Small, isolated populations'],
        bn: ['এশিয়ার অবৈধ বাজারের চাহিদায় শিংয়ের জন্য চোরাশিকার', 'ছোট ও বিচ্ছিন্ন জনগোষ্ঠী'],
      },
      initiatives: {
        en: ['Armed anti-poaching patrols and horn monitoring', 'Translocations to establish new breeding populations'],
        bn: ['সশস্ত্র চোরাশিকার-বিরোধী টহল ও শিং পর্যবেক্ষণ', 'নতুন প্রজনন জনগোষ্ঠী গড়তে গন্ডার স্থানান্তর'],
      },
      assessed: '2020',
    },
    facts: {
      en: [
        'Black rhino numbers fell by more than 90% between 1970 and the mid-1990s.',
        'Despite their bulk, black rhinos can charge at around 50 km/h.',
      ],
      bn: [
        '১৯৭০ থেকে ১৯৯০-এর দশকের মাঝামাঝি পর্যন্ত কালো গন্ডারের সংখ্যা ৯০ শতাংশের বেশি কমে যায়।',
        'বিশাল দেহ সত্ত্বেও কালো গন্ডার ঘণ্টায় প্রায় ৫০ কিলোমিটার বেগে তেড়ে আসতে পারে।',
      ],
    },
    related: ['white-rhinoceros', 'african-bush-elephant'],
  },
  {
    id: 'white-rhinoceros',
    commonName: { en: 'White Rhinoceros', bn: 'সাদা গন্ডার' },
    scientificName: 'Ceratotherium simum',
    altNames: {
      en: ['White Rhino', 'Square-lipped Rhinoceros'],
      bn: ['সাদা রাইনো', 'চৌকো-ঠোঁটের গন্ডার'],
    },
    category: 'mammals',
    wikiTitle: 'White rhinoceros',
    description: {
      en: 'The white rhinoceros is the largest rhino and one of the biggest land mammals after elephants. It is a grazer with a broad, square lip for cropping grass. The southern subspecies recovered from fewer than 100 animals to thousands, while the northern white rhino survives as only two females.',
      bn: 'সাদা গন্ডার সবচেয়ে বড় গন্ডার এবং হাতির পরেই অন্যতম বৃহৎ স্থলচর স্তন্যপায়ী। ঘাস ছেঁটে খাওয়ার জন্য এদের ঠোঁট চওড়া ও চৌকো। দক্ষিণাঞ্চলীয় উপপ্রজাতি ১০০টিরও কম থেকে বেড়ে কয়েক হাজারে পৌঁছেছে, কিন্তু উত্তরাঞ্চলীয় সাদা গন্ডারের মাত্র দুটি মাদি বেঁচে আছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Perissodactyla',
      family: 'Rhinocerotidae',
      genus: 'Ceratotherium',
      species: 'C. simum',
    },
    physical: {
      size: {
        en: 'Body length 3.4–4 m; shoulder height 1.6–1.85 m',
        bn: 'দেহের দৈর্ঘ্য ৩.৪–৪ মিটার; কাঁধ পর্যন্ত উচ্চতা ১.৬–১.৮৫ মিটার',
      },
      weight: {
        en: 'Males about 2,000–2,300 kg; females about 1,600–1,700 kg',
        bn: 'পুরুষ প্রায় ২,০০০–২,৩০০ কেজি; মাদি প্রায় ১,৬০০–১,৭০০ কেজি',
      },
      lifespan: { en: 'About 40–50 years', bn: 'প্রায় ৪০–৫০ বছর' },
      features: {
        en: [
          'Broad, square upper lip for grazing',
          'Large head carried low to the ground',
          'Prominent hump on the back of the neck',
        ],
        bn: [
          'ঘাস খাওয়ার উপযোগী চওড়া, চৌকো ওপরের ঠোঁট',
          'মাটির কাছাকাছি নামিয়ে রাখা বড় মাথা',
          'ঘাড়ের পেছনে স্পষ্ট কুঁজ',
        ],
      },
    },
    habitat: {
      en: 'Short-grass savannas and grasslands with water and mud wallows',
      bn: 'পানি ও কাদাগর্তযুক্ত ছোট ঘাসের সাভানা ও তৃণভূমি',
    },
    habitats: ['grassland'],
    regions: ['africa'],
    distribution: {
      en: 'Mostly South Africa, with populations in Namibia, Kenya, Zimbabwe, Botswana and other countries.',
      bn: 'বেশিরভাগই দক্ষিণ আফ্রিকায়; এছাড়া নামিবিয়া, কেনিয়া, জিম্বাবুয়ে, বতসোয়ানা ও অন্যান্য দেশে।',
    },
    climate: {
      en: 'Warm subtropical and tropical savanna climate',
      bn: 'উষ্ণ উপক্রান্তীয় ও ক্রান্তীয় সাভানা জলবায়ু',
    },
    diet: {
      en: 'Herbivore (grazer) — short grasses',
      bn: 'তৃণভোজী — ছোট ঘাস',
    },
    ecologicalRole: {
      en: 'Creates "grazing lawns" of short grass that benefit antelopes and other grazers.',
      bn: 'ঘাস খেয়ে ছোট ঘাসের "চারণ-লন" তৈরি করে, যা হরিণজাতীয় ও অন্যান্য তৃণভোজীর উপকারে আসে।',
    },
    behavior: {
      en: 'More sociable than the black rhino; females and young form small groups, while dominant bulls hold territories.',
      bn: 'কালো গন্ডারের চেয়ে বেশি সামাজিক; মাদি ও বাচ্চারা ছোট দল গড়ে, আর প্রভাবশালী পুরুষেরা নিজস্ব এলাকা দখলে রাখে।',
    },
    range: {
      native: [
        [-28.2, 31.9],
        [-24.0, 31.5],
        [-25.3, 27.1],
        [-19.5, 15.9],
        [0.0, 36.9],
      ],
    },
    conservation: {
      status: 'NT',
      trend: 'decreasing',
      population: {
        en: 'Roughly 16,000–17,000 individuals',
        bn: 'আনুমানিক ১৬,০০০–১৭,০০০টি',
      },
      threats: {
        en: ['Poaching for horn', 'Rising costs of protection for private and state reserves'],
        bn: ['শিংয়ের জন্য চোরাশিকার', 'সরকারি ও ব্যক্তিগত সংরক্ষিত এলাকায় সুরক্ষার ব্যয় বৃদ্ধি'],
      },
      initiatives: {
        en: ['Operation Rhino, which saved the southern white rhino', 'IVF and stem-cell work to save the northern white rhino'],
        bn: ['অপারেশন রাইনো, যা দক্ষিণাঞ্চলীয় সাদা গন্ডারকে রক্ষা করেছিল', 'উত্তরাঞ্চলীয় সাদা গন্ডার বাঁচাতে আইভিএফ ও স্টেম-সেল গবেষণা'],
      },
      assessed: '2020',
    },
    facts: {
      en: [
        '"White" probably comes from a mistranslation of the Afrikaans/Dutch word for "wide", referring to its lip.',
        'The last male northern white rhino, Sudan, died in 2018.',
      ],
      bn: [
        'চওড়া ঠোঁট বোঝাতে আফ্রিকানস/ডাচ ভাষার "wide" শব্দটির ভুল অনুবাদ থেকে "হোয়াইট" নামটি এসেছে বলে ধারণা করা হয়।',
        'উত্তরাঞ্চলীয় সাদা গন্ডারের শেষ পুরুষ "সুদান" ২০১৮ সালে মারা যায়।',
      ],
    },
    related: ['black-rhinoceros', 'african-bush-elephant', 'plains-zebra'],
  },
  {
    id: 'african-wild-dog',
    commonName: { en: 'African Wild Dog', bn: 'আফ্রিকান বুনো কুকুর' },
    scientificName: 'Lycaon pictus',
    altNames: {
      en: ['Painted Wolf', 'Cape Hunting Dog', 'Painted Dog'],
      bn: ['রঙিন নেকড়ে', 'কেপ শিকারি কুকুর', 'চিত্রিত কুকুর'],
    },
    category: 'mammals',
    wikiTitle: 'African wild dog',
    description: {
      en: 'The African wild dog is a highly social canid with a mottled coat of black, brown, yellow and white patches. Packs hunt cooperatively and are among the most successful hunters in Africa. It is now one of the continent’s most endangered carnivores.',
      bn: 'আফ্রিকান বুনো কুকুর অত্যন্ত সামাজিক কুকুরগোত্রীয় প্রাণী; গায়ে কালো, বাদামি, হলুদ ও সাদা ছোপের এলোমেলো নকশা। এরা দল বেঁধে সমন্বিতভাবে শিকার করে এবং আফ্রিকার সবচেয়ে সফল শিকারিদের অন্যতম। বর্তমানে এটি মহাদেশটির সবচেয়ে বিপন্ন মাংসাশী প্রাণীগুলোর একটি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Canidae',
      genus: 'Lycaon',
      species: 'L. pictus',
    },
    physical: {
      size: {
        en: 'Head-and-body length 0.75–1.1 m; shoulder height 60–75 cm',
        bn: 'মাথা ও দেহ ০.৭৫–১.১ মিটার; কাঁধ পর্যন্ত উচ্চতা ৬০–৭৫ সেমি',
      },
      weight: { en: '18–36 kg', bn: '১৮–৩৬ কেজি' },
      lifespan: { en: 'About 10–11 years', bn: 'প্রায় ১০–১১ বছর' },
      features: {
        en: [
          'Unique patchwork coat pattern on every individual',
          'Large, rounded ears',
          'Only four toes on each foot, unlike other dogs',
        ],
        bn: [
          'প্রত্যেকের গায়ে আলাদা রঙিন ছোপের নকশা',
          'বড়, গোলাকার কান',
          'অন্য কুকুরদের মতো নয়, প্রতিটি পায়ে মাত্র চারটি আঙুল',
        ],
      },
    },
    habitat: {
      en: 'Savannas, open woodlands and semi-arid scrub',
      bn: 'সাভানা, খোলা বনভূমি ও আধা-শুষ্ক ঝোপঝাড়',
    },
    habitats: ['grassland', 'desert'],
    regions: ['africa'],
    distribution: {
      en: 'Fragmented populations in eastern and southern Africa, especially Tanzania, Botswana, Zimbabwe, Zambia and South Africa.',
      bn: 'পূর্ব ও দক্ষিণ আফ্রিকায় বিচ্ছিন্ন জনগোষ্ঠী, বিশেষ করে তানজানিয়া, বতসোয়ানা, জিম্বাবুয়ে, জাম্বিয়া ও দক্ষিণ আফ্রিকায়।',
    },
    climate: {
      en: 'Warm tropical and semi-arid climates',
      bn: 'উষ্ণ ক্রান্তীয় ও আধা-শুষ্ক জলবায়ু',
    },
    diet: {
      en: 'Carnivore — mainly medium-sized antelopes such as impala and kudu',
      bn: 'মাংসাশী — মূলত ইম্পালা ও কুডুর মতো মাঝারি আকারের হরিণজাতীয় প্রাণী',
    },
    ecologicalRole: {
      en: 'A pack predator that removes weak and sick antelopes, keeping prey herds healthy.',
      bn: 'দলবদ্ধ শিকারি হিসেবে দুর্বল ও অসুস্থ হরিণজাতীয় প্রাণী শিকার করে শিকারের পালকে সুস্থ রাখে।',
    },
    behavior: {
      en: 'Packs share food with pups and sick members, and run down prey in long, coordinated chases.',
      bn: 'দলের সবাই বাচ্চা ও অসুস্থ সদস্যদের সঙ্গে খাবার ভাগ করে নেয় এবং দীর্ঘ, সমন্বিত দৌড়ে শিকারকে ক্লান্ত করে ধরে।',
    },
    range: {
      native: [
        [-9.0, 37.5],
        [-19.2, 23.5],
        [-18.5, 26.5],
        [-13.0, 31.5],
        [-24.0, 31.5],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      population: {
        en: 'About 6,600 individuals, of which only around 1,400 are breeding adults',
        bn: 'প্রায় ৬,৬০০টি, যার মধ্যে প্রজননক্ষম প্রাপ্তবয়স্ক মাত্র প্রায় ১,৪০০টি',
      },
      threats: {
        en: ['Habitat fragmentation', 'Conflict with livestock farmers', 'Diseases such as rabies and canine distemper from domestic dogs'],
        bn: ['আবাসস্থল খণ্ডিত হওয়া', 'গবাদিপশু পালনকারীদের সঙ্গে সংঘাত', 'গৃহপালিত কুকুর থেকে জলাতঙ্ক ও ক্যানাইন ডিসটেম্পারের মতো রোগ'],
      },
      initiatives: {
        en: ['Vaccination of domestic dogs near wild dog areas', 'Wildlife corridors linking protected areas'],
        bn: ['বুনো কুকুরের এলাকার কাছে গৃহপালিত কুকুরকে টিকা দেওয়া', 'সংরক্ষিত এলাকাগুলোর মধ্যে বন্যপ্রাণী চলাচলের করিডর'],
      },
    },
    facts: {
      en: [
        'Hunts by wild dog packs succeed far more often than those of lions.',
        'Pack members "vote" on whether to start a hunt by sneezing.',
      ],
      bn: [
        'বুনো কুকুরের দলের শিকারে সফলতার হার সিংহের চেয়ে অনেক বেশি।',
        'শিকারে বের হবে কি না, দলের সদস্যরা হাঁচি দিয়ে যেন "ভোট" দেয়।',
      ],
    },
    related: ['grey-wolf', 'spotted-hyena', 'cheetah'],
  },
  {
    id: 'spotted-hyena',
    commonName: { en: 'Spotted Hyena', bn: 'ফুটকি হায়েনা' },
    scientificName: 'Crocuta crocuta',
    altNames: {
      en: ['Laughing Hyena', 'Hyena'],
      bn: ['হাসুনে হায়েনা', 'হায়েনা'],
    },
    category: 'mammals',
    wikiTitle: 'Spotted hyena',
    description: {
      en: 'The spotted hyena is the largest hyena and a skilled hunter, not merely a scavenger as often believed. It lives in large female-dominated clans and is famous for its "laughing" calls. Its massive jaws can crush bones to reach the marrow.',
      bn: 'ফুটকি হায়েনা সবচেয়ে বড় হায়েনা এবং দক্ষ শিকারি — প্রচলিত ধারণার মতো কেবল মরা প্রাণীভোজী নয়। এরা মাদিদের কর্তৃত্বে বড় দলে বাস করে এবং "হাসির" মতো ডাকের জন্য বিখ্যাত। এদের প্রচণ্ড শক্তিশালী চোয়াল হাড় গুঁড়িয়ে মজ্জা পর্যন্ত খেতে পারে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Hyaenidae',
      genus: 'Crocuta',
      species: 'C. crocuta',
    },
    physical: {
      size: {
        en: 'Head-and-body length 0.95–1.65 m; shoulder height 70–90 cm',
        bn: 'মাথা ও দেহ ০.৯৫–১.৬৫ মিটার; কাঁধ পর্যন্ত উচ্চতা ৭০–৯০ সেমি',
      },
      weight: {
        en: '40–86 kg; females are larger than males',
        bn: '৪০–৮৬ কেজি; মাদিরা পুরুষের চেয়ে বড়',
      },
      lifespan: {
        en: 'About 12–25 years',
        bn: 'প্রায় ১২–২৫ বছর',
      },
      features: {
        en: [
          'Sandy coat with dark spots and a sloping back',
          'Extremely powerful bone-crushing jaws',
          'Round ears, unlike the pointed ears of other hyenas',
        ],
        bn: [
          'বালুরঙা লোমে কালো ফুটকি এবং পেছনের দিকে ঢালু পিঠ',
          'হাড় গুঁড়িয়ে দেওয়ার মতো অত্যন্ত শক্তিশালী চোয়াল',
          'অন্য হায়েনাদের সুচালো কানের বদলে গোলাকার কান',
        ],
      },
    },
    habitat: {
      en: 'Savannas, grasslands, woodland edges, semi-deserts and mountains',
      bn: 'সাভানা, তৃণভূমি, বনের প্রান্ত, আধা-মরুভূমি ও পাহাড়',
    },
    habitats: ['grassland', 'desert', 'mountain'],
    regions: ['africa'],
    distribution: {
      en: 'Widespread in sub-Saharan Africa outside dense rainforest; densest in the Serengeti and Ngorongoro.',
      bn: 'ঘন বৃষ্টিবন বাদে সাহারার দক্ষিণের আফ্রিকায় বিস্তৃত; সেরেঙ্গেটি ও এনগোরোংগোরোতে সবচেয়ে বেশি।',
    },
    climate: {
      en: 'Tropical savanna and semi-arid climates',
      bn: 'ক্রান্তীয় সাভানা ও আধা-শুষ্ক জলবায়ু',
    },
    diet: {
      en: 'Carnivore — hunts wildebeest, zebra and antelopes, and also scavenges carcasses',
      bn: 'মাংসাশী — ওয়াইল্ডবিস্ট, জেব্রা ও হরিণজাতীয় প্রাণী শিকার করে, মৃতদেহও খায়',
    },
    ecologicalRole: {
      en: 'Both a major predator and a "clean-up crew" that recycles carcasses, bones included.',
      bn: 'একই সঙ্গে প্রধান শিকারি ও "পরিচ্ছন্নতাকর্মী" — হাড়সহ মৃতদেহ খেয়ে প্রকৃতিতে পুষ্টি ফিরিয়ে দেয়।',
    },
    behavior: {
      en: 'Lives in clans of up to 80 led by females, with a strict rank order; communicates with whoops, giggles and scent marks.',
      bn: 'মাদিদের নেতৃত্বে ৮০ সদস্য পর্যন্ত দলে থাকে, যেখানে কঠোর পদমর্যাদা মানা হয়; হুপ-হুপ ডাক, খিলখিল শব্দ ও গন্ধচিহ্নে যোগাযোগ করে।',
    },
    range: {
      native: [
        [-3.2, 35.5],
        [-2.3, 34.8],
        [-19.2, 23.5],
        [-24.0, 31.5],
        [9.3, 42.1],
        [8.5, 2.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Persecution by poisoning and trapping', 'Habitat loss outside protected areas'],
        bn: ['বিষ প্রয়োগ ও ফাঁদ পেতে হত্যা', 'সংরক্ষিত এলাকার বাইরে আবাসস্থল হারানো'],
      },
      initiatives: {
        en: ['Long-term research such as the Serengeti Hyena Project', 'Protection within national parks'],
        bn: ['সেরেঙ্গেটি হায়েনা প্রজেক্টের মতো দীর্ঘমেয়াদি গবেষণা', 'জাতীয় উদ্যানের ভেতরে সুরক্ষা'],
      },
    },
    facts: {
      en: [
        'Spotted hyenas kill most of the food they eat in places like Ngorongoro.',
        'Despite looking dog-like, hyenas are more closely related to cats and mongooses.',
      ],
      bn: [
        'এনগোরোংগোরোর মতো এলাকায় ফুটকি হায়েনা নিজের খাবারের বেশিরভাগই নিজে শিকার করে।',
        'দেখতে কুকুরের মতো হলেও হায়েনা আসলে বিড়াল ও বেজির বেশি ঘনিষ্ঠ আত্মীয়।',
      ],
    },
    related: ['lion', 'african-wild-dog', 'aardvark'],
  },
  {
    id: 'okapi',
    commonName: { en: 'Okapi', bn: 'ওকাপি' },
    scientificName: 'Okapia johnstoni',
    altNames: {
      en: ['Forest Giraffe', 'Zebra Giraffe'],
      bn: ['বনের জিরাফ', 'জেব্রা-জিরাফ'],
    },
    category: 'mammals',
    wikiTitle: 'Okapi',
    description: {
      en: 'The okapi is the only living relative of the giraffe, though its striped legs make it look like a zebra. It lives deep in the Ituri rainforest of the Democratic Republic of the Congo and was unknown to Western science until 1901. Shy and solitary, it is a national symbol of the DR Congo.',
      bn: 'ওকাপি জিরাফের একমাত্র জীবিত আত্মীয়, যদিও ডোরাকাটা পায়ের কারণে দেখতে অনেকটা জেব্রার মতো। এরা কঙ্গো গণপ্রজাতন্ত্রের ইতুরি বৃষ্টিবনের গভীরে বাস করে এবং ১৯০১ সালের আগে পশ্চিমা বিজ্ঞানীদের কাছে অজানা ছিল। লাজুক ও একাকী এই প্রাণী কঙ্গো গণপ্রজাতন্ত্রের জাতীয় প্রতীক।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Giraffidae',
      genus: 'Okapia',
      species: 'O. johnstoni',
    },
    physical: {
      size: {
        en: 'Shoulder height about 1.5 m; body length 1.9–2.5 m',
        bn: 'কাঁধ পর্যন্ত উচ্চতা প্রায় ১.৫ মিটার; দেহের দৈর্ঘ্য ১.৯–২.৫ মিটার',
      },
      weight: { en: '200–350 kg', bn: '২০০–৩৫০ কেজি' },
      lifespan: { en: 'About 20–30 years', bn: 'প্রায় ২০–৩০ বছর' },
      features: {
        en: [
          'Velvety reddish-brown coat with white stripes on the legs and rump',
          'Long, dark prehensile tongue that can clean its own ears',
          'Males have short, skin-covered ossicones',
        ],
        bn: [
          'মখমলের মতো লালচে-বাদামি লোম, পা ও নিতম্বে সাদা ডোরা',
          'লম্বা, কালচে, আঁকড়ে ধরতে সক্ষম জিভ — যা দিয়ে নিজের কানও পরিষ্কার করতে পারে',
          'পুরুষের মাথায় চামড়ায় ঢাকা ছোট অসিকোন',
        ],
      },
    },
    habitat: {
      en: 'Dense tropical rainforest',
      bn: 'ঘন ক্রান্তীয় বৃষ্টিবন',
    },
    habitats: ['tropical-forest'],
    regions: ['africa'],
    distribution: {
      en: 'Northern, central and eastern rainforests of the Democratic Republic of the Congo.',
      bn: 'কঙ্গো গণপ্রজাতন্ত্রের উত্তর, মধ্য ও পূর্বাঞ্চলের বৃষ্টিবন।',
    },
    climate: {
      en: 'Hot, humid equatorial climate',
      bn: 'উষ্ণ ও আর্দ্র নিরক্ষীয় জলবায়ু',
    },
    diet: {
      en: 'Herbivore — leaves, buds, ferns, fungi and fruit; also eats clay for minerals',
      bn: 'তৃণভোজী — পাতা, কুঁড়ি, ফার্ন, ছত্রাক ও ফল; খনিজের জন্য মাটিও খায়',
    },
    ecologicalRole: {
      en: 'Browses understorey plants, influencing forest regeneration.',
      bn: 'বনের নিচের স্তরের গাছপালা খেয়ে বনের পুনর্জন্মের প্রক্রিয়াকে প্রভাবিত করে।',
    },
    behavior: {
      en: 'Solitary and secretive, mainly active by day; uses infrasound calls too low for humans to hear.',
      bn: 'একাকী ও লুকিয়ে থাকা স্বভাবের, মূলত দিনে সক্রিয়; মানুষের শ্রবণসীমার নিচের শব্দে যোগাযোগ করে।',
    },
    range: {
      native: [
        [1.5, 28.5],
        [2.0, 27.0],
        [0.5, 29.0],
        [3.0, 25.5],
        [-1.0, 27.5],
      ],
      endemicTo: { en: 'Democratic Republic of the Congo', bn: 'কঙ্গো গণপ্রজাতন্ত্র' },
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Habitat loss from logging, mining and settlement', 'Snaring and hunting for meat and skins', 'Armed conflict in its range'],
        bn: ['কাঠ সংগ্রহ, খনন ও বসতির কারণে আবাসস্থল হারানো', 'মাংস ও চামড়ার জন্য ফাঁদ পেতে শিকার', 'বিচরণ এলাকায় সশস্ত্র সংঘাত'],
      },
      initiatives: {
        en: ['Okapi Wildlife Reserve, a UNESCO World Heritage Site', 'Okapi Conservation Project'],
        bn: ['ইউনেস্কো বিশ্ব ঐতিহ্য স্থান ওকাপি বন্যপ্রাণী সংরক্ষিত এলাকা', 'ওকাপি কনজারভেশন প্রজেক্ট'],
      },
    },
    facts: {
      en: [
        'Each okapi’s leg stripes are unique, a little like fingerprints.',
        'The okapi was first described by science in 1901.',
      ],
      bn: [
        'প্রতিটি ওকাপির পায়ের ডোরা আলাদা, অনেকটা আঙুলের ছাপের মতো।',
        'বিজ্ঞানীরা ১৯০১ সালে প্রথম ওকাপির বর্ণনা দেন।',
      ],
    },
    related: ['giraffe', 'bonobo', 'plains-zebra'],
  },
  {
    id: 'aardvark',
    commonName: { en: 'Aardvark', bn: 'আর্দভার্ক' },
    scientificName: 'Orycteropus afer',
    altNames: {
      en: ['Antbear', 'Earth Pig'],
      bn: ['পিঁপড়াভালুক', 'মাটির শূকর'],
    },
    category: 'mammals',
    wikiTitle: 'Aardvark',
    description: {
      en: 'The aardvark is a burrowing, nocturnal mammal that feeds almost entirely on ants and termites. Its name means "earth pig" in Afrikaans, but it is not related to pigs — it is the only living member of its own order, Tubulidentata. Its abandoned burrows provide shelter for many other animals.',
      bn: 'আর্দভার্ক গর্তবাসী, নিশাচর স্তন্যপায়ী প্রাণী, যার খাবার প্রায় পুরোটাই পিঁপড়া ও উইপোকা। আফ্রিকানস ভাষায় এর নামের অর্থ "মাটির শূকর", তবে শূকরের সঙ্গে এর কোনো আত্মীয়তা নেই — এটি নিজস্ব বর্গ টুবুলিডেন্টাটার একমাত্র জীবিত সদস্য। এদের পরিত্যক্ত গর্ত আরও বহু প্রাণীর আশ্রয় হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Tubulidentata',
      family: 'Orycteropodidae',
      genus: 'Orycteropus',
      species: 'O. afer',
    },
    physical: {
      size: {
        en: 'Head-and-body length 1–1.3 m plus a 45–70 cm tail',
        bn: 'মাথা ও দেহ ১–১.৩ মিটার, সঙ্গে ৪৫–৭০ সেমি লেজ',
      },
      weight: { en: '40–65 kg', bn: '৪০–৬৫ কেজি' },
      lifespan: {
        en: 'About 18–23 years in captivity',
        bn: 'আবদ্ধ অবস্থায় প্রায় ১৮–২৩ বছর',
      },
      features: {
        en: [
          'Long, pig-like snout and rabbit-like ears',
          'Sticky tongue up to about 30 cm long',
          'Powerful, spade-like claws for digging',
        ],
        bn: [
          'শূকরের মতো লম্বা নাক ও খরগোশের মতো কান',
          'প্রায় ৩০ সেমি পর্যন্ত লম্বা আঠালো জিভ',
          'মাটি খোঁড়ার জন্য কোদালের মতো শক্ত নখ',
        ],
      },
    },
    habitat: {
      en: 'Savannas, grasslands, woodlands and scrub with plenty of termites',
      bn: 'প্রচুর উইপোকাযুক্ত সাভানা, তৃণভূমি, বনভূমি ও ঝোপঝাড়',
    },
    habitats: ['grassland', 'desert'],
    regions: ['africa'],
    distribution: {
      en: 'Throughout sub-Saharan Africa except the densest rainforests and true deserts.',
      bn: 'সবচেয়ে ঘন বৃষ্টিবন ও প্রকৃত মরুভূমি বাদে সাহারার দক্ষিণের সমগ্র আফ্রিকা।',
    },
    climate: {
      en: 'Tropical and subtropical climates; avoids very rocky ground',
      bn: 'ক্রান্তীয় ও উপক্রান্তীয় জলবায়ু; খুব পাথুরে মাটি এড়িয়ে চলে',
    },
    diet: {
      en: 'Insectivore — ants and termites, plus the fruit of the "aardvark cucumber"',
      bn: 'কীটভোজী — পিঁপড়া ও উইপোকা, সঙ্গে "আর্দভার্ক শসা" নামের একটি গাছের ফল',
    },
    ecologicalRole: {
      en: 'Controls termite numbers and digs burrows later used by warthogs, porcupines, hyenas and many others.',
      bn: 'উইপোকার সংখ্যা নিয়ন্ত্রণ করে এবং এর খোঁড়া গর্ত পরে বুনো শূকর, সজারু, হায়েনাসহ বহু প্রাণী ব্যবহার করে।',
    },
    behavior: {
      en: 'Solitary and nocturnal; can travel many kilometres a night between termite mounds and dig remarkably fast.',
      bn: 'একাকী ও নিশাচর; রাতে এক উইঢিবি থেকে আরেকটিতে কয়েক কিলোমিটার পথ পাড়ি দেয় এবং অবিশ্বাস্য দ্রুত মাটি খুঁড়তে পারে।',
    },
    range: {
      native: [
        [-2.5, 34.5],
        [-19.0, 23.0],
        [-26.0, 28.0],
        [9.0, -1.0],
        [-12.0, 18.0],
        [7.0, 38.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Hunting for meat and traditional medicine', 'Conversion of land to intensive farming', 'Droughts linked to climate change'],
        bn: ['মাংস ও প্রথাগত ওষুধের জন্য শিকার', 'জমিকে নিবিড় কৃষিজমিতে রূপান্তর', 'জলবায়ু পরিবর্তনজনিত খরা'],
      },
      initiatives: {
        en: ['Occurs in many protected areas across Africa', 'Research on drought impacts in the Kalahari'],
        bn: ['আফ্রিকার বহু সংরক্ষিত এলাকায় এদের উপস্থিতি', 'কালাহারিতে খরার প্রভাব নিয়ে গবেষণা'],
      },
    },
    facts: {
      en: [
        'An aardvark can eat tens of thousands of termites in a single night.',
        '"Aardvark" is often the first animal listed in English dictionaries.',
      ],
      bn: [
        'একটি আর্দভার্ক এক রাতেই হাজার হাজার উইপোকা খেতে পারে।',
        'ইংরেজি অভিধানে প্রাণীদের মধ্যে প্রায়ই সবার আগে "Aardvark" শব্দটি থাকে।',
      ],
    },
    related: ['meerkat', 'spotted-hyena'],
  },
  {
    id: 'meerkat',
    commonName: { en: 'Meerkat', bn: 'মিরক্যাট' },
    scientificName: 'Suricata suricatta',
    altNames: {
      en: ['Suricate'],
      bn: ['সুরিকেট'],
    },
    category: 'mammals',
    wikiTitle: 'Meerkat',
    description: {
      en: 'The meerkat is a small mongoose of southern Africa’s dry plains, famous for standing upright on sentry duty. It lives in cooperative groups called mobs or gangs, where members take turns guarding, babysitting and teaching pups. A sharp alarm call sends the whole group diving into burrows.',
      bn: 'মিরক্যাট দক্ষিণ আফ্রিকার শুষ্ক সমভূমির একটি ছোট বেজিজাতীয় প্রাণী; পাহারার সময় পেছনের পায়ে সোজা হয়ে দাঁড়ানোর জন্য বিখ্যাত। এরা সহযোগিতাপূর্ণ দলে বাস করে, যেখানে সদস্যরা পালা করে পাহারা দেয়, বাচ্চাদের দেখাশোনা করে ও শিকার শেখায়। পাহারাদারের তীক্ষ্ণ সতর্ক-ডাকে পুরো দল এক নিমেষে গর্তে ঢুকে পড়ে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Herpestidae',
      genus: 'Suricata',
      species: 'S. suricatta',
    },
    physical: {
      size: {
        en: 'Head-and-body length 25–35 cm plus a 17–25 cm tail',
        bn: 'মাথা ও দেহ ২৫–৩৫ সেমি, সঙ্গে ১৭–২৫ সেমি লেজ',
      },
      weight: { en: '0.6–0.98 kg', bn: '০.৬–০.৯৮ কেজি' },
      lifespan: {
        en: 'About 5–8 years in the wild; up to 12–14 in captivity',
        bn: 'বনে প্রায় ৫–৮ বছর; আবদ্ধ অবস্থায় ১২–১৪ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Dark patches around the eyes that reduce sun glare',
          'Thin, dark belly fur used to soak up morning sun',
          'Long, curved foreclaws for digging',
        ],
        bn: [
          'চোখের চারপাশে কালো ছোপ, যা রোদের ঝলক কমায়',
          'পেটে পাতলা কালচে লোম, যা দিয়ে সকালের রোদ শুষে নেয়',
          'মাটি খোঁড়ার জন্য সামনের পায়ে লম্বা, বাঁকা নখ',
        ],
      },
    },
    habitat: {
      en: 'Dry open plains, savanna and semi-desert with hard ground for burrows',
      bn: 'গর্ত খোঁড়ার উপযোগী শক্ত মাটির শুষ্ক খোলা সমভূমি, সাভানা ও আধা-মরুভূমি',
    },
    habitats: ['desert', 'grassland'],
    regions: ['africa'],
    distribution: {
      en: 'Southern Africa — the Kalahari and Namib regions of Botswana, Namibia, South Africa and south-western Angola.',
      bn: 'দক্ষিণ আফ্রিকা অঞ্চল — বতসোয়ানা, নামিবিয়া, দক্ষিণ আফ্রিকা ও দক্ষিণ-পশ্চিম অ্যাঙ্গোলার কালাহারি ও নামিব এলাকা।',
    },
    climate: {
      en: 'Arid and semi-arid climate with hot days and cold nights',
      bn: 'দিনে গরম ও রাতে ঠান্ডা শুষ্ক ও আধা-শুষ্ক জলবায়ু',
    },
    diet: {
      en: 'Mainly insectivore — beetles, larvae and other insects, plus scorpions, lizards and small animals',
      bn: 'মূলত কীটভোজী — গুবরে পোকা, শূককীট ও অন্যান্য পোকা, সঙ্গে বিছা, টিকটিকি ও ছোট প্রাণী',
    },
    ecologicalRole: {
      en: 'Controls insect and scorpion numbers and is prey for eagles, jackals and snakes.',
      bn: 'পোকামাকড় ও বিছার সংখ্যা নিয়ন্ত্রণ করে এবং ঈগল, শিয়াল ও সাপের শিকার হয়।',
    },
    behavior: {
      en: 'Lives in groups of up to about 30–50 led by a dominant breeding pair; sentries call different alarms for aerial and ground predators.',
      bn: 'একটি প্রভাবশালী প্রজনন-জুটির নেতৃত্বে প্রায় ৩০–৫০ সদস্য পর্যন্ত দলে থাকে; আকাশ ও মাটির শিকারির জন্য পাহারাদার আলাদা আলাদা সতর্ক-ডাক দেয়।',
    },
    range: {
      native: [
        [-26.5, 20.6],
        [-24.0, 22.0],
        [-23.0, 17.0],
        [-30.5, 23.0],
        [-17.0, 13.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Droughts and hotter conditions linked to climate change', 'Local habitat change from overgrazing'],
        bn: ['জলবায়ু পরিবর্তনজনিত খরা ও তাপমাত্রা বৃদ্ধি', 'অতিরিক্ত পশুচারণে স্থানীয় আবাসস্থলের পরিবর্তন'],
      },
      initiatives: {
        en: ['Kalahari Meerkat Project long-term research', 'Kgalagadi Transfrontier Park protection'],
        bn: ['কালাহারি মিরক্যাট প্রজেক্টের দীর্ঘমেয়াদি গবেষণা', 'খগালাগাদি আন্তঃসীমান্ত উদ্যানে সুরক্ষা'],
      },
    },
    facts: {
      en: [
        'Adult meerkats teach pups to handle scorpions by first giving them dead or disabled ones.',
        'Meerkats are partly immune to some scorpion venoms.',
      ],
      bn: [
        'বড় মিরক্যাটরা বাচ্চাদের প্রথমে মরা বা হুল ভাঙা বিছা দিয়ে বিছা ধরা শেখায়।',
        'কিছু বিছার বিষের বিরুদ্ধে মিরক্যাটের আংশিক প্রতিরোধক্ষমতা রয়েছে।',
      ],
    },
    related: ['aardvark', 'ring-tailed-lemur'],
  },
  {
    id: 'arabian-oryx',
    commonName: { en: 'Arabian Oryx', bn: 'আরব অরিক্স' },
    scientificName: 'Oryx leucoryx',
    altNames: {
      en: ['White Oryx'],
      bn: ['সাদা অরিক্স'],
    },
    category: 'mammals',
    wikiTitle: 'Arabian oryx',
    description: {
      en: 'The Arabian oryx is a white desert antelope with long, straight horns, perfectly adapted to the deserts of the Arabian Peninsula. It was hunted to extinction in the wild by 1972, then saved by captive breeding and reintroduction. In 2011 it became the first species to move back from "Extinct in the Wild" to "Vulnerable".',
      bn: 'আরব অরিক্স লম্বা, সোজা শিংওয়ালা সাদা রঙের মরু হরিণ, যা আরব উপদ্বীপের মরুভূমিতে চমৎকারভাবে মানিয়ে নিয়েছে। শিকারের ফলে ১৯৭২ সালের মধ্যে এরা বন্য পরিবেশ থেকে বিলুপ্ত হয়ে যায়, পরে আবদ্ধ প্রজনন ও বনে ফিরিয়ে দেওয়ার মাধ্যমে রক্ষা পায়। ২০১১ সালে এটিই প্রথম প্রজাতি যা "বন্য পরিবেশে বিলুপ্ত" থেকে "সংকটাপন্ন" শ্রেণিতে উন্নীত হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Bovidae',
      genus: 'Oryx',
      species: 'O. leucoryx',
    },
    physical: {
      size: {
        en: 'Shoulder height about 80–100 cm; horns 50–70 cm long',
        bn: 'কাঁধ পর্যন্ত উচ্চতা প্রায় ৮০–১০০ সেমি; শিং ৫০–৭০ সেমি লম্বা',
      },
      weight: { en: '70–90 kg', bn: '৭০–৯০ কেজি' },
      lifespan: { en: 'Up to about 20 years', bn: 'প্রায় ২০ বছর পর্যন্ত' },
      features: {
        en: [
          'Brilliant white coat that reflects desert sunlight',
          'Long, straight, ringed horns in both sexes',
          'Dark markings on the face and legs',
        ],
        bn: [
          'মরুভূমির রোদ প্রতিফলিত করা উজ্জ্বল সাদা লোম',
          'পুরুষ ও মাদি দুজনেরই লম্বা, সোজা, খাঁজকাটা শিং',
          'মুখ ও পায়ে কালচে দাগ',
        ],
      },
    },
    habitat: {
      en: 'Gravel plains and sandy deserts',
      bn: 'নুড়িপাথরের সমভূমি ও বালুময় মরুভূমি',
    },
    habitats: ['desert'],
    regions: ['africa'],
    distribution: {
      en: 'Reintroduced populations in Oman, Saudi Arabia, the UAE, Israel and Jordan on the Arabian Peninsula and nearby.',
      bn: 'আরব উপদ্বীপ ও আশপাশে — ওমান, সৌদি আরব, সংযুক্ত আরব আমিরাত, ইসরায়েল ও জর্ডানে পুনঃপ্রবর্তিত জনগোষ্ঠী।',
    },
    climate: {
      en: 'Extremely hot, arid desert climate',
      bn: 'অত্যন্ত উষ্ণ ও শুষ্ক মরু জলবায়ু',
    },
    diet: {
      en: 'Herbivore — grasses, herbs, shrubs, roots and tubers; can go weeks without drinking',
      bn: 'তৃণভোজী — ঘাস, লতাগুল্ম, ঝোপ, শিকড় ও কন্দ; কয়েক সপ্তাহ পানি পান না করেও থাকতে পারে',
    },
    ecologicalRole: {
      en: 'A large grazer of the desert, cycling nutrients through sparse vegetation.',
      bn: 'মরুভূমির বড় তৃণভোজী হিসেবে বিরল গাছপালার মধ্য দিয়ে পুষ্টির চক্র চালু রাখে।',
    },
    behavior: {
      en: 'Lives in herds of about 2–15 that roam widely after rain; can sense rainfall from far away.',
      bn: 'প্রায় ২–১৫ সদস্যের পালে থাকে এবং বৃষ্টির পর বহু দূর পর্যন্ত ঘুরে বেড়ায়; অনেক দূরের বৃষ্টিও টের পায়।',
    },
    range: {
      native: [
        [19.8, 57.0],
        [22.5, 46.0],
        [24.5, 41.0],
        [23.0, 54.5],
        [30.5, 35.2],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'stable',
      population: {
        en: 'Over 1,000 in the wild and several thousand in captivity',
        bn: 'বনে ১,০০০টির বেশি এবং আবদ্ধ অবস্থায় কয়েক হাজার',
      },
      threats: {
        en: ['Illegal hunting and live capture', 'Drought and overgrazing by livestock'],
        bn: ['অবৈধ শিকার ও জীবন্ত ধরা', 'খরা ও গবাদিপশুর অতিরিক্ত চারণ'],
      },
      initiatives: {
        en: ['"Operation Oryx" captive breeding programme started in 1962', 'Reintroductions in Saudi Arabia, the UAE and Israel'],
        bn: ['১৯৬২ সালে শুরু হওয়া "অপারেশন অরিক্স" আবদ্ধ প্রজনন কর্মসূচি', 'সৌদি আরব, সংযুক্ত আরব আমিরাত ও ইসরায়েলে পুনঃপ্রবর্তন'],
      },
      assessed: '2021',
    },
    facts: {
      en: [
        'The Arabian oryx may be the origin of the unicorn legend, as it can look one-horned from the side.',
        'Oman’s Arabian Oryx Sanctuary was the first site ever removed from the UNESCO World Heritage list, in 2007.',
      ],
      bn: [
        'পাশ থেকে দেখলে একটি শিং মনে হয় বলে ইউনিকর্নের কিংবদন্তির উৎস আরব অরিক্স হতে পারে।',
        '২০০৭ সালে ওমানের আরব অরিক্স অভয়ারণ্যই প্রথম স্থান, যা ইউনেস্কো বিশ্ব ঐতিহ্যের তালিকা থেকে বাদ পড়ে।',
      ],
    },
    related: ['european-bison', 'meerkat'],
  },
  {
    id: 'european-bison',
    commonName: { en: 'European Bison', bn: 'ইউরোপীয় বাইসন' },
    scientificName: 'Bison bonasus',
    altNames: {
      en: ['Wisent', 'Zubr'],
      bn: ['উইসেন্ট', 'জুবর'],
    },
    category: 'mammals',
    wikiTitle: 'European bison',
    description: {
      en: 'The European bison is the heaviest land animal in Europe. It went extinct in the wild in the 1920s, and every living wisent descends from just a few animals kept in zoos. Reintroductions, starting in Poland’s Białowieża Forest, have returned it to forests across Central and Eastern Europe.',
      bn: 'ইউরোপীয় বাইসন ইউরোপের সবচেয়ে ভারী স্থলচর প্রাণী। ১৯২০-এর দশকে এরা বন্য পরিবেশ থেকে বিলুপ্ত হয়ে যায়, আর আজকের সব বাইসনই চিড়িয়াখানায় রাখা অল্প কয়েকটি প্রাণীর বংশধর। পোল্যান্ডের বিয়ালোভিয়েজা বন থেকে শুরু হওয়া পুনঃপ্রবর্তনের মাধ্যমে মধ্য ও পূর্ব ইউরোপের বহু বনে এদের ফিরিয়ে আনা হয়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Bovidae',
      genus: 'Bison',
      species: 'B. bonasus',
    },
    physical: {
      size: {
        en: 'Body length 2.1–3.5 m; shoulder height 1.6–2 m',
        bn: 'দেহের দৈর্ঘ্য ২.১–৩.৫ মিটার; কাঁধ পর্যন্ত উচ্চতা ১.৬–২ মিটার',
      },
      weight: {
        en: 'Males about 600–900 kg or more; females about 400–550 kg',
        bn: 'পুরুষ প্রায় ৬০০–৯০০ কেজি বা তারও বেশি; মাদি প্রায় ৪০০–৫৫০ কেজি',
      },
      lifespan: { en: 'About 20–25 years', bn: 'প্রায় ২০–২৫ বছর' },
      features: {
        en: [
          'Massive shoulder hump and dark brown shaggy coat',
          'Short, curved horns in both sexes',
          'Longer legs and less shaggy front than the American bison',
        ],
        bn: [
          'বিশাল কাঁধের কুঁজ ও গাঢ় বাদামি, ঝাঁকড়া লোম',
          'পুরুষ ও মাদি দুজনেরই ছোট, বাঁকা শিং',
          'আমেরিকান বাইসনের চেয়ে লম্বা পা ও কম ঝাঁকড়া সামনের অংশ',
        ],
      },
    },
    habitat: {
      en: 'Mixed and deciduous forests with clearings and meadows',
      bn: 'ফাঁকা জায়গা ও তৃণভূমিসহ মিশ্র ও পত্রঝরা বন',
    },
    habitats: ['temperate-forest', 'grassland'],
    regions: ['europe'],
    distribution: {
      en: 'Free-ranging herds in Poland, Belarus, Russia, Ukraine, Lithuania, Romania, Slovakia, Germany and other countries.',
      bn: 'পোল্যান্ড, বেলারুশ, রাশিয়া, ইউক্রেন, লিথুয়ানিয়া, রোমানিয়া, স্লোভাকিয়া, জার্মানি ও অন্যান্য দেশে মুক্ত বিচরণশীল পাল।',
    },
    climate: {
      en: 'Cool temperate continental climate with cold, snowy winters',
      bn: 'শীতল নাতিশীতোষ্ণ মহাদেশীয় জলবায়ু, শীতকালে ঠান্ডা ও তুষারপাত',
    },
    diet: {
      en: 'Herbivore — grasses, sedges, leaves, shoots, bark and acorns',
      bn: 'তৃণভোজী — ঘাস, হোগলাজাতীয় উদ্ভিদ, পাতা, কচি ডগা, গাছের বাকল ও ওক ফল',
    },
    ecologicalRole: {
      en: 'Keeps forest glades open by grazing and browsing, increasing plant and insect diversity.',
      bn: 'ঘাস ও ডালপাতা খেয়ে বনের ফাঁকা জায়গা খোলা রাখে, ফলে উদ্ভিদ ও পোকামাকড়ের বৈচিত্র্য বাড়ে।',
    },
    behavior: {
      en: 'Cows and calves form small herds led by an older female; bulls often live alone or in small groups.',
      bn: 'মাদি ও বাছুররা একটি বয়স্ক মাদির নেতৃত্বে ছোট পাল গড়ে; ষাঁড়েরা প্রায়ই একা বা ছোট দলে থাকে।',
    },
    range: {
      native: [
        [52.7, 23.9],
        [52.5, 24.5],
        [54.5, 33.5],
        [47.5, 25.5],
        [49.2, 22.5],
        [55.5, 23.5],
      ],
    },
    conservation: {
      status: 'NT',
      trend: 'increasing',
      population: {
        en: 'Over 6,000 free-ranging animals',
        bn: '৬,০০০টির বেশি মুক্ত বিচরণশীল বাইসন',
      },
      threats: {
        en: ['Very low genetic diversity from a tiny founder group', 'Fragmented habitat and small, isolated herds', 'Diseases and conflict with farmers'],
        bn: ['অল্প কয়েকটি পূর্বপুরুষ থেকে আসায় জিনগত বৈচিত্র্য খুব কম', 'খণ্ডিত আবাসস্থল ও ছোট, বিচ্ছিন্ন পাল', 'রোগবালাই ও কৃষকদের সঙ্গে সংঘাত'],
      },
      initiatives: {
        en: ['European Bison Pedigree Book and breeding programme', 'Rewilding projects across Europe'],
        bn: ['ইউরোপীয় বাইসন বংশতালিকা ও প্রজনন কর্মসূচি', 'ইউরোপজুড়ে প্রকৃতিকে বন্য অবস্থায় ফিরিয়ে আনার (রিওয়াইল্ডিং) প্রকল্প'],
      },
      assessed: '2020',
    },
    facts: {
      en: [
        'The last wild European bison was killed in the Caucasus in 1927.',
        'All living wisents descend from about a dozen founder animals.',
      ],
      bn: [
        'শেষ বন্য ইউরোপীয় বাইসনটি ১৯২৭ সালে ককেশাস অঞ্চলে মারা পড়ে।',
        'আজকের সব ইউরোপীয় বাইসন মাত্র এক ডজনের মতো পূর্বপুরুষ প্রাণীর বংশধর।',
      ],
    },
    related: ['grey-wolf', 'arabian-oryx'],
  },
  {
    id: 'grey-wolf',
    commonName: { en: 'Grey Wolf', bn: 'নেকড়ে' },
    scientificName: 'Canis lupus',
    altNames: {
      en: ['Gray Wolf', 'Wolf', 'Eurasian Wolf'],
      bn: ['ধূসর নেকড়ে', 'নেকড়ে বাঘ', 'ইউরেশীয় নেকড়ে'],
    },
    category: 'mammals',
    wikiTitle: 'Wolf',
    description: {
      en: 'The grey wolf is the largest wild member of the dog family and the ancestor of the domestic dog. It lives and hunts in family packs and once had the widest range of any land mammal apart from humans. After centuries of persecution, wolves are now returning to many parts of Europe.',
      bn: 'নেকড়ে কুকুরগোত্রের সবচেয়ে বড় বন্য সদস্য এবং গৃহপালিত কুকুরের পূর্বপুরুষ। এরা পারিবারিক দলে বাস ও শিকার করে; একসময় মানুষ ছাড়া অন্য যেকোনো স্থলচর স্তন্যপায়ীর চেয়ে এদের বিচরণ এলাকা ছিল বেশি বিস্তৃত। শতাব্দীর পর শতাব্দী নিধনের পর নেকড়ে এখন ইউরোপের অনেক অঞ্চলে আবার ফিরে আসছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Canidae',
      genus: 'Canis',
      species: 'C. lupus',
    },
    physical: {
      size: {
        en: 'Head-and-body length 1–1.6 m plus a 30–50 cm tail; shoulder height 60–90 cm',
        bn: 'মাথা ও দেহ ১–১.৬ মিটার, সঙ্গে ৩০–৫০ সেমি লেজ; কাঁধ পর্যন্ত উচ্চতা ৬০–৯০ সেমি',
      },
      weight: {
        en: 'Usually 25–60 kg, depending on region',
        bn: 'অঞ্চলভেদে সাধারণত ২৫–৬০ কেজি',
      },
      lifespan: {
        en: 'About 6–8 years in the wild; up to 16 in captivity',
        bn: 'বনে প্রায় ৬–৮ বছর; আবদ্ধ অবস্থায় ১৬ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Thick fur, usually grey mixed with brown, black or white',
          'Long legs and large feet built for travelling long distances',
          'Powerful jaws with large canine teeth',
        ],
        bn: [
          'ঘন লোম, সাধারণত ধূসরের সঙ্গে বাদামি, কালো বা সাদার মিশ্রণ',
          'দীর্ঘ পথ পাড়ি দেওয়ার উপযোগী লম্বা পা ও বড় থাবা',
          'বড় শ্বদন্তসহ শক্তিশালী চোয়াল',
        ],
      },
    },
    habitat: {
      en: 'Forests, mountains, grasslands, tundra and deserts',
      bn: 'বন, পাহাড়, তৃণভূমি, তুন্দ্রা ও মরুভূমি',
    },
    habitats: ['temperate-forest', 'mountain', 'grassland', 'polar', 'desert'],
    regions: ['europe', 'north-america', 'east-asia', 'south-asia'],
    distribution: {
      en: 'Across much of Europe, Asia (including the Middle East) and North America, though absent from many densely populated areas.',
      bn: 'ইউরোপ, এশিয়া (মধ্যপ্রাচ্যসহ) ও উত্তর আমেরিকার বিস্তীর্ণ অঞ্চল, তবে ঘনবসতিপূর্ণ বহু এলাকা থেকে হারিয়ে গেছে।',
    },
    climate: {
      en: 'Extremely adaptable — from Arctic cold to hot deserts',
      bn: 'অত্যন্ত মানিয়ে নিতে সক্ষম — মেরু অঞ্চলের হিমশীতল আবহাওয়া থেকে উত্তপ্ত মরুভূমি পর্যন্ত',
    },
    diet: {
      en: 'Carnivore — deer, elk, wild boar, bison and smaller animals; sometimes livestock',
      bn: 'মাংসাশী — হরিণ, এল্ক, বুনো শূকর, বাইসন ও ছোট প্রাণী; কখনো কখনো গবাদিপশুও',
    },
    ecologicalRole: {
      en: 'An apex predator whose return can trigger "trophic cascades", as seen in Yellowstone, by changing how deer and elk use the landscape.',
      bn: 'শীর্ষ শিকারি; এদের ফিরে আসা হরিণ ও এল্কের চলাফেরা বদলে দিয়ে পুরো বাস্তুতন্ত্রে শৃঙ্খল প্রভাব ফেলতে পারে, যেমনটি ইয়েলোস্টোনে দেখা গেছে।',
    },
    behavior: {
      en: 'Lives in packs usually made up of a breeding pair and their offspring; howls to keep in touch and defend territory.',
      bn: 'সাধারণত একটি প্রজনন-জুটি ও তাদের সন্তানদের নিয়ে দল গঠন করে; যোগাযোগ রাখতে ও এলাকা রক্ষায় হুক্কাহুয়া ধরনের লম্বা ডাক দেয়।',
    },
    range: {
      native: [
        [52.7, 23.9],
        [42.5, 13.5],
        [61.0, 30.0],
        [48.0, 105.0],
        [44.6, -110.5],
        [64.0, -150.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Conflict with livestock farmers and illegal killing', 'Habitat fragmentation and road traffic', 'Hybridisation with domestic dogs'],
        bn: ['গবাদিপশু পালনকারীদের সঙ্গে সংঘাত ও অবৈধ হত্যা', 'আবাসস্থল খণ্ডিত হওয়া ও সড়ক দুর্ঘটনা', 'গৃহপালিত কুকুরের সঙ্গে সংকরায়ণ'],
      },
      initiatives: {
        en: ['Legal protection under the Bern Convention and EU Habitats Directive', 'Livestock guarding dogs and compensation schemes'],
        bn: ['বার্ন কনভেনশন ও ইইউ হ্যাবিট্যাট নির্দেশিকার আওতায় আইনি সুরক্ষা', 'গবাদিপশু পাহারায় কুকুর ও ক্ষতিপূরণ কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'All domestic dogs descend from ancient wolves domesticated more than 15,000 years ago.',
        'A wolf’s howl can carry about 10 km across open ground.',
      ],
      bn: [
        'সব গৃহপালিত কুকুরই ১৫,০০০ বছরেরও বেশি আগে পোষ মানানো প্রাচীন নেকড়ের বংশধর।',
        'খোলা জায়গায় নেকড়ের ডাক প্রায় ১০ কিলোমিটার দূর পর্যন্ত পৌঁছায়।',
      ],
    },
    related: ['african-wild-dog', 'european-bison', 'snow-leopard'],
  },
];
