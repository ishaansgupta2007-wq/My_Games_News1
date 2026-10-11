import json
import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    content = f.read()

article_seo_data = {
    "intergalactic-heretic-prophet-preview-2027": {
        "metaTitle": "Intergalactic The Heretic Prophet 2027 Preview | PlaySocial",
        "metaDescription": "Explore exclusive Intergalactic The Heretic Prophet gameplay details, 2027 sci-fi combat mechanics, and Sycorax-IV cosmic lore in our deep-dive preview.",
        "mainKeyword": "Intergalactic The Heretic Prophet",
        "relatedKeywords": ["Intergalactic release date", "Intergalactic gameplay"],
        "imageAlt": "Jordan Voss in pressurized celestial armor facing an eclipsed planetary horizon in Intergalactic: The Heretic Prophet",
        "aeoQuestions": [
            {
                "question": "What is the release window and setting for Intergalactic: The Heretic Prophet?",
                "answer": "Intergalactic: The Heretic Prophet is targeted for a 2027 launch window. The game is set in the outer reaches of the Sycorax-IV cluster, a fractured planetary system characterized by orbital debris belts, shattered moons, and toxic atmospheric elevators."
            },
            {
                "question": "Who is the protagonist of Intergalactic: The Heretic Prophet and what are their abilities?",
                "answer": "The protagonist is Jordan Voss, a disgraced astral scout branded a heretic by Core Arbiters. Voss wields a prototype hard-light thermal broadsword with three distinct plasma frequencies and utilizes omnidirectional thruster propulsion for zero-gravity mobility."
            }
        ]
    },
    "resident-evil-veronica-remake-reveal": {
        "metaTitle": "Resident Evil Code Veronica Remake Reveal | PlaySocial",
        "metaDescription": "Read breaking Resident Evil Code Veronica remake news detailing Claire Redfield's return, RE Engine visual fidelity, and atmospheric survival horror design.",
        "mainKeyword": "Resident Evil Code Veronica remake",
        "relatedKeywords": ["Resident Evil remake news", "Code Veronica RE Engine"],
        "imageAlt": "Claire Redfield holding a combat flashlight inside the gothic corridors of Rockfort Island prison in Resident Evil: Code Veronica",
        "aeoQuestions": [
            {
                "question": "What engine powers the Resident Evil: Code Veronica remake?",
                "answer": "The remake is developed on Capcom's proprietary RE Engine, incorporating photogrammetric rock textures, real-time volumetric mist, and a modernized third-person over-the-shoulder perspective."
            },
            {
                "question": "Where does the Resident Evil: Code Veronica remake take place?",
                "answer": "The story follows Claire Redfield through Rockfort Island, an isolated Umbrella Corporation military prison and research complex in the Southern Ocean, before expanding to an Antarctic research outpost."
            }
        ]
    },
    "wolverine-spider-man-connected-universe": {
        "metaTitle": "Marvel Wolverine & Spider-Man Universe News | PlaySocial",
        "metaDescription": "Discover how Insomniac connects Marvel's Wolverine and Spider-Man in a shared PlayStation universe with tactical combat systems and narrative crossover.",
        "mainKeyword": "Marvel Wolverine game",
        "relatedKeywords": ["Wolverine PS5 news", "Insomniac Spider-Man Wolverine"],
        "imageAlt": "Insomniac Marvel universe key art featuring Wolverine with extended claws alongside Spider-Man",
        "aeoQuestions": [
            {
                "question": "Are Insomniac's Wolverine and Spider-Man games set in the same universe?",
                "answer": "Yes, Insomniac Games has designed Marvel's Wolverine and Marvel's Spider-Man within a unified continuity, sharing geographical world-building across New York City and Madripoor alongside interconnected narrative lore."
            },
            {
                "question": "How does combat in Marvel's Wolverine differ from Spider-Man?",
                "answer": "While Spider-Man emphasizes aerial acrobatics and non-lethal crowd control, Wolverine features visceral, ground-focused melee encounters utilizing adamantium claws, regenerative health management, and directional dismemberment physics."
            }
        ]
    },
    "tomb-raider-legacy-of-atlantis-reveal": {
        "metaTitle": "Tomb Raider Legacy of Atlantis UE5 Reveal | PlaySocial",
        "metaDescription": "Crystal Dynamics reveals Tomb Raider Legacy of Atlantis in Unreal Engine 5. Read our full analysis of Lara Croft's globe-trotting expedition and survival tools.",
        "mainKeyword": "Tomb Raider Legacy of Atlantis",
        "relatedKeywords": ["new Tomb Raider game", "Tomb Raider Unreal Engine 5"],
        "imageAlt": "Lara Croft exploring ancient Atlantean submerged ruins rendered in Unreal Engine 5",
        "aeoQuestions": [
            {
                "question": "What game engine is Tomb Raider: Legacy of Atlantis built with?",
                "answer": "Tomb Raider: Legacy of Atlantis is developed using Unreal Engine 5, utilizing Nanite virtualized micro-polygon geometry and Lumen dynamic global illumination for submerged subterranean ruins."
            },
            {
                "question": "What is the story premise of Tomb Raider: Legacy of Atlantis?",
                "answer": "The narrative follows veteran archaeologist Lara Croft as she uncovers architectural remnants of an Atlantean precursor civilization across the Mediterranean basin while facing rival paramilitary expeditionary forces."
            }
        ]
    },
    "ghost-of-yotei-preview": {
        "metaTitle": "Ghost of Yotei Gameplay & Hokkaido Preview | PlaySocial",
        "metaDescription": "Experience Sucker Punch's Ghost of Yotei with our deep dive into Atsu's journey through 1603 feudal Hokkaido, dual-blade combat, and cinematic open-world design.",
        "mainKeyword": "Ghost of Yotei",
        "relatedKeywords": ["Ghost of Yotei release", "Ghost of Yotei gameplay"],
        "imageAlt": "Atsu seated on her horse overlooking the volcanic valley of Mount Yōtei in 1603 Hokkaido",
        "aeoQuestions": [
            {
                "question": "When and where is Ghost of Yōtei set?",
                "answer": "Ghost of Yōtei is set in 1603 around Mount Yōtei in Hokkaido (then known as Ezo), moving more than three centuries beyond the Kamakura-era setting of Ghost of Tsushima."
            },
            {
                "question": "Who is the main protagonist of Ghost of Yōtei?",
                "answer": "The new protagonist is Atsu, an outsider warrior navigating uncharted frontier wilderness outside official samurai clan governance, wielding new weapons including firearms and dual blades."
            }
        ]
    },
    "elden-ring-shadow-erdtree-controller-guide": {
        "metaTitle": "Elden Ring PC Controls & Camera Optimization | PlaySocial",
        "metaDescription": "Master Elden Ring PC controls with our optimization guide for Shadow of the Erdtree, covering camera auto-recovery fixes and target lock-on calibration.",
        "mainKeyword": "Elden Ring PC controls",
        "relatedKeywords": ["Shadow of the Erdtree PC settings", "Elden Ring controller guide"],
        "imageAlt": "Tarnished warrior in the Realm of Shadow facing the Divine Beast Dancing Lion in Elden Ring",
        "aeoQuestions": [
            {
                "question": "Why should PC players adjust camera auto-recovery in Shadow of the Erdtree?",
                "answer": "Disabling Camera Auto-Recovery in the Game Options menu prevents the camera from abruptly overriding manual mouse or analog stick adjustments during vertical encounters with towering bosses like the Divine Beast Dancing Lion."
            },
            {
                "question": "How does turning off auto-targeting help in Elden Ring boss fights?",
                "answer": "Turning off auto-targeting prevents weapon skills from inadvertently snapping to peripheral minor enemies during chaotic battles, keeping attacks locked onto critical stagger points on furnace golems and bosses."
            }
        ]
    },
    "gta-6-vice-city-simulation-engine": {
        "metaTitle": "GTA 6 News: Rockstar Next-Gen Weather Tech | PlaySocial",
        "metaDescription": "Get breaking GTA 6 news and release updates on Rockstar's next-gen Leonida simulation, dynamic weather physics, and revolutionary NPC behavior.",
        "mainKeyword": "GTA 6 news",
        "relatedKeywords": ["GTA 6 updates", "GTA 6 release news"],
        "imageAlt": "Lucia and Jason navigating a speedboat through Vice City coastal waterways at sunset in Grand Theft Auto VI",
        "aeoQuestions": [
            {
                "question": "What technical innovations are introduced in GTA 6's simulation engine?",
                "answer": "GTA 6 utilizes Rockstar's RAGE Engine 9 featuring persistent NPC behavioral memory maps, volumetric water fluid dynamics, realistic hurricane tidal surges, and adaptive law enforcement responses across Leonida."
            },
            {
                "question": "How do NPC routines in GTA 6 differ from previous Grand Theft Auto titles?",
                "answer": "Unlike previous games where pedestrians followed ephemeral despawning loops, GTA 6 NPCs feature localized emotional profiles that remember past player altercations and react organically to changing weather and environmental hazards."
            }
        ]
    },
    "ps5-dualsense-ghost-of-yotei-review": {
        "metaTitle": "Ghost of Yotei PS5 DualSense Controller Review | PlaySocial",
        "metaDescription": "Read our detailed review of the limited edition Ghost of Yotei PS5 DualSense controller, featuring sumi-e calligraphy, textured grips, and refined triggers.",
        "mainKeyword": "Ghost of Yotei DualSense review",
        "relatedKeywords": ["PS5 limited edition controller", "DualSense wireless controller review"],
        "imageAlt": "PlayStation 5 limited edition Ghost of Yōtei DualSense controller with gold sumi-e calligraphy brushwork",
        "aeoQuestions": [
            {
                "question": "What unique design features does the Ghost of Yōtei PS5 DualSense controller have?",
                "answer": "The limited-edition controller features custom gold sumi-e calligraphy brushwork, textured mountain-grip ergonomics, reinforced mechanical micro-switches, and a bespoke two-tone charcoal and bronze chassis."
            },
            {
                "question": "Does the Ghost of Yōtei DualSense controller offer performance upgrades?",
                "answer": "Yes, the controller includes calibrated haptic actuators with lower latency feedback and fine-tuned adaptive trigger resistance curves tailored for archery tension and sword parries."
            }
        ]
    },
    "god-of-war-ragnarok-tactical-combat-retrospective": {
        "metaTitle": "God of War Ragnarok Boss Combat Strategy Guide | PlaySocial",
        "metaDescription": "Master the Nine Realms with our God of War Ragnarok combat guide. Detailed tactical breakdowns for Valkyrie encounters, weapon switching, and parry timings.",
        "mainKeyword": "God of War Ragnarok combat guide",
        "relatedKeywords": ["God of War Ragnarok boss strategy", "Ragnarok combat tips"],
        "imageAlt": "Kratos wielding the Leviathan Axe and Dauntless Shield during a tactical boss battle in God of War Ragnarok",
        "aeoQuestions": [
            {
                "question": "How do status element synergies work in God of War Ragnarok combat?",
                "answer": "Applying frost with the Leviathan Axe immobilizes enemies and primes them for bonus concussive damage, while follow-up strikes with the Blades of Chaos trigger thermal explosion status shocks that shatter enemy armor."
            },
            {
                "question": "What is the optimal strategy for parrying boss strikes in Ragnarok?",
                "answer": "Equipping the Dauntless Shield allows players to execute high-risk, high-reward parries on yellow-ringed enemy strikes, immediately unleashing a shield smash that interrupts multi-hit boss combos and inflicts heavy stagger."
            }
        ]
    },
    "ultimate-gaming-battlestation-guide": {
        "metaTitle": "Ultimate Clean Gaming Battlestation Setup Guide | PlaySocial",
        "metaDescription": "Build the ultimate clean gaming setup with our battlestation guide covering monitor ergonomics, magnetic cable routing, and desktop acoustic dampening.",
        "mainKeyword": "gaming setup guide",
        "relatedKeywords": ["clean battlestation build", "PC desk setup tips"],
        "imageAlt": "Ergonomic minimalist dual-monitor gaming battlestation with walnut desk and cable management raceways",
        "aeoQuestions": [
            {
                "question": "What are the most effective cable management techniques for a clean battlestation?",
                "answer": "Under-desk magnetic cable raceways, split-loom tubing, and dedicated raceway channels conceal power cables while keeping individual peripheral lines isolated to prevent electrical electromagnetic interference."
            },
            {
                "question": "What monitor positioning provides optimal gaming ergonomics?",
                "answer": "Mounting primary displays on articulating gas-spring arms ensures the top third of the screen aligns directly with eye level at a viewing distance of approximately 24 to 30 inches, minimizing cervical spine fatigue."
            }
        ]
    },
    "xbox-next-gen-hybrid-strategy": {
        "metaTitle": "Next-Gen Xbox Console & Handheld Strategy | PlaySocial",
        "metaDescription": "An analysis of Microsoft's next-gen Xbox console and hybrid handheld strategy, exploring universal Windows compatibility and dedicated NPU hardware.",
        "mainKeyword": "next-gen Xbox console",
        "relatedKeywords": ["Xbox handheld news", "future Xbox hardware"],
        "imageAlt": "Modern hybrid gaming console hardware with custom ergonomic grips and high-refresh-rate display",
        "aeoQuestions": [
            {
                "question": "What is Microsoft's strategy for next-generation Xbox hardware?",
                "answer": "Microsoft is pursuing a multi-device hardware ecosystem combining a high-performance home console with a dedicated native handheld running a customized Windows Core OS layer for local game execution."
            },
            {
                "question": "Will the next-gen Xbox handheld support offline PC games?",
                "answer": "Yes, technical briefings indicate the device features native AMD APU silicon with dedicated NPU coprocessors capable of running PC Game Pass and Xbox games locally without requiring cloud streaming."
            }
        ]
    },
    "rtx-5090-benchmarks-breakdown": {
        "metaTitle": "RTX 5090 Benchmarks & Blackwell GPU Analysis | PlaySocial",
        "metaDescription": "Comprehensive RTX 5090 benchmarks exploring NVIDIA Blackwell architecture, 32GB GDDR7 memory speeds, and groundbreaking 4K path tracing frame rate performance.",
        "mainKeyword": "RTX 5090 benchmarks",
        "relatedKeywords": ["NVIDIA RTX 5090 performance", "Blackwell GPU review"],
        "imageAlt": "NVIDIA GeForce RTX 50-series graphics card on a dedicated hardware testing bench",
        "aeoQuestions": [
            {
                "question": "What performance uplift does the RTX 5090 achieve over the RTX 4090?",
                "answer": "In full path-traced gaming benchmarks at native 4K resolution, the RTX 5090 delivers up to a 68% performance uplift over the RTX 4090, driven by Blackwell architecture and 28 Gbps GDDR7 memory modules."
            },
            {
                "question": "How much power and memory does the NVIDIA RTX 5090 require?",
                "answer": "The flagship GPU is configured with 32GB of ultra-fast GDDR7 VRAM across a 512-bit bus and operates within a calibrated 600W thermal power envelope supported by redesigned 16-pin 12V-2x6 power connections."
            }
        ]
    },
    "fortnite-chapter-6-season-2-overhaul": {
        "metaTitle": "Fortnite Updates: Chapter 6 Meta & Unreal 5 | PlaySocial",
        "metaDescription": "Explore the latest Fortnite updates featuring Chapter 6 weapon balancing, Unreal Engine 5.5 Chaos destruction physics, and competitive siphon rules.",
        "mainKeyword": "Fortnite updates",
        "relatedKeywords": ["Fortnite news", "Fortnite new season"],
        "imageAlt": "Competitive battle royale tournament stage with high-refresh-rate esports gaming stations",
        "aeoQuestions": [
            {
                "question": "What weapon balance changes are included in the latest Fortnite updates?",
                "answer": "The update standardizes sniper rifle bullet drop trajectories across all rarities, reduces close-range shotgun pull-out delays by 15%, and establishes capped assault rifle recoil recovery ceilings for competitive balance."
            },
            {
                "question": "How does Unreal Engine 5.5 enhance Fortnite's competitive performance?",
                "answer": "Fortnite Chapter 6 integrates Chaos destruction physics with pre-calculated stress fracture rendering and revamps Performance Mode with asynchronous shader streaming to eradicate frame stutters in late-game circles."
            }
        ]
    }
}

for art_id, data in article_seo_data.items():
    # Find the article block
    pattern = rf'(id:\s*[\'\"]{re.escape(art_id)}[\'\"],[\s\S]*?excerpt:\s*[\'\"].*?[\'\"],)'
    m = re.search(pattern, content)
    if not m:
        print(f"Failed to find match for {art_id}")
        continue
    
    # Generate the replacement snippet
    questions_ts = "[\n"
    for q in data["aeoQuestions"]:
        q_text = q["question"].replace('"', '\\"')
        a_text = q["answer"].replace('"', '\\"')
        questions_ts += f'      {{\n        question: "{q_text}",\n        answer: "{a_text}"\n      }},\n'
    questions_ts += "    ]"

    rel_kws_ts = json.dumps(data["relatedKeywords"])

    injection = (
        f'{m.group(1)}\n'
        f'    metaTitle: "{data["metaTitle"]}",\n'
        f'    metaDescription: "{data["metaDescription"]}",\n'
        f'    mainKeyword: "{data["mainKeyword"]}",\n'
        f'    relatedKeywords: {rel_kws_ts},\n'
        f'    imageAlt: "{data["imageAlt"]}",\n'
        f'    aeoQuestions: {questions_ts},'
    )
    content = content[:m.start()] + injection + content[m.end():]

# Now append Forza Horizon article before the closing ];
forza_article = """  {
    id: "forza-horizon-world-tour-next-gen",
    slug: "forza-horizon-news",
    title: "Forza Horizon News: Next-Gen World Tour, Dynamic Seasons, and Ray-Traced Audio Overhaul",
    subtitle: "Playground Games unveils global biome streaming, 8-point tire contact physics, and acoustic tunnel resonance.",
    excerpt: "Catch breaking Forza Horizon news with our exclusive deep dive into Playground Games’ next-gen World Tour, procedural weather cycles, and high-fidelity physics.",
    metaTitle: "Forza Horizon News: Next-Gen World Tour & Audio | PlaySocial",
    metaDescription: "Catch breaking Forza Horizon news, gameplay overhauls, and next-gen world tour updates featuring ray-traced acoustics and dynamic season cycles.",
    mainKeyword: "Forza Horizon news",
    relatedKeywords: ["Forza Horizon gameplay", "Forza Horizon updates"],
    canonicalUrl: "https://playsocial.media/forza-horizon-news",
    imageAlt: "High-performance sports car speeding along a coastal highway during dynamic sunset weather in Forza Horizon",
    aeoQuestions: [
      {
        question: "What new features are introduced in the latest Forza Horizon news?",
        answer: "The latest Forza Horizon updates introduce a global World Tour map spanning diverse microclimates, dynamic weekly seasonal transitions, and real-time ray-traced acoustic resonance across mountain tunnels and urban valleys."
      },
      {
        question: "How does next-gen physics improve Forza Horizon gameplay?",
        answer: "The updated physics engine features 8-point tire contact patch modeling, thermal degradation simulation across dirt and tarmac surfaces, and localized suspension damping for high-fidelity force feedback."
      }
    ],
    category: "Xbox",
    subCategory: "World Premiere Feature",
    coverImage: "/images/forza-horizon-world-tour.webp",
    fallbackTheme: "standard",
    author: AUTHORS.marcus_foster,
    publishedAt: "Oct 10, 2026",
    updatedAt: "1 hour ago",
    readTime: "7 min read",
    isBreaking: true,
    isFeatured: true,
    isTrending: true,
    trendingRank: 2,
    gameSlug: "forza-horizon",
    aliases: ["forza-horizon-news", "forza-horizon-6", "forza-horizon", "forza-news"],
    tags: ["Forza Horizon", "Forza Horizon news", "Xbox Series X", "Playground Games", "Racing"],
    content: {
      intro: "Playground Games has officially pulled back the curtain on the next evolution of open-world motorsport. Expanding beyond localized regional festivals, the new entry introduces a connected World Tour framework powered by updated ForzaTech pipelines, dynamic multi-biome weather fronts, and revolutionary ray-traced acoustic simulation.",
      sections: [
        {
          heading: "The Global World Tour: Seamless Biome Streaming Across Varied Terrains",
          id: "global-world-tour-biomes",
          paragraphs: [
            "Rather than confining drivers to a single geographical country, the World Tour architecture utilizes high-speed NVMe asset streaming to deliver interconnected macro-regions. Players can transition from alpine mountain passes through subtropical coastal rainforests and arid desert flats without encountering loading transitions.",
            "Each biome features unique atmospheric weather systems. A sudden tropical squall dynamically washes dust and oil residue off asphalt surfaces, fundamentally altering cornering friction thresholds in real time."
          ],
          quote: {
            text: "Our goal was to make the world feel alive in every dimension. When you downshift inside an alpine stone tunnel, the exhaust reverberation should reflect off the precise mineral density of the rock face.",
            author: "Marcus Vance",
            role: "Lead Vehicle Dynamics Designer"
          }
        },
        {
          heading: "8-Point Contact Physics and Dynamic Thermal Degradation",
          id: "contact-physics-tire-model",
          paragraphs: [
            "Vehicle handling in Forza Horizon departs from arcade compromises by introducing an advanced 8-point tire contact model. Instead of a single generalized grip vector per wheel, the simulation measures independent pressure distribution, sidewall flex, and localized surface temperature across each tire section.",
            "Aggressive drifting on abrasive aggregate roads accelerates tread wear, reducing peak grip and demanding tactical tire management during endurance rally stages. Read our [NVIDIA GeForce RTX 5090 Blackwell benchmarks](/nvidia-geforce-rtx-5090-blackwell-benchmarks) to see target PC hardware requirements, or explore Microsoft's [next-gen Xbox console and handheld strategy](/xbox-next-gen-hybrid-handheld-strategy)."
          ]
        },
        {
          heading: "Ray-Traced Acoustic Resonance and Exhaust Dynamics",
          id: "ray-traced-acoustic-resonance",
          paragraphs: [
            "Sound design receives an equally monumental overhaul. Utilizing hardware-accelerated audio ray tracing, engine intake notes and turbocharger blow-off valves propagate physically through 3D geometry. Echoes reverberate naturally inside multi-story parking garages, while open plains disperse acoustic pressure realistically.",
            "Every licensed manufacturer vehicle has been recaptured using high-sensitivity binaural field microphones to deliver unprecedented sonic authenticity. Compare with our in-depth coverage of [GTA 6 next-gen simulation engine](/gta-6-news) and [Fortnite updates Chapter 6 competitive overhaul](/fortnite-updates)."
          ]
        }
      ],
      conclusion: "With revolutionary physics depth, jaw-dropping environmental scale, and unmatched sensory immersion, Forza Horizon cements its position at the pinnacle of open-world racing."
    }
  },
"""

# Replace the closing ]; with the new article + ];
content = re.sub(r'(\n\];\s*)$', '\n' + forza_article + '];\n', content)

with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully updated src/data/articles.ts with all SEO data and Forza Horizon article!")
