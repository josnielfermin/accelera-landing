import React from 'react';

interface Props {
  value: string;
  onInput: (value: string) => void;
  prefix?: React.ReactNode;
  postfix?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  resetBgColors?: boolean;
  onlyNumbers?: boolean;
  precision?: number;
  calculational?: boolean;
}

// Escapa caracteres especiales para que no rompan la RegExp
function escapeRegExp(string: string, calculational: boolean): string {
  const regex = calculational ? /[*?^{}()|[\]\\]/g : /[.*+?^${}()|[\]\\]/g;
  return string.replace(regex, '\\$&');
}

// Genera la regex dinámica según precision y si es modo cálculo
function makeRegex(precision: number, calculational: boolean): RegExp {
  let base = calculational ? '([$%]?([0-9]+' : '([0-9]*';

  if (precision > 0) {
    let precisionStr = '(\\.?';
    for (let i = 0; i < precision; i++) {
      precisionStr += '[0-9]?';
    }
    precisionStr += ')?';
    if (calculational) {
      base +=
        precisionStr +
        '(?:\\s*([-+])\\s*([$%]?([0-9]+' +
        precisionStr +
        ')?)?)?)?)?';
    } else {
      base += precisionStr + ')';
    }
    return new RegExp(base, 'g');
  } else {
    if (calculational) {
      base += '(?:\\s*([-+])\\s*([$%]?([0-9]+)?)?)?)?)?';
    } else {
      base += ')';
    }
    return new RegExp(base, 'g');
  }
}

const inputRegex = /^(\d*(?:[.])?\d*)$/;
const calculationalInputRegex =
  /^([$%]?\d*(\.?\d*)?)(?:\s*([-+])\s*([$%]?\d*(\.?\d*)?)?)?$/;

function Input({
  value,
  onInput,
  prefix,
  postfix,
  className,
  inputClassName,
  resetBgColors,
  onlyNumbers = false,
  precision,
  calculational = false,
  ...rest
}: Props & any): React.JSX.Element {
  const enforcer = (inputValue: string) => {
    const targetRegex = calculational ? calculationalInputRegex : inputRegex;
    const cleanedInput = escapeRegExp(inputValue, calculational);

    if (inputValue !== '' && targetRegex.test(cleanedInput)) {
      const regex =
        precision !== undefined ? makeRegex(precision, calculational) : null;
      if (regex) {
        const match = inputValue.match(regex);
        if (match) return onInput(match[0]);
      } else {
        return onInput(inputValue);
      }
    } else if (inputValue === '') {
      return onInput('');
    }
    // Si no pasa la validación, no hacemos nada
  };

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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const val = e.target.value.replace(/,/g, '.');
          onlyNumbers ? enforcer(val) : onInput(val);
        }}
        className={`
          text-xs placeholder:text-woodsmoke-600 group-hover:placeholder:text-pastel-green-50 placeholder:select-none text-pastel-green-50 bg-transparent border-0  outline-0 w-0 grow-[1]
          ${inputClassName}
        `}
        inputMode={onlyNumbers ? 'decimal' : 'text'}
        type="text"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        pattern={
          onlyNumbers
            ? calculational
              ? '^([$%]?\\d*\\.?\\d+)(?:\\s*([-+])\\s*([$%]?\\d*\\.?\\d+)?)?$'
              : '^[0-9]*[.,]?[0-9]*$'
            : undefined
        }
        {...rest}
      />
      {postfix}
    </label>
  );
}

export default Input;
