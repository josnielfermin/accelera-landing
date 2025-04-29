'use client';

import React from 'react';
import Image from 'next/image';

import { Button } from '@/components/UI';
import { usePathname } from 'next/navigation';

const AccountHandler = () => {
  const pathname = usePathname();

  return (
    <div className="account-handler-box gap-4 !text-white bg-[#171717] max-[1865px]:mr-[31px] whitespace-nowrap lg:!w-[245px]">
      <div className="w-5 h-5 absolute -left-[9px] -top-[13px] bg-woodsmoke-800 z-[-1] rotate-[50deg]"></div>
      <div className="w-5 h-5 absolute -right-[9px] -bottom-[13px] bg-woodsmoke-800 z-[-1] rotate-[50deg]"></div>
      <div className="relative w-[32px] h-[32px]">
        <Image
          src={'/static/images/landing/user-1-hover.png'}
          alt=""
          width={32}
          height={32}
          className="rounded-full !w-[32px] !h-[32px]"
        />
        <Image
          src={'/static/images/header/account-handler/metamask.png'}
          alt=""
          width={16}
          height={16}
          className="rounded-full absolute -bottom-1 -right-1"
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <div className="text-[#F6F6F6] font-bold text-[10px] leading-normal">
            Muninn3562
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#2FB869] rounded-full"></div>
            <div className="text-[#F6F6F6] font-normal text-[10px] leading-normal">
              0x98b36...ab87c6de3c
            </div>
          </div>
        </div>
        <div className="icon-settings-1 text-2xl text-white"></div>
      </div>
    </div>
  );
};

export default AccountHandler;
