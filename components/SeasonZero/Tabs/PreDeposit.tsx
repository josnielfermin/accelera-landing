import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { Input, Button, Slider, Card } from '@/components/UI';
import useAccountPredepositData from '@/library/hooks/web3/use-account';
import {
  PREDEPOSIT_VAULT_ADDRESS,
  USDE_ADDRESS,
} from '@/library/constants/addresses';
import useToken from '@/library/hooks/web3/use-token';
import useActiveConnectionDetails from '@/library/hooks/web3/useActiveConnectionDetails';
import { useWriteContract } from 'wagmi';
import isSupportedChain from '@/library/utils/is-supported-chain';
import { useToast } from '@/context/ToastContext';
import { PreDepositRpc } from '@/library/request/pre-deposit.rpc';
import SupportedChainIds from '@/library/types/supported-chain-ids.enum';
import getChainById from '@/library/utils/get-chain-by-id';
import { FALLBACK_CHAIN_ID } from '@/library/constants/default-chain-info';
import { formatCurrency } from '@/library/utils/numbers';
import Process from '@/components/Modals/Process';
import { Address, erc20Abi } from 'viem';
import TokensRpc from '@/library/request/tokens.rpc';
import { useRefreshUsdeToken, useUsdeTokenState } from '@/state/user/hooks';
import { useAppDispatch } from '@/state';
import { setUsdeTokenState } from '@/state/user/actions';
const PreDeposits = () => {
  const { address, chainId, validChainId, isConnected } =
    useActiveConnectionDetails();
  const { showToast } = useToast();
  const { balance, allowance } = useUsdeTokenState() ?? {};
  const { currentBalance, currentAllowance, fetchAndStore } =
    useRefreshUsdeToken(validChainId);

  useEffect(() => {
    fetchAndStore();
  }, []);

  // const accountPredepositData = useAccountPredepositData(address);
  const usdeToken = useToken(USDE_ADDRESS[validChainId], validChainId, {
    includeAllowance: true,
    spender: PREDEPOSIT_VAULT_ADDRESS[validChainId],
    includeBalance: true,
  });

  const vaultToken = useToken(
    PREDEPOSIT_VAULT_ADDRESS[validChainId],
    validChainId,
    {
      includeBalance: true,
    }
  );
  const [depositAmount, setDepositAmount] = useState(0);
  const [approveLoading, setApproveLoading] = useState(false);
  const { writeContractAsync } = useWriteContract();

  async function handleDeposit() {
    if (!usdeToken.token) return;
    if (isApprovalRequired) {
      setApproveLoading(true);
      const approveReq = TokensRpc.buildApproveReq(
        usdeToken.token.address as Address,
        PREDEPOSIT_VAULT_ADDRESS[validChainId],
        BigInt(depositAmount * 10 ** usdeToken.token.decimals)
      );
      await writeContractAsync(approveReq, {
        onError: (error) => {
          // console.error("Approve error:", error);
          return;
        },
        onSettled: () => {
          setApproveLoading(false);
        },
      });
    }
    setApproveLoading(false);
    const preDepositReq = PreDepositRpc.buildPreDepositReq(
      validChainId,
      usdeToken.token.address as Address,
      BigInt(depositAmount * 10 ** usdeToken.token.decimals)
    );
    writeContractAsync(preDepositReq, {
      onSuccess: () => {
        showToast({
          message:
            'Deposit successful! Your funds have been added to the vault.',
          iconClass: 'icon-bulb',
        });
      },
      onError: (error) => {
        console.error('Deposit error:', error);
        showToast({
          message:
            'Failed to complete deposit. Please check your balance and try again.',
          iconClass: 'icon-bulb',
        });
      },
    });
  }

  const isApprovalRequired = useMemo(() => {
    if (!usdeToken?.allowance) return true;
    return usdeToken?.allowance >= +depositAmount;
  }, [usdeToken?.allowance, depositAmount]);
  function handlePart(part: number): void {
    if (!usdeToken.token || usdeToken.shifftedBalance <= 0) {
      setDepositAmount(0);
      return;
    }

    setDepositAmount(usdeToken.shifftedBalance * part);
  }
  const [openModalLoading, setOpenModalLoading] = useState(false);
  const [openModalError, setOpenModalError] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  const [disabled, buttonText] = useMemo(() => {
    if (!address || !chainId || !isConnected) return [false, 'Connect Wallet'];
    if (usdeToken.loading || vaultToken.loading) return [true, 'Loading...'];
    if (!isSupportedChain(chainId))
      return [false, `Switch to ${getChainById(FALLBACK_CHAIN_ID)?.name}`];
    if (+depositAmount <= 0) return [true, 'Enter amount'];
    if (+depositAmount > usdeToken.shifftedBalance)
      return [true, 'Insufficient balance'];
    if (approveLoading) return [true, 'Approving...'];
    if (isApprovalRequired) return [false, 'Approve'];

    return [false, 'Deposit'];
  }, [
    address,
    chainId,
    isConnected,
    depositAmount,
    isApprovalRequired,
    usdeToken.shifftedBalance,
    approveLoading,
  ]);
  return (
    <>
      <div className="flex items-center gap-4 px-5 max-xs:gap-2 max-xs:px-2.5 select-none w-full max-[370px]:flex-wrap">
        <Card
          title={'USDe Balance'}
          value={formatCurrency(usdeToken.shifftedBalance)}
          image={'/static/images/season-zero/usde.png'}
        />
        <Card
          title={'Deposited USDe'}
          value={formatCurrency(vaultToken.shifftedBalance)}
          icon={
            <div className="absolute right-2 top-2 rounded-full w-7 h-7 [background:linear-gradient(0deg,_#354239_0%,_#354239_100%)] flex items-center justify-center">
              <span className="icon-pig text-pastel-green-500 text-xs"></span>
            </div>
          }
        />
        <Card
          title={'Total Points'}
          value={0}
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
          value={depositAmount}
          onInput={(e: any) => {
            console.log('e :>> ', e);
            setDepositAmount(e);
          }}
          onlyNumbers={true}
          precision={2}
          postfix={
            <div className="flex items-center gap-1">
              <div
                className="bg-[#2F3932] w-[60px] h-[35px] rounded-[100px] flex items-center justify-center text-pastel-green-50 text-xs font-normal cursor-pointer select-none active:bg-pastel-green-400 max-sm:hidden"
                onClick={() => {
                  setDepositAmount(usdeToken.shifftedBalance * 0.25);
                }}
              >
                25%
              </div>
              <div
                className="bg-[#2F3932] w-[60px] h-[35px] rounded-[100px] flex items-center justify-center text-pastel-green-50 text-xs font-normal cursor-pointer select-none active:bg-pastel-green-400 max-sm:hidden"
                onClick={() => {
                  setDepositAmount(usdeToken.shifftedBalance * 0.5);
                }}
              >
                50%
              </div>
              <div
                className="bg-[#2F3932] w-[60px] h-[35px] rounded-[100px] flex items-center justify-center text-pastel-green-50 text-xs font-normal cursor-pointer select-none active:bg-pastel-green-400"
                onClick={() => {
                  setDepositAmount(usdeToken.shifftedBalance);
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
          setValue={(value) => setDepositAmount(Number(value))}
          maxValue={usdeToken.shifftedBalance}
        />
      </div>
      <div className="w-full relative px-5">
        <Button
          variant="secondary"
          className="!font-normal mb-10 select-none"
          onClick={() => handleDeposit()}
          disabled={disabled}
        >
          {buttonText}
          {!disabled && <span className="icon-arrow-right ml-2"></span>}
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
