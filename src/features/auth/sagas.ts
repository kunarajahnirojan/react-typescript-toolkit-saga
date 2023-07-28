// import { takeLatest, put } from 'redux-saga/effects';
// import axios from 'axios';
// import { apiURL } from 'config';
// import { loginSuccess } from './authSlice';

// function* loginSaga(action: {
//   type: string;
//   payload: any;
// }): Generator<void, void, any> {
//   try {
//     const response = yield axios.post(apiURL, action.payload);
//     yield put(loginSuccess(response.data));
//     // Add other logic for handling the login success case
//   } catch (error) {
//     // Handle login failure here if needed
//   }
// }

// export function* authSaga() {
//   yield takeLatest('types.LOGIN_SUCCESS', loginSaga);
//   // Add other sagas if needed
// }

export {};
