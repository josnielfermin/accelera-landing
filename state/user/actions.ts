import { createAction } from '@reduxjs/toolkit';
import { UsdeTokenState } from './types';

export const setUsdeTokenState = createAction<UsdeTokenState>(
  'user/setUsdeTokenState'
);
