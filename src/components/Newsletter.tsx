import React, { useState } from 'react';
import { Mail, CheckCircle2, Flame, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <section className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 p-8 sm:p-12 lg:p-16">
      {/* Subtle background glow, no neon slop */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-neutral-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-rose-400 text-xs font-mono font-medium mb-4">
          <Flame className="w-3.5 h-3.5 fill-rose-500/20" />
          <span>GamePulse Dispatch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
          Stay Ahead of the Game.
        </h2>

        <p className="text-neutral-400 text-sm sm:text-base mb-8 leading-relaxed">
          Get the biggest gaming news, reviews and guides delivered straight to your inbox.
          Curated weekly by our senior editorial staff. No spam, ever.
        </p>

        {status === 'success' ? (
          <div className="flex items-center justify-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 p-4 rounded-xl text-sm font-medium animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>You’re locked in. Welcome to the GamePulse Dispatch briefings!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full pl-10 pr-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-neutral-600 focus:ring-1 focus:ring-rose-500 text-white rounded-lg text-sm placeholder:text-neutral-500 outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-100 hover:bg-white text-neutral-950 text-sm font-semibold rounded-lg transition-colors cursor-pointer disabled:opacity-50 whitespace-nowrap"
            >
              <span>{status === 'loading' ? 'Joining...' : 'Subscribe'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="flex items-center justify-center gap-6 text-xs text-neutral-500 mt-6 font-mono">
          <span>Weekly digest</span>
          <span aria-hidden="true">·</span>
          <span>Unsubscribe anytime</span>
          <span aria-hidden="true">·</span>
          <span>Zero third-party tracking</span>
        </div>
      </div>
    </section>
  );
};
