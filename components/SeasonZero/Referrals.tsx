'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Input, Card } from '@/components/UI';
import { shortenAddress } from '@/library/utils/short-address';
import { useToast } from '@/context/ToastContext';

const REFERRALS = [
  { id: 0, address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53', points: 300 },
  { id: 1, address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53', points: 300 },
  { id: 2, address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53', points: 300 },
  { id: 3, address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53', points: 300 },
  { id: 4, address: '0x5FB8d08Cd91a8a8E90Ef8C1d4D739E2a2a79ba53', points: 300 },
];

const TransactionPanel = () => {
  const [tabSelected, setTabSelected] = useState(0);
  const [referralLink, setReferralLink] = useState('');
  const { showToast } = useToast();

  const handleCopy = () => {
    showToast({
      message: 'Link copied to clipboard',
      iconClass: 'icon-bulb',
    });
  };
  return (
    <div
      className={`flex flex-col items-center [background:linear-gradient(39deg,_rgba(12,_12,_12,_0.80)_4.25%,_rgba(21,_27,_21,_0.80)_112.49%)] backdrop-blur-[15px] rounded-[20px] relative z-[2] lg:mt-[87px] w-full lg:w-[40%] h-fit max-h-[460px] ${
        REFERRALS.length >= 2 && 'self-end'
      }`}
    >
      <div className="text-base font-normal text-pastel-green-50 w-full ml-12 mt-[17px]">
        Referrals{' '}
        <span className="icon-info ml-2 relative group">
          <div className="absolute -top-24 left-0 w-[300px] px-5 pb-6 pt-7 rounded-[20px] [background:linear-gradient(39deg,_#0D110E_4.25%,_#374A39_112.49%)] invisible group-hover:visible opacity-0 group-hover:opacity-100">
            <div className="icon-bulb text-woodsmoke-200 text-lg absolute top-1 right-3"></div>
            <div className="text-woodsmoke-200 text-xs font-normal">
              Share your referral link to earn 10% of the rewards from users who
              join and deposit liquidity.
            </div>
          </div>
        </span>
      </div>
      <div className="flex flex-col gap-2 w-full px-5 mt-2 mb-4">
        <div className="flex items-center justify-between w-[98%] px-1">
          <div className="text-woodsmoke-50 text-xs font-normal">Address</div>
          <div className="text-woodsmoke-50 text-xs font-normal">
            Points Earned
          </div>
        </div>
        <div className="flex flex-col max-h-[98px] overflow-y-scroll pr-1.5 gap-2 w-full custom-scrollbar">
          {REFERRALS.map((referral) => (
            <div
              key={referral.id}
              className="bg-[#1A201C] hover:bg-[#222A25] transition-all rounded-[10px] w-full max-w-full !h-[45px] px-5 py-5 mx-0 flex items-center justify-between"
            >
              <div className="text-woodsmoke-50 text-xs font-normal">
                {shortenAddress(referral.address, 12)}
              </div>
              <div className="text-woodsmoke-50 text-xs font-normal">
                {referral.points}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 pt-4 pb-8 bg-[#141815] backdrop-blur-[15px] rounded-[20px] flex flex-col items-center gap-2 w-full">
        <div className="text-sm font-normal text-pastel-green-50 w-full mt-[17px] px-1">
          Your Referral Link
        </div>
        <div className="relative w-full">
          <Input
            placeholder="Enter a Link"
            inputClassName="w-auto"
            value={referralLink}
            onInput={(e: any) => setReferralLink(e)}
            postfix={
              <div className="flex items-center gap-1">
                <div
                  className="bg-[#2F3932] px-2.5 h-[35px] rounded-[100px] flex items-center justify-center text-pastel-green-50 text-xs font-normal cursor-pointer select-none active:bg-pastel-green-400"
                  onClick={handleCopy}
                >
                  Copy <span className="icon-copy ml-2"></span>
                </div>
              </div>
            }
          />
        </div>
        <div className="flex items-center gap-4 select-none w-full">
          <Card
            title={'Total Referred Users'}
            value={0}
            icon={
              <div className="absolute right-2 top-2 rounded-full w-7 h-7 [background:linear-gradient(0deg,_#354239_0%,_#354239_100%)] flex items-center justify-center">
                <span className="icon-users text-pastel-green-500 text-xs"></span>
              </div>
            }
          />
          <Card
            title={'Total Points Earned'}
            value={0}
            icon={
              <div className="absolute right-2 top-2 rounded-full w-7 h-7 [background:linear-gradient(0deg,_#354239_0%,_#354239_100%)] flex items-center justify-center">
                <span className="icon-rocket-1 text-pastel-green-500 text-xs"></span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionPanel;
