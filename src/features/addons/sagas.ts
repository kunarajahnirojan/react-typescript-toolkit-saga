import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  loadTitleRequest,
  loadTitleSuccess,
  loadTitleFail,
} from './addonSlice';

function* fetchTitles() {
  try {
    const { data } = yield call(axios.get, 'title');
    yield put(loadTitleSuccess(data));
  } catch (error) {
    yield put(loadTitleFail(error.message));
  }
}

export function* addonSaga() {
  yield takeLatest(loadTitleRequest.type, fetchTitles);
}
