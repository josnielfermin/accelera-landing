'use client';
import Link from 'next/link';
import Image from 'next/image';
import { menuLinksLanding } from '@/data/menuLinks';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/UI';
import ComponentVisible from '@/hooks/useVisible';
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
      className={`text-white text-sm font-normal py-2 px-8 max-lg:px-16 border-[#5CDE66] border-b hover:border-opacity-100 transition-all z-[10] ${
        isActive ? 'border-opacity-100' : 'border-opacity-0'
      }`}
    >
      {name}
    </Link>
  );
};
const Header = () => {
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);
  const pathname = usePathname();
  return (
    <header className="w-full px-4 md:px-8 lg:px-16 relative h-full overflow-hidden">
      <div className="w-[120%] absolute bottom-0 left-[-10%] h-[1.5px] bg-white/50 bg-blend-overlay z-[-10]"></div>
      <div
        className="flex items-center justify-between max-lg:justify-center h-full container max-lg:h-[72px]"
        ref={ref}
      >
        <div
          className="icon-menu-1 text-xl text-white absolute top-1/2 -translate-y-1/2 left-5 rounded-full p-4 lg:hidden z-[10]"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        ></div>
        <div
          className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-[150vw] z-[9000] h-[150vw] transition-all lg:hidden ${
            isVisible
              ? 'visible max-lg:translate-y-[78%] max-[890px]:translate-y-[73%] max-[725px]:translate-y-[66%] max-[580px]:translate-y-[60%] max-[490px]:translate-y-[52%] max-[405px]:translate-y-[44%] max-[345px]:translate-y-[34%]'
              : '[visibility:hidden] translate-y-[100%]'
          }`}
        >
          {/* <div
            className={`absolute top-0 left-0 w-full h-full bg-gradient-to-t from-woodsmoke-950/90 to-woodsmoke-950/0`}
          ></div> */}
          <div
            className="z-50 text-2xl cursor-pointer bg-woodsmoke-950 text-palm-green-400 [filter:drop-shadow(2px_0px_101.9px_rgba(92,_222,_102,_0.40))] rounded-full flex items-center justify-center transition-all absolute -top-16 left-1/2 -translate-x-1/2 w-12 h-12"
            onClick={() => setIsVisible(false)}
          >
            <span className="icon-x" />
          </div>
          <div
            className={`rounded-full w-[150vw] h-[150vw] flex flex-col gap-3 [box-shadow:2px_0px_101.9px_0px_rgba(92,_222,_102,_0.90)] absolute top-0 left-1/2 -translate-x-1/2 bottom-0 z-10`}
          ></div>
          <div
            className={`py-[22px] px-1.5 rounded-full bg-woodsmoke-950 w-[150vw] h-[150vw] flex flex-col gap-3 overflow-hidden relative`}
          >
            <Image
              src={'/static/images/header/decorator.png'}
              alt=""
              fill
              quality={100}
              className="mix-blend-overlay object-cover object-center z-[0]"
            />
            <nav className="flex flex-col items-center text-white my-6 gap-5">
              {menuLinksLanding.map((link) => (
                <NavItem
                  key={link.name}
                  href={link.href}
                  name={link.name}
                  isActive={pathname === link.href}
                />
              ))}
            </nav>
            <Button
              href="/app"
              variant="primary"
              className="max-w-[90%] w-[280px] mx-auto"
            >
              Launch App
            </Button>
          </div>
        </div>
        <Link
          href="/"
          className="flex items-center max-xxs:justify-end max-xxs:w-full relative pr-10 h-full"
        >
          <Image
            src="/static/images/header/accelera-logo.png"
            alt="Accelera Logo"
            width={158}
            height={47}
            className=""
          />
          <div className="w-[1px] absolute -top-10 right-0 h-[400%] bg-white/50 bg-blend-overlay z-[-10] max-lg:hidden"></div>
        </Link>

        <nav className="items-center space-x-8 text-white my-6 max-lg:hidden">
          {menuLinksLanding.map((link) => (
            <NavItem
              key={link.name}
              href={link.href}
              name={link.name}
              isActive={pathname === link.href}
            />
          ))}
        </nav>

        <Button href="/app" variant="primary" className="max-lg:hidden">
          Launch App
        </Button>
      </div>
    </header>
  );
};

export default Header;
