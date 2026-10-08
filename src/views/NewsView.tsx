import React, { useState } from 'react';
import { ARTICLES } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { SafeImage } from '../components/SafeImage';
import { Newspaper, ArrowRight, Clock, Calendar } from 'lucide-react';

interface NewsViewProps {
  initialCategory?: string;
  onSelectArticle: (slug: string) => void;
}

export const NewsView: React.FC<NewsViewProps> = ({
  initialCategory = 'All',
  onSelectArticle,
}) => {
  const [selectedCat, setSelectedCat] = useState<string>(initialCategory);
  const [visibleCount, setVisibleCount] = useState<number>(9);

  const categories = ['All', 'PlayStation', 'Xbox', 'PC', 'Nintendo', 'Hardware', 'Esports'];

  const filteredArticles = ARTICLES.filter((art) => {
    if (selectedCat === 'All') return true;
    return (
      art.category.toLowerCase() === selectedCat.toLowerCase() ||
      art.tags.some((t) => t.toLowerCase().includes(selectedCat.toLowerCase()))
    );
  });

  const featured = filteredArticles[0] || ARTICLES[0];
  const listArticles = filteredArticles.slice(1, visibleCount);

  return (
    <div className="space-y-12">
      {/* Category Header */}
      <div className="border-b border-neutral-800 pb-8">
        <div className="flex items-center gap-2.5 text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 font-semibold">
          <Newspaper className="w-4 h-4" />
          <span>Dispatch & Wire</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
          Gaming News & Reports
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
          Comprehensive, unbiased reporting on the video game industry. Breaking announcements, studio updates, technology shifts, and console hardware ecosystems.
        </p>

        {/* Filter Bar */}
        <div className="pt-6">
          <CategoryFilter
            categories={categories}
            activeCategory={selectedCat}
            onSelectCategory={(cat) => {
              setSelectedCat(cat);
              setVisibleCount(9);
            }}
          />
        </div>
      </div>

      {/* Featured Headline Banner */}
      {featured && (
        <div
          onClick={() => onSelectArticle(featured.slug)}
          className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all cursor-pointer shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-[16/11] bg-neutral-950 overflow-hidden">
              <SafeImage
                src={featured.coverImage}
                alt={featured.title}
                fallbackTheme={featured.fallbackTheme}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-medium text-rose-400 mb-3">
                  <span>{featured.category}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span>Featured Report</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-rose-200 transition-colors font-display tracking-tight mb-4 [text-wrap:balance]">
                  {featured.title}
                </h2>

                <p className="text-sm text-neutral-400 line-clamp-3 leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <img
                    src={featured.author.avatar}
                    alt={featured.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span>By {featured.author.name}</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono">
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Articles */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Showing {filteredArticles.length} Stories in {selectedCat}
          </span>
        </div>

        {listArticles.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400">
            <p>No articles found under this specific filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={onSelectArticle}
              />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredArticles.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-6 py-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 text-white text-xs font-semibold font-mono tracking-wider transition-colors cursor-pointer"
            >
              Load Older Stories
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
