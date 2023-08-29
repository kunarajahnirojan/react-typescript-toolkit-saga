import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import camelcaseKeys from 'camelcase-keys';

import { IAuth, IAuthState } from './types';

const initialState: IAuthState = {
  loading: false,
  auth: null,
  error: null,
  tokenType: 'Bearer',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<IAuth>) {
      state.loading = false;
      state.error = null;
      // camelcaseKeys({ ...action.payload });

      state.auth = camelcaseKeys({ ...action.payload });
    },

    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.loading = false;
      state.error = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
