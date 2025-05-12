import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// components
import { Button } from '@/components/UI';

// helpers
import {
  formatAmount,
  formatCurrency,
  formatDollarAmount,
  formatNumberWithDots,
  toBN,
} from '@/library/utils/numbers';

import { Reward } from '@/library/types/common/rewards';

// personal models
enum TooltipTypes {
  APR = 'APR',
  TVL = 'TVL',
  VOLUME = 'VOLUME',
  FEES = 'FEES',
}

interface Props {
  row: Reward;
  index: number;
}

// personal constants

function MobileRow({ row, index }: Props) {
  // state
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  return (
    <div
      className={`
        px-3 py-3 rounded-[10px] bg-[#1A201C] hover:bg-[#222A25] lg:hidden flex flex-col
        ${openDropdown ? 'bg-opacity-80' : 'bg-opacity-20'} 
      `}
    >
      <div className="w-full flex items-center justify-between">
        <div className={`flex justify-start items-center gap-1`}>
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
        </div>
        <div
          className={`icon-arrow-right-up cursor-pointer ${
            openDropdown ? 'text-pastel-green-400' : 'text-woodsmoke-800'
          }`}
          onClick={() => setOpenDropdown(!openDropdown)}
        ></div>
      </div>
      {openDropdown ? (
        <>
          {/* TVL */}
          <div className="flex items-center justify-between w-full py-2 mt-2">
            <div className="text-sm text-[#888] font-normal">Balance</div>
            <div className="relative flex gap-1.5 items-center">
              <p className="text-xs whitespace-nowrap text-woodsmoke-50 font-medium">
                {row.balance}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full py-2">
            <div className="text-sm text-[#888] font-normal">Points</div>
            <div className="relative flex gap-1.5 items-center">
              <p className="text-xs whitespace-nowrap text-woodsmoke-50 font-medium">
                {row.points}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full py-2">
            <div className="text-sm text-[#888] font-normal">Bonus</div>
            <div className="relative flex items-center">
              <p className="text-xs whitespace-nowrap text-woodsmoke-50 font-medium">
                {row.bonus}
              </p>
              <Image
                src={'/static/images/season-zero/accel.png'}
                alt="ACCEL"
                width={10}
                height={10}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-full py-2">
            <div className="text-sm text-[#888] font-normal">Action</div>
            <div className="relative flex flex-col justify-center items-end">
              <div className="text-xs font-medium text-woodsmoke-50">Hold</div>
              <div className="text-xs font-medium text-pastel-green-400">
                Deposit xUSDe{' '}
                <span className="icon-arrow-right-up text-pastel-green-400 ml-1"></span>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default MobileRow;
