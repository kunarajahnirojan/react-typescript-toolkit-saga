// import axios, { AxiosRequestConfig } from 'axios';
// import { GetState } from 'redux';
// import { apiURL } from 'config';
// import { accessTokenWithType } from 'selectors/auth';

// const instance = axios.create({
//   baseURL: apiURL,
//   headers: {
//     Accept: 'text/json',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   },
// });

// interface CustomAxiosConfig extends Omit<AxiosRequestConfig, 'headers'> {
//   useAuth?: boolean;
//   headers?: Record<string, string>;
// }

// export function createAxios({ getState }: { getState: GetState }) {
//   instance.interceptors.request.use(
//     (config: any) => {
//       const { useAuth, ...headers } = config.headers;

//       if (useAuth !== false) {
//         const state = getState();
//         headers.Authorization = accessTokenWithType(state);
//       }
//       return { ...config, headers };
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );
// }

// export default instance;

export {};
