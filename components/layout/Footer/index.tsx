import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 md:px-8 lg:px-16 z-[-5]">
      <div className="flex flex-col md:flex-row justify-end items-center">
        <div className="text-sm text-white/70">
          All rights reserved © Accelera
        </div>
      </div>
    </footer>
  );
}
