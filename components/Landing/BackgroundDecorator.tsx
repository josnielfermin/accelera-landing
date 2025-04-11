import Image from 'next/image';

const BackgroundDecorator = () => {
  return (
    <>
      <video
        className="h-full w-full object-cover absolute top-0 left-0 z-[-10]"
        style={{ mixBlendMode: 'lighten' }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={'/static/videos/fluid.mp4'} type="video/mp4"></source>
      </video>
      <Image
        src={'/static/images/background-decorator.png'}
        alt=""
        width={1565}
        height={1956}
        className="absolute top-0 left-0 -z-[9] object-cover w-full h-full mix-blend-overlay"
        quality={100}
      />
      <Image
        src={'/static/images/background-decorator2.png'}
        alt=""
        width={2360}
        height={1916}
        quality={100}
        className="absolute top-0 left-0 -z-[6] object-cover w-full h-full mix-blend-multiply"
      />
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
        <Image
          src={'/static/images/landing/decorator-1.png'}
          alt=""
          width={1095}
          height={1384}
          className="absolute top-0 left-0 -z-[7] max-lg:hidden"
          quality={100}
        />
        <Image
          src={'/static/images/landing/decorator-mobile-1.png'}
          alt=""
          width={414}
          height={524}
          className="absolute top-0 left-0 -z-[7] lg:hidden"
          quality={100}
        />
        <Image
          src={'/static/images/landing/decorator-2.png'}
          alt=""
          width={272}
          height={882}
          className="absolute bottom-0 right-[240px] -z-[7] max-lg:hidden"
          quality={100}
        />
        <Image
          src={'/static/images/landing/decorator-mobile-2.png'}
          alt=""
          width={236}
          height={767}
          className="absolute bottom-0 left-[0px] -z-[7] lg:hidden"
          quality={100}
        />
      </div>
      <div className="bg-woodsmoke-950/60 w-full h-full absolute top-0 left-0 z-[-8]"></div>
      <div className="absolute h-[410px] w-full top-0 overflow-hidden">
        <div className="w-[410px] h-[410px] rounded-full [background:radial-gradient(50%_50%_at_50%_50%,_#000_0%,_rgba(0,_0,_0,_0.00)_100%)] absolute left-1/2 -translate-x-1/2 top-[-200px] lg:hidden z-[-4]"></div>
      </div>
    </>
  );
};

export default BackgroundDecorator;
