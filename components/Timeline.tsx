import { Card } from '@/components/ui/primitives';
import { getCurrentDate } from '@/lib/utils';
import { timelineData, TIMELINE_CONFIG } from '@/data/timeline';

// Helper function to convert date to months since start
const getMonthsSinceStart = (date: { year: number; month: number }) => {
  return (date.year - TIMELINE_CONFIG.START_YEAR) * 12 + (date.month - 1);
};

// Helper function to calculate grid position percentage
const getGridPosition = (date: { year: number; month: number }) => {
  const totalMonths = getMonthsSinceStart(date);
  return (totalMonths / TIMELINE_CONFIG.TOTAL_MONTHS) * 100;
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
  const now = getCurrentDate();
  const CURRENT_DATE = {
    year: now.getFullYear(),
    month: now.getMonth(),
  };
  const currentOffset = getGridPosition(CURRENT_DATE);

  return (
    <Card className="bg-white border-slate-200 p-4 overflow-clip">
      <div className="relative px-8 py-4">
        <div className="relative -mr-44">
          {/* Year marker lines */}
          <div className="absolute inset-0">
            <div className="grid grid-cols-7 h-full">
              {Array.from({
                length: TIMELINE_CONFIG.END_YEAR - TIMELINE_CONFIG.START_YEAR + 1,
              }).map((_, index) => (
                <div key={index} className="relative h-full">
                  <div className="absolute top-0 bottom-0 -left-3 w-0.5 bg-slate-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Year labels */}
          <div className="grid grid-cols-7 mb-12 relative">
            {Array.from({ length: TIMELINE_CONFIG.END_YEAR - TIMELINE_CONFIG.START_YEAR + 1 }).map(
              (_, index) => (
                <div key={index} className="text-sm font-medium text-slate-900">
                  {TIMELINE_CONFIG.START_YEAR + index}
                </div>
              ),
            )}
          </div>

          {/* We are here marker */}
          <div
            className="absolute w-0 border-l border-dashed border-slate-600/30 animate-pulse-subtle"
            style={{
              left: `${currentOffset}%`,
              top: '1.5rem', // Start after year labels
              bottom: '0', // Extend to bottom
              zIndex: 0,
            }}
          >
            <div className="absolute -translate-x-1/2 whitespace-nowrap z-10">
              <div className="bg-slate-600 text-white text-xs px-2 py-1 rounded animate-pulse-subtle">
                We are here
              </div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 mx-auto border-l-transparent border-r-transparent border-t-slate-600 animate-pulse-subtle" />
            </div>
          </div>

          {/* Timeline bars */}
          <div className="relative h-40">
            {timelineData.map((item, index) => {
              const { startOffset, endOffset } = getGridRange(item.startDate, item.endDate);
              const width = endOffset - startOffset;

              return (
                <div
                  key={item.id}
                  className="absolute"
                  style={{
                    top: `${index * 2.7}rem`,
                    left: `${startOffset}%`,
                    width: `${width}%`,
                  }}
                >
                  {/* Simple filled bar */}
                  <div className={`h-2 w-full ${item.color} rounded-full`} />

                  {/* Icon and title */}
                  <div className="absolute -top-8 flex items-center gap-2.5">
                    <div className={`${item.color} p-2 rounded-lg text-white`}>{item.icon}</div>
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
