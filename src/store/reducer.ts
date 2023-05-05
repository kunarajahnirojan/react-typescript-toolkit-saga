import { combineReducers } from '@reduxjs/toolkit';
import { posts } from 'features/auth';

const rootReducers = combineReducers({
  posts,
});

export default rootReducers;
