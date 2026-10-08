import React from 'react';
import { HardwareProduct } from '../types';
import { SafeImage } from './SafeImage';
import { Star, ArrowRight, Cpu, CheckCircle2 } from 'lucide-react';

interface HardwareCardProps {
  product: HardwareProduct;
  onSelect: (slug: string) => void;
}

export const HardwareCard: React.FC<HardwareCardProps> = ({ product, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(product.slug)}
      className="group flex flex-col rounded-2xl overflow-hidden bg-neutral-900/85 border border-neutral-800 hover:border-neutral-700/80 hover:bg-neutral-900 transition-all cursor-pointer shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
        <SafeImage
          src={product.image}
          alt={product.name}
          fallbackTheme={product.category === 'Controller' ? 'hardware' : 'hardware'}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-0.5 rounded-full bg-neutral-950/90 backdrop-blur border border-neutral-800 text-[10px] font-mono text-neutral-300 uppercase tracking-wider font-semibold">
            {product.category}
          </span>
        </div>

        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-neutral-950/90 backdrop-blur border border-neutral-800 text-xs font-mono font-bold text-amber-400 shadow">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
          <span className="tabular-nums">{product.rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1.5">
            <span className="text-neutral-500">{product.brand}</span>
            <span className="text-white font-bold text-sm font-mono tabular-nums">{product.price}</span>
          </div>

          <h3 className="text-base font-bold text-white group-hover:text-rose-200 transition-colors font-display line-clamp-1 mb-2 tracking-tight">
            {product.name}
          </h3>

          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4 font-sans">
            {product.shortDescription}
          </p>

          {/* Quick Specs Snippet */}
          <div className="bg-neutral-950/70 rounded-xl p-3 border border-neutral-800/80 mb-4 space-y-1.5">
            {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
              <div key={key} className="flex justify-between text-[11px] font-mono">
                <span className="text-neutral-500">{key}:</span>
                <span className="text-neutral-300 truncate max-w-[150px] text-right font-medium">{val}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
          <span className="text-neutral-500 font-mono text-[11px] flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Lab Verified
          </span>
          <span className="text-rose-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
            Read Specs <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};
