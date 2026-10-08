import React, { useState, useMemo } from 'react';
import { ARTICLES } from '../data/articles';
import { REVIEWS } from '../data/reviews';
import { GUIDES } from '../data/guides';
import { HARDWARE_PRODUCTS } from '../data/hardware';
import { GAMES } from '../data/games';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { ArticleCard } from '../components/ArticleCard';
import { ReviewCard } from '../components/ReviewCard';
import { GuideCard } from '../components/GuideCard';
import { HardwareCard } from '../components/HardwareCard';
import { Search, Flame, FileQuestion } from 'lucide-react';

interface SearchViewProps {
  onSelectArticle: (slug: string) => void;
  onSelectReview: (slug: string) => void;
  onSelectGuide: (slug: string) => void;
  onSelectHardware: (slug: string) => void;
  onSelectGame: (slug: string) => void;
}

export const SearchView: React.FC<SearchViewProps> = ({
  onSelectArticle,
  onSelectReview,
  onSelectGuide,
  onSelectHardware,
  onSelectGame,
}) => {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filterOptions = ['All', 'Articles', 'Reviews', 'Guides', 'Hardware', 'Games'];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    const matchedArticles = ARTICLES.filter((a) => {
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
      );
    });

    const matchedReviews = REVIEWS.filter((r) => {
      if (!q) return true;
      return (
        r.gameTitle.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        r.genre.toLowerCase().includes(q) ||
        r.platform.toLowerCase().includes(q)
      );
    });

    const matchedGuides = GUIDES.filter((g) => {
      if (!q) return true;
      return (
        g.title.toLowerCase().includes(q) ||
        g.gameTitle.toLowerCase().includes(q) ||
        g.excerpt.toLowerCase().includes(q) ||
        g.type.toLowerCase().includes(q)
      );
    });

    const matchedHardware = HARDWARE_PRODUCTS.filter((h) => {
      if (!q) return true;
      return (
        h.name.toLowerCase().includes(q) ||
        h.brand.toLowerCase().includes(q) ||
        h.category.toLowerCase().includes(q) ||
        h.shortDescription.toLowerCase().includes(q)
      );
    });

    const matchedGames = GAMES.filter((gm) => {
      if (!q) return true;
      return (
        gm.title.toLowerCase().includes(q) ||
        gm.description.toLowerCase().includes(q) ||
        gm.genre.toLowerCase().includes(q) ||
        gm.developer.toLowerCase().includes(q)
      );
    });

    return {
      articles: matchedArticles,
      reviews: matchedReviews,
      guides: matchedGuides,
      hardware: matchedHardware,
      games: matchedGames,
      total:
        matchedArticles.length +
        matchedReviews.length +
        matchedGuides.length +
        matchedHardware.length +
        matchedGames.length,
    };
  }, [query]);

  return (
    <div className="space-y-10">
      {/* Search Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-rose-400 text-xs font-mono font-medium">
          <Search className="w-3.5 h-3.5" />
          <span>GamePulse Database</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          Search the Archives
        </h1>
        <p className="text-sm text-neutral-400">
          Instant indexing across 15+ news investigations, scored reviews, tactical guides, hardware benchmarks, and game profiles.
        </p>

        <div className="pt-2">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        {/* Popular Quick Searches */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
          <span className="text-neutral-500 font-mono text-[11px]">Popular Searches:</span>
          {['Ghost of Yotei', 'Elden Ring', 'GTA 6', 'RTX 5090', 'Switch 2', 'DualSense', 'God of War'].map(
            (term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-2.5 py-1 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 text-xs transition-colors cursor-pointer"
              >
                {term}
              </button>
            )
          )}
        </div>

        <div className="flex justify-center pt-2">
          <CategoryFilter
            categories={filterOptions}
            activeCategory={filterType}
            onSelectCategory={setFilterType}
          />
        </div>
      </div>

      {/* Results Count & Query Notice */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono">
        <span className="text-neutral-400">
          {query ? (
            <>
              Found <strong className="text-white">{results.total}</strong> results for "
              <span className="text-rose-400">{query}</span>"
            </>
          ) : (
            <>Showing all catalog items ({results.total})</>
          )}
        </span>
        <span className="text-neutral-500 uppercase">Filters: {filterType}</span>
      </div>

      {/* Empty State */}
      {results.total === 0 && (
        <div className="py-20 text-center rounded-2xl bg-neutral-900/40 border border-neutral-800 max-w-lg mx-auto p-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-neutral-800/80 mx-auto flex items-center justify-center text-neutral-400">
            <FileQuestion className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white font-display">No matches discovered</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            We couldn't find any stories, reviews, or hardware matching "{query}". Try checking your spelling or searching for a broader term like "PS5", "Elden Ring", or "RTX".
          </p>
          <button
            onClick={() => setQuery('')}
            className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold cursor-pointer transition-colors"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Categorized Results */}
      <div className="space-y-12">
        {/* Articles */}
        {(filterType === 'All' || filterType === 'Articles') && results.articles.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white font-display mb-6">
              News & Feature Articles ({results.articles.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.articles.map((art) => (
                <ArticleCard key={art.id} article={art} onSelect={onSelectArticle} />
              ))}
            </div>
          </div>
        )}

        {/* Reviews */}
        {(filterType === 'All' || filterType === 'Reviews') && results.reviews.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white font-display mb-6">
              Game Reviews ({results.reviews.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.reviews.map((rev) => (
                <ReviewCard key={rev.id} review={rev} onSelect={onSelectReview} />
              ))}
            </div>
          </div>
        )}

        {/* Guides */}
        {(filterType === 'All' || filterType === 'Guides') && results.guides.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white font-display mb-6">
              Guides & Walkthroughs ({results.guides.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.guides.map((g) => (
                <GuideCard key={g.id} guide={g} onSelect={onSelectGuide} />
              ))}
            </div>
          </div>
        )}

        {/* Hardware */}
        {(filterType === 'All' || filterType === 'Hardware') && results.hardware.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white font-display mb-6">
              Hardware Lab ({results.hardware.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.hardware.map((p) => (
                <HardwareCard key={p.id} product={p} onSelect={onSelectHardware} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
