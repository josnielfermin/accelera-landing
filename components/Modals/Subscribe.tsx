import Image from 'next/image';
import { Button, Modal } from '@/components/UI';
import useMediaQuery from '@/hooks/useMediaQuery';
import Link from 'next/link';
import ComponentVisible from '@/hooks/useVisible';
import SplineViewer from '@/components/Landing/Spline';

interface SubscribeProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}
const Common = () => {
  return <div></div>;
};
const Desktop = ({ openModal, setOpenModal }: SubscribeProps) => {
  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal}>
      <div className="flex items-end h-full relative">
        <div className="flex items-center w-[1066px] ">
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
              className="absolute top-0 left-0 -z-[10] object-cover w-full h-full mix-blend-overlay"
            />
            <div className="bg-woodsmoke-950/60 w-full h-full absolute top-0 left-0 z-[-11]"></div>
            <div className="border w-full h-full relative">
              <SplineViewer
                url="https://prod.spline.design/iBUpvAbG1mzf5hIL/scene.splinecode"
                className="w-full h-full object-contain"
              />
              <div className="border w-full h-[350px] absolute left-0 top-1/2 -translate-y-1/2">
                <div className="absolute top-[-52px] right-0 w-[50%] h-[62px] border-t-2 border-l-2 border-dashed border-pastel-green-400"></div>
                <div className="absolute top-[80px] left-0 w-[26%] h-[72px] border-t-2 border-r-2 border-dashed border-pastel-green-400"></div>
              </div>
            </div>
            <div className="text-sm text-white/70 absolute bottom-5 left-5">
              All rights reserved © Accelera
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 w-[510px] bg-woodsmoke-950 h-[605px]">
            <div
              className="z-50 text-2xl cursor-pointer text-palm-green-400 rounded-full flex items-center justify-center transition-all absolute top-5 right-5 w-12 h-12"
              onClick={() => setOpenModal(false)}
            >
              <span className="icon-x" />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const Mobile = ({ openModal, setOpenModal }: SubscribeProps) => {
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);
  return (
    <header className="w-full px-4 md:px-8 lg:px-16 relative h-full overflow-hidden">
      <div className="w-[120%] absolute bottom-0 left-[-10%] h-[1.5px] bg-white/50 bg-blend-overlay z-[-9]"></div>
      <div
        className="flex items-center justify-between max-lg:justify-center h-full container max-lg:h-[72px]"
        ref={ref}
      >
        <div
          className="icon-menu-1 text-xl text-white absolute top-1/2 -translate-y-1/2 left-5 rounded-full p-4 lg:hidden z-[10]"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        ></div>
        <div
          className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-[150vw] z-[9000] h-[150vw] transition-all lg:hidden ${
            isVisible
              ? 'visible max-lg:translate-y-[78%] max-[890px]:translate-y-[73%] max-[725px]:translate-y-[66%] max-[580px]:translate-y-[60%] max-[490px]:translate-y-[52%] max-[405px]:translate-y-[44%] max-[345px]:translate-y-[34%]'
              : '[visibility:hidden] translate-y-[100%]'
          }`}
        >
          {/* <div
            className={`absolute top-0 left-0 w-full h-full bg-gradient-to-t from-woodsmoke-950/90 to-woodsmoke-950/0`}
          ></div> */}
          <div
            className="z-50 text-2xl cursor-pointer bg-woodsmoke-950 text-palm-green-400 [filter:drop-shadow(2px_0px_101.9px_rgba(92,_222,_102,_0.40))] rounded-full flex items-center justify-center transition-all absolute -top-16 left-1/2 -translate-x-1/2 w-12 h-12"
            onClick={() => setIsVisible(false)}
          >
            <span className="icon-x" />
          </div>
          <div
            className={`rounded-full w-[150vw] h-[150vw] flex flex-col gap-3 [box-shadow:2px_0px_101.9px_0px_rgba(92,_222,_102,_0.90)] absolute top-0 left-1/2 -translate-x-1/2 bottom-0 z-10`}
          ></div>
          <div
            className={`py-[22px] px-1.5 rounded-full bg-woodsmoke-950 w-[150vw] h-[150vw] flex flex-col gap-3 overflow-hidden relative`}
          >
            <Image
              src={'/static/images/header/decorator.png'}
              alt=""
              fill
              quality={100}
              className="mix-blend-overlay object-cover object-center z-[0]"
            />
            {/* <nav className="flex flex-col items-center text-white my-6 gap-5">
              {menuLinksLanding.map((link) => (
                <NavItem
                  key={link.name}
                  href={link.href}
                  name={link.name}
                  isActive={pathname === link.href}
                />
              ))}
            </nav> */}
            <Button
              href="/app"
              variant="primary"
              className="max-w-[90%] w-[280px] mx-auto"
            >
              Launch App
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
const Subscribe = ({ openModal, setOpenModal }: SubscribeProps) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
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
