'use client';
import { Fragment } from 'react';
// Components
import { TableCellSkeleton, TableRow } from '@/components/UI/Table';
import TokenCell from '@/components/UI/Table/TableSkeleton/Cells/TokenCell';
import TextCell from '@/components/UI/Table/TableSkeleton/Cells/TextCell';
import ActionsCell from '@/components/UI/Table/TableSkeleton/Cells/ActionsCell';
import SliderCell from '@/components/UI/Table/TableSkeleton/Cells/SliderCell';
import PointStackCell from '@/components/UI/Table/TableSkeleton/Cells/PointStackCell';
import useMediaQuery from '@/library/hooks/useMediaQuery';
// Types
import { Column, Cells } from '@/components/UI/Table/TableSkeleton/types';

const getTypeCell = (cell: Cells) => {
  switch (cell.type) {
    case 'Token':
      return <TokenCell variant={cell.variant} />;
    case 'Text':
      return <TextCell variant={cell.variant} />;
    case 'Actions':
      return <ActionsCell variant={cell.variant} />;
    case 'Slider':
      return <SliderCell variant={cell.variant} />;
    case 'PointStack':
      return <PointStackCell variant={cell.variant} />;
    default:
      return null;
  }
};

interface TableSkeletonProps {
  columns?: Column[];
  mobileSize?: string;
}
const TableSkeleton = ({
  columns = [],
  mobileSize = '1024px',
}: TableSkeletonProps) => {
  const isMobile = useMediaQuery(`(max-width: ${mobileSize})`);
  return (
    <>
      <TableRow className="w-full flex items-center">
        {columns.map((column, index) => (
          <Fragment key={index}>
            {isMobile ? (
              <>
                {column.showOnMobile && (
                  <TableCellSkeleton
                    key={index}
                    align={column.align}
                    width={column.width}
                    className={column.className}
                  >
                    {getTypeCell(column.cell)}
                  </TableCellSkeleton>
                )}
              </>
            ) : (
              <TableCellSkeleton
                key={index}
                align={column.align}
                width={column.width}
                className={column.className}
              >
                {getTypeCell(column.cell)}
              </TableCellSkeleton>
            )}
          </Fragment>
        ))}
      </TableRow>
    </>
  );
};

export default TableSkeleton;
