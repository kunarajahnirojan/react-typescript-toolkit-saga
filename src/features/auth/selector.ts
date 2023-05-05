import { createDraftSafeSelector } from '@reduxjs/toolkit';
import type { State } from 'store';

const postState: any = (state: State) => state.post;

export const getPostsSelector = createDraftSafeSelector(
  postState,
  (state) => state.posts
);
