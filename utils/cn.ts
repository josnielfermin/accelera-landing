import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useState, useEffect, useRef } from 'react';

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
export default cn;
