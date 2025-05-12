import SplineViewer from '@/components/Landing/Spline';
interface AcceleraProps {
  isLandingPage: boolean;
}

const Accelera = ({ isLandingPage = false }: AcceleraProps) => {
  return (
    <div
      className={`absolute z-[2] h-[649px] w-[649px] max-lg:w-[560px] max-lg:h-[560px] bottom-[-50px] max-lg:top-[120px] max-xs:top-[120px] max-xxs:top-[100px] lg:right-[330px] xl2:right-[380px] right-0 mix-blend-lighten xl2:overflow-hidden max-lg:overflow-hidden max-2xl:opacity-55 max-xl:opacity-15 max-[360px]:opacity-55 max-[360px]:z-[1] max-lg:opacity-100`}
    >
      {/* <div className="rounded-full blur-[250px] w-[960px] h-[960px] [background:radial-gradient(rgba(0,_0,_0,_0.90),_rgba(0,_0,_0,_0))] absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1]"></div> */}
      {/* <SplineViewer
        url="https://prod.spline.design/fA3jwoAwjAbouj0u/scene.splinecode"
        className="w-full h-full object-contain relative z-[1] bottom-[-50px] max-xl2:bottom-[85px] max-[1870px]:right-10 max-lg:top-0 max-xxs:top-6 max-lg:right-0 max-sm:-right-20 max-xs:-right-40 max-xxs:-right-52 max-[280px]:-right-60"
      /> */}
      <video
        className="w-full h-full object-contain relative max-[1870px]:right-10 max-lg:top-0 max-xxs:top-6 max-xl:right- max-lg:right-0 max-sm:-right-20 max-xs:-right-40 max-xxs:-right-52 max-[280px]:-right-60 max-lg:hidden"
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
      <video
        className="w-full h-full object-contain relative bottom-[-30px] max-2xl:bottom-[20px] max-[1870px]:right-10 max-lg:top-0 max-xxs:top-6 max-lg:right-0 max-sm:-right-20 max-xs:-right-40 max-xxs:-right-52 max-[280px]:-right-60 lg:hidden"
        style={{ mixBlendMode: 'lighten' }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={'/static/images/landing/accelera-mobile.mp4'}
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
};

export default Accelera;
