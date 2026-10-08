export type CategoryType = 
  | 'News' 
  | 'Reviews' 
  | 'Guides' 
  | 'Hardware' 
  | 'Upcoming Games' 
  | 'Esports' 
  | 'PlayStation' 
  | 'Xbox' 
  | 'PC' 
  | 'Nintendo';

export type PlatformType = 'PlayStation 5' | 'Xbox Series X|S' | 'PC' | 'Nintendo Switch' | 'Multiplatform';

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  twitter?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: CategoryType;
  subCategory?: string;
  coverImage: string;
  fallbackTheme: 'ghost' | 'elden' | 'gow' | 'tlou' | 'hardware' | 'cyber' | 'switch' | 'gta' | 'esports' | 'intergalactic' | 'resident_evil' | 'wolverine' | 'tomb_raider' | 'standard';
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  isBreaking?: boolean;
  isFeatured?: boolean;
  isTrending?: boolean;
  trendingRank?: number;
  gameSlug?: string;
  tags: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      id: string;
      paragraphs: string[];
      quote?: {
        text: string;
        author: string;
        role?: string;
      };
      image?: {
        src: string;
        caption: string;
        alt: string;
      };
      list?: string[];
      callout?: {
        type: 'tip' | 'info' | 'warning' | 'spec';
        title: string;
        text: string;
      };
    }[];
    conclusion: string;
  };
}

export interface Review {
  id: string;
  slug: string;
  gameTitle: string;
  gameSlug: string;
  developer: string;
  publisher: string;
  platform: PlatformType;
  genre: string;
  releaseDate: string;
  score: number; // e.g. 9.5
  verdict: string;
  summary: string;
  coverImage: string;
  author: Author;
  publishedAt: string;
  readTime: string;
  pros: string[];
  cons: string[];
  specsTestedOn?: string;
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  gameTitle: string;
  gameSlug: string;
  type: 'Beginner Guide' | 'Boss Guide' | 'Trophy Guide' | 'Achievement Guide' | 'Build' | 'Tips & Tricks' | 'Settings Guide';
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Expert';
  excerpt: string;
  coverImage: string;
  author: Author;
  publishedAt: string;
  readTime: string;
  stepsCount: number;
}

export interface UpcomingGame {
  id: string;
  slug: string;
  title: string;
  developer: string;
  publisher: string;
  releaseDate: string;
  countdownDays?: number;
  platforms: PlatformType[];
  genre: string;
  status: 'Confirmed' | 'Expected 2026' | 'Beta Live' | 'Gold Master';
  coverImage: string;
  description: string;
  hypeScore: number; // 1-100
}

export interface HardwareProduct {
  id: string;
  slug: string;
  name: string;
  category: 'GPU' | 'CPU' | 'Gaming Laptop' | 'Gaming Monitor' | 'Controller' | 'Keyboard' | 'Mouse' | 'Headset' | 'Prebuilt PC';
  brand: string;
  price: string;
  rating: number; // e.g. 9.4
  shortDescription: string;
  image: string;
  specs: Record<string, string>;
  pros: string[];
  cons: string[];
  verdict: string;
  author: Author;
  publishedAt: string;
}

export interface GameProfile {
  id: string;
  slug: string;
  title: string;
  developer: string;
  publisher: string;
  releaseDate: string;
  platforms: PlatformType[];
  genre: string;
  coverImage: string;
  bannerImage: string;
  description: string;
  metaScore?: number;
  officialSite?: string;
}

export interface Comment {
  id: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
  userLiked?: boolean;
}
