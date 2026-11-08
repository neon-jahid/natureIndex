import type { Species } from '@/types';

export const marineMammals1: Species[] = [
  {
    id: 'indo-pacific-bottlenose-dolphin',
    commonName: { en: 'Indo-Pacific Bottlenose Dolphin', bn: 'ইন্দো-প্যাসিফিক বোতলনাক ডলফিন' },
    scientificName: 'Tursiops aduncus',
    altNames: {
      en: ['Bottlenose Dolphin', 'Indian Ocean Bottlenose Dolphin'],
      bn: ['বোতলনাক ডলফিন', 'ভারত মহাসাগরীয় বোতলনাক ডলফিন'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Indo-Pacific bottlenose dolphin',
    description: {
      en: 'The Indo-Pacific bottlenose dolphin is a slender, coastal relative of the common bottlenose dolphin, found in warm shallow waters from East Africa to Australia and Japan. Adults often develop dark speckles on the belly. In Bangladesh it is regularly seen in the Swatch of No Ground submarine canyon and around St. Martin’s Island, often in large, playful groups.',
      bn: 'ইন্দো-প্যাসিফিক বোতলনাক ডলফিন সাধারণ বোতলনাক ডলফিনের একটি তুলনামূলক সরু গড়নের আত্মীয়, যারা পূর্ব আফ্রিকা থেকে অস্ট্রেলিয়া ও জাপান পর্যন্ত উষ্ণ ও অগভীর উপকূলীয় সাগরে বাস করে। প্রাপ্তবয়স্কদের পেটে প্রায়ই কালচে ছিটছিটে দাগ দেখা যায়। বাংলাদেশে সোয়াচ অব নো গ্রাউন্ড এবং সেন্ট মার্টিন দ্বীপের আশপাশে এদের প্রায়ই বড় দলে খেলতে দেখা যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Delphinidae',
      genus: 'Tursiops',
      species: 'T. aduncus',
    },
    physical: {
      size: { en: 'About 2–2.7 m long', bn: 'প্রায় ২–২.৭ মিটার লম্বা' },
      weight: { en: 'Up to about 230 kg', bn: 'প্রায় ২৩০ কেজি পর্যন্ত' },
      lifespan: { en: 'Around 40 years', bn: 'প্রায় ৪০ বছর' },
      features: {
        en: ['Longer, slimmer beak than the common bottlenose dolphin', 'Dark spots or speckles on the belly of adults', 'Tall, curved dorsal fin'],
        bn: ['সাধারণ বোতলনাক ডলফিনের চেয়ে লম্বা ও সরু ঠোঁট', 'প্রাপ্তবয়স্কদের পেটে কালচে ছোপ বা ছিটছিটে দাগ', 'উঁচু ও বাঁকানো পিঠের পাখনা'],
      },
    },
    habitat: {
      en: 'Warm, shallow coastal waters, bays, reefs and the edges of submarine canyons',
      bn: 'উষ্ণ ও অগভীর উপকূলীয় সাগর, উপসাগর, প্রবালপ্রাচীর এবং সমুদ্রতলের খাদের কিনারা',
    },
    habitats: ['ocean', 'coral-reef'],
    regions: ['oceans', 'south-asia', 'southeast-asia', 'east-asia', 'africa', 'oceania'],
    distribution: {
      en: 'Coastal Indian Ocean and western Pacific, from South Africa and the Red Sea through the Bay of Bengal to Australia and southern Japan.',
      bn: 'ভারত মহাসাগর ও পশ্চিম প্রশান্ত মহাসাগরের উপকূল — দক্ষিণ আফ্রিকা ও লোহিত সাগর থেকে বঙ্গোপসাগর হয়ে অস্ট্রেলিয়া ও দক্ষিণ জাপান পর্যন্ত।',
    },
    climate: { en: 'Tropical and warm-temperate seas', bn: 'ক্রান্তীয় ও উষ্ণ-নাতিশীতোষ্ণ সাগর' },
    diet: {
      en: 'Carnivore — reef and bottom-dwelling fish, squid and octopus',
      bn: 'মাংসাশী — প্রবালপ্রাচীর ও সমুদ্রতলের মাছ, স্কুইড ও অক্টোপাস',
    },
    ecologicalRole: {
      en: 'A mid-level predator that helps regulate coastal fish populations and signals the health of inshore waters.',
      bn: 'মাঝারি স্তরের শিকারি হিসেবে উপকূলীয় মাছের সংখ্যা নিয়ন্ত্রণে রাখে এবং উপকূলীয় সাগরের স্বাস্থ্যের সূচক হিসেবে কাজ করে।',
    },
    behavior: {
      en: 'Highly social, living in fluid groups; some Australian populations famously use marine sponges as foraging tools.',
      bn: 'অত্যন্ত সামাজিক, পরিবর্তনশীল দলে চলে; অস্ট্রেলিয়ার কিছু ডলফিন খাবার খোঁজার সময় স্পঞ্জকে হাতিয়ার হিসেবে ব্যবহার করে বলে বিখ্যাত।',
    },
    range: {
      native: [
        [21.2, 89.6],
        [20.6, 92.2],
        [20.0, 38.5],
        [-25.5, 35.5],
        [-25.8, 113.3],
        [24.5, 121.5],
      ],
    },
    conservation: {
      status: 'NT',
      trend: 'unknown',
      threats: {
        en: ['Accidental capture in gillnets', 'Coastal habitat degradation and pollution', 'Live capture and disturbance from tourism'],
        bn: ['ফাঁস জালে দুর্ঘটনাবশত আটকে পড়া', 'উপকূলীয় আবাসস্থলের অবক্ষয় ও দূষণ', 'জীবন্ত ধরা এবং পর্যটনজনিত উৎপাত'],
      },
      initiatives: {
        en: ['Swatch of No Ground Marine Protected Area in Bangladesh', 'Fisher training to safely release entangled dolphins'],
        bn: ['বাংলাদেশে সোয়াচ অব নো গ্রাউন্ড সামুদ্রিক সংরক্ষিত এলাকা', 'জালে আটকানো ডলফিন নিরাপদে ছেড়ে দিতে জেলেদের প্রশিক্ষণ'],
      },
    },
    facts: {
      en: ['It was recognised as a separate species from the common bottlenose dolphin only in the late 1990s.', 'Groups of several hundred have been recorded in the Swatch of No Ground.'],
      bn: ['১৯৯০-এর দশকের শেষ দিকে একে সাধারণ বোতলনাক ডলফিন থেকে আলাদা প্রজাতি হিসেবে স্বীকৃতি দেওয়া হয়।', 'সোয়াচ অব নো গ্রাউন্ডে কয়েকশো ডলফিনের দলও দেখা গেছে।'],
    },
    related: ['common-bottlenose-dolphin', 'indo-pacific-humpback-dolphin', 'irrawaddy-dolphin', 'brydes-whale'],
  },
  {
    id: 'indo-pacific-humpback-dolphin',
    commonName: { en: 'Indo-Pacific Humpback Dolphin', bn: 'ইন্দো-প্যাসিফিক কুঁজো ডলফিন' },
    scientificName: 'Sousa chinensis',
    altNames: {
      en: ['Chinese White Dolphin', 'Pink Dolphin', 'Humpback Dolphin'],
      bn: ['চীনা সাদা ডলফিন', 'গোলাপি ডলফিন', 'কুঁজো ডলফিন'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Indo-Pacific humpback dolphin',
    description: {
      en: 'The Indo-Pacific humpback dolphin lives close to shore in estuaries, mangrove channels and shallow bays. Calves are dark grey, but adults gradually lighten and many turn white or pink, which earned them the name “Chinese white dolphin”. In Bangladesh it occurs along the Sundarbans coast and the shallow waters off Cox’s Bazar.',
      bn: 'ইন্দো-প্যাসিফিক কুঁজো ডলফিন মোহনা, ম্যানগ্রোভের খাল ও অগভীর উপসাগরে তীরের খুব কাছাকাছি বাস করে। বাচ্চারা গাঢ় ধূসর হলেও বয়স বাড়ার সঙ্গে রং হালকা হয়ে অনেকেই সাদা বা গোলাপি হয়ে যায় — তাই এদের “চীনা সাদা ডলফিন”ও বলা হয়। বাংলাদেশে সুন্দরবনের উপকূল এবং কক্সবাজারের অগভীর সাগরে এদের দেখা মেলে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Delphinidae',
      genus: 'Sousa',
      species: 'S. chinensis',
    },
    physical: {
      size: { en: 'About 2–2.8 m long', bn: 'প্রায় ২–২.৮ মিটার লম্বা' },
      weight: { en: 'About 150–230 kg', bn: 'প্রায় ১৫০–২৩০ কেজি' },
      lifespan: { en: 'Up to about 40 years', bn: 'প্রায় ৪০ বছর পর্যন্ত' },
      features: {
        en: ['Long, narrow beak', 'Low, triangular dorsal fin on a slight hump', 'Colour changes from grey to white or pink with age'],
        bn: ['লম্বা ও সরু ঠোঁট', 'পিঠের সামান্য কুঁজের ওপর নিচু, ত্রিভুজাকার পাখনা', 'বয়সের সঙ্গে ধূসর থেকে সাদা বা গোলাপি রং'],
      },
    },
    habitat: {
      en: 'Shallow coastal waters under about 20 m deep, estuaries and mangrove channels',
      bn: 'প্রায় ২০ মিটারের কম গভীর উপকূলীয় সাগর, মোহনা ও ম্যানগ্রোভের খাল',
    },
    habitats: ['ocean', 'mangrove'],
    regions: ['oceans', 'south-asia', 'southeast-asia', 'east-asia', 'oceania'],
    distribution: {
      en: 'Coastal waters from eastern India and Bangladesh through Southeast Asia to southern China and northern Australia.',
      bn: 'পূর্ব ভারত ও বাংলাদেশ থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে দক্ষিণ চীন ও উত্তর অস্ট্রেলিয়া পর্যন্ত উপকূলীয় সাগর।',
    },
    climate: { en: 'Tropical and subtropical coastal seas', bn: 'ক্রান্তীয় ও উপক্রান্তীয় উপকূলীয় সাগর' },
    diet: {
      en: 'Carnivore — estuarine and reef fish, plus some squid and crustaceans',
      bn: 'মাংসাশী — মোহনা ও প্রবালপ্রাচীরের মাছ, সঙ্গে কিছু স্কুইড ও খোলসযুক্ত প্রাণী',
    },
    ecologicalRole: {
      en: 'A top predator of estuaries whose presence reflects the health of coastal fisheries.',
      bn: 'মোহনার শীর্ষ শিকারি; এদের উপস্থিতি উপকূলীয় মৎস্যসম্পদের স্বাস্থ্যের প্রতিফলন।',
    },
    behavior: {
      en: 'Lives in small groups and often hunts behind fishing trawlers; tends to be shy of boats.',
      bn: 'ছোট দলে চলে এবং প্রায়ই মাছ ধরার ট্রলারের পেছনে শিকার করে; নৌকা দেখলে সাধারণত সরে যায়।',
    },
    range: {
      native: [
        [21.6, 89.6],
        [21.2, 91.85],
        [16.0, 82.5],
        [22.25, 113.8],
        [11.5, 102.0],
        [-12.2, 130.5],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Bycatch in gillnets', 'Coastal reclamation and port development', 'Underwater noise and vessel traffic'],
        bn: ['ফাঁস জালে আটকে মৃত্যু', 'উপকূল ভরাট ও বন্দর নির্মাণ', 'পানির নিচের শব্দদূষণ ও নৌযান চলাচল'],
      },
      initiatives: {
        en: ['Coastal marine protected areas in Hong Kong and Bangladesh', 'Photo-identification monitoring of local populations'],
        bn: ['হংকং ও বাংলাদেশে উপকূলীয় সামুদ্রিক সংরক্ষিত এলাকা', 'ছবির মাধ্যমে চিহ্নিত করে স্থানীয় জনগোষ্ঠী পর্যবেক্ষণ'],
      },
      assessed: '2015',
    },
    facts: {
      en: ['The pink colour comes from blood vessels near the skin surface, not pigment.', 'It was the official mascot of the 1997 handover of Hong Kong.'],
      bn: ['এদের গোলাপি রং আসে চামড়ার কাছাকাছি থাকা রক্তনালি থেকে, কোনো রঞ্জক থেকে নয়।', '১৯৯৭ সালে হংকং হস্তান্তর অনুষ্ঠানের আনুষ্ঠানিক মাসকট ছিল এই ডলফিন।'],
    },
    related: ['irrawaddy-dolphin', 'indo-pacific-bottlenose-dolphin', 'indo-pacific-finless-porpoise', 'ganges-river-dolphin'],
  },
  {
    id: 'indo-pacific-finless-porpoise',
    commonName: { en: 'Indo-Pacific Finless Porpoise', bn: 'পাখনাহীন পরপয়েস' },
    scientificName: 'Neophocaena phocaenoides',
    altNames: {
      en: ['Finless Porpoise', 'Black Finless Porpoise'],
      bn: ['পাখনাহীন শুশুক', 'ইন্দো-প্যাসিফিক পাখনাহীন পরপয়েস'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Indo-Pacific finless porpoise',
    description: {
      en: 'The Indo-Pacific finless porpoise is a small, shy cetacean with a rounded head and no dorsal fin — only a low ridge of tiny bumps along its back. It lives in shallow, often murky coastal waters and estuaries. In Bangladesh it is found in the coastal waters of the Sundarbans and the Meghna estuary, where it frequently drowns in fishing nets.',
      bn: 'পাখনাহীন পরপয়েস ছোট ও লাজুক একটি তিমিগোত্রীয় প্রাণী; এর মাথা গোলাকার এবং পিঠে কোনো পাখনা নেই — শুধু ছোট ছোট গুটিযুক্ত একটি নিচু খাঁজ থাকে। এরা অগভীর, প্রায়ই ঘোলা উপকূলীয় পানি ও মোহনায় বাস করে। বাংলাদেশে সুন্দরবনের উপকূল ও মেঘনা মোহনায় এদের পাওয়া যায়, যেখানে প্রায়ই মাছ ধরার জালে আটকে মারা পড়ে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Phocoenidae',
      genus: 'Neophocaena',
      species: 'N. phocaenoides',
    },
    physical: {
      size: { en: 'Up to about 1.9 m long', bn: 'প্রায় ১.৯ মিটার পর্যন্ত লম্বা' },
      weight: { en: 'Up to about 70 kg', bn: 'প্রায় ৭০ কেজি পর্যন্ত' },
      lifespan: { en: 'Around 20–25 years', bn: 'প্রায় ২০–২৫ বছর' },
      features: {
        en: ['No dorsal fin; a low ridge of small bumps instead', 'Round, beakless head', 'Uniform grey body'],
        bn: ['পিঠে পাখনা নেই, তার বদলে ছোট গুটির নিচু খাঁজ', 'ঠোঁটহীন গোলাকার মাথা', 'সারা শরীর একরঙা ধূসর'],
      },
    },
    habitat: {
      en: 'Shallow coastal waters, estuaries and mangrove creeks with soft, muddy bottoms',
      bn: 'নরম কাদাময় তলদেশের অগভীর উপকূলীয় সাগর, মোহনা ও ম্যানগ্রোভের খাঁড়ি',
    },
    habitats: ['ocean', 'mangrove'],
    regions: ['oceans', 'south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Coastal waters of the northern Indian Ocean, from the Persian Gulf through India and Bangladesh to Indonesia and southern China.',
      bn: 'উত্তর ভারত মহাসাগরের উপকূল — পারস্য উপসাগর থেকে ভারত ও বাংলাদেশ হয়ে ইন্দোনেশিয়া ও দক্ষিণ চীন পর্যন্ত।',
    },
    climate: { en: 'Tropical and subtropical coastal waters', bn: 'ক্রান্তীয় ও উপক্রান্তীয় উপকূলীয় পানি' },
    diet: {
      en: 'Carnivore — small fish, shrimp, squid and cuttlefish',
      bn: 'মাংসাশী — ছোট মাছ, চিংড়ি, স্কুইড ও কাটলফিশ',
    },
    ecologicalRole: {
      en: 'A small predator of shallow coastal food webs and an indicator of estuarine health.',
      bn: 'অগভীর উপকূলীয় খাদ্যজালের একটি ছোট শিকারি এবং মোহনার স্বাস্থ্যের নির্দেশক।',
    },
    behavior: {
      en: 'Usually seen alone or in pairs; surfaces quietly with little splash, making it hard to spot.',
      bn: 'সাধারণত একা বা জোড়ায় দেখা যায়; খুব কম ছলাৎ করে নিঃশব্দে ভেসে ওঠে, তাই চোখে পড়া কঠিন।',
    },
    range: {
      native: [
        [21.7, 89.8],
        [22.0, 91.0],
        [26.5, 52.5],
        [18.5, 72.5],
        [22.2, 114.0],
        [1.5, 109.0],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Drowning in gillnets and set-bag nets', 'Loss of estuarine habitat', 'Pollution and boat traffic'],
        bn: ['ফাঁস জাল ও বেহুন্দি জালে আটকে ডুবে মরা', 'মোহনার আবাসস্থল হারানো', 'দূষণ ও নৌযান চলাচল'],
      },
      initiatives: {
        en: ['Bycatch monitoring with coastal fishers in Bangladesh', 'Protected coastal waters in Hong Kong'],
        bn: ['বাংলাদেশে উপকূলীয় জেলেদের সঙ্গে জালে আটকানো প্রাণীর তথ্য সংগ্রহ', 'হংকংয়ে সংরক্ষিত উপকূলীয় জলসীমা'],
      },
      assessed: '2017',
    },
    facts: {
      en: ['It is one of the few cetaceans without any dorsal fin.', 'Its closest relative, the Yangtze finless porpoise, lives in fresh water.'],
      bn: ['পিঠে একেবারেই পাখনা নেই এমন অল্প কয়েকটি তিমিগোত্রীয় প্রাণীর একটি এটি।', 'এর নিকটতম আত্মীয় ইয়াংজি পাখনাহীন পরপয়েস মিঠা পানিতে বাস করে।'],
    },
    related: ['irrawaddy-dolphin', 'indo-pacific-humpback-dolphin', 'vaquita', 'ganges-river-dolphin'],
  },
  {
    id: 'brydes-whale',
    commonName: { en: 'Bryde’s Whale', bn: 'ব্রাইডস তিমি' },
    scientificName: 'Balaenoptera edeni',
    altNames: {
      en: ['Brydes Whale', 'Eden’s Whale', 'Tropical Whale'],
      bn: ['ব্রাইডের তিমি', 'ইডেনের তিমি', 'ক্রান্তীয় তিমি'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Bryde\'s whale',
    description: {
      en: 'Bryde’s whale is a medium-sized baleen whale that, unlike most of its relatives, stays in warm tropical and subtropical waters all year rather than migrating to the poles. It is easily identified by three ridges running along the top of its head. Bryde’s whales are regularly sighted in the Swatch of No Ground off Bangladesh, which makes them the country’s most often seen great whale.',
      bn: 'ব্রাইডস তিমি মাঝারি আকারের একটি ব্যালিন তিমি; অধিকাংশ আত্মীয়ের মতো মেরু অঞ্চলে পরিযান না করে এরা সারা বছর উষ্ণ ক্রান্তীয় ও উপক্রান্তীয় সাগরে থাকে। মাথার ওপর লম্বালম্বি তিনটি উঁচু রেখা দেখে এদের সহজেই চেনা যায়। বাংলাদেশের সোয়াচ অব নো গ্রাউন্ডে এদের নিয়মিত দেখা যায়, তাই এটি দেশের সমুদ্রে সবচেয়ে বেশি দেখা বড় তিমি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Balaenopteridae',
      genus: 'Balaenoptera',
      species: 'B. edeni',
    },
    physical: {
      size: { en: 'About 12–16 m long', bn: 'প্রায় ১২–১৬ মিটার লম্বা' },
      weight: { en: 'Roughly 12–25 tonnes', bn: 'প্রায় ১২–২৫ টন' },
      lifespan: { en: 'Around 50 years or more', bn: 'প্রায় ৫০ বছর বা তার বেশি' },
      features: {
        en: ['Three parallel ridges on top of the head', 'Smoky dark-grey back and pale belly', 'Tall, hooked dorsal fin'],
        bn: ['মাথার ওপর তিনটি সমান্তরাল উঁচু রেখা', 'পিঠ ধোঁয়াটে গাঢ় ধূসর, পেট ফ্যাকাশে', 'উঁচু ও বাঁকানো পিঠের পাখনা'],
      },
    },
    habitat: {
      en: 'Warm open ocean and productive coastal waters, including submarine canyons',
      bn: 'উষ্ণ খোলা সাগর এবং সমুদ্রতলের খাদসহ খাদ্যসমৃদ্ধ উপকূলীয় পানি',
    },
    habitats: ['ocean'],
    regions: ['oceans', 'south-asia', 'southeast-asia', 'africa', 'oceania'],
    distribution: {
      en: 'Tropical and warm-temperate waters of the Indian, Pacific and Atlantic Oceans, roughly between 40° N and 40° S.',
      bn: 'ভারত, প্রশান্ত ও আটলান্টিক মহাসাগরের ক্রান্তীয় ও উষ্ণ-নাতিশীতোষ্ণ অঞ্চল, মোটামুটি ৪০° উত্তর থেকে ৪০° দক্ষিণ অক্ষাংশের মধ্যে।',
    },
    climate: { en: 'Warm seas, generally above about 16 °C', bn: 'উষ্ণ সাগর, সাধারণত প্রায় ১৬ °সে-এর বেশি তাপমাত্রা' },
    diet: {
      en: 'Filter feeder — schooling fish such as sardines and anchovies, plus krill',
      bn: 'ছাঁকনি-ভোজী — সার্ডিন ও অ্যাঙ্কোভির মতো ঝাঁকের মাছ এবং ক্রিল',
    },
    ecologicalRole: {
      en: 'Its feeding and waste recycle nutrients through tropical seas, and its carcasses feed deep-sea life.',
      bn: 'খাওয়া ও বর্জ্যের মাধ্যমে ক্রান্তীয় সাগরে পুষ্টি উপাদান ঘুরিয়ে আনে; মৃতদেহ গভীর সাগরের প্রাণীদের খাদ্য জোগায়।',
    },
    behavior: {
      en: 'Usually alone or in pairs; makes sudden direction changes and lunges through fish schools near the surface.',
      bn: 'সাধারণত একা বা জোড়ায় থাকে; হঠাৎ দিক বদলায় এবং পানির ওপরের দিকে মাছের ঝাঁকের মধ্যে হাঁ করে ঝাঁপিয়ে পড়ে।',
    },
    range: {
      native: [
        [21.2, 89.5],
        [13.0, 100.6],
        [27.0, -111.0],
        [-34.5, 22.5],
        [-36.4, 175.1],
        [32.5, 133.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Ship strikes', 'Entanglement in fishing gear', 'Underwater noise'],
        bn: ['জাহাজের সঙ্গে সংঘর্ষ', 'মাছ ধরার সরঞ্জামে জড়িয়ে পড়া', 'পানির নিচের শব্দদূষণ'],
      },
      initiatives: {
        en: ['Swatch of No Ground Marine Protected Area in Bangladesh', 'International Whaling Commission moratorium on commercial whaling'],
        bn: ['বাংলাদেশে সোয়াচ অব নো গ্রাউন্ড সামুদ্রিক সংরক্ষিত এলাকা', 'আন্তর্জাতিক তিমি শিকার কমিশনের বাণিজ্যিক তিমি শিকার নিষেধাজ্ঞা'],
      },
    },
    facts: {
      en: ['Its name honours Johan Bryde, who helped set up the first whaling station in South Africa.', 'Unlike most baleen whales, it does not undertake long polar migrations.'],
      bn: ['দক্ষিণ আফ্রিকায় প্রথম তিমি শিকার কেন্দ্র স্থাপনে সাহায্যকারী ইয়োহান ব্রাইডের নামে এর নামকরণ।', 'বেশির ভাগ ব্যালিন তিমির মতো এরা মেরু অঞ্চলে দীর্ঘ পরিযান করে না।'],
    },
    related: ['blue-whale', 'fin-whale', 'humpback-whale', 'indo-pacific-bottlenose-dolphin'],
  },
  {
    id: 'orca',
    commonName: { en: 'Orca', bn: 'ওরকা' },
    scientificName: 'Orcinus orca',
    altNames: {
      en: ['Killer Whale', 'Blackfish'],
      bn: ['ঘাতক তিমি', 'খুনি তিমি'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Orca',
    description: {
      en: 'The orca, or killer whale, is the largest member of the dolphin family and a top predator found in every ocean. Its striking black-and-white pattern and tall dorsal fin make it unmistakable. Orcas live in tight family groups called pods, and different populations specialise in prey ranging from fish to seals and even large whales.',
      bn: 'ওরকা বা ঘাতক তিমি ডলফিন পরিবারের সবচেয়ে বড় সদস্য এবং পৃথিবীর সব মহাসাগরে বিচরণকারী শীর্ষ শিকারি। এর চোখধাঁধানো সাদা-কালো নকশা ও উঁচু পিঠের পাখনা একে সহজেই চিনিয়ে দেয়। ওরকারা “পড” নামে ঘনিষ্ঠ পারিবারিক দলে থাকে, আর ভিন্ন ভিন্ন জনগোষ্ঠী মাছ থেকে শুরু করে সিল, এমনকি বড় তিমি শিকারেও দক্ষ।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Delphinidae',
      genus: 'Orcinus',
      species: 'O. orca',
    },
    physical: {
      size: { en: 'Males 6–8 m; females 5–7 m long', bn: 'পুরুষ ৬–৮ মিটার; স্ত্রী ৫–৭ মিটার লম্বা' },
      weight: { en: 'Males up to about 6 tonnes; females 3–4 tonnes', bn: 'পুরুষ প্রায় ৬ টন পর্যন্ত; স্ত্রী ৩–৪ টন' },
      lifespan: { en: 'Females 50–80 years; males usually 30–50 years', bn: 'স্ত্রী ৫০–৮০ বছর; পুরুষ সাধারণত ৩০–৫০ বছর' },
      features: {
        en: ['Black body with white eye patch and white belly', 'Male dorsal fin can reach 1.8 m tall', 'Grey “saddle patch” behind the fin'],
        bn: ['কালো শরীর, চোখের পাশে সাদা ছোপ ও সাদা পেট', 'পুরুষের পিঠের পাখনা ১.৮ মিটার পর্যন্ত উঁচু হতে পারে', 'পাখনার পেছনে ধূসর “স্যাডল” দাগ'],
      },
    },
    habitat: {
      en: 'All oceans, most common in cold, productive coastal waters',
      bn: 'সব মহাসাগর, তবে ঠান্ডা ও খাদ্যসমৃদ্ধ উপকূলীয় পানিতে বেশি দেখা যায়',
    },
    habitats: ['ocean', 'polar'],
    regions: ['oceans', 'polar', 'north-america', 'europe'],
    distribution: {
      en: 'Worldwide, from the Arctic and Antarctic to the tropics, including occasional sightings in the Bay of Bengal.',
      bn: 'সারা বিশ্বে — উত্তর ও দক্ষিণ মেরু থেকে ক্রান্তীয় অঞ্চল পর্যন্ত; বঙ্গোপসাগরেও মাঝে মাঝে দেখা যায়।',
    },
    climate: { en: 'Polar to tropical seas; most abundant in cold waters', bn: 'মেরু থেকে ক্রান্তীয় সাগর; ঠান্ডা পানিতে সংখ্যায় বেশি' },
    diet: {
      en: 'Carnivore — fish such as salmon, seals, sea lions, penguins, sharks and other whales, depending on population',
      bn: 'মাংসাশী — জনগোষ্ঠীভেদে স্যামন মাছ, সিল, সি-লায়ন, পেঙ্গুইন, হাঙর ও অন্যান্য তিমি',
    },
    ecologicalRole: {
      en: 'The ocean’s apex predator, shaping the behaviour and numbers of seals, fish and other whales.',
      bn: 'সাগরের শীর্ষ শিকারি; সিল, মাছ ও অন্যান্য তিমির আচরণ ও সংখ্যা নিয়ন্ত্রণ করে।',
    },
    behavior: {
      en: 'Lives in matriarchal pods with distinct dialects and hunting traditions passed between generations.',
      bn: 'মাতৃপ্রধান দলে থাকে; প্রতিটি দলের নিজস্ব “ভাষা” ও শিকারের কৌশল প্রজন্ম থেকে প্রজন্মে চলে আসে।',
    },
    range: {
      native: [
        [48.6, -123.2],
        [69.7, 17.5],
        [-65.0, -65.0],
        [-46.4, 51.5],
        [64.0, -22.5],
        [-36.8, 174.9],
      ],
    },
    conservation: {
      status: 'DD',
      trend: 'unknown',
      threats: {
        en: ['Decline of prey such as salmon', 'Chemical pollutants (PCBs) accumulating in their bodies', 'Vessel noise and disturbance'],
        bn: ['স্যামনের মতো শিকার প্রাণীর সংখ্যা কমে যাওয়া', 'শরীরে পিসিবির মতো রাসায়নিক দূষক জমা হওয়া', 'নৌযানের শব্দ ও উৎপাত'],
      },
      initiatives: {
        en: ['Recovery plans for endangered Southern Resident orcas in the USA and Canada', 'Restrictions on keeping orcas in captivity in several countries'],
        bn: ['যুক্তরাষ্ট্র ও কানাডায় বিপন্ন “সাউদার্ন রেসিডেন্ট” ওরকা পুনরুদ্ধার পরিকল্পনা', 'কয়েকটি দেশে ওরকাকে আবদ্ধ রাখায় নিষেধাজ্ঞা'],
      },
    },
    facts: {
      en: ['Despite the name “killer whale”, it is actually a dolphin.', 'Like humans, female orcas go through menopause and older females lead the group.'],
      bn: ['“ঘাতক তিমি” নাম হলেও এটি আসলে একটি ডলফিন।', 'মানুষের মতো স্ত্রী ওরকারও রজোনিবৃত্তি হয়, আর বয়স্ক মাদিরাই দলের নেতৃত্ব দেয়।'],
    },
    related: ['common-bottlenose-dolphin', 'humpback-whale', 'sea-otter', 'great-white-shark'],
  },
  {
    id: 'humpback-whale',
    commonName: { en: 'Humpback Whale', bn: 'কুঁজো তিমি' },
    scientificName: 'Megaptera novaeangliae',
    altNames: {
      en: ['Humpback'],
      bn: ['হাম্পব্যাক তিমি'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Humpback whale',
    description: {
      en: 'The humpback whale is a large baleen whale famous for its acrobatic breaches and its long, complex songs. It has enormous pectoral flippers up to a third of its body length. Most populations migrate thousands of kilometres between cold feeding grounds and warm tropical breeding waters, though a unique non-migratory population lives year-round in the Arabian Sea.',
      bn: 'কুঁজো তিমি একটি বড় ব্যালিন তিমি, যা পানি থেকে লাফিয়ে ওঠা এবং দীর্ঘ ও জটিল গানের জন্য বিখ্যাত। এর বুকের পাখনা বিশাল — দেহের দৈর্ঘ্যের প্রায় এক-তৃতীয়াংশ। বেশির ভাগ জনগোষ্ঠী ঠান্ডা খাদ্যভূমি আর উষ্ণ প্রজননস্থলের মধ্যে হাজার হাজার কিলোমিটার পরিযান করে, তবে আরব সাগরের একটি বিশেষ জনগোষ্ঠী সারা বছর একই জায়গায় থাকে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Balaenopteridae',
      genus: 'Megaptera',
      species: 'M. novaeangliae',
    },
    physical: {
      size: { en: 'About 12–16 m long', bn: 'প্রায় ১২–১৬ মিটার লম্বা' },
      weight: { en: 'About 25–30 tonnes, sometimes more', bn: 'প্রায় ২৫–৩০ টন, কখনো কখনো আরও বেশি' },
      lifespan: { en: 'Around 45–50 years or more', bn: 'প্রায় ৪৫–৫০ বছর বা তার বেশি' },
      features: {
        en: ['Very long pectoral flippers, up to 5 m', 'Knobby bumps (tubercles) on the head', 'Tail flukes with a black-and-white pattern unique to each whale'],
        bn: ['খুব লম্বা বুকের পাখনা, ৫ মিটার পর্যন্ত', 'মাথায় গুটি গুটি উঁচু ঢিবি', 'লেজের পাখনায় সাদা-কালো নকশা, যা প্রতিটি তিমির আলাদা'],
      },
    },
    habitat: {
      en: 'Open ocean and coastal waters, from polar feeding grounds to tropical breeding grounds',
      bn: 'খোলা সাগর ও উপকূলীয় পানি — মেরু অঞ্চলের খাদ্যভূমি থেকে ক্রান্তীয় প্রজননস্থল পর্যন্ত',
    },
    habitats: ['ocean', 'polar', 'coral-reef'],
    regions: ['oceans', 'polar', 'north-america', 'oceania'],
    distribution: {
      en: 'All major oceans, migrating between high-latitude feeding areas and tropical breeding areas such as Hawaii, the Caribbean and Tonga.',
      bn: 'সব বড় মহাসাগরে; উচ্চ অক্ষাংশের খাদ্যভূমি এবং হাওয়াই, ক্যারিবীয় ও টোঙ্গার মতো ক্রান্তীয় প্রজননস্থলের মধ্যে পরিযান করে।',
    },
    climate: { en: 'Polar and temperate seas for feeding; tropical seas for breeding', bn: 'খাওয়ার জন্য মেরু ও নাতিশীতোষ্ণ সাগর; প্রজননের জন্য ক্রান্তীয় সাগর' },
    diet: {
      en: 'Filter feeder — krill and small schooling fish such as herring and capelin',
      bn: 'ছাঁকনি-ভোজী — ক্রিল এবং হেরিং ও ক্যাপেলিনের মতো ছোট ঝাঁকের মাছ',
    },
    ecologicalRole: {
      en: 'Its nutrient-rich waste fertilises plankton growth, carrying nutrients across oceans during migration.',
      bn: 'এর পুষ্টিসমৃদ্ধ বর্জ্য প্ল্যাংকটন বৃদ্ধিতে সার হিসেবে কাজ করে এবং পরিযানের সময় পুষ্টি উপাদান এক সাগর থেকে আরেক সাগরে পৌঁছে দেয়।',
    },
    behavior: {
      en: 'Males sing hours-long songs on breeding grounds; groups cooperate to trap fish in “bubble nets”.',
      bn: 'প্রজননস্থলে পুরুষ তিমিরা ঘণ্টার পর ঘণ্টা গান গায়; দলবেঁধে বুদ্বুদের “জাল” তৈরি করে মাছ আটকায়।',
    },
    range: {
      native: [
        [20.9, -156.9],
        [-64.5, -62.5],
        [42.3, -69.5],
        [-19.0, -174.5],
        [20.0, 59.5],
        [65.5, -18.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'increasing',
      threats: {
        en: ['Entanglement in fishing gear', 'Ship strikes', 'Ocean noise and climate change affecting krill'],
        bn: ['মাছ ধরার সরঞ্জামে জড়িয়ে পড়া', 'জাহাজের সঙ্গে সংঘর্ষ', 'সাগরের শব্দদূষণ এবং ক্রিলের ওপর জলবায়ু পরিবর্তনের প্রভাব'],
      },
      initiatives: {
        en: ['International ban on commercial whaling since 1986', 'Marine sanctuaries in breeding areas such as Hawaii'],
        bn: ['১৯৮৬ সাল থেকে বাণিজ্যিক তিমি শিকারে আন্তর্জাতিক নিষেধাজ্ঞা', 'হাওয়াইয়ের মতো প্রজননস্থলে সামুদ্রিক অভয়ারণ্য'],
      },
      assessed: '2018',
    },
    facts: {
      en: ['All males in a population sing the same song, which slowly changes from year to year.', 'Humpbacks have been seen protecting seals and other animals from orcas.'],
      bn: ['একটি জনগোষ্ঠীর সব পুরুষ একই গান গায়, আর সেই গান বছরে বছরে ধীরে ধীরে বদলায়।', 'কুঁজো তিমিকে ওরকার আক্রমণ থেকে সিল ও অন্য প্রাণীকে রক্ষা করতে দেখা গেছে।'],
    },
    related: ['blue-whale', 'fin-whale', 'orca', 'brydes-whale'],
  },
  {
    id: 'sperm-whale',
    commonName: { en: 'Sperm Whale', bn: 'স্পার্ম তিমি' },
    scientificName: 'Physeter macrocephalus',
    altNames: {
      en: ['Cachalot'],
      bn: ['ক্যাশালট'],
    },
    synonyms: ['Physeter catodon'],
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Sperm whale',
    description: {
      en: 'The sperm whale is the largest toothed predator on Earth and has the biggest brain of any animal. Its huge, box-shaped head holds spermaceti, a waxy oil once prized by whalers. Sperm whales dive more than a kilometre deep to hunt squid in total darkness, using powerful clicks to find their prey.',
      bn: 'স্পার্ম তিমি পৃথিবীর সবচেয়ে বড় দাঁতওয়ালা শিকারি প্রাণী এবং সব প্রাণীর মধ্যে এর মস্তিষ্ক সবচেয়ে বড়। এর বিশাল বাক্সের মতো মাথায় থাকে স্পার্মাসেটি নামের মোমের মতো তেল, যা একসময় তিমি শিকারিদের কাছে খুব দামি ছিল। পুরোপুরি অন্ধকারে স্কুইড শিকারের জন্য এরা এক কিলোমিটারেরও বেশি গভীরে ডুব দেয় এবং জোরালো “ক্লিক” শব্দ দিয়ে শিকার খুঁজে বের করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Physeteridae',
      genus: 'Physeter',
      species: 'P. macrocephalus',
    },
    physical: {
      size: { en: 'Males up to about 16–18 m; females about 11 m', bn: 'পুরুষ প্রায় ১৬–১৮ মিটার পর্যন্ত; স্ত্রী প্রায় ১১ মিটার' },
      weight: { en: 'Males up to about 45 tonnes; females about 15 tonnes', bn: 'পুরুষ প্রায় ৪৫ টন পর্যন্ত; স্ত্রী প্রায় ১৫ টন' },
      lifespan: { en: 'About 60–70 years', bn: 'প্রায় ৬০–৭০ বছর' },
      features: {
        en: ['Massive square head making up about a third of the body', 'Narrow lower jaw with cone-shaped teeth', 'Wrinkled, prune-like skin on the back'],
        bn: ['দেহের প্রায় এক-তৃতীয়াংশ জুড়ে বিশাল চৌকো মাথা', 'সরু নিচের চোয়ালে শঙ্কু আকৃতির দাঁত', 'পিঠের চামড়া কুঁচকানো, শুকনো আলুবোখারার মতো'],
      },
    },
    habitat: {
      en: 'Deep open ocean, especially near continental slopes and submarine canyons',
      bn: 'গভীর খোলা সাগর, বিশেষত মহাদেশীয় ঢাল ও সমুদ্রতলের খাদের কাছে',
    },
    habitats: ['ocean'],
    regions: ['oceans'],
    distribution: {
      en: 'Worldwide in deep waters; females and young stay in warmer seas while adult males range into polar waters.',
      bn: 'সারা বিশ্বের গভীর সাগরে; মাদি ও বাচ্চারা উষ্ণ সাগরে থাকে, আর প্রাপ্তবয়স্ক পুরুষেরা মেরু অঞ্চলের পানি পর্যন্ত যায়।',
    },
    climate: { en: 'Tropical to polar seas', bn: 'ক্রান্তীয় থেকে মেরু অঞ্চলের সাগর' },
    diet: {
      en: 'Carnivore — mainly deep-sea squid, including giant squid, plus some fish',
      bn: 'মাংসাশী — প্রধানত গভীর সাগরের স্কুইড (দৈত্যাকার স্কুইডসহ) এবং কিছু মাছ',
    },
    ecologicalRole: {
      en: 'A top deep-sea predator that brings iron-rich nutrients from the depths to the surface, boosting plankton growth.',
      bn: 'গভীর সাগরের শীর্ষ শিকারি; গভীর থেকে লৌহসমৃদ্ধ পুষ্টি উপাদান ওপরে নিয়ে এসে প্ল্যাংকটনের বৃদ্ধি বাড়ায়।',
    },
    behavior: {
      en: 'Females live in stable social units that babysit each other’s calves; whales rest by floating vertically near the surface.',
      bn: 'মাদিরা স্থায়ী সামাজিক দলে থাকে এবং একে অপরের বাচ্চার দেখাশোনা করে; বিশ্রামের সময় পানির ওপরের দিকে খাড়া হয়ে ভেসে থাকে।',
    },
    range: {
      native: [
        [15.3, -61.6],
        [38.5, -28.5],
        [-42.6, 173.8],
        [5.6, 80.8],
        [69.4, 15.5],
        [27.0, -90.0],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'unknown',
      threats: {
        en: ['Ship strikes', 'Entanglement in fishing gear', 'Swallowing plastic debris'],
        bn: ['জাহাজের সঙ্গে সংঘর্ষ', 'মাছ ধরার সরঞ্জামে জড়িয়ে পড়া', 'প্লাস্টিক বর্জ্য গিলে ফেলা'],
      },
      initiatives: {
        en: ['International moratorium on commercial whaling', 'Protected areas such as the Dominica sperm whale reserve'],
        bn: ['বাণিজ্যিক তিমি শিকারে আন্তর্জাতিক নিষেধাজ্ঞা', 'ডোমিনিকার স্পার্ম তিমি সংরক্ষিত এলাকার মতো সুরক্ষিত অঞ্চল'],
      },
      assessed: '2019',
    },
    facts: {
      en: ['Its clicks are among the loudest sounds made by any animal.', 'Ambergris, a rare substance used in perfumes, forms in its intestines.', 'It inspired the white whale in the novel “Moby-Dick”.'],
      bn: ['এর “ক্লিক” শব্দ প্রাণিজগতের সবচেয়ে জোরালো শব্দগুলোর একটি।', 'সুগন্ধি তৈরিতে ব্যবহৃত দুর্লভ পদার্থ অ্যাম্বারগ্রিস এর অন্ত্রে তৈরি হয়।', '“মবি-ডিক” উপন্যাসের সাদা তিমির অনুপ্রেরণা এই প্রজাতি।'],
    },
    related: ['blue-whale', 'orca', 'humpback-whale', 'narwhal'],
  },
  {
    id: 'fin-whale',
    commonName: { en: 'Fin Whale', bn: 'ফিন তিমি' },
    scientificName: 'Balaenoptera physalus',
    altNames: {
      en: ['Finback Whale', 'Razorback', 'Common Rorqual'],
      bn: ['ফিনব্যাক তিমি', 'রেজারব্যাক তিমি', 'সাধারণ ররকুয়াল'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Fin whale',
    description: {
      en: 'The fin whale is the second-largest animal on Earth after the blue whale. Long and streamlined, it is one of the fastest great whales and is sometimes called the “greyhound of the sea”. Its jaw is asymmetrically coloured — white on the right side and dark on the left.',
      bn: 'ফিন তিমি নীল তিমির পরেই পৃথিবীর দ্বিতীয় বৃহত্তম প্রাণী। লম্বা ও মসৃণ গড়নের এই তিমি বড় তিমিদের মধ্যে অন্যতম দ্রুতগামী, তাই একে কখনো কখনো “সাগরের গ্রেহাউন্ড” বলা হয়। এর চোয়ালের রং দুই পাশে আলাদা — ডান দিকে সাদা আর বাঁ দিকে কালচে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Balaenopteridae',
      genus: 'Balaenoptera',
      species: 'B. physalus',
    },
    physical: {
      size: { en: 'Usually 18–24 m long; up to about 26 m in the Southern Hemisphere', bn: 'সাধারণত ১৮–২৪ মিটার লম্বা; দক্ষিণ গোলার্ধে প্রায় ২৬ মিটার পর্যন্ত' },
      weight: { en: 'About 40–80 tonnes', bn: 'প্রায় ৪০–৮০ টন' },
      lifespan: { en: 'About 80–90 years', bn: 'প্রায় ৮০–৯০ বছর' },
      features: {
        en: ['Asymmetric jaw colour — white on the right, dark on the left', 'Prominent ridge along the back behind the dorsal fin', 'Slim, V-shaped head'],
        bn: ['চোয়ালের রং অসমান — ডান দিকে সাদা, বাঁ দিকে কালচে', 'পিঠের পাখনার পেছনে স্পষ্ট উঁচু খাঁজ', 'সরু, ইংরেজি V-আকৃতির মাথা'],
      },
    },
    habitat: {
      en: 'Deep offshore waters and continental shelf edges',
      bn: 'গভীর সমুদ্র এবং মহীসোপানের কিনারা',
    },
    habitats: ['ocean', 'polar'],
    regions: ['oceans', 'europe', 'north-america', 'polar'],
    distribution: {
      en: 'All major oceans, most common in temperate and polar waters; a resident population lives in the Mediterranean.',
      bn: 'সব বড় মহাসাগরে, তবে নাতিশীতোষ্ণ ও মেরু অঞ্চলের পানিতে বেশি; ভূমধ্যসাগরে একটি স্থায়ী জনগোষ্ঠী আছে।',
    },
    climate: { en: 'Temperate and polar seas, wintering in warmer waters', bn: 'নাতিশীতোষ্ণ ও মেরু অঞ্চলের সাগর; শীতকালে উষ্ণ পানিতে যায়' },
    diet: {
      en: 'Filter feeder — krill, copepods and small schooling fish',
      bn: 'ছাঁকনি-ভোজী — ক্রিল, কোপিপড ও ছোট ঝাঁকের মাছ',
    },
    ecologicalRole: {
      en: 'A major consumer of krill whose waste recycles nutrients that fuel ocean productivity.',
      bn: 'ক্রিলের প্রধান ভোক্তাদের একটি; এর বর্জ্য পুষ্টি উপাদান ফিরিয়ে দিয়ে সাগরের উৎপাদনশীলতা বাড়ায়।',
    },
    behavior: {
      en: 'Swims fast, alone or in small groups, and produces very low-frequency calls that travel hundreds of kilometres.',
      bn: 'একা বা ছোট দলে দ্রুত সাঁতরায় এবং খুব নিচু কম্পাঙ্কের ডাক দেয়, যা শত শত কিলোমিটার দূরে পৌঁছায়।',
    },
    range: {
      native: [
        [43.3, 8.5],
        [49.5, -64.0],
        [-60.0, -50.0],
        [28.0, -112.5],
        [70.0, 5.0],
        [62.0, -25.0],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'increasing',
      threats: {
        en: ['Ship strikes, especially in the Mediterranean', 'Limited ongoing whaling', 'Underwater noise'],
        bn: ['জাহাজের সঙ্গে সংঘর্ষ, বিশেষত ভূমধ্যসাগরে', 'সীমিত পরিসরে এখনো চলা তিমি শিকার', 'পানির নিচের শব্দদূষণ'],
      },
      initiatives: {
        en: ['Pelagos Sanctuary for marine mammals in the Mediterranean', 'International Whaling Commission moratorium'],
        bn: ['ভূমধ্যসাগরে সামুদ্রিক স্তন্যপায়ীদের জন্য পেলাগোস অভয়ারণ্য', 'আন্তর্জাতিক তিমি শিকার কমিশনের নিষেধাজ্ঞা'],
      },
      assessed: '2018',
    },
    facts: {
      en: ['It can reach speeds of about 37 km/h in short bursts.', 'Around three-quarters of a million fin whales were killed in the 20th century.'],
      bn: ['স্বল্প সময়ের জন্য এরা ঘণ্টায় প্রায় ৩৭ কিলোমিটার বেগে সাঁতরাতে পারে।', 'বিংশ শতাব্দীতে প্রায় সাড়ে সাত লাখ ফিন তিমি শিকার করা হয়েছিল।'],
    },
    related: ['blue-whale', 'humpback-whale', 'brydes-whale', 'north-atlantic-right-whale'],
  },
  {
    id: 'dugong',
    commonName: { en: 'Dugong', bn: 'ডুগং' },
    scientificName: 'Dugong dugon',
    altNames: {
      en: ['Sea Cow'],
      bn: ['সামুদ্রিক গাভি'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Dugong',
    description: {
      en: 'The dugong is a large, gentle marine mammal that grazes on seagrass in warm coastal waters, earning it the name “sea cow”. It is the only living member of its family and is more closely related to elephants than to whales or seals. Sailors’ tales of mermaids are often linked to sightings of dugongs and their manatee relatives.',
      bn: 'ডুগং একটি বড় ও শান্ত সামুদ্রিক স্তন্যপায়ী, যা উষ্ণ উপকূলীয় সাগরে সামুদ্রিক ঘাস চরে খায় — তাই একে “সামুদ্রিক গাভি” বলা হয়। নিজ পরিবারের এটিই একমাত্র জীবিত সদস্য, আর তিমি বা সিলের চেয়ে হাতির সঙ্গেই এর আত্মীয়তা বেশি। নাবিকদের মৎস্যকন্যার গল্পের পেছনে প্রায়ই ডুগং ও এর আত্মীয় ম্যানাটিকে দেখার ঘটনা জড়িত বলে মনে করা হয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Sirenia',
      family: 'Dugongidae',
      genus: 'Dugong',
      species: 'D. dugon',
    },
    physical: {
      size: { en: 'About 2.5–3 m long', bn: 'প্রায় ২.৫–৩ মিটার লম্বা' },
      weight: { en: 'About 250–500 kg', bn: 'প্রায় ২৫০–৫০০ কেজি' },
      lifespan: { en: 'Up to about 70 years', bn: 'প্রায় ৭০ বছর পর্যন্ত' },
      features: {
        en: ['Whale-like fluked tail, unlike the paddle tail of manatees', 'Downturned snout for grazing on the seabed', 'Males have short tusks'],
        bn: ['তিমির মতো দুই ভাগে বিভক্ত লেজ, ম্যানাটির বৈঠার মতো লেজ নয়', 'সমুদ্রতলে চরার জন্য নিচের দিকে বাঁকানো মুখ', 'পুরুষের ছোট গজদাঁত থাকে'],
      },
    },
    habitat: {
      en: 'Shallow, warm coastal waters with seagrass meadows, bays and lagoons',
      bn: 'সামুদ্রিক ঘাসের মাঠসহ অগভীর উষ্ণ উপকূলীয় সাগর, উপসাগর ও উপহ্রদ',
    },
    habitats: ['ocean', 'coral-reef', 'mangrove'],
    regions: ['oceans', 'south-asia', 'southeast-asia', 'africa', 'oceania'],
    distribution: {
      en: 'Indo-West Pacific coasts from East Africa and the Red Sea to Australia and Vanuatu; Australia holds the largest populations.',
      bn: 'পূর্ব আফ্রিকা ও লোহিত সাগর থেকে অস্ট্রেলিয়া ও ভানুয়াতু পর্যন্ত ভারত-পশ্চিম প্রশান্ত মহাসাগরের উপকূল; সবচেয়ে বেশি আছে অস্ট্রেলিয়ায়।',
    },
    climate: { en: 'Tropical and subtropical seas', bn: 'ক্রান্তীয় ও উপক্রান্তীয় সাগর' },
    diet: {
      en: 'Herbivore — almost entirely seagrasses, uprooting whole plants',
      bn: 'তৃণভোজী — প্রায় পুরোপুরি সামুদ্রিক ঘাস, গোটা গাছ শিকড়সহ তুলে খায়',
    },
    ecologicalRole: {
      en: 'Its grazing keeps seagrass meadows healthy and recycles nutrients in the seabed.',
      bn: 'চরে খাওয়ার মাধ্যমে সামুদ্রিক ঘাসের মাঠ সুস্থ রাখে এবং সমুদ্রতলে পুষ্টি উপাদান ঘুরিয়ে আনে।',
    },
    behavior: {
      en: 'Slow-moving and often solitary or in small groups; breeds very slowly, with one calf every few years.',
      bn: 'ধীরগতির, প্রায়ই একা বা ছোট দলে থাকে; প্রজনন খুব ধীর — কয়েক বছরে মাত্র একটি বাচ্চা হয়।',
    },
    range: {
      native: [
        [-25.8, 113.5],
        [-10.3, 142.3],
        [25.0, 35.5],
        [9.1, 79.3],
        [24.6, 52.5],
        [11.0, 119.6],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Loss of seagrass meadows', 'Drowning in fishing nets', 'Hunting and boat strikes'],
        bn: ['সামুদ্রিক ঘাসের মাঠ ধ্বংস', 'মাছ ধরার জালে আটকে ডুবে মরা', 'শিকার ও নৌযানের আঘাত'],
      },
      initiatives: {
        en: ['CMS Dugong Memorandum of Understanding', 'Seagrass protection in the Great Barrier Reef and Gulf of Mannar'],
        bn: ['পরিযায়ী প্রাণী সংরক্ষণ সনদের (সিএমএস) ডুগং সমঝোতা স্মারক', 'গ্রেট ব্যারিয়ার রিফ ও মান্নার উপসাগরে সামুদ্রিক ঘাস সংরক্ষণ'],
      },
      assessed: '2019',
    },
    facts: {
      en: ['Its closest living relatives on land are elephants.', 'It is the only strictly marine plant-eating mammal.'],
      bn: ['স্থলে এর নিকটতম জীবিত আত্মীয় হলো হাতি।', 'পুরোপুরি সামুদ্রিক তৃণভোজী স্তন্যপায়ী হিসেবে এটিই একমাত্র।'],
    },
    related: ['west-indian-manatee', 'green-sea-turtle', 'asian-elephant'],
  },
];
