'use client';

import React from 'react';
import cn from '@/library/utils/cn';

interface TableBodyProps {
  className?: string;
  children: React.ReactNode;
}

const TableBody = ({ className, children }: TableBodyProps) => {
  const mergeClass = cn('flex flex-col gap-2 text-white', className);
  return <div className={mergeClass}>{children}</div>;
};

export default TableBody;
