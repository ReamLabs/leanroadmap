import {
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/primitives';
import { ClientTeam, clientTeamsData } from '@/data/client-teams';
import { ExternalLink, FileText, Github, Twitter } from 'lucide-react';

import Link from 'next/link';
import { useState } from 'react';

export function ClientTeams() {
  const [filter, setFilter] = useState<'new' | 'existing' | null>(null);

  const filteredTeams = clientTeamsData.filter((team) => {
    if (filter === null) return true;
    return team.status === filter;
  });

  const toggleFilter = (selectedFilter: 'new' | 'existing') => {
    setFilter((current) => (current === selectedFilter ? null : selectedFilter));
  };

  const clearFilter = () => setFilter(null);

  // Helper function to find a link by type and ensure it's a valid URL (not "#")
  const getLinkUrl = (links: ClientTeam['links'], type: string): string | null => {
    const link = links.find((link) => link.type === type);
    return link?.url && link.url !== '#' ? link.url : null;
  };

  return (
    <div className="space-y-4">
      <p className="text-lg text-slate-600 -mt-6">
        {clientTeamsData.length} client teams (
        {clientTeamsData.filter((team) => team.status === 'new').length} new +{' '}
        {clientTeamsData.filter((team) => team.status === 'existing').length} existing) are
        committed to building the Beam Chain.
      </p>

      <div className="flex flex-wrap gap-2 mt-0">
        <button
          onClick={() => toggleFilter('new')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            filter === 'new'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          ✨ New Teams
        </button>
        <button
          onClick={() => toggleFilter('existing')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            filter === 'existing'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          💪 Existing Teams
        </button>
        {filter !== null && (
          <button
            onClick={clearFilter}
            className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-700"
          >
            Clear filter
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeams.map((team) => (
          <Card
            key={team.id}
            className={`border-slate-200 h-full relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-transparent before:absolute before:inset-0 before:-translate-x-full before:animate-[shine_3s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent hover:before:animate-[shine_1.5s_infinite] plausible-event-name=${team.name.replace(' ', '+')}+Client+Team+Click`}
          >
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-slate-900">{team.name}</CardTitle>
                <Badge variant={team.status === 'existing' ? 'outline' : 'success'}>
                  {team.status === 'existing' ? '💪 Existing' : '✨ New'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">{team.description}</p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {/* Website Link */}
                {getLinkUrl(team.links, 'website') && (
                  <Link
                    href={getLinkUrl(team.links, 'website') || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200"
                  >
                    <ExternalLink className="h-4 w-4 shrink-0" />
                    Website
                  </Link>
                )}
                {/* Twitter Link */}
                {getLinkUrl(team.links, 'twitter') && (
                  <Link
                    href={getLinkUrl(team.links, 'twitter') || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200"
                  >
                    <Twitter className="h-4 w-4 shrink-0" />
                    Twitter
                  </Link>
                )}
                {/* GitHub Link */}
                {getLinkUrl(team.links, 'github') && (
                  <Link
                    href={getLinkUrl(team.links, 'github') || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200"
                  >
                    <Github className="h-4 w-4 shrink-0" />
                    GitHub
                  </Link>
                )}
                {/* HackMD Link */}
                {getLinkUrl(team.links, 'hackmd') && (
                  <Link
                    href={getLinkUrl(team.links, 'hackmd') || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200"
                  >
                    <FileText className="h-4 w-4 shrink-0" />
                    HackMD
                  </Link>
                )}
                {/* Medium Link */}
                {getLinkUrl(team.links, 'medium') && (
                  <Link
                    href={getLinkUrl(team.links, 'medium') || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200"
                  >
                    <FileText className="h-4 w-4 shrink-0" />
                    Medium
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
