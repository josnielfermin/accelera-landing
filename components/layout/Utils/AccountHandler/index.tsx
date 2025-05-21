'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/UI';
import { usePathname } from 'next/navigation';
import useActiveConnectionDetails from '@/library/hooks/web3/useActiveConnectionDetails';
import { useAccount, useSwitchChain } from 'wagmi';
import { useConnections } from 'wagmi';
import useMediaQuery from '@/library/hooks/useMediaQuery';
import {
  useAccountModal,
  useChainModal,
  useConnectModal,
} from '@rainbow-me/rainbowkit';
import isSupportedChain from '@/library/utils/is-supported-chain';
import { mainnet } from 'viem/chains';
import { shortenAddress } from '@/library/utils/short-address';
import { Address } from 'viem';
import { FALLBACK_CHAIN_ID } from '@/library/constants/default-chain-info';

const AccountHandler = () => {
  const { isConnected, address, validChainId, chainId } =
    useActiveConnectionDetails();
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const connections = useConnections();

  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();

  const { switchChain } = useSwitchChain();
  const wrongChain = !isSupportedChain(chainId);

  const primaryConnection = connections.find(
    (conn) => address && conn.accounts.includes(address)
  );

  // const openSettings = (e: MouseEvent | TouchEvent): void => {
  //   e.stopPropagation()
  // }

  return (
    <>
      {!isConnected ? (
        <Button
          walletConfig={{
            needWalletConnected: true,
            needSupportedChain: true,
          }}
          variant={isDesktop ? 'primary' : 'secondary'}
          className="max-lg:w-fit"
        >
          Connect your wallet
          <span className="icon-arrow-right ml-2 lg:hidden"></span>
        </Button>
      ) : (
        <div className="group relative w-full transition-all">
          <div
            className={`${
              isDesktop
                ? 'account-handler-box'
                : ' relative flex items-center w-full min-h-[50px] max-h-[50px] px-4 lg:text-sm text-xs font-semibold bg-none focus:outline-none overflow-hidden border border-woodsmoke-800 hover:border-none z-[2] rounded-[100px]'
            } group transition-all gap-4 !text-white lg:bg-[#171717] lg:hover:bg-[#202020] bg-[#1A201C] hover:bg-[#222A25] whitespace-nowrap lg:!max-w-[245px] w-full cursor-pointer`}
            onClick={() => {
              if (wrongChain) {
                switchChain({
                  chainId: FALLBACK_CHAIN_ID,
                });
              } else {
                // openConnectModal && openConnectModal();
                openAccountModal && openAccountModal();
              }
            }}
          >
            <div className="w-5 h-5 absolute -left-[9px] -top-[13px] bg-woodsmoke-800 z-[-1] rotate-[50deg] max-lg:hidden"></div>
            <div className="w-5 h-5 absolute -right-[9px] -bottom-[13px] bg-woodsmoke-800 z-[-1] rotate-[50deg] max-lg:hidden"></div>
            {wrongChain ? (
              <div className="icon-alert-02 text-[#EB5757] text-3xl"></div>
            ) : (
              <div className="relative !w-[32px] !h-[32px] rounded-full bg-palm-green-950 flex items-center justify-center flex-shrink-0">
                {/* <Image
                  src={'/static/images/landing/user-1-hover.png'}
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-full !w-[32px] !h-[32px]"
                /> */}
                <div className="icon-user text-palm-green-400 text-xl"></div>
                {primaryConnection?.connector?.icon !== '' &&
                primaryConnection?.connector?.icon ? (
                  <Image
                    src={connections[0]?.connector?.icon as string}
                    alt=""
                    width={16}
                    height={16}
                    className="rounded-full absolute -bottom-1 -right-1"
                  />
                ) : null}
              </div>
            )}
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-start">
                {/* <div className="text-[#F6F6F6] font-bold text-[10px] leading-normal">
                  {shortenAddress(address)}
                </div> */}
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 ${
                      wrongChain ? 'bg-[#EB5757]' : 'bg-[#2FB869]'
                    } rounded-full`}
                  ></div>
                  <div className="text-[#F6F6F6] font-normal text-[10px] leading-normal">
                    {shortenAddress(address)}
                  </div>
                </div>
              </div>
              <div className="icon-settings-1 text-2xl text-woodsmoke-800 group-hover:text-pastel-green-400 transition-all"></div>
            </div>
          </div>
          {isConnected && (
            <div className="w-[205px] h-[115%] blur-md absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all [background:radial-gradient(circle,_rgba(92,_222,_102,_1)_40%,_rgba(255,_255,_255,_0.23)_100%)] max-lg:hidden"></div>
          )}
        </div>
      )}
    </>
  );
};

export default AccountHandler;
