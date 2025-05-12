'use client';

import { useState, useEffect, useRef } from 'react';
import PreDeposits from '@/components/SeasonZero/Tabs/PreDeposit';
import Withdraw from '@/components/SeasonZero/Tabs/Withdraw';
import History from '@/components/SeasonZero/Tabs/History';

const TABS = [
  {
    id: 0,
    name: 'Pre-Deposits',
  },
  {
    id: 1,
    name: 'Withdraw',
    disable: true,
  },
  {
    id: 2,
    name: 'History',
    disable: true,
  },
];

const TransactionPanel = () => {
  const [tabSelected, setTabSelected] = useState(0);
  // const [depositAmount, setDepositAmount] = useState('');
  // const [withdrawAmount, setWithdrawAmount] = useState('');

  return (
    <div className="flex flex-col gap-3 relative z-[2] w-full lg:w-[58%]">
      <div className="text-xl text-white font-normal lg:text-[32px] select-none">
        <span className="font-semibold">Deposit</span> to Earn Rewards
      </div>
      <div className="text-[#888] text-xs font-medium max-w-[474px] select-none">
        Deposit USDe to receive xUSDe receipt tokens. Hold to accumulate an
        increasing amount of ACCEL points and bonus Ethena Sats over time.
      </div>
      <div className="mt-5 lg:mt-1 flex flex-col items-center gap-8 [background:linear-gradient(39deg,_rgba(12,_12,_12,_0.80)_4.25%,_rgba(21,_27,_21,_0.80)_112.49%)] backdrop-blur-[15px] rounded-[20px] lg:max-h-[460px]">
        <div className="grid grid-cols-3 gap-0 w-full">
          {TABS.map((tab) => (
            <div
              key={tab.id}
              className={`w-full transition-all border-b text-center hover:text-pastel-green-50 whitespace-nowrap py-2.5 cursor-pointer hover:border-pastel-green-500 text-xs font-medium ${
                tab.id === tabSelected
                  ? 'border-pastel-green-500 text-pastel-green-50'
                  : ' text-woodsmoke-600 border-transparent'
              }`}
              onClick={() => setTabSelected(tab.id)}
            >
              <span className="select-none">{tab.name}</span>
            </div>
          ))}
        </div>
        {tabSelected === 0 ? (
          <PreDeposits />
        ) : tabSelected === 1 ? (
          <Withdraw />
        ) : (
          <History />
        )}
      </div>
    </div>
  );
};

export default TransactionPanel;
