'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { leanSigTimingData, LEANSIG_TIMING_TARGET } from '@/data/benchmarks/leansig-timing';

const seriesConfig = {
  signing: {
    label: 'Signing',
    color: '#8b5cf6',
  },
  verification: {
    label: 'Verification',
    color: '#06b6d4',
  },
};

export function LeanSigTimingChart() {
  const hasData = leanSigTimingData.length > 0;

  return (
    <div className="w-full">
      <h4 className="text-sm font-medium text-slate-700 mb-3 text-center">
        Signature Signing & Verification Time
      </h4>
      <ResponsiveContainer width="100%" height={240}>
        {hasData ? (
          <BarChart data={leanSigTimingData} margin={{ top: 0, right: 40, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="config"
              tick={{ fontSize: 11, fill: '#64748b' }}
              tickLine={{ stroke: '#cbd5e1' }}
              axisLine={{ stroke: '#cbd5e1' }}
              padding={{ left: 20, right: 60 }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#64748b' }}
              tickLine={{ stroke: '#cbd5e1' }}
              axisLine={{ stroke: '#cbd5e1' }}
              unit=" µs"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              formatter={(value: number, name: string) => {
                const config = seriesConfig[name as keyof typeof seriesConfig];
                return [`${value} µs`, config?.label || name];
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
              formatter={(value: string) => {
                const config = seriesConfig[value as keyof typeof seriesConfig];
                return config?.label || value;
              }}
            />
            <ReferenceLine
              y={LEANSIG_TIMING_TARGET}
              stroke="#555555"
              strokeDasharray="7 3"
              strokeWidth={2}
              label={({ viewBox }) => (
                <text
                  x={viewBox.width + viewBox.x - 5}
                  y={viewBox.y - 20}
                  textAnchor="end"
                  fontSize={11}
                  fill="#555555"
                >
                  <tspan x={viewBox.width + viewBox.x - 5} dy={0}>Target</tspan>
                  <tspan x={viewBox.width + viewBox.x - 5} dy={13}>({LEANSIG_TIMING_TARGET} µs)</tspan>
                </text>
              )}
            />
            <Bar
              dataKey="signing"
              fill={seriesConfig.signing.color}
              radius={[4, 4, 0, 0]}
              label={{ position: 'top', fontSize: 9, fill: '#94a3b8', formatter: (v: number) => `${v}µs` }}
            />
            <Bar
              dataKey="verification"
              fill={seriesConfig.verification.color}
              radius={[4, 4, 0, 0]}
              label={{ position: 'top', fontSize: 9, fill: '#94a3b8', formatter: (v: number) => `${v}µs` }}
            />
          </BarChart>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-slate-400 italic">Chart coming soon</p>
          </div>
        )}
      </ResponsiveContainer>
    </div>
  );
}
