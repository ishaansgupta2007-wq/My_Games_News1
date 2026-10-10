import React from 'react';
import { Article } from '../types';
import { ARTICLES } from '../data/articles';
import { SafeImage } from '../components/SafeImage';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ReadingProgress } from '../components/ReadingProgress';
import { TableOfContents } from '../components/TableOfContents';
import { ShareButtons } from '../components/ShareButtons';
import { CommentsSection } from '../components/CommentsSection';
import { ArticleCard } from '../components/ArticleCard';
import { Clock, Calendar, MessageSquare, Play, Info, AlertTriangle, CheckCircle, ArrowLeft } from 'lucide-react';

interface ArticleDetailViewProps {
  article: Article;
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({
  article,
  onNavigate,
  onSelectArticle,
}) => {
  // Update document title and SEO meta description
  React.useEffect(() => {
    const pageTitle = article.metaTitle || `${article.title} | GamePulse`;
    document.title = pageTitle;

    if (article.metaDescription) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', article.metaDescription);
    }
  }, [article]);

  const tocItems = article.content.sections.map((s) => ({
    id: s.id,
    heading: s.heading,
  }));

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id)
    .filter((a) => a.category === article.category || a.tags.some((t) => article.tags.includes(t)))
    .slice(0, 3);

  const fallbackRelated = relatedArticles.length > 0 ? relatedArticles : ARTICLES.slice(1, 4);

  return (
    <div className="relative">
      <ReadingProgress />

      {/* Back & Breadcrumbs */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Breadcrumbs
          items={[
            { label: article.category, path: `/news?cat=${article.category}` },
            { label: article.title },
          ]}
          onNavigate={onNavigate}
        />
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer self-start sm:self-auto"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Feed</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="mb-10 max-w-4xl">
        {/* Category & Read Time (Clean unboxed text) */}
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-rose-400 mb-3">
          <span>{article.category}</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>{article.subCategory || 'Editorial'}</span>
          {article.isBreaking && (
            <>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-amber-400 font-bold">Breaking</span>
            </>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.12] mb-4 [text-wrap:balance]">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="text-lg sm:text-xl text-neutral-300 font-serif italic mb-6 leading-relaxed">
            {article.subtitle}
          </p>
        )}

        {/* Byline Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-800/80 text-xs">
          <div className="flex items-center gap-3">
            {article.author?.avatar && (
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover border border-neutral-700"
              />
            )}
            <div>
              <span className="font-semibold text-white block text-sm">
                By {article.author?.name || 'Staff Writer'}
              </span>
              <span className="text-neutral-400">{article.author?.role || 'Contributor'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-neutral-400 font-mono text-[11px]">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.publishedAt}</span>
              {article.updatedAt && (
                <span className="text-neutral-500 hidden sm:inline"> (Updated {article.updatedAt})</span>
              )}
            </div>
            <span aria-hidden="true">·</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image Showcase */}
      <div className="mb-12 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md dark:shadow-2xl">
        <div className="relative aspect-[16/9] w-full bg-neutral-100 dark:bg-neutral-950">
          <SafeImage
            src={article.coverImage}
            alt={article.title}
            fallbackTheme={article.fallbackTheme}
            priority={true}
            className="w-full h-full"
          />
        </div>
        <div className="p-3 bg-neutral-50 dark:bg-neutral-950/80 border-t border-neutral-200 dark:border-neutral-800/80 text-xs text-neutral-600 dark:text-neutral-400 font-mono flex items-center justify-between">
          <span className="italic">Visual coverage via GamePulse Media Archives</span>
          <ShareButtons title={article.title} />
        </div>
      </div>

      {/* Two Column Layout: Main Prose (65-75ch measure) + Sticky Sidebar TOC */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
        {/* Left Prose Column */}
        <div className="lg:col-span-8 max-w-prose">
          {/* Opening Lead Paragraph with Editorial Drop Cap */}
          <div className="text-lg sm:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed font-serif mb-8 border-b border-neutral-200 dark:border-neutral-800/60 pb-8 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-rose-500">
            {article.content.intro}
          </div>

          {/* Article Sections */}
          <div className="space-y-12">
            {article.content.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-display tracking-tight border-b border-neutral-200 dark:border-neutral-800/60 pb-2">
                  {section.heading}
                </h2>

                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                    {para}
                  </p>
                ))}

                {/* SubSections with H3 tags */}
                {section.subSections && section.subSections.map((sub, sIdx) => (
                  <div key={sIdx} className="space-y-3 pt-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-display tracking-tight text-rose-600 dark:text-rose-300/95">
                      {sub.subHeading}
                    </h3>
                    {sub.paragraphs.map((subPara, spIdx) => (
                      <p key={spIdx} className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                        {subPara}
                      </p>
                    ))}
                  </div>
                ))}

                {/* Pull Quote */}
                {section.quote && (
                  <blockquote className="my-8 p-6 sm:p-8 rounded-xl bg-rose-50/60 dark:bg-neutral-900/60 border-l-4 border-rose-500 text-neutral-800 dark:text-neutral-100 font-serif italic text-lg sm:text-xl leading-snug">
                    <p className="mb-3">"{section.quote.text}"</p>
                    <footer className="text-xs font-mono not-italic uppercase tracking-wider text-rose-600 dark:text-rose-400">
                      — {section.quote.author}
                      {section.quote.role && (
                        <span className="text-neutral-500 dark:text-neutral-400 font-normal">, {section.quote.role}</span>
                      )}
                    </footer>
                  </blockquote>
                )}

                {/* Callout box */}
                {section.callout && (
                  <div className="my-6 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-start gap-3 text-xs sm:text-sm">
                    {section.callout.type === 'tip' && (
                      <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    {section.callout.type === 'warning' && (
                      <AlertTriangle className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                    )}
                    {section.callout.type === 'info' && (
                      <Info className="w-5 h-5 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <strong className="text-neutral-900 dark:text-white block font-display mb-1 text-sm">
                        {section.callout.title}
                      </strong>
                      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{section.callout.text}</p>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Embedded Video Placeholder */}
            <div className="my-10 rounded-xl overflow-hidden bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-8 text-center relative group">
              <div className="max-w-md mx-auto space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-rose-600/10 dark:bg-rose-600/20 border border-rose-500/30 dark:border-rose-500/40 flex items-center justify-center text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-rose-500 ml-0.5" />
                </div>
                <h4 className="text-base font-bold text-neutral-900 dark:text-white font-display">
                  Watch: Technical Breakdown & Gameplay Commentary
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  4K 60FPS uncompressed capture recorded on PS5 Pro / PC test bench.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800/80 space-y-4">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">The Verdict & Forward Outlook</h3>
              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                {article.content.conclusion}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase text-neutral-500 mr-2">Filed Under:</span>
            {article.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* Author Card */}
          {article.author && (
            <div className="mt-12 p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              {article.author.avatar && (
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-16 h-16 rounded-full object-cover border border-neutral-700 shrink-0"
                />
              )}
              <div className="text-center sm:text-left space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h4 className="text-base font-bold text-white font-display">
                    {article.author.name}
                  </h4>
                  <span className="text-xs font-mono text-rose-400">{article.author.role}</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {article.author.bio}
                </p>
                {article.author.twitter && (
                  <span className="text-xs font-mono text-neutral-500 block pt-1">
                    Follow {article.author.twitter}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Comments Section */}
          <CommentsSection articleId={article.id} />
        </div>

        {/* Right Sticky Column (TOC + Quick share) */}
        <aside className="hidden lg:block lg:col-span-4">
          <div className="space-y-6">
            <TableOfContents items={tocItems} />

            <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 font-semibold">
                Share This Analysis
              </h4>
              <ShareButtons title={article.title} />
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-neutral-900 to-rose-950/20 border border-neutral-800">
              <span className="text-[10px] font-mono uppercase text-rose-400 tracking-wider font-semibold block mb-1">
                GamePulse Daily
              </span>
              <p className="text-xs text-neutral-300 font-medium mb-3">
                Subscribe for priority game review digests and hardware benchmarks.
              </p>
              <button
                onClick={() => {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }}
                className="w-full py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Subscribe Free
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Related Articles: "More from GamePulse" */}
      <section className="mt-20 pt-12 border-t border-neutral-800">
        <h3 className="text-2xl font-bold text-white font-display mb-8">
          More from GamePulse
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fallbackRelated.map((art) => (
            <ArticleCard key={art.id} article={art} onSelect={onSelectArticle} />
          ))}
        </div>
      </section>
    </div>
  );
};
