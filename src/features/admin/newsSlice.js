import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createNews, getAllNews, updateNews } from "../../services/newsService";
import { deleteNews } from "../../services/newsService";

const initialState = {
  loading: false,
  error: null,
  news: [],
};

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async () => {
    const response = await getAllNews("ALL");
    return response.data.news;
  }
);

export const addNews = createAsyncThunk(
  "news/addNews",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createNews(data)   
      toast.success(response?.data.message);
      return response.data;
    } catch (e) {
      toast.error("Thêm tin tức thất bại");
      return rejectWithValue(e.response.data);
    }
  }
);



export const EditNews = createAsyncThunk(
  "news/updateNews",
  async ({ newsId, newsData }, { rejectWithValue }) => {

    try {
      const response = await updateNews(newsId, newsData);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data });
    }
  }
);

export const deleteNew = createAsyncThunk(
  "news/deleteNews",
  async (newsId, { rejectWithValue }) => {
    try {
      await deleteNews(newsId);
      toast.success("Xóa tin tức thành công");
      return newsId;
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi xóa tin tức!");
      return rejectWithValue(error.response.data);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.news = [];
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch courses";
      })

        // add news
        .addCase(addNews.pending, (state) => {
          state.loading = true;
          state.successMessage = null; //
        })
        .addCase(addNews.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.news.push(action.payload);
        })
        .addCase(addNews.rejected, (state, action) => {
          state.loading = false;
          state.isLogin = false;
          // state.error = action.payload.message ;
        })

        //delete news
        .addCase(deleteNew.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteNew.fulfilled, (state, action) => {
          state.loading = false;
          state.news = state.news.filter((news) => news.id !== action.payload);
        })
        .addCase(deleteNew.rejected, (state) => {
          state.loading = false;
        })

        //update course
        .addCase(EditNews.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(EditNews.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          const updatedNews = action.payload;
          state.news = state.news.map((news) =>
            news.id === updatedNews.id ? updatedNews : news
          );
        })
        .addCase(EditNews.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
  },
});

export default newsSlice.reducer;
