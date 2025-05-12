import { Address } from 'viem';
export interface User {
  address: Address;
  userName: string;
  balance: number;
  date: string;
}
