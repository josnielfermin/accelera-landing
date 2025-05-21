import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function requestWithRepeatDelay<T>(
  req: () => Promise<T>,
  repeat = 1,
  delayMs = 1000
): Promise<T> {
  for (let i = 0; true; i++) {
    try {
      return await req();
    } catch (e) {
      if (i < repeat) {
        await sleep(delayMs);
        continue;
      }
      throw e;
    }
  }
}
