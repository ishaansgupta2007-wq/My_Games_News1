import React from 'react';
import { Article } from '../types';
import { SafeImage } from './SafeImage';
import { Flame, Clock } from 'lucide-react';

interface BreakingTickerProps {
  articles: Article[];
  onSelect: (slug: string) => void;
}

export const BreakingTicker: React.FC<BreakingTickerProps> = ({ articles, onSelect }) => {
  return (
    <section className="w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-rose-950/60 border border-rose-800/60 text-rose-400 text-xs font-mono font-bold tracking-wider uppercase">
          <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
          <span>Breaking Wire</span>
        </div>
        <div className="h-px flex-1 bg-neutral-800" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {articles.slice(0, 4).map((art) => (
          <div
            key={art.id}
            onClick={() => onSelect(art.slug)}
            className="group flex gap-3 p-3 rounded-xl bg-neutral-900/70 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900 transition-all cursor-pointer"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-neutral-950">
              <SafeImage
                src={art.coverImage}
                alt={art.title}
                fallbackTheme={art.fallbackTheme}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between py-0.5 min-w-0">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-mono font-medium text-rose-400 mb-1">
                  <span>{art.category}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span className="text-neutral-400 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    {art.publishedAt}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-neutral-100 group-hover:text-rose-300 transition-colors line-clamp-2 leading-snug font-display">
                  {art.title}
                </h3>
              </div>
              <span className="text-[11px] text-neutral-500 group-hover:text-neutral-400 transition-colors">
                By {art.author.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
