import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createNewVideo, deleteVideo, getAllVideo, updateVideo } from "../../services/videoService";

const initialState = {
  loading: false,
  error: null,
  video: [],
};

export const fetchVideo = createAsyncThunk(
  "video/fetchVideo",
  async () => {
    const response = await getAllVideo("ALL");
    return response.data.video;
  }
);

export const addVideo = createAsyncThunk(
  "video/addVideo",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createNewVideo(data)   
      toast.success(response?.data.message);
      return response.data;
    } catch (e) {
      toast.error("Thêm video thất bại");
      return rejectWithValue(e.response.data);
    }
  }
);



export const EditVideo = createAsyncThunk(
  "video/updateVideo",
  async ({ videoId, videoData }, { rejectWithValue }) => {

    try {
      const response = await updateVideo(videoId, videoData);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data });
    }
  }
);

export const deleteIsVideo = createAsyncThunk(
  "video/deleteVideo",
  async (videoId, { rejectWithValue }) => {
    try {
      await deleteVideo(videoId);
      toast.success("Xóa video thành công");
      return videoId;
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi xóa video!");
      return rejectWithValue(error.response.data);
    }
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.loading = true;
        state.video = [];
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch courses";
      })

        // add new video
        .addCase(addVideo.pending, (state) => {
          state.loading = true;
          state.successMessage = null; //
        })
        .addCase(addVideo.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.video.push(action.payload);
        })
        .addCase(addVideo.rejected, (state, action) => {
          state.loading = false;
          state.isLogin = false;
          // state.error = action.payload.message ;
        })

        //delete video
        .addCase(deleteIsVideo.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteIsVideo.fulfilled, (state, action) => {
          state.loading = false;
          state.video = state.video.filter((video) => video.id !== action.payload);
        })
        .addCase(deleteIsVideo.rejected, (state) => {
          state.loading = false;
        })

        //update video
        .addCase(EditVideo.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(EditVideo.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          const updatedVideo = action.payload;
          state.video = state.video.map((video) =>
            video.id === updatedVideo.id ? updatedVideo : video
          );
        })
        .addCase(EditVideo.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
  },
});

export default videoSlice.reducer;
