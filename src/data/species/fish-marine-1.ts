import type { Species } from '@/types';

export const fishMarine1: Species[] = [
  {
    id: 'bombay-duck',
    commonName: { en: 'Bombay Duck', bn: 'লইট্টা' },
    scientificName: 'Harpadon nehereus',
    altNames: {
      en: ['Bummalo', 'Bombil', 'Lizardfish'],
      bn: ['লইট্যা মাছ', 'লোটে মাছ', 'লইট্টা শুঁটকি'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Bombay duck',
    description: {
      en: 'Despite its name, the Bombay duck is not a bird but a soft, jelly-like lizardfish of the northern Indian Ocean. It is one of the most important catches of the Bay of Bengal coast, eaten fresh or sun-dried into the famous dried fish of Chattogram and Cox’s Bazar. Its large mouth bristles with needle-sharp teeth.',
      bn: 'নামে "ডাক" (হাঁস) থাকলেও লইট্টা আসলে উত্তর ভারত মহাসাগরের নরম, জেলির মতো শরীরের একধরনের লিজার্ডফিশ। বঙ্গোপসাগর উপকূলের অন্যতম গুরুত্বপূর্ণ মাছ এটি — তাজা ভাজা-ভুনা হিসেবে যেমন খাওয়া হয়, তেমনি রোদে শুকিয়ে চট্টগ্রাম ও কক্সবাজারের বিখ্যাত লইট্টা শুঁটকিও বানানো হয়। এদের বড় মুখে সুচের মতো ধারালো দাঁত থাকে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Aulopiformes',
      family: 'Synodontidae',
      genus: 'Harpadon',
      species: 'H. nehereus',
    },
    physical: {
      size: { en: 'Usually 20–25 cm; up to about 40 cm', bn: 'সাধারণত ২০–২৫ সেমি; সর্বোচ্চ প্রায় ৪০ সেমি' },
      weight: { en: 'Typically 50–150 g', bn: 'সাধারণত ৫০–১৫০ গ্রাম' },
      lifespan: { en: 'Short-lived; about 2–3 years', bn: 'স্বল্পায়ু; প্রায় ২–৩ বছর' },
      features: {
        en: ['Soft, translucent, very watery flesh', 'Wide mouth with long, backward-pointing needle teeth', 'Small eyes and a slender, pale grey body'],
        bn: ['নরম, প্রায় স্বচ্ছ ও অত্যন্ত জলীয় মাংস', 'চওড়া মুখে পেছনমুখী লম্বা সুচালো দাঁত', 'ছোট চোখ এবং সরু, হালকা ধূসর দেহ'],
      },
    },
    habitat: {
      en: 'Muddy, turbid coastal waters and estuaries, especially near large river mouths',
      bn: 'কাদাময় ও ঘোলা উপকূলীয় পানি এবং মোহনা, বিশেষ করে বড় নদীর মুখের কাছাকাছি',
    },
    habitats: ['ocean', 'mangrove'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'oceans'],
    distribution: {
      en: 'Northern Indian Ocean and western Pacific — most abundant off Bangladesh, India (Mumbai and Gujarat) and Myanmar.',
      bn: 'উত্তর ভারত মহাসাগর ও পশ্চিম প্রশান্ত মহাসাগর — বাংলাদেশ, ভারতের মুম্বাই-গুজরাট উপকূল ও মিয়ানমারের সাগরে সবচেয়ে বেশি পাওয়া যায়।',
    },
    climate: { en: 'Warm tropical monsoon seas', bn: 'উষ্ণ ক্রান্তীয় মৌসুমি সাগর' },
    diet: {
      en: 'Carnivore — small fish, shrimps and other crustaceans, and even smaller members of its own species',
      bn: 'মাংসাশী — ছোট মাছ, চিংড়ি ও অন্যান্য খোলসযুক্ত প্রাণী; এমনকি নিজের প্রজাতির ছোট মাছও খায়',
    },
    ecologicalRole: {
      en: 'An abundant mid-level predator that links small shrimps and fish to larger predators and supports coastal fisheries.',
      bn: 'প্রচুর সংখ্যায় থাকা মধ্যম স্তরের শিকারি, যা ছোট চিংড়ি-মাছ থেকে বড় শিকারি প্রাণী পর্যন্ত খাদ্যশৃঙ্খলকে যুক্ত রাখে এবং উপকূলীয় মৎস্যসম্পদের ভিত্তি গড়ে।',
    },
    behavior: {
      en: 'Lives in shoals near the bottom and rises to feed; catches peak during and after the monsoon.',
      bn: 'ঝাঁক বেঁধে তলদেশের কাছাকাছি থাকে এবং খাবারের খোঁজে ওপরে ওঠে; বর্ষা ও বর্ষার পরে সবচেয়ে বেশি ধরা পড়ে।',
    },
    range: {
      native: [
        [21.3, 91.6],
        [21.4, 89.6],
        [18.9, 72.6],
        [21.0, 69.2],
        [16.0, 97.0],
      ],
    },
    conservation: {
      status: 'NT',
      trend: 'unknown',
      threats: {
        en: ['Heavy fishing pressure, including catch of juveniles', 'Fine-mesh set-bag nets in estuaries', 'Coastal pollution'],
        bn: ['অতিরিক্ত আহরণ, বিশেষ করে ছোট মাছ ধরা', 'মোহনায় সূক্ষ্ম ফাঁসের বেহুন্দি জাল', 'উপকূলীয় দূষণ'],
      },
      initiatives: {
        en: ['Seasonal marine fishing bans in Bangladesh and India', 'Regulation of net mesh sizes'],
        bn: ['বাংলাদেশ ও ভারতে সাগরে মৌসুমি মাছ ধরা নিষেধাজ্ঞা', 'জালের ফাঁসের মাপ নিয়ন্ত্রণ'],
      },
    },
    facts: {
      en: [
        'The English name may come from the "Bombay Dak" mail trains that carried the smelly dried fish inland.',
        'Fresh Bombay duck is about 90% water, which is why it is so soft.',
      ],
      bn: [
        'ইংরেজি নামটি সম্ভবত "বোম্বে ডাক" (ডাকগাড়ি) থেকে এসেছে, যেটিতে করে তীব্র গন্ধের শুঁটকি দেশের ভেতরে পাঠানো হতো।',
        'তাজা লইট্টার শরীরের প্রায় ৯০ শতাংশই পানি — তাই এটি এত নরম।',
      ],
    },
    related: ['silver-pomfret', 'largehead-hairtail', 'indian-mackerel', 'hilsa'],
  },
  {
    id: 'silver-pomfret',
    commonName: { en: 'Silver Pomfret', bn: 'রূপচাঁদা' },
    scientificName: 'Pampus argenteus',
    altNames: {
      en: ['Pomfret', 'White Pomfret'],
      bn: ['পমফ্রেট', 'সাদা রূপচাঁদা'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Silver pomfret',
    description: {
      en: 'The silver pomfret is a flat, diamond-shaped fish with a shining silver body, prized across South and East Asia for its delicate white flesh. In Bangladesh it is one of the most expensive and best-loved sea fish, usually fried whole. Overfishing has made large pomfret increasingly scarce.',
      bn: 'রূপচাঁদা চ্যাপ্টা, হীরার মতো আকৃতির উজ্জ্বল রুপালি মাছ, যার নরম সাদা মাংসের জন্য দক্ষিণ ও পূর্ব এশিয়াজুড়ে এর ব্যাপক কদর। বাংলাদেশে এটি সবচেয়ে দামি ও জনপ্রিয় সামুদ্রিক মাছগুলোর একটি; সাধারণত আস্ত ভেজে খাওয়া হয়। অতিরিক্ত আহরণের ফলে বড় আকারের রূপচাঁদা দিন দিন দুর্লভ হয়ে উঠছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Scombriformes',
      family: 'Stromateidae',
      genus: 'Pampus',
      species: 'P. argenteus',
    },
    physical: {
      size: { en: 'Commonly 15–30 cm; up to about 60 cm', bn: 'সাধারণত ১৫–৩০ সেমি; সর্বোচ্চ প্রায় ৬০ সেমি' },
      weight: { en: 'Usually 100–500 g; large fish over 1 kg', bn: 'সাধারণত ১০০–৫০০ গ্রাম; বড়গুলো ১ কেজির বেশি' },
      lifespan: { en: 'About 5–7 years', bn: 'প্রায় ৫–৭ বছর' },
      features: {
        en: ['Deep, strongly flattened silver body', 'No pelvic fins and a small, blunt-snouted mouth', 'Deeply forked tail with a longer lower lobe'],
        bn: ['গভীর ও খুব চ্যাপ্টা রুপালি দেহ', 'শ্রোণী পাখনা নেই; মুখ ছোট ও ভোঁতা', 'গভীরভাবে চেরা লেজ, যার নিচের ভাগ লম্বা'],
      },
    },
    habitat: {
      en: 'Shallow coastal waters over muddy bottoms, often near estuaries',
      bn: 'কাদাময় তলদেশের অগভীর উপকূলীয় পানি, প্রায়ই মোহনার কাছাকাছি',
    },
    habitats: ['ocean'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'oceans'],
    distribution: {
      en: 'Indo-West Pacific from the Persian Gulf through the Bay of Bengal to Southeast Asia, China and Japan.',
      bn: 'পারস্য উপসাগর থেকে বঙ্গোপসাগর হয়ে দক্ষিণ-পূর্ব এশিয়া, চীন ও জাপান পর্যন্ত ভারত-পশ্চিম প্রশান্ত মহাসাগরীয় অঞ্চল।',
    },
    climate: { en: 'Tropical and warm-temperate seas', bn: 'ক্রান্তীয় ও উষ্ণ-নাতিশীতোষ্ণ সাগর' },
    diet: {
      en: 'Jellyfish, comb jellies, small crustaceans and other zooplankton',
      bn: 'জেলিফিশ, কম্ব জেলি, ছোট খোলসযুক্ত প্রাণী ও অন্যান্য প্রাণিকণা',
    },
    ecologicalRole: {
      en: 'One of the few fish that eats jellyfish regularly, helping control their numbers in coastal waters.',
      bn: 'নিয়মিত জেলিফিশ খায় এমন অল্প কিছু মাছের একটি, ফলে উপকূলীয় পানিতে জেলিফিশের সংখ্যা নিয়ন্ত্রণে সাহায্য করে।',
    },
    behavior: {
      en: 'Forms schools near the bottom by day and migrates seasonally between deeper water and inshore spawning grounds.',
      bn: 'দিনে তলদেশের কাছে ঝাঁক বেঁধে থাকে এবং ঋতুভেদে গভীর পানি ও উপকূলের প্রজননক্ষেত্রের মধ্যে যাতায়াত করে।',
    },
    range: {
      native: [
        [21.2, 91.4],
        [18.9, 72.5],
        [26.5, 52.0],
        [12.8, 100.7],
        [30.0, 122.8],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Overfishing, including capture of juveniles', 'Bottom trawling of spawning grounds', 'Coastal habitat degradation'],
        bn: ['অতিরিক্ত আহরণ, বিশেষ করে ছোট মাছ ধরা', 'প্রজননক্ষেত্রে তলদেশ-ঘষা ট্রলিং', 'উপকূলীয় আবাসস্থলের অবক্ষয়'],
      },
      initiatives: {
        en: ['65-day marine fishing ban in Bangladesh waters', 'Minimum size limits in some fisheries'],
        bn: ['বাংলাদেশের সমুদ্রসীমায় ৬৫ দিনের মাছ ধরা নিষেধাজ্ঞা', 'কিছু মৎস্যক্ষেত্রে ধরার জন্য ন্যূনতম আকারের সীমা'],
      },
    },
    facts: {
      en: [
        'In Kuwait the silver pomfret (zubaidi) is considered a national delicacy.',
        'Adults have no pelvic fins at all.',
      ],
      bn: [
        'কুয়েতে রূপচাঁদা ("জুবাইদি") জাতীয় সুস্বাদু খাবার হিসেবে বিবেচিত।',
        'প্রাপ্তবয়স্ক রূপচাঁদার কোনো শ্রোণী পাখনাই থাকে না।',
      ],
    },
    related: ['bombay-duck', 'indian-mackerel', 'largehead-hairtail'],
  },
  {
    id: 'barramundi',
    commonName: { en: 'Barramundi', bn: 'ভেটকি' },
    scientificName: 'Lates calcarifer',
    altNames: {
      en: ['Asian Sea Bass', 'Giant Sea Perch', 'Koral'],
      bn: ['কোরাল', 'কোরাল মাছ', 'এশীয় সি বাস'],
    },
    category: 'fish',
    secondaryCategories: ['marine', 'freshwater'],
    wikiTitle: 'Barramundi',
    description: {
      en: 'The barramundi or Asian sea bass is a large, silvery predatory fish that moves between the sea, estuaries and rivers. Known as bhetki or koral in Bangladesh, it is a premium table fish of the Sundarbans and the Chattogram coast and is widely farmed. Most individuals start life as males and later change into females.',
      bn: 'ভেটকি বা কোরাল বড় আকারের রুপালি শিকারি মাছ, যা সাগর, মোহনা ও নদীর মধ্যে চলাচল করে। সুন্দরবন ও চট্টগ্রাম উপকূলের এই মাছটি খাবার হিসেবে খুবই দামি এবং ব্যাপকভাবে চাষও হয়। মজার ব্যাপার হলো, অধিকাংশ ভেটকি জীবনের শুরুতে পুরুষ থাকে, পরে স্ত্রী মাছে রূপান্তরিত হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Perciformes',
      family: 'Latidae',
      genus: 'Lates',
      species: 'L. calcarifer',
    },
    physical: {
      size: { en: 'Commonly 60–120 cm; up to about 1.8 m', bn: 'সাধারণত ৬০–১২০ সেমি; সর্বোচ্চ প্রায় ১.৮ মিটার' },
      weight: { en: 'Usually 3–20 kg; record fish around 60 kg', bn: 'সাধারণত ৩–২০ কেজি; রেকর্ড আকারের মাছ প্রায় ৬০ কেজি' },
      lifespan: { en: 'Up to about 20 years', bn: 'প্রায় ২০ বছর পর্যন্ত' },
      features: {
        en: ['Elongated silver body with a concave head profile', 'Large mouth and reddish eyes that glow in light', 'Spiny front dorsal fin joined to a soft rear part'],
        bn: ['লম্বাটে রুপালি দেহ; মাথার ওপরের রেখা খানিকটা অবতল', 'বড় মুখ এবং আলোতে লালচে দেখায় এমন চোখ', 'সামনের কাঁটাযুক্ত পৃষ্ঠপাখনা পেছনের নরম অংশের সঙ্গে যুক্ত'],
      },
    },
    habitat: {
      en: 'Coastal seas, estuaries, mangrove creeks, lagoons and lower rivers',
      bn: 'উপকূলীয় সাগর, মোহনা, ম্যানগ্রোভের খাল, উপহ্রদ ও নদীর নিম্নাংশ',
    },
    habitats: ['ocean', 'mangrove', 'rivers-lakes'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'oceania', 'oceans'],
    distribution: {
      en: 'Indo-West Pacific from the Persian Gulf and India through Bangladesh and Southeast Asia to southern China, Papua New Guinea and northern Australia.',
      bn: 'পারস্য উপসাগর ও ভারত থেকে বাংলাদেশ, দক্ষিণ-পূর্ব এশিয়া হয়ে দক্ষিণ চীন, পাপুয়া নিউগিনি ও উত্তর অস্ট্রেলিয়া পর্যন্ত।',
    },
    climate: { en: 'Tropical, warm coastal and brackish waters', bn: 'ক্রান্তীয় উষ্ণ উপকূলীয় ও লোনা পানি' },
    diet: {
      en: 'Carnivore — fish, prawns and crabs; young fish eat small crustaceans',
      bn: 'মাংসাশী — মাছ, চিংড়ি ও কাঁকড়া; বাচ্চারা ছোট খোলসযুক্ত প্রাণী খায়',
    },
    ecologicalRole: {
      en: 'A top predator of estuaries and mangrove creeks that helps regulate populations of smaller fish and crustaceans.',
      bn: 'মোহনা ও ম্যানগ্রোভ খালের শীর্ষ শিকারি, যা ছোট মাছ ও খোলসযুক্ত প্রাণীর সংখ্যা নিয়ন্ত্রণে রাখে।',
    },
    behavior: {
      en: 'Catadromous: adults spawn in coastal waters and many young move up rivers to grow, later returning to the sea.',
      bn: 'ক্যাটাড্রোমাস মাছ: প্রাপ্তবয়স্করা উপকূলের সাগরে ডিম পাড়ে, আর অনেক বাচ্চা নদীর উজানে গিয়ে বড় হয়ে আবার সাগরে ফিরে আসে।',
    },
    range: {
      native: [
        [21.8, 89.6],
        [21.9, 91.7],
        [10.0, 106.8],
        [-8.0, 145.0],
        [-12.4, 130.8],
        [-16.8, 146.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Loss of mangroves and estuarine nursery habitat', 'Overfishing of wild stocks', 'Dams blocking river migration'],
        bn: ['ম্যানগ্রোভ ও মোহনার শিশু-মাছের আবাসস্থল ধ্বংস', 'প্রাকৃতিক মজুদের অতিরিক্ত আহরণ', 'নদীতে বাঁধের কারণে চলাচল বাধাগ্রস্ত হওয়া'],
      },
      initiatives: {
        en: ['Hatchery-based aquaculture reducing pressure on wild fish', 'Fishing size and bag limits in Australia'],
        bn: ['হ্যাচারিভিত্তিক চাষ, যা প্রাকৃতিক মাছের ওপর চাপ কমায়', 'অস্ট্রেলিয়ায় মাছ ধরার আকার ও সংখ্যার সীমা'],
      },
    },
    facts: {
      en: [
        '"Barramundi" comes from an Aboriginal Australian language and means "large-scaled river fish".',
        'Most barramundi are protandrous — they mature as males and change sex to female after a few years.',
      ],
      bn: [
        '"ব্যারামুন্ডি" নামটি অস্ট্রেলীয় আদিবাসী ভাষা থেকে এসেছে, যার অর্থ "বড় আঁশের নদীর মাছ"।',
        'অধিকাংশ ভেটকি প্রথমে পুরুষ হিসেবে প্রাপ্তবয়স্ক হয় এবং কয়েক বছর পর লিঙ্গ বদলে স্ত্রী মাছ হয়ে যায়।',
      ],
    },
    related: ['hilsa', 'bombay-duck', 'sundari'],
  },
  {
    id: 'indian-mackerel',
    commonName: { en: 'Indian Mackerel', bn: 'ভারতীয় ম্যাকারেল' },
    scientificName: 'Rastrelliger kanagurta',
    altNames: {
      en: ['Mackerel', 'Bangda'],
      bn: ['ম্যাকারেল মাছ', 'বাংড়া'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Indian mackerel',
    description: {
      en: 'The Indian mackerel is a small, fast-swimming schooling fish of warm coastal seas and one of the most important food fish of the Indian Ocean. It filters plankton with its long gill rakers, swimming with its mouth wide open. It is caught in large numbers off Bangladesh, India and Southeast Asia and is cheap, oily and nutritious.',
      bn: 'ভারতীয় ম্যাকারেল উষ্ণ উপকূলীয় সাগরের ছোট, দ্রুতগামী ঝাঁকবদ্ধ মাছ এবং ভারত মহাসাগরের অন্যতম গুরুত্বপূর্ণ খাদ্য-মাছ। মুখ বড় করে খুলে সাঁতার কাটার সময় লম্বা ফুলকা-ছাঁকনি দিয়ে এরা প্রাণিকণা ছেঁকে খায়। বাংলাদেশ, ভারত ও দক্ষিণ-পূর্ব এশিয়ার সাগরে প্রচুর ধরা পড়ে; দামে সস্তা, তেলযুক্ত ও পুষ্টিকর।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Scombriformes',
      family: 'Scombridae',
      genus: 'Rastrelliger',
      species: 'R. kanagurta',
    },
    physical: {
      size: { en: 'Usually 20–25 cm; up to about 35 cm', bn: 'সাধারণত ২০–২৫ সেমি; সর্বোচ্চ প্রায় ৩৫ সেমি' },
      weight: { en: 'About 100–250 g', bn: 'প্রায় ১০০–২৫০ গ্রাম' },
      lifespan: { en: 'About 3–4 years', bn: 'প্রায় ৩–৪ বছর' },
      features: {
        en: ['Streamlined body with dark wavy lines and golden stripes on the back', 'A black spot near the base of the pectoral fin', 'Row of small finlets in front of the forked tail'],
        bn: ['মসৃণ টর্পেডো আকৃতির দেহ; পিঠে গাঢ় ঢেউখেলানো দাগ ও সোনালি রেখা', 'বক্ষপাখনার গোড়ার কাছে একটি কালো ছোপ', 'চেরা লেজের সামনে সারিবদ্ধ ছোট ছোট পাখনা'],
      },
    },
    habitat: {
      en: 'Warm, shallow coastal waters and bays, usually where surface temperatures stay above 17 °C',
      bn: 'উষ্ণ ও অগভীর উপকূলীয় পানি ও উপসাগর, সাধারণত যেখানে পানির উপরিভাগের তাপমাত্রা ১৭ ডিগ্রি সেলসিয়াসের ওপরে থাকে',
    },
    habitats: ['ocean', 'coral-reef'],
    regions: ['south-asia', 'southeast-asia', 'africa', 'oceania', 'oceans'],
    distribution: {
      en: 'Indo-West Pacific from East Africa and the Red Sea through the Bay of Bengal to Indonesia, the Philippines and northern Australia.',
      bn: 'পূর্ব আফ্রিকা ও লোহিত সাগর থেকে বঙ্গোপসাগর হয়ে ইন্দোনেশিয়া, ফিলিপাইন ও উত্তর অস্ট্রেলিয়া পর্যন্ত।',
    },
    climate: { en: 'Tropical seas', bn: 'ক্রান্তীয় সাগর' },
    diet: {
      en: 'Filter feeder — phytoplankton, copepods, shrimp larvae and fish eggs',
      bn: 'ছাঁকনভোজী — উদ্ভিদকণা, কোপেপড, চিংড়ির লার্ভা ও মাছের ডিম',
    },
    ecologicalRole: {
      en: 'A key forage fish that turns plankton into food for tunas, seerfish, dolphins and seabirds.',
      bn: 'গুরুত্বপূর্ণ খাদ্য-মাছ, যা প্রাণিকণা ও উদ্ভিদকণাকে টুনা, সুরমা, ডলফিন ও সামুদ্রিক পাখির খাবারে রূপান্তর করে।',
    },
    behavior: {
      en: 'Travels in dense, fast-moving schools near the surface, often feeding with mouths agape.',
      bn: 'পানির উপরিভাগের কাছাকাছি ঘন ও দ্রুতগামী ঝাঁকে চলাফেরা করে; প্রায়ই মুখ হাঁ করে খাবার ছেঁকে নেয়।',
    },
    range: {
      native: [
        [21.0, 91.0],
        [15.0, 73.4],
        [10.0, 75.8],
        [12.5, 100.6],
        [-5.0, 39.6],
        [5.0, 119.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Intense commercial fishing', 'Warming seas shifting its range', 'Coastal pollution'],
        bn: ['ব্যাপক বাণিজ্যিক আহরণ', 'সাগরের উষ্ণায়নে বিচরণ এলাকার পরিবর্তন', 'উপকূলীয় দূষণ'],
      },
      initiatives: {
        en: ['Seasonal fishing bans in Bangladesh and India', 'Regional stock assessments'],
        bn: ['বাংলাদেশ ও ভারতে মৌসুমি মাছ ধরা নিষেধাজ্ঞা', 'আঞ্চলিক মজুদ নিরূপণ'],
      },
    },
    facts: {
      en: [
        'It feeds by swimming with its mouth wide open, like a tiny plankton net.',
        'It is rich in omega-3 fatty acids, making it a cheap source of healthy fats.',
      ],
      bn: [
        'মুখ পুরো খুলে সাঁতার কেটে এরা ছোট্ট জালের মতো প্রাণিকণা ছেঁকে খায়।',
        'এতে প্রচুর ওমেগা-৩ ফ্যাটি অ্যাসিড আছে, তাই এটি স্বাস্থ্যকর চর্বির সস্তা উৎস।',
      ],
    },
    related: ['bombay-duck', 'silver-pomfret', 'largehead-hairtail'],
  },
  {
    id: 'largehead-hairtail',
    commonName: { en: 'Largehead Hairtail', bn: 'ছুরি মাছ' },
    scientificName: 'Trichiurus lepturus',
    altNames: {
      en: ['Ribbonfish', 'Cutlassfish', 'Hairtail'],
      bn: ['ছুরি', 'ফিতা মাছ', 'ছুরি শুঁটকি'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Largehead hairtail',
    description: {
      en: 'The largehead hairtail is a long, ribbon-like silver fish with no tail fin, named for its thin, whip-like tail. Found in warm seas worldwide, it is a common catch in the Bay of Bengal, where it is eaten fresh and dried into popular churi shutki. It often hangs vertically in the water, head up, waiting for prey.',
      bn: 'ছুরি মাছ লম্বা, ফিতার মতো রুপালি মাছ; এর কোনো লেজপাখনা নেই, শরীর ক্রমশ সরু হয়ে চাবুকের মতো শেষ হয়েছে। পৃথিবীর উষ্ণ সাগরজুড়ে দেখা যায়; বঙ্গোপসাগরে এটি খুব পরিচিত মাছ, তাজা যেমন খাওয়া হয় তেমনি জনপ্রিয় ছুরি শুঁটকিও বানানো হয়। শিকারের অপেক্ষায় প্রায়ই মাথা ওপরে রেখে পানিতে খাড়া হয়ে ঝুলে থাকে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Scombriformes',
      family: 'Trichiuridae',
      genus: 'Trichiurus',
      species: 'T. lepturus',
    },
    physical: {
      size: { en: 'Commonly 50–100 cm; up to about 2.3 m', bn: 'সাধারণত ৫০–১০০ সেমি; সর্বোচ্চ প্রায় ২.৩ মিটার' },
      weight: { en: 'Usually under 2 kg; up to about 5 kg', bn: 'সাধারণত ২ কেজির কম; সর্বোচ্চ প্রায় ৫ কেজি' },
      lifespan: { en: 'Up to about 15 years', bn: 'প্রায় ১৫ বছর পর্যন্ত' },
      features: {
        en: ['Extremely long, flattened, scaleless silver body', 'Large jaws with fang-like teeth', 'No tail fin — the body tapers to a hair-like point'],
        bn: ['অত্যন্ত লম্বা, চ্যাপ্টা ও আঁশবিহীন রুপালি দেহ', 'বড় চোয়ালে শ্বদন্তের মতো দাঁত', 'লেজপাখনা নেই — দেহ ক্রমশ সরু হয়ে চুলের মতো বিন্দুতে শেষ'],
      },
    },
    habitat: {
      en: 'Continental shelves over muddy bottoms, from shallow coastal waters to about 350 m deep',
      bn: 'মহীসোপানের কাদাময় তলদেশ, অগভীর উপকূল থেকে প্রায় ৩৫০ মিটার গভীরতা পর্যন্ত',
    },
    habitats: ['ocean'],
    regions: ['south-asia', 'east-asia', 'africa', 'europe', 'north-america', 'south-america', 'oceans'],
    distribution: {
      en: 'Tropical and temperate seas worldwide, including the Bay of Bengal, East China Sea, Atlantic coasts of the Americas and Africa.',
      bn: 'বিশ্বের ক্রান্তীয় ও নাতিশীতোষ্ণ সাগরে বিস্তৃত — বঙ্গোপসাগর, পূর্ব চীন সাগর এবং আমেরিকা ও আফ্রিকার আটলান্টিক উপকূলসহ।',
    },
    climate: { en: 'Tropical to warm-temperate seas', bn: 'ক্রান্তীয় থেকে উষ্ণ-নাতিশীতোষ্ণ সাগর' },
    diet: {
      en: 'Carnivore — adults eat fish, squid and shrimps; juveniles eat krill and small crustaceans',
      bn: 'মাংসাশী — প্রাপ্তবয়স্করা মাছ, স্কুইড ও চিংড়ি খায়; বাচ্চারা ক্রিল ও ছোট খোলসযুক্ত প্রাণী খায়',
    },
    ecologicalRole: {
      en: 'An abundant predator on the continental shelf and important prey for sharks, tunas and dolphins.',
      bn: 'মহীসোপানের প্রচুর সংখ্যক শিকারি মাছ এবং হাঙর, টুনা ও ডলফিনের গুরুত্বপূর্ণ খাবার।',
    },
    behavior: {
      en: 'Moves up toward the surface at night to feed and returns near the bottom by day.',
      bn: 'রাতে খাবারের খোঁজে পানির ওপরের দিকে উঠে আসে এবং দিনে আবার তলদেশের কাছে ফিরে যায়।',
    },
    range: {
      native: [
        [21.3, 91.0],
        [30.0, 123.0],
        [35.0, -75.0],
        [-34.5, 18.0],
        [-25.0, -46.0],
        [38.5, 0.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Heavy trawl fishing in parts of Asia', 'Bycatch of juveniles in shrimp trawls'],
        bn: ['এশিয়ার কিছু অঞ্চলে ব্যাপক ট্রলার আহরণ', 'চিংড়ি ট্রলারে ছোট মাছ আটকা পড়া'],
      },
      initiatives: {
        en: ['Seasonal fishing bans in Bangladesh and China', 'Stock monitoring by fisheries agencies'],
        bn: ['বাংলাদেশ ও চীনে মৌসুমি মাছ ধরা নিষেধাজ্ঞা', 'মৎস্য সংস্থাগুলোর মজুদ পর্যবেক্ষণ'],
      },
    },
    facts: {
      en: [
        'It is one of the most heavily landed fish in China.',
        'Its silvery skin has no scales, and the shiny pigment was once used to make artificial pearls.',
      ],
      bn: [
        'চীনে সবচেয়ে বেশি ধরা পড়া মাছগুলোর একটি এটি।',
        'এর রুপালি চামড়ায় কোনো আঁশ নেই; এই চকচকে রঞ্জক একসময় কৃত্রিম মুক্তা তৈরিতে ব্যবহার হতো।',
      ],
    },
    related: ['bombay-duck', 'indian-mackerel', 'silver-pomfret'],
  },
  {
    id: 'spotted-seahorse',
    commonName: { en: 'Spotted Seahorse', bn: 'সামুদ্রিক ঘোড়া' },
    scientificName: 'Hippocampus kuda',
    altNames: {
      en: ['Seahorse', 'Common Seahorse', 'Yellow Seahorse'],
      bn: ['সি-হর্স', 'সাগরের ঘোড়া', 'হলুদ সি-হর্স'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Hippocampus kuda',
    description: {
      en: 'The spotted seahorse is a small fish with a horse-like head, a curled grasping tail and a body armoured in bony rings. Found in seagrass beds, estuaries and mangroves of the Indo-Pacific, including the coasts of Bangladesh, it is famous because the male, not the female, carries the eggs and gives birth. Huge numbers are taken for traditional medicine and the aquarium trade.',
      bn: 'সামুদ্রিক ঘোড়া ছোট একটি মাছ, যার মাথা ঘোড়ার মতো, লেজ পেঁচিয়ে কিছু আঁকড়ে ধরতে পারে এবং শরীর হাড়ের বলয়ে মোড়া। বাংলাদেশের উপকূলসহ ভারত-প্রশান্ত মহাসাগরের সামুদ্রিক ঘাস, মোহনা ও ম্যানগ্রোভে এদের দেখা মেলে। এরা বিখ্যাত এ কারণে যে ডিম বহন ও বাচ্চা প্রসব করে স্ত্রী নয়, পুরুষ সি-হর্স। প্রচলিত ওষুধ ও অ্যাকুরিয়াম ব্যবসার জন্য বিপুল সংখ্যায় এদের ধরা হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: 'Syngnathiformes',
      family: 'Syngnathidae',
      genus: 'Hippocampus',
      species: 'H. kuda',
    },
    physical: {
      size: { en: 'Up to about 17 cm in height', bn: 'উচ্চতায় সর্বোচ্চ প্রায় ১৭ সেমি' },
      weight: { en: 'A few grams to about 20 g', bn: 'কয়েক গ্রাম থেকে প্রায় ২০ গ্রাম' },
      lifespan: { en: 'About 1–4 years', bn: 'প্রায় ১–৪ বছর' },
      features: {
        en: ['Horse-shaped head with a tube-like snout', 'Prehensile tail used to grip seagrass', 'Colour varies from yellow to black, often with dark spots'],
        bn: ['ঘোড়ার মতো মাথা ও নলের মতো মুখ', 'আঁকড়ে ধরার উপযোগী লেজ, যা দিয়ে সামুদ্রিক ঘাস জড়িয়ে ধরে', 'রং হলুদ থেকে কালো পর্যন্ত বদলায়, প্রায়ই গাঢ় ছোপ থাকে'],
      },
    },
    habitat: {
      en: 'Shallow seagrass beds, estuaries, mangroves and sheltered coastal waters',
      bn: 'অগভীর সামুদ্রিক ঘাসবন, মোহনা, ম্যানগ্রোভ ও সুরক্ষিত উপকূলীয় পানি',
    },
    habitats: ['ocean', 'mangrove', 'coral-reef'],
    regions: ['south-asia', 'southeast-asia', 'east-asia', 'oceania', 'oceans'],
    distribution: {
      en: 'Indo-Pacific from India, Sri Lanka and Bangladesh to Southeast Asia, southern China, Japan and Hawaii.',
      bn: 'ভারত, শ্রীলঙ্কা ও বাংলাদেশ থেকে দক্ষিণ-পূর্ব এশিয়া, দক্ষিণ চীন, জাপান ও হাওয়াই পর্যন্ত ভারত-প্রশান্ত মহাসাগরীয় অঞ্চল।',
    },
    climate: { en: 'Tropical, warm coastal waters', bn: 'ক্রান্তীয় উষ্ণ উপকূলীয় পানি' },
    diet: {
      en: 'Tiny crustaceans such as copepods and mysid shrimps, sucked in through its snout',
      bn: 'কোপেপড ও মাইসিড চিংড়ির মতো খুদে খোলসযুক্ত প্রাণী, যা নলের মতো মুখ দিয়ে শুষে নেয়',
    },
    ecologicalRole: {
      en: 'A small ambush predator of plankton and an indicator of healthy seagrass and estuary habitats.',
      bn: 'প্রাণিকণার ছোট ওত পেতে থাকা শিকারি এবং সুস্থ সামুদ্রিক ঘাসবন ও মোহনার সূচক প্রাণী।',
    },
    behavior: {
      en: 'Weak swimmer that anchors itself with its tail; pairs perform daily greeting dances and the male broods eggs in a pouch.',
      bn: 'দুর্বল সাঁতারু, লেজ দিয়ে কিছু আঁকড়ে স্থির থাকে; জোড়ারা প্রতিদিন অভিবাদন-নাচ করে এবং পুরুষ পেটের থলিতে ডিম লালন করে।',
    },
    range: {
      native: [
        [21.0, 91.8],
        [9.0, 79.3],
        [1.1, 104.2],
        [10.5, 123.3],
        [-8.5, 115.5],
        [22.0, 114.5],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Collection for traditional medicine', 'Bycatch in shrimp trawls', 'Loss of seagrass and mangrove habitat'],
        bn: ['প্রচলিত ওষুধের জন্য সংগ্রহ', 'চিংড়ি ট্রলারে দুর্ঘটনাবশত ধরা পড়া', 'সামুদ্রিক ঘাস ও ম্যানগ্রোভ আবাসস্থল ধ্বংস'],
      },
      initiatives: {
        en: ['All seahorses listed on CITES Appendix II to control trade', 'Captive breeding for the aquarium trade'],
        bn: ['বাণিজ্য নিয়ন্ত্রণে সব প্রজাতির সি-হর্স সাইটিসের পরিশিষ্ট-২ তালিকাভুক্ত', 'অ্যাকুরিয়াম ব্যবসার জন্য কৃত্রিম প্রজনন'],
      },
    },
    facts: {
      en: [
        'The male carries the eggs in a brood pouch and gives birth to dozens to hundreds of live young.',
        'Seahorses can move each eye independently to look in two directions at once.',
      ],
      bn: [
        'পুরুষ সি-হর্স পেটের থলিতে ডিম বহন করে এবং কয়েক ডজন থেকে কয়েকশো জীবন্ত বাচ্চার জন্ম দেয়।',
        'সি-হর্স দুই চোখ আলাদাভাবে ঘুরিয়ে একসঙ্গে দুই দিকে তাকাতে পারে।',
      ],
    },
    related: ['red-lionfish', 'humphead-wrasse', 'staghorn-coral'],
  },
  {
    id: 'largetooth-sawfish',
    commonName: { en: 'Largetooth Sawfish', bn: 'করাত মাছ' },
    scientificName: 'Pristis pristis',
    altNames: {
      en: ['Sawfish', 'Freshwater Sawfish', 'Common Sawfish'],
      bn: ['করাতি মাছ', 'মিঠাপানির করাত মাছ', 'স-ফিশ'],
    },
    category: 'fish',
    secondaryCategories: ['marine', 'freshwater'],
    wikiTitle: 'Largetooth sawfish',
    description: {
      en: 'The largetooth sawfish is a giant ray with a long, flat, toothed snout or "saw" that it uses to sense and slash prey. It lives in coastal seas, estuaries and far up large rivers, and once occurred in the Bay of Bengal and the rivers of Bangladesh. Because its saw tangles easily in nets, it has vanished from much of its former range.',
      bn: 'করাত মাছ বিশাল আকারের একধরনের শাপলাপাতা-গোত্রীয় মাছ (রে), যার মুখের সামনে দাঁতযুক্ত লম্বা চ্যাপ্টা "করাত" থাকে; এটি দিয়ে এরা শিকার টের পায় ও আঘাত করে। উপকূলীয় সাগর, মোহনা এবং বড় নদীর অনেক উজান পর্যন্ত এরা বাস করে; একসময় বঙ্গোপসাগর ও বাংলাদেশের নদীতেও পাওয়া যেত। করাতটি সহজেই জালে জড়িয়ে যায় বলে আগের বিচরণক্ষেত্রের বেশির ভাগ জায়গা থেকেই এরা হারিয়ে গেছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Chondrichthyes',
      order: 'Rhinopristiformes',
      family: 'Pristidae',
      genus: 'Pristis',
      species: 'P. pristis',
    },
    physical: {
      size: { en: 'Up to about 6–7 m long, including the saw', bn: 'করাতসহ সর্বোচ্চ প্রায় ৬–৭ মিটার লম্বা' },
      weight: { en: 'Up to about 600 kg', bn: 'সর্বোচ্চ প্রায় ৬০০ কেজি' },
      lifespan: { en: 'Possibly 30–50 years', bn: 'সম্ভবত ৩০–৫০ বছর' },
      features: {
        en: ['Long flat rostrum lined with 14–24 pairs of teeth', 'Shark-like body with a flattened head and underside gills', 'First dorsal fin begins in front of the pelvic fins'],
        bn: ['লম্বা চ্যাপ্টা করাতের দুই ধারে ১৪–২৪ জোড়া দাঁত', 'হাঙরের মতো দেহ, চ্যাপ্টা মাথা ও পেটের দিকে ফুলকা', 'প্রথম পৃষ্ঠপাখনা শ্রোণী পাখনার সামনে থেকে শুরু'],
      },
    },
    habitat: {
      en: 'Shallow coastal waters, estuaries, river mouths and freshwater rivers and lakes',
      bn: 'অগভীর উপকূলীয় পানি, মোহনা, নদীর মুখ এবং মিঠাপানির নদী ও হ্রদ',
    },
    habitats: ['ocean', 'mangrove', 'rivers-lakes'],
    regions: ['south-asia', 'oceania', 'africa', 'south-america', 'north-america', 'oceans'],
    distribution: {
      en: 'Formerly circumtropical; now mainly northern Australia, parts of the Amazon basin and Central America, with scattered records in West Africa and South Asia.',
      bn: 'একসময় পৃথিবীর সব ক্রান্তীয় অঞ্চলে ছিল; এখন মূলত উত্তর অস্ট্রেলিয়া, আমাজন অববাহিকার কিছু অংশ ও মধ্য আমেরিকায়, পশ্চিম আফ্রিকা ও দক্ষিণ এশিয়ায় বিক্ষিপ্তভাবে দেখা যায়।',
    },
    climate: { en: 'Tropical warm waters', bn: 'ক্রান্তীয় উষ্ণ পানি' },
    diet: {
      en: 'Fish, shrimps, crabs and molluscs, stunned with sideways swipes of the saw or dug from the mud',
      bn: 'মাছ, চিংড়ি, কাঁকড়া ও শামুক-ঝিনুক; করাত দিয়ে পাশ থেকে আঘাত করে শিকারকে অবশ করে বা কাদা খুঁড়ে বের করে',
    },
    ecologicalRole: {
      en: 'A large predator linking river and coastal food webs; its decline signals the loss of healthy estuaries.',
      bn: 'নদী ও উপকূলের খাদ্যশৃঙ্খলকে যুক্ত করা বড় শিকারি; এদের সংখ্যা কমে যাওয়া সুস্থ মোহনা হারানোর সংকেত।',
    },
    behavior: {
      en: 'Young sawfish spend years in rivers before moving to the sea; the saw’s electroreceptors detect hidden prey.',
      bn: 'বাচ্চা করাত মাছ কয়েক বছর নদীতে কাটিয়ে পরে সাগরে যায়; করাতের বৈদ্যুতিক সংবেদী অঙ্গ লুকিয়ে থাকা শিকার শনাক্ত করে।',
    },
    range: {
      native: [
        [21.6, 89.6],
        [-14.0, 140.0],
        [-3.3, -60.0],
        [11.6, -85.3],
        [5.5, -52.5],
        [11.0, -16.3],
      ],
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      threats: {
        en: ['Entanglement of the saw in fishing nets', 'Trade in saws, fins and meat', 'Loss of river and mangrove habitat'],
        bn: ['মাছ ধরার জালে করাত জড়িয়ে যাওয়া', 'করাত, পাখনা ও মাংসের বাণিজ্য', 'নদী ও ম্যানগ্রোভ আবাসস্থল ধ্বংস'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix I, banning international trade', 'Legal protection in Bangladesh, India and Australia'],
        bn: ['সাইটিসের পরিশিষ্ট-১ তালিকাভুক্ত, ফলে আন্তর্জাতিক বাণিজ্য নিষিদ্ধ', 'বাংলাদেশ, ভারত ও অস্ট্রেলিয়ায় আইনগত সুরক্ষা'],
      },
    },
    facts: {
      en: [
        'Sawfish are rays, not sharks, even though they swim like sharks.',
        'Lake Nicaragua once had so many that they were caught in large numbers far from the sea.',
      ],
      bn: [
        'হাঙরের মতো সাঁতার কাটলেও করাত মাছ আসলে রে বা শাপলাপাতা গোত্রের মাছ, হাঙর নয়।',
        'একসময় নিকারাগুয়া হ্রদে এত বেশি করাত মাছ ছিল যে সাগর থেকে বহু দূরে সেখানে প্রচুর পরিমাণে ধরা হতো।',
      ],
    },
    related: ['giant-oceanic-manta-ray', 'scalloped-hammerhead', 'ganges-river-dolphin'],
  },
  {
    id: 'great-white-shark',
    commonName: { en: 'Great White Shark', bn: 'গ্রেট হোয়াইট শার্ক' },
    scientificName: 'Carcharodon carcharias',
    altNames: {
      en: ['White Shark', 'White Pointer', 'Great White'],
      bn: ['সাদা হাঙর', 'হোয়াইট শার্ক', 'বিশাল সাদা হাঙর'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Great white shark',
    description: {
      en: 'The great white shark is the largest predatory fish on Earth, a powerful hunter of seals and other large prey in cool coastal seas. It can partly warm its body above the surrounding water, allowing bursts of speed and spectacular breaches. Although feared, it rarely bites people and is itself vulnerable to human fishing.',
      bn: 'গ্রেট হোয়াইট শার্ক পৃথিবীর সবচেয়ে বড় শিকারি মাছ; শীতল উপকূলীয় সাগরে সিল ও অন্যান্য বড় প্রাণী শিকারে এরা অত্যন্ত দক্ষ। আশপাশের পানির চেয়ে শরীর খানিকটা উষ্ণ রাখতে পারে বলে এরা হঠাৎ প্রচণ্ড গতি তুলতে এবং পানি থেকে লাফিয়ে উঠতে পারে। ভয়ংকর খ্যাতি থাকলেও মানুষকে কামড়ানোর ঘটনা বিরল; বরং মানুষের মাছ ধরার কারণে এরাই বিপন্নপ্রায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Chondrichthyes',
      order: 'Lamniformes',
      family: 'Lamnidae',
      genus: 'Carcharodon',
      species: 'C. carcharias',
    },
    physical: {
      size: { en: 'Females 4.5–5 m, males 3.4–4 m; rarely over 6 m', bn: 'স্ত্রী ৪.৫–৫ মিটার, পুরুষ ৩.৪–৪ মিটার; কদাচিৎ ৬ মিটারের বেশি' },
      weight: { en: 'Typically 500–1,100 kg; large females up to about 2,000 kg', bn: 'সাধারণত ৫০০–১,১০০ কেজি; বড় স্ত্রী হাঙর প্রায় ২,০০০ কেজি পর্যন্ত' },
      lifespan: { en: '70 years or more', bn: '৭০ বছর বা তারও বেশি' },
      features: {
        en: ['Grey back and white belly (countershading)', 'Large serrated triangular teeth', 'Torpedo body with a crescent-shaped tail'],
        bn: ['ধূসর পিঠ ও সাদা পেট, যা শিকারের কাছে তাকে আড়াল করে', 'বড়, করাতের মতো খাঁজকাটা ত্রিভুজাকার দাঁত', 'টর্পেডো আকৃতির দেহ ও অর্ধচন্দ্রাকার লেজ'],
      },
    },
    habitat: {
      en: 'Cool to warm-temperate coastal and offshore waters, often near seal colonies',
      bn: 'শীতল থেকে উষ্ণ-নাতিশীতোষ্ণ উপকূলীয় ও গভীর সাগর, প্রায়ই সিলের কলোনির কাছে',
    },
    habitats: ['ocean'],
    regions: ['africa', 'north-america', 'oceania', 'europe', 'oceans'],
    distribution: {
      en: 'Worldwide in temperate seas — especially South Africa, Australia, New Zealand, California, Mexico’s Guadalupe Island and the northwest Atlantic.',
      bn: 'বিশ্বের নাতিশীতোষ্ণ সাগরে — বিশেষ করে দক্ষিণ আফ্রিকা, অস্ট্রেলিয়া, নিউজিল্যান্ড, ক্যালিফোর্নিয়া, মেক্সিকোর গুয়াদালুপে দ্বীপ ও উত্তর-পশ্চিম আটলান্টিকে।',
    },
    climate: { en: 'Temperate and subtropical seas', bn: 'নাতিশীতোষ্ণ ও উপক্রান্তীয় সাগর' },
    diet: {
      en: 'Carnivore — fish, rays and other sharks when young; seals, sea lions, dolphins and whale carcasses as adults',
      bn: 'মাংসাশী — ছোট অবস্থায় মাছ, রে ও অন্য হাঙর; বড় হলে সিল, সি লায়ন, ডলফিন ও মৃত তিমির দেহ',
    },
    ecologicalRole: {
      en: 'An apex predator that keeps seal and other prey populations healthy and in balance.',
      bn: 'শীর্ষ শিকারি হিসেবে সিল ও অন্যান্য শিকার-প্রাণীর সংখ্যা সুস্থ ও ভারসাম্যপূর্ণ রাখে।',
    },
    behavior: {
      en: 'Mostly solitary, ambushing prey from below; makes long ocean migrations of thousands of kilometres.',
      bn: 'মূলত একাকী; নিচ থেকে হঠাৎ আক্রমণ করে শিকার ধরে এবং হাজার হাজার কিলোমিটার দীর্ঘ সমুদ্রযাত্রা করে।',
    },
    range: {
      native: [
        [-34.6, 19.3],
        [37.7, -123.0],
        [29.0, -118.3],
        [-35.5, 136.5],
        [41.5, -69.8],
        [-46.9, 168.2],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Bycatch in fisheries', 'Trophy fishing and trade in jaws and fins', 'Shark-control nets and drumlines'],
        bn: ['মাছ ধরার জালে দুর্ঘটনাবশত আটকা পড়া', 'শখের শিকার এবং চোয়াল ও পাখনার বাণিজ্য', 'সৈকতে হাঙর-নিয়ন্ত্রণ জাল ও টোপযুক্ত বড়শি'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II', 'Legal protection in South Africa, Australia, the USA and the EU'],
        bn: ['সাইটিসের পরিশিষ্ট-২ তালিকাভুক্ত', 'দক্ষিণ আফ্রিকা, অস্ট্রেলিয়া, যুক্তরাষ্ট্র ও ইউরোপীয় ইউনিয়নে আইনগত সুরক্ষা'],
      },
    },
    facts: {
      en: [
        'It can detect tiny electrical fields from living prey using sensory pores on its snout.',
        'Females give birth to live pups after a pregnancy thought to last over a year.',
        'One tagged shark swam from South Africa to Australia and back within nine months.',
      ],
      bn: [
        'নাকের ওপরের সংবেদী ছিদ্র দিয়ে জীবিত শিকারের অতি সূক্ষ্ম বৈদ্যুতিক সংকেতও এরা টের পায়।',
        'স্ত্রী হাঙর এক বছরেরও বেশি গর্ভধারণের পর জীবন্ত বাচ্চা প্রসব করে বলে ধারণা করা হয়।',
        'ট্যাগ লাগানো একটি হাঙর ৯ মাসের মধ্যে দক্ষিণ আফ্রিকা থেকে অস্ট্রেলিয়া গিয়ে আবার ফিরে এসেছিল।',
      ],
    },
    related: ['tiger-shark', 'scalloped-hammerhead', 'whale-shark'],
  },
  {
    id: 'scalloped-hammerhead',
    commonName: { en: 'Scalloped Hammerhead', bn: 'হাতুড়িমাথা হাঙর' },
    scientificName: 'Sphyrna lewini',
    altNames: {
      en: ['Hammerhead Shark', 'Kidney-headed Shark'],
      bn: ['হ্যামারহেড শার্ক', 'হাতুড়ি হাঙর'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Scalloped hammerhead',
    description: {
      en: 'The scalloped hammerhead is a shark with a wide, hammer-shaped head whose front edge has a notched, scalloped outline. It is famous for forming huge daytime schools around seamounts and islands such as Cocos and the Galápagos. Hunted heavily for its fins, it is now Critically Endangered; it also occurs in the Bay of Bengal.',
      bn: 'হাতুড়িমাথা হাঙরের মাথা চওড়া হাতুড়ির মতো, আর মাথার সামনের কিনারা ঢেউখেলানো খাঁজকাটা। কোকোস ও গালাপাগোসের মতো দ্বীপ ও সাগরতলের পাহাড়ের চারপাশে দিনের বেলা বিশাল ঝাঁক বাঁধার জন্য এরা বিখ্যাত। পাখনার জন্য ব্যাপক শিকারের ফলে এরা এখন মহাবিপন্ন; বঙ্গোপসাগরেও এদের দেখা মেলে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Chondrichthyes',
      order: 'Carcharhiniformes',
      family: 'Sphyrnidae',
      genus: 'Sphyrna',
      species: 'S. lewini',
    },
    physical: {
      size: { en: 'Usually 2.5–3.5 m; up to about 4.3 m', bn: 'সাধারণত ২.৫–৩.৫ মিটার; সর্বোচ্চ প্রায় ৪.৩ মিটার' },
      weight: { en: 'Up to about 150 kg', bn: 'সর্বোচ্চ প্রায় ১৫০ কেজি' },
      lifespan: { en: 'About 30–35 years', bn: 'প্রায় ৩০–৩৫ বছর' },
      features: {
        en: ['Hammer-shaped head (cephalofoil) with a central notch', 'Eyes at the tips of the hammer for wide vision', 'Tall, sickle-shaped first dorsal fin'],
        bn: ['মাঝখানে খাঁজসহ হাতুড়ির মতো চ্যাপ্টা মাথা', 'হাতুড়ির দুই প্রান্তে চোখ, ফলে দৃষ্টিসীমা বিস্তৃত', 'উঁচু, কাস্তের মতো প্রথম পৃষ্ঠপাখনা'],
      },
    },
    habitat: {
      en: 'Warm coastal and offshore waters, seamounts and bays; young live in shallow nursery bays',
      bn: 'উষ্ণ উপকূলীয় ও গভীর সাগর, সাগরতলের পাহাড় ও উপসাগর; বাচ্চারা অগভীর উপসাগরে বড় হয়',
    },
    habitats: ['ocean', 'coral-reef'],
    regions: ['south-asia', 'southeast-asia', 'africa', 'north-america', 'south-america', 'oceania', 'oceans'],
    distribution: {
      en: 'Warm-temperate and tropical seas worldwide, including the Bay of Bengal, the eastern Pacific, the Red Sea and the western Atlantic.',
      bn: 'বিশ্বের উষ্ণ-নাতিশীতোষ্ণ ও ক্রান্তীয় সাগর — বঙ্গোপসাগর, পূর্ব প্রশান্ত মহাসাগর, লোহিত সাগর ও পশ্চিম আটলান্টিকসহ।',
    },
    climate: { en: 'Tropical and warm-temperate seas', bn: 'ক্রান্তীয় ও উষ্ণ-নাতিশীতোষ্ণ সাগর' },
    diet: {
      en: 'Carnivore — bony fish, squid, octopus, rays and crustaceans',
      bn: 'মাংসাশী — অস্থিময় মাছ, স্কুইড, অক্টোপাস, রে ও খোলসযুক্ত প্রাণী',
    },
    ecologicalRole: {
      en: 'A mid-to-upper level predator that helps regulate fish and squid populations on reefs and seamounts.',
      bn: 'মধ্য থেকে উচ্চ স্তরের শিকারি, যা প্রবাল প্রাচীর ও সাগরতলের পাহাড়ে মাছ ও স্কুইডের সংখ্যা নিয়ন্ত্রণে রাখে।',
    },
    behavior: {
      en: 'Forms large schools by day and disperses at night to hunt alone in deeper water.',
      bn: 'দিনে বড় ঝাঁক বাঁধে, আর রাতে ছড়িয়ে পড়ে গভীর পানিতে একা শিকার করে।',
    },
    range: {
      native: [
        [20.5, 90.5],
        [5.5, -87.0],
        [1.4, -91.8],
        [24.4, -81.0],
        [26.5, 34.8],
        [-24.0, 153.5],
      ],
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      threats: {
        en: ['Targeted fishing for the shark-fin trade', 'High death rate when caught as bycatch', 'Fishing in coastal nursery areas'],
        bn: ['হাঙরের পাখনা বাণিজ্যের জন্য লক্ষ্যভিত্তিক শিকার', 'জালে আটকা পড়লে উচ্চ মৃত্যুহার', 'উপকূলের শিশু-হাঙরের আবাসে মাছ ধরা'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II', 'Marine protected areas at Cocos Island and the Galápagos'],
        bn: ['সাইটিসের পরিশিষ্ট-২ তালিকাভুক্ত', 'কোকোস দ্বীপ ও গালাপাগোসে সামুদ্রিক সংরক্ষিত এলাকা'],
      },
    },
    facts: {
      en: [
        'The wide head spreads out electrical sensors, helping it find rays buried in the sand.',
        'Schools of hundreds of hammerheads gather around some Pacific seamounts.',
      ],
      bn: [
        'চওড়া মাথায় বৈদ্যুতিক সংবেদী অঙ্গ ছড়ানো থাকে, ফলে বালিতে লুকানো রে মাছও খুঁজে পায়।',
        'প্রশান্ত মহাসাগরের কিছু সাগরতলের পাহাড়ের চারপাশে শত শত হাতুড়িমাথা হাঙর ঝাঁক বেঁধে জড়ো হয়।',
      ],
    },
    related: ['great-white-shark', 'tiger-shark', 'whale-shark', 'largetooth-sawfish'],
  },
  {
    id: 'tiger-shark',
    commonName: { en: 'Tiger Shark', bn: 'বাঘা হাঙর' },
    scientificName: 'Galeocerdo cuvier',
    altNames: {
      en: ['Sea Tiger'],
      bn: ['টাইগার শার্ক'],
    },
    category: 'fish',
    secondaryCategories: ['marine'],
    wikiTitle: 'Tiger shark',
    description: {
      en: 'The tiger shark is a large predator of warm seas, named for the dark vertical stripes that young sharks carry. It is famous for eating almost anything, from sea turtles and seabirds to garbage. It ranges widely through tropical oceans, including the Bay of Bengal.',
      bn: 'বাঘা হাঙর উষ্ণ সাগরের বড় শিকারি হাঙর; বাচ্চা অবস্থায় শরীরে বাঘের মতো গাঢ় খাড়া ডোরা থাকে বলে এমন নাম। সামুদ্রিক কচ্ছপ, সামুদ্রিক পাখি থেকে শুরু করে আবর্জনা পর্যন্ত প্রায় সবকিছু খাওয়ার জন্য এরা পরিচিত। বঙ্গোপসাগরসহ ক্রান্তীয় মহাসাগরজুড়ে বিস্তৃত এলাকায় এরা বিচরণ করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Chondrichthyes',
      order: 'Carcharhiniformes',
      family: 'Galeocerdonidae',
      genus: 'Galeocerdo',
      species: 'G. cuvier',
    },
    physical: {
      size: { en: 'Commonly 3–4.5 m; up to about 5.5 m', bn: 'সাধারণত ৩–৪.৫ মিটার; সর্বোচ্চ প্রায় ৫.৫ মিটার' },
      weight: { en: 'Typically 380–650 kg; very large females can exceed 800 kg', bn: 'সাধারণত ৩৮০–৬৫০ কেজি; খুব বড় স্ত্রী হাঙর ৮০০ কেজিও ছাড়িয়ে যায়' },
      lifespan: { en: 'About 27–50 years', bn: 'প্রায় ২৭–৫০ বছর' },
      features: {
        en: ['Dark vertical bars that fade with age', 'Broad, blunt snout', 'Cockscomb-shaped serrated teeth that can saw through turtle shells'],
        bn: ['গাঢ় খাড়া ডোরা, যা বয়সের সঙ্গে ফিকে হয়ে যায়', 'চওড়া, ভোঁতা নাক', 'মোরগের ঝুঁটির মতো খাঁজকাটা দাঁত, যা দিয়ে কচ্ছপের খোলও কেটে ফেলে'],
      },
    },
    habitat: {
      en: 'Tropical and warm-temperate coastal waters, reefs, lagoons and open ocean',
      bn: 'ক্রান্তীয় ও উষ্ণ-নাতিশীতোষ্ণ উপকূলীয় পানি, প্রবাল প্রাচীর, উপহ্রদ ও খোলা সাগর',
    },
    habitats: ['ocean', 'coral-reef'],
    regions: ['south-asia', 'southeast-asia', 'africa', 'north-america', 'south-america', 'oceania', 'oceans'],
    distribution: {
      en: 'Tropical and warm-temperate seas worldwide — Hawaii, the Bahamas, Australia, South Africa, Brazil and the northern Indian Ocean.',
      bn: 'বিশ্বের ক্রান্তীয় ও উষ্ণ-নাতিশীতোষ্ণ সাগর — হাওয়াই, বাহামা, অস্ট্রেলিয়া, দক্ষিণ আফ্রিকা, ব্রাজিল ও উত্তর ভারত মহাসাগর।',
    },
    climate: { en: 'Tropical and subtropical seas', bn: 'ক্রান্তীয় ও উপক্রান্তীয় সাগর' },
    diet: {
      en: 'Generalist carnivore — fish, sea turtles, seabirds, dolphins, sea snakes, crustaceans and carrion',
      bn: 'সর্বগ্রাসী মাংসাশী — মাছ, সামুদ্রিক কচ্ছপ, সামুদ্রিক পাখি, ডলফিন, সামুদ্রিক সাপ, খোলসযুক্ত প্রাণী ও মৃতদেহ',
    },
    ecologicalRole: {
      en: 'An apex predator whose presence keeps turtles and dugongs from overgrazing seagrass meadows.',
      bn: 'শীর্ষ শিকারি; এদের উপস্থিতির ভয়ে কচ্ছপ ও ডুগং সামুদ্রিক ঘাসবন অতিরিক্ত খেয়ে শেষ করতে পারে না।',
    },
    behavior: {
      en: 'Mostly solitary and nocturnal; patrols coastlines and can migrate thousands of kilometres.',
      bn: 'মূলত একাকী ও নিশাচর; উপকূল বরাবর টহল দেয় এবং হাজার হাজার কিলোমিটার পাড়ি দিতে পারে।',
    },
    range: {
      native: [
        [26.8, -79.1],
        [21.0, -157.5],
        [-19.0, 148.0],
        [-30.3, 31.0],
        [20.0, 90.0],
        [-8.1, -34.6],
      ],
    },
    conservation: {
      status: 'NT',
      trend: 'decreasing',
      threats: {
        en: ['Fishing for fins, liver oil and meat', 'Bycatch in longline fisheries', 'Shark-control programmes on beaches'],
        bn: ['পাখনা, কলিজার তেল ও মাংসের জন্য শিকার', 'লংলাইন বড়শিতে দুর্ঘটনাবশত ধরা পড়া', 'সৈকতে হাঙর-নিয়ন্ত্রণ কর্মসূচি'],
      },
      initiatives: {
        en: ['Satellite tracking studies of migration', 'Shark sanctuaries such as the Bahamas'],
        bn: ['স্যাটেলাইট ট্র্যাকিংয়ের মাধ্যমে চলাচল গবেষণা', 'বাহামার মতো হাঙর অভয়ারণ্য'],
      },
    },
    facts: {
      en: [
        'Licence plates, tyres and tin cans have been found in tiger shark stomachs.',
        'Tiger sharks can give birth to more than 50 pups at once.',
      ],
      bn: [
        'বাঘা হাঙরের পেটে গাড়ির নম্বরপ্লেট, টায়ার ও টিনের কৌটাও পাওয়া গেছে।',
        'একটি বাঘা হাঙর একবারে ৫০টিরও বেশি বাচ্চা প্রসব করতে পারে।',
      ],
    },
    related: ['great-white-shark', 'scalloped-hammerhead', 'green-sea-turtle'],
  },
];
