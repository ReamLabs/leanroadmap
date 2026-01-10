'use client';

import { Card } from '@/components/ui/primitives';
import { Devnet } from '@/data/devnets';
import { CheckCircle2, Circle, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const formatDate = (date: string, status: Devnet['status']): string => {
  const formatted = new Date(date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
  const prefix = status === 'completed' ? 'Completed' : 'Target';
  return `${prefix}: ${formatted}`;
};

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    bg: 'bg-emerald-500',
    text: 'text-emerald-600',
    label: 'Completed',
  },
  active: {
    icon: Clock,
    bg: 'bg-amber-500',
    text: 'text-amber-600',
    label: 'Active',
  },
  planned: {
    icon: Circle,
    bg: 'bg-slate-300',
    text: 'text-slate-500',
    label: 'Planned',
  },
};

interface DevnetCardProps {
  devnet: Devnet;
}

export function DevnetCard({ devnet }: DevnetCardProps) {
  const status = statusConfig[devnet.status];
  const StatusIcon = status.icon;

  return (
    <Card className="flex-shrink-0 w-80 snap-start bg-white/80 backdrop-blur-sm border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-mono-data text-base font-semibold text-slate-800">{devnet.name}</h3>
            {devnet.date && (
              <span className="text-xs text-slate-400">
                {formatDate(devnet.date, devnet.status)}
              </span>
            )}
          </div>
          <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full ${status.bg}/10`}>
            <StatusIcon className={`h-3.5 w-3.5 ${status.text}`} />
            <span className={`text-[10px] font-medium ${status.text}`}>{status.label}</span>
          </div>
        </div>

        {/* Goals */}
        <div className="mb-3">
          <h4 className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 mb-1.5">
            Goals
          </h4>
          <ul className="space-y-1">
            {devnet.goals.map((goal, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
                <span className="text-teal-500 mt-0.5">•</span>
                {goal}
              </li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div className="mb-3">
          <h4 className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 mb-1.5">
            Results
          </h4>
          {devnet.results && devnet.results.length > 0 ? (
            <ul className="space-y-1">
              {devnet.results.map((result, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="h-3 w-3 text-emerald-500 mt-0.5 shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-slate-400 italic">In progress...</p>
          )}
        </div>

        {/* Clients */}
        {devnet.clients && devnet.clients.length > 0 && (
          <div className="mb-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 mb-1.5">
              Clients
            </h4>
            <div className="flex flex-wrap gap-1">
              {devnet.clients.map((client, index) => (
                <span
                  key={index}
                  className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {devnet.links && devnet.links.length > 0 && (
          <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
            {devnet.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                className="flex items-center gap-1.5 text-xs text-teal-600 hover:text-teal-700 transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
