'use client';
import Link from 'next/link';
import Image from 'next/image';
import { menuLinksLanding } from '@/data/menuLinks';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/UI';
const NavItem = ({
  href,
  name,
  isActive,
}: {
  href: string;
  name: string;
  isActive: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`text-white text-sm font-normal py-2 px-8 border-[#5CDE66] border-b hover:border-opacity-100 transition-all ${
        isActive ? 'border-opacity-100' : 'border-opacity-0'
      }`}
    >
      {name}
    </Link>
  );
};
const Header = () => {
  const pathname = usePathname();
  return (
    <header className="w-full px-4 md:px-8 lg:px-16 relative h-full overflow-hidden">
      <div className="w-[120%] absolute bottom-0 left-[-10%] h-[1.5px] bg-white/50 bg-blend-overlay z-[-10]"></div>
      <div className="flex items-center justify-between h-full container">
        <Link href="/" className="flex items-center relative pr-10 h-full">
          <Image
            src="/static/images/header/accelera-logo.png"
            alt="Accelera Logo"
            width={158}
            height={47}
            className=""
          />
          <div className="w-[1px] absolute -top-10 right-0 h-[400%] bg-white/50 bg-blend-overlay z-[-10]"></div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-white my-6">
          {menuLinksLanding.map((link) => (
            <NavItem
              key={link.name}
              href={link.href}
              name={link.name}
              isActive={pathname === link.href}
            />
          ))}
        </nav>

        <Button href="/app" variant="primary">
          Launch App
        </Button>
      </div>
    </header>
  );
};

export default Header;
