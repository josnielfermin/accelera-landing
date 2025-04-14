import { useEffect } from 'react';
import Image from 'next/image';
import { Button, Modal } from '@/components/UI';
import useMediaQuery from '@/hooks/useMediaQuery';
import ComponentVisible from '@/hooks/useVisible';
import SplineViewer from '@/components/Landing/Spline';
import Input from '@/components/Modals/Input';
import { SOCIALS } from '@/components/Landing/Data';

interface SubscribeProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}
const Common = () => {
  return (
    <>
      <Image
        src="/static/images/header/accelera-logo.png"
        alt="Accelera Logo"
        width={126}
        height={36}
        className="relative z-[2]"
        quality={100}
      />
      <div className="text-white text-[32px] max-lg:text-xl leading-normal font-normal text-center lg:mt-28 mt-6 max-w-[373px] max-lg:max-w-[245px] relative z-[2]">
        Be the first to know about{' '}
        <span className="font-bold">Season Zero</span>
      </div>
      <div className="w-full relative max-w-[373px] max-lg:max-w-[285px] z-[2]">
        <Input />
        <div className="text-[#f0f0f0] cursor-pointer text-xs font-normal py-2 px-5 bg-[#454545] absolute right-3 top-1/2 -translate-y-1/2">
          Subscribe
        </div>
      </div>
      <div className="text-[#666] font-normal text-[10px] leading-normal text-center max-w-[373px] mt-2 relative z-[2]">
        We respect your privacy and will never send you spam.
      </div>
      <div className="lg:absolute lg:bottom-8 flex items-center justify-center gap-4 relative z-[2] max-lg:mt-4">
        {SOCIALS.map(({ href, iconClass }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#353535] rounded-full flex items-center justify-center h-10 w-10 group hover:bg-pastel-green-400 transition-all"
          >
            <span
              className={`${iconClass} text-white text-lg group-hover:text-woodsmoke-950`}
            />
          </a>
        ))}
      </div>
    </>
  );
};
const Desktop = ({ openModal, setOpenModal }: SubscribeProps) => {
  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal}>
      <div className="flex items-end h-full relative">
        <div className="flex items-center xl:w-[1066px] w-full max-w-[90%] justify-center mx-auto">
          <div className="flex flex-col items-center justify-center w-[556px] h-[605px] relative">
            <video
              className="h-full w-full object-cover absolute top-0 left-0 z-[-10]"
              style={{ mixBlendMode: 'lighten' }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src={'/static/videos/fluid.mp4'}
                type="video/mp4"
              ></source>
            </video>
            <Image
              src={'/static/images/modals/subscribe/decorator.png'}
              alt=""
              width={1565}
              height={1956}
              className="absolute top-0 left-0 z-[-8] object-cover w-full h-full mix-blend-overlay"
            />
            <Image
              src={'/static/images/background-decorator2.png'}
              alt=""
              width={2360}
              height={1916}
              className="absolute top-0 left-0 z-[-6] object-cover w-full h-full mix-blend-multiply"
            />
            <div className="bg-woodsmoke-950/60 w-full h-full absolute top-0 left-0 z-[-9]"></div>
            <div className="w-full h-full relative overflow-hidden">
              <SplineViewer
                url="https://prod.spline.design/iBUpvAbG1mzf5hIL/scene.splinecode"
                className="w-full h-full object-contain"
              />
              <div className="w-full h-[350px] absolute left-0 top-1/2 -translate-y-1/2">
                <div className="absolute top-[-42px] right-0 w-[50%] h-[62px] border-t-2 border-l-2 border-dashed border-pastel-green-400">
                  <div className="flex items-center justify-center w-9 h-9 bg-pastel-green-400/50 rotate-45 absolute -left-5 -bottom-6">
                    <div className="flex items-center justify-center w-4 h-4 bg-pastel-green-400"></div>
                  </div>
                </div>
                <div className="absolute top-[80px] left-0 w-[26%] h-[72px] border-t-2 border-r-2 border-dashed border-pastel-green-400">
                  <div className="flex items-center justify-center w-9 h-9 bg-pastel-green-400/50 rotate-45 absolute -right-5 -bottom-6">
                    <div className="flex items-center justify-center w-4 h-4 bg-pastel-green-400"></div>
                  </div>
                </div>
                <div className="absolute bottom-[-130px] right-0 w-[40%] h-[170px] border-l-2 border-dashed border-pastel-green-400">
                  <div className="flex items-center justify-center w-9 h-9 bg-pastel-green-400/50 rotate-45 absolute -left-5 -top-6">
                    <div className="flex items-center justify-center w-4 h-4 bg-pastel-green-400"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm text-white/70 absolute bottom-5 left-5">
              All rights reserved © Accelera
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 py-10 px-10 w-[510px] bg-woodsmoke-950 h-[605px] relative">
            <div
              className="z-50 text-2xl cursor-pointer text-palm-green-400 rounded-full flex items-center justify-center transition-all absolute top-5 right-5 w-12 h-12"
              onClick={() => setOpenModal(false)}
            >
              <span className="icon-x" />
            </div>
            <Common />
          </div>
        </div>
      </div>
    </Modal>
  );
};

const Mobile = ({ openModal, setOpenModal }: SubscribeProps) => {
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);
  useEffect(() => {
    if (openModal) {
      setIsVisible(true);
    }
    return () => {
      setIsVisible(false);
    };
  }, [openModal, setIsVisible]);

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 relative h-full overflow-hidden">
      <div
        className="flex items-center justify-between max-lg:justify-center h-full container max-lg:h-[72px]"
        ref={ref}
      >
        <div
          className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-[150vw] z-[9000] h-[150vw] transition-all lg:hidden ${
            isVisible
              ? 'visible max-lg:translate-y-[72%] max-[890px]:translate-y-[68%] max-[725px]:translate-y-[60%] max-[580px]:translate-y-[54%] max-[490px]:translate-y-[48%] max-[445px]:translate-y-[40%] max-[385px]:translate-y-[34%] max-[345px]:translate-y-[28%] max-[325px]:translate-y-[20%]'
              : 'invisible translate-y-[100%]'
          }`}
        >
          <div
            className="z-50 text-2xl cursor-pointer bg-woodsmoke-950 text-palm-green-400 [filter:drop-shadow(2px_0px_101.9px_rgba(92,_222,_102,_0.40))] rounded-full flex items-center justify-center transition-all absolute -top-16 left-1/2 -translate-x-1/2 w-12 h-12"
            onClick={() => {
              setOpenModal(false);
              setIsVisible(false);
            }}
          >
            <span className="icon-x" />
          </div>
          <div
            className={`rounded-full w-[150vw] h-[150vw] flex flex-col gap-3 [box-shadow:2px_0px_101.9px_0px_rgba(92,_222,_102,_0.90)] absolute top-0 left-1/2 -translate-x-1/2 bottom-0 z-10`}
          ></div>
          <div className="flex flex-col bg-woodsmoke-950 rounded-full w-[150vw] h-[150vw] bg items-center gap-3 py-10 px-10 relative z-[11] overflow-hidden">
            <Image
              src={'/static/images/header/decorator.png'}
              alt=""
              fill
              quality={100}
              className="mix-blend-overlay object-cover object-center z-[0]"
            />
            <Common />
          </div>
        </div>
      </div>
    </div>
  );
};
const Subscribe = ({ openModal, setOpenModal }: SubscribeProps) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  console.log(isDesktop);
  return (
    <>
      {isDesktop ? (
        <Desktop openModal={openModal} setOpenModal={setOpenModal} />
      ) : (
        <Mobile openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default Subscribe;
