'use client';

import React from 'react';
import Image from 'next/image';

import { Button } from '@/components/UI';
import useStore from '@/store';
import { usePathname } from 'next/navigation';

const AccountHandler = () => {
  const isConnected = useStore((state) => state.isConnected);
  // const { setWalletSelectionModal } = useStore()

  const pathname = usePathname();
  // const handlerConnectWallet = () => pathname !== '/' && setWalletSelectionModal(true)

  return (
    <div className="flex items-center gap-[15px] w-auto">
      <div className="flex w-auto z-[10]">
        <div className="flex w-auto gap-2 lg:gap-5 lg:py-[13px] lg:px-3.5 !pr-0 rounded-[10px] cursor-pointer hover:bg-opacity-10 group">
          <div className="w-full flex items-center gap-2.5">
            <div className="relative flex items-center justify-center w-10 lg:w-12 h-10 lg:h-12 rounded-[10px] bg-shark-400 bg-opacity-40">
              <span className="text-[17px] icon-wallet text-yellow-doge-500"></span>

              <Image
                src="/static/images/wallets/metamask.png"
                className="absolute bottom-0 right-0 w-6 h-6"
                alt="logo"
                width={24}
                height={24}
              />
            </div>
            <div className="">
              <p className="text-xs font-medium text-yellow-doge-500">
                Welcome
              </p>
              <p className="flex items-center text-xs text-white">
                <span className="block w-2 h-2 mr-1.5 bg-green-400 rounded-full"></span>
                <span className="truncate max-w-[70px] lg:max-w-[150px]">
                  0x98b36ab87c6de3c
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-shrink-0 px-4 transition-colors">
            <Image
              src="/static/images/connectWallet/connect.svg"
              className="w-26 h-26"
              alt="logo"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHandler;
