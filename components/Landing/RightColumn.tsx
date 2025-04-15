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
    <div className="relative flex max-lg:flex-col max-lg:items-center justify-center max-[1865px]:mr-[72px] max-lg:mx-auto max-lg:w-full lg:max-w-[350px]">
      <div className="absolute w-full max-lg:hidden">
        <SocialSidebar />
      </div>
      <div className="bg-transparent rounded-none flex flex-col max-lg:flex-row max-md:flex-col w-full items-center xl2:max-w-[350px] lg:max-w-[280px]">
        {/* <Coin /> */}
        <div className="flex lg:flex-col max-[380px]:flex-col w-full items-center">
          <div className="relative w-full max-w-md xl2:h-[280px] h-[200px] max-2xl:h-[190px] mx-auto flex items-center justify-center overflow-hidden z-[6]">
            <SplineViewer
              url="https://prod.spline.design/TWI18UldhK6eBwx1/scene.splinecode"
              className="lg:!w-[150%] lg:!h-[150%] !w-[100%] !h-[100%] object-contain absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 mix-blend-lighten max-w-[350px]"
            />
          </div>
          <div className="flex flex-col w-full items-center max-lg:-ml-8 max-[380px]:ml-auto">
            <h3 className="xl2:text-4xl text-2xl font-normal xl2:mb-4 lg:mb-1 text-white text-center">
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

        <div className="grid grid-cols-2 mt-6 text-white relative w-full">
          <div className="w-[1px] absolute bottom-0 right-0 h-full bg-white/50 bg-blend-overlay z-[-9] lg:hidden"></div>
          <div className="w-[1px] absolute bottom-0 left-0 h-full bg-white/50 bg-blend-overlay z-[-9] lg:hidden"></div>
          <div className="w-full absolute top-0 left-0 h-[1px] bg-white/50 bg-blend-overlay z-[-9]"></div>
          <div className="w-full absolute bottom-0 left-0 h-[1px] bg-white/50 bg-blend-overlay z-[-9]"></div>

          <div className="flex flex-col items-center py-3 px-6 max-2xl:px-4 relative">
            <div className="w-[1px] absolute bottom-0 right-[-1.5px] h-full bg-white/50 bg-blend-overlay z-[-9]"></div>
            <p className="xl2:text-3xl text-2xl font-normal">2,938</p>
            <p className="xl2:text-lg text-base tracking-[5.4px] font-bold">
              HOLDERS
            </p>
          </div>

          <div className="flex flex-col items-center py-3 px-6 max-2xl:px-4">
            <p className="xl2:text-3xl text-2xl font-normal">$5.96B</p>
            <p className="xl2:text-lg text-base tracking-[5.4px] font-bold">
              TVL
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:hidden">
        <Backers />
      </div>

      <div className="w-[1.5px] absolute bottom-0 right-0 2xl:h-[746px] h-[668px] bg-white bg-opacity-50 bg-blend-overlay z-[-9] max-lg:hidden overflow-hidden">
        <div className="w-[100vw] h-[100vh] rounded-full blur-sm [background:radial-gradient(circle,_rgba(92,_222,_102,_1)_20%,_rgba(92,_222,_102,_0.23)_70%)] absolute top-1/2 -translate-y-1/2  max-lg:hidden left-[-10px] animate-vertical-light z-[1100]"></div>
      </div>
      <div className="w-[1px] absolute bottom-0 left-0 h-full bg-white/50 bg-blend-overlay z-[-9] max-lg:hidden"></div>
      <div className="w-full absolute bottom-0 left-0 h-[1px] bg-white/50 bg-blend-overlay z-[-9] max-lg:hidden"></div>
      <div className="absolute -top-2.5 -left-2.5 bg-[#D9D9D9] w-5 h-5 max-lg:hidden"></div>
      <div className="absolute -bottom-2.5 -right-2.5 bg-[#D9D9D9] w-5 h-5 max-lg:hidden"></div>
      <Subscribe openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default RightColumn;
