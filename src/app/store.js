import { configureStore } from '@reduxjs/toolkit';
import authSlice, { checkToken } from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth : authSlice,
  },
});
store.dispatch(checkToken());