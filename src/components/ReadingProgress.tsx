import React, { useState, useEffect } from 'react';

export const ReadingProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress(Math.min(100, Math.max(0, (currentScroll / scrollHeight) * 100)));
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 h-1 z-50 bg-neutral-900/50 backdrop-blur pointer-events-none">
      <div
        className="h-full bg-rose-500 transition-all duration-75 ease-out shadow-[0_0_10px_rgba(244,63,94,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
