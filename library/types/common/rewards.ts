import { Address } from 'viem';
export interface Reward {
  id: number;
  address: Address;
  token: string;
  balance: number;
  points: number;
  bonus: string;
  action: string;
}
