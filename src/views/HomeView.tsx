import React from 'react';
import { ARTICLES } from '../data/articles';
import { REVIEWS } from '../data/reviews';
import { GUIDES } from '../data/guides';
import { UPCOMING_GAMES } from '../data/upcomingGames';
import { HARDWARE_PRODUCTS } from '../data/hardware';
import { HeroArticle } from '../components/HeroArticle';
import { BreakingTicker } from '../components/BreakingTicker';
import { ArticleCard } from '../components/ArticleCard';
import { TrendingList } from '../components/TrendingList';
import { ReviewCard } from '../components/ReviewCard';
import { GuideCard } from '../components/GuideCard';
import { GameReleaseCard } from '../components/GameReleaseCard';
import { HardwareCard } from '../components/HardwareCard';
import { Newsletter } from '../components/Newsletter';
import { ArrowRight, Compass, Star, Calendar, Cpu, Sparkles } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
  onSelectReview: (slug: string) => void;
  onSelectGuide: (slug: string) => void;
  onSelectHardware: (slug: string) => void;
  onSelectGame: (slug: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectArticle,
  onSelectReview,
  onSelectGuide,
  onSelectHardware,
  onSelectGame,
}) => {
  const heroArticle = ARTICLES[0];
  const featuredHeroArticles = ARTICLES.slice(0, 4);
  const breakingArticles = ARTICLES.filter((a) => a.isBreaking);
  const latestArticles = ARTICLES.slice(1, 13);
  const featuredReview = REVIEWS[0];
  const secondaryReviews = REVIEWS.slice(1, 4);

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* SECTION 1 — HERO CAROUSEL & COVER STORIES */}
      <section aria-label="Lead Cover Stories">
        <HeroArticle
          article={heroArticle}
          featuredArticles={featuredHeroArticles}
          onSelect={onSelectArticle}
        />
      </section>

      {/* SECTION 2 — BREAKING WIRE */}
      <section aria-label="Breaking Wire">
        <BreakingTicker articles={breakingArticles} onSelect={onSelectArticle} />
      </section>

      {/* SECTION 3 & 4 — LATEST NEWS & TRENDING NOW (Editorial Two-Column Layout) */}
      <section aria-label="Latest Stories and Trending" className="space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
              Latest Stories
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Fresh reporting from our correspondents across PlayStation, PC, Xbox, and Nintendo.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/news')}
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
          >
            <span>View All News</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Main 8-column Article Grid (Varied Asymmetric Editorial Layout) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Spotlight Story */}
            {latestArticles[0] && (
              <ArticleCard
                article={latestArticles[0]}
                onSelect={onSelectArticle}
                variant="spotlight"
              />
            )}

            {/* Two-column secondary grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {latestArticles.slice(1, 5).map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onSelect={onSelectArticle}
                />
              ))}
            </div>

            {/* Horizontal stacked story */}
            {latestArticles[5] && (
              <div className="pt-2">
                <ArticleCard
                  article={latestArticles[5]}
                  onSelect={onSelectArticle}
                  variant="horizontal"
                />
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-neutral-800/80 flex justify-center">
              <button
                onClick={() => onNavigate('/news')}
                className="px-6 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-800 text-xs font-semibold font-mono tracking-wider transition-colors cursor-pointer"
              >
                Explore Full Dispatch Archives ({ARTICLES.length} Stories)
              </button>
            </div>
          </div>

          {/* Right 4-column Trending List */}
          <div className="lg:col-span-4 space-y-8">
            <TrendingList articles={ARTICLES} onSelect={onSelectArticle} />

            {/* Editorial Spotlight Banner */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-neutral-900 via-neutral-900 to-rose-950/30 border border-neutral-800 text-neutral-300 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold block">
                GamePulse Special Report
              </span>
              <h3 className="text-lg font-bold text-white font-display leading-snug">
                FromSoftware & The Architecture of Suffering
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Why Miyazaki’s spatial philosophy in Shadow of the Erdtree redefines vertical world construction.
              </p>
              <button
                onClick={() => onSelectArticle('elden-ring-shadow-erdtree-pc-controls-optimization')}
                className="inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 font-medium pt-2 cursor-pointer"
              >
                <span>Read Analysis</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — GAME REVIEWS */}
      <section aria-label="Game Reviews" className="space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
              <Star className="w-3.5 h-3.5 fill-rose-500/20" />
              <span>Independent Criticism</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
              Scored Reviews
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/reviews')}
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
          >
            <span>Browse All Reviews</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Featured Review */}
        <ReviewCard review={featuredReview} onSelect={onSelectReview} featured={true} />

        {/* Secondary Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {secondaryReviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} onSelect={onSelectReview} />
          ))}
        </div>
      </section>

      {/* SECTION 6 — GAMING GUIDES */}
      <section aria-label="Gaming Guides" className="space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Walkthroughs & Builds</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
              Tactical Guides
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/guides')}
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
          >
            <span>All Guides ({GUIDES.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUIDES.slice(0, 4).map((guide) => (
            <GuideCard key={guide.id} guide={guide} onSelect={onSelectGuide} />
          ))}
        </div>
      </section>

      {/* SECTION 7 — UPCOMING GAMES */}
      <section aria-label="Upcoming Games" className="space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Release Radar</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
              Upcoming Game Releases
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/upcoming-games')}
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
          >
            <span>Full 2026/2027 Calendar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {UPCOMING_GAMES.slice(0, 4).map((game) => (
            <GameReleaseCard key={game.id} game={game} onSelectGame={onSelectGame} />
          ))}
        </div>
      </section>

      {/* SECTION 8 — HARDWARE */}
      <section aria-label="Hardware & Tech" className="space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>Silicon & Peripherals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
              Hardware Lab Benchmarks
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/hardware')}
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
          >
            <span>All Hardware ({HARDWARE_PRODUCTS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HARDWARE_PRODUCTS.slice(0, 4).map((product) => (
            <HardwareCard key={product.id} product={product} onSelect={onSelectHardware} />
          ))}
        </div>
      </section>

      {/* SECTION 9 — NEWSLETTER */}
      <Newsletter />
    </div>
  );
};
