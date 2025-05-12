'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Input, Button, Slider } from '@/components/UI';
import HeaderRow from '@/components/SeasonZero/Rewards/Table/HeaderRow';

const Rewards = () => {
  return (
    <div className="flex flex-col gap-3 relative z-[2] w-full">
      <div className="text-white font-normal text-2xl select-none">
        <span className="font-semibold">Maximize</span> Your Rewards
      </div>
      <div className="text-[#888] text-xs font-medium max-w-[565px] select-none">
        Maximise your points earning potential by depositing xUSDe into partner
        protocols to receive a rewards boost!
      </div>
      <HeaderRow />
    </div>
  );
};

export default Rewards;
