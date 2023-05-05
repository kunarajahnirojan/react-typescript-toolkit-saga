import { all } from 'redux-saga/effects';
import { postsSaga } from 'features/auth';

export default function* rootSaga() {
  yield all([postsSaga()]);
}
