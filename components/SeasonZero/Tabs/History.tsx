'use client';
import { useMemo, useState } from 'react';
import { Address } from 'viem';

// components
import HistoryRow from '@/components/SeasonZero/Tabs/HistoryRow';
import { TableBody, TableSkeleton, TableHead } from '@/components/UI';
import GetStarted from '@/components/SeasonZero/GetStarted';

// models
import SortTypes from '@/library/types/common/sort-types.enum';
import TableHeaderCell from '@/library/types/common/table-header-cell';
import { Column } from '@/components/UI/Table/TableSkeleton/types';
import { User } from '@/library/types/common/users';

// Hooks
import { useSort } from '@/library/hooks/useSort';
import useMediaQuery from '@/library/hooks/useMediaQuery';

// personal models
interface Props {
  users?: User[];
}
const USERS = [
  {
    id: 0,
    address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53',
    balance: 800,
    userName: 'Muninn3562',
    date: '03/05/2025',
  },
  {
    id: 1,
    address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53',
    balance: 800,
    userName: 'Muninn3562',
    date: '03/05/2025',
  },
  {
    id: 2,
    address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53',
    balance: 800,
    userName: 'Muninn3562',
    date: '03/05/2025',
  },
  {
    id: 3,
    address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53',
    balance: 800,
    userName: 'Muninn3562',
    date: '03/05/2025',
  },
  {
    id: 4,
    address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53',
    balance: 800,
    userName: 'Muninn3562',
    date: '03/05/2025',
  },
  {
    id: 5,
    address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53',
    balance: 800,
    userName: 'Muninn3562',
    date: '03/05/2025',
  },
  {
    id: 6,
    address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53',
    balance: 800,
    userName: 'Muninn3562',
    date: '03/05/2025',
  },
  {
    id: 7,
    address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53',
    balance: 800,
    userName: 'Muninn3562',
    date: '03/05/2025',
  },
  {
    id: 8,
    address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53',
    balance: 800,
    userName: 'Muninn3562',
    date: '03/05/2025',
  },
  {
    id: 9,
    address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53',
    balance: 800,
    userName: 'Muninn3562',
    date: '03/05/2025',
  },
];

// personal constants
const TableHeaderCells: TableHeaderCell[] = [
  { text: 'User', className: `w-[33.33%] max-lg:w-[50%]`, sortBy: 'userName' },
  {
    text: 'Date',
    className: `w-[33.33%] text-center max-lg:w-[25%]`,
    sortBy: 'date',
  },
  {
    text: 'Amount',
    className: `w-[33.33%] text-right max-lg:w-[25%]`,
    sortBy: 'balance',
  },
];

const History = ({ users }: Props) => {
  // common
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [loading, setLoading] = useState(false);
  const COLUMNS: Column[] = [
    {
      cell: { type: 'Token', variant: 'Single' },
      width: isMobile ? 50 : 33.33,
      align: 'left',
      showOnMobile: true,
    },
    {
      cell: { type: 'Text', variant: 'OnlyText' },
      width: isMobile ? 25 : 33.33,
      align: 'center',
      showOnMobile: true,
    },
    {
      cell: { type: 'Text', variant: 'OnlyText' },
      width: isMobile ? 25 : 33.33,
      align: 'right',
      showOnMobile: true,
    },
  ];

  const [sort, setSort] = useState<SortTypes | null>(null);
  const [sortBy, setSortBy] = useState<keyof User | null>(null);

  // computed
  const sortedMappedTableData = useSort({
    sortBy,
    sort,
    data: USERS,
    sortByDefault: 'tvl',
    sortFn: poolsSort,
  });

  // helpers
  function poolsSort(
    a: User,
    b: User,
    defaultSort: (a: User, b: User) => number
  ): number {
    return defaultSort(a, b);
  }

  function toggleSort(sortBy: string | null, sort: SortTypes | null): void {
    setSortBy(sortBy as keyof User);
    setSort(sort);
  }

  return (
    <div className="relative w-full">
      <div className="mb-2.5 xl:mb-5 w-full h-[400px] max-h-[400px] overflow-hidden pb-8 px-8 max-md:px-3">
        <TableHead
          items={TableHeaderCells}
          sort={sort}
          sortBy={sortBy}
          setSort={toggleSort}
        />

        <div className="w-full relative max-h-[320px] pb-5 pr-2 overflow-y-scroll custom-scrollbar">
          <TableBody>
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <TableSkeleton key={index} columns={COLUMNS} />
              ))
            ) : sortedMappedTableData.length <= 0 && !loading ? (
              <GetStarted hideVideo />
            ) : (
              sortedMappedTableData.map((row, index) => (
                <HistoryRow index={index} key={row.id} row={row} />
              ))
            )}
          </TableBody>
        </div>
      </div>
    </div>
  );
};

export default History;
