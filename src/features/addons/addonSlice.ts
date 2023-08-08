import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AddonState {
  loading: boolean;
  titles: string[];
  errors: string[];
}

const initialState: AddonState = {
  loading: false,
  titles: [],
  errors: [],
};

const addonSlice = createSlice({
  name: 'addon',
  initialState,
  reducers: {
    loadTitleRequest: (state) => {
      debugger;
      state.loading = true;
    },
    loadTitleSuccess: (state, action: PayloadAction<string[]>) => {
      debugger;
      state.loading = false;
      state.titles = action.payload;
    },
    loadTitleFail: (state, action: PayloadAction<string[]>) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export const { loadTitleRequest, loadTitleSuccess, loadTitleFail } =
  addonSlice.actions;

export default addonSlice.reducer;
