'use client';
import { useState } from 'react';

// helpers
import cn from '@/library/utils/cn';

// models
import TableHeaderCell from '@/library/types/common/table-header-cell';
import SortTypes from '@/library/types/common/sort-types.enum';

// personal models
interface TableHeadProps {
  items: TableHeaderCell[];
  setSort: (sortBy: string | null, sort: SortTypes | null) => void;
  sortBy: string | null;
  sort: SortTypes | null;
  defaultSortClass?: string;
}

const TableHead = ({
  items,
  setSort,
  sortBy,
  sort,
  defaultSortClass,
}: TableHeadProps) => {
  const [indexTooltip, setIndexTooltip] = useState<null | number>();

  // helpers
  function handleSort(newSortBy: string | null): void {
    if (!newSortBy) {
      return;
    }

    const newSort =
      newSortBy === sortBy && sort
        ? sort === SortTypes.DESC
          ? SortTypes.ASC
          : null
        : SortTypes.DESC;

    setSort(newSortBy, newSort);
  }

  function mergeClassName(item: TableHeaderCell): string {
    return cn(
      ' ',
      item.sortBy
        ? 'cursor-pointer select-none justify-center '
        : 'cursor-default',
      item.className
    );
  }

  function sortClassName(item: TableHeaderCell): string {
    return cn(
      'icon-arrow-down text-[11px] inline-block ml-2',
      (item.sortBy === sortBy && sort) === SortTypes.DESC ? '-scale-y-100' : '',
      item.sortBy === sortBy && sort ? '' : defaultSortClass || 'hidden  '
    );
  }

  return (
    <div className="flex text-[#888] text-xs font-medium mb-3.5 px-5 relative justify-center ">
      {items.map((item, index) => {
        //
        const openInfo = indexTooltip === index;
        return (
          <div
            key={index}
            className={mergeClassName(item)}
            onClick={() => handleSort(item.sortBy || null)}
          >
            {item.text}
            <span
              onMouseOver={() => item.tooltip && setIndexTooltip(index)}
              onMouseLeave={() => item.tooltip && setIndexTooltip(null)}
              className="leading-normal relative max-w-[20px]"
            >
              {item.tooltip && (
                <span className="icon-info ms-1 cursor-pointer" />
              )}
              {openInfo && (
                <div
                  className={`absolute text-start z-[100]  ${
                    item.widthTooltip
                      ? 'item.widthTooltip'
                      : 'max-w-[17.25rem] w-[17.25rem]'
                  } rounded-[.625rem] bottom-10 flex-col flex p-4 h-auto bg-[#222A25]  gap-3 items-start left-1/2 transform -translate-x-1/2`}
                >
                  <h2 className="text-sm font-medium">{item.text}</h2>
                  <p className="text-shark-100 text-xs whitespace-normal break-words">
                    {item.tooltip}
                  </p>
                </div>
              )}
            </span>
            {item.sortBy ? <span className={sortClassName(item)} /> : null}
          </div>
        );
      })}
    </div>
  );
};

export default TableHead;
