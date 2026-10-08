import React, { useState } from 'react';
import { REVIEWS } from '../data/reviews';
import { ReviewCard } from '../components/ReviewCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { Star, ShieldCheck } from 'lucide-react';

interface ReviewsViewProps {
  onSelectReview: (slug: string) => void;
}

export const ReviewsView: React.FC<ReviewsViewProps> = ({ onSelectReview }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('All');

  const platforms = ['All', 'PlayStation 5', 'PC'];

  const filteredReviews = REVIEWS.filter((rev) => {
    if (selectedPlatform === 'All') return true;
    return rev.platform.toLowerCase().includes(selectedPlatform.toLowerCase());
  });

  const featured = filteredReviews[0] || REVIEWS[0];
  const otherReviews = filteredReviews.slice(1);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-8">
        <div className="flex items-center gap-2.5 text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 font-semibold">
          <Star className="w-4 h-4 fill-rose-500/20" />
          <span>Independent Criticism</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
          Game Reviews
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
          Comprehensive, zero-compromise critical evaluations. Every review includes explicit platform testing specs, frame pacing analysis, and unbiased numerical scores from 1 to 10.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CategoryFilter
            categories={platforms}
            activeCategory={selectedPlatform}
            onSelectCategory={setSelectedPlatform}
          />
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 bg-neutral-900/60 px-3 py-1.5 rounded-lg border border-neutral-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>GamePulse Review Guidelines Applied</span>
          </div>
        </div>
      </div>

      {/* Featured Review */}
      {featured && (
        <div>
          <ReviewCard review={featured} onSelect={onSelectReview} featured={true} />
        </div>
      )}

      {/* Reviews Grid */}
      <div>
        <h2 className="text-xl font-bold text-white font-display mb-6">
          Latest Evaluated Titles ({filteredReviews.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherReviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} onSelect={onSelectReview} />
          ))}
        </div>
      </div>

      {/* Scoring Rubric Reference */}
      <div className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800/80 text-xs text-neutral-400">
        <h3 className="font-bold text-neutral-200 font-display mb-2 text-sm">Our 10-Point Scoring Scale</h3>
        <p className="leading-relaxed mb-3">
          At GamePulse, a 7.0 is a genuinely good game that dedicated genre fans will enjoy. 9.0+ is reserved for generation-defining titles. We never inflate scores for publisher relations.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[11px] pt-2 border-t border-neutral-800">
          <div><strong className="text-emerald-400">9.0 – 10.0:</strong> Essential Masterpiece</div>
          <div><strong className="text-sky-400">8.0 – 8.9:</strong> Great / Highly Recommended</div>
          <div><strong className="text-amber-400">7.0 – 7.9:</strong> Solid / Worth Playing</div>
          <div><strong className="text-rose-400">&lt; 7.0:</strong> Flawed or Mediocre</div>
        </div>
      </div>
    </div>
  );
};
