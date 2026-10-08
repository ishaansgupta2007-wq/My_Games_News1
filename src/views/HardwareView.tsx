import React, { useState } from 'react';
import { HARDWARE_PRODUCTS } from '../data/hardware';
import { HardwareCard } from '../components/HardwareCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { Cpu, Zap } from 'lucide-react';

interface HardwareViewProps {
  onSelectHardware: (slug: string) => void;
}

export const HardwareView: React.FC<HardwareViewProps> = ({ onSelectHardware }) => {
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = [
    'All',
    'GPU',
    'CPU',
    'Gaming Monitor',
    'Controller',
    'Gaming Laptop',
    'Keyboard',
    'Mouse',
    'Headset',
  ];

  const filtered = HARDWARE_PRODUCTS.filter((item) => {
    if (selectedCat === 'All') return true;
    return item.category.toLowerCase() === selectedCat.toLowerCase();
  });

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-8">
        <div className="flex items-center gap-2.5 text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 font-semibold">
          <Cpu className="w-4 h-4" />
          <span>Silicon & Peripherals Lab</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
          Hardware Reviews & Benchmarks
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
          Rigorous frametime analysis, thermal probing, acoustic chamber measurements, and latency tests on graphics cards, processors, OLED monitors, and pro esports peripherals.
        </p>

        <div className="pt-6">
          <CategoryFilter
            categories={categories}
            activeCategory={selectedCat}
            onSelectCategory={setSelectedCat}
          />
        </div>
      </div>

      {/* Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            {filtered.length} Evaluated Components & Devices
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <HardwareCard key={product.id} product={product} onSelect={onSelectHardware} />
          ))}
        </div>
      </div>
    </div>
  );
};
