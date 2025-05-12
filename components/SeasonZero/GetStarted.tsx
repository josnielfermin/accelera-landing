import { Button } from '@/components/UI';
interface GetStartedProps {
  hideVideo?: boolean;
}
const GetStarted = ({ hideVideo = false }: GetStartedProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {!hideVideo ? (
        <video
          className="object-contain relative aspect-square z-[2] max-w-[367px] max-h-[367px] w-full h-full"
          style={{ mixBlendMode: 'lighten' }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={'/static/images/landing/accelera.mp4'}
            type="video/mp4"
          ></source>
        </video>
      ) : null}
      <div className="text-[32px] max-lg:text-lg font-normal text-center text-white z-[1] relative">
        Get started <span className="font-bold">with Season Zero!</span>
      </div>
      <div className="text-base max-lg:text-xs font-normal text-white max-w-[612px] max-md:max-w-[90%] text-center">
        Earn ACCEL points by holding xUSDe after making a deposit, and maximise
        reward accumulation by gaining bonus multipliers through supported xUSDe
        integrations.
      </div>
      <Button
        walletConfig={{
          needWalletConnected: true,
          needSupportedChain: true,
        }}
        variant="secondary"
        className="!w-[328px] !font-normal max-w-[90%]"
      >
        Connect Your Wallet
        <span className="icon-arrow-right ml-2"></span>
      </Button>
    </div>
  );
};

export default GetStarted;
