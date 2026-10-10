import React, { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTheme?: 'ghost' | 'elden' | 'gow' | 'tlou' | 'hardware' | 'cyber' | 'switch' | 'gta' | 'esports' | 'intergalactic' | 'resident_evil' | 'wolverine' | 'tomb_raider' | 'standard';
  priority?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTheme = 'standard',
  priority = false,
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Return thematic artistic SVG/CSS background if image fails to load
  const renderFallback = () => {
    switch (fallbackTheme) {
      case 'intergalactic':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-indigo-950/80 to-slate-950 flex flex-col justify-end p-6 border border-cyan-500/20 overflow-hidden">
            <div className="absolute right-10 top-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex items-center gap-2 text-cyan-300 text-xs tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Intergalactic: The Heretic Prophet · 2027</span>
            </div>
          </div>
        );
      case 'resident_evil':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-rose-950/80 to-black flex flex-col justify-end p-6 border border-rose-600/20 overflow-hidden">
            <div className="absolute left-6 top-6 w-64 h-64 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex items-center gap-2 text-rose-300 text-xs tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>Resident Evil: Veronica · Claire Redfield</span>
            </div>
          </div>
        );
      case 'wolverine':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/80 via-neutral-950 to-red-950/80 flex flex-col justify-end p-6 border border-amber-500/20 overflow-hidden">
            <div className="absolute left-0 top-0 w-60 h-60 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute right-0 bottom-0 w-60 h-60 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex items-center gap-2 text-amber-300 text-xs tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Marvel’s Wolverine & Spider-Man · Insomniac</span>
            </div>
          </div>
        );
      case 'tomb_raider':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-950/70 to-slate-950 flex flex-col justify-end p-6 border border-teal-500/20 overflow-hidden">
            <div className="absolute right-8 top-8 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex items-center gap-2 text-teal-300 text-xs tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>Tomb Raider: Legacy of Atlantis · Lara Croft</span>
            </div>
          </div>
        );
      case 'ghost':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-amber-950/60 to-stone-900 flex flex-col justify-end p-6 border border-amber-500/10 overflow-hidden">
            <div className="absolute -right-12 -top-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 flex items-center gap-2 text-amber-300 text-xs tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Ghost of Yōtei · 1603 Hokkaido</span>
            </div>
          </div>
        );
      case 'elden':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-amber-900/40 to-neutral-900 flex flex-col justify-end p-6 border border-amber-500/10 overflow-hidden">
            <div className="absolute -left-12 -top-12 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex items-center gap-2 text-amber-200 text-xs tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Realm of Shadow · Shadow of the Erdtree</span>
            </div>
          </div>
        );
      case 'gow':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-sky-950/50 to-neutral-950 flex flex-col justify-end p-6 border border-sky-500/10 overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 flex items-center gap-2 text-sky-300 text-xs tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Nine Realms · Tactical Combat</span>
            </div>
          </div>
        );
      case 'tlou':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-amber-950/50 to-neutral-950 flex flex-col justify-end p-6 border border-amber-700/20 overflow-hidden">
            <div className="relative z-10 flex items-center gap-2 text-amber-300 text-xs tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Jackson & Seattle · Remastered</span>
            </div>
          </div>
        );
      case 'hardware':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-slate-900 to-neutral-900 flex flex-col justify-end p-6 border border-neutral-800 overflow-hidden">
            <div className="absolute right-0 top-0 w-56 h-56 bg-neutral-800/20 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 flex items-center gap-2 text-neutral-300 text-xs tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-neutral-400" />
              <span>Hardware Lab · Performance Engineering</span>
            </div>
          </div>
        );
      case 'gta':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-rose-950/40 to-neutral-950 flex flex-col justify-end p-6 border border-rose-500/10 overflow-hidden">
            <div className="relative z-10 flex items-center gap-2 text-rose-300 text-xs tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>Leonida · Vice City Metro</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex flex-col justify-end p-6 border border-neutral-800/80">
            <div className="relative z-10 flex items-center gap-2 text-neutral-400 text-xs tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
              <span>GamePulse Editorial</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 ${className}`}>
      {!error && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      {(error || !loaded) && renderFallback()}
    </div>
  );
};
