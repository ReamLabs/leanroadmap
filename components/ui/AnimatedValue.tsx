'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { parseValueString } from '@/hooks/useCountUp';

interface AnimatedValueProps {
  value: string;
  className?: string;
  duration?: number;
}

function formatNumber(num: number, decimals: number): string {
  return num.toFixed(decimals).replace(/\.0+$/, '');
}

function getInitialDisplayValue(parsed: ReturnType<typeof parseValueString>): string {
  if (parsed.isRange) {
    return `${parsed.prefix}0 - 0`;
  } else if (parsed.number !== null) {
    return `${parsed.prefix}0${parsed.suffix}`;
  }
  return '';
}

export function AnimatedValue({ value, className, duration = 1000 }: AnimatedValueProps) {
  const parsed = useMemo(() => parseValueString(value), [value]);
  const [displayValue, setDisplayValue] = useState(() => getInitialDisplayValue(parsed));
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);
  const animationRef = useRef<number | null>(null);

  // If no numeric value found, just render the original
  const isAnimatable = parsed.number !== null || parsed.isRange;

  useEffect(() => {
    if (!isAnimatable) return;

    const element = elementRef.current;
    if (!element) return;

    const runAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const startTime = performance.now();

      const step = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);

        if (parsed.isRange && parsed.rangeMin !== undefined && parsed.rangeMax !== undefined) {
          const currentMin = easeOut * parsed.rangeMin;
          const currentMax = easeOut * parsed.rangeMax;
          const minDecimals = parsed.rangeMin % 1 !== 0 ? 1 : 0;
          const maxDecimals = parsed.rangeMax % 1 !== 0 ? 1 : 0;
          setDisplayValue(
            `${parsed.prefix}${formatNumber(currentMin, minDecimals)} - ${formatNumber(currentMax, maxDecimals)}`,
          );
        } else if (parsed.number !== null) {
          const currentNum = easeOut * parsed.number;
          const decimals = parsed.number % 1 !== 0 ? 1 : 0;
          setDisplayValue(`${parsed.prefix}${formatNumber(currentNum, decimals)}${parsed.suffix}`);
        }

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(step);
        }
      };

      animationRef.current = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [duration, isAnimatable, parsed]);

  if (!isAnimatable) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  );
}
