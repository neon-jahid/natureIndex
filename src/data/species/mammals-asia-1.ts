import type { Species } from '@/types';

export const mammalsAsia1: Species[] = [
  {
    id: 'clouded-leopard',
    commonName: { en: 'Clouded Leopard', bn: 'লামচিতা' },
    scientificName: 'Neofelis nebulosa',
    altNames: {
      en: ['Mainland Clouded Leopard', 'Tree Tiger'],
      bn: ['মেঘলা চিতা', 'গেছো বাঘ'],
    },
    category: 'mammals',
    wikiTitle: 'Clouded leopard',
    description: {
      en: 'The clouded leopard is a medium-sized wild cat of Asian forests, named for the large cloud-shaped blotches on its coat. It is one of the best climbers among cats and can even hang upside down from branches. In Bangladesh it survives in very small numbers in the hill forests of the Chattogram Hill Tracts and Sylhet.',
      bn: 'লামচিতা এশিয়ার বনাঞ্চলের মাঝারি আকারের একটি বন্য বিড়াল; গায়ের মেঘের মতো বড় বড় ছোপের জন্যই এর এই নাম। বিড়ালগোত্রের মধ্যে এরা অন্যতম সেরা গাছবাইয়ে — ডাল থেকে উল্টো হয়ে ঝুলেও থাকতে পারে। বাংলাদেশে পার্বত্য চট্টগ্রাম ও সিলেটের পাহাড়ি বনে খুব অল্প সংখ্যায় এরা এখনো টিকে আছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Felidae',
      genus: 'Neofelis',
      species: 'N. nebulosa',
    },
    physical: {
      size: {
        en: 'Body 70–110 cm long, with a tail of 60–90 cm',
        bn: 'দেহ ৭০–১১০ সেমি লম্বা, লেজ ৬০–৯০ সেমি',
      },
      weight: { en: '11–23 kg', bn: '১১–২৩ কেজি' },
      lifespan: {
        en: 'About 11 years in the wild; up to 17 years in captivity',
        bn: 'বনে প্রায় ১১ বছর; আবদ্ধ অবস্থায় ১৭ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Large dark-edged “cloud” blotches on a greyish-yellow coat',
          'Longest canine teeth relative to skull size of any living cat',
          'Very long, thick tail used for balance in trees',
        ],
        bn: [
          'ধূসর-হলদে লোমের ওপর কালো কিনারাওয়ালা মেঘের মতো বড় ছোপ',
          'মাথার খুলির আকারের তুলনায় জীবিত বিড়ালদের মধ্যে সবচেয়ে লম্বা শ্বদন্ত',
          'গাছে ভারসাম্য রাখার জন্য খুব লম্বা ও মোটা লেজ',
        ],
      },
    },
    habitat: {
      en: 'Dense tropical evergreen and semi-evergreen forests, mostly in hills',
      bn: 'ঘন ক্রান্তীয় চিরসবুজ ও আধা-চিরসবুজ বন, প্রধানত পাহাড়ি এলাকায়',
    },
    habitats: ['tropical-forest', 'mountain'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'From the Himalayan foothills of Nepal and Northeast India through Bangladesh and Myanmar to Southeast Asia and southern China.',
      bn: 'নেপাল ও উত্তর-পূর্ব ভারতের হিমালয়ের পাদদেশ থেকে বাংলাদেশ ও মিয়ানমার হয়ে দক্ষিণ-পূর্ব এশিয়া ও দক্ষিণ চীন পর্যন্ত।',
    },
    climate: { en: 'Warm, humid tropical and subtropical climates', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় এবং উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Carnivore — monkeys, small deer, wild pigs, squirrels, birds and porcupines',
      bn: 'মাংসাশী — বানর, ছোট হরিণ, বুনো শূকর, কাঠবিড়ালি, পাখি ও সজারু',
    },
    ecologicalRole: {
      en: 'A mid-sized predator that helps regulate populations of primates and small mammals in the forest canopy and floor.',
      bn: 'মাঝারি আকারের শিকারি হিসেবে বনের গাছের চাঁদোয়া ও মাটিতে থাকা বানর ও ছোট স্তন্যপায়ীর সংখ্যা নিয়ন্ত্রণে রাখে।',
    },
    behavior: {
      en: 'Secretive, solitary and mostly nocturnal; it climbs head-first down tree trunks thanks to flexible ankle joints.',
      bn: 'লাজুক, একাকী ও প্রধানত নিশাচর; নমনীয় গোড়ালির জোরে গাছের গুঁড়ি বেয়ে মাথা নিচু করে নামতে পারে।',
    },
    range: {
      native: [
        [27.5, 85.5],
        [26.5, 93.5],
        [22.5, 92.2],
        [21.0, 96.5],
        [18.0, 99.0],
        [24.5, 104.5],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Deforestation and shifting cultivation', 'Poaching for skins, teeth and bones', 'Snaring for the bushmeat trade'],
        bn: ['বন উজাড় ও জুম চাষ', 'চামড়া, দাঁত ও হাড়ের জন্য চোরাশিকার', 'বন্যপ্রাণীর মাংসের ব্যবসার জন্য ফাঁদ পাতা'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix I, banning international trade', 'Camera-trap surveys in the Chattogram Hill Tracts'],
        bn: ['সাইটিস পরিশিষ্ট-১ এ তালিকাভুক্ত, ফলে আন্তর্জাতিক বাণিজ্য নিষিদ্ধ', 'পার্বত্য চট্টগ্রামে ক্যামেরা-ট্র্যাপ জরিপ'],
      },
    },
    facts: {
      en: [
        'It is often described as a link between small cats and big cats.',
        'It can hang from a branch using only its hind feet.',
      ],
      bn: [
        'একে প্রায়ই ছোট বিড়াল ও বড় বিড়ালের মাঝামাঝি প্রাণী বলা হয়।',
        'শুধু পেছনের পা দিয়ে গাছের ডাল থেকে ঝুলে থাকতে পারে।',
      ],
    },
    related: ['indian-leopard', 'royal-bengal-tiger', 'fishing-cat', 'snow-leopard'],
  },
  {
    id: 'indian-leopard',
    commonName: { en: 'Indian Leopard', bn: 'চিতাবাঘ' },
    scientificName: 'Panthera pardus fusca',
    altNames: {
      en: ['Leopard', 'Panther', 'Common Leopard'],
      bn: ['গুলবাঘ', 'ভারতীয় চিতাবাঘ', 'চিতা'],
    },
    category: 'mammals',
    wikiTitle: 'Indian leopard',
    description: {
      en: 'The Indian leopard is the subspecies of leopard found across the Indian subcontinent. Remarkably adaptable, it lives in forests, scrub, hills and even near villages and towns. In Bangladesh it is now very rare, with only occasional records from the north-eastern and south-eastern hill forests.',
      bn: 'ভারতীয় চিতাবাঘ হলো ভারতীয় উপমহাদেশজুড়ে পাওয়া চিতাবাঘের একটি উপপ্রজাতি। এরা অসাধারণভাবে মানিয়ে নিতে পারে — বন, ঝোপঝাড়, পাহাড় এমনকি গ্রাম ও শহরের আশপাশেও বাস করে। বাংলাদেশে এরা এখন অত্যন্ত বিরল; উত্তর-পূর্ব ও দক্ষিণ-পূর্বের পাহাড়ি বন থেকে মাঝেমধ্যে এদের দেখা পাওয়ার খবর মেলে।',
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
        en: 'Body 1–1.9 m long plus a 60–95 cm tail',
        bn: 'দেহ ১–১.৯ মিটার লম্বা, সঙ্গে ৬০–৯৫ সেমি লেজ',
      },
      weight: { en: 'Males 50–77 kg; females 29–34 kg', bn: 'পুরুষ ৫০–৭৭ কেজি; স্ত্রী ২৯–৩৪ কেজি' },
      lifespan: { en: '12–17 years', bn: '১২–১৭ বছর' },
      features: {
        en: [
          'Golden-yellow coat covered with black rosettes',
          'All-black (melanistic) individuals are known as black panthers',
          'Powerful neck and jaws for hauling prey into trees',
        ],
        bn: [
          'সোনালি-হলুদ লোমে কালো গোলাপের মতো ছোপ',
          'পুরো কালো রঙের চিতাবাঘ "ব্ল্যাক প্যান্থার" নামে পরিচিত',
          'শিকার টেনে গাছে তোলার মতো শক্তিশালী ঘাড় ও চোয়াল',
        ],
      },
    },
    habitat: {
      en: 'Forests, scrubland, rocky hills and the edges of farmland and settlements',
      bn: 'বন, ঝোপঝাড়, পাথুরে পাহাড় এবং কৃষিজমি ও লোকালয়ের প্রান্ত',
    },
    habitats: ['tropical-forest', 'grassland', 'mountain', 'urban-farmland'],
    regions: ['south-asia'],
    distribution: {
      en: 'India, Nepal, Bhutan, Bangladesh and southern Pakistan.',
      bn: 'ভারত, নেপাল, ভুটান, বাংলাদেশ ও দক্ষিণ পাকিস্তান।',
    },
    climate: { en: 'Tropical to temperate monsoon climates', bn: 'ক্রান্তীয় থেকে নাতিশীতোষ্ণ মৌসুমি জলবায়ু' },
    diet: {
      en: 'Carnivore — deer, wild pigs, monkeys, porcupines, birds and sometimes livestock and dogs',
      bn: 'মাংসাশী — হরিণ, বুনো শূকর, বানর, সজারু, পাখি এবং কখনো কখনো গবাদিপশু ও কুকুর',
    },
    ecologicalRole: {
      en: 'A key predator that controls herbivore and small-mammal numbers wherever larger cats are absent.',
      bn: 'যেখানে বড় বাঘ নেই সেখানে এরাই প্রধান শিকারি হিসেবে তৃণভোজী ও ছোট স্তন্যপায়ীর সংখ্যা নিয়ন্ত্রণ করে।',
    },
    behavior: {
      en: 'Solitary and mainly nocturnal; it often stores kills in trees away from tigers and scavengers.',
      bn: 'একাকী ও প্রধানত নিশাচর; বাঘ ও মৃতভোজীদের হাত থেকে বাঁচাতে শিকার প্রায়ই গাছের ডালে তুলে রাখে।',
    },
    range: {
      native: [
        [26.0, 91.8],
        [24.3, 91.8],
        [21.5, 92.3],
        [29.0, 79.5],
        [18.5, 75.0],
        [27.6, 84.5],
      ],
      endemicTo: { en: 'Indian subcontinent', bn: 'ভারতীয় উপমহাদেশ' },
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Habitat loss and fragmentation', 'Conflict with people over livestock', 'Poaching for skins and body parts'],
        bn: ['আবাসস্থল ধ্বংস ও খণ্ডিত হওয়া', 'গবাদিপশু শিকারকে কেন্দ্র করে মানুষের সঙ্গে সংঘাত', 'চামড়া ও দেহাংশের জন্য চোরাশিকার'],
      },
      initiatives: {
        en: ['Fully protected under wildlife laws in Bangladesh and India', 'Conflict-mitigation and rescue teams in India'],
        bn: ['বাংলাদেশ ও ভারতের বন্যপ্রাণী আইনে পূর্ণ সুরক্ষিত', 'ভারতে সংঘাত নিরসন ও উদ্ধারকারী দল'],
      },
    },
    facts: {
      en: [
        'The species-level IUCN status (Vulnerable) is shown; the Indian subspecies is not assessed separately.',
        'A leopard can drag a carcass heavier than itself up a tree.',
      ],
      bn: [
        'এখানে প্রজাতি হিসেবে আইইউসিএন অবস্থা (সংকটাপন্ন) দেখানো হয়েছে; ভারতীয় উপপ্রজাতিটি আলাদাভাবে মূল্যায়িত হয়নি।',
        'চিতাবাঘ নিজের চেয়ে ভারী শিকারও টেনে গাছে তুলতে পারে।',
      ],
    },
    related: ['clouded-leopard', 'royal-bengal-tiger', 'snow-leopard'],
  },
  {
    id: 'dhole',
    commonName: { en: 'Dhole', bn: 'ঢোল' },
    scientificName: 'Cuon alpinus',
    altNames: {
      en: ['Asian Wild Dog', 'Indian Wild Dog', 'Red Dog'],
      bn: ['বনকুকুর', 'রামকুত্তা', 'লাল কুকুর'],
    },
    category: 'mammals',
    wikiTitle: 'Dhole',
    description: {
      en: 'The dhole is a rusty-red wild dog of Asian forests that lives and hunts in highly social packs. Its whistling calls help pack members keep in touch in dense vegetation. Once widespread in Bangladesh, it is now confined to a few remote hill forests in the south-east.',
      bn: 'ঢোল এশিয়ার বনের মরিচা-লাল রঙের বুনো কুকুর, যারা দলবদ্ধভাবে বাস ও শিকার করে। ঘন জঙ্গলে শিসের মতো ডাক দিয়ে দলের সদস্যরা পরস্পরের সঙ্গে যোগাযোগ রাখে। একসময় বাংলাদেশের বহু বনে দেখা গেলেও এখন কেবল দক্ষিণ-পূর্বের কয়েকটি দুর্গম পাহাড়ি বনে এদের অস্তিত্ব আছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Canidae',
      genus: 'Cuon',
      species: 'C. alpinus',
    },
    physical: {
      size: {
        en: 'Body about 90 cm long; 42–50 cm tall at the shoulder',
        bn: 'দেহ প্রায় ৯০ সেমি লম্বা; কাঁধ পর্যন্ত উচ্চতা ৪২–৫০ সেমি',
      },
      weight: { en: '10–20 kg', bn: '১০–২০ কেজি' },
      lifespan: { en: 'About 10 years in the wild; up to 16 in captivity', bn: 'বনে প্রায় ১০ বছর; আবদ্ধ অবস্থায় ১৬ বছর পর্যন্ত' },
      features: {
        en: [
          'Rusty-red coat with a bushy, black-tipped tail',
          'Rounded ears and a short, broad muzzle',
          'Fewer molar teeth than other dogs, suited to a meat-only diet',
        ],
        bn: [
          'মরিচা-লাল লোম ও কালো আগাওয়ালা ঝোপালো লেজ',
          'গোলাকার কান ও ছোট, চওড়া মুখ',
          'অন্যান্য কুকুরের চেয়ে কম পেষণ দাঁত, যা কেবল মাংস খাওয়ার উপযোগী',
        ],
      },
    },
    habitat: {
      en: 'Tropical forests, hill forests and adjoining grasslands',
      bn: 'ক্রান্তীয় বন, পাহাড়ি বন ও আশপাশের তৃণভূমি',
    },
    habitats: ['tropical-forest', 'temperate-forest', 'mountain'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Scattered populations in India, Bangladesh, Nepal, Bhutan, Myanmar, Thailand, Indochina, Malaysia, Sumatra, Java and parts of China.',
      bn: 'ভারত, বাংলাদেশ, নেপাল, ভুটান, মিয়ানমার, থাইল্যান্ড, ইন্দোচীন, মালয়েশিয়া, সুমাত্রা, জাভা ও চীনের কিছু অংশে বিচ্ছিন্নভাবে।',
    },
    climate: { en: 'Tropical to cool montane climates', bn: 'ক্রান্তীয় থেকে শীতল পাহাড়ি জলবায়ু' },
    diet: {
      en: 'Carnivore — mainly chital, sambar, barking deer and wild pigs',
      bn: 'মাংসাশী — প্রধানত চিত্রা হরিণ, সাম্বার, মায়া হরিণ ও বুনো শূকর',
    },
    ecologicalRole: {
      en: 'A cooperative pack hunter that regulates deer and wild pig populations alongside tigers and leopards.',
      bn: 'দলবদ্ধ শিকারি হিসেবে বাঘ ও চিতাবাঘের পাশাপাশি হরিণ ও বুনো শূকরের সংখ্যা নিয়ন্ত্রণ করে।',
    },
    behavior: {
      en: 'Lives in packs of about 5–12, mainly active by day, and shares food with pups and helpers at the den.',
      bn: 'প্রায় ৫–১২টির দলে থাকে, প্রধানত দিনে সক্রিয় এবং গর্তে থাকা ছানা ও সাহায্যকারী সদস্যদের সঙ্গে খাবার ভাগ করে খায়।',
    },
    range: {
      native: [
        [21.8, 92.4],
        [11.6, 76.6],
        [22.3, 80.6],
        [27.0, 90.5],
        [14.4, 101.4],
        [4.5, 102.4],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Loss of forest habitat and prey', 'Diseases spread by domestic dogs', 'Persecution by livestock owners'],
        bn: ['বনভূমি ও শিকার প্রাণী কমে যাওয়া', 'গৃহপালিত কুকুর থেকে ছড়ানো রোগ', 'গবাদিপশুর মালিকদের হাতে হত্যা'],
      },
      initiatives: {
        en: ['Protection in tiger reserves across India', 'Camera-trap monitoring in the Chattogram Hill Tracts'],
        bn: ['ভারতের ব্যাঘ্র সংরক্ষিত এলাকাগুলোতে সুরক্ষা', 'পার্বত্য চট্টগ্রামে ক্যামেরা-ট্র্যাপ পর্যবেক্ষণ'],
      },
      assessed: '2015',
    },
    facts: {
      en: [
        'Dholes communicate with whistles, which is unusual among dogs.',
        'A pack can bring down prey many times heavier than a single dhole.',
      ],
      bn: [
        'ঢোল শিসের মতো শব্দে যোগাযোগ করে, যা কুকুরগোত্রে বিরল।',
        'একটি দল মিলে নিজেদের চেয়ে বহুগুণ ভারী শিকারও ধরাশায়ী করতে পারে।',
      ],
    },
    related: ['golden-jackal', 'chital', 'sambar', 'royal-bengal-tiger'],
  },
  {
    id: 'asiatic-black-bear',
    commonName: { en: 'Asiatic Black Bear', bn: 'এশীয় কালো ভালুক' },
    scientificName: 'Ursus thibetanus',
    altNames: {
      en: ['Asian Black Bear', 'Moon Bear', 'White-chested Bear'],
      bn: ['কালো ভালুক', 'চাঁদ ভালুক', 'সাদাবুকো ভালুক'],
    },
    category: 'mammals',
    wikiTitle: 'Asian black bear',
    description: {
      en: 'The Asiatic black bear is a medium-sized bear with a glossy black coat and a pale crescent-shaped patch on its chest, earning it the name “moon bear”. It is a skilled climber that feeds largely on fruits and nuts. In Bangladesh it is rare, surviving in the hill forests of Chattogram and Sylhet.',
      bn: 'এশীয় কালো ভালুক চকচকে কালো লোম আর বুকে ফ্যাকাশে অর্ধচন্দ্রাকৃতি দাগওয়ালা মাঝারি আকারের ভালুক, তাই একে "চাঁদ ভালুক"ও বলা হয়। এরা দক্ষ গাছবাইয়ে এবং প্রধানত ফল ও বাদাম খায়। বাংলাদেশে এরা বিরল; চট্টগ্রাম ও সিলেটের পাহাড়ি বনে টিকে আছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Ursidae',
      genus: 'Ursus',
      species: 'U. thibetanus',
    },
    physical: {
      size: { en: 'Body 1.2–1.9 m long', bn: 'দেহ ১.২–১.৯ মিটার লম্বা' },
      weight: { en: 'Males 60–200 kg; females 40–125 kg', bn: 'পুরুষ ৬০–২০০ কেজি; স্ত্রী ৪০–১২৫ কেজি' },
      lifespan: { en: 'About 25 years in the wild; over 30 in captivity', bn: 'বনে প্রায় ২৫ বছর; আবদ্ধ অবস্থায় ৩০ বছরের বেশি' },
      features: {
        en: [
          'Cream or white V-shaped crescent on the chest',
          'Large, rounded ears and a thick mane-like ruff around the neck',
          'Short, curved claws ideal for climbing',
        ],
        bn: [
          'বুকে ক্রিম বা সাদা রঙের ইংরেজি "V" আকৃতির চাঁদের মতো দাগ',
          'বড় গোলাকার কান ও ঘাড়ের চারপাশে কেশরের মতো ঘন লোম',
          'গাছে চড়ার উপযোগী ছোট, বাঁকানো নখ',
        ],
      },
    },
    habitat: {
      en: 'Moist hill forests from the tropics to temperate mountain forests',
      bn: 'ক্রান্তীয় অঞ্চল থেকে নাতিশীতোষ্ণ পাহাড়ি অঞ্চলের আর্দ্র বন',
    },
    habitats: ['tropical-forest', 'temperate-forest', 'mountain'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'From Afghanistan and Pakistan along the Himalayas to Bangladesh, Myanmar, Indochina, China, Korea, Japan and the Russian Far East.',
      bn: 'আফগানিস্তান ও পাকিস্তান থেকে হিমালয় বরাবর বাংলাদেশ, মিয়ানমার, ইন্দোচীন, চীন, কোরিয়া, জাপান ও রাশিয়ার দূরপ্রাচ্য পর্যন্ত।',
    },
    climate: { en: 'Tropical, subtropical and temperate climates', bn: 'ক্রান্তীয়, উপক্রান্তীয় ও নাতিশীতোষ্ণ জলবায়ু' },
    diet: {
      en: 'Omnivore — fruits, acorns, nuts, bamboo shoots, honey, insects and occasionally carrion or livestock',
      bn: 'সর্বভুক — ফল, ওক ফল, বাদাম, বাঁশের কোঁড়, মধু, পোকামাকড় এবং মাঝেমধ্যে মৃত প্রাণী বা গবাদিপশু',
    },
    ecologicalRole: {
      en: 'An important seed disperser that spreads the seeds of many forest fruit trees.',
      bn: 'বনের বহু ফলের গাছের বীজ ছড়িয়ে দিয়ে এরা গুরুত্বপূর্ণ বীজ বিস্তারকারীর ভূমিকা পালন করে।',
    },
    behavior: {
      en: 'Mostly solitary; it builds feeding platforms of bent branches in trees, and northern bears hibernate in winter.',
      bn: 'প্রধানত একাকী; গাছের ডাল বাঁকিয়ে খাওয়ার মাচা বানায় এবং শীতল অঞ্চলের ভালুকেরা শীতকালে শীতনিদ্রায় যায়।',
    },
    range: {
      native: [
        [22.4, 92.3],
        [24.6, 91.9],
        [27.5, 88.5],
        [34.0, 74.5],
        [22.0, 104.0],
        [35.5, 137.5],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Poaching for gall bladders and paws', 'Deforestation', 'Killing in retaliation for crop and livestock damage'],
        bn: ['পিত্তথলি ও থাবার জন্য চোরাশিকার', 'বন উজাড়', 'ফসল ও গবাদিপশুর ক্ষতির প্রতিশোধে হত্যা'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix I', 'Campaigns and sanctuaries to end bear-bile farming'],
        bn: ['সাইটিস পরিশিষ্ট-১ এ তালিকাভুক্ত', 'ভালুকের পিত্তরস খামার বন্ধে প্রচারণা ও আশ্রয়কেন্দ্র'],
      },
      assessed: '2016',
    },
    facts: {
      en: [
        'It can walk upright on its hind legs for more than 400 m.',
        'Its bile is illegally harvested from farmed bears for traditional medicine.',
      ],
      bn: [
        'পেছনের দুই পায়ে ভর দিয়ে ৪০০ মিটারেরও বেশি হাঁটতে পারে।',
        'প্রচলিত ওষুধের জন্য খামারে আটকে রাখা ভালুক থেকে অবৈধভাবে এদের পিত্তরস সংগ্রহ করা হয়।',
      ],
    },
    related: ['sloth-bear', 'giant-panda', 'polar-bear'],
  },
  {
    id: 'sloth-bear',
    commonName: { en: 'Sloth Bear', bn: 'শ্লথ ভালুক' },
    scientificName: 'Melursus ursinus',
    altNames: {
      en: ['Indian Bear', 'Labiated Bear'],
      bn: ['ভালুক', 'ভারতীয় ভালুক'],
    },
    category: 'mammals',
    wikiTitle: 'Sloth bear',
    description: {
      en: 'The sloth bear is a shaggy, black bear of the Indian subcontinent that specialises in eating termites and ants. It can close its nostrils and blow away dust before sucking insects up through a gap in its front teeth. In Bangladesh it was once found in the northern and eastern forests but is now possibly extinct or extremely rare.',
      bn: 'শ্লথ ভালুক ভারতীয় উপমহাদেশের লম্বা, এলোমেলো কালো লোমওয়ালা ভালুক, যারা মূলত উইপোকা ও পিঁপড়া খেয়ে বাঁচে। নাকের ছিদ্র বন্ধ করে ধুলো ফুঁ দিয়ে সরিয়ে সামনের দাঁতের ফাঁক দিয়ে এরা পোকামাকড় শুষে নেয়। বাংলাদেশের উত্তর ও পূর্বাঞ্চলের বনে একসময় এদের দেখা মিলত, তবে এখন সম্ভবত বিলুপ্ত অথবা অত্যন্ত বিরল।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Ursidae',
      genus: 'Melursus',
      species: 'M. ursinus',
    },
    physical: {
      size: { en: 'Body 1.4–1.9 m long; 60–90 cm at the shoulder', bn: 'দেহ ১.৪–১.৯ মিটার লম্বা; কাঁধ পর্যন্ত ৬০–৯০ সেমি' },
      weight: { en: 'Males 80–145 kg; females 55–95 kg', bn: 'পুরুষ ৮০–১৪৫ কেজি; স্ত্রী ৫৫–৯৫ কেজি' },
      lifespan: { en: 'About 20 years in the wild; up to 40 in captivity', bn: 'বনে প্রায় ২০ বছর; আবদ্ধ অবস্থায় ৪০ বছর পর্যন্ত' },
      features: {
        en: [
          'Long, shaggy black coat and a pale U- or Y-shaped chest mark',
          'Long curved claws up to 8 cm for digging into termite mounds',
          'Mobile lips and missing upper front teeth for sucking up insects',
        ],
        bn: [
          'লম্বা এলোমেলো কালো লোম ও বুকে ফ্যাকাশে ইংরেজি "U" বা "Y" আকৃতির দাগ',
          'উইঢিবি খোঁড়ার জন্য ৮ সেমি পর্যন্ত লম্বা বাঁকানো নখ',
          'পোকা শুষে নেওয়ার জন্য নমনীয় ঠোঁট এবং ওপরের সামনের দাঁতের অনুপস্থিতি',
        ],
      },
    },
    habitat: {
      en: 'Dry and moist deciduous forests, scrubland and rocky grassland',
      bn: 'শুষ্ক ও আর্দ্র পর্ণমোচী বন, ঝোপঝাড় এবং পাথুরে তৃণভূমি',
    },
    habitats: ['tropical-forest', 'grassland'],
    regions: ['south-asia'],
    distribution: {
      en: 'India, Sri Lanka and Nepal, with possible remnants in Bhutan and Bangladesh.',
      bn: 'ভারত, শ্রীলঙ্কা ও নেপাল; ভুটান ও বাংলাদেশে হয়তো সামান্য কিছু টিকে থাকতে পারে।',
    },
    climate: { en: 'Hot tropical monsoon climates', bn: 'উষ্ণ ক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Omnivore — mainly termites and ants, plus fruits, flowers and honey',
      bn: 'সর্বভুক — প্রধানত উইপোকা ও পিঁপড়া, সঙ্গে ফল, ফুল ও মধু',
    },
    ecologicalRole: {
      en: 'Controls termite and ant colonies and disperses the seeds of fruiting trees.',
      bn: 'উইপোকা ও পিঁপড়ার কলোনি নিয়ন্ত্রণ করে এবং ফলের গাছের বীজ ছড়ায়।',
    },
    behavior: {
      en: 'Mostly nocturnal and solitary; mothers carry their cubs on their backs for months.',
      bn: 'প্রধানত নিশাচর ও একাকী; মা ভালুক কয়েক মাস পর্যন্ত ছানাদের পিঠে চড়িয়ে ঘুরে বেড়ায়।',
    },
    range: {
      native: [
        [22.3, 80.6],
        [15.3, 76.4],
        [27.5, 84.3],
        [8.4, 80.4],
        [21.5, 86.0],
      ],
      endemicTo: { en: 'Indian subcontinent', bn: 'ভারতীয় উপমহাদেশ' },
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Habitat loss to farming and mining', 'Conflict with people, as attacks can be serious', 'Past capture of cubs for “dancing bear” shows'],
        bn: ['কৃষি ও খনির কারণে আবাসস্থল হারানো', 'মানুষের সঙ্গে সংঘাত — এদের আক্রমণ গুরুতর হতে পারে', 'অতীতে "নাচুনে ভালুক" খেলার জন্য ছানা ধরা'],
      },
      initiatives: {
        en: ['End of the dancing-bear trade in India and rescue centres such as Agra Bear Rescue Facility', 'Protection in Indian national parks and sanctuaries'],
        bn: ['ভারতে নাচুনে ভালুক প্রথার অবসান ও আগ্রা বিয়ার রেসকিউ ফ্যাসিলিটির মতো উদ্ধার কেন্দ্র', 'ভারতের জাতীয় উদ্যান ও অভয়ারণ্যে সুরক্ষা'],
      },
      assessed: '2016',
    },
    facts: {
      en: [
        'Its loud slurping while feeding on termites can be heard over 100 m away.',
        'It is the bear behind Baloo in “The Jungle Book”.',
      ],
      bn: [
        'উইপোকা খাওয়ার সময় এদের শোষার শব্দ ১০০ মিটারেরও বেশি দূর থেকে শোনা যায়।',
        '"দ্য জঙ্গল বুক"-এর বালু চরিত্রটি এই ভালুকের আদলে তৈরি।',
      ],
    },
    related: ['asiatic-black-bear', 'indian-leopard'],
  },
  {
    id: 'golden-jackal',
    commonName: { en: 'Golden Jackal', bn: 'শিয়াল' },
    scientificName: 'Canis aureus',
    altNames: {
      en: ['Jackal', 'Common Jackal', 'Asiatic Jackal'],
      bn: ['পাতিশিয়াল', 'সোনালি শিয়াল', 'শেয়াল'],
    },
    category: 'mammals',
    wikiTitle: 'Golden jackal',
    description: {
      en: 'The golden jackal is the familiar jackal of Bangladeshi villages, whose eerie group howls at dusk are part of rural life. Highly adaptable, it lives near farmland, scrub, mangroves and even town outskirts. It plays a big role in folk tales, usually as a clever trickster.',
      bn: 'শিয়াল বাংলাদেশের গ্রামের অতি পরিচিত প্রাণী; সন্ধ্যায় দল বেঁধে "হুক্কা হুয়া" ডাক গ্রামীণ জীবনের অংশ। এরা অত্যন্ত মানিয়ে চলতে পারে — কৃষিজমি, ঝোপঝাড়, ম্যানগ্রোভ এমনকি শহরতলিতেও বাস করে। লোককাহিনিতে শিয়াল সাধারণত চতুর ও ধূর্ত চরিত্র হিসেবে হাজির হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Canidae',
      genus: 'Canis',
      species: 'C. aureus',
    },
    physical: {
      size: { en: 'Body 70–85 cm long; tail 20–30 cm', bn: 'দেহ ৭০–৮৫ সেমি লম্বা; লেজ ২০–৩০ সেমি' },
      weight: { en: '6–14 kg', bn: '৬–১৪ কেজি' },
      lifespan: { en: '8–9 years in the wild; up to 16 in captivity', bn: 'বনে ৮–৯ বছর; আবদ্ধ অবস্থায় ১৬ বছর পর্যন্ত' },
      features: {
        en: [
          'Yellowish-grey to golden coat, darker on the back',
          'Bushy tail with a dark tip',
          'Slender legs and pointed ears',
        ],
        bn: [
          'হলদেটে-ধূসর থেকে সোনালি লোম, পিঠের দিকে গাঢ়',
          'আগা কালচে ঝোপালো লেজ',
          'সরু পা ও খাড়া, চোখা কান',
        ],
      },
    },
    habitat: {
      en: 'Farmland, scrub, forest edges, mangroves and the outskirts of towns',
      bn: 'কৃষিজমি, ঝোপঝাড়, বনের প্রান্ত, ম্যানগ্রোভ ও শহরতলি',
    },
    habitats: ['urban-farmland', 'grassland', 'mangrove', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'europe'],
    distribution: {
      en: 'From south-eastern Europe through the Middle East and Central Asia to the Indian subcontinent and mainland Southeast Asia.',
      bn: 'দক্ষিণ-পূর্ব ইউরোপ থেকে মধ্যপ্রাচ্য ও মধ্য এশিয়া হয়ে ভারতীয় উপমহাদেশ ও মূল ভূখণ্ডের দক্ষিণ-পূর্ব এশিয়া পর্যন্ত।',
    },
    climate: { en: 'From arid to humid tropical and temperate climates', bn: 'শুষ্ক থেকে আর্দ্র ক্রান্তীয় ও নাতিশীতোষ্ণ জলবায়ু' },
    diet: {
      en: 'Omnivore — rodents, birds, fruits, crabs, insects and carrion',
      bn: 'সর্বভুক — ইঁদুর, পাখি, ফল, কাঁকড়া, পোকামাকড় ও মৃত প্রাণী',
    },
    ecologicalRole: {
      en: 'An efficient scavenger and rodent predator that cleans up carcasses and helps control crop pests.',
      bn: 'দক্ষ মৃতভোজী ও ইঁদুর শিকারি হিসেবে মরা প্রাণী পরিষ্কার করে এবং ফসলের ক্ষতিকর প্রাণী নিয়ন্ত্রণে সাহায্য করে।',
    },
    behavior: {
      en: 'Lives in monogamous pairs with their young; mostly active at dusk and night, communicating with howls.',
      bn: 'জোড়ায় জোড়ায় ছানাদের নিয়ে থাকে; প্রধানত সন্ধ্যা ও রাতে সক্রিয় এবং ডাকের মাধ্যমে যোগাযোগ করে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.0, 89.5],
        [26.0, 80.0],
        [16.0, 100.0],
        [32.0, 53.0],
        [42.5, 25.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'increasing',
      threats: {
        en: ['Road accidents', 'Poisoning and persecution near villages', 'Rabies and other diseases'],
        bn: ['সড়ক দুর্ঘটনা', 'গ্রামের কাছে বিষ দিয়ে ও পিটিয়ে মারা', 'জলাতঙ্ক ও অন্যান্য রোগ'],
      },
      initiatives: {
        en: ['Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012', 'Rabies vaccination of dogs reduces disease spread'],
        bn: ['বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২-এর অধীনে সুরক্ষিত', 'কুকুরকে জলাতঙ্কের টিকা দেওয়ায় রোগের বিস্তার কমে'],
      },
      assessed: '2018',
    },
    facts: {
      en: [
        'Jackals often howl in chorus, answering sirens or other jackal groups.',
        'In recent decades the species has spread rapidly across Europe.',
      ],
      bn: [
        'শিয়াল প্রায়ই দল বেঁধে সমস্বরে ডাকে, এমনকি সাইরেন বা অন্য দলের ডাকেরও জবাব দেয়।',
        'গত কয়েক দশকে এরা দ্রুত ইউরোপজুড়ে ছড়িয়ে পড়েছে।',
      ],
    },
    related: ['bengal-fox', 'dhole'],
  },
  {
    id: 'bengal-fox',
    commonName: { en: 'Bengal Fox', bn: 'খেঁকশিয়াল' },
    scientificName: 'Vulpes bengalensis',
    altNames: {
      en: ['Indian Fox'],
      bn: ['ভারতীয় খেঁকশিয়াল'],
    },
    category: 'mammals',
    wikiTitle: 'Bengal fox',
    description: {
      en: 'The Bengal fox is a small, slender fox found only on the Indian subcontinent, recognised by its black-tipped bushy tail. It prefers open, dry country and avoids dense forest. In Bangladesh it is rare and mostly reported from the drier north-western districts.',
      bn: 'খেঁকশিয়াল কেবল ভারতীয় উপমহাদেশে পাওয়া একটি ছোট, ছিপছিপে শিয়াল; কালো আগাওয়ালা ঝোপালো লেজ দেখে সহজেই চেনা যায়। এরা খোলা, শুষ্ক এলাকা পছন্দ করে এবং ঘন বন এড়িয়ে চলে। বাংলাদেশে এরা বিরল; বেশিরভাগ খবর আসে উত্তর-পশ্চিমের শুষ্ক জেলাগুলো থেকে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Canidae',
      genus: 'Vulpes',
      species: 'V. bengalensis',
    },
    physical: {
      size: { en: 'Body 45–60 cm long; tail 25–35 cm', bn: 'দেহ ৪৫–৬০ সেমি লম্বা; লেজ ২৫–৩৫ সেমি' },
      weight: { en: '2–4 kg', bn: '২–৪ কেজি' },
      lifespan: { en: '6–8 years', bn: '৬–৮ বছর' },
      features: {
        en: [
          'Greyish coat with rusty-brown legs',
          'Bushy tail with a distinctive black tip',
          'Large ears with dark brown backs',
        ],
        bn: [
          'ধূসর লোম ও লালচে-বাদামি পা',
          'ঝোপালো লেজের আগায় স্পষ্ট কালো রং',
          'বড় কান, কানের পেছনটা গাঢ় বাদামি',
        ],
      },
    },
    habitat: {
      en: 'Open grassland, scrub, semi-arid land and farmland',
      bn: 'খোলা তৃণভূমি, ঝোপঝাড়, আধা-শুষ্ক ভূমি ও কৃষিজমি',
    },
    habitats: ['grassland', 'desert', 'urban-farmland'],
    regions: ['south-asia'],
    distribution: {
      en: 'India, Nepal, Pakistan and Bangladesh, from the Himalayan foothills to the south of the peninsula.',
      bn: 'ভারত, নেপাল, পাকিস্তান ও বাংলাদেশ — হিমালয়ের পাদদেশ থেকে উপদ্বীপের দক্ষিণ প্রান্ত পর্যন্ত।',
    },
    climate: { en: 'Dry tropical and semi-arid climates', bn: 'শুষ্ক ক্রান্তীয় ও আধা-শুষ্ক জলবায়ু' },
    diet: {
      en: 'Omnivore — rodents, insects, reptiles, birds and fruits such as ber and figs',
      bn: 'সর্বভুক — ইঁদুর, পোকামাকড়, সরীসৃপ, পাখি এবং বরই ও ডুমুরের মতো ফল',
    },
    ecologicalRole: {
      en: 'Helps control rodents and insect pests in grasslands and farmland.',
      bn: 'তৃণভূমি ও কৃষিজমিতে ইঁদুর ও ক্ষতিকর পোকামাকড় নিয়ন্ত্রণে সাহায্য করে।',
    },
    behavior: {
      en: 'Mostly nocturnal; pairs dig underground dens with several entrances to raise their pups.',
      bn: 'প্রধানত নিশাচর; জোড়ায় জোড়ায় একাধিক মুখওয়ালা মাটির গর্ত খুঁড়ে ছানা লালন-পালন করে।',
    },
    range: {
      native: [
        [24.8, 88.6],
        [26.9, 75.8],
        [23.0, 72.5],
        [15.5, 77.0],
        [28.5, 81.5],
      ],
      endemicTo: { en: 'Indian subcontinent', bn: 'ভারতীয় উপমহাদেশ' },
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Conversion of grasslands to farms and industry', 'Hunting for skin, meat and traditional remedies', 'Diseases from domestic dogs'],
        bn: ['তৃণভূমিকে কৃষি ও শিল্প এলাকায় রূপান্তর', 'চামড়া, মাংস ও প্রচলিত চিকিৎসার জন্য শিকার', 'গৃহপালিত কুকুর থেকে রোগ সংক্রমণ'],
      },
      initiatives: {
        en: ['Legal protection in Bangladesh and India', 'Grassland conservation programmes in western India'],
        bn: ['বাংলাদেশ ও ভারতে আইনি সুরক্ষা', 'পশ্চিম ভারতে তৃণভূমি সংরক্ষণ কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'The black tail tip easily separates it from the jackal.',
        'Its dens can be used by the same family for many years.',
      ],
      bn: [
        'লেজের কালো আগা দেখে একে সহজেই শিয়াল থেকে আলাদা করা যায়।',
        'একই পরিবার বহু বছর ধরে একই গর্ত ব্যবহার করতে পারে।',
      ],
    },
    related: ['golden-jackal'],
  },
  {
    id: 'large-indian-civet',
    commonName: { en: 'Large Indian Civet', bn: 'বড় বাগডাশ' },
    scientificName: 'Viverra zibetha',
    altNames: {
      en: ['Civet Cat'],
      bn: ['বাগডাশ'],
    },
    category: 'mammals',
    wikiTitle: 'Large Indian civet',
    description: {
      en: 'The large Indian civet is a cat-sized, long-bodied carnivore with a black-and-white banded tail and a striking black-and-white neck pattern. It is a shy, nocturnal animal of forest edges and village groves. In Bangladesh it occurs in many forests, though it is far less often seen than the small Indian civet.',
      bn: 'বড় বাগডাশ বিড়ালের মতো আকারের লম্বা দেহের মাংসাশী প্রাণী; লেজে সাদা-কালো বলয় এবং গলায় সাদা-কালো দাগ এদের বৈশিষ্ট্য। এরা লাজুক ও নিশাচর, থাকে বনের প্রান্তে ও গ্রামের ঝোপঝাড়ে। বাংলাদেশের অনেক বনে এদের পাওয়া যায়, তবে ছোট বাগডাশের তুলনায় অনেক কম চোখে পড়ে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Viverridae',
      genus: 'Viverra',
      species: 'V. zibetha',
    },
    physical: {
      size: { en: 'Body 50–95 cm long; tail 38–59 cm', bn: 'দেহ ৫০–৯৫ সেমি লম্বা; লেজ ৩৮–৫৯ সেমি' },
      weight: { en: '3.4–9 kg', bn: '৩.৪–৯ কেজি' },
      lifespan: { en: 'About 15–20 years in captivity', bn: 'আবদ্ধ অবস্থায় প্রায় ১৫–২০ বছর' },
      features: {
        en: [
          'Tail ringed with bold black and white bands',
          'Black-and-white stripes on the throat and neck',
          'Erectile black crest of hair along the back',
        ],
        bn: [
          'লেজে স্পষ্ট সাদা-কালো বলয়',
          'গলা ও ঘাড়ে সাদা-কালো ডোরা',
          'পিঠ বরাবর খাড়া হতে পারে এমন কালো লোমের ঝুঁটি',
        ],
      },
    },
    habitat: {
      en: 'Evergreen and deciduous forests, scrub and cultivated land near forest',
      bn: 'চিরসবুজ ও পর্ণমোচী বন, ঝোপঝাড় এবং বনের কাছের চাষের জমি',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'From Nepal, Northeast India and Bangladesh through Myanmar and Indochina to southern China and the Malay Peninsula.',
      bn: 'নেপাল, উত্তর-পূর্ব ভারত ও বাংলাদেশ থেকে মিয়ানমার ও ইন্দোচীন হয়ে দক্ষিণ চীন ও মালয় উপদ্বীপ পর্যন্ত।',
    },
    climate: { en: 'Warm, humid tropical and subtropical climates', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় এবং উপক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Omnivore — rodents, birds, frogs, snakes, insects, crabs and fruit',
      bn: 'সর্বভুক — ইঁদুর, পাখি, ব্যাঙ, সাপ, পোকামাকড়, কাঁকড়া ও ফল',
    },
    ecologicalRole: {
      en: 'Controls rodents and other small animals and disperses seeds of the fruits it eats.',
      bn: 'ইঁদুর ও অন্যান্য ছোট প্রাণী নিয়ন্ত্রণ করে এবং খাওয়া ফলের বীজ ছড়িয়ে দেয়।',
    },
    behavior: {
      en: 'Solitary, nocturnal and mostly ground-dwelling; it marks its territory with a strong-smelling musk.',
      bn: 'একাকী, নিশাচর ও প্রধানত মাটিতে চলাফেরা করে; তীব্র গন্ধযুক্ত কস্তুরী দিয়ে নিজের এলাকা চিহ্নিত করে।',
    },
    range: {
      native: [
        [24.3, 91.7],
        [22.0, 92.3],
        [26.2, 92.9],
        [19.8, 96.1],
        [22.5, 106.0],
        [5.0, 101.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Hunting for meat and musk', 'Snaring and trapping', 'Loss of forest cover'],
        bn: ['মাংস ও কস্তুরীর জন্য শিকার', 'ফাঁদ পেতে ধরা', 'বনভূমি কমে যাওয়া'],
      },
      initiatives: {
        en: ['Protected under Bangladesh wildlife law', 'Listed on CITES Appendix III (India)'],
        bn: ['বাংলাদেশের বন্যপ্রাণী আইনে সুরক্ষিত', 'সাইটিস পরিশিষ্ট-৩ এ তালিকাভুক্ত (ভারতের পক্ষ থেকে)'],
      },
    },
    facts: {
      en: [
        'Civet musk was historically used as a base for perfumes.',
        'Despite the name “civet cat”, civets are not cats.',
      ],
      bn: [
        'একসময় সুগন্ধি তৈরির মূল উপাদান হিসেবে বাগডাশের কস্তুরী ব্যবহার হতো।',
        '"খাটাশ" বা "বাগডাশ বিড়াল" বলা হলেও এরা বিড়াল নয়।',
      ],
    },
    related: ['fishing-cat', 'golden-jackal'],
  },
  {
    id: 'rhesus-macaque',
    commonName: { en: 'Rhesus Macaque', bn: 'রেসাস বানর' },
    scientificName: 'Macaca mulatta',
    altNames: {
      en: ['Rhesus Monkey', 'Monkey'],
      bn: ['বানর', 'লাল বানর'],
    },
    category: 'mammals',
    wikiTitle: 'Rhesus macaque',
    description: {
      en: 'The rhesus macaque is the most common monkey of Bangladesh, living in forests, villages, temples and even old parts of Dhaka. It is brown-grey with a reddish rump and a pink, hairless face. Its adaptability makes it one of the most widespread primates in the world after humans.',
      bn: 'রেসাস বানর বাংলাদেশের সবচেয়ে পরিচিত বানর; বন, গ্রাম, মন্দির এমনকি পুরান ঢাকাতেও এদের দেখা যায়। এদের গায়ের রং বাদামি-ধূসর, পেছনের দিক লালচে আর মুখ গোলাপি ও লোমহীন। মানিয়ে চলার অসাধারণ ক্ষমতার কারণে মানুষের পরে এরাই পৃথিবীর অন্যতম বিস্তৃত প্রাইমেট।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Primates',
      family: 'Cercopithecidae',
      genus: 'Macaca',
      species: 'M. mulatta',
    },
    physical: {
      size: { en: 'Body 45–64 cm long; tail 19–32 cm', bn: 'দেহ ৪৫–৬৪ সেমি লম্বা; লেজ ১৯–৩২ সেমি' },
      weight: { en: 'Males about 7.7 kg; females about 5.3 kg on average', bn: 'গড়ে পুরুষ প্রায় ৭.৭ কেজি; স্ত্রী প্রায় ৫.৩ কেজি' },
      lifespan: { en: 'About 25 years; up to 40 in captivity', bn: 'প্রায় ২৫ বছর; আবদ্ধ অবস্থায় ৪০ বছর পর্যন্ত' },
      features: {
        en: [
          'Brown-grey fur with an orange-red rump',
          'Pink, hairless face',
          'Cheek pouches for storing food while foraging',
        ],
        bn: [
          'বাদামি-ধূসর লোম ও কমলাটে-লাল পশ্চাদ্ভাগ',
          'গোলাপি, লোমহীন মুখ',
          'খাবার জমিয়ে রাখার জন্য গালের থলি',
        ],
      },
    },
    habitat: {
      en: 'Forests, mangroves, farmland, villages and cities',
      bn: 'বন, ম্যানগ্রোভ, কৃষিজমি, গ্রাম ও শহর',
    },
    habitats: ['tropical-forest', 'mangrove', 'urban-farmland', 'mountain'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Afghanistan and Pakistan through India, Bangladesh and Nepal to Myanmar, Thailand, Indochina and much of China.',
      bn: 'আফগানিস্তান ও পাকিস্তান থেকে ভারত, বাংলাদেশ ও নেপাল হয়ে মিয়ানমার, থাইল্যান্ড, ইন্দোচীন ও চীনের বড় অংশ পর্যন্ত।',
    },
    climate: { en: 'Tropical to temperate climates, including snowy mountains', bn: 'ক্রান্তীয় থেকে নাতিশীতোষ্ণ জলবায়ু, এমনকি তুষারাবৃত পাহাড়েও' },
    diet: {
      en: 'Omnivore — fruits, seeds, leaves, insects and human food scraps',
      bn: 'সর্বভুক — ফল, বীজ, পাতা, পোকামাকড় ও মানুষের ফেলে দেওয়া খাবার',
    },
    ecologicalRole: {
      en: 'Disperses seeds of many plants and is prey for leopards, dholes and large birds of prey.',
      bn: 'বহু উদ্ভিদের বীজ ছড়ায় এবং চিতাবাঘ, ঢোল ও বড় শিকারি পাখির খাদ্য।',
    },
    behavior: {
      en: 'Lives in large troops with strict female-based hierarchies; bold and can be aggressive around people.',
      bn: 'বড় দলে থাকে, যেখানে মাদিদের বংশধারা অনুযায়ী কঠোর ক্রমোচ্চ শ্রেণি থাকে; সাহসী এবং মানুষের আশপাশে আক্রমণাত্মকও হতে পারে।',
    },
    range: {
      native: [
        [23.7, 90.4],
        [22.0, 89.4],
        [28.6, 77.2],
        [27.7, 85.3],
        [19.0, 99.0],
        [30.0, 110.0],
      ],
      introduced: [[29.2, -82.0]],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Conflict with farmers and city residents', 'Capture for pets, performances and research', 'Loss of forest habitat'],
        bn: ['কৃষক ও শহরবাসীর সঙ্গে সংঘাত', 'পোষা প্রাণী, খেলা দেখানো ও গবেষণার জন্য ধরা', 'বনভূমি হারানো'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II', 'Protected under the Bangladesh Wildlife Act 2012'],
        bn: ['সাইটিস পরিশিষ্ট-২ এ তালিকাভুক্ত', 'বাংলাদেশ বন্যপ্রাণী আইন, ২০১২-এর অধীনে সুরক্ষিত'],
      },
    },
    facts: {
      en: [
        'The “Rh factor” in human blood groups is named after this monkey.',
        'A rhesus macaque was among the first primates sent into space.',
      ],
      bn: [
        'মানুষের রক্তের গ্রুপের "আরএইচ ফ্যাক্টর" এই বানরের নাম থেকেই এসেছে।',
        'মহাকাশে পাঠানো প্রথম দিকের প্রাইমেটদের মধ্যে রেসাস বানরও ছিল।',
      ],
    },
    related: ['western-hoolock-gibbon', 'capped-langur', 'bengal-slow-loris'],
  },
  {
    id: 'western-hoolock-gibbon',
    commonName: { en: 'Western Hoolock Gibbon', bn: 'উল্লুক' },
    scientificName: 'Hoolock hoolock',
    altNames: {
      en: ['Hoolock Gibbon', 'Hoolock'],
      bn: ['পশ্চিমা উল্লুক', 'হুলক গিবন'],
    },
    category: 'mammals',
    wikiTitle: 'Western hoolock gibbon',
    description: {
      en: 'The western hoolock gibbon is the only ape found in Bangladesh and India. Pairs sing loud, haunting duets at dawn that echo through the forest canopy. In Bangladesh it lives in the evergreen forests of Sylhet and Chattogram, with Lawachara National Park its best-known stronghold.',
      bn: 'উল্লুক বাংলাদেশ ও ভারতে পাওয়া একমাত্র বনমানুষ বা এপ। ভোরবেলা জোড়ায় জোড়ায় এরা উচ্চস্বরে দ্বৈতসংগীত গায়, যা পুরো বনে প্রতিধ্বনিত হয়। বাংলাদেশে সিলেট ও চট্টগ্রামের চিরসবুজ বনে এদের বাস; লাউয়াছড়া জাতীয় উদ্যান এদের সবচেয়ে পরিচিত আবাস।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Primates',
      family: 'Hylobatidae',
      genus: 'Hoolock',
      species: 'H. hoolock',
    },
    physical: {
      size: { en: 'Body 60–90 cm long; no tail', bn: 'দেহ ৬০–৯০ সেমি লম্বা; লেজ নেই' },
      weight: { en: '6–9 kg', bn: '৬–৯ কেজি' },
      lifespan: { en: 'About 25 years in the wild; up to 40 in captivity', bn: 'বনে প্রায় ২৫ বছর; আবদ্ধ অবস্থায় ৪০ বছর পর্যন্ত' },
      features: {
        en: [
          'Males are black with white eyebrows; females are golden-buff',
          'Very long arms, longer than the legs',
          'No tail, like all apes',
        ],
        bn: [
          'পুরুষ কালো রঙের ও সাদা ভ্রুযুক্ত; স্ত্রী সোনালি-বাদামি',
          'পায়ের চেয়েও লম্বা অত্যন্ত লম্বা হাত',
          'অন্যান্য বনমানুষের মতো লেজ নেই',
        ],
      },
    },
    habitat: {
      en: 'Tall tropical evergreen and semi-evergreen forests',
      bn: 'উঁচু গাছের ক্রান্তীয় চিরসবুজ ও আধা-চিরসবুজ বন',
    },
    habitats: ['tropical-forest'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'Eastern Bangladesh, Northeast India south of the Brahmaputra, and western Myanmar west of the Chindwin River.',
      bn: 'পূর্ব বাংলাদেশ, ব্রহ্মপুত্রের দক্ষিণে উত্তর-পূর্ব ভারত এবং চিন্দুইন নদীর পশ্চিমে পশ্চিম মিয়ানমার।',
    },
    climate: { en: 'Warm, wet tropical monsoon climate', bn: 'উষ্ণ ও বৃষ্টিবহুল ক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Mainly ripe fruits, especially figs, plus leaves, flowers and insects',
      bn: 'প্রধানত পাকা ফল, বিশেষ করে ডুমুর; সঙ্গে পাতা, ফুল ও পোকামাকড়',
    },
    ecologicalRole: {
      en: 'An important seed disperser of canopy trees in Bangladesh’s evergreen forests.',
      bn: 'বাংলাদেশের চিরসবুজ বনের উঁচু গাছগুলোর গুরুত্বপূর্ণ বীজ বিস্তারকারী।',
    },
    behavior: {
      en: 'Lives in small family groups, swings arm-over-arm through the canopy and rarely comes to the ground.',
      bn: 'ছোট পারিবারিক দলে থাকে, হাতে হাতে দোল খেয়ে গাছের মাথায় চলাচল করে এবং কদাচিৎ মাটিতে নামে।',
    },
    range: {
      native: [
        [24.32, 91.78],
        [24.1, 91.6],
        [22.5, 92.2],
        [25.5, 93.5],
        [23.5, 94.2],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Fragmentation of forests by roads, tea estates and farming', 'Illegal logging', 'Electrocution and road kills where canopy is broken'],
        bn: ['রাস্তা, চা-বাগান ও কৃষির কারণে বন খণ্ডিত হওয়া', 'অবৈধ গাছ কাটা', 'গাছের চাঁদোয়া বিচ্ছিন্ন জায়গায় বিদ্যুৎস্পৃষ্ট হওয়া ও সড়ক দুর্ঘটনা'],
      },
      initiatives: {
        en: ['Protection in Lawachara and Satchari National Parks', 'Canopy bridges and community conservation projects in Bangladesh'],
        bn: ['লাউয়াছড়া ও সাতছড়ি জাতীয় উদ্যানে সুরক্ষা', 'বাংলাদেশে গাছের চাঁদোয়ায় সেতু স্থাপন ও কমিউনিটি সংরক্ষণ প্রকল্প'],
      },
    },
    facts: {
      en: [
        'Its song can carry more than 1 km through the forest.',
        'Bangladesh’s population is estimated at only a few hundred individuals.',
      ],
      bn: [
        'এদের ডাক বনের ভেতর দিয়ে ১ কিলোমিটারেরও বেশি দূর পর্যন্ত পৌঁছায়।',
        'বাংলাদেশে এদের সংখ্যা মাত্র কয়েকশো বলে ধারণা করা হয়।',
      ],
    },
    related: ['capped-langur', 'rhesus-macaque', 'bengal-slow-loris'],
  },
];
