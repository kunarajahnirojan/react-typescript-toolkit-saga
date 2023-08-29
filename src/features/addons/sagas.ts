import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'lib/axios';
import { apiURL } from 'config';

//
import {
  loadTitleRequest,
  loadTitleSuccess,
  loadTitleFail,
} from './addonSlice';

function* fetchTitles() {
  try {
    const { data } = yield call(axios.get, `${apiURL}title`);
    yield put(loadTitleSuccess(data));
  } catch (error: any) {
    yield put(loadTitleFail(error.message));
  }
}

export function* addonSaga() {
  yield takeLatest(loadTitleRequest.type, fetchTitles);
}
