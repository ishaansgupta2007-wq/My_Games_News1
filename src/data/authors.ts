import { Author } from '../types';

export const AUTHORS: Record<string, Author> = {
  alex_vance: {
    id: 'alex_vance',
    name: 'Alex Vance',
    role: 'Editor-in-Chief',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    bio: 'Covering game narrative, AAA game directors, and next-gen hardware architectures for over 12 years.',
    twitter: '@alexvance_pulse',
  },
  sarah_chen: {
    id: 'sarah_chen',
    name: 'Sarah Chen',
    role: 'Senior Hardware Specialist',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    bio: 'Obsessed with frame pacing, silicon thermals, OLED subpixel layouts, and custom mechanical switches.',
    twitter: '@sarahchen_tech',
  },
  marcus_reyes: {
    id: 'marcus_reyes',
    name: 'Marcus Reyes',
    role: 'Lead Guides & RPG Editor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    bio: 'Soulslike devotee and speedrunner. Over 4,000 hours logged across FromSoftware titles and CRPGs.',
    twitter: '@marcus_reyes',
  },
  elena_rostova: {
    id: 'elena_rostova',
    name: 'Elena Rostova',
    role: 'Esports & Industry Analyst',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    bio: 'Investigating studio acquisitions, game development crunch, competitive meta shifts, and live-service economies.',
    twitter: '@elena_rostova',
  },
  david_miller: {
    id: 'david_miller',
    name: 'David Miller',
    role: 'Staff Reviewer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    bio: 'Action games enthusiast and fighting game labber. Dedicated to frame-data analysis and combat design.',
    twitter: '@dmiller_games',
  },
};
