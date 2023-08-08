import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { loginRequest, loginSuccess, loginFailure } from './authSlice';
import { apiURL } from 'config';

function* loginSaga(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const response = yield call(axios.post, `${apiURL}/login`, action.payload);
    yield put(loginSuccess(response.data));
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export function* authSaga(): Generator<any, void, any> {
  yield takeLatest(loginRequest.type, loginSaga);
}
