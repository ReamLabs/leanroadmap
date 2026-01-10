'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Badge } from '@/components/ui/primitives';
import { Benchmarks } from '@/components/benchmarks/Benchmarks';
import { ClientImplementations } from '@/components/clients/ClientImplementations';
import { Devnets } from '@/components/devnets/Devnets';
import { LeanCalls } from '@/components/lean-calls/LeanCalls';
import { Timeline } from '@/components/timeline/Timeline';
import { Footer } from '@/components/Footer';
import { ResearchTracks } from '@/components/research-tracks/ResearchTracks';
import { Overview } from '@/components/overview/Overview';
import { LearningResources } from '@/components/learning-resources/LearningResources';

const LAST_UPDATED = '2026-01';
const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

const NAV_ITEMS = [
  { label: 'Overview', id: 'overview' },
  { label: 'Timeline', id: 'timeline' },
  { label: 'Benchmarks', id: 'benchmarks' },
  { label: 'Devnets', id: 'devnets' },
  { label: 'Research', id: 'research-tracks' },
  { label: 'Clients', id: 'client-implementations' },
  { label: 'Learning', id: 'learning-resources' },
  { label: 'Videos', id: 'lean-calls' },
];

export function Dashboard() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isClickNavigatingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Skip scroll-based updates while click navigation is in progress
      if (isClickNavigatingRef.current) return;

      // Find the active section based on scroll position
      // Add extra offset so highlight switches when section is ~30% from top of viewport
      const headerOffset = 80;
      const viewportOffset = window.innerHeight * 0.3;
      const scrollPosition = window.scrollY + headerOffset + viewportOffset;

      // Find the section that's currently at the top
      let currentSection = 'overview';
      for (const { id } of NAV_ITEMS) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    isClickNavigatingRef.current = true;
    setTimeout(() => {
      isClickNavigatingRef.current = false;
    }, 800);
  };

  return (
    <div className="container mx-auto space-y-12 px-8 md:px-6">
      {/* Floating Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-slate-800/95 backdrop-blur-md border-b border-slate-700/60 shadow-lg">
          <div className="container mx-auto px-8 md:px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-4 w-px bg-gradient-to-b from-teal-400 to-teal-300" />
              <div>
                <div className="text-[9px] uppercase tracking-widest text-slate-500">
                  Lean Ethereum
                </div>
                <h1 className="text-base font-medium text-white leading-tight">
                  Lean Consensus <span className="font-display text-slate-400">R&D Progress</span>
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-1 ml-auto mr-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    activeSection === item.id
                      ? 'text-white font-medium bg-teal-600'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <span className="hidden md:flex items-center text-[11px] text-slate-400 font-mono-data px-2.5 py-1 rounded-full border border-slate-600">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              {formatDate(LAST_UPDATED)}
            </span>
            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded transition-colors ml-auto"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {/* Mobile menu dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-slate-700/60 py-2 px-4">
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 text-sm rounded transition-colors ${
                      activeSection === item.id
                        ? 'text-white font-medium bg-teal-600'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Hero Header */}
      <header className="relative pt-14 md:pt-12 md:pb-4">
        {/* Decorative background element */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-teal-100/40 via-amber-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-100/30 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div className="space-y-3">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-teal-500 to-teal-300" />
              <span className="text-xs font-medium tracking-widest uppercase text-teal-600">
                Lean Ethereum
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-5xl tracking-tight">
              <span className="font-semibold text-slate-900">Lean Consensus</span>{' '}
              <span className="font-display text-slate-600">R&D Progress</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-slate-500 max-w-md md:max-w-lg leading-relaxed">
              Track <span className="text-slate-700 font-medium">Lean Consensus</span> research &
              engineering progress across all workstreams
            </p>
          </div>

          {/* Status badge */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <Badge
              variant="outline"
              className="bg-white/80 backdrop-blur-sm border-slate-200/80 text-slate-600 px-3 py-1.5 text-xs font-mono-data shadow-sm"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              Last updated: {formatDate(LAST_UPDATED)}
            </Badge>
          </div>
        </div>
      </header>

      <section id="overview" className="space-y-4 scroll-mt-20">
        <h2>Overview</h2>
        <Overview />
      </section>

      <section id="timeline" className="space-y-4 scroll-mt-20">
        <h2>Timeline</h2>
        <Timeline />
      </section>

      <section id="benchmarks" className="space-y-4 scroll-mt-20">
        <h2>Benchmarks</h2>
        <Benchmarks />
      </section>

      <section id="devnets" className="space-y-4 scroll-mt-20">
        <h2>Devnets</h2>
        <Devnets />
      </section>

      <section id="research-tracks" className="space-y-4 scroll-mt-20">
        <ResearchTracks />
      </section>

      <section id="client-implementations" className="space-y-4 scroll-mt-20">
        <h2>Client Implementations</h2>
        <ClientImplementations />
      </section>

      <section id="learning-resources" className="space-y-4 scroll-mt-20">
        <h2>Learning Resources</h2>
        <LearningResources />
      </section>

      <section id="lean-calls" className="space-y-4 scroll-mt-20">
        <h2>leanConsensus Calls</h2>
        <LeanCalls />
      </section>

      <Footer />
    </div>
  );
}
