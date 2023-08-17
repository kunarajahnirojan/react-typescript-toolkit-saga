import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { apiURL } from 'config';

//
import {
  loadTitleRequest,
  loadTitleSuccess,
  loadTitleFail,
} from './addonSlice';

function* fetchTitles() {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBleGFtcGxlLmNvbSIsImp0aSI6Ijk4N2IxYTExLWVkNzYtNGFiYi05YWExLWY2YWY0NDY2NDY3YSIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJ1c2VyTmFtZSI6InN5c2FkbWluIiwiaWQiOiIxIiwibmJmIjoxNjkxNDg5Njg2LCJleHAiOjE2OTM1NjMyODYsImlhdCI6MTY5MTQ4OTY4Nn0.Ey5xa-lWZLrLUEHKjBH52StLm79SOF77kMt8mRfm1pw`,
  };

  try {
    const { data } = yield call(axios.get, `${apiURL}title`, { headers });
    yield put(loadTitleSuccess(data));
  } catch (error: any) {
    yield put(loadTitleFail(error.message));
  }
}

export function* addonSaga() {
  yield takeLatest(loadTitleRequest.type, fetchTitles);
}
