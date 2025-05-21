import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '..';
import { setUsdeTokenState } from './actions';
import { useToken } from '@/library/hooks/web3/use-token';
import {
  PREDEPOSIT_VAULT_ADDRESS,
  USDE_ADDRESS,
} from '@/library/constants/addresses';
import SupportedChainIds from '@/library/types/supported-chain-ids.enum';
import useActiveConnectionDetails from '@/library/hooks/web3/useActiveConnectionDetails';

export function useUsdeTokenState() {
  return useAppSelector((state) => state.user.UsdeTokenState);
}

export function useRefreshUsdeToken(validChainId: SupportedChainIds) {
  const dispatch = useAppDispatch();
  const { address, isConnected } = useActiveConnectionDetails();

  const tokenResult = useToken(USDE_ADDRESS[validChainId], validChainId, {
    includeBalance: true,
    includeAllowance: true,
    spender: PREDEPOSIT_VAULT_ADDRESS[validChainId],
  });

  const fetchAndStore = useCallback(async () => {
    if (!isConnected) return;
    await tokenResult.refetch();
    dispatch(
      setUsdeTokenState({
        balance: tokenResult.balance !== null ? tokenResult.balance : null,
        allowance:
          tokenResult.allowance !== null ? tokenResult.allowance : null,
        lastUpdated: Date.now(),
      })
    );
  }, [dispatch, tokenResult]);

  return {
    fetchAndStore,
    currentBalance: tokenResult.balance,
    currentAllowance: tokenResult.allowance,
  };
}
