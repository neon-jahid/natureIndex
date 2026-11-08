import type { Species } from '@/types';

export const freshwaterInverts2: Species[] = [
  {
    id: 'common-water-flea',
    commonName: { en: 'Common Water Flea', bn: 'পানির মাছি (ড্যাফনিয়া)' },
    scientificName: 'Daphnia pulex',
    altNames: {
      en: ['Water Flea', 'Daphnia'],
      bn: ['জলমাছি', 'ড্যাফনিয়া'],
    },
    category: 'freshwater',
    wikiTitle: 'Daphnia pulex',
    description: {
      en: 'Daphnia pulex is a tiny planktonic crustacean that swims in jerky hops using its large branched antennae, which is why it is called a “water flea”. It is one of the most important grazers of algae in ponds and lakes and a key food for small fish. Because it reproduces quickly and responds sensitively to pollutants, it is a classic model organism in ecology and toxicology and is widely cultured as live fish food.',
      bn: 'ড্যাফনিয়া পুলেক্স একটি অতি ক্ষুদ্র প্ল্যাংকটনিক ক্রাস্টেশিয়ান, যা বড় শাখাযুক্ত শুঙ্গ নেড়ে ঝাঁকুনি দিয়ে লাফিয়ে লাফিয়ে সাঁতরায় — তাই একে “পানির মাছি” বলা হয়। পুকুর ও হ্রদে শৈবাল খেয়ে পানি পরিষ্কার রাখায় এর ভূমিকা গুরুত্বপূর্ণ, আর ছোট মাছের প্রধান খাদ্যগুলোর একটি। দ্রুত বংশবৃদ্ধি করে এবং দূষণে সহজেই সাড়া দেয় বলে বাস্তুবিদ্যা ও বিষবিজ্ঞানের গবেষণায় এটি বহুল ব্যবহৃত মডেল প্রাণী; মাছের জীবন্ত খাবার হিসেবেও এর ব্যাপক চাষ হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Branchiopoda',
      order: 'Anomopoda',
      family: 'Daphniidae',
      genus: 'Daphnia',
      species: 'D. pulex',
    },
    physical: {
      size: { en: 'About 1–3.5 mm long', bn: 'প্রায় ১–৩.৫ মিমি লম্বা' },
      weight: { en: 'A fraction of a milligram', bn: 'এক মিলিগ্রামেরও কম' },
      lifespan: { en: 'Usually a few weeks to about two months', bn: 'সাধারণত কয়েক সপ্তাহ থেকে প্রায় দুই মাস' },
      features: {
        en: [
          'Transparent body enclosed in a folded carapace, so the beating heart and gut are visible',
          'Large branched second antennae used as oars',
          'A single dark compound eye',
        ],
        bn: [
          'ভাঁজ করা খোলসে ঢাকা স্বচ্ছ দেহ, ফলে ভেতরের স্পন্দিত হৃৎপিণ্ড ও খাদ্যনালি দেখা যায়',
          'বৈঠার মতো ব্যবহৃত বড় শাখাযুক্ত দ্বিতীয় শুঙ্গ',
          'একটিমাত্র গাঢ় রঙের পুঞ্জাক্ষি',
        ],
      },
    },
    habitat: {
      en: 'Ponds, small lakes, pools and ditches, especially fishless or temporary waters',
      bn: 'পুকুর, ছোট হ্রদ, ডোবা ও নালা — বিশেষ করে মাছহীন বা মৌসুমি জলাশয়',
    },
    habitats: ['rivers-lakes', 'wetland'],
    regions: ['north-america', 'europe', 'east-asia'],
    distribution: {
      en: 'Widespread across the temperate Northern Hemisphere, especially North America and Europe; closely related forms occur worldwide.',
      bn: 'উত্তর গোলার্ধের নাতিশীতোষ্ণ অঞ্চলে, বিশেষ করে উত্তর আমেরিকা ও ইউরোপে ব্যাপকভাবে বিস্তৃত; ঘনিষ্ঠ আত্মীয় প্রজাতিগুলো সারা পৃথিবীতেই পাওয়া যায়।',
    },
    climate: { en: 'Temperate; survives winter or drought as resting eggs', bn: 'নাতিশীতোষ্ণ; শীত বা খরা কাটায় সুপ্ত ডিম হিসেবে' },
    diet: {
      en: 'Filter feeder — single-celled algae, bacteria and fine organic particles',
      bn: 'ছাঁকনিভোজী — এককোষী শৈবাল, ব্যাকটেরিয়া ও সূক্ষ্ম জৈব কণা খায়',
    },
    ecologicalRole: {
      en: 'A dominant grazer that controls algal growth and transfers energy from algae to fish and insect larvae.',
      bn: 'প্রধান তৃণভোজী প্ল্যাংকটন হিসেবে শৈবালের বৃদ্ধি নিয়ন্ত্রণ করে এবং শৈবাল থেকে মাছ ও পতঙ্গের লার্ভায় শক্তি পৌঁছে দেয়।',
    },
    behavior: {
      en: 'In good conditions females clone themselves, producing all-female broods without mating; when conditions worsen males appear and tough resting eggs (ephippia) are produced.',
      bn: 'অনুকূল পরিবেশে স্ত্রী ড্যাফনিয়া মিলন ছাড়াই নিজের প্রতিরূপ — শুধু স্ত্রী বাচ্চা — জন্ম দেয়; পরিবেশ প্রতিকূল হলে পুরুষ জন্মায় এবং শক্ত আবরণে ঢাকা সুপ্ত ডিম (এফিপিয়াম) তৈরি হয়।',
    },
    range: {
      native: [
        [44.0, -79.0],
        [42.5, -89.5],
        [47.6, -122.3],
        [52.0, 5.0],
        [50.0, 14.5],
        [60.2, 24.9],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; abundant in suitable waters', 'Sensitive to pesticides and heavy-metal pollution'],
        bn: ['বিপন্ন নয়; উপযুক্ত জলাশয়ে প্রচুর পাওয়া যায়', 'কীটনাশক ও ভারী ধাতুর দূষণে সংবেদনশীল'],
      },
      initiatives: {
        en: ['Used worldwide in standard water-toxicity tests', 'Mass-cultured as live feed in fish hatcheries'],
        bn: ['পানির বিষাক্ততা পরীক্ষার আন্তর্জাতিক মানদণ্ডে বিশ্বজুড়ে ব্যবহৃত', 'মাছের হ্যাচারিতে জীবন্ত খাবার হিসেবে ব্যাপক চাষ'],
      },
    },
    facts: {
      en: [
        'In 2011 it became the first crustacean to have its genome sequenced, revealing more genes than the human genome.',
        'When it senses chemicals from predatory midge larvae, it grows small defensive spines (“neck teeth”).',
      ],
      bn: [
        '২০১১ সালে এটি প্রথম ক্রাস্টেশিয়ান হিসেবে পূর্ণ জিনোম পাঠের আওতায় আসে; দেখা যায়, এর জিনের সংখ্যা মানুষের চেয়েও বেশি।',
        'শিকারি মশাজাতীয় লার্ভার রাসায়নিক গন্ধ টের পেলে এটি ঘাড়ে ছোট প্রতিরক্ষামূলক কাঁটা (“ঘাড়ের দাঁত”) গজায়।',
      ],
    },
    related: ['hydra-vulgaris', 'common-carp'],
  },
  {
    id: 'signal-crayfish',
    commonName: { en: 'Signal Crayfish', bn: 'সিগন্যাল ক্রেফিশ' },
    scientificName: 'Pacifastacus leniusculus',
    altNames: {
      en: ['American Signal Crayfish', 'Pacific Crayfish'],
      bn: ['আমেরিকান সিগন্যাল ক্রেফিশ', 'প্রশান্ত মহাসাগরীয় ক্রেফিশ'],
    },
    category: 'freshwater',
    wikiTitle: 'Signal crayfish',
    description: {
      en: 'The signal crayfish is a large North American crayfish named for the white or blue-white patch at the hinge of each claw, said to resemble a railway signalman’s flag. It was introduced to Europe from the 1960s to replace native crayfish killed by disease, but it carries crayfish plague without suffering much from it. It has since spread through rivers across Europe and Japan, wiping out native crayfish and damaging riverbanks with its burrows.',
      bn: 'সিগন্যাল ক্রেফিশ উত্তর আমেরিকার একটি বড় আকারের ক্রেফিশ; প্রতিটি দাঁড়ার জোড়ের কাছে সাদা বা নীলচে-সাদা দাগ থাকে, যা রেলের সিগন্যালম্যানের পতাকার মতো দেখায় — নামটি সেখান থেকেই। রোগে মরে যাওয়া দেশি ক্রেফিশের জায়গা পূরণের জন্য ১৯৬০-এর দশক থেকে একে ইউরোপে আনা হয়, কিন্তু এটি নিজে তেমন অসুস্থ না হয়েও ক্রেফিশ প্লেগের জীবাণু বহন করে। এখন এটি ইউরোপ ও জাপানের নদীতে ছড়িয়ে পড়ে দেশি ক্রেফিশ নিশ্চিহ্ন করছে এবং গর্ত খুঁড়ে নদীর পাড়ের ক্ষতি করছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Malacostraca',
      order: 'Decapoda',
      family: 'Astacidae',
      genus: 'Pacifastacus',
      species: 'P. leniusculus',
    },
    physical: {
      size: { en: 'Usually 6–12 cm; large males up to about 16 cm', bn: 'সাধারণত ৬–১২ সেমি; বড় পুরুষ প্রায় ১৬ সেমি পর্যন্ত' },
      weight: { en: 'Up to about 100 g or more in large males', bn: 'বড় পুরুষ প্রায় ১০০ গ্রাম বা তার বেশি' },
      lifespan: { en: 'Up to about 15–20 years', bn: 'প্রায় ১৫–২০ বছর পর্যন্ত' },
      features: {
        en: [
          'Bluish-brown to reddish-brown body with smooth carapace',
          'White to turquoise patch at the claw hinge',
          'Bright red underside of the large claws',
        ],
        bn: [
          'মসৃণ খোলসসহ নীলচে-বাদামি থেকে লালচে-বাদামি দেহ',
          'দাঁড়ার জোড়ে সাদা থেকে ফিরোজা রঙের দাগ',
          'বড় দাঁড়ার নিচের দিক উজ্জ্বল লাল',
        ],
      },
    },
    habitat: {
      en: 'Rivers, streams, lakes and reservoirs, from cold mountain streams to lowland waters',
      bn: 'নদী, ছড়া, হ্রদ ও জলাধার — ঠান্ডা পাহাড়ি ঝরনা থেকে নিম্নভূমির জলাশয় পর্যন্ত',
    },
    habitats: ['rivers-lakes', 'temperate-forest'],
    regions: ['north-america', 'europe', 'east-asia'],
    distribution: {
      en: 'Native to the Pacific Northwest of North America (British Columbia to northern California and east to Idaho); introduced to most of Europe and to Japan.',
      bn: 'উত্তর আমেরিকার প্রশান্ত মহাসাগরীয় উত্তর-পশ্চিম অঞ্চলের (ব্রিটিশ কলাম্বিয়া থেকে উত্তর ক্যালিফোর্নিয়া ও পূর্বে আইডাহো পর্যন্ত) স্থানীয়; ইউরোপের বেশিরভাগ দেশ ও জাপানে ছড়িয়েছে।',
    },
    climate: { en: 'Cool temperate', bn: 'শীতল নাতিশীতোষ্ণ' },
    diet: {
      en: 'Omnivore — aquatic plants, detritus, insect larvae, snails, fish eggs and small fish',
      bn: 'সর্বভুক — জলজ উদ্ভিদ, পচা জৈব পদার্থ, পতঙ্গের লার্ভা, শামুক, মাছের ডিম ও ছোট মাছ',
    },
    ecologicalRole: {
      en: 'Food for fish, otters and herons at home; an aggressive invader that reshapes river food webs where introduced.',
      bn: 'নিজ আবাসে মাছ, ভোঁদড় ও বকের খাদ্য; নতুন জায়গায় আগ্রাসী প্রজাতি হিসেবে নদীর খাদ্যশৃঙ্খল বদলে দেয়।',
    },
    behavior: {
      en: 'Mostly nocturnal; hides under stones or in burrows by day and can move overland between waters on damp nights.',
      bn: 'মূলত নিশাচর; দিনে পাথরের নিচে বা গর্তে লুকিয়ে থাকে এবং স্যাঁতসেঁতে রাতে ডাঙা পেরিয়ে এক জলাশয় থেকে আরেক জলাশয়ে যেতে পারে।',
    },
    range: {
      native: [
        [49.3, -123.1],
        [47.6, -122.3],
        [45.5, -122.7],
        [44.0, -121.3],
        [46.4, -117.0],
        [40.8, -124.1],
      ],
      introduced: [
        [59.3, 18.1],
        [61.5, 23.8],
        [52.5, -1.5],
        [51.0, 10.0],
        [43.1, 141.3],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Not threatened overall; it is a major invasive species', 'Some native populations affected by dams and habitat change'],
        bn: ['সামগ্রিকভাবে বিপন্ন নয়; বরং বড় আগ্রাসী প্রজাতি', 'নিজ আবাসে বাঁধ ও আবাস পরিবর্তনে কিছু জনগোষ্ঠী ক্ষতিগ্রস্ত'],
      },
      initiatives: {
        en: ['Listed as an invasive alien species of Union concern in the EU', 'Trapping and barriers to protect remaining native crayfish'],
        bn: ['ইউরোপীয় ইউনিয়নে উদ্বেগজনক আগ্রাসী প্রজাতি হিসেবে তালিকাভুক্ত', 'অবশিষ্ট দেশি ক্রেফিশ রক্ষায় ফাঁদ ও প্রতিবন্ধক স্থাপন'],
      },
    },
    facts: {
      en: [
        'It was brought to Sweden around 1960 to restock waters emptied by crayfish plague.',
        'It is now the most widespread non-native crayfish in Europe.',
      ],
      bn: [
        'ক্রেফিশ প্লেগে শূন্য হয়ে যাওয়া জলাশয় আবার ভরাতে ১৯৬০ সালের দিকে একে সুইডেনে আনা হয়।',
        'বর্তমানে এটি ইউরোপে সবচেয়ে বিস্তৃত বিদেশি ক্রেফিশ।',
      ],
    },
    related: ['noble-crayfish', 'red-swamp-crayfish', 'chinese-mitten-crab'],
  },
  {
    id: 'noble-crayfish',
    commonName: { en: 'Noble Crayfish', bn: 'নোবল ক্রেফিশ' },
    scientificName: 'Astacus astacus',
    altNames: {
      en: ['European Crayfish', 'Broad-fingered Crayfish'],
      bn: ['ইউরোপীয় ক্রেফিশ', 'অভিজাত ক্রেফিশ'],
    },
    category: 'freshwater',
    wikiTitle: 'Astacus astacus',
    description: {
      en: 'The noble crayfish is the most common native crayfish of Europe and has been eaten as a delicacy for centuries, especially in Scandinavia. Since the late 19th century, crayfish plague — a water mould brought with North American crayfish — has destroyed most of its populations. Today it survives mainly in isolated lakes and streams, and is one of Europe’s most threatened freshwater animals.',
      bn: 'নোবল ক্রেফিশ ইউরোপের সবচেয়ে পরিচিত দেশি ক্রেফিশ; বিশেষ করে স্ক্যান্ডিনেভিয়ায় শত শত বছর ধরে এটি সুস্বাদু খাবার হিসেবে খাওয়া হয়। উনিশ শতকের শেষ দিক থেকে উত্তর আমেরিকার ক্রেফিশের সঙ্গে আসা এক ধরনের পানির ছত্রাকসদৃশ জীবাণু — ক্রেফিশ প্লেগ — এর বেশিরভাগ জনগোষ্ঠী ধ্বংস করে দিয়েছে। আজ এটি মূলত বিচ্ছিন্ন হ্রদ ও ছড়ায় টিকে আছে এবং ইউরোপের সবচেয়ে বিপন্ন মিঠা পানির প্রাণীদের একটি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Malacostraca',
      order: 'Decapoda',
      family: 'Astacidae',
      genus: 'Astacus',
      species: 'A. astacus',
    },
    physical: {
      size: { en: 'Males up to about 15 cm; females smaller', bn: 'পুরুষ প্রায় ১৫ সেমি পর্যন্ত; স্ত্রী ছোট' },
      weight: { en: 'Large males about 100–150 g', bn: 'বড় পুরুষ প্রায় ১০০–১৫০ গ্রাম' },
      lifespan: { en: 'Up to about 20 years', bn: 'প্রায় ২০ বছর পর্যন্ত' },
      features: {
        en: [
          'Dark brown to olive body, occasionally blue or red colour forms',
          'Broad, heavy claws with reddish undersides',
          'Rough, granular carapace behind the eyes',
        ],
        bn: [
          'গাঢ় বাদামি থেকে জলপাই রঙের দেহ; কখনো নীল বা লাল রঙের রূপও দেখা যায়',
          'চওড়া, ভারী দাঁড়া, নিচের দিক লালচে',
          'চোখের পেছনে খসখসে, দানাদার খোলস',
        ],
      },
    },
    habitat: {
      en: 'Clean lakes, ponds and rivers with soft banks or stones for shelter',
      bn: 'আশ্রয়ের জন্য নরম পাড় বা পাথরযুক্ত পরিষ্কার হ্রদ, পুকুর ও নদী',
    },
    habitats: ['rivers-lakes', 'temperate-forest'],
    regions: ['europe'],
    distribution: {
      en: 'Central, northern and eastern Europe, from France to Russia and from Scandinavia to the Balkans.',
      bn: 'মধ্য, উত্তর ও পূর্ব ইউরোপ — ফ্রান্স থেকে রাশিয়া এবং স্ক্যান্ডিনেভিয়া থেকে বলকান অঞ্চল পর্যন্ত।',
    },
    climate: { en: 'Temperate to cool boreal', bn: 'নাতিশীতোষ্ণ থেকে শীতল উপমেরু' },
    diet: {
      en: 'Omnivore — plants, detritus, worms, insect larvae and snails',
      bn: 'সর্বভুক — উদ্ভিদ, পচা জৈব পদার্থ, কেঁচোজাতীয় প্রাণী, পতঙ্গের লার্ভা ও শামুক',
    },
    ecologicalRole: {
      en: 'Processes plant debris and controls small invertebrates; an indicator of good water quality.',
      bn: 'উদ্ভিদের আবর্জনা পচনে সাহায্য করে ও ক্ষুদ্র অমেরুদণ্ডীদের সংখ্যা নিয়ন্ত্রণ করে; ভালো পানির মানের নির্দেশক।',
    },
    behavior: {
      en: 'Nocturnal and territorial; females carry their eggs under the tail through the winter until they hatch in early summer.',
      bn: 'নিশাচর ও এলাকা-রক্ষাকারী; স্ত্রী ক্রেফিশ সারা শীত লেজের নিচে ডিম বয়ে বেড়ায়, গ্রীষ্মের শুরুতে বাচ্চা ফোটে।',
    },
    range: {
      native: [
        [59.3, 15.0],
        [61.0, 25.0],
        [52.2, 21.0],
        [50.0, 10.0],
        [56.9, 24.1],
        [45.8, 16.0],
        [56.0, 38.0],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Crayfish plague spread by invasive signal and other American crayfish', 'Water pollution and habitat loss', 'Competition from invasive crayfish'],
        bn: ['আগ্রাসী সিগন্যাল ও অন্যান্য আমেরিকান ক্রেফিশের মাধ্যমে ছড়ানো ক্রেফিশ প্লেগ', 'পানিদূষণ ও আবাস হারানো', 'আগ্রাসী ক্রেফিশের সঙ্গে প্রতিযোগিতা'],
      },
      initiatives: {
        en: ['Protected under the EU Habitats Directive', 'Restocking from hatcheries into plague-free waters'],
        bn: ['ইইউ হ্যাবিট্যাটস ডিরেক্টিভের আওতায় সুরক্ষিত', 'হ্যাচারিতে জন্মানো ক্রেফিশ প্লেগমুক্ত জলাশয়ে অবমুক্তকরণ'],
      },
    },
    facts: {
      en: [
        'Late-summer crayfish parties (kräftskiva) are a beloved tradition in Sweden and Finland.',
        'Crayfish plague, first recorded in Italy in 1859, has killed most of its populations.',
      ],
      bn: [
        'গ্রীষ্মের শেষে ক্রেফিশ ভোজ (ক্রেফ্টশিভা) সুইডেন ও ফিনল্যান্ডের প্রিয় ঐতিহ্য।',
        '১৮৫৯ সালে ইতালিতে প্রথম শনাক্ত হওয়া ক্রেফিশ প্লেগ এর বেশিরভাগ জনগোষ্ঠী ধ্বংস করেছে।',
      ],
    },
    related: ['signal-crayfish', 'red-swamp-crayfish', 'freshwater-pearl-mussel'],
  },
  {
    id: 'chinese-mitten-crab',
    commonName: { en: 'Chinese Mitten Crab', bn: 'চায়নিজ মিটেন কাঁকড়া' },
    scientificName: 'Eriocheir sinensis',
    altNames: {
      en: ['Mitten Crab', 'Shanghai Hairy Crab', 'Big Sluice Crab'],
      bn: ['লোমশ কাঁকড়া', 'সাংহাই লোমশ কাঁকড়া', 'দস্তানা কাঁকড়া'],
    },
    category: 'freshwater',
    wikiTitle: 'Chinese mitten crab',
    description: {
      en: 'The Chinese mitten crab is a burrowing crab named for the dense brown hair on its claws, which look like furry mittens. It spends most of its life in rivers, sometimes far inland, but adults migrate down to estuaries to breed in salt water. Prized as the “hairy crab” delicacy in China, it has also invaded rivers in Europe and North America, where its burrows erode banks and its migrations clog water intakes.',
      bn: 'চায়নিজ মিটেন কাঁকড়া গর্ত খুঁড়ে থাকা এক ধরনের কাঁকড়া; এর দাঁড়ায় ঘন বাদামি লোম থাকে, যা দেখতে লোমশ দস্তানার মতো — নামটি সেখান থেকেই। জীবনের বেশিরভাগ সময় এরা নদীতে, কখনো উপকূল থেকে বহু দূরে, কাটায়; কিন্তু প্রাপ্তবয়স্ক হলে প্রজননের জন্য নদী বেয়ে মোহনার লোনা পানিতে নেমে আসে। চীনে “লোমশ কাঁকড়া” নামে এটি দামি খাবার, তবে ইউরোপ ও উত্তর আমেরিকার নদীতে এটি আগ্রাসী প্রজাতি হয়ে উঠেছে — এদের গর্তে পাড় ভাঙে আর দলবদ্ধ অভিবাসনে পানি টানার পাইপ আটকে যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Malacostraca',
      order: 'Decapoda',
      family: 'Varunidae',
      genus: 'Eriocheir',
      species: 'E. sinensis',
    },
    physical: {
      size: { en: 'Carapace usually 3–8 cm wide; legs about twice as long', bn: 'খোলস সাধারণত ৩–৮ সেমি চওড়া; পা প্রায় দ্বিগুণ লম্বা' },
      weight: { en: 'Usually 100–200 g; large ones up to about 350 g', bn: 'সাধারণত ১০০–২০০ গ্রাম; বড়গুলো প্রায় ৩৫০ গ্রাম পর্যন্ত' },
      lifespan: { en: 'About 2–5 years; adults die after breeding once', bn: 'প্রায় ২–৫ বছর; একবার প্রজননের পর প্রাপ্তবয়স্করা মারা যায়' },
      features: {
        en: [
          'Dense mats of brown hair on the white-tipped claws',
          'Rounded olive-brown carapace with a notch between the eyes',
          'Long, hairy walking legs',
        ],
        bn: [
          'সাদা-ডগাওয়ালা দাঁড়ায় ঘন বাদামি লোমের আস্তরণ',
          'গোলাকার জলপাই-বাদামি খোলস, দুই চোখের মাঝে খাঁজ',
          'লম্বা, লোমশ হাঁটার পা',
        ],
      },
    },
    habitat: {
      en: 'Rivers, canals, lakes and estuaries; burrows in muddy or soft banks',
      bn: 'নদী, খাল, হ্রদ ও মোহনা; কাদা বা নরম পাড়ে গর্ত করে থাকে',
    },
    habitats: ['rivers-lakes', 'wetland', 'urban-farmland'],
    regions: ['east-asia', 'europe', 'north-america'],
    distribution: {
      en: 'Native to rivers and coasts of eastern China and Korea; introduced to north-western Europe (Germany, the Netherlands, Britain and beyond) and San Francisco Bay.',
      bn: 'পূর্ব চীন ও কোরিয়ার নদী ও উপকূলের স্থানীয়; উত্তর-পশ্চিম ইউরোপ (জার্মানি, নেদারল্যান্ডস, ব্রিটেন প্রভৃতি) এবং সান ফ্রান্সিসকো উপসাগরে ছড়িয়েছে।',
    },
    climate: { en: 'Temperate to subtropical', bn: 'নাতিশীতোষ্ণ থেকে উপক্রান্তীয়' },
    diet: {
      en: 'Omnivore — aquatic plants, detritus, worms, snails, clams and fish eggs',
      bn: 'সর্বভুক — জলজ উদ্ভিদ, পচা জৈব পদার্থ, কৃমি, শামুক, ঝিনুক ও মাছের ডিম',
    },
    ecologicalRole: {
      en: 'A link between river and sea food webs; where introduced it competes with native animals and damages riverbanks.',
      bn: 'নদী ও সমুদ্রের খাদ্যশৃঙ্খলের মধ্যে সংযোগ ঘটায়; নতুন আবাসে দেশি প্রাণীর সঙ্গে প্রতিযোগিতা করে ও নদীর পাড়ের ক্ষতি করে।',
    },
    behavior: {
      en: 'Juveniles migrate upstream, sometimes walking around dams and weirs; mature crabs march downstream in autumn to mate and spawn in brackish water.',
      bn: 'বাচ্চা কাঁকড়া নদী বেয়ে উজানে যায়, প্রয়োজনে বাঁধের পাশ দিয়ে হেঁটে পার হয়; পরিণত কাঁকড়া শরতে দল বেঁধে ভাটিতে নেমে লোনা পানিতে মিলন ও ডিম পাড়ে।',
    },
    range: {
      native: [
        [31.2, 121.5],
        [31.4, 120.7],
        [30.6, 114.3],
        [39.1, 117.2],
        [37.5, 126.6],
      ],
      introduced: [
        [53.5, 10.0],
        [51.5, 0.0],
        [51.9, 4.5],
        [38.0, -122.3],
        [52.6, 13.4],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; it is a major invasive species', 'Wild Chinese stocks reduced by dams, pollution and overfishing'],
        bn: ['বিপন্ন নয়; বরং বড় আগ্রাসী প্রজাতি', 'চীনের বন্য জনগোষ্ঠী বাঁধ, দূষণ ও অতিরিক্ত আহরণে কমেছে'],
      },
      initiatives: {
        en: ['Large-scale pond and lake farming in China', 'Listed as an invasive alien species of Union concern in the EU'],
        bn: ['চীনে পুকুর ও হ্রদে ব্যাপক চাষ', 'ইউরোপীয় ইউনিয়নে উদ্বেগজনক আগ্রাসী প্রজাতি হিসেবে তালিকাভুক্ত'],
      },
    },
    facts: {
      en: [
        'It is listed among the “100 of the World’s Worst Invasive Alien Species”.',
        'It probably reached Europe in ship ballast water; it was first recorded in Germany in 1912.',
        'Crabs from Yangcheng Lake near Suzhou are among the most expensive in China.',
      ],
      bn: [
        'এটি “বিশ্বের ১০০টি সবচেয়ে ক্ষতিকর আগ্রাসী প্রজাতি”-র তালিকায় রয়েছে।',
        'সম্ভবত জাহাজের ব্যালাস্ট পানির মাধ্যমে এটি ইউরোপে পৌঁছায়; ১৯১২ সালে জার্মানিতে প্রথম শনাক্ত হয়।',
        'সুচৌ-এর কাছের ইয়াংচেং হ্রদের কাঁকড়া চীনের সবচেয়ে দামি কাঁকড়াগুলোর একটি।',
      ],
    },
    related: ['mud-crab', 'signal-crayfish', 'zebra-mussel'],
  },
  {
    id: 'hydra-vulgaris',
    commonName: { en: 'Common Hydra', bn: 'হাইড্রা' },
    scientificName: 'Hydra vulgaris',
    altNames: {
      en: ['Hydra', 'Freshwater Polyp'],
      bn: ['মিঠা পানির পলিপ', 'সাধারণ হাইড্রা'],
    },
    category: 'freshwater',
    wikiTitle: 'Hydra vulgaris',
    description: {
      en: 'Hydra vulgaris is a tiny freshwater relative of jellyfish and corals, consisting of a tube-shaped body with a ring of stinging tentacles. It is famous for its extraordinary ability to regenerate — a small fragment can regrow into a whole animal — and for showing almost no signs of ageing. Familiar to generations of biology students, it is a model organism for studying regeneration, stem cells and development.',
      bn: 'হাইড্রা জেলিফিশ ও প্রবালের একটি ক্ষুদ্র মিঠা পানির আত্মীয়; এর দেহ নলের মতো, মুখের চারপাশে হুল ফোটানো কর্ষিকার একটি বলয় থাকে। অসাধারণ পুনরুৎপাদন ক্ষমতার জন্য এটি বিখ্যাত — দেহের ছোট একটি টুকরো থেকেও পুরো প্রাণী গজিয়ে উঠতে পারে — আর এর দেহে বার্ধক্যের লক্ষণ প্রায় দেখাই যায় না। প্রজন্মের পর প্রজন্ম জীববিজ্ঞানের ছাত্রছাত্রীদের কাছে পরিচিত এই প্রাণী পুনরুৎপাদন, স্টেম কোষ ও বিকাশ নিয়ে গবেষণার মডেল জীব।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Hydrozoa',
      order: 'Anthoathecata',
      family: 'Hydridae',
      genus: 'Hydra',
      species: 'H. vulgaris',
    },
    physical: {
      size: { en: 'Body up to about 1–1.5 cm long when extended', bn: 'প্রসারিত অবস্থায় দেহ প্রায় ১–১.৫ সেমি পর্যন্ত লম্বা' },
      weight: { en: 'Well under a milligram to a few milligrams', bn: 'এক মিলিগ্রামের অনেক কম থেকে কয়েক মিলিগ্রাম' },
      lifespan: { en: 'Potentially indefinite in the lab; shows negligible ageing', bn: 'গবেষণাগারে কার্যত অনির্দিষ্টকাল; বার্ধক্য প্রায় নেই বললেই চলে' },
      features: {
        en: [
          'Slender tube-shaped body attached to plants or stones by a sticky basal disc',
          'Usually 5–8 tentacles armed with stinging cells (nematocysts)',
          'Can contract into a tiny blob when disturbed',
        ],
        bn: [
          'সরু নলাকার দেহ, নিচের আঠালো চাকতি দিয়ে উদ্ভিদ বা পাথরে লেগে থাকে',
          'সাধারণত ৫–৮টি কর্ষিকা, যাতে হুল ফোটানো কোষ (নেমাটোসিস্ট) থাকে',
          'বিরক্ত হলে গুটিয়ে ছোট্ট একটি দলায় পরিণত হয়',
        ],
      },
    },
    habitat: {
      en: 'Clean ponds, lakes, ditches and slow streams, attached to water plants or submerged objects',
      bn: 'পরিষ্কার পুকুর, হ্রদ, নালা ও ধীরগতির ছড়া; জলজ উদ্ভিদ বা ডুবে থাকা বস্তুর গায়ে লেগে থাকে',
    },
    habitats: ['rivers-lakes', 'wetland'],
    regions: ['europe', 'north-america', 'south-asia', 'east-asia', 'africa', 'south-america', 'oceania'],
    distribution: {
      en: 'Found in fresh waters on every continent except Antarctica.',
      bn: 'অ্যান্টার্কটিকা ছাড়া সব মহাদেশের মিঠা পানিতে পাওয়া যায়।',
    },
    climate: { en: 'Temperate to tropical', bn: 'নাতিশীতোষ্ণ থেকে ক্রান্তীয়' },
    diet: {
      en: 'Carnivore — water fleas, copepods, insect larvae and other tiny animals caught with stinging tentacles',
      bn: 'মাংসাশী — হুলযুক্ত কর্ষিকা দিয়ে ধরা ড্যাফনিয়া, কোপিপড, পতঙ্গের লার্ভা ও অন্যান্য ক্ষুদ্র প্রাণী',
    },
    ecologicalRole: {
      en: 'A small predator of zooplankton and in turn food for flatworms, snails and small fish.',
      bn: 'প্রাণী-প্ল্যাংকটনের ক্ষুদ্র শিকারি; নিজেও চ্যাপ্টাকৃমি, শামুক ও ছোট মাছের খাদ্য।',
    },
    behavior: {
      en: 'Mostly sits still waiting for prey, but can move by gliding on its base or “somersaulting” end over end; reproduces mainly by budding off small new hydras.',
      bn: 'বেশিরভাগ সময় এক জায়গায় বসে শিকারের অপেক্ষা করে, তবে নিচের চাকতিতে পিছলে বা ডিগবাজি খেয়ে চলাফেরা করতে পারে; প্রধানত দেহ থেকে কুঁড়ির মতো ছোট নতুন হাইড্রা গজিয়ে বংশবৃদ্ধি করে।',
    },
    range: {
      native: [
        [46.2, 6.1],
        [52.0, 5.0],
        [43.0, -80.0],
        [23.8, 90.4],
        [35.7, 139.7],
        [-1.3, 36.8],
        [-34.9, 138.6],
        [-23.5, -46.6],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; widespread and common', 'Locally harmed by water pollution'],
        bn: ['বিপন্ন নয়; ব্যাপকভাবে বিস্তৃত ও সাধারণ', 'স্থানীয়ভাবে পানিদূষণে ক্ষতিগ্রস্ত হয়'],
      },
      initiatives: {
        en: ['Used as a bioindicator in water-toxicity testing', 'Maintained in research laboratories worldwide'],
        bn: ['পানির বিষাক্ততা পরীক্ষায় জৈব-সূচক হিসেবে ব্যবহৃত', 'বিশ্বজুড়ে গবেষণাগারে পালন করা হয়'],
      },
    },
    facts: {
      en: [
        'Its regeneration was first studied by the Swiss naturalist Abraham Trembley in the 1740s.',
        'It is named after the many-headed Hydra of Greek myth, which grew back heads when one was cut off.',
      ],
      bn: [
        '১৭৪০-এর দশকে সুইস প্রকৃতিবিদ আব্রাহাম ট্রেম্বলে প্রথম এর পুনরুৎপাদন নিয়ে গবেষণা করেন।',
        'গ্রিক পুরাণের বহুমাথাওয়ালা দানব হাইড্রার নামে এর নাম — সেই দানবের একটি মাথা কাটলে আবার গজিয়ে উঠত।',
      ],
    },
    related: ['common-water-flea', 'giant-clam'],
  },
  {
    id: 'giant-water-bug-lethocerus',
    commonName: { en: 'Giant Water Bug', bn: 'দৈত্য জলপোকা' },
    scientificName: 'Lethocerus indicus',
    altNames: {
      en: ['Indian Giant Water Bug', 'Toe-biter', 'Maeng Da'],
      bn: ['বড় জলপোকা', 'পানির তেলাপোকা', 'জলের ছারপোকা'],
    },
    category: 'insects',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Lethocerus indicus',
    description: {
      en: 'Lethocerus indicus is one of the largest true bugs in the world, a flat, brown predator of ponds and rice fields in South and Southeast Asia. It ambushes fish, frogs and tadpoles with its powerful grasping forelegs and injects digestive saliva through its beak. In Thailand, Laos and Vietnam it is a popular food, and the male’s pungent scent is used to flavour chilli sauces.',
      bn: 'দৈত্য জলপোকা (Lethocerus indicus) বিশ্বের সবচেয়ে বড় প্রকৃত ছারপোকাগোত্রীয় পতঙ্গগুলোর একটি; দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার পুকুর ও ধানখেতের চ্যাপ্টা, বাদামি রঙের এক শিকারি। শক্তিশালী আঁকশির মতো সামনের পা দিয়ে এটি ওত পেতে মাছ, ব্যাঙ ও ব্যাঙাচি ধরে এবং শুঁড়ের মতো মুখ দিয়ে পাচক লালা ঢুকিয়ে দেয়। থাইল্যান্ড, লাওস ও ভিয়েতনামে এটি জনপ্রিয় খাবার, আর পুরুষ পোকার তীব্র গন্ধ মরিচের সসে স্বাদ আনতে ব্যবহার করা হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Hemiptera',
      family: 'Belostomatidae',
      genus: 'Lethocerus',
      species: 'L. indicus',
    },
    physical: {
      size: { en: 'About 6.5–8 cm long', bn: 'প্রায় ৬.৫–৮ সেমি লম্বা' },
      weight: { en: 'Several grams', bn: 'কয়েক গ্রাম' },
      lifespan: { en: 'About one year', bn: 'প্রায় এক বছর' },
      features: {
        en: [
          'Broad, flattened brown body shaped like a large leaf',
          'Thick raptorial forelegs that grip prey like pincers',
          'Short, retractable breathing tubes at the tip of the abdomen',
        ],
        bn: [
          'বড় পাতার মতো চওড়া, চ্যাপ্টা বাদামি দেহ',
          'শিকার আঁকড়ে ধরার জন্য সাঁড়াশির মতো মোটা সামনের পা',
          'পেটের ডগায় ছোট, গুটিয়ে রাখা যায় এমন শ্বাসনল',
        ],
      },
    },
    habitat: {
      en: 'Ponds, swamps, ditches and flooded rice fields with plenty of vegetation',
      bn: 'প্রচুর জলজ উদ্ভিদযুক্ত পুকুর, জলাভূমি, নালা ও প্লাবিত ধানখেত',
    },
    habitats: ['wetland', 'rivers-lakes', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'India, Bangladesh and Sri Lanka east through Myanmar, Thailand, Indochina and southern China to the Philippines and Indonesia.',
      bn: 'ভারত, বাংলাদেশ ও শ্রীলঙ্কা থেকে পূর্বে মিয়ানমার, থাইল্যান্ড, ইন্দোচীন ও দক্ষিণ চীন হয়ে ফিলিপাইন ও ইন্দোনেশিয়া পর্যন্ত।',
    },
    climate: { en: 'Tropical and subtropical monsoon', bn: 'ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Predator — fish, tadpoles, frogs, snails and large insects',
      bn: 'শিকারি — মাছ, ব্যাঙাচি, ব্যাঙ, শামুক ও বড় পতঙ্গ',
    },
    ecologicalRole: {
      en: 'A top invertebrate predator in ponds and paddies; can be a pest in fish nurseries.',
      bn: 'পুকুর ও ধানখেতের শীর্ষ অমেরুদণ্ডী শিকারি; মাছের নার্সারি পুকুরে ক্ষতিকর হতে পারে।',
    },
    behavior: {
      en: 'Waits motionless among plants to ambush prey; adults fly at night and are strongly attracted to lights. Females lay eggs on stems above the water, and the male guards and moistens them.',
      bn: 'জলজ উদ্ভিদের মাঝে নিশ্চল থেকে শিকারের ওপর ঝাঁপিয়ে পড়ে; প্রাপ্তবয়স্করা রাতে ওড়ে এবং আলোর প্রতি প্রবলভাবে আকৃষ্ট হয়। স্ত্রী পোকা পানির ওপরে উদ্ভিদের কাণ্ডে ডিম পাড়ে, আর পুরুষ পোকা ডিম পাহারা দেয় ও ভিজিয়ে রাখে।',
    },
    range: {
      native: [
        [23.8, 90.4],
        [22.6, 88.4],
        [7.3, 80.6],
        [16.8, 96.2],
        [13.8, 100.5],
        [17.97, 102.6],
        [23.1, 113.3],
        [14.6, 121.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Pesticide use in rice fields', 'Collection for food in parts of Southeast Asia', 'Drainage of wetlands'],
        bn: ['ধানখেতে কীটনাশকের ব্যবহার', 'দক্ষিণ-পূর্ব এশিয়ার কিছু অংশে খাবারের জন্য আহরণ', 'জলাভূমি শুকিয়ে ফেলা'],
      },
      initiatives: {
        en: ['Small-scale farming trials in Thailand to supply the food market', 'Protected indirectly in wetland reserves'],
        bn: ['খাদ্যবাজারের চাহিদা মেটাতে থাইল্যান্ডে ছোট পরিসরে চাষের পরীক্ষা', 'জলাভূমি সংরক্ষিত এলাকায় পরোক্ষভাবে সুরক্ষিত'],
      },
    },
    facts: {
      en: [
        'Its bite is very painful to humans, though not dangerous — hence the name “toe-biter”.',
        'Thai “nam phrik maeng da” is a chilli paste flavoured with this bug.',
        'Caution: do not handle it with bare hands.',
      ],
      bn: [
        'এর কামড় মানুষের জন্য খুবই যন্ত্রণাদায়ক, যদিও বিপজ্জনক নয় — তাই ইংরেজিতে একে “টো-বাইটার” (পায়ের আঙুল কামড়ানো পোকা) বলা হয়।',
        'থাই খাবার “নাম প্রিক মেংদা” এই পোকার স্বাদযুক্ত একটি মরিচবাটা।',
        'সতর্কতা: খালি হাতে এটি ধরা উচিত নয়।',
      ],
    },
    related: ['great-diving-beetle', 'indian-bullfrog', 'indian-apple-snail'],
  },
  {
    id: 'great-diving-beetle',
    commonName: { en: 'Great Diving Beetle', bn: 'বড় ডুবুরি গুবরে পোকা' },
    scientificName: 'Dytiscus marginalis',
    altNames: {
      en: ['Diving Beetle', 'Water Tiger (larva)'],
      bn: ['ডুবুরি পোকা', 'জলবাঘ (লার্ভা)'],
    },
    category: 'insects',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Dytiscus marginalis',
    description: {
      en: 'The great diving beetle is a large, streamlined predatory beetle of European and northern Asian ponds. Both the adult and its fierce larva — nicknamed the “water tiger” — hunt tadpoles, insects and even small fish. The adult carries a bubble of air under its wing cases like a scuba tank, and on warm nights it can fly from pond to pond.',
      bn: 'বড় ডুবুরি গুবরে পোকা ইউরোপ ও উত্তর এশিয়ার পুকুরের একটি বড়, মসৃণ গড়নের শিকারি গুবরে পোকা। প্রাপ্তবয়স্ক পোকা ও এর হিংস্র লার্ভা — যাকে “জলবাঘ” বলা হয় — দুজনেই ব্যাঙাচি, পোকামাকড়, এমনকি ছোট মাছও শিকার করে। ডুবুরির অক্সিজেন সিলিন্ডারের মতো এটি ডানার আবরণের নিচে বাতাসের বুদবুদ বয়ে বেড়ায়, আর উষ্ণ রাতে এক পুকুর থেকে আরেক পুকুরে উড়ে যেতে পারে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Coleoptera',
      family: 'Dytiscidae',
      genus: 'Dytiscus',
      species: 'D. marginalis',
    },
    physical: {
      size: { en: 'Adults about 2.7–3.5 cm; larvae up to about 6 cm', bn: 'প্রাপ্তবয়স্ক প্রায় ২.৭–৩.৫ সেমি; লার্ভা প্রায় ৬ সেমি পর্যন্ত' },
      weight: { en: 'Roughly 1–2 g', bn: 'মোটামুটি ১–২ গ্রাম' },
      lifespan: { en: 'Adults can live 2–3 years', bn: 'প্রাপ্তবয়স্করা ২–৩ বছর বাঁচতে পারে' },
      features: {
        en: [
          'Smooth, oval, dark olive-brown body with a yellow border around the thorax and wing cases',
          'Flattened, hair-fringed hind legs used as oars',
          'Males have sucker pads on the front legs; females often have grooved wing cases',
        ],
        bn: [
          'মসৃণ, ডিম্বাকার গাঢ় জলপাই-বাদামি দেহ; বক্ষ ও ডানার আবরণের কিনারা হলুদ',
          'বৈঠার মতো ব্যবহৃত চ্যাপ্টা, লোমে ঘেরা পেছনের পা',
          'পুরুষের সামনের পায়ে চোষক থাকে; স্ত্রীর ডানার আবরণে প্রায়ই খাঁজ থাকে',
        ],
      },
    },
    habitat: {
      en: 'Still or slow-moving fresh water with rich vegetation — ponds, lakes, ditches and canals',
      bn: 'প্রচুর জলজ উদ্ভিদযুক্ত স্থির বা ধীরগতির মিঠা পানি — পুকুর, হ্রদ, নালা ও খাল',
    },
    habitats: ['rivers-lakes', 'wetland'],
    regions: ['europe', 'east-asia'],
    distribution: {
      en: 'Throughout Europe and across northern Asia to Siberia and the Russian Far East.',
      bn: 'সারা ইউরোপ এবং উত্তর এশিয়াজুড়ে সাইবেরিয়া ও রাশিয়ার দূরপ্রাচ্য পর্যন্ত।',
    },
    climate: { en: 'Temperate to boreal', bn: 'নাতিশীতোষ্ণ থেকে উপমেরু' },
    diet: {
      en: 'Predator and scavenger — insects, tadpoles, newts, snails and small fish',
      bn: 'শিকারি ও আবর্জনাভুক — পোকামাকড়, ব্যাঙাচি, নিউট, শামুক ও ছোট মাছ',
    },
    ecologicalRole: {
      en: 'A top invertebrate predator in ponds; can significantly reduce tadpole and small-fish numbers.',
      bn: 'পুকুরের শীর্ষ অমেরুদণ্ডী শিকারি; ব্যাঙাচি ও ছোট মাছের সংখ্যা উল্লেখযোগ্যভাবে কমাতে পারে।',
    },
    behavior: {
      en: 'Surfaces tail-first to renew its air store; the larva grips prey with hollow, sickle-shaped jaws and injects digestive juices, then sucks out the liquefied tissue.',
      bn: 'বাতাস নিতে পেছনের দিক দিয়ে পানির ওপর ওঠে; লার্ভা ফাঁপা, কাস্তের মতো চোয়ালে শিকার আঁকড়ে পাচক রস ঢুকিয়ে দেয়, তারপর গলে যাওয়া দেহরস শুষে নেয়।',
    },
    range: {
      native: [
        [52.0, -1.0],
        [48.8, 2.3],
        [51.0, 10.0],
        [59.3, 18.1],
        [52.2, 21.0],
        [55.8, 37.6],
        [55.0, 83.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Loss of ponds to drainage and development', 'Pollution and fish stocking in small ponds'],
        bn: ['নিষ্কাশন ও উন্নয়নকাজে পুকুর হারানো', 'দূষণ এবং ছোট পুকুরে মাছ ছাড়া'],
      },
      initiatives: {
        en: ['Pond creation and restoration schemes in Europe', 'Benefits from wildlife-friendly garden ponds'],
        bn: ['ইউরোপে নতুন পুকুর তৈরি ও পুনরুদ্ধার কর্মসূচি', 'বন্যপ্রাণীবান্ধব বাগানের পুকুর থেকে উপকৃত হয়'],
      },
    },
    facts: {
      en: [
        'Flying beetles sometimes crash onto wet roads, car roofs or greenhouses, mistaking the shine for water.',
        'If handled, it can give a painful nip and releases a foul-smelling defensive fluid.',
      ],
      bn: [
        'উড়ন্ত পোকা কখনো কখনো ভেজা রাস্তা, গাড়ির ছাদ বা কাচঘরের চকচকে পৃষ্ঠকে পানি ভেবে তাতে আছড়ে পড়ে।',
        'হাতে ধরলে এটি ব্যথাদায়ক কামড় দিতে পারে এবং দুর্গন্ধযুক্ত আত্মরক্ষামূলক তরল ছাড়ে।',
      ],
    },
    related: ['giant-water-bug-lethocerus', 'green-drake-mayfly', 'european-common-frog'],
  },
  {
    id: 'asian-clam',
    commonName: { en: 'Asian Clam', bn: 'এশীয় ক্ল্যাম' },
    scientificName: 'Corbicula fluminea',
    altNames: {
      en: ['Asiatic Clam', 'Golden Clam', 'Prosperity Clam'],
      bn: ['এশীয় ঝিনুক', 'সোনালি ক্ল্যাম', 'ছোট নদী ঝিনুক'],
    },
    category: 'freshwater',
    wikiTitle: 'Corbicula fluminea',
    description: {
      en: 'The Asian clam is a small freshwater bivalve from eastern and south-eastern Asia that has become one of the most successful aquatic invaders in the world. It grows fast, can fertilise itself and releases thousands of tiny juveniles, letting a single clam start a new population. It is eaten in parts of Asia but causes costly biofouling in power-plant cooling systems and irrigation canals elsewhere.',
      bn: 'এশীয় ক্ল্যাম পূর্ব ও দক্ষিণ-পূর্ব এশিয়ার একটি ছোট মিঠা পানির দ্বিকপাটী প্রাণী, যা বিশ্বের সবচেয়ে সফল জলজ আগ্রাসী প্রজাতিগুলোর একটিতে পরিণত হয়েছে। এটি দ্রুত বাড়ে, নিজে নিজেই নিষেক ঘটাতে পারে এবং হাজার হাজার ক্ষুদ্র বাচ্চা ছাড়ে — ফলে একটিমাত্র ক্ল্যাম থেকেই নতুন জনগোষ্ঠী গড়ে উঠতে পারে। এশিয়ার কোথাও কোথাও এটি খাওয়া হয়, কিন্তু অন্যত্র বিদ্যুৎকেন্দ্রের শীতলীকরণ ব্যবস্থা ও সেচখালে জমে ব্যয়বহুল ক্ষতি করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Mollusca',
      class: 'Bivalvia',
      order: 'Venerida',
      family: 'Cyrenidae',
      genus: 'Corbicula',
      species: 'C. fluminea',
    },
    physical: {
      size: { en: 'Usually under 2.5 cm; up to about 5 cm', bn: 'সাধারণত ২.৫ সেমির কম; সর্বোচ্চ প্রায় ৫ সেমি' },
      weight: { en: 'A few grams', bn: 'কয়েক গ্রাম' },
      lifespan: { en: 'Usually 1–4 years', bn: 'সাধারণত ১–৪ বছর' },
      features: {
        en: [
          'Rounded, triangular shell with thick, evenly spaced concentric ridges',
          'Yellow-brown to dark olive outer surface',
          'Purple or white inner surface',
        ],
        bn: [
          'গোলাকার-ত্রিভুজাকার খোলস, তাতে সমান দূরত্বে মোটা বৃত্তাকার খাঁজ',
          'বাইরের দিক হলদে-বাদামি থেকে গাঢ় জলপাই রঙের',
          'ভেতরের দিক বেগুনি বা সাদা',
        ],
      },
    },
    habitat: {
      en: 'Sandy and gravelly beds of rivers, lakes, canals and reservoirs',
      bn: 'নদী, হ্রদ, খাল ও জলাধারের বালু ও নুড়িময় তলদেশ',
    },
    habitats: ['rivers-lakes', 'urban-farmland'],
    regions: ['east-asia', 'southeast-asia', 'north-america', 'south-america', 'europe'],
    distribution: {
      en: 'Native to eastern and south-eastern Asia, including China, Korea, south-eastern Russia and Southeast Asia; introduced to North and South America, Europe and Africa.',
      bn: 'চীন, কোরিয়া, দক্ষিণ-পূর্ব রাশিয়া ও দক্ষিণ-পূর্ব এশিয়াসহ পূর্ব ও দক্ষিণ-পূর্ব এশিয়ার স্থানীয়; উত্তর ও দক্ষিণ আমেরিকা, ইউরোপ ও আফ্রিকায় ছড়িয়েছে।',
    },
    climate: { en: 'Subtropical to temperate; sensitive to very cold water', bn: 'উপক্রান্তীয় থেকে নাতিশীতোষ্ণ; খুব ঠান্ডা পানিতে সংবেদনশীল' },
    diet: {
      en: 'Filter and deposit feeder — phytoplankton, bacteria and organic particles from the water and sediment',
      bn: 'ছাঁকনিভোজী ও তলানিভোজী — পানি ও তলানি থেকে উদ্ভিদকণা, ব্যাকটেরিয়া ও জৈব কণা খায়',
    },
    ecologicalRole: {
      en: 'Filters large volumes of water; where introduced it competes with native mussels and alters nutrient cycling.',
      bn: 'প্রচুর পানি ছেঁকে নেয়; নতুন আবাসে দেশি ঝিনুকের সঙ্গে প্রতিযোগিতা করে এবং পুষ্টিচক্র বদলে দেয়।',
    },
    behavior: {
      en: 'Mostly hermaphroditic; broods larvae in its gills and releases tiny juveniles that drift on currents or are carried by boats and bait buckets.',
      bn: 'বেশিরভাগই উভলিঙ্গ; ফুলকায় লার্ভা লালন করে এবং ক্ষুদ্র বাচ্চা ছেড়ে দেয়, যারা স্রোতে ভেসে বা নৌকা ও টোপের বালতির মাধ্যমে দূরে ছড়ায়।',
    },
    range: {
      native: [
        [31.2, 121.5],
        [30.6, 114.3],
        [23.1, 113.3],
        [37.5, 127.0],
        [21.0, 105.8],
        [13.8, 100.5],
      ],
      introduced: [
        [45.6, -122.7],
        [38.6, -90.2],
        [-34.6, -58.4],
        [44.8, -0.6],
        [51.9, 4.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; a widespread invasive species', 'Sudden die-offs in hot, low-oxygen summers'],
        bn: ['বিপন্ন নয়; বরং ব্যাপকভাবে ছড়ানো আগ্রাসী প্রজাতি', 'উষ্ণ, অক্সিজেন-স্বল্প গ্রীষ্মে হঠাৎ গণমৃত্যু'],
      },
      initiatives: {
        en: ['Boat and equipment cleaning campaigns', 'Monitoring and control in power-plant and water-supply intakes'],
        bn: ['নৌকা ও সরঞ্জাম পরিষ্কারের প্রচারণা', 'বিদ্যুৎকেন্দ্র ও পানি সরবরাহের পাইপমুখে পর্যবেক্ষণ ও নিয়ন্ত্রণ'],
      },
    },
    facts: {
      en: [
        'It was first found in North America in 1924 and has since spread to most of the United States.',
        'Dense beds can reach thousands of clams per square metre.',
      ],
      bn: [
        '১৯২৪ সালে উত্তর আমেরিকায় এটি প্রথম পাওয়া যায়; এরপর যুক্তরাষ্ট্রের বেশিরভাগ অঞ্চলে ছড়িয়ে পড়েছে।',
        'ঘন স্তরে প্রতি বর্গমিটারে কয়েক হাজার ক্ল্যাম থাকতে পারে।',
      ],
    },
    related: ['zebra-mussel', 'lamellidens-freshwater-mussel', 'golden-apple-snail'],
  },
  {
    id: 'green-drake-mayfly',
    commonName: { en: 'Green Drake Mayfly', bn: 'সবুজ ড্রেক মে-মাছি' },
    scientificName: 'Ephemera danica',
    altNames: {
      en: ['Green Drake', 'Mayfly'],
      bn: ['মে-মাছি', 'ক্ষণজীবী পতঙ্গ'],
    },
    category: 'insects',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Ephemera danica',
    description: {
      en: 'Ephemera danica is one of the largest mayflies in Europe. It spends one to two years as a burrowing nymph in the sandy and silty beds of rivers and lakes, then emerges in late spring to live only a day or so as a winged adult. Adults cannot eat; they mate in dancing swarms over the water, lay their eggs and die, providing a feast for trout and birds.',
      bn: 'এফেমেরা ডানিকা ইউরোপের সবচেয়ে বড় মে-মাছিগুলোর একটি। এটি নদী ও হ্রদের বালু ও পলিময় তলায় গর্তবাসী নিম্ফ হিসেবে এক থেকে দুই বছর কাটায়, তারপর বসন্তের শেষে বেরিয়ে এসে ডানাওয়ালা প্রাপ্তবয়স্ক হিসেবে মাত্র এক দিনের মতো বাঁচে। প্রাপ্তবয়স্করা খেতেই পারে না; পানির ওপর নাচের মতো ঝাঁক বেঁধে মিলন করে, ডিম পাড়ে আর মারা যায় — তখন ট্রাউট মাছ ও পাখিদের ভোজ শুরু হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Ephemeroptera',
      family: 'Ephemeridae',
      genus: 'Ephemera',
      species: 'E. danica',
    },
    physical: {
      size: { en: 'Body about 1.5–2.5 cm, plus three long tail filaments', bn: 'দেহ প্রায় ১.৫–২.৫ সেমি, সঙ্গে তিনটি লম্বা লেজসুতা' },
      weight: { en: 'Well under 1 g', bn: '১ গ্রামের অনেক কম' },
      lifespan: { en: '1–2 years as a nymph; adult usually lives 1–3 days', bn: 'নিম্ফ হিসেবে ১–২ বছর; প্রাপ্তবয়স্ক সাধারণত ১–৩ দিন বাঁচে' },
      features: {
        en: [
          'Large, upright, dark-spotted wings held together over the back',
          'Three long tail filaments',
          'Pale body with dark markings on the abdomen',
        ],
        bn: [
          'পিঠের ওপর খাড়া করে জোড়া রাখা বড়, কালো ছোপযুক্ত ডানা',
          'তিনটি লম্বা লেজসুতা',
          'ফ্যাকাশে দেহ, পেটে গাঢ় দাগ',
        ],
      },
    },
    habitat: {
      en: 'Rivers, streams and lakes with sandy or silty beds and clean, well-oxygenated water',
      bn: 'বালু বা পলিময় তলদেশ এবং পরিষ্কার, অক্সিজেনসমৃদ্ধ পানির নদী, ছড়া ও হ্রদ',
    },
    habitats: ['rivers-lakes', 'temperate-forest'],
    regions: ['europe'],
    distribution: {
      en: 'Widespread across Europe, from Ireland and Britain to Scandinavia and eastward.',
      bn: 'আয়ারল্যান্ড ও ব্রিটেন থেকে স্ক্যান্ডিনেভিয়া হয়ে পূর্ব দিকে ইউরোপজুড়ে বিস্তৃত।',
    },
    climate: { en: 'Temperate', bn: 'নাতিশীতোষ্ণ' },
    diet: {
      en: 'Nymphs filter and gather fine organic particles and algae; adults do not feed',
      bn: 'নিম্ফ সূক্ষ্ম জৈব কণা ও শৈবাল ছেঁকে বা কুড়িয়ে খায়; প্রাপ্তবয়স্করা কিছুই খায় না',
    },
    ecologicalRole: {
      en: 'Nymphs recycle organic matter in riverbeds, and mass emergences are a major food pulse for fish, birds and bats.',
      bn: 'নিম্ফ নদীর তলায় জৈব পদার্থ পুনর্চক্রায়ণ করে, আর দলবদ্ধ উত্থানের সময় মাছ, পাখি ও বাদুড়ের জন্য প্রচুর খাবার জোগায়।',
    },
    behavior: {
      en: 'Mayflies are the only insects that moult again after getting functional wings: the dull “dun” (subimago) sheds its skin to become the shiny adult “spinner”.',
      bn: 'মে-মাছিই একমাত্র পতঙ্গ, যারা কার্যকর ডানা পাওয়ার পরও আরেকবার খোলস বদলায়: ম্লান রঙের “ডান” (সাবইমেগো) খোলস ছেড়ে চকচকে প্রাপ্তবয়স্ক “স্পিনার”-এ পরিণত হয়।',
    },
    range: {
      native: [
        [53.3, -7.5],
        [51.1, -1.3],
        [48.8, 2.3],
        [51.0, 10.0],
        [56.0, 10.0],
        [59.3, 18.1],
        [52.2, 21.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Fine sediment and nutrient pollution clogging riverbeds', 'Pesticide run-off'],
        bn: ['সূক্ষ্ম পলি ও পুষ্টি-দূষণে নদীর তলা বুজে যাওয়া', 'কৃষিজমি থেকে গড়িয়ে আসা কীটনাশক'],
      },
      initiatives: {
        en: ['Used as an indicator species in river water-quality monitoring', 'Citizen-science riverfly monitoring schemes in Britain'],
        bn: ['নদীর পানির মান পর্যবেক্ষণে সূচক প্রজাতি হিসেবে ব্যবহৃত', 'ব্রিটেনে নাগরিক-বিজ্ঞান “রিভারফ্লাই” পর্যবেক্ষণ কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'The order name Ephemeroptera comes from Greek for “short-lived wings”.',
        'Its late-May hatch is so easy for trout to catch that anglers nicknamed it “duffer’s fortnight”.',
      ],
      bn: [
        'বর্গের নাম এফেমেরোপটেরা এসেছে গ্রিক শব্দ থেকে, যার অর্থ “ক্ষণস্থায়ী ডানা”।',
        'মে মাসের শেষে এদের দলবদ্ধ উত্থানের সময় ট্রাউট মাছ এত সহজে ধরা পড়ে যে বড়শিওয়ালারা একে “আনাড়িদের পক্ষকাল” বলে ডাকে।',
      ],
    },
    related: ['great-diving-beetle', 'atlantic-salmon'],
  },
  {
    id: 'monsoon-river-prawn',
    commonName: { en: 'Monsoon River Prawn', bn: 'মৌসুমি নদী চিংড়ি' },
    scientificName: 'Macrobrachium malcolmsonii',
    altNames: {
      en: ['Indian River Prawn', 'Godavari River Prawn'],
      bn: ['নদীর চিংড়ি', 'ভারতীয় নদী চিংড়ি'],
    },
    category: 'freshwater',
    wikiTitle: 'Macrobrachium malcolmsonii',
    description: {
      en: 'The monsoon river prawn is a large freshwater prawn of the rivers of the Indian subcontinent. After the giant freshwater prawn, it is the second-largest and commercially most important Macrobrachium species in India, supporting river fisheries in the Godavari, Krishna, Mahanadi and Ganges systems. It has been developed as a candidate for freshwater prawn farming because it grows quickly and fetches a good price.',
      bn: 'মৌসুমি নদী চিংড়ি ভারতীয় উপমহাদেশের নদীর একটি বড় আকারের মিঠা পানির চিংড়ি। গলদা চিংড়ির পরেই এটি ভারতের দ্বিতীয় বৃহত্তম ও বাণিজ্যিকভাবে গুরুত্বপূর্ণ ম্যাক্রোব্র্যাকিয়াম প্রজাতি; গোদাবরী, কৃষ্ণা, মহানদী ও গঙ্গা নদীব্যবস্থায় এর ওপর নির্ভর করে নদীর মৎস্য আহরণ চলে। দ্রুত বাড়ে ও ভালো দাম পাওয়া যায় বলে মিঠা পানির চিংড়ি চাষের জন্য একে সম্ভাবনাময় প্রজাতি হিসেবে গড়ে তোলা হচ্ছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Malacostraca',
      order: 'Decapoda',
      family: 'Palaemonidae',
      genus: 'Macrobrachium',
      species: 'M. malcolmsonii',
    },
    physical: {
      size: { en: 'Large males can approach 20 cm; females smaller', bn: 'বড় পুরুষ প্রায় ২০ সেমি পর্যন্ত হতে পারে; স্ত্রী ছোট' },
      weight: { en: 'Large males can exceed 100 g', bn: 'বড় পুরুষ ১০০ গ্রামেরও বেশি হতে পারে' },
      lifespan: { en: 'About 2–3 years', bn: 'প্রায় ২–৩ বছর' },
      features: {
        en: [
          'Long, stout second walking legs ending in claws, larger in males',
          'Toothed rostrum projecting forward from the head',
          'Greenish-brown to bluish translucent body',
        ],
        bn: [
          'দ্বিতীয় জোড়া হাঁটার পা লম্বা ও মোটা, ডগায় দাঁড়া — পুরুষের ক্ষেত্রে বেশি বড়',
          'মাথার সামনে বেরিয়ে থাকা খাঁজকাটা করাতের মতো তুণ্ড (রোস্ট্রাম)',
          'সবুজাভ-বাদামি থেকে নীলচে আধা-স্বচ্ছ দেহ',
        ],
      },
    },
    habitat: {
      en: 'Large rivers, their tributaries and connected floodplain waters',
      bn: 'বড় নদী, এর শাখানদী ও সংযুক্ত প্লাবনভূমির জলাশয়',
    },
    habitats: ['rivers-lakes', 'wetland'],
    regions: ['south-asia'],
    distribution: {
      en: 'Rivers of peninsular and eastern India, Bangladesh and Pakistan, especially the Godavari, Krishna, Mahanadi, Hooghly and Ganges.',
      bn: 'উপদ্বীপীয় ও পূর্ব ভারত, বাংলাদেশ ও পাকিস্তানের নদী — বিশেষ করে গোদাবরী, কৃষ্ণা, মহানদী, হুগলি ও গঙ্গা।',
    },
    climate: { en: 'Tropical monsoon', bn: 'ক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Omnivore — detritus, algae, worms, insect larvae and small molluscs',
      bn: 'সর্বভুক — পচা জৈব পদার্থ, শৈবাল, কৃমি, পতঙ্গের লার্ভা ও ছোট শামুক-ঝিনুক',
    },
    ecologicalRole: {
      en: 'A bottom-dwelling scavenger and predator that is important prey for river fish, otters and birds.',
      bn: 'তলদেশবাসী আবর্জনাভুক ও শিকারি; নদীর মাছ, ভোঁদড় ও পাখির গুরুত্বপূর্ণ খাদ্য।',
    },
    behavior: {
      en: 'Mostly active at night; breeds during the monsoon, when females carry their eggs under the abdomen until they hatch.',
      bn: 'মূলত রাতে সক্রিয়; বর্ষাকালে প্রজনন করে, তখন স্ত্রী চিংড়ি ডিম ফোটা পর্যন্ত পেটের নিচে ডিম বয়ে বেড়ায়।',
    },
    range: {
      native: [
        [16.9, 81.8],
        [16.5, 80.6],
        [20.5, 85.9],
        [22.6, 88.4],
        [25.6, 85.1],
        [24.4, 88.6],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Dams and barrages blocking river migrations', 'Overfishing, including of egg-bearing females', 'River pollution'],
        bn: ['বাঁধ ও ব্যারাজে নদীপথে চলাচল বাধাগ্রস্ত হওয়া', 'ডিমওয়ালা স্ত্রী চিংড়িসহ অতিরিক্ত আহরণ', 'নদীদূষণ'],
      },
      initiatives: {
        en: ['Hatchery seed production research in India', 'Seasonal fishing restrictions in some rivers'],
        bn: ['ভারতে হ্যাচারিতে পোনা উৎপাদন নিয়ে গবেষণা', 'কিছু নদীতে মৌসুমি মাছ ধরা নিষেধাজ্ঞা'],
      },
    },
    facts: {
      en: [
        'Like other Macrobrachium prawns, its name means “long arm”, referring to the enlarged claw-bearing legs.',
        'Fishers mainly catch it during and after the monsoon floods.',
      ],
      bn: [
        'অন্যান্য ম্যাক্রোব্র্যাকিয়াম চিংড়ির মতো এর গণনামের অর্থও “লম্বা বাহু” — দাঁড়াওয়ালা বড় পায়ের কারণে।',
        'জেলেরা মূলত বর্ষার বন্যার সময় ও তার পরে এটি ধরে।',
      ],
    },
    related: ['giant-freshwater-prawn', 'giant-tiger-prawn', 'red-swamp-crayfish'],
  },
];
