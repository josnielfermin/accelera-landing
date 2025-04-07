'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { BACKERS } from '@/components/Landing/Data';
const Backers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 160, behavior: 'smooth' });
    }
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
    <div className="relative mt-8 flex flex-col gap-3 max-w-[600px]">
      <div className="w-[200%] absolute top-0 right-0 h-[1px] bg-gradient-to-r from-pastel-green-400/30 to-white/20 bg-blend-overlay z-[-10]"></div>
      <div className="w-[1px] absolute top-0 right-0 h-[200%] bg-gradient-to-t from-pastel-green-400/30 to-white/20 bg-blend-overlay z-[-10]"></div>
      <div className="absolute -top-2.5 -left-[58px] bg-[#D9D9D9] w-5 h-5"></div>
      <div className="absolute -bottom-14 -right-2.5 bg-[#D9D9D9] w-5 h-5"></div>
      <div className="flex items-center justify-between w-full">
        <p className="text-xl font-normal text-white">
          Backed by <span className="font-bold">The Best</span>
        </p>
        <div className="flex items-center cursor-pointer">
          <div
            className="flex items-center justify-center py-1 px-9 border hover:border-woodsmoke-950 transition-all group hover:bg-pastel-green-400"
            onClick={handleLeft}
          >
            <div className="icon-arrow-left text-2xl text-white group-hover:text-black"></div>
          </div>
          <div
            className="flex items-center justify-center py-1 px-9 border hover:border-woodsmoke-950 transition-all group hover:bg-pastel-green-400"
            onClick={handleRight}
          >
            <div className="icon-arrow-right text-2xl text-white group-hover:text-black"></div>
          </div>
        </div>
      </div>
      <div
        className="flex overflow-scroll gap-6 items-center w-full max-w-xl hide-scroll scroll-smooth mx-auto"
        ref={scrollRef}
      >
        {BACKERS.map((item, index) => (
          <Image
            src={item.image}
            alt={item.name}
            key={index}
            width={120}
            height={32}
            className="h-[32px] w-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Backers;
