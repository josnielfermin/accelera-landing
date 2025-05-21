export interface UsdeTokenState {
  balance: bigint | null;
  allowance: bigint | null;
  lastUpdated: number | null;
}
export interface UserState {
  UsdeTokenState: UsdeTokenState;
}
