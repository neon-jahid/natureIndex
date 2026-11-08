import type { Species } from '@/types';

export const freshwaterMammals1: Species[] = [
  {
    id: 'smooth-coated-otter',
    commonName: { en: 'Smooth-coated Otter', bn: 'উদবিড়াল' },
    scientificName: 'Lutrogale perspicillata',
    altNames: {
      en: ['Smooth Otter', 'Indian Smooth-coated Otter', 'Fishing Otter'],
      bn: ['ভোঁদড়', 'মসৃণ লোমের উদবিড়াল', 'মাছধরা উদ'],
    },
    synonyms: ['Lutra perspicillata'],
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Smooth-coated otter',
    description: {
      en: 'The smooth-coated otter is the largest otter of South and Southeast Asia and the most common otter in Bangladesh, named for its short, sleek fur. It lives in family groups along rivers, swamps and the Sundarbans mangroves. In Narail and nearby districts a few fishing families still keep trained otters that drive fish into their nets — one of the last surviving traditions of otter fishing in the world.',
      bn: 'উদবিড়াল দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার সবচেয়ে বড় ভোঁদড় এবং বাংলাদেশে সবচেয়ে বেশি দেখা যাওয়া ভোঁদড় প্রজাতি; ছোট ও চকচকে মসৃণ লোম থেকেই এর ইংরেজি নাম। এরা পরিবারবদ্ধ হয়ে নদী, জলাভূমি ও সুন্দরবনের খালে বাস করে। নড়াইল ও আশপাশের জেলায় কিছু জেলে পরিবার এখনো পোষা উদবিড়াল দিয়ে মাছ তাড়িয়ে জালে আনে — পৃথিবীতে উদ দিয়ে মাছ ধরার শেষ টিকে থাকা ঐতিহ্যগুলোর একটি এটি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Mustelidae',
      genus: 'Lutrogale',
      species: 'L. perspicillata',
    },
    physical: {
      size: {
        en: 'Head and body about 60–75 cm; tail 40–45 cm',
        bn: 'মাথাসহ দেহ প্রায় ৬০–৭৫ সেমি; লেজ ৪০–৪৫ সেমি',
      },
      weight: { en: '7–11 kg', bn: '৭–১১ কেজি' },
      lifespan: {
        en: 'Around 10 years in the wild; longer in captivity',
        bn: 'বনে প্রায় ১০ বছর; আবদ্ধ অবস্থায় আরও বেশি',
      },
      features: {
        en: [
          'Short, smooth, velvety brown fur with a paler throat',
          'Flattened, rudder-like tail and fully webbed feet',
          'Rounded head with a hairless, diamond-shaped nose pad',
        ],
        bn: [
          'ছোট, মসৃণ, মখমলের মতো বাদামি লোম; গলা তুলনামূলক হালকা রঙের',
          'হালের মতো চ্যাপ্টা লেজ ও পুরোপুরি জোড়া লাগানো পায়ের পাতা',
          'গোলাকার মাথা ও লোমহীন হীরা-আকৃতির নাকের ডগা',
        ],
      },
    },
    habitat: {
      en: 'Large rivers, lakes, swamps, rice fields and mangrove creeks',
      bn: 'বড় নদী, হ্রদ, জলাভূমি, ধানক্ষেত ও ম্যানগ্রোভ বনের খাল',
    },
    habitats: ['rivers-lakes', 'wetland', 'mangrove'],
    regions: ['south-asia', 'southeast-asia'],
    distribution: {
      en: 'From Pakistan, India, Nepal and Bangladesh through mainland Southeast Asia to Sumatra, Java and Borneo, with an isolated population in the marshes of Iraq.',
      bn: 'পাকিস্তান, ভারত, নেপাল ও বাংলাদেশ থেকে দক্ষিণ-পূর্ব এশিয়ার মূল ভূখণ্ড হয়ে সুমাত্রা, জাভা ও বোর্নিও পর্যন্ত; ইরাকের জলাভূমিতে একটি বিচ্ছিন্ন জনগোষ্ঠী আছে।',
    },
    climate: { en: 'Tropical and subtropical monsoon climates', bn: 'ক্রান্তীয় ও উপক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Mainly fish, plus crabs, prawns, frogs and occasionally water birds',
      bn: 'প্রধানত মাছ; এছাড়া কাঁকড়া, চিংড়ি, ব্যাঙ ও মাঝে মাঝে জলচর পাখি',
    },
    ecologicalRole: {
      en: 'As a top predator of wetlands it keeps fish populations healthy and signals clean, fish-rich water.',
      bn: 'জলাভূমির শীর্ষ শিকারি হিসেবে এরা মাছের সংখ্যা ভারসাম্যপূর্ণ রাখে; এদের উপস্থিতি পরিষ্কার ও মাছসমৃদ্ধ জলাশয়ের লক্ষণ।',
    },
    behavior: {
      en: 'Lives in family groups of up to about 10 that hunt cooperatively, herding fish into shallow water.',
      bn: 'প্রায় ১০টি পর্যন্ত সদস্যের পারিবারিক দলে থাকে এবং দলবেঁধে মাছ তাড়িয়ে অগভীর পানিতে এনে শিকার করে।',
    },
    range: {
      native: [
        [23.17, 89.5],
        [22.0, 89.5],
        [26.6, 78.5],
        [14.5, 100.5],
        [3.5, 101.5],
        [0.5, 101.5],
        [31.0, 47.0],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Illegal trade for fur and the pet market', 'Loss of wetlands and river pollution', 'Persecution by fish farmers'],
        bn: ['লোম ও পোষা প্রাণীর বাজারের জন্য অবৈধ পাচার', 'জলাভূমি হারানো ও নদীদূষণ', 'মাছচাষিদের হাতে নিধন'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix I since 2019', 'Protected under the Bangladesh Wildlife (Conservation and Security) Act 2012'],
        bn: ['২০১৯ সাল থেকে সাইটিস পরিশিষ্ট-১ এ তালিকাভুক্ত', 'বাংলাদেশ বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন ২০১২ অনুযায়ী সংরক্ষিত'],
      },
    },
    facts: {
      en: [
        'Otter fishing in the Narail region has been passed down through generations of fishing families.',
        'Trained otters do not keep the catch — they chase fish toward the net and are rewarded with a share.',
        'It is the only living member of the genus Lutrogale.',
      ],
      bn: [
        'নড়াইল অঞ্চলে উদবিড়াল দিয়ে মাছ ধরার কৌশল জেলে পরিবারগুলোতে বংশপরম্পরায় চলে আসছে।',
        'পোষা উদ মাছ নিজে নিয়ে যায় না — মাছ তাড়িয়ে জালের দিকে আনে, বিনিময়ে মাছের ভাগ পায়।',
        'Lutrogale গণের এটিই একমাত্র জীবিত প্রজাতি।',
      ],
    },
    related: ['eurasian-otter', 'asian-small-clawed-otter', 'fishing-cat', 'giant-otter'],
  },
  {
    id: 'eurasian-otter',
    commonName: { en: 'Eurasian Otter', bn: 'ইউরেশীয় উদবিড়াল' },
    scientificName: 'Lutra lutra',
    altNames: {
      en: ['European Otter', 'Common Otter', 'Old World Otter'],
      bn: ['ইউরোপীয় ভোঁদড়', 'সাধারণ ভোঁদড়', 'পাহাড়ি উদ'],
    },
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Eurasian otter',
    description: {
      en: 'The Eurasian otter has one of the widest ranges of any mammal in the Old World, from Ireland and Morocco to Japan’s neighbours and Indonesia. Mostly solitary and nocturnal, it lives along clean rivers, lakes and rocky coasts. After a severe crash caused by pesticides in the mid-20th century, it has made a remarkable comeback in much of Western Europe.',
      bn: 'ইউরেশীয় উদবিড়াল পুরোনো বিশ্বের সবচেয়ে বিস্তৃত এলাকাজুড়ে থাকা স্তন্যপায়ীদের একটি — আয়ারল্যান্ড ও মরক্কো থেকে পূর্ব এশিয়া ও ইন্দোনেশিয়া পর্যন্ত এদের দেখা মেলে। এরা সাধারণত একা থাকে ও রাতে সক্রিয় হয়; পরিষ্কার নদী, হ্রদ ও পাথুরে উপকূলে বাস করে। বিংশ শতাব্দীর মাঝামাঝি কীটনাশকের প্রভাবে এদের সংখ্যা ভীষণ কমে গেলেও পশ্চিম ইউরোপের অনেক জায়গায় এরা আবার উল্লেখযোগ্যভাবে ফিরে এসেছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Mustelidae',
      genus: 'Lutra',
      species: 'L. lutra',
    },
    physical: {
      size: {
        en: 'Head and body 57–95 cm; tail 35–45 cm',
        bn: 'মাথাসহ দেহ ৫৭–৯৫ সেমি; লেজ ৩৫–৪৫ সেমি',
      },
      weight: { en: '7–12 kg', bn: '৭–১২ কেজি' },
      lifespan: {
        en: 'Usually only a few years in the wild; up to about 15 years in captivity',
        bn: 'বনে সাধারণত মাত্র কয়েক বছর; আবদ্ধ অবস্থায় প্রায় ১৫ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Dense brown fur with a pale cream throat',
          'Long, muscular tail that tapers to a point',
          'Small ears and nostrils that close underwater',
        ],
        bn: [
          'ঘন বাদামি লোম, গলা হালকা ঘিয়ে রঙের',
          'লম্বা, পেশিবহুল লেজ যা আগার দিকে সরু',
          'ছোট কান ও নাসারন্ধ্র, যা পানির নিচে বন্ধ হয়ে যায়',
        ],
      },
    },
    habitat: {
      en: 'Clean rivers, streams, lakes, marshes and rocky sea coasts with good bank cover',
      bn: 'ঘন তীরবর্তী আচ্ছাদনসহ পরিষ্কার নদী, পাহাড়ি ছড়া, হ্রদ, জলাভূমি ও পাথুরে সমুদ্র উপকূল',
    },
    habitats: ['rivers-lakes', 'wetland', 'temperate-forest'],
    regions: ['europe', 'east-asia', 'south-asia', 'southeast-asia', 'africa'],
    distribution: {
      en: 'Across Europe, North Africa and much of Asia, including the hill streams of north-eastern Bangladesh and the Himalayan foothills.',
      bn: 'ইউরোপ, উত্তর আফ্রিকা ও এশিয়ার বিশাল অংশজুড়ে; বাংলাদেশের উত্তর-পূর্বের পাহাড়ি ছড়া ও হিমালয়ের পাদদেশেও পাওয়া যায়।',
    },
    climate: { en: 'Temperate to subtropical; tolerates cold winters', bn: 'নাতিশীতোষ্ণ থেকে উপক্রান্তীয়; শীতল শীতকালও সহ্য করতে পারে' },
    diet: {
      en: 'Mostly fish such as eels and trout, plus frogs, crayfish and water birds',
      bn: 'প্রধানত বান ও ট্রাউটের মতো মাছ; এছাড়া ব্যাঙ, চিংড়িজাতীয় প্রাণী ও জলচর পাখি',
    },
    ecologicalRole: {
      en: 'A top freshwater predator whose presence is a widely used indicator of healthy, unpolluted rivers.',
      bn: 'মিঠাপানির শীর্ষ শিকারি; এদের উপস্থিতি সুস্থ ও দূষণমুক্ত নদীর একটি পরিচিত সূচক।',
    },
    behavior: {
      en: 'Solitary and mainly nocturnal; each otter patrols a long stretch of river and marks it with scented droppings called spraints.',
      bn: 'একাকী ও মূলত নিশাচর; প্রতিটি উদ নদীর দীর্ঘ এক অংশ টহল দেয় এবং বিশেষ গন্ধযুক্ত মল দিয়ে এলাকা চিহ্নিত করে।',
    },
    range: {
      native: [
        [54.0, -2.5],
        [40.0, -5.0],
        [52.0, 20.0],
        [56.0, 60.0],
        [30.0, 104.0],
        [30.0, 78.5],
        [24.8, 91.9],
        [34.0, -5.0],
      ],
    },
    conservation: {
      status: 'NT',
      trend: 'decreasing',
      threats: {
        en: ['Water pollution and pesticides', 'Road traffic deaths', 'Poaching for fur, especially in Asia'],
        bn: ['পানিদূষণ ও কীটনাশক', 'সড়কে গাড়িচাপায় মৃত্যু', 'বিশেষত এশিয়ায় লোমের জন্য চোরাশিকার'],
      },
      initiatives: {
        en: ['Ban on organochlorine pesticides that allowed European recovery', 'Strict protection under the EU Habitats Directive and CITES Appendix I'],
        bn: ['অর্গানোক্লোরিন কীটনাশক নিষিদ্ধ করা, যার ফলে ইউরোপে এরা ফিরে এসেছে', 'ইইউ হ্যাবিট্যাটস ডিরেক্টিভ ও সাইটিস পরিশিষ্ট-১ এর অধীনে কঠোর সুরক্ষা'],
      },
    },
    facts: {
      en: [
        'Otter spraints are said to smell surprisingly pleasant — often compared to jasmine tea.',
        'Otters returned to every county in England by the early 2010s after nearly vanishing.',
      ],
      bn: [
        'উদের মলের গন্ধ নাকি আশ্চর্যরকম মিষ্টি — অনেকে একে জুঁই-চায়ের গন্ধের সঙ্গে তুলনা করেন।',
        'প্রায় হারিয়ে যাওয়ার পর ২০১০-এর দশকের শুরুর দিকে ইংল্যান্ডের প্রতিটি কাউন্টিতে উদ আবার ফিরে আসে।',
      ],
    },
    related: ['smooth-coated-otter', 'asian-small-clawed-otter', 'eurasian-beaver', 'european-water-vole'],
  },
  {
    id: 'asian-small-clawed-otter',
    commonName: { en: 'Asian Small-clawed Otter', bn: 'ছোট নখী উদবিড়াল' },
    scientificName: 'Aonyx cinereus',
    altNames: {
      en: ['Oriental Small-clawed Otter', 'Small-clawed Otter'],
      bn: ['ছোট নখের ভোঁদড়', 'খুদে উদ'],
    },
    synonyms: ['Amblonyx cinereus'],
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Asian small-clawed otter',
    description: {
      en: 'The Asian small-clawed otter is the smallest otter in the world. Its claws are tiny and its front paws work almost like hands, letting it feel under stones and mud for crabs and snails. Highly social, it lives in noisy family groups in streams, rice paddies and mangroves, including the hill streams and Sundarbans of Bangladesh.',
      bn: 'ছোট নখী উদবিড়াল পৃথিবীর সবচেয়ে ছোট ভোঁদড়। এদের নখ খুবই ছোট, আর সামনের পা প্রায় হাতের মতো কাজ করে — পাথর ও কাদার নিচে হাতড়ে কাঁকড়া ও শামুক খুঁজে বের করে। এরা খুবই সামাজিক; বাংলাদেশের পাহাড়ি ছড়া ও সুন্দরবনসহ নানা ছড়া, ধানক্ষেত ও ম্যানগ্রোভে কোলাহলপূর্ণ পারিবারিক দলে বাস করে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Mustelidae',
      genus: 'Aonyx',
      species: 'A. cinereus',
    },
    physical: {
      size: {
        en: 'Total length about 70–95 cm including a 25–35 cm tail',
        bn: '২৫–৩৫ সেমি লেজসহ মোট দৈর্ঘ্য প্রায় ৭০–৯৫ সেমি',
      },
      weight: { en: '1–5 kg', bn: '১–৫ কেজি' },
      lifespan: {
        en: 'Up to about 15 years in captivity',
        bn: 'আবদ্ধ অবস্থায় প্রায় ১৫ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Tiny claws that barely reach past the finger pads',
          'Partly webbed, very dexterous front paws',
          'Dark brown fur with a pale face and throat',
        ],
        bn: [
          'খুবই ছোট নখ, যা আঙুলের ডগা ছাড়িয়ে প্রায় বের হয় না',
          'আংশিক জোড়া লাগানো, অত্যন্ত দক্ষ সামনের পা',
          'গাঢ় বাদামি লোম; মুখ ও গলা হালকা রঙের',
        ],
      },
    },
    habitat: {
      en: 'Hill streams, freshwater swamps, rice paddies and mangrove creeks',
      bn: 'পাহাড়ি ছড়া, মিঠাপানির জলাভূমি, ধানক্ষেত ও ম্যানগ্রোভের খাল',
    },
    habitats: ['rivers-lakes', 'wetland', 'mangrove', 'tropical-forest'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'From India, Bangladesh and southern China through Southeast Asia to Sumatra, Java, Borneo and Palawan.',
      bn: 'ভারত, বাংলাদেশ ও দক্ষিণ চীন থেকে দক্ষিণ-পূর্ব এশিয়া হয়ে সুমাত্রা, জাভা, বোর্নিও ও পালাওয়ান পর্যন্ত।',
    },
    climate: { en: 'Warm, humid tropical climates', bn: 'উষ্ণ ও আর্দ্র ক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Crabs, snails, mussels and other shellfish, plus small fish and frogs',
      bn: 'কাঁকড়া, শামুক, ঝিনুকসহ খোলসযুক্ত প্রাণী; এছাড়া ছোট মাছ ও ব্যাঙ',
    },
    ecologicalRole: {
      en: 'Controls crab and snail populations in streams and paddies and is an indicator of healthy wetlands.',
      bn: 'ছড়া ও ধানক্ষেতে কাঁকড়া ও শামুকের সংখ্যা নিয়ন্ত্রণে রাখে এবং সুস্থ জলাভূমির সূচক হিসেবে কাজ করে।',
    },
    behavior: {
      en: 'Lives in close-knit family groups of up to about 12, communicating with a wide range of calls.',
      bn: 'প্রায় ১২টি পর্যন্ত সদস্যের ঘনিষ্ঠ পারিবারিক দলে থাকে এবং নানা রকম ডাকের মাধ্যমে নিজেদের মধ্যে যোগাযোগ করে।',
    },
    range: {
      native: [
        [24.5, 91.8],
        [22.0, 89.4],
        [26.5, 93.0],
        [13.0, 101.0],
        [16.0, 107.0],
        [1.0, 114.0],
        [9.5, 118.5],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Illegal pet trade, fuelled by social media and “otter cafés”', 'Conversion of wetlands and mangroves to farms and aquaculture', 'Pesticide pollution'],
        bn: ['সামাজিক মাধ্যম ও “অটার ক্যাফে”-কেন্দ্রিক অবৈধ পোষা প্রাণী বাণিজ্য', 'জলাভূমি ও ম্যানগ্রোভকে কৃষিজমি ও মাছের ঘেরে রূপান্তর', 'কীটনাশক দূষণ'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix I since 2019', 'Zoo breeding programmes and anti-trafficking campaigns'],
        bn: ['২০১৯ সাল থেকে সাইটিস পরিশিষ্ট-১ এ তালিকাভুক্ত', 'চিড়িয়াখানায় প্রজনন কর্মসূচি ও পাচারবিরোধী প্রচারণা'],
      },
    },
    facts: {
      en: [
        'It is the smallest of the world’s 13 otter species.',
        'Pairs usually mate for life, and older siblings help raise the pups.',
      ],
      bn: [
        'পৃথিবীর ১৩ প্রজাতির ভোঁদড়ের মধ্যে এটিই সবচেয়ে ছোট।',
        'জোড়া সাধারণত আজীবন একসঙ্গে থাকে, আর বড় ভাইবোনেরা ছানাদের লালনপালনে সাহায্য করে।',
      ],
    },
    related: ['smooth-coated-otter', 'eurasian-otter', 'giant-otter'],
  },
  {
    id: 'amazon-river-dolphin',
    commonName: { en: 'Amazon River Dolphin', bn: 'আমাজন নদীর ডলফিন' },
    scientificName: 'Inia geoffrensis',
    altNames: {
      en: ['Boto', 'Pink River Dolphin', 'Bufeo Colorado'],
      bn: ['বোটো', 'গোলাপি ডলফিন', 'গোলাপি শুশুক'],
    },
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Amazon river dolphin',
    description: {
      en: 'The Amazon river dolphin, or boto, is the largest river dolphin in the world and famous for the pink colour of adult males. Unlike ocean dolphins, its neck bones are not fused, so it can turn its head to weave through flooded forest during the rainy season. Like Bangladesh’s own shushuk, it is a river dolphin threatened by fishing, dams and pollution.',
      bn: 'আমাজন নদীর ডলফিন বা বোটো পৃথিবীর সবচেয়ে বড় নদীর ডলফিন; প্রাপ্তবয়স্ক পুরুষদের গোলাপি রঙের জন্য এরা বিখ্যাত। সামুদ্রিক ডলফিনের মতো এদের ঘাড়ের হাড় জোড়া লাগানো নয়, তাই বর্ষায় প্লাবিত বনের গাছের ফাঁকে ফাঁকে মাথা ঘুরিয়ে চলতে পারে। বাংলাদেশের শুশুকের মতোই এরাও মাছ ধরা, বাঁধ ও দূষণের কারণে হুমকির মুখে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Iniidae',
      genus: 'Inia',
      species: 'I. geoffrensis',
    },
    physical: {
      size: {
        en: 'Males up to about 2.5 m long; females smaller',
        bn: 'পুরুষ প্রায় ২.৫ মিটার পর্যন্ত লম্বা; স্ত্রী তুলনামূলক ছোট',
      },
      weight: { en: 'Males up to about 185 kg; females around 100–150 kg', bn: 'পুরুষ প্রায় ১৮৫ কেজি পর্যন্ত; স্ত্রী প্রায় ১০০–১৫০ কেজি' },
      lifespan: { en: 'Probably about 30 years', bn: 'সম্ভবত প্রায় ৩০ বছর' },
      features: {
        en: [
          'Adult males turn pink, partly from scar tissue',
          'Long, slender beak with stiff bristles',
          'Low hump instead of a tall dorsal fin, and a flexible neck',
        ],
        bn: [
          'প্রাপ্তবয়স্ক পুরুষের রং গোলাপি হয়, আংশিকভাবে ক্ষতচিহ্নের কারণে',
          'শক্ত লোমযুক্ত লম্বা ও সরু ঠোঁট',
          'উঁচু পিঠের পাখনার বদলে নিচু কুঁজ এবং নমনীয় ঘাড়',
        ],
      },
    },
    habitat: {
      en: 'Rivers, lakes and seasonally flooded forests of the Amazon and Orinoco basins',
      bn: 'আমাজন ও ওরিনোকো অববাহিকার নদী, হ্রদ ও মৌসুমি প্লাবিত বন',
    },
    habitats: ['rivers-lakes', 'tropical-forest', 'wetland'],
    regions: ['south-america'],
    distribution: {
      en: 'Amazon and Orinoco river systems in Brazil, Peru, Colombia, Ecuador, Bolivia and Venezuela.',
      bn: 'ব্রাজিল, পেরু, কলম্বিয়া, ইকুয়েডর, বলিভিয়া ও ভেনেজুয়েলার আমাজন ও ওরিনোকো নদীব্যবস্থা।',
    },
    climate: { en: 'Hot, humid equatorial climate with a long flood season', bn: 'দীর্ঘ বন্যা মৌসুমসহ উষ্ণ ও আর্দ্র নিরক্ষীয় জলবায়ু' },
    diet: {
      en: 'Over 50 kinds of fish, plus crabs and river turtles',
      bn: '৫০টিরও বেশি প্রজাতির মাছ; এছাড়া কাঁকড়া ও নদীর কচ্ছপ',
    },
    ecologicalRole: {
      en: 'A top predator of Amazonian waters that helps regulate fish communities.',
      bn: 'আমাজনের জলাশয়ের শীর্ষ শিকারি, যা মাছের সম্প্রদায়ের ভারসাম্য রক্ষায় সাহায্য করে।',
    },
    behavior: {
      en: 'Usually alone or in small groups; uses echolocation to hunt among submerged roots and branches.',
      bn: 'সাধারণত একা বা ছোট দলে থাকে; পানিতে ডুবে থাকা শিকড় ও ডালপালার ফাঁকে প্রতিধ্বনির সাহায্যে শিকার খোঁজে।',
    },
    range: {
      native: [
        [-3.1, -60.0],
        [-3.7, -73.2],
        [-2.5, -65.5],
        [-4.2, -69.9],
        [-13.5, -65.5],
        [7.5, -66.0],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Killing for use as bait in catfish fisheries', 'Entanglement in fishing nets', 'Dams and mercury pollution from gold mining'],
        bn: ['ক্যাটফিশ ধরার টোপ হিসেবে ব্যবহারের জন্য হত্যা', 'মাছ ধরার জালে আটকা পড়া', 'বাঁধ এবং সোনা খনন থেকে পারদ দূষণ'],
      },
      initiatives: {
        en: ['Global Declaration for River Dolphins signed by range countries in 2023', 'Satellite tagging and population surveys across the Amazon'],
        bn: ['২০২৩ সালে বিভিন্ন দেশের স্বাক্ষরিত নদীর ডলফিন সংরক্ষণের বৈশ্বিক ঘোষণা', 'আমাজনজুড়ে স্যাটেলাইট ট্যাগিং ও সংখ্যা জরিপ'],
      },
      assessed: '2018',
    },
    facts: {
      en: [
        'In Amazonian folklore the boto turns into a handsome man at night.',
        'Its flexible neck lets it turn its head up to about 90 degrees.',
      ],
      bn: [
        'আমাজনের লোককথা অনুযায়ী বোটো রাতে সুদর্শন মানুষের রূপ ধরে।',
        'নমনীয় ঘাড়ের কারণে এরা মাথা প্রায় ৯০ ডিগ্রি পর্যন্ত ঘোরাতে পারে।',
      ],
    },
    related: ['ganges-river-dolphin', 'amazonian-manatee', 'giant-otter', 'arapaima'],
  },
  {
    id: 'yangtze-finless-porpoise',
    commonName: { en: 'Yangtze Finless Porpoise', bn: 'ইয়াংসি পাখনাহীন শুশুক' },
    scientificName: 'Neophocaena asiaeorientalis asiaeorientalis',
    altNames: {
      en: ['Jiangzhu', 'Yangtze River Porpoise'],
      bn: ['জিয়াংচু', 'ইয়াংসি নদীর পরপয়েজ'],
    },
    synonyms: ['Neophocaena phocaenoides asiaeorientalis'],
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Yangtze finless porpoise',
    description: {
      en: 'The Yangtze finless porpoise is the world’s only freshwater porpoise and, since the loss of the baiji dolphin, the last cetacean of China’s Yangtze River. It has no dorsal fin and a rounded head that gives it a permanent “smile”. Its population fell sharply but has begun to recover since China introduced a ten-year fishing ban on the Yangtze in 2021.',
      bn: 'ইয়াংসি পাখনাহীন শুশুক পৃথিবীর একমাত্র মিঠাপানির পরপয়েজ; বাইজি ডলফিন হারিয়ে যাওয়ার পর চীনের ইয়াংসি নদীতে টিকে থাকা এটিই শেষ তিমিজাতীয় প্রাণী। এর পিঠে কোনো পাখনা নেই, আর গোলাকার মাথার কারণে মনে হয় এটি সবসময় হাসছে। সংখ্যা ব্যাপক হারে কমে গেলেও ২০২১ সালে চীন ইয়াংসিতে দশ বছরের মাছ ধরা নিষেধাজ্ঞা দেওয়ার পর থেকে এরা আবার বাড়তে শুরু করেছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Phocoenidae',
      genus: 'Neophocaena',
      species: 'N. asiaeorientalis',
    },
    physical: {
      size: { en: 'Up to about 1.7 m long', bn: 'প্রায় ১.৭ মিটার পর্যন্ত লম্বা' },
      weight: { en: 'Usually 40–70 kg', bn: 'সাধারণত ৪০–৭০ কেজি' },
      lifespan: { en: 'About 20–25 years', bn: 'প্রায় ২০–২৫ বছর' },
      features: {
        en: [
          'No dorsal fin — only a low ridge covered in tiny bumps',
          'Rounded, beakless head with a “smiling” mouth',
          'Uniform grey skin',
        ],
        bn: [
          'পিঠে পাখনা নেই — ছোট ছোট গুটিযুক্ত একটি নিচু খাঁজ আছে মাত্র',
          'ঠোঁটবিহীন গোলাকার মাথা ও “হাসিমুখ”',
          'সমভাবে ধূসর চামড়া',
        ],
      },
    },
    habitat: {
      en: 'The main channel of the middle and lower Yangtze and the connected Poyang and Dongting lakes',
      bn: 'ইয়াংসির মধ্য ও নিম্ন অংশের মূল প্রবাহ এবং এর সঙ্গে যুক্ত পোয়াং ও দোংতিং হ্রদ',
    },
    habitats: ['rivers-lakes'],
    regions: ['east-asia'],
    distribution: {
      en: 'Found only in the middle and lower Yangtze River from Yichang to Shanghai, and in Poyang and Dongting lakes, China.',
      bn: 'শুধু চীনের ইয়াংসি নদীর ইচাং থেকে সাংহাই পর্যন্ত মধ্য ও নিম্ন অংশে এবং পোয়াং ও দোংতিং হ্রদে পাওয়া যায়।',
    },
    climate: { en: 'Humid subtropical climate', bn: 'আর্দ্র উপক্রান্তীয় জলবায়ু' },
    diet: { en: 'Small fish, shrimp and squid-like invertebrates', bn: 'ছোট মাছ, চিংড়ি ও অন্যান্য অমেরুদণ্ডী প্রাণী' },
    ecologicalRole: {
      en: 'The Yangtze’s last top mammalian predator and a flagship for the health of the whole river.',
      bn: 'ইয়াংসির শেষ শীর্ষ স্তন্যপায়ী শিকারি এবং পুরো নদীর স্বাস্থ্যের প্রতীকী প্রজাতি।',
    },
    behavior: {
      en: 'Shy and usually seen in small groups of two to five; mothers carry calves on their backs.',
      bn: 'লাজুক স্বভাবের, সাধারণত দুই থেকে পাঁচটির ছোট দলে দেখা যায়; মা শুশুক ছানাকে পিঠে নিয়ে চলে।',
    },
    range: {
      native: [
        [30.7, 111.3],
        [29.3, 112.9],
        [30.6, 114.3],
        [29.1, 116.3],
        [30.5, 117.0],
        [32.1, 118.8],
        [31.7, 120.9],
      ],
      endemicTo: { en: 'Yangtze River system, China', bn: 'চীনের ইয়াংসি নদীব্যবস্থা' },
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      population: {
        en: 'About 1,250 (2022 survey)',
        bn: 'প্রায় ১,২৫০টি (২০২২ সালের জরিপ)',
      },
      threats: {
        en: ['Heavy shipping traffic and underwater noise', 'Illegal electrofishing and overfishing', 'Sand mining, dams and pollution'],
        bn: ['জাহাজের ভিড় ও পানির নিচের শব্দদূষণ', 'অবৈধ বৈদ্যুতিক শকে মাছ ধরা ও অতিরিক্ত মাছ আহরণ', 'বালু উত্তোলন, বাঁধ ও দূষণ'],
      },
      initiatives: {
        en: ['Ten-year fishing ban on the Yangtze from 2021', 'Semi-natural reserves in oxbow lakes such as Tian’e-Zhou'],
        bn: ['২০২১ সাল থেকে ইয়াংসিতে দশ বছরের মাছ ধরা নিষেধাজ্ঞা', 'তিয়ানে-ঝৌর মতো অশ্বক্ষুরাকৃতি হ্রদে আধা-প্রাকৃতিক সংরক্ষণ কেন্দ্র'],
      },
      assessed: '2017',
    },
    facts: {
      en: [
        'Its close relative in the Yangtze, the baiji dolphin, was declared functionally extinct in 2006.',
        'It is the only porpoise in the world that lives in fresh water.',
      ],
      bn: [
        'ইয়াংসির আরেক বাসিন্দা বাইজি ডলফিনকে ২০০৬ সালে কার্যত বিলুপ্ত ঘোষণা করা হয়।',
        'পৃথিবীতে এটিই একমাত্র পরপয়েজ যা মিঠাপানিতে বাস করে।',
      ],
    },
    related: ['ganges-river-dolphin', 'irrawaddy-dolphin', 'chinese-giant-salamander', 'chinese-alligator'],
  },
  {
    id: 'amazonian-manatee',
    commonName: { en: 'Amazonian Manatee', bn: 'আমাজন ম্যানাটি' },
    scientificName: 'Trichechus inunguis',
    altNames: {
      en: ['Amazon Manatee', 'Peixe-boi'],
      bn: ['আমাজনের জলগাভি', 'পেইশে-বোই'],
    },
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Amazonian manatee',
    description: {
      en: 'The Amazonian manatee is the only manatee that lives entirely in fresh water. This gentle, slow-moving plant-eater grazes on floating grasses in the flooded forests and lakes of the Amazon basin. It survives the dry season by fasting for months on stored body fat.',
      bn: 'আমাজন ম্যানাটি একমাত্র ম্যানাটি যা পুরোপুরি মিঠাপানিতে বাস করে। শান্ত ও ধীরগতির এই তৃণভোজী প্রাণী আমাজন অববাহিকার প্লাবিত বন ও হ্রদে ভাসমান ঘাস খেয়ে বেঁচে থাকে। শুকনো মৌসুমে খাবার কমে গেলে শরীরে জমানো চর্বির ওপর নির্ভর করে এরা মাসের পর মাস না খেয়ে কাটিয়ে দেয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Sirenia',
      family: 'Trichechidae',
      genus: 'Trichechus',
      species: 'T. inunguis',
    },
    physical: {
      size: { en: 'Up to about 2.8 m long', bn: 'প্রায় ২.৮ মিটার পর্যন্ত লম্বা' },
      weight: { en: 'Up to about 360 kg', bn: 'প্রায় ৩৬০ কেজি পর্যন্ত' },
      lifespan: { en: 'Thought to live several decades', bn: 'ধারণা করা হয় কয়েক দশক বাঁচে' },
      features: {
        en: [
          'Smooth grey skin, often with a white or pink patch on the chest',
          'Flippers without nails — its name inunguis means “nail-less”',
          'Broad, paddle-shaped tail',
        ],
        bn: [
          'মসৃণ ধূসর চামড়া; বুকে প্রায়ই সাদা বা গোলাপি ছোপ',
          'নখবিহীন ফ্লিপার — inunguis নামের অর্থই “নখহীন”',
          'চওড়া, বৈঠার মতো লেজ',
        ],
      },
    },
    habitat: {
      en: 'Floodplain lakes, slow rivers and flooded forests rich in floating plants',
      bn: 'ভাসমান উদ্ভিদে ভরা প্লাবনভূমির হ্রদ, ধীরগতির নদী ও প্লাবিত বন',
    },
    habitats: ['rivers-lakes', 'wetland', 'tropical-forest'],
    regions: ['south-america'],
    distribution: {
      en: 'The Amazon basin of Brazil, Peru, Colombia and Ecuador, down to the river mouth near Marajó Island.',
      bn: 'ব্রাজিল, পেরু, কলম্বিয়া ও ইকুয়েডরের আমাজন অববাহিকা, মারাজো দ্বীপের কাছে নদীর মোহনা পর্যন্ত।',
    },
    climate: { en: 'Hot, humid equatorial climate', bn: 'উষ্ণ ও আর্দ্র নিরক্ষীয় জলবায়ু' },
    diet: {
      en: 'Herbivore — floating grasses, water lettuce, water hyacinth and other aquatic plants',
      bn: 'তৃণভোজী — ভাসমান ঘাস, টোকাপানা, কচুরিপানা ও অন্যান্য জলজ উদ্ভিদ',
    },
    ecologicalRole: {
      en: 'Grazes aquatic vegetation and recycles nutrients through its dung, fertilising floodplain waters.',
      bn: 'জলজ উদ্ভিদ খেয়ে সেগুলোর বৃদ্ধি নিয়ন্ত্রণ করে এবং মলের মাধ্যমে পুষ্টি ফিরিয়ে দিয়ে প্লাবনভূমির পানিকে উর্বর করে।',
    },
    behavior: {
      en: 'Shy and mostly solitary apart from mothers and calves; migrates between flooded forest and deep lakes with the seasons.',
      bn: 'লাজুক ও মূলত একাকী, শুধু মা ও ছানা একসঙ্গে থাকে; ঋতুভেদে প্লাবিত বন ও গভীর হ্রদের মধ্যে যাতায়াত করে।',
    },
    range: {
      native: [
        [-3.1, -60.0],
        [-2.5, -65.5],
        [-3.7, -73.2],
        [-4.2, -69.9],
        [-0.8, -49.5],
        [0.0, -76.2],
      ],
      endemicTo: { en: 'Amazon basin', bn: 'আমাজন অববাহিকা' },
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Illegal hunting for meat', 'Calves caught accidentally in fishing nets', 'Severe droughts and dams that shrink feeding lakes'],
        bn: ['মাংসের জন্য অবৈধ শিকার', 'মাছ ধরার জালে ছানাদের দুর্ঘটনাবশত আটকা পড়া', 'তীব্র খরা ও বাঁধের কারণে খাদ্যের হ্রদ সংকুচিত হওয়া'],
      },
      initiatives: {
        en: ['Legal protection in Brazil and other range countries', 'Rescue and release of orphaned calves by centres in Manaus'],
        bn: ['ব্রাজিলসহ বিভিন্ন দেশে আইনি সুরক্ষা', 'মানাউসের উদ্ধার কেন্দ্রে মা-হারা ছানা লালন করে প্রকৃতিতে অবমুক্ত করা'],
      },
    },
    facts: {
      en: [
        'It is the smallest of the three manatee species.',
        'Like elephants, manatees continually replace their molar teeth throughout life.',
      ],
      bn: [
        'তিন প্রজাতির ম্যানাটির মধ্যে এটিই সবচেয়ে ছোট।',
        'হাতির মতোই ম্যানাটির পেষণ দাঁত সারা জীবন ধরে বদলাতে থাকে।',
      ],
    },
    related: ['amazon-river-dolphin', 'giant-otter', 'arapaima', 'giant-water-lily'],
  },
  {
    id: 'capybara',
    commonName: { en: 'Capybara', bn: 'ক্যাপিবারা' },
    scientificName: 'Hydrochoerus hydrochaeris',
    altNames: {
      en: ['Carpincho', 'Chigüire', 'Water Hog'],
      bn: ['কারপিনচো', 'চিগুইরে', 'জলশূকর'],
    },
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Capybara',
    description: {
      en: 'The capybara is the largest rodent in the world, a close relative of guinea pigs. Semi-aquatic, it has webbed toes and eyes, ears and nostrils set high on its head so it can hide almost fully submerged. Calm and highly social, capybaras live in herds near rivers and marshes across South America and have become an internet favourite for their relaxed nature.',
      bn: 'ক্যাপিবারা পৃথিবীর সবচেয়ে বড় ইঁদুরজাতীয় (রোডেন্ট) প্রাণী, গিনিপিগের ঘনিষ্ঠ আত্মীয়। আধা-জলচর এই প্রাণীর পায়ের আঙুল আংশিক জোড়া লাগানো; চোখ, কান ও নাক মাথার ওপরের দিকে থাকায় প্রায় পুরো শরীর পানিতে ডুবিয়ে লুকিয়ে থাকতে পারে। শান্ত ও সামাজিক ক্যাপিবারা দক্ষিণ আমেরিকার নদী ও জলাভূমির ধারে দলবেঁধে থাকে; এদের নিশ্চিন্ত স্বভাব ইন্টারনেটেও খুব জনপ্রিয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Rodentia',
      family: 'Caviidae',
      genus: 'Hydrochoerus',
      species: 'H. hydrochaeris',
    },
    physical: {
      size: {
        en: '1.0–1.3 m long; about 50–60 cm tall at the shoulder',
        bn: '১.০–১.৩ মিটার লম্বা; কাঁধ পর্যন্ত উচ্চতা প্রায় ৫০–৬০ সেমি',
      },
      weight: { en: '35–66 kg', bn: '৩৫–৬৬ কেজি' },
      lifespan: { en: '8–10 years in the wild; about 12 in captivity', bn: 'বনে ৮–১০ বছর; আবদ্ধ অবস্থায় প্রায় ১২ বছর' },
      features: {
        en: [
          'Barrel-shaped body with coarse reddish-brown hair and almost no tail',
          'Partly webbed toes for swimming',
          'Eyes, ears and nostrils on top of the head',
        ],
        bn: [
          'পিপার মতো দেহ, খসখসে লালচে-বাদামি লোম, লেজ প্রায় নেই বললেই চলে',
          'সাঁতারের জন্য আংশিক জোড়া লাগানো আঙুল',
          'চোখ, কান ও নাক মাথার ওপরের দিকে',
        ],
      },
    },
    habitat: {
      en: 'Grassy riverbanks, marshes, flooded savannas and lake edges',
      bn: 'নদীর ঘাসযুক্ত তীর, জলাভূমি, প্লাবিত সাভানা ও হ্রদের কিনারা',
    },
    habitats: ['wetland', 'rivers-lakes', 'grassland'],
    regions: ['south-america'],
    distribution: {
      en: 'Most of South America east of the Andes, from Panama and Venezuela to Uruguay and north-eastern Argentina.',
      bn: 'আন্দিজের পূর্বে দক্ষিণ আমেরিকার বেশিরভাগ অঞ্চল — পানামা ও ভেনেজুয়েলা থেকে উরুগুয়ে ও উত্তর-পূর্ব আর্জেন্টিনা পর্যন্ত।',
    },
    climate: { en: 'Tropical to warm temperate, with wet and dry seasons', bn: 'বর্ষা ও শুষ্ক মৌসুমসহ ক্রান্তীয় থেকে উষ্ণ নাতিশীতোষ্ণ' },
    diet: {
      en: 'Herbivore — grasses and aquatic plants, plus bark and fruit in the dry season',
      bn: 'তৃণভোজী — ঘাস ও জলজ উদ্ভিদ; শুকনো মৌসুমে গাছের বাকল ও ফলও খায়',
    },
    ecologicalRole: {
      en: 'A major grazer of wetland grasses and important prey for jaguars, caimans and anacondas.',
      bn: 'জলাভূমির ঘাসের প্রধান ভক্ষক এবং জাগুয়ার, কেইম্যান ও অ্যানাকোন্ডার গুরুত্বপূর্ণ শিকার।',
    },
    behavior: {
      en: 'Lives in herds of about 10–20 led by a dominant male; escapes danger by diving and can stay underwater for several minutes.',
      bn: 'একটি প্রধান পুরুষের নেতৃত্বে প্রায় ১০–২০টির দলে থাকে; বিপদে পানিতে ডুব দেয় এবং কয়েক মিনিট পানির নিচে থাকতে পারে।',
    },
    range: {
      native: [
        [7.5, -67.5],
        [4.0, -72.0],
        [-3.0, -60.0],
        [-17.5, -57.0],
        [-28.5, -57.0],
        [-33.0, -56.0],
        [9.0, -79.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Hunting for meat and leather', 'Draining of wetlands for agriculture'],
        bn: ['মাংস ও চামড়ার জন্য শিকার', 'কৃষিকাজের জন্য জলাভূমি শুকিয়ে ফেলা'],
      },
      initiatives: {
        en: ['Regulated sustainable harvest programmes in Venezuela', 'Large protected wetlands such as the Pantanal and Iberá'],
        bn: ['ভেনেজুয়েলায় নিয়ন্ত্রিত ও টেকসই আহরণ কর্মসূচি', 'প্যান্টানাল ও ইবেরার মতো বিশাল সংরক্ষিত জলাভূমি'],
      },
    },
    facts: {
      en: [
        'Birds often perch on capybaras to pick off insects and ticks.',
        'Like rabbits, capybaras re-eat some of their droppings to digest tough grass fully.',
      ],
      bn: [
        'পাখিরা প্রায়ই ক্যাপিবারার পিঠে বসে পোকামাকড় ও আঁটুলি খুঁটে খায়।',
        'খরগোশের মতো ক্যাপিবারাও শক্ত ঘাস পুরোপুরি হজম করতে নিজের কিছু মল আবার খায়।',
      ],
    },
    related: ['giant-anteater', 'black-caiman', 'jaguar', 'giant-otter'],
  },
];
