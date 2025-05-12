import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Input, Button, Slider } from '@/components/UI';
import { writeContract } from '@wagmi/core';
import { useAccount, useWriteContract, useReadContract } from 'wagmi';
import { VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS } from '@/lib/contract';
import { parseEther, erc20Abi, formatUnits } from 'viem';
import useActiveConnectionDetails from '@/library/hooks/web3/useActiveConnectionDetails';
import Process from '@/components/Modals/Process';

const USDE_TOKEN_ADDRESS = '0x5fbdb2315678afecb367f032d93f642f64180aa3';

const PreDeposits = () => {
  const { isConnected, account } = useActiveConnectionDetails();
  const [depositAmount, setDepositAmount] = useState('');
  const [openModalLoading, setOpenModalLoading] = useState(false);
  const [openModalError, setOpenModalError] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  const { address } = useAccount();
  const { writeContractAsync, isPending } = useWriteContract();
  const [referralCode, setReferralCode] = useState('');

  const handleDeposit = async () => {
    if (!isConnected) return;

    setOpenModalLoading(true);
    const amount = parseEther(depositAmount);

    try {
      const tx = await writeContractAsync({
        address: VAULT_CONTRACT_ADDRESS,
        abi: VAULT_CONTRACT_ABI,
        functionName: 'depositWithReferral',
        args: [amount, address, referralCode],
      });
      setOpenModalLoading(false);
    } catch (err) {
      setOpenModalLoading(false);
      setOpenModalError(true);
    }
  };
  const {
    data: balance,
    isLoading,
    isError,
  } = useReadContract({
    address: USDE_TOKEN_ADDRESS,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [address!],
    // enabled: Boolean(address),
  });
  console.log('balance :>> ', balance);
  // const formatted = formatUnits(balance as bigint, 18);

  return (
    <>
      <div className="flex items-center gap-4 px-5 max-xs:gap-2 max-xs:px-2.5 select-none w-full">
        <div className="rounded-[20px] bg-[#1A201C] relative flex flex-col min-w-[105px] lg:min-w-[150px] w-full pt-7 px-4 max-xxs:px-2 lg:pb-[17px] pb-3 gap-4">
          <Image
            src={'/static/images/season-zero/usde.png'}
            alt="usde"
            width={28}
            height={28}
            className="absolute right-2 top-2 rounded-full"
          />
          <div className="text-woodsmoke-50 text-2xl font-normal">
            {/* {formatted} */}0
          </div>
          <div className="text-[10px] font-normal text-woodsmoke-50 whitespace-nowrap">
            USDe Balance
          </div>
        </div>
        <div className="rounded-[20px] bg-[#1A201C] relative flex flex-col min-w-[105px] lg:min-w-[150px] w-full pt-7 px-4 max-xxs:px-2 lg:pb-[17px] pb-3 gap-4">
          <div className="absolute right-2 top-2 rounded-full w-7 h-7 [background:linear-gradient(0deg,_#354239_0%,_#354239_100%)] flex items-center justify-center">
            <span className="icon-pig text-pastel-green-500 text-xs"></span>
          </div>
          <div className="text-woodsmoke-50 text-2xl font-normal">0</div>
          <div className="text-[10px] font-normal text-woodsmoke-50 whitespace-nowrap">
            USDe Deposited
          </div>
        </div>
        <div className="rounded-[20px] bg-[#1A201C] relative flex flex-col min-w-[105px] lg:min-w-[150px] w-full pt-7 px-4 max-xxs:px-2 lg:pb-[17px] pb-3 gap-4">
          <div className="absolute right-2 top-2 rounded-full w-7 h-7 [background:linear-gradient(0deg,_#354239_0%,_#354239_100%)] flex items-center justify-center">
            <span className="icon-rocket-1 text-pastel-green-500 text-xs"></span>
          </div>
          <div className="text-woodsmoke-50 text-2xl font-normal">0</div>
          <div className="text-[10px] font-normal text-woodsmoke-50 whitespace-nowrap">
            Total Points
          </div>
        </div>
      </div>
      <div className="relative px-5 w-full">
        <Input
          placeholder="Enter amount"
          inputClassName="w-auto"
          value={depositAmount}
          onInput={(e: any) => setDepositAmount(e.target.value)}
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
        <Button
          variant="secondary"
          className="!font-normal mb-10 select-none"
          onClick={handleDeposit}
        >
          Deposit
          <span className="icon-arrow-right ml-2"></span>
        </Button>
      </div>
      <Process
        open={openModalLoading}
        onClose={() => setOpenModalLoading(false)}
        status="loading"
      />
      <Process
        open={openModalError}
        onClose={() => setOpenModalError(false)}
        status="error"
      />
      <Process
        open={openModalSuccess}
        onClose={() => setOpenModalSuccess(false)}
        status="success"
      />
    </>
  );
};

export default PreDeposits;
