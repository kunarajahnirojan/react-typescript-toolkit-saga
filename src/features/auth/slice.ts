import { createSlice } from '@reduxjs/toolkit';
import type { Slice } from '@reduxjs/toolkit';
import type { IPosts } from 'models/store';

export interface postState {
  posts: IPosts[];
}

const initialState: postState = {
  posts: [],
};

export const postSlice: Slice<postState> = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, action) => {
      return {
        ...state,
        posts: action.payload,
      };
    },
  },
});

export const { getPosts } = postSlice.actions;
export default postSlice.reducer;
