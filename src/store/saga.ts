// src/store/rootSaga.ts

import { all } from 'redux-saga/effects';
import { addonSaga } from 'features/addons/sagas';

export function* rootSaga() {
  yield all([
    addonSaga(),
    // ... other sagas if any
  ]);
}
