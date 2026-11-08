import type { Species } from '@/types';

export const insectsOther1: Species[] = [
  {
    id: 'giant-honey-bee',
    commonName: { en: 'Giant Honey Bee', bn: 'বড় মৌমাছি' },
    scientificName: 'Apis dorsata',
    altNames: {
      en: ['Rock Bee', 'Sundarbans Honey Bee'],
      bn: ['পাহাড়ি মৌমাছি', 'সুন্দরবনের মৌমাছি'],
    },
    category: 'insects',
    wikiTitle: 'Apis dorsata',
    description: {
      en: 'The giant honey bee is a large, wild honey bee of South and Southeast Asia that builds a single huge open comb hanging from tall trees, cliffs or buildings. It cannot be kept in hives, so its honey is collected from the wild. In Bangladesh it produces most of the famous Sundarbans honey gathered each spring by traditional honey hunters called mouals.',
      bn: 'বড় মৌমাছি দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার একটি বড় আকারের বুনো মৌমাছি, যারা উঁচু গাছের ডাল, পাহাড়ের খাড়া গা বা দালানের কার্নিশে খোলা জায়গায় একটিমাত্র বিশাল চাক বানায়। এদের বাক্সে পোষা যায় না, তাই মধু সংগ্রহ করতে হয় বন থেকেই। সুন্দরবনের বিখ্যাত মধুর বেশিরভাগই আসে এই মৌমাছি থেকে, যা প্রতি বসন্তে মৌয়ালরা প্রথাগত পদ্ধতিতে সংগ্রহ করেন।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Hymenoptera',
      family: 'Apidae',
      genus: 'Apis',
      species: 'A. dorsata',
    },
    physical: {
      size: { en: 'Workers about 17–20 mm long', bn: 'কর্মী মৌমাছি প্রায় ১৭–২০ মিমি লম্বা' },
      weight: { en: 'A worker weighs well under 1 g', bn: 'একটি কর্মী মৌমাছির ওজন ১ গ্রামের অনেক কম' },
      lifespan: {
        en: 'Workers live a few weeks; queens can live for several years',
        bn: 'কর্মী মৌমাছি কয়েক সপ্তাহ বাঁচে; রানি কয়েক বছর পর্যন্ত বাঁচতে পারে',
      },
      features: {
        en: [
          'Large bee with an orange-brown body and dark, smoky wings',
          'Single open comb that can exceed 1 m across, covered by a living curtain of bees',
          'Very defensive — colonies can attack in large numbers when disturbed',
        ],
        bn: [
          'বড় আকারের মৌমাছি, দেহ কমলা-বাদামি, ডানা গাঢ় ধোঁয়াটে',
          'খোলা জায়গায় একটিমাত্র চাক, যা ১ মিটারেরও বেশি চওড়া হতে পারে এবং মৌমাছির জীবন্ত আস্তরণে ঢাকা থাকে',
          'অত্যন্ত আত্মরক্ষাপ্রবণ — বিরক্ত হলে দলবেঁধে আক্রমণ করে',
        ],
      },
    },
    habitat: {
      en: 'Tropical forests, mangroves and open country with tall trees or cliffs for nesting',
      bn: 'ক্রান্তীয় বন, ম্যানগ্রোভ এবং চাক বাঁধার মতো উঁচু গাছ বা খাড়া পাহাড় আছে এমন খোলা এলাকা',
    },
    habitats: ['tropical-forest', 'mangrove', 'mountain', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'From Pakistan and India through Bangladesh, Nepal and mainland Southeast Asia to southern China, the Philippines and Indonesia.',
      bn: 'পাকিস্তান ও ভারত থেকে বাংলাদেশ, নেপাল ও দক্ষিণ-পূর্ব এশিয়ার মূল ভূখণ্ড হয়ে দক্ষিণ চীন, ফিলিপাইন ও ইন্দোনেশিয়া পর্যন্ত।',
    },
    climate: { en: 'Hot, humid tropical and monsoon climates', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় এবং মৌসুমি জলবায়ু' },
    diet: {
      en: 'Nectar and pollen from forest trees and crops — in the Sundarbans especially khalisha, garan and keora flowers',
      bn: 'বনের গাছ ও ফসলের ফুলের মধু-রস ও পরাগ — সুন্দরবনে বিশেষ করে খলিশা, গরান ও কেওড়া ফুল',
    },
    ecologicalRole: {
      en: 'A major pollinator of wild trees, mangroves and crops across tropical Asia.',
      bn: 'ক্রান্তীয় এশিয়াজুড়ে বুনো গাছ, ম্যানগ্রোভ ও ফসলের অন্যতম প্রধান পরাগায়নকারী।',
    },
    behavior: {
      en: 'Colonies migrate seasonally between nesting sites and defend the comb with a rippling “shimmering” wave that startles predators.',
      bn: 'মৌসুম অনুযায়ী এক জায়গা থেকে আরেক জায়গায় দল বেঁধে চলে যায় এবং শিকারিকে ভয় দেখাতে চাকের ওপর ঢেউয়ের মতো ঝিলমিল আন্দোলন তৈরি করে।',
    },
    range: {
      native: [
        [22.0, 89.4],
        [24.9, 91.9],
        [21.2, 79.1],
        [27.7, 85.3],
        [15.0, 101.0],
        [-1.5, 113.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Destructive honey hunting that kills brood', 'Loss of nesting trees and forest', 'Pesticide use'],
        bn: ['চাক কেটে লার্ভা ও ডিমসহ নষ্ট করে মধু আহরণ', 'চাক বাঁধার গাছ ও বন উজাড়', 'কীটনাশকের ব্যবহার'],
      },
      initiatives: {
        en: ['Sustainable honey-harvest training for Sundarbans mouals', 'Forest Department permits and harvest seasons'],
        bn: ['সুন্দরবনের মৌয়ালদের টেকসই মধু আহরণের প্রশিক্ষণ', 'বন বিভাগের অনুমতিপত্র ও নির্দিষ্ট আহরণ মৌসুম'],
      },
    },
    facts: {
      en: [
        'Sundarbans honey collection traditionally begins in early April.',
        'Dozens of colonies may hang their combs from a single large tree.',
        'Its sting is painful, and mass attacks can be dangerous to people.',
      ],
      bn: [
        'সুন্দরবনে প্রথাগতভাবে এপ্রিলের শুরু থেকে মধু আহরণ শুরু হয়।',
        'একটি বড় গাছে একসঙ্গে কয়েক ডজন চাক ঝুলতে দেখা যায়।',
        'এদের হুল বেদনাদায়ক, আর দলবদ্ধ আক্রমণ মানুষের জন্য বিপজ্জনক হতে পারে।',
      ],
    },
    related: ['asian-honey-bee', 'western-honey-bee', 'sundari'],
  },
  {
    id: 'asian-honey-bee',
    commonName: { en: 'Asian Honey Bee', bn: 'এশীয় মৌমাছি' },
    scientificName: 'Apis cerana',
    altNames: {
      en: ['Eastern Honey Bee', 'Indian Honey Bee'],
      bn: ['দেশি মৌমাছি', 'ভারতীয় মৌমাছি'],
    },
    category: 'insects',
    wikiTitle: 'Apis cerana',
    description: {
      en: 'The Asian honey bee is a small honey bee native to South, Southeast and East Asia that nests in cavities such as tree hollows, walls and wooden boxes. It has long been kept by beekeepers in Bangladesh and India. It is the original host of the Varroa mite and copes with it far better than the western honey bee.',
      bn: 'এশীয় মৌমাছি দক্ষিণ, দক্ষিণ-পূর্ব ও পূর্ব এশিয়ার একটি ছোট আকারের মৌমাছি, যারা গাছের কোটর, দেয়ালের ফাঁক বা কাঠের বাক্সের মতো বদ্ধ জায়গায় চাক বানায়। বাংলাদেশ ও ভারতে বহুকাল ধরে মৌচাষিরা এদের বাক্সে পালন করে আসছেন। ভ্যারোয়া মাইট নামের পরজীবী মূলত এদের দেহেই থাকত, আর পশ্চিমা মৌমাছির চেয়ে এরা এই পরজীবী অনেক ভালোভাবে সামলাতে পারে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Hymenoptera',
      family: 'Apidae',
      genus: 'Apis',
      species: 'A. cerana',
    },
    physical: {
      size: { en: 'Workers about 10–11 mm long', bn: 'কর্মী মৌমাছি প্রায় ১০–১১ মিমি লম্বা' },
      weight: { en: 'A worker weighs roughly 0.1 g', bn: 'একটি কর্মী মৌমাছির ওজন মোটামুটি ০.১ গ্রাম' },
      lifespan: {
        en: 'Workers live a few weeks to a few months; queens 1–3 years',
        bn: 'কর্মী মৌমাছি কয়েক সপ্তাহ থেকে কয়েক মাস; রানি ১–৩ বছর',
      },
      features: {
        en: [
          'Smaller than the western honey bee, with distinct dark and pale abdominal bands',
          'Builds several parallel combs inside a dark cavity',
          'Workers groom one another to remove Varroa mites',
        ],
        bn: [
          'পশ্চিমা মৌমাছির চেয়ে ছোট; পেটে গাঢ় ও হালকা রঙের স্পষ্ট ডোরা',
          'অন্ধকার কোটরের ভেতরে পাশাপাশি একাধিক চাক বানায়',
          'কর্মীরা একে অপরের দেহ থেকে ভ্যারোয়া মাইট খুঁটে সরিয়ে দেয়',
        ],
      },
    },
    habitat: {
      en: 'Forests, villages, orchards and farmland with tree hollows or other nest cavities',
      bn: 'বন, গ্রাম, ফলের বাগান ও কৃষিজমি, যেখানে গাছের কোটর বা বাসা বাঁধার মতো ফাঁকা জায়গা আছে',
    },
    habitats: ['tropical-forest', 'temperate-forest', 'urban-farmland', 'mountain'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Native from Afghanistan and India through Bangladesh and Southeast Asia to China, Korea and Japan; introduced to New Guinea and northern Australia.',
      bn: 'আফগানিস্তান ও ভারত থেকে বাংলাদেশ ও দক্ষিণ-পূর্ব এশিয়া হয়ে চীন, কোরিয়া ও জাপান পর্যন্ত স্থানীয়; নিউগিনি ও উত্তর অস্ট্রেলিয়ায় মানুষের মাধ্যমে ছড়িয়েছে।',
    },
    climate: {
      en: 'Tropical to cool temperate, including Himalayan foothills',
      bn: 'ক্রান্তীয় থেকে শীতল নাতিশীতোষ্ণ, হিমালয়ের পাদদেশসহ',
    },
    diet: {
      en: 'Nectar and pollen from a wide range of wild plants and crops such as mustard and litchi',
      bn: 'নানা ধরনের বুনো গাছ এবং সরিষা ও লিচুর মতো ফসলের ফুলের মধু-রস ও পরাগ',
    },
    ecologicalRole: {
      en: 'An important native pollinator of crops and wild plants throughout Asia.',
      bn: 'এশিয়াজুড়ে ফসল ও বুনো উদ্ভিদের গুরুত্বপূর্ণ দেশীয় পরাগায়নকারী।',
    },
    behavior: {
      en: 'Gentle compared with many bees; workers defend against hornets by forming a tight ball around the intruder and heating it to death.',
      bn: 'অনেক মৌমাছির তুলনায় শান্ত স্বভাবের; ভীমরুল আক্রমণ করলে কর্মীরা সেটিকে ঘিরে গোল বল বানায় এবং শরীরের তাপে মেরে ফেলে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.6, 88.4],
        [13.0, 77.6],
        [18.8, 99.0],
        [30.6, 104.1],
        [36.0, 138.0],
      ],
      introduced: [
        [-6.2, 145.0],
        [-16.9, 145.8],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Replacement by imported western honey bees', 'Pesticides and loss of forage plants', 'Thai sacbrood virus disease'],
        bn: ['আমদানি করা পশ্চিমা মৌমাছি দিয়ে প্রতিস্থাপন', 'কীটনাশক ও ফুলের গাছ কমে যাওয়া', 'থাই স্যাকব্রুড ভাইরাস রোগ'],
      },
      initiatives: {
        en: ['Beekeeping training by BSCIC and agricultural agencies', 'Promotion of native-bee apiculture in Asia'],
        bn: ['বিসিক ও কৃষি সংস্থার মৌচাষ প্রশিক্ষণ', 'এশিয়ায় দেশি মৌমাছি দিয়ে মৌচাষের প্রসার'],
      },
    },
    facts: {
      en: [
        'The Varroa mite, now a global pest of western honey bees, originally came from this species.',
        'Colonies readily abandon their nest when disturbed or short of food.',
      ],
      bn: [
        'পশ্চিমা মৌমাছির ভয়ংকর শত্রু ভ্যারোয়া মাইট আসলে এই প্রজাতি থেকেই ছড়িয়েছে।',
        'বিরক্ত হলে বা খাবারের অভাব হলে পুরো দল সহজেই চাক ছেড়ে চলে যায়।',
      ],
    },
    related: ['giant-honey-bee', 'western-honey-bee', 'asian-giant-hornet'],
  },
  {
    id: 'asian-giant-hornet',
    commonName: { en: 'Asian Giant Hornet', bn: 'এশীয় দৈত্য ভীমরুল' },
    scientificName: 'Vespa mandarinia',
    altNames: {
      en: ['Northern Giant Hornet', 'Murder Hornet', 'Japanese Giant Hornet'],
      bn: ['বড় ভীমরুল', 'খুনি ভীমরুল', 'জাপানি দৈত্য ভীমরুল'],
    },
    category: 'insects',
    wikiTitle: 'Asian giant hornet',
    description: {
      en: 'The Asian giant hornet is the world’s largest hornet, native to the forests and mountains of East and South Asia. Workers hunt other insects, and small groups can wipe out entire honey bee colonies. Its sting is extremely painful and multiple stings can be fatal, though it rarely attacks unless its nest is disturbed.',
      bn: 'এশীয় দৈত্য ভীমরুল পৃথিবীর সবচেয়ে বড় ভীমরুল, যার আদি বাস পূর্ব ও দক্ষিণ এশিয়ার বন ও পাহাড়ি এলাকায়। কর্মী ভীমরুল অন্যান্য পোকামাকড় শিকার করে, আর কয়েকটি মিলে পুরো একটি মৌমাছির চাক ধ্বংস করে দিতে পারে। এর হুল অসম্ভব যন্ত্রণাদায়ক এবং একাধিক হুলে মৃত্যুও হতে পারে, তবে বাসায় হাত না দিলে সাধারণত আক্রমণ করে না।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Hymenoptera',
      family: 'Vespidae',
      genus: 'Vespa',
      species: 'V. mandarinia',
    },
    physical: {
      size: {
        en: 'Queens up to about 5 cm long with a wingspan around 7 cm; workers smaller',
        bn: 'রানি প্রায় ৫ সেমি পর্যন্ত লম্বা, ডানার বিস্তার প্রায় ৭ সেমি; কর্মীরা ছোট',
      },
      weight: { en: 'A few grams at most', bn: 'সর্বোচ্চ কয়েক গ্রাম' },
      lifespan: {
        en: 'Workers live weeks to a few months; queens about one year',
        bn: 'কর্মী কয়েক সপ্তাহ থেকে কয়েক মাস; রানি প্রায় এক বছর',
      },
      features: {
        en: [
          'Large orange-yellow head with strong mandibles',
          'Dark brown and yellow-orange banded abdomen',
          'Stinger about 6 mm long delivering potent venom',
        ],
        bn: [
          'শক্ত চোয়ালসহ বড় কমলা-হলুদ মাথা',
          'পেটে গাঢ় বাদামি ও হলদে-কমলা ডোরা',
          'প্রায় ৬ মিমি লম্বা হুল, যা দিয়ে তীব্র বিষ ঢালে',
        ],
      },
    },
    habitat: {
      en: 'Low mountains and forests, nesting underground in old rodent burrows or among tree roots',
      bn: 'নিচু পাহাড় ও বনাঞ্চল; মাটির নিচে পুরোনো ইঁদুরের গর্তে বা গাছের শিকড়ের ফাঁকে বাসা বাঁধে',
    },
    habitats: ['temperate-forest', 'tropical-forest', 'mountain'],
    regions: ['east-asia', 'south-asia', 'southeast-asia'],
    distribution: {
      en: 'Japan, Korea, China and Taiwan, south through Indochina and west along the Himalaya to northeastern India and Nepal.',
      bn: 'জাপান, কোরিয়া, চীন ও তাইওয়ান থেকে দক্ষিণে ইন্দোচীন এবং পশ্চিমে হিমালয় বরাবর উত্তর-পূর্ব ভারত ও নেপাল পর্যন্ত।',
    },
    climate: { en: 'Temperate to subtropical', bn: 'নাতিশীতোষ্ণ থেকে উপক্রান্তীয়' },
    diet: {
      en: 'Adults drink tree sap and fruit juices; workers hunt insects such as bees, beetles and mantises to feed the larvae',
      bn: 'পূর্ণবয়স্করা গাছের রস ও ফলের রস খায়; কর্মীরা লার্ভার খাবারের জন্য মৌমাছি, গুবরে পোকা ও ম্যান্টিসের মতো পোকা শিকার করে',
    },
    ecologicalRole: {
      en: 'A top insect predator that helps control populations of other insects, including forest pests.',
      bn: 'পোকামাকড়ের জগতে শীর্ষ শিকারি; বনের ক্ষতিকর পোকাসহ অন্যান্য পোকার সংখ্যা নিয়ন্ত্রণে রাখে।',
    },
    behavior: {
      en: 'Social, with a single queen; in late summer workers mark a bee hive with scent and attack it together in a “slaughter phase”.',
      bn: 'সামাজিক পতঙ্গ, প্রতিটি বাসায় একটি রানি থাকে; গ্রীষ্মের শেষে কর্মীরা গন্ধ দিয়ে মৌমাছির চাক চিহ্নিত করে দল বেঁধে হামলা চালায়।',
    },
    range: {
      native: [
        [35.7, 139.7],
        [36.5, 127.8],
        [30.6, 104.1],
        [23.7, 121.0],
        [21.0, 105.8],
        [27.3, 88.6],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Habitat loss in forested hills', 'Nest destruction near settlements'],
        bn: ['পাহাড়ি বনাঞ্চল কমে যাওয়া', 'লোকালয়ের কাছে বাসা ধ্বংস'],
      },
      initiatives: {
        en: ['Monitoring programmes to protect apiaries', 'Early-detection trapping where the hornet is not native'],
        bn: ['মৌখামার রক্ষায় পর্যবেক্ষণ কার্যক্রম', 'যেসব দেশে এরা স্থানীয় নয় সেখানে ফাঁদ পেতে আগাম শনাক্তকরণ'],
      },
    },
    facts: {
      en: [
        'Nests found in Washington State, USA, from 2019 were destroyed, and the US declared it eradicated in 2024.',
        'Japanese honey bees defend themselves by “cooking” a hornet inside a ball of vibrating bees.',
        'Its larvae are eaten as a delicacy in parts of Japan.',
      ],
      bn: [
        '২০১৯ সাল থেকে যুক্তরাষ্ট্রের ওয়াশিংটন অঙ্গরাজ্যে পাওয়া বাসাগুলো ধ্বংস করা হয় এবং ২০২৪ সালে দেশটি একে নির্মূল ঘোষণা করে।',
        'জাপানি মৌমাছিরা ভীমরুলকে ঘিরে কাঁপতে কাঁপতে গরম করে "সেদ্ধ" করে মেরে ফেলে।',
        'জাপানের কিছু অঞ্চলে এর লার্ভা সুস্বাদু খাবার হিসেবে খাওয়া হয়।',
      ],
    },
    related: ['asian-honey-bee', 'giant-honey-bee', 'western-honey-bee'],
  },
  {
    id: 'buff-tailed-bumblebee',
    commonName: { en: 'Buff-tailed Bumblebee', bn: 'বাফ-টেইলড ভ্রমর মৌমাছি' },
    scientificName: 'Bombus terrestris',
    altNames: {
      en: ['Large Earth Bumblebee', 'Bumblebee'],
      bn: ['ভ্রমর', 'বাম্বলবি'],
    },
    category: 'insects',
    wikiTitle: 'Bombus terrestris',
    description: {
      en: 'The buff-tailed bumblebee is one of Europe’s most common bumblebees, a fat, furry bee with yellow bands and a buff or white tail. It is reared commercially in large numbers to pollinate greenhouse tomatoes and other crops. Outside its native range it has become invasive, notably in Chile and Argentina where it competes with native bumblebees.',
      bn: 'বাফ-টেইলড ভ্রমর মৌমাছি ইউরোপের সবচেয়ে পরিচিত ভ্রমরগুলোর একটি — মোটাসোটা, লোমশ দেহে হলুদ ডোরা আর লেজের দিকটা হালকা বাদামি বা সাদা। গ্রিনহাউসে টমেটোসহ নানা ফসলের পরাগায়নের জন্য এদের বাণিজ্যিকভাবে ব্যাপক হারে উৎপাদন করা হয়। নিজের আদি এলাকার বাইরে, বিশেষ করে চিলি ও আর্জেন্টিনায়, এরা আগ্রাসী হয়ে স্থানীয় ভ্রমরদের সঙ্গে প্রতিযোগিতা করছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Hymenoptera',
      family: 'Apidae',
      genus: 'Bombus',
      species: 'B. terrestris',
    },
    physical: {
      size: { en: 'Queens 20–27 mm; workers 11–17 mm', bn: 'রানি ২০–২৭ মিমি; কর্মী ১১–১৭ মিমি' },
      weight: { en: 'Queens under 1 g; workers much lighter', bn: 'রানি ১ গ্রামের কম; কর্মী আরও অনেক হালকা' },
      lifespan: {
        en: 'Workers a few weeks; queens about one year, including winter hibernation',
        bn: 'কর্মী কয়েক সপ্তাহ; শীতনিদ্রাসহ রানি প্রায় এক বছর',
      },
      features: {
        en: [
          'Dense black fur with two dark-yellow bands',
          'Queens have a buff-coloured tail; workers usually a whitish tail',
          'Can “buzz-pollinate” by vibrating flowers to shake out pollen',
        ],
        bn: [
          'ঘন কালো লোমে দুটি গাঢ় হলুদ ডোরা',
          'রানির লেজ হালকা বাদামি; কর্মীদের লেজ সাধারণত সাদাটে',
          'ফুল কাঁপিয়ে পরাগ ঝরাতে পারে, যাকে "বাজ পরাগায়ন" বলে',
        ],
      },
    },
    habitat: {
      en: 'Meadows, gardens, farmland, woodland edges and towns',
      bn: 'তৃণভূমি, বাগান, কৃষিজমি, বনের প্রান্ত ও শহর',
    },
    habitats: ['grassland', 'temperate-forest', 'urban-farmland'],
    regions: ['europe', 'africa', 'south-america', 'oceania', 'east-asia'],
    distribution: {
      en: 'Native to Europe, North Africa and western Asia; introduced to New Zealand, Tasmania, Chile, Argentina and Japan.',
      bn: 'ইউরোপ, উত্তর আফ্রিকা ও পশ্চিম এশিয়ায় স্থানীয়; নিউজিল্যান্ড, তাসমানিয়া, চিলি, আর্জেন্টিনা ও জাপানে মানুষের মাধ্যমে ছড়িয়েছে।',
    },
    climate: { en: 'Temperate and Mediterranean', bn: 'নাতিশীতোষ্ণ ও ভূমধ্যসাগরীয়' },
    diet: {
      en: 'Nectar and pollen from a very wide range of flowers',
      bn: 'বহু ধরনের ফুলের মধু-রস ও পরাগ',
    },
    ecologicalRole: {
      en: 'An important pollinator of wildflowers and crops, able to fly in cool weather when other bees cannot.',
      bn: 'বুনো ফুল ও ফসলের গুরুত্বপূর্ণ পরাগায়নকারী; ঠান্ডা আবহাওয়াতেও উড়তে পারে, যখন অন্য মৌমাছিরা পারে না।',
    },
    behavior: {
      en: 'Mated queens hibernate, then found a new underground colony of a few hundred workers each spring.',
      bn: 'মিলিত রানি শীতনিদ্রায় থাকে, তারপর বসন্তে মাটির নিচে নতুন বাসা গড়ে কয়েকশো কর্মীর একটি দল তৈরি করে।',
    },
    range: {
      native: [
        [51.5, -0.1],
        [48.8, 2.3],
        [52.5, 13.4],
        [40.4, -3.7],
        [41.0, 29.0],
        [34.0, -5.0],
      ],
      introduced: [
        [-43.5, 172.6],
        [-42.0, 146.8],
        [-38.7, -72.6],
        [-41.1, -71.3],
        [43.0, 142.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Pesticides, especially neonicotinoids', 'Loss of flower-rich habitats', 'Spread of diseases from commercial colonies'],
        bn: ['কীটনাশক, বিশেষ করে নিওনিকোটিনয়েড', 'ফুলে ভরা আবাসস্থল কমে যাওয়া', 'বাণিজ্যিক বাসা থেকে রোগ ছড়ানো'],
      },
      initiatives: {
        en: ['Wildflower margins and pollinator strategies in Europe', 'Import restrictions where it is invasive'],
        bn: ['ইউরোপে খেতের ধারে বুনো ফুল লাগানো ও পরাগায়নকারী সুরক্ষা কৌশল', 'যেখানে আগ্রাসী সেখানে আমদানিতে নিষেধাজ্ঞা'],
      },
    },
    facts: {
      en: [
        'Hundreds of thousands of colonies are produced commercially each year for greenhouse pollination.',
        'Bumblebees warm up by shivering their flight muscles before take-off.',
      ],
      bn: [
        'গ্রিনহাউসে পরাগায়নের জন্য প্রতি বছর লাখ লাখ বাসা বাণিজ্যিকভাবে তৈরি করা হয়।',
        'ওড়ার আগে ভ্রমর ডানার পেশি কাঁপিয়ে শরীর গরম করে নেয়।',
      ],
    },
    related: ['western-honey-bee', 'asian-honey-bee', 'sunflower'],
  },
  {
    id: 'weaver-ant',
    commonName: { en: 'Asian Weaver Ant', bn: 'লাল পিঁপড়া' },
    scientificName: 'Oecophylla smaragdina',
    altNames: {
      en: ['Weaver Ant', 'Green Tree Ant', 'Red Ant'],
      bn: ['বাউনি পিঁপড়া', 'গাছ পিঁপড়া', 'লাল পিঁপড়ে'],
    },
    category: 'insects',
    wikiTitle: 'Oecophylla smaragdina',
    description: {
      en: 'The Asian weaver ant is the familiar fiery red ant of mango and other fruit trees in Bangladesh, famous for its painful bite. Workers build leaf nests in tree canopies by pulling leaves together and gluing them with silk produced by their larvae. Farmers in Asia have used these ants for centuries to protect citrus and mango orchards from pests.',
      bn: 'লাল পিঁপড়া বাংলাদেশের আম, লিচুসহ নানা ফলগাছে দেখা যাওয়া পরিচিত পিঁপড়া, যার কামড় খুব জ্বালাময়। কর্মী পিঁপড়ারা গাছের পাতা টেনে একত্র করে এবং নিজেদের লার্ভার তৈরি রেশম দিয়ে জুড়ে ডালে ডালে পাতার বাসা বানায়। এশিয়ার কৃষকরা বহু শতাব্দী ধরে লেবু ও আমবাগানকে ক্ষতিকর পোকা থেকে রক্ষা করতে এই পিঁপড়া কাজে লাগিয়ে আসছেন।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Hymenoptera',
      family: 'Formicidae',
      genus: 'Oecophylla',
      species: 'O. smaragdina',
    },
    physical: {
      size: { en: 'Major workers 8–10 mm; queens about 20 mm', bn: 'বড় কর্মী ৮–১০ মিমি; রানি প্রায় ২০ মিমি' },
      weight: { en: 'A few milligrams per worker', bn: 'প্রতিটি কর্মীর ওজন কয়েক মিলিগ্রাম' },
      lifespan: {
        en: 'Workers live months; a colony can last several years',
        bn: 'কর্মী কয়েক মাস বাঁচে; একটি কলোনি কয়েক বছর টিকে থাকতে পারে',
      },
      features: {
        en: [
          'Orange-red workers with long legs; queens are greenish',
          'Leaf nests stitched together with larval silk',
          'Bites and sprays formic acid into the wound',
        ],
        bn: [
          'লম্বা পা-ওয়ালা কমলা-লাল কর্মী; রানি সবুজাভ',
          'লার্ভার রেশম দিয়ে সেলাই করা পাতার বাসা',
          'কামড়ে ক্ষতস্থানে ফরমিক অ্যাসিড ছিটিয়ে দেয়',
        ],
      },
    },
    habitat: {
      en: 'Tree canopies in forests, mangroves, orchards and village groves',
      bn: 'বন, ম্যানগ্রোভ, ফলের বাগান ও গ্রামের গাছপালার ডালপালা',
    },
    habitats: ['tropical-forest', 'mangrove', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'oceania'],
    distribution: {
      en: 'India, Sri Lanka and Bangladesh through Southeast Asia to New Guinea and northern Australia.',
      bn: 'ভারত, শ্রীলঙ্কা ও বাংলাদেশ থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে নিউগিনি ও উত্তর অস্ট্রেলিয়া পর্যন্ত।',
    },
    climate: { en: 'Hot, humid tropical climates', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Predator of insects and other small animals; also collects honeydew from sap-sucking bugs',
      bn: 'পোকামাকড় ও ছোট প্রাণী শিকার করে; রস-চোষা পোকা থেকে মিষ্টি নিঃসরণ (হানিডিউ) সংগ্রহ করে',
    },
    ecologicalRole: {
      en: 'A dominant canopy predator and one of the oldest known agents of biological pest control.',
      bn: 'গাছের ডালে আধিপত্য বিস্তারকারী শিকারি এবং জৈবিক উপায়ে পোকা দমনের সবচেয়ে পুরোনো জানা উদাহরণগুলোর একটি।',
    },
    behavior: {
      en: 'Huge colonies spread over many trees; workers form living chains to bridge gaps and fiercely defend their territory.',
      bn: 'বিশাল কলোনি অনেকগুলো গাছজুড়ে ছড়িয়ে থাকে; কর্মীরা নিজেদের দেহ দিয়ে শিকল বানিয়ে ফাঁক পার হয় এবং এলাকা হিংস্রভাবে রক্ষা করে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [10.0, 76.3],
        [7.9, 80.7],
        [13.7, 100.5],
        [-6.2, 106.8],
        [-12.5, 130.8],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Heavy insecticide use in orchards', 'Loss of large trees'],
        bn: ['বাগানে অতিরিক্ত কীটনাশক ব্যবহার', 'বড় গাছ কেটে ফেলা'],
      },
      initiatives: {
        en: ['Weaver-ant biocontrol programmes in mango and cashew orchards', 'Integrated pest management training'],
        bn: ['আম ও কাজুবাদামের বাগানে লাল পিঁপড়া দিয়ে জৈব দমন কর্মসূচি', 'সমন্বিত বালাই ব্যবস্থাপনা প্রশিক্ষণ'],
      },
    },
    facts: {
      en: [
        'A Chinese text from about 304 CE describes farmers selling weaver-ant nests to protect citrus trees.',
        'In Bangladesh, weaver-ant eggs and pupae are used as fish bait.',
        'The larvae and eggs are eaten in Thailand and other parts of Southeast Asia.',
      ],
      bn: [
        'প্রায় ৩০৪ খ্রিস্টাব্দের এক চীনা গ্রন্থে লেবুগাছ রক্ষায় কৃষকদের লাল পিঁপড়ার বাসা বিক্রির কথা আছে।',
        'বাংলাদেশে লাল পিঁপড়ার ডিম মাছ ধরার টোপ হিসেবে ব্যবহার করা হয়।',
        'থাইল্যান্ডসহ দক্ষিণ-পূর্ব এশিয়ার নানা জায়গায় এর ডিম ও লার্ভা খাওয়া হয়।',
      ],
    },
    related: ['leafcutter-ant', 'zombie-ant-fungus', 'neem'],
  },
  {
    id: 'leafcutter-ant',
    commonName: { en: 'Leafcutter Ant', bn: 'পাতাকাটা পিঁপড়া' },
    scientificName: 'Atta cephalotes',
    altNames: {
      en: ['Leaf-cutting Ant', 'Leafcutter'],
      bn: ['পাতা-কাটা পিঁপড়ে', 'ছত্রাকচাষি পিঁপড়া'],
    },
    category: 'insects',
    wikiTitle: 'Atta cephalotes',
    description: {
      en: 'Atta cephalotes is a leafcutter ant of Central and South American rainforests. Workers cut pieces of leaves and carry them home in long columns, not to eat but to feed a fungus garden that the colony farms underground. Its colonies can contain millions of ants and are among the most complex animal societies on Earth.',
      bn: 'Atta cephalotes মধ্য ও দক্ষিণ আমেরিকার রেইনফরেস্টের একটি পাতাকাটা পিঁপড়া। কর্মী পিঁপড়ারা পাতা কেটে টুকরো করে লম্বা সারিতে বাসায় নিয়ে যায় — নিজেরা খাওয়ার জন্য নয়, মাটির নিচে চাষ করা ছত্রাকের বাগানকে খাওয়ানোর জন্য। এদের একটি কলোনিতে লাখ লাখ পিঁপড়া থাকতে পারে, যা পৃথিবীর সবচেয়ে জটিল প্রাণী-সমাজগুলোর একটি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Hymenoptera',
      family: 'Formicidae',
      genus: 'Atta',
      species: 'A. cephalotes',
    },
    physical: {
      size: {
        en: 'Workers range from about 2 mm (gardeners) to over 1 cm (soldiers); queens about 2.5 cm',
        bn: 'কর্মী প্রায় ২ মিমি (বাগানকর্মী) থেকে ১ সেমির বেশি (সৈনিক); রানি প্রায় ২.৫ সেমি',
      },
      weight: { en: 'Workers weigh a few milligrams', bn: 'কর্মীর ওজন কয়েক মিলিগ্রাম' },
      lifespan: {
        en: 'Workers live months; queens can live 10–15 years or more',
        bn: 'কর্মী কয়েক মাস বাঁচে; রানি ১০–১৫ বছর বা তারও বেশি বাঁচতে পারে',
      },
      features: {
        en: [
          'Reddish-brown ants with spines on the thorax',
          'Several worker castes of very different sizes',
          'Powerful jaws that vibrate to slice leaves',
        ],
        bn: [
          'বক্ষে কাঁটাযুক্ত লালচে-বাদামি পিঁপড়া',
          'আকারে একেবারে আলাদা কয়েক ধরনের কর্মী শ্রেণি',
          'শক্তিশালী চোয়াল কাঁপিয়ে পাতা কাটে',
        ],
      },
    },
    habitat: {
      en: 'Tropical rainforests, forest edges and plantations',
      bn: 'ক্রান্তীয় রেইনফরেস্ট, বনের প্রান্ত ও বাগান',
    },
    habitats: ['tropical-forest', 'urban-farmland'],
    regions: ['north-america', 'south-america'],
    distribution: {
      en: 'Southern Mexico through Central America to the Amazon basin and northern South America; also Trinidad.',
      bn: 'দক্ষিণ মেক্সিকো থেকে মধ্য আমেরিকা হয়ে আমাজন অববাহিকা ও উত্তর দক্ষিণ আমেরিকা; ত্রিনিদাদেও আছে।',
    },
    climate: { en: 'Hot, wet tropical', bn: 'উষ্ণ ও বৃষ্টিবহুল ক্রান্তীয়' },
    diet: {
      en: 'Fungivore — the ants eat a cultivated fungus (Leucoagaricus gongylophorus) grown on cut leaves',
      bn: 'ছত্রাকভোজী — কাটা পাতার ওপর চাষ করা একটি ছত্রাক (Leucoagaricus gongylophorus) খায়',
    },
    ecologicalRole: {
      en: 'A major herbivore and soil engineer that recycles nutrients and aerates rainforest soils.',
      bn: 'প্রধান তৃণভোজী ও মাটি গঠনকারী; পুষ্টি পুনর্ব্যবহার করে এবং রেইনফরেস্টের মাটিতে বাতাস চলাচল বাড়ায়।',
    },
    behavior: {
      en: 'Workers divide labour by size — large ones cut and defend, tiny ones tend the fungus and ride on leaves to guard against parasitic flies.',
      bn: 'আকার অনুযায়ী কাজ ভাগ হয় — বড়রা পাতা কাটে ও পাহারা দেয়, আর ছোটরা ছত্রাকের যত্ন নেয় এবং পরজীবী মাছি ঠেকাতে পাতার ওপর চড়ে বসে থাকে।',
    },
    range: {
      native: [
        [17.5, -93.0],
        [15.5, -88.0],
        [10.0, -84.0],
        [9.1, -79.8],
        [4.6, -74.1],
        [-3.1, -60.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Deforestation', 'Poisoning as a crop pest'],
        bn: ['বন উজাড়', 'ফসলের ক্ষতিকর পোকা হিসেবে বিষপ্রয়োগ'],
      },
      initiatives: {
        en: ['Protected rainforest reserves', 'Research on non-toxic control in plantations'],
        bn: ['সংরক্ষিত রেইনফরেস্ট', 'বাগানে বিষমুক্ত দমন পদ্ধতি নিয়ে গবেষণা'],
      },
    },
    facts: {
      en: [
        'Leafcutter ants were farming fungus millions of years before humans invented agriculture.',
        'The colony uses antibiotic-producing bacteria on its body to protect the fungus garden.',
        'It is a serious pest of citrus, cocoa and other crops in the Americas.',
      ],
      bn: [
        'মানুষ কৃষিকাজ শুরু করার লাখ লাখ বছর আগে থেকেই পাতাকাটা পিঁপড়ারা ছত্রাক চাষ করে আসছে।',
        'ছত্রাকের বাগান রক্ষায় এরা দেহে অ্যান্টিবায়োটিক তৈরিকারী ব্যাকটেরিয়া বহন করে।',
        'আমেরিকা মহাদেশে লেবুজাতীয় ফল, কোকোসহ নানা ফসলের গুরুতর শত্রু।',
      ],
    },
    related: ['weaver-ant', 'macrotermes-termite', 'zombie-ant-fungus'],
  },
  {
    id: 'macrotermes-termite',
    commonName: { en: 'Mound-building Termite', bn: 'ঢিবি-গড়া উইপোকা' },
    scientificName: 'Macrotermes bellicosus',
    altNames: {
      en: ['Macrotermes', 'African Mound Termite', 'Termite'],
      bn: ['উইপোকা', 'আফ্রিকার উইঢিবি উইপোকা', 'উই'],
    },
    category: 'insects',
    wikiTitle: 'Macrotermes bellicosus',
    description: {
      en: 'Macrotermes bellicosus is an African termite that builds some of the tallest animal-made structures in the world — towering earth mounds several metres high. Inside, the colony farms a fungus that helps break down plant material, while the mound’s chimneys and tunnels regulate temperature and air flow. A single enormous queen lays thousands of eggs every day.',
      bn: 'Macrotermes bellicosus আফ্রিকার একটি উইপোকা, যারা কয়েক মিটার উঁচু মাটির ঢিবি গড়ে — প্রাণীর তৈরি পৃথিবীর অন্যতম উঁচু স্থাপনা। ঢিবির ভেতরে এরা একটি ছত্রাক চাষ করে, যা উদ্ভিদের অংশ ভাঙতে সাহায্য করে; আর ঢিবির চিমনি ও সুড়ঙ্গ ভেতরের তাপমাত্রা ও বাতাস চলাচল নিয়ন্ত্রণ করে। একটি বিশাল রানি প্রতিদিন হাজার হাজার ডিম পাড়ে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Blattodea',
      family: 'Termitidae',
      genus: 'Macrotermes',
      species: 'M. bellicosus',
    },
    physical: {
      size: {
        en: 'Workers and soldiers about 5–15 mm; the egg-swollen queen can exceed 10 cm',
        bn: 'কর্মী ও সৈনিক প্রায় ৫–১৫ মিমি; ডিমে ফুলে ওঠা রানি ১০ সেমিরও বেশি লম্বা হতে পারে',
      },
      weight: { en: 'Workers weigh a few milligrams; the queen several grams', bn: 'কর্মীর ওজন কয়েক মিলিগ্রাম; রানির কয়েক গ্রাম' },
      lifespan: {
        en: 'Workers live months to a couple of years; queens may live for a decade or more',
        bn: 'কর্মী কয়েক মাস থেকে দুই বছরের মতো; রানি এক দশক বা তারও বেশি বাঁচতে পারে',
      },
      features: {
        en: [
          'Pale, soft-bodied, mostly blind workers',
          'Soldiers with large dark heads and sharp mandibles',
          'Mounds can reach several metres tall',
        ],
        bn: [
          'ফ্যাকাশে, নরম দেহের, প্রায় অন্ধ কর্মী',
          'বড় গাঢ় মাথা ও ধারালো চোয়ালওয়ালা সৈনিক',
          'ঢিবি কয়েক মিটার পর্যন্ত উঁচু হতে পারে',
        ],
      },
    },
    habitat: {
      en: 'Savannas, dry woodlands and grasslands',
      bn: 'সাভানা, শুষ্ক বনভূমি ও তৃণভূমি',
    },
    habitats: ['grassland', 'tropical-forest'],
    regions: ['africa'],
    distribution: {
      en: 'Widespread across West and Central Africa and into East Africa, from Senegal to Nigeria, Cameroon and Uganda.',
      bn: 'পশ্চিম ও মধ্য আফ্রিকাজুড়ে, পূর্ব আফ্রিকা পর্যন্ত — সেনেগাল থেকে নাইজেরিয়া, ক্যামেরুন ও উগান্ডা।',
    },
    climate: { en: 'Tropical savanna with wet and dry seasons', bn: 'বর্ষা ও শুষ্ক ঋতুসহ ক্রান্তীয় সাভানা জলবায়ু' },
    diet: {
      en: 'Dead wood, grass and leaf litter, digested with the help of a cultivated Termitomyces fungus',
      bn: 'মরা কাঠ, ঘাস ও ঝরা পাতা, যা চাষ করা Termitomyces ছত্রাকের সাহায্যে হজম করে',
    },
    ecologicalRole: {
      en: 'A key decomposer and ecosystem engineer whose mounds create fertile patches that support many plants and animals.',
      bn: 'প্রধান বিয়োজক ও বাস্তুতন্ত্র গঠনকারী; এদের ঢিবি উর্বর মাটির ছোট ছোট এলাকা তৈরি করে, যেখানে বহু উদ্ভিদ ও প্রাণী আশ্রয় পায়।',
    },
    behavior: {
      en: 'Workers forage at night through covered tunnels; after rains, winged males and females swarm out to start new colonies.',
      bn: 'কর্মীরা রাতে ঢাকা সুড়ঙ্গপথে খাবার সংগ্রহ করে; বৃষ্টির পর ডানাওয়ালা পুরুষ ও স্ত্রী উইপোকা দল বেঁধে উড়ে নতুন কলোনি গড়তে বের হয়।',
    },
    range: {
      native: [
        [14.0, -14.0],
        [12.4, -1.5],
        [7.5, -5.5],
        [9.0, 8.0],
        [6.5, 12.5],
        [2.5, 32.5],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Conversion of savanna to farmland', 'Destruction of mounds'],
        bn: ['সাভানাকে কৃষিজমিতে রূপান্তর', 'ঢিবি ভেঙে ফেলা'],
      },
      initiatives: {
        en: ['Protected savanna parks in West Africa', 'Research into mound ventilation for green building design'],
        bn: ['পশ্চিম আফ্রিকার সংরক্ষিত সাভানা উদ্যান', 'পরিবেশবান্ধব ভবন নকশার জন্য ঢিবির বায়ু চলাচল নিয়ে গবেষণা'],
      },
    },
    facts: {
      en: [
        'A Macrotermes queen can lay many thousands of eggs a day.',
        'Termitomyces mushrooms that sprout from termite mounds are prized as food in Africa.',
        'Termites are close relatives of cockroaches.',
      ],
      bn: [
        'Macrotermes রানি দিনে হাজার হাজার ডিম পাড়তে পারে।',
        'উইঢিবি থেকে গজানো Termitomyces মাশরুম আফ্রিকায় মূল্যবান খাবার।',
        'উইপোকা আসলে তেলাপোকার নিকটাত্মীয়।',
      ],
    },
    related: ['leafcutter-ant', 'african-baobab'],
  },
  {
    id: 'yellow-fever-mosquito',
    commonName: { en: 'Yellow Fever Mosquito', bn: 'এডিস মশা' },
    scientificName: 'Aedes aegypti',
    altNames: {
      en: ['Aedes Mosquito', 'Dengue Mosquito'],
      bn: ['ডেঙ্গু মশা', 'এডিস ইজিপ্টাই'],
    },
    category: 'insects',
    wikiTitle: 'Aedes aegypti',
    description: {
      en: 'Aedes aegypti is a small black-and-white mosquito that spreads dengue, chikungunya, Zika and yellow fever viruses. It lives closely alongside people, breeding in clean water collected in containers around homes. It is the main vector of dengue in Bangladesh, where large outbreaks — including a record one in 2023 — have caused many deaths.',
      bn: 'এডিস মশা (Aedes aegypti) সাদা-কালো ডোরাকাটা ছোট একটি মশা, যা ডেঙ্গু, চিকুনগুনিয়া, জিকা ও পীতজ্বরের ভাইরাস ছড়ায়। এরা মানুষের খুব কাছাকাছি থাকে এবং বাড়ির আশপাশে পাত্রে জমে থাকা পরিষ্কার পানিতে ডিম পাড়ে। বাংলাদেশে ডেঙ্গুর প্রধান বাহক এই মশা; ২০২৩ সালের রেকর্ড প্রাদুর্ভাবসহ বিভিন্ন সময়ের বড় প্রাদুর্ভাবে বহু মানুষের মৃত্যু হয়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Diptera',
      family: 'Culicidae',
      genus: 'Aedes',
      species: 'A. aegypti',
    },
    physical: {
      size: { en: 'About 4–7 mm long', bn: 'প্রায় ৪–৭ মিমি লম্বা' },
      weight: { en: 'About 2–3 mg', bn: 'প্রায় ২–৩ মিলিগ্রাম' },
      lifespan: {
        en: 'Adults usually live 2–4 weeks; eggs can survive dry for months',
        bn: 'পূর্ণবয়স্ক মশা সাধারণত ২–৪ সপ্তাহ বাঁচে; ডিম শুকনো অবস্থায় কয়েক মাস টিকে থাকতে পারে',
      },
      features: {
        en: [
          'Black body with white bands on the legs',
          'Lyre-shaped white markings on the thorax',
          'Only females bite, needing blood to develop eggs',
        ],
        bn: [
          'কালো দেহ, পায়ে সাদা ডোরা',
          'বক্ষের ওপর বীণার মতো সাদা দাগ',
          'শুধু স্ত্রী মশা কামড়ায়, কারণ ডিম তৈরির জন্য রক্ত লাগে',
        ],
      },
    },
    habitat: {
      en: 'Towns and cities, in and around houses with water-holding containers',
      bn: 'শহর ও লোকালয়, বিশেষ করে পানি জমে থাকা পাত্রসহ বাড়িঘরের ভেতরে ও আশপাশে',
    },
    habitats: ['urban-farmland'],
    regions: ['africa', 'south-asia', 'southeast-asia', 'south-america', 'north-america', 'oceania'],
    distribution: {
      en: 'Originally from Africa; now found throughout the tropics and subtropics worldwide, including all of Bangladesh.',
      bn: 'আদি নিবাস আফ্রিকা; এখন সারা বিশ্বের ক্রান্তীয় ও উপক্রান্তীয় অঞ্চলে ছড়িয়ে আছে, বাংলাদেশের সব জায়গাতেও পাওয়া যায়।',
    },
    climate: { en: 'Warm tropical and subtropical; thrives in the monsoon', bn: 'উষ্ণ ক্রান্তীয় ও উপক্রান্তীয়; বর্ষাকালে সংখ্যা বেড়ে যায়' },
    diet: {
      en: 'Both sexes drink plant nectar; females also take human blood. Larvae filter microorganisms from water',
      bn: 'স্ত্রী-পুরুষ দুই-ই ফুলের রস খায়; স্ত্রী মশা মানুষের রক্তও খায়। লার্ভা পানির অণুজীব ছেঁকে খায়',
    },
    ecologicalRole: {
      en: 'Food for fish, dragonflies and birds, but above all one of the most dangerous disease vectors for humans.',
      bn: 'মাছ, ফড়িং ও পাখির খাদ্য, তবে সবচেয়ে বড় পরিচয় — মানুষের জন্য অন্যতম বিপজ্জনক রোগবাহক।',
    },
    behavior: {
      en: 'Bites mainly during the day, especially in the early morning and late afternoon, and often stays indoors; it usually flies only a few hundred metres.',
      bn: 'মূলত দিনের বেলায়, বিশেষ করে সকালে ও বিকেলে কামড়ায় এবং প্রায়ই ঘরের ভেতরে থাকে; সাধারণত কয়েকশো মিটারের বেশি ওড়ে না।',
    },
    range: {
      native: [
        [6.5, 3.4],
        [-6.8, 39.3],
        [0.3, 32.6],
        [14.7, -17.4],
      ],
      introduced: [
        [23.8, 90.4],
        [22.3, 91.8],
        [13.7, 100.5],
        [-22.9, -43.2],
        [25.8, -80.2],
        [-16.9, 145.8],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'increasing',
      threats: {
        en: ['Insecticide spraying', 'Removal of breeding sites by communities'],
        bn: ['কীটনাশক ছিটানো', 'জনসাধারণের মাধ্যমে প্রজননস্থল ধ্বংস'],
      },
      initiatives: {
        en: ['City-corporation anti-larval campaigns in Dhaka and other cities', 'Wolbachia-infected mosquito releases to block dengue in several countries'],
        bn: ['ঢাকাসহ বিভিন্ন শহরে সিটি করপোরেশনের লার্ভা নিধন অভিযান', 'কয়েকটি দেশে ডেঙ্গু ঠেকাতে ওলবাকিয়া-যুক্ত মশা ছাড়া'],
      },
    },
    facts: {
      en: [
        'Bangladesh recorded over 1,700 dengue deaths in 2023, its worst year on record.',
        'Eggs laid on the inside walls of containers hatch when the water rises — empty flower-pot trays, tyres and buckets every few days.',
        'Fever with severe body pain, rash or bleeding needs prompt medical care; avoid self-medicating with painkillers like aspirin.',
      ],
      bn: [
        '২০২৩ সালে বাংলাদেশে ডেঙ্গুতে ১,৭০০-র বেশি মানুষের মৃত্যু হয়, যা এ যাবৎকালের সবচেয়ে খারাপ বছর।',
        'পাত্রের ভেতরের দেয়ালে পাড়া ডিম পানি বাড়লেই ফোটে — তাই ফুলের টবের ট্রে, টায়ার ও বালতির পানি কয়েক দিন পরপর ফেলে দিন।',
        'জ্বরের সঙ্গে তীব্র গা-ব্যথা, র‍্যাশ বা রক্তক্ষরণ হলে দ্রুত চিকিৎসকের পরামর্শ নিন; নিজে থেকে অ্যাসপিরিনের মতো ব্যথানাশক খাবেন না।',
      ],
    },
    related: ['african-malaria-mosquito'],
  },
  {
    id: 'african-malaria-mosquito',
    commonName: { en: 'African Malaria Mosquito', bn: 'আফ্রিকার ম্যালেরিয়া মশা' },
    scientificName: 'Anopheles gambiae',
    altNames: {
      en: ['Anopheles Mosquito', 'Malaria Mosquito'],
      bn: ['অ্যানোফিলিস মশা', 'ম্যালেরিয়ার মশা'],
    },
    category: 'insects',
    wikiTitle: 'Anopheles gambiae',
    description: {
      en: 'Anopheles gambiae is the most important carrier of human malaria in Africa, transmitting the deadly parasite Plasmodium falciparum. Like all malaria mosquitoes, only the female bites, mostly at night and often indoors. Its genome was among the first insect genomes sequenced, making it a model for research on malaria control.',
      bn: 'Anopheles gambiae আফ্রিকায় মানুষের ম্যালেরিয়ার সবচেয়ে গুরুত্বপূর্ণ বাহক, যা প্রাণঘাতী পরজীবী Plasmodium falciparum ছড়ায়। অন্যান্য অ্যানোফিলিস মশার মতো শুধু স্ত্রী মশাই কামড়ায়, মূলত রাতে এবং প্রায়ই ঘরের ভেতরে। সবার আগে জিনোম উন্মোচিত পতঙ্গগুলোর একটি হওয়ায় ম্যালেরিয়া নিয়ন্ত্রণ গবেষণায় এটি একটি আদর্শ প্রজাতি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Diptera',
      family: 'Culicidae',
      genus: 'Anopheles',
      species: 'A. gambiae',
    },
    physical: {
      size: { en: 'About 5–7 mm long', bn: 'প্রায় ৫–৭ মিমি লম্বা' },
      weight: { en: 'About 2 mg', bn: 'প্রায় ২ মিলিগ্রাম' },
      lifespan: {
        en: 'Adults usually live 1–3 weeks',
        bn: 'পূর্ণবয়স্ক মশা সাধারণত ১–৩ সপ্তাহ বাঁচে',
      },
      features: {
        en: [
          'Rests with its body tilted at an angle to the surface, head down and tail up',
          'Brownish body with dark-spotted wings',
          'Long palps as long as the proboscis in females',
        ],
        bn: [
          'বসার সময় মাথা নিচু আর পেছনটা উঁচু করে কাত হয়ে বসে',
          'বাদামি দেহ, ডানায় গাঢ় ছোপ',
          'স্ত্রী মশার শুঁড়ের পাশের পাল্প শুঁড়ের সমান লম্বা',
        ],
      },
    },
    habitat: {
      en: 'Villages and farmland near small, sunlit pools such as puddles and hoof prints',
      bn: 'রোদ পড়া ছোট জলাশয়, যেমন ডোবা বা গবাদিপশুর খুরের গর্তের পানির কাছাকাছি গ্রাম ও কৃষিজমি',
    },
    habitats: ['urban-farmland', 'grassland', 'wetland'],
    regions: ['africa'],
    distribution: {
      en: 'Throughout sub-Saharan Africa, especially West, Central and East Africa.',
      bn: 'সাহারার দক্ষিণের আফ্রিকাজুড়ে, বিশেষ করে পশ্চিম, মধ্য ও পূর্ব আফ্রিকায়।',
    },
    climate: { en: 'Hot tropical, most abundant in the rainy season', bn: 'উষ্ণ ক্রান্তীয়; বর্ষাকালে সবচেয়ে বেশি' },
    diet: {
      en: 'Both sexes feed on nectar; females strongly prefer human blood. Larvae feed at the water surface',
      bn: 'স্ত্রী-পুরুষ দুই-ই ফুলের রস খায়; স্ত্রী মশা মানুষের রক্ত বেশি পছন্দ করে। লার্ভা পানির উপরিতলে খাবার খায়',
    },
    ecologicalRole: {
      en: 'Food for many aquatic and aerial predators, and a major vector of malaria and lymphatic filariasis.',
      bn: 'জলজ ও উড়ন্ত বহু শিকারির খাদ্য; ম্যালেরিয়া ও গোদরোগের (লিম্ফ্যাটিক ফাইলেরিয়াসিস) প্রধান বাহক।',
    },
    behavior: {
      en: 'Bites late at night when people are asleep; larvae lie flat just beneath the water surface.',
      bn: 'গভীর রাতে মানুষ ঘুমিয়ে থাকার সময় কামড়ায়; লার্ভা পানির ঠিক নিচে সমান্তরালভাবে শুয়ে থাকে।',
    },
    range: {
      native: [
        [12.6, -8.0],
        [6.5, 3.4],
        [3.9, 11.5],
        [0.3, 32.6],
        [-6.2, 35.7],
        [-15.4, 28.3],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Insecticide-treated bed nets', 'Indoor residual spraying'],
        bn: ['কীটনাশকযুক্ত মশারি', 'ঘরের দেয়ালে কীটনাশক ছিটানো'],
      },
      initiatives: {
        en: ['WHO Global Malaria Programme', 'Research on gene-drive mosquitoes to suppress populations'],
        bn: ['বিশ্ব স্বাস্থ্য সংস্থার বৈশ্বিক ম্যালেরিয়া কর্মসূচি', 'মশার সংখ্যা কমাতে জিন-ড্রাইভ প্রযুক্তি নিয়ে গবেষণা'],
      },
    },
    facts: {
      en: [
        'Malaria kills hundreds of thousands of people each year, most of them young children in Africa.',
        'In Bangladesh, malaria is concentrated in the Chittagong Hill Tracts, where other Anopheles species such as Anopheles baimaii and Anopheles minimus carry it.',
        'Sleeping under an insecticide-treated net is one of the most effective ways to prevent malaria.',
      ],
      bn: [
        'ম্যালেরিয়ায় প্রতি বছর কয়েক লাখ মানুষ মারা যায়, যাদের বেশিরভাগই আফ্রিকার ছোট শিশু।',
        'বাংলাদেশে ম্যালেরিয়া মূলত পার্বত্য চট্টগ্রামে সীমাবদ্ধ, যেখানে Anopheles baimaii ও Anopheles minimus-এর মতো অন্য অ্যানোফিলিস প্রজাতি রোগটি ছড়ায়।',
        'কীটনাশকযুক্ত মশারির নিচে ঘুমানো ম্যালেরিয়া প্রতিরোধের সবচেয়ে কার্যকর উপায়গুলোর একটি।',
      ],
    },
    related: ['yellow-fever-mosquito'],
  },
];
