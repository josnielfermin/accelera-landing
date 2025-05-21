import { createReducer } from '@reduxjs/toolkit';
import { UserState } from './types';
import { setUsdeTokenState } from './actions';

export const initialState: UserState = {
  UsdeTokenState: {
    balance: null,
    allowance: null,
    lastUpdated: null,
  },
};

export default createReducer(initialState, (builder) => {
  builder.addCase(setUsdeTokenState, (state, action) => {
    state.UsdeTokenState.balance = action.payload.balance;
    state.UsdeTokenState.allowance = action.payload.allowance;
    state.UsdeTokenState.lastUpdated = action.payload.lastUpdated;
  });
});
