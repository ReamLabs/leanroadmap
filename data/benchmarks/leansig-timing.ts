export interface LeanSigDataPoint {
  config: string;
  signing: number;
  verification: number;
}

// Time in microseconds (µs)
export const LEANSIG_TIMING_TARGET = 500;

export const leanSigTimingData: LeanSigDataPoint[] = [
  { config: 'Hashing Optimized', signing: 535.2, verification: 193.42 },
  { config: 'Trade-off', signing: 685.19, verification: 270.98 },
  { config: 'Size Optimized', signing: 1213.4, verification: 392.67 },
];
