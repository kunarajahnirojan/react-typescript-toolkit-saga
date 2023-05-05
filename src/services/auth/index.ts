// import axios from 'config/axios';
import type { IPosts } from 'models/store';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UserResponse extends IPosts {
  //
}

// export const getPosts = () => axios.get<UserResponse>('/posts');

export const getPosts = () =>
  Promise.resolve([
    {
      id: 3,
      title: 'Silver',
    },
    {
      id: 2,
      title: 'Gold',
    },
    {
      id: 1,
      title: 'diamond',
    },
  ]);
