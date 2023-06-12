import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { createNewCouserContent, deleteCourseContent, getAllCourseContent, updateCourseContent } from "../../services/course-contentService";

const initialState = {
  loading: false,
  error: null,
  courseContent: [],
};

export const fetchCourseContent = createAsyncThunk(
  "courseContent/fetchCourseContent",
  async () => {
    const response = await getAllCourseContent("ALL");
    return response.data.coursesContent;
  }
);

export const addCourseContent = createAsyncThunk(
  "courseContent/addCourseContent",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createNewCouserContent(data)   
      toast.success(response?.data.message);
      return response.data;
    } catch (e) {
      toast.error("Thêm bài học thất bại");
      return rejectWithValue(e.response.data);
    }
  }
);



export const EditContent = createAsyncThunk(
  "courseContent/updateCourseContent",
  async ({ courseContentId, courseContentData }, { rejectWithValue }) => {

    try {
      const response = await updateCourseContent(courseContentId, courseContentData);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data });
    }
  }
);

export const deleteContent = createAsyncThunk(
  "courseConten/deleteCourseContent",
  async (courseContentId, { rejectWithValue }) => {
    try {
      await deleteCourseContent(courseContentId);
      toast.success("Xóa bài học thành công");
      return courseContentId;
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi xóa bài học!");
      return rejectWithValue(error.response.data);
    }
  }
);

const courseContent = createSlice({
  name: "courseContent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourseContent.pending, (state) => {
        state.loading = true;
        state.courseContent = [];
      })
      .addCase(fetchCourseContent.fulfilled, (state, action) => {
        state.loading = false;
        state.courseContent = action.payload;
      })
      .addCase(fetchCourseContent.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch courses";
      })

        // add news
        .addCase(addCourseContent.pending, (state) => {
          state.loading = true;
          state.successMessage = null; //
        })
        .addCase(addCourseContent.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.courseContent.push(action.payload);
        })
        .addCase(addCourseContent.rejected, (state, action) => {
          state.loading = false;
          state.isLogin = false;
          // state.error = action.payload.message ;
        })

        //delete news
        .addCase(deleteContent.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteContent.fulfilled, (state, action) => {
          state.loading = false;
          state.courseContent = state.courseContent.filter((courseContent) => courseContent.id !== action.payload);
        })
        .addCase(deleteContent.rejected, (state) => {
          state.loading = false;
        })

        //update course
        .addCase(EditContent.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(EditContent.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          const updatedContent = action.payload;
          state.courseContent = state.courseContent.map((content) =>
          content.id === updatedContent.id ? updatedContent : content
          );
        })
        .addCase(EditContent.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
  },
});

export default courseContent.reducer;
