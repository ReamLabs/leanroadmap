'use client';

import { useState } from 'react';
import { Search, ChevronUp, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/primitives';
import { ResearchTrackCard } from '@/components/ResearchTrackCard';
import { researchTracksData } from '@/data/research-tracks';

export function ResearchTracks() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allExpanded, setAllExpanded] = useState(true); // Start with all expanded

  // Get unique tags from all research tracks
  const allTags = Array.from(new Set(researchTracksData.flatMap((track) => track.tags))).sort();

  const filteredTracks = researchTracksData.filter(
    (track) =>
      (searchTerm === '' ||
        track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        track.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedTags.length === 0 || selectedTags.some((tag) => track.tags.includes(tag))),
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  const hasActiveFilters = searchTerm !== '' || selectedTags.length > 0;

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <h2 className="mb-0">Research Tracks</h2>
          <button
            onClick={() => setAllExpanded(!allExpanded)}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            {allExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Collapse All
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Expand All
              </>
            )}
          </button>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            type="text"
            placeholder="Search research tracks..."
            className="pl-8 bg-white border-slate-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="flex flex-wrap gap-2 flex-1">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors plausible-event-name=Research+Tag+Click ${
                selectedTags.includes(tag)
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-700"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTracks.length > 0 ? (
          filteredTracks.map((track) => (
            <ResearchTrackCard
              key={track.id}
              track={track}
              isExpanded={allExpanded}
              onToggle={(expanded) => {
                // If a card is manually expanded while all others are collapsed,
                // or manually collapsed while all others are expanded,
                // we don't want to affect the global state
              }}
            />
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center py-12 text-slate-500">
            <p className="text-lg">No research tracks found.</p>
          </div>
        )}
      </div>
    </>
  );
}
