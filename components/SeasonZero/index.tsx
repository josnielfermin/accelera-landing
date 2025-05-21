'use client';
import BackgroundDecorator from '@/components/Landing/BackgroundDecorator';
import { Button } from '@/components/UI';
import GetStarted from '@/components/SeasonZero/GetStarted';
import TransactionPanel from '@/components/SeasonZero/TransactionPanel';
import Referrals from '@/components/SeasonZero/Referrals';
import Rewards from '@/components/SeasonZero/Rewards';
import FAQs from '@/components/SeasonZero/FAQs';
import Process from '@/components/Modals/Process';
import TokensBalance from '@/components/SeasonZero/TokensBalance';
import { useState } from 'react';
import useActiveConnectionDetails from '@/library/hooks/web3/useActiveConnectionDetails';

const SeasonZero = () => {
  const [openModal, setOpenModal] = useState(false);
  const { isConnected, address } = useActiveConnectionDetails();
  return (
    <main className="w-full h-full max-lg:pb-12 pb-[40px]">
      <BackgroundDecorator />
      <section className="relative w-full lg:min-h-[calc(100vh-169px)] h-full flex flex-col max-lg:items-center container lg:pt-[100px] pt-[30px] gap-8 px-10 max-sm:px-4 max-xxs:px-2">
        {!isConnected && <GetStarted />}
        <div className="flex justify-between gap-7 w-full max-lg:flex-col relative">
          <TransactionPanel />
          <Referrals />
          {!isConnected && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] max-lg:w-[101%] max-lg:h-[101%] rounded-2xl backdrop-blur-lg z-[5]"></div>
          )}
        </div>
        {isConnected && (
          <>
            {/* <Rewards /> */}
            <div className="w-full max-h-[800px] pb-5">
              <FAQs />
            </div>
          </>
        )}
        <TokensBalance />
      </section>
      <Process
        open={openModal}
        onClose={() => setOpenModal(false)}
        status="error"
      />
    </main>
  );
};

export default SeasonZero;
