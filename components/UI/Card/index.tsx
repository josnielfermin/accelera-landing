import cn from '@/library/utils/cn';
import { useMemo } from 'react';
import Image from 'next/image';

interface CardProps {
  value: string | number;
  title: string;
  image?: string;
  icon?: React.ReactNode;
  className?: string;
}

const Card = ({ value, title, image, icon, className }: CardProps) => {
  const cardClassName = useMemo(() => {
    return cn(
      'rounded-[20px] bg-[#1A201C] relative flex flex-col min-w-[105px] lg:min-w-[150px] w-full pt-7 px-4 max-xxs:px-2 lg:pb-[17px] pb-3 gap-4',
      className
    );
  }, [className]);

  return (
    <div className={cardClassName}>
      {icon ? (
        <>{icon}</>
      ) : (
        <Image
          src={image || ''}
          alt="usde"
          width={28}
          height={28}
          className="absolute right-2 top-2 rounded-full"
        />
      )}
      <div className="text-woodsmoke-50 text-2xl font-normal">{value}</div>
      <div className="text-[10px] font-normal text-woodsmoke-50 whitespace-nowrap">
        {title}
      </div>
    </div>
  );
};

export default Card;
