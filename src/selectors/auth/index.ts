import { createDraftSafeSelector } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import { RootState } from 'store/reducer';
import { IAccessToken } from 'features/auth/types';

const auth = (state: RootState) => {
  return state.auth.auth;
};

export const accessToken = createDraftSafeSelector(
  auth,
  (state) => state?.token
);

export const user = createDraftSafeSelector(auth, (state) => state?.user);

export const tokenType = createDraftSafeSelector(
  auth,
  (state) => state?.tokenType
);

export const tokenExpiresIn = createDraftSafeSelector(accessToken, (token) =>
  token ? jwtDecode<IAccessToken>(token).exp : null
);

export const accessTokenWithType = createDraftSafeSelector(
  [tokenType, accessToken],
  (type, token) => (type && token ? `${type} ${token}` : null)
);

export const isTokenValid = createDraftSafeSelector(tokenExpiresIn, (expires) =>
  expires ? moment.unix(expires).isSameOrAfter(moment()) : false
);

export const isAuthorized = createDraftSafeSelector(
  [isTokenValid, user],
  (valid, userObj) => valid && userObj?.id !== undefined
);

export const permission = createDraftSafeSelector(
  auth,
  (state) => state?.permission
);
