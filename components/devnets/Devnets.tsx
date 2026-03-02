'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { devnetsData } from '@/data/devnets';
import { DevnetCard } from './DevnetCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Devnets() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [checkScrollability]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 xl:-translate-x-12 z-10 p-2 rounded-full bg-white shadow-lg border border-slate-200 transition-all flex items-center justify-center ${
          canScrollLeft
            ? 'text-slate-600 hover:text-slate-900 hover:shadow-xl cursor-pointer'
            : 'text-slate-300 cursor-default opacity-50'
        }`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 xl:translate-x-12 z-10 p-2 rounded-full bg-white shadow-lg border border-slate-200 transition-all flex items-center justify-center ${
          canScrollRight
            ? 'text-slate-600 hover:text-slate-900 hover:shadow-xl cursor-pointer'
            : 'text-slate-300 cursor-default opacity-50'
        }`}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Carousel container */}
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide mx-8 md:mx-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {devnetsData.map((devnet) => (
          <DevnetCard key={devnet.id} devnet={devnet} />
        ))}
      </div>
    </div>
  );
}
