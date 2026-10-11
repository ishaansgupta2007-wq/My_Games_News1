/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PageSEOConfig {
  title: string;
  description: string;
  mainKeyword: string;
  relatedKeywords: string[];
  canonicalPath: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  section?: string;
  faqItems?: { question: string; answer: string }[];
}

export const BASE_SITE_URL = 'https://playsocial.media';

export function updatePageSEO(config: PageSEOConfig) {
  if (typeof document === 'undefined') return;

  // 1. Update Title Tag
  document.title = config.title;

  const origin = typeof window !== 'undefined' ? window.location.origin : BASE_SITE_URL;
  const canonicalUrl = `${origin}${config.canonicalPath}`;

  // Helper to update or create meta tags
  const setMetaTag = (attribute: 'name' | 'property', value: string, content: string) => {
    let element = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement | null;
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, value);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // 2. Meta Description
  setMetaTag('name', 'description', config.description);

  // 3. Meta Keywords (natural, comma-separated)
  const allKeywords = [config.mainKeyword, ...config.relatedKeywords].filter(Boolean);
  if (allKeywords.length > 0) {
    setMetaTag('name', 'keywords', allKeywords.join(', '));
  }

  // 4. OpenGraph Tags
  setMetaTag('property', 'og:title', config.title);
  setMetaTag('property', 'og:description', config.description);
  setMetaTag('property', 'og:type', config.type || 'website');
  setMetaTag('property', 'og:url', canonicalUrl);
  setMetaTag('property', 'og:site_name', 'PlaySocial');
  if (config.image) {
    const fullImage = config.image.startsWith('http') ? config.image : `${origin}${config.image}`;
    setMetaTag('property', 'og:image', fullImage);
    if (config.imageAlt) {
      setMetaTag('property', 'og:image:alt', config.imageAlt);
    }
  }

  // 5. Twitter Card Tags
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', config.title);
  setMetaTag('name', 'twitter:description', config.description);
  if (config.image) {
    const fullImage = config.image.startsWith('http') ? config.image : `${origin}${config.image}`;
    setMetaTag('name', 'twitter:image', fullImage);
  }

  // 6. Canonical Link Tag
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  // 7. Schema.org JSON-LD Structured Data
  let ldJsonScript = document.getElementById('page-jsonld-schema') as HTMLScriptElement | null;
  if (!ldJsonScript) {
    ldJsonScript = document.createElement('script');
    ldJsonScript.id = 'page-jsonld-schema';
    ldJsonScript.type = 'application/ld+json';
    document.head.appendChild(ldJsonScript);
  }

  const structuredDataList: Record<string, any>[] = [];

  // Organization Schema
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: 'PlaySocial',
    url: origin,
    logo: `${origin}/images/logo_hero_image.webp`,
    description: 'PlaySocial is a premier gaming news publication providing breaking updates, scored reviews, guides, and hardware benchmarks.'
  };
  structuredDataList.push(orgSchema);

  // Page Specific Schemas
  if (config.type === 'article') {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
      },
      headline: config.title,
      description: config.description,
      image: config.image ? (config.image.startsWith('http') ? config.image : `${origin}${config.image}`) : undefined,
      datePublished: config.publishedTime,
      dateModified: config.modifiedTime || config.publishedTime,
      author: {
        '@type': 'Person',
        name: config.authorName || 'Staff Writer'
      },
      publisher: {
        '@type': 'NewsMediaOrganization',
        name: 'PlaySocial',
        logo: {
          '@type': 'ImageObject',
          url: `${origin}/images/logo_hero_image.webp`
        }
      },
      articleSection: config.section || 'Gaming News',
      keywords: allKeywords.join(', ')
    };
    structuredDataList.push(articleSchema);
  } else {
    // WebSite with Sitelinks SearchBox Schema for Homepage
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'PlaySocial',
      url: origin,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${origin}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
    structuredDataList.push(websiteSchema);
  }

  // FAQ Schema for AEO (Answer Engine Optimization)
  if (config.faqItems && config.faqItems.length > 0) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: config.faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    };
    structuredDataList.push(faqSchema);
  }

  ldJsonScript.textContent = JSON.stringify(structuredDataList);
}
