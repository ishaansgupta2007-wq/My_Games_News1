import { UpcomingGame } from '../types';

export const UPCOMING_GAMES: UpcomingGame[] = [
  {
    id: 'up-intergalactic',
    slug: 'intergalactic-heretic-prophet',
    title: 'Intergalactic: The Heretic Prophet',
    developer: 'Next-Gen Game Studios',
    publisher: 'Sony Interactive Entertainment',
    releaseDate: '2027',
    countdownDays: 450,
    platforms: ['PlayStation 5'],
    genre: 'Cinematic Sci-Fi Action RPG',
    status: 'Confirmed',
    coverImage: '/images/intergalactic.jpg',
    description: 'An uncompromising next-gen hard sci-fi odyssey. Explore shattered ringed planets and wield thermal hard-light blades in zero gravity.',
    hypeScore: 98
  },
  {
    id: 'up-resident-evil-veronica',
    slug: 'resident-evil-veronica',
    title: 'Resident Evil: Veronica',
    developer: 'Capcom',
    publisher: 'Capcom',
    releaseDate: 'Late 2026',
    countdownDays: 78,
    platforms: ['PlayStation 5', 'Xbox Series X|S', 'PC'],
    genre: 'Survival Horror',
    status: 'Confirmed',
    coverImage: '/images/header.jpg',
    description: 'Claire Redfield returns in Capcom’s full RE Engine remake of Rockfort Island, featuring real-time volumetric darkness and dual pistols.',
    hypeScore: 96
  },
  {
    id: 'up-tomb-raider-atlantis',
    slug: 'tomb-raider-legacy-of-atlantis',
    title: 'Tomb Raider: Legacy of Atlantis',
    developer: 'Crystal Dynamics',
    publisher: 'PlayStation Studios / Amazon Games',
    releaseDate: '2026',
    countdownDays: 115,
    platforms: ['PlayStation 5', 'PC'],
    genre: 'Archaeological Action Adventure',
    status: 'Confirmed',
    coverImage: '/images/tomb-raider-legacy-of-atlantis.jpg',
    description: 'Lara Croft returns with dual-wield pistols, subterranean cavern swimming, and Unreal Engine 5 mythological ruins across the lost continent.',
    hypeScore: 94
  },
  {
    id: 'up-gta-6',
    slug: 'gta-6',
    title: 'Grand Theft Auto VI',
    developer: 'Rockstar Games',
    publisher: 'Take-Two Interactive',
    releaseDate: 'Autumn 2026',
    countdownDays: 38,
    platforms: ['PlayStation 5', 'Xbox Series X|S'],
    genre: 'Open-World Action Adventure',
    status: 'Confirmed',
    coverImage: '/images/gta-6-key-art.png',
    description: 'Vice City and the vast sun-soaked state of Leonida await in the most anticipated video game in modern entertainment history.',
    hypeScore: 99
  },
  {
    id: 'up-witcher-4-polaris',
    slug: 'the-witcher-4-polaris',
    title: 'The Witcher 4: Project Polaris',
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt',
    releaseDate: '2027',
    countdownDays: 240,
    platforms: ['PlayStation 5', 'Xbox Series X|S', 'PC'],
    genre: 'Story-Driven Dark Fantasy RPG',
    status: 'Expected 2026',
    coverImage: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=1200&q=80',
    description: 'The commencement of a brand new Witcher saga crafted within Unreal Engine 5, venturing beyond the Northern Kingdoms.',
    hypeScore: 96
  }
];
