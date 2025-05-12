import { combineReducers } from '@reduxjs/toolkit';

import user from './user/reducer';

const reducer = combineReducers({
  user,
});

export default reducer;
