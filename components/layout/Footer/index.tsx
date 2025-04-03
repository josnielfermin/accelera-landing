import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 md:px-8 lg:px-16 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Image
            src="/images/logo.svg"
            alt="Accelera Logo"
            width={120}
            height={48}
            className="h-8 w-auto"
          />
        </div>

        <div className="text-sm text-white/70">
          All rights reserved © Accelera
        </div>
      </div>
    </footer>
  );
}
