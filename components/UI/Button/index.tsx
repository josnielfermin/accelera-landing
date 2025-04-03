"use client"

import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import cn from '@/utils/cn'

interface ButtonProps {
  variant?: 'default' |'primary' | 'secondary' | 'tertiary'
  className?: string
  onClick?: () => void
  children?: React.ReactNode
  disabled?: boolean
  href?: string
  icon?: string
}

const Button = ({ children, onClick, href, disabled, className, variant = 'primary', icon, ...props }: ButtonProps) => {
  const variantClasses = {
    default: 'button-default',
    primary: 'button-primary',
    secondary: 'button-secondary',
    tertiary: 'button-tertiary',
  }[variant]

  const disabledClasses = 'opacity-40 cursor-not-allowed'

  const mergeClassName = cn('button', variantClasses, { [disabledClasses]: disabled }, className)

  const buttonContent = (
    <div className="flex items-center">
      {children}
      {icon && <Image className={`ml-2 icon-${variant}`} src={icon} alt=""/>}
    </div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={mergeClassName} {...props}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={mergeClassName} {...props}>
      {buttonContent}
    </button>
  )
}

export default Button



