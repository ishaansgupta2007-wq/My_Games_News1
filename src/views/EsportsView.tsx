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
      <div className="border-b border-neutral-800 pb-8">
        <div className="flex items-center gap-2.5 text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 font-semibold">
          <Trophy className="w-4 h-4" />
          <span>Competitive Circuit</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
          Esports & Competitive Meta
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
          Tournament breakdowns, live-service balance patches, weapon meta analyses, and tactical guides for high-ELO competitive players across Counter-Strike, Call of Duty, and Fortnite.
        </p>
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
