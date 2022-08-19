import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import instance from '../services/axios';
import { UserInfo, UserInfoResponse } from '../models/User';

interface AuthInfo {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface AuthState extends LoginResponse {
  errorMessage: string;
  userInfo: UserInfoResponse | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  accessToken: '',
  refreshToken: '',
  isAuth: false,
  errorMessage: '',
  userInfo: null,
};

export const loginUser = createAsyncThunk('auth/login', async (authInfo: AuthInfo) => {
  const result = await instance.post<LoginResponse>('auth/login', authInfo);
  return result.data;
});

export const registerUser = createAsyncThunk('auth/register', async (userInfo: UserInfo) => {
  const result = await axios.post<UserInfoResponse>(
    'http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/auth/register',
    userInfo,
  );
  return result.data;
});

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  const result = await instance.post('auth/log-out');
  return result.data;
});

export const checkAuth = createAsyncThunk('auth/check', async () => {
  const result = await instance.get('auth/refresh');
  return result.data;
});

export const getUserInfo = createAsyncThunk('users/id', async (id: string) => {
  // Axios суёт символы процента в параметры запроса, делаю свой serializer
  // чтобы этого не происходило
  const result = await axios.get(
    `http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/users/${id}`,
  );
  return result.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {});
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      // Сохраням refresh token как если бы пришлось получать новую
      // пару токенов при недействительности accessToken
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
      state.isAuth = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {});
    builder.addCase(registerUser.pending, (state, action) => {});
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      // Сохраняем id в localStorage, чтобы получать из него информацию о пользователе,
      // так как нет возможности получить id или информацию о пользователе иначе
      localStorage.setItem('id', action.payload.id);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(logoutUser.pending, () => {});
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.accessToken = '';
      state.refreshToken = '';
      state.errorMessage = '';
      state.userInfo = null;
      state.isAuth = false;
      localStorage.setItem('accessToken', '');
      localStorage.setItem('refreshToken', '');
    });
    builder.addCase(logoutUser.rejected, () => {
      throw new Error('Ошибка выхода');
    });
    builder.addCase(checkAuth.pending, () => {});
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('accessToken', action.payload.accessToken);
      state.isAuth = true;
    });
    builder.addCase(checkAuth.rejected, (state, action) => {});
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export default authSlice.reducer;
