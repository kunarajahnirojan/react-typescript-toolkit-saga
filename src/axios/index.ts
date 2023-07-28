// import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
// import { apiURL } from 'config/env';
// import store, { RootState } from 'path/to/your/redux/store';
// import { accessTokenWithType } from '';

// interface CustomAxiosConfig extends Omit<AxiosRequestConfig, 'headers'> {
//   useAuth?: boolean;
// }

// const instance: AxiosInstance = axios.create({
//   baseURL: apiURL,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   },
// });

// instance.interceptors.request.use(
//   (config: CustomAxiosConfig) => {
//     const { useAuth, ...restConfig } = config;

//     if (useAuth !== false) {
//       const state: RootState = store.getState();
//       restConfig.headers = {
//         ...restConfig.headers,
//         Authorization: accessTokenWithType(state),
//       };
//     }

//     return restConfig;
//   },
//   (error: AxiosError) => {
//     return Promise.reject(error);
//   }
// );

// export default instance;

export {};
