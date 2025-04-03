import Scene from '../Scene';
import Image from 'next/image';
const Landing = () => {
  return (
    <div className="w-full h-full">
      {/* <Scene /> */}
      <video
        className="w-full h-full object-cover absolute top-0 left-0 z-[-10]"
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
      />
      <Image
        src={'/static/images/background-decorator2.png'}
        alt=""
        width={2360}
        height={1916}
        className="absolute top-0 left-0 -z-[8] object-cover w-full h-full mix-blend-multiply"
      />
      <div className="bg-[#151515] bg-opacity-60 w-full h-full absolute top-0 left-0 z-[-11]"></div>
      <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-center px-4 container py-12">
        <h1 className="text-8xl font-normal leading-tight w-full text-center text-white">
          Converge Meets <span className="font-bold">Acceleration</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              Accelera is a next-generation CDP protocol on Converge, offering
              borrowers superior strategy composability with user-set interest
              rates, instant liquidity, efficient leverage, and native
              stablecoin yields.
            </p>

            <div className="mt-8">
              <div className="space-y-2">
                <h2 className="text-5xl md:text-6xl font-bold">542,897</h2>
                <p className="text-4xl md:text-5xl font-bold">Users</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xl font-medium mb-4">
                Backed by <span className="font-bold">The Best</span>
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="bg-white/10 px-4 py-2 rounded-lg">Ethena</div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">Liquity</div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">ORBS</div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">Paradigm</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute top-0 right-0 bg-background/80 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">
                Season <span className="text-primary">Zero</span>
              </h3>
              <button className="btn-primary w-full">JOIN THE WAITLIST</button>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="text-2xl font-bold">2,938</p>
                  <p className="text-sm text-white/70">HOLDERS</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">$5.96B</p>
                  <p className="text-sm text-white/70">TVL</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 border">
          <button className="w-10 h-10 border border-white/30 flex items-center justify-center rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button className="w-10 h-10 border border-white/30 flex items-center justify-center rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
