import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  isLogin: false,
  loading: false,
  error: null,
  successMessage: null,
  errorMessage: null, // Thêm trường errorMessage
  roleId: null,
  firstName : null,
  lastName : null,
  image: null
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const checkToken = () => (dispatch) => {
  const token = getToken();
  if (token) {
    dispatch(authSlice.actions.setLogin());
  } else {
    dispatch(authSlice.actions.setLogout());
  }
};

const saveAccessTokenToLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

const removeAccessTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("roleId");
  localStorage.removeItem("email");
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ data, callback }) => {
    const { email, password } = data;
    try {
      const response = await axios.post("http://localhost:8081/api/login", {
        email,
        password,
      });
      if (response.data && response.data.errCode !== 0) {
        throw new Error(response.data.message);
      } else if (response.data && response.data.errCode === 0) {
        saveAccessTokenToLocalStorage(response.data.user.token);
        localStorage.setItem("roleId", response.data.user.roleId);
        localStorage.setItem("name", response.data.user.firstName );
        localStorage.setItem("email", response.data.user.email );
        localStorage.setItem("avatar", response.data.user.image );
        toast.success("Đăng nhập thành công")
        callback(response.data.user.roleId);
        return {
          user: response.data,
          roleId: response.data.user.roleId, // Lưu trữ thông tin role từ API response
        };
      }
      return response.user;
    } catch (error) {
      console.log(error.message);
      throw error; //
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (callback) => {
  await removeAccessTokenFromLocalStorage();
  callback();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin(state) {
      state.isLogin = true;
    },
    setLogout(state) {
      state.isLogin = false;
    },
    clearErrorMessage(state) {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // login user
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.errorMessage = null; // Đặt lại giá trị errorMessage khi bắt đầu gọi API login
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogin = true;
        state.successMessage = "Login successful";
        state.roleId = action.payload.roleId; // Lưu trữ role vào state
        state.firstName = action.payload.user.user.firstName;
        state.lastName = action.payload.user.user.lastName; 
        state.image = action.payload.user.user.image;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isLogin = false;
        state.roleId = null;
        state.errorMessage = "Tài khoản hoặc mật khẩu không chính xác"; // Lưu trữ thông báo lỗi
      })
      // logout

      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.isLogin = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
export const { clearErrorMessage } = authSlice.actions;
