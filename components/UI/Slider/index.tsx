'use client';
import { toBN } from '@/library/utils/numbers';
import { useState, useRef, useEffect } from 'react';

interface SliderProps {
  ticks?: number[];
  setValue: (value: number | string) => void;
  maxValue: number;
  currentValue: number;
}

const Slider = ({
  ticks = [0, 25, 50, 75, 100],
  currentValue,
  maxValue,
  setValue,
}: SliderProps) => {
  const DEFAULT_VALUE = 0;
  const [progress, setProgress] = useState(DEFAULT_VALUE);
  const [isDragging, setIsDragging] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Update progress when currentValue changes from outside
  useEffect(() => {
    if (!isDragging && currentValue !== undefined) {
      const newProgress = (Number(currentValue) / maxValue) * 100;
      setProgress(newProgress);
    }
  }, [currentValue, maxValue, isDragging]);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const progressBar = progressRef.current;
    if (!progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
  };

  const handleDragging = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !progressRef.current) return;

    const clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;

    const bar = progressRef.current;
    const rect = bar.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const width = rect.width;

    const clampedX = Math.max(0, Math.min(clickX, width));
    const newProgress = (clampedX / width) * 100;

    setProgress(newProgress);
    const raw = toBN(newProgress).div(100).times(maxValue);
    const formatted = raw.isGreaterThan(0.0001)
      ? raw.toFixed(4)
      : raw.toPrecision(4);
    setValue(formatted);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDragging);
      document.addEventListener('touchmove', handleDragging);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchend', handleDragEnd);
    } else {
      document.removeEventListener('mousemove', handleDragging);
      document.removeEventListener('touchmove', handleDragging);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchend', handleDragEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleDragging);
      document.removeEventListener('touchmove', handleDragging);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging]);
  return (
    <div className="flex flex-col items-center w-full gap-3">
      <div className="flex items-center gap-1 w-full">
        <div
          className={`text-xs font-normal select-none lg:hidden ${
            progress >= ticks[0] ? 'text-white' : 'text-woodsmoke-600'
          }`}
        >
          {ticks[0]}%
        </div>
        <div
          className="flex items-center w-full h-2.5 rounded-[100px] bg-[#1A201C] relative"
          onClick={handleSeek}
          ref={progressRef}
        >
          <div
            className="bg-pastel-green-500 absolute top-0 left-0 bottom-0 h-full rounded-[100px]"
            style={{ width: `${progress}%` }}
          ></div>
          <div
            className="flex items-center justify-center w-6 h-6 max-lg:w-4 max-lg:h-4 bg-pastel-green-400/50 rotate-45 absolute top-1/2 -translate-y-1/2 touch-none"
            style={{ left: `calc(${progress}% - 12px)` }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            <div className="flex items-center justify-center w-3 h-3 max-lg:w-2 max-lg:h-2 bg-pastel-green-400"></div>
          </div>
        </div>
        <div
          className={`text-xs font-normal select-none lg:hidden ${
            progress >= ticks[ticks.length - 1]
              ? 'text-white'
              : 'text-woodsmoke-600'
          }`}
        >
          {ticks[ticks.length - 1]}%
        </div>
      </div>
      <div className="flex items-center justify-between w-full max-lg:hidden">
        {ticks.map((tick, index) => (
          <div
            key={index}
            className={`text-xs font-normal select-none ${
              progress >= tick ? 'text-white' : 'text-woodsmoke-600'
            }`}
          >
            {tick}%
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
