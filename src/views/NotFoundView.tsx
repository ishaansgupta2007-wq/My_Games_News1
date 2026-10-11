import React from 'react';
import { Ghost, Home, ArrowLeft } from 'lucide-react';

interface NotFoundViewProps {
  onNavigate: (path: string) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onNavigate }) => {
  return (
    <div className="py-24 text-center max-w-md mx-auto space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mx-auto flex items-center justify-center text-rose-500 shadow-xs dark:shadow-none">
        <Ghost className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono text-rose-600 dark:text-rose-400 uppercase tracking-widest font-bold">
          Error 404
        </span>
        <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white font-display">
          Area Beyond The Map
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          The story, review, or page you’re looking for has been moved, archived, or despawned by the engine.
        </p>
      </div>

      <div className="pt-4 flex items-center justify-center gap-3">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-semibold text-xs hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </button>
        <button
          onClick={() => onNavigate('/search')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold text-xs hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Search Archives</span>
        </button>
      </div>
    </div>
  );
};
