import type { Species } from '@/types';

export const marineMammals2: Species[] = [
  {
    id: 'north-atlantic-right-whale',
    commonName: { en: 'North Atlantic Right Whale', bn: 'উত্তর আটলান্টিক রাইট তিমি' },
    scientificName: 'Eubalaena glacialis',
    altNames: {
      en: ['Right Whale', 'Black Right Whale'],
      bn: ['রাইট তিমি', 'কালো রাইট তিমি'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'North Atlantic right whale',
    description: {
      en: 'The North Atlantic right whale is one of the most endangered large whales, with only a few hundred individuals left. Whalers called it the “right” whale to hunt because it swims slowly near the coast and floats when killed. Today most deaths are caused by collisions with ships and entanglement in fishing ropes along the east coast of North America.',
      bn: 'উত্তর আটলান্টিক রাইট তিমি সবচেয়ে বিপন্ন বড় তিমিগুলোর একটি; এখন মাত্র কয়েকশো টিকে আছে। উপকূলের কাছে ধীরে সাঁতরায় এবং মারা গেলে ভেসে থাকে বলে তিমি শিকারিরা একে শিকারের জন্য “ঠিক” (রাইট) তিমি বলত। বর্তমানে উত্তর আমেরিকার পূর্ব উপকূলে জাহাজের ধাক্কা এবং মাছ ধরার দড়িতে জড়িয়ে পড়াই এদের মৃত্যুর প্রধান কারণ।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Balaenidae',
      genus: 'Eubalaena',
      species: 'E. glacialis',
    },
    physical: {
      size: { en: 'About 13–16 m long', bn: 'প্রায় ১৩–১৬ মিটার লম্বা' },
      weight: { en: 'Up to about 70 tonnes', bn: 'প্রায় ৭০ টন পর্যন্ত' },
      lifespan: { en: 'Can exceed 70 years, though most now die much younger', bn: '৭০ বছরেরও বেশি বাঁচতে পারে, তবে এখন অধিকাংশই অনেক আগে মারা যায়' },
      features: {
        en: ['Rough white patches (callosities) on the head, unique to each whale', 'No dorsal fin and a broad, black back', 'V-shaped blow seen from behind'],
        bn: ['মাথায় খসখসে সাদা ছোপ (ক্যালোসিটি), যা প্রতিটি তিমির আলাদা', 'পিঠে পাখনা নেই, চওড়া কালো পিঠ', 'পেছন থেকে দেখলে ইংরেজি V-আকৃতির নিঃশ্বাসের ফোয়ারা'],
      },
    },
    habitat: {
      en: 'Coastal and continental-shelf waters of the western North Atlantic',
      bn: 'পশ্চিম উত্তর আটলান্টিকের উপকূলীয় ও মহীসোপানের পানি',
    },
    habitats: ['ocean'],
    regions: ['oceans', 'north-america'],
    distribution: {
      en: 'From calving grounds off Georgia and Florida north to feeding areas in New England, the Bay of Fundy and the Gulf of St. Lawrence.',
      bn: 'জর্জিয়া ও ফ্লোরিডার উপকূলের প্রজননস্থল থেকে উত্তরে নিউ ইংল্যান্ড, ফান্ডি উপসাগর ও সেন্ট লরেন্স উপসাগরের খাদ্যভূমি পর্যন্ত।',
    },
    climate: { en: 'Cold-temperate feeding waters; mild subtropical calving waters', bn: 'খাওয়ার জন্য ঠান্ডা-নাতিশীতোষ্ণ পানি; বাচ্চা জন্মের জন্য মৃদু উপক্রান্তীয় পানি' },
    diet: {
      en: 'Filter feeder — mainly tiny copepods skimmed from the water',
      bn: 'ছাঁকনি-ভোজী — প্রধানত পানি থেকে ছেঁকে নেওয়া ক্ষুদ্র কোপিপড',
    },
    ecologicalRole: {
      en: 'A large grazer of zooplankton whose movements recycle nutrients along the Atlantic coast.',
      bn: 'প্রাণীপ্ল্যাংকটনের বড় ভোক্তা; এর চলাচল আটলান্টিক উপকূলে পুষ্টি উপাদান ঘুরিয়ে আনে।',
    },
    behavior: {
      en: 'Slow swimmer that skim-feeds at or just below the surface; females migrate south in winter to give birth.',
      bn: 'ধীরগতির সাঁতারু, পানির উপরিভাগে বা ঠিক নিচে মুখ খুলে খাবার ছাঁকে; শীতে মাদিরা বাচ্চা জন্ম দিতে দক্ষিণে যায়।',
    },
    range: {
      native: [
        [41.85, -70.3],
        [30.8, -81.0],
        [48.0, -63.5],
        [44.7, -66.5],
        [42.8, -68.5],
      ],
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      population: {
        en: 'Roughly 370 individuals (recent estimates)',
        bn: 'প্রায় ৩৭০টি (সাম্প্রতিক হিসাব)',
      },
      threats: {
        en: ['Entanglement in lobster and crab trap ropes', 'Ship strikes', 'Shifts in prey distribution due to warming seas'],
        bn: ['লবস্টার ও কাঁকড়া ধরার ফাঁদের দড়িতে জড়িয়ে পড়া', 'জাহাজের ধাক্কা', 'সাগর উষ্ণ হওয়ায় খাদ্যের অবস্থান বদলে যাওয়া'],
      },
      initiatives: {
        en: ['Mandatory ship speed limits in key areas', 'Development of ropeless fishing gear'],
        bn: ['গুরুত্বপূর্ণ এলাকায় জাহাজের বাধ্যতামূলক গতিসীমা', 'দড়িবিহীন মাছ ধরার সরঞ্জাম উদ্ভাবন'],
      },
      assessed: '2020',
    },
    facts: {
      en: ['Each whale can be identified by the pattern of callosities on its head.', 'Its testes are the largest of any animal, together weighing about a tonne.'],
      bn: ['মাথার ক্যালোসিটির নকশা দেখে প্রতিটি তিমিকে আলাদাভাবে চেনা যায়।', 'প্রাণিজগতে এর অণ্ডকোষ সবচেয়ে বড় — দুটি মিলে ওজন প্রায় এক টন।'],
    },
    related: ['humpback-whale', 'fin-whale', 'blue-whale'],
  },
  {
    id: 'narwhal',
    commonName: { en: 'Narwhal', bn: 'নারহোয়াল' },
    scientificName: 'Monodon monoceros',
    altNames: {
      en: ['Unicorn of the Sea', 'Narwhale'],
      bn: ['সাগরের ইউনিকর্ন', 'একশৃঙ্গ তিমি'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Narwhal',
    description: {
      en: 'The narwhal is a medium-sized Arctic whale best known for the long, spiralled tusk of the males — actually an overgrown canine tooth. It lives among the sea ice of Canada, Greenland and Russia and dives over a kilometre deep in winter. Medieval traders sold narwhal tusks in Europe as unicorn horns.',
      bn: 'নারহোয়াল মাঝারি আকারের একটি উত্তর মেরুর তিমি, যার পুরুষদের লম্বা প্যাঁচানো দাঁতটির জন্য এটি বিখ্যাত — আসলে এটি অস্বাভাবিক লম্বা হয়ে ওঠা একটি শ্বদন্ত। এরা কানাডা, গ্রিনল্যান্ড ও রাশিয়ার সামুদ্রিক বরফের মধ্যে বাস করে এবং শীতে এক কিলোমিটারেরও বেশি গভীরে ডুব দেয়। মধ্যযুগে ব্যবসায়ীরা ইউরোপে নারহোয়ালের দাঁতকে ইউনিকর্নের শিং বলে বিক্রি করত।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Monodontidae',
      genus: 'Monodon',
      species: 'M. monoceros',
    },
    physical: {
      size: { en: 'Body about 4–5.5 m, plus a tusk up to about 3 m in males', bn: 'দেহ প্রায় ৪–৫.৫ মিটার, পুরুষের দাঁত আরও প্রায় ৩ মিটার পর্যন্ত' },
      weight: { en: 'About 800–1,600 kg', bn: 'প্রায় ৮০০–১,৬০০ কেজি' },
      lifespan: { en: 'Up to about 50 years or more', bn: 'প্রায় ৫০ বছর বা তার বেশি' },
      features: {
        en: ['Males have a single spiralled tusk growing through the upper lip', 'Mottled grey-and-white skin that whitens with age', 'No dorsal fin, helping it move under ice'],
        bn: ['পুরুষের ওপরের ঠোঁট ভেদ করে একটি প্যাঁচানো লম্বা দাঁত বের হয়', 'ধূসর-সাদা ছোপযুক্ত চামড়া, বয়সের সঙ্গে সাদা হয়', 'পিঠে পাখনা নেই, ফলে বরফের নিচে চলতে সুবিধা'],
      },
    },
    habitat: {
      en: 'Arctic coastal waters, fjords and deep offshore pack ice',
      bn: 'উত্তর মেরুর উপকূলীয় পানি, ফিয়র্ড ও গভীর সাগরের ভাসমান বরফ',
    },
    habitats: ['polar', 'ocean'],
    regions: ['polar', 'north-america', 'europe'],
    distribution: {
      en: 'High Arctic waters of Canada, Greenland, Svalbard and the Russian Arctic, most numerous around Baffin Bay.',
      bn: 'কানাডা, গ্রিনল্যান্ড, স্বালবার্ড ও রাশিয়ার উত্তর মেরু অঞ্চলের পানি; বাফিন উপসাগরের আশপাশে সংখ্যায় সবচেয়ে বেশি।',
    },
    climate: { en: 'Polar, ice-covered seas', bn: 'মেরু অঞ্চলের বরফে ঢাকা সাগর' },
    diet: {
      en: 'Carnivore — Greenland halibut, Arctic cod, squid and shrimp',
      bn: 'মাংসাশী — গ্রিনল্যান্ড হ্যালিবাট, আর্কটিক কড, স্কুইড ও চিংড়ি',
    },
    ecologicalRole: {
      en: 'A key Arctic predator and important prey for orcas and polar bears; also central to Inuit culture and food.',
      bn: 'উত্তর মেরুর গুরুত্বপূর্ণ শিকারি এবং ওরকা ও মেরু ভালুকের খাদ্য; ইনুইটদের সংস্কৃতি ও খাদ্যেরও অংশ।',
    },
    behavior: {
      en: 'Travels in groups that can gather in hundreds during migration; males sometimes cross tusks in a behaviour called “tusking”.',
      bn: 'দলে চলে এবং পরিযানের সময় শত শত একত্র হয়; পুরুষেরা মাঝে মাঝে একে অপরের দাঁত ঘষে, যাকে “টাস্কিং” বলে।',
    },
    range: {
      native: [
        [72.0, -62.0],
        [74.2, -85.0],
        [72.0, -20.0],
        [80.0, 15.0],
        [64.0, -85.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Loss of sea ice due to climate change', 'Increasing ship traffic and noise in the Arctic', 'Exposure to orcas in more open water'],
        bn: ['জলবায়ু পরিবর্তনে সামুদ্রিক বরফ কমে যাওয়া', 'উত্তর মেরুতে বাড়তে থাকা জাহাজ চলাচল ও শব্দ', 'খোলা পানি বাড়ায় ওরকার আক্রমণের ঝুঁকি'],
      },
      initiatives: {
        en: ['Co-managed hunting quotas with Inuit communities', 'Tusk trade regulated under CITES Appendix II'],
        bn: ['ইনুইট জনগোষ্ঠীর সঙ্গে যৌথভাবে নির্ধারিত শিকারের কোটা', 'সাইটিসের পরিশিষ্ট-২-এর অধীনে দাঁতের বাণিজ্য নিয়ন্ত্রণ'],
      },
      assessed: '2017',
    },
    facts: {
      en: ['The tusk has millions of nerve endings and may sense changes in the water.', 'Narwhals do not survive long in captivity.'],
      bn: ['এর দাঁতে লক্ষ লক্ষ স্নায়ুপ্রান্ত আছে, যা হয়তো পানির পরিবর্তন টের পেতে সাহায্য করে।', 'আবদ্ধ অবস্থায় নারহোয়াল বেশিদিন বাঁচে না।'],
    },
    related: ['beluga', 'polar-bear', 'walrus', 'orca'],
  },
  {
    id: 'beluga',
    commonName: { en: 'Beluga', bn: 'বেলুগা তিমি' },
    scientificName: 'Delphinapterus leucas',
    altNames: {
      en: ['Beluga Whale', 'White Whale', 'Sea Canary'],
      bn: ['বেলুগা', 'সাদা তিমি', 'সাগরের ক্যানারি'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Beluga whale',
    description: {
      en: 'The beluga is a small, all-white Arctic whale with a rounded forehead called a melon. It is one of the most vocal whales, producing whistles, clicks and chirps that earned it the nickname “sea canary”. Unlike most whales it can turn its head, and it often swims into shallow estuaries and rivers in summer.',
      bn: 'বেলুগা উত্তর মেরুর একটি ছোট, পুরোপুরি সাদা তিমি, যার কপাল গোলাকার — একে “মেলন” বলা হয়। এটি সবচেয়ে বেশি শব্দ করা তিমিগুলোর একটি; শিস, ক্লিক ও কিচিরমিচির শব্দের জন্য একে “সাগরের ক্যানারি” বলা হয়। বেশির ভাগ তিমির মতো নয়, এরা মাথা ঘোরাতে পারে এবং গ্রীষ্মে প্রায়ই অগভীর মোহনা ও নদীতে ঢুকে পড়ে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Monodontidae',
      genus: 'Delphinapterus',
      species: 'D. leucas',
    },
    physical: {
      size: { en: 'About 3.5–5.5 m long', bn: 'প্রায় ৩.৫–৫.৫ মিটার লম্বা' },
      weight: { en: 'About 700–1,600 kg', bn: 'প্রায় ৭০০–১,৬০০ কেজি' },
      lifespan: { en: 'Up to about 60–80 years', bn: 'প্রায় ৬০–৮০ বছর পর্যন্ত' },
      features: {
        en: ['Pure white adults; calves are born grey', 'Bulbous, flexible “melon” on the forehead', 'Flexible neck and no dorsal fin'],
        bn: ['প্রাপ্তবয়স্করা ধবধবে সাদা; বাচ্চারা জন্মায় ধূসর রঙে', 'কপালে ফোলা, নমনীয় “মেলন”', 'নমনীয় ঘাড় এবং পিঠে কোনো পাখনা নেই'],
      },
    },
    habitat: {
      en: 'Arctic and sub-Arctic seas, including shallow bays, estuaries and river mouths',
      bn: 'উত্তর মেরু ও উপমেরু অঞ্চলের সাগর, অগভীর উপসাগর, মোহনা ও নদীমুখসহ',
    },
    habitats: ['polar', 'ocean', 'rivers-lakes'],
    regions: ['polar', 'north-america', 'europe'],
    distribution: {
      en: 'Around the Arctic, from Alaska and Canada to Greenland, Svalbard and Russia, with an isolated population in the St. Lawrence River.',
      bn: 'উত্তর মেরু ঘিরে — আলাস্কা ও কানাডা থেকে গ্রিনল্যান্ড, স্বালবার্ড ও রাশিয়া পর্যন্ত; সেন্ট লরেন্স নদীতে একটি বিচ্ছিন্ন জনগোষ্ঠী আছে।',
    },
    climate: { en: 'Polar and sub-Arctic waters', bn: 'মেরু ও উপমেরু অঞ্চলের পানি' },
    diet: {
      en: 'Carnivore — fish such as cod and salmon, plus squid, shrimp and worms',
      bn: 'মাংসাশী — কড ও স্যামনের মতো মাছ, সঙ্গে স্কুইড, চিংড়ি ও কৃমিজাতীয় প্রাণী',
    },
    ecologicalRole: {
      en: 'A mid-level Arctic predator and prey for orcas and polar bears.',
      bn: 'উত্তর মেরুর মাঝারি স্তরের শিকারি এবং ওরকা ও মেরু ভালুকের খাদ্য।',
    },
    behavior: {
      en: 'Highly social, gathering in herds of hundreds or thousands in summer estuaries; communicates with a rich range of sounds.',
      bn: 'অত্যন্ত সামাজিক; গ্রীষ্মে মোহনায় শত শত বা হাজার হাজার একত্র হয় এবং নানা ধরনের শব্দে যোগাযোগ করে।',
    },
    range: {
      native: [
        [60.9, -151.0],
        [59.0, -94.0],
        [48.2, -69.5],
        [70.0, -135.0],
        [65.5, 37.5],
        [70.5, -165.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Sea-ice loss and climate change', 'Pollution and noise in estuaries', 'Some small populations, like Cook Inlet, are critically low'],
        bn: ['সামুদ্রিক বরফ হ্রাস ও জলবায়ু পরিবর্তন', 'মোহনায় দূষণ ও শব্দদূষণ', 'কুক ইনলেটের মতো কিছু ছোট জনগোষ্ঠী মারাত্মকভাবে কমে গেছে'],
      },
      initiatives: {
        en: ['Endangered Species Act protection for the Cook Inlet population', 'Saguenay–St. Lawrence Marine Park in Canada'],
        bn: ['কুক ইনলেট জনগোষ্ঠীর জন্য যুক্তরাষ্ট্রের বিপন্ন প্রজাতি আইনে সুরক্ষা', 'কানাডার সাগেনে–সেন্ট লরেন্স সামুদ্রিক উদ্যান'],
      },
      assessed: '2017',
    },
    facts: {
      en: ['Belugas moult each summer, rubbing off old skin on gravel riverbeds.', 'They can change the shape of their melon to focus their sounds.'],
      bn: ['প্রতি গ্রীষ্মে বেলুগা নুড়িময় নদীতলে ঘষে পুরোনো চামড়া ঝরিয়ে ফেলে।', 'শব্দ নির্দিষ্ট দিকে পাঠাতে এরা কপালের মেলনের আকার বদলাতে পারে।'],
    },
    related: ['narwhal', 'polar-bear', 'orca', 'walrus'],
  },
  {
    id: 'common-bottlenose-dolphin',
    commonName: { en: 'Common Bottlenose Dolphin', bn: 'সাধারণ বোতলনাক ডলফিন' },
    scientificName: 'Tursiops truncatus',
    altNames: {
      en: ['Bottlenose Dolphin', 'Atlantic Bottlenose Dolphin'],
      bn: ['বোতলনাক ডলফিন', 'আটলান্টিক বোতলনাক ডলফিন'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Common bottlenose dolphin',
    description: {
      en: 'The common bottlenose dolphin is the best-known dolphin in the world, found in warm and temperate seas everywhere. It is famous for its intelligence, playful behaviour and the signature whistles that act like names. It lives both in coastal waters and offshore, and coastal and offshore forms differ in size and diet.',
      bn: 'সাধারণ বোতলনাক ডলফিন পৃথিবীর সবচেয়ে পরিচিত ডলফিন, যা বিশ্বের সব উষ্ণ ও নাতিশীতোষ্ণ সাগরে পাওয়া যায়। বুদ্ধিমত্তা, খেলাধুলাপ্রিয় স্বভাব এবং নামের মতো কাজ করা নিজস্ব “সিগনেচার শিস”-এর জন্য এরা বিখ্যাত। উপকূল ও গভীর সাগর দুই জায়গাতেই এরা থাকে, আর এই দুই ধরনের ডলফিনের আকার ও খাদ্যাভ্যাস আলাদা।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Delphinidae',
      genus: 'Tursiops',
      species: 'T. truncatus',
    },
    physical: {
      size: { en: 'About 2–4 m long', bn: 'প্রায় ২–৪ মিটার লম্বা' },
      weight: { en: 'About 150–650 kg', bn: 'প্রায় ১৫০–৬৫০ কেজি' },
      lifespan: { en: 'Up to about 40–60 years', bn: 'প্রায় ৪০–৬০ বছর পর্যন্ত' },
      features: {
        en: ['Short, stubby beak', 'Grey body, darker on the back and pale below', 'Tall, curved dorsal fin'],
        bn: ['খাটো ও মোটা ঠোঁট', 'ধূসর শরীর — পিঠ গাঢ়, নিচের দিক হালকা', 'উঁচু ও বাঁকানো পিঠের পাখনা'],
      },
    },
    habitat: {
      en: 'Coastal bays, estuaries, lagoons and open ocean',
      bn: 'উপকূলীয় উপসাগর, মোহনা, উপহ্রদ ও খোলা সাগর',
    },
    habitats: ['ocean', 'coral-reef'],
    regions: ['oceans', 'north-america', 'europe', 'africa', 'south-america', 'oceania'],
    distribution: {
      en: 'Tropical and temperate waters worldwide, including the Atlantic, Pacific, Indian Ocean, Mediterranean and Black Sea.',
      bn: 'সারা বিশ্বের ক্রান্তীয় ও নাতিশীতোষ্ণ পানি — আটলান্টিক, প্রশান্ত, ভারত মহাসাগর, ভূমধ্যসাগর ও কৃষ্ণসাগর।',
    },
    climate: { en: 'Tropical and temperate seas', bn: 'ক্রান্তীয় ও নাতিশীতোষ্ণ সাগর' },
    diet: {
      en: 'Carnivore — a wide variety of fish, squid and crustaceans',
      bn: 'মাংসাশী — নানা ধরনের মাছ, স্কুইড ও খোলসযুক্ত প্রাণী',
    },
    ecologicalRole: {
      en: 'An adaptable predator that helps balance fish populations in coastal ecosystems.',
      bn: 'পরিবেশের সঙ্গে সহজে মানিয়ে নেওয়া শিকারি, যা উপকূলীয় বাস্তুতন্ত্রে মাছের সংখ্যার ভারসাম্য রক্ষা করে।',
    },
    behavior: {
      en: 'Lives in fluid social groups and uses clever hunting tricks such as driving fish onto mudbanks.',
      bn: 'পরিবর্তনশীল সামাজিক দলে থাকে এবং মাছকে কাদার চরে তাড়িয়ে তোলার মতো চতুর শিকারের কৌশল ব্যবহার করে।',
    },
    range: {
      native: [
        [57.7, -3.9],
        [27.3, -82.7],
        [38.0, 15.5],
        [28.0, -90.0],
        [-35.2, 174.2],
        [43.0, 33.0],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'unknown',
      threats: {
        en: ['Bycatch in fishing nets', 'Chemical pollution and oil spills', 'Disturbance from boats and dolphin-watching'],
        bn: ['মাছ ধরার জালে আটকে পড়া', 'রাসায়নিক দূষণ ও তেল নিঃসরণ', 'নৌকা ও ডলফিন দেখার পর্যটনের উৎপাত'],
      },
      initiatives: {
        en: ['Long-term research such as the Sarasota Dolphin Research Program', 'Special Areas of Conservation in European waters'],
        bn: ['সারাসোটা ডলফিন গবেষণা কর্মসূচির মতো দীর্ঘমেয়াদি গবেষণা', 'ইউরোপের জলসীমায় বিশেষ সংরক্ষণ এলাকা'],
      },
      assessed: '2019',
    },
    facts: {
      en: ['Each dolphin develops its own signature whistle, which others use to call it.', 'Bottlenose dolphins can recognise themselves in a mirror.'],
      bn: ['প্রতিটি ডলফিনের নিজস্ব “সিগনেচার শিস” থাকে, যা দিয়ে অন্যরা তাকে ডাকে।', 'বোতলনাক ডলফিন আয়নায় নিজেকে চিনতে পারে।'],
    },
    related: ['indo-pacific-bottlenose-dolphin', 'orca', 'irrawaddy-dolphin'],
  },
  {
    id: 'vaquita',
    commonName: { en: 'Vaquita', bn: 'ভাকিটা' },
    scientificName: 'Phocoena sinus',
    altNames: {
      en: ['Gulf of California Porpoise', 'Cochito'],
      bn: ['ক্যালিফোর্নিয়া উপসাগরের পরপয়েস', 'কোচিতো'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Vaquita',
    description: {
      en: 'The vaquita is the world’s smallest porpoise and the most endangered marine mammal, found only in the northern Gulf of California, Mexico. Its name means “little cow” in Spanish. The species has been driven to the brink of extinction by gillnets set illegally for the totoaba fish, whose swim bladder is smuggled to Asian markets.',
      bn: 'ভাকিটা পৃথিবীর সবচেয়ে ছোট পরপয়েস এবং সবচেয়ে বিপন্ন সামুদ্রিক স্তন্যপায়ী; এটি শুধু মেক্সিকোর উত্তর ক্যালিফোর্নিয়া উপসাগরে পাওয়া যায়। স্প্যানিশ ভাষায় এর নামের অর্থ “ছোট্ট গাভি”। টোটোয়াবা মাছের পটকা এশিয়ার বাজারে পাচারের জন্য অবৈধভাবে পাতা ফাঁস জালে আটকে এই প্রজাতি বিলুপ্তির দ্বারপ্রান্তে পৌঁছেছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Phocoenidae',
      genus: 'Phocoena',
      species: 'P. sinus',
    },
    physical: {
      size: { en: 'About 1.4–1.5 m long', bn: 'প্রায় ১.৪–১.৫ মিটার লম্বা' },
      weight: { en: 'About 40–55 kg', bn: 'প্রায় ৪০–৫৫ কেজি' },
      lifespan: { en: 'About 20 years', bn: 'প্রায় ২০ বছর' },
      features: {
        en: ['Dark rings around the eyes and dark lips', 'Proportionally tall, triangular dorsal fin', 'Small, chunky grey body'],
        bn: ['চোখের চারপাশে কালো বৃত্ত ও কালো ঠোঁট', 'দেহের তুলনায় উঁচু, ত্রিভুজাকার পিঠের পাখনা', 'ছোট ও গোলগাল ধূসর শরীর'],
      },
    },
    habitat: {
      en: 'Shallow, murky coastal lagoons and waters less than about 50 m deep',
      bn: 'অগভীর ঘোলা উপকূলীয় উপহ্রদ এবং প্রায় ৫০ মিটারের কম গভীর পানি',
    },
    habitats: ['ocean'],
    regions: ['oceans', 'north-america'],
    distribution: {
      en: 'Only the extreme northern Gulf of California, near San Felipe, Mexico.',
      bn: 'কেবল মেক্সিকোর সান ফেলিপের কাছে ক্যালিফোর্নিয়া উপসাগরের একেবারে উত্তর প্রান্তে।',
    },
    climate: { en: 'Warm subtropical sea with strong seasonal temperature swings', bn: 'ঋতুভেদে তাপমাত্রার বড় ওঠানামাসহ উষ্ণ উপক্রান্তীয় সাগর' },
    diet: {
      en: 'Carnivore — small bottom-dwelling fish, squid and crustaceans',
      bn: 'মাংসাশী — সমুদ্রতলের ছোট মাছ, স্কুইড ও খোলসযুক্ত প্রাণী',
    },
    ecologicalRole: {
      en: 'A small predator in the shallow northern Gulf, now a global symbol of bycatch-driven extinction risk.',
      bn: 'উত্তর উপসাগরের অগভীর পানির ছোট শিকারি; এখন জালে আটকে বিলুপ্তির ঝুঁকির বৈশ্বিক প্রতীক।',
    },
    behavior: {
      en: 'Very shy and elusive; avoids boats and surfaces briefly, usually alone or in pairs.',
      bn: 'অত্যন্ত লাজুক ও চোখ এড়িয়ে চলে; নৌকা এড়িয়ে যায় এবং সাধারণত একা বা জোড়ায় অল্প সময়ের জন্য ভেসে ওঠে।',
    },
    range: {
      native: [
        [31.0, -114.4],
        [30.8, -114.6],
        [31.2, -114.6],
        [30.6, -114.3],
      ],
      endemicTo: { en: 'Northern Gulf of California, Mexico', bn: 'উত্তর ক্যালিফোর্নিয়া উপসাগর, মেক্সিকো' },
    },
    conservation: {
      status: 'CR',
      trend: 'decreasing',
      population: {
        en: 'Only about 10 individuals estimated in recent surveys',
        bn: 'সাম্প্রতিক জরিপে আনুমানিক মাত্র ১০টির মতো',
      },
      threats: {
        en: ['Drowning in illegal gillnets set for totoaba', 'Gillnet fishing for shrimp and other fish', 'Extremely small population size'],
        bn: ['টোটোয়াবা ধরার অবৈধ ফাঁস জালে আটকে ডুবে মরা', 'চিংড়ি ও অন্যান্য মাছ ধরার ফাঁস জাল', 'অত্যন্ত ক্ষুদ্র জনসংখ্যা'],
      },
      initiatives: {
        en: ['Gillnet ban and “zero-tolerance” zone in the vaquita refuge', 'Removal of ghost nets and acoustic monitoring'],
        bn: ['ভাকিটা অভয়াশ্রমে ফাঁস জাল নিষিদ্ধ ও “শূন্য সহনশীলতা” এলাকা', 'পরিত্যক্ত জাল অপসারণ ও শব্দভিত্তিক পর্যবেক্ষণ'],
      },
    },
    facts: {
      en: ['It was only described by scientists in 1958.', 'Recent surveys show the survivors still give birth to healthy calves, so recovery is possible if nets are removed.'],
      bn: ['বিজ্ঞানীরা এর বর্ণনা দেন মাত্র ১৯৫৮ সালে।', 'সাম্প্রতিক জরিপে টিকে থাকা ভাকিটাদের সুস্থ বাচ্চা জন্ম দিতে দেখা গেছে, তাই জাল সরানো গেলে পুনরুদ্ধার সম্ভব।'],
    },
    related: ['indo-pacific-finless-porpoise', 'common-bottlenose-dolphin', 'north-atlantic-right-whale'],
  },
  {
    id: 'west-indian-manatee',
    commonName: { en: 'West Indian Manatee', bn: 'ওয়েস্ট ইন্ডিয়ান ম্যানাটি' },
    scientificName: 'Trichechus manatus',
    altNames: {
      en: ['Florida Manatee', 'Antillean Manatee', 'Sea Cow'],
      bn: ['ফ্লোরিডা ম্যানাটি', 'অ্যান্টিলিয়ান ম্যানাটি', 'সামুদ্রিক গাভি'],
    },
    category: 'marine',
    secondaryCategories: ['mammals', 'freshwater'],
    wikiTitle: 'West Indian manatee',
    description: {
      en: 'The West Indian manatee is a large, slow-moving plant-eater that drifts between the sea, estuaries and freshwater springs of the Caribbean and the Gulf of Mexico. It has a rounded, paddle-shaped tail and a flexible, bristly upper lip for gathering plants. It has two subspecies: the Florida manatee and the Antillean manatee.',
      bn: 'ওয়েস্ট ইন্ডিয়ান ম্যানাটি একটি বড় ও ধীরগতির তৃণভোজী প্রাণী, যা ক্যারিবীয় অঞ্চল ও মেক্সিকো উপসাগরের সাগর, মোহনা এবং মিঠা পানির ঝরনার মধ্যে ঘুরে বেড়ায়। এর লেজ গোলাকার বৈঠার মতো এবং ওপরের ঠোঁট নমনীয় ও খোঁচা খোঁচা লোমে ঢাকা, যা দিয়ে উদ্ভিদ টেনে নেয়। এর দুটি উপপ্রজাতি আছে — ফ্লোরিডা ম্যানাটি ও অ্যান্টিলিয়ান ম্যানাটি।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Sirenia',
      family: 'Trichechidae',
      genus: 'Trichechus',
      species: 'T. manatus',
    },
    physical: {
      size: { en: 'About 2.7–3.5 m long', bn: 'প্রায় ২.৭–৩.৫ মিটার লম্বা' },
      weight: { en: 'About 400–550 kg, occasionally over 1,500 kg', bn: 'প্রায় ৪০০–৫৫০ কেজি, কখনো ১,৫০০ কেজিরও বেশি' },
      lifespan: { en: 'Up to about 60 years', bn: 'প্রায় ৬০ বছর পর্যন্ত' },
      features: {
        en: ['Rounded, paddle-shaped tail', 'Small nails on the flippers', 'Wrinkled grey skin often covered in algae'],
        bn: ['গোলাকার বৈঠার মতো লেজ', 'সামনের পাখনায় ছোট নখ', 'কুঁচকানো ধূসর চামড়া, প্রায়ই শ্যাওলায় ঢাকা'],
      },
    },
    habitat: {
      en: 'Shallow coastal waters, estuaries, rivers and warm freshwater springs',
      bn: 'অগভীর উপকূলীয় পানি, মোহনা, নদী ও উষ্ণ মিঠা পানির ঝরনা',
    },
    habitats: ['ocean', 'rivers-lakes', 'mangrove'],
    regions: ['oceans', 'north-america', 'south-america'],
    distribution: {
      en: 'South-eastern USA (mainly Florida), the Gulf of Mexico, the Caribbean, Central America and the north-east coast of South America to Brazil.',
      bn: 'দক্ষিণ-পূর্ব যুক্তরাষ্ট্র (প্রধানত ফ্লোরিডা), মেক্সিকো উপসাগর, ক্যারিবীয় অঞ্চল, মধ্য আমেরিকা এবং দক্ষিণ আমেরিকার উত্তর-পূর্ব উপকূল থেকে ব্রাজিল পর্যন্ত।',
    },
    climate: { en: 'Tropical and subtropical; cannot survive water much below 20 °C for long', bn: 'ক্রান্তীয় ও উপক্রান্তীয়; প্রায় ২০ °সে-এর অনেক কম তাপমাত্রার পানিতে বেশিক্ষণ টিকতে পারে না' },
    diet: {
      en: 'Herbivore — seagrasses and freshwater plants, eating up to about a tenth of its body weight a day',
      bn: 'তৃণভোজী — সামুদ্রিক ঘাস ও মিঠা পানির উদ্ভিদ; দিনে দেহের ওজনের প্রায় এক-দশমাংশ পর্যন্ত খায়',
    },
    ecologicalRole: {
      en: 'Its grazing trims seagrass and aquatic vegetation and recycles nutrients in coastal waters.',
      bn: 'চরে খাওয়ার মাধ্যমে সামুদ্রিক ঘাস ও জলজ উদ্ভিদ ছেঁটে রাখে এবং উপকূলীয় পানিতে পুষ্টি উপাদান ঘুরিয়ে আনে।',
    },
    behavior: {
      en: 'Gentle and mostly solitary; in winter, Florida manatees crowd into warm springs and power-plant outflows.',
      bn: 'শান্ত স্বভাবের ও সাধারণত একাকী; শীতে ফ্লোরিডার ম্যানাটিরা উষ্ণ ঝরনা ও বিদ্যুৎকেন্দ্রের গরম পানির নালায় ভিড় করে।',
    },
    range: {
      native: [
        [28.9, -82.7],
        [17.5, -88.1],
        [18.5, -66.5],
        [-6.0, -35.0],
        [18.6, -91.8],
        [10.5, -61.0],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'decreasing',
      threats: {
        en: ['Collisions with boat propellers', 'Seagrass die-offs from water pollution', 'Cold stress and red-tide algal blooms'],
        bn: ['নৌকার প্রপেলারের আঘাত', 'পানিদূষণে সামুদ্রিক ঘাস মরে যাওয়া', 'ঠান্ডাজনিত চাপ ও লাল জোয়ারের শৈবাল বিস্ফোরণ'],
      },
      initiatives: {
        en: ['Boat speed zones in Florida waterways', 'Manatee sanctuaries and rescue-and-release programmes'],
        bn: ['ফ্লোরিডার জলপথে নৌযানের গতিসীমা এলাকা', 'ম্যানাটি অভয়াশ্রম এবং উদ্ধার ও অবমুক্তি কর্মসূচি'],
      },
    },
    facts: {
      en: ['Most adult Florida manatees carry scars from boat propellers, which researchers use to identify them.', 'Manatees replace their molars throughout life, with new teeth moving forward like a conveyor belt.'],
      bn: ['ফ্লোরিডার বেশির ভাগ প্রাপ্তবয়স্ক ম্যানাটির শরীরে প্রপেলারের দাগ থাকে, যা দেখে গবেষকেরা এদের চেনেন।', 'সারা জীবন এদের পেষণ দাঁত বদলায় — নতুন দাঁত কনভেয়ার বেল্টের মতো সামনে এগিয়ে আসে।'],
    },
    related: ['dugong', 'green-sea-turtle', 'asian-elephant'],
  },
  {
    id: 'sea-otter',
    commonName: { en: 'Sea Otter', bn: 'সামুদ্রিক ভোঁদড়' },
    scientificName: 'Enhydra lutris',
    altNames: {
      en: ['Northern Sea Otter', 'Southern Sea Otter'],
      bn: ['উত্তরের সামুদ্রিক ভোঁদড়', 'দক্ষিণের সামুদ্রিক ভোঁদড়'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Sea otter',
    description: {
      en: 'The sea otter is the heaviest member of the weasel family and one of the smallest marine mammals. Instead of blubber, it stays warm with the densest fur of any animal. It is a famous tool user, floating on its back and cracking open shellfish with stones balanced on its chest.',
      bn: 'সামুদ্রিক ভোঁদড় বেজিগোত্রীয় পরিবারের সবচেয়ে ভারী সদস্য এবং সবচেয়ে ছোট সামুদ্রিক স্তন্যপায়ীদের একটি। চর্বির স্তরের বদলে এরা প্রাণিজগতের সবচেয়ে ঘন লোম দিয়ে শরীর গরম রাখে। হাতিয়ার ব্যবহারের জন্য এরা বিখ্যাত — চিত হয়ে ভেসে বুকের ওপর পাথর রেখে তাতে ঠুকে ঝিনুক-শামুকের খোলস ভাঙে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Mustelidae',
      genus: 'Enhydra',
      species: 'E. lutris',
    },
    physical: {
      size: { en: 'About 1–1.5 m long including tail', bn: 'লেজসহ প্রায় ১–১.৫ মিটার লম্বা' },
      weight: { en: 'Males 22–45 kg; females 14–33 kg', bn: 'পুরুষ ২২–৪৫ কেজি; স্ত্রী ১৪–৩৩ কেজি' },
      lifespan: { en: 'About 15–20 years', bn: 'প্রায় ১৫–২০ বছর' },
      features: {
        en: ['Extremely dense brown fur — up to about a million hairs per square inch', 'Webbed, flipper-like hind feet', 'Loose skin pouch under each foreleg for storing food'],
        bn: ['অত্যন্ত ঘন বাদামি লোম — প্রতি বর্গইঞ্চিতে প্রায় দশ লাখ পর্যন্ত লোম', 'পাখনার মতো জোড়া লাগানো পেছনের পা', 'সামনের পায়ের নিচে খাবার রাখার ঢিলে চামড়ার থলি'],
      },
    },
    habitat: {
      en: 'Shallow rocky coasts and kelp forests of the North Pacific',
      bn: 'উত্তর প্রশান্ত মহাসাগরের অগভীর পাথুরে উপকূল ও কেল্প বন',
    },
    habitats: ['ocean'],
    regions: ['oceans', 'north-america', 'east-asia'],
    distribution: {
      en: 'Coasts of the North Pacific, from northern Japan and Russia through Alaska and British Columbia to central California.',
      bn: 'উত্তর প্রশান্ত মহাসাগরের উপকূল — উত্তর জাপান ও রাশিয়া থেকে আলাস্কা ও ব্রিটিশ কলাম্বিয়া হয়ে মধ্য ক্যালিফোর্নিয়া পর্যন্ত।',
    },
    climate: { en: 'Cold temperate and sub-Arctic coasts', bn: 'ঠান্ডা নাতিশীতোষ্ণ ও উপমেরু অঞ্চলের উপকূল' },
    diet: {
      en: 'Carnivore — sea urchins, crabs, clams, mussels, abalone and some fish',
      bn: 'মাংসাশী — সামুদ্রিক আর্চিন, কাঁকড়া, ঝিনুক, শামুক, অ্যাবালোনি ও কিছু মাছ',
    },
    ecologicalRole: {
      en: 'A keystone species: by eating sea urchins it prevents them from destroying kelp forests.',
      bn: 'একটি মূল প্রজাতি (কি-স্টোন প্রজাতি): সামুদ্রিক আর্চিন খেয়ে এরা কেল্প বনকে আর্চিনের হাতে ধ্বংস হওয়া থেকে রক্ষা করে।',
    },
    behavior: {
      en: 'Rests in groups called rafts, often wrapping itself in kelp so it does not drift away while sleeping.',
      bn: '“র‌্যাফট” নামের দলে বিশ্রাম নেয় এবং ঘুমানোর সময় ভেসে না যাওয়ার জন্য প্রায়ই নিজেকে কেল্পে জড়িয়ে রাখে।',
    },
    range: {
      native: [
        [36.6, -121.95],
        [52.0, -176.0],
        [55.0, 166.5],
        [60.5, -147.0],
        [49.5, -127.0],
        [43.3, 145.8],
      ],
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      threats: {
        en: ['Oil spills, which ruin the insulating fur', 'Predation by orcas and sharks in some areas', 'Disease and entanglement in fishing gear'],
        bn: ['তেল নিঃসরণ, যা লোমের তাপ ধরে রাখার ক্ষমতা নষ্ট করে', 'কিছু এলাকায় ওরকা ও হাঙরের শিকার হওয়া', 'রোগ ও মাছ ধরার সরঞ্জামে জড়িয়ে পড়া'],
      },
      initiatives: {
        en: ['International Fur Seal Treaty of 1911 ended the fur hunt', 'Reintroductions to Washington, British Columbia and other coasts'],
        bn: ['১৯১১ সালের আন্তর্জাতিক ফার সিল চুক্তির মাধ্যমে লোমের জন্য শিকার বন্ধ হয়', 'ওয়াশিংটন, ব্রিটিশ কলাম্বিয়া ও অন্যান্য উপকূলে পুনঃপ্রবর্তন'],
      },
    },
    facts: {
      en: ['Sea otters often hold paws while sleeping so they stay together.', 'Hunting for fur reduced them to perhaps a couple of thousand animals by the early 1900s.'],
      bn: ['ঘুমানোর সময় একসঙ্গে থাকার জন্য সামুদ্রিক ভোঁদড়রা প্রায়ই একে অপরের হাত ধরে রাখে।', 'লোমের জন্য শিকারের ফলে বিংশ শতাব্দীর শুরুতে এদের সংখ্যা সম্ভবত মাত্র দুই হাজারের মতো নেমে এসেছিল।'],
    },
    related: ['giant-otter', 'orca', 'walrus'],
  },
  {
    id: 'walrus',
    commonName: { en: 'Walrus', bn: 'সিন্ধুঘোটক' },
    scientificName: 'Odobenus rosmarus',
    altNames: {
      en: ['Pacific Walrus', 'Atlantic Walrus'],
      bn: ['ওয়ালরাস', 'প্রশান্ত মহাসাগরীয় সিন্ধুঘোটক'],
    },
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Walrus',
    description: {
      en: 'The walrus is a huge Arctic pinniped recognised by its long ivory tusks, bristly moustache and wrinkled, pinkish-brown skin. It uses its tusks to haul itself onto ice and to establish dominance. Walruses rest on sea ice or beaches between dives to feed on clams on the shallow seafloor.',
      bn: 'সিন্ধুঘোটক উত্তর মেরুর একটি বিশাল পাখনাপদী প্রাণী, যাকে লম্বা হাতির দাঁতের মতো গজদন্ত, খোঁচা খোঁচা গোঁফ এবং কুঁচকানো গোলাপি-বাদামি চামড়া দেখে চেনা যায়। গজদন্ত দিয়ে এরা বরফের ওপর নিজেকে টেনে তোলে এবং দলে নিজের প্রাধান্য দেখায়। অগভীর সমুদ্রতলে ঝিনুক খাওয়ার জন্য ডুব দেওয়ার ফাঁকে এরা সামুদ্রিক বরফ বা সৈকতে বিশ্রাম নেয়।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Odobenidae',
      genus: 'Odobenus',
      species: 'O. rosmarus',
    },
    physical: {
      size: { en: 'About 2.2–3.6 m long', bn: 'প্রায় ২.২–৩.৬ মিটার লম্বা' },
      weight: { en: 'Males up to about 1,500 kg or more; females about 400–1,250 kg', bn: 'পুরুষ প্রায় ১,৫০০ কেজি বা তার বেশি; স্ত্রী প্রায় ৪০০–১,২৫০ কেজি' },
      lifespan: { en: 'About 30–40 years', bn: 'প্রায় ৩০–৪০ বছর' },
      features: {
        en: ['Long tusks, up to about 1 m, in both sexes', 'Hundreds of sensitive whiskers for finding clams', 'Thick blubber layer under wrinkled skin'],
        bn: ['স্ত্রী-পুরুষ উভয়ের প্রায় ১ মিটার পর্যন্ত লম্বা গজদন্ত', 'ঝিনুক খুঁজে পেতে শত শত সংবেদনশীল গোঁফ', 'কুঁচকানো চামড়ার নিচে পুরু চর্বির স্তর'],
      },
    },
    habitat: {
      en: 'Shallow Arctic continental shelves with sea ice and rocky haul-out beaches',
      bn: 'সামুদ্রিক বরফ ও পাথুরে বিশ্রামস্থলসহ উত্তর মেরুর অগভীর মহীসোপান',
    },
    habitats: ['polar', 'ocean'],
    regions: ['polar', 'north-america', 'europe', 'east-asia'],
    distribution: {
      en: 'Around the Arctic: the Bering and Chukchi Seas (Pacific walrus) and from Canada and Greenland to Svalbard and the Russian Arctic (Atlantic walrus).',
      bn: 'উত্তর মেরু ঘিরে: বেরিং ও চুকচি সাগর (প্রশান্ত মহাসাগরীয় সিন্ধুঘোটক) এবং কানাডা ও গ্রিনল্যান্ড থেকে স্বালবার্ড ও রাশিয়ার উত্তর মেরু অঞ্চল (আটলান্টিক সিন্ধুঘোটক)।',
    },
    climate: { en: 'Polar, with seasonal sea ice', bn: 'মেরু অঞ্চল, ঋতুভিত্তিক সামুদ্রিক বরফসহ' },
    diet: {
      en: 'Carnivore — mainly clams and other bottom-dwelling invertebrates, sucked out of their shells',
      bn: 'মাংসাশী — প্রধানত ঝিনুক ও সমুদ্রতলের অন্যান্য অমেরুদণ্ডী প্রাণী, খোলস থেকে চুষে খায়',
    },
    ecologicalRole: {
      en: 'Its feeding stirs up the seafloor, releasing nutrients and reshaping bottom communities; it is also prey for polar bears and orcas.',
      bn: 'খাবার খোঁজার সময় সমুদ্রতল ওলটপালট করে পুষ্টি উপাদান ছড়িয়ে দেয় এবং তলদেশের প্রাণিগোষ্ঠী বদলে দেয়; মেরু ভালুক ও ওরকারও খাদ্য।',
    },
    behavior: {
      en: 'Very social, hauling out in crowded herds of hundreds or thousands; males compete with tusk displays and roars.',
      bn: 'অত্যন্ত সামাজিক, শত শত বা হাজার হাজার একসঙ্গে গাদাগাদি করে বিশ্রাম নেয়; পুরুষেরা গজদন্ত দেখিয়ে ও গর্জন করে প্রতিদ্বন্দ্বিতা করে।',
    },
    range: {
      native: [
        [63.0, -170.0],
        [70.0, -167.0],
        [77.0, 13.0],
        [67.5, -79.0],
        [76.0, 125.0],
      ],
    },
    conservation: {
      status: 'VU',
      trend: 'unknown',
      threats: {
        en: ['Loss of summer sea ice due to climate change', 'Deadly stampedes at crowded beach haul-outs', 'Increasing shipping and oil and gas activity'],
        bn: ['জলবায়ু পরিবর্তনে গ্রীষ্মের সামুদ্রিক বরফ হারানো', 'ভিড়ভাট্টার সৈকতে পদদলিত হয়ে মৃত্যু', 'জাহাজ চলাচল এবং তেল-গ্যাস কার্যক্রম বৃদ্ধি'],
      },
      initiatives: {
        en: ['Regulated subsistence hunting by Indigenous communities', 'Protection of key haul-out sites from disturbance'],
        bn: ['আদিবাসী জনগোষ্ঠীর জীবিকাভিত্তিক শিকার নিয়ন্ত্রণ', 'গুরুত্বপূর্ণ বিশ্রামস্থলে উৎপাত বন্ধে সুরক্ষা'],
      },
      assessed: '2016',
    },
    facts: {
      en: ['Its scientific name Odobenus means “tooth-walker”.', 'A walrus can slow its heart rate to save oxygen during dives in freezing water.'],
      bn: ['এর বৈজ্ঞানিক নাম Odobenus-এর অর্থ “দাঁতে ভর দিয়ে হাঁটা প্রাণী”।', 'বরফশীতল পানিতে ডুবের সময় অক্সিজেন বাঁচাতে সিন্ধুঘোটক হৃৎস্পন্দন কমিয়ে দিতে পারে।'],
    },
    related: ['polar-bear', 'narwhal', 'beluga', 'hawaiian-monk-seal'],
  },
  {
    id: 'hawaiian-monk-seal',
    commonName: { en: 'Hawaiian Monk Seal', bn: 'হাওয়াইয়ান মংক সিল' },
    scientificName: 'Neomonachus schauinslandi',
    altNames: {
      en: ['Monk Seal', 'Ilio-holo-i-ka-uaua'],
      bn: ['মংক সিল', 'হাওয়াইয়ের সন্ন্যাসী সিল'],
    },
    synonyms: ['Monachus schauinslandi'],
    category: 'marine',
    secondaryCategories: ['mammals'],
    wikiTitle: 'Hawaiian monk seal',
    description: {
      en: 'The Hawaiian monk seal is one of the rarest seals in the world and is found only in the Hawaiian Islands. It is one of only two surviving monk seal species — its Caribbean relative went extinct in the 20th century. Most live in the remote Northwestern Hawaiian Islands, but a growing number now haul out on beaches of the main islands.',
      bn: 'হাওয়াইয়ান মংক সিল পৃথিবীর সবচেয়ে দুর্লভ সিলগুলোর একটি এবং শুধু হাওয়াই দ্বীপপুঞ্জে পাওয়া যায়। টিকে থাকা মাত্র দুটি মংক সিল প্রজাতির এটি একটি — এর ক্যারিবীয় আত্মীয় বিংশ শতাব্দীতে বিলুপ্ত হয়ে গেছে। বেশির ভাগই প্রত্যন্ত উত্তর-পশ্চিম হাওয়াই দ্বীপপুঞ্জে থাকে, তবে এখন প্রধান দ্বীপগুলোর সৈকতেও ক্রমশ বেশি দেখা যাচ্ছে।',
    },
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Phocidae',
      genus: 'Neomonachus',
      species: 'N. schauinslandi',
    },
    physical: {
      size: { en: 'About 2–2.4 m long', bn: 'প্রায় ২–২.৪ মিটার লম্বা' },
      weight: { en: 'About 170–270 kg', bn: 'প্রায় ১৭০–২৭০ কেজি' },
      lifespan: { en: 'Around 25–30 years', bn: 'প্রায় ২৫–৩০ বছর' },
      features: {
        en: ['Grey back and paler, creamy belly', 'Short, rounded head with whiskers', 'Pups are born with black fur'],
        bn: ['পিঠ ধূসর, পেট ফ্যাকাশে ক্রিম রঙের', 'গোঁফসহ খাটো, গোলাকার মাথা', 'বাচ্চারা কালো লোম নিয়ে জন্মায়'],
      },
    },
    habitat: {
      en: 'Sandy beaches and coral reefs and atolls of tropical islands',
      bn: 'ক্রান্তীয় দ্বীপের বালুকাময় সৈকত, প্রবালপ্রাচীর ও প্রবাল দ্বীপ (অ্যাটল)',
    },
    habitats: ['coral-reef', 'ocean'],
    regions: ['oceans', 'oceania'],
    distribution: {
      en: 'The Hawaiian archipelago, mainly the Northwestern Hawaiian Islands (Papahānaumokuākea), with a smaller population in the main islands.',
      bn: 'হাওয়াই দ্বীপপুঞ্জ, প্রধানত উত্তর-পশ্চিম হাওয়াই দ্বীপপুঞ্জ (পাপাহানাউমোকুয়াকেয়া); প্রধান দ্বীপগুলোতে একটি ছোট জনগোষ্ঠী আছে।',
    },
    climate: { en: 'Tropical oceanic islands', bn: 'ক্রান্তীয় মহাসাগরীয় দ্বীপ' },
    diet: {
      en: 'Carnivore — reef fish, eels, octopus, squid and lobsters',
      bn: 'মাংসাশী — প্রবালপ্রাচীরের মাছ, বাইম, অক্টোপাস, স্কুইড ও লবস্টার',
    },
    ecologicalRole: {
      en: 'A top predator of Hawaiian reefs, and prey for tiger sharks.',
      bn: 'হাওয়াইয়ের প্রবালপ্রাচীরের শীর্ষ শিকারি এবং টাইগার হাঙরের খাদ্য।',
    },
    behavior: {
      en: 'Mostly solitary; spends days resting on beaches and forages at night, sometimes diving over 500 m.',
      bn: 'সাধারণত একাকী; দিনে সৈকতে বিশ্রাম নেয় এবং রাতে খাবার খোঁজে, কখনো কখনো ৫০০ মিটারেরও বেশি গভীরে ডুব দেয়।',
    },
    range: {
      native: [
        [23.75, -166.2],
        [25.77, -171.73],
        [28.2, -177.4],
        [27.8, -175.85],
        [22.05, -159.8],
      ],
      endemicTo: { en: 'Hawaiian Islands', bn: 'হাওয়াই দ্বীপপুঞ্জ' },
    },
    conservation: {
      status: 'EN',
      trend: 'decreasing',
      population: {
        en: 'Roughly 1,500–1,600 seals',
        bn: 'প্রায় ১,৫০০–১,৬০০টি',
      },
      threats: {
        en: ['Entanglement in marine debris and fishing gear', 'Low prey availability and shark predation on pups', 'Loss of beaches to sea-level rise and human disturbance'],
        bn: ['সামুদ্রিক আবর্জনা ও মাছ ধরার সরঞ্জামে জড়িয়ে পড়া', 'খাদ্যের অভাব এবং বাচ্চাদের ওপর হাঙরের আক্রমণ', 'সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি ও মানুষের উৎপাতে সৈকত হারানো'],
      },
      initiatives: {
        en: ['Papahānaumokuākea Marine National Monument', 'NOAA rescue, rehabilitation and pup translocation programmes'],
        bn: ['পাপাহানাউমোকুয়াকেয়া সামুদ্রিক জাতীয় স্মারক এলাকা', 'নোয়ার উদ্ধার, পুনর্বাসন ও বাচ্চা স্থানান্তর কর্মসূচি'],
      },
    },
    facts: {
      en: ['It is the official state mammal of Hawaii.', 'Its Hawaiian name, ʻIlio-holo-i-ka-uaua, means “dog that runs in rough water”.'],
      bn: ['এটি হাওয়াই অঙ্গরাজ্যের আনুষ্ঠানিক স্তন্যপায়ী প্রাণী।', 'এর হাওয়াইয়ান নাম ‘ইলিও-হোলো-ই-কা-উয়াউয়া’-র অর্থ “উত্তাল পানিতে দৌড়ানো কুকুর”।'],
    },
    related: ['walrus', 'sea-otter', 'tiger-shark', 'green-sea-turtle'],
  },
];
