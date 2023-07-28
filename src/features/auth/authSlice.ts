import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define your auth state interface
interface AuthState {
  loading: boolean;
  token: string | null;
  user: any | null; // Replace `any` with the actual user type
  tokenType: string;
  // Add other properties if needed
}

const initialState: AuthState = {
  loading: false,
  token: null,
  user: null,
  tokenType: 'Bearer',
  // Initialize other properties if needed
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ token: string; user: any }>
    ) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    // Add other auth-related reducers here if needed
  },
});

// Export the auth action creators
export const { loginSuccess } = authSlice.actions;

export default authSlice.reducer;
