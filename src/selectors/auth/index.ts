// src/store/auth/authSelectors.ts

import { createSelector } from '@reduxjs/toolkit';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import moment from 'moment';
import { RootState } from 'store/reducer';

interface AuthState {
  loading: boolean;
  token: string | null;
  user: IUser | null;
  tokenType: string;
  permission: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  phoneNumber: number;
  verified: boolean;
}

const auth = (state: RootState): AuthState => state.auth;

export const accessToken = createSelector(auth, (state) => state.token);

export const user = createSelector(auth, (state) => state.user);

export const tokenType = createSelector(auth, (state) => state.tokenType);

export const permission = createSelector(auth, (state) => state.permission);

export const expiresIn = createSelector(accessToken, (token) => {
  if (token) {
    const decodedToken = jwtDecode<JwtPayload>(token);
    return decodedToken.exp;
  }
  return null;
});

export const accessTokenWithType = createSelector(
  [tokenType, accessToken],
  (type, token) => {
    return type && token ? `${type} ${token}` : null;
  }
);

export const isTokenValid = createSelector(expiresIn, (expires) => {
  return expires ? moment.unix(expires).isSameOrAfter(moment()) : false;
});

export const isAuthorized = createSelector(
  [isTokenValid, user],
  (valid, userObj) => {
    return valid && userObj?.id !== undefined;
  }
);
