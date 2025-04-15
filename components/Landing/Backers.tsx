'use client';
import { useRef, useEffect, useState, Fragment } from 'react';
import Image from 'next/image';
import { BACKERS } from '@/components/Landing/Data';
import useMediaQuery from '@/hooks/useMediaQuery';
const Backers = () => {
  const [backers, setBackers] = useState(BACKERS);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDesktopLarge = useMediaQuery('(min-width: 1740px)');

  const handleRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 160, behavior: 'smooth' });
    }
  };
  const handleRighttryotra = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 160, behavior: 'smooth' });
    }
    console.log('first');
  };

  const handleLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -160, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;

      const maxScrollLeft = el.scrollWidth - el.offsetWidth;
      const isAtEnd = el.scrollLeft + el.offsetWidth >= el.scrollWidth - 1; // margen de error

      if (isAtEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 160, behavior: 'smooth' });
      }
    }, 2000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="relative mt-8 flex flex-col max-lg:items-center max-lg:mx-auto gap-3 xl2:max-w-[600px] max-w-[500px]">
      <div className="w-[200%] absolute top-0 right-0 h-[1px] bg-white/50 bg-blend-overlay z-[-9] max-lg:hidden overflow-hidden">
        <div className="w-[70%] h-40 rounded-full blur-sm [background:radial-gradient(circle,_rgba(92,_222,_102,_1)_20%,_rgba(92,_222,_102,_0.43)_70%)] absolute top-1/2 -translate-y-1/2  max-lg:hidden left-1/2 -translate-x-1/2 animate-horizontal-light z-[100] bg-blend-overlay"></div>
      </div>
      <div className="w-[1px] absolute top-0 right-0 h-[600px] bg-white/50 bg-blend-overlay z-[-9] max-lg:hidden"></div>
      <div className="absolute -top-2.5 -left-[58px] bg-[#D9D9D9] w-5 h-5 max-lg:hidden"></div>
      <div className="absolute -bottom-14 -right-2.5 bg-[#D9D9D9] w-5 h-5 max-lg:hidden"></div>
      <div className="flex items-center justify-between w-full">
        <p className="xl2:text-xl text-lg font-normal text-white">
          Backed by <span className="font-bold">The Best</span>
        </p>
        <div className="flex items-center cursor-pointer relative z-10">
          <div
            className="flex items-center justify-center py-1 xl2:px-9 px-7 border hover:border-woodsmoke-950 transition-all group hover:bg-pastel-green-400"
            onClick={handleLeft}
          >
            <div className="icon-arrow-left xl2:text-2xl text-xl text-white group-hover:text-black"></div>
          </div>
          <div
            className="flex items-center justify-center py-1 xl2:px-9 px-7 border hover:border-woodsmoke-950 transition-all group hover:bg-pastel-green-400"
            onClick={handleRight}
          >
            <div className="icon-arrow-right xl2:text-2xl text-xl text-white group-hover:text-black"></div>
          </div>
        </div>
      </div>
      <div
        className="flex overflow-scroll gap-6 items-center w-full xl2:max-w-xl max-w-md hide-scroll scroll-smooth mx-auto"
        ref={scrollRef}
      >
        {backers.map((item, index) => (
          <div
            key={index}
            className="min-w-[86px] w-auto flex-shrink-0 min-h-[32px] relative select-none"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={isDesktopLarge ? item.width : item.width * 0.8}
              height={isDesktopLarge ? item.height : item.height * 0.8}
              className={`${item.loaded ? 'opacity-100' : 'opacity-0'}`}
              quality={100}
              onLoad={() => {
                backers[index].loaded = true;
                setBackers([...backers]);
              }}
            />
            <div
              className={`flex items-center justify-center border border-pastel-green-400 w-[120px] h-[32px] text-white text-sm max-lg:text-xs bg-woodsmoke-950 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all ${
                item.loaded ? 'opacity-0' : 'opacity-100 animate-pulse'
              }`}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backers;
