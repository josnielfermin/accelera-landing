import Image from 'next/image';
import { USERS } from '@/components/Landing/Data';
import Backers from '@/components/Landing/Backers';

const LeftColumn = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-lg 2xl:text-xl max-lg:text-sm max-sm:text-xs text-white max-w-2xl relative leading-[1.1] lg:ml-5">
        Accelera is a next-generation CDP protocol on Converge, offering
        borrowers superior strategy composability with user-set interest rates,
        instant liquidity, efficient leverage, and native stablecoin yields.
        <div className="border-[#D9D9D9] border backdrop-blur-[2px] bg-[#D9D9D9]/20 w-[70px] h-[70px] absolute -left-[103px] top-1/2 -translate-y-1/2 rounded-full max-lg:hidden"></div>
      </div>

      <div className="mt-8 max-lg:mt-[250px] max-[280px]:mt-[290px] flex items-center gap-10 max-[1180px]:gap-2 max-[1180px]:flex-col max-[1180px]:items-start">
        <div className="lg:space-y-2 text-white">
          <h2 className="text-3xl 2xl:text-6xl font-normal leading-none">
            542,897
          </h2>
          <p className="text-3xl 2xl:text-6xl font-bold leading-none">Users</p>
        </div>
        <div className="flex items-center max-[1180px]:ml-4 relative z-[5]">
          {USERS.map((user) => (
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

      <div className="w-full max-lg:hidden">
        <Backers />
      </div>
    </div>
  );
};

export default LeftColumn;
