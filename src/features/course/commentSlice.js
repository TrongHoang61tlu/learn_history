import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createNewComment, getAllComment } from "../../services/commentService";
import { toast } from "react-toastify";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await getAllComment("ALL");
    return response.data.comment;
  }
);

export const addComment = createAsyncThunk(
    "comments/addComment",
    async (data, { rejectWithValue }) => {
      try {
        const response = await createNewComment(data)   
        toast.success(response?.data.message);
        return response.data;
      } catch (e) {
        toast.error("Thêm bình luận thất bại");
        return rejectWithValue(e.response.data);
      }
    }
  );

const initialState = {
  comments: [],
  status: "idle",
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments.push(action.payload);
      })
      .addCase(addComment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;
