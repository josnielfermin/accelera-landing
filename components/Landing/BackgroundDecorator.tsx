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
        className="absolute top-0 left-0 -z-[10] object-cover w-full h-full mix-blend-overlay"
      />
      <Image
        src={'/static/images/background-decorator2.png'}
        alt=""
        width={2360}
        height={1916}
        className="absolute top-0 left-0 -z-[5] object-cover w-full h-full mix-blend-multiply"
      />
    </>
  );
};

export default BackgroundDecorator;
