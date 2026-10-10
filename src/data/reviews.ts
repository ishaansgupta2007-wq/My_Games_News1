import { Review } from '../types';
import { AUTHORS } from './authors';

export const REVIEWS: Review[] = [
  {
    id: 'rev-ghost-of-yotei',
    slug: 'ghost-of-yotei-review',
    gameTitle: 'Ghost of Yōtei',
    gameSlug: 'ghost-of-yotei',
    developer: 'Sucker Punch Productions',
    publisher: 'Sony Interactive Entertainment',
    platform: 'PlayStation 5',
    genre: 'Open-World Action Adventure',
    releaseDate: 'Late 2026',
    score: 9.6,
    verdict: 'A cinematic tour-de-force that builds upon Tsushima’s foundation with astonishing environmental storytelling, ferocious twin-katana combat, and emotional nuance.',
    summary: 'Atsu’s journey across 1603 Hokkaido replaces the rigid chivalry of samurai law with the raw survival of the northern frontier. Sucker Punch has delivered one of PlayStation’s most visually breathtaking and mechanically satisfying achievements.',
    coverImage: '/images/atsu-sitting-on-her-horse-on-a-cliff-overlooking-a-valley-in-ghost-of-yotei.jpg',
    author: AUTHORS.alex_vance,
    publishedAt: 'Oct 06, 2026',
    readTime: '9 min read',
    pros: [
      'Visually unmatched open-world vistas and atmospheric weather around Mount Yōtei',
      'Dual katana, kusarigama, and firearm combat flows with fluid rhythmic brutality',
      'Atsu is a magnetic, multifaceted protagonist with deep cultural ties',
      'Innovative musical shamisen exploration mechanics that respect player intelligence'
    ],
    cons: [
      'Occasional minor camera occlusion in dense bamboo thickets',
      'Hunting craft trees can feel familiar in the early opening hours'
    ],
    specsTestedOn: 'PlayStation 5 Pro (Quality Mode 4K 60fps with PSSR)'
  },
  {
    id: 'rev-elden-ring-shadow-erdtree',
    slug: 'elden-ring-shadow-of-the-erdtree-review',
    gameTitle: 'Elden Ring: Shadow of the Erdtree',
    gameSlug: 'elden-ring',
    developer: 'FromSoftware',
    publisher: 'Bandai Namco Entertainment',
    platform: 'PC',
    genre: 'Dark Fantasy Action RPG',
    releaseDate: 'June 21, 2024',
    score: 9.8,
    verdict: 'The pinnacle of FromSoftware’s level design, offering a dizzying vertical labyrinth that redefines the scope and ambition of expansion content.',
    summary: 'Shadow of the Erdtree is essentially Elden Ring 1.5. The Realm of Shadow is packed with terrifying new bosses, brilliant Scadutree fragment progression, and weapon classes that will keep build crafters engaged for years.',
    coverImage: '/images/elden-ring-dev-fromsoftware-suggests-turning-off-mouse-contr_gkgr.png',
    author: AUTHORS.marcus_reyes,
    publishedAt: 'Oct 04, 2026',
    readTime: '11 min read',
    pros: [
      'Mind-bending vertical map architecture connecting Belurat, Scadu Altus, and the Abyssal Woods',
      'Eight fresh weapon categories including Hand-to-Hand Arts and Milady Light Greatswords',
      'Some of the most memorable and demanding boss fights in gaming history',
      'Haunting orchestral score and solemn lore revelations'
    ],
    cons: [
      'Spiky late-game boss aggression will punish players ignoring blessing fragments',
      'Certain cavern pathways are obscure without community guides'
    ],
    specsTestedOn: 'PC (Ryzen 7 7800X3D, RTX 4080 Super, 3840x2160 Maximum)'
  },
  {
    id: 'rev-god-of-war-ragnarok',
    slug: 'god-of-war-ragnarok-review',
    gameTitle: 'God of War Ragnarök: Valhalla & PC Edition',
    gameSlug: 'god-of-war-ragnarok',
    developer: 'Santa Monica Studio / Jetpack Interactive',
    publisher: 'PlayStation Publishing',
    platform: 'PC',
    genre: 'Action Adventure',
    releaseDate: 'September 19, 2024',
    score: 9.4,
    verdict: 'A monumental conclusion to the Norse saga that effortlessly marries earth-shattering combat spectacles with profoundly mature character development.',
    summary: 'The PC conversion brings ultrawide fidelity and unconstrained frame rates to Kratos’s most harrowing fatherhood challenge, cemented by the magnificent roguelite Valhalla epilogue.',
    coverImage: '/images/CelJaded.com-God-of-War-The-Card-Game-1.jpg',
    author: AUTHORS.david_miller,
    publishedAt: 'Oct 02, 2026',
    readTime: '8 min read',
    pros: [
      'The Draupnir Spear completes a flawless three-weapon combat repertoire',
      'Emotional performances from Christopher Judge, Sunny Suljic, and Richard Schiff',
      'Valhalla expansion adds exceptional roguelite replay value free of charge',
      'Exemplary PC performance with comprehensive frame generation support'
    ],
    cons: [
      'Ironwood narrative pacing remains noticeably slow during Atreus sequences',
      'Companion puzzle hints are still slightly over-eager during exploration'
    ],
    specsTestedOn: 'PC (Intel Core i9-14900K, RTX 4090, 4K DLSS Quality)'
  },
  {
    id: 'rev-the-last-of-us-part-2-remastered',
    slug: 'the-last-of-us-part-2-remastered-review',
    gameTitle: 'The Last of Us Part II Remastered',
    gameSlug: 'the-last-of-us-part-2',
    developer: 'Naughty Dog',
    publisher: 'Sony Interactive Entertainment',
    platform: 'PlayStation 5',
    genre: 'Action Adventure / Survival Horror',
    releaseDate: 'January 19, 2024',
    score: 8.9,
    verdict: 'An uncompromising, emotionally exhausting masterpiece elevated by the relentless intensity of the No Return roguelike survival mode.',
    summary: 'Few games capture the horrific physical consequence of violence like The Last of Us Part II. The PS5 remaster provides pristine 60 FPS performance, lost developer levels, and a brutally addictive survival mode.',
    coverImage: '/images/nzzxnnvgyw951.jpg',
    author: AUTHORS.alex_vance,
    publishedAt: 'Sep 29, 2026',
    readTime: '8 min read',
    pros: [
      'The definitive third-person stealth and evasion combat engine',
      'Astonishing facial animation and hyper-realistic spatial audio design',
      'No Return survival mode is an instant addiction for hardcore tactical players',
      'Lost Levels commentary tracks provide priceless game design curriculum'
    ],
    cons: [
      'Bleak, emotionally grueling narrative pacing tests player endurance',
      'Puzzles are simplistic physics obstacles compared to the stellar combat'
    ],
    specsTestedOn: 'PlayStation 5 (Performance Mode 1440p 60fps unlocked VRR)'
  },
  {
    id: 'rev-black-myth-wukong',
    slug: 'black-myth-wukong-review',
    gameTitle: 'Black Myth: Wukong',
    gameSlug: 'black-myth-wukong',
    developer: 'Game Science',
    publisher: 'Game Science',
    platform: 'PC',
    genre: 'Action RPG',
    releaseDate: 'August 20, 2024',
    score: 8.5,
    verdict: 'A visual spectacle overflowing with sensational mythological boss battles, let down slightly by invisible walls and uneven level layouts.',
    summary: 'Game Science’s debut AAA project is a kinetic love letter to Journey to the West. Staff stances and spell transformations feel exhilarating against a pantheon of over 80 unique boss adversaries.',
    coverImage: '/images/black-myth-wukong.jpg',
    author: AUTHORS.marcus_reyes,
    publishedAt: 'Sep 25, 2026',
    readTime: '7 min read',
    pros: [
      'Unprecedented variety of imaginative Chinese mythological boss designs',
      'Staff stances (Smash, Pillar, Thrust) create engaging tactical timing',
      'Breathtaking environmental fidelity powered by Unreal Engine 5 Nanite'
    ],
    cons: [
      'Prevalent invisible walls disrupt natural exploratory curiosity',
      'Occasional frame pacing stutter in dense forest chapters on mid-range hardware'
    ],
    specsTestedOn: 'PC (RTX 4070 Ti, Ryzen 7 7700X, 1440p High DLSS)'
  },
  {
    id: 'rev-star-wars-outlaws',
    slug: 'star-wars-outlaws-review',
    gameTitle: 'Star Wars Outlaws',
    gameSlug: 'star-wars-outlaws',
    developer: 'Massive Entertainment',
    publisher: 'Ubisoft',
    platform: 'PlayStation 5',
    genre: 'Open-World Action',
    releaseDate: 'August 30, 2024',
    score: 7.6,
    verdict: 'A richly detailed, authentic Star Wars underworld fantasy hampered by clunky instant-fail stealth sequences and pedestrian gunplay.',
    summary: 'Kay Vess and Nix shine when cruising the savanna of Toshara on a repulsor speeder or playing sabacc in smoky cantinas, but rigid stealth sections frequently interrupt the scoundrel fantasy.',
    coverImage: '/images/star-wars-outlaws.jpg',
    author: AUTHORS.david_miller,
    publishedAt: 'Sep 20, 2026',
    readTime: '6 min read',
    pros: [
      'Incredible Star Wars cantina atmospheres and world art direction',
      'Nix is the best interactive animal companion in modern gaming',
      'Deep and immersive in-universe Sabacc card minigame'
    ],
    cons: [
      'Inconsistent instant-fail stealth missions create severe friction',
      'Blaster shooting lacks punch and enemy AI is easily exploited'
    ],
    specsTestedOn: 'PlayStation 5 (40 FPS Quality Mode on 120Hz display)'
  }
];
