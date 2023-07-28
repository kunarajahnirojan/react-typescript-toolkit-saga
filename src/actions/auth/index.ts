/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiURL } from 'config';
import axios from 'axios';

//
import { Post } from './types';

const POSTS_BASE_URL = `${apiURL}/posts`;

export const createPost = (post: Post): Promise<Post> =>
  axios.post(POSTS_BASE_URL, post);
