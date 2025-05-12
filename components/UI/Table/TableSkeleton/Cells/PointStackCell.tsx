import React from 'react';
import { PointStackCellVariant } from '@/components/UI/Table/TableSkeleton/types';

interface PointStackCellProps {
  variant: PointStackCellVariant;
}

const PointStackCell = ({ variant }: PointStackCellProps) => {
  return (
    <div className="flex justify-end w-fit items-center gap-3 animate-pulse">
      <div className="flex items-center animate-pulse gap-2">
        <div className="rounded-full w-5 h-5 bg-[#222A25]"></div>
        <div className="rounded-full w-5 h-5 bg-[#222A25]"></div>
        <div className="rounded-full w-5 h-5 bg-[#222A25]"></div>
      </div>
    </div>
  );
};
export default PointStackCell;
