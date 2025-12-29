'use client';

import { Badge } from '@/components/ui/primitives';
import { ClientTeams } from '@/components/ClientTeams';
import { LeanCalls } from '@/components/LeanCalls';
import { Timeline } from '@/components/Timeline';
import { Footer } from '@/components/Footer';
import { ResearchTracks } from '@/components/ResearchTracks';
import { LeanConsensusConcepts } from '@/components/LeanConsensusConcepts';

export function Dashboard() {
  return (
    <div className="container mx-auto space-y-10">
      <header className="flex flex-col md:flex-row justify-between md:items-center gap-4 my-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Lean Consensus R&D Progress </h1>

          <p className="text-slate-600 mt-1">
            Track Lean Consensus research progress across all workstreams
          </p>
        </div>
        <Badge variant="outline">Last updated: December 2025</Badge>
      </header>

      <section>
        <h2>Timeline</h2>
        <Timeline />
      </section>

      <section>
        <h2>Lean Consensus Concepts</h2>
        <LeanConsensusConcepts />
      </section>

      <section>
        <ResearchTracks />
      </section>

      <section>
        <h2>Client Teams</h2>
        <ClientTeams />
      </section>

      <section>
        <h2>Lean Calls</h2>
        <LeanCalls />
      </section>

      <Footer />
    </div>
  );
}
