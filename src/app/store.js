import { configureStore } from '@reduxjs/toolkit';
import authSlice, { checkToken } from '../features/auth/authSlice';
import adminSlice from '../features/admin/adminSlice';

export const store = configureStore({
  reducer: {
    auth : authSlice,
    admin : adminSlice,
  },
});
store.dispatch(checkToken());