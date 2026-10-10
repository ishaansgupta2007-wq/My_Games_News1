import React from 'react';
import { Article } from '../types';
import { SafeImage } from './SafeImage';
import { Clock, Calendar, ArrowUpRight, Flame } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onSelect: (slug: string) => void;
  variant?: 'standard' | 'compact' | 'horizontal' | 'spotlight';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  variant = 'standard',
}) => {
  if (variant === 'spotlight') {
    return (
      <article
        onClick={() => onSelect(article.slug)}
        className="group relative flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700/80 transition-all cursor-pointer shadow-xs dark:shadow-xl"
      >
        <div className="relative w-full md:w-3/5 aspect-[16/10] md:aspect-auto min-h-[220px] md:min-h-[320px] overflow-hidden bg-neutral-100 dark:bg-neutral-950 shrink-0">
          <SafeImage
            src={article.coverImage}
            alt={article.title}
            fallbackTheme={article.fallbackTheme}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 p-6 sm:p-8 bg-white dark:bg-neutral-900/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-500 dark:text-rose-400 mb-2.5 uppercase tracking-wider">
              <span>{article.category}</span>
              <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
              <span className="px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/60 text-rose-600 dark:text-rose-400 text-[10px]">
                Spotlight
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-200 transition-colors font-display tracking-tight leading-tight mb-3 [text-wrap:balance]">
              {article.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3 mb-5 leading-relaxed font-sans">
              {article.excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 pt-3 border-t border-neutral-200 dark:border-neutral-800/80 font-mono">
            <span>By {article.author?.name || 'Staff Writer'}</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'horizontal') {
    return (
      <article
        onClick={() => onSelect(article.slug)}
        className="group flex flex-col sm:flex-row gap-5 p-4 rounded-xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-slate-50 dark:hover:bg-neutral-900 transition-all cursor-pointer shadow-xs dark:shadow-md"
      >
        <div className="relative w-full sm:w-56 aspect-[16/10] sm:aspect-[4/3] rounded-lg overflow-hidden shrink-0 bg-neutral-100 dark:bg-neutral-950">
          <SafeImage
            src={article.coverImage}
            alt={article.title}
            fallbackTheme={article.fallbackTheme}
            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col justify-between flex-1 py-1">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-rose-500 dark:text-rose-400 mb-1.5 uppercase">
              <span>{article.category}</span>
              <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
              <span className="text-neutral-500 dark:text-neutral-400">{article.readTime}</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-200 transition-colors line-clamp-2 mb-2 font-display leading-snug">
              {article.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 pt-3 border-t border-neutral-200 dark:border-neutral-800/60 mt-3 font-mono">
            <span>By {article.author?.name || 'Staff Writer'}</span>
            <span>{article.publishedAt}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => onSelect(article.slug)}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700/90 hover:bg-slate-50 dark:hover:bg-neutral-900 transition-all duration-300 cursor-pointer shadow-xs dark:shadow-lg dark:shadow-black/20"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950">
        <SafeImage
          src={article.coverImage}
          alt={article.title}
          fallbackTheme={article.fallbackTheme}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0 p-1.5 rounded-full bg-white/90 dark:bg-neutral-950/90 text-neutral-800 dark:text-white backdrop-blur border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 p-5 sm:p-6">
        <div>
          {/* Category & Read Time (Clean unboxed metadata) */}
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-rose-500 dark:text-rose-400 mb-2 uppercase tracking-wide">
            <span>{article.category}</span>
            <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">{article.readTime}</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-100 transition-colors line-clamp-2 mb-2 leading-snug font-display [text-wrap:balance] tracking-tight">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-5 font-sans">
            {article.excerpt}
          </p>
        </div>

        {/* Card Byline Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-neutral-200 dark:border-neutral-800/80 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            {article.author?.avatar && (
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-5 h-5 rounded-full object-cover border border-neutral-300 dark:border-neutral-700"
              />
            )}
            <span className="truncate max-w-[130px] font-medium text-neutral-700 dark:text-neutral-300">
              {article.author?.name || 'Staff Writer'}
            </span>
          </div>
          <span className="text-neutral-500 font-mono text-[11px] flex items-center gap-1">
            <Calendar className="w-3 h-3 text-neutral-600" />
            {article.publishedAt}
          </span>
        </div>
      </div>
    </article>
  );
};
