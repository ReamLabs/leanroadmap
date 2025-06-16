import Image from 'next/image';
import { ExternalLink, FileText, ListChecks, Play, Presentation } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/primitives';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { BeamCall, beamCallsData, determineBeamCallStatus } from '@/data/beam-calls';

// Helper function to extract YouTube video ID from URL
function getYoutubeVideoId(url: string): string | null {
  if (url === '#') return null;

  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

// Helper function to get resource icon based on type
function getResourceIcon(type: string) {
  switch (type) {
    case 'slides':
      return <Presentation className="h-4 w-4 shrink-0" />;
    case 'notes':
      return <FileText className="h-4 w-4 shrink-0" />;
    case 'agenda':
      return <ListChecks className="h-4 w-4 shrink-0" />;
    default:
      return <ExternalLink className="h-4 w-4 shrink-0" />;
  }
}

export function BeamCalls() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {beamCallsData.map((call) => (
        <BeamCallCard key={call.id} call={call} />
      ))}
    </div>
  );
}

function BeamCallCard({ call }: { call: BeamCall }) {
  const status = determineBeamCallStatus(call.date);

  return (
    <Card
      key={call.id}
      className={`bg-white border-slate-200 overflow-hidden ${status === 'unscheduled' ? 'filter brightness-100 opacity-25' : ''}`}
    >
      <div className="relative">
        {call.youtubeUrl !== '#' && getYoutubeVideoId(call.youtubeUrl) ? (
          <div className="w-full h-48">
            <iframe
              src={`https://www.youtube.com/embed/${getYoutubeVideoId(call.youtubeUrl)}`}
              title={call.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ) : (
          <>
            <Image
              src={call.thumbnail || '/placeholder.svg?height=180&width=320'}
              alt={call.title}
              width={320}
              height={180}
              className="w-full h-48 object-cover"
            />
            {call.youtubeUrl !== '#' && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Link href={call.youtubeUrl} target="_blank">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-white bg-opacity-90 h-12 w-12"
                  >
                    <Play className="h-6 w-6 text-red-600" />
                  </Button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
      <CardContent className="pt-4">
        {call.youtubeUrl !== '#' ? (
          <Link
            href={call.youtubeUrl}
            target="_blank"
            className="font-semibold text-lg mb-1 text-slate-900 hover:text-blue-600"
          >
            {call.title}
          </Link>
        ) : (
          <div className="flex items-center">
            <p className="font-semibold text-lg mb-1 text-slate-900">{call.title}</p>
            {status === 'upcoming' && (
              <span className="ml-2 text-xs bg-red-500 text-white rounded-md px-2 py-1">Soon!</span>
            )}
          </div>
        )}
        <p className="text-xs text-slate-500 mb-2">{call.date}</p>
        <p className="text-sm text-slate-600">{call.summary}</p>
        {call.resources && call.resources.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-slate-700">Resources:</p>
            <div className="flex flex-wrap gap-2">
              {call.resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.url}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200"
                >
                  {getResourceIcon(resource.type)}
                  {resource.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        {call.youtubeUrl !== '#' ? (
          <Link
            href={call.youtubeUrl}
            className="text-sm font-medium text-slate-700 hover:text-slate-900 flex items-center gap-1"
            target="_blank"
          >
            Watch on YouTube <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        ) : (
          <p className="text-sm text-slate-400">Recording not yet available.</p>
        )}
      </CardFooter>
    </Card>
  );
}
