import { xmssLatest, XMSS_AGGREGATE_TIMING_TARGET, AGGREGATE_SIZE_TARGET, aggregateSize } from './benchmarks/xmss-aggregation';
import { leanSigTimingData, LEANSIG_TIMING_TARGET } from './benchmarks/leansig-timing';

export interface BenchmarkCategory {
  id: string;
  title: string;
  description?: string;
  metrics: BenchmarkMetric[];
}

export interface BenchmarkMetric {
  label: string;
  value: string;
  unit?: string;
  subValue?: string;
  note?: string;
  highlight?: boolean;
}

export const benchmarksData: BenchmarkCategory[] = [
  {
    id: 'leansig',
    title: 'leanSig',
    description: 'Hash-based signature scheme',
    metrics: [
      {
        label: 'Public key size',
        note: '8 elements for root; 5 for randomiser',
        value: '50',
        unit: 'bytes',
      },
      {
        label: 'Signature size',
        note: 'Compact for hash-based sigs',
        value: '3',
        unit: 'KiB',
      },
      {
        label: 'Key generation time',
        note: '10-core MacBook Pro M1; 8 years key lifetime',
        value: '3.5',
        unit: 'hours',
      },
      {
        label: 'Signing time (Target)',
        note: 'Performance goal',
        value: String(LEANSIG_TIMING_TARGET),
        unit: 'μs',
        highlight: true,
      },
      {
        label: 'Signing time',
        note: 'Single core performance, MacBook Pro M1',
        value: `~${leanSigTimingData[0].signing}`,
        unit: 'μs',
        subValue: `${Math.round((leanSigTimingData[0].signing / LEANSIG_TIMING_TARGET) * 100)}% of target${leanSigTimingData[0].signing <= LEANSIG_TIMING_TARGET ? ' 🎉' : ''}`,
      },
      {
        label: 'Verification time (Target)',
        note: 'Performance goal',
        value: String(LEANSIG_TIMING_TARGET),
        unit: 'μs',
        highlight: true,
      },
      {
        label: 'Verification time',
        note: 'Single core performance, MacBook Pro M1',
        value: `~${leanSigTimingData[0].verification}`,
        unit: 'μs',
        subValue: `${Math.round((leanSigTimingData[0].verification / LEANSIG_TIMING_TARGET) * 100)}% of target${leanSigTimingData[0].verification <= LEANSIG_TIMING_TARGET ? ' 🎉' : ''}`,
      },
    ],
  },
  {
    id: 'leanmultisig',
    title: 'leanMultisig',
    description: 'Aggregate signature scheme',
    metrics: [
      {
        label: 'XMSS aggregated (Target)',
        note: 'Performance goal',
        value: String(XMSS_AGGREGATE_TIMING_TARGET),
        unit: 'XMSS/s',
        highlight: true,
      },
      {
        label: 'XMSS aggregated (M4 Max - Efficient)',
        note: 'main branch; optimized for prover efficiency',
        value: `~${xmssLatest.m4}`,
        unit: '/sec',
        subValue: `${Math.round((xmssLatest.m4! / XMSS_AGGREGATE_TIMING_TARGET) * 100)}% of target${xmssLatest.m4! >= XMSS_AGGREGATE_TIMING_TARGET ? ' 🎉' : ''}`,
      },
      {
        label: 'XMSS aggregated (M4 Max - Simple)',
        note: 'lean-vm-simple branch; optimized for simplicity',
        value: `~${xmssLatest.m4vm}`,
        unit: '/sec',
        subValue: `${Math.round((xmssLatest.m4vm! / XMSS_AGGREGATE_TIMING_TARGET) * 100)}% of target${xmssLatest.m4vm! >= XMSS_AGGREGATE_TIMING_TARGET ? ' 🎉' : ''}`,
      },
      {
        label: 'XMSS aggregated (i9-12900H)',
        note: 'Baseline Intel performance',
        value: `~${xmssLatest.i9}`,
        unit: '/sec',
        subValue: `${Math.round((xmssLatest.i9! / XMSS_AGGREGATE_TIMING_TARGET) * 100)}% of target${xmssLatest.i9! >= XMSS_AGGREGATE_TIMING_TARGET ? ' 🎉' : ''}`,
      },
      {
        label: 'Aggregate size (Target)',
        note: 'Performance goal',
        value: `~${AGGREGATE_SIZE_TARGET}`,
        unit: 'KiB',
        highlight: true,
      },
      {
        label: 'Aggregate size (Efficient)',
        note: 'main branch; optimized for prover efficiency',
        value: `~${aggregateSize.efficient.min} - ${aggregateSize.efficient.max}`,
        unit: 'KiB',
        subValue: `${Math.round((aggregateSize.efficient.min / AGGREGATE_SIZE_TARGET) * 100)} - ${Math.round((aggregateSize.efficient.max / AGGREGATE_SIZE_TARGET) * 100)}% of target${aggregateSize.efficient.max <= AGGREGATE_SIZE_TARGET ? ' 🎉' : ''}`,
      },
      {
        label: 'Aggregate size (Simple)',
        note: 'lean-vm-simple branch; optimized for simplicity',
        value: `~${aggregateSize.simple}`,
        unit: 'KiB',
        subValue: `${Math.round((aggregateSize.simple / AGGREGATE_SIZE_TARGET) * 100)}% of target${aggregateSize.simple <= AGGREGATE_SIZE_TARGET ? ' 🎉' : ''}`,
      },
    ],
  },
];
