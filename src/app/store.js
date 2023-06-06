import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authSlice, { checkToken } from '../features/auth/authSlice';
import adminSlice from '../features/admin/adminSlice';
import courseSlice from '../features/admin/courseSlice';

export const store = configureStore({
  reducer: {
    auth : authSlice,
    admin : adminSlice,
    course : courseSlice,
  },
});
store.dispatch(checkToken());