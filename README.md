# GamePulse — Premium Gaming Publication & Media Web App

> **"Your daily pulse on gaming."**

GamePulse is an editorial-grade, modern gaming publication website designed with a dark, cinematic aesthetic. It delivers breaking news, scored critical reviews, tactical game guides, an upcoming release radar, hardware lab benchmarks, and individual game hubs.

---

## 1. Project Structure

```
├── index.html                  # HTML entry with OpenGraph, JSON-LD, SEO, and Google Fonts
├── metadata.json               # Applet identity and capabilities
├── package.json                # Project dependencies, scripts (dev, build, preview, start, lint)
├── tsconfig.json               # TypeScript compiler options with @/ alias
├── vite.config.ts              # Vite configuration with Tailwind CSS & React plugins
└── src/
    ├── main.tsx                # React DOM root entry point
    ├── App.tsx                 # Core application router, layout container, theme provider
    ├── index.css               # Tailwind CSS v4 setup, typography hierarchy, custom scrollbars
    ├── types/
    │   └── index.ts            # Data models: Article, Author, Review, Guide, Hardware, Game
    ├── data/
    │   ├── authors.ts          # Editorial staff profiles
    │   ├── articles.ts         # 15+ rich editorial news stories and features
    │   ├── reviews.ts          # 6 scored critical game reviews (pros, cons, specs)
    │   ├── guides.ts           # 8 tactical walkthroughs (Boss, Beginner, Trophy, Builds)
    │   ├── upcomingGames.ts    # 8 upcoming 2026/2027 releases with countdowns
    │   ├── hardware.ts         # 8 hardware benchmarks (GPUs, CPUs, OLEDs, Peripherals)
    │   └── games.ts            # 6 individual game encyclopedia profiles
    ├── components/
    │   ├── Navbar.tsx          # Sticky top bar following the One-Row Three-Zone contract
    │   ├── Footer.tsx          # Comprehensive publication footer with legal and platforms
    │   ├── HeroArticle.tsx     # Cinematic featured story with gradient scrim
    │   ├── BreakingTicker.tsx  # Breaking wire grid with live pulse indicator
    │   ├── ArticleCard.tsx     # Responsive cards with unboxed metadata and authors
    │   ├── TrendingList.tsx    # Numbered 01–05 high-traffic stories
    │   ├── ReviewCard.tsx      # Scored review card (10-point scale with pros/cons)
    │   ├── GuideCard.tsx       # Walkthrough cards with difficulty levels & steps
    │   ├── GameReleaseCard.tsx # Release radar with platform badges & hype scores
    │   ├── HardwareCard.tsx    # Hardware lab cards with specs and pricing
    │   ├── SafeImage.tsx       # Zero-broken-image resilient renderer with thematic art
    │   ├── Breadcrumbs.tsx     # Accessible breadcrumb trail
    │   ├── ReadingProgress.tsx # Viewport scroll depth progress bar
    │   ├── TableOfContents.tsx # Sticky desktop article navigation with section tracking
    │   ├── ShareButtons.tsx    # Clipboard copy, Twitter/X, and Reddit share actions
    │   ├── CommentsSection.tsx # Interactive reader discussion with real likes & replies
    │   ├── SearchBar.tsx       # Instant search input with clear trigger
    │   ├── CategoryFilter.tsx  # Segmented buttons for platform/category filtering
    │   └── BackToTop.tsx       # Floating smooth scroll button
    └── views/
        ├── HomeView.tsx        # Complete 10-section publication frontpage
        ├── NewsView.tsx        # News hub with filters and pagination
        ├── ReviewsView.tsx     # Scored reviews catalog with scoring rubric
        ├── GuidesView.tsx      # Tactical guides database
        ├── UpcomingGamesView.tsx # 2026/2027 release calendar
        ├── HardwareView.tsx    # Silicon & peripheral lab benchmarks
        ├── EsportsView.tsx     # Competitive circuit & tournament meta
        ├── ArticleDetailView.tsx # Long-form editorial reading experience
        ├── GameDetailView.tsx  # Dedicated game hub with news, reviews, and guides
        ├── SearchView.tsx      # Live multi-entity database search
        └── NotFoundView.tsx    # 404 page with recovery routes
```

---

## 2. Local Development Instructions

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The application runs on `http://localhost:3000`.

3. **Verify type check & linting:**
   ```bash
   npm run lint
   ```

4. **Run the production build:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm start
   # or
   npm run preview
   ```

---

## 3. Vercel Deployment Instructions

1. Push your code to your GitHub / GitLab repository.
2. In the [Vercel Dashboard](https://vercel.com/new), select **Import Project** and choose the repository.
3. Configure the build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**. Vercel will build and assign your production domain.

---

## 4. Required Environment Variables

All variables are non-sensitive and configured in `.env.example`:

| Variable | Description |
|---|---|
| `VITE_APP_URL` | Base canonical domain (e.g., `https://gamepulse.media`) |
| `GEMINI_API_KEY` | *(Optional)* For future automated article summaries or server hooks |

---

## 5. How to Add New Articles

Articles are stored in `src/data/articles.ts`. To add a new story:

```typescript
import { Article } from '../types';
import { AUTHORS } from './authors';

export const NEW_ARTICLE: Article = {
  id: 'unique-article-id',
  slug: 'url-friendly-slug',
  title: 'Your Compelling Headline',
  subtitle: 'Optional descriptive subheadline',
  excerpt: 'A 2-3 sentence overview for card grids.',
  category: 'PlayStation', // 'News' | 'Reviews' | 'Guides' | 'Hardware' | 'Esports' | etc.
  subCategory: 'Feature',
  coverImage: '/images/your-image.jpg',
  fallbackTheme: 'ghost', // 'ghost' | 'elden' | 'gow' | 'tlou' | 'hardware' | 'standard'
  author: AUTHORS.alex_vance,
  publishedAt: 'Oct 07, 2026',
  readTime: '6 min read',
  isBreaking: false,
  isFeatured: false,
  isTrending: true,
  tags: ['PlayStation 5', 'Action RPG'],
  content: {
    intro: 'Lead paragraph for the story...',
    sections: [
      {
        heading: 'First Section Heading',
        id: 'first-section-id',
        paragraphs: ['Paragraph 1 content...', 'Paragraph 2 content...'],
        quote: {
          text: 'Key director quote...',
          author: 'Director Name',
          role: 'Creative Lead'
        }
      }
    ],
    conclusion: 'Closing takeaway and industry outlook.'
  }
};
```

---

## 6. How to Add New Games & Reviews

### Adding a Game Profile:
Edit `src/data/games.ts`:
```typescript
{
  id: 'game-doom-dark-ages',
  slug: 'doom-the-dark-ages',
  title: 'DOOM: The Dark Ages',
  developer: 'id Software',
  publisher: 'Bethesda Softworks',
  releaseDate: '2027',
  platforms: ['PlayStation 5', 'Xbox Series X|S', 'PC'],
  genre: 'First-Person Shooter',
  coverImage: '/images/doom.jpg',
  bannerImage: '/images/doom.jpg',
  description: 'The prequel origin story of the Doom Slayer wielding a Shield Saw in dark fantasy realms.',
  metaScore: 92
}
```

### Adding a Scored Review:
Edit `src/data/reviews.ts`:
```typescript
{
  id: 'rev-doom-dark-ages',
  slug: 'doom-the-dark-ages-review',
  gameTitle: 'DOOM: The Dark Ages',
  gameSlug: 'doom-the-dark-ages',
  developer: 'id Software',
  publisher: 'Bethesda Softworks',
  platform: 'PC',
  genre: 'FPS',
  releaseDate: '2027',
  score: 9.3,
  verdict: 'Heavy metal combat perfection meets feudal gothic carnage.',
  summary: 'A breathtakingly fast and brutal shooter that re-energizes the franchise.',
  coverImage: '/images/doom.jpg',
  author: AUTHORS.david_miller,
  publishedAt: 'Oct 07, 2026',
  readTime: '8 min read',
  pros: ['Sensational Shield Saw parry mechanics', 'Phenomenal PC optimization'],
  cons: ['Melee boss arena geometry can feel constricted'],
  specsTestedOn: 'PC (RTX 4080 Super, Ryzen 7 7800X3D)'
}
```

---

## 7. Responsive Design Guidelines

1. **Desktop Baseline (1440px):**
   - Content containers constrained to `max-w-7xl` (1280px) with `px-8`.
   - Editorial articles use asymmetric two-column layouts: 65–75 character prose width (`max-w-prose`) paired with sticky right sidebar Table of Contents.
2. **Tablet (768px – 1024px):**
   - Article and review grids automatically adapt to 2 columns.
   - Top navigation maintains clean single-line controls; search and theme toggle remain accessible.
3. **Mobile (< 768px):**
   - Top navigation adapts to a compact header with hamburger drawer.
   - Sticky elements obey the 15% viewport height cap.
   - Touch targets are minimum 44px for thumb accessibility.
   - SafeImage renders resilient CSS/SVG gaming themes if network assets fail.
