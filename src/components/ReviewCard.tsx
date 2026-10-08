import React from 'react';
import { Review } from '../types';
import { SafeImage } from './SafeImage';
import { ArrowRight, Check, X, ShieldCheck } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
  onSelect: (slug: string) => void;
  featured?: boolean;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  onSelect,
  featured = false,
}) => {
  const getScoreBadge = (score: number) => {
    if (score >= 9.5) return { label: 'MASTERPIECE', ring: 'text-emerald-400 bg-emerald-950/80 border-emerald-500/60' };
    if (score >= 9.0) return { label: 'ESSENTIAL', ring: 'text-emerald-400 bg-emerald-950/80 border-emerald-500/60' };
    if (score >= 8.0) return { label: 'GREAT', ring: 'text-sky-400 bg-sky-950/80 border-sky-500/60' };
    if (score >= 7.0) return { label: 'GOOD', ring: 'text-amber-400 bg-amber-950/80 border-amber-500/60' };
    return { label: 'MEDIOCRE', ring: 'text-rose-400 bg-rose-950/80 border-rose-500/60' };
  };

  const badge = getScoreBadge(review.score);

  if (featured) {
    return (
      <div
        onClick={() => onSelect(review.slug)}
        className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 lg:p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700/80 transition-all cursor-pointer shadow-xl relative overflow-hidden"
      >
        <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-[4/3] rounded-xl overflow-hidden bg-neutral-950 shadow-md">
          <SafeImage
            src={review.coverImage}
            alt={review.gameTitle}
            fallbackTheme={review.gameSlug === 'ghost-of-yotei' ? 'ghost' : 'elden'}
            className="w-full h-full"
          />
          <div className="absolute top-4 left-4 flex flex-col items-start gap-1">
            <div
              className={`px-3.5 py-1.5 rounded-xl border font-mono font-black text-xl tabular-nums shadow-2xl backdrop-blur-md flex items-baseline gap-1 ${badge.ring}`}
            >
              <span>{review.score.toFixed(1)}</span>
              <span className="text-[11px] font-normal text-neutral-400">/ 10</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-widest bg-neutral-950/90 text-neutral-300 border border-neutral-800 shadow">
              {badge.label}
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium text-neutral-400 mb-2">
              <span className="text-white font-semibold">{review.platform}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>{review.genre}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-500">{review.developer}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-rose-200 transition-colors font-display mb-3 tracking-tight">
              {review.gameTitle}
            </h3>

            {/* Score Bar Meter */}
            <div className="mb-4">
              <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full"
                  style={{ width: `${review.score * 10}%` }}
                />
              </div>
            </div>

            <p className="text-sm text-neutral-300 italic mb-4 leading-relaxed font-serif pl-3 border-l-2 border-neutral-700">
              "{review.verdict}"
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 line-clamp-3 mb-6 leading-relaxed">
              {review.summary}
            </p>

            {/* Pros/Cons quick glance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-6">
              {review.pros.slice(0, 2).map((p, i) => (
                <div key={i} className="flex items-start gap-1.5 text-neutral-300 bg-neutral-950/40 p-2 rounded-lg border border-neutral-800/60">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-xs">
            <span className="text-neutral-400 font-mono">Reviewed by {review.author.name}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(review.slug);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 text-xs font-semibold transition-colors cursor-pointer shadow"
            >
              <span>Read Full Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => onSelect(review.slug)}
      className="group flex flex-col rounded-xl overflow-hidden bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all cursor-pointer shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
        <SafeImage
          src={review.coverImage}
          alt={review.gameTitle}
          fallbackTheme={review.gameSlug === 'ghost-of-yotei' ? 'ghost' : 'elden'}
          className="w-full h-full"
        />
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <div
            className={`px-2.5 py-1 rounded-lg border font-mono font-bold text-sm tabular-nums backdrop-blur-md shadow-md ${badge.ring}`}
          >
            {review.score.toFixed(1)}
            <span className="text-[10px] text-neutral-400 font-normal">/10</span>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest bg-neutral-950/90 text-neutral-300 border border-neutral-800">
            {badge.label}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 p-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-neutral-400 mb-2">
            <span>{review.platform}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>{review.genre}</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-200 transition-colors font-display mb-2 line-clamp-1">
            {review.gameTitle}
          </h3>

          {/* Mini score meter */}
          <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-emerald-400 rounded-full"
              style={{ width: `${review.score * 10}%` }}
            />
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-4">
            {review.summary}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80 text-xs">
          <span className="text-neutral-500">{review.author.name}</span>
          <span className="text-rose-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
            Read Review <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};
