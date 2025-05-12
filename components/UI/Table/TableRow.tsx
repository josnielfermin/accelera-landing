'use client';
import { useState } from 'react';
import React from 'react';
import cn from '@/library/utils/cn';

interface TableRowProps {
  className?: string;
  children: React.ReactNode;
}

const TableRow = ({ className, children }: TableRowProps) => {
  const [isHover, setIsHover] = useState(false);

  const mergeClass = cn(
    'flex rounded-[.625rem] min-h-[3.4375rem] bg-[#1A201C] px-5 max-md:px-2.5 hover:bg-[#222A25] transition-all',
    className
  );

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHover(false);
    }, 350);
  };

  return (
    <div
      className={`${mergeClass} relative`}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </div>
  );
};

export default TableRow;
