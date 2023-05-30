import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import {
  deleteUser,
  getAllUsers,
  updateUser,
} from "../../services/userService";

const initialState = {
  loading: false,
  error: null,
  users: [],
};

// render user
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await getAllUsers("ALL");
  return response.data.users;
});

//add users
export const addUser = createAsyncThunk(
  "users/addUser",
  async (data, { rejectWithValue }) => {
    const {
      email,
      password,
      firstName,
      lastName,
      phonenumber,
      address,
      gender,
      roleId,
    } = data;
    try {
      const response = await axios.post(
        "http://localhost:8081/api/create-new-user",
        {
          email,
          password,
          firstName,
          lastName,
          phonenumber,
          address,
          gender,
          roleId,
        }
      );
      toast.success(response?.data.message);
      return response.data;
    } catch (e) {
      toast.error("Đăng ký thất bại");
      return rejectWithValue(e.response.data);
    }
  }
);

//Delete user
export const deleteUsers = createAsyncThunk(
  "users/deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      await deleteUser(userId);
      toast.success("Xóa người dùng thành công!");
      return userId;
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi xóa người dùng!");
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUsers = createAsyncThunk(
  "users/updateUser",
  async ({ userId, userData }, { rejectWithValue }) => {
    try {
      const response = await updateUser(
        userId,
        userData
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data });
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.users = [];
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      })
      // add new users
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.successMessage = null; //
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users.push(action.payload);
        state.successMessage = "Đăng ký thành công";
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.isLogin = false;
        // state.error = action.payload.message ;
      })
      //delete User
      .addCase(deleteUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUsers.rejected, (state) => {
        state.loading = false;
      })

      // Xử lý action updateUser.pending
      .addCase(updateUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // Xử lý action updateUser.fulfilled
      .addCase(updateUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // Cập nhật thông tin người dùng sau khi sửa vào state
        const updatedUser = action.payload;
        state.users = state.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
      })

      // Xử lý action updateUser.rejected
      .addCase(updateUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adminSlice.reducer;
