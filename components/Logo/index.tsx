import Link from 'next/link';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

const LogoHeader = () => {
  const isSM = useMediaQuery('(min-width: 640px)');
  return (
    <Link href={'/'}>
      <div className="max-md:hidden text-navy-blue-900">
        <Image
          src={'/static/images/header/linus-white.svg'}
          alt="Linus"
          className="w-[86px] h-[86px] max-sm:w-[65px] max-sm:h-[65px] relative z-10"
          width={isSM ? 86 : 65}
          height={isSM ? 86 : 65}
          loading="eager"
          unoptimized={true}
        />
      </div>
      <div className="md:hidden text-navy-blue-900">
        <Image
          src={'/static/images/header/linus-white.svg'}
          alt="Linus"
          className="w-[51px] h-[51px] max-sm:w-[65px] max-sm:h-[65px] relative z-10"
          width={isSM ? 86 : 65}
          height={isSM ? 86 : 31}
          loading="eager"
          unoptimized={true}
        />
      </div>
    </Link>
  );
};

export { LogoHeader };
