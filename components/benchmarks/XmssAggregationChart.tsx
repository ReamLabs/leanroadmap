'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import {
  xmssAggregationData,
  XMSS_AGGREGATE_TIMING_TARGET,
} from '@/data/benchmarks/xmss-aggregation';

const seriesConfig = {
  i9: {
    label: 'i9-12900H',
    color: '#2e86ab',
  },
  m4: {
    label: 'M4 Max (efficient)',
    color: '#ef4444',
  },
  m4vm: {
    label: 'M4 Max (lean-vm-simple)',
    color: '#22c55e',
  },
};

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });
};

export function XmssAggregationChart() {
  return (
    <div className="w-full">
      <h4 className="text-sm font-medium text-slate-700 mb-3 text-center">
        XMSS Aggregated / Second
      </h4>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={xmssAggregationData} margin={{ top: 0, right: 40, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            tick={{ fontSize: 11, fill: '#64748b' }}
            tickLine={{ stroke: '#cbd5e1' }}
            axisLine={{ stroke: '#cbd5e1' }}
          />
          <YAxis
            domain={[0, 1100]}
            ticks={[0, 200, 400, 600, 800, 1000]}
            tick={{ fontSize: 11, fill: '#64748b' }}
            tickLine={{ stroke: '#cbd5e1' }}
            axisLine={{ stroke: '#cbd5e1' }}
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
              return [value, config?.label || name];
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
            y={XMSS_AGGREGATE_TIMING_TARGET}
            stroke="#555555"
            strokeDasharray="7 3"
            strokeWidth={2}
            label={{
              value: `Target (${XMSS_AGGREGATE_TIMING_TARGET}/s)`,
              position: 'insideTopLeft',
              fontSize: 11,
              fill: '#555555',
            }}
          />
          <Line
            type="monotone"
            dataKey="i9"
            stroke={seriesConfig.i9.color}
            strokeWidth={2}
            dot={{ fill: seriesConfig.i9.color, strokeWidth: 0, r: 4 }}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="m4"
            stroke={seriesConfig.m4.color}
            strokeWidth={2}
            dot={{ fill: seriesConfig.m4.color, strokeWidth: 0, r: 4 }}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="m4vm"
            stroke={seriesConfig.m4vm.color}
            strokeWidth={2}
            dot={{ fill: seriesConfig.m4vm.color, strokeWidth: 0, r: 4 }}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
