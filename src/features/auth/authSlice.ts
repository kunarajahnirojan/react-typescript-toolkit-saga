// src/store/auth/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  loading: boolean;
  user: IUser | null;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) {
      debugger;
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<IUser>) {
      debugger;
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
    logout(state) {
      state.loading = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
