'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const TokensBalance = () => {
  return (
    <div className="flex items-center justify-between gap-3 relative z-[2] w-full max-lg:hidden">
      <div className="text-white text-xs font-medium flex items-center gap-2">
        <div className="flex items-center justify-center w-4 h-4 bg-pastel-green-400/50 rotate-45 touch-none">
          <div className="flex items-center justify-center w-2 h-2 bg-pastel-green-400"></div>
        </div>
        TVL $1.4B
      </div>
      <div className="flex items-center gap-8">
        <div className="text-white text-xs font-medium flex items-center gap-2">
          <Image
            src={'/static/images/tokens/accel.png'}
            alt="ACCEL"
            width={16}
            height={16}
          />
          <div>ACCEL</div> $13.72
        </div>
        <div className="text-white text-xs font-medium flex items-center gap-2">
          <Image
            src={'/static/images/tokens/usdx.png'}
            alt="USDx"
            width={16}
            height={16}
          />
          <div>USDx</div> $1.01
        </div>
        <div className="text-white text-xs font-medium flex items-center gap-2">
          <Image
            src={'/static/images/tokens/eth.png'}
            alt="USDx"
            width={16}
            height={16}
          />
          <div>ETH</div> $3,241.55
        </div>
      </div>
    </div>
  );
};

export default TokensBalance;
