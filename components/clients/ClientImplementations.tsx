'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Badge,
} from '@/components/ui/primitives';
import Link from 'next/link';
import { ExternalLink, Twitter, Github, FileText } from 'lucide-react';
import { ClientTeam, clientTeamsData } from '@/data/client-teams';

export function ClientImplementations() {
  // Helper function to find a link by type and ensure it's a valid URL (not "#")
  const getLinkUrl = (links: ClientTeam['links'], type: string): string | null => {
    const link = links.find((link) => link.type === type);
    return link?.url && link.url !== '#' ? link.url : null;
  };

  return (
    <div className="space-y-5">
      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {clientTeamsData.map((team) => (
          <Card
            key={team.id}
            className={`group relative h-full overflow-hidden bg-white/80 backdrop-blur-sm border-slate-200/60 hover:border-slate-300/80 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 plausible-event-name=${team.name.replace(' ', '+')}+Client+Team+Click`}
          >
            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <CardHeader className="pb-3">
              <div className="flex justify-between items-start gap-2">
                <CardTitle className="text-base font-semibold text-slate-800 tracking-tight">
                  {team.name}
                </CardTitle>
                <Badge
                  variant="outline"
                  className="shrink-0 text-[10px] font-medium bg-slate-50 text-slate-600 border-slate-200"
                >
                  {team.language}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-3 space-y-3">
              <p className="text-sm text-slate-600 leading-relaxed">{team.description}</p>

              {/* GitHub Repo Link */}
              <Link
                href={team.leanRepo}
                target="_blank"
                className="group/repo flex items-center gap-3 p-3 -mx-1 rounded-lg bg-slate-100 border border-slate-200 hover:border-slate-300 hover:bg-slate-200 transition-colors"
              >
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-slate-300 text-slate-700 group-hover/repo:bg-slate-400 transition-colors">
                  <Github className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide">
                    Repository
                  </div>
                  <div className="text-sm font-mono text-slate-800 truncate">
                    {team.leanRepo.replace('https://github.com/', '')}
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-400 group-hover/repo:text-slate-600 transition-colors" />
              </Link>
            </CardContent>
            <CardFooter className="pt-3 border-t border-slate-100/80">
              <div className="flex flex-wrap gap-1.5">
                {/* Website Link */}
                {getLinkUrl(team.links, 'website') && (
                  <Link
                    href={getLinkUrl(team.links, 'website') || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-slate-500 bg-slate-50 rounded-md hover:bg-teal-50 hover:text-teal-700 transition-colors"
                  >
                    <ExternalLink className="h-3 w-3 shrink-0" />
                    Web
                  </Link>
                )}
                {/* Twitter Link */}
                {getLinkUrl(team.links, 'twitter') && (
                  <Link
                    href={getLinkUrl(team.links, 'twitter') || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-slate-500 bg-slate-50 rounded-md hover:bg-sky-50 hover:text-sky-700 transition-colors"
                  >
                    <Twitter className="h-3 w-3 shrink-0" />
                    Twitter
                  </Link>
                )}
                {/* GitHub Org Link */}
                {getLinkUrl(team.links, 'github') && (
                  <Link
                    href={getLinkUrl(team.links, 'github') || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-slate-500 bg-slate-50 rounded-md hover:bg-slate-100 hover:text-slate-700 transition-colors"
                  >
                    <Github className="h-3 w-3 shrink-0" />
                    GitHub
                  </Link>
                )}
                {/* HackMD Link */}
                {getLinkUrl(team.links, 'hackmd') && (
                  <Link
                    href={getLinkUrl(team.links, 'hackmd') || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-slate-500 bg-slate-50 rounded-md hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  >
                    <FileText className="h-3 w-3 shrink-0" />
                    Docs
                  </Link>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
