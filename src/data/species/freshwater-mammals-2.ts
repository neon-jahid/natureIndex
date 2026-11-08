import type { Species } from '@/types';

export const freshwaterMammals2: Species[] = [
  {
    id: 'eurasian-beaver',
    commonName: { en: 'Eurasian Beaver', bn: 'ইউরেশীয় বিভার' },
    scientificName: 'Castor fiber',
    altNames: {
      en: ['European Beaver', 'Old World Beaver'],
      bn: ['ইউরোপীয় বিভার', 'পুরোনো বিশ্বের বিভার'],
    },
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Eurasian beaver',
    description: {
      en: 'The Eurasian beaver is the largest rodent of Europe and Asia and a famous “ecosystem engineer”. By felling trees and building dams it turns streams into chains of ponds and wetlands used by countless other species. Hunted for its fur and scent glands until only about 1,200 animals survived around 1900, it has since recovered through protection and reintroduction to well over a million.',
      bn: 'ইউরেশীয় বিভার ইউরোপ ও এশিয়ার সবচেয়ে বড় ইঁদুরজাতীয় প্রাণী এবং বিখ্যাত “বাস্তুতন্ত্রের প্রকৌশলী”। গাছ কেটে বাঁধ বানিয়ে এরা ছোট ছোট স্রোতকে পুকুর ও জলাভূমির সারিতে রূপান্তর করে, যা অসংখ্য অন্য প্রাণীর আশ্রয় হয়ে ওঠে। লোম ও গন্ধগ্রন্থির জন্য শিকারের ফলে ১৯০০ সালের দিকে মাত্র প্রায় ১,২০০টি টিকে ছিল; সুরক্ষা ও পুনঃপ্রবর্তনের ফলে এখন এদের সংখ্যা দশ লাখ ছাড়িয়েছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Rodentia',
      family: 'Castoridae',
      genus: 'Castor',
      species: 'C. fiber',
    },
    physical: {
      size: {
        en: 'Head and body 80–100 cm; flat tail 25–50 cm',
        bn: 'মাথাসহ দেহ ৮০–১০০ সেমি; চ্যাপ্টা লেজ ২৫–৫০ সেমি',
      },
      weight: { en: '11–30 kg', bn: '১১–৩০ কেজি' },
      lifespan: {
        en: 'Usually 7–10 years in the wild; up to about 20 in captivity',
        bn: 'বনে সাধারণত ৭–১০ বছর; আবদ্ধ অবস্থায় প্রায় ২০ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Broad, flat, scaly tail used as a rudder and to slap the water in alarm',
          'Orange front teeth hardened with iron that grow throughout life',
          'Webbed hind feet and thick, waterproof brown fur',
        ],
        bn: [
          'চওড়া, চ্যাপ্টা ও আঁশযুক্ত লেজ — হাল হিসেবে কাজ করে, বিপদে পানিতে আছড়ে সংকেত দেয়',
          'লোহাসমৃদ্ধ শক্ত কমলা রঙের সামনের দাঁত, যা সারা জীবন বাড়তে থাকে',
          'জোড়া লাগানো পেছনের পা এবং ঘন, পানিরোধী বাদামি লোম',
        ],
      },
    },
    habitat: {
      en: 'Slow rivers, streams, lakes and marshes bordered by willow, aspen and other broadleaf trees',
      bn: 'উইলো, অ্যাস্পেনসহ চওড়া পাতার গাছে ঘেরা ধীরগতির নদী, ছড়া, হ্রদ ও জলাভূমি',
    },
    habitats: ['rivers-lakes', 'wetland', 'temperate-forest'],
    regions: ['europe', 'east-asia'],
    distribution: {
      en: 'Scattered across Europe from Britain, France and Scandinavia through Russia to western Siberia, with small native populations in Mongolia and north-western China.',
      bn: 'ব্রিটেন, ফ্রান্স ও স্ক্যান্ডিনেভিয়া থেকে রাশিয়া হয়ে পশ্চিম সাইবেরিয়া পর্যন্ত ইউরোপজুড়ে ছড়ানো; মঙ্গোলিয়া ও উত্তর-পশ্চিম চীনে ছোট কিছু স্থানীয় জনগোষ্ঠী আছে।',
    },
    climate: { en: 'Temperate to boreal; survives icy winters', bn: 'নাতিশীতোষ্ণ থেকে উত্তরের শীতল তাইগা অঞ্চল; বরফঢাকা শীতকালেও টিকে থাকে' },
    diet: {
      en: 'Herbivore — bark, twigs and leaves of trees in winter; water plants, grasses and herbs in summer',
      bn: 'তৃণভোজী — শীতে গাছের বাকল, ডালপালা ও পাতা; গ্রীষ্মে জলজ উদ্ভিদ, ঘাস ও লতাগুল্ম',
    },
    ecologicalRole: {
      en: 'A keystone species whose dams store water, reduce floods, filter pollutants and create wetlands for fish, amphibians, birds and insects.',
      bn: 'একটি মূল প্রজাতি; এদের বাঁধ পানি ধরে রাখে, বন্যা কমায়, দূষণ ছেঁকে নেয় এবং মাছ, উভচর, পাখি ও পোকামাকড়ের জন্য জলাভূমি তৈরি করে।',
    },
    behavior: {
      en: 'Lives in family groups of a monogamous pair and their young; mainly nocturnal, it builds lodges or burrows in banks and stores branches underwater for winter.',
      bn: 'একগামী জোড়া ও তাদের ছানাদের নিয়ে পারিবারিক দলে থাকে; মূলত নিশাচর, তীরে গর্ত বা ডালপালার ঘর বানায় এবং শীতের জন্য পানির নিচে ডাল জমিয়ে রাখে।',
    },
    range: {
      native: [
        [61.0, 10.0],
        [56.5, -3.5],
        [44.0, 4.7],
        [52.0, 12.0],
        [53.0, 23.0],
        [56.0, 40.0],
        [58.0, 65.0],
        [46.5, 90.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'increasing',
      threats: {
        en: ['Conflict with farmers and foresters over flooding and felled trees', 'Road traffic and illegal killing', 'Small, isolated populations in Mongolia and China'],
        bn: ['বন্যা ও গাছ কাটার কারণে কৃষক ও বনকর্মীদের সঙ্গে সংঘাত', 'সড়ক দুর্ঘটনা ও অবৈধ হত্যা', 'মঙ্গোলিয়া ও চীনে ছোট ও বিচ্ছিন্ন জনগোষ্ঠী'],
      },
      initiatives: {
        en: ['Reintroduction programmes in more than 20 European countries', 'Protected under the EU Habitats Directive and the Bern Convention'],
        bn: ['ইউরোপের ২০টিরও বেশি দেশে পুনঃপ্রবর্তন কর্মসূচি', 'ইইউ হ্যাবিট্যাটস ডিরেক্টিভ ও বার্ন কনভেনশনের অধীনে সুরক্ষিত'],
      },
    },
    facts: {
      en: [
        'Beavers were hunted for castoreum, a scent-gland secretion once used in medicine and perfume.',
        'Beavers returned to the wild in Scotland in 2009 after being absent for about 400 years.',
        'It has 48 chromosomes, while the North American beaver has 40, so the two cannot interbreed.',
      ],
      bn: [
        'একসময় ওষুধ ও সুগন্ধি তৈরিতে ব্যবহৃত কাস্টোরিয়াম নামের গন্ধগ্রন্থির নিঃসরণের জন্যও বিভার শিকার করা হতো।',
        'প্রায় ৪০০ বছর অনুপস্থিত থাকার পর ২০০৯ সালে স্কটল্যান্ডের বনে বিভার আবার ফিরিয়ে আনা হয়।',
        'এর ক্রোমোজোম ৪৮টি, আর উত্তর আমেরিকার বিভারের ৪০টি — তাই দুই প্রজাতির মধ্যে প্রজনন হয় না।',
      ],
    },
    related: ['north-american-beaver', 'european-water-vole', 'eurasian-otter', 'capybara'],
  },
  {
    id: 'north-american-beaver',
    commonName: { en: 'North American Beaver', bn: 'উত্তর আমেরিকার বিভার' },
    scientificName: 'Castor canadensis',
    altNames: {
      en: ['American Beaver', 'Canadian Beaver'],
      bn: ['আমেরিকান বিভার', 'কানাডীয় বিভার'],
    },
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'North American beaver',
    description: {
      en: 'The North American beaver is the largest rodent in North America and the national animal of Canada. Its demand for fur drove the European exploration of much of the continent in the 17th–19th centuries. A master builder, it constructs dams, canals and dome-shaped lodges that reshape whole valleys.',
      bn: 'উত্তর আমেরিকার বিভার এই মহাদেশের সবচেয়ে বড় ইঁদুরজাতীয় প্রাণী এবং কানাডার জাতীয় প্রাণী। সপ্তদশ থেকে ঊনবিংশ শতাব্দীতে এর লোমের চাহিদাই ইউরোপীয়দের মহাদেশের বিশাল অংশ অনুসন্ধানে টেনে এনেছিল। দক্ষ নির্মাতা এই প্রাণী বাঁধ, খাল ও গম্বুজাকৃতির ঘর বানিয়ে গোটা উপত্যকার চেহারা বদলে দেয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Rodentia',
      family: 'Castoridae',
      genus: 'Castor',
      species: 'C. canadensis',
    },
    physical: {
      size: {
        en: 'Head and body 74–90 cm; tail 20–35 cm',
        bn: 'মাথাসহ দেহ ৭৪–৯০ সেমি; লেজ ২০–৩৫ সেমি',
      },
      weight: { en: '11–32 kg', bn: '১১–৩২ কেজি' },
      lifespan: {
        en: 'About 10 years in the wild; up to about 24 years recorded',
        bn: 'বনে প্রায় ১০ বছর; সর্বোচ্চ প্রায় ২৪ বছর পর্যন্ত বাঁচার রেকর্ড আছে',
      },
      features: {
        en: [
          'Large, paddle-shaped scaly tail',
          'Transparent third eyelids that act like swimming goggles',
          'Lips that close behind the front teeth so it can gnaw underwater',
        ],
        bn: [
          'বড়, বৈঠার মতো আঁশযুক্ত লেজ',
          'স্বচ্ছ তৃতীয় চোখের পাতা, যা সাঁতারের চশমার মতো কাজ করে',
          'সামনের দাঁতের পেছনে ঠোঁট বন্ধ হয়, তাই পানির নিচেও কাঠ কুরে খেতে পারে',
        ],
      },
    },
    habitat: {
      en: 'Streams, rivers, ponds and lakes in forests, from the Arctic tree line to northern Mexico',
      bn: 'উত্তর মেরুর বৃক্ষসীমা থেকে উত্তর মেক্সিকো পর্যন্ত বনের ছড়া, নদী, পুকুর ও হ্রদ',
    },
    habitats: ['rivers-lakes', 'wetland', 'temperate-forest'],
    regions: ['north-america', 'south-america', 'europe'],
    distribution: {
      en: 'Native to most of Canada, the United States and northern Mexico; introduced to Tierra del Fuego in South America and to Finland and Russia.',
      bn: 'কানাডা, যুক্তরাষ্ট্র ও উত্তর মেক্সিকোর বেশিরভাগ অঞ্চলের স্থানীয় প্রাণী; দক্ষিণ আমেরিকার তিয়েরা দেল ফুয়েগো এবং ফিনল্যান্ড ও রাশিয়ায় আনা হয়েছে।',
    },
    climate: { en: 'Boreal and temperate, extending into dry subtropical river valleys', bn: 'উত্তরের শীতল ও নাতিশীতোষ্ণ অঞ্চল থেকে শুষ্ক উপক্রান্তীয় নদী-উপত্যকা পর্যন্ত' },
    diet: {
      en: 'Herbivore — bark and cambium of aspen, willow, birch and maple, plus water lilies and other aquatic plants',
      bn: 'তৃণভোজী — অ্যাস্পেন, উইলো, বার্চ ও ম্যাপল গাছের বাকল ও ভেতরের নরম স্তর; এছাড়া শাপলা ও অন্যান্য জলজ উদ্ভিদ',
    },
    ecologicalRole: {
      en: 'Creates and maintains wetlands that raise water tables, slow wildfires and drought, and support moose, waterfowl, fish and amphibians.',
      bn: 'জলাভূমি সৃষ্টি ও রক্ষা করে ভূগর্ভস্থ পানির স্তর বাড়ায়, দাবানল ও খরার প্রকোপ কমায় এবং মুস, জলচর পাখি, মাছ ও উভচরদের আশ্রয় দেয়।',
    },
    behavior: {
      en: 'Lives in colonies made up of a breeding pair, kits and yearlings; marks territory with scent mounds and slaps its tail on the water to warn of danger.',
      bn: 'প্রজননকারী জোড়া, সদ্যোজাত ছানা ও এক বছর বয়সীদের নিয়ে দলবদ্ধভাবে থাকে; গন্ধযুক্ত মাটির ঢিবি দিয়ে এলাকা চিহ্নিত করে এবং বিপদে পানিতে লেজ আছড়ে সতর্ক করে।',
    },
    range: {
      native: [
        [64.0, -150.0],
        [58.0, -112.0],
        [50.0, -90.0],
        [46.0, -74.0],
        [47.0, -121.0],
        [40.0, -95.0],
        [33.0, -85.0],
        [30.0, -108.0],
      ],
      introduced: [
        [-54.5, -68.0],
        [62.0, 25.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Historical overtrapping for the fur trade', 'Removal as a nuisance where dams flood roads and farmland'],
        bn: ['অতীতে লোম ব্যবসার জন্য অতিরিক্ত ফাঁদ পেতে ধরা', 'রাস্তা ও কৃষিজমি প্লাবিত করায় উপদ্রব হিসেবে সরিয়ে ফেলা'],
      },
      initiatives: {
        en: ['Regulated trapping seasons and widespread reintroductions in the 20th century', 'Beaver-based stream restoration projects in the western United States'],
        bn: ['বিংশ শতাব্দীতে নিয়ন্ত্রিত শিকার মৌসুম ও ব্যাপক পুনঃপ্রবর্তন', 'পশ্চিম যুক্তরাষ্ট্রে বিভারের সাহায্যে নদী-ছড়া পুনরুদ্ধার প্রকল্প'],
      },
    },
    facts: {
      en: [
        'The longest known beaver dam, in Wood Buffalo National Park, Canada, is about 850 m long and is visible from space.',
        'About 50 beavers released in Tierra del Fuego in 1946 have grown to tens of thousands and now damage its forests.',
      ],
      bn: [
        'কানাডার উড বাফেলো জাতীয় উদ্যানে জানা সবচেয়ে লম্বা বিভার বাঁধটি প্রায় ৮৫০ মিটার দীর্ঘ এবং মহাকাশ থেকেও দেখা যায়।',
        '১৯৪৬ সালে তিয়েরা দেল ফুয়েগোতে ছাড়া প্রায় ৫০টি বিভার থেকে এখন কয়েক হাজার বিভার হয়েছে, যারা সেখানকার বনের ক্ষতি করছে।',
      ],
    },
    related: ['eurasian-beaver', 'north-american-river-otter', 'american-black-bear', 'grey-wolf'],
  },
  {
    id: 'common-hippopotamus',
    commonName: { en: 'Common Hippopotamus', bn: 'জলহস্তী' },
    scientificName: 'Hippopotamus amphibius',
    altNames: {
      en: ['Hippo', 'River Horse', 'Nile Hippopotamus'],
      bn: ['হিপো', 'নদীর ঘোড়া', 'নীল নদের জলহস্তী'],
    },
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Hippopotamus',
    description: {
      en: 'The common hippopotamus is the third-largest land mammal and spends its days half-submerged in African rivers and lakes, leaving the water at night to graze. Despite its bulk it can run surprisingly fast on land and is one of the most dangerous animals in Africa. Its closest living relatives are whales and dolphins.',
      bn: 'জলহস্তী স্থলের তৃতীয় বৃহত্তম স্তন্যপায়ী; দিনের বেলা আফ্রিকার নদী ও হ্রদে আধডোবা হয়ে কাটায় এবং রাতে পানি ছেড়ে ঘাস খেতে ডাঙায় ওঠে। বিশাল শরীর সত্ত্বেও ডাঙায় এরা আশ্চর্য দ্রুত দৌড়াতে পারে এবং আফ্রিকার সবচেয়ে বিপজ্জনক প্রাণীগুলোর একটি। তিমি ও ডলফিনই এদের সবচেয়ে কাছের জীবিত আত্মীয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Hippopotamidae',
      genus: 'Hippopotamus',
      species: 'H. amphibius',
    },
    physical: {
      size: {
        en: 'Body length 3–5 m; about 1.5 m tall at the shoulder',
        bn: 'দেহের দৈর্ঘ্য ৩–৫ মিটার; কাঁধ পর্যন্ত উচ্চতা প্রায় ১.৫ মিটার',
      },
      weight: { en: 'Females about 1,300–1,500 kg; males about 1,500–3,200 kg', bn: 'স্ত্রী প্রায় ১,৩০০–১,৫০০ কেজি; পুরুষ প্রায় ১,৫০০–৩,২০০ কেজি' },
      lifespan: { en: 'About 40 years in the wild; up to about 50 in captivity', bn: 'বনে প্রায় ৪০ বছর; আবদ্ধ অবস্থায় প্রায় ৫০ বছর পর্যন্ত' },
      features: {
        en: [
          'Barrel-shaped, nearly hairless body on short legs',
          'Huge mouth that opens to about 150° with long, tusk-like canines',
          'Eyes, ears and nostrils on top of the head',
        ],
        bn: [
          'খাটো পায়ের ওপর পিপার মতো প্রায় লোমহীন দেহ',
          'প্রায় ১৫০ ডিগ্রি পর্যন্ত খুলতে পারা বিশাল মুখ এবং লম্বা গজদাঁতের মতো শ্বদন্ত',
          'চোখ, কান ও নাক মাথার ওপরের দিকে',
        ],
      },
    },
    habitat: {
      en: 'Rivers, lakes and swamps with nearby grasslands for night-time grazing',
      bn: 'রাতে চরে খাওয়ার জন্য আশপাশে তৃণভূমিসহ নদী, হ্রদ ও জলাভূমি',
    },
    habitats: ['rivers-lakes', 'wetland', 'grassland'],
    regions: ['africa', 'south-america'],
    distribution: {
      en: 'Sub-Saharan Africa, with strongholds in Zambia, Tanzania, Uganda, Mozambique and the Okavango; a feral population descended from Pablo Escobar’s animals lives in Colombia.',
      bn: 'সাহারার দক্ষিণের আফ্রিকা; জাম্বিয়া, তানজানিয়া, উগান্ডা, মোজাম্বিক ও ওকাভাঙ্গোতে এদের সংখ্যা সবচেয়ে বেশি। পাবলো এসকোবারের পোষা জলহস্তীর বংশধরদের একটি বুনো দল কলম্বিয়ায় বাস করে।',
    },
    climate: { en: 'Tropical savanna climate with wet and dry seasons', bn: 'বর্ষা ও শুষ্ক মৌসুমসহ ক্রান্তীয় সাভানা জলবায়ু' },
    diet: {
      en: 'Herbivore — mainly short grasses, eating about 35–40 kg a night',
      bn: 'তৃণভোজী — প্রধানত ছোট ঘাস; এক রাতে প্রায় ৩৫–৪০ কেজি খায়',
    },
    ecologicalRole: {
      en: 'Carries huge amounts of nutrients from land into water through its dung, fertilising rivers, and carves channels through swamps.',
      bn: 'মলের মাধ্যমে ডাঙা থেকে বিপুল পুষ্টি পানিতে নিয়ে এসে নদীকে উর্বর করে এবং জলাভূমির ভেতর দিয়ে চলাচলের পথ তৈরি করে।',
    },
    behavior: {
      en: 'Lives in groups (pods) of 10–30 led by a territorial bull that defends a stretch of river; walks along the bottom rather than truly swimming.',
      bn: 'একটি এলাকা-রক্ষাকারী প্রধান পুরুষের নেতৃত্বে ১০–৩০টির দলে থাকে, যে নদীর একটি অংশ পাহারা দেয়; এরা আসলে সাঁতার কাটে না, তলদেশ দিয়ে হেঁটে চলে।',
    },
    range: {
      native: [
        [-13.0, 31.6],
        [-7.8, 38.0],
        [-0.2, 29.9],
        [-1.5, 35.0],
        [-19.3, 22.9],
        [-24.0, 31.5],
        [9.0, 31.0],
        [11.0, -1.0],
      ],
      introduced: [[6.0, -74.8]],
    },
    conservation: {
      status: 'VU',
      trend: 'stable',
      population: {
        en: 'Roughly 115,000–130,000 (2016 estimate)',
        bn: 'প্রায় ১,১৫,০০০–১,৩০,০০০টি (২০১৬ সালের হিসাব)',
      },
      threats: {
        en: ['Poaching for meat and ivory teeth', 'Loss of rivers and grazing land to farming and dams', 'Conflict with farmers whose crops they raid'],
        bn: ['মাংস ও দামি দাঁতের জন্য চোরাশিকার', 'কৃষি ও বাঁধের কারণে নদী ও চারণভূমি হারানো', 'ফসল নষ্ট করায় কৃষকদের সঙ্গে সংঘাত'],
      },
      initiatives: {
        en: ['Listed on CITES Appendix II to regulate the tooth trade', 'Large populations protected in national parks such as Luangwa and Selous (Nyerere)'],
        bn: ['দাঁতের বাণিজ্য নিয়ন্ত্রণে সাইটিস পরিশিষ্ট-২ এ তালিকাভুক্ত', 'লুয়াংওয়া ও সেলুস (নায়েরেরে)-এর মতো জাতীয় উদ্যানে বড় জনগোষ্ঠী সুরক্ষিত'],
      },
      assessed: '2016',
    },
    facts: {
      en: [
        'Hippos secrete a reddish fluid, sometimes called “blood sweat”, that acts as a sunscreen and antiseptic.',
        'An adult can stay underwater for about five minutes and even sleeps submerged, surfacing automatically to breathe.',
      ],
      bn: [
        'জলহস্তীর চামড়া থেকে লালচে এক রস বের হয়, যাকে অনেকে “রক্ত-ঘাম” বলে; এটি রোদ থেকে সুরক্ষা ও জীবাণুনাশকের কাজ করে।',
        'প্রাপ্তবয়স্ক জলহস্তী প্রায় পাঁচ মিনিট পানির নিচে থাকতে পারে, এমনকি ডুবে থেকেই ঘুমায় এবং আপনাআপনি ভেসে উঠে শ্বাস নেয়।',
      ],
    },
    related: ['pygmy-hippopotamus', 'nile-crocodile', 'african-bush-elephant', 'sitatunga'],
  },
  {
    id: 'pygmy-hippopotamus',
    commonName: { en: 'Pygmy Hippopotamus', bn: 'বামন জলহস্তী' },
    scientificName: 'Choeropsis liberiensis',
    altNames: {
      en: ['Pygmy Hippo', 'Liberian Hippopotamus'],
      bn: ['বামন হিপো', 'লাইবেরীয় জলহস্তী'],
    },
    synonyms: ['Hexaprotodon liberiensis'],
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Pygmy hippopotamus',
    description: {
      en: 'The pygmy hippopotamus is a small, secretive hippo of the swampy rainforests of West Africa. Far less aquatic than its giant cousin, it rests in rivers or wallows by day and follows tunnel-like trails through the forest at night. Fewer than about 2,500 remain in the wild, though the species gained worldwide fame in 2024 through the viral baby hippo Moo Deng in Thailand.',
      bn: 'বামন জলহস্তী পশ্চিম আফ্রিকার জলাবদ্ধ বৃষ্টিবনের ছোট ও লাজুক এক জলহস্তী। বড় আত্মীয়ের চেয়ে এরা অনেক কম জলচর; দিনে নদী বা কাদাজলে বিশ্রাম নেয় আর রাতে বনের ভেতর সুড়ঙ্গের মতো পথ ধরে চলে। বনে প্রায় ২,৫০০টিরও কম টিকে আছে, তবে ২০২৪ সালে থাইল্যান্ডের ছানা “মু ডেং” ভাইরাল হওয়ায় প্রজাতিটি বিশ্বজুড়ে পরিচিতি পায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Hippopotamidae',
      genus: 'Choeropsis',
      species: 'C. liberiensis',
    },
    physical: {
      size: {
        en: 'Length 150–175 cm; 75–100 cm tall at the shoulder',
        bn: 'দৈর্ঘ্য ১৫০–১৭৫ সেমি; কাঁধ পর্যন্ত উচ্চতা ৭৫–১০০ সেমি',
      },
      weight: { en: '180–275 kg', bn: '১৮০–২৭৫ কেজি' },
      lifespan: { en: 'About 35 years or more in captivity', bn: 'আবদ্ধ অবস্থায় প্রায় ৩৫ বছর বা তারও বেশি' },
      features: {
        en: [
          'About one-tenth the weight of a common hippo, with longer legs and a narrower head',
          'Eyes set on the sides of the head rather than on top',
          'Less webbing between the toes, suited to walking on the forest floor',
        ],
        bn: [
          'সাধারণ জলহস্তীর প্রায় দশ ভাগের এক ভাগ ওজন; পা তুলনামূলক লম্বা ও মাথা সরু',
          'চোখ মাথার ওপরে নয়, দুই পাশে',
          'আঙুলের মাঝে জোড়া চামড়া কম, যা বনের মাটিতে হাঁটার উপযোগী',
        ],
      },
    },
    habitat: {
      en: 'Swampy lowland rainforest along rivers and streams',
      bn: 'নদী ও ছড়ার ধারে নিচু জলাবদ্ধ বৃষ্টিবন',
    },
    habitats: ['tropical-forest', 'rivers-lakes', 'wetland'],
    regions: ['africa'],
    distribution: {
      en: 'Mainly Liberia, with smaller populations in Côte d’Ivoire, Sierra Leone and Guinea; a Nigerian subspecies in the Niger Delta may be extinct.',
      bn: 'প্রধানত লাইবেরিয়ায়; কোত দিভোয়ার, সিয়েরা লিওন ও গিনিতে ছোট জনগোষ্ঠী আছে। নাইজার বদ্বীপের নাইজেরীয় উপপ্রজাতিটি হয়তো বিলুপ্ত হয়ে গেছে।',
    },
    climate: { en: 'Hot, humid equatorial rainforest climate', bn: 'উষ্ণ ও আর্দ্র নিরক্ষীয় বৃষ্টিবনের জলবায়ু' },
    diet: {
      en: 'Herbivore — ferns, broad-leaved plants, grasses and fallen fruit',
      bn: 'তৃণভোজী — ফার্ন, চওড়া পাতার গাছপালা, ঘাস ও মাটিতে পড়া ফল',
    },
    ecologicalRole: {
      en: 'Browses forest undergrowth and spreads seeds and nutrients along streams.',
      bn: 'বনের নিচের লতাগুল্ম খায় এবং ছড়ার ধারে বীজ ও পুষ্টি ছড়িয়ে দেয়।',
    },
    behavior: {
      en: 'Solitary and nocturnal; individuals use overlapping home ranges and mark paths with dung.',
      bn: 'একাকী ও নিশাচর; একাধিকের বিচরণ এলাকা একে অপরের সঙ্গে মিলে যায় এবং মল দিয়ে চলার পথ চিহ্নিত করে।',
    },
    range: {
      native: [
        [5.4, -8.6],
        [6.5, -9.5],
        [5.8, -7.1],
        [7.6, -11.0],
        [8.4, -9.3],
        [5.0, 6.0],
      ],
      endemicTo: { en: 'West Africa', bn: 'পশ্চিম আফ্রিকা' },
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      population: {
        en: 'Fewer than about 2,500 mature individuals',
        bn: 'প্রায় ২,৫০০টিরও কম প্রাপ্তবয়স্ক',
      },
      threats: {
        en: ['Logging, mining and farming that destroy forest habitat', 'Hunting for bushmeat', 'Civil wars that weakened protection of forests'],
        bn: ['কাঠ কাটা, খনি ও কৃষিকাজে বন ধ্বংস', 'বন্যপ্রাণীর মাংসের জন্য শিকার', 'গৃহযুদ্ধের কারণে বন সুরক্ষা দুর্বল হয়ে পড়া'],
      },
      initiatives: {
        en: ['Protection in Sapo National Park (Liberia) and Taï National Park (Côte d’Ivoire)', 'International zoo breeding programme'],
        bn: ['লাইবেরিয়ার সাপো জাতীয় উদ্যান ও কোত দিভোয়ারের তাই জাতীয় উদ্যানে সুরক্ষা', 'আন্তর্জাতিক চিড়িয়াখানা প্রজনন কর্মসূচি'],
      },
    },
    facts: {
      en: [
        'Western scientists did not observe living pygmy hippos until the early 20th century.',
        'Calves are born on land and, unlike common hippo calves, are hidden in the forest while the mother feeds.',
      ],
      bn: [
        'বিংশ শতাব্দীর শুরুর আগে পশ্চিমা বিজ্ঞানীরা জীবিত বামন জলহস্তী দেখেননি।',
        'ছানার জন্ম হয় ডাঙায়, আর সাধারণ জলহস্তীর ছানার মতো নয় — মা খেতে গেলে ছানাকে বনের ভেতর লুকিয়ে রাখে।',
      ],
    },
    related: ['common-hippopotamus', 'okapi', 'chimpanzee'],
  },
  {
    id: 'baikal-seal',
    commonName: { en: 'Baikal Seal', bn: 'বৈকাল সিল' },
    scientificName: 'Pusa sibirica',
    altNames: {
      en: ['Nerpa', 'Lake Baikal Seal'],
      bn: ['নের্পা', 'বৈকাল হ্রদের সিল'],
    },
    synonyms: ['Phoca sibirica'],
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Baikal seal',
    description: {
      en: 'The Baikal seal, or nerpa, is the only seal that lives exclusively in fresh water. It is found only in Lake Baikal in Siberia, the world’s deepest and oldest lake, more than 1,500 km from the nearest sea. How its ancestors reached the lake is still debated, though most scientists think they travelled up rivers from the Arctic Ocean.',
      bn: 'বৈকাল সিল বা নের্পা একমাত্র সিল যা কেবল মিঠাপানিতে বাস করে। সাইবেরিয়ার বৈকাল হ্রদ — পৃথিবীর সবচেয়ে গভীর ও প্রাচীন হ্রদ, নিকটতম সমুদ্র থেকে ১,৫০০ কিলোমিটারেরও বেশি দূরে — শুধু সেখানেই এদের দেখা মেলে। এদের পূর্বপুরুষেরা কীভাবে হ্রদে পৌঁছেছিল তা নিয়ে এখনো বিতর্ক আছে, তবে বেশিরভাগ বিজ্ঞানীর ধারণা, তারা উত্তর মহাসাগর থেকে নদী বেয়ে এসেছিল।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Phocidae',
      genus: 'Pusa',
      species: 'P. sibirica',
    },
    physical: {
      size: { en: 'About 1.1–1.4 m long', bn: 'প্রায় ১.১–১.৪ মিটার লম্বা' },
      weight: { en: 'Usually 50–90 kg, heaviest in autumn', bn: 'সাধারণত ৫০–৯০ কেজি; শরতে সবচেয়ে ভারী হয়' },
      lifespan: { en: 'Can exceed 50 years — among the longest-lived seals', bn: '৫০ বছরেরও বেশি বাঁচতে পারে — সবচেয়ে দীর্ঘজীবী সিলগুলোর একটি' },
      features: {
        en: [
          'Uniform silvery-grey coat, paler underneath',
          'Very large eyes for hunting in dim, deep water',
          'Strong claws on the front flippers for keeping breathing holes open in ice',
        ],
        bn: [
          'সমভাবে রুপালি-ধূসর লোম, পেটের দিক হালকা',
          'গভীর ও আবছা পানিতে শিকারের জন্য খুব বড় চোখ',
          'বরফে শ্বাস নেওয়ার ছিদ্র খোলা রাখতে সামনের ফ্লিপারে শক্ত নখ',
        ],
      },
    },
    habitat: {
      en: 'Open water of Lake Baikal; ice-covered surface in winter and rocky shores in summer',
      bn: 'বৈকাল হ্রদের খোলা পানি; শীতে বরফঢাকা উপরিভাগ এবং গ্রীষ্মে পাথুরে তীর',
    },
    habitats: ['rivers-lakes', 'polar'],
    regions: ['east-asia'],
    distribution: {
      en: 'Endemic to Lake Baikal in south-eastern Siberia, Russia, occasionally entering its inflowing and outflowing rivers.',
      bn: 'রাশিয়ার দক্ষিণ-পূর্ব সাইবেরিয়ার বৈকাল হ্রদের স্থানীয় প্রজাতি; মাঝে মাঝে হ্রদে আসা ও হ্রদ থেকে বের হওয়া নদীতেও ঢুকে পড়ে।',
    },
    climate: { en: 'Severe continental climate; the lake freezes for 4–5 months a year', bn: 'তীব্র মহাদেশীয় জলবায়ু; বছরে ৪–৫ মাস হ্রদ জমে বরফ হয়ে থাকে' },
    diet: {
      en: 'Mainly golomyanka (Baikal oilfish) and sculpins found only in the lake',
      bn: 'প্রধানত গোলোমিয়াঙ্কা (বৈকাল তেলমাছ) ও স্কালপিন জাতীয় মাছ, যা শুধু এই হ্রদেই পাওয়া যায়',
    },
    ecologicalRole: {
      en: 'The top predator of Lake Baikal and the only mammal in its unique food web.',
      bn: 'বৈকাল হ্রদের শীর্ষ শিকারি এবং এর অনন্য খাদ্যজালের একমাত্র স্তন্যপায়ী।',
    },
    behavior: {
      en: 'Mostly solitary; dives for up to 40 minutes, and females give birth in snow lairs on the ice in late winter.',
      bn: 'মূলত একাকী; ৪০ মিনিট পর্যন্ত ডুবে থাকতে পারে, আর শীতের শেষে স্ত্রী সিল বরফের ওপর বরফের গুহায় ছানা প্রসব করে।',
    },
    range: {
      native: [
        [51.8, 104.8],
        [52.5, 106.5],
        [53.4, 108.2],
        [54.5, 109.2],
        [55.6, 109.3],
      ],
      endemicTo: { en: 'Lake Baikal, Russia', bn: 'বৈকাল হ্রদ, রাশিয়া' },
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      population: {
        en: 'Roughly 80,000–115,000 animals',
        bn: 'প্রায় ৮০,০০০–১,১৫,০০০টি',
      },
      threats: {
        en: ['Hunting, both legal quotas and poaching', 'Shorter ice seasons due to climate warming', 'Industrial pollution and disease outbreaks'],
        bn: ['বৈধ কোটা ও চোরাশিকার — দুই ধরনের শিকার', 'জলবায়ু উষ্ণায়নে বরফ মৌসুম ছোট হয়ে আসা', 'শিল্পদূষণ ও রোগের প্রাদুর্ভাব'],
      },
      initiatives: {
        en: ['Lake Baikal is a UNESCO World Heritage Site', 'Hunting of pups was banned in Russia in 2009'],
        bn: ['বৈকাল হ্রদ ইউনেস্কো বিশ্ব ঐতিহ্যবাহী স্থান', '২০০৯ সালে রাশিয়ায় সিলছানা শিকার নিষিদ্ধ করা হয়'],
      },
      assessed: '2016',
    },
    facts: {
      en: [
        'It is one of the smallest true seals in the world.',
        'Lake Baikal holds about a fifth of the world’s unfrozen surface fresh water.',
      ],
      bn: [
        'এটি পৃথিবীর সবচেয়ে ছোট প্রকৃত সিলগুলোর একটি।',
        'পৃথিবীর জমাট না বাঁধা ভূপৃষ্ঠের মিঠাপানির প্রায় পাঁচ ভাগের এক ভাগ বৈকাল হ্রদে আছে।',
      ],
    },
    related: ['yangtze-finless-porpoise', 'eurasian-otter', 'beluga'],
  },
  {
    id: 'indus-river-dolphin',
    commonName: { en: 'Indus River Dolphin', bn: 'সিন্ধু নদের শুশুক' },
    scientificName: 'Platanista minor',
    altNames: {
      en: ['Bhulan', 'Indus Blind Dolphin'],
      bn: ['ভুলান', 'সিন্ধুর অন্ধ শুশুক'],
    },
    synonyms: ['Platanista gangetica minor'],
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Indus river dolphin',
    description: {
      en: 'The Indus river dolphin, or bhulan, is a nearly blind river dolphin found mainly in the Indus River of Pakistan. Long treated as a subspecies of Bangladesh’s Ganges river dolphin (shushuk), it was recognised as a separate species in 2021. Its population has slowly grown since hunting was banned in the 1970s, making it a rare conservation success among river dolphins.',
      bn: 'সিন্ধু নদের শুশুক বা ভুলান প্রায় অন্ধ এক নদীর ডলফিন, যা মূলত পাকিস্তানের সিন্ধু নদে বাস করে। দীর্ঘদিন একে বাংলাদেশের গাঙ্গেয় শুশুকের উপপ্রজাতি ধরা হতো; ২০২১ সালে একে আলাদা প্রজাতির স্বীকৃতি দেওয়া হয়। ১৯৭০-এর দশকে শিকার নিষিদ্ধ হওয়ার পর থেকে এদের সংখ্যা ধীরে ধীরে বেড়েছে — নদীর ডলফিনদের মধ্যে যা সংরক্ষণের এক বিরল সাফল্য।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Platanistidae',
      genus: 'Platanista',
      species: 'P. minor',
    },
    physical: {
      size: { en: 'Up to about 2.5 m long; females larger than males', bn: 'প্রায় ২.৫ মিটার পর্যন্ত লম্বা; স্ত্রী পুরুষের চেয়ে বড়' },
      weight: { en: 'About 70–110 kg', bn: 'প্রায় ৭০–১১০ কেজি' },
      lifespan: { en: 'About 30 years', bn: 'প্রায় ৩০ বছর' },
      features: {
        en: [
          'Very long, narrow beak packed with sharp interlocking teeth',
          'Tiny eyes without a lens — it can sense little more than light',
          'Broad, paddle-like flippers and only a low hump for a dorsal fin',
        ],
        bn: [
          'ধারালো ও খাঁজে খাঁজে বসানো দাঁতে ভরা খুব লম্বা ও সরু ঠোঁট',
          'লেন্সবিহীন অতি ক্ষুদ্র চোখ — আলো-আঁধার ছাড়া প্রায় কিছুই বুঝতে পারে না',
          'চওড়া, বৈঠার মতো ফ্লিপার; পিঠের পাখনার জায়গায় শুধু নিচু কুঁজ',
        ],
      },
    },
    habitat: {
      en: 'Deep channels of large, muddy rivers between irrigation barrages',
      bn: 'সেচ ব্যারাজগুলোর মাঝে বড়, ঘোলা পানির নদীর গভীর খাত',
    },
    habitats: ['rivers-lakes'],
    regions: ['south-asia'],
    distribution: {
      en: 'The lower and middle Indus River in Pakistan, mostly between the Chashma and Sukkur barrages, with a tiny population in the Beas River in Punjab, India.',
      bn: 'পাকিস্তানের সিন্ধু নদের নিম্ন ও মধ্য অংশ, প্রধানত চশমা থেকে সুক্কুর ব্যারাজের মধ্যে; ভারতের পাঞ্জাবের বিয়াস নদীতে খুব ছোট একটি জনগোষ্ঠী আছে।',
    },
    climate: { en: 'Hot semi-arid to arid subtropical climate', bn: 'উষ্ণ আধা-শুষ্ক থেকে শুষ্ক উপক্রান্তীয় জলবায়ু' },
    diet: { en: 'Fish such as carp and catfish, plus prawns', bn: 'কার্প ও ক্যাটফিশের মতো মাছ এবং চিংড়ি' },
    ecologicalRole: {
      en: 'The top predator of the Indus and an indicator of river flow and health.',
      bn: 'সিন্ধু নদের শীর্ষ শিকারি এবং নদীর প্রবাহ ও স্বাস্থ্যের সূচক।',
    },
    behavior: {
      en: 'Finds prey by echolocation, often swimming on its side and trailing a flipper along the riverbed; surfaces to breathe every minute or so.',
      bn: 'প্রতিধ্বনির সাহায্যে শিকার খোঁজে; প্রায়ই কাত হয়ে সাঁতার কাটে এবং একটি ফ্লিপার নদীর তলায় ছুঁইয়ে চলে; প্রায় প্রতি মিনিটে শ্বাস নিতে ভেসে ওঠে।',
    },
    range: {
      native: [
        [32.4, 71.4],
        [30.5, 70.9],
        [28.4, 69.7],
        [27.7, 68.9],
        [25.4, 68.3],
        [31.4, 75.0],
      ],
      endemicTo: { en: 'Indus river system', bn: 'সিন্ধু নদব্যবস্থা' },
    },
    conservation: {
      status: 'EN',
      trend: 'increasing',
      population: {
        en: 'About 1,800–2,000',
        bn: 'প্রায় ১,৮০০–২,০০০টি',
      },
      threats: {
        en: ['Barrages that split the river into isolated sections', 'Water diversion for irrigation that leaves stretches dry', 'Stranding in canals and entanglement in fishing nets'],
        bn: ['ব্যারাজের কারণে নদী বিচ্ছিন্ন খণ্ডে ভাগ হয়ে যাওয়া', 'সেচের জন্য পানি সরিয়ে নেওয়ায় নদীর অংশ শুকিয়ে যাওয়া', 'সেচখালে আটকে পড়া ও মাছ ধরার জালে জড়ানো'],
      },
      initiatives: {
        en: ['Indus Dolphin Reserve between Guddu and Sukkur barrages in Sindh', 'Rescue teams that return dolphins stranded in canals to the river'],
        bn: ['সিন্ধু প্রদেশে গুড্ডু ও সুক্কুর ব্যারাজের মাঝে সিন্ধু ডলফিন সংরক্ষিত এলাকা', 'সেচখালে আটকে পড়া শুশুক উদ্ধার করে নদীতে ফিরিয়ে দেওয়ার দল'],
      },
    },
    facts: {
      en: [
        'It was declared the state aquatic animal of Punjab, India, in 2019.',
        'Its eyes lack a lens, so it relies almost entirely on sound to navigate.',
      ],
      bn: [
        '২০১৯ সালে একে ভারতের পাঞ্জাব রাজ্যের রাজ্য জলজ প্রাণী ঘোষণা করা হয়।',
        'চোখে লেন্স না থাকায় চলাফেরার জন্য এরা প্রায় পুরোপুরি শব্দের ওপর নির্ভর করে।',
      ],
    },
    related: ['ganges-river-dolphin', 'irrawaddy-dolphin', 'amazon-river-dolphin', 'gharial'],
  },
  {
    id: 'european-water-vole',
    commonName: { en: 'European Water Vole', bn: 'ইউরোপীয় জলইঁদুর' },
    scientificName: 'Arvicola amphibius',
    altNames: {
      en: ['Water Vole', 'Water Rat'],
      bn: ['জলভোল', 'পানির ইঁদুর'],
    },
    synonyms: ['Arvicola terrestris'],
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'European water vole',
    description: {
      en: 'The European water vole is a chubby, blunt-nosed rodent that lives in burrows along riverbanks, ditches and ponds. It is famous as “Ratty” in The Wind in the Willows. Once common across Britain, it has declined by more than 90% there, mostly because of predation by escaped American mink.',
      bn: 'ইউরোপীয় জলইঁদুর গোলগাল, ভোঁতা নাকের এক ইঁদুরজাতীয় প্রাণী, যা নদীর পাড়, নালা ও পুকুরের ধারে গর্তে বাস করে। “দ্য উইন্ড ইন দ্য উইলোজ” বইয়ের “র‍্যাটি” চরিত্রটি আসলে এই প্রাণী। একসময় ব্রিটেনজুড়ে প্রচুর থাকলেও সেখানে এদের সংখ্যা ৯০ শতাংশেরও বেশি কমে গেছে, প্রধানত খামার থেকে পালানো আমেরিকান মিংকের শিকার হয়ে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Rodentia',
      family: 'Cricetidae',
      genus: 'Arvicola',
      species: 'A. amphibius',
    },
    physical: {
      size: {
        en: 'Head and body 14–22 cm; tail about half the body length',
        bn: 'মাথাসহ দেহ ১৪–২২ সেমি; লেজ দেহের প্রায় অর্ধেক',
      },
      weight: { en: '150–350 g', bn: '১৫০–৩৫০ গ্রাম' },
      lifespan: { en: 'Usually under 2 years in the wild', bn: 'বনে সাধারণত ২ বছরের কম' },
      features: {
        en: [
          'Rounded face with a blunt nose and small ears almost hidden in fur',
          'Thick, glossy chestnut-brown fur',
          'Furry tail, unlike the naked, scaly tail of a rat',
        ],
        bn: [
          'ভোঁতা নাকসহ গোলাকার মুখ; ছোট কান প্রায় লোমে ঢাকা',
          'ঘন, চকচকে খয়েরি-বাদামি লোম',
          'লোমশ লেজ — সাধারণ ইঁদুরের লোমহীন আঁশযুক্ত লেজের মতো নয়',
        ],
      },
    },
    habitat: {
      en: 'Slow-flowing rivers, canals, ditches, ponds and reedbeds with soft, vegetated banks',
      bn: 'নরম ও গাছপালায় ঢাকা পাড়সহ ধীরগতির নদী, খাল, নালা, পুকুর ও নলবন',
    },
    habitats: ['rivers-lakes', 'wetland', 'grassland'],
    regions: ['europe', 'east-asia'],
    distribution: {
      en: 'Most of Europe (except much of France and Iberia, where a related species lives) across Russia and Kazakhstan to central Siberia, and south to Turkey and Iran.',
      bn: 'ইউরোপের বেশিরভাগ অঞ্চল (ফ্রান্স ও আইবেরিয়ার বড় অংশ বাদে, যেখানে এর এক আত্মীয় প্রজাতি থাকে) থেকে রাশিয়া ও কাজাখস্তান হয়ে মধ্য সাইবেরিয়া পর্যন্ত, দক্ষিণে তুরস্ক ও ইরান পর্যন্ত।',
    },
    climate: { en: 'Temperate to cold continental', bn: 'নাতিশীতোষ্ণ থেকে শীতল মহাদেশীয়' },
    diet: {
      en: 'Herbivore — grasses, sedges, reeds and other waterside plants; roots and bulbs in winter',
      bn: 'তৃণভোজী — ঘাস, হোগলা, নলখাগড়া ও জলের ধারের অন্যান্য উদ্ভিদ; শীতে শিকড় ও কন্দ',
    },
    ecologicalRole: {
      en: 'Shapes waterside vegetation through grazing and is important prey for otters, herons, owls and stoats.',
      bn: 'চরে খেয়ে জলের ধারের উদ্ভিদ নিয়ন্ত্রণ করে এবং উদ, বক, পেঁচা ও স্টোটের গুরুত্বপূর্ণ খাদ্য।',
    },
    behavior: {
      en: 'Active by day; leaves neat piles of cut stems as “feeding stations” and dives with a loud “plop” when disturbed.',
      bn: 'দিনে সক্রিয়; কেটে নেওয়া ডাঁটার গোছানো স্তূপ রেখে যায়, যাকে “খাওয়ার জায়গা” বলে; বিরক্ত হলে জোরে “ঝুপ” শব্দ করে পানিতে ডুব দেয়।',
    },
    range: {
      native: [
        [52.5, -1.5],
        [51.0, 10.0],
        [52.0, 20.0],
        [60.0, 15.0],
        [56.0, 40.0],
        [50.0, 70.0],
        [56.0, 90.0],
        [39.0, 35.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Predation by invasive American mink', 'Loss and degradation of riverbank habitat', 'Poisoning and control where it damages crops'],
        bn: ['আগ্রাসী আমেরিকান মিংকের শিকার', 'নদীতীরের আবাসস্থল হারানো ও নষ্ট হওয়া', 'ফসলের ক্ষতি করে এমন এলাকায় বিষ দিয়ে দমন'],
      },
      initiatives: {
        en: ['Full legal protection in Great Britain since 2008', 'Mink control and large-scale reintroductions in the UK'],
        bn: ['২০০৮ সাল থেকে গ্রেট ব্রিটেনে পূর্ণ আইনি সুরক্ষা', 'যুক্তরাজ্যে মিংক নিয়ন্ত্রণ ও বড় পরিসরে পুনঃপ্রবর্তন'],
      },
    },
    facts: {
      en: [
        'In parts of continental Europe a form of this species lives away from water and burrows like a mole.',
        'A female can raise up to five litters in a single summer.',
      ],
      bn: [
        'ইউরোপের মূল ভূখণ্ডের কিছু অঞ্চলে এই প্রজাতির একটি রূপ পানি থেকে দূরে থাকে এবং ছুঁচোর মতো মাটিতে গর্ত খোঁড়ে।',
        'একটি স্ত্রী জলইঁদুর এক গ্রীষ্মেই পাঁচবার পর্যন্ত ছানা বড় করতে পারে।',
      ],
    },
    related: ['eurasian-beaver', 'eurasian-otter', 'pyrenean-desman'],
  },
  {
    id: 'pyrenean-desman',
    commonName: { en: 'Pyrenean Desman', bn: 'পিরেনীয় ডেসম্যান' },
    scientificName: 'Galemys pyrenaicus',
    altNames: {
      en: ['Iberian Desman', 'Trumpet-nosed Rat'],
      bn: ['আইবেরীয় ডেসম্যান', 'শুঁড়নাকি জলছুঁচো'],
    },
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Pyrenean desman',
    description: {
      en: 'The Pyrenean desman is a tiny, semi-aquatic relative of moles that lives in fast, clean mountain streams of south-western Europe. It hunts insect larvae on stream beds using a long, flexible, trunk-like snout covered in sensitive touch organs. It is one of only two living desman species and is rapidly disappearing.',
      bn: 'পিরেনীয় ডেসম্যান ছুঁচোর ছোট্ট এক আধা-জলচর আত্মীয়, যা দক্ষিণ-পশ্চিম ইউরোপের খরস্রোতা ও পরিষ্কার পাহাড়ি ছড়ায় বাস করে। স্পর্শকাতর অঙ্গে ভরা লম্বা, নমনীয়, শুঁড়ের মতো নাক দিয়ে ছড়ার তলায় পোকার লার্ভা খুঁজে শিকার করে। পৃথিবীতে টিকে থাকা মাত্র দুই প্রজাতির ডেসম্যানের এটি একটি, এবং দ্রুত হারিয়ে যাচ্ছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Eulipotyphla',
      family: 'Talpidae',
      genus: 'Galemys',
      species: 'G. pyrenaicus',
    },
    physical: {
      size: {
        en: 'Head and body 11–16 cm; tail 13–16 cm',
        bn: 'মাথাসহ দেহ ১১–১৬ সেমি; লেজ ১৩–১৬ সেমি',
      },
      weight: { en: '35–80 g', bn: '৩৫–৮০ গ্রাম' },
      lifespan: { en: 'About 3 years', bn: 'প্রায় ৩ বছর' },
      features: {
        en: [
          'Long, mobile, trumpet-shaped snout',
          'Large webbed hind feet fringed with stiff hairs',
          'Long, scaly tail flattened at the tip and used as a rudder',
        ],
        bn: [
          'লম্বা, নড়াচড়া করানো যায় এমন শিঙার মতো নাক',
          'শক্ত লোমের ঝালরযুক্ত বড় জোড়া লাগানো পেছনের পা',
          'হাল হিসেবে ব্যবহৃত, আগা চ্যাপ্টা লম্বা আঁশযুক্ত লেজ',
        ],
      },
    },
    habitat: {
      en: 'Cold, fast-flowing, well-oxygenated mountain streams with stony beds',
      bn: 'পাথুরে তলদেশসহ ঠান্ডা, খরস্রোতা ও অক্সিজেনসমৃদ্ধ পাহাড়ি ছড়া',
    },
    habitats: ['rivers-lakes', 'mountain'],
    regions: ['europe'],
    distribution: {
      en: 'The Pyrenees of France, Spain and Andorra, the Cantabrian Mountains, Galicia, northern Portugal and Spain’s Central System.',
      bn: 'ফ্রান্স, স্পেন ও অ্যান্ডোরার পিরেনিজ পর্বত, ক্যান্টাব্রিয়ান পর্বত, গালিসিয়া, উত্তর পর্তুগাল এবং স্পেনের সেন্ট্রাল সিস্টেম পর্বতমালা।',
    },
    climate: { en: 'Cool, wet mountain climate', bn: 'শীতল ও আর্দ্র পাহাড়ি জলবায়ু' },
    diet: {
      en: 'Aquatic insect larvae such as caddisflies, stoneflies and mayflies, plus small crustaceans',
      bn: 'ক্যাডিসফ্লাই, স্টোনফ্লাই ও মেফ্লাইয়ের মতো জলজ পোকার লার্ভা এবং ছোট খোলসযুক্ত প্রাণী',
    },
    ecologicalRole: {
      en: 'A sensitive indicator of clean, natural mountain streams.',
      bn: 'পরিষ্কার ও প্রাকৃতিক পাহাড়ি ছড়ার একটি সংবেদনশীল সূচক।',
    },
    behavior: {
      en: 'Mainly nocturnal; rests in crevices in the bank and probes under stones with its snout while diving.',
      bn: 'মূলত নিশাচর; পাড়ের ফাটলে বিশ্রাম নেয় এবং ডুব দিয়ে নাক দিয়ে পাথরের নিচে খোঁজাখুঁজি করে।',
    },
    range: {
      native: [
        [42.8, 0.5],
        [42.6, 2.2],
        [43.0, -1.5],
        [43.0, -5.5],
        [42.6, -8.0],
        [41.5, -7.5],
        [40.3, -5.2],
      ],
      endemicTo: { en: 'Northern Iberian Peninsula and the Pyrenees', bn: 'উত্তর আইবেরীয় উপদ্বীপ ও পিরেনিজ পর্বত' },
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Hydroelectric dams and water extraction that alter stream flow', 'Pollution of mountain streams', 'Droughts linked to climate change and predation by invasive American mink'],
        bn: ['জলবিদ্যুৎ বাঁধ ও পানি উত্তোলনে ছড়ার প্রবাহ বদলে যাওয়া', 'পাহাড়ি ছড়ার দূষণ', 'জলবায়ু পরিবর্তনজনিত খরা ও আগ্রাসী আমেরিকান মিংকের শিকার'],
      },
      initiatives: {
        en: ['EU LIFE projects to restore stream habitats in Spain and France', 'Protected under the EU Habitats Directive'],
        bn: ['স্পেন ও ফ্রান্সে ছড়ার আবাসস্থল পুনরুদ্ধারে ইইউ লাইফ প্রকল্প', 'ইইউ হ্যাবিট্যাটস ডিরেক্টিভের অধীনে সুরক্ষিত'],
      },
      assessed: '2021',
    },
    facts: {
      en: [
        'Its only living relative is the Russian desman, which lives in the river basins of the Volga and Don.',
        'Its snout is covered in thousands of tiny touch receptors called Eimer’s organs.',
      ],
      bn: [
        'এর একমাত্র জীবিত আত্মীয় রুশ ডেসম্যান, যা ভলগা ও দন নদীর অববাহিকায় বাস করে।',
        'এর নাক আইমারস অর্গান নামের হাজার হাজার ক্ষুদ্র স্পর্শ-গ্রাহকে ঢাকা।',
      ],
    },
    related: ['european-water-vole', 'eurasian-otter', 'platypus'],
  },
  {
    id: 'north-american-river-otter',
    commonName: { en: 'North American River Otter', bn: 'উত্তর আমেরিকার নদী-উদবিড়াল' },
    scientificName: 'Lontra canadensis',
    altNames: {
      en: ['Northern River Otter', 'Common Otter'],
      bn: ['উত্তরের নদী-ভোঁদড়', 'আমেরিকান ভোঁদড়'],
    },
    synonyms: ['Lutra canadensis'],
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'North American river otter',
    description: {
      en: 'The North American river otter is a playful, sleek predator of rivers, lakes and coastal marshes from Alaska to Florida. Wiped out from much of its range by trapping and pollution, it has returned to many regions thanks to reintroductions in more than 20 US states. Otters are often seen sliding down muddy or snowy banks.',
      bn: 'উত্তর আমেরিকার নদী-উদবিড়াল আলাস্কা থেকে ফ্লোরিডা পর্যন্ত নদী, হ্রদ ও উপকূলীয় জলাভূমির এক চঞ্চল ও মসৃণ দেহের শিকারি। ফাঁদ পেতে ধরা ও দূষণের কারণে বহু অঞ্চল থেকে হারিয়ে গেলেও যুক্তরাষ্ট্রের ২০টিরও বেশি অঙ্গরাজ্যে পুনঃপ্রবর্তনের ফলে অনেক জায়গায় এরা ফিরে এসেছে। কাদা বা বরফঢাকা ঢাল বেয়ে পিছলে নামতে এদের প্রায়ই দেখা যায়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Mustelidae',
      genus: 'Lontra',
      species: 'L. canadensis',
    },
    physical: {
      size: {
        en: 'Head and body 66–107 cm; tail 30–50 cm',
        bn: 'মাথাসহ দেহ ৬৬–১০৭ সেমি; লেজ ৩০–৫০ সেমি',
      },
      weight: { en: '5–14 kg', bn: '৫–১৪ কেজি' },
      lifespan: {
        en: 'About 8–9 years in the wild; up to about 21 in captivity',
        bn: 'বনে প্রায় ৮–৯ বছর; আবদ্ধ অবস্থায় প্রায় ২১ বছর পর্যন্ত',
      },
      features: {
        en: [
          'Long, streamlined body with short legs and webbed feet',
          'Thick, tapering, muscular tail',
          'Dense dark-brown fur with a silvery-grey throat',
        ],
        bn: [
          'খাটো পা ও জোড়া লাগানো পাতাসহ লম্বা, মসৃণ গড়নের দেহ',
          'মোটা, আগার দিকে সরু, পেশিবহুল লেজ',
          'ঘন গাঢ় বাদামি লোম; গলা রুপালি-ধূসর',
        ],
      },
    },
    habitat: {
      en: 'Rivers, lakes, marshes, estuaries and sheltered sea coasts',
      bn: 'নদী, হ্রদ, জলাভূমি, মোহনা ও আড়ালযুক্ত সমুদ্র উপকূল',
    },
    habitats: ['rivers-lakes', 'wetland', 'temperate-forest'],
    regions: ['north-america'],
    distribution: {
      en: 'Most of Canada and Alaska and much of the United States, especially the Pacific Northwest, Great Lakes, Atlantic coast and South-east.',
      bn: 'কানাডা ও আলাস্কার বেশিরভাগ অঞ্চল এবং যুক্তরাষ্ট্রের বড় অংশ — বিশেষত প্রশান্ত মহাসাগরীয় উত্তর-পশ্চিম, গ্রেট লেকস, আটলান্টিক উপকূল ও দক্ষিণ-পূর্বাঞ্চল।',
    },
    climate: { en: 'From subarctic to subtropical', bn: 'উপমেরু অঞ্চল থেকে উপক্রান্তীয় অঞ্চল পর্যন্ত' },
    diet: {
      en: 'Mainly slow-moving fish, plus crayfish, frogs, turtles and occasionally birds and small mammals',
      bn: 'প্রধানত ধীরগতির মাছ; এছাড়া ক্রেফিশ, ব্যাঙ, কচ্ছপ এবং মাঝে মাঝে পাখি ও ছোট স্তন্যপায়ী',
    },
    ecologicalRole: {
      en: 'A top predator of freshwater food webs that moves nutrients from water to land through latrine sites.',
      bn: 'মিঠাপানির খাদ্যজালের শীর্ষ শিকারি; নির্দিষ্ট মলত্যাগের জায়গার মাধ্যমে পানি থেকে ডাঙায় পুষ্টি পৌঁছে দেয়।',
    },
    behavior: {
      en: 'Social and playful, often in family groups; can dive to about 20 m and stay under for up to 4 minutes.',
      bn: 'সামাজিক ও খেলুড়ে, প্রায়ই পারিবারিক দলে থাকে; প্রায় ২০ মিটার গভীরে ডুব দিতে এবং ৪ মিনিট পর্যন্ত পানির নিচে থাকতে পারে।',
    },
    range: {
      native: [
        [64.0, -150.0],
        [60.0, -120.0],
        [55.0, -100.0],
        [47.5, -122.0],
        [46.0, -70.0],
        [39.0, -80.0],
        [30.0, -91.0],
        [27.0, -81.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Water pollution, including oil spills and mercury', 'Loss of wetlands and riverbank habitat', 'Incidental capture in traps'],
        bn: ['তেল ছড়িয়ে পড়া ও পারদসহ পানিদূষণ', 'জলাভূমি ও নদীতীরের আবাসস্থল হারানো', 'অন্য প্রাণীর জন্য পাতা ফাঁদে দুর্ঘটনাবশত ধরা পড়া'],
      },
      initiatives: {
        en: ['Reintroduction programmes in more than 20 US states since the 1970s', 'Listed on CITES Appendix II to regulate the fur trade'],
        bn: ['১৯৭০-এর দশক থেকে যুক্তরাষ্ট্রের ২০টিরও বেশি অঙ্গরাজ্যে পুনঃপ্রবর্তন কর্মসূচি', 'লোম বাণিজ্য নিয়ন্ত্রণে সাইটিস পরিশিষ্ট-২ এ তালিকাভুক্ত'],
      },
    },
    facts: {
      en: [
        'Thanks to delayed implantation, the time from mating to birth can be up to a year.',
        'Otters can travel overland between waterways, sometimes more than 25 km.',
      ],
      bn: [
        'বিলম্বিত ভ্রূণ-স্থাপনের কারণে মিলন থেকে ছানা জন্মানো পর্যন্ত প্রায় এক বছর সময় লাগতে পারে।',
        'এক জলাশয় থেকে আরেক জলাশয়ে যেতে এরা ডাঙা দিয়েও চলে, কখনো ২৫ কিলোমিটারেরও বেশি।',
      ],
    },
    related: ['eurasian-otter', 'giant-otter', 'sea-otter', 'north-american-beaver'],
  },
  {
    id: 'sitatunga',
    commonName: { en: 'Sitatunga', bn: 'সিতাতুঙ্গা' },
    scientificName: 'Tragelaphus spekii',
    altNames: {
      en: ['Marshbuck', 'Swamp Antelope'],
      bn: ['জলা হরিণ', 'জলাভূমির অ্যান্টিলোপ'],
    },
    category: 'freshwater',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Sitatunga',
    description: {
      en: 'The sitatunga is a shy antelope that lives almost entirely in the papyrus swamps and reedbeds of central Africa. Its long, splayed hooves spread its weight on soft, floating vegetation, and it is an excellent swimmer. When threatened, it hides in the water with only its nostrils above the surface.',
      bn: 'সিতাতুঙ্গা এক লাজুক অ্যান্টিলোপ, যা প্রায় পুরো জীবন মধ্য আফ্রিকার প্যাপিরাস জলাভূমি ও নলবনে কাটায়। লম্বা ও ছড়ানো খুর নরম ভাসমান উদ্ভিদের ওপর শরীরের ভার ছড়িয়ে দেয়, আর এরা দক্ষ সাঁতারুও। বিপদ টের পেলে শুধু নাকটুকু পানির ওপরে রেখে পুরো শরীর ডুবিয়ে লুকিয়ে থাকে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Bovidae',
      genus: 'Tragelaphus',
      species: 'T. spekii',
    },
    physical: {
      size: {
        en: 'Shoulder height 75–125 cm; males much larger than females',
        bn: 'কাঁধ পর্যন্ত উচ্চতা ৭৫–১২৫ সেমি; পুরুষ স্ত্রীর চেয়ে অনেক বড়',
      },
      weight: { en: 'Males 70–125 kg; females 50–60 kg', bn: 'পুরুষ ৭০–১২৫ কেজি; স্ত্রী ৫০–৬০ কেজি' },
      lifespan: { en: 'Up to about 20 years in captivity', bn: 'আবদ্ধ অবস্থায় প্রায় ২০ বছর পর্যন্ত' },
      features: {
        en: [
          'Very long, widely splayed hooves for walking on marshy ground',
          'Shaggy, water-repellent coat — chocolate-brown in males, reddish in females',
          'Males have long, spiralling horns',
        ],
        bn: [
          'জলাভূমির নরম মাটিতে হাঁটার জন্য খুব লম্বা ও দুই দিকে ছড়ানো খুর',
          'এলোমেলো, পানিরোধী লোম — পুরুষের রং চকলেট-বাদামি, স্ত্রীর লালচে',
          'পুরুষের লম্বা প্যাঁচানো শিং থাকে',
        ],
      },
    },
    habitat: {
      en: 'Papyrus and reed swamps, flooded grasslands and marshy forest clearings',
      bn: 'প্যাপিরাস ও নলখাগড়ার জলাভূমি, প্লাবিত তৃণভূমি এবং বনের ভেতরের জলাবদ্ধ ফাঁকা জায়গা',
    },
    habitats: ['wetland', 'rivers-lakes', 'tropical-forest'],
    regions: ['africa'],
    distribution: {
      en: 'Central and parts of West, East and southern Africa, including the Congo Basin, Lake Victoria region, Bangweulu Swamps and the Okavango Delta.',
      bn: 'মধ্য আফ্রিকা এবং পশ্চিম, পূর্ব ও দক্ষিণ আফ্রিকার কিছু অংশ — কঙ্গো অববাহিকা, ভিক্টোরিয়া হ্রদ অঞ্চল, বাঙ্গওয়েউলু জলাভূমি ও ওকাভাঙ্গো বদ্বীপসহ।',
    },
    climate: { en: 'Tropical, with wet and dry seasons', bn: 'বর্ষা ও শুষ্ক মৌসুমসহ ক্রান্তীয় জলবায়ু' },
    diet: {
      en: 'Herbivore — papyrus shoots, sedges, reeds, grasses and aquatic plants',
      bn: 'তৃণভোজী — প্যাপিরাসের কচি ডগা, হোগলা, নলখাগড়া, ঘাস ও জলজ উদ্ভিদ',
    },
    ecologicalRole: {
      en: 'Grazes and opens up dense swamp vegetation and is prey for lions, leopards, crocodiles and pythons.',
      bn: 'ঘন জলাভূমির উদ্ভিদ খেয়ে পাতলা করে এবং সিংহ, চিতাবাঘ, কুমির ও অজগরের শিকার হয়।',
    },
    behavior: {
      en: 'Mostly solitary or in small groups; feeds at dawn, dusk and night and rests on trampled platforms of reeds.',
      bn: 'মূলত একা বা ছোট দলে থাকে; ভোরে, সন্ধ্যায় ও রাতে খায় এবং মাড়িয়ে বানানো নলখাগড়ার মাচায় বিশ্রাম নেয়।',
    },
    range: {
      native: [
        [-19.0, 22.8],
        [-11.5, 29.8],
        [-2.3, 31.9],
        [1.1, 35.1],
        [0.0, 20.0],
        [4.0, 12.0],
        [7.5, 30.5],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'decreasing',
      threats: {
        en: ['Draining and burning of swamps for farming', 'Hunting for meat, often with dogs and snares'],
        bn: ['কৃষিকাজের জন্য জলাভূমি শুকানো ও পোড়ানো', 'মাংসের জন্য শিকার, প্রায়ই কুকুর ও ফাঁদের সাহায্যে'],
      },
      initiatives: {
        en: ['Protected wetlands such as the Okavango Delta and Rubondo Island National Park', 'Saiwa Swamp National Park in Kenya created specifically to protect it'],
        bn: ['ওকাভাঙ্গো বদ্বীপ ও রুবোন্দো দ্বীপ জাতীয় উদ্যানের মতো সংরক্ষিত জলাভূমি', 'বিশেষভাবে এদের রক্ষার জন্য কেনিয়ায় সাইওয়া জলাভূমি জাতীয় উদ্যান প্রতিষ্ঠা'],
      },
    },
    facts: {
      en: [
        'Its hooves can be up to about 18 cm long, far longer than those of related antelopes.',
        'Its species name honours the explorer John Hanning Speke.',
      ],
      bn: [
        'এর খুর প্রায় ১৮ সেমি পর্যন্ত লম্বা হতে পারে, যা আত্মীয় অ্যান্টিলোপদের চেয়ে অনেক বেশি।',
        'এর প্রজাতির নাম অভিযাত্রী জন হ্যানিং স্পিকের সম্মানে রাখা হয়েছে।',
      ],
    },
    related: ['common-hippopotamus', 'nile-crocodile', 'okapi'],
  },
];
