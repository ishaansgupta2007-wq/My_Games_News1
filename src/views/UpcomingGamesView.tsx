import React, { useState } from 'react';
import { UPCOMING_GAMES } from '../data/upcomingGames';
import { GameReleaseCard } from '../components/GameReleaseCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { Calendar, Flame } from 'lucide-react';

interface UpcomingGamesViewProps {
  onSelectGame: (slug: string) => void;
}

export const UpcomingGamesView: React.FC<UpcomingGamesViewProps> = ({ onSelectGame }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('All');

  const platforms = ['All', 'PlayStation 5', 'Xbox Series X|S', 'PC', 'Nintendo Switch'];

  const filteredGames = UPCOMING_GAMES.filter((g) => {
    if (selectedPlatform === 'All') return true;
    return g.platforms.some((p) => p.toLowerCase().includes(selectedPlatform.toLowerCase()));
  });

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-8">
        <div className="flex items-center gap-2.5 text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 font-semibold">
          <Calendar className="w-4 h-4" />
          <span>Release Schedule</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
          Upcoming Game Releases
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
          Track confirmed launch dates, beta schedules, platform status, and community anticipation scores across the most heavily anticipated AAA and indie titles of 2026 and 2027.
        </p>

        <div className="pt-6">
          <CategoryFilter
            categories={platforms}
            activeCategory={selectedPlatform}
            onSelectCategory={setSelectedPlatform}
          />
        </div>
      </div>

      {/* Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            {filteredGames.length} Scheduled Releases
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameReleaseCard key={game.id} game={game} onSelectGame={onSelectGame} />
          ))}
        </div>
      </div>
    </div>
  );
};
