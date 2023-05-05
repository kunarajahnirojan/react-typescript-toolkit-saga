import { createAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getPosts as getPostsAPI } from 'services';
import { getPosts } from './slice';

export const getUserssAsync = createAction('users/getPostsAsync');

function* getPostsSaga() {
  let posts = [];
  try {
    posts = yield call(() => getPostsAPI());
  } catch (error) {
    //
  }

  yield put(getPosts(posts));
}

function* postsSaga() {
  yield takeLatest(getUserssAsync, getPostsSaga);
}

export default postsSaga;
