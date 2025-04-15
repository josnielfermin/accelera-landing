'use client';

import { useEffect, useRef, useState } from 'react';

const TitleAnimation = () => {
  const [entry1, setEntry1] = useState(true);
  const [entry2, setEntry2] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setEntry1((prev) => !prev);
      setEntry2((prev) => !prev);
    }, 2000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative h-[8rem] overflow-hidden flex items-center justify-center max-lg:justify-start w-full max-lg:max-w-[90%] xl2:top-10">
      <h1
        className={`max-lg:text-[26px] text-3xl min-[1070px]:text-4xl xl:text-5xl xl2:text-6xl font-normal text-white absolute transition-all duration-500 h-[96px]`}
      >
        <div
          className={`${
            entry1 ? 'animate-slide-up-in' : 'animate-slide-up-out'
          } absolute left-1/2 -translate-x-1/2 w-full h-full flex max-lg:flex-col max-lg:items-start max-lg:justify-start items-center justify-center whitespace-nowrap lg:gap-6`}
        >
          <div>Converge Meets</div>
          <div className="font-bold">Acceleration</div>
        </div>
        <div
          className={`${
            entry2 ? 'animate-slide-up-in' : 'animate-slide-up-out'
          } absolute left-1/2 -translate-x-1/2 w-full h-full flex max-lg:flex-col max-lg:items-start max-lg:justify-start items-center justify-center whitespace-nowrap lg:gap-6`}
        >
          <div>Instant Liquidity,</div>{' '}
          <div className="font-bold">On Your Terms</div>
        </div>
      </h1>
    </div>
  );
};

export default TitleAnimation;
