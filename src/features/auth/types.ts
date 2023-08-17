export interface IAuth {
  id: number | null;
  name: string | null;
  email: string | null;
  token: string | null;
  errors: string | null;
  user: IUser | null;
  permission: string[] | null;
  tokenType: string | null;
}

export interface IAuthState {
  loading: boolean;
  auth: IAuth | null;
  error: string | null;
  tokenType: string | null;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  role_id?: any | null;
}

export interface IAccessToken {
  exp: number;
}
