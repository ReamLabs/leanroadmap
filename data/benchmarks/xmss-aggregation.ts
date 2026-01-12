export interface XmssDataPoint {
  date: string; // Format: "YYYY-MM-DD" e.g. "2025-08-26"
  i9?: number;
  m4?: number;
  m4vm?: number;
}

export const xmssAggregationData: XmssDataPoint[] = [
  { date: '2025-08-26', i9: 35 },
  { date: '2025-09-02', i9: 37 },
  { date: '2025-09-05', i9: 53 },
  { date: '2025-09-09', i9: 62 },
  { date: '2025-09-12', i9: 76 },
  { date: '2025-09-19', i9: 107 },
  { date: '2025-09-27', i9: 137 },
  { date: '2025-10-02', i9: 172 },
  { date: '2025-10-05', i9: 177 },
  { date: '2025-10-07', i9: 193 },
  { date: '2025-10-12', i9: 214 },
  { date: '2025-10-14', i9: 234, m4: 465 },
  { date: '2025-10-21', i9: 255 },
  { date: '2025-10-28', i9: 314, m4: 555 },
  { date: '2025-11-04', i9: 350, m4: 660 },
  { date: '2025-11-11', i9: 380, m4: 720 },
  { date: '2025-12-02', m4: 940, m4vm: 755 },
  { date: '2025-12-05', m4: 970, m4vm: 815 },
];

export const XMSS_AGGREGATE_TIMING_TARGET = 1000;

// Aggregate size in KiB
export const AGGREGATE_SIZE_TARGET = 128;
export const aggregateSize = {
  efficient: { min: 400, max: 500 },
  simple: 300,
};

// Get the latest value for a series
function getLatestValue(key: keyof Omit<XmssDataPoint, 'date'>): number | undefined {
  for (let i = xmssAggregationData.length - 1; i >= 0; i--) {
    const value = xmssAggregationData[i][key];
    if (value !== undefined) {
      return value;
    }
  }
  return undefined;
}

export const xmssLatest = {
  i9: getLatestValue('i9'),
  m4: getLatestValue('m4'),
  m4vm: getLatestValue('m4vm'),
};
