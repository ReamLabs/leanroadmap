import {
  Shield,
  Lock,
  FileCheck,
  Cpu,
  Feather,
  FileCode,
  Pill,
  Pencil,
  Hammer,
  FlaskConical,
} from 'lucide-react';
import type { ReactNode } from 'react';

export interface TimelineItem {
  id: string;
  title: string;
  startDate: { year: number; month: number };
  endDate: { year: number; month: number };
  icon: ReactNode;
  color: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: 'pilling',
    title: 'Pilling',
    startDate: { year: 2024, month: 1 },
    endDate: { year: 2025, month: 3 },
    icon: <Pill className="h-5 w-5" />,
    color: 'bg-slate-300',
  },
  {
    id: 'speccing',
    title: 'Speccing',
    startDate: { year: 2025, month: 1 },
    endDate: { year: 2026, month: 5 },
    icon: <Pencil className="h-5 w-5" />,
    color: 'bg-amber-500',
  },
  {
    id: 'building',
    title: 'Building',
    startDate: { year: 2026, month: 1 },
    endDate: { year: 2027, month: 11 },
    icon: <Hammer className="h-5 w-5" />,
    color: 'bg-blue-500',
  },
  {
    id: 'testing',
    title: 'Testing',
    startDate: { year: 2027, month: 1 },
    endDate: { year: 2029, month: 1 },
    icon: <FlaskConical className="h-5 w-5" />,
    color: 'bg-green-500',
  },
];

export const TIMELINE_CONFIG = {
  START_YEAR: 2024,
  END_YEAR: 2030,
  TOTAL_MONTHS: (2030 - 2024) * 12,
};
