import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'lib/axios';
import { apiURL } from 'config';

import { loginRequest, loginSuccess, loginFailure } from './authSlice';

function* loginSaga(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const response = yield call(axios.post, `${apiURL}logIn`, action.payload);
    yield put(loginSuccess(response.data));
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export function* authSaga(): Generator<any, void, any> {
  yield takeLatest(loginRequest.type, loginSaga);
}
