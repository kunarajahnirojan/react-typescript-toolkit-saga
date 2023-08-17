// src/store/rootSaga.ts
import { all } from 'redux-saga/effects';
import { addonSaga } from 'features/addons/sagas';
import { authSaga } from 'features/auth/sagas';

export function* rootSaga() {
  yield all([addonSaga(), authSaga()]);
}
