'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/primitives';
import { benchmarksData } from '@/data/benchmarks';
import { XmssAggregationChart } from './XmssAggregationChart';
import { LeanSigTimingChart } from './LeanSigTimingChart';
import { AnimatedValue } from '@/components/ui/AnimatedValue';
import { Activity } from 'lucide-react';

function getPercentageColor(subValue: string, label: string): string {
  // Extract percentage(s) from strings like "97% of target" or "312 - 390% of target"
  const matches = subValue.match(/(\d+)/g);
  if (!matches) return 'text-slate-400';

  // Use the first (or only) percentage for color determination
  const percent = parseInt(matches[0], 10);

  // For size and time metrics, lower is better (being under target is good)
  const lowerIsBetter =
    label.toLowerCase().includes('size') || label.toLowerCase().includes('time');

  if (lowerIsBetter) {
    if (percent <= 100) return 'text-emerald-600';
    if (percent <= 150) return 'text-amber-600';
    return 'text-red-500';
  }

  // For other metrics (speed), higher is better
  if (percent > 100) return 'text-emerald-600';
  if (percent >= 70) return 'text-amber-600';
  return 'text-red-500';
}

export function Benchmarks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {benchmarksData.map((category) => (
        <Card
          key={category.id}
          className="bg-white/80 backdrop-blur-sm border-slate-200/60 shadow-sm"
        >
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 text-white">
                <Activity className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="text-base font-semibold text-slate-800">
                  {category.title}
                </CardTitle>
                {category.description && (
                  <p className="text-xs text-slate-500">{category.description}</p>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {category.id === 'leansig' && (
              <div className="my-4 py-4 border-t border-slate-100">
                <LeanSigTimingChart />
              </div>
            )}
            {category.id === 'leanmultisig' && (
              <div className="my-4 py-4 border-t border-slate-100">
                <XmssAggregationChart />
              </div>
            )}
            <div className="space-y-3">
              {category.metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`flex items-baseline justify-between py-2 border-b border-slate-100 last:border-0 ${
                    metric.highlight ? 'bg-teal-50/50 -mx-2 px-2 rounded-lg border-0' : ''
                  }`}
                >
                  <div className="flex flex-col">
                    <span
                      className={`text-sm ${metric.highlight ? 'font-semibold text-slate-700' : 'text-slate-600'}`}
                    >
                      {metric.label}
                    </span>
                    {metric.note && (
                      <span className="text-[10px] text-slate-400 mt-0.5">{metric.note}</span>
                    )}
                  </div>
                  <div className="flex flex-col items-end shrink-0 ml-4">
                    <div className="flex items-baseline gap-1">
                      <AnimatedValue
                        value={metric.value}
                        className={`font-mono-data text-lg ${
                          metric.highlight
                            ? 'font-bold text-teal-600'
                            : 'font-semibold text-slate-800'
                        }`}
                      />
                      {metric.unit && <span className="text-xs text-slate-500">{metric.unit}</span>}
                    </div>
                    {metric.subValue && (
                      <span
                        className={`text-[10px] ${getPercentageColor(metric.subValue, metric.label)}`}
                      >
                        {metric.subValue}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
