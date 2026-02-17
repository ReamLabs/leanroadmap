import { Card } from '@/components/ui/primitives';
import { timelineData, TIMELINE_CONFIG } from '@/data/timeline';

type TimelineDate = {
  year: number;
  month: number;
};

const getTimelineDate = (): TimelineDate => {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  };
};

// Helper function to convert date to months since start
const getMonthsSinceStart = (date: TimelineDate) => {
  return (date.year - TIMELINE_CONFIG.START_YEAR) * 12 + (date.month - 1);
};

// Helper function to calculate grid position percentage
const getGridOffsetPercentage = (date: TimelineDate) => {
  const currentMonths = getMonthsSinceStart(date);
  // Use the same calculation as timeline bars for consistency
  const totalMonths = TIMELINE_CONFIG.TOTAL_MONTHS + 12;
  const percentage = (currentMonths / totalMonths) * 100;

  return percentage;
};

const getGridRange = (
  startDate: { year: number; month: number },
  endDate: { year: number; month: number },
) => {
  const startMonths = getMonthsSinceStart(startDate);
  const endMonths = getMonthsSinceStart(endDate) + 1;

  return {
    // Adding 12 because our component renders the entire of 2030 which is not part of the timeline
    startOffset: (startMonths / (TIMELINE_CONFIG.TOTAL_MONTHS + 12)) * 100,
    endOffset: (endMonths / (TIMELINE_CONFIG.TOTAL_MONTHS + 12)) * 100,
  };
};

export function Timeline() {
  const CURRENT_DATE = getTimelineDate();
  const weHereMarkerOffsetPercentage = getGridOffsetPercentage(CURRENT_DATE);

  return (
    <Card className="relative bg-white/80 backdrop-blur-sm border-slate-200/60 p-6 overflow-visible shadow-sm">
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-transparent to-amber-50/20 pointer-events-none" />

      <div className="relative px-4 md:px-8 py-4 overflow-x-auto">
        <div className="relative -mr-44">
          {/* Year marker lines */}
          <div className="absolute inset-0">
            <div className="grid grid-cols-7 h-full">
              {Array.from({
                length: TIMELINE_CONFIG.END_YEAR - TIMELINE_CONFIG.START_YEAR + 1,
              }).map((_, index) => (
                <div key={index} className="relative h-full">
                  <div className="absolute top-0 bottom-0 -left-3 w-px bg-gradient-to-b from-slate-200 via-slate-200/50 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* Year labels */}
          <div className="grid grid-cols-7 mb-14 relative">
            {Array.from({ length: TIMELINE_CONFIG.END_YEAR - TIMELINE_CONFIG.START_YEAR + 1 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="font-mono-data text-sm font-medium text-slate-700 tracking-tight"
                >
                  {TIMELINE_CONFIG.START_YEAR + index}
                </div>
              ),
            )}
          </div>

          {/* We are here marker */}
          <div
            className="absolute z-20"
            style={{
              left: `${weHereMarkerOffsetPercentage}%`,
              top: '1.5rem',
              bottom: '0',
            }}
          >
            {/* Vertical line with gradient */}
            <div className="absolute left-0 top-6 bottom-0 w-px bg-gradient-to-b from-teal-500 via-teal-400/50 to-transparent" />

            {/* Label */}
            <div className="absolute -translate-x-1/2 whitespace-nowrap">
              <div className="relative">
                <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full shadow-lg shadow-teal-500/25 animate-pulse-subtle">
                  Now
                </div>
                {/* Arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full">
                  <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-teal-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Timeline bars */}
          <div className="relative h-44">
            {timelineData.map((item, index) => {
              const { startOffset, endOffset } = getGridRange(item.startDate, item.endDate);
              const width = endOffset - startOffset;

              return (
                <div
                  key={item.id}
                  className="absolute"
                  style={{
                    top: `${index * 3.5}rem`,
                    left: `${startOffset}%`,
                    width: `${width}%`,
                  }}
                >
                  {/* Simple filled bar */}
                  <div className={`h-2 w-full ${item.color} rounded`} />

                  {/* Icon and title */}
                  <div className="absolute -top-9 flex items-center gap-2.5">
                    <div
                      className={`${item.color} w-10 h-10 flex items-center justify-center text-white rounded-t-md`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm text-slate-900">{item.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add the animation keyframes */}
      <style jsx global>{`
        @keyframes pulse-subtle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </Card>
  );
}
