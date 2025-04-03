import { useState, useEffect } from 'react';

import { menuLinksLanding } from '@/data/menuLinks';

import { useRouter, usePathname } from 'next/navigation';

export const NavbarLanding = ({ isFooter = false }: { isFooter?: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('section1');
  const handleMenuClick = (sectionId: string) => {
    if (sectionId.includes('/')) {
      router.push(sectionId);
    } else {
      handleMenuClickTranslate(sectionId);
    }
  };
  const handleMenuClickTranslate = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const yOffset = 0;
      const y =
        sectionElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'section0',
        'section1',
        'section2',
        'section3',
        'section4',
        'section5',
        'section6',
        'section7',
      ];
      let visibleSection = '';

      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            visibleSection = sectionId;
          }
        }
      });

      if (visibleSection !== '') {
        setActiveSection(visibleSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${
        isFooter ? '' : 'max-lg:hidden'
      } flex items-center lg:justify-between`}
    >
      <ul className={`flex xl:gap-6 lg:gap-3`}>
        {pathname !== '/' ? (
          <div
            className="text-white h-11 text-3xl font-normal flex items-center cursor-pointer __className_02ffdd ![font-feature-settings:_'liga'_off,_'clig'_off] ![text-shadow:_0px_3.122px_0px_#000] ![-webkit-text-stroke-width:_3.15px] ![-webkit-text-stroke-color:_#000] !tracking-[-3px] !leading-none ![word-spacing:2px]"
            onClick={() => router.push('/')}
          >
            Home
          </div>
        ) : (
          <>
            {menuLinksLanding.map((link, i) => (
              <li
                key={i}
                className={`__className_02ffdd ![font-feature-settings:_'liga'_off,_'clig'_off] ![text-shadow:_0px_3.122px_0px_#000] ![-webkit-text-stroke-width:_3.15px] ![-webkit-text-stroke-color:_#000] !tracking-[-3px] !leading-none ![word-spacing:2px]`}
                onClick={() =>
                  handleMenuClick(
                    link.root ? link.root : `${link.href.replace('#', '')}`
                  )
                }
              >
                <div className="text-white h-11 text-3xl font-normal flex items-center cursor-pointer">
                  {link.name}
                </div>
              </li>
            ))}
          </>
        )}
      </ul>
    </nav>
  );
};
