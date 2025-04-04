import Scene from '../Scene';
import { Button } from '@/components/UI';
import Image from 'next/image';
const users = [
  {
    id: 1,
    image: '/static/images/landing/user-1.png',
  },
  {
    id: 2,
    image: '/static/images/landing/user-2.png',
  },
  {
    id: 3,
    image: '/static/images/landing/user-3.png',
  },
  {
    id: 4,
    image: '/static/images/landing/user-4.png',
  },
  {
    id: 5,
    image: '/static/images/landing/user-5.png',
  },
  {
    id: 6,
    image: '/static/images/landing/user-6.png',
  },
];
const Landing = () => {
  return (
    <div className="w-full h-full">
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
        className="absolute top-0 left-0 -z-[10] object-cover w-full h-full mix-blend-overlay"
      />
      <Image
        src={'/static/images/background-decorator2.png'}
        alt=""
        width={2360}
        height={1916}
        className="absolute top-0 left-0 -z-[5] object-cover w-full h-full mix-blend-multiply"
      />
      <div className="bg-[#151515] bg-opacity-60 w-full h-full absolute top-0 left-0 z-[-11]"></div>
      <section className="relative w-full min-h-[calc(100vh-153px)] flex flex-col container pl-12">
        <div className="w-[1px] absolute bottom-0 left-0 h-full bg-gradient-to-t from-pastel-green-400/50 to-white/20 bg-blend-overlay z-[-10]"></div>
        <h1 className="text-8xl font-normal leading-tight w-full text-center text-white">
          Converge Meets <span className="font-bold">Acceleration</span>
        </h1>
        <div className="flex items-start justify-between gap-8 h-[558px] mt-10">
          <div className="flex flex-col justify-between h-full">
            <p className="text-lg md:text-xl text-white max-w-2xl relative ml-5">
              Accelera is a next-generation CDP protocol on Converge, offering
              borrowers superior strategy composability with user-set interest
              rates, instant liquidity, efficient leverage, and native
              stablecoin yields.
              <div className="border-[#D9D9D9] border backdrop-blur-[2px] bg-[#D9D9D9]/20 w-[70px] h-[70px] absolute -left-[103px] top-1/2 -translate-y-1/2 rounded-full"></div>
            </p>

            <div className="mt-8 flex items-center gap-10">
              <div className="space-y-2 text-white">
                <h2 className="text-4xl md:text-6xl font-normal">542,897</h2>
                <p className="text-4xl md:text-6xl font-bold">Users</p>
              </div>
              <div className="flex items-center">
                {users.map((user) => (
                  <div
                    key={user.id}
                    className="rounded-full bg-white/10 flex items-center justify-center -ml-4"
                  >
                    <Image
                      src={user.image}
                      alt=""
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xl font-normal mb-4 text-white">
                Backed by <span className="font-bold">The Best</span>
              </p>
              <div className="flex overflow-scroll gap-6 items-center max-w-xl">
                <div className="bg-white/10 px-4 py-2 rounded-lg">Ethena</div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">Liquity</div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">ORBS</div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">Paradigm</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="bg-transparent rounded-none flex flex-col items-center">
              <Scene />
              <h3 className="text-4xl font-normal mb-4 text-white text-center">
                Season <span className="font-bold">Zero</span>
              </h3>
              <Button variant="primary" className="whitespace-nowrap w-[90%]">
                JOIN THE WAITLIST
              </Button>

              <div className="grid grid-cols-2 mt-6 text-white relative w-full">
                <div className="w-full absolute top-0 left-0 h-[1px] bg-pastel-green-400/50 bg-blend-overlay z-[-10]"></div>
                <div className="flex flex-col items-center py-3 !px-6 relative">
                  <div className="w-[1px] absolute bottom-0 right-[-1.5px] h-full bg-gradient-to-t from-pastel-green-400/50 to-white/20 bg-blend-overlay z-[-10]"></div>
                  <p className="text-3xl font-normal">2,938</p>
                  <p className="text-lg tracking-[5.4px] font-bold">HOLDERS</p>
                </div>
                <div className="flex flex-col items-center py-3 !px-6">
                  <p className="text-3xl font-normal">$5.96B</p>
                  <p className="text-lg tracking-[5.4px] font-bold">TVL</p>
                </div>
              </div>
            </div>
            <div className="w-[1px] absolute bottom-0 right-0 h-full bg-gradient-to-t from-pastel-green-400/50 to-white/20 bg-blend-overlay z-[-10]"></div>
            <div className="w-[1px] absolute bottom-0 left-0 h-full bg-gradient-to-t from-pastel-green-400/50 to-white/20 bg-blend-overlay z-[-10]"></div>
            <div className="w-full absolute bottom-0 left-0 h-[1px] bg-pastel-green-400/50 bg-blend-overlay z-[-10]"></div>
            <div className="absolute -top-2.5 -left-2.5 bg-[#D9D9D9] w-5 h-5"></div>
            <div className="absolute -bottom-2.5 -right-2.5 bg-[#D9D9D9] w-5 h-5"></div>
          </div>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 border">
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
        </div> */}
      </section>
    </div>
  );
};

export default Landing;
