import type { Species } from '@/types';

export const marineInvertebrates1: Species[] = [
  {
    id: 'olive-ridley-sea-turtle',
    commonName: { en: 'Olive Ridley Sea Turtle', bn: 'অলিভ রিডলি কাছিম' },
    scientificName: 'Lepidochelys olivacea',
    altNames: {
      en: ['Olive Ridley', 'Pacific Ridley Sea Turtle'],
      bn: ['জলপাই রঙা কাছিম', 'সামুদ্রিক কাছিম'],
    },
    category: 'marine',
    secondaryCategories: ['reptiles'],
    wikiTitle: 'Olive ridley sea turtle',
    description: {
      en: 'The olive ridley is the smallest and most abundant sea turtle in the world, named for its olive-green, heart-shaped shell. It is the sea turtle most often seen in Bangladesh, where females come ashore to nest on the beaches of St. Martin’s Island, Teknaf and Cox’s Bazar in winter. At a few beaches elsewhere, thousands of females nest together in mass arrivals called “arribadas”.',
      bn: 'অলিভ রিডলি পৃথিবীর সবচেয়ে ছোট ও সংখ্যায় সবচেয়ে বেশি সামুদ্রিক কাছিম; জলপাই-সবুজ হৃদয়াকৃতির খোলসের জন্য এর এমন নাম। বাংলাদেশে সবচেয়ে বেশি দেখা যায় এই কাছিমই — শীতকালে মা কাছিমেরা সেন্ট মার্টিন দ্বীপ, টেকনাফ ও কক্সবাজারের সৈকতে উঠে ডিম পাড়ে। পৃথিবীর কয়েকটি সৈকতে হাজার হাজার মা কাছিম একসঙ্গে ডিম পাড়তে আসে, যাকে “আরিবাদা” বলে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Testudines',
      family: 'Cheloniidae',
      genus: 'Lepidochelys',
      species: 'L. olivacea',
    },
    physical: {
      size: { en: 'Shell length about 60–75 cm', bn: 'খোলসের দৈর্ঘ্য প্রায় ৬০–৭৫ সেমি' },
      weight: { en: 'About 35–50 kg', bn: 'প্রায় ৩৫–৫০ কেজি' },
      lifespan: { en: 'Estimated 50 years or more', bn: 'আনুমানিক ৫০ বছর বা তার বেশি' },
      features: {
        en: ['Rounded, heart-shaped olive-green shell', 'Five or more pairs of side scutes on the shell', 'Relatively large head for its body size'],
        bn: ['গোলাকার, হৃদয়াকৃতির জলপাই-সবুজ খোলস', 'খোলসের দুই পাশে পাঁচ বা তার বেশি জোড়া আঁশফলক', 'দেহের তুলনায় মাথা বেশ বড়'],
      },
    },
    habitat: {
      en: 'Warm coastal and open tropical seas, nesting on sandy beaches',
      bn: 'উষ্ণ উপকূলীয় ও খোলা ক্রান্তীয় সমুদ্র; বালুময় সৈকতে ডিম পাড়ে',
    },
    habitats: ['ocean'],
    regions: ['oceans', 'south-asia', 'southeast-asia', 'south-america', 'africa'],
    distribution: {
      en: 'Tropical Indian, Pacific and Atlantic Oceans; major nesting in Odisha (India), Mexico and Costa Rica, with smaller nesting on Bangladesh’s south-east coast.',
      bn: 'ভারত, প্রশান্ত ও আটলান্টিক মহাসাগরের ক্রান্তীয় অঞ্চল; বড় প্রজননস্থল ভারতের ওড়িশা, মেক্সিকো ও কোস্টারিকা, আর বাংলাদেশের দক্ষিণ-পূর্ব উপকূলে অল্পসংখ্যক কাছিম ডিম পাড়ে।',
    },
    climate: { en: 'Tropical and warm subtropical seas', bn: 'ক্রান্তীয় ও উষ্ণ উপক্রান্তীয় সমুদ্র' },
    diet: {
      en: 'Omnivore — crabs, shrimp, jellyfish, molluscs, fish eggs and algae',
      bn: 'সর্বভুক — কাঁকড়া, চিংড়ি, জেলিফিশ, শামুক-ঝিনুক, মাছের ডিম ও শৈবাল',
    },
    ecologicalRole: {
      en: 'Controls jellyfish and crustacean numbers, and its eggs bring marine nutrients to beach ecosystems.',
      bn: 'জেলিফিশ ও কাঁকড়া-চিংড়ির সংখ্যা নিয়ন্ত্রণে রাখে, আর এর ডিম সৈকতের বাস্তুতন্ত্রে সমুদ্রের পুষ্টি পৌঁছে দেয়।',
    },
    behavior: {
      en: 'Females return to the region where they hatched to lay about 100 eggs per clutch, usually at night.',
      bn: 'মা কাছিম সাধারণত রাতে, যে অঞ্চলে নিজে জন্মেছিল সেখানে ফিরে এসে একবারে প্রায় ১০০টি ডিম পাড়ে।',
    },
    range: {
      native: [
        [20.5, 91.0],
        [19.7, 85.6],
        [12.0, 82.0],
        [15.8, -96.0],
        [10.0, -86.0],
        [5.0, 2.0],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Drowning as bycatch in fishing and shrimp-trawl nets', 'Loss of nesting beaches to tourism, lights and erosion', 'Egg collection and predation by dogs'],
        bn: ['মাছ ধরার জাল ও চিংড়ি ট্রলারে আটকে ডুবে মৃত্যু', 'পর্যটন, আলো ও ভাঙনে ডিম পাড়ার সৈকত হারানো', 'ডিম সংগ্রহ এবং কুকুরের আক্রমণ'],
      },
      initiatives: {
        en: ['Turtle hatcheries and beach patrols on St. Martin’s Island and Cox’s Bazar', 'Turtle Excluder Devices (TEDs) in shrimp trawls'],
        bn: ['সেন্ট মার্টিন দ্বীপ ও কক্সবাজারে কাছিমের হ্যাচারি ও সৈকত পাহারা', 'চিংড়ি ট্রলারে কাছিম বের হওয়ার যন্ত্র (টিইডি) ব্যবহার'],
      },
      assessed: '2008',
    },
    facts: {
      en: [
        'In an arribada, hundreds of thousands of females may nest on one beach within a few days.',
        'The temperature of the sand decides whether hatchlings become male or female.',
      ],
      bn: [
        'আরিবাদার সময় কয়েক দিনের মধ্যে একটি সৈকতে লাখো মা কাছিম ডিম পাড়তে পারে।',
        'বালুর তাপমাত্রাই ঠিক করে দেয় বাচ্চা কাছিম পুরুষ হবে না স্ত্রী।',
      ],
    },
    related: ['green-sea-turtle', 'hawksbill-sea-turtle', 'loggerhead-sea-turtle', 'leatherback-sea-turtle'],
  },
  {
    id: 'hawksbill-sea-turtle',
    commonName: { en: 'Hawksbill Sea Turtle', bn: 'বাজঠুঁটি কাছিম' },
    scientificName: 'Eretmochelys imbricata',
    altNames: {
      en: ['Hawksbill', 'Hawksbill Turtle'],
      bn: ['হকসবিল কাছিম', 'সামুদ্রিক কাছিম'],
    },
    category: 'marine',
    secondaryCategories: ['reptiles'],
    wikiTitle: 'Hawksbill sea turtle',
    description: {
      en: 'The hawksbill is a medium-sized sea turtle named for its narrow, pointed beak that resembles a bird of prey. It lives mainly on tropical coral reefs, where it uses its beak to pull sponges out of crevices. Its beautiful amber-and-brown shell was the main source of “tortoiseshell”, which drove the species to the brink of extinction.',
      bn: 'বাজঠুঁটি কাছিম মাঝারি আকারের সামুদ্রিক কাছিম; শিকারি পাখির ঠোঁটের মতো সরু, চোখা ঠোঁটের জন্য এর এমন নাম। এরা মূলত ক্রান্তীয় প্রবাল প্রাচীরে থাকে এবং ঠোঁট দিয়ে পাথরের খাঁজ থেকে স্পঞ্জ টেনে বের করে খায়। এর সুন্দর বাদামি-সোনালি খোলস থেকেই একসময় “কচ্ছপের খোলস” দিয়ে তৈরি গয়না ও সামগ্রী বানানো হতো, যা এই প্রজাতিকে বিলুপ্তির কিনারে ঠেলে দিয়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Testudines',
      family: 'Cheloniidae',
      genus: 'Eretmochelys',
      species: 'E. imbricata',
    },
    physical: {
      size: { en: 'Shell length about 60–90 cm', bn: 'খোলসের দৈর্ঘ্য প্রায় ৬০–৯০ সেমি' },
      weight: { en: 'About 40–80 kg', bn: 'প্রায় ৪০–৮০ কেজি' },
      lifespan: { en: 'Estimated 30–50 years', bn: 'আনুমানিক ৩০–৫০ বছর' },
      features: {
        en: ['Narrow, hooked, bird-like beak', 'Overlapping shell scutes with a jagged rear edge', 'Amber shell marked with dark and light streaks'],
        bn: ['পাখির ঠোঁটের মতো সরু ও বাঁকানো ঠোঁট', 'খোলসের আঁশফলক একটির ওপর আরেকটি চাপানো, পেছনের কিনারা খাঁজকাটা', 'গাঢ় ও হালকা ডোরাযুক্ত সোনালি-বাদামি খোলস'],
      },
    },
    habitat: {
      en: 'Tropical coral reefs, rocky shores, lagoons and mangrove-fringed bays',
      bn: 'ক্রান্তীয় প্রবাল প্রাচীর, পাথুরে উপকূল, উপহ্রদ ও ম্যানগ্রোভ-ঘেরা উপসাগর',
    },
    habitats: ['coral-reef', 'ocean'],
    regions: ['oceans', 'south-asia', 'southeast-asia', 'oceania', 'north-america'],
    distribution: {
      en: 'Tropical waters of the Atlantic, Indian and Pacific Oceans, including the Bay of Bengal, with key nesting in the Caribbean, Australia and Southeast Asia.',
      bn: 'বঙ্গোপসাগরসহ আটলান্টিক, ভারত ও প্রশান্ত মহাসাগরের ক্রান্তীয় জলরাশি; প্রধান প্রজননস্থল ক্যারিবীয় অঞ্চল, অস্ট্রেলিয়া ও দক্ষিণ-পূর্ব এশিয়া।',
    },
    climate: { en: 'Warm tropical seas', bn: 'উষ্ণ ক্রান্তীয় সমুদ্র' },
    diet: {
      en: 'Mainly sea sponges, plus sea anemones, jellyfish and soft corals',
      bn: 'মূলত সামুদ্রিক স্পঞ্জ, এ ছাড়া সি অ্যানিমোন, জেলিফিশ ও নরম প্রবাল',
    },
    ecologicalRole: {
      en: 'By eating sponges that compete with corals, it helps keep coral reefs healthy.',
      bn: 'প্রবালের সঙ্গে জায়গা দখলের প্রতিযোগিতায় থাকা স্পঞ্জ খেয়ে এরা প্রবাল প্রাচীরকে সুস্থ রাখতে সাহায্য করে।',
    },
    behavior: {
      en: 'Largely solitary; females nest high on the beach, often under vegetation, every two to three years.',
      bn: 'মূলত একাকী থাকে; মা কাছিম প্রতি দুই-তিন বছর পরপর সৈকতের উঁচু অংশে, প্রায়ই ঝোপের নিচে ডিম পাড়ে।',
    },
    range: {
      native: [
        [18.0, -66.0],
        [-11.0, 143.0],
        [5.5, 118.5],
        [16.0, 90.0],
        [-4.5, 55.5],
        [-22.0, 152.0],
      ],
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      threats: {
        en: ['Illegal trade in tortoiseshell', 'Coral reef degradation', 'Bycatch and egg harvesting'],
        bn: ['খোলসের অবৈধ বাণিজ্য', 'প্রবাল প্রাচীরের অবক্ষয়', 'জালে আটকা পড়া ও ডিম সংগ্রহ'],
      },
      initiatives: {
        en: ['International tortoiseshell trade banned under CITES Appendix I', 'Protected nesting beaches and community monitoring'],
        bn: ['সাইটেস পরিশিষ্ট-১ অনুযায়ী খোলসের আন্তর্জাতিক বাণিজ্য নিষিদ্ধ', 'সংরক্ষিত প্রজনন সৈকত ও স্থানীয় জনগোষ্ঠীর নজরদারি'],
      },
      assessed: '2008',
    },
    facts: {
      en: [
        'It is one of the few animals that can eat glass-like sponges, some of which are toxic.',
        'Some hawksbills glow under blue light — the first reptile known to show biofluorescence.',
      ],
      bn: [
        'কাচের মতো কাঁটাযুক্ত, এমনকি কিছু বিষাক্ত স্পঞ্জও খেতে পারে — এমন প্রাণী খুবই কম।',
        'নীল আলোয় কিছু বাজঠুঁটি কাছিমের দেহ জ্বলজ্বল করে; জৈব-প্রতিপ্রভা দেখানো প্রথম জানা সরীসৃপ এটি।',
      ],
    },
    related: ['green-sea-turtle', 'olive-ridley-sea-turtle', 'staghorn-coral'],
  },
  {
    id: 'leatherback-sea-turtle',
    commonName: { en: 'Leatherback Sea Turtle', bn: 'চামড়াপিঠ কাছিম' },
    scientificName: 'Dermochelys coriacea',
    altNames: {
      en: ['Leatherback', 'Lute Turtle', 'Leathery Turtle'],
      bn: ['লেদারব্যাক কাছিম', 'দৈত্য সামুদ্রিক কাছিম', 'চামড়া কাছিম'],
    },
    category: 'marine',
    secondaryCategories: ['reptiles'],
    wikiTitle: 'Leatherback sea turtle',
    description: {
      en: 'The leatherback is the largest living turtle and the only sea turtle without a hard bony shell; instead its back is covered by tough, oily skin over a mosaic of small bones. It travels farther than any other reptile, crossing entire oceans and diving more than 1,000 m in search of jellyfish. It is occasionally recorded in the Bay of Bengal off Bangladesh.',
      bn: 'চামড়াপিঠ কাছিম পৃথিবীর জীবিত কাছিমদের মধ্যে সবচেয়ে বড়, আর একমাত্র সামুদ্রিক কাছিম যার শক্ত হাড়ের খোলস নেই — পিঠ ঢাকা থাকে ছোট ছোট হাড়ের ওপর পুরু, তৈলাক্ত চামড়ায়। জেলিফিশের খোঁজে এরা গোটা মহাসাগর পাড়ি দেয় এবং ১,০০০ মিটারেরও বেশি গভীরে ডুব দিতে পারে; এত দূর আর কোনো সরীসৃপ যাতায়াত করে না। বাংলাদেশের বঙ্গোপসাগরেও মাঝেমধ্যে এদের দেখা মেলে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Testudines',
      family: 'Dermochelyidae',
      genus: 'Dermochelys',
      species: 'D. coriacea',
    },
    physical: {
      size: { en: 'Shell length about 1.5–1.8 m; total length up to about 2.2 m', bn: 'খোলসের দৈর্ঘ্য প্রায় ১.৫–১.৮ মিটার; মোট দৈর্ঘ্য প্রায় ২.২ মিটার পর্যন্ত' },
      weight: { en: 'Usually 250–700 kg; exceptionally over 900 kg', bn: 'সাধারণত ২৫০–৭০০ কেজি; ব্যতিক্রমী ক্ষেত্রে ৯০০ কেজিরও বেশি' },
      lifespan: { en: 'Estimated 30–50 years or more', bn: 'আনুমানিক ৩০–৫০ বছর বা তার বেশি' },
      features: {
        en: ['Leathery, dark back with seven lengthwise ridges', 'Very long front flippers', 'Backward-pointing spines in the throat to hold slippery jellyfish'],
        bn: ['লম্বালম্বি সাতটি শিরাযুক্ত চামড়ার মতো কালচে পিঠ', 'খুব লম্বা সামনের পাখনা', 'গলার ভেতরে পেছনমুখী কাঁটা, যা পিচ্ছিল জেলিফিশ আটকে রাখে'],
      },
    },
    habitat: {
      en: 'Open ocean, from tropical to cold temperate waters; nests on tropical beaches',
      bn: 'ক্রান্তীয় থেকে শীতল নাতিশীতোষ্ণ খোলা সমুদ্র; ক্রান্তীয় সৈকতে ডিম পাড়ে',
    },
    habitats: ['ocean'],
    regions: ['oceans', 'south-america', 'africa', 'southeast-asia', 'north-america'],
    distribution: {
      en: 'All tropical and temperate oceans, ranging as far north as Norway and Alaska; major nesting in the Caribbean, West Africa and Southeast Asia.',
      bn: 'সব ক্রান্তীয় ও নাতিশীতোষ্ণ মহাসাগর, উত্তরে নরওয়ে ও আলাস্কা পর্যন্ত; প্রধান প্রজননস্থল ক্যারিবীয় অঞ্চল, পশ্চিম আফ্রিকা ও দক্ষিণ-পূর্ব এশিয়া।',
    },
    climate: { en: 'Tropical to cold temperate seas', bn: 'ক্রান্তীয় থেকে শীতল নাতিশীতোষ্ণ সমুদ্র' },
    diet: { en: 'Almost entirely jellyfish and other soft-bodied drifting animals', bn: 'প্রায় পুরোপুরি জেলিফিশ ও অন্যান্য নরম দেহের ভাসমান প্রাণী' },
    ecologicalRole: {
      en: 'A major predator of jellyfish, helping to prevent jellyfish blooms that harm fish stocks.',
      bn: 'জেলিফিশের প্রধান শিকারি হিসেবে জেলিফিশের অতিবৃদ্ধি ঠেকায়, যা মাছের মজুত রক্ষায় সহায়ক।',
    },
    behavior: {
      en: 'Highly migratory and a deep diver; keeps its body warmer than the surrounding water, allowing it to feed in cold seas.',
      bn: 'দীর্ঘ পথ পরিযায়ী ও গভীর ডুবুরি; আশপাশের পানির চেয়ে দেহ উষ্ণ রাখতে পারে বলে ঠান্ডা সমুদ্রেও খাবার খুঁজে বেড়ায়।',
    },
    range: {
      native: [
        [10.5, -61.0],
        [-1.0, 9.0],
        [-0.5, 132.5],
        [40.0, -40.0],
        [-30.0, 10.0],
        [15.0, 88.0],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Swallowing plastic bags mistaken for jellyfish', 'Bycatch on longlines and in gillnets', 'Egg harvesting and loss of nesting beaches'],
        bn: ['জেলিফিশ ভেবে প্লাস্টিকের ব্যাগ গিলে ফেলা', 'লংলাইন ও ফাঁসজালে আটকা পড়া', 'ডিম সংগ্রহ ও প্রজনন সৈকত হারানো'],
      },
      initiatives: {
        en: ['Nesting-beach protection in Trinidad, Gabon and Indonesia', 'Fishing gear changes to reduce bycatch'],
        bn: ['ত্রিনিদাদ, গ্যাবন ও ইন্দোনেশিয়ায় প্রজনন সৈকত সংরক্ষণ', 'জালে আটকা কমাতে মাছ ধরার সরঞ্জামে পরিবর্তন'],
      },
      assessed: '2013',
    },
    facts: {
      en: [
        'Leatherbacks have survived for over 100 million years as a lineage.',
        'One tagged leatherback swam about 20,000 km from Indonesia to the US coast.',
      ],
      bn: [
        'চামড়াপিঠ কাছিমের বংশধারা ১০ কোটি বছরেরও বেশি সময় ধরে টিকে আছে।',
        'চিহ্নিত একটি কাছিম ইন্দোনেশিয়া থেকে যুক্তরাষ্ট্রের উপকূল পর্যন্ত প্রায় ২০,০০০ কিলোমিটার সাঁতরে গিয়েছিল।',
      ],
    },
    related: ['green-sea-turtle', 'olive-ridley-sea-turtle', 'moon-jellyfish'],
  },
  {
    id: 'loggerhead-sea-turtle',
    commonName: { en: 'Loggerhead Sea Turtle', bn: 'লগারহেড কাছিম' },
    scientificName: 'Caretta caretta',
    altNames: {
      en: ['Loggerhead', 'Loggerhead Turtle'],
      bn: ['বড়মাথা কাছিম', 'সামুদ্রিক কাছিম'],
    },
    category: 'marine',
    secondaryCategories: ['reptiles'],
    wikiTitle: 'Loggerhead sea turtle',
    description: {
      en: 'The loggerhead is a large sea turtle with a reddish-brown shell and a massive head that powers its strong jaws. Those jaws can crush the shells of conches, clams and crabs. It is the most common nesting sea turtle in the United States and the Mediterranean, and young loggerheads ride ocean currents across entire ocean basins.',
      bn: 'লগারহেড লালচে-বাদামি খোলসের বড় আকারের সামুদ্রিক কাছিম; বিশাল মাথায় থাকে শক্তিশালী চোয়াল। এই চোয়াল দিয়ে এরা শঙ্খ, ঝিনুক ও কাঁকড়ার শক্ত খোলস ভেঙে খায়। যুক্তরাষ্ট্র ও ভূমধ্যসাগরে সবচেয়ে বেশি ডিম পাড়ে এই কাছিম, আর এর বাচ্চারা সমুদ্রস্রোতে ভেসে গোটা মহাসাগর পাড়ি দেয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Testudines',
      family: 'Cheloniidae',
      genus: 'Caretta',
      species: 'C. caretta',
    },
    physical: {
      size: { en: 'Shell length about 80–110 cm', bn: 'খোলসের দৈর্ঘ্য প্রায় ৮০–১১০ সেমি' },
      weight: { en: 'About 80–200 kg', bn: 'প্রায় ৮০–২০০ কেজি' },
      lifespan: { en: 'Estimated 50–70 years', bn: 'আনুমানিক ৫০–৭০ বছর' },
      features: {
        en: ['Very large head with powerful jaws', 'Reddish-brown, heart-shaped shell', 'Yellowish underside'],
        bn: ['শক্তিশালী চোয়ালযুক্ত অনেক বড় মাথা', 'লালচে-বাদামি হৃদয়াকৃতির খোলস', 'পেটের দিক হলদেটে'],
      },
    },
    habitat: {
      en: 'Coastal bays, continental shelves and the open ocean; nests on subtropical sandy beaches',
      bn: 'উপকূলীয় উপসাগর, মহীসোপান ও খোলা সমুদ্র; উপক্রান্তীয় বালুময় সৈকতে ডিম পাড়ে',
    },
    habitats: ['ocean', 'coral-reef'],
    regions: ['oceans', 'north-america', 'europe', 'oceania', 'south-asia'],
    distribution: {
      en: 'Subtropical and temperate waters of the Atlantic, Pacific and Indian Oceans and the Mediterranean; largest nesting sites in Florida and Oman.',
      bn: 'আটলান্টিক, প্রশান্ত ও ভারত মহাসাগর এবং ভূমধ্যসাগরের উপক্রান্তীয় ও নাতিশীতোষ্ণ জলরাশি; সবচেয়ে বড় প্রজননস্থল ফ্লোরিডা ও ওমানে।',
    },
    climate: { en: 'Subtropical and warm temperate seas', bn: 'উপক্রান্তীয় ও উষ্ণ নাতিশীতোষ্ণ সমুদ্র' },
    diet: {
      en: 'Carnivore — crabs, conchs, clams, sea urchins and jellyfish',
      bn: 'মাংসাশী — কাঁকড়া, শঙ্খ, ঝিনুক, সামুদ্রিক কাঁটাযুক্ত প্রাণী (সি আর্চিন) ও জেলিফিশ',
    },
    ecologicalRole: {
      en: 'Crushing shellfish recycles nutrients on the sea floor, and its shell carries over 100 kinds of hitchhiking organisms.',
      bn: 'খোলসযুক্ত প্রাণী ভেঙে খাওয়ার ফলে সমুদ্রতলে পুষ্টি পুনর্চক্রিত হয়, আর এর খোলসে শতাধিক প্রজাতির জীব আশ্রয় নেয়।',
    },
    behavior: {
      en: 'Hatchlings drift for years in ocean gyres before settling in coastal feeding grounds; adults migrate thousands of kilometres to nest.',
      bn: 'বাচ্চারা বহু বছর মহাসাগরের ঘূর্ণি স্রোতে ভেসে বেড়ায়, পরে উপকূলের খাদ্যক্ষেত্রে থিতু হয়; প্রাপ্তবয়স্করা ডিম পাড়তে হাজার হাজার কিলোমিটার পাড়ি দেয়।',
    },
    range: {
      native: [
        [27.0, -80.0],
        [20.5, 58.8],
        [37.0, 22.0],
        [-24.0, 152.5],
        [-28.0, 32.5],
        [33.0, 132.0],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Bycatch in trawls, longlines and gillnets', 'Coastal development and artificial lighting at nesting beaches', 'Plastic pollution and climate change'],
        bn: ['ট্রলার, লংলাইন ও ফাঁসজালে আটকা পড়া', 'প্রজনন সৈকতে উপকূলীয় স্থাপনা ও কৃত্রিম আলো', 'প্লাস্টিক দূষণ ও জলবায়ু পরিবর্তন'],
      },
      initiatives: {
        en: ['Mandatory Turtle Excluder Devices in US shrimp fisheries', 'Beach lighting rules and nest protection in Florida and Greece'],
        bn: ['যুক্তরাষ্ট্রের চিংড়ি আহরণে কাছিম বের হওয়ার যন্ত্র বাধ্যতামূলক', 'ফ্লোরিডা ও গ্রিসে সৈকতের আলো নিয়ন্ত্রণ ও বাসা সুরক্ষা'],
      },
      assessed: '2015',
    },
    facts: {
      en: [
        'Hatchlings use Earth’s magnetic field like a built-in compass to navigate.',
        'Its genus and species names are the same: Caretta caretta.',
      ],
      bn: [
        'বাচ্চা কাছিম পৃথিবীর চৌম্বকক্ষেত্রকে অন্তর্নিহিত কম্পাসের মতো ব্যবহার করে পথ চেনে।',
        'এর গণ ও প্রজাতির নাম একই — Caretta caretta।',
      ],
    },
    related: ['green-sea-turtle', 'olive-ridley-sea-turtle', 'hawksbill-sea-turtle'],
  },
  {
    id: 'mangrove-horseshoe-crab',
    commonName: { en: 'Mangrove Horseshoe Crab', bn: 'রাজকাঁকড়া' },
    scientificName: 'Carcinoscorpius rotundicauda',
    altNames: {
      en: ['Horseshoe Crab', 'Round-tailed Horseshoe Crab'],
      bn: ['অশ্বখুর কাঁকড়া', 'ম্যানগ্রোভ রাজকাঁকড়া'],
    },
    category: 'marine',
    wikiTitle: 'Mangrove horseshoe crab',
    description: {
      en: 'The mangrove horseshoe crab is a “living fossil” whose body plan has barely changed in hundreds of millions of years. Despite its name it is not a true crab but a closer relative of spiders and scorpions. It lives in muddy mangrove creeks and estuaries, including the Sundarbans, and its blue, copper-based blood is valued in medical research.',
      bn: 'রাজকাঁকড়াকে “জীবন্ত জীবাশ্ম” বলা হয়, কারণ কোটি কোটি বছরে এর দেহের গঠন প্রায় বদলায়নি। নামে কাঁকড়া হলেও এটি আসলে প্রকৃত কাঁকড়া নয়, বরং মাকড়সা ও বিছার নিকটাত্মীয়। সুন্দরবনসহ কাদাময় ম্যানগ্রোভ খাল ও মোহনায় এরা বাস করে; তামাসমৃদ্ধ নীল রক্তের জন্য চিকিৎসা গবেষণায় এর বিশেষ কদর রয়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Merostomata',
      order: 'Xiphosura',
      family: 'Limulidae',
      genus: 'Carcinoscorpius',
      species: 'C. rotundicauda',
    },
    physical: {
      size: { en: 'Up to about 30–35 cm long including the tail', bn: 'লেজসহ প্রায় ৩০–৩৫ সেমি পর্যন্ত লম্বা' },
      weight: { en: 'Usually under 1 kg', bn: 'সাধারণত ১ কেজির কম' },
      lifespan: { en: 'Thought to be 10–20 years', bn: 'ধারণা করা হয় ১০–২০ বছর' },
      features: {
        en: ['Horseshoe-shaped, olive-brown shell', 'Long tail (telson) that is round in cross-section', 'Ten legs hidden beneath the shell'],
        bn: ['ঘোড়ার খুরের মতো জলপাই-বাদামি খোলস', 'লম্বা লেজ, যার প্রস্থচ্ছেদ গোলাকার', 'খোলসের নিচে লুকানো দশটি পা'],
      },
    },
    habitat: {
      en: 'Muddy mangrove creeks, tidal flats and river estuaries',
      bn: 'কাদাময় ম্যানগ্রোভ খাল, জোয়ার-ভাটার চর ও নদীর মোহনা',
    },
    habitats: ['mangrove', 'wetland'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Coasts of the Bay of Bengal (Bangladesh and India) through Southeast Asia to southern China and the Philippines.',
      bn: 'বঙ্গোপসাগরের উপকূল (বাংলাদেশ ও ভারত) থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে দক্ষিণ চীন ও ফিলিপাইন পর্যন্ত।',
    },
    climate: { en: 'Tropical monsoon coasts', bn: 'ক্রান্তীয় মৌসুমি উপকূল' },
    diet: {
      en: 'Worms, small clams, snails and detritus dug from the mud',
      bn: 'কাদা খুঁড়ে পাওয়া কেঁচোজাতীয় প্রাণী, ছোট ঝিনুক, শামুক ও জৈব আবর্জনা',
    },
    ecologicalRole: {
      en: 'Stirs up mangrove mud while feeding, and its eggs are food for shorebirds and fish.',
      bn: 'খাবার খোঁজার সময় ম্যানগ্রোভের কাদা আলগা করে দেয়, আর এর ডিম সৈকতের পাখি ও মাছের খাদ্য।',
    },
    behavior: {
      en: 'Mostly bottom-dwelling; pairs come into the intertidal zone at high tide to spawn, the male clinging to the female.',
      bn: 'মূলত তলদেশে থাকে; জোয়ারের সময় জোড়ায় জোড়ায় অগভীর পাড়ে এসে ডিম পাড়ে, পুরুষটি স্ত্রীর খোলস আঁকড়ে ধরে থাকে।',
    },
    range: {
      native: [
        [21.9, 89.3],
        [21.6, 88.3],
        [13.5, 100.3],
        [1.4, 103.8],
        [22.3, 113.9],
        [10.5, 123.0],
      ],
    },
    conservation: {
      status: 'DD',
      trend: 'unknown',
      threats: {
        en: ['Mangrove clearing for shrimp farms', 'Harvest for food and bait', 'Accidental capture in fishing nets'],
        bn: ['চিংড়ি ঘেরের জন্য ম্যানগ্রোভ কেটে ফেলা', 'খাদ্য ও টোপ হিসেবে সংগ্রহ', 'মাছ ধরার জালে আটকা পড়া'],
      },
      initiatives: {
        en: ['Protection of the Sundarbans mangrove ecosystem', 'Horseshoe crab surveys and release programmes in Southeast Asia'],
        bn: ['সুন্দরবনের ম্যানগ্রোভ বাস্তুতন্ত্র সংরক্ষণ', 'দক্ষিণ-পূর্ব এশিয়ায় রাজকাঁকড়া জরিপ ও অবমুক্তকরণ কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'Horseshoe crabs appeared more than 400 million years ago — before the dinosaurs.',
        'Eating this species can cause dangerous poisoning, as it may carry tetrodotoxin.',
      ],
      bn: [
        'রাজকাঁকড়ার পূর্বপুরুষেরা ডাইনোসরেরও আগে, ৪০ কোটি বছরেরও বেশি আগে পৃথিবীতে এসেছিল।',
        'সতর্কতা: এই প্রজাতি খেলে মারাত্মক বিষক্রিয়া হতে পারে, কারণ এর দেহে টেট্রোডোটক্সিন থাকতে পারে।',
      ],
    },
    related: ['mud-crab', 'giant-tiger-prawn', 'sundari'],
  },
  {
    id: 'mud-crab',
    commonName: { en: 'Mud Crab', bn: 'শিলা কাঁকড়া' },
    scientificName: 'Scylla serrata',
    altNames: {
      en: ['Mangrove Crab', 'Giant Mud Crab', 'Black Crab'],
      bn: ['কাঁকড়া', 'ম্যানগ্রোভ কাঁকড়া', 'বড় কাঁকড়া'],
    },
    category: 'marine',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Scylla serrata',
    description: {
      en: 'The mud crab is a large, heavy-clawed swimming crab of mangrove estuaries and one of the most valuable seafoods of the Indo-Pacific. In Bangladesh it is caught in the Sundarbans and fattened in coastal ponds in Khulna, Satkhira and Cox’s Bazar, and live crabs are a major export. It digs burrows in the mud and can survive out of water for days if kept moist.',
      bn: 'শিলা কাঁকড়া ম্যানগ্রোভ মোহনার বড় আকারের, ভারী দাঁড়াওয়ালা সাঁতারু কাঁকড়া এবং ভারত-প্রশান্ত অঞ্চলের অন্যতম দামি সামুদ্রিক খাবার। বাংলাদেশে সুন্দরবন থেকে এটি ধরা হয় এবং খুলনা, সাতক্ষীরা ও কক্সবাজারের উপকূলীয় ঘেরে মোটাতাজা করা হয়; জীবন্ত কাঁকড়া রপ্তানি এখন বড় ব্যবসা। এরা কাদায় গর্ত খুঁড়ে থাকে এবং ভেজা রাখলে কয়েক দিন পানির বাইরেও বেঁচে থাকতে পারে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Malacostraca',
      order: 'Decapoda',
      family: 'Portunidae',
      genus: 'Scylla',
      species: 'S. serrata',
    },
    physical: {
      size: { en: 'Carapace width usually 15–24 cm', bn: 'খোলসের প্রস্থ সাধারণত ১৫–২৪ সেমি' },
      weight: { en: 'Usually 0.5–2 kg; large males up to about 3 kg', bn: 'সাধারণত ০.৫–২ কেজি; বড় পুরুষ প্রায় ৩ কেজি পর্যন্ত' },
      lifespan: { en: 'About 3–4 years', bn: 'প্রায় ৩–৪ বছর' },
      features: {
        en: ['Smooth, dark green to brownish carapace with nine teeth on each side', 'Massive, powerful claws', 'Last pair of legs flattened into paddles for swimming'],
        bn: ['মসৃণ, গাঢ় সবুজ থেকে বাদামি খোলস, দুই পাশে নয়টি করে খাঁজ', 'বিশাল ও শক্তিশালী দাঁড়া', 'শেষ জোড়া পা বইঠার মতো চ্যাপ্টা, সাঁতারে কাজে লাগে'],
      },
    },
    habitat: {
      en: 'Mangrove forests, muddy estuaries and brackish tidal creeks',
      bn: 'ম্যানগ্রোভ বন, কাদাময় মোহনা ও লোনা পানির জোয়ার-ভাটার খাল',
    },
    habitats: ['mangrove', 'wetland'],
    regions: ['south-asia', 'southeast-asia', 'africa', 'oceania', 'east-asia'],
    distribution: {
      en: 'Indo-West Pacific, from East Africa and the Red Sea through the Bay of Bengal and Southeast Asia to Australia and the Pacific islands.',
      bn: 'পূর্ব আফ্রিকা ও লোহিত সাগর থেকে বঙ্গোপসাগর ও দক্ষিণ-পূর্ব এশিয়া হয়ে অস্ট্রেলিয়া ও প্রশান্ত মহাসাগরীয় দ্বীপপুঞ্জ পর্যন্ত।',
    },
    climate: { en: 'Tropical and subtropical coasts', bn: 'ক্রান্তীয় ও উপক্রান্তীয় উপকূল' },
    diet: {
      en: 'Omnivorous scavenger — snails, clams, small crabs, worms, dead fish and plant matter',
      bn: 'সর্বভুক ও আবর্জনাভোজী — শামুক, ঝিনুক, ছোট কাঁকড়া, কেঁচোজাতীয় প্রাণী, মরা মাছ ও উদ্ভিদাংশ',
    },
    ecologicalRole: {
      en: 'A key predator and scavenger of mangrove mudflats whose burrows aerate the soil.',
      bn: 'ম্যানগ্রোভের কাদাচরের গুরুত্বপূর্ণ শিকারি ও আবর্জনাভোজী; এর গর্ত মাটিতে বাতাস চলাচল বাড়ায়।',
    },
    behavior: {
      en: 'Mostly nocturnal and aggressive; females migrate offshore to release eggs in saltier water.',
      bn: 'মূলত নিশাচর ও আক্রমণাত্মক; ডিম ছাড়ার জন্য স্ত্রী কাঁকড়া বেশি লোনা গভীর সমুদ্রের দিকে চলে যায়।',
    },
    range: {
      native: [
        [21.8, 89.5],
        [21.4, 92.0],
        [-6.5, 39.5],
        [10.0, 106.5],
        [-12.5, 131.0],
        [10.7, 122.5],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Overharvesting of wild crabs, including egg-bearing females', 'Loss of mangroves', 'Collection of juveniles to stock fattening ponds'],
        bn: ['ডিমওয়ালা স্ত্রীসহ বুনো কাঁকড়ার অতিরিক্ত আহরণ', 'ম্যানগ্রোভ বন ধ্বংস', 'ঘের ভরাট করতে বাচ্চা কাঁকড়া ধরা'],
      },
      initiatives: {
        en: ['Seasonal crab-catching ban in the Bangladesh Sundarbans during breeding months', 'Hatchery production of crab seed'],
        bn: ['প্রজনন মৌসুমে বাংলাদেশের সুন্দরবনে কাঁকড়া ধরায় নিষেধাজ্ঞা', 'হ্যাচারিতে কাঁকড়ার পোনা উৎপাদন'],
      },
    },
    facts: {
      en: [
        'Soft-shell crabs from Bangladesh — harvested just after moulting — are exported worldwide.',
        'Its claws are strong enough to break a finger, so it is handled with care.',
      ],
      bn: [
        'খোলস বদলানোর ঠিক পরে ধরা বাংলাদেশের নরম খোলসের কাঁকড়া (সফট শেল ক্র্যাব) বিশ্বের নানা দেশে রপ্তানি হয়।',
        'এর দাঁড়া আঙুল ভেঙে দেওয়ার মতো শক্তিশালী, তাই সাবধানে ধরতে হয়।',
      ],
    },
    related: ['giant-tiger-prawn', 'mangrove-horseshoe-crab', 'sundari', 'giant-freshwater-prawn'],
  },
  {
    id: 'giant-tiger-prawn',
    commonName: { en: 'Giant Tiger Prawn', bn: 'বাগদা চিংড়ি' },
    scientificName: 'Penaeus monodon',
    altNames: {
      en: ['Black Tiger Shrimp', 'Tiger Prawn', 'Asian Tiger Shrimp'],
      bn: ['বাগদা', 'টাইগার চিংড়ি', 'কালো বাগদা'],
    },
    category: 'marine',
    secondaryCategories: ['freshwater'],
    wikiTitle: 'Penaeus monodon',
    description: {
      en: 'The giant tiger prawn is a large marine shrimp with dark and pale bands across its body, and one of the most important farmed seafoods in the world. In Bangladesh, bagda farming in the brackish ghers of Khulna, Satkhira and Bagerhat earns large export income and is often called “white gold”. Wild adults live offshore while young prawns grow up in mangrove estuaries such as the Sundarbans.',
      bn: 'বাগদা চিংড়ি গায়ে গাঢ় ও হালকা ডোরাকাটা বড় আকারের সামুদ্রিক চিংড়ি এবং বিশ্বের অন্যতম প্রধান চাষকৃত সামুদ্রিক খাবার। বাংলাদেশে খুলনা, সাতক্ষীরা ও বাগেরহাটের লোনা পানির ঘেরে বাগদা চাষ থেকে প্রচুর রপ্তানি আয় হয়, তাই একে “সাদা সোনা” বলা হয়। প্রাপ্তবয়স্ক বাগদা গভীর সমুদ্রে থাকে, আর এদের বাচ্চারা সুন্দরবনের মতো ম্যানগ্রোভ মোহনায় বেড়ে ওঠে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Malacostraca',
      order: 'Decapoda',
      family: 'Penaeidae',
      genus: 'Penaeus',
      species: 'P. monodon',
    },
    physical: {
      size: { en: 'Females up to about 33 cm long; males smaller', bn: 'স্ত্রী চিংড়ি প্রায় ৩৩ সেমি পর্যন্ত লম্বা; পুরুষ ছোট' },
      weight: { en: 'Large individuals 100–300 g', bn: 'বড়গুলো ১০০–৩০০ গ্রাম' },
      lifespan: { en: 'About 1.5–2 years', bn: 'প্রায় দেড় থেকে দুই বছর' },
      features: {
        en: ['Alternating dark and pale bands across the body', 'Toothed beak-like rostrum', 'Blue-grey to greenish-brown colour'],
        bn: ['দেহজুড়ে পালাক্রমে গাঢ় ও হালকা ডোরা', 'মাথার সামনে করাতের মতো খাঁজকাটা ঠোঁট (রোস্ট্রাম)', 'নীলচে-ধূসর থেকে সবুজাভ-বাদামি রং'],
      },
    },
    habitat: {
      en: 'Mangrove estuaries and coastal waters as juveniles; sandy-muddy sea floor offshore as adults',
      bn: 'বাচ্চা অবস্থায় ম্যানগ্রোভ মোহনা ও উপকূলীয় পানি; প্রাপ্তবয়স্ক অবস্থায় গভীর সমুদ্রের বালু-কাদাময় তলদেশ',
    },
    habitats: ['ocean', 'mangrove', 'urban-farmland'],
    regions: ['south-asia', 'southeast-asia', 'africa', 'oceania', 'east-asia'],
    distribution: {
      en: 'Indo-West Pacific from East Africa through the Bay of Bengal to Australia and Japan; farmed widely in Bangladesh, India, Vietnam and Thailand.',
      bn: 'পূর্ব আফ্রিকা থেকে বঙ্গোপসাগর হয়ে অস্ট্রেলিয়া ও জাপান পর্যন্ত; বাংলাদেশ, ভারত, ভিয়েতনাম ও থাইল্যান্ডে ব্যাপকভাবে চাষ হয়।',
    },
    climate: { en: 'Tropical and subtropical coastal waters', bn: 'ক্রান্তীয় ও উপক্রান্তীয় উপকূলীয় পানি' },
    diet: {
      en: 'Omnivore — small crustaceans, worms, molluscs, algae and detritus',
      bn: 'সর্বভুক — ছোট কাঁকড়া-চিংড়িজাতীয় প্রাণী, কেঁচোজাতীয় প্রাণী, শামুক-ঝিনুক, শৈবাল ও জৈব আবর্জনা',
    },
    ecologicalRole: {
      en: 'An important link in coastal food webs, eaten by fish, birds and dolphins.',
      bn: 'উপকূলীয় খাদ্যশৃঙ্খলের গুরুত্বপূর্ণ কড়ি; মাছ, পাখি ও ডলফিন এদের খায়।',
    },
    behavior: {
      en: 'Burrows in the sediment by day and feeds at night; females spawn offshore and larvae drift back to estuaries.',
      bn: 'দিনে তলার কাদা-বালুতে লুকিয়ে থাকে, রাতে খাবার খোঁজে; স্ত্রী চিংড়ি গভীর সমুদ্রে ডিম ছাড়ে আর লার্ভা স্রোতে ভেসে মোহনায় ফিরে আসে।',
    },
    range: {
      native: [
        [21.5, 89.8],
        [20.5, 91.5],
        [-5.0, 39.5],
        [9.5, 105.5],
        [-16.0, 145.8],
        [14.0, 100.5],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Destructive collection of wild post-larvae, which kills huge numbers of other fish fry', 'Viral diseases such as white spot syndrome in farms', 'Mangrove loss to shrimp ponds'],
        bn: ['প্রাকৃতিক উৎস থেকে পোনা ধরা, যাতে অন্য অসংখ্য মাছের পোনা মারা যায়', 'ঘেরে হোয়াইট স্পট রোগের মতো ভাইরাস সংক্রমণ', 'চিংড়ি ঘেরের জন্য ম্যানগ্রোভ ধ্বংস'],
      },
      initiatives: {
        en: ['Ban on wild shrimp fry collection in Bangladesh', 'Hatchery-produced, disease-free post-larvae'],
        bn: ['বাংলাদেশে প্রাকৃতিক উৎস থেকে চিংড়ির পোনা ধরা নিষিদ্ধ', 'হ্যাচারিতে উৎপাদিত রোগমুক্ত পোনা'],
      },
    },
    facts: {
      en: [
        'Frozen shrimp is one of Bangladesh’s largest export products after garments.',
        'Despite its name it is a marine species — but its young tolerate brackish water.',
      ],
      bn: [
        'পোশাকের পর হিমায়িত চিংড়ি বাংলাদেশের অন্যতম বড় রপ্তানি পণ্য।',
        'এটি আসলে সামুদ্রিক প্রজাতি, তবে এর বাচ্চারা লোনা-মিঠা মেশানো পানিতেও টিকে থাকতে পারে।',
      ],
    },
    related: ['giant-freshwater-prawn', 'mud-crab', 'hilsa'],
  },
  {
    id: 'giant-clam',
    commonName: { en: 'Giant Clam', bn: 'দৈত্য ঝিনুক' },
    scientificName: 'Tridacna gigas',
    altNames: {
      en: ['Giant Tridacna', 'Killer Clam'],
      bn: ['বিশাল ঝিনুক', 'জায়ান্ট ক্ল্যাম'],
    },
    category: 'marine',
    wikiTitle: 'Giant clam',
    description: {
      en: 'The giant clam is the largest living bivalve mollusc, with a wavy shell that can exceed a metre across. Its colourful mantle hosts symbiotic algae that make food from sunlight, so the clam “farms” its own meals on shallow coral reefs. Once settled as a youngster, it stays fixed in the same spot for the rest of its long life.',
      bn: 'দৈত্য ঝিনুক পৃথিবীর বৃহত্তম জীবিত দ্বিপুটী ঝিনুক; এর ঢেউখেলানো খোলস এক মিটারেরও বেশি চওড়া হতে পারে। এর রঙিন ম্যান্টলে বাস করে মিথোজীবী শৈবাল, যা সূর্যের আলো থেকে খাদ্য তৈরি করে — ফলে অগভীর প্রবাল প্রাচীরে ঝিনুকটি যেন নিজের খাবার নিজেই “চাষ” করে। ছোটবেলায় একবার কোথাও বসে গেলে বাকি দীর্ঘ জীবন সেখানেই কাটিয়ে দেয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Mollusca',
      class: 'Bivalvia',
      order: 'Cardiida',
      family: 'Cardiidae',
      genus: 'Tridacna',
      species: 'T. gigas',
    },
    physical: {
      size: { en: 'Shell up to about 120–137 cm across', bn: 'খোলস প্রায় ১২০–১৩৭ সেমি পর্যন্ত চওড়া' },
      weight: { en: 'Up to about 200–250 kg', bn: 'প্রায় ২০০–২৫০ কেজি পর্যন্ত' },
      lifespan: { en: '100 years or more', bn: '১০০ বছর বা তার বেশি' },
      features: {
        en: ['Massive shell with four to five deep folds', 'Brightly coloured mantle with blue, green or golden spots', 'Hundreds of tiny light-sensing “eyes” along the mantle'],
        bn: ['চার-পাঁচটি গভীর ভাঁজযুক্ত বিশাল খোলস', 'নীল, সবুজ বা সোনালি ছোপওয়ালা উজ্জ্বল ম্যান্টল', 'ম্যান্টলের কিনারায় আলো শনাক্ত করা শত শত ক্ষুদ্র “চোখ”'],
      },
    },
    habitat: {
      en: 'Sunlit sandy and coral-rubble areas of shallow coral reefs and lagoons',
      bn: 'অগভীর প্রবাল প্রাচীর ও উপহ্রদের রোদেলা বালু ও প্রবালখণ্ডময় তলদেশ',
    },
    habitats: ['coral-reef'],
    regions: ['southeast-asia', 'oceania'],
    distribution: {
      en: 'Indo-Pacific reefs from the Philippines and Indonesia to northern Australia, Papua New Guinea and the western Pacific islands.',
      bn: 'ফিলিপাইন ও ইন্দোনেশিয়া থেকে উত্তর অস্ট্রেলিয়া, পাপুয়া নিউ গিনি ও পশ্চিম প্রশান্ত মহাসাগরীয় দ্বীপপুঞ্জের প্রবাল প্রাচীর।',
    },
    climate: { en: 'Warm, clear tropical seas', bn: 'উষ্ণ ও স্বচ্ছ ক্রান্তীয় সমুদ্র' },
    diet: {
      en: 'Sugars from symbiotic algae in its tissues, supplemented by filter-feeding on plankton',
      bn: 'দেহের ভেতরের মিথোজীবী শৈবালের তৈরি শর্করা, সঙ্গে পানি ছেঁকে প্লাংকটন',
    },
    ecologicalRole: {
      en: 'Filters and cleans reef water, and its shell provides shelter for fish and other reef animals.',
      bn: 'প্রাচীরের পানি ছেঁকে পরিষ্কার রাখে, আর এর খোলস মাছ ও অন্যান্য প্রাণীর আশ্রয় দেয়।',
    },
    behavior: {
      en: 'Fixed in place as an adult; it slowly closes its shell when shaded but cannot trap a diver, despite old legends.',
      bn: 'প্রাপ্তবয়স্ক অবস্থায় এক জায়গায় স্থির থাকে; ছায়া পড়লে ধীরে খোলস বন্ধ করে, তবে প্রচলিত গল্পের মতো ডুবুরিকে আটকে ফেলতে পারে না।',
    },
    range: {
      native: [
        [-18.0, 147.0],
        [-6.0, 147.5],
        [10.0, 120.0],
        [-8.5, 117.0],
        [7.5, 134.5],
      ],
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      threats: {
        en: ['Overharvesting for meat and the shell trade', 'Coral bleaching from ocean warming', 'Poaching on remote reefs'],
        bn: ['মাংস ও খোলস বাণিজ্যের জন্য অতিরিক্ত আহরণ', 'সমুদ্র উষ্ণায়নে প্রবাল বিবর্ণ হওয়া', 'দূরবর্তী প্রাচীরে চোরাশিকার'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II to control trade', 'Mariculture and restocking programmes in the Philippines and the Pacific'],
        bn: ['বাণিজ্য নিয়ন্ত্রণে সাইটেস পরিশিষ্ট-২-এ তালিকাভুক্ত', 'ফিলিপাইন ও প্রশান্ত অঞ্চলে চাষ ও পুনঃমজুত কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'A giant clam can release hundreds of millions of eggs in a single spawning.',
        'It has disappeared from the reefs of several countries because of overharvesting.',
      ],
      bn: [
        'একবারে একটি দৈত্য ঝিনুক কোটি কোটি ডিম ছাড়তে পারে।',
        'অতিরিক্ত আহরণের ফলে বেশ কয়েকটি দেশের প্রবাল প্রাচীর থেকে এরা হারিয়ে গেছে।',
      ],
    },
    related: ['staghorn-coral', 'crown-of-thorns-starfish', 'ocellaris-clownfish'],
  },
  {
    id: 'crown-of-thorns-starfish',
    commonName: { en: 'Crown-of-thorns Starfish', bn: 'কাঁটার মুকুট তারামাছ' },
    scientificName: 'Acanthaster planci',
    altNames: {
      en: ['Crown-of-thorns Sea Star', 'COTS'],
      bn: ['কাঁটাযুক্ত তারামাছ', 'ক্রাউন-অব-থর্নস স্টারফিশ'],
    },
    category: 'marine',
    wikiTitle: 'Crown-of-thorns starfish',
    description: {
      en: 'The crown-of-thorns starfish is a large, many-armed sea star covered in long venomous spines. It feeds on living coral by pushing its stomach out over the coral and digesting the tissue. In normal numbers it is part of a healthy reef, but population outbreaks can strip whole reefs of coral, as has happened repeatedly on the Great Barrier Reef.',
      bn: 'কাঁটার মুকুট তারামাছ লম্বা বিষাক্ত কাঁটায় ঢাকা, বহু বাহুবিশিষ্ট বড় আকারের তারামাছ। এটি নিজের পাকস্থলী মুখ দিয়ে বের করে জীবন্ত প্রবালের ওপর বিছিয়ে দেয় এবং প্রবালের কোষ হজম করে খায়। স্বাভাবিক সংখ্যায় থাকলে এটি সুস্থ প্রাচীরেরই অংশ, কিন্তু হঠাৎ সংখ্যা বেড়ে গেলে গোটা প্রাচীরের প্রবাল শেষ করে ফেলতে পারে — গ্রেট ব্যারিয়ার রিফে বারবার এমনটি ঘটেছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Echinodermata',
      class: 'Asteroidea',
      order: 'Valvatida',
      family: 'Acanthasteridae',
      genus: 'Acanthaster',
      species: 'A. planci',
    },
    physical: {
      size: { en: 'Usually 25–35 cm across; up to about 80 cm', bn: 'সাধারণত ২৫–৩৫ সেমি চওড়া; প্রায় ৮০ সেমি পর্যন্ত' },
      weight: { en: 'Up to about 3 kg', bn: 'প্রায় ৩ কেজি পর্যন্ত' },
      lifespan: { en: 'About 5–8 years', bn: 'প্রায় ৫–৮ বছর' },
      features: {
        en: ['Usually 12–21 arms', 'Body covered in sharp, venomous spines up to 5 cm long', 'Colours range from purple and red to grey-green'],
        bn: ['সাধারণত ১২–২১টি বাহু', 'দেহজুড়ে ৫ সেমি পর্যন্ত লম্বা ধারালো বিষাক্ত কাঁটা', 'রং বেগুনি ও লাল থেকে ধূসর-সবুজ পর্যন্ত'],
      },
    },
    habitat: { en: 'Tropical coral reefs and lagoons', bn: 'ক্রান্তীয় প্রবাল প্রাচীর ও উপহ্রদ' },
    habitats: ['coral-reef'],
    regions: ['oceans', 'south-asia', 'southeast-asia', 'oceania', 'africa'],
    distribution: {
      en: 'Coral reefs across the Indo-Pacific, from the Red Sea and East Africa to the Pacific coast of Central America.',
      bn: 'লোহিত সাগর ও পূর্ব আফ্রিকা থেকে মধ্য আমেরিকার প্রশান্ত উপকূল পর্যন্ত ভারত-প্রশান্ত অঞ্চলের প্রবাল প্রাচীর।',
    },
    climate: { en: 'Warm tropical seas', bn: 'উষ্ণ ক্রান্তীয় সমুদ্র' },
    diet: { en: 'Living coral polyps, especially fast-growing branching corals', bn: 'জীবন্ত প্রবাল পলিপ, বিশেষ করে দ্রুত বাড়া শাখাযুক্ত প্রবাল' },
    ecologicalRole: {
      en: 'At normal densities it keeps fast-growing corals in check and boosts reef diversity; in outbreaks it is a major cause of coral loss.',
      bn: 'স্বাভাবিক সংখ্যায় দ্রুত বাড়া প্রবাল নিয়ন্ত্রণে রেখে প্রাচীরের বৈচিত্র্য বাড়ায়; কিন্তু অতিবৃদ্ধির সময় প্রবাল ধ্বংসের বড় কারণ হয়ে ওঠে।',
    },
    behavior: {
      en: 'Mostly feeds at night and hides in crevices by day; a single female can release tens of millions of eggs a season.',
      bn: 'মূলত রাতে খায় এবং দিনে পাথরের খাঁজে লুকিয়ে থাকে; একটি স্ত্রী তারামাছ এক মৌসুমে কয়েক কোটি ডিম ছাড়তে পারে।',
    },
    range: {
      native: [
        [-18.0, 147.5],
        [10.0, 120.0],
        [-17.5, -149.5],
        [22.0, 38.5],
        [4.0, 73.5],
        [10.5, 93.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened — outbreaks, not decline, are the concern', 'Outbreaks linked to nutrient runoff and overfishing of its predators'],
        bn: ['বিপন্ন নয় — এর সংখ্যা কমা নয়, বরং অতিবৃদ্ধিই উদ্বেগের বিষয়', 'পুষ্টিসমৃদ্ধ পানি নিষ্কাশন ও শিকারি প্রাণীর অতিরিক্ত আহরণে অতিবৃদ্ধি ঘটে'],
      },
      initiatives: {
        en: ['Culling by divers using bile-salt or vinegar injections on the Great Barrier Reef', 'Reducing farm runoff and protecting predators like the giant triton'],
        bn: ['গ্রেট ব্যারিয়ার রিফে ডুবুরিদের মাধ্যমে ইনজেকশন দিয়ে সংখ্যা নিয়ন্ত্রণ', 'কৃষিজ নিষ্কাশন কমানো এবং জায়ান্ট ট্রাইটন শামুকের মতো শিকারি রক্ষা'],
      },
    },
    facts: {
      en: [
        'Its spines carry a venom that causes very painful wounds, nausea and swelling.',
        'One adult can eat several square metres of coral in a year.',
      ],
      bn: [
        'সতর্কতা: এর কাঁটার বিষে তীব্র যন্ত্রণাদায়ক ক্ষত, বমিভাব ও ফোলাভাব হয়।',
        'একটি প্রাপ্তবয়স্ক তারামাছ বছরে কয়েক বর্গমিটার প্রবাল খেয়ে ফেলতে পারে।',
      ],
    },
    related: ['staghorn-coral', 'giant-clam'],
  },
];
