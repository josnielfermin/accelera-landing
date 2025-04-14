'use client';
import { useState } from 'react';
const Input = () => {
  const [value, setValue] = useState('');
  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
        title="Email"
        type="email"
        className={`relative w-full bg-[#1D1D1D] py-4 pl-8 pr-2 text-sm font-normal transition-all text-white placeholder:text-[#5D5D5D]`}
        placeholder={'Your Email Address'}
        minLength={10}
        spellCheck="false"
      />
    </div>
  );
};

export default Input;
