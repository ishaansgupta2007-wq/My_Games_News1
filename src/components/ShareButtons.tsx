import React, { useState } from 'react';
import { Share2, Check, Twitter, MessageSquare, Link2 } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url }) => {
  const [copied, setCopied] = useState(false);

  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleTwitterShare = () => {
    const tweetText = encodeURIComponent(`${title} via @GamePulse`);
    const shareUrl = encodeURIComponent(currentUrl);
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}&url=${shareUrl}`, '_blank');
  };

  const handleRedditShare = () => {
    const postTitle = encodeURIComponent(title);
    const shareUrl = encodeURIComponent(currentUrl);
    window.open(`https://www.reddit.com/submit?title=${postTitle}&url=${shareUrl}`, '_blank');
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono uppercase tracking-wider mr-2 hidden sm:inline">
        Share
      </span>

      <button
        onClick={handleCopy}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
          copied
            ? 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
            : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700'
        }`}
        title="Copy article link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            <span>Link Copied</span>
          </>
        ) : (
          <>
            <Link2 className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
            <span>Copy</span>
          </>
        )}
      </button>

      <button
        onClick={handleTwitterShare}
        className="p-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors cursor-pointer"
        title="Share to X / Twitter"
      >
        <Twitter className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={handleRedditShare}
        className="p-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors cursor-pointer"
        title="Share to Reddit"
      >
        <MessageSquare className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
