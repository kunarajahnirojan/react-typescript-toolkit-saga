import { Store } from 'redux';
import axios from 'axios';
// import { apiURL } from 'config/env';
// import { accessTokenWithType } from 'store/auth/selector';
// import { AxiosInstance } from 'axios';

const instance: any = axios.create({
  //   baseURL: apiURL,
  headers: {
    Accept: 'text/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export function createAxios({ getState }: Store) {
  instance.interceptors.request.use(
    (config: any) => {
      const { useAuth, ...headers } = config.headers;

      if (useAuth !== false) {
        const state = getState();
        // headers.Authorization = accessTokenWithType(state);
      }
      return { ...config, headers };
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
}

export default instance;
