import SplineViewer from '@/components/Landing/Spline';

const Accelera = () => {
  return (
    <div className="absolute h-[789px] w-[789px] max-2xl:w-[550px] max-2xl:h-[550px] max-[1180px]:w-[480px] max-[1180px]:h-[480px] lg:bottom-[-50px] max-lg:top-[140px] lg:right-[300px] right-0 mix-blend-lighten 2xl:overflow-hidden max-lg:overflow-hidden">
      <div className="rounded-full blur-[250px] w-[960px] h-[960px] [background:radial-gradient(rgba(0,_0,_0,_0.90),_rgba(0,_0,_0,_0))] absolute bottom-0 left-1/2 -translate-x-1/2 z-[1]"></div>
      <SplineViewer
        url="https://prod.spline.design/fA3jwoAwjAbouj0u/scene.splinecode"
        className="w-full h-full object-contain relative z-[2] bottom-[-50px] max-2xl:bottom-[40px] max-[1180px]:bottom-[100px] max-[1870px]:right-10 max-lg:top-0 max-lg:right-0 max-sm:-right-20 max-xs:-right-40 max-xxs:-right-52 max-[280px]:-right-60"
      />
      {/* <video
        className="w-full h-full relative z-[2] bottom-[-30px] max-2xl:bottom-[80px] max-[1180px]:bottom-[140px]"
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
      </video> */}
    </div>
  );
};

export default Accelera;
