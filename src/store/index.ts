import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistConfig from 'persist';
import createSagaMiddleware from 'redux-saga';

//
import rootReducer from './reducer';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([sagaMiddleware]),
});
sagaMiddleware.run(rootSaga);
export type State = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
