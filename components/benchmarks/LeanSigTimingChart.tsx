'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { leanSigTimingData, leanSigSeriesConfig } from '@/data/leansig-timing';

export function LeanSigTimingChart() {
  const hasData = leanSigTimingData.length > 0;

  return (
    <div className="w-full">
      <h4 className="text-sm font-medium text-slate-700 mb-3 text-center">
        Signature Signing & Verification Time
      </h4>
      <ResponsiveContainer width="100%" height={240}>
        {hasData ? (
          <LineChart data={leanSigTimingData} margin={{ top: 0, right: 40, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: '#64748b' }}
              tickLine={{ stroke: '#cbd5e1' }}
              axisLine={{ stroke: '#cbd5e1' }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#64748b' }}
              tickLine={{ stroke: '#cbd5e1' }}
              axisLine={{ stroke: '#cbd5e1' }}
              unit="s"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              formatter={(value: number, name: string) => {
                const config = leanSigSeriesConfig[name as keyof typeof leanSigSeriesConfig];
                return [`${value}s`, config?.label || name];
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
              formatter={(value: string) => {
                const config = leanSigSeriesConfig[value as keyof typeof leanSigSeriesConfig];
                return config?.label || value;
              }}
            />
            <Line
              type="monotone"
              dataKey="signing"
              stroke={leanSigSeriesConfig.signing.color}
              strokeWidth={2}
              dot={{ fill: leanSigSeriesConfig.signing.color, strokeWidth: 0, r: 4 }}
              connectNulls
            />
            <Line
              type="monotone"
              dataKey="verification"
              stroke={leanSigSeriesConfig.verification.color}
              strokeWidth={2}
              dot={{ fill: leanSigSeriesConfig.verification.color, strokeWidth: 0, r: 4 }}
              connectNulls
            />
          </LineChart>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-slate-400 italic">Chart coming soon</p>
          </div>
        )}
      </ResponsiveContainer>
    </div>
  );
}
