import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNewCouser, deleteCourse, getAllCourse, updateCourse } from "../../services/courseService";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  courses: [],
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await getAllCourse("ALL");
    return response.data.courses;
  }
);

export const addCourse = createAsyncThunk(
  "users/addUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createNewCouser(data)   
      toast.success(response?.data.message);
      return response.data;
    } catch (e) {
      toast.error("Thêm khóa học thất bại");
      return rejectWithValue(e.response.data);
    }
  }
);



export const EditCourse = createAsyncThunk(
  "course/updateCourse",
  async ({ courseId, courseData }, { rejectWithValue }) => {

    try {
      const response = await updateCourse(courseId, courseData);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data });
    }
  }
);

export const deleteCourses = createAsyncThunk(
  "course/deleteCourse",
  async (courseId, { rejectWithValue }) => {
    try {
      await deleteCourse(courseId);
      toast.success("Xóa khóa học thành công");
      return courseId;
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi xóa khóa học!");
      return rejectWithValue(error.response.data);
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.courses = [];
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch courses";
      })

        // add new users
        .addCase(addCourse.pending, (state) => {
          state.loading = true;
          state.successMessage = null; //
        })
        .addCase(addCourse.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.courses.push(action.payload);
        })
        .addCase(addCourse.rejected, (state, action) => {
          state.loading = false;
          state.isLogin = false;
          // state.error = action.payload.message ;
        })

        //delete course
        .addCase(deleteCourses.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteCourses.fulfilled, (state, action) => {
          state.loading = false;
          state.courses = state.courses.filter((course) => course.id !== action.payload);
        })
        .addCase(deleteCourses.rejected, (state) => {
          state.loading = false;
        })

        //update course
        .addCase(EditCourse.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(EditCourse.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          const updatedCourse = action.payload;
          state.courses = state.courses.map((course) =>
            course.id === updatedCourse.id ? updatedCourse : course
          );
        })
        .addCase(EditCourse.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
  },
});

export default courseSlice.reducer;
