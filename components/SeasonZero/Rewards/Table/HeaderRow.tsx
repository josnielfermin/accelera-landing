'use client';
import { useMemo, useState } from 'react';
import { Address } from 'viem';
// components
import Row from '@/components/SeasonZero/Rewards/Table/Row';
import { TableBody, TableSkeleton, TableHead } from '@/components/UI';
import GetStarted from '@/components/SeasonZero/GetStarted';

// models
import SortTypes from '@/library/types/common/sort-types.enum';
import TableHeaderCell from '@/library/types/common/table-header-cell';
import { Column } from '@/components/UI/Table/TableSkeleton/types';
import { Reward } from '@/library/types/common/rewards';

// Hooks
import { useSort } from '@/library/hooks/useSort';
import useMediaQuery from '@/library/hooks/useMediaQuery';

// personal models
interface Props {
  rewards?: Reward[];
}

// personal constants
const TableHeaderCells: TableHeaderCell[] = [
  { text: 'Venue', className: `w-[20%]` },
  { text: 'Balance', className: `w-[20%] text-center `, sortBy: 'balance' },
  { text: 'Points', className: `w-[20%] text-center `, sortBy: 'points' },
  { text: 'Bonus', className: `w-[20%] text-center `, sortBy: 'bonus' },
  { text: 'Action', className: 'w-[20%] text-right' },
];

const REWARDS: Reward[] = [
  {
    address: '0x',
    token: 'ACCEL',
    balance: 0,
    points: 0,
    bonus: '30x',
    action: 'deposit',
  },
  {
    address: '0x',
    token: 'ACCEL',
    balance: 0,
    points: 0,
    bonus: '30x',
    action: 'deposit',
  },
  {
    address: '0x',
    token: 'ACCEL',
    balance: 0,
    points: 0,
    bonus: '30x',
    action: 'deposit',
  },
  {
    address: '0x',
    token: 'ACCEL',
    balance: 0,
    points: 0,
    bonus: '30x',
    action: 'deposit',
  },
  {
    address: '0x',
    token: 'ACCEL',
    balance: 0,
    points: 0,
    bonus: '30x',
    action: 'deposit',
  },
  {
    address: '0x',
    token: 'ACCEL',
    balance: 0,
    points: 0,
    bonus: '30x',
    action: 'deposit',
  },
  {
    address: '0x',
    token: 'ACCEL',
    balance: 0,
    points: 0,
    bonus: '30x',
    action: 'deposit',
  },
  {
    address: '0x',
    token: 'ACCEL',
    balance: 0,
    points: 0,
    bonus: '30x',
    action: 'deposit',
  },
  {
    address: '0x',
    token: 'ACCEL',
    balance: 0,
    points: 0,
    bonus: '30x',
    action: 'deposit',
  },
  {
    address: '0x',
    token: 'ACCEL',
    balance: 0,
    points: 0,
    bonus: '30x',
    action: 'deposit',
  },
  {
    address: '0x',
    token: 'ACCEL',
    balance: 0,
    points: 0,
    bonus: '30x',
    action: 'deposit',
  },
];

const HeaderRow = ({ rewards }: Props) => {
  // common
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [loading, setLoading] = useState(false);
  const COLUMNS: Column[] = [
    {
      cell: { type: 'Token', variant: 'Single' },
      width: isMobile ? 50 : 20,
      align: 'left',
      showOnMobile: true,
    },
    { cell: { type: 'Text', variant: 'OnlyText' }, width: 20, align: 'center' },
    { cell: { type: 'Text', variant: 'OnlyText' }, width: 20, align: 'center' },
    { cell: { type: 'Text', variant: 'OnlyText' }, width: 20, align: 'center' },
    { cell: { type: 'Text', variant: 'OnlyText' }, width: 20, align: 'right' },
  ];

  const [sort, setSort] = useState<SortTypes | null>(null);
  const [sortBy, setSortBy] = useState<keyof Reward | null>(null);

  // computed
  const sortedMappedTableData = useSort({
    sortBy,
    sort,
    data: REWARDS,
    sortByDefault: '',
    sortFn: poolsSort,
  });

  // helpers
  function poolsSort(
    a: Reward,
    b: Reward,
    defaultSort: (a: Reward, b: Reward) => number
  ): number {
    return defaultSort(a, b);
  }

  function toggleSort(sortBy: string | null, sort: SortTypes | null): void {
    setSortBy(sortBy as keyof Reward);
    setSort(sort);
  }

  return (
    <div className="relative">
      <div className="mb-2.5 xl:mb-5 w-full h-[460px] max-h-[460px] overflow-hidden pt-4 pb-8 px-8 max-md:px-3 [background:linear-gradient(39deg,_rgba(12,_12,_12,_0.80)_4.25%,_rgba(21,_27,_21,_0.80)_112.49%)] rounded-[20px] backdrop-blur-[15px]">
        {!(sortedMappedTableData.length <= 0) ? (
          <div className="hidden lg:block">
            <TableHead
              items={TableHeaderCells}
              sort={sort}
              sortBy={sortBy}
              setSort={toggleSort}
            />
          </div>
        ) : null}

        <div className="w-full relative max-h-[420px] pb-5 lg:pt-10 pt-28 pr-2 overflow-y-scroll custom-scrollbar flex flex-col justify-center h-full">
          <TableBody>
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <TableSkeleton key={index} columns={COLUMNS} />
              ))
            ) : sortedMappedTableData.length <= 0 && !loading ? (
              <GetStarted hideVideo />
            ) : (
              sortedMappedTableData.map((row, index) => (
                <Row index={index} key={row.id} row={row} />
              ))
            )}
          </TableBody>
        </div>
      </div>
    </div>
  );
};

export default HeaderRow;
