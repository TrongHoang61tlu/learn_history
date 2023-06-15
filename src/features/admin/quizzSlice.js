import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createQuizz, deleteQuizz, getAllQuizz, updateQuizz } from "../../services/quizzService";

const initialState = {
  loading: false,
  error: null,
  quizz: [],
};

export const fetchQuizz = createAsyncThunk(
  "quizz/fetchQuizz",
  async () => {
    const response = await getAllQuizz("ALL");
    return response.data.quizz;
  }
);

export const addQuizz = createAsyncThunk(
  "quizz/addQuizz",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createQuizz(data)   
      toast.success(response?.data.message);
      return response.data;
    } catch (e) {
      toast.error("Thêm câu hỏi thất bại");
      return rejectWithValue(e.response.data);
    }
  }
);



export const EditQuizz = createAsyncThunk(
  "quizz/updateQuizz",
  async ({ quizzId, quizzData }, { rejectWithValue }) => {
    console.log(quizzData);
    try {
      const response = await updateQuizz(quizzId, quizzData);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data });
    }
  }
);

export const deleteQuizzz = createAsyncThunk(
  "quizz/deleteQuizz",
  async (quizzId, { rejectWithValue }) => {
    try {
      await deleteQuizz(quizzId);
      toast.success("Xóa tin tức thành công");
      return quizzId;
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi xóa tin tức!");
      return rejectWithValue(error.response.data);
    }
  }
);

const quizzSlice = createSlice({
  name: "quizz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizz.pending, (state) => {
        state.loading = true;
        state.quizz = [];
      })
      .addCase(fetchQuizz.fulfilled, (state, action) => {
        state.loading = false;
        state.quizz = action.payload;
      })
      .addCase(fetchQuizz.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch courses";
      })

        // add quizz
        .addCase(addQuizz.pending, (state) => {
          state.loading = true;
          state.successMessage = null; //
        })
        .addCase(addQuizz.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.quizz.push(action.payload);
        })
        .addCase(addQuizz.rejected, (state, action) => {
          state.loading = false;
          state.isLogin = false;
          // state.error = action.payload.message ;
        })

        //delete quizz
        .addCase(deleteQuizzz.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteQuizzz.fulfilled, (state, action) => {
          state.loading = false;
          state.quizz = state.quizz.filter((quizz) => quizz.id !== action.payload);
        })
        .addCase(deleteQuizzz.rejected, (state) => {
          state.loading = false;
        })

        //update quizz
        .addCase(EditQuizz.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(EditQuizz.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          const updatedQuizz = action.payload;
          state.quizz = state.quizz.map((quizz) =>
          quizz.id === updatedQuizz.id ? updatedQuizz : quizz
          );
        })
        .addCase(EditQuizz.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
  },
});

export default quizzSlice.reducer;
