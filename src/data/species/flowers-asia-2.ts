import type { Species } from '@/types';

export const flowersAsia2: Species[] = [
  {
    id: 'florists-chrysanthemum',
    commonName: { en: 'Chrysanthemum', bn: 'চন্দ্রমল্লিকা' },
    scientificName: 'Chrysanthemum morifolium',
    altNames: {
      en: ["Florist's Daisy", 'Mum', 'Hardy Garden Mum'],
      bn: ['চন্দ্রমল্লিকা ফুল', 'ক্রিসেনথিমাম', 'চন্দ্রমুখী'],
    },
    synonyms: ['Chrysanthemum × morifolium', 'Dendranthema grandiflorum'],
    category: 'flowers',
    wikiTitle: 'Chrysanthemum × morifolium',
    description: {
      en: "The florist's chrysanthemum is a perennial of the daisy family, bred in China for more than 1,500 years from wild East Asian species. Its flower heads range from simple daisies to huge globes and spidery forms in almost every colour. In Bangladesh, chandramallika brightens winter flower shows and gardens.",
      bn: 'চন্দ্রমল্লিকা সূর্যমুখী পরিবারের একটি বহুবর্ষজীবী উদ্ভিদ, যা পূর্ব এশিয়ার বুনো প্রজাতি থেকে চীনে ১,৫০০ বছরেরও বেশি সময় ধরে উন্নত করা হয়েছে। এর ফুল সাধারণ ডেইজির মতো ছোট থেকে শুরু করে বিশাল গোলাকার কিংবা মাকড়সার পায়ের মতো সরু পাপড়িরও হয়, প্রায় সব রঙেই। বাংলাদেশে শীতের পুষ্পপ্রদর্শনী ও বাগানে চন্দ্রমল্লিকা এক উজ্জ্বল আকর্ষণ।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Asterales',
      family: 'Asteraceae',
      genus: 'Chrysanthemum',
      species: 'C. morifolium',
    },
    physical: {
      size: {
        en: 'Plant 30–150 cm tall; flower heads 2–20 cm across depending on cultivar',
        bn: 'গাছ ৩০–১৫০ সেমি উঁচু; জাতভেদে ফুল ২–২০ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — large exhibition blooms weigh only tens of grams',
        bn: 'প্রযোজ্য নয় — প্রদর্শনীর বড় ফুলের ওজনও মাত্র কয়েক দশ গ্রাম',
      },
      lifespan: { en: 'Herbaceous perennial, often grown as an annual', bn: 'বীরুৎ জাতীয় বহুবর্ষজীবী, তবে প্রায়ই মৌসুমি ফুল হিসেবে চাষ হয়' },
      features: {
        en: [
          'Each "flower" is a head of hundreds of tiny florets',
          'Aromatic, lobed, grey-green leaves',
          'Flowers triggered by shortening autumn days',
        ],
        bn: [
          'প্রতিটি "ফুল" আসলে শত শত ক্ষুদ্র পুষ্পিকার একটি গুচ্ছ',
          'সুগন্ধি, খাঁজকাটা, ধূসর-সবুজ পাতা',
          'শরতে দিন ছোট হতে থাকলে ফুল আসে',
        ],
      },
    },
    habitat: {
      en: 'Gardens, nurseries and commercial flower farms',
      bn: 'বাগান, নার্সারি ও বাণিজ্যিক ফুলের খামার',
    },
    habitats: ['urban-farmland'],
    regions: ['east-asia'],
    distribution: {
      en: 'Originated in cultivation in China and was later refined in Japan; now grown worldwide.',
      bn: 'চীনে চাষের মাধ্যমে উদ্ভূত এবং পরে জাপানে আরও উন্নত করা হয়; এখন সারা বিশ্বে চাষ হয়।',
    },
    climate: { en: 'Temperate to subtropical; in Bangladesh grown in the cool winter season', bn: 'নাতিশীতোষ্ণ থেকে উপক্রান্তীয়; বাংলাদেশে শীতকালে চাষ হয়' },
    diet: {
      en: 'Photosynthesis; needs fertile, well-drained soil and full sun',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; উর্বর, পানি নিষ্কাশিত মাটি ও পূর্ণ রোদ প্রয়োজন',
    },
    ecologicalRole: {
      en: 'Single-flowered types provide late-season pollen and nectar for bees and hoverflies.',
      bn: 'একক পাপড়ির জাতগুলো মৌসুমের শেষ দিকে মৌমাছি ও হোভারফ্লাইকে পরাগ ও মধু জোগায়।',
    },
    behavior: {
      en: 'A short-day plant that blooms in autumn and winter; spreads by underground suckers.',
      bn: 'স্বল্প দিবসী উদ্ভিদ, শরৎ ও শীতে ফোটে; মাটির নিচের কাণ্ডের চারা দিয়ে বংশ বাড়ায়।',
    },
    range: {
      native: [
        [30.6, 114.3],
        [30.3, 120.2],
        [34.3, 108.9],
        [39.9, 116.4],
      ],
      introduced: [
        [35.7, 139.7],
        [23.8, 90.4],
        [52.1, 5.1],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['A cultivated hybrid; not threatened', 'Diseases such as white rust in commercial crops'],
        bn: ['এটি চাষ করা সংকর উদ্ভিদ; হুমকির মুখে নয়', 'বাণিজ্যিক চাষে সাদা মরিচাসহ নানা রোগ'],
      },
      initiatives: {
        en: ['National chrysanthemum societies maintain thousands of cultivars', 'Gene banks conserve wild Chrysanthemum relatives in China'],
        bn: ['বিভিন্ন দেশের চন্দ্রমল্লিকা সমিতি হাজারো জাত সংরক্ষণ করে', 'চীনে জিন ব্যাংকে বুনো আত্মীয় প্রজাতি সংরক্ষণ'],
      },
    },
    facts: {
      en: [
        'The chrysanthemum is the emblem of the Japanese imperial family.',
        'Dried flowers are brewed as a popular herbal tea in China.',
        'It is one of the "Four Gentlemen" of Chinese painting.',
      ],
      bn: [
        'চন্দ্রমল্লিকা জাপানের রাজপরিবারের প্রতীক।',
        'চীনে শুকনো ফুল দিয়ে জনপ্রিয় ভেষজ চা তৈরি হয়।',
        'চীনা চিত্রকলার বিখ্যাত "চার ভদ্রলোক" প্রতীকের একটি এই ফুল।',
      ],
    },
    related: ['tree-peony', 'camellia', 'sunflower'],
  },
  {
    id: 'tree-peony',
    commonName: { en: 'Tree Peony', bn: 'ট্রি পিওনি' },
    scientificName: 'Paeonia suffruticosa',
    altNames: {
      en: ['Moutan', 'Mudan', 'Peony'],
      bn: ['পিওনি', 'মুদান', 'চীনা পিওনি'],
    },
    category: 'flowers',
    wikiTitle: 'Paeonia suffruticosa',
    description: {
      en: 'The tree peony is a woody shrub from China with enormous, silky blooms in white, pink, red and purple. Known as mudan, it has been cultivated for over 1,500 years and is celebrated as the "king of flowers", a symbol of wealth and honour. The cultivated form arose from several wild Chinese peony species, some of which are now rare.',
      bn: 'ট্রি পিওনি চীনের একটি কাষ্ঠল গুল্ম, যার বিশাল রেশমি ফুল সাদা, গোলাপি, লাল ও বেগুনি রঙের হয়। চীনে মুদান নামে পরিচিত এই ফুল ১,৫০০ বছরেরও বেশি সময় ধরে চাষ হচ্ছে এবং "ফুলের রাজা" হিসেবে ঐশ্বর্য ও মর্যাদার প্রতীক। চাষ করা রূপটি চীনের কয়েকটি বুনো পিওনি প্রজাতি থেকে এসেছে, যাদের কয়েকটি এখন বিরল।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Saxifragales',
      family: 'Paeoniaceae',
      genus: 'Paeonia',
      species: 'P. suffruticosa',
    },
    physical: {
      size: {
        en: 'Shrub 1–2 m tall; flowers 10–25 cm across',
        bn: '১–২ মিটার উঁচু গুল্ম; ফুল ১০–২৫ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a woody shrub',
        bn: 'প্রযোজ্য নয় — এটি একটি কাষ্ঠল গুল্ম',
      },
      lifespan: { en: 'Perennial; individual plants can live over 100 years', bn: 'বহুবর্ষজীবী; একেকটি গাছ ১০০ বছরেরও বেশি বাঁচতে পারে' },
      features: {
        en: [
          'Very large single, semi-double or fully double flowers',
          'Woody stems that persist through winter (unlike herbaceous peonies)',
          'Deeply divided compound leaves',
        ],
        bn: [
          'অত্যন্ত বড় একক, আধা-ঘন বা ঘন পাপড়ির ফুল',
          'কাষ্ঠল কাণ্ড শীতেও টিকে থাকে (বীরুৎ পিওনির মতো মরে যায় না)',
          'গভীরভাবে খাঁজকাটা যৌগিক পাতা',
        ],
      },
    },
    habitat: {
      en: 'Wild ancestors grow in mountain scrub and open woodland; cultivated in gardens',
      bn: 'বুনো পূর্বপুরুষেরা পাহাড়ি ঝোপ ও হালকা বনে জন্মায়; বাগানে চাষ হয়',
    },
    habitats: ['temperate-forest', 'mountain', 'urban-farmland'],
    regions: ['east-asia'],
    distribution: {
      en: 'Originated in central and northwestern China; grown widely in China, Japan, Korea, Europe and North America.',
      bn: 'মধ্য ও উত্তর-পশ্চিম চীনে উদ্ভূত; চীন, জাপান, কোরিয়া, ইউরোপ ও উত্তর আমেরিকায় ব্যাপক চাষ হয়।',
    },
    climate: { en: 'Temperate climates with cold winters', bn: 'ঠান্ডা শীতসহ নাতিশীতোষ্ণ জলবায়ু' },
    diet: {
      en: 'Photosynthesis; prefers deep, well-drained, slightly alkaline soil',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; গভীর, পানি নিষ্কাশিত, সামান্য ক্ষারীয় মাটি পছন্দ করে',
    },
    ecologicalRole: {
      en: 'Single-flowered forms are visited by bees and beetles for pollen.',
      bn: 'একক পাপড়ির ফুলে পরাগের খোঁজে মৌমাছি ও গুবরে পোকা আসে।',
    },
    behavior: {
      en: 'Deciduous; flowers for one to two weeks in spring and needs winter chilling to bloom.',
      bn: 'পর্ণমোচী; বসন্তে এক থেকে দুই সপ্তাহ ফোটে এবং ফুল আনতে শীতের ঠান্ডা প্রয়োজন।',
    },
    range: {
      native: [
        [34.6, 112.4],
        [34.3, 108.9],
        [35.2, 115.4],
        [33.0, 107.0],
      ],
      introduced: [
        [35.7, 139.7],
        [37.6, 127.0],
        [51.5, -0.1],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Wild relatives harvested for root bark used in traditional medicine', 'Habitat loss in the mountains of central China'],
        bn: ['প্রচলিত ওষুধে ব্যবহারের জন্য বুনো আত্মীয় প্রজাতির শিকড়ের বাকল সংগ্রহ', 'মধ্য চীনের পাহাড়ি এলাকায় আবাসস্থল ধ্বংস'],
      },
      initiatives: {
        en: ['Famous peony gardens in Luoyang and Heze conserve historic cultivars', 'Protection of wild Paeonia species in Chinese nature reserves'],
        bn: ['লুওইয়াং ও হ্যজের বিখ্যাত পিওনি উদ্যানে ঐতিহাসিক জাত সংরক্ষণ', 'চীনের প্রাকৃতিক সংরক্ষিত এলাকায় বুনো পিওনি প্রজাতির সুরক্ষা'],
      },
    },
    facts: {
      en: [
        'The city of Luoyang holds a peony festival every spring that draws millions of visitors.',
        'Its root bark, mudanpi, is used in traditional Chinese medicine; it should not be used without expert advice.',
      ],
      bn: [
        'চীনের লুওইয়াং শহরে প্রতি বসন্তে পিওনি উৎসব হয়, যেখানে লাখো দর্শনার্থী আসেন।',
        'এর শিকড়ের বাকল (মুদানপি) প্রচলিত চীনা চিকিৎসায় ব্যবহৃত হয়; বিশেষজ্ঞের পরামর্শ ছাড়া ব্যবহার করা উচিত নয়।',
      ],
    },
    related: ['florists-chrysanthemum', 'camellia'],
  },
  {
    id: 'camellia',
    commonName: { en: 'Japanese Camellia', bn: 'ক্যামেলিয়া' },
    scientificName: 'Camellia japonica',
    altNames: {
      en: ['Camellia', 'Common Camellia', 'Tsubaki'],
      bn: ['জাপানি ক্যামেলিয়া', 'সুবাকি', 'ক্যামেলিয়া ফুল'],
    },
    category: 'flowers',
    wikiTitle: 'Camellia japonica',
    description: {
      en: 'The Japanese camellia is an evergreen shrub or small tree with glossy leaves and rose-like flowers that bloom in the cold months. A close relative of the tea plant, it grows wild in the coastal forests of Japan, Korea and eastern China. Thousands of cultivars have been bred, and in Bangladesh it is grown in hill gardens and nurseries.',
      bn: 'জাপানি ক্যামেলিয়া একটি চিরসবুজ গুল্ম বা ছোট গাছ, যার চকচকে পাতা আর গোলাপের মতো ফুল শীতের মাসগুলোতে ফোটে। চা গাছের নিকটাত্মীয় এই উদ্ভিদ জাপান, কোরিয়া ও পূর্ব চীনের উপকূলীয় বনে প্রাকৃতিকভাবে জন্মায়। হাজারো জাত তৈরি হয়েছে; বাংলাদেশে পাহাড়ি এলাকার বাগান ও নার্সারিতে এটি চাষ হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Ericales',
      family: 'Theaceae',
      genus: 'Camellia',
      species: 'C. japonica',
    },
    physical: {
      size: {
        en: 'Shrub or tree 1.5–11 m tall; flowers 6–10 cm across',
        bn: '১.৫–১১ মিটার উঁচু গুল্ম বা গাছ; ফুল ৬–১০ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — seed capsules are about 3–4 cm wide',
        bn: 'প্রযোজ্য নয় — বীজের খোসা প্রায় ৩–৪ সেমি চওড়া',
      },
      lifespan: { en: 'Perennial; some plants are several hundred years old', bn: 'বহুবর্ষজীবী; কিছু গাছের বয়স কয়েকশো বছর' },
      features: {
        en: [
          'Wild flowers are red with a central boss of yellow stamens',
          'Thick, glossy, leathery leaves with finely toothed edges',
          'Whole flowers drop intact rather than shedding petals',
        ],
        bn: [
          'বুনো ফুল লাল রঙের, মাঝখানে হলুদ পুংকেশরের গুচ্ছ',
          'পুরু, চকচকে, চামড়ার মতো পাতা, কিনারায় সূক্ষ্ম খাঁজ',
          'পাপড়ি আলাদা হয়ে না ঝরে পুরো ফুলটি একসঙ্গে খসে পড়ে',
        ],
      },
    },
    habitat: {
      en: 'Coastal and lowland evergreen forests; widely planted in gardens',
      bn: 'উপকূলীয় ও নিচু এলাকার চিরসবুজ বন; বাগানে ব্যাপক রোপণ',
    },
    habitats: ['temperate-forest', 'urban-farmland'],
    regions: ['east-asia'],
    distribution: {
      en: 'Native to Japan, South Korea, Taiwan and eastern China.',
      bn: 'জাপান, দক্ষিণ কোরিয়া, তাইওয়ান ও পূর্ব চীনের স্থানীয়।',
    },
    climate: { en: 'Mild, humid temperate climates', bn: 'মৃদু ও আর্দ্র নাতিশীতোষ্ণ জলবায়ু' },
    diet: {
      en: 'Photosynthesis; prefers acidic, humus-rich soil and partial shade',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; অম্লীয়, জৈব পদার্থসমৃদ্ধ মাটি ও আংশিক ছায়া পছন্দ করে',
    },
    ecologicalRole: {
      en: 'Winter flowers are pollinated mainly by birds such as the warbling white-eye.',
      bn: 'শীতের ফুলের পরাগায়ন মূলত পাখি, বিশেষ করে জাপানি চশমা পাখির মাধ্যমে হয়।',
    },
    behavior: {
      en: 'Flowers from late winter to spring, when few insects are active.',
      bn: 'শীতের শেষ থেকে বসন্ত পর্যন্ত ফোটে, যখন খুব কম পোকামাকড় সক্রিয় থাকে।',
    },
    range: {
      native: [
        [33.6, 130.4],
        [34.7, 135.5],
        [35.3, 139.6],
        [33.5, 126.5],
        [29.9, 121.6],
        [24.1, 120.7],
      ],
      introduced: [
        [51.5, -0.1],
        [30.0, -90.1],
        [-33.9, 151.2],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Coastal development in parts of its range', 'Fungal diseases such as camellia petal blight'],
        bn: ['এর বিস্তারের কিছু এলাকায় উপকূলীয় উন্নয়ন', 'ক্যামেলিয়া পাপড়ি পচাসহ ছত্রাকজনিত রোগ'],
      },
      initiatives: {
        en: ['International Camellia Society registers and conserves cultivars', 'Old camellia forests protected as natural monuments in Japan and Korea'],
        bn: ['আন্তর্জাতিক ক্যামেলিয়া সোসাইটি জাত নিবন্ধন ও সংরক্ষণ করে', 'জাপান ও কোরিয়ায় পুরোনো ক্যামেলিয়া বন প্রাকৃতিক নিদর্শন হিসেবে সংরক্ষিত'],
      },
    },
    facts: {
      en: [
        'Tsubaki oil pressed from its seeds has been used in Japan for centuries for hair care.',
        'It belongs to the same genus as tea (Camellia sinensis).',
      ],
      bn: [
        'এর বীজ থেকে তৈরি সুবাকি তেল জাপানে বহু শতাব্দী ধরে চুলের যত্নে ব্যবহৃত হচ্ছে।',
        'চা গাছ (Camellia sinensis) ও ক্যামেলিয়া একই গণের সদস্য।',
      ],
    },
    related: ['tree-peony', 'azalea', 'florists-chrysanthemum'],
  },
  {
    id: 'himalayan-blue-poppy',
    commonName: { en: 'Himalayan Blue Poppy', bn: 'হিমালয়ের নীল পপি' },
    scientificName: 'Meconopsis betonicifolia',
    altNames: {
      en: ['Blue Poppy', 'Tibetan Blue Poppy'],
      bn: ['নীল পপি', 'তিব্বতি নীল পপি'],
    },
    category: 'flowers',
    wikiTitle: 'Meconopsis betonicifolia',
    description: {
      en: 'The Himalayan blue poppy is a short-lived perennial famous for its rare, sky-blue, silky petals around a golden centre. It grows in cool, moist alpine meadows and forest clearings of the eastern Himalaya and southwestern China. Its true blue colour, uncommon among flowers, has made it a legendary prize among gardeners.',
      bn: 'হিমালয়ের নীল পপি একটি স্বল্পজীবী বহুবর্ষজীবী উদ্ভিদ, যার সোনালি কেন্দ্রের চারপাশে আকাশি-নীল রেশমি পাপড়ি সত্যিই বিরল সৌন্দর্যের। পূর্ব হিমালয় ও দক্ষিণ-পশ্চিম চীনের ঠান্ডা, আর্দ্র আল্পাইন তৃণভূমি ও বনের ফাঁকা জায়গায় এটি জন্মায়। ফুলের জগতে খাঁটি নীল রং খুব কম বলে বাগানপ্রেমীদের কাছে এটি কিংবদন্তির মতো মূল্যবান।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Ranunculales',
      family: 'Papaveraceae',
      genus: 'Meconopsis',
      species: 'M. betonicifolia',
    },
    physical: {
      size: {
        en: 'Plant 60–120 cm tall; flowers 7–10 cm across',
        bn: 'গাছ ৬০–১২০ সেমি উঁচু; ফুল ৭–১০ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a herbaceous plant',
        bn: 'প্রযোজ্য নয় — এটি একটি বীরুৎ উদ্ভিদ',
      },
      lifespan: { en: 'Short-lived perennial, often dying after a few seasons', bn: 'স্বল্পজীবী বহুবর্ষজীবী; প্রায়ই কয়েক মৌসুম পর মারা যায়' },
      features: {
        en: [
          'Nodding sky-blue flowers with a boss of golden stamens',
          'Leaves and stems covered with rusty hairs',
          'Rosette of oblong basal leaves',
        ],
        bn: [
          'সোনালি পুংকেশরের চারপাশে আকাশি-নীল, সামান্য নুয়ে থাকা ফুল',
          'পাতা ও কাণ্ড মরিচা রঙের লোমে ঢাকা',
          'মাটির কাছে গোলাকারে সাজানো লম্বাটে পাতা',
        ],
      },
    },
    habitat: {
      en: 'Alpine meadows, scrub and open forest at about 3,000–4,000 m',
      bn: 'প্রায় ৩,০০০–৪,০০০ মিটার উচ্চতায় আল্পাইন তৃণভূমি, ঝোপ ও হালকা বন',
    },
    habitats: ['mountain', 'grassland'],
    regions: ['east-asia', 'south-asia', 'southeast-asia'],
    distribution: {
      en: 'Southeastern Tibet, Yunnan and northern Myanmar in the eastern Himalaya.',
      bn: 'পূর্ব হিমালয়ের দক্ষিণ-পূর্ব তিব্বত, ইউনান ও উত্তর মিয়ানমার।',
    },
    climate: { en: 'Cool, moist alpine climate with monsoon summers', bn: 'বর্ষাকালীন গ্রীষ্মসহ ঠান্ডা ও আর্দ্র আল্পাইন জলবায়ু' },
    diet: {
      en: 'Photosynthesis; needs cool, moist, acidic, humus-rich soil',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; ঠান্ডা, আর্দ্র, অম্লীয় ও জৈবসমৃদ্ধ মাটি প্রয়োজন',
    },
    ecologicalRole: {
      en: 'Its flowers supply pollen to bumblebees and flies in high-altitude meadows.',
      bn: 'উঁচু পাহাড়ি তৃণভূমিতে ভ্রমর ও মাছিদের পরাগ জোগায়।',
    },
    behavior: {
      en: 'Flowers in early summer during the monsoon; flower colour can turn purplish in alkaline soil.',
      bn: 'বর্ষার শুরুতে গ্রীষ্মকালে ফোটে; ক্ষারীয় মাটিতে ফুলের রং বেগুনি হয়ে যেতে পারে।',
    },
    range: {
      native: [
        [29.6, 94.4],
        [28.5, 98.5],
        [27.8, 99.7],
        [26.9, 100.2],
        [27.3, 97.4],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Overgrazing of alpine meadows', 'Collection for traditional medicine', 'Climate warming shrinking alpine habitat'],
        bn: ['আল্পাইন তৃণভূমিতে অতিরিক্ত পশুচারণ', 'প্রচলিত ওষুধের জন্য সংগ্রহ', 'উষ্ণায়নে আল্পাইন আবাসস্থল সংকুচিত হওয়া'],
      },
      initiatives: {
        en: ['Seed conservation in botanical gardens such as Edinburgh', 'Protected areas in Yunnan and southeastern Tibet'],
        bn: ['এডিনবরাসহ বিভিন্ন উদ্ভিদ উদ্যানে বীজ সংরক্ষণ', 'ইউনান ও দক্ষিণ-পূর্ব তিব্বতে সংরক্ষিত এলাকা'],
      },
    },
    facts: {
      en: [
        'Plant hunter Frank Kingdon-Ward brought seeds to Britain in the 1920s, sparking a gardening craze.',
        'Its blue colour comes from anthocyanin pigments whose shade depends on cell chemistry.',
      ],
      bn: [
        'উদ্ভিদ-সন্ধানী ফ্র্যাঙ্ক কিংডন-ওয়ার্ড ১৯২০-এর দশকে এর বীজ ব্রিটেনে নিয়ে গেলে বাগানপ্রেমীদের মধ্যে সাড়া পড়ে যায়।',
        'এর নীল রং আসে অ্যান্থোসায়ানিন রঞ্জক থেকে, যার রং কোষের রাসায়নিক অবস্থার ওপর নির্ভর করে।',
      ],
    },
    related: ['azalea', 'tree-peony'],
  },
  {
    id: 'moth-orchid',
    commonName: { en: 'Moth Orchid', bn: 'মথ অর্কিড' },
    scientificName: 'Phalaenopsis amabilis',
    altNames: {
      en: ['Moon Orchid', 'Anggrek Bulan', 'Phalaenopsis'],
      bn: ['চন্দ্র অর্কিড', 'ফ্যালেনপসিস', 'সাদা মথ অর্কিড'],
    },
    category: 'flowers',
    wikiTitle: 'Phalaenopsis amabilis',
    description: {
      en: 'The moth orchid is an epiphytic orchid with arching sprays of broad, pure white flowers that look like moths in flight. It grows on trees in humid lowland forests from Indonesia and the Philippines to New Guinea and northern Australia. It is a parent of many of the hybrid moth orchids sold as houseplants worldwide.',
      bn: 'মথ অর্কিড একটি পরাশ্রয়ী অর্কিড, যার বাঁকানো ডাঁটায় চওড়া পাপড়ির ধবধবে সাদা ফুল দেখতে উড়ন্ত মথের মতো। ইন্দোনেশিয়া ও ফিলিপাইন থেকে নিউগিনি ও উত্তর অস্ট্রেলিয়া পর্যন্ত আর্দ্র নিম্নভূমির বনে গাছের গায়ে এটি জন্মায়। সারা বিশ্বে টবে বিক্রি হওয়া বহু সংকর মথ অর্কিডের অন্যতম পূর্বপুরুষ এটি।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Asparagales',
      family: 'Orchidaceae',
      genus: 'Phalaenopsis',
      species: 'P. amabilis',
    },
    physical: {
      size: {
        en: 'Leaves 20–50 cm long; flower spikes up to 1 m; flowers 6–10 cm across',
        bn: 'পাতা ২০–৫০ সেমি লম্বা; ফুলের ডাঁটা ১ মিটার পর্যন্ত; ফুল ৬–১০ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a small epiphyte',
        bn: 'প্রযোজ্য নয় — এটি একটি ছোট পরাশ্রয়ী উদ্ভিদ',
      },
      lifespan: { en: 'Perennial; can live for decades', bn: 'বহুবর্ষজীবী; কয়েক দশক বাঁচতে পারে' },
      features: {
        en: [
          'Broad white petals with a small yellow-marked lip',
          'A few thick, fleshy leaves and no pseudobulbs',
          'Silvery-green aerial roots that can photosynthesise',
        ],
        bn: [
          'চওড়া সাদা পাপড়ি, মাঝখানে হলুদ দাগওয়ালা ছোট ঠোঁট',
          'অল্প কয়েকটি পুরু, রসালো পাতা; কোনো ছদ্মকন্দ নেই',
          'রুপালি-সবুজ বায়বীয় মূল, যা নিজেও সালোকসংশ্লেষণ করতে পারে',
        ],
      },
    },
    habitat: {
      en: 'On tree trunks and branches in humid lowland rainforests, often near water',
      bn: 'আর্দ্র নিম্নভূমির বৃষ্টিবনে গাছের কাণ্ড ও ডালে, প্রায়ই পানির কাছাকাছি',
    },
    habitats: ['tropical-forest'],
    regions: ['southeast-asia', 'oceania'],
    distribution: {
      en: 'Indonesia, Malaysia, the Philippines, New Guinea and northeastern Australia.',
      bn: 'ইন্দোনেশিয়া, মালয়েশিয়া, ফিলিপাইন, নিউগিনি ও উত্তর-পূর্ব অস্ট্রেলিয়া।',
    },
    climate: { en: 'Hot, humid equatorial climate', bn: 'গরম ও আর্দ্র নিরক্ষীয় জলবায়ু' },
    diet: {
      en: 'Photosynthesis; roots absorb water and nutrients from rain, mist and bark debris',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; মূল বৃষ্টি, কুয়াশা ও বাকলের আবর্জনা থেকে পানি ও পুষ্টি শোষণ করে',
    },
    ecologicalRole: {
      en: 'Pollinated by carpenter bees; uses trees only for support, not nutrients.',
      bn: 'ছুতার মৌমাছি এর পরাগায়ন করে; গাছকে শুধু আশ্রয় হিসেবে ব্যবহার করে, খাদ্য নেয় না।',
    },
    behavior: {
      en: 'Flowers can last for one to three months, opening in succession along the spike.',
      bn: 'ডাঁটায় একের পর এক ফুল ফোটে এবং ফুল এক থেকে তিন মাস পর্যন্ত টিকে থাকতে পারে।',
    },
    range: {
      native: [
        [-6.6, 106.8],
        [0.5, 116.0],
        [10.3, 123.9],
        [-5.5, 145.8],
        [-16.9, 145.8],
        [4.6, 114.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'decreasing',
      threats: {
        en: ['Collection from the wild for the orchid trade', 'Lowland rainforest clearance'],
        bn: ['অর্কিড বাণিজ্যের জন্য বন থেকে সংগ্রহ', 'নিম্নভূমির বৃষ্টিবন উজাড়'],
      },
      initiatives: {
        en: ['Listed in CITES Appendix II', 'Mass propagation in nurseries reduces pressure on wild plants'],
        bn: ['সাইটিসের পরিশিষ্ট-২-এ তালিকাভুক্ত', 'নার্সারিতে ব্যাপক চারা উৎপাদনে বুনো গাছের ওপর চাপ কমেছে'],
      },
    },
    facts: {
      en: [
        'It is one of Indonesia\'s three national flowers, known as the "puspa pesona".',
        'Moth orchids are among the best-selling potted plants in the world.',
      ],
      bn: [
        'এটি ইন্দোনেশিয়ার তিনটি জাতীয় ফুলের একটি, সেখানে একে "পুসপা পেসোনা" বলা হয়।',
        'মথ অর্কিড বিশ্বের সর্বাধিক বিক্রীত টবের গাছগুলোর একটি।',
      ],
    },
    related: ['foxtail-orchid', 'noble-dendrobium', 'rafflesia'],
  },
  {
    id: 'noble-dendrobium',
    commonName: { en: 'Noble Dendrobium', bn: 'ডেনড্রোবিয়াম অর্কিড' },
    scientificName: 'Dendrobium nobile',
    altNames: {
      en: ['Noble Rock Orchid', 'Dendrobium', 'Shi Hu'],
      bn: ['নোবল ডেনড্রোবিয়াম', 'ডেনড্রোবিয়াম', 'পাথুরে অর্কিড'],
    },
    category: 'flowers',
    wikiTitle: 'Dendrobium nobile',
    description: {
      en: 'The noble dendrobium is an epiphytic orchid with cane-like stems that burst into clusters of fragrant white-and-magenta flowers with a dark purple throat. It grows on trees and rocks in the forests of the Himalaya, northeast India, Myanmar, Thailand and southern China. It is one of the most widely grown orchids and a parent of many hybrids.',
      bn: 'নোবল ডেনড্রোবিয়াম একটি পরাশ্রয়ী অর্কিড, যার বাঁশের মতো গিঁটওয়ালা কাণ্ডে গাঢ় বেগুনি গলাযুক্ত সাদা-ম্যাজেন্টা সুগন্ধি ফুলের থোকা ফোটে। হিমালয়, উত্তর-পূর্ব ভারত, মিয়ানমার, থাইল্যান্ড ও দক্ষিণ চীনের বনে গাছ ও পাথরের গায়ে এটি জন্মায়। এটি সবচেয়ে বেশি চাষ হওয়া অর্কিডগুলোর একটি এবং বহু সংকর জাতের পূর্বপুরুষ।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Asparagales',
      family: 'Orchidaceae',
      genus: 'Dendrobium',
      species: 'D. nobile',
    },
    physical: {
      size: {
        en: 'Cane-like stems 30–60 cm tall; flowers 6–8 cm across',
        bn: 'বাঁশের মতো কাণ্ড ৩০–৬০ সেমি উঁচু; ফুল ৬–৮ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a small epiphyte',
        bn: 'প্রযোজ্য নয় — এটি একটি ছোট পরাশ্রয়ী উদ্ভিদ',
      },
      lifespan: { en: 'Perennial; new canes grow every year', bn: 'বহুবর্ষজীবী; প্রতি বছর নতুন কাণ্ড গজায়' },
      features: {
        en: [
          'Jointed, swollen stems (pseudobulbs) that store water',
          'White petals tipped with magenta and a dark purple lip blotch',
          'Flowers borne along leafless older canes',
        ],
        bn: [
          'পানি জমিয়ে রাখা গিঁটওয়ালা ফোলা কাণ্ড (ছদ্মকন্দ)',
          'ম্যাজেন্টা আগাওয়ালা সাদা পাপড়ি ও ঠোঁটে গাঢ় বেগুনি ছোপ',
          'পাতাহীন পুরোনো কাণ্ড বরাবর ফুল ফোটে',
        ],
      },
    },
    habitat: {
      en: 'On trees and mossy rocks in hill and montane forests at 200–2,000 m',
      bn: '২০০–২,০০০ মিটার উচ্চতায় পাহাড়ি ও পার্বত্য বনে গাছ ও শ্যাওলাধরা পাথরের গায়ে',
    },
    habitats: ['tropical-forest', 'mountain'],
    regions: ['south-asia', 'southeast-asia', 'east-asia'],
    distribution: {
      en: 'Nepal, Bhutan, northeast India, Myanmar, Thailand, Laos, Vietnam and southern China.',
      bn: 'নেপাল, ভুটান, উত্তর-পূর্ব ভারত, মিয়ানমার, থাইল্যান্ড, লাওস, ভিয়েতনাম ও দক্ষিণ চীন।',
    },
    climate: { en: 'Monsoon climate with warm wet summers and cool dry winters', bn: 'উষ্ণ-আর্দ্র গ্রীষ্ম ও শীতল-শুষ্ক শীতের মৌসুমি জলবায়ু' },
    diet: {
      en: 'Photosynthesis; aerial roots take up water and minerals from rain and moss',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; বায়বীয় মূল বৃষ্টি ও শ্যাওলা থেকে পানি ও খনিজ নেয়',
    },
    ecologicalRole: {
      en: 'Pollinated by bees; part of the rich epiphyte community of Himalayan forests.',
      bn: 'মৌমাছি পরাগায়ন করে; হিমালয়ের বনের সমৃদ্ধ পরাশ্রয়ী উদ্ভিদ সমাজের অংশ।',
    },
    behavior: {
      en: 'Needs a cool, dry winter rest to flower; blooms in late winter and spring.',
      bn: 'ফুল আনতে শীতকালে ঠান্ডা ও শুকনো বিশ্রাম দরকার; শীতের শেষে ও বসন্তে ফোটে।',
    },
    range: {
      native: [
        [27.7, 85.3],
        [27.5, 89.6],
        [25.6, 91.9],
        [22.0, 96.1],
        [18.8, 98.9],
        [25.0, 102.7],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'decreasing',
      threats: {
        en: ['Heavy wild collection for traditional Chinese medicine (shi hu)', 'Deforestation in the Himalayan foothills'],
        bn: ['প্রচলিত চীনা চিকিৎসার (শি হু) জন্য বন থেকে ব্যাপক সংগ্রহ', 'হিমালয়ের পাদদেশে বন উজাড়'],
      },
      initiatives: {
        en: ['Listed in CITES Appendix II', 'Large-scale cultivation in China to supply medicine markets'],
        bn: ['সাইটিসের পরিশিষ্ট-২-এ তালিকাভুক্ত', 'ওষুধের বাজারের চাহিদা মেটাতে চীনে বড় পরিসরে চাষ'],
      },
    },
    facts: {
      en: [
        'It is the state flower of Sikkim in India.',
        'Dendrobium is one of the largest orchid genera, with over 1,000 species.',
      ],
      bn: [
        'এটি ভারতের সিকিম রাজ্যের রাজ্য ফুল।',
        'ডেনড্রোবিয়াম অর্কিডের সবচেয়ে বড় গণগুলোর একটি, যাতে ১,০০০-এরও বেশি প্রজাতি আছে।',
      ],
    },
    related: ['foxtail-orchid', 'moth-orchid'],
  },
  {
    id: 'tiger-lily',
    commonName: { en: 'Tiger Lily', bn: 'টাইগার লিলি' },
    scientificName: 'Lilium lancifolium',
    altNames: {
      en: ['Asian Tiger Lily', 'Lilium tigrinum'],
      bn: ['বাঘা লিলি', 'এশীয় লিলি'],
    },
    synonyms: ['Lilium tigrinum'],
    category: 'flowers',
    wikiTitle: 'Lilium lancifolium',
    description: {
      en: 'The tiger lily is an Asian lily with nodding, bright orange flowers covered in dark spots and petals curled sharply backwards. Native to China, Korea, Japan and the Russian Far East, it has been grown for its edible bulbs for centuries. It reproduces mainly from small black bulbils that form where the leaves meet the stem.',
      bn: 'টাইগার লিলি এশিয়ার একটি লিলি, যার নুয়ে থাকা উজ্জ্বল কমলা ফুলে গাঢ় ছিট এবং পাপড়িগুলো পেছনের দিকে জোরালোভাবে বাঁকানো। চীন, কোরিয়া, জাপান ও রাশিয়ার দূরপ্রাচ্যের স্থানীয় এই গাছ বহু শতাব্দী ধরে খাওয়ার উপযোগী কন্দের জন্য চাষ হয়ে আসছে। পাতা ও কাণ্ডের সংযোগস্থলে জন্মানো ছোট কালো কুঁড়িকন্দ থেকেই মূলত এর বংশবৃদ্ধি হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Liliopsida',
      order: 'Liliales',
      family: 'Liliaceae',
      genus: 'Lilium',
      species: 'L. lancifolium',
    },
    physical: {
      size: {
        en: 'Stems 0.8–1.5 m tall; flowers 7–12 cm across',
        bn: 'কাণ্ড ০.৮–১.৫ মিটার উঁচু; ফুল ৭–১২ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — bulbs are about 4–8 cm wide',
        bn: 'প্রযোজ্য নয় — কন্দ প্রায় ৪–৮ সেমি চওড়া',
      },
      lifespan: { en: 'Perennial bulb', bn: 'বহুবর্ষজীবী কন্দজ উদ্ভিদ' },
      features: {
        en: [
          'Orange, dark-spotted petals strongly recurved like a turban',
          'Black bulbils in the leaf axils',
          'Narrow, lance-shaped leaves spiralling up the stem',
        ],
        bn: [
          'গাঢ় ছিটওয়ালা কমলা পাপড়ি, পাগড়ির মতো পেছনে বাঁকানো',
          'পাতার কোলে কালো কুঁড়িকন্দ',
          'কাণ্ড ঘিরে প্যাঁচানোভাবে সাজানো সরু, বর্শার মতো পাতা',
        ],
      },
    },
    habitat: {
      en: 'Grassy hillsides, forest margins and riverbanks; fields and gardens',
      bn: 'ঘাসে ঢাকা পাহাড়ের ঢাল, বনের কিনারা ও নদীর পাড়; মাঠ ও বাগান',
    },
    habitats: ['grassland', 'temperate-forest', 'urban-farmland'],
    regions: ['east-asia'],
    distribution: {
      en: 'China, Korea, Japan and the Russian Far East; naturalised in North America and Europe.',
      bn: 'চীন, কোরিয়া, জাপান ও রাশিয়ার দূরপ্রাচ্য; উত্তর আমেরিকা ও ইউরোপে প্রাকৃতিকভাবে ছড়িয়ে পড়েছে।',
    },
    climate: { en: 'Temperate climates with warm summers and cold winters', bn: 'উষ্ণ গ্রীষ্ম ও ঠান্ডা শীতের নাতিশীতোষ্ণ জলবায়ু' },
    diet: {
      en: 'Photosynthesis; stores food in a scaly underground bulb',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; মাটির নিচে আঁশযুক্ত কন্দে খাদ্য জমা রাখে',
    },
    ecologicalRole: {
      en: 'Its flowers are pollinated by swallowtail butterflies and other large butterflies.',
      bn: 'সোয়ালোটেইল প্রজাপতিসহ বড় প্রজাপতিরা এর ফুলের পরাগায়ন করে।',
    },
    behavior: {
      en: 'Flowers in mid to late summer; most plants are sterile triploids that spread by bulbils.',
      bn: 'গ্রীষ্মের মাঝামাঝি থেকে শেষ দিকে ফোটে; বেশির ভাগ গাছ বীজ দেয় না, কুঁড়িকন্দ দিয়ে ছড়ায়।',
    },
    range: {
      native: [
        [37.6, 127.0],
        [35.7, 139.7],
        [39.9, 116.4],
        [30.6, 114.3],
        [43.1, 131.9],
      ],
      introduced: [
        [42.4, -71.1],
        [40.7, -74.0],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; common in cultivation', 'Carries lily viruses that can spread to other lilies'],
        bn: ['হুমকির মুখে নয়; চাষে সহজলভ্য', 'এর মাধ্যমে অন্য লিলিতে ভাইরাস রোগ ছড়াতে পারে'],
      },
      initiatives: {
        en: ['Grown as a food and ornamental crop in East Asia', 'Lily breeding programmes use it for Asiatic hybrids'],
        bn: ['পূর্ব এশিয়ায় খাদ্য ও শোভাবর্ধক ফসল হিসেবে চাষ', 'এশিয়াটিক সংকর লিলি তৈরিতে প্রজনন কর্মসূচিতে ব্যবহৃত'],
      },
    },
    facts: {
      en: [
        'Its bulbs are eaten in China and Korea, but all lilies are highly toxic to cats.',
        'It is one of the parents of the popular "Asiatic hybrid" lilies.',
      ],
      bn: [
        'চীন ও কোরিয়ায় এর কন্দ খাওয়া হয়, তবে যেকোনো লিলি বিড়ালের জন্য মারাত্মক বিষাক্ত।',
        'জনপ্রিয় "এশিয়াটিক সংকর" লিলির অন্যতম পূর্বপুরুষ এটি।',
      ],
    },
    related: ['florists-chrysanthemum', 'hydrangea'],
  },
  {
    id: 'hydrangea',
    commonName: { en: 'Bigleaf Hydrangea', bn: 'হাইড্রেনজিয়া' },
    scientificName: 'Hydrangea macrophylla',
    altNames: {
      en: ['Hydrangea', 'French Hydrangea', 'Hortensia'],
      bn: ['হাইড্রেঞ্জিয়া', 'বড়পাতা হাইড্রেনজিয়া', 'হর্টেনশিয়া'],
    },
    category: 'flowers',
    wikiTitle: 'Hydrangea macrophylla',
    description: {
      en: 'Bigleaf hydrangea is a deciduous shrub from Japan with huge, rounded or flat-topped flower clusters in blue, pink, purple or white. Remarkably, the flower colour of many varieties depends on the soil: acidic soil with available aluminium gives blue, while alkaline soil gives pink. It is planted widely in hill stations and cool gardens across Asia.',
      bn: 'হাইড্রেনজিয়া জাপানের একটি পর্ণমোচী গুল্ম, যার বিশাল গোলাকার বা চ্যাপ্টা ফুলের থোকা নীল, গোলাপি, বেগুনি বা সাদা হয়। আশ্চর্যের বিষয়, অনেক জাতের ফুলের রং মাটির ওপর নির্ভর করে — অ্যালুমিনিয়ামযুক্ত অম্লীয় মাটিতে নীল আর ক্ষারীয় মাটিতে গোলাপি। এশিয়াজুড়ে পাহাড়ি শহর ও ঠান্ডা অঞ্চলের বাগানে এটি ব্যাপকভাবে লাগানো হয়।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Cornales',
      family: 'Hydrangeaceae',
      genus: 'Hydrangea',
      species: 'H. macrophylla',
    },
    physical: {
      size: {
        en: 'Shrub 1–3 m tall; flower clusters 10–25 cm across',
        bn: '১–৩ মিটার উঁচু গুল্ম; ফুলের থোকা ১০–২৫ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a deciduous shrub',
        bn: 'প্রযোজ্য নয় — এটি একটি পর্ণমোচী গুল্ম',
      },
      lifespan: { en: 'Perennial; lives for decades', bn: 'বহুবর্ষজীবী; কয়েক দশক বাঁচে' },
      features: {
        en: [
          'Large clusters of showy sterile florets (mophead) or a ring of them around tiny fertile flowers (lacecap)',
          'Large, glossy, toothed leaves',
          'Flower colour shifts between blue and pink with soil pH',
        ],
        bn: [
          'আকর্ষণীয় বন্ধ্যা পুষ্পিকার বড় গোলাকার থোকা (মপহেড), অথবা ছোট উর্বর ফুলের চারপাশে তাদের বলয় (লেসক্যাপ)',
          'বড়, চকচকে, খাঁজকাটা পাতা',
          'মাটির অম্লতা অনুযায়ী ফুলের রং নীল থেকে গোলাপি হয়',
        ],
      },
    },
    habitat: {
      en: 'Coastal scrub and forest edges; gardens in cool, moist regions',
      bn: 'উপকূলীয় ঝোপ ও বনের কিনারা; ঠান্ডা ও আর্দ্র অঞ্চলের বাগান',
    },
    habitats: ['temperate-forest', 'urban-farmland'],
    regions: ['east-asia'],
    distribution: {
      en: 'Native to the Pacific coast of central Japan; cultivated worldwide in temperate regions and Asian hill stations.',
      bn: 'মধ্য জাপানের প্রশান্ত মহাসাগরীয় উপকূলের স্থানীয়; বিশ্বের নাতিশীতোষ্ণ অঞ্চল ও এশিয়ার পাহাড়ি শহরে চাষ হয়।',
    },
    climate: { en: 'Mild, humid temperate climates', bn: 'মৃদু ও আর্দ্র নাতিশীতোষ্ণ জলবায়ু' },
    diet: {
      en: 'Photosynthesis; needs moist, rich soil and dislikes drought',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; আর্দ্র, উর্বর মাটি দরকার, খরা সহ্য করে না',
    },
    ecologicalRole: {
      en: 'The small fertile flowers of lacecap forms feed bees and beetles.',
      bn: 'লেসক্যাপ জাতের ছোট উর্বর ফুল মৌমাছি ও গুবরে পোকাকে খাদ্য জোগায়।',
    },
    behavior: {
      en: 'Flowers in early summer during the Japanese rainy season; loses its leaves in winter.',
      bn: 'জাপানের বর্ষাকালে গ্রীষ্মের শুরুতে ফোটে; শীতে পাতা ঝরিয়ে ফেলে।',
    },
    range: {
      native: [
        [35.3, 139.5],
        [34.7, 138.9],
        [33.1, 139.8],
        [34.9, 139.1],
      ],
      introduced: [
        [27.0, 88.3],
        [43.0, -2.0],
        [38.7, -27.2],
      ],
    },
    conservation: {
      status: 'NE',
      trend: 'unknown',
      threats: {
        en: ['Not threatened; abundant in cultivation', 'Coastal development in its small wild range'],
        bn: ['হুমকির মুখে নয়; চাষে প্রচুর পাওয়া যায়', 'ছোট বুনো বিস্তার এলাকায় উপকূলীয় উন্নয়ন'],
      },
      initiatives: {
        en: ['Hydrangea festivals and temple gardens in Japan conserve old varieties', 'National plant collections in Europe'],
        bn: ['জাপানের হাইড্রেনজিয়া উৎসব ও মন্দির উদ্যানে পুরোনো জাত সংরক্ষণ', 'ইউরোপে জাতীয় উদ্ভিদ সংগ্রহ'],
      },
    },
    facts: {
      en: [
        'In Japan it is called ajisai and is the iconic flower of the rainy season.',
        'All parts of the plant are mildly toxic if eaten.',
      ],
      bn: [
        'জাপানে একে আজিসাই বলে; এটি সেখানকার বর্ষাকালের প্রতীকী ফুল।',
        'গাছের সব অংশ খেলে হালকা বিষক্রিয়া হতে পারে।',
      ],
    },
    related: ['camellia', 'azalea', 'tiger-lily'],
  },
  {
    id: 'azalea',
    commonName: { en: "Sims's Azalea", bn: 'অ্যাজালিয়া' },
    scientificName: 'Rhododendron simsii',
    altNames: {
      en: ['Indian Azalea', 'Azalea', 'Indoor Azalea'],
      bn: ['আজালিয়া', 'ইন্ডিয়ান অ্যাজালিয়া', 'চীনা অ্যাজালিয়া'],
    },
    category: 'flowers',
    wikiTitle: 'Rhododendron simsii',
    description: {
      en: "Sims's azalea is an evergreen shrub that covers itself in funnel-shaped red, pink or white flowers in spring. Despite the trade name \"Indian azalea\", it is native to China, Taiwan, Myanmar and nearby East Asia, where whole hillsides turn red when it blooms. It is the main parent of the potted azaleas sold worldwide.",
      bn: 'অ্যাজালিয়া একটি চিরসবুজ গুল্ম, যা বসন্তে লাল, গোলাপি বা সাদা ফানেল আকৃতির ফুলে ঢেকে যায়। ব্যবসায়িক নাম "ইন্ডিয়ান অ্যাজালিয়া" হলেও এর আদি নিবাস আসলে চীন, তাইওয়ান, মিয়ানমার ও পূর্ব এশিয়ার আশপাশ; ফুল ফোটার সময় সেখানে পুরো পাহাড়ের ঢাল লাল হয়ে যায়। সারা বিশ্বে টবে বিক্রি হওয়া অ্যাজালিয়ার প্রধান পূর্বপুরুষ এটি।',
    },
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Ericales',
      family: 'Ericaceae',
      genus: 'Rhododendron',
      species: 'R. simsii',
    },
    physical: {
      size: {
        en: 'Shrub 1–3 m tall; flowers 4–6 cm across',
        bn: '১–৩ মিটার উঁচু গুল্ম; ফুল ৪–৬ সেমি চওড়া',
      },
      weight: {
        en: 'Not applicable — a woody shrub',
        bn: 'প্রযোজ্য নয় — এটি একটি কাষ্ঠল গুল্ম',
      },
      lifespan: { en: 'Perennial; lives for decades', bn: 'বহুবর্ষজীবী; কয়েক দশক বাঁচে' },
      features: {
        en: [
          'Funnel-shaped flowers with darker spots on the upper petal',
          'Small, hairy, elliptic leaves',
          'Flowers in clusters of two to six at branch tips',
        ],
        bn: [
          'ওপরের পাপড়িতে গাঢ় ছিটওয়ালা ফানেল আকৃতির ফুল',
          'ছোট, রোমশ, উপবৃত্তাকার পাতা',
          'ডালের আগায় দুই থেকে ছয়টি ফুলের থোকা',
        ],
      },
    },
    habitat: {
      en: 'Hillside scrub, open pine woods and forest edges up to about 2,500 m',
      bn: 'প্রায় ২,৫০০ মিটার উচ্চতা পর্যন্ত পাহাড়ি ঝোপ, পাইনের হালকা বন ও বনের কিনারা',
    },
    habitats: ['temperate-forest', 'mountain'],
    regions: ['east-asia', 'southeast-asia'],
    distribution: {
      en: 'Southern and central China, Taiwan, northern Myanmar, Laos, Thailand and Vietnam.',
      bn: 'দক্ষিণ ও মধ্য চীন, তাইওয়ান, উত্তর মিয়ানমার, লাওস, থাইল্যান্ড ও ভিয়েতনাম।',
    },
    climate: { en: 'Warm-temperate to subtropical monsoon climates', bn: 'উষ্ণ-নাতিশীতোষ্ণ থেকে উপক্রান্তীয় মৌসুমি জলবায়ু' },
    diet: {
      en: 'Photosynthesis; needs acidic soil and relies on root fungi to absorb nutrients',
      bn: 'সালোকসংশ্লেষণের মাধ্যমে খাদ্য তৈরি করে; অম্লীয় মাটি প্রয়োজন এবং পুষ্টি শোষণে শিকড়ের ছত্রাকের ওপর নির্ভর করে',
    },
    ecologicalRole: {
      en: 'Spring flowers feed bumblebees, butterflies and sunbirds; it stabilises slopes after disturbance.',
      bn: 'বসন্তের ফুল ভ্রমর, প্রজাপতি ও মৌটুসিকে খাদ্য জোগায়; ক্ষতিগ্রস্ত পাহাড়ি ঢালের মাটি ধরে রাখে।',
    },
    behavior: {
      en: 'Blooms profusely in spring (April–May); semi-evergreen in colder areas.',
      bn: 'বসন্তে (এপ্রিল–মে) প্রচুর ফুল ফোটে; ঠান্ডা এলাকায় আংশিক পাতা ঝরায়।',
    },
    range: {
      native: [
        [28.2, 112.9],
        [26.1, 119.3],
        [25.0, 102.7],
        [24.1, 120.7],
        [22.3, 103.8],
        [25.4, 97.4],
      ],
    },
    conservation: {
      status: 'LC',
      trend: 'stable',
      threats: {
        en: ['Digging of wild plants for horticulture', 'Hillside clearance and fires'],
        bn: ['বাগানের জন্য বুনো গাছ তুলে নেওয়া', 'পাহাড়ি ঢাল পরিষ্কার ও আগুন'],
      },
      initiatives: {
        en: ['Occurs in many protected areas across China', 'Ex-situ conservation in rhododendron collections worldwide'],
        bn: ['চীনের বহু সংরক্ষিত এলাকায় প্রাকৃতিকভাবে জন্মায়', 'বিশ্বের নানা রডোডেনড্রন সংগ্রহে প্রাকৃতিক আবাসের বাইরে সংরক্ষণ'],
      },
    },
    facts: {
      en: [
        'In China it is called yingshanhong, "red that reflects the mountain".',
        'Like many rhododendrons it contains grayanotoxins, so its leaves and nectar are poisonous if eaten.',
      ],
      bn: [
        'চীনে একে ইংশানহোং বলা হয়, যার অর্থ "পাহাড়ে প্রতিফলিত লাল"।',
        'অনেক রডোডেনড্রনের মতো এতেও গ্রায়ানোটক্সিন থাকে, তাই এর পাতা ও মধু খেলে বিষক্রিয়া হতে পারে।',
      ],
    },
    related: ['camellia', 'himalayan-blue-poppy', 'hydrangea'],
  },
];
