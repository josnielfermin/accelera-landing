import BackgroundDecorator from '@/components/Landing/BackgroundDecorator';
import { Button } from '@/components/UI';

const SeasonZero = () => {
  return (
    <main className="w-full h-full">
      <BackgroundDecorator />

      <section className="relative w-full lg:min-h-[calc(100vh-148px)] h-full flex flex-col max-lg:items-center container pb-10 overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-5">
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
          <div className="text-[32px] max-lg:text-lg font-normal text-center text-white z-[1] relative">
            Get started <span className="font-bold">with Season Zero!</span>
          </div>
          <div className="text-base max-lg:text-xs font-normal text-white max-w-[612px] max-md:max-w-[90%] text-center">
            Earn ACCEL points by holding xUSDe after making a deposit, and
            maximise reward accumulation by gaining bonus multipliers through
            supported xUSDe integrations.
          </div>
          <Button
            variant="secondary"
            className="!w-[328px] !font-normal max-w-[90%]"
          >
            Connect Your Wallet
            <span className="icon-arrow-right ml-2"></span>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default SeasonZero;
