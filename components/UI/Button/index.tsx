"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import cn from "@/library/utils/cn";
import useActiveConnectionDetails from "@/library/hooks/web3/useActiveConnectionDetails";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { FALLBACK_CHAIN_ID } from "@/library/constants/default-chain-info";
import { useSwitchChain } from "wagmi";
import isSupportedChain from "@/library/utils/is-supported-chain";

interface ButtonProps {
  variant?: "default" | "primary" | "secondary" | "tertiary";
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  icon?: string;
  isComing?: boolean;
  walletConfig?: {
    needWalletConnected: boolean;
    needSupportedChain: boolean;
  };
}

const AnimateFill = ({
  variant = "primary",
}: {
  variant: "default" | "primary" | "secondary" | "tertiary";
}) => {
  return (
    <>
      {variant === "primary" && (
        <>
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
  variant = "primary",
  icon,
  isComing = false,
  walletConfig,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    default: "button-default",
    primary: "button-primary",
    secondary: "button-secondary",
    tertiary: "button-tertiary",
  }[variant];

  const disabledClasses = "opacity-40 cursor-not-allowed";

  const mergeClassName = cn(
    "button",
    "group",
    variantClasses,
    { [disabledClasses]: disabled },
    className
  );
  const { isConnected, chainId } = useActiveConnectionDetails();
  const { openConnectModal } = useConnectModal();
  const { switchChain } = useSwitchChain();
  const ensureWalletConnected = () =>
    !isConnected && walletConfig?.needWalletConnected;
  const ensureChainSupported = () =>
    !isSupportedChain(chainId) && walletConfig?.needSupportedChain;

  const handleClick = () => {
    if (ensureWalletConnected()) {
      openConnectModal && openConnectModal();
      return;
    }
    if (ensureChainSupported()) {
      switchChain({ chainId: FALLBACK_CHAIN_ID });
      return;
    }
    onClick && onClick();
  };

  const textContent = isComing ? (
    <div className="relative flex items-center justify-center">
      <span
        className={cn(
          "transition-opacity duration-300",
          "absolute",
          "group-hover:opacity-0",
          "opacity-100"
        )}
      >
        {children}
      </span>

      <span
        className={cn(
          "transition-opacity duration-300",
          "opacity-0 group-hover:opacity-100"
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
      <Link
        href={href}
        onClick={handleClick}
        className={mergeClassName}
        {...props}
      >
        {textContent}
        <AnimateFill variant={variant} />
      </Link>
    );
  }

  return (
    <button onClick={handleClick} className={mergeClassName} {...props}>
      {textContent}
      <AnimateFill variant={variant} />
    </button>
  );
};

export default Button;
