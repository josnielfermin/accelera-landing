import SocialSidebar from '@/components/layout/Sidebar';

export default function Footer() {
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
}
