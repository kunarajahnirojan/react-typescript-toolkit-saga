import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, PURGE } from 'redux-persist';
import persistConfig from 'persist';
import addonReducer from 'features/addons/addonSlice';

const appReducer = combineReducers({
  //   auth: persistReducer(persistConfig, authReducer),
  addon: addonReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === PURGE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;