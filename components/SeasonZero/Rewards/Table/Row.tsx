'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
import MobileRow from '@/components/SeasonZero/Rewards/Table/MobileRow';

// models
import { Reward } from '@/library/types/common/rewards';

interface Props {
  row: Reward;
  index: number;
}

const RowData = ({ row, index }: Props) => {
  return (
    <>
      <TableRow className="hidden lg:flex">
        <TableCell className="w-[20%] flex items-center gap-1">
          <Image
            src={'/static/images/season-zero/accel.png'}
            alt="ACCEL"
            width={22}
            height={22}
            className="rounded-full"
          />
          <div className="flex flex-col gap-0.5 items-start justify-center">
            <div className="text-woodsmoke-50 text-xs font-bold leading-none">
              {row.token.toLocaleUpperCase()}
            </div>
            <div className="text-woodsmoke-600 text-[.625rem] font-normal leading-none">
              Pre-Deposit into {row.token.toLocaleUpperCase()}
            </div>
          </div>
        </TableCell>

        <TableCell className="w-[20%] flex justify-center items-center ">
          <div className="text-xs font-medium text-woodsmoke-50">
            {formatAmount(row.balance, 2)}
          </div>
        </TableCell>

        <TableCell className="w-[20%] flex justify-center items-center ">
          <div className="text-xs font-medium text-woodsmoke-50">
            {formatAmount(row.points)}
          </div>
        </TableCell>

        <TableCell className="w-[20%] flex justify-center items-center ">
          <div className="text-xs font-medium text-woodsmoke-50">
            {row.bonus}
          </div>
          <Image
            src={'/static/images/season-zero/accel.png'}
            alt="ACCEL"
            width={10}
            height={10}
            className="rounded-full"
          />
        </TableCell>

        <TableCell className="w-[20%] flex flex-col justify-center items-end gap-0.5">
          <div className="text-xs font-medium text-woodsmoke-50">Hold</div>
          <div className="text-xs font-medium text-pastel-green-400">
            Deposit xUSDe{' '}
            <span className="icon-arrow-right-up text-pastel-green-400 ml-1"></span>
          </div>
        </TableCell>
      </TableRow>
      <MobileRow row={row} index={index} />
    </>
  );
};

export default RowData;
