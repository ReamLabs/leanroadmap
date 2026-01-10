'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/primitives';
import { Rocket } from 'lucide-react';
import { callToActionsData } from '@/data/call-to-actions';

export function Overview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {/* Long-term Vision Card */}
      <Card className="col-span-1 bg-white border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>Key Ideas</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 p-0 md:pl-5 text-sm list-none">
            <li className="flex items-start">
              <Rocket className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Lean Consensus:</strong> A complete redesign of Ethereum&apos;s consensus
                layer — hardened for security, decentralization, and finality in seconds
              </span>
            </li>
            <li className="flex items-start">
              <Rocket className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Lean Cryptography:</strong> Hash-based signatures ready for both SNARKs and
                quantum computers — one simple building block powering everything
              </span>
            </li>
            <li className="flex items-start">
              <Rocket className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Lean Governance:</strong> Batched upgrades instead of endless small changes
                — paying down 10 years of technical debt in one go
              </span>
            </li>
            <li className="flex items-start">
              <Rocket className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Lean Craft:</strong> Minimalism, modularity, and formal verification — when
                we can go the extra mile, we do
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* YouTube Video Embed */}
      <div className="col-span-1 aspect-video rounded-lg overflow-hidden shadow-sm border border-slate-200">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/WaNgzP3OlWk"
          title="Lean Ethereum Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Call to Actions - Repos */}
      <div className="col-span-1 md:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {callToActionsData
            .filter((cta) => cta.type === 'repo')
            .map((cta, index) => (
              <a
                key={index}
                href={cta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:border-slate-900 hover:shadow-lg hover:shadow-slate-500/10 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <cta.icon className="h-5 w-5" />
                </div>
                <div className="relative flex-1 min-w-0">
                  <div className="font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
                    {cta.title}
                  </div>
                  {cta.description && (
                    <div className="text-sm text-slate-500">{cta.description}</div>
                  )}
                </div>
                <div className="relative text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-300">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}
        </div>
      </div>

      {/* Call to Actions - Community */}
      <div className="col-span-1 md:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {callToActionsData
            .filter((cta) => cta.type === 'community')
            .map((cta, index) => (
              <a
                key={index}
                href={cta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:border-slate-900 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <cta.icon className="h-5 w-5" />
                </div>
                <div className="relative flex-1 min-w-0">
                  <div className="font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
                    {cta.title}
                  </div>
                  {cta.description && (
                    <div className="text-sm text-slate-500">{cta.description}</div>
                  )}
                </div>
                <div className="relative text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-300">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
