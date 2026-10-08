import React from 'react';
import { Article } from '../types';
import { TrendingUp, Clock } from 'lucide-react';

interface TrendingListProps {
  articles: Article[];
  onSelect: (slug: string) => void;
}

export const TrendingList: React.FC<TrendingListProps> = ({ articles, onSelect }) => {
  const trendingItems = articles
    .filter((a) => a.isTrending || a.trendingRank)
    .sort((a, b) => (a.trendingRank || 99) - (b.trendingRank || 99))
    .slice(0, 5);

  return (
    <div className="rounded-2xl bg-neutral-900/40 border border-neutral-800 p-6 sm:p-8">
      <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
        <div className="flex items-center gap-2.5">
          <TrendingUp className="w-5 h-5 text-rose-500" />
          <h2 className="text-xl font-bold text-white font-display tracking-tight">
            Trending Now
          </h2>
        </div>
        <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
          Top Reads
        </span>
      </div>

      <div className="divide-y divide-neutral-800/80">
        {trendingItems.map((article, idx) => {
          const rank = String(idx + 1).padStart(2, '0');

          return (
            <div
              key={article.id}
              onClick={() => onSelect(article.slug)}
              className="group flex items-start gap-5 py-5 transition-all cursor-pointer first:pt-6 last:pb-2"
            >
              <span className="text-2xl sm:text-3xl font-black font-mono tabular-nums text-neutral-600 group-hover:text-rose-500 transition-colors shrink-0">
                {rank}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-xs font-mono font-medium text-rose-400 mb-1.5">
                  <span>{article.category}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span className="text-neutral-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-neutral-100 group-hover:text-white transition-colors leading-snug font-display line-clamp-2">
                  {article.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
