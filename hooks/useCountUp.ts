'use client';

import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  duration?: number;
  startOnMount?: boolean;
}

export function useCountUp(
  endValue: number,
  options: UseCountUpOptions = {},
): [number, () => void, boolean] {
  const { duration = 1000, startOnMount = false } = options;
  const [currentValue, setCurrentValue] = useState(startOnMount ? 0 : endValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const animate = () => {
    if (hasAnimated) return;

    setHasAnimated(true);
    setCurrentValue(0);
    startTimeRef.current = null;

    const step = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const value = easeOut * endValue;

      setCurrentValue(value);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      }
    };

    animationRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return [currentValue, animate, hasAnimated];
}

// Parse a value string and extract numeric parts
export function parseValueString(value: string): {
  prefix: string;
  number: number | null;
  suffix: string;
  isRange: boolean;
  rangeMin?: number;
  rangeMax?: number;
} {
  // Handle range values like "~400 - 500"
  const rangeMatch = value.match(/^([~]?)(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)$/);
  if (rangeMatch) {
    return {
      prefix: rangeMatch[1],
      number: null,
      suffix: '',
      isRange: true,
      rangeMin: parseFloat(rangeMatch[2]),
      rangeMax: parseFloat(rangeMatch[3]),
    };
  }

  // Handle single values like "~500", "3.5", "146"
  const singleMatch = value.match(/^([~]?)(\d+(?:\.\d+)?)(.*)$/);
  if (singleMatch) {
    return {
      prefix: singleMatch[1],
      number: parseFloat(singleMatch[2]),
      suffix: singleMatch[3],
      isRange: false,
    };
  }

  return {
    prefix: '',
    number: null,
    suffix: value,
    isRange: false,
  };
}
