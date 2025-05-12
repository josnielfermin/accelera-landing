import { Address } from 'viem';
export interface Reward {
  address: Address;
  token: string;
  balance: number;
  points: number;
  bonus: string;
  action: string;
}
