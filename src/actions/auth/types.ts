import { Action } from 'redux';

export enum actionTypes {
  PURGE = 'persist/PURGE',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  AUTH_USER_LOADED = 'AUTH_USER_LOADED',
}

export interface IAccessToken {
  exp: number;
}

export interface IAuthState {
  user?: IUser;
  tokenType?: string;
  accessToken?: string;
  refreshToken?: string;
}

export interface IAccessTokenResponse {
  token_type: string;
  access_token: string;
  refresh_token: string;
}

interface ILogoutResult {
  (): null;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IUserResponse {
  data: IUser;
}

export interface ILoginSuccessAction extends Action {
  type: actionTypes.LOGIN_SUCCESS;
  response: IAccessTokenResponse;
}

export interface ILogoutAction extends Action {
  type: actionTypes.PURGE;
  result: ILogoutResult;
}

export interface IUserLoadedAction extends Action {
  type: actionTypes.AUTH_USER_LOADED;
  response: IUserResponse;
}

export type AuthAction =
  | ILoginSuccessAction
  | IUserLoadedAction
  | ILogoutAction;
