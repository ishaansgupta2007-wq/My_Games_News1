import React from 'react';
import { ARTICLES } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { Trophy, Crosshair } from 'lucide-react';

interface EsportsViewProps {
  onSelectArticle: (slug: string) => void;
}

export const EsportsView: React.FC<EsportsViewProps> = ({ onSelectArticle }) => {
  const esportsArticles = ARTICLES.filter(
    (a) => a.category === 'Esports' || a.tags.some((t) => t.toLowerCase().includes('esports') || t.toLowerCase().includes('competitive') || t.toLowerCase().includes('call of duty') || t.toLowerCase().includes('fortnite'))
  );

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <div className="flex items-center gap-2.5 text-xs font-mono text-rose-500 dark:text-rose-400 uppercase tracking-wider mb-2 font-semibold">
          <Trophy className="w-4 h-4" />
          <span>Competitive Circuit</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white font-display tracking-tight mb-4">
          Esports & Competitive Meta
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mb-6">
          Tournament breakdowns, live-service balance patches, weapon meta analyses, and tactical guides for high-ELO competitive players across Counter-Strike, Call of Duty, and Fortnite.
        </p>

        {/* Esports Arena Banner */}
        <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md relative aspect-[21/9] sm:aspect-[24/9] w-full bg-neutral-950">
          <img
            src="/images/esports-futuristic-arena.jpg"
            alt="Esports Championship Stage and Competitive Meta Arena"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/25 to-transparent pointer-events-none flex items-end p-4 sm:p-6">
            <span className="text-xs font-mono text-rose-300 font-semibold tracking-wider uppercase">
              Championship Live Wire · Global Competitive Circuit
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {esportsArticles.map((article) => (
          <ArticleCard key={article.id} article={article} onSelect={onSelectArticle} />
        ))}
      </div>
    </div>
  );
};
