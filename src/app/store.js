import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authSlice, { checkToken } from '../features/auth/authSlice';
import adminSlice from '../features/admin/adminSlice';
import courseSlice from '../features/admin/courseSlice';
import newsSlice from '../features/admin/newsSlice';
import courseByUserSlice from '../features/course/courseByUserSlice';
import courseContentSlice from '../features/admin/course-contentSlice';
import videoSlice from '../features/admin/videoSlice';

export const store = configureStore({
  reducer: {
    auth : authSlice,
    admin : adminSlice,
    course : courseSlice,
    news : newsSlice,
    courseContent : courseContentSlice,
    coursebyuser : courseByUserSlice,
    video : videoSlice,
  },
});
store.dispatch(checkToken());