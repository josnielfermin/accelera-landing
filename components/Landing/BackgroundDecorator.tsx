'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

const BackgroundDecorator = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isBackgroundDecorator1Loaded, setIsBackgroundDecorator1Loaded] =
    useState(false);
  const [isBackgroundDecorator2Loaded, setIsBackgroundDecorator2Loaded] =
    useState(false);
  const [isDecorator1Loaded, setIsDecorator1Loaded] = useState(false);
  const [isDecorator2Loaded, setIsDecorator2Loaded] = useState(false);
  const [isDecoratorMobile1Loaded, setIsDecoratorMobile1Loaded] =
    useState(false);
  const [isDecoratorMobile2Loaded, setIsDecoratorMobile2Loaded] =
    useState(false);

  const backgroundDecoratorLoaded = useMemo(() => {
    return isBackgroundDecorator1Loaded && isBackgroundDecorator2Loaded;
  }, [isBackgroundDecorator1Loaded, isBackgroundDecorator2Loaded]);

  const decoratorLoaded = useMemo(() => {
    return isDecorator1Loaded && isDecorator2Loaded;
  }, [isDecorator1Loaded, isDecorator2Loaded]);

  const decoratorMobileLoaded = useMemo(() => {
    return isDecoratorMobile1Loaded && isDecoratorMobile2Loaded;
  }, [isDecoratorMobile1Loaded, isDecoratorMobile2Loaded]);

  return (
    <>
      <video
        className={`h-full w-full object-cover absolute top-0 left-0 z-[-10] transition-all select-none ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ mixBlendMode: 'lighten' }}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => {
          setIsVideoLoaded(true);
        }}
      >
        <source src={'/static/videos/fluid.mp4'} type="video/mp4"></source>
      </video>
      <Image
        src="/static/images/background-fluid.webp"
        width={2195}
        height={1235}
        alt=""
        priority={true}
        placeholder="blur"
        quality={100}
        blurDataURL="/static/images/background-fluid-blurred.webp"
        className={`h-full w-full object-cover absolute top-0 left-0 z-[-10] transition-all select-none ${
          isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <Image
        src={'/static/images/background-decorator.webp'}
        alt=""
        width={1565}
        height={1956}
        className={`absolute top-0 left-0 -z-[9] object-cover w-full h-full mix-blend-overlay select-none transition-all ${
          backgroundDecoratorLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        quality={100}
        priority={true}
        onLoad={() => {
          setIsBackgroundDecorator1Loaded(true);
        }}
      />
      <Image
        src={'/static/images/background-decorator2.webp'}
        alt=""
        width={1920}
        height={1080}
        quality={100}
        priority={true}
        className={`absolute top-0 left-0 -z-[6] object-cover w-full h-full mix-blend-multiply select-none transition-all ${
          backgroundDecoratorLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => {
          setIsBackgroundDecorator2Loaded(true);
        }}
      />
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
        <Image
          src={'/static/images/landing/decorator-1.webp'}
          alt=""
          width={1095}
          height={1384}
          className={`absolute -top-10 -left-16 -z-[7] max-lg:hidden select-none transition-all ${
            decoratorLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          quality={100}
          onLoad={() => {
            setIsDecorator1Loaded(true);
          }}
        />
        <Image
          src={'/static/images/landing/decorator-mobile-1.webp'}
          alt=""
          width={414}
          height={524}
          className={`absolute top-0 left-0 -z-[7] lg:hidden select-none transition-all ${
            decoratorMobileLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          quality={100}
          onLoad={() => {
            setIsDecoratorMobile1Loaded(true);
          }}
        />
        <Image
          src={'/static/images/landing/decorator-2.webp'}
          alt=""
          width={583}
          height={1892}
          className={`absolute -bottom-60 -right-16 opacity-75 -z-[7] max-xs:hidden select-none transition-all ${
            decoratorLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          quality={100}
          onLoad={() => {
            setIsDecorator2Loaded(true);
          }}
        />
        <Image
          src={'/static/images/landing/decorator-mobile-2.webp'}
          alt=""
          width={236}
          height={767}
          className={`absolute bottom-0 left-[0px] max-xs:w-full -z-[7] xs:hidden select-none transition-all ${
            decoratorMobileLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          quality={100}
          onLoad={() => {
            setIsDecoratorMobile2Loaded(true);
          }}
        />
      </div>
      <div className="bg-woodsmoke-950/80 w-full h-full absolute top-0 left-0 z-[-8]"></div>
      <div className="absolute h-[410px] w-full top-0 overflow-hidden">
        <div className="w-[410px] h-[410px] rounded-full [background:radial-gradient(50%_50%_at_50%_50%,_#000_0%,_rgba(0,_0,_0,_0.00)_100%)] absolute left-1/2 -translate-x-1/2 top-[-200px] lg:hidden z-[-4]"></div>
      </div>
    </>
  );
};

export default BackgroundDecorator;
