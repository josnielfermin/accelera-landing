import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Input, Button, Slider } from '@/components/UI';
const Withdraw = () => {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  return (
    <>
      <div className="flex items-center gap-4 px-5 select-none w-full">
        <div className="rounded-[20px] bg-[#1A201C] relative flex flex-col min-w-[105px] lg:min-w-[180px] w-full pt-7 px-4 lg:pb-[17px] pb-3 gap-4">
          <div className="absolute right-2 top-2 rounded-full w-7 h-7 [background:linear-gradient(0deg,_#354239_0%,_#354239_100%)] flex items-center justify-center">
            <span className="icon-pig text-pastel-green-500 text-xs"></span>
          </div>
          <div className="text-woodsmoke-50 text-2xl font-normal">0</div>
          <div className="text-[10px] font-normal text-woodsmoke-50">
            Amount Available
          </div>
        </div>
        <div className="rounded-[20px] bg-[#1A201C] relative flex flex-col min-w-[105px] lg:min-w-[180px] w-full pt-7 px-4 lg:pb-[17px] pb-3 gap-4">
          <div className="absolute right-2 top-2 rounded-full w-7 h-7 [background:linear-gradient(0deg,_#354239_0%,_#354239_100%)] flex items-center justify-center">
            <span className="icon-rocket-1 text-pastel-green-500 text-xs"></span>
          </div>
          <div className="text-woodsmoke-50 text-2xl font-normal">0</div>
          <div className="text-[10px] font-normal text-woodsmoke-50">
            Amount Withdraw
          </div>
        </div>
      </div>
      <div className="relative px-5 w-full">
        <Input
          placeholder="Enter amount"
          inputClassName="w-auto"
          value={withdrawAmount}
          onInput={(e: any) => setWithdrawAmount(e.target.value)}
          postfix={
            <div className="flex items-center gap-1">
              <div className="bg-[#2F3932] w-[60px] h-[35px] rounded-[100px] flex items-center justify-center text-pastel-green-50 text-xs font-normal cursor-pointer select-none active:bg-pastel-green-400 max-sm:hidden">
                25%
              </div>
              <div className="bg-[#2F3932] w-[60px] h-[35px] rounded-[100px] flex items-center justify-center text-pastel-green-50 text-xs font-normal cursor-pointer select-none active:bg-pastel-green-400 max-sm:hidden">
                50%
              </div>
              <div className="bg-[#2F3932] w-[60px] h-[35px] rounded-[100px] flex items-center justify-center text-pastel-green-50 text-xs font-normal cursor-pointer select-none active:bg-pastel-green-400">
                Max
              </div>
            </div>
          }
        />
      </div>
      <div className="relative px-5 w-full">
        <Slider />
      </div>
      <div className="w-full relative px-5">
        <Button variant="secondary" className="!font-normal mb-10 select-none">
          Withdraw
          <span className="icon-arrow-right ml-2"></span>
        </Button>
      </div>
    </>
  );
};

export default Withdraw;
