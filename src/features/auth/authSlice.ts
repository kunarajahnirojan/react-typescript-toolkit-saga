// src/store/auth/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuth {
  id: number;
  name: string;
  email: string;
  token: string;
}

interface AuthState {
  loading: boolean;
  auth: IAuth | null;
  error: string | null;
  token: string | null;
}

const initialState: AuthState = {
  loading: false,
  auth: null,
  token: null,
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
    loginSuccess(state, action: PayloadAction<IAuth>) {
      debugger;
      state.loading = false;
      state.auth = action.payload;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.auth = null;
      state.error = action.payload;
    },
    logout(state) {
      state.loading = false;
      state.auth = null;
      state.error = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
