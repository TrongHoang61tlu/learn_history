import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import {  getAllCourseByUser } from "../../services/courseService";

const initialState = {
  loading: false,
  error: null,
  courses: [],
};

export const fetchCoursesByUser = createAsyncThunk(
  "coursesbyuser/fetchCoursesByUser",
  async () => {
    const response = await getAllCourseByUser();
    return response.data.data;
  }
);



const courseByUserSlice = createSlice({
  name: "courseByUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoursesByUser.pending, (state) => {
        state.loading = true;
        state.courses = [];
      })
      .addCase(fetchCoursesByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCoursesByUser.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch courses";
      })

       
  },
});

export default courseByUserSlice.reducer;

