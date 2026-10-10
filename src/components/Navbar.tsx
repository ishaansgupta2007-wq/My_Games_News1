import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Sun, Moon, Flame } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  isDark,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'News', path: '/news' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Guides', path: '/guides' },
    { label: 'Upcoming', path: '/upcoming-games' },
    { label: 'Hardware', path: '/hardware' },
    { label: 'Esports', path: '/esports' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-neutral-950/90 backdrop-blur-md border-neutral-800/80 shadow-lg shadow-black/20'
            : 'bg-neutral-950 border-neutral-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark with uploaded logo asset */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2.5 group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded"
          >
            <span className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 overflow-hidden group-hover:border-rose-500/50 transition-colors shadow-sm">
              <img
                src="/images/logo_hero_image.jpg"
                alt="GamePulse Emblem"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </span>
            <span className="text-xl font-bold tracking-tight text-white font-display group-hover:text-neutral-200 transition-colors whitespace-nowrap">
              Game<span className="text-rose-500">Pulse</span>
            </span>
          </button>

          {/* Zone 2: Primary Clean Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => {
              const isActive =
                item.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(item.path);

              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer rounded-md whitespace-nowrap ${
                    isActive
                      ? 'text-white bg-neutral-900 border border-neutral-800'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (Search, Theme, Mobile toggle) */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleNavClick('/search')}
              title="Search articles, reviews & hardware"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-400 hover:text-white bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label="Open Search"
            >
              <Search className="w-3.5 h-3.5 text-neutral-500" />
              <span>Search archives</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-neutral-950 text-neutral-400 border border-neutral-800 rounded">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => handleNavClick('/search')}
              title="Search articles, reviews & hardware"
              className="sm:hidden p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors cursor-pointer"
              aria-label="Open Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onToggleTheme}
              title={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
              className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg border border-transparent hover:border-neutral-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 z-30 bg-neutral-950/98 border-b border-neutral-800 backdrop-blur-lg px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => {
              const isActive =
                item.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(item.path);

              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors text-left cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900 text-white font-semibold'
                      : 'text-neutral-300 hover:bg-neutral-900/60 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-neutral-800/80">
              <button
                onClick={() => handleNavClick('/search')}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-neutral-900/70 text-neutral-300 hover:text-white text-sm"
              >
                <Search className="w-4 h-4 text-neutral-400" />
                <span>Search GamePulse archives...</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
