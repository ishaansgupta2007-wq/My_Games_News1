import React from 'react';
import { Flame, Twitter, Youtube, Disc as Discord, Rss, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { label: 'PlayStation 5', path: '/news?cat=PlayStation' },
    { label: 'Xbox Series X|S', path: '/news?cat=Xbox' },
    { label: 'PC Gaming', path: '/news?cat=PC' },
    { label: 'Nintendo Switch', path: '/news?cat=Nintendo' },
    { label: 'Hardware Lab', path: '/hardware' },
    { label: 'Esports Circuit', path: '/esports' },
  ];

  const editorialLinks = [
    { label: 'All Reviews', path: '/reviews' },
    { label: 'Game Guides', path: '/guides' },
    { label: 'Upcoming Releases', path: '/upcoming-games' },
    { label: 'Scoring Policy', path: '/reviews' },
    { label: 'Archive Search', path: '/search' },
  ];

  const aboutLinks = [
    { label: 'About GamePulse', path: '/' },
    { label: 'Editorial Independence', path: '/' },
    { label: 'Ethics & Disclosure', path: '/' },
    { label: 'Privacy Policy', path: '/' },
    { label: 'Terms of Service', path: '/' },
  ];

  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-900 text-neutral-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => {
                onNavigate('/');
                scrollToTop();
              }}
              className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
            >
              <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 overflow-hidden shadow-sm">
                <img
                  src="/images/e08fea0415b781b60747fb4d5200d301.webp"
                  alt="GamePulse Emblem"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </span>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Game<span className="text-rose-500">Pulse</span>
              </span>
            </button>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Your daily pulse on gaming. Providing fearless editorial critique, breaking industry reporting, tactical guides, and deep hardware benchmarks for dedicated gamers worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800/80 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="GamePulse Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800/80 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="GamePulse YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800/80 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="GamePulse Discord"
              >
                <Discord className="w-4 h-4" />
              </a>
              <a
                href="/rss"
                onClick={(e) => {
                  e.preventDefault();
                  alert('GamePulse RSS feed XML is active.');
                }}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800/80 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="RSS Feed"
              >
                <Rss className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platforms & Sections */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200 mb-4 font-mono">
              Platforms
            </h4>
            <ul className="space-y-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <button
                    onClick={() => {
                      onNavigate(cat.path);
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200 mb-4 font-mono">
              Editorial
            </h4>
            <ul className="space-y-2.5 text-sm">
              {editorialLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      onNavigate(item.path);
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Publication */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200 mb-4 font-mono">
              Publication
            </h4>
            <ul className="space-y-2.5 text-sm">
              {aboutLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      onNavigate(item.path);
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-12 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[11px] text-neutral-400">EDITION: GLOBAL (ENGLISH)</span>
            <span aria-hidden="true" className="text-neutral-800">·</span>
            <span className="text-neutral-500">VERIFIED EDITORIAL STANDARDS</span>
            <span aria-hidden="true" className="text-neutral-800">·</span>
            <span>© {new Date().getFullYear()} GamePulse Media Inc.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-neutral-500">All game assets & trademarks belong to their respective publishers.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0 font-mono text-[11px]"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
