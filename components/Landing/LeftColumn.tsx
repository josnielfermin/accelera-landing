'use client';
import { useState, useEffect, useMemo, use } from 'react';
import Image from 'next/image';
import { USERS } from '@/components/Landing/Data';
import Backers from '@/components/Landing/Backers';
import { Button } from '@/components//UI';

const LeftColumn = () => {
  const [users, setUsers] = useState(USERS);
  return (
    <div className="flex flex-col justify-between h-full max-[1865px]:ml-[72px] max-lg:ml-0">
      <div className="text-base xl2:text-lg max-lg:text-sm max-sm:text-xs text-white max-w-2xl relative !leading-[1.3] lg:ml-5">
        Accelera is a next-generation CDP protocol on Converge, offering
        borrowers superior strategy composability with user-set interest rates,
        instant liquidity, efficient leverage, and native stablecoin yields.
        <div className="border-[#D9D9D9] border backdrop-blur-[2px] bg-[#D9D9D9]/20 w-[70px] h-[70px] absolute -left-[103px] top-1/2 -translate-y-1/2 rounded-full max-lg:hidden"></div>
      </div>
      <Button variant="primary" className="!w-[180px] lg:hidden mt-2">
        Launch App
      </Button>
      {/* <div className="w-[102px] h-[27px] flex items-center justify-center cursor-pointer relative group lg:hidden mt-5">
        <div className="text-xs text-white font-semibold group-hover:text-pastel-green-400 transition-all">
          Launch App
        </div>
        <Image
          src={'/static/images/landing/button-border.png'}
          alt=""
          fill
          className="object-cover w-full h-full"
        ></Image>
      </div> */}

      <div className="flex flex-col items-start">
        <div className="mt-8 max-lg:mt-[250px] max-[280px]:mt-[290px] flex items-center gap-10 max-[1240px]:gap-2 max-[1240px]:flex-col max-[1240px]:items-start">
          <div className="xl2:space-y-2 text-white">
            <h2 className="text-2xl lg:text-3xl xl2:text-4xl font-normal !leading-none">
              542,897
            </h2>
            <p className="text-2xl lg:text-3xl xl2:text-4xl font-bold !leading-none">
              Users
            </p>
          </div>
          <div className="flex items-center max-[1240px]:ml-4 relative z-[5]">
            {users.map((user, index) => (
              <div
                key={user.id}
                className={`rounded-full bg-white/10 flex items-center justify-center -ml-4 max-xl2:-ml-2.5 group w-[50px] h-[50px] max-xl2:w-[40px] max-xl2:h-[40px] select-none ${
                  !user.imageLoaded && !user.imageHoverLoaded && 'animate-pulse'
                }`}
              >
                <Image
                  src={user.image}
                  alt=""
                  width={50}
                  height={50}
                  className={`rounded-full max-xl2:w-[40px] max-xl2:h-[40px] opacity-100 group-hover:!opacity-0 transition-all ${
                    user.imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => {
                    users[index].imageLoaded = true;
                    setUsers([...users]);
                  }}
                />
                <Image
                  src={user.imageHover}
                  alt=""
                  width={50}
                  height={50}
                  className={`rounded-full absolute max-xl2:w-[40px] max-xl2:h-[40px] opacity-0 group-hover:!opacity-100 transition-all top-0 group-hover:z-[10] group-hover:scale-110 ${
                    !user.imageLoaded && '[visibility:hidden]'
                  }`}
                  onLoad={() => {
                    users[index].imageLoaded = true;
                    setUsers([...users]);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-lg:hidden">
          <Backers />
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
