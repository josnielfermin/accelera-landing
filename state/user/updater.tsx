import { useEffect, useState } from 'react';
import { useConnect } from 'wagmi';
import { injected } from 'wagmi/connectors';

// hooks
import useActiveConnectionDetails from '@/library/hooks/web3/useActiveConnectionDetails';

export default function UserUpdater() {
  const { isConnected, isConnecting } = useActiveConnectionDetails();
  const { connect } = useConnect();
  const [isConnectingFinished, setIsConnectingFinished] = useState(false);
  const [isConnecting_, setIsConnecting_] = useState<boolean | null>(null);

  useEffect(() => {
    if (isConnecting && isConnecting_ === null) {
      setIsConnecting_(isConnecting);
    }
    if (!isConnecting && isConnecting_ === true) {
      setIsConnecting_(isConnecting);
      setIsConnectingFinished(true);
    }
  }, [isConnecting]);

  useEffect(() => {
    if (isConnectingFinished && !isConnected && isConnecting_ === false) {
      // connect({ connector: injected() });
    }
  }, [isConnectingFinished, isConnected, isConnecting_]);

  return null;
}
