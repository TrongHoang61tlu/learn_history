import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createNewHistories, getAllHistories } from "../../services/historiesService";

export const fetchHistories = createAsyncThunk(
  "histories/fetchHistories",
  async () => {
    const response = await getAllHistories("ALL");
    return response.data.histories;
  }
);

export const addHistories = createAsyncThunk(
    "histories/addHistories",
    async (data, { rejectWithValue }) => {
      try {
        const response = await createNewHistories(data)   
        toast.success(response?.data.message);
        return response.data;
      } catch (e) {
        toast.error("Thêm dữ liệu thất bại");
        return rejectWithValue(e.response.data);
      }
    }
  );

const initialState = {
  histories: [],
  status: "idle",
  error: null,
};

const historiesSlice = createSlice({
  name: "histories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHistories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.histories = action.payload;
      })
      .addCase(fetchHistories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addHistories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addHistories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.histories.push(action.payload);
      })
      .addCase(addHistories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default historiesSlice.reducer;
