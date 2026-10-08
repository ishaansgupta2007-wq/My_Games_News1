import React from 'react';
import { GameProfile } from '../types';
import { GAMES } from '../data/games';
import { ARTICLES } from '../data/articles';
import { REVIEWS } from '../data/reviews';
import { GUIDES } from '../data/guides';
import { SafeImage } from '../components/SafeImage';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArticleCard } from '../components/ArticleCard';
import { ReviewCard } from '../components/ReviewCard';
import { GuideCard } from '../components/GuideCard';
import { Calendar, Building, Globe, Star, Layers, ArrowLeft } from 'lucide-react';

interface GameDetailViewProps {
  game: GameProfile;
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
  onSelectReview: (slug: string) => void;
  onSelectGuide: (slug: string) => void;
  onSelectGame: (slug: string) => void;
}

export const GameDetailView: React.FC<GameDetailViewProps> = ({
  game,
  onNavigate,
  onSelectArticle,
  onSelectReview,
  onSelectGuide,
  onSelectGame,
}) => {
  const gameArticles = ARTICLES.filter(
    (a) => a.gameSlug === game.slug || a.tags.some((t) => t.toLowerCase().includes(game.title.toLowerCase()))
  );
  const gameReviews = REVIEWS.filter((r) => r.gameSlug === game.slug);
  const gameGuides = GUIDES.filter((g) => g.gameSlug === game.slug);
  const otherGames = GAMES.filter((g) => g.id !== game.id).slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Breadcrumbs */}
      <div>
        <Breadcrumbs
          items={[
            { label: 'Upcoming Games', path: '/upcoming-games' },
            { label: game.title },
          ]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Hero Header */}
      <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
        <div className="relative aspect-[21/9] min-h-[300px] sm:min-h-[380px] w-full bg-neutral-950">
          <SafeImage
            src={game.bannerImage}
            alt={game.title}
            fallbackTheme={game.slug === 'ghost-of-yotei' ? 'ghost' : 'elden'}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent pointer-events-none" />

          {/* Floating Details */}
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-rose-400 mb-2">
              <span>{game.genre}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>{game.platforms.join(', ')}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
              {game.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-300">
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-neutral-400" />
                {game.developer} / {game.publisher}
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                {game.releaseDate}
              </span>
              {game.metaScore && (
                <>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-400 font-bold">
                    MetaScore: {game.metaScore}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overview & Quick Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-2xl font-bold text-white font-display">Overview & Synopsis</h2>
          <p className="text-base text-neutral-300 leading-relaxed font-sans">
            {game.description}
          </p>

          {/* Game Reviews */}
          {gameReviews.length > 0 && (
            <div className="pt-8 border-t border-neutral-800">
              <h3 className="text-xl font-bold text-white font-display mb-6">
                Critical Reviews ({gameReviews.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {gameReviews.map((r) => (
                  <ReviewCard key={r.id} review={r} onSelect={onSelectReview} />
                ))}
              </div>
            </div>
          )}

          {/* Guides */}
          {gameGuides.length > 0 && (
            <div className="pt-8 border-t border-neutral-800">
              <h3 className="text-xl font-bold text-white font-display mb-6">
                Tactical Guides & Walkthroughs ({gameGuides.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {gameGuides.map((g) => (
                  <GuideCard key={g.id} guide={g} onSelect={onSelectGuide} />
                ))}
              </div>
            </div>
          )}

          {/* Related News Coverage */}
          {gameArticles.length > 0 && (
            <div className="pt-8 border-t border-neutral-800">
              <h3 className="text-xl font-bold text-white font-display mb-6">
                Related News & Deep Dives ({gameArticles.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {gameArticles.map((art) => (
                  <ArticleCard key={art.id} article={art} onSelect={onSelectArticle} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Game Metadata
            </h3>
            <div className="space-y-3 text-xs font-mono">
              <div>
                <span className="text-neutral-500 block">Developer</span>
                <span className="text-white font-medium">{game.developer}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Publisher</span>
                <span className="text-white font-medium">{game.publisher}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Release Window</span>
                <span className="text-white font-medium">{game.releaseDate}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Target Platforms</span>
                <span className="text-white font-medium">{game.platforms.join(', ')}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Genre</span>
                <span className="text-white font-medium">{game.genre}</span>
              </div>
            </div>

            {game.officialSite && (
              <a
                href={game.officialSite}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Visit Official Site</span>
              </a>
            )}
          </div>

          {/* Other Featured Games */}
          <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Other Profiles
            </h3>
            <div className="space-y-3">
              {otherGames.map((og) => (
                <div
                  key={og.id}
                  onClick={() => onSelectGame(og.slug)}
                  className="group flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-850 cursor-pointer transition-colors"
                >
                  <div className="w-12 h-12 rounded overflow-hidden bg-neutral-950 shrink-0">
                    <SafeImage
                      src={og.coverImage}
                      alt={og.title}
                      fallbackTheme={og.slug === 'ghost-of-yotei' ? 'ghost' : 'elden'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-white group-hover:text-rose-300 truncate">
                      {og.title}
                    </h4>
                    <span className="text-[11px] font-mono text-neutral-500">{og.genre}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
