import React from 'react';

// personal models
interface Props {
  value: string;
  onInput: (value: any) => void;
  prefix?: React.ReactNode;
  postfix?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  resetBgColors?: boolean;
}

function Input({
  value,
  onInput,
  prefix,
  postfix,
  className,
  inputClassName,
  resetBgColors,
  ...rest
}: Props & any): React.JSX.Element {
  return (
    <label
      className={`
        flex items-center gap-[10px] p-[15px_14px] ${className}
        ${
          resetBgColors
            ? ''
            : 'relative w-full h-[55px] border border-woodsmoke-800 hover:border-pastel-green-400 bg-transparent hover:bg-[#202722] group rounded-[100px] transition-all'
        }
      `}
    >
      {prefix}
      <input
        value={value}
        onInput={onInput}
        className={`
          text-xs placeholder:text-woodsmoke-600 group-hover:placeholder:text-pastel-green-50 placeholder:select-none text-pastel-green-50 bg-transparent border-0  outline-0 w-0 grow-[1]
          ${inputClassName}
        `}
        {...rest}
      />
      {postfix}
    </label>
  );
}

export default Input;
