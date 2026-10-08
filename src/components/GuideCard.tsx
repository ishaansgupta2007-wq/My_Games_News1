import React from 'react';
import { Guide } from '../types';
import { SafeImage } from './SafeImage';
import { Compass, BookOpen, Clock } from 'lucide-react';

interface GuideCardProps {
  guide: Guide;
  onSelect: (slug: string) => void;
}

export const GuideCard: React.FC<GuideCardProps> = ({ guide, onSelect }) => {
  const getDifficultyColor = (diff: Guide['difficulty']) => {
    switch (diff) {
      case 'Easy':
        return 'text-emerald-400 border-emerald-500/30';
      case 'Moderate':
        return 'text-sky-400 border-sky-500/30';
      case 'Challenging':
        return 'text-amber-400 border-amber-500/30';
      case 'Expert':
        return 'text-rose-400 border-rose-500/30';
    }
  };

  return (
    <div
      onClick={() => onSelect(guide.slug)}
      className="group flex flex-col rounded-xl overflow-hidden bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all cursor-pointer shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
        <SafeImage
          src={guide.coverImage}
          alt={guide.title}
          fallbackTheme={guide.gameSlug === 'ghost-of-yotei' ? 'ghost' : 'elden'}
          className="w-full h-full"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-neutral-950/80 backdrop-blur border border-neutral-800 text-[11px] font-mono font-medium text-white">
            {guide.type}
          </span>
          <span
            className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border bg-neutral-950/80 backdrop-blur ${getDifficultyColor(
              guide.difficulty
            )}`}
          >
            {guide.difficulty}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 p-5">
        <div>
          <span className="text-xs font-mono text-neutral-400 mb-1.5 block">
            {guide.gameTitle}
          </span>

          <h3 className="text-base font-bold text-white group-hover:text-rose-200 transition-colors font-display line-clamp-2 mb-2 leading-snug">
            {guide.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-4">
            {guide.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-neutral-800/70 text-xs text-neutral-500">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
            {guide.stepsCount} Steps
          </span>
          <span className="flex items-center gap-1.5 font-mono">
            <Clock className="w-3.5 h-3.5 text-neutral-400" />
            {guide.readTime}
          </span>
        </div>
      </div>
    </div>
  );
};
