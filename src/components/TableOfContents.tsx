import React, { useState, useEffect } from 'react';
import { AlignLeft } from 'lucide-react';

interface TOCItem {
  id: string;
  heading: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -60% 0px',
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="sticky top-24 rounded-xl bg-neutral-900/60 border border-neutral-800/80 p-5 backdrop-blur-md">
      <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 mb-4 pb-3 border-b border-neutral-800">
        <AlignLeft className="w-4 h-4 text-rose-500" />
        <span>In This Story</span>
      </div>

      <nav className="space-y-2">
        {items.map((item, idx) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left text-xs transition-colors py-1 pl-3 border-l-2 cursor-pointer ${
                isActive
                  ? 'border-rose-500 text-white font-medium pl-3 bg-neutral-800/40 rounded-r'
                  : 'border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-600'
              }`}
            >
              <span className="font-mono text-neutral-500 mr-2 text-[10px]">
                {String(idx + 1).padStart(2, '0')}.
              </span>
              <span>{item.heading}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
