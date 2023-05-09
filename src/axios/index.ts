import axios from 'axios';
import { apiURL } from 'config';
import { accessTokenWithType } from 'store/auth/selector';
import { RootState } from 'store/rootReducer';

interface AxiosConfig {
  useAuth?: boolean;
}

interface RequestHeaders {
  Accept: string;
  'Content-Type': string;
  'Access-Control-Allow-Origin': string;
  Authorization?: string;
}

const instance: any = axios.create({
  baseURL: apiURL,
  headers: {
    Accept: 'text/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export function createAxios({ getState }: { getState: () => RootState }): void {
  instance.interceptors.request.use(
    (config: any) => {
      const { useAuth, ...headers } = config.headers as AxiosConfig &
        RequestHeaders;

      if (useAuth !== false) {
        const state = getState();
        headers.Authorization = accessTokenWithType(state);
      }

      return { ...config, headers };
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
}

export default instance;
