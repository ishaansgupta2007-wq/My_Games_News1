/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

import { HomeView } from './views/HomeView';
import { NewsView } from './views/NewsView';
import { ReviewsView } from './views/ReviewsView';
import { GuidesView } from './views/GuidesView';
import { UpcomingGamesView } from './views/UpcomingGamesView';
import { HardwareView } from './views/HardwareView';
import { EsportsView } from './views/EsportsView';
import { ArticleDetailView } from './views/ArticleDetailView';
import { GameDetailView } from './views/GameDetailView';
import { SearchView } from './views/SearchView';
import { NotFoundView } from './views/NotFoundView';

import { ARTICLES } from './data/articles';
import { REVIEWS } from './data/reviews';
import { GUIDES } from './data/guides';
import { GAMES } from './data/games';
import { HARDWARE_PRODUCTS } from './data/hardware';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gamepulse_theme');
      if (saved) return saved === 'dark';
      return true;
    }
    return true;
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('gamepulse_theme', next ? 'dark' : 'light');
      }
      return next;
    });
  };

  // Sync with browser URL changes (popstate)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync dark class on <html>
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const findArticle = (slugOrId: string) => {
    const clean = slugOrId.replace(/^\//, '').replace(/\/$/, '').toLowerCase();
    return ARTICLES.find(
      (a) =>
        a.slug.toLowerCase() === clean ||
        a.id.toLowerCase() === clean ||
        a.aliases?.some((alias) => alias.toLowerCase() === clean)
    );
  };

  const handleSelectArticle = (slug: string) => {
    const found = findArticle(slug);
    navigate(found ? `/${found.slug}` : `/${slug}`);
  };

  const handleSelectReview = (slug: string) => {
    // Navigate to unique article path if matching article exists or review path
    const matchingArticle = findArticle(slug);
    if (matchingArticle) {
      navigate(`/${matchingArticle.slug}`);
    } else {
      navigate(`/reviews/${slug}`);
    }
  };

  const handleSelectGuide = (slug: string) => {
    const matchingArticle = findArticle(slug);
    if (matchingArticle) {
      navigate(`/${matchingArticle.slug}`);
    } else {
      navigate(`/guides/${slug}`);
    }
  };

  const handleSelectHardware = (slug: string) => {
    const matchingArticle = ARTICLES.find((a) => a.slug.includes(slug) || a.tags.includes('Hardware'));
    if (matchingArticle) {
      navigate(`/${matchingArticle.slug}`);
    } else {
      navigate(`/hardware/${slug}`);
    }
  };

  const handleSelectGame = (slug: string) => {
    navigate(`/games/${slug}`);
  };

  // SEO helper to update title, meta description, and social tags dynamically
  const applySEO = (title: string, description: string) => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);
  };

  // Route Resolver
  const renderCurrentView = () => {
    const path = currentPath;
    const cleanSlug = path.replace(/^\//, '').replace(/\/$/, '').split('?')[0];

    // Homepage
    if (path === '/' || path === '') {
      applySEO(
        'Gaming News & Latest Video Game Updates | GamePulse',
        "Explore authoritative gaming news, unbiased scored reviews, in-depth technical guides, and GPU benchmarks. Stay ahead with GamePulse's daily industry pulse."
      );
      return (
        <HomeView
          onNavigate={navigate}
          onSelectArticle={handleSelectArticle}
          onSelectReview={handleSelectReview}
          onSelectGuide={handleSelectGuide}
          onSelectHardware={handleSelectHardware}
          onSelectGame={handleSelectGame}
        />
      );
    }

    // Category Pages
    if (path === '/news' || path.startsWith('/news?')) {
      applySEO(
        'Gaming News: Latest Video Game Reports | GamePulse',
        'Catch up on breaking video game news and industry scoops. Our correspondents report the latest gaming updates across PlayStation, Xbox, PC, and Switch.'
      );
      return <NewsView onSelectArticle={handleSelectArticle} />;
    }

    if (path === '/reviews') {
      applySEO(
        'Video Game Reviews & Scored Lab Tests | GamePulse',
        'Read rigorous, scored video game reviews tested across graphics, gameplay, performance, and replayability. Find your next masterpiece with GamePulse ratings.'
      );
      return <ReviewsView onSelectReview={handleSelectReview} />;
    }

    if (path === '/guides') {
      applySEO(
        'Gaming Guides, Walkthroughs & Strategies | GamePulse',
        'Master challenging boss battles and optimize settings with detailed gaming guides, interactive walkthroughs, and tactical strategies from expert players.'
      );
      return <GuidesView onSelectGuide={handleSelectGuide} />;
    }

    if (path === '/upcoming-games') {
      applySEO(
        'Upcoming Video Games: 2026 Release Radar | GamePulse',
        'Track the most anticipated upcoming video games across 2026 and 2027. Browse confirmed release dates, trailers, platforms, and radar analysis on GamePulse.'
      );
      return <UpcomingGamesView onSelectGame={handleSelectGame} />;
    }

    if (path === '/hardware') {
      applySEO(
        'Gaming Hardware Reviews & GPU Benchmarks | GamePulse',
        'Browse expert gaming hardware reviews, GPU benchmarks, OLED displays, and battlestation peripherals tested for competitive latency and thermal limits.'
      );
      return <HardwareView onSelectHardware={handleSelectHardware} />;
    }

    if (path === '/esports') {
      applySEO(
        'Esports News, Tournaments & Meta Guides | GamePulse',
        'Stay competitive with daily esports news, tournament breakdowns, patch balance analysis, and pro circuit rosters across Fortnite, Valorant, and Counter-Strike.'
      );
      return <EsportsView onSelectArticle={handleSelectArticle} />;
    }

    if (path === '/search') {
      applySEO(
        'Search Gaming News, Reviews & Hardware | GamePulse',
        'Instantly search gaming archives for breaking stories, scored game reviews, boss walkthroughs, and hardware benchmarks across the complete GamePulse database.'
      );
      return (
        <SearchView
          onSelectArticle={handleSelectArticle}
          onSelectReview={handleSelectReview}
          onSelectGuide={handleSelectGuide}
          onSelectHardware={handleSelectHardware}
          onSelectGame={handleSelectGame}
        />
      );
    }

    // Game Profile (/games/:slug)
    if (path.startsWith('/games/')) {
      const slug = path.split('/')[2];
      const foundGame = GAMES.find((g) => g.slug === slug || g.id === slug);
      if (foundGame) {
        const shortName = foundGame.title.replace(' Remastered', '').split(':')[0].split('&')[0].trim();
        applySEO(
          `${shortName}: Game Hub, News & Guides | GamePulse`,
          `Discover complete coverage of ${foundGame.title} on GamePulse. Read confirmed release dates, platforms, gameplay trailers, latest news reports, and expert guides.`
        );
        return (
          <GameDetailView
            game={foundGame}
            onNavigate={navigate}
            onSelectArticle={handleSelectArticle}
            onSelectReview={handleSelectReview}
            onSelectGuide={handleSelectGuide}
            onSelectGame={handleSelectGame}
          />
        );
      }
    }

    // Prefixed Article Details (/news/:slug, /reviews/:slug, /guides/:slug, /hardware/:slug)
    if (path.startsWith('/news/') || path.startsWith('/reviews/') || path.startsWith('/guides/') || path.startsWith('/hardware/')) {
      const parts = path.split('/');
      const slug = parts[2];

      const foundArticle = findArticle(slug);
      if (foundArticle) {
        return (
          <ArticleDetailView
            article={foundArticle}
            onNavigate={navigate}
            onSelectArticle={handleSelectArticle}
          />
        );
      }

      // If review with separate model
      const foundReview = REVIEWS.find((r) => r.slug === slug || r.id === slug);
      if (foundReview) {
        const reviewArticle = ARTICLES.find((a) => a.gameSlug === foundReview.gameSlug) || ARTICLES[0];
        return (
          <ArticleDetailView
            article={reviewArticle}
            onNavigate={navigate}
            onSelectArticle={handleSelectArticle}
          />
        );
      }

      // If guide with separate model
      const foundGuide = GUIDES.find((g) => g.slug === slug || g.id === slug);
      if (foundGuide) {
        const guideArticle = ARTICLES.find((a) => a.gameSlug === foundGuide.gameSlug) || ARTICLES[1];
        return (
          <ArticleDetailView
            article={guideArticle}
            onNavigate={navigate}
            onSelectArticle={handleSelectArticle}
          />
        );
      }

      // If hardware product
      const foundProduct = HARDWARE_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
      if (foundProduct) {
        const hwArticle = ARTICLES.find((a) => a.id === 'rtx-5090-benchmarks-breakdown' || a.category === 'Hardware') || ARTICLES[3];
        return (
          <ArticleDetailView
            article={hwArticle}
            onNavigate={navigate}
            onSelectArticle={handleSelectArticle}
          />
        );
      }
    }

    // Direct Unique Article URL (e.g. /intergalactic-heretic-prophet, /gta-6-news, /fortnite-updates)
    const directArticle = findArticle(cleanSlug);
    if (directArticle) {
      return (
        <ArticleDetailView
          article={directArticle}
          onNavigate={navigate}
          onSelectArticle={handleSelectArticle}
        />
      );
    }

    // Direct game lookup (e.g., /gta-6 or /ghost-of-yotei)
    const directGame = GAMES.find(
      (g) => g.slug.toLowerCase() === cleanSlug.toLowerCase() || g.id.toLowerCase() === cleanSlug.toLowerCase()
    );
    if (directGame) {
      const shortName = directGame.title.replace(' Remastered', '').split(':')[0].split('&')[0].trim();
      applySEO(
        `${shortName}: Game Hub, News & Guides | GamePulse`,
        `Discover complete coverage of ${directGame.title} on GamePulse. Read confirmed release dates, platforms, gameplay trailers, latest news reports, and expert guides.`
      );
      return (
        <GameDetailView
          game={directGame}
          onNavigate={navigate}
          onSelectArticle={handleSelectArticle}
          onSelectReview={handleSelectReview}
          onSelectGuide={handleSelectGuide}
          onSelectGame={handleSelectGame}
        />
      );
    }

    // 404 Fallback
    applySEO(
      'Page Not Found: 404 Beyond The Map | GamePulse',
      'The requested page could not be found beyond the map boundary. Return to the GamePulse homepage for breaking gaming news, reviews, and hardware guides.'
    );
    return <NotFoundView onNavigate={navigate} />;
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      isDark ? 'bg-neutral-950 text-neutral-100' : 'bg-neutral-50 text-neutral-900'
    }`}>
      {/* Top Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} isDark={isDark} />

      {/* Back to top helper */}
      <BackToTop />
    </div>
  );
}
