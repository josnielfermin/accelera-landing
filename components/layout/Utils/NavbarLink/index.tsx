import ComponentVisible from '@/hooks/useVisible';

import { Link } from '@/interfaces';

const NavbarLinkLanding = ({
  link,
  isFooter,
}: {
  link: Link;
  isFooter: boolean;
}) => {
  // const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  return (
    <div className="relative">
      <div
        className={`text-white h-11 text-3xl font-normal flex items-center cursor-pointer`}
      >
        {/* {link.icon && <span className="mr-2">{link.icon}</span>} */}
        {link.name}
      </div>
    </div>
  );
};

export default NavbarLinkLanding;
