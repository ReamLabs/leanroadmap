'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { ExternalLink, Plus, Minus } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Badge,
  Separator,
} from '@/components/ui/primitives';
import type { ResearchTrack } from '@/data/research-tracks';
import Link from 'next/link';

interface ResearchTrackCardProps {
  track: ResearchTrack;
  isExpanded: boolean;
  onToggle: (expanded: boolean) => void;
}

// Color mapping for different themes
const colorMap = {
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    progressBg: 'bg-purple-500',
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    progressBg: 'bg-blue-500',
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    progressBg: 'bg-green-500',
  },
  amber: {
    bg: 'bg-amber-100',
    text: 'text-amber-600',
    progressBg: 'bg-amber-500',
  },
  red: {
    bg: 'bg-red-100',
    text: 'text-red-600',
    progressBg: 'bg-red-500',
  },
  indigo: {
    bg: 'bg-indigo-100',
    text: 'text-indigo-600',
    progressBg: 'bg-indigo-500',
  },
  teal: {
    bg: 'bg-teal-100',
    text: 'text-teal-600',
    progressBg: 'bg-teal-500',
  },
} as const;

const defaultColors = {
  bg: 'bg-slate-100',
  text: 'text-slate-600',
  progressBg: 'bg-slate-500',
} as const;

export function ResearchTrackCard({ track, isExpanded, onToggle }: ResearchTrackCardProps) {
  const [isOpen, setIsOpen] = useState(isExpanded); // Start with parent's expanded state

  // Update local state when parent state changes
  useEffect(() => {
    setIsOpen(isExpanded);
  }, [isExpanded]);

  const colorClasses = colorMap[track.colorClass as keyof typeof colorMap] ?? defaultColors;

  // Handle resource link clicks without toggling the card
  const handleResourceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState);
  };

  const isInactive = track.status === 'inactive';

  return (
    <div className="grid transition-all duration-300 ease-in-out h-fit">
      <Card
        className={`bg-white border-slate-200 hover:bg-slate-50 transition-all duration-200 cursor-pointer group relative plausible-event-name=${track.title.replace(' ', '+')}+Research+Card+Click ${
          isInactive ? 'opacity-60 grayscale' : ''
        }`}
        onClick={handleToggle}
      >
        <div className="absolute top-4 right-4">
          {isOpen ? (
            <Minus className="h-4 w-4 text-slate-400" />
          ) : (
            <Plus className="h-4 w-4 text-slate-400" />
          )}
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${colorClasses.progressBg} text-white`}>
              {track.icon}
            </div>
            <div className="flex items-center gap-2">
              <CardTitle className={`${isInactive ? 'text-slate-500' : 'text-slate-900'}`}>
                {track.title}
              </CardTitle>
              {isInactive && (
                <Badge variant="outline" className="text-xs bg-slate-100 text-slate-500 border-slate-300">
                  Inactive
                </Badge>
              )}
            </div>
          </div>
          <div className="my-4">
            <div className="flex justify-between mb-1">
              <span className={`text-sm ${isInactive ? 'text-slate-400' : 'text-slate-600'}`}>
                Progress
              </span>
              <span className={`text-sm font-medium ${isInactive ? 'text-slate-400' : ''}`}>
                {track.progress}%
              </span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${colorClasses.progressBg} rounded-full ${
                  isInactive ? 'opacity-50' : ''
                }`}
                style={{ width: `${track.progress}%` }}
              ></div>
            </div>
          </div>
          <p className={`text-sm mb-2 ${isInactive ? 'text-slate-400' : 'text-slate-600'}`}>
            {track.description}
          </p>
        </CardHeader>

        <CardContent className="flex-1">
          <div
            className="grid transition-all duration-300 ease-in-out"
            style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
          >
            <div className="min-h-0 overflow-hidden">
              <div
                className={`bg-slate-50 p-3 rounded-lg transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
              >
                <h4 className="font-medium text-sm mb-2">Key Milestones</h4>
                <div className="space-y-2 mb-4">
                  {track.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <div
                        className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${milestone.completed ? colorClasses.progressBg : 'bg-slate-300'} ${
                          isInactive ? 'opacity-50' : ''
                        }`}
                      />
                      <div>
                        <p
                          className={`${
                            milestone.completed
                              ? isInactive
                                ? 'text-slate-400'
                                : 'text-slate-900'
                              : isInactive
                              ? 'text-slate-300'
                              : 'text-slate-500'
                          }`}
                        >
                          {milestone.title}
                        </p>
                        {milestone.date && (
                          <p className={`text-xs ${isInactive ? 'text-slate-300' : 'text-slate-400'}`}>
                            {milestone.date}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-3" />

                <h4 className="font-medium text-sm mb-2">Resources</h4>
                <div className="space-y-2">
                  {track.resources.map((resource, index) => (
                    <Link
                      href={resource.url}
                      key={index}
                      className={`flex items-center gap-2 text-sm hover:underline ${
                        isInactive
                          ? 'text-slate-400 hover:text-slate-500'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                      target="_blank"
                      onClick={handleResourceClick}
                    >
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                      <span>{resource.title}</span>
                      <span className={`text-xs ml-auto ${isInactive ? 'text-slate-300' : 'text-slate-400'}`}>
                        {resource.type}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className={`text-sm mt-2 ${isInactive ? 'text-slate-400' : 'text-slate-600'}`}>
            Lead:{' '}
            <Link
              href={track.leadLink}
              className={`hover:underline ${
                isInactive ? 'text-slate-400 hover:text-slate-500' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {track.lead}
            </Link>
          </p>
        </CardContent>

        <CardFooter className="pt-2 border-t border-slate-100">
          <div className="flex gap-1 flex-wrap">
            {track.tags.map((tag, i) => (
              <Badge
                key={i}
                variant="outline"
                className={`text-xs ${isInactive ? 'bg-slate-50 text-slate-400 border-slate-200' : 'bg-slate-100'}`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
