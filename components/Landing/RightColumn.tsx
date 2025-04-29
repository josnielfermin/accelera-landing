'use client';
import { useState } from 'react';
import Image from 'next/image';

import SocialSidebar from '@/components/layout/Sidebar';
import Backers from '@/components/Landing/Backers';
import { Button } from '@/components/UI';
import SplineViewer from '@/components/Landing/Spline';
import Subscribe from '@/components/Modals/Subscribe';

const RightColumn = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="relative flex max-lg:flex-col max-lg:items-center justify-center max-[1865px]:mr-[72px] max-lg:mx-auto w-full max-lg:mt-10 lg:max-w-[350px]">
      <div className="absolute w-full max-lg:hidden z-[5]">
        <SocialSidebar />
      </div>
      <div className="bg-transparent rounded-none flex flex-col max-lg:flex-row max-md:flex-col w-full items-center">
        {/* <Coin /> */}
        <div className="flex lg:flex-col max-[380px]:flex-col w-full items-center">
          <div className="relative w-full max-w-md lg:h-[280px] mx-auto flex items-center justify-center overflow-hidden">
            {/* <SplineViewer
              url="https://prod.spline.design/TWI18UldhK6eBwx1/scene.splinecode"
              className="lg:!w-[150%] lg:!h-[150%] !w-[100%] !h-[100%] object-contain absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 mix-blend-lighten max-w-[350px]"
            /> */}
            <video
              className="w-full h-full mix-blend-lighten relative z-[4] max-lg:hidden"
              style={{ mixBlendMode: 'lighten' }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src={'/static/images/landing/usdx.mp4'}
                type="video/mp4"
              ></source>
            </video>
            <video
              className="w-full h-full mix-blend-lighten relative z-[4] lg:hidden"
              style={{ mixBlendMode: 'lighten' }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src={'/static/images/landing/usdx-mobile.mp4'}
                type="video/mp4"
              ></source>
            </video>
          </div>
          <div className="flex flex-col w-full items-center max-lg:-ml-4 max-[380px]:ml-auto z-[6] relative">
            <h3 className="lg:text-4xl text-2xl font-normal xl2:mb-4 lg:mb-1 text-white text-center">
              Season <span className="font-bold">Zero</span>
            </h3>
            <Button
              variant="primary"
              className="whitespace-nowrap max-w-[90%]"
              onClick={() => setOpenModal(true)}
            >
              JOIN THE WAITLIST
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-6 text-white relative w-full max-md:-mt-5 max-xxs:-mt-2 max-[380px]:mt-4">
          <div className="w-[1px] absolute bottom-0 right-0 h-full bg-white/50 bg-blend-overlay z-[-9] lg:hidden"></div>
          <div className="w-[1px] absolute bottom-0 left-0 h-full bg-white/50 bg-blend-overlay z-[-9] lg:hidden"></div>
          <div className="w-full absolute top-0 left-0 h-[1px] bg-white/50 bg-blend-overlay z-[-9]"></div>
          <div className="w-full absolute bottom-0 left-0 h-[1px] bg-white/50 bg-blend-overlay z-[-9]"></div>

          <div className="flex flex-col items-center py-3 px-6 max-2xl:px-4 relative">
            <div className="w-[1px] absolute bottom-0 right-[-1.5px] h-full bg-white/50 bg-blend-overlay z-[-9]"></div>
            <p className="lg:text-3xl text-2xl font-normal z-[5] relative">
              2,938
            </p>
            <p className="lg:text-lg text-base tracking-[5.4px] font-bold z-[5] relative">
              HOLDERS
            </p>
          </div>

          <div className="flex flex-col items-center py-3 px-6 max-2xl:px-4 relative z-[5]">
            <p className="lg:text-3xl text-2xl font-normal">$5.96B</p>
            <p className="lg:text-lg text-base tracking-[5.4px] font-bold">
              TVL
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:hidden">
        <Backers />
      </div>

      <div className="w-[1.5px] absolute bottom-0 right-0 2xl:h-[746px] h-[668px] bg-white bg-opacity-50 bg-blend-overlay z-[-9] max-lg:hidden overflow-hidden">
        {/* <div className="w-[100vw] h-[100vh] rounded-full blur-sm [background:radial-gradient(circle,_rgba(92,_222,_102,_1)_20%,_rgba(92,_222,_102,_0.23)_70%)] absolute top-1/2 -translate-y-1/2  max-lg:hidden left-[-10px] animate-vertical-light z-[1100]"></div> */}
      </div>
      <div className="w-[1px] absolute bottom-0 left-0 h-full bg-white/50 bg-blend-overlay z-[-9] max-lg:hidden"></div>
      <div className="w-full absolute bottom-0 left-0 h-[1px] bg-white/50 bg-blend-overlay z-[-9] max-lg:hidden"></div>
      <div className="absolute -top-2 -left-2 bg-[#D9D9D9] w-4 h-4 max-lg:hidden z-[5]"></div>
      <div className="absolute -bottom-2 -right-2 bg-[#D9D9D9] w-4 h-4 max-lg:hidden z-[5]"></div>
      <Subscribe openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default RightColumn;
