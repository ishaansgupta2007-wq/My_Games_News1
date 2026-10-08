import React, { useState } from 'react';
import { GUIDES } from '../data/guides';
import { GuideCard } from '../components/GuideCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { Compass, BookOpen } from 'lucide-react';

interface GuidesViewProps {
  onSelectGuide: (slug: string) => void;
}

export const GuidesView: React.FC<GuidesViewProps> = ({ onSelectGuide }) => {
  const [selectedType, setSelectedType] = useState('All');

  const guideTypes = [
    'All',
    'Boss Guide',
    'Beginner Guide',
    'Build',
    'Trophy Guide',
    'Settings Guide',
    'Tips & Tricks',
  ];

  const filteredGuides = GUIDES.filter((g) => {
    if (selectedType === 'All') return true;
    return g.type.toLowerCase() === selectedType.toLowerCase();
  });

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-8">
        <div className="flex items-center gap-2.5 text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 font-semibold">
          <Compass className="w-4 h-4" />
          <span>Walkthroughs & Mastery</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
          Gaming Guides & Strategies
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
          Tactical boss breakdown strategies, Scadutree fragment checklists, 100% Platinum trophy roadmaps, PC performance optimization scripts, and meta character builds.
        </p>

        <div className="pt-6">
          <CategoryFilter
            categories={guideTypes}
            activeCategory={selectedType}
            onSelectCategory={setSelectedType}
          />
        </div>
      </div>

      {/* Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            {filteredGuides.length} Walkthroughs in {selectedType}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} onSelect={onSelectGuide} />
          ))}
        </div>
      </div>
    </div>
  );
};
