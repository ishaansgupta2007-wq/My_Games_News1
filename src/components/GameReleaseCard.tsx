import React, { useState } from 'react';
import { UpcomingGame } from '../types';
import { SafeImage } from './SafeImage';
import { Calendar, Flame, Bell, Check, Sparkles } from 'lucide-react';

interface GameReleaseCardProps {
  game: UpcomingGame;
  onSelectGame?: (slug: string) => void;
}

export const GameReleaseCard: React.FC<GameReleaseCardProps> = ({ game, onSelectGame }) => {
  const [tracked, setTracked] = useState(false);

  const getStatusColor = (status: UpcomingGame['status']) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-700/80';
      case 'Gold Master':
        return 'bg-amber-950/80 text-amber-300 border-amber-700/80';
      case 'Beta Live':
        return 'bg-sky-950/80 text-sky-300 border-sky-700/80';
      default:
        return 'bg-neutral-900 text-neutral-300 border-neutral-700';
    }
  };

  return (
    <div
      onClick={() => onSelectGame?.(game.slug)}
      className="group flex flex-col rounded-2xl overflow-hidden bg-neutral-900/85 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all cursor-pointer shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
        <SafeImage
          src={game.coverImage}
          alt={game.title}
          fallbackTheme={game.slug === 'ghost-of-yotei' ? 'ghost' : 'gta'}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        />

        {/* Status indicator */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider border backdrop-blur-md shadow-md ${getStatusColor(
              game.status
            )}`}
          >
            {game.status}
          </span>
        </div>

        {/* Hype Score Pill */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-neutral-950/90 border border-neutral-800 text-[11px] font-mono text-rose-400 font-bold flex items-center gap-1 shadow-md">
          <Flame className="w-3.5 h-3.5 fill-rose-500/20 text-rose-500" />
          <span>{game.hypeScore}% Anticipation</span>
        </div>
      </div>

      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          {/* Platforms */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2">
            {game.platforms.map((p) => (
              <span
                key={p}
                className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800/80"
              >
                {p}
              </span>
            ))}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-200 transition-colors font-display line-clamp-1 mb-1.5 tracking-tight">
            {game.title}
          </h3>

          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
            {game.description}
          </p>
        </div>

        <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-rose-400 font-mono font-semibold">
            <Calendar className="w-3.5 h-3.5 text-rose-500" />
            <span>{game.releaseDate}</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setTracked(!tracked);
            }}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer border ${
              tracked
                ? 'bg-rose-950/80 text-rose-300 border-rose-800'
                : 'bg-neutral-950 text-neutral-400 hover:text-white border-neutral-800 hover:border-neutral-700'
            }`}
          >
            {tracked ? (
              <>
                <Check className="w-3 h-3 text-rose-400" />
                <span>Tracked</span>
              </>
            ) : (
              <>
                <Bell className="w-3 h-3 text-neutral-500" />
                <span>Track</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
