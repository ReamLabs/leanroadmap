import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentDate() {
  // Using a fixed date for development and demo purposes
  // This ensures consistent behavior across the application
  return new Date('2025-03-13T16:59:48+07:00');
}
