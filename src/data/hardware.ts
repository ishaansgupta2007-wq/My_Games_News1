import { HardwareProduct } from '../types';
import { AUTHORS } from './authors';

export const HARDWARE_PRODUCTS: HardwareProduct[] = [
  {
    id: 'hw-rtx-5090',
    slug: 'nvidia-geforce-rtx-5090',
    name: 'NVIDIA GeForce RTX 5090 Founders Edition',
    category: 'GPU',
    brand: 'NVIDIA',
    price: '$1,999',
    rating: 9.7,
    shortDescription: 'The undisputed king of enthusiast 4K path tracing, packed with 32GB GDDR7 memory and Blackwell architecture.',
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=1200&q=80',
    specs: {
      'Architecture': 'Blackwell (TSMC 4NP)',
      'VRAM': '32GB GDDR7 (512-bit)',
      'Memory Bandwidth': '1,792 GB/s',
      'Boost Clock': '2,550 MHz',
      'TGP': '575 Watts'
    },
    pros: [
      'Unstoppable 4K path-traced frame rates in Alan Wake 2 and Cyberpunk',
      'Generous 32GB VRAM handles extreme texture mods and local AI models',
      'DLSS 3.5 Ray Reconstruction looks visibly sharper than native TAA'
    ],
    cons: [
      'Extremely high price point and demanding power supply requirements',
      'Massive triple-slot chassis demands spacious ATX cases'
    ],
    verdict: 'If budget is no barrier and you demand uncompromising 4K 144Hz fidelity with full path tracing, nothing else comes close.',
    author: AUTHORS.sarah_chen,
    publishedAt: 'Oct 04, 2026'
  },
  {
    id: 'hw-ryzen-7800x3d',
    slug: 'amd-ryzen-7-7800x3d',
    name: 'AMD Ryzen 7 7800X3D Processor',
    category: 'CPU',
    brand: 'AMD',
    price: '$389',
    rating: 9.8,
    shortDescription: 'The crown jewel of pure gaming performance thanks to AMD’s revolutionary 3D V-Cache architecture.',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1200&q=80',
    specs: {
      'Cores / Threads': '8 Cores / 16 Threads',
      'Base / Boost Clock': '4.2 GHz / 5.0 GHz',
      'L3 Cache': '96MB 3D V-Cache',
      'Socket': 'AM5',
      'TDP': '120 Watts'
    },
    pros: [
      'Unmatched 1% low frame time stability in CPU-heavy open worlds',
      'Extremely energy efficient compared to Intel flagship processors',
      'Supported on modern AM5 platform with long-term upgradeability'
    ],
    cons: [
      'Productivity and video rendering scores trail behind Core i9 / Ryzen 9',
      'Requires modern DDR5 memory kits'
    ],
    verdict: 'Still the absolute smartest processor purchase any dedicated PC gamer can make.',
    author: AUTHORS.sarah_chen,
    publishedAt: 'Sep 29, 2026'
  },
  {
    id: 'hw-alienware-aw3225qf',
    slug: 'alienware-aw3225qf-4k-qd-oled-monitor',
    name: 'Alienware AW3225QF 32-inch 4K 240Hz QD-OLED',
    category: 'Gaming Monitor',
    brand: 'Alienware / Dell',
    price: '$1,199',
    rating: 9.6,
    shortDescription: 'The holy grail of gaming displays: true 4K resolution, 240Hz refresh rate, and infinite OLED contrast.',
    image: '/images/maxresdefault.jpg',
    specs: {
      'Panel Type': 'Gen 3 Quantum Dot OLED',
      'Resolution': '3840 x 2160 (4K UHD)',
      'Refresh Rate': '240Hz Native',
      'Response Time': '0.03ms GtG',
      'Curvature': '1700R Subtle Curve'
    },
    pros: [
      'Jaw-dropping contrast and vibrant color gamut in HDR mode',
      '0.03ms pixel response eliminates motion blur completely',
      'Full Dolby Vision and eARC audio passthrough support'
    ],
    cons: [
      'Subtle 1700R curve may not appeal to digital artists',
      'Text clarity requires Cleartype tuning for productivity tasks'
    ],
    verdict: 'The pinnacle gaming monitor on the market today for high-end PCs and current-gen consoles.',
    author: AUTHORS.sarah_chen,
    publishedAt: 'Sep 27, 2026'
  },
  {
    id: 'hw-ps5-dualsense-yotei',
    slug: 'playstation-dualsense-ghost-of-yotei-edition',
    name: 'DualSense Wireless Controller (Ghost of Yōtei Edition)',
    category: 'Controller',
    brand: 'Sony PlayStation',
    price: '$84',
    rating: 9.3,
    shortDescription: 'Limited edition collector controller sporting golden brushstroke artwork, premium grip textures, and haptic triggers.',
    image: '/images/ps5-dualsense-ghost-of-yotei.webp',
    specs: {
      'Connectivity': 'Bluetooth 5.1 & USB-C',
      'Feedback': 'Dynamic Dual Haptic Actuators',
      'Triggers': 'Adaptive Tension Triggers',
      'Battery Life': '12–14 Hours (Updated Cell)',
      'Weight': '280g'
    },
    pros: [
      'Gorgeous gold sumi-e aesthetic that looks extraordinary on display',
      'Industry-leading haptic feedback immersion in compatible games',
      'Upgraded analog stick seals with tighter drift thresholds'
    ],
    cons: [
      'Battery life remains average compared to Xbox Elite series',
      'Full haptic features on PC require wired USB-C connection'
    ],
    verdict: 'A collector’s dream that elevates every sword clash and horse gallop in modern action titles.',
    author: AUTHORS.david_miller,
    publishedAt: 'Oct 05, 2026'
  },
  {
    id: 'hw-asus-rog-zephyrus-g16',
    slug: 'asus-rog-zephyrus-g16-oled-laptop',
    name: 'ASUS ROG Zephyrus G16 (RTX 4090 / OLED)',
    category: 'Gaming Laptop',
    brand: 'ASUS ROG',
    price: '$2,899',
    rating: 9.2,
    shortDescription: 'A CNC aluminum unibody masterpiece packing desktop-grade muscle into a svelte 0.7-inch thin chassis.',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1200&q=80',
    specs: {
      'Display': '16" 2.5K 240Hz ROG Nebula OLED',
      'Processor': 'Intel Core Ultra 9 185H',
      'Graphics': 'NVIDIA GeForce RTX 4090 (115W TGP)',
      'Memory': '32GB LPDDR5X-7467',
      'Weight': '4.30 lbs (1.95 kg)'
    },
    pros: [
      'Stunning 240Hz OLED display with vibrant colors and deep blacks',
      'Sleek, understated MacBook-like aluminum chassis',
      'Superb quad-speaker acoustic array with punchy low-end'
    ],
    cons: [
      'Memory is soldered to motherboard (non-upgradable)',
      'Fans get audible under intensive 115W sustained gaming loads'
    ],
    verdict: 'The gold standard for portable gaming workstations that don’t embarrass you in a coffee shop.',
    author: AUTHORS.sarah_chen,
    publishedAt: 'Sep 22, 2026'
  },
  {
    id: 'hw-wooting-60he-plus',
    slug: 'wooting-60he-plus-analog-keyboard',
    name: 'Wooting 60HE+ Analog Hall Effect Keyboard',
    category: 'Keyboard',
    brand: 'Wooting',
    price: '$175',
    rating: 9.9,
    shortDescription: 'Magnetic Hall Effect switches offering adjustable 0.1mm actuation points and Rapid Trigger for competitive dominance.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80',
    specs: {
      'Switch Type': 'Lekker Hall Effect Linear Switches',
      'Actuation Range': '0.1mm to 4.0mm Configurable',
      'Polling Rate': '1,000Hz (sub-1ms scan matrix)',
      'Layout': '60% Compact ANSI / ISO',
      'Software': 'Web-based Wootility (Zero background bloat)'
    },
    pros: [
      'Rapid Trigger provides an undeniable tactical edge in tactical shooters',
      'Zero bloated background software suites required',
      'Remarkable typing feel with pre-lubed switches and foam dampening'
    ],
    cons: [
      'Compact 60% layout requires Fn key layers for dedicated arrows',
      'Case aesthetics are utilitarian unless modded into aftermarket aluminum'
    ],
    verdict: 'The most important mechanical keyboard innovation in twenty years. Every pro player’s secret weapon.',
    author: AUTHORS.david_miller,
    publishedAt: 'Sep 18, 2026'
  },
  {
    id: 'hw-logitech-g-pro-x-superlight-2',
    slug: 'logitech-g-pro-x-superlight-2-dex',
    name: 'Logitech G PRO X Superlight 2 DEX Wireless Mouse',
    category: 'Mouse',
    brand: 'Logitech G',
    price: '$159',
    rating: 9.5,
    shortDescription: 'The esports standard goes ergonomic: 60g featherweight, HERO 2 sensor, and 4,000Hz wireless polling rate.',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=80',
    specs: {
      'Weight': '60 grams',
      'Sensor': 'HERO 2 (44,000 DPI / 888 IPS)',
      'Polling Rate': 'Up to 4,000Hz Wireless',
      'Switches': 'LIGHTFORCE Hybrid Optical-Mechanical',
      'Battery Life': '95 Continuous Hours'
    },
    pros: [
      'Flawless ergonomic contour for palm and claw grip styles',
      'Optical switches prevent double-click degradation permanently',
      'Rock-solid wireless transmission reliability in congested arenas'
    ],
    cons: [
      'Still uses smooth shell coating that may require grip tape for sweaty palms',
      'High price point for a minimalist mouse'
    ],
    verdict: 'Pure competitive perfection in an ultra-refined ergonomic chassis.',
    author: AUTHORS.david_miller,
    publishedAt: 'Sep 15, 2026'
  },
  {
    id: 'hw-steelseries-arctis-nova-pro',
    slug: 'steelseries-arctis-nova-pro-wireless',
    name: 'SteelSeries Arctis Nova Pro Wireless Headset',
    category: 'Headset',
    brand: 'SteelSeries',
    price: '$349',
    rating: 9.4,
    shortDescription: 'Audiophile-grade hi-res drivers, active noise cancellation, and hot-swappable dual battery infinity power system.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    specs: {
      'Acoustic Drivers': '40mm Premium High-Res Neodymium',
      'Frequency Response': '10Hz – 40,000Hz (Hi-Res Audio)',
      'Noise Cancellation': '4-mic Hybrid Active Noise Cancellation',
      'Base Station': 'Multi-System Connect with OLED Display',
      'Battery': 'Dual Swappable Battery Packs (44 hours combined)'
    },
    pros: [
      'Dual hot-swappable batteries mean you never need to plug in a wire',
      'Simultaneous 2.4GHz PC/Console gaming audio and Bluetooth phone calls',
      'Sonar parametric EQ software provides surgical footstep separation'
    ],
    cons: [
      'Earcups can feel warm during 4+ hour marathon sessions',
      'ANC mic nub inside earcups can brush against larger ears'
    ],
    verdict: 'The ultimate all-in-one wireless audio hub for multi-platform gamers.',
    author: AUTHORS.sarah_chen,
    publishedAt: 'Sep 10, 2026'
  }
];
