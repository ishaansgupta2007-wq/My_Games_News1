import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { SafeImage } from './SafeImage';
import { ArrowRight, Clock, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroArticleProps {
  article: Article;
  featuredArticles?: Article[];
  onSelect: (slug: string) => void;
}

export const HeroArticle: React.FC<HeroArticleProps> = ({
  article,
  featuredArticles = [],
  onSelect,
}) => {
  const stories = featuredArticles.length > 0 ? featuredArticles : [article];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Keep in bounds
  const currentStory = stories[currentIndex] || article;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Primary Hero Stage */}
      <article
        onClick={() => onSelect(currentStory.slug)}
        className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800/90 cursor-pointer shadow-2xl transition-all duration-300 hover:border-neutral-700/80"
      >
        <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px]">
          <SafeImage
            key={currentStory.id}
            src={currentStory.coverImage}
            alt={currentStory.title}
            fallbackTheme={currentStory.fallbackTheme}
            priority={true}
            className="absolute inset-0 w-full h-full scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Cinematic Multi-stop Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent pointer-events-none" />

          {/* Navigation Controls (Top-Right) */}
          {stories.length > 1 && (
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-2">
              <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-400 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-neutral-800">
                Story {currentIndex + 1} of {stories.length}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous Cover Story"
                className="w-9 h-9 rounded-xl bg-neutral-900/80 backdrop-blur-md border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Cover Story"
                className="w-9 h-9 rounded-xl bg-neutral-900/80 backdrop-blur-md border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Content Box */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14 z-10 max-w-5xl">
            {/* Editorial Kicker & Live Status */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono tracking-wider uppercase mb-3">
              <span className="px-2.5 py-1 rounded bg-rose-500 text-white font-bold text-[10px] tracking-widest">
                COVER STORY
              </span>
              <span className="text-neutral-400 font-semibold">{currentStory.category}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">{currentStory.subCategory || 'Exclusive Preview'}</span>
              {currentStory.isBreaking && (
                <>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span className="flex items-center gap-1.5 text-rose-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                    Live Wire
                  </span>
                </>
              )}
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-[1.08] mb-4 group-hover:text-neutral-100 transition-colors [text-wrap:balance]">
              {currentStory.title}
            </h1>

            {/* Subtitle / Excerpt */}
            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 font-sans line-clamp-2 md:line-clamp-3 mb-6 max-w-3xl leading-relaxed">
              {currentStory.subtitle || currentStory.excerpt}
            </p>

            {/* Quick Key Takeaways / Tags Preview */}
            <div className="hidden sm:flex flex-wrap items-center gap-2.5 text-xs text-neutral-400 mb-6 font-mono">
              <span className="text-neutral-500">Key Focus:</span>
              {currentStory.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded bg-neutral-900/80 border border-neutral-800 text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Author Byline & CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800/80">
              <div className="flex items-center gap-3">
                <img
                  src={currentStory.author.avatar}
                  alt={currentStory.author.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-neutral-800 shadow-md"
                />
                <div className="text-xs">
                  <span className="font-semibold text-white block">By {currentStory.author.name}</span>
                  <div className="flex items-center gap-2 text-neutral-400 mt-0.5 font-mono text-[11px]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-neutral-500" />
                      {currentStory.publishedAt}
                    </span>
                    <span aria-hidden="true" className="text-neutral-600">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-neutral-500" />
                      {currentStory.readTime}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(currentStory.slug);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-neutral-950 font-bold text-xs sm:text-sm hover:bg-neutral-200 transition-all shadow-xl cursor-pointer group/btn"
              >
                <span>Read Full Investigation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Featured Story Quick Selector Bar */}
      {stories.length > 1 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          {stories.map((st, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={st.id}
                onClick={() => setCurrentIndex(idx)}
                className={`flex items-center gap-3 p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 border-rose-500/60 shadow-lg'
                    : 'bg-neutral-950/60 border-neutral-800/80 hover:bg-neutral-900/60 hover:border-neutral-700'
                }`}
              >
                <div className="relative w-14 h-12 rounded-lg overflow-hidden shrink-0 bg-neutral-900 border border-neutral-800">
                  <SafeImage
                    src={st.coverImage}
                    alt={st.title}
                    fallbackTheme={st.fallbackTheme}
                    className="w-full h-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 ring-2 ring-rose-500 ring-inset pointer-events-none" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-0.5">
                    <span className={isActive ? 'text-rose-400 font-semibold' : ''}>
                      {idx === 0 ? 'Lead Story' : `Feature ${idx + 1}`}
                    </span>
                  </div>
                  <h4 className="text-xs font-semibold text-white line-clamp-1 truncate">
                    {st.title.split('—')[0].split(':')[0]}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
