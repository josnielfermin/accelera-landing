'use client';
import Image from 'next/image';
import Link from 'next/link';
import SocialSidebar from '@/components/layout/Sidebar';
import { usePathname } from 'next/navigation';
import { SOCIALS } from '@/components/Landing/Data';

const LandingFooter = () => {
  return (
    <footer className="w-full lg:py-6 pt-6 lg:px-16 z-[-5] ">
      <div className="flex flex-col gap-2 justify-end items-end max-lg:items-center container">
        <div className="text-xs text-white z-[5] max-lg:mb-7 max-lg:mt-4">
          All rights reserved © Accelera
        </div>
        <div className="lg:hidden w-full relative z-[5]">
          <SocialSidebar />
        </div>
      </div>
    </footer>
  );
};
const ProductFooter = () => {
  return (
    <footer className="w-full lg:py-6 pt-6 lg:px-16 bg-[#2F2F2F]/30 border-t border-[#3B0A8F]/0 backdrop-blur-[6.44px] relative z-[2] max-lg:hidden">
      <div className="flex gap-2 justify-between items-center container">
        <Link
          href="/"
          className="flex items-center max-xxs:justify-end max-xxs:w-full relative pr-10 h-full  max-lg:ml-0"
        >
          <Image
            src="/static/images/header/accelera-logo.png"
            alt="Accelera Logo"
            width={94}
            height={27.5}
            className="max-lg:w-[111px] max-lg:h-[32px] relative z-[3]"
            quality={100}
            priority={true}
          />
        </Link>
        <div className="text-xs text-white z-[5] max-lg:mb-7 max-lg:mt-4">
          All rights reserved © Accelera
        </div>
        <div className="flex items-center gap-4 z-10">
          {SOCIALS.map(({ href, iconClass }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#171717] rounded-full flex items-center justify-center xl2:h-10 xl2:w-10 w-[25px] h-[25px] border-[0.93px] border-woodsmoke-800 group hover:bg-pastel-green-400 transition-all"
            >
              <span
                className={`${iconClass} text-white text-[10px] group-hover:text-woodsmoke-950`}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function Footer() {
  const pathname = usePathname();
  return <>{pathname === '/' ? <LandingFooter /> : <ProductFooter />}</>;
}
