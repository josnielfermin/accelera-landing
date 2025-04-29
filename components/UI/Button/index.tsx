'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from '@/utils/cn';

interface ButtonProps {
  variant?: 'default' | 'primary' | 'secondary' | 'tertiary';
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  icon?: string;
  isComing?: boolean;
}

const AnimateFill = ({
  variant = 'primary',
}: {
  variant: 'default' | 'primary' | 'secondary' | 'tertiary';
}) => {
  return (
    <>
      {variant === 'primary' && (
        <>
          {/* <div className="w-[60%] absolute left-0 top-0 h-[60%] bg-pastel-green-400 z-[-1] group-hover:-translate-x-[100%] group-hover:-translate-y-[100%] transition-all"></div>
          <div className="w-[60%] absolute right-0 top-0 h-[60%] bg-pastel-green-400 z-[-1] group-hover:translate-x-[100%] group-hover:-translate-y-[100%] transition-all"></div>
          <div className="w-[60%] absolute left-0 bottom-0 h-[60%] bg-pastel-green-400 z-[-1] group-hover:-translate-x-[100%] group-hover:translate-y-[100%] transition-all"></div>
          <div className="w-[60%] absolute right-0 bottom-0 h-[60%] bg-pastel-green-400 z-[-1] transition-all group-hover:translate-x-[100%] group-hover:translate-y-[100%]"></div> */}
          <div className="w-5 h-5 absolute -left-[9px] -top-[13px] bg-pastel-green-400 group-hover:bg-pastel-green-500 z-[-1] rotate-[50deg]"></div>
          <div className="w-5 h-5 absolute -right-[9px] -bottom-[13px] bg-pastel-green-400 group-hover:bg-pastel-green-500 z-[-1] rotate-[50deg]"></div>
        </>
      )}
    </>
  );
};

const Button = ({
  children,
  onClick,
  href,
  disabled,
  className,
  variant = 'primary',
  icon,
  isComing = false,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    default: 'button-default',
    primary: 'button-primary',
    secondary: 'button-secondary',
    tertiary: 'button-tertiary',
  }[variant];

  const disabledClasses = 'opacity-40 cursor-not-allowed';

  const mergeClassName = cn(
    'button',
    'group',
    variantClasses,
    { [disabledClasses]: disabled },
    className
  );

  const textContent = isComing ? (
    <div className="relative flex items-center justify-center">
      <span
        className={cn(
          'transition-opacity duration-300',
          'absolute',
          'group-hover:opacity-0',
          'opacity-100'
        )}
      >
        {children}
      </span>

      <span
        className={cn(
          'transition-opacity duration-300',
          'opacity-0 group-hover:opacity-100'
        )}
      >
        Coming Soon
      </span>

      {icon && <Image className={`ml-2 icon-${variant}`} src={icon} alt="" />}
    </div>
  ) : (
    <div className="flex items-center">
      {children}
      {icon && <Image className={`ml-2 icon-${variant}`} src={icon} alt="" />}
    </div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={mergeClassName} {...props}>
        {textContent}
        <AnimateFill variant={variant} />
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={mergeClassName} {...props}>
      {textContent}
      <AnimateFill variant={variant} />
    </button>
  );
};

export default Button;
