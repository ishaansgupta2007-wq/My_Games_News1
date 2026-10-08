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

  const [isDark, setIsDark] = useState<boolean>(true);

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

  const handleSelectArticle = (slug: string) => {
    navigate(`/news/${slug}`);
  };

  const handleSelectReview = (slug: string) => {
    // Navigate to article if matching article exists or review path
    const matchingArticle = ARTICLES.find((a) => a.slug === slug || a.id === slug);
    if (matchingArticle) {
      navigate(`/news/${matchingArticle.slug}`);
    } else {
      // Find review and show in detail or review view
      navigate(`/reviews/${slug}`);
    }
  };

  const handleSelectGuide = (slug: string) => {
    const matchingArticle = ARTICLES.find((a) => a.slug === slug || a.id === slug);
    if (matchingArticle) {
      navigate(`/news/${matchingArticle.slug}`);
    } else {
      navigate(`/guides/${slug}`);
    }
  };

  const handleSelectHardware = (slug: string) => {
    const matchingArticle = ARTICLES.find((a) => a.slug.includes(slug) || a.tags.includes('Hardware'));
    if (matchingArticle) {
      navigate(`/news/${matchingArticle.slug}`);
    } else {
      navigate(`/hardware/${slug}`);
    }
  };

  const handleSelectGame = (slug: string) => {
    navigate(`/games/${slug}`);
  };

  // Route Resolver
  const renderCurrentView = () => {
    const path = currentPath;

    // Homepage
    if (path === '/' || path === '') {
      document.title = 'GamePulse | Your Daily Pulse on Gaming';
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

    // Article Details (/news/:slug or /guides/:slug or /reviews/:slug)
    if (path.startsWith('/news/') || path.startsWith('/reviews/') || path.startsWith('/guides/') || path.startsWith('/hardware/')) {
      const parts = path.split('/');
      const slug = parts[2];

      const foundArticle = ARTICLES.find((a) => a.slug === slug || a.id === slug);
      if (foundArticle) {
        document.title = `${foundArticle.title} | GamePulse`;
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
        // Construct article representation
        const reviewArticle = ARTICLES.find((a) => a.gameSlug === foundReview.gameSlug) || ARTICLES[0];
        document.title = `${foundReview.gameTitle} Review | GamePulse`;
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
        document.title = `${foundGuide.title} | GamePulse`;
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
        document.title = `${foundProduct.name} Benchmark Review | GamePulse`;
        return (
          <ArticleDetailView
            article={hwArticle}
            onNavigate={navigate}
            onSelectArticle={handleSelectArticle}
          />
        );
      }
    }

    // Game Profile (/games/:slug)
    if (path.startsWith('/games/')) {
      const slug = path.split('/')[2];
      const foundGame = GAMES.find((g) => g.slug === slug || g.id === slug);
      if (foundGame) {
        document.title = `${foundGame.title} - Game Hub & News | GamePulse`;
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

    // Category Pages
    if (path === '/news' || path.startsWith('/news?')) {
      document.title = 'Gaming News & Reports | GamePulse';
      return <NewsView onSelectArticle={handleSelectArticle} />;
    }

    if (path === '/reviews') {
      document.title = 'Scored Game Reviews | GamePulse';
      return <ReviewsView onSelectReview={handleSelectReview} />;
    }

    if (path === '/guides') {
      document.title = 'Tactical Guides & Walkthroughs | GamePulse';
      return <GuidesView onSelectGuide={handleSelectGuide} />;
    }

    if (path === '/upcoming-games') {
      document.title = 'Upcoming Game Releases & Radar | GamePulse';
      return <UpcomingGamesView onSelectGame={handleSelectGame} />;
    }

    if (path === '/hardware') {
      document.title = 'Hardware Lab & Tech Benchmarks | GamePulse';
      return <HardwareView onSelectHardware={handleSelectHardware} />;
    }

    if (path === '/esports') {
      document.title = 'Esports Circuit & Meta Analysis | GamePulse';
      return <EsportsView onSelectArticle={handleSelectArticle} />;
    }

    if (path === '/search') {
      document.title = 'Search Articles & Database | GamePulse';
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

    // 404 Fallback
    document.title = 'Page Not Found | GamePulse';
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
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />

      {/* Back to top helper */}
      <BackToTop />
    </div>
  );
}
