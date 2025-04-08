import Image from 'next/image';

import SocialSidebar from '@/components/layout/Sidebar';
import Backers from '@/components/Landing/Backers';
import { Button } from '@/components/UI';
import SplineViewer from '@/components/Landing/Spline';

const RightColumn = () => {
  return (
    <div className="relative flex max-lg:flex-col max-lg:items-center justify-center max-[1865px]:mr-[72px] max-lg:mx-auto max-lg:w-full max-lg">
      <div className="absolute w-full max-lg:hidden">
        <SocialSidebar />
      </div>
      <div className="bg-transparent rounded-none flex flex-col max-lg:flex-row max-md:flex-col w-full items-center">
        {/* <Coin /> */}
        <div className="flex lg:flex-col max-[380px]:flex-col w-full items-center">
          <div className="relative w-full max-w-md h-[300px] max-2xl:h-[210px] mx-auto flex items-center justify-center">
            <SplineViewer
              url="https://prod.spline.design/TWI18UldhK6eBwx1/scene.splinecode"
              className="w-full h-full object-contain"
            />
            {/* <Image
              src={'/static/images/landing/usdx.png'}
              alt="usdx"
              width={329}
              height={329}
              className="mix-blend-lighten z-[10] max-2xl:min-w-[200px] max-2xl:min-h-[200px] max-2xl:w-[200px] max-2xl:h-[200px]"
            /> */}
          </div>
          <div className="flex flex-col w-full items-center max-lg:-ml-8 max-[380px]:ml-auto">
            <h3 className="text-4xl max-lg:text-2xl font-normal lg:mb-4 text-white text-center">
              Season <span className="font-bold">Zero</span>
            </h3>
            <Button variant="primary" className="whitespace-nowrap max-w-[90%]">
              JOIN THE WAITLIST
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-6 text-white relative w-full">
          <div className="w-[1px] absolute bottom-0 right-0 h-full bg-gradient-to-t from-pastel-green-400/50 to-white/20 bg-blend-overlay z-[-10] lg:hidden"></div>
          <div className="w-[1px] absolute bottom-0 left-0 h-full bg-gradient-to-t from-pastel-green-400/50 to-white/20 bg-blend-overlay z-[-10] lg:hidden"></div>
          <div className="w-full absolute top-0 left-0 h-[1px] bg-pastel-green-400/50 bg-blend-overlay z-[-10]"></div>
          <div className="w-full absolute bottom-0 left-0 h-[1px] bg-pastel-green-400/50 bg-blend-overlay z-[-10]"></div>

          <div className="flex flex-col items-center py-3 px-6 max-2xl:px-4 relative">
            <div className="w-[1px] absolute bottom-0 right-[-1.5px] h-full bg-gradient-to-t from-pastel-green-400/50 to-white/20 bg-blend-overlay z-[-10]"></div>
            <p className="text-3xl max-2xl:text-2xl font-normal">2,938</p>
            <p className="text-lg max-2xl:text-base tracking-[5.4px] font-bold">
              HOLDERS
            </p>
          </div>

          <div className="flex flex-col items-center py-3 px-6 max-2xl:px-4">
            <p className="text-3xl max-2xl:text-2xl font-normal">$5.96B</p>
            <p className="text-lg max-2xl:text-base tracking-[5.4px] font-bold">
              TVL
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:hidden">
        <Backers />
      </div>

      <div className="w-[1px] absolute bottom-0 right-0 2xl:h-[686px] h-[608px] bg-gradient-to-t from-pastel-green-400/50 to-white/20 bg-blend-overlay z-[-10] max-lg:hidden"></div>
      <div className="w-[1px] absolute bottom-0 left-0 h-full bg-gradient-to-t from-pastel-green-400/50 to-white/20 bg-blend-overlay z-[-10] max-lg:hidden"></div>
      <div className="w-full absolute bottom-0 left-0 h-[1px] bg-pastel-green-400/50 bg-blend-overlay z-[-10] max-lg:hidden"></div>
      <div className="absolute -top-2.5 -left-2.5 bg-[#D9D9D9] w-5 h-5 max-lg:hidden"></div>
      <div className="absolute -bottom-2.5 -right-2.5 bg-[#D9D9D9] w-5 h-5 max-lg:hidden"></div>
    </div>
  );
};

export default RightColumn;
