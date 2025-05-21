import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Input, Button, Slider, Card } from '@/components/UI';
import { PREDEPOSIT_VAULT_ADDRESS } from '@/library/constants/addresses';
import useToken from '@/library/hooks/web3/use-token';
import useActiveConnectionDetails from '@/library/hooks/web3/use-active-connection-details';
const Withdraw = () => {
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const { validChainId } = useActiveConnectionDetails();
  const vaultToken = useToken(
    PREDEPOSIT_VAULT_ADDRESS[validChainId],
    validChainId,
    {
      includeBalance: true,
    }
  );
  return (
    <>
      <div className="flex items-center gap-4 px-5 select-none w-full">
        <Card
          title={'Amount Available to Withdraw'}
          value={vaultToken.shifftedBalance}
          icon={
            <div className="absolute right-2 top-2 rounded-full w-7 h-7 [background:linear-gradient(0deg,_#354239_0%,_#354239_100%)] flex items-center justify-center">
              <span className="icon-rocket-1 text-pastel-green-500 text-xs"></span>
            </div>
          }
        />
      </div>
      <div className="relative px-5 w-full">
        <Input
          placeholder="Enter amount"
          inputClassName="w-auto"
          value={withdrawAmount}
          onInput={(e: any) => setWithdrawAmount(e.target.value)}
          postfix={
            <div className="flex items-center gap-1">
              <div
                className="bg-[#2F3932] w-[60px] h-[35px] rounded-[100px] flex items-center justify-center text-pastel-green-50 text-xs font-normal cursor-pointer select-none active:bg-pastel-green-400 max-sm:hidden"
                onClick={() => {
                  setWithdrawAmount(vaultToken.shifftedBalance * 0.25);
                }}
              >
                25%
              </div>
              <div
                className="bg-[#2F3932] w-[60px] h-[35px] rounded-[100px] flex items-center justify-center text-pastel-green-50 text-xs font-normal cursor-pointer select-none active:bg-pastel-green-400 max-sm:hidden"
                onClick={() => {
                  setWithdrawAmount(vaultToken.shifftedBalance * 0.5);
                }}
              >
                50%
              </div>
              <div
                className="bg-[#2F3932] w-[60px] h-[35px] rounded-[100px] flex items-center justify-center text-pastel-green-50 text-xs font-normal cursor-pointer select-none active:bg-pastel-green-400"
                onClick={() => {
                  setWithdrawAmount(vaultToken.shifftedBalance);
                }}
              >
                Max
              </div>
            </div>
          }
        />
      </div>
      <div className="relative px-5 w-full">
        <Slider
          setValue={(value) => setWithdrawAmount(Number(value))}
          maxValue={vaultToken.shifftedBalance}
        />
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
