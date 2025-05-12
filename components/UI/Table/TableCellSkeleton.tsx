import React from 'react';
import { TableCell } from '@/components/UI';

// Utils
import cn from '@/library/utils/cn';

interface ExtendedTableCellProps {
  width?: number;
  align?: 'left' | 'right' | 'center';
  children?: React.ReactNode;
  className?: string;
}

const TableCellSkeleton = ({
  width,
  align = 'left',
  children,
  className = '',
}: ExtendedTableCellProps) => {
  const variantAlign = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[align];

  const mergeClassName = cn(
    'flex',
    variantAlign,
    `min-w-[${width}%] w-[${width}%]`,
    className
  );

  return (
    <TableCell className={mergeClassName + ' flex-grow'}>{children}</TableCell>
  );
};

export default TableCellSkeleton;
