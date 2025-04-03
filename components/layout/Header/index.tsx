import Link from 'next/link';
import Image from 'next/image';
import { menuLinksLanding } from '@/data/menuLinks';
const NavItem = ({ href, name }: { href: string; name: string }) => {
  return (
    <Link href={href} className="text-white text-sm font-normal">
      {name}
    </Link>
  );
};
const Header = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 lg:px-16">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/static/images/header/accelera-logo.png"
            alt="Accelera Logo"
            width={158}
            height={47}
            className=""
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-white">
          <Link href="/" className="nav-link active">
            HOME
          </Link>
          <Link href="/season-zero" className="nav-link">
            SEASON ZERO
          </Link>
          <Link href="/docs" className="nav-link">
            DOCS
          </Link>
        </nav>

        <Link href="/app" className="btn-primary">
          Launch App
        </Link>
      </div>
    </header>
  );
};

export default Header;
