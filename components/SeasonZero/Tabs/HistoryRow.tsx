'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { shortenAddress } from '@/library/utils/short-address';

// helpers
import {
  formatAmount,
  formatCurrency,
  formatDollarAmount,
  fromWei,
  toBN,
} from '@/library/utils/numbers';

// components
import { Button, TableCell, TableRow } from '@/components/UI';

// models
import { User } from '@/library/types/common/users';

interface Props {
  row: User;
  index: number;
}

const RowData = ({ row, index }: Props) => {
  return (
    <>
      <TableRow>
        <TableCell className="w-[33.33%] max-lg:w-[50%] flex items-center gap-1">
          <Image
            src={'/static/images/landing/user-1-hover.png'}
            alt={row.userName}
            width={22}
            height={22}
            className="rounded-full"
          />
          <div className="flex flex-col gap-0.5 items-start justify-center">
            <div className="text-woodsmoke-50 text-xs font-bold leading-none">
              {row.userName.toLocaleUpperCase()}
            </div>
            <div className="text-woodsmoke-600 text-[.625rem] font-normal leading-none">
              {shortenAddress(row.address, 16)}
            </div>
          </div>
          <span className="icon-arrow-right-up text-pastel-green-400 text-lg"></span>
        </TableCell>

        <TableCell className="w-[33.33%] max-lg:w-[25%] flex justify-center items-center ">
          <div className="text-[.625rem] font-medium text-woodsmoke-600">
            {row.date}
          </div>
        </TableCell>

        <TableCell className="w-[33.33%] max-lg:w-[25%] flex justify-end items-center ">
          <div className="text-xs font-medium text-woodsmoke-50 ">
            {formatDollarAmount(row.balance)}
          </div>
        </TableCell>
      </TableRow>
    </>
  );
};

export default RowData;
